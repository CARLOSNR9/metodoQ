import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Banco universal MetodoQ · Dr. Q.
 * Aplica a cualquier universidad y especialidad (entrenamiento, repaso, simulacros).
 */
export const DR_Q_UNIVERSAL_QUESTIONS: TrainingQuestion[] = [
  {
    id: "dr-q-01",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "sca", "nstemi", "angina_inestable"],
    statement:
      "Paciente masculino de 60 años hipertenso, con ERC estadio 3B, consulta al servicio de urgencias por cuadro clínico de 35 minutos de duración consistente en dolor opresivo retroesternal irradiado a mandíbula. En urgencias le es realizado un primer ECG y unas troponinas: rule out, es monitorizado con ECG que determina elevación transitoria del ST en pared inferior, pero inmediatamente se visualiza nuevamente monitor que determina ritmo sinusal, ahora el paciente mejora con analgésico oral, se encuentra sin dolor, le realizan delta troponinas y se encuentra rule out. ¿Cuál es la conducta a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Diagnóstico de SCA sin elevación del ST y requiere coronariografía en las primeras 24 horas.",
      },
      {
        id: "B",
        label: "B",
        text: "Diagnóstico de SCA sin elevación del ST y requiere trombólisis.",
      },
      {
        id: "C",
        label: "C",
        text: "Diagnóstico de SCA con elevación del ST y requiere coronariografía inmediata.",
      },
      {
        id: "D",
        label: "D",
        text: "Diagnóstico SCA con elevación del ST y requiere trombólisis.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Dolor precordial típico con elevación transitoria (no persistente) del ST y troponinas negativas: angina inestable de alto riesgo (cambios dinámicos del ST). Conducta: estrategia invasiva temprana con coronariografía en las primeras 24 horas.",
    keyPoints: [
      "Elevación transitoria del ST ≠ STEMI; requiere persistencia para IAMCEST.",
      "Cambios dinámicos del ST = angina inestable de alto riesgo.",
      "Coronariografía en primeras 24 h en SCA sin elevación del ST de alto riesgo.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
SCA sin elevación del ST vs IAM con elevación transitoria del ST

Caso clínico: Paciente masculino de 60 años hipertenso con ERC 3B, dolor torácico típico, elevación transitoria del ST y troponinas negativas.

• El síndrome coronario agudo se divide en SCA con elevación persistente del ST (STEMI) y SCA sin elevación persistente del ST (NSTEMI/angina inestable).
• La elevación TRANSITORIA del ST es una trampa clásica de examen. Para diagnosticar STEMI, la elevación debe ser persistente y asociarse a oclusión coronaria aguda.
• Cuando el paciente tiene dolor típico con cambios dinámicos del ST pero troponinas negativas, el diagnóstico más probable es angina inestable de alto riesgo.
• Los cambios dinámicos del ST son criterios de alto riesgo y obligan a estrategia invasiva temprana.
• La conducta correcta es coronariografía en primeras 24 horas.

Lo que el estudiante debe dominar para residencia
1. Diferenciar STEMI vs NSTEMI vs angina inestable.
2. Interpretar elevaciones transitorias del ST.
3. Estratificación de riesgo en SCA sin elevación del ST.
4. Indicaciones de coronariografía temprana.

Perlas de examen
• Las residencias preguntan conductas, no solo diagnósticos.
• El ECG debe interpretarse SIEMPRE junto al contexto clínico.
• Los tiempos de reperfusión son extremadamente preguntables.
• Las guías ESC y AHA modernas priorizan estratificación del riesgo.

Referencias: ESC Guidelines for ACS; AHA/ACC ACS Guideline; Braunwald's Heart Disease; Tintinalli Emergency Medicine.`,
  },
  {
    id: "dr-q-02",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "sca", "stemi", "brd", "equivalentes_st"],
    statement:
      "Paciente masculino de 80 años hipertenso, dislipémico, obeso, antecedente de tabaquismo pesado persistente, consulta al servicio de urgencias por cuadro clínico de 1 hora de evolución consistente en dolor opresivo retroesternal irradiado a mandíbula. En urgencias le es realizado un primer ECG que muestra bloqueo de rama derecha, el dolor persiste a pesar del manejo analgésico. ¿Cuál es el diagnóstico y la conducta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Diagnóstico de SCA con elevación del ST y requiere tratamiento fármaco invasivo.",
      },
      {
        id: "B",
        label: "B",
        text: "Diagnóstico de SCA sin elevación del ST y requiere eco estrés ambulatorio.",
      },
      {
        id: "C",
        label: "C",
        text: "Diagnóstico de SCA con elevación del ST y requiere trombólisis.",
      },
      {
        id: "D",
        label: "D",
        text: "Diagnóstico de SCA sin elevación del ST y requiere coronariografía.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Dolor típico con bloqueo de rama derecha nuevo en contexto de SCA se considera equivalente de elevación del ST. Diagnóstico: IAMCEST equivalente. Conducta: reperfusión urgente (trombólisis si la PCI no está disponible en ≤120 min).",
    keyPoints: [
      "BRI y BRD con dolor típico = equivalentes de STEMI.",
      "El diagnóstico de SCA es primordialmente clínico.",
      "Reperfusión urgente; no estratificar como NSTEMI de bajo riesgo.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
Equivalentes de elevación del ST

Caso clínico: Paciente con dolor típico y bloqueo de rama derecha en ECG.

• El diagnóstico de síndrome coronario es principalmente clínico.
• Los bloqueos de rama pueden ocultar signos clásicos del infarto.
• En contexto de dolor torácico típico, el bloqueo de rama izquierda y el bloqueo de rama derecha deben considerarse equivalentes de elevación del ST.
• Otros equivalentes importantes: patrón de De Winter, infarto posterior y Wellens.
• La conducta debe ser reperfusión urgente.

Lo que el estudiante debe dominar para residencia
1. Reconocer equivalentes STEMI.
2. Importancia del contexto clínico.
3. Indicaciones de reperfusión inmediata.

Perlas de examen
• Las residencias preguntan conductas, no solo diagnósticos.
• El ECG debe interpretarse SIEMPRE junto al contexto clínico.
• Los tiempos de reperfusión son extremadamente preguntables.
• Las guías ESC y AHA modernas priorizan estratificación del riesgo.

Referencias: ESC Guidelines for ACS; AHA/ACC ACS Guideline; Braunwald's Heart Disease; Tintinalli Emergency Medicine.`,
  },
  {
    id: "dr-q-03",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "sca", "stemi", "farmacoinvasivo", "trombolisis"],
    statement:
      "Femenina de 67 años con antecedente de ACV isquémico hace 2 años, consulta al servicio de urgencias primer nivel, por dolor torácico típico de 40 minutos de evolución, ECG con elevación del ST en DII, DIII y AVF, el traslado a centro de hemodinamia dura 160 minutos. ¿Cuál es la opción de tratamiento antitrombótico inmediato y conducta a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "ASA + Atorvastatina + Clopidogrel + Enoxaparina SC + Trombólisis.",
      },
      {
        id: "B",
        label: "B",
        text: "Remitir a COROS sin tratamiento previo.",
      },
      {
        id: "C",
        label: "C",
        text: "ASA + Atorvastatina + Prasugrel + HNF + Traslado inmediato a COROS.",
      },
      {
        id: "D",
        label: "D",
        text: "ASA + Atorvastatina + Prasugrel + Enoxaparina SC + Trombólisis.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "STEMI inferior con retraso >120 min para PCI: indicada estrategia farmacoinvasiva (trombólisis + anticoagulación + doble antiagregación). Prasugrel está contraindicado con antecedente de ACV/AIT; usar clopidogrel.",
    keyPoints: [
      "PCI ideal si ≤120 min; si no, trombólisis si dolor <12 h.",
      "Prasugrel contraindicado en ACV/AIT previo.",
      "Todo paciente trombolizado debe remitirse posteriormente a PCI.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
Estrategia farmacoinvasiva en STEMI

Caso clínico: Paciente con STEMI inferior y retraso mayor de 120 minutos para PCI.

• La angioplastia primaria es el tratamiento ideal si puede realizarse en menos de 120 minutos.
• Si el tiempo excede 120 minutos y el dolor tiene menos de 12 horas de evolución, debe realizarse trombólisis.
• Todo paciente trombolizado debe remitirse posteriormente a PCI.
• Prasugrel está contraindicado en pacientes con antecedente de ACV o AIT.
• La estrategia farmacoinvasiva combina trombólisis temprana seguida de coronariografía.

Lo que el estudiante debe dominar para residencia
1. Ventanas de reperfusión.
2. Indicaciones de trombólisis.
3. Contraindicaciones de prasugrel.
4. Concepto de estrategia farmacoinvasiva.

Perlas de examen
• Las residencias preguntan conductas, no solo diagnósticos.
• El ECG debe interpretarse SIEMPRE junto al contexto clínico.
• Los tiempos de reperfusión son extremadamente preguntables.
• Las guías ESC y AHA modernas priorizan estratificación del riesgo.

Referencias: ESC Guidelines for ACS; AHA/ACC ACS Guideline; Braunwald's Heart Disease; Tintinalli Emergency Medicine.`,
  },
  {
    id: "dr-q-04",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "sca", "stemi", "farmacoinvasivo"],
    statement:
      "Masculino de 50 años, agricultor, residente en zona rural a 6 horas del hospital de tercer nivel más cercano, hipertenso, diabético, obeso, en hospital local le realizan ECG que reporta elevación del ST en cara anterolateral, se le administra trombólisis. ¿Qué conducta debería seguir con este paciente?",
    options: [
      { id: "A", label: "A", text: "Observación por 12 horas." },
      { id: "B", label: "B", text: "Remitir a PCI." },
      { id: "C", label: "C", text: "Repetir ECG si disminuye ST egreso." },
      { id: "D", label: "D", text: "Observación 24 horas, si dolor persiste, usar nitratos." },
    ],
    correctOptionId: "B",
    explanation:
      "La trombólisis no finaliza el tratamiento del STEMI. Todo paciente trombolizado debe remitirse para PCI dentro de las primeras 24 horas (estrategia farmacoinvasiva).",
    keyPoints: [
      "Trombólisis + PCI en 24 h = estrategia farmacoinvasiva.",
      "Reduce mortalidad y reinfarto vs trombólisis aislada.",
      "Persistencia de dolor o ST sin resolución → trombólisis fallida / PCI rescate.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
Conducta posterior a trombólisis

Caso clínico: Paciente trombolizado en zona rural alejada.

• La trombólisis NO finaliza el tratamiento del STEMI.
• Todo paciente trombolizado debe remitirse para PCI dentro de las primeras 24 horas.
• La estrategia farmacoinvasiva reduce mortalidad y reinfarto.
• La persistencia del dolor o ausencia de resolución del ST obliga a considerar trombólisis fallida.

Lo que el estudiante debe dominar para residencia
1. Conducta posterior a trombólisis.
2. PCI de rescate.
3. Importancia del traslado posterior.

Perlas de examen
• Las residencias preguntan conductas, no solo diagnósticos.
• El ECG debe interpretarse SIEMPRE junto al contexto clínico.
• Los tiempos de reperfusión son extremadamente preguntables.
• Las guías ESC y AHA modernas priorizan estratificación del riesgo.

Referencias: ESC Guidelines for ACS; AHA/ACC ACS Guideline; Braunwald's Heart Disease; Tintinalli Emergency Medicine.`,
  },
  {
    id: "dr-q-05",
    examArea: "Medicina Interna / Cardiología",
    topic: "Cardiología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "sca", "dapt", "sangrado"],
    statement:
      "Paciente a quien se le realizó angioplastia con stent, posterior a síndrome coronario agudo, tiene alto riesgo de sangrado. ¿Qué tratamiento debe recibir al egreso?",
    options: [
      { id: "A", label: "A", text: "DAPT con clopidogrel y ASA por 1 mes." },
      {
        id: "B",
        label: "B",
        text: "DAPT con ticagrelor y ASA por 1 mes y luego suspender ASA y continuar ticagrelor por 12 meses.",
      },
      { id: "C", label: "C", text: "DAPT con ticagrelor y ASA por 12 meses." },
      {
        id: "D",
        label: "D",
        text: "DAPT con clopidogrel y ASA por 1 mes y luego suspender clopidogrel y continuar ASA por 12 meses.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Post-SCA con stent y alto riesgo hemorrágico: las guías ESC/AHA permiten DAPT abreviada (1 mes) seguida de monoterapia con inhibidor P2Y12 hasta completar 12 meses, reduciendo sangrado sin comprometer protección antiisquémica.",
    keyPoints: [
      "DAPT estándar post-SCA: 12 meses.",
      "Alto riesgo hemorrágico: estrategia abreviada permitida.",
      "1 mes DAPT → monoterapia P2Y12 hasta 12 meses totales.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
DAPT y alto riesgo de sangrado

Caso clínico: Paciente post angioplastia con alto riesgo hemorrágico.

• La terapia antiagregante dual (DAPT) es estándar posterior a un síndrome coronario agudo.
• Tradicionalmente se realizaban 12 meses de ASA + inhibidor P2Y12.
• Las nuevas guías permiten estrategias abreviadas en pacientes con alto riesgo hemorrágico.
• Actualmente puede realizarse un mes de DAPT y luego continuar monoterapia con inhibidor P2Y12.
• Esta estrategia reduce sangrado sin aumentar significativamente eventos isquémicos.

Lo que el estudiante debe dominar para residencia
1. Duración estándar de DAPT.
2. Definición de alto riesgo hemorrágico.
3. Estrategias modernas abreviadas.

Perlas de examen
• Las residencias preguntan conductas, no solo diagnósticos.
• El ECG debe interpretarse SIEMPRE junto al contexto clínico.
• Los tiempos de reperfusión son extremadamente preguntables.
• Las guías ESC y AHA modernas priorizan estratificación del riesgo.

Referencias: ESC/AHA ACS Guidelines; European Heart Journal DAPT Updates; Braunwald's Heart Disease; Tintinalli Emergency Medicine.`,
  },
  {
    id: "dr-q-06",
    examArea: "Medicina Interna / Cardiología",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "sca", "fa", "triple_terapia", "anticoagulacion"],
    statement:
      "Paciente a quien se le realizó angioplastia con stent, antecedente de FA y uso de apixabán. ¿Qué tratamiento debe recibir al egreso?",
    options: [
      { id: "A", label: "A", text: "Solo Apixabán." },
      { id: "B", label: "B", text: "Triple terapia ASA + clopidogrel + Apixabán por 12 meses." },
      { id: "C", label: "C", text: "DAPT con clopidogrel y ASA por 12 meses." },
      {
        id: "D",
        label: "D",
        text: "Triple terapia ASA + clopidogrel + Apixabán por 12 meses, suspendiendo ASA a la semana.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "FA + SCA post-PCI: triple terapia corta (ASA + clopidogrel + DOAC) con suspensión de ASA a la semana, continuando apixabán + clopidogrel hasta 12 meses. Minimiza sangrado sin perder protección antitrombótica.",
    keyPoints: [
      "FA + SCA + stent = escenario antitrombótico complejo.",
      "Triple terapia mínima: suspender ASA a la semana.",
      "Clopidogrel + DOAC preferido tras retirar ASA.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
Triple terapia y fibrilación auricular

Caso clínico: Paciente con FA anticoagulado con apixabán que presenta SCA tratado con angioplastia y stent.

• La coexistencia de fibrilación auricular y síndrome coronario agudo genera uno de los escenarios antitrombóticos más preguntados en residencia.
• El objetivo es equilibrar el riesgo trombótico coronario con el riesgo cardioembólico de la FA.
• Las guías modernas recomiendan minimizar la duración de la triple terapia debido al riesgo hemorrágico.
• Actualmente se favorece triple terapia corta (ASA + Clopidogrel + DOAC) seguida rápidamente de doble terapia.
• El esquema más utilizado es suspensión de ASA después de una semana y continuación con Apixabán + Clopidogrel durante 12 meses.

Lo que el estudiante debe dominar para residencia
1. Indicaciones de triple terapia.
2. Duración recomendada de ASA.
3. Diferencias entre doble y triple terapia.
4. Manejo de pacientes con FA sometidos a PCI.

Perlas de examen
• La mayoría de las residencias preguntan cuánto tiempo debe mantenerse el ASA.
• Los DOAC son preferidos sobre warfarina cuando no existe contraindicación.
• Clopidogrel continúa siendo el inhibidor P2Y12 de elección en triple terapia.
• El objetivo principal es disminuir sangrado sin aumentar eventos isquémicos.

Referencias: ESC ACS Guidelines; ESC AF Guidelines; AHA/ACC Coronary Revascularization; Braunwald's Heart Disease.`,
  },
  {
    id: "dr-q-07",
    examArea: "Medicina Interna / Endocrinología",
    topic: "Endocrinología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "endocrinologia", "diabetes", "tamizaje", "ptog"],
    statement:
      "Paciente con clínica de novo de polidipsia, polifagia, poliuria, al examen físico con acantosis nigricans, tiene antecedentes de alcoholismo y obesidad. ¿Qué prueba de tamizaje para Diabetes mellitus es la más sensible para este paciente?",
    options: [
      { id: "A", label: "A", text: "Hemoglobina glicada." },
      { id: "B", label: "B", text: "Glucosa en ayunas." },
      { id: "C", label: "C", text: "Test de Sullivan." },
      { id: "D", label: "D", text: "Prueba de tolerancia oral a la glucosa con 75 g." },
    ],
    correctOptionId: "D",
    explanation:
      "La PTOG 75 g tiene mayor sensibilidad para detectar diabetes en fases tempranas, porque captura la hiperglucemia posprandial, alteración metabólica más temprana en resistencia a la insulina.",
    keyPoints: [
      "PTOG: prueba más sensible en fases tempranas.",
      "HbA1c: más práctica; refleja exposición crónica.",
      "Acantosis nigricans = marcador de resistencia a la insulina.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
La PTOG de 75 g como prueba más sensible

Caso clínico: Paciente con obesidad, acantosis nigricans y síntomas cardinales compatibles con diabetes mellitus.

• La resistencia a la insulina suele manifestarse inicialmente con alteraciones posprandiales.
• Por esta razón la PTOG tiene mayor sensibilidad para detectar diabetes en fases tempranas.
• La hemoglobina glicada refleja exposición crónica a glucosa, pero puede ser normal en etapas iniciales.
• La glucemia en ayunas tiene buena utilidad diagnóstica, aunque puede pasar por alto alteraciones tempranas.
• La PTOG sigue siendo considerada la prueba diagnóstica más sensible para detectar trastornos tempranos del metabolismo de la glucosa.

Lo que el estudiante debe dominar para residencia
1. Criterios diagnósticos ADA.
2. Diferencias entre HbA1c, glucemia en ayunas y PTOG.
3. Indicaciones de tamizaje.
4. Factores de riesgo para diabetes tipo 2.

Perlas de examen
• La PTOG es la prueba más sensible.
• La HbA1c es la prueba más práctica.
• Los síntomas cardinales permiten diagnóstico con glucemia aleatoria ≥200 mg/dL.
• La acantosis nigricans es marcador clínico de resistencia a la insulina.

Referencias: ADA Standards of Care; Endocrine Society Guidelines; Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-08",
    examArea: "Medicina Interna / Neumología",
    topic: "Neumología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "neumologia", "epoc", "gold"],
    statement:
      "Un hombre de 60 años con EPOC en tratamiento con tiotropio presenta dos exacerbaciones en los últimos 6 meses. ¿Cuál es el siguiente paso en el manejo?",
    options: [
      { id: "A", label: "A", text: "Agregar un corticoide inhalado." },
      { id: "B", label: "B", text: "Cambiar a LAMA + LABA." },
      { id: "C", label: "C", text: "Iniciar roflumilast." },
      { id: "D", label: "D", text: "Mantener el tratamiento actual." },
    ],
    correctOptionId: "B",
    explanation:
      "≥2 exacerbaciones en 6 meses reclasifica al paciente como GOLD E (alto riesgo de exacerbaciones). Tratamiento inicial recomendado: LABA + LAMA (el paciente ya usa tiotropio/LAMA, debe añadirse LABA).",
    keyPoints: [
      "2+ exacerbaciones → GOLD E.",
      "GOLD E: LABA + LAMA como combinación inicial.",
      "ICS no de forma indiscriminada; eosinófilos orientan indicación.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
EPOC GOLD E

Caso clínico: Paciente con EPOC tratado con tiotropio que presenta exacerbaciones frecuentes.

• La clasificación GOLD actual prioriza el riesgo de exacerbaciones.
• Los pacientes con exacerbaciones frecuentes pasan a categoría GOLD E.
• El tratamiento inicial recomendado es LABA + LAMA.
• La combinación mejora síntomas, función pulmonar y disminuye exacerbaciones.
• Los corticoides inhalados no deben utilizarse de forma indiscriminada.

Lo que el estudiante debe dominar para residencia
1. Clasificación GOLD actual.
2. Definición de exacerbación.
3. Indicaciones de LABA + LAMA.
4. Indicaciones de ICS.

Perlas de examen
• GOLD E reemplazó antiguos grupos de alto riesgo.
• Dos o más exacerbaciones implican alto riesgo.
• LABA + LAMA es la combinación inicial preferida.
• Los eosinófilos ayudan a decidir uso de ICS.

Referencias: GOLD Report 2025; Global Initiative for COPD; Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-09",
    examArea: "Medicina Interna / Urgencias / Cirugía",
    topic: "Urgencias",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "urgencias", "trauma", "atls", "abdomen"],
    statement:
      "Un paciente sufre trauma abdominal cerrado posterior a un accidente de tránsito, en el servicio de trauma presenta hemoperitoneo masivo, signos de irritación peritoneal y shock hipovolémico. ¿Qué conducta es más adecuada?",
    options: [
      { id: "A", label: "A", text: "Laparotomía exploradora." },
      { id: "B", label: "B", text: "TAC abdominal." },
      { id: "C", label: "C", text: "Tratamiento médico." },
      { id: "D", label: "D", text: "Observación clínica." },
    ],
    correctOptionId: "A",
    explanation:
      "Shock hipovolémico + irritación peritoneal + hemoperitoneo masivo = lesión intraabdominal grave. Según ATLS: laparotomía exploradora inmediata sin retrasar por estudios complementarios.",
    keyPoints: [
      "Shock + peritonitis = quirófano.",
      "TAC reservado para pacientes hemodinámicamente estables.",
      "FAST confirma líquido libre; no retrasa cirugía si inestable.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
Trauma abdominal e inestabilidad hemodinámica

Caso clínico: Trauma abdominal cerrado con hemoperitoneo masivo e inestabilidad hemodinámica.

• El principio fundamental del ATLS es tratar primero las amenazas inmediatas para la vida.
• La presencia simultánea de shock e irritación peritoneal indica lesión intraabdominal grave.
• Estos pacientes no deben retrasarse para estudios complementarios.
• La laparotomía exploradora constituye una intervención salvadora.
• El TAC está reservado para pacientes hemodinámicamente estables.

Lo que el estudiante debe dominar para residencia
1. Criterios de estabilidad hemodinámica.
2. Indicaciones de laparotomía.
3. Utilidad del FAST.
4. Secuencia ABCDE del trauma.

Perlas de examen
• Shock + peritonitis = quirófano.
• Un TAC nunca debe retrasar una cirugía necesaria.
• El FAST ayuda a detectar líquido libre rápidamente.
• El examen físico sigue siendo fundamental.

Referencias: ATLS 11th Edition; EAST Trauma Guidelines; Schwartz Principles of Surgery.`,
  },
  {
    id: "dr-q-10",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "sca", "stemi", "patron_tronco", "avr"],
    statement:
      "Un paciente masculino de 55 años, llevado a urgencias por cuadro clínico de 50 minutos de evolución consistente en dolor torácico, central, opresivo, que se irradia a brazo izquierdo, le toman un ECG que reporta depresión del segmento ST en derivadas DI, DII, V4-V6 con elevación del segmento ST en AVR. ¿Cuál es el diagnóstico presuntivo?",
    options: [
      { id: "A", label: "A", text: "SCASEST." },
      { id: "B", label: "B", text: "SCACEST." },
      { id: "C", label: "C", text: "Angina inestable." },
      { id: "D", label: "D", text: "Pericarditis." },
    ],
    correctOptionId: "B",
    explanation:
      "Depresión difusa del ST con elevación en aVR (patrón del tronco) sugiere isquemia subendocárdica extensa por lesión crítica del tronco coronario izquierdo o enfermedad multivaso severa. Equivalente de elevación del ST → SCACEST.",
    keyPoints: [
      "Depresión ST difusa + elevación aVR = patrón del tronco.",
      "Equivalente STEMI; valoración invasiva urgente.",
      "aVR es derivación clave frecuentemente olvidada en examen.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
Patrón del tronco coronario izquierdo

Caso clínico: Dolor torácico típico con depresión extensa del ST y elevación en aVR.

• Este patrón sugiere isquemia subendocárdica extensa.
• Debe hacer sospechar lesión crítica del tronco coronario izquierdo o enfermedad multivaso severa.
• Constituye uno de los hallazgos electrocardiográficos de mayor riesgo.
• Requiere valoración invasiva urgente.
• Es un patrón clásico de examen en residencias.

Lo que el estudiante debe dominar para residencia
1. Equivalentes de elevación del ST.
2. Interpretación de aVR.
3. Lesión del tronco coronario izquierdo.
4. Estratificación de riesgo en SCA.

Perlas de examen
• aVR es una de las derivaciones más olvidadas y más preguntadas.
• Elevación en aVR con depresión difusa del ST indica enfermedad coronaria extensa.
• El diagnóstico siempre debe integrarse con la clínica.
• Las residencias suelen preguntar la conducta más que el hallazgo aislado.

Referencias: ESC ACS Guidelines; AHA/ACC ACS Guideline; Braunwald's Heart Disease; Tintinalli Emergency Medicine.`,
  },
  {
    id: "dr-q-11",
    examArea: "Neurología / Neurointensivismo / ACV",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "acv", "trombectomia", "wake_up_stroke", "gran_vaso"],
    statement:
      "Hombre de 68 años con fibrilación auricular paroxística e hipertensión, sin anticoagulación. Hemiplejía derecha y afasia global al despertar (Wake-up Stroke). Visto normal por última vez a las 22:00; despierta con déficit a las 07:00; ingresa a las 08:30. Glasgow 11, NIHSS 22: hemianopsia homónima derecha, desviación conjugada de la mirada a la izquierda, hemiplejía derecha 0/5, afasia global. PA 175/95 mmHg. TAC simple sin hemorragia; ASPECTS 8 con pérdida sutil gris/blanca en ínsula izquierda. AngioTAC: oclusión total M1 ACM izquierda. TAC perfusión: core (rCBF <30%) 15 cc; penumbra (Tmax >6s) 110 cc; mismatch 95 cc. ¿Cuál es la conducta de reperfusión inmediata MÁS indicada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Trombólisis IV inmediata (Alteplasa) por ventana extendida, seguida de traslado a angiografía.",
      },
      {
        id: "B",
        label: "B",
        text: "Omitir trombólisis IV y trasladar directamente a hemodinamia para trombectomía mecánica endovascular inmediata.",
      },
      {
        id: "C",
        label: "C",
        text: "Heparina de bajo peso molecular a dosis plenas e impregnación con amiodarona por origen cardioembólico.",
      },
      {
        id: "D",
        label: "D",
        text: "Abstenerse de reperfusión porque supera 4.5 h y hay infarto establecido irreversible en áreas de Wernicke y Broca.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Wake-up stroke con ~10.5 h desde última vez normal: fuera de ventana para trombólisis IV (<4.5 h). Oclusión M1 con core pequeño (15 cc) y mismatch volumétrico grande (95 cc): candidato ideal a trombectomía mecánica según DAWN/DEFUSE-3 (6–24 h con discordancia clínico-imagenológica).",
    keyPoints: [
      "Tejido, no tiempo: perfusión define candidatos fuera de ventana IV.",
      "DAWN/DEFUSE-3: trombectomía 6–24 h con mismatch en oclusión de gran vaso.",
      "Alteplasa >4.5 h sin protocolo WAKE-UP con RM ↑ riesgo hemorrágico.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Wake-up stroke · Oclusión M1 · Trombectomía mecánica

• Wake-up stroke: tiempo real desconocido → se asume desde última vez visto normal.
• >4.5 h: trombólisis IV estándar contraindicada sin RM con mismatch FLAIR/DWI.
• TAC perfusión: core pequeño + penumbra grande = tejido salvable.
• DAWN y DEFUSE-3: trombectomía clase I (6–24 h) con discordancia clínico-imagenológica.
• En oclusión de gran vaso: "el tiempo es cerebro, pero la colateralidad es tiempo".

Perla: >6 h + oclusión gran vaso → perfusión → si hay penumbra, trombectomía hasta 24 h.

Referencias: AHA/ASA Guidelines for Early Management of Acute Ischemic Stroke; DAWN; DEFUSE-3.`,
  },
  {
    id: "dr-q-12",
    examArea: "Neurología / Neurointensivismo / Epilepsia",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "epilepsia", "estado_epileptico", "eenc"],
    statement:
      "Mujer de 35 años con epilepsia estructural por displasia cortical, abandono de medicación. Convulsiones generalizadas persistentes. En ambulancia: Midazolam 10 mg IM. En reanimación: Lorazepam 4 mg IV + Levetiracetam 60 mg/kg IV. Quince minutos después cesa el componente motor, pero permanece en coma (Glasgow 3) con sacudidas rítmicas en comisura labial derecha y nistagmo horizontal rítmico. Glucosa 110 mg/dL; sodio 138 mEq/L. ¿Cuál es la conducta neurológica y de soporte más urgente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Observación estrecha: ausencia de movimientos tónico-clónicos indica resolución; estado post-ictal prolongado por benzodiacepinas.",
      },
      {
        id: "B",
        label: "B",
        text: "Segunda línea de anticonvulsivantes IV (valproato o fenitoína) y observación en sala general.",
      },
      {
        id: "C",
        label: "C",
        text: "Intubación orotraqueal inmediata, infusión continua de anestésicos (propofol o midazolam), UCI y EEG continuo urgente.",
      },
      {
        id: "D",
        label: "D",
        text: "Punción lumbar inmediata y aciclovir IV por fiebre 38 °C y sacudidas faciales focales.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Tras benzodiacepina + segunda línea (levetiracetam) persiste coma con signos sutiles (mioclonías faciales, nistagmo): sospechar estado epiléptico no convulsivo/refractario. Conducta: vía aérea definitiva, anestésicos IV continuos titulados con EEG hasta supresión de brotes.",
    keyPoints: [
      "Cese motor ≠ fin de crisis: desacople electro-mecánico.",
      "Refractario = falla BDZ + 2.ª línea → anestésicos + EEG continuo.",
      "EEG es la única forma de confirmar y titular EENC.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Estado epiléptico refractario y EENC

• >30 min de actividad (incluso subclínica): resistencia GABAérgica y excitotoxicidad por glutamato.
• Cese de movimientos puede ser fatiga muscular, no resolución eléctrica.
• Refractario: persiste tras BDZ + anticrisis de 2.ª línea → intubación + propofol/midazolam/ketamina + EEG continuo.
• Objetivo: supresión de brotes (burst suppression) titulada por EEG.

Perla: Convulsionó, recibió tratamiento, no despierta o tiene mioclonías periorales → asumir EENC.

Referencias: Neurocritical Care Society Guidelines for Status Epilepticus.`,
  },
  {
    id: "dr-q-13",
    examArea: "Neurología / Neurointensivismo / HSA",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "hsa", "vasoespasmo", "dci"],
    statement:
      "Mujer de 48 años, día 7 de hospitalización por HSA por aneurisma de ACoA (Hunt & Hess II, Fisher 3), asegurado con coiling al día 2. Días 1–6: Glasgow 15, orientada, sin déficit. Día 7: deterioro súbito, Glasgow 12, nueva paresia crural derecha 2/5 (brazo 4/5), apatía marcada. PA 105/65 mmHg. TAC control: sin re-sangrado ni hidrocefalia. ¿Cuál es la intervención hemodinámica inmediata recomendada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nimodipino IV a altas dosis para vasodilatación directa del vaso espástico.",
      },
      {
        id: "B",
        label: "B",
        text: "Inducir hipertensión farmacológica con vasopresores (norepinefrina) para forzar flujo cerebral.",
      },
      {
        id: "C",
        label: "C",
        text: "Nitroprusiato de sodio para disminuir resistencia vascular y facilitar paso de sangre oxigenada.",
      },
      { id: "D", label: "D", text: "Derivación ventrículo-peritoneal urgente por falla de reabsorción de LCR." },
    ],
    correctOptionId: "B",
    explanation:
      "Deterioro focal días 4–14 post-HSA sin re-sangrado ni hidrocefalia: isquemia cerebral retardada (DCI) por vasoespasmo. Tratamiento sintomático: euvolemia + vasopresores (norepinefrina/fenilefrina) para elevar PAM y perfusión cerebral.",
    keyPoints: [
      "Día 1 deterioro → re-sangrado; días 4–14 + focal → vasoespasmo (DCI).",
      "Nimodipino oral es neuroprotector, no revierte vasoespasmo agudo.",
      "Vasodilatadores sistémicos (nitroprusiato) empeoran isquemia.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Vasoespasmo y DCI post-HSA

• DCI: vasoconstricción por sangre degradada en espacio subaracnoideo (días 4–14).
• Cerebro vasoespástico pierde autorregulación → dependiente de presión sistémica.
• Tratamiento pilar: euvolemia + vasopresores para ↑ presión de perfusión cerebral.
• Nimodipino PO 21 días: mejora pronóstico global, no revierte espasmo agudo; IV riesgo hipotensión.

Perla: HSA + deterioro día 7 + TAC limpio = vasoespasmo → subir PA.

Referencias: AHA/ASA Guidelines for Management of Aneurysmal Subarachnoid Hemorrhage.`,
  },
  {
    id: "dr-q-14",
    examArea: "Neurología / Neurointensivismo / Urgencias",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "miastenia", "crisis_miastenica"],
    statement:
      "Mujer de 28 años con miastenia gravis (piridostigmina, prednisona). Infección urinaria tratada con ciprofloxacina hace 3 días. Disnea severa, imposibilidad para deglutir, debilidad generalizada. Ptosis bilateral masiva, disartria flácida, debilidad proximal 3/5, respiración paradójica abdominal, reflejo tusígeno inefectivo. CVF 10 mL/kg (normal >60), NIF -15 cmH2O (crítico < -20). Gases: pH 7.28, PaCO2 58, PaO2 65. ¿Cuál es el paso de rescate primario e intervención modificadora correcta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Incrementar piridostigmina a 120 mg c/4 h y oxígeno por cánula nasal.",
      },
      {
        id: "B",
        label: "B",
        text: "Bolo de metilprednisolona 1 g IV y observación en urgencias.",
      },
      {
        id: "C",
        label: "C",
        text: "Intubación orotraqueal expedita seguida de plasmaféresis o IGIV temprana.",
      },
      {
        id: "D",
        label: "D",
        text: "BiPAP como única medida respiratoria y test de edrofonio (Tensilon).",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Crisis miasténica con falla bulbar e insuficiencia ventilatoria hipercápnica (CVF <15 mL/kg, NIF peor que -20, PaCO2 58): intubación electiva temprana. Luego PLEX o IGIV. Suspender piridostigmina en ventilación mecánica.",
    keyPoints: [
      "Regla de los 20: CVF <15 mL/kg o NIF peor que -20 → intubar.",
      "PLEX o IGIV de primera línea; igual eficacia.",
      "No más piridostigmina ni esteroides altos en fase aguda aislada.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Crisis miasténica

• Fluoroquinolonas pueden precipitar crisis (bloqueo canal ACh).
• Falla bulbar + diafragma → hipercapnia tipo 2 → asfixia inminente.
• Intubación electiva antes del colapso; luego PLEX o IGIV.
• Suspender anticolinesterásicos en VM (secreciones, broncoespasmo).
• Metilprednisolona sola en agudo puede empeorar debilidad 7–10 días.

Perla: Miasténico con respiración paradójica y CVF <15 → intuba, suspende mestinón, ordena plasmaféresis.

Referencias: AAN / Neurocritical Care Society Guidelines for Myasthenic Crisis.`,
  },
  {
    id: "dr-q-15",
    examArea: "Neurología / Neurointensivismo / Urgencias",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "herniacion", "hic", "uncal"],
    statement:
      "Hombre de 58 años con HIC por HTA maligna. Ingreso hace 2 h: Glasgow 12, hemiparesia izquierda 3/5. Deterioro súbito: Glasgow 5 (decorticación). Pupila derecha 7 mm arrefléctica (midriasis paralítica), ojo derecho desviado abajo y afuera; pupila izquierda 2 mm reactiva. Hemiplejía izquierda densa, Babinski bilateral. PA 230/120, FC 45, FR 10 (Tríada de Cushing). TAC inicial: hematoma ganglios basales derechos 70 cc con desviación de línea media. ¿Cuál alteración anatómica explica la midriasis derecha y el manejo hiperosmolar de primer orden?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Herniación subfalcina derecha; manejo con hiperventilación agresiva a PaCO2 25 mmHg.",
      },
      {
        id: "B",
        label: "B",
        text: "Herniación uncal derecha comprimiendo III par derecho; manitol 20% o solución salina hipertónica inmediata.",
      },
      {
        id: "C",
        label: "C",
        text: "Herniación amigdalina derecha; corticosteroides IV a dosis altas.",
      },
      {
        id: "D",
        label: "D",
        text: "Herniación central transtentorial; catéter PIC y pentobarbital.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Midriasis paralítica ipsilateral + ojo caído abajo/afuera + hemiplejía contralateral + Tríada de Cushing: herniación uncal que comprime III par (fibras parasimpáticas externas). Emergencia: manitol o salina hipertónica de inmediato, incluso antes de TAC de control.",
    keyPoints: [
      "Uncus temporal → III par ipsilateral → midriasis paralítica.",
      "Terapia puente: hiperosmolar (manitol o SSH) antes de cirugía.",
      "Corticosteroides no en edema citotóxico/hemorrágico agudo.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Herniación uncal

• HIC supratentorial → uncus cae por incisura tentorial → comprime III par.
• Fibras parasimpáticas periféricas del III → midriasis ipsilateral primero.
• Tríada de Cushing: HTA + bradicardia + respiración irregular = isquemia tronco inminente.
• Manejo puente: manitol 20% o SSH 3%/7.5%/23% sin esperar estudios.

Perla: Hematoma + pupila grande y fija ipsilateral = uncal → salina hipertónica ya.

Referencias: Neurocritical Care Society Guidelines on Elevated ICP.`,
  },
  {
    id: "dr-q-16",
    examArea: "Neurología / Infectología / Urgencias",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "encefalitis", "hsv", "infectologia"],
    statement:
      "Hombre de 42 años, previamente sano. Fiebre, confusión, palabras incoherentes, no reconoce a su esposa. Episodio de mirada fija, chasquido labial y movimientos rítmicos de mano derecha con amnesia; refirió olor a caucho quemado. Temp 38.7 °C. Desorientado, afasia sensitiva (Wernicke), Kernig y Brudzinski negativos. LCR: 150 leuc/mm³ (90% linfocitos), 450 eritrocitos, glucosa 55 mg/dL (sérica 90), proteínas 90 mg/dL. RM: hiperintensidad FLAIR/DWI en polos temporales, hipocampo y cara orbitaria frontal izquierda. ¿Agente etiológico y tratamiento de primera línea en los primeros 30 minutos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Meningitis por Streptococcus pneumoniae; ceftriaxona, vancomicina y dexametasona.",
      },
      {
        id: "B",
        label: "B",
        text: "Encefalitis autoinmune anti-NMDA; metilprednisolona y plasmaféresis inmediata.",
      },
      {
        id: "C",
        label: "C",
        text: "Encefalitis por HSV-1; aciclovir IV inmediato (retraso = daño cognitivo permanente o muerte).",
      },
      {
        id: "D",
        label: "D",
        text: "Toxoplasmosis cerebral; sulfadiazina y pirimetamina.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Tropismo temporal (RM), crisis focales con alucinaciones olfatorias, LCR linfocitario con eritrocitos y glucosa relativamente normal: encefalitis herpética por HSV-1. Aciclovir IV 10 mg/kg c/8 h empírico de inmediato, antes de PCR en LCR.",
    keyPoints: [
      "HSV-1: lóbulos temporales + olor/sabor extraño + automatismos orales.",
      "LCR: linfocitos + eritrocitos + glucosa normal vs bacteriana.",
      "Aciclovir empírico sin esperar PCR.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Encefalitis herpética (HSV-1)

• Ascenso por tracto olfatorio/trigémino; necrosis temporal medial.
• Clínica: psiquiátrica + memoria + crisis uncinadas + alucinaciones olfatorias.
• LCR: pleocitosis linfocitaria, eritrocitos por necrosis hemorrágica, glucosa normal.
• Tratamiento: aciclovir IV empírico en todo AMS agudo inexplicado con datos de SNC.

Perla: Fiebre + comportamiento bizarro + olores feos + RM temporal = aciclovir ya.

Referencias: IDSA Guidelines for Encephalitis.`,
  },
  {
    id: "dr-q-17",
    examArea: "Neurología / ACV / Tallo Cerebral",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "acv", "wallenberg", "pica"],
    statement:
      "Hombre de 65 años, HTA y tabaquismo. Vértigo incapacitante y disfagia súbita hace 2 h. Consciente, lenguaje normal. Vértigo y nistagmo rotatorio. Ptosis leve y miosis ojo izquierdo (Horner izquierdo). Reflejo nauseoso ausente, voz ronca. ↓ dolor/temperatura hemicara izquierda y hemicuerpo derecho. Propiocepción y fuerza 5/5 en cuatro extremidades. Ataxia marcha severa hacia la izquierda, dismetría brazo izquierdo. ¿Diagnóstico topográfico y vaso ocluido?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome bulbar medial izquierdo por oclusión de arteria espinal anterior.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome pontino lateral izquierdo por oclusión de AICA.",
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome bulbar lateral izquierdo (Wallenberg) por oclusión de arteria vertebral o PICA izquierda.",
      },
      {
        id: "D",
        label: "D",
        text: "Síndrome mesencefálico ventral izquierdo (Weber) por ramas paramedianas de PCA.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Síndrome alterno (cara ipsilateral + cuerpo contralateral) + disfagia/ronquera (IX-X) + Horner + ataxia ipsilateral + fuerza intacta = bulbo lateral izquierdo (Wallenberg), típicamente por oclusión de PICA o vertebral ipsilateral.",
    keyPoints: [
      "Alterno cara/cuerpo = tronco encefálico.",
      "Fuerza intacta → lesión lateral (no piramidal).",
      "AICA afecta VII-VIII; PICA afecta IX-X.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Síndrome de Wallenberg

• Núcleo espinal V → ↓ dolor/temp facial ipsilateral.
• Espinotalámico → ↓ dolor/temp corporal contralateral.
• Núcleo ambiguo (IX, X) → disfagia, ronquera.
• Descending sympathetic → Horner ipsilateral.
• Pedúnculo cerebeloso inferior → ataxia ipsilateral.
• Pirámides intactas → fuerza conservada.

Perla: Sensibilidad cruzada + disfagia + Horner + ataxia sin debilidad = Wallenberg (PICA/vertebral).

Referencias: AHA/ASA y ESO Guidelines for Acute Ischemic Stroke.`,
  },
  {
    id: "dr-q-18",
    examArea: "Neurología / Neurointensivismo / Hemorragia",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "hic", "doac", "apixaban", "reversion"],
    statement:
      "Mujer de 75 años con FA y TVP previa en apixabán 5 mg c/12 h (última dosis hace 3 h). Hemiplejía derecha y desviación de mirada a la izquierda súbitas. TAC: HIC putaminal izquierda 40 cc, volcado intraventricular, spot sign. PT/PTT discretamente prolongados, INR 1.2. ¿Agente hemostático de reversión específico prioritario para este inhibidor directo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Idarucizumab 5 g IV + descenso tensional a PAS <140 mmHg.",
      },
      {
        id: "B",
        label: "B",
        text: "Andexanet alfa o, en su defecto, complejo protrombínico de 4 factores (CCP4) + labetalol IV.",
      },
      {
        id: "C",
        label: "C",
        text: "Vitamina K 10 mg IV y 4 unidades de plasma fresco congelado.",
      },
      { id: "D", label: "D", text: "Sulfato de protamina en bolo urgente e hiperventilación profiláctica." },
    ],
    correctOptionId: "B",
    explanation:
      "HIC en paciente con apixabán (inhibidor directo del factor Xa): andexanet alfa es antídoto específico de primera línea; si no disponible, CCP4. Control PA objetivo PAS 140 mmHg. Idarucizumab solo para dabigatrán; vitamina K/PFC para warfarina; protamina para heparina.",
    keyPoints: [
      "Apixabán/rivaroxabán = anti-Xa → andexanet o CCP4.",
      "Dabigatrán = anti-IIa → idarucizumab.",
      "PT/INR no reflejan bien anticoagulación por DOAC.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Reversión de DOAC en HIC

• Apixabán: inhibidor selectivo del factor Xa activado.
• 1.ª línea: andexanet alfa; alternativa: CCP4.
• + control agresivo PA (PAS ~140 mmHg).
• Idarucizumab = solo dabigatrán; vitamina K/PFC = warfarina; protamina = heparina.

Perla: HIC por "xaban" = andexanet o CCP4; dabigatrán = idarucizumab.

Referencias: AHA/ASA 2022 ICH Guidelines; Neurocritical Care Society Antithrombotic Reversal Guidelines.`,
  },
  {
    id: "dr-q-19",
    examArea: "Neurología / Oncología / Urgencias",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "compresion_medular", "oncologia"],
    statement:
      "Hombre de 65 años con cáncer de próstata metastásico. Debilidad progresiva en piernas e imposibilidad para orinar en 24 h. Fuerza EESS normal; paraplejía 0/5 en EEII. ROT arrefléxicos bilaterales, tono flácido, plantar neutra. Pérdida sensitiva total desde ombligo hacia abajo. Vejiga distendida (retención urinaria). ¿Segmento medular afectado y neuroimagen inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nivel T4 (pezones); compresión cauda equina; RM lumbosacra urgente.",
      },
      {
        id: "B",
        label: "B",
        text: "Nivel T10 (ombligo); lesión compresiva/intrínseca médula torácica baja; RM columna torácica urgente.",
      },
      {
        id: "C",
        label: "C",
        text: "Nivel L1 (ingle); compresión pontina; RM cerebro y tallo cerebral.",
      },
      {
        id: "D",
        label: "D",
        text: "Nivel T12; infarto arteria de Adamkiewicz; angiografía medular inmediata.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Síndrome medular completo agudo con choque espinal (arreflexia, flacidez). Ombligo = dermatoma T10. Cáncer prostático osteofílico: compresión medular maligna hasta demostrar lo contrario → RM torácica urgente con contraste.",
    keyPoints: [
      "Niveles: pezones T4, ombligo T10, pliegue inguinal L1.",
      "Cáncer + déficit medular agudo = metástasis epidural.",
      "RM define cirugía vs radioterapia; retraso = paraplejía permanente.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Compresión medular maligna

• Choque espinal: arreflexia y flacidez en fase aguda (días-semanas).
• Nivel sensitivo = marcador topográfico más fiel.
• Ombligo = T10.
• RM con contraste de columna (torácica focalizada) es obligatoria antes de tratar.
• Dexametasona dosis altas empírica mientras se confirma.

Perla: Cáncer + nivel umbilical = compresión torácica T10 → RM urgente.

Referencias: AAN Guidelines; guías oncológicas de emergencias neurológicas.`,
  },
  {
    id: "dr-q-20",
    examArea: "Neurología / Neurointensivismo / Neuromuscular",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "guillain_barre", "sgb", "disautonomia"],
    statement:
      "Hombre de 30 años. Debilidad ascendente en 5 días tras diarrea por Campylobacter hace 3 semanas. Inestabilidad hemodinámica autónoma severa: taquicardia 150 y PA 210/110 que cae a FC 40 y PA 70/40. Paraplejía flácida 0/5, debilidad proximal EESS 2/5, arreflexia universal. NIF -30 al límite. LCR: proteínas 125 mg/dL, 2 leucocitos/mm³ (disociación albúmino-citológica). Asistolia transitoria en monitor. ¿Mecanismo de la disautonomía letal y terapia inmunomoduladora estándar?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Extensión bacteriana al centro vasomotor bulbar; esteroides intratecales y ceftriaxona.",
      },
      {
        id: "B",
        label: "B",
        text: "Desmielinización autoinmune de ganglios autonómicos periféricos; IGIV o plasmaféresis en primeros días.",
      },
      {
        id: "C",
        label: "C",
        text: "Miocarditis viral fulminante; marcapasos definitivo, sin IGIV por sobrecarga volumétrica.",
      },
      {
        id: "D",
        label: "D",
        text: "Muerte neuronal medular por citocinas; metilprednisolona en pulsos imperativa.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "SGB clásico (AIDP) con disociación albúmino-citológica. Disautonomía periférica (ataque a nervios autonómicos) explica oscilaciones HTA/taquicardia ↔ hipotensión/bradicardia/asistolia. Tratamiento: IGIV o PLEX en primeras 2 semanas; esteroides no eficaces en SGB clásico.",
    keyPoints: [
      "Disautonomía = causa principal de muerte no respiratoria en SGB.",
      "IGIV o plasmaféresis equivalentes; iniciar precoz (<2 semanas).",
      "Corticosteroides no benefician SGB clásico.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Guillain-Barré y disautonomía

• Polirradiculoneuropatía post-infecciosa (mimetismo molecular; Campylobacter clásico).
• Desmielinización motora + autonómica periférica → barorreflejos destruidos.
• Oscilaciones simpáticas/parasimpáticas: HTA/taquicardia ↔ bradicardia/asistolia.
• Tratamiento: IGIV o plasmaféresis (equivalentes); ideal <2 semanas.
• Esteroide sistémico: ineficaz en ensayos; no indicado.

Perla: SGB en UCI puede hacer asistolia al intubar por hiperreactividad vagal, no solo hipoxia.

Referencias: AAN Guidelines for Treatment of Guillain-Barré Syndrome.`,
  },
  {
    id: "dr-q-21",
    examArea: "Geriatría / Medicina Interna / Farmacología",
    topic: "Geriatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "polifarmacia", "beers", "fa"],
    statement:
      "Mujer de 84 años con caída desde su propia altura, TCE leve e hipoglucemia severa (45 mg/dL) en domicilio. FA no valvular, DM2, osteoartritis, ERGE. Medicamentos: glibenclamida 5 mg/día, rivaroxabán 20 mg/día, aspirina 100 mg/día (prevención primaria), omeprazol 20 mg/día (5 años). TAC: hematoma subdural laminar crónico agudizado. Sangrado digestivo oculto positivo. Barthel 85, FRAIL 2 (pre-frágil), TUG 18 s. Hb 9.2 g/dL, VCM 82, TFG 45 mL/min. Aplicando Criterios de Beers AGS 2023, ¿cuál es la conducta farmacológica integral prioritaria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender glibenclamida y aspirina, retirar omeprazol e iniciar warfarina sustituyendo rivaroxabán por riesgo de sangrado de DOACs.",
      },
      {
        id: "B",
        label: "B",
        text: "Suspender glibenclamida, suspender aspirina (sin indicación en prevención primaria), retirar omeprazol gradualmente y cambiar rivaroxabán por apixabán.",
      },
      {
        id: "C",
        label: "C",
        text: "Mantener glibenclamida, aspirina y rivaroxabán (doble terapia) y omeprazol para proteger contra sangrado GI.",
      },
      {
        id: "D",
        label: "D",
        text: "Cambiar glibenclamida por iSGLT2 independiente de TFG, suspender aspirina, digoxina para FA y suspender rivaroxabán.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Iatrogenia en cascada: hipoglucemia por sulfonilurea → caída → hematoma en anticoagulada/antiagregada sin indicación. Beers 2023: evitar aspirina en prevención primaria >65 años; evitar rivaroxabán crónico en FA (mayor sangrado GI vs otros DOAC); evitar glibenclamida; evitar IBP crónico >8 semanas sin indicación.",
    keyPoints: [
      "Beers 2023: aspirina NO en prevención primaria >65 años.",
      "Rivaroxabán → evitar en FA crónica; preferir apixabán si sangrado/fragilidad.",
      "Glibenclamida: hipoglucemia prolongada letal en anciano.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Geriatría
Polifarmacia · Beers 2023

• Caída + hipoglucemia + anticoagulación/antiagregación injustificada = iatrogenia en cascada.
• Beers 2023: aspirina evitar en prevención primaria; rivaroxabán evitar en FA crónica (sangrado GI); sulfonilureas evitar; IBP crónico evitar sin indicación.
• DOACs preferidos sobre warfarina cuando están indicados.

Perla: FA + rivaroxabán + sangrado GI o fragilidad → considerar apixabán. Aspirina primaria >70 años no previene IAM pero sí hemorragias.

Referencias: AGS Beers Criteria 2023; STOPP/START v3.`,
  },
  {
    id: "dr-q-22",
    examArea: "Geriatría / Neurología / Urgencias",
    topic: "Geriatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "delirium", "cuerpos_lewy", "dcl"],
    statement:
      "Hombre de 78 años con demencia de 2 años (fluctuaciones cognitivas, alucinaciones visuales estructuradas, parkinsonismo rígido-acinético sin temblor). Levodopa/carbidopa y donepezilo. Agitación, agresividad y fluctuación extrema de conciencia en 48 h. Temp 37.8 °C, SpO2 93%. Rigidez en rueda dentada, globo vesical palpable. Leucocitos 13,000, PCR 45, creatinina 1.6 (basal 0.9). EGO: piuria masiva, nitritos (+). Delirium hiperactivo sobre DCL. ¿Conducta antipsicótica y de soporte INICIAL obligatoria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Haloperidol 5 mg IM inmediato para control rápido de agitación severa.",
      },
      {
        id: "B",
        label: "B",
        text: "Risperidona 2 mg oral y aumentar levodopa/carbidopa para mejorar parkinsonismo.",
      },
      {
        id: "C",
        label: "C",
        text: "Evitar antipsicóticos típicos/atípicos con alto bloqueo D2; medidas no farmacológicas, tratar infección, drenar globo vesical y, si ineludible, quetiapina a dosis ultrabajas.",
      },
      {
        id: "D",
        label: "D",
        text: "Midazolam IV para sedación profunda; benzodiacepinas responden bien en DCL.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "DCL: sensibilidad neuroléptica severa (~50%). Haloperidol/risperidona contraindicados (rigidez, coma, muerte). Delirium por ITU + retención urinaria: tratar causa. Si farmacológico inevitable: quetiapina o clozapina (rápida disociación D2). Benzodiacepinas empeoran delirium en ancianos.",
    keyPoints: [
      "DCL: alucinaciones visuales + parkinsonismo + fluctuaciones.",
      "Haloperidol en DCL = contraindicado (sensibilidad neuroléptica).",
      "Delirium: corregir causa (infección, retención) antes que sedar.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Geriatría
Delirium sobre Demencia por Cuerpos de Lewy

• DCL: deficiencia colinérgica y dopaminérgica; bloqueo D2 → síndrome neuroléptico-like.
• Delirium = epifenómeno de espina irritativa (ITU, retención urinaria).
• Evitar haloperidol y risperidona; si inevitable: quetiapina ultrabaja.
• Benzodiacepinas contraindicadas en delirium del anciano (Beers).

Perla: Alucinaciones visuales vívidas + parkinsonismo + demencia = Lewy. Antipsicóticos típicos = veneno letal.

Referencias: AGS / NICE Delirium and Dementia Guidelines.`,
  },
  {
    id: "dr-q-23",
    examArea: "Geriatría / Cardiología / Valoración Preoperatoria",
    topic: "Geriatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "fragilidad", "vgi", "tavi"],
    statement:
      "Hombre de 88 años, valoración preoperatoria para reemplazo valvular aórtico (TAVI vs quirúrgico) por estenosis aórtica severa sintomática (síncope). NYHA III, EPOC, artrosis severa. Barthel 35/100, Lawton 1/8, MMSE 12/30, pérdida 8 kg/6 meses, handgrip 14 kg, pantorrilla <31 cm, Fried 5/5, SPPB 2/12. Albúmina 2.8 g/dL. ¿Recomendación terapéutica más ética y basada en evidencia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reemplazo valvular quirúrgico abierto para mejorar gasto cardíaco y permitir rehabilitación postoperatoria.",
      },
      {
        id: "B",
        label: "B",
        text: "Frágil terminal (demencia severa, dependencia ABVD, SPPB <4): intervenciones invasivas fútiles; manejo conservador y cuidados paliativos.",
      },
      {
        id: "C",
        label: "C",
        text: "TAVI urgente; procedimiento mínimamente invasivo revertirá automáticamente fragilidad y dependencia funcional.",
      },
      {
        id: "D",
        label: "D",
        text: "Testosterona y hormona de crecimiento para revertir caquexia; posponer cirugía hasta SPPB >8.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Fragilidad extrema (Fried 5/5, SPPB 2), dependencia severa (Barthel 35) y demencia avanzada (MMSE 12): reparar válvula no revierte colapso multidominio. TAVI y cirugía contraindicados por futilidad, alta mortalidad periprocedimiento y sin beneficio funcional.",
    keyPoints: [
      "Edad cronológica no contraindica cirugía; fragilidad severa sí.",
      "SPPB <4 + demencia + dependencia = futilidad para TAVI/cirugía.",
      "Tratar al paciente, no solo al ecocardiograma.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Geriatría
Fragilidad y decisión valvular

• Fragilidad = homeostenosis; reserva fisiológica agotada.
• Fried 5/5 + SPPB 2 + Barthel 35 + MMSE 12 = vulnerabilidad extrema.
• TAVI no revierte sarcopenia ni demencia.
• Manejo conservador/paliativo cuando no hay beneficio funcional a 1 año.

Perla: Un robusto de 90 puede ir a TAVI; un frágil dependiente no, aunque tenga EA severa.

Referencias: AGS; ACC/AHA Valvular Heart Disease Guidelines in Older Adults.`,
  },
  {
    id: "dr-q-24",
    examArea: "Geriatría / Medicina Interna / Urgencias",
    topic: "Geriatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "polifarmacia", "stopp", "hipotension_ortostatica"],
    statement:
      "Hombre de 76 años con síncope postprandial y mareo ortostático matutino. HTA, insomnio, neuropatía diabética, HPB. Amlodipino 10 mg, tamsulosina 0.4 mg AM, amitriptilina 25 mg noche, enalapril 20 mg. Decúbito: PA 145/80, FC 70. Ortostatismo: PA 105/60 (↓40 sistólica), FC 72 (sin taquicardia compensatoria). Mucosas secas, retención fecal. ¿Intervención farmacológica inicial según STOPP/Beers?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fludrocortisona y midodrina, manteniendo antihipertensivos de base.",
      },
      {
        id: "B",
        label: "B",
        text: "Suspender de golpe tamsulosina, amitriptilina, amlodipino y enalapril; reposo estricto 48 h.",
      },
      {
        id: "C",
        label: "C",
        text: "Deprescripción STOPP: suspender amitriptilina, ajustar/suspender tamsulosina, reducir amlodipino e hidratación/medias compresivas.",
      },
      {
        id: "D",
        label: "D",
        text: "Marcapasos bicameral urgente por bloqueo AV inminente independiente de fármacos.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Hipotensión ortostática iatrogénica: tamsulosina (alfa-bloqueador), amlodipino y amitriptilina (anticolinérgica + anti-alfa-1). STOPP/Beers: evitar amitriptilina >65 años. Deprescripción escalonada superior a cascada con fludrocortisona/midodrina.",
    keyPoints: [
      "Hipotensión ortostática en anciano = iatrogenia hasta probar lo contrario.",
      "Amitriptilina: alta carga anticolinérgica; evitar en >65 años.",
      "No cascada de prescripción (fludrocortisona) sin retirar culpables.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Geriatría
Hipotensión ortostática y STOPP

• Barorreceptores envejecidos + tamsulosina + amlodipino + amitriptilina = síncope.
• STOPP/Beers: amitriptilina evitar; alfa-bloqueadores revisar en ortostatismo.
• Deprescripción escalonada > suspender todo de golpe (rebote HTA).

Perla: Revisa alfa-bloqueadores, tricíclicos y vasodilatadores antes del Holter.

Referencias: STOPP/START v3; Beers 2023.`,
  },
  {
    id: "dr-q-25",
    examArea: "Geriatría / Medicina Interna / Rehabilitación",
    topic: "Geriatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "sarcopenia", "had", "hospitalizacion"],
    statement:
      "Hombre de 82 años al alta tras 14 días por NAC resuelta. Previo al ingreso: Barthel 95, caminaba 1 km/día. Hospitalización con reposo en cama, sonda vesical preventiva (retirada), ingesta pobre. Actual: Barthel 45, no se levanta solo, claudicación, atrofia cuádriceps, SARC-F >4. Fuerza 3/5 simétrica, reflejos conservados. ¿Plan de alta de máxima prioridad para recuperar trayectoria funcional?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reposo relativo en casa; deambulación limitada al baño con caminador.",
      },
      {
        id: "B",
        label: "B",
        text: "Rehabilitación multicomponente (fuerza/resistencia), proteína 1.2–1.5 g/kg/día y corrección de déficit de vitamina D.",
      },
      {
        id: "C",
        label: "C",
        text: "Megestrol acetato y esteroides anabólicos para ganancia ponderal y regeneración muscular.",
      },
      {
        id: "D",
        label: "D",
        text: "Institucionalización definitiva; deterioro Barthel 50 puntos es irreversible a los 82 años.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Discapacidad asociada a hospitalización (HAD) y sarcopenia aguda: ~10 días de cama ≈ envejecimiento muscular acelerado. Tratamiento gold standard (EWGSOP2): ejercicio de fuerza progresivo + proteína 1.2–1.5 g/kg/día + vitamina D.",
    keyPoints: [
      "10 días de cama en hospital ≈ sarcopenia aguda severa.",
      "Sarcopenia: fuerza + proteína; no reposo ni megestrol.",
      "HAD es potencialmente reversible con rehabilitación agresiva.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Geriatría
Sarcopenia hospitalaria (HAD)

• Reposo + inflamación + malnutrición = miopatía por inmovilidad.
• EWGSOP2: ejercicio de resistencia + proteína 1.2–1.5 g/kg/día.
• Megestrol: grasa, trombosis, mortalidad; Beers evitar.
• La cama es veneno iatrogénico en el anciano.

Perla: Sarcopenia se trata con pesas y proteína, no con reposo.

Referencias: EWGSOP2; geriatric hospital medicine guidelines.`,
  },
  {
    id: "dr-q-26",
    examArea: "Geriatría / Medicina Interna / Farmacología",
    topic: "Geriatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "anticolinergico", "delirium", "incontinencia"],
    statement:
      "Mujer de 80 años con confusión aguda, xerostomía, constipación 5 días e intolerancia oral. Incontinencia de urgencia diagnosticada hace 2 semanas; inició oxibutinina 5 mg c/8 h. MCI previo. CAM positivo (delirium). Globo vesical masivo, fecaloma impactado. ¿Fisiopatología del evento adverso y alternativa con mejor perfil de seguridad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Toxicidad colinérgica excesiva; suspender e iniciar betanecol procinético.",
      },
      {
        id: "B",
        label: "B",
        text: "Antagonista muscarínico anticolinérgico que cruza BHE (delirium) y bloquea parasimpático periférico (retención urinaria/fecaloma); suspender, derivar orina y a futuro considerar mirabegrón.",
      },
      {
        id: "C",
        label: "C",
        text: "IAM silente por vasoconstricción de oxibutinina; ECG y trombólisis.",
      },
      {
        id: "D",
        label: "D",
        text: "Desenmascara Alzheimer; donepezilo alto + mantener oxibutinina.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Oxibutinina: antimuscarínico lipofílico de 1.ª generación. Cruza BHE → delirium en cerebro con baja reserva colinérgica. Periféricamente: retención urinaria y estreñimiento. Beers: evitar fuertemente. Alternativa en anciano: mirabegrón (agonista beta-3, sin actividad anticolinérgica).",
    keyPoints: [
      "Toxidrome anticolinérgico: delirium, seco, retención urinaria, estreñimiento.",
      "Oxibutinina contraindicada en anciano con deterioro cognitivo.",
      "Mirabegrón: 1.ª línea farmacológica geriátrica para vejiga hiperactiva.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Geriatría
Carga anticolinérgica · Oxibutinina

• Oxibutinina bloquea M1 central (delirium) y M3 periférico (retención, estreñimiento).
• Beers 2023: evitar anticolinérgicos potentes en ancianos.
• 1.ª línea incontinencia: rehabilitación suelo pélvico; luego mirabegrón.

Mnemotecnia anticolinérgico: loco, seco, rojo, caliente, ciego.

Referencias: Beers 2023; NICE Incontinence Guidelines.`,
  },
  {
    id: "dr-q-27",
    examArea: "Geriatría / Cuidados Paliativos / Medicina Interna",
    topic: "Geriatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "paliativos", "ulceras", "kennedy"],
    statement:
      "Mujer de 92 años, Alzheimer FAST 7F (postrada, disfagia severa, sin sonda por decisión anticipada). Cambios posición c/2 h, colchón alterno, cuidados óptimos. PA 85/50, perfusión periférica decaída. En 48 h: úlcera sacra en mariposa/pera, de mácula púrpura a escara necrótica estadio IV pese a prevención perfecta. Albúmina 2.1, colesterol 105. ¿Diagnóstico conceptual y meta de cuidado ética?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Úlcera por presión negligente; desbridamiento quirúrgico extenso y colgajo miocutáneo.",
      },
      {
        id: "B",
        label: "B",
        text: "Úlcera terminal de Kennedy (falla cutánea al fin de vida); manejo paliativo local (dolor, exudado, olor).",
      },
      {
        id: "C",
        label: "C",
        text: "Fascitis necrotizante; amputación e carbapenémicos IV.",
      },
      {
        id: "D",
        label: "D",
        text: "Déficit nutricional reversible; PEG urgente para hiperalimentar y cicatrizar.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Falla cutánea terminal (skin failure): úlcera de Kennedy en sacro, aparición fulminante pese a cuidado óptimo, en caquexia e hipoperfusión periférica. Marca mortalidad inminente. Manejo paliativo; desbridamiento quirúrgico o PEG en FAST 7F son fútiles/contraindicados (AGS/ESPEN).",
    keyPoints: [
      "Úlcera Kennedy: mariposa sacra fulminante pese a prevención = fin de vida.",
      "La piel también claudica (perfusión centralizada).",
      "PEG en demencia avanzada no prolonga vida ni cicatriza.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Geriatría
Úlcera terminal de Kennedy

• Skin failure al final de la vida: piel pierde integridad vascular.
• Lesión sacra fulminante en moribundo ≠ negligencia.
• Manejo: paliativo (apósitos, olor, analgesia).
• PEG en FAST 7: contraindicada (AGS Choosing Wisely).

Perla: Úlcera mariposa fulminante en paciente agonizante = Kennedy. Palía, no mutiles.

Referencias: AGS; NPUAP skin failure guidelines.`,
  },
  {
    id: "dr-q-28",
    examArea: "Geriatría / Cardiología / Medicina Interna",
    topic: "Geriatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "hfpef", "stopp", "aines"],
    statement:
      "Mujer de 85 años con disnea NYHA III y edema EEII. HFpEF (FEVI 55%, disfunción diastólica II). Empagliflozina y losartán. Hace 10 días inició naproxeno 500 mg c/12 h por artrosis de cadera. PA 165/90, JVP elevada, crépitos, edema foveolar II. Creatinina 1.8 (basal 1.0), NT-proBNP 2500. ¿Modificación farmacológica causal y tratamiento descongestivo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aumentar losartán y mantener naproxeno con IBP protector.",
      },
      {
        id: "B",
        label: "B",
        text: "Suspender naproxeno, furosemida IV titulable y analgesia no nefrotóxica (acetaminofén/parches).",
      },
      {
        id: "C",
        label: "C",
        text: "Suspender empagliflozina e iniciar digoxina oral.",
      },
      {
        id: "D",
        label: "D",
        text: "Dobutamina para mejorar diástole y mantener analgésicos.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "AINE (naproxeno) en HFpEF: inhibe prostaglandinas renales → retención Na/H2O + LRA. STOPP v3: detener AINEs en falla cardíaca. Retirar naproxeno + furosemida IV. Mantener empagliflozina (piedra angular HFpEF). Digoxina inútil en FEVI preservada.",
    keyPoints: [
      "STOPP: AINEs contraindicados en falla cardíaca (sistólica o diastólica).",
      "AINE + ARA II = riesgo colapso glomerular.",
      "Empagliflozina beneficia HFpEF; no suspender.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Geriatría
HFpEF y AINEs (STOPP)

• Corazón rígido + AINE = retención hídrica + edema pulmonar + LRA.
• STOPP v3: stop AINE en IC.
• Tratar: retirar toxina + diurético de asa.
• iSGLT2 = tratamiento base HFpEF; digoxina no en diastólica.

Perla: Naproxeno/ibuprofeno en anciano con IC = ahogarlo en su propio volumen.

Referencias: STOPP/START v3; Beers 2023; HFpEF guidelines.`,
  },
  {
    id: "dr-q-29",
    examArea: "Geriatría / Infectología / Medicina Interna",
    topic: "Geriatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "bacteriuria", "itu", "choosing_wisely"],
    statement:
      "Mujer de 89 años con Alzheimer moderado, incontinencia crónica con pañal, HTA. Asintomática: come bien, camina, sin fiebre ni delirium. Familia solicita urocultivo por olor fuerte a amoníaco en pañal. Cultivo: E. coli >100,000 UFC/mL sensible. Parcial: esterasa leucocitaria (+), 15 leucocitos/campo. ¿Conducta correcta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "ITU atípica geriátrica; ciprofloxacino 7 días por >100,000 UFC y leucocitos.",
      },
      {
        id: "B",
        label: "B",
        text: "Bacteriuria asintomática; olor y leucocitos no justifican antibióticos (resistencia, C. difficile).",
      },
      {
        id: "C",
        label: "C",
        text: "Profilaxis con nitrofurantoína nocturna 6 meses para esterilizar vía urinaria.",
      },
      {
        id: "D",
        label: "D",
        text: "Hemocultivos e ingreso hospitalario con ceftriaxona IV por pielonefritis silente.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Bacteriuria asintomática: cultivo positivo sin síntomas genitourinarios ni sistémicos (fiebre, delirium agudo). Olor a amoníaco en pañal ≠ ITU. AGS Choosing Wisely / IDSA: no tratar BA; no previene urosepsis pero sí resistencia y colitis por C. difficile.",
    keyPoints: [
      "Cultivo (+) sin síntomas = bacteriuria asintomática; no tratar.",
      "Choosing Wisely: no cultivar/tratar orina sin síntomas locales o sistémicos.",
      "Piuria sola no diagnostica ITU en anciano con pañal.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Geriatría
Bacteriuria asintomática

• Prevalencia hasta 20–50% en ancianos; biopelículas comensales.
• Olor fétido en pañal ≠ infección activa.
• Tratar BA: no beneficio, sí resistencia y C. difficile.
• ITU requiere síntomas: disuria, urgencia nueva, fiebre o delirium claro.

Perla: Piuria + cultivo (+) sin síntomas = bacteriuria asintomática. No tratar.

Referencias: IDSA Guidelines; AGS Choosing Wisely.`,
  },
  {
    id: "dr-q-30",
    examArea: "Geriatría / Neurogeriatría / Medicina Interna",
    topic: "Geriatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "demencia", "bpsd", "dolor"],
    statement:
      "Hombre de 86 años con Alzheimer severo (GDS 6). Agitación vespertina, agresividad al baño/cambio de pañal y deambulación nocturna (sundowning). Agresividad solo cuando flexionan rodillas o desvisten para ducha. Contracturas en rodillas, dolor evidente al movilizar caderas/rodillas. ¿Intervención de primera línea para mitigar agresividad en cuidados básicos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Haloperidol 1 mg gotas 30 min antes del baño para sedación química.",
      },
      {
        id: "B",
        label: "B",
        text: "Memantina 20 mg + citalopram para modular afecto disfórico.",
      },
      {
        id: "C",
        label: "C",
        text: "Presumir dolor no tratado o miedo; ensayo analgésico programado (acetaminofén horario) e higiene no forzada.",
      },
      {
        id: "D",
        label: "D",
        text: "Unidad psiquiátrica con sujeción mecánica y ECT.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "BPSD con desencadenante mecánico (flexión articular dolorosa): agresión = lenguaje de necesidad no cubierta (dolor). AGS: 1.ª línea = buscar causa + ensayo analgésico programado, no antipsicóticos de rutina (black box: ACV y muerte en demencia).",
    keyPoints: [
      "Agitación en demencia severa = dolor o infección hasta probar lo contrario.",
      "Scheduled analgesic trial superior a antipsicóticos en BPSD por dolor.",
      "Haloperidol como \"chaleco químico\" = antiético y mortal.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Geriatría
BPSD y dolor no verbalizado

• Demencia severa: afasia/agnosia impiden verbalizar dolor → agresión instintiva.
• Agitación solo en baño/cambio pañal + artrosis = dolor mecánico.
• 1.ª línea: analgésico programado + rutinas no traumáticas.
• Antipsicóticos solo si psicosis/riesgo letal tras fallar medidas no farmacológicas.

Perla: Cambio súbito de comportamiento en demenciado muto = dolor o infección. Acetaminofén antes que risperidona.

Referencias: AGS Guidelines for Management of BPSD.`,
  },
  {
    id: "dr-q-31",
    examArea: "Medicina Interna / Medicina Hospitalaria / Infectología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "nap", "vap", "sepsis", "mdr"],
    statement:
      "Hombre de 68 años, hospitalizado día 9 por IAMCEST complicado con insuficiencia cardíaca. Intubado días 2–6, extubado hace 48 h. Antecedentes: DM2, ERC estadio 3b. Actual: fiebre 39.2 °C, tos productiva purulenta, disnea. PA 88/52 mmHg, FC 118 lpm, FR 28 rpm, SpO2 89% con VMK 40%. MV disminuido base derecha, estertores crepitantes. Rx tórax: consolidación lobar derecha nueva. Laboratorios: leucocitos 18,500/mm³, PCR 280 mg/L, procalcitonina 8 ng/mL, lactato 3.8 mmol/L, creatinina 2.4 mg/dL (basal 1.6), pH 7.28, PaCO2 32, HCO3 16. Cultivo esputo preliminar: Pseudomonas aeruginosa. Antibióticos previos en UCI: piperacilina-tazobactam 5 días. ¿Diagnóstico prioritario y esquema empírico inmediato más apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Neumonía adquirida en la comunidad superinfectada; reiniciar amoxicilina-ácido clavulánico oral y observar 48 h.",
      },
      {
        id: "B",
        label: "B",
        text: "Neumonía asociada a ventilación mecánica activa; meropenem + vancomicina sin ajuste por función renal.",
      },
      {
        id: "C",
        label: "C",
        text: "Neumonía asociada a atención en salud (NAC-H) con shock séptico; iniciar meropenem + amikacina ajustados a TFG y reanimación con cristaloides + vasopresores según respuesta.",
      },
      {
        id: "D",
        label: "D",
        text: "Edema pulmonar cardiogénico recurrente; diuréticos IV en bolo y suspender antibióticos hasta hemocultivos definitivos.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Consolidación nueva >48 h post-extubación en paciente con factores de riesgo hospitalario = NAC-H/VAP tardía. Shock séptico (hipotensión + lactato elevado). Exposición previa a anti-pseudomónicos obliga cobertura MDR: carbapenémico + aminoglucósido/amikacina según IDSA/ATS, ajustados a ERC. Reanimación séptica inmediata (Surviving Sepsis).",
    keyPoints: [
      "NAC-H: neumonía ≥48 h de hospitalización o ≤48 h post-alta.",
      "Exposición previa a anti-pseudomónicos → cubrir MDR (Pseudomonas).",
      "Shock séptico: antibiótico IV precoz + fluidos + vasopresores.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
NAC-H / sepsis por Pseudomonas MDR

Fisiopatología:
• Intubación previa + UCI + antibióticos de amplio espectro seleccionan Pseudomonas y resistencia.
• Consolidación nueva + inestabilidad hemodinámica + lactato = sepsis, no solo edema pulmonar.

Prioridad clínica:
1. Reanimación (ABC, lactato, perfusión).
2. Antibiótico empírico IV en <1 h ajustado a TFG y exposición previa.
3. Cultivos antes de ATB si no retrasa dosis.

Distractores:
• A: NAC comunitaria no explica cronología ni gravedad; ATB oral inadecuado.
• B: Ya no está ventilado; VAP activa no aplica; vancomicina sin indicación MRSA clara.
• D: Retrasar ATB en shock séptico aumenta mortalidad; Rx y clínica son infecciosas.

Perla hospitalaria: Post-UCI + fiebre + consolidación nueva = NAC-H hasta lo contrario. Si recibió pip-tazo, sube a carbapenémico + amikacina.

Referencias: IDSA/ATS HAP/VAP Guidelines; Surviving Sepsis Campaign; SHM.`,
  },
  {
    id: "dr-q-32",
    examArea: "Medicina Interna / Medicina Hospitalaria / Nefrología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "aki", "hiperkalemia", "kdigo"],
    statement:
      "Hombre de 72 años, día 4 de hospitalización por descompensación de IC (FEVI 30%). Medicamentos: furosemida IV, enalapril, espironolactona 25 mg, apixabán. Oliguria 12 h, somnolencia. PA 98/60 mmHg, FC 52 lpm irregular. Edema ++. ECG: ondas T picudas simétricas, ensanchamiento QRS 130 ms, desaparición de onda P. Laboratorios: K+ 7.1 mEq/L, Na+ 132, creatinina 3.8 mg/dL (basal 1.2), BUN 88, pH 7.18, HCO3 14, glucosa 110. ¿Conducta inmediata prioritaria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender espironolactona y enalapril; iniciar diálisis de urgencia como única medida; no administrar calcio ni insulina hasta confirmar K+ en gasometría.",
      },
      {
        id: "B",
        label: "B",
        text: "Gluconato de calcio IV, insulina regular + dextrosa, beta-2 inhalado; suspender espironolactona/enalapril; evaluar diálisis urgente; evitar bicarbonato salvo acidosis severa con QRS prolongado según protocolo.",
      },
      {
        id: "C",
        label: "C",
        text: "Kayexalato oral 30 g y furosemida 80 mg IV; mantener enalapril para protección renal; repetir K+ en 24 h.",
      },
      {
        id: "D",
        label: "D",
        text: "Bicarbonato de sodio 150 mEq IV en bolo rápido como primera línea; iniciar amiodarona por bradicardia.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Emergencia hiperkalemica con cambios ECG (T picudas, QRS ancho, ondas P ausentes) + AKI sobre IC. Prioridad: estabilizar membrana (gluconato calcio IV), shift intracelular (insulina-dextrosa, beta-2), eliminar espironolactona/ACEi. Kayexalato no es medida de rescate aguda. Diálisis si refractaria o AKI oligúrica severa (KDIGO).",
    keyPoints: [
      "ECG cambiado + K+ >6.5 = emergencia; calcio IV primero.",
      "Triada AKI en IC: diuréticos + ACEi + espironolactona.",
      "Kayexalato no salva en minutos; no retrasa medidas IV.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
Hiperkalemia grave con ECG en paciente hospitalizado

Fisiopatología:
• AKI + aldosterona bloqueada (espironolactona) + ↓ GFR + hipoperfusión = retención K+.
• Cambios ECG = riesgo de arritmia letal inmediata.

Prioridad:
1. Gluconato calcio IV (protección membrana).
2. Insulina + dextrosa; salbutamol nebulizado.
3. Suspender ahorradores de K+.
4. Diálisis si no responde o oliguria.

Distractores:
• A: Retrasar calcio/insulina es mortal; diálisis sola no es primera medida sin estabilizar membrana.
• C: Kayexalato lento; mantener ACEi empeora hiperkalemia.
• D: Bicarbonato solo si acidosis severa; amiodarona no trata hiperkalemia.

Perla hospitalaria: IC descompensada + espironolactona + oliguria + T picuda = hiperkalemia hasta demostrar lo contrario. Calcio primero, siempre.

Referencias: KDIGO AKI; ACP/SHM electrolyte emergencies.`,
  },
  {
    id: "dr-q-33",
    examArea: "Medicina Interna / Medicina Hospitalaria / Endocrinología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "hiponatremia", "siadh"],
    statement:
      "Mujer de 58 años, día 6 post-cirugía de meningioma. Recibe morfina PCA, ondansetrón, sertralina. Somnolencia progresiva. PA 125/70, FC 88, SpO2 97%. Neurológico: GCS 13, sin focalidad nueva. Na+ inicial al ingreso 138; hoy Na+ 118 mEq/L, osmolalidad sérica 248 mOsm/kg, osmolalidad urinaria 520 mOsm/kg, Na urinario 65 mEq/L, volumen extracelular euvolémico al examen. TSH y cortisol normales. ¿Diagnóstico principal y manejo inicial más apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hiponatremia hipervolémica por SIADH; restricción hídrica estricta 800 mL/día y furosemida 40 mg IV.",
      },
      {
        id: "B",
        label: "B",
        text: "Pseudohiaponatremia por hiperglucemia; corregir Na+ con fórmula y administrar insulina.",
      },
      {
        id: "C",
        label: "C",
        text: "SIADH intrahospitalaria euvolémica; restricción hídrica, suspender fármacos desencadenantes y, si síntomas neurológicos, considerar suero salino hipertónico 3% bajo monitorización estrecha con meta de corrección ≤8 mEq/L en 24 h.",
      },
      {
        id: "D",
        label: "D",
        text: "Hiponatremia por depleción volémica postquirúrgica; expansión agresiva con SF 0.9% 2 L en 2 h.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Hiponatremia hipotónica euvolémica con orina inapropiadamente concentrada (Uosm >100, Na urinario >30) = SIADH (cirugía SNC, SSRI, morfina). GCS 13 = sintomática. Manejo: restricción hídrica, retirar desencadenantes; si sintomática, SSH 3% con corrección lenta (≤8 mEq/L/24 h) para evitar mielinolisis osmótica.",
    keyPoints: [
      "SIADH: euvolemia + Uosm alta + Na urinario alto + hipotónica.",
      "Sintomática: SSH 3% con meta corrección ≤8 mEq/L/24 h.",
      "No expansión volémica en euvolemia (empeora dilución).",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
Hiponatremia euvolémica intrahospitalaria (SIADH)

Fisiopatología:
• ADH inapropiada post-neurocirugía + SSRI → retención hídrica libre.
• Na+ 118 + GCS 13 = riesgo de herniación si no se corrige controladamente.

Prioridad:
1. Confirmar hipotónica verdadera (osmolalidad baja).
2. Restricción hídrica + suspender desencadenantes.
3. Si sintomática: SSH 3% con cálculo de déficit y velocidad segura.

Distractores:
• A: Furosemida no es 1.ª línea en SIADH euvolémica; puede empeorar si depleciona.
• B: Glucosa normal; no es pseudohiaponatremia.
• D: Expansión en euvolemia agrava hiponatremia.

Perla hospitalaria: Na+ cae >10 puntos en hospital + post-neurocirugía + SSRI = SIADH. Corrige lento o matas con mielinolisis.

Referencias: ACP/SHM hyponatremia guidelines; European hyponatremia guideline.`,
  },
  {
    id: "dr-q-34",
    examArea: "Medicina Interna / Medicina Hospitalaria / Nefrología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "acido_base", "gasometria"],
    statement:
      "Hombre de 55 años, día 3 de hospitalización por exacerbación de EPOC. Intubado hace 6 h por acidosis respiratoria. Ventilación mecánica: Vt 450 mL, FR 16, PEEP 5. Recibe furosemida y cloruro de potasio por hipokalemia previa. Gasometría actual: pH 7.52, PaCO2 28 mmHg, PaO2 88, HCO3 32 mEq/L, Na+ 138, K+ 2.9, Cl- 88. Anion gap 18. ¿Interpretación del trastorno ácido-base y conducta ventilatoria prioritaria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Alcalosis respiratoria compensada; aumentar FR a 22 para mantener PaCO2 35 y corregir alcalosis.",
      },
      {
        id: "B",
        label: "B",
        text: "Alcalosis metabólica hipoclorémica (vómitos/diuréticos) con alcalosis respiratoria concomitante por hiperventilación iatrogénica; reducir ventilación al mínimo tolerado, reponer K+/Cl- y tratar causa.",
      },
      {
        id: "C",
        label: "C",
        text: "Acidosis metabólica con alcalosis respiratoria; administrar bicarbonato IV 100 mEq.",
      },
      {
        id: "D",
        label: "D",
        text: "Acidosis respiratoria crónica descompensada; aumentar PEEP a 12 y sedación profunda.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "pH alto + PaCO2 baja + HCO3 elevado = trastorno mixto: alcalosis respiratoria (sobreventilación mecánica/iATROGénica) + alcalosis metabólica hipoclorémica (Cl 88, K 2.9, diuréticos). Anion gap levemente elevado puede ser albumina/lactato. Conducta: ajustar ventilador (↓ FR/Vt), reponer KCl, no bicarbonato.",
    keyPoints: [
      "Mixto: pH ↑ + PaCO2 ↓ + HCO3 ↑ = alcalosis respiratoria + metabólica.",
      "Cl bajo + K bajo sugiere alcalosis metabólica por diuréticos/depleción.",
      "Sobreventilación iatrogénica empeora alcalosis respiratoria.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
Trastorno ácido-base mixto intrahospitalario

Fisiopatología:
• Diuréticos → pérdida Cl-/K+ → alcalosis metabólica de contracción.
• VM agresiva post-intubación → ↓ PaCO2 → alcalosis respiratoria aditiva.
• pH 7.52 con riesgo de arritmias, vasoespasmo cerebral, hipokalemia refractaria.

Prioridad:
1. Interpretar gasometría en contexto clínico (ventilador + diuréticos).
2. Ajustar VM; reponer K+/Cl-.
3. Evitar bicarbonato (empeoraría alcalosis).

Distractores:
• A: Aumentar FR agrava alcalosis respiratoria.
• C: pH ya alcalino; bicarbonato contraindicado.
• D: PaCO2 está baja, no acidosis respiratoria.

Perla hospitalaria: EPOC intubado + diuréticos + pH >7.48 = revisa ventilador ANTES de pedir más gasometrías.

Referencias: ACP acid-base disorders; SHM critical care.`,
  },
  {
    id: "dr-q-35",
    examArea: "Medicina Interna / Medicina Hospitalaria / Geriatría",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "delirium", "postoperatorio"],
    statement:
      "Mujer de 81 años, día 2 post-fractura de cadera operada. Antecedentes: demencia leve, HTA, cataratas. Medicamentos hospitalarios: tramadol PRN, dipirona, quetiapina 25 mg noche (prescrita por insomnio), lorazepam 1 mg noche. Familia reporta agitación nocturna, desorientación fluctuante, alucinaciones visuales (\"insectos en la pared\"), inversión sueño-vigilia. PA 150/85, FC 98, Temp 37.4 °C. Deshidratación leve. Hemograma normal, Na+ 151, BUN 48, creatinina 1.4 (basal 0.9), Ca++ 8.2, glucosa 142. Rx tórax y EGO normales. CAM positivo. ¿Plan inicial prioritario?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aumentar quetiapina a 100 mg y mantener lorazepam; aplicar contención física nocturna.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar TAC cerebral urgente y EEG; iniciar aciclovir empírico por alucinaciones visuales.",
      },
      {
        id: "C",
        label: "C",
        text: "Suspender benzodiacepinas y antipsicóticos no indicados; corregir hipernatremia/deshidratación; reorientación, movilización precoz, corregir déficit sensorial, analgesia adecuada y búsqueda activa de infección; antipsicótico solo si riesgo inminente.",
      },
      {
        id: "D",
        label: "D",
        text: "Derivar a psiquiatría para inicio de haloperidol depot mensual.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Delirium hipoactivo/hiperactivo postquirúrgico multifactorial: benzodiacepinas (lorazepam), antipsicótico innecesario, opioides, deshidratación/hipernatremia, dolor, entorno. Manejo SHM/AGS: medidas no farmacológicas + corregir precipitantes + suspender fármacos delirógenos. Antipsicótico dosis mínima solo si riesgo de daño.",
    keyPoints: [
      "Delirium intrahospitalario = emergencia geriátrica; buscar precipitantes (DEDHIPTIS).",
      "Benzodiacepinas empeoran y prolongan delirium en ancianos.",
      "Hipernatremia/deshidratación post-op frecuente y delirógena.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
Delirium postoperatorio intrahospitalario

Fisiopatología:
• Insulto quirúrgico + fármacos anticolinérgicos/sedantes + deshidratación → disfunción cerebral aguda.
• Fluctuación + alucinaciones visuales + CAM (+) = delirium, no demencia pura.

Prioridad:
1. Retirar benzodiacepinas/antipsicóticos profilácticos.
2. Hidratar y corregir Na+, Ca++, dolor.
3. Reorientación, movilización, óptica/auditiva.
4. Haloperidol/quetiapina baja dosis solo si riesgo vital.

Distractores:
• A: Lorazepam y más quetiapina empeoran delirium.
• B: TAC/EEG/aciclovir no son 1.ª línea sin datos de SNC infeccioso.
• D: Depot antipsicótico inaceptable en delirium agudo.

Perla hospitalaria: Fractura de cadera + lorazepam noche = delirium garantizado. Quita BZD, hidrata y moviliza antes de sedar.

Referencias: SHM Delirium Guidelines; AGS Clinical Practice Guideline Delirium.`,
  },
  {
    id: "dr-q-36",
    examArea: "Medicina Interna / Medicina Hospitalaria / Neumología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "tep", "tromboprofilaxis", "chest"],
    statement:
      "Mujer de 64 años, día 10 de hospitalización por linfoma difuso de células B en quimioterapia (R-CHOP ciclo 2). Recibió enoxaparina 40 mg SC diaria desde ingreso. Plaquetas hoy 48,000/mm³ (basales 220,000). De forma súbita: disnea, dolor pleurítico, taquicardia. PA 90/55 mmHg, FC 128 lpm, FR 26, SpO2 88% aire ambiente, Temp 37.1 °C. MV conservado, ingurgitación yugular leve. D-dímero 4,500 ng/mL. TAC angio pulmonar: defecto de repleción en arteria lobar derecha + sobrecarga VD. Troponina I elevada. ¿Conducta inmediata prioritaria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender toda anticoagulación por plaquetopenia; colocar filtro de vena cava y observar en piso.",
      },
      {
        id: "B",
        label: "B",
        text: "TEP submasivo/ alto riesgo; anticoagulación plena con heparina no fraccionada IV (ajustada) o fondaparinux según plaquetas; evaluar trombólisis si inestabilidad hemodinámica; evitar suspender profilaxis sin reevaluar riesgo trombótico vs sangrado según guías CHEST/oncología.",
      },
      {
        id: "C",
        label: "C",
        text: "Neumonía atípica por inmunosupresión; azitromicina y ceftriaxona; repetir TAC en 72 h.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar aspirina 325 mg y clopidogrel por troponina elevada; diferir anticoagulación hasta plaquetas >100,000.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "TEP agudo con sobrecarga VD y taquicardia/hipotensión leve = riesgo intermedio-alto (submasivo). Plaquetas 48,000 no contraindican anticoagulación absoluta en TEP alto riesgo; HNF IV permite control y reversión. Trombólisis si choque. Profilaxis previa falló; reevaluar dosis/ método. Filtro de VC no trata TEP establecido.",
    keyPoints: [
      "TEP + sobrecarga VD + troponina = submasivo; anticoagular.",
      "Trombocitopenia moderada: balance riesgo trombosis/sangrado (CHEST).",
      "Filtro de VC no es tratamiento de TEP agudo sin contraindicación absoluta a AC.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
TEP intrahospitalario en paciente oncológico

Fisiopatología:
• Cáncer + quimioterapia + inmovilización = estado pro-trombótico.
• TEP agudo → ↑ presión pulmonar → estrés VD → hipotensión/troponina.

Prioridad:
1. Confirmar TEP angioTAC.
2. Anticoagulación inmediata (HNF si plaquetopenia/balance fino).
3. Trombólisis si choque/obstrucción masiva.
4. Revisar profilaxis (dosis, cumplimiento).

Distractores:
• A: Filtro no disuelve TEP; observar es mortal.
• C: TAC confirma TEP; no es neumonía.
• D: Antiagregación no trata TEP; retrasar AC aumenta mortalidad.

Perla hospitalaria: Oncológico hospitalizado con disnea súbita + taquicardia = TEP hasta TAC. Plaquetas 48k no es excusa automática para no anticoagular.

Referencias: CHEST Antithrombotic Guidelines; SHM VTE prevention.`,
  },
  {
    id: "dr-q-37",
    examArea: "Medicina Interna / Medicina Hospitalaria / Hepatología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "cirrosis", "pbe", "sepsis"],
    statement:
      "Hombre de 59 años, cirrosis por alcohol Child-Pugh C (13), día 5 de hospitalización por ascitis refractaria. Fiebre 38.8 °C, confusión nueva. PA 92/58 mmHg, FC 110 lpm. Abdomen distendido, dolor difuso, signo de rebote leve. Paracentesis diagnóstica: líquido turbio, PMN 680 cel/mm³, proteínas 0.8 g/dL, cultivo en curso. Creatinina 2.6 mg/dL (basal 1.4), bilirrubina 12 mg/dL, INR 2.1, Na+ 126. ¿Manejo inicial integral prioritario?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Peritonitis bacteriana espontánea; ceftriaxona 1 g/día sola, albúmina solo si creatinina >4, sin paracentesis de control.",
      },
      {
        id: "B",
        label: "B",
        text: "PBE con criterios de PBE grave; ceftriaxona + albúmina 1.5 g/kg día 1 y 1 g/kg día 3, expansión si hipotensión, evitar AINEs/nefrotóxicos, evaluar trasplante/ UCI según respuesta; paracentesis de control si no mejora en 48 h.",
      },
      {
        id: "C",
        label: "C",
        text: "Peritonitis secundaria por perforación; laparotomía exploradora inmediata sin antibióticos.",
      },
      {
        id: "D",
        label: "D",
        text: "Síndrome hepatorrenal tipo 1; iniciar terlipresina y deferir antibióticos hasta descartar infección.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "PMN ≥250 = PBE. Child C + fiebre + confusión + AKI + hipotensión = PBE grave. Manejo: ceftriaxona (o según guía local) + albúmina para prevenir síndrome hepatorrenal (1.5 g/kg d1, 1 g/kg d3), soporte hemodinámico, evitar nefrotóxicos. Paracentesis control si no responde. Perforación menos probable con PMN moderado sin datos septicos focales extremos.",
    keyPoints: [
      "PBE: PMN ≥250/mm³ en ascitis.",
      "Albúmina + ATB reduce hepatorenal y mortalidad en PBE grave.",
      "AKI en cirrótico febril = PBE hasta paracentesis.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
PBE grave en cirrosis hospitalizada

Fisiopatología:
• Bacterias translocan desde intestino → ascitis → inflamación sistémica → vasodilatación espláncnica → hipoperfusión renal.

Prioridad:
1. Paracentesis diagnóstica (no retrasa ATB si sospecha alta).
2. ATB empírico IV (cefalosporina 3.ª gen).
3. Albúmina en PBE grave/AKI.
4. Descartar peritonitis secundaria si no responde.

Distractores:
• A: Subdosis albúmina; PBE grave requiere protocolo completo.
• C: PMN 680 sin datos de perforación típica; ATB primero, cirugía si no responde.
• D: Hepatorenal es consecuencia; tratar infección primero.

Perla hospitalaria: Cirrótico confuso + fiebre = paracentesis YA. PMN >250 + Child C = ceftriaxona + albúmina, no solo ATB.

Referencias: EASL/AASLD Ascites and PBE Guidelines; SHM.`,
  },
  {
    id: "dr-q-38",
    examArea: "Medicina Interna / Medicina Hospitalaria / Endocrinología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "cad", "dm", "corticoides"],
    statement:
      "Mujer de 45 años con SLE en brote, día 3 de hospitalización recibiendo metilprednisolona 60 mg IV/día. Antecedente DM1. Ayer suspendió bomba de insulina por extravasación del catéter. Hoy: náuseas, vómitos, Kussmaul. PA 95/60, FC 120, FR 32, Temp 37.2 °C. Glicemia 485 mg/dL, pH 7.05, PaCO2 18, HCO3 5, Na+ 130, K+ 5.8, creatinina 1.5, cetonas séricas 5.2 mmol/L. ¿Secuencia terapéutica inmediata correcta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Insulina regular 0.1 U/kg/h IV de inmediato + bicarbonato 100 mEq en bolo + SF 0.9% después.",
      },
      {
        id: "B",
        label: "B",
        text: "SF 0.9% 1 L primera hora; si K+ <3.3 posponer insulina y reponer potasio; si K+ 3.3–5.2 iniciar insulina 0.1 U/kg/h + K+ según protocolo; bicarbonato solo si pH <6.9; buscar precipitante (infección/esteroide).",
      },
      {
        id: "C",
        label: "C",
        text: "Insulina subcutánea basal 20 U y alta con control ambulatorio; reducir esteroide a 20 mg.",
      },
      {
        id: "D",
        label: "D",
        text: "Suspender insulina por K+ 5.8; hidratación con SF 0.45% hipotónico exclusivamente.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "CAD severa (pH 7.05, HCO3 5) en DM1 por suspensión de insulina + esteroides. Prioridad ADA: volumen SF 0.9% primero; K+ 5.8 permite insulina con monitorización de K+. Bicarbonato solo si pH <6.9. Insulina IV 0.1 U/kg/h. K+ 5.8 no contraindica insulina pero requiere K+ concurrente cuando baje.",
    keyPoints: [
      "CAD: fluidos primero; insulina IV cuando K+ ≥3.3 mEq/L.",
      "K+ inicial alto en CAD por desplazamiento extracellular; cae con insulina.",
      "Esteroides + suspensión insulina = precipitante intrahospitalario clásico.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
CAD intrahospitalaria en DM1 + esteroides

Fisiopatología:
• Insulopenia absoluta + glucocorticoides → lipólisis → cetonemia → acidosis.
• Deshidratación osmótica + vómitos → shock hipovolémico.

Prioridad:
1. SF 0.9% agresivo.
2. Insulina IV si K+ ≥3.3 (monitorizar K+ horario).
3. Buscar precipitante (catéter, infección, adherencia).
4. Bicarbonato solo pH <6.9.

Distractores:
• A: Bicarbonato rutinario no indicado pH 7.05; riesgo edema cerebral.
• C: SC insulina inadecuada en CAD severa con vómitos.
• D: Suspender insulina por K+ 5.8 es error; caerá con tratamiento.

Perla hospitalaria: DM1 hospitalizado + esteroide + bomba detenida = CAD en 24 h. Volumen primero, insulina IV después, K+ siempre en mente.

Referencias: ADA Standards of Care DKA; SHM glycemic management.`,
  },
  {
    id: "dr-q-39",
    examArea: "Medicina Interna / Medicina Hospitalaria / Infectología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "bacteriemia", "clabsi", "mdr"],
    statement:
      "Hombre de 70 años, UCI día 14, catéter venoso central yugular derecho día 10, ventilación mecánica, ERC estadio 4. Fiebre 39 °C, escalofríos. PA 82/48 mmHg tras 30 mL/kg cristaloides, FC 125, lactato 4.5. Dos hemocultivos periféricos y del catéter pendientes. Preliminar: bacilos Gram-negativos BLEE en hemocultivo del catéter 2 h antes que periférico. Plaquetas 92,000. ¿Manejo inmediato del catéter y antibiótico empírico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Mantener catéter y cambiar antibiótico a vancomicina; esperar antibiograma 72 h.",
      },
      {
        id: "B",
        label: "B",
        text: "Retirar catéter central de inmediato (CLABSI), hemocultivos de control, meropenem IV empírico ajustado a TFG + reanimación séptica; no usar carbapenémico + vancomicina rutinario sin indicación Gram positivo.",
      },
      {
        id: "C",
        label: "C",
        text: "Intercambio sobre guía del catéter con mismo lumen; continuar ceftriaxona previa.",
      },
      {
        id: "D",
        label: "D",
        text: "Retirar catéter y administrar piperacilina-tazobactam exclusivamente por 7 días ambulatorio al alta.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "CLABSI con choque séptico y crecimiento diferencial más rápido en catéter = retirar catéter urgente (IDSA). BLEE → carbapenémico empírico ajustado a ERC. Vancomicina no necesaria si solo GN. Intercambio sobre guía no indicado en inestabilidad/BLEE. Duración IV en UCI, no ambulatorio prematuro.",
    keyPoints: [
      "CLABSI + inestabilidad = retirar catéter, no intercambio sobre guía.",
      "Crecimiento más rápido en catéter vs periférico confirma origen intraluminal.",
      "BLEE → carbapenémico; evitar ceftriaxona/pip-tazo empírico fallido.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
CLABSI y bacteriemia por BLEE

Fisiopatología:
• Biofilm intraluminal → bacteriemia continua → sepsis.
• Diferencial de tiempo de positividad catéter/periferia confirma CLABSI.

Prioridad:
1. Reanimación séptica.
2. Retirar catéter (salvo excepciones muy limitadas).
3. ATB empírico MDR según institución (meropenem si BLEE).
4. Duración según IDSA (usualmente 7–14 días según respuesta).

Distractores:
• A: Mantener catéter perpetúa bacteriemia; vancomicina innecesaria.
• C: Intercambio sobre guía contraindicado en CLABSI complicada.
• D: Pip-tazo ineficaz vs BLEE; duración ambulatoria inadecuada en shock.

Perla hospitalaria: UCI + fiebre + catéter + GN en cultivo = retira catéter y cubre MDR. Esperar antibiograma no es opción en shock.

Referencias: IDSA CLABSI Guidelines; Surviving Sepsis; SHM.`,
  },
  {
    id: "dr-q-40",
    examArea: "Medicina Interna / Medicina Hospitalaria / Nefrología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "aki", "kdigo", "nefrotoxicidad"],
    statement:
      "Hombre de 63 años, hospitalizado por bacteriemia por E. coli sensible tratada con ceftriaxona (día 8). Recibió contrasto yodado para TAC abdomen día 5. Antecedente: HTA, DM2. Medicamentos: metformina 850 mg c/12 h, enalapril, ibuprofeno PRN (3 dosis en 48 h por dolor). Oliguria 18 h. Creatinina 4.2 mg/dL (basal 1.0), BUN 72, K+ 5.6, pH 7.30, HCO3 18. Sedimento: cilindros granulosos marrón, eosinófilos ausentes. FENA 1.8%. Ecografía: riñones de tamaño normal sin obstrucción. ¿Diagnóstico principal de AKI y conducta inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nefritis intersticial aguda por ceftriaxona; iniciar esteroides 1 mg/kg y biopsia renal urgente.",
      },
      {
        id: "B",
        label: "B",
        text: "AKI intrínseca aguda multifactorial (NTA por sepsis + AINE + contraste); suspender metformina, enalapril, AINE; hidratación cautelosa, monitorizar K+ y balance; evitar nefrotóxicos adicionales; considerar diálisis si criterios urémicos/refractaria hiperkalemia.",
      },
      {
        id: "C",
        label: "C",
        text: "AKI prerrenal por depleción; SF 0.9% 3 L en 6 h y reiniciar ibuprofeno con omeprazol.",
      },
      {
        id: "D",
        label: "D",
        text: "Obstrucción postrenal tardía; cateterismo vesical es prioritario antes de cualquier medida.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "FENA >1% + cilindros granulosos = NTA intrínseca. Multifactorial hospitalaria: sepsis, AINE, contraste, ACEi. Suspender nefrotóxicos y metformina (riesgo acidosis láctica si empeora). Hidratación prudente sin sobrecarga. Diálisis según criterios KDIGO. NIA menos probable (sin eosinófilos, sin fiebre/rash típico).",
    keyPoints: [
      "FENA >1% + cilindros marrón = NTA, no prerrenal.",
      "AKI hospitalaria suele ser multifactorial: sepsis + AINE + contraste + RAAS.",
      "Suspender metformina en AKI (KDIGO/ADA).",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
AKI intrahospitalaria multifactorial (KDIGO)

Fisiopatología:
• Sepsis → hipoperfusión renal + toxinas.
• AINE + ACEi → ↓ perfusión glomerular.
• Contraste → NTA adicional en paciente vulnerable.

Prioridad:
1. Identificar y retirar nefrotóxicos (AINE, metformina, ACEi si hipotensión).
2. Optimizar perfusión sin sobrecarga (sepsis resuelta).
3. Monitorizar electrolitos/diuresis.
4. Diálisis si indicaciones (K+, acidez, sobrecarga, uremia).

Distractores:
• A: NIA requiere más datos (eosinófilos, rash, fiebre); esteroides no empíricos.
• C: FENA 1.8% no es prerrenal; AINE empeora.
• D: Ecografía sin obstrucción descarta postrenal.

Perla hospitalaria: Sepsis + contraste + AINE PRN + enalapril = AKI garantizada. Quita nefrotóxicos antes de pedir nefrología.

Referencias: KDIGO AKI Guidelines; SHM; ACP Hospital Medicine.`,
  },
  {
    id: "dr-q-41",
    examArea: "Medicina Interna / Medicina Hospitalaria / UCI",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "sepsis", "ssc", "news2"],
    statement:
      "Hombre de 75 años, día 5 de hospitalización por pancreatitis aguda biliar previamente estable. Guardia: letargo. PA 85/50 mmHg, FC 115 lpm, FR 24 rpm, Temp 38.5 °C, SpO2 92%. Llenado capilar 4 s, piel moteada. Lactato 4.2 mmol/L, leucocitos 18,000/uL. Choque séptico de probable origen biliar/pancreático. Según Surviving Sepsis Campaign (actualización 2026), ¿conducta inmediata prioritaria sobre cribado institucional y antimicrobianos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Calcular qSOFA; confirmar sepsis e iniciar reanimación con coloides.",
      },
      {
        id: "B",
        label: "B",
        text: "Activar Code Sepsis con escalas sensibles (NEWS2), reanimación hídrica temprana, ATB amplio espectro IV, con desescalamiento condicional posterior aunque no se aísle patógeno.",
      },
      {
        id: "C",
        label: "C",
        text: "Retrasar ATB hasta procalcitonina y PCR multiplex gastrointestinal.",
      },
      {
        id: "D",
        label: "D",
        text: "Vasopresina periférica como 1.ª línea y omitir bolos de cristaloides para evitar SDRA.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Choque séptico con hipotensión, hiperlactatemia y disfunción orgánica: activación inmediata multidisciplinar (Code Sepsis), cristaloides balanceados, ATB IV precoz. SSC 2026: NEWS2 > qSOFA para cribado; desescalamiento condicional permitido. Coloides almidón contraindicados; norepinefrina es 1.ª línea vasopresora, no vasopresina inicial.",
    keyPoints: [
      "SSC 2026: NEWS2 preferido sobre qSOFA para screening hospitalario.",
      "ATB en <1 h en shock séptico; no esperar biomarcadores.",
      "Cristaloides balanceados; coloides almidón no en sepsis.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
Sepsis hospitalaria · SSC 2026

• Choque distributivo: reconocimiento cero-demoras.
• Code Sepsis + NEWS2 + lactato + ATB empírico IV inmediato.
• Desescalamiento condicional aunque cultivo negativo (recomendación 2026).

Distractores:
• A: qSOFA baja sensibilidad; coloides dañan riñón.
• C: cada hora de retraso ↑ mortalidad ~8%.
• D: norepinefrina 1.ª línea; cristaloides no omitir en shock.

Perla: qSOFA ya no es screening principal; NEWS2 + Code Sepsis + ATB en la 1.ª hora.

Referencias: Surviving Sepsis Campaign 2026; SHM.`,
  },
  {
    id: "dr-q-42",
    examArea: "Medicina Interna / Medicina Hospitalaria / Neumología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "acido_base", "gasometria", "epoc"],
    statement:
      "Mujer de 68 años, día 3 por exacerbación EPOC GOLD D con cor pulmonale, furosemida crónica. Somnolencia, mioclonías, FR 10 rpm, SpO2 86% con O2 2 L/min. Na+ 142, K+ 2.5, Cl- 82, HCO3 36, BUN 45, Cr 1.6. GSA (FiO2 28%): pH 7.22, pCO2 90, pO2 55. ¿Diagnóstico ácido-base completo que explica la encefalopatía?",
    options: [
      { id: "A", label: "A", text: "Acidosis respiratoria crónica descompensada pura por EPOC." },
      {
        id: "B",
        label: "B",
        text: "Trastorno triple: acidosis respiratoria aguda sobre crónica + alcalosis metabólica por contracción/hypokalemia (furosemida) + acidosis metabólica de anion gap elevado (AG 24).",
      },
      { id: "C", label: "C", text: "Acidosis metabólica hiperclorémica con alcalosis respiratoria compensatoria." },
      { id: "D", label: "D", text: "Alcalosis metabólica primaria con acidosis respiratoria compensatoria extrema." },
    ],
    correctOptionId: "B",
    explanation:
      "pH 7.22 + pCO2 90 = acidosis respiratoria. AG = 142-(82+36)=24 (elevado) = acidosis metabólica adicional (láctica/urémica). HCO3 36 excesivo vs esperado → alcalosis metabólica superpuesta (furosemida, hipokalemia, hipocloremia). Trastorno triple clásico en paciente crítico hospitalizado.",
    keyPoints: [
      "Siempre calcular anion gap aunque el pH sugiera trastorno respiratorio puro.",
      "Delta gap revela alcalosis metabólica oculta cuando HCO3 está 'alto'.",
      "Hipokalemia + Cl bajo + furosemida = alcalosis de contracción.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
Trastorno ácido-base triple

1. Acidosis respiratoria (pCO2 90, pH bajo).
2. AG 24 → acidosis metabólica de gap alto.
3. HCO3 36 cuando debería ser ~12 → alcalosis metabólica superpuesta.

Distractores:
• A: Error novato — detenerse en EPOC sin electrolitos ni AG.

Perla: pH 7.40 puede ocultar trastornos opuestos. Calcula SIEMPRE el anion gap.

Referencias: ACP acid-base; SHM critical care.`,
  },
  {
    id: "dr-q-43",
    examArea: "Medicina Interna / Medicina Hospitalaria / Infectología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "hap", "idsa"],
    statement:
      "Hombre de 72 años, día 6 post-colecistectomía por tumor de colon. Fiebre 39 °C, tos purulenta, desaturación. Rx: infiltrado alveolar basal derecho nuevo. HAP no asociada a ventilador. Según IDSA HAP/VAP, ¿recomendación para inicio de ATB antipseudomónico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "BAL invasivo con sTREM-1; diferir ATB hasta positividad.",
      },
      {
        id: "B",
        label: "B",
        text: "ATB empírico por criterios clínicos-radiológicos; guiar con muestras respiratorias no invasivas (esputo) antes/después de 1.ª dosis según protocolo local.",
      },
      { id: "C", label: "C", text: "Iniciar ATB solo si procalcitonina >0.5 ng/mL." },
      { id: "D", label: "D", text: "Profilaxis con fluoroquinolonas en todo postoperatorio abdominal." },
    ],
    correctOptionId: "B",
    explanation:
      "IDSA: usar criterios clínicos solos para decidir inicio de ATB, no sTREM-1 en BAL. HAP no-VAP: cultivos no invasivos (esputo espontáneo/inducido) preferidos sobre broncoscopia agresiva. ATB empírico precoz (cefepime/pip-tazo) y desescalar a 72 h.",
    keyPoints: [
      "HAP: clínica + Rx > biomarcadores invasivos para decidir ATB.",
      "Procalcitonina útil para suspender, no para negar inicio en sepsis respiratoria.",
      "Cultivo no invasivo + ATB empírico rápido.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
HAP · IDSA

• Mortalidad ↑ si ATB retrasa.
• sTREM-1 en BAL no recomendado vs juicio clínico.
• Esputo no invasivo + empírico antipseudomónico → desescalar 72 h.

Perla: HAP = clínica > biomarcadores. Cultiva esputo, dispara ATB, desescala con antibiograma.

Referencias: IDSA/ATS HAP-VAP Guidelines.`,
  },
  {
    id: "dr-q-44",
    examArea: "Medicina Interna / Medicina Hospitalaria / Nefrología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "aki", "akd", "kdigo"],
    statement:
      "Hombre de 58 años, día 18 post-pielonefritis enfisematosa y choque séptico. AKI KDIGO 3 al ingreso (Cr pico 4.5, oliguria). Infección resuelta; diuresis 1.5 L/día; Cr estancada 2.1 mg/dL (TFGe 35) durante 1 semana. Cr basal 0.8. ¿Diagnóstico nefrológico actual y conducta preventiva al egreso según KDIGO 2026?",
    options: [
      { id: "A", label: "A", text: "ERC estadio 3b; programar fístula AV temprana." },
      { id: "B", label: "B", text: "Falla prerrenal persistente; albúmina + cristaloides hasta Cr 0.8." },
      {
        id: "C",
        label: "C",
        text: "Enfermedad renal aguda (AKD): continuo entre AKI y ERC (7–90 días); seguimiento estrecho y evitar nefrotóxicos por riesgo de cronicidad.",
      },
      { id: "D", label: "D", text: "AKI persistente hasta 6 meses post-evento." },
    ],
    correctOptionId: "C",
    explanation:
      "KDIGO 2026 formaliza AKD: alteración renal funcional/estructural 7–90 días post-AKI. ERC requiere >90 días. Cr estancada 2.1 con diuresis conservada = fase subaguda post-isquémica, no prerrenal (fluidos empeorarían congestión). Seguimiento nefrológico y deprescripción nefrotóxica.",
    keyPoints: [
      "AKI <7 días; AKD 7–90 días; ERC >90 días.",
      "AKD = ventana crítica para prevenir ERC.",
      "No sobrecargar con volumen en daño estructural subagudo.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
AKI → AKD (KDIGO 2026)

• Riñón post-séptico no normaliza de inmediato.
• AKD: puente inflamación/fibrosis temprana.
• Prohibir AINEs; ajustar fármacos; control ambulatorio.

Perla: Sobreviviente AKI severo en día 18 con Cr alta = AKD, no curado. Protege nefronas restantes.

Referencias: KDIGO AKI/AKD 2026 update.`,
  },
  {
    id: "dr-q-45",
    examArea: "Medicina Interna / Medicina Hospitalaria / Neumología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "tep", "chest", "subsegmentario"],
    statement:
      "Mujer de 45 años, día 5 post-colecistectomía complicada con íleo paralítico. Dolor pleurítico leve al deambular; FC 80, SpO2 96%, hemodinámicamente estable. AngioTAC: defecto subsegmentario aislado LID; sin sobrecarga VD. Doppler EEII negativo bilateral. Según CHEST, ¿abordaje de máxima calidad?",
    options: [
      { id: "A", label: "A", text: "Anticoagulación terapéutica HBPM puente a warfarina." },
      { id: "B", label: "B", text: "Filtro de vena cava por contraindicación relativa post-cirugía." },
      {
        id: "C",
        label: "C",
        text: "Observación clínica estrecha sin anticoagulación sistémica: TEP subsegmentario aislado, estable, sin TVP proximal.",
      },
      { id: "D", label: "D", text: "Trombólisis sistémica con alteplasa." },
    ],
    correctOptionId: "C",
    explanation:
      "CHEST: margen para observación exclusiva en TEP subsegmentario aislado, paciente estable, bajo riesgo clínico, Doppler negativo. Anticoagulación post-op reciente: riesgo sangrado puede superar beneficio. Filtro VCI solo con TVP proximal + contraindicación absoluta a AC.",
    keyPoints: [
      "No todo TEP en TAC exige anticoagulación automática.",
      "Subsegmentario + estable + sin TVP = observación seleccionada.",
      "Trombólisis contraindicada en TEP subsegmentario estable.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
TEP subsegmentario incidental (CHEST)

• Tomógrafos de alta resolución ↑ diagnósticos de microembolia.
• Estable + subsegmentario + Doppler (-) = observación posible.
• Filtro VCI: TVP proximal + AC contraindicada, no profilaxis.

Perla: TEP subsegmentario aislado + piernas limpias + estable = observar, no anticoagular a ciegas.

Referencias: CHEST VTE Guidelines.`,
  },
  {
    id: "dr-q-46",
    examArea: "Medicina Interna / Medicina Hospitalaria / Cardiología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "ic", "wrf", "diureticos"],
    statement:
      "Hombre de 78 años, IC descompensada perfil B (FEVI 35%). Día 3: peso 80 kg (-5 kg), duerme plano, disnea casi resuelta; aún edema maleolar leve. Creatinina 1.9 (basal 1.4), BUN 45. Buena perfusión periférica. Residente sugiere suspender furosemida y dar SF por 'AKI prerrenal'. ¿Interpretación y orden correcta?",
    options: [
      { id: "A", label: "A", text: "Residente correcto: depleción; suspender diuréticos." },
      { id: "B", label: "B", text: "Cardiorenal irreversible; hemodiálisis ultrafiltrante hoy." },
      {
        id: "C",
        label: "C",
        text: "Empeoramiento renal permisivo durante descongestión efectiva; continuar diuréticos mientras persista congestión clínica.",
      },
      { id: "D", label: "D", text: "Nefritis intersticial por furosemida; esteroides IV." },
    ],
    correctOptionId: "C",
    explanation:
      "Worsening renal function (WRF) durante descongestión exitosa (↓5 kg, ↓disnea, aún edema) es frecuente y se asocia a mejor pronóstico si se completa descongestión. Suspender diuréticos por Cr +30% con congestión residual empeora outcomes. Diálisis no indicada con buena diuresis y Cr 1.9.",
    keyPoints: [
      "Trata la clínica, no solo la creatinina.",
      "WRF permisivo si descongestiona y orina.",
      "↑ Cr hasta ~30–50% tolerable si perfundido y aún congesto.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
Empeoramiento renal permisivo en IC

• ↓ precarga → ↓ filtración transitoria durante diuresis.
• Aún edema = aún congesto → continuar furosemida.
• Suspender diurético por número = perpetuar congestión venosa renal.

Perla: Pierde peso, respira mejor, Cr sube leve → vas bien descongestionando. No pares el diurético.

Referencias: ACC/AHA HF Guidelines; HFA consensus.`,
  },
  {
    id: "dr-q-47",
    examArea: "Medicina Interna / Medicina Hospitalaria / Infectología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "c_diff", "megacolon"],
    statement:
      "Mujer de 65 años, día 14 meropenem por neumonía necrotizante. Diarrea acuosa masiva; día 16: diarrea cesa, abdomen distendido en tabla, doloroso. PA 80/45, FC 130, Temp 39.5 °C. Leucocitos 35,000, lactato 4.5, Cr 2.5. Toxina C. difficile (+). Rx: megacolon (colon transverso 10 cm). ¿Esquema de rescate empírico mientras valoración quirúrgica?",
    options: [
      { id: "A", label: "A", text: "Metronidazol IV en monoterapia." },
      {
        id: "B",
        label: "B",
        text: "Vancomicina oral/NG 500 mg c/6 h + metronidazol IV 500 mg c/8 h + cirugía urgente.",
      },
      { id: "C", label: "C", text: "Loperamida alta dosis + fidaxomicina oral." },
      { id: "D", label: "D", text: "Trasplante fecal inmediato como 1.ª línea." },
    ],
    correctOptionId: "B",
    explanation:
      "C. difficile fulminante (hipotensión, megacolon, íleo): vancomicina enteral alta dosis (PO/NG/enema retención) + metronidazol IV (única indicación dual). Metronidazol solo es insuficiente. Loperamida contraindicada (retención toxinas). FMT para recurrencia, no choque agudo.",
    keyPoints: [
      "Diarrea que para + abdomen distendido = íleo/megacolon por C. diff.",
      "Fulminante: vanco enteral + metro IV.",
      "Antimotilidad proscrita en C. diff.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
C. difficile fulminante · IDSA/SHEA

• Íleo impide tránsito de vanco PO → añadir metro IV (excreción biliar/intestinal).
• Megacolon + shock = colectomía en evaluación.
• Loperamida = perforación.

Perla: Diarrea post-ATB que se detiene y barriga se infla = megacolon. Vanco por tubo + Metro IV.

Referencias: IDSA/SHEA C. difficile Guidelines.`,
  },
  {
    id: "dr-q-48",
    examArea: "Medicina Interna / Medicina Hospitalaria / Hepatología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "hrs", "cirrosis", "terlipresina"],
    statement:
      "Hombre de 52 años, cirrosis alcohólica Child C. Paracentesis evacuatoria 9 L sin albúmina post-procedimiento. Día 3: anuria; PA 110/70. Cr 3.2 (basal 0.8), Na 126, Na urinario <10, FENa 0.1%, sedimento limpio. Eco renal normal. Síndrome hepatorenal-AKI precipitado por paracentesis sin albúmina. ¿Vasoconstrictor de elección según EASL/AASLD?",
    options: [
      { id: "A", label: "A", text: "Furosemida en infusión continua." },
      { id: "B", label: "B", text: "Terlipresina IV continua + albúmina humana." },
      { id: "C", label: "C", text: "Dopamina a dosis renal." },
      { id: "D", label: "D", text: "Diálisis peritoneal urgente." },
    ],
    correctOptionId: "B",
    explanation:
      "HRS-AKI: vasodilatación espláncnica + hipovolemia efectiva; riñón estructuralmente intacto (FENa <1%, Na urinario bajo). Terlipresina + albúmina revierte perfusión renal. Diuréticos empeoran isquemia. Dopamina 'renal' ineficaz.",
    keyPoints: [
      "Paracentesis >5 L sin albúmina → disfunción circulatoria post-paracentesis → HRS.",
      "HRS-AKI: FENa bajo, orina concentrada, sedimento limpio.",
      "Terlipresina + albúmina = estándar.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
HRS-AKI post-paracentesis

• Extracción masiva sin coloide → hipovolemia arterial efectiva.
• Riñón 'desconectado' hemodinámicamente, no necrosis tubular.
• Terlipresina esplácnica + albúmina; 20 g/L si >5 L evacuados.

Perla: Cirrosis + anuria + Na urinario bajo = HRS. Aprieta espláncnico (terlipresina) + llena volumen (albúmina).

Referencias: EASL/AASLD Ascites and HRS Guidelines.`,
  },
  {
    id: "dr-q-49",
    examArea: "Medicina Interna / Medicina Hospitalaria / Endocrinología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "hiponatremia", "siadh", "sal_hipertónica"],
    statement:
      "Mujer de 65 años con carcinoma microcítico de pulmón. Convulsión tónico-clónica en triage. Euvolémica. Na+ 108, Osm plasmática 230, Osm urinaria 600, Na urinario 60. TSH/cortisol normales. SIADH paraneoplásico con hiponatremia severa sintomática. ¿Intervención inmediata que detiene edema cerebral?",
    options: [
      { id: "A", label: "A", text: "Restricción hídrica <800 mL/día + tolvaptán oral." },
      {
        id: "B",
        label: "B",
        text: "Bolo IV 100–150 mL SSH 3% en 10–20 min (repetir si persiste), meta +4 a 6 mEq/L en primeras horas; luego corrección ≤8 mEq/L/24 h.",
      },
      { id: "C", label: "C", text: "SF 0.9% 200 mL/h para diluir ADH circulante." },
      { id: "D", label: "D", text: "Corrección rápida a Na 135 mEq/L en 12 h con bolos continuos." },
    ],
    correctOptionId: "B",
    explanation:
      "Hiponatremia sintomática grave (convulsiones): bolos SSH 3% 100–150 mL para ↑ Na 4–6 mEq/L rápido y deshinchar cerebro. Restricción/tolvaptán demasiado lentos. SF 0.9% en SIADH puede empeorar (desalinización). Corrección >8 mEq/L/24 h → mielinolisis osmótica.",
    keyPoints: [
      "Convulsión/coma + Na <120 = SSH 3% en bolos.",
      "Meta aguda: +4–6 mEq/L; luego ≤8 mEq/L/24 h.",
      "SF 0.9% en SIADH puede bajar Na aún más.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
Hiponatremia severa sintomática

• Na 108 + convulsión = emergencia neurológica.
• SSH 3% bolo → extrae agua cerebral.
• Después: corrección lenta (evitar desmielinización).

Distractores:
• A/C: manejo crónico o peligroso en crisis.
• D: corrección rápida total → locked-in.

Perla: Hiponatremia + convulsión = sal hipertónica a chorro (+5 puntos rápido), luego despacio.

Referencias: European/American hyponatremia guidelines; SHM.`,
  },
  {
    id: "dr-q-50",
    examArea: "Medicina Interna / Medicina Hospitalaria / Endocrinología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "dm", "esteroides", "insulina"],
    statement:
      "Hombre de 60 años, crisis asmática grave, transferido de UCI a piso. DM2 en metformina (suspendida). Prednisona 50 mg AM. Glucemias ayunas 110–130 mg/dL; post-almuerzo y 16:00 h 350–400 mg/dL consistentemente. Solo escala móvil insulina regular. Según ADA/SHM, ¿esquema de insulina de mayor impacto fisiológico?",
    options: [
      { id: "A", label: "A", text: "Reiniciar metformina máxima para evitar insulina." },
      { id: "B", label: "B", text: "Insulina glargina nocturna para control uniforme 24 h." },
      {
        id: "C",
        label: "C",
        text: "Insulina NPH matutina junto con prednisona para sincronizar pico hiperglucémico vespertino con pico de NPH.",
      },
      { id: "D", label: "D", text: "Solo sliding scale con lispro vs regular." },
    ],
    correctOptionId: "C",
    explanation:
      "Prednisona matutina: hiperglucemia pico 8–12 h post-dosis (tarde). NPH AM sincroniza pico insulínico con pico esteroide. Glargina plana → hipoglucemia nocturna con ayunas normales. Metformina contraindicada/relativa hospitalizada inestable. Solo sliding scale inadecuado (persigue, no previene).",
    keyPoints: [
      "Esteroides AM → hiperglucemia vespertina, ayunas OK.",
      "NPH AM + prednisona AM = emparejamiento farmacocinético.",
      "Glargina nocturna riesgo hipoglucemia 3 AM.",
    ],
    theoryContent: `MEDICINA HOSPITALARIA — BY DR Q.
Hiperglucemia esteroidea intrahospitalaria

• Glucocorticoides ↑ gluconeogénesis; pico tarde.
• ADA/SHM: NPH matutina con dosis esteroide diaria.
• Basal-bolus o NPH+corrección; no solo sliding scale.

Perla: Prednisona AM + azúcar alta tarde = NPH a primera hora con el esteroide.

Referencias: ADA Standards of Care Inpatient; SHM Glycemic Management.`,
  },
  {
    id: "dr-q-51",
    examArea: "Medicina Crítica / UCI / Reanimación",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "sepsis", "andromeda", "perfusion"],
    statement:
      "Mujer de 68 años, día 1 postoperatorio por peritonitis fecal (choque séptico abdominal). Cirrosis Child A. PA 105/65 (PAM 78), FC 95, VM. Norepinefrina 0.1 mcg/kg/min. TRC 2 s, mottling 0. POCUS: VTI normal, VCI 22 mm, variabilidad 5%. Lactato ingreso 6.5 → 6 h después 5.8 (<20% aclaramiento). ScvO2 76%, delta CO2 4 mmHg. Residente propone 1000 mL cristaloides para \"lavar lactato\". ¿Diagnóstico fisiopatológico y orden inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Disoxia celular persistente; reto de fluidos y aumentar vasopresina.",
      },
      {
        id: "B",
        label: "B",
        text: "Hemodinámicamente resucitada y normoperfundida; hiperlactatemia por aclaramiento hepático/adrenérgico; prohibir más fluidos y continuar destete vasopresor.",
      },
      {
        id: "C",
        label: "C",
        text: "Choque distributivo oculto; ScvO2 76% = shunt masivo; iniciar dobutamina.",
      },
      { id: "D", label: "D", text: "Falla VD por sobrecarga; diuréticos en infusión para excretar lactato." },
    ],
    correctOptionId: "B",
    explanation:
      "TRC normal, ScvO2 >70%, delta CO2 <6, PAM adecuada = perfusión restaurada (ANDROMEDA-SHOCK). Lactato puede persistir por beta-2/adrenérgico y aclaramiento hepático (cirrosis). VCI dilatada sin variabilidad = no respondedora a volumen. Más fluidos → edema pulmonar/congestión.",
    keyPoints: [
      "Lactato no es único marcador de hipoxia en sepsis post-reanimación.",
      "TRC <3 s + ScvO2 >70% + delta CO2 <6 = reanimada.",
      "ANDROMEDA-SHOCK: TRC guía segura vs lactato solo.",
    ],
    theoryContent: `MEDICINA CRÍTICA — BY DR Q.
Perfusión vs lactato · ANDROMEDA-SHOCK

• Hiperlactatemia puede ser aeróbica/adrenérgica + ↓ aclaramiento hepático.
• Objetivos de perfusión clínica cumplidos → no más fluidos.
• VCI 22 mm, variabilidad 5% = euvolemia/no respondedora.

Perla UCI: PAM OK + TRC <3 + ScvO2 >70% + delta CO2 <6 = REANIMADA. Detén líquidos.

Referencias: ANDROMEDA-SHOCK; Surviving Sepsis Campaign; ESICM.`,
  },
  {
    id: "dr-q-52",
    examArea: "Medicina Crítica / UCI / Ventilación Mecánica",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "auto_peep", "epoc", "vm"],
    statement:
      "Hombre de 65 años, EPOC GOLD D + neumonía, intubado hace 15 min. Post-conexión VM: PA 60/30, FC 140, SpO2 88%. Vt 500 mL, RR 24, flujo 40 L/min, PEEP 5. Ppico 45, Pplat 20. Curva flujo-tiempo expiratorio no llega a cero antes de la siguiente inspiración. POCUS: VD severamente dilatado comprimiendo VI; VCI ingurgitada fija. ¿Diagnóstico y rescate inmediato?",
    options: [
      { id: "A", label: "A", text: "Neumotórax a tensión; toracostomía con aguja 2.º EIC." },
      { id: "B", label: "B", text: "IAM de VD; dobutamina + 1000 mL cristaloides." },
      {
        id: "C",
        label: "C",
        text: "Auto-PEEP severo colapsando retorno venoso y ↑ poscarga VD; desconectar VM transitoriamente y reprogramar (↑ tiempo espiratorio: ↓ FR, ↑ flujo).",
      },
      { id: "D", label: "D", text: "Broncoespasmo crítico; rocuronio + ketamina + aminofilina." },
    ],
    correctOptionId: "C",
    explanation:
      "Flujo expiratorio no a cero = auto-PEEP/hiperinsuflación dinámica. Pplat normal (20) descarta neumotórax/SDRA; Ppico-Pplat elevado = resistencia vía aérea + atrapamiento. Auto-PEEP ↑ presión intratorácica → ↓ retorno venoso, VD dilatado, choque obstructivo. Rescate: desconexión VM, apnea permisiva, ↑ tiempo espiratorio (I:E 1:4-1:5).",
    keyPoints: [
      "Auto-PEEP: flujo no retorna a cero en EPOC/asma.",
      "Pplat normal descarta neumotórax (sube Pplat también).",
      "Hipotensión post-intubación EPOC → desconectar tubo primero.",
    ],
    theoryContent: `MEDICINA CRÍTICA — BY DR Q.
Auto-PEEP y choque obstructivo

• FR alta + flujo bajo en EPOC = atrapamiento aéreo.
• Auto-PEEP transmite presión a VD → interdependencia ventricular → colapso VI.
• Rescate: desconectar VM, comprimir tórax, reprogramar espiración.

Perla UCI: Flujo que no llega a cero + hipotensión post-VM = desconecta el tubo.

Referencias: ESICM/ATS obstructive ventilation guidelines.`,
  },
  {
    id: "dr-q-53",
    examArea: "Medicina Crítica / UCI / SDRA",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "sda", "driving_pressure", "prono"],
    statement:
      "Mujer de 40 años, SDRA severo por neumonía viral. VM AC-V: Vt 350 mL (5.5 mL/kg), PEEP 14, FR 28, FiO2 80%. Ppico 38, Pplat 32. GSA: pH 7.28, pCO2 55, PaO2 60 (PaFi 75). Sedación profunda + BNM. ¿Análisis mecánico y conducta mandatoria (Amato/ESICM)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Driving pressure 18 cmH2O (Pplat-PEEP); pronación inmediata ≥16 h/día para homogenizar ventilación y ↓ VILI.",
      },
      { id: "B", label: "B", text: "Pplat >30; reducir PEEP a 5 aceptando hipercapnia extrema." },
      { id: "C", label: "C", text: "Reclutamiento sostenido CPAP 40×40 s como maniobra rutinaria." },
      { id: "D", label: "D", text: "VV-ECMO inmediata omitiendo medidas convencionales." },
    ],
    correctOptionId: "A",
    explanation:
      "Driving pressure = Pplat - PEEP = 32-14 = 18 cmH2O (>15 = alto riesgo VILI/mortalidad, Amato). SDRA severo PaFi 75 con PEEP optimizada → pronación temprana (ESICM fuerte). ↓ PEEP causa atelectrauma. Reclutamiento 40×40 (ART) ↑ mortalidad. ECMO rescate tras prono/BNM (EOLIA).",
    keyPoints: [
      "ΔP = Pplat - PEEP; objetivo <15 cmH2O.",
      "PaFi <150 post-optimización → prono ≥16 h.",
      "No reclutamiento rutinario 40×40 (ART negativo).",
    ],
    theoryContent: `MEDICINA CRÍTICA — BY DR Q.
SDRA · Driving pressure y prono

• Baby lung: alta elastancia, VILI por distensión cíclica.
• ΔP >15 predice mortalidad independiente.
• Prono recluta dorsal, ↓ ΔP, mejora oxigenación.

Perla UCI: ΔP = Pplat - PEEP. Si >15: ↓ Vt o prono.

Referencias: Amato et al.; ESICM/ATS ARDS; PROSEVA; EOLIA.`,
  },
  {
    id: "dr-q-54",
    examArea: "Medicina Crítica / UCI / Gasometría",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "acido_base", "anion_gap"],
    statement:
      "Hombre de 50 años, sepsis abdominal + ileostomía 3 L/día. Reanimado con 4 L SF 0.9% en 12 h. PA 90/60, FC 115. GSA: pH 7.20, pCO2 25, HCO3 9. Na 135, K 3.0, Cl 114, lactato 5.5, albúmina 2.0, Cr 1.8. ¿Ecosistema ácido-base real (AG ajustado + delta ratio)?",
    options: [
      { id: "A", label: "A", text: "Acidosis de AG elevado pura compensada por alcalosis respiratoria." },
      { id: "B", label: "B", text: "Acidosis hiperclorémica de AG normal exclusiva por diarrea y SF 0.9%." },
      {
        id: "C",
        label: "C",
        text: "Trastorno triple: acidosis AG elevado (láctica/urémica ajustada) + acidosis hiperclorémica + componente respiratorio.",
      },
      { id: "D", label: "D", text: "Acidosis AG elevado + alcalosis metabólica masiva oculta." },
    ],
    correctOptionId: "C",
    explanation:
      "AG aparente 12; AG ajustado albúmina +5 = 17 (lactato/urémia). HCO3 9 con Cl 114 (diarrea + SF hiperclorémico) = acidosis hiperclorémica superpuesta. Delta ratio 5/15 ≈ 0.33 (<0.4 = AG normal adicional). pCO2 25 con acidosis metabólica severa = hiperventilación sepsis/compensación mixta.",
    keyPoints: [
      "Corregir AG por albúmina: +2.5 mEq/L por cada 1 g/dL ↓.",
      "SF 0.9% en sepsis → acidosis hiperclorémica iatrogénica.",
      "Delta ratio <0.4 = acidosis hiperclorémica concomitante.",
    ],
    theoryContent: `MEDICINA CRÍTICA — BY DR Q.
Trastorno ácido-base triple en UCI

• AG sin corregir engaña con hipoalbuminemia.
• Diarrea + cloruro → AG normal adicional.
• SSC 2026: cristaloides balanceados (RL/Plasmalyte).

Perla UCI: Albúmina baja = gap oculto. Sepsis + SF 0.9% = hipercloremia.

Referencias: SCCM/SSC fluid guidelines; Stewart/classic acid-base.`,
  },
  {
    id: "dr-q-55",
    examArea: "Medicina Crítica / UCI / Nefrología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "aki", "crrt", "starr"],
    statement:
      "Hombre de 75 años, día 3 post-choque séptico urológico. Extubado, sin vasopresores 12 h. Balance +7 L, JVP elevada, crépitos leves. Oliguria 150 mL/24 h. Cr 4.5 (basal 1.0), BUN 110, K 5.3, pH 7.30, HCO3 16. AKI KDIGO 3. Residente pide CRRT inmediata \"para citoquinas\". Según STARRT-AKI/AKIKI, ¿decisión?",
    options: [
      { id: "A", label: "A", text: "HDI preventiva hoy; urea >100 = indicación absoluta." },
      {
        id: "B",
        label: "B",
        text: "Estrategia conservadora: diuréticos + vigilancia; diferir TRR hasta indicaciones absolutas (K+ >6.5, pH <7.15, EAP refractario, uremia sintomática).",
      },
      { id: "C", label: "C", text: "CVVHDF inmediata; inicio temprano ↓ dependencia dialítica." },
      { id: "D", label: "D", text: "Diálisis peritoneal urgente." },
    ],
    correctOptionId: "B",
    explanation:
      "STARRT-AKI y AKIKI: inicio temprano de TRR no mejora mortalidad 90 días y puede ↑ dependencia dialítica. K 5.3, pH 7.30, estable, sin EAP refractario → manejo médico + furosemida. TRR cuando falla manejo conservador (KDIGO).",
    keyPoints: [
      "Diálisis temprana profiláctica: sin beneficio mortalidad (STARRT-AKI).",
      "Urea >100 sin síntomas no es indicación absoluta sola.",
      "TRR cuando K+, acidez, volumen o uremia sintomática refractarios.",
    ],
    theoryContent: `MEDICINA CRÍTICA — BY DR Q.
AKI en UCI · timing de TRR

• Máquina sustituye, no cura tubulo post-isquémico.
• Inicio temprano = second hit inflamatorio.
• Intentar diuresis antes de CRRT si estable.

Perla UCI: No dialices profilácticamente. Espera AEIOU graves.

Referencias: STARRT-AKI NEJM; AKIKI; KDIGO AKI.`,
  },
  {
    id: "dr-q-56",
    examArea: "Medicina Crítica / UCI / Cardiología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "choque_cardiogenico", "swan_ganz"],
    statement:
      "Hombre de 60 años, IAMCEST anterior extenso post-ICP (isquemia 6 h). Anuria, lactato ↑, alteración sensorio. Swan-Ganz: RAP 18, PAP 55/30, PAOP 26, IC 1.5, RVS 2200, SvO2 45%. PA 75/55, FC 110. Eco: FEVI 20%, IM severa funcional. Perfil choque cardiogénico Stevenson C. ¿Soporte inmediato correcto?",
    options: [
      { id: "A", label: "A", text: "Norepinefrina sola a dosis altas para PAM >80." },
      { id: "B", label: "B", text: "Milrinona + diuréticos; tolerar hipotensión." },
      {
        id: "C",
        label: "C",
        text: "Norepinefrina para PAM ≥65 + dobutamina para ↑ IC; candidato a BCIA/ECMO-VA.",
      },
      { id: "D", label: "D", text: "Cristaloides para ↑ precarga + nitroprusiato." },
    ],
    correctOptionId: "C",
    explanation:
      "Choque cardiogénico: IC bajo, PAOP/CVP altos (congestión), SvO2 45% (hipoperfusión). Norepinefrina defiende perfusión coronaria; dobutamina ↑ contractilidad. Inotrópico solo empeora hipotensión. Líquidos en PAOP 26/RAP 18 → edema pulmonar. Soporte mecánico si refractario (AHA/ESC).",
    keyPoints: [
      "Choque cardiogénico hipotensivo: norepi + dobutamina, no inotrópico solo.",
      "PPC = PAM - PAOP; mantener perfusión coronaria.",
      "Perfil frío y húmedo: IC ↓, congestión ↑.",
    ],
    theoryContent: `MEDICINA CRÍTICA — BY DR Q.
Choque cardiogénico · perfil C

• Falla bomba + congestión + vasoconstricción perjudicial.
• Dobutamina sin vasopresor colapsa PAM.
• BCIA/Impella/ECMO-VA si refractario.

Perla UCI: Inotrópico desnudo mata al cardiópata hipotenso. Norepi + dobu.

Referencias: AHA/ESC cardiogenic shock guidelines; SCAI staging.`,
  },
  {
    id: "dr-q-57",
    examArea: "Medicina Crítica / UCI / Trauma",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "trauma", "transfusion", "hipocalcemia"],
    statement:
      "Hombre de 25 años, trauma abdominal, laparotomía control daños, sangrado activo. PTM: 6 CH, 6 PFC, 1 plaquetas. PA 65/40, FC 145, Temp 34.5 °C. ECG: QRS ancho, QTc 550 ms, EV. pH 7.15, lactato 8, fibrinógeno 100, calcio ionizado 0.65 mmol/L. ¿Terapia inmediata metabólica/neurohumoral?",
    options: [
      { id: "A", label: "A", text: "Bicarbonato 8.4% en bolo para revertir acidemia." },
      {
        id: "B",
        label: "B",
        text: "Cloruro o gluconato de calcio IV inmediato para hipocalcemia por citrato transfusional.",
      },
      { id: "C", label: "C", text: "Epinefrina en bolo por choque distributivo hipotérmico." },
      { id: "D", label: "D", text: "Ácido tranexámico 2 g como prioridad sobre calcio." },
    ],
    correctOptionId: "B",
    explanation:
      "Transfusión masiva → acumulación citrato → hipocalcemia ionizada severa (0.65). Ca++ es factor IV coagulación y contráctilidad miocárdica; QTc largo → riesgo FV. Repetir Ca++ cada 4-6 U hemoderivados (ATLS). Bicarbonato empeora Ca ionizado; epinefrina ineficaz con Ca bajo; TXA no resuelve paro inminente por Ca.",
    keyPoints: [
      "Tríada letal + hipocalcemia por citrato = cuarto jinete.",
      "Monitorizar Ca ionizado en PTM.",
      "Ca++ antes de subir vasopresores si QT prolongado.",
    ],
    theoryContent: `MEDICINA CRÍTICA — BY DR Q.
Toxicidad por citrato en PTM

• PFC acumula citrato; hígado isquémico no metaboliza.
• Ca ionizado <1 mmol/L → coagulopatía + falla miocárdica.
• Cloruro calcio 1 g o gluconato según acceso central/periférico.

Perla UCI: Sangre masiva + QT largo + hipotensión = calcio IV ya, no más noradrenalina.

Referencias: ATLS 10th; trauma coagulopathy guidelines.`,
  },
  {
    id: "dr-q-58",
    examArea: "Medicina Crítica / UCI / Ventilación Mecánica",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "destete", "wipo", "extubacion"],
    statement:
      "Mujer de 72 años, día 8 VM post-sepsis respiratoria resuelta. HVI, FEVI preservada. SBT tubo en T 15 min: agitación, diaforesis, musculatura accesoria. PA 180/100 (previa 120/70), FC 135, FR 38, SpO2 84%. POCUS: líneas B difusas nuevas, VI hiperdinámico pletórico. GSA T-piece: pH 7.28, pCO2 50, pO2 55. ¿Etiología de falla y estrategia?",
    options: [
      { id: "A", label: "A", text: "Debilidad diafragmática; traqueostomía temprana." },
      {
        id: "B",
        label: "B",
        text: "Edema pulmonar inducido por destete (WIPO); reconectar VM, diuréticos/vasodilatadores, próximo intento con VNI profiláctica.",
      },
      { id: "C", label: "C", text: "Broncoespasmo con auto-PEEP; sedación + broncodilatadores." },
      { id: "D", label: "D", text: "Sepsis recurrente; reiniciar vasopresores y ATB." },
    ],
    correctOptionId: "B",
    explanation:
      "Retiro PEEP → ↑ retorno venoso (precarga) + ↑ poscarga VI rígido (HVI) → EAP hiperagudo (WIPO). HTA rebote + líneas B + VI pletórico confirman. Reconectar presión positiva, furosemida/nitroglicerina, balance negativo, extubar a BiPAP (CHEST/ATS weaning).",
    keyPoints: [
      "VM = asistente cardíaco en cardiópata rígido.",
      "WIPO: HTA + edema pulmonar súbito en SBT.",
      "Reconectar PEEP revierte edema rápidamente.",
    ],
    theoryContent: `MEDICINA CRÍTICA — BY DR Q.
WIPO · falla cardiovascular del destete

• PEEP ↓ precarga y poscarga transmural VI.
• Tubo en T en HVI = inundación pulmonar aguda.
• Manejo: VM + diuresis/vasodilatador + VNI post-extubación.

Perla UCI: Cardiópata rígido + falla SBT con líneas B = WIPO. Reconecta y diuresis.

Referencias: CHEST/ATS weaning guidelines.`,
  },
  {
    id: "dr-q-59",
    examArea: "Medicina Crítica / UCI / Reanimación",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "sepsis", "fluidos", "perfusion"],
    statement:
      "Hombre de 55 años, choque séptico neumonía bilateral, hora 4 reanimación. PAM 70, diuresis 0.8 mL/kg/h, TRC 2.5 s, mottling 0, alerta. Lactato 7.0→6.2 (<20% aclaramiento). POCUS: VI hiperdinámicos, VCI colapsable. Residente propone fluidos por VCI colapsable y lactato alto. ¿Por qué es iatrogénico?",
    options: [
      { id: "A", label: "A", text: "Requiere Hb >10 g/dL antes de más volumen." },
      {
        id: "B",
        label: "B",
        text: "Respondedor a volumen ≠ necesita volumen; perfusión clínica normalizada; perseguir lactato con fluidos causa daño pulmonar/renal.",
      },
      { id: "C", label: "C", text: "Lactato solo por falla hepática; azul de metileno." },
      { id: "D", label: "D", text: "Norepinefrina falsea TRC; solo tonometría gástrica válida." },
    ],
    correctOptionId: "B",
    explanation:
      "VCI colapsable indica capacidad de responder a volumen (Starling), no indicación de administrarlo. Objetivos de perfusión cumplidos (diuresis, conciencia, TRC). Lactato persistente puede ser adrenérgico/washout. Fluidos extra → SDRA, congestión, daño glicocálix (ESICM).",
    keyPoints: [
      "Puede recibir fluido ≠ necesita fluido.",
      "Perfusión clínica > número de lactato tardío.",
      "TRISS: Hb objetivo 7, no 10.",
    ],
    theoryContent: `MEDICINA CRÍTICA — BY DR Q.
Fin de reanimación guiada por lactato

• Macrohemodinamia acoplada + microcirculación OK → stop fluidos.
• Lactato lag en sepsis; no empujar con volumen.
• ESICM: sobrecarga hídrica ↑ mortalidad post-resucitación.

Perla UCI: Orina + lúcido + piel caliente = reanimación terminada. No trates lactato.

Referencias: ESICM fluid stewardship; CLASSIC trial context.`,
  },
  {
    id: "dr-q-60",
    examArea: "Medicina Crítica / UCI / Neumología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "tep", "rcp", "trombolisis"],
    statement:
      "Mujer de 48 años, TEP masivo, paro en AESP durante RCP. ETE: VD masivamente dilatado, hipocinesia, VI colapsado. Ya 1 mg epinefrina IV. ¿Intervención farmacológica de rescate según ACLS/CHEST?",
    options: [
      { id: "A", label: "A", text: "2 L cristaloides bajo compresión para destapar AP." },
      { id: "B", label: "B", text: "Detener compresiones e iniciar VA-ECMO como única terapia." },
      {
        id: "C",
        label: "C",
        text: "Trombólisis sistémica intra-paro (alteplasa 50 mg o equivalente) y continuar RCP ≥15–20 min adicionales.",
      },
      { id: "D", label: "D", text: "Toracotomía de reanimación con clampeo aórtico." },
    ],
    correctOptionId: "C",
    explanation:
      "TEP masivo causa AESP por obstrucción pulmonar aguda (VD falla, VI sin precarga). Fibrinólisis intra-paro indicada con sospecha/confirmación alta (AHA/CHEST). Continuar RCP 15-20 min para permitir lisis. Volumen empeora VD; ECMO no sustituye trombolisis universal; toracotomía para trauma/taponamiento, no TEP.",
    keyPoints: [
      "AESP + TEP masivo confirmado = trombolisis durante RCP.",
      "No detener compresiones para ECMO sin trombolisis.",
      "Extender RCP post-alteplasa 15-20 min.",
    ],
    theoryContent: `MEDICINA CRÍTICA — BY DR Q.
TEP masivo en paro · trombolisis intra-RCP

• Obstrucción AP → VD agónico → AESP.
• Alteplasa/tenecteplasa durante RCP si TEP probable/confirmado.
• Compresiones continuas mínimo 15-20 min post-dosis.

Perla UCI: AESP + VD gigante en paro = alteplasa ya + no pares de comprimir 15-20 min.

Referencias: AHA ACLS; CHEST PE guidelines.`,
  },
  {
    id: "dr-q-61",
    examArea: "Medicina Interna / Fisiopatología / UCI",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "sepsis", "vasoplejia", "glicocalix"],
    statement:
      "Hombre de 65 años, choque séptico por neumonía multilobar. PA 70/40, FC 130, Temp 39.5 °C. Extremidades calientes, pulsos saltones, anasarca en 12 h con balance +2 L. Lactato 6.5, ScvO2 82%. Eco: VI hiperdinámico FEVI 75%, GC 8 L/min. ¿Mecanismo molecular primario que explica vasoplejía y fuga capilar simultáneas?",
    options: [
      { id: "A", label: "A", text: "Histamina por mastocitos → parálisis precapilar y ↑ presión hidrostática." },
      {
        id: "B",
        label: "B",
        text: "Citoquinas (TNF-α, IL-1) → iNOS → NO tóxico + daño glicocálix y uniones estrechas → vasoplejía y fuga capilar.",
      },
      { id: "C", label: "C", text: "Toxina bloquea Na+/K+ ATPasa vascular → ruptura osmótica endotelial." },
      { id: "D", label: "D", text: "Acidosis láctica bloquea α-1 adrenérgicos; hipoalbuminemia causa edema." },
    ],
    correctOptionId: "B",
    explanation:
      "PAMPs → TLR-4 → NF-κB → citoquinas → iNOS → NO masivo → vasorelajación vía GMPc. Peroxinitrito/citoquinas destruyen glicocálix y cadherinas VE → fuga capilar. ScvO2 alta por shunt microvascular (flujo rápido, extracción baja). Extremidades calientes = vasoplejía.",
    keyPoints: [
      "Choque séptico = enfermedad del endotelio.",
      "iNOS >> eNOS; destrucción glicocálix altera Starling.",
      "ScvO2 alta no siempre = hipoperfusión en vasoplejía.",
    ],
    theoryContent: `FISIOPATOLOGÍA — BY DR Q.
Sepsis · vasoplejía y fuga capilar

Cadena: PAMPs → TLR-4 → TNF/IL-1 → iNOS → NO + daño glicocálix → vasoplejía + edema.

Perla: iNOS dilata vasos; glicocálix destruido convierte capilares en coladores.

Referencias: Surviving Sepsis; endothelial dysfunction literature.`,
  },
  {
    id: "dr-q-62",
    examArea: "Medicina Interna / Fisiopatología / Neumología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "sda", "shunt", "vq"],
    statement:
      "Mujer de 45 años, SDRA post-pancreatitis severa. Cianosis, crépitos difusos, Rx pulmón blanco. GSA ambiente: pH 7.48, PaCO2 30, PaO2 45. FiO2 100% 30 min: PaO2 50 mmHg (+5). ¿Explicación fisiopatológica de hipoxemia refractaria al O2?",
    options: [
      { id: "A", label: "A", text: "↑ espacio muerto (V/Q infinito) por microtrombos capilares." },
      {
        id: "B",
        label: "B",
        text: "Shunt intrapulmonar verdadero (V/Q=0): alvéolos inundados perfundidos; sangre venosa no oxigenada se mezcla con la arterial.",
      },
      { id: "C", label: "C", text: "Defecto de difusión puro que no corrige con FiO2 alta." },
      { id: "D", label: "D", text: "Efecto Bohr inverso por hiperventilación impide liberación de O2." },
    ],
    correctOptionId: "B",
    explanation:
      "SDRA: alvéolos llenos de exudado (V=0) con perfusión intacta (Q normal) = shunt verdadero. FiO2 100% satura Hb en zonas ventiladas pero no oxigena sangre del shunt; PaO2 final permanece baja. Solución: PEEP recluta alvéolos, no más O2.",
    keyPoints: [
      "PaO2 no corrige con FiO2 100% = shunt verdadero.",
      "V/Q=0: perfusión sin ventilación.",
      "Espacio muerto → hipercapnia, no hipoxemia refractaria severa.",
    ],
    theoryContent: `FISIOPATOLOGÍA — BY DR Q.
Shunt verdadero en SDRA

• Exudado alveolar → V=0, Q mantenida → mezcla venosa-arterial.
• O2 puro no corrige shunt; PEEP recluta unidades colapsadas.

Perla: Hipoxemia refractaria a FiO2 100% = shunt. Más oxígeno no sirve; usa PEEP.

Referencias: West V/Q physiology; ARDSNet.`,
  },
  {
    id: "dr-q-63",
    examArea: "Medicina Interna / Fisiopatología / Nefrología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "aki", "triple_whammy", "autorregulacion"],
    statement:
      "Hombre de 75 años, diarrea 3 días + ibuprofeno + losartán. PA 90/60, deshidratado. Cr 1.1→4.8 en 72 h, BUN 120, Na urinario <10, FENa <1%. ¿Cómo los fármacos colapsan la autorregulación glomerular?",
    options: [
      {
        id: "A",
        label: "A",
        text: "AINE vasoconstrictor eferente; ARA II dilata aferente → ↑ presión intraglomerular.",
      },
      {
        id: "B",
        label: "B",
        text: "AINE bloquea prostaglandinas (↓ dilatación aferente); ARA II bloquea vasoconstricción eferente → colapso presión intraglomerular.",
      },
      { id: "C", label: "C", text: "Nefritis intersticial con cilindros leucocitarios." },
      { id: "D", label: "D", text: "Losartán inhibe ADH; ibuprofeno diurético directo." },
    ],
    correctOptionId: "B",
    explanation:
      "Hipovolemia: riñón dilata aferente (PG) y constriñe eferente (Ang II) para mantener TFG. AINE bloquea PG → aferente constriñida. Losartán bloquea Ang II → eferente dilatada. Sin entrada y salida abierta → presión glomerular ~0 → AKI prerrenal (FENa <1%).",
    keyPoints: [
      "Aferente = Prostaglandinas (A-A). Eferente = Angiotensina (E-E).",
      "Triple whammy: AINE + IECA/ARA II + diurético en hipovolemia.",
      "FENa bajo = túbulos intactos, fallo hemodinámico.",
    ],
    theoryContent: `FISIOPATOLOGÍA — BY DR Q.
Autorregulación glomerular · triple whammy

• Hipovolemia activa PG (aferente) y Ang II (eferente).
• AINE + losartán bloquean ambas vías de rescate.

Perla: AINE cierra entrada; IECA/ARA II abren salida. En deshidratación = anuria.

Referencias: KDIGO; nephrology physiology texts.`,
  },
  {
    id: "dr-q-64",
    examArea: "Medicina Interna / Fisiopatología / Endocrinología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "cad", "potasio", "insulina"],
    statement:
      "Hombre de 22 años, debut DM1, CAD severa. pH 7.05, HCO3 5, AG 26, K+ 5.2 mEq/L. Médico inicia insulina 0.1 U/kg/h prioritariamente; 30 min después FV por K+ 1.8. ¿Mecanismo de caída catastrófica del potasio?",
    options: [
      {
        id: "A",
        label: "A",
        text: "K+ sérico falsamente normal por intercambio H+/K+ y déficit corporal total por diuresis osmótica; insulina activa Na+/K+ ATPasa secuestrando K+ intracelular.",
      },
      { id: "B", label: "B", text: "Pseudohiperkalemia hemolítica; insulina diurética distal." },
      { id: "C", label: "C", text: "Insulina activa ROMK y aldosterona expulsa K+ en 30 min." },
      { id: "D", label: "D", text: "Insulina corrige pH rápido abriendo canales miocárdicos." },
    ],
    correctOptionId: "A",
    explanation:
      "CAD: déficit total K+ masivo (diuresis osmótica) enmascarado por acidosis (H+ entra, K+ sale) e insulopenia. K+ 5.2 es espejismo. Insulina → Na+/K+ ATPasa → K+ plasmático colapsa en minutos. ADA: no insulina si K+ <3.3; reponer K+ antes/durante.",
    keyPoints: [
      "K+ normal-alto en CAD = déficit corporal total.",
      "Insulina desplaza K+ intracelular en minutos.",
      "Nunca insulina sin asegurar K+ si <5.2 con acidosis.",
    ],
    theoryContent: `FISIOPATOLOGÍA — BY DR Q.
Paradoja del potasio en CAD

Cadena: insulopenia + acidosis → K+ plasmático alto falso → insulina → internalización → hipokalemia letal.

Perla: K+ en CAD miente. Si ≤5.2 con acidosis, repón K+ ANTES de insulina.

Referencias: ADA DKA guidelines.`,
  },
  {
    id: "dr-q-65",
    examArea: "Medicina Interna / Fisiopatología / Cardiología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "hfref", "laplace", "remodelado"],
    statement:
      "Hombre de 72 años, HFrEF terminal. VI dilatado (DDVI 70 mm), pared 8 mm, FEVI 20%, IM funcional severa, soplo holosistólico ápex. ¿Principio físico que explica ↑ consumo O2 miocárdico e IM funcional simultáneamente?",
    options: [
      { id: "A", label: "A", text: "Efecto Venturi succiona valvas mitrales." },
      { id: "B", label: "B", text: "Frank-Starling optimiza contracción con estiramiento excesivo." },
      {
        id: "C",
        label: "C",
        text: "Ley de Laplace (σ=P×r/2h): ↑ radio y ↓ grosor ↑ tensión parietal/MVO2; dilatación anillo mitral separa papilares → IM funcional.",
      },
      { id: "D", label: "D", text: "Poiseuille: coronarias estrechas causan isquemia papilar." },
    ],
    correctOptionId: "C",
    explanation:
      "Remodelado excéntrico: radio ↑, h ↓ → estrés parietal (Laplace) ↑ → MVO2 ↑. Dilatación esferoidal estira anillo mitral y desplaza papilares → coaptación fallida → IM funcional → sobrecarga volumen (círculo vicioso). Starling en fase descendente (sarcómeras sobre-estiradas).",
    keyPoints: [
      "Laplace: tensión = (P×r)/(2×h).",
      "IM funcional = geometría, no valva enferma.",
      "IECA/BB ↓ presión y radio → ↓ MVO2.",
    ],
    theoryContent: `FISIOPATOLOGÍA — BY DR Q.
HFrEF · Laplace y IM funcional

• VI esferoidal → σ gigante → hambre energética + IM por tracción papilar.

Perla: Corazón dilatado y delgado = agonía energética (Laplace). IECA/BB frenan remodelado.

Referencias: Braunwald heart failure physiology.`,
  },
  {
    id: "dr-q-66",
    examArea: "Medicina Interna / Fisiopatología / Gasometría",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "acido_base", "stewart", "hipercloremia"],
    statement:
      "Mujer de 40 años post-peritonitis, 8 L SF 0.9% en 24 h. Euvolémica, lactato 1.2, Cr 0.9. Na 154, Cl 126, pH 7.22, HCO3 14, AG aparente 14. ¿Alteración iónica primaria según modelo Stewart?",
    options: [
      { id: "A", label: "A", text: "Exceso Cl- obliga riñón a reabsorber H+." },
      { id: "B", label: "B", text: "SF 0.9% aporta H+ libres in vitro." },
      {
        id: "C",
        label: "C",
        text: "Infusión masiva ↓ SID (Na-Cl); electroneutralidad fuerza disociación H2O → ↑ H+ libre → acidosis hiperclorémica.",
      },
      { id: "D", label: "D", text: "Na+ hiperactiva Na+/H+ expulsa H+ al plasma." },
    ],
    correctOptionId: "C",
    explanation:
      "Stewart: pH depende de SID, pCO2, ácidos débiles. SF 0.9% (Na 154, Cl 154) SID=0 diluye SID plasmático. SID ↓ → agua se disocia → ↑ H+ → consume HCO3 → acidosis hiperclorémica con AG normal. Lactato normal descarta hipoperfusión.",
    keyPoints: [
      "SID normal ~40 (Na-Cl gap).",
      "SF 0.9% SID=0 → acidosis hiperclorémica iatrogénica.",
      "Usar cristaloides balanceados (RL/Plasmalyte).",
    ],
    theoryContent: `FISIOPATOLOGÍA — BY DR Q.
Stewart · acidosis hiperclorémica

Cadena: SF 0.9% → ↑ Cl → ↓ SID → disociación H2O → acidemia.

Perla: Salina \"normal\" no es normal; SID cero enferma el pH.

Referencias: Stewart acid-base; SSC fluid guidelines.`,
  },
  {
    id: "dr-q-67",
    examArea: "Medicina Interna / Fisiopatología / Cardiología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "eap", "diastolica", "serca"],
    statement:
      "Hombre de 55 años, crisis HTA 200/120, EAP fulminante, infradesnivel ST V3-V6, FEVI 60% preservada. ¿Proceso molecular interrumpido por isquemia que colapsa relajación diastólica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Isquemia depleta ATP → puentes actina-miosina no disocian y SERCA2a no reupta Ca2+ → rigidez diastólica → ↑ presión telediastólica → EAP con FEVI preservada.",
      },
      { id: "B", label: "B", text: "Glicólisis anaerobia bloquea Na+ rápido fase 0." },
      { id: "C", label: "C", text: "Noradrenalina prolonga potencial acción acortando diástole." },
      { id: "D", label: "D", text: "Citoquinas destruyen elastina instantáneamente." },
    ],
    correctOptionId: "A",
    explanation:
      "Relajación diastólica consume más ATP que sístole. Isquemia subendocárdica → ↓ ATP → falla SERCA2a (Ca2+ citosólico persistente) + rigor reversible → VI rígido → PTDVI ↑ → transmisión retrógrada → EAP. FEVI puede estar normal (disfunción diastólica aguda).",
    keyPoints: [
      "Diástole es activa y ATP-dependiente.",
      "Isquemia afecta lusitropismo antes que inotropismo.",
      "EAP + FEVI normal = piensa disfunción diastólica isquémica.",
    ],
    theoryContent: `FISIOPATOLOGÍA — BY DR Q.
EAP con FEVI preservada · isquemia

Cadena: isquemia → ↓ ATP → SERCA2a falla → VI rígido → EAP.

Perla: Relajación gasta más ATP que contracción. Isquemia apaga SERCA2a.

Referencias: ACC/AHA HFpEF; ischemic diastolic dysfunction.`,
  },
  {
    id: "dr-q-68",
    examArea: "Medicina Interna / Fisiopatología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "taponamiento", "pulso_paradoxo"],
    statement:
      "Hombre de 30 años, trauma torácico, taponamiento cardíaco. PA 65/40, FC 145, JVP extrema, pulso desaparece en inspiración. POCUS: derrame pericárdico colapsa VD en diástole; septum abomba a izquierda en inspiración. ¿Mecanismo del pulso paradójico?",
    options: [
      { id: "A", label: "A", text: "Inspiración succiona líquido pericárdico a pleura." },
      {
        id: "B",
        label: "B",
        text: "↑ retorno venoso al VD en inspiración; pericardio rígido impide expansión externa → septum empuja VI → ↓ llenado VI → ↓ gasto sistémico.",
      },
      { id: "C", label: "C", text: "Presión negativa colapsa aurícula izquierda." },
      { id: "D", label: "D", text: "Reflejo Bezold-Jarisch bloquea AV en inspiración." },
    ],
    correctOptionId: "B",
    explanation:
      "Interdependencia ventricular patológica: inspiración ↑ retorno al VD pero pericardio a tensión impide dilatación externa → volumen empuja septum hacia VI → ↓ precarga VI → ↓ volumen sistólico → caída PA >10 mmHg (pulso paradójico).",
    keyPoints: [
      "Pericardio a tensión = coraza; pelea VD vs VI por volumen.",
      "Pulso paradójico: caída PA sistólica >10 mmHg en inspiración.",
      "Bezold-Jarisch = bradicardia, no pulso rítmico con taquicardia.",
    ],
    theoryContent: `FISIOPATOLOGÍA — BY DR Q.
Taponamiento · pulso paradójico

Cadena: inspiración → ↑ retorno VD → septum → VI colapsado → ↓ GC.

Perla: Pulso paradójico = batalla de volumen en coraza inelástica.

Referencias: ATLS; cardiac tamponade physiology.`,
  },
  {
    id: "dr-q-69",
    examArea: "Medicina Interna / Fisiopatología / Endocrinología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "hipocalcemia", "trousseau", "canales_sodio"],
    statement:
      "Mujer de 35 años, 48 h post-tiroidectomía, Ca total 6.5 mg/dL. Parestesias, Trousseau y Chvostek (+). ¿Mecanismo biofísico de hiperexcitabilidad neuromuscular?",
    options: [
      { id: "A", label: "A", text: "Ca2+ activa acetilcolinesterasa; déficit → ACh acumulada." },
      { id: "B", label: "B", text: "Falla liberación calcio inducida por calcio en retículo." },
      { id: "C", label: "C", text: "Ca2+ bloquea K+ en reposo; hipocalcemia hiperpolariza." },
      {
        id: "D",
        label: "D",
        text: "Ca2+ extracelular estabiliza canales Na+ voltaje-dependientes; hipocalcemia ↓ umbral → descargas espontáneas → tetania.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "Ca2+ extracelular blinda canales Na+ en reposo, elevando umbral de disparo. Hipocalcemia desestabiliza membrana → apertura espontánea Na+ → potenciales de acción repetitivos → tetania, Trousseau, Chvostek. Ca2+ excita menos la placa motora sin Ca presináptico (parálisis), no tetania.",
    keyPoints: [
      "Ca2+ extracelular = estabilizador de membrana.",
      "Hipocalcemia hiperexcita nervio periférico.",
      "Tetania es origen neuromuscular, no placa motora.",
    ],
    theoryContent: `FISIOPATOLOGÍA — BY DR Q.
Hipocalcemia · estabilización de membrana

Cadena: ↓ PTH → ↓ Ca2+ → desprendimiento de canales Na+ → tetania.

Perla: Calcio tranquiliza el nervio; sin él, canales Na+ disparan solos.

Referencias: Endocrine surgery complications; membrane physiology.`,
  },
  {
    id: "dr-q-70",
    examArea: "Medicina Interna / Fisiopatología / UCI",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "cor_pulmonale", "vph", "peep"],
    statement:
      "Hombre de 50 años, neumonía bilateral Influenza A, VM PEEP 16. PA 60/40. Swan-Ganz: PVC 22, PAP 60/30, PAOP 8, GC 2.0. Eco: VD dilatado, septum hacia VI, VI colapsado. ¿Doble mecanismo que ↑ RVP y colapsa GC?",
    options: [
      { id: "A", label: "A", text: "PEEP distiende VI comprimiendo VD; hipoxia vasodilata pulmón." },
      {
        id: "B",
        label: "B",
        text: "Vasoconstricción pulmonar hipóxica difusa + compresión capilar por PEEP alto → ↑ RVP → cor pulmonale agudo → ↓ precarga VI.",
      },
      { id: "C", label: "C", text: "Fibrinolisis licua sangre hacia pleura." },
      { id: "D", label: "D", text: "Hipercapnia dilata arteria pulmonar y constriñe venas." },
    ],
    correctOptionId: "B",
    explanation:
      "Hipoxia alveolar global → VPH (cierre arteriolas pre-capilares). PEEP alto sobredistinde alvéolos → aplasta capilares intra-alveolares. RVP ↑ → VD choca contra muro → dilatación, estasis (PVC↑), PAOP baja (VI sin precarga), GC colapsa. Disociación Swan: presiones derechas altas, izquierdas bajas = bloqueo pulmonar.",
    keyPoints: [
      "Pulmón: hipoxia vasoconstrictora (Euler-Liljestrand).",
      "PEEP excesivo comprime capilares → ↑ RVP.",
      "Cor pulmonale agudo: VD falla, VI muere de sed.",
    ],
    theoryContent: `FISIOPATOLOGÍA — BY DR Q.
Cor pulmonale agudo · VPH + PEEP

Cadena: hipoxia → VPH + PEEP alto → ↑ RVP → VD dilatado → GC ↓.

Perla: Hipoxia constriñe pulmón; PEEP excesivo aplasta capilares. VD empuja contra ladrillos.

Referencias: West lung zones; ARDS hemodynamics.`,
  },
];
