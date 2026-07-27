import * as ucc from "./ucc-convocatoria";
import * as umng from "./umng-convocatoria";
import type { TrainingQuestion } from "@/lib/questions/types";

export type ConvocatoriaEdition = ucc.UccConvocatoriaEdition | umng.UmngConvocatoriaEdition;
export type ConvocatoriaAttempt = ucc.UccConvocatoriaAttempt | umng.UmngConvocatoriaAttempt;
export type ConvocatoriaEditionStatus = ucc.UccConvocatoriaEditionStatus | umng.UmngConvocatoriaEditionStatus;

export type UccConvocatoriaAttempt = ucc.UccConvocatoriaAttempt;
export type UccConvocatoriaEdition = ucc.UccConvocatoriaEdition;
export type UccConvocatoriaEditionStatus = ucc.UccConvocatoriaEditionStatus;

export const UCC_CONVOCATORIA_EDITIONS = ucc.UCC_CONVOCATORIA_EDITIONS;
export const UMNG_CONVOCATORIA_EDITIONS = umng.UMNG_CONVOCATORIA_EDITIONS;

export function getConvocatoriaEdition(
  code: string,
  planStartedAt?: string | null
): ConvocatoriaEdition | null {
  if (code.startsWith("UMNG")) {
    return umng.getConvocatoriaEdition(code, planStartedAt);
  }
  return ucc.getConvocatoriaEdition(code, planStartedAt);
}

export async function getConvocatoriaAttempt(
  userId: string,
  editionCode: string
): Promise<ConvocatoriaAttempt | null> {
  if (editionCode.startsWith("UMNG")) {
    return umng.getConvocatoriaAttempt(userId, editionCode);
  }
  return ucc.getConvocatoriaAttempt(userId, editionCode);
}

export async function resolveConvocatoriaAttempt(userId: string, code: string) {
  if (code.startsWith("UMNG")) return umng.resolveConvocatoriaAttempt(userId, code);
  return ucc.resolveConvocatoriaAttempt(userId, code);
}

export function getUserConvocatoriaSchedule(
  track: "UCC" | "UMNG" | string | undefined | null,
  planStartedAt?: string | null
): ConvocatoriaEdition[] {
  if (track === "UMNG") {
    return umng.getUserConvocatoriaSchedule(planStartedAt);
  }
  return ucc.getUserConvocatoriaSchedule(planStartedAt);
}

export function buildConvocatoriaEditionStatus(options: {
  edition: ConvocatoriaEdition;
  schedule: ConvocatoriaEdition[];
  attempt?: ConvocatoriaAttempt | null;
  today?: Date;
}): ConvocatoriaEditionStatus {
  if (options.edition.code.startsWith("UMNG")) {
    return umng.buildConvocatoriaEditionStatus({
      edition: options.edition as umng.UmngConvocatoriaEdition,
      schedule: options.schedule as umng.UmngConvocatoriaEdition[],
      attempt: options.attempt as umng.UmngConvocatoriaAttempt | null,
      today: options.today,
    });
  }
  return ucc.buildConvocatoriaEditionStatus({
    edition: options.edition as ucc.UccConvocatoriaEdition,
    schedule: options.schedule as ucc.UccConvocatoriaEdition[],
    attempt: options.attempt as ucc.UccConvocatoriaAttempt | null,
    today: options.today,
  });
}

export function selectConvocatoriaExamQuestions(edition: ConvocatoriaEdition): TrainingQuestion[] {
  if (edition.code.startsWith("UMNG")) {
    return umng.selectConvocatoriaExamQuestions(edition as umng.UmngConvocatoriaEdition);
  }
  return ucc.selectConvocatoriaExamQuestions(edition as ucc.UccConvocatoriaEdition);
}

export async function saveConvocatoriaAttempt(
  userId: string,
  attempt: ConvocatoriaAttempt
): Promise<void> {
  if (attempt.editionCode.startsWith("UMNG")) {
    return umng.saveConvocatoriaAttempt(userId, attempt as umng.UmngConvocatoriaAttempt);
  }
  return ucc.saveConvocatoriaAttempt(userId, attempt as ucc.UccConvocatoriaAttempt);
}

export function getFeaturedConvocatoriaEditionForUser(
  track: string | undefined | null,
  planStartedAt?: string | null
) {
  if (track === "UMNG") return umng.getFeaturedConvocatoriaEditionForUser(planStartedAt);
  return ucc.getFeaturedConvocatoriaEditionForUser(planStartedAt);
}
