import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC â€” EdiciÃ³n #3 (19 jul 2025) Â· Preguntas #91â€“#100.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_91_100_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-91",
    university: "UCC",
    examArea: "Medicina Interna / EndocrinologÃ­a / CardiologÃ­a",
    topic: "EndocrinologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia", "cardiologia", "tiroides"],
    statement: "Hombre de 68 aÃ±os con antecedente de FibrilaciÃ³n Auricular paroxÃ­stica en manejo con Amiodarona (200 mg/dÃ­a) desde hace 3 aÃ±os. Consulta por un cuadro de un mes de pÃ©rdida de peso (6 kg), astenia marcada, palpitaciones y temblor fino distal. Al examen fÃ­sico: PA 145/85 mmHg, FC 115 lpm, sin exoftalmos, tiroides de tamaÃ±o normal e indolora. ParaclÃ­nicos: TSH < 0.01 mUI/L, T4 libre y T3 libre francamente elevadas. Se realiza una EcografÃ­a Doppler color tiroidea que evidencia una glÃ¡ndula de ecogenicidad heterogÃ©nea con **flujo vascular marcadamente disminuido (ausencia de vascularizaciÃ³n intratisular)**. La captaciÃ³n de yodo radiactivo en gammagrafÃ­a es < 1%. Â¿CuÃ¡l es el tratamiento de PRIMERA LÃNEA MÃS adecuado para la tirotoxicosis de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender inmediatamente la Amiodarona e iniciar Metimazol a dosis altas para bloquear la sÃ­ntesis de nuevas hormonas tiroideas.",
        distractorProfile: "wrong_thyrotoxicosis_type_therapy",
        incorrectFeedback: "El Metimazol es el tratamiento del TIA Tipo 1 (hiperfunciÃ³n con aumento de vascularizaciÃ³n); en el Tipo 2 es ineficaz porque la liberaciÃ³n hormonal se debe a lisis tisular y no a sÃ­ntesis de novo."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar Corticosteroides sistÃ©micos (Prednisona oral a dosis medias-altas) y mantener control de frecuencia con beta-bloqueadores."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar terapia ablativa con Iodo-131 de forma urgente debido a la severidad del hipertiroidismo.",
        distractorProfile: "mechanistic_error_in_destructive_thyroiditis",
        incorrectFeedback: "El Iodo radiactivo estÃ¡ contraindicado y es inÃºtil en la TIA (de cualquier tipo) debido a que la glÃ¡ndula ya estÃ¡ masivamente saturada del yodo de la amiodarona y no captarÃ¡ el isÃ³topo terapÃ©utico (captaciÃ³n < 1%)."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Propiltiouracilo (PTU) combinado con Colestiramina para interrumpir la circulaciÃ³n enterohepÃ¡tica de las hormonas.",
        distractorProfile: "futile_combination_therapy",
        incorrectFeedback: "El PTU y la colestiramina se reservan para crisis de hipertiroidismo primario severo o TIA Tipo 1 refractaria; en la tiroiditis destructiva no atacan la inflamaciÃ³n citotÃ³xica que estÃ¡ lizando el folÃ­culo."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Tirotoxicosis Inducida por Amiodarona (TIA) Tipo 2. La amiodarona (que contiene un 37% de yodo en su peso) puede causar dos tipos de tirotoxicosis. El Tipo 1 ocurre en pacientes con patologÃ­a tiroidea latente (Graves o bocio multinodular) y se caracteriza por exceso de sÃ­ntesis (Doppler con flujo vascular aumentado o \"infierno tiroideo\"). El Tipo 2, presente en este paciente, es una **tiroiditis destructiva** donde la droga rompe los folÃ­culos y libera hormona preformada a la sangre; el Doppler muestra un flujo vascular nulo o muy bajo, y la captaciÃ³n de yodo es mÃ­nima. Como no hay \"sÃ­ntesis\" nueva, los antitiroideos (Metimazol/PTU) no sirven. El tratamiento de oro y curativo para apagar la inflamaciÃ³n destructiva del Tipo 2 son los glucocorticoides (Prednisona).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Un escenario de endocrinologÃ­a fina, Colega. La Amiodarona es el fÃ¡rmaco mÃ¡s \"tÃ³xico\" para la tiroides. Tienes que diferenciar entre el Tipo 1 y el Tipo 2 porque el tratamiento es opuesto. El Tipo 1 es una fÃ¡brica sobre-estimulada por el yodo de la pastilla; ahÃ­ usas Metimazol para apagar las mÃ¡quinas. El Tipo 2 es una explosiÃ³n de los folÃ­culos por toxicidad directa; no hay mÃ¡quinas que apagar, todo el material ya estÃ¡ en la sangre. Darle Metimazol (OpciÃ³n A) a un TIA Tipo 2 no le hace ni cosquillas a la enfermedad. Los esteroides desinflaman la glÃ¡ndula y frenan la ruptura folicular en cuestiÃ³n de semanas. Y recuerda: la Amiodarona se acumula en la grasa por meses, suspenderla hoy no te curarÃ¡ maÃ±ana.",
    keyPoints: [
      "Paciente tomando Amiodarona que desarrolla hipertiroidismo franco (TSH baja, T4 alta).",
      "EcografÃ­a Doppler Tiroidea con vascularizaciÃ³n DISMINUIDA o captaciÃ³n de Iodo < 1%.",
      "Tirotoxicosis Inducida por Amiodarona (TIA) Tipo 2 (Tiroiditis Destructiva). El tratamiento farmacolÃ³gico exclusivo son los Corticosteroides.",
      "Tema: Efectos Adversos FarmacolÃ³gicos / Tirotoxicosis."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-92",
    university: "UCC",
    examArea: "PediatrÃ­a / Urgencias / ToxicologÃ­a",
    topic: "ToxicologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "urgencias", "toxicologia"],
    statement: "Una niÃ±a de 4 aÃ±os es encontrada por su abuelo en el piso de la habitaciÃ³n, convulsionando y con un frasco vacÃ­o de Amitriptilina (antidepresivo tricÃ­clico) a su lado. La ambulancia la traslada a urgencias a los 30 minutos del hallazgo. A su ingreso: estuporosa, PA 70/40 mmHg, FC 165 lpm, mucosas orales extremadamente secas y pupilas dilatadas de 7 mm. El monitor cardÃ­aco y el ECG de 12 derivaciones muestran una taquicardia sinusal con un complejo QRS ensanchado a 150 milisegundos, acompaÃ±ado de una onda R terminal prominente en aVR (mayor de 3 mm). Durante la evaluaciÃ³n, la niÃ±a presenta una nueva crisis convulsiva tÃ³nico-clÃ³nica generalizada. Â¿CuÃ¡l es el antÃ­doto / intervenciÃ³n toxicolÃ³gica ESPECÃFICA MÃS importante para estabilizar el miocardio y prevenir una arritmia letal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar bolo intravenoso de Bicarbonato de Sodio (1 a 2 mEq/kg) hasta estrechar el QRS."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Fisostigmina en infusiÃ³n continua para revertir el toxÃ­drome anticolinÃ©rgico masivo.",
        distractorProfile: "deadly_antidote_in_this_context",
        incorrectFeedback: "La Fisostigmina revierte los sÃ­ntomas anticolinÃ©rgicos puros, pero en la sobredosis de tricÃ­clicos exacerba el bloqueo cardÃ­aco y precipita un paro cardiorrespiratorio en asistolia que no responde a reanimaciÃ³n."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusiÃ³n de Sulfato de Magnesio a 50 mg/kg por la prolongaciÃ³n inminente del intervalo QT.",
        distractorProfile: "secondary_arrhythmia_treatment",
        incorrectFeedback: "Aunque los ATC pueden prolongar el QT secundariamente, la causa principal de la muerte es el bloqueo del canal de sodio (QRS ancho), no la Torsades de Pointes primaria; el magnesio no corrige la hipotensiÃ³n ni la conducciÃ³n intraventricular."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Flumazenil intravenoso inmediato debido a la alteraciÃ³n del sensorio profunda y el coma.",
        distractorProfile: "contraindicated_in_seizures",
        incorrectFeedback: "El Flumazenil es un antagonista de benzodiacepinas. Usarlo en un paciente que ya estÃ¡ convulsionando (y mÃ¡s si ingiriÃ³ proconvulsivantes como los tricÃ­clicos) desencadenarÃ­a un estatus epilÃ©ptico refractario."
      }
    ],
    correctOptionId: "A",
    explanation: "La paciente cursa con una intoxicaciÃ³n grave por Antidepresivos TricÃ­clicos (ATC). Estos fÃ¡rmacos producen una mezcla tÃ³xica letal: bloqueo alfa (hipotensiÃ³n), bloqueo muscarÃ­nico (midriasis, mucosas secas, taquicardia) y, su efecto mÃ¡s mortal, el **bloqueo de los canales rÃ¡pidos de sodio miocÃ¡rdicos**. Este bloqueo del sodio prolonga drÃ¡sticamente el complejo QRS (> 100 ms es riesgo de convulsiÃ³n, > 160 ms es altÃ­simo riesgo de arritmias ventriculares como la TV o FV) y produce el signo patognomÃ³nico de la onda R positiva en aVR. El antÃ­doto especÃ­fico y vital para superar este bloqueo es el **Bicarbonato de Sodio hiperosmolar en bolos intravenosos**. El bicarbonato actÃºa mediante dos mecanismos: proporciona una carga masiva de iones de sodio que desplazan competitivamente al fÃ¡rmaco del canal, y alcaliniza la sangre (pH > 7.45) lo que disminuye la fracciÃ³n libre y activa del tricÃ­clico.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** En la toxicologÃ­a de los antidepresivos tricÃ­clicos, el electrocardiograma es tu semÃ¡foro de la muerte. Si el QRS se abre por encima de 100 milisegundos, el paciente va a convulsionar. Si pasa de 160, el ventrÃ­culo va a fibrilar. La Fisostigmina (OpciÃ³n B) es una trampa muy seductora porque el paciente \"luce\" anticolinÃ©rgico (pupilas grandes, boca seca), PERO estÃ¡ absolutamente contraindicada en la intoxicaciÃ³n por ATC; administrar fisostigmina a un corazÃ³n con el QRS ancho provoca asistolia intratable instantÃ¡nea. Tu bala de plata es el Bicarbonato de Sodio: se pasa en bolos hasta que veas en el monitor que el QRS se encoge y vuelve a la normalidad.",
    keyPoints: [
      "NiÃ±o o adulto con alteraciÃ³n del sensorio, convulsiones e hipotensiÃ³n + AnticolinÃ©rgico.",
      "Ingesta de Antidepresivos TricÃ­clicos (Amitriptilina, Imipramina).",
      "ECG con **QRS ancho (> 100 ms)** y Onda R terminal en aVR.",
      "Bloqueo de canales de Sodio. Tratamiento de rescate absoluto: Bolos de Bicarbonato de Sodio IV.",
      "Tema: ToxicologÃ­a PediÃ¡trica / IntoxicaciÃ³n por TricÃ­clicos."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-93",
    university: "UCC",
    examArea: "Medicina Interna / OncologÃ­a / NeurologÃ­a",
    topic: "OncologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "oncologia", "neurologia"],
    statement: "Hombre de 64 aÃ±os, con antecedente de adenocarcinoma de prÃ³stata diagnosticado hace 3 aÃ±os con metÃ¡stasis Ã³seas conocidas en seguimiento. Acude a urgencias quejÃ¡ndose de dolor lumbar intenso (10/10) que ha cambiado de caracterÃ­sticas en las Ãºltimas semanas, volviÃ©ndose constante y exacerbÃ¡ndose con el decÃºbito. Hoy, al intentar levantarse de la cama, notÃ³ debilidad marcada en ambas piernas (\"no le sostienen el peso\") y refiere que no ha podido orinar desde hace 14 horas, a pesar de sentir plenitud abdominal. Al examen fÃ­sico: paraparesia 2/5 bilateral simÃ©trica, hipoestesia con nivel sensitivo en T10, reflejos rotulianos exaltados (hiperreflexia) y globo vesical palpable. Â¿CuÃ¡l es el paso INMEDIATO de mayor prioridad que preserva la funcionalidad neurolÃ³gica antes de enviar al paciente a radiologÃ­a?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Dexametasona intravenosa a altas dosis (ej. 10 a 16 mg en bolo seguido de infusiÃ³n) e interconsultar a neurocirugÃ­a/oncologÃ­a."
      },
      {
        id: "B",
        label: "B",
        text: "Insertar una sonda Foley para aliviar la retenciÃ³n urinaria e iniciar quimioterapia citotÃ³xica endovenosa.",
        distractorProfile: "inadequate_supportive_care",
        incorrectFeedback: "La sonda Foley es una medida de confort necesaria, pero la quimioterapia sistÃ©mica tiene un inicio de acciÃ³n de dÃ­as a semanas, siendo totalmente inÃºtil para descomprimir una mÃ©dula asfixiada en horas."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar de forma hiperurgente una Resonancia MagnÃ©tica (RMN) de columna total con contraste y evitar usar fÃ¡rmacos que alteren el tejido tumoral.",
        distractorProfile: "deadly_diagnostic_delay",
        incorrectFeedback: "Aunque la RMN es el estudio de elecciÃ³n absoluto, retrasar la administraciÃ³n de corticosteroides por obtener la imagen resulta en un daÃ±o isquÃ©mico medular irreversible por edema no controlado."
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar TomografÃ­a Computarizada (TC) de columna toracolumbar para programar laminectomÃ­a de descompresiÃ³n posterior.",
        distractorProfile: "inappropriate_imaging_modality",
        incorrectFeedback: "La TC de columna no tiene la resoluciÃ³n de tejidos blandos necesaria para visualizar el cono medular, las raÃ­ces o el edema epidural tumoral, y no debe preferirse sobre la RMN en compresiÃ³n medular aguda."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con una verdadera Emergencia OncolÃ³gica: el SÃ­ndrome de CompresiÃ³n Medular Maligna (SCMM). La triada clÃ­nica es implacable: dolor de espalda crÃ³nico que empeora al acostarse, debilidad motora simÃ©trica de miembros inferiores y disfunciÃ³n autonÃ³mica tardÃ­a (retenciÃ³n urinaria o incontinencia fecal, y nivel sensitivo). En el momento en que se documentan signos de mielopatÃ­a (debilidad, hiperreflexia o disfunciÃ³n de esfÃ­nteres), la mÃ©dula espinal estÃ¡ sufriendo isquemia por compresiÃ³n extrÃ­nseca (vasogÃ©nica) y edema. La directriz internacional exige que **NO se debe esperar a ninguna neuroimagen** para iniciar el tratamiento de rescate: se debe inyectar Dexametasona IV a altas dosis inmediatamente para reducir el edema vasogÃ©nico medular. Tras este paso crÃ­tico, el paciente se traslada a la RMN de columna entera y a la radioterapia/neurocirugÃ­a urgente.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, en el SCMM \"el tiempo es mÃ©dula\". Si mandas al paciente a la Resonancia MagnÃ©tica (OpciÃ³n C) sin haberle pasado la Dexametasona, y el estudio se demora 3 horas entre que lo bajan, lo posicionan y le leen las imÃ¡genes, esas 3 horas de edema asfixiante sobre la mÃ©dula espinal convertirÃ¡n una paraparesia reversible en una paraplejÃ­a flÃ¡cida de por vida. El paciente quedarÃ¡ en silla de ruedas irreversiblemente. Pones la Dexametasona en el triage y luego buscas el tubo de resonancia. La TC (OpciÃ³n D) no sirve para ver la mÃ©dula espinal por dentro, solo ve el hueso destruido; la RMN es el estÃ¡ndar de oro radiolÃ³gico.",
    keyPoints: [
      "Paciente con cÃ¡ncer conocido (prÃ³stata, mama, pulmÃ³n) con dolor de espalda de novo o cambiante.",
      "ApariciÃ³n de debilidad en piernas, nivel sensitivo o globo vesical (retenciÃ³n de orina).",
      "CompresiÃ³n Medular. El primer paso siempre, antes del resonador, es la Dexametasona IV a dosis altas para salvar la funciÃ³n motora.",
      "Tema: Urgencias OncolÃ³gicas / CompresiÃ³n Medular."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-94",
    university: "UCC",
    examArea: "PediatrÃ­a / GastroenterologÃ­a / AlergologÃ­a",
    topic: "GastroenterologÃ­a PediÃ¡trica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "gastroenterologia", "alergia"],
    statement: "Escolar masculino de 10 aÃ±os, con antecedentes de asma bronquial y dermatitis atÃ³pica severa desde la primera infancia. Es traÃ­do por sus padres a consulta de gastroenterologÃ­a pediÃ¡trica refiriendo un historial de 2 aÃ±os de dolor retroesternal urente intermitente que no responde a Inhibidores de la Bomba de Protones (IBP) a doble dosis. Hace un mes, acudiÃ³ a urgencias por un episodio de impactaciÃ³n alimentaria esofÃ¡gica (\"se atorÃ³ con un trozo de carne\") que requiriÃ³ extracciÃ³n endoscÃ³pica. Hoy se programa una Endoscopia Digestiva Alta programada, la cual reporta: mucosa esofÃ¡gica con mÃºltiples anillos concÃ©ntricos (esÃ³fago felino o traquealizaciÃ³n), surcos longitudinales y exudados blanquecinos puntiformes. Se toman biopsias escalonadas de esÃ³fago distal, medio y proximal que evidencian > 20 eosinÃ³filos por campo de gran aumento (CAP). Â¿CuÃ¡l es la intervenciÃ³n terapÃ©utica farmacolÃ³gica y dietÃ©tica combinada de PRIMERA LÃNEA para inducir la remisiÃ³n histolÃ³gica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Corticosteroides tÃ³picos deglutidos (ej. Fluticasona o Budesonida en suspensiÃ³n viscosa) combinados con IBP y dieta de eliminaciÃ³n empÃ­rica."
      },
      {
        id: "B",
        label: "B",
        text: "DilataciÃ³n esofÃ¡gica con balÃ³n neumÃ¡tico programada mensualmente asociada a domperidona y dieta libre de gluten.",
        distractorProfile: "symptomatic_and_wrong_diet_intervention",
        incorrectFeedback: "La dilataciÃ³n endoscÃ³pica resuelve mecÃ¡nicamente la estenosis fibrÃ³tica (complicaciÃ³n tardÃ­a), pero no apaga la inflamaciÃ³n eosinofÃ­lica primaria; sin terapia antiinflamatoria, el esÃ³fago se volverÃ¡ a cerrar. La celiaquÃ­a exige dieta sin gluten, pero la EoE responde a dieta de eliminaciÃ³n de lÃ¡cteos/trigo/huevos/soya."
      },
      {
        id: "C",
        label: "C",
        text: "Funduplicatura de Nissen laparoscÃ³pica por sospecha de Reflujo GastroesofÃ¡gico (ERGE) refractario y grave.",
        distractorProfile: "catastrophic_surgical_misdiagnosis",
        incorrectFeedback: "Intervenir quirÃºrgicamente el hiato esofÃ¡gico en un paciente con inflamaciÃ³n eosinofÃ­lica transmural e infiltraciÃ³n alÃ©rgica es un error severo, exacerbando la disfagia y la dismotilidad propia de la EoE."
      },
      {
        id: "D",
        label: "D",
        text: "Ciclosporina sistÃ©mica oral y nutriciÃ³n parenteral total por 6 meses para un reposo intestinal absoluto.",
        distractorProfile: "excessive_immunosuppression",
        incorrectFeedback: "La EoE responde excelentemente a medidas tÃ³picas y dietÃ©ticas; someter al niÃ±o a riesgos de catÃ©ter venoso central prolongado e inmunosupresores mayores para una patologÃ­a localizada en el esÃ³fago es un sobretratamiento inaceptable."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con una **Esofagitis EosinofÃ­lica (EoE)**, una enfermedad inmunomediada (tipo Th2) crÃ³nica que afecta de forma aislada al esÃ³fago, fuertemente ligada a pacientes con historial de atopia (asma, rinitis, eccema). Sus signos cardinales son la disfagia a sÃ³lidos y la impactaciÃ³n alimentaria en niÃ±os mayores o adultos jÃ³venes. EndoscÃ³picamente es clÃ¡sico el \"esÃ³fago felino\" (anillos traqueales) y surcos lineales, pero el diagnÃ³stico definitivo exige biopsias con â‰¥ 15 eosinÃ³filos por campo de gran aumento en el epitelio escamoso. El tratamiento de inducciÃ³n para la remisiÃ³n histolÃ³gica consta de la estrategia de \"las tres D\": Drugs (fÃ¡rmacos), Diet (dieta) y Dilation (solo para estenosis crÃ³nicas). En los fÃ¡rmacos, se usan los **corticosteroides tÃ³picos DEGLUTIDOS** (se instruye al paciente a usar inhaladores de Fluticasona sin espaciador, tragando el aerosol, o Budesonida mezclada en jarabe espeso) para baÃ±ar la mucosa esofÃ¡gica, junto a IBPs. La dieta de eliminaciÃ³n de 6 o 4 alimentos agresores (leche, trigo, huevo, soya, frutos secos, mariscos) es la intervenciÃ³n dietÃ©tica de elecciÃ³n.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Un diagnÃ³stico que ha explotado en frecuencia en las Ãºltimas dÃ©cadas. Antes, a todos estos niÃ±os les diagnosticaban \"Reflujo GastroesofÃ¡gico Refractario\" y les hacÃ­an una funduplicatura de Nissen (OpciÃ³n C). Â¡Pobre niÃ±o! Si le operas el esfÃ­nter esofÃ¡gico inferior a un niÃ±o cuyo problema es que la pared entera del esÃ³fago estÃ¡ llena de eosinÃ³filos alÃ©rgicos, su esÃ³fago se volverÃ¡ un tubo rÃ­gido e inamovible para siempre. La clave de esta pregunta es la vÃ­a de administraciÃ³n del corticoide: \"TÃ³pico deglutido\". Le dices a la mamÃ¡ que compre el inhalador de asma, pero en vez de que el niÃ±o respire la nube, se la trague, para que el medicamento empape y cure el esÃ³fago por dentro sin causar los efectos secundarios de los esteroides sistÃ©micos.",
    keyPoints: [
      "NiÃ±o mayor, adolescente o adulto joven con historia atÃ³pica.",
      "Disfagia a sÃ³lidos, dolor torÃ¡cico refractario a IBPs o impactaciÃ³n de carne en el esÃ³fago.",
      "Endoscopia con anillos concÃ©ntricos (traquealizaciÃ³n) + Biopsia > 15 eosinÃ³filos/campo.",
      "Esofagitis EosinofÃ­lica. Tratamiento mÃ©dico: Corticoides tÃ³picos DEGLUTIDOS (no inhalados, no sistÃ©micos) + Dieta de eliminaciÃ³n alergÃ©nica empÃ­rica.",
      "Tema: Esofagitis EosinofÃ­lica / GastroenterologÃ­a PediÃ¡trica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-95",
    university: "UCC",
    examArea: "Medicina Interna / NeurologÃ­a / Cuidado Intensivo",
    topic: "NeurologÃ­a CrÃ­tica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neurologia", "uci"],
    statement: "Mujer de 55 aÃ±os, hospitalizada en la Unidad de Cuidado Intensivo en su sexto dÃ­a posoperatorio de un clipaje neuroquirÃºrgico exitoso por un aneurisma roto de la arteria comunicante anterior (Hemorragia Subaracnoidea - HSA Fisher 3, Hunt y Hess III). Se encontraba despertando y movilizando las cuatro extremidades. En el cambio de turno matutino, la paciente presenta una instauraciÃ³n brusca de hemiparesia izquierda 2/5 y afasia de expresiÃ³n motora, junto a una caÃ­da en la escala de coma de Glasgow. Una TomografÃ­a Computarizada (TC) de crÃ¡neo simple urgente no muestra sangrado nuevo (resangrado) y descarta hidrocefalia o edema masivo. Se realiza un Doppler Transcraneal que evidencia velocidades de flujo en la Arteria Cerebral Media derecha de 180 cm/s y un Ã­ndice de Lindegaard > 4.5. Â¿CuÃ¡l es el manejo hemodinÃ¡mico y farmacolÃ³gico INDISPENSABLE para rescatar la perfusiÃ³n cerebral y prevenir el infarto isquÃ©mico definitivo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Terapia de hipotensiÃ³n permisiva (Labetalol IV para PA < 140/90) e infusiÃ³n de sulfato de magnesio.",
        distractorProfile: "catastrophic_hypoperfusion",
        incorrectFeedback: "Bajar la presiÃ³n arterial en medio de un vasoespasmo cerebral grave colapsa inmediatamente la presiÃ³n de perfusiÃ³n hacia el territorio en penumbra, consolidando de forma masiva e irreversible el infarto cerebral isquÃ©mico retardado."
      },
      {
        id: "B",
        label: "B",
        text: "InducciÃ³n de HipertensiÃ³n Arterial dirigida (con vasopresores como Noradrenalina) garantizando euvolemia estricta, y mantenimiento continuo de Nimodipino oral."
      },
      {
        id: "C",
        label: "C",
        text: "AdministraciÃ³n inmediata de Alteplase (rt-PA) intravenoso en ventana de reperfusiÃ³n por sospecha de tromboembolismo carotÃ­deo.",
        distractorProfile: "hemorrhagic_contraindication_override",
        incorrectFeedback: "La paciente tiene una cirugÃ­a de crÃ¡neo abierto de hace apenas 6 dÃ­as por una hemorragia mayor; los fibrinolÃ­ticos sistÃ©micos estÃ¡n estrictamente contraindicados por el riesgo absoluto de sangrado intracraneano post-quirÃºrgico."
      },
      {
        id: "D",
        label: "D",
        text: "InducciÃ³n del triple H clÃ¡sico: HipertensiÃ³n, Hipervolemia masiva y HemodiluciÃ³n extrema con coloides.",
        distractorProfile: "obsolete_historical_protocol",
        incorrectFeedback: "La hipervolemia y hemodiluciÃ³n profusa fueron abandonadas por la alta tasa de complicaciones mÃ©dicas letales (Edema Agudo de PulmÃ³n y sÃ­ndrome de fuga capilar) sin demostrar beneficio adicional sobre la HipertensiÃ³n inducida y la euvolemia."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con la complicaciÃ³n mÃ¡s temida de la Hemorragia Subaracnoidea (HSA) en la fase subaguda: el **Vasoespasmo Cerebral Severo** con Isquemia Cerebral Retardada (DCI). Ocurre clÃ¡sicamente entre los dÃ­as 4 y 14 posteriores al sangrado inicial. La sangre en el espacio subaracnoideo se degrada, liberando sustancias inflamatorias y espasmogÃ©nicas que estriÃ±en las arterias del polÃ­gono de Willis de forma crÃ­tica (documentado por el Doppler con velocidades altÃ­simas >120-150 cm/s). El tratamiento mÃ©dico de rescate neurocrÃ­tico exige aumentar radicalmente la presiÃ³n de perfusiÃ³n cerebral para vencer la resistencia del vaso cerrado. HistÃ³ricamente se usaba la \"Terapia Triple H\" (OpciÃ³n D), pero las guÃ­as de la AHA/ASA y la Neurocritical Care Society la han abolido por su altÃ­sima tasa de edema pulmonar y complicaciones. El estÃ¡ndar moderno y obligatorio es la **HipertensiÃ³n Inducida y la Euvolemia estricta**: se eleva la presiÃ³n arterial sistÃ³lica artificialmente con vasopresores a rangos supranormales (a veces >180-200 mmHg) para empujar sangre a la zona isquÃ©mica, asegurando que el paciente estÃ© bien hidratado pero no encharcado. El calcioantagonista de elecciÃ³n y probado para mejorar el desenlace neurolÃ³gico, Nimodipino, debe mantenerse por 21 dÃ­as de forma inquebrantable.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, la neurocrÃ­tica del vasoespasmo es contraintuitiva. Cuando alguien sufre un ACV o un aneurisma, el reflejo es \"bajarle la presiÃ³n para que no sangre mÃ¡s\" (OpciÃ³n A). Pero el aneurisma de esta paciente ya estÃ¡ \"clipado\" (asegurado quirÃºrgicamente). Ahora el problema no es que sangre, es que las arterias vecinas se paralizaron por el espasmo y el cerebro se estÃ¡ quedando seco. Si le bajas la presiÃ³n o le das Labetalol, le cortas el Ãºnico empuje que tiene la sangre para cruzar esa tuberÃ­a estrecha, y la paciente infartarÃ¡ un hemisferio entero. AquÃ­ usamos la Noradrenalina a propÃ³sito para hipertensar a la paciente hasta que la fuerza del chorro le devuelva la movilidad al hemicuerpo izquierdo.",
    keyPoints: [
      "Paciente entre el dÃ­a 4 y 14 de una Hemorragia Subaracnoidea (HSA).",
      "Deterioro neurolÃ³gico focal nuevo (hemiparesia, afasia, estupor).",
      "TAC limpia (Sin resangrado, sin hidrocefalia).",
      "Vasoespasmo Cerebral. Tratamiento salvavidas: InducciÃ³n de HipertensiÃ³n Arterial (euvolemia) + Nimodipino.",
      "Tema: Urgencias NeurolÃ³gicas / Vasoespasmo Post-HSA."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-96",
    university: "UCC",
    examArea: "PediatrÃ­a / NeonatologÃ­a / HematologÃ­a",
    topic: "HematologÃ­a PediÃ¡trica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neonatologia", "hematologia"],
    statement: "Un reciÃ©n nacido a tÃ©rmino, varÃ³n de peso adecuado para la edad gestacional y producto de un embarazo de evoluciÃ³n sin complicaciones, es evaluado a las 12 horas de vida. El neonatÃ³logo documenta la apariciÃ³n diseminada de petequias, equimosis en los sitios de punciÃ³n y un gran cefalohematoma parietal. El examen fÃ­sico del neonato es, por lo demÃ¡s, vigoroso, con signos vitales normales y sin hepatoesplenomegalia. Los paraclÃ­nicos de urgencia revelan un recuento plaquetario del neonato de 8.000/mmÂ³ (Trombocitopenia profunda). Se solicita un hemograma a la madre (de 26 aÃ±os, primigesta), reportando plaquetas en 280.000/mmÂ³ (Normal). La madre no tiene antecedentes de Lupus ni de PÃºrpura TrombocitopÃ©nica Inmune. Ante la exclusiÃ³n de sepsis (PCR y procalcitonina negativas), Â¿cuÃ¡l es la entidad fisiopatolÃ³gica MÃS probable y el tratamiento transfuncional MÃS efectivo de primera lÃ­nea?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Trombocitopenia Inmune Materna no diagnosticada (PTI); administrar Inmunoglobulina G intravenosa y transfundir cualquier pool de plaquetas disponibles.",
        distractorProfile: "misdiagnosed_maternal_itp",
        incorrectFeedback: "En la PTI materna (o paso pasivo de autoanticuerpos), las plaquetas maternas invariablemente estarÃ­an disminuidas; ademÃ¡s, transfundir un pool de plaquetas aleatorio a un neonato con NAIT fracasarÃ¡ porque los aloanticuerpos destruirÃ¡n rÃ¡pidamente las plaquetas donadas HPA-1a positivas."
      },
      {
        id: "B",
        label: "B",
        text: "Trombocitopenia Aloinmune Neonatal (NAIT); transfundir plaquetas maternas lavadas e irradiadas (o plaquetas de banco compatibles con antÃ­geno negativo) asociado a Inmunoglobulina IV al neonato."
      },
      {
        id: "C",
        label: "C",
        text: "SÃ­ndrome de Kasabach-Merritt congÃ©nito; administrar bolos de corticoides y planificar esplenectomÃ­a al aÃ±o de vida.",
        distractorProfile: "wrong_hemangioma_syndrome",
        incorrectFeedback: "El SÃ­ndrome de Kasabach-Merritt se asocia con un hemangioendotelioma kaposiforme gigante (tumor vascular evidente en la piel o vÃ­sceras) que atrapa y consume las plaquetas y el fibrinÃ³geno; no se presenta en niÃ±os anatÃ³micamente normales."
      },
      {
        id: "D",
        label: "D",
        text: "PÃºrpura TrombocitopÃ©nica TrombÃ³tica del reciÃ©n nacido; iniciar exanguinotransfusiÃ³n urgente para reponer la enzima ADAMTS-13.",
        distractorProfile: "adult_disease_extrapolated_to_neonate",
        incorrectFeedback: "La PTT congÃ©nita (SÃ­ndrome de Upshaw-SchÃ¼lman) es rarÃ­sima y se manifestarÃ­a con microangiopatÃ­a trombÃ³tica fulminante (esquizocitos, anemia hemolÃ­tica e ictericia severa precoz), no como un defecto puramente plaquetario aislado."
      }
    ],
    correctOptionId: "B",
    explanation: "El neonato presenta una Trombocitopenia Aloinmune Neonatal (NAIT, por sus siglas en inglÃ©s). Esta patologÃ­a es la contraparte plaquetaria de la incompatibilidad Rh (Enfermedad HemolÃ­tica del ReciÃ©n Nacido). Ocurre cuando el feto hereda un antÃ­geno plaquetario humano del padre (usualmente el HPA-1a) que la madre no posee. La madre, expuesta a este antÃ­geno fetal durante el embarazo, crea anticuerpos IgG que cruzan la placenta y destruyen exclusiva y masivamente las plaquetas del feto. A diferencia de la PTI, en la NAIT **la madre tiene plaquetas estrictamente normales**, pero el bebÃ© nace con trombocitopenias de peligro vital (<20,000) y tiene un altÃ­simo riesgo de Hemorragia Intracraneal en el Ãºtero o periparto. El tratamiento de rescate exige la transfusiÃ³n de plaquetas que NO tengan el antÃ­geno atacado. La fuente mÃ¡s rÃ¡pida y perfecta para esto es **la propia madre**: se extraen sus plaquetas, se lavan (para quitarles el plasma que contiene los anticuerpos asesinos), se irradian y se transfundan al bebÃ©. A la par, se usa IGIV en el neonato para saturar los receptores de los macrÃ³fagos y frenar la destrucciÃ³n.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Un diagnÃ³stico finÃ­simo que debes llevar impreso en la mente, Colega. Si la mamÃ¡ tuviera PTI (Lupus o autoinmunidad), sus propias plaquetas estarÃ­an por el piso porque sus anticuerpos atacan *sus* plaquetas y tambiÃ©n atacan las del bebÃ©. Pero si la mamÃ¡ tiene 280,000 plaquetas y el bebÃ© tiene 8,000, es una guerra de incompatibilidad aloinmune. Transfundir plaquetas \"normales de banco\" (OpciÃ³n A) es casi inÃºtil en un sangrado agudo de NAIT, porque la mayorÃ­a de la poblaciÃ³n general ES portadora del antÃ­geno HPA-1a; el anticuerpo de la mamÃ¡ las destrozarÃ¡ en un minuto. Las plaquetas de la mamÃ¡ son la salvaciÃ³n porque genÃ©ticamente carecen del antÃ­geno diana y son \"invisibles\" al anticuerpo destructivo, siempre y cuando las laves para no pasarle el veneno plasmÃ¡tico en la bolsa.",
    keyPoints: [
      "ReciÃ©n nacido vigoroso pero sangrando/punteado con plaquetas muy bajas (<20,000).",
      "Madre completamente SANA, con plaquetas normales, sin historia autoinmune.",
      "Trombocitopenia Aloinmune Neonatal (Incompatibilidad HPA-1a). Peligro altÃ­simo de sangrado cerebral. Terapia ideal: Plaquetas maternas lavadas e Inmunoglobulina IV al neonato.",
      "Tema: HematologÃ­a Neonatal / NAIT."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-97",
    university: "UCC",
    examArea: "Medicina Interna / GastroenterologÃ­a / GenÃ©tica",
    topic: "GastroenterologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia", "genetica", "hepatologia"],
    statement: "Hombre de 54 aÃ±os, con diagnÃ³stico reciente de Diabetes Mellitus tipo 2 y episodios repetidos de artralgias en las articulaciones metacarpofalÃ¡ngicas, acude a consulta por fatiga progresiva. Al examen fÃ­sico resalta una hiperpigmentaciÃ³n bronceada diseminada en Ã¡reas expuestas al sol y cicatrices, sin placas en mucosas, y una hepatomegalia firme e indolora. Se descarta alcoholismo. ParaclÃ­nicos: Glucemia en ayunas 165 mg/dL, AST 95 U/L, ALT 85 U/L. Un perfil fÃ©rrico revela una Ferritina SÃ©rica de 1.850 ng/mL y un Porcentaje de SaturaciÃ³n de Transferrina del 68%. Una ecografÃ­a abdominal documenta esteatosis hepÃ¡tica moderada con patrÃ³n homogÃ©neo. Â¿CuÃ¡l es el estudio genÃ©tico MÃS especÃ­fico y de primera lÃ­nea para confirmar el diagnÃ³stico de la enfermedad metabÃ³lica subyacente y evitar la biopsia invasiva?",
    options: [
      {
        id: "A",
        label: "A",
        text: "AnÃ¡lisis de la mutaciÃ³n del gen ATP7B (mutaciÃ³n de la proteÃ­na transportadora de cobre).",
        distractorProfile: "wrong_metal_storage_disease",
        incorrectFeedback: "El gen ATP7B codifica la ATPasa transportadora de cobre, cuya mutaciÃ³n produce la Enfermedad de Wilson. Esta cursa con sÃ­ntomas neuropsiquiÃ¡tricos y hepatopatÃ­a en pacientes jÃ³venes (2da dÃ©cada), pero no con hiperpigmentaciÃ³n cutÃ¡nea bronceada, diabetes severa de novo, ni sobrecarga de hierro o ferritina masiva."
      },
      {
        id: "B",
        label: "B",
        text: "Test genÃ©tico para las mutaciones C282Y y H63D del gen HFE."
      },
      {
        id: "C",
        label: "C",
        text: "DeterminaciÃ³n de los niveles de Ceruloplasmina sÃ©rica seguidos de excreciÃ³n urinaria en 24h.",
        distractorProfile: "wilson_disease_workup",
        incorrectFeedback: "La ceruloplasmina es el screening de la Enfermedad de Wilson (se encuentra disminuida por falta de acoplamiento del cobre). La viÃ±eta apunta exclusivamente a una toxicidad por hierro, donde estos valores de cobre estarÃ­an normales."
      },
      {
        id: "D",
        label: "D",
        text: "CuantificaciÃ³n de Alfa-1-Antitripsina y fenotipificaciÃ³n de las variantes alÃ©licas PiZZ.",
        distractorProfile: "wrong_inborn_error_of_metabolism",
        incorrectFeedback: "El dÃ©ficit de Alfa-1-Antitripsina causa cirrosis hepÃ¡tica y enfisema panacinar pulmonar precoz, no la patognomÃ³nica diabetes bronceada y no se asocia a elevaciones extremas de la saturaciÃ³n de transferrina en pacientes de 50 aÃ±os de vida."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta el cuadro florido y patognomÃ³nico de la Hemocromatosis Hereditaria: la clÃ¡sica trÃ­ada tardÃ­a de **Cirrosis / Hepatomegalia + Diabetes Mellitus + HiperpigmentaciÃ³n cutÃ¡nea (\"Diabetes Bronceada\")**, sumada a la artropatÃ­a tÃ­pica de las articulaciones metacarpofalÃ¡ngicas (donde se ven condrocalcinosis o formaciones en gancho en la Rx). El marcador de cribado de primera lÃ­nea que hace saltar la alarma es la SaturaciÃ³n de Transferrina elevada (>45-50% en ayunas), seguida de una ferritina masivamente aumentada. En la medicina moderna, el diagnÃ³stico de la hemocromatosis ya no requiere de forma mandatoria una biopsia hepÃ¡tica para medir el hierro intrahepÃ¡tico en la fase inicial. El paso confirmatorio no invasivo de elecciÃ³n, una vez detectada la saturaciÃ³n de transferrina alta, es la prueba genÃ©tica para detectar la mutaciÃ³n homocigota **C282Y** (o heterocigota compuesta C282Y/H63D) en el gen HFE.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Para el examen, no te confundas con las enfermedades de depÃ³sito del hÃ­gado. Si el paciente es *joven* (15 a 30 aÃ±os), se vuelve loco (sÃ­ntomas psiquiÃ¡tricos/neurolÃ³gicos) y tiene el hÃ­gado fallando con temblor, eso es Cobre y Enfermedad de Wilson (MutaciÃ³n ATP7B, Ceruloplasmina baja, Anillo de Kayser-Fleischer; Opciones A y C). Pero si el paciente es un *hombre mayor de 50 aÃ±os*, tiene el hÃ­gado fallando, debuta con diabetes repentina, el azÃºcar se le sale de control y la piel se le vuelve de color bronce, eso es Hierro oxidÃ¡ndose en sus Ã³rganos: Hemocromatosis, el gen HFE. Las sangrÃ­as (sacarle un litro de sangre cada semana) salvarÃ¡n su pÃ¡ncreas y su corazÃ³n.",
    keyPoints: [
      "Hombre de mediana edad con debut de diabetes + HepatopatÃ­a + Piel oscura (Diabetes Bronceada).",
      "Artralgias en el 2do y 3er nudillo de la mano.",
      "SaturaciÃ³n de Transferrina > 45-50% con Ferritina > 1000 ng/mL.",
      "Hemocromatosis Hereditaria (AcÃºmulo tÃ³xico de hierro sistÃ©mico). Prueba de confirmaciÃ³n: AnÃ¡lisis del Gen HFE (mutaciÃ³n C282Y). El tratamiento curativo vitalicia son las FlebotomÃ­as terapÃ©uticas repetidas.",
      "Tema: HepatopatÃ­as MetabÃ³licas / Hemocromatosis."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-98",
    university: "UCC",
    examArea: "PediatrÃ­a / InfectologÃ­a / Urgencias",
    topic: "InfectologÃ­a PediÃ¡trica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "urgencias"],
    statement: "Adolescente masculino de 16 aÃ±os, asiste a consulta de urgencias por un cuadro de 4 dÃ­as de evoluciÃ³n que iniciÃ³ con fiebre alta, dolor de garganta intenso (odinofagia), debilidad extrema y la apariciÃ³n de una gran masa dolorosa en la cara lateral izquierda del cuello. El mÃ©dico general diagnosticÃ³ inicialmente faringitis estreptocÃ³cica y prescribiÃ³ penicilina V oral, pero hoy el paciente regresÃ³ por disnea progresiva, escalofrÃ­os severos (rigors) y dolor pleurÃ­tico bilateral. Al examen fÃ­sico: PA 90/60 mmHg, FC 128 lpm, FR 28 rpm. Se palpa un cordÃ³n indurado y extremadamente doloroso a lo largo del trayecto del mÃºsculo esternocleidomastoideo izquierdo. La orofaringe se observa inflamada con exudados periamigdalinos. Una radiografÃ­a de tÃ³rax revela mÃºltiples nÃ³dulos cavitados perifÃ©ricos en ambos pulmones. Â¿CuÃ¡l es la sospecha diagnÃ³stica sindrÃ³mica, el germen causal y el rÃ©gimen antibiÃ³tico empÃ­rico de rescate MÃS apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "SÃ­ndrome de choque tÃ³xico por *Staphylococcus aureus* (SAMR); requiere Vancomicina e Inmunoglobulina intravenosa.",
        distractorProfile: "overlapping_lung_cavitation_error",
        incorrectFeedback: "Aunque el SAMR comunitario puede dar neumonÃ­a necrotizante cavitada (por toxina PVL) y choque, no estÃ¡ precedido del clÃ¡sico sÃ­ndrome anginal agudo con tromboflebitis sÃ©ptica de la vena yugular, que es el puente fisiopatolÃ³gico del Lemierre mediado por anaerobios."
      },
      {
        id: "B",
        label: "B",
        text: "SÃ­ndrome de Lemierre por *Fusobacterium necrophorum*; requiere Ampicilina-Sulbactam o Piperacilina-Tazobactam intravenosos prolongados."
      },
      {
        id: "C",
        label: "C",
        text: "Mononucleosis infecciosa complicada por *Epstein-Barr* con miocarditis; el manejo es de soporte y Corticosteroides IV.",
        distractorProfile: "false_pharyngitis_association",
        incorrectFeedback: "La mononucleosis causa faringitis exudativa con linfadenopatÃ­a simÃ©trica y astenia en adolescentes, pero no produce un sÃ­ndrome embÃ³lico vascular destructor hacia los pulmones, ni el choque sÃ©ptico purulento observado."
      },
      {
        id: "D",
        label: "D",
        text: "Absceso Periamigdalino complicado con *Streptococcus pyogenes* invasivo; el manejo curativo exclusivo es el drenaje quirÃºrgico otorrinolaringolÃ³gico.",
        distractorProfile: "wrong_extent_of_complication",
        incorrectFeedback: "El drenaje del absceso orofarÃ­ngeo es crucial localmente, pero no trata la tromboflebitis yugular diseminada subyacente. El S. pyogenes es la causa usual del absceso local, pero no del cuadro metastÃ¡sico pulmonar sÃ©ptico clÃ¡sico anaerobio de Lemierre."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un **SÃ­ndrome de Lemierre** (Sepsis post-anginal). Es una complicaciÃ³n grave de una infecciÃ³n orofarÃ­ngea en adolescentes y adultos jÃ³venes, causada casi exclusivamente por un anaerobio estricto de la cavidad oral: *Fusobacterium necrophorum*. FisiopatolÃ³gicamente, la infecciÃ³n farÃ­ngea invade los tejidos laterales del cuello, desencadenando una **tromboflebitis sÃ©ptica de la Vena Yugular Interna** (evidenciada en la viÃ±eta como el \"cordÃ³n doloroso e indurado a lo largo del ECM\"). Los coÃ¡gulos infectados se desprenden de la vena yugular y viajan directamente al corazÃ³n derecho y a los pulmones, provocando **embolismos sÃ©pticos pulmonares** masivos (nÃ³dulos mÃºltiples y cavitaciones en la radiografÃ­a) que causan dolor pleurÃ­tico, choque y falla respiratoria. Al tratarse de un patÃ³geno anaerobio estricto y productor de beta-lactamasas, el tratamiento exige penicilinas con inhibidores de beta-lactamasas (Ampicilina-Sulbactam, Piperacilina-Tazobactam) o CarbapenÃ©micos durante varias semanas para erradicar la flebitis invasiva.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** El SÃ­ndrome de Lemierre es la \"Enfermedad Olvidada\" que mata jÃ³venes de forma fulminante. El examen de residencia siempre te tratarÃ¡ de desviar hacia un absceso farÃ­ngeo clÃ¡sico (OpciÃ³n D). Pero la clave patognomÃ³nica estÃ¡ en el pulmÃ³n y en el trayecto de la vena. Un absceso periamigdalino simple (S. pyogenes) te duele y te desvÃ­a la Ãºvula, pero no te llena los pulmones de caÃ±onazos sÃ©pticos cavitados en 48 horas. El *Fusobacterium* viaja en trombo por la yugular hasta el pulmÃ³n. Y ojo con la OpciÃ³n A: aunque el S. aureus causa nÃ³dulos pulmonares cavitados (neumonÃ­a por PVL), rara vez hace faringoamigdalitis primaria con cordones yugulares palpables sin un acceso venoso previo, y el estafilococo no es el rey del sÃ­ndrome post-anginal anaerobio.",
    keyPoints: [
      "Adolescente o joven sano que hace una amigdalitis/faringitis aguda severa que no cede.",
      "Desarrollo de inflamaciÃ³n/dolor unilateral severo en el cuello (trombosis de yugular interna).",
      "Deterioro respiratorio agudo con embolismos sÃ©pticos pulmonares en la RX/TAC.",
      "SÃ­ndrome de Lemierre. Agente causal: Fusobacterium necrophorum. Tratamiento: Cobertura anaerobia con inhibidores de beta-lactamasas (Ampicilina/Sulbactam) por varias semanas; los macrÃ³lidos solos y la penicilina sola fracasan.",
      "Tema: Urgencias InfectolÃ³gicas / SÃ­ndrome de Lemierre."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-99",
    university: "UCC",
    examArea: "Medicina Interna / NefrologÃ­a / InmunologÃ­a",
    topic: "NefrologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "nefrologia", "inmunologia"],
    statement: "Hombre de 28 aÃ±os, fumador activo, consulta a urgencias por un cuadro de inicio brusco de tos, hemoptisis franca (expectoraciÃ³n abundante de sangre) y disnea progresiva de 3 dÃ­as de evoluciÃ³n, acompaÃ±ado de oliguria marcada (producciÃ³n de solo 200 cc de orina en 24h). Al examen fÃ­sico: luz intensamente pÃ¡lido, taquipneico (FR 30 rpm), PA 155/95 mmHg. AuscultaciÃ³n pulmonar con crÃ©pitos alveolares bilaterales profusos. ParaclÃ­nicos: Creatinina sÃ©rica se dispara a 6.2 mg/dL (basal desconocida), BUN 98 mg/dL. Hemoglobina 7.2 g/dL. El parcial de orina reporta un sedimento inflamatorio activo con cilindros eritrocitarios y proteinuria (++). La radiografÃ­a de tÃ³rax evidencia infiltrados alveolares difusos densos compatibles con hemorragia alveolar masiva. Los resultados inmunolÃ³gicos de urgencia reportan: p-ANCA Negativo, c-ANCA Negativo, y **Anticuerpos Anti-Membrana Basal Glomerular (Anti-MBG) fuertemente Positivos**. Â¿CuÃ¡l es la terapia de rescate vital INDISPENSABLE Y OBLIGATORIA para evitar la mortalidad inmediata y preservar la funciÃ³n renal residual en este sÃ­ndrome?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Terapia combinada con Glucocorticoides endovenosos a dosis de pulso y Ciclofosfamida intravenosa exclusiva para frenar la proliferaciÃ³n linfocÃ­tica.",
        distractorProfile: "inadequate_therapy_for_antibody_mediated_disease",
        incorrectFeedback: "La quimioterapia suprime la producciÃ³n de nuevos autoanticuerpos en dÃ­as a semanas, pero es ineficaz para neutralizar y eliminar la inmensa carga circulante de anticuerpos IgG que ya estÃ¡n causando la hemorragia alveolar letal; se debe obligatoriamente aÃ±adir plasmafÃ©resis para extraerlos."
      },
      {
        id: "B",
        label: "B",
        text: "RealizaciÃ³n diaria de Recambio PlasmÃ¡tico TerapÃ©utico (PlasmafÃ©resis), asociada a pulsos de Metilprednisolona y Ciclofosfamida sistÃ©mica."
      },
      {
        id: "C",
        label: "C",
        text: "InstauraciÃ³n de HemodiÃ¡lisis diaria de alta eficiencia para depurar los anticuerpos circulantes y corregir la falla renal aguda oligÃºrica.",
        distractorProfile: "wrong_extracorporeal_technique",
        incorrectFeedback: "La hemodiÃ¡lisis estÃ¡ndar limpia las toxinas nitrogenadas de bajo peso molecular (BUN, Creatinina, Potasio), pero el tamaÃ±o de poro de los filtros dialÃ­ticos convencionales impide en absoluto el paso y eliminaciÃ³n de macroglobulinas inmunes como las IgG anti-MBG."
      },
      {
        id: "D",
        label: "D",
        text: "AdministraciÃ³n de antibiÃ³ticos de amplio espectro e intubaciÃ³n orotraqueal con protecciÃ³n de la vÃ­a aÃ©rea en prono por sospecha de SDRA necrotizante bacteriano.",
        distractorProfile: "misdiagnosis_sepsis_vs_autoimmune",
        incorrectFeedback: "Las pruebas inmunolÃ³gicas positivas y el sedimento urinario activo nefrÃ­tico confirman firmemente un origen autoinmune (Enfermedad de Goodpasture) y no bacteriano, haciendo del soporte antibiÃ³tico una terapia fÃºtil para la patogenia base del sangrado."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un **SÃ­ndrome de Goodpasture (Enfermedad por Anticuerpos Anti-MBG)**, una emergencia autoinmune catastrÃ³fica que provoca un SÃ­ndrome PulmÃ³n-RiÃ±Ã³n fulminante. A diferencia de las vasculitis ANCA (como Wegener o MPA) donde los esteroides y la ciclofosfamida/rituximab por sÃ­ solos pueden inducir remisiÃ³n, la enfermedad de Goodpasture estÃ¡ impulsada por un ataque directo, masivo y lineal de autoanticuerpos circulantes IgG contra el colÃ¡geno tipo IV alfa-3, que destruye rÃ¡pida y simultÃ¡neamente los glomÃ©rulos y los alvÃ©olos. La supervivencia de este paciente, que se estÃ¡ ahogando en su propia sangre (hemorragia alveolar) y entrando en anuria, depende estrictamente de un procedimiento mecÃ¡nico que \"lave\" los anticuerpos destructores de la sangre antes de que el daÃ±o sea permanente (en horas a dÃ­as): el **Recambio PlasmÃ¡tico TerapÃ©utico o PlasmafÃ©resis diaria**. La plasmafÃ©resis es el pilar central y obligatorio, siempre escoltada por la inmunosupresiÃ³n con corticoides y ciclofosfamida (para frenar la sÃ­ntesis de nuevos anticuerpos).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, esta pregunta decide si sabes distinguir las sutilezas de la inmunologÃ­a pulmonar y renal. En las vasculitis de pequeÃ±os vasos (como Wegener o PoliangeÃ­tis MicroscÃ³pica), el plasmafÃ©resis es opcional y se guarda para casos de extrema gravedad, porque los corticoides y la quimioterapia actÃºan muy bien en el citoplasma neutrofÃ­lico. Â¡Pero el Goodpasture es un monstruo diferente! El anticuerpo IgG anti-membrana estÃ¡ pegado fÃ­sicamente a los alvÃ©olos causando sangrado incontrolable (tipo II hipersensibilidad). Tienes que meter a ese paciente a una mÃ¡quina y extraerle el plasma infectado con el anticuerpo de su sangre, todos los dÃ­as por dos semanas. Dejarlo solo con la quimioterapia (OpciÃ³n A) es una condena a la asfixia y diÃ¡lisis irreversible. La HemodiÃ¡lisis pura (OpciÃ³n C) solo limpia la urea, no los anticuerpos IgG gigantes; la mÃ¡quina no los filtra.",
    keyPoints: [
      "Hombre joven fumador con SÃ­ndrome PulmÃ³n-RiÃ±Ã³n (Hemoptisis masiva + Falla renal por glomerulonefritis).",
      "Laboratorio pivote: Anticuerpos Anti-MBG positivos (ANCA negativos).",
      "SÃ­ndrome de Goodpasture. El tratamiento salvavidas absoluto incluye la PlasmafÃ©resis intensiva diaria de inmediato. Solo esteroides o solo ciclofosfamida no lograrÃ¡n frenar el sangrado alveolar a tiempo.",
      "Tema: SÃ­ndrome PulmÃ³n-RiÃ±Ã³n / Goodpasture."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-100",
    university: "UCC",
    examArea: "Medicina Interna / CardiologÃ­a / Cuidado Intensivo",
    topic: "CardiologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "cuidado_intensivo", "urgencias"],
    statement: "Hombre de 56 aÃ±os, con diagnÃ³stico reciente de Carcinoma de PulmÃ³n de CÃ©lulas no pequeÃ±as avanzado, en tratamiento con quimioterapia paliativa. Ingresa al servicio de urgencias refiriendo disnea severa progresiva en los Ãºltimos 3 dÃ­as, fatiga paralizante, dolor pleurÃ­tico leve bilateral y sÃ­ncope de esfuerzo esta maÃ±ana. Al examen fÃ­sico el paciente se encuentra sumamente ansioso, diaforÃ©tico, con acrocianosis en las puntas de los dedos. Signos vitales: PA 85/65 mmHg, FC 135 lpm, FR 32 rpm. IngurgitaciÃ³n yugular marcada hasta el Ã¡ngulo de la mandÃ­bula estando sentado a 45 grados. Los ruidos cardÃ­acos se auscultan muy apagados, velados y distantes. La evaluaciÃ³n de la presiÃ³n arterial demuestra una caÃ­da de 22 mmHg en la presiÃ³n arterial sistÃ³lica durante la inspiraciÃ³n profunda regular (Pulso paradÃ³jico de Kussmaul positivo). El ECG evidencia una taquicardia sinusal con complejos de bajo voltaje generalizado y alternancia elÃ©ctrica clara. Â¿CuÃ¡l es el paso INMEDIATO de soporte hemodinÃ¡mico crucial mientras se prepara el equipo para el procedimiento de drenaje invasivo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar dosis altas de Furosemida intravenosa (40-80 mg) para aliviar la sobrecarga derecha y la ingurgitaciÃ³n yugular que compromete el corazÃ³n.",
        distractorProfile: "deadly_preload_reduction",
        incorrectFeedback: "La furosemida disminuye la precarga; en un corazÃ³n que depende de presiones de llenado altÃ­simas para vencer la constricciÃ³n del taponamiento pericÃ¡rdico, esto produce un colapso cardiovascular y paro inmediato."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar infusiÃ³n de bolos rÃ¡pidos de cristaloides (SoluciÃ³n Salina Normal 0.9%) para incrementar transitoriamente la precarga y sostener el gasto cardÃ­aco, evitando presiÃ³n positiva."
      },
      {
        id: "C",
        label: "C",
        text: "Proceder inmediatamente a la intubaciÃ³n orotraqueal e iniciar ventilaciÃ³n mecÃ¡nica con PresiÃ³n Positiva al Final de la EspiraciÃ³n (PEEP) para oxigenar el miocardio isquÃ©mico.",
        distractorProfile: "fatal_positive_pressure",
        incorrectFeedback: "La ventilaciÃ³n con presiÃ³n positiva (PEEP) aumenta la presiÃ³n intratorÃ¡cica, disminuyendo el retorno venoso, lo que colapsa irreversiblemente las cavidades derechas en presencia de taponamiento."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar terapia trombolÃ­tica con Alteplase por alta sospecha de Tromboembolismo Pulmonar Masivo obstructivo asociado a su neoplasia.",
        distractorProfile: "wrong_obstructive_shock_pathology",
        incorrectFeedback: "El alteplase estÃ¡ indicado para tromboembolismo pulmonar, pero en el taponamiento no resuelve el lÃ­quido pericÃ¡rdico (y si hay un origen hemorrÃ¡gico en el derrame maligno, empeora el sangrado intramiocÃ¡rdico/pericÃ¡rdico)."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Taponamiento CardÃ­aco Agudo, frecuentemente secundario en adultos a derrame pericÃ¡rdico maligno (metÃ¡stasis de cÃ¡ncer de pulmÃ³n o mama). Las manifestaciones son la TrÃ­ada de Beck (HipotensiÃ³n, Ruidos cardÃ­acos velados, IngurgitaciÃ³n yugular) sumada a la taquicardia, el pulso paradÃ³jico y la alternancia elÃ©ctrica en el ECG (por el movimiento pendular del corazÃ³n dentro de la bolsa de lÃ­quido). FisiopatolÃ³gicamente, la presiÃ³n del lÃ­quido pericÃ¡rdico estrangula y comprime las cavidades derechas del corazÃ³n, impidiendo el llenado diastÃ³lico (precarga). El ventrÃ­culo derecho colapsa bajo la presiÃ³n. La medida puente salva-vidas mÃ¡s crÃ­tica (mientras llega la aguja para la pericardiocentesis) es administrar **bolos de cristaloides intravenosos rÃ¡pidos** (SoluciÃ³n Salina Normal). El volumen extra aumenta artificialmente la presiÃ³n venosa central y la precarga, forzando a las cÃ¡maras derechas a \"abrirse\" contra la presiÃ³n del lÃ­quido externo, manteniendo asÃ­ el gasto cardÃ­aco.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Un error conceptual que mata pacientes todos los dÃ­as. Ves la yugular ingurgitada hasta las orejas y el primer instinto de piso es \"Â¡Furosemida, estÃ¡ sobrecargado!\" (OpciÃ³n A). Falso. El corazÃ³n estÃ¡ apretado, no ahogado por agua propia. Si le pones diurÃ©tico, le quitas la poca sangre que lograba entrar al corazÃ³n y el paciente hace un paro cardÃ­aco inmediato. Lo mismo pasa si lo intubas (OpciÃ³n C); la presiÃ³n positiva del ventilador en el tÃ³rax estrangula aÃºn mÃ¡s las venas cavas y bloquea el retorno venoso. El paciente con taponamiento necesita LÃQUIDOS a presiÃ³n para \"empujar\" y abrir el corazÃ³n cerrado, hasta que puedas clavar la aguja y sacar la sangre pericÃ¡rdica.",
    keyPoints: [
      "Paciente oncolÃ³gico con choque obstructivo.",
      "TrÃ­ada de Beck (HipotensiÃ³n, Ruidos velados, IngurgitaciÃ³n yugular), Pulso paradÃ³jico y Alternancia elÃ©ctrica.",
      "Taponamiento cardÃ­aco. Terapia de soporte puente inicial: Bolos de cristaloides (evitar diurÃ©ticos y ventilaciÃ³n mecÃ¡nica invasiva a toda costa).",
      "Tema: Urgencias Cardiovasculares / Taponamiento CardÃ­aco."
    ]
  }
];

