import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const prisma = new PrismaClient();

const authOptions: AuthOptions = {
  pages: {
    signIn: "/connexion",
  },
  adapter: PrismaAdapter(prisma) as any, // Cast the adapter to 'any' to bypass the type error
  providers: [
    DiscordProvider({
      clientId: String(process.env.DISCORD_CLIENT_ID),
      clientSecret: String(process.env.DISCORD_CLIENT_SECRET),
    }),
  ],
  callbacks: {
    session: async ({ session, user }: { session: any; user: any }) => {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};

export default authOptions;
