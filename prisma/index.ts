import { Prisma, PrismaClient } from "@prisma/client";

const extension = Prisma.defineExtension({
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
    twoFactorConfirmation: {
      verifyUserTwoFactorById: async (userId: string) => {
        const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique(
          {
            where: {
              userId,
            },
          },
        );

        if (twoFactorConfirmation) {
          // Delete two factor confirmation for next sign in
          await db.twoFactorConfirmation.delete({
            where: { id: twoFactorConfirmation.id },
          });
        }

        return Boolean(twoFactorConfirmation);
      },
    },
  },
});

const getExtendedPrismaClient = () => {
  return new PrismaClient().$extends(extension);
};

type ExtendedPrismaClient = ReturnType<typeof getExtendedPrismaClient>;

const globalForPrisma = globalThis as unknown as { db: ExtendedPrismaClient };
const db = globalForPrisma.db || getExtendedPrismaClient();

export default db;

if (process.env.NODE_ENV !== "production") globalForPrisma.db = db;
