import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #7 (6 sep 2026) · Preguntas #41–#50.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_06_41_50_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-06-41",
    university: "UCC",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - URGENCIAS",
    topic: "Emergencias Obstétricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","emergencias-obst-tricas","emergencias","obst","tricas"],
    statement: "Una mujer de 33 años, con 33 semanas de gestación y antecedente de una cesárea previa, consulta por sangrado vaginal rojo rutilante, indoloro, de inicio súbito mientras dormía, sin contracciones uterinas asociadas. Al examen físico, el útero está relajado y no doloroso, y el monitoreo fetal es tranquilizador. La paciente NO tuvo control ecográfico durante este embarazo. Ante la sospecha diagnóstica, ¿cuál es la conducta que debe evitarse ESTRICTAMENTE hasta confirmar la localización placentaria, y cuál es el estudio de elección para hacerlo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Tacto vaginal digital para evaluar la dilatación cervical; es seguro realizarlo en cualquier sangrado del tercer trimestre.",
        distractorProfile: "dangerous_contraindicated_examination",
        incorrectFeedback: "El tacto vaginal digital está formalmente contraindicado ante sospecha de placenta previa no descartada, ya que puede desencadenar una hemorragia masiva al lesionar directamente los vasos placentarios expuestos sobre el orificio cervical.",
      },
      {
        id: "B",
        label: "B",
        text: "Evitar ESTRICTAMENTE el tacto vaginal digital hasta descartar Placenta Previa mediante Ecografía Transvaginal.",
      },
      {
        id: "C",
        label: "C",
        text: "Amniorrexis artificial inmediata para inducir el trabajo de parto y controlar el sangrado.",
        distractorProfile: "dangerous_procedure_before_diagnosis",
        incorrectFeedback: "Romper artificialmente las membranas sin haber descartado primero placenta previa es extremadamente peligroso, ya que el procedimiento requiere manipulación cervical que puede lacerar vasos placentarios previos y desencadenar hemorragia masiva incontrolable.",
      },
      {
        id: "D",
        label: "D",
        text: "Maniobras de Leopold vigorosas para determinar la posición fetal antes de cualquier otro estudio.",
        distractorProfile: "irrelevant_and_potentially_harmful_priority",
        incorrectFeedback: "Aunque las maniobras de Leopold en sí no son tan riesgosas como el tacto vaginal, no son la prioridad diagnóstica ante sangrado del tercer trimestre; el paso urgente e indispensable es confirmar la localización placentaria mediante ecografía antes de cualquier otra maniobra exploratoria.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta un cuadro clásico de **Placenta Previa**: sangrado vaginal indoloro, de color rojo rutilante, sin actividad uterina asociada, en el tercer trimestre, con un factor de riesgo relevante (cesárea previa, que aumenta el riesgo de anomalías de implantación placentaria). La regla de oro absoluta ante sospecha de sangrado del tercer trimestre de origen no confirmado es **evitar estrictamente el tacto vaginal digital** (y cualquier maniobra que introduzca dedos o instrumentos al canal cervical), ya que si efectivamente existe una placenta previa (placenta que cubre total o parcialmente el orificio cervical interno), el examen digital puede desgarrar vasos placentarios y desencadenar una **hemorragia masiva incontrolable**, poniendo en riesgo inmediato la vida materna y fetal. El estudio de elección, seguro y no invasivo, para confirmar o descartar la localización placentaria es la **Ecografía Transvaginal** (contrario a la intuición, es segura en este contexto y superior a la transabdominal para visualizar la relación exacta entre la placenta y el orificio cervical interno).",
    keyPoints: [
    "Sangrado vaginal del tercer trimestre, rojo rutilante, INDOLORO, sin contracciones, útero relajado.",
    "Placenta Previa. REGLA DE ORO ABSOLUTA: NUNCA hacer tacto vaginal digital hasta confirmar la localización placentaria mediante Ecografía Transvaginal (segura y de elección), por riesgo de hemorragia masiva si se toca una placenta previa a ciegas.",
    "Emergencias Obstétricas / Placenta Previa."
],
  },
  {
    id: "ucc-conv-2026-09-06-42",
    university: "UCC",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA / GINECOLOGÍA",
    topic: "Infectología",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","infectolog-a","infectolog","a"],
    statement: "Una mujer de 22 años consulta por fiebre alta súbita (40°C), hipotensión (PA 80/50 mmHg), un exantema difuso eritematoso \"similar a quemadura solar\" en todo el cuerpo, mialgias intensas, vómito y diarrea profusa, dos días después de haber comenzado a usar un tampón vaginal de alta absorción durante su menstruación, sin haberlo retirado en más de 24 horas. Al examen físico hay hiperemia conjuntival y de mucosas orales, sin foco infeccioso evidente en piel o articulaciones. Los laboratorios muestran función renal y hepática alteradas, y plaquetas en descenso. Una semana después de la resolución del cuadro agudo, la paciente presenta descamación característica de palmas y plantas. ¿Cuál es el diagnóstico más probable, y cuál es el paso terapéutico inicial más importante además del soporte hemodinámico y los antibióticos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Meningococcemia; el paso más importante es la profilaxis a los contactos cercanos con Rifampicina.",
        distractorProfile: "wrong_diagnosis_missing_key_context",
        incorrectFeedback: "La Meningococcemia clásicamente presenta petequias y púrpura (no un exantema difuso tipo \"quemadura solar\") y no se asocia al uso de tampones; el contexto clínico específico y la descamación tardía característica apuntan mucho más al Síndrome de Shock Tóxico Estafilocócico.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Shock Tóxico Estafilocócico; el paso más importante es la remoción INMEDIATA del cuerpo extraño (el tampón) y desbridamiento de cualquier foco local si existe.",
      },
      {
        id: "C",
        label: "C",
        text: "Enfermedad de Kawasaki del adulto; el tratamiento principal es Inmunoglobulina Intravenosa exclusivamente.",
        distractorProfile: "wrong_diagnosis_wrong_age_group",
        incorrectFeedback: "La Enfermedad de Kawasaki es una entidad casi exclusivamente pediátrica y no está asociada al uso de tampones ni tiene el mismo mecanismo fisiopatológico toxigénico; el contexto clínico específico de esta viñeta es mucho más compatible con el Síndrome de Shock Tóxico.",
      },
      {
        id: "D",
        label: "D",
        text: "Escarlatina complicada; el tratamiento principal es Penicilina oral en dosis estándar de forma ambulatoria.",
        distractorProfile: "severe_underdiagnosis_of_shock_state",
        incorrectFeedback: "El manejo ambulatorio con penicilina oral es completamente insuficiente e inadecuado ante un cuadro de shock con hipotensión y falla multiorgánica; independientemente del nombre exacto, este cuadro requiere hospitalización urgente con reanimación agresiva y remoción del foco causal.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con un **Síndrome de Shock Tóxico Estafilocócico**, causado por toxinas superantigénicas (típicamente la Toxina del Síndrome de Shock Tóxico-1, TSST-1) producidas por *Staphylococcus aureus*, clásicamente asociado al uso prolongado de tampones de alta absorción durante la menstruación, aunque también puede ocurrir por heridas quirúrgicas o cutáneas infectadas. El cuadro característico incluye fiebre alta súbita, hipotensión, un exantema eritematoso difuso \"similar a quemadura solar\", compromiso multiorgánico (renal, hepático, hematológico), y la **descamación característica de palmas y plantas 1-2 semanas después** de la fase aguda. El paso terapéutico crucial, además de la reanimación hemodinámica agresiva y los antibióticos antiestafilocócicos, es la **remoción inmediata de la fuente del foco toxígeno** (en este caso, el tampón retenido), ya que mientras la fuente de producción de toxina permanezca in situ, el shock puede persistir y ser refractario al tratamiento de soporte, independientemente de cuán agresivo sea este último.",
    keyPoints: [
    "Mujer joven con uso de tampón de alta absorción + fiebre alta + hipotensión + exantema difuso \"quemadura solar\" + falla multiorgánica.; Descamación de palmas/plantas 1-2 semanas después de la fase aguda.",
    "Síndrome de Shock Tóxico Estafilocócico. Paso terapéutico crucial: REMOVER inmediatamente la fuente del foco toxígeno (tampón, empaque quirúrgico, etc.), además de reanimación y antibióticos antiestafilocócicos.",
    "Infectología / Síndrome de Shock Tóxico Estafilocócico."
],
  },
  {
    id: "ucc-conv-2026-09-06-43",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUROLOGÍA / TOXICOLOGÍA",
    topic: "Urgencias Neurológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-neurol-gicas","urgencias","neurol","gicas"],
    statement: "Un hombre de 52 años, con antecedente de consumo crónico de alcohol, es traído a urgencias por su familia debido a confusión progresiva de 3 días de evolución, tras un periodo de disminución marcada de la ingesta de alimentos (reportan que \"solo tomaba licor\" durante la última semana). Al examen físico: desorientado en tiempo y espacio, con **nistagmo horizontal bilateral**, **oftalmoplejía** (limitación para la abducción ocular bilateral), y **ataxia de la marcha** que le impide caminar sin apoyo. No hay signos de focalización motora ni sensitiva lateralizada. Antes de administrar cualquier solución glucosada intravenosa (que el paciente claramente necesita por su desnutrición), ¿qué medida terapéutica debe administrarse SIEMPRE de forma previa o simultánea para prevenir el empeoramiento agudo e irreversible del cuadro neurológico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Naloxona intravenosa, ante la posibilidad de una sobredosis de opioides concomitante no reportada.",
        distractorProfile: "irrelevant_alternative_diagnosis",
        incorrectFeedback: "No hay hallazgos clínicos que sugieran intoxicación por opioides (como miosis puntiforme o depresión respiratoria); la tríada de oftalmoplejía, ataxia y confusión en el contexto de alcoholismo crónico apunta específicamente a deficiencia de Tiamina, no a toxicidad opioide.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Tiamina (Vitamina B1) parenteral ANTES o simultáneamente con cualquier solución glucosada.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Flumazenil intravenoso, para revertir un posible efecto residual de benzodiacepinas.",
        distractorProfile: "irrelevant_and_potentially_dangerous",
        incorrectFeedback: "No hay antecedente de uso de benzodiacepinas en esta viñeta, y el Flumazenil puede precipitar convulsiones en pacientes con dependencia crónica no reconocida; el hallazgo clínico específico de la tríada de Wernicke exige priorizar la reposición de Tiamina, no la reversión de sedantes.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar hemodiálisis de emergencia para acelerar la depuración del alcohol circulante.",
        distractorProfile: "unnecessary_invasive_intervention",
        incorrectFeedback: "No hay evidencia de intoxicación alcohólica aguda grave con riesgo vital inminente que justifique diálisis de emergencia; el problema clínico central es la deficiencia de Tiamina causando daño neurológico, que se trata con reposición vitamínica, no con procedimientos de depuración extracorpórea.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta la tríada clásica (aunque frecuentemente incompleta en la práctica clínica real) de la **Encefalopatía de Wernicke**: confusión, oftalmoplejía/nistagmo, y ataxia de la marcha, causada por una **deficiencia aguda de Tiamina (Vitamina B1)**, típicamente en el contexto de alcoholismo crónico con desnutrición asociada. La regla de oro terapéutica absoluta e innegociable es que la **Tiamina parenteral debe administrarse ANTES o, como mínimo, de forma SIMULTÁNEA** con cualquier solución que contenga glucosa. La razón fisiopatológica es que la glucosa es metabolizada utilizando la Tiamina como cofactor enzimático esencial (en el ciclo de Krebs y en la vía de las pentosas fosfato); si se administra glucosa a un paciente con reservas de Tiamina ya críticamente depletadas SIN reponer primero la Tiamina, se consume abruptamente el poco cofactor restante, precipitando o **empeorando agudamente e irreversiblemente** el daño neuronal de la Encefalopatía de Wernicke, pudiendo progresar hacia el Síndrome de Korsakoff (amnesia anterógrada y confabulación permanentes).",
    keyPoints: [
    "Paciente con alcoholismo crónico/desnutrición + Confusión + Oftalmoplejía/Nistagmo + Ataxia de la marcha (Tríada de Wernicke).",
    "Encefalopatía de Wernicke (deficiencia de Tiamina). REGLA DE ORO ABSOLUTA: Administrar Tiamina SIEMPRE ANTES o simultáneamente con la Glucosa/Dextrosa, nunca después, para evitar precipitar o empeorar el daño neuronal irreversible.",
    "Urgencias Neurológicas / Encefalopatía de Wernicke."
],
  },
  {
    id: "ucc-conv-2026-09-06-44",
    university: "UCC",
    examArea: "PEDIATRÍA - ORTOPEDIA",
    topic: "Ortopedia Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","ortopedia-pedi-trica","ortopedia","pedi","trica"],
    statement: "Un adolescente varón de 12 años, con obesidad (percentil de peso >95), consulta por dolor progresivo en la cadera izquierda de 3 semanas de evolución, que en los últimos días se ha irradiado hacia la rodilla ipsilateral (donde inicialmente los padres pensaron que estaba el problema), asociado a cojera progresiva. Refiere que el dolor empeora con la actividad física. Al examen físico, hay limitación dolorosa de la rotación interna y abducción de la cadera izquierda, y al flexionar pasivamente la cadera, esta rota espontáneamente hacia una posición de rotación externa (signo de Drehmann positivo). Una radiografía de cadera en proyección de rana (frog-leg) confirma el desplazamiento posteroinferior de la epífisis femoral respecto a la metáfisis. ¿Cuál es el diagnóstico, y cuál es la conducta terapéutica INMEDIATA una vez confirmado, evitando movilización adicional de la extremidad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Sinovitis Transitoria de Cadera; manejo conservador con reposo y antiinflamatorios, sin necesidad de intervención quirúrgica.",
        distractorProfile: "wrong_diagnosis_missing_radiographic_confirmation",
        incorrectFeedback: "La Sinovitis Transitoria es un diagnóstico de exclusión, autolimitado y sin hallazgos radiográficos estructurales; en esta viñeta, la radiografía ya confirmó el desplazamiento epifisario característico de la Epifisiólisis Femoral Proximal, un diagnóstico estructural que requiere manejo quirúrgico, no solo reposo.",
      },
      {
        id: "B",
        label: "B",
        text: "Epifisiólisis Femoral Proximal (Deslizamiento de la Epífisis Femoral Capital); restricción INMEDIATA de carga de peso y fijación quirúrgica urgente (típicamente con tornillo percutáneo) para prevenir progresión del deslizamiento.",
      },
      {
        id: "C",
        label: "C",
        text: "Enfermedad de Legg-Calvé-Perthes; manejo con órtesis de abducción durante varios meses, sin necesidad de cirugía inmediata.",
        distractorProfile: "wrong_diagnosis_wrong_age_group",
        incorrectFeedback: "La Enfermedad de Legg-Calvé-Perthes (necrosis avascular idiopática de la cabeza femoral) es característica de niños más pequeños (típicamente 4-8 años), no de adolescentes obesos; el hallazgo radiográfico de deslizamiento epifisario (no de fragmentación/colapso de la cabeza femoral) confirma la Epifisiólisis, no el Perthes.",
      },
      {
        id: "D",
        label: "D",
        text: "Osteomielitis de cadera; inicio de antibioticoterapia empírica prolongada sin necesidad de restricción de la carga de peso.",
        distractorProfile: "wrong_diagnosis_missing_infectious_features",
        incorrectFeedback: "No hay fiebre, elevación de marcadores inflamatorios ni hallazgos radiográficos de destrucción ósea infecciosa descritos en esta viñeta; el hallazgo específico de desplazamiento epifisario en la radiografía es diagnóstico de Epifisiólisis Femoral Proximal, no de un proceso infeccioso óseo.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta una **Epifisiólisis Femoral Proximal** (Deslizamiento de la Epífisis Femoral Capital, SCFE por sus siglas en inglés), la patología de cadera más común en adolescentes, con fuerte asociación a la **obesidad** (el exceso de peso genera fuerzas de cizallamiento sobre la placa de crecimiento aún abierta y vulnerable de la cabeza femoral). El cuadro clásico es dolor de cadera que frecuentemente se refiere y confunde inicialmente con dolor de rodilla (por la inervación compartida del nervio obturador), cojera, limitación de la rotación interna, y el característico Signo de Drehmann (rotación externa obligada al flexionar pasivamente la cadera). Una vez confirmado el diagnóstico radiográficamente, la conducta es la **restricción inmediata de la carga de peso** (para prevenir mayor deslizamiento de la epífisis) y la **fijación quirúrgica urgente**, generalmente mediante la colocación percutánea de un tornillo que estabiliza la epífisis in situ, previniendo la progresión hacia complicaciones graves como la necrosis avascular de la cabeza femoral o la condrólisis.",
    keyPoints: [
    "Adolescente con obesidad + dolor de cadera que se refiere/confunde con dolor de RODILLA + cojera + limitación de rotación interna + Signo de Drehmann positivo.",
    "Epifisiólisis Femoral Proximal (SCFE). Conducta INMEDIATA: Restricción de carga de peso (NO caminar) + Fijación quirúrgica urgente (tornillo percutáneo). Riesgo de retraso: necrosis avascular de cabeza femoral.",
    "Ortopedia Pediátrica / Epifisiólisis Femoral Proximal."
],
  },
  {
    id: "ucc-conv-2026-09-06-45",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CUIDADO CRÍTICO / TOXICOLOGÍA",
    topic: "Toxicología",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","toxicolog-a","toxicolog","a"],
    statement: "Una familia completa (madre, padre y dos hijos) es traída a urgencias tras ser encontrados inconscientes en su vivienda durante el invierno, con un calentador de gas funcionando en un ambiente cerrado y mal ventilado. Todos presentan cefalea intensa, náuseas, confusión, y uno de los niños presentó un episodio sincopal. Llamativamente, la **saturación de oxígeno medida por pulsioximetría convencional en todos los pacientes es de 98-99%**, a pesar de que clínicamente lucen hipóxicos y confusos. ¿Por qué la pulsioximetría convencional es ENGAÑOSA y no debe utilizarse para evaluar la oxigenación real en este escenario, y cuál es el estudio que debe solicitarse en su lugar?",
    options: [
      {
        id: "A",
        label: "A",
        text: "La pulsioximetría siempre es precisa; los síntomas se deben exclusivamente a un cuadro viral concomitante no relacionado con el ambiente.",
        distractorProfile: "dangerous_dismissal_of_environmental_clue",
        incorrectFeedback: "Atribuir el cuadro a una infección viral ignora completamente el patrón epidemiológico clave (múltiples miembros de una familia afectados simultáneamente, exposición a fuente de combustión en espacio cerrado), y la premisa de que la pulsioximetría \"siempre es precisa\" es falsa precisamente en el contexto de intoxicación por CO.",
      },
      {
        id: "B",
        label: "B",
        text: "La pulsioximetría convencional NO distingue entre oxihemoglobina y carboxihemoglobina, dando lecturas falsamente normales; se debe solicitar Cooximetría (gasometría con medición específica de carboxihemoglobina).",
      },
      {
        id: "C",
        label: "C",
        text: "La pulsioximetría subestima falsamente la saturación real en la intoxicación por monóxido de carbono, por lo que el valor real es aún más bajo de lo reportado.",
        distractorProfile: "reversed_direction_of_error",
        incorrectFeedback: "El error de la pulsioximetría en la intoxicación por CO es en la dirección opuesta: SOBREESTIMA falsamente la saturación real (mostrando valores normales o casi normales) porque interpreta erróneamente la carboxihemoglobina como si fuera oxihemoglobina funcional, no porque subestime el valor real.",
      },
      {
        id: "D",
        label: "D",
        text: "El equipo de pulsioximetría está descalibrado; debe repetirse la medición con un equipo nuevo antes de continuar el estudio.",
        distractorProfile: "wrong_attribution_to_equipment_malfunction",
        incorrectFeedback: "El problema no es una falla técnica del equipo específico, sino una limitación inherente y bien conocida de la tecnología de pulsioximetría convencional para diferenciar carboxihemoglobina de oxihemoglobina; repetir con otro equipo convencional dará el mismo resultado engañoso.",
      },
    ],
    correctOptionId: "B",
    explanation: "Esta familia presenta una **Intoxicación por Monóxido de Carbono (CO)**, típicamente originada por combustión incompleta de gas en espacios cerrados y mal ventilados (calentadores, estufas, motores), una causa frecuente e importante de intoxicación accidental, especialmente en climas fríos. El CO se une a la hemoglobina con una afinidad aproximadamente 200 veces mayor que el oxígeno, formando **carboxihemoglobina**, que desplaza al oxígeno y además altera la curva de disociación de la hemoglobina, dificultando la liberación de oxígeno a los tejidos (hipoxia tisular real a pesar de \"saturación normal\"). La razón crítica por la que la **pulsioximetría convencional es engañosa** es que este dispositivo mide la absorción de luz a solo dos longitudes de onda, y **no puede distinguir entre oxihemoglobina y carboxihemoglobina**, interpretando erróneamente ambas como si fueran oxihemoglobina normal, generando lecturas falsamente normales o incluso elevadas mientras el paciente está gravemente hipóxico a nivel tisular. El estudio correcto es la **Cooximetría** (parte de una gasometría arterial o venosa con el equipo adecuado), que mide directamente el nivel de carboxihemoglobina.",
    keyPoints: [
    "Múltiples personas de un mismo hogar con cefalea/confusión/síncope, exposición a fuente de combustión en espacio cerrado.; Saturación de oxígeno por pulsioximetría convencional FALSAMENTE NORMAL.",
    "Intoxicación por Monóxido de Carbono. La pulsioximetría convencional NO sirve (no distingue carboxihemoglobina de oxihemoglobina). Estudio correcto: Cooximetría. Tratamiento: Oxígeno al 100% (considerar cámara hiperbárica en casos severos).",
    "Toxicología / Intoxicación por Monóxido de Carbono."
],
  },
  {
    id: "ucc-conv-2026-09-06-46",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ONCOLOGÍA / NEFROLOGÍA",
    topic: "Emergencias Oncológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","emergencias-oncol-gicas","emergencias","oncol","gicas"],
    statement: "Un hombre de 58 años, con diagnóstico reciente de Linfoma No Hodgkin de alto grado y gran masa tumoral abdominal, inicia su primer ciclo de quimioterapia. A las 18 horas de haber recibido el tratamiento, presenta debilidad muscular, calambres, y en el monitor cardíaco se observan arritmias. Los laboratorios de control muestran: Potasio 6.9 mEq/L, Ácido úrico 14 mg/dL, Fósforo 8.5 mg/dL, y Calcio sérico corregido de 6.2 mg/dL (bajo), con Creatinina en ascenso progresivo (2.4 mg/dL, previamente normal). ¿Cuál es el diagnóstico de esta complicación oncológica, y cuál es la medida más importante que debió haberse implementado ANTES de iniciar la quimioterapia para prevenirla en un paciente de alto riesgo como este?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome de Lisis Tumoral; prevención con hidratación agresiva y Rasburicasa (o Alopurinol) ANTES de iniciar la quimioterapia.",
      },
      {
        id: "B",
        label: "B",
        text: "Nefropatía inducida por contraste; prevención con N-acetilcisteína administrada antes del estudio de imagen contrastado.",
        distractorProfile: "wrong_diagnosis_wrong_context",
        incorrectFeedback: "No hay mención de exposición a contraste radiológico en esta viñeta; el patrón metabólico específico de hiperkalemia, hiperuricemia, hiperfosfatemia e hipocalcemia tras el inicio de quimioterapia en un tumor de alta carga es característico del Síndrome de Lisis Tumoral, no de nefropatía por contraste.",
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome de Secreción Inadecuada de Hormona Antidiurética paraneoplásico; prevención con restricción hídrica estricta previa.",
        distractorProfile: "wrong_diagnosis_and_dangerous_wrong_prevention",
        incorrectFeedback: "El SIADH cursa característicamente con hiponatremia dilucional, no con la tétrada metabólica descrita aquí; además, la restricción hídrica sería peligrosamente contraproducente en el Síndrome de Lisis Tumoral, donde la hidratación agresiva es precisamente la medida preventiva fundamental.",
      },
      {
        id: "D",
        label: "D",
        text: "Insuficiencia Suprarrenal Aguda inducida por quimioterapia; prevención con Hidrocortisona profiláctica antes del tratamiento.",
        distractorProfile: "wrong_diagnosis_unrelated_mechanism",
        incorrectFeedback: "El patrón de laboratorio descrito (hiperkalemia, hiperuricemia, hiperfosfatemia, hipocalcemia, lesión renal aguda tras destrucción celular masiva) es característico y específico del Síndrome de Lisis Tumoral, un mecanismo completamente distinto al de una insuficiencia suprarrenal aguda.",
      },
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con un **Síndrome de Lisis Tumoral**, una emergencia oncológica metabólica que ocurre cuando un gran número de células tumorales mueren rápidamente (típicamente tras el inicio de quimioterapia, especialmente en tumores de alta carga tumoral y rápida proliferación como los linfomas de alto grado o las leucemias agudas), liberando masivamente su contenido intracelular al torrente sanguíneo. Esto genera la tétrada característica: **Hiperkalemia** (riesgo de arritmias letales), **Hiperuricemia** (los ácidos nucleicos liberados se metabolizan a ácido úrico, que puede precipitar en los túbulos renales causando lesión renal aguda), **Hiperfosfatemia**, e **Hipocalcemia** secundaria (el fósforo elevado se une al calcio circulante, precipitando como fosfato de calcio). La prevención en pacientes de **alto riesgo** (como este, con gran masa tumoral y neoplasia de rápida proliferación) es fundamental e incluye **hidratación intravenosa agresiva** iniciada antes de la quimioterapia, junto con agentes hipouricemiantes: **Rasburicasa** (que degrada directamente el ácido úrico existente, de elección en pacientes de alto riesgo) o **Alopurinol** (que previene la formación de nuevo ácido úrico, usado en riesgo bajo-intermedio).",
    keyPoints: [
    "Paciente con tumor de alta carga/rápida proliferación (linfoma alto grado, leucemia aguda) que inicia quimioterapia y desarrolla: Hiperkalemia + Hiperuricemia + Hiperfosfatemia + Hipocalcemia + Lesión Renal Aguda.",
    "Síndrome de Lisis Tumoral. Prevención en alto riesgo: Hidratación IV agresiva + Rasburicasa (o Alopurinol) ANTES de iniciar quimioterapia. Es predecible y prevenible en la mayoría de los casos si se identifica el riesgo a tiempo.",
    "Emergencias Oncológicas / Síndrome de Lisis Tumoral."
],
  },
  {
    id: "ucc-conv-2026-09-06-47",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUROLOGÍA / URGENCIAS",
    topic: "Cefaleas Primarias",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","cefaleas-primarias","cefaleas","primarias"],
    statement: "Un hombre de 38 años consulta a urgencias por episodios recurrentes de dolor de cabeza extremadamente severo, de localización estrictamente unilateral periorbitaria derecha, de inicio súbito, que alcanza su máxima intensidad en 10-15 minutos y dura aproximadamente 45-60 minutos, ocurriendo típicamente a la misma hora cada noche durante las últimas 2 semanas (varios episodios \"en racimo\"). Durante los episodios, el paciente refiere agitación e inquietud extrema (a diferencia de la migraña, donde prefiere quedarse quieto), y se observa **lagrimeo y congestión nasal ipsilaterales**, junto con **ptosis y miosis leves del mismo lado** (Síndrome de Horner parcial transitorio). ¿Cuál es el diagnóstico más probable, y cuál es el tratamiento de PRIMERA LÍNEA para abortar el episodio agudo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Migraña con aura; tratamiento agudo con un Triptán oral de acción rápida como primera línea.",
        distractorProfile: "wrong_diagnosis_missing_autonomic_features",
        incorrectFeedback: "Los síntomas autonómicos ipsilaterales (lagrimeo, congestión nasal, Horner parcial) y la agitación del paciente durante el episodio, junto con la periodicidad circadiana característica en \"racimos\", son específicos de la cefalea en racimos y no forman parte del cuadro típico de migraña.",
      },
      {
        id: "B",
        label: "B",
        text: "Cefalea en Racimos (Cluster Headache); tratamiento agudo de primera línea con Oxígeno al 100% de alto flujo y/o Sumatriptán subcutáneo.",
      },
      {
        id: "C",
        label: "C",
        text: "Neuralgia del Trigémino; tratamiento agudo con Carbamazepina en dosis de carga inmediata.",
        distractorProfile: "wrong_diagnosis_different_pain_pattern",
        incorrectFeedback: "La Neuralgia del Trigémino se caracteriza por episodios de dolor tipo \"descarga eléctrica\" de segundos de duración, desencadenados por estímulos táctiles específicos (afeitarse, masticar, tocar la cara), un patrón temporal y desencadenante completamente distinto al descrito en esta viñeta.",
      },
      {
        id: "D",
        label: "D",
        text: "Cefalea Tensional Crónica; tratamiento con Amitriptilina como profilaxis, sin necesidad de tratamiento abortivo específico.",
        distractorProfile: "wrong_diagnosis_wrong_severity_pattern",
        incorrectFeedback: "La Cefalea Tensional típicamente es bilateral, de intensidad leve a moderada tipo \"opresiva/banda\", sin los síntomas autonómicos marcados ni la severidad extrema descritos en esta viñeta, que son característicos de la cefalea en racimos.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Cefalea en Racimos (Cluster Headache)**, una cefalea trigémino-autonómica caracterizada por episodios de dolor severo, estrictamente unilateral, periorbitario/temporal, de corta duración (15-180 minutos), que ocurren de forma agrupada (\"en racimo\") durante semanas o meses, frecuentemente con periodicidad circadiana notable (mismo horario cada día/noche). La clave diagnóstica es la asociación con **síntomas autonómicos ipsilaterales** (lagrimeo, congestión nasal, ptosis/miosis parcial) y la **agitación/inquietud** del paciente durante el episodio (contrastando marcadamente con la migraña, donde el paciente busca reposo en oscuridad y quietud). El tratamiento agudo de primera línea, para abortar rápidamente el episodio en curso, es el **Oxígeno al 100% con mascarilla de alto flujo** (típicamente 12-15 L/min durante 15-20 minutos) y/o el **Sumatriptán subcutáneo** (de acción más rápida que la vía oral), ambos con evidencia sólida de eficacia específicamente en esta entidad.",
    keyPoints: [
    "Dolor UNILATERAL periorbitario/temporal severo, de corta duración, en \"racimos\" (agrupados en el tiempo, periodicidad circadiana).; Síntomas autonómicos ipsilaterales (lagrimeo, congestión nasal, Horner parcial) + AGITACIÓN (no reposo, a diferencia de la migraña).",
    "Cefalea en Racimos (Cluster Headache). Tratamiento agudo de primera línea: Oxígeno al 100% alto flujo y/o Sumatriptán subcutáneo. Predomina en hombres.",
    "Cefaleas Primarias / Cefalea en Racimos."
],
  },
  {
    id: "ucc-conv-2026-09-06-48",
    university: "UCC",
    examArea: "PEDIATRÍA - NEONATOLOGÍA / CIRUGÍA",
    topic: "Urgencias Neonatales",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-neonatales","urgencias","neonatales"],
    statement: "Un recién nacido a término, con antecedente de líquido amniótico teñido de meconio espeso durante el trabajo de parto, nace deprimido, con llanto débil y tono muscular disminuido. Inmediatamente después del nacimiento presenta dificultad respiratoria progresiva con taquipnea, retracciones intercostales marcadas, y cianosis. Al examen físico, el tórax muestra un diámetro anteroposterior aumentado (\"tórax en tonel\"), y a la auscultación se escuchan estertores gruesos difusos. Una radiografía de tórax muestra infiltrados parcheados difusos bilaterales, áreas de atelectasia alternadas con zonas de hiperinsuflación, y aplanamiento de los hemidiafragmas. ¿Cuál es el diagnóstico más probable, y cuál es una complicación pulmonar grave asociada que debe vigilarse activamente por el riesgo de deterioro respiratorio súbito?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Taquipnea Transitoria del Recién Nacido; complicación a vigilar: ninguna significativa, es un cuadro autolimitado en 24-72 horas.",
        distractorProfile: "underdiagnosis_of_severity",
        incorrectFeedback: "La Taquipnea Transitoria es un cuadro leve y autolimitado sin el patrón radiográfico de atelectasia/hiperinsuflación alternada ni el antecedente de líquido meconiado espeso; el cuadro descrito, con dificultad respiratoria significativa al nacer y hallazgos radiográficos característicos, corresponde a un Síndrome de Aspiración Meconial, de mayor gravedad y riesgo de complicaciones.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Aspiración Meconial; complicación a vigilar: Hipertensión Pulmonar Persistente del Recién Nacido y Neumotórax (por las zonas de hiperinsuflación con riesgo de ruptura alveolar).",
      },
      {
        id: "C",
        label: "C",
        text: "Enfermedad de Membrana Hialina; complicación a vigilar: Displasia Broncopulmonar exclusivamente, sin riesgo agudo inmediato.",
        distractorProfile: "wrong_diagnosis_wrong_population",
        incorrectFeedback: "La Enfermedad de Membrana Hialina es característica de recién nacidos PREMATUROS por déficit de surfactante, con un patrón radiográfico de vidrio esmerilado difuso homogéneo, no el patrón parcheado alternante descrito; además, no hay mención de prematuridad en esta viñeta, sino de un antecedente claro de aspiración meconial.",
      },
      {
        id: "D",
        label: "D",
        text: "Hernia Diafragmática Congénita no diagnosticada prenatalmente; complicación a vigilar: únicamente reflujo gastroesofágico a largo plazo.",
        distractorProfile: "wrong_diagnosis_missing_key_findings",
        incorrectFeedback: "La Hernia Diafragmática Congénita típicamente se presenta con abdomen escafoide, desviación de los ruidos cardíacos y ausencia de ruidos respiratorios unilaterales por desplazamiento de vísceras abdominales al tórax, hallazgos ausentes en esta viñeta, que en cambio describe claramente el patrón bilateral difuso característico de la aspiración meconial.",
      },
    ],
    correctOptionId: "B",
    explanation: "El recién nacido presenta un **Síndrome de Aspiración Meconial**, causado por la aspiración de líquido amniótico teñido de meconio hacia la vía aérea (típicamente en el contexto de sufrimiento fetal intraparto que causa relajación del esfínter anal fetal y jadeo reflejo). El meconio en la vía aérea causa obstrucción mecánica (con el patrón característico de atelectasia y áreas de hiperinsuflación alternadas, por un mecanismo valvular que atrapa aire), inflamación química de la mucosa bronquial, e inactivación del surfactante pulmonar. Dos complicaciones graves deben vigilarse activamente: primero, el **Neumotórax** (y/o neumomediastino), consecuencia directa de las zonas de hiperinsuflación con atrapamiento aéreo que pueden romper alvéolos sobredistendidos; y segundo, y más temida, la **Hipertensión Pulmonar Persistente del Recién Nacido (HPPRN)**, en la que la vasculatura pulmonar del neonato no logra la transición normal de resistencia vascular pulmonar alta (fetal) a baja (posnatal), perpetuando un cortocircuito de derecha a izquierda con hipoxemia refractaria severa, potencialmente mortal.",
    keyPoints: [
    "RN con antecedente de líquido amniótico meconiado + dificultad respiratoria al nacer + Radiografía: infiltrados parcheados + zonas de hiperinsuflación/atelectasia alternadas.",
    "Síndrome de Aspiración Meconial. Complicaciones a vigilar activamente: Neumotórax (por hiperinsuflación/atrapamiento aéreo) e Hipertensión Pulmonar Persistente del Recién Nacido (hipoxemia refractaria por cortocircuito derecha-izquierda persistente).",
    "Urgencias Neonatales / Síndrome de Aspiración Meconial."
],
  },
  {
    id: "ucc-conv-2026-09-06-49",
    university: "UCC",
    examArea: "MEDICINA INTERNA - GASTROENTEROLOGÍA",
    topic: "Tumores Neuroendocrinos",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","tumores-neuroendocrinos","tumores","neuroendocrinos"],
    statement: "Un hombre de 45 años consulta por dolor abdominal epigástrico recurrente, refractario a dosis estándar de Inhibidores de Bomba de Protones, asociado a diarrea crónica y pérdida de peso de 6 meses de evolución. Ha tenido múltiples úlceras pépticas documentadas por endoscopia en los últimos 2 años, incluyendo una localizada de forma atípica en el yeyuno proximal, a pesar de pruebas negativas para *Helicobacter pylori* y sin uso de antiinflamatorios no esteroideos. Los niveles séricos de Gastrina en ayunas están marcadamente elevados (850 pg/mL, con rango normal <100 pg/mL), con un pH gástrico ácido documentado simultáneamente (lo que descarta hipergastrinemia secundaria a hipoclorhidria). ¿Cuál es el diagnóstico más probable, y qué estudio adicional debe realizarse dado que esta condición puede asociarse a un síndrome genético hereditario?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Enfermedad Ulcerosa Péptica refractaria idiopática; no se requiere ningún estudio adicional más allá de aumentar la dosis de IBP.",
        distractorProfile: "incomplete_workup_missing_underlying_cause",
        incorrectFeedback: "Etiquetar el cuadro como \"idiopático\" sin investigar la causa subyacente ignora los hallazgos clave (localización atípica, múltiples úlceras, diarrea, gastrina marcadamente elevada) que apuntan específicamente a un gastrinoma, cuyo diagnóstico oportuno es crucial para el manejo tumoral y la evaluación de MEN1.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Zollinger-Ellison (Gastrinoma); se debe descartar Neoplasia Endocrina Múltiple tipo 1 (MEN1) mediante calcio sérico y estudio de paratiroides/hipófisis.",
      },
      {
        id: "C",
        label: "C",
        text: "Enfermedad Celíaca; se debe solicitar biopsia duodenal y anticuerpos antitransglutaminasa como estudio confirmatorio único.",
        distractorProfile: "wrong_diagnosis_missing_hormonal_cause",
        incorrectFeedback: "Aunque la Enfermedad Celíaca puede causar diarrea crónica y pérdida de peso, no explica las úlceras pépticas múltiples y recurrentes de localización atípica ni la gastrina sérica marcadamente elevada con pH ácido, hallazgos específicos del Síndrome de Zollinger-Ellison.",
      },
      {
        id: "D",
        label: "D",
        text: "Síndrome de Intestino Irritable con predominio diarreico; no requiere estudios adicionales, el manejo es sintomático.",
        distractorProfile: "dangerous_dismissal_of_organic_findings",
        incorrectFeedback: "El Síndrome de Intestino Irritable es un diagnóstico de exclusión sin hallazgos orgánicos objetivos; la presencia de úlceras pépticas documentadas endoscópicamente, gastrina marcadamente elevada y pérdida de peso son \"señales de alarma\" (red flags) que descartan un diagnóstico funcional y exigen investigar una causa orgánica específica.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un **Síndrome de Zollinger-Ellison**, causado por un **Gastrinoma** (tumor neuroendocrino secretor de gastrina, frecuentemente localizado en el \"triángulo del gastrinoma\" duodeno-pancreático), que genera hipersecreción ácida gástrica masiva y sostenida. Las claves diagnósticas son la enfermedad ulcerosa péptica **refractaria, recurrente, múltiple, y con localización atípica** (como el yeyuno, una zona donde las úlceras pépticas típicas no ocurren), en ausencia de *H. pylori* y de AINEs, junto con diarrea crónica (por la inactivación de enzimas pancreáticas y daño de la mucosa intestinal por el exceso de ácido) y **gastrina sérica marcadamente elevada con pH gástrico ácido concomitante** (lo que confirma que la hipergastrinemia es primaria/autónoma, no una respuesta fisiológica compensatoria a hipoclorhidria, como ocurriría por ejemplo con el uso crónico de IBP). Es fundamental descartar la asociación con **Neoplasia Endocrina Múltiple tipo 1 (MEN1)**, presente hasta en 20-30% de los casos de Gastrinoma, mediante la evaluación de las otras glándulas típicamente afectadas: paratiroides (hiperparatiroidismo, causa de hipercalcemia, frecuentemente la manifestación más temprana de MEN1), hipófisis, y también páncreas endocrino.",
    keyPoints: [
    "Úlceras pépticas MÚLTIPLES, RECURRENTES, refractarias, o de localización ATÍPICA (yeyuno) + Diarrea crónica + Gastrina sérica muy elevada con pH gástrico ácido.",
    "Síndrome de Zollinger-Ellison (Gastrinoma). Descartar siempre asociación con MEN1 (Paratiroides + Hipófisis + Páncreas endocrino) — regla mnemotécnica \"3 P\": Paratiroides, Pituitaria, Páncreas.",
    "Tumores Neuroendocrinos / Síndrome de Zollinger-Ellison."
],
  },
  {
    id: "ucc-conv-2026-09-06-50",
    university: "UCC",
    examArea: "MEDICINA INTERNA - REUMATOLOGÍA / URGENCIAS",
    topic: "Reumatología de Urgencias",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","reumatolog-a-de-urgencias","reumatolog","a","de","urgencias"],
    statement: "Un hombre de 55 años, con antecedente de gota crónica, consulta por dolor, calor y edema en la primera articulación metatarsofalángica derecha de inicio súbito hace 24 horas, tan intenso que refiere \"no soporta ni el peso de la sábana sobre el pie\" (alodinia extrema). Al examen físico, la articulación está eritematosa, caliente, con edema marcado que se extiende más allá de los límites articulares, y dolor severo a la palpación y al mínimo movimiento. No hay fiebre significativa ni compromiso de otras articulaciones. Se realiza artrocentesis diagnóstica del líquido articular, que se envía para análisis. ¿Cuál es el estudio del líquido sinovial que es OBLIGATORIO realizar en este contexto, independientemente de cuán clásica sea la presentación clínica de gota, y por qué es indispensable?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cultivo de líquido sinovial exclusivamente, ya que la causa más probable siempre es infecciosa hasta demostrar lo contrario.",
        distractorProfile: "incomplete_workup_missing_crystal_analysis",
        incorrectFeedback: "Aunque el cultivo es indispensable para descartar infección, omitir el análisis de cristales por microscopía de luz polarizada deja sin confirmar el diagnóstico específico de gota (o su diferencial, la pseudogota), información esencial para el manejo y pronóstico a largo plazo del paciente.",
      },
      {
        id: "B",
        label: "B",
        text: "Análisis con microscopía de luz polarizada para identificar cristales, y descarte OBLIGATORIO de artritis séptica concomitante mediante Gram y cultivo, ya que ambas condiciones pueden coexistir.",
      },
      {
        id: "C",
        label: "C",
        text: "Solo la apariencia macroscópica del líquido (turbio vs. claro) es suficiente para diferenciar gota de otras causas, sin necesidad de estudios adicionales.",
        distractorProfile: "insufficient_diagnostic_method",
        incorrectFeedback: "La apariencia macroscópica del líquido sinovial es inespecífica y no permite diferenciar de forma confiable entre gota, pseudogota e infección; tanto el líquido gotoso como el séptico pueden verse turbios, por lo que el análisis microscópico y microbiológico formal es indispensable.",
      },
      {
        id: "D",
        label: "D",
        text: "Niveles de Ácido Úrico en el líquido sinovial exclusivamente, ya que un nivel elevado confirma definitivamente el diagnóstico de gota.",
        distractorProfile: "wrong_diagnostic_criterion",
        incorrectFeedback: "El nivel de ácido úrico, tanto sérico como en líquido sinovial, no es diagnóstico de gota por sí solo (puede estar normal durante un ataque agudo, y muchas personas con hiperuricemia nunca desarrollan gota); el diagnóstico definitivo requiere la identificación directa de cristales de urato monosódico por microscopía de luz polarizada.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un cuadro clínico clásico de **Artritis Gotosa Aguda** (podagra, al afectar la primera articulación metatarsofalángica). Sin embargo, la regla de oro fundamental en el manejo de cualquier monoartritis aguda, **incluso ante una presentación clínicamente clásica de gota**, es que la **artritis séptica DEBE descartarse siempre** mediante el análisis del líquido sinovial, ya que ambas condiciones pueden coexistir (una articulación previamente dañada por gota crónica tiene mayor riesgo de infectarse secundariamente) y la artritis séptica no tratada puede destruir la articulación e incluso ser potencialmente mortal por sepsis. El análisis correcto del líquido sinovial incluye: **microscopía de luz polarizada** para identificar los cristales de urato monosódico (con birrefringencia negativa, en forma de aguja, característicos de la gota, diferenciándolos de los cristales de pirofosfato de calcio de la pseudogota, con birrefringencia positiva), junto con **tinción de Gram y cultivo** para descartar infección bacteriana concomitante, independientemente de cuán \"típica\" parezca la presentación clínica de gota.",
    keyPoints: [
    "Monoartritis aguda, incluso con presentación clásica de gota (podagra).",
    "Regla de oro: SIEMPRE descartar Artritis Séptica mediante Gram y cultivo del líquido sinovial, además del análisis de cristales por microscopía de luz polarizada. Ambas condiciones pueden coexistir; nunca asumir gota sin descartar infección.",
    "Reumatología de Urgencias / Artritis Gotosa Aguda y Diagnóstico Diferencial con Artritis Séptica."
],
  }
];
