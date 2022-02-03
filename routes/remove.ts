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

  if (!query)
    return res.json({
      error: "Usuário não existe.",
    });

  // Retorna _id
  res.locals._id = query._id;

  next();
});

router.delete("/", async (req: Request, res: Response) => {
  let { primeiroNome } = req.body;
  let { _id } = res.locals;

  // Deleta usuário pelo _id
  await registro.findByIdAndDelete({ _id });

  res.json({
    message: `Usuário ${primeiroNome} deletado com sucesso.`,
  });
});

export default router;
