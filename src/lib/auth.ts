import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const getAuthSession = () => {
  return getServerSession(authOptions);
};

export const getRequiredAuthSession = async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    throw new Error("Session not found");
  }
  return session;
};
