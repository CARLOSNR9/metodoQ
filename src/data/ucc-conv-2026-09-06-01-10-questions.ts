import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #7 (6 sep 2026) · Preguntas #01–#10.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_06_01_10_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-06-01",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / URGENCIAS",
    topic: "Emergencias Aórticas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","emergencias-a-rticas","emergencias","a","rticas"],
    statement: "Un hombre de 58 años, hipertenso mal controlado, es traído a urgencias por dolor torácico \"desgarrante\" de inicio súbito que irradia hacia la espalda interescapular, de máxima intensidad desde el comienzo. Al examen físico: PA en brazo derecho 190/100 mmHg, PA en brazo izquierdo 140/85 mmHg (asimetría de 50 mmHg), soplo diastólico decreciente en foco aórtico de nueva aparición, y pulso femoral izquierdo disminuido respecto al derecho. El paciente está diaforético pero alerta. Un electrocardiograma no muestra cambios isquémicos agudos. Ante la sospecha diagnóstica principal, ¿cuál es el estudio de imagen INICIAL de elección para confirmar el diagnóstico en un paciente hemodinámicamente estable?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Angiografía coronaria urgente para descartar infarto agudo de miocardio antes de continuar el estudio.",
        distractorProfile: "wrong_diagnostic_priority_mimicking_acs",
        incorrectFeedback: "Cateterizar a un paciente con disección aórtica no diagnosticada es peligroso: el catéter puede entrar al falso lumen y expandir la disección, y la anticoagulación periprocedimiento empeora el sangrado de la pared aórtica. Los signos de asimetría de pulsos y soplo diastólico nuevo deben hacer sospechar disección ANTES de asumir un síndrome coronario primario.",
      },
      {
        id: "B",
        label: "B",
        text: "Angiotomografía (AngioTAC) de tórax con contraste, de aorta torácica completa.",
      },
      {
        id: "C",
        label: "C",
        text: "Ecocardiograma transtorácico simple en la cama del paciente, suficiente para visualizar toda la aorta torácica.",
        distractorProfile: "insufficient_imaging_modality",
        incorrectFeedback: "El ecocardiograma transtorácico tiene mala visualización de la aorta ascendente distal y del cayado por interposición de aire pulmonar; es útil para ver derrame pericárdico o insuficiencia aórtica, pero NO permite descartar disección de forma confiable. El transesofágico sí serviría, pero requiere sedación y no es la primera línea si el AngioTAC está disponible.",
      },
      {
        id: "D",
        label: "D",
        text: "Radiografía de tórax exclusivamente, ya que el ensanchamiento mediastínico confirma el diagnóstico sin necesidad de otro estudio.",
        distractorProfile: "overreliance_on_low_sensitivity_test",
        incorrectFeedback: "El ensanchamiento mediastínico en la radiografía es sugestivo pero está ausente hasta en el 40% de las disecciones confirmadas; nunca es diagnóstico por sí solo y jamás debe usarse para excluir la enfermedad.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una **Disección Aórtica Aguda**, una emergencia cardiovascular catastrófica. La tríada clínica clásica es dolor torácico desgarrante de inicio súbito y máxima intensidad desde el comienzo (a diferencia del infarto, que suele ser progresivo), asimetría de pulsos y de presión arterial entre ambos brazos, y un nuevo soplo de insuficiencia aórtica (por disección retrógrada que compromete el anillo valvular). En un paciente hemodinámicamente estable, el estudio de elección por su rapidez, disponibilidad y excelente sensibilidad/especificidad es la **Angiotomografía de tórax**, que define el tipo de disección (Stanford A si compromete aorta ascendente, quirúrgica de urgencia; Stanford B si es solo descendente, manejo médico inicial con control estricto de presión y frecuencia cardíaca). La radiografía de tórax puede sugerir el diagnóstico (ensanchamiento mediastínico) pero jamás lo confirma ni lo descarta.",
    keyPoints: [
    "Dolor torácico \"desgarrante\"/\"en puñalada\" de inicio súbito e irradiado a la espalda.; Asimetría de pulsos o de presión arterial entre ambos brazos + soplo diastólico nuevo.",
    "Disección Aórtica Aguda. Estudio confirmatorio en paciente estable: AngioTAC de aorta. Si Stanford A (ascendente): cirugía de urgencia. Si Stanford B (descendente): manejo médico con betabloqueador IV primero, luego vasodilatador.",
    "Emergencias Aórticas / Cardiología de Urgencias."
],
  },
  {
    id: "ucc-conv-2026-09-06-02",
    university: "UCC",
    examArea: "PEDIATRÍA - CIRUGÍA / GASTROENTEROLOGÍA",
    topic: "Urgencias Quirúrgicas Pediátricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-quir-rgicas-pedi-tricas","urgencias","quir","rgicas","pedi","tricas"],
    statement: "Un lactante de 8 meses, previamente sano, es traído a urgencias por episodios intermitentes de llanto intenso con flexión de piernas hacia el abdomen, alternados con periodos de letargia y decaimiento entre crisis. La madre refiere que hace 2 horas notó en el pañal deposiciones mucosas mezcladas con sangre, de aspecto similar a \"jalea de grosella\". Al examen físico, en el cuadrante superior derecho del abdomen se palpa una masa alargada, dolorosa, en forma de \"salchicha\", y el cuadrante inferior derecho se palpa vacío (Signo de Dance). El niño luce pálido y diaforético entre los episodios de dolor. ¿Cuál es el estudio diagnóstico Y terapéutico de PRIMERA LÍNEA que debe realizarse de inmediato ante la sospecha clínica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Radiografía simple de abdomen en decúbito supino, que es suficiente para confirmar y tratar la condición.",
        distractorProfile: "insufficient_diagnostic_and_no_therapeutic_value",
        incorrectFeedback: "La radiografía simple puede sugerir el diagnóstico (ausencia de aire en el ciego, masa de tejido blando) pero tiene baja sensibilidad y NO tiene ningún valor terapéutico; el enema guiado por imagen es superior porque diagnostica y trata en el mismo procedimiento.",
      },
      {
        id: "B",
        label: "B",
        text: "Enema con contraste (aire o solución salina) guiado por ecografía o fluoroscopia, con intento de reducción hidrostática/neumática.",
      },
      {
        id: "C",
        label: "C",
        text: "Laparotomía exploratoria inmediata sin estudios de imagen previos, dado el riesgo vital del cuadro.",
        distractorProfile: "unnecessary_surgical_overtreatment",
        incorrectFeedback: "En un paciente sin peritonitis, choque ni neumoperitoneo, ir directo a cirugía expone al niño a los riesgos de una laparotomía innecesaria cuando el enema terapéutico resuelve la mayoría de los casos de forma no invasiva.",
      },
      {
        id: "D",
        label: "D",
        text: "Tomografía abdominal contrastada para definir la anatomía exacta antes de cualquier intervención.",
        distractorProfile: "unnecessary_radiation_delay",
        incorrectFeedback: "La ecografía abdominal (no la TAC) es el estudio de imagen inicial de elección por su altísima sensibilidad, ausencia de radiación y disponibilidad a la cama del paciente; la TAC añade radiación innecesaria y retrasa el tratamiento en un cuadro tiempo-dependiente.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una **Invaginación Intestinal (Intususcepción)**, la causa más frecuente de obstrucción intestinal en lactantes entre 6 y 36 meses. Ocurre cuando un segmento proximal del intestino (\"intususceptum\") se telescopa dentro del segmento distal (\"intususcipiens\"), típicamente en la región ileocecal, comprometiendo el aporte vascular. La tríada clásica es dolor cólico intermitente, masa abdominal palpable en \"salchicha\" y deposiciones en \"jalea de grosella\" (sangre mezclada con moco por congestión venosa e isquemia de la mucosa), aunque esta tríada completa solo aparece en una minoría de los casos. Ante la sospecha, y en ausencia de signos de perforación o peritonitis, el abordaje diagnóstico-terapéutico de elección es el **enema (con aire, solución salina o contraste hidrosoluble) guiado por ecografía o fluoroscopia**, que además de confirmar el diagnóstico (imagen en \"diana\" o \"resorte enrollado\") logra reducir la invaginación en más del 80-90% de los casos, evitando la cirugía.",
    keyPoints: [
    "Lactante con dolor cólico intermitente + masa en \"salchicha\" en flanco/CSD + heces en \"jalea de grosella\".; Letargia intermitente entre las crisis de dolor (signo temprano y sutil, muchas veces subestimado).",
    "Invaginación Intestinal. Estudio diagnóstico-terapéutico de elección: Enema (neumático o hidrostático) guiado por imagen. Cirugía reservada para perforación, peritonitis, choque o fallo de la reducción no quirúrgica.",
    "Urgencias Quirúrgicas Pediátricas / Invaginación Intestinal."
],
  },
  {
    id: "ucc-conv-2026-09-06-03",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEFROLOGÍA / CUIDADO INTENSIVO",
    topic: "Nefrología de Urgencias",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","nefrolog-a-de-urgencias","nefrolog","a","de","urgencias"],
    statement: "Un hombre de 45 años es traído a urgencias tras ser rescatado de los escombros de un edificio colapsado, donde permaneció atrapado con las piernas comprimidas durante 10 horas. Al ingreso, sus extremidades inferiores están edematizadas, tensas y dolorosas, con parestesias distales. La orina recolectada es de color \"té oscuro\" o \"cola\", pero la tira reactiva urinaria reporta positividad intensa para sangre, mientras que el sedimento microscópico revela ausencia de eritrocitos. Los laboratorios muestran Creatinina 3.8 mg/dL (en ascenso), Potasio 6.8 mEq/L, Calcio sérico bajo, y una CPK (Creatín Fosfoquinasa) de 95.000 U/L. El electrocardiograma muestra ondas T picudas. Además de la corrección urgente de la hiperkalemia, ¿cuál es la intervención de PRIMERA LÍNEA para prevenir la progresión de la lesión renal en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Restricción hídrica estricta y furosemida en altas dosis para forzar la diuresis inmediata.",
        distractorProfile: "opposite_of_correct_management",
        incorrectFeedback: "Restringir líquidos en rabdomiólisis empeora la precipitación tubular de mioglobina al reducir el flujo urinario; además, la furosemida acidifica la orina (favoreciendo la precipitación de mioglobina) y puede empeorar la hipovolemia real que suele coexistir por el secuestro de líquidos en el tejido muscular dañado.",
      },
      {
        id: "B",
        label: "B",
        text: "Fluidoterapia agresiva con solución salina isotónica IV para lograr una diuresis alta y mantenida.",
      },
      {
        id: "C",
        label: "C",
        text: "Bicarbonato de sodio en bolo IV rápido como única medida renoprotectora, sin necesidad de líquidos adicionales.",
        distractorProfile: "adjunct_therapy_mistaken_for_primary_therapy",
        incorrectFeedback: "La alcalinización urinaria con bicarbonato es una medida complementaria y controvertida, nunca la terapia principal; sin fluidoterapia agresiva de base, el bicarbonato aislado no logra prevenir la precipitación tubular de mioglobina y puede empeorar la hipocalcemia al favorecer la unión del calcio a proteínas.",
      },
      {
        id: "D",
        label: "D",
        text: "Hemodiálisis urgente profiláctica antes de que aparezcan más alteraciones electrolíticas.",
        distractorProfile: "premature_invasive_intervention",
        incorrectFeedback: "La hemodiálisis se reserva para hiperkalemia refractaria al tratamiento médico, sobrecarga de volumen o falla renal ya establecida que no responde a hidratación; no es la primera línea profiláctica cuando el paciente aún puede responder a fluidoterapia agresiva oportuna.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Rabdomiólisis** secundaria a **Síndrome de Aplastamiento (Crush Syndrome)**, por compresión muscular prolongada que causa necrosis de miocitos y liberación masiva de mioglobina, potasio, fósforo y CPK a la circulación. La clave diagnóstica es la discrepancia entre una tira reactiva urinaria positiva para \"sangre\" (la mioglobina da reacción cruzada con el reactivo de hemoglobina) pero un sedimento SIN eritrocitos visibles al microscopio; esto sella el diagnóstico de mioglobinuria y no de hematuria verdadera. La mioglobina es directamente nefrotóxica y precipita en los túbulos renales formando cilindros obstructivos, especialmente en un ambiente ácido y con hipovolemia. La piedra angular del tratamiento para prevenir la Lesión Renal Aguda es la **fluidoterapia agresiva y precoz con solución salina isotónica**, iniciada idealmente ANTES de liberar al paciente del atrapamiento, con el objetivo de mantener una diuresis alta (200-300 mL/h) que \"lave\" la mioglobina de los túbulos y prevenga su precipitación.",
    keyPoints: [
    "Trauma por aplastamiento/compresión muscular prolongada + orina oscura \"té/cola\".; Tira reactiva positiva para sangre PERO sedimento sin eritrocitos + CPK masivamente elevada.",
    "Rabdomiólisis / Síndrome de Aplastamiento. Tratamiento de primera línea: Fluidoterapia agresiva con Solución Salina 0.9% para mantener diuresis alta. Vigilar y corregir Hiperkalemia (riesgo vital inmediato) e Hipocalcemia.",
    "Nefrología de Urgencias / Rabdomiólisis y Síndrome de Aplastamiento."
],
  },
  {
    id: "ucc-conv-2026-09-06-04",
    university: "UCC",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - URGENCIAS",
    topic: "Urgencias Obstétricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-obst-tricas","urgencias","obst","tricas"],
    statement: "Una mujer de 26 años, con 7 semanas de amenorrea y prueba de embarazo positiva, consulta a urgencias por dolor abdominal súbito e intenso en fosa ilíaca derecha, seguido de mareo y un episodio de síncope breve. Al ingreso: PA 85/50 mmHg, FC 118 lpm, palidez mucocutánea marcada. Al examen abdominal hay dolor a la palpación profunda en hipogastrio con signos de irritación peritoneal (rebote positivo) y al tacto vaginal hay dolor intenso a la movilización cervical. La ecografía transvaginal no evidencia saco gestacional intrauterino, pero sí líquido libre abundante en fondo de saco de Douglas y una imagen anexial derecha compleja. La prueba de Beta-hCG cuantitativa reporta 3.200 mUI/mL. Ante la inestabilidad hemodinámica de la paciente, ¿cuál es la conducta INMEDIATA a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar Metotrexato intramuscular urgente como tratamiento médico de primera línea del embarazo ectópico.",
        distractorProfile: "medical_therapy_in_unstable_patient",
        incorrectFeedback: "El Metotrexato solo está indicado en pacientes hemodinámicamente ESTABLES con ectópico no roto, sin dolor severo, sin actividad cardiaca embrionaria y con Beta-hCG por debajo de umbrales específicos; administrarlo en una paciente en choque hipovolémico por rotura activa retrasa fatalmente el control quirúrgico del sangrado.",
      },
      {
        id: "B",
        label: "B",
        text: "Reanimación hídrica agresiva con cristaloides y traslado INMEDIATO a laparotomía o laparoscopia de urgencia.",
      },
      {
        id: "C",
        label: "C",
        text: "Repetir la Beta-hCG cuantitativa en 48 horas para confirmar la cinética de duplicación antes de decidir conducta.",
        distractorProfile: "dangerous_diagnostic_delay",
        incorrectFeedback: "La cinética de duplicación de la Beta-hCG es útil para diferenciar un embarazo intrauterino viable de uno ectópico en una paciente ESTABLE y asintomática; en una paciente en choque con hemoperitoneo evidente, esperar 48 horas es letal.",
      },
      {
        id: "D",
        label: "D",
        text: "Manejo expectante ambulatorio con control ecográfico seriado, dado que la paciente está consciente y orientada.",
        distractorProfile: "false_reassurance_from_mental_status",
        incorrectFeedback: "Que la paciente esté consciente no descarta inestabilidad hemodinámica temprana; sus signos vitales (hipotensión, taquicardia) y el hallazgo ecográfico de hemoperitoneo abundante confirman una hemorragia activa que requiere manejo hospitalario quirúrgico inmediato, no ambulatorio.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con un **Embarazo Ectópico Roto**, una emergencia gineco-obstétrica que amenaza la vida por hemorragia intraabdominal masiva. Los hallazgos de dolor abdominal súbito, síncope, hipotensión, taquicardia, abdomen agudo con irritación peritoneal, dolor a la movilización cervical y líquido libre abundante en la ecografía (hemoperitoneo) en una paciente con Beta-hCG positiva pero sin saco gestacional intrauterino visible, confirman la rotura tubárica con sangrado activo. Ante la **inestabilidad hemodinámica**, el manejo médico con Metotrexato o el manejo expectante quedan absolutamente descartados: la prioridad es la reanimación con líquidos IV (y hemoderivados si es necesario) de forma simultánea al traslado inmediato a quirófano para control quirúrgico del sangrado (salpingectomía o salpingostomía según el caso), sin retrasar la cirugía esperando más estudios confirmatorios.",
    keyPoints: [
    "Mujer en edad fértil, Beta-hCG positiva, dolor abdominal agudo + síncope/hipotensión.; Ecografía: útero vacío + líquido libre abundante (hemoperitoneo) + masa anexial.",
    "Embarazo Ectópico Roto (emergencia quirúrgica). Si hay inestabilidad hemodinámica: Reanimación + Cirugía de urgencia INMEDIATA, sin esperar estudios adicionales. El Metotrexato y el manejo expectante son SOLO para pacientes estables con ectópico no roto y criterios estrictos.",
    "Urgencias Obstétricas / Embarazo Ectópico Roto."
],
  },
  {
    id: "ucc-conv-2026-09-06-05",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUROLOGÍA / INFECTOLOGÍA",
    topic: "Urgencias Neurológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-neurol-gicas","urgencias","neurol","gicas"],
    statement: "Un hombre de 34 años consulta por fiebre de 39°C, cefalea holocraneal intensa, rigidez de nuca y fotofobia de 12 horas de evolución, con progresión a confusión mental. Al examen físico hay signo de Kernig y Brudzinski positivos, sin lesiones cutáneas ni papiledema. No hay focalización neurológica ni antecedente de trauma o inmunosupresión. El médico de urgencias decide realizar una punción lumbar tras descartar contraindicaciones. Mientras se preparan los insumos para el procedimiento (que tardará aproximadamente 20-30 minutos), ¿cuál es la conducta terapéutica que debe iniciarse de inmediato, SIN esperar los resultados del líquido cefalorraquídeo ni la realización de neuroimagen?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aciclovir intravenoso exclusivamente, cubriendo encefalitis herpética como diagnóstico más probable.",
        distractorProfile: "wrong_primary_etiology_coverage",
        incorrectFeedback: "El cuadro clínico (rigidez de nuca, signos meníngeos francos, sin focalización ni alteración de conducta típica de afectación temporal) es mucho más compatible con meningitis bacteriana que con encefalitis herpética; omitir la cobertura antibacteriana en este contexto es potencialmente fatal.",
      },
      {
        id: "B",
        label: "B",
        text: "Antibioticoterapia empírica de amplio espectro (Ceftriaxona + Vancomicina) más Dexametasona IV, iniciadas de inmediato.",
      },
      {
        id: "C",
        label: "C",
        text: "Esperar el resultado del Gram y cultivo del LCR antes de iniciar cualquier antibiótico, para dirigir la terapia correctamente.",
        distractorProfile: "dangerous_delay_seeking_precision",
        incorrectFeedback: "Esperar cultivos (que tardan 24-48 horas) para iniciar tratamiento en sospecha de meningitis bacteriana aumenta dramáticamente la mortalidad; el tratamiento empírico se ajusta posteriormente según los resultados, pero nunca se retrasa su inicio.",
      },
      {
        id: "D",
        label: "D",
        text: "Manitol intravenoso en bolo para reducir la presión intracraneal antes de cualquier otra intervención.",
        distractorProfile: "treating_theoretical_complication_over_root_cause",
        incorrectFeedback: "No hay evidencia en este paciente de hipertensión endocraneana franca (no hay papiledema ni focalización); administrar Manitol sin indicación clara retrasa el tratamiento causal (antibiótico) y no sustituye el manejo de la infección misma.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un cuadro clínico clásico de **Meningitis Bacteriana Aguda** (fiebre, cefalea, rigidez de nuca, signos meníngeos positivos, alteración del sensorio). Esta es una verdadera emergencia neurológica en la que **cada hora de retraso en el inicio del antibiótico aumenta significativamente la mortalidad y las secuelas neurológicas**. La regla de oro es que el tratamiento empírico NUNCA debe esperar a la punción lumbar, a la neuroimagen ni a los resultados del cultivo: se inicia de inmediato con **Ceftriaxona (cubre Streptococcus pneumoniae y Neisseria meningitidis) más Vancomicina (cubre neumococo resistente a cefalosporinas)**, y se añade **Dexametasona IV** administrada idealmente 10-20 minutos ANTES o junto con la primera dosis de antibiótico, ya que ha demostrado reducir la mortalidad y las secuelas auditivas/neurológicas al atenuar la respuesta inflamatoria generada por la lisis bacteriana masiva.",
    keyPoints: [
    "Fiebre + cefalea + rigidez de nuca + signos meníngeos (Kernig/Brudzinski) positivos.; Cualquier retraso potencial en la punción lumbar (por ejemplo, esperando neuroimagen).",
    "Meningitis Bacteriana Aguda. Regla de oro: Antibiótico empírico + Dexametasona se inician DE INMEDIATO, nunca se esperan los resultados del LCR ni la neuroimagen. Secuencia ideal: Hemocultivos → Dexametasona + Antibiótico → Punción Lumbar (si no está contraindicada) o TAC previo si hay indicación.",
    "Urgencias Neurológicas / Meningitis Bacteriana Aguda."
],
  },
  {
    id: "ucc-conv-2026-09-06-06",
    university: "UCC",
    examArea: "CIRUGÍA GENERAL - GASTROENTEROLOGÍA",
    topic: "Urgencias Biliares",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-biliares","urgencias","biliares"],
    statement: "Un hombre de 52 años, con antecedente de litiasis vesicular conocida no operada, consulta por dolor en hipocondrio derecho de 2 días de evolución, fiebre de 39.2°C con escalofríos, e ictericia progresiva de piel y escleras. Al examen físico se palpa dolor en hipocondrio derecho sin claro signo de Murphy, y el paciente refiere confusión leve intermitente que su esposa notó desde esta mañana. Signos vitales: PA 90/60 mmHg, FC 122 lpm. Laboratorios: Bilirrubina total 8.5 mg/dL (predominio directo), Fosfatasa alcalina y GGT muy elevadas, leucocitos 22.000/mm³. La ecografía abdominal muestra dilatación de la vía biliar intra y extrahepática con un cálculo visible en el colédoco distal. Ante este cuadro de sepsis biliar con inestabilidad hemodinámica y alteración mental, ¿cuál es la conducta terapéutica PRIORITARIA e inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Colecistectomía laparoscópica de urgencia como primer paso para controlar el foco infeccioso definitivamente.",
        distractorProfile: "wrong_procedure_for_ductal_obstruction",
        incorrectFeedback: "La colecistectomía trata la vesícula, no la obstrucción del colédoco que está causando la sepsis; en colangitis aguda grave, el paso prioritario es drenar la vía biliar principal (CPRE o percutáneo), dejando la colecistectomía definitiva para un segundo tiempo tras controlar la sepsis.",
      },
      {
        id: "B",
        label: "B",
        text: "Reanimación hídrica, antibioticoterapia de amplio espectro inmediata, y drenaje biliar urgente (CPRE o drenaje percutáneo) en las primeras 24 horas.",
      },
      {
        id: "C",
        label: "C",
        text: "Manejo exclusivamente médico con antibióticos y analgesia, difiriendo cualquier intervención sobre la vía biliar hasta que el paciente esté afebril por 72 horas.",
        distractorProfile: "dangerous_delay_of_source_control",
        incorrectFeedback: "En colangitis aguda con criterios de gravedad (hipotensión, alteración mental), los antibióticos solos no logran controlar la fuente de la sepsis; sin drenaje biliar oportuno, la mortalidad aumenta drásticamente por persistencia del foco purulento a presión.",
      },
      {
        id: "D",
        label: "D",
        text: "Colangiorresonancia magnética (CPRM) para caracterizar mejor la anatomía biliar antes de decidir cualquier intervención.",
        distractorProfile: "unnecessary_delay_with_low_yield_imaging",
        incorrectFeedback: "La ecografía ya confirmó la dilatación biliar y el cálculo coledociano; solicitar una CPRM adicional en un paciente séptico e inestable solo retrasa el drenaje urgente que necesita, sin aportar información que cambie la conducta inmediata.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una **Colangitis Aguda Supurativa**, expresada por la **Péntada de Reynolds**: dolor en hipocondrio derecho, fiebre con escalofríos, ictericia (que conforman la Tríada de Charcot), MÁS hipotensión y alteración del estado mental, indicando ya un shock séptico de origen biliar. La colangitis aguda severa es una emergencia médico-quirúrgica: la obstrucción del colédoco genera un sistema biliar cerrado, a presión, lleno de bacterias, que se traduce directamente al torrente sanguíneo (bacteriemia/sepsis). El tratamiento inicial es la **reanimación hemodinámica y antibioticoterapia de amplio espectro inmediatas**, pero esto por sí solo NO resuelve la obstrucción: se requiere **descompresión biliar urgente** (idealmente CPRE con esfinterotomía y extracción del cálculo, o drenaje percutáneo transhepático si la CPRE no está disponible) dentro de las primeras 24-48 horas, ya que sin drenar el sistema biliar obstruido y purulento, la sepsis no se controla con antibióticos solos.",
    keyPoints: [
    "Tríada de Charcot (dolor + fiebre + ictericia) que progresa a Péntada de Reynolds (+ hipotensión + confusión).",
    "Colangitis Aguda Supurativa (emergencia biliar séptica). Manejo: Reanimación + Antibiótico de amplio espectro INMEDIATOS + Drenaje biliar urgente (CPRE de elección) en <24-48h. La colecistectomía definitiva se programa DESPUÉS de resolver la sepsis, no como primer paso.",
    "Urgencias Biliares / Colangitis Aguda Supurativa."
],
  },
  {
    id: "ucc-conv-2026-09-06-07",
    university: "UCC",
    examArea: "MEDICINA INTERNA - REUMATOLOGÍA / OFTALMOLOGÍA",
    topic: "Vasculitis de Grandes Vasos",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","vasculitis-de-grandes-vasos","vasculitis","de","grandes","vasos"],
    statement: "Una mujer de 68 años consulta por cefalea temporal derecha de 3 semanas de evolución, de carácter continuo, asociada a dolor a la masticación que la obliga a detenerse mientras come (claudicación mandibular) y dolor al peinarse (hiperestesia del cuero cabelludo). Refiere además rigidez y dolor en cintura escapular y pelviana de predominio matutino. Esta mañana notó pérdida súbita e indolora de la visión en el ojo derecho. Al examen físico, la arteria temporal derecha está engrosada, indurada y sin pulso palpable. Los laboratorios muestran VSG de 98 mm/h y PCR marcadamente elevada. Ante la pérdida visual aguda y la alta sospecha diagnóstica, ¿cuál es la conducta terapéutica que debe iniciarse de INMEDIATO, sin esperar la confirmación histológica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aspirina en dosis antiagregante únicamente, reservando los esteroides hasta confirmar el diagnóstico con biopsia de arteria temporal.",
        distractorProfile: "adjunct_therapy_without_primary_treatment",
        incorrectFeedback: "La aspirina puede usarse como adyuvante, pero sin glucocorticoides sistémicos no se controla la inflamación vascular activa; retrasar el esteroide hasta la biopsia expone al paciente a perder la visión del ojo contralateral.",
      },
      {
        id: "B",
        label: "B",
        text: "Glucocorticoides sistémicos en dosis altas (Prednisona oral o Metilprednisolona IV) de inmediato, y programar biopsia de arteria temporal sin retrasar el inicio del tratamiento.",
      },
      {
        id: "C",
        label: "C",
        text: "Biopsia de arteria temporal urgente como primer paso obligatorio antes de iniciar cualquier terapia farmacológica.",
        distractorProfile: "diagnostic_test_prioritized_over_vision_saving_treatment",
        incorrectFeedback: "Aunque la biopsia es el estándar diagnóstico, sus hallazgos característicos persisten varios días a semanas después de iniciado el esteroide; exigirla antes de tratar arriesga la pérdida visual irreversible del segundo ojo mientras se coordina el procedimiento.",
      },
      {
        id: "D",
        label: "D",
        text: "Anticoagulación plena con Heparina IV, asumiendo un evento tromboembólico retiniano primario.",
        distractorProfile: "wrong_mechanism_treatment",
        incorrectFeedback: "La pérdida visual aquí es de origen inflamatorio-isquémico por vasculitis, no por un émbolo; anticoagular no trata la inflamación de la pared arterial y retrasa el único tratamiento que realmente protege el ojo sano restante.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con **Arteritis de Células Gigantes (Arteritis Temporal)**, una vasculitis de grandes vasos que afecta clásicamente a mujeres mayores de 50 años, frecuentemente asociada a Polimialgia Reumática (rigidez de cinturas escapular y pelviana). Los síntomas clave son cefalea temporal, claudicación mandibular (patognomónica), hiperestesia del cuero cabelludo, arteria temporal indurada y sin pulso, y VSG/PCR muy elevadas. La complicación más temida es la **pérdida visual súbita e irreversible** por isquemia del nervio óptico (neuropatía óptica isquémica anterior arterítica), que puede progresir a ceguera bilateral en horas si no se trata. Por esta razón, ante la sospecha clínica alta, especialmente con síntomas visuales ya presentes, el tratamiento con **glucocorticoides sistémicos en dosis altas debe iniciarse INMEDIATAMENTE**, sin esperar la biopsia de arteria temporal (que sigue siendo el estándar diagnóstico, pero puede realizarse hasta 2 semanas después del inicio del esteroide sin perder sensibilidad significativa).",
    keyPoints: [
    "Mujer mayor de 50 años con cefalea temporal + claudicación mandibular + VSG/PCR muy elevadas.; Pérdida visual súbita indolora asociada = URGENCIA OFTALMOLÓGICA-REUMATOLÓGICA.",
    "Arteritis de Células Gigantes. Tratamiento: Glucocorticoides sistémicos en ALTA dosis DE INMEDIATO (no esperar biopsia). La biopsia de arteria temporal se programa después, para confirmar, pero nunca retrasa el inicio del esteroide si hay riesgo visual.",
    "Vasculitis de Grandes Vasos / Arteritis de Células Gigantes."
],
  },
  {
    id: "ucc-conv-2026-09-06-08",
    university: "UCC",
    examArea: "PEDIATRÍA - INFECTOLOGÍA / OTORRINOLARINGOLOGÍA",
    topic: "Infecciones Profundas del Cuello",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","infecciones-profundas-del-cuello","infecciones","profundas","del","cuello"],
    statement: "Un niño de 4 años, con antecedente de faringoamigdalitis tratada de forma incompleta hace una semana (la madre suspendió el antibiótico a los 3 días por mejoría de los síntomas), consulta por fiebre alta de 39.8°C, dolor cervical intenso unilateral derecho, incapacidad para girar el cuello hacia ese lado (tortícolis), y voz \"gangosa\" con dificultad progresiva para tragar. Al examen físico se observa asimetría faríngea con abombamiento de la pared lateral, desviación de la úvula hacia la izquierda, y trismus leve. Hay adenopatías cervicales derechas dolorosas. Una tomografía de cuello con contraste confirma una colección con realce periférico en el espacio parafaríngeo derecho, adyacente a la vaina carotídea. ¿Cuál es la complicación potencialmente MORTAL que debe vigilarse activamente en este paciente dado el sitio anatómico específico del absceso?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Meningitis bacteriana por diseminación hematógena directa hacia el espacio subaracnoideo.",
        distractorProfile: "anatomically_implausible_spread_route",
        incorrectFeedback: "Aunque las infecciones profundas de cuello pueden teóricamente diseminarse, la complicación clásica y de mayor relevancia clínica ligada específicamente al compromiso de la vaina carotídea en el espacio parafaríngeo es la tromboflebitis yugular séptica, no la meningitis por vía hematógena directa.",
      },
      {
        id: "B",
        label: "B",
        text: "Tromboflebitis séptica de la vena yugular interna con riesgo de émbolos sépticos pulmonares (Síndrome de Lemierre).",
      },
      {
        id: "C",
        label: "C",
        text: "Neumotórax a tensión por ruptura directa del absceso hacia la cavidad pleural.",
        distractorProfile: "wrong_anatomic_complication",
        incorrectFeedback: "El neumotórax no es una complicación característica del absceso parafaríngeo; la complicación torácica temida de las infecciones profundas de cuello es la mediastinitis descendente necrotizante por extensión a través de los planos fasciales cervicales, un mecanismo distinto al descrito aquí.",
      },
      {
        id: "D",
        label: "D",
        text: "Taponamiento cardíaco por extensión directa del absceso hacia el espacio pericárdico.",
        distractorProfile: "rare_late_complication_misapplied",
        incorrectFeedback: "El taponamiento pericárdico podría verse en casos extremos de mediastinitis descendente avanzada, pero no es la complicación inmediata y característica asociada a la localización anatómica parafaríngea adyacente a la vaina carotídea que se describe en esta viñeta.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un **Absceso Parafaríngeo**, una infección profunda del cuello que se localiza en un espacio anatómico crítico porque contiene la **vaina carotídea** (arteria carótida interna, vena yugular interna y nervios craneales IX-XII). Cuando la infección invade y trombosa la pared de la vena yugular interna, se genera una **tromboflebitis séptica**, que puede fragmentarse y enviar émbolos sépticos hacia los pulmones, produciendo el clásico **Síndrome de Lemierre**: sepsis, dolor cervical, y émbolos sépticos pulmonares múltiples (frecuentemente por *Fusobacterium necrophorum*, un anaerobio de la flora orofaríngea). Este síndrome tiene una mortalidad significativa si no se reconoce y trata de forma agresiva con antibióticos de amplio espectro con cobertura anaerobia y, en muchos casos, drenaje quirúrgico del absceso.",
    keyPoints: [
    "Niño o adulto joven con infección faríngea reciente, mal tratada o incompleta, que evoluciona a dolor cervical unilateral intenso + tortícolis + trismus.; Absceso profundo de cuello cercano a la vaina carotídea (espacio parafaríngeo/retrofaríngeo lateral).",
    "Absceso Parafaríngeo → Riesgo de Tromboflebitis Séptica Yugular (Síndrome de Lemierre) con émbolos sépticos pulmonares. Requiere antibiótico de amplio espectro con cobertura anaerobia + evaluación quirúrgica para drenaje.",
    "Infecciones Profundas del Cuello / Síndrome de Lemierre."
],
  },
  {
    id: "ucc-conv-2026-09-06-09",
    university: "UCC",
    examArea: "MEDICINA INTERNA - TOXICOLOGÍA / URGENCIAS",
    topic: "Toxicología de Urgencias",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","toxicolog-a-de-urgencias","toxicolog","a","de","urgencias"],
    statement: "Un hombre de 29 años es traído a urgencias por su compañero de habitación, quien lo encontró somnoliento junto a un frasco vacío de acetaminofén (paracetamol), refiriendo que pudo haber ingerido hasta 20 gramos aproximadamente 6 horas antes. Al ingreso, el paciente está alerta pero con náuseas y vómito leve; el examen físico es prácticamente normal, sin ictericia ni dolor abdominal significativo. Se toma un nivel sérico de acetaminofén a las 6 horas post-ingesta, el cual se ubica claramente por encima de la línea de tratamiento en el nomograma de Rumack-Matthew. Las transaminasas (AST/ALT) en este momento son normales. ¿Cuál es la conducta terapéutica CORRECTA en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "No iniciar ningún tratamiento hasta que las transaminasas se eleven, ya que confirmarían el daño hepático real.",
        distractorProfile: "waiting_for_late_marker_of_damage",
        incorrectFeedback: "Esperar a que las transaminasas se eleven significa esperar a que el daño hepático YA esté ocurriendo; la NAC es más eficaz como prevención temprana guiada por el nivel sérico y el nomograma, no como tratamiento reactivo tras confirmar daño ya establecido.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar N-Acetilcisteína (NAC) de inmediato, según el protocolo estándar, independientemente de que las transaminasas aún sean normales.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar carbón activado únicamente, sin necesidad de antídoto específico dado que el paciente está asintomático.",
        distractorProfile: "decontamination_without_antidote",
        incorrectFeedback: "El carbón activado es útil solo si se administra dentro de la primera hora post-ingesta para reducir la absorción; a las 6 horas ya no tiene impacto significativo, y en ningún caso sustituye a la NAC, que es el antídoto específico indicado según el nomograma.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar diálisis de emergencia como método más rápido y efectivo para remover el acetaminofén circulante.",
        distractorProfile: "overly_aggressive_unnecessary_intervention",
        incorrectFeedback: "La diálisis se reserva para casos extremos (niveles masivamente elevados, coma, acidosis severa o falla renal concomitante); en este paciente estable, la NAC intravenosa u oral es el tratamiento estándar de primera línea, mucho menos invasivo y con excelente eficacia.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una **Intoxicación Aguda por Acetaminofén (Paracetamol)** con nivel sérico por encima de la línea de tratamiento del **Nomograma de Rumack-Matthew** (aplicable a ingestas agudas de tiempo conocido, medido idealmente entre las 4 y 24 horas post-ingesta). La toxicidad hepática ocurre porque, en sobredosis, la vía normal de metabolismo del acetaminofén se satura y se genera un exceso del metabolito tóxico NAPQI, que depleta las reservas de glutatión hepático y causa necrosis centrolobulillar. La clave conceptual de esta pregunta es que **las transaminasas normales en las primeras horas NO descartan toxicidad ni deben usarse como criterio para retrasar el tratamiento**: el daño hepático es un evento tardío (típicamente se eleva entre las 24 y 72 horas), mientras que el nomograma basado en el nivel sérico temprano es el que predice el riesgo real. Por lo tanto, la **N-Acetilcisteína (NAC)**, que repone el glutatión y neutraliza al NAPQI, debe iniciarse de inmediato cuando el nivel cae en zona de tratamiento, sin esperar a que aparezca daño hepático bioquímico, ya que su eficacia es máxima cuando se administra precozmente, antes de que ocurra la necrosis hepatocelular.",
    keyPoints: [
    "Ingesta aguda de Acetaminofén con nivel sérico (a las 4-24h) por encima de la línea de tratamiento del Nomograma de Rumack-Matthew.; Transaminasas aún normales (esto NO descarta el riesgo).",
    "Intoxicación por Acetaminofén con indicación de antídoto. Tratamiento: N-Acetilcisteína (NAC) INMEDIATA, guiada por el nomograma y no por las transaminasas, que se elevan tardíamente (24-72h después).",
    "Toxicología de Urgencias / Intoxicación por Acetaminofén."
],
  },
  {
    id: "ucc-conv-2026-09-06-10",
    university: "UCC",
    examArea: "MEDICINA INTERNA - HEMATOLOGÍA / URGENCIAS",
    topic: "Hematología de Urgencias",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","hematolog-a-de-urgencias","hematolog","a","de","urgencias"],
    statement: "Un hombre de 62 años, hospitalizado hace 6 días por un reemplazo de cadera y en profilaxis con Heparina No Fraccionada subcutánea, presenta un nuevo dolor y edema en la pierna derecha. Se solicita un conteo de plaquetas de control (parte del protocolo de vigilancia), que reporta una caída del 55% respecto al valor basal al ingreso (de 240.000/mm³ a 108.000/mm³). Un Doppler venoso de la pierna derecha confirma una trombosis venosa profunda de la vena poplítea. No hay evidencia de sangrado activo en ningún sitio. Ante la sospecha de la complicación hematológica más probable, ¿cuál es el paso terapéutico MÁS URGENTE e indispensable?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Transfusión profiláctica de plaquetas para corregir la trombocitopenia antes de continuar cualquier manejo.",
        distractorProfile: "treating_the_lab_number_not_the_disease",
        incorrectFeedback: "En HIT, el problema no es falta de plaquetas funcionales sino su activación patológica y consumo por microtrombosis; transfundir plaquetas de forma profiláctica puede proporcionar más sustrato para la formación de trombos y empeorar el cuadro clínico, por lo que está contraindicada salvo sangrado activo grave.",
      },
      {
        id: "B",
        label: "B",
        text: "Suspender INMEDIATAMENTE toda exposición a Heparina (incluyendo los catéteres con lock de heparina) e iniciar un anticoagulante alternativo no heparínico.",
      },
      {
        id: "C",
        label: "C",
        text: "Aumentar la dosis de Heparina No Fraccionada, ya que la trombosis indica que la dosis actual es insuficiente para anticoagular al paciente.",
        distractorProfile: "opposite_of_correct_management",
        incorrectFeedback: "La trombosis en HIT no se debe a una dosis insuficiente de heparina, sino a que la heparina misma está generando el estado protrombótico inmunomediado; aumentar la dosis empeora directamente el proceso patológico en curso.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar Warfarina oral de inmediato como anticoagulante de reemplazo, manteniendo la Heparina hasta alcanzar el INR terapéutico.",
        distractorProfile: "wrong_transition_timing_and_agent",
        incorrectFeedback: "Mantener la Heparina mientras se inicia Warfarina es contradictorio en HIT (se debe suspender TODA heparina de inmediato); además, iniciar Warfarina sola en la fase aguda, sin cobertura de un anticoagulante rápido no heparínico, puede precipitar necrosis cutánea o gangrena venosa por la caída inicial de Proteína C.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una **Trombocitopenia Inducida por Heparina (HIT)**, un fenómeno inmunomediado paradójico en el que anticuerpos contra el complejo heparina-factor plaquetario 4 activan las plaquetas, generando un estado **protrombótico** a pesar de la caída en el conteo plaquetario. Típicamente ocurre entre el día 5 y 10 de exposición a la heparina, con una caída de al menos el 50% del conteo basal, y se manifiesta paradójicamente con **trombosis** (venosa o arterial) en lugar de sangrado, como se observa aquí con la TVP poplítea. La conducta más urgente e innegociable es **suspender de inmediato TODA fuente de heparina** (incluyendo heparinas de bajo peso molecular y cualquier lock de catéter con heparina) e iniciar un **anticoagulante alternativo no heparínico** (como Argatrobán, Fondaparinux o un inhibidor directo del factor Xa), ya que continuar la heparina perpetúa el estado protrombótico y puede generar trombosis catastróficas adicionales, incluyendo pérdida de extremidades.",
    keyPoints: [
    "Caída ≥50% del conteo plaquetario entre el día 5-10 de exposición a Heparina.; Nuevo evento TROMBÓTICO (no hemorrágico) en este contexto.",
    "Trombocitopenia Inducida por Heparina (HIT). Conducta urgente: SUSPENDER TODA heparina de inmediato + iniciar anticoagulante alternativo NO heparínico (ej. Argatrobán). NUNCA transfundir plaquetas profilácticamente (puede empeorar la trombosis) ni iniciar Warfarina sola en fase aguda (riesgo de necrosis cutánea/gangrena venosa de miembros).",
    "Hematología de Urgencias / Trombocitopenia Inducida por Heparina."
],
  }
];
