import type { Produto } from "../types/Produto.ts";

export interface IProdutoRepository {
  listar(): Promise<Produto[]>;
  buscarPorId(id: number): Promise<Produto | null>;
}
