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
router.use("/", creditoCaracteres);
router.use("/", creditoEmpty);
router.use("/", creditoSpace);
router.use("/", creditoNumber);

router.use("/registro", registro);
router.use("/remove", remove);

router.use("/", destinatarioEmpty);
router.use("/", destinatarioInvalido);
router.use("/", destinatarioCpfCaracteres);
router.use("/", destinatarioCpfEmpty);
router.use("/", destinatariocpfMaiorLength);
router.use("/", destinatarioCpfMenorLength);
router.use("/", destinatarioCpfSpace);
router.use("/", destinatarioPrimeiroNomeCaracteres);
router.use("/", destinatarioPrimeiroNomeEmpty);
router.use("/", destinatarioPrimeiroNomeSpace);
router.use("/", destinatarioSegundoNomeCaracteres);
router.use("/", destinatarioSegundoNomeEmpty);
router.use("/", destinatarioSegundoNomeSpace);
router.use("/", depositoEmpty);
router.use("/", depositoNumber);
router.use("/", depositoSpace);
router.use("/", depositoCaracteres);
router.use("/", depositoMaximo);

router.use("/deposito", desposito);

export default router;
