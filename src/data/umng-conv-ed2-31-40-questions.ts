import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #2 (Simulacro 2) · Preguntas #31–#40.
 */
export const UMNG_CONV_ED2_31_40_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed2-31",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "URGENCIAS Y MEDICINA LEGAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un lactante masculino de 4 meses es traído a urgencias por su padrastro, quien refiere que el niño estaba durmiendo y súbitamente comenzó a convulsionar. El adulto niega antecedentes de trauma o caídas. Al examen físico, el lactante está en estado postictal, con Glasgow 7, sin fiebre y sin signos de infección respiratoria. Llama poderosamente la atención que la fontanela anterior se encuentra marcadamente abombada y a tensión. No se observan hematomas, equimosis ni fracturas evidentes en el cráneo ni en el resto del cuerpo. Se realiza un fondo de ojo que revela múltiples hemorragias retinianas bilaterales en llama y en mancha. El TAC de cráneo simple evidencia un hematoma subdural laminar agudo y signos de edema cerebral difuso. ¿Cuál es el diagnóstico más probable que el equipo médico debe reportar inmediatamente a las autoridades competentes?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ruptura espontánea de malformación arteriovenosa congénita (MAV).",
        distractorProfile: "different_pathology",
        incorrectFeedback: "Las MAV rotas pueden causar sangrado intracraneal, pero clásicamente causan hemorragia intraparenquimatosa o subaracnoidea, NO un hematoma subdural bilateral puro con hemorragias retinianas masivas."
      },
      {
        id: "B",
        label: "B",
        text: "Meningoencefalitis bacteriana aguda complicada con empiema subdural.",
        distractorProfile: "similar_symptoms",
        incorrectFeedback: "La meningitis daría fiebre alta, signos de sepsis y el LCR sería purulento. Aunque el neumococo puede dar colecciones subdurales, las hemorragias retinianas difusas no son su sello."
      },
      {
        id: "C",
        label: "C",
        text: "Traumatismo Craneoencefálico Abusivo (Síndrome del Bebé Sacudido)."
      },
      {
        id: "D",
        label: "D",
        text: "Trastorno hemorrágico congénito (Déficit severo de Vitamina K o Hemofilia).",
        distractorProfile: "epidemiological_mismatch",
        incorrectFeedback: "La Enfermedad Hemorrágica del Recién Nacido (Vitamina K) ocurre en el primer mes de vida, pero a los 4 meses es estadísticamente raro como primera causa frente a la tríada del maltrato."
      }
    ],
    correctOptionId: "C",
    explanation: "El 'Síndrome del Bebé Sacudido' ocurre cuando un adulto, frustrado por el llanto del lactante, lo toma por el tórax y lo sacude violentamente hacia adelante y atrás. La cabeza del bebé (que es proporcionalmente muy grande y con músculos del cuello débiles) hace un movimiento de 'latigazo'. Este mecanismo de cizallamiento rompe las venas puente corticales (causando el Hematoma Subdural) y la tracción en el globo ocular rompe los vasos de la retina (Hemorragias retinianas). La ausencia de golpes externos (chichones o fracturas de cráneo) NO descarta el trauma; de hecho, confirma que el daño fue por aceleración/desaceleración (sacudida). La tríada clásica es encefalopatía, hematoma subdural y hemorragias retinianas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este caso te hiela la sangre en urgencias. El padrastro te dice 'se desmayó de la nada', pero el fondo de ojo del bebé parece como si le hubieran salpicado pintura roja por dentro. Esas venas de los ojos y del cerebro se reventaron porque lo zamarrearon con furia. Como la cabeza no chocó contra la pared, no hay fractura, pero el cerebro rebotó contra el cráneo por dentro como gelatina en un frasco. Protege la vía aérea, ponle manitol para el edema, pide una Serie Ósea completa (para buscar fracturas de costillas antiguas) y llama de inmediato a la trabajadora social y la policía.",
    keyPoints: [
      "Tríada del Síndrome del Bebé Sacudido: Hematoma Subdural + Hemorragias Retinianas severas + Encefalopatía sin trauma externo.",
      "Mecanismo: Aceleración/desaceleración (Cizallamiento).",
      "Conducta legal: Estabilizar y denunciar OBLIGATORIAMENTE."
    ]
  },
  {
    id: "umng-conv-ed2-32",
    university: "UMNG",
    examArea: "MEDICINA TROPICAL",
    topic: "INFECTOLOGÍA EN VIH",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un paciente masculino de 35 años, procedente de la zona cafetera (Quindío), con diagnóstico reciente de infección por VIH en fase SIDA (CD4 de 40 células/mm³), asiste por un cuadro de 1 mes de evolución de fiebre vespertina constante, pérdida de 10 kg de peso, sudoración nocturna y tos seca. Al examen físico, se encuentra caquéctico, presenta hepatoesplenomegalia dolorosa, adenopatías cervicales generalizadas y múltiples lesiones cutáneas papulares y nodulares difusas, muchas de ellas con un centro umbilicado (simulando molusco contagioso). Se realiza un aspirado de médula ósea y un frotis de las lesiones de piel teñidos con plata-metenamina (Grocott) o PAS, evidenciando múltiples levaduras pequeñas intracelulares de base estrecha dentro de los macrófagos. ¿Cuál es la terapia sistémica de INDUCCIÓN OBLIGATORIA para esta micosis diseminada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fluconazol oral a dosis altas por 12 meses.",
        distractorProfile: "wrong_antimicrobial",
        incorrectFeedback: "El Fluconazol tiene una actividad muy pobre contra el Histoplasma."
      },
      {
        id: "B",
        label: "B",
        text: "Anfotericina B Liposomal intravenosa seguida de Itraconazol de mantenimiento."
      },
      {
        id: "C",
        label: "C",
        text: "Trimetoprim-Sulfametoxazol (Cotrimoxazol) asociado a corticoides.",
        distractorProfile: "wrong_disease",
        incorrectFeedback: "Cotrimoxazol es el tratamiento para la Neumonía por Pneumocystis jirovecii, que no da estas lesiones en piel ni hepatoesplenomegalia masiva."
      },
      {
        id: "D",
        label: "D",
        text: "Tratamiento empírico para Tuberculosis Miliar con esquema tetraconjugado (HRZE).",
        distractorProfile: "similar_presentation",
        incorrectFeedback: "La TB Miliar es el diagnóstico diferencial exacto, pero la biopsia reveló 'levaduras intracelulares', lo cual descarta al bacilo ácido-alcohol resistente (BAAR) de la tuberculosis."
      }
    ],
    correctOptionId: "B",
    explanation: "El Histoplasma capsulatum es un hongo endémico de los suelos contaminados con guano (cafetales, cuevas). En pacientes con SIDA, el hongo se disemina por el sistema reticuloendotelial (hígado, bazo, médula ósea) causando un cuadro idéntico a la Tuberculosis Miliar. Una perla brutal es la aparición de pápulas umbilicadas en cara y tronco (confundidas con Molusco Contagioso). Las guías (IDSA) mandan iniciar terapia de INDUCCIÓN agresiva por 1-2 semanas con Anfotericina B Liposomal (o desoxicolato) IV para salvar la vida, seguida de Itraconazol oral crónico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la Histoplasmosis en Colombia es el fantasma del SIDA. A este paciente de la zona cafetera, los hongos se le metieron por los pulmones y viajaron a esconderse dentro de sus macrófagos. La enfermedad se 'come' la médula ósea y el hígado. Las lesiones de la cara no son granitos, son nidos de hongos explotando la piel hacia afuera. Si le das pastillitas de Fluconazol, se va a morir. Hay que bombardear ese hongo con Anfotericina B a dosis altas para esterilizar su sangre.",
    keyPoints: [
      "VIH avanzado + Fiebre + Hepatoesplenomegalia + Pápulas umbilicadas = Histoplasmosis Diseminada.",
      "Microscopía: Levaduras pequeñas intracelulares en macrófagos.",
      "Tratamiento: Anfotericina B IV (Inducción) seguido de Itraconazol (Mantenimiento)."
    ]
  },
  {
    id: "umng-conv-ed2-33",
    university: "UMNG",
    examArea: "ENDOCRINOLOGÍA",
    topic: "URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una mujer de 75 años es traída en ambulancia a urgencias en pleno invierno tras ser encontrada inconsciente en su casa. Como antecedente, la hija refiere que la paciente padece Hipotiroidismo, pero suspendió su Levotiroxina hace 3 meses porque 'no le gustaba cómo la hacía sentir'. Al examen físico, la paciente se encuentra en coma (Glasgow 5), francamente edematizada (facies abotagada), con piel fría y amarillenta. Signos vitales críticos: Temperatura de 32.5°C (Hipotermia severa), FC 38 lpm (bradicardia extrema), FR 8 rpm, PA 80/50 mmHg. Sus reflejos osteotendinosos tienen una fase de relajación extremadamente prolongada. Los laboratorios muestran Sodio (Na+) en 115 mEq/L y TSH en 150 mUI/L con T4 libre indetectable. Usted decide iniciar de inmediato el soporte vital, recalentamiento pasivo y Levotiroxina (T4) intravenosa. Sin embargo, ¿qué otro fármaco es OBLIGATORIO administrar de forma simultánea o minutos ANTES de la hormona tiroidea para evitar un colapso letal inmediato?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Infusión de Dopamina a dosis altas para corregir la hipotensión refractaria.",
        distractorProfile: "ineffective_treatment",
        incorrectFeedback: "Los vasopresores suelen ser ineficaces en el coma mixedematoso porque los receptores adrenérgicos no responden a catecolaminas sin hormona tiroidea y sin cortisol."
      },
      {
        id: "B",
        label: "B",
        text: "Bolo intravenoso de Glucosa al 50% para revertir el coma.",
        distractorProfile: "partial_truth",
        incorrectFeedback: "La hipoglucemia puede estar presente, pero el antídoto neurohormonal específico y limitante de la reanimación es el cortisol."
      },
      {
        id: "C",
        label: "C",
        text: "Hidrocortisona intravenosa (Corticosteroides a dosis de estrés)."
      },
      {
        id: "D",
        label: "D",
        text: "Atropina endovenosa para revertir la bradicardia sintomática.",
        distractorProfile: "wrong_mechanism",
        incorrectFeedback: "La bradicardia en el coma mixedematoso no es vagal pura, es por metabolismo basal apagado; la Atropina casi no tiene efecto sobre ella."
      }
    ],
    correctOptionId: "C",
    explanation: "El Coma Mixedematoso es la emergencia máxima de la tiroides. Se debe administrar Levotiroxina intravenosa de inmediato, PERO HAY UNA REGLA DE ORO: Un gran porcentaje de estos pacientes tienen insuficiencia suprarrenal (Enfermedad de Addison) concomitante oculta, o su eje adrenal está suprimido. Si tú les inyectas Levotiroxina, el metabolismo celular se acelera bruscamente, exigiendo toneladas de cortisol para mantener la presión. Al no tener reservas de cortisol, la paciente entra en una Crisis Adrenal Aguda instantánea y muere en choque irreversible. Por ello, SIEMPRE se debe inyectar Hidrocortisona IV a dosis de estrés justo antes o al mismo tiempo que la primera dosis de hormona tiroidea.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta abuelita es como un oso en plena hibernación. Todo su cuerpo se apagó. Tienes que 'encender el motor' inyectándole Levotiroxina por la vena. Pero ojo: si enciendes un motor sin echarle aceite, se funde al instante. El aceite del cuerpo humano es el Cortisol. Si le metes la T4 sola, su corazón intentará latir, pero al no tener cortisol disponible, colapsará fulminantemente. Pásale una ampolla gigante de Hidrocortisona y luego sírvele su tiroxina.",
    keyPoints: [
      "Coma Mixedematoso = Hipotermia + Bradicardia + Hiponatremia/Coma.",
      "Regla innegociable: Dar HIDROCORTISONA IV siempre antes o junto con la Levotiroxina IV.",
      "Razón: Prevenir una Crisis Suprarrenal Aguda letal al acelerar el metabolismo basal."
    ]
  },
  {
    id: "umng-conv-ed2-34",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "NEUROCIRUGÍA Y UCI",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 26 años ingresa a urgencias tras un accidente de motocicleta a alta velocidad sin casco. Se encuentra en coma, con un Glasgow de 5 (O1, V1, M3 - flexión anormal), pupilas isocóricas lentamente reactivas. Se procede a intubación orotraqueal de secuencia rápida y ventilación mecánica para proteger la vía aérea. El paciente presenta claros signos de Hipertensión Intracraneal (HIC) severa. Al configurar el ventilador mecánico durante esta fase aguda del trauma (primeras 6 horas) en ausencia de signos de herniación inminente, ¿qué parámetro gasométrico de la PCO2 debe evitarse ABSOLUTAMENTE por el altísimo riesgo de empeorar el daño cerebral isquémico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Mantener un nivel de PaCO2 entre 35 y 40 mmHg (Normocapnia estricta).",
        distractorProfile: "correct_action_asked_for_incorrect",
        incorrectFeedback: "Esta es la conducta CORRECTA, por lo tanto, no es la que debe 'evitarse'. El objetivo es mantener una Normocapnia estricta para asegurar el flujo sanguíneo cerebral."
      },
      {
        id: "B",
        label: "B",
        text: "Programar el ventilador para lograr una Hiperventilación Profiláctica agresiva con un objetivo de PaCO2 de 25 mmHg."
      },
      {
        id: "C",
        label: "C",
        text: "Mantener la saturación de oxígeno (SatO2) por encima de 95%.",
        distractorProfile: "correct_action_asked_for_incorrect",
        incorrectFeedback: "Mantener buena oxigenación es un pilar CORRECTO del manejo."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar terapia hiperosmolar (Solución Salina Hipertónica al 3%) si la PIC aumenta.",
        distractorProfile: "correct_action_asked_for_incorrect",
        incorrectFeedback: "Usar soluciones hiperosmolares es mandatorio para el manejo de la HIC, no debe evitarse."
      }
    ],
    correctOptionId: "B",
    explanation: "ESTA ES LA CONDUCTA LETAL A EVITAR. Históricamente, a todos los pacientes con trauma craneal se les hiperventilaba (aumentando la frecuencia respiratoria del ventilador para 'barrer' el CO2 y dejarlo en 25 mmHg). Al bajar el CO2, los vasos sanguíneos del cerebro hacen una vasoconstricción extrema, lo que efectivamente baja el volumen de sangre y disminuye la presión intracraneana (PIC). ¡Pero a un costo terrible! Al cerrar los vasos, se corta el suministro de oxígeno al cerebro lesionado, induciendo ISQUEMIA CEREBRAL SECUNDARIA MASIVA. Las guías modernas de la Brain Trauma Foundation prohíben estrictamente la hiperventilación profiláctica (< 30 mmHg), especialmente en las primeras 24 horas del trauma.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., jugar con el ventilador mecánico en un trauma en la cabeza es como manejar una bomba. El CO2 es el regulador del calibre de las arterias del cerebro. Si tú lo pones a respirar a 30 por minuto para 'deshincharle' el cerebro, lo vas a lograr porque exprimiste toda la sangre de él al cerrar las arterias. Bajaste la presión, pero mataste las neuronas por asfixia. Mantén el CO2 en 35, usa manitol o sodio hipertónico para secar el edema, pero déjale sus arterias abiertas para que la sangre circule.",
    keyPoints: [
      "Objetivo ventilatorio en TCE Severo: Normocapnia (PaCO2 35-40 mmHg).",
      "CONTRAINDICADA: Hiperventilación profiláctica profunda (PaCO2 < 30 mmHg).",
      "Razón de la contraindicación: Riesgo letal de isquemia cerebral por vasoconstricción severa."
    ]
  },
  {
    id: "umng-conv-ed2-35",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Usted atiende un parto por vía vaginal de una paciente diabética, cuyo feto fue estimado por ecografía en 4.500 g (macrosomía fetal). Tras una prolongada fase de expulsivo, la cabeza fetal emerge del introito vaginal, pero inmediatamente 'retrocede' hundiéndose fuertemente contra el periné materno (Signo de la Tortuga). Tras intentar una tracción axial suave hacia abajo de la cabeza fetal, el resto del cuerpo no logra salir debido a que el diámetro biacromial ha quedado atascado. Usted diagnostica una Distocia de Hombros. ¿Cuál es el paso INICIAL, simultáneo, que usted como obstetra principal debe coordinar obligatoriamente junto a sus asistentes para resolver esta emergencia en los próximos 60 segundos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar tracción fuerte y sostenida de la cabeza y el cuello fetal hacia abajo para liberar el hombro anterior.",
        distractorProfile: "contraindicated_intervention",
        incorrectFeedback: "La tracción agresiva del cuello está ESTRICTAMENTE PROHIBIDA porque no libera el hombro, sino que arranca el Plexo Braquial del feto (Parálisis de Erb-Duchenne)."
      },
      {
        id: "B",
        label: "B",
        text: "Efectuar la maniobra de Kristeller (presión enérgica sobre el fondo uterino) para empujar al feto hacia afuera.",
        distractorProfile: "dangerous_obsolete_practice",
        incorrectFeedback: "La maniobra de Kristeller en distocia de hombros es LETAL. Al empujar desde el fondo, el hombro atascado se incrusta aún más detrás del hueso púbico materno."
      },
      {
        id: "C",
        label: "C",
        text: "Flexionar agudamente los muslos maternos contra su propio abdomen y aplicar presión suprapúbica constante (Maniobra de McRoberts + Presión de Rubin I)."
      },
      {
        id: "D",
        label: "D",
        text: "Fracturar intencionalmente la clavícula del feto (Maniobra de Cleidotomía) como primer abordaje.",
        distractorProfile: "last_resort_used_early",
        incorrectFeedback: "La fractura intencional de clavícula es una maniobra de último recurso de rescate cuando todas las maniobras primarias han fracasado, no es de entrada."
      }
    ],
    correctOptionId: "C",
    explanation: "El primer paso del algoritmo 'ALARMER' es pedir a los asistentes que flexionen bruscamente las piernas de la madre contra su abdomen (Maniobra de McRoberts). Esto aplana la lordosis sacra y rota la sínfisis del pubis hacia arriba. Al mismo tiempo, otro asistente aplica presión fuerte y oblicua justo por encima del hueso púbico (Presión Suprapúbica o de Rubin I) para empujar el hombro anterior fetal por debajo del hueso. Esta combinación soluciona casi el 90% de las distocias de hombro en un minuto.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando sale la cabeza del niño y se vuelve a meter hacia atrás (Signo de la tortuga), tienes el reloj en tu contra. Tienes 5 minutos antes de que el bebé se asfixie por compresión del cordón. Retira tus manos del cuello del bebé. Si lo halas asustado, le arrancarás los nervios del brazo para siempre. Grita a las enfermeras: '¡Piernas a las orejas!'. Ellas doblarán las piernas (McRoberts), la pelvis se abrirá mecánicamente un centímetro más y tú o tu ayudante presionarán encima del vello púbico (nunca el fondo) empujando hacia abajo. El hombro del bebé se resbalará por debajo del hueso.",
    keyPoints: [
      "Cabeza que 'se asoma y se esconde' (Signo de la tortuga) = Distocia de Hombros.",
      "Primer paso inmediato: Maniobra de McRoberts + Presión SUPRAPÚBICA.",
      "Contraindicaciones absolutas: Tracción fuerte de la cabeza y maniobra de Kristeller (presión fúndica)."
    ]
  },
  {
    id: "umng-conv-ed2-36",
    university: "UMNG",
    examArea: "CIRUGÍA VASCULAR",
    topic: "URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 68 años, con antecedente de Fibrilación Auricular permanente en mal control y sin tratamiento anticoagulante hace un mes, ingresa a urgencias en silla de ruedas, gritando de dolor en la pierna izquierda. Refiere que el dolor inició como un relámpago hace apenas 2 horas mientras veía televisión. A la exploración física, la extremidad inferior izquierda, desde la rodilla hasta el pie, se encuentra totalmente pálida (blanca como cera), muy fría al tacto y el paciente es incapaz de mover los dedos o el tobillo (plejía). Además, refiere que 'ya no siente el pie' (anestesia profunda). A la palpación, hay ausencia total de pulso poplíteo, pedio y tibial posterior. Antes de llamar desesperadamente al cirujano vascular y solicitar un eco-Doppler arterial, ¿cuál es la primera medida FARMACOLÓGICA salvavidas que usted, como médico de urgencias, DEBE instaurar en los primeros 10 minutos de la llegada del paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administración de Aspirina 300 mg y Clopidogrel 300 mg masticados.",
        distractorProfile: "wrong_drug_class",
        incorrectFeedback: "Los antiagregantes plaquetarios son excelentes para la enfermedad arterial periférica crónica o el infarto coronario (SCA), pero aquí el problema es un megacoágulo (émbolo) procedente del corazón."
      },
      {
        id: "B",
        label: "B",
        text: "Infusión intravenosa de Cilostazol y Pentoxifilina a altas dosis.",
        distractorProfile: "wrong_indication",
        incorrectFeedback: "El Cilostazol se usa para el dolor crónico al caminar (claudicación intermitente), no sirve absolutamente de nada en la oclusión embólica aguda."
      },
      {
        id: "C",
        label: "C",
        text: "Aplicación inmediata de un bolo intravenoso de Heparina No Fraccionada."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciación de Warfarina oral a doble dosis de carga.",
        distractorProfile: "delayed_action",
        incorrectFeedback: "La warfarina toma 3 a 5 días en hacer efecto terapéutico; el paciente perderá la pierna hoy."
      }
    ],
    correctOptionId: "C",
    explanation: "En una isquemia arterial aguda grave (Clasificación de Rutherford IIb o III, con déficit neurológico motor y sensitivo), la pierna morirá y será amputada si no se revasculariza en un margen de 4 a 6 horas. Mientras se contacta al cirujano para llevarlo a una Embolectomía (el tratamiento definitivo), la conducta médica obligatoria INICIAL es inyectar un bolo de Heparina No Fraccionada (HNF) intravenosa. La heparina NO va a disolver el coágulo principal atascado, pero es vital porque EVITA LA PROPAGACIÓN DEL TROMBO. Si la arteria principal se tapa, la sangre se estanca hacia 'abajo', y ese remanso forma nuevos coágulos ('trombosis secundaria de la cola'), bloqueando las colaterales distales.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., un coágulo del tamaño de una uva salió bailando de la aurícula izquierda y aterrizó taponando su arteria poplítea. Desde donde el coágulo tapó hacia abajo, la sangre de las arterias distales está 'quieta'. Y la sangre que se queda quieta, se coagula en 10 minutos. Si tú no le inyectas ese bolo de Heparina mientras esperas al cirujano vascular, todas las arteriecitas diminutas de sus dedos se rellenarán de cemento coagulado sólido. Cuando el cirujano destape la arteria principal 3 horas después, ya no servirá de nada y la pierna será amputada. ¡Heparinízalo de entrada!",
    keyPoints: [
      "Isquemia Arterial Aguda (6 P's): Pain, Pallor, Pulselessness, Paresthesias, Paralysis, Poikilothermia.",
      "Anestesia/Plejía = Isquemia Severa que amenaza la extremidad.",
      "Primer paso farmacológico en urgencias: BOLO DE HEPARINA IV INMEDIATO (Evita propagación por estasis distal)."
    ]
  },
  {
    id: "umng-conv-ed2-37",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "PEDIATRÍA URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una niña de 3 años es traída a urgencias por sus angustiados padres, quienes la encontraron en el patio trasero de la casa llorando, tosiendo, con babeo intenso (sialorrea) y agarrándose el cuello tras haber tomado del pico de una botella abandonada que contenía un 'Destapador de cañerías industrial líquido' (Altamente cáustico/álcali fuerte). Al examen en urgencias, la niña luce irritable, con estridor inspiratorio leve y hay escaras blanquecinas/gelatinosas alrededor de sus labios y mucosa oral. La madre le implora que 'le haga un lavado al estómago a la niña antes de que el veneno la queme por dentro' y sugiere darle un vaso grande de leche para suavizar el químico. ¿Qué intervención o procedimiento está ESTRICTAMENTE CONTRAINDICADO y sería fatal en este escenario específico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar Endoscopia de vías digestivas altas para evaluar quemaduras esofágicas en las primeras 12 a 24 horas.",
        distractorProfile: "correct_action_asked_for_incorrect",
        incorrectFeedback: "Esta es la conducta CORRECTA, por lo tanto, no es la contraindicada. Es el Gold Standard para evaluar la mucosa."
      },
      {
        id: "B",
        label: "B",
        text: "Asegurar el control de la vía aérea previendo un edema laringotraqueal inminente.",
        distractorProfile: "correct_action_asked_for_incorrect",
        incorrectFeedback: "Asegurar la vía aérea es una prioridad CORRECTA en ingesta de cáusticos con estridor."
      },
      {
        id: "C",
        label: "C",
        text: "Inducir el vómito médicamente (con jarabe de ipecacuana), lavado gástrico, y administración de neutralizantes ácidos o leche."
      },
      {
        id: "D",
        label: "D",
        text: "Mantener a la paciente en ayuno absoluto (NPO) e instaurar terapia hídrica intravenosa.",
        distractorProfile: "correct_action_asked_for_incorrect",
        incorrectFeedback: "Dejar al paciente NPO es totalmente CORRECTO."
      }
    ],
    correctOptionId: "C",
    explanation: "En la ingestión de cáusticos (Álcalis fuertes o Ácidos fuertes), todo intento de evacuación gástrica o neutralización está ESTRICTAMENTE CONTRAINDICADO. 1. Inducir el vómito: Si la niña vomita, el químico subirá quemando una SEGUNDA VEZ el esófago (doble quemadura), y el altísimo riesgo de broncoaspiración derretirá los pulmones letalmente. 2. Lavado gástrico con sonda: Al meter un tubo a ciegas en un esófago necrosado ('papel de seda'), la sonda lo perforará causando mediastinitis mortal. 3. Neutralizar (Dar ácidos suaves o leche): La química básica dicta que mezclar un ácido con una base fuerte genera una reacción exotérmica masiva. Es decir, liberan calor hirviente que cocina o rostiza los tejidos desde adentro.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., los álcalis (soda cáustica, destapadores de baños) son los peores. Hacen una necrosis de 'licuefacción'; literalmente disuelven y vuelven gelatina la pared del esófago. Si le metes un tubo de lavado gástrico a ciegas, vas a agujerear la pared torácica y derramarás ese ácido letal en el mediastino. Y si le haces caso a la abuela de 'darle un vasito de leche para calmar', la reacción química en su estómago generará tanto calor que el agua hervirá, cocinándole la mucosa. Ni un sorbo de agua, ayuno total y pide la endoscopia para las próximas 12-24 horas.",
    keyPoints: [
      "Ingestión de Cáusticos (Álcalis/Ácidos).",
      "Contraindicaciones absolutas: Inducir Vómito, Lavado Gástrico, Carbón Activado y Neutralizantes (Vinagre/Limón/Leche).",
      "Razón: Riesgo extremo de re-quemadura, perforación esofágica y lesión térmica exotérmica."
    ]
  },
  {
    id: "umng-conv-ed2-38",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "UROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Hombre de 60 años, con antecedente de Diabetes Mellitus tipo 2 mal controlada y alcoholismo crónico, consulta por dolor incapacitante en el periné y aumento de volumen escrotal de 2 días de evolución. Hoy se siente gravemente enfermo, con fiebre de 39°C y confusión. Al examen físico, se observa un eritema violáceo masivo que abarca el escroto, el periné y se extiende hacia la base del abdomen, con áreas de necrosis negruzca con secreción fétida (olor a 'agua de lavar carne'). A la palpación de la piel escrotal y perineal, usted siente una franca crepitación (sensación de pisar nieve crujiente bajo la piel). El paciente se encuentra en choque séptico (PA 80/40 mmHg). Tras la resucitación inicial agresiva con líquidos y el inicio de antibióticos de amplio espectro (Carbapenémicos + Clindamicina), ¿cuál es el PASO MÁS IMPORTANTE y definitivo que reduce la mortalidad altísima en esta patología?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar una Resonancia Magnética de pelvis urgente para delimitar exactamente las fascias comprometidas antes de operar.",
        distractorProfile: "delay_in_treatment",
        incorrectFeedback: "El diagnóstico de la Fascitis Necrotizante es CLÍNICO. Si esperas un resonador, el paciente muere de sepsis. No se requieren imágenes si hay crepitación clínica y sepsis."
      },
      {
        id: "B",
        label: "B",
        text: "Ingreso a Unidad de Cuidados Intensivos (UCI) e inicio urgente de Oxígeno en Cámara Hiperbárica para erradicar las bacterias anaerobias.",
        distractorProfile: "adjunctive_not_primary",
        incorrectFeedback: "La cámara hiperbárica es un adyuvante controversial postoperatorio, pero JAMÁS es el tratamiento primario ni reemplaza al bisturí."
      },
      {
        id: "C",
        label: "C",
        text: "Desbridamiento quirúrgico abierto extenso e inmediato en el quirófano, resecando todo el tejido necrótico hasta encontrar tejido sangrante sano."
      },
      {
        id: "D",
        label: "D",
        text: "Colocación de drenajes percutáneos múltiples a lo largo del escroto guiados por ecografía para evacuar el gas acumulado.",
        distractorProfile: "insufficient_treatment",
        incorrectFeedback: "La infección viaja por los planos de la fascia profunda. Un tubo de drenaje percutáneo no sacará tejido necrosado sólido."
      }
    ],
    correctOptionId: "C",
    explanation: "La Gangrena de Fournier (Fascitis Necrotizante perineal) es una urgencia quirúrgica absoluta e innegociable. El tratamiento médico (antibióticos) fracasará si no hay desbridamiento mecánico inmediato, porque los vasos sanguíneos que llegan a esa piel están trombosados y podridos, de forma que el antibiótico nunca llegará al sitio del problema. La única cura es cortar sin piedad todo lo muerto. El cirujano abrirá y recortará toda la piel y grasa maloliente hasta que los bordes sangren rojo vivo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagínate un hongo come-carne que avanza por debajo de la piel de tus genitales a la velocidad que se quema una mecha de pólvora. Las bacterias, al encontrar la humedad del diabético, causan que la fascia se pudra. Cuando tocas el escroto y cruje como si tuvieras plástico de burbujitas debajo de los dedos (gas de los clostridios), esa piel ya está muerta. No le pidas un TAC de rutina. Llévatelo al quirófano a las 3 de la madrugada. Coge las tijeras quirúrgicas y recorta toda la piel del escroto y el abdomen que se despegue. Quedará en carne viva, pero vivo. (Perla: los testículos casi siempre se salvan, porque tienen irrigación independiente que viene directo de la aorta, no de la piel).",
    keyPoints: [
      "Infección perineal + Diabético + Crepitación/Necrosis = Gangrena de Fournier.",
      "El diagnóstico es clínico; retrasar la cirugía por imágenes es mala praxis.",
      "Tratamiento salvavidas: Desbridamiento quirúrgico extenso INMEDIATO."
    ]
  },
  {
    id: "umng-conv-ed2-39",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un niño de 2 años, previamente sano y sin antecedentes de estreñimiento, es traído por su madre a la sala de urgencias tras presentar un episodio brusco de evacuación de heces abundantes de color 'rojo ladrillo' (hematoquecia franca / rectorragia masiva) que empaparon su pañal. La madre está horrorizada por la cantidad de sangre. Lo más llamativo del caso es que el niño está completamente tranquilo, NO ha presentado llanto por dolor abdominal, no hay cólicos, ni masa palpable, ni vómitos, ni fiebre. Al examen, el niño está levemente pálido, con FC de 130 lpm y PA normal. El abdomen es blando, depresible e indoloro. Dada esta presentación semiológica clásica indolente, ¿cuál es el examen diagnóstico (Gold Standard) de elección para confirmar la sospecha etiológica en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ecografía abdominal buscando imagen 'en diana' o 'pseudoriñón'.",
        distractorProfile: "similar_presentation_different_symptoms",
        incorrectFeedback: "La ecografía 'en diana' es para Intususcepción. Sin embargo, en la intususcepción el niño presenta crisis de llanto con dolor abdominal extremo, flexiona las piernas y heces en 'jalea de grosella'. Este niño no tiene dolor."
      },
      {
        id: "B",
        label: "B",
        text: "Gammagrafía con Tecnecio-99m Pertecnetato."
      },
      {
        id: "C",
        label: "C",
        text: "Colonoscopia total urgente bajo anestesia general.",
        distractorProfile: "wrong_procedure_location",
        incorrectFeedback: "El divertículo de Meckel está en el íleon distal (intestino delgado). Los colonoscopios convencionales fallan en llegar consistentemente a esa zona alta."
      },
      {
        id: "D",
        label: "D",
        text: "Radiografía de vías digestivas altas con tránsito de Bario.",
        distractorProfile: "ineffective_test",
        incorrectFeedback: "El estudio de bario no permite visualizar este pequeño divertículo y opaca la placa retrasando estudios nucleares."
      }
    ],
    correctOptionId: "B",
    explanation: "El sangrado masivo gastrointestinal inferior, de color rojo oscuro, y COMPLETAMENTE INDOLORO en un paciente pediátrico (clásicamente de 2 años), es la presentación patognomónica del Divertículo de Meckel sangrante. El divertículo contiene un parche de mucosa gástrica ectópica que secreta ácido y úlcera el íleon adyacente, el cual sangra de forma silenciosa e indolora. El 'Gold Standard' diagnóstico es la Gammagrafía de Meckel con Tecnecio-99m Pertecnetato, el cual es captado selectivamente por las células de la mucosa gástrica aberrante.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este niño te engaña en la urgencia porque llega jugando y sonriendo, pero el pañal parece la escena de un crimen. Si le tocas la barriga, es suave y no se queja. Ese divertículo tiene células del estómago que están chorreando ácido sobre un intestino delgado que no está protegido para recibir acidez. Rompió una arteriecita. Si el niño llorara y se retorciera del dolor, pensarías en Intususcepción (y pedirías Ecografía). Pero como NO LE DUELE NADA, es Meckel. Mándalo a medicina nuclear; verán un punto brillante a la derecha del ombligo (la mucosa gástrica ectópica captando el isótopo).",
    keyPoints: [
      "Hemorragia digestiva baja masiva + Niño (2 años) + INDOLORO = Divertículo de Meckel.",
      "Regla de los 2: 2% población, 2 pies de válvula ileocecal, 2 pulgadas, 2 tipos de mucosa (gástrica/pancreática), 2 años de edad.",
      "Diagnóstico de Oro: Gammagrafía con Tecnecio-99m (Escaneo de Meckel)."
    ]
  },
  {
    id: "umng-conv-ed2-40",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "ONCOLOGÍA Y URGENCIAS METABÓLICAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Hombre de 68 años con antecedente de tabaquismo pesado y pérdida de peso de 15 kg en los últimos 4 meses, fue diagnosticado recientemente con Carcinoma Escamocelular Pulmonar de pulmón derecho, sin metástasis óseas conocidas. Es traído a urgencias por sus familiares porque lleva tres días con profunda letargia, desorientación progresiva, estreñimiento extremo y poliuria (orina grandes volúmenes constantemente). Al examen físico, paciente severamente deshidratado, mucosas secas, Glasgow 11, PA 100/60 mmHg. El electrocardiograma muestra un intervalo QT acortado. En los exámenes de laboratorio, la Creatinina es de 2.2 mg/dL y usted halla un nivel sérico de Calcio Corregido de 15.8 mg/dL (Hipercalcemia crítica severa). ¿Cuál es el paso INICIAL y MÁS URGENTE en el tratamiento escalonado de esta crisis metabólica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administración de Calcitonina subcutánea e infusión de Bifosfonatos (Ácido Zoledrónico).",
        distractorProfile: "second_line_given_first",
        incorrectFeedback: "Los bifosfonatos son la piedra angular curativa, pero actúan en 48-72 horas y son nefrotóxicos si se dan en un paciente severamente deshidratado. No son el Paso 1."
      },
      {
        id: "B",
        label: "B",
        text: "Inicio de hemodiálisis de urgencia ante la refractariedad diurética de la falla renal y el calcio de >15.",
        distractorProfile: "last_resort",
        incorrectFeedback: "La diálisis es el último recurso reservado a insuficiencia renal anúrica o falla cardíaca que no tolera líquidos."
      },
      {
        id: "C",
        label: "C",
        text: "Infusión endovenosa de Glucocorticoides a dosis altas (Hidrocortisona) para bloquear la absorción de calcio.",
        distractorProfile: "wrong_etiology",
        incorrectFeedback: "Los esteroides sirven para hipercalcemia por Linfoma, Mieloma o exceso de Vitamina D. En tumores sólidos que secretan PTHrP falso (como el de este paciente), no tienen eficacia."
      },
      {
        id: "D",
        label: "D",
        text: "Reanimación vigorosa con líquidos endovenosos (Solución Salina Normal al 0.9%) en infusión continua rápida."
      }
    ],
    correctOptionId: "D",
    explanation: "El pilar fundamental y absoluto de rescate inmediato en la crisis hipercalcémica maligna es la Reanimación Vigorosa de Volumen con Solución Salina Normal (SSN 0.9%). La hipercalcemia alta bloquea los receptores de ADH en el riñón, causando una Diabetes Insípida Nefrogénica. El paciente poliúrico se deshidrata profundamente, colapsando la tasa de filtración glomerular, lo que impide excretar el calcio. Dar 2 a 4 Litros de SSN revierte la deshidratación, mejora la filtración y 'lava' el calcio a través de la orina, preparando al riñón para poder tolerar posteriormente los bifosfonatos venenosos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., las hipercalcemias crudas en urgencias son engañosas. El viejito se queda dormido y se estreñe porque el calcio masivo actúa como un 'bloqueador de cemento'; nada se mueve. Lo paradójico es que sus riñones pierden la capacidad de concentrar orina y botan galones de agua transparente, secando al abuelo. Tú no resuelves eso inyectándole primero medicamentos elegantes contra el hueso como el Zometa. Tienes que colgar bolsas de Suero Fisiológico a chorro, diluir la sangre, despertar al riñón apagado para que filtre y bote el exceso de calcio. ¡El agua (salina normal) es el paso 1 innegociable!",
    keyPoints: [
      "Hipercalcemia Maligna (Coma, Poliuria, Constipación, QT Corto) secundaria a Carcinoma Escamocelular (PTHrP).",
      "Paso #1 INICIAL: Líquidos IV agresivos (Salina Normal al 0.9%) para revertir deshidratación poliúrica y lavar calcio.",
      "Paso #2 (Tardío, post-hidratación): Bifosfonatos (Ácido Zoledrónico) / Calcitonina."
    ]
  }
];
