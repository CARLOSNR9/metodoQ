const ACT1_UNIVERSITIES = [
  "Universidad Nacional de Colombia (UNAL)",
  "Universidad de Antioquia (UdeA)",
  "Universidad Cooperativa (Pasto)",
  "Universidad Militar Nueva Granada (UMNG)",
  "Pontificia Universidad Javeriana",
  "Universidad del Rosario",
  "Universidad de los Andes",
  "Otra",
] as const;

const ACT1_SPECIALTIES = [
  "Pediatría",
  "Medicina Interna",
  "Anestesiología y Reanimación",
  "Obstetricia y Ginecología",
  "Cirugía General",
  "Ortopedia y Traumatología",
  "Psiquiatría",
  "Radiología e Imágenes Diagnósticas",
  "Medicina del Deporte",
  "Neurología Clínica",
  "Cirugía Plástica",
  "Otorrinolaringología",
  "Dermatología",
  "Urología",
  "Oftalmología",
  "Neurocirugía",
] as const;

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export function getAct1UniversityOptions(): readonly string[] {
  return ACT1_UNIVERSITIES;
}

export function getAct1SpecialtyOptions(): readonly string[] {
  return ACT1_SPECIALTIES;
}

/** Empareja goalUniversity del perfil/onboarding con la etiqueta del diagnóstico Act1. */
export function resolveUniversityFromProfile(
  goalUniversity: string | null | undefined,
): string {
  if (!goalUniversity || goalUniversity === "Otra") {
    return ACT1_UNIVERSITIES[1];
  }

  const exact = ACT1_UNIVERSITIES.find((u) => u === goalUniversity);
  if (exact) return exact;

  const n = normalize(goalUniversity);

  if (n.includes("cooperativa") && n.includes("pasto")) {
    return "Universidad Cooperativa (Pasto)";
  }
  if (n.includes("antioquia") || n.includes("udea")) {
    return "Universidad de Antioquia (UdeA)";
  }
  if (n.includes("nacional") || n.includes("unal")) {
    return "Universidad Nacional de Colombia (UNAL)";
  }
  if (n.includes("militar") || n.includes("nueva granada") || n.includes("umng")) {
    return "Universidad Militar Nueva Granada (UMNG)";
  }
  if (n.includes("javeriana")) {
    return "Pontificia Universidad Javeriana";
  }
  if (n.includes("rosario")) {
    return "Universidad del Rosario";
  }
  if (n.includes("andes")) {
    return "Universidad de los Andes";
  }

  return goalUniversity;
}

export function resolveSpecialtyFromProfile(
  goalSpecialty: string | null | undefined,
): string {
  if (!goalSpecialty) {
    return "Medicina Interna";
  }

  const exact = ACT1_SPECIALTIES.find((s) => s === goalSpecialty);
  if (exact) return exact;

  const n = normalize(goalSpecialty);
  const partial = ACT1_SPECIALTIES.find((s) => {
    const sn = normalize(s);
    return sn.includes(n) || n.includes(sn);
  });

  return partial ?? "Medicina Interna";
}
