import * as ucc from "./ucc-convocatoria";
import * as umng from "./umng-convocatoria";
import * as univalle from "./univalle-convocatoria";
import type { TrainingQuestion } from "@/lib/questions/types";

export type ConvocatoriaEdition =
  | ucc.UccConvocatoriaEdition
  | umng.UmngConvocatoriaEdition
  | univalle.UnivalleConvocatoriaEdition;
export type ConvocatoriaAttempt =
  | ucc.UccConvocatoriaAttempt
  | umng.UmngConvocatoriaAttempt
  | univalle.UnivalleConvocatoriaAttempt;
export type ConvocatoriaEditionStatus =
  | ucc.UccConvocatoriaEditionStatus
  | umng.UmngConvocatoriaEditionStatus
  | univalle.UnivalleConvocatoriaEditionStatus;

export type UccConvocatoriaAttempt = ucc.UccConvocatoriaAttempt;
export type UccConvocatoriaEdition = ucc.UccConvocatoriaEdition;
export type UccConvocatoriaEditionStatus = ucc.UccConvocatoriaEditionStatus;

export const UCC_CONVOCATORIA_EDITIONS = ucc.UCC_CONVOCATORIA_EDITIONS;
export const UMNG_CONVOCATORIA_EDITIONS = umng.UMNG_CONVOCATORIA_EDITIONS;
export const UNIVALLE_CONVOCATORIA_EDITIONS = univalle.UNIVALLE_CONVOCATORIA_EDITIONS;

const isUnivalle = (code: string | null | undefined) => univalle.isUnivalleEditionCode(code);

export function getConvocatoriaEdition(
  code: string,
  planStartedAt?: string | null
): ConvocatoriaEdition | null {
  if (isUnivalle(code)) return univalle.getConvocatoriaEdition(code);
  if (code.startsWith("UMNG")) {
    return umng.getConvocatoriaEdition(code, planStartedAt);
  }
  return ucc.getConvocatoriaEdition(code, planStartedAt);
}

export async function getConvocatoriaAttempt(
  userId: string,
  editionCode: string
): Promise<ConvocatoriaAttempt | null> {
  if (isUnivalle(editionCode)) return univalle.getConvocatoriaAttempt(userId, editionCode);
  if (editionCode.startsWith("UMNG")) {
    return umng.getConvocatoriaAttempt(userId, editionCode);
  }
  return ucc.getConvocatoriaAttempt(userId, editionCode);
}

export async function resolveConvocatoriaAttempt(userId: string, code: string) {
  if (isUnivalle(code)) return univalle.resolveConvocatoriaAttempt(userId, code);
  if (code.startsWith("UMNG")) return umng.resolveConvocatoriaAttempt(userId, code);
  return ucc.resolveConvocatoriaAttempt(userId, code);
}

export function getUserConvocatoriaSchedule(
  track: "UCC" | "UMNG" | "UNIVALLE" | string | undefined | null,
  planStartedAt?: string | null
): ConvocatoriaEdition[] {
  if (track === "UNIVALLE") return univalle.getUserConvocatoriaSchedule();
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
  if (isUnivalle(options.edition.code)) {
    return univalle.buildConvocatoriaEditionStatus({
      edition: options.edition as univalle.UnivalleConvocatoriaEdition,
      schedule: options.schedule as univalle.UnivalleConvocatoriaEdition[],
      attempt: options.attempt as univalle.UnivalleConvocatoriaAttempt | null,
      today: options.today,
    });
  }
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
  if (isUnivalle(edition.code)) {
    return univalle.selectConvocatoriaExamQuestions(edition as univalle.UnivalleConvocatoriaEdition);
  }
  if (edition.code.startsWith("UMNG")) {
    return umng.selectConvocatoriaExamQuestions(edition as umng.UmngConvocatoriaEdition);
  }
  return ucc.selectConvocatoriaExamQuestions(edition as ucc.UccConvocatoriaEdition);
}

export async function saveConvocatoriaAttempt(
  userId: string,
  attempt: ConvocatoriaAttempt
): Promise<void> {
  if (isUnivalle(attempt.editionCode)) {
    return univalle.saveConvocatoriaAttempt(userId, attempt as univalle.UnivalleConvocatoriaAttempt);
  }
  if (attempt.editionCode.startsWith("UMNG")) {
    return umng.saveConvocatoriaAttempt(userId, attempt as umng.UmngConvocatoriaAttempt);
  }
  return ucc.saveConvocatoriaAttempt(userId, attempt as ucc.UccConvocatoriaAttempt);
}

export function getFeaturedConvocatoriaEditionForUser(
  track: string | undefined | null,
  planStartedAt?: string | null
) {
  if (track === "UNIVALLE") return univalle.getFeaturedConvocatoriaEditionForUser(planStartedAt);
  if (track === "UMNG") return umng.getFeaturedConvocatoriaEditionForUser(planStartedAt);
  return ucc.getFeaturedConvocatoriaEditionForUser(planStartedAt);
}

export type ConvocatoriaTrack = "UCC" | "UMNG" | "UNIVALLE";

/** Pista a la que pertenece una edición según su código. */
export function getConvocatoriaTrack(code: string | null | undefined): ConvocatoriaTrack {
  if (isUnivalle(code)) return "UNIVALLE";
  if (code?.startsWith("UMNG")) return "UMNG";
  return "UCC";
}

/** Nombre visible de la pista (p. ej. «Univalle»). */
export function getConvocatoriaTrackLabel(code: string | null | undefined): string {
  const track = getConvocatoriaTrack(code);
  return track === "UNIVALLE" ? "Univalle" : track;
}
