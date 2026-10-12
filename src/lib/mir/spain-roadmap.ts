/**
 * «Tu camino a España»: los pasos que da un médico formado en Colombia
 * desde la homologación del título hasta incorporarse a su plaza MIR.
 *
 * Contenido orientativo, contrastado con la Orden SND/854/2026 (BOE de 10
 * de agosto de 2026, convocatoria 2026 para el acceso en 2027) y con el
 * calendario de la convocatoria anterior. Las fechas «aprox.» se basan en
 * lo ocurrido en 2026 y deben revisarse cuando el Ministerio publique las
 * resoluciones de esta convocatoria. Revisar al publicarse cada orden anual.
 */

export type MirRoadmapLink = { label: string; href: string };

export type MirRoadmapStep = {
  id: string;
  title: string;
  /** Cuándo toca, en texto corto («Antes de agosto», «23 ene 2027»…). */
  when: string;
  summary: string;
  details: string[];
  links?: MirRoadmapLink[];
};

export const MIR_ROADMAP_SOURCE = {
  label: "Orden SND/854/2026 (BOE 10/08/2026)",
  href: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17429",
};

/** Plazas de Medicina para personas sin autorización de residencia en España (10 % de 9.676). */
export const MIR_NON_RESIDENT_QUOTA = 968;
export const MIR_MEDICINE_PLACES = 9676;

export const MIR_ROADMAP_STEPS: MirRoadmapStep[] = [
  {
    id: "homologacion",
    title: "Homologa tu título de Medicina",
    when: "Con 6-8 meses de margen",
    summary:
      "Sin homologación no hay MIR: debes tenerla concedida antes de que cierre el plazo de inscripción.",
    details: [
      "Se pide al Ministerio de Ciencia, Innovación y Universidades por su sede electrónica (Real Decreto 889/2022).",
      "El plazo legal para resolver es de 6 meses: empieza como muy tarde a principios de año para llegar a la inscripción de septiembre.",
      "Tener la solicitud «en trámite» no basta: la convocatoria exige reunir y acreditar los requisitos dentro del plazo de solicitudes.",
    ],
    links: [
      {
        label: "Guía de homologación (Consejería de Educación en Colombia)",
        href: "https://educacionfpydeportes.gob.es/colombia/dam/jcr:1a443296-3ada-4715-b9c5-1842fa57a056/homologaci-n.pdf",
      },
    ],
  },
  {
    id: "documentos",
    title: "Apostilla tus documentos y pide la equivalencia de nota media",
    when: "En paralelo a la homologación",
    summary:
      "Título y certificados académicos apostillados en Colombia, y la declaración de equivalencia de tu nota media.",
    details: [
      "La apostilla de documentos colombianos se tramita 100 % en línea con la Cancillería; el estudio tarda hasta 3 días hábiles.",
      "Tu expediente cuenta en la nota final MIR. Si no presentas una certificación válida de tu nota media, se te asigna un 5,00.",
      "Para estudios extranjeros hace falta la declaración de equivalencia de nota media del Ministerio, junto con el certificado de tu universidad.",
    ],
    links: [{ label: "Apostilla en línea (Cancillería)", href: "https://www.cancilleria.gov.co/apostilla-y-legalizacion" }],
  },
  {
    id: "inscripcion",
    title: "Inscríbete en la convocatoria",
    when: "Septiembre (10 días hábiles)",
    summary:
      "La orden se publica en el BOE en agosto y el plazo es corto: en 2026 fue del 1 al 14 de septiembre.",
    details: [
      "Solicitud en línea, con la tasa de examen (31,10 € para Medicina en esta convocatoria).",
      "Adjunta en PDF la homologación, el pasaporte y la certificación académica.",
      "Fuera de plazo no se admite: apunta la fecha en cuanto salga el BOE.",
    ],
    links: [MIR_ROADMAP_SOURCE],
  },
  {
    id: "viaje-examen",
    title: "Organiza el viaje al examen",
    when: "Antes de enero",
    summary: "El examen es presencial en España: reserva vuelo y alojamiento cerca de tu sede con tiempo.",
    details: [
      "Con pasaporte colombiano no necesitas visado para estancias cortas (hasta 90 días) en el espacio Schengen.",
      "Llega con días de margen para descansar del viaje y del cambio horario.",
      "Material del examen: bolígrafo transparente de tinta azul o negra (no lo facilitan) y documento de identidad.",
    ],
  },
  {
    id: "examen",
    title: "Examen MIR",
    when: "Sábado 23 de enero de 2027",
    summary: "200 preguntas más 10 de reserva, cuatro opciones y cuatro horas y media.",
    details: [
      "Cada acierto suma y cada error resta un tercio: practica cuándo arriesgar con tus simulacros.",
      "La nota final combina el examen con tu expediente académico.",
    ],
  },
  {
    id: "adjudicacion",
    title: "Elige tu plaza",
    when: "Aprox. abril-mayo",
    summary:
      "Con tu número de orden eliges especialidad y hospital por vía telemática; puedes hacerlo desde Colombia.",
    details: [
      `Ojo al cupo: hasta ${MIR_NON_RESIDENT_QUOTA} plazas de Medicina (el 10 %) para personas sin autorización de residencia en España. Cuando se agota, quien está en ese cupo ya no puede elegir.`,
      "El cupo no te afecta si tienes nacionalidad de un país de la UE (por ejemplo, doble nacionalidad española o italiana) o autorización de residencia en España.",
      "En 2026 la elección de Medicina fue del 4 al 27 de mayo, en turnos diarios por número de orden.",
    ],
    links: [MIR_ROADMAP_SOURCE],
  },
  {
    id: "visado",
    title: "Pide el visado de estudios",
    when: "Justo después de tener plaza",
    summary:
      "Con la adjudicación, solicita en Colombia el visado de estancia por estudios (formación sanitaria especializada).",
    details: [
      "Se presenta ante el Consulado General de España en Bogotá, con cita previa en su centro de solicitudes.",
      "Prepara pasaporte en vigor, resolución de la plaza, antecedentes penales apostillados, seguro médico y prueba de medios.",
      "Ya en España: NIE y TIE, alta en la Seguridad Social y empadronamiento.",
    ],
    links: [
      {
        label: "Visado de estudios (Exteriores, Colombia)",
        href: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx?scco=Colombia&scd=31&scca=Visados&scs=Visados+Nacionales+-+Visado+de+estudios",
      },
    ],
  },
  {
    id: "incorporacion",
    title: "Incorpórate a tu plaza",
    when: "Aprox. finales de mayo-junio",
    summary: "Toma de posesión en tu hospital y comienzo de la residencia.",
    details: [
      "En 2026 la toma de posesión fue el 4 y 5 de junio, con inicio oficial de la formación el 5 de junio.",
      "Colégiate en el colegio de médicos de tu provincia: es obligatorio para ejercer.",
      "Tu contrato de residente es un contrato laboral: pide el número de afiliación a la Seguridad Social si aún no lo tienes.",
    ],
  },
];
