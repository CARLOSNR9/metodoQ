import type { TrainingQuestion } from "@/lib/questions/types";

export const FALLBACK_QUESTIONS: TrainingQuestion[] = [
  {
    id: "q0-semio",
    topic: "Semiología",
    statement:
      "Durante la auscultación cardíaca de un paciente de 72 años con antecedente de hipertensión arterial mal controlada, se detecta un ruido de baja frecuencia al final de la diástole, justo antes del primer ruido cardíaco (S1). Este hallazgo es más prominente en el ápex con la campana del estetoscopio. ¿Cuál es la fisiopatología más probable de este ruido supernumerario?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Vibración de las paredes ventriculares durante el llenado rápido pasivo inicial (S3).",
      },
      {
        id: "B",
        label: "B",
        text: "Contracción auricular contra un ventrículo con distensibilidad disminuida (S4).",
      },
      {
        id: "C",
        label: "C",
        text: "Apertura de una válvula mitral estenosada con cuerdas tendinosas calcificadas.",
      },
      {
        id: "D",
        label: "D",
        text: "Cierre retardado de la válvula pulmonar por un bloqueo de rama derecha.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El cuarto ruido cardíaco (S4) es un ruido presistólico causado por la contracción auricular activa que empuja sangre hacia un ventrículo rígido o con distensibilidad disminuida. Es un signo clásico de hipertrofia ventricular izquierda o isquemia miocárdica, muy común en pacientes con cardiopatía hipertensiva de larga data.",
    keyPoints: [
      "El S4 ocurre al final de la diástole (presístole) y coincide con la sístole auricular.",
      "Indica una disminución en la distensibilidad (compliance) del ventrículo.",
      "Tema: Fisiopatología de los ruidos cardíacos supernumerarios y semiología cardiovascular.",
    ],
  },
  {
    id: "q1",
    topic: "Medicina Interna",
    statement:
      "Un paciente masculino de doce años es ingresado a la sala de reanimación por un cuadro clínico de veinticuatro horas de evolución consistente en poliuria masiva, polidipsia, episodios eméticos repetidos y deterioro progresivo del estado de alerta. Al examen físico, el paciente se encuentra somnoliento, presenta signos de deshidratación grado tres, respiración profunda y laboriosa, una frecuencia cardíaca de ciento treinta y cinco latidos por minuto y una presión arterial de noventa sobre cincuenta y cinco milímetros de mercurio. Los paraclínicos de ingreso reportan una glicemia de cuatrocientos cincuenta miligramos por decilitro, un pH venoso de siete punto cero cinco, bicarbonato sérico de ocho miliequivalentes por litro, cetonemia fuertemente positiva, sodio de ciento treinta y dos miliequivalentes por litro y potasio de tres punto cuatro miliequivalentes por litro. De acuerdo con las guías de práctica clínica consensuadas y actualizadas, ¿cuál es la intervención terapéutica primaria y prioritaria a instaurar durante la primera hora de atención hospitalaria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar una infusión intravenosa de insulina regular a cero punto un unidades por kilogramo por hora de forma inmediata y administrar un bolo compensatorio de bicarbonato de sodio.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar un bolo rápido de cristaloides isotónicos, preferiblemente solución salina al cero punto nueve por ciento, durante veinte a treinta minutos para restituir el volumen circulante.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar simultáneamente la infusión de insulina regular a cero punto cero cinco unidades por kilogramo por hora y reponer potasio a veinte miliequivalentes por litro.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar de manera urgente cristaloides hipotónicos, como solución salina al cero punto cuarenta y cinco por ciento, en bolo rápido para prevenir la hipernatremia.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "En el manejo de la cetoacidosis diabética (CAD), especialmente en pediatría, las guías establecen que la rehidratación inicial es la prioridad absoluta y debe instaurarse antes que la insulina. Se indica un bolo de expansión para restaurar la perfusión tisular y normalizar la filtración glomerular. Iniciar insulina simultáneamente con la expansión incrementa drásticamente el gradiente osmótico, principal factor del edema cerebral secundario, una complicación altamente letal.",
    keyPoints: [
      "Priorizar la rehidratación inicial con cristaloides isotónicos antes de la insulinoterapia.",
      "Evitar el uso rutinario de bicarbonato y el inicio simultáneo de insulina para prevenir el edema cerebral.",
      "Tema: Protocolos de manejo hídrico y electrolítico en CAD y prevención de edema cerebral.",
    ],
  },
  {
    id: "q2",
    topic: "Salud Pública",
    statement:
      "Una paciente femenina de veinticinco años, residente en un área urbana endémica en Colombia, acude a urgencias en su quinto día de enfermedad febril. La fiebre cedió hace doce horas, pero hoy inició con dolor abdominal generalizado, intenso y continuo. Al examen físico presenta FC 110 lpm, TA 100/70 mmHg, hepatomegalia a 3 cm del reborde costal y petequias en extremidades inferiores. ¿Cuál es la clasificación clínica exacta y el grupo de intervención institucional según los lineamientos del Ministerio de Salud?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Dengue grave (Grupo C), requiere remisión inmediata a UCI para soporte inotrópico.",
      },
      {
        id: "B",
        label: "B",
        text: "Dengue sin signos de alarma (Grupo A), manejo ambulatorio con hidratación oral estricta.",
      },
      {
        id: "C",
        label: "C",
        text: "Dengue con signos de alarma (Grupo B2), requiere hospitalización inmediata para hidratación endovenosa y monitoreo.",
      },
      {
        id: "D",
        label: "D",
        text: "Dengue sin signos de alarma con factores de riesgo (Grupo B1), requiere hospitalización preventiva por riesgo de sangrado.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El caso describe la fase crítica del dengue tras la caída de la fiebre (defervescencia). El dolor abdominal intenso y la hepatomegalia >2cm son signos de alarma que indican extravasación de plasma inminente. Según el Ministerio de Salud y la OPS, la presencia de un solo signo de alarma clasifica el caso en el Grupo B2, obligando a hospitalización y reanimación con cristaloides IV para evitar la progresión al choque.",
    keyPoints: [
      "Identificar signos de alarma (dolor abdominal, hepatomegalia) en la fase crítica tras la caída de la fiebre.",
      "El Grupo B2 requiere hospitalización inmediata y reanimación con cristaloides IV.",
      "Tema: Clasificación de severidad del Dengue y fisiopatología de la extravasación plasmática.",
    ],
  },
  {
    id: "q3",
    topic: "Cirugía General",
    statement:
      "Paciente masculino de treinta y cuatro años ingresa por colisión en motocicleta. Se encuentra pálido, confuso, FC 130 lpm, TA 80/40 mmHg y FR 28 rpm. Se detecta inestabilidad mecánica del anillo pélvico (maniobra de compresión medial). El FAST es negativo para líquido libre abdominal. Siguiendo los principios de reanimación de control de daños y ATLS 11ª edición, ¿cuál es la intervención inmediata de mayor impacto en la sobrevida?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar una infusión rápida de 2000 ml de Lactato de Ringer calentado para normalizar la TA sistólica >110 mmHg.",
      },
      {
        id: "B",
        label: "B",
        text: "Trasladar inmediatamente a tomografía (TAC) con contraste para identificar el origen arterial del sangrado.",
      },
      {
        id: "C",
        label: "C",
        text: "Colocar faja pélvica a nivel de trocánteres mayores, activar protocolo de transfusión masiva y administrar ácido tranexámico.",
      },
      {
        id: "D",
        label: "D",
        text: "Preparar quirófano para laparotomía exploratoria de urgencia por sospecha de lesión vascular inadvertida.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El paciente presenta choque hemorrágico grado III-IV por fractura pélvica inestable. Las directrices actuales (ATLS 11ª) priorizan el control mecánico con faja pélvica para reducir el volumen pélvico y facilitar el taponamiento del plexo venoso presacro. Se debe activar el protocolo de transfusión masiva y administrar ácido tranexámico temprano, evitando grandes volúmenes de cristaloides (hipotensión permisiva) para prevenir la coagulopatía.",
    keyPoints: [
      "El control mecánico con faja pélvica es prioritario en fracturas inestables de pelvis.",
      "Aplicar principios de reanimación de control de daños: ácido tranexámico y transfusión balanceada temprana.",
      "Tema: Hipotensión permisiva y abordaje mecánico de inestabilidad pélvica en ATLS 11ª.",
    ],
  },
  {
    id: "q4",
    topic: "Ginecología",
    statement:
      "Paciente de veintiocho años tras parto vaginal instrumentado. Inicia sangrado masivo, rojo rutilante. Presenta palidez severa, diaforesis, frialdad y estado mental confuso (FC 140 lpm, TA 75/40 mmHg). El útero se palpa por encima de la cicatriz umbilical, reblandecido y atónico. Según la estrategia 'Código Rojo', ¿cuál es el grado de choque y la conducta obligatoria en los primeros 20 minutos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Choque moderado. Administrar 500 ml de cristaloides e iniciar goteo de oxitocina profiláctica.",
      },
      {
        id: "B",
        label: "B",
        text: "Choque severo. Garantizar dos accesos venosos, bolos de cristaloides calentados y transfusión inmediata de sangre O negativo o específica.",
      },
      {
        id: "C",
        label: "C",
        text: "Choque leve. Realizar masaje uterino bimanual, administrar misoprostol intrarrectal y observar diuresis.",
      },
      {
        id: "D",
        label: "D",
        text: "Choque severo. Traslado inmediato a quirófano para histerectomía de control de daños sin estabilización previa.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La paciente presenta choque hipovolémico grado severo (>30-40% de volemia) por atonía uterina, evidenciado por compromiso de conciencia, taquicardia extrema e hipotensión. El protocolo Código Rojo exige en los primeros 20 minutos: acceso venoso múltiple, cristaloides calentados y transfusión urgente (sin esperar pruebas cruzadas si es necesario) para restaurar la capacidad de transporte de oxígeno.",
    keyPoints: [
      "El estado mental (confusión/agitación) es definitorio de choque severo en obstetricia.",
      "La transfusión inmediata es mandatoria en el choque severo dentro del protocolo Código Rojo.",
      "Tema: Clasificación de pérdida sanguínea y lineamientos de transfusión en Código Rojo.",
    ],
  },
  {
    id: "q5",
    topic: "Pediatría",
    statement:
      "Recién nacido a término (39 sem) con antecedente de RPM de 22 horas sin profilaxis antibiótica. A las 12 horas de vida presenta rechazo a la succión, temperatura de 37.8°C y letargia sutil. ¿Cuál es el enfoque diagnóstico y terapéutico más adecuado según la Guía de Práctica Clínica de Colombia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Observación clínica estricta y diferir antibióticos por ser una alteración térmica leve sin dificultad respiratoria.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar urocultivo, punción lumbar y hemograma, e iniciar monoterapia con cefotaxima.",
      },
      {
        id: "C",
        label: "C",
        text: "Toma inmediata de hemocultivos y comenzar antibioticoterapia empírica con ampicilina y gentamicina.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar antipiréticos y dar egreso hospitalario con signos de alarma estrictos para la madre.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Se trata de una sepsis neonatal temprana (antes de 72h) con factores de riesgo (RPM >18h) y síntomas clínicos (rechazo succión, letargia). La guía nacional ordena toma de hemocultivos e inicio inmediato de esquema empírico (Ampicilina + Aminoglucósido) para cubrir S. agalactiae y Gram negativos. La observación expectante solo aplica si el neonato está totalmente asintomático.",
    keyPoints: [
      "RPM >18h es un factor de riesgo mayor que obliga a intervención ante cualquier signo clínico.",
      "El esquema de primera línea en sepsis temprana es Ampicilina + Gentamicina.",
      "Tema: Estratificación de riesgo y antibioticoterapia en sepsis neonatal temprana.",
    ],
  },
  {
    id: "q6",
    topic: "Cirugía General",
    statement:
      "Paciente de setenta y ocho años con demencia vascular presenta dolor abdominal cólico, ausencia de flatos/heces y distensión masiva de 3 días. Abdomen timpánico sin irritación peritoneal; ampolla rectal vacía. La radiografía muestra el signo del 'grano de café' que emerge de la pelvis. ¿Cuál es el diagnóstico y la intervención primaria de elección?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cáncer colorrectal oclusivo; requiere colostomía tipo Hartmann urgente.",
      },
      {
        id: "B",
        label: "B",
        text: "Vólvulo de sigmoides; requiere descompresión y devolvulación por colonoscopia o rectosigmoidoscopia.",
      },
      {
        id: "C",
        label: "C",
        text: "Vólvulo de ciego; requiere hemicolectomía derecha de extrema urgencia.",
      },
      {
        id: "D",
        label: "D",
        text: "Íleo paralítico severo; requiere sonda nasogástrica y procinéticos.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El signo del 'grano de café' es patognomónico del vólvulo de sigmoides. Dado que no hay signos de peritonitis o isquemia, el estándar de cuidado inicial es la devolvulación endoscópica, que permite resolver la obstrucción de forma no operatoria. El vólvulo cecal suele proyectarse al cuadrante superior izquierdo y siempre requiere cirugía.",
    keyPoints: [
      "El signo del grano de café (asa en omega) identifica el vólvulo de sigmoides.",
      "La devolvulación endoscópica es el tratamiento de elección inicial si no hay compromiso isquémico.",
      "Tema: Diagnóstico diferencial radiológico y manejo de obstrucción intestinal colónica.",
    ],
  },
  {
    id: "q7",
    topic: "Toxicología",
    statement:
      "Hombre de cuarenta y cinco años con mordedura de serpiente Mapaná. Presenta edema masivo de toda la extremidad, sangrado activo por colmillos, hematuria y gingivorragia. Tiempos de coagulación incoagulables. ¿Cuál es el manejo específico indicado según el protocolo del INS?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Accidente micrúrico grave; aplicar dosis repetidas de suero antielapídico.",
      },
      {
        id: "B",
        label: "B",
        text: "Accidente botrópico grave; administrar dosis completa de suero antiofídico polivalente IV, sin ajuste por peso.",
      },
      {
        id: "C",
        label: "C",
        text: "Accidente botrópico leve; aplicar dos viales de suero antiofídico por vía intramuscular perilesional.",
      },
      {
        id: "D",
        label: "D",
        text: "Corregir coagulopatía con plasma fresco congelado y vitamina K antes de administrar el antiveneno.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El accidente botrópico grave (vipéridos como Bothrops) causa edema proteolítico y coagulopatía de consumo sistémica. El tratamiento es la infusión IV urgente de suero antiofídico polivalente. La dosis se dicta por la gravedad clínica y NO se ajusta por peso (el veneno inoculado es independiente del tamaño del paciente). La vía IM es ineficaz y el plasma es inútil sin neutralizar primero las toxinas.",
    keyPoints: [
      "La dosis de suero antiofídico depende de la gravedad del envenenamiento, no del peso corporal.",
      "La vía intramuscular está proscrita; el antiveneno requiere distribución sistémica intravenosa.",
      "Tema: Fisiopatología del veneno botrópico y protocolos de dosificación del INS.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta crítica en urgencias y toxicología porque evalúa el manejo del accidente ofídico más común y letal en Colombia (la mordedura por víbora Bothrops o "Mapaná").
La clave no es calcular la dosis del antiveneno según el peso del paciente.
La clave es:
Clasificar la gravedad clínica (Leve, Moderado o Grave) y neutralizar el veneno de inmediato por vía intravenosa.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Mordedura de serpiente Mapaná (Género Bothrops).
• Edema masivo de toda la extremidad.
• Sangrado activo por los colmillos.
• Gingivorragia y hematuria (sangrado sistémico).
• Tiempos de coagulación incoagulables.
Estos hallazgos sugieren:
Un accidente botrópico GRAVE.
El veneno botrópico es rico en metaloproteinasas y enzimas procoagulantes que consumen el fibrinógeno del paciente, causando una "Coagulación Intravascular Diseminada" (CID) tóxica y daño tisular severo (edema, necrosis).
¿Por qué administrar suero antiofídico polivalente IV (Opción B) es la mejor conducta?
El antiveneno es el único tratamiento capaz de detener la destrucción tisular y la coagulopatía.
En Colombia (protocolo INS), para un accidente botrópico GRAVE, se requieren de 6 a 10 ampollas (viales) de suero antiofídico polivalente.
Debe administrarse siempre por vía intravenosa (diluido en SSN) para que alcance la circulación sistémica y neutralice el veneno rápidamente.
NUNCA se ajusta la dosis por el peso del paciente: la serpiente inyecta la misma cantidad de veneno a un niño de 10 kg que a un adulto de 80 kg. De hecho, los niños requieren la misma o mayor dosis inicial porque la concentración del veneno en su cuerpo es mayor.
¿Por qué NO suero antielapídico (Opción A)?
Las serpientes Elapidae (Corales / Micrurus) causan neurotoxicidad (parálisis respiratoria, ptosis palpebral), no causan sangrado ni edema masivo. El suero antielapídico no sirve para mordeduras de Mapaná.
¿Por qué NO vía intramuscular (Opción C)?
Inyectar el suero alrededor de la mordedura (perilesional) o intramuscular retrasa la absorción sistémica y no frena la coagulopatía de consumo. Además, aumenta el daño tisular local.
¿Por qué NO plasma fresco congelado (Opción D)?
Transfundir plasma o factores de coagulación antes de neutralizar el veneno es "echarle gasolina al fuego". El veneno circulante destruirá los factores de coagulación nuevos inmediatamente. Solo se usa plasma si la coagulopatía persiste muchas horas DESPUÉS de haber aplicado la dosis adecuada de antiveneno.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Paciente requiere dosis de medicamentos."
Y responden:
"Ajustar los miligramos según el peso en kg."
Sin embargo:
La sueroterapia antiofídica busca neutralizar miligramos de VENENO inyectado, no depende de la masa corporal del receptor. Es el único "fármaco" de urgencias cuya dosis no se calcula por kg.
Perlas de examen
✅ Mapaná (Bothrops): Edema, necrosis, ampollas y sangrado (coagulopatía). Tratamiento: Suero Polivalente IV.
✅ Coral (Micrurus): Parálisis, falla respiratoria, sin edema local. Tratamiento: Suero Antielapídico IV.
✅ Dosis de antiveneno: Depende exclusivamente de la GRAVEDAD del cuadro, NO del peso del paciente.
✅ Vía de administración: Siempre intravenosa. Nunca intramuscular ni subcutánea.
Referencias
• Protocolo de Manejo de Accidente Ofídico del Instituto Nacional de Salud (INS), Colombia.
• Guías de Práctica Clínica para el manejo de accidentes por animales venenosos - Ministerio de Salud.
• UpToDate: Evaluation and management of crotalid (rattlesnake, copperhead, and cottonmouth) bites.`,
  },
  {
    id: "q8",
    topic: "Ginecología",
    statement:
      "Gestante de 34 semanas con cefalea persistente, fosfenos e hiperreflexia rotuliana (+++/++++). TA 170/115 mmHg y proteinuria positiva. ¿Cuál es la estrategia de intervención dual inicial más apropiada según las guías para reducir la morbimortalidad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Manejo expectante con reposo y líquidos endovenosos, difiriendo fármacos hasta tener laboratorios séricos.",
      },
      {
        id: "B",
        label: "B",
        text: "Infusión de sulfato de magnesio para neuroprotección y terapia antihipertensiva rápida (nifedipino o labetalol).",
      },
      {
        id: "C",
        label: "C",
        text: "Cesárea de emergencia inmediata sin estabilización previa para interrumpir la gestación.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar diazepam IV para prevenir convulsiones y enalapril oral para descenso tensional sostenido.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El cuadro es una preeclampsia con criterios de severidad (hipertensión severa y síntomas de vasoespasmo). La prioridad es prevenir la eclampsia con sulfato de magnesio (estabilizador de membrana neuronal superior a benzodiacepinas) y controlar la crisis hipertensiva con fármacos seguros (nifedipino/labetalol). Los IECA están contraindicados por teratogenicidad y toxicidad renal fetal.",
    keyPoints: [
      "El sulfato de magnesio es el estándar de oro para prevenir convulsiones en preeclampsia severa.",
      "Se debe estabilizar la TA antes de cualquier intervención quirúrgica para evitar ACV.",
      "Tema: Diagnóstico y manejo farmacológico de trastornos hipertensivos del embarazo.",
    ],
  },
  {
    id: "q9",
    topic: "Pediatría",
    statement:
      "Niño de cinco años (Chocó) con fiebre de 40°C, ictericia y palidez profunda. Hemoglobina 6 g/dL y gota gruesa positiva para P. falciparum (parasitemia 8%). El paciente está letárgico y rechaza la vía oral. ¿Qué esquema debe instaurarse perentoriamente según el protocolo nacional?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cloroquina oral por tres días más primaquina por catorce días.",
      },
      {
        id: "B",
        label: "B",
        text: "Artemeter y lumefantrina oral (terapia combinada) con manejo ambulatorio.",
      },
      {
        id: "C",
        label: "C",
        text: "Manejo intrahospitalario con terapia parenteral de primera línea (Artesunato IV).",
      },
      {
        id: "D",
        label: "D",
        text: "Monoterapia con sulfadoxina y pirimetamina para frenar la replicación parasitaria.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "La malaria por P. falciparum con hiperparasitemia (>5%), anemia severa y postración se clasifica como grave/complicada. El protocolo del Ministerio de Salud prioriza el uso de derivados de artemisinina parenterales (Artesunato IV) para depurar rápidamente el parásito. La cloroquina no se usa en falciparum por alta resistencia genética documentada en Colombia.",
    keyPoints: [
      "La malaria grave requiere hospitalización y tratamiento parenteral inmediato.",
      "El artesunato IV es el tratamiento de elección para malaria complicada en Colombia y por la OMS.",
      "Tema: Diferenciación de malaria grave y perfiles de resistencia de Plasmodium.",
    ],
  },
  {
    id: "q10",
    topic: "Cardiología",
    statement:
      "Hombre de 65 años con dolor torácico opresivo e irradiado de 45 min. EKG muestra elevación del ST de 3mm en V2-V4. Está en un centro de primer nivel sin hemodinamia y el traslado tardará >3 horas. ¿Cuál es la estrategia de reperfusión de elección?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Manejo médico conservador (AAS, clopidogrel, estatinas) y remisión no urgente a medicina interna.",
      },
      {
        id: "B",
        label: "B",
        text: "Omitir terapia agresiva y trasladar para angioplastia primaria pese a que el tiempo puerta-balón será >180 min.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar terapia fibrinolítica sistémica IV (alteplasa/estreptoquinasa) en los primeros 30 min y luego trasladar.",
      },
      {
        id: "D",
        label: "D",
        text: "Esperar confirmación de troponinas de alta sensibilidad antes de decidir sobre la trombólisis.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Ante un IAMCEST, si el tiempo puerta-balón estimado para angioplastia supera los 120 minutos, la guía clínica ordena fibrinólisis (puerta-aguja <30 min). El diagnóstico es clínico y eléctrico; esperar biomarcadores o retrasar la reperfusión por un traslado prolongado condena al miocardio a necrosis irreversible.",
    keyPoints: [
      "Fibrinólisis es la elección si la angioplastia no es posible en menos de 120 minutos.",
      "El tiempo es músculo: no se deben esperar troponinas para iniciar la reperfusión in IAMCEST.",
      "Tema: Algoritmos de reperfusión miocárdica y métricas de tiempo en urgencias.",
    ],
  },
  {
    id: "q11-semio",
    topic: "Semiología",
    statement:
      "En el marco del examen oral de residencia, el profesor titular le interroga exhaustivamente acerca de la semiología florida de un paciente geriátrico hospitalizado por una cardiomiopatía dilatada terminal de origen isquémico-necrótico, cuya fracción de eyección del ventrículo izquierdo se encuentra gravemente deprimida (25%). El paciente experimenta síntomas clásicos que incluyen ortopnea severa, ingurgitación venosa yugular evidente a 45 grados de inclinación y un reflejo hepatoyugular positivo. Aplicando el principio fundamental de 'economía del conocimiento' de la Universidad Nacional, ¿cuál es la explicación fisiopatológica mecánica que justifica de manera unívoca la aparición de este conjunto de signos clínicos congestivos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Disminución absoluta del gasto cardíaco anterógrado celular, induciendo isquemia microvascular aguda.",
      },
      {
        id: "B",
        label: "B",
        text: "Activación primaria y sostenida del sistema nervioso simpático que produce vasoconstricción arterial generalizada.",
      },
      {
        id: "C",
        label: "C",
        text: "Falla mecánica intrínseca de la bomba que imposibilita el vaciamiento sistólico, generando un aumento de las presiones telediastólicas que se transmiten de forma pasiva y retrógrada a los lechos venosos.",
      },
      {
        id: "D",
        label: "D",
        text: "Destrucción anatómica valvular intrínseca y permanente originada de forma secundaria a la remodelación concéntrica severa.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "La respuesta correcta es la C. Los síntomas congestivos en la insuficiencia cardíaca con FEVI reducida derivan de un principio hidrostático: si la bomba no puede vaciarse adecuadamente, las presiones telediastólicas dentro del ventrículo aumentan y se transmiten pasiva y retrógradamente hacia el circuito pulmonar y sistémico.",
    keyPoints: [
      "La fisiopatología congestiva se explica por la transmisión de presiones retrógradas.",
      "La falla de vaciamiento sistólico eleva la presión telediastólica, motor de la congestión.",
      "Tema: Fisiopatología cardiovascular y semiología clínica avanzada.",
    ],
  },
]