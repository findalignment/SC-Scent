/**
 * Contact Form API Route
 * Rate limited to 3 requests per minute
 * Sends email to hello@santacruzscent.com
 */

import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, createRateLimitHeaders } from '@/lib/rate-limit';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend client
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Validation schema for contact form
const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100).trim(),
  email: z.string().email('Please enter a valid email address').toLowerCase(),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000).trim(),
});

export async function POST(request: NextRequest) {
  try {
    // Apply strict rate limiting (3 requests per minute)
    const rateLimitResult = await checkRateLimit(request, 'strict');

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please wait a moment before trying again.',
          retryAfter: rateLimitResult.reset 
            ? new Date(rateLimitResult.reset).toISOString()
            : undefined
        },
        {
          status: 429,
          headers: createRateLimitHeaders(rateLimitResult),
        }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validationResult = ContactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Invalid form data',
          details: validationResult.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message,
          }))
        },
        { 
          status: 400,
          headers: createRateLimitHeaders(rateLimitResult),
        }
      );
    }

    const { name, email, phone, message } = validationResult.data;

    // Send email using Resend
    if (!resend) {
      console.error('Resend API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please try contacting us on Instagram.' },
        { 
          status: 500,
          headers: createRateLimitHeaders(rateLimitResult),
        }
      );
    }

    const emailResult = await resend.emails.send({
      from: 'Santa Cruz Scent <noreply@santacruzscent.com>', // Update with your verified domain
      to: 'hello@santacruzscent.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0a1628; border-bottom: 3px solid #F59E0B; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0; padding: 20px; background: #f9fafb; border-left: 4px solid #0D9488;">
            <p style="margin: 0 0 10px 0;"><strong>From:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p style="margin: 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #0a1628;">Message:</h3>
            <p style="line-height: 1.6; color: #374151; white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #6b7280; font-size: 14px;">
            Sent from Santa Cruz Scent contact form<br>
            <a href="https://sc-scent.vercel.app">sc-scent.vercel.app</a>
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

From: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}

---
Sent from Santa Cruz Scent contact form
      `.trim(),
    });

    if (emailResult.error) {
      console.error('Failed to send email:', emailResult.error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try contacting us on Instagram.' },
        { 
          status: 500,
          headers: createRateLimitHeaders(rateLimitResult),
        }
      );
    }

    // Success response with rate limit headers
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We\'ll get back to you soon.' 
      },
      {
        status: 200,
        headers: createRateLimitHeaders(rateLimitResult),
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or contact us on Instagram.' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': request.nextUrl.origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
