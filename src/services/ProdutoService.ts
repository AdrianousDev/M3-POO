import type { IProdutoRepository } from "../interfaces/IProdutoRepository.ts";

export class ProdutoService {
  private produtoRepository: IProdutoRepository;

  constructor(produtoRepository: IProdutoRepository) {
    this.produtoRepository = produtoRepository;
  }

  async listar() {
    return this.produtoRepository.listar();
  }

  async buscarPorId(id: number) {
    const produto = await this.produtoRepository.buscarPorId(id);

    if (!produto) throw new Error("Produto não encontrado");

    return produto;
  }
}
