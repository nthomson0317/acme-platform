import express from 'express';
import { authRouter } from './routes/auth';
import { paymentsRouter } from './routes/payments';
import { rateLimitMiddleware } from './middleware/rateLimit';

const app = express();
app.use(express.json());
app.use(rateLimitMiddleware);
app.use('/api/v2/auth', authRouter);
app.use('/api/v2/payments', paymentsRouter);

export default app;
// feat/dashboard-widgets — 2026-03-09T17:54:49Z
