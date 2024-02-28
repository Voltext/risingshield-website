import { LoginButton, LogoutButton } from "@/components/Auth/AuthButtons";
import { getAuthSession } from "@/src/lib/auth";

export default async function Page() {
  const session = await getAuthSession();
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <div className="max-w-md w-full border rounded-md border-zinc-200 shadow-sm flex flex-col">
        <div className="p-8">
          <h1 className="text-2xl font-bold">Connexion</h1>
          <p className="mt-2 text-zinc-600">
            Connectez-vous avec votre compte Discord pour accéder à toutes les
            fonctionnalités de l&apos;application.
          </p>
          <div className="mt-8">
            {session?.user ? <LogoutButton /> : <LoginButton />}
          </div>
        </div>
      </div>
    </div>
  );
}
