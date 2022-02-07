import express from "express";
import registro from "./registro";
import remove from "./remove";
import transferencia from "./transferencia";
import deposito from "./deposito";
import {
  cpfEmpty,
  cpfNumber,
  cpfCaracteres,
  cpfMaiorLength,
  cpfMenorLength,
  cpfSpace,
  primeiroNomecaracteres,
  primeiroString,
  primeiroNomeEmpty,
  primeiroNomeSpace,
  segundoNomecaracteres,
  segundoString,
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
  destinatarioPrimeiroString,
  destinatarioSegundoNomeString,
  creditoCaracteres,
  creditoEmpty,
  creditoNumber,
  creditoSpace,
} from "../middlewares/parametros";

const router = express.Router();

router.use("/", cpfEmpty);
router.use("/", cpfNumber);
router.use("/", cpfCaracteres);
router.use("/", cpfMaiorLength);
router.use("/", cpfMenorLength);
router.use("/", cpfSpace);
router.use("/", primeiroNomeEmpty);
router.use("/", primeiroString);
router.use("/", primeiroNomecaracteres);
router.use("/", primeiroNomeSpace);
router.use("/", segundoNomeEmpty);
router.use("/", segundoString);
router.use("/", segundoNomecaracteres);
router.use("/", segundoNomeSpace);

router.use("/remove", remove);

router.use(creditoEmpty);
router.use(creditoNumber);
router.use(creditoCaracteres);
router.use(creditoSpace);

router.use("/registro", registro);
router.use("/deposito", deposito);

router.use("/transferencia", destinatarioEmpty);
router.use("/transferencia", destinatarioInvalido);
router.use("/transferencia", destinatarioCpfCaracteres);
router.use("/transferencia", destinatarioCpfEmpty);
router.use("/transferencia", destinatariocpfMaiorLength);
router.use("/transferencia", destinatarioCpfMenorLength);
router.use("/transferencia", destinatarioCpfSpace);
router.use("/transferencia", destinatarioPrimeiroString);
router.use("/transferencia", destinatarioPrimeiroNomeCaracteres);
router.use("/transferencia", destinatarioPrimeiroNomeEmpty);
router.use("/transferencia", destinatarioPrimeiroNomeSpace);
router.use("/transferencia", destinatarioSegundoNomeEmpty);
router.use("/transferencia", destinatarioSegundoNomeString);
router.use("/transferencia", destinatarioSegundoNomeCaracteres);
router.use("/transferencia", destinatarioSegundoNomeSpace);
router.use("/transferencia", transferencia);

export default router;
