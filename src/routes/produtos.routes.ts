import { Router, type Request, type Response } from "express";
import { ProdutoDatabaseRepository } from "../repositories/ProdutoDatabaseRepository.ts";
import { ProdutoService } from "../services/ProdutoService.ts";

const produtosRota = Router();

const produtoRepository = new ProdutoDatabaseRepository();
const produtoService = new ProdutoService(produtoRepository);

produtosRota.get("/", async (req: Request, res: Response) => {
  const produtos = await produtoService.listar();

  res.json(produtos);
});

produtosRota.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const produto = await produtoService.buscarPorId(Number(id));

  res.json(produto);
});

export { produtosRota };
