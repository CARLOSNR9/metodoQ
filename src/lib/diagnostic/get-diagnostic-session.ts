import { getUccPastoDiagnosticSession } from "@/data/ucc-pasto-diagnostico-questions";
import { getUdeaDiagnosticSession } from "@/data/udea-diagnostico-questions";
import { getUnalDiagnosticSession } from "@/data/unal-diagnostico-questions";
import { getUnivalleDiagnosticSession } from "@/data/univalle";
import type { TrainingQuestion } from "@/lib/questions/types";
import { enrichQuestionsWithTheoryPills } from "@/lib/questions/enrich-theory-pills";
import { getEffectiveGoalSpecialty } from "@/lib/diagnostic/ucc-pasto-track";
import {
  isMedicinaInternaSpecialty,
  isUccPastoUniversity,
  isUdeaUniversity,
  isUnalUniversity,
  isUnivalleUniversity,
} from "@/lib/diagnostic/university-match";

/**
 * Batería fija Act1: UNAL, UdeA o UCC Pasto + Medicina Interna; Univalle
 * (examen único de medicina general, cualquier especialidad).
 * Retorna null si la combinación no tiene banco dedicado.
 */
export function getAct1DiagnosticSession(
  university: string | null | undefined,
  specialty: string | null | undefined,
): TrainingQuestion[] | null {
  if (isUnivalleUniversity(university)) {
    return enrichQuestionsWithTheoryPills(getUnivalleDiagnosticSession());
  }
  const effectiveSpecialty = getEffectiveGoalSpecialty(university, specialty);
  if (!isMedicinaInternaSpecialty(effectiveSpecialty)) {
    return null;
  }
  if (isUdeaUniversity(university)) {
    return enrichQuestionsWithTheoryPills(getUdeaDiagnosticSession());
  }
  if (isUnalUniversity(university)) {
    return enrichQuestionsWithTheoryPills(getUnalDiagnosticSession());
  }
  if (isUccPastoUniversity(university)) {
    return enrichQuestionsWithTheoryPills(getUccPastoDiagnosticSession());
  }
  return null;
}
