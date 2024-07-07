import { PrismaClient } from "@prisma/client/extension";

// INFO: https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections#prevent-hot-reloading-from-creating-new-instances-of-prismaclient

const globalForPrisma = globalThis as unknown as { db: PrismaClient };

const db = globalForPrisma.db || new PrismaClient();

export default db;

if (process.env.NODE_ENV !== "production") globalForPrisma.db = db;
