import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #3 (19 jul 2025) · Preguntas #91–#100.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_91_100_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-91",
    university: "UCC",
    examArea: "Medicina Interna / Endocrinología / Cardiología",
    topic: "Endocrinología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia", "cardiologia", "tiroides"],
    statement: "Hombre de 68 años con antecedente de Fibrilación Auricular paroxística en manejo con Amiodarona (200 mg/día) desde hace 3 años. Consulta por un cuadro de un mes de pérdida de peso (6 kg), astenia marcada, palpitaciones y temblor fino distal. Al examen físico: PA 145/85 mmHg, FC 115 lpm, sin exoftalmos, tiroides de tamaño normal e indolora. Paraclínicos: TSH < 0.01 mUI/L, T4 libre y T3 libre francamente elevadas. Se realiza una Ecografía Doppler color tiroidea que evidencia una glándula de ecogenicidad heterogénea con **flujo vascular marcadamente disminuido (ausencia de vascularización intratisular)**. La captación de yodo radiactivo en gammagrafía es < 1%. ¿Cuál es el tratamiento de PRIMERA LÍNEA MÁS adecuado para la tirotoxicosis de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender inmediatamente la Amiodarona e iniciar Metimazol a dosis altas para bloquear la síntesis de nuevas hormonas tiroideas.",
        distractorProfile: "wrong_thyrotoxicosis_type_therapy",
        incorrectFeedback: "El Metimazol es el tratamiento del TIA Tipo 1 (hiperfunción con aumento de vascularización); en el Tipo 2 es ineficaz porque la liberación hormonal se debe a lisis tisular y no a síntesis de novo."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar Corticosteroides sistémicos (Prednisona oral a dosis medias-altas) y mantener control de frecuencia con beta-bloqueadores."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar terapia ablativa con Iodo-131 de forma urgente debido a la severidad del hipertiroidismo.",
        distractorProfile: "mechanistic_error_in_destructive_thyroiditis",
        incorrectFeedback: "El Iodo radiactivo está contraindicado y es inútil en la TIA (de cualquier tipo) debido a que la glándula ya está masivamente saturada del yodo de la amiodarona y no captará el isótopo terapéutico (captación < 1%)."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Propiltiouracilo (PTU) combinado con Colestiramina para interrumpir la circulación enterohepática de las hormonas.",
        distractorProfile: "futile_combination_therapy",
        incorrectFeedback: "El PTU y la colestiramina se reservan para crisis de hipertiroidismo primario severo o TIA Tipo 1 refractaria; en la tiroiditis destructiva no atacan la inflamación citotóxica que está lizando el folículo."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Tirotoxicosis Inducida por Amiodarona (TIA) Tipo 2. La amiodarona (que contiene un 37% de yodo en su peso) puede causar dos tipos de tirotoxicosis. El Tipo 1 ocurre en pacientes con patología tiroidea latente (Graves o bocio multinodular) y se caracteriza por exceso de síntesis (Doppler con flujo vascular aumentado o \"infierno tiroideo\"). El Tipo 2, presente en este paciente, es una **tiroiditis destructiva** donde la droga rompe los folículos y libera hormona preformada a la sangre; el Doppler muestra un flujo vascular nulo o muy bajo, y la captación de yodo es mínima. Como no hay \"síntesis\" nueva, los antitiroideos (Metimazol/PTU) no sirven. El tratamiento de oro y curativo para apagar la inflamación destructiva del Tipo 2 son los glucocorticoides (Prednisona).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un escenario de endocrinología fina, Elizabeth. La Amiodarona es el fármaco más \"tóxico\" para la tiroides. Tienes que diferenciar entre el Tipo 1 y el Tipo 2 porque el tratamiento es opuesto. El Tipo 1 es una fábrica sobre-estimulada por el yodo de la pastilla; ahí usas Metimazol para apagar las máquinas. El Tipo 2 es una explosión de los folículos por toxicidad directa; no hay máquinas que apagar, todo el material ya está en la sangre. Darle Metimazol (Opción A) a un TIA Tipo 2 no le hace ni cosquillas a la enfermedad. Los esteroides desinflaman la glándula y frenan la ruptura folicular en cuestión de semanas. Y recuerda: la Amiodarona se acumula en la grasa por meses, suspenderla hoy no te curará mañana.",
    keyPoints: [
      "Paciente tomando Amiodarona que desarrolla hipertiroidismo franco (TSH baja, T4 alta).",
      "Ecografía Doppler Tiroidea con vascularización DISMINUIDA o captación de Iodo < 1%.",
      "Tirotoxicosis Inducida por Amiodarona (TIA) Tipo 2 (Tiroiditis Destructiva). El tratamiento farmacológico exclusivo son los Corticosteroides.",
      "Tema: Efectos Adversos Farmacológicos / Tirotoxicosis."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-92",
    university: "UCC",
    examArea: "Pediatría / Urgencias / Toxicología",
    topic: "Toxicología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "urgencias", "toxicologia"],
    statement: "Una niña de 4 años es encontrada por su abuelo en el piso de la habitación, convulsionando y con un frasco vacío de Amitriptilina (antidepresivo tricíclico) a su lado. La ambulancia la traslada a urgencias a los 30 minutos del hallazgo. A su ingreso: estuporosa, PA 70/40 mmHg, FC 165 lpm, mucosas orales extremadamente secas y pupilas dilatadas de 7 mm. El monitor cardíaco y el ECG de 12 derivaciones muestran una taquicardia sinusal con un complejo QRS ensanchado a 150 milisegundos, acompañado de una onda R terminal prominente en aVR (mayor de 3 mm). Durante la evaluación, la niña presenta una nueva crisis convulsiva tónico-clónica generalizada. ¿Cuál es el antídoto / intervención toxicológica ESPECÍFICA MÁS importante para estabilizar el miocardio y prevenir una arritmia letal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar bolo intravenoso de Bicarbonato de Sodio (1 a 2 mEq/kg) hasta estrechar el QRS."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Fisostigmina en infusión continua para revertir el toxídrome anticolinérgico masivo.",
        distractorProfile: "deadly_antidote_in_this_context",
        incorrectFeedback: "La Fisostigmina revierte los síntomas anticolinérgicos puros, pero en la sobredosis de tricíclicos exacerba el bloqueo cardíaco y precipita un paro cardiorrespiratorio en asistolia que no responde a reanimación."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusión de Sulfato de Magnesio a 50 mg/kg por la prolongación inminente del intervalo QT.",
        distractorProfile: "secondary_arrhythmia_treatment",
        incorrectFeedback: "Aunque los ATC pueden prolongar el QT secundariamente, la causa principal de la muerte es el bloqueo del canal de sodio (QRS ancho), no la Torsades de Pointes primaria; el magnesio no corrige la hipotensión ni la conducción intraventricular."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Flumazenil intravenoso inmediato debido a la alteración del sensorio profunda y el coma.",
        distractorProfile: "contraindicated_in_seizures",
        incorrectFeedback: "El Flumazenil es un antagonista de benzodiacepinas. Usarlo en un paciente que ya está convulsionando (y más si ingirió proconvulsivantes como los tricíclicos) desencadenaría un estatus epiléptico refractario."
      }
    ],
    correctOptionId: "A",
    explanation: "La paciente cursa con una intoxicación grave por Antidepresivos Tricíclicos (ATC). Estos fármacos producen una mezcla tóxica letal: bloqueo alfa (hipotensión), bloqueo muscarínico (midriasis, mucosas secas, taquicardia) y, su efecto más mortal, el **bloqueo de los canales rápidos de sodio miocárdicos**. Este bloqueo del sodio prolonga drásticamente el complejo QRS (> 100 ms es riesgo de convulsión, > 160 ms es altísimo riesgo de arritmias ventriculares como la TV o FV) y produce el signo patognomónico de la onda R positiva en aVR. El antídoto específico y vital para superar este bloqueo es el **Bicarbonato de Sodio hiperosmolar en bolos intravenosos**. El bicarbonato actúa mediante dos mecanismos: proporciona una carga masiva de iones de sodio que desplazan competitivamente al fármaco del canal, y alcaliniza la sangre (pH > 7.45) lo que disminuye la fracción libre y activa del tricíclico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** En la toxicología de los antidepresivos tricíclicos, el electrocardiograma es tu semáforo de la muerte. Si el QRS se abre por encima de 100 milisegundos, el paciente va a convulsionar. Si pasa de 160, el ventrículo va a fibrilar. La Fisostigmina (Opción B) es una trampa muy seductora porque el paciente \"luce\" anticolinérgico (pupilas grandes, boca seca), PERO está absolutamente contraindicada en la intoxicación por ATC; administrar fisostigmina a un corazón con el QRS ancho provoca asistolia intratable instantánea. Tu bala de plata es el Bicarbonato de Sodio: se pasa en bolos hasta que veas en el monitor que el QRS se encoge y vuelve a la normalidad.",
    keyPoints: [
      "Niño o adulto con alteración del sensorio, convulsiones e hipotensión + Anticolinérgico.",
      "Ingesta de Antidepresivos Tricíclicos (Amitriptilina, Imipramina).",
      "ECG con **QRS ancho (> 100 ms)** y Onda R terminal en aVR.",
      "Bloqueo de canales de Sodio. Tratamiento de rescate absoluto: Bolos de Bicarbonato de Sodio IV.",
      "Tema: Toxicología Pediátrica / Intoxicación por Tricíclicos."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-93",
    university: "UCC",
    examArea: "Medicina Interna / Oncología / Neurología",
    topic: "Oncología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "oncologia", "neurologia"],
    statement: "Hombre de 64 años, con antecedente de adenocarcinoma de próstata diagnosticado hace 3 años con metástasis óseas conocidas en seguimiento. Acude a urgencias quejándose de dolor lumbar intenso (10/10) que ha cambiado de características en las últimas semanas, volviéndose constante y exacerbándose con el decúbito. Hoy, al intentar levantarse de la cama, notó debilidad marcada en ambas piernas (\"no le sostienen el peso\") y refiere que no ha podido orinar desde hace 14 horas, a pesar de sentir plenitud abdominal. Al examen físico: paraparesia 2/5 bilateral simétrica, hipoestesia con nivel sensitivo en T10, reflejos rotulianos exaltados (hiperreflexia) y globo vesical palpable. ¿Cuál es el paso INMEDIATO de mayor prioridad que preserva la funcionalidad neurológica antes de enviar al paciente a radiología?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Dexametasona intravenosa a altas dosis (ej. 10 a 16 mg en bolo seguido de infusión) e interconsultar a neurocirugía/oncología."
      },
      {
        id: "B",
        label: "B",
        text: "Insertar una sonda Foley para aliviar la retención urinaria e iniciar quimioterapia citotóxica endovenosa.",
        distractorProfile: "inadequate_supportive_care",
        incorrectFeedback: "La sonda Foley es una medida de confort necesaria, pero la quimioterapia sistémica tiene un inicio de acción de días a semanas, siendo totalmente inútil para descomprimir una médula asfixiada en horas."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar de forma hiperurgente una Resonancia Magnética (RMN) de columna total con contraste y evitar usar fármacos que alteren el tejido tumoral.",
        distractorProfile: "deadly_diagnostic_delay",
        incorrectFeedback: "Aunque la RMN es el estudio de elección absoluto, retrasar la administración de corticosteroides por obtener la imagen resulta en un daño isquémico medular irreversible por edema no controlado."
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar Tomografía Computarizada (TC) de columna toracolumbar para programar laminectomía de descompresión posterior.",
        distractorProfile: "inappropriate_imaging_modality",
        incorrectFeedback: "La TC de columna no tiene la resolución de tejidos blandos necesaria para visualizar el cono medular, las raíces o el edema epidural tumoral, y no debe preferirse sobre la RMN en compresión medular aguda."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con una verdadera Emergencia Oncológica: el Síndrome de Compresión Medular Maligna (SCMM). La triada clínica es implacable: dolor de espalda crónico que empeora al acostarse, debilidad motora simétrica de miembros inferiores y disfunción autonómica tardía (retención urinaria o incontinencia fecal, y nivel sensitivo). En el momento en que se documentan signos de mielopatía (debilidad, hiperreflexia o disfunción de esfínteres), la médula espinal está sufriendo isquemia por compresión extrínseca (vasogénica) y edema. La directriz internacional exige que **NO se debe esperar a ninguna neuroimagen** para iniciar el tratamiento de rescate: se debe inyectar Dexametasona IV a altas dosis inmediatamente para reducir el edema vasogénico medular. Tras este paso crítico, el paciente se traslada a la RMN de columna entera y a la radioterapia/neurocirugía urgente.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, en el SCMM \"el tiempo es médula\". Si mandas al paciente a la Resonancia Magnética (Opción C) sin haberle pasado la Dexametasona, y el estudio se demora 3 horas entre que lo bajan, lo posicionan y le leen las imágenes, esas 3 horas de edema asfixiante sobre la médula espinal convertirán una paraparesia reversible en una paraplejía flácida de por vida. El paciente quedará en silla de ruedas irreversiblemente. Pones la Dexametasona en el triage y luego buscas el tubo de resonancia. La TC (Opción D) no sirve para ver la médula espinal por dentro, solo ve el hueso destruido; la RMN es el estándar de oro radiológico.",
    keyPoints: [
      "Paciente con cáncer conocido (próstata, mama, pulmón) con dolor de espalda de novo o cambiante.",
      "Aparición de debilidad en piernas, nivel sensitivo o globo vesical (retención de orina).",
      "Compresión Medular. El primer paso siempre, antes del resonador, es la Dexametasona IV a dosis altas para salvar la función motora.",
      "Tema: Urgencias Oncológicas / Compresión Medular."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-94",
    university: "UCC",
    examArea: "Pediatría / Gastroenterología / Alergología",
    topic: "Gastroenterología Pediátrica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "gastroenterologia", "alergia"],
    statement: "Escolar masculino de 10 años, con antecedentes de asma bronquial y dermatitis atópica severa desde la primera infancia. Es traído por sus padres a consulta de gastroenterología pediátrica refiriendo un historial de 2 años de dolor retroesternal urente intermitente que no responde a Inhibidores de la Bomba de Protones (IBP) a doble dosis. Hace un mes, acudió a urgencias por un episodio de impactación alimentaria esofágica (\"se atoró con un trozo de carne\") que requirió extracción endoscópica. Hoy se programa una Endoscopia Digestiva Alta programada, la cual reporta: mucosa esofágica con múltiples anillos concéntricos (esófago felino o traquealización), surcos longitudinales y exudados blanquecinos puntiformes. Se toman biopsias escalonadas de esófago distal, medio y proximal que evidencian > 20 eosinófilos por campo de gran aumento (CAP). ¿Cuál es la intervención terapéutica farmacológica y dietética combinada de PRIMERA LÍNEA para inducir la remisión histológica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Corticosteroides tópicos deglutidos (ej. Fluticasona o Budesonida en suspensión viscosa) combinados con IBP y dieta de eliminación empírica."
      },
      {
        id: "B",
        label: "B",
        text: "Dilatación esofágica con balón neumático programada mensualmente asociada a domperidona y dieta libre de gluten.",
        distractorProfile: "symptomatic_and_wrong_diet_intervention",
        incorrectFeedback: "La dilatación endoscópica resuelve mecánicamente la estenosis fibrótica (complicación tardía), pero no apaga la inflamación eosinofílica primaria; sin terapia antiinflamatoria, el esófago se volverá a cerrar. La celiaquía exige dieta sin gluten, pero la EoE responde a dieta de eliminación de lácteos/trigo/huevos/soya."
      },
      {
        id: "C",
        label: "C",
        text: "Funduplicatura de Nissen laparoscópica por sospecha de Reflujo Gastroesofágico (ERGE) refractario y grave.",
        distractorProfile: "catastrophic_surgical_misdiagnosis",
        incorrectFeedback: "Intervenir quirúrgicamente el hiato esofágico en un paciente con inflamación eosinofílica transmural e infiltración alérgica es un error severo, exacerbando la disfagia y la dismotilidad propia de la EoE."
      },
      {
        id: "D",
        label: "D",
        text: "Ciclosporina sistémica oral y nutrición parenteral total por 6 meses para un reposo intestinal absoluto.",
        distractorProfile: "excessive_immunosuppression",
        incorrectFeedback: "La EoE responde excelentemente a medidas tópicas y dietéticas; someter al niño a riesgos de catéter venoso central prolongado e inmunosupresores mayores para una patología localizada en el esófago es un sobretratamiento inaceptable."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con una **Esofagitis Eosinofílica (EoE)**, una enfermedad inmunomediada (tipo Th2) crónica que afecta de forma aislada al esófago, fuertemente ligada a pacientes con historial de atopia (asma, rinitis, eccema). Sus signos cardinales son la disfagia a sólidos y la impactación alimentaria en niños mayores o adultos jóvenes. Endoscópicamente es clásico el \"esófago felino\" (anillos traqueales) y surcos lineales, pero el diagnóstico definitivo exige biopsias con ≥ 15 eosinófilos por campo de gran aumento en el epitelio escamoso. El tratamiento de inducción para la remisión histológica consta de la estrategia de \"las tres D\": Drugs (fármacos), Diet (dieta) y Dilation (solo para estenosis crónicas). En los fármacos, se usan los **corticosteroides tópicos DEGLUTIDOS** (se instruye al paciente a usar inhaladores de Fluticasona sin espaciador, tragando el aerosol, o Budesonida mezclada en jarabe espeso) para bañar la mucosa esofágica, junto a IBPs. La dieta de eliminación de 6 o 4 alimentos agresores (leche, trigo, huevo, soya, frutos secos, mariscos) es la intervención dietética de elección.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un diagnóstico que ha explotado en frecuencia en las últimas décadas. Antes, a todos estos niños les diagnosticaban \"Reflujo Gastroesofágico Refractario\" y les hacían una funduplicatura de Nissen (Opción C). ¡Pobre niño! Si le operas el esfínter esofágico inferior a un niño cuyo problema es que la pared entera del esófago está llena de eosinófilos alérgicos, su esófago se volverá un tubo rígido e inamovible para siempre. La clave de esta pregunta es la vía de administración del corticoide: \"Tópico deglutido\". Le dices a la mamá que compre el inhalador de asma, pero en vez de que el niño respire la nube, se la trague, para que el medicamento empape y cure el esófago por dentro sin causar los efectos secundarios de los esteroides sistémicos.",
    keyPoints: [
      "Niño mayor, adolescente o adulto joven con historia atópica.",
      "Disfagia a sólidos, dolor torácico refractario a IBPs o impactación de carne en el esófago.",
      "Endoscopia con anillos concéntricos (traquealización) + Biopsia > 15 eosinófilos/campo.",
      "Esofagitis Eosinofílica. Tratamiento médico: Corticoides tópicos DEGLUTIDOS (no inhalados, no sistémicos) + Dieta de eliminación alergénica empírica.",
      "Tema: Esofagitis Eosinofílica / Gastroenterología Pediátrica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-95",
    university: "UCC",
    examArea: "Medicina Interna / Neurología / Cuidado Intensivo",
    topic: "Neurología Crítica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neurologia", "uci"],
    statement: "Mujer de 55 años, hospitalizada en la Unidad de Cuidado Intensivo en su sexto día posoperatorio de un clipaje neuroquirúrgico exitoso por un aneurisma roto de la arteria comunicante anterior (Hemorragia Subaracnoidea - HSA Fisher 3, Hunt y Hess III). Se encontraba despertando y movilizando las cuatro extremidades. En el cambio de turno matutino, la paciente presenta una instauración brusca de hemiparesia izquierda 2/5 y afasia de expresión motora, junto a una caída en la escala de coma de Glasgow. Una Tomografía Computarizada (TC) de cráneo simple urgente no muestra sangrado nuevo (resangrado) y descarta hidrocefalia o edema masivo. Se realiza un Doppler Transcraneal que evidencia velocidades de flujo en la Arteria Cerebral Media derecha de 180 cm/s y un índice de Lindegaard > 4.5. ¿Cuál es el manejo hemodinámico y farmacológico INDISPENSABLE para rescatar la perfusión cerebral y prevenir el infarto isquémico definitivo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Terapia de hipotensión permisiva (Labetalol IV para PA < 140/90) e infusión de sulfato de magnesio.",
        distractorProfile: "catastrophic_hypoperfusion",
        incorrectFeedback: "Bajar la presión arterial en medio de un vasoespasmo cerebral grave colapsa inmediatamente la presión de perfusión hacia el territorio en penumbra, consolidando de forma masiva e irreversible el infarto cerebral isquémico retardado."
      },
      {
        id: "B",
        label: "B",
        text: "Inducción de Hipertensión Arterial dirigida (con vasopresores como Noradrenalina) garantizando euvolemia estricta, y mantenimiento continuo de Nimodipino oral."
      },
      {
        id: "C",
        label: "C",
        text: "Administración inmediata de Alteplase (rt-PA) intravenoso en ventana de reperfusión por sospecha de tromboembolismo carotídeo.",
        distractorProfile: "hemorrhagic_contraindication_override",
        incorrectFeedback: "La paciente tiene una cirugía de cráneo abierto de hace apenas 6 días por una hemorragia mayor; los fibrinolíticos sistémicos están estrictamente contraindicados por el riesgo absoluto de sangrado intracraneano post-quirúrgico."
      },
      {
        id: "D",
        label: "D",
        text: "Inducción del triple H clásico: Hipertensión, Hipervolemia masiva y Hemodilución extrema con coloides.",
        distractorProfile: "obsolete_historical_protocol",
        incorrectFeedback: "La hipervolemia y hemodilución profusa fueron abandonadas por la alta tasa de complicaciones médicas letales (Edema Agudo de Pulmón y síndrome de fuga capilar) sin demostrar beneficio adicional sobre la Hipertensión inducida y la euvolemia."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con la complicación más temida de la Hemorragia Subaracnoidea (HSA) en la fase subaguda: el **Vasoespasmo Cerebral Severo** con Isquemia Cerebral Retardada (DCI). Ocurre clásicamente entre los días 4 y 14 posteriores al sangrado inicial. La sangre en el espacio subaracnoideo se degrada, liberando sustancias inflamatorias y espasmogénicas que estriñen las arterias del polígono de Willis de forma crítica (documentado por el Doppler con velocidades altísimas >120-150 cm/s). El tratamiento médico de rescate neurocrítico exige aumentar radicalmente la presión de perfusión cerebral para vencer la resistencia del vaso cerrado. Históricamente se usaba la \"Terapia Triple H\" (Opción D), pero las guías de la AHA/ASA y la Neurocritical Care Society la han abolido por su altísima tasa de edema pulmonar y complicaciones. El estándar moderno y obligatorio es la **Hipertensión Inducida y la Euvolemia estricta**: se eleva la presión arterial sistólica artificialmente con vasopresores a rangos supranormales (a veces >180-200 mmHg) para empujar sangre a la zona isquémica, asegurando que el paciente esté bien hidratado pero no encharcado. El calcioantagonista de elección y probado para mejorar el desenlace neurológico, Nimodipino, debe mantenerse por 21 días de forma inquebrantable.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, la neurocrítica del vasoespasmo es contraintuitiva. Cuando alguien sufre un ACV o un aneurisma, el reflejo es \"bajarle la presión para que no sangre más\" (Opción A). Pero el aneurisma de esta paciente ya está \"clipado\" (asegurado quirúrgicamente). Ahora el problema no es que sangre, es que las arterias vecinas se paralizaron por el espasmo y el cerebro se está quedando seco. Si le bajas la presión o le das Labetalol, le cortas el único empuje que tiene la sangre para cruzar esa tubería estrecha, y la paciente infartará un hemisferio entero. Aquí usamos la Noradrenalina a propósito para hipertensar a la paciente hasta que la fuerza del chorro le devuelva la movilidad al hemicuerpo izquierdo.",
    keyPoints: [
      "Paciente entre el día 4 y 14 de una Hemorragia Subaracnoidea (HSA).",
      "Deterioro neurológico focal nuevo (hemiparesia, afasia, estupor).",
      "TAC limpia (Sin resangrado, sin hidrocefalia).",
      "Vasoespasmo Cerebral. Tratamiento salvavidas: Inducción de Hipertensión Arterial (euvolemia) + Nimodipino.",
      "Tema: Urgencias Neurológicas / Vasoespasmo Post-HSA."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-96",
    university: "UCC",
    examArea: "Pediatría / Neonatología / Hematología",
    topic: "Hematología Pediátrica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neonatologia", "hematologia"],
    statement: "Un recién nacido a término, varón de peso adecuado para la edad gestacional y producto de un embarazo de evolución sin complicaciones, es evaluado a las 12 horas de vida. El neonatólogo documenta la aparición diseminada de petequias, equimosis en los sitios de punción y un gran cefalohematoma parietal. El examen físico del neonato es, por lo demás, vigoroso, con signos vitales normales y sin hepatoesplenomegalia. Los paraclínicos de urgencia revelan un recuento plaquetario del neonato de 8.000/mm³ (Trombocitopenia profunda). Se solicita un hemograma a la madre (de 26 años, primigesta), reportando plaquetas en 280.000/mm³ (Normal). La madre no tiene antecedentes de Lupus ni de Púrpura Trombocitopénica Inmune. Ante la exclusión de sepsis (PCR y procalcitonina negativas), ¿cuál es la entidad fisiopatológica MÁS probable y el tratamiento transfuncional MÁS efectivo de primera línea?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Trombocitopenia Inmune Materna no diagnosticada (PTI); administrar Inmunoglobulina G intravenosa y transfundir cualquier pool de plaquetas disponibles.",
        distractorProfile: "misdiagnosed_maternal_itp",
        incorrectFeedback: "En la PTI materna (o paso pasivo de autoanticuerpos), las plaquetas maternas invariablemente estarían disminuidas; además, transfundir un pool de plaquetas aleatorio a un neonato con NAIT fracasará porque los aloanticuerpos destruirán rápidamente las plaquetas donadas HPA-1a positivas."
      },
      {
        id: "B",
        label: "B",
        text: "Trombocitopenia Aloinmune Neonatal (NAIT); transfundir plaquetas maternas lavadas e irradiadas (o plaquetas de banco compatibles con antígeno negativo) asociado a Inmunoglobulina IV al neonato."
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome de Kasabach-Merritt congénito; administrar bolos de corticoides y planificar esplenectomía al año de vida.",
        distractorProfile: "wrong_hemangioma_syndrome",
        incorrectFeedback: "El Síndrome de Kasabach-Merritt se asocia con un hemangioendotelioma kaposiforme gigante (tumor vascular evidente en la piel o vísceras) que atrapa y consume las plaquetas y el fibrinógeno; no se presenta en niños anatómicamente normales."
      },
      {
        id: "D",
        label: "D",
        text: "Púrpura Trombocitopénica Trombótica del recién nacido; iniciar exanguinotransfusión urgente para reponer la enzima ADAMTS-13.",
        distractorProfile: "adult_disease_extrapolated_to_neonate",
        incorrectFeedback: "La PTT congénita (Síndrome de Upshaw-Schülman) es rarísima y se manifestaría con microangiopatía trombótica fulminante (esquizocitos, anemia hemolítica e ictericia severa precoz), no como un defecto puramente plaquetario aislado."
      }
    ],
    correctOptionId: "B",
    explanation: "El neonato presenta una Trombocitopenia Aloinmune Neonatal (NAIT, por sus siglas en inglés). Esta patología es la contraparte plaquetaria de la incompatibilidad Rh (Enfermedad Hemolítica del Recién Nacido). Ocurre cuando el feto hereda un antígeno plaquetario humano del padre (usualmente el HPA-1a) que la madre no posee. La madre, expuesta a este antígeno fetal durante el embarazo, crea anticuerpos IgG que cruzan la placenta y destruyen exclusiva y masivamente las plaquetas del feto. A diferencia de la PTI, en la NAIT **la madre tiene plaquetas estrictamente normales**, pero el bebé nace con trombocitopenias de peligro vital (<20,000) y tiene un altísimo riesgo de Hemorragia Intracraneal en el útero o periparto. El tratamiento de rescate exige la transfusión de plaquetas que NO tengan el antígeno atacado. La fuente más rápida y perfecta para esto es **la propia madre**: se extraen sus plaquetas, se lavan (para quitarles el plasma que contiene los anticuerpos asesinos), se irradian y se transfundan al bebé. A la par, se usa IGIV en el neonato para saturar los receptores de los macrófagos y frenar la destrucción.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un diagnóstico finísimo que debes llevar impreso en la mente, Elizabeth. Si la mamá tuviera PTI (Lupus o autoinmunidad), sus propias plaquetas estarían por el piso porque sus anticuerpos atacan *sus* plaquetas y también atacan las del bebé. Pero si la mamá tiene 280,000 plaquetas y el bebé tiene 8,000, es una guerra de incompatibilidad aloinmune. Transfundir plaquetas \"normales de banco\" (Opción A) es casi inútil en un sangrado agudo de NAIT, porque la mayoría de la población general ES portadora del antígeno HPA-1a; el anticuerpo de la mamá las destrozará en un minuto. Las plaquetas de la mamá son la salvación porque genéticamente carecen del antígeno diana y son \"invisibles\" al anticuerpo destructivo, siempre y cuando las laves para no pasarle el veneno plasmático en la bolsa.",
    keyPoints: [
      "Recién nacido vigoroso pero sangrando/punteado con plaquetas muy bajas (<20,000).",
      "Madre completamente SANA, con plaquetas normales, sin historia autoinmune.",
      "Trombocitopenia Aloinmune Neonatal (Incompatibilidad HPA-1a). Peligro altísimo de sangrado cerebral. Terapia ideal: Plaquetas maternas lavadas e Inmunoglobulina IV al neonato.",
      "Tema: Hematología Neonatal / NAIT."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-97",
    university: "UCC",
    examArea: "Medicina Interna / Gastroenterología / Genética",
    topic: "Gastroenterología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia", "genetica", "hepatologia"],
    statement: "Hombre de 54 años, con diagnóstico reciente de Diabetes Mellitus tipo 2 y episodios repetidos de artralgias en las articulaciones metacarpofalángicas, acude a consulta por fatiga progresiva. Al examen físico resalta una hiperpigmentación bronceada diseminada en áreas expuestas al sol y cicatrices, sin placas en mucosas, y una hepatomegalia firme e indolora. Se descarta alcoholismo. Paraclínicos: Glucemia en ayunas 165 mg/dL, AST 95 U/L, ALT 85 U/L. Un perfil férrico revela una Ferritina Sérica de 1.850 ng/mL y un Porcentaje de Saturación de Transferrina del 68%. Una ecografía abdominal documenta esteatosis hepática moderada con patrón homogéneo. ¿Cuál es el estudio genético MÁS específico y de primera línea para confirmar el diagnóstico de la enfermedad metabólica subyacente y evitar la biopsia invasiva?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Análisis de la mutación del gen ATP7B (mutación de la proteína transportadora de cobre).",
        distractorProfile: "wrong_metal_storage_disease",
        incorrectFeedback: "El gen ATP7B codifica la ATPasa transportadora de cobre, cuya mutación produce la Enfermedad de Wilson. Esta cursa con síntomas neuropsiquiátricos y hepatopatía en pacientes jóvenes (2da década), pero no con hiperpigmentación cutánea bronceada, diabetes severa de novo, ni sobrecarga de hierro o ferritina masiva."
      },
      {
        id: "B",
        label: "B",
        text: "Test genético para las mutaciones C282Y y H63D del gen HFE."
      },
      {
        id: "C",
        label: "C",
        text: "Determinación de los niveles de Ceruloplasmina sérica seguidos de excreción urinaria en 24h.",
        distractorProfile: "wilson_disease_workup",
        incorrectFeedback: "La ceruloplasmina es el screening de la Enfermedad de Wilson (se encuentra disminuida por falta de acoplamiento del cobre). La viñeta apunta exclusivamente a una toxicidad por hierro, donde estos valores de cobre estarían normales."
      },
      {
        id: "D",
        label: "D",
        text: "Cuantificación de Alfa-1-Antitripsina y fenotipificación de las variantes alélicas PiZZ.",
        distractorProfile: "wrong_inborn_error_of_metabolism",
        incorrectFeedback: "El déficit de Alfa-1-Antitripsina causa cirrosis hepática y enfisema panacinar pulmonar precoz, no la patognomónica diabetes bronceada y no se asocia a elevaciones extremas de la saturación de transferrina en pacientes de 50 años de vida."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta el cuadro florido y patognomónico de la Hemocromatosis Hereditaria: la clásica tríada tardía de **Cirrosis / Hepatomegalia + Diabetes Mellitus + Hiperpigmentación cutánea (\"Diabetes Bronceada\")**, sumada a la artropatía típica de las articulaciones metacarpofalángicas (donde se ven condrocalcinosis o formaciones en gancho en la Rx). El marcador de cribado de primera línea que hace saltar la alarma es la Saturación de Transferrina elevada (>45-50% en ayunas), seguida de una ferritina masivamente aumentada. En la medicina moderna, el diagnóstico de la hemocromatosis ya no requiere de forma mandatoria una biopsia hepática para medir el hierro intrahepático en la fase inicial. El paso confirmatorio no invasivo de elección, una vez detectada la saturación de transferrina alta, es la prueba genética para detectar la mutación homocigota **C282Y** (o heterocigota compuesta C282Y/H63D) en el gen HFE.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Para el examen, no te confundas con las enfermedades de depósito del hígado. Si el paciente es *joven* (15 a 30 años), se vuelve loco (síntomas psiquiátricos/neurológicos) y tiene el hígado fallando con temblor, eso es Cobre y Enfermedad de Wilson (Mutación ATP7B, Ceruloplasmina baja, Anillo de Kayser-Fleischer; Opciones A y C). Pero si el paciente es un *hombre mayor de 50 años*, tiene el hígado fallando, debuta con diabetes repentina, el azúcar se le sale de control y la piel se le vuelve de color bronce, eso es Hierro oxidándose en sus órganos: Hemocromatosis, el gen HFE. Las sangrías (sacarle un litro de sangre cada semana) salvarán su páncreas y su corazón.",
    keyPoints: [
      "Hombre de mediana edad con debut de diabetes + Hepatopatía + Piel oscura (Diabetes Bronceada).",
      "Artralgias en el 2do y 3er nudillo de la mano.",
      "Saturación de Transferrina > 45-50% con Ferritina > 1000 ng/mL.",
      "Hemocromatosis Hereditaria (Acúmulo tóxico de hierro sistémico). Prueba de confirmación: Análisis del Gen HFE (mutación C282Y). El tratamiento curativo vitalicia son las Flebotomías terapéuticas repetidas.",
      "Tema: Hepatopatías Metabólicas / Hemocromatosis."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-98",
    university: "UCC",
    examArea: "Pediatría / Infectología / Urgencias",
    topic: "Infectología Pediátrica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "urgencias"],
    statement: "Adolescente masculino de 16 años, asiste a consulta de urgencias por un cuadro de 4 días de evolución que inició con fiebre alta, dolor de garganta intenso (odinofagia), debilidad extrema y la aparición de una gran masa dolorosa en la cara lateral izquierda del cuello. El médico general diagnosticó inicialmente faringitis estreptocócica y prescribió penicilina V oral, pero hoy el paciente regresó por disnea progresiva, escalofríos severos (rigors) y dolor pleurítico bilateral. Al examen físico: PA 90/60 mmHg, FC 128 lpm, FR 28 rpm. Se palpa un cordón indurado y extremadamente doloroso a lo largo del trayecto del músculo esternocleidomastoideo izquierdo. La orofaringe se observa inflamada con exudados periamigdalinos. Una radiografía de tórax revela múltiples nódulos cavitados periféricos en ambos pulmones. ¿Cuál es la sospecha diagnóstica sindrómica, el germen causal y el régimen antibiótico empírico de rescate MÁS apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome de choque tóxico por *Staphylococcus aureus* (SAMR); requiere Vancomicina e Inmunoglobulina intravenosa.",
        distractorProfile: "overlapping_lung_cavitation_error",
        incorrectFeedback: "Aunque el SAMR comunitario puede dar neumonía necrotizante cavitada (por toxina PVL) y choque, no está precedido del clásico síndrome anginal agudo con tromboflebitis séptica de la vena yugular, que es el puente fisiopatológico del Lemierre mediado por anaerobios."
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Lemierre por *Fusobacterium necrophorum*; requiere Ampicilina-Sulbactam o Piperacilina-Tazobactam intravenosos prolongados."
      },
      {
        id: "C",
        label: "C",
        text: "Mononucleosis infecciosa complicada por *Epstein-Barr* con miocarditis; el manejo es de soporte y Corticosteroides IV.",
        distractorProfile: "false_pharyngitis_association",
        incorrectFeedback: "La mononucleosis causa faringitis exudativa con linfadenopatía simétrica y astenia en adolescentes, pero no produce un síndrome embólico vascular destructor hacia los pulmones, ni el choque séptico purulento observado."
      },
      {
        id: "D",
        label: "D",
        text: "Absceso Periamigdalino complicado con *Streptococcus pyogenes* invasivo; el manejo curativo exclusivo es el drenaje quirúrgico otorrinolaringológico.",
        distractorProfile: "wrong_extent_of_complication",
        incorrectFeedback: "El drenaje del absceso orofaríngeo es crucial localmente, pero no trata la tromboflebitis yugular diseminada subyacente. El S. pyogenes es la causa usual del absceso local, pero no del cuadro metastásico pulmonar séptico clásico anaerobio de Lemierre."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un **Síndrome de Lemierre** (Sepsis post-anginal). Es una complicación grave de una infección orofaríngea en adolescentes y adultos jóvenes, causada casi exclusivamente por un anaerobio estricto de la cavidad oral: *Fusobacterium necrophorum*. Fisiopatológicamente, la infección faríngea invade los tejidos laterales del cuello, desencadenando una **tromboflebitis séptica de la Vena Yugular Interna** (evidenciada en la viñeta como el \"cordón doloroso e indurado a lo largo del ECM\"). Los coágulos infectados se desprenden de la vena yugular y viajan directamente al corazón derecho y a los pulmones, provocando **embolismos sépticos pulmonares** masivos (nódulos múltiples y cavitaciones en la radiografía) que causan dolor pleurítico, choque y falla respiratoria. Al tratarse de un patógeno anaerobio estricto y productor de beta-lactamasas, el tratamiento exige penicilinas con inhibidores de beta-lactamasas (Ampicilina-Sulbactam, Piperacilina-Tazobactam) o Carbapenémicos durante varias semanas para erradicar la flebitis invasiva.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** El Síndrome de Lemierre es la \"Enfermedad Olvidada\" que mata jóvenes de forma fulminante. El examen de residencia siempre te tratará de desviar hacia un absceso faríngeo clásico (Opción D). Pero la clave patognomónica está en el pulmón y en el trayecto de la vena. Un absceso periamigdalino simple (S. pyogenes) te duele y te desvía la úvula, pero no te llena los pulmones de cañonazos sépticos cavitados en 48 horas. El *Fusobacterium* viaja en trombo por la yugular hasta el pulmón. Y ojo con la Opción A: aunque el S. aureus causa nódulos pulmonares cavitados (neumonía por PVL), rara vez hace faringoamigdalitis primaria con cordones yugulares palpables sin un acceso venoso previo, y el estafilococo no es el rey del síndrome post-anginal anaerobio.",
    keyPoints: [
      "Adolescente o joven sano que hace una amigdalitis/faringitis aguda severa que no cede.",
      "Desarrollo de inflamación/dolor unilateral severo en el cuello (trombosis de yugular interna).",
      "Deterioro respiratorio agudo con embolismos sépticos pulmonares en la RX/TAC.",
      "Síndrome de Lemierre. Agente causal: Fusobacterium necrophorum. Tratamiento: Cobertura anaerobia con inhibidores de beta-lactamasas (Ampicilina/Sulbactam) por varias semanas; los macrólidos solos y la penicilina sola fracasan.",
      "Tema: Urgencias Infectológicas / Síndrome de Lemierre."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-99",
    university: "UCC",
    examArea: "Medicina Interna / Nefrología / Inmunología",
    topic: "Nefrología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "nefrologia", "inmunologia"],
    statement: "Hombre de 28 años, fumador activo, consulta a urgencias por un cuadro de inicio brusco de tos, hemoptisis franca (expectoración abundante de sangre) y disnea progresiva de 3 días de evolución, acompañado de oliguria marcada (producción de solo 200 cc de orina en 24h). Al examen físico: luz intensamente pálido, taquipneico (FR 30 rpm), PA 155/95 mmHg. Auscultación pulmonar con crépitos alveolares bilaterales profusos. Paraclínicos: Creatinina sérica se dispara a 6.2 mg/dL (basal desconocida), BUN 98 mg/dL. Hemoglobina 7.2 g/dL. El parcial de orina reporta un sedimento inflamatorio activo con cilindros eritrocitarios y proteinuria (++). La radiografía de tórax evidencia infiltrados alveolares difusos densos compatibles con hemorragia alveolar masiva. Los resultados inmunológicos de urgencia reportan: p-ANCA Negativo, c-ANCA Negativo, y **Anticuerpos Anti-Membrana Basal Glomerular (Anti-MBG) fuertemente Positivos**. ¿Cuál es la terapia de rescate vital INDISPENSABLE Y OBLIGATORIA para evitar la mortalidad inmediata y preservar la función renal residual en este síndrome?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Terapia combinada con Glucocorticoides endovenosos a dosis de pulso y Ciclofosfamida intravenosa exclusiva para frenar la proliferación linfocítica.",
        distractorProfile: "inadequate_therapy_for_antibody_mediated_disease",
        incorrectFeedback: "La quimioterapia suprime la producción de nuevos autoanticuerpos en días a semanas, pero es ineficaz para neutralizar y eliminar la inmensa carga circulante de anticuerpos IgG que ya están causando la hemorragia alveolar letal; se debe obligatoriamente añadir plasmaféresis para extraerlos."
      },
      {
        id: "B",
        label: "B",
        text: "Realización diaria de Recambio Plasmático Terapéutico (Plasmaféresis), asociada a pulsos de Metilprednisolona y Ciclofosfamida sistémica."
      },
      {
        id: "C",
        label: "C",
        text: "Instauración de Hemodiálisis diaria de alta eficiencia para depurar los anticuerpos circulantes y corregir la falla renal aguda oligúrica.",
        distractorProfile: "wrong_extracorporeal_technique",
        incorrectFeedback: "La hemodiálisis estándar limpia las toxinas nitrogenadas de bajo peso molecular (BUN, Creatinina, Potasio), pero el tamaño de poro de los filtros dialíticos convencionales impide en absoluto el paso y eliminación de macroglobulinas inmunes como las IgG anti-MBG."
      },
      {
        id: "D",
        label: "D",
        text: "Administración de antibióticos de amplio espectro e intubación orotraqueal con protección de la vía aérea en prono por sospecha de SDRA necrotizante bacteriano.",
        distractorProfile: "misdiagnosis_sepsis_vs_autoimmune",
        incorrectFeedback: "Las pruebas inmunológicas positivas y el sedimento urinario activo nefrítico confirman firmemente un origen autoinmune (Enfermedad de Goodpasture) y no bacteriano, haciendo del soporte antibiótico una terapia fútil para la patogenia base del sangrado."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un **Síndrome de Goodpasture (Enfermedad por Anticuerpos Anti-MBG)**, una emergencia autoinmune catastrófica que provoca un Síndrome Pulmón-Riñón fulminante. A diferencia de las vasculitis ANCA (como Wegener o MPA) donde los esteroides y la ciclofosfamida/rituximab por sí solos pueden inducir remisión, la enfermedad de Goodpasture está impulsada por un ataque directo, masivo y lineal de autoanticuerpos circulantes IgG contra el colágeno tipo IV alfa-3, que destruye rápida y simultáneamente los glomérulos y los alvéolos. La supervivencia de este paciente, que se está ahogando en su propia sangre (hemorragia alveolar) y entrando en anuria, depende estrictamente de un procedimiento mecánico que \"lave\" los anticuerpos destructores de la sangre antes de que el daño sea permanente (en horas a días): el **Recambio Plasmático Terapéutico o Plasmaféresis diaria**. La plasmaféresis es el pilar central y obligatorio, siempre escoltada por la inmunosupresión con corticoides y ciclofosfamida (para frenar la síntesis de nuevos anticuerpos).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, esta pregunta decide si sabes distinguir las sutilezas de la inmunología pulmonar y renal. En las vasculitis de pequeños vasos (como Wegener o Poliangeítis Microscópica), el plasmaféresis es opcional y se guarda para casos de extrema gravedad, porque los corticoides y la quimioterapia actúan muy bien en el citoplasma neutrofílico. ¡Pero el Goodpasture es un monstruo diferente! El anticuerpo IgG anti-membrana está pegado físicamente a los alvéolos causando sangrado incontrolable (tipo II hipersensibilidad). Tienes que meter a ese paciente a una máquina y extraerle el plasma infectado con el anticuerpo de su sangre, todos los días por dos semanas. Dejarlo solo con la quimioterapia (Opción A) es una condena a la asfixia y diálisis irreversible. La Hemodiálisis pura (Opción C) solo limpia la urea, no los anticuerpos IgG gigantes; la máquina no los filtra.",
    keyPoints: [
      "Hombre joven fumador con Síndrome Pulmón-Riñón (Hemoptisis masiva + Falla renal por glomerulonefritis).",
      "Laboratorio pivote: Anticuerpos Anti-MBG positivos (ANCA negativos).",
      "Síndrome de Goodpasture. El tratamiento salvavidas absoluto incluye la Plasmaféresis intensiva diaria de inmediato. Solo esteroides o solo ciclofosfamida no lograrán frenar el sangrado alveolar a tiempo.",
      "Tema: Síndrome Pulmón-Riñón / Goodpasture."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-100",
    university: "UCC",
    examArea: "Medicina Interna / Cardiología / Cuidado Intensivo",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "cuidado_intensivo", "urgencias"],
    statement: "Hombre de 56 años, con diagnóstico reciente de Carcinoma de Pulmón de Células no pequeñas avanzado, en tratamiento con quimioterapia paliativa. Ingresa al servicio de urgencias refiriendo disnea severa progresiva en los últimos 3 días, fatiga paralizante, dolor pleurítico leve bilateral y síncope de esfuerzo esta mañana. Al examen físico el paciente se encuentra sumamente ansioso, diaforético, con acrocianosis en las puntas de los dedos. Signos vitales: PA 85/65 mmHg, FC 135 lpm, FR 32 rpm. Ingurgitación yugular marcada hasta el ángulo de la mandíbula estando sentado a 45 grados. Los ruidos cardíacos se auscultan muy apagados, velados y distantes. La evaluación de la presión arterial demuestra una caída de 22 mmHg en la presión arterial sistólica durante la inspiración profunda regular (Pulso paradójico de Kussmaul positivo). El ECG evidencia una taquicardia sinusal con complejos de bajo voltaje generalizado y alternancia eléctrica clara. ¿Cuál es el paso INMEDIATO de soporte hemodinámico crucial mientras se prepara el equipo para el procedimiento de drenaje invasivo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar dosis altas de Furosemida intravenosa (40-80 mg) para aliviar la sobrecarga derecha y la ingurgitación yugular que compromete el corazón.",
        distractorProfile: "deadly_preload_reduction",
        incorrectFeedback: "La furosemida disminuye la precarga; en un corazón que depende de presiones de llenado altísimas para vencer la constricción del taponamiento pericárdico, esto produce un colapso cardiovascular y paro inmediato."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar infusión de bolos rápidos de cristaloides (Solución Salina Normal 0.9%) para incrementar transitoriamente la precarga y sostener el gasto cardíaco, evitando presión positiva."
      },
      {
        id: "C",
        label: "C",
        text: "Proceder inmediatamente a la intubación orotraqueal e iniciar ventilación mecánica con Presión Positiva al Final de la Espiración (PEEP) para oxigenar el miocardio isquémico.",
        distractorProfile: "fatal_positive_pressure",
        incorrectFeedback: "La ventilación con presión positiva (PEEP) aumenta la presión intratorácica, disminuyendo el retorno venoso, lo que colapsa irreversiblemente las cavidades derechas en presencia de taponamiento."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar terapia trombolítica con Alteplase por alta sospecha de Tromboembolismo Pulmonar Masivo obstructivo asociado a su neoplasia.",
        distractorProfile: "wrong_obstructive_shock_pathology",
        incorrectFeedback: "El alteplase está indicado para tromboembolismo pulmonar, pero en el taponamiento no resuelve el líquido pericárdico (y si hay un origen hemorrágico en el derrame maligno, empeora el sangrado intramiocárdico/pericárdico)."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Taponamiento Cardíaco Agudo, frecuentemente secundario en adultos a derrame pericárdico maligno (metástasis de cáncer de pulmón o mama). Las manifestaciones son la Tríada de Beck (Hipotensión, Ruidos cardíacos velados, Ingurgitación yugular) sumada a la taquicardia, el pulso paradójico y la alternancia eléctrica en el ECG (por el movimiento pendular del corazón dentro de la bolsa de líquido). Fisiopatológicamente, la presión del líquido pericárdico estrangula y comprime las cavidades derechas del corazón, impidiendo el llenado diastólico (precarga). El ventrículo derecho colapsa bajo la presión. La medida puente salva-vidas más crítica (mientras llega la aguja para la pericardiocentesis) es administrar **bolos de cristaloides intravenosos rápidos** (Solución Salina Normal). El volumen extra aumenta artificialmente la presión venosa central y la precarga, forzando a las cámaras derechas a \"abrirse\" contra la presión del líquido externo, manteniendo así el gasto cardíaco.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un error conceptual que mata pacientes todos los días. Ves la yugular ingurgitada hasta las orejas y el primer instinto de piso es \"¡Furosemida, está sobrecargado!\" (Opción A). Falso. El corazón está apretado, no ahogado por agua propia. Si le pones diurético, le quitas la poca sangre que lograba entrar al corazón y el paciente hace un paro cardíaco inmediato. Lo mismo pasa si lo intubas (Opción C); la presión positiva del ventilador en el tórax estrangula aún más las venas cavas y bloquea el retorno venoso. El paciente con taponamiento necesita LÍQUIDOS a presión para \"empujar\" y abrir el corazón cerrado, hasta que puedas clavar la aguja y sacar la sangre pericárdica.",
    keyPoints: [
      "Paciente oncológico con choque obstructivo.",
      "Tríada de Beck (Hipotensión, Ruidos velados, Ingurgitación yugular), Pulso paradójico y Alternancia eléctrica.",
      "Taponamiento cardíaco. Terapia de soporte puente inicial: Bolos de cristaloides (evitar diuréticos y ventilación mecánica invasiva a toda costa).",
      "Tema: Urgencias Cardiovasculares / Taponamiento Cardíaco."
    ]
  }
];
