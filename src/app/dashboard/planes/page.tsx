import { Metadata } from "next";
import { DashboardPricingView } from "@/components/dashboard/dashboard-pricing-view";

export const metadata: Metadata = {
  title: "Planes PRO | Método Q",
  description: "Elige tu plan y domina el examen de residencia médica.",
};

export default function PlanesPage() {
  return <DashboardPricingView />;
}
