import type { UltraEntry } from "@/lib/ultra-resumenes/types";

/** Ultra resumen MIR · Cardiología y cirugía cardiovascular. Generado desde content/ultra-resumenes/mir/cardiologia.md; no editar a mano. */
export const ENTRIES: UltraEntry[] = [
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-cardiopatia-isquemica",
    "title": "Cardiopatía isquémica",
    "level": 1,
    "meta": "27 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-conceptos-basicos",
    "title": "Conceptos básicos",
    "points": [
      "Angina típica: dolor opresivo centrotorácico, con el esfuerzo, que cede con reposo o nitroglicerina en minutos. Estable si lleva >2 meses sin cambios.",
      "Inestable: de reposo, de reciente comienzo, progresiva o postinfarto.",
      "Infarto = troponina elevada + datos de isquemia. Tipo 1: rotura de placa; tipo 2: desequilibrio entre aporte y demanda.",
      "Miocardio aturdido: isquemia aguda breve, se recupera solo. Hibernado: isquemia crónica, viable; mejora al revascularizar.",
      "MINOCA (coronarias sin lesiones significativas): descartar causas no cardiacas, vasoespasmo o embolia; la RM encuentra la causa en la mayoría.",
      "Dejar de fumar es la medida aislada más beneficiosa."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-sindrome-coronario-cronico-que-prueba-pedir",
    "title": "Síndrome coronario crónico: qué prueba pedir",
    "points": [
      "Según la probabilidad pretest: muy baja → se descarta; intermedia → prueba no invasiva; muy alta → coronariografía directa.",
      "Probabilidad baja-intermedia: TC coronario (excelente valor predictivo negativo). Intermedia-alta: prueba de isquemia con imagen (eco de estrés, gammagrafía, RM).",
      "Ergometría: segunda línea; no valorable con bloqueo de rama izquierda, digoxina o hipertrofia. Contraindicada en la primera semana del infarto, estenosis aórtica severa sintomática o insuficiencia cardiaca descompensada.",
      "Gammagrafía: defecto en esfuerzo que se rellena en reposo = isquemia; defecto fijo = necrosis.",
      "Lesión intermedia en coronariografía (40-90 %): medir reserva fraccional de flujo (FFR ≤0,80 es significativa)."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-tratamiento-del-sindrome-coronario-cronico",
    "title": "Tratamiento del síndrome coronario crónico",
    "points": [
      "Pronóstico: aspirina (o clopidogrel) + estatina potente con LDL <55 mg/dl; si no se llega, ezetimiba y después iPCSK9.",
      "IECA si hay HTA, diabetes o enfermedad renal; iSGLT2 o aGLP1 en diabéticos.",
      "Síntomas: betabloqueante o antagonista del calcio; después nitratos, ranolazina o ivabradina.",
      "No combinar ivabradina con verapamilo o diltiazem.",
      "Angina vasoespástica (joven, reposo nocturno): antagonistas del calcio y evitar betabloqueantes."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-cuando-revascularizar-y-como",
    "title": "Cuándo revascularizar y cómo",
    "points": [
      "Por síntomas: angina refractaria a tratamiento médico.",
      "Por pronóstico: tronco común, descendente anterior proximal o enfermedad de 3 vasos.",
      "Cirugía de elección en tronco y 3 vasos, sobre todo si hay diabetes o FEVI baja. Angioplastia si la anatomía es sencilla (SYNTAX bajo).",
      "Arteria mamaria interna izquierda a la descendente anterior: el injerto con mejor permeabilidad a largo plazo."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-antiagregacion-tras-un-stent",
    "title": "Antiagregación tras un stent",
    "points": [
      "Síndrome coronario agudo: aspirina + prasugrel (o ticagrelor) 12 meses; clopidogrel si hay alto riesgo de sangrado o tras fibrinólisis.",
      "Síndrome coronario crónico: aspirina de por vida + clopidogrel 6 meses.",
      "Si además necesita anticoagulación (por ejemplo FA): triple terapia solo ~1 semana, luego anticoagulante + clopidogrel hasta 6-12 meses, después solo anticoagulante.",
      "Nunca dos inhibidores P2Y12 a la vez. Prasugrel contraindicado si hubo ictus o AIT."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-infarto-con-elevacion-del-st-reperfusion",
    "title": "Infarto con elevación del ST: reperfusión",
    "points": [
      "ECG en <10 minutos; no esperar a la troponina para reperfundir.",
      "Angioplastia primaria si se puede hacer en <2 h desde el diagnóstico.",
      "Si no, fibrinólisis en <10 minutos (útil hasta 12 h); después coronariografía en 2-24 h, o angioplastia de rescate si fracasa.",
      "Oxígeno solo si la SatO2 es <90 %.",
      "Más de 48 h y asintomático: no se revasculariza la arteria responsable."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-infarto-sin-elevacion-del-st",
    "title": "Infarto sin elevación del ST",
    "points": [
      "Troponina ultrasensible a las 0 h y 1-2 h: si ambas son negativas y el riesgo es bajo, alta.",
      "Muy alto riesgo (inestable, arritmias, angina refractaria): coronariografía en <2 h.",
      "Alto riesgo (cambios del ST, troponina positiva, GRACE >140): en <24 h.",
      "Anticoagulación con enoxaparina o fondaparinux; en el SCACEST, heparina sódica."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-localizacion-y-evolucion-en-el-ecg",
    "title": "Localización y evolución en el ECG",
    "points": [
      "Anterior V1-V4; lateral I, aVL, V5-V6; inferior II, III, aVF; posterior: descenso del ST en V1-V2.",
      "En todo infarto inferior, mirar V3R-V4R (ventrículo derecho).",
      "ST elevado persistente >6 meses tras un infarto: aneurisma ventricular.",
      "Troponina: sube a las pocas horas y dura 7-14 días."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-tratamiento-al-alta-del-infarto",
    "title": "Tratamiento al alta del infarto",
    "points": [
      "Aspirina indefinida + P2Y12, estatina potente (LDL <55), IECA y betabloqueante (claro si FEVI ≤40 %).",
      "FEVI ≤40 %: añadir el resto del tratamiento de insuficiencia cardiaca (INRA, ARM, iSGLT2).",
      "Rehabilitación cardiaca.",
      "Revalorar la FEVI pasados >40 días antes de decidir un desfibrilador."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-complicaciones-del-infarto",
    "title": "Complicaciones del infarto",
    "points": [
      "Killip: I sin insuficiencia cardiaca, II crepitantes o 3R, III edema agudo de pulmón, IV shock.",
      "Rotura de pared libre (1-4 días, mujer mayor, primer infarto): taponamiento con disociación electromecánica → cirugía.",
      "Rotura del tabique (infarto anterior): insuficiencia cardiaca + soplo pansistólico + salto oximétrico en VD.",
      "Insuficiencia mitral por rotura de músculo papilar (infarto inferior): edema de pulmón y shock → cirugía urgente.",
      "Infarto de VD: hipotensión, ingurgitación yugular y pulmones limpios → fluidos; evitar nitratos y diuréticos.",
      "Ritmo idioventricular acelerado: signo de reperfusión, no se trata. Bloqueo AV en infarto inferior: suele ser transitorio.",
      "Pericarditis tardía (Dressler): aspirina o AINE; no anticoagular si hay derrame."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-troponina-elevada-sin-enfermedad-coronaria",
    "title": "Troponina elevada sin enfermedad coronaria",
    "points": [
      "Cardiacas: miocarditis, takotsubo, insuficiencia cardiaca, disección, estenosis aórtica, taquiarritmias, contusión, tóxicos (antraciclinas, 5-FU).",
      "No cardiacas: TEP, sepsis, insuficiencia renal, ictus o hemorragia subaracnoidea, rabdomiólisis."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-insuficiencia-cardiaca",
    "title": "Insuficiencia cardiaca",
    "level": 1,
    "meta": "23 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-diagnostico-de-la-insuficiencia-cardiaca",
    "title": "Diagnóstico de la insuficiencia cardiaca",
    "points": [
      "Si la historia y el ECG son normales, prácticamente se descarta.",
      "Péptidos natriuréticos bajos descartan (BNP <35, NT-proBNP <125 en ambulatorio); si están altos → ecocardiograma.",
      "FEVI reducida: <50 % (en el tratamiento se habla de ≤40 %). Preservada: ≥50 % con datos de disfunción diastólica.",
      "BNP falsamente alto en insuficiencia renal y FA; falsamente bajo en obesidad.",
      "Clínica izquierda: disnea, ortopnea, disnea paroxística nocturna. Derecha: ingurgitación yugular, hepatomegalia, edemas.",
      "NYHA: I sin limitación, II ligera, III con menos de la actividad habitual, IV en reposo."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-fevi-reducida-los-4-pilares-desde-el-principio",
    "title": "FEVI reducida: los 4 pilares desde el principio",
    "points": [
      "Ya no se escalona: se empiezan los 4 grupos desde el diagnóstico, incluso durante el ingreso cuando el paciente está estable.",
      "1) INRA (sacubitril-valsartán) de elección; si no, IECA o ARA-II.",
      "2) Betabloqueante con evidencia: carvedilol, metoprolol, bisoprolol o nebivolol.",
      "3) Antagonista mineralocorticoide: espironolactona o eplerenona (no si FG <30 o hiperpotasemia).",
      "4) iSGLT2: dapagliflozina o empagliflozina, con o sin diabetes.",
      "Para controlar la congestión, diuréticos de asa; vigilar el peso diario."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-tratamientos-anadidos-en-fevi-reducida",
    "title": "Tratamientos añadidos en FEVI reducida",
    "points": [
      "Ivabradina: FEVI ≤35 %, ritmo sinusal y FC ≥70 pese a betabloqueante.",
      "Resincronización: FEVI ≤35 % con QRS ancho (mejor si bloqueo de rama izquierda y QRS ≥150 ms).",
      "Desfibrilador: prevención de muerte súbita con FEVI ≤35 % sintomática pese a tratamiento óptimo.",
      "Hidralazina + dinitrato: pacientes de raza negra o intolerantes a IECA/ARA-II/INRA.",
      "Hierro intravenoso si hay ferropenia (ferritina <100, o 100-299 con saturación de transferrina <20 %).",
      "Evitar AINE, glitazonas y verapamilo/diltiazem."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-fevi-preservada",
    "title": "FEVI preservada",
    "points": [
      "Típica de ancianas hipertensas con comorbilidades.",
      "iSGLT2 y antagonistas mineralocorticoides mejoran el pronóstico.",
      "Diuréticos si hay congestión, sin quitar demasiada precarga; controlar la presión y la frecuencia en FA.",
      "Obesidad: semaglutida o tirzepatida mejoran síntomas y capacidad de ejercicio."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-edema-agudo-de-pulmon-y-shock-cardiogenico",
    "title": "Edema agudo de pulmón y shock cardiogénico",
    "points": [
      "Sentar al paciente, O2 si SatO2 <90 % (ventilación no invasiva si hay trabajo respiratorio), furosemida intravenosa.",
      "Vasodilatador (nitroglicerina) si la PAS es >110; si hay hipotensión, inotrópicos o noradrenalina.",
      "Morfina solo en casos seleccionados. Betabloqueantes contraindicados en la fase aguda.",
      "Shock refractario: dispositivos de asistencia (balón de contrapulsación, Impella, ECMO); el balón está contraindicado en insuficiencia aórtica y disección."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-trasplante-cardiaco",
    "title": "Trasplante cardiaco",
    "points": [
      "Insuficiencia cardiaca avanzada pese a todo tratamiento.",
      "Contraindicaciones: hipertensión pulmonar grave irreversible, cáncer activo, infección activa, consumo de tóxicos, comorbilidad grave.",
      "Primer año: rechazo agudo (diagnóstico por biopsia endomiocárdica) e infecciones (CMV).",
      "Después del primer año, la principal causa de muerte es la enfermedad vascular del injerto (infartos silentes por denervación)."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-enfermedades-de-la-aorta-y-patologia-arterial",
    "title": "Enfermedades de la aorta y patología arterial",
    "level": 1,
    "meta": "21 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-aneurismas-lo-general",
    "title": "Aneurismas: lo general",
    "points": [
      "Localización más frecuente: aorta abdominal infrarrenal (aterosclerosis, varón fumador). Después, aorta torácica ascendente y poplítea.",
      "Cribado con ecografía en varones de 65 años fumadores o exfumadores.",
      "La mayoría son asintomáticos; la complicación típica es la rotura: dolor, hipotensión y masa pulsátil (puede imitar un cólico renal).",
      "Tratamiento médico: dejar de fumar, controlar presión y lípidos.",
      "Un aneurisma poplíteo obliga a buscar uno aórtico (y al revés)."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-cuando-operar-un-aneurisma",
    "title": "Cuándo operar un aneurisma",
    "points": [
      "Aorta abdominal: ≥55 mm en varones y ≥50 mm en mujeres, si crece rápido (>10 mm/año) o da síntomas.",
      "Aorta ascendente: ≥55 mm en general; ≥50 mm en Marfan o bicúspide con factores de riesgo; ≥45 mm en Loeys-Dietz o si se opera la válvula aórtica.",
      "Abdominal: cirugía abierta si el riesgo es bajo; endoprótesis (EVAR) si el riesgo es alto. Roto: EVAR si la anatomía lo permite.",
      "Poplíteo >2 cm o sintomático: exclusión y bypass."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-diseccion-aortica",
    "title": "Disección aórtica",
    "points": [
      "Factor de riesgo principal: hipertensión. Otros: Marfan, Ehlers-Danlos, bicúspide, coartación, Turner, embarazo.",
      "Dolor brusco y desgarrador irradiado a la espalda, asimetría de pulsos, insuficiencia aórtica aguda, déficit neurológico.",
      "Stanford A: afecta a la aorta ascendente → cirugía urgente siempre. Stanford B: solo descendente → tratamiento médico salvo complicaciones (endoprótesis).",
      "Diagnóstico: TC con contraste; ecocardiograma transesofágico si está inestable.",
      "Tratamiento inicial: betabloqueante intravenoso y analgesia para PAS <120 y FC ~60; después vasodilatador si hace falta.",
      "Nunca anticoagular, fibrinolisar ni poner balón de contrapulsación."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-oclusion-arterial-aguda",
    "title": "Oclusión arterial aguda",
    "points": [
      "Embolia (FA): inicio brusco, sin claudicación previa, pulsos contralaterales normales; la femoral es la localización típica.",
      "Trombosis: en paciente con claudicación previa y circulación colateral.",
      "Clínica de las 5 P: dolor, palidez, ausencia de pulso, parestesias y parálisis.",
      "Heparina intravenosa y revascularización urgente (embolectomía con Fogarty) si la extremidad está amenazada; amputación si no es viable."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-isquemia-cronica-de-miembros-inferiores",
    "title": "Isquemia crónica de miembros inferiores",
    "points": [
      "Factores: tabaco y diabetes. Localización más frecuente: femoropoplítea (claudicación en la pantorrilla).",
      "Leriche (aortoilíaca): claudicación glútea y disfunción eréctil.",
      "Fontaine: I asintomático, II claudicación (IIa >150 m, IIb <150 m), III dolor en reposo, IV lesiones tróficas.",
      "Índice tobillo-brazo ≤0,9 diagnostica; >1,4 indica arterias rígidas (diabetes, insuficiencia renal).",
      "Tratamiento: dejar de fumar, ejercicio, estatina, antiagregación si hay síntomas. Revascularizar si hay isquemia crítica o claudicación invalidante.",
      "Pseudoclaudicación por canal lumbar estrecho: mejora al sentarse o flexionar el tronco."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-carotidas-y-circulacion-mesenterica",
    "title": "Carótidas y circulación mesentérica",
    "points": [
      "Estenosis carotídea sintomática 50-99 %: endarterectomía, idealmente en <2 semanas. Asintomática 60-99 %: valorar si la esperanza de vida es buena. Oclusión completa: no se opera.",
      "Isquemia mesentérica aguda: dolor intenso con exploración anodina en paciente con FA → angio-TC.",
      "Isquemia mesentérica crónica: dolor tras comer y pérdida de peso por miedo a comer.",
      "Robo de la subclavia: síntomas neurológicos al mover el brazo."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-taquicardias",
    "title": "Taquicardias",
    "level": 1,
    "meta": "17 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-enfoque-de-cualquier-taquicardia",
    "title": "Enfoque de cualquier taquicardia",
    "points": [
      "Inestable → cardioversión eléctrica sincronizada inmediata.",
      "QRS ancho y regular: tratar como taquicardia ventricular; nunca verapamilo ni diltiazem intravenoso.",
      "A favor de TV: cardiopatía estructural o infarto previo (el mejor predictor), disociación AV, QRS muy ancho, concordancia en precordiales.",
      "QRS estrecho regular a 150 lpm: pensar en flúter 2:1.",
      "Maniobras vagales y adenosina: frenan transitoriamente la sinusal, desenmascaran FA o flúter y cortan la taquicardia paroxística supraventricular."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-fibrilacion-auricular-anticoagulacion",
    "title": "Fibrilación auricular: anticoagulación",
    "points": [
      "La arritmia sostenida más frecuente; complicación más frecuente: insuficiencia cardiaca; la más temida: ictus.",
      "Anticoagular es lo único que mejora la supervivencia. Se decide por la escala CHA2DS2-VA, nunca por el tipo de FA.",
      "ACOD de elección; acenocumarol/warfarina (INR 2-3) solo si hay estenosis mitral moderada-grave o prótesis mecánica.",
      "La antiagregación no sirve para prevenir ictus en la FA. Si no se puede anticoagular: cierre de orejuela.",
      "Miocardiopatía hipertrófica o amiloidosis con FA: anticoagular siempre."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-fibrilacion-auricular-el-episodio",
    "title": "Fibrilación auricular: el episodio",
    "points": [
      "Inestable → cardioversión eléctrica.",
      "Estable: controlar la frecuencia (<110 lpm): betabloqueante, después verapamilo/diltiazem, digoxina si hay insuficiencia cardiaca aguda.",
      "Cardioversión si dura <24 h; si dura más o no se sabe, anticoagular 3 semanas antes o descartar trombos con ecocardiograma transesofágico. Anticoagular 4 semanas después.",
      "Fármacos para revertir: flecainida o propafenona sin cardiopatía; amiodarona con cardiopatía.",
      "FA preexcitada (con WPW): no usar frenadores del nodo; procainamida o cardioversión."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-fibrilacion-auricular-prevenir-recurrencias",
    "title": "Fibrilación auricular: prevenir recurrencias",
    "points": [
      "Ablación de venas pulmonares en episodios sintomáticos repetidos (y en FEVI ≤40 % mejora el pronóstico).",
      "Sin cardiopatía: flecainida o propafenona. Cardiopatía con FEVI >40 %: dronedarona. FEVI ≤40 %: amiodarona.",
      "FA permanente: control de frecuencia; si no se logra, ablación del nodo AV y marcapasos."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-fluter-y-taquicardias-supraventriculares",
    "title": "Flúter y taquicardias supraventriculares",
    "points": [
      "Flúter típico: ondas en dientes de sierra a 300 lpm por el istmo cavotricuspídeo; responde mal a fármacos; ablación curativa. Se anticoagula igual que la FA.",
      "Taquicardia intranodal: la supraventricular más frecuente, mujer joven, palpitaciones en el cuello; cede con vagales o adenosina; ablación de la vía lenta.",
      "Wolff-Parkinson-White: PR corto + onda delta + taquicardias; se asocia a Ebstein. Tratamiento definitivo: ablación de la vía accesoria.",
      "Extrasístoles: no se tratan salvo síntomas; si son muy frecuentes pueden causar miocardiopatía."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-taquicardia-ventricular-y-qt-largo",
    "title": "Taquicardia ventricular y QT largo",
    "points": [
      "TV sostenida: >30 s o inestable; origen más frecuente: cicatriz de infarto.",
      "Estable: amiodarona (procainamida fuera del contexto de infarto). Inestable: cardioversión. FV: desfibrilación.",
      "Torsade de pointes: sulfato de magnesio intravenoso y corregir la causa.",
      "QT largo adquirido: hipopotasemia, hipomagnesemia, hipocalcemia, bradicardia y fármacos (antiarrítmicos Ia y III, macrólidos, quinolonas, antipsicóticos, tricíclicos)."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-muerte-subita-y-desfibrilador",
    "title": "Muerte súbita y desfibrilador",
    "points": [
      "Causa más frecuente: cardiopatía isquémica. En jóvenes y deportistas: miocardiopatía hipertrófica.",
      "DAI en prevención secundaria: tras FV o TV con inestabilidad sin causa reversible.",
      "Prevención primaria: FEVI ≤35 % sintomática con tratamiento óptimo (esperar >40 días tras el infarto).",
      "Brugada: patrón de bloqueo de rama derecha con ST elevado en V1-V2; arritmias en reposo, sueño o fiebre. Tratar la fiebre; DAI si síncope o arritmias.",
      "QT largo congénito: betabloqueantes a todos; DAI si parada o arritmias pese a ellos.",
      "Displasia arritmogénica del VD: onda épsilon y T negativas en V1-V3; evitar el deporte de competición."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-valvulopatias",
    "title": "Valvulopatías",
    "level": 1,
    "meta": "15 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-estenosis-aortica",
    "title": "Estenosis aórtica",
    "points": [
      "La valvulopatía más preguntada. Anciano con válvula calcificada; en jóvenes, válvula bicúspide.",
      "Síntomas: angina, síncope de esfuerzo e insuficiencia cardiaca (la de peor pronóstico). Es la que más se asocia a muerte súbita.",
      "Exploración: soplo sistólico irradiado a carótidas, pulso débil y tardío, segundo ruido apagado.",
      "Severa: gradiente medio ≥40 mmHg y área ≤1 cm².",
      "Sustituir si hay síntomas o FEVI <50 %. TAVI en ≥70 años; cirugía en <70 años de bajo riesgo."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-insuficiencia-aortica",
    "title": "Insuficiencia aórtica",
    "points": [
      "Causas: degenerativa; aguda por endocarditis o disección.",
      "Pulso saltón, presión diferencial amplia, soplo diastólico en foco aórtico accesorio.",
      "Cirugía si hay síntomas, FEVI ≤50 % o ventrículo muy dilatado (diámetro telesistólico >50 mm).",
      "Aguda con insuficiencia cardiaca: cirugía urgente."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-estenosis-mitral",
    "title": "Estenosis mitral",
    "points": [
      "Casi siempre reumática; mujer de 30-40 años.",
      "Disnea, FA y embolias; la hipertensión pulmonar puede mejorar paradójicamente la disnea.",
      "ECG: P mitral y FA; el ventrículo izquierdo está respetado.",
      "Severa: área <1,5 cm². Valvuloplastia percutánea con balón de elección si la anatomía es favorable; cirugía si hay trombo en aurícula o insuficiencia mitral significativa."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-insuficiencia-mitral-y-prolapso",
    "title": "Insuficiencia mitral y prolapso",
    "points": [
      "Causa más frecuente: degenerativa (prolapso). Soplo pansistólico que irradia a la axila.",
      "Cirugía si hay síntomas o, sin síntomas, FEVI ≤60 %, ventrículo dilatado, hipertensión pulmonar o FA reciente. Reparar mejor que sustituir.",
      "Insuficiencia mitral secundaria (por dilatación del ventrículo): tratamiento de insuficiencia cardiaca y, si persiste, reparación percutánea.",
      "Prolapso mitral: clic mesosistólico; el soplo aumenta al disminuir la precarga (de pie, Valsalva)."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-valvulas-derechas-y-protesis",
    "title": "Válvulas derechas y prótesis",
    "points": [
      "Insuficiencia tricuspídea: casi siempre funcional; onda v grande y pulso hepático; en el carcinoide (con metástasis hepáticas).",
      "Prótesis biológica: >65 años, contraindicación para anticoagular o deseo de embarazo. Mecánica: <60-65 años con buena esperanza de vida.",
      "Prótesis mecánica: INR objetivo 2,5 en aórtica y 3 en mitral; nunca ACOD.",
      "Endocarditis precoz sobre prótesis (<1 año): estafilococos."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-enfermedades-del-pericardio",
    "title": "Enfermedades del pericardio",
    "level": 2,
    "meta": "14 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-pericarditis-aguda",
    "title": "Pericarditis aguda",
    "points": [
      "Causa más frecuente: vírica o idiopática, en varones jóvenes.",
      "Dolor pleurítico que mejora sentado e inclinado hacia delante; roce pericárdico.",
      "ECG: elevación cóncava y difusa del ST con descenso del PR (lo más específico).",
      "Tratamiento: AINE o aspirina a dosis altas + colchicina 3 meses (reduce recurrencias); reposo deportivo.",
      "Ingreso si fiebre alta, derrame grande, taponamiento o falta de respuesta. Corticoides solo si fracasa lo anterior.",
      "No anticoagular: riesgo de derrame hemorrágico."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-taponamiento-cardiaco",
    "title": "Taponamiento cardiaco",
    "points": [
      "Ingurgitación yugular, hipotensión y tonos apagados; pulso paradójico (la PAS cae >10 mmHg en inspiración).",
      "ECG con alternancia eléctrica. Ecocardiograma: colapso diastólico de cavidades derechas.",
      "Tratamiento: pericardiocentesis urgente y fluidos. Diuréticos y vasodilatadores están contraindicados."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-pericarditis-constrictiva",
    "title": "Pericarditis constrictiva",
    "points": [
      "Insuficiencia cardiaca derecha con ascitis llamativa, signo de Kussmaul y knock pericárdico.",
      "Calcificación pericárdica en la radiografía; TC o RM confirman.",
      "Causa: idiopática; en zonas endémicas, tuberculosis.",
      "Tratamiento: pericardiectomía (AINE si todavía hay inflamación)."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-dolor-toracico-con-st-elevado-diferenciar",
    "title": "Dolor torácico con ST elevado: diferenciar",
    "points": [
      "Pericarditis: ST cóncavo y difuso, descenso del PR.",
      "Infarto: ST convexo, localizado y con imagen especular.",
      "Prinzmetal: elevación transitoria que cede con nitroglicerina.",
      "Takotsubo: mujer posmenopáusica tras estrés, coronarias normales y balonamiento apical."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-hipertension-arterial",
    "title": "Hipertensión arterial",
    "level": 2,
    "meta": "12 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-diagnostico-de-la-hipertension",
    "title": "Diagnóstico de la hipertensión",
    "points": [
      "HTA: ≥140/90 en consulta confirmada, mejor con MAPA (24 h ≥130/80) o AMPA (≥135/85).",
      "Medir sentado tras 5 min, varias tomas y en ambos brazos.",
      "HTA de bata blanca: alta en consulta y normal fuera. Enmascarada: al revés.",
      "Objetivo general: <130/80; más laxo en ancianos frágiles."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-tratamiento-de-la-hipertension",
    "title": "Tratamiento de la hipertensión",
    "points": [
      "Lo que más baja la presión: perder peso. Además, menos sal, menos alcohol y ejercicio.",
      "Empezar con 2 fármacos en una sola pastilla: IECA o ARA-II + antagonista del calcio o tiazida. Después, triple combinación.",
      "Resistente (no controlada con 3 fármacos incluido un diurético): antes, descartar mala adherencia y bata blanca; después, espironolactona.",
      "IECA/ARA-II contraindicados en embarazo y estenosis renal bilateral. Tiazidas: evitar en gota."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-hipertension-secundaria",
    "title": "Hipertensión secundaria",
    "points": [
      "Sospechar en jóvenes, HTA resistente o de inicio brusco, hipopotasemia.",
      "Causa más frecuente: hiperaldosteronismo primario (cociente aldosterona/renina; el potasio puede ser normal).",
      "Renovascular: displasia fibromuscular en mujer joven (angioplastia) o aterosclerosis en varón mayor. Pista: empeora la función renal al dar IECA.",
      "Fármacos: AINE, anticonceptivos, corticoides, ciclosporina, cocaína, alcohol. En obesos, descartar apnea del sueño."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-urgencia-y-emergencia-hipertensiva",
    "title": "Urgencia y emergencia hipertensiva",
    "points": [
      "Urgencia (sin daño de órgano): bajar en horas o días con fármacos orales.",
      "Emergencia (con daño agudo: encefalopatía, edema de pulmón, disección, eclampsia): bajar en minutos-horas con fármacos intravenosos.",
      "HTA maligna: retinopatía con edema de papila, insuficiencia renal rápida y anemia microangiopática."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-enfermedades-del-miocardio",
    "title": "Enfermedades del miocardio",
    "level": 2,
    "meta": "12 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-miocardiopatia-hipertrofica",
    "title": "Miocardiopatía hipertrófica",
    "points": [
      "Hipertrofia ≥15 mm sin causa, habitualmente septal asimétrica; herencia autosómica dominante (genes de la miosina).",
      "Primera causa de muerte súbita en jóvenes y deportistas.",
      "Soplo sistólico que aumenta con Valsalva o al ponerse de pie y disminuye en cuclillas.",
      "Tratamiento: betabloqueantes, después verapamilo; disopiramida o mavacamten; miectomía o ablación septal si persiste la obstrucción sintomática.",
      "Evitar digoxina, nitratos y vasodilatadores. FA: anticoagular siempre.",
      "Corazón de atleta: hipertrofia simétrica que regresa al dejar de entrenar."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-miocarditis",
    "title": "Miocarditis",
    "points": [
      "Viral, en varón joven: dolor torácico, ST elevado y troponina alta con coronarias normales.",
      "Diagnóstico con RM cardiaca; biopsia si es grave (shock, arritmias, bloqueo AV).",
      "Evitar el ejercicio 3-6 meses; tratamiento de soporte."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-miocardiopatia-dilatada-y-otras-formas",
    "title": "Miocardiopatía dilatada y otras formas",
    "points": [
      "Causa más frecuente de FEVI baja: isquémica. La idiopática es la primera indicación de trasplante.",
      "Alcohólica: mejora al dejar de beber. Periparto: último mes del embarazo o primeros meses tras el parto; evitar nuevos embarazos.",
      "Antraciclinas: toxicidad dependiente de la dosis; vigilar la FEVI.",
      "Takotsubo: estrés emocional, mujer posmenopáusica, se recupera en semanas."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-miocardiopatia-restrictiva-y-amiloidosis",
    "title": "Miocardiopatía restrictiva y amiloidosis",
    "points": [
      "Grosor normal o aumentado con llenado restrictivo; insuficiencia cardiaca derecha y bajo voltaje en el ECG.",
      "Amiloidosis: anciano con insuficiencia cardiaca con FEVI preservada, hipertrofia y bajo voltaje; túnel carpiano bilateral.",
      "Tipo transtiretina: gammagrafía con captación cardiaca y sin cadenas ligeras; tratamiento con tafamidis.",
      "Hemocromatosis: RM y quelantes."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-cardiopatias-congenitas",
    "title": "Cardiopatías congénitas",
    "level": 3,
    "meta": "8 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-lo-que-decide-el-caso-clinico",
    "title": "Lo que decide el caso clínico",
    "points": [
      "La más frecuente: válvula aórtica bicúspide; en neonatos, la comunicación interventricular; en adultos, la comunicación interauricular.",
      "CIA tipo ostium secundum: desdoblamiento fijo del segundo ruido y bloqueo de rama derecha. Ostium primum: síndrome de Down.",
      "Coartación de aorta: HTA en brazos con pulsos femorales débiles; Turner y bicúspide.",
      "Ductus arterioso persistente: soplo continuo; en prematuros se cierra con ibuprofeno.",
      "Cianosis neonatal: transposición de grandes arterias. Cianosis después del año: tetralogía de Fallot (crisis que mejoran en cuclillas).",
      "Síndrome de Eisenmenger: contraindica cerrar el defecto."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-farmacos-en-cardiologia",
    "title": "Fármacos en cardiología",
    "level": 3,
    "meta": "7 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-efectos-adversos-y-contraindicaciones-clave",
    "title": "Efectos adversos y contraindicaciones clave",
    "points": [
      "IECA: tos y angioedema; IECA/ARA-II: hiperpotasemia; contraindicados en embarazo.",
      "Tiazidas: suben glucosa, ácido úrico y calcio; bajan potasio y sodio. Espironolactona: ginecomastia.",
      "Betabloqueantes: contraindicados en asma, bloqueo AV y angina vasoespástica.",
      "Antagonistas del calcio no dihidropiridínicos: contraindicados con FEVI baja y bloqueo AV.",
      "Nitratos: contraindicados con sildenafilo, estenosis aórtica severa y miocardiopatía hipertrófica obstructiva.",
      "Amiodarona: tiroides, fibrosis pulmonar, hepatitis, depósitos corneales y piel azulada."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-digoxina",
    "title": "Digoxina",
    "points": [
      "Indicación: FA rápida con insuficiencia cardiaca, como última opción.",
      "Intoxicación: náuseas, visión amarilla, extrasístoles ventriculares y taquicardia auricular con bloqueo.",
      "La favorecen hipopotasemia (la más importante), insuficiencia renal, hipotiroidismo y fármacos como amiodarona o verapamilo.",
      "Tratamiento: anticuerpos antidigoxina; la diálisis no sirve."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-anatomia-y-fisiologia-cardiaca",
    "title": "Anatomía y fisiología cardiaca",
    "level": 4,
    "meta": "6 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-lo-que-se-pregunta-de-anatomia",
    "title": "Lo que se pregunta de anatomía",
    "points": [
      "Las coronarias se perfunden en diástole. Dominancia derecha en el 80 %.",
      "La coronaria derecha irriga el nodo AV en la mayoría; la descendente anterior, la cara anterior y los dos tercios anteriores del tabique.",
      "La aurícula izquierda es la estructura más posterior; los trombos se forman en su orejuela.",
      "La ivabradina actúa sobre la corriente If del nodo sinusal."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-bradicardias",
    "title": "Bradicardias",
    "level": 4,
    "meta": "6 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-bloqueos-y-marcapasos",
    "title": "Bloqueos y marcapasos",
    "points": [
      "Mobitz I (Wenckebach): en el nodo AV, benigno, reversible (infarto inferior, fármacos).",
      "Mobitz II: debajo del nodo, progresa a bloqueo completo → marcapasos.",
      "Bloqueo completo con QRS ancho y escape lento: infrahisiano, no responde a atropina → marcapasos.",
      "FA con QRS regulares y lentos = bloqueo AV completo.",
      "Ritmo sinusal: marcapasos bicameral (DDD); FA permanente: VVI."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-reanimacion-cardiopulmonar",
    "title": "Reanimación cardiopulmonar",
    "level": 4,
    "meta": "6 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-rcp-basica-y-avanzada",
    "title": "RCP básica y avanzada",
    "points": [
      "Cadena: reconocer y pedir ayuda, RCP precoz, desfibrilación precoz y cuidados tras la parada.",
      "Compresiones 30:2, 5-6 cm de profundidad, 100-120 por minuto, mínimas interrupciones.",
      "Ritmo desfibrilable (FV o TV sin pulso): descarga y 2 minutos de RCP; adrenalina y amiodarona tras la tercera descarga.",
      "No desfibrilable: adrenalina 1 mg cuanto antes y cada 3-5 minutos; buscar causas reversibles (4 H y 4 T).",
      "Niños: 5 ventilaciones de rescate y 15:2.",
      "Tras la parada en coma: evitar la fiebre (≤37,5 °C)."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-venas-y-linfaticos",
    "title": "Venas y linfáticos",
    "level": 4,
    "meta": "5 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-trombosis-venosa-profunda",
    "title": "Trombosis venosa profunda",
    "points": [
      "Probabilidad clínica + dímero D (si la probabilidad es baja) + eco con compresión.",
      "Anticoagular: 3 meses si hubo causa transitoria; prolongado si no hay causa o persiste.",
      "Trombosis superficial: no se anticoagula salvo si está cerca de la unión safenofemoral.",
      "Tromboflebitis migratoria (Trousseau): buscar cáncer.",
      "Úlcera venosa: maleolar interna y poco dolorosa; la arterial es distal y dolorosa."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-sincope",
    "title": "Síncope",
    "level": 4,
    "meta": "5 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-sincope",
    "title": "Síncope",
    "points": [
      "El más frecuente: vasovagal (con pródromos, buen pronóstico).",
      "Sospechar cardiogénico si ocurre con el esfuerzo o tumbado, sin pródromos, con ECG anormal o cardiopatía.",
      "Hipotensión ortostática: la PAS cae ≥20 mmHg o la PAD ≥10 al ponerse de pie.",
      "Masaje carotídeo en >40 años: positivo si pausa >3 s."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-semiologia-cardiovascular",
    "title": "Semiología cardiovascular",
    "level": 5,
    "meta": "2 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-pulsos-y-ruidos",
    "title": "Pulsos y ruidos",
    "points": [
      "Pulso débil y tardío: estenosis aórtica. Saltón: insuficiencia aórtica. Paradójico: taponamiento.",
      "Desdoblamiento fijo del segundo ruido: CIA; paradójico: bloqueo de rama izquierda o estenosis aórtica severa.",
      "El cuarto ruido siempre es patológico; en FA no hay onda a ni cuarto ruido.",
      "Onda a en cañón: disociación AV; onda v grande: insuficiencia tricuspídea."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-cardiologia-t-tumores-cardiacos",
    "title": "Tumores cardiacos",
    "level": 5,
    "meta": "1 pregunta MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-cardiologia-tumores-cardiacos",
    "title": "Tumores cardiacos",
    "points": [
      "Las metástasis son más frecuentes que los tumores primarios.",
      "Mixoma: el primario más frecuente, en aurícula izquierda; mujer de mediana edad con síncope o disnea, embolias y síndrome constitucional. Cirugía.",
      "Rabdomioma: el típico de los niños (esclerosis tuberosa); puede regresar solo."
    ]
  }
];
