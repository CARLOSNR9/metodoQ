import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · Preguntas #81–#90.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_08_23_81_90_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-08-23-81",
    university: "UCC",
    examArea: "PEDIATRÍA - INFECTOLOGÍA / URGENCIAS",
    topic: "Infectología y Dermatología Pediátrica.",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","infectolog-a-y-dermatolog-a-pedi-trica","infectolog","a","y","dermatolog","pedi","trica"],
    statement: "Un lactante masculino de 11 meses de edad es traído a urgencias por sus padres debido a la aparición súbita de una erupción cutánea llamativa. La madre refiere que hace 4 días el niño inició con tos perruna leve y secreción nasal. Hace 24 horas, tras la administración de una dosis de amoxicilina por sospecha de otitis, aparecieron múltiples placas edematosas eritematosas que la madre describe como \"anillos rojos con centro pálido o azulado\" (lesiones en diana o en escarapela), distribuidas en la cara, las extremidades y las nalgas. Al examen físico: el niño se encuentra afebril, activo, sonriente y sin ningún signo de toxicidad sistémica. No hay afectación de mucosas (boca, ojos y genitales limpios). Llama la atención un severo edema acral indoloro pero tenso en los dorsos de las manos y los pies. Los laboratorios de urgencia (hemograma, reactantes de fase aguda y función renal) son estrictamente normales. ¿Cuál es el diagnóstico clínico de esta dermatosis purpúrica/urticariforme benigna y autolimitada de la infancia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Eritema Multiforme Mayor (Síndrome de Stevens-Johnson); requiere ingreso inmediato a unidad de quemados e inmunoglobulina IV.",
      },
      {
        id: "B",
        label: "B",
        text: "Púrpura de Henoch-Schönlein (Vasculitis por IgA); requiere corticoesteroides orales y biopsia renal.",
      },
      {
        id: "C",
        label: "C",
        text: "Edema Agudo Hemorrágico del Lactante (Enfermedad de Finkelstein); requiere manejo conservador y tranquilidad a los padres.",
      },
      {
        id: "D",
        label: "D",
        text: "Meningococcemia fulminante en fase inicial; requiere Ceftriaxona IV de urgencia e intubación.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con Edema Agudo Hemorrágico del Lactante (EAHL), también conocido como Enfermedad de Finkelstein. Es una variante llamativa pero completamente benigna y autolimitada de vasculitis leucocitoclástica que afecta casi exclusivamente a lactantes entre los 4 y 24 meses de edad. Clásicamente aparece tras un cuadro viral de vías aéreas superiores o tras la toma de antibióticos. Su presentación provoca gran alarma en los padres e internistas novatos porque simula catástrofes: placas purpúricas/urticariformes en diana (escarapela) en cara y extremidades, asociadas a edema tenso asimétrico de manos y pies. La clave de oro del examen es el estado general del paciente: el lactante luce feliz, activo, afebril o con febrícula, sin compromiso de mucosas y sin afectación de órganos internos (a diferencia de Henoch-Schönlein que afecta intestino/riñón en niños más grandes). Las lesiones desaparecen espontáneamente en 1 a 3 semanas sin dejar cicatriz, por lo que el manejo es puramente conservador y expectante.",
    keyPoints: [
      "Lactante < 2 años con placas purpúricas en \"escarapela/diana\" en cara y extremidades + Edema en manos/pies, PERO el niño está rosado, feliz y comiendo bien.",
      "Edema Agudo Hemorrágico del Lactante (Finkelstein). Manejo: Tranquilizar a los padres, NO requiere corticoides ni hospitalizaciones agresivas.",
      "Infectología y Dermatología Pediátrica.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-82",
    university: "UCC",
    examArea: "MEDICINA INTERNA - GASTROENTEROLOGÍA / ONCOLOGÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","medicina-interna","medicina","interna"],
    statement: "Un hombre de 62 años, con antecedente de reflujo gastroesofágico (ERGE) de 20 años de evolución mal controlado, acude a consulta por disfagia progresiva en los últimos 4 meses, que inició con alimentos sólidos (carne, pan) y que en la última semana ha progresado a líquidos, acompañada de una pérdida de peso no intencionada de 12 kg. Niega consumo de alcohol o cigarrillo. Se realiza una Endoscopia Digestiva Alta (VEDA) que evidencia en el tercio distal del esófago (a 3 cm de la unión esófago-gástrica) una masa vegetante, ulcerada y friable que ocluye el 80% de la luz. Las biopsias confirman un adenocarcinoma de esófago. ¿Cuál es la lesión metaplásica precursora primaria gatillada por el ácido gástrico crónico que precedió el desarrollo de este tumor?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Metaplasia escamosa del epitelio cilíndrico esofágico secundario a infección por Helicobacter pylori.",
      },
      {
        id: "B",
        label: "B",
        text: "Esófago de Barrett (sustitución del epitelio escamoso estratificado por epitelio cilíndrico de tipo intestinal con células caliciformes).",
      },
      {
        id: "C",
        label: "C",
        text: "Acantosis nigricans esofágica secundaria a hiperinsulinemia severa.",
      },
      {
        id: "D",
        label: "D",
        text: "Divertículo de Zenker con degeneración sarcomatosa distal.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta las dos grandes entidades del cáncer de esófago. Para los exámenes de residencia, la diferenciación entre los dos subtipos histológicos principales de cáncer esofágico es un clásico ineludible:\nAdenocarcinoma esofágico: Típico del tercio distal/inferior, fuertemente vinculado al reflujo ácido crónico (ERGE), la obesidad y la lesión precursora denominada Esófago de Barrett. En el Esófago de Barrett, el epitelio escamoso estratificado normal del esófago no soporta el ácido y cambia a un epitelio cilíndrico metaplásico de tipo intestinal con células caliciformes (goblet cells). Esta metaplasia progresa a displasia y finalmente a adenocarcinoma.\nCarcinoma Escamocelular (Epidermoide): Típico del tercio medio y superior, fuertemente vinculado al consumo crónico de alcohol, cigarrillo, bebidas muy calientes y achalasia.",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-83",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEFROLOGÍA / CARDIOLOGÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","medicina-interna","medicina","interna"],
    statement: "Un hombre de 68 años con antecedente de hipertensión arterial e insuficiencia cardíaca con fracción de eyección reducida (FEVI 32%) acude a la urgencia por disnea de pequeños esfuerzos y edemas en miembros inferiores. En sus exámenes de laboratorio de ingreso se reporta: Creatinina sérica de 2.8 mg/dL (basal de 1.1 mg/dL hace un mes), BUN de 60 mg/dL y un Sodio urinario < 10 mEq/L con una Fracción de Excreción de Sodio (FeNa) de 0.4%. El parcial de orina muestra un sedimento hialino limpio sin proteinuria ni hematuria. Tras optimizar cautelosamente el volumen intravascular y reducir la congestión venous, el equipo médico confirma el diagnóstico de un Síndrome Cardiorrenal Tipo 1. ¿Cuál es el mecanismo hemodinámico intrarrenal primario que explica el colapso de la tasa de filtrado glomerular en esta falla renal aguda?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Vasoconstricción de la arteriola aferente y vasodilatación de la eferente secundaria a hipoperfusión arterial efectiva e hipertensión venosa renal.",
      },
      {
        id: "B",
        label: "B",
        text: "Obstrucción tubular intrínseca por precipitación de cristales de ácido úrico y mioglobina.",
      },
      {
        id: "C",
        label: "C",
        text: "Necrosis tubular aguda tóxica inducida por la acumulación tisular de Péptido Natriurético Cerebral (BNP).",
      },
      {
        id: "D",
        label: "D",
        text: "Ruptura de la membrana basal glomerular mediada por complejos inmunes circulantes.",
      },
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con un Síndrome Cardiorrenal Tipo 1 (deterioro hemodinámico renal agudo secundario a una falla cardíaca aguda o descompensada). Fisiopatológicamente, la falla renal no se debe a un daño anatómico del glomérulo (el sedimento está limpio y la FeNa < 1% demuestra que los túbulos están sanos y reabsorbiendo sodio desesperadamente = patrón prerenal). El colapso del filtrado glomerular se produce por un \"doble golpe\" hemodinámico:\nCaída del gasto cardíaco anterógrado: Disminuye el volumen arterial circulante efectivo, activando el sistema simpático y el eje Renina-Angiotensina, lo que causa vasoconstricción de la arteriola aferente renal para proteger la presión sistémica.\nCongestión venosa retrógrada (Hipertensión venosa renal): La presión alta en la aurícula derecha y vena cava se transmite \"hacia atrás\" a las venas renales. Esto aumenta la presión intersticial del riñón y ahoga el gradiente de filtración en el glomérulo. La pérdida del tono de la arteriola eferente o su desregulación anula la presión intraglomerular neta.",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-84",
    university: "UCC",
    examArea: "PEDIATRÍA - INFECTOLOGÍA / NEUROLOGÍA",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","pediatr-a","pediatr","a"],
    statement: "Un escolar de 7 años es traído a urgencias por sus padres debido a debilidad progresiva en ambas piernas que le dificulta ponerse de pie y subir escaleras. Hace 10 días, el niño cursó con un cuadro de diarrea acuosa que resolvió espontáneamente. Al examen físico: alerta, febril (38.1°C), se documenta una parálisis flácida que ha ascendido en las últimas 24 horas afectando extremidades inferiores de forma asimétrica, con abolición del reflejo rotuliano izquierdo, pero conservación de la sensibilidad táctil y dolorosa. No hay nivel sensitivo. La punción lumbar muestra líquido cefalorraquídeo con pleocitosis linfocitaria (50 céls/mm³) y proteínas levemente elevadas. En el marco de la erradicación epidemiológica global de la Poliomielitis y el diagnóstico diferencial de parálisis flácida aguda en pediatría, ¿cuál es el enterovirus no poliológico y el virus ARN causantes más frecuentes de este cuadro simio-polio en la era moderna?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Enterovirus D68 (EV-D68) / Enterovirus A71 y Virus del Nilo Occidental (West Nile).",
      },
      {
        id: "B",
        label: "B",
        text: "Virus de la Rabia y Herpes Virus Humano tipo 6.",
      },
      {
        id: "C",
        label: "C",
        text: "Cytomegalovirus y Virus de Epstein-Barr.",
      },
      {
        id: "D",
        label: "D",
        text: "Rotavirus del grupo A y Adenovirus serotipo 40.",
      },
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta un cuadro de Mielitis Flácida Aguda (AFM) o síndrome tipo poliomielitis (polio-like syndrome). Clásicamente, la destrucción de las neuronas motoras del asta anterior de la médula espinal produce la tríada de: Parálisis flácida asimétrica + Arreflexia + Conservación de la sensibilidad (porque las raíces sensitivas posteriores no están afectadas). Aunque el poliovirus salvaje está virtualmente erradicado en la mayoría del mundo, en la última década han emergido brotes epidémicos de parálisis flácida aguda en niños causados por otros enterovirus no poliológicos, abrumadoramente el Enterovirus D68 (EV-D68) y el Enterovirus A71 (EV-A71), así como el Virus del Nilo Occidental (West Nile Virus). Estos virus tienen un neurotropismo directo por la sustancia gris del asta anterior de la médula espinal.",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-85",
    university: "UCC",
    examArea: "MEDICINA INTERNA - HEMATOLOGÍA / REUMATOLOGÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","medicina-interna","medicina","interna"],
    statement: "Una mujer de 28 años consulta por un cuadro de 3 meses de fatiga, artralgias en muñecas y dolor torácico de características pleuríticas. En la última semana notó la aparición de petequias en tobillos y sangrado gingival espontáneo. Al examen físico: eritrodermia malar respetando los surcos nasogenianos, úlceras orales indoloras en paladar duro y petequias distales. No hay déficit neurológico. Paraclínicos: Hemoglobina 10.2 g/dL, Leucocitos 3,100/mm³ (Linfopenia de 800/mm³), Plaquetas de 12,000/mm³ (Trombocitopenia grave). Creatinina 0.8 mg/dL. Tiempos de coagulación normales. Frotis de sangre periférica: sin esquizocitos, megacariocitos aumentados en médula ósea. Anticuerpos Antinucleares (ANA) positivos 1:1280 con patrón punteado, anti-dsDNA positivo y complemento C3 y C4 consumidos. Ante la trombocitopenia inmunológica severa aislada en el contexto de una crisis de Lupus Eritematoso Sistémico (LES), ¿cuál es la primera línea de manejo inmunosupresor rápido para elevara las plaquetas y evitar hemorragia intracraneal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Transfusión empírica de 12 unidades de plaquetas inmediatamente sin fármacos.",
      },
      {
        id: "B",
        label: "B",
        text: "Corticosteroides a altas dosis (Pulsos de Metilprednisolona o Prednisona 1 mg/kg/día) asociados o no a Inmunoglobulina IV (IGIV).",
      },
      {
        id: "C",
        label: "C",
        text: "Esplenectomía laparoscópica de urgencia en las primeras 24 horas.",
      },
      {
        id: "D",
        label: "D",
        text: "Rituximab en monoterapia sin corticoides por riesgo de sepsis.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con un Lupus Eritematoso Sistémico (LES) activo manifestado con una Trombocitopenia Inmune Secundaria (PTI lúpica) severa (< 20,000/mm³ con sangrado mucoso). La destrucción de las plaquetas ocurre en el bazo mediada por autoanticuerpos IgG dirigidos contra las glicoproteínas de membrana plaquetaria (GPIIb/IIIa). En el LES, la trombocitopenia grave es un criterio de severidad clínica que requiere intervención rápida. La piedra angular y primera línea de tratamiento indiscutida son los Corticosteroides a altas dosis (Pulsos de Metilprednisolona IV o Prednisona oral), los cuales frenan la producción de anticuerpos y bloquean los receptores Fc de los macrófagos esplénicos. Si hay sangrado activo grave o riesgo inminente del SNC, se adiciona Inmunoglobulina G Intravenosa (IGIV) para saturar los macrófagos de forma inmediata.",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-86",
    university: "UCC",
    examArea: "PEDIATRÍA - CARDIOLOGÍA / NEONATOLOGÍA",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","pediatr-a","pediatr","a"],
    statement: "Un recién nacido prematuro de 30 semanas de gestación, con peso al nacer de 1,200 gramos, se encuentra en su cuarto día de vida en la UCIN. Cursó inicialmente con Enfermedad de Membrana Hialina tratada exitosamente con surfactante y CPAP. Hoy, el neonatólogo nota un deterioro metabólico agudo: el bebé presenta accesos de apnea, taquipnea, aumento de los requerimientos de oxígeno y pulsos femorales y braquiales intensamente saltones (pulsos híperdinámicos / bounding pulses). A la auscultación cardíaca se detecta un soplo continuo en \"maquinaria de tren\" (Soplo de Gibson) en el borde esternal superior izquierdo, acompañado de un precordio hiperdinámico y una presión arterial diferencial muy amplia (presión sistólica alta con diastólica muy baja, ej. 65/20 mmHg). Una ecografía confirma un cortocircuito significativo de izquierda a derecha. ¿Cuál es el tratamiento farmacológico inhibidor de la síntesis de prostaglandinas de primera línea para lograr el cierre médico de este defecto?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Infusión continua de Alprostadil (Prostaglandina E1).",
      },
      {
        id: "B",
        label: "B",
        text: "Ibuprofeno o Indometacina intravenosa (o Paracetamol IV).",
      },
      {
        id: "C",
        label: "C",
        text: "Sildenafil oral a dosis tituladas.",
      },
      {
        id: "D",
        label: "D",
        text: "Milrinona en infusión continua con Furosemida.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un Ductus Arterioso Permeable (PDA - Persistencia del Conducto Arterioso) sintomático con repercusión hemodinámica, la cardiopatía más común en el prematuro extremo. Fisiológicamente, el ductus debe cerrarse tras el nacimiento al caer las prostaglandinas placentarias y subir el O2. En el prematuro, el ductus no responde al O2 y se queda abierto. Al caer las resistencias pulmonares, la sangre oxigenada de la aorta se fuga masivamente hacia la arteria pulmonar (shunt I-D). Esto \"roba\" sangre a la aorta diastólica (causando la presión diastólica muy baja, la presión diferencial amplia y los pulsos saltones/híperdinámicos) y sobrecarga de volumen los pulmones. El soplo patognomónico es el soplo continuo en maquinaria (Gibson). Dado que las Prostaglandinas E2 mantienen el ductus abierto en la vida fetal, el tratamiento médico farmacológico para forzar su cierre consiste en administrar Inhibidores de la Ciclooxigenasa (AINEs intravenosos como Ibuprofeno o Indometacina, o Paracetamol IV), los cuales bloquean la síntesis de prostaglandinas permitiendo que el músculo ductal se contraiga y se cierre.",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-87",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / GERIATRÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","medicina-interna","medicina","interna"],
    statement: "Una mujer de 78 años, residente en un hogar geriátrico, es traída al hospital por progresiva debilidad, marcha inestable y episodios de confusión en la última semana. No presenta fiebre, tos ni síntomas urinarios. En sus antecedentes destaca hipertensión arterial tratada con Hidroclorotiazida 25 mg/día e insomnio tratado con Sertralina 50 mg/día desde hace un mes. Al examen físico: mucosas húmedas, presión arterial 130/80 mmHg sin cambios ortostáticos, neurológicamente desorientada en tiempo y espacio sin focalización motora. Paraclínicos: Sodio sérico 116 mEq/L (Hiponatremia severa), Potasio 4.1 mEq/L, Creatinina 0.6 mg/dL, Glucosa 95 mg/dL. Osmolaridad sérica 240 mOsm/kg (Hiposmolar). Osmolaridad urinaria 450 mOsm/kg (Inadecuadamente concentrada) y Sodio urinario 48 mEq/L (Elevado). Las funciones tiroidea y adrenal son normales. Teniendo en cuenta la euvolemia clínica y los hallazgos de laboratorio, ¿cuál es el diagnóstico farmacológico/endocrino subyacente y la tasa MÁXIMA de corrección del sodio en las primeras 24 horas para evitar la Mielinólisis Pontina Central?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hiponatremia por diuréticos tiazídicos pura; límite de corrección 15 mEq/L/24h.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Secreción Inadecuada de Hormona Antidiurética (SIADH) inducido por ISRS (Sertralina) y/o Tiazidas; límite de corrección MÁXIMO de 8 a 10 mEq/L en 24 horas.",
      },
      {
        id: "C",
        label: "C",
        text: "Pseudohiponatremia por hiperlipidemia severa; no requiere restricción de corrección.",
      },
      {
        id: "D",
        label: "D",
        text: "Insuficiencia Adrenal Secundaria; límite de corrección 18 mEq/L/24h con Dextrosa al 5%.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta un SIADH (Síndrome de Secreción Inadecuada de ADH), la causa más común de hiponatremia normovolémica (euvolémica) en ancianos. En la población geriátrica, dos grupos de medicamentos son los culpables principales de desencadenar SIADH: los Inhibidores Selectivos de la Recaptación de Serotonina (ISRS como la Sertralina) y los Diuréticos Tiazídicos (Hidroclorotiazida). Fisiopatológicamente, la ADH (vasopresina) se secreta sin control, reteniendo agua pura en el túbulo colector. Criterios de SIADH: Hiponatremia + Hiposmolaridad plasmática + Euvolemia clínica + Osmolaridad urinaria concentrada (>100 mOsm/kg) + Sodio urinario alto (>30 mEq/L) con tiroides y suprarrenales normales. La regla de oro absoluta en la corrección de la hiponatremia crónica es el límite de corrección: la velocidad de ascenso del sodio sérico NUNCA debe superar los 8 a 10 mEq/L en las primeras 24 horas (o 18 mEq/L en 48 horas). Si se corrige demasiado rápido (ej. infundiendo solución hipertónica a ciegas), la deshidratación osmótica destruirá la mielina del puente de Varolio causando Mielinólisis Pontina Central (Síndrome de Desmielinización Osmótica), dejando a la paciente con cuadriplejía irreversible y síndrome de cautiverio.",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-88",
    university: "UCC",
    examArea: "PEDIATRÍA - INFECTOLOGÍA / URGENCIAS",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","pediatr-a","pediatr","a"],
    statement: "Un niño de 3 años es traído a urgencias por sus padres debido a un cuadro de 2 días de fiebre de 38.5°C, irritabilidad y negativa a comer sólidos. Al examen físico de la cavidad oral, el pediatra observa múltiples lesiones vesiculosas pequeñas (1 a 2 mm) y úlceras eritematosas dolorosas confinadas exclusivamente en la pared posterior de la orofaringe, pilares amigdalinos, paladar blando y úvula. No hay lesiones en los labios, encías ni mucosa yugal anterior. Tampoco presenta exantema en manos, pies o zona del pañal. El niño no presenta signos de deshidratación severa y tolera líquidos fríos. ¿Cuál es el diagnóstico clínico preciso de esta infección viral febril y cuál es el agente etiológico abrumadoramente más frecuente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Gíngivostomatitis Herpética primaria; Virus Herpes Simple tipo 1 (VHS-1).",
      },
      {
        id: "B",
        label: "B",
        text: "Herpangina; Coxsackievirus A (Enterovirus).",
      },
      {
        id: "C",
        label: "C",
        text: "Faringitis estreptocócica; Streptococcus pyogenes del grupo A.",
      },
      {
        id: "D",
        label: "D",
        text: "Mononucleosis infecciosa; Virus de Epstein-Barr.",
      },
    ],
    correctOptionId: "B",
    explanation: "La Herpangina es una infección enantematosa febril común de la infancia causada por Enterovirus, predominantemente el Coxsackievirus grupo A (serotipos A1 a A10, A16, A22). La clave de oro para diferenciar las infecciones orales en pediatría para los exámenes radica en la localización estricta de las úlceras:\nHerpangina: Las vesículas y úlceras dolorosas se ubican EXCLUSIVAMENTE en la región POSTERIOR de la boca (pilares amigdalinos, paladar blando, úvula y pared faríngea posterior). Respetan la parte anterior.\nGingivoestomatitis Herpética (HSV-1): Afecta la región ANTERIOR y difusa de la boca (encías rojas y sangrantes, labios, mucosa yugal anterior y lengua) con alta fiebre y halitosis.\nLa Herpangina es un cuadro benigno y autolimitado que dura de 4 a 7 días. El manejo es puramente sintomático (analgésicos como paracetamol/ibuprofeno, hidratación con líquidos fríos o helados).",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-89",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUMOLOGÍA / CARDIOLOGÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","medicina-interna","medicina","interna"],
    statement: "Un hombre de 65 años, fumador pesado con antecedente de Enfermedad Pulmonar Obstructiva Crónica (EPOC) severo, acude a urgencias por aumento de la disnea y edema progresivo en ambos miembros inferiores en las últimas tres semanas. Al examen físico: distensión venosa yugular a 45 grados con onda v prominente, soplo holosistólico en el foco tricuspídeo que aumenta con la inspiración profunda (Signo de Carvallo positivo), hepatomegalia congestiva dolorosa y reflujo hepatoyugular. Los campos pulmonares muestran roncus dispersos y espiración prolongada, sin crepitantes de falla izquierda. El electrocardiograma evidencia ondas P picudas altos en DII (> 2.5 mm, P pulmonale) y desviación del eje a la derecha (+120°). El ecocardiograma muestra un ventrículo izquierdo con función sistólica y diastólica preservada (FEVI 62%), pero con una severa hipertrofia y dilatación del Ventrículo Derecho con presión sistólica de la arteria pulmonar de 55 mmHg. ¿Cuál es el diagnóstico clínico-cardiológico de esta falla cardíaca derecha secundaria a patología pulmonar crónica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome de Eisenmenger senil.",
      },
      {
        id: "B",
        label: "B",
        text: "Cor Pulmonale Crónico (Cardiopatía Pulmonar).",
      },
      {
        id: "C",
        label: "C",
        text: "Miocardiopatía Dilatada Idiopática con insuficiencia biventricular.",
      },
      {
        id: "D",
        label: "D",
        text: "Pericarditis Constrictiva con taponamiento crónico.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un Cor Pulmonale Crónico, definido como la hipertrofia y/o dilatación del Ventrículo Derecho (con o sin falla cardíaca derecha) resultante de una Hipertensión Pulmonar primaria causada por enfermedades intrínsecas del parénquima pulmonar o de la ventilación (como el EPOC, fibrosis pulmonar o apnea del sueño). Fisiopatológicamente, la hipoxia alveolar crónica del EPOC desencadena una vasoconstricción arterial pulmonar hipóxica severa y remodelado vascular. Esto aumenta de forma masiva la resistencia vascular pulmonar (poscarga derecha). El ventrículo derecho debe trabajar contra este \"muro de presión\" pulmonar, adaptándose primero con hipertrofia y finalmente dilatándose y fallando. La clínica de Cor Pulmonale es la clínica de la Falla Cardíaca Derecha PURA: edema en piernas, hepatomegalia congestiva, ingurgitación yugular y el Signo de Carvallo (aumento de la intensidad del soplo de insuficiencia tricuspídea durante la inspiración debido al mayor retorno venoso). El ventrículo izquierdo es completamente normal.",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-90",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUROLOGÍA / GERIATRÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","medicina-interna","medicina","interna"],
    statement: "Un hombre de 74 años es llevado a la consulta de neurología por sus hijos debido a un cuadro de 8 meses de deterioro cognitivo y episodios de desorientación. Los familiares resaltan tres características muy peculiares: 1) El paciente presenta alucinaciones visuales complejas, detalladas y recurrentes (asegura ver personas y animales pequeños caminando en la sala); 2) Presenta fluctuaciones marcadas en el estado de alerta y la atención (un día está lúcido y al día siguiente profundamente somnoliento e inatento); y 3) Muestra signos de parkinsonismo motor espontáneo (rigidez en extremidades, bradicinesia y marcha a pasos cortos). Hace un mes, un médico general le prescribió Haloperidol para controlar las alucinaciones, lo que desencadenó un empeoramiento catastrófico y súbito de la rigidez motora (intensa sensibilidad a neurolépticos). ¿Cuál es el diagnóstico neurodegenerativo subyacente y la entidad histopatológica en la corteza cerebral?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Enfermedad de Alzheimer; ovillos neurofibrilares de proteína tau y placas de beta-amiloide.",
      },
      {
        id: "B",
        label: "B",
        text: "Demencia por Cuerpos de Lewy; depósitos corticales y subcorticales de agregados anómalos de alfa-sinucleína.",
      },
      {
        id: "C",
        label: "C",
        text: "Demencia Frontotemporal (Enfermedad de Pick); degeneración lobar focales con cuerpos de Pick.",
      },
      {
        id: "D",
        label: "D",
        text: "Demencia Vascular multinfarto; leucoencefalopatía isquémica subcortical progresiva.",
      },
    ],
    correctOptionId: "B",
    explanation: "La Demencia por Cuerpos de Lewy (DCL) es la segunda causa más frecuente de demencia neurodegenerativa en el adulto mayor después del Alzheimer. Su diagnóstico clínico se basa en una tríada patognomónica central:\nFluctuaciones cognitivas: Variaciones pronunciadas en la atención y estado de alerta de un día a otro (o de una hora a otra).\nAlucinaciones visuales complejas y bien formadas: Típicamente precoces, donde el paciente ve personas, niños o animales de forma muy detallada.\nParkinsonismo motor espontáneo: Rigidez, bradicinesia y alteración del equilibrio que aparecen tempranamente junto a la demencia (a diferencia del Parkinson clásico donde la demencia aparece años después del trastorno motor).\nUn dato de seguridad farmacológica vital evaluado en la viñeta es la extrema sensibilidad a los neurolépticos/antipsicóticos típicos (como el Haloperidol): administrarlos desencadena un parkinsonismo irreversible o reacciones catatónicas graves. Histopatológicamente se caracteriza por el depósito de Cuerpos de Lewy (agregados intraneuronales de la proteína alfa-sinucleína) en la corteza cerebral, sistema límbico y sustancia negra.",
    keyPoints: [
      ,
    ],
  }
];
