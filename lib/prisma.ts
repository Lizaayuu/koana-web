import { PrismaClient } from '@prisma/client';

// Mencegah Next.js membuat koneksi database berulang kali saat kita sedang ngoding (Hot Reloading)
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;