# Rate Limiting Setup Guide
**Status**: Infrastructure Ready  
**Provider**: Upstash Redis  
**Implementation**: Complete (waiting for Upstash credentials)

---

## 🚀 Quick Start

### 1. Create Upstash Redis Database

1. Go to: https://console.upstash.com/
2. Sign up or log in
3. Click **Create Database**
4. Choose:
   - **Name**: `sc-scent-ratelimit`
   - **Type**: Regional
   - **Region**: Choose closest to your users (US West for Santa Cruz)
   - **TLS**: Enabled
5. Click **Create**

### 2. Get Your Credentials

After creating the database:
1. Go to **Details** tab
2. Scroll to **REST API** section
3. Copy these two values:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

### 3. Add to Environment Variables

#### Local Development (.env.local)
```env
UPSTASH_REDIS_REST_URL=https://your-redis-url.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_redis_token_here
```

#### Vercel Production
1. Go to Vercel dashboard
2. Project Settings → **Environment Variables**
3. Add both variables:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
4. Select: Production, Preview, Development
5. Click **Save**
6. **Redeploy** your project

---

## 📚 Rate Limiting Configuration

### Three Rate Limit Levels

**1. Generous** (Public Content)
- **Limit**: 30 requests per 10 seconds
- **Use For**: SEO pages, product browsing, general content
- **Example**: `/in-stock`, `/fragrances/[slug]`

**2. Standard** (General API)
- **Limit**: 10 requests per 10 seconds
- **Use For**: Search, filtering, general API calls
- **Example**: Search API, filter API

**3. Strict** (Sensitive Operations)
- **Limit**: 3 requests per minute
- **Use For**: Forms, booking, contact submissions
- **Example**: Contact form, booking form, newsletter signup

---

## 💻 How to Use Rate Limiting

### In API Routes

```typescript
import { checkRateLimit, createRateLimitHeaders } from '@/lib/rate-limit';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Check rate limit
  const rateLimitResult = await checkRateLimit(request, 'strict');

  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      {
        status: 429,
        headers: createRateLimitHeaders(rateLimitResult),
      }
    );
  }

  // Your API logic here
  // ...

  return NextResponse.json(
    { success: true },
    { headers: createRateLimitHeaders(rateLimitResult) }
  );
}
```

### Example API Route

See: `src/app/api/example/route.ts` for a complete working example.

---

## 🛡️ What's Protected

### Current Implementation

✅ **Infrastructure Ready**: Rate limiting code installed  
✅ **Fail-Safe**: If Redis is not configured, requests are allowed (fail open)  
✅ **IP Detection**: Extracts client IP from various headers (Vercel, Cloudflare, etc.)  
✅ **Multiple Tiers**: Three different rate limits for different use cases  
✅ **Rate Limit Headers**: Responses include `X-RateLimit-*` headers  

### When You Add Forms/APIs

When you add booking forms or contact forms:

1. **Create API Route**: `src/app/api/contact/route.ts`
2. **Import Rate Limit**: `import { checkRateLimit } from '@/lib/rate-limit'`
3. **Apply Check**: Use `strict` limiter (3 req/min)
4. **Return 429**: If limit exceeded

---

## 📊 Rate Limit Response Headers

Responses include these informational headers:

```
X-RateLimit-Limit: 10          # Total requests allowed in window
X-RateLimit-Remaining: 7       # Requests remaining
X-RateLimit-Reset: 2026-02-09T... # When limit resets
```

**Client Benefits**:
- Knows when they can retry
- See how many requests left
- Better UX with clear feedback

---

## 🧪 Testing Rate Limits

### Test Locally

```bash
# Make 4 requests quickly (should get rate limited)
curl -X POST http://localhost:3000/api/example
curl -X POST http://localhost:3000/api/example
curl -X POST http://localhost:3000/api/example
curl -X POST http://localhost:3000/api/example  # This should return 429
```

### Test in Production

```bash
# Test your contact form
curl -X POST https://your-domain.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com"}'

# Repeat quickly to trigger rate limit
```

---

## 🔧 Configuration Options

### Adjust Rate Limits

Edit `src/lib/rate-limit.ts`:

```typescript
// Make stricter
limiter: Ratelimit.slidingWindow(1, '1 m'), // 1 per minute

// Make more generous
limiter: Ratelimit.slidingWindow(20, '10 s'), // 20 per 10 seconds

// Fixed window instead of sliding
limiter: Ratelimit.fixedWindow(10, '1 m'), // 10 per minute, resets at minute mark
```

### Per-User Rate Limiting

Instead of IP-based, use user ID:

```typescript
const userId = getUserIdFromSession(request);
const { success } = await ratelimit.strict.limit(`user:${userId}`);
```

---

## 🚨 What Happens When Rate Limited

### User Experience

**429 Response**:
```json
{
  "error": "Too many requests. Please try again later.",
  "retryAfter": "2026-02-09T23:15:00.000Z"
}
```

**Headers Included**:
- `X-RateLimit-Limit`: Total allowed
- `X-RateLimit-Remaining`: 0
- `X-RateLimit-Reset`: When to retry

### Monitoring

**In Upstash Dashboard**:
- See total requests
- Monitor rate limit hits
- View blocked requests
- Analyze traffic patterns

**Set Up Alerts**:
- Email notification if rate limits hit frequently
- Indicates potential attack or misconfigured client

---

## 💰 Upstash Pricing

**Free Tier** (Perfect for getting started):
- 10,000 requests per day
- 256 MB storage
- No credit card required

**Pay-As-You-Go**:
- $0.20 per 100K requests
- More than enough for most small businesses

**Your Expected Usage**:
- ~1,000-5,000 requests/day
- Well within free tier
- Cost: $0/month

---

## 🔐 Security Benefits

### Protection Against

✅ **DDoS Attacks**: Limits requests per IP  
✅ **Brute Force**: Prevents rapid form submissions  
✅ **API Abuse**: Stops automated scrapers  
✅ **Resource Exhaustion**: Prevents server overload  
✅ **Spam**: Limits form spam and bot traffic  

### Defense in Depth

Rate limiting is **one layer** of security:
- Layer 1: Vercel DDoS protection (automatic)
- Layer 2: **Rate limiting** (this)
- Layer 3: Input validation (Zod)
- Layer 4: CSRF protection (Next.js automatic)
- Layer 5: Security headers (implemented)

---

## 📋 Implementation Checklist

### ✅ Completed
- [x] Install `@upstash/ratelimit` and `@upstash/redis`
- [x] Create `src/lib/rate-limit.ts` utility
- [x] Create middleware foundation (`src/middleware.ts`)
- [x] Create example API route (`src/app/api/example/route.ts`)
- [x] Add `.env.example` with Upstash placeholders
- [x] Document setup process

### ⏳ Waiting For
- [ ] Create Upstash Redis database
- [ ] Add credentials to `.env.local`
- [ ] Add credentials to Vercel
- [ ] Test rate limiting locally
- [ ] Deploy and test in production

### 📝 When Adding Forms
- [ ] Create contact form API route
- [ ] Apply `strict` rate limit (3/min)
- [ ] Add loading states to forms
- [ ] Show rate limit errors to users
- [ ] Monitor Upstash dashboard

---

## 🎯 Next Steps

### Immediate (To Activate Rate Limiting)

1. **Create Upstash Account**: https://console.upstash.com/
2. **Create Redis Database**: Follow guide above
3. **Copy Credentials**: REST URL and Token
4. **Add to Vercel**: Environment Variables
5. **Redeploy**: Rate limiting will activate automatically

### When Adding Booking/Forms

1. **Create API Route**: `src/app/api/contact/route.ts`
2. **Copy from Example**: Use `api/example/route.ts` as template
3. **Apply Strict Limit**: 3 requests per minute
4. **Test Thoroughly**: Make sure rate limiting works
5. **Monitor**: Watch Upstash dashboard for issues

---

## 🔍 Troubleshooting

### Rate Limiting Not Working

**Check**:
1. Upstash credentials in environment variables
2. Vercel deployment has latest code
3. Check API route logs for errors
4. Verify Upstash dashboard shows requests

### All Requests Being Blocked

**Possible Causes**:
- Rate limit too strict
- IP detection failing (check logs)
- Redis connection issue

**Solution**:
- Increase rate limit temporarily
- Check `getClientIp()` function
- Verify Upstash database is active

### Rate Limiting Too Permissive

**Adjust**:
- Lower the request count
- Shorten the time window
- Use stricter tier for sensitive endpoints

---

## 📈 Monitoring & Analytics

### Upstash Dashboard

Monitor:
- Total requests
- Rate limit hits
- Blocked requests
- Response times
- Error rates

### Set Up Alerts

**Recommended Alerts**:
1. **High Block Rate**: If >10% requests blocked
2. **Unusual Traffic**: Spike in requests from single IP
3. **Service Down**: If Redis becomes unavailable

---

## ✅ Summary

**Status**: ✅ Infrastructure Complete  
**Code**: ✅ Installed and configured  
**Testing**: ⏳ Waiting for Upstash credentials  
**Production**: ⏳ Add credentials to activate  

**Files Created**:
1. `src/lib/rate-limit.ts` - Core rate limiting logic
2. `src/middleware.ts` - Edge middleware
3. `src/app/api/example/route.ts` - Example implementation
4. `.env.example` - Environment variable template

**Cost**: Free (within 10K requests/day)  
**Setup Time**: 5-10 minutes  
**Protection**: DDoS, brute force, spam, abuse  

---

## 🎓 Learn More

- [Upstash Rate Limiting Docs](https://upstash.com/docs/redis/sdks/ratelimit-ts/overview)
- [Next.js Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Vercel Edge Functions](https://vercel.com/docs/functions/edge-functions)

---

**Ready to Activate**: Create Upstash account and add credentials! 🚀
