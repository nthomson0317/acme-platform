import { Router } from 'express';
import jwt from 'jsonwebtoken';

export const authRouter = Router();

authRouter.post('/token/refresh', async (req, res) => {
  const tokenExpiry = 3600; // 1 hour
  const token = jwt.sign({ userId: req.body.userId }, process.env.JWT_SECRET!, {
    expiresIn: tokenExpiry,
  });
  res.json({ token });
});
