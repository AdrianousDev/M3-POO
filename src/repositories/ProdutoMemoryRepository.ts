import type { IProdutoRepository } from "../interfaces/IProdutoRepository.ts";
import type { Produto } from "../types/Produto.ts";
import { Decimal } from "../../generated/prisma/internal/prismaNamespace.ts";

export class ProdutoMemoryRepository implements IProdutoRepository {
  private produtos: Produto[] = [
    { id: 1, nome: "Mouse", preco: new Decimal(50) },
    { id: 2, nome: "Teclado", preco: new Decimal(120) },
    { id: 3, nome: "Monitor", preco: new Decimal(901) },
  ];

  async listar(): Promise<Produto[]> {
    return this.produtos;
  }

  async buscarPorId(id: number): Promise<Produto | null> {
    return this.produtos.find((produto) => produto.id === id) ?? null;
  }
}
