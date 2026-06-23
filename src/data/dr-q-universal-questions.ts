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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa el wake-up stroke y la reperfusión fuera de ventana IV: en oclusión de gran vaso, la perfusión (core vs penumbra) importa más que el reloj.

¿Qué está ocurriendo realmente?
- Hombre con FA sin anticoagular, wake-up stroke (~10.5 h desde última vez normal).
- NIHSS 22, oclusión total de M1 ACM izquierda en angioTAC.
- TAC perfusión: core pequeño (15 cc) y penumbra grande (95 cc) con mismatch volumétrico.
- Fuera de ventana para trombólisis IV estándar (<4.5 h), pero con tejido salvable.

¿Qué dato es clave en el examen?
- DAWN y DEFUSE-3: trombectomía mecánica clase I entre 6-24 h con discordancia clínico-imagenológica.
- Core pequeño + penumbra grande = candidato ideal a trombectomía endovascular.
- En oclusión de gran vaso: "el tiempo es cerebro, pero la colateralidad y la perfusión son tiempo".

¿Por qué fallan las otras opciones?
- Trombólisis IV inmediata: >4.5 h sin protocolo WAKE-UP con RM aumenta riesgo hemorrágico sin beneficio claro vs trombectomía directa.
- Heparina a dosis plenas: no es reperfusión en ACV agudo; anticoagulación diferida.
- Abstenerse por >4.5 h: ignora evidencia de trombectomía extendida con mismatch.

Clave: wake-up + M1 ocluida + core pequeño/penumbra grande = trombectomía mecánica, no alteplasa IV.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa el estado epiléptico no convulsivo: cesar los movimientos tónico-clónicos no significa que la crisis haya terminado a nivel eléctrico.

¿Qué está ocurriendo realmente?
- Paciente con epilepsia estructural tras abandono de medicación y convulsiones persistentes.
- Recibió midazolam IM, lorazepam IV y levetiracetam 60 mg/kg.
- Cesa el componente motor pero permanece en coma (GCS 3) con mioclonías faciales y nistagmo rítmico.
- Desacople electro-mecánico: fatiga muscular vs actividad epileptiforme continua subclínica.

¿Qué dato es clave en el examen?
- Estado epiléptico refractario: persiste tras benzodiacepina + anticrisis de segunda línea.
- El EEG continuo es la única forma de confirmar y titular el tratamiento.
- Conducta: intubación + anestésicos IV continuos (propofol/midazolam/ketamina) hasta supresión de brotes.

¿Por qué fallan las otras opciones?
- Observación por "estado post-ictal": peligroso; puede ser EENC con riesgo de daño cerebral.
- Segunda línea adicional en sala general: ya recibió levetiracetam; necesita anestesia y UCI.
- Punción lumbar y aciclovir: la fiebre y mioclonías focales no sustituyen el manejo del EENC refractario.

Clave: convulsionó, fue tratado, no despierta o tiene mioclonías → asumir EENC → intubar + anestésico + EEG.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa vasoespasmo post-HSA: el deterioro entre días 4-14 sin re-sangrado en TAC suele ser isquemia cerebral retardada (DCI), no hidrocefalia ni nuevo sangrado.

¿Qué está ocurriendo realmente?
- Mujer día 7 post-HSA por aneurisma de ACoA, ya coilada al día 2.
- Deterioro súbito con nueva paresia crural derecha y apatía; Glasgow baja de 15 a 12.
- TAC sin re-sangrado ni hidrocefalia.
- Cuadro clásico de vasoespasmo en ventana día 4-14 post-HSA.

¿Qué dato es clave en el examen?
- DCI por vasoespasmo: el cerebro vasoespástico pierde autorregulación y depende de la presión de perfusión sistémica.
- Tratamiento hemodinámico: euvolemia + vasopresores (norepinefrina) para elevar PAM y forzar flujo cerebral.
- Nimodipino oral 21 días mejora pronóstico global, pero no revierte vasoespasmo agudo; la vía IV puede causar hipotensión.

¿Por qué fallan las otras opciones?
- Nimodipino IV a altas dosis: no es tratamiento del espasmo agudo; riesgo de hipotensión.
- Nitroprusiato: vasodilatador sistémico que puede empeorar isquemia por robar flujo del cerebro vasoespástico.
- Derivación VP: indicada si hay hidrocefalia; el TAC la descartó.

Clave: HSA + deterioro día 7 + TAC limpio = vasoespasmo → subir presión arterial con vasopresores.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa la crisis miasténica: la regla de los 20 (CVF y NIF) define cuándo intubar antes del colapso respiratorio.

¿Qué está ocurriendo realmente?
- Mujer con miastenia gravis en tratamiento, precipitada por ciprofloxacina (puede bloquear canal ACh).
- Disnea severa, imposibilidad para deglutir, debilidad generalizada y respiración paradójica.
- CVF 10 mL/kg (crítico <15), NIF -15 cmH2O, hipercapnia (PaCO2 58, pH 7.28).
- Crisis miasténica con falla bulbar e insuficiencia ventilatoria inminente.

¿Qué dato es clave en el examen?
- Regla de los 20: CVF <15 mL/kg o NIF peor que -20 → intubación electiva temprana.
- Después de intubar: plasmaféresis o IGIV (igual eficacia).
- Suspender piridostigmina en ventilación mecánica (secreciones, broncoespasmo).

¿Por qué fallan las otras opciones?
- Aumentar piridostigmina y O2 nasal: insuficiente ante hipercapnia y falla ventilatoria.
- Metilprednisolona sola: en fase aguda puede empeorar debilidad 7-10 días; no trata la crisis respiratoria.
- BiPAP y test de edrofonio: no sustituyen intubación con CVF tan baja; edrofonio es diagnóstico, no rescate.

Clave: miastenia + CVF <15 + hipercapnia = intubar ya, suspender mestinón, PLEX o IGIV.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa herniación uncal: la midriasis ipsilateral fija es compresión del III par, y el manejo puente es hiperosmolar de inmediato.

¿Qué está ocurriendo realmente?
- Hombre con HIC hipertensiva y hematoma ganglios basales derechos de 70 cc.
- Deterioro súbito a Glasgow 5 con decorticación.
- Pupila derecha 7 mm arrefléctica (midriasis paralítica), ojo derecho desviado abajo y afuera.
- Tríada de Cushing (HTA, bradicardia, respiración irregular): herniación uncal con isquemia de tronco inminente.

¿Qué dato es clave en el examen?
- El uncus temporal hernia por la incisura tentorial y comprime el III par ipsilateral.
- Las fibras parasimpáticas periféricas del III controlan la pupila → midriasis ipsilateral primero.
- Terapia puente: manitol 20% o solución salina hipertónica sin esperar TAC de control.

¿Por qué fallan las otras opciones?
- Herniación subfalcina con hiperventilación agresiva: no explica el patrón pupilar del III par.
- Herniación amigdalina con esteroides: los corticoides no benefician edema citotóxico/hemorrágico agudo.
- Herniación central con pentobarbital: el cuadro pupilar lateralizado orienta a uncal, no central.

Clave: hematoma + pupila grande fija ipsilateral = uncal → manitol o salina hipertónica ya.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa encefalitis herpética: el tropismo temporal, las alucinaciones olfatorias y el LCR con eritrocitos obligan a aciclovir empírico de inmediato.

¿Qué está ocurriendo realmente?
- Hombre previamente sano con fiebre, confusión y afasia sensitiva (Wernicke).
- Crisis con automatismos orales, chasquido labial y olor a caucho quemado (alucinación olfatoria).
- LCR: pleocitosis linfocitaria, eritrocitos, glucosa relativamente normal.
- RM: hiperintensidad en polos temporales e hipocampo izquierdo.

¿Qué dato es clave en el examen?
- HSV-1 asciende por tracto olfatorio/trigémino y causa necrosis del lóbulo temporal medial.
- LCR con linfocitos + eritrocitos + glucosa normal diferencia de meningitis bacteriana.
- Aciclovir IV empírico en los primeros 30 minutos; el retraso causa daño cognitivo permanente o muerte.

¿Por qué fallan las otras opciones?
- Meningitis neumocócica: LCR típicamente con glucosa muy baja y neutrófilos predominantes.
- Encefalitis anti-NMDA: cuadro psiquiátrico/ovario teratoma; RM temporal no es el patrón clásico aquí.
- Toxoplasmosis: en inmunosuprimidos con lesiones multifocales; no este patrón en sano.

Clave: fiebre + comportamiento bizarro + olores extraños + RM temporal = aciclovir ya, sin esperar PCR.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa localización en tronco encefálico: el síndrome alterno (cara ipsilateral, cuerpo contralateral) con fuerza intacta es Wallenberg por oclusión de PICA o vertebral.

¿Qué está ocurriendo realmente?
- Hombre con vértigo incapacitante y disfagia súbita de 2 horas.
- Horner izquierdo, voz ronca, reflejo nauseoso ausente (núcleo ambiguo IX-X).
- ↓ dolor/temperatura en hemicara izquierda y hemicuerpo derecho (síndrome alterno).
- Ataxia ipsilateral con fuerza 5/5 en las cuatro extremidades.

¿Qué dato es clave en el examen?
- Núcleo espinal del V → ↓ dolor/temperatura facial ipsilateral.
- Espinotalámico → ↓ dolor/temperatura corporal contralateral.
- Pedúnculo cerebeloso inferior → ataxia ipsilateral; pirámides intactas → fuerza conservada.
- Lesión bulbar lateral izquierda = síndrome de Wallenberg (PICA o arteria vertebral izquierda).

¿Por qué fallan las otras opciones?
- Bulbar medial por arteria espinal anterior: afecta pirámides → habría debilidad.
- Pontino lateral por AICA: afecta VII-VIII (facial/auditivo), no el patrón bulbar clásico.
- Mesencefálico de Weber: III par + contralateral, no disfagia ni síndrome alterno sensitivo.

Clave: sensibilidad cruzada + disfagia + Horner + ataxia sin debilidad = Wallenberg.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa reversión de anticoagulación en HIC: cada anticoagulante tiene su antídoto; apixabán requiere andexanet o CCP4, no idarucizumab.

¿Qué está ocurriendo realmente?
- Mujer de 75 años en apixabán (anti-Xa) con HIC putaminal izquierda de 40 cc y spot sign.
- Última dosis hace 3 horas; INR 1.2 (no refleja bien anticoagulación por DOAC).
- Hemiplejía derecha y desviación de mirada: emergencia neuroquirúrgica y hemostática.
- Necesidad de reversión específica del inhibidor del factor Xa.

¿Qué dato es clave en el examen?
- Apixabán/rivaroxabán = inhibidores directos del factor Xa → andexanet alfa (1.ª línea) o CCP4.
- Control agresivo de PA (objetivo PAS ~140 mmHg) simultáneamente.
- PT/INR no son fiables para monitorizar DOAC.

¿Por qué fallan las otras opciones?
- Idarucizumab: antídoto específico solo para dabigatrán (anti-IIa), no para apixabán.
- Vitamina K y plasma fresco: para warfarina, no para DOAC.
- Protamina: revierte heparina, no apixabán.

Clave: HIC en paciente con "xaban" = andexanet o CCP4 + control de PA; dabigatrán = idarucizumab.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa compresión medular maligna: el nivel sensitivo al ombligo es T10, y en cáncer prostático la RM torácica urgente no puede esperar.

¿Qué está ocurriendo realmente?
- Hombre de 65 años con cáncer de próstata metastásico.
- Paraplejía 0/5 en EEII con arreflexia y tono flácido (choque espinal agudo).
- Pérdida sensitiva total desde ombligo hacia abajo y retención urinaria.
- Síndrome medular completo agudo en paciente oncológico.

¿Qué dato es clave en el examen?
- Niveles dermatómicos: pezones T4, ombligo T10, pliegue inguinal L1.
- Cáncer + déficit medular agudo = compresión medular maligna hasta demostrar lo contrario.
- RM con contraste de columna torácica urgente define cirugía vs radioterapia; el retraso causa paraplejía permanente.

¿Por qué fallan las otras opciones?
- T4 (pezones) con RM lumbosacra: el nivel sensitivo es más bajo (T10), no cauda equina.
- L1 con RM de cerebro: nivel y localización incorrectos.
- T12 con angiografía: no es el estudio de primera línea; la compresión epidural se confirma con RM.

Clave: cáncer prostático + nivel umbilical = compresión T10 → RM torácica urgente + dexametasona empírica.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa Guillain-Barré con disautonomía: la inestabilidad hemodinámica severa es por daño autonómico periférico, y el tratamiento es IGIV o plasmaféresis, no esteroides.

¿Qué está ocurriendo realmente?
- Hombre de 30 años con debilidad ascendente 5 días tras diarrea por Campylobacter (3 semanas antes).
- Paraplejía flácida, arreflexia universal, disociación albúmino-citológica en LCR (proteínas 125, 2 leucocitos).
- Disautonomía severa: oscilaciones de PA y FC con asistolia transitoria en monitor.
- SGB clásico (AIDP) con compromiso autonómico letal.

¿Qué dato es clave en el examen?
- Desmielinización autoinmune de nervios autonómicos periféricos destruye barorreflejos.
- Oscilaciones simpáticas/parasimpáticas: HTA/taquicardia ↔ hipotensión/bradicardia/asistolia.
- Tratamiento: IGIV o plasmaféresis en las primeras 2 semanas (equivalentes); esteroides no son eficaces en SGB clásico.

¿Por qué fallan las otras opciones?
- Extensión bacteriana al bulbo con esteroides intratecales: no es el mecanismo; SGB es autoinmune periférico.
- Miocarditis viral con marcapasos sin IGIV: el cuadro encaja con neuropatía autonómica del SGB.
- Metilprednisolona en pulsos: ensayos muestran que esteroides no benefician SGB clásico.

Clave: SGB + disautonomía + asistolia = IGIV o PLEX; esteroides no; vigilar al intubar (hiperreactividad vagal).

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa polifarmacia geriátrica con Criterios de Beers 2023: la caída con hipoglucemia revela una cascada iatrogénica que exige deprescripción selectiva, no más fármacos.

¿Qué está ocurriendo realmente?
- Mujer de 84 años con caída, TCE y hematoma subdural agudizado.
- Hipoglucemia severa (45 mg/dL) en domicilio por glibenclamida.
- FA no valvular anticoagulada con rivaroxabán + aspirina sin indicación (prevención primaria).
- Omeprazol crónico 5 años sin indicación clara; sangrado digestivo oculto y anemia.
- Pre-frágil (FRAIL 2, TUG lento): alta vulnerabilidad a eventos adversos.

¿Qué dato es clave en el examen?
- Beers 2023: aspirina evitar en prevención primaria >65 años (riesgo hemorrágico sin beneficio).
- Glibenclamida: sulfonilurea de acción prolongada → hipoglucemia letal en anciano con TFG 45.
- Rivaroxabán: evitar en FA crónica por mayor sangrado GI vs apixabán/dabigatrán.
- IBP crónico >8 semanas sin indicación: evitar (fracturas, déficit B12, infecciones).
- DOAC preferido sobre warfarina cuando está indicado, pero apixabán es mejor opción con sangrado/fragilidad.

¿Por qué fallan las otras opciones?
- Suspender todo y cambiar a warfarina: warfarina no es superior a DOACs; aumenta complejidad y riesgo de caídas por INR.
- Mantener doble terapia y omeprazol "protector": omeprazol no previene sangrado por DOAC; la aspirina no está indicada.
- iSGLT2 con TFG 45, digoxina y suspender rivaroxabán: la FA no valvular sí requiere anticoagulación; digoxina no es sustituto.

Clave: caída + hipoglucemia + hematoma = deprescripción Beers: stop glibenclamida, stop aspirina primaria, retirar IBP, cambiar rivaroxabán → apixabán.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa delirium sobre demencia por cuerpos de Lewy: la sensibilidad neuroléptica severa obliga a tratar la causa (ITU + retención) antes que sedar con antipsicóticos bloqueadores D2.

¿Qué está ocurriendo realmente?
- Hombre de 78 años con DCL (fluctuaciones, alucinaciones visuales estructuradas, parkinsonismo rígido-acinético).
- Agitación y fluctuación extrema de conciencia en 48 h sobre demencia basal.
- ITU con piuria masiva, nitritos (+), leucocitosis y PCR elevada.
- Globo vesical palpable: retención urinaria como desencadenante adicional.
- Delirium hiperactivo = epifenómeno de espina irritativa, no "psicosis nueva".

¿Qué dato es clave en el examen?
- DCL: deficiencia colinérgica y dopaminérgica simultánea → sensibilidad neuroléptica (~50% rigidez, coma, muerte).
- Haloperidol y risperidona (alto bloqueo D2) están contraindicados.
- Si farmacológico es inevitable: quetiapina o clozapina (rápida disociación D2) en dosis ultrabajas.
- Benzodiacepinas empeoran delirium en ancianos (Beers).
- Prioridad: medidas no farmacológicas + tratar infección + drenar vejiga.

¿Por qué fallan las otras opciones?
- Haloperidol 5 mg IM: típico de alto potencia D2 → síndrome neuroléptico-like letal en DCL.
- Risperidona + aumentar levodopa: risperidona empeora parkinsonismo; no trata la causa.
- Midazolam IV: benzodiacepinas contraindicadas en delirium geriátrico; empeoran confusión.

Clave: DCL + delirium = tratar ITU/retención primero; evitar haloperidol/risperidona; quetiapina ultrabaja solo si ineludible.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa fragilidad extrema en decisión valvular: reparar la válvula no revierte el colapso multidominio; la intervención invasiva es fútil.

¿Qué está ocurriendo realmente?
- Hombre de 88 años con estenosis aórtica severa sintomática (síncope, NYHA III).
- Fragilidad terminal: Fried 5/5, SPPB 2/12, pérdida ponderal, sarcopenia (handgrip bajo, pantorrilla <31 cm).
- Dependencia severa: Barthel 35/100, Lawton 1/8.
- Demencia avanzada: MMSE 12/30.
- Caquexia: albúmina 2.8 g/dL.

¿Qué dato es clave en el examen?
- Fragilidad = homeostenosis: reserva fisiológica agotada; el paciente no tolera estrés quirúrgico.
- SPPB <4 + demencia + dependencia ABVD = alta mortalidad periprocedimiento sin beneficio funcional a 1 año.
- TAVI no revierte sarcopenia, demencia ni dependencia.
- La edad cronológica no contraindica cirugía; la fragilidad severa sí.
- Manejo conservador/paliativo es ético y basado en evidencia.

¿Por qué fallan las otras opciones?
- Cirugía abierta: mortalidad y morbilidad inaceptables sin recuperación funcional esperable.
- TAVI urgente "revertirá fragilidad": procedimiento mínimamente invasivo no restaura reserva fisiológica.
- Testosterona/hormona de crecimiento: no hay evidencia de revertir caquexia terminal; retrasa cuidados paliativos.

Clave: EA severa + Fried 5/5 + Barthel 35 + MMSE 12 = futilidad para TAVI/cirugía → paliativos.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa hipotensión ortostática iatrogénica: antes de prescribir fludrocortisona o marcapasos, hay que deprescribir los fármacos culpables según STOPP/Beers.

¿Qué está ocurriendo realmente?
- Hombre de 76 años con síncope postprandial y mareo ortostático matutino.
- Caída sistólica ≥40 mmHg en ortostatismo sin taquicardia compensatoria (barorreflejos envejecidos).
- Polifarmacia causal: amlodipino, enalapril, tamsulosina (alfa-bloqueador), amitriptilina (anticolinérgica + anti-alfa-1).
- Mucosas secas y retención fecal: toxidrome anticolinérgico parcial por amitriptilina.

¿Qué dato es clave en el examen?
- Hipotensión ortostática en anciano = iatrogenia hasta demostrar lo contrario.
- STOPP/Beers: amitriptilina evitar en >65 años (alta carga anticolinérgica).
- Tamsulosina bloquea alfa-1 → vasodilatación y empeora ortostatismo.
- Deprescripción escalonada (no suspender todo de golpe): evita rebote hipertensivo.
- Hidratación y medias compresivas son medidas de soporte, no sustituto de deprescripción.

¿Por qué fallan las otras opciones?
- Fludrocortisona + midodrina manteniendo culpables: cascada de prescripción sin corregir causa.
- Suspender todo de golpe: riesgo de crisis hipertensiva por rebote.
- Marcapasos: no hay bloqueo AV; FC estable en ortostatismo descarta bradicardia como causa.

Clave: ortostatismo + amitriptilina + tamsulosina + amlodipino = STOPP → deprescripción escalonada.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa discapacidad asociada a hospitalización (HAD) y sarcopenia aguda: la cama es veneno iatrogénico; el tratamiento es ejercicio de fuerza + proteína, no reposo.

¿Qué está ocurriendo realmente?
- Hombre de 82 años al alta tras 14 días por NAC resuelta.
- Previo: Barthel 95, caminaba 1 km/día; actual: Barthel 45, no se levanta solo.
- Reposo en cama durante hospitalización + ingesta pobre + sonda vesical (retirada).
- Atrofia cuádriceps, claudicación, SARC-F >4, fuerza 3/5 simétrica.
- Sarcopenia aguda post-hospitalización, no neuropatía periférica (reflejos conservados).

¿Qué dato es clave en el examen?
- ~10 días de cama en hospital ≈ envejecimiento muscular acelerado equivalente a años de sarcopenia.
- EWGSOP2 gold standard: ejercicio de resistencia progresivo + proteína 1.2–1.5 g/kg/día.
- Corrección de déficit de vitamina D si está presente.
- HAD es potencialmente reversible con rehabilitación agresiva precoz.
- Megestrol (Beers: evitar): ganancia de grasa, trombosis, sin beneficio muscular.

¿Por qué fallan las otras opciones?
- Reposo relativo limitado al baño: perpetúa la miopatía por inmovilidad.
- Megestrol/esteroides anabólicos: no son tratamiento de sarcopenia; megestrol aumenta mortalidad.
- Institucionalización definitiva: el deterioro de 50 puntos en Barthel no es irreversible a los 82 con rehab.

Clave: NAC resuelta + Barthel 45 post-cama = HAD/sarcopenia → fuerza + proteína 1.2–1.5 g/kg/día.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa toxidrome anticolinérgico por oxibutinina: un fármaco de 1.ª generación lipofílico cruza la BHE y causa delirium central más retención urinaria periférica.

¿Qué está ocurriendo realmente?
- Mujer de 80 años con confusión aguda, xerostomía, constipación e intolerancia oral.
- Inició oxibutinina hace 2 semanas por incontinencia de urgencia recién diagnosticada.
- MCI previo: cerebro con baja reserva colinérgica.
- CAM positivo (delirium) + globo vesical masivo + fecaloma impactado.
- Evento adverso farmacológico predecible, no "desenmascaramiento de Alzheimer".

¿Qué dato es clave en el examen?
- Oxibutinina: antimuscarínico lipofílico de 1.ª generación.
- Central (M1): cruza BHE → delirium en cerebro con reserva colinérgica reducida.
- Periférico (M3): retención urinaria y estreñimiento (paradoja: trató incontinencia y la empeoró).
- Beers 2023: evitar fuertemente anticolinérgicos potentes en ancianos.
- Alternativa segura: mirabegrón (agonista beta-3 vesical, sin actividad anticolinérgica).

¿Por qué fallan las otras opciones?
- Toxicidad colinérgica excesiva + betanecol: es lo opuesto; oxibutinina bloquea colina, no la estimula.
- IAM silente: no hay datos cardíacos; el cuadro es anticolinérgico clásico.
- Donepezilo alto + mantener oxibutinina: colinérgico + anticolinérgico se anulan parcialmente; no resuelve retención.

Clave: oxibutinina + MCI + delirium + globo vesical = suspender + derivar orina; a futuro mirabegrón.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa úlcera terminal de Kennedy (skin failure): una lesión sacra fulminante pese a prevención óptima marca mortalidad inminente, no negligencia.

¿Qué está ocurriendo realmente?
- Mujer de 92 años con Alzheimer FAST 7F (postrada, disfagia severa, sin sonda por decisión anticipada).
- Cuidados de prevención óptimos: cambios c/2 h, colchón alterno.
- En 48 h: úlcera sacra en mariposa/pera de estadio IV pese a medidas correctas.
- Hipotensión (PA 85/50), perfusión periférica decaída, caquexia (albúmina 2.1).
- Falla cutánea terminal al fin de vida: la piel también claudica.

¿Qué dato es clave en el examen?
- Úlcera de Kennedy: aparición fulminante en sacro con forma de mariposa/pera.
- Ocurre pese a prevención perfecta → no es negligencia.
- Marca mortalidad inminente (skin failure = órgano que falla).
- Manejo paliativo: control de dolor, exudado y olor; no desbridamiento quirúrgico extenso.
- PEG en FAST 7F: contraindicada (AGS Choosing Wisely); no prolonga vida ni cicatriza.

¿Por qué fallan las otras opciones?
- Negligencia + desbridamiento quirúrgico/colgajo: la prevención fue óptima; mutilar no ayuda.
- Fascitis necrotizante + amputación: no hay fiebre, eritema extendido ni crepitación; es falla vascular terminal.
- PEG urgente para hiperalimentar: no revierte caquexia terminal ni cicatriza úlceras de Kennedy.

Clave: FAST 7F + úlcera sacra fulminante pese a cuidados = Kennedy → paliativos, no cirugía.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa descompensación de HFpEF por AINE: el naproxeno inhibe prostaglandinas renales y desencadena retención hídrica; STOPP manda suspender el AINE, no la empagliflozina.

¿Qué está ocurriendo realmente?
- Mujer de 85 años con HFpEF (FEVI 55%, disfunción diastólica II) en NYHA III.
- Inició naproxeno hace 10 días por artrosis de cadera.
- Descompensación aguda: JVP elevada, crépitos, edema foveolar, PA 165/90.
- LRA sobre ERC: creatinina 1.8 (basal 1.0), NT-proBNP 2500.
- Corazón rígido diastólico + retención de volumen por AINE.

¿Qué dato es clave en el examen?
- STOPP v3: AINEs contraindicados en falla cardíaca (sistólica o diastólica).
- Naproxeno inhibe prostaglandinas renales → vasoconstricción aferente + retención Na/H2O.
- AINE + ARA II (losartán) = riesgo de colapso glomerular ("triple whammy" si hubiera diurético).
- Empagliflozina: piedra angular en HFpEF (EMPEROR-Preserved); no suspender.
- Digoxina no beneficia FEVI preservada; dobutamina no mejora diástole.

¿Por qué fallan las otras opciones?
- Aumentar losartán + mantener naproxeno + IBP: el AINE es la toxina causal; IBP no protege riñón.
- Suspender empagliflozina + digoxina: quita el fármaco que sí ayuda y añade uno inútil en diastólica.
- Dobutamina + mantener analgésicos: inotrópico no indicado en HFpEF descompensada por volumen.

Clave: HFpEF + naproxeno reciente + edema + LRA = stop AINE + furosemida IV + analgesia no nefrotóxica.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa bacteriuria asintomática en anciana con pañal: cultivo positivo sin síntomas no es ITU; tratar genera resistencia y C. difficile sin beneficio.

¿Qué está ocurriendo realmente?
- Mujer de 89 años con Alzheimer moderado e incontinencia crónica con pañal.
- Completamente asintomática: come bien, camina, sin fiebre ni delirium.
- Urocultivo solicitado por olor a amoníaco en pañal (no es indicación válida).
- E. coli >100,000 UFC/mL con esterasa leucocitaria (+) y 15 leucocitos/campo.
- Bacteriuria asintomática: colonización comensal en vejiga neurogénica/pañal.

¿Qué dato es clave en el examen?
- Prevalencia BA hasta 20–50% en ancianos institucionalizados o con pañal.
- Olor fétido en pañal ≠ infección urinaria activa.
- AGS Choosing Wisely / IDSA: no tratar BA; no previene urosepsis.
- Tratar BA sí aumenta resistencia antimicrobiana y colitis por C. difficile.
- ITU requiere síntomas: disuria, urgencia nueva, fiebre o delirium agudo claro.
- Piuria sola no diagnostica ITU en anciano con pañal.

¿Por qué fallan las otras opciones?
- Ciprofloxacino 7 días por UFC y leucocitos: tratar colonización sin síntomas es iatrogenia.
- Profilaxis con nitrofurantoína 6 meses: no esteriliza vía urinaria; genera resistencia crónica.
- Hemocultivos + ceftriaxona IV: no hay datos de pielonefritis ni sepsis (afebril, estable).

Clave: asintomática + cultivo (+) + pañal = bacteriuria asintomática → no antibióticos.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa BPSD con desencadenante mecánico: la agresividad al baño es lenguaje de dolor no verbalizado; acetaminofén programado antes que antipsicóticos.

¿Qué está ocurriendo realmente?
- Hombre de 86 años con Alzheimer severo (GDS 6).
- Agitación vespertina, agresividad al baño/cambio de pañal, deambulación nocturna (sundowning).
- Agresividad solo cuando flexionan rodillas o desvisten para ducha: desencadenante mecánico.
- Contracturas en rodillas, dolor evidente al movilizar caderas/rodillas.
- BPSD por dolor no tratado, no psicosis primaria.

¿Qué dato es clave en el examen?
- Demencia severa: afasia y agnosia impiden verbalizar dolor → agresión instintiva de defensa.
- AGS: 1.ª línea = buscar causa reversible + ensayo analgésico programado (scheduled analgesic trial).
- Higiene no forzada: adaptar rutinas para minimizar movimientos dolorosos.
- Antipsicóticos solo si psicosis o riesgo letal tras fallar medidas no farmacológicas.
- Black box FDA: antipsicóticos en demencia → ACV y muerte aumentados.

¿Por qué fallan las otras opciones?
- Haloperidol 1 mg antes del baño: sedación química sin tratar dolor; aumenta mortalidad.
- Memantina + citalopram: no abordan dolor mecánico agudo; citalopram puede empeorar caídas.
- Unidad psiquiátrica + sujeción + ECT: desproporcionado; la causa es somática tratable.

Clave: agresión solo en flexión articular + artrosis = dolor → acetaminofén horario + higiene adaptada.

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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa neumonía asociada a atención en salud (NAC-H) con shock séptico por Pseudomonas MDR: la exposición previa a pip-tazo obliga escalar a carbapenémico + amikacina con reanimación séptica inmediata.

¿Qué está ocurriendo realmente?
- Hombre de 68 años, día 9 de hospitalización por IAMCEST complicado con IC.
- Intubado días 2–6, extubado hace 48 h (ya no está ventilado activamente).
- Fiebre 39.2 °C, consolidación lobar derecha nueva, tos purulenta, disnea.
- Shock séptico: PA 88/52, lactato 3.8, acidosis metabólica (pH 7.28, HCO3 16).
- Cultivo esputo preliminar: Pseudomonas aeruginosa; antibióticos previos: pip-tazo 5 días.

¿Qué dato es clave en el examen?
- NAC-H: neumonía ≥48 h de hospitalización o ≤48 h post-alta; consolidación nueva post-extubación encaja.
- No es VAP activa: el paciente ya no está intubado.
- Exposición previa a anti-pseudomónicos selecciona resistencia → carbapenémico + aminoglucósido (amikacina).
- Shock séptico: antibiótico IV en <1 h + cristaloides + vasopresores según Surviving Sepsis.
- Ajustar dosis a TFG (ERC estadio 3b, creatinina 2.4).

¿Por qué fallan las otras opciones?
- Amoxicilina-clavulánico oral: NAC comunitaria no explica cronología ni gravedad; ATB oral inadecuado en shock.
- Meropenem + vancomicina sin ajuste renal: vancomicina sin indicación MRSA clara; VAP activa no aplica.
- Edema pulmonar cardiogénico: Rx y clínica son infecciosas; retrasar ATB en shock séptico aumenta mortalidad.

Clave: post-UCI + consolidación nueva + pip-tazo previo + shock = NAC-H por Pseudomonas MDR → meropenem + amikacina + reanimación.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa hiperkalemia grave con cambios ECG en paciente hospitalizado con IC: calcio IV primero para estabilizar membrana, luego insulina-dextrosa; kayexalato no salva en minutos.

¿Qué está ocurriendo realmente?
- Hombre de 72 años, día 4 por descompensación de IC (FEVI 30%).
- Oliguria 12 h, somnolencia: AKI sobre IC descompensada.
- Medicamentos: furosemida IV + enalapril + espironolactona 25 mg (triada nefrotóxica en IC).
- K+ 7.1 mEq/L con cambios ECG: T picudas simétricas, QRS 130 ms, ondas P ausentes.
- Acidosis metabólica (pH 7.18, HCO3 14), creatinina 3.8 (basal 1.2).

¿Qué dato es clave en el examen?
- ECG cambiado + K+ >6.5 = emergencia con riesgo de arritmia letal inmediata.
- Secuencia KDIGO: 1) gluconato de calcio IV (estabiliza membrana); 2) insulina + dextrosa; 3) beta-2 inhalado.
- Suspender espironolactona y enalapril (bloquean aldosterona / reducen GFR).
- Kayexalato oral: acción lenta (horas), no es medida de rescate aguda.
- Diálisis si refractaria o AKI oligúrica severa.

¿Por qué fallan las otras opciones?
- Diálisis sola sin calcio/insulina: retrasa estabilización de membrana → riesgo de paro.
- Kayexalato + mantener enalapril: kayexalato lento; ACEi empeora hiperkalemia.
- Bicarbonato en bolo + amiodarona: bicarbonato solo si acidosis severa con QRS prolongado; amiodarona no trata hiperkalemia.

Clave: IC + espironolactona + oliguria + T picuda = hiperkalemia → calcio IV primero, siempre.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa SIADH intrahospitalaria euvolémica post-neurocirugía: hiponatremia sintomática requiere restricción hídrica y, si es necesario, suero salino hipertónico 3% con corrección ≤8 mEq/L/24 h.

¿Qué está ocurriendo realmente?
- Mujer de 58 años, día 6 post-cirugía de meningioma.
- Na+ cayó de 138 al ingreso a 118 mEq/L con osmolalidad sérica 248 (hipotónica verdadera).
- Osmolalidad urinaria 520, Na urinario 65: orina inapropiadamente concentrada.
- Euvolemia al examen; TSH y cortisol normales (descarta hipotiroidismo e insuficiencia adrenal).
- Desencadenantes: morfina PCA, ondansetrón, sertralina (SSRI) + cirugía SNC.
- GCS 13: hiponatremia sintomática (somnolencia progresiva).

¿Qué dato es clave en el examen?
- SIADH: euvolemia + Uosm >100 + Na urinario >30 + hipotónica.
- Manejo: restricción hídrica + suspender fármacos desencadenantes.
- Si sintomática: SSH 3% bajo monitorización con meta corrección ≤8 mEq/L/24 h (evitar mielinolisis osmótica).
- Corrección rápida (>10-12 mEq/L/24 h) → mielinolisis pontina irreversible.

¿Por qué fallan las otras opciones?
- Furosemida en euvolemia: no es 1.ª línea en SIADH; puede deplecionar sin corregir ADH inapropiada.
- Pseudohiaponatremia por glucosa: glucosa normal (110 mg/dL); no aplica fórmula de corrección.
- Expansión con SF 0.9% 2 L: en euvolemia agrava dilución y empeora hiponatremia.

Clave: post-neurocirugía + SSRI + Na+ 118 + GCS 13 = SIADH sintomática → SSH 3% lento si necesario.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa trastorno ácido-base mixto intrahospitalario: alcalosis metabólica hipoclorémica por diuréticos + alcalosis respiratoria por sobreventilación mecánica iatrogénica.

¿Qué está ocurriendo realmente?
- Hombre de 55 años, día 3 por exacerbación de EPOC, intubado hace 6 h.
- Gasometría: pH 7.52, PaCO2 28, HCO3 32 → trastorno mixto alcalótico.
- Cl- 88, K+ 2.9: alcalosis metabólica hipoclorémica por furosemida (pérdida Cl-/K+).
- PaCO2 baja: sobreventilación mecánica post-intubación (iatrogénica).
- Anion gap 18 levemente elevado: puede ser albumina/lactato, no acidosis metabólica dominante.

¿Qué dato es clave en el examen?
- Mixto: pH ↑ + PaCO2 ↓ + HCO3 ↑ = alcalosis respiratoria + metabólica simultáneas.
- Cl bajo + K bajo sugiere alcalosis metabólica por diuréticos/depleción de volumen.
- Sobreventilación iatrogénica empeora alcalosis respiratoria aditiva.
- pH >7.48: riesgo de arritmias, vasoespasmo cerebral, hipokalemia refractaria.
- Conducta: ajustar ventilador (↓ FR/Vt), reponer KCl; no bicarbonato.

¿Por qué fallan las otras opciones?
- Aumentar FR a 22: agrava alcalosis respiratoria (más hiperventilación).
- Bicarbonato IV 100 mEq: pH ya alcalino; bicarbonato empeoraría alcalosis metabólica.
- Aumentar PEEP + sedación profunda: PaCO2 está baja, no hay acidosis respiratoria crónica descompensada.

Clave: EPOC intubado + diuréticos + pH 7.52 = revisa ventilador + repón K+/Cl- antes de más gasometrías.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa delirium postoperatorio intrahospitalario: benzodiacepinas y antipsicóticos profilácticos empeoran el cuadro; hay que corregir precipitantes (DEDHIPTIS) antes de sedar.

¿Qué está ocurriendo realmente?
- Mujer de 81 años, día 2 post-fractura de cadera operada.
- Agitación nocturna, desorientación fluctuante, alucinaciones visuales, inversión sueño-vigilia.
- CAM positivo: delirium agudo, no demencia pura.
- Fármacos delirógenos: lorazepam 1 mg noche, quetiapina 25 mg (por insomnio), tramadol PRN.
- Hipernatremia (Na+ 151) + deshidratación leve: precipitante metabólico frecuente post-op.
- Demencia leve previa + déficit sensorial (cataratas): factor de riesgo base.

¿Qué dato es clave en el examen?
- Delirium intrahospitalario = emergencia geriátrica; buscar precipitantes (DEDHIPTIS: Drugs, Electrolytes, Dehydration, Hypoxia, Infection, Pain, Trauma, Immobility, Sleep).
- Benzodiacepinas empeoran y prolongan delirium en ancianos (Beers/SHM).
- Medidas no farmacológicas: reorientación, movilización precoz, corregir déficit sensorial (gafas/audífono), analgesia adecuada.
- Antipsicótico dosis mínima solo si riesgo inminente de daño.
- TAC/EEG/aciclovir no son 1.ª línea sin datos de SNC infeccioso.

¿Por qué fallan las otras opciones?
- Aumentar quetiapina + mantener lorazepam + contención: lorazepam empeora delirium; contención es último recurso.
- TAC urgente + aciclovir empírico: no hay focalidad neurológica ni fiebre alta; delirium es multifactorial.
- Haloperidol depot mensual: inaceptable en delirium agudo reversible.

Clave: fractura cadera + lorazepam noche + CAM (+) = quita BZD, hidrata, corrige Na+, moviliza.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa TEP submasivo en paciente oncológico hospitalizado: plaquetopenia moderada (48,000) no contraindica anticoagulación plena; el filtro de vena cava no trata TEP establecido.

¿Qué está ocurriendo realmente?
- Mujer de 64 años, día 10 por linfoma difuso de células B en quimioterapia (R-CHOP).
- Disnea súbita, dolor pleurítico, taquicardia; PA 90/55, SpO2 88%.
- TAC angio: defecto de repleción en arteria lobar derecha + sobrecarga de VD.
- Troponina I elevada: TEP submasivo (riesgo intermedio-alto).
- Plaquetas 48,000 (basales 220,000): trombocitopenia por quimioterapia, no contraindicación absoluta.

¿Qué dato es clave en el examen?
- Cáncer + quimioterapia + inmovilización = estado pro-trombótico; profilaxis con enoxaparina 40 mg pudo fallar.
- TEP + sobrecarga VD + troponina = submasivo; anticoagular de inmediato.
- Plaquetas 48,000: balance riesgo trombosis/sangrado según guías CHEST; HNF IV permite control y reversión.
- Trombólisis si choque hemodinámico o obstrucción masiva.
- Filtro de VC no disuelve TEP; no es tratamiento de TEP agudo sin contraindicación absoluta a AC.

¿Por qué fallan las otras opciones?
- Suspender AC + filtro + observar: filtro no trata TEP; observar es mortal en submasivo.
- Azitromicina + ceftriaxona: TAC confirma TEP, no neumonía.
- Aspirina + clopidogrel + diferir AC: antiagregación no trata TEP; retrasar AC aumenta mortalidad.

Clave: oncológico hospitalizado + disnea súbita + TAC TEP + plaquetas 48k = anticoagular (HNF IV), no filtrar y observar.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa PBE grave en cirrosis Child-Pugh C: PMN ≥250 confirma PBE; ceftriaxona sola no basta — albúmina en protocolo completo previene síndrome hepatorrenal.

¿Qué está ocurriendo realmente?
- Hombre de 59 años, cirrosis por alcohol Child-Pugh C (13), ascitis refractaria.
- Fiebre 38.8 °C, confusión nueva, hipotensión (PA 92/58).
- Paracentesis: PMN 680 cel/mm³ (≥250 = PBE), proteínas 0.8 g/dL.
- AKI: creatinina 2.6 (basal 1.4), Na+ 126, bilirrubina 12, INR 2.1.
- PBE grave: Child C + fiebre + encefalopatía + AKI + hipotensión.

¿Qué dato es clave en el examen?
- PBE: PMN ≥250/mm³ en líquido ascítico.
- PBE grave requiere ceftriaxona (o cefalosporina 3.ª gen según guía local) + albúmina 1.5 g/kg día 1 y 1 g/kg día 3.
- Albúmina reduce síndrome hepatorrenal y mortalidad en PBE grave/AKI.
- Paracentesis de control si no mejora en 48 h (descartar peritonitis secundaria).
- Cirrótico confuso + fiebre = paracentesis YA, no esperar.

¿Por qué fallan las otras opciones?
- Ceftriaxona sola + albúmina solo si Cr >4: subdosis de albúmina; PBE grave requiere protocolo completo desde Cr 1.4.
- Laparotomía inmediata: PMN 680 sin datos de perforación típica; ATB primero, cirugía si no responde.
- Terlipresina deferiendo ATB: hepatorenal es consecuencia; tratar infección primero.

Clave: cirrótico confuso + fiebre + PMN >250 + Child C = ceftriaxona + albúmina, no solo ATB.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa CAD intrahospitalaria en DM1: volumen primero, insulina IV cuando K+ ≥3.3; K+ inicial alto en CAD cae con insulina — no contraindica tratamiento.

¿Qué está ocurriendo realmente?
- Mujer de 45 años con SLE en brote, metilprednisolona 60 mg IV/día.
- DM1 con bomba de insulina suspendida ayer por extravasación del catéter.
- CAD severa: glicemia 485, pH 7.05, HCO3 5, cetonas 5.2 mmol/L, Kussmaul.
- K+ 5.8 (desplazamiento extracellular por acidosis; caerá con insulina).
- Precipitante clásico intrahospitalario: insulopenia absoluta + glucocorticoides.

¿Qué dato es clave en el examen?
- ADA protocolo: 1) SF 0.9% 1 L primera hora (volumen primero); 2) insulina 0.1 U/kg/h IV si K+ ≥3.3.
- Si K+ <3.3: posponer insulina y reponer potasio primero (riesgo arritmia).
- K+ 5.8 permite insulina con monitorización horaria de K+ (caerá con shift intracelular).
- Bicarbonato solo si pH <6.9 (no en pH 7.05; riesgo edema cerebral).
- Buscar precipitante: catéter, infección, adherencia, esteroides.

¿Por qué fallan las otras opciones?
- Insulina + bicarbonato en bolo + SF después: bicarbonato rutinario no indicado pH 7.05; volumen debe ir primero.
- Insulina SC basal + alta ambulatoria: CAD severa con vómitos requiere insulina IV y monitorización UCI.
- Suspender insulina por K+ 5.8: error clásico; K+ alto inicial en CAD cae con tratamiento.

Clave: DM1 hospitalizado + esteroide + bomba detenida = CAD en 24 h → volumen primero, insulina IV, K+ siempre en mente.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa CLABSI con choque séptico por BLEE: retirar catéter de inmediato (no intercambio sobre guía) y meropenem empírico ajustado a TFG; vancomicina innecesaria si solo Gram negativo.

¿Qué está ocurriendo realmente?
- Hombre de 70 años, UCI día 14, catéter venoso central yugular día 10.
- Fiebre 39 °C, choque séptico: PA 82/48 tras 30 mL/kg, lactato 4.5.
- Hemocultivo del catéter positivo 2 h antes que periférico: bacilos GN BLEE.
- Biofilm intraluminal → bacteriemia continua → sepsis persistente si se mantiene catéter.
- ERC estadio 4: ajustar meropenem a TFG.

¿Qué dato es clave en el examen?
- CLABSI confirmada: crecimiento diferencial más rápido en catéter vs periférico.
- Choque séptico + inestabilidad = retirar catéter urgente (IDSA); intercambio sobre guía contraindicado.
- BLEE → carbapenémico empírico (meropenem); ceftriaxona/pip-tazo empírico fallido.
- Vancomicina no necesaria si solo Gram negativo en preliminar.
- Duración IV en UCI 7–14 días según respuesta; no alta ambulatoria prematura en shock.

¿Por qué fallan las otras opciones?
- Mantener catéter + vancomicina + esperar antibiograma: perpetúa bacteriemia; vancomicina innecesaria.
- Intercambio sobre guía + ceftriaxona: contraindicado en CLABSI complicada; ceftriaxona ineficaz vs BLEE.
- Retirar catéter + pip-tazo ambulatorio 7 días: pip-tazo ineficaz vs BLEE; duración ambulatoria inadecuada en shock.

Clave: UCI + fiebre + catéter + GN BLEE + choque = retira catéter + meropenem; no esperar antibiograma.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa AKI intrínseca multifactorial hospitalaria: FENA >1% + cilindros granulosos marrón = NTA; hay que retirar nefrotóxicos (AINE, metformina, ACEi) antes de pedir nefrología.

¿Qué está ocurriendo realmente?
- Hombre de 63 años, día 8 por bacteriemia por E. coli sensible (ceftriaxona).
- Oliguria 18 h, creatinina 4.2 (basal 1.0): AKI aguda severa.
- Multifactorial: sepsis reciente + contraste yodado día 5 + ibuprofeno PRN (3 dosis/48 h) + enalapril + metformina.
- Sedimento: cilindros granulosos marrón, eosinófilos ausentes.
- FENA 1.8% (>1% = intrínseca); ecografía sin obstrucción.

¿Qué dato es clave en el examen?
- FENA >1% + cilindros marrón = necrosis tubular aguda (NTA), no prerrenal.
- AKI hospitalaria suele ser multifactorial: sepsis + AINE + contraste + bloqueo RAAS.
- Suspender metformina en AKI (riesgo acidosis láctica si empeora; KDIGO/ADA).
- Suspender AINE y enalapril; hidratación cautelosa sin sobrecarga.
- Diálisis si criterios KDIGO: hiperkalemia refractaria, acidosis, sobrecarga volémica, uremia sintomática.
- NIA menos probable: sin eosinófilos, sin fiebre/rash típico; esteroides no empíricos.

¿Por qué fallan las otras opciones?
- NIA por ceftriaxona + esteroides + biopsia: datos insuficientes para NIA; esteroides no empíricos.
- AKI prerrenal + SF 3 L + reiniciar ibuprofeno: FENA 1.8% descarta prerrenal; AINE empeora.
- Obstrucción postrenal + cateterismo prioritario: ecografía descarta obstrucción.

Clave: sepsis + contraste + AINE PRN + enalapril + metformina = AKI multifactorial → quita nefrotóxicos.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa choque séptico hospitalario según Surviving Sepsis Campaign 2026: activación inmediata con NEWS2 y ATB IV en la primera hora, no esperar qSOFA ni biomarcadores.

¿Qué está ocurriendo realmente?
- Hombre de 75 años, día 5 por pancreatitis aguda biliar previamente estable.
- Letargo, hipotensión (PA 85/50), taquicardia, fiebre 38.5 °C, SpO2 92%.
- Llenado capilar 4 s, piel moteada, lactato 4.2 mmol/L, leucocitos 18,000.
- Choque séptico de probable origen biliar/pancreático con disfunción orgánica.

¿Qué dato es clave en el examen?
- SSC 2026: NEWS2 preferido sobre qSOFA para cribado hospitalario (mayor sensibilidad).
- Code Sepsis multidisciplinar + reanimación hídrica con cristaloides balanceados.
- ATB amplio espectro IV en <1 h; desescalamiento condicional permitido aunque cultivo negativo.
- Coloides almidón contraindicados en sepsis; norepinefrina es 1.ª línea vasopresora, no vasopresina inicial.

¿Por qué fallan las otras opciones?
- qSOFA + coloides: qSOFA baja sensibilidad; coloides almidón dañan riñón.
- Retrasar ATB hasta procalcitonina/PCR: cada hora de retraso ↑ mortalidad ~8%.
- Vasopresina periférica sin cristaloides: norepinefrina es 1.ª línea; omitir volumen en shock es error.

Clave: choque séptico hospitalario = Code Sepsis + NEWS2 + cristaloides + ATB IV inmediato.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa trastorno ácido-base triple en EPOC hospitalizado: nunca te detengas en pCO2 alto — calcula anion gap y delta gap para detectar alcalosis metabólica oculta por furosemida.

¿Qué está ocurriendo realmente?
- Mujer de 68 años, día 3 por exacerbación EPOC GOLD D con cor pulmonale.
- Somnolencia, mioclonías, FR 10 rpm, SpO2 86% con O2 2 L/min (encefalopatía hipercápnica).
- GSA: pH 7.22, pCO2 90, pO2 55; K+ 2.5, Cl- 82, HCO3 36.
- Furosemida crónica + hipokalemia + hipocloremia: trastorno triple superpuesto.

¿Qué dato es clave en el examen?
- pH 7.22 + pCO2 90 = acidosis respiratoria (aguda sobre crónica en EPOC).
- Anion gap = 142 - (82 + 36) = 24 → acidosis metabólica de gap elevado (láctica/urémica).
- HCO3 36 es excesivo vs esperado (~12 con pCO2 90) → alcalosis metabólica superpuesta (furosemida, contracción).
- Delta gap revela alcalosis oculta cuando HCO3 parece "compensado".

¿Por qué fallan las otras opciones?
- Acidosis respiratoria pura: error novato — ignorar electrolitos y anion gap.
- Acidosis metabólica hiperclorémica: Cl está bajo (82), no alto; el gap está elevado.
- Alcalosis metabólica primaria: el pH está ácido (7.22), no alcalino.

Clave: EPOC + furosemida + pH 7.22 + pCO2 90 = calcula SIEMPRE anion gap → trastorno triple.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa neumonía asociada a atención en salud (HAP) no ventilatoria: IDSA manda ATB empírico por criterios clínicos-radiológicos, no esperar sTREM-1 en BAL ni procalcitonina para iniciar.

¿Qué está ocurriendo realmente?
- Hombre de 72 años, día 6 post-colecistectomía por tumor de colon.
- Fiebre 39 °C, tos purulenta, desaturación.
- Rx: infiltrado alveolar basal derecho nuevo (consolidación hospitalaria).
- HAP no asociada a ventilador mecánico.

¿Qué dato es clave en el examen?
- IDSA HAP/VAP: usar criterios clínicos + radiológicos para decidir inicio de ATB, no sTREM-1 en BAL.
- Mortalidad ↑ si se retrasa ATB; empírico antipseudomónico (cefepime/pip-tazo) y desescalar a 72 h.
- Cultivos no invasivos preferidos: esputo espontáneo/inducido sobre broncoscopia agresiva.
- Procalcitonina útil para suspender ATB, no para negar inicio en sepsis respiratoria clara.

¿Por qué fallan las otras opciones?
- BAL con sTREM-1 antes de ATB: sTREM-1 no recomendado vs juicio clínico; retrasa tratamiento.
- ATB solo si procalcitonina >0.5: no negar inicio en paciente febril con infiltrado nuevo.
- Profilaxis con fluoroquinolonas en todo post-op: no es profilaxis estándar; genera resistencia.

Clave: HAP = clínica + Rx > biomarcadores → esputo + ATB empírico antipseudomónico → desescalar 72 h.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa la transición AKI → AKD según KDIGO 2026: creatinina estancada en día 18 no es prerrenal ni ERC — es enfermedad renal aguda subaguda que requiere protección nefronas restantes.

¿Qué está ocurriendo realmente?
- Hombre de 58 años, día 18 post-pielonefritis enfisematosa y choque séptico.
- AKI KDIGO 3 al ingreso (Cr pico 4.5, oliguria); infección resuelta.
- Diuresis 1.5 L/día pero Cr estancada 2.1 mg/dL (TFGe 35) durante 1 semana.
- Cr basal 0.8: riñón no ha normalizado pese a diuresis conservada.

¿Qué dato es clave en el examen?
- KDIGO 2026 formaliza AKD: alteración renal 7–90 días post-AKI.
- AKI <7 días; AKD 7–90 días; ERC >90 días.
- AKD = ventana crítica para prevenir cronicidad (fibrosis/inflamación temprana).
- No es prerrenal: fluidos empeorarían congestión; es daño estructural subagudo post-isquémico.
- Seguimiento nefrológico + deprescripción nefrotóxicos al egreso.

¿Por qué fallan las otras opciones?
- ERC estadio 3b + fístula AV: requiere >90 días; es demasiado pronto.
- Falla prerrenal + albúmina/critaloides hasta Cr 0.8: diuresis conservada descarta prerrenal; sobrecarga empeora.
- AKI persistente hasta 6 meses: AKD formalmente es 7–90 días.

Clave: día 18 post-AKI severo + Cr estancada + diuresis OK = AKD → protege nefronas, no sobrecargues volumen.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa TEP subsegmentario incidental según CHEST: no todo defecto en angioTAC obliga anticoagulación — estable + subsegmentario + Doppler negativo puede observarse.

¿Qué está ocurriendo realmente?
- Mujer de 45 años, día 5 post-colecistectomía complicada con íleo paralítico.
- Dolor pleurítico leve al deambular; FC 80, SpO2 96%, hemodinámicamente estable.
- AngioTAC: defecto subsegmentario aislado en LID; sin sobrecarga de VD.
- Doppler EEII negativo bilateral: sin TVP proximal.

¿Qué dato es clave en el examen?
- CHEST: margen para observación en TEP subsegmentario aislado, paciente estable, bajo riesgo clínico.
- Tomógrafos de alta resolución ↑ diagnósticos de microembolia incidental.
- Anticoagulación post-op reciente: riesgo sangrado puede superar beneficio en TEP pequeño.
- Filtro VCI solo con TVP proximal + contraindicación absoluta a AC, no como profilaxis.

¿Por qué fallan las otras opciones?
- HBPM puente a warfarina: anticoagulación automática no indicada en subsegmentario estable sin TVP.
- Filtro de vena cava: contraindicación relativa post-cirugía no justifica filtro sin TVP proximal.
- Trombólisis sistémica: contraindicada en TEP subsegmentario hemodinámicamente estable.

Clave: TEP subsegmentario + estable + Doppler (-) + post-op reciente = observación estrecha, no AC a ciegas.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa empeoramiento renal permisivo (WRF) durante descongestión de IC: si el paciente pierde peso y mejora clínicamente pero la creatinina sube leve, hay que continuar diuréticos — no tratar solo el número.

¿Qué está ocurriendo realmente?
- Hombre de 78 años, IC descompensada perfil B (FEVI 35%), día 3 de hospitalización.
- Peso 80 kg (-5 kg), duerme plano, disnea casi resuelta; aún edema maleolar leve.
- Creatinina 1.9 (basal 1.4), BUN 45; buena perfusión periférica.
- Descongestión efectiva en curso con empeoramiento renal transitorio (cardiorenal).

¿Qué dato es clave en el examen?
- WRF durante descongestión exitosa (↓ peso, ↓ disnea, aún edema) es frecuente y se asocia a mejor pronóstico si se completa descongestión.
- ↓ precarga → ↓ filtración transitoria durante diuresis agresiva.
- Aún hay edema = aún hay congestión → continuar furosemida.
- ↑ Cr hasta ~30–50% tolerable si perfundido y clínicamente descongestionando.
- Suspender diuréticos por Cr +30% con congestión residual empeora outcomes.

¿Por qué fallan las otras opciones?
- Suspender diuréticos por "AKI prerrenal": no hay depleción; hay descongestión en curso con WRF permisivo.
- Hemodiálisis ultrafiltrante: no indicada con buena diuresis, Cr 1.9 y perfusión conservada.
- Nefritis intersticial por furosemida: no hay fiebre, rash ni eosinofilia; es fisiología cardiorenal.

Clave: pierde peso + respira mejor + Cr sube leve + aún edema = continúa diuréticos, no pares por el número.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa C. difficile fulminante con megacolon: cuando la diarrea cesa y el abdomen se distiende, es íleo/megacolon — vancomicina enteral + metronidazol IV, no metronidazol solo.

¿Qué está ocurriendo realmente?
- Mujer de 65 años, día 14 meropenem por neumonía necrotizante.
- Diarrea acuosa masiva; día 16: diarrea cesa, abdomen distendido en tabla, doloroso.
- Shock séptico: PA 80/45, FC 130, Temp 39.5 °C, lactato 4.5, leucocitos 35,000.
- Toxina C. difficile (+); Rx: megacolon (colon transverso 10 cm).

¿Qué dato es clave en el examen?
- Diarrea que para + abdomen distendido = íleo/megacolon tóxico por C. diff (no "mejoría").
- Fulminante: vancomicina enteral alta dosis (PO/NG/enema retención) + metronidazol IV (única indicación dual).
- Íleo impide tránsito de vanco PO → metro IV aporta excreción biliar/intestinal.
- Metronidazolo solo es insuficiente en enfermedad grave.
- Loperamida contraindicada (retención de toxinas → perforación).

¿Por qué fallan las otras opciones?
- Metronidazol IV en monoterapia: insuficiente en C. diff fulminante/megacolon.
- Loperamida + fidaxomicina: antimotilidad proscrita en C. diff activo.
- Trasplante fecal inmediato: indicado en recurrencia, no en choque agudo con megacolon.

Clave: post-ATB + diarrea que para + barriga en tabla = megacolon → vanco enteral + metro IV + cirugía en evaluación.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa síndrome hepatorenal-AKI precipitado por paracentesis sin albúmina: anuria con FENa bajo y Na urinario <10 = riñón hemodinámicamente desconectado, no NTA — terlipresina + albúmina.

¿Qué está ocurriendo realmente?
- Hombre de 52 años, cirrosis alcohólica Child C.
- Paracentesis evacuatoria 9 L sin albúmina post-procedimiento (error iatrogénico).
- Día 3: anuria; PA 110/70 (presión preservada pero perfusión renal colapsada).
- Cr 3.2 (basal 0.8), Na urinario <10, FENa 0.1%, sedimento limpio, eco renal normal.

¿Qué dato es clave en el examen?
- Paracentesis >5 L sin albúmina → disfunción circulatoria post-paracentesis → HRS-AKI.
- HRS-AKI: vasodilatación espláncnica + hipovolemia arterial efectiva; riñón estructuralmente intacto.
- FENa <1%, Na urinario bajo, sedimento limpio = perfusión, no necrosis tubular.
- Terlipresina IV continua + albúmina humana revierte perfusión renal (EASL/AASLD).
- Albúmina 20 g/L si >5 L evacuados previene este cuadro.

¿Por qué fallan las otras opciones?
- Furosemida en infusión: empeora isquemia renal en HRS.
- Dopamina a dosis renal: ineficaz; no revierte vasodilatación espláncnica.
- Diálisis peritoneal urgente: no trata la causa hemodinámica; terlipresina primero.

Clave: cirrosis + anuria + Na urinario bajo post-paracentesis masiva = HRS → terlipresina + albúmina.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa hiponatremia severa sintomática por SIADH paraneoplásico: convulsión con Na+ 108 exige bolos de SSH 3% inmediatos (+4–6 mEq/L), no restricción hídrica ni SF 0.9%.

¿Qué está ocurriendo realmente?
- Mujer de 65 años con carcinoma microcítico de pulmón (SIADH paraneoplásico).
- Convulsión tónico-clónica en triage; euvolémica al examen.
- Na+ 108, osmolalidad plasmática 230, osmolalidad urinaria 600, Na urinario 60.
- TSH y cortisol normales: SIADH euvolémica con hiponatremia severa sintomática.

¿Qué dato es clave en el examen?
- Na+ 108 + convulsión = emergencia neurológica por edema cerebral.
- Bolos IV 100–150 mL SSH 3% en 10–20 min (repetir si persiste): meta +4 a 6 mEq/L en primeras horas.
- Luego corrección ≤8 mEq/L/24 h para evitar mielinolisis osmótica.
- Restricción hídrica/tolvaptán demasiado lentos en crisis aguda.
- SF 0.9% en SIADH puede empeorar (desalinización → Na más bajo).

¿Por qué fallan las otras opciones?
- Restricción + tolvaptán: manejo crónico; no detiene edema cerebral agudo.
- SF 0.9% 200 mL/h: en SIADH puede bajar Na aún más por desalinización.
- Corrección rápida a Na 135 en 12 h: riesgo de mielinolisis osmótica (locked-in).

Clave: hiponatremia + convulsión = SSH 3% a chorro (+5 puntos rápido), luego despacio.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa hiperglucemia esteroidea intrahospitalaria: prednisona matutina produce pico hiperglucémico vespertino — NPH matutina sincroniza con el pico del esteroide, no glargina nocturna.

¿Qué está ocurriendo realmente?
- Hombre de 60 años, crisis asmática grave, transferido de UCI a piso.
- DM2 en metformina (suspendida al ingreso); prednisona 50 mg AM.
- Glucemias ayunas 110–130 mg/dL (normales); post-almuerzo y 16:00 h 350–400 mg/dL consistentemente.
- Solo escala móvil insulina regular (inadecuada: persigue, no previene).

¿Qué dato es clave en el examen?
- Glucocorticoides ↑ gluconeogénesis; pico hiperglucémico 8–12 h post-dosis matutina (tarde).
- ADA/SHM: NPH matutina junto con prednisona AM empareja pico insulínico con pico esteroide.
- Glargina nocturna = perfil plano → hipoglucemia nocturna con ayunas normales.
- Metformina contraindicada/relativa en hospitalizado inestable.
- Solo sliding scale inadecuado: reactivo, no preventivo.

¿Por qué fallan las otras opciones?
- Reiniciar metformina máxima: contraindicada/relativa en hospitalizado; no cubre pico vespertino esteroide.
- Glargina nocturna: perfil plano 24 h no coincide con pico vespertino; riesgo hipoglucemia 3 AM.
- Solo sliding scale: persigue hiperglucemia, no previene picos vespertinos predecibles.

Clave: prednisona AM + azúcar alta tarde + ayunas OK = NPH a primera hora con el esteroide.

MEDICINA HOSPITALARIA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa fin de reanimación guiada por perfusión clínica (ANDROMEDA-SHOCK): lactato persistente con TRC normal, ScvO2 >70% y PAM adecuada no justifica más fluidos — puede ser adrenérgico/hepático.

¿Qué está ocurriendo realmente?
- Mujer de 68 años, día 1 post-op peritonitis fecal (choque séptico abdominal), cirrosis Child A.
- PAM 78, norepinefrina 0.1 mcg/kg/min, TRC 2 s, mottling 0.
- POCUS: VTI normal, VCI 22 mm, variabilidad 5% (euvolemia/no respondedora a volumen).
- Lactato 6.5 → 5.8 en 6 h (<20% aclaramiento); ScvO2 76%, delta CO2 4 mmHg.

¿Qué dato es clave en el examen?
- TRC <3 s + ScvO2 >70% + delta CO2 <6 + PAM adecuada = perfusión restaurada (ANDROMEDA-SHOCK).
- Hiperlactatemia puede ser aeróbica/adrenérgica + ↓ aclaramiento hepático (cirrosis).
- VCI dilatada sin variabilidad = no respondedora a volumen; más fluidos → edema pulmonar/congestión.
- Lactato no es único marcador de hipoxia en sepsis post-reanimación.

¿Por qué fallan las otras opciones?
- Más fluidos + vasopresina: perfusión ya normalizada; VCI no colapsable descarta beneficio de volumen.
- Dobutamina por ScvO2 76%: ScvO2 >70% no indica shunt masivo; IC ya adecuado.
- Diuréticos para "excretar lactato": no hay sobrecarga VD; el lactato no se excreta con diuréticos.

Clave: PAM OK + TRC <3 + ScvO2 >70% + delta CO2 <6 = REANIMADA → detén líquidos, desteta vasopresor.

MEDICINA CRÍTICA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa auto-PEEP severo post-intubación en EPOC: flujo expiratorio que no llega a cero + Pplat normal = atrapamiento aéreo, no neumotórax — desconectar VM y reprogramar espiración.

¿Qué está ocurriendo realmente?
- Hombre de 65 años, EPOC GOLD D + neumonía, intubado hace 15 min.
- Post-conexión VM: PA 60/30, FC 140, SpO2 88%.
- VM: Vt 500 mL, RR 24, flujo 40 L/min → FR alta + flujo bajo = atrapamiento.
- Curva flujo-tiempo expiratorio no llega a cero antes de la siguiente inspiración.
- POCUS: VD severamente dilatado comprimiendo VI; VCI ingurgitada fija.

¿Qué dato es clave en el examen?
- Auto-PEEP: flujo no retorna a cero en EPOC/asma.
- Pplat normal (20) descarta neumotórax/SDRA; Ppico-Pplat elevado = resistencia + atrapamiento.
- Auto-PEEP ↑ presión intratorácica → ↓ retorno venoso → VD dilatado → choque obstructivo.
- Rescate: desconexión VM transitoria, apnea permisiva, ↑ tiempo espiratorio (I:E 1:4-1:5).

¿Por qué fallan las otras opciones?
- Neumotórax a tensión: Pplat subiría también; aquí Pplat 20 es normal.
- IAM de VD + cristaloides: empeoraría congestión; el cuadro es ventilatorio, no cardíaco primario.
- Broncoespasmo + aminofilina: el patrón clave es flujo no a cero, no sibilancias aisladas.

Clave: flujo que no llega a cero + hipotensión post-VM en EPOC = desconecta el tubo y reprograma espiración.

MEDICINA CRÍTICA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa SDRA severo con driving pressure y pronación: ΔP = Pplat - PEEP; si >15 cmH2O con PaFi <150, pronación temprana ≥16 h/día es mandatoria (PROSEVA/ESICM).

¿Qué está ocurriendo realmente?
- Mujer de 40 años, SDRA severo por neumonía viral.
- VM: Vt 350 mL (5.5 mL/kg), PEEP 14, FR 28, FiO2 80%.
- Pplat 32, PEEP 14 → driving pressure = 18 cmH2O (>15 = alto riesgo VILI).
- GSA: PaO2 60, PaFi 75 (SDRA severo pese a PEEP optimizada).

¿Qué dato es clave en el examen?
- Driving pressure (ΔP) = Pplat - PEEP; objetivo <15 cmH2O (Amato).
- ΔP >15 predice mortalidad independiente de Vt y PEEP.
- PaFi <150 post-optimización → pronación temprana ≥16 h/día (ESICM fuerte, PROSEVA).
- No reclutamiento rutinario 40×40 s (ART trial negativo ↑ mortalidad).
- ECMO es rescate tras prono/BNM (EOLIA), no primera línea.

¿Por qué fallan las otras opciones?
- Reducir PEEP a 5: causa atelectrauma; empeora reclutamiento.
- Reclutamiento sostenido 40×40: rutina contraindicada por ART trial.
- VV-ECMO inmediata: omitir medidas convencionales (prono) es error.

Clave: ΔP = Pplat - PEEP; si >15 en SDRA severo → prono ≥16 h, no bajes PEEP ni reclutamiento 40×40.

MEDICINA CRÍTICA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa trastorno ácido-base triple en UCI: corregir anion gap por hipoalbuminemia, calcular delta ratio y detectar acidosis hiperclorémica iatrogénica por SF 0.9% en sepsis.

¿Qué está ocurriendo realmente?
- Hombre de 50 años, sepsis abdominal + ileostomía 3 L/día.
- Reanimado con 4 L SF 0.9% en 12 h (carga de cloruro masiva).
- GSA: pH 7.20, pCO2 25, HCO3 9; Na 135, Cl 114, lactato 5.5, albúmina 2.0, Cr 1.8.
- Trastorno triple: AG elevado + hiperclorémico + componente respiratorio.

¿Qué dato es clave en el examen?
- AG aparente 12; AG ajustado albúmina +5 = 17 (lactato/urémia ocultos).
- Corregir AG: +2.5 mEq/L por cada 1 g/dL ↓ de albúmina.
- HCO3 9 con Cl 114 (diarrea + SF hiperclorémico) = acidosis hiperclorémica superpuesta.
- Delta ratio 5/15 ≈ 0.33 (<0.4 = AG normal adicional concomitante).
- SSC 2026: cristaloides balanceados (RL/Plasmalyte) en sepsis.

¿Por qué fallan las otras opciones?
- AG elevado puro compensado respiratorio: ignora hipercloremia y AG ajustado.
- Hiperclorémica exclusiva: AG ajustado está elevado (lactato/urémia).
- Alcalosis metabólica masiva oculta: delta ratio <0.4 indica acidosis hiperclorémica adicional, no alcalosis.

Clave: sepsis + SF 0.9% + albúmina baja = corrige AG + delta ratio → trastorno triple.

MEDICINA CRÍTICA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa timing de TRR en AKI UCI según STARRT-AKI/AKIKI: diálisis temprana profiláctica no mejora mortalidad — diferir hasta indicaciones absolutas (AEIOU).

¿Qué está ocurriendo realmente?
- Hombre de 75 años, día 3 post-choque séptico urológico.
- Extubado, sin vasopresores 12 h; balance +7 L, JVP elevada, crépitos leves.
- Oliguria 150 mL/24 h; Cr 4.5 (basal 1.0), BUN 110, K 5.3, pH 7.30, HCO3 16.
- AKI KDIGO 3 pero hemodinámicamente estable sin emergencia dialítica inmediata.

¿Qué dato es clave en el examen?
- STARRT-AKI y AKIKI: inicio temprano de TRR no mejora mortalidad 90 días; puede ↑ dependencia dialítica.
- K 5.3, pH 7.30, estable, sin EAP refractario → manejo médico + furosemida primero.
- TRR cuando falla manejo conservador: K+ >6.5, pH <7.15, EAP refractario, uremia sintomática.
- Urea >100 sin síntomas no es indicación absoluta sola.
- CRRT "para citoquinas" no tiene evidencia de beneficio profiláctico.

¿Por qué fallan las otras opciones?
- HDI preventiva hoy por urea >100: sin beneficio mortalidad (STARRT-AKI negativo).
- CVVHDF inmediata: inicio temprano no ↓ dependencia dialítica ni mortalidad.
- Diálisis peritoneal urgente: no es modalidad de elección en UCI post-sepsis con congestión.

Clave: AKI KDIGO 3 estable sin AEIOU = estrategia conservadora + diuréticos; no dialices profilácticamente.

MEDICINA CRÍTICA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa choque cardiogénico perfil C (Stevenson): IC bajo con congestión (PAOP 26) e hipotensión — norepinefrina para PAM ≥65 + dobutamina para ↑ IC; inotrópico solo colapsa la presión.

¿Qué está ocurriendo realmente?
- Hombre de 60 años, IAMCEST anterior extenso post-ICP (isquemia 6 h).
- Anuria, lactato ↑, alteración sensorio; FEVI 20%, IM severa funcional.
- Swan-Ganz: RAP 18, PAP 55/30, PAOP 26, IC 1.5, RVS 2200, SvO2 45%.
- PA 75/55, FC 110: choque cardiogénico perfil C (frío y húmedo).

¿Qué dato es clave en el examen?
- Choque cardiogénico hipotensivo: norepinefrina defiende perfusión coronaria + dobutamina ↑ contractilidad.
- Inotrópico solo (milrinona/dobutamina sin vasopresor) empeora hipotensión.
- PAOP 26/RAP 18 = congestión; cristaloides → edema pulmonar.
- PPC = PAM - PAOP; mantener perfusión coronaria.
- Candidato a BCIA/Impella/ECMO-VA si refractario (AHA/ESC, SCAI staging).

¿Por qué fallan las otras opciones?
- Norepinefrina sola a dosis altas: no ↑ IC; SvO2 45% requiere inotrópico.
- Milrinona + diuréticos tolerando hipotensión: vasodilatador/inotrópico empeora PAM.
- Cristaloides + nitroprusiato: PAOP ya 26; volumen empeora congestión pulmonar.

Clave: choque cardiogénico hipotenso = norepi + dobu, no inotrópico desnudo; no líquidos con PAOP 26.

MEDICINA CRÍTICA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa hipocalcemia por citrato en transfusión masiva (PTM): calcio ionizado 0.65 con QTc 550 ms exige calcio IV inmediato — es el cuarto jinete de la tríada letal.

¿Qué está ocurriendo realmente?
- Hombre de 25 años, trauma abdominal, laparotomía control de daños, sangrado activo.
- PTM: 6 CH, 6 PFC, 1 plaquetas; PA 65/40, FC 145, Temp 34.5 °C.
- ECG: QRS ancho, QTc 550 ms, extrasístoles ventriculares.
- pH 7.15, lactato 8, fibrinógeno 100, calcio ionizado 0.65 mmol/L (<1 = crítico).

¿Qué dato es clave en el examen?
- Transfusión masiva → acumulación citrato (PFC) → hipocalcemia ionizada severa.
- Ca++ es factor IV coagulación y contráctilidad miocárdica; QTc largo → riesgo FV.
- Repetir Ca++ cada 4-6 U hemoderivados (ATLS).
- Hígado isquémico en shock no metaboliza citrato → acumulación rápida.
- Bicarbonato empeora Ca ionizado; epinefrina ineficaz con Ca bajo.

¿Por qué fallan las otras opciones?
- Bicarbonato para acidemia: empeora Ca ionizado y no corrige coagulopatía.
- Epinefrina en bolo: ineficaz con Ca ionizado 0.65; riesgo arritmia sin calcio.
- Ácido tranexámico como prioridad: TXA no resuelve paro inminente por hipocalcemia.

Clave: PTM + QT largo + hipotensión = calcio IV ya, no más vasopresores ni bicarbonato primero.

MEDICINA CRÍTICA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa edema pulmonar inducido por destete (WIPO): falla SBT con HTA rebote, líneas B y VI pletórico en cardiópata rígido — reconectar VM, diuréticos y próximo intento con VNI profiláctica.

¿Qué está ocurriendo realmente?
- Mujer de 72 años, día 8 VM post-sepsis respiratoria resuelta; HVI, FEVI preservada.
- SBT tubo en T 15 min: agitación, diaforesis, musculatura accesoria.
- PA 180/100 (previa 120/70), FC 135, FR 38, SpO2 84%.
- POCUS: líneas B difusas nuevas, VI hiperdinámico pletórico; GSA: pO2 55.

¿Qué dato es clave en el examen?
- Retiro PEEP → ↑ retorno venoso (precarga) + ↑ poscarga transmural VI rígido (HVI) → EAP hiperagudo (WIPO).
- VM actúa como asistente cardíaco en cardiópata rígido; tubo en T descompensa hemodinámica.
- HTA rebote + líneas B + VI pletórico confirman WIPO, no debilidad diafragmática.
- Manejo: reconectar presión positiva, furosemida/nitroglicerina, balance negativo, extubar a BiPAP (CHEST/ATS).

¿Por qué fallan las otras opciones?
- Debilidad diafragmática + traqueostomía: líneas B y HTA indican falla cardiovascular, no muscular.
- Broncoespasmo + auto-PEEP: no hay patrón obstructivo; hay congestión pulmonar aguda.
- Sepsis recurrente + vasopresores: sepsis resuelta; el cuadro es hemodinámico por destete.

Clave: cardiópata rígido + falla SBT + líneas B + HTA = WIPO → reconecta VM + diuresis + VNI post-extubación.

MEDICINA CRÍTICA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa fin de reanimación hídrica en sepsis: VCI colapsable indica capacidad de responder a volumen, no necesidad — perseguir lactato con fluidos cuando perfusión clínica está normalizada es iatrogénico.

¿Qué está ocurriendo realmente?
- Hombre de 55 años, choque séptico neumonía bilateral, hora 4 de reanimación.
- PAM 70, diuresis 0.8 mL/kg/h, TRC 2.5 s, mottling 0, alerta.
- Lactato 7.0 → 6.2 (<20% aclaramiento); POCUS: VI hiperdinámicos, VCI colapsable.
- Objetivos de perfusión clínicos cumplidos pero lactato aún alto.

¿Qué dato es clave en el examen?
- VCI colapsable = respondedor a volumen (Starling), no indicación de administrarlo.
- Puede recibir fluido ≠ necesita fluido.
- Perfusión clínica (diuresis, conciencia, TRC) > número de lactato tardío.
- Lactato persistente puede ser adrenérgico/washout post-reanimación.
- Fluidos extra → SDRA, congestión, daño glicocálix (ESICM fluid stewardship).

¿Por qué fallan las otras opciones?
- Hb >10 g/dL antes de volumen: TRISS objetivo Hb 7, no 10; no es la razón de detener fluidos.
- Lactato por falla hepática + azul de metileno: perfusión clínica normalizada descarta hipoxia persistente.
- Norepinefrina falsea TRC: TRC 2.5 s con diuresis y alerta = reanimación completa.

Clave: orina + lúcido + piel caliente + TRC OK = reanimación terminada → no trates lactato con más fluidos.

MEDICINA CRÍTICA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa TEP masivo en paro AESP: ETE con VD gigante confirma obstrucción pulmonar aguda — trombolisis sistémica intra-RCP (alteplasa) y continuar compresiones ≥15–20 min adicionales.

¿Qué está ocurriendo realmente?
- Mujer de 48 años, TEP masivo, paro en AESP durante RCP.
- ETE: VD masivamente dilatado, hipocinesia, VI colapsado (obstrucción AP → falla VD → AESP).
- Ya 1 mg epinefrina IV; compresiones en curso.

¿Qué dato es clave en el examen?
- TEP masivo causa AESP por obstrucción pulmonar aguda: VD falla, VI sin precarga.
- Fibrinólisis intra-paro indicada con sospecha/confirmación alta (AHA ACLS/CHEST).
- Alteplasa 50 mg (o tenecteplasa equivalente) durante RCP; continuar ≥15–20 min post-dosis.
- Volumen empeora VD dilatado; ECMO no sustituye trombolisis universal.
- Toracotomía para trauma/taponamiento, no TEP.

¿Por qué fallan las otras opciones?
- 2 L cristaloides bajo compresión: empeora sobrecarga VD en TEP masivo.
- Detener compresiones para VA-ECMO sola: no sustituye trombolisis; compresiones deben continuar.
- Toracotomía con clampeo aórtico: indicada en trauma/taponamiento, no TEP.

Clave: AESP + VD gigante en paro = alteplasa ya + no pares de comprimir 15–20 min.

MEDICINA CRÍTICA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa la fisiopatología molecular del choque séptico: vasoplejía y fuga capilar simultáneas se explican por citoquinas → iNOS → NO tóxico + destrucción del glicocálix endotelial.

¿Qué está ocurriendo realmente?
- Hombre de 65 años, choque séptico por neumonía multilobar.
- PA 70/40, extremidades calientes, pulsos saltones (vasoplejía, no frío).
- Anasarca en 12 h con balance +2 L (fuga capilar masiva).
- Eco: VI hiperdinámico FEVI 75%, GC 8 L/min; ScvO2 82% (shunt microvascular).

¿Qué dato es clave en el examen?
- PAMPs → TLR-4 → NF-κB → citoquinas (TNF-α, IL-1) → iNOS → NO masivo → vasorelajación vía GMPc.
- Peroxinitrito/citoquinas destruyen glicocálix y cadherinas VE → fuga capilar (altera Starling).
- Choque séptico = enfermedad del endotelio, no solo hipovolemia.
- ScvO2 alta no siempre = hipoperfusión; puede ser flujo rápido con extracción baja (shunt microvascular).
- Extremidades calientes = vasoplejía (iNOS >> eNOS).

¿Por qué fallan las otras opciones?
- Histamina por mastocitos: mecanismo de anafilaxia, no explica vasoplejía + fuga capilar masiva en sepsis.
- Toxina bloquea Na+/K+ ATPasa: no es el mecanismo principal de sepsis bacteriana.
- Acidosis láctica bloquea α-1 + hipoalbuminemia: la hipoalbuminemia agrava edema pero no explica vasoplejía caliente.

Clave: sepsis + extremidades calientes + anasarca + GC alto = iNOS + daño glicocálix → vasoplejía + fuga capilar.

FISIOPATOLOGÍA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa shunt intrapulmonar verdadero en SDRA: hipoxemia que no corrige con FiO2 100% indica V/Q=0 (perfusión sin ventilación), no defecto de difusión.

¿Qué está ocurriendo realmente?
- Mujer de 45 años, SDRA post-pancreatitis severa; Rx pulmón blanco.
- GSA ambiente: PaO2 45; FiO2 100% 30 min: PaO2 50 mmHg (+5 mmHg apenas).
- Cianosis, crépitos difusos: alvéolos inundados de exudado.

¿Qué dato es clave en el examen?
- PaO2 no corrige con FiO2 100% = shunt verdadero (V/Q=0).
- SDRA: alvéolos llenos de exudado (V=0) con perfusión intacta (Q normal).
- Sangre venosa no oxigenada se mezcla con arterial → PaO2 final permanece baja.
- FiO2 100% satura Hb en zonas ventiladas pero no oxigena sangre del shunt.
- Solución: PEEP recluta alvéolos, no más oxígeno.

¿Por qué fallan las otras opciones?
- Espacio muerto (V/Q infinito): causa hipercapnia, no hipoxemia refractaria severa.
- Defecto de difusión puro: mejora parcialmente con FiO2 alta; aquí PaO2 sube solo +5.
- Efecto Bohr inverso: no explica hipoxemia refractaria en SDRA.

Clave: hipoxemia refractaria a FiO2 100% = shunt verdadero → PEEP, no más oxígeno.

FISIOPATOLOGÍA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa triple whammy y colapso de autorregulación glomerular: AINE cierra aferente (prostaglandinas) y losartán abre eferente (Ang II) → presión intraglomerular ~0 en hipovolemia.

¿Qué está ocurriendo realmente?
- Hombre de 75 años, diarrea 3 días + ibuprofeno + losartán; deshidratado PA 90/60.
- Cr 1.1→4.8 en 72 h; Na urinario <10, FENa <1% (AKI prerrenal).
- Hipovolemia activa mecanismos de rescate renal que ambos fármacos bloquean.

¿Qué dato es clave en el examen?
- Autorregulación: aferente = prostaglandinas (dilatación); eferente = angiotensina II (constricción).
- Hipovolemia: riñón dilata aferente (PG) y constriñe eferente (Ang II) para mantener TFG.
- AINE bloquea PG → aferente constriñida; losartán bloquea Ang II → eferente dilatada.
- Sin entrada ni salida abierta → presión glomerular ~0 → anuria.
- Triple whammy: AINE + IECA/ARA II + diurético en hipovolemia.

¿Por qué fallan las otras opciones?
- AINE vasoconstrictor eferente + ARA II dilata aferente: invierte la fisiología real.
- Nefritis intersticial: FENa bajo y Na urinario <10 descartan NTA/NIA.
- Losartán inhibe ADH + ibuprofeno diurético: no es el mecanismo de AKI aguda.

Clave: deshidratación + AINE + losartán = cierra entrada y abre salida → AKI prerrenal con FENa <1%.

FISIOPATOLOGÍA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa la paradoja del potasio en CAD: K+ sérico 5.2 enmascara déficit corporal masivo — insulina activa Na+/K+ ATPasa y puede causar FV por hipokalemia en 30 min.

¿Qué está ocurriendo realmente?
- Hombre de 22 años, debut DM1, CAD severa (pH 7.05, HCO3 5, AG 26).
- K+ 5.2 mEq/L aparentemente normal; insulina 0.1 U/kg/h iniciada.
- 30 min después: FV por K+ 1.8 mEq/L (caída catastrófica).

¿Qué dato es clave en el examen?
- CAD: déficit total K+ masivo (diuresis osmótica) enmascarado por acidosis (H+ entra celula, K+ sale) e insulopenia.
- K+ 5.2 en CAD es espejismo; déficit corporal puede ser 300–600 mEq.
- Insulina → Na+/K+ ATPasa → K+ plasmático colapsa en minutos.
- ADA: no insulina si K+ <3.3; reponer K+ antes/durante si ≤5.2 con acidosis.
- Acidosis corrige parcialmente K+ al subir pH, pero insulina lo desplaza más rápido.

¿Por qué fallan las otras opciones?
- Pseudohiperkalemia hemolítica: la caída post-insulina confirma déficit real, no artefacto.
- Insulina activa ROMK y aldosterona en 30 min: el mecanismo principal es Na+/K+ ATPasa, no vía distal.
- Insulina corrige pH rápido abriendo canales miocárdicos: no es el mecanismo de hipokalemia aguda.

Clave: K+ en CAD miente → si ≤5.2 con acidosis, repón K+ ANTES de insulina.

FISIOPATOLOGÍA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa HFrEF terminal con Ley de Laplace: VI dilatado y pared delgada ↑ tensión parietal/MVO2 y estira anillo mitral → IM funcional simultánea.

¿Qué está ocurriendo realmente?
- Hombre de 72 años, HFrEF terminal; VI dilatado (DDVI 70 mm), pared 8 mm, FEVI 20%.
- IM funcional severa, soplo holosistólico en ápex.
- Remodelado excéntrico: radio ↑, grosor ↓ → estrés parietal ↑ + coaptación mitral fallida.

¿Qué dato es clave en el examen?
- Ley de Laplace: σ = (P×r)/(2×h); ↑ radio y ↓ grosor → tensión parietal y MVO2 ↑.
- Dilatación esferoidal estira anillo mitral y desplaza papilares → IM funcional (geometría, no valva enferma).
- IM funcional → sobrecarga volumen → círculo vicioso de remodelado.
- Frank-Starling en fase descendente: sarcómeras sobre-estiradas, no optimización.
- IECA/BB ↓ presión y radio → ↓ MVO2 y frenan remodelado.

¿Por qué fallan las otras opciones?
- Efecto Venturi: no explica ↑ MVO2 ni geometría papilar.
- Frank-Starling optimiza con estiramiento excesivo: en fase descendente empeora contracción.
- Poiseuille en coronarias: isquemia papilar contribuye pero Laplace explica ambos fenómenos simultáneos.

Clave: VI esferoidal y delgado = agonía energética (Laplace) + IM funcional por tracción papilar.

FISIOPATOLOGÍA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa acidosis hiperclorémica iatrogénica según modelo Stewart: SF 0.9% (SID=0) diluye el SID plasmático → disociación de H2O → ↑ H+ libre, con AG aparente normal.

¿Qué está ocurriendo realmente?
- Mujer de 40 años post-peritonitis, 8 L SF 0.9% en 24 h.
- Euvolémica; lactato 1.2, Cr 0.9 (no hipoperfusión).
- Na 154, Cl 126, pH 7.22, HCO3 14, AG aparente 14 (normal).

¿Qué dato es clave en el examen?
- Stewart: pH depende de SID (strong ion difference), pCO2 y ácidos débiles.
- SF 0.9% (Na 154, Cl 154) tiene SID=0; infusión masiva diluye SID plasmático (~40).
- SID ↓ → agua se disocia → ↑ H+ → consume HCO3 → acidosis hiperclorémica con AG normal.
- Lactato normal descarta acidosis por hipoperfusión.
- SSC: cristaloides balanceados (RL/Plasmalyte) en reanimación.

¿Por qué fallan las otras opciones?
- Exceso Cl- obliga riñón a reabsorber H+: simplificación incorrecta del mecanismo Stewart.
- SF 0.9% aporta H+ libres in vitro: el ácido viene de disociación de agua, no de H+ exógeno.
- Na+ hiperactiva Na+/H+ expulsa H+: no es el mecanismo de acidosis hiperclorémica.

Clave: 8 L SF 0.9% + AG normal + Cl 126 = ↓ SID → acidosis hiperclorémica iatrogénica.

FISIOPATOLOGÍA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa EAP fulminante con FEVI preservada: isquemia subendocárdica agota ATP → falla SERCA2a → rigidez diastólica → ↑ presión telediastólica → EAP sin caída de FEVI.

¿Qué está ocurriendo realmente?
- Hombre de 55 años, crisis HTA 200/120, EAP fulminante.
- Infradesnivel ST V3-V6, FEVI 60% preservada.
- Isquemia subendocárdica interrumpe relajación diastólica activa (ATP-dependiente).

¿Qué dato es clave en el examen?
- Relajación diastólica consume más ATP que sístole.
- Isquemia → ↓ ATP → falla SERCA2a (Ca2+ citosólico persistente) + rigor reversible.
- VI rígido → PTDVI ↑ → transmisión retrógrada → EAP.
- FEVI puede estar normal: disfunción diastólica aguda antes que inotropismo caiga.
- Isquemia afecta lusitropismo antes que inotropismo.

¿Por qué fallan las otras opciones?
- Glicólisis anaerobia bloquea Na+ fase 0: afecta contracción, no explica EAP con FEVI normal primero.
- Noradrenalina prolonga potencial acción: no es el mecanismo de rigidez diastólica isquémica.
- Citoquinas destruyen elastina: no es proceso instantáneo en crisis HTA aguda.

Clave: EAP + FEVI preservada + isquemia = falla SERCA2a → VI rígido → EAP por disfunción diastólica.

FISIOPATOLOGÍA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa pulso paradójico en taponamiento cardíaco: inspiración ↑ retorno al VD pero pericardio rígido impide expansión → septum empuja VI → ↓ precarga y gasto sistémico.

¿Qué está ocurriendo realmente?
- Hombre de 30 años, trauma torácico, taponamiento cardíaco.
- PA 65/40, FC 145, JVP extrema, pulso desaparece en inspiración.
- POCUS: derrame colapsa VD en diástole; septum abomba a izquierda en inspiración.

¿Qué dato es clave en el examen?
- Interdependencia ventricular patológica: pericardio a tensión = coraza inelástica.
- Inspiración ↑ retorno venoso al VD; pericardio impide dilatación externa.
- Volumen empuja septum hacia VI → ↓ precarga VI → ↓ volumen sistólico.
- Caída PA sistólica >10 mmHg en inspiración = pulso paradójico.
- Bezold-Jarisch = bradicardia por estímulo ventricular, no pulso paradójico con taquicardia.

¿Por qué fallan las otras opciones?
- Inspiración succiona líquido a pleura: no explica interdependencia ventricular.
- Presión negativa colapsa aurícula izquierda: el mecanismo es septum shift VD→VI.
- Reflejo Bezold-Jarisch bloquea AV: causa bradicardia, no pulso paradójico.

Clave: taponamiento + pulso paradójico = batalla de volumen en coraza → septum empuja VI.

FISIOPATOLOGÍA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa tetania por hipocalcemia post-tiroidectomía: Ca2+ extracelular estabiliza canales Na+ voltaje-dependientes — hipocalcemia ↓ umbral → descargas espontáneas (Trousseau, Chvostek).

¿Qué está ocurriendo realmente?
- Mujer de 35 años, 48 h post-tiroidectomía; Ca total 6.5 mg/dL.
- Parestesias, Trousseau y Chvostek positivos.
- Hipoparatiroidismo post-quirúrgico → ↓ PTH → ↓ Ca2+ extracelular.

¿Qué dato es clave en el examen?
- Ca2+ extracelular blinda canales Na+ en reposo, elevando umbral de disparo.
- Hipocalcemia desestabiliza membrana → apertura espontánea Na+ → potenciales de acción repetitivos.
- Tetania, Trousseau, Chvostek = hiperexcitabilidad neuromuscular periférica.
- Ca2+ excita menos la placa motora sin Ca presináptico (parálisis), no tetania.
- Tetania es origen nervio periférico, no placa motora ni ACh acumulada.

¿Por qué fallan las otras opciones?
- Ca2+ activa acetilcolinesterasa: déficit causaría acumulación ACh y parálisis flácida, no tetania.
- Falla liberación calcio en retículo: afecta contracción muscular, no hiperexcitabilidad de membrana.
- Ca2+ bloquea K+ en reposo hiperpolarizando: mecanismo incorrecto; Ca2+ estabiliza Na+, no K+.

Clave: hipocalcemia + Trousseau/Chvostek = Ca2+ ya no estabiliza Na+ → tetania por hiperexcitabilidad.

FISIOPATOLOGÍA — BY DR Q.
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
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa cor pulmonale agudo en SDRA con PEEP alto: doble mecanismo de ↑ RVP — vasoconstricción pulmonar hipóxica (VPH) + compresión capilar por PEEP → VD dilatado colapsa precarga del VI.

¿Qué está ocurriendo realmente?
- Hombre de 50 años, neumonía bilateral Influenza A, VM PEEP 16.
- PA 60/40; Swan-Ganz: PVC 22, PAP 60/30, PAOP 8, GC 2.0.
- Eco: VD dilatado, septum hacia VI, VI colapsado.
- Disociación Swan: presiones derechas altas, izquierdas bajas = bloqueo pulmonar.

¿Qué dato es clave en el examen?
- Hipoxia alveolar global → VPH (Euler-Liljestrand): cierre arteriolas pre-capilares.
- PEEP alto sobredistinde alvéolos → aplasta capilares intra-alveolares → ↑ RVP adicional.
- RVP ↑ → VD choca contra muro → dilatación, estasis (PVC↑), PAOP baja (VI sin precarga).
- GC colapsa por falta de precarga VI, no por falla de bomba izquierda primaria.
- Pulmón: hipoxia vasoconstrictora + PEEP excesivo comprime capilares.

¿Por qué fallan las otras opciones?
- PEEP distiende VI comprimiendo VD: PEEP aumenta presión intratorácica pero aquí PAOP 8 (VI vacío).
- Fibrinolisis licua sangre hacia pleura: no explica VPH + compresión capilar.
- Hipercapnia dilata arteria pulmonar: la hipoxia causa vasoconstricción, no vasodilatación.

Clave: hipoxia (VPH) + PEEP 16 + PAOP 8 + GC 2 = cor pulmonale agudo → VD falla, VI sin precarga.

FISIOPATOLOGÍA — BY DR Q.
Cor pulmonale agudo · VPH + PEEP

Cadena: hipoxia → VPH + PEEP alto → ↑ RVP → VD dilatado → GC ↓.

Perla: Hipoxia constriñe pulmón; PEEP excesivo aplasta capilares. VD empuja contra ladrillos.

Referencias: West lung zones; ARDS hemodynamics.`,
  },
  {
    id: "dr-q-71",
    examArea: "Medicina Interna / Infectología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "endocarditis", "duke"],
    statement:
      "Hombre de 28 años, consumidor de heroína IV, fiebre 39 °C de 10 días, disnea y tos con expectoración sanguinolenta. FC 115, soplo holosistólico en foco tricuspídeo que aumenta con inspiración. Rx tórax: múltiples infiltrados nodulares cavitados bilaterales periféricos. Hemocultivos pendientes. ¿Conducta inmediata más adecuada?",
    options: [
      { id: "A", label: "A", text: "Esperar hemocultivos 48 h antes de antibióticos para no enmascarar el germen." },
      {
        id: "B",
        label: "B",
        text: "Iniciar vancomicina + gentamicina empírica tras tomar ≥2 pares de hemocultivos; ecocardiograma urgente.",
      },
      { id: "C", label: "C", text: "Anticoagulación plena por sospecha de TEP masivo." },
      { id: "D", label: "D", text: "Ceftriaxona monoterapia ambulatoria por neumonía comunitaria." },
    ],
    correctOptionId: "B",
    explanation:
      "Endocarditis tricuspídea por S. aureus en usuario de drogas IV: fiebre + soplo + émbolos sépticos pulmonares (infiltrados cavitados periféricos). Conducta: hemocultivos (≥2 pares) y antibióticos empíricos sin demora (<1 h en shock). Vancomicina cubre MRSA; gentamicina sinergia (según guía). Eco transtorácica/transesofágica urgente.",
    keyPoints: [
      "Endocarditis derecha: émbolos pulmonares, no sistémicos.",
      "Hemocultivos antes de ATB, pero nunca retrasar tratamiento.",
      "S. aureus = germen #1 en usuarios de drogas IV.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa endocarditis tricuspídea en usuario de drogas IV: fiebre + soplo tricuspídeo + émbolos pulmonares cavitados exige hemocultivos y ATB empírico sin demora.

¿Qué está ocurriendo realmente?
- Hombre de 28 años, consumidor de heroína IV, fiebre 39 °C de 10 días.
- Disnea, tos con expectoración sanguinolenta; soplo holosistólico tricuspídeo que aumenta con inspiración.
- Rx: múltiples infiltrados nodulares cavitados bilaterales periféricos (émbolos sépticos pulmonares).
- Endocarditis derecha por S. aureus hasta demostrar lo contrario.

¿Qué dato es clave en el examen?
- Tríada: fiebre + soplo tricuspídeo + émbolos pulmonares (no sistémicos como en válvula izquierda).
- Hemocultivos ≥2 pares antes de ATB, pero nunca retrasar tratamiento >1 h si inestable.
- ATB empírico: vancomicina (MRSA) ± gentamicina sinergia; eco transtorácica/transesofágica urgente.
- S. aureus = germen #1 en usuarios de drogas IV.

¿Por qué fallan las otras opciones?
- Esperar hemocultivos 48 h: retrasa tratamiento en endocarditis con émbolos activos.
- Anticoagulación plena: contraindicada en endocarditis (riesgo émbolos hemorrágicos).
- Ceftriaxona ambulatoria: neumonía comunitaria no explica soplo + émbolos cavitados periféricos.

Clave: infiltrados cavitados periféricos + fiebre + IVDA = endocarditis derecha → vanco + gentamicina + eco urgente.

INFECTOLOGÍA — BY DR Q.
Endocarditis tricuspídea · usuario de drogas IV

• Tríada: fiebre + soplo tricuspídeo + émbolos pulmonares.
• ATB empírico: vancomicina ± gentamicina tras hemocultivos.

Perla: Infiltrados cavitados periféricos + fiebre + IVDA = endocarditis derecha hasta demostrar lo contrario.

Referencias: ESC Endocarditis Guidelines; IDSA.`,
  },
  {
    id: "dr-q-72",
    examArea: "Medicina Interna / Infectología / Neumología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "neumonia", "legionella"],
    statement:
      "Hombre de 62 años, fumador, fiebre alta, tos seca, confusión. PA 90/55, FR 28, SatO2 88% ambiente. Na 128, transaminasas 3× LSN, LDH elevada. Rx: consolidación lobar derecha. Antibióticos comunitarios (amoxicilina) 48 h sin mejoría. ¿Ajuste empírico más apropiado?",
    options: [
      { id: "A", label: "A", text: "Agregar azitromicina por posible atípica leve ambulatoria." },
      {
        id: "B",
        label: "B",
        text: "Legionella probable: levofloxacino o azitromicina IV + betalactámico; investigar exposición (agua/aire acondicionado).",
      },
      { id: "C", label: "C", text: "Metronidazol por anaerobios; el olor a podrido confirma diagnóstico." },
      { id: "D", label: "D", text: "Vancomicina + piperacilina-tazobactam solo si hay derrame pleural." },
    ],
    correctOptionId: "B",
    explanation:
      "Neumonía grave con hiponatremia, transaminitis, LDH↑ y falla a betalactámico: Legionella pneumophila. Tratamiento: fluoroquinolona respiratoria o macrólido IV. Legionella no cultiva en medios habituales; antigenuria en orina confirma. HipoNa + diarrea + alteración neurológica = pistas clásicas.",
    keyPoints: [
      "Legionella: hipoNa, hepatitis, CNS, falla a amoxicilina.",
      "Antigenuria en orina es diagnóstico rápido.",
      "Macrólido o fluoroquinolona; no responde a betalactámicos solos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa neumonía por Legionella: hipoNa + transaminitis + confusión + falla a amoxicilina = cambiar a levofloxacino o azitromicina IV.

¿Qué está ocurriendo realmente?
- Hombre de 62 años, fumador, fiebre alta, tos seca, confusión.
- PA 90/55, SatO2 88%; Na 128, transaminasas 3× LSN, LDH elevada.
- Rx: consolidación lobar derecha; amoxicilina 48 h sin mejoría.

¿Qué dato es clave en el examen?
- Legionella: hipoNa, hepatitis, alteración neurológica, exposición hídrica/aire acondicionado.
- No responde a betalactámicos solos (amoxicilina); requiere macrólido o fluoroquinolona respiratoria.
- Antigenuria en orina es diagnóstico rápido; no cultiva en medios habituales.
- Neumonía grave con hipotensión: tratamiento IV, no ambulatorio.

¿Por qué fallan las otras opciones?
- Agregar azitromicina ambulatoria: paciente inestable requiere IV; ya falló betalactámico solo.
- Metronidazol por anaerobios: olor no confirma; Legionella es acuática intracelular.
- Vanco + pip-tazo solo con derrame: no cubre Legionella como monoterapia empírica adecuada.

Clave: amoxicilina fallida + hipoNa + transaminitis + confusión = Legionella → levofloxacino o azitromicina IV.

INFECTOLOGÍA — BY DR Q.
Neumonía por Legionella

• Pistas: hipoNa, transaminitis, confusión, exposición hídrica.
• ATB: levofloxacino o azitromicina.

Perla: Amoxicilina no cubre Legionella. Si falla betalactámico + hipoNa, piensa Legionella.

Referencias: ATS/IDSA CAP Guidelines; ESCMID Legionella.`,
  },
  {
    id: "dr-q-73",
    examArea: "Medicina Interna / Infectología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "fascitis_necrotizante", "lrinec"],
    statement:
      "Mujer de 55 años, diabética, dolor intenso en muslo derecho tras mínimo trauma. FC 125, PA 85/50. Piel eritematosa con equimosis progresiva; dolor desproporcionado al examen. No crepitación palpable. Leucocitos 22.000, creatinina 2.1, Na 130, glucosa 380, CRP muy elevada. ¿Conducta?",
    options: [
      { id: "A", label: "A", text: "Cefalexina VO y control ambulatorio en 48 h." },
      { id: "B", label: "B", text: "Drenaje quirúrgico urgente (desbridamiento) + antibióticos de amplio espectro IV; no esperar estudios de imagen si alta sospecha." },
      { id: "C", label: "C", text: "Antibióticos solamente; la ausencia de crepitación descarta fascitis necrotizante." },
      { id: "D", label: "D", text: "Anticoagulación por trombosis venosa profunda complicada." },
    ],
    correctOptionId: "B",
    explanation:
      "Fascitis necrotizante: dolor desproporcionado, progresión rápida, shock, LRINEC elevado (leucocitosis, Cr↑, Na↓, glucosa↑). Crepitación ausente no excluye (es signo tardío). Conducta: cirugía URGENTE + piperacilina-tazobactam + vancomicina ± clindamicina (toxina). TC solo si no retrasa cirugía.",
    keyPoints: [
      "Dolor >> hallazgos cutáneos = bandera roja.",
      "Crepitación es tardía; no esperarla.",
      "Cirugía + ATB; cada hora de demora ↑ mortalidad.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa fascitis necrotizante: dolor desproporcionado al examen + shock + LRINEC elevado = desbridamiento quirúrgico urgente sin esperar crepitación ni TC.

¿Qué está ocurriendo realmente?
- Mujer de 55 años, diabética, dolor intenso en muslo tras mínimo trauma.
- PA 85/50, FC 125; piel eritematosa con equimosis progresiva.
- Dolor desproporcionado al examen; no crepitación palpable (signo tardío).
- Leucocitos 22,000, Cr 2.1, Na 130, glucosa 380, CRP muy elevada (LRINEC ≥6).

¿Qué dato es clave en el examen?
- Fascitis necrotizante: dolor >> hallazgos cutáneos = bandera roja.
- Crepitación ausente no excluye (es signo tardío de gas subcutáneo).
- LRINEC ≥6: alta sospecha; shock + progresión rápida = operar ya.
- ATB: betalactámico + vancomicina + clindamicina (antitoxina estreptocócica).
- TC solo si no retrasa cirugía; cada hora de demora ↑ mortalidad.

¿Por qué fallan las otras opciones?
- Cefalexina VO ambulatoria: shock + progresión rápida = urgencia quirúrgica.
- ATB solamente sin crepitación: la ausencia de crepitación no descarta fascitis.
- Anticoagulación por TVP: el cuadro es infección necrotizante de tejidos blandos.

Clave: dolor desproporcionado + shock + equimosis progresiva = desbridamiento ya + ATB amplio espectro.

INFECTOLOGÍA — BY DR Q.
Fascitis necrotizante

• LRINEC ≥6: alta sospecha. Shock + progresión rápida = operar ya.
• ATB: betalactámico + vancomicina + clindamicina (antitoxina).

Perla: La piel miente; el dolor no. Sin crepitación no estás a salvo.

Referencias: IDSA SSTI Guidelines; LRINEC score validation.`,
  },
  {
    id: "dr-q-74",
    examArea: "Medicina Interna / Infectología / Neurología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "meningitis", "dexametasona"],
    statement:
      "Hombre de 19 años, fiebre, cefalea intensa, rigidez de nuca, petequias en tronco. TAC cerebral sin contraste: normal. Se confirma punción lumbar: LCR turbio, glucosa 15 mg/dL, proteínas 280 mg/dL, PMN 95%. ¿Secuencia terapéutica correcta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Dexametasona 0.15 mg/kg IV + ceftriaxona + vancomicina lo antes posible; idealmente dexametasona antes o con la primera dosis de antibiótico.",
      },
      { id: "B", label: "B", text: "Esperar resultado de cultivo para elegir antibiótico dirigido." },
      { id: "C", label: "C", text: "Dexametasona solo si hay Streptococcus pneumoniae confirmado en Gram." },
      { id: "D", label: "D", text: "Aciclovir exclusivo por sospecha de herpes." },
    ],
    correctOptionId: "A",
    explanation:
      "Meningitis bacteriana aguda: ceftriaxona + vancomicina empíricos (cubrir S. pneumoniae resistente y N. meningitidis). Dexametasona reduce mortalidad/secuelas neurológicas en meningitis neumocócica si se administra ANTES o CON la primera dosis de ATB. Petequias sugieren meningococo; mismo esquema empírico.",
    keyPoints: [
      "Ceftriaxona + vancomicina empíricos en adultos.",
      "Dexametasona: antes/con primer ATB, no después.",
      "TAC antes de PL si focalidad, inmunosupresión o alteración mental.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa meningitis bacteriana aguda: dexametasona 0.15 mg/kg debe administrarse ANTES o CON la primera dosis de ceftriaxona + vancomicina, no después.

¿Qué está ocurriendo realmente?
- Hombre de 19 años, fiebre, cefalea intensa, rigidez de nuca, petequias en tronco.
- TAC normal; PL: LCR turbio, glucosa 15, proteínas 280, PMN 95%.
- Meningitis bacteriana aguda (petequias sugieren meningococo; mismo esquema empírico).

¿Qué dato es clave en el examen?
- ATB empírico adultos: ceftriaxona + vancomicina (cubrir S. pneumoniae resistente y N. meningitidis).
- Dexametasona 0.15 mg/kg IV reduce mortalidad/secuelas en meningitis neumocócica.
- Timing crítico: dexametasona ANTES o CON primera dosis ATB; después pierde beneficio.
- TAC antes de PL si focalidad, inmunosupresión o alteración mental (aquí TAC ya normal).

¿Por qué fallan las otras opciones?
- Esperar cultivo para ATB dirigido: retrasa tratamiento en emergencia neurológica.
- Dexametasona solo si Gram confirma neumococo: en práctica se administra empíricamente si sospecha neumocócica.
- Aciclovir exclusivo: LCR bacteriano con PMN 95% y glucosa 15 descarta herpes como causa primaria.

Clave: meningitis bacteriana = ceftriaxona + vanco + dexametasona con/sin primer ATB, nunca después.

INFECTOLOGÍA — BY DR Q.
Meningitis bacteriana aguda

• ATB empírico: ceftriaxona + vancomicina.
• Dexametasona 0.15 mg/kg c/6 h × 4 días si sospecha neumocócica.

Perla: Dexametasona después del ATB pierde beneficio. Timing importa.

Referencias: IDSA Bacterial Meningitis Guidelines; van de Beek et al.`,
  },
  {
    id: "dr-q-75",
    examArea: "Medicina Interna / Infectología / Gastroenterología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "cdiff", "colitis"],
    statement:
      "Mujer de 70 años, hospitalizada por neumonía, recibió ceftriaxona 7 días. Día 10: diarrea acuosa >10/día, dolor abdominal, leucocitos 18.000. PCR toxina C. difficile positiva. PA 90/55, distensión abdominal, timpanismo. Rx abdomen: dilatación colónica >12 cm. ¿Tratamiento?",
    options: [
      { id: "A", label: "A", text: "Metronidazol VO 500 mg c/8 h ambulatorio." },
      {
        id: "B",
        label: "B",
        text: "Colitis fulminante: vancomicina oral 500 mg c/6 h ± vancomicina rectal + metronidazol IV; cirugía si no responde.",
      },
      { id: "C", label: "C", text: "Loperamida para controlar diarrea y evitar deshidratación." },
      { id: "D", label: "D", text: "Fidaxomicina VO como primera línea en colitis fulminante con megacolon." },
    ],
    correctOptionId: "B",
    explanation:
      "C. difficile fulminante: shock, leucocitosis marcada, íleo/megacolon (colón >10-12 cm). Metronidazol VO ya no es primera línea. Fulminante: vancomicina oral alta dosis ± enema de vancomicina + metro IV; colectomía si refractario. Loperamida está contraindicada (retención toxina). Fidaxomicina es 1.ª línea en formas no fulminantes.",
    keyPoints: [
      "Fulminante: WBC >15.000, Cr↑, shock, megacolon, íleo.",
      "Vancomicina oral (no metro) en formas graves.",
      "Nunca loperamida en colitis infecciosa.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa C. difficile fulminante con megacolon: shock + colón >12 cm exige vancomicina oral alta dosis ± rectal + metronidazol IV, no metronidazol VO ni loperamida.

¿Qué está ocurriendo realmente?
- Mujer de 70 años, ceftriaxona 7 días por neumonía; día 10 diarrea acuosa >10/día.
- PA 90/55, distensión abdominal, timpanismo; leucocitos 18,000.
- PCR toxina C. difficile (+); Rx: dilatación colónica >12 cm (megacolon).
- Colitis fulminante con disfunción orgánica.

¿Qué dato es clave en el examen?
- Fulminante: WBC >15,000, Cr↑, shock, megacolon (>10-12 cm), íleo.
- Metronidazol VO ya no es primera línea en formas graves.
- Fulminante: vancomicina oral 500 mg c/6 h ± enema de retención + metronidazol IV.
- Colectomía si refractario; loperamida contraindicada (retención toxinas → perforación).
- Fidaxomicina es 1.ª línea en formas no fulminantes, no en megacolon con shock.

¿Por qué fallan las otras opciones?
- Metronidazol VO ambulatorio: insuficiente en colitis fulminante con megacolon y shock.
- Loperamida: contraindicada en colitis infecciosa activa; riesgo megacolon/toxicidad.
- Fidaxomicina en fulminante: reservada para formas leve-moderada; no megacolon con shock.

Clave: megacolon + shock + C. diff (+) = vanco oral ± rectal + metro IV; nunca loperamida.

INFECTOLOGÍA — BY DR Q.
C. difficile fulminante

• 1.ª línea leve-moderada: fidaxomicina o vancomicina oral.
• Fulminante: vancomicina oral ± rectal + metro IV; colectomía si falla.

Perla: Megacolon + shock = vancomicina oral, no metro. Loperamida mata.

Referencias: IDSA/SHEA C. difficile Guidelines 2021.`,
  },
  {
    id: "dr-q-76",
    examArea: "Medicina Interna / Infectología / HIV",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "hiv", "pcp", "sida"],
    statement:
      "Hombre de 34 años, VIH no diagnosticado, disnea progresiva, tos seca, fiebre baja. SatO2 88% ambiente, FC 105. Rx: infiltrados intersticiales bilaterales perihiliares en \"mariposa\". LDH 650 U/L. CD4 85 cél/μL. ¿Diagnóstico y manejo inicial?",
    options: [
      { id: "A", label: "A", text: "Neumonía bacteriana típica: ceftriaxona + azitromicina." },
      {
        id: "B",
        label: "B",
        text: "Neumonía por Pneumocystis jirovecii: TMP-SMX IV/VO + corticoides si PaO2 <70 mmHg o gradiente A-a >35; no iniciar TARV en fase aguda grave sin estabilizar.",
      },
      { id: "C", label: "C", text: "Tuberculosis pulmonar: RIPE inmediato sin confirmar." },
      { id: "D", label: "D", text: "Profilaxis primaria con pentamidina inhalada y alta." },
    ],
    correctOptionId: "B",
    explanation:
      "PCP: CD4 <200, disnea subaguda, SatO2 baja, infiltrados intersticiales perihiliares, LDH↑. Tratamiento: TMP-SMX (dosis elevada). Corticoides si PaO2 <70 mmHg o A-a ≥35 mmHg (reduce mortalidad). Pentamidina es alternativa por alergia, no profilaxis en enfermedad activa. TARV se inicia tras mejoría clínica (2-4 semanas en PCP grave).",
    keyPoints: [
      "PCP si CD4 <200: disnea + hipoxemia + LDH↑.",
      "TMP-SMX es tratamiento de elección.",
      "Esteroide si PaO2 <70 o A-a ≥35.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa neumonía por Pneumocystis jirovecii en VIH avanzado: CD4 85 + disnea + hipoxemia + LDH↑ + infiltrados en mariposa = TMP-SMX + esteroides si PaO2 <70.

¿Qué está ocurriendo realmente?
- Hombre de 34 años, VIH no diagnosticado, disnea progresiva, tos seca, fiebre baja.
- SatO2 88% ambiente, FC 105; CD4 85 cél/μL.
- Rx: infiltrados intersticiales bilaterales perihiliares en "mariposa"; LDH 650 U/L.

¿Qué dato es clave en el examen?
- PCP si CD4 <200: disnea subaguda + hipoxemia + infiltrados intersticiales + LDH↑.
- Tratamiento: TMP-SMX dosis elevada (1ª línea).
- Corticoides si PaO2 <70 mmHg o gradiente A-a ≥35 mmHg (reduce mortalidad).
- TARV se inicia tras mejoría clínica (2-4 semanas en PCP grave), no en fase aguda inestable.
- Pentamidina es alternativa por alergia, no profilaxis en enfermedad activa.

¿Por qué fallan las otras opciones?
- Ceftriaxona + azitromicina: neumonía bacteriana típica; no cubre PCP.
- RIPE inmediato: TB requiere confirmación; cuadro clásico de PCP con CD4 bajo.
- Pentamidina inhalada profiláctica: es profilaxis, no tratamiento de enfermedad activa.

Clave: CD4 <200 + disnea + LDH alto + infiltrados mariposa = PCP → TMP-SMX + esteroides si hipoxemia.

INFECTOLOGÍA — BY DR Q.
PCP en VIH avanzado

• CD4 <200: profilaxis con TMP-SMX.
• Tratamiento: TMP-SMX + esteroides si hipoxemia moderada-grave.

Perla: LDH alto + disnea + CD4 bajo = PCP hasta demostrar lo contrario.

Referencias: DHHS HIV Guidelines; ATS PCP Guidelines.`,
  },
  {
    id: "dr-q-77",
    examArea: "Medicina Interna / Infectología / Hepatología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "sbP", "cirrosis"],
    statement:
      "Hombre de 58 años, cirrosis por alcohol, ascitis conocida. Fiebre 38.5 °C, dolor abdominal difuso, encefalopatía grado II. Paracentesis: líquido ascítico turbio, PMN 450 cél/μL, proteínas 0.8 g/dL, cultivo pendiente. Creatinina 1.4 (basal 0.9). ¿Manejo?",
    options: [
      { id: "A", label: "A", text: "Observación; PMN <500 descarta peritonitis bacteriana espontánea." },
      {
        id: "B",
        label: "B",
        text: "Peritonitis bacteriana espontánea: ceftriaxona IV + albúmina 1.5 g/kg día 1 y 1 g/kg día 3 si creatinina elevada; suspender betabloqueador si shock.",
      },
      { id: "C", label: "C", text: "Metronidazol solo por posible translocación anaerobia." },
      { id: "D", label: "D", text: "Paracentesis de alivio masiva sin antibióticos." },
    ],
    correctOptionId: "B",
    explanation:
      "PBE: PMN ascítico ≥250 cél/μL (aquí 450). Tratamiento empírico: ceftriaxona 1-2 g/día (cubrir Enterobacteriaceae). Albúmina reduce síndrome hepatorrenal en pacientes con Creat↑ o BUN↑. Repetir paracentesis a 48 h si no mejora (PMN debe bajar >25%). Profilaxis secundaria con norfloxacino tras episodio.",
    keyPoints: [
      "PBE: PMN ≥250 en ascitis.",
      "Ceftriaxona empírica; albúmina si riesgo SHR.",
      "Cultivo positivo en solo ~40%; tratar por PMN.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa peritonitis bacteriana espontánea (PBE): PMN ≥250 en ascitis = ceftriaxona empírica + albúmina si riesgo de síndrome hepatorrenal, sin esperar cultivo.

¿Qué está ocurriendo realmente?
- Hombre de 58 años, cirrosis por alcohol con ascitis conocida.
- Fiebre 38.5 °C, dolor abdominal difuso, encefalopatía grado II.
- Paracentesis: líquido turbio, PMN 450 cél/μL (≥250 = PBE), proteínas 0.8 g/dL.
- Creatinina 1.4 (basal 0.9): riesgo de síndrome hepatorrenal.

¿Qué dato es clave en el examen?
- PBE: PMN ascítico ≥250 cél/μL (aquí 450); no esperar cultivo (positivo solo ~40%).
- Tratamiento empírico: ceftriaxona 1-2 g/día (Enterobacteriaceae).
- Albúmina 1.5 g/kg día 1 y 1 g/kg día 3 si Creat↑, BUN↑ o bilirrubina >4.
- Repetir paracentesis a 48 h si no mejora (PMN debe bajar >25%).
- Profilaxis secundaria con norfloxacino tras episodio.

¿Por qué fallan las otras opciones?
- Observación con PMN <500: umbral es ≥250, no 500; aquí PMN 450 confirma PBE.
- Metronidazol solo: PBE es principalmente Gram negativo entérico, no anaerobios solos.
- Paracentesis de alivio sin ATB: no trata la infección; riesgo de recurrencia y SHR.

Clave: cirrótico febril + PMN ≥250 = ceftriaxona + albúmina; no esperes cultivo.

INFECTOLOGÍA — BY DR Q.
Peritonitis bacteriana espontánea

• Diagnóstico: PMN ≥250. Tratamiento empírico inmediato.
• Albúmina 1.5/1 g/kg si Creat >1, BUN >30 o bilirrubina >4.

Perla: No esperes cultivo. PMN ≥250 = ceftriaxona + albúmina.

Referencias: EASL Ascites Guidelines; AASLD.`,
  },
  {
    id: "dr-q-78",
    examArea: "Medicina Interna / Infectología / Nefrología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "itu", "pielonefritis", "resistencia"],
    statement:
      "Mujer de 45 años, pielonefritis complicada. Fiebre 39.5 °C, dolor costovertebral, náuseas. Antecedente: ITU recurrente, uso previo de ciprofloxacino. UC previo: E. coli BLEE (ESBL). Creatinina 1.0, no alergia a betalactámicos. ¿Antibiótico empírico?",
    options: [
      { id: "A", label: "A", text: "Ciprofloxacino 500 mg VO c/12 h." },
      { id: "B", label: "B", text: "Nitrofurantoína 100 mg c/12 h." },
      { id: "C", label: "C", text: "Ertapenem IV o ceftriaxona según antibiograma local; evitar fluoroquinolonas por resistencia documentada." },
      { id: "D", label: "D", text: "Amoxicilina-ácido clavulánico VO como monoterapia empírica universal." },
    ],
    correctOptionId: "C",
    explanation:
      "Pielonefritis complicada con E. coli ESBL previa: fluoroquinolonas contraindicadas por resistencia. Nitrofurantoína no alcanza concentración renal parenquimatosa. Carbapenem (ertapenem) o betalactámico-β-lactamasa según sensibilidad local. Pielonefritis grave = IV inicialmente. Ajustar por antibiograma.",
    keyPoints: [
      "ESBL: evitar quinolonas y amoxicilina-clavulanato empírico.",
      "Nitrofurantoína solo para cistitis, no pielonefritis.",
      "Pielonefritis complicada = IV + hospitalización.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa pielonefritis complicada por E. coli BLEE: historial de ESBL contraindica fluoroquinolonas — ertapenem IV o betalactámico según antibiograma local.

¿Qué está ocurriendo realmente?
- Mujer de 45 años, pielonefritis complicada; fiebre 39.5 °C, dolor costovertebral.
- ITU recurrente con uso previo de ciprofloxacino.
- UC previo: E. coli BLEE (ESBL); creatinina 1.0, sin alergia a betalactámicos.

¿Qué dato es clave en el examen?
- ESBL: evitar fluoroquinolonas y amoxicilina-clavulanato empírico.
- Carbapenem (ertapenem) o betalactámico-β-lactamasa según sensibilidad local.
- Nitrofurantoína no alcanza concentración en parénquima renal (solo cistitis).
- Pielonefritis complicada = IV inicialmente + hospitalización.

¿Por qué fallan las otras opciones?
- Ciprofloxacino VO: resistencia documentada por ESBL previo.
- Nitrofurantoína: no sirve en pielonefritis (concentración insuficiente en riñón).
- Amoxicilina-clavulánico universal: ineficaz contra ESBL empíricamente.

Clave: pielonefritis + historial ESBL = no repitas cipro → ertapenem IV según antibiograma.

INFECTOLOGÍA — BY DR Q.
Pielonefritis por E. coli BLEE

• ESBL: carbapenem o betalactámico según antibiograma.
• Nitrofurantoína y fosfomicina no sirven en pielonefritis.

Perla: Historia de ESBL = no repitas ciprofloxacino. Piensa carbapenem.

Referencias: IDSA UTI Guidelines; ESBL treatment reviews.`,
  },
  {
    id: "dr-q-79",
    examArea: "Medicina Interna / Infectología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "tuberculosis", "latente"],
    statement:
      "Mujer de 30 años, asintomática, PPD 18 mm (lectura a las 48 h). Rx tórax normal. Contacto domiciliario de paciente con TB pulmonar bacilífera confirmada. VIH negativo. ¿Conducta?",
    options: [
      { id: "A", label: "A", text: "RIPE (rifampicina, isoniazida, pirazinamida, etambutol) 6 meses por TB activa." },
      {
        id: "B",
        label: "B",
        text: "Infección latente por TB (ILTB): isoniazida + rifapentina semanal 3 meses (3HP) o isoniazida 9 meses según guía local; descartar activa antes de tratar.",
      },
      { id: "C", label: "C", text: "No tratamiento; PPD <20 mm en contacto no requiere profilaxis." },
      { id: "D", label: "D", text: "Vacuna BCG revacunación." },
    ],
    correctOptionId: "B",
    explanation:
      "PPD ≥5 mm en contacto estrecho = ILTB (independiente del cutoff general de 10-15 mm). Rx normal descarta activa. Tratamiento ILTB: 3HP (isoniazida + rifapentina 12 dosis semanales) preferido por adherencia, o isoniazida 6-9 meses. RIPE es para TB activa. BCG no revacunar en adultos contactos.",
    keyPoints: [
      "Contacto estrecho: PPD ≥5 mm = positivo.",
      "Rx normal + asintomática = ILTB, no activa.",
      "3HP (12 semanas) preferido sobre 9 meses de H.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa infección latente por TB (ILTB) en contacto estrecho: PPD 18 mm + Rx normal + asintomática = profilaxis con 3HP o isoniazida, no RIPE.

¿Qué está ocurriendo realmente?
- Mujer de 30 años, asintomática, PPD 18 mm (lectura 48 h).
- Rx tórax normal; contacto domiciliario de TB pulmonar bacilífera confirmada.
- VIH negativo; no hay datos de enfermedad activa.

¿Qué dato es clave en el examen?
- Contacto estrecho: PPD ≥5 mm = positivo (independiente del cutoff general 10-15 mm).
- Rx normal + asintomática = ILTB, no TB activa.
- Tratamiento ILTB: 3HP (isoniazida + rifapentina 12 dosis semanales) preferido por adherencia, o isoniazida 6-9 meses.
- RIPE es para TB activa, no profilaxis.
- BCG no revacunar en adultos contactos.

¿Por qué fallan las otras opciones?
- RIPE 6 meses: esquema de TB activa; aquí no hay enfermedad activa.
- No tratamiento con PPD <20 mm: en contacto estrecho el umbral es ≥5 mm.
- Revacunación BCG: no indicada en adultos contactos de TB.

Clave: contacto + PPD positivo + Rx normal = ILTB → 3HP o isoniazida, no RIPE.

INFECTOLOGÍA — BY DR Q.
Infección latente por tuberculosis

• Contacto + PPD ≥5 mm + Rx normal = ILTB.
• Tratamiento: 3HP o isoniazida 9 meses.

Perla: RIPE es para TB activa. ILTB en contacto se trata aunque PPD sea solo 6 mm.

Referencias: WHO LTBI Guidelines; CDC TB Treatment.`,
  },
  {
    id: "dr-q-80",
    examArea: "Medicina Interna / Infectología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "colangitis", "tokyo", "sepsis"],
    statement:
      "Hombre de 67 años, ictericia dolorosa, fiebre 39.8 °C, escalofríos. PA 78/45, FC 130, bilirrubina total 12 mg/dL, directa 10, leucocitos 22.000, lactato 4.2. Eco: dilatación vía biliar + cálculo en colédoco. ¿Manejo inmediato?",
    options: [
      { id: "A", label: "A", text: "Antibióticos VO y colecistectomía electiva en 6 semanas." },
      {
        id: "B",
        label: "B",
        text: "Colangitis grave (Tokyo III): reanimación séptica + piperacilina-tazobactam IV + drenaje biliar urgente (CPRE o drenaje percutáneo) en <24-48 h.",
      },
      { id: "C", label: "C", text: "CPRE diferida tras 2 semanas de antibióticos para evitar pancreatitis." },
      { id: "D", label: "D", text: "Metronidazol monoterapia por anaerobios biliares." },
    ],
    correctOptionId: "B",
    explanation:
      "Colangitis aguda grave (criterios Tokyo): disfunción cardiovascular (shock), respiratoria, renal, hepática, hematológica o neurológica. Tríada de Charcot (fiebre, ictericia, dolor) + shock = Tokyo III. ATB IV de amplio espectro (Enterobacteriaceae + anaerobios) + drenaje biliar urgente. CPRE es gold standard si disponible; drenaje percutáneo si CPRE no factible.",
    keyPoints: [
      "Colangitis = ATB + drenaje; no uno sin el otro.",
      "Tokyo III (grave): disfunción orgánica + drenaje <48 h.",
      "Piperacilina-tazobactam o carbapenem según resistencia local.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa colangitis aguda grave (Tokyo III): tríada de Charcot + shock = reanimación séptica + ATB IV + drenaje biliar urgente en <24-48 h, no CPRE diferida.

¿Qué está ocurriendo realmente?
- Hombre de 67 años, ictericia dolorosa, fiebre 39.8 °C, escalofríos.
- PA 78/45, FC 130, lactato 4.2; bilirrubina total 12, leucocitos 22,000.
- Eco: dilatación vía biliar + cálculo en colédoco.
- Colangitis aguda grave con disfunción cardiovascular (Tokyo III).

¿Qué dato es clave en el examen?
- Tríada de Charcot: fiebre + ictericia + dolor; Pentada si shock + alteración mental.
- Tokyo III: disfunción orgánica → ATB IV + drenaje biliar urgente <24-48 h.
- ATB: piperacilina-tazobactam o carbapenem (Enterobacteriaceae + anaerobios biliares).
- CPRE es gold standard si disponible; drenaje percutáneo si CPRE no factible.
- Colangitis = ATB + drenaje; no uno sin el otro.

¿Por qué fallan las otras opciones?
- ATB VO + colecistectomía electiva 6 semanas: shock requiere drenaje urgente, no diferido.
- CPRE diferida 2 semanas: mortalidad ↑ sin descompresión biliar en Tokyo III.
- Metronidazol monoterapia: no cubre Gram negativos entéricos causales.

Clave: colangitis + shock + cálculo en colédoco = pip-tazo + drenaje biliar hoy, no mañana.

INFECTOLOGÍA — BY DR Q.
Colangitis aguda grave · Tokyo Guidelines

• Tríada Charcot; Pentada si shock + alteración mental.
• Tokyo III: disfunción orgánica → ATB IV + drenaje urgente.

Perla: Colangitis con shock no espera CPRE \"mañana\". Drena hoy.

Referencias: Tokyo Guidelines 2018; ASGE biliary drainage.`,
  },
  {
    id: "dr-q-81",
    examArea: "Medicina Interna / Neumología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "tep", "choque_obstructivo", "trombolisis", "urgencias"],
    statement:
      "Paciente de 68 años con antecedente de hipertensión, quien consulta por disnea súbita y dolor torácico pleurítico. Al examen físico: PA 85/50 mmHg, FC 120 lpm, FR 28 rpm, SatO₂ 88%. Ingurgitación yugular presente. Electrocardiograma: taquicardia sinusal con patrón S1Q3T3. Ante la inestabilidad hemodinámica, ¿cuál es la conducta inicial más adecuada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Anticoagulación con heparina de bajo peso molecular y observación.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar angiotomografía pulmonar antes de iniciar tratamiento.",
      },
      {
        id: "C",
        label: "C",
        text: "Trombólisis sistémica inmediata.",
      },
      {
        id: "D",
        label: "D",
        text: "Colocación de filtro de vena cava inferior.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Cuadro altamente sugestivo de tromboembolismo pulmonar de alto riesgo (masivo), con hipotensión e inestabilidad hemodinámica. La reperfusión inmediata mediante trombólisis sistémica es el tratamiento de elección.",
    keyPoints: [
      "Disnea súbita + dolor pleurítico + hipotensión + ingurgitación yugular → TEP de alto riesgo.",
      "Hipotensión en TEP = alto riesgo; choque obstructivo.",
      "La trombólisis está indicada en pacientes inestables.",
      "La anticoagulación aislada no es suficiente en TEP de alto riesgo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa TEP de alto riesgo (masivo): la hipotensión (PA 85/50) define choque obstructivo y obliga trombolisis sistémica inmediata, no angio-TC ni anticoagulación sola.

¿Qué está ocurriendo realmente?
- Paciente de 68 años con disnea súbita y dolor pleurítico.
- PA 85/50, FC 120, SatO2 88%, ingurgitación yugular.
- ECG: S1Q3T3 (sobrecarga derecha); inestabilidad hemodinámica.

¿Qué dato es clave en el examen?
- Hipotensión en TEP = alto riesgo; choque obstructivo (trombo → ↑ RVP → VD dilatado → ↓ precarga VI).
- La clave no es S1Q3T3; la clave es la hipotensión arterial.
- Trombolisis sistémica inmediata para reperfusión rápida.
- No esperar angio-TC en paciente inestable.
- Anticoagulación sola no basta en choque.

¿Por qué fallan las otras opciones?
- HBPM + observación: insuficiente en TEP masivo con hipotensión.
- Angio-TC antes de tratar: retrasa reperfusión en paciente inestable.
- Filtro de vena cava: no trata TEP establecido agudo; no disuelve trombo.

Clave: disnea súbita + hipotensión + ingurgitación yugular = TEP alto riesgo → trombolisis ya.

URGENTES — BY DR Q.
Tromboembolismo pulmonar de alto riesgo

Lo que debes saber para el examen:
• Disnea súbita, dolor pleurítico, hipotensión, ingurgitación yugular, signos de sobrecarga derecha → TEP de alto riesgo.

La clave no es el patrón S1Q3T3; la clave es la hipotensión arterial (PA 85/50 mmHg). Un trombo ocluye la circulación pulmonar → ↑ resistencia vascular pulmonar → dilatación del VD → ↓ llenado del VI → ↓ gasto cardíaco = choque obstructivo.

¿Por qué trombólisis?
Hipotensión + hipoxemia + sobrecarga derecha requieren reperfusión rápida para disolver el trombo, reducir presión pulmonar y mejorar gasto cardíaco.

Trampas de examen:
• No esperar angio-TC en paciente inestable.
• Anticoagulación sola no basta en choque.
• S1Q3T3 sugiere sobrecarga derecha, pero la decisión se basa en estabilidad hemodinámica.

Secuencia: sospechar TEP → valorar estabilidad → identificar hipotensión → clasificar alto riesgo → reperfusión urgente.

Referencias: ESC Guidelines on Pulmonary Embolism; Harrison's; UpToDate: High-Risk PE; CHEST VTE Guidelines.`,
  },
  {
    id: "dr-q-82",
    examArea: "Medicina Interna / Endocrinología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "endocrinologia", "cad", "cetoacidosis", "urgencias"],
    statement:
      "Mujer de 45 años con antecedente de diabetes mellitus tipo 1 consulta por náuseas, vómito y dolor abdominal. Glucometría: 450 mg/dL. Gasometría arterial: pH 7.1, HCO₃⁻ 8 mEq/L, anion gap 22 mEq/L. ¿Cuál es el orden lógico del manejo inicial?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Insulina intravenosa → líquidos intravenosos → corrección de potasio.",
      },
      {
        id: "B",
        label: "B",
        text: "Bicarbonato intravenoso → insulina intravenosa → líquidos intravenosos.",
      },
      {
        id: "C",
        label: "C",
        text: "Líquidos intravenosos → evaluación/corrección de potasio → insulina intravenosa.",
      },
      {
        id: "D",
        label: "D",
        text: "Insulina subcutánea → líquidos intravenosos → bicarbonato intravenoso.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Cetoacidosis diabética. El manejo inicial debe comenzar con expansión de volumen mediante cristaloides, seguido de evaluación del potasio sérico y posteriormente administración de insulina intravenosa.",
    keyPoints: [
      "Hiperglucemia + acidosis metabólica + anion gap elevado → cetoacidosis diabética.",
      "La primera medida es la reposición de líquidos.",
      "El potasio debe evaluarse antes de iniciar insulina.",
      "El bicarbonato rara vez está indicado (pH < 6.9).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa secuencia de manejo en CAD: volumen primero, evaluar K+ antes de insulina IV — la insulina sin reponer potasio puede causar hipokalemia letal.

¿Qué está ocurriendo realmente?
- Mujer de 45 años, DM1, náuseas, vómito y dolor abdominal.
- Glucometría 450 mg/dL; pH 7.1, HCO3 8, anion gap 22.
- CAD severa con deshidratación osmótica por diuresis.

¿Qué dato es clave en el examen?
- Secuencia ADA: 1) líquidos IV (crialoides isotónicos); 2) evaluar/corregir K+; 3) insulina regular IV.
- Insulina desplaza K+ intracelularmente → hipokalemia grave si K+ bajo.
- Si K+ <3.3: posponer insulina y reponer potasio primero.
- Bicarbonato solo si pH <6.9 (rara vez indicado en pH 7.1).
- Insulina SC inadecuada en CAD severa con vómitos.

¿Por qué fallan las otras opciones?
- Insulina → líquidos → K+: volumen debe ir primero; insulina sin K+ evaluado es peligroso.
- Bicarbonato → insulina → líquidos: bicarbonato no es primera línea en pH 7.1.
- Insulina SC + bicarbonato: CAD severa requiere insulina IV y monitorización UCI.

Clave: CAD = líquidos primero → K+ evaluado → insulina IV; no empieces por insulina.

URGENTES — BY DR Q.
Cetoacidosis diabética · secuencia de manejo

La clave no es la glucosa; la clave es el orden de las intervenciones.

Fisiopatología: deficiencia de insulina → lipólisis → cuerpos cetónicos → acidosis + diuresis osmótica → deshidratación severa.

Secuencia correcta:
1. Líquidos intravenosos (crialoides isotónicos).
2. Evaluar y corregir potasio (la insulina desplaza K+ intracelularmente y puede precipitar hipokalemia grave).
3. Insulina regular intravenosa.
4. Identificar y tratar el factor desencadenante.

Trampa: iniciar insulina inmediatamente sin reponer volumen. El bicarbonato solo se considera en acidosis extrema (pH < 6.9).

Referencias: ADA Standards of Care; Endocrine Society Guidelines; Harrison's; UpToDate: DKA in Adults.`,
  },
  {
    id: "dr-q-83",
    examArea: "Medicina Interna / Infectología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "sepsis", "choque_septico", "urgencias", "antibioticos"],
    statement:
      "Paciente de 72 años, antecedente de DM2 y ERC estadio 3, ingresa por cuadro de 48 horas de fiebre, disuria y alteración del estado de conciencia. Al examen: PA 88/50 mmHg, FC 115 lpm, FR 24 rpm, temperatura 38.5°C. Laboratorios: lactato 4.2 mmol/L, creatinina 2.1 mg/dL (basal 1.2), leucocitosis con desviación a la izquierda. Tras asegurar la vía aérea, ¿cuál es la medida con mayor impacto en la supervivencia del paciente en la primera hora?",
    options: [
      { id: "A", label: "A", text: "Administrar bicarbonato intravenoso." },
      { id: "B", label: "B", text: "Iniciar vasopresores inmediatamente." },
      {
        id: "C",
        label: "C",
        text: "Administrar antibióticos de amplio espectro dentro de la primera hora.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar urocultivo y esperar resultados antes de iniciar tratamiento.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Choque séptico de origen urinario. La administración precoz de antibióticos adecuados es una de las intervenciones con mayor impacto demostrado en la reducción de la mortalidad.",
    keyPoints: [
      "Sospecha de infección + hipotensión + lactato elevado + disfunción orgánica → choque séptico.",
      "Los antibióticos tempranos reducen la mortalidad.",
      "Los cultivos no deben retrasar el tratamiento.",
      "Vasopresores si persiste hipotensión tras reanimación con líquidos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa choque séptico de origen urinario: la medida con mayor impacto en supervivencia en la primera hora son antibióticos de amplio espectro, no vasopresores ni esperar cultivos.

¿Qué está ocurriendo realmente?
- Paciente de 72 años, DM2, ERC 3; fiebre, disuria, alteración del estado de conciencia 48 h.
- PA 88/50, FC 115, Temp 38.5 °C, lactato 4.2, creatinina 2.1 (basal 1.2).
- Choque séptico de probable origen urinario con disfunción orgánica.

¿Qué dato es clave en el examen?
- Choque séptico: infección + hipotensión + lactato elevado + disfunción orgánica.
- Antibióticos de amplio espectro en la primera hora: mayor impacto demostrado en mortalidad.
- Cada hora de retraso en ATB ↑ mortalidad ~8%.
- Cultivos antes de ATB, pero nunca retrasar tratamiento esperando resultados.
- Vasopresores si persiste hipotensión tras reanimación con cristaloides, no como primera medida.

¿Por qué fallan las otras opciones?
- Bicarbonato IV: no es intervención de mayor impacto en primera hora de sepsis.
- Vasopresores inmediatamente: no sustituyen tratamiento de la infección; van tras volumen.
- Esperar urocultivo: retrasa ATB; mortalidad ↑ por cada hora de demora.

Clave: sepsis + shock + lactato 4.2 = ATB amplio espectro en <1 h, no esperes cultivos.

URGENTES — BY DR Q.
Choque séptico · primera hora

La clave: hipotensión + lactato elevado + infección.

Infección urinaria probable + alteración mental + hipotensión + lactato 4.2 + LRA = choque séptico.

Intervención con mayor impacto en supervivencia: antibióticos de amplio espectro en la primera hora. Cada hora de retraso aumenta mortalidad.

Manejo inicial: cultivos (sin retrasar ATB) + cristaloides + antibióticos tempranos + control del foco + vasopresores si persiste hipotensión.

Trampa: responder vasopresores como primera medida. Los vasopresores no sustituyen el tratamiento de la infección.

Referencias: Surviving Sepsis Campaign; SCCM Sepsis Guidelines; Sepsis-3; UpToDate: Sepsis and Septic Shock.`,
  },
  {
    id: "dr-q-84",
    examArea: "Medicina Interna / Neurología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "estatus_epileptico", "urgencias"],
    statement:
      "Paciente masculino de 25 años sin antecedentes conocidos, traído a urgencias por convulsión tónico-clónica generalizada que persiste por 12 minutos. Al examen físico no recupera el estado de conciencia entre episodios convulsivos. Tras asegurar la vía aérea y permeabilizar acceso venoso, ¿cuál es el siguiente paso farmacológico correcto?",
    options: [
      { id: "A", label: "A", text: "Administrar fenitoína intravenosa como primera medida." },
      { id: "B", label: "B", text: "Administrar lorazepam o diazepam intravenoso." },
      { id: "C", label: "C", text: "Iniciar infusión de propofol inmediatamente." },
      { id: "D", label: "D", text: "Administrar levetiracetam oral." },
    ],
    correctOptionId: "B",
    explanation:
      "Estatus epiléptico convulsivo. Tras las medidas iniciales de soporte, el tratamiento farmacológico de primera línea son las benzodiacepinas intravenosas.",
    keyPoints: [
      "Convulsión ≥ 5 minutos o sin recuperación de conciencia → estatus epiléptico.",
      "Las benzodiacepinas son el tratamiento inicial (lorazepam, diazepam, midazolam).",
      "Fenitoína y levetiracetam son segunda línea.",
      "Propofol se reserva para estatus refractario.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa estatus epiléptico convulsivo: tras ABC y acceso venoso, la primera línea farmacológica son benzodiacepinas IV (lorazepam o diazepam), no fenitoína ni propofol.

¿Qué está ocurriendo realmente?
- Hombre de 25 años sin antecedentes, convulsión tónico-clónica generalizada 12 minutos.
- No recupera conciencia entre episodios convulsivos.
- Estatus epiléptico convulsivo (≥5 min debe tratarse como tal).

¿Qué dato es clave en el examen?
- Convulsión ≥5 min o sin recuperación de conciencia = estatus epiléptico.
- Secuencia: ABC + glucemia capilar → benzodiacepina IV (lorazepam/diazepam) → 2.ª línea → refractario.
- Benzodiacepinas potencian GABA; son tratamiento de primera línea.
- Fenitoína, levetiracetam, valproato: segunda línea.
- Propofol: estatus refractario con anestesia, no primera medida.

¿Por qué fallan las otras opciones?
- Fenitoína IV como primera medida: es segunda línea, no inicial.
- Propofol inmediato: reservado para estatus refractario tras fallar BZD + 2.ª línea.
- Levetiracetam oral: vía oral inadecuada en convulsión activa; no es primera línea.

Clave: convulsión >5 min sin recuperar conciencia = lorazepam/diazepam IV primero, no fenitoína.

URGENTES — BY DR Q.
Estatus epiléptico convulsivo

La clave: el paciente no recupera la conciencia entre las crisis.

Convulsión prolongada + persistencia de actividad epiléptica = estatus epiléptico (≥ 5 min debe tratarse como tal).

Secuencia:
1. ABC + glucemia capilar.
2. Benzodiacepina IV (lorazepam o diazepam) — potencian GABA.
3. Segunda línea: levetiracetam, valproato o fosfenitoína.
4. Refractario: anestésicos (propofol).

Trampa: iniciar fenitoína como primera línea. La fenitoína es segunda línea.

Referencias: Neurocritical Care Society; American Epilepsy Society; UpToDate: Convulsive Status Epilepticus.`,
  },
  {
    id: "dr-q-85",
    examArea: "Medicina Interna / Nefrología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "nefrologia", "hiperpotasemia", "electrolitos", "urgencias"],
    statement:
      "Paciente de 60 años con enfermedad renal crónica estadio 4, consulta por debilidad muscular progresiva. Al examen físico se encuentra hemodinámicamente estable. ECG: ondas T picudas y simétricas, desaparición de la onda P y ensanchamiento del complejo QRS. Potasio sérico: 7.4 mEq/L. ¿Cuál es la intervención terapéutica inicial para prevenir una arritmia fatal?",
    options: [
      { id: "A", label: "A", text: "Administrar insulina regular con dextrosa." },
      { id: "B", label: "B", text: "Iniciar hemodiálisis urgente." },
      { id: "C", label: "C", text: "Administrar gluconato de calcio intravenoso." },
      { id: "D", label: "D", text: "Administrar salbutamol nebulizado." },
    ],
    correctOptionId: "C",
    explanation:
      "Hiperpotasemia grave con cambios electrocardiográficos que amenazan la vida. La primera medida es estabilizar la membrana miocárdica mediante calcio intravenoso.",
    keyPoints: [
      "Potasio > 6.5 + cambios ECG → hiperpotasemia grave con toxicidad cardíaca.",
      "El calcio estabiliza la membrana cardíaca; no disminuye el potasio sérico.",
      "Después del calcio: insulina + dextrosa, salbutamol, diálisis según contexto.",
      "Ondas T picudas = hallazgo temprano; QRS ancho = mayor gravedad.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa hiperpotasemia grave con cambios ECG: la primera medida es gluconato de calcio IV para estabilizar membrana miocárdica — no baja K+, pero previene arritmia fatal.

¿Qué está ocurriendo realmente?
- Paciente de 60 años, ERC estadio 4, debilidad muscular progresiva.
- K+ 7.4 mEq/L; ECG: T picudas simétricas, onda P ausente, QRS ensanchado.
- Hiperpotasemia grave con toxicidad cardíaca inminente.

¿Qué dato es clave en el examen?
- K+ >6.5 + cambios ECG = emergencia con riesgo de arritmia letal.
- Gluconato de calcio IV primero: estabiliza membrana; no disminuye K+ sérico.
- Después: insulina + dextrosa, salbutamol (redistribución intracelular).
- Eliminación: diálisis definitiva en ERC avanzada.
- Insulina baja K+ pero no protege corazón inmediatamente.

¿Por qué fallan las otras opciones?
- Insulina + dextrosa primero: baja K+ pero no estabiliza membrana de inmediato.
- Hemodiálisis urgente: indicada pero después de calcio; no es primera medida en paro inminente.
- Salbutamol nebulizado: redistribución lenta; no protege membrana como calcio.

Clave: K+ 7.4 + QRS ancho = calcio IV primero, siempre; luego insulina/diálisis.

URGENTES — BY DR Q.
Hiperpotasemia grave con cambios ECG

La clave no es el valor del potasio; la clave son los cambios electrocardiográficos.

Prioridad: proteger el corazón antes de disminuir el potasio.

Secuencia:
1. Gluconato de calcio IV (estabiliza membrana; no baja K+).
2. Redistribución intracelular: insulina + dextrosa, salbutamol.
3. Eliminación: diuréticos, resinas, hemodiálisis (definitivo en ERC avanzada).

Trampa: responder insulina + dextrosa primero. La insulina baja K+ pero no protege inmediatamente al corazón.

Referencias: KDIGO; Harrison's; UpToDate: Hyperkalemia; European Resuscitation Council.`,
  },
  {
    id: "dr-q-86",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "stemi", "iamcest", "reperfusion"],
    statement:
      "Paciente de 55 años consulta por dolor torácico opresivo de 60 minutos de evolución, irradiado a miembro superior izquierdo y acompañado de diaforesis. ECG: elevación del segmento ST de 3 mm en V1-V4. PA 130/80 mmHg, FC 90 lpm. ¿Cuál es el objetivo principal del manejo inicial?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Disminuir el consumo miocárdico de oxígeno mediante betabloqueadores.",
      },
      {
        id: "B",
        label: "B",
        text: "Lograr la reperfusión coronaria lo más rápido posible.",
      },
      { id: "C", label: "C", text: "Controlar el dolor con opioides intravenosos." },
      {
        id: "D",
        label: "D",
        text: "Prevenir arritmias ventriculares mediante amiodarona profiláctica.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "IAM con elevación del ST (IAMCEST) de localización anterior. El objetivo principal del manejo inicial es restaurar el flujo coronario para limitar el tamaño del infarto y preservar miocardio viable.",
    keyPoints: [
      "Dolor típico + elevación del ST en derivaciones contiguas → IAMCEST.",
      "El IAMCEST es una emergencia de reperfusión: tiempo es músculo.",
      "Angioplastia primaria preferida; fibrinólisis si PCI no disponible oportunamente.",
      "Aspirina, analgesia y betabloqueadores son coadyuvantes, no el objetivo principal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa IAMCEST anterior: el objetivo principal del manejo inicial es reperfusión coronaria lo más rápido posible — tiempo es músculo, no betabloqueadores ni analgesia como prioridad.

¿Qué está ocurriendo realmente?
- Paciente de 55 años, dolor opresivo 60 min, irradiado a MSI, diaforesis.
- ECG: elevación ST 3 mm en V1-V4 (IAMCEST anterior).
- PA 130/80, FC 90: hemodinámicamente estable pero con oclusión coronaria aguda.

¿Qué dato es clave en el examen?
- Dolor típico + elevación ST en derivaciones contiguas = IAMCEST.
- Oclusión coronaria → isquemia transmural → necrosis progresiva.
- Objetivo principal: reabrir arteria culpable (PCI primaria o fibrinólisis).
- Angioplastia primaria preferida; fibrinólisis si PCI no disponible en ≤120 min.
- Aspirina, morfina, betabloqueadores: coadyuvantes, no el objetivo principal.

¿Por qué fallan las otras opciones?
- Betabloqueadores para ↓ consumo O2: útil pero secundario; no reperfunde.
- Control del dolor con opioides: alivia síntomas, no restaura flujo coronario.
- Amiodarona profiláctica: no es objetivo principal en IAMCEST agudo.

Clave: elevación ST + dolor típico = reperfusión urgente; no elijas medidas secundarias como objetivo principal.

CARDIOLOGÍA — BY DR Q.
IAM con elevación del ST

La clave no es la localización; la clave es el tiempo.

Oclusión coronaria aguda → isquemia transmural → necrosis progresiva. Elevación del ST = oclusión completa.

Objetivo principal: reabrir la arteria culpable (PCI primaria o fibrinólisis).

Trampa: elegir medidas útiles pero secundarias (morfina, betabloqueadores, amiodarona) cuando la pregunta pide el objetivo principal.

Secuencia: reconocer IAMCEST → activar reperfusión → antitrombóticos → restaurar flujo → prevenir complicaciones.

Referencias: ESC STEMI Guidelines; AHA Guidelines; Braunwald's Heart Disease; UpToDate: STEMI.`,
  },
  {
    id: "dr-q-87",
    examArea: "Medicina Interna / Infectología / Neurología",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "meningitis", "snc", "puncion_lumbar"],
    statement:
      "Paciente de 35 años consulta por fiebre, cefalea intensa y rigidez nucal de varios días de evolución. Tiene antecedente de infección por VIH sin tratamiento antirretroviral. Al examen físico se encuentra somnoliento y presenta ptosis palpebral derecha. ¿Cuál es la conducta inicial correcta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar ceftriaxona y vancomicina inmediatamente sin estudios adicionales.",
      },
      {
        id: "B",
        label: "B",
        text: "Realizar punción lumbar de forma inmediata antes de cualquier imagen.",
      },
      {
        id: "C",
        label: "C",
        text: "Solicitar tomografía cerebral antes de realizar la punción lumbar.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar dexametasona y dar de alta con seguimiento ambulatorio.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Síndrome meníngeo con alteración del estado de conciencia, inmunosupresión y focalización neurológica. Debe descartarse lesión ocupante de espacio o hipertensión intracraneal antes de la punción lumbar.",
    keyPoints: [
      "Síndrome meníngeo + alteración mental + déficit focal + inmunosupresión → neuroimagen antes de PL.",
      "La PL en hipertensión intracraneal puede causar herniación cerebral.",
      "VIH sin tratamiento aumenta riesgo de lesiones focales (toxoplasmosis, linfoma).",
      "El tratamiento empírico no debe retrasarse, pero la PL requiere seguridad diagnóstica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa cuándo hacer TAC antes de punción lumbar: ptosis + somnolencia + VIH sin TARV = posible lesión ocupante de espacio — la PL puede causar herniación.

¿Qué está ocurriendo realmente?
- Paciente de 35 años, fiebre, cefalea intensa, rigidez nucal varios días.
- VIH sin tratamiento antirretroviral; somnoliento con ptosis palpebral derecha (focalización).
- Síndrome meníngeo con signos de alerta para TAC antes de PL.

¿Qué dato es clave en el examen?
- Indicaciones TAC antes de PL: alteración mental, déficit focal, papiledema, convulsiones recientes, inmunosupresión.
- Ptosis + VIH sin TARV: riesgo toxoplasmosis, linfoma CNS (lesión ocupante).
- PL con efecto de masa puede provocar herniación cerebral.
- ATB empírico no debe retrasarse, pero PL requiere seguridad diagnóstica.
- PL inmediata sin imagen: trampa clásica cuando hay focalización.

¿Por qué fallan las otras opciones?
- Ceftriaxona + vanco sin estudios: ATB sí, pero PL sin TAC es peligrosa con focalización.
- PL inmediata antes de imagen: contraindicada con déficit focal + inmunosupresión.
- Dexametasona + alta ambulatoria: meningitis con focalización requiere hospitalización e imagen.

Clave: meningitis + focalización + VIH = TAC antes de PL; no hernies al paciente.

INFECTOLOGÍA — BY DR Q.
Meningitis · cuándo hacer TAC antes de PL

La clave no es la fiebre; la clave es la focalización neurológica.

Ptosis + somnolencia + VIH sin TARV sugieren posible lesión ocupante de espacio. La PL con efecto de masa puede provocar herniación.

Indicaciones de TAC antes de PL:
• Alteración del estado mental.
• Déficit neurológico focal.
• Papiledema.
• Convulsiones recientes.
• Inmunosupresión significativa.

Trampa: meningitis = PL inmediata siempre. En presencia de signos de alerta, la neuroimagen precede.

Referencias: IDSA Bacterial Meningitis Guidelines; Mandell; UpToDate: Suspected Meningitis.`,
  },
  {
    id: "dr-q-88",
    examArea: "Medicina Interna / Cardiología / Nefrología",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hipertension", "emergencia_hipertensiva", "urgencias"],
    statement:
      "Paciente de 60 años consulta por cefalea intensa y visión borrosa. Al examen físico presenta PA 230/130 mmHg. Laboratorios: creatinina 2.5 mg/dL (basal 1.0 mg/dL). Fondo de ojo con retinopatía hipertensiva avanzada. ¿Cuál es la meta de reducción de la presión arterial durante la primera hora de tratamiento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reducir la presión arterial hasta valores normales (<120/80 mmHg).",
      },
      {
        id: "B",
        label: "B",
        text: "Disminuir la presión arterial media aproximadamente un 20-25% durante la primera hora.",
      },
      {
        id: "C",
        label: "C",
        text: "Reducir la presión arterial sistólica por debajo de 140 mmHg en los primeros 30 minutos.",
      },
      {
        id: "D",
        label: "D",
        text: "Reducir la presión arterial diastólica por debajo de 90 mmHg en la primera hora.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Emergencia hipertensiva con lesión aguda de órgano diana (insuficiencia renal aguda e hipertensión severa). La reducción de la presión arterial debe ser controlada y progresiva para evitar hipoperfusión de órganos vitales.",
    keyPoints: [
      "Emergencia hipertensiva = hipertensión severa + daño agudo de órgano diana.",
      "No normalizar la PA de forma brusca; riesgo de isquemia cerebral, miocárdica y renal.",
      "Meta inicial: reducir PAM ~20-25% en la primera hora.",
      "Fármacos IV: nicardipino, labetalol, nitroprusiato según escenario.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa emergencia hipertensiva: PA 230/130 con LRA aguda y retinopatía — meta inicial ↓ PAM 20-25% en la primera hora, no normalizar bruscamente.

¿Qué está ocurriendo realmente?
- Paciente de 60 años, cefalea intensa, visión borrosa.
- PA 230/130; creatinina 2.5 (basal 1.0), retinopatía hipertensiva avanzada.
- Emergencia hipertensiva con lesión aguda de órgano diana (renal + ocular).

¿Qué dato es clave en el examen?
- Emergencia hipertensiva = hipertensión severa + daño agudo de órgano diana.
- No normalizar PA bruscamente: riesgo isquemia cerebral, miocárdica y renal por pérdida de autorregulación.
- Meta primera hora: reducir PAM ~20-25%.
- Descenso gradual en horas siguientes hacia meta ambulatoria.
- Fármacos IV: nicardipino, labetalol, nitroprusiato según escenario.

¿Por qué fallan las otras opciones?
- PA <120/80 inmediato: descenso brusco → isquemia de órganos con autorregulación crónica alterada.
- PAS <140 en 30 min: demasiado rápido y agresivo para primera hora.
- PAD <90 en primera hora: meta incorrecta; se usa reducción porcentual de PAM.

Clave: emergencia hipertensiva + LRA = ↓ PAM 20-25% en 1 h, no normalices de golpe.

URGENTES — BY DR Q.
Emergencia hipertensiva

La clave: daño agudo de órgano diana, no solo el valor de la PA.

Hipertensión severa + cefalea + alteración visual + LRA aguda = emergencia hipertensiva.

Reducción brusca → isquemia por pérdida de autorregulación vascular crónica.

Meta primera hora: ↓ PAM 20-25%. Descenso gradual en horas siguientes.

Trampa: bajar la PA a normal inmediatamente. La velocidad de descenso es tan importante como el objetivo.

Referencias: European Society of Hypertension; AHA; UpToDate: Hypertensive Emergencies.`,
  },
  {
    id: "dr-q-89",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "eap", "insuficiencia_cardiaca", "urgencias"],
    statement:
      "Paciente de 68 años con antecedente de hipertensión arterial consulta por disnea severa de inicio súbito. Refiere ortopnea y sensación de ahogo progresiva. Al examen físico: PA 190/110 mmHg, FC 115 lpm, SatO₂ 84% al aire ambiente. Presenta estertores crepitantes bilaterales hasta campos medios y uso de musculatura accesoria. ¿Qué medida terapéutica impacta más rápidamente en la precarga y postcarga?",
    options: [
      { id: "A", label: "A", text: "Furosemida intravenosa." },
      { id: "B", label: "B", text: "Nitroglicerina intravenosa." },
      { id: "C", label: "C", text: "Dobutamina intravenosa." },
      { id: "D", label: "D", text: "Digoxina intravenosa." },
    ],
    correctOptionId: "B",
    explanation:
      "Edema agudo de pulmón hipertensivo. Los nitratos intravenosos producen una rápida reducción de la precarga y, a dosis mayores, también disminuyen la postcarga, mejorando rápidamente la congestión pulmonar.",
    keyPoints: [
      "Disnea súbita + ortopnea + estertores + hipoxemia + hipertensión → EAP cardiogénico.",
      "Nitroglicerina: venodilatación (↓ precarga) y vasodilatación arterial a dosis altas (↓ postcarga).",
      "Furosemida es importante pero su efecto hemodinámico tarda más.",
      "Dobutamina para bajo gasto/choque; digoxina no tiene utilidad aguda en EAP.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa edema agudo de pulmón hipertensivo: nitroglicerina IV impacta más rápido en precarga y postcarga que furosemida — actúa en minutos por venodilatación.

¿Qué está ocurriendo realmente?
- Paciente de 68 años, disnea severa súbita, ortopnea, sensación de ahogo.
- PA 190/110, FC 115, SatO2 84%; estertores bilaterales hasta campos medios.
- EAP cardiogénico hipertensivo: ↑ presiones de llenado VI → congestión pulmonar.

¿Qué dato es clave en el examen?
- Disnea súbita + ortopnea + estertores + hipoxemia + hipertensión = EAP cardiogénico.
- Nitroglicerina IV: venodilatación (↓ precarga) + vasodilatación arterial a dosis altas (↓ postcarga).
- Actúa en minutos; impacto hemodinámico más rápido que furosemida.
- Furosemida elimina volumen pero efecto hemodinámico tarda más.
- Dobutamina para bajo gasto/choque; digoxina sin utilidad aguda en EAP.

¿Por qué fallan las otras opciones?
- Furosemida IV: importante pero no modifica tan rápido precarga/postcarga como nitratos.
- Dobutamina: indicada en bajo gasto/choque, no en EAP hipertensivo con PA 190/110.
- Digoxina: no tiene beneficio agudo en descompensación de EAP.

Clave: EAP hipertensivo = nitroglicerina IV primero (↓ precarga/postcarga en minutos), luego diuréticos.

CARDIOLOGÍA — BY DR Q.
Edema agudo de pulmón hipertensivo

La clave: hipertensión severa + congestión pulmonar.

↑ presiones de llenado del VI → ↑ presión hidrostática pulmonar → líquido en alvéolos.

Objetivo inmediato: ↓ precarga y postcarga. Nitroglicerina IV actúa en minutos (venodilatación + vasodilatación arterial).

Trampa: responder furosemida porque se asocia con edema pulmonar. La furosemida elimina volumen pero no modifica tan rápido la hemodinamia.

Secuencia: oxigenación → nitratos IV → diuréticos según situación → corregir causa.

Referencias: ESC Acute Heart Failure Guidelines; Braunwald's; UpToDate: Acute Decompensated HF.`,
  },
  {
    id: "dr-q-90",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "choque_cardiogenico", "iam", "urgencias"],
    statement:
      "Paciente de 64 años hospitalizado por infarto agudo de miocardio de cara anterior. Durante su evolución presenta PA 80/50 mmHg, frecuencia cardíaca 115 lpm, llenado capilar de 4 segundos, oliguria y estertores bilaterales en ambos campos pulmonares. ¿Cuál es la conducta más apropiada?",
    options: [
      { id: "A", label: "A", text: "Administrar bolo rápido de solución salina al 0.9%." },
      {
        id: "B",
        label: "B",
        text: "Iniciar nitroglicerina intravenosa para disminuir la congestión pulmonar.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar soporte inotrópico urgente y activar estrategia de reperfusión/revascularización.",
      },
      { id: "D", label: "D", text: "Administrar furosemida como única medida inicial." },
    ],
    correctOptionId: "C",
    explanation:
      "Choque cardiogénico secundario a infarto agudo de miocardio. La prioridad es restaurar la perfusión sistémica y corregir la causa subyacente mediante revascularización precoz.",
    keyPoints: [
      "IAM + hipotensión + oliguria + congestión pulmonar = choque cardiogénico.",
      "Hipoperfusión + congestión pulmonar simultáneas definen el cuadro.",
      "Revascularización precoz mejora supervivencia.",
      "Líquidos y nitratos pueden empeorar congestión o hipoperfusión.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa choque cardiogénico post-IAM: hipoperfusión + congestión pulmonar simultáneas — soporte inotrópico urgente y revascularización, no líquidos ni nitratos.

¿Qué está ocurriendo realmente?
- Paciente de 64 años, IAM cara anterior en evolución.
- PA 80/50, FC 115, llenado capilar 4 s, oliguria, estertores bilaterales.
- Choque cardiogénico: hipoperfusión sistémica + edema pulmonar simultáneos.

¿Qué dato es clave en el examen?
- IAM + hipotensión + oliguria + congestión = choque cardiogénico.
- Infarto extenso → ↓ función VI → ↓ gasto cardíaco + edema pulmonar.
- Prioridades: 1) soporte inotrópico/hemodinámico; 2) revascularización urgente.
- Revascularización precoz = mayor impacto en supervivencia.
- Líquidos empeoran congestión; nitratos agravan hipotensión; solo diuréticos no corrigen bajo gasto.

¿Por qué fallan las otras opciones?
- Bolo SF 0.9%: empeora congestión pulmonar con estertores bilaterales.
- Nitroglicerina IV: agrava hipotensión (PA 80/50) en choque cardiogénico.
- Furosemida sola: no corrige bajo gasto cardíaco; necesita inotrópico + reperfusión.

Clave: post-IAM + shock + estertores = inotrópico + revascularización urgente, no volumen ni nitratos.

CARDIOLOGÍA — BY DR Q.
Choque cardiogénico post-IAM

La clave: hipoperfusión + congestión pulmonar.

Infarto extenso → ↓ función VI → ↓ gasto cardíaco + edema pulmonar + hipoperfusión sistémica.

Prioridades:
1. Soporte inotrópico/hemodinámico.
2. Revascularización urgente (reperfusión = mayor impacto en supervivencia).

Trampas:
• Líquidos: empeoran congestión pulmonar.
• Nitratos: agravan hipotensión.
• Solo diuréticos: no corrigen bajo gasto cardíaco.

Referencias: ESC ACS Guidelines; AHA STEMI and Cardiogenic Shock; UpToDate: Cardiogenic Shock.`,
  },
  {
    id: "dr-q-91",
    examArea: "Ginecología y Obstetricia / Urgencias",
    topic: "Ginecología y Obstetricia",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ginecologia", "obstetricia", "embarazo_ectopico", "urgencias"],
    statement:
      "Mujer de 26 años, G2P1, consulta al servicio de urgencias por dolor abdominal bajo de aparición súbita irradiado a hombro derecho. Refiere amenorrea de 7 semanas. Al examen físico se encuentra pálida y diaforética. Signos vitales: TA 80/50 mmHg, FC 125 lpm, FR 22 rpm. Abdomen con resistencia muscular y signos de irritación peritoneal difusa. Tacto vaginal: dolor intenso a la movilización cervical y abombamiento del fondo de saco de Douglas. Prueba de embarazo positiva. Ecografía FAST a pie de cama: útero vacío y abundante líquido libre ecogénico intraabdominal. ¿Cuál es la conducta inicial más apropiada?",
    options: [
      { id: "A", label: "A", text: "Solicitar β-hCG cuantitativa seriada y observación hospitalaria." },
      { id: "B", label: "B", text: "Administrar metotrexato intramuscular." },
      { id: "C", label: "C", text: "Realizar laparoscopia diagnóstica programada." },
      {
        id: "D",
        label: "D",
        text: "Reanimación hemodinámica inmediata y laparotomía exploratoria urgente.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "Embarazo ectópico roto con choque hemorrágico e irritación peritoneal generalizada. La prioridad es estabilización hemodinámica y control quirúrgico urgente de la hemorragia.",
    keyPoints: [
      "Amenorrea + embarazo positivo + útero vacío + líquido libre + inestabilidad → embarazo ectópico roto.",
      "Hipotensión y taquicardia indican choque hemorrágico.",
      "Dolor en hombro = irritación diafragmática por hemoperitoneo (signo de Kehr).",
      "Metotrexato contraindicado en pacientes inestables con hemoperitoneo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa embarazo ectópico roto con choque hemorrágico: útero vacío + embarazo positivo + líquido libre + hipotensión = reanimación y laparotomía urgente, no metotrexato.

¿Qué está ocurriendo realmente?
- Mujer de 26 años, amenorrea 7 semanas, embarazo positivo.
- Dolor abdominal bajo súbito irradiado a hombro derecho (signo de Kehr).
- TA 80/50, FC 125; irritación peritoneal difusa, Douglas abombado.
- FAST: útero vacío + abundante líquido libre ecogénico (hemoperitoneo).

¿Qué dato es clave en el examen?
- Amenorrea + embarazo (+) + útero vacío + líquido libre + inestabilidad = embarazo ectópico roto.
- Hipotensión y taquicardia = choque hemorrágico; prioridad reanimación + cirugía.
- Metotrexato solo en pacientes estables sin ruptura ni hemoperitoneo.
- No retrasar por β-hCG seriada en paciente inestable.
- En inestabilidad, laparotomía suele ser más rápida que laparoscopia programada.

¿Por qué fallan las otras opciones?
- β-hCG seriada + observación: retrasa tratamiento en choque hemorrágico.
- Metotrexato IM: contraindicado con ruptura e inestabilidad hemodinámica.
- Laparoscopia programada: demora inaceptable en choque; necesita cirugía urgente.

Clave: ectópico roto + shock = reanimación + laparotomía ya; no metotrexato ni observación.

GINECOOBSTETRICIA — BY DR Q.
Embarazo ectópico roto

La clave: choque hemorrágico, no la amenorrea.

Útero vacío + embarazo positivo + líquido libre ecogénico + hipotensión = embarazo ectópico roto con hemoperitoneo.

Prioridad: reanimación (accesos venosos, cristaloides, hemoderivados) + cirugía urgente para control del sangrado.

Trampas:
• Metotrexato solo en pacientes estables sin ruptura.
• No retrasar por β-hCG seriada.
• En inestabilidad, laparotomía suele ser más rápida que laparoscopia.

Referencias: Williams Obstetrics; ACOG Tubal Ectopic Pregnancy; UpToDate: Ectopic Pregnancy Management.`,
  },
  {
    id: "dr-q-92",
    examArea: "Ginecología y Obstetricia / Trastornos hipertensivos",
    topic: "Ginecología y Obstetricia",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ginecologia", "obstetricia", "preeclampsia", "hellp"],
    statement:
      "Primigestante de 17 años, con embarazo de 33 semanas confirmado por ecografía de primer trimestre, es llevada a urgencias por cefalea occipital intensa y fosfenos de 6 horas de evolución. Refiere además dolor epigástrico tipo ardor. Al ingreso presenta TA 165/115 mmHg (confirmada 15 minutos después), FC 90 lpm. Al examen físico se documenta hiperreflexia patelar (+++/++++), dolor a la palpación profunda en hipocondrio derecho. RCTG: feto reactivo sin desaceleraciones. Laboratorios: AST 180 U/L, ALT 210 U/L, plaquetas 75.000/μL, creatinina 1.1 mg/dL. ¿Cuál es el siguiente paso más apropiado en el manejo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Manejo expectante con vigilancia materno-fetal hasta completar 37 semanas.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar sulfato de magnesio, controlar la hipertensión e iniciar finalización del embarazo una vez estabilizada la madre.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar corticoides para maduración pulmonar y dar egreso con seguimiento estrecho.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar proteinuria de 24 horas antes de establecer conducta definitiva.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Preeclampsia con criterios de gravedad asociada a síndrome HELLP. Estabilizar a la madre con sulfato de magnesio y antihipertensivos, y proceder a la finalización del embarazo independientemente del bienestar fetal.",
    keyPoints: [
      "TA ≥160/110 + cefalea + fosfenos + epigastralgia + plaquetas <100.000 + transaminasas elevadas → preeclampsia grave con HELLP.",
      "Sulfato de magnesio previene eclampsia.",
      "La única cura definitiva es la finalización del embarazo.",
      "La proteinuria no es indispensable cuando existe daño orgánico materno evidente.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa preeclampsia grave con HELLP a las 33 semanas: sulfato de magnesio + control PA + finalización del embarazo tras estabilizar — no conducta expectante ni proteinuria 24 h.

¿Qué está ocurriendo realmente?
- Primigestante 17 años, 33 semanas; cefalea occipital, fosfenos, epigastralgia 6 h.
- TA 165/115 confirmada; hiperreflexia ++++, dolor hipocondrio derecho.
- AST 180, ALT 210, plaquetas 75,000; RCTG fetal reactivo.

¿Qué dato es clave en el examen?
- TA ≥160/110 + cefalea + fosfenos + epigastralgia + plaquetas <100,000 + transaminasas ↑ = preeclampsia grave con HELLP.
- Sulfato de magnesio previene eclampsia.
- Única cura definitiva: finalización del embarazo.
- No conducta expectante a 33 semanas con HELLP; condición materna tiene prioridad sobre bienestar fetal.
- Proteinuria 24 h no es indispensable con daño orgánico evidente.

¿Por qué fallan las otras opciones?
- Expectante hasta 37 semanas: contraindicado con HELLP y criterios de gravedad.
- Corticoides + egreso: riesgo eclampsia, CID, desprendimiento placentario, muerte materna.
- Proteinuria 24 h antes de decidir: retrasa tratamiento con daño orgánico ya documentado.

Clave: HELLP + TA 165/115 + síntomas neurológicos = MgSO4 + finalizar embarazo, no esperes 37 semanas.

GINECOOBSTETRICIA — BY DR Q.
Preeclampsia grave con HELLP

La clave: daño orgánico materno, no solo la presión arterial.

HELLP: plaquetas <100.000 + transaminasas elevadas + (hemólisis). Riesgo de eclampsia, CID, desprendimiento placentario y muerte materna.

Conducta: sulfato de magnesio + control de PA + finalización del embarazo tras estabilización. No conducta expectante a las 33 semanas con HELLP.

Trampa: prolongar gestación por edad gestacional o bienestar fetal normal. La condición materna tiene prioridad.

Referencias: ACOG Gestational Hypertension and Preeclampsia; Williams Obstetrics; UpToDate: HELLP Syndrome.`,
  },
  {
    id: "dr-q-93",
    examArea: "Ginecología y Obstetricia / Hemorragias obstétricas",
    topic: "Ginecología y Obstetricia",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ginecologia", "obstetricia", "dppni", "hemorragia"],
    statement:
      "Mujer de 35 años, G4P3, con embarazo de 36 semanas y antecedente de tabaquismo pesado, consulta por inicio súbito de dolor abdominal intenso y continuo, acompañado de sangrado vaginal rojo oscuro de moderada cantidad. Al examen físico: TA 150/90 mmHg, FC 110 lpm. Se evidencia útero hipertónico (\"leñoso\"), doloroso a la palpación y que no relaja entre contracciones. La altura uterina actual es de 38 cm, habiendo sido de 34 cm en el control previo. La cardiotocografía muestra frecuencia cardíaca fetal basal de 100 lpm, pérdida de la variabilidad y desaceleraciones tardías repetitivas. ¿Cuál es el diagnóstico más probable y la conducta inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Placenta previa sangrante; realizar ecografía transvaginal urgente antes de cualquier intervención.",
      },
      {
        id: "B",
        label: "B",
        text: "Desprendimiento prematuro de placenta normoinserta (DPPNI) grave; estabilización materna y cesárea urgente.",
      },
      {
        id: "C",
        label: "C",
        text: "Rotura uterina; inducción del trabajo de parto para finalizar rápidamente la gestación.",
      },
      {
        id: "D",
        label: "D",
        text: "Trabajo de parto pretérmino con sufrimiento fetal; administrar tocolíticos y corticoides antenatales.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Cuadro clásico de DPPNI grave: dolor abdominal intenso, sangrado oscuro, útero leñoso, aumento de altura uterina por hematoma retroplacentario y compromiso fetal agudo. Estabilización materna y cesárea urgente.",
    keyPoints: [
      "DPPNI: dolor intenso + útero leñoso + sangrado oscuro + sufrimiento fetal.",
      "Placenta previa: sangrado rojo brillante, indoloro, útero blando.",
      "El DPPNI es diagnóstico clínico; la ecografía no debe retrasar la intervención.",
      "Tabaquismo es factor de riesgo importante para DPPNI.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa DPPNI grave: dolor intenso + útero leñoso + sangrado oscuro + sufrimiento fetal = cesárea urgente sin esperar ecografía.

¿Qué está ocurriendo realmente?
- Mujer 35 años, 36 semanas, tabaquismo; dolor abdominal intenso continuo + sangrado rojo oscuro.
- Útero hipertónico ("leñoso"), altura uterina 38 cm (antes 34 cm) = hematoma retroplacentario.
- CTG: FCF 100 lpm, variabilidad perdida, desaceleraciones tardías repetitivas.

¿Qué dato es clave en el examen?
- DPPNI: dolor intenso + útero leñoso + sangrado oscuro + sufrimiento fetal agudo.
- Placenta previa: sangrado rojo brillante, indoloro, útero blando (cuadro opuesto).
- DPPNI es diagnóstico clínico; ecografía no debe retrasar intervención.
- Separación placentaria → hematoma → ↑ presión intrauterina → hipoxia fetal.
- Tabaquismo es factor de riesgo importante.

¿Por qué fallan las otras opciones?
- Placenta previa + eco transvaginal: cuadro es doloroso con útero leñoso, no previa.
- Rotura uterina + inducción: inducción empeoraría sufrimiento fetal agudo.
- TPP + tocolíticos: tocolizar en DPPNI con bradicardia es contraindicado.

Clave: dolor + útero leñoso + sangrado oscuro + CTG malo = DPPNI → cesárea ya, no eco.

GINECOOBSTETRICIA — BY DR Q.
Desprendimiento prematuro de placenta normoinserta (DPPNI)

La clave: dolor + hipertonía uterina, no solo el sangrado.

Separación prematura de placenta normoinserta → hematoma retroplacentario → ↑ presión intrauterina → hipoxia fetal aguda.

Hallazgos: dolor brusco, útero leñoso, sangrado oscuro (puede subestimar hemorragia), ↑ altura uterina, CTG con bradicardia/desaceleraciones tardías.

Conducta: estabilización materna + cesárea urgente. No esperar ecografía.

Referencias: Williams Obstetrics; ACOG Placental Abruption; UpToDate: Placental Abruption.`,
  },
  {
    id: "dr-q-94",
    examArea: "Ginecología y Obstetricia / Hemorragia posparto",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia", "obstetricia", "hpp", "atonia_uterina"],
    statement:
      "Mujer de 28 años, con diagnóstico de hipertensión gestacional en seguimiento prenatal, acaba de tener un parto vaginal de un recién nacido macrosómico de 4.200 g tras 14 horas de trabajo de parto y uso de oxitocina. Quince minutos después del alumbramiento presenta sangrado vaginal profuso. Al examen físico: TA 150/95 mmHg, FC 115 lpm. Se palpa un fondo uterino supraumbilical, flácido y de consistencia blanda. Se realiza masaje uterino bimanual y se optimiza la infusión de oxitocina sin lograr control del sangrado. ¿Cuál es el uterotónico de segunda línea más adecuado y seguro como siguiente paso?",
    options: [
      { id: "A", label: "A", text: "Metilergonovina." },
      { id: "B", label: "B", text: "Misoprostol." },
      { id: "C", label: "C", text: "Carboprost trometamina." },
      { id: "D", label: "D", text: "Ácido tranexámico." },
    ],
    correctOptionId: "B",
    explanation:
      "Hemorragia posparto por atonía uterina. Antecedente de hipertensión gestacional contraindica metilergonovina por riesgo de crisis hipertensiva. El misoprostol es una alternativa segura y eficaz como uterotónico de segunda línea.",
    keyPoints: [
      "Atonía uterina: sangrado + útero blando + fondo uterino elevado.",
      "Secuencia: masaje uterino → oxitocina → segundo uterotónico.",
      "Metilergonovina contraindicada en hipertensión gestacional/preeclampsia.",
      "Misoprostol es alternativa segura en pacientes hipertensas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa HPP por atonía con HTA gestacional: metilergonovina está contraindicada por vasoconstricción — misoprostol es uterotónico de 2.ª línea seguro en hipertensas.

¿Qué está ocurriendo realmente?
- Mujer 28 años, HTA gestacional, parto vaginal de RN macrosómico 4.200 g.
- Trabajo de parto 14 h + oxitocina; sangrado profuso 15 min post-alumbramiento.
- Fondo uterino supraumbilical, flácido, blando; masaje + oxitocina sin control.

¿Qué dato es clave en el examen?
- Atonía uterina: sangrado + útero blando + fondo uterino elevado.
- Secuencia: masaje uterino → oxitocina → segundo uterotónico.
- Metilergonovina: vasoconstricción intensa → contraindicada en HTA gestacional/preeclampsia.
- Misoprostol: ↑ tono uterino sin riesgo significativo de crisis hipertensiva.
- Ácido tranexámico no es uterotónico (es antifibrinolítico complementario).

¿Por qué fallan las otras opciones?
- Metilergonovina: excelente uterotónico pero contraindicada con HTA gestacional.
- Carboprost: también puede elevar PA; menos preferido que misoprostol en hipertensas.
- Ácido tranexámico solo: no corrige atonía; no sustituye uterotónico de 2.ª línea.

Clave: atonía + HTA gestacional = misoprostol como 2.ª línea, no metilergonovina.

GINECOOBSTETRICIA — BY DR Q.
Hemorragia posparto por atonía uterina

La clave: hipertensión gestacional al elegir el segundo uterotónico.

Factores de riesgo en el caso: trabajo de parto prolongado, oxitocina prolongada, macrosomía → fatiga miometrial.

Metilergonovina: excelente uterotónico pero vasoconstricción intensa → contraindicada en HTA gestacional/preeclampsia.

Misoprostol: ↑ tono uterino sin riesgo significativo de crisis hipertensiva. Ácido tranexámico no es uterotónico.

Trampa: atonía → metilergonovina sin revisar comorbilidades.

Referencias: ACOG Postpartum Hemorrhage; WHO PPH Guidelines; Williams Obstetrics.`,
  },
  {
    id: "dr-q-95",
    examArea: "Ginecología y Obstetricia / Urgencias ginecológicas",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia", "torsión_ovarica", "urgencias"],
    statement:
      "Mujer de 24 años, sin antecedentes de importancia, consulta por dolor abdominal bajo de aparición súbita, localizado predominantemente en fosa ilíaca derecha, de intensidad severa, tipo punzante, que la despertó durante la noche. Se acompaña de náuseas y dos episodios de vómito. Al examen físico presenta dolor a la palpación profunda en fosa ilíaca derecha con defensa voluntaria, sin signos claros de irritación peritoneal. Ecografía transvaginal: útero normal, ovario derecho aumentado de tamaño (7 x 5 cm) con múltiples folículos periféricos y quiste simple de 5 cm. Doppler: flujo arterial conservado, ausencia de flujo venoso en ovario derecho. Prueba de embarazo negativa. ¿Cuál es la conducta inicial de elección?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Observación hospitalaria y repetición de ecografía Doppler en 24 horas.",
      },
      {
        id: "B",
        label: "B",
        text: "Inicio de antibióticos de amplio espectro por sospecha de enfermedad pélvica inflamatoria.",
      },
      {
        id: "C",
        label: "C",
        text: "Laparoscopia urgente con detorsión ovárica y preservación del ovario si es viable.",
      },
      { id: "D", label: "D", text: "Ooforectomía derecha inmediata." },
    ],
    correctOptionId: "C",
    explanation:
      "Cuadro altamente sugestivo de torsión ovárica. La ausencia de flujo venoso es uno de los hallazgos más precoces. El tratamiento es laparoscopia urgente para preservar la función ovárica.",
    keyPoints: [
      "Dolor pélvico súbito intenso + náuseas/vómito + ovario aumentado → torsión ovárica.",
      "Ausencia de flujo venoso en Doppler es hallazgo precoz y sugestivo.",
      "Flujo arterial conservado no excluye torsión (obstrucción venosa ocurre primero).",
      "Preservar el ovario siempre que sea posible.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa torsión ovárica: ausencia de flujo venoso en Doppler es hallazgo precoz — laparoscopia urgente con detorsión y preservación ovárica, no observar 24 h.

¿Qué está ocurriendo realmente?
- Mujer 24 años, dolor FID súbito severo que la despertó, náuseas y vómitos.
- Ecografía: ovario derecho 7×5 cm con folículos periféricos (signo de "tormenta de nieve").
- Doppler: flujo arterial conservado, ausencia de flujo venoso en ovario derecho.

¿Qué dato es clave en el examen?
- Dolor pélvico súbito intenso + náuseas + ovario aumentado → torsión ovárica.
- Obstrucción venosa ocurre primero → isquemia → necrosis; flujo arterial conservado NO excluye torsión.
- Ausencia de flujo venoso = hallazgo precoz y sugestivo.
- Conducta: laparoscopia urgente + detorsión + preservación ovárica si viable.
- No observar 24 h: cada hora ↑ riesgo de pérdida ovárica.

¿Por qué fallan las otras opciones?
- Observación + eco en 24 h: demora tratamiento; isquemia progresa.
- ATB por EIP: cuadro no sugiere infección; embarazo negativo, patrón de torsión.
- Ooforectomía inmediata: preservar ovario siempre que sea posible tras detorsión.

Clave: dolor súbito + ovario grande + sin flujo venoso = laparoscopia urgente con detorsión.

GINECOOBSTETRICIA — BY DR Q.
Torsión ovárica

La clave: ausencia de flujo venoso, no el quiste.

Ovario gira sobre su pedículo → obstrucción venosa primero → isquemia → necrosis.

Trampa clásica: flujo arterial conservado descarta torsión. FALSO: la obstrucción venosa precede a la arterial.

Conducta: laparoscopia urgente + detorsión + preservación ovárica. No observar 24 h.

Referencias: ACOG Adnexal Torsion; Williams Gynecology; UpToDate: Ovarian Torsion.`,
  },
  {
    id: "dr-q-96",
    examArea: "Ginecología y Obstetricia / Infectología ginecológica",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia", "eip", "infecciones"],
    statement:
      "Mujer de 25 años, nulípara, sin métodos anticonceptivos, consulta por dolor pélvico progresivo bilateral de 4 días de evolución, acompañado de fiebre de 38.5°C, malestar general y flujo vaginal amarillento de mal olor. Refiere nueva pareja sexual hace 3 semanas. Al examen físico: abdomen inferior doloroso a la palpación. A la especuloscopia se observa cérvix eritematoso y friable con secreción mucopurulenta. Al tacto vaginal presenta intenso dolor a la movilización cervical y anexos dolorosos bilateralmente. Ecografía pélvica: útero y ovarios normales, sin masas anexiales ni líquido libre. Prueba de embarazo negativa. ¿Cuál es el manejo empírico inicial más apropiado?",
    options: [
      { id: "A", label: "A", text: "Azitromicina oral en dosis única y control ambulatorio." },
      {
        id: "B",
        label: "B",
        text: "Ceftriaxona intramuscular más doxiciclina y metronidazol.",
      },
      { id: "C", label: "C", text: "Legrado uterino diagnóstico." },
      { id: "D", label: "D", text: "Histerectomía subtotal urgente." },
    ],
    correctOptionId: "B",
    explanation:
      "Cuadro compatible con enfermedad inflamatoria pélvica (EIP). Tratamiento empírico inmediato cubriendo Neisseria gonorrhoeae, Chlamydia trachomatis y flora anaerobia.",
    keyPoints: [
      "Dolor pélvico + fiebre + flujo mucopurulento + dolor a movilización cervical → EIP.",
      "La ecografía puede ser normal en fases iniciales; EIP es diagnóstico clínico.",
      "Esquema: ceftriaxona + doxiciclina + metronidazol.",
      "Retrasar tratamiento aumenta riesgo de infertilidad tubárica y embarazo ectópico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa EIP: dolor a movilización cervical + fiebre + flujo mucopurulento = diagnóstico clínico — ceftriaxona + doxiciclina + metronidazol, aunque la ecografía sea normal.

¿Qué está ocurriendo realmente?
- Mujer 25 años, dolor pélvico bilateral 4 días + fiebre 38.5°C + flujo amarillento fétido.
- Cérvix eritematoso y friable; dolor intenso a movilización cervical; anexos dolorosos.
- Eco: útero y ovarios normales, sin masas ni líquido libre; embarazo negativo.

¿Qué dato es clave en el examen?
- Dolor pélvico + fiebre + flujo mucopurulento + dolor a movilización cervical = EIP.
- EIP es diagnóstico clínico; ecografía normal no excluye (útil para absceso tuboovárico).
- Esquema empírico: ceftriaxona (gonococo) + doxiciclina (clamidia) + metronidazol (anaerobios).
- Retrasar tratamiento ↑ riesgo de infertilidad tubárica y embarazo ectópico.

¿Por qué fallan las otras opciones?
- Azitromicina dosis única: insuficiente para EIP; no cubre anaerobios ni gonococo adecuadamente.
- Legrado uterino: no hay indicación; cuadro es infección ascendente, no retención.
- Histerectomía: excesiva; EIP se trata con antibióticos de amplio espectro.

Clave: movilización cervical dolorosa + fiebre = EIP → ceftriaxona + doxiciclina + metronidazol ya.

GINECOOBSTETRICIA — BY DR Q.
Enfermedad inflamatoria pélvica (EIP)

La clave: dolor a la movilización cervical, no la ecografía.

Diagnóstico clínico. Ecografía normal no excluye EIP (útil para absceso tuboovárico).

Cobertura empírica: gonococo (ceftriaxona) + clamidia (doxiciclina) + anaerobios (metronidazol).

Trampa: ecografía normal → descartar EIP. FALSO.

Referencias: CDC STI Guidelines; ACOG PID Practice Bulletin; UpToDate: Pelvic Inflammatory Disease.`,
  },
  {
    id: "dr-q-97",
    examArea: "Ginecología y Obstetricia / Hemorragias del tercer trimestre",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "obstetricia", "placenta_previa", "hemorragia"],
    statement:
      "Mujer de 33 años, G3P2, con embarazo de 32 semanas, consulta a urgencias porque despertó en medio de un charco de sangre. Refiere sangrado vaginal rojo rutilante, de moderada cantidad, completamente indoloro. Niega contracciones, pérdida de líquido amniótico o antecedente traumático. Al examen físico: TA 110/70 mmHg, FC 88 lpm. Abdomen blando, no doloroso, útero con tono normal. Registro cardiotocográfico reactivo. Ante la sospecha clínica, ¿cuál es el paso diagnóstico inicial más apropiado?",
    options: [
      { id: "A", label: "A", text: "Tacto vaginal para determinar dilatación cervical." },
      { id: "B", label: "B", text: "Amnioscopia diagnóstica." },
      {
        id: "C",
        label: "C",
        text: "Ecografía obstétrica con evaluación de la localización placentaria.",
      },
      { id: "D", label: "D", text: "Inducción inmediata del trabajo de parto." },
    ],
    correctOptionId: "C",
    explanation:
      "Cuadro clínico altamente sugestivo de placenta previa. El estudio inicial de elección es la ecografía para determinar la relación de la placenta con el orificio cervical interno.",
    keyPoints: [
      "Placenta previa: sangrado rojo brillante, indoloro, útero blando en tercer trimestre.",
      "Tacto vaginal contraindicado ante sospecha de placenta previa.",
      "Ecografía es el estudio diagnóstico inicial de elección.",
      "DPPNI: sangrado oscuro + dolor + útero leñoso.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa placenta previa: sangrado rojo brillante indoloro en tercer trimestre = ecografía obstétrica, nunca tacto vaginal.

¿Qué está ocurriendo realmente?
- Mujer 33 años, 32 semanas; despertó en charco de sangre rojo rutilante, indoloro.
- Abdomen blando, útero con tono normal; CTG reactivo; TA estable.

¿Qué dato es clave en el examen?
- Placenta previa: sangrado rojo brillante, indoloro, útero blando en tercer trimestre.
- Tacto vaginal contraindicado ante sospecha de placenta previa (puede desencadenar hemorragia masiva).
- Ecografía obstétrica es el estudio diagnóstico inicial de elección.
- DPPNI: cuadro opuesto — sangrado oscuro + dolor + útero leñoso.

¿Por qué fallan las otras opciones?
- Tacto vaginal: peligroso; puede provocar sangrado masivo con placenta sobre OCI.
- Amnioscopia: no es el estudio inicial para localización placentaria.
- Inducción inmediata: primero confirmar diagnóstico y estabilidad; previa no siempre requiere parto urgente si estable.

Clave: sangrado indoloro brillante = sospecha previa → eco, no tacto vaginal.

GINECOOBSTETRICIA — BY DR Q.
Placenta previa

La clave: sangrado indoloro.

Placenta en segmento inferior → distensión uterina → separación parcial → sangrado rojo brillante sin dolor.

Conducta diagnóstica: ecografía obstétrica. NO tacto vaginal (puede desencadenar hemorragia masiva).

Trampa: tacto vaginal en todo sangrado obstétrico. En placenta previa es peligroso.

Referencias: Williams Obstetrics; ACOG Placenta Previa; UpToDate: Placenta Previa.`,
  },
  {
    id: "dr-q-98",
    examArea: "Ginecología y Obstetricia / Sangrado uterino anormal",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia", "sua", "cancer_endometrio"],
    statement:
      "Mujer de 48 años, con IMC de 36 kg/m² y diagnóstico de diabetes mellitus tipo 2, consulta por sangrado menstrual abundante y prolongado desde hace 6 meses. Refiere uso de 6 a 8 toallas higiénicas al día y ciclos cada vez más irregulares. Nunca ha estado embarazada. Al examen físico: PA 130/80 mmHg, examen pélvico sin alteraciones anatómicas evidentes, útero de tamaño normal. Ecografía transvaginal: útero de morfología normal, ovarios sin alteraciones y línea endometrial heterogénea de 17 mm. Prueba de embarazo negativa. ¿Cuál es el paso diagnóstico más importante a seguir?",
    options: [
      { id: "A", label: "A", text: "Solicitar niveles séricos de FSH y estradiol." },
      {
        id: "B",
        label: "B",
        text: "Iniciar tratamiento hormonal empírico y reevaluar en 6 meses.",
      },
      { id: "C", label: "C", text: "Realizar biopsia endometrial." },
      { id: "D", label: "D", text: "Solicitar resonancia magnética pélvica." },
    ],
    correctOptionId: "C",
    explanation:
      "Sangrado uterino anormal con múltiples factores de riesgo para hiperplasia y cáncer de endometrio (obesidad, diabetes, nuliparidad, edad >45 años) y endometrio engrosado heterogéneo. La biopsia endometrial es obligatoria.",
    keyPoints: [
      "Mujer ≥45 años con SUA + factores de riesgo → descartar cáncer endometrial.",
      "Obesidad → aromatización periférica → exposición estrogénica sin oposición.",
      "Endometrio engrosado (17 mm) debe estudiarse histológicamente.",
      "No iniciar tratamiento hormonal empírico sin excluir malignidad.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa SUA con alto riesgo de cáncer endometrial: obesidad + diabetes + nuliparidad + endometrio 17 mm = biopsia endometrial obligatoria, no tratamiento empírico.

¿Qué está ocurriendo realmente?
- Mujer 48 años, IMC 36, DM2; sangrado abundante 6 meses, ciclos irregulares.
- Nuliparidad; eco: endometrio heterogéneo 17 mm; embarazo negativo.

¿Qué dato es clave en el examen?
- Mujer ≥45 años con SUA + factores de riesgo → descartar cáncer endometrial.
- Obesidad → aromatización periférica → exposición estrogénica sin oposición progesterónica.
- Endometrio engrosado (17 mm) debe estudiarse histológicamente.
- No iniciar tratamiento hormonal empírico sin excluir malignidad.

¿Por qué fallan las otras opciones?
- FSH/estradiol: no explican endometrio de 17 mm ni descartan malignidad en alto riesgo.
- Tratamiento hormonal empírico: peligroso sin biopsia; puede enmascarar carcinoma.
- RM pélvica: no sustituye biopsia como paso diagnóstico fundamental.

Clave: SUA + obesidad + endometrio 17 mm = biopsia endometrial, no hormonas empíricas.

GINECOOBSTETRICIA — BY DR Q.
Sangrado uterino anormal · riesgo de cáncer endometrial

La clave: factores de riesgo (obesidad, diabetes, nuliparidad, edad) + endometrio engrosado.

Obesidad → ↑ estrógenos por aromatización → hiperplasia → atipia → carcinoma.

Paso diagnóstico fundamental: biopsia endometrial. FSH no explica endometrio de 17 mm en paciente de alto riesgo.

Trampa: perimenopausia fisiológica sin evaluar endometrio.

Referencias: ACOG Abnormal Uterine Bleeding; Williams Gynecology; NCCN Endometrial Cancer Guidelines.`,
  },
  {
    id: "dr-q-99",
    examArea: "Ginecología y Obstetricia / Infecciones obstétricas",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "obstetricia", "corioamnionitis", "infecciones"],
    statement:
      "Mujer de 21 años, primigestante, con embarazo de 38 semanas, consulta por pérdida de líquido claro y abundante por vagina desde hace 24 horas. Refiere disminución de movimientos fetales. Al examen físico: TA 110/70 mmHg, FC materna 115 lpm, temperatura 38.6°C. Altura uterina 34 cm. Útero doloroso a la palpación profunda e irritable. Tacto vaginal: cérvix borrado 80%, dilatación 3 cm, salida de líquido amniótico de mal olor. Registro cardiotocográfico: frecuencia cardíaca fetal basal de 175 lpm, variabilidad mínima, sin desaceleraciones. ¿Cuál es el diagnóstico más probable y la conducta terapéutica indicada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ruptura prematura de membranas sin infección; manejo expectante.",
      },
      {
        id: "B",
        label: "B",
        text: "Corioamnionitis clínica; iniciar antibióticos intravenosos de amplio espectro y finalizar el embarazo.",
      },
      {
        id: "C",
        label: "C",
        text: "Desprendimiento prematuro de placenta normoinserta; cesárea urgente.",
      },
      { id: "D", label: "D", text: "Preeclampsia grave; iniciar sulfato de magnesio." },
    ],
    correctOptionId: "B",
    explanation:
      "Criterios clínicos de corioamnionitis: fiebre materna, taquicardia materna y fetal, útero doloroso e irritable y líquido amniótico fétido. Antibioticoterapia IV inmediata y finalización del embarazo.",
    keyPoints: [
      "RPM + fiebre + taquicardia materna/fetal + líquido fétido + dolor uterino → corioamnionitis.",
      "Taquicardia fetal (175 lpm) es hallazgo frecuente de infección intraamniótica.",
      "Tratamiento: ATB IV (ampicilina + gentamicina) + finalizar embarazo.",
      "Corioamnionitis no es indicación absoluta de cesárea.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa corioamnionitis clínica: RPM + fiebre + taquicardia materna/fetal + líquido fétido + útero doloroso = ATB IV + finalizar embarazo, no manejo expectante.

¿Qué está ocurriendo realmente?
- Primigestante 21 años, 38 semanas; RPM 24 h + disminución movimientos fetales.
- Fiebre 38.6°C, FC materna 115, útero doloroso e irritable; líquido amniótico fétido.
- CTG: FCF basal 175 lpm, variabilidad mínima.

¿Qué dato es clave en el examen?
- RPM + fiebre + taquicardia materna/fetal + líquido fétido + dolor uterino = corioamnionitis.
- Taquicardia fetal (175 lpm) es hallazgo frecuente de infección intraamniótica.
- Tratamiento: ATB IV (ampicilina + gentamicina) + finalizar embarazo.
- Corioamnionitis no es indicación absoluta de cesárea.

¿Por qué fallan las otras opciones?
- RPM sin infección + expectante: hay fiebre, taquicardia y líquido fétido = infección establecida.
- DPPNI + cesárea: cuadro sin dolor intenso ni útero leñoso; sangrado no descrito como oscuro/doloroso.
- Preeclampsia + MgSO4: no hay HTA ni proteinuria; cuadro es infeccioso.

Clave: fiebre + RPM + líquido fétido + taquicardia fetal = corioamnionitis → ATB + finalizar gestación.

GINECOOBSTETRICIA — BY DR Q.
Corioamnionitis clínica

La clave: signos de infección materno-fetal, no solo ruptura de membranas.

RPM prolongada → ascenso bacteriano → infección de membranas, líquido, placenta y feto.

Tratamiento: ATB IV + finalizar gestación (la fuente infecciosa persiste mientras continúe el embarazo).

Trampa: RPM → observación. Si hay corioamnionitis establecida, no manejo expectante.

Referencias: ACOG Intraamniotic Infection; Williams Obstetrics; UpToDate: Clinical Chorioamnionitis.`,
  },
  {
    id: "dr-q-100",
    examArea: "Ginecología y Obstetricia / Trastornos hipertensivos",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "obstetricia", "eclampsia", "puerperio", "sulfato_magnesio"],
    statement:
      "Mujer de 19 años, nulípara, cursando la primera semana de puerperio tras un parto institucional sin complicaciones aparentes, es llevada a urgencias por presentar convulsiones en domicilio. Su madre describe un episodio de movimientos tónico-clónicos generalizados de aproximadamente 2 minutos de duración, asociado a relajación de esfínteres y cianosis peribucal. La paciente llega somnolienta y confusa. Signos vitales: TA 160/110 mmHg, FC 105 lpm, SatO₂ 96% con oxígeno suplementario. Durante la valoración médica presenta una nueva convulsión tónico-clónica generalizada. ¿Cuál es la primera intervención farmacológica indicada para controlar y prevenir nuevas crisis?",
    options: [
      { id: "A", label: "A", text: "Diazepam intravenoso." },
      { id: "B", label: "B", text: "Fenitoína intravenosa." },
      { id: "C", label: "C", text: "Sulfato de magnesio intravenoso." },
      { id: "D", label: "D", text: "Levetiracetam intravenoso." },
    ],
    correctOptionId: "C",
    explanation:
      "Eclampsia posparto. El tratamiento de elección para controlar y prevenir nuevas convulsiones es el sulfato de magnesio, superior a fenitoína y benzodiacepinas en este contexto.",
    keyPoints: [
      "Convulsiones + hipertensión + puerperio reciente → eclampsia hasta demostrar lo contrario.",
      "La eclampsia puede aparecer en el puerperio, incluso días después del parto.",
      "Sulfato de magnesio es el tratamiento de elección.",
      "Además: vía aérea, oxigenación y control de hipertensión severa.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa una trampa clásica de residencia: ante convulsiones en una puérpera, no pienses primero en epilepsia ni en benzodiacepinas, sino en eclampsia y en el fármaco anticonvulsivante específico de la enfermedad hipertensiva del embarazo.

¿Qué está ocurriendo realmente?
- Mujer en primera semana de puerperio con convulsiones tónico-clónicas recurrentes.
- Hipertensión severa (160/110 mmHg) en contexto obstétrico reciente.
- Parto aparentemente sin complicaciones, pero la eclampsia puede debutar hasta días después del parto.
- Cuadro compatible con eclampsia posparto, no con crisis epiléptica primaria.

¿Qué dato es clave en el examen?
- La asociación convulsión + puerperio + hipertensión arterial severa.
- La eclampsia es convulsión en contexto de preeclampsia/eclampsia; puede ocurrir en embarazo, parto o puerperio.
- El sulfato de magnesio IV es superior a diazepam y fenitoína para controlar y prevenir nuevas crisis en eclampsia.

¿Por qué fallan las otras opciones?
- Diazepam: útil en estado epiléptico generalizado, pero no es el anticonvulsivante de elección en eclampsia ni previene recurrencias tan bien como el magnesio.
- Fenitoína: tratamiento clásico de epilepsia, no de eclampsia; inferior al sulfato de magnesio en este contexto.
- Levetiracetam: antiepiléptico moderno, pero no sustituye al sulfato de magnesio en eclampsia obstétrica.

Clave: puerperio + convulsión + HTA severa = eclampsia hasta demostrar lo contrario; primera droga = sulfato de magnesio IV.

Referencias: ACOG Gestational Hypertension and Preeclampsia; Williams Obstetrics; UpToDate: Eclampsia.`,
  },
  {
    id: "dr-q-101",
    examArea: "Psiquiatría / Medicina Interna",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "delirium", "medicina_interna"],
    statement:
      "Hombre de 74 años, con antecedentes de hipertensión arterial y diabetes mellitus, cursa su segundo día postoperatorio tras un reemplazo total de cadera. Durante la noche, el personal de enfermería reporta comportamiento agresivo, intento de retiro de la sonda vesical y alucinaciones visuales (\"veía insectos en las sábanas\"). En la evaluación de la mañana se encuentra somnoliento, orientado únicamente en persona, con marcada dificultad para mantener la atención durante la entrevista. Signos vitales: TA 145/90 mmHg, FC 88 lpm, T 37.2°C, SpO₂ 94%. Creatinina 1.4 mg/dL. ¿Cuál es la conducta inicial más apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar resonancia magnética cerebral urgente para descartar accidente cerebrovascular.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar haloperidol intravenoso de forma rutinaria y permanente.",
      },
      {
        id: "C",
        label: "C",
        text: "Diagnosticar demencia de inicio reciente e iniciar inhibidores de acetilcolinesterasa.",
      },
      {
        id: "D",
        label: "D",
        text: "Identificar y corregir causas precipitantes, implementar medidas no farmacológicas para delirium y reservar antipsicóticos solo si existe riesgo para el paciente o el personal.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "Cuadro típico de delirium postoperatorio: inicio agudo, curso fluctuante, alteración de la atención, desorientación y alteraciones perceptivas. El manejo inicial debe centrarse en identificar causas reversibles y aplicar medidas no farmacológicas.",
    keyPoints: [
      "Inicio agudo + curso fluctuante + alteración de la atención → delirium.",
      "La alteración de la atención es el hallazgo cardinal.",
      "Buscar causas reversibles: hipoxemia, infección, retención urinaria, fármacos.",
      "Antipsicóticos no son rutina; reservar para agitación severa o riesgo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta separa delirium agudo de demencia, trastorno psiquiátrico primario o urgencia neurológica. En el anciano postoperatorio, el delirium es una emergencia médica reversible, no un diagnóstico psiquiátrico de partida.

¿Qué está ocurriendo realmente?
- Hombre de 74 años, segundo día postoperatorio de cirugía mayor (reemplazo de cadera).
- Inicio agudo de agitación, alucinaciones visuales y desorientación fluctuante.
- Alteración marcada de la atención: somnoliento, orientado solo en persona, difícil de entrevistar.
- Curso fluctuante típico de delirium, no de demencia ni esquizofrenia.

¿Qué dato es clave en el examen?
- La alteración de la atención es el hallazgo cardinal del delirium.
- Inicio agudo + curso fluctuante + contexto médico-quirúrgico = delirium hasta demostrar lo contrario.
- El manejo inicial debe buscar causas reversibles y aplicar medidas no farmacológicas antes de medicar de forma rutinaria.

¿Por qué fallan las otras opciones?
- RM cerebral urgente: no es la prioridad si el cuadro es típico de delirium sin focalidad neurológica; primero corregir causas precipitantes.
- Haloperidol rutinario y permanente: los antipsicóticos no son primera línea; se reservan para agitación severa o riesgo para paciente/personal.
- Inhibidores de acetilcolinesterasa: indicados en demencia establecida, no en delirium agudo postoperatorio.

Clave: delirium = atención alterada + inicio agudo + fluctuación; tratar causa, no etiquetar como demencia.

Referencias: Harrison's; DSM-5-TR; AGS Postoperative Delirium Guidelines; UpToDate: Delirium.`,
  },
  {
    id: "dr-q-102",
    examArea: "Psiquiatría / Urgencias",
    topic: "Psiquiatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "snm", "neuroleptico", "urgencias"],
    statement:
      "Mujer de 28 años con diagnóstico conocido de esquizofrenia, es llevada a urgencias por cuadro de 48 horas de evolución caracterizado por estupor, mutismo y rechazo de la vía oral. Al examen físico presenta FC 110 lpm, diaforesis profusa y temperatura de 39.4°C. Se evidencia rigidez muscular generalizada en \"tubo de plomo\". Laboratorios: leucocitos 15.000/mm³ y CPK 12.500 U/L. Recibe actualmente haloperidol 10 mg/día. ¿Cuál es el diagnóstico más probable y la conducta inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Catatonia maligna; administrar benzodiacepinas y continuar haloperidol.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome serotoninérgico; suspender haloperidol e iniciar ciproeptadina.",
      },
      {
        id: "C",
        label: "C",
        text: "Meningoencefalitis bacteriana; iniciar antibióticos de amplio espectro.",
      },
      {
        id: "D",
        label: "D",
        text: "Síndrome neuroléptico maligno; suspender inmediatamente el antipsicótico e iniciar tratamiento de soporte intensivo.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "Hipertermia, rigidez en tubo de plomo, alteración del estado mental, disautonomía y CPK muy elevada en paciente con haloperidol = síndrome neuroléptico maligno. Suspender el antipsicótico e iniciar soporte intensivo.",
    keyPoints: [
      "Antipsicótico + fiebre + rigidez + CPK elevada → síndrome neuroléptico maligno.",
      "Tríada: fiebre, rigidez, alteración del estado mental.",
      "Suspensión inmediata del antipsicótico es obligatoria.",
      "Rigidez en tubo de plomo orienta a SNM; clonus orienta a síndrome serotoninérgico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa el reconocimiento del síndrome neuroléptico maligno (SNM), una emergencia psiquiátrica-médica potencialmente letal que exige suspender de inmediato el antipsicótico causal.

¿Qué está ocurriendo realmente?
- Paciente con esquizofrenia en tratamiento con haloperidol.
- Cuadro de 48 h con estupor, mutismo, fiebre alta (39.4°C) y diaforesis.
- Rigidez muscular generalizada en "tubo de plomo".
- CPK muy elevada (12.500 U/L), leucocitosis y taquicardia.
- Tríada clásica: hipertermia + rigidez + alteración del estado mental + disautonomía.

¿Qué dato es clave en el examen?
- Antipsicótico reciente + fiebre + rigidez extrema + CPK marcada = SNM.
- La rigidez en tubo de plomo orienta a SNM; el clonus inducible orienta a síndrome serotoninérgico.
- La conducta inmediata es suspender el neuroléptico e iniciar soporte intensivo.

¿Por qué fallan las otras opciones?
- Catatonia maligna con benzodiacepinas y continuar haloperidol: empeoraría el cuadro; el haloperidol debe suspenderse de inmediato.
- Síndrome serotoninérgico con ciproheptadina: se asocia a ISRS/serotoninérgicos y cursa con clonus e hiperreflexia, no rigidez en tubo de plomo.
- Meningoencefalitis: puede dar fiebre y alteración mental, pero no explica rigidez extrema + CPK masiva en paciente con haloperidol.

Clave: antipsicótico + fiebre + rigidez + CPK alta = SNM; suspender la droga ya.

Referencias: Harrison's; UpToDate: Neuroleptic Malignant Syndrome; Kaplan & Sadock's.`,
  },
  {
    id: "dr-q-103",
    examArea: "Psiquiatría / Trastorno bipolar",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "bipolar", "mania", "valproato"],
    statement:
      "Hombre de 32 años con antecedente conocido de Trastorno Bipolar tipo I. Ingresa por cuadro de 5 días de evolución caracterizado por logorrea, fuga de ideas, hiperactividad, compras compulsivas, gastos excesivos y marcada disminución de la necesidad de sueño (duerme aproximadamente 2 horas por noche y refiere sentirse lleno de energía). Durante la entrevista manifiesta ser \"el enviado para salvar la economía del país\". Al examen físico se encuentra hemodinámicamente estable y sin signos de falla orgánica aguda. Laboratorios: creatinina 2.2 mg/dL. ¿Cuál es el estabilizador del ánimo de elección en este paciente?",
    options: [
      { id: "A", label: "A", text: "Litio." },
      { id: "B", label: "B", text: "Valproato." },
      { id: "C", label: "C", text: "Carbamazepina." },
      { id: "D", label: "D", text: "Lamotrigina." },
    ],
    correctOptionId: "B",
    explanation:
      "Episodio maníaco agudo con síntomas psicóticos. La insuficiencia renal (creatinina 2.2 mg/dL) contraindica o limita severamente el litio; el valproato es el estabilizador de elección en este contexto.",
    keyPoints: [
      "Manía: grandiosidad, ↓ necesidad de sueño, logorrea, conductas de riesgo.",
      "Litio se elimina por vía renal; evitar en insuficiencia renal significativa.",
      "Valproato: eficaz en manía aguda, no depende de eliminación renal.",
      "Lamotrigina: prevención de fases depresivas, no manía aguda.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta no evalúa solo el diagnóstico de manía, sino la psicofarmacología segura: en manía aguda con insuficiencia renal, el litio deja de ser primera opción.

¿Qué está ocurriendo realmente?
- Hombre con trastorno bipolar tipo I en episodio maníaco agudo de 5 días.
- Logorrea, fuga de ideas, hiperactividad, gastos compulsivos y disminución marcada del sueño.
- Síntomas psicóticos de grandiosidad ("enviado para salvar la economía").
- Creatinina 2.2 mg/dL: insuficiencia renal que cambia la elección del estabilizador.

¿Qué dato es clave en el examen?
- Manía aguda con síntomas psicóticos requiere estabilizador del ánimo, no solo antipsicótico ambulatorio.
- El litio se elimina casi exclusivamente por vía renal; con IRC significativa aumenta el riesgo de toxicidad.
- El valproato es eficaz en manía aguda y no depende de la eliminación renal como el litio.

¿Por qué fallan las otras opciones?
- Litio: clásico en bipolar, pero contraindicado o muy limitado con creatinina elevada por riesgo de intoxicación.
- Carbamazepina: estabilizador válido, pero el valproato tiene evidencia más sólida como alternativa de primera línea en manía aguda.
- Lamotrigina: excelente para prevención de fases depresivas, pero no es tratamiento de elección para manía aguda.

Clave: bipolar + manía aguda + IRC = valproato, no litio automático.

Referencias: CANMAT Bipolar Guidelines; DSM-5-TR; UpToDate: Acute Mania.`,
  },
  {
    id: "dr-q-104",
    examArea: "Psiquiatría / Psicofarmacología",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "serotoninergico", "isrs", "tramadol"],
    statement:
      "Mujer de 45 años, con antecedentes de obesidad y dolor crónico, consulta por tristeza profunda, anhedonia, sentimientos de culpa e ideación de muerte de 3 semanas de evolución. Ha perdido 5 kg de peso. Recibe tramadol 50 mg cada 8 horas por lumbalgia crónica. Se inicia sertralina 50 mg/día. Veinticuatro horas después es llevada a urgencias por presentar temblor, inquietud motora intensa, diaforesis, diarrea y clonus inducible en miembros inferiores. ¿Cuál es el mecanismo fisiopatológico más probable del cuadro actual?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Bloqueo masivo de receptores dopaminérgicos D2 en sistema nervioso central.",
      },
      {
        id: "B",
        label: "B",
        text: "Hiperestimulación serotoninérgica central y periférica por exceso de serotonina sináptica.",
      },
      {
        id: "C",
        label: "C",
        text: "Disminución aguda de la actividad gabaérgica cortical.",
      },
      {
        id: "D",
        label: "D",
        text: "Hiperactividad colinérgica secundaria a inhibición de la acetilcolinesterasa.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Síndrome serotoninérgico precipitado por sertralina + tramadol (ambos con actividad serotoninérgica). El exceso de serotonina produce hiperactividad neuromuscular, alteraciones autonómicas y cambios del estado mental.",
    keyPoints: [
      "ISRS + tramadol → síndrome serotoninérgico.",
      "Clonus inducible es hallazgo muy característico.",
      "Hiperreflexia + clonus + diarrea orientan a serotoninérgico.",
      "SNM: rigidez en tubo de plomo, hiporreflexia, antipsicóticos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa una interacción farmacológica muy preguntada: ISRS + tramadol puede precipitar síndrome serotoninérgico en horas, no en semanas.

¿Qué está ocurriendo realmente?
- Mujer con depresión mayor en quien se inicia sertralina 50 mg/día.
- Recibe tramadol crónico por dolor lumbar (también tiene actividad serotoninérgica).
- A las 24 horas presenta temblor, inquietud, diaforesis, diarrea y clonus inducible.
- Cuadro agudo de hiperactividad neuromuscular y disautonomía tras sumar dos fármacos serotoninérgicos.

¿Qué dato es clave en el examen?
- El clonus inducible en miembros inferiores es un hallazgo muy característico del síndrome serotoninérgico.
- Tramadol no es "solo un opioide": inhibe la recaptación de serotonina y aumenta el riesgo con ISRS.
- El mecanismo es hiperestimulación serotoninérgica central y periférica por exceso de serotonina sináptica.

¿Por qué fallan las otras opciones?
- Bloqueo dopaminérgico D2: mecanismo del síndrome neuroléptico maligno (rigidez en tubo de plomo, hiporreflexia), no de este cuadro.
- Disminución gabaérgica: mecanismo del delirium tremens por abstinencia alcohólica, no de interacción ISRS-tramadol.
- Hiperactividad colinérgica: se ve en intoxicación por inhibidores de colinesterasa, no aquí.

Clave: ISRS + tramadol + clonus = síndrome serotoninérgico; revisar siempre analgésicos con actividad serotonérgica.

Referencias: Stahl's Psychopharmacology; UpToDate: Serotonin Syndrome; Harrison's.`,
  },
  {
    id: "dr-q-105",
    examArea: "Psiquiatría / Trastornos por consumo",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "delirium_tremens", "alcohol", "urgencias"],
    statement:
      "Hombre de 50 años con antecedente de consumo crónico de alcohol equivalente a una botella de aguardiente diaria. Su última ingesta fue hace 48 horas luego de ser hospitalizado por una neumonía adquirida en la comunidad. Presenta agitación intensa, desorientación, diaforesis profusa, midriasis, hipertensión arterial y taquicardia. Refiere además que \"las paredes se están moviendo\". Signos vitales: TA 170/110 mmHg, FC 125 lpm. Laboratorios: AST 120 U/L, ALT 90 U/L. ¿Cuál es el tratamiento de elección para el control de los síntomas?",
    options: [
      { id: "A", label: "A", text: "Haloperidol intravenoso." },
      { id: "B", label: "B", text: "Lorazepam." },
      { id: "C", label: "C", text: "Fenitoína intravenosa." },
      { id: "D", label: "D", text: "Carbamazepina." },
    ],
    correctOptionId: "B",
    explanation:
      "Delirium tremens: forma más grave del síndrome de abstinencia alcohólica. Las benzodiacepinas son el tratamiento de elección. Lorazepam es especialmente útil con posible compromiso hepático (AST/ALT elevadas).",
    keyPoints: [
      "Abstinencia 48-96 h + agitación + alucinaciones + disautonomía → delirium tremens.",
      "Benzodiacepinas sustituyen efecto GABAérgico perdido y previenen convulsiones.",
      "Lorazepam preferido con disfunción hepática.",
      "Haloperidol no es tratamiento principal; no previene convulsiones.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa el delirium tremens, la forma más grave de la abstinencia alcohólica, y por qué las benzodiacepinas —no los antipsicóticos— son el tratamiento de elección.

¿Qué está ocurriendo realmente?
- Hombre con consumo crónico de alcohol hospitalizado por neumonía.
- Última ingesta hace 48 horas: ventana típica del delirium tremens.
- Agitación intensa, desorientación, alucinaciones visuales ("paredes que se mueven").
- Disautonomía marcada: diaforesis, midriasis, hipertensión y taquicardia.
- Transaminasas elevadas sugieren hepatopatía asociada al alcohol.

¿Qué dato es clave en el examen?
- Abstinencia 48-96 h + alucinaciones + inestabilidad autonómica = delirium tremens.
- El mecanismo es hiperexcitabilidad del SNC por adaptación GABA/glutamato al suspender el alcohol.
- Las benzodiacepinas sustituyen el efecto GABAérgico perdido y previenen convulsiones.

¿Por qué fallan las otras opciones?
- Haloperidol: puede controlar agitación superficialmente, pero no trata la abstinencia ni previene convulsiones; no es tratamiento principal.
- Fenitoína: no es tratamiento de la abstinencia alcohólica ni del delirium tremens.
- Carbamazepina: puede usarse en abstinencia leve-moderada ambulatoria, pero en delirium tremens grave las benzodiacepinas IV son estándar.

Clave: abstinencia alcohólica grave + alucinaciones + HTA/FC = lorazepam (especialmente si hay hepatopatía).

Referencias: UpToDate: Alcohol Withdrawal; ASAM Guidelines; Harrison's.`,
  },
  {
    id: "dr-q-106",
    examArea: "Psiquiatría / Urgencias",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "suicidio", "riesgo", "urgencias"],
    statement:
      "Mujer de 19 años, estudiante universitaria, es llevada por sus padres a urgencias luego de que encontraran una carta de despedida en su habitación. Hace dos meses terminó una relación sentimental. Refiere tristeza persistente, anhedonia, insomnio de conciliación y abandono de sus actividades académicas. Durante la entrevista manifiesta: \"Nada va a mejorar, ya tengo las pastillas guardadas para esta noche\". Niega intentos suicidas previos. ¿Cuál es el nivel de riesgo y la conducta más segura?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Riesgo bajo; manejo ambulatorio con cita prioritaria por psiquiatría.",
      },
      {
        id: "B",
        label: "B",
        text: "Riesgo moderado; iniciar antidepresivo y control semanal.",
      },
      {
        id: "C",
        label: "C",
        text: "Riesgo alto; hospitalización psiquiátrica y medidas de protección inmediata.",
      },
      {
        id: "D",
        label: "D",
        text: "Riesgo bajo porque no tiene intentos suicidas previos.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Ideación suicida activa con plan específico, acceso a método potencialmente letal y conducta preparatoria (carta de despedida). Riesgo suicida alto que requiere hospitalización y protección inmediata.",
    keyPoints: [
      "Plan suicida + acceso al método + intención = riesgo alto.",
      "Carta de despedida = conducta preparatoria de alto riesgo.",
      "Ausencia de intentos previos no excluye riesgo elevado.",
      "Objetivo: proteger la vida del paciente con supervisión continua.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa la estratificación del riesgo suicida: no basta con diagnosticar depresión; hay que identificar plan, método y conductas preparatorias que obligan a hospitalizar.

¿Qué está ocurriendo realmente?
- Joven universitaria con episodio depresivo tras ruptura sentimental.
- Tristeza, anhedonia, insomnio y abandono académico.
- Carta de despedida encontrada por los padres: conducta preparatoria de alto riesgo.
- Ideación activa con plan concreto: "ya tengo las pastillas guardadas para esta noche".
- Acceso al método letal y intención expresada en la entrevista.

¿Qué dato es clave en el examen?
- Plan suicida específico + acceso al método + intención = riesgo alto, independientemente de intentos previos.
- La carta de despedida es una señal de alarma que eleva el riesgo de manera importante.
- La conducta más segura es hospitalización psiquiátrica con medidas de protección inmediata.

¿Por qué fallan las otras opciones?
- Manejo ambulatorio con cita prioritaria: inaceptable con plan activo y acceso a pastillas.
- Antidepresivo y control semanal: subestima el riesgo inminente; primero proteger la vida.
- Riesgo bajo por ausencia de intentos previos: error grave; el riesgo actual depende del plan y la intención, no del historial.

Clave: plan + método + intención = hospitalizar; no hay "solo depresión leve" aquí.

Referencias: APA Suicide Risk Guidelines; DSM-5-TR; UpToDate: Suicide Risk Assessment.`,
  },
  {
    id: "dr-q-107",
    examArea: "Psiquiatría / Psiquiatría de enlace",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "cotard", "psicosis", "neoplasia"],
    statement:
      "Hombre de 65 años, con antecedente de tabaquismo pesado, consulta acompañado por su esposa por cambios progresivos en el comportamiento durante los últimos meses. Refiere pérdida involuntaria de 10 kg en los últimos 3 meses. La esposa lo nota \"muy deprimido\", lento para hablar y cada vez más aislado. Durante la entrevista expresa que sus órganos \"se están pudriendo\" y afirma que ya está muerto. Al examen mental presenta marcado enlentecimiento psicomotor y delirios nihilistas compatibles con síndrome de Cotard. ¿Cuál es la prioridad diagnóstica inicial?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar inmediatamente un ISRS y control ambulatorio en 4 semanas.",
      },
      {
        id: "B",
        label: "B",
        text: "Diagnosticar trastorno delirante persistente y solicitar psicoterapia.",
      },
      {
        id: "C",
        label: "C",
        text: "Buscar activamente una causa médica u orgánica subyacente, especialmente una neoplasia.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar benzodiacepinas por posible trastorno de ansiedad.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Síntomas psiquiátricos de inicio tardío (65 años), pérdida de peso inexplicada, tabaquismo y síntomas psicóticos obligan a descartar primero una causa orgánica, particularmente neoplasia o enfermedad neurológica.",
    keyPoints: [
      "Psicosis de inicio tardío + pérdida de peso + tabaquismo → descartar causa orgánica.",
      "Síndrome de Cotard: delirios nihilistas, creencia de estar muerto.",
      "Puede observarse en depresión psicótica, trastornos neurológicos o neoplasias.",
      "No asumir etiología psiquiátrica primaria sin evaluar causas médicas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa psicosis de inicio tardío con síndrome de Cotard: antes de etiquetar como depresión psicótica, debes buscar causa orgánica, especialmente neoplasia.

¿Qué está ocurriendo realmente?
- Hombre de 65 años con cambios progresivos de comportamiento en los últimos meses.
- Pérdida involuntaria de 10 kg en 3 meses y antecedente de tabaquismo pesado.
- Enlentecimiento psicomotor, aislamiento y delirios nihilistas ("sus órganos se pudren", "ya está muerto").
- Cuadro compatible con síndrome de Cotard, pero con múltiples banderas rojas sistémicas.

¿Qué dato es clave en el examen?
- Psicosis de inicio tardío + pérdida de peso inexplicada + tabaquismo = descartar neoplasia (p. ej. pulmón) antes de cerrar diagnóstico psiquiátrico.
- El síndrome de Cotard puede verse en depresión psicótica, enfermedad neurológica o procesos neoplásicos/paraneoplásicos.
- La prioridad inicial es la búsqueda activa de causa médica u orgánica subyacente.

¿Por qué fallan las otras opciones?
- ISRS ambulatorio en 4 semanas: peligroso sin descartar causa orgánica; puede retrasar diagnóstico de cáncer.
- Trastorno delirante persistente con psicoterapia: ignora inicio tardío y síntomas sistémicos de alarma.
- Benzodiacepinas por ansiedad: no aborda la gravedad del cuadro ni la necesidad de estudio médico urgente.

Clave: psicosis nueva en anciano + baja de peso + tabaco = buscar cáncer antes de psiquiatría pura.

Referencias: Harrison's; UpToDate: Psychosis in Older Adults; Kaplan & Sadock's.`,
  },
  {
    id: "dr-q-108",
    examArea: "Psiquiatría / Psicofarmacología",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "clozapina", "agranulocitosis"],
    statement:
      "Paciente de 24 años con diagnóstico de esquizofrenia refractaria, en tratamiento con clozapina 300 mg/día desde hace 3 meses. Consulta por fiebre de 38.5°C, odinofagia y malestar general de inicio reciente. Niega tos, disuria, diarrea u otros síntomas infecciosos focales. ¿Cuál es la conducta inmediata más importante?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar antibiótico empírico ambulatorio y continuar la clozapina.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar hemograma urgente con recuento absoluto de neutrófilos y suspender temporalmente la clozapina hasta aclarar el diagnóstico.",
      },
      {
        id: "C",
        label: "C",
        text: "Aumentar la dosis de clozapina por posible recaída psicótica.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar únicamente proteína C reactiva y dar seguimiento ambulatorio.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Fiebre y odinofagia en paciente con clozapina deben hacer sospechar agranulocitosis o neutropenia grave. Prioridad: hemograma urgente con recuento absoluto de neutrófilos y suspensión temporal de clozapina.",
    keyPoints: [
      "Clozapina + fiebre + odinofagia → agranulocitosis hasta demostrar lo contrario.",
      "Hemograma urgente con RAN es obligatorio.",
      "Suspender clozapina temporalmente mientras se aclara el diagnóstico.",
      "La agranulocitosis es el efecto adverso más temido de la clozapina.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa el efecto adverso más temido de la clozapina: la agranulocitosis. Ante fiebre en un paciente con clozapina, el hemograma urgente va antes que cualquier antibiótico empírico.

¿Qué está ocurriendo realmente?
- Joven con esquizofrenia refractaria en clozapina 300 mg/día desde hace 3 meses.
- Consulta por fiebre 38.5°C, odinofagia y malestar general sin foco infeccioso claro.
- Sin tos, disuria ni diarrea que expliquen el cuadro de forma evidente.
- Sospecha de neutropenia grave o agranulocitosis inducida por clozapina.

¿Qué dato es clave en el examen?
- Clozapina + fiebre + odinofagia = agranulocitosis hasta demostrar lo contrario.
- La odinofagia en un paciente neutropénico puede ser la primera manifestación de infección faringea grave.
- Conducta inmediata: hemograma urgente con recuento absoluto de neutrófilos y suspensión temporal de clozapina.

¿Por qué fallan las otras opciones?
- Antibiótico empírico ambulatorio y continuar clozapina: retrasa el diagnóstico y mantiene la droga causal.
- Aumentar clozapina por recaída psicótica: absurdo ante fiebre con sospecha de agranulocitosis.
- Solo PCR y seguimiento ambulatorio: insuficiente; se requiere hemograma urgente con RAN.

Clave: clozapina + fiebre = hemograma ya + suspender hasta aclarar neutrófilos.

Referencias: UpToDate: Clozapine Monitoring; Maudsley Prescribing Guidelines; Stahl's.`,
  },
  {
    id: "dr-q-109",
    examArea: "Psiquiatría / Urgencias",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "agitacion", "urgencias", "psicosis"],
    statement:
      "Mujer de 30 años, sin antecedentes psiquiátricos conocidos, es llevada a urgencias por la policía tras ser encontrada en un parque gritando que \"los extraterrestres están drenando la energía de la ciudad a través de los postes de luz\". Se encuentra extremadamente agitada, agresiva y poco colaboradora. Al examen físico presenta midriasis bilateral, FC 130 lpm, TA 160/100 mmHg y diaforesis leve. ¿Cuál es la conducta inicial más adecuada en urgencias?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar risperidona oral y programar valoración ambulatoria por psiquiatría.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar resonancia magnética cerebral antes de cualquier intervención.",
      },
      {
        id: "C",
        label: "C",
        text: "Controlar primero la agitación mediante sedación farmacológica y garantizar la seguridad del paciente y del personal.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar inmediatamente tratamiento de mantenimiento para esquizofrenia.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Prioridad inicial en agitación psicomotora severa: garantizar seguridad, controlar la conducta agitada y posteriormente completar la evaluación diagnóstica (psicosis primaria, intoxicación por estimulantes, manía, etc.).",
    keyPoints: [
      "Agitación severa con riesgo para paciente y personal = urgencia médica.",
      "Primero seguridad y sedación; diagnóstico etiológico después.",
      "Midriasis + taquicardia + hipertensión pueden sugerir estimulantes.",
      "No diagnosticar esquizofrenia en primer episicio sin descartar causas médicas/tóxicas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa la prioridad en urgencias ante agitación psicomotora severa: primero seguridad y sedación, después el diagnóstico etiológico completo.

¿Qué está ocurriendo realmente?
- Mujer de 30 años sin antecedentes psiquiátricos conocidos, traída por la policía.
- Agitación extrema, agresividad y poco colaboración.
- Ideación delirante de contenido bizarro (persecución extraterrestre).
- Midriasis, taquicardia, hipertensión y diaforesis: pueden sugerir intoxicación por estimulantes además de psicosis primaria.

¿Qué dato es clave en el examen?
- Agitación severa con riesgo para el paciente y el personal es una urgencia médica, no una consulta ambulatoria.
- La secuencia correcta es: seguridad → contención verbal si es posible → sedación farmacológica → evaluación diagnóstica completa.
- No se debe cerrar diagnóstico de esquizofrenia en primer episodio sin descartar causas médicas y tóxicas.

¿Por qué fallan las otras opciones?
- Risperidona oral y cita ambulatoria: inadecuado con agitación grave y riesgo inmediato.
- RM cerebral antes de cualquier intervención: retrasa el control de la agitación que pone en riesgo a todos.
- Tratamiento de mantenimiento para esquizofrenia: prematuro sin evaluación completa ni control de la crisis aguda.

Clave: agitación grave = sedar y proteger primero; diagnosticar después con tóxicos y estudio orgánico.

Referencias: UpToDate: Agitated Patient; AAEP Guidelines; Tintinalli's.`,
  },
  {
    id: "dr-q-110",
    examArea: "Psiquiatría / Medicina Interna",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "delirium", "haloperidol", "agitacion"],
    statement:
      "Hombre de 82 años con antecedentes de insuficiencia cardíaca y fibrilación auricular, es llevado a urgencias por cuadro de desorientación fluctuante de 12 horas de evolución. Durante la valoración presenta marcada alteración de la atención, períodos de somnolencia alternados con agitación y comportamiento agresivo. Intenta golpear al personal de salud y no responde a las medidas de reorientación verbal. Se decide realizar contención farmacológica. ¿Cuál es el fármaco de elección para el control de la agitación en este paciente?",
    options: [
      { id: "A", label: "A", text: "Diazepam." },
      { id: "B", label: "B", text: "Haloperidol." },
      { id: "C", label: "C", text: "Amitriptilina." },
      { id: "D", label: "D", text: "Fenitoína." },
    ],
    correctOptionId: "B",
    explanation:
      "Delirium hiperactivo con riesgo para el paciente y el personal. Cuando las medidas no farmacológicas fracasan, el haloperidol es el fármaco clásicamente utilizado para control de agitación en delirium (dosis bajas, monitorización).",
    keyPoints: [
      "Delirium hiperactivo: inicio agudo, fluctuación, alteración de atención, agitación.",
      "Base del tratamiento: medidas no farmacológicas + corregir causa.",
      "Haloperidol: antipsicótico clásico para agitación grave en delirium.",
      "Benzodiacepinas pueden empeorar delirium (excepto abstinencia alcohólica).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa el manejo farmacológico del delirium hiperactivo en el anciano: cuando la reorientación verbal falla y hay riesgo inmediato, ¿qué sedante usar sin empeorar el cuadro?

¿Qué está ocurriendo realmente?
- Hombre de 82 años con desorientación fluctuante de 12 horas de evolución.
- Alteración marcada de la atención con períodos de somnolencia y agitación alternados.
- Comportamiento agresivo que pone en riesgo al personal; no responde a medidas no farmacológicas.
- Cuadro típico de delirium hiperactivo, no de demencia ni trastorno psiquiátrico primario.

¿Qué dato es clave en el examen?
- Delirium hiperactivo: inicio agudo + fluctuación + alteración de atención + agitación con riesgo.
- El tratamiento de base siempre incluye buscar causas reversibles y medidas no farmacológicas.
- Cuando estas fracasan, el haloperidol es el antipsicótico clásico para contención farmacológica en delirium (dosis bajas, monitorización).

¿Por qué fallan las otras opciones?
- Diazepam: las benzodiacepinas pueden empeorar el delirium y la confusión en ancianos; se reservan para abstinencia alcohólica.
- Amitriptilina: antidepresivo anticolinérgico que puede agravar delirium en adultos mayores.
- Fenitoína: no tiene rol en el control de agitación por delirium.

Clave: delirium hiperactivo grave tras medidas no farmacológicas = haloperidol en dosis bajas, no benzodiacepina.

Referencias: AGS Delirium Guidelines; Harrison's; UpToDate: Delirium in Older Adults.`,
  },
  {
    id: "dr-q-111",
    examArea: "Atención Primaria en Salud / Tamización",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "aps", "tamizacion", "cuello_uterino", "vph", "colombia"],
    statement:
      "Paciente femenina de 34 años, G2P2, asintomática. Consulta para chequeo general. Antecedentes: fumadora activa (5 cigarrillos/día). Última citología cervical realizada hace 2 años, con resultado negativo para lesión intraepitelial o malignidad. Según las guías de práctica clínica vigentes en Colombia (Ruta de Promoción y Mantenimiento de la Salud), ¿cuál es la conducta de tamización para cáncer de cuello uterino más apropiada?",
    options: [
      { id: "A", label: "A", text: "Realizar citología cervical anual por ser fumadora." },
      {
        id: "B",
        label: "B",
        text: "Realizar prueba de ADN para VPH de alto riesgo y continuar tamización según resultado.",
      },
      {
        id: "C",
        label: "C",
        text: "Repetir citología cervical ahora y posteriormente cada 3 años si continúa siendo negativa.",
      },
      { id: "D", label: "D", text: "No requiere ninguna prueba hasta cumplir 50 años." },
    ],
    correctOptionId: "B",
    explanation:
      "Entre 30 y 65 años, la estrategia preferida de tamización en Colombia es la prueba de ADN para VPH de alto riesgo, independientemente de tabaquismo o citologías previas negativas.",
    keyPoints: [
      "25-29 años: citología cervical. 30-65 años: prueba de ADN para VPH de alto riesgo (Colombia).",
      "VPH persistente = causa necesaria del cáncer de cuello uterino.",
      "El tabaquismo aumenta riesgo de progresión pero no modifica la estrategia por edad.",
      "VPH negativo = riesgo muy bajo; permite ampliar intervalos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa la ruta de tamización de cáncer de cuello uterino en Colombia: la estrategia depende de la edad, no de factores de riesgo como el tabaquismo.

¿Qué está ocurriendo realmente?
- Mujer de 34 años, asintomática, con citología negativa hace 2 años.
- Fumadora activa, pero sin síntomas ni lesiones previas.
- Consulta de promoción y mantenimiento de la salud en APS.
- Debe tamizarse según la edad (30-65 años), no según la citología previa sola.

¿Qué dato es clave en el examen?
- En Colombia (Res. 3280), entre 30 y 65 años la estrategia preferida es prueba de ADN para VPH de alto riesgo.
- El VPH persistente es causa necesaria del cáncer de cuello uterino; la prueba de ADN tiene mayor sensibilidad que la citología.
- El tabaquismo aumenta riesgo de progresión, pero no cambia la estrategia de tamización por edad.

¿Por qué fallan las otras opciones?
- Citología anual por ser fumadora: la edad define la estrategia; no se indica citología anual solo por tabaquismo.
- Repetir citología ahora y cada 3 años: esquema más propio de 25-29 años con citología, no la preferida a los 34.
- No tamizar hasta los 50 años: incorrecto; la tamización inicia mucho antes.

Clave: 34 años en Colombia = ADN VPH de alto riesgo, independiente del tabaquismo.

Referencias: Resolución 3280 de 2018; OMS Cervical Cancer Screening; INC Colombia.`,
  },
  {
    id: "dr-q-112",
    examArea: "Atención Primaria en Salud / Prevención cardiovascular",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "aps", "prevencion", "cardiovascular", "estilo_vida"],
    statement:
      "Hombre de 52 años con diagnóstico reciente de hipertensión arterial. Al examen físico presenta IMC de 31 kg/m². Trae laboratorios que muestran glucemia en ayunas de 108 mg/dL, HbA1c de 5.9%, creatinina de 0.9 mg/dL y colesterol LDL de 155 mg/dL. No refiere síntomas cardiovasculares ni limitación funcional. ¿Cuál es la intervención de prevención primaria más costo-efectiva y prioritaria en este escenario?",
    options: [
      { id: "A", label: "A", text: "Iniciar aspirina a dosis baja de forma indefinida." },
      {
        id: "B",
        label: "B",
        text: "Solicitar prueba de esfuerzo para descartar enfermedad coronaria silente.",
      },
      {
        id: "C",
        label: "C",
        text: "Implementar un programa estructurado de modificación del estilo de vida con reducción de peso, actividad física regular y cambios dietarios.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar ecografía Doppler carotídea como tamización cardiovascular.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Obesidad, hipertensión, prediabetes y dislipidemia coexisten. La modificación intensiva del estilo de vida es la intervención con mayor impacto poblacional, mejor relación costo-beneficio y capacidad de modificar simultáneamente todos los factores de riesgo.",
    keyPoints: [
      "Múltiples factores de riesgo modificables → intervención sobre estilo de vida primero.",
      "Pérdida de 5-10% del peso mejora PA, glucemia y perfil lipídico.",
      "Aspirina en prevención primaria: beneficio limitado vs riesgo de sangrado.",
      "No tamización cardiovascular indiscriminada en asintomáticos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa prevención cardiovascular primaria en APS: cuando coexisten varios factores de riesgo modificables, la intervención más costo-efectiva no es siempre un fármaco ni un estudio invasivo.

¿Qué está ocurriendo realmente?
- Hombre de 52 años con hipertensión reciente, obesidad (IMC 31) y prediabetes (glucemia 108, HbA1c 5.9%).
- Dislipidemia (LDL 155) sin síntomas cardiovasculares ni limitación funcional.
- Múltiples factores de riesgo modificables coexistiendo en un mismo paciente asintomático.
- Escenario típico de prevención primaria en consulta de APS.

¿Qué dato es clave en el examen?
- La modificación estructurada del estilo de vida impacta simultáneamente peso, presión arterial, glucemia y lípidos.
- Pérdida del 5-10% del peso corporal mejora de forma significativa todos estos parámetros.
- Es la intervención con mejor relación costo-beneficio antes de farmacoterapia agresiva o estudios de imagen.

¿Por qué fallan las otras opciones?
- Aspirina a dosis baja: en prevención primaria el beneficio es limitado frente al riesgo de sangrado; no es la prioridad aquí.
- Prueba de esfuerzo: no se indica tamización cardiovascular indiscriminada en asintomáticos de bajo riesgo funcional.
- Doppler carotídeo: tamización no recomendada de forma rutinaria en prevención primaria sin indicación específica.

Clave: múltiples factores de riesgo + asintomático = estilo de vida primero, no aspirina ni estudios.

Referencias: AHA Primary Prevention; ADA Standards of Care; Guías ESC Prevención CV.`,
  },
  {
    id: "dr-q-113",
    examArea: "Atención Primaria en Salud / Inmunizaciones",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "aps", "vacunacion", "influenza", "neumococo"],
    statement:
      "Mujer de 68 años con antecedente de EPOC (GOLD B) y diabetes mellitus tipo 2 compensada. Acude a consulta externa en el mes de abril. Al revisar su carné de vacunación se evidencia que recibió la vacuna contra influenza hace 14 meses y una dosis de vacuna conjugada antineumocócica (PCV13) a los 65 años. ¿Cuál es la recomendación de inmunización inmediata más adecuada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "No requiere ninguna vacuna en este momento porque ya recibió PCV13.",
      },
      { id: "B", label: "B", text: "Aplicar únicamente una nueva dosis anual de vacuna contra influenza." },
      {
        id: "C",
        label: "C",
        text: "Aplicar vacuna contra influenza y completar el esquema antineumocócico con PPSV23.",
      },
      { id: "D", label: "D", text: "Repetir PCV13 y diferir cualquier otra vacunación." },
    ],
    correctOptionId: "C",
    explanation:
      "Factores de riesgo importantes (≥65 años, EPOC, diabetes). Debe recibir vacunación anual contra influenza (última dosis hace 14 meses) y completar protección antineumocócica con PPSV23 tras PCV13 previa.",
    keyPoints: [
      "Influenza: vacunación anual obligatoria.",
      "Esquema clásico adultos: PCV13 seguida de PPSV23 para ampliar cobertura.",
      "EPOC + diabetes + edad = alto riesgo de complicaciones respiratorias.",
      "No repetir PCV13 rutinariamente; completar con PPSV23.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa el esquema de vacunación en adultos mayores con comorbilidades respiratorias: influenza anual y completar la protección antineumocócica son prioridades inmediatas.

¿Qué está ocurriendo realmente?
- Mujer de 68 años con EPOC GOLD B y diabetes tipo 2 compensada.
- Última vacuna contra influenza hace 14 meses (caducada para protección óptima).
- Recibió PCV13 a los 65 años, pero el esquema antineumocócico no está completo.
- Alto riesgo de complicaciones respiratorias graves por edad y comorbilidades.

¿Qué dato es clave en el examen?
- La vacuna contra influenza debe aplicarse anualmente; la protección disminuye con el tiempo.
- Esquema clásico en adultos: PCV13 seguida de PPSV23 para ampliar cobertura serológica.
- Tener solo PCV13 no significa esquema antineumocócico completo.

¿Por qué fallan las otras opciones?
- No requiere vacuna porque ya recibió PCV13: el esquema está incompleto sin PPSV23.
- Solo influenza: omite completar la protección antineumocócica pendiente.
- Repetir PCV13: no se indica repetir PCV13 rutinariamente; lo que falta es PPSV23.

Clave: ≥65 años + EPOC + PCV13 previa = influenza anual + PPSV23 ahora.

Referencias: CDC Adult Immunization Schedule; PAI Colombia; GOLD Report.`,
  },
  {
    id: "dr-q-114",
    examArea: "Atención Primaria en Salud / Tamización",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "aps", "tamizacion", "colorrectal", "cribado"],
    statement:
      "Hombre de 45 años que consulta por primera vez para evaluación preventiva. Niega antecedentes médicos de importancia, síntomas gastrointestinales o antecedentes familiares conocidos de cáncer colorrectal. Presión arterial promedio de dos tomas: 138/88 mmHg. Riesgo cardiovascular a 10 años calculado mediante ASCVD Score: 4.5%. ¿Cuál es la conducta de tamización para cáncer colorrectal más indicada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "No realizar tamización hasta los 50 años porque es un paciente de bajo riesgo.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar colonoscopia inmediata como única estrategia válida de tamización.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar tamización para cáncer colorrectal desde este momento mediante una estrategia validada de cribado.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar sangre oculta en materia fecal únicamente si desarrolla síntomas digestivos.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Se recomienda iniciar tamización del cáncer colorrectal en adultos de riesgo promedio a partir de los 45 años, incluso sin síntomas ni factores de riesgo adicionales.",
    keyPoints: [
      "Tamización colorrectal inicia a los 45 años en riesgo promedio (USPSTF, ACS).",
      "Estrategias válidas: SOH, FIT, ADN fecal, colonoscopia.",
      "Colonoscopia no es la única opción válida.",
      "Tamización = detectar antes de síntomas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa un cambio reciente en las guías de tamización: el cáncer colorrectal ya no se pospone hasta los 50 años en personas de riesgo promedio.

¿Qué está ocurriendo realmente?
- Hombre de 45 años en primera consulta preventiva, sin síntomas digestivos.
- Sin antecedentes familiares conocidos de cáncer colorrectal.
- Riesgo cardiovascular bajo (ASCVD 4.5%) pero edad que ya activa tamización colorrectal.
- Paciente de riesgo promedio que requiere cribado, no esperar síntomas.

¿Qué dato es clave en el examen?
- USPSTF y ACS recomiendan iniciar tamización a los 45 años en riesgo promedio.
- Estrategias válidas: sangre oculta en heces, FIT, ADN fecal o colonoscopia según disponibilidad.
- La tamización busca detectar lesiones antes de que aparezcan síntomas.

¿Por qué fallan las otras opciones?
- Esperar hasta los 50 años: desactualizado; el inicio recomendado bajó a los 45 años.
- Colonoscopia como única estrategia válida: hay múltiples métodos de cribado aceptados.
- SOH solo si hay síntomas: la tamización es justamente en personas asintomáticas.

Clave: 45 años + riesgo promedio = iniciar cribado colorrectal ya, con cualquier estrategia validada.

Referencias: USPSTF Colorectal Screening; ACS Guidelines; Res. 3280 Colombia.`,
  },
  {
    id: "dr-q-115",
    examArea: "Atención Primaria en Salud / Salud Pública",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "aps", "salud_publica", "brote", "vigilancia"],
    statement:
      "En una comunidad rural se reporta un aumento inusual de casos de fiebre, mialgias y exantema durante las últimas dos semanas. Como médico de Atención Primaria en Salud (APS), usted identifica que el 60% de los afectados viven cerca de un depósito de agua estancada. ¿Cuál es la primera acción de Salud Pública que debe liderar?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar tratamiento antibiótico empírico masivo a toda la población expuesta.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar pruebas diagnósticas individuales a todos los habitantes de la comunidad antes de intervenir.",
      },
      {
        id: "C",
        label: "C",
        text: "Notificar inmediatamente el posible brote al sistema de vigilancia epidemiológica e iniciar la investigación de campo y control de la fuente.",
      },
      {
        id: "D",
        label: "D",
        text: "Esperar la confirmación etiológica de todos los casos antes de implementar medidas comunitarias.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Aumento inusual de casos con características epidemiológicas comunes = sospecha de brote. Prioridad: activar vigilancia epidemiológica e implementar medidas de control oportunas sin esperar confirmación de todos los casos.",
    keyPoints: [
      "Brote = casos superiores al esperado para población, lugar y periodo.",
      "Notificación inmediata + investigación de campo + control de fuente.",
      "No esperar confirmación etiológica completa para actuar.",
      "APS: detección temprana y protección comunitaria.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa la respuesta de Salud Pública ante un posible brote: la prioridad no es tratar a todos ni esperar confirmación etiológica completa, sino activar vigilancia y control de la fuente.

¿Qué está ocurriendo realmente?
- Aumento inusual de casos de fiebre, mialgias y exantema en una comunidad rural en 2 semanas.
- El 60% de los afectados vive cerca de un depósito de agua estancada: posible fuente común.
- El médico de APS detecta un patrón epidemiológico que supera lo esperado para esa población y periodo.
- Cuadro compatible con brote epidémico (dengue, leptospirosis u otro arbovirus/zoonosis según contexto).

¿Qué dato es clave en el examen?
- Brote = número de casos superior al esperado para población, lugar y tiempo.
- La primera acción es notificar al sistema de vigilancia epidemiológica e iniciar investigación de campo.
- No se debe esperar confirmación etiológica de todos los casos para implementar medidas de control.

¿Por qué fallan las otras opciones?
- Antibiótico empírico masivo a toda la población: inadecuado sin caracterizar el brote; puede ser inútil o dañino.
- Pruebas diagnósticas a todos antes de intervenir: retrasa el control de la transmisión.
- Esperar confirmación etiológica completa: viola el principio de respuesta oportuna en salud pública.

Clave: aumento inusual + fuente común = notificar, investigar y controlar ya.

Referencias: INS Colombia Vigilancia; OPS Investigación de Brotes; CDC Epidemiology Principles.`,
  },
  {
    id: "dr-q-116",
    examArea: "Atención Primaria en Salud / Accesibilidad",
    topic: "Atención Primaria en Salud",
    difficulty: "easy",
    tags: ["dr-q", "universal", "metodoq", "aps", "accesibilidad", "barreras", "cronicos"],
    statement:
      "Paciente femenina de 58 años con antecedentes de hipertensión arterial y diabetes mellitus. Durante una consulta de control se evidencia que no ha reclamado sus medicamentos en los últimos 3 meses. Al indagar, refiere que el centro de salud se encuentra a aproximadamente 2 horas de su vivienda, no dispone de recursos económicos para el transporte y vive sola. Desde la perspectiva de Atención Primaria en Salud (APS), este caso representa principalmente una falla en:",
    options: [
      { id: "A", label: "A", text: "Calidad técnico-científica de la atención." },
      { id: "B", label: "B", text: "Seguridad del paciente." },
      { id: "C", label: "C", text: "Accesibilidad a los servicios de salud." },
      { id: "D", label: "D", text: "Vigilancia epidemiológica." },
    ],
    correctOptionId: "C",
    explanation:
      "La principal barrera es la dificultad geográfica y económica para acceder a servicios y medicamentos. Corresponde a una falla en el acceso efectivo al sistema de salud.",
    keyPoints: [
      "Accesibilidad = posibilidad real de utilizar servicios cuando se necesitan.",
      "Barreras: geográfica (distancia), económica (transporte), organizacional, cultural.",
      "No es calidad técnica ni seguridad del paciente.",
      "Barreras de acceso → inequidades y abandono involuntario del tratamiento.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa los determinantes del acceso en APS: cuando el paciente no recoge medicamentos, no siempre es desobediencia; puede ser una barrera estructural del sistema.

¿Qué está ocurriendo realmente?
- Mujer de 58 años con HTA y diabetes que no ha reclamado medicamentos en 3 meses.
- Vive sola y el centro de salud está a 2 horas de su vivienda.
- No tiene recursos económicos para transporte.
- Abandono involuntario del tratamiento por barreras geográficas y económicas, no por mala prescripción.

¿Qué dato es clave en el examen?
- Accesibilidad = posibilidad real de utilizar los servicios de salud cuando se necesitan.
- Las barreras pueden ser geográficas, económicas, organizacionales o culturales.
- Este caso es falla de acceso al sistema, no de calidad técnico-científica ni de seguridad del paciente.

¿Por qué fallan las otras opciones?
- Calidad técnico-científica: el tratamiento puede ser correcto; el problema es que la paciente no puede acceder a él.
- Seguridad del paciente: no hay error médico ni evento adverso por mala práctica clínica.
- Vigilancia epidemiológica: no corresponde; es un problema de acceso individual/comunitario.

Clave: distancia + sin dinero para transporte + abandono de medicamentos = accesibilidad, no mala calidad.

Referencias: OMS APS; OPS Renovación APS; Starfield Primary Care.`,
  },
  {
    id: "dr-q-117",
    examArea: "Atención Primaria en Salud / Salud mental",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "aps", "depresion", "adulto_mayor", "yesavage"],
    statement:
      "Hombre de 72 años consulta por cansancio y \"olvidos frecuentes\" de 6 meses de evolución. Vive solo desde que enviudó hace un año. Tiene antecedente de hipertensión arterial controlada. Al examen mental presenta afecto hiponímico, lenguaje enlentecido y escasa iniciativa. No se identifican ideas delirantes ni síntomas psicóticos. Se aplica la Escala de Depresión Geriátrica de Yesavage obteniendo 9/15 puntos, resultado sugestivo de depresión. ¿Cuál es la conducta más adecuada en Atención Primaria en Salud (APS)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Diagnosticar demencia y remitir a neurología para inicio de tratamiento específico.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar resonancia magnética cerebral urgente para descartar enfermedad neurodegenerativa.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar abordaje integral de depresión en el adulto mayor, evaluar riesgo suicida, apoyo social y seguimiento estrecho.",
      },
      {
        id: "D",
        label: "D",
        text: "Considerar los síntomas como cambios normales asociados al envejecimiento.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Síntomas compatibles con depresión en el adulto mayor y Yesavage sugestivo. En APS: confirmar diagnóstico clínico, valorar riesgo suicida, intervenir factores psicosociales y establecer seguimiento.",
    keyPoints: [
      "Quejas de memoria + viudez + afecto depresivo + Yesavage positivo → depresión antes que demencia.",
      "Pseudodemencia depresiva: depresión simula deterioro cognitivo.",
      "Evaluar riesgo suicida en adultos mayores que viven solos.",
      "Tristeza persistente no es envejecimiento normal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa depresión vs demencia en el adulto mayor: los "olvidos" con viudez reciente y Yesavage positivo obligan a tratar depresión antes de etiquetar demencia.

¿Qué está ocurriendo realmente?
- Hombre de 72 años con cansancio y olvidos de 6 meses tras enviudar hace un año.
- Vive solo, con afecto hiponímico, lenguaje enlentecido y escasa iniciativa.
- Sin síntomas psicóticos ni ideas delirantes.
- Escala de Yesavage 9/15, sugestiva de depresión geriátrica (pseudodemencia depresiva posible).

¿Qué dato es clave en el examen?
- La depresión en el anciano puede manifestarse con quejas cognitivas que simulan demencia.
- Yesavage es tamización, no diagnóstico definitivo; requiere abordaje clínico integral.
- En APS: confirmar depresión, evaluar riesgo suicida, apoyo social y seguimiento estrecho.

¿Por qué fallan las otras opciones?
- Diagnosticar demencia y remitir a neurología: prematuro sin tratar depresión reversible primero.
- RM cerebral urgente: no es la prioridad ante cuadro depresivo con contexto afectivo claro.
- Cambios normales del envejecimiento: la tristeza persistente y el Yesavage positivo no son envejecimiento normal.

Clave: viudez + olvidos + Yesavage positivo = depresión primero, no demencia de entrada.

Referencias: OMS Salud Mental Adulto Mayor; Yesavage GDS; Guías Salud Mental APS.`,
  },
  {
    id: "dr-q-118",
    examArea: "Atención Primaria en Salud / Hipertensión",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "aps", "hipertension", "mapa", "diagnostico"],
    statement:
      "Paciente masculino de 48 años, con obesidad (IMC 32 kg/m²), consulta para valoración cardiovascular. En dos consultas diferentes presenta cifras tensionales de 146/94 mmHg y 142/92 mmHg. No presenta evidencia clínica de daño de órgano blanco ni síntomas cardiovasculares. Usted sospecha hipertensión arterial. ¿Cuál es el estándar de oro actual para confirmar el diagnóstico según la evidencia disponible en Atención Primaria en Salud?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Repetir la presión arterial en el consultorio durante tres consultas adicionales.",
      },
      {
        id: "B",
        label: "B",
        text: "Realizar monitoreo ambulatorio de presión arterial de 24 horas (MAPA).",
      },
      { id: "C", label: "C", text: "Solicitar ecocardiograma transtorácico." },
      {
        id: "D",
        label: "D",
        text: "Iniciar tratamiento antihipertensivo y reevaluar la respuesta clínica.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El MAPA es el método de referencia para confirmar hipertensión arterial. Permite detectar hipertensión sostenida, de bata blanca y enmascarada antes de etiquetar al paciente como hipertenso.",
    keyPoints: [
      "MAPA = estándar de referencia para confirmar HTA.",
      "Detecta HTA de bata blanca y enmascarada.",
      "Ecocardiograma evalúa daño orgánico, no confirma diagnóstico.",
      "Confirmar diagnóstico antes de terapia crónica (salvo emergencias).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa cómo confirmar hipertensión arterial en APS: las cifras en consultorio no bastan; el MAPA es el estándar de referencia actual.

¿Qué está ocurriendo realmente?
- Hombre de 48 años con obesidad (IMC 32) y dos mediciones elevadas en consultorio (146/94 y 142/92 mmHg).
- Sin daño de órgano blanco ni síntomas cardiovasculares.
- Sospecha de hipertensión arterial que requiere confirmación antes de iniciar tratamiento crónico.
- Posible componente de hipertensión de bata blanca o enmascarada que solo el MAPA detecta.

¿Qué dato es clave en el examen?
- El monitoreo ambulatorio de presión arterial (MAPA) de 24 horas es el método de referencia para confirmar HTA.
- Permite distinguir HTA sostenida, de bata blanca y enmascarada.
- Confirmar el diagnóstico antes de etiquetar al paciente e iniciar terapia indefinida.

¿Por qué fallan las otras opciones?
- Repetir PA en consultorio tres veces más: estrategia histórica, pero ya no es el estándar de oro.
- Ecocardiograma: evalúa daño orgánico por HTA, no confirma el diagnóstico hipertensivo.
- Iniciar tratamiento y reevaluar: se debe confirmar antes de terapia crónica (salvo emergencia hipertensiva).

Clave: PA elevada en consultorio sin daño orgánico = confirmar con MAPA antes de tratar.

Referencias: ESH Hypertension Guidelines; ISH Global Guidelines; Guías HTA APS.`,
  },
  {
    id: "dr-q-119",
    examArea: "Atención Primaria en Salud / Diabetes",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "aps", "diabetes", "albuminuria", "nefropatia"],
    statement:
      "Durante una jornada de salud enfocada en riesgo cardiovascular, un paciente de 55 años con diabetes mellitus adecuadamente controlada pregunta por qué debe realizarse una prueba anual de albuminuria si no presenta síntomas urinarios ni alteraciones evidentes en su estado de salud. Como médico de Atención Primaria en Salud, ¿cuál es la mejor explicación para justificar esta recomendación?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Porque la albuminuria permite diagnosticar infecciones urinarias asintomáticas antes de que produzcan complicaciones.",
      },
      {
        id: "B",
        label: "B",
        text: "Porque la albuminuria es un marcador temprano de daño renal y de riesgo cardiovascular, incluso antes de que aparezcan síntomas o aumente la creatinina sérica.",
      },
      {
        id: "C",
        label: "C",
        text: "Porque la albuminuria predice el desarrollo de cáncer renal en pacientes diabéticos.",
      },
      {
        id: "D",
        label: "D",
        text: "Porque la albuminuria es necesaria para decidir la dosis de insulina utilizada por el paciente.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La albuminuria detecta precozmente enfermedad renal diabética y estratifica riesgo cardiovascular, permitiendo intervenciones oportunas antes de manifestaciones clínicas o elevación de creatinina.",
    keyPoints: [
      "Albuminuria = primer hallazgo detectable de nefropatía diabética.",
      "Puede aparecer con creatinina normal.",
      "También es marcador de disfunción endotelial y riesgo CV.",
      "Tamización anual en diabetes = prevención secundaria.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa por qué tamizamos albuminuria en diabetes asintomática: es el primer signo de daño renal y también un marcador de riesgo cardiovascular sistémico.

¿Qué está ocurriendo realmente?
- Paciente de 55 años con diabetes bien controlada, sin síntomas urinarios.
- Pregunta por qué necesita albuminuria anual si se siente bien.
- La nefropatía diabética puede progresar silenciosamente años antes de elevar la creatinina.
- La albuminuria refleja daño glomerular y disfunción endotelial sistémica.

¿Qué dato es clave en el examen?
- La microalbuminuria es el primer hallazgo detectable de enfermedad renal diabética.
- Puede estar presente con creatinina sérica normal.
- También estratifica riesgo cardiovascular; no es solo un marcador renal.
- La tamización anual en diabetes es prevención secundaria oportuna.

¿Por qué fallan las otras opciones?
- Diagnosticar infecciones urinarias asintomáticas: la albuminuria no es prueba de ITU.
- Predecir cáncer renal: no es el propósito de la tamización de albuminuria en diabetes.
- Decidir dosis de insulina: la albuminuria no guía ajuste de insulina.

Clave: diabetes asintomática + albuminuria anual = detectar daño renal y riesgo CV antes de síntomas.

Referencias: ADA Standards of Care; KDIGO CKD Guidelines; Res. 3280 Colombia.`,
  },
  {
    id: "dr-q-120",
    examArea: "Atención Primaria en Salud / Promoción de la salud",
    topic: "Atención Primaria en Salud",
    difficulty: "easy",
    tags: ["dr-q", "universal", "metodoq", "aps", "promocion", "determinantes_sociales", "obesidad"],
    statement:
      "Durante la implementación de una estrategia de promoción de la salud en un barrio con alta prevalencia de obesidad, usted decide trabajar con las tiendas locales para aumentar la disponibilidad de frutas y verduras y disminuir la visibilidad de bebidas azucaradas. ¿Cómo se clasifica este tipo de intervención?",
    options: [
      { id: "A", label: "A", text: "Prevención terciaria." },
      { id: "B", label: "B", text: "Tamización poblacional." },
      {
        id: "C",
        label: "C",
        text: "Intervención sobre determinantes sociales y ambientales de la salud.",
      },
      { id: "D", label: "D", text: "Prevención cuaternaria." },
    ],
    correctOptionId: "C",
    explanation:
      "La estrategia modifica el entorno comunitario para facilitar elecciones saludables, actuando sobre determinantes sociales y ambientales de la salud, no sobre el tratamiento individual.",
    keyPoints: [
      "Determinantes sociales: condiciones donde nacen, crecen, trabajan y envejecen.",
      "Modificar entorno alimentario = promoción de la salud poblacional.",
      "Prevención terciaria = reducir discapacidad de enfermedad establecida.",
      "Tamización = buscar enfermedad en aparentemente sanos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa promoción de la salud vs prevención clínica: modificar el entorno alimentario del barrio es actuar sobre determinantes sociales, no tratar obesidad caso a caso.

¿Qué está ocurriendo realmente?
- Estrategia de promoción de la salud en un barrio con alta prevalencia de obesidad.
- Intervención comunitaria: más frutas y verduras en tiendas locales, menos visibilidad de bebidas azucaradas.
- Se modifica el entorno donde las personas toman decisiones alimentarias diarias.
- No es consulta individual ni tamización de enfermedad.

¿Qué dato es clave en el examen?
- Los determinantes sociales son las condiciones en las que nacen, crecen, trabajan y envejecen.
- Cambiar disponibilidad y visibilidad de alimentos es intervención sobre determinantes ambientales de la salud.
- La promoción de la salud actúa sobre factores que facilitan o dificultan elecciones saludables.

¿Por qué fallan las otras opciones?
- Prevención terciaria: reduce discapacidad de enfermedad ya establecida; aquí se previenen factores de riesgo poblacionales.
- Tamización poblacional: busca enfermedad en aparentemente sanos; esto no diagnostica, modifica el entorno.
- Prevención cuaternaria: evita intervenciones médicas innecesarias; no aplica a esta estrategia comunitaria.

Clave: cambiar tiendas del barrio = determinantes sociales/ambientales, no prevención terciaria ni tamización.

Referencias: Carta de Ottawa; OMS Determinantes Sociales; OPS APS; Res. 3280 Colombia.`,
  },
  {
    id: "dr-q-121",
    examArea: "Ciencias Básicas / Farmacología cardiovascular",
    topic: "Ciencias Básicas",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "fisiologia", "dobutamina", "inotropicos"],
    statement:
      "Paciente masculino de 68 años que ingresa a urgencias por dolor torácico opresivo de 3 horas de evolución. Al examen físico presenta PA 70/40 mmHg, FC 115 lpm, extremidades frías, diaforesis y llenado capilar de 5 segundos. El ECG evidencia supradesnivel del ST en V1-V6. Se diagnostica choque cardiogénico secundario a infarto agudo de miocardio anterior extenso y se inicia infusión de dobutamina. Quince minutos después se observa mejoría de la presión arterial y aumento del gasto cardíaco. A nivel celular, ¿cuál es el mecanismo fisiológico directo mediante el cual este fármaco incrementa la contractilidad miocárdica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Inhibición de la Na+/K+ ATPasa con aumento secundario del calcio intracelular.",
      },
      {
        id: "B",
        label: "B",
        text: "Estimulación de receptores β1 cardíacos con incremento de AMPc y entrada de calcio a la célula.",
      },
      {
        id: "C",
        label: "C",
        text: "Bloqueo de receptores muscarínicos cardíacos con aumento de la frecuencia cardíaca.",
      },
      {
        id: "D",
        label: "D",
        text: "Inhibición de la fosfodiesterasa con aumento primario de GMPc intracelular.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La dobutamina es un agonista β1 predominante. Su efecto inotrópico positivo ocurre por aumento del AMPc intracelular, favoreciendo apertura de canales de calcio y mayor disponibilidad de calcio para la contracción miocárdica.",
    keyPoints: [
      "Dobutamina → agonismo β1 → ↑ AMPc → ↑ calcio intracelular → ↑ contractilidad.",
      "Digoxina: inhibe Na+/K+ ATPasa. Milrinona: inhibe fosfodiesterasa 3.",
      "El calcio regula la interacción actina-miosina.",
      "Inotrópico de elección en choque cardiogénico con bajo gasto.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa el mecanismo celular de la dobutamina en choque cardiogénico: no es digoxina ni milrinona; es agonismo β1 con aumento de AMPc y calcio intracelular.

¿Qué está ocurriendo realmente?
- IAM anterior extenso con supradesnivel del ST en V1-V6 y choque cardiogénico (PA 70/40, extremidades frías).
- Se inicia dobutamina y mejora la presión arterial y el gasto cardíaco.
- La pregunta pide el mecanismo fisiológico directo del efecto inotrópico positivo a nivel celular.
- Dobutamina es agonista β1 predominante en el miocardio.

¿Qué dato es clave en el examen?
- β1 → proteína Gs → adenilato ciclasa → ↑ AMPc intracelular.
- PKA fosforila canales de calcio tipo L → mayor entrada de Ca²⁺ al miocito.
- Más calcio disponible para la unión actina-miosina → mayor contractilidad.

¿Por qué fallan las otras opciones?
- Inhibición Na⁺/K⁺ ATPasa: mecanismo de la digoxina, no de la dobutamina.
- Bloqueo muscarínico: aumentaría FC por vía parasimpática, no es el mecanismo inotrópico principal de dobutamina.
- Inhibición fosfodiesterasa (↑ GMPc): mecanismo de milrinona (inotrópico tipo PDE3), no de dobutamina.

Clave: dobutamina = β1 → AMPc → Ca²⁺ → contractilidad; digoxina = Na/K ATPasa; milrinona = PDE3.

Referencias: Katzung; Guyton & Hall; Braunwald's Heart Disease.`,
  },
  {
    id: "dr-q-122",
    examArea: "Ciencias Básicas / Fisiopatología del choque",
    topic: "Ciencias Básicas",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "fisiopatologia", "sepsis", "vasoplejia", "inos"],
    statement:
      "Mujer de 72 años, procedente de un asilo, es llevada a urgencias por fiebre, obnubilación y disuria. Al examen físico presenta PA 75/40 mmHg, FC 125 lpm, temperatura de 39.2°C, extremidades calientes y rubicundas. Los gases arteriales muestran lactato de 5.5 mmol/L. Se diagnostica choque séptico. Tras recibir 3 litros de cristaloides persiste hipotensa y requiere vasopresores a dosis elevadas. ¿Cuál es la alteración fisiopatológica celular principal responsable de la vasoplejía refractaria observada en esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Inhibición de la síntesis de AMPc en el músculo liso vascular.",
      },
      {
        id: "B",
        label: "B",
        text: "Sobreexpresión de la óxido nítrico sintasa inducible (iNOS) con producción excesiva de óxido nítrico.",
      },
      {
        id: "C",
        label: "C",
        text: "Bloqueo de los canales de calcio tipo L del músculo liso vascular.",
      },
      {
        id: "D",
        label: "D",
        text: "Disminución de la producción de prostaciclinas por el endotelio vascular.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "En choque séptico, citoquinas inducen iNOS con producción masiva de NO. El NO activa guanilato ciclasa → ↑ GMPc → relajación del músculo liso vascular → vasoplejía refractaria.",
    keyPoints: [
      "Choque séptico = choque distributivo con vasoplejía.",
      "Citoquinas → iNOS → NO → GMPc → vasodilatación.",
      "Extremidades calientes en fases iniciales (↓ resistencia vascular).",
      "Hiporreactividad a catecolaminas contribuye a hipotensión refractaria.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa la fisiopatología molecular del choque séptico refractario: la vasoplejía no se explica por falla de bomba, sino por producción masiva de óxido nítrico vía iNOS.

¿Qué está ocurriendo realmente?
- Mujer de 72 años con fiebre, obnubilación, disuria y choque séptico (PA 75/40, lactato 5.5).
- Extremidades calientes y rubicundas: patrón de choque distributivo con vasodilatación periférica.
- Persiste hipotensa tras 3 litros de cristaloides y requiere vasopresores a dosis altas.
- Cuadro de vasoplejía refractaria en sepsis avanzada.

¿Qué dato es clave en el examen?
- En sepsis, citoquinas (TNF-α, IL-1) inducen sobreexpresión de óxido nítrico sintasa inducible (iNOS).
- iNOS produce NO masivo → activa guanilato ciclasa → ↑ GMPc → relajación del músculo liso vascular.
- Secuencia clásica de examen: sepsis → iNOS → NO → GMPc → vasoplejía.

¿Por qué fallan las otras opciones?
- Inhibición de síntesis de AMPc: el problema es vía GMPc por NO, no falla de AMPc en músculo liso.
- Bloqueo canales de calcio tipo L: los bloqueadores de calcio empeoran la hipotensión en choque séptico, no explican la vasoplejía.
- Disminución de prostaciclinas: no es el mecanismo principal de la vasoplejía refractaria en sepsis.

Clave: choque séptico caliente + vasopresores refractarios = iNOS → NO → GMPc → vasoplejía.

Referencias: Harrison's; Surviving Sepsis; Marino's ICU Book.`,
  },
  {
    id: "dr-q-123",
    examArea: "Ciencias Básicas / Trastornos ácido-base",
    topic: "Ciencias Básicas",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "acidosis", "cad", "hipercloremica"],
    statement:
      "Hombre de 25 años con Diabetes Mellitus tipo 1, ingresa por cetoacidosis diabética severa. Gasometría inicial: pH 7.10, HCO₃⁻ 8 mEq/L, pCO₂ 25 mmHg, Na⁺ 140 mEq/L, Cl⁻ 98 mEq/L. Recibe reanimación con 6 litros de solución salina al 0.9% e infusión de insulina. Veinticuatro horas después, las cetonas son negativas, pero la gasometría muestra: pH 7.25, HCO₃⁻ 14 mEq/L, pCO₂ 30 mmHg, Na⁺ 145 mEq/L, Cl⁻ 118 mEq/L. ¿Cuál es el mecanismo fisiopatológico que explica la persistencia de la acidosis?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Producción persistente de cuerpos cetónicos por resistencia a la insulina.",
      },
      {
        id: "B",
        label: "B",
        text: "Acumulación de ácido láctico secundaria a hipoperfusión tisular persistente.",
      },
      {
        id: "C",
        label: "C",
        text: "Desarrollo de acidosis metabólica hiperclorémica por expansión del compartimento extracelular con solución salina.",
      },
      {
        id: "D",
        label: "D",
        text: "Retención renal de fosfatos con aumento del anión gap.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "La cetoacidosis fue corregida (cetonas negativas). La administración masiva de NaCl 0.9% elevó el cloro sérico, produciendo acidosis metabólica hiperclorémica con anión gap normal.",
    keyPoints: [
      "CAD resuelta: cetonas negativas + anión gap normalizado.",
      "NaCl 0.9% aporta 154 mEq/L de Cl⁻ → acidosis hiperclorémica.",
      "Exceso de Cl⁻ reduce bicarbonato por electroneutralidad.",
      "Persistencia de acidosis ≠ CAD activa si cetonas negativas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa una trampa post-CAD: la acidosis puede persistir aunque las cetonas ya sean negativas, por acidosis hiperclorémica inducida por solución salina al 0.9%.

¿Qué está ocurriendo realmente?
- Joven con CAD severa (pH 7.10, HCO₃⁻ 8, anión gap elevado por cetonas).
- Tratamiento con 6 litros de NaCl 0.9% e insulina.
- A las 24 h las cetonas son negativas (CAD resuelta), pero persiste acidosis (pH 7.25, HCO₃⁻ 14).
- El cloro subió de 98 a 118 mEq/L: acidosis metabólica hiperclorémica con anión gap normal.

¿Qué dato es clave en el examen?
- NaCl 0.9% aporta 154 mEq/L de cloro; grandes volúmenes expanden el compartimento extracelular con exceso de Cl⁻.
- El exceso de cloro reduce bicarbonato por equilibrio de electroneutralidad.
- Cetonas negativas confirman que la CAD activa ya se resolvió; la acidosis restante es hiperclorémica.

¿Por qué fallan las otras opciones?
- Cetonas persistentes por resistencia a insulina: las cetonas ya son negativas.
- Acidosis láctica por hipoperfusión: no explica el cloro de 118 ni el patrón hiperclorémico.
- Retención de fosfatos con anión gap elevado: el anión gap se normalizó; el problema es el cloro.

Clave: CAD resuelta (cetonas negativas) + Cl⁻ 118 + acidosis = hipercloremia por NaCl 0.9%.

Referencias: Harrison's; ADA Standards; UpToDate: DKA and Hyperchloremic Acidosis.`,
  },
  {
    id: "dr-q-124",
    examArea: "Ciencias Básicas / Fisiología respiratoria",
    topic: "Ciencias Básicas",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "fisiologia", "epoc", "hipercapnia", "oxigeno"],
    statement:
      "Mujer de 65 años, fumadora pesada, con diagnóstico de EPOC severo. Ingresa por exacerbación infecciosa. Presenta disnea, cianosis y somnolencia. Gasometría inicial (FiO₂ 21%): pH 7.31, pCO₂ 58 mmHg, pO₂ 45 mmHg. Se administra oxígeno mediante mascarilla con reservorio a 15 L/min (FiO₂ cercana al 100%). Treinta minutos después la SpO₂ aumenta a 98%, pero la paciente desarrolla deterioro progresivo del estado de conciencia hasta coma hipercápnico. Gasometría de control: pH 7.15, pCO₂ 85 mmHg, pO₂ 120 mmHg. ¿Cuál es el mecanismo fisiopatológico primario que explica el empeoramiento agudo de la hipercapnia tras la oxigenoterapia?",
    options: [
      { id: "A", label: "A", text: "Supresión completa del estímulo respiratorio hipóxico." },
      {
        id: "B",
        label: "B",
        text: "Aumento de la producción metabólica de CO₂ por hiperoxia.",
      },
      {
        id: "C",
        label: "C",
        text: "Reversión de la vasoconstricción pulmonar hipóxica con incremento del desajuste ventilación/perfusión (V/Q).",
      },
      {
        id: "D",
        label: "D",
        text: "Disminución aguda de la afinidad de la hemoglobina por el oxígeno.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "La hiperoxia revierte la vasoconstricción pulmonar hipóxica, desviando flujo hacia alveolos mal ventilados y empeorando el desajuste V/Q. Este es el mecanismo principal de hipercapnia inducida por oxígeno en EPOC.",
    keyPoints: [
      "Mecanismo principal: empeoramiento V/Q por abolición de vasoconstricción hipóxica.",
      "Vasoconstricción hipóxica redirige flujo a zonas mejor ventiladas.",
      "Efecto Haldane y supresión del estímulo hipóxico contribuyen, pero no son principales.",
      "Meta SpO₂ en EPOC grave: ~88-92%.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa la hipercapnia inducida por oxígeno en EPOC: el mecanismo principal no es solo "apagar el estímulo hipóxico", sino empeorar el desajuste ventilación-perfusión.

¿Qué está ocurriendo realmente?
- Mujer con EPOC severo en exacerbación (pH 7.31, pCO₂ 58, pO₂ 45 con aire ambiente).
- Recibe O₂ a alto flujo (FiO₂ ~100%): SpO₂ sube a 98% pero entra en coma hipercápnico.
- Gasometría de control: pH 7.15, pCO₂ 85, pO₂ 120.
- Paradójico: más oxígeno empeoró la hipercapnia y el nivel de conciencia.

¿Qué dato es clave en el examen?
- La hiperoxia revierte la vasoconstricción pulmonar hipóxica (mecanismo de defensa en EPOC).
- Se redirige flujo sanguíneo hacia alvéolos mal ventilados → empeora el desajuste V/Q.
- Menor eliminación de CO₂ → narcosis por CO₂. Meta de SpO₂ en EPOC grave: ~88-92%.

¿Por qué fallan las otras opciones?
- Supresión completa del estímulo hipóxico: contribuye, pero la evidencia favorece el deterioro V/Q como mecanismo principal.
- Aumento de producción de CO₂ por hiperoxia: no es el mecanismo central de la hipercapnia inducida por O₂.
- Disminución de afinidad de Hb por O₂ (efecto Haldane): contribuye secundariamente, no es el mecanismo primario preguntado.

Clave: EPOC + O₂ alto flujo + coma hipercápnico = empeoramiento V/Q por abolir vasoconstricción hipóxica.

Referencias: West's Respiratory Physiology; GOLD Report; Harrison's.`,
  },
  {
    id: "dr-q-125",
    examArea: "Ciencias Básicas / Farmacología cardiovascular",
    topic: "Ciencias Básicas",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "farmacologia", "digoxina", "hipopotasemia"],
    statement:
      "Hombre de 75 años con insuficiencia cardíaca con fracción de eyección reducida, en tratamiento crónico con digoxina, enalapril y furosemida. Consulta por náuseas, visión con halos amarillentos (xantopsia) y palpitaciones. El ECG muestra extrasístoles ventriculares frecuentes. Laboratorios: creatinina 1.1 mg/dL, K⁺ 2.8 mEq/L, Mg²⁺ 1.5 mg/dL. Se sospecha intoxicación digitálica. Desde el punto de vista farmacodinámico, ¿por qué la hipopotasemia facilita la toxicidad por digoxina en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Porque aumenta la eliminación renal de digoxina y genera metabolitos tóxicos.",
      },
      {
        id: "B",
        label: "B",
        text: "Porque disminuye la unión de digoxina a proteínas plasmáticas aumentando la fracción libre.",
      },
      {
        id: "C",
        label: "C",
        text: "Porque el potasio y la digoxina compiten por el mismo sitio de unión en la Na⁺/K⁺ ATPasa, aumentando la fijación de digoxina cuando el potasio disminuye.",
      },
      {
        id: "D",
        label: "D",
        text: "Porque favorece la degradación intracelular de la Na⁺/K⁺ ATPasa.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Potasio y digoxina compiten por la Na⁺/K⁺ ATPasa. Con hipopotasemia hay menor competencia, mayor unión de digoxina, mayor inhibición de la bomba y mayor toxicidad (mecanismo farmacodinámico).",
    keyPoints: [
      "Digoxina inhibe Na⁺/K⁺ ATPasa → ↑ Na intracelular → ↑ Ca → inotropismo.",
      "↓ K⁺ = ↑ unión de digoxina a la bomba (competencia).",
      "Hipomagnesemia también favorece toxicidad y arritmias.",
      "Xantopsia + arritmias + hipopotasemia = intoxicación digitálica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa toxicidad digitálica: la hipopotasemia no aumenta niveles séricos de digoxina, sino que facilita su unión a la Na⁺/K⁺ ATPasa por competencia farmacodinámica.

¿Qué está ocurriendo realmente?
- Anciano con IC-FEr en digoxina, enalapril y furosemida (diurético que depleta K⁺).
- Náuseas, xantopsia (halos amarillentos) y extrasístoles ventriculares.
- K⁺ 2.8 mEq/L y Mg²⁺ 1.5 mg/dL: electrolitos que favorecen toxicidad.
- Cuadro clásico de intoxicación digitálica con hipopotasemia e hipomagnesemia.

¿Qué dato es clave en el examen?
- Digoxina inhibe la Na⁺/K⁺ ATPasa → ↑ Na⁺ intracelular → intercambiador Na/Ca → ↑ Ca²⁺ → inotropismo.
- Potasio y digoxina compiten por el mismo sitio de unión en la bomba.
- Con hipopotasemia hay menor competencia → más unión de digoxina → más inhibición → más toxicidad (farmacodinámico, no farmacocinético).

¿Por qué fallan las otras opciones?
- Aumento de eliminación renal con metabolitos tóxicos: no es el mecanismo; la creatinina está normal.
- Disminución de unión a proteínas plasmáticas: no explica la competencia en la bomba sodio-potasio.
- Degradación intracelular de la bomba: no es el mecanismo de potenciación por hipopotasemia.

Clave: xantopsia + arritmias + hipopotasemia en digoxina = más unión a Na/K ATPasa por competencia con K⁺.

Referencias: Katzung; Goodman & Gilman's; Braunwald's Heart Disease.`,
  },
  {
    id: "dr-q-126",
    examArea: "Ciencias Básicas / Fisiopatología cardiovascular",
    topic: "Ciencias Básicas",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "fisiopatologia", "reperfusion", "iam"],
    statement:
      "Hombre de 55 años consulta por dolor torácico opresivo de 4 horas de evolución. El ECG muestra un infarto agudo de miocardio con elevación del ST en cara anteroseptal. Es llevado a intervención coronaria percutánea primaria, logrando restablecer el flujo en la arteria descendente anterior. Minutos después de la reperfusión desarrolla arritmias ventriculares, aumento brusco de biomarcadores cardíacos y deterioro transitorio de la contractilidad miocárdica regional. ¿Cuál es el mecanismo patológico celular responsable de este daño tisular paradójico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Activación de la vía extrínseca de coagulación con formación de microtrombos intracoronarios.",
      },
      {
        id: "B",
        label: "B",
        text: "Producción masiva de especies reactivas de oxígeno con sobrecarga intracelular de calcio y daño mitocondrial.",
      },
      {
        id: "C",
        label: "C",
        text: "Inhibición de la fosforilación oxidativa por disminución aguda del oxígeno intracelular.",
      },
      {
        id: "D",
        label: "D",
        text: "Acumulación progresiva de cuerpos cetónicos dentro del miocito isquémico.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Lesión por reperfusión: restablecimiento súbito del flujo genera explosión de radicales libres (ROS), sobrecarga de calcio intracelular y daño mitocondrial, produciendo lesión adicional a la isquemia inicial.",
    keyPoints: [
      "Daño paradójico ocurre DESPUÉS de recuperar el flujo.",
      "ROS + sobrecarga de Ca²⁺ + poro de transición mitocondrial.",
      "Manifestaciones: arritmias de reperfusión, miocardio aturdido, ↑ biomarcadores.",
      "Más oxígeno no siempre significa menos daño celular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa la lesión por reperfusión en IAM: restablecer el flujo salva al paciente, pero puede dañar miocito adicionalmente por estrés oxidativo y sobrecarga de calcio.

¿Qué está ocurriendo realmente?
- IAM con elevación del ST en cara anteroseptal tratado con angioplastia primaria exitosa.
- Minutos después de la reperfusión: arritmias ventriculares, subida brusca de biomarcadores y deterioro transitorio de contractilidad regional.
- Daño paradójico que ocurre DESPUÉS de recuperar el flujo, no durante la isquemia.
- Miocardio aturdido (stunning) y arritmias de reperfusión como manifestaciones clínicas.

¿Qué dato es clave en el examen?
- El restablecimiento súbito del flujo genera explosión de especies reactivas de oxígeno (ROS).
- Sobrecarga de calcio intracelular y apertura del poro de transición mitocondrial.
- Necrosis/apoptosis adicional al daño isquémico inicial + arritmias ventriculares.

¿Por qué fallan las otras opciones?
- Microtrombos por vía extrínseca: no explica el patrón inmediato post-reperfusión con ROS.
- Inhibición de fosforilación oxidativa por falta de O₂: al reperfundir hay oxígeno; el daño es por exceso de estrés oxidativo, no por hipoxia.
- Cetonas en miocito isquémico: no es el mecanismo de lesión por reperfusión.

Clave: PCI exitosa + arritmias + ↑ troponina inmediata = lesión por reperfusión (ROS + Ca²⁺ + mitocondria).

Referencias: Robbins & Cotran; Braunwald's; ESC ACS Guidelines.`,
  },
  {
    id: "dr-q-127",
    examArea: "Ciencias Básicas / Endocrinología",
    topic: "Ciencias Básicas",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "fisiologia", "graves", "propranolol"],
    statement:
      "Mujer de 35 años, previamente sana, consulta por palpitaciones, pérdida de peso, temblor fino distal, sudoración y exoftalmos. Laboratorios: TSH <0.01 mUI/L y T4 libre marcadamente elevada. Se diagnostica Enfermedad de Graves con tirotoxicosis severa. El médico residente inicia propranolol a dosis altas. Desde el punto de vista bioquímico, además del bloqueo betaadrenérgico para controlar la taquicardia y el temblor, ¿qué otro mecanismo fisiológico clave justifica la elección de propranolol sobre otros betabloqueadores?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Inhibición de la síntesis tiroidea de T3 y T4 mediante bloqueo de la peroxidasa tiroidea.",
      },
      {
        id: "B",
        label: "B",
        text: "Inhibición de la liberación de hormonas tiroideas almacenadas en el coloide.",
      },
      {
        id: "C",
        label: "C",
        text: "Disminución de la conversión periférica de T4 a T3 por inhibición de la 5'-desyodasa.",
      },
      {
        id: "D",
        label: "D",
        text: "Aumento de la depuración hepática de hormonas tiroideas mediante inducción enzimática.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "A dosis altas, el propranolol inhibe parcialmente la 5'-desyodasa, reduciendo la conversión periférica de T4 a T3 (hormona metabólicamente más activa), además de su efecto betabloqueante.",
    keyPoints: [
      "T3 es la hormona más activa; gran parte se forma por conversión periférica de T4.",
      "Propranolol: β-bloqueo + inhibición parcial de 5'-desyodasa.",
      "Metimazol/PTU inhiben síntesis; propranolol reduce síntomas y conversión.",
      "Preferido en tirotoxicosis severa y tormenta tiroidea.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa por qué el propranolol es preferido en tirotoxicosis severa: además del betabloqueo, inhibe la conversión periférica de T4 a T3.

¿Qué está ocurriendo realmente?
- Mujer de 35 años con Enfermedad de Graves: TSH suprimida, T4 libre elevado, exoftalmos.
- Síntomas adrenérgicos: palpitaciones, temblor, sudoración, pérdida de peso.
- Se inicia propranolol a dosis altas para control sintomático.
- La pregunta pide el mecanismo bioquímico que diferencia propranolol de otros betabloqueadores.

¿Qué dato es clave en el examen?
- T3 es la hormona metabólicamente más activa; gran parte se forma por conversión periférica de T4.
- A dosis altas, el propranolol inhibe parcialmente la 5'-desyodasa.
- Esto reduce la conversión T4 → T3, además de bloquear receptores β (FC, temblor, ansiedad).

¿Por qué fallan las otras opciones?
- Inhibición de peroxidasa tiroidea: mecanismo de metimazol/PTU, no de propranolol.
- Inhibición de liberación hormonal del coloide: mecanismo de yodo/yoduros, no de betabloqueadores.
- Inducción enzimática hepática de depuración: no es el efecto diferencial del propranolol.

Clave: propranolol en Graves = β-bloqueo + inhibición parcial de 5'-desyodasa (↓ T4→T3).

Referencias: Williams Endocrinology; Katzung; ATA Hyperthyroidism Guidelines.`,
  },
  {
    id: "dr-q-128",
    examArea: "Ciencias Básicas / Hemostasia",
    topic: "Ciencias Básicas",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "farmacologia", "hit", "heparina"],
    statement:
      "Hombre de 60 años hospitalizado por tromboembolismo pulmonar, manejado con heparina no fraccionada (HNF) en infusión continua. Al sexto día de tratamiento presenta dolor súbito, frialdad, palidez y ausencia de pulsos en el miembro inferior derecho. Los laboratorios muestran descenso de plaquetas de 250,000/µL a 35,000/µL. Se sospecha trombocitopenia inducida por heparina (HIT) tipo II. ¿Cuál es el proceso inmunológico y patológico central responsable de esta enfermedad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Destrucción directa de plaquetas por toxicidad medular inducida por heparina.",
      },
      {
        id: "B",
        label: "B",
        text: "Formación de anticuerpos IgG contra complejos heparina-factor plaquetario 4 (PF4), con activación masiva de plaquetas y generación de trombina.",
      },
      {
        id: "C",
        label: "C",
        text: "Activación del complemento con hemólisis intravascular y consumo secundario de plaquetas.",
      },
      {
        id: "D",
        label: "D",
        text: "Inhibición de la producción hepática de trombopoyetina por efecto directo de la heparina.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "HIT tipo II: IgG anti-complejo heparina-PF4 activa plaquetas vía FcγIIa → generación masiva de trombina → trombosis (paradoja protrombótica) y consumo plaquetario.",
    keyPoints: [
      "HIT tipo II = trombocitopenia + trombosis (días 5-10 de heparina).",
      "IgG contra complejo heparina-PF4 → activación plaquetaria → trombina.",
      "Caída plaquetas >50%. Complicación principal: trombosis, no sangrado.",
      "Suspender toda heparina (incluida HBPM) e iniciar anticoagulante alternativo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa la HIT tipo II: la paradoja del paciente anticoagulado que desarrolla trombosis, por activación inmune de plaquetas mediada por heparina-PF4.

¿Qué está ocurriendo realmente?
- Hombre con TEP en heparina no fraccionada día 6 de tratamiento.
- Dolor súbito, frialdad y ausencia de pulsos en miembro inferior: trombosis arterial nueva.
- Plaquetas caen de 250,000 a 35,000/µL (>50% de descenso).
- Cuadro clásico de trombocitopenia inducida por heparina (HIT) tipo II.

¿Qué dato es clave en el examen?
- Heparina se une al factor plaquetario 4 (PF4) formando un complejo inmunogénico.
- Se generan anticuerpos IgG que activan plaquetas vía receptor FcγIIa.
- Activación masiva → generación de trombina → trombosis (paradoja protrombótica) + consumo plaquetario.

¿Por qué fallan las otras opciones?
- Toxicidad medular directa: la HIT no es aplasia medular; las plaquetas se consumen por activación, no por falla de producción.
- Activación del complemento con hemólisis: no es el mecanismo central de HIT.
- Inhibición de trombopoyetina hepática: no explica trombosis ni el patrón inmunológico.

Clave: heparina día 5-10 + caída plaquetas + trombosis nueva = IgG anti heparina-PF4 → activación plaquetaria.

Referencias: Harrison's; Williams Hematology; ASH HIT Guidelines.`,
  },
  {
    id: "dr-q-129",
    examArea: "Ciencias Básicas / Microbiología",
    topic: "Ciencias Básicas",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "microbiologia", "endocarditis", "aureus"],
    statement:
      "Hombre de 32 años, usuario activo de drogas intravenosas, consulta por fiebre de 39°C, escalofríos y disnea. A la auscultación presenta un soplo holosistólico en foco tricuspídeo. El ecocardiograma transesofágico revela una gran vegetación en la válvula tricúspide. Los hemocultivos reportan cocos Gram positivos en racimos, catalasa positivos y coagulasa positivos. ¿Cuál de los siguientes factores de virulencia de este microorganismo es el principal mediador de la adhesión inicial a las células endoteliales dañadas de la válvula cardíaca?",
    options: [
      { id: "A", label: "A", text: "Coagulasa." },
      { id: "B", label: "B", text: "Proteína A." },
      {
        id: "C",
        label: "C",
        text: "Adhesinas de superficie tipo MSCRAMMs (proteínas de unión a fibronectina y fibrinógeno).",
      },
      { id: "D", label: "D", text: "Alfa-toxina." },
    ],
    correctOptionId: "C",
    explanation:
      "Staphylococcus aureus. La adhesión inicial al endotelio valvular lesionado depende de MSCRAMMs (unión a fibronectina, fibrinógeno y matriz extracelular expuesta). Coagulasa y proteína A actúan después (protección/evasión).",
    keyPoints: [
      "Endocarditis en drogas IV: S. aureus, válvula tricúspide.",
      "MSCRAMMs = adhesión inicial a fibronectina/fibrinógeno.",
      "Coagulasa: fibrina alrededor de la bacteria (después de adhesión).",
      "Proteína A: evasión inmune (une Fc de IgG).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa virulencia de Staphylococcus aureus en endocarditis de válvula tricúspide por drogas IV: la adhesión inicial depende de MSCRAMMs, no de coagulasa.

¿Qué está ocurriendo realmente?
- Hombre de 32 años, usuario de drogas IV, con fiebre y soplo tricuspídeo.
- Vegetación grande en válvula tricúspide (patrón clásico en endocarditis por drogas IV).
- Hemocultivos: cocos Gram positivos en racimos, catalasa positivo, coagulasa positivo = S. aureus.
- La pregunta pide el factor de virulencia de la adhesión inicial al endotelio valvular dañado.

¿Qué dato es clave en el examen?
- La lesión endotelial expone fibronectina y fibrinógeno en la superficie valvular.
- Las adhesinas MSCRAMMs (Microbial Surface Components Recognizing Adhesive Matrix Molecules) median la adhesión inicial.
- Secuencia: lesión → exposición de matriz → MSCRAMMs → colonización → vegetación.

¿Por qué fallan las otras opciones?
- Coagulasa: convierte fibrinógeno en fibrina y protege a la bacteria; actúa después de la adhesión, no es el paso inicial.
- Proteína A: une el dominio Fc de IgG y evade inmunidad; no media adhesión valvular inicial.
- Alfa-toxina: daña membranas celulares; no es el mediador de adhesión inicial.

Clave: S. aureus + drogas IV + tricúspide = MSCRAMMs para adhesión a fibronectina/fibrinógeno; coagulasa es después.

Referencias: Murray Medical Microbiology; Mandell; Harrison's.`,
  },
  {
    id: "dr-q-130",
    examArea: "Ciencias Básicas / Fisiología celular",
    topic: "Ciencias Básicas",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "fisiologia", "fibrosis_quistica", "cftr"],
    statement:
      "Hombre de 22 años, evaluado por episodios recurrentes de dolor epigástrico irradiado a la espalda. La tomografía evidencia calcificaciones pancreáticas compatibles con pancreatitis crónica. Además refiere tos crónica productiva desde la infancia. Ante la sospecha diagnóstica se realiza prueba de sudor, que reporta cloruros de 85 mmol/L (normal <40 mmol/L). ¿Cuál es la alteración fisiológica directa en las células ductales pancreáticas derivada del defecto genético responsable de esta enfermedad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Disminución de la secreción de bicarbonato y agua hacia la luz ductal, produciendo secreciones espesas y obstrucción ductal.",
      },
      {
        id: "B",
        label: "B",
        text: "Aumento de la secreción de enzimas pancreáticas activadas hacia el conducto pancreático principal.",
      },
      {
        id: "C",
        label: "C",
        text: "Incremento de la absorción ductal de bicarbonato con alcalinización excesiva de las secreciones pancreáticas.",
      },
      {
        id: "D",
        label: "D",
        text: "Disminución de la síntesis de tripsinógeno con insuficiencia pancreática exocrina primaria.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Fibrosis quística por mutación CFTR. Falla del canal de cloro altera secreción de cloro y bicarbonato en células ductales pancreáticas → secreciones viscosas → obstrucción ductal → pancreatitis crónica e insuficiencia exocrina.",
    keyPoints: [
      "CFTR = canal de cloro regulado por ATP (autosómica recesiva).",
      "Test de sudor: Cl⁻ >60 mmol/L sugestivo de fibrosis quística.",
      "Páncreas: ↓ bicarbonato y agua → secreciones espesas → obstrucción.",
      "Tos crónica + pancreatitis joven + sudor positivo = fibrosis quística.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa fibrosis quística más allá del pulmón: la mutación CFTR altera secreción ductal pancreática de cloro y bicarbonato, causando pancreatitis crónica joven.

¿Qué está ocurriendo realmente?
- Hombre de 22 años con pancreatitis crónica (calcificaciones en TAC) y dolor epigástrico recurrente.
- Tos crónica productiva desde la infancia (compromiso respiratorio).
- Prueba de sudor con cloruros 85 mmol/L (normal <40): diagnóstico de fibrosis quística.
- Enfermedad autosómica recesiva por defecto del canal CFTR.

¿Qué dato es clave en el examen?
- CFTR es canal de cloro regulado por ATP en epitelios exocrinos.
- En ductos pancreáticos: falla la secreción de Cl⁻ y HCO₃⁻ → menos agua luminal → secreciones espesas.
- Obstrucción ductal → pancreatitis crónica e insuficiencia exocrina.
- En sudor: CFTR no reabsorbe Cl⁻ → sudor hiperclorémico (test diagnóstico).

¿Por qué fallan las otras opciones?
- Aumento de secreción de enzimas activadas: el problema es viscosidad/obstrucción por falta de fluido alcalino, no hipersecreción enzimática primaria.
- Incremento de absorción de bicarbonato: es lo opuesto; hay disminución de secreción de HCO₃⁻.
- Disminución de síntesis de tripsinógeno: es consecuencia tardía (insuficiencia exocrina), no la alteración fisiológica directa del defecto CFTR.

Clave: tos crónica + pancreatitis joven + sudor Cl⁻ alto = CFTR → ↓ HCO₃⁻/agua ductal → obstrucción.

Referencias: Guyton & Hall; Robbins & Cotran; Cystic Fibrosis Foundation Guidelines.`,
  },
];
