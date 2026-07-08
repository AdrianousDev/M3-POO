import type { IEstoqueRepository } from "../interfaces/IEstoqueRepository.ts";

export class EstoqueService {
  private estoqueRepository: IEstoqueRepository;

  constructor(estoqueRepository: IEstoqueRepository) {
    this.estoqueRepository = estoqueRepository;
  }

  async buscarPorProdutoId(produtoId: number) {
    const estoque = await this.estoqueRepository.buscarPorProdutoId(produtoId);

    if (!estoque) {
      return {
        produtoId,
        quantidade: 0,
      };
    }

    return estoque;
  }
}
