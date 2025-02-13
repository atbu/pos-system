import { PrismaClient } from '@prisma/client'

/*
This file creates a single instance of Prisma which can be referenced
anywhere in the project, which means that there is only one instance,
opposed to every component creating a Prisma instance as and when it needs it,
which is not only inefficient performance-wise, but can also cause conflicts
when trying to interact with the database.
*/

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma