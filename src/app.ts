import "dotenv/config";
import express, { type Express } from "express";
import { produtosRota } from "./routes/produtos.routes.ts";

const app: Express = express();

app.use(express.json());

app.use("/produtos", produtosRota);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
