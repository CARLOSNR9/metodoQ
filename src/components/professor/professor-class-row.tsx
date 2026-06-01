"use client";

import Link from "next/link";
import { useTransition } from "react";
import { deleteClassAction } from "@/app/admin/class-actions";
import { ClipboardList, Trash2 } from "lucide-react";

type Props = {
  id: string;
  title: string;
  destination: string;
  dateIso: string | null;
  duration: number;
  meetingLink: string;
  isPast: boolean;
  courseId: string | null;
  attendanceTotal?: number;
};

export function ProfessorClassRow({
  id,
  title,
  destination,
  dateIso,
  duration,
  meetingLink,
  isPast,
  courseId,
  attendanceTotal = 0,
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
        <p className="font-medium text-white">{title}</p>
        <p className="text-xs text-mq-muted">{duration} min</p>
      </td>
      <td className="py-3 pr-4 text-xs text-mq-muted">{destination}</td>
      <td className="py-3 pr-4 text-sm text-mq-muted">{formatted ?? "—"}</td>
      <td className="py-3 pr-4">
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
            isPast ? "bg-white/10 text-mq-muted" : "bg-mq-accent/15 text-mq-accent"
          }`}
        >
          {isPast ? "Finalizada" : "Próxima"}
        </span>
      </td>
      <td className="py-3 pr-4">
        {courseId ? (
          <Link
            href={`/profesor/clases/${id}/asistencia`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-mq-accent hover:underline"
          >
            <ClipboardList size={14} />
            {attendanceTotal > 0 ? `Lista (${attendanceTotal})` : "Pasar lista"}
          </Link>
        ) : (
          <span className="text-xs text-mq-muted">Sin grupo</span>
        )}
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
