/** Baremo oficial UCC — hoja de vida Fase I (máx. 20 pts). Res. 108/2022. */

export type UccCvInput = {
  yearsExperience: number;
  internationalMentions: number;
  publicationsBC: number;
  publicationsA: number;
  oralPresentationsISSN: number;
  oralPresentationsScopus: number;
  bookChaptersNonMinciencias: number;
  bookChaptersMinciencias: number;
  hasHealthSpecialization: boolean;
  hasMasters: boolean;
  hasDoctorate: boolean;
};

export const EMPTY_UCC_CV_INPUT: UccCvInput = {
  yearsExperience: 0,
  internationalMentions: 0,
  publicationsBC: 0,
  publicationsA: 0,
  oralPresentationsISSN: 0,
  oralPresentationsScopus: 0,
  bookChaptersNonMinciencias: 0,
  bookChaptersMinciencias: 0,
  hasHealthSpecialization: false,
  hasMasters: false,
  hasDoctorate: false,
};

export type UccCvBreakdown = {
  experience: number;
  mentions: number;
  publications: number;
  otherDegrees: number;
  total: number;
};

export type UccCvAssessment = UccCvBreakdown & {
  total: number;
  maxTotal: 20;
  isCompetitive: boolean;
  needsImprovement: boolean;
  recommendations: string[];
};

const MAX_EXPERIENCE = 3;
const MAX_MENTIONS = 3;
const MAX_PUBLICATIONS = 8;

export function scoreUccCv(input: UccCvInput): UccCvAssessment {
  if (input.hasDoctorate) {
    return {
      experience: 0,
      mentions: 0,
      publications: 0,
      otherDegrees: 20,
      total: 20,
      maxTotal: 20,
      isCompetitive: true,
      needsImprovement: false,
      recommendations: [
        "Con doctorado obtienes la puntuación máxima directa en hoja de vida.",
      ],
    };
  }

  const experience = Math.min(MAX_EXPERIENCE, Math.max(0, input.yearsExperience));
  const mentions = Math.min(
    MAX_MENTIONS,
    Math.max(0, input.internationalMentions) * 3,
  );

  const pubPoints =
    Math.max(0, input.publicationsBC) * 3 +
    Math.max(0, input.publicationsA) * 5 +
    Math.max(0, input.oralPresentationsISSN) * 3 +
    Math.max(0, input.oralPresentationsScopus) * 5 +
    Math.max(0, input.bookChaptersNonMinciencias) * 3 +
    Math.max(0, input.bookChaptersMinciencias) * 5;
  const publications = Math.min(MAX_PUBLICATIONS, pubPoints);

  let otherDegrees = 0;
  if (input.hasMasters) otherDegrees = 2;
  else if (input.hasHealthSpecialization) otherDegrees = 1;

  const total = Math.min(20, experience + mentions + publications + otherDegrees);
  const needsImprovement = total < 10;

  const recommendations: string[] = [];
  if (needsImprovement) {
    recommendations.push(
      "Tu HV proyecta menos de 10 pts. Sin superar P75 en la prueba escrita, esto no se evaluará — pero conviene fortalecerla ya.",
    );
  }
  if (publications < 3 && mentions === 0) {
    recommendations.push(
      "Registra una ponencia oral con memorias ISSN (+3 pts) o colabora en una publicación Publindex B/C (+3 pts).",
    );
  }
  if (publications < 6 && input.publicationsA === 0) {
    recommendations.push(
      "Una publicación A1/A2 de Publindex suma 5 pts — impacto alto en el baremo.",
    );
  }
  if (experience < 3 && input.yearsExperience < 3) {
    recommendations.push(
      `Experiencia laboral: ${input.yearsExperience}/3 años acreditados (1 pt/año, máx. 3).`,
    );
  }
  if (total >= 10 && !needsImprovement) {
    recommendations.push(
      "HV competitiva. Prioriza superar P75 en la prueba escrita para que estos puntos cuenten.",
    );
  }

  return {
    experience,
    mentions,
    publications,
    otherDegrees,
    total,
    maxTotal: 20,
    isCompetitive: total >= 10,
    needsImprovement,
    recommendations,
  };
}

export function parseUccCvFromProfile(
  raw: Partial<UccCvInput> | null | undefined,
): UccCvInput {
  if (!raw) return { ...EMPTY_UCC_CV_INPUT };
  return {
    yearsExperience: raw.yearsExperience ?? 0,
    internationalMentions: raw.internationalMentions ?? 0,
    publicationsBC: raw.publicationsBC ?? 0,
    publicationsA: raw.publicationsA ?? 0,
    oralPresentationsISSN: raw.oralPresentationsISSN ?? 0,
    oralPresentationsScopus: raw.oralPresentationsScopus ?? 0,
    bookChaptersNonMinciencias: raw.bookChaptersNonMinciencias ?? 0,
    bookChaptersMinciencias: raw.bookChaptersMinciencias ?? 0,
    hasHealthSpecialization: raw.hasHealthSpecialization ?? false,
    hasMasters: raw.hasMasters ?? false,
    hasDoctorate: raw.hasDoctorate ?? false,
  };
}
