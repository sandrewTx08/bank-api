import express, { Request, Response } from "express";
import api from "./routes/index";
import bodyParser from "./middlewares/bodyPaser";
const app = express();

app.use(bodyParser);
app.use("/api", api);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: "Pagina não encontrada.",
  });
});

app.listen(process.env.PORT || 80);
