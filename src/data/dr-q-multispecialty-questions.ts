import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Banco universal MetodoQ · Dr. Q — lote multispecialidad (examen Medicina Interna).
 * Aplica a cualquier universidad y especialidad.
 */
export const DR_Q_MULTISPECIALTY_QUESTIONS: TrainingQuestion[] = [
  {
    id: "dr-q-131",
    examArea: "Endocrinología / Cirugía metabólica",
    topic: "Endocrinología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "endocrinologia", "obesidad", "cirugia_metabolica", "dm2"],
    statement:
      "Paciente femenina de 40 años, asiste a consulta de control para patologías crónicas. Mide 1.70 m, pesa 95 kg (IMC 32.9 kg/m²) y presenta circunferencia abdominal de 110 cm. Tiene antecedente de diabetes mellitus tipo 2 en tratamiento con esquema basal-bolo de insulina, antidiabéticos orales y un agonista del receptor GLP-1 semanal. Laboratorios: HbA1c 13.5%, colesterol total 350 mg/dL, LDL 190 mg/dL, HDL 34 mg/dL. Refiere mala adherencia al plan de alimentación y ejercicio. Aporta registros de glucometrías persistentemente fuera de metas y refiere aumento de peso a pesar de más de 3 meses de tratamiento. ¿Cuál es la conducta más apropiada?",
    options: [
      { id: "A", label: "A", text: "Ajustar únicamente las dosis de insulina según el reporte glucométrico." },
      { id: "B", label: "B", text: "Realizar remisión a cirugía bariátrica/metabólica." },
      { id: "C", label: "C", text: "Aumentar la dosis del agonista GLP-1 a dosis para manejo de obesidad." },
      {
        id: "D",
        label: "D",
        text: "Realizar asesoría intensiva sobre medidas no farmacológicas y optimizar al máximo el tratamiento farmacológico actual antes de considerar otras estrategias.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Obesidad (IMC 32.9) con DM2 severamente descontrolada (HbA1c 13.5%) pese a tratamiento médico intensivo (insulina basal-bolo, ADO, GLP-1) y ganancia de peso. Indicación de cirugía metabólica según recomendaciones actuales (IMC 30-34.9 + DM2 refractaria).",
    keyPoints: [
      "IMC ≥30 + DM2 mal controlada pese a tratamiento óptimo → cirugía metabólica.",
      "Fracaso terapéutico: HbA1c muy elevada + polifarmacia + ganancia de peso.",
      "Seguir aumentando insulina favorece más ganancia ponderal.",
      "La cirugía metabólica puede lograr remisión parcial o completa de DM2.",
    ],
    theoryContent: `ENDOCRINOLOGÍA — BY DR Q.
Cirugía metabólica

La clave: IMC 32.9 + HbA1c 13.5% + fracaso de tratamiento médico completo.

Indicaciones modernas: IMC 30-34.9 con DM2 no controlada pese a tratamiento óptimo. Trampa: más educación nutricional cuando ya hay fracaso terapéutico documentado.

Referencias: ADA Standards; ASMBS; UpToDate: Bariatric Surgery in Obesity and DM2.`,
  },
  {
    id: "dr-q-132",
    examArea: "Cirugía General / Trauma",
    topic: "Cirugía General",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "cirugia", "trauma", "abdomen", "atls"],
    statement:
      "Masculino de 30 años presenta trauma abdominal penetrante por arma de fuego. Se encuentra alerta, orientado y con signos vitales dentro de la normalidad. Al examen físico se evidencia herida de entrada en cuadrante superior derecho y herida de salida a nivel inferior derecho de la espalda. Presenta leve dolor difuso a la palpación abdominal sin signos de irritación peritoneal. ¿Qué medida considera de mayor utilidad en el abordaje inicial de este paciente?",
    options: [
      { id: "A", label: "A", text: "Laparotomía exploratoria inmediata." },
      { id: "B", label: "B", text: "Lavado peritoneal diagnóstico." },
      { id: "C", label: "C", text: "Tomografía abdominal contrastada." },
      { id: "D", label: "D", text: "Observación clínica exclusiva durante 24 horas." },
    ],
    correctOptionId: "C",
    explanation:
      "Trauma abdominal penetrante en paciente hemodinámicamente estable sin peritonitis. La tomografía contrastada es la herramienta de mayor utilidad para definir trayecto, órganos comprometidos y necesidad de cirugía.",
    keyPoints: [
      "Estabilidad hemodinámica + ausencia de peritonitis → evaluación con imagen.",
      "Inestable o peritonitis → cirugía urgente.",
      "Manejo selectivo evita laparotomías innecesarias.",
      "El lavado peritoneal diagnóstico ha sido reemplazado por TC en la mayoría de centros.",
    ],
    theoryContent: `CIRUGÍA — BY DR Q.
Trauma abdominal penetrante

La clave: estabilidad hemodinámica, no solo el mecanismo (arma de fuego).

Secuencia: estabilidad → peritonitis → TC contrastada si estable → decidir cirugía según hallazgos.

Trampa: arma de fuego = laparotomía inmediata. FALSO si está estable.

Referencias: ATLS; EAST Guidelines; UpToDate: Penetrating Abdominal Trauma.`,
  },
  {
    id: "dr-q-133",
    examArea: "Pediatría / Infectología",
    topic: "Pediatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "pediatria", "lactante_febril", "infeccion"],
    statement:
      "Femenina de 2 meses y medio es llevada a urgencias por presentar desde el día anterior alza térmica no cuantificada. La madre la nota somnolienta y decaída. Tiene esquema de vacunación completo para la edad. Al examen físico se encuentra irritable; durante la otoscopia se evidencia eritema timpánico bilateral, aunque la valoración es difícil por la poca colaboración de la paciente. ¿Cuál es la conducta más adecuada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hospitalizar, solicitar hemograma, hemocultivos, punción lumbar e iniciar antibiótico intravenoso inmediato.",
      },
      { id: "B", label: "B", text: "Iniciar manejo con amoxicilina/clavulanato por otitis media aguda." },
      { id: "C", label: "C", text: "Manejo sintomático con acetaminofén y seguimiento en 24 horas." },
      {
        id: "D",
        label: "D",
        text: "Solicitar hemograma, proteína C reactiva, uroanálisis, Gram y urocultivo por sonda.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "Lactante <3 meses con fiebre y compromiso del estado general. Prioridad: descartar infección bacteriana grave. El eritema timpánico no excluye ITU u otra fuente bacteriana significativa.",
    keyPoints: [
      "Lactante <3 meses con fiebre → estudio sistemático.",
      "ITU es la causa bacteriana más frecuente en este grupo.",
      "Eritema timpánico aislado no confirma otitis ni excluye otra infección.",
      "Urocultivo por sonda reduce contaminación.",
    ],
    theoryContent: `PEDIATRÍA — BY DR Q.
Lactante febril menor de 3 meses

La clave: la edad, no la otoscopia.

Trampa: eritema timpánico → otitis media. Evalúa abordaje del lactante febril: hemograma, PCR, uroanálisis y urocultivo.

Referencias: AAP Febrile Infant Guideline; Nelson Pediatrics; UpToDate: Febrile Infant <90 Days.`,
  },
  {
    id: "dr-q-134",
    examArea: "Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "sca", "avr", "equivalente_st"],
    statement:
      "Paciente masculino de 50 años es llevado a urgencias por cuadro clínico de 40 minutos de evolución consistente en dolor torácico central, opresivo, irradiado a mandíbula y brazo izquierdo. Se realiza electrocardiograma que muestra depresión del segmento ST en DI, DII y V4-V6, asociada a elevación del segmento ST en aVR. ¿Cuál es el diagnóstico presuntivo?",
    options: [
      { id: "A", label: "A", text: "SCASEST." },
      { id: "B", label: "B", text: "SCACEST." },
      { id: "C", label: "C", text: "Angina inestable." },
      { id: "D", label: "D", text: "Pericarditis aguda." },
    ],
    correctOptionId: "B",
    explanation:
      "Elevación del ST en aVR con depresión difusa del ST en múltiples derivaciones es patrón de alto riesgo que sugiere isquemia transmural extensa, frecuentemente por lesión crítica del tronco coronario izquierdo. Equivalente de SCACEST.",
    keyPoints: [
      "ST elevado en aVR + depresión difusa del ST = muy alto riesgo.",
      "Sugiere lesión de tronco izquierdo o enfermedad multivaso.",
      "Equivalente de SCACEST → estrategia invasiva urgente.",
      "Pericarditis: elevación difusa del ST + depresión del PR.",
    ],
    theoryContent: `CARDIOLOGÍA — BY DR Q.
Equivalente de SCACEST · aVR

La clave: elevación del ST en aVR, no solo depresión difusa.

Isquemia subendocárdica global por lesión crítica del TCI o multivaso. Trampa: depresión ST → SCASEST automáticamente.

Referencias: ESC ACS Guidelines; Braunwald's Heart Disease.`,
  },
  {
    id: "dr-q-135",
    examArea: "Ciencias Básicas / Neuroanatomía",
    topic: "Ciencias Básicas",
    difficulty: "easy",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "neuroanatomia", "diafragma"],
    statement:
      "¿Cuál de los siguientes es el encargado de la inervación motora del músculo diafragma?",
    options: [
      { id: "A", label: "A", text: "Nervio frénico." },
      { id: "B", label: "B", text: "Nervio vago." },
      { id: "C", label: "C", text: "Nervio intercostal." },
      { id: "D", label: "D", text: "Nervio accesorio." },
    ],
    correctOptionId: "A",
    explanation:
      "El nervio frénico (C3-C5) es el principal responsable de la inervación motora del diafragma, músculo principal de la respiración.",
    keyPoints: [
      "Nervio frénico: origen C3, C4, C5.",
      "Regla: C3, C4 y C5 mantienen vivo al diafragma.",
      "Lesión bilateral → insuficiencia respiratoria grave.",
      "Nervios intercostales inervan pared torácica, no diafragma.",
    ],
    theoryContent: `CIENCIAS BÁSICAS — BY DR Q.
Inervación del diafragma

Nervio frénico = motor principal del diafragma. Vago: parasimpático torácico/abdominal. Accesorio: trapecio y esternocleidomastoideo.

Referencias: Moore Anatomy; Snell Neuroanatomy; Netter Atlas.`,
  },
  {
    id: "dr-q-136",
    examArea: "Oftalmología / Urgencias",
    topic: "Oftalmología",
    difficulty: "easy",
    tags: ["dr-q", "universal", "metodoq", "oftalmologia", "abrasion_corneal", "urgencias"],
    statement:
      "Hombre de 30 años quien el día anterior, luego de retirarse un lente de contacto, presentó sensación de cuerpo extraño y dolor ocular. Niega secreción, disminución visual u otros síntomas asociados. Al examen físico se encuentra ojo rojo y en la tinción con fluoresceína se evidencia un defecto epitelial corneal. ¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Antibiótico en gotas con lente de contacto blando terapéutico." },
      { id: "B", label: "B", text: "Antibiótico en gotas con parche sin compresión." },
      { id: "C", label: "C", text: "Antibiótico en gotas con parche compresivo." },
      { id: "D", label: "D", text: "Antibiótico en gotas." },
    ],
    correctOptionId: "D",
    explanation:
      "Abrasión corneal asociada a lentes de contacto. Manejo: antibiótico tópico para prevenir sobreinfección (especialmente Pseudomonas). El parche oclusivo ya no se recomienda de rutina.",
    keyPoints: [
      "Fluoresceína identifica defecto epitelial corneal.",
      "Usuarios de lentes de contacto: riesgo de Pseudomonas.",
      "Parche ocular ya no es rutina (no acelera cicatrización, ↑ riesgo infección).",
      "Retirar lentes de contacto y seguimiento clínico.",
    ],
    theoryContent: `OFTALMOLOGÍA — BY DR Q.
Abrasión corneal

Antibiótico tópico sin parche. Trampa histórica: abrasión = parche ocular.

Referencias: AAO; UpToDate: Corneal Abrasions; AAFP Guidelines.`,
  },
  {
    id: "dr-q-137",
    examArea: "Neurología / Urgencias",
    topic: "Neurología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "acv", "trombolisis", "alteplase"],
    statement:
      "Mujer de 65 años, hipertensa y obesa, es evaluada en urgencias tras presentar hemiplejia derecha, afasia y asimetría facial de inicio súbito. Recibió trombólisis con alteplase dentro de la ventana terapéutica. Examen físico: PA 174/90 mmHg, FC 75 lpm, SatO₂ 97%, NIHSS 17 puntos. Glucometría 115 mg/dL. TAC cerebral sin evidencia de hemorragia intracerebral ni cambios isquémicos agudos. ECG: ritmo irregularmente irregular con ausencia de ondas P. ¿Cuál es el siguiente paso más apropiado en el manejo de esta paciente?",
    options: [
      { id: "A", label: "A", text: "Iniciar anticoagulación plena inmediata con heparina." },
      {
        id: "B",
        label: "B",
        text: "Administrar ácido acetilsalicílico inmediatamente después de la trombólisis.",
      },
      {
        id: "C",
        label: "C",
        text: "Realizar vigilancia neurológica estricta y repetir neuroimagen a las 24 horas antes de iniciar terapia antitrombótica.",
      },
      {
        id: "D",
        label: "D",
        text: "Disminuir la presión arterial a cifras menores de 120/80 mmHg en las próximas horas.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "ACV isquémico tratado con alteplase. Contraindicado iniciar antiagregantes o anticoagulantes en las primeras 24 horas hasta repetir neuroimagen y descartar transformación hemorrágica.",
    keyPoints: [
      "Post-alteplase: no AAS ni anticoagulación durante 24 h.",
      "Repetir TAC/RM a las 24 h antes de antitrombóticos.",
      "FA sugiere etiología cardioembólica pero no modifica contraindicación temporal.",
      "Control PA sin descensos bruscos post-trombólisis.",
    ],
    theoryContent: `NEUROLOGÍA — BY DR Q.
Post-trombólisis ACV

La clave: acaba de recibir alteplase, no la fibrilación auricular como primer paso.

Trampa: FA → anticoagulación inmediata. Esperar 24 h y neuroimagen de control.

Referencias: AHA/ASA Stroke Guidelines; UpToDate: Post-Thrombolysis Stroke.`,
  },
  {
    id: "dr-q-138",
    examArea: "Neurología / Cefaleas",
    topic: "Neurología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "migrana", "profilaxis", "asma"],
    statement:
      "Varón de 20 años, con antecedente de asma, consulta por crisis migrañosas persistentes de 6 meses de evolución. Refiere aproximadamente un episodio semanal que requiere tratamiento analgésico. Durante los episodios presenta fotofobia, fonofobia, náuseas y mareo. Ha utilizado naproxeno, ibuprofeno y acetaminofén con cafeína con alivio parcial. Debido a la frecuencia de los episodios, usted decide iniciar tratamiento preventivo. ¿Cuál es la opción más adecuada?",
    options: [
      { id: "A", label: "A", text: "AINEs a demanda." },
      { id: "B", label: "B", text: "Propranolol." },
      { id: "C", label: "C", text: "Venlafaxina." },
      { id: "D", label: "D", text: "Bisoprolol." },
    ],
    correctOptionId: "C",
    explanation:
      "Profilaxis de migraña indicada (~1 crisis/semana). El asma contraindica propranolol y limita otros betabloqueadores. La venlafaxina es alternativa eficaz y segura.",
    keyPoints: [
      "Profilaxis: ≥4 crisis/mes o impacto funcional significativo.",
      "Propranolol clásico en migraña pero contraindicado en asma (β2).",
      "Venlafaxina: alternativa válida cuando betabloqueadores están contraindicados.",
      "AINEs a demanda = tratamiento agudo, no preventivo.",
    ],
    theoryContent: `NEUROLOGÍA — BY DR Q.
Profilaxis de migraña con asma

Trampa: migraña → propranolol automático. Revisar comorbilidades: asma contraindica betabloqueadores.

Referencias: AHS Migraine Prevention; UpToDate: Preventive Treatment of Migraine.`,
  },
  {
    id: "dr-q-139",
    examArea: "Endocrinología / Metabolismo calcio",
    topic: "Endocrinología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "endocrinologia", "hiperparatiroidismo", "calcio"],
    statement:
      "Mujer de 60 años en control de riesgo cardiovascular. Tiene antecedente de hipertensión arterial en tratamiento con losartán y amlodipino a dosis máximas. Signos vitales: PA 115/70 mmHg, FC 80 lpm. Laboratorios: calcio sérico 11.4 mg/dL, K+ 3.8 mEq/L, Na+ 136 mEq/L, creatinina 1.2 mg/dL, 25-hidroxivitamina D 30 ng/mL (VR: 20-40), PTH 60 pg/mL (VR: 12-65), calcio urinario 287 mg/24 h (VR: 100-300). ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Hipercalcemia hipocalciúrica familiar." },
      { id: "B", label: "B", text: "Consumo oculto de diuréticos tiazídicos." },
      { id: "C", label: "C", text: "Enfermedad renal crónica con hiperparatiroidismo secundario." },
      { id: "D", label: "D", text: "Hiperparatiroidismo primario." },
    ],
    correctOptionId: "D",
    explanation:
      "Hipercalcemia con PTH inapropiadamente normal (debería estar suprimida). Hiperparatiroidismo primario. Calcio urinario normal-alto descarta hipercalcemia hipocalciúrica familiar.",
    keyPoints: [
      "Hipercalcemia + PTH no suprimida → hiperparatiroidismo primario.",
      "PTH normal en hipercalcemia = inapropiadamente normal.",
      "Hipocalciúrica familiar: calcio urinario bajo.",
      "Hiperparatiroidismo secundario: hipocalcemia o normocalcemia con ERC.",
    ],
    theoryContent: `ENDOCRINOLOGÍA — BY DR Q.
Hiperparatiroidismo primario

La clave: PTH no suprimida con calcio 11.4 mg/dL. Trampa: PTH en rango normal → descartar HPT. En hipercalcemia, PTH normal es anormal.

Referencias: UpToDate: Primary Hyperparathyroidism; Endocrine Society Guidelines.`,
  },
  {
    id: "dr-q-140",
    examArea: "Ginecología y Obstetricia / RPM",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "obstetricia", "rpm", "pretérmino"],
    statement:
      "Mujer de 20 años, gestación de 30 semanas y 3 días, consulta por cuadro clínico de 5 horas de evolución consistente en salida continua de líquido vaginal que moja la ropa y forma charco en el suelo. Niega contracciones uterinas, dolor pélvico o sangrado vaginal. Al examen físico no se encuentran hallazgos relevantes. Cardiotocografía: patrón reactivo categoría I (ACOG). A la evaluación con espéculo se observa salida de líquido claro a través del orificio cervical externo. ¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Inducir el trabajo de parto inmediatamente." },
      { id: "B", label: "B", text: "Realizar cesárea urgente por ruptura prematura de membranas." },
      {
        id: "C",
        label: "C",
        text: "Manejo expectante intrahospitalario con corticoides antenatales, antibióticos y vigilancia materno-fetal.",
      },
      { id: "D", label: "D", text: "Dar egreso con seguimiento ambulatorio en 48 horas." },
    ],
    correctOptionId: "C",
    explanation:
      "RPM pretérmino a las 30 semanas, sin trabajo de parto, sin infección y con bienestar fetal. Manejo expectante con corticoides, antibióticos y vigilancia para prolongar gestación y mejorar madurez fetal.",
    keyPoints: [
      "RPM pretérmino <34 semanas estable → manejo expectante.",
      "Corticoides: maduración pulmonar. ATB: prolongar latencia y ↓ infección.",
      "Finalizar si corioamnionitis, sufrimiento fetal o trabajo de parto.",
      "RPM sola no indica cesárea.",
    ],
    theoryContent: `GINECOOBSTETRICIA — BY DR Q.
RPM pretérmino

La clave: edad gestacional 30 semanas + estabilidad clínica.

Trampa: ruptura de membranas = terminar embarazo. Antes de 34 semanas sin complicaciones → expectante.

Referencias: ACOG Prelabor Rupture of Membranes; Williams Obstetrics.`,
  },
  {
    id: "dr-q-141",
    examArea: "Ginecología y Obstetricia / Puerperio",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "obstetricia", "endometritis", "puerperio"],
    statement:
      "Femenina de 27 años, en puerperio de parto vaginal con expulsivo prolongado. Fue dada de alta junto con su recién nacido el día anterior. Consulta por sensación de alza térmica, dolor pélvico y sangrado vaginal fétido. Al examen físico: FC 116 lpm, FR 22 rpm, PA 100/70 mmHg. Presenta dolor a la palpación del fondo uterino y al tacto vaginal se evidencia cérvix abierto con salida de material hemático de mal olor. ¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Manejo ambulatorio con amoxicilina/clavulanato y control en 48 horas." },
      { id: "B", label: "B", text: "Legrado uterino inmediato sin medidas adicionales." },
      {
        id: "C",
        label: "C",
        text: "Solicitar ecografía transvaginal y esperar resultados antes de iniciar tratamiento.",
      },
      {
        id: "D",
        label: "D",
        text: "Hospitalización, inicio de antibióticos intravenosos de amplio espectro y evaluación de restos ovulares retenidos.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "Endometritis puerperal: fiebre, taquicardia, dolor uterino, loquios fétidos, cérvix abierto. Hospitalización + ATB IV de amplio espectro + evaluación de restos retenidos.",
    keyPoints: [
      "Dolor uterino + loquios fétidos = endometritis puerperal.",
      "ATB IV inmediato (ej. clindamicina + gentamicina).",
      "No retrasar ATB por ecografía.",
      "Restos placentarios retenidos perpetúan infección.",
    ],
    theoryContent: `GINECOOBSTETRICIA — BY DR Q.
Endometritis puerperal

La clave: dolor uterino + loquios fétidos, no solo sangrado.

Trampa: legrado inmediato sin ATB. Primero tratar infección, luego evacuar restos si indicado.

Referencias: ACOG Postpartum Infections; Williams Obstetrics; UpToDate: Postpartum Endometritis.`,
  },
  {
    id: "dr-q-142",
    examArea: "Ginecología y Obstetricia / Medicina materno-fetal",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "obstetricia", "rcf", "crecimiento_fetal"],
    statement:
      "Mujer de 28 años, G2P1A0, con gestación actual de 33 semanas. Sin antecedentes de importancia. Durante control prenatal trae ecografía obstétrica que reporta índice de líquido amniótico (ILA) de 7 cm y peso fetal estimado en percentil 7 para la edad gestacional. Doppler fetal y Doppler de arterias uterinas dentro de parámetros normales. ¿Cuál es el diagnóstico y la conducta más adecuada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Restricción del crecimiento fetal tardía estadio I; vigilancia estrecha con Doppler y finalización alrededor de las 37-38 semanas.",
      },
      {
        id: "B",
        label: "B",
        text: "Pequeño para la edad gestacional constitucional; continuar control prenatal habitual sin vigilancia adicional.",
      },
      {
        id: "C",
        label: "C",
        text: "Restricción del crecimiento fetal severa; interrupción inmediata del embarazo por alto riesgo de muerte fetal.",
      },
      { id: "D", label: "D", text: "Oligohidramnios severo; hospitalización e inducción inmediata del parto." },
    ],
    correctOptionId: "A",
    explanation:
      "Peso fetal < percentil 10 sugiere RCF. Doppler fetal normal = estadio I. Vigilancia estrecha con Doppler y finalización alrededor de 37-38 semanas.",
    keyPoints: [
      "PFE < p10 → sospechar RCF, no solo PEG constitucional.",
      "Doppler normal en RCF tardía = estadio I → vigilancia.",
      "ILA 7 cm no es oligohidramnios severo.",
      "Interrupción inmediata si Doppler alterado o estadio avanzado.",
    ],
    theoryContent: `GINECOOBSTETRICIA — BY DR Q.
RCF tardía estadio I

PFE percentil 7 + Doppler normal = RCF estadio I. Vigilancia con Doppler seriado; parto ~37-38 semanas si estable.

Referencias: ISUOG Guidelines; Williams Obstetrics; FIGO FGR Recommendations.`,
  },
  {
    id: "dr-q-143",
    examArea: "Ginecología y Obstetricia / Anticoncepción",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia", "les", "anticoncepcion"],
    statement:
      "Mujer de 25 años con diagnóstico de Lupus Eritematoso Sistémico en seguimiento por reumatología. Se encuentra en remisión clínica, sin brotes recientes y con adecuado control farmacológico. Acude a consulta para consejería anticonceptiva. ¿Cuál de los siguientes métodos anticonceptivos NO recomendaría de forma rutinaria?",
    options: [
      { id: "A", label: "A", text: "Dispositivo intrauterino de cobre." },
      { id: "B", label: "B", text: "Implante subdérmico de etonogestrel." },
      { id: "C", label: "C", text: "Anticonceptivos orales combinados con estrógenos." },
      { id: "D", label: "D", text: "Sistema intrauterino liberador de levonorgestrel." },
    ],
    correctOptionId: "C",
    explanation:
      "En LES, los anticonceptivos combinados con estrógenos son los menos recomendados de rutina por riesgo potencial de trombosis y exacerbación, especialmente con anticuerpos antifosfolípidos.",
    keyPoints: [
      "LES + anticoncepción → evitar estrógenos cuando hay alternativas.",
      "Preferir progestágenos solos, DIU de cobre o DIU-LNG.",
      "Anticuerpos antifosfolípidos modifican significativamente la elección.",
      "Remisión clínica no elimina el riesgo trombótico del LES.",
    ],
    theoryContent: `GINECOOBSTETRICIA — BY DR Q.
Anticoncepción en LES

La clave: tiene lupus, no solo que esté estable. Estrógenos = mayor precaución. DIU e implante son opciones seguras en la mayoría.

Referencias: EULAR SLE Reproductive Health; CDC Medical Eligibility Criteria.`,
  },
  {
    id: "dr-q-144",
    examArea: "Hematología / Anemias",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia", "ferropenia"],
    statement:
      "Mujer de 35 años consulta por menstruaciones irregulares y abundantes de varios meses de evolución. Trae hemograma solicitado en consulta previa que reporta: Hb 11.2 g/dL, hematocrito 30.4%, reticulocitos 0.7%, VCM 82 fL, plaquetas 200.000/mm³ y leucocitos 5.800/mm³. ¿Cuál es el diagnóstico más probable y cuáles son las ayudas diagnósticas iniciales más apropiadas?",
    options: [
      { id: "A", label: "A", text: "Anemia hemolítica; solicitar LDH, haptoglobina y prueba de Coombs." },
      {
        id: "B",
        label: "B",
        text: "Anemia ferropénica secundaria a sangrado uterino anormal; solicitar perfil férrico con ferritina sérica.",
      },
      { id: "C", label: "C", text: "Anemia megaloblástica; solicitar vitamina B12 y ácido fólico." },
      { id: "D", label: "D", text: "Anemia de enfermedad crónica; solicitar VSG y proteína C reactiva." },
    ],
    correctOptionId: "B",
    explanation:
      "Menorragia + anemia leve + reticulocitos bajos orienta a anemia ferropénica por pérdidas crónicas. Confirmar con ferritina sérica.",
    keyPoints: [
      "Causa más frecuente de ferropenia en mujeres premenopáusicas: sangrado ginecológico.",
      "Ferropenia temprana puede tener VCM normal (82 fL).",
      "Reticulocitos bajos = ↓ producción, no hemólisis.",
      "Ferritina confirma depósitos de hierro.",
    ],
    theoryContent: `HEMATOLOGÍA — BY DR Q.
Anemia ferropénica por SUA

La clave: menorragia crónica, no solo Hb 11.2. Trampa: esperar VCM <80 para diagnosticar ferropenia.

Referencias: BSH Iron Deficiency Guidelines; Williams Hematology; UpToDate: Anemia Approach.`,
  },
  {
    id: "dr-q-145",
    examArea: "Urgencias / Reanimación",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "urgencias", "rcp", "aesp", "trauma"],
    statement:
      "Masculino de 33 años es traído por el servicio paramédico tras sufrir una caída desde un edificio en contexto de intento suicida. Durante el traslado se decide asegurar la vía aérea mediante secuencia rápida de intubación. Al llegar a urgencias, el monitor muestra ritmo sinusal organizado. Sin embargo, al examen físico usted verifica ausencia de pulso central. ¿Cuál es el paso a seguir en el manejo de este paciente?",
    options: [
      { id: "A", label: "A", text: "Desfibrilación inmediata a 200 J." },
      { id: "B", label: "B", text: "Administrar atropina intravenosa." },
      {
        id: "C",
        label: "C",
        text: "Iniciar reanimación cardiopulmonar de alta calidad y manejo del algoritmo de actividad eléctrica sin pulso.",
      },
      { id: "D", label: "D", text: "Realizar cardioversión sincronizada urgente." },
    ],
    correctOptionId: "C",
    explanation:
      "Ritmo organizado en monitor + ausencia de pulso = actividad eléctrica sin pulso (AESP). Ritmo no desfibrilable: RCP de alta calidad + adrenalina + buscar causas reversibles (H's y T's), especialmente en trauma.",
    keyPoints: [
      "AESP = ritmo organizado sin pulso.",
      "No desfibrilar (solo FV/TV sin pulso).",
      "En trauma: buscar hipovolemia, neumotórax a tensión, taponamiento.",
      "Siempre confirmar pulso, no confiar solo en el monitor.",
    ],
    theoryContent: `URGENCIAS — BY DR Q.
Actividad eléctrica sin pulso

Ritmo sinusal + sin pulso = AESP → RCP + adrenalina + causas reversibles.

Trampa: ritmo organizado = corazón funcionando. Verificar pulso siempre.

Referencias: AHA CPR Guidelines; ATLS; UpToDate: PEA.`,
  },
  {
    id: "dr-q-146",
    examArea: "Cirugía General / Trauma cervical",
    topic: "Cirugía General",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "cirugia", "trauma", "cuello", "vascular"],
    statement:
      "Paciente masculino de 17 años es trasladado a urgencias tras recibir impacto por arma de fuego en cuello durante un atraco callejero. Se encuentra hemodinámicamente estable. Al examen físico presenta orificio de entrada en zona I izquierda del cuello y orificio de salida en zona II derecha. Se evidencia ausencia de pulso carotídeo derecho, hematoma cervical no expansible y ausencia de sangrado activo. ¿Cuál es el manejo más adecuado?",
    options: [
      { id: "A", label: "A", text: "Observación clínica y control seriado del hematoma." },
      { id: "B", label: "B", text: "Angiotomografía de cuello." },
      { id: "C", label: "C", text: "Exploración quirúrgica inmediata del cuello." },
      { id: "D", label: "D", text: "Ecografía Doppler carotídea ambulatoria." },
    ],
    correctOptionId: "C",
    explanation:
      "Ausencia de pulso carotídeo = signo duro de lesión vascular cervical. Obliga exploración quirúrgica urgente independientemente de la estabilidad hemodinámica.",
    keyPoints: [
      "Signos duros: hemorragia pulsátil, hematoma expansivo, soplo, isquemia, ausencia de pulso.",
      "Signo duro → cirugía, no angio-TC previa.",
      "Estabilidad hemodinámica no descarta lesión vascular grave.",
      "Angio-TC útil en signos blandos.",
    ],
    theoryContent: `CIRUGÍA — BY DR Q.
Trauma penetrante de cuello

La clave: ausencia de pulso carotídeo (signo duro), no la estabilidad.

Trampa: paciente estable → angio-TC. Signo duro = cirugía inmediata.

Referencias: ATLS; EAST Penetrating Neck Trauma; UpToDate: Penetrating Neck Trauma.`,
  },
  {
    id: "dr-q-147",
    examArea: "Ortopedia / Trauma",
    topic: "Ortopedia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ortopedia", "sindrome_compartimental", "trauma"],
    statement:
      "Masculino de 32 años con diagnóstico de fractura cerrada de tibia y peroné derecho luego de sufrir un deslizamiento por un barranco. Es llevado exitosamente a manejo quirúrgico. Durante el postoperatorio presenta dolor intenso en la extremidad que no mejora con analgésicos. Signos vitales normales. Al examen físico presenta dolor exacerbado con el estiramiento pasivo de los músculos, palidez distal, parestesias y ausencia de pulsos distales. ¿Cuál es el manejo más adecuado?",
    options: [
      { id: "A", label: "A", text: "Aumentar la analgesia con opioides y observación clínica." },
      { id: "B", label: "B", text: "Solicitar ecografía Doppler arterial de la extremidad." },
      { id: "C", label: "C", text: "Realizar fasciotomía urgente." },
      { id: "D", label: "D", text: "Retirar vendajes y reevaluar en 6 horas." },
    ],
    correctOptionId: "C",
    explanation:
      "Síndrome compartimental agudo: dolor desproporcionado, dolor al estiramiento pasivo, parestesias. Emergencia quirúrgica: fasciotomía urgente.",
    keyPoints: [
      "Signo más precoz: dolor desproporcionado + dolor con estiramiento pasivo.",
      "Ausencia de pulsos = signo tardío; no esperar para diagnosticar.",
      "Fractura de tibia = causa frecuente.",
      "Diagnóstico clínico; no retrasar por Doppler.",
    ],
    theoryContent: `ORTOPEDIA — BY DR Q.
Síndrome compartimental

6 P: Pain, Pain with passive stretch, Paresthesias, Pallor, Paralysis, Pulselessness (tardío).

Tratamiento: fasciotomía urgente. Trampa: esperar ausencia de pulsos.

Referencias: ATLS; UpToDate: Acute Compartment Syndrome.`,
  },
  {
    id: "dr-q-148",
    examArea: "Cirugía Pediátrica / Urología",
    topic: "Pediatría",
    difficulty: "easy",
    tags: ["dr-q", "universal", "metodoq", "pediatria", "urologia", "criptorquidia"],
    statement:
      "Lactante masculino de 8 meses es llevado a consulta de control. Al examen físico se encuentra en buenas condiciones generales. En la evaluación genital se observan genitales externos normales para la edad. A la palpación se identifica testículo derecho dentro de la bolsa escrotal, mientras que el testículo izquierdo se encuentra palpable en el canal inguinal. ¿Cuál es el manejo más adecuado para este paciente?",
    options: [
      { id: "A", label: "A", text: "Observación clínica hasta los 2 años de edad." },
      { id: "B", label: "B", text: "Solicitar ecografía inguinoescrotal antes de tomar decisiones terapéuticas." },
      {
        id: "C",
        label: "C",
        text: "Remisión a cirugía pediátrica/urología pediátrica para corrección quirúrgica (orquidopexia).",
      },
      { id: "D", label: "D", text: "Iniciar tratamiento con testosterona intramuscular." },
    ],
    correctOptionId: "C",
    explanation:
      "Criptorquidia unilateral palpable a los 8 meses. Descenso espontáneo poco probable después de 6 meses. Remitir para orquidopexia idealmente entre 6-18 meses.",
    keyPoints: [
      "Descenso espontáneo raro después de 6 meses.",
      "Testículo palpable → no requiere ecografía.",
      "Orquidopexia entre 6-18 meses de edad.",
      "Riesgos: infertilidad, torsión, cáncer testicular.",
    ],
    theoryContent: `PEDIATRÍA — BY DR Q.
Criptorquidia

La clave: edad 8 meses, no solo que sea palpable. Trampa: ecografía cuando el testículo es palpable (diagnóstico clínico).

Referencias: AUA Cryptorchidism Guidelines; Nelson Pediatrics; UpToDate: Undescended Testes.`,
  },
  {
    id: "dr-q-149",
    examArea: "Hematología / Anemias macrocíticas",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "macrocitosis", "hepatopatia"],
    statement:
      "Señale cuál de las siguientes anemias macrocíticas NO muestra rasgos megaloblásticos en la médula ósea:",
    options: [
      { id: "A", label: "A", text: "Anemia por déficit de vitamina B12." },
      { id: "B", label: "B", text: "Anemia por déficit de ácido fólico." },
      { id: "C", label: "C", text: "Anemia secundaria a hepatopatía crónica." },
      { id: "D", label: "D", text: "Anemia perniciosa." },
    ],
    correctOptionId: "C",
    explanation:
      "La hepatopatía crónica produce macrocitosis no megaloblástica por alteración de lípidos de membrana eritrocitaria, sin defecto en síntesis de ADN.",
    keyPoints: [
      "Megaloblásticas: déficit B12, folato, anemia perniciosa.",
      "No megaloblásticas: alcoholismo, hepatopatía, hipotiroidismo, reticulocitosis.",
      "Megaloblastosis = asincronía nuclear-citoplasmática por defecto ADN.",
      "Neutrófilos hipersegmentados sugieren megaloblastosis.",
    ],
    theoryContent: `HEMATOLOGÍA — BY DR Q.
Macrocitosis megaloblástica vs no megaloblástica

Trampa: macrocitosis = siempre B12/folato. Hepatopatía = macrocitosis sin megaloblastos.

Referencias: Hoffbrand Essential Haematology; UpToDate: Macrocytosis.`,
  },
  {
    id: "dr-q-150",
    examArea: "Hematología / Hemoglobinopatías",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "drepanocitosis", "anemia_hemolitica"],
    statement:
      "Paciente masculino de 24 años, con ascendencia afrodescendiente, consulta por cuadro de fatiga crónica, ictericia intermitente y episodios recurrentes de dolor intenso en extremidades que han requerido múltiples consultas a urgencias. Refiere antecedentes de úlceras maleolares de difícil cicatrización e infecciones respiratorias repetidas desde la infancia. Al examen físico presenta palidez mucocutánea y una cicatriz compatible con úlcera maleolar previa. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Esferocitosis hereditaria." },
      { id: "B", label: "B", text: "Deficiencia de glucosa-6-fosfato deshidrogenasa." },
      { id: "C", label: "C", text: "Drepanocitosis (anemia falciforme)." },
      { id: "D", label: "D", text: "Talasemia menor." },
    ],
    correctOptionId: "C",
    explanation:
      "Anemia hemolítica crónica + crisis vasooclusivas + úlceras maleolares + infecciones recurrentes (asplenia funcional) = drepanocitosis. Confirmar con electroforesis de hemoglobina.",
    keyPoints: [
      "La clave: fenómenos vasooclusivos, no solo anemia.",
      "Úlceras maleolares = hallazgo clásico de drepanocitosis.",
      "Asplenia funcional → infecciones por bacterias encapsuladas.",
      "G6PD: hemólisis episódica; esferocitosis: sin vasooclusión.",
    ],
    theoryContent: `HEMATOLOGÍA — BY DR Q.
Drepanocitosis

Crisis dolorosas + úlceras maleolares + infecciones = pensar HbS. Confirmar con electroforesis.

Referencias: Williams Hematology; UpToDate: Sickle Cell Disease.`,
  },
  {
    id: "dr-q-151",
    examArea: "Cardiología / Fibrilación auricular",
    topic: "Cardiología",
    difficulty: "easy",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "fibrilacion_auricular", "anticoagulacion"],
    statement:
      "Paciente masculino de 58 años con diagnóstico reciente de fibrilación auricular no valvular. Al evaluar la necesidad de anticoagulación, ¿en cuál de las siguientes situaciones estaría MENOS indicada?",
    options: [
      { id: "A", label: "A", text: "Edad menor de 60 años." },
      { id: "B", label: "B", text: "Hipertensión arterial." },
      { id: "C", label: "C", text: "Edad superior a 75 años." },
      { id: "D", label: "D", text: "Insuficiencia cardíaca." },
    ],
    correctOptionId: "A",
    explanation:
      "La anticoagulación en FA se basa en CHA₂DS₂-VASc. Edad <60 años aislada no aporta puntos y es la situación donde menos estaría indicada la anticoagulación.",
    keyPoints: [
      "CHA₂DS₂-VASc guía anticoagulación en FA.",
      "HTA, IC y edad ≥75 aportan puntos de riesgo.",
      "Edad joven aislada = menor indicación de anticoagulación.",
      "No toda FA requiere anticoagulación automáticamente.",
    ],
    theoryContent: `CARDIOLOGÍA — BY DR Q.
Anticoagulación en FA · CHA₂DS₂-VASc

Edad <60 sin otros factores = menor riesgo embólico. HTA, IC y edad ≥75 aumentan indicación.

Referencias: ESC AF Guidelines; UpToDate: AF Anticoagulation.`,
  },
  {
    id: "dr-q-152",
    examArea: "Gastroenterología / EII",
    topic: "Gastroenterología",
    difficulty: "easy",
    tags: ["dr-q", "universal", "metodoq", "gastroenterologia", "colitis_ulcerosa", "eii"],
    statement:
      "Paciente masculino de 28 años consulta por cuadro de varios meses de evolución caracterizado por deposiciones frecuentes con sangre y moco, asociadas a urgencia defecatoria y tenesmo rectal. Refiere pérdida de peso de 4 kg en los últimos meses. ¿Cuál es el síntoma más frecuente en la presentación de la colitis ulcerosa?",
    options: [
      { id: "A", label: "A", text: "Dolor abdominal tipo cólico." },
      { id: "B", label: "B", text: "Diarrea sanguinolenta." },
      { id: "C", label: "C", text: "Fiebre persistente." },
      { id: "D", label: "D", text: "Estreñimiento crónico." },
    ],
    correctOptionId: "B",
    explanation:
      "La manifestación clínica más frecuente y característica de la colitis ulcerosa es la diarrea con sangre, habitualmente con moco, urgencia y tenesmo.",
    keyPoints: [
      "Colitis ulcerosa: diarrea sanguinolenta + tenesmo + urgencia.",
      "Afectación continua desde recto.",
      "Crohn: más dolor abdominal y afectación transmural segmentaria.",
      "Fiebre en brotes graves, no presentación típica.",
    ],
    theoryContent: `GASTROENTEROLOGÍA — BY DR Q.
Colitis ulcerosa

Síntoma cardinal: diarrea sanguinolenta. Trampa: pensar solo en dolor abdominal (más Crohn).

Referencias: ECCO UC Guidelines; Sleisenger GI Disease.`,
  },
  {
    id: "dr-q-153",
    examArea: "Cardiología / Electrocardiografía",
    topic: "Cardiología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "ecg", "bcrd"],
    statement:
      "Paciente masculino de 67 años con antecedente de hipertensión arterial. Durante valoración preoperatoria se realiza electrocardiograma que muestra un QRS de 0.14 segundos, morfología rSR' en V1 con una onda R' terminal ancha y una onda S ancha en derivaciones laterales (I, V5 y V6). ¿Cuál es el diagnóstico electrocardiográfico más probable?",
    options: [
      { id: "A", label: "A", text: "Bloqueo completo de rama izquierda." },
      { id: "B", label: "B", text: "Bloqueo incompleto de rama derecha." },
      { id: "C", label: "C", text: "Bloqueo completo de rama derecha." },
      { id: "D", label: "D", text: "Hemibloqueo anterior izquierdo." },
    ],
    correctOptionId: "C",
    explanation:
      "QRS ≥120 ms + patrón rSR' en V1 + S ancha en I y V6 = bloqueo completo de rama derecha (BCRD).",
    keyPoints: [
      "BCRD: QRS ≥120 ms, rSR' en V1, S ancha en I/V5/V6.",
      "BCRD incompleto: misma morfología pero QRS <120 ms.",
      "BRI: R ancha mellada en I/V6, no rSR' en V1.",
      "Regla: morfología importa más que solo QRS ancho.",
    ],
    theoryContent: `CARDIOLOGÍA — BY DR Q.
Bloqueo completo de rama derecha

rSR' en V1 = orejas de conejo. Activación tardía del VD genera R' en V1 y S ancha lateral.

Referencias: Marriott ECG; Braunwald's Heart Disease.`,
  },
  {
    id: "dr-q-154",
    examArea: "Cardiología / Fibrilación auricular",
    topic: "Cardiología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "fibrilacion_auricular", "cardioversion"],
    statement:
      "Mujer de 60 años, sin antecedentes cardiovasculares conocidos, consulta por palpitaciones de 2 semanas de evolución. Se realiza electrocardiograma que reporta fibrilación auricular con respuesta ventricular entre 100 y 120 lpm. Ecocardiograma transtorácico: aurícula izquierda de 34 mm, válvula mitral estructuralmente normal y sin evidencia de cardiopatía significativa. ¿Cuál es la conducta más apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Control exclusivo de frecuencia con betabloqueador y anticoagulación indefinida.",
      },
      {
        id: "B",
        label: "B",
        text: "Cardioversión eléctrica o farmacológica para restaurar ritmo sinusal tras descartar trombo auricular o anticoagular adecuadamente.",
      },
      { id: "C", label: "C", text: "Ablación urgente de venas pulmonares." },
      { id: "D", label: "D", text: "Observación clínica sin tratamiento específico." },
    ],
    correctOptionId: "B",
    explanation:
      "FA de corta evolución (~2 semanas), aurícula izquierda normal (34 mm) y sin cardiopatía estructural. Alta probabilidad de éxito de cardioversión para control del ritmo.",
    keyPoints: [
      "FA reciente + AI normal = buena candidata a control del ritmo.",
      "Cardioversión tras anticoagulación o ETE para descartar trombo.",
      "FA >48 h requiere anticoagulación previa o ETE.",
      "Ablación no es conducta inicial de elección.",
    ],
    theoryContent: `CARDIOLOGÍA — BY DR Q.
Control del ritmo en FA

FA 2 semanas + AI 34 mm = cardioversión razonable. Trampa: FA → solo betabloqueador. Datos favorecen restaurar ritmo sinusal.

Referencias: ESC AF Guidelines; UpToDate: Rhythm Control in AF.`,
  },
  {
    id: "dr-q-155",
    examArea: "Neumología / EPOC",
    topic: "Neumología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "neumologia", "epoc", "oxigenoterapia"],
    statement:
      "Paciente masculino de 68 años, fumador de larga data, consulta por disnea progresiva. Se realiza espirometría que reporta índice de Tiffeneau (FEV1/FVC) de 65% y FEV1 de 57% del predicho. Gasometría arterial: PaO₂ 53 mmHg. ¿Cuál es el tratamiento que ha demostrado aumentar la supervivencia en este paciente?",
    options: [
      { id: "A", label: "A", text: "Salmeterol inhalado." },
      { id: "B", label: "B", text: "Triple terapia inhalada (LABA/LAMA/ICS)." },
      { id: "C", label: "C", text: "Oxigenoterapia domiciliaria crónica." },
      { id: "D", label: "D", text: "Rehabilitación pulmonar." },
    ],
    correctOptionId: "C",
    explanation:
      "EPOC con hipoxemia severa (PaO₂ 53 mmHg ≤55 mmHg). Indicación clásica de oxigenoterapia domiciliaria crónica, una de las pocas intervenciones que reduce mortalidad.",
    keyPoints: [
      "PaO₂ ≤55 mmHg (o Sat ≤88%) → oxigenoterapia domiciliaria.",
      "Broncodilatadores mejoran síntomas pero no mortalidad como O₂ en hipoxemia severa.",
      "Rehabilitación pulmonar mejora calidad de vida, no es la respuesta principal aquí.",
      "Idealmente ≥15 h/día de oxigenoterapia.",
    ],
    theoryContent: `NEUMOLOGÍA — BY DR Q.
Oxigenoterapia domiciliaria en EPOC

La clave: PaO₂ 53 mmHg, no el FEV1 57%. Trampa: enfocarse en espirometría. Gasometría define indicación de O₂ crónico.

Referencias: GOLD Report; ATS/ERS Oxygen Therapy Guidelines.`,
  },
];
