"use client";

import Link from "next/link";
import { useUserRole } from "@/hooks/use-user-role";
import { getPostLoginPath } from "@/lib/roles";

export function SiteFooterAuthLink() {
  const { role, email, loading } = useUserRole();

  if (loading) {
    return (
      <span className="inline-block h-4 w-12 animate-pulse rounded bg-white/10" aria-hidden />
    );
  }

  if (email) {
    return (
      <Link href={getPostLoginPath(role, email)} className="transition hover:text-white">
        Mi panel
      </Link>
    );
  }

  return (
    <Link href="/login" className="transition hover:text-white">
      Entrar
    </Link>
  );
}
