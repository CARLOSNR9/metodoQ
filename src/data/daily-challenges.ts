import { DemoQuestion } from "@/components/demo/demo-view";

export const DAILY_CHALLENGES: DemoQuestion[] = [
  {
    id: "pill-day-1",
    topic: "Semiología",
    statement: "Un paciente de 72 años con antecedente de hipertensión arterial mal controlada presenta un ruido de baja frecuencia al final de la diástole (presístole), mejor escuchado en el ápex con la campana. ¿Cuál es la causa fisiopatológica más probable?",
    options: [
      { id: "A", label: "A", text: "Vibración por llenado rápido ventricular (S3)." },
      { id: "B", label: "B", text: "Contracción auricular contra un ventrículo rígido (S4)." },
      { id: "C", label: "C", text: "Apertura de válvula mitral estenosada." },
      { id: "D", label: "D", text: "Cierre retardado de la válvula pulmonar." }
    ],
    correctOptionId: "B",
    explanation: "El cuarto ruido (S4) es causado por la sístole auricular que empuja sangre hacia un ventrículo con distensibilidad disminuida, común en hipertrofia por hipertensión crónica.",
    keyPoints: ["Ocurre en presístole", "Indica rigidez ventricular", "Signo clásico de HTA crónica"]
  },
  {
    id: "pill-day-2",
    topic: "Cardiología",
    statement: "Hombre de 65 años con dolor torácico opresivo y elevación del ST en V2-V4. Se encuentra en un centro sin hemodinamia y el traslado tardará >3 horas. ¿Conducta inmediata?",
    options: [
      { id: "A", label: "A", text: "Traslado inmediato para angioplastia primaria." },
      { id: "B", label: "B", text: "Administrar terapia fibrinolítica sistémica IV." },
      { id: "C", label: "C", text: "Esperar troponinas para confirmar diagnóstico." },
      { id: "D", label: "D", text: "Iniciar solo manejo médico con doble antiagregación." }
    ],
    correctOptionId: "B",
    explanation: "En IAMCEST, si la angioplastia no puede realizarse en <120 min, se debe realizar fibrinólisis en los primeros 30 min para salvar miocardio.",
    keyPoints: ["Tiempo es músculo", "Fibrinólisis si traslado >120 min", "Puerta-aguja <30 min"]
  },
  {
    id: "pill-day-3",
    topic: "Endocrinología",
    statement: "Paciente femenina con IMC de 33 kg/m² y HbA1c de 8.4% a pesar de dosis máxima de Metformina. No tiene enfermedad cardiovascular. ¿Qué fármaco es la mejor adición según ACE 2025?",
    options: [
      { id: "A", label: "A", text: "Sulfonilureas (Gliclazida)." },
      { id: "B", label: "B", text: "Insulina basal nocturna." },
      { id: "C", label: "C", text: "Agonistas del receptor GLP-1." },
      { id: "D", label: "D", text: "Inhibidores de la DPP-4." }
    ],
    correctOptionId: "C",
    explanation: "Los AR GLP-1 son preferidos en pacientes con obesidad por su alta eficacia glucémica y beneficio en reducción de peso.",
    keyPoints: ["Enfoque holístico (glucemia + peso)", "AR GLP-1 superior en obesidad", "Protección metabólica"]
  },
  {
    id: "pill-day-4",
    topic: "Neumología",
    statement: "Paciente con EPOC Grupo E (exacerbador frecuente) y recuento de eosinófilos de 120 cél/uL. ¿Cuál es el tratamiento de mantenimiento inicial indicado?",
    options: [
      { id: "A", label: "A", text: "Monoterapia con LAMA." },
      { id: "B", label: "B", text: "Terapia dual LABA/LAMA." },
      { id: "C", label: "C", text: "Terapia dual ICS/LABA." },
      { id: "D", label: "D", text: "Terapia triple ICS/LABA/LAMA." }
    ],
    correctOptionId: "B",
    explanation: "Para el Grupo E, la combinación LABA/LAMA es el pilar para reducir exacerbaciones. Los corticoides (ICS) solo se añaden si eosinófilos >300.",
    keyPoints: ["Grupo E = Doble broncodilatación", "Eosinófilos guían uso de ICS", "LABA/LAMA reduce mortalidad"]
  },
  {
    id: "pill-day-5",
    topic: "Infectología",
    statement: "Paciente con diagnóstico de TB Multidrogorresistente (MDR). ¿Cuál es la periodicidad del seguimiento de los contactos domiciliarios según MinSalud?",
    options: [
      { id: "A", label: "A", text: "Mensual hasta que el índice sea negativo." },
      { id: "B", label: "B", text: "Trimestral durante tratamiento y semestral por 2 años después." },
      { id: "C", label: "C", text: "Única valoración con PPD al inicio." },
      { id: "D", label: "D", text: "Semestral constante por 5 años." }
    ],
    correctOptionId: "B",
    explanation: "La norma técnica colombiana exige vigilancia trimestral de contactos durante el tratamiento de TB MDR para detección temprana de nuevos casos.",
    keyPoints: ["Vigilancia activa trimestral", "Seguimiento post-cura por 2 años", "Prioridad de salud pública"]
  },
  {
    id: "pill-day-6",
    topic: "Neurología",
    statement: "Paciente con hemiparesia súbita y afasia de 45 min de evolución. ¿Qué escala es fundamental para decidir terapia de reperfusión?",
    options: [
      { id: "A", label: "A", text: "Escala de Glasgow." },
      { id: "B", label: "B", text: "Escala ABCD2." },
      { id: "C", label: "C", text: "Escala NIHSS." },
      { id: "D", label: "D", text: "Escala ASPECTS." }
    ],
    correctOptionId: "C",
    explanation: "La NIHSS es el estándar para cuantificar el déficit neurológico y es criterio de inclusión/exclusión para trombólisis.",
    keyPoints: ["NIHSS = Cuantificación objetiva", "Decisión terapéutica rápida", "FAST es solo prehospitalario"]
  },
  {
    id: "pill-day-7",
    topic: "Bioestadística",
    statement: "Se aplica una prueba diagnóstica con Sensibilidad 99% y Especificidad 95% en una población con Prevalencia muy baja. ¿Por qué el Valor Predictivo Positivo (VPP) es bajo?",
    options: [
      { id: "A", label: "A", text: "Porque el VPP depende directamente de la prevalencia." },
      { id: "B", label: "B", text: "Porque la sensibilidad es demasiado alta." },
      { id: "C", label: "C", text: "Por el sesgo de altura en ciudades como Bogotá." },
      { id: "D", label: "D", text: "Porque los valores predictivos son invariables." }
    ],
    correctOptionId: "A",
    explanation: "Matemáticamente (Bayes), si la prevalencia es casi cero, los falsos positivos superarán a los verdaderos, bajando drásticamente el VPP.",
    keyPoints: ["VPP depende de la Prevalencia", "Teorema de Bayes aplicado", "Cuidado con tamizajes masivos"]
  }
];
