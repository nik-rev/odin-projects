import { PrismaClient } from "@prisma/client";

const extension = {
  model: {
    user: {
      changePassword: async (
        userId: string,
        tokenId: string,
        newPassword: string,
      ) => {
        const [user, deletedToken] = await db.$transaction([
          db.user.update({
            data: { password: newPassword },
            where: { id: userId },
          }),
          db.passwordResetToken.delete({
            where: { id: tokenId },
          }),
        ]);

        return [user, deletedToken];
      },
    },
  },
};

const getExtendedPrismaClient = () => {
  return new PrismaClient().$extends(extension);
};

type ExtendedPrismaClient = ReturnType<typeof getExtendedPrismaClient>;

const globalForPrisma = globalThis as unknown as { db: ExtendedPrismaClient };
const db = globalForPrisma.db || getExtendedPrismaClient();

export default db;

if (process.env.NODE_ENV !== "production") globalForPrisma.db = db;
