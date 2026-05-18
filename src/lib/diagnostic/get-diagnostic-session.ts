import { getUdeaDiagnosticSession } from "@/data/udea-diagnostico-questions";
import { getUnalDiagnosticSession } from "@/data/unal-diagnostico-questions";
import type { TrainingQuestion } from "@/lib/questions/types";
import {
  isMedicinaInternaSpecialty,
  isUdeaUniversity,
  isUnalUniversity,
} from "@/lib/diagnostic/university-match";

/**
 * Batería fija Act1: UNAL o UdeA + Medicina Interna.
 * Retorna null si la combinación no tiene banco dedicado.
 */
export function getAct1DiagnosticSession(
  university: string | null | undefined,
  specialty: string | null | undefined,
): TrainingQuestion[] | null {
  if (!isMedicinaInternaSpecialty(specialty)) {
    return null;
  }
  if (isUdeaUniversity(university)) {
    return getUdeaDiagnosticSession();
  }
  if (isUnalUniversity(university)) {
    return getUnalDiagnosticSession();
  }
  return null;
}
