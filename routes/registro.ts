import express, { Request, Response, NextFunction } from "express";
import registro from "../modules/model";
const router = express.Router();

router.use(async (req: Request, res: Response, next: NextFunction) => {
  let { primeiroNome, segundoNome, cpf } = req.body;

  let query =
    (await registro.findOne({
      cpf,
    })) ||
    (await registro.findOne({
      primeiroNome,
      segundoNome,
    }));

  if (query)
    return res.status(409).json({
      error: "Usuário já existe.",
    });

  next();
});

router.post("/", async (req: Request, res: Response) => {
  let { primeiroNome, segundoNome, cpf, credito } = req.body;

  credito = credito ? Number(credito) || 0 : 0;

  await registro.create({
    cpf,
    primeiroNome,
    segundoNome,
    credito,
  });

  res.status(201).json({
    message: `Usuário ${primeiroNome} criado com sucesso.`,
  });
});

export default router;
