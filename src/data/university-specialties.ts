export const universities = [
  "Universidad de Antioquia (UdeA)",
  "Universidad de Caldas",
  "Universidad del Valle (Univalle)",
  "Universidad Nacional de Colombia",
  "MIR (España)",
  "Residencia Perú",
  "ENARM (México)",
  "Pontificia Universidad Javeriana",
  "Universidad El Bosque",
  "Fundación Universitaria Sanitas",
  "Universidad del Rosario",
  "Universidad Militar Nueva Granada",
  "FUCS",
  "Universidad Pontificia Bolivariana (UPB)",
  "Universidad CES",
  "Universidad Icesi",
  "Universidad Industrial de Santander (UIS)",
  "Universidad de Cartagena",
  "Universidad del Sinú (Unisinu)",
  "Universidad del Norte (Uninorte)",
  "Universidad Cooperativa (Pasto)",
  "Otra",
];

export const universitySpecialties: Record<string, string[]> = {
  "Universidad Cooperativa (Pasto)": [
    "Medicina Interna",
    // Agrega más especialidades si aplican
  ],
  "Universidad de Antioquia (UdeA)": [
    "Medicina Interna",
    "Pediatría",
    "Cirugía General",
    "Anestesiología y Reanimación",
    "Obstetricia y Ginecología",
    "Ortopedia y Traumatología",
    "Psiquiatría",
    "Radiología e Imágenes Diagnósticas"
  ],
  "Universidad Nacional de Colombia": [
    "Medicina Interna",
    "Pediatría",
    "Cirugía General",
    "Anestesiología y Reanimación",
    "Obstetricia y Ginecología"
  ],
  // TODO: Agregar el resto de las universidades y sus especialidades de la base de datos original
};

export const defaultSpecialties = [
  "Medicina Interna",
  "Pediatría",
  "Anestesiología y Reanimación",
  "Obstetricia y Ginecología",
  "Cirugía General",
  "Cirugía Plástica",
  "Otra",
];

export function getUniversitiesBySpecialty(): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  
  for (const [uni, specs] of Object.entries(universitySpecialties)) {
    for (const spec of specs) {
      if (!result[spec]) {
        result[spec] = [];
      }
      result[spec].push(uni);
    }
  }
  
  return result;
}

export function getAllSpecialties(): string[] {
  const specialties = new Set<string>();
  
  for (const specs of Object.values(universitySpecialties)) {
    for (const spec of specs) {
      specialties.add(spec);
    }
  }
  
  // Agregamos las por defecto que puedan no estar en la lista aún
  for (const spec of defaultSpecialties) {
    if (spec !== "Otra") {
      specialties.add(spec);
    }
  }
  
  return Array.from(specialties).sort();
}
