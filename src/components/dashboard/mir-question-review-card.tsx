import { CheckCircle2, XCircle } from "lucide-react";
import type { TrainingQuestion } from "@/lib/questions/types";
import { renderWithBold } from "./mir-rich-text";

/**
 * Pregunta corregida para repasar leyendo: enunciado, tu respuesta, la
 * correcta, la explicación y los puntos clave. Se usa al terminar un
 * simulacro o un bloque de práctica y en «Mi estudio».
 *
 * `given`: opción marcada; `null` = sin responder; `undefined` = no se sabe
 * (p. ej. un fallo antiguo del repaso, anterior a que se guardara la respuesta).
 */
export function MirQuestionReviewCard({
  question,
  given,
  wasWrong = false,
  id,
}: {
  question: TrainingQuestion;
  given: string | null | undefined;
  /** Para fallos sin respuesta guardada: se marca igualmente como fallo. */
  wasWrong?: boolean;
  id?: string;
}) {
  const isCorrect = given != null && given === question.correctOptionId;
  const givenOption = given ? question.options.find((option) => option.id === given) : undefined;
  const correctOption = question.options.find((option) => option.id === question.correctOptionId);

  return (
    <article id={id} className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-start justify-between gap-3">
        {question.examArea ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mq-premium-gold">
            {question.examArea}
            {question.officialExam ? (
              <span className="text-slate-400">
                {" "}· MIR {question.officialExam.year} · P. {question.officialExam.number}
              </span>
            ) : null}
          </p>
        ) : (
          <span />
        )}
        {given ? (
          isCorrect ? (
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
          ) : (
            <XCircle className="h-4 w-4 shrink-0 text-rose-400" />
          )
        ) : given === null ? (
          <span className="shrink-0 rounded-full border border-white/15 px-2 py-0.5 text-[10px] font-bold text-slate-400">
            Sin responder
          </span>
        ) : wasWrong ? (
          <XCircle className="h-4 w-4 shrink-0 text-rose-400" />
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white">{renderWithBold(question.statement)}</p>

      <div className="mt-4 space-y-1.5 text-sm">
        {givenOption && !isCorrect ? (
          <p className="text-rose-300">
            Tu respuesta: {givenOption.label}. {givenOption.text}
          </p>
        ) : null}
        {correctOption ? (
          <p className="text-emerald-300">
            Correcta: {correctOption.label}. {correctOption.text}
          </p>
        ) : null}
      </div>

      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-300">
        {renderWithBold(question.explanation)}
      </p>

      {question.keyPoints?.length ? (
        <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-mq-premium-gold">
            Puntos clave
          </p>
          <ul className="mt-1.5 space-y-1 text-xs leading-relaxed text-slate-300">
            {question.keyPoints.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-mq-premium-gold" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
