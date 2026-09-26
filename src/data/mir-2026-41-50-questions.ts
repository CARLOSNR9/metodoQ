import type { TrainingQuestion } from "@/lib/questions/types";

export const MIR_2026_41_50_QUESTIONS: TrainingQuestion[] = [
  {
    id: "mir-2026-41",
    university: "MIR (España)",
    examArea: "CARDIOLOGÍA",
    topic: "TAPONAMIENTO CARDÍACO (DERRAME PERICÁRDICO)",
    difficulty: "hard",
    tags: ["mir", "espana", "cardiologia"],
    statement:
      "Una mujer de 52 años, con neoplasia de pulmón conocida, presenta disnea progresiva, ingurgitación yugular y tonos cardíacos apagados. La presión arterial es 92/70 mmHg en espiración y desciende a 74/58 mmHg durante la inspiración (caída >10 mmHg). El ecocardiograma muestra derrame pericárdico moderado-severo con colapso diastólico de cavidades derechas. ¿Cuál es el hallazgo hemodinámico descrito y el manejo más apropiado?",
    options: [
      { id: "A", label: "A", text: "Pulso paradójico, compatible con taponamiento cardíaco; el manejo es la pericardiocentesis (guiada por ecografía) o el drenaje quirúrgico, sin demorar el tratamiento ante compromiso hemodinámico significativo." },
      { id: "B", label: "B", text: "Hallazgo sin relevancia clínica, frecuente en pacientes con taquipnea y ansiedad, que no requiere ninguna intervención más allá de la observación ambulatoria y el control de la tensión arterial." },
      { id: "C", label: "C", text: "Signo de Kussmaul, compatible con una pericarditis constrictiva crónica, cuyo manejo es exclusivamente médico con diuréticos y restricción de sal, sin necesidad de drenaje ni de pericardiectomía, dado que el derrame no compromete el llenado ventricular." },
      { id: "D", label: "D", text: "Hallazgo típico de una estenosis mitral severa descompensada; el manejo es la valvuloplastia mitral percutánea urgente tras confirmar el gradiente transvalvular por ecocardiografía." },
    ],
    correctOptionId: "A",
    explanation:
      "El descenso de la presión arterial sistólica >10 mmHg durante la inspiración es el **pulso paradójico**, un hallazgo característico (aunque no exclusivo) del **taponamiento cardíaco**: el derrame pericárdico compromete el llenado diastólico de las cavidades cardíacas, y durante la inspiración el aumento del retorno venoso derecho desplaza el septo interventricular hacia la izquierda, reduciendo aún más el llenado del ventrículo izquierdo y provocando esa caída exagerada de la presión sistólica. Junto con la ingurgitación yugular y los tonos apagados (tríada de Beck, aunque no siempre completa) y el hallazgo ecocardiográfico de colapso diastólico de cavidades derechas, el diagnóstico de taponamiento con compromiso hemodinámico es claro. El tratamiento es el **drenaje del derrame** (pericardiocentesis guiada por ecografía, de elección en la mayoría de los casos, o drenaje quirúrgico en casos seleccionados), sin demorarlo ante compromiso hemodinámico significativo.\n\n**TRAMPA DEL EXAMEN:** Confundir el pulso paradójico con el signo de Kussmaul (que es la ausencia de descenso o el aumento paradójico de la presión venosa yugular con la inspiración, típico de la pericarditis constrictiva y otras causas de restricción al llenado del ventrículo derecho, un hallazgo distinto) es un error frecuente. Ambos pueden coexistir en algunos contextos, pero el pulso paradójico (medido en la presión arterial, no en la presión venosa yugular) es el hallazgo clásico del taponamiento agudo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., no confunda estos dos signos que suenan parecido pero son distintos: el pulso paradójico es una caída EXAGERADA de la presión arterial sistólica con la inspiración (más de 10 mmHg), y es la marca registrada del taponamiento cardíaco agudo. El signo de Kussmaul es otra cosa: el aumento (o la falta de descenso esperado) de la presión venosa yugular con la inspiración, típico de la pericarditis constrictiva. Con esta paciente oncológica, derrame pericárdico con colapso diastólico de cavidades derechas en el eco, y pulso paradójico claro, usted está ante un taponamiento con compromiso hemodinámico real; no se quede observando, el líquido hay que sacarlo, con pericardiocentesis guiada por ecografía como primera opción en la mayoría de los escenarios.",
    keyPoints: [
      "Pulso paradójico: caída >10 mmHg de la PA sistólica con la inspiración; hallazgo característico del taponamiento cardíaco.",
      "Taponamiento cardíaco: tríada de Beck (hipotensión + ingurgitación yugular + tonos apagados) + colapso diastólico de cavidades derechas en ecocardiograma.",
      "Tratamiento: drenaje del derrame (pericardiocentesis guiada por ecografía o quirúrgico), sin demora ante compromiso hemodinámico.",
    ],
  },
  {
    id: "mir-2026-42",
    university: "MIR (España)",
    examArea: "NEUMOLOGÍA",
    topic: "NEUMOTÓRAX ESPONTÁNEO PRIMARIO",
    difficulty: "medium",
    tags: ["mir", "espana", "neumologia"],
    statement:
      "Un varón de 22 años, alto y delgado, sin patología pulmonar conocida, presenta dolor torácico pleurítico súbito y disnea leve tras un esfuerzo. La radiografía de tórax muestra un neumotórax izquierdo con una separación de la pleura visceral respecto a la pared torácica de aproximadamente 1 cm en el hilio, sin desviación mediastínica ni compromiso hemodinámico. ¿Cuál es el manejo más apropiado?",
    options: [
      { id: "A", label: "A", text: "Dado que es un neumotórax espontáneo primario de pequeño tamaño, en un paciente estable y poco sintomático, puede manejarse de forma conservadora (observación, oxigenoterapia y analgesia) con seguimiento radiológico, sin necesidad de drenaje torácico inmediato." },
      { id: "B", label: "B", text: "Debe colocarse un tubo de toracostomía de forma obligatoria en todo neumotórax espontáneo, independientemente de su tamaño y de la clínica del paciente, ya que la observación aislada conlleva un riesgo inaceptable de progresión a neumotórax a tensión." },
      { id: "C", label: "C", text: "Está indicada la toracotomía urgente con resección de las bullas apicales como tratamiento de primera línea en el primer episodio de neumotórax espontáneo, para prevenir las recurrencias, que son la norma en los varones jóvenes, altos y fumadores." },
      { id: "D", label: "D", text: "Debe realizarse pleurodesis química con talco de entrada, sin necesidad de drenaje torácico previo ni de un periodo de observación, para evitar las recidivas en un paciente joven y fumador, que presenta un riesgo muy alto de un segundo episodio." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con un **neumotórax espontáneo primario** (sin enfermedad pulmonar subyacente conocida, típico de varones jóvenes altos y delgados). El manejo depende del **tamaño** del neumotórax y de la **situación clínica** del paciente: en un neumotórax **pequeño** (según las guías, habitualmente <2 cm de separación pleural en la radiografía, como en este caso) y en un paciente **estable y mínimamente sintomático**, el manejo conservador (observación, oxígeno suplementario que acelera la reabsorción del aire pleural, analgesia) con seguimiento radiológico ambulatorio es una opción razonable y de primera elección. El drenaje torácico (tubo de toracostomía) o la aspiración se reservan para neumotórax de mayor tamaño, sintomáticos, con compromiso respiratorio, o que no se resuelven con manejo conservador.\n\n**TRAMPA DEL EXAMEN:** Indicar drenaje torácico de forma \"obligatoria\" en todo neumotórax espontáneo, sin considerar el tamaño ni la clínica, sobretrata a pacientes que se benefician de un manejo conservador más sencillo y con menos riesgos. La toracotomía urgente y la pleurodesis química de entrada no son el manejo de primera línea de un primer episodio no complicado; se reservan para recurrencias, neumotórax persistentes o complicados.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., no todo neumotórax necesita un tubo de tórax; aprenda a usar el tamaño y la clínica del paciente como su guía de decisión. Este paciente joven, con un neumotórax pequeño (apenas 1 cm de separación pleural) y sin compromiso respiratorio significativo ni inestabilidad, es candidato perfecto a manejo conservador: oxígeno (que además acelera la reabsorción del aire), analgesia, y una radiografía de control en unas horas o días para confirmar que se está resolviendo. Reserve el drenaje torácico para los neumotórax grandes, sintomáticos, o que progresan pese a la observación; y no se le ocurra plantear cirugía o pleurodesis en un primer episodio simple, eso es para cuando el neumotórax recurre o se complica.",
    keyPoints: [
      "Neumotórax espontáneo primario pequeño (<2 cm) en paciente estable y poco sintomático: manejo conservador (observación, oxígeno, analgesia) con seguimiento radiológico.",
      "Drenaje torácico/aspiración: reservado para neumotórax grandes, sintomáticos, con compromiso respiratorio, o que no se resuelven con manejo conservador.",
      "Toracotomía/pleurodesis: no son manejo de primera línea de un primer episodio no complicado; se reservan para recurrencias o complicaciones.",
    ],
  },
  {
    id: "mir-2026-43",
    university: "MIR (España)",
    examArea: "CIRUGÍA GENERAL",
    topic: "OBSTRUCCIÓN INTESTINAL MECÁNICA",
    difficulty: "medium",
    tags: ["mir", "espana", "cirugia-general"],
    statement:
      "Un varón de 67 años, con antecedente de laparotomía previa por apendicitis complicada, presenta dolor abdominal cólico, distensión, vómitos y ausencia de emisión de gases y heces de 2 días de evolución. La radiografía de abdomen muestra niveles hidroaéreos en asas de intestino delgado dilatadas. No hay fiebre, taquicardia ni signos de irritación peritoneal. ¿Cuál es el manejo inicial más apropiado?",
    options: [
      { id: "A", label: "A", text: "Manejo conservador inicial: sonda nasogástrica para descompresión, dieta absoluta, fluidoterapia intravenosa con corrección hidroelectrolítica, y observación clínica estrecha, reservando la cirugía urgente para signos de estrangulación, peritonitis, o fracaso del manejo conservador." },
      { id: "B", label: "B", text: "Laparotomía exploratoria urgente de entrada, sin ensayar manejo conservador, dado el antecedente de cirugía abdominal previa y el riesgo de que las bridas provoquen una estrangulación; la sonda nasogástrica y la fluidoterapia solo retrasan la cirugía y aumentan la mortalidad del paciente." },
      { id: "C", label: "C", text: "Manejo ambulatorio con dieta oral normal, abundantes líquidos y laxantes osmóticos, dado que la ausencia de fiebre y de leucocitosis descarta la gravedad del cuadro, con control en su centro de salud en 48-72 horas si persisten los vómitos, el dolor cólico o la distensión abdominal." },
      { id: "D", label: "D", text: "Colonoscopia urgente como primer paso diagnóstico y terapéutico, independientemente de la localización de la obstrucción, ya que permite descomprimir el intestino y colocar una endoprótesis, evitando la cirugía y la necesidad de sonda nasogástrica en la mayoría de los casos de obstrucción." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con una **obstrucción intestinal mecánica de intestino delgado**, muy probablemente por **bridas/adherencias** postquirúrgicas (causa más frecuente en pacientes con cirugía abdominal previa). En ausencia de signos de **estrangulación** (fiebre, taquicardia, irritación peritoneal, leucocitosis marcada, dolor continuo e intenso desproporcionado) o **peritonitis**, el manejo inicial es **conservador**: sonda nasogástrica para descomprimir el tubo digestivo, dieta absoluta, fluidoterapia intravenosa con corrección de las alteraciones hidroelectrolíticas, y observación clínica estrecha con reevaluaciones seriadas, ya que una proporción significativa de las obstrucciones por bridas se resuelve sin necesidad de cirugía. La **cirugía urgente** se reserva para cuando aparecen signos de estrangulación, peritonitis, o cuando el manejo conservador fracasa tras un periodo razonable de observación.\n\n**TRAMPA DEL EXAMEN:** Indicar cirugía urgente de entrada en toda obstrucción con antecedente de cirugía previa, sin datos de estrangulación ni peritonitis, sobretrata a un paciente que puede resolverse con manejo conservador, exponiéndolo a los riesgos innecesarios de una nueva laparotomía. El manejo ambulatorio con dieta oral normal ignora el riesgo de una obstrucción mecánica no resuelta, que requiere manejo hospitalario y descompresión.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la clave de esta pregunta es distinguir entre \"obstrucción simple\" y \"obstrucción con sospecha de estrangulación\", porque el manejo cambia radicalmente. Este paciente no tiene fiebre, ni taquicardia, ni signos de irritación peritoneal: son buenas noticias, porque le dan margen para ensayar manejo conservador primero. Ponga la sonda nasogástrica para descomprimir, deje al paciente en dieta absoluta, corrija líquidos y electrolitos, y reevalúe seriadamente; muchas obstrucciones por bridas ceden así, sin necesidad de operar de nuevo a un paciente que ya tiene una cirugía previa (con el riesgo añadido que eso implica). Pero esté atento: si en algún momento aparecen esos signos de alarma que hoy no tiene —fiebre, taquicardia, dolor que se vuelve continuo e intenso, defensa abdominal— ahí el manejo cambia a cirugía urgente, porque esos datos sugieren que el intestino se está estrangulando y necrosando.",
    keyPoints: [
      "Obstrucción intestinal mecánica sin signos de estrangulación/peritonitis: manejo conservador inicial (SNG, dieta absoluta, fluidoterapia, observación).",
      "Cirugía urgente: reservada para signos de estrangulación (fiebre, taquicardia, irritación peritoneal, dolor continuo desproporcionado), peritonitis, o fracaso del manejo conservador.",
      "Causa más frecuente de obstrucción de intestino delgado en paciente con cirugía abdominal previa: bridas/adherencias.",
    ],
  },
  {
    id: "mir-2026-44",
    university: "MIR (España)",
    examArea: "ENDOCRINOLOGÍA / NEFROLOGÍA",
    topic: "SIADH - HIPONATREMIA EUVOLÉMICA",
    difficulty: "hard",
    tags: ["mir", "espana", "endocrinologia"],
    statement:
      "Una mujer de 70 años, en tratamiento con un inhibidor selectivo de la recaptación de serotonina, presenta confusión leve y náuseas. La analítica muestra sodio sérico de 118 mEq/L, osmolaridad plasmática baja, osmolaridad urinaria inapropiadamente elevada, sodio urinario >40 mEq/L, y la paciente está clínicamente euvolémica, sin edemas ni signos de deshidratación. No presenta crisis comiciales ni coma. ¿Cuál es el diagnóstico más probable y el manejo inicial más apropiado?",
    options: [
      { id: "A", label: "A", text: "Síndrome de secreción inadecuada de hormona antidiurética (SIADH); el manejo inicial en la hiponatremia moderada-sintomática sin síntomas neurológicos graves es la restricción hídrica, con corrección gradual del sodio (evitando una corrección demasiado rápida) y valorando la suspensión del fármaco implicado." },
      { id: "B", label: "B", text: "Deshidratación hipotónica por depleción de volumen extracelular secundaria a pérdidas; el manejo es la administración generosa de suero salino isotónico para expandir el volumen, con controles de sodio cada 12 horas hasta su normalización completa y retirada de los diuréticos tiazídicos si los tomara." },
      { id: "C", label: "C", text: "Insuficiencia cardíaca congestiva con hiponatremia dilucional; el manejo inicial es la restricción hídrica estricta junto con diuréticos de asa a dosis altas por vía intravenosa, la retirada de los inhibidores de la enzima convertidora y el control diario del peso y de la diuresis." },
      { id: "D", label: "D", text: "Hiponatremia facticia (pseudohiponatremia) por hiperglucemia o hiperlipidemia grave; el manejo es corregir la glucemia con insulina y repetir la natremia calculando el sodio corregido, sin ninguna otra intervención dirigida a modificar el sodio plasmático." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con un **síndrome de secreción inadecuada de hormona antidiurética (SIADH)**: **hiponatremia euvolémica** (sin edemas ni signos de depleción de volumen), con **osmolaridad plasmática baja** pero **osmolaridad urinaria inapropiadamente elevada** (el riñón sigue concentrando la orina pese a la hipoosmolaridad plasmática, lo que no debería ocurrir fisiológicamente) y **sodio urinario elevado** (>40 mEq/L, reflejo de una volemia efectiva normal/alta, no de depleción). Los ISRS son una causa farmacológica reconocida de SIADH, especialmente en pacientes de edad avanzada. En la hiponatremia **moderada** con síntomas leves-moderados (sin convulsiones ni coma, que definirían una hiponatremia grave que requeriría salino hipertónico), el manejo inicial es la **restricción hídrica**, junto con la identificación y, si es posible, suspensión del fármaco causante, corrigiendo el sodio de forma **gradual** para evitar el riesgo de mielinólisis pontina central por corrección demasiado rápida.\n\n**TRAMPA DEL EXAMEN:** Administrar suero salino isotónico generoso en un paciente con SIADH es un error clásico: al estar el riñón reteniendo agua libre de forma inapropiada, gran parte del sodio administrado se excreta y el agua se retiene, pudiendo incluso empeorar la hiponatremia (fenómeno conocido como \"desalinización\"). Confundir el cuadro con hiponatremia dilucional de insuficiencia cardíaca (que cursaría con signos de sobrecarga de volumen, edemas, que esta paciente no tiene) o con pseudohiponatremia por hiperglucemia (que no encaja con la osmolaridad plasmática baja real de este caso) lleva a un manejo incorrecto.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ante una hiponatremia, su primer paso mental siempre es clasificar el estado de volemia: ¿esta paciente está hipovolémica, euvolémica o hipervolémica? Aquí no hay edemas ni signos de deshidratación, así que está euvolémica, y eso ya lo dirige hacia SIADH como el diagnóstico más probable, sobre todo con el antecedente de un ISRS, un causante farmacológico clásico. El patrón de laboratorio confirma la sospecha: orina inapropiadamente concentrada pese a un plasma diluido, y sodio urinario alto. El tratamiento inicial, mientras la paciente no tenga síntomas neurológicos graves (convulsiones, coma), es simple: restrinja el agua libre, no se la dé de más con suero salino isotónico (eso puede empeorar el cuadro), y si puede, retire o cambie el fármaco causante. Y recuerde siempre corregir el sodio con calma, nunca demasiado rápido, porque una corrección brusca puede desencadenar una mielinólisis pontina central, una complicación neurológica devastadora e irreversible.",
    keyPoints: [
      "SIADH: hiponatremia euvolémica + osmolaridad urinaria inapropiadamente elevada + sodio urinario >40 mEq/L; causa farmacológica frecuente: ISRS.",
      "Manejo inicial (hiponatremia moderada, sin síntomas neurológicos graves): restricción hídrica + retirar/cambiar el fármaco causante + corrección gradual del sodio.",
      "Evitar el suero salino isotónico generoso (puede empeorar la hiponatremia) y la corrección demasiado rápida del sodio (riesgo de mielinólisis pontina central).",
    ],
  },
  {
    id: "mir-2026-45",
    university: "MIR (España)",
    examArea: "ENFERMEDADES INFECCIOSAS / CARDIOLOGÍA",
    topic: "ENDOCARDITIS INFECCIOSA",
    difficulty: "hard",
    tags: ["mir", "espana", "infecciosas"],
    statement:
      "Un varón de 58 años, usuario de drogas por vía parenteral, presenta fiebre de 2 semanas de evolución, astenia y un nuevo soplo cardíaco no conocido previamente. Al examen se observan lesiones purpúricas dolorosas en pulpejos de los dedos. Se sospecha endocarditis infecciosa. ¿Cuál es la actuación diagnóstica inicial más apropiada antes de iniciar antibioterapia?",
    options: [
      { id: "A", label: "A", text: "Extraer al menos 3 tandas de hemocultivos (de sitios de venopunción diferentes, antes de iniciar antibioterapia) y solicitar ecocardiograma (transtorácico inicialmente, transesofágico si el transtorácico no es concluyente o hay alta sospecha), salvo que la inestabilidad hemodinámica obligue a no demorar el inicio del tratamiento antibiótico." },
      { id: "B", label: "B", text: "Iniciar antibioterapia empírica de amplio espectro de inmediato, sin extraer hemocultivos previos, para no retrasar el tratamiento de una infección potencialmente grave, y solicitar el ecocardiograma solo si la fiebre persiste tras una semana de tratamiento antibiótico correcto, ya que la mayoría de las bacteriemias en usuarios de drogas se resuelven sin afectación valvular ni complicaciones embólicas." },
      { id: "C", label: "C", text: "Solicitar únicamente serologías virales (VIH, VHB y VHC) y tratamiento sintomático de la fiebre, dado que la causa más probable del cuadro en un usuario de drogas por vía parenteral es una infección viral sistémica aguda, no bacteriana, y los hemocultivos no aportarían información útil." },
      { id: "D", label: "D", text: "Diferir cualquier estudio diagnóstico hasta la resolución completa de la fiebre con antitérmicos, dado que las lesiones cutáneas descritas no tienen relevancia diagnóstica y la mayoría de los cuadros febriles en este contexto son autolimitados y se resuelven en pocos días." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro (fiebre prolongada, soplo cardíaco de nueva aparición, lesiones de Janeway/nódulos de Osler —las lesiones purpúricas dolorosas en pulpejos sugieren nódulos de Osler— en un usuario de drogas por vía parenteral, un factor de riesgo clásico) es altamente sugestivo de **endocarditis infecciosa**. El abordaje diagnóstico estándar (integrado en los criterios de Duke) requiere **hemocultivos** (al menos 3 tandas, de sitios de venopunción diferentes, **antes** de iniciar la antibioterapia, ya que esta puede negativizar los cultivos y dificultar la identificación del microorganismo causante) y **ecocardiograma** (transtorácico como primer paso, transesofágico si no es concluyente o la sospecha clínica sigue siendo alta pese a un transtorácico negativo) para buscar vegetaciones u otras alteraciones estructurales compatibles. Solo en presencia de **inestabilidad hemodinámica** grave se prioriza el inicio inmediato de antibioterapia empírica sobre la espera de los hemocultivos.\n\n**TRAMPA DEL EXAMEN:** Iniciar antibioterapia empírica antes de extraer los hemocultivos, en un paciente estable, es un error grave: reduce drásticamente la probabilidad de identificar el microorganismo causante y ajustar el tratamiento dirigido, siendo la identificación microbiológica un pilar fundamental del manejo de la endocarditis. Descartar la naturaleza bacteriana del cuadro pensando en causas virales ignora el contexto clínico clásico (fiebre + soplo nuevo + estigmas periféricos + factor de riesgo) que apunta claramente a endocarditis infecciosa bacteriana.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en la sospecha de endocarditis infecciosa, el orden de las acciones importa mucho: extraiga los hemocultivos ANTES de dar la primera dosis de antibiótico, salvo que el paciente esté hemodinámicamente inestable y no pueda esperar. Si usted da el antibiótico primero \"para no perder tiempo\", puede terminar con cultivos negativos y sin poder dirigir el tratamiento hacia el microorganismo específico, lo que complica muchísimo el manejo posterior de una enfermedad que requiere semanas de antibioterapia dirigida. Junto con los hemocultivos, pida el ecocardiograma para buscar las vegetaciones; empiece con el transtorácico, y si la sospecha sigue alta a pesar de un resultado negativo o dudoso, no se quede ahí, pida el transesofágico, que tiene mayor sensibilidad. Y no minimice esas lesiones en los dedos: los nódulos de Osler y las lesiones de Janeway son estigmas periféricos clásicos de la endocarditis, parte de los criterios diagnósticos, no un hallazgo incidental sin importancia.",
    keyPoints: [
      "Sospecha de endocarditis infecciosa: extraer al menos 3 tandas de hemocultivos ANTES de iniciar antibioterapia (salvo inestabilidad hemodinámica).",
      "Ecocardiograma transtorácico primero; transesofágico si no es concluyente o la sospecha clínica sigue siendo alta.",
      "Estigmas periféricos (nódulos de Osler, lesiones de Janeway) forman parte de los criterios diagnósticos, no son hallazgos incidentales.",
    ],
  },
  {
    id: "mir-2026-46",
    university: "MIR (España)",
    examArea: "NEUROLOGÍA",
    topic: "ESTADO EPILÉPTICO",
    difficulty: "hard",
    tags: ["mir", "espana", "neurologia"],
    statement:
      "Un varón de 35 años presenta una crisis convulsiva tónico-clónica generalizada que persiste sin recuperación de la conciencia a los 8 minutos de iniciada, ya administrada una primera dosis de benzodiacepina intravenosa (lorazepam) sin respuesta. ¿Cuál es el siguiente paso más apropiado en el manejo del estado epiléptico?",
    options: [
      { id: "A", label: "A", text: "Administrar un fármaco antiepiléptico de segunda línea por vía intravenosa (por ejemplo, levetiracetam, ácido valproico o fenitoína), dado que la crisis persiste tras la benzodiacepina inicial; si no cede, el siguiente escalón es la anestesia general con fármacos como propofol o midazolam en infusión continua, con intubación y soporte en UCI." },
      { id: "B", label: "B", text: "Repetir la misma dosis de benzodiacepina de forma indefinida cada 5-10 minutos hasta que la crisis ceda, sin escalar a otros fármacos antiepilépticos, ya que las benzodiacepinas son los únicos fármacos con eficacia demostrada en el estatus epiléptico y la depresión respiratoria es excepcional incluso tras varias dosis repetidas en adultos jóvenes." },
      { id: "C", label: "C", text: "Esperar sin intervención farmacológica adicional y proteger al paciente de lesiones, dado que la mayoría de las crisis ceden espontáneamente antes de los 20 minutos y los fármacos antiepilépticos intravenosos tienen efectos adversos cardiovasculares que superan su beneficio, reservando el tratamiento para las crisis que superen la hora de duración." },
      { id: "D", label: "D", text: "Iniciar anestesia general con propofol de inmediato como primer escalón, sin ensayar un fármaco antiepiléptico de segunda línea, para controlar cuanto antes la actividad eléctrica cerebral y evitar el daño neuronal, ya que cada minuto de estatus aumenta la probabilidad de secuelas y la intubación precoz protege la vía aérea." },
    ],
    correctOptionId: "A",
    explanation:
      "El manejo del **estado epiléptico** sigue un protocolo escalonado por tiempo: **primera línea** (benzodiacepina intravenosa, como lorazepam o diazepam, ya administrada en este caso sin respuesta); si la crisis persiste (habitualmente se define la falta de respuesta cuando continúa unos minutos después de la benzodiacepina), se pasa a la **segunda línea**: un **fármaco antiepiléptico intravenoso** (levetiracetam, ácido valproico, o fenitoína/fosfenitoína, con eficacia similar entre las opciones según la evidencia más reciente). Si la crisis persiste pese a esta segunda línea (**estado epiléptico refractario**), el siguiente escalón es la **anestesia general** (propofol, midazolam en infusión continua, o barbitúricos), con intubación orotraqueal y manejo en UCI.\n\n**TRAMPA DEL EXAMEN:** Repetir benzodiacepinas de forma indefinida sin escalar a un antiepiléptico de segunda línea retrasa el control de la crisis y aumenta el riesgo de complicaciones neurológicas (daño neuronal por la actividad convulsiva prolongada) y sistémicas (rabdomiólisis, hipertermia, acidosis). Esperar sin ninguna intervención adicional en una crisis que ya lleva 8 minutos y no ha respondido a la primera línea ignora la definición operativa de estado epiléptico y el riesgo de daño neurológico con la persistencia de la actividad comicial. Saltarse la segunda línea e ir directo a anestesia general sin ensayarla primero es innecesariamente agresivo salvo que ya se haya agotado ese escalón.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el manejo del estado epiléptico es una escalera con tiempos bien definidos, y usted no se puede quedar estancado en el mismo escalón esperando un milagro. Ya le dio la benzodiacepina y la crisis sigue; no repita la misma dosis una y otra vez pensando que con paciencia va a ceder. El siguiente paso es subir a un antiepiléptico intravenoso de segunda línea: levetiracetam, valproico o fenitoína son las opciones estándar, con evidencia reciente sugiriendo eficacia similar entre ellas, así que la elección depende más del perfil del paciente y la disponibilidad que de una superioridad clara de uno sobre otro. Si a pesar de esto la crisis sigue sin ceder, ya está usted ante un estado epiléptico refractario, y ahí el manejo escala a anestesia general con intubación y soporte en UCI. Cada minuto de actividad convulsiva continua es potencialmente neurotóxico, así que la escalera se sube rápido, sin quedarse esperando en el mismo peldaño.",
    keyPoints: [
      "Estado epiléptico: primera línea benzodiacepina IV; si persiste, segunda línea antiepiléptico IV (levetiracetam, valproico o fenitoína).",
      "Estado epiléptico refractario a la segunda línea: anestesia general (propofol/midazolam) con intubación y manejo en UCI.",
      "No repetir indefinidamente la misma línea de tratamiento sin escalar; la persistencia de la crisis conlleva riesgo de daño neurológico.",
    ],
  },
  {
    id: "mir-2026-47",
    university: "MIR (España)",
    examArea: "NEFROLOGÍA",
    topic: "SÍNDROME NEFRÓTICO VS SÍNDROME NEFRÍTICO",
    difficulty: "medium",
    tags: ["mir", "espana", "nefrologia"],
    statement:
      "Un niño de 5 años presenta edema periorbitario y de miembros inferiores de instauración progresiva en una semana, sin hematuria macroscópica ni hipertensión arterial significativa. La analítica muestra proteinuria masiva (en rango nefrótico), hipoalbuminemia e hiperlipidemia. ¿Cuál es el síndrome más probable y su causa más frecuente en este grupo de edad?",
    options: [
      { id: "A", label: "A", text: "Síndrome nefrótico; en la infancia, la causa más frecuente es la enfermedad de cambios mínimos, que típicamente responde bien al tratamiento con corticoides." },
      { id: "B", label: "B", text: "Síndrome nefrítico; la causa más frecuente en la infancia es la glomerulonefritis postestreptocócica, y el hallazgo esperado sería hematuria macroscópica e hipertensión, no proteinuria masiva aislada." },
      { id: "C", label: "C", text: "Insuficiencia cardíaca congestiva; el edema se debe a sobrecarga de volumen por fallo de bomba cardíaca." },
      { id: "D", label: "D", text: "Síndrome nefrótico secundario a diabetes mellitus, la causa más frecuente de proteinuria masiva a cualquier edad." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con un **síndrome nefrótico**: edema (por la hipoalbuminemia secundaria a la pérdida masiva de proteínas), **proteinuria en rango nefrótico**, **hipoalbuminemia** e **hiperlipidemia**, típicamente **sin** hematuria macroscópica significativa ni hipertensión marcada (a diferencia del síndrome nefrítico). En la **infancia**, la causa más frecuente de síndrome nefrótico es la **enfermedad de cambios mínimos** (nephrosis lipoidea), que se caracteriza por su **buena respuesta a los corticoides** en la mayoría de los casos, con un pronóstico generalmente favorable.\n\n**TRAMPA DEL EXAMEN:** Confundir síndrome nefrótico con nefrítico es el error clásico de esta pregunta: el nefrítico se caracteriza por hematuria (a menudo macroscópica, orina \"en agua de lavar carne\"), hipertensión arterial, oliguria y proteinuria generalmente menos intensa (no en rango nefrótico), con la glomerulonefritis postestreptocócica como causa clásica en la infancia; este paciente no tiene ese patrón. La diabetes mellitus es la causa más frecuente de síndrome nefrótico en el **adulto**, no en el niño, donde la enfermedad de cambios mínimos predomina claramente.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., memorice el contraste nefrótico-nefrítico como dos cuadros casi opuestos: el nefrótico es \"proteína que se escapa\" (proteinuria masiva, hipoalbuminemia, edema, hiperlipidemia compensadora), generalmente sin mucha hematuria ni hipertensión; el nefrítico es \"sangre e inflamación glomerular\" (hematuria, hipertensión, oliguria, proteinuria más modesta). Este niño tiene el patrón nefrótico clásico, y en su grupo de edad, la primera sospecha diagnóstica siempre debe ser la enfermedad de cambios mínimos, precisamente porque responde tan bien a corticoides que muchas veces ni siquiera se biopsia de entrada; se prueba el tratamiento esteroideo y, si responde como se espera, se confirma indirectamente el diagnóstico. Reserve la sospecha de causas secundarias (diabetes, enfermedades sistémicas) para el adulto o para el niño que no responde al tratamiento esteroideo habitual.",
    keyPoints: [
      "Síndrome nefrótico: proteinuria masiva + hipoalbuminemia + edema + hiperlipidemia, sin hematuria/HTA significativas.",
      "Causa más frecuente de síndrome nefrótico en la infancia: enfermedad de cambios mínimos (buena respuesta a corticoides).",
      "Síndrome nefrítico (hematuria, HTA, oliguria, proteinuria menos intensa) es un cuadro distinto; causa clásica en la infancia: glomerulonefritis postestreptocócica.",
    ],
  },
  {
    id: "mir-2026-48",
    university: "MIR (España)",
    examArea: "HEMATOLOGÍA",
    topic: "PÚRPURA TROMBOCITOPÉNICA TROMBÓTICA (PTT) VS PTI",
    difficulty: "hard",
    tags: ["mir", "espana", "hematologia"],
    statement:
      "Una mujer de 34 años presenta petequias, confusión de inicio reciente y fiebre. La analítica muestra plaquetas de 15.000/µL, hemoglobina 8.4 g/dL, LDH muy elevada, haptoglobina indetectable, y en el frotis de sangre periférica se observan abundantes esquistocitos. La función renal muestra creatinina levemente elevada. El estudio de coagulación (TP, TTPa) es normal. ¿Cuál es el diagnóstico más probable y la actuación terapéutica urgente?",
    options: [
      { id: "A", label: "A", text: "Púrpura trombocitopénica trombótica (PTT); el tratamiento urgente es el recambio plasmático (plasmaféresis), evitando la transfusión de plaquetas salvo hemorragia con riesgo vital, ya que puede empeorar la microtrombosis." },
      { id: "B", label: "B", text: "Púrpura trombocitopénica inmune (PTI); el tratamiento de primera línea es la transfusión de plaquetas para corregir rápidamente el recuento plaquetario, seguida de corticoides e inmunoglobulinas intravenosas si el recuento no se mantiene por encima de 50.000/µl." },
      { id: "C", label: "C", text: "Coagulación intravascular diseminada; el tratamiento es reponer los factores de coagulación con plasma fresco congelado y crioprecipitado como primera medida, sin necesidad de plasmaféresis, junto con el tratamiento de la causa desencadenante." },
      { id: "D", label: "D", text: "Anemia hemolítica autoinmune con trombocitopenia asociada (síndrome de Evans); el tratamiento de primera línea son los corticoides sistémicos en monoterapia a dosis de 1 mg/kg/día, reservando la esplenectomía para los casos refractarios." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con una **púrpura trombocitopénica trombótica (PTT)**: la combinación de **anemia hemolítica microangiopática** (esquistocitos en el frotis, LDH muy elevada, haptoglobina indetectable) + **trombocitopenia severa** + **afectación neurológica** (confusión) + fiebre + afectación renal leve constituye el cuadro clásico (la péntada clásica, aunque no siempre completa, incluye también fiebre). El **TP y TTPa normales** son un dato clave que ayuda a diferenciarla de la coagulación intravascular diseminada (CID), donde estos parámetros suelen estar alterados. La PTT es una **urgencia hematológica** (por microtrombos que ocluyen la microcirculación en múltiples órganos) cuyo tratamiento de elección es el **recambio plasmático (plasmaféresis)**, iniciado sin demora, ya que reduce drásticamente la mortalidad (que sin tratamiento es muy alta). La **transfusión de plaquetas** debe **evitarse** salvo hemorragia con riesgo vital, ya que puede alimentar la formación de microtrombos y empeorar el cuadro isquémico multiorgánico.\n\n**TRAMPA DEL EXAMEN:** Transfundir plaquetas de forma reflexiva ante una trombocitopenia severa, sin reconocer el contexto de PTT, es un error potencialmente catastrófico: en la PTT, a diferencia de la PTI (donde la trombocitopenia es aislada, sin anemia hemolítica microangiopática ni esquistocitos), la transfusión plaquetaria puede empeorar la microtrombosis y la isquemia de órganos. La CID cursaría con alteración del TP/TTPa (a diferencia de este caso, donde son normales), un dato clave para diferenciarla.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando vea trombocitopenia severa junto con anemia hemolítica y esquistocitos en el frotis, piense inmediatamente en microangiopatía trombótica, y dentro de ese grupo, la combinación con confusión y fiebre le apunta a PTT. El dato de laboratorio que le ayuda a diferenciarla de la CID es la coagulación: en la PTT, el TP y el TTPa suelen ser normales (el problema no es un consumo global de factores de coagulación, sino microtrombos ricos en plaquetas y factor de von Willebrand), mientras que en la CID esos tiempos casi siempre están alargados. Y aquí viene el punto que más le puede salvar la vida a la paciente en el examen y en la vida real: NO transfunda plaquetas por reflejo solo porque el número es bajísimo; en la PTT, meter más plaquetas es literalmente echarle más leña al fuego de la microtrombosis. Active la plasmaféresis urgente, que es el tratamiento que realmente cambia el pronóstico de esta enfermedad.",
    keyPoints: [
      "PTT: anemia hemolítica microangiopática (esquistocitos, LDH alta, haptoglobina baja) + trombocitopenia severa + clínica neurológica ± fiebre ± afectación renal.",
      "TP y TTPa normales en la PTT (a diferencia de la CID, donde suelen estar alterados); dato clave para el diagnóstico diferencial.",
      "Tratamiento urgente: plasmaféresis; evitar transfusión de plaquetas salvo hemorragia con riesgo vital (puede empeorar la microtrombosis).",
    ],
  },
  {
    id: "mir-2026-49",
    university: "MIR (España)",
    examArea: "PSIQUIATRÍA",
    topic: "SÍNDROME DE ABSTINENCIA ALCOHÓLICA",
    difficulty: "medium",
    tags: ["mir", "espana", "psiquiatria"],
    statement:
      "Un varón de 48 años, con consumo crónico de alcohol, acude a Urgencias por temblor, ansiedad, sudoración y taquicardia, 36 horas después de su última ingesta. Progresivamente presenta alucinaciones visuales, desorientación y agitación psicomotriz. ¿Cuál es el manejo farmacológico más apropiado y qué medida debe garantizarse antes de administrar glucosa?",
    options: [
      { id: "A", label: "A", text: "Benzodiacepinas (por ejemplo, diazepam o clordiazepóxido) como tratamiento de primera línea del síndrome de abstinencia alcohólica, y administrar tiamina antes o junto con cualquier aporte de glucosa, para prevenir la encefalopatía de Wernicke." },
      { id: "B", label: "B", text: "Antipsicóticos (haloperidol) en monoterapia como tratamiento de primera línea, sin necesidad de benzodiacepinas, dado que las alucinaciones y la agitación psicomotriz son los síntomas predominantes y más peligrosos del cuadro." },
      { id: "C", label: "C", text: "Administrar glucosa intravenosa de inmediato como primera medida para corregir una posible hipoglucemia, sin necesidad de tiamina previa ni concomitante, y valorar la sedación farmacológica una vez normalizada la glucemia." },
      { id: "D", label: "D", text: "Restricción física prolongada y sueroterapia intravenosa como únicas medidas, sin tratamiento farmacológico específico del síndrome de abstinencia, para evitar la sedación excesiva y la depresión respiratoria." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con un **síndrome de abstinencia alcohólica** en evolución hacia el **delirium tremens** (alucinaciones, desorientación, agitación, hiperactividad autonómica), una complicación potencialmente mortal. El tratamiento de **primera línea** son las **benzodiacepinas** (diazepam, clordiazepóxido, o lorazepam), que controlan tanto los síntomas autonómicos como el riesgo de crisis comiciales y la progresión a delirium tremens. Un punto crítico de seguridad: en todo paciente con sospecha de deficiencia de tiamina (alcoholismo crónico, malnutrición), se debe administrar **tiamina antes o junto con** cualquier aporte de glucosa, ya que la glucosa sin tiamina previa puede precipitar o agravar una **encefalopatía de Wernicke** (al consumirse las reservas de tiamina restantes en el metabolismo agudo de la glucosa), una entidad grave y potencialmente irreversible si no se trata a tiempo.\n\n**TRAMPA DEL EXAMEN:** Los antipsicóticos no son el tratamiento de primera línea del síndrome de abstinencia alcohólica (pueden tener un papel adyuvante limitado en casos seleccionados con agitación o alucinaciones muy marcadas, pero no sustituyen a las benzodiacepinas, y además reducen el umbral convulsivo). El error de seguridad más grave y clásico en el examen es administrar glucosa antes que la tiamina en un paciente con riesgo de deficiencia, lo que puede desencadenar o empeorar una encefalopatía de Wernicke.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., dos ideas que tiene que tener automatizadas ante todo paciente con abstinencia alcohólica: primero, las benzodiacepinas son su tratamiento base, no los antipsicóticos; controlan la hiperactividad autonómica, reducen el riesgo de convulsiones, y previenen la progresión hacia el delirium tremens. Segundo, y esto es un clásico que salva vidas: NUNCA le ponga glucosa a un paciente con riesgo de déficit de tiamina sin haber dado la tiamina antes o al menos al mismo tiempo. Parece un detalle menor, pero la glucosa sin tiamina puede gastar las últimas reservas de esta vitamina y desencadenar una encefalopatía de Wernicke, con su tríada clásica de confusión, ataxia y oftalmoplejía, que si no se trata a tiempo puede dejar secuelas permanentes (síndrome de Korsakoff). Así que en este paciente: tiamina primero (o junto), benzodiacepinas para controlar la abstinencia, y vigilancia estrecha por el riesgo de progresión a delirium tremens.",
    keyPoints: [
      "Síndrome de abstinencia alcohólica/delirium tremens: benzodiacepinas (diazepam, clordiazepóxido) como tratamiento de primera línea.",
      "Administrar tiamina ANTES o junto con cualquier aporte de glucosa en pacientes con riesgo de déficit, para prevenir la encefalopatía de Wernicke.",
      "Los antipsicóticos no son primera línea del síndrome de abstinencia y pueden reducir el umbral convulsivo.",
    ],
  },
  {
    id: "mir-2026-50",
    university: "MIR (España)",
    examArea: "CIRUGÍA VASCULAR",
    topic: "ANEURISMA DE AORTA ABDOMINAL ROTO",
    difficulty: "hard",
    tags: ["mir", "espana", "cirugia-vascular"],
    statement:
      "Un varón de 74 años, fumador, con antecedente conocido de aneurisma de aorta abdominal en seguimiento, acude por dolor abdominal y lumbar intenso de inicio súbito, con síncope previo al ingreso. Presenta PA 76/48 mmHg, FC 128 lpm, y una masa abdominal pulsátil dolorosa. ¿Cuál es la conducta más apropiada?",
    options: [
      { id: "A", label: "A", text: "Activar de inmediato el equipo quirúrgico vascular para reparación urgente (endovascular o abierta según disponibilidad y anatomía), con reanimación mediante hipotensión permisiva (evitando la administración agresiva de líquidos hasta el control quirúrgico del sangrado) y sin retrasar la cirugía con estudios de imagen extensos si el diagnóstico clínico ya es altamente sugestivo." },
      { id: "B", label: "B", text: "Solicitar una resonancia magnética abdominal urgente para caracterizar completamente el aneurisma, su extensión proximal y su relación con las arterias renales y viscerales antes de decidir el tipo de reparación, manteniendo mientras tanto al paciente en observación con analgesia y monitorización hemodinámica continua en la sala de Urgencias." },
      { id: "C", label: "C", text: "Administrar grandes volúmenes de cristaloides y hemoderivados hasta normalizar completamente la presión arterial y la frecuencia cardíaca antes de considerar cualquier intervención quirúrgica, ya que operar a un paciente hipotenso multiplica la mortalidad del procedimiento vascular y del acto anestésico en pacientes de edad avanzada." },
      { id: "D", label: "D", text: "Manejo médico conservador con analgesia, control estricto de la presión arterial y seguimiento ambulatorio en la consulta de cirugía vascular, dado que el aneurisma ya estaba en seguimiento previo con un diámetro conocido y el dolor lumbar en pacientes de esta edad suele tener un origen osteomuscular." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro (dolor abdominal/lumbar súbito e intenso, síncope, hipotensión, taquicardia, masa abdominal pulsátil dolorosa, en un paciente con aneurisma de aorta abdominal conocido) es compatible con **rotura de aneurisma de aorta abdominal**, una **urgencia quirúrgica vital** con mortalidad muy elevada si no se trata de inmediato. La conducta es activar sin demora el equipo de **cirugía vascular** para la **reparación urgente** (endovascular si la anatomía y disponibilidad lo permiten, o abierta), utilizando una estrategia de **hipotensión permisiva** durante la reanimación (evitando la administración agresiva de líquidos, que puede aumentar la presión intravascular y agravar el sangrado antes del control quirúrgico), y sin retrasar la cirugía con estudios de imagen extensos cuando el cuadro clínico ya es altamente sugestivo (una ecografía a pie de cama, si está disponible y no retrasa el traslado, puede aportar apoyo rápido).\n\n**TRAMPA DEL EXAMEN:** Solicitar una resonancia magnética completa antes de operar es un error grave que retrasa el tratamiento definitivo de un paciente que se está desangrando activamente hacia el retroperitoneo. Administrar grandes volúmenes de cristaloides buscando normalizar completamente la presión arterial antes de controlar quirúrgicamente el sangrado puede, paradójicamente, aumentar la hemorragia (al elevar la presión intravascular sobre una rotura no controlada) y diluir los factores de coagulación; la estrategia de hipotensión permisiva es preferible mientras se organiza la cirugía.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ante un paciente con aneurisma de aorta conocido que llega con dolor súbito, síncope e hipotensión, usted no está ante una duda diagnóstica que requiera estudios exhaustivos; está ante una rotura de aneurisma hasta que se demuestre lo contrario, y cada minuto que pasa sin control quirúrgico del sangrado es sangre que sigue perdiendo hacia el retroperitoneo. Active el equipo vascular de inmediato, y mientras se organiza el quirófano, reanime con la estrategia de hipotensión permisiva: dé el volumen justo para mantener una perfusión mínima aceptable (algunos protocolos apuntan a una presión sistólica en torno a 80-90 mmHg, evitando la normalización completa), no litros y litros de cristaloides pensando que va a \"arreglar\" la hipotensión; eso solo aumenta la presión sobre una arteria que ya se está rompiendo y empeora el sangrado. La resonancia magnética, olvídela en este escenario: no hay tiempo, y el diagnóstico clínico ya es prácticamente seguro.",
    keyPoints: [
      "Rotura de aneurisma de aorta abdominal: dolor abdominal/lumbar súbito + síncope + hipotensión + masa pulsátil dolorosa; urgencia quirúrgica vital.",
      "Activar cirugía vascular urgente (endovascular o abierta) sin retrasar el tratamiento con estudios de imagen extensos ante un cuadro clínico ya sugestivo.",
      "Reanimación con hipotensión permisiva (evitar volumen agresivo) hasta el control quirúrgico del sangrado; no buscar normalizar completamente la presión arterial antes de operar.",
    ],
  },
];
