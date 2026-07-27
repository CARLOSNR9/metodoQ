import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #1 (26 jul 2026) · Preguntas #31–#40.
 */
export const UMNG_CONV_2026_07_26_31_40_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-2026-07-26-31",
    university: "UMNG",
    examArea: "TRAUMA / NEUROCIRUGÍA",
    topic: "NEUROCIRUGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un cadete de 20 años sufre un golpe con un bate en la región temporal derecha durante una riña. Inicialmente pierde el conocimiento por 1 minuto, pero luego se levanta, conversa de manera coherente y rechaza atención médica (Intervalo Lúcido). Dos horas después, en su dormitorio, presenta cefalea severa, vómitos en proyectil y deterioro rápido del estado de conciencia. Al ingresar a urgencias: Glasgow 6 (O1, V2, M3), PA 170/90 mmHg, FC 50 lpm. Al examen pupilar se evidencia midriasis paralítica de la pupila derecha (no responde a la luz) y hemiparesia izquierda. ¿Cuál es el diagnóstico anatómico más probable y el vaso sanguíneo responsable de esta catástrofe?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hematoma Subdural Agudo / Ruptura de venas puente corticales.",
        distractorProfile: "wrong_vessel_and_onset",
        incorrectFeedback: "El hematoma subdural es de origen venoso (venas puente), típico en ancianos o alcohólicos tras traumas menores, y su evolución clínica suele ser más lenta y progresiva, rara vez presentando el clásico 'intervalo lúcido' tan demarcado."
      },
      {
        id: "B",
        label: "B",
        text: "Hematoma Epidural / Laceración de la arteria meníngea media."
      },
      {
        id: "C",
        label: "C",
        text: "Hemorragia Subaracnoidea Traumática / Ruptura de aneurisma de la arteria comunicante posterior.",
        distractorProfile: "aneurysm_vs_trauma",
        incorrectFeedback: "Una hemorragia subaracnoidea traumática causa cefalea y alteración de conciencia, pero no genera focalización pupilar por herniación tan aguda ni el patrón de intervalo lúcido clásico."
      },
      {
        id: "D",
        label: "D",
        text: "Contusión Cerebral Hemorrágica / Laceración del parénquima del lóbulo temporal.",
        distractorProfile: "parenchymal_vs_extraparenchymal",
        incorrectFeedback: "Las contusiones parenquimatosas generan edema y déficit focal inmediato, no un espacio libre de síntomas seguido de compresión masiva lateralizada."
      }
    ],
    correctOptionId: "B",
    explanation: "Es la descripción de libro de un hematoma epidural (Hematoma Epidural agudo complicado con Herniación Uncal). La presentación bifásica (pérdida de conciencia inicial + \"Intervalo Lúcido\" + deterioro fulminante) es patognomónica. El golpe en la región temporal lacera clásicamente la arteria meníngea media. La triada de Cushing (hipertensión + bradicardia) indica hipertensión endocraneana (HIC) severa. La midriasis derecha (compresión del III par craneal ipsilateral) y hemiparesia izquierda (compresión del pedúnculo cerebral contralateral) configuran el síndrome de Herniación Uncal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nColega, este es el paciente que te mata en urgencias si lo dejas sentado en la sala de espera porque \"está hablando normal\". Ese \"intervalo lúcido\" es el tiempo que tarda la sangre arterial a 120 mmHg en despegar la duramadre del hueso. Cuando lo logra, el hematoma aplasta el lóbulo temporal contra el tallo cerebral (herniación). Si ves que el paciente respira lento, la presión sube y el corazón se pone lento (Reflejo de Cushing), el cerebro se está asfixiando. ¡Tubo a la tráquea, manitol o salina hipertónica y a quirófano en menos de 30 minutos!",
    keyPoints: [
      "Cuando veas:",
      "• Trauma temporal + Intervalo lúcido + Pupila dilatada ipsilateral + Hemiparesia contralateral.",
      "Debes pensar en:",
      "Hematoma Epidural por ruptura de la Arteria Meníngea Media. TAC: hiperdensidad biconvexa.",
      "Tema: ATLS / Neurocirugía Trauma Craneoencefálico."
    ]
  },
  {
    id: "umng-conv-2026-07-26-32",
    university: "UMNG",
    examArea: "MEDICINA TROPICAL / INFECTOLOGÍA",
    topic: "INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un soldado de 30 años es evacuado tras pasar dos semanas de patrullaje en zonas pantanosas e inundadas del Chocó. Consulta por 7 días de fiebre alta, escalofríos, mialgias incapacitantes (especialmente en las pantorrillas) y cefalea intensa. Al examen físico: ictericia marcada en piel y escleras, inyección conjuntival severa bilateral (sin secreción purulenta) y hepatomegalia. Los laboratorios muestran: Bilirrubina total 8.5 mg/dL (a predominio directo), Creatinina 3.2 mg/dL, BUN 85 mg/dL, Plaquetas 40.000 y CPK 1.500 U/L. Gota gruesa negativa para hemoparásitos. ¿Cuál es el diagnóstico más probable y el tratamiento antibiótico de elección intravenoso?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Malaria severa por Plasmodium falciparum / Artesunato intravenoso.",
        distractorProfile: "similar_tropical_syndrome",
        incorrectFeedback: "Aunque la clínica de fiebre, ictericia y falla renal es idéntica a la malaria severa, la gota gruesa negativa, la inyección conjuntival y el dolor en pantorrillas apuntan lejos del Plasmodium y directo a la bacteria espiroqueta."
      },
      {
        id: "B",
        label: "B",
        text: "Fiebre Amarilla / Tratamiento de soporte exclusivo (no hay antibiótico efectivo).",
        distractorProfile: "viral_hemorrhagic_fever",
        incorrectFeedback: "La fiebre amarilla da ictericia y falla renal, pero característicamente presenta el Signo de Faget (fiebre alta con bradicardia relativa) y la inyección conjuntival no es su sello clínico."
      },
      {
        id: "C",
        label: "C",
        text: "Leptospirosis (Síndrome de Weil) / Penicilina G cristalina o Ceftriaxona."
      },
      {
        id: "D",
        label: "D",
        text: "Dengue Grave / Cristaloides isotónicos y transfusión de plaquetas.",
        distractorProfile: "common_vector_borne",
        incorrectFeedback: "El dengue no suele cursar con falla renal oligúrica aguda ni ictericia severa como presentación principal, predominando la fuga capilar y el choque hipovolémico."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con Leptospirosis en su forma grave (Síndrome de Weil). El antecedente epidemiológico (aguas estancadas/pantanos) + Inyección conjuntival + Mialgias en pantorrillas severas son la clave. El Síndrome de Weil es la tríada de: Ictericia (bilirrubina a predominio directo) + Lesión Renal Aguda + Diátesis hemorrágica/Trombocitopenia. El tratamiento de primera línea avalado por la OMS y guías colombianas para la fase severa (hospitalizada) es la Penicilina G intravenosa o la Ceftriaxona. (Para la fase leve ambulatoria se usa Doxiciclina).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si ves a un soldado o a un campesino que se metió a una poza de agua estancada y llega con los ojos rojos como un vampiro y sin poder caminar por el dolor en los gemelos, es una Leptospirosis. Los ratones orinan el agua, la espiroqueta entra por la piel macerada y destruye los capilares del hígado y el riñón. La Doxiciclina es fabulosa si el paciente llega caminando, pero si llega amarillo como un Simpson y sin orinar (Síndrome de Weil), trátalo con Ceftriaxona por la vena o lo perderás por diálisis.",
    keyPoints: [
      "Cuando veas:",
      "• Aguas estancadas/inundaciones + Inyección conjuntival + Dolor en pantorrillas.",
      "Debes pensar en:",
      "Leptospirosis. Si hay Ictericia + Falla Renal = Síndrome de Weil.",
      "Tema: Infectología / Zoonosis Tropicales."
    ]
  },
  {
    id: "umng-conv-2026-07-26-33",
    university: "UMNG",
    examArea: "MEDICINA DE URGENCIAS / TOXICOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Se desata un incendio estructural en unos dormitorios militares con quema abundante de plásticos y poliuretano. Un soldado de 21 años es rescatado inconsciente del interior de la habitación. Al ingreso a urgencias: Glasgow 4, PA 70/40 mmHg, FC 140 lpm, FR 32 rpm. Presenta hollín en fosas nasales y boca. La pulsoximetría marca SatO2 de 99%. Se toman unos gases arteriales y venosos centrales que reportan: pH 6.95, HCO3 6 mEq/L, Lactato 14 mmol/L. Extrañamente, la sangre venosa extraída del catéter central luce de un color \"rojo brillante\" muy similar a la arterial. ¿Cuál es el antídoto específico que debe administrarse de INMEDIATO ante esta sospecha toxicológica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hidroxocobalamina intravenosa."
      },
      {
        id: "B",
        label: "B",
        text: "Oxígeno hiperbárico y azul de metileno.",
        distractorProfile: "methemoglobinemia_treatment",
        incorrectFeedback: "El azul de metileno es el tratamiento para la Metahemoglobinemia, no para el cianuro."
      },
      {
        id: "C",
        label: "C",
        text: "Flumazenil y Naloxona.",
        distractorProfile: "common_antidote_cocktail",
        incorrectFeedback: "Estos son antídotos para benzodiacepinas y opioides; no tienen efecto en la asfixia celular química."
      },
      {
        id: "D",
        label: "D",
        text: "Tiosulfato de sodio y Nitrito de amilo exclusivamente.",
        distractorProfile: "obsolete_cyanide_kit",
        incorrectFeedback: "Aunque el 'Kit de Cianuro' clásico se ha usado por décadas, los nitritos actúan induciendo metahemoglobinemia. En una víctima de incendio que ya tiene intoxicación por Monóxido de Carbono (CO), inducir metahemoglobinemia compromete aún más el transporte de oxígeno y puede ser letal."
      }
    ],
    correctOptionId: "A",
    explanation: "El diagnóstico es intoxicación aguda por Cianuro (asociada a intoxicación por Monóxido de Carbono). Combustión de plásticos/poliuretano + Acidosis láctica masiva + Sangre venosa rojo brillante (arterialización venosa) = Bloqueo de la Citocromo C Oxidasa. Las células no pueden extraer ni usar el oxígeno de la sangre, por lo que la sangre venosa regresa a los pulmones tan rica en O2 como cuando salió (rojo brillante). La Hidroxocobalamina (precursor de vitamina B12) es el antídoto moderno de primera línea para el cianuro. Se une directamente al cianuro intravascular formando cianocobalamina (Vitamina B12), la cual es inofensiva y se excreta en la orina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nSi a un paciente asfixiado en un incendio lo ves con la sangre venosa igual de roja que la arterial, es porque su mitocondria se paralizó. El oxígeno pasa de largo. El cianuro bloquea el motor celular. Si le das el antiguo antídoto de nitritos (Opción D), oxidas la poca hemoglobina sana que le queda, y lo rematas. La Hidroxocobalamina es una maravilla biológica: atrapa el cianuro, se convierte en Vitamina B12 y el paciente la orina rosada. ¡Súper elegante y salva vidas!",
    keyPoints: [
      "Cuando veas:",
      "• Incendio en espacio cerrado con plásticos + Acidosis láctica severa sin hipoxia (SatO2 99%) + Sangre venosa roja brillante.",
      "Debes pensar en:",
      "Intoxicación por Cianuro. Antídoto de elección: Hidroxocobalamina.",
      "Tema: Toxicología / Intoxicación por Humo y Gases."
    ]
  },
  {
    id: "umng-conv-2026-07-26-34",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL / VASCULAR",
    topic: "CIRUGÍA VASCULAR",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un joven de 25 años ingresa al servicio de urgencias tras recibir un disparo en la cara posterior de la rodilla derecha (fosa poplítea). Al examen físico, el paciente está ansioso. La extremidad inferior derecha se encuentra pálida, fría, con un llenado capilar de 5 segundos. No se palpan los pulsos pedio ni tibial posterior (estando los contralaterales presentes). A través de la herida se observa un sangrado pulsátil rojo rutilante y la formación de un hematoma rápidamente expansivo en la fosa poplítea. ¿Cuál es el siguiente paso diagnóstico o terapéutico más adecuado según los lineamientos de ATLS en trauma vascular periférico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar una Angio-TC de miembros inferiores urgente para localizar exactamente la lesión arterial.",
        distractorProfile: "unnecessary_imaging_delay",
        incorrectFeedback: "Los estudios de imagen son mandatorios cuando el paciente tiene 'Signos Blandos'. Perder tiempo en imágenes cuando el vaso está francamente roto condena la extremidad a la amputación por isquemia prolongada."
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar una Ecografía Doppler arterial y venosa en el servicio de urgencias.",
        distractorProfile: "inadequate_imaging_modality",
        incorrectFeedback: "Igualmente innecesario y retrasaría el manejo definitivo ante signos duros de trauma vascular."
      },
      {
        id: "C",
        label: "C",
        text: "Medir el Índice Tobillo-Brazo (ITB) y, si es menor a 0.9, proceder con arteriografía formal.",
        distractorProfile: "soft_signs_workup",
        incorrectFeedback: "El ITB y la arteriografía están indicados para signos blandos, no para isquemia clínica severa y sangrado activo."
      },
      {
        id: "D",
        label: "D",
        text: "Trasladar inmediatamente al paciente al quirófano para exploración quirúrgica vascular."
      }
    ],
    correctOptionId: "D",
    explanation: "El paciente presenta Trauma vascular periférico agudo con 'Signos Duros' de lesión vascular (sangrado pulsátil, hematoma expansivo, palidez, ausencia de pulsos). Los pacientes con Signos Duros (Ausencia de pulsos, Isquemia distal clínica [6 Ps], Sangrado pulsátil activo, Hematoma pulsátil o expansivo, Frémito o Soplo en la herida) tienen indicación de EXPLORACIÓN QUIRÚRGICA INMEDIATA sin necesidad de estudios de imagen previos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la arteria poplítea no perdona. A las 6 horas de estar ligada, el músculo se muere. Si un paciente llega botando sangre a chorros por detrás de la rodilla y el pie está frío como el hielo, ¡no llames al radiólogo! Todo ese tiempo la pierna se está ahogando. Llama al cirujano vascular o al general, preparen la sala, pasen heparina sistémica (si no hay contraindicación) y a reparar ese vaso con un injerto de safena. El bisturí es el único Doppler que necesitas aquí.",
    keyPoints: [
      "Cuando veas:",
      "• Trauma penetrante de extremidades con Signos DUROS (Ausencia de pulso, soplo, hematoma que crece, sangrado a chorro).",
      "Debes pensar en:",
      "QUIRÓFANO DIRECTO. Signos blandos ameritan estudios de imagen, los duros NO.",
      "Tema: ATLS / Trauma Vascular Periférico."
    ]
  },
  {
    id: "umng-conv-2026-07-26-35",
    university: "UMNG",
    examArea: "MEDICINA INTERNA / NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un paciente masculino de 55 años, en su quinto día de recuperación posquirúrgica tras un reemplazo total de cadera, presenta de forma súbita disnea severa, dolor torácico pleurítico y diaforesis. Minutos después, pierde el conocimiento (síncope) y es reanimado en el piso. Al evaluarlo: paciente estuporoso, cianótico, PA 70/40 mmHg, FC 135 lpm, FR 35 rpm, SatO2 78% con FiO2 al 100%. Hay ingurgitación yugular marcada. El electrocardiograma (ECG) muestra taquicardia sinusal, bloqueo completo de rama derecha de novo y el patrón S1Q3T3. Un ecocardiograma a los pies de la cama revela el ventrículo derecho severamente dilatado y con hipocinesia de su pared libre (Signo de McConnell). Teniendo en cuenta la gravedad inminente del cuadro, ¿cuál es el tratamiento farmacológico OBLIGATORIO Y DEFINITIVO en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Infusión de Heparina No Fraccionada a dosis plenas de anticoagulación.",
        distractorProfile: "stable_pe_treatment",
        incorrectFeedback: "La heparina evitará que el trombo siga creciendo, pero NO disuelve el coágulo gigante que ya está obstruyendo la arteria pulmonar principal. En un TEP Masivo con choque, la heparina sola es insuficiente y el paciente morirá de falla ventricular derecha."
      },
      {
        id: "B",
        label: "B",
        text: "Administración de Alteplasa (rt-PA) intravenosa inmediata para trombólisis sistémica."
      },
      {
        id: "C",
        label: "C",
        text: "Colocación de un filtro de vena cava inferior de urgencia.",
        distractorProfile: "prevention_not_treatment",
        incorrectFeedback: "El filtro de vena cava previene nuevos émbolos si hay contraindicación absoluta para anticoagular, pero no arregla el colapso hemodinámico actual."
      },
      {
        id: "D",
        label: "D",
        text: "Administración de Rivaroxabán o Apixabán oral por sonda nasogástrica.",
        distractorProfile: "doac_in_shock",
        incorrectFeedback: "Los anticoagulantes directos orales (DOACs) son excelentes para el manejo a largo plazo del TEP estable (bajo riesgo), pero su absorción es nula en el choque y no son fibrinolíticos."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un Tromboembolismo Pulmonar (TEP) Masivo (o de alto riesgo) indicado por Inestabilidad hemodinámica profunda (PA 70/40, síncope, estupor) + Falla del ventrículo derecho aguda demostrada (Ecocardiograma con dilatación del VD). La intervención de primera línea recomendada por las guías para salvar la vida es la Fibrinólisis Sistémica (Alteplasa, Tenecteplasa). Disuelve el coágulo en minutos, destapando el pulmón y salvando al ventrículo derecho.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEl patrón S1Q3T3 que te enseñaron en la universidad es famoso, pero solo aparece en el 20% de los pacientes. Lo que no puedes fallar es en la conducta. El ventrículo derecho de este paciente está inflado como un globo tratando de empujar sangre contra una pared de concreto (el coágulo). Si le das solo Heparina, estás cruzando los dedos para que sus propias enzimas disuelvan la pared antes de que el ventrículo falle. ¡No hay tiempo! Ponle la Alteplasa, rompe el coágulo y revive ese corazón derecho.",
    keyPoints: [
      "Cuando veas:",
      "• TEP Inestable/Masivo (Hipotensión <90 mmHg o Choque) + Falla ventricular derecha aguda.",
      "Debes pensar en:",
      "Trombólisis sistémica inmediata (Alteplasa/rt-PA).",
      "Tema: Neumología / Tromboembolismo Pulmonar."
    ]
  },
  {
    id: "umng-conv-2026-07-26-36",
    university: "UMNG",
    examArea: "PEDIATRÍA / CIRUGÍA PEDIÁTRICA",
    topic: "CIRUGÍA PEDIÁTRICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un lactante varón de 8 meses, previamente sano, es llevado a urgencias por la madre debido a episodios de llanto inconsolable de inicio brusco. La madre describe que el niño grita, palidece y flexiona las rodillas hacia el abdomen durante unos minutos, luego se calma y parece letárgico, repitiendo el ciclo cada 20 minutos. Hace una hora presentó vómito alimentario y acaba de realizar una deposición sanguinolenta mezclada con moco (aspecto de \"jalea de grosella\"). Al examen físico se palpa una masa abdominal en forma de \"salchicha\" en el cuadrante superior derecho, y la fosa ilíaca derecha se percibe vacía (Signo de Dance). El diagnóstico se confirma mediante ecografía. ¿Cuál es el tratamiento inicial de elección (Gold Standard) para este cuadro clínico en ausencia de signos de peritonitis generalizada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reducción hidrostática (enema de bario o aire) bajo guía fluoroscópica o ecográfica."
      },
      {
        id: "B",
        label: "B",
        text: "Cirugía abierta inmediata para resección intestinal y anastomosis.",
        distractorProfile: "premature_surgery",
        incorrectFeedback: "La cirugía se reserva ESTRICTAMENTE para casos donde el enema falla, o si el paciente ingresa inestable, con signos de peritonitis franca o neumoperitoneo (perforación)."
      },
      {
        id: "C",
        label: "C",
        text: "Observación clínica estrecha por 24 horas y administración de Buscapina y procinéticos.",
        distractorProfile: "harmful_conservative_management",
        incorrectFeedback: "Dar antiespasmódicos es mala praxis. El intestino se está isquemizando por estrangulación de la vasculatura mesentérica; retrasar la reducción causa necrosis y peritonitis."
      },
      {
        id: "D",
        label: "D",
        text: "Manejo con hidratación intravenosa, antibióticos y paso de sonda nasogástrica exclusivamente.",
        distractorProfile: "incomplete_treatment",
        incorrectFeedback: "Medidas de soporte importantes, pero ineficaces para revertir la obstrucción anatómica."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta Intususcepción intestinal (Invaginación intestinal). Tríada clásica: dolor abdominal intermitente (llanto con flexión de piernas) + deposición en \"jalea de grosella\" + masa en salchicha en cuadrante superior derecho, sumado al Signo de Dance (fosa ilíaca derecha vacía). En pacientes estables sin evidencia de perforación intestinal o peritonitis, el tratamiento de primera línea curativo y diagnóstico a la vez es la reducción no quirúrgica mediante presión neumática (aire) o hidrostática (solución salina o bario) aplicada a través de un enema rectal, usualmente bajo visión ecográfica o fluoroscópica. Tiene una tasa de éxito superior al 80%.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagínate un calcetín volteado hacia adentro. Eso es la intususcepción: el íleon se metió dentro del ciego y el colon. La sangre en moco de grosella es el llanto del intestino que se está gangrenando. Antes los abríamos a todos, pero ahora los radiólogos pediatras hacen magia metiendo una sonda por el recto y bombeando aire a presión. Esa fuerza infla el colon desde abajo y \"desdobla\" el calcetín. Solo si ves el vientre en tabla (peritonitis) asumes que ya se perforó y saltas directo a cirugía.",
    keyPoints: [
      "Cuando veas:",
      "• Deposición en jalea de grosella + Masa en salchicha + Lactante.",
      "Debes pensar en:",
      "Intususcepción. El tratamiento primario en ausencia de peritonitis es el Enema neumático o hidrostático.",
      "Tema: Cirugía Pediátrica / Obstrucción Intestinal."
    ]
  },
  {
    id: "umng-conv-2026-07-26-37",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA / TRAUMA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Gestante de 34 semanas es traída a urgencias tras sufrir un accidente de tránsito frontal grave como pasajera. A su ingreso, la paciente se queja de un dolor abdominal generalizado, continuo y desgarrador, que no cede. Al examen físico: la PA es de 90/60 mmHg, FC 120 lpm. El abdomen está tenso, y el útero se palpa \"leñoso\" (duro como una tabla), sin relajarse en ningún momento. Se evidencia un leve sangrado vaginal de color oscuro. El monitor fetal muestra una frecuencia cardíaca fetal basal de 90 lpm (bradicardia severa sostenida) sin variabilidad. ¿Cuál es el diagnóstico más probable y la conducta obstétrica a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Placenta Previa Sangrante / Reposo absoluto, tocolíticos y maduración pulmonar.",
        distractorProfile: "painless_bleeding_mimic",
        incorrectFeedback: "La Placenta Previa se presenta clásicamente como un sangrado vaginal ROJO RUTILANTE (fresco), abundante, y característicamente INDOLORO. El útero suele estar blando y relajado."
      },
      {
        id: "B",
        label: "B",
        text: "Ruptura Prematura de Membranas Traumática / Inducción del trabajo de parto con Oxitocina.",
        distractorProfile: "wrong_obstetric_event",
        incorrectFeedback: "Una RPM no causa útero leñoso ni sangrado oscuro. Inducir el parto con bradicardia fetal aguda condenaría al feto a la muerte intrauterina inmediata."
      },
      {
        id: "C",
        label: "C",
        text: "Abruptio Placentae (Desprendimiento Prematuro de Placenta Normoinserta) / Cesárea de emergencia inmediata."
      },
      {
        id: "D",
        label: "D",
        text: "Ruptura Uterina / Ecografía abdominal para confirmar el defecto y manejo expectante.",
        distractorProfile: "wrong_tone_and_management",
        incorrectFeedback: "La ruptura uterina se caracteriza clásicamente por cese súbito de las contracciones, pérdida de la estación fetal y palpación fácil de las partes fetales bajo la piel materna. Su manejo es cirugía inmediata, jamás expectante."
      }
    ],
    correctOptionId: "C",
    explanation: "El traumatismo abdominal por desaceleración \"arranca\" la placenta de la pared uterina (Abruptio Placentae Grado III). La sangre retroplacentaria irrita el miometrio causando una contracción tetánica (útero leñoso, durísimo, doloroso). Ante sufrimiento fetal inminente (bradicardia severa) y madre con inestabilidad, la única vía de salvamento materno-fetal es la Cesárea de emergencia instantánea.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEn obstetricia de urgencias, la hipertonía uterina es el llanto final de un útero que tiene un coágulo gigante despegando la placenta. El bebé no tiene de dónde sacar oxígeno; la FC de 90 lpm significa que su corazón se está parando por asfixia. Tratar de frenar este parto con tocolíticos (para detener \"las contracciones\") es letal. Abre el abdomen de inmediato. Muchas veces te encuentras el útero de color violeta oscuro, lleno de sangre miometrial, conocido como el temido Útero de Couvelaire.",
    keyPoints: [
      "Cuando veas:",
      "• Sangrado oscuro + Dolor pélvico continuo + Útero hiper-tónico (leñoso) +/- Trauma.",
      "Debes pensar en:",
      "Desprendimiento Prematuro de Placenta (Abruptio). Indicación de Cesárea de Urgencia inmediata si el feto está vivo.",
      "Tema: Ginecología y Obstetricia / Hemorragias de la Segunda Mitad del Embarazo."
    ]
  },
  {
    id: "umng-conv-2026-07-26-38",
    university: "UMNG",
    examArea: "MEDICINA INTERNA / GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un hombre de 62 años, conocido por tener cirrosis hepática por virus de la hepatitis C (Child-Pugh C) y ascitis severa a tensión, es traído por su familia debido a fiebre de 38.3°C, dolor abdominal difuso y franco deterioro de su estado de conciencia (encefalopatía hepática grado III) desde hace 24 horas. En urgencias, se realiza una paracentesis diagnóstica del líquido ascítico con los siguientes resultados: Proteínas 1.2 g/dL, Gradiente de albúmina suero-ascitis (GASA) de 1.8 g/dL, recuento de leucocitos totales 950/mm³ con 80% de Polimorfonucleares (PMN). ¿Cuál es la conducta diagnóstica y terapéutica más apropiada a instaurar INMEDIATAMENTE sin esperar resultados de cultivos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Diagnosticar Peritonitis Bacteriana Espontánea e iniciar infusión de Ceftriaxona o Cefotaxima intravenosa."
      },
      {
        id: "B",
        label: "B",
        text: "Diagnosticar Ascitis tuberculosa e iniciar protocolo tetra-conjugado antifímico.",
        distractorProfile: "wrong_ascitic_fluid_profile",
        incorrectFeedback: "La ascitis tuberculosa produce característicamente un líquido con predominio de LINFOCITOS, proteínas elevadas (> 2.5 g/dL) y un GASA < 1.1 g/dL."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar diuréticos de asa y espironolactona a altas dosis para reducir la hipertensión portal y la ascitis.",
        distractorProfile: "diuretic_in_infection_risk",
        incorrectFeedback: "Los diuréticos tratan la retención de sodio crónica, pero están contraindicados en la PBE aguda grave, ya que el paciente cursa con vasodilatación esplácnica, riesgo de falla renal aguda y Síndrome Hepatorrenal, necesitando expansión vascular (Albúmina), no depleción."
      },
      {
        id: "D",
        label: "D",
        text: "Diagnosticar Peritonitis Secundaria por perforación intestinal y programar laparotomía exploratoria.",
        distractorProfile: "surgical_misdiagnosis",
        incorrectFeedback: "La peritonitis secundaria se sospecha si el líquido tiene múltiples bacterias diferentes, proteínas MUY altas (> 1 g/dL pero suele ser >2.5), glucosa baja (< 50 mg/dL) y LDH alta."
      }
    ],
    correctOptionId: "A",
    explanation: "El criterio diagnóstico universal e inamovible de la Peritonitis Bacteriana Espontánea (PBE) es un recuento de PMN ≥ 250 cél/mm³ en el líquido ascítico. Aquí: 950 totales x 80% = 760 PMN. No se necesita esperar el cultivo (que sale negativo hasta en un 40% de los casos). El tratamiento empírico de elección es una Cefalosporina de 3ra generación intravenosa (Cefotaxima o Ceftriaxona) para cubrir bacterias entéricas que translocaron, asociada frecuentemente a albúmina IV para prevenir falla renal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEn el paciente cirrótico, la ascitis deja de ser agua inofensiva y se vuelve un caldo de cultivo. Las bacterias del intestino atraviesan la pared intestinal porque el sistema inmune portal está destruido (translocación bacteriana). Si esperas a que el cultivo crezca a las 48 horas, el paciente ya estará en shock séptico. Cefalosporinas de tercera para matar a la E. coli de entrada. Y cuidado con la orina: si le das diuréticos (Opción C) cuando está infectado, le destruyes los riñones y te hace un Síndrome Hepatorrenal letal.",
    keyPoints: [
      "Cuando veas:",
      "• Cirrótico con fiebre o encefalopatía + PMN en líquido ascítico > 250/mm³.",
      "Debes pensar en:",
      "Peritonitis Bacteriana Espontánea (PBE). Tratamiento = Ceftriaxona o Cefotaxima intravenosa INMEDIATA + Albúmina IV.",
      "Tema: Gastroenterología / Complicaciones de Cirrosis."
    ]
  },
  {
    id: "umng-conv-2026-07-26-39",
    university: "UMNG",
    examArea: "MEDICINA DE URGENCIAS / ENDOCRINOLOGÍA",
    topic: "ENDOCRINOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Una mujer de 32 años, con antecedente de Enfermedad de Graves en abandono de tratamiento, es ingresada a la unidad de cuidados intensivos por cuadro de 24 horas de fiebre de 40.2°C, palpitaciones severas, vómito y agitación psicomotora que ha progresado a delirio franco. Se sospecha una Tormenta Tiroidea, precipitada probablemente por una neumonía basal incipiente. Signos vitales: PA 160/70 mmHg, FC 175 lpm, SatO2 94%. El equipo médico decide iniciar el manejo farmacológico de rescate. ¿Cuál es la SECUENCIA correcta de administración de los medicamentos específicos en las primeras horas para evitar empeorar la crisis?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Propiltiouracilo (PTU), seguido de Yodo inorgánico (Lugol) y finalmente Propranolol intravenoso.",
        distractorProfile: "delayed_beta_blocker",
        incorrectFeedback: "Retrasar el betabloqueador (propranolol) expone al paciente a muerte súbita por arritmias o falla cardiaca de alto gasto, debe ser el paso 1."
      },
      {
        id: "B",
        label: "B",
        text: "Propranolol intravenoso, seguido de Propiltiouracilo (PTU) altas dosis, seguido 1 a 2 horas después de Yodo inorgánico, y Glucocorticoides IV."
      },
      {
        id: "C",
        label: "C",
        text: "Yodo inorgánico (Solución de Lugol) en dosis altas de choque, seguido de Propranolol intravenoso y Metimazol.",
        distractorProfile: "jod_basedow_trigger",
        incorrectFeedback: "El error más letal en endocrinología. Si das yodo inorgánico antes de haber bloqueado la fábrica (con PTU), la tiroides hiperactiva usará ese yodo extra como combustible masivo para crear MÁS hormona tiroidea, exacerbando brutalmente la tormenta (Efecto Jod-Basedow)."
      },
      {
        id: "D",
        label: "D",
        text: "Glucocorticoides intravenosos en monoterapia asociados a enfriamiento físico extremo.",
        distractorProfile: "incomplete_hormonal_blockade",
        incorrectFeedback: "Los corticoides son parte del soporte, pero no frenan la cascada simpática adrenérgica letal ni bloquean la producción hormonal primaria de forma aislada."
      }
    ],
    correctOptionId: "B",
    explanation: "El algoritmo de la ATA (Asociación Americana de Tiroides) para la Tormenta Tiroidea exige este orden estricto: 1) Bloqueo periférico autonómico: Propranolol (frena la taquicardia que mata a la paciente e inhibe la conversión de T4 a T3). 2) Bloqueo de SÍNTESIS nueva: Propiltiouracilo (PTU) o Metimazol (Bloquea la maquinaria de la tiroides). 3) Bloqueo de LIBERACIÓN: Yodo inorgánico (Lugol o Yoduro de potasio). CRUCIAL: Debe administrarse al menos 1 hora DESPUÉS del PTU (Efecto Wolff-Chaikoff). 4) Bloqueo de conversión periférica/Soporte adrenal: Glucocorticoides (Hidrocortisona o Dexametasona IV).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nSi a un paciente ardiendo en fiebre y con el corazón a 180 latidos por una tiroides loca le echas Yodo en el primer paso (Opción C), le estás echando gasolina al fuego. Le acabas de dar los ladrillos perfectos a la glándula para que arme millones de moléculas de tiroxina en segundos. Primero, calmas el corazón con Propranolol. Segundo, cierras la fábrica de cemento con el PTU. Cuando estás seguro de que la maquinaria está rota (1 hora después), ahogas la glándula con el yodo de Lugol para que la hormona que ya estaba hecha no pueda salir a la sangre.",
    keyPoints: [
      "Cuando veas:",
      "• Tormenta Tiroidea (Fiebre + Taquicardia + Delirio en Hx de Hipertiroidismo).",
      "Debes pensar en:",
      "El orden estricto: 1. Betabloqueador -> 2. Antitiroideo (PTU) -> ESPERAR 1 HORA -> 3. Yodo inorgánico -> 4. Corticoides.",
      "Tema: Urgencias Endocrinológicas / Tormenta Tiroidea."
    ]
  },
  {
    id: "umng-conv-2026-07-26-40",
    university: "UMNG",
    examArea: "MEDICINA PREVENTIVA / INFECTOLOGÍA TRAUMA",
    topic: "INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un soldado de 20 años es traído al puesto de salud tras pisar una tabla con un clavo oxidado profundamente incrustado en el pie durante unas reparaciones en una granja abandonada (entorno altamente contaminado con heces de caballo y tierra). La herida es punzante, sangró poco, y sus bordes están macerados. El soldado manifiesta no recordar absolutamente nada sobre sus vacunas infantiles, no tiene carné y nunca ha recibido refuerzos durante su servicio militar. Luego del lavado quirúrgico profundo y el desbridamiento, ¿cuál es la profilaxis antitetánica EXACTA recomendada para este paciente según las guías mundiales y colombianas?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aplicar Toxoide Tetánico (Vacuna Td) exclusivamente, con recomendación de refuerzo a los 10 años.",
        distractorProfile: "incomplete_prophylaxis_high_risk",
        incorrectFeedback: "Esta profilaxis es válida solo para heridas limpias y menores en un paciente con antecedente de vacunación incompleta, pero es peligrosamente insuficiente para una herida de alto riesgo tetánico."
      },
      {
        id: "B",
        label: "B",
        text: "Aplicar Inmunoglobulina Antitetánica Humana (IGT) exclusivamente en el glúteo para generar inmunidad rápida.",
        distractorProfile: "passive_only_immunity",
        incorrectFeedback: "La inmunoglobulina proporciona anticuerpos rápidos pero de corta duración. Sin la vacuna simultánea, el paciente quedará sin inmunidad activa a largo plazo."
      },
      {
        id: "C",
        label: "C",
        text: "Aplicar Toxoide Tetánico (Vacuna Td) intramuscular en un brazo e Inmunoglobulina Antitetánica Humana (IGT) en el sitio anatómico contralateral simultáneamente."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar esquema completo de vacunación con DPT y observación estrecha sin necesidad de Inmunoglobulina.",
        distractorProfile: "delayed_immunity_risk",
        incorrectFeedback: "Iniciar solo las vacunas tomará semanas en generar anticuerpos protectores. En una herida tetanígena, el riesgo de tétanos es inminente y requiere inmunidad pasiva instantánea con IGT."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta una herida de alto riesgo para tétanos (herida punzante, entorno rural, heces de caballo) sumado a un historial de vacunación desconocido (que cuenta como esquema incompleto o < 3 dosis). En estos casos de alto riesgo sin vacunas previas garantizadas, las directrices mundiales exigen aplicar AMBAS: inmunidad pasiva instantánea mediante la Inmunoglobulina Antitetánica Humana (IGT) e inmunidad activa empezando con el Toxoide Tetánico (Vacuna Td o Tdap). Es VITAL que ambas inyecciones se administren en sitios anatómicos diferentes (brazos contralaterales o un brazo y un glúteo) para evitar que la inmunoglobulina neutralice la vacuna in situ.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nColega, una herida punzante con un clavo oxidado cubierto de estiércol es la mansión perfecta para el Clostridium tetani (le encanta vivir sin oxígeno en lo profundo). Como no sabemos si el soldado tiene defensas, tenemos que asumir que está indefenso. Para protegerlo HOY MISMO, le pasamos los anticuerpos ya listos (la Inmunoglobulina Antitetánica). Para protegerlo el MES QUE VIENE, empezamos la vacuna. ¡Ojo clínico! Se ponen el mismo día pero NUNCA en la misma jeringa ni en la misma nalga; si las mezclas, se anulan mutuamente y el soldado terminará intubado con opistótonos en la UCI.",
    keyPoints: [
      "Cuando veas:",
      "• Herida sucia, profunda o punzante (Tetanígera).",
      "• Paciente sin vacunas previas o esquema desconocido (< 3 dosis).",
      "Debes pensar en:",
      "Inmunización combinada: Vacuna (Td) + Inmunoglobulina (IGT) simultáneas en sitios anatómicos opuestos.",
      "Tema: Infectología / Profilaxis Antitetánica."
    ]
  }
];
