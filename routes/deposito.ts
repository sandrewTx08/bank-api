import express, { NextFunction, Request, Response } from "express";
import registro from "../modules/model";
const router = express.Router();

/* Exemplo do body da request 
  {
    "cpf": 12345678911,
    "primeiroNome": "Joao",
    "segundoNome": "Santos",
    "credito": 1999
  }
*/

router.use(async (req: Request, res: Response, next: NextFunction) => {
  let { credito } = req.body;

  if (credito >= 2000)
    return res.status(400).json({
      error: "Deposito deve ser menor que R$2000.",
    });

  let { cpf, primeiroNome, segundoNome } = req.body;
  let query = await registro.findOne({
    cpf,
    primeiroNome,
    segundoNome,
  });

  if (!query)
    return res.status(404).json({
      error: `${primeiroNome} não foi encontrado.`,
    });

  res.locals.query = query;

  next();
});

router.put("/", async (req: Request, res: Response) => {
  let { credito } = req.body;
  let { query } = res.locals;

  let calculo = query.credito + credito;
  let { _id } = query;
  await registro.findByIdAndUpdate(_id, { credito: calculo });

  res.json({
    message: `${req.body.primeiroNome} deposita R$${credito}.`,
  });
});

export default router;
