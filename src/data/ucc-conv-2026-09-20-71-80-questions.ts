import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #8 (20 sep 2026) · Preguntas #71–#80.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_20_71_80_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-20-71",
    university: "UCC",
    examArea: "INFECTOLOGÍA - MEDICINA TROPICAL",
    topic: "Dengue con Signos de Alarma",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "dengue-con-signos-de-alarma"],
    statement:
      "Una mujer de 19 años, residente de zona endémica para dengue, consulta al quinto día de un cuadro febril que inició de forma súbita con fiebre alta, cefalea retroocular, mialgias y artralgias generalizadas. Refiere que desde ayer la fiebre cedió, pero en lugar de mejorar presenta dolor abdominal intenso y continuo, vómito persistente (4 episodios en 12 horas) y sangrado gingival leve. Al examen físico: PA 100/70 mmHg, FC 104 lpm, hepatomegalia dolorosa a 3 cm del reborde costal, sin edema ni derrame evidente. Los laboratorios muestran hematocrito 46% (basal reportado hace 2 días: 38%) y plaquetas 68.000/mm³. La prueba de torniquete es positiva. ¿Cuál es la conducta más apropiada en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Dar manejo ambulatorio con abundantes líquidos orales, acetaminofén y control médico programado en 48 horas.",
        distractorProfile: "dangerous_outpatient_delay_with_alarm_signs",
        incorrectFeedback:
          "La paciente ya cumple criterios de dengue CON signos de alarma (dolor abdominal intenso, vómito persistente, hepatomegalia dolorosa y hemoconcentración con trombocitopenia); manejarla de forma ambulatoria y diferir la reevaluación 48 horas la expone a progresar sin vigilancia hacia dengue grave con choque, precisamente en la fase de defervescencia, que es la de mayor riesgo de fuga capilar.",
      },
      {
        id: "B",
        label: "B",
        text: "Transfundir plaquetas de forma profiláctica de inmediato, dado el recuento de 68.000/mm³, antes de cualquier otra medida.",
        distractorProfile: "unnecessary_prophylactic_platelet_transfusion",
        incorrectFeedback:
          "La transfusión profiláctica de plaquetas no está indicada únicamente por el número absoluto de plaquetas en ausencia de sangrado activo significativo; en dengue la trombocitopenia es generalmente autolimitada y transfundir sin sangrado mayor no modifica el curso de la enfermedad ni previene el choque, cuyo mecanismo central es la fuga capilar, no la falta de plaquetas.",
      },
      {
        id: "C",
        label: "C",
        text: "Hospitalizar de inmediato e iniciar reposición hidroelectrolítica con cristaloides isotónicos IV según el esquema escalonado de la OMS, con monitoreo estrecho seriado de hematocrito, plaquetas, diuresis y signos vitales.",
      },
      {
        id: "D",
        label: "D",
        text: "Formular ibuprofeno para control del dolor abdominal y continuar en observación domiciliaria con hidratación oral forzada.",
        distractorProfile: "contraindicated_nsaid_bleeding_risk",
        incorrectFeedback:
          "Los AINEs (ibuprofeno, ácido acetilsalicílico) están contraindicados en dengue porque aumentan el riesgo de sangrado gastrointestinal y disfunción plaquetaria adicional en un paciente que ya cursa con trombocitopenia y fragilidad capilar; el manejo del dolor y la fiebre en dengue se hace exclusivamente con acetaminofén.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "La paciente cursa con **Dengue con Signos de Alarma** según la clasificación de la OMS. La evolución típica del dengue tiene tres fases: febril, crítica y de recuperación; el punto clave de esta viñeta es que los signos de alarma aparecen precisamente **alrededor de la caída de la fiebre (defervescencia)**, momento en que inicia la fase crítica por aumento de la permeabilidad vascular y fuga de plasma hacia el tercer espacio. Los signos de alarma incluyen dolor abdominal intenso y continuo, vómito persistente, sangrado de mucosas, letargia o irritabilidad, hepatomegalia >2 cm, y el hallazgo de laboratorio más sensible: el **aumento progresivo del hematocrito concurrente con caída rápida de las plaquetas**, que refleja hemoconcentración por fuga plasmática activa. Ante cualquier signo de alarma, la conducta obligatoria es la **hospitalización** para reposición controlada de líquidos IV con cristaloides isotónicos (iniciando habitualmente a 5-7 mL/kg/h y ajustando según respuesta clínica, diuresis y hematocrito seriado), evitando tanto la hipovolemia (que lleva a choque) como la sobrecarga de líquidos (que empeora la fuga capilar y causa derrames y edema pulmonar). El manejo ambulatorio queda reservado únicamente para el dengue sin signos de alarma.",
    keyPoints: [
      "Los signos de alarma del dengue aparecen típicamente al ceder la fiebre (defervescencia), no durante el pico febril: dolor abdominal intenso, vómito persistente, sangrado de mucosas, hepatomegalia dolorosa.",
      "Dengue con Signos de Alarma. El hallazgo de laboratorio clave es la hemoconcentración (aumento del hematocrito) junto con caída de plaquetas; requiere hospitalización y reposición IV escalonada con cristaloides, con vigilancia estrecha para evitar tanto choque como sobrecarga hídrica.",
      "Medicina Tropical / Dengue.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-72",
    university: "UCC",
    examArea: "INFECTOLOGÍA - NEUMOLOGÍA",
    topic: "Tuberculosis Pulmonar",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "tuberculosis-pulmonar"],
    statement:
      "Un hombre de 41 años, sin antecedentes conocidos de VIH, consulta por tos con expectoración de 4 semanas de evolución, con un episodio de hemoptisis leve hace 3 días, asociada a sudoración nocturna profusa y pérdida de 6 kg de peso en el último mes. Refiere contacto cercano con un familiar diagnosticado de tuberculosis pulmonar hace 6 meses. La radiografía de tórax muestra infiltrados cavitados en el lóbulo superior derecho. Se realiza baciloscopia de esputo (BAAR) que resulta positiva, y la prueba molecular rápida (GeneXpert MTB/RIF) confirma la presencia de *Mycobacterium tuberculosis* sin resistencia detectada a rifampicina. ¿Cuál es el esquema de tratamiento de PRIMERA LÍNEA que debe iniciarse en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fase intensiva diaria de 2 meses con Isoniazida + Rifampicina + Pirazinamida + Etambutol, seguida de una fase de continuación de 4 meses con Isoniazida + Rifampicina.",
      },
      {
        id: "B",
        label: "B",
        text: "Monoterapia con Isoniazida durante 6 meses continuos, ajustando la dosis según la respuesta clínica y radiológica.",
        distractorProfile: "monotherapy_resistance_risk",
        incorrectFeedback:
          "La monoterapia con un solo fármaco antituberculoso en enfermedad activa favorece de forma rápida la selección de cepas resistentes; la Isoniazida en monoterapia solo está indicada para el tratamiento de la infección tuberculosa LATENTE, nunca para la enfermedad activa confirmada bacteriológicamente como en este caso.",
      },
      {
        id: "C",
        label: "C",
        text: "Aislamiento respiratorio estricto sin inicio de tratamiento farmacológico, hasta obtener el resultado del cultivo con pruebas de sensibilidad completas.",
        distractorProfile: "unnecessary_treatment_delay",
        incorrectFeedback:
          "El cultivo y el antibiograma completo pueden tardar semanas; con baciloscopia positiva y GeneXpert que confirma *M. tuberculosis* sin resistencia a rifampicina, hay evidencia suficiente para iniciar tratamiento de inmediato. Retrasar el inicio del esquema esperando el cultivo prolonga la contagiosidad del paciente y el riesgo de progresión y complicaciones.",
      },
      {
        id: "D",
        label: "D",
        text: "Esquema cuádruple (Isoniazida, Rifampicina, Pirazinamida, Etambutol) durante únicamente 2 semanas, suspendiendo al ceder la hemoptisis.",
        distractorProfile: "premature_discontinuation",
        incorrectFeedback:
          "Suspender el tratamiento tras la mejoría clínica inicial (como el cese de la hemoptisis) es un error grave: el esquema completo de 6 meses es indispensable para erradicar los bacilos de crecimiento lento y latente; suspenderlo prematuramente favorece la recaída y el desarrollo de resistencia adquirida a los fármacos utilizados.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El paciente cursa con **Tuberculosis Pulmonar** confirmada bacteriológicamente (baciloscopia positiva y GeneXpert MTB/RIF positivo sin resistencia a rifampicina), con un cuadro clínico clásico de tos crónica, hemoptisis, síntomas constitucionales (sudoración nocturna, pérdida de peso) e infiltrado cavitado apical, el patrón radiológico típico de reactivación. El esquema de tratamiento de primera línea recomendado por la OMS y adoptado en los programas nacionales para casos nuevos, sensibles a rifampicina, es el **esquema 2HRZE/4HR**: una **fase intensiva de 2 meses** con cuatro fármacos (Isoniazida, Rifampicina, Pirazinamida y Etambutol) administrados diariamente, cuyo objetivo es reducir rápidamente la carga bacilar y la contagiosidad, seguida de una **fase de continuación de 4 meses** con dos fármacos (Isoniazida y Rifampicina), orientada a eliminar los bacilos persistentes de crecimiento lento y prevenir la recaída. El tratamiento debe ser supervisado (estrategia DOTS/TAES) y completo; interrumpirlo o usar monoterapia son las principales causas de fracaso terapéutico y de aparición de tuberculosis multidrogorresistente.",
    keyPoints: [
      "Tos crónica >2-3 semanas + hemoptisis + síntomas constitucionales (sudoración nocturna, pérdida de peso) + infiltrado cavitado en lóbulos superiores en la radiografía son el patrón clásico de tuberculosis pulmonar por reactivación.",
      "Tuberculosis Pulmonar sensible a rifampicina. Esquema de primera línea: 2 meses de Isoniazida + Rifampicina + Pirazinamida + Etambutol (fase intensiva), seguidos de 4 meses de Isoniazida + Rifampicina (fase de continuación), siempre bajo tratamiento directamente observado.",
      "Neumología / Tuberculosis Pulmonar.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-73",
    university: "UCC",
    examArea: "INFECTOLOGÍA - VIH/SIDA",
    topic: "Infecciones Oportunistas en VIH",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "neumonia-por-pneumocystis-en-vih"],
    statement:
      "Un hombre de 33 años, con diagnóstico de VIH hace 3 años sin adherencia a la terapia antirretroviral, consulta por disnea progresiva de 3 semanas de evolución, inicialmente solo de esfuerzo y ahora presente incluso en reposo, asociada a tos seca persistente y fiebre de bajo grado. Al examen físico se encuentra taquipneico, con saturación de oxígeno de 88% al aire ambiente, y la auscultación pulmonar es prácticamente normal. La radiografía de tórax muestra infiltrados intersticiales bilaterales difusos en \"vidrio esmerilado\". Los laboratorios muestran un conteo de linfocitos CD4 de 110 células/mm³ y una LDH sérica marcadamente elevada (620 U/L). ¿Cuál es el tratamiento de PRIMERA LÍNEA que debe iniciarse de inmediato ante este diagnóstico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar terapia antirretroviral (TARV) de alta potencia de inmediato como única medida terapéutica, sin necesidad de tratamiento antimicrobiano dirigido.",
        distractorProfile: "wrong_priority_art_without_specific_treatment",
        incorrectFeedback:
          "Iniciar TARV sin tratar primero la infección oportunista activa no controla la insuficiencia respiratoria aguda que amenaza la vida del paciente en este momento, y además puede desencadenar un Síndrome Inflamatorio de Reconstitución Inmune (SIRI) que empeore transitoriamente el cuadro pulmonar; el tratamiento antimicrobiano específico debe iniciarse primero, y la TARV se introduce después, generalmente dentro de las siguientes 2 semanas.",
      },
      {
        id: "B",
        label: "B",
        text: "Azitromicina oral en monoterapia, dado su buen perfil de seguridad y su amplio espectro contra patógenos respiratorios atípicos.",
        distractorProfile: "wrong_drug_wrong_pathogen",
        incorrectFeedback:
          "La azitromicina no tiene actividad contra *Pneumocystis jirovecii*, el hongo causante de este cuadro; el patrón clínico-radiológico (disnea progresiva, hipoxemia desproporcionada al hallazgo auscultatorio normal, infiltrado en vidrio esmerilado bilateral, LDH muy elevada, CD4 <200) es característico de neumonía por Pneumocystis, que requiere un antimicrobiano específico distinto.",
      },
      {
        id: "C",
        label: "C",
        text: "Diferir cualquier tratamiento antimicrobiano hasta obtener confirmación histológica mediante biopsia pulmonar por broncoscopia.",
        distractorProfile: "dangerous_diagnostic_delay",
        incorrectFeedback:
          "En un paciente con hipoxemia significativa y alta sospecha clínico-radiológica, esperar la confirmación histológica antes de tratar retrasa peligrosamente el manejo de una infección potencialmente mortal; el tratamiento empírico se inicia con la sospecha clínica fundamentada, sin necesidad de esperar biopsia.",
      },
      {
        id: "D",
        label: "D",
        text: "Trimetoprim-sulfametoxazol a dosis altas por vía intravenosa u oral durante 21 días, asociando corticoides sistémicos dado el grado de hipoxemia (PaO₂ <70 mmHg o gradiente A-a elevado).",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El paciente cursa con **Neumonía por *Pneumocystis jirovecii*** (antes *P. carinii*), la infección oportunista pulmonar más frecuente en pacientes con VIH avanzado y CD4 <200 células/mm³, especialmente sin TARV o con pobre adherencia. El cuadro clásico es disnea progresiva subaguda, tos seca, fiebre, con una hipoxemia desproporcionada frente a una auscultación pulmonar relativamente normal, un infiltrado intersticial bilateral en \"vidrio esmerilado\" en la radiografía o TAC de tórax, y una LDH marcadamente elevada (marcador indirecto de daño alveolar difuso). El tratamiento de primera línea es **Trimetoprim-sulfametoxazol (TMP-SMX)** a dosis altas, IV en casos moderados-graves u oral en casos leves, durante 21 días. Cuando existe hipoxemia significativa (PaO₂ <70 mmHg en aire ambiente o gradiente alveolo-arterial elevado), como sugiere la saturación de 88% de este paciente, se deben añadir **corticoides sistémicos** de forma temprana (idealmente dentro de las primeras 72 horas), ya que reducen la inflamación alveolar asociada a la lisis del organismo y disminuyen significativamente la mortalidad y el riesgo de insuficiencia respiratoria. La TARV se inicia posteriormente, generalmente dentro de las 2 semanas siguientes al inicio del tratamiento antimicrobiano.",
    keyPoints: [
      "En un paciente con VIH y CD4 <200, la disnea progresiva con hipoxemia desproporcionada a una auscultación pulmonar casi normal, infiltrado en \"vidrio esmerilado\" bilateral y LDH muy elevada son el patrón clásico de neumonía por Pneumocystis jirovecii.",
      "Neumonía por Pneumocystis jirovecii. Tratamiento de primera línea: Trimetoprim-sulfametoxazol por 21 días; si hay hipoxemia significativa (PaO₂ <70 mmHg), agregar corticoides sistémicos tempranos. La TARV se inicia después de controlar la infección oportunista aguda.",
      "VIH/SIDA / Infecciones Oportunistas.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-74",
    university: "UCC",
    examArea: "DERMATOLOGÍA - FARMACODERMIAS",
    topic: "Síndrome de Stevens-Johnson / Necrólisis Epidérmica Tóxica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "sindrome-de-stevens-johnson"],
    statement:
      "Una mujer de 52 años, que inició tratamiento con carbamazepina hace 12 días por neuralgia del trigémino, consulta por fiebre, malestar general y aparición súbita de lesiones cutáneas dolorosas que comenzaron en el tronco y se extienden a extremidades, descritas como máculas eritemato-violáceas con centro purpúrico y ampollas flácidas. Presenta además erosiones dolorosas en la mucosa oral, conjuntivitis bilateral con secreción y erosiones en la mucosa genital. Al examen físico el signo de Nikolsky es positivo, y se estima un desprendimiento epidérmico aproximado del 8% de la superficie corporal total. ¿Cuál es la conducta INICIAL más importante en el manejo de esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Continuar la carbamazepina a dosis reducida y agregar antihistamínicos orales para control sintomático del prurito.",
        distractorProfile: "continuing_causative_drug",
        incorrectFeedback:
          "Continuar el fármaco causal, incluso a dosis reducida, perpetúa la reacción inmunomediada y permite que la afectación cutánea y mucosa progrese hacia formas más extensas (necrólisis epidérmica tóxica); la suspensión inmediata del medicamento sospechoso es la medida más determinante para detener la progresión de la enfermedad.",
      },
      {
        id: "B",
        label: "B",
        text: "Suspender de inmediato la carbamazepina (y cualquier otro fármaco no esencial iniciado recientemente) y trasladar a la paciente a una unidad de quemados o cuidados intensivos para manejo de soporte especializado.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar corticoides sistémicos en dosis altas como única medida terapéutica, sin necesidad de suspender el fármaco sospechoso mientras se confirma el diagnóstico.",
        distractorProfile: "steroids_without_stopping_drug",
        incorrectFeedback:
          "El uso de corticoides sistémicos en el síndrome de Stevens-Johnson es controvertido y no sustituye la medida más importante y urgente, que es identificar y retirar de inmediato el fármaco causal; mantener el medicamento sospechoso mientras se \"confirma\" el diagnóstico retrasa la interrupción del proceso inmunológico desencadenante.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar biopsia cutánea urgente para confirmación histológica antes de suspender el fármaco sospechoso.",
        distractorProfile: "dangerous_delay_before_stopping_drug",
        incorrectFeedback:
          "Aunque la biopsia cutánea (con inmunofluorescencia) apoya el diagnóstico y descarta diferenciales, nunca debe retrasar la suspensión del fármaco sospechoso; cada día adicional de exposición al medicamento causal se asocia con mayor extensión del desprendimiento epidérmico y peor pronóstico.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La paciente cursa con un **Síndrome de Stevens-Johnson** (SSJ), una reacción mucocutánea grave, generalmente idiosincrásica y mediada por hipersensibilidad tipo IV, casi siempre desencadenada por fármacos (los más frecuentes: anticonvulsivantes aromáticos como carbamazepina, fenitoína y lamotrigina; alopurinol; sulfonamidas; algunos AINEs), que típicamente aparece entre 1 y 3 semanas después de iniciar el medicamento causal. El cuadro se caracteriza por afectación cutánea (máculas purpúricas, lesiones \"en diana\" atípicas, ampollas flácidas con signo de Nikolsky positivo) y compromiso de al menos dos mucosas (oral, ocular, genital), con desprendimiento epidérmico que por definición es <10% de la superficie corporal total en el SSJ (10-30% en el síndrome de superposición SSJ/NET, y >30% en la necrólisis epidérmica tóxica). La medida terapéutica MÁS importante y de mayor impacto en el pronóstico es la **identificación y suspensión inmediata del fármaco causal**, junto con el traslado precoz a una unidad especializada (quemados o UCI) para manejo de soporte intensivo: control hidroelectrolítico, cuidado meticuloso de heridas cutáneas y mucosas, prevención de infección secundaria, manejo oftalmológico especializado para prevenir secuelas corneales, y soporte nutricional. Retrasar la suspensión del fármaco por confirmar el diagnóstico o por intentar tratamientos alternativos aumenta significativamente la mortalidad y el riesgo de progresión a necrólisis epidérmica tóxica.",
    keyPoints: [
      "Fármaco de alto riesgo (anticonvulsivante, alopurinol, sulfonamida) iniciado en las últimas 1-3 semanas + lesiones cutáneas dolorosas con Nikolsky positivo + compromiso de al menos dos mucosas son la clave diagnóstica del espectro Stevens-Johnson/NET.",
      "Síndrome de Stevens-Johnson (desprendimiento <10% SCT). La medida más importante: suspender de inmediato el fármaco causal y trasladar a unidad de quemados/UCI para manejo de soporte; la extensión del desprendimiento epidérmico define la gravedad y el pronóstico.",
      "Dermatología / Farmacodermias Graves.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-75",
    university: "UCC",
    examArea: "DERMATOLOGÍA - CIRUGÍA / INFECTOLOGÍA",
    topic: "Infecciones de Tejidos Blandos",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "fascitis-necrotizante"],
    statement:
      "Un hombre de 58 años, con diabetes mellitus tipo 2 mal controlada, consulta por dolor intenso en la pierna derecha de 24 horas de evolución, que según refiere es \"desproporcionado\" respecto a lo que se observa en la piel. Al examen físico presenta eritema mal delimitado que se ha extendido notablemente en las últimas horas (el médico marcó el borde hace 3 horas y ya lo sobrepasa), con algunas zonas de piel violácea, ampollas de contenido hemorrágico y crepitación subcutánea a la palpación. El paciente está febril (39.3°C), taquicárdico (FC 128 lpm) e hipotenso (PA 88/56 mmHg), con alteración leve del estado mental. Los laboratorios muestran leucocitosis marcada con desviación izquierda, CPK elevada y proteína C reactiva muy alta. ¿Cuál es la conducta terapéutica MÁS urgente e indispensable en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Manejo ambulatorio con antibiótico oral de amplio espectro y control clínico en 48 horas.",
        distractorProfile: "dangerous_outpatient_management",
        incorrectFeedback:
          "El dolor desproporcionado, la progresión rápida del eritema, las ampollas hemorrágicas, la crepitación y la toxicidad sistémica (hipotensión, alteración mental) son signos de alarma de una infección necrotizante, no de una celulitis simple; el manejo ambulatorio en este contexto retrasa una intervención que debe ser inmediata y hospitalaria.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar antibioticoterapia intravenosa de amplio espectro exclusivamente, sin necesidad de intervención quirúrgica, dado que la mayoría de las celulitis responden solo a antibiótico.",
        distractorProfile: "missing_surgical_source_control",
        incorrectFeedback:
          "Este cuadro no corresponde a una celulitis simple sino a una probable fascitis necrotizante, en la que el tejido afectado está isquémico/necrótico y el antibiótico por sí solo no logra penetrar ni controlar el foco; sin desbridamiento quirúrgico del tejido necrótico, la infección progresa y la mortalidad aumenta de forma marcada con cada hora de retraso.",
      },
      {
        id: "C",
        label: "C",
        text: "Exploración quirúrgica urgente con desbridamiento amplio de todo el tejido necrótico, iniciada de forma simultánea con reanimación hídrica y antibioticoterapia empírica de amplio espectro (cobertura de grampositivos, gramnegativos y anaerobios).",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar resonancia magnética de la pierna para confirmar el diagnóstico antes de definir cualquier intervención quirúrgica.",
        distractorProfile: "dangerous_delay_imaging_over_surgery",
        incorrectFeedback:
          "Ante signos clínicos claros de infección necrotizante con toxicidad sistémica (crepitación, ampollas hemorrágicas, choque, dolor desproporcionado), el diagnóstico es fundamentalmente clínico y la exploración quirúrgica no debe retrasarse esperando estudios de imagen; cada hora de demora en el desbridamiento se asocia con aumento significativo de la mortalidad.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El paciente cursa con una probable **Fascitis Necrotizante**, una infección grave y rápidamente progresiva de los tejidos blandos profundos (fascia y tejido subcutáneo) que constituye una verdadera emergencia quirúrgica. La clave para diferenciarla de una celulitis simple —que suele ser el distractor más peligroso en la práctica clínica— son los llamados \"signos duros\": **dolor desproporcionado** al examen físico visible, progresión muy rápida del eritema (visible en horas), ampollas de contenido hemorrágico, crepitación (por gas producido por anaerobios), anestesia cutánea local por destrucción de terminaciones nerviosas, y toxicidad sistémica franca (fiebre alta, hipotensión, alteración mental) desproporcionada a lo que aparenta ser una infección cutánea superficial. A diferencia de la celulitis, en la que el antibiótico solo suele ser suficiente, en la fascitis necrotizante el tejido está isquémico y necrótico, por lo que los antibióticos NO logran penetrar adecuadamente ni controlar la fuente de la infección. El manejo definitivo y más urgente es la **exploración quirúrgica inmediata con desbridamiento amplio de todo el tejido desvitalizado**, realizada en paralelo (no después) de la reanimación hemodinámica y el inicio de antibioticoterapia empírica de amplio espectro; con frecuencia se requieren múltiples desbridamientos seriados en las siguientes 24-48 horas hasta lograr control completo del foco.",
    keyPoints: [
      "Dolor desproporcionado al examen físico visible + progresión muy rápida del eritema + ampollas hemorrágicas + crepitación + toxicidad sistémica son \"signos duros\" que distinguen la fascitis necrotizante de una celulitis simple.",
      "Fascitis Necrotizante. Es una emergencia quirúrgica: el desbridamiento amplio urgente del tejido necrótico, junto con reanimación y antibiótico empírico de amplio espectro, es la conducta indispensable; el antibiótico solo NUNCA es suficiente porque el tejido afectado está isquémico.",
      "Infecciones de Tejidos Blandos / Fascitis Necrotizante.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-76",
    university: "UCC",
    examArea: "OFTALMOLOGÍA - URGENCIAS",
    topic: "Glaucoma Agudo de Ángulo Cerrado",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "glaucoma-agudo-de-angulo-cerrado"],
    statement:
      "Una mujer de 67 años consulta a urgencias por dolor ocular derecho intenso de inicio súbito hace 4 horas, asociado a visión borrosa, halos coloreados alrededor de las luces, cefalea hemicraneal derecha, náuseas y un episodio de vómito. Al examen físico el ojo derecho presenta hiperemia conjuntival marcada, córnea de aspecto edematoso y opaco, pupila en midriasis media fija y no reactiva a la luz, y el globo ocular se palpa duro \"como una piedra\" en comparación con el ojo contralateral. La presión intraocular medida por tonometría es de 58 mmHg (ojo izquierdo: 16 mmHg). ¿Cuál es la conducta terapéutica INICIAL más apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar de inmediato manejo médico combinado para reducir la presión intraocular (betabloqueador tópico + inhibidor de la anhidrasa carbónica sistémico, agregando un miótico tópico una vez la presión comience a descender) y remitir con urgencia a oftalmología para iridotomía periférica con láser definitiva.",
      },
      {
        id: "B",
        label: "B",
        text: "Aplicar un midriático tópico (tropicamida) para lograr mejor visualización del fondo de ojo antes de iniciar cualquier tratamiento.",
        distractorProfile: "opposite_of_correct_management",
        incorrectFeedback:
          "Administrar un midriático empeora directamente el cierre angular al dilatar aún más la pupila, aumentando el bloqueo pupilar y elevando todavía más la presión intraocular; en la sospecha de glaucoma agudo de ángulo cerrado los midriáticos están formalmente contraindicados.",
      },
      {
        id: "C",
        label: "C",
        text: "Colocar un parche ocular oclusivo, indicar analgesia oral y citar a control ambulatorio con oftalmología en 24-48 horas.",
        distractorProfile: "dangerous_delay_risking_vision_loss",
        incorrectFeedback:
          "El glaucoma agudo de ángulo cerrado es una urgencia oftalmológica tiempo-dependiente: la presión intraocular sostenidamente elevada daña el nervio óptico de forma irreversible en cuestión de horas; diferir el tratamiento 24-48 horas con solo analgesia expone a la paciente a pérdida visual permanente.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar corticoide tópico en dosis altas como primera medida para controlar la inflamación ocular.",
        distractorProfile: "wrong_primary_intervention_not_lowering_iop",
        incorrectFeedback:
          "El corticoide tópico no reduce de forma directa ni rápida la presión intraocular, que es el problema central y urgente en esta paciente; usarlo como primera medida retrasa el inicio del tratamiento hipotensor ocular real, que es lo que previene el daño irreversible del nervio óptico.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "La paciente cursa con un **Glaucoma Agudo de Ángulo Cerrado**, una verdadera urgencia oftalmológica causada por un bloqueo pupilar que impide el drenaje del humor acuoso a través del ángulo iridocorneal, generando una elevación brusca y severa de la presión intraocular. El cuadro clínico clásico incluye dolor ocular intenso de inicio súbito, cefalea homolateral, visión borrosa con halos coloreados alrededor de las luces (por edema corneal), náuseas y vómito (por el intenso dolor, que puede simular un cuadro abdominal), ojo rojo, córnea edematosa/opaca, pupila en midriasis media fija y arreactiva, y un globo ocular firme (\"pétreo\") a la palpación. Factores de riesgo incluyen edad avanzada, sexo femenino, hipermetropía y cámara anterior estrecha. El manejo INICIAL busca reducir farmacológicamente la presión intraocular de forma urgente mediante una combinación de agentes: **betabloqueador tópico** (reduce la producción de humor acuoso), **inhibidor de la anhidrasa carbónica sistémico** (acetazolamida oral o IV, también reduce la producción de humor acuoso), y posteriormente, una vez que la presión comienza a descender y el esfínter pupilar recupera capacidad de respuesta, se agrega un **miótico tópico** (pilocarpina) para traccionar el iris y abrir el ángulo. El tratamiento definitivo, que elimina la causa del bloqueo pupilar, es la **iridotomía periférica con láser**, que debe realizarse de forma urgente una vez controlada la crisis aguda, y con frecuencia también de forma profiláctica en el ojo contralateral.",
    keyPoints: [
      "Dolor ocular súbito + halos coloreados + cefalea + náuseas/vómito + pupila en midriasis media fija + globo ocular \"pétreo\" son la tríada clásica del glaucoma agudo de ángulo cerrado; los midriáticos están contraindicados.",
      "Glaucoma Agudo de Ángulo Cerrado. Manejo inicial: betabloqueador tópico + acetazolamida sistémica, agregando miótico tópico al descender la presión; tratamiento definitivo: iridotomía periférica con láser urgente (considerar también en el ojo contralateral).",
      "Oftalmología de Urgencias / Glaucoma Agudo de Ángulo Cerrado.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-77",
    university: "UCC",
    examArea: "OFTALMOLOGÍA - RETINA",
    topic: "Retinopatía Diabética",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "retinopatia-diabetica"],
    statement:
      "Un hombre de 54 años, con diabetes mellitus tipo 2 de 14 años de evolución y control glucémico deficiente (HbA1c 9.8%), asiste a su valoración oftalmológica anual de tamización, ya que refiere no percibir cambios visuales significativos. En el fondo de ojo dilatado se identifican múltiples microaneurismas, hemorragias en \"mancha\" en los cuatro cuadrantes, exudados algodonosos, y de forma llamativa, **neovasos sobre el disco óptico** con algunas áreas de hemorragia prerretiniana incipiente. No hay desprendimiento de retina traccional evidente en este momento. ¿Cuál es el manejo indicado en este estadio de la enfermedad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Continuar únicamente con optimización estricta del control metabólico (glucemia, presión arterial y lípidos) y repetir el fondo de ojo en un año, sin intervención oftalmológica adicional.",
        distractorProfile: "delaying_treatment_in_proliferative_stage",
        incorrectFeedback:
          "El control metabólico estricto es fundamental para frenar la progresión, pero por sí solo no es suficiente en este estadio: la presencia de neovascularización indica retinopatía diabética PROLIFERATIVA, con alto riesgo inminente de hemorragia vítrea masiva y desprendimiento de retina traccional; diferir la intervención oftalmológica un año expone al paciente a pérdida visual grave y potencialmente irreversible.",
      },
      {
        id: "B",
        label: "B",
        text: "Indicar suplementación oral con vitaminas antioxidantes (vitamina E, betacaroteno) como tratamiento principal para frenar la neovascularización.",
        distractorProfile: "unproven_supplement_as_primary_treatment",
        incorrectFeedback:
          "No existe evidencia que respalde la suplementación con antioxidantes orales como tratamiento de la retinopatía diabética proliferativa; usarla como manejo principal retrasa la terapia con eficacia demostrada (fotocoagulación láser y/o anti-VEGF) que sí reduce el riesgo de ceguera en este estadio.",
      },
      {
        id: "C",
        label: "C",
        text: "Programar cirugía de catarata de forma electiva como primer paso, antes de considerar cualquier manejo dirigido a la retina.",
        distractorProfile: "wrong_treatment_priority",
        incorrectFeedback:
          "No hay ningún dato en la viñeta que sugiera catarata visualmente significativa, y aunque existiera, la prioridad absoluta ante neovascularización activa es tratar la retinopatía proliferativa para prevenir hemorragia vítrea y desprendimiento de retina, complicaciones con riesgo inminente de pérdida visual grave.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar fotocoagulación panretinal con láser de forma urgente, considerando además terapia anti-VEGF intravítrea complementaria, para inducir la regresión de los neovasos y prevenir hemorragia vítrea o desprendimiento de retina traccional.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El paciente presenta **Retinopatía Diabética Proliferativa (RDP)**, el estadio más avanzado y de mayor riesgo visual dentro de la clasificación de la retinopatía diabética. Esta se clasifica en **no proliferativa** (leve, moderada y severa, según la cantidad de microaneurismas, hemorragias, exudados algodonosos y anomalías microvasculares intrarretinianas) y **proliferativa**, definida precisamente por la aparición de **neovascularización** (sobre el disco óptico o en otras zonas de la retina) como respuesta a la isquemia retiniana crónica, mediada principalmente por el factor de crecimiento endotelial vascular (VEGF). Estos neovasos son frágiles y proclives a sangrar, generando hemorragia vítrea, y pueden asociarse a fibrosis que traccione la retina hasta desprenderla. Dado el riesgo inminente de pérdida visual grave, el manejo en este estadio ya no es solo el control metabólico (aunque sigue siendo esencial como medida de fondo): se requiere **fotocoagulación panretinal con láser**, que reduce la demanda metabólica de la retina periférica isquémica e induce la regresión de los neovasos, frecuentemente complementada con **inyecciones intravítreas de agentes anti-VEGF**, que aceleran la regresión de la neovascularización activa. La tamización anual con fondo de ojo dilatado en todo paciente con diabetes tipo 2 (desde el momento del diagnóstico) o tipo 1 (a partir de los 5 años del diagnóstico) es la estrategia clave para detectar estos cambios antes de que el paciente perciba síntomas visuales, ya que —como en este caso— la retinopatía proliferativa puede ser completamente asintomática hasta que ocurre una complicación mayor.",
    keyPoints: [
      "La retinopatía diabética proliferativa se define por la aparición de neovasos (sobre el disco óptico o en otras zonas) y puede ser asintomática hasta que ocurre una complicación mayor como hemorragia vítrea; por eso la tamización anual con fondo de ojo dilatado es indispensable.",
      "Retinopatía Diabética Proliferativa. Manejo: fotocoagulación panretinal con láser urgente, generalmente asociada a terapia anti-VEGF intravítrea, además de optimizar el control metabólico (glucemia, presión arterial, lípidos) como medida de fondo.",
      "Oftalmología / Retinopatía Diabética.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-78",
    university: "UCC",
    examArea: "OTORRINOLARINGOLOGÍA - INFECCIONES",
    topic: "Absceso Periamigdalino",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "absceso-periamigdalino"],
    statement:
      "Un hombre de 24 años consulta por dolor de garganta intenso y unilateral derecho de 4 días de evolución, que ha empeorado a pesar de haber tomado amoxicilina oral por su cuenta durante los últimos 2 días. Refiere odinofagia severa que le impide deglutir incluso su propia saliva, fiebre de 38.9°C, y una voz de tono apagado que su familia describe como \"de papa caliente\" (hot potato voice). Al examen físico presenta trismus moderado, hay abombamiento asimétrico del pilar amigdalino anterior derecho y del paladar blando ipsilateral, con desviación de la úvula hacia el lado izquierdo. Hay adenopatías cervicales derechas dolorosas. ¿Cuál es el manejo definitivo indicado en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Continuar únicamente con antibioticoterapia oral ambulatoria a dosis más altas, sin necesidad de ningún procedimiento de drenaje.",
        distractorProfile: "insufficient_medical_only_management",
        incorrectFeedback:
          "El cuadro clínico (abombamiento asimétrico, desviación uvular, trismus, voz \"de papa caliente\") es característico de un absceso periamigdalino ya formado, una colección purulenta organizada que el antibiótico solo no logra drenar; sin evacuación del pus, el cuadro no se resuelve y el riesgo de extensión a espacios profundos del cuello aumenta.",
      },
      {
        id: "B",
        label: "B",
        text: "Drenaje del absceso mediante aspiración con aguja o incisión y drenaje, asociado a antibioticoterapia con cobertura de anaerobios (por ejemplo, amoxicilina-clavulanato o clindamicina).",
      },
      {
        id: "C",
        label: "C",
        text: "Amigdalectomía de urgencia inmediata (\"a quente\") como único tratamiento indicado en la fase aguda de la infección.",
        distractorProfile: "unnecessary_aggressive_surgery",
        incorrectFeedback:
          "La amigdalectomía en caliente no es el manejo estándar de primera línea del absceso periamigdalino agudo; el drenaje (aspiración con aguja o incisión) junto con antibiótico resuelve la gran mayoría de los casos. La amigdalectomía se reserva para abscesos recurrentes, complicaciones o casos que no responden al drenaje inicial, y habitualmente se programa de forma diferida (\"en frío\").",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar tomografía de cuello contrastada de forma obligatoria en todo paciente, incluso ante un diagnóstico clínico evidente sin sospecha de extensión a espacios profundos, antes de definir cualquier conducta.",
        distractorProfile: "unnecessary_imaging_delay",
        incorrectFeedback:
          "El absceso periamigdalino no complicado es un diagnóstico fundamentalmente clínico; la tomografía se reserva para casos con trismus severo que dificulte el examen, sospecha de extensión a espacios profundos del cuello (parafaríngeo, retrofaríngeo) o falta de respuesta al drenaje inicial, no como requisito obligatorio en todo paciente antes de tratar.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El paciente cursa con un **Absceso Periamigdalino** (también llamado \"quinsy\"), la infección profunda del cuello más frecuente en adultos jóvenes, que se desarrolla como complicación de una faringoamigdalitis aguda mal tratada o incompletamente resuelta, cuando la infección se extiende más allá de la cápsula amigdalina hacia el espacio periamigdalino, formando una colección purulenta. Los hallazgos característicos que lo distinguen de una simple faringoamigdalitis son: odinofagia severa asimétrica que dificulta incluso deglutir saliva (sialorrea), **trismus** (por irritación del músculo pterigoideo interno), voz apagada \"en papa caliente\", y al examen físico el signo cardinal: **abombamiento asimétrico del pilar amigdalino anterior y del paladar blando con desviación de la úvula hacia el lado contralateral**. El manejo definitivo combina dos pilares: **drenaje de la colección** (mediante aspiración con aguja, que suele ser suficiente y es el método inicial más usado, o incisión y drenaje si la aspiración no es exitosa) y **antibioticoterapia** dirigida a la flora polimicrobiana típica (estreptococos del grupo A y anaerobios orales), habitualmente con amoxicilina-clavulanato o clindamicina en alérgicos a penicilina. La amigdalectomía de urgencia y la tomografía rutinaria no son necesarias en el caso típico no complicado.",
    keyPoints: [
      "Odinofagia unilateral severa + trismus + voz \"de papa caliente\" + abombamiento del pilar amigdalino con desviación uvular contralateral son el patrón clásico del absceso periamigdalino, distinto de una faringoamigdalitis simple.",
      "Absceso Periamigdalino. Manejo definitivo: drenaje de la colección (aspiración con aguja o incisión y drenaje) más antibiótico con cobertura de anaerobios; la amigdalectomía de urgencia no es necesaria en el caso no complicado.",
      "Otorrinolaringología / Infecciones Profundas del Cuello.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-79",
    university: "UCC",
    examArea: "OTORRINOLARINGOLOGÍA - URGENCIAS",
    topic: "Epistaxis Severa",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "epistaxis-severa"],
    statement:
      "Un hombre de 74 años, hipertenso y en manejo anticoagulante con warfarina por fibrilación auricular, consulta a urgencias por sangrado nasal profuso de 1 hora de evolución que no ha cedido con compresión digital continua de las alas nasales durante 15 minutos. Al llegar, el sangrado proviene de ambas fosas nasales y también se observa deslizamiento de sangre hacia la orofaringe posterior. Se realiza taponamiento nasal anterior bilateral con gasa impregnada en vasoconstrictor, pero el sangrado persiste con salida activa de sangre hacia la faringe posterior. Signos vitales: PA 152/94 mmHg, FC 108 lpm. El INR reportado es de 4.2. ¿Cuál es el siguiente paso más apropiado en el manejo escalonado de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender cualquier intervención adicional y dejar al paciente en observación domiciliaria con la cabeza elevada.",
        distractorProfile: "dangerous_expectant_management",
        incorrectFeedback:
          "El sangrado persiste activo hacia la faringe posterior a pesar del taponamiento anterior bilateral, en un paciente anticoagulado con INR supraterapéutico; enviarlo a observación domiciliaria sin control del sangrado ni de la coagulopatía lo expone a hemorragia continua, aspiración y descompensación hemodinámica.",
      },
      {
        id: "B",
        label: "B",
        text: "Realizar cauterización química con nitrato de plata como primera medida ante un sangrado posterior masivo y bilateral.",
        distractorProfile: "wrong_technique_for_posterior_massive_bleeding",
        incorrectFeedback:
          "La cauterización química (o eléctrica) es útil para sangrados anteriores localizados y visibles con un punto sangrante identificable (plexo de Kiesselbach), no para un sangrado posterior masivo y bilateral en el que no se puede identificar ni acceder a un punto único; en este contexto no es la medida indicada como siguiente paso.",
      },
      {
        id: "C",
        label: "C",
        text: "Colocar taponamiento nasal posterior (con balón neumático o catéter específico) y hospitalizar al paciente para corrección de la coagulopatía (reversión de warfarina) y evaluación por otorrinolaringología ante la posibilidad de requerir cauterización endoscópica, ligadura o embolización arterial si el sangrado persiste.",
      },
      {
        id: "D",
        label: "D",
        text: "Colocar taponamiento anterior adicional únicamente y dar de alta al paciente con control ambulatorio programado por otorrinolaringología.",
        distractorProfile: "insufficient_management_unsafe_discharge",
        incorrectFeedback:
          "El taponamiento anterior ya demostró ser insuficiente, con sangrado activo continuo hacia la faringe posterior; dar de alta a un paciente anticoagulado con INR muy elevado y sangrado no controlado es inseguro y no corresponde al siguiente escalón indicado en el manejo de la epistaxis refractaria.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El paciente cursa con una **Epistaxis Severa/Posterior refractaria al taponamiento anterior**, agravada por anticoagulación supraterapéutica (INR 4.2) e hipertensión arterial no controlada, ambos factores que dificultan la hemostasia. El manejo de la epistaxis sigue un enfoque **escalonado**: primero compresión digital directa de las alas nasales durante al menos 10-15 minutos continuos; si no cede y se identifica un punto sangrante anterior visible, cauterización química o eléctrica; si no hay un punto identificable o el sangrado es más extenso, **taponamiento nasal anterior**. Cuando el sangrado persiste a pesar del taponamiento anterior adecuado, con evidencia de sangrado hacia la faringe posterior (como en este caso), se sospecha un origen posterior (típicamente de la arteria esfenopalatina) y el siguiente paso es el **taponamiento nasal posterior** (con balón neumático específico o sonda con globo tipo Foley modificada), que requiere **hospitalización** del paciente por el riesgo de complicaciones (reflejo naso-pulmonar, hipoxemia, arritmias) y porque con frecuencia se necesita una intervención adicional. De forma paralela es indispensable **corregir la coagulopatía** (en este caso, reversión de warfarina con vitamina K y/o concentrado de complejo protrombínico según la urgencia) y controlar la presión arterial. Si el sangrado persiste a pesar del taponamiento posterior, el otorrinolaringólogo debe considerar cauterización endoscópica dirigida, ligadura arterial quirúrgica o embolización angiográfica selectiva.",
    keyPoints: [
      "La epistaxis que no cede con compresión digital ni taponamiento anterior, con sangrado hacia la faringe posterior, sugiere origen posterior (arteria esfenopalatina) y requiere escalar el manejo, no repetir la misma medida ni dar de alta.",
      "Epistaxis Severa Refractaria. Manejo escalonado: compresión digital → cauterización si hay punto visible → taponamiento anterior → taponamiento posterior + hospitalización, corrigiendo simultáneamente la coagulopatía; si persiste, cauterización endoscópica, ligadura o embolización arterial.",
      "Otorrinolaringología de Urgencias / Epistaxis.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-80",
    university: "UCC",
    examArea: "INFECTOLOGÍA - ZOONOSIS",
    topic: "Leptospirosis (Enfermedad de Weil)",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "leptospirosis"],
    statement:
      "Un hombre de 36 años, trabajador de alcantarillado, consulta por fiebre alta de inicio súbito, mialgias intensas de predominio en pantorrillas, cefalea y enrojecimiento ocular bilateral sin secreción de 5 días de evolución, con empeoramiento en las últimas 24 horas caracterizado por ictericia progresiva, oliguria y confusión leve. Refiere haber trabajado en labores de limpieza tras una inundación reciente en la zona, con exposición directa a aguas estancadas contaminadas. Al examen físico se observa ictericia marcada, hiperemia conjuntival bilateral sin secreción purulenta (\"suffusión conjuntival\"), y dolor intenso a la palpación de las masas gastrocnemias. Los laboratorios muestran creatinina 3.4 mg/dL, bilirrubina total 9.8 mg/dL (predominio directo), plaquetas 62.000/mm³ y leucocitosis con neutrofilia. ¿Cuál es la conducta terapéutica más apropiada en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar antibioticoterapia empírica temprana con penicilina cristalina intravenosa (o ceftriaxona como alternativa), sin esperar la confirmación serológica, dado el cuadro clínico compatible con enfermedad de Weil y el compromiso multiorgánico ya presente.",
      },
      {
        id: "B",
        label: "B",
        text: "Esperar el resultado de la serología confirmatoria (prueba de microaglutinación, MAT) antes de iniciar cualquier antibiótico, para evitar tratamiento innecesario.",
        distractorProfile: "dangerous_diagnostic_delay",
        incorrectFeedback:
          "La serología confirmatoria (MAT) puede tardar días y frecuentemente se positiviza tardíamente en el curso de la enfermedad; en un cuadro clínico-epidemiológico altamente sugestivo con compromiso multiorgánico ya instaurado (renal, hepático, hematológico), el tratamiento antibiótico empírico debe iniciarse de inmediato sin esperar la confirmación, ya que cada día de retraso empeora el pronóstico.",
      },
      {
        id: "C",
        label: "C",
        text: "Dar manejo únicamente sintomático con antipiréticos y analgésicos, ya que la leptospirosis es una enfermedad autolimitada en todos los casos y no requiere antibiótico.",
        distractorProfile: "false_belief_all_cases_self_limited",
        incorrectFeedback:
          "Aunque muchos casos de leptospirosis son leves y autolimitados (forma anictérica), este paciente presenta la forma grave conocida como enfermedad de Weil, con ictericia, falla renal aguda, trombocitopenia y alteración del estado mental; en esta forma grave el antibiótico intravenoso es indispensable y el manejo puramente sintomático conlleva un riesgo significativo de mortalidad.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar doxiciclina oral en dosis única como tratamiento definitivo, siendo suficiente incluso en este paciente hospitalizado con falla renal establecida.",
        distractorProfile: "wrong_route_and_regimen_for_severe_disease",
        incorrectFeedback:
          "La doxiciclina oral (habitualmente en ciclo de varios días, no dosis única) se reserva para casos leves manejados de forma ambulatoria o como profilaxis postexposición; en la forma grave con compromiso multiorgánico y hospitalización, el tratamiento indicado es un betalactámico intravenoso (penicilina cristalina o ceftriaxona), no la doxiciclina oral.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El paciente cursa con **Leptospirosis** en su forma grave, conocida como **Enfermedad de Weil** o síndrome ictero-hemorrágico, causada por espiroquetas del género *Leptospira*, transmitidas por contacto con agua o suelo contaminados con orina de roedores u otros animales infectados, un riesgo clásicamente aumentado en trabajadores de alcantarillado, agricultores y tras inundaciones. El cuadro clínico típico tiene una fase inicial (leptospirémica) con fiebre, mialgias intensas de predominio en pantorrillas, cefalea y **suffusión conjuntival** (hiperemia conjuntival bilateral SIN secreción purulenta, un hallazgo muy sugestivo), que en la forma grave progresa a la fase inmune con la tríada característica de la enfermedad de Weil: **ictericia** (por disfunción hepatocelular y hemólisis, con patrón colestásico), **lesión renal aguda** (por nefritis intersticial y necrosis tubular, frecuentemente no oligúrica pero que puede ser oligúrica como en este caso) y **diátesis hemorrágica** (trombocitopenia, sangrados mucocutáneos). Dado que se trata de una enfermedad potencialmente fatal y que las pruebas serológicas confirmatorias (como la prueba de microaglutinación, MAT) suelen tardar y positivizarse tardíamente, el **tratamiento antibiótico empírico debe iniciarse de forma temprana ante la sospecha clínico-epidemiológica**, sin esperar confirmación. En la enfermedad grave/hospitalizada, el tratamiento de elección es un betalactámico intravenoso: **penicilina cristalina** (o ceftriaxona/cefotaxima como alternativas eficaces), mientras que la doxiciclina oral se reserva para los casos leves ambulatorios o como profilaxis postexposición.",
    keyPoints: [
      "Exposición a agua contaminada (inundación, alcantarillado) + fiebre + mialgias intensas en pantorrillas + suffusión conjuntival sin secreción son claves epidemiológicas y clínicas de leptospirosis; la progresión a ictericia + falla renal + trombocitopenia define la Enfermedad de Weil.",
      "Leptospirosis grave (Enfermedad de Weil). El tratamiento antibiótico empírico (penicilina cristalina IV o ceftriaxona en casos graves; doxiciclina oral en casos leves) debe iniciarse ante la sospecha clínica, sin esperar la confirmación serológica (MAT), que suele ser tardía.",
      "Infectología / Zoonosis - Leptospirosis.",
    ],
  },
];
