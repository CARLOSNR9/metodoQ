import type { TrainingQuestion } from "@/lib/questions/types";

export const UMNG_CONV_ED7_41_50_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed7-41",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "INTOXICACIÓN POR ORGANOFOSFORADOS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Un hombre de 48 años, trabajador agrícola, es traído a urgencias por sus compañeros tras ser encontrado confuso en el cultivo donde fumigaba plaguicidas hace aproximadamente 40 minutos, sin usar equipo de protección personal. Al examen físico presenta miosis puntiforme bilateral, sialorrea abundante, diaforesis profusa, broncorrea con estertores húmedos difusos, dolor abdominal tipo cólico con diarrea, y fasciculaciones musculares visibles en los antebrazos. Signos vitales: FC 48 lpm, FR 28 rpm con saturación de oxígeno 88% a pesar de administrar oxígeno suplementario, PA 100/60 mmHg. Sus compañeros refieren que el frasco del producto tenía un rombo de color rojo con la leyenda \"inhibidor de colinesterasa\". ¿Cuál es el mecanismo fisiopatológico del cuadro y el manejo farmacológico INICIAL más urgente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Bloqueo de receptores muscarínicos por exceso de acetilcolina; manejo inicial con Atropina IV titulada hasta el secado de secreciones bronquiales, seguida de Pralidoxima.",
      },
      {
        id: "B",
        label: "B",
        text: "Inhibición irreversible de la acetilcolinesterasa con acumulación de acetilcolina en la sinapsis; manejo inicial con Atropina IV titulada hasta el secado de secreciones bronquiales, seguida de Pralidoxima.",
      },
      {
        id: "C",
        label: "C",
        text: "Estimulación directa de receptores nicotínicos por el plaguicida; manejo inicial con Naloxona IV como antagonista competitivo específico.",
      },
      {
        id: "D",
        label: "D",
        text: "Bloqueo de canales de sodio neuronales; manejo inicial con Bicarbonato de Sodio hipertónico en infusión continua.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El paciente presenta un **Síndrome Colinérgico** clásico por **intoxicación aguda por organofosforados**, plaguicidas que actúan **inhibiendo de forma irreversible la enzima acetilcolinesterasa**, tanto en las sinapsis del sistema nervioso central como periférico. Al no poder degradarse, la **acetilcolina se acumula masivamente** en la hendidura sináptica, generando estimulación excesiva y sostenida de receptores muscarínicos (el clásico mnemotecnico **SLUDGE/DUMBELS**: Salivación, Lagrimeo, Urinación, Defecación, molestias Gastrointestinales, Emesis; o Diaforesis, Urinación, Miosis, Bradicardia, Broncorrea/Broncoespasmo, Emesis, Lagrimeo, Salivación) y nicotínicos (fasciculaciones, debilidad muscular, que puede progresar a parálisis respiratoria). El manejo inicial más urgente es la **Atropina intravenosa**, titulada de forma agresiva y repetida (dosis iniciales de 1-2 mg IV, duplicando la dosis cada 3-5 minutos si no hay respuesta) hasta lograr el **secado de las secreciones bronquiales** (la broncorrea es la causa principal de mortalidad por insuficiencia respiratoria, más que el broncoespasmo mismo), sin dejarse guiar únicamente por la frecuencia cardíaca. De forma complementaria, se administra **Pralidoxima**, que reactiva la acetilcolinesterasa si se administra tempranamente, antes de que ocurra el fenómeno de \"envejecimiento\" (aging) del complejo enzima-organofosforado, que hace la inhibición definitivamente irreversible.\n\n**TRAMPA DEL EXAMEN:** El estudiante que memoriza atropina como antídoto \"por bradicardia\" comete el error de titularla según la frecuencia cardíaca o la presión arterial, deteniéndose prematuramente cuando el paciente aún tiene broncorrea activa que lo puede ahogar. El punto final correcto de la titulación de atropina es el SECADO DE SECRECIONES BRONQUIALES, no la normalización de signos vitales.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en la intoxicación por organofosforados el paciente se está literalmente ahogando en sus propias secreciones, así que no se obsesione con la frecuencia cardíaca de 48; eso es esperable por el exceso colinérgico y no es lo que lo va a matar. Lo que lo mata es la broncorrea, esas secreciones espesas inundando el árbol bronquial mientras usted duda si dar más atropina \"porque ya está taquicárdico\". Dosifique atropina de forma agresiva, duplicando cada pocos minutos si no hay respuesta clínica, hasta que el tórax suene seco a la auscultación; algunos pacientes graves necesitan decenas de miligramos en las primeras horas, y no hay techo de dosis mientras persista la broncorrea. La Pralidoxima ayuda, pero recuerde que su ventana de utilidad se cierra si se retrasa demasiado por el fenómeno de envejecimiento enzimático, así que adminístrela lo antes posible una vez confirmada la sospecha. Y protéjase usted también: retire la ropa contaminada del paciente y use guantes, porque el organofosforado se absorbe fácilmente por piel y usted no quiere terminar intoxicado por estar reanimando sin protección.",
    keyPoints: [
      "Organofosforados inhiben irreversiblemente la acetilcolinesterasa, causando acumulación de acetilcolina y síndrome colinérgico (muscarínico + nicotínico).",
      "Manejo inicial: Atropina IV titulada hasta el SECADO DE SECRECIONES BRONQUIALES (no según frecuencia cardíaca), más Pralidoxima administrada precozmente antes del 'envejecimiento' enzimático.",
      "La broncorrea, no la bradicardia, es la principal causa de mortalidad; proteger al personal de salud del contacto cutáneo con el tóxico.",
    ],
  },
  {
    id: "umng-conv-ed7-42",
    university: "UMNG",
    examArea: "TOXICOLOGÍA DE URGENCIAS",
    topic: "INTOXICACIÓN POR ACETAMINOFÉN",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Una mujer de 19 años consulta a urgencias acompañada por su madre, quien refiere que hace 6 horas la encontró llorando con varios blísteres vacíos de acetaminofén junto a ella, tras una discusión de pareja. La paciente confirma haber ingerido aproximadamente 15 gramos de acetaminofén (equivalente a 214 mg/kg para su peso de 70 kg) de una sola vez. Actualmente está asintomática, con náuseas leves y examen físico sin alteraciones, incluyendo abdomen blando y sin ictericia. Se toma un nivel sérico de acetaminofén a las 6 horas post-ingesta, el cual se grafica en el nomograma de Rumack-Matthew, cayendo claramente por encima de la línea de tratamiento. ¿Cuál es la conducta terapéutica más apropiada en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar N-acetilcisteína (NAC) de inmediato según el esquema establecido, dado que el nivel sérico está por encima de la línea de tratamiento del nomograma.",
      },
      {
        id: "B",
        label: "B",
        text: "No iniciar ningún tratamiento porque la paciente está asintomática y sin alteración de las pruebas hepáticas en este momento.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar carbón activado en dosis única exclusivamente, sin necesidad de N-acetilcisteína, ya que han pasado más de 4 horas de la ingesta.",
      },
      {
        id: "D",
        label: "D",
        text: "Esperar a que aparezcan síntomas de falla hepática (ictericia, coagulopatía) antes de iniciar N-acetilcisteína, para evitar tratamiento innecesario.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El **nomograma de Rumack-Matthew** es la herramienta estándar para estimar el riesgo de hepatotoxicidad tras una ingesta aguda única de acetaminofén, y se aplica a partir de un nivel sérico tomado **entre las 4 y las 24 horas post-ingesta** (un nivel tomado antes de las 4 horas no es interpretable porque la absorción aún puede no ser completa). Cuando el nivel sérico, graficado según el tiempo transcurrido desde la ingesta, **cae por encima de la línea de tratamiento** (tradicionalmente la línea que conecta 150 mcg/mL a las 4 horas con 4.3 mcg/mL a las 24 horas, aunque muchos protocolos actuales usan la línea más conservadora de 100 mcg/mL a las 4 horas para mayor seguridad), está indicado iniciar **N-acetilcisteína (NAC)** de inmediato, independientemente de que la paciente esté completamente asintomática, ya que la toxicidad hepática por acetaminofén es **clínicamente silenciosa en sus primeras 24-48 horas** (el daño hepatocelular por acumulación del metabolito tóxico NAPQI ocurre de forma subclínica antes de manifestarse con elevación de transaminasas, ictericia o coagulopatía). Esperar a que aparezcan síntomas de falla hepática sería catastrófico, ya que para ese momento el daño hepático extenso ya estaría establecido y la eficacia de la NAC disminuye considerablemente cuanto más tarde se inicia tras la ingesta.\n\n**TRAMPA DEL EXAMEN:** \"La paciente está asintomática, entonces no necesita tratamiento\" es exactamente el razonamiento equivocado que el examen busca detectar. El acetaminofén es traicionero precisamente porque el paciente se ve y se siente perfectamente bien mientras el hígado ya está siendo dañado silenciosamente por el metabolito tóxico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el acetaminofén es el ejemplo perfecto de por qué en toxicología no tratamos síntomas, tratamos niveles y cinéticas. Esta paciente se ve tranquila, casi de alta, pero el NAPQI ya se está acumulando en sus hepatocitos porque el glutatión, que normalmente lo neutraliza, se está agotando en este momento. Si usted espera a que aparezca ictericia o que las transaminasas se disparen para empezar la N-acetilcisteína, ya llegó tarde: la eficacia de la NAC es casi total si se inicia dentro de las primeras 8-10 horas, pero cae dramáticamente después de las 24 horas. Con un nivel de 6 horas por encima de la línea de tratamiento del nomograma, no hay nada que discutir ni esperar: NAC ya, siguiendo el esquema estándar (ya sea la infusión intravenosa clásica de tres fases o el esquema oral), y seguimiento seriado de transaminasas, INR y función renal durante la hospitalización. El carbón activado solo tiene sentido dentro de la primera hora de la ingesta, así que a las 6 horas ya no aporta nada relevante.",
    keyPoints: [
      "Nomograma de Rumack-Matthew: aplica con nivel sérico tomado entre 4-24 horas post-ingesta única; por encima de la línea de tratamiento = iniciar N-acetilcisteína.",
      "La hepatotoxicidad por acetaminofén es clínicamente silenciosa en las primeras 24-48 horas; NO esperar síntomas de falla hepática para tratar.",
      "La eficacia de la N-acetilcisteína es máxima cuando se inicia precozmente (idealmente antes de 8-10 horas) y disminuye significativamente con el retraso.",
    ],
  },
  {
    id: "umng-conv-ed7-43",
    university: "UMNG",
    examArea: "TOXICOLOGÍA AMBIENTAL",
    topic: "INTOXICACIÓN POR MONÓXIDO DE CARBONO",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Una familia completa (padres y dos hijos) es traída a urgencias tras ser encontrados inconscientes en su vivienda, donde usaban un calentador de gas a leña en un ambiente cerrado y mal ventilado durante una noche fría. Todos presentan cefalea intensa, náuseas y confusión; el padre, el más afectado, está estuporoso con saturación de oxígeno de 99% en el pulsioxímetro convencional a pesar de su evidente deterioro clínico. Se sospecha intoxicación por monóxido de carbono. ¿Cuál es la explicación de la discrepancia entre la saturación de oxígeno reportada como normal y el estado clínico del paciente, y cuál es el tratamiento definitivo de elección para la intoxicación severa?",
    options: [
      {
        id: "A",
        label: "A",
        text: "El pulsioxímetro subestima la saturación real por vasoconstricción periférica; el tratamiento de elección es Naloxona intravenosa.",
      },
      {
        id: "B",
        label: "B",
        text: "El pulsioxímetro mide correctamente la saturación real; el deterioro clínico se debe exclusivamente a hipoglucemia asociada y el tratamiento de elección es dextrosa intravenosa.",
      },
      {
        id: "C",
        label: "C",
        text: "El monóxido de carbono no afecta la hemoglobina; la discrepancia se debe a un artefacto técnico del equipo y el tratamiento es exclusivamente sintomático con antieméticos.",
      },
      {
        id: "D",
        label: "D",
        text: "El pulsioxímetro convencional no puede diferenciar la carboxihemoglobina de la oxihemoglobina, sobrestimando falsamente la saturación real; el tratamiento de elección es oxígeno hiperbárico en los casos severos, además de oxígeno normobárico al 100%.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "En la **intoxicación por monóxido de carbono (CO)**, este gas incoloro e inodoro se une a la hemoglobina con una afinidad aproximadamente 200 a 250 veces mayor que el oxígeno, formando **carboxihemoglobina (COHb)**, que además desvía la curva de disociación de la oxihemoglobina hacia la izquierda, dificultando la liberación de oxígeno a los tejidos (hipoxia tisular a pesar de un contenido arterial de oxígeno aparentemente normal). El **pulsioxímetro convencional (de dos longitudes de onda) no puede distinguir entre la oxihemoglobina y la carboxihemoglobina**, interpretando erróneamente ambas como \"hemoglobina saturada de oxígeno\", por lo que reporta una saturación falsamente normal o incluso alta, a pesar de que el paciente está gravemente hipóxico a nivel tisular; el diagnóstico correcto requiere medir directamente los niveles de **carboxihemoglobina mediante cooximetría** en una gasometría arterial o venosa. El tratamiento de la intoxicación consiste en **oxígeno normobárico al 100%** con mascarilla de no reinhalación en todos los casos (que acelera significativamente la eliminación de CO al competir por los sitios de unión de la hemoglobina), y en casos **severos** (pérdida de consciencia, isquemia miocárdica, embarazo con niveles significativos, acidosis metabólica severa, niveles de COHb muy elevados, o síntomas neurológicos persistentes) está indicado el **oxígeno hiperbárico**, que reduce drásticamente la vida media de eliminación del CO y disminuye el riesgo de secuelas neurológicas tardías.\n\n**TRAMPA DEL EXAMEN:** Ver una saturación de oxígeno de 99% en el monitor y asumir que el paciente \"está bien oxigenado\" es la trampa mortal clásica de la intoxicación por CO. El pulsioxímetro convencional es ciego a la carboxihemoglobina y da una falsa sensación de seguridad exactamente cuando el paciente más necesita oxígeno suplementario urgente.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., nunca confíe en un pulsioxímetro normal para descartar hipoxia tisular cuando sospeche intoxicación por CO; ese aparatico es como un juez ciego que no distingue entre dos gemelos que se parecen en espectro de absorción de luz, la oxihemoglobina y la carboxihemoglobina, y termina calificando de \"normal\" una sangre que en realidad está transportando veneno en lugar de oxígeno útil. Pida siempre una gasometría con cooximetría si sospecha CO, que sí mide directamente el porcentaje de carboxihemoglobina. Ponga oxígeno al 100% con mascarilla de no reinhalación a TODA la familia de inmediato, sin esperar confirmación de laboratorio, porque cada minuto respirando aire ambiente prolonga la vida media de eliminación del CO (que pasa de más de 4 horas en aire ambiente a apenas 60-90 minutos con oxígeno al 100%, y a menos de 30 minutos con cámara hiperbárica). Y en este caso, con el padre estuporoso, ya tiene criterio claro de severidad para considerar cámara hiperbárica si está disponible en su red de referencia; no espere a que empeore más para activar el traslado.",
    keyPoints: [
      "El pulsioxímetro convencional NO diferencia carboxihemoglobina de oxihemoglobina; da saturación falsamente normal en intoxicación por CO. Diagnóstico: cooximetría (COHb en gasometría).",
      "Tratamiento base: oxígeno normobárico al 100% con mascarilla de no reinhalación en todos los casos, que acelera la eliminación del CO.",
      "Oxígeno hiperbárico indicado en casos severos: pérdida de consciencia, isquemia miocárdica, embarazo, acidosis severa o síntomas neurológicos persistentes.",
    ],
  },
  {
    id: "umng-conv-ed7-44",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "INTOXICACIÓN POR METANOL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Un grupo de cuatro hombres consulta a urgencias tras consumir licor adulterado comprado de manera informal en una fiesta, hace aproximadamente 14 horas. Uno de ellos refiere visión borrosa progresiva y \"como si viera a través de una tormenta de nieve\", además de dolor abdominal intenso. Al examen presenta taquipnea con respiración de Kussmaul, y la gasometría arterial muestra pH 7.10, bicarbonato de 8 mEq/L, con anion gap de 28 mEq/L. La osmolaridad sérica medida supera en 35 mOsm/kg a la calculada. El servicio de toxicología confirma sospecha de intoxicación por metanol y no se dispone de Fomepizol en la institución ni en la red de referencia cercana. ¿Cuál es la conducta terapéutica antidótica alternativa más apropiada mientras se gestiona la hemodiálisis urgente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Flumazenil intravenoso para revertir la depresión del sistema nervioso central causada por el metanol.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Naloxona intravenosa en infusión continua como antídoto específico del metanol.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Etanol por vía oral o intravenosa, para mantener una alcoholemia terapéutica que compita con el metanol por la Alcohol Deshidrogenasa.",
      },
      {
        id: "D",
        label: "D",
        text: "No administrar ningún antídoto hasta que la hemodiálisis esté disponible, ya que ningún antídoto alternativo existe fuera del Fomepizol.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El cuadro es característico de **intoxicación por metanol** por consumo de licor adulterado: **acidosis metabólica severa con anion gap elevado**, **brecha osmolar elevada**, y **toxicidad visual** (escotomas, visión \"como tormenta de nieve\", que refleja daño del nervio óptico por el metabolito tóxico ácido fórmico). El antídoto de primera línea es el **Fomepizol**, un inhibidor competitivo de la Alcohol Deshidrogenasa; sin embargo, cuando este no está disponible (una realidad frecuente en muchas instituciones de nuestro medio), la alternativa antidótica validada y eficaz es el **Etanol**, administrado por vía oral o intravenosa, manteniendo una **alcoholemia terapéutica** (típicamente entre 100-150 mg/dL) que compite de forma más eficiente que el metanol por la misma enzima Alcohol Deshidrogenasa, saturándola preferentemente y bloqueando así la conversión del metanol hacia sus metabolitos tóxicos (formaldehído y ácido fórmico), mientras se organiza el traslado para hemodiálisis, que es el tratamiento definitivo que remueve tanto el metanol como el ácido fórmico ya formado.\n\n**TRAMPA DEL EXAMEN:** El estudiante que solo memorizó \"Fomepizol es el antídoto\" se queda paralizado cuando el enunciado le dice que no está disponible, y puede caer en la trampa de pensar que \"no hay alternativa\" o de usar antídotos de otras intoxicaciones (Naloxona, Flumazenil) que no tienen ningún rol en la intoxicación por alcoholes tóxicos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en Colombia y en muchos países de la región, el Fomepizol frecuentemente NO está disponible en el hospital donde usted está de turno a las 3 de la mañana, así que este es un escenario que se va a encontrar en la vida real, no solo en el examen. Por fortuna, el Etanol funciona por el mismo principio: es un competidor de la Alcohol Deshidrogenasa con mayor afinidad que el metanol, así que si usted le da al paciente una carga de etanol (por vía oral con licor destilado si no hay presentación intravenosa disponible, calculando la dosis para alcanzar niveles terapéuticos) básicamente está \"distrayendo\" a la enzima con un sustrato preferido mientras el metanol circula intacto en la sangre esperando ser dializado. No es la solución elegante ni la primera opción, pero salva vidas cuando el Fomepizol no es una opción real. Y no se le olvide: mientras hace esto, ya debe estar llamando para organizar el traslado a hemodiálisis, que es lo único que realmente saca el metanol y el ácido fórmico del cuerpo de forma definitiva.",
    keyPoints: [
      "Intoxicación por metanol: acidosis con anion gap elevado + brecha osmolar elevada + toxicidad visual (ácido fórmico daña el nervio óptico).",
      "Antídoto de primera línea: Fomepizol. Si no está disponible, alternativa validada: Etanol (oral o IV), manteniendo alcoholemia terapéutica para competir por la Alcohol Deshidrogenasa.",
      "Tratamiento definitivo: hemodiálisis, que remueve el metanol y el ácido fórmico; no debe retrasarse el inicio del antídoto mientras se organiza.",
    ],
  },
  {
    id: "umng-conv-ed7-45",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "SÍNDROME DE ABSTINENCIA ALCOHÓLICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Un hombre de 52 años con antecedente de consumo diario de alcohol durante más de 20 años es hospitalizado por una fractura de cadera. Al tercer día de hospitalización, sin haber consumido alcohol desde su ingreso, presenta agitación psicomotora intensa, temblor grueso generalizado, diaforesis profusa, taquicardia de 130 lpm, hipertensión arterial, fiebre de 38.5°C, y alucinaciones visuales vívidas (refiere ver \"insectos caminando sobre las sábanas\"), con desorientación en tiempo y espacio. ¿Cuál es el diagnóstico y el tratamiento farmacológico de primera línea?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome neuroléptico maligno; tratamiento de primera línea con Dantroleno intravenoso.",
      },
      {
        id: "B",
        label: "B",
        text: "Encefalopatía de Wernicke; tratamiento de primera línea con Tiamina en dosis única, sin necesidad de sedación.",
      },
      {
        id: "C",
        label: "C",
        text: "Psicosis esquizofreniforme aguda; tratamiento de primera línea con Haloperidol en monoterapia, evitando cualquier benzodiacepina.",
      },
      {
        id: "D",
        label: "D",
        text: "Delirium Tremens; tratamiento de primera línea con Benzodiacepinas en dosis tituladas según la severidad de los síntomas (ejemplo: Diazepam o Lorazepam).",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El paciente presenta un **Delirium Tremens**, la manifestación más severa del síndrome de abstinencia alcohólica, que típicamente aparece entre las 48 y 96 horas después de la última ingesta en un paciente con consumo crónico e importante de alcohol. Se caracteriza por la tríada de **alteración del estado de consciencia (delirium)**, **hiperactividad autonómica severa** (taquicardia, hipertensión, fiebre, diaforesis) y **alucinaciones**, clásicamente visuales y de tipo zoopsias (\"ver insectos o animales pequeños\"), asociado a temblor grueso y agitación psicomotora marcada. Es una emergencia médica con mortalidad significativa si no se trata adecuadamente (por arritmias, crisis convulsivas, hipertermia o complicaciones cardiovasculares asociadas a la hiperactividad simpática sostenida). El tratamiento de primera línea son las **Benzodiacepinas** (Diazepam, Lorazepam o Clordiazepóxido, según disponibilidad y función hepática del paciente), administradas en dosis tituladas y repetidas según la respuesta clínica (esquema sintomático guiado, por ejemplo, con escalas como el CIWA-Ar), ya que actúan sobre el mismo receptor GABA-A que el alcohol venía estimulando crónicamente, corrigiendo la hiperexcitabilidad del sistema nervioso central que queda al retirarse abruptamente el efecto depresor del alcohol.\n\n**TRAMPA DEL EXAMEN:** Las alucinaciones visuales pueden hacer pensar erróneamente en un cuadro psiquiátrico primario y tentar al uso de Haloperidol en monoterapia; sin embargo, los antipsicóticos NO tratan la causa subyacente (la hiperexcitabilidad GABA por deprivación alcohólica), reducen el umbral convulsivo, y pueden empeorar el pronóstico si se usan solos sin benzodiacepinas de base.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el Delirium Tremens es de las pocas urgencias donde \"sedar más\" es literalmente el tratamiento correcto, y muchos médicos jóvenes se asustan de dar dosis altas de benzodiacepinas por miedo a deprimir demasiado al paciente. Piénselo así: el cerebro de este señor llevaba 20 años acostumbrado a un GABA hiperestimulado por el alcohol, y al quitarle abruptamente esa sustancia, el sistema nervioso queda completamente desinhibido y excitado, como un motor sin freno. Las benzodiacepinas le devuelven artificialmente ese freno GABA que el alcohol proveía. Use un esquema titulado según síntomas (la escala CIWA-Ar es su mejor amiga aquí), no tenga miedo de repetir dosis si el paciente sigue agitado, taquicárdico e hipertenso, y no olvide agregar Tiamina intravenosa de rutina en todo paciente con abstinencia alcohólica para prevenir la Encefalopatía de Wernicke, que es una entidad distinta pero que coexiste frecuentemente en estos pacientes crónicamente desnutridos. Vigile de cerca la vía aérea y el estado hemodinámico, porque este señor puede convulsionar o arritmiar si el manejo se queda corto.",
    keyPoints: [
      "Delirium Tremens: forma más severa de abstinencia alcohólica (48-96h post última ingesta) con delirium + hiperactividad autonómica + alucinaciones (zoopsias).",
      "Tratamiento de primera línea: Benzodiacepinas tituladas según severidad clínica (CIWA-Ar), no antipsicóticos en monoterapia.",
      "Agregar Tiamina IV de rutina para prevenir Encefalopatía de Wernicke; vigilar riesgo de convulsiones y complicaciones cardiovasculares.",
    ],
  },
  {
    id: "umng-conv-ed7-46",
    university: "UMNG",
    examArea: "MEDICINA TROPICAL",
    topic: "ACCIDENTE OFÍDICO",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Un campesino de 35 años es traído desde una zona rural tropical tras ser mordido en la pierna derecha por una serpiente, hace 2 horas, mientras trabajaba en su finca. Al examen se observa edema progresivo que ya compromete todo el muslo, equimosis extensa, dos marcas de colmillos visibles con sangrado activo persistente en el sitio de la mordedura, y flictenas hemorrágicas. Refiere gingivorragia espontánea. Los estudios de coagulación muestran tiempo de coagulación en tubo prolongado (>20 minutos), con fibrinógeno indetectable. No hay compromiso neurológico (no ptosis, no diplopía, no debilidad muscular). Según la clasificación de severidad del accidente ofídico (compatible con género Bothrops, el más frecuente en la región), ¿cómo se clasifica este caso y cuál es el manejo específico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Accidente ofídico severo, con síndrome hemorrágico/coagulopático predominante; manejo con suero antiofídico polivalente en dosis elevada según protocolo, más monitorización estrecha de la coagulación.",
      },
      {
        id: "B",
        label: "B",
        text: "Accidente ofídico severo, con síndrome miotóxico predominante; manejo con soporte ventilatorio inmediato como prioridad sobre el suero antiofídico.",
      },
      {
        id: "C",
        label: "C",
        text: "Accidente ofídico leve; manejo con observación ambulatoria y analgesia oral exclusivamente, sin necesidad de suero antiofídico.",
      },
      {
        id: "D",
        label: "D",
        text: "Envenenamiento neurotóxico severo; manejo con Neostigmina y Atropina como antídoto específico, sin necesidad de suero antiofídico.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro corresponde a un **accidente ofídico severo (bothrópico)**, el más frecuente en Colombia y gran parte de Latinoamérica tropical, causado por serpientes del género *Bothrops* (mapaná, taya equis, entre otros nombres regionales), cuyo veneno tiene efecto predominantemente **proteolítico, coagulante (activador de protrombina tipo procoagulante que consume fibrinógeno) y hemorrágico**. La clasificación de severidad se basa en la magnitud del edema local, la presencia de manifestaciones sistémicas hemorrágicas (gingivorragia, hematuria, sangrado en sitios de venopunción) y las alteraciones de la coagulación (tiempo de coagulación prolongado, fibrinógeno consumido/indetectable), y este paciente cumple criterios de **envenenamiento severo** por el edema que ya compromete todo el segmento, las flictenas hemorrágicas, el sangrado activo local y sistémico (gingivorragia), y la coagulopatía de consumo evidente. El manejo específico es la administración de **suero antiofídico polivalente** en dosis elevada según el protocolo de severidad (las dosis se ajustan según severidad del envenenamiento y NO según el peso del paciente, a diferencia de la mayoría de los antídotos), administrado lo más pronto posible, junto con monitorización seriada de los parámetros de coagulación (tiempo de coagulación en tubo, fibrinógeno) para evaluar la respuesta terapéutica y la necesidad de dosis adicionales.\n\n**TRAMPA DEL EXAMEN:** El estudiante puede confundir el accidente Bothrópico (predominio hemorrágico/coagulopático, el más común en nuestra región) con el accidente Crotálico o Elapídico (predominio neurotóxico, con ptosis, diplopía y debilidad muscular, ausentes en este caso), llevándolo erróneamente a priorizar soporte ventilatorio o antídotos neurológicos que no corresponden a este cuadro.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en nuestro medio tropical, cuando le hablen de accidente ofídico sin especificar más, piense primero en Bothrops, porque es con mucha diferencia el más frecuente. Y la forma de reconocerlo es justamente este cuadro: edema que avanza y avanza, flictenas (a veces hemorrágicas), sangrado que no para en el sitio de la mordedura, y si es severo, sangrado sistémico como esta gingivorragia. El veneno básicamente le \"desactiva\" la cascada de coagulación consumiendo el fibrinógeno, por eso el tiempo de coagulación en tubo se prolonga tanto y el fibrinógeno queda indetectable; es una coagulopatía de consumo inducida por veneno, muy similar en el laboratorio a una CID. El suero antiofídico polivalente es literalmente el único tratamiento que revierte esto, neutralizando el veneno circulante; no pierda tiempo dando plasma fresco congelado o crioprecipitado ANTES del suero, porque mientras el veneno siga circulando, seguirá consumiendo cualquier factor de coagulación que usted reponga, es pan para hoy y hambre para mañana. Aplique el suero según el protocolo de severidad de su guía nacional, vigile reacciones anafilactoides durante la infusión, y repita tiempos de coagulación cada pocas horas para verificar que el paciente esté respondiendo.",
    keyPoints: [
      "Accidente ofídico Bothrópico (el más frecuente en la región): veneno proteolítico, coagulante y hemorrágico (edema progresivo, flictenas, sangrado, coagulopatía de consumo).",
      "Clasificación severo: edema extenso + manifestaciones hemorrágicas sistémicas + coagulopatía marcada. Manejo: suero antiofídico polivalente en dosis según severidad (no según peso).",
      "No reponer factores de coagulación (plasma, crioprecipitado) antes del suero antiofídico, porque el veneno circulante seguirá consumiéndolos.",
    ],
  },
  {
    id: "umng-conv-ed7-47",
    university: "UMNG",
    examArea: "TOXICOLOGÍA INDUSTRIAL",
    topic: "INTOXICACIÓN AGUDA POR HIERRO",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Una mujer de 34 años, con antecedente de intento de suicidio previo, es traída a urgencias por su esposo tras encontrarla con un frasco vacío de suplemento de hierro para el tratamiento de su anemia, hace aproximadamente 18 horas. El esposo refiere que hace 8 horas la paciente presentó vómito intenso con estrías de sangre y diarrea, pero desde hace unas 4 horas \"se ve mucho mejor, hasta conversando normal\", por lo que casi no la trae a consultar. Al ingreso, la paciente luce alerta y sin dolor abdominal significativo, aunque persiste taquicárdica (FC 110 lpm) con presión arterial en el límite bajo. ¿Cuál es la interpretación CORRECTA de la fase clínica actual, y cuál es la conducta que debe seguirse?",
    options: [
      {
        id: "A",
        label: "A",
        text: "La paciente está en fase de recuperación definitiva; dado que se encuentra asintomática, puede darse de alta con seguimiento ambulatorio.",
      },
      {
        id: "B",
        label: "B",
        text: "La paciente está desarrollando un cuadro de sepsis abdominal no relacionada con el hierro; debe iniciarse manejo antibiótico empírico de amplio espectro exclusivamente.",
      },
      {
        id: "C",
        label: "C",
        text: "La paciente se encuentra en la fase de 'mejoría aparente' (Fase II), que NO indica resolución del cuadro; debe mantenerse en observación hospitalaria estrecha, con nivel sérico de hierro y vigilancia de la posible Fase III (toxicidad mitocondrial/hepática).",
      },
      {
        id: "D",
        label: "D",
        text: "La mejoría clínica descarta intoxicación significativa por hierro; debe reclasificarse el caso como intento de autolesión sin ingesta tóxica real.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "La paciente se encuentra en la traicionera **Fase II (de \"mejoría aparente\")** de la intoxicación aguda por hierro, que ocurre típicamente entre las 6 y 24 horas post-ingesta, tras la fase gastrointestinal corrosiva inicial (Fase I). En esta fase, los síntomas gastrointestinales floridos ceden aparentemente y el paciente puede lucir clínicamente bien, generando una falsa sensación de tranquilidad tanto en la familia como en el personal de salud poco entrenado; sin embargo, esta \"mejoría\" es **engañosa y NO significa que el hierro haya dejado de ser tóxico**: a nivel celular, el hierro libre no unido a proteínas transportadoras sigue acumulándose dentro de las mitocondrias, generando estrés oxidativo y disfunción del metabolismo celular, preparando el terreno para la **Fase III (12-48 horas post-ingesta)**, caracterizada por choque profundo, acidosis metabólica severa y falla hepática fulminante, potencialmente fatal. La taquicardia persistente y la presión arterial en el límite bajo en esta paciente son señales de alarma de que la toxicidad sistémica sigue activa a pesar de la aparente mejoría subjetiva. La conducta correcta es **mantener la observación hospitalaria estrecha**, solicitar **nivel sérico de hierro** (idealmente tomado entre 4-6 horas post-ingesta, aunque en este momento tardío sigue siendo útil para estratificar el riesgo) y vigilar activamente la posible progresión a la Fase III, teniendo lista la **Deferoxamina** como quelante específico si hay evidencia de toxicidad sistémica significativa.\n\n**TRAMPA DEL EXAMEN:** El esposo casi no trae a la paciente porque \"ya se veía bien\", y ese es exactamente el razonamiento erróneo que el examen busca desenmascarar. Dar de alta a un paciente con ingesta significativa de hierro solo porque está en la ventana de mejoría aparente de la Fase II es un error potencialmente fatal, ya que la Fase III catastrófica aún puede estar por venir.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la Fase II del hierro es, sin exagerar, una de las trampas más peligrosas de toda la toxicología, porque el engaño no es solo para la familia, sino que médicos con poca experiencia también caen en ella. El paciente literalmente se ve mejor, conversa, sonríe, y todos respiran aliviados, mientras el hierro libre sigue entrando silenciosamente a las mitocondrias de los hepatocitos, saboteando el metabolismo energético celular. No se deje engañar por la clínica en este momento: fíjese en signos sutiles como la taquicardia persistente y la presión en el límite bajo de esta paciente, que le están diciendo que algo sigue mal a pesar de la 'mejoría'. Manténgala hospitalizada, pida el nivel sérico de hierro para estratificar el riesgo real, y esté atento durante las próximas 24-48 horas a signos de descompensación hepática o choque, que marcarían el ingreso a la Fase III. Si hay toxicidad sistémica significativa (acidosis, choque, alteración de conciencia, niveles séricos muy elevados), la Deferoxamina intravenosa es el quelante que necesita tener disponible sin demora.",
    keyPoints: [
      "Intoxicación por hierro: Fase II ('mejoría aparente', 6-24h) es engañosa; el hierro libre sigue acumulándose en las mitocondrias aunque el paciente luzca bien.",
      "No dar de alta durante la Fase II; mantener observación hospitalaria, solicitar nivel sérico de hierro y vigilar progresión a Fase III (choque, acidosis, falla hepática fulminante).",
      "Antídoto específico ante toxicidad sistémica significativa: Deferoxamina intravenosa, guiada por niveles séricos y clínica, no por la aparente mejoría.",
    ],
  },
  {
    id: "umng-conv-ed7-48",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "INTOXICACIÓN POR DIGOXINA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Un hombre de 78 años, con antecedente de fibrilación auricular en manejo crónico con Digoxina, consulta por náuseas, vómito, visión con halos amarillo-verdosos alrededor de las luces (xantopsia), y palpitaciones. En el electrocardiograma se documenta una taquicardia auricular con bloqueo AV variable, y taquicardia ventricular bidireccional intermitente. Los laboratorios muestran creatinina elevada respecto a su basal (deterioro de función renal reciente) y potasio sérico de 6.8 mEq/L. El nivel sérico de Digoxina reportado es de 4.2 ng/mL (rango terapéutico 0.8-2.0 ng/mL). ¿Cuál es la conducta terapéutica de mayor prioridad ante este cuadro de intoxicación digitálica severa con hiperkalemia significativa?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar anticuerpos antidigoxina (fragmentos Fab específicos), que tratan simultáneamente la toxicidad cardíaca y corrigen la hiperkalemia asociada al revertir el efecto tóxico sobre la bomba Na-K-ATPasa.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Gluconato de Calcio intravenoso en dosis estándar como primera medida para tratar la hiperkalemia, dado que es seguro en cualquier contexto de intoxicación digitálica.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar cardioversión eléctrica sincronizada inmediata como primera medida, sin considerar tratamiento farmacológico antidótico específico.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar una dosis adicional de Digoxina intravenosa para 'compensar' la arritmia, bajo el principio de que el bloqueo AV requiere mayor efecto cronotrópico negativo.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El paciente presenta una **intoxicación digitálica severa** (favorecida por el deterioro agudo de la función renal, ya que la Digoxina se elimina principalmente por vía renal, y niveles séricos muy por encima del rango terapéutico), manifestada por síntomas gastrointestinales, alteraciones visuales características (xantopsia, halos amarillo-verdosos), y arritmias cardíacas de alto riesgo, incluyendo la **taquicardia ventricular bidireccional**, considerada patognomónica de toxicidad digitálica severa. La **hiperkalemia significativa (6.8 mEq/L)** en este contexto es un marcador establecido de severidad del envenenamiento agudo, ya que la Digoxina en dosis tóxicas **inhibe la bomba Na-K-ATPasa** de forma masiva, impidiendo la entrada de potasio a las células y generando su acumulación extracelular. El tratamiento de elección, que aborda simultáneamente la toxicidad cardíaca y la hiperkalemia asociada, son los **anticuerpos antidigoxina (fragmentos Fab específicos)**, que se unen directamente a la Digoxina circulante y tisular, neutralizándola y permitiendo que la bomba Na-K-ATPasa recupere su función normal, lo cual revierte tanto las arritmias como la hiperkalemia de forma simultánea y específica, siendo superior a las medidas convencionales para hiperkalemia en este contexto particular.\n\n**TRAMPA DEL EXAMEN:** El manejo reflejo de la hiperkalemia con Gluconato de Calcio, aunque es la primera línea en la mayoría de los contextos, tiene una consideración clásica de precaución en la intoxicación digitálica, ya que el calcio puede, en teoría, exacerbar la toxicidad cardíaca digitálica al aumentar aún más el calcio intracelular ya sobrecargado (aunque esta preocupación clásica ha sido matizada por evidencia más reciente, sigue siendo un punto de examen clásico que favorece priorizar el antídoto específico, los fragmentos Fab, sobre el manejo convencional aislado de la hiperkalemia).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando vea taquicardia ventricular bidireccional en un paciente que toma Digoxina, ya prácticamente tiene el diagnóstico hecho con solo ese dato; es de las pocas arritmias verdaderamente patognomónicas en toda la cardiología. Y fíjese en el detalle elegante de este caso: la hiperkalemia no es un hallazgo incidental que hay que tratar por separado con las medidas de siempre, es en realidad un reflejo directo de cuánta bomba Na-K-ATPasa está bloqueada por la Digoxina en este momento, y por eso el mejor tratamiento para esa hiperkalemia es literalmente quitarle la Digoxina de encima con los fragmentos Fab, no darle insulina-dextrosa o Gluconato de Calcio como si fuera una hiperkalemia cualquiera. Los fragmentos Fab son de esos antídotos hermosos en medicina donde una sola intervención resuelve el problema de raíz en vez de parchar cada síntoma por separado. Las indicaciones clásicas para usarlos incluyen arritmias potencialmente mortales, hiperkalemia significativa asociada, o niveles séricos muy elevados con inestabilidad clínica, exactamente el escenario de este paciente. Téngalos disponibles y no pierda tiempo con medidas convencionales aisladas cuando el antídoto específico está indicado.",
    keyPoints: [
      "Intoxicación digitálica severa: taquicardia ventricular bidireccional es patognomónica; xantopsia (visión amarillo-verdosa) es hallazgo clásico.",
      "La hiperkalemia en intoxicación digitálica refleja el grado de inhibición de la bomba Na-K-ATPasa; tratamiento específico: fragmentos Fab antidigoxina, que revierten arritmia e hiperkalemia simultáneamente.",
      "Precaución clásica de examen con el Gluconato de Calcio en este contexto; priorizar el antídoto específico (Fab) sobre el manejo convencional aislado de la hiperkalemia.",
    ],
  },
  {
    id: "umng-conv-ed7-49",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "SÍNDROME SEROTONINÉRGICO",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Una mujer de 26 años, en tratamiento con un Inhibidor Selectivo de la Recaptación de Serotonina (Sertralina) para trastorno depresivo, consulta a urgencias 8 horas después de haber tomado, por error de dosificación tras una consulta con un médico distinto, Tramadol para dolor lumbar, además de su Sertralina habitual. Presenta agitación, confusión, diaforesis, temblor generalizado, mioclonías, e hiperreflexia marcada con clonus sostenido en ambos tobillos, más pronunciado en miembros inferiores. Temperatura de 39.4°C. No hay rigidez muscular en \"tubo de plomo\", y no hay antecedente de uso reciente de antipsicóticos. ¿Cuál es el diagnóstico más probable, y qué hallazgo clínico es clave para diferenciarlo del Síndrome Neuroléptico Maligno?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome Neuroléptico Maligno; el hallazgo diferencial clave es la rigidez muscular generalizada en 'tubo de plomo', que domina el cuadro.",
      },
      {
        id: "B",
        label: "B",
        text: "Meningitis bacteriana aguda; el hallazgo diferencial clave es la fiebre elevada, que por sí sola confirma el diagnóstico infeccioso.",
      },
      {
        id: "C",
        label: "C",
        text: "Golpe de calor clásico; el hallazgo diferencial es la ausencia de exposición ambiental a temperaturas elevadas, lo cual descarta cualquier otro diagnóstico.",
      },
      {
        id: "D",
        label: "D",
        text: "Síndrome Serotoninérgico; el hallazgo diferencial clave frente al Síndrome Neuroléptico Maligno es la presencia de hiperreflexia y clonus (predominantemente en miembros inferiores), en lugar de rigidez muscular marcada.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El cuadro es característico de **Síndrome Serotoninérgico**, precipitado por la combinación de dos fármacos serotoninérgicos: un **ISRS (Sertralina)** de uso crónico y **Tramadol** (un analgésico opioide que, además de su efecto opioide, tiene actividad inhibitoria significativa de la recaptación de serotonina), generando una interacción farmacológica que produce **exceso de actividad serotoninérgica** en el sistema nervioso central. La tríada clásica del síndrome serotoninérgico incluye **alteración del estado mental** (agitación, confusión), **disfunción autonómica** (fiebre, diaforesis, taquicardia) y **anormalidades neuromusculares**, siendo el hallazgo diferencial más importante frente al Síndrome Neuroléptico Maligno la presencia de **hiperreflexia y clonus, característicamente más marcados en miembros inferiores**, junto con temblor y mioclonías, en contraste con el Síndrome Neuroléptico Maligno, que se caracteriza por **rigidez muscular generalizada en \"tubo de plomo\"** (con reflejos típicamente disminuidos o normales, no aumentados) y que además se asocia clásicamente al uso de antipsicóticos (bloqueadores dopaminérgicos), ausente en este caso. Ambos síndromes comparten fiebre y alteración autonómica, por lo que el examen neurológico (reflejos e hipertonía) y el contexto farmacológico son las claves diagnósticas diferenciales.\n\n**TRAMPA DEL EXAMEN:** Ver fiebre alta, agitación y rigidez/hipertonía muscular puede hacer pensar automáticamente en Síndrome Neuroléptico Maligno; sin embargo, el patrón específico de HIPERREFLEXIA y CLONUS (en lugar de rigidez en tubo de plomo con reflejos disminuidos), junto con el antecedente de un fármaco serotoninérgico añadido (Tramadol) en lugar de un antipsicótico, apunta claramente al Síndrome Serotoninérgico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., estos dos síndromes son primos hermanos en el examen porque se parecen mucho en la superficie (fiebre, alteración mental, disautonomía), pero se examinan clínicamente de forma opuesta: en el síndrome serotoninérgico el sistema nervioso está 'hiperexcitado', así que va a encontrar reflejos exagerados y clonus, especialmente al explorar los tobillos, mientras que en el neuroléptico maligno el sistema está 'atascado' por el bloqueo dopaminérgico, con rigidez muscular generalizada tipo tubo de plomo y reflejos más bien apagados. El Tramadol es uno de esos fármacos traicioneros que muchos colegas no recuerdan como serotoninérgico porque piensan en él solo como opioide para el dolor, pero tiene actividad inhibitoria de recaptación de serotonina significativa, y combinado con un ISRS de uso crónico como la Sertralina, es una receta clásica para este síndrome. El manejo es principalmente de soporte: suspender de inmediato ambos fármacos serotoninérgicos, sedación con benzodiacepinas para controlar la agitación y la hipertonía, enfriamiento activo si hay hipertermia significativa, y en casos severos refractarios se puede considerar Ciproheptadina, un antagonista serotoninérgico. La mayoría de los casos leves a moderados resuelven en 24-48 horas simplemente retirando los fármacos causales.",
    keyPoints: [
      "Síndrome Serotoninérgico: combinación de fármacos serotoninérgicos (ej. ISRS + Tramadol) causa alteración mental + disautonomía + hiperreflexia/clonus (predominio en miembros inferiores).",
      "Diferencial clave vs. Síndrome Neuroléptico Maligno: rigidez en 'tubo de plomo' con reflejos disminuidos, asociado a antipsicóticos (no a serotoninérgicos).",
      "Manejo: suspender fármacos causales, benzodiacepinas para agitación/hipertonía, enfriamiento activo; Ciproheptadina en casos refractarios.",
    ],
  },
  {
    id: "umng-conv-ed7-50",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "INTOXICACIÓN POR CIANURO",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Un hombre de 40 años es rescatado por bomberos de un incendio estructural en un edificio de apartamentos, tras estar atrapado en una habitación llena de humo denso durante aproximadamente 10 minutos. Al ingreso a urgencias presenta alteración del estado de consciencia con Glasgow de 10/15, taquipnea, e hipotensión arterial (PA 80/50 mmHg). La gasometría arterial muestra acidosis metabólica severa con lactato sérico marcadamente elevado (14 mmol/L), y una saturación venosa de oxígeno llamativamente elevada a pesar del estado de choque. Se observa hollín en la cavidad oral y las fosas nasales, además de quemaduras faciales superficiales. Ante la alta sospecha de intoxicación concomitante por cianuro (por combustión de materiales sintéticos), ¿cuál es el antídoto de elección disponible actualmente que puede administrarse de forma segura sin necesidad de confirmar el diagnóstico con niveles séricos, incluso en presencia de intoxicación concomitante por monóxido de carbono?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nitrito de sodio intravenoso, ya que induce metahemoglobinemia terapéutica de forma segura independientemente de la coexposición a monóxido de carbono.",
      },
      {
        id: "B",
        label: "B",
        text: "Hidroxocobalamina intravenosa, que se une directamente al cianuro formando cianocobalamina (excretada por vía renal), sin comprometer la capacidad de transporte de oxígeno de la hemoglobina.",
      },
      {
        id: "C",
        label: "C",
        text: "Azul de metileno intravenoso, como antídoto específico y de primera línea para la intoxicación por cianuro en cualquier contexto clínico.",
      },
      {
        id: "D",
        label: "D",
        text: "Deferoxamina intravenosa, como quelante específico del cianuro en el contexto de inhalación de humo.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El cuadro es altamente sugestivo de **intoxicación por cianuro** en el contexto de inhalación de humo de un incendio estructural (la combustión de materiales sintéticos como plásticos, espumas de poliuretano y textiles libera ácido cianhídrico), reflejada por la **acidosis láctica severa desproporcionada** (el cianuro bloquea la citocromo c oxidasa mitocondrial, inhibiendo la respiración celular aeróbica y forzando el metabolismo hacia la glicólisis anaeróbica con producción masiva de lactato) y la **saturación venosa de oxígeno elevada** (dato clave: como las células no pueden utilizar el oxígeno a nivel mitocondrial, este permanece en la sangre venosa sin ser extraído por los tejidos, un hallazgo característico de la toxicidad citotóxica del cianuro). Dado que la coexposición a **monóxido de carbono** es extremadamente frecuente en víctimas de incendios y ambos tóxicos comparten manifestaciones clínicas superpuestas, el antídoto de elección en este contexto es la **Hidroxocobalamina intravenosa**, que se une directamente al cianuro formando **cianocobalamina** (vitamina B12, no tóxica, excretada por vía renal), sin generar metahemoglobinemia ni comprometer la ya limitada capacidad de transporte de oxígeno de la hemoglobina (que en un paciente con coexposición a CO ya está comprometida por la carboxihemoglobina), por lo que puede administrarse de forma empírica y segura ante la sola sospecha clínica, sin necesidad de esperar confirmación con niveles séricos de cianuro (que además no están disponibles de forma rápida en la práctica clínica).\n\n**TRAMPA DEL EXAMEN:** El Nitrito de Sodio, un antídoto clásico e históricamente usado para cianuro en otros contextos, funciona induciendo metahemoglobinemia (la metahemoglobina secuestra el cianuro), pero esto reduce aún más la capacidad de transporte de oxígeno de la hemoglobina, lo cual es **peligroso y contraindicado** en pacientes con coexposición a monóxido de carbono (como ocurre casi siempre en víctimas de incendios), ya que empeoraría críticamente la hipoxia tisular ya comprometida por la carboxihemoglobina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en toda víctima de incendio con alteración de consciencia, acidosis láctica severa y esa saturación venosa de oxígeno 'sospechosamente alta' (que en realidad es una mala noticia, porque significa que las células no están pudiendo usar el oxígeno que reciben), piense en cianuro además del monóxido de carbono; son dos venenos que casi siempre vienen juntos en el humo de un incendio con materiales sintéticos, y no puede darse el lujo de esperar un nivel sérico de cianuro que en la práctica tarda horas o días en resultar. La Hidroxocobalamina es hoy el antídoto de elección precisamente porque es segura incluso sin diagnóstico confirmado y sin importar si el paciente también tiene carboxihemoglobinemia significativa; el nitrito de sodio, en cambio, es una trampa peligrosa en este escenario específico porque le induciría metahemoglobinemia justo cuando la hemoglobina de este paciente ya está sobrecargada de monóxido de carbono y no puede darse el lujo de perder más capacidad de transporte de oxígeno. Administre la Hidroxocobalamina de forma empírica ante la sospecha clínica razonable, en paralelo con oxígeno al 100% para tratar la coexposición a CO, y no espere confirmación de laboratorio para actuar; en toxicología de humo de incendio, la clínica manda.",
    keyPoints: [
      "Intoxicación por cianuro (inhalación de humo): acidosis láctica desproporcionada + saturación venosa de oxígeno elevada (el tejido no puede extraer/utilizar el oxígeno).",
      "Antídoto de elección: Hidroxocobalamina IV, segura ante sospecha clínica sin confirmación de laboratorio y sin comprometer el transporte de oxígeno.",
      "Evitar Nitrito de Sodio si hay coexposición a monóxido de carbono (frecuente en incendios), ya que la metahemoglobinemia inducida empeora la hipoxia tisular ya comprometida por la carboxihemoglobina.",
    ],
  },
];
