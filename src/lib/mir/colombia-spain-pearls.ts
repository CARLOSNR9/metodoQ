/**
 * Perlas «Colombia vs España»: diferencias de práctica clínica, normativa y
 * epidemiología que un médico formado en Colombia debe tener presentes en el
 * MIR, donde las preguntas se responden según España.
 *
 * Contenido de redacción propia, contrastado en octubre de 2026 con el BOE
 * (LO 1/2023 de interrupción del embarazo; Orden SND/454/2025 de cartera
 * común) y la jurisprudencia colombiana (Sentencia C-055 de 2022). Pendiente
 * de revisión por el equipo médico; revisar cada año (cribados, calendario
 * vacunal y normativa cambian).
 */

export type MirPearlCategory = "farmacos" | "cribados" | "vacunas" | "legislacion" | "sistema" | "epidemiologia";

export type MirPearl = {
  id: string;
  category: MirPearlCategory;
  title: string;
  colombia: string;
  spain: string;
  /** Qué llevarse al examen. */
  mirTip: string;
};

export const MIR_PEARL_CATEGORIES: { value: MirPearlCategory; label: string }[] = [
  { value: "farmacos", label: "Fármacos" },
  { value: "cribados", label: "Cribados" },
  { value: "vacunas", label: "Vacunas" },
  { value: "legislacion", label: "Legislación" },
  { value: "sistema", label: "Sistema sanitario" },
  { value: "epidemiologia", label: "Epidemiología" },
];

export const MIR_PEARLS: MirPearl[] = [
  {
    id: "paracetamol",
    category: "farmacos",
    title: "Acetaminofén = paracetamol",
    colombia: "Se llama acetaminofén.",
    spain: "Se llama paracetamol; «acetaminofén» casi no se usa.",
    mirTip: "En el enunciado y en las opciones aparecerá siempre como paracetamol.",
  },
  {
    id: "metamizol",
    category: "farmacos",
    title: "Dipirona = metamizol",
    colombia: "Se conoce como dipirona.",
    spain: "Es metamizol (Nolotil), un analgésico de uso muy frecuente.",
    mirTip: "Su efecto adverso típico de examen es la agranulocitosis.",
  },
  {
    id: "anticoagulante",
    category: "farmacos",
    title: "El antivitamina K más usado",
    colombia: "La warfarina es el antivitamina K de referencia.",
    spain: "Se usa sobre todo acenocumarol (Sintrom).",
    mirTip: "Si una pregunta habla de «Sintrom» o acenocumarol, piensa en un antivitamina K: control con INR.",
  },
  {
    id: "cribado-colon",
    category: "cribados",
    title: "Cribado de cáncer colorrectal",
    colombia: "Las pautas dependen de cada EPS y de la guía nacional.",
    spain:
      "Programa poblacional: sangre oculta en heces cada 2 años de los 50 a los 69 años (el Consejo Interterritorial aprobó en 2024 ampliarlo hasta los 74).",
    mirTip: "Cribado poblacional = sangre oculta en heces bienal; la colonoscopia es para el positivo o el alto riesgo.",
  },
  {
    id: "cribado-mama",
    category: "cribados",
    title: "Cribado de cáncer de mama",
    colombia: "Las recomendaciones varían según la guía y el asegurador.",
    spain: "Mamografía cada 2 años a las mujeres de 50 a 69 años (cartera común del SNS).",
    mirTip: "Para el MIR: mamografía bienal de 50 a 69 años, salvo que la pregunta hable de alto riesgo.",
  },
  {
    id: "cribado-cervix",
    category: "cribados",
    title: "Cribado de cáncer de cuello uterino",
    colombia: "Se combinan citología, prueba de VPH e inspección visual según edad y región.",
    spain:
      "Citología cada 3 años de los 25 a los 34 años y, de los 35 a los 65, prueba de VPH cada 5 años (cartera común desde 2019).",
    mirTip: "A partir de los 35 años la prueba de elección es el VPH, no la citología.",
  },
  {
    id: "bcg",
    category: "vacunas",
    title: "BCG",
    colombia: "Se pone al nacer, dentro del esquema nacional (PAI).",
    spain: "No está en el calendario común: la incidencia de tuberculosis es baja.",
    mirTip: "Un niño español sin factores de riesgo no está vacunado de BCG.",
  },
  {
    id: "hepatitis-b",
    category: "vacunas",
    title: "Hepatitis B en el recién nacido",
    colombia: "Dosis de hepatitis B en las primeras horas de vida a todos los recién nacidos.",
    spain:
      "La pauta general va en la hexavalente a los 2, 4 y 11 meses; al nacer solo se vacuna (con inmunoglobulina) al hijo de madre HBsAg positiva.",
    mirTip: "Recién nacido de madre HBsAg+ = vacuna + gammaglobulina en las primeras 12 horas.",
  },
  {
    id: "fiebre-amarilla",
    category: "vacunas",
    title: "Fiebre amarilla",
    colombia: "Forma parte del esquema infantil por ser zona endémica.",
    spain: "No está en el calendario: es una vacuna del viajero, en centros de vacunación internacional.",
    mirTip: "En España aparece en preguntas de medicina del viajero, no en el calendario infantil.",
  },
  {
    id: "menor-maduro",
    category: "legislacion",
    title: "Mayoría de edad sanitaria",
    colombia: "La mayoría de edad es a los 18 años; con menores se aplica la autonomía progresiva que reconoce la jurisprudencia.",
    spain:
      "Desde los 16 años el paciente consiente por sí mismo (Ley 41/2002, de autonomía del paciente), con excepciones como los ensayos clínicos y la reproducción asistida.",
    mirTip: "Paciente de 16 o 17 años capaz: decide él, salvo en actuaciones de grave riesgo para su vida o salud, en las que consiente el representante legal tras oírle.",
  },
  {
    id: "ive",
    category: "legislacion",
    title: "Interrupción voluntaria del embarazo",
    colombia: "Despenalizada hasta la semana 24 (Sentencia C-055 de 2022); después, por las tres causales.",
    spain:
      "A petición de la mujer hasta la semana 14; hasta la 22 por riesgo grave para la madre o anomalías fetales graves. Desde los 16 años sin consentimiento de los padres (LO 1/2023).",
    mirTip: "Los plazos que pregunta el MIR son los españoles: 14 y 22 semanas.",
  },
  {
    id: "eutanasia",
    category: "legislacion",
    title: "Eutanasia",
    colombia: "Reconocida por la Corte Constitucional desde 1997 y regulada por resoluciones del Ministerio de Salud.",
    spain: "Regulada por la Ley Orgánica 3/2021, con solicitudes reiteradas y una comisión de garantía y evaluación.",
    mirTip: "En España es una prestación del SNS: el médico puede objetar, pero el sistema debe garantizarla.",
  },
  {
    id: "donacion",
    category: "legislacion",
    title: "Donación de órganos",
    colombia: "Presunción legal de donación desde la Ley 1805 de 2016.",
    spain:
      "Consentimiento presunto y coordinación de la Organización Nacional de Trasplantes; España lidera la tasa mundial de donantes.",
    mirTip: "Pregunta clásica: España es referente mundial gracias al modelo ONT de coordinadores de trasplante.",
  },
  {
    id: "sns",
    category: "sistema",
    title: "Cómo se organiza la sanidad",
    colombia: "Sistema de aseguramiento con EPS (régimen contributivo y subsidiado).",
    spain:
      "Sistema Nacional de Salud universal, financiado con impuestos y gestionado por las comunidades autónomas; el médico de familia es la puerta de entrada.",
    mirTip: "La Ley 14/1986 General de Sanidad crea el SNS; las preguntas de gestión se refieren a este modelo.",
  },
  {
    id: "chagas",
    category: "epidemiologia",
    title: "Enfermedad de Chagas",
    colombia: "Endémica, con transmisión vectorial en varias regiones.",
    spain:
      "Sin transmisión vectorial; los casos son importados y hay transmisión vertical. Varias comunidades criban a embarazadas procedentes de Latinoamérica.",
    mirTip: "Embarazada latinoamericana en España: piensa en cribado serológico de Chagas.",
  },
  {
    id: "arbovirus",
    category: "epidemiologia",
    title: "Dengue y malaria",
    colombia: "Endémicos: forman parte del diagnóstico diferencial del síndrome febril.",
    spain: "Casi siempre importados (viajeros y migrantes); el dengue autóctono es excepcional.",
    mirTip: "Fiebre al volver del trópico: descarta malaria primero, es la urgencia.",
  },
];

/** Perla del día: cambia cada día y es la misma para todos ese día. */
export function getMirPearlOfTheDay(date: Date = new Date(), pearls: MirPearl[] = MIR_PEARLS): MirPearl {
  const dayNumber = Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000);
  return pearls[dayNumber % pearls.length];
}
