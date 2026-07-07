import type { Decimal } from "../../generated/prisma/internal/prismaNamespace.ts";

export type Produto = {
  id: number;
  nome: string;
  preco: Decimal;
};
