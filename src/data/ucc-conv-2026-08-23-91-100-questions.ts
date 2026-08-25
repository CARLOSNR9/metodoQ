import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · Preguntas #91–#100.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_08_23_91_100_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-08-23-91",
    university: "UCC",
    examArea: "PEDIATRÍA - CIRUGÍA NEONATAL / NEUROLOGÍA",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","pediatr-a","pediatr","a"],
    statement: "Un recién nacido a término es evaluado a las 36 horas de vida por no haber presentado deposición meconial (ausencia de paso de meconio en las primeras 24-48 horas). El neonato presenta distensión abdominal progresiva y vómitos biliosos. Al examen físico: abdomen timpánico y tenso. Al realizar un tacto rectal cuidadoso, la ampolla rectal se percibe completamente vacía y estrecha; al retirar el dedo, se produce una salida explosiva de gas y meconio fétido a presión (Signo del tapón/géiser positivo), con alivio temporal de la distensión abdominal. Una radiografía de abdomen muestra asas delgadas y colon proximal muy dilatados con un colon distal colapsado. Ante la alta sospecha de Enfermedad de Hirschsprung (Megacolon Aganglionar Congénito), ¿cuál es el examen histopatológico de elección (Gold Standard) que confirma el diagnóstico definitivo y qué hallazgo de tinción histoquímica es característico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Biopsia rectal por succión de la mucosa y submucosa (mínimo a 2 cm de la línea pectínea) que demuestra ausencia de células ganglionares en los plexos de Meissner y Auerbach e hipertrofia de fibras colinérgicas con Acetilcolinesterasa (AChE) positiva.",
      },
      {
        id: "B",
        label: "B",
        text: "Biopsia muscular de la capa serosa del colon por laparotomía que demuestra necrosis de células de Cajal.",
      },
      {
        id: "C",
        label: "C",
        text: "Manometría anorrectal exclusiva que confirma el reflejo rectoanal inhibitorio (RRAI) presente y acelerado.",
      },
      {
        id: "D",
        label: "D",
        text: "Colon por enema baritado inmediato para mapeo de la zona de transición con posterior resección profiláctica sin biopsia.",
      },
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con Enfermedad de Hirschsprung (Megacolon Aganglionar Congénito). Fisiopatológicamente, se produce por una falla en la migración cefalocaudal de las células de la cresta neural durante las semanas 5 a 12 de gestación. Esto deja un segmento distal del intestino (siempre iniciando en el esfínter anal interno y extendiéndose en longitud variable en dirección proximal, afectando en el 80% de los casos al rectosigmoides) completamente privado de células ganglionares en los plexos mientérico (Auerbach) y submucoso (Meissner). El segmento aganglionar no se puede relajar (permanece tónico y contraído), produciendo una obstrucción intestinal funcional. La clínica neonatal es patognomónica: retraso en la expulsión del meconio (>48 horas), distensión y la salida explosiva de heces/gas tras el tacto rectal.\nEl estándar de oro diagnóstico indiscutido es la Biopsia Rectal por Succión: se debe tomar por encima de la línea pectínea (para no confundir con la zona de aganglionosis fisiológica del esfínter) e incluir submucosa. Muestra dos hallazgos patognomónicos:\nAusencia de células ganglionares parasimpáticas.\nHipertrofia de filetes nerviosos no mielinizados con tinción positiva para Acetilcolinesterasa (AChE).",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-92",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / CUIDADO INTENSIVO",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","medicina-interna","medicina","interna"],
    statement: "Un hombre de 62 años es ingresado a la UCI con diagnóstico de un Infarto Agudo de Miocardio con elevación del ST (IAMCEST) de cara anterior, revascularizado mediante angioplastia primaria a las 4 horas del inicio de los síntomas. A las 48 horas del procedimiento, mientras se encuentra en reposo, el paciente presenta un episodio súbito de colapso cardiovascular. Al monitor se observa una Taquicardia Ventricular monomórfica sostenida a 180 lpm. El paciente pierde el conocimiento de forma inmediata, no responde al llamado y al evaluar los pulsos carotídeo y femoral, estos se encuentran totalmente ausentes (Taquicardia Ventricular Sin Pulso). ¿Cuál es el paso INMEDIATO de reanimación avanzada (ACLS) que debe realizarse en menos de 30 segundos para revertir este paro cardíaco?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cardioversión Eléctrica Sincronizada a 100 Joules.",
      },
      {
        id: "B",
        label: "B",
        text: "Desfibrilación Eléctrica No Sincronizada a máxima energía (360 J monofásico o 200 J bifásico) e inicio inmediato de compresiones torácicas.",
      },
      {
        id: "C",
        label: "C",
        text: "Bolo de Amiodarona 300 mg IV en infusión rápida durante 10 minutos.",
      },
      {
        id: "D",
        label: "D",
        text: "Adrenalina 1 mg IV directa seguida de intubación orotraqueal sin descargas eléctricas.",
      },
    ],
    correctOptionId: "B",
    explanation: "En el algoritmo de Soporte Vital Cardiovascular Avanzado (ACLS) para Paro Cardíaco, los ritmos se dividen estrictamente en dos categorías:\nRitmos Desfibrilables: Fibrilación Ventricular (FV) y Taquicardia Ventricular SIN PULSO (TVSP).\nRitmos NO Desfibrilables: Asistolia y Actividad Eléctrica Sin Pulso (AESP).\nEl punto crítico evaluado aquí es la distinción entre Cardioversión Sincronizada y Desfibrilación:\nCardioversión Sincronizada: Se usa en pacientes CON PULSO que tienen taquiarritmias inestables (ej. TV con pulso, TSV inestable, FA rápida inestable). El desfibrilador lee la onda R para no descargar durante la repolarización (onda T) y evitar precipitar FV.\nDesfibrilación No Sincronizada: Se usa en ritmos SIN PULSO (FV y TVSP). Al no haber pulso ni perfusión, el paciente está en Paro Cardíaco. Intentar \"sincronizar\" un ritmo en un paciente en paro retrasará la descarga (o el desfibrilador se negará a descargar si no detecta ondas R claras). La indicación de ORO ante una TV sin pulso es la Desfibrilación inmediata no sincronizada a máxima energía, seguida de 2 minutos de RCP de alta calidad.",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-93",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / NEUROLOGÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","medicina-interna","medicina","interna"],
    statement: "Una mujer de 32 años consulta por un cuadro de 6 meses de amenorrea secundaria (ausencia de ciclos menstruales) y galactorrea espontánea bilateral (secreción láctea por los pezones no asociada al parto). Niega uso de anticonceptivos u otros medicamentos. En el último mes ha comenzado a quejarse de cefalea frontal constante y una \"pérdida de la visión lateral\" que le hace tropezar con objetos a los lados. Al examen oftalmológico de campos visuales mediante campimetría por confrontación, se confirma una Hemianopsia Bitemporal heterónima. Laboratorios: Prueba de embarazo (β-hCG) negativa. Nivel de Prolactina sérica reportado en 280 ng/mL (Valor normal < 25 ng/mL). Una Resonancia Magnética de silla turca confirma la presencia de un Macroadenoma Hipofisiario de 1.8 cm que comprime el quiasma óptico. ¿Cuál es el tratamiento de PRIMERA LÍNEA de elección para este tumor neuroendocrino?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Resección quirúrgica transesfenoidal endoscópica de urgencia para descomprimir el quiasma óptico.",
      },
      {
        id: "B",
        label: "B",
        text: "Tratamiento médico con Agonistas Dopaminérgicos (Cabergolina o Bromocriptina) por vía oral.",
      },
      {
        id: "C",
        label: "C",
        text: "Radioterapia estereotáxica enfocada (Gamma Knife) sobre la silla turca.",
      },
      {
        id: "D",
        label: "D",
        text: "Análogos de Somatostatina (Octreotide) en infusión mensual.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con un Prolactinoma (Macroadenoma hipofisiario secretor de Prolactina). Es el tumor funcional de la hipófisis más frecuente. La hiperprolactinemia inhibe la secreción pulsátil de GnRH en el hipotálamo, causando hypogonadismo (amenorrea e infertilidad) y galactorrea. Al crecer el tumor (>1 cm = Macroadenoma), se extiende hacia arriba fuera de la silla turca y comprime el Quiasma Óptico (donde se cruzan las fibras nasales de la retina que ven el campo visual temporal), produciendo el signo neuro-oftalmológico patognomónico: Hemianopsia Bitemporal.\nAquí reside la gran \"excepción quirúrgica\" de la neurocirugía endocrina: A diferencia de TODOS los demás tumores hipofisiarios compresivos (que se operan si comprimen la vía óptica), los Prolactinomas se tratan de PRIMERA LÍNEA con manejo MÉDICO, incluso si son macroadenomas y causan alteración visual. Los Agonistas Dopaminérgicos (Cabergolina de elección por mayor potencia y tolerancia, o Bromocriptina) simulan a la dopamina endógena (el inhibidor fisiológico de la prolactina). Este tratamiento no solo normaliza los niveles de prolactina y devuelve los ciclos menstruales, sino que induce una reducción (encogimiento) masiva y rápida del tamaño del tumor en el 80-90% de los casos, liberando el quiasma óptico y recuperando la visión sin necesidad de bisturí. La cirugía transesfenoidal se reserva solo si hay falla o intolerancia al tratamiento médico.",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-94",
    university: "UCC",
    examArea: "PEDIATRÍA - INFECTOLOGÍA / REUMATOLOGÍA",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","pediatr-a","pediatr","a"],
    statement: "Un niño de 8 años es llevado a la consulta de pediatría por presentar, desde hace dos semanas, movimientos involuntarios bruscos, rápidos, arrítmicos y sin propósito en la cara y las extremidades superiores (movimientos coreicos), que desaparecen durante el sueño y empeoran con el estrés. La madre refiere que el niño se ha vuelto torpe, se le caen los cuadernos en la escuela y su letra se ha vuelto Ininteligible. Además, muestra labilidad emocional (llora o ríe sin motivo). Al interrogatorio, la madre recuerda que hace un mes el niño presentó un episodio de faringoamigdalitis febril severa que no recibió antibióticos. Al examen físico: alerta, se evidencian las coreas y, al pedirle que apriete los dedos del examinador, se percibe una fuerza de prensión fluctuante e intermitente (Signo del ordeñador / Milkmaid's grip). La auscultación cardíaca revela un soplo holosistólico en el ápex irradiado a la axila (Insuficiencia Mitral). ¿Cuál es el diagnóstico neurológico de esta manifestación tardía y cuál es la profilaxis antibiótica de larga duración requerida?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome de Gilles de la Tourette; profilaxis con Haloperidol por 5 años.",
      },
      {
        id: "B",
        label: "B",
        text: "Corea de Sydenham (Mal de San Vito) como criterio mayor de Fiebre Reumática; profilaxis con Penicilina G Benzatínica intramuscular cada 3 a 4 semanas.",
      },
      {
        id: "C",
        label: "C",
        text: "Corea de Huntington infantil; no requiere profilaxis antibiótica.",
      },
      {
        id: "D",
        label: "D",
        text: "PANDAS (Trastorno Neuropsiquiátrico Autoinmune Pediátrico); tratamiento con azitromicina oral por 10 días.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con la Corea de Sydenham, la manifestación neurológica patognomónica y criterio mayor de Jones para el diagnóstico de Fiebre Reumática Aguda. Ocurre semanas o meses después de una infección faríngea no tratada por Streptococcus pyogenes (Estreptococo del Grupo A). Fisiopatológicamente, se produce por mimetismo molecular: los anticuerpos generados contra la bacteria reaccionan cruzadamente contra los ganglios basales (núcleo caudado y putamen) en el cerebro y contra las válvulas cardíacas (carditis reumática, afectando principalmente la válvula mitral).\nClínica de la Corea de Sydenham:\nMovimientos involuntarios rápidos e incoordinados (corea) que cesan al dormir.\nSigno del ordeñador (Milkmaid's grip): Incapacidad para mantener una prensión sostenida al apretar la mano del médico.\nSigno de la lengua en dardo (Snake tongue): Incapacidad para mantener la lengua protruida.\nLabilidad emocional y cambios de conducta.\nUna vez diagnosticada la Fiebre Reumática, para prevenir nuevos brotes que destruyan la válvula mitral, el niño DEBE recibir Profilaxis Secundaria Antibiótica de larga duración: inyecciones de Penicilina G Benzatínica IM cada 3 a 4 semanas (durante al menos 10 años o hasta cumplir 21 años si no hubo carditis grave, o de por vida si hay daño valvular severo).",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-95",
    university: "UCC",
    examArea: "MEDICINA INTERNA - HEMATOLOGÍA / INFECTOLOGÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","medicina-interna","medicina","interna"],
    statement: "Un hombre de 45 años, previamente sano, es llevado a urgencias por presentar fiebre de 39°C, ictericia en piel y escleras, y confusión mental fluctuante en los últimos dos días. Al examen físico: petequias purpúricas diseminadas en el tórax y las extremidades. Los laboratorios de ingreso revelan: Hemoglobina 6.5 g/dL, Plaquetas en 14,000/mm³ (Trombocitopenia grave), Creatinina 2.1 mg/dL y Bilirrubina Total 4.8 mg/dL (a predominio indirecto) con LDH en 1,450 U/L. Tiempos de coagulación (TP y TPTa) estrictamente NORMALES y Fibrinógeno normal. El frotis de sangre periférica confirma la presencia de múltiples esquizocitos (>2% por campo). El Test de Coombs directo es negativo. Ante la pentalogía clínica clásica de Púrpura Trombocitopénica Trombótica (PTT) por deficiencia de la metaloproteasa ADAMTS13, ¿cuál es el procedimiento terapéutico de rescate de ORO que debe iniciarse de inmediato y qué hemoderivado está CONTRAINDICADO transfundir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar Plasmaféresis (Recambio Plasmático Terapéutico) urgente con reemplazo de plasma fresco congelado; está contraindicada la transfusión rutinaria de plaquetas.",
      },
      {
        id: "B",
        label: "B",
        text: "Transfusión masiva de plaquetas de inmediato; está contraindicada la plasmaféresis por riesgo de sobrecarga de volumen.",
      },
      {
        id: "C",
        label: "C",
        text: "Infusión de Complejo Protrombínico concentrado; está contraindicada la heparina no fraccionada.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Eculizumab intravenoso; está contraindicada la corticoterapia por riesgo de sepsis.",
      },
    ],
    correctOptionId: "A",
    explanation: "La paciente presenta la pentalogía clásica de la Púrpura Trombocitopénica Trombótica (PTT):\nAnemia hemolítica microangiopática (con esquizocitos en frotis y LDH alta).\nTrombocitopenia severa por consumo.\nSíntomas neurológicos fluctuantes (confusión, cefalea, paresias).\nFalla renal (usualmente leve/moderada).\nFiebre.\nFisiopatológicamente, se produce por la falta o inhibición autoinmune de la enzima ADAMTS13 (una metaloproteasa que normalmente \"recorta\" los megamultímeros del Factor de von Willebrand). Al faltar la enzima, los multímeros gigantes de von Willebrand atrapan y agregan plaquetas en toda la microcirculación, formando microtrombos de plaquetas puras que ocluyen los capilares del cerebro y riñón (los glóbulos rojos chocan con las redes de fibrina/plaquetas y se rompen en esquizocitos). Un dato de laboratorio crucial para los exámenes: los tiempos de coagulación (TP y TPTa) son NORMALES porque la cascada de coagulación soluble no está consumida (a diferencia de la CID donde los tiempos están muy alargados).\nManejo de Emergencia:\nTratamiento de ORO: Plasmaféresis (Recambio Plasmático Terapéutico) urgente. Remueve el autoanticuerpo anti-ADAMTS13 y el plasma fresco aportado repone la enzima faltante.\nPROHIBICIÓN ABSOLUTA: NO transfundir plaquetas de rutina. Transfundir plaquetas en la PTT es \"echarle gasolina al fuego\": las plaquetas nuevas transfundidas se agregarán inmediatamente a los multímeros del vWF, creando miles de nuevos microtrombos que infartarán el cerebro y el corazón del paciente.",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-96",
    university: "UCC",
    examArea: "PEDIATRÍA - GASTROENTEROLOGÍA / INFECTOLOGÍA",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","pediatr-a","pediatr","a"],
    statement: "Un lactante de 9 meses es traído a urgencias por un cuadro de 3 días de diarrea acuosa profusa (hasta 10 deposiciones al día), sin sangre ni moco, acompañada de vómitos repetitivos y fiebre de 38.3°C. El niño asiste a una guardería infantil. Al examen físico: llora sin lágrimas, mucosas secas, fontanela anterior deprimida, llenado capilar de 4 segundos y pliegue cutáneo abdominal que se deshace muy lentamente (>2 segundos), configurando una Deshidratación Grave con choque hipovolémico incipiente. Los electrolitos muestran hipernatremia leve por pérdida de agua libre. ¿Cuál es la terapia de reanimación hídrica e intervención preventiva para la comunidad MÁS adecuada según las guías PALS y la OMS?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reanimación hídrica IV inmediata con bolos de Solución Salina 0.9% (20 mL/kg), seguida de SRO al recuperar la conciencia, y verificar vacunación contra Rotavirus.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar Sales de Rehidratación Oral (SRO) por sonda nasogástrica inmediatamente a pesar de los vómitos y el llenado capilar de 4 segundos.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar loperamida en gotas para detener la diarrea acuosa e inyectar ondansetrón IV.",
      },
      {
        id: "D",
        label: "D",
        text: "Prescribir ciprofloxacino oral para erradicar la bacteriemia por Campylobacter.",
      },
    ],
    correctOptionId: "A",
    explanation: "El lactante cursa con una Gastroenteritis Aguda Severa (muy probablemente por Rotavirus, el agente viral gastrointestinal más común y grave en lactantes no vacunados en guarderías). Fisiopatológicamente, el virus destruye los enterocitos maduros de las vellosidades del intestino delgado, causando una diarrea osmotico-secretora masiva con pérdida severa de agua libre y electrolitos.\nManejo según el Grado de Deshidratación (OMS/PALS):\nDeshidratación Grave / Choque (Llenado capilar >3-4s, fontanela deprimida, letargia): Es una EMERGENCIA MEDICA. La vía oral/SRO NO es suficiente ni segura de primera línea. Se debe colocar una vía periférica o intraósea e iniciar Bolos de Cristaloides Isotónicos (Solución Salina 0.9% o Lactato de Ringer) a 20 mL/kg en 10-20 minutos, repitiendo según respuesta hasta estabilizar la perfusión. Una vez reanimado el volumen intravascular y recuperada la conciencia, se transiciona a Sales de Rehidratación Oral (SRO).\nPrevención: La vacuna oral contra Rotavirus (administrada a los 2 y 4 meses de vida) es la medida de salud pública más efectiva para prevenir la diarrea grave por este virus.\nContraindicación: Los antidiarréicos/antimotilidad (Loperamida) están TOTALMENTE CONTRAINDICADOS en pediatría por riesgo de íleo paralítico, megacolon tóxico y somnolencia.",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-97",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUMOLOGÍA / CUIDADO INTENSIVO",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","medicina-interna","medicina","interna"],
    statement: "Un hombre de 62 años, con antecedente de tabaquismo pesado e hipertensión arterial, es traído a urgencias por presentar un cuadro de 3 días de tos con expectoración purulenta, fiebre de 39°C y disnea progresiva. Al ingreso: somnoliento, desorientado, con uso de músculos accesorios de la respiración. Signos vitales: PA 85/50 mmHg, FC 125 lpm, FR 34 rpm, SatO2 80% al aire ambiente. Se auscultan crepitantes y soplo tubárico en la base pulmonar derecha. Gases arteriales con FIO2 al 21%: pH 7.22, PaCO2 68 mmHg (Hypercapnia severa), PaO2 48 mmHg (Acidosis respiratoria descompensada con falla ventilatoria). La radiografía de tórax confirma una consolidación lobar inferior derecha con broncograma aéreo. Aplicando la escala pronóstica de severidad CURB-65, ¿cuál es el puntaje de este paciente y la conducta de manejo indicada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Puntaje 1; manejo ambulatorio con Amoxicilina oral.",
      },
      {
        id: "B",
        label: "B",
        text: "Puntaje 2; hospitalización en sala general con Ceftriaxona IV.",
      },
      {
        id: "C",
        label: "C",
        text: "Puntaje 4; ingreso INMEDIATO a la Unidad de Cuidados Intensivos (UCI) e inicio de antibióticos IV de amplio espectro (Ceftriaxona + Azitromicina) y soporte ventilatorio.",
      },
      {
        id: "D",
        label: "D",
        text: "Puntaje 5; derivación a cuidados paliativos por alta tasa de mortalidad irreversible.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta una Neumonía Adquirida en la Comunidad (NAC) severa. Para decidir el lugar de manejo (ambulatorio vs. piso vs. UCI), la herramienta pronóstica estándar validada por las guías es la escala CURB-65:\nC (Confusion / Confusión): SÍ (Desorientado/somnoliento) -> 1 punto.\nU (Urea / BUN > 19 mg/dL o Urea > 42 mg/dL): Asumido alto por deshidratación/sepsis -> (Incluso sin la urea anotada, veamos el resto).\nR (Respiratory rate / FR >= 30 rpm): SÍ (FR = 34 rpm) -> 1 punto.\nB (Blood pressure / PAS < 90 mmHg o PAD <= 60 mmHg): SÍ (PA 85/50) -> 1 punto.\n65 (Edad >= 65 años): NO (Tiene 62 años) -> 0 puntos.\nSumando los puntos confirmados: Confusión (1) + FR >= 30 (1) + Hipotensión (1) = Mínimo 3 a 4 puntos (CURB-65 de 3 a 5).\nInterpretación del CURB-65:\n0 a 1 punto: Bajo riesgo -> Manejo Ambulatorio.\n2 puntos: Riesgo moderado -> Hospitalización en Piso/Sala general.\n3 a 5 puntos: Riesgo alto / Neumonía Severa (Mortalidad >20-30%) -> Requiere Ingreso a UCI / Cuidados Intensivos y cobertura antibiótica empírica doble para gérmenes típicos y atípicos (Cefalosporina 3ra gen + Macrólido o Fluoroquinolona respiratoria) junto con soporte ventilatorio por la acidosis respiratoria (pH 7.22).",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-98",
    university: "UCC",
    examArea: "PEDIATRÍA - ENDOCRINOLOGÍA / NEONATOLOGÍA",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","pediatr-a","pediatr","a"],
    statement: "Se evalúa en la sala cuna a una recién nacida a término de 24 horas de vida. A la inspección de los genitales externos, la niña presenta una evidente ambigüedad genital: clitoromegalia severa (aspecto fálico de 2.5 cm), fusión parcial de los pliegues labioescrotales con pigmentación oscura e incapacidad para palpar gónadas en los pliegues ni en los canales inguinales. La ecografía pélvica confirma la presencia de útero y trompas de Falopio normales (estructuras müllerianas derivadas). Los laboratorios de control a las 48 horas de vida muestran: Sodio sérico de 126 mEq/L (Hiponatremia), Potasio de 6.2 mEq/L (Hiperkalemia) y glucemia de 55 mg/dL. El cariotipo reporta 46,XX. ¿Cuál es el déficit enzimático suprarrenal más frecuente causante de esta forma virilizante y perdedora de sal de la Hiperplasia Suprarrenal Congénita (HSC)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Deficiencia de 17-alfa-hidroxilasa.",
      },
      {
        id: "B",
        label: "B",
        text: "Deficiencia de 21-alfa-hidroxilasa.",
      },
      {
        id: "C",
        label: "C",
        text: "Deficiencia de 11-beta-hidroxilasa.",
      },
      {
        id: "D",
        label: "D",
        text: "Deficiencia de 3-beta-hidroxiesteroide deshidrogenasa.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta una Hiperplasia Suprarrenal Congénita (HSC) variante perdedora de sal e hipervirilizante, la causa más común de ambigüedad genital en recién nacidos con genotipo femenino (46,XX).\nFisiopatológicamente, en más del 90-95% de los casos de HSC, la enzima ausente por mutación autosómica recesiva es la 21-alfa-hidroxilasa. Esta enzima es la encargada de convertir la 17-hidroxiprogesterona en desoxicorticosterona y cortisol. Al no haber 21-hidroxilasa:\nFalta de Cortisol y Aldosterona: Al no haber aldosterona, el riñón no puede retener sodio ni tirar potasio. En la 1ra-2da semana de vida, el bebé hace la crisis perdedora de sal (Hiponatremia + Hiperkalemia + Hipotensión/Choque e hipoglucemia).\nExceso de Andrógenos: Toda la materia prima metabólica (17-OH-Progesterona) que no puede bajar por la vía del cortisol se \"desvía\" masivamente hacia la vía de los andrógenos (testosterona). En una niña genéticamente 46,XX con útero y ovarios sanos, este exceso de andrógenos fetales viriliza los genitales externos (clitoromegalia y fusión labial).",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-99",
    university: "UCC",
    examArea: "MEDICINA INTERNA - RHEUMATOLOGY / INMUNOLOGÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","medicina-interna","medicina","interna"],
    statement: "Una mujer de 35 años acude a la consulta de reumatología por un cuadro de 6 meses de dolor e hinchazón en ambas manos. Refiere rigidez matutina en las articulaciones de más de 1 hora de duración que mejora progresivamente con el movimiento durante el día. Al examen físico: dolor y tumefacción caliente en las articulaciones metacarpofalángicas (MCF) e interfalángicas proximales (IFP) de ambas manos de forma estrictamente simétrica. No hay compromiso de las articulaciones interfalángicas distales (IFD). Se observan nódulos subcutáneos firmes e indoloros en la superficie extensora de ambos codos. Se solicitan paraclínicos que reportan: VSG 65 mm/h, PCR 4.5 mg/dL, Factor Reumatoide (FR) Positivo a títulos altos (1:320) y Anticuerpos contra Proteínas Cicladas Citrulinadas (Anti-CCP) fuertemente POSITIVOS (>200 U/mL). Las radiografías de manos muestran osteopenia yuxtaarticular y erosiones óseas marginales en las MCF. ¿Cuál de estos dos marcadores serológicos confiere la mayor especificidad (>95-98%) diagnóstica y predice un curso erosivo más agresivo de la Artritis Reumatoide?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Factor Reumatoide (IgM anti-IgG).",
      },
      {
        id: "B",
        label: "B",
        text: "Anticuerpos Anti-Péptidos Cíclicos Citrulinados (Anti-CCP / ACPA).",
      },
      {
        id: "C",
        label: "C",
        text: "Anticuerpos Antinucleares (ANA) patrón nucleolar.",
      },
      {
        id: "D",
        label: "D",
        text: "Anticuerpos Anti-Ro/SSA y Anti-La/SSB.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta una Artritis Reumatoide (AR) establecida de libro: poliartritis simétrica de pequeñas articulaciones (MCF e IFP, respetando típicamente las IFD que son de la osteoartritis), rigidez matutina > 1 hora, nódulos reumatoideos y erosiones en rayos X.\nEn el abordaje serológico moderno de la AR:\nFactor Reumatoide (FR): Es un anticuerpo (generalmente IgM) dirigido contra la porción Fc de la IgG humana. Es muy sensible (70-80%), pero POCO específico (70-80%), ya que puede positivizarse en muchas otras enfermedades (Lupus, Endocarditis, Hepatitis C, Síndrome de Sjögren, infecciones crónicas y ancianos sanos).\nAnticuerpos Anti-Péptidos Cíclicos Citrulinados (Anti-CCP / ACPA): Se dirigen contra proteínas donde el aminoácido arginina ha sido cambiado por citrulina en el tejido sinovial inflamado. Tienen una sensibilidad similar al FR (70-80%), pero poseen una ESPECIFICIDAD ABRUMADORA (>95-98%) para Artritis Reumatoide. Además, la presencia de Anti-CCP positivo precozmente es el marcador pronóstico más fuerte para predecir un curso agresivo, erosivo articular y progresivo de la enfermedad.",
    keyPoints: [
      ,
    ],
  },
  {
    id: "ucc-conv-2026-08-23-100",
    university: "UCC",
    examArea: "MEDICINA INTERNA - GASTROENTEROLOGÍA / CUIDADO INTENSIVO",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","medicina-interna","medicina","interna"],
    statement: "Un hombre de 48 años con antecedente de consumo crónico de alcohol es ingresado a la UCI por un cuadro de Pancreatitis Aguda Grave (Balthazar E, APACHE II de 12) secundaria a atracón etílico. Recibe reanimación hídrica guiada por metas y manejo del dolor. En su décimo día de hospitalización, tras haber estado afebril y mejorando hemodinámicamente, el paciente presenta un deterioro súbito: reaparición de fiebre alta de 39.5°C, taquicardia de 130 lpm, hipotensión (PA 85/55 mmHg) y leucocitosis que se dispara de 11,000 a 26,000/mm³ con neutrofilia y bandas. Una Tomografía Computarizada de abdomen con contraste de control revela una necrosis pancreática de más del 50% del parénquima y, de forma patognomónica, la presencia de burbujas de gas (burbujas retroperitoneales) adentro de la colección necrótica pancreática. ¿Cuál es el diagnóstico de esta complicación infecciosa letal, cómo debe confirmarse si hay duda y cuál es el abordaje de manejo moderno recomendado según el concepto de \"escalonamiento\" (Step-up approach)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Seudoquiste pancreático estéril; requiere drenaje endoscópico transgastrico con stent inmediato.",
      },
      {
        id: "B",
        label: "B",
        text: "Necrosis Pancreática Infectada; confirmada por burbujas de gas en TC (o punción con aguja fina); el manejo moderno exige antibióticos de alta penetración pancreática (Meropenem/Ciprofloxacino) y diferir el drenaje/necrosectomía quirúrgica mínimamente invasiva (Step-up) preferiblemente más de 4 semanas.",
      },
      {
        id: "C",
        label: "C",
        text: "Absceso amebiano secundario; requiere Metronidazol IV y laparotomía exploratoria abierta urgente en las primeras 12 horas.",
      },
      {
        id: "D",
        label: "D",
        text: "Trombosis de la vena esplénica con infarto gástrico; requiere anticoagulación con Heparina y gastrectomía total.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con la complicación tardía más letal de la pancreatitis: la Necrosis Pancreática Infectada.\nCronología: La necrosis estéril inicial suele infectarse por translocación bacteriana entérica en la 2da a 4ta semana de evolución (típicamente después del día 7-10). La sospecha se enciende cuando un paciente que venía \"bien\" vuelve a hacer fiebre alta, sepsis y leucocitosis en la segunda semana.\nHallazgo radiológico patognomónico: La presencia de gas (burbujas de aire) dentro de la zona de necrosis en la TC con contraste es la prueba irrefutable de que bacterias anaerobias o entéricas productoras de gas están colonizando el tejido muerto del páncreas. Si no hay gas pero la sospecha es alta, se puede hacer una Punción Aspiración con Aguja Fina (PAAF) guiada por TC para Gram y cultivo.\nManejo Moderno (Step-up Approach / Enfoque Escalonado):\nAntiguamente, ver una necrosis infectada significaba abrir el abdomen inmediatamente (laparotomía abierta). Hoy en día, los ensayos mundiales (Estudio PANTER) demostraron que la cirugía abierta temprana tiene una mortalidad altísima. El manejo moderno exige:\nPaso 1 (Médico): Iniciar antibióticos de alta penetración en el tejido pancreático (Carbapenémicos como Meropenem, o Fluoroquinolonas + Metronidazol).\nPaso 2 (Drenaje Mínimamente Invasivo): Retrasar cualquier intervención quirúrgica idealmente más de 4 semanas hasta que la necrosis se encapsule (\"Walled-off necrosis\"). Si el paciente no mejora con antibióticos, se realiza drenaje percutáneo o endoscópico transgastrico mínimamente invasivo, dejando la necrosectomía quirúrgica como último recurso.",
    keyPoints: [
      ,
    ],
  }
];
