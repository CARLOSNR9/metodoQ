import { fetchUserRole } from "@/lib/client/user-role";
import { getPostLoginPath } from "@/lib/roles";

export async function resolvePostLoginPath(uid: string, email: string | null) {
  const role = await fetchUserRole(uid);
  return getPostLoginPath(role, email);
}
