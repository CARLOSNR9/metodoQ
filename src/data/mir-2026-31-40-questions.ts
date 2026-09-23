import type { TrainingQuestion } from "@/lib/questions/types";

export const MIR_2026_31_40_QUESTIONS: TrainingQuestion[] = [
  {
    id: "mir-2026-31",
    university: "MIR (España)",
    examArea: "APARATO DIGESTIVO",
    topic: "COLITIS ULCEROSA - BROTE GRAVE",
    difficulty: "hard",
    tags: ["mir", "espana", "digestivo"],
    statement:
      "Una mujer de 27 años, con colitis ulcerosa conocida, presenta más de 6 deposiciones sanguinolentas al día, fiebre de 38.2°C, frecuencia cardíaca de 108 lpm y VSG elevada. ¿Cuál es la clasificación del brote y la actitud terapéutica inicial más apropiada?",
    options: [
      { id: "A", label: "A", text: "Brote grave (criterios de Truelove-Witts); ingreso hospitalario e inicio de corticoides intravenosos, con valoración de tratamiento de rescate (infliximab o ciclosporina) si no hay respuesta en 72 horas." },
      { id: "B", label: "B", text: "Brote leve; manejo ambulatorio con aminosalicilatos orales exclusivamente, sin necesidad de ingreso ni corticoides." },
      { id: "C", label: "C", text: "Brote moderado; iniciar antibioterapia empírica como tratamiento principal, sin necesidad de corticoides." },
      { id: "D", label: "D", text: "Indicación de colectomía urgente de entrada, sin ensayar tratamiento médico intensivo previo." },
    ],
    correctOptionId: "A",
    explanation:
      "Esta paciente cumple criterios de **brote grave de colitis ulcerosa** según los criterios de Truelove-Witts (≥6 deposiciones sanguinolentas al día, junto con al menos uno de: fiebre >37.8°C, taquicardia >90 lpm, anemia significativa o VSG/PCR elevadas). El manejo del brote grave requiere **ingreso hospitalario** e inicio de **corticoides intravenosos** (por ejemplo, metilprednisolona) como primera línea. Si no hay respuesta clínica adecuada en aproximadamente **72 horas**, se considera **tratamiento de rescate** con **infliximab** o **ciclosporina intravenosa**, y si el paciente no responde a estas medidas o desarrolla complicaciones (megacolon tóxico, perforación), se plantea la **colectomía**.\n\n**TRAMPA DEL EXAMEN:** Subestimar la gravedad del brote y tratarlo de forma ambulatoria con aminosalicilatos orales es un error grave; los criterios de Truelove-Witts son la herramienta clave para clasificar correctamente la gravedad y decidir el manejo. Indicar colectomía urgente de entrada, sin ensayar primero el tratamiento médico intensivo (corticoides IV y, si falla, rescate biológico o ciclosporina), también es incorrecto salvo que existan complicaciones que la hagan indicación absoluta (megacolon tóxico, perforación, hemorragia masiva).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., aprenda a aplicar los criterios de Truelove-Witts como un semáforo que le dice qué tan agresivo debe ser: seis o más deposiciones sanguinolentas al día, más al menos un dato sistémico (fiebre, taquicardia, anemia o reactantes elevados), le dan un brote GRAVE, y eso significa ingreso y corticoides intravenosos, no una receta ambulatoria. El punto clave que el examen ama preguntar es el plazo de reevaluación: si a las 72 horas de corticoides intravenosos esta paciente no está respondiendo, ese es el momento de escalar a tratamiento de rescate (infliximab o ciclosporina), no de esperar más días \"a ver si mejora\". Y reserve la colectomía para cuando el tratamiento médico intensivo fracasa o aparecen complicaciones que la vuelven indicación absoluta; no es la primera opción en un brote grave sin esas complicaciones.",
    keyPoints: [
      "Criterios de Truelove-Witts: ≥6 deposiciones sanguinolentas/día + fiebre, taquicardia, anemia o VSG/PCR elevadas definen brote grave.",
      "Brote grave: ingreso hospitalario + corticoides intravenosos; si no hay respuesta en 72h, tratamiento de rescate (infliximab o ciclosporina).",
      "Colectomía: reservada para fracaso del tratamiento médico intensivo o aparición de complicaciones (megacolon tóxico, perforación, hemorragia masiva).",
    ],
  },
  {
    id: "mir-2026-32",
    university: "MIR (España)",
    examArea: "NEUMOLOGÍA",
    topic: "NEUMONÍA ADQUIRIDA EN LA COMUNIDAD - ESTRATIFICACIÓN DE GRAVEDAD",
    difficulty: "medium",
    tags: ["mir", "espana", "neumologia"],
    statement:
      "Un varón de 74 años acude por fiebre y tos productiva de 3 días, con infiltrado en la radiografía de tórax compatible con neumonía. Presenta confusión de inicio reciente, frecuencia respiratoria de 32 rpm, presión arterial 88/56 mmHg, y urea elevada. ¿Cuál es la puntuación aproximada en la escala CURB-65 y la implicación en el manejo?",
    options: [
      { id: "A", label: "A", text: "CURB-65 de 5 puntos (confusión, urea elevada, frecuencia respiratoria ≥30, hipotensión, y edad ≥65 años, los 5 criterios presentes); indica neumonía grave con alto riesgo de mortalidad, requiriendo valoración de ingreso en UCI." },
      { id: "B", label: "B", text: "CURB-65 de 0-1 puntos; manejo ambulatorio sin necesidad de ingreso hospitalario." },
      { id: "C", label: "C", text: "La escala CURB-65 no es aplicable en pacientes mayores de 70 años, debiendo usarse exclusivamente criterios clínicos subjetivos." },
      { id: "D", label: "D", text: "CURB-65 de 2 puntos; manejo ambulatorio con antibiótico oral y reevaluación en 48-72 horas." },
    ],
    correctOptionId: "A",
    explanation:
      "La escala **CURB-65** estratifica la gravedad de la neumonía adquirida en la comunidad, asignando un punto por cada criterio presente: **C**onfusión de inicio reciente, **U**rea elevada (>7 mmol/L o equivalente), frecuencia **R**espiratoria ≥30 rpm, presión arterial (**B**lood pressure) sistólica <90 mmHg o diastólica ≤60 mmHg, y edad ≥**65** años. Este paciente cumple los 5 criterios: confusión (1), urea elevada (1), frecuencia respiratoria ≥30 (1), hipotensión (1) y edad ≥65 (1), totalizando **5 puntos**, lo que indica **neumonía grave**, con mortalidad estimada elevada (aproximadamente 15-40% según las series), y obliga a considerar el **ingreso en UCI** o una unidad de cuidados intermedios, además de manejo antibiótico intravenoso agresivo.\n\n**TRAMPA DEL EXAMEN:** Subestimar la puntuación o no aplicar la escala correctamente (por ejemplo, ignorando alguno de los 5 criterios) puede llevar a infravalorar la gravedad real y a un manejo ambulatorio inapropiado en un paciente que, en realidad, tiene alto riesgo de mortalidad y requiere ingreso, muchas veces en una unidad de cuidados intensivos o intermedios.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., memorice el CURB-65 como una checklist rápida de 5 preguntas de sí/no: ¿está confuso?, ¿tiene la urea elevada?, ¿respira a 30 o más por minuto?, ¿está hipotenso?, ¿tiene 65 años o más? Cada \"sí\" suma un punto. Este paciente le suma prácticamente todos los criterios, lo que lo coloca en el grupo de neumonía grave, con un riesgo de mortalidad nada despreciable. Con una puntuación así, usted no está pensando en \"antibiótico oral y a casa\"; está pensando en ingreso hospitalario, posiblemente en una unidad de cuidados intensivos o intermedios, con antibioterapia intravenosa de amplio espectro y monitorización estrecha. No trate esta escala como un trámite burocrático; es la que le dice objetivamente si este paciente puede irse a casa o si necesita el nivel de cuidados más alto que su hospital pueda ofrecer.",
    keyPoints: [
      "CURB-65: Confusión, Urea elevada, frecuencia Respiratoria ≥30, presión arterial (Blood pressure) baja, edad ≥65 años; 1 punto cada criterio.",
      "CURB-65 de 4-5 puntos (este caso: 5/5): neumonía grave, alta mortalidad, valorar ingreso en UCI/cuidados intermedios.",
      "CURB-65 de 0-1: manejo ambulatorio; 2: valorar ingreso hospitalario breve u observación; ≥3: ingreso hospitalario, considerar UCI si es muy alto.",
    ],
  },
  {
    id: "mir-2026-33",
    university: "MIR (España)",
    examArea: "NEUMOLOGÍA",
    topic: "CRISIS ASMÁTICA GRAVE",
    difficulty: "hard",
    tags: ["mir", "espana", "neumologia"],
    statement:
      "Una mujer de 24 años, asmática conocida, acude por disnea progresiva de horas de evolución tras exposición a un alérgeno. Presenta dificultad para completar frases, frecuencia respiratoria de 30 rpm, frecuencia cardíaca de 122 lpm, y un pico de flujo espiratorio (PEF) del 35% del valor teórico. Los sibilantes son escasos a la auscultación, con un tórax que impresiona silente en algunas zonas. ¿Cuál es la interpretación de estos hallazgos y la conducta inmediata?",
    options: [
      { id: "A", label: "A", text: "Los hallazgos (PEF muy bajo, tórax silente, dificultad para hablar) indican crisis asmática grave/de riesgo vital; el silencio auscultatorio no debe tranquilizar, ya que refleja una obstrucción tan severa que apenas circula aire, y requiere tratamiento inmediato intensivo (oxígeno, broncodilatadores nebulizados repetidos, corticoides sistémicos, y valorar sulfato de magnesio) con monitorización estrecha para posible ventilación asistida." },
      { id: "B", label: "B", text: "La disminución de los sibilantes indica mejoría clínica y menor gravedad de la crisis, por lo que se puede reducir la intensidad del tratamiento broncodilatador." },
      { id: "C", label: "C", text: "Debe realizarse una radiografía de tórax y esperar su resultado antes de iniciar cualquier tratamiento broncodilatador o corticoide." },
      { id: "D", label: "D", text: "Iniciar antibioterapia empírica como tratamiento principal, dado que la exacerbación asmática se debe habitualmente a sobreinfección bacteriana." },
    ],
    correctOptionId: "A",
    explanation:
      "Esta paciente presenta una **crisis asmática grave, con datos de riesgo vital**: PEF <50% del teórico (en este caso 35%, muy bajo), dificultad para completar frases, taquipnea y taquicardia marcadas, y un hallazgo crítico que el examen suele explotar: la **disminución o silencio de los sibilantes NO indica mejoría**, sino todo lo contrario: cuando la obstrucción bronquial es tan severa que apenas circula aire, los sibilantes (que se generan por el flujo turbulento de aire a través de la vía aérea estrecha) pueden **desaparecer** porque prácticamente no hay flujo aéreo (\"tórax silente\"), un signo de extrema gravedad, no de resolución. El manejo inmediato incluye oxigenoterapia, **broncodilatadores** (beta-agonistas de acción corta y anticolinérgicos) nebulizados de forma repetida, **corticoides sistémicos** precoces, y en crisis graves refractarias, **sulfato de magnesio intravenoso**, con monitorización estrecha por el riesgo de necesitar soporte ventilatorio.\n\n**TRAMPA DEL EXAMEN:** La trampa central es interpretar la disminución de sibilantes como mejoría; es exactamente lo contrario en el contexto de una crisis grave con PEF muy bajo y dificultad respiratoria marcada: es un signo de alarma de \"tórax silente\" por obstrucción casi completa. Retrasar el tratamiento con una radiografía de tórax, o pensar en antibioterapia como tratamiento principal (la mayoría de las exacerbaciones asmáticas no son de causa bacteriana), son errores que retrasan el manejo urgente real.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta es una de las trampas más peligrosas del examen y de la práctica clínica real: usted ausculta a una paciente con crisis asmática grave y encuentra MENOS sibilantes de los que esperaría, y el reflejo equivocado es pensar \"qué bien, está mejorando\". NO. En una crisis con PEF tan bajo, dificultad para hablar y taquipnea marcada, la disminución de los sibilantes casi siempre significa que el aire apenas está entrando o saliendo, no que la obstrucción se resolvió; es el famoso \"tórax silente\", y es de las señales más graves que puede encontrar en un paciente asmático. No baje la guardia ni reduzca el tratamiento por esto; al contrario, intensifique: oxígeno, broncodilatadores nebulizados repetidos, corticoide sistémico ya, y tenga lista la opción de sulfato de magnesio y de avisar a UCI si no hay respuesta rápida, porque esta paciente está a un paso de necesitar soporte ventilatorio.",
    keyPoints: [
      "Crisis asmática grave/riesgo vital: PEF <50% del teórico, dificultad para hablar, taquipnea/taquicardia marcadas.",
      "La disminución o ausencia de sibilantes (tórax silente) en este contexto es signo de EXTREMA gravedad (obstrucción casi total), no de mejoría.",
      "Manejo inmediato: oxígeno + broncodilatadores nebulizados repetidos + corticoides sistémicos + sulfato de magnesio IV si es refractaria; monitorizar riesgo de necesitar ventilación.",
    ],
  },
  {
    id: "mir-2026-34",
    university: "MIR (España)",
    examArea: "NEUROLOGÍA",
    topic: "ICTUS HEMORRÁGICO - MANEJO DE LA PRESIÓN ARTERIAL",
    difficulty: "hard",
    tags: ["mir", "espana", "neurologia"],
    statement:
      "Un varón de 68 años, en tratamiento con acenocumarol por fibrilación auricular, es traído por disminución brusca del nivel de conciencia y hemiparesia izquierda. La TC craneal muestra una hemorragia intraparenquimatosa de 30 mL en ganglios basales derechos. La presión arterial es 195/110 mmHg y el INR es de 3.2. ¿Cuál es el manejo inicial más apropiado?",
    options: [
      { id: "A", label: "A", text: "Reversión urgente de la anticoagulación (con complejo protrombínico y vitamina K) y control activo de la presión arterial hacia un objetivo más conservador (habitualmente en torno a 140 mmHg de sistólica), evitando tanto la hipertensión mantenida como el descenso excesivo o brusco." },
      { id: "B", label: "B", text: "Administrar fibrinolítico intravenoso para intentar disolver el hematoma, de forma análoga al manejo del ictus isquémico." },
      { id: "C", label: "C", text: "Mantener la presión arterial sin ninguna intervención, ya que la hipertensión es una respuesta fisiológica protectora en la hemorragia intracraneal que no debe modificarse." },
      { id: "D", label: "D", text: "Continuar el acenocumarol a la dosis habitual, dado que suspenderlo aumenta el riesgo de complicaciones tromboembólicas por la fibrilación auricular." },
    ],
    correctOptionId: "A",
    explanation:
      "Este paciente presenta una **hemorragia intracraneal (ictus hemorrágico)** en el contexto de anticoagulación con antagonista de la vitamina K (INR elevado), lo que agrava el riesgo de expansión del hematoma. El manejo inicial prioritario incluye: **reversión urgente de la anticoagulación** (con complejo protrombínico —más rápido y eficaz que el plasma fresco congelado— y vitamina K intravenosa) para frenar el sangrado activo y reducir el riesgo de crecimiento del hematoma, y **control de la presión arterial** hacia un objetivo más conservador (las guías actuales sugieren descender la PA sistólica a un rango en torno a 140 mmHg, salvo contraindicaciones), ya que la hipertensión mantenida se asocia a mayor riesgo de expansión del hematoma, pero evitando descensos excesivos o demasiado bruscos que puedan comprometer la perfusión cerebral.\n\n**TRAMPA DEL EXAMEN:** El fibrinolítico está absolutamente **contraindicado** en la hemorragia intracraneal (es el tratamiento del ictus isquémico, y administrarlo en una hemorragia sería catastrófico, empeorando el sangrado); esta es una de las razones por las que la TC craneal sin contraste es obligatoria antes de cualquier fibrinolisis en sospecha de ictus. Dejar la presión arterial sin control, o mantener la anticoagulación, ignoran ambos pilares terapéuticos que reducen el riesgo de expansión del hematoma.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en la hemorragia intracraneal el enfoque es exactamente el opuesto al del ictus isquémico: aquí no busca reperfundir, busca frenar el sangrado y evitar que el hematoma crezca. Con este paciente anticoagulado, lo primero es revertir esa anticoagulación cuanto antes con complejo protrombínico y vitamina K; cada hora que el INR sigue alto es una hora de mayor riesgo de que el hematoma se expanda. En paralelo, baje la presión arterial, pero con cabeza: el objetivo actual ronda los 140 mmHg de sistólica, no busque normalizarla de forma agresiva ni brusca, porque un descenso excesivo puede comprometer la perfusión del tejido cerebral que rodea al hematoma. Y por supuesto, nunca, jamás, dé fibrinolítico aquí; eso es exclusivo del ictus isquémico confirmado por TC sin sangrado, precisamente lo contrario de lo que tiene este paciente.",
    keyPoints: [
      "Hemorragia intracraneal en paciente anticoagulado: reversión urgente de la anticoagulación (complejo protrombínico + vitamina K) para limitar la expansión del hematoma.",
      "Control de PA hacia un objetivo conservador (~140 mmHg sistólica), evitando tanto hipertensión mantenida como descensos excesivos/bruscos.",
      "El fibrinolítico está contraindicado en la hemorragia intracraneal; es exclusivo del ictus isquémico confirmado.",
    ],
  },
  {
    id: "mir-2026-35",
    university: "MIR (España)",
    examArea: "CARDIOLOGÍA",
    topic: "INSUFICIENCIA CARDÍACA AGUDA - EDEMA AGUDO DE PULMÓN",
    difficulty: "hard",
    tags: ["mir", "espana", "cardiologia"],
    statement:
      "Un varón de 78 años, con cardiopatía isquémica conocida, acude por disnea súbita de reposo, ortopnea y sensación de ahogo. Presenta crepitantes bilaterales hasta campos medios, PA 168/98 mmHg, saturación de oxígeno 88% con aire ambiente, y edemas maleolares. ¿Cuál es el manejo inicial más apropiado?",
    options: [
      { id: "A", label: "A", text: "Oxigenoterapia (con soporte ventilatorio no invasivo si es necesario), diuréticos de asa intravenosos, y vasodilatadores (nitratos) si la presión arterial lo permite, dado el cuadro compatible con edema agudo de pulmón/insuficiencia cardíaca aguda con presión arterial conservada o elevada." },
      { id: "B", label: "B", text: "Administrar un bolo generoso de cristaloides intravenosos para mejorar el gasto cardíaco, dado que la disnea sugiere hipoperfusión que se corrige con volumen." },
      { id: "C", label: "C", text: "Iniciar betabloqueante intravenoso de forma inmediata para reducir la frecuencia cardíaca, independientemente del estado de congestión pulmonar." },
      { id: "D", label: "D", text: "Manejo ambulatorio con ajuste de diuréticos orales, dado que los edemas maleolares son crónicos y no requieren intervención urgente." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con **insuficiencia cardíaca aguda descompensada con edema agudo de pulmón**: disnea súbita, ortopnea, crepitantes bilaterales, hipoxemia, en un paciente con cardiopatía de base, y con presión arterial **conservada o elevada** (perfil hemodinámico \"caliente y húmedo\" con PA normal-alta), lo que determina el manejo. El tratamiento inicial incluye: **oxigenoterapia** (con soporte ventilatorio no invasivo tipo CPAP/BiPAP si hay dificultad respiratoria significativa o hipoxemia persistente), **diuréticos de asa intravenosos** (furosemida) para reducir la congestión pulmonar, y **vasodilatadores** (nitroglicerina) si la presión arterial lo permite, que reducen la precarga y poscarga, aliviando rápidamente los síntomas congestivos.\n\n**TRAMPA DEL EXAMEN:** Administrar un bolo de cristaloides en un paciente con edema agudo de pulmón es un error grave: este paciente está **sobrecargado de volumen**, no hipovolémico, y añadir más líquido empeoraría dramáticamente la congestión pulmonar. Iniciar un betabloqueante de forma aguda durante la fase de descompensación congestiva también es incorrecto, ya que puede empeorar agudamente la función cardíaca; los betabloqueantes se introducen o ajustan una vez el paciente está estabilizado y euvolémico, no durante la crisis aguda de congestión.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en la insuficiencia cardíaca aguda con edema de pulmón, el paciente se está literalmente ahogando en su propio líquido acumulado en los pulmones; darle más líquido intravenoso, aunque la disnea le haga pensar en \"shock\" que necesita volumen, es exactamente lo contrario de lo que necesita. Su prioridad es sacar líquido (diuréticos de asa intravenosos), abrir el sistema vascular para redistribuir la congestión (nitratos, si la presión se lo permite, que en este caso sí porque está en 168/98), y soportar la oxigenación (oxígeno, y si hace falta, ventilación no invasiva). Guarde el betabloqueante para cuando el paciente esté estabilizado, seco y respirando cómodo; introducirlo en plena crisis congestiva aguda puede deprimir aún más una función cardíaca ya comprometida.",
    keyPoints: [
      "Edema agudo de pulmón con PA conservada/elevada: oxígeno (± VMNI) + diuréticos de asa IV + vasodilatadores (nitratos) si la PA lo permite.",
      "No administrar bolos de cristaloides: el paciente está sobrecargado de volumen, no hipovolémico.",
      "No iniciar betabloqueantes durante la descompensación aguda congestiva; se introducen/ajustan una vez estabilizado y euvolémico.",
    ],
  },
  {
    id: "mir-2026-36",
    university: "MIR (España)",
    examArea: "MEDICINA VASCULAR",
    topic: "TROMBOSIS VENOSA PROFUNDA",
    difficulty: "medium",
    tags: ["mir", "espana", "vascular"],
    statement:
      "Una mujer de 55 años, con antecedente de viaje prolongado en avión hace 5 días, presenta dolor, edema y aumento de temperatura en la pantorrilla izquierda, con dolor a la dorsiflexión del pie (signo de Homans positivo). La probabilidad clínica de TVP, según escala validada, es intermedia. ¿Cuál es la estrategia diagnóstica más apropiada?",
    options: [
      { id: "A", label: "A", text: "Determinación de dímero D; si es negativo, se puede descartar razonablemente TVP sin necesidad de ecografía, y si es positivo, realizar ecografía Doppler venosa de miembros inferiores para confirmar el diagnóstico." },
      { id: "B", label: "B", text: "Iniciar anticoagulación empírica sin ninguna prueba diagnóstica, basándose únicamente en el signo de Homans positivo." },
      { id: "C", label: "C", text: "Solicitar flebografía con contraste como primera prueba diagnóstica, dado que es más sensible que la ecografía." },
      { id: "D", label: "D", text: "Descartar TVP de forma definitiva únicamente con la exploración física, sin necesidad de ninguna prueba complementaria." },
    ],
    correctOptionId: "A",
    explanation:
      "Ante sospecha de **trombosis venosa profunda (TVP)** con **probabilidad clínica intermedia** (por escalas validadas como la de Wells), la estrategia diagnóstica habitual combina el **dímero D** y la **ecografía Doppler venosa**: en probabilidad intermedia (a diferencia de la probabilidad alta, donde se prefiere ir directamente a la ecografía), un dímero D **negativo** tiene un alto valor predictivo negativo y permite descartar razonablemente la TVP sin necesidad de ecografía; si es **positivo**, se debe confirmar con **ecografía Doppler venosa de miembros inferiores**, que es la prueba de imagen de elección por su buena sensibilidad/especificidad, disponibilidad y ausencia de radiación/contraste.\n\n**TRAMPA DEL EXAMEN:** El signo de Homans (dolor a la dorsiflexión del pie) tiene baja sensibilidad y especificidad, y **no debe usarse como criterio diagnóstico aislado** para iniciar anticoagulación empírica sin confirmación objetiva. La flebografía con contraste, aunque históricamente considerada el patrón de referencia, ha sido sustituida en la práctica por la ecografía Doppler, que es menos invasiva y con excelente rendimiento diagnóstico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., no se deje impresionar solo por el signo de Homans; es un hallazgo clásico de los libros de texto, pero poco fiable en la práctica real, con baja sensibilidad y especificidad, así que no le sirve para confirmar ni descartar TVP por sí solo. La estrategia correcta combina la probabilidad clínica pretest con el dímero D: en probabilidad intermedia como esta paciente, un dímero D negativo le permite tranquilamente descartar la TVP sin necesidad de más pruebas; si sale positivo, ahí sí va a la ecografía Doppler, que es su prueba de confirmación de elección hoy en día, mucho más práctica que la vieja flebografía con contraste. Y nunca anticoagule a ciegas solo por la exploración física; necesita esa confirmación objetiva antes de exponer a la paciente a los riesgos de la anticoagulación.",
    keyPoints: [
      "Sospecha de TVP con probabilidad clínica intermedia: dímero D primero; negativo descarta razonablemente, positivo requiere ecografía Doppler venosa.",
      "El signo de Homans tiene baja sensibilidad/especificidad; no debe usarse como criterio diagnóstico aislado.",
      "La ecografía Doppler venosa es la prueba de imagen de elección actual, ha sustituido a la flebografía con contraste en la práctica.",
    ],
  },
  {
    id: "mir-2026-37",
    university: "MIR (España)",
    examArea: "HEMATOLOGÍA",
    topic: "ANEMIA HEMOLÍTICA AUTOINMUNE",
    difficulty: "medium",
    tags: ["mir", "espana", "hematologia"],
    statement:
      "Una mujer de 42 años presenta astenia, ictericia y orinas oscuras de una semana de evolución. La analítica muestra hemoglobina 8.1 g/dL, reticulocitos elevados, bilirrubina indirecta elevada, LDH elevada y haptoglobina indetectable. El test de Coombs directo es positivo. ¿Cuál es el diagnóstico más probable y el tratamiento de primera línea?",
    options: [
      { id: "A", label: "A", text: "Anemia hemolítica autoinmune; el tratamiento de primera línea es corticoides sistémicos (por ejemplo, prednisona), reservando otras opciones (rituximab, esplenectomía, inmunosupresores) para casos refractarios o recidivantes." },
      { id: "B", label: "B", text: "Anemia ferropénica; el tratamiento de primera línea es la suplementación oral con hierro." },
      { id: "C", label: "C", text: "Anemia megaloblástica; el tratamiento de primera línea es la suplementación con vitamina B12 intramuscular." },
      { id: "D", label: "D", text: "Anemia de trastornos crónicos; no requiere tratamiento específico dirigido, solo manejo de la enfermedad de base." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con **anemia hemolítica autoinmune**: anemia con datos de **hemólisis** (reticulocitosis, bilirrubina indirecta elevada, LDH elevada, haptoglobina indetectable —consumida al unirse a la hemoglobina libre liberada por la hemólisis intravascular/extravascular—) y **test de Coombs directo positivo**, que confirma el mecanismo autoinmune (anticuerpos unidos a la superficie del hematíe). El tratamiento de **primera línea** son los **corticoides sistémicos** (por ejemplo, prednisona a dosis altas), que suprimen la producción de autoanticuerpos y reducen la destrucción de hematíes mediada por el sistema reticuloendotelial. En casos refractarios, recidivantes o dependientes de corticoides, se consideran opciones de segunda línea como **rituximab**, **esplenectomía**, u otros inmunosupresores.\n\n**TRAMPA DEL EXAMEN:** Confundir esta anemia hemolítica con anemia ferropénica o megaloblástica ignora el patrón bioquímico característico de hemólisis (reticulocitosis, LDH y bilirrubina indirecta elevadas, haptoglobina baja) y, sobre todo, el Coombs directo positivo, que es la prueba que confirma específicamente el mecanismo autoinmune y orienta directamente al tratamiento correcto.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando vea la combinación de anemia + reticulocitos altos + bilirrubina indirecta alta + LDH alta + haptoglobina baja, ya sabe que está ante una hemólisis, sin necesidad de adivinar; esos cinco datos juntos son la firma bioquímica clásica de la destrucción acelerada de hematíes. El siguiente paso obligado es el test de Coombs directo, que le dice si el mecanismo es autoinmune (Coombs positivo, como en este caso) o de otra causa (Coombs negativo, donde pensaría en otras hemólisis no autoinmunes). Con Coombs positivo confirmado, su tratamiento de primera línea son los corticoides sistémicos; no complique el caso pensando en hierro o B12, que son el tratamiento de anemias completamente distintas con mecanismos de producción deficiente, no de destrucción acelerada. Reserve rituximab, esplenectomía u otros inmunosupresores para cuando los corticoides no sean suficientes o la enfermedad recaiga al retirarlos.",
    keyPoints: [
      "Anemia hemolítica: reticulocitosis + bilirrubina indirecta elevada + LDH elevada + haptoglobina baja/indetectable.",
      "Test de Coombs directo positivo confirma mecanismo autoinmune (anemia hemolítica autoinmune).",
      "Tratamiento de primera línea: corticoides sistémicos; segunda línea (refractarios/recidivantes): rituximab, esplenectomía, otros inmunosupresores.",
    ],
  },
  {
    id: "mir-2026-38",
    university: "MIR (España)",
    examArea: "ENFERMEDADES INFECCIOSAS",
    topic: "PROFILAXIS POSTEXPOSICIÓN AL VIH",
    difficulty: "medium",
    tags: ["mir", "espana", "infecciosas"],
    statement:
      "Un sanitario sufre un pinchazo accidental con una aguja utilizada en un paciente con infección por VIH conocida y carga viral detectable, 2 horas antes de acudir al servicio de urgencias. ¿Cuál es la actuación más apropiada respecto a la profilaxis postexposición?",
    options: [
      { id: "A", label: "A", text: "Iniciar profilaxis postexposición antirretroviral combinada lo antes posible (idealmente dentro de las primeras horas, y siempre antes de las 72 horas), manteniéndola durante 4 semanas, junto con serologías basales y seguimiento posterior." },
      { id: "B", label: "B", text: "Esperar el resultado de la serología del paciente fuente antes de decidir si iniciar profilaxis, aunque ya se conozca su estado VIH positivo con carga viral detectable." },
      { id: "C", label: "C", text: "No está indicada la profilaxis postexposición en accidentes con aguja, ya que el riesgo de transmisión percutánea del VIH es nulo." },
      { id: "D", label: "D", text: "Iniciar profilaxis postexposición únicamente si aparecen síntomas de infección aguda por VIH en el trabajador sanitario." },
    ],
    correctOptionId: "A",
    explanation:
      "Ante una **exposición ocupacional de alto riesgo al VIH** (pinchazo percutáneo con aguja usada en paciente VIH positivo con carga viral detectable), está indicada la **profilaxis postexposición (PEP)** con un régimen antirretroviral combinado (habitualmente triple terapia), que debe iniciarse **cuanto antes**, idealmente dentro de las primeras horas, y **siempre antes de las 72 horas** tras la exposición, ya que la eficacia de la profilaxis disminuye significativamente cuanto más se retrasa su inicio. El tratamiento se mantiene durante **4 semanas**, con serologías basales (VIH, hepatitis B y C) y seguimiento clínico y serológico posterior.\n\n**TRAMPA DEL EXAMEN:** Esperar la confirmación serológica del paciente fuente cuando ya se conoce que es VIH positivo con carga viral detectable es un error que retrasa innecesariamente el inicio de la profilaxis, reduciendo su eficacia. El riesgo de transmisión percutánea del VIH, aunque relativamente bajo comparado con otras vías, **no es nulo**, y justifica la profilaxis en exposiciones de riesgo significativo como esta.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en la profilaxis postexposición al VIH, el tiempo es tan crítico como en cualquier otra urgencia tiempo-dependiente: cuanto antes inicie el tratamiento antirretroviral, mayor su eficacia, y la ventana útil se cierra prácticamente a las 72 horas. En este caso, el paciente fuente ya es un VIH positivo conocido con carga viral detectable, así que no hay ninguna razón para esperar más pruebas antes de iniciar la profilaxis; eso solo le hace perder horas valiosas de la ventana terapéutica. Inicie el régimen combinado ya, mantenga las 4 semanas de tratamiento, y no olvide las serologías basales del trabajador expuesto (VIH, hepatitis B y C) junto con el seguimiento posterior, porque el trabajo de esta exposición no termina con la primera dosis de profilaxis.",
    keyPoints: [
      "Exposición de riesgo al VIH: profilaxis postexposición antirretroviral combinada, iniciada cuanto antes (idealmente horas, siempre <72h), durante 4 semanas.",
      "No retrasar el inicio esperando confirmación serológica cuando el estado VIH positivo del paciente fuente ya es conocido.",
      "Serologías basales (VIH, VHB, VHC) y seguimiento clínico/serológico posterior del trabajador expuesto.",
    ],
  },
  {
    id: "mir-2026-39",
    university: "MIR (España)",
    examArea: "ALERGOLOGÍA / URGENCIAS",
    topic: "ANAFILAXIA",
    difficulty: "hard",
    tags: ["mir", "espana", "alergologia"],
    statement:
      "Un varón de 30 años, minutos después de la ingesta de marisco, presenta urticaria generalizada, angioedema labial, sensación de opresión faríngea, disnea con sibilancias e hipotensión (PA 78/50 mmHg). ¿Cuál es el fármaco de primera línea y la vía de administración más apropiada?",
    options: [
      { id: "A", label: "A", text: "Adrenalina intramuscular (en cara anterolateral del muslo) de forma inmediata, sin retrasar su administración por la colocación de vía intravenosa u otras medidas, repitiendo la dosis cada 5-15 minutos si es necesario." },
      { id: "B", label: "B", text: "Antihistamínicos intravenosos como tratamiento de primera línea, reservando la adrenalina solo si no hay respuesta a los antihistamínicos." },
      { id: "C", label: "C", text: "Corticoides intravenosos como tratamiento de primera línea, dado su rápido inicio de acción en la anafilaxia." },
      { id: "D", label: "D", text: "Adrenalina por vía subcutánea, dado que tiene una absorción más predecible que la vía intramuscular en el contexto de shock anafiláctico." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con **anafilaxia** (afectación cutánea/mucosa + compromiso respiratorio + compromiso cardiovascular tras exposición a un alérgeno). El tratamiento de **primera línea, sin excepciones**, es la **adrenalina intramuscular**, administrada en la cara **anterolateral del muslo** (vasto lateral), que ofrece una absorción más rápida y predecible que la vía subcutánea. Debe administrarse **de inmediato**, sin retrasar su administración por la colocación de una vía intravenosa, la preparación de otros fármacos, o la espera de una respuesta a antihistamínicos o corticoides, que son fármacos **adyuvantes**, no de primera línea. La dosis puede repetirse cada 5-15 minutos si la respuesta clínica es insuficiente.\n\n**TRAMPA DEL EXAMEN:** Colocar los antihistamínicos o los corticoides como tratamiento de primera línea es un error grave y muy frecuente: ambos tienen un papel adyuvante (los antihistamínicos alivian síntomas cutáneos, los corticoides pueden ayudar a prevenir la reacción bifásica tardía), pero **ninguno de los dos trata la causa fisiopatológica aguda que compromete la vida** (vasodilatación, broncoespasmo, aumento de la permeabilidad vascular) de la forma en que lo hace la adrenalina. La vía subcutánea es inferior a la intramuscular por su absorción más lenta e impredecible, especialmente en el contexto de shock con vasoconstricción periférica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en anafilaxia no hay lugar para dudar ni para \"empezar con lo más suave\": la adrenalina intramuscular en el muslo es su primer y único movimiento inicial, sin excepciones, sin esperar a ver si el paciente mejora con otra cosa primero. Los antihistamínicos y los corticoides son ayudantes útiles, pero ninguno revierte con la rapidez necesaria la vasodilatación, el broncoespasmo y el aumento de permeabilidad vascular que están matando a este paciente en este momento; solo la adrenalina actúa sobre esos tres frentes a la vez y con la rapidez que la situación exige. Póngala intramuscular, en el muslo, no subcutánea (la absorción ahí es mucho menos fiable, sobre todo si el paciente ya está vasoconstricto por el shock), y no dude en repetir la dosis cada 5 a 15 minutos si la respuesta no es suficiente. El error que más mata en anafilaxia no es una mala elección de fármaco; es la demora en dar adrenalina esperando \"ver cómo evoluciona\".",
    keyPoints: [
      "Anafilaxia: adrenalina intramuscular (cara anterolateral del muslo) es el tratamiento de primera línea, sin excepciones ni demora.",
      "Antihistamínicos y corticoides son adyuvantes, NO sustituyen ni preceden a la adrenalina.",
      "La vía intramuscular es superior a la subcutánea (absorción más rápida y predecible); repetir dosis cada 5-15 min si es necesario.",
    ],
  },
  {
    id: "mir-2026-40",
    university: "MIR (España)",
    examArea: "CUIDADOS PALIATIVOS",
    topic: "ESCALERA ANALGÉSICA DE LA OMS - DOLOR ONCOLÓGICO",
    difficulty: "medium",
    tags: ["mir", "espana", "paliativos"],
    statement:
      "Una mujer de 62 años, con cáncer de páncreas avanzado, presenta dolor abdominal de intensidad 7/10 que no ha respondido adecuadamente al tratamiento con paracetamol y antiinflamatorios no esteroideos a dosis plenas (escalón 1 de la escalera analgésica de la OMS). ¿Cuál es el siguiente paso terapéutico más apropiado según el manejo escalonado del dolor oncológico?",
    options: [
      { id: "A", label: "A", text: "Añadir un opioide débil (por ejemplo, tramadol o codeína) al tratamiento de base (escalón 2), o considerar directamente un opioide potente a dosis bajas si el dolor es intenso, sin necesidad de agotar todas las opciones del escalón 2 antes de escalar." },
      { id: "B", label: "B", text: "Aumentar la dosis del antiinflamatorio no esteroideo por encima del límite recomendado, ya que el siguiente paso siempre es maximizar los fármacos del escalón 1 antes de progresar." },
      { id: "C", label: "C", text: "Pasar directamente a sedación paliativa, dado que el dolor no ha respondido al primer escalón." },
      { id: "D", label: "D", text: "Retirar toda la analgesia y reiniciar únicamente con medidas no farmacológicas, dado el riesgo de dependencia a opioides." },
    ],
    correctOptionId: "A",
    explanation:
      "Según la **escalera analgésica de la OMS**, cuando el dolor no se controla adecuadamente con los fármacos del **escalón 1** (analgésicos no opioides: paracetamol, AINE) a dosis plenas, el siguiente paso es progresar al **escalón 2** (opioides débiles, como tramadol o codeína, generalmente combinados con el analgésico no opioide del escalón 1), o, en el manejo actual del dolor oncológico moderado-intenso, considerar directamente el inicio de un **opioide potente a dosis bajas** (escalón 3), ya que las guías actuales tienden a flexibilizar el uso estricto y secuencial de la escalera, especialmente en dolor oncológico de intensidad significativa, sin necesidad de agotar exhaustivamente todas las opciones del escalón 2 antes de escalar si el dolor lo justifica.\n\n**TRAMPA DEL EXAMEN:** Aumentar la dosis del AINE por encima del límite recomendado (\"techo analgésico\") no aporta mayor eficacia y sí mayor toxicidad (gastrointestinal, renal); los analgésicos del escalón 1 tienen techo terapéutico, a diferencia de los opioides. Saltar directamente a la sedación paliativa ante dolor no controlado con el escalón 1, sin haber ensayado opioides, es un error grave que ignora todo el arsenal analgésico disponible antes de llegar a esa medida, reservada para el control de síntomas refractarios en fase terminal, no como respuesta a un dolor no controlado con analgésicos básicos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la escalera analgésica de la OMS es su guía, pero no una camisa de fuerza: si esta paciente con cáncer de páncreas tiene un dolor de 7/10 que no responde al escalón 1, usted no se queda ahí subiendo la dosis del antiinflamatorio esperando un milagro (los AINE tienen techo analgésico, más dosis no es más alivio, solo más toxicidad); avanza al siguiente nivel, ya sea un opioide débil del escalón 2 o, si el dolor es intenso, directamente un opioide potente a dosis bajas, que hoy en día es una práctica aceptada en dolor oncológico significativo. Y por favor, no confunda \"dolor no controlado\" con \"indicación de sedación paliativa\"; la sedación es para el control de síntomas refractarios en fase terminal, un recurso completamente distinto y mucho más adelante en el proceso, no la respuesta a un dolor que simplemente necesita subir un escalón analgésico.",
    keyPoints: [
      "Escalera analgésica OMS: escalón 1 (no opioides) → escalón 2 (opioides débiles) → escalón 3 (opioides potentes); en dolor oncológico intenso se puede saltar al escalón 3 directamente.",
      "Los AINE tienen techo analgésico: superar la dosis máxima no aumenta el alivio, solo la toxicidad.",
      "La sedación paliativa se reserva para síntomas refractarios en fase terminal, no como respuesta a dolor no controlado con analgésicos básicos.",
    ],
  },
];
