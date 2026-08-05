import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #2 (Simulacro 2) · Preguntas #61–#70.
 */
export const UMNG_CONV_ED2_61_70_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed2-61",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "UROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un joven de 22 años sufre un accidente de tránsito en motocicleta, impactando su flanco derecho contra el manubrio. Ingresa a urgencias quejándose de dolor lumbar derecho severo. Al examen físico, presenta una gran equimosis en el flanco derecho. Signos vitales: PA 115/75 mmHg, FC 90 lpm, FR 18 rpm, SatO2 98%. Se le coloca una sonda vesical, obteniendo orina de color rojo oscuro (hematuria macroscópica franca). Ante la estabilidad hemodinámica, se solicita una Tomografía Computarizada (TAC) de abdomen con contraste en fase de eliminación. El reporte indica: \"Laceración del parénquima del riñón derecho que profundiza más de 1 cm, alcanzando el sistema colector, evidenciándose extravasación activa del medio de contraste hacia la pelvis renal (Grado IV)\". No hay otras lesiones intraabdominales. ¿Cuál es la conducta MÁS APROPIADA en este momento según las guías urológicas internacionales de trauma?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Traslado inmediato a quirófano para Nefrectomía derecha de salvamento.",
        distractorProfile: "aggressive_surgery",
        incorrectFeedback: "Si el paciente está estable, abrir la fascia de Gerota libera la presión de taponamiento y resultará en nefrectomía innecesaria (iatrogénica)."
      },
      {
        id: "B",
        label: "B",
        text: "Manejo médico conservador con reposo absoluto en cama, monitorización estricta y antibióticos profilácticos."
      },
      {
        id: "C",
        label: "C",
        text: "Exploración quirúrgica abierta inmediata para rafia renal (sutura del parénquima) y colocación de catéter doble J.",
        distractorProfile: "wrong_indication_stable",
        incorrectFeedback: "La cirugía (Laparotomía) se reserva ESTRICTAMENTE para el paciente INESTABLE hemodinámicamente. El abordaje actual en estables es conservador."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar cistoscopia de urgencia para lavado de coágulos vesicales.",
        distractorProfile: "lower_urinary_focus",
        incorrectFeedback: "La cistoscopia no resuelve el origen del sangrado parenquimatoso alto (riñón)."
      }
    ],
    correctOptionId: "B",
    explanation: "El paradigma del trauma renal cambió: la ESTABILIDAD HEMODINÁMICA manda sobre la imagen anatómica. En pacientes estables (incluso con trauma Grado IV o V), el manejo de elección es CONSERVADOR (reposo y observación). El hematoma contenido en la fascia de Gerota ejerce un efecto de taponamiento natural. La cirugía se reserva para pacientes INESTABLES o con choque que no responde.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el riñón está empacado al vacío en la bolsa de Gerota. Al romperse y sangrar, la misma sangre llena la bolsa, hace presión y aplasta a la arteria rota (taponamiento). Si el paciente está charlando contigo con presión normal, el taponamiento funcionó. Si te pones de héroe y lo abres, la sangre saldrá volando hasta el techo y terminarás arrancando un riñón que se hubiera salvado dejándolo acostado en la cama 5 días.",
    keyPoints: [
      "Trauma Renal Cerrado Grado I a V en Paciente ESTABLE = Manejo Conservador.",
      "Trauma Renal en Paciente INESTABLE (Choque) = Laparotomía Exploratoria.",
      "Complicación tardía (resangrado activo) en paciente estable = Angioembolización."
    ]
  },
  {
    id: "umng-conv-ed2-62",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un niño de 3 años es traído a consulta por presentar fiebre de 39.5°C persistente desde hace 7 días, la cual no cede con antipiréticos comunes. Al examen físico, usted documenta: inyección conjuntival bilateral (ojos rojos sin secreción purulenta), labios intensamente eritematosos, secos y fisurados, una lengua con papilas hipertróficas (lengua en fresa), y un ganglio linfático cervical derecho único de 2 cm de diámetro, firme y doloroso. En el tronco se observa un exantema maculopapular polimorfo y las palmas de las manos presentan edema duro con un eritema brillante. El niño luce extremadamente irritable. Teniendo en cuenta la innegable sospecha clínica, ¿cuál es el tratamiento combinado de elección que debe instaurarse de URGENCIA para prevenir la complicación más letal de esta enfermedad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Penicilina G Benzatínica intramuscular dosis única y corticoides orales.",
        distractorProfile: "scarlet_fever_treatment",
        incorrectFeedback: "Este es el tratamiento para Escarlatina. El Kawasaki da ojos secos inyectados y edema en manos, cosas que no da la Escarlatina."
      },
      {
        id: "B",
        label: "B",
        text: "Inmunoglobulina Humana Intravenosa (IGIV) dosis única + Ácido Acetilsalicílico (Aspirina) a dosis altas."
      },
      {
        id: "C",
        label: "C",
        text: "Aciclovir intravenoso y aislamiento de contacto respiratorio.",
        distractorProfile: "wrong_viral_etiology",
        incorrectFeedback: "El Kawasaki es una vasculitis autoinmune sistémica, no una infección por herpes simple."
      },
      {
        id: "D",
        label: "D",
        text: "Metotrexato asociado a Infliximab para frenar la tormenta inmunológica.",
        distractorProfile: "chronic_rheumatologic",
        incorrectFeedback: "Son fármacos para vasculitis/artritis crónicas, no para el rescate agudo del Kawasaki."
      }
    ],
    correctOptionId: "B",
    explanation: "La Enfermedad de Kawasaki es una vasculitis infantil (Fiebre >5 días + 4 de 5 criterios: conjuntivitis no supurativa, cambios orales, adenopatía cervical >1.5cm, cambios en extremidades, exantema). La complicación letal es la formación de Aneurismas Coronarios (riesgo de infarto o rotura). Para prevenirlo, es OBLIGATORIO administrar (idealmente antes del día 10) Inmunoglobulina Intravenosa (IGIV) para apagar la inflamación, más Aspirina a dosis altas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., un niño con Kawasaki es un niño miserable. Llora sin consuelo y parece que tuviera fuego en los labios y manos. Sus arterias coronarias se están cocinando por dentro. Tienes 10 días desde que empezó la fiebre para colgarle la bolsa de Inmunoglobulina. Si te demoras creyendo que es una \"alergia a un jabón\", la inflamación inflará las arterias coronarias como globos y el niño podría caer muerto de un infarto masivo. ¡Es de las pocas veces que debes dar Aspirina a un niño con fiebre sin dudar!",
    keyPoints: [
      "Kawasaki: Fiebre >5 días + Ojos rojos + Labios partidos/Lengua fresa + Ganglio cervical + Exantema + Edema palmas/plantas.",
      "Complicación letal: Aneurismas Coronarios.",
      "Tratamiento curativo preventivo: IGIV + Aspirina a altas dosis."
    ]
  },
  {
    id: "umng-conv-ed2-63",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "PREVENCIÓN",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una gestante de 28 semanas (G2P1) asiste a su control prenatal de rutina. Su primer embarazo fue un parto vaginal sin complicaciones hace 3 años; el hijo mayor es sano. En los laboratorios del control actual se evidencia que la paciente tiene un grupo sanguíneo O y Rh NEGATIVO. Su pareja (el padre biológico del actual embarazo y del anterior) es A Rh POSITIVO. Usted solicita un Test de Coombs Indirecto en sangre materna, el cual se reporta como NEGATIVO. La paciente no ha presentado sangrado vaginal, trauma ni dolor. De acuerdo con las guías de control prenatal y prevención de la isoinmunización, ¿cuál es la conducta EXACTA a seguir en la consulta del día de hoy?",
    options: [
      {
        id: "A",
        label: "A",
        text: "No realizar ninguna intervención, repetir el Coombs indirecto a las 32 semanas y aplicar Inmunoglobulina solo tras el parto si el recién nacido es Rh positivo.",
        distractorProfile: "missing_prenatal_prophylaxis",
        incorrectFeedback: "Retrasar la profilaxis preparto (a las 28 semanas) es negligencia. Las microtransfusiones fetomaternas del tercer trimestre pueden sensibilizarla antes del parto."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar una dosis de 300 mcg de Inmunoglobulina Anti-D (Rhogam) el día de hoy."
      },
      {
        id: "C",
        label: "C",
        text: "Enviar a la paciente para amniocentesis urgente para determinar el tipo de sangre del feto y decidir profilaxis.",
        distractorProfile: "dangerous_invasive_procedure",
        incorrectFeedback: "Puncionar el útero (amniocentesis) en una madre Rh negativa causa una hemorragia feto-materna masiva que la isoinmunizará instantáneamente."
      },
      {
        id: "D",
        label: "D",
        text: "Como es su segundo embarazo y el primero fue de un padre Rh positivo, la sensibilización ya ocurrió; iniciar transfusión intrauterina profiláctica.",
        distractorProfile: "misinterpreting_coombs",
        incorrectFeedback: "El Coombs Indirecto NEGATIVO confirma que la madre AÚN NO está sensibilizada. Es el momento perfecto para protegerla."
      }
    ],
    correctOptionId: "B",
    explanation: "Toda mujer Rh Negativa NO SENSIBILIZADA (Coombs Indirecto Negativo), con padre Rh positivo o desconocido, DEBE recibir profilaxis universal con 300 mcg de Inmunoglobulina Anti-D en la semana 28 de gestación. Esto evita la sensibilización primaria por microtransfusiones fetomaternas del tercer trimestre. Recibirá una segunda dosis post-parto (en las primeras 72h) si el bebé resulta ser Rh Positivo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la sangre Rh negativa es un radar de seguridad nacional. Si detecta un glóbulo rojo Rh positivo del feto, lanza un ataque nuclear para destruirlo. Tu trabajo es engañar al radar. En la semana 28 le inyectas la Inmunoglobulina a la madre; estos anticuerpos comerciales atrapan a los glóbulos del bebé y los esconden antes de que la mamá los detecte. Así, su sistema inmune nunca se entera del invasor, y el bebé no sufre anemia hemolítica.",
    keyPoints: [
      "Gestante Rh Negativa + Coombs Indirecto Negativo = Madre NO Sensibilizada.",
      "Conducta OBLIGATORIA: Inmunoglobulina Anti-D (300 mcg) a la SEMANA 28.",
      "Si el Coombs fuera Positivo, la inyección ya no sirve (daño ya hecho), requiere seguimiento fetal con Doppler cerebral."
    ]
  },
  {
    id: "umng-conv-ed2-64",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "NEUMOLOGÍA - URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 70 años con antecedente de EPOC severo oxígenorequiriente en casa, ingresa a urgencias con un cuadro de 3 días de aumento de la disnea, tos y cambio en el color del esputo (purulento). Al ingreso, el paciente se encuentra lúcido, alerta y cooperador, pero francamente taquipneico (FR 32 rpm), usando músculos accesorios. Los gases arteriales (tomados respirando aire ambiente) reportan: pH 7.28, PaCO2 65 mmHg, PaO2 50 mmHg, HCO3 30 mEq/L. No presenta vómitos ni secreciones orales inmanejables. Usted diagnostica una Exacerbación Severa de EPOC con insuficiencia respiratoria hipercápnica aguda. ¿Cuál es el paso INICIAL de soporte ventilatorio indicado en este paciente con mayor nivel de evidencia para reducir la mortalidad y evitar complicaciones asociadas?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Intubación Orotraqueal (IOT) inmediata y ventilación mecánica invasiva.",
        distractorProfile: "premature_intubation",
        incorrectFeedback: "Intubar de entrada a un paciente despierto con pH 7.28 es un error severo. La intubación se reserva si falla la VMNI, si hay coma, paro o pH < 7.20 sostenido."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar Ventilación Mecánica No Invasiva (VMNI) tipo BiPAP o CPAP con mascarilla facial total."
      },
      {
        id: "C",
        label: "C",
        text: "Oxigenoterapia exclusiva por cánula nasal a 5 Litros/minuto para barrer el CO2.",
        distractorProfile: "oxygen_induced_hypercapnia",
        incorrectFeedback: "Dar alto flujo de oxígeno a un retenedor crónico de CO2 deprime su estímulo respiratorio hipóxico, agravando la retención de CO2 y llevándolo al coma."
      },
      {
        id: "D",
        label: "D",
        text: "Nebulizaciones con bromuro de ipratropio continuas, esperando compensación renal del pH en 24 horas.",
        distractorProfile: "insufficient_support",
        incorrectFeedback: "Si el pH está en 7.28 el paciente está claudicando por fatiga muscular. Esperar 24h a punta de nebulizaciones es asfixiarlo."
      }
    ],
    correctOptionId: "B",
    explanation: "La Ventilación Mecánica No Invasiva (VMNI/BiPAP) es el estándar de oro en la exacerbación de EPOC con acidosis respiratoria, disminuyendo mortalidad e intubaciones en >50%. Los criterios de oro son: paciente consciente/cooperador, pH entre 7.25 y 7.35, y PaCO2 > 45 mmHg. La presión positiva disminuye el trabajo de los músculos respiratorios agotados y \"lava\" el CO2 retenido.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., meterle un tubo en la garganta a un EPOC es condenarlo a no salir de la UCI porque sus pulmones flojos no tendrán fuerza para extubarse. La VMNI fue inventada para esto. Le pones la máscara apretada y el ventilador empuja aire cada vez que el abuelo toma impulso, ayudándolo a expulsar el CO2 que lo tiene ahogado. En dos horas el pH sube a 7.35 y te agradece por no haberlo sedado e intubado.",
    keyPoints: [
      "Exacerbación EPOC + Acidosis Respiratoria (pH 7.25-7.35) + Paciente CONSCIENTE = VMNI (BiPAP).",
      "Contraindicaciones de VMNI (requieren IOT inmediata): Paro inminente, Coma/Estupor, Vómito, pH < 7.20 sostenido, inestabilidad hemodinámica."
    ]
  },
  {
    id: "umng-conv-ed2-65",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "INFECTOLOGÍA URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una joven de 24 años es traída a urgencias por sus familiares tras ingerir un puñado indeterminado de pastillas en un intento suicida hace 3 horas. La paciente se encontraba en tratamiento de fase intensiva por Tuberculosis Pulmonar. En la sala de triage, la paciente presenta una convulsión tónico-clónica generalizada. Usted administra Diazepam IV 10 mg en dos ocasiones y Fenitoína a dosis de carga, pero el estatus epiléptico no cede (es refractario). Los gases arteriales muestran una acidosis metabólica muy severa con anión gap elevado y niveles de lactato disparados. Dada la medicación que tenía en su casa (Esquema TAES), ¿cuál de los antituberculosos es el responsable directo de este cuadro letal y cuál es su antídoto específico intravenoso?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Rifampicina / Acetilcisteína.",
        distractorProfile: "wrong_toxic_mechanism",
        incorrectFeedback: "Rifampicina causa hepatotoxicidad (orina naranja) pero no causa estatus epiléptico primario refractario."
      },
      {
        id: "B",
        label: "B",
        text: "Isoniazida / Piridoxina (Vitamina B6)."
      },
      {
        id: "C",
        label: "C",
        text: "Pirazinamida / Bicarbonato de Sodio.",
        distractorProfile: "wrong_toxic_mechanism",
        incorrectFeedback: "Pirazinamida causa ataques de gota (hiperuricemia) y daño hepático, no neurotoxicidad aguda convulsiva."
      },
      {
        id: "D",
        label: "D",
        text: "Etambutol / Flumazenil.",
        distractorProfile: "wrong_antidote",
        incorrectFeedback: "Etambutol causa neuritis óptica (ceguera a colores), y el Flumazenil está contraindicado en convulsiones."
      }
    ],
    correctOptionId: "B",
    explanation: "La Isoniazida (INH) neurotóxica agota la Piridoxina (Vitamina B6). En el cerebro, la B6 es cofactor para fabricar GABA (neurotransmisor inhibitorio). Al no haber GABA, el cerebro se incendia eléctricamente (Estatus Epiléptico Refractario). Dar Diazepam es inútil porque las benzodiacepinas necesitan que haya GABA para funcionar. El único antídoto salvavidas es reponer el cofactor: Piridoxina (Vitamina B6) intravenosa en dosis altas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el Diazepam funciona abriéndole la puerta al GABA para sedar el cerebro. Si la intoxicación por Isoniazida se robó todo el GABA (porque destruyó la vitamina B6), el Diazepam llega al receptor y encuentra la casa vacía. La chica seguirá convulsionando quemando su músculo hasta morir (ácido láctico alto). Debes darle ampollas de Piridoxina para devolverle el combustible inhibitorio a las neuronas.",
    keyPoints: [
      "Tratamiento TAES + Estatus Epiléptico Refractario + Acidosis = Intoxicación por ISONIAZIDA.",
      "Mecanismo: Agotamiento de GABA por bloqueo de Piridoxina.",
      "Antídoto: Piridoxina (Vitamina B6) IV a altas dosis."
    ]
  },
  {
    id: "umng-conv-ed2-66",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "COLOPROCTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 40 años, diabético mal controlado, consulta a urgencias quejándose de dolor punzante, constante e insoportable en la región anal, el cual empeora drásticamente al sentarse, caminar o toser. Refiere además fiebre no cuantificada y escalofríos desde hace 2 días. Al examen físico, en la inspección de la región perianal, se observa una masa eritematosa, asimétrica, caliente, francamente fluctuante y muy dolorosa a la palpación en el margen anal derecho. Usted realiza el diagnóstico clínico de Absceso Perianal. ¿Cuál es el manejo INMEDIATO de elección que dicta el estándar quirúrgico para evitar la progresión a una sepsis necrotizante?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Ciprofloxacina + Metronidazol oral y baños de asiento con agua tibia en casa por 7 días.",
        distractorProfile: "medical_mismanagement_surgical_lesion",
        incorrectFeedback: "Mandar a un diabético a casa solo con antibióticos con un absceso fluctuante es la receta para que regrese con Gangrena de Fournier (fascitis necrotizante)."
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar Resonancia Magnética Pélvicapara confirmar si existe una fístula oculta antes de intervenir.",
        distractorProfile: "delay_by_imaging",
        incorrectFeedback: "La RMN evalúa fístulas crónicas, pero retrasa el drenaje vital urgente del absceso agudo."
      },
      {
        id: "C",
        label: "C",
        text: "Incisión y drenaje quirúrgico inmediato en el servicio de urgencias o quirófano."
      },
      {
        id: "D",
        label: "D",
        text: "Manejo médico con analgésicos fuertes y preparación para hemorroidectomía electiva.",
        distractorProfile: "wrong_diagnosis_hemorrhoid",
        incorrectFeedback: "Es un absceso (fiebre, eritema fluctuante), no una hemorroide trombosada (que sería azulada/violácea)."
      }
    ],
    correctOptionId: "C",
    explanation: "El dogma quirúrgico universal dicta que todo absceso (pus a tensión) debe ser drenado quirúrgicamente (\"Ubi pus, ibi evacua\"). En el absceso perianal, el drenaje INMEDIATO mediante incisión no solo alivia el dolor isquémico extremo, sino que evita la diseminación bacteriana a los espacios profundos y el riesgo de Gangrena de Fournier (alta en diabéticos). Los antibióticos son un complemento post-drenaje, jamás el tratamiento único.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagínate una bomba llena de bacterias fecales hirviendo a alta presión en el periné. Si lo despachas con Amoxicilina a casa, el pus buscará la salida más blanda hacia adentro, necrosando músculos y causando fascitis generalizada. Haz una incisión en cruz sobre el punto de fluctuación, saca esos 50 cc de pus hediondo, y el paciente te abrazará porque le quitas el dolor al instante.",
    keyPoints: [
      "Masa perianal fluctuante + Dolor extremo + Fiebre = Absceso Perianal/Anorrectal.",
      "Conducta innegociable: Incisión y Drenaje quirúrgico inmediato.",
      "Antibióticos exclusivos en absceso fluctuante sin drenaje = Negligencia médica (Riesgo de Fournier)."
    ]
  },
  {
    id: "umng-conv-ed2-67",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "CIRUGÍA PEDIÁTRICA Y NEONATOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un recién nacido masculino, actualmente de 4 semanas de vida (28 días), es traído por su madre a control de niño sano. La madre refiere que el niño presenta \"color amarillo\" (ictericia) constante desde la primera semana de vida, el cual no ha disminuido. Además, le llama mucho la atención que las deposiciones (el popó) del bebé en el pañal son de color blanco arcilla o grisáceo muy pálido (acolia focal), y la orina mancha intensamente de amarillo oscuro el pañal (coluria). El bebé luce buen estado general, pero al examen físico usted palpa hepatomegalia (3 cm por debajo del reborde costal). Los laboratorios muestran Bilirrubina Total en 12 mg/dL, con una Bilirrubina Directa (Conjugada) en 9.5 mg/dL. ¿Cuál es el diagnóstico sospechado y cuál es el procedimiento quirúrgico curativo de rescate que debe realizarse idealmente antes de los 60 días de vida?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ictericia Fisiológica Prolongada / Fototerapia intensiva en UCIN.",
        distractorProfile: "physiological_misdiagnosis",
        incorrectFeedback: "La ictericia fisiológica da elevación INDIRECTA. Nunca causa heces blancas, coluria, ni eleva la bilirrubina directa a niveles patológicos."
      },
      {
        id: "B",
        label: "B",
        text: "Atresia de Vías Biliares Extrahepáticas / Hepato-porto-enterostomía (Cirugía de Kasai)."
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome de Crigler-Najjar tipo I / Trasplante hepático programado a los 2 años.",
        distractorProfile: "wrong_jaundice_type",
        incorrectFeedback: "Crigler-Najjar causa ictericia por elevación masiva INDIRECTA (defecto de conjugación), no directa colestásica."
      },
      {
        id: "D",
        label: "D",
        text: "Hepatitis Neonatal por Citomegalovirus / Tratamiento antiviral con Ganciclovir intravenoso.",
        distractorProfile: "infectious_mimic",
        incorrectFeedback: "La hepatitis idiopática o infecciosa causa colestasis, pero el hallazgo innegociable de acolia blanca persistente obliga a sospechar y tratar quirúrgicamente la Atresia biliar."
      }
    ],
    correctOptionId: "B",
    explanation: "El niño presenta Ictericia obstructiva/colestásica (Ictericia prolongada >14 días + Bilirrubina DIRECTA elevada + Acolia blanca + Coluria). Esto indica que los conductos biliares externos nacieron obliterados (Atresia de Vías Biliares). La bilis no cae al intestino (heces blancas) y se regresa a la sangre y orina (coluria). El tratamiento de rescate es la Hepato-porto-enterostomía (Cirugía de Kasai) para derivar la bilis directamente al intestino. Esta cirugía salva el hígado SOLO si se hace antes de los 60 días de vida, después de ese tiempo requerirá trasplante.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si ves un pañal manchado de orina oscura y un popó que parece yeso blanco, debes encender la alarma de colestasis. Si el conducto biliar está ciego, el hígado del bebé se está 'auto-ahogando' en bilis tóxica. El cirujano corta el intestino y lo usa como tubería de desvío cosida al fondo del hígado (Kasai). Si te duermes pidiendo exámenes por dos meses, le destruirás el hígado al bebé.",
    keyPoints: [
      "Ictericia >14 días + Heces Blancas (Acolia) + Bilirrubina Directa Elevada = Atresia de Vías Biliares.",
      "Cirugía puente de elección: Cirugía de Kasai (Hepato-porto-enterostomía).",
      "Factor crítico de éxito: Realizar la cirugía antes de los 45 a 60 días de vida."
    ]
  },
  {
    id: "umng-conv-ed2-68",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "INFECTOLOGÍA - HEMATOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 45 años, con diagnóstico de Leucemia Mieloide Aguda, recibió quimioterapia intensiva de inducción hace 10 días. Es traído a urgencias a la 1:00 AM tras presentar un pico febril súbito de 38.8°C asociado a escalofríos y astenia marcada. Al examen físico: PA 105/65 mmHg, FC 115 lpm. No hay tos, no hay dolor urinario, no hay lesiones en piel y el catéter venoso central no tiene signos de infección local. Un cuadro hemático de emergencia (STAT) muestra una Hemoglobina de 8.5 g/dL, Plaquetas en 60.000, y un Recuento Absoluto de Neutrófilos (RAN) de apenas 150 células/mm³. Tras tomar inmediatamente 2 sets de hemocultivos y urocultivo, ¿cuál es el paso de protocolo farmacológico MÁS URGENTE que determina la supervivencia del paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Esperar los resultados del Gram de los hemocultivos para dirigir la terapia empírica selectiva.",
        distractorProfile: "delay_for_results",
        incorrectFeedback: "Esperar un Gram en un paciente sin sistema inmune asegura mortalidad fulminante por sepsis."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar infusión de factor estimulante de colonias de granulocitos (Filgrastim) y observar la respuesta de la fiebre.",
        distractorProfile: "bone_marrow_delay",
        incorrectFeedback: "El Filgrastim demora días en producir neutrófilos, no ataca la bacteria que ya está en sangre causando sepsis aguda."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar terapia antibiótica empírica intravenosa inmediata de amplio espectro antipseudomónica (ej. Cefepime o Piperacilina-Tazobactam) en la primera hora."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Fluconazol intravenoso por sospecha de fiebre fúngica secundaria a la neutropenia prolongada.",
        distractorProfile: "premature_antifungal",
        incorrectFeedback: "Los antifúngicos se añaden solo si la fiebre persiste refractaria luego de 4-7 días de antibióticos potentes sin éxito, no en la hora cero."
      }
    ],
    correctOptionId: "C",
    explanation: "La Neutropenia Febril (Fiebre >38.3 + RAN <500 en paciente oncológico) es una Emergencia Infectológica Máxima. El protocolo dicta que tras tomar cultivos en <15 min, SE DEBE iniciar antibiótico intravenoso de amplio espectro en la PRIMERA HORA del ingreso. La terapia empírica debe cubrir bacilos Gram negativos agresivos (Pseudomonas spp.), utilizando esquemas en monoterapia como Cefepime, Meropenem o Piperacilina-Tazobactam. \n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este paciente no tiene soldados (neutrófilos) para defenderse. Las bacterias de su propio intestino translocan a la sangre de inmediato. No verás pus, ni neumonía ni abscesos en el examen físico (porque sin neutrófilos no hay pus). La fiebre asilada es la única señal de que la sepsis empezó. Dispara primero a ciegas contra Pseudomonas empacando Cefepime en menos de 60 minutos, o este cáncer se cobrará su vida de forma séptica.",
    keyPoints: [
      "Quimioterapia + Fiebre + RAN < 500 cel/mm³ = Neutropenia Febril Alto Riesgo.",
      "Meta absoluta de supervivencia: Iniciar Antibiótico IV de amplio espectro en la PRIMERA HORA (\"Hora de Oro\").",
      "Esquema empírico de elección: Cefepime o Piperacilina-Tazobactam (Cobertura Antipseudomónica obligatoria)."
    ]
  },
  {
    id: "umng-conv-ed2-69",
    university: "UMNG",
    examArea: "ONCOLOGÍA",
    topic: "GINECOLOGÍA ONCOLÓGICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una mujer de 38 años, multípara y sin antecedentes de citologías cervicovaginales previas, acude a consulta externa refiriendo sangrado vaginal postcoital abundante (sinusorragia) y flujo vaginal fétido desde hace 3 meses. A la exploración ginecológica mediante especuloscopia, se observa una masa exofítica, friable y sangrante que reemplaza todo el labio posterior del cuello uterino, midiendo aproximadamente 3 centímetros de diámetro mayor. Al realizar el tacto bimanual y rectovaginal, usted confirma que la lesión está confinada al cuello uterino; los fondos de saco están libres, y los parametrios (el tejido a los lados del útero) son suaves, libres de invasión y elásticos hasta la pared pélvica. Una biopsia confirma Carcinoma Escamocelular invasivo. No hay hallazgos sospechosos en la ecografía renal ni Rx de tórax. Dada la etapificación clínica descrita (Estadio IB2/IB según clasificación FIGO actualizada para lesiones de 2 a 4 cm), ¿cuál es el tratamiento estándar con intención curativa?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Radioterapia pélvica exclusiva seguida de braquiterapia.",
        distractorProfile: "advanced_disease_treatment",
        incorrectFeedback: "La radioterapia/quimioterapia concomitante es estándar para enfermedad Localmente Avanzada (lesiones >4 cm o con parametrios invadidos). Con 3 cm y parametrios libres, debe operarse."
      },
      {
        id: "B",
        label: "B",
        text: "Histerectomía simple o total por vía laparoscópica.",
        distractorProfile: "insufficient_surgery",
        incorrectFeedback: "Una histerectomía \"simple\" deja el tumor pegado a los bordes laterales y causa recaída en cáncer de cérvix visible. Requiere disección lateral amplia (parametrios)."
      },
      {
        id: "C",
        label: "C",
        text: "Histerectomía Radical (Tipo Piver-Rutledge III) más Linfadenectomía pélvica bilateral."
      },
      {
        id: "D",
        label: "D",
        text: "Quimioterapia neoadyuvante agresiva seguida de resección local.",
        distractorProfile: "experimental_neoadjuvant",
        incorrectFeedback: "La neoadyuvancia no es el tratamiento estándar curativo de primera línea global para tumores tempranos IB1/IB2 quirúrgicos."
      }
    ],
    correctOptionId: "C",
    explanation: "Los estadios tempranos del cáncer de cérvix (IA2, IB1, IB2 hasta 4 cm) que están confinados al cuello y SIN invasión a los parametrios, son tributarios de cirugía curativa primaria: Histerectomía Radical (resecar útero, cérvix, tercio superior vaginal y una amplia franja de los parametrios laterales para asegurar márgenes) + Linfadenectomía pélvica. Si los parametrios estuvieran invadidos, la cirugía estaría proscrita.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el tacto rectal salva vidas en cáncer de cérvix. Si metes los dedos y sientes que la masa está flotando libre y que los ligamentos (parametrios) laterales están elásticos y suaves, entras, cortas ancho a los lados y la curas. Pero si los parametrios estuvieran fijos o congelados (como las raíces de un árbol hacia la pelvis), la cirugía es un fracaso; si operas eso, la señora sangrará a muerte. Parametrios libres = Bisturí radical. Parametrios duros = Quimiorradioterapia.",
    keyPoints: [
      "Cáncer de Cérvix Temprano (Tumor < 4 cm) + PARAMETRIOS LIBRES = Histerectomía Radical + Linfadenectomía pélvica.",
      "Cáncer Localmente Avanzado (Tumor > 4 cm) o PARAMETRIOS INVADIDOS (Estadio IIB+) = Quimio/Radioterapia concomitante (Nunca operar)."
    ]
  },
  {
    id: "umng-conv-ed2-70",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "ORTOPEDIA Y NEUROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un joven futbolista amateur de 21 años sufre un trauma durante un partido. Un jugador rival le dio una patada fortuita y violenta directamente en la cara lateral de su rodilla derecha, justo por debajo de la articulación (nivel de la cabeza del peroné). El paciente logró salir caminando, pero apoyado en sus compañeros. Horas después, al ser evaluado en urgencias, usted documenta que el paciente tiene una marcha inusual: arrastra la punta del pie derecho en el suelo y, al intentar caminar, levanta la rodilla exageradamente como un caballo de paso fino (Marcha en Estepaje). Al evaluar la función motora sentado en la camilla, el paciente tiene incapacidad total para elevar la punta del pie y los dedos hacia el techo (dorsiflexión del pie y extensión de los dedos), y refiere anestesia en la cara anterior y lateral de la pierna y el dorso del pie derecho. ¿Qué nervio específico se lesionó producto de este impacto traumático?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nervio Tibial (Poplíteo interno).",
        distractorProfile: "posterior_nerve_injury",
        incorrectFeedback: "El nervio Tibial viaja profundo atrás y se encarga de flexión plantar (puntillas); no produce pie caído por golpe lateral."
      },
      {
        id: "B",
        label: "B",
        text: "Nervio Peroneo Común (Fibular común)."
      },
      {
        id: "C",
        label: "C",
        text: "Nervio Ciático principal.",
        distractorProfile: "proximal_sciatic_injury",
        incorrectFeedback: "El Ciático principal se daña en luxaciones posteriores de cadera, paralizando tanto extensores como flexores en bloque, no solo dorsiflexión."
      },
      {
        id: "D",
        label: "D",
        text: "Nervio Femoral.",
        distractorProfile: "anterior_thigh_nerve",
        incorrectFeedback: "Inerva el cuádriceps; su daño impide extender la rodilla para patear, pero no altera primariamente el pie."
      }
    ],
    correctOptionId: "B",
    explanation: "El Nervio Peroneo Común (Fibular) desciende rodeando la cabeza/cuello del peroné. Es extremadamente superficial y no tiene protección muscular. Su función es inervar el compartimento anterior (músculos dorsiflexores). Cuando una patada (o yeso apretado) lo machaca contra el hueso, la gravedad vence al pie, generando el \"Pie Caído\" o \"Péndulo\" (imposibilidad para elevar la punta). Para no tropezarse con el suelo, el paciente flexiona exageradamente la rodilla al caminar (Marcha equina o Estepaje).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta es la versión del miembro inferior de la 'mano caída' (nervio radial). El golpe en el peroné apaga el tibial anterior. Dile al paciente que intente caminar sobre sus talones apuntando las uñas del pie hacia el techo. Verás que la pierna sana lo logra, pero el pie derecho se queda pegado plano al piso. Si no pides una férula anti-equino para mantenerle el pie en ángulo recto, el tendón de Aquiles se retraerá permanentemente mientras el nervio intenta despertar.",
    keyPoints: [
      "Trauma en borde externo de rodilla (Cabeza del peroné) = Lesión del Nervio Peroneo Común (Fibular).",
      "Clínica Clásica: Pie Caído (Incapacidad de dorsiflexión) + Anestesia en dorso del pie.",
      "Signo de marcha: Marcha en estepaje (Marcha equina compensatoria)."
    ]
  }
];
