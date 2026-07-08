import type { ProdutoService } from "../services/ProdutoService.ts";
import type { EstoqueService } from "../services/EstoqueService.ts";

export class ProdutoMediator {
  private produtoService: ProdutoService;
  private estoqueService: EstoqueService;

  constructor(produtoService: ProdutoService, estoqueService: EstoqueService) {
    this.produtoService = produtoService;
    this.estoqueService = estoqueService;
  }

  async listarProdutos() {
    return this.produtoService.listar();
  }

  async buscarProdutoPorId(idParam: string) {
    const id = Number(idParam);

    if (!Number.isInteger(id) || id <= 0) throw new Error("ID inválido");

    const produto = await this.produtoService.buscarPorId(id);
    const estoque = await this.estoqueService.buscarPorProdutoId(id);

    return {
      ...produto,
      estoque: estoque.quantidade,
      disponivel: estoque.quantidade > 0,
    };
  }
}
