import type { IEstoqueRepository } from "../interfaces/IEstoqueRepository.ts";
import type { Estoque } from "../types/Estoque.ts";

export class EstoqueMemoryRepository implements IEstoqueRepository {
  private estoques: Estoque[] = [
    { produtoId: 1, quantidade: 20 },
    { produtoId: 2, quantidade: 0 },
    { produtoId: 3, quantidade: 5 },
  ];

  async buscarPorProdutoId(produtoId: number): Promise<Estoque | null> {
    return (
      this.estoques.find((estoque) => estoque.produtoId === produtoId) ?? null
    );
  }
}
