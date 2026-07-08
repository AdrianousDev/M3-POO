import type { Estoque } from "../types/Estoque.ts";

export interface IEstoqueRepository {
  buscarPorProdutoId(produtoId: number): Promise<Estoque | null>;
}
