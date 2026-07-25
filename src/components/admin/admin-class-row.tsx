"use client";

import { useTransition } from "react";
import { deleteClassAction } from "@/app/admin/class-actions";
import { Trash2 } from "lucide-react";

type Props = {
  id: string;
  title: string;
  destination: string;
  dateIso: string | null;
  duration: number;
  meetingLink: string;
  isPast: boolean;
};

export function AdminClassRow({
  id,
  title,
  destination,
  dateIso,
  duration,
  meetingLink,
  isPast,
}: Props) {
  const [isPending, startTransition] = useTransition();

  const formatted =
    dateIso &&
    new Date(dateIso).toLocaleString("es-CO", {
      dateStyle: "short",
      timeStyle: "short",
    });

  return (
    <tr className="border-b border-white/5">
      <td className="py-3 pr-4">
        <p className="font-medium text-slate-900">{title}</p>
        <p className="text-xs text-slate-500">{duration} min</p>
      </td>
      <td className="py-3 pr-4 text-xs text-slate-500">{destination}</td>
      <td className="py-3 pr-4 text-sm text-slate-500">{formatted ?? "—"}</td>
      <td className="py-3 pr-4">
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
            isPast ? "bg-slate-100 text-slate-500" : "bg-mq-accent/15 text-mq-accent"
          }`}
        >
          {isPast ? "Finalizada" : "Próxima"}
        </span>
      </td>
      <td className="py-3 pr-4">
        <a
          href={meetingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-mq-accent hover:underline"
        >
          Enlace
        </a>
      </td>
      <td className="py-3 text-right">
        <button
          type="button"
          disabled={isPending}
          onClick={() =>
            startTransition(async () => {
              await deleteClassAction(id);
            })
          }
          className="inline-flex items-center gap-1 rounded-lg border border-rose-500/30 px-2 py-1 text-xs text-rose-300 hover:bg-rose-500/10 disabled:opacity-50"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Eliminar
        </button>
      </td>
    </tr>
  );
}
