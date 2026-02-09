# Security Audit Report
**Santa Cruz Scent Website**  
**Date**: February 2026  
**Framework**: Next.js 16 (App Router)

---

## 🔒 Overall Security Status: GOOD ✅
The site follows Next.js best practices with a few recommended improvements before adding payment/scheduling.

---

## ✅ Security Strengths

### 1. **Environment Variables**
- ✅ `.env.local` properly gitignored
- ✅ Credentials not committed to repository
- ✅ Using environment variables for API keys
- ✅ Server-side only (not exposed to client)

**Status**: Secure

---

### 2. **API Security**
**Google Sheets API**:
- ✅ API key restricted to Sheets API only
- ✅ Read-only access (no write operations)
- ✅ Public sheet (no sensitive data)
- ✅ Server-side fetching (credentials never exposed)

**Recommendations**:
- Consider adding HTTP referer restrictions to API key
- Monitor API quota usage in Google Cloud Console
- Set up alerts for unusual API activity

**Status**: Secure (with optional enhancements)

---

### 3. **Data Validation**
- ✅ Using Zod schema validation for fragrance data
- ✅ Server-side validation in `inventory.ts`
- ✅ Safe parsing with error handling
- ✅ Invalid data skipped gracefully

**Example from code**:
```tsx
const validated = FragranceSchema.safeParse(fragranceData);
if (validated.success) {
  fragrances.push(validated.data);
}
```

**Status**: Excellent ✅

---

### 4. **Error Handling**
- ✅ Try-catch blocks around API calls
- ✅ Graceful degradation on failures
- ✅ No stack traces exposed to users
- ✅ Console warnings for debugging (server-side only)

**Status**: Good

---

### 5. **Next.js Security Features**
- ✅ Automatic CSRF protection (App Router)
- ✅ Server Components by default (less JS to client)
- ✅ No eval() or dangerous HTML injection
- ✅ Sanitized user inputs (currently minimal user input)

**Status**: Secure

---

## ⚠️ Areas Requiring Attention (Before Adding Scheduling)

### 1. **Rate Limiting** ⚠️
**Current State**: No rate limiting implemented

**Risk**: API abuse, DDoS vulnerability

**Recommended Solution**:
```tsx
// Install: npm install @upstash/ratelimit @upstash/redis

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'),
});

// In API route:
const { success } = await ratelimit.limit(ip);
if (!success) return new Response('Too Many Requests', { status: 429 });
```

**Priority**: HIGH (critical before adding forms/scheduling)

---

### 2. **Content Security Policy (CSP)** ⚠️
**Current State**: No CSP headers configured

**Risk**: XSS attacks, clickjacking

**Recommended Solution**:
Add to `next.config.ts`:
```tsx
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cal.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://sheets.googleapis.com https://cal.com",
              "frame-src https://cal.com",
            ].join('; '),
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  reactCompiler: true,
};
```

**Priority**: HIGH (before Cal.com integration)

---

### 3. **HTTPS Enforcement** ✅
**Current State**: Vercel automatically provides HTTPS

**Recommendation**: Ensure HSTS header is set (check above config)

**Status**: Secure (handled by Vercel)

---

### 4. **Input Sanitization** ⚠️
**Current State**: Minimal user input currently

**Before Adding Forms**:
- ✅ Validate all form inputs server-side
- ✅ Sanitize email addresses
- ✅ Use prepared statements for any database queries
- ✅ Never trust client-side validation alone

**Example for Cal.com integration**:
```tsx
// Validate and sanitize before passing to Cal.com
import { z } from 'zod';

const BookingSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  email: z.string().email().toLowerCase(),
  phone: z.string().regex(/^\+?[\d\s\-()]+$/).optional(),
  message: z.string().max(1000).trim().optional(),
});
```

**Priority**: HIGH (implement before forms go live)

---

### 5. **Session Security** N/A
**Current State**: No authentication/sessions yet

**When Adding Admin Features**:
- Use NextAuth.js or similar
- Secure httpOnly cookies
- CSRF tokens for admin actions
- Strong password requirements

**Priority**: Not applicable yet

---

## 🔐 Security Checklist for Cal.com Integration

Before adding scheduling:

### Pre-Integration
- [ ] Add rate limiting middleware
- [ ] Implement CSP headers
- [ ] Set up monitoring/logging
- [ ] Create security incident response plan

### Cal.com Specific
- [ ] Embed Cal.com widget securely (iframe sandboxing)
- [ ] Whitelist Cal.com domains in CSP
- [ ] Verify Cal.com webhook signatures (if using)
- [ ] Use HTTPS for all Cal.com API calls
- [ ] Store Cal.com API keys in environment variables
- [ ] Never expose Cal.com API keys to client

### Post-Integration
- [ ] Test for XSS vulnerabilities
- [ ] Verify no sensitive data in URLs
- [ ] Check for CSRF protection
- [ ] Monitor for unusual booking patterns
- [ ] Set up error alerting

---

## 🛡️ Vercel-Specific Security

### ✅ Already Secured by Vercel
1. **DDoS Protection**: Automatic
2. **SSL/TLS**: Auto-provisioned and renewed
3. **Edge Network**: Built-in security
4. **Firewall**: Included in Pro plan
5. **Attack Mitigation**: Automatic

### 🔧 Vercel Recommended Settings

**Environment Variables**:
```
# Production only
GOOGLE_SHEET_ID=xxxxx (encrypted by Vercel)
GOOGLE_SHEETS_API_KEY=xxxxx (encrypted by Vercel)
CAL_COM_API_KEY=xxxxx (when you add it)

# Development
Use .env.local (already gitignored)
```

**Deployment Protection**:
- Enable "Deployment Protection" in Vercel settings
- Require authentication for preview deployments (optional)
- Set up branch protection in GitHub

---

## 📊 Security Monitoring Recommendations

### Set Up Monitoring For:
1. **API Usage**
   - Google Sheets API quota
   - Cal.com API rate limits
   - Unusual traffic patterns

2. **Error Rates**
   - Failed API calls
   - Validation errors
   - Server errors (500s)

3. **Performance**
   - Response times
   - Memory usage
   - Build failures

### Tools to Consider:
- **Vercel Analytics**: Already included
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **UptimeRobot**: Uptime monitoring

---

## 🚨 Known Vulnerabilities Check

### Dependencies Audit
```bash
npm audit
```

**Current Status**: Run this before launch

**Action Items**:
- [ ] Run `npm audit` and fix high/critical issues
- [ ] Keep Next.js updated to latest stable
- [ ] Update dependencies regularly
- [ ] Use `npm audit fix` for automated fixes

---

## 🔒 Data Privacy & GDPR Compliance

### Current Data Collection
- ✅ No cookies set
- ✅ No user tracking
- ✅ No personal data stored
- ✅ Google Sheets API (public data only)

### When Adding Scheduling
- [ ] Add Privacy Policy page
- [ ] Add Terms of Service
- [ ] Cookie consent (if tracking added)
- [ ] Data retention policy
- [ ] User data deletion process
- [ ] GDPR compliance (if EU traffic)
- [ ] CCPA compliance (California)

**Priority**: REQUIRED before collecting user data

---

## 🎯 Pre-Launch Security Checklist

### Critical (Must Do)
- [ ] Run `npm audit` and fix vulnerabilities
- [ ] Add rate limiting
- [ ] Implement CSP headers
- [ ] Test all forms for XSS
- [ ] Verify HTTPS redirect
- [ ] Add Privacy Policy
- [ ] Test on multiple devices/browsers

### Important (Should Do)
- [ ] Set up error monitoring (Sentry)
- [ ] Configure Vercel security headers
- [ ] Add uptime monitoring
- [ ] Create backup of Google Sheet
- [ ] Document API keys and secrets
- [ ] Test Cal.com integration thoroughly

### Nice to Have
- [ ] Add security.txt file
- [ ] Implement Web Application Firewall (WAF)
- [ ] Add bot detection
- [ ] Set up security alerts
- [ ] Penetration testing

---

## 🔐 API Key Rotation Schedule

**Google Sheets API Key**:
- Rotate every: 90 days
- Next rotation: Set calendar reminder
- Process: Generate new key → Update env → Test → Delete old

**Cal.com API Key** (when added):
- Rotate every: 90 days
- Keep old key active for 24h during transition
- Monitor for auth errors during rotation

---

## 📝 Security Incident Response Plan

### If Security Issue Detected:

1. **Immediate Actions** (First Hour)
   - Disable affected API keys
   - Take site offline if critical
   - Assess scope of breach
   - Document everything

2. **Investigation** (First 24 Hours)
   - Review server logs
   - Check for data access
   - Identify attack vector
   - Determine affected users

3. **Remediation** (First Week)
   - Patch vulnerability
   - Rotate all credentials
   - Deploy fixes
   - Monitor for repeat attacks

4. **Communication**
   - Notify affected users
   - Post status update
   - Report to authorities if required
   - Document lessons learned

---

## ✅ Final Security Rating

**Current State**: B+ (Good for static site)
- Solid foundation
- Best practices followed
- Room for improvement before dynamic features

**After Implementing Recommendations**: A (Excellent)
- Rate limiting added
- CSP headers configured
- Input validation strengthened
- Monitoring in place

---

## 🚀 Next Steps for Cal.com Integration

### Week 1: Security Hardening
1. Implement rate limiting
2. Add security headers
3. Set up monitoring
4. Create incident response plan

### Week 2: Cal.com Integration
1. Review Cal.com security docs
2. Configure embed securely
3. Test booking flow
4. Add Privacy Policy

### Week 3: Testing & Launch
1. Security testing
2. Load testing
3. User acceptance testing
4. Soft launch with monitoring

---

**Security Contact**: hello@santacruzscent.com  
**Last Updated**: February 2026  
**Next Audit**: After Cal.com integration
