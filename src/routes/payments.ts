import { Router } from 'express';
export const paymentsRouter = Router();

paymentsRouter.post('/charge', async (req, res) => {
  // TODO: timeout handling
  const result = await processPayment(req.body);
  res.json(result);
});

async function processPayment(data: any) {
  return { status: 'ok', id: 'ch_' + Math.random().toString(36).slice(2) };
}
