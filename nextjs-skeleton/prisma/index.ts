import { Prisma, PrismaClient } from "@prisma/client";

const extension = Prisma.defineExtension((client) => {
  return client.$extends({
    model: {
      user: {
        changePassword: async (
          userId: string,
          tokenId: string,
          newPassword: string,
        ) => {
          const [user, deletedToken] = await client.$transaction([
            client.user.update({
              data: { password: newPassword },
              where: { id: userId },
            }),
            client.passwordResetToken.delete({
              where: { id: tokenId },
            }),
          ]);

          return [user, deletedToken];
        },
      },
      twoFactorConfirmation: {
        verifyUserTwoFactorById: async (userId: string) => {
          const twoFactorConfirmation =
            await client.twoFactorConfirmation.findUnique({
              where: {
                userId,
              },
            });

          if (twoFactorConfirmation) {
            // Delete two factor confirmation for next sign in
            await client.twoFactorConfirmation.delete({
              where: { id: twoFactorConfirmation.id },
            });
          }

          return Boolean(twoFactorConfirmation);
        },
      },
    },
  });
});

const getExtendedPrismaClient = () => {
  return new PrismaClient().$extends(extension);
};

type ExtendedPrismaClient = ReturnType<typeof getExtendedPrismaClient>;

const globalForPrisma = globalThis as unknown as {
  readonly db?: ExtendedPrismaClient;
};

const db = globalForPrisma.db ?? getExtendedPrismaClient();

export default db;

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.db = db;
}
