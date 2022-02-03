import express, { Request, Response, NextFunction } from "express";
import registro from "../modules/model";
const router = express.Router();

const creditoValorInicial = 10000;

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
    return res.json({
      error: "Usuário já existe.",
    });

  next();
});

router.post("/", async (req: Request, res: Response) => {
  let { primeiroNome, segundoNome, cpf } = req.body;

  await registro.create({
    cpf,
    primeiroNome,
    segundoNome,
    credito: creditoValorInicial,
  });

  res.json({
    message: `Usuário ${primeiroNome} criado com sucesso.`,
  });
});

export default router;
