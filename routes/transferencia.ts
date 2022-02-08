import express, { NextFunction, Request, Response } from "express";
import registro from "../modules/model";
const router = express.Router();

/* Exemplo do body da request 
  {
    "cpf": 12345678911,
    "primeiroNome": "Joao",
    "segundoNome": "Santos",
    "credito": 1999,
    "destinatario": {
        "cpf": 12345678912,
        "primeiroNome": "Matheus",
        "segundoNome": "Gabriel"
    }
  }
*/

router.use(async (req: Request, res: Response, next: NextFunction) => {
  let { cpf, primeiroNome, segundoNome } = req.body.destinatario;

  let queryDestinatario = await registro.findOne({
    cpf,
    primeiroNome,
    segundoNome,
  });

  if (!queryDestinatario)
    return res.status(404).json({
      error: "Destinatario não existe.",
    });

  res.locals.queryDestinatario = queryDestinatario;

  next();
});

router.use(async (req: Request, res: Response, next: NextFunction) => {
  // Usuário que transferi valor
  let { primeiroNome, segundoNome, cpf, credito } = req.body;

  let query = await registro.findOne({
    cpf,
    primeiroNome,
    segundoNome,
  });

  if (!query)
    return res.status(404).json({
      error: `${primeiroNome} não foi encontrado.`,
    });

  if (query._id.valueOf() === res.locals.queryDestinatario._id.valueOf())
    return res.status(404).json({
      error: "Não possível transferir valores para sua própria conta.",
    });

  if (query.credito - credito < 0)
    return res.status(400).json({
      error: "Sem valores para efetuar transação",
    });

  let calculo = query.credito - credito;
  let { _id } = query;
  await registro.findByIdAndUpdate(_id, { credito: calculo });

  next();
});

router.put("/", async (req: Request, res: Response) => {
  // Usuário que recebe valor
  let { credito } = req.body;
  let { queryDestinatario } = res.locals;

  let calculo = queryDestinatario.credito + credito;
  let { _id } = queryDestinatario;
  await registro.findByIdAndUpdate(_id, { credito: calculo });

  res.status(201).json({
    message: `${req.body.primeiroNome} transferi R$${credito} para ${queryDestinatario.primeiroNome}.`,
  });
});

export default router;
