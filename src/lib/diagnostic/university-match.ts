function normalize(value: string | null | undefined): string {
  return (value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export function isUdeaUniversity(university: string | null | undefined): boolean {
  const n = normalize(university);
  return n.includes("antioquia") || n.includes("udea");
}

export function isUnalUniversity(university: string | null | undefined): boolean {
  const n = normalize(university);
  return n.includes("nacional") || n.includes("unal");
}

export function isMedicinaInternaSpecialty(specialty: string | null | undefined): boolean {
  const n = normalize(specialty);
  return n.includes("medicina interna");
}

export function supportsDedicatedDiagnosticBattery(
  university: string | null | undefined,
  specialty: string | null | undefined,
): boolean {
  return (
    isMedicinaInternaSpecialty(specialty) &&
    (isUdeaUniversity(university) || isUnalUniversity(university))
  );
}
