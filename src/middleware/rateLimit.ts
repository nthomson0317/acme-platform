import { Request, Response, NextFunction } from 'express';

const requestCounts = new Map<string, number>();

export function rateLimitMiddleware(req: Request, res: Response, next: NextFunction) {
  const ip = req.ip;
  const count = (requestCounts.get(ip) || 0) + 1;
  requestCounts.set(ip, count);
  if (count > 100) return res.status(429).json({ error: 'Rate limit exceeded' });
  next();
}
