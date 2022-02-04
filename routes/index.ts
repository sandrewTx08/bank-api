import express from "express";
import registro from "./registro";
import remove from "./remove";
import desposito from "./deposito";
import {
  cpfEmpty,
  cpfNumber,
  cpfCaracteres,
  cpfMaiorLength,
  cpfMenorLength,
  cpfSpace,
  primeiroNomecaracteres,
  primeiroNomeEmpty,
  primeiroNomeSpace,
  segundoNomecaracteres,
  segundoNomeEmpty,
  segundoNomeSpace,
  destinatarioEmpty,
  destinatarioInvalido,
  destinatarioCpfMenorLength,
  destinatarioCpfCaracteres,
  destinatarioCpfEmpty,
  destinatariocpfMaiorLength,
  destinatarioCpfSpace,
  destinatarioPrimeiroNomeCaracteres,
  destinatarioPrimeiroNomeEmpty,
  destinatarioPrimeiroNomeSpace,
  destinatarioSegundoNomeCaracteres,
  destinatarioSegundoNomeEmpty,
  destinatarioSegundoNomeSpace,
  depositoNumber,
  depositoMaximo,
  depositoCaracteres,
  depositoEmpty,
  depositoSpace,
  creditoCaracteres,
  creditoEmpty,
  creditoNumber,
  creditoSpace,
} from "../middlewares/parametros";

const router = express.Router();

router.use("/", cpfEmpty);
router.use("/", cpfCaracteres);
router.use("/", cpfNumber);
router.use("/", cpfMaiorLength);
router.use("/", cpfMenorLength);
router.use("/", cpfSpace);
router.use("/", primeiroNomecaracteres);
router.use("/", primeiroNomeEmpty);
router.use("/", primeiroNomeSpace);
router.use("/", segundoNomecaracteres);
router.use("/", segundoNomeEmpty);
router.use("/", segundoNomeSpace);

router.use("/remove", remove);

router.use("/deposito", destinatarioEmpty);
router.use("/deposito", destinatarioInvalido);
router.use("/deposito", destinatarioCpfCaracteres);
router.use("/deposito", destinatarioCpfEmpty);
router.use("/deposito", destinatariocpfMaiorLength);
router.use("/deposito", destinatarioCpfMenorLength);
router.use("/deposito", destinatarioCpfSpace);
router.use("/deposito", destinatarioPrimeiroNomeCaracteres);
router.use("/deposito", destinatarioPrimeiroNomeEmpty);
router.use("/deposito", destinatarioPrimeiroNomeSpace);
router.use("/deposito", destinatarioSegundoNomeCaracteres);
router.use("/deposito", destinatarioSegundoNomeEmpty);
router.use("/deposito", destinatarioSegundoNomeSpace);
router.use("/deposito", depositoEmpty);
router.use("/deposito", depositoNumber);
router.use("/deposito", depositoSpace);
router.use("/deposito", depositoCaracteres);
router.use("/deposito", depositoMaximo);
router.use("/deposito", desposito);

router.use("/registro", creditoCaracteres);
router.use("/registro", creditoEmpty);
router.use("/registro", creditoSpace);
router.use("/registro", creditoNumber);
router.use("/registro", registro);

export default router;
