# Contact Form Setup Guide

This guide explains how to set up the contact form email delivery for Santa Cruz Scent.

## Overview

The contact form is rate-limited to **3 submissions per minute per IP address** and sends emails to `hello@santacruzscent.com` using [Resend](https://resend.com/).

## Features

✅ **Rate Limiting** - 3 requests per minute (strict tier)  
✅ **Email Validation** - Zod schema validation  
✅ **Spam Protection** - Field length limits and rate limiting  
✅ **User Feedback** - Success/error messages with status  
✅ **Accessible** - WCAG 2.1 AA compliant form  
✅ **Mobile Optimized** - Responsive design  

## Setup Instructions

### 1. Create a Resend Account

1. Go to [resend.com](https://resend.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key

1. In the Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Name it "Santa Cruz Scent Production"
4. Copy the API key (starts with `re_...`)

### 3. Verify Your Domain (Recommended)

For production use, verify your domain to send from `noreply@santacruzscent.com`:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter `santacruzscent.com`
4. Add the DNS records shown (MX, TXT, CNAME)
5. Wait for verification (can take up to 48 hours)

**Note:** Until domain verification is complete, emails will be sent from a Resend address but will show `hello@santacruzscent.com` as the reply-to address.

### 4. Add Environment Variables

#### Local Development

Add to `.env.local`:

```bash
RESEND_API_KEY=re_your_api_key_here
UPSTASH_REDIS_REST_URL=https://your-redis-url.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_redis_token_here
```

#### Vercel Production

1. Go to your Vercel project
2. Navigate to **Settings → Environment Variables**
3. Add the following variables:
   - `RESEND_API_KEY` (your Resend API key)
   - `UPSTASH_REDIS_REST_URL` (from Upstash dashboard)
   - `UPSTASH_REDIS_REST_TOKEN` (from Upstash dashboard)
4. Select **Production**, **Preview**, and **Development**
5. Click **Save**

### 5. Update the From Address (After Domain Verification)

Once your domain is verified, update the `from` field in `src/app/api/contact/route.ts`:

```typescript
from: 'Santa Cruz Scent <noreply@santacruzscent.com>',
```

If domain is not verified, you can use:

```typescript
from: 'Santa Cruz Scent <onboarding@resend.dev>',
```

### 6. Test the Form

1. Deploy to Vercel or run locally: `npm run dev`
2. Go to the Contact page (`/book`)
3. Fill out and submit the form
4. Check `hello@santacruzscent.com` for the email
5. Verify rate limiting by submitting 4 times quickly (4th should fail)

## Rate Limiting Details

The contact form uses the **strict** rate limit tier:

- **Limit:** 3 requests per minute per IP address
- **Purpose:** Prevent spam and abuse
- **Reset:** 60 seconds after first request
- **Headers:** `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`

### Testing Rate Limits

```bash
# This will succeed (1st request)
curl -X POST https://your-site.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Testing rate limit"}'

# Repeat 2 more times (should succeed)

# 4th request within 1 minute will return 429 Too Many Requests
```

## Email Template

Emails are sent in both HTML and plain text formats:

### HTML Email
- Branded header with border
- Formatted contact information
- Message with preserved line breaks
- Footer with site link

### Plain Text Email
- Clean, readable format
- All contact information
- Message text
- Site attribution

## Form Validation

The form validates:

- **Name:** 2-100 characters, trimmed
- **Email:** Valid email format, lowercase
- **Phone:** Optional, any format
- **Message:** 10-2000 characters, trimmed

## Error Handling

The API returns appropriate errors:

- **400 Bad Request** - Invalid form data (validation errors)
- **429 Too Many Requests** - Rate limit exceeded
- **500 Internal Server Error** - Email service failure

All errors include user-friendly messages and fallback to Instagram contact.

## Security Features

✅ **Rate Limiting** - Prevents spam and brute force  
✅ **Input Validation** - Zod schema prevents injection  
✅ **Field Limits** - Character limits prevent abuse  
✅ **CORS Headers** - Properly configured  
✅ **No Email Exposure** - Email address not visible on page  

## Monitoring

### Check Email Delivery

1. Go to Resend dashboard
2. Click **Logs** to see all sent emails
3. View delivery status, opens, and clicks
4. Check for bounces or errors

### Monitor Rate Limits

Check the `X-RateLimit-*` headers in API responses:

```javascript
// Example response headers
X-RateLimit-Limit: 3
X-RateLimit-Remaining: 2
X-RateLimit-Reset: 2026-02-06T20:30:00.000Z
```

### Upstash Dashboard

1. Go to [console.upstash.com](https://console.upstash.com/)
2. Select your Redis database
3. Monitor request counts and usage

## Troubleshooting

### Emails Not Sending

1. **Check API Key:**
   - Verify `RESEND_API_KEY` is set in Vercel
   - Make sure it starts with `re_`
   - Try regenerating the key

2. **Check Vercel Logs:**
   - Go to Vercel dashboard → **Deployments**
   - Click on latest deployment → **Functions**
   - Look for errors in `/api/contact`

3. **Check Resend Logs:**
   - Go to Resend dashboard → **Logs**
   - Look for failed sends or errors

4. **Domain Not Verified:**
   - Use `onboarding@resend.dev` as sender temporarily
   - Complete domain verification for production

### Rate Limit Not Working

1. **Check Redis Connection:**
   - Verify `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are set
   - Test connection in Upstash dashboard

2. **Development Mode:**
   - If Redis is not configured, rate limiting is disabled
   - This is normal for local development

### Form Submission Errors

1. **Validation Errors:**
   - Check field requirements (name 2+ chars, message 10+ chars)
   - Ensure email is valid format

2. **Network Errors:**
   - Check browser console for CORS errors
   - Verify API route is deployed

## Cost Estimates

### Resend
- **Free Tier:** 100 emails/day, 3,000/month
- **Pro Tier:** $20/month for 50,000 emails
- **Expected Usage:** ~10-50 emails/month (well within free tier)

### Upstash Redis
- **Free Tier:** 10,000 requests/day
- **Expected Usage:** Rate limit checks only (~100-500/month)

**Total Monthly Cost:** $0 (free tier sufficient)

## Next Steps

1. ✅ Set up Resend account and get API key
2. ✅ Add environment variables to Vercel
3. ⏳ Verify your domain in Resend
4. ⏳ Update `from` address after verification
5. ⏳ Test form submission
6. ⏳ Monitor email delivery in Resend dashboard

## Support

- **Resend Docs:** [resend.com/docs](https://resend.com/docs)
- **Upstash Docs:** [docs.upstash.com](https://docs.upstash.com/)
- **Next.js API Routes:** [nextjs.org/docs/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

---

**Note:** The contact form will work without Resend API key (shows error message), but rate limiting requires Upstash Redis to be configured.
