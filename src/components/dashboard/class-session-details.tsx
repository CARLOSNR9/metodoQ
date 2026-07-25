import { ExternalLink, PlayCircle } from "lucide-react";
import { getRecordingLinkLabel } from "@/lib/classes/student-classes";
import type { StudentClassView } from "@/lib/classes/student-classes";

type ClassSessionDetailsProps = {
  cls: Pick<
    StudentClassView,
    "description" | "meetingLink" | "recordingLink" | "isLiveNow" | "isPast"
  >;
  layout?: "row" | "stack";
};

export function ClassSessionDetails({ cls, layout = "stack" }: ClassSessionDetailsProps) {
  const showMeetLink = !cls.isPast || cls.isLiveNow;
  const hasRecording = Boolean(cls.recordingLink?.trim());
  const actionsClass =
    layout === "row"
      ? "flex flex-wrap items-center gap-2"
      : "mt-4 flex flex-wrap gap-2";

  return (
    <div>
      {cls.description?.trim() ? (
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{cls.description}</p>
      ) : null}

      {(showMeetLink || hasRecording) && (
        <div className={actionsClass}>
          {showMeetLink ? (
            <a
              href={cls.meetingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-mq-accent px-4 py-2 text-xs font-bold text-mq-accent-foreground hover:brightness-110 sm:text-sm"
            >
              {cls.isLiveNow ? "Entrar a la clase" : "Unirse (Meet)"}
              <ExternalLink size={14} />
            </a>
          ) : null}

          {hasRecording ? (
            <a
              href={cls.recordingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold text-red-200 hover:bg-red-500/15 sm:text-sm"
            >
              <PlayCircle size={14} />
              {getRecordingLinkLabel(cls.recordingLink!)}
            </a>
          ) : null}
        </div>
      )}
    </div>
  );
}
