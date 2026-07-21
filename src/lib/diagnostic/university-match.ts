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

export function isUccPastoUniversity(university: string | null | undefined): boolean {
  const n = normalize(university);
  return (
    (n.includes("cooperativa") && n.includes("pasto")) ||
    n.includes("ucc pasto") ||
    (n.includes("ucc") && n.includes("pasto"))
  );
}

export function isUmngUniversity(university: string | null | undefined): boolean {
  const n = normalize(university);
  return n.includes("militar") || n.includes("nueva granada") || n.includes("umng");
}

export function isMedicinaInternaSpecialty(specialty: string | null | undefined): boolean {
  const n = normalize(specialty);
  return n.includes("medicina interna");
}

export function isCirugiaPlasticaSpecialty(specialty: string | null | undefined): boolean {
  const n = normalize(specialty);
  return n.includes("cirugia plastica") || n.includes("cirugía plástica");
}

export function supportsDedicatedDiagnosticBattery(
  university: string | null | undefined,
  specialty: string | null | undefined,
): boolean {
  const effectiveSpecialty =
    specialty && isMedicinaInternaSpecialty(specialty)
      ? specialty
      : isUccPastoUniversity(university)
        ? "Medicina Interna"
        : isUmngUniversity(university)
          ? "Cirugía Plástica"
          : specialty;
  
  return (
    (isMedicinaInternaSpecialty(effectiveSpecialty) &&
      (isUdeaUniversity(university) ||
        isUnalUniversity(university) ||
        isUccPastoUniversity(university))) ||
    (isCirugiaPlasticaSpecialty(effectiveSpecialty) && isUmngUniversity(university))
  );
}
