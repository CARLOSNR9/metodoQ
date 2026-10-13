import type { TrainingQuestion } from "@/lib/questions/types";
import { getMirNet } from "@/lib/training/mir-scoring";

/**
 * Preguntas marcadas «con duda» durante un simulacro MIR, como la marca que
 * se hace en el cuadernillo del examen real para volver a ellas antes de
 * entregar. Solo viven durante la sesión: sirven para navegar y, al
 * corregir, para ver si arriesgar en las dudosas sumó o restó.
 */
export type MirDoubtSummary = {
  marked: number;
  correct: number;
  wrong: number;
  blank: number;
  /** Netas que aportaron las dudosas respondidas (aciertos − errores / 3). */
  net: number;
};

export function summarizeMirDoubts(
  questions: TrainingQuestion[],
  answers: Record<string, string>,
  doubts: ReadonlySet<string>,
): MirDoubtSummary {
  let correct = 0;
  let wrong = 0;
  let blank = 0;
  for (const question of questions) {
    if (!doubts.has(question.id)) continue;
    const given = answers[question.id];
    if (!given) blank += 1;
    else if (given === question.correctOptionId) correct += 1;
    else wrong += 1;
  }
  return { marked: correct + wrong + blank, correct, wrong, blank, net: getMirNet(correct, wrong) };
}

/** Índice de la siguiente pregunta con duda tras `currentIndex`, dando la vuelta; null si no hay otra. */
export function getNextMirDoubtIndex(
  questions: TrainingQuestion[],
  doubts: ReadonlySet<string>,
  currentIndex: number,
): number | null {
  for (let step = 1; step <= questions.length; step += 1) {
    const index = (currentIndex + step) % questions.length;
    if (doubts.has(questions[index].id)) return index === currentIndex ? null : index;
  }
  return null;
}
