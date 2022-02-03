import express from "express";
import registro from "./registro";
import remove from "./remove";
import desposito from "./deposito";
import {
  cpfcaracteres,
  cpfEmpty,
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
  depositoMaximo,
  depositoCaracteres,
  depositoEmpty,
  depositoSpace,
} from "../middlewares/parametros";

const router = express.Router();

router.use("/", cpfcaracteres);
router.use("/", cpfEmpty);
router.use("/", cpfMaiorLength);
router.use("/", cpfMenorLength);
router.use("/", cpfSpace);
router.use("/", primeiroNomecaracteres);
router.use("/", primeiroNomeEmpty);
router.use("/", primeiroNomeSpace);
router.use("/", segundoNomecaracteres);
router.use("/", segundoNomeEmpty);
router.use("/", segundoNomeSpace);

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
router.use("/", depositoSpace);
router.use("/", depositoCaracteres);
router.use("/", depositoMaximo);

router.use("/deposito", desposito);

export default router;
