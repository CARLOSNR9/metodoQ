"use client";

import { useTransition } from "react";
import { getFirebaseAuth } from "@/lib/firebase";
import { selectInputClassName } from "@/components/ui/select-field";
import {
  updateResidenteApplicationStatusAction,
  type ResidenteApplicationStatus,
} from "@/app/admin/residente-actions";

type Props = {
  id: string;
  name: string;
  email: string;
  phone: string;
  university: string;
  status: string;
  createdAt: string | null;
};

const STATUS_OPTIONS: { value: ResidenteApplicationStatus; label: string }[] = [
  { value: "pending", label: "Pendiente" },
  { value: "contacted", label: "Contactado" },
  { value: "approved", label: "Aprobado" },
  { value: "rejected", label: "Rechazado" },
];

export function ResidenteApplicationRow({
  id,
  name,
  email,
  phone,
  university,
  status,
  createdAt,
}: Props) {
  const [isPending, startTransition] = useTransition();

  const handleStatusChange = (next: ResidenteApplicationStatus) => {
    startTransition(async () => {
      const token = await getFirebaseAuth().currentUser?.getIdToken();
      const result = await updateResidenteApplicationStatusAction(id, next, token);
      if (result.error) {
        console.error(result.error);
      }
    });
  };

  return (
    <tr className="border-b border-white/5">
      <td className="py-3 pr-4 font-medium text-slate-900">{name}</td>
      <td className="py-3 pr-4 text-slate-500">
        <div>{email}</div>
        <div className="text-xs">{phone}</div>
      </td>
      <td className="py-3 pr-4 text-slate-500">{university || "—"}</td>
      <td className="py-3 pr-4">
        <select
          value={status}
          disabled={isPending}
          onChange={(e) =>
            handleStatusChange(e.target.value as ResidenteApplicationStatus)
          }
          className={`${selectInputClassName} px-2 py-1 text-xs`}
        >
          {STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#0f2744] text-slate-900">
              {opt.label}
            </option>
          ))}
        </select>
      </td>
      <td className="py-3 text-xs text-slate-500">
        {createdAt ? new Date(createdAt).toLocaleDateString("es-CO") : "—"}
      </td>
    </tr>
  );
}
