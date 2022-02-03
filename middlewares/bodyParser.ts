import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

router.use(express.json());

router.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err) return res.status(500).json({ error: "Error parsing JSON." });

  next();
});

export default router;
