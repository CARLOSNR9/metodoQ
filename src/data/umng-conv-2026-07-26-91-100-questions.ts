import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #1 (26 jul 2026) · Preguntas #91–#100.
 */
export const UMNG_CONV_2026_07_26_91_100_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-2026-07-26-91",
    university: "UMNG",
    examArea: "TRAUMA / UROLOGÍA",
    topic: "UROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un hombre de 35 años sufre un accidente de tránsito frontal tras haber salido de una fiesta, por lo que viajaba con la vejiga repleta. Llevaba puesto el cinturón de seguridad. Al ingreso a urgencias, el paciente está estable pero refiere dolor abdominal difuso y no ha podido orinar. A la exploración, presenta equimosis en el hipogastrio y dolor a la palpación profunda abdominal. Se le pasa una sonda uretral sin dificultad, obteniendo orina francamente hemática (hematuria macroscópica). Un TAC abdominopélvico con cistografía retrógrada revela la presencia de contraste extravasado que se dibuja delineando las asas intestinales en la cavidad abdominal superior. ¿Cuál es la conducta quirúrgica y terapéutica MANDATORIA en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Retirar la sonda Foley inmediatamente y programar para cistoscopia diagnóstica en 48 horas.",
        distractorProfile: "fatal_urine_leak",
        incorrectFeedback: "Retirar la sonda provocará peritonitis urinosa masiva y uremia por reabsorción intraperitoneal."
      },
      {
        id: "B",
        label: "B",
        text: "Dejar la sonda Foley a permanencia por 14 a 21 días para permitir el cierre espontáneo de la herida, sin cirugía.",
        distractorProfile: "wrong_bladder_rupture_type",
        incorrectFeedback: "Esto es correcto para la ruptura EXTRAPERITONEAL, pero este paciente tiene ruptura INTRAPERITONEAL (contraste delineando asas)."
      },
      {
        id: "C",
        label: "C",
        text: "Trasladar a quirófano para Laparotomía exploratoria, cierre de la vejiga y lavado peritoneal."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar un drenaje percutáneo guiado por TAC de la cavidad abdominal y administrar antibióticos.",
        distractorProfile: "ineffective_drainage",
        incorrectFeedback: "Un tubo no cerrará un estallido masivo de la cúpula vesical hacia el peritoneo."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta Ruptura de Vejiga Intraperitoneal (estallido de vejiga llena por cinturón, contraste delineando asas intestinales). A diferencia de la extraperitoneal (que se maneja con sonda 14-21 días), la ruptura INTRAPERITONEAL es indicación quirúrgica ABSOLUTA. El defecto en la cúpula vesical es grande, no cicatriza solo y la orina produce peritonitis química. Requiere Laparotomía, sutura de la vejiga en dos planos, lavado de cavidad y sonda uretral.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si este paciente se queda en urgencias con la pura sondita porque crees que 'urología no se opera agudo', esa orina irritará todo el peritoneo y morirá de un íleo paralítico por peritonitis urinosa. Reventar un globo lleno de agua dentro de la caja de los intestinos exige entrar, secar el charco y coser el globo.",
    keyPoints: [
      "Cuando veas:",
      "• Trauma (Cinturón) + Hematuria + TAC: Contraste delineando asas intestinales.",
      "Debes pensar en:",
      "Ruptura Vesical Intraperitoneal. Conducta mandatoria: Laparotomía (Cirugía).",
      "Tema: Trauma / Urología."
    ]
  },
  {
    id: "umng-conv-2026-07-26-92",
    university: "UMNG",
    examArea: "MEDICINA TROPICAL / SALUD PÚBLICA",
    topic: "SALUD PÚBLICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un soldado de 22 años, sin carné de vacunación, es evacuado del Putumayo tras 6 días de un cuadro febril severo de inicio súbito, cefalea, mialgias y postración. En su segundo día de hospitalización, el paciente presenta un deterioro fulminante: la temperatura es de 39.5°C, pero llamativamente su frecuencia cardíaca es de apenas 55 lpm (bradicardia). Al examen físico, usted nota ictericia marcada en piel y escleras, y el paciente presenta un episodio de vómito abundante de aspecto en \"cuncho de café\" (hematemesis). Los paraclínicos muestran AST en 3.500 U/L, ALT en 4.000 U/L, Creatinina de 3.5 mg/dL y un recuento de plaquetas de 30.000. ¿Cuál es el diagnóstico clínico más compatible con esta viñeta epidemiológica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Malaria Severa por Plasmodium falciparum.",
        distractorProfile: "malaria_mimic_faget",
        incorrectFeedback: "La malaria da falla renal e ictericia, pero su fiebre se acompaña de taquicardia extrema, no de bradicardia (Signo de Faget)."
      },
      {
        id: "B",
        label: "B",
        text: "Fiebre Amarilla (Fase de intoxicación)."
      },
      {
        id: "C",
        label: "C",
        text: "Hepatitis B fulminante.",
        distractorProfile: "wrong_epidemiology_faget",
        incorrectFeedback: "No es una enfermedad de selva aguda, ni da bradicardia relativa ni falla renal aguda masiva simultánea."
      },
      {
        id: "D",
        label: "D",
        text: "Leptospirosis (Síndrome de Weil).",
        distractorProfile: "leptospirosis_mimic",
        incorrectFeedback: "Lepto da inyección conjuntival y dolor en pantorrillas, pero cursa con taquicardia, no Signo de Faget."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro de fiebre alta con bradicardia relativa (Signo de Faget) sumado a ictericia grave, transaminasas elevadísimas y hematemesis ('Vómito negro') en un paciente de zona selvática no vacunado, es patognomónico de Fiebre Amarilla en su fase tóxica. El virus destruye masivamente el hígado causando falla de coagulación fulminante.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEn las selvas, la fiebre amarilla despacha a las tropas no vacunadas. El hígado se licúa por dentro; por eso no hay factores de coagulación. La sangre llega al estómago y el paciente la vomita negra. El Signo de Faget te debe saltar a los ojos en urgencias: no es fisiológico que un hombre con 40 grados de fiebre tenga el corazón a 55 latidos. Esa discordancia es el grito del virus en el nódulo sinusal.",
    keyPoints: [
      "Cuando veas:",
      "• Selva + No vacunado + Signo de Faget (Fiebre + Bradicardia) + Ictericia + Vómito Negro.",
      "Debes pensar en:",
      "Fiebre Amarilla (Fase Tóxica).",
      "Tema: Medicina Tropical / Flavivirus."
    ]
  },
  {
    id: "umng-conv-2026-07-26-93",
    university: "UMNG",
    examArea: "ÉTICA MÉDICA / LEGISLACIÓN COLOMBIANA",
    topic: "ÉTICA MÉDICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un niño de 6 años es traído a urgencias tras ser atropellado. Ingresa con choque hemorrágico severo clase IV por estallido esplénico. El cirujano general indica transfusión sanguínea masiva inmediata y Laparotomía exploratoria. Los padres del menor, ambos conscientes y legalmente capaces, se identifican como Testigos de Jehová y prohíben de forma rotunda e irrevocable la transfusión basándose en sus creencias religiosas, firmando un documento de disentimiento informado. Teniendo en cuenta la Constitución y la Jurisprudencia de Colombia frente a la ética médica de urgencias, ¿cuál es la conducta OBLIGATORIA a seguir por el médico de turno?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Acatar la decisión de los padres, ya que son los representantes legales del menor, y transfundir únicamente expansores plasmáticos o cristaloides.",
        distractorProfile: "fatal_respect_of_autonomy_minor",
        incorrectFeedback: "El derecho a la vida del niño prevalece sobre la patria potestad y la libertad de cultos de los padres."
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar de inmediato la intervención de un Juez de la República para que decida, suspendiendo cualquier transfusión hasta obtener la orden judicial.",
        distractorProfile: "judicial_delay_in_emergency",
        incorrectFeedback: "En emergencia vital absoluta, el médico no puede esperar a un juez. Está protegido por el Estado de Necesidad."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar la transfusión sanguínea de inmediato, pasando por encima de la voluntad de los padres para salvar la vida del niño."
      },
      {
        id: "D",
        label: "D",
        text: "Convocar al comité de ética del hospital de urgencia para mediar y llegar a un consenso con la familia antes de actuar.",
        distractorProfile: "ethics_committee_delay",
        incorrectFeedback: "El comité se usa para dilemas no vitales urgentes. El niño morirá mientras el comité se reúne."
      }
    ],
    correctOptionId: "C",
    explanation: "La jurisprudencia en Colombia (y en gran parte del mundo) es clara: el derecho fundamental a la vida del menor de edad prima sobre la libertad de culto (autonomía) de sus padres. Frente a una urgencia vital inminente (riesgo de muerte a corto plazo), el médico debe invocar el Principio de Beneficencia y el Estado de Necesidad para transfundir la sangre sin importar la negativa de los padres. No hacerlo y dejar morir al niño constituye homicidio culposo por omisión.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ponte la armadura legal. Si este fuera un señor de 40 años, lo saludas y le respetas su autonomía hasta la muerte. Pero a los 6 años, el Estado no permite sacrificios religiosos. Así los padres te amenacen con demandarte o pongan abogados en la puerta, tú conectas esa bolsa de Glóbulos Rojos a la vena del niño. Frente a un juez penal, siempre estarás absuelto por proteger el bien superior de la vida infantil.",
    keyPoints: [
      "Cuando veas:",
      "• Menor de edad + Urgencia Vital Inminente + Padres rechazan tratamiento (Testigos de Jehová).",
      "Debes pensar en:",
      "Actuar contra la voluntad de los padres (Principio de Beneficencia). Transfundir inmediatamente.",
      "Tema: Ética Médica / Legislación."
    ]
  },
  {
    id: "umng-conv-2026-07-26-94",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Gestante de 39 semanas, G3P2, en trabajo de parto activo (dilatación 7 cm, estación fetal -2). Presenta ruptura espontánea de membranas y de inmediato, el monitor fetal detecta una bradicardia fetal de 70 lpm que no se recupera. Al tacto vaginal, usted palpa una estructura pulsátil y similar a un cordón blando en la cavidad vaginal, por debajo de la cabeza fetal. Ante este hallazgo catastrófico, ¿cuál es la primera maniobra salvavidas que usted DEBE realizar en la sala de partos antes del traslado a quirófano?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Intentar reintroducir el cordón umbilical dentro de la cavidad uterina por encima de la cabeza fetal.",
        distractorProfile: "fatal_cord_manipulation",
        incorrectFeedback: "Reintroducir el cordón causa vasoespasmo umbilical masivo reflejo, asfixiando al feto de inmediato."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar oxitocina a dosis altas para acelerar el expulsivo y realizar un parto vaginal rápido.",
        distractorProfile: "worsening_cord_compression",
        incorrectFeedback: "Aumentar contracciones con presentación en -2 solo aplastará aún más el cordón contra la pelvis."
      },
      {
        id: "C",
        label: "C",
        text: "Introducir la mano en la vagina y elevar manualmente la cabeza fetal (rechazo de la presentación) para descomprimir el cordón."
      },
      {
        id: "D",
        label: "D",
        text: "Extraer el cordón prolapsado, pinzarlo rápidamente y cortar para evitar la isquemia vagal refleja.",
        distractorProfile: "fatal_cord_cutting",
        incorrectFeedback: "Cortar el cordón con el bebé in utero es exanguinación/asfixia letal absoluta."
      }
    ],
    correctOptionId: "C",
    explanation: "El cuadro clínico corresponde a un Prolapso (Procidencia) de Cordón Umbilical, una emergencia obstétrica extrema. La cabeza fetal está aplastando el cordón umbilical contra la pelvis ósea materna durante las contracciones. La maniobra salvavidas obligatoria es que el examinador introduzca la mano en la vagina y empuje manualmente (eleve) la presentación fetal hacia arriba (rechazo) para quitarle el peso al cordón y restablecer la circulación. Se debe mantener esta posición ininterrumpidamente durante el traslado urgente a Cesárea.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., te garantizo que vivir este momento quita años de vida. Haces el tacto, y en vez de sentir una cabecita dura, sientes un fideo gordo latiendo. ¡Es el salvavidas del niño! Mete los dedos en la vagina, agarra la frente del bebé y empújala duro hacia las costillas de la mamá. Que nadie te quite de ahí. Te vas subido en la camilla hacia quirófano aguantando el calambre de tus dedos hasta que saquen al bebé.",
    keyPoints: [
      "Cuando veas:",
      "• RPM + Bradicardia Súbita + Cordón palpable en vagina.",
      "Debes pensar en:",
      "Prolapso de Cordón. Maniobra: Elevar manualmente la presentación por vía vaginal y Cesárea Urgente. (NUNCA intentar meter el cordón).",
      "Tema: Obstetricia / Urgencias Intraparto."
    ]
  },
  {
    id: "umng-conv-2026-07-26-95",
    university: "UMNG",
    examArea: "PEDIATRÍA / URGENCIAS",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un niño de 2 años se encontraba comiendo maní cuando presenta acceso de tos, cianosis transitoria y estridor. Al llegar a urgencias, el niño tose con sonido metálico. A la auscultación, hipoventilación marcada en hemitórax DERECHO, con sibilancias inspiratorias focales en ese lado. El pulmón izquierdo es normal. La radiografía de tórax en inspiración y espiración muestra hiperinsuflación y atrapamiento de aire en el pulmón derecho. ¿Cuál es el procedimiento diagnóstico y terapéutico de elección que requiere realizarse de urgencia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar Maniobra de Heimlich de inmediato en la sala de urgencias.",
        distractorProfile: "fatal_heimlich_partial_obstruction",
        incorrectFeedback: "Heimlich es SOLO para obstrucción completa (niño no tose, no llora). Hacerlo aquí puede impactar el maní en la glotis y matarlo."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar nebulizaciones de Adrenalina Racémica y Salbutamol para resolver el broncoespasmo reflejo.",
        distractorProfile: "wrong_medical_therapy_fb",
        incorrectFeedback: "Los broncodilatadores no evaporan un maní sólido."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar Broncoscopia Rígida bajo anestesia general en el quirófano."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar antibióticos intravenosos empíricos y esperar la expulsión espontánea del maní.",
        distractorProfile: "expectant_management_fb",
        incorrectFeedback: "Cuerpos extraños orgánicos nunca se expulsan solos y causan neumonitis y abscesos masivos."
      }
    ],
    correctOptionId: "C",
    explanation: "El cuadro clínico (tos súbita comiendo, sibilancias unilaterales, hiperinsuflación derecha) es patognomónico de Aspiración de Cuerpo Extraño. Como el paciente tose y respira, la obstrucción es PARCIAL y la maniobra de Heimlich está contraindicada. El maní suele alojarse en el bronquio principal derecho (más ancho y vertical). El estándar de oro diagnóstico y terapéutico en PEDIATRÍA es la Broncoscopia RÍGIDA bajo anestesia general (a diferencia del adulto donde se usa flexible).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta es la causa número uno de demandas en pediatría. El niño tose feo, tú lo auscultas, oyes un pitido a la derecha, anotas 'Asma' y lo mandas a casa. A los 2 días, ese bronquio está necrosado por los aceites del maní. El asma rara vez 'pita' de un solo lado. Si oyes sibilancias focales en un niño de 2 años que estaba comiendo confites, ese pulmón tiene un intruso, y se necesita pinza y metal (broncoscopio rígido) para sacarlo.",
    keyPoints: [
      "Cuando veas:",
      "• Niño + Tos súbita comiendo + Sibilancias focales (Unilaterales) + Atrapamiento aéreo (Rx).",
      "Debes pensar en:",
      "Aspiración de Cuerpo Extraño. Tratamiento Mandatorio: Broncoscopia Rígida.",
      "Tema: Pediatría / Vía Aérea."
    ]
  },
  {
    id: "umng-conv-2026-07-26-96",
    university: "UMNG",
    examArea: "TOXICOLOGÍA / PEDIATRÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Una niña de 3 años es traída tras masticar múltiples píldoras rojo brillante de vitaminas prenatales. Está letárgica y presenta vómito oscuro con hilos de sangre (hematemesis) y diarrea fétida sanguinolenta. PA 70/45 mmHg, FC 150 lpm. Una radiografía simple de abdomen (KUB) revela múltiples cuerpos redondos RADIOPACOS a nivel gástrico. Los gases arteriales muestran acidosis metabólica de anión gap elevado. ¿Cuál es el tratamiento tóxico ESPECÍFICO y el antídoto salvavidas?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Carbón activado a dosis repetidas para adsorber los metales pesados.",
        distractorProfile: "ineffective_charcoal_iron",
        incorrectFeedback: "El carbón activado NO adsorbe el hierro, litio ni alcoholes pesados. Es inútil."
      },
      {
        id: "B",
        label: "B",
        text: "Infusión endovenosa de Deferoxamina (Desferroxamina)."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Penicilamina intravenosa o EDTA.",
        distractorProfile: "wrong_chelator",
        incorrectFeedback: "Penicilamina es para cobre/plomo, EDTA para plomo severo."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar exanguinotransfusión inmediata por toxicidad masiva en eritrocitos.",
        distractorProfile: "wrong_systemic_treatment",
        incorrectFeedback: "La toxicidad del hierro es mitocondrial celular, no lisis eritrocitaria masiva aislada."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro corresponde a Intoxicación Aguda por Hierro (Vitaminas prenatales, vómito/diarrea sanguinolenta, choque, acidosis). Un dato clave es que las tabletas de hierro son RADIOPACAS ('blancas' como monedas en la Rx). El carbón activado es completamente inútil para el hierro. El antídoto y quelante específico de primera línea es la Deferoxamina (Desferroxamina) IV, que atrapa el hierro circulante y lo excreta tiñendo clásicamente la orina de rojo (color 'vino tinto').\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta viñeta duele porque las pastillas de sulfato ferroso parecen dulces y las niñas se las tragan a puñados. El hierro en exceso es literalmente ácido corriendo por las venas. Perfora el estómago y luego apaga la respiración celular. Cuando veas las radiografías con 'moneditas' blancas adentro y la presión cayendo, saca las ampollas de Deferoxamina. Ese medicamento abrazará el hierro y lo mandará directo a la orina de la pequeña.",
    keyPoints: [
      "Cuando veas:",
      "• Vómito sanguinolento + Pastillas Prenatales + Pastillas Radiopacas (Rx).",
      "Debes pensar en:",
      "Intoxicación por Hierro. Antídoto: Deferoxamina (Da orina color vino tinto).",
      "Tema: Toxicología / Metales Pesados."
    ]
  },
  {
    id: "umng-conv-2026-07-26-97",
    university: "UMNG",
    examArea: "TRAUMA / ORTOPEDIA",
    topic: "ORTOPEDIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Mujer de 65 años llega con dolor en hombro derecho tras caída. El hombro presenta deformidad \"en charretera\" (aplanado). El brazo derecho está en ligera abducción y rotación externa rígida, imposible de aducir sin dolor. A la sensibilidad, la paciente no siente el roce en la cara lateral del hombro derecho (signo de la \"zona del parche militar\"). ¿Qué lesión nerviosa asociada, producto directo de esta dislocación articular, ha sufrido la paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Lesión del nervio mediano.",
        distractorProfile: "wrong_nerve_arm",
        incorrectFeedback: "Viaja más medial, no se lesiona en esta luxación. Daña la pinza de los dedos."
      },
      {
        id: "B",
        label: "B",
        text: "Lesión del nervio axilar (circunflejo)."
      },
      {
        id: "C",
        label: "C",
        text: "Lesión del nervio musculocutáneo.",
        distractorProfile: "wrong_nerve_flexion",
        incorrectFeedback: "Afecta la flexión del codo."
      },
      {
        id: "D",
        label: "D",
        text: "Lesión del plexo braquial completo (lesión de Erb-Duchenne).",
        distractorProfile: "wrong_mechanism_erb",
        incorrectFeedback: "Requiere separar violentamente el cuello del hombro para arrancar el plexo (raíces C5-C6)."
      }
    ],
    correctOptionId: "B",
    explanation: "La deformidad en 'charretera' con el brazo en rotación externa fija es el sello clínico de la Luxación Anterior de Hombro. El nervio axilar (circunflejo) discurre directamente inferior a la articulación glenohumeral, por lo que es la estructura neurológica más frecuentemente dañada en esta luxación. Su lesión produce parálisis del músculo deltoides y anestesia de la piel suprayacente (la cara lateral del hombro, o 'zona del parche militar').\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el hombro es la articulación más fácil de zafar. Si se cayó apoyando la mano, la bola del hombro salió por la axila. Debajo del sobaco, el Nervio Axilar la estaba esperando y terminó aplastado. No le pidas a la señora que levante el brazo para evaluar el nervio, porque la matarás de dolor. Coge un alfiler y pínchale el 'botón del hombro' (la parte de afuera de la manga corta). Si no lo siente, el nervio está frito.",
    keyPoints: [
      "Cuando veas:",
      "• Luxación Anterior Hombro (Rotación externa + Charretera) + Anestesia en cara lateral del hombro.",
      "Debes pensar en:",
      "Lesión del Nervio Axilar (Circunflejo).",
      "Tema: Ortopedia / Luxaciones Articulares."
    ]
  },
  {
    id: "umng-conv-2026-07-26-98",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA / URGENCIAS",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Multípara de 35 años con amenorrea de 9 semanas y prueba de embarazo positiva. Consulta por sangrado vaginal abundante y cólico hipogástrico. Al examen: OCI (orificio cervical interno) PERMEABLEMENTE ABIERTO y sangrado activo. Ecografía transvaginal: \"útero aumentado, cavidad con escasos restos ecogénicos heterogéneos <10 mm, ausencia de saco o feto, ovarios normales\". De acuerdo a la clasificación clínica, ¿cuál es el diagnóstico preciso?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Amenaza de Aborto.",
        distractorProfile: "wrong_cervix_status",
        incorrectFeedback: "En la amenaza, el cérvix está CERRADO y el feto vivo íntegro in utero."
      },
      {
        id: "B",
        label: "B",
        text: "Aborto Inminente o en curso.",
        distractorProfile: "wrong_us_status",
        incorrectFeedback: "En el inminente, el cérvix está ABIERTO, pero el feto/saco sigue COMPLETO dentro de la cavidad."
      },
      {
        id: "C",
        label: "C",
        text: "Aborto Completo.",
        distractorProfile: "complete_abortion_mimic",
        incorrectFeedback: "En el completo, el cérvix vuelve a estar CERRADO y la ecografía muestra un endometrio lineal limpio sin restos."
      },
      {
        id: "D",
        label: "D",
        text: "Aborto Incompleto."
      }
    ],
    correctOptionId: "D",
    explanation: "El diagnóstico clínico-ecográfico se basa en dos pilares: Estado del cuello uterino y contenido ecográfico. En el Aborto Incompleto, la paciente ha expulsado la mayor parte del producto gestacional (ausencia de feto), pero quedan residuos placentarios o deciduas atrapados ('restos heterogéneos ecogénicos'). Debido a estos restos, el útero no puede contraerse del todo, manteniendo el cuello uterino ABIERTO y el sangrado persistente. Requiere manejo con Misoprostol o Legrado/AMEU para limpiar la cavidad.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el útero es un músculo: si hay algo que no sirve, hará contracciones y abrirá la puerta (cérvix dilatado) hasta escupirlo completo. Esta paciente expulsó el embrión en casa, pero se le quedó un pedazo de placenta del tamaño de un fríjol atrapado. Como quedó eso atrapado, el útero no se puede cerrar. Llévala a sala, hazle un AMEU, bota ese frijolito y en 10 minutos su útero se contraerá y dejará de sangrar.",
    keyPoints: [
      "Cuando veas:",
      "• Sangrado + Cérvix ABIERTO + Eco con 'restos ecogénicos' (sin feto completo).",
      "Debes pensar en:",
      "Aborto Incompleto. Tratamiento: Limpieza uterina (Misoprostol / AMEU).",
      "Tema: Obstetricia / Hemorragias del Primer Trimestre."
    ]
  },
  {
    id: "umng-conv-2026-07-26-99",
    university: "UMNG",
    examArea: "NEUROLOGÍA / URGENCIAS",
    topic: "NEUROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Hombre de 25 años acude por debilidad de inicio insidioso en extremidades inferiores desde hace 4 días. El cuadro progresó de forma \"ascendente\" (pies, rodillas, muslos). Es incapaz de caminar. Refiere diarrea severa hace 3 semanas de la cual se recuperó. Al examen: Fuerza muscular 2/5 en MMII y 4/5 en MMSS (simétrica). Reflejos patelares y aquilianos ABSOLUTAMENTE AUSENTES (arreflexia bilateral). Sin compromiso de esfínteres. ¿Qué hallazgo patognomónico espera encontrar al analizar el líquido cefalorraquídeo (LCR) obtenido en la segunda semana de evolución?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Presencia de bandas oligoclonales de inmunoglobulinas clase IgG exclusivas del LCR.",
        distractorProfile: "ms_mimic",
        incorrectFeedback: "Este es el hallazgo de Esclerosis Múltiple (da debilidad asimétrica e hiperreflexia, por ser de vía piramidal central)."
      },
      {
        id: "B",
        label: "B",
        text: "Disociación albúmino-citológica (Niveles altos de proteínas en LCR sin aumento celular o leucocitos normales)."
      },
      {
        id: "C",
        label: "C",
        text: "Disminución severa de la glucosa (hipoglucorraquia) asociada a predominio mononuclear masivo.",
        distractorProfile: "meningitis_mimic",
        incorrectFeedback: "Perfil de Meningitis Tuberculosa o micótica, no de neuropatía desmielinizante inmunomediada."
      },
      {
        id: "D",
        label: "D",
        text: "LCR francamente sanguinolento en los 3 tubos de recolección de muestra.",
        distractorProfile: "sah_mimic",
        incorrectFeedback: "Sello de la Hemorragia Subaracnoidea."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro de parálisis simétrica ascendente arrefléxica posterior a una infección gastrointestinal (Campylobacter jejuni) es el sello de presentación del Síndrome de Guillain-Barré. El ataque inmunomediado destruye la mielina periférica. El diagnóstico confirmatorio en el LCR (generalmente evidente tras la primera semana) es la Disociación Albúmino-Citológica: debido al daño de barrera y la inflamación de raíces, las PROTEÍNAS están muy elevadas, pero al no ser un proceso puramente infeccioso del LCR, las CÉLULAS son escasas o normales (< 5 cel/mm3).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., los anticuerpos que fabricó para matar la bacteria de la diarrea, se confundieron de objetivo. Como la bacteria se parece a la mielina de sus nervios (Mimetismo molecular), se están comiendo el cableado de sus piernas. La parálisis sube. Si no lo paras, el diafragma fallará y se asfixiará. Requiere Inmunoglobulina IV (IGIV) o plasmaféresis urgente.",
    keyPoints: [
      "Cuando veas:",
      "• Parálisis Flácida Ascendente + Arreflexia + Infección GI/Viral previa.",
      "Debes pensar en:",
      "Síndrome Guillain-Barré. LCR: Disociación Albúmino-Citológica (Proteínas Altas / Células Normales).",
      "Tema: Neurología / Trastornos Desmielinizantes Periféricos."
    ]
  },
  {
    id: "umng-conv-2026-07-26-100",
    university: "UMNG",
    examArea: "CARDIOLOGÍA / URGENCIAS",
    topic: "CARDIOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un paciente de 55 años, tabaquista pesado, llega a urgencias de primer nivel en zona rural por dolor opresivo retroesternal asfixiante de 45 MINUTOS de evolución. El ECG inicial muestra un supradesnivel del ST de 4 mm en V1, V2, V3 y V4. Usted NO cuenta con laboratorio de hemodinámica (cateterismo), y el hospital terciario más cercano con capacidad de Angioplastia se encuentra a 4 HORAS de viaje por carretera. Ante este escenario logístico, ¿cuál es el manejo terapéutico farmacológico INMEDIATO e imperativo según las guías mundiales de reperfusión?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar Aspirina, Clopidogrel, Heparina y despachar la ambulancia INMEDIATAMENTE hacia el hospital de tercer nivel para que realicen la angioplastia allí.",
        distractorProfile: "fatal_transfer_delay",
        incorrectFeedback: "Si la angioplastia tomará MÁS de 120 minutos en realizarse, trasladar sin trombolizar condenará al miocardio a necrosis total irreversible."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Fibrinolíticos sistémicos (Trombólisis con Alteplasa o Tenecteplasa) inmediatamente en la sala de urgencias rurales."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar morfina y oxígeno a alto flujo y esperar a que el dolor ceda antes de someterlo a un viaje de 4 horas.",
        distractorProfile: "fatal_expectant_management",
        incorrectFeedback: "Dar analgésicos para un infarto STEMI sin abrir la arteria ocluida garantiza insuficiencia cardiaca severa o muerte por arritmia."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar monitorización Holter por 24 horas e iniciar betabloqueadores agresivos para estabilizar la placa.",
        distractorProfile: "wrong_preventive_focus",
        incorrectFeedback: "Los betabloqueadores no lisan un trombo agudo 100% oclusivo."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Infarto Agudo de Miocardio con Elevación del ST (IAMCEST) Anterior extenso. Las guías de Reperfusión (AHA/ESC) son matemáticas: Si el tiempo previsto desde el primer contacto médico hasta pasar la guía de angioplastia primaria es MENOR a 120 minutos, se traslada a cateterismo. Si es MAYOR A 120 MINUTOS (aquí son 4 horas), la terapia OBLIGATORIA e inmediata es la TROMBÓLISIS (Fibrinolíticos: Tenecteplasa, Alteplasa) en el hospital de origen (Tiempo Puerta-Aguja < 30 min). Luego de lisar el coágulo químicamente, sí se remite al paciente para estrategia fármaco-invasiva.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ¡llegaste al final! Imagina esa pared anterior del corazón clamando por oxígeno porque un coágulo tapó la 'viuda roja' (Descendente Anterior). Todo el mundo cree que el Stent es el Rey, pero el TIEMPO ES MÚSCULO. Una trombólisis hecha rápido es infinitamente superior a una angioplastia hecha 4 horas tarde cuando ya hay tejido muerto. Si pasas Alteplasa IV, el medicamento viaja como camión de demolición directo a la coronaria. En 15 min el dolor cede y el ST baja. ¡Felicidades! Acabas de salvar tu primer corazón y ganaste la plaza UMNG.",
    keyPoints: [
      "Cuando veas:",
      "• IAM con Elevación del ST + Traslado a Angioplastia > 120 Minutos.",
      "Debes pensar en:",
      "Trombólisis endovenosa (Fibrinolíticos) INMEDIATA en el hospital de origen. Nunca retrasar la reperfusión por un viaje largo.",
      "Tema: Cardiología / Síndrome Coronario Agudo."
    ]
  }
];
