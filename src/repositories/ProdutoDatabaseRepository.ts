import { prisma } from "../../lib/prisma.ts";
import type { IProdutoRepository } from "../interfaces/IProdutoRepository.ts";
import type { Produto } from "../types/Produto.ts";

export class ProdutoDatabaseRepository implements IProdutoRepository {
  async listar(): Promise<Produto[]> {
    const result = prisma.produto.findMany();
    return result;
  }

  async buscarPorId(id: number): Promise<Produto | null> {
    const result = prisma.produto.findUnique({ where: { id: id } });
    return result;
  }
}
