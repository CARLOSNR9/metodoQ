import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · Preguntas #21–#30.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_08_23_21_30_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-08-23-21",
    university: "UCC",
    examArea: "PEDIATRÍA - NEFROLOGÍA / INFECTOLOGÍA",
    topic: "Nefrología Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","nefrolog-a-pedi-trica","nefrolog","a","pedi","trica"],
    statement: "Un niño de 4 años es llevado a urgencias por palidez extrema, fatiga y disminución del volumen urinario en las últimas 24 horas (oliguria). Los padres relatan que hace 5 días el niño presentó un cuadro de dolor abdominal tipo cólico y diarrea sanguinolenta franca, que fue manejado ambulatoriamente con hidratación y antidiarreicos, resolviendo el cuadro intestinal ayer. Al examen físico: palidez mucocutánea severa, petequias dispersas en extremidades inferiores, sin hepatoesplenomegalia. Laboratorios de urgencia: Hemoglobina 6.8 g/dL, Plaquetas 35.000/mm³, Creatinina 2.5 mg/dL y BUN 80 mg/dL. El frotis de sangre periférica confirma la presencia de abundantes esquizocitos. Se diagnostica Síndrome Urémico Hemolítico (SUH) típico mediado por Toxina Shiga (STEC). ¿Cuál es la intervención terapéutica empírica generalizada en otras infecciones que aquí está ESTRICTAMENTE CONTRAINDICADA porque aumenta drásticamente la mortalidad y la severidad del daño renal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administración de Cristaloides isotónicos (Lactato de Ringer) para expansión de volumen.",
      },
      {
        id: "B",
        label: "B",
        text: "Transfusión de Glóbulos Rojos Empaquetados (GRE) para corregir la anemia hemolítica severa.",
      },
      {
        id: "C",
        label: "C",
        text: "Inicio de terapia antibiótica bactericida (ej. Cefalosporinas o Fluoroquinolonas) y transfusión de plaquetas.",
      },
      {
        id: "D",
        label: "D",
        text: "Inicio temprano de Terapia de Reemplazo Renal (Hemodiálisis) si el paciente presenta anuria refractaria.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con un Síndrome Urémico Hemolítico Típico (SUH positivo para Toxina Shiga), generalmente desencadenado por la infección intestinal por Escherichia coli enterohemorrágica (O157:H7). A diferencia del SUH atípico (que requiere anticuerpos monoclonales como Eculizumab), el SUH típico se maneja puramente con soporte estricto (líquidos, control de presión arterial, diálisis si es necesaria y transfusión de glóbulos rojos si la anemia es severa). La regla mundial y de oro en esta patología es la PROHIBICIÓN ABSOLUTA DE ANTIBIÓTICOS BACTERICIDAS Y ANTIMOTILIDAD. Si se administran antibióticos, estos destruyen la pared celular de la bacteria (E. coli) en el intestino, provocando una liberación masiva, explosiva y de golpe de toda la Toxina Shiga preformada hacia la sangre. Esta toxina aniquila el endotelio del riñón y el cerebro, empeorando la microangiopatía trombótica y disparando la mortalidad. De igual manera, transfundir plaquetas está contraindicado porque \"alimenta\" la formación de los microtrombos renales.",
    keyPoints: [
      "Niño preescolar con Diarrea Sanguinolenta previa.; Seguido a los días por: Falla Renal Aguda + Plaquetas bajas + Anemia con Esquizocitos (Microangiopatía).",
      "SUH Típico (STEC). REGLA PROHIBITIVA: Cero antibióticos, cero antidiarreicos (Loperamida) y cero transfusión de plaquetas. Manejo estrictamente de soporte dialítico y hemodinámico.",
      "Nefrología Pediátrica / SUH.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-22",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / URGENCIAS",
    topic: "Electrocardiografía de Urgencias",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","electrocardiograf-a-de-urgencias","electrocardiograf","a","de","urgencias"],
    statement: "Un hombre de 55 años, con antecedente de tabaquismo activo e hiperlipidemia, acude al servicio de urgencias refiriendo un episodio de dolor torácico opresivo retroesternal muy intenso que lo despertó en la madrugada y duró aproximadamente 45 minutos. El paciente declara que el dolor desapareció por completo tras tomar una aspirina y descansar en el trayecto hacia el hospital. Al ingreso a urgencias, el paciente se encuentra absolutamente asintomático, sin dolor y hemodinámicamente estable. El médico le realiza un electrocardiograma (ECG) inicial en el cual NO se observan elevaciones del segmento ST. Sin embargo, llama poderosamente la atención la presencia de ondas T profunda y simétricamente invertidas en las derivaciones precordiales V2 y V3. Los biomarcadores iniciales (Troponina ultrasensible) reportan valores negativos. Con base en este trazado específico y el estado clínico actual del paciente, ¿cuál es la interpretación patogénica y la conducta obligatoria a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "El ECG indica una isquemia subendocárdica no específica; se debe dar alta médica con cita prioritaria para prueba de esfuerzo ambulatoria.",
      },
      {
        id: "B",
        label: "B",
        text: "Es un patrón sugerente de miocarditis focal transitoria; requiere inicio de AINEs y observación en planta.",
      },
      {
        id: "C",
        label: "C",
        text: "Representa el Síndrome de Wellens; el paciente presenta una estenosis crítica inminente de la Arteria Descendente Anterior Izquierda (DAI) y requiere cateterismo cardíaco urgente.",
      },
      {
        id: "D",
        label: "D",
        text: "Se trata de un patrón de repolarización precoz benigno típico de adultos jóvenes; el paciente no requiere intervenciones adicionales.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta el inconfundible Síndrome de Wellens, un \"aviso de bomba\" electrocardiográfico. Este síndrome se caracteriza clínica y eléctricamente por un paciente que tuvo dolor isquémico agudo, pero que en el momento de tomar el ECG se encuentra SIN DOLOR (asintomático). Justo en ese momento de \"alivio\", el ECG revela ondas T profunda y simétricamente invertidas en V2 y V3 (Tipo B, el 75% de los casos) o unas ondas T bifásicas (Tipo A) en las mismas derivaciones. Las troponinas suelen ser normales o mínimamente elevadas. ¡Este patrón NO ES BENIGNO! Significa que el paciente tiene una estenosis crítica, hiperaguda y severa de la Arteria Descendente Anterior (DAI), que se recanalizó de manera espontánea hace unos minutos, pero que se volverá a ocluir al 100% en las próximas horas o días, causando un infarto anterior masivo (IAMCEST anterior). La regla de oro es: Todo paciente con Síndrome de Wellens debe ser hospitalizado inmediatamente, tratado con antiisquémicos y llevado a Cateterismo Cardíaco Urgente.",
    keyPoints: [
      "Paciente que tuvo dolor de pecho, pero AHORA ESTÁ SIN DOLOR.; ECG (tomado sin dolor): Ondas T invertidas profundas o bifásicas en V2-V3.; Enzimas cardíacas (Troponinas) frecuentemente negativas.",
      "Síndrome de Wellens (Estenosis crítica de la arteria Descendente Anterior - LAD). Regla legal/médica: PROHIBIDO hacerles una Prueba de Esfuerzo (los infartas en la banda rodante). Requieren Angiografía Coronaria inminente.",
      "Electrocardiografía de Urgencias / Síndromes Coronarios Agudos.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-23",
    university: "UCC",
    examArea: "PEDIATRÍA - NEUROLOGÍA / GENÉTICA",
    topic: "Genética",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","gen-tica","gen","tica"],
    statement: "Un lactante masculino de 6 meses de edad es evaluado por un neurólogo pediatra debido a un retraso global en el desarrollo y un reciente inicio de episodios caracterizados por contracciones súbitas, simétricas, de flexión en el cuello y el tronco, elevando los brazos como si diera un abrazo (espasmos infantiles), que ocurren en racimos al despertar. Durante el examen físico detallado, utilizando una Lámpara de Wood en una habitación oscura, el médico descubre múltiples máculas hipopigmentadas en forma de hoja de fresno (ash-leaf spots) esparcidas por el tronco y las extremidades del bebé. Un ecocardiograma previo en su periodo neonatal había reportado la presencia de un rabdomioma cardíaco que ha comenzado a involucionar de forma espontánea. Dado el diagnóstico genético altamente sugestivo, ¿cuál es el mecanismo patogénico subyacente a esta facomatosis y qué complicación renal debe vigilarse a futuro?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Mutación en el gen NF1 o NF2 (Neurofibromina); se asocia a feocromocitomas y neurofibromas plexiformes espinales.",
      },
      {
        id: "B",
        label: "B",
        text: "Mutación en el gen TSC1 o TSC2 (Hamartina/Tuberina); requiere vigilancia por desarrollo de angiomiolipomas renales bilaterales masivos.",
      },
      {
        id: "C",
        label: "C",
        text: "Mutación de la proteína VHL; requiere vigilancia estricta para carcinoma de células claras renal y hemangioblastomas.",
      },
      {
        id: "D",
        label: "D",
        text: "Alteración autosómica recesiva en la reparación del ADN; se asocia a telangiectasias y ataxias con fallo de inmunidad humoral.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con el Complejo de Esclerosis Tuberosa (CET). Esta es una enfermedad genética neurocutánea multisistémica (facomatosis) producida por mutaciones inactivantes en los genes supresores de tumores TSC1 (hamartina) o TSC2 (tuberina), lo que hiperactiva la vía mTOR y causa crecimiento descontrolado de tumores benignos (hamartomas) en múltiples órganos. El paciente presenta la clínica más clásica, temprana y letal: los Espasmos Infantiles (Síndrome de West), que a menudo son la primera causa de consulta en lactantes. La exploración de la piel con luz ultravioleta revela las máculas hipopigmentadas (en hoja de fresno) que son el sello cutáneo precoz, y el antecedente del rabdomioma cardíaco (el tumor cardíaco pediátrico más frecuente, que crece en el feto y a menudo se encoge solo al nacer) es un criterio mayor diagnóstico. A futuro, este niño tiene un altísimo riesgo de desarrollar convulsiones refractarias por tuberosidades corticales en el cerebro y Angiomiolipomas renales, los cuales pueden crecer de forma masiva, causar hemorragias retroperitoneales fulminantes y requerir embolización o tratamiento con inhibidores de mTOR (Everolimus).",
    keyPoints: [
      "Lactante con Convulsiones (Espasmos infantiles/West).; Manchas blancas en la piel (Ash-leaf spots / Hoja de fresno) o adenomas sebáceos en cara en niños mayores.; Masa en el corazón (Rabdomioma cardíaco en ecografía fetal/neonatal).",
      "Complejo de Esclerosis Tuberosa. Gen mutado: TSC1/TSC2 (vía mTOR). Riesgo a futuro innegociable: Angiomiolipomas Renales y Astrocitomas Subependimarios de Células Gigantes (SEGA) en el cerebro.",
      "Genética / Neurocutáneas Pediátricas.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-24",
    university: "UCC",
    examArea: "MEDICINA INTERNA - GASTROENTEROLOGÍA / INFECTOLOGÍA",
    topic: "Infecciones Asociadas a la Atención en Salud",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","infecciones-asociadas-a-la-atenci-n-en-salud","infecciones","asociadas","a","la","atenci","n","en","salud"],
    statement: "Un hombre de 68 años se encuentra en su 15º día de hospitalización recuperándose de una neumonía nosocomial que requirió un ciclo extenso de antibióticos de amplio espectro (Ceftriaxona y Clindamicina). En las últimas 48 horas presenta fiebre de 38.5°C, dolor cólico abdominal bajo y más de 10 episodios de diarrea acuosa fétida y profusa al día. Los laboratorios revelan Leucocitosis de 28,000/mm³, Lactato sérico de 3.5 mmol/L y una Creatinina que se elevó de 0.9 a 2.5 mg/dL en el último día. El panel de toxinas en heces para Clostridioides difficile resulta fuertemente positivo. Una radiografía simple de abdomen evidencia una dilatación aguda del colon transverso de 8 cm de diámetro (Megacolon Tóxico incipiente). Ante esta Infección por C. difficile Fulminante y con alto riesgo de muerte, ¿cuál es el régimen antibiótico farmacológico COMBINADO de primera línea establecido por las pautas de la IDSA/SHEA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Vancomicina oral a dosis estándar o Fidaxomicina oral como monoterapia de alta eficacia para respetar la microbiota remanente.",
      },
      {
        id: "B",
        label: "B",
        text: "Metronidazol intravenoso aislado, por ser el fármaco de elección histórica en infecciones intrabdominales anaerobias.",
      },
      {
        id: "C",
        label: "C",
        text: "Vancomicina a dosis altas administrada simultáneamente por Vía ORAL (y/o enemas rectales) MÁS Metronidazol por Vía INTRAVENOSA.",
      },
      {
        id: "D",
        label: "D",
        text: "Colectomía subtotal inmediata sin intento de terapia médica dado el calibre crítico del colon transverso.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con una Infección por Clostridioides difficile (ICD) FULMINANTE. La ICD se clasifica en tres niveles: Leve/Moderada, Severa (Leucocitos > 15,000 o Creatinina > 1.5 mg/dL) y Fulminante (Severa + choque, íleo, o megacolon tóxico). Para las infecciones leves, moderadas o severas simples, el tratamiento de elección es la monoterapia con Vancomicina Oral o Fidaxomicina Oral. SIN EMBARGO, este paciente tiene megacolon tóxico y un íleo paralítico inminente. El intestino inflamado y paralizado no permite que la vancomicina tragada por vía oral avance por el tracto digestivo y llegue al colon inflamado. Por esta razón, las guías internacionales dictaminan que en la Infección Fulminante, se debe utilizar la terapia dual combinada y de máxima agresividad: Vancomicina Oral a altas dosis (500 mg c/6h) o por enemas rectales, ACOMPAÑADA OBLIGATORIAMENTE de Metronidazol INTRAVENOSO. El metronidazol por la vena asegura que el fármaco llegue a las capas profundas de la pared del colon a través de la circulación sistémica sanguínea, atacando la bacteria mientras la vancomicina intenta llegar por la luz luminal.",
    keyPoints: [
      "Paciente con antecedente de antibióticos recientes + Diarrea severa.; Signos de C. difficile FULMINANTE: Leucocitosis masiva (>15k-25k), Falla Renal (AKI), Hipotensión o Megacolon / Íleo.",
      "ICD Fulminante. La monoterapia oral fracasará porque el intestino está paralizado. Terapia de oro exigida: Vancomicina Oral (o Enemas) + Metronidazol Intravenoso. El Metronidazol IV solo se usa en este escenario específico.",
      "Infecciones Asociadas a la Atención en Salud / C. difficile.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-25",
    university: "UCC",
    examArea: "MEDICINA INTERNA - REUMATOLOGÍA / INMUNOLOGÍA",
    topic: "Enfermedades Autoinmunes Sistémicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","enfermedades-autoinmunes-sist-micas","enfermedades","autoinmunes","sist","micas"],
    statement: "Un hombre de 62 años, con diagnóstico de Insuficiencia Cardíaca con fracción de eyección reducida e historial de múltiples arritmias ventriculares, acude a su médico internista por presentar fiebre de 38°C, un profundo malestar general, dolor intenso y rigidez en múltiples articulaciones (poliartralgias simétricas en manos y rodillas), y un dolor pleurítico bilateral intenso que aumenta con la inspiración profunda (Pleuritis y Pericarditis aguda confirmada en ecografía). No se observan úlceras orales, afectación renal en los laboratorios, ni alteraciones neurológicas. Al revisar su lista de medicamentos crónicos recientes, se documenta el uso de Furosemida, Espironolactona, Aspirina, Carvedilol y Procainamida. Se solicitan laboratorios autoinmunes urgentes encontrándose Anticuerpos Antinucleares (ANA) Positivos con título alto (1:640) de patrón homogéneo. Para confirmar la etiología iatrogénica de este síndrome y diferenciarlo de una enfermedad autoinmune idiopática primaria, ¿cuál es el autoanticuerpo de ORO que será altamente específico en esta patología, acompañado del descarte de otro marcador clásico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Anticuerpos anti-ADN de doble cadena (anti-dsDNA) fuertemente positivos, con niveles de complemento C3 y C4 muy consumidos.",
      },
      {
        id: "B",
        label: "B",
        text: "Anticuerpos Anti-Smith (Anti-Sm) y Anticardiolipinas marcadamente reactivos.",
      },
      {
        id: "C",
        label: "C",
        text: "Anticuerpos Anti-Histonas fuertemente positivos, con anticuerpos anti-dsDNA típicamente negativos y niveles de complemento normales.",
      },
      {
        id: "D",
        label: "D",
        text: "Anticuerpos anti-péptido cíclico citrulinado (anti-CCP) positivos en presencia de Factor Reumatoide.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con Lupus Eritematoso Inducido por Fármacos (DILE, por sus siglas en inglés). Esta entidad es una reacción autoinmune mimética causada por medicamentos crónicos altamente metabolizados por acetilación en el hígado (como la Procainamida, Hidralazina, Isoniazida o D-penicilamina). Clínicamente imita al Lupus Eritematoso Sistémico (LES) puro, presentándose típicamente con fiebre, artralgias/artritis, y afectación prominente de serosas (Pleuritis, Pericarditis), pero una perla clínica es que RARA VEZ ataca al riñón (nefritis) o al cerebro. El perfil serológico es inconfundible y sella el diagnóstico: el paciente tendrá los ANAs positivos (patrón homogéneo), pero el marcador patognomónico es la presencia abrumadora (en más del 95% de los casos) de Anticuerpos Anti-Histonas. A diferencia del Lupus primario, el Lupus por drogas típicamente arroja resultados NEGATIVOS para los anticuerpos más letales (anti-dsDNA y Anti-Sm) y los niveles de complemento (C3 y C4) no se consumen. La curación es definitiva al retirar el medicamento ofensor (la procainamida) en cuestión de semanas o meses.",
    keyPoints: [
      "Paciente mayor recibiendo Hidralazina, Procainamida o Isoniazida.; Síntomas nuevos de Lupus \"suave\": Fiebre, dolor articular y serositis (líquido en pleura o pericardio), sin daño renal.; Laboratorio diferencial: ANA (+).",
      "Lupus Inducido por Drogas. Diagnóstico bioquímico absoluto: Anticuerpos Anti-Histonas (+) y anti-dsDNA (-). Se cura retirando el fármaco.",
      "Enfermedades Autoinmunes Sistémicas / Efectos Farmacológicos.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-26",
    university: "UCC",
    examArea: "PEDIATRÍA - NEFROLOGÍA / INFECTOLOGÍA",
    topic: "Complicaciones del Síndrome Nefrótico Pediátrico.",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","complicaciones-del-s-ndrome-nefr-tico-pedi-trico","complicaciones","del","s","ndrome","nefr","tico","pedi","trico"],
    statement: "Un niño de 4 años, diagnosticado hace un año con Síndrome Nefrótico Idiopático (presumiblemente Enfermedad de Cambios Mínimos), se encuentra cursando su segunda recaída. Ha presentado edema generalizado severo (anasarca) y proteinuria masiva en los últimos 5 días. Hoy es traído de urgencia a la medianoche porque despertó con fiebre alta (39.2°C), escalofríos y un dolor abdominal difuso e insoportable. Al examen físico: el niño luce tóxico, el abdomen está distendido por la ascitis preexistente, pero ahora presenta franco rebote (Signo de Blumberg positivo) y defensa muscular involuntaria (peritonitis aguda). Se realiza una paracentesis de urgencia que reporta líquido turbio con 1.500 leucocitos/mm³ (85% polimorfonucleares). Ante esta emergencia intraabdominal que requiere cobertura antibiótica empírica inmediata, ¿cuál es el microorganismo patógeno MÁS probable causante de esta Peritonitis Bacteriana Primaria en el contexto inmunológico específico del Síndrome Nefrótico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Escherichia coli y enterobacterias por translocación intestinal.",
      },
      {
        id: "B",
        label: "B",
        text: "Streptococcus pneumoniae (Neumococo).",
      },
      {
        id: "C",
        label: "C",
        text: "Staphylococcus aureus meticilino-resistente (SAMR) por infección de la piel edematizada.",
      },
      {
        id: "D",
        label: "D",
        text: "Pseudomonas aeruginosa secundaria a inmunosupresión crónica.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Peritonitis Bacteriana Primaria (PBP), la complicación infecciosa intraabdominal más grave y típica del Síndrome Nefrótico en pediatría. Fisiopatológicamente, los niños con síndrome nefrótico activo \"orinan\" (pierden por la vía renal) no solo albúmina, sino también proteínas de vital importancia inmunológica, específicamente la Inmunoglobulina G (IgG) y el Factor B de la vía alterna del complemento. Sin el Factor B, el sistema inmunológico es incapaz de opsonizar y destruir a las bacterias encapsuladas. Por lo tanto, el patógeno rey indiscutible que invade el líquido ascítico de los niños nefróticos es el Streptococcus pneumoniae, seguido por Haemophilus influenzae. (A diferencia del adulto con cirrosis hepática, donde el patógeno de la PBE es casi siempre E. coli por translocación). El manejo exige iniciar de inmediato Cefotaxima o Ceftriaxona.",
    keyPoints: [
      "Niño con Síndrome Nefrótico activo (anasarca, ascitis).; Debut de Abdomen Agudo (Fiebre + Dolor con rebote).",
      "Peritonitis Bacteriana Primaria. El germen MÁS probable es el Neumococo (S. pneumoniae), debido a la pérdida urinaria del Factor B del complemento y de opsoninas.",
      "Complicaciones del Síndrome Nefrótico Pediátrico.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-27",
    university: "UCC",
    examArea: "MEDICINA INTERNA - TOXICOLOGÍA / URGENCIAS",
    topic: "Toxicología",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","toxicolog-a","toxicolog","a"],
    statement: "Un hombre de 55 años, con antecedente de Hipertensión Arterial y Cardiopatía Isquémica, es traído por el SAMU en estado de estupor profundo tras haber ingerido intencionalmente \"un frasco entero de sus pastillas para el corazón\" hace dos horas. Al ingreso a reanimación, el paciente se encuentra en choque refractario: PA 60/35 mmHg, FC 38 lpm (bradicardia extrema). Los pulmones están limpios. El electrocardiograma muestra un bloqueo AV de alto grado con ritmo de escape nodal. El médico de turno duda si la sobredosis fue por Betabloqueadores (ej. Propranolol) o por Calcioantagonistas No Dihidropiridínicos (ej. Verapamilo/Diltiazem). Se solicita una glucometría capilar inmediata a la cabecera del paciente, la cual reporta un nivel de glucosa en sangre de 280 mg/dL (Hiperglucemia franca). Basado en este hallazgo metabólico que diferencia ambos toxíndromes, ¿cuál es el antídoto FARMACOLÓGICO ESPECÍFICO e inotrópico de elección que debe prepararse en infusión continua (junto con el calcio IV) para salvar a este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Glucagón intravenoso a dosis altas.",
      },
      {
        id: "B",
        label: "B",
        text: "Infusión de Insulina Regular a altas dosis combinada con Dextrosa (Terapia HIET).",
      },
      {
        id: "C",
        label: "C",
        text: "Emulsión lipídica intravenosa al 20% (Intralipid) en bolo rápido.",
      },
      {
        id: "D",
        label: "D",
        text: "Atropina en bolos repetidos hasta alcanzar dosis vagolítica total de 3 mg.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Intoxicación severa por Calcioantagonistas (Verapamilo/Diltiazem). Ambas sobredosis (betabloqueadores y bloqueadores de calcio) causan hipotensión, bradicardia profunda y bloqueos AV. Sin embargo, el \"truco maestro\" del toxicólogo para diferenciarlos en urgencias es el nivel de glucosa en sangre. Los bloqueadores de canales de calcio (BCC) bloquean los canales tipo L en las células beta del páncreas, impidiendo la secreción de insulina; esto causa una Hiperglucemia característica. (Por el contrario, los betabloqueadores suelen causar normoglucemia o hipoglucemia). Ante el choque cardiogénico por BCC refractario a líquidos y calcio intravenoso, el antídoto de oro mundial es la Terapia HIET (High-Dose Insulin Euglycemic Therapy). Se administran dosis masivas de Insulina Regular (ej. bolo de 1 U/kg seguido de infusión de 1-10 U/kg/h) junto con un goteo de Dextrosa para no bajar el azúcar. La insulina a estas mega-dosis actúa como el inotrópico positivo más potente que existe para el miocito intoxicado, forzando la entrada de carbohidratos a la célula cardíaca \"hambrienta\" y mejorando la contractilidad y la presión arterial de forma espectacular.",
    keyPoints: [
      "Paciente con choque cardiogénico, bradicardia severa e ingesta de pastillas desconocidas.; Dato Pivote Diferencial: Hiperglucemia apunta a Bloqueadores de Calcio (Verapamilo). Hipoglucemia apunta a Betabloqueadores.",
      "Intoxicación por Calcioantagonistas. Terapia de Rescate (además de Calcio IV): Terapia con Insulina a Altas Dosis (HIET). El Glucagón es el rescate para betabloqueadores.",
      "Toxicología / Antídotos Cardiovasculares.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-28",
    university: "UCC",
    examArea: "PEDIATRÍA - HEMATOLOGÍA",
    topic: "Anemias Hemolíticas Congénitas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","anemias-hemol-ticas-cong-nitas","anemias","hemol","ticas","cong","nitas"],
    statement: "Un niño de 6 años, con historia de episodios de ictericia transitoria leve no estudiados en la primera infancia, acude a urgencias por fiebre, disuria y dolor lumbar (Infección de tracto urinario). El pediatra le receta Trimetoprima-Sulfametoxazol (TMP-SMX) oral. A las 48 horas de haber iniciado el antibiótico, el niño es traído nuevamente a urgencias en estado crítico: luce intensamente pálido, escleras francamente ictéricas y la madre reporta que hoy en la mañana el niño \"orinó de color café muy oscuro, casi negro\". Laboratorios: Hemoglobina 6.5 g/dL (caída de 5 puntos), Reticulocitos 15%, Bilirrubina Indirecta 4.5 mg/dL. El frotis de sangre periférica, además de anisocitosis, revela la presencia de múltiples células mordidas (Bite cells / Degmacitos) y, tras aplicar tinción supravital, se observan inclusiones oscuras en el interior de los glóbulos rojos conocidas como Cuerpos de Heinz. El Test de Coombs directo es Negativo. ¿Cuál es la deficiencia enzimática patogénica que desencadenó esta hemólisis intravascular fulminante y qué proceso falló en el eritrocito?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Deficiencia de Piruvato Quinasa; falla en la generación de ATP por la vía glucolítica anaerobia.",
      },
      {
        id: "B",
        label: "B",
        text: "Deficiencia de Glucosa-6-Fosfato Deshidrogenasa (G6PD); incapacidad para generar glutatión reducido frente al estrés oxidativo agudo.",
      },
      {
        id: "C",
        label: "C",
        text: "Mutación de las proteínas de membrana (Anquirina/Espectrina); el glóbulo rojo pierde su flexibilidad formando esferocitos que son destruidos en el bazo.",
      },
      {
        id: "D",
        label: "D",
        text: "Deficiencia de Hexoquinasa; falla en la metabolización de la galactosa circulante formando cataratas.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Crisis Hemolítica por Deficiencia de G6PD. Es la enzimopatía eritrocitaria más común del mundo (ligada al cromosoma X, afecta predominantemente a varones). El glóbulo rojo carece de mitocondrias y depende absolutamente de la enzima G6PD para producir NADPH, el cual mantiene al glutatión en estado reducido. El glutatión reducido es el \"escudo\" del eritrocito contra los radicales libres y la oxidación. En estado basal el niño es asintomático. La crisis ocurre cuando el paciente ingiere un oxidante potente (Fármacos como TMP-SMX, Primaquina, Nitrofurantoína, o alimentos como las Habas/Fava beans) o sufre una infección severa. El estrés oxidativo \"oxida\" la hemoglobina, haciéndola precipitar dentro de la célula formando los Cuerpos de Heinz. Cuando este eritrocito dañado pasa por el bazo, los macrófagos le arrancan el pedazo de membrana donde está pegado el cuerpo de Heinz, dejando una célula \"mordida\" (Bite cell). Si el estrés es masivo, el eritrocito estalla en la sangre (hemólisis intravascular, hemoglobinuria oscura/café).",
    keyPoints: [
      "Varón previamente sano que debuta con Anemia severa + Ictericia + Orina Oscura.; Gatillo clásico: Infección, pastilla de Sulfa (TMP-SMX), antimalárico o habas.; Frotis clave: Células mordidas (Bite cells) y Cuerpos de Heinz. (El Coombs será Negativo).",
      "Deficiencia de Glucosa-6-Fosfato Deshidrogenasa (G6PD). Falla de glutatión y estrés oxidativo. Tratamiento: Transfusión si es necesario, hidratación y evitar el agente estresante.",
      "Anemias Hemolíticas Congénitas / Hematología Pediátrica.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-29",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / INFECTOLOGÍA",
    topic: "Urgencias Infecciosas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-infecciosas","urgencias","infecciosas"],
    statement: "Un joven universitario de 19 años es llevado a urgencias por sus compañeros de cuarto, quienes lo encontraron en la cama desorientado, confuso y quejándose de dolor muscular difuso, náuseas y vómitos. Refieren que el paciente había estado con un cuadro gripal y fiebre de 39.5°C en las últimas 48 horas. Al examen físico en urgencias: obnubilado, PA 70/40 mmHg (choque profundo), FC 135 lpm, FR 28 rpm. Se documenta rigidez de nuca, fotofobia y, de manera llamativa, un extenso exantema petequial y purpúrico (equimosis palpables) que cubre el tronco y las extremidades inferiores. A pesar de administrar 3 litros de solución salina isotónica y altas dosis de Noradrenalina, el paciente permanece en choque refractario. Los laboratorios urgentes revelan Sodio de 125 mEq/L (Hiponatremia), Potasio de 5.8 mEq/L (Hiperkalemia) y acidosis metabólica. ¿Cuál es el fenómeno fisiopatológico letal que acaba de ocurrir en las glándulas de este paciente y cuál es el fármaco de rescate OBLIGATORIO que debe sumarse al antibiótico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Necrosis isquémica hipofisiaria por CID (Síndrome de Sheehan); requiere Levotiroxina IV inmediata.",
      },
      {
        id: "B",
        label: "B",
        text: "Hemorragia suprarrenal bilateral masiva (Síndrome de Waterhouse-Friderichsen); el tratamiento exige inyección urgente de Hidrocortisona IV a dosis de estrés.",
      },
      {
        id: "C",
        label: "C",
        text: "Secreción inadecuada de ADH (SIADH) por meningitis fulminante; exige restricción hídrica y Tolvaptán.",
      },
      {
        id: "D",
        label: "D",
        text: "Rabdomiólisis severa toxémica que taponó el riñón; requiere diálisis urgente y alcalinización.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Meningococcemia fulminante (sepsis por Neisseria meningitidis), evidenciada por la meningitis febril y el infame rash purpúrico/petequial rápidamente progresivo. La complicación más letal y devastadora de esta bacteriemia es el Síndrome de Waterhouse-Friderichsen. La endotoxina del meningococo desencadena una Coagulación Intravascular Diseminada (CID) tan brutal que las venas de las glándulas suprarrenales se trombosan. Al taparse el drenaje, las glándulas suprarrenales se llenan de sangre hasta estallar, resultando en una Hemorragia Suprarrenal Bilateral que destruye por completo y en minutos la corteza adrenal. El paciente pierde súbitamente toda su producción de Aldosterona y Cortisol. La falta de aldosterona causa el perfil iónico patognomónico: Hiponatremia + Hiperkalemia. La falta de cortisol provoca un Choque Vasopléjico Refractario a líquidos y aminas (Noradrenalina). El rescate vital innegociable, además de la Ceftriaxona para la bacteria, es la administración inmediata de Hidrocortisona intravenosa (100 mg STAT) para restaurar el tono vascular.",
    keyPoints: [
      "Joven o niño con fiebre, rigidez de nuca y Rash Purpúrico fulminante (Meningococcemia).; Que de repente hace un Choque Refractario a líquidos/aminas.; Laboratorio endocrino: El Sodio BAJA y el Potasio SUBE.",
      "Síndrome de Waterhouse-Friderichsen. (Destrucción hemorrágica de las suprarrenales). La presión solo mejorará si le inyectas Hidrocortisona a dosis de estrés.",
      "Urgencias Infecciosas / Crisis Adrenal Aguda.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-30",
    university: "UCC",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - CUIDADO INTENSIVO",
    topic: "Emergencias Obstétricas Letales",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","emergencias-obst-tricas-letales","emergencias","obst","tricas","letales"],
    statement: "Una mujer de 32 años, multípara a las 39 semanas de gestación, se encuentra en trabajo de parto activo avanzado (dilatación completa). Tras la ruptura artificial de las membranas, la paciente experimenta un fuerte escalofrío y, de manera súbita y catastrófica, desarrolla disnea jadeante (gasping), cianosis profunda y pérdida total de la conciencia. El monitor revela una Fibrilación Ventricular (Paro Cardíaco). El equipo inicia RCP inmediata y realiza una cesárea perimortem a los 4 minutos, extrayendo un feto vivo. Tras retornar a ritmo sinusal (ROSC), la paciente queda en choque cardiogénico profundo. Inmediatamente después, el obstetra nota un sangrado profuso en sábana, incoagulable y masivo desde el lecho uterino, vagina, así como por los sitios de punción venosa (CID fulminante). Los gases arteriales muestran una hipoxemia extrema. Teniendo en cuenta este síndrome catastrófico del periparto, ¿cuál es el mecanismo fisiopatológico primario que detona la falla cardíaca derecha aguda y el colapso de la paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Embolismo Pulmonar Masivo por trombo venoso de miembros inferiores migrado tras el pujo.",
      },
      {
        id: "B",
        label: "B",
        text: "Infarto agudo de miocardio transmural por disección coronaria espontánea del embarazo (SCAD).",
      },
      {
        id: "C",
        label: "C",
        text: "Anafilaxia sistémica severa y vasoespasmo pulmonar inducidos por el paso de líquido amniótico al torrente circulatorio materno.",
      },
      {
        id: "D",
        label: "D",
        text: "Shock séptico hiperagudo por corioamnionitis fulminante silente.",
      },
    ],
    correctOptionId: "C",
    explanation: "La paciente fue víctima de un Embolismo de Líquido Amniótico (AFE, por sus siglas en inglés) o Síndrome Anafilactoide del Embarazo. Es la catástrofe obstétrica más letal y temida (mortalidad >60%). Ocurre típicamente durante el trabajo de parto activo o inmediatamente post-parto (especialmente si hay hipertonía uterina o ruptura de membranas). Fisiopatológicamente, las contracciones empujan líquido amniótico (rico en restos fetales, meconio y antígenos) a través de los desgarros venosos uterinos hacia la circulación venosa materna, llegando directo a los pulmones. El cuerpo materno reacciona a estos antígenos fetales con una reacción anafilactoide masiva y una tormenta inmunológica: los vasos pulmonares sufren un espasmo constrictivo brutal (vasoespasmo pulmonar), lo que ahoga al ventrículo derecho causando paro cardíaco o falla derecha aguda. Simultáneamente, el líquido amniótico es increíblemente rico en factor tisular (tromboplastina), lo que desencadena una Coagulación Intravascular Diseminada (CID) inmediata e incontrolable (sangrado en sábana por todas partes).",
    keyPoints: [
      "Mujer en trabajo de parto activo o cesárea reciente.; Colapso SÚBITO de 3 esferas: 1) Falla respiratoria/hipoxia, 2) Paro Cardíaco/Choque, y 3) CID masiva (sangra por todos lados).",
      "Embolismo de Líquido Amniótico. No tiene antídoto. Tratamiento: Soporte Vital (RCP), intubación, transfusión masiva de hemoderivados (Protocolo de Transfusión Masiva) y Cesárea Perimortem urgente si ocurre antes del parto.",
      "Emergencias Obstétricas Letales / Cuidado Intensivo.",
    ],
  }
];
