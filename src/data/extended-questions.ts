import type { TrainingQuestion } from "@/lib/questions/types";

/** Preguntas adicionales para seed incremental (IDs estables en Firestore). */
export const EXTENDED_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ext-ped-01",
    topic: "Pediatría",
    statement:
      "Lactante de 8 meses con fiebre de 39 °C, llanto inconsolable y abducción de la pierna derecha. Al examen la cadera está en flexión y rotación externa. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Artritis séptica de cadera" },
      { id: "B", label: "B", text: "Enfermedad de Legg-Calvé-Perthes" },
      { id: "C", label: "C", text: "Displasia del desarrollo de cadera" },
      { id: "D", label: "D", text: "Sinovitis transitoria de cadera" },
    ],
    correctOptionId: "A",
    explanation:
      "Fiebre alta + postura antálgica + limitación de movimiento en lactante sugieren artritis séptica hasta demostrar lo contrario. Requiere punción articular urgente.",
    keyPoints: ["Artritis séptica es emergencia en pediatría", "Postura en flexión-rotación externa"],
    difficulty: "medium",
    theoryContent: `Artritis séptica de cadera en lactantes: diagnóstico y urgencia

La tríada clásica es fiebre + dolor articular + limitación funcional. En cadera, la postura antálgica típica es flexión, abducción y rotación externa (relaja la cápsula).

Diferencial:
- Sinovitis transitoria: puede tener fiebre baja, pero generalmente menor irritación sistémica.
- Legg-Calvé-Perthes: claudicación crónica, no fiebre alta aguda.
- Displasia: hallazgo en lactante pequeño, no cuadro séptico.

Conducta:
Punción articular urgente (hombro o cadera según articulación) antes o junto con antibióticos. Retrasar aumenta destrucción cartilaginosa.

Regla: "Fiebre + cadera dolorosa = séptica hasta demostrar lo contrario".`,
  },
  {
    id: "ext-gin-01",
    topic: "Ginecología",
    statement:
      "Mujer de 28 años, amenorrea de 9 semanas, dolor pélvico unilateral y sangrado vaginal escaso. β-hCG positiva. Ecografía: saco gestacional intrauterino ausente y masa anexial con embrión sin actividad cardíaca. ¿Diagnóstico?",
    options: [
      { id: "A", label: "A", text: "Aborto incompleto" },
      { id: "B", label: "B", text: "Embarazo ectópico" },
      { id: "C", label: "C", text: "Mola hidatiforme" },
      { id: "D", label: "D", text: "Embarazo viable con retraso" },
    ],
    correctOptionId: "B",
    explanation:
      "Embarazo ectópico: β-hCG positiva sin saco intrauterino y hallazgos anexiales. Riesgo de ruptura; estabilizar y definir manejo médico o quirúrgico.",
    keyPoints: ["Ausencia de saco intrauterino + masa anexial", "Emergencia ginecológica"],
    difficulty: "medium",
    theoryContent: `Embarazo ectópico: criterios ecográficos y manejo

β-hCG positiva sin saco intrauterino visible (con niveles discriminativos) + masa anexial = ectópico hasta probar lo contrario.

Hallazgos de inestabilidad:
- Dolor intenso, signos peritoneales, hipotensión → cirugía urgente.
- Estable con β-hCG baja y masa pequeña → metotrexato posible si candidata.

No confundir con:
- Aborto incompleto (restos intrauterinos).
- Embarazo muy temprano (saco aún no visible): correlacionar β-hCG y control serial.

Emergencia porque la ruptura tubárica causa hemorragia intraabdominal masiva.`,
  },
  {
    id: "ext-urg-01",
    topic: "Urgencias",
    statement:
      "Paciente politraumatizado con Glasgow 8, hipotensión y pupilas midriáticas bilaterales. ¿Cuál es la primera medida?",
    options: [
      { id: "A", label: "A", text: "TAC de cráneo antes de mover al paciente" },
      { id: "B", label: "B", text: "Vía aérea definitiva y ventilación controlada" },
      { id: "C", label: "C", text: "Inicio de manitol endovenoso" },
      { id: "D", label: "D", text: "Reposición con cristaloides exclusivamente" },
    ],
    correctOptionId: "B",
    explanation:
      "En trauma con compromiso neurológico severo, priorizar ABC: asegurar vía aérea y oxigenación antes de estudios de imagen o fármacos específicos.",
    keyPoints: ["ABCDE en trauma", "Glasgow ≤8 indica intubación"],
    difficulty: "easy",
    theoryContent: `Trauma craneoencefálico severo: prioridades ATLS

El enfoque ABCDE aplica siempre. En TCE con Glasgow ≤8:
- A: vía aérea definitiva (intubación) por riesgo de aspiración y ventilación inadecuada.
- B: ventilación controlada, evitar hipoxia e hipercapnia (ambas empeoran lesión cerebral).
- C: control de hemorragia y presión arterial (mantener PPC adecuada).
- D: evaluación neurológica y TAC cuando estabilizado.

Manitol no es primera línea antes de asegurar ABC.
TAC urgente es importante, pero no antes de estabilizar vía aérea si hay compromiso.`,
  },
  {
    id: "ext-farm-01",
    topic: "Farmacología",
    statement:
      "Paciente con fibrilación auricular permanente inicia warfarina. ¿Qué parámetro se debe monitorizar para ajuste de dosis?",
    options: [
      { id: "A", label: "A", text: "TTPa" },
      { id: "B", label: "B", text: "INR" },
      { id: "C", label: "C", text: "Tiempo de protrombina sin normalizar" },
      { id: "D", label: "D", text: "Anti-Xa" },
    ],
    correctOptionId: "B",
    explanation: "La warfarina inhibe la síntesis de factores vitamina K-dependientes; el INR es el estándar de monitorización (meta habitual 2-3).",
    keyPoints: ["Warfarina → INR", "Evitar interacciones y alimentos ricos en vitamina K"],
    difficulty: "easy",
    theoryContent: `Anticoagulación con warfarina: monitorización y metas

La warfarina inhibe la síntesis hepática de factores II, VII, IX y X (dependientes de vitamina K).

Monitorización:
- INR (International Normalized Ratio), meta habitual 2-3 en FA y trombosis venosa.
- TTPa evalúa vía intrínseca (heparina), no warfarina.
- Anti-Xa monitoriza heparinas de bajo peso molecular y DOACs específicos.

Factores que alteran INR:
- Antibióticos, amiodarona, alcohol.
- Dietas ricas en vitamina K (verduras verdes) ↓ efecto.

Inicio: puente con heparina hasta INR terapéutico por latencia de warfarina (días).`,
  },
  {
    id: "ext-epi-01",
    topic: "Epidemiología",
    statement:
      "En un estudio de cohorte se compara la incidencia de diabetes en fumadores vs no fumadores. ¿Qué medida resume el riesgo relativo entre expuestos y no expuestos?",
    options: [
      { id: "A", label: "A", text: "Razón de momios" },
      { id: "B", label: "B", text: "Riesgo atribuible" },
      { id: "C", label: "C", text: "Riesgo relativo" },
      { id: "D", label: "D", text: "Número necesario a tratar" },
    ],
    correctOptionId: "C",
    explanation: "El riesgo relativo (RR) en cohortes compara la incidencia en expuestos vs no expuestos: RR = Ie / Ine.",
    keyPoints: ["Cohorte → riesgo relativo", "Caso-control → razón de momios"],
    difficulty: "easy",
    theoryContent: `Medidas de asociación en estudios epidemiológicos

Estudio de cohorte (parte de expuestos/no expuestos, sigue incidencia):
- Riesgo Relativo (RR) = Incidencia en expuestos / Incidencia en no expuestos.
- Mide cuántas veces más probable es el desenlace en expuestos.

Estudio de caso-control (parte de enfermos/sanos, mira exposición pasada):
- Razón de momios (OR) aproxima RR cuando la enfermedad es rara.

Otras medidas:
- Riesgo atribuible: cuánto exceso de riesgo se debe a la exposición.
- NNT: cuántos hay que tratar para prevenir un evento.

Trampa clásica: usar OR en cohorte o RR en caso-control.`,
  },
  {
    id: "ext-neu-01",
    topic: "Neurología",
    statement:
      "Hombre de 62 años con inicio súbito de hemiparesia derecha y afasia. TA 180/100 mmHg. TAC simple sin hemorragia. ¿Conducta inicial en ventana de reperfusión?",
    options: [
      { id: "A", label: "A", text: "Anticoagulación con heparina de bajo peso molecular" },
      { id: "B", label: "B", text: "Evaluar elegibilidad para trombólisis IV" },
      { id: "C", label: "C", text: "Solo observación y control de TA" },
      { id: "D", label: "D", text: "Doble antiagregación inmediata sin estudio" },
    ],
    correctOptionId: "B",
    explanation:
      "Ictus isquémico agudo sin hemorragia: valorar trombólisis según tiempo, contraindicaciones y criterios clínicos. La TA elevada no contraindica sola la evaluación.",
    keyPoints: ["Código ictus", "Trombólisis según ventana y criterios"],
    difficulty: "medium",
    theoryContent: `Ictus isquémico agudo: ventana de reperfusión

Con TAC sin hemorragia y cuadro compatible, evaluar trombólisis IV (alteplase/tenecteplase) si:
- Tiempo ≤4.5 h desde inicio (según guía y criterios).
- Sin contraindicaciones mayores.
- Déficit medible (NIHSS).

TA elevada no contraindica automáticamente la evaluación; se corrige según protocolo antes de trombolizar.

No iniciar anticoagulación plena ni doble antiagregación aguda sin descartar hemorragia y definir etiología.

Trombectomía mecánica: considerar en oclusiones de gran vaso dentro de ventana extendida con imagen compatible.`,
  },
  {
    id: "ext-nef-01",
    topic: "Nefrología",
    statement:
      "Paciente con creatinina 3.2 mg/dL, potasio 6.8 mEq/L y ondas T picudas en ECG. ¿Tratamiento inmediato del hiperkalemia sintomática?",
    options: [
      { id: "A", label: "A", text: "Furosemida oral exclusivamente" },
      { id: "B", label: "B", text: "Gluconato de calcio IV" },
      { id: "C", label: "C", text: "Restricción hídrica únicamente" },
      { id: "D", label: "D", text: "Bicarbonato oral como única medida" },
    ],
    correctOptionId: "B",
    explanation:
      "Hiperkalemia con cambios ECG: estabilizar membrana con gluconato de calcio IV; luego medidas para reducir potasio (insulina-dextrosa, resinas, diálisis si indicada).",
    keyPoints: ["Cambios ECG → calcio IV primero", "Emergencia metabólica"],
    difficulty: "medium",
    theoryContent: `Hiperkalemia grave con cambios ECG: manejo escalonado

Cambios ECG (ondas T picudas, ensanchamiento QRS, pérdida onda P) = emergencia cardíaca.

Paso 1 — Estabilizar membrana:
Gluconato de calcio IV (efecto en minutos, no baja potasio pero protege el miocardio).

Paso 2 — Redistribuir potasio al interior celular:
Insulina + dextrosa, β2 agonistas, bicarbonato si acidosis.

Paso 3 — Eliminar potasio:
Diuréticos si hay función renal, resinas (poliestireno), diálisis si refractaria o insuficiencia renal.

Furosemida sola no es suficiente en hiperkalemia sintomática con ECG alterado.`,
  },
  {
    id: "ext-inf-01",
    topic: "Infectología",
    statement:
      "Adulto joven con fiebre, exudado amigdalino y adenopatías; prueba rápida heterófilo positiva. ¿Agente etiológico más probable?",
    options: [
      { id: "A", label: "A", text: "Streptococcus pyogenes" },
      { id: "B", label: "B", text: "Virus de Epstein-Barr" },
      { id: "C", label: "C", text: "Coxsackie A" },
      { id: "D", label: "D", text: "Neisseria gonorrhoeae" },
    ],
    correctOptionId: "B",
    explanation:
      "Mononucleosis infecciosa por EBV: faringitis, adenopatías y prueba de Paul-Bunnell (Monospot) positiva. Evitar ampicilina por riesgo de rash.",
    keyPoints: ["Monospot positivo → EBV", "No usar ampicilina"],
    difficulty: "easy",
    theoryContent: `Mononucleosis infecciosa por EBV

Cuadro típico: fiebre, faringitis exudativa, adenopatías cervicales, astenia. Linfocitosis atípica en hemograma.

Diagnóstico:
Prueba heterófila (Monospot/Paul-Bunnell) positiva en adolescentes/adultos jóvenes. PCR de EBV si duda.

Complicaciones a recordar:
- Esplenomegalia → evitar contacto deportivo 3-4 semanas (riesgo de ruptura esplénica).
- Rash maculopapular si se administra ampicilina/amoxicilina (reacción inespecífica, no alergia verdadera).

Strep vs EBV: ambos pueden cursar con exudado; Monospot discrimina en el contexto clínico compatible.`,
  },
  {
    id: "ext-end-01",
    topic: "Endocrinología",
    statement:
      "Paciente con poliuria, polidipsia, glucosa 420 mg/dL, pH 7.1 y cetonas en orina. ¿Diagnóstico y manejo inicial?",
    options: [
      { id: "A", label: "A", text: "Estado hiperosmolar; solo hidratación oral" },
      { id: "B", label: "B", text: "Cetoacidosis diabética; cristaloides e insulina IV" },
      { id: "C", label: "C", text: "Hipoglucemia; dextrosa al 5%" },
      { id: "D", label: "D", text: "Síndrome metabólico; metformina única" },
    ],
    correctOptionId: "B",
    explanation:
      "Cetoacidosis diabética: hiperglucemia, acidosis y cetosis. Manejo con líquidos IV, insulina y corrección electrolítica (potasio).",
    keyPoints: ["CAD = líquidos + insulina", "Vigilar potasio"],
    difficulty: "medium",
    theoryContent: `Cetoacidosis diabética (CAD): criterios y manejo inicial

Criterios: hiperglucemia (>250 mg/dL), pH <7.3 o bicarbonato bajo, cetonemia/cetonuria.

Pilares del tratamiento:
1. Cristaloides IV (expansión inicial, luego mantenimiento según estado volémico).
2. Insulina IV en infusión continua (después de hidratación inicial si K+ adecuado).
3. Reparación de potasio (el insulin mueve K+ intracelular → riesgo de hipokalemia).
4. Buscar desencadenantes (infección, omisión de insulina, IAM).

Estado hiperosmolar: glucosa >600, osmolaridad alta, cetonas mínimas, pH casi normal.

No confundir CAD con hipoglucemia ni síndrome metabólico sin cetoacidosis.`,
  },
  {
    id: "ext-derm-01",
    topic: "Dermatología",
    statement:
      "Lesión pigmentada de 8 mm con bordes irregulares, múltiples colores y crecimiento reciente en espalda. ¿Siguiente paso más apropiado?",
    options: [
      { id: "A", label: "A", text: "Crema de corticoide por 2 semanas" },
      { id: "B", label: "B", text: "Biopsia o excisión para histopatología" },
      { id: "C", label: "C", text: "Observación sin intervención" },
      { id: "D", label: "D", text: "Crioterapia sin diagnóstico" },
    ],
    correctOptionId: "B",
    explanation:
      "Criterios ABCDE y cambios recientes sugieren melanoma hasta probar lo contrario. Requiere biopsia o excisión con estudio histológico.",
    keyPoints: ["ABCDE del melanoma", "Biopsia ante sospecha"],
    difficulty: "easy",
    theoryContent: `Melanoma: criterios ABCDE y conducta diagnóstica

ABCDE:
- Asimetría
- Bordes irregulares
- Color heterogéneo
- Diámetro >6 mm (no exclusivo)
- Evolución (crecimiento, cambio reciente)

Lesión sospechosa → biopsia excisional con márgenes estrechos (no shave) para estadificación Breslow y planear ampliación.

No observar ni tratar empíricamente con corticoides/cryotherapy sin histología.

Factores de mal pronóstico: Breslow grueso, ulceración, metástasis al diagnóstico.`,
  },
];
