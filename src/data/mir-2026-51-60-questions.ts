import type { TrainingQuestion } from "@/lib/questions/types";

export const MIR_2026_51_60_QUESTIONS: TrainingQuestion[] = [
  {
    id: "mir-2026-51",
    university: "MIR (España)",
    examArea: "CARDIOLOGÍA",
    topic: "SHOCK CARDIOGÉNICO POST-INFARTO",
    difficulty: "hard",
    tags: ["mir", "espana", "cardiologia"],
    statement:
      "Un varón de 66 años, 6 horas después de un IAMCEST anterior extenso tratado con angioplastia primaria, presenta hipotensión (PA 78/52 mmHg), frialdad y livideces distales, oliguria y crepitantes bibasales. El índice cardíaco está reducido. ¿Cuál es el manejo más apropiado de este shock cardiogénico?",
    options: [
      { id: "A", label: "A", text: "Soporte con fármacos vasoactivos (norepinefrina como vasopresor si la hipotensión es marcada, y/o un inotrópico como dobutamina para mejorar el gasto cardíaco), evitando la sobrecarga de volumen, con valoración de soporte circulatorio mecánico si no hay respuesta al tratamiento farmacológico." },
      { id: "B", label: "B", text: "Administrar grandes volúmenes de cristaloides como primera medida (bolos de 500-1000 ml repetidos), dado que la hipotensión indica una depleción de volumen que debe corregirse antes que otras intervenciones, aunque existan crepitantes pulmonares o signos de congestión. Reevaluar tras cada bolo." },
      { id: "C", label: "C", text: "Iniciar un betabloqueante intravenoso de forma inmediata para reducir la frecuencia cardíaca y el consumo miocárdico de oxígeno, ya que la taquicardia sinusal es la causa principal del bajo gasto y controlarla permite que el ventrículo se llene mejor y recupere la presión arterial en las siguientes horas." },
      { id: "D", label: "D", text: "Manejo con diuréticos de asa a dosis altas en perfusión continua, dado que los crepitantes bibasales indican que la prioridad es eliminar volumen, sin necesidad de fármacos vasoactivos mientras se mantenga una diuresis adecuada." },
    ],
    correctOptionId: "A",
    explanation:
      "Este paciente presenta un **shock cardiogénico** post-IAM: hipotensión con signos de hipoperfusión periférica (frialdad, livideces, oliguria) y congestión pulmonar (crepitantes), reflejando un fallo de bomba con gasto cardíaco reducido (índice cardíaco bajo). El manejo combina **soporte vasoactivo**: **norepinefrina** como vasopresor de elección si la hipotensión es marcada (mantiene mejor la presión de perfusión coronaria y sistémica con menos arritmogenicidad que otras alternativas), y/o un **inotrópico** como la **dobutamina** para mejorar la contractilidad y el gasto cardíaco, evitando la administración agresiva de volumen (el paciente ya está congestivo, no hipovolémico). En casos refractarios a estas medidas, se valora el **soporte circulatorio mecánico** (balón de contrapulsación intraaórtico, dispositivos de asistencia ventricular percutánea, ECMO), además de asegurar la revascularización completa si procede.\n\n**TRAMPA DEL EXAMEN:** Administrar volumen agresivo asumiendo que toda hipotensión requiere fluidoterapia es un error grave en el shock cardiogénico, donde el paciente típicamente ya está congestivo (crepitantes bibasales); el exceso de volumen empeora el edema pulmonar sin mejorar el gasto cardíaco. Iniciar betabloqueantes en fase aguda de shock cardiogénico también es contraproducente: deprimen aún más la contractilidad miocárdica en un corazón que ya está fallando como bomba.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en el shock cardiogénico el problema no es falta de volumen, es falta de bomba: el corazón no está impulsando la sangre con la fuerza suficiente, así que darle más líquido a este paciente solo va a inundarle más los pulmones sin resolver el problema de fondo. Su arsenal aquí es farmacológico vasoactivo: norepinefrina para sostener la presión de perfusión si la hipotensión es marcada, dobutamina si necesita mejorar la contractilidad, y si con eso no basta, es momento de pensar en soporte circulatorio mecánico mientras el corazón se recupera o se define un tratamiento más definitivo. Y ni se le ocurra poner un betabloqueante en esta fase aguda; eso es para el paciente estable post-IAM, no para el que está en shock cardiogénico activo, donde deprimir aún más la contractilidad puede ser letal.",
    keyPoints: [
      "Shock cardiogénico post-IAM: hipotensión + hipoperfusión periférica + congestión pulmonar, con gasto cardíaco reducido.",
      "Manejo: vasopresor (norepinefrina) e inotrópico (dobutamina) según necesidad, evitando sobrecarga de volumen; soporte circulatorio mecánico si es refractario.",
      "No administrar volumen agresivo ni betabloqueantes en la fase aguda del shock cardiogénico.",
    ],
  },
  {
    id: "mir-2026-52",
    university: "MIR (España)",
    examArea: "NEUMOLOGÍA",
    topic: "DERRAME PLEURAL - CRITERIOS DE LIGHT",
    difficulty: "medium",
    tags: ["mir", "espana", "neumologia"],
    statement:
      "Una mujer de 60 años con neumonía presenta un derrame pleural asociado. La toracocentesis diagnóstica muestra: proteínas en líquido pleural 4.2 g/dL (proteínas séricas 6.5 g/dL), LDH en líquido pleural 380 U/L (LDH sérica 220 U/L, límite superior normal de LDH sérica 250 U/L). ¿Cómo se clasifica este derrame según los criterios de Light y qué implica?",
    options: [
      { id: "A", label: "A", text: "Exudado, ya que cumple al menos uno de los criterios de Light (cociente proteínas líquido/suero >0.5, cociente LDH líquido/suero >0.6, o LDH del líquido pleural mayor de dos tercios del límite superior normal de la LDH sérica); orienta a una causa local (en este caso, paraneumónico) que requiere estudio dirigido, no simplemente tratamiento diurético." },
      { id: "B", label: "B", text: "Trasudado, ya que ninguno de los cocientes calculados supera el umbral establecido por los criterios de Light, lo que orienta a una causa sistémica (insuficiencia cardíaca, cirrosis o síndrome nefrótico) y permite iniciar tratamiento diurético sin necesidad de estudiar el líquido pleural ni realizar nuevas toracocentesis diagnósticas en este paciente." },
      { id: "C", label: "C", text: "Los criterios de Light no son aplicables en los derrames asociados a una neumonía, debiendo usarse el aspecto macroscópico del líquido (turbio o claro) y el recuento de leucocitos para clasificarlo, ya que la inflamación pleural altera los cocientes de proteínas y de LDH y produce falsos exudados en la mayoría de los casos de derrame paraneumónico complicado." },
      { id: "D", label: "D", text: "No es posible clasificar el derrame sin conocer el nivel de glucosa y el pH en el líquido pleural, datos imprescindibles según los criterios de Light, por lo que debe repetirse la toracocentesis antes de establecer si se trata de un exudado o de un trasudado y de decidir el tratamiento definitivo en este paciente con neumonía y fiebre persistente." },
    ],
    correctOptionId: "A",
    explanation:
      "Los **criterios de Light** clasifican un derrame pleural como **exudado** si cumple **al menos uno** de los siguientes: cociente de proteínas líquido pleural/suero **>0.5**, cociente de LDH líquido pleural/suero **>0.6**, o LDH del líquido pleural **mayor de dos tercios** del límite superior normal de la LDH sérica. En este caso: cociente de proteínas = 4.2/6.5 = 0.65 (>0.5) y cociente de LDH = 380/220 = 1.73 (>0.6); ambos criterios se cumplen, confirmando un **exudado**. En el contexto de una neumonía, esto es compatible con un **derrame paraneumónico**, que requiere una evaluación adicional (pH, glucosa, cultivo, tinción de Gram) para descartar un empiema o un derrame paraneumónico complicado que pudiera requerir drenaje, más allá del simple tratamiento antibiótico de la neumonía de base.\n\n**TRAMPA DEL EXAMEN:** Confundir exudado con trasudado sin aplicar correctamente los cocientes (o calculándolos al revés) lleva a errores de clasificación. Los trasudados (típicos de insuficiencia cardíaca, cirrosis con ascitis, síndrome nefrótico) no cumplen ninguno de los tres criterios y generalmente no requieren estudio invasivo dirigido a la pleura, a diferencia de los exudados, que sí obligan a buscar una causa local (infección, neoplasia, etc.).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., memorice los criterios de Light como tres preguntas de sí/no, y basta con que UNA sea afirmativa para llamarlo exudado: ¿el cociente de proteínas líquido/suero es mayor de 0.5? ¿El cociente de LDH líquido/suero es mayor de 0.6? ¿La LDH del líquido supera dos tercios del límite superior normal de la LDH sérica? Aquí ambos cocientes de proteínas y LDH superan el umbral, así que es un exudado sin duda. Eso es clínicamente relevante: un exudado en el contexto de una neumonía le obliga a investigar más allá del diagnóstico obvio, buscando si se trata de un derrame paraneumónico simple o si ya se complicó hacia un empiema, que cambiaría completamente el manejo (drenaje torácico en vez de solo antibiótico). No se quede con el diagnóstico de neumonía y ya; ese derrame pleural exudativo le está pidiendo un estudio del líquido más completo.",
    keyPoints: [
      "Criterios de Light: exudado si cociente proteínas líquido/suero >0.5, O cociente LDH líquido/suero >0.6, O LDH líquido >2/3 del límite superior normal sérico (basta uno).",
      "Derrame paraneumónico exudativo: requiere estudio adicional (pH, glucosa, cultivo) para descartar empiema o derrame complicado que requiera drenaje.",
      "Trasudados (insuficiencia cardíaca, cirrosis, síndrome nefrótico) no cumplen los criterios de Light y no suelen requerir estudio invasivo dirigido.",
    ],
  },
  {
    id: "mir-2026-53",
    university: "MIR (España)",
    examArea: "CIRUGÍA GENERAL",
    topic: "COLECISTITIS AGUDA",
    difficulty: "medium",
    tags: ["mir", "espana", "cirugia-general"],
    statement:
      "Una mujer de 50 años, con colelitiasis conocida, presenta dolor en hipocondrio derecho de 18 horas de evolución, fiebre de 38.3°C y signo de Murphy positivo. La ecografía abdominal muestra vesícula biliar de paredes engrosadas (>4 mm), con litiasis y líquido perivesicular. ¿Cuál es el manejo más apropiado?",
    options: [
      { id: "A", label: "A", text: "Colecistectomía laparoscópica precoz (idealmente dentro de las primeras 72 horas desde el inicio de los síntomas), junto con antibioterapia, dado el cuadro compatible con colecistitis aguda; la cirugía precoz se asocia a mejores resultados que la diferida." },
      { id: "B", label: "B", text: "Manejo conservador con antibióticos intravenosos y analgesia, difiriendo la colecistectomía varios meses, aunque la evolución clínica sea desfavorable, por el mayor riesgo quirúrgico de operar la vesícula inflamada." },
      { id: "C", label: "C", text: "Colangiopancreatografía retrógrada endoscópica (CPRE) urgente como primer paso terapéutico, sin necesidad de colecistectomía posterior, ya que extrae los cálculos de la vía biliar y resuelve la inflamación de la vesícula en la mayoría de los casos." },
      { id: "D", label: "D", text: "Manejo ambulatorio con analgesia oral y dieta pobre en grasas, dado que la fiebre de 38.3°C no alcanza el umbral para considerar el cuadro como grave ni para indicar ingreso, con control ecográfico programado en 2-3 semanas." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro (dolor en hipocondrio derecho, fiebre, signo de Murphy positivo, y hallazgos ecográficos de pared vesicular engrosada, litiasis y líquido perivesicular) es compatible con **colecistitis aguda litiásica**. El manejo de elección, en pacientes sin contraindicaciones quirúrgicas relevantes, es la **colecistectomía laparoscópica precoz** (idealmente dentro de las primeras 72 horas desde el inicio de los síntomas), junto con **antibioterapia** dirigida a la flora biliar habitual. La evidencia actual respalda que la cirugía precoz se asocia a **menor estancia hospitalaria y menos complicaciones** que diferir la cirugía varias semanas (estrategia antigua que se reservaba para \"enfriar\" el cuadro inflamatorio).\n\n**TRAMPA DEL EXAMEN:** Diferir la colecistectomía de forma indefinida o sistemática (\"esperar a que se enfríe\") ya no es la estrategia preferida en pacientes sin contraindicaciones para la cirugía; la evidencia actual favorece la cirugía precoz. La CPRE no es el tratamiento de la colecistitis aguda (que afecta a la vesícula biliar); su indicación es la patología de la vía biliar principal (coledocolitiasis, colangitis), un escenario distinto que puede coexistir pero no sustituye a la colecistectomía cuando el problema es vesicular.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., olvide la vieja costumbre de \"dejar enfriar\" la colecistitis aguda durante semanas antes de operar; la evidencia actual es clara en que la colecistectomía laparoscópica precoz, dentro de las primeras 72 horas, da mejores resultados que esperar. No confunda tampoco colecistitis con patología de la vía biliar principal: si el problema es la vesícula (litiasis vesicular con inflamación de su pared), el tratamiento es quitarla, no hacer una CPRE, que es la herramienta para cuando el cálculo se ha ido al colédoco y está causando coledocolitiasis o colangitis, un escenario clínico distinto (con ictericia, alteración de enzimas hepáticas de patrón colestásico, y a veces colangitis con la tríada de Charcot). Con Murphy positivo, fiebre y la ecografía clásica que describe este caso, su plan es antibiótico más colecistectomía precoz, sin demorarla innecesariamente.",
    keyPoints: [
      "Colecistitis aguda litiásica: colecistectomía laparoscópica precoz (idealmente <72h desde el inicio) + antibioterapia; mejor que diferir la cirugía.",
      "Diagnóstico: dolor en hipocondrio derecho + fiebre + Murphy positivo + ecografía (pared vesicular engrosada, litiasis, líquido perivesicular).",
      "La CPRE trata patología de la vía biliar principal (coledocolitiasis/colangitis), no la colecistitis aguda en sí.",
    ],
  },
  {
    id: "mir-2026-54",
    university: "MIR (España)",
    examArea: "APARATO DIGESTIVO",
    topic: "ENCEFALOPATÍA HEPÁTICA",
    difficulty: "medium",
    tags: ["mir", "espana", "digestivo"],
    statement:
      "Un varón de 60 años, con cirrosis hepática conocida, es traído por su familia por confusión progresiva y desorientación de 2 días de evolución. Refieren que ha estado estreñido en los últimos días y que hace poco le añadieron un nuevo diurético. Al examen presenta asterixis (flapping tremor). ¿Cuál es la actuación más apropiada?",
    options: [
      { id: "A", label: "A", text: "Buscar activamente y corregir el factor precipitante (en este caso, probablemente estreñimiento y/o alteración electrolítica por el diurético), e iniciar lactulosa oral (o por sonda/enema si no puede tragar) como tratamiento de primera línea de la encefalopatía hepática." },
      { id: "B", label: "B", text: "Restringir de forma estricta y prolongada la ingesta proteica de la dieta, ya que la causa principal de la encefalopatía hepática es el exceso de proteínas en la dieta, sin necesidad de buscar otros factores precipitantes ni de iniciar laxantes o antibióticos no absorbibles como la rifaximina." },
      { id: "C", label: "C", text: "Iniciar sedación con benzodiacepinas de vida media corta para controlar la agitación y la desorientación, sin necesidad de buscar ni de tratar factores precipitantes, y reevaluar el nivel de conciencia al día siguiente." },
      { id: "D", label: "D", text: "Realizar una paracentesis evacuadora urgente como tratamiento específico de la encefalopatía hepática, aunque no haya ascitis significativa, con reposición de albúmina intravenosa." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con **encefalopatía hepática** en un paciente cirrótico: confusión, desorientación y asterixis (flapping tremor, signo clásico aunque no exclusivo). Un paso esencial del manejo es **buscar activamente el factor precipitante**, ya que la encefalopatía hepática rara vez aparece \"de la nada\" en un cirrótico compensado; los desencadenantes más frecuentes incluyen infecciones, hemorragia digestiva, estreñimiento (aumenta la producción y absorción de amonio), alteraciones electrolíticas (frecuentemente inducidas por diuréticos, como la hipopotasemia o la alcalosis), deshidratación, y el uso de sedantes. En este caso, el estreñimiento y el nuevo diurético son sospechosos claros. El tratamiento de **primera línea** es la **lactulosa** (oral, por sonda nasogástrica, o en enema si el paciente no puede tragar), que acidifica el contenido intestinal y actúa como laxante osmótico, reduciendo la producción y absorción de amonio.\n\n**TRAMPA DEL EXAMEN:** La restricción proteica estricta y prolongada, que se recomendaba en el pasado, ya no es una práctica correcta como manejo de rutina, ya que puede contribuir a la malnutrición del paciente cirrótico sin un beneficio claro demostrado; el enfoque actual prioriza corregir el factor precipitante y usar lactulosa, manteniendo un aporte proteico adecuado. Sedar a un paciente con encefalopatía hepática sin buscar ni tratar la causa de fondo puede empeorar el nivel de conciencia y enmascarar la evolución clínica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ante un cirrótico confuso, su primera pregunta mental siempre debe ser: ¿qué lo descompensó? La encefalopatía hepática casi nunca aparece espontáneamente sin un gatillo, así que revise sistemáticamente: ¿tiene una infección (incluyendo peritonitis bacteriana espontánea si hay ascitis)? ¿Sangró por el tubo digestivo? ¿Está estreñido? ¿Le cambiaron o subieron un diurético que le alteró los electrolitos? En este paciente, el estreñimiento reciente y el nuevo diurético son sus principales sospechosos. Mientras corrige esa causa, arranque con lactulosa, que es su tratamiento de primera línea, ajustando la dosis para lograr 2-3 deposiciones blandas al día. Y olvídese de la vieja idea de restringir proteínas de forma agresiva; eso hoy se considera más perjudicial que beneficioso para estos pacientes, que ya suelen estar en riesgo de sarcopenia y malnutrición.",
    keyPoints: [
      "Encefalopatía hepática: buscar activamente el factor precipitante (infección, hemorragia digestiva, estreñimiento, alteraciones electrolíticas/diuréticos, sedantes).",
      "Tratamiento de primera línea: lactulosa (oral/SNG/enema), ajustada para lograr 2-3 deposiciones blandas al día.",
      "La restricción proteica estricta y prolongada ya no se recomienda de rutina; puede empeorar la malnutrición del cirrótico.",
    ],
  },
  {
    id: "mir-2026-55",
    university: "MIR (España)",
    examArea: "ENDOCRINOLOGÍA",
    topic: "HIPOGLUCEMIA SEVERA EN EL PACIENTE DIABÉTICO",
    difficulty: "medium",
    tags: ["mir", "espana", "endocrinologia"],
    statement:
      "Un varón de 68 años, diabético tipo 2 en tratamiento con insulina, es encontrado por su familia inconsciente en su domicilio. La glucemia capilar es de 32 mg/dL. No hay acceso venoso disponible de inmediato. ¿Cuál es la actuación más apropiada?",
    options: [
      { id: "A", label: "A", text: "Administrar glucagón por vía intramuscular (o subcutánea) de inmediato, dado que el paciente está inconsciente y no hay acceso venoso disponible en ese momento; una vez consciente o al conseguir acceso venoso, administrar glucosa por vía oral o intravenosa para consolidar la recuperación y prevenir la recurrencia." },
      { id: "B", label: "B", text: "Administrar carbohidratos de absorción rápida por vía oral de inmediato (zumo o agua con azúcar), dado que es la opción más rápida disponible en el domicilio, independientemente del nivel de conciencia del paciente, y repetir la toma cada 15 minutos hasta que se despierte y pueda comer algo más consistente." },
      { id: "C", label: "C", text: "Esperar a que el paciente recupere la conciencia de forma espontánea antes de intervenir, colocándolo en posición lateral de seguridad, dado que la mayoría de las hipoglucemias se resuelven sin tratamiento en pacientes previamente sanos gracias a la respuesta contrarreguladora endógena. Avisar al médico si tarda más de una hora." },
      { id: "D", label: "D", text: "Administrar una dosis adicional de insulina para las próximas horas, dado que el paciente es diabético y podría tener una hiperglucemia de rebote posteriormente, y avisar a los servicios de emergencia si no despierta." },
    ],
    correctOptionId: "A",
    explanation:
      "Ante una **hipoglucemia severa** con **disminución del nivel de conciencia** (glucemia de 32 mg/dL, paciente inconsciente), la vía oral está **contraindicada** por el riesgo de broncoaspiración (el paciente no puede proteger su vía aérea de forma segura). Sin acceso venoso disponible de inmediato, la actuación correcta es la administración de **glucagón intramuscular o subcutáneo**, que moviliza las reservas hepáticas de glucógeno y eleva la glucemia en pocos minutos; posteriormente, una vez el paciente recupera la conciencia (o en cuanto se consiga acceso venoso), se administra **glucosa** (oral si ya puede tragar de forma segura, o intravenosa) para consolidar la recuperación glucémica y prevenir la recurrencia, ya que el efecto del glucagón es transitorio y depende de que existan reservas hepáticas de glucógeno adecuadas.\n\n**TRAMPA DEL EXAMEN:** Administrar carbohidratos orales a un paciente inconsciente es un error potencialmente grave por el riesgo de aspiración pulmonar; en un paciente con nivel de conciencia disminuido, la vía oral no es segura hasta que recupere la capacidad de proteger su vía aérea. Esperar sin intervenir puede prolongar peligrosamente la hipoglucemia, con riesgo de daño neurológico si se mantiene severa y prolongada. Administrar insulina en este contexto sería contraproducente y peligroso, ya que empeoraría directamente la hipoglucemia que se busca corregir.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la regla de oro ante una hipoglucemia con disminución del nivel de conciencia es: nada por boca hasta que el paciente pueda protegerse la vía aérea de forma segura. Con este paciente inconsciente y sin vía venosa a mano, su herramienta es el glucagón intramuscular (o subcutáneo), que cualquier familiar entrenado puede administrar incluso en el domicilio, y que empieza a elevar la glucemia en cuestión de minutos al movilizar el glucógeno hepático. Una vez que el paciente se despierte y pueda tragar con seguridad, dele carbohidratos de absorción rápida por vía oral para mantener la glucemia y prevenir que vuelva a caer; si en cambio consigue una vía venosa antes de que despierte, la glucosa intravenosa es igual de válida y más rápida. Lo que nunca debe hacer es intentar meterle azúcar por la boca a un paciente inconsciente, ni mucho menos pensar en darle insulina, que sería literalmente lo opuesto a lo que este paciente necesita en este momento.",
    keyPoints: [
      "Hipoglucemia severa con disminución del nivel de conciencia: vía oral contraindicada (riesgo de aspiración); usar glucagón IM/SC si no hay acceso venoso.",
      "Una vez recuperada la conciencia o con acceso venoso disponible: glucosa oral o IV para consolidar la recuperación y prevenir recurrencia.",
      "El efecto del glucagón es transitorio; siempre debe seguirse de aporte de glucosa una vez sea seguro administrarla.",
    ],
  },
  {
    id: "mir-2026-56",
    university: "MIR (España)",
    examArea: "ENFERMEDADES INFECCIOSAS / NEUMOLOGÍA",
    topic: "TUBERCULOSIS PULMONAR",
    difficulty: "medium",
    tags: ["mir", "espana", "infecciosas"],
    statement:
      "Un varón de 45 años, inmigrante reciente, acude por tos de 4 semanas de evolución, febrícula vespertina, sudoración nocturna y pérdida de peso. La radiografía de tórax muestra un infiltrado cavitado en el lóbulo superior derecho. ¿Cuál es la actuación inicial más apropiada?",
    options: [
      { id: "A", label: "A", text: "Aislamiento respiratorio (precauciones de transmisión aérea) mientras se completa el estudio, obtención de baciloscopias seriadas de esputo (tinción de Ziehl-Neelsen) y cultivo de micobacterias, iniciando tratamiento antituberculoso con la combinación estándar (isoniazida, rifampicina, pirazinamida y etambutol) ante alta sospecha clínico-radiológica, sin esperar necesariamente el resultado del cultivo." },
      { id: "B", label: "B", text: "Manejo ambulatorio sin aislamiento respiratorio, con cita en consulta de neumología para completar el estudio, dado que la tuberculosis pulmonar no se transmite por vía respiratoria durante la fase de estudio diagnóstico y el aislamiento está indicado una vez confirmado el cultivo, iniciando mientras tanto un antibiótico de amplio espectro por si se trata de una neumonía bacteriana cavitada por anaerobios." },
      { id: "C", label: "C", text: "Esperar el resultado del cultivo de micobacterias (que puede tardar varias semanas) antes de iniciar el tratamiento antituberculoso, aunque la sospecha clínica y radiológica sea alta, ya que tratar sin confirmación microbiológica expone al paciente a una hepatotoxicidad innecesaria y favorece la aparición de resistencias a los fármacos de primera línea, en particular a la isoniazida y a la rifampicina." },
      { id: "D", label: "D", text: "Iniciar tratamiento con un fármaco antituberculoso (isoniazida en monoterapia) para minimizar los efectos adversos hepáticos, añadiendo otros fármacos si no hay respuesta clínica inicial en las primeras semanas o si el cultivo confirma resistencias, y mantener al paciente en su domicilio sin medidas de aislamiento respiratorio mientras tanto, ya que el tratamiento reduce el contagio en pocos días." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro (tos prolongada, febrícula vespertina, sudoración nocturna, pérdida de peso, infiltrado cavitado en lóbulo superior) es altamente sugestivo de **tuberculosis pulmonar**. Ante esta sospecha, se debe iniciar **aislamiento respiratorio (precauciones de transmisión aérea)** de inmediato, dado el riesgo de contagio por microgotas (aerosoles) mientras se completa el estudio diagnóstico. Se obtienen **baciloscopias seriadas de esputo** (tinción de Ziehl-Neelsen, habitualmente 2-3 muestras) y **cultivo de micobacterias** (patrón de referencia, aunque de crecimiento lento, semanas). Ante una **alta sospecha clínico-radiológica**, se inicia el **tratamiento antituberculoso estándar** (combinación de 4 fármacos: isoniazida, rifampicina, pirazinamida y etambutol, en la fase inicial) sin esperar necesariamente la confirmación del cultivo, que tarda semanas, ajustando después según los resultados microbiológicos y el antibiograma.\n\n**TRAMPA DEL EXAMEN:** No aislar al paciente durante el estudio diagnóstico expone a otras personas (personal sanitario, otros pacientes, convivientes) a un riesgo real de contagio; la tuberculosis pulmonar activa, especialmente con baciloscopia positiva, es altamente transmisible por vía aérea. La **monoterapia** es un error grave que favorece rápidamente el desarrollo de resistencias; el tratamiento inicial de la tuberculosis siempre es con una **combinación de varios fármacos**, precisamente para prevenir la selección de cepas resistentes.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ante esta combinación clásica —tos crónica, sudoración nocturna, pérdida de peso, febrícula vespertina y una cavitación en el lóbulo superior en la radiografía—, la tuberculosis pulmonar tiene que estar en el primer lugar de su lista de sospechas, y eso implica acción inmediata en dos frentes: proteger a los demás (aislamiento respiratorio, precauciones de transmisión aérea) y empezar a estudiar al paciente (baciloscopias seriadas y cultivo). No espere las semanas que tarda el cultivo para empezar el tratamiento si la sospecha clínica y radiológica es alta; eso solo prolonga el periodo de contagiosidad del paciente y retrasa su recuperación. Y recuerde siempre: el tratamiento inicial de la tuberculosis es SIEMPRE con varios fármacos combinados (la clásica combinación de cuatro), nunca con uno solo; la monoterapia en tuberculosis es una receta directa para crear resistencias, uno de los problemas más serios en el manejo de esta enfermedad a nivel mundial.",
    keyPoints: [
      "Sospecha de TB pulmonar: aislamiento respiratorio (transmisión aérea) inmediato + baciloscopias seriadas + cultivo de micobacterias.",
      "Iniciar tratamiento antituberculoso combinado (isoniazida, rifampicina, pirazinamida, etambutol) ante alta sospecha clínico-radiológica, sin esperar el cultivo.",
      "Nunca tratar la tuberculosis con monoterapia: favorece rápidamente el desarrollo de resistencias.",
    ],
  },
  {
    id: "mir-2026-57",
    university: "MIR (España)",
    examArea: "NEUROLOGÍA",
    topic: "SÍNDROME DE GUILLAIN-BARRÉ",
    difficulty: "hard",
    tags: ["mir", "espana", "neurologia"],
    statement:
      "Un varón de 38 años, tras un cuadro gastrointestinal 2 semanas antes, presenta debilidad simétrica y ascendente en miembros inferiores que progresa en 48 horas hacia los miembros superiores, con arreflexia generalizada y parestesias distales, sin alteración del nivel de conciencia. ¿Cuál es la actuación más apropiada?",
    options: [
      { id: "A", label: "A", text: "Ingreso hospitalario con monitorización estrecha de la función respiratoria (capacidad vital forzada seriada) por el riesgo de insuficiencia respiratoria progresiva, y tratamiento con inmunoglobulinas intravenosas o plasmaféresis, dado el cuadro compatible con síndrome de Guillain-Barré." },
      { id: "B", label: "B", text: "Iniciar corticoides sistémicos en monoterapia (metilprednisolona en pulsos intravenosos durante 5 días) como tratamiento de elección, dado que es el tratamiento estándar de las polineuropatías desmielinizantes agudas de origen inmune y acorta el tiempo de recuperación." },
      { id: "C", label: "C", text: "Manejo ambulatorio con fisioterapia motora y control en consulta de neurología en 2-3 semanas, dado que el síndrome de Guillain-Barré tiene un curso leve y autolimitado, sin riesgo vital ni afectación de la musculatura respiratoria." },
      { id: "D", label: "D", text: "Iniciar tratamiento antibiótico empírico dirigido al Campylobacter de la gastroenteritis previa como tratamiento principal del cuadro neurológico, dado que eliminar el germen desencadenante detiene la reacción inmune cruzada contra los nervios periféricos." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con **síndrome de Guillain-Barré**: debilidad **simétrica y ascendente**, de instauración subaguda, con **arreflexia**, a menudo precedida (1-3 semanas antes) por una infección (típicamente gastrointestinal, con *Campylobacter jejuni* como desencadenante clásico, o respiratoria). Es una urgencia neurológica por el riesgo de **progresión a insuficiencia respiratoria** (por afectación de la musculatura respiratoria), por lo que requiere **ingreso hospitalario** con **monitorización seriada de la capacidad vital forzada** (y de la función bulbar/deglución), para anticipar la necesidad de soporte ventilatorio antes de que se instaure una insuficiencia respiratoria franca. El tratamiento específico son las **inmunoglobulinas intravenosas** o la **plasmaféresis** (ambas con eficacia similar), que aceleran la recuperación.\n\n**TRAMPA DEL EXAMEN:** Los **corticoides sistémicos en monoterapia** son un error clásico de esta pregunta: a diferencia de otras neuropatías autoinmunes, los corticoides **no han demostrado beneficio** en el síndrome de Guillain-Barré y no forman parte del tratamiento estándar. Subestimar la gravedad potencial del cuadro (\"siempre es leve y autolimitado\") ignora el riesgo real de insuficiencia respiratoria que puede requerir ventilación mecánica, e incluso de disautonomía con riesgo de arritmias potencialmente graves.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ante una debilidad ascendente y simétrica con arreflexia, tras un cuadro infeccioso reciente, el síndrome de Guillain-Barré tiene que estar en su radar de inmediato, y su primera preocupación no es tanto \"qué fármaco doy\" sino \"¿va a poder este paciente seguir respirando en las próximas horas?\". Ingréselo, mida la capacidad vital forzada de forma seriada (no espere a que el paciente ya esté en dificultad respiratoria franca para preocuparse), y tenga anticipado el escalón de soporte ventilatorio si la función respiratoria se deteriora. Sobre el tratamiento: inmunoglobulinas intravenosas o plasmaféresis son sus opciones, con eficacia similar entre ellas; y por favor, no caiga en la trampa de pensar que los corticoides ayudan aquí como en otras enfermedades autoinmunes neurológicas, porque en el Guillain-Barré específicamente no han mostrado beneficio y no son el tratamiento indicado.",
    keyPoints: [
      "Síndrome de Guillain-Barré: debilidad ascendente simétrica + arreflexia, típicamente post-infecciosa (Campylobacter jejuni clásico).",
      "Ingreso con monitorización seriada de capacidad vital forzada por riesgo de insuficiencia respiratoria progresiva.",
      "Tratamiento: inmunoglobulinas intravenosas o plasmaféresis; los corticoides NO son eficaces en esta entidad.",
    ],
  },
  {
    id: "mir-2026-58",
    university: "MIR (España)",
    examArea: "UROLOGÍA",
    topic: "CÓLICO RENAL",
    difficulty: "medium",
    tags: ["mir", "espana", "urologia"],
    statement:
      "Un varón de 42 años acude por dolor lumbar derecho intenso, súbito, de tipo cólico, irradiado a fosa ilíaca y genitales, con náuseas asociadas, sin fiebre. El sedimento urinario muestra microhematuria. ¿Cuál es el manejo analgésico de primera línea y qué hallazgo obligaría a una actuación urgente adicional?",
    options: [
      { id: "A", label: "A", text: "Antiinflamatorios no esteroideos como analgesia de primera línea (con opioides como alternativa si están contraindicados o son insuficientes); la presencia de fiebre o signos de infección asociados a la obstrucción (pionefrosis/urosepsis obstructiva) constituiría una urgencia urológica que requeriría drenaje urgente de la vía urinaria, independientemente del tamaño del cálculo." },
      { id: "B", label: "B", text: "Antibioterapia empírica de amplio espectro por vía intravenosa como primera medida en todo cólico renal, independientemente de la presencia de fiebre, ya que la obstrucción ureteral favorece la infección de la orina retenida y la analgesia con antiinflamatorios puede enmascarar una pielonefritis incipiente en estos pacientes, en especial si el cálculo mide más de 5 mm." },
      { id: "C", label: "C", text: "Cirugía abierta urgente (ureterolitotomía) como tratamiento de primera línea para la litiasis renal sintomática, sin ensayar manejo médico previo, dado que el dolor cólico indica un cálculo impactado que no se expulsará de forma espontánea y que acabará dañando la función del riñón afectado si no se extrae en las primeras 24-48 horas del ingreso." },
      { id: "D", label: "D", text: "Restricción hídrica estricta como medida principal, dado que reduce el flujo urinario y, por tanto, el dolor asociado al paso del cálculo por el uréter, asociada a reposo en cama hasta la expulsión del cálculo y a antibioterapia profiláctica oral para evitar la infección de la orina retenida." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con un **cólico renal** (probable litiasis ureteral), y el manejo analgésico de **primera línea** son los **antiinflamatorios no esteroideos** (AINE), que son al menos igual de eficaces que los opioides para el dolor del cólico renal y con mejor perfil de efectos adversos en este contexto (además de un posible efecto beneficioso al reducir el edema ureteral); los opioides se reservan como alternativa si los AINE están contraindicados o son insuficientes. Un dato crítico que cambia radicalmente el manejo es la presencia de **fiebre** u otros signos de infección en el contexto de una **obstrucción urinaria** (litiasis obstructiva con pionefrosis o urosepsis de origen obstructivo): esta combinación constituye una **urgencia urológica** que requiere **drenaje urgente de la vía urinaria** (mediante catéter doble J o nefrostomía percutánea), independientemente del tamaño del cálculo, ya que el riñón obstruido e infectado no puede eliminar la infección de forma efectiva sin drenaje, con alto riesgo de sepsis grave.\n\n**TRAMPA DEL EXAMEN:** Indicar antibioterapia como manejo principal de un cólico renal no complicado (sin fiebre, como en este caso) no es el problema central del manejo inicial, que es analgésico; pero, sobre todo, el error más grave y peligroso es **no reconocer** la combinación de fiebre + obstrucción como una urgencia que requiere drenaje urgente, tratando solo con antibióticos sin resolver la obstrucción, lo que puede llevar a un deterioro séptico grave. La cirugía abierta urgente no es el manejo de primera línea de la mayoría de las litiasis sintomáticas, que suelen manejarse médicamente o con procedimientos mínimamente invasivos (litotricia, ureteroscopia) según el tamaño y la localización.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., para el cólico renal simple, sin fiebre, su primera línea de analgesia son los antiinflamatorios no esteroideos; funcionan muy bien para este tipo de dolor visceral y evitan los efectos adversos de los opioides. Pero hay un dato que, si aparece, cambia todo el enfoque: la fiebre. Un riñón obstruido por un cálculo y además infectado es una combinación peligrosa, porque los antibióticos solos no van a limpiar esa infección mientras la orina no pueda drenar; usted necesita destaponar esa vía urinaria de urgencia, con un catéter doble J o una nefrostomía percutánea, sin importar si el cálculo es grande o pequeño. No se conforme con \"darle antibiótico y ya\" en ese escenario; el riesgo de que ese paciente se deteriore hacia una sepsis grave es real y el reloj corre en su contra.",
    keyPoints: [
      "Cólico renal: AINE como analgesia de primera línea (opioides como alternativa); eficacia igual o superior a opioides con menos efectos adversos.",
      "Fiebre + obstrucción urinaria (litiasis obstructiva infectada): urgencia urológica, requiere drenaje urgente de la vía urinaria (catéter doble J/nefrostomía), no solo antibiótico.",
      "La cirugía abierta no es primera línea; la mayoría de litiasis sintomáticas se manejan médicamente o con técnicas mínimamente invasivas según tamaño/localización.",
    ],
  },
  {
    id: "mir-2026-59",
    university: "MIR (España)",
    examArea: "ONCOLOGÍA",
    topic: "COMPRESIÓN MEDULAR METASTÁSICA",
    difficulty: "hard",
    tags: ["mir", "espana", "oncologia"],
    statement:
      "Una mujer de 58 años, con cáncer de mama metastásico conocido, presenta dolor dorsal intenso de 2 semanas de evolución, que en las últimas 24 horas se ha acompañado de debilidad progresiva en ambas piernas y dificultad para iniciar la micción. ¿Cuál es la actuación más apropiada?",
    options: [
      { id: "A", label: "A", text: "Iniciar corticoides sistémicos a dosis altas (dexametasona) de inmediato, ante la alta sospecha clínica, sin esperar la confirmación por resonancia magnética, y solicitar resonancia magnética urgente de toda la columna para confirmar el nivel y planificar el tratamiento definitivo (radioterapia y/o cirugía descompresiva)." },
      { id: "B", label: "B", text: "Solicitar una resonancia magnética de columna de forma programada en las próximas 1-2 semanas, sin necesidad de tratamiento inmediato, dado que los síntomas llevan solo 24 horas de evolución y en la mayoría de los casos el dolor dorsal oncológico mejora con analgesia, reservando la imagen urgente para cuando exista incontinencia de esfínteres o paraplejia completa." },
      { id: "C", label: "C", text: "Manejo con analgesia opioide y reposo, sin necesidad de estudios de imagen ni de corticoides, dado que el dolor dorsal es un síntoma esperable en la enfermedad oncológica avanzada y la debilidad de las piernas se explica por la inmovilidad y la pérdida de masa muscular asociadas a la quimioterapia y a la caquexia." },
      { id: "D", label: "D", text: "Realizar una punción lumbar como primer paso diagnóstico para evaluar la causa de la debilidad progresiva en las piernas y descartar una carcinomatosis meníngea." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro (dolor dorsal progresivo en paciente oncológica, con debilidad bilateral de instauración rápida y disfunción vesical) es altamente sugestivo de **compresión medular metastásica**, una **urgencia oncológica** en la que el retraso diagnóstico y terapéutico puede traducirse en **daño neurológico irreversible** (paraplejía, disfunción esfinteriana permanente). Ante alta sospecha clínica, se debe iniciar **dexametasona a dosis altas de inmediato**, sin esperar la confirmación radiológica (que puede demorar horas), ya que reduce el edema medular y puede mejorar temporalmente la función neurológica mientras se organiza el tratamiento definitivo. En paralelo, se solicita **resonancia magnética urgente de toda la columna** (no solo del nivel clínicamente sospechado, ya que puede haber múltiples niveles afectados) para confirmar el diagnóstico y planificar el tratamiento definitivo (radioterapia urgente y/o cirugía descompresiva, según el caso).\n\n**TRAMPA DEL EXAMEN:** Diferir el estudio y el tratamiento pensando que \"solo son 24 horas de evolución\" ignora que la compresión medular es una urgencia tiempo-dependiente: cuanto más tiempo pase el paciente con déficit neurológico progresivo sin tratamiento, menor la probabilidad de recuperación funcional. Atribuir los síntomas únicamente al dolor oncológico esperable, sin investigar la causa de la nueva debilidad y disfunción vesical, retrasa peligrosamente el diagnóstico de una complicación grave y potencialmente reversible si se trata a tiempo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en una paciente oncológica con dolor dorsal que empieza a acompañarse de debilidad en las piernas y problemas para orinar, usted no tiene el lujo de esperar el estudio de imagen para actuar: la compresión medular metastásica es de esas urgencias donde cada hora de retraso puede significar la diferencia entre que esta paciente vuelva a caminar o quede parapléjica de forma permanente. Dexametasona a dosis altas, ya, ante la sola sospecha clínica; no espere la resonancia magnética para empezar el tratamiento que puede frenar el daño neurológico. Y cuando pida la resonancia, pídala de toda la columna, no solo del nivel dorsal donde le duele, porque en la enfermedad metastásica es frecuente que haya más de un nivel comprometido, y eso cambia la planificación del tratamiento definitivo, ya sea radioterapia urgente o cirugía descompresiva según el caso.",
    keyPoints: [
      "Compresión medular metastásica: urgencia oncológica; dolor dorsal + debilidad progresiva + disfunción vesical en paciente con cáncer conocido.",
      "Iniciar dexametasona a dosis altas de inmediato ante la sospecha clínica, sin esperar la confirmación por resonancia magnética.",
      "Resonancia magnética urgente de TODA la columna (no solo el nivel sospechado); tratamiento definitivo: radioterapia y/o cirugía descompresiva.",
    ],
  },
  {
    id: "mir-2026-60",
    university: "MIR (España)",
    examArea: "MEDICINA INTENSIVA",
    topic: "PARADA CARDIORRESPIRATORIA - RITMO DESFIBRILABLE",
    difficulty: "hard",
    tags: ["mir", "espana", "medicina-intensiva"],
    statement:
      "Un varón de 60 años sufre una pérdida de conciencia súbita en la calle. Un testigo inicia reanimación cardiopulmonar básica. A la llegada del equipo de emergencias, el monitor muestra fibrilación ventricular. ¿Cuál es la secuencia de actuación inmediata más apropiada?",
    options: [
      { id: "A", label: "A", text: "Desfibrilación inmediata (choque no sincronizado), reanudando las compresiones torácicas de alta calidad inmediatamente después del choque sin pausar para comprobar el ritmo o el pulso, continuando el ciclo de RCP y reevaluando el ritmo cada 2 minutos; administrar adrenalina tras el segundo choque ineficaz y considerar amiodarona tras el tercero si persiste la fibrilación ventricular." },
      { id: "B", label: "B", text: "Administrar adrenalina intravenosa (1 mg) como primera medida, antes de cualquier intento de desfibrilación, dado que revertir la fibrilación ventricular depende principalmente del soporte farmacológico, y repetirla cada 3-5 minutos mientras se prepara el desfibrilador, añadiendo amiodarona si tras la segunda dosis de adrenalina persiste la arritmia en el monitor del desfibrilador." },
      { id: "C", label: "C", text: "Realizar una cardioversión eléctrica sincronizada con la onda R, dado que es el procedimiento correcto para las arritmias ventriculares, incluida la fibrilación ventricular, ya que la sincronización evita descargar en el periodo vulnerable de la onda T y reduce el riesgo de degenerar en asistolia; mientras tanto, mantener la ventilación con bolsa y mascarilla." },
      { id: "D", label: "D", text: "Suspender las compresiones torácicas de forma prolongada tras cada choque para verificar minuciosamente el ritmo en el monitor y palpar el pulso carotídeo durante al menos 30 segundos antes de reanudarlas, ya que comprimir un corazón que ha recuperado el ritmo tras la descarga puede provocar una nueva fibrilación ventricular y lesionar el miocardio recuperado." },
    ],
    correctOptionId: "A",
    explanation:
      "Ante una **parada cardiorrespiratoria con ritmo desfibrilable** (fibrilación ventricular o taquicardia ventricular sin pulso), la prioridad absoluta es la **desfibrilación inmediata** (choque **no sincronizado**, ya que en la fibrilación ventricular no existe un complejo QRS organizado con el que sincronizar), seguida **inmediatamente** de la reanudación de las **compresiones torácicas de alta calidad**, sin pausar para comprobar el ritmo o el pulso justo después del choque (esa comprobación se hace tras completar el ciclo de 2 minutos de RCP). Si la fibrilación ventricular persiste tras el segundo choque, se administra **adrenalina** intravenosa (y se repite cada 3-5 minutos); si persiste tras el tercer choque, se añade **amiodarona** como antiarrítmico. El ciclo de RCP de alta calidad con mínimas interrupciones es el pilar fundamental que sostiene la perfusión de órganos vitales mientras se intenta revertir el ritmo.\n\n**TRAMPA DEL EXAMEN:** La **cardioversión sincronizada** es incorrecta en la fibrilación ventricular: al no existir un QRS organizado, un choque sincronizado no podría administrarse de forma efectiva (el desfibrilador no encontraría el punto de sincronización), por lo que el choque en FV/TVSP siempre es **no sincronizado**. Priorizar la adrenalina sobre la desfibrilación inmediata, o hacer pausas prolongadas en las compresiones torácicas para verificar el ritmo tras cada choque, reduce la eficacia de la reanimación: las interrupciones de las compresiones comprometen la perfusión coronaria y cerebral que se ha logrado generar.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en fibrilación ventricular su primera y más importante herramienta es el desfibrilador, no un fármaco: descargue el choque no sincronizado tan pronto como el ritmo esté confirmado, y reanude las compresiones torácicas de inmediato después, sin perder tiempo comprobando pulso o ritmo justo tras el choque; esa comprobación espera al final del siguiente ciclo de 2 minutos. La adrenalina entra en juego después del segundo choque ineficaz, y la amiodarona después del tercero si la fibrilación persiste, pero nunca sustituyen a la desfibrilación como primera línea. Y un detalle que el examen ama preguntar: nunca use cardioversión sincronizada en fibrilación ventricular; sin un QRS organizado, el aparato no tiene con qué sincronizar, así que el choque siempre es no sincronizado en este ritmo. Minimice las interrupciones de las compresiones torácicas como si fueran oro; cada pausa prolongada le hace perder la perfusión que tanto esfuerzo le costó generar.",
    keyPoints: [
      "Ritmo desfibrilable (FV/TVSP): desfibrilación inmediata (choque NO sincronizado) + reanudar compresiones de inmediato tras el choque, sin pausas para comprobar ritmo/pulso.",
      "Adrenalina tras el segundo choque ineficaz (y cada 3-5 min); amiodarona tras el tercer choque si persiste la FV/TVSP.",
      "La cardioversión sincronizada NO se usa en fibrilación ventricular (no hay QRS organizado); minimizar interrupciones de las compresiones torácicas.",
    ],
  },
];
