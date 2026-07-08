import { Router, type Request, type Response } from "express";
import { ProdutoDatabaseRepository } from "../repositories/ProdutoDatabaseRepository.ts";
import { ProdutoService } from "../services/ProdutoService.ts";
import { EstoqueDatabaseRepository } from "../repositories/EstoqueDatabaseRepository.ts";
import { EstoqueService } from "../services/EstoqueService.ts";
import { ProdutoMediator } from "../mediators/ProdutoMediator.ts";

const produtosRota = Router();

const produtoRepository = new ProdutoDatabaseRepository();
const produtoService = new ProdutoService(produtoRepository);

const estoqueRepository = new EstoqueDatabaseRepository();
const estoqueService = new EstoqueService(estoqueRepository);

const produtoMediator = new ProdutoMediator(produtoService, estoqueService);

produtosRota.get("/", async (req, res) => {
  const produtos = await produtoMediator.listarProdutos();
  res.json(produtos);
});

produtosRota.get("/:id", async (req, res) => {
  const produto = await produtoMediator.buscarProdutoPorId(req.params.id);
  res.json(produto);
});

export { produtosRota };
