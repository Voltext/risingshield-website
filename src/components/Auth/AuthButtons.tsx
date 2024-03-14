"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      onClick={() =>
        signIn("discord", {
          callbackUrl: "/mon-espace",
        })
      }
      className="flex items-center justify-center px-4 py-2 bg-discord rounded-md text-black font-medium"
    >
      Se connecter avec Discord
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/connexion" })}
      className="flex items-center justify-center px-4 py-2 bg-discord rounded-md text-black font-medium"
    >
      Se déconnecter
    </button>
  );
};
