import { getRequiredAuthSession } from "@/src/lib/auth";

export default async function Page() {
  const session = await getRequiredAuthSession();

  return (
    <div>
      <div>{session?.user?.name}</div>
      <div>{session?.user ? "Connecté" : "Pas connecté"}</div>
    </div>
  );
}
