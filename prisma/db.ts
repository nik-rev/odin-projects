import { PrismaClient } from "@prisma/client/extension";

const opts = {};

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = globalThis as unknown as { db: PrismaClient };

const db = globalForPrisma.db || new PrismaClient(opts);

export default db;

if (process.env.NODE_ENV !== "production") globalForPrisma.db = db;
