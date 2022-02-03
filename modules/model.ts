import "dotenv/config";
import mogoose from "mongoose";
mogoose.connect(<string>process.env.MONGO_DB).catch(() => Error("db error"));

export default mogoose.model(
  "registro",
  new mogoose.Schema({
    cpf: {
      type: Number,
      minlength: 11,
      maxlength: 11,
      unique: true,
    },

    primeiroNome: {
      type: String,
    },

    segundoNome: {
      type: String,
    },

    credito: {
      type: Number,
    },
  })
);
