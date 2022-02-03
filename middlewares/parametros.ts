import { Request, Response, NextFunction } from "express";

export function cpfMenorLength(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { cpf } = req.body;

  if (`${cpf}`.length < 11)
    return res.status(400).json({
      error: "CPF menor que 11 digitos.",
    });

  next();
}

export function cpfMaiorLength(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { cpf } = req.body;

  if (`${cpf}`.length > 11)
    return res.status(400).json({
      error: "CPF maior que 11 digitos.",
    });

  next();
}

export function cpfcaracteres(req: Request, res: Response, next: NextFunction) {
  let { cpf } = req.body;

  if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(cpf))
    return res.status(400).json({
      error: "CPF contem caracteres invalidos.",
    });

  next();
}

export function cpfSpace(req: Request, res: Response, next: NextFunction) {
  let { cpf } = req.body;

  if (/\s/.test(cpf))
    return res.status(400).json({
      error: "CPF não deve conter espaços.",
    });

  next();
}

export function cpfEmpty(req: Request, res: Response, next: NextFunction) {
  let { cpf } = req.body;

  if (!cpf)
    return res.status(400).json({
      error: "CPF é necessario.",
    });

  next();
}

export function primeiroNomecaracteres(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { primeiroNome } = req.body;

  if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(primeiroNome))
    return res.status(400).json({
      error: "Primeiro nome contem caracteres invalidos.",
    });

  next();
}

export function primeiroNomeEmpty(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { primeiroNome, segundoNome, cpf } = req.body;

  if (!primeiroNome)
    return res.status(400).json({
      error: "Primeiro nome está vazio.",
    });

  next();
}

export function primeiroNomeSpace(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { primeiroNome } = req.body;

  if (/\s/.test(primeiroNome))
    return res.status(400).json({
      error: "Primeiro nome não deve conter espaços.",
    });

  next();
}

export function segundoNomecaracteres(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { segundoNome } = req.body;

  if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(segundoNome))
    return res.status(400).json({
      error: "Segundo nome contem caracteres invalidos.",
    });

  next();
}

export function segundoNomeEmpty(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { segundoNome } = req.body;

  if (!segundoNome)
    return res.status(400).json({
      error: "Primeiro nome está vazio.",
    });

  next();
}

export function segundoNomeSpace(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { segundoNome } = req.body;

  if (/\s/.test(segundoNome))
    return res.status(400).json({
      error: "Segundo nome está vazio.",
    });

  next();
}

export function destinatarioCpfMenorLength(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { cpf } = req.body.destinatario;

  if (cpf.length < 11)
    return res.status(400).json({
      error: "CPF do destinatário menor que 11 digitos.",
    });

  next();
}

export function destinatarioEmpty(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.body.destinatario)
    return res.status(400).json({
      error: "Destinatário deve ser preenchido.",
    });

  next();
}

export function destinatarioInvalido(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (typeof req.body.destinatario !== "object")
    return res.status(400).json({
      error: "O parametro destinatario deve ser um objeto.",
    });

  next();
}

export function destinatariocpfMaiorLength(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { cpf } = req.body.destinatario;

  if (cpf.length > 11)
    return res.status(400).json({
      error: "CPF do destinatário maior que 11 digitos.",
    });

  next();
}

export function destinatarioCpfCaracteres(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { cpf } = req.body.destinatario;

  if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(cpf))
    return res.status(400).json({
      error: "CPF do destinatário contem caracteres invalidos.",
    });

  next();
}

export function destinatarioCpfSpace(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { cpf } = req.body.destinatario;

  if (/\s/.test(cpf))
    return res.status(400).json({
      error: "CPF do destinatário não deve conter espaços.",
    });

  next();
}

export function destinatarioCpfEmpty(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { cpf } = req.body.destinatario;

  if (!cpf)
    return res.status(400).json({
      error: "CPF do destinatário é necessario.",
    });

  next();
}

export function destinatarioPrimeiroNomeCaracteres(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { primeiroNome } = req.body.destinatario;

  if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(primeiroNome))
    return res.status(400).json({
      error: "Primeiro nome do destinatário contem caracteres invalidos.",
    });

  next();
}

export function destinatarioPrimeiroNomeEmpty(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { primeiroNome } = req.body.destinatario;

  if (!primeiroNome)
    return res.status(400).json({
      error: "Primeiro do destinatário nome está vazio.",
    });

  next();
}

export function destinatarioPrimeiroNomeSpace(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { primeiroNome } = req.body.destinatario;

  if (/\s/.test(primeiroNome))
    return res.status(400).json({
      error: "Segundo nome do destinatário não deve conter espaços.",
    });

  next();
}

export function destinatarioSegundoNomeCaracteres(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { segundoNome } = req.body.destinatario;

  if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(segundoNome))
    return res.status(400).json({
      error: "Segundo nome do destinatário contem caracteres invalidos.",
    });

  next();
}

export function destinatarioSegundoNomeEmpty(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { segundoNome } = req.body.destinatario;

  if (!segundoNome)
    return res.status(400).json({
      error: "Segundo nome do destinatário está vazio.",
    });

  next();
}

export function destinatarioSegundoNomeSpace(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { segundoNome } = req.body.destinatario;

  if (/\s/.test(segundoNome))
    return res.status(400).json({
      error: "Segundo nome do destinatário está vazio.",
    });

  next();
}

export function depositoMaximo(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { deposito } = req.body;

  if (deposito >= 2000)
    return res.status(400).json({
      error: "Deposito deve ser menor que 2000.",
    });

  next();
}

export function depositoEmpty(req: Request, res: Response, next: NextFunction) {
  let { deposito } = req.body;

  if (!deposito)
    return res.status(400).json({
      error: "O parametro deposito está vazio",
    });

  next();
}

export function depositoSpace(req: Request, res: Response, next: NextFunction) {
  let { deposito } = req.body;

  if (/\s/.test(deposito))
    return res.status(400).json({
      error: "Deposito não deve conter espaços.",
    });

  next();
}

export function depositoCaracteres(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { deposito } = req.body;

  if (typeof deposito !== "number")
    return res.status(400).json({
      error: "O parametro deposito deve conter números.",
    });

  next();
}
