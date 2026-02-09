/**
 * Rate limiting utility using Upstash Redis
 * Prevents API abuse and DDoS attacks
 */

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Create Redis client (requires UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN env vars)
const redis = typeof process.env.UPSTASH_REDIS_REST_URL !== 'undefined'
  ? Redis.fromEnv()
  : null;

// Rate limiters for different use cases
export const ratelimit = {
  /**
   * Standard rate limit for general API routes
   * 10 requests per 10 seconds per IP
   */
  standard: redis
    ? new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(10, '10 s'),
        analytics: true,
        prefix: 'ratelimit:standard',
      })
    : null,

  /**
   * Strict rate limit for sensitive operations (forms, booking)
   * 3 requests per minute per IP
   */
  strict: redis
    ? new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(3, '1 m'),
        analytics: true,
        prefix: 'ratelimit:strict',
      })
    : null,

  /**
   * Generous rate limit for public content
   * 30 requests per 10 seconds per IP
   */
  generous: redis
    ? new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(30, '10 s'),
        analytics: true,
        prefix: 'ratelimit:generous',
      })
    : null,
};

/**
 * Get client IP address from request
 * Works with Vercel's forwarded headers
 */
export function getClientIp(request: Request): string {
  // Try various headers that Vercel/proxies use
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');

  // x-forwarded-for can be a comma-separated list, take first IP
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  // Fallback
  return 'unknown';
}

/**
 * Check rate limit and return appropriate response
 * Usage in API routes:
 * 
 * const ip = getClientIp(request);
 * const { success, limit, remaining, reset } = await ratelimit.strict.limit(ip);
 * 
 * if (!success) {
 *   return new Response('Too Many Requests', { 
 *     status: 429,
 *     headers: {
 *       'X-RateLimit-Limit': limit.toString(),
 *       'X-RateLimit-Remaining': remaining.toString(),
 *       'X-RateLimit-Reset': new Date(reset).toISOString(),
 *     }
 *   });
 * }
 */
export async function checkRateLimit(
  request: Request,
  limiter: 'standard' | 'strict' | 'generous' = 'standard'
): Promise<{
  success: boolean;
  limit?: number;
  remaining?: number;
  reset?: number;
  pending?: Promise<unknown>;
}> {
  const selectedLimiter = ratelimit[limiter];

  // If Redis is not configured, allow all requests (fail open)
  if (!selectedLimiter) {
    console.warn('Rate limiting not configured. Allowing request.');
    return { success: true };
  }

  const ip = getClientIp(request);
  const result = await selectedLimiter.limit(ip);

  return result;
}

/**
 * Create rate limit response headers
 */
export function createRateLimitHeaders(result: {
  limit?: number;
  remaining?: number;
  reset?: number;
}): HeadersInit {
  const headers: HeadersInit = {};

  if (result.limit !== undefined) {
    headers['X-RateLimit-Limit'] = result.limit.toString();
  }

  if (result.remaining !== undefined) {
    headers['X-RateLimit-Remaining'] = result.remaining.toString();
  }

  if (result.reset !== undefined) {
    headers['X-RateLimit-Reset'] = new Date(result.reset).toISOString();
  }

  return headers;
}
