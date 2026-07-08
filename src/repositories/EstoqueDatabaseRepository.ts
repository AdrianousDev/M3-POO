import type { IEstoqueRepository } from "../interfaces/IEstoqueRepository.ts";
import type { Estoque } from "../types/Estoque.ts";
import { prisma } from "../../lib/prisma.ts";

export class EstoqueDatabaseRepository implements IEstoqueRepository {
  async buscarPorProdutoId(produtoId: number): Promise<Estoque | null> {
    return await prisma.estoque.findUnique({ where: { produtoId: produtoId } });
  }
}
