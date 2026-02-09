/**
 * Example API Route with Rate Limiting
 * 
 * This is a template for creating rate-limited API routes.
 * Use this pattern when adding booking forms or other API endpoints.
 * 
 * DELETE THIS FILE if not needed, or rename/modify for your actual API.
 */

import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, createRateLimitHeaders } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    // Check rate limit (strict: 3 requests per minute)
    const rateLimitResult = await checkRateLimit(request, 'strict');

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
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

    // Parse request body
    const body = await request.json();

    // TODO: Add your API logic here
    // Example: Process form submission, send email, create booking, etc.

    // Return success with rate limit headers
    return NextResponse.json(
      { success: true, message: 'Request processed' },
      {
        status: 200,
        headers: createRateLimitHeaders(rateLimitResult),
      }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
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
