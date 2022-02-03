import express, { NextFunction, Request, Response } from "express";
import registro from "../modules/model";
const router = express.Router();

/* Exemplo do body da request 
  {
    "cpf": 12345678911,
    "primeiroNome": "Joao",
    "segundoNome": "Santos",
    "deposito": 1999,
    "destinatario": {
        "cpf": 12345678912,
        "primeiroNome": "Matheus",
        "segundoNome": "Gabriel"
    }
  }
*/

router.use(async (req: Request, res: Response, next: NextFunction) => {
  // Usuário que deposita
  let { primeiroNome, segundoNome, cpf, deposito } = req.body;

  let query =
    (await registro.findOne({
      cpf,
    })) ||
    (await registro.findOne({
      primeiroNome,
      segundoNome,
    }));

  if (!query)
    return res.status(404).json({
      error: `${primeiroNome} não foi encontrado.`,
    });

  if (query.credito - deposito < 0)
    return res.json({
      error: "Sem valores para efetuar transação",
    });

  await registro.findOneAndUpdate(
    {
      cpf,
      primeiroNome,
      segundoNome,
    },
    { credito: query.credito - deposito }
  );

  next();
});

router.put("/", async (req: Request, res: Response) => {
  // Usuário que recebe
  let { deposito } = req.body;
  let { cpf, primeiroNome, segundoNome } = req.body.destinatario;

  let queryDestinatario =
    (await registro.findOne({
      cpf,
    })) ||
    (await registro.findOne({
      primeiroNome,
      segundoNome,
    }));

  if (!queryDestinatario)
    return res.json({
      error: "Destinatario não existe.",
    });

  await registro.findOneAndUpdate(
    {
      cpf,
      primeiroNome,
      segundoNome,
    },
    { credito: queryDestinatario.credito + deposito }
  );

  res.json({
    message: `Usuário ${req.body.primeiroNome} deposita ${deposito} para ${primeiroNome}.`,
  });
});

export default router;
