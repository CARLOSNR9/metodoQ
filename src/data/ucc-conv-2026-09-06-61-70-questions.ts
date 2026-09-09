import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #7 (6 sep 2026) · Preguntas #61–#70.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_06_61_70_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-06-61",
    university: "UCC",
    examArea: "PEDIATRÍA - OTORRINOLARINGOLOGÍA / URGENCIAS",
    topic: "Urgencias de Vía Aérea Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-de-v-a-a-rea-pedi-trica","urgencias","de","v","a","rea","pedi","trica"],
    statement: "Un niño de 4 años, no vacunado (padres objetores de la vacunación), es traído a urgencias por fiebre alta de inicio súbito (39.5°C), dificultad progresiva para tragar (sialorrea marcada, \"babea\" constantemente), y voz apagada tipo \"papa caliente en la boca\". El niño se sienta espontáneamente inclinado hacia adelante, con el cuello extendido y la barbilla proyectada hacia afuera (posición de \"trípode\" o \"en olfateo\"), luce tóxico y ansioso, con estridor inspiratorio leve. Los padres refieren que los síntomas progresaron en menos de 6 horas. ¿Cuál es la conducta que debe evitarse ESTRICTAMENTE ante la sospecha de este diagnóstico, y cuál es el manejo prioritario correcto?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Examinar la orofaringe con baja lengua para visualizar directamente la epiglotis y confirmar el diagnóstico antes de cualquier otra medida.",
        distractorProfile: "dangerous_diagnostic_maneuver",
        incorrectFeedback: "Examinar la orofaringe con un depresor lingual en un niño con sospecha de epiglotitis puede desencadenar un laringoespasmo reflejo y obstrucción completa de la vía aérea; el diagnóstico en este contexto es clínico, y cualquier confirmación visual directa debe realizarse únicamente en quirófano por personal experto en vía aérea difícil.",
      },
      {
        id: "B",
        label: "B",
        text: "Evitar CUALQUIER manipulación de la orofaringe/vía aérea (baja lengua, punción venosa agitando al niño) y trasladar de inmediato a un ambiente controlado (quirófano) para manejo experto de la vía aérea.",
      },
      {
        id: "C",
        label: "C",
        text: "Colocar al niño en posición supina para facilitar la colocación de una vía intravenosa periférica de forma inmediata.",
        distractorProfile: "dangerous_agitation_and_positioning",
        incorrectFeedback: "Forzar al niño a una posición supina en contra de su posición natural de trípode, y agitarlo para canalizar una vía, puede precipitar el cierre completo de una vía aérea ya comprometida; se debe priorizar mantener al niño calmado en la posición que él elige, trasladándolo de inmediato para manejo experto de la vía aérea antes que cualquier procedimiento no esencial.",
      },
      {
        id: "D",
        label: "D",
        text: "Nebulización inmediata con Epinefrina racémica como tratamiento definitivo único, sin necesidad de otras medidas.",
        distractorProfile: "wrong_treatment_for_wrong_condition",
        incorrectFeedback: "La Epinefrina racémica nebulizada es el tratamiento característico del Crup (Laringotraqueítis viral), una condición distinta y generalmente menos súbita/tóxica que la Epiglotitis; en la epiglotitis, el manejo prioritario es asegurar la vía aérea de forma experta y controlada, no un tratamiento nebulizado como medida única.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un cuadro clásico de **Epiglotitis Aguda**, una emergencia de vía aérea causada clásicamente por *Haemophilus influenzae* tipo B (mucho más frecuente en niños no vacunados, como en este caso) u otros patógenos bacterianos, que genera inflamación e infección rápidamente progresiva de la epiglotis y estructuras supraglóticas. El cuadro característico de inicio súbito con fiebre alta, sialorrea (por la incapacidad/temor a tragar), voz apagada, y la **posición de trípode** (el niño busca instintivamente la posición que mejor mantiene abierta su vía aérea parcialmente obstruida) son altamente sugestivos. La regla de oro absoluta es **evitar cualquier manipulación de la orofaringe o agitación del niño** (incluyendo el examen con baja lengua, la punción venosa forzada, o incluso separar al niño de sus padres si está tranquilo en sus brazos), ya que cualquier estímulo que genere llanto, agitación o manipulación directa puede precipitar un **espasmo laríngeo completo y obstrucción total de la vía aérea** en cuestión de segundos. El manejo correcto es mantener al niño lo más calmado posible, en la posición que él mismo elija, y trasladarlo de inmediato a un ambiente controlado (quirófano, idealmente con otorrinolaringología y anestesiología presentes) para asegurar la vía aérea de forma experta y controlada, generalmente mediante intubación bajo visualización directa o, si es necesario, una vía aérea quirúrgica.",
    keyPoints: [
    "Niño (especialmente no vacunado) con fiebre alta súbita + sialorrea + voz apagada + posición de trípode + estridor.",
    "Epiglotitis Aguda (emergencia de vía aérea). REGLA DE ORO: NO examinar la orofaringe, NO agitar/acostar al niño, NO separarlo de sus padres. Trasladar de inmediato a ambiente controlado para manejo experto de la vía aérea (riesgo de obstrucción completa súbita con cualquier manipulación).",
    "Urgencias de Vía Aérea Pediátrica / Epiglotitis Aguda."
],
  },
  {
    id: "ucc-conv-2026-09-06-62",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / URGENCIAS",
    topic: "Urgencias Endocrinológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-endocrinol-gicas","urgencias","endocrinol","gicas"],
    statement: "Una mujer de 45 años, con antecedente de Enfermedad de Addison (Insuficiencia Suprarrenal Primaria) en tratamiento crónico con Hidrocortisona oral, consulta a urgencias por vómito y diarrea intensos de 2 días de evolución (gastroenteritis viral), refiriendo que no ha podido tomar su medicación oral habitual por la intolerancia digestiva. Al ingreso: hipotensión severa (PA 70/40 mmHg) refractaria a la administración de 2 litros de cristaloides, debilidad extrema, dolor abdominal difuso, y confusión. Los laboratorios muestran hiponatremia, hiperkalemia, e hipoglucemia. ¿Cuál es el diagnóstico de esta descompensación, y cuál es el tratamiento farmacológico INMEDIATO y de PRIMERA LÍNEA, sin esperar la confirmación de laboratorio de cortisol?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Choque séptico de origen gastrointestinal; manejo exclusivamente con antibióticos de amplio espectro y líquidos IV, sin necesidad de esteroides.",
        distractorProfile: "incomplete_treatment_missing_hormone_replacement",
        incorrectFeedback: "Aunque una infección puede ser el desencadenante del estrés, el antecedente de insuficiencia suprarrenal conocida y el patrón característico de hipotensión refractaria con hiponatremia, hiperkalemia e hipoglucemia exigen la administración inmediata de hidrocortisona, sin la cual el choque no se corregirá adecuadamente solo con líquidos y antibióticos.",
      },
      {
        id: "B",
        label: "B",
        text: "Crisis Addisoniana (Insuficiencia Suprarrenal Aguda); administración INMEDIATA de Hidrocortisona intravenosa en dosis de estrés, más reanimación agresiva con Solución Salina y Dextrosa.",
      },
      {
        id: "C",
        label: "C",
        text: "Cetoacidosis Diabética atípica; manejo con insulina intravenosa en infusión continua como primera medida.",
        distractorProfile: "wrong_diagnosis_glucose_direction_mismatch",
        incorrectFeedback: "La paciente presenta HIPOglucemia, no hiperglucemia, un hallazgo opuesto al de la cetoacidosis diabética; administrar insulina en este contexto empeoraría peligrosamente la hipoglucemia ya presente, siendo un error potencialmente fatal.",
      },
      {
        id: "D",
        label: "D",
        text: "Intoxicación alimentaria simple; manejo exclusivamente sintomático con antieméticos y observación domiciliaria.",
        distractorProfile: "dangerous_underestimation_in_high_risk_patient",
        incorrectFeedback: "En una paciente con insuficiencia suprarrenal conocida que no ha podido tomar su medicación de reemplazo, cualquier enfermedad intercurrente representa un riesgo real de crisis addisoniana; el manejo domiciliario sin evaluar ni tratar esta posibilidad puede resultar en colapso cardiovascular y muerte.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con una **Crisis Addisoniana (Insuficiencia Suprarrenal Aguda)**, una emergencia endocrinológica potencialmente mortal, precipitada en este caso por un estrés fisiológico agudo (gastroenteritis) combinado con la incapacidad de mantener su reemplazo hormonal oral habitual por la intolerancia digestiva. La ausencia de cortisol (y en la insuficiencia primaria, también de aldosterona) resulta en la incapacidad de mantener el tono vascular y la presión arterial adecuados, generando una **hipotensión refractaria a líquidos** (característica clave: no responde adecuadamente a la reanimación con cristaloides sola), junto con el patrón electrolítico típico de hiponatremia, hiperkalemia (por déficit de aldosterona) e hipoglucemia (por déficit de cortisol, que normalmente promueve la gluconeogénesis). Ante la sospecha clínica, el tratamiento es una **emergencia que no debe esperar confirmación de laboratorio**: se administra **Hidrocortisona intravenosa en dosis de estrés de inmediato** (que tiene tanto efecto glucocorticoide como mineralocorticoide a dosis altas), junto con reanimación agresiva con **Solución Salina** (para corregir la hipovolemia y la hiponatremia) y **Dextrosa** (para corregir la hipoglucemia).",
    keyPoints: [
    "Paciente con Insuficiencia Suprarrenal conocida + estrés agudo (infección, cirugía, trauma, incapacidad de tomar medicación oral) + Hipotensión REFRACTARIA a líquidos + Hiponatremia + Hiperkalemia + Hipoglucemia.",
    "Crisis Addisoniana. Tratamiento INMEDIATO, sin esperar laboratorio: Hidrocortisona IV en dosis de estrés + Solución Salina + Dextrosa. Todo paciente con insuficiencia suprarrenal debe recibir educación sobre \"reglas de días de enfermedad\" (aumentar dosis de esteroide durante enfermedades intercurrentes).",
    "Urgencias Endocrinológicas / Crisis Addisoniana."
],
  },
  {
    id: "ucc-conv-2026-09-06-63",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUROLOGÍA / UROLOGÍA",
    topic: "Urgencias Neuroquirúrgicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-neuroquir-rgicas","urgencias","neuroquir","rgicas"],
    statement: "Un hombre de 55 años consulta por dolor lumbar bajo intenso de 2 días de evolución, asociado a debilidad progresiva en ambas piernas, y desde esta mañana, incapacidad para orinar espontáneamente a pesar de sentir la vejiga llena (retención urinaria), junto con disminución de la sensibilidad en la región perineal y glútea (\"en silla de montar\") y pérdida del tono del esfínter anal al tacto rectal. Al examen físico hay debilidad simétrica en ambas piernas con reflejos aquilianos abolidos bilateralmente. Una resonancia magnética de columna lumbosacra confirma una gran hernia discal central L4-L5 que comprime severamente el saco tecal. ¿Cuál es el diagnóstico, y cuál es la conducta terapéutica que debe realizarse de forma URGENTE, dado que el pronóstico funcional depende directamente del tiempo hasta la intervención?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ciática simple por hernia discal; manejo conservador ambulatorio con analgesia y fisioterapia, con reevaluación en 6 semanas.",
        distractorProfile: "dangerous_underestimation_missing_red_flags",
        incorrectFeedback: "La presencia de retención urinaria, anestesia en silla de montar y disminución del tono del esfínter anal son \"banderas rojas\" que descartan una ciática simple y confirman un Síndrome de Cauda Equina, una verdadera emergencia quirúrgica que no admite manejo conservador ambulatorio.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Cauda Equina; descompresión quirúrgica de urgencia (idealmente dentro de las primeras 24-48 horas) para maximizar la recuperación neurológica y evitar disfunción permanente de esfínteres.",
      },
      {
        id: "C",
        label: "C",
        text: "Estenosis del canal lumbar crónica; manejo con infiltraciones epidurales de corticoides de forma ambulatoria programada.",
        distractorProfile: "wrong_urgency_level_for_acute_presentation",
        incorrectFeedback: "Aunque la estenosis crónica puede causar síntomas similares de forma progresiva y menos urgente, la presentación aguda con disfunción de esfínteres en 2 días exige manejo quirúrgico urgente inmediato, no un procedimiento ambulatorio programado que retrasaría peligrosamente la descompresión necesaria.",
      },
      {
        id: "D",
        label: "D",
        text: "Espondilolistesis degenerativa; manejo con corsé lumbar rígido y observación clínica sin necesidad de cirugía urgente.",
        distractorProfile: "dangerously_passive_management",
        incorrectFeedback: "La presencia de disfunción de esfínteres y anestesia en silla de montar son indicaciones absolutas de cirugía urgente, independientemente de la causa estructural subyacente; el manejo conservador con observación en este contexto expone al paciente a un riesgo alto de discapacidad neurológica permanente.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un **Síndrome de Cauda Equina**, una emergencia neuroquirúrgica causada por la compresión de las múltiples raíces nerviosas lumbosacras que forman la \"cola de caballo\" por debajo del final de la médula espinal, más frecuentemente por una hernia discal masiva central (aunque también puede ser causado por tumores, abscesos epidurales o trauma). Las banderas rojas clásicas y definitorias son: **anestesia en silla de montar** (región perineal/perianal/glútea), **retención urinaria** (frecuentemente el signo más sensible y temprano) con posterior incontinencia por rebosamiento, **disminución del tono del esfínter anal**, y debilidad motora bilateral en miembros inferiores con arreflexia. Esta es una **verdadera emergencia quirúrgica tiempo-dependiente**: la evidencia respalda que la **descompresión quirúrgica urgente** (idealmente dentro de las primeras 24-48 horas del inicio de los síntomas de disfunción de esfínteres) ofrece la mejor probabilidad de recuperación neurológica funcional; el retraso en la descompresión se asocia con mayor riesgo de **disfunción permanente e irreversible de esfínteres vesical, intestinal y sexual**.",
    keyPoints: [
    "Dolor lumbar + debilidad bilateral en piernas + Retención urinaria + Anestesia en \"silla de montar\" + Tono del esfínter anal disminuido.",
    "Síndrome de Cauda Equina (emergencia neuroquirúrgica tiempo-dependiente). Conducta: Resonancia magnética urgente + Descompresión quirúrgica dentro de las primeras 24-48 horas para maximizar la recuperación y evitar disfunción permanente de esfínteres.",
    "Urgencias Neuroquirúrgicas / Síndrome de Cauda Equina."
],
  },
  {
    id: "ucc-conv-2026-09-06-64",
    university: "UCC",
    examArea: "PEDIATRÍA - INFECTOLOGÍA / NEUROLOGÍA",
    topic: "Neurotoxinas Infantiles",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","neurotoxinas-infantiles","neurotoxinas","infantiles"],
    statement: "Un lactante de 3 semanas de vida es traído a urgencias por estreñimiento de una semana de evolución (previamente tenía deposiciones normales), succión débil durante la lactancia, llanto débil, e hipotonía generalizada progresiva (\"bebé flácido\"). La madre refiere que hace 3 semanas, antes del inicio de los síntomas, le dio al bebé una pequeña cantidad de miel de abeja casera para \"calmarlo\" durante un episodio de llanto. Al examen físico: hipotonía marcada con \"cabeza caída\" al levantarlo (head lag), ptosis palpebral bilateral leve, reflejo de succión y de Moro disminuidos, y pupilas ligeramente dilatadas con respuesta lenta a la luz. No hay fiebre. ¿Cuál es el diagnóstico más probable, el mecanismo fisiopatológico, y por qué se debe EVITAR el uso empírico de aminoglucósidos si se sospecha una infección concomitante en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Sepsis neonatal tardía; los aminoglucósidos son el tratamiento antibiótico de elección y deben usarse sin restricción.",
        distractorProfile: "dangerous_missed_diagnosis_and_wrong_antibiotic_choice",
        incorrectFeedback: "La ausencia de fiebre y el patrón específico de parálisis flácida descendente con el antecedente claro de ingesta de miel apuntan mucho más a botulismo infantil que a sepsis bacteriana; además, incluso si se sospechara infección concomitante, los aminoglucósidos deben evitarse específicamente por su riesgo de potenciar el bloqueo neuromuscular.",
      },
      {
        id: "B",
        label: "B",
        text: "Botulismo Infantil (por esporas de Clostridium botulinum, frecuentemente de la miel); los aminoglucósidos deben evitarse porque pueden POTENCIAR el bloqueo neuromuscular y empeorar la debilidad/parálisis respiratoria.",
      },
      {
        id: "C",
        label: "C",
        text: "Espasmo del sollozo; es una condición benigna y autolimitada que no requiere ninguna intervención ni precaución farmacológica específica.",
        distractorProfile: "trivializing_life_threatening_condition",
        incorrectFeedback: "El espasmo del sollozo es un evento breve y episódico desencadenado por el llanto intenso, sin hipotonía progresiva sostenida ni compromiso de succión, pupilas o reflejos; el cuadro descrito de deterioro neuromuscular progresivo es incompatible con esta condición benigna.",
      },
      {
        id: "D",
        label: "D",
        text: "Meningitis viral; los aminoglucósidos son inefectivos contra virus pero no representan ningún riesgo adicional en este contexto.",
        distractorProfile: "false_reassurance_about_drug_safety",
        incorrectFeedback: "Independientemente del diagnóstico infeccioso considerado, si existe sospecha concomitante de botulismo infantil (como sugiere fuertemente esta viñeta), los aminoglucósidos deben evitarse por su riesgo específico de potenciar el bloqueo neuromuscular ya causado por la toxina botulínica.",
      },
    ],
    correctOptionId: "B",
    explanation: "El lactante presenta **Botulismo Infantil**, causado por la ingesta de **esporas de Clostridium botulinum** (a diferencia del botulismo del adulto, causado por la toxina preformada), que germinan y colonizan el intestino inmaduro del lactante (con flora intestinal aún no completamente desarrollada), produciendo **toxina botulínica in situ** de forma continua. La **miel** es una fuente clásica y bien reconocida de estas esporas, razón por la cual está formalmente contraindicada en menores de 12 meses. La toxina bloquea la liberación de acetilcolina en la unión neuromuscular, causando una **parálisis flácida descendente progresiva**: estreñimiento (frecuentemente el primer síntoma, por afectación del músculo liso intestinal), succión y llanto débiles, hipotonía generalizada, ptosis, y midriasis con respuesta pupilar lenta, con riesgo de progresar a **falla respiratoria** por compromiso de los músculos respiratorios. Un punto farmacológico crucial es que los **antibióticos aminoglucósidos (como Gentamicina)** deben evitarse estrictamente si se sospecha esta condición, ya que estos fármacos tienen un efecto bloqueador neuromuscular adicional propio, que puede **potenciar sinérgicamente** el bloqueo ya causado por la toxina botulínica, precipitando o empeorando dramáticamente la insuficiencia respiratoria.",
    keyPoints: [
    "Lactante <6 meses con estreñimiento + succión/llanto débil + hipotonía progresiva (\"bebé flácido\") + ptosis/pupilas dilatadas.; Antecedente de ingesta de MIEL.",
    "Botulismo Infantil. REGLA DE ORO farmacológica: EVITAR Aminoglucósidos (potencian el bloqueo neuromuscular y pueden precipitar falla respiratoria). Tratamiento específico: Inmunoglobulina Antibotulínica (BabyBIG).",
    "Neurotoxinas Infantiles / Botulismo Infantil."
],
  },
  {
    id: "ucc-conv-2026-09-06-65",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / NEUMOLOGÍA",
    topic: "Emergencias Cardiovasculares",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","emergencias-cardiovasculares","emergencias","cardiovasculares"],
    statement: "Una mujer de 62 años, con antecedente de cirugía ortopédica mayor (reemplazo de rodilla) hace 10 días, consulta a urgencias por disnea súbita e intensa, dolor torácico pleurítico, y un episodio sincopal. Al examen físico: taquicárdica (FC 128 lpm), taquipneica (FR 30 rpm), hipotensa (PA 82/55 mmHg), con SatO2 84% con aire ambiente, y distensión de las venas yugulares. El electrocardiograma muestra taquicardia sinusal con un patrón S1Q3T3 (onda S profunda en DI, onda Q y T invertida en DIII) y un nuevo bloqueo incompleto de rama derecha. Un ecocardiograma a la cama del paciente muestra dilatación y disfunción del ventrículo derecho. ¿Cuál es el diagnóstico, y cuál es la conducta terapéutica INMEDIATA ante esta presentación con inestabilidad hemodinámica (shock obstructivo)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Anticoagulación exclusivamente con Heparina en dosis terapéutica estándar, sin necesidad de terapia adicional dado que la paciente aún tiene pulso.",
        distractorProfile: "undertreatment_of_high_risk_pe",
        incorrectFeedback: "La anticoagulación sola previene la formación de nuevos coágulos pero no disuelve rápidamente el coágulo ya obstructor que está causando el shock obstructivo actual; en TEP de alto riesgo con inestabilidad hemodinámica franca, la trombólisis (o embolectomía) es necesaria para revertir el compromiso ventricular derecho agudo.",
      },
      {
        id: "B",
        label: "B",
        text: "Trombólisis sistémica urgente (o embolectomía si está contraindicada la trombólisis), dado el Tromboembolismo Pulmonar de alto riesgo con shock obstructivo (compromiso hemodinámico).",
      },
      {
        id: "C",
        label: "C",
        text: "Colocación de un filtro de vena cava inferior como único tratamiento, sin necesidad de anticoagulación sistémica.",
        distractorProfile: "incomplete_and_delayed_intervention",
        incorrectFeedback: "El filtro de vena cava inferior previene la embolización de NUEVOS trombos desde las piernas, pero no trata el coágulo que ya está alojado en la circulación pulmonar causando el shock actual; no es el tratamiento de la emergencia hemodinámica presente.",
      },
      {
        id: "D",
        label: "D",
        text: "Observación clínica con oxígeno suplementario exclusivamente, reevaluando en 6 horas antes de decidir cualquier tratamiento farmacológico.",
        distractorProfile: "dangerously_passive_in_hemodynamic_instability",
        incorrectFeedback: "Una paciente en shock obstructivo por TEP masivo puede deteriorarse hasta el paro cardíaco en minutos a horas; retrasar el tratamiento trombolítico o la embolectomía para \"observar\" expone a la paciente a un riesgo inaceptablemente alto de muerte súbita.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con un **Tromboembolismo Pulmonar (TEP) Masivo/de Alto Riesgo**, precipitado por el estado de hipercoagulabilidad e inmovilización asociado a la cirugía ortopédica mayor reciente (un factor de riesgo clásico de trombosis venosa profunda con embolización pulmonar subsecuente). Los hallazgos de **inestabilidad hemodinámica** (hipotensión sostenida, shock) junto con evidencia de **disfunción aguda del ventrículo derecho** (por la sobrecarga súbita de presión pulmonar) clasifican este evento como **TEP de alto riesgo (masivo)**, la categoría más grave, con mortalidad significativa si no se trata agresivamente. A diferencia del TEP de riesgo bajo-intermedio (donde la anticoagulación sola es suficiente), en el TEP de **alto riesgo con shock obstructivo**, la conducta es la **trombólisis sistémica urgente** (para disolver rápidamente el coágulo y aliviar la sobrecarga aguda del ventrículo derecho que está causando el colapso hemodinámico), reservando la **embolectomía quirúrgica o por catéter** para los casos con contraindicación absoluta a la trombólisis.",
    keyPoints: [
    "Factor de riesgo trombótico reciente (cirugía, inmovilización) + Disnea súbita + Hipotensión/Shock + Disfunción de ventrículo derecho en ecocardiograma.",
    "TEP de Alto Riesgo (Masivo) con shock obstructivo. Diferencia clave de manejo: TEP estable → Anticoagulación sola. TEP de alto riesgo con inestabilidad hemodinámica → Trombólisis sistémica urgente (o embolectomía si contraindicada).",
    "Emergencias Cardiovasculares / Tromboembolismo Pulmonar Masivo."
],
  },
  {
    id: "ucc-conv-2026-09-06-66",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA",
    topic: "Valvulopatías",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","valvulopat-as","valvulopat","as"],
    statement: "Un hombre de 68 años, con antecedente de estenosis aórtica severa conocida (diagnosticada hace 2 años, seguimiento irregular), consulta por un episodio sincopal mientras subía escaleras rápidamente, precedido de mareo y visión borrosa transitoria. Refiere además episodios recientes de disnea de esfuerzo progresiva y un episodio de dolor torácico opresivo la semana pasada durante actividad física intensa, que cedió con el reposo. Al examen físico se ausculta un soplo sistólico eyectivo intenso (grado IV/VI) en el foco aórtico, irradiado hacia los vasos del cuello, con un pulso carotídeo de ascenso lento y de amplitud disminuida (pulsus parvus et tardus). ¿Cuál es la implicación pronóstica de la aparición de SÍNCOPE en el contexto de esta valvulopatía, y cuál es el tratamiento DEFINITIVO indicado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "El síncope en la estenosis aórtica severa es un hallazgo benigno relacionado con hipotensión ortostática simple; no requiere cambio en el manejo médico conservador.",
        distractorProfile: "dangerous_trivialization_of_prognostic_marker",
        incorrectFeedback: "El síncope en el contexto de estenosis aórtica severa NO es un hallazgo benigno; representa uno de los síntomas clásicos que marca un cambio pronóstico crítico hacia mortalidad elevada, y exige evaluación urgente para reemplazo valvular, no manejo conservador.",
      },
      {
        id: "B",
        label: "B",
        text: "La aparición de síncope (junto con angina o insuficiencia cardíaca) marca un punto de inflexión pronóstica crítico, con mortalidad elevada sin tratamiento; el tratamiento definitivo es el Reemplazo Valvular Aórtico (quirúrgico o percutáneo/TAVI).",
      },
      {
        id: "C",
        label: "C",
        text: "El síncope indica la necesidad de iniciar un betabloqueador en altas dosis para reducir la frecuencia cardíaca y prevenir nuevos episodios.",
        distractorProfile: "potentially_dangerous_medical_only_approach",
        incorrectFeedback: "Los betabloqueadores no corrigen la obstrucción mecánica fija de la válvula estenótica y, al reducir la frecuencia cardíaca y la contractilidad, pueden empeorar el gasto cardíaco ya comprometido en la estenosis aórtica severa; el tratamiento definitivo es el reemplazo valvular, no el manejo farmacológico exclusivo.",
      },
      {
        id: "D",
        label: "D",
        text: "El síncope en este contexto se debe manejar con la colocación de un marcapasos permanente, sin necesidad de intervención sobre la válvula misma.",
        distractorProfile: "wrong_mechanism_wrong_treatment",
        incorrectFeedback: "El síncope en la estenosis aórtica severa se debe a la incapacidad de aumentar el gasto cardíaco ante la vasodilatación del esfuerzo por la obstrucción valvular fija, no a una arritmia bradicárdica primaria; un marcapasos no corrige el problema mecánico subyacente, que requiere reemplazo valvular.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Estenosis Aórtica Severa Sintomática**, evidenciada por el soplo sistólico eyectivo intenso irradiado al cuello y el característico pulso \"parvus et tardus\" (de ascenso lento y amplitud disminuida, reflejando la obstrucción fija al flujo de salida del ventrículo izquierdo). La aparición de **síntomas clásicos** —**Angina, Síncope, o insuficiencia Cardíaca (disnea)**, frecuentemente recordados con la regla mnemotécnica \"ASD\" o su equivalente en inglés— marca un **punto de inflexión pronóstica crítico y ominoso** en la historia natural de esta enfermedad: mientras que los pacientes asintomáticos pueden tener una supervivencia prolongada, la aparición de estos síntomas se asocia con una supervivencia media dramáticamente reducida (históricamente descrita en meses a pocos años) si la válvula no se reemplaza. El síncope específicamente ocurre porque, ante el esfuerzo físico, la vasodilatación periférica normal no puede ser compensada por un aumento del gasto cardíaco (la válvula estrecha actúa como un obstáculo fijo que no permite aumentar el flujo), resultando en hipotensión relativa y síncope. El único tratamiento **definitivo** que modifica esta trayectoria pronóstica ominosa es el **Reemplazo Valvular Aórtico**, ya sea quirúrgico convencional o percutáneo (TAVI, Implante Valvular Aórtico Transcatéter), siendo la elección determinada por el riesgo quirúrgico individual del paciente.",
    keyPoints: [
    "Estenosis Aórtica Severa conocida + aparición de Angina, Síncope o Disnea (insuficiencia cardíaca) de esfuerzo.",
    "Estenosis Aórtica Severa SINTOMÁTICA: punto de inflexión pronóstica crítico, mortalidad elevada sin tratamiento. Tratamiento DEFINITIVO: Reemplazo Valvular Aórtico (quirúrgico o TAVI), no manejo médico conservador exclusivo.",
    "Valvulopatías / Estenosis Aórtica Severa Sintomática."
],
  },
  {
    id: "ucc-conv-2026-09-06-67",
    university: "UCC",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - URGENCIAS",
    topic: "Emergencias Obstétricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","emergencias-obst-tricas","emergencias","obst","tricas"],
    statement: "Una mujer de 30 años, a las 36 semanas de gestación, ingresa en trabajo de parto activo. Al momento de la ruptura espontánea de membranas, la partera nota la salida súbita de sangre roja rutilante a través de la vagina, inmediatamente seguida de una **caída abrupta y sostenida de la frecuencia cardíaca fetal** (bradicardia fetal severa, de 70 lpm, sin recuperación). La madre está hemodinámicamente estable, sin dolor abdominal significativo ni hipertonía uterina. Se conocía por ecografías previas la presencia de vasos sanguíneos fetales cruzando el segmento uterino inferior cerca del orificio cervical interno, sin cobertura placentaria ni del cordón umbilical (inserción velamentosa del cordón). ¿Cuál es el diagnóstico, y por qué la sangre fetal perdida representa un riesgo desproporcionadamente MAYOR para el feto en comparación con otras causas de sangrado del tercer trimestre?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Desprendimiento de placenta; el riesgo es exclusivamente materno por la coagulopatía de consumo asociada, no fetal directo.",
        distractorProfile: "wrong_diagnosis_wrong_bleeding_source",
        incorrectFeedback: "El Abruptio típicamente se presenta con dolor abdominal intenso y útero hipertónico, hallazgos ausentes en esta viñeta; además, en el Abruptio la sangre perdida es predominantemente materna, mientras que el patrón descrito (madre estable, feto en colapso) es característico específicamente de la Vasa Previa, donde la sangre es fetal.",
      },
      {
        id: "B",
        label: "B",
        text: "Vasa Previa Rota; la sangre perdida es de origen FETAL (no materno), por lo que incluso una pérdida de volumen aparentemente pequeña representa un porcentaje devastadoramente alto del volumen sanguíneo total (mucho menor) del feto, exigiendo cesárea de EMERGENCIA inmediata.",
      },
      {
        id: "C",
        label: "C",
        text: "Placenta Previa sangrante; el riesgo es proporcional y similar independientemente de si la sangre es materna o fetal.",
        distractorProfile: "false_equivalence_of_risk",
        incorrectFeedback: "Esta afirmación es incorrecta; el riesgo NO es equivalente independientemente del origen de la sangre. La Placenta Previa típicamente causa sangrado materno (con compromiso hemodinámico materno proporcional), mientras que en la Vasa Previa el sangrado es fetal, generando un riesgo desproporcionadamente mayor para el feto por su volumen sanguíneo total mucho menor.",
      },
      {
        id: "D",
        label: "D",
        text: "Ruptura Uterina; el sangrado en este caso es exclusivamente hacia la cavidad peritoneal materna, sin compromiso directo del volumen sanguíneo fetal.",
        distractorProfile: "wrong_diagnosis_wrong_bleeding_route",
        incorrectFeedback: "La Ruptura Uterina típicamente se presenta con dolor abdominal súbito intenso, cese de las contracciones y compromiso hemodinámico materno (sangrado hacia el peritoneo o la vagina de origen materno), un cuadro distinto al sangrado vaginal externo inmediatamente tras la ruptura de membranas con bradicardia fetal aislada descrito en esta viñeta, característico de Vasa Previa.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta una **Vasa Previa Rota**, una emergencia obstétrica catastrófica en la que vasos sanguíneos **fetales** desprotegidos (sin la cobertura protectora normal de la gelatina de Wharton del cordón umbilical o del tejido placentario, como ocurre en la inserción velamentosa del cordón, un factor de riesgo conocido) cruzan las membranas cerca o sobre el orificio cervical interno. Cuando las membranas se rompen (espontánea o artificialmente), estos vasos fetales expuestos pueden desgarrarse, causando sangrado. La razón crítica por la que este sangrado es desproporcionadamente más peligroso que otras causas de hemorragia del tercer trimestre (como el Abruptio o la Placenta Previa, donde la sangre perdida es predominantemente **materna**) es que aquí la sangre que se pierde es **fetal**: el volumen sanguíneo total de un feto a término es de apenas 250-300 mL aproximadamente, así que la pérdida de incluso 100-150 mL (una cantidad que parecería trivial en un adulto) puede representar la mitad o más del volumen circulante fetal total, causando exsanguinación y muerte fetal en minutos. Ante la bradicardia fetal severa sostenida tras el sangrado, la conducta es la **cesárea de emergencia inmediata**, sin margen para ningún retraso.",
    keyPoints: [
    "Sangrado vaginal inmediatamente tras ruptura de membranas + Bradicardia fetal SEVERA y sostenida, en madre hemodinámicamente ESTABLE.",
    "Vasa Previa Rota. Clave conceptual: la sangre es de origen FETAL, no materno, por lo que un volumen pequeño es proporcionalmente devastador para el feto. Conducta: Cesárea de EMERGENCIA inmediata (minutos determinan la supervivencia fetal).",
    "Emergencias Obstétricas / Vasa Previa."
],
  },
  {
    id: "ucc-conv-2026-09-06-68",
    university: "UCC",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA",
    topic: "Infectología",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","infectolog-a","infectolog","a"],
    statement: "Un hombre de 42 años, agricultor, sin esquema de vacunación conocido desde la infancia (no recuerda refuerzos en la adultez), consulta por dificultad progresiva para abrir la boca (trismus) de 2 días de evolución, tras haber sufrido una herida punzante profunda y contaminada con tierra en el pie hace 8 días, que no recibió atención médica ni limpieza adecuada en su momento. Al examen físico presenta rigidez generalizada de los músculos del cuello y del abdomen (\"abdomen en tabla\" sin dolor a la palpación profunda), y una expresión facial característica con las cejas elevadas y las comisuras labiales retraídas hacia arriba, dando apariencia de una sonrisa forzada. Episodios de espasmos musculares generalizados intensos se desencadenan con estímulos mínimos (ruido, luz, tacto). ¿Cuál es el diagnóstico, y cuál es el tratamiento que combina neutralización de la toxina circulante, control de los espasmos, y erradicación del foco productor de la toxina?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Rabia; el tratamiento es exclusivamente de soporte, ya que no existe ningún tratamiento específico una vez que aparecen los síntomas.",
        distractorProfile: "wrong_diagnosis_wrong_exposure_history",
        incorrectFeedback: "No hay antecedente de mordedura o contacto con un animal potencialmente rabioso en esta viñeta; el antecedente de herida punzante contaminada con tierra, junto con el trismus y la \"risa sardónica\" característicos, apuntan específicamente al Tétanos, no a la Rabia.",
      },
      {
        id: "B",
        label: "B",
        text: "Tétanos; tratamiento combinado con Inmunoglobulina Antitetánica (neutraliza la toxina circulante no unida), Benzodiacepinas (control de espasmos), Metronidazol (erradicación de Clostridium tetani), y desbridamiento de la herida.",
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome Neuroléptico Maligno; tratamiento con Dantroleno y Bromocriptina como pilares terapéuticos principales.",
        distractorProfile: "wrong_diagnosis_missing_medication_history",
        incorrectFeedback: "No hay antecedente de uso de antipsicóticos ni otros fármacos bloqueadores dopaminérgicos en esta viñeta; el contexto de herida contaminada sin inmunización adecuada, junto con los hallazgos clínicos específicos, es característico del Tétanos, no del Síndrome Neuroléptico Maligno.",
      },
      {
        id: "D",
        label: "D",
        text: "Meningitis bacteriana con rigidez de nuca; tratamiento exclusivamente con antibióticos de amplio espectro, sin necesidad de inmunoglobulina específica.",
        distractorProfile: "wrong_diagnosis_missing_key_signs",
        incorrectFeedback: "La meningitis bacteriana no explica el trismus, la \"risa sardónica\" ni los espasmos generalizados desencadenados por estímulos mínimos; estos hallazgos, junto con el antecedente de herida contaminada, son específicos del Tétanos, que requiere inmunoglobulina antitetánica además de manejo antimicrobiano.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta **Tétanos**, causado por la neurotoxina (**tetanospasmina**) producida por *Clostridium tetani*, una bacteria anaeróbica que prolifera en heridas contaminadas con tierra, especialmente en pacientes sin inmunización adecuada (como este agricultor, sin esquema de refuerzos conocido). La toxina viaja en sentido retrógrado por los nervios periféricos hasta el sistema nervioso central, donde bloquea la liberación de neurotransmisores inhibitorios (GABA y glicina), generando una **hiperactividad muscular generalizada sin oposición**: trismus (el síntoma inicial más frecuente), la característica **\"risa sardónica\"** (sonrisa forzada por espasmo de los músculos faciales), rigidez generalizada, y espasmos musculares intensos desencadenados por estímulos mínimos (hiperreflexia extrema). El tratamiento requiere un abordaje multifacético: **Inmunoglobulina Antitetánica** (neutraliza la toxina que aún circula sin haberse unido al tejido nervioso, aunque no revierte el efecto de la toxina ya fijada), **Benzodiacepinas** en dosis altas (controlan los espasmos musculares y la rigidez), **Metronidazol** (antibiótico de elección para erradicar la bacteria productora de toxina, superior a la Penicilina que tiene cierto efecto antagonista GABA), y el **desbridamiento quirúrgico de la herida** (elimina el tejido necrótico anaerobio donde prolifera la bacteria).",
    keyPoints: [
    "Herida punzante contaminada con tierra, sin vacunación adecuada + Trismus + \"Risa sardónica\" + Rigidez generalizada + Espasmos desencadenados por estímulos mínimos.",
    "Tétanos (toxina de Clostridium tetani, bloquea neurotransmisores inhibitorios). Tratamiento MULTIFACÉTICO: Inmunoglobulina Antitetánica + Benzodiacepinas + Metronidazol + Desbridamiento de la herida. Es prevenible con esquema de vacunación adecuado.",
    "Infectología / Tétanos."
],
  },
  {
    id: "ucc-conv-2026-09-06-69",
    university: "UCC",
    examArea: "MEDICINA INTERNA - GASTROENTEROLOGÍA",
    topic: "Infecciones Sistémicas Poco Frecuentes",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","infecciones-sist-micas-poco-frecuentes","infecciones","sist","micas","poco","frecuentes"],
    statement: "Un hombre de 50 años consulta por diarrea crónica de aspecto esteatorreico (grasosa, voluminosa, de olor fétido) de 8 meses de evolución, asociada a pérdida de peso significativa (12 kg), dolor articular migratorio intermitente en grandes articulaciones, y episodios de confusión leve y fluctuante. Al examen físico hay adenopatías periféricas generalizadas no dolorosas y una hiperpigmentación cutánea difusa. Los laboratorios muestran anemia, hipoalbuminemia, y malabsorción confirmada por estudios de grasa fecal elevada. Una biopsia de intestino delgado (duodeno) muestra infiltración de la lámina propia por macrófagos espumosos que contienen material PAS-positivo (ácido peryódico de Schiff). ¿Cuál es el diagnóstico de esta enfermedad sistémica poco frecuente, y cuál es el tratamiento de PRIMERA LÍNEA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Enfermedad Celíaca; tratamiento con dieta estricta libre de gluten de por vida, sin necesidad de tratamiento antimicrobiano.",
        distractorProfile: "wrong_diagnosis_missing_systemic_features",
        incorrectFeedback: "La Enfermedad Celíaca no explica las artralgias migratorias, la hiperpigmentación cutánea ni los síntomas neurológicos descritos; además, el hallazgo histopatológico específico de macrófagos PAS-positivos en la biopsia es característico de la Enfermedad de Whipple, no de la enteropatía por gluten (que muestra atrofia vellositaria).",
      },
      {
        id: "B",
        label: "B",
        text: "Enfermedad de Whipple (por Tropheryma whipplei); tratamiento antibiótico prolongado (típicamente Ceftriaxona IV inicial, seguido de Trimetoprim-Sulfametoxazol oral por 1 año).",
      },
      {
        id: "C",
        label: "C",
        text: "Linfoma Intestinal Primario; tratamiento con quimioterapia sistémica como primera línea sin necesidad de estudio histopatológico adicional.",
        distractorProfile: "wrong_diagnosis_ignoring_specific_histology",
        incorrectFeedback: "El hallazgo histológico descrito (macrófagos espumosos PAS-positivos, no células linfomatosas atípicas) es específico y diagnóstico de la Enfermedad de Whipple, una condición infecciosa tratable con antibióticos, no un proceso linfoproliferativo maligno.",
      },
      {
        id: "D",
        label: "D",
        text: "Enfermedad de Crohn con compromiso extenso de intestino delgado; tratamiento con Corticoides sistémicos como primera línea.",
        distractorProfile: "dangerous_immunosuppression_in_infectious_disease",
        incorrectFeedback: "Administrar corticoides o inmunosupresores en la Enfermedad de Whipple (una infección bacteriana subyacente) puede empeorar dramáticamente el curso de la enfermedad al suprimir la respuesta inmune necesaria para controlar la infección; el hallazgo histológico específico descarta la Enfermedad de Crohn y confirma Whipple, que requiere tratamiento antibiótico, no inmunosupresor.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Enfermedad de Whipple**, una infección sistémica poco frecuente causada por la bacteria **Tropheryma whipplei**, que afecta predominantemente a hombres de mediana edad. La presentación clásica combina síntomas gastrointestinales (diarrea esteatorreica crónica con malabsorción y pérdida de peso significativa) con manifestaciones sistémicas extraintestinales: **artralgias migratorias** (frecuentemente el síntoma más temprano, precediendo los síntomas digestivos por años), **adenopatías**, **hiperpigmentación cutánea**, y compromiso neurológico (que puede incluir alteración cognitiva/confusión, y en casos característicos, mioritmia oculomasticatoria, un hallazgo patognomónico aunque poco frecuente). El diagnóstico se confirma mediante **biopsia de intestino delgado**, que muestra el hallazgo histopatológico característico y definitorio: infiltración de la lámina propia por **macrófagos espumosos con material intracelular PAS-positivo** (representando los restos bacterianos fagocitados). El tratamiento requiere **antibioticoterapia prolongada** para erradicar completamente la bacteria y prevenir recaídas (particularmente neurológicas, que pueden ser devastadoras): típicamente se inicia con un antibiótico de buena penetración al sistema nervioso central como **Ceftriaxona intravenosa** por 2 semanas, seguido de **Trimetoprim-Sulfametoxazol oral** durante aproximadamente **1 año**.",
    keyPoints: [
    "Hombre de mediana edad con Diarrea esteatorreica crónica + Artralgias migratorias + Adenopatías + Hiperpigmentación + síntomas neurológicos.; Biopsia duodenal: macrófagos espumosos PAS-positivos en lámina propia.",
    "Enfermedad de Whipple (Tropheryma whipplei). Tratamiento: Antibiótico prolongado (Ceftriaxona IV inicial → TMP-SMX oral por 1 año), NO es una enfermedad autoinmune ni maligna a pesar de su presentación multisistémica.",
    "Infecciones Sistémicas Poco Frecuentes / Enfermedad de Whipple."
],
  },
  {
    id: "ucc-conv-2026-09-06-70",
    university: "UCC",
    examArea: "PEDIATRÍA - MEDICINA LEGAL / TRAUMATOLOGÍA",
    topic: "Medicina Legal Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","medicina-legal-pedi-trica","medicina","legal","pedi","trica"],
    statement: "Un lactante de 4 meses es traído a urgencias por sus padres, quienes refieren que \"se cayó de la cama\" hace unas horas y desde entonces está más irritable y con vómito ocasional. Al examen físico, el lactante está letárgico, con fontanela anterior abombada, y se observan hemorragias retinianas bilaterales extensas en el examen de fondo de ojo. Una tomografía cerebral revela hematomas subdurales de diferentes densidades (algunos agudos, otros de aspecto subagudo/crónico), sugiriendo sangrados en momentos distintos. Un examen óseo esquelético completo (radiografías de cuerpo completo) revela múltiples fracturas costales posteriores en diferentes estadios de consolidación (algunas recientes, otras con callo óseo ya formado), sin explicación clara por el mecanismo de trauma referido por los padres. ¿Cuál es la sospecha diagnóstica prioritaria que debe generar este patrón de hallazgos, y cuál es la conducta legal/ética OBLIGATORIA del médico ante estos hallazgos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Osteogénesis Imperfecta; se debe solicitar estudio genético confirmatorio antes de considerar cualquier otra medida, sin necesidad de reportar el caso.",
        distractorProfile: "dangerous_alternative_diagnosis_delaying_protection",
        incorrectFeedback: "Aunque la Osteogénesis Imperfecta es un diagnóstico diferencial legítimo a considerar en fracturas múltiples, la combinación específica de hematomas subdurales de múltiples edades con hemorragias retinianas extensas y fracturas costales posteriores es mucho más característica de trauma no accidental; esperar un estudio genético antes de notificar retrasa peligrosamente la protección del menor ante una sospecha ya fundada.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome del Bebé Sacudido / Trauma No Accidental (Maltrato Infantil); es OBLIGATORIO reportar el caso a las autoridades de protección infantil competentes, independientemente de la relación con la familia.",
      },
      {
        id: "C",
        label: "C",
        text: "Deficiencia de Vitamina K con sangrado tardío; manejo exclusivamente con reposición de Vitamina K parenteral, sin necesidad de notificación a autoridades.",
        distractorProfile: "wrong_diagnosis_missing_skeletal_findings",
        incorrectFeedback: "La deficiencia de Vitamina K con sangrado tardío no explica las fracturas costales posteriores en diferentes estadios de consolidación; este hallazgo óseo específico, sumado a los hallazgos neurológicos y oftalmológicos, es altamente sugestivo de trauma no accidental y obliga a la notificación correspondiente.",
      },
      {
        id: "D",
        label: "D",
        text: "Trombocitopenia congénita no diagnosticada; manejo con transfusión de plaquetas y seguimiento hematológico ambulatorio exclusivamente.",
        distractorProfile: "wrong_diagnosis_missing_traumatic_pattern",
        incorrectFeedback: "Un trastorno plaquetario no explicaría el patrón específico de fracturas costales posteriores en múltiples estadios de consolidación ni los hematomas subdurales de diferentes edades; este patrón de hallazgos traumáticos incompatibles con el mecanismo referido exige la notificación obligatoria a las autoridades de protección infantil.",
      },
    ],
    correctOptionId: "B",
    explanation: "El lactante presenta hallazgos altamente característicos de **Trauma No Accidental (Maltrato Infantil)**, específicamente el patrón clásico del **Síndrome del Bebé Sacudido (Abusive Head Trauma)**: la **tríada** de hematomas subdurales (de múltiples edades/densidades, sugiriendo episodios repetidos de sangrado en momentos diferentes), hemorragias retinianas bilaterales extensas, y encefalopatía, junto con el hallazgo adicional de **fracturas costales posteriores en diferentes estadios de consolidación** (las fracturas costales posteriores son especialmente específicas de maltrato, ya que requieren fuerzas de compresión torácica que no ocurren en caídas domésticas simples, como sujetar y sacudir violentamente al lactante por el tórax), constituyen un patrón de lesiones **incompatible con el mecanismo de trauma referido** por los cuidadores (\"caída de la cama\"). Ante esta sospecha fundada, el médico tiene la **obligación legal y ética absoluta de reportar el caso a las autoridades de protección infantil competentes** (independientemente del vínculo o relación con la familia, y sin necesidad de tener certeza absoluta, ya que el umbral para reportar es la sospecha razonable, no la certeza), priorizando la seguridad del menor por encima de cualquier otra consideración.",
    keyPoints: [
    "Lactante con lesiones (hematomas subdurales de múltiples edades, hemorragias retinianas, fracturas en diferentes estadios de consolidación, especialmente costales posteriores) INCOMPATIBLES con el mecanismo de trauma referido.",
    "Trauma No Accidental / Síndrome del Bebé Sacudido. Obligación médica ABSOLUTA: reportar a las autoridades de protección infantil competentes ante sospecha razonable, independientemente de la relación con la familia o de tener certeza diagnóstica completa.",
    "Medicina Legal Pediátrica / Trauma No Accidental (Maltrato Infantil)."
],
  }
];
