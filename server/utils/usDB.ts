import { PrismaClient } from "@prisma/client";

let prismaInstance: PrismaClient | null = null;
export function useDB() {
  if (prismaInstance) return prismaInstance;

  prismaInstance = new PrismaClient();
  return prismaInstance;
}
