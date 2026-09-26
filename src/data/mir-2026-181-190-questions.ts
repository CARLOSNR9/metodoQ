import type { TrainingQuestion } from "@/lib/questions/types";

export const MIR_2026_181_190_QUESTIONS: TrainingQuestion[] = [
  {
    id: "mir-2026-181",
    university: "MIR (España)",
    examArea: "NEUMOLOGÍA",
    topic: "OXIGENOTERAPIA CRÓNICA DOMICILIARIA EN LA EPOC",
    difficulty: "medium",
    tags: ["mir", "espana", "neumologia"],
    statement:
      "Un hombre de 68 años con EPOC grave, exfumador, en situación estable y con tratamiento broncodilatador óptimo, presenta en reposo y respirando aire ambiente una PaO₂ de 52 mmHg. ¿Cuál es la indicación correcta?",
    options: [
      { id: "A", label: "A", text: "Oxígeno domiciliario durante las agudizaciones y las infecciones respiratorias agudas." },
      { id: "B", label: "B", text: "Oxígeno a demanda cuando note disnea, unos minutos al día y durante los esfuerzos, sin pauta nocturna." },
      { id: "C", label: "C", text: "Oxigenoterapia crónica domiciliaria al menos 15-16 horas al día, incluyendo la noche." },
      { id: "D", label: "D", text: "No está indicado el oxígeno mientras la saturación sea superior al 80% en reposo." },
    ],
    correctOptionId: "C",
    explanation:
      "La **oxigenoterapia crónica domiciliaria** es, junto con el **abandono del tabaco**, una de las intervenciones que **aumentan la supervivencia** en la EPOC. Está indicada en paciente **estable** con tratamiento óptimo si la **PaO₂ ≤ 55 mmHg**, o si está entre **55 y 60 mmHg** con **hipertensión pulmonar, cor pulmonale, poliglobulia** (hematocrito > 55%) o arritmias. Para lograr beneficio en supervivencia debe utilizarse **al menos 15-16 horas al día**, incluyendo el sueño, con el objetivo de una saturación ≥ 90%.\n\n**TRAMPA DEL EXAMEN:** El oxígeno a demanda o solo en las agudizaciones no mejora la supervivencia. La indicación se establece en fase estable y con gasometría arterial, no solo con la saturación.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en la EPOC solo dos cosas alargan la vida con claridad: dejar de fumar y el oxígeno crónico bien indicado. El número clave es 55: con PaO₂ de 55 o menos en fase estable, oxígeno muchas horas al día. Y el paciente tiene que haber dejado de fumar, por seguridad.",
    keyPoints: [
      "OCD en EPOC estable: PaO₂ ≤ 55 mmHg, o 55-60 con HTP, cor pulmonale, poliglobulia o arritmias.",
      "Uso ≥ 15-16 h/día (incluida la noche) para mejorar la supervivencia.",
      "Abandono del tabaco y OCD: las intervenciones que aumentan la supervivencia en la EPOC.",
    ],
  },
  {
    id: "mir-2026-182",
    university: "MIR (España)",
    examArea: "NEUMOLOGÍA",
    topic: "APNEA OBSTRUCTIVA DEL SUEÑO",
    difficulty: "easy",
    tags: ["mir", "espana", "neumologia"],
    statement:
      "Un hombre de 52 años, obeso e hipertenso, refiere ronquidos intensos, pausas respiratorias observadas por su pareja y somnolencia diurna que le hace dormirse conduciendo. La poligrafía respiratoria muestra un índice de apnea-hipopnea de 42 eventos por hora. ¿Cuál es el tratamiento de elección?",
    options: [
      { id: "A", label: "A", text: "Presión positiva continua en la vía aérea (CPAP) nocturna, junto con medidas higiénico-dietéticas y pérdida de peso." },
      { id: "B", label: "B", text: "Benzodiacepinas por la noche para mejorar la calidad del sueño y reducir los microdespertares." },
      { id: "C", label: "C", text: "Uvulopalatofaringoplastia como primera opción terapéutica, antes de ensayar otros tratamientos, dado el índice de apnea-hipopnea elevado." },
      { id: "D", label: "D", text: "Oxígeno nocturno aislado con gafas nasales para corregir las desaturaciones durante el sueño, sin necesidad de otras medidas." },
    ],
    correctOptionId: "A",
    explanation:
      "La **apnea obstructiva del sueño** se caracteriza por **ronquidos**, **apneas observadas** y **somnolencia diurna**, con riesgo de **accidentes de tráfico**, **hipertensión** y enfermedad cardiovascular. Un **índice de apnea-hipopnea (IAH) ≥ 30/h** indica enfermedad **grave**. El tratamiento de elección en casos moderados-graves sintomáticos es la **CPAP nocturna**, junto con **pérdida de peso**, evitar el alcohol y los sedantes, y medidas posturales. Hasta el control, se debe advertir sobre la **conducción**.\n\n**TRAMPA DEL EXAMEN:** Las **benzodiacepinas** y el alcohol **empeoran** las apneas al relajar la musculatura de la vía aérea. La cirugía faríngea tiene indicaciones muy seleccionadas. El oxígeno aislado no corrige la obstrucción.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., un roncador que se duerme al volante es un riesgo para él y para los demás. Con un IAH por encima de 30 y síntomas, la CPAP le cambia la vida: duerme mejor, conduce más seguro y controla mejor la presión arterial. Y que pierda peso: a veces con eso basta en los casos leves.",
    keyPoints: [
      "AOS: ronquidos, apneas observadas, somnolencia diurna; riesgo de accidentes y cardiovascular.",
      "IAH ≥ 30/h: grave; CPAP de elección en casos moderados-graves sintomáticos.",
      "Pérdida de peso; evitar alcohol y sedantes (empeoran las apneas).",
    ],
  },
  {
    id: "mir-2026-183",
    university: "MIR (España)",
    examArea: "NEUMOLOGÍA",
    topic: "SÍNDROME DE LÖFGREN (SARCOIDOSIS AGUDA)",
    difficulty: "medium",
    tags: ["mir", "espana", "neumologia"],
    statement:
      "Una mujer de 30 años presenta fiebre, artritis de ambos tobillos y nódulos rojos dolorosos en la cara anterior de las piernas. La radiografía de tórax muestra adenopatías hiliares bilaterales simétricas, sin infiltrados pulmonares. ¿Cuál es el diagnóstico más probable y su pronóstico?",
    options: [
      { id: "A", label: "A", text: "Linfoma de Hodgkin con adenopatías hiliares; requiere biopsia y quimioterapia urgente." },
      { id: "B", label: "B", text: "Tuberculosis miliar con afectación ganglionar; mal pronóstico sin tratamiento inmediato." },
      { id: "C", label: "C", text: "Lupus eritematoso sistémico con afectación articular y cutánea; requiere inmunosupresores de inicio." },
      { id: "D", label: "D", text: "Síndrome de Löfgren (sarcoidosis aguda); suele remitir espontáneamente y tiene buen pronóstico." },
    ],
    correctOptionId: "D",
    explanation:
      "El **síndrome de Löfgren** es una forma aguda de **sarcoidosis** que combina **adenopatías hiliares bilaterales**, **eritema nudoso**, **artritis (típicamente periarticular de tobillos)** y fiebre. Tiene **excelente pronóstico**, con **remisión espontánea** en la mayoría de los casos, y suele tratarse solo con **AINE**. Su presentación es tan característica que a menudo no requiere biopsia si la evolución es favorable. La sarcoidosis se caracteriza por **granulomas no caseificantes** y puede elevar la ECA y el calcio.\n\n**TRAMPA DEL EXAMEN:** Las adenopatías hiliares **bilaterales y simétricas** con eritema nudoso orientan a sarcoidosis, no a linfoma (adenopatías asimétricas, síntomas B) ni a tuberculosis miliar (patrón micronodular difuso).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., mujer joven con tobillos inflamados, eritema nudoso y adenopatías hiliares en espejo: Löfgren. Tranquilice a la paciente: suele curarse sola en meses. Antiinflamatorios y seguimiento.",
    keyPoints: [
      "Löfgren: adenopatías hiliares bilaterales + eritema nudoso + artritis de tobillos + fiebre.",
      "Forma aguda de sarcoidosis con buen pronóstico y remisión espontánea; tratamiento con AINE.",
      "Sarcoidosis: granulomas no caseificantes; puede elevar ECA y calcio.",
    ],
  },
  {
    id: "mir-2026-184",
    university: "MIR (España)",
    examArea: "CARDIOLOGÍA",
    topic: "INSUFICIENCIA CARDÍACA CON FRACCIÓN DE EYECCIÓN REDUCIDA: FÁRMACOS PRONÓSTICOS",
    difficulty: "medium",
    tags: ["mir", "espana", "cardiologia"],
    statement:
      "Un paciente de 64 años tiene insuficiencia cardíaca crónica con fracción de eyección del 28%, en clase funcional II. ¿Cuál de los siguientes fármacos NO ha demostrado reducir la mortalidad en esta situación?",
    options: [
      { id: "A", label: "A", text: "Sacubitrilo-valsartán." },
      { id: "B", label: "B", text: "Furosemida." },
      { id: "C", label: "C", text: "Bisoprolol." },
      { id: "D", label: "D", text: "Dapagliflozina." },
    ],
    correctOptionId: "B",
    explanation:
      "El tratamiento de la **insuficiencia cardíaca con fracción de eyección reducida** se basa en **cuatro pilares** que **reducen la mortalidad**: **IECA/ARA-II o, preferiblemente, sacubitrilo-valsartán (ARNI)**; **betabloqueantes** (bisoprolol, carvedilol, metoprolol, nebivolol); **antagonistas del receptor mineralocorticoide** (espironolactona, eplerenona); e **inhibidores de SGLT2** (dapagliflozina, empagliflozina). Los **diuréticos de asa** como la **furosemida** son esenciales para controlar la **congestión**, pero **no mejoran la supervivencia**.\n\n**TRAMPA DEL EXAMEN:** Pensar que, por ser el fármaco más usado en la descompensación, la furosemida mejora el pronóstico. Mejora los síntomas, no la mortalidad.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., memorice los cuatro pilares y trate de tenerlos todos pautados y a la dosis máxima tolerada: ARNI, betabloqueante, antialdosterónico y glifozina. La furosemida es la que le quita el agua al paciente, pero la que le alarga la vida son las otras cuatro.",
    keyPoints: [
      "ICFEr: 4 pilares que reducen mortalidad — ARNI/IECA/ARA-II, betabloqueante, ARM e iSGLT2.",
      "Los diuréticos de asa alivian la congestión pero no reducen la mortalidad.",
      "Titular todos los fármacos pronósticos hasta la dosis máxima tolerada.",
    ],
  },
  {
    id: "mir-2026-185",
    university: "MIR (España)",
    examArea: "CARDIOLOGÍA",
    topic: "ESTENOSIS AÓRTICA GRAVE SINTOMÁTICA",
    difficulty: "medium",
    tags: ["mir", "espana", "cardiologia"],
    statement:
      "Una mujer de 79 años refiere disnea de esfuerzo y un episodio de síncope al subir escaleras. Se ausculta un soplo sistólico rudo en foco aórtico irradiado a carótidas con segundo ruido débil. El ecocardiograma muestra un área valvular aórtica de 0,7 cm² y un gradiente medio de 48 mmHg, con fracción de eyección conservada. ¿Cuál es el tratamiento indicado?",
    options: [
      { id: "A", label: "A", text: "Sustitución valvular aórtica (quirúrgica o percutánea TAVI, según el riesgo y la valoración del equipo cardiológico)." },
      { id: "B", label: "B", text: "Vasodilatadores a dosis altas para reducir la poscarga del ventrículo izquierdo y aliviar los síntomas." },
      { id: "C", label: "C", text: "Seguimiento ecocardiográfico anual sin intervención, al tener la fracción de eyección conservada." },
      { id: "D", label: "D", text: "Valvuloplastia aórtica con balón como tratamiento definitivo de la estenosis aórtica grave." },
    ],
    correctOptionId: "A",
    explanation:
      "La **estenosis aórtica grave** (área < 1 cm², gradiente medio ≥ 40 mmHg, velocidad máxima ≥ 4 m/s) que produce **síntomas** (**angina, síncope, disnea**) tiene un **pronóstico muy malo sin intervención**. El tratamiento es la **sustitución valvular aórtica**, **quirúrgica** o **percutánea (TAVI)**, decisión que toma el equipo cardiológico según la edad, el riesgo quirúrgico y la anatomía (en pacientes de edad avanzada se prefiere a menudo la TAVI).\n\n**TRAMPA DEL EXAMEN:** Los **vasodilatadores** pueden provocar **hipotensión grave** en la estenosis aórtica, porque el gasto cardíaco está fijo. La valvuloplastia con balón solo es un puente o una medida paliativa. La vigilancia es para la estenosis grave **asintomática** con función conservada.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en estenosis aórtica los síntomas lo cambian todo: en cuanto aparece angina, síncope o disnea, la supervivencia cae en picado si no se cambia la válvula. Síncope de esfuerzo en una anciana con soplo aórtico: derive para sustitución valvular.",
    keyPoints: [
      "EA grave: área < 1 cm², gradiente medio ≥ 40 mmHg, velocidad ≥ 4 m/s.",
      "Síntomas (angina, síncope, disnea) → sustitución valvular (cirugía o TAVI).",
      "Evitar vasodilatadores potentes (gasto cardíaco fijo).",
    ],
  },
  {
    id: "mir-2026-186",
    university: "MIR (España)",
    examArea: "CARDIOLOGÍA",
    topic: "ANTICOAGULACIÓN EN LA FIBRILACIÓN AURICULAR NO VALVULAR",
    difficulty: "medium",
    tags: ["mir", "espana", "cardiologia"],
    statement:
      "Un hombre de 72 años, hipertenso y diabético, es diagnosticado de fibrilación auricular permanente. No tiene valvulopatía significativa ni prótesis, su función renal es normal y no tiene antecedentes de sangrado. ¿Cuál es la actitud más adecuada para prevenir el ictus?",
    options: [
      { id: "A", label: "A", text: "Ácido acetilsalicílico 100 mg al día como prevención del ictus cardioembólico." },
      { id: "B", label: "B", text: "No es necesario tratamiento antitrombótico, al tratarse de una fibrilación auricular paroxística y breve." },
      { id: "C", label: "C", text: "Anticoagulación oral, preferentemente con un anticoagulante oral de acción directa (por ejemplo, apixabán)." },
      { id: "D", label: "D", text: "Doble antiagregación con ácido acetilsalicílico y clopidogrel a largo plazo." },
    ],
    correctOptionId: "C",
    explanation:
      "La escala **CHA₂DS₂-VASc** de este paciente es **3** (edad 65-74 = 1, hipertensión = 1, diabetes = 1). En varones con puntuación **≥ 2** (y en mujeres ≥ 3) está indicada la **anticoagulación oral**. Se prefieren los **anticoagulantes orales de acción directa** (apixabán, rivaroxabán, edoxabán, dabigatrán) frente a los antivitamina K, salvo en la **estenosis mitral moderada-grave** o las **prótesis valvulares mecánicas**, donde se usan antivitamina K. El riesgo hemorrágico (HAS-BLED) sirve para corregir factores modificables, no para negar la anticoagulación.\n\n**TRAMPA DEL EXAMEN:** El **ácido acetilsalicílico** no es una alternativa eficaz a la anticoagulación en la FA y tiene un riesgo de sangrado similar. La doble antiagregación es inferior a la anticoagulación.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en FA la pregunta no es si el paciente tiene arritmia, sino cuánto riesgo de ictus tiene. Calcule el CHA₂DS₂-VASc: con 2 o más en un varón, anticoagule. Y la aspirina no protege del ictus en la FA: olvídese de ella para esto.",
    keyPoints: [
      "CHA₂DS₂-VASc ≥ 2 en varones (≥ 3 en mujeres): anticoagulación oral.",
      "ACOD preferidos, salvo estenosis mitral moderada-grave o prótesis mecánica (antivitamina K).",
      "La aspirina no es una alternativa a la anticoagulación en la FA.",
    ],
  },
  {
    id: "mir-2026-187",
    university: "MIR (España)",
    examArea: "NEFROLOGÍA",
    topic: "NEFROPROTECCIÓN EN LA ENFERMEDAD RENAL DIABÉTICA",
    difficulty: "medium",
    tags: ["mir", "espana", "nefrologia"],
    statement:
      "Un hombre de 60 años con diabetes tipo 2 tiene un filtrado glomerular estimado de 50 ml/min/1,73 m² y un cociente albúmina/creatinina en orina de 400 mg/g. Su presión arterial es de 142/88 mmHg. ¿Qué combinación ha demostrado frenar la progresión de su enfermedad renal?",
    options: [
      { id: "A", label: "A", text: "Diurético de asa a dosis altas y restricción proteica estricta en la dieta." },
      { id: "B", label: "B", text: "Antagonista del calcio no dihidropiridínico en monoterapia antihipertensiva." },
      { id: "C", label: "C", text: "Combinación de un IECA con un ARA-II a dosis máximas para el doble bloqueo." },
      { id: "D", label: "D", text: "IECA o ARA-II a la dosis máxima tolerada junto con un inhibidor de SGLT2." },
    ],
    correctOptionId: "D",
    explanation:
      "En la **enfermedad renal crónica con albuminuria**, especialmente la **diabética**, el tratamiento **nefroprotector** se basa en el **bloqueo del sistema renina-angiotensina** con **IECA o ARA-II** a la **dosis máxima tolerada** y en los **inhibidores de SGLT2** (dapagliflozina, empagliflozina, canagliflozina), que reducen la progresión de la enfermedad renal y los eventos cardiovasculares. Se puede añadir **finerenona** (antagonista mineralocorticoide no esteroideo) en la nefropatía diabética con albuminuria persistente. Se deben controlar el potasio y la creatinina tras iniciar el bloqueo del SRA.\n\n**TRAMPA DEL EXAMEN:** La **combinación de IECA y ARA-II** aumenta la hiperpotasemia y el fracaso renal agudo sin beneficio renal, por lo que **está desaconsejada**.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en el riñón diabético con albuminuria hay dos pilares: el bloqueo del SRA (solo uno, IECA o ARA-II) y una glifozina. Suba la dosis hasta lo que tolere y vigile potasio y creatinina. Un ligero aumento de creatinina al inicio es esperable y no obliga a suspender.",
    keyPoints: [
      "ERC con albuminuria: IECA o ARA-II a dosis máxima tolerada + iSGLT2.",
      "Finerenona en la nefropatía diabética con albuminuria persistente.",
      "No combinar IECA + ARA-II (hiperpotasemia y fracaso renal sin beneficio).",
    ],
  },
  {
    id: "mir-2026-188",
    university: "MIR (España)",
    examArea: "NEFROLOGÍA",
    topic: "POLIQUISTOSIS RENAL AUTOSÓMICA DOMINANTE",
    difficulty: "medium",
    tags: ["mir", "espana", "nefrologia"],
    statement:
      "Un hombre de 38 años con hipertensión arterial presenta en la ecografía riñones aumentados de tamaño con múltiples quistes bilaterales y quistes hepáticos. Su padre inició diálisis a los 55 años. ¿Cuál es la manifestación extrarrenal que debe buscarse si hay antecedentes familiares de hemorragia subaracnoidea?",
    options: [
      { id: "A", label: "A", text: "Feocromocitomas suprarrenales bilaterales." },
      { id: "B", label: "B", text: "Aneurismas intracraneales saculares." },
      { id: "C", label: "C", text: "Carcinoma medular de tiroides multifocal." },
      { id: "D", label: "D", text: "Hemangioblastomas cerebelosos y retinianos." },
    ],
    correctOptionId: "B",
    explanation:
      "La **poliquistosis renal autosómica dominante** (genes **PKD1** y **PKD2**) es la enfermedad renal hereditaria más frecuente. Cursa con **quistes renales bilaterales**, **hipertensión**, hematuria, infecciones de quistes, litiasis y progresión a **enfermedad renal crónica**. Entre sus manifestaciones extrarrenales destacan los **quistes hepáticos** (las más frecuentes), el **prolapso mitral** y los **aneurismas intracraneales saculares**, cuyo **cribado con angio-RM** se recomienda en pacientes con **antecedentes familiares de aneurisma o hemorragia subaracnoidea**. En la enfermedad con progresión rápida puede usarse **tolvaptán**.\n\n**TRAMPA DEL EXAMEN:** Los **hemangioblastomas** y el **feocromocitoma** se asocian a la enfermedad de **von Hippel-Lindau**, que también puede tener quistes renales (y carcinoma renal de células claras). El carcinoma medular de tiroides pertenece a los MEN 2.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., riñones grandes llenos de quistes, hígado con quistes y un padre en diálisis: poliquistosis del adulto. Controle bien la presión arterial y pregunte siempre por hemorragias cerebrales en la familia: si las hay, busque aneurismas.",
    keyPoints: [
      "Poliquistosis AD (PKD1/PKD2): quistes renales bilaterales, HTA, progresión a ERC.",
      "Extrarrenal: quistes hepáticos (lo más frecuente), prolapso mitral, aneurismas intracraneales.",
      "Cribado de aneurismas con angio-RM si hay antecedentes familiares; tolvaptán en progresión rápida.",
    ],
  },
  {
    id: "mir-2026-189",
    university: "MIR (España)",
    examArea: "ENDOCRINOLOGÍA",
    topic: "HIPOTIROIDISMO PRIMARIO EN EL ANCIANO CON CARDIOPATÍA",
    difficulty: "medium",
    tags: ["mir", "espana", "endocrinologia"],
    statement:
      "Una mujer de 78 años con cardiopatía isquémica presenta astenia, estreñimiento, intolerancia al frío y piel seca. La TSH es de 28 mU/l y la T4 libre está baja. Los anticuerpos antiperoxidasa son positivos. ¿Cuál es la actitud más adecuada?",
    options: [
      { id: "A", label: "A", text: "Iniciar levotiroxina a dosis bajas y aumentarla de forma progresiva, controlando la TSH a las 6-8 semanas." },
      { id: "B", label: "B", text: "Iniciar levotiroxina a la dosis sustitutiva completa desde el primer día para normalizar antes la TSH." },
      { id: "C", label: "C", text: "Administrar triyodotironina (T3) intravenosa por la rapidez de su efecto en el anciano." },
      { id: "D", label: "D", text: "No tratar, porque los síntomas son propios de la edad y la TSH elevada es fisiológica en el anciano." },
    ],
    correctOptionId: "A",
    explanation:
      "La paciente tiene un **hipotiroidismo primario** (TSH elevada con T4 libre baja), probablemente por **tiroiditis de Hashimoto** (anticuerpos antiperoxidasa positivos), la causa más frecuente en zonas con aporte suficiente de yodo. El tratamiento es la **levotiroxina**. En **ancianos** y en pacientes con **cardiopatía isquémica** se inicia a **dosis bajas** (por ejemplo, 12,5-25 µg/día) y se **aumenta gradualmente**, porque una sustitución brusca puede **desencadenar angina, infarto o arritmias**. El control se hace con la **TSH a las 6-8 semanas** de cada cambio de dosis.\n\n**TRAMPA DEL EXAMEN:** La dosis completa desde el inicio es adecuada en adultos jóvenes sin cardiopatía, pero no en esta paciente. La **T3 intravenosa** se reserva para situaciones como el coma mixedematoso. Los síntomas no deben atribuirse a la edad con una TSH tan elevada.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en el anciano con corazón enfermo, la tiroides se repone despacio: «start low, go slow». Y mida la TSH cada 6-8 semanas, que es lo que tarda en estabilizarse tras cada ajuste.",
    keyPoints: [
      "Hipotiroidismo primario: TSH elevada con T4 libre baja; Hashimoto (anti-TPO) causa más frecuente.",
      "Ancianos y cardiopatía isquémica: levotiroxina a dosis bajas con aumento progresivo.",
      "Control con TSH a las 6-8 semanas de cada cambio de dosis.",
    ],
  },
  {
    id: "mir-2026-190",
    university: "MIR (España)",
    examArea: "ENDOCRINOLOGÍA",
    topic: "ESTUDIO DEL NÓDULO TIROIDEO",
    difficulty: "medium",
    tags: ["mir", "espana", "endocrinologia"],
    statement:
      "Una mujer de 45 años consulta por un nódulo tiroideo palpable. La TSH es normal. La ecografía muestra un nódulo sólido de 1,8 cm, hipoecoico, con microcalcificaciones y bordes irregulares. ¿Cuál es el siguiente paso?",
    options: [
      { id: "A", label: "A", text: "Gammagrafía tiroidea con tecnecio como primera prueba diagnóstica." },
      { id: "B", label: "B", text: "Tratamiento supresor con levotiroxina y control ecográfico en un año." },
      { id: "C", label: "C", text: "Punción aspiración con aguja fina (PAAF) guiada por ecografía." },
      { id: "D", label: "D", text: "Tiroidectomía total sin estudio citológico previo del nódulo tiroideo." },
    ],
    correctOptionId: "C",
    explanation:
      "En el estudio del **nódulo tiroideo**, la primera determinación es la **TSH**. Si es **normal o alta**, se realiza **ecografía** y, según el tamaño y los **signos ecográficos de sospecha** (nódulo sólido **hipoecoico**, **microcalcificaciones**, **bordes irregulares**, más alto que ancho, extensión extratiroidea), se indica **PAAF guiada por ecografía**. La citología se clasifica según el **sistema Bethesda**, que guía el manejo. Solo si la **TSH está baja** se realiza una **gammagrafía**: un nódulo «caliente» (hiperfuncionante) es casi siempre benigno y no requiere PAAF.\n\n**TRAMPA DEL EXAMEN:** La **gammagrafía** no es la primera prueba con TSH normal. El **tratamiento supresor** con levotiroxina no se recomienda para los nódulos benignos. La cirugía sin citología previa no está justificada salvo situaciones especiales.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el orden importa: TSH, ecografía y, si hay rasgos sospechosos, PAAF. Microcalcificaciones en un nódulo hipoecoico es de lo que más preocupa, porque sugiere carcinoma papilar. La gammagrafía solo entra en juego si la TSH está suprimida.",
    keyPoints: [
      "Nódulo tiroideo: TSH → ecografía → PAAF según tamaño y rasgos sospechosos (clasificación Bethesda).",
      "Signos ecográficos de sospecha: hipoecoico, microcalcificaciones, bordes irregulares, más alto que ancho.",
      "Gammagrafía solo si TSH baja (nódulo caliente: casi siempre benigno).",
    ],
  },
];
