import { redirect } from "next/navigation";

export default function SimulacroPage() {
  redirect("/dashboard/entrenar?mode=simulacro");
}
