import type { TrainingQuestion } from "@/lib/questions/types";

export const MIR_2026_01_10_QUESTIONS: TrainingQuestion[] = [
  {
    id: "mir-2026-01",
    university: "MIR (España)",
    examArea: "CARDIOLOGÍA",
    topic: "SÍNDROME CORONARIO AGUDO CON ELEVACIÓN DEL ST",
    difficulty: "hard",
    tags: ["mir", "espana", "cardiologia"],
    statement:
      "Un varón de 58 años acude a Urgencias por dolor torácico opresivo de 90 minutos de evolución, irradiado a brazo izquierdo, con cortejo vegetativo. El ECG muestra elevación del segmento ST >2 mm en V2-V4. El hospital dispone de sala de hemodinámica propia, con tiempo estimado hasta el inflado del balón de 60 minutos desde el primer contacto médico. ¿Cuál es la conducta de reperfusión más apropiada?",
    options: [
      { id: "A", label: "A", text: "Angioplastia primaria (ICP primaria), ya que el tiempo estimado hasta el balón es menor de 120 minutos desde el primer contacto médico." },
      { id: "B", label: "B", text: "Fibrinolisis intravenosa inmediata con tenecteplasa, reservando la angioplastia solo si la fibrinolisis fracasa." },
      { id: "C", label: "C", text: "Tratamiento médico conservador con doble antiagregación y anticoagulación, sin reperfusión mecánica ni farmacológica, hasta estabilización clínica." },
      { id: "D", label: "D", text: "Esperar a la determinación seriada de troponina antes de decidir cualquier estrategia de reperfusión." },
    ],
    correctOptionId: "A",
    explanation:
      "Este paciente presenta un **IAMCEST** (infarto agudo de miocardio con elevación del ST) de cara anterior. La estrategia de reperfusión de elección es la **angioplastia primaria (ICP primaria)** siempre que pueda realizarse dentro de los **120 minutos desde el primer contacto médico** (idealmente <90 minutos si el paciente ya está en un centro con hemodinámica, como es el caso). Con un tiempo estimado de 60 minutos, la ICP primaria es claramente superior a la fibrinolisis, tanto en permeabilidad de la arteria como en reducción de mortalidad, reinfarto y hemorragia intracraneal.\n\n**TRAMPA DEL EXAMEN:** El examen suele poner el dato del tiempo hasta el balón como la clave real de la pregunta. Si ese tiempo superara los 120 minutos (por ejemplo, un centro sin hemodinámica y traslado prolongado), la respuesta correcta cambiaría a fibrinolisis inmediata seguida de traslado para angioplastia de rescate o angiografía temprana. No existe una respuesta \"fija\"; depende del tiempo disponible, no de la preferencia del médico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en el IAMCEST el músculo cardíaco se muere minuto a minuto (\"tiempo es músculo\"), así que la pregunta clave no es \"¿fibrinolisis o angioplastia?\" en abstracto, sino \"¿en cuánto tiempo puedo abrir esa arteria mecánicamente?\". Si la respuesta es menos de 120 minutos desde el primer contacto médico, usted va directo a la sala de hemodinámica. Si el traslado o la disponibilidad hace que ese tiempo se dispare, no se quede esperando: dé fibrinolisis ya (idealmente en los primeros 30 minutos desde el diagnóstico) y organice el traslado para angiografía en las siguientes horas. Nunca espere la troponina para decidir reperfusión en un IAMCEST con ECG diagnóstico: el diagnóstico y la decisión de reperfundir son clínicos y electrocardiográficos, inmediatos, no de laboratorio.",
    keyPoints: [
      "IAMCEST: la angioplastia primaria es de elección si puede realizarse en <120 min desde el primer contacto médico.",
      "Si el tiempo hasta el balón supera los 120 minutos, la estrategia correcta es fibrinolisis inmediata + traslado para angiografía.",
      "La decisión de reperfundir es clínica y electrocardiográfica; no se espera la troponina para actuar en un IAMCEST.",
    ],
  },
  {
    id: "mir-2026-02",
    university: "MIR (España)",
    examArea: "NEUMOLOGÍA",
    topic: "AGUDIZACIÓN DE EPOC CON ACIDOSIS RESPIRATORIA",
    difficulty: "hard",
    tags: ["mir", "espana", "neumologia"],
    statement:
      "Una mujer de 68 años, con EPOC grave conocida, acude por disnea progresiva de 2 días. Presenta taquipnea a 32 rpm, uso de musculatura accesoria y somnolencia leve. Gasometría arterial: pH 7.28, PaCO2 68 mmHg, PaO2 54 mmHg con oxígeno suplementario. Tras optimizar broncodilatadores, corticoides sistémicos y antibiótico, la paciente persiste con acidosis respiratoria. ¿Cuál es el siguiente paso más apropiado?",
    options: [
      { id: "A", label: "A", text: "Iniciar ventilación mecánica no invasiva (VMNI) con presión positiva de dos niveles (BiPAP), salvo contraindicación." },
      { id: "B", label: "B", text: "Intubación orotraqueal y ventilación mecánica invasiva inmediata, sin ensayar VMNI, dado que ya hay acidosis respiratoria establecida." },
      { id: "C", label: "C", text: "Aumentar la fracción inspirada de oxígeno hasta normalizar la PaO2 por encima de 90 mmHg, sin otras medidas adicionales." },
      { id: "D", label: "D", text: "Administrar naloxona empírica, asumiendo que la somnolencia se debe a intoxicación por opioides." },
    ],
    correctOptionId: "A",
    explanation:
      "La agudización de EPOC con **acidosis respiratoria (pH <7.35 con hipercapnia)** que persiste pese al tratamiento médico óptimo tiene indicación de **ventilación mecánica no invasiva (VMNI)** como primera línea de soporte ventilatorio, siempre que la paciente esté consciente y colaboradora (la somnolencia leve no es, por sí sola, contraindicación; sí lo sería el bajo nivel de conciencia franco, la inestabilidad hemodinámica grave o la incapacidad de proteger la vía aérea). La VMNI reduce la necesidad de intubación, la mortalidad y la estancia hospitalaria en este contexto, siendo la intervención con mayor evidencia en agudización de EPOC con acidosis respiratoria.\n\n**TRAMPA DEL EXAMEN:** Dos errores típicos: primero, saltarse la VMNI e ir directo a intubación solo porque ya hay acidosis, cuando la VMNI es precisamente el tratamiento de elección en ese escenario y evita muchas intubaciones. Segundo, corregir la hipoxemia \"a toda costa\" con oxígeno a alto flujo, lo que en un EPOC retenedor de CO2 puede empeorar la hipercapnia (por supresión del estímulo hipóxico y efecto Haldane); el objetivo de saturación en EPOC agudizado es más conservador (aproximadamente 88-92%), no la normalización agresiva.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en el EPOC agudizado con acidosis respiratoria, la VMNI es su primera herramienta, no la última opción antes de intubar. Mientras la paciente esté consciente, colabore y no tenga contraindicaciones (vómitos incoercibles, inestabilidad hemodinámica, incapacidad de proteger la vía aérea, agitación extrema), pruebe BiPAP antes de pensar en el tubo endotraqueal. Y cuidado con el oxígeno: en estos pacientes no busque saturaciones de 98-100%, porque les puede apagar el único estímulo respiratorio que les queda y empeorar su CO2; apunte a una saturación más modesta, alrededor de 88-92%, y reevalúe con gasometría, no solo con el pulsioxímetro.",
    keyPoints: [
      "Agudización de EPOC con acidosis respiratoria persistente pese a tratamiento médico: indicación de VMNI (BiPAP) como primera línea.",
      "La somnolencia leve no contraindica la VMNI; sí lo hacen el bajo nivel de conciencia franco, la inestabilidad hemodinámica grave o la incapacidad de proteger la vía aérea.",
      "En EPOC, evitar la corrección agresiva de la hipoxemia con oxígeno a alto flujo; objetivo de saturación más conservador (~88-92%).",
    ],
  },
  {
    id: "mir-2026-03",
    university: "MIR (España)",
    examArea: "APARATO DIGESTIVO",
    topic: "HEMORRAGIA DIGESTIVA ALTA POR VARICES ESOFÁGICAS",
    difficulty: "hard",
    tags: ["mir", "espana", "digestivo"],
    statement:
      "Un varón de 54 años con cirrosis hepática enólica conocida acude por hematemesis franca de gran cuantía, con PA 84/56 mmHg y FC 122 lpm. Tras iniciar reanimación con cristaloides y transfusión de hemoderivados, ¿cuál es la actitud terapéutica farmacológica y endoscópica más apropiada mientras se organiza la endoscopia digestiva alta?",
    options: [
      { id: "A", label: "A", text: "Iniciar terlipresina (o somatostatina/octreótido) de forma precoz junto con antibioterapia profiláctica, y realizar endoscopia digestiva alta con ligadura endoscópica con bandas en las primeras 12 horas, una vez el paciente esté hemodinámicamente estabilizado." },
      { id: "B", label: "B", text: "Mantener la reanimación y esperar a la endoscopia digestiva alta programada en 48-72 horas sin iniciar fármacos vasoactivos ni antibióticos, ya que estos solo están indicados si la endoscopia confirma sangrado variceal activo y su uso previo podría enmascarar el origen de la hemorragia." },
      { id: "C", label: "C", text: "Colocar de entrada un balón de Sengstaken-Blakemore como primera medida terapéutica definitiva, ya que el taponamiento controla el sangrado en la mayoría de los casos, sin necesidad de fármacos vasoactivos ni de endoscopia posterior." },
      { id: "D", label: "D", text: "Administrar inhibidores de la bomba de protones en altas dosis por vía intravenosa como único tratamiento, dado que el mecanismo de sangrado es indistinguible de una úlcera péptica hasta la endoscopia y los vasoactivos no aportan beneficio." },
    ],
    correctOptionId: "A",
    explanation:
      "Ante la sospecha de **hemorragia digestiva alta variceal** en un paciente cirrótico, el manejo inicial —en paralelo a la reanimación hemodinámica— incluye el inicio **precoz de fármacos vasoactivos** (terlipresina, o alternativamente somatostatina/octreótido) que reducen la presión portal y el sangrado variceal, junto con **antibioterapia profiláctica** (habitualmente una cefalosporina de tercera generación o quinolona), que ha demostrado reducir la mortalidad, las infecciones bacterianas y el resangrado en cirróticos con hemorragia digestiva. La **endoscopia digestiva alta**, una vez el paciente está hemodinámicamente estabilizado, debe realizarse de forma precoz (dentro de las primeras 12 horas) para diagnóstico y tratamiento endoscópico, siendo la **ligadura endoscópica con bandas** la técnica de elección sobre la esclerosis en la mayoría de los casos.\n\n**TRAMPA DEL EXAMEN:** Esperar a la endoscopia sin iniciar fármacos vasoactivos es un error grave y frecuente en el examen: los vasoactivos se inician ante la sospecha clínica, sin esperar confirmación endoscópica, porque reducen el sangrado y facilitan la endoscopia posterior. El balón de Sengstaken-Blakemore es solo una medida de rescate transitoria (\"puente\") ante hemorragia masiva no controlada con las medidas anteriores, nunca el tratamiento inicial ni definitivo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en un cirrótico con hematemesis, actúe en paralelo, no en secuencia: mientras reanima con volumen y hemoderivados, ya debería tener puesta la terlipresina (o somatostatina) y el antibiótico, sin esperar a que el endoscopista confirme nada. Esas dos medidas farmacológicas son las que le dan margen de tiempo y mejoran el pronóstico mientras organiza la endoscopia. La endoscopia con ligadura de bandas es el tratamiento definitivo del sangrado variceal activo, pero llega después de estabilizar, no antes. Guarde el balón de Sengstaken-Blakemore para el escenario de sangrado masivo incontrolable como puente a un tratamiento más definitivo (TIPS o reendoscopia), no como primera línea.",
    keyPoints: [
      "Hemorragia digestiva alta variceal: iniciar terlipresina (o somatostatina/octreótido) y antibioterapia profiláctica de forma precoz, ante la sospecha clínica, sin esperar la endoscopia.",
      "Endoscopia digestiva alta con ligadura con bandas dentro de las primeras 12 horas, una vez estabilizado el paciente.",
      "El balón de Sengstaken-Blakemore es una medida de rescate transitoria ante hemorragia masiva no controlada, no el tratamiento inicial.",
    ],
  },
  {
    id: "mir-2026-04",
    university: "MIR (España)",
    examArea: "ENDOCRINOLOGÍA",
    topic: "CETOACIDOSIS DIABÉTICA",
    difficulty: "hard",
    tags: ["mir", "espana", "endocrinologia"],
    statement:
      "Una mujer de 24 años con diabetes mellitus tipo 1 acude por vómitos, dolor abdominal y poliuria de 2 días. Glucemia capilar 480 mg/dL, pH venoso 7.15, bicarbonato 9 mEq/L, cuerpos cetónicos positivos en orina. El potasio sérico inicial es de 3.2 mEq/L. ¿Cuál es la secuencia de manejo inicial más apropiada?",
    options: [
      { id: "A", label: "A", text: "Iniciar sueroterapia con suero salino isotónico y reposición de potasio antes o junto con la insulina, retrasando la perfusión de insulina hasta que el potasio sérico sea mayor de 3.3 mEq/L." },
      { id: "B", label: "B", text: "Iniciar perfusión de insulina intravenosa con un bolo inicial alto seguido de infusión continua, sin reponer potasio hasta que este descienda por debajo de 3.0 mEq/L, para evitar una hiperpotasemia yatrógena." },
      { id: "C", label: "C", text: "Administrar bicarbonato sódico intravenoso de entrada para corregir rápidamente la acidosis metabólica, independientemente del pH, ya que la acidemia grave es lo que más compromete la contractilidad cardíaca." },
      { id: "D", label: "D", text: "Iniciar insulina subcutánea de acción rápida cada 4 horas desde el ingreso, evitando la vía intravenosa por el mayor riesgo de hipoglucemia y de hipopotasemia." },
    ],
    correctOptionId: "A",
    explanation:
      "En la **cetoacidosis diabética (CAD)**, el manejo inicial es: **fluidoterapia** con suero salino isotónico para corregir la depleción de volumen, y una atención prioritaria al **potasio**. La insulina intravenosa (que es el tratamiento de elección, no la subcutánea) desplaza el potasio hacia el espacio intracelular y puede precipitar una **hipopotasemia grave y arritmias potencialmente letales** si el potasio sérico ya está bajo-normal o bajo (como en este caso, 3.2 mEq/L) antes de iniciar la insulina. Por ello, si el potasio es menor de 3.3 mEq/L, se debe **reponer potasio primero** (o de forma simultánea con la fluidoterapia) y **retrasar la insulina** hasta alcanzar un potasio mínimo seguro (generalmente >3.3 mEq/L), reevaluando de forma seriada.\n\n**TRAMPA DEL EXAMEN:** El error clásico es \"lanzarse\" directo a la insulina por la hiperglucemia y la acidosis evidentes, ignorando el potasio inicial; esa secuencia puede provocar una hipopotasemia grave iatrogénica con riesgo de arritmia cardíaca mortal. El bicarbonato, salvo acidosis extrema (pH <6.9) o inestabilidad hemodinámica grave, no está indicado de rutina en la CAD, ya que puede empeorar la acidosis paradójica del sistema nervioso central y retrasar la resolución de la cetosis.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en la cetoacidosis diabética el orden de las medidas no es arbitrario, y el potasio es el que manda la secuencia: antes de poner una sola unidad de insulina intravenosa, mire el potasio sérico. Si está por debajo de 3.3, la insulina espera; primero reponga potasio (habitualmente con el propio suero, añadiendo cloruro potásico) porque la insulina va a meter aún más potasio dentro de la célula y puede dejar a la paciente con un potasio peligrosamente bajo justo cuando el corazón es más vulnerable. Solo cuando el potasio esté en un rango seguro, arranque la perfusión de insulina intravenosa continua (no subcutánea, no en bolos aislados) y vaya reevaluando glucemia, potasio y gasometría cada 1-2 horas hasta resolver la cetoacidosis.",
    keyPoints: [
      "Cetoacidosis diabética: si el potasio inicial es <3.3 mEq/L, reponer potasio antes o junto con la fluidoterapia, retrasando la insulina hasta alcanzar un nivel seguro.",
      "La insulina de elección en CAD es intravenosa en infusión continua, no subcutánea ni en bolos aislados.",
      "El bicarbonato no se usa de rutina en la CAD; se reserva para acidosis extrema (pH <6.9) o inestabilidad hemodinámica grave.",
    ],
  },
  {
    id: "mir-2026-05",
    university: "MIR (España)",
    examArea: "ENFERMEDADES INFECCIOSAS",
    topic: "MENINGITIS BACTERIANA AGUDA",
    difficulty: "hard",
    tags: ["mir", "espana", "infecciosas"],
    statement:
      "Un varón de 32 años acude a Urgencias con fiebre de 39.2°C, cefalea intensa, rigidez de nuca y fotofobia de 6 horas de evolución, sin focalidad neurológica ni signos de hipertensión intracraneal. ¿Cuál es la secuencia de manejo inicial más apropiada?",
    options: [
      { id: "A", label: "A", text: "Extraer hemocultivos, iniciar de inmediato antibioterapia empírica (cefalosporina de tercera generación) junto con dexametasona, y realizar la punción lumbar sin demorar el tratamiento más de lo estrictamente necesario." },
      { id: "B", label: "B", text: "Realizar tomografía computarizada craneal antes de cualquier punción lumbar o inicio de antibiótico en todos los casos, para descartar hipertensión intracraneal, y no administrar ningún tratamiento hasta disponer del resultado de la imagen." },
      { id: "C", label: "C", text: "Realizar punción lumbar de inmediato y esperar el resultado del cultivo del líquido cefalorraquídeo antes de iniciar la antibioterapia, para evitar negativizar el cultivo y poder ajustar el antibiótico al germen desde la primera dosis." },
      { id: "D", label: "D", text: "Iniciar antibioterapia empírica con cefalosporina de tercera generación sin dexametasona, ya que los corticoides están contraindicados en la meningitis bacteriana del adulto por reducir la penetración del antibiótico en el LCR." },
    ],
    correctOptionId: "A",
    explanation:
      "Ante la sospecha clínica de **meningitis bacteriana aguda**, el objetivo es no retrasar el inicio de la **antibioterapia empírica**, ya que el retraso se asocia directamente con mayor mortalidad y secuelas neurológicas. La secuencia recomendada es: extraer **hemocultivos**, iniciar **antibioterapia empírica** (típicamente cefalosporina de tercera generación, ajustada según edad y factores de riesgo) junto con **dexametasona** (que ha demostrado reducir la mortalidad y las secuelas neurológicas, especialmente en meningitis neumocócica, y debe administrarse idealmente junto con o inmediatamente antes de la primera dosis de antibiótico), y realizar la **punción lumbar** tan pronto como sea posible. La TC craneal previa a la punción lumbar **no es necesaria de rutina**; solo está indicada si existen datos de alarma (inmunodepresión, antecedente de enfermedad del sistema nervioso central, crisis comicial reciente, papiledema, alteración del nivel de conciencia o focalidad neurológica), y en esos casos no debe retrasar el inicio del antibiótico.\n\n**TRAMPA DEL EXAMEN:** El error más grave y frecuente es \"esperar\" —ya sea a la TC, a la punción lumbar, o al cultivo del LCR— antes de dar el antibiótico. Cualquier demora injustificada empeora el pronóstico. La otra trampa es asumir que los corticoides están contraindicados; en meningitis bacteriana del adulto, especialmente si se sospecha etiología neumocócica, la dexametasona junto al antibiótico es beneficiosa.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en la meningitis bacteriana el reloj corre en su contra desde el minuto uno: cada hora de retraso en el antibiótico se traduce en peor pronóstico neurológico y mayor mortalidad. Extraiga hemocultivos rápido, y si este paciente no tiene ningún dato de alarma (está alerta, sin focalidad, sin papiledema, sin antecedentes de inmunosupresión), no pierda tiempo pidiendo una TC craneal \"por si acaso\"; vaya directo a la punción lumbar. Pero óigame bien: si por lo que sea la punción lumbar o la TC se van a demorar, eso NO es excusa para posponer el antibiótico; primero el antibiótico (con la dexametasona junto a él), y la punción lumbar en cuanto pueda, aunque sea después. No sacrifique minutos de tratamiento por conseguir un cultivo \"limpio\".",
    keyPoints: [
      "Meningitis bacteriana aguda: no retrasar la antibioterapia empírica por la punción lumbar, el cultivo o la neuroimagen.",
      "La TC craneal previa a la punción lumbar solo está indicada ante datos de alarma (inmunodepresión, focalidad, crisis comicial reciente, papiledema, bajo nivel de conciencia).",
      "La dexametasona, administrada junto con o antes de la primera dosis de antibiótico, reduce mortalidad y secuelas, especialmente en meningitis neumocócica.",
    ],
  },
  {
    id: "mir-2026-06",
    university: "MIR (España)",
    examArea: "NEUROLOGÍA",
    topic: "ICTUS ISQUÉMICO AGUDO - VENTANA TERAPÉUTICA",
    difficulty: "hard",
    tags: ["mir", "espana", "neurologia"],
    statement:
      "Una mujer de 71 años es traída a Urgencias por hemiparesia derecha y afasia de inicio hace 2 horas, con última vez vista asintomática hace 2 horas y 15 minutos. La TC craneal sin contraste no muestra sangrado ni signos precoces extensos de isquemia. La presión arterial es 168/94 mmHg. No existen contraindicaciones conocidas para fibrinolisis. La angio-TC muestra oclusión de la arteria cerebral media izquierda en su segmento M1. ¿Cuál es el manejo más apropiado?",
    options: [
      { id: "A", label: "A", text: "Administrar alteplasa (o tenecteplasa) intravenosa dentro de la ventana de 4.5 horas y, en paralelo, activar de inmediato el código ictus para trombectomía mecánica, sin que una intervención deba retrasar a la otra." },
      { id: "B", label: "B", text: "Realizar únicamente trombectomía mecánica, evitando la fibrinolisis intravenosa por el riesgo de transformación hemorrágica en las oclusiones de gran vaso y por no aportar beneficio adicional." },
      { id: "C", label: "C", text: "Esperar a normalizar completamente la presión arterial por debajo de 120/80 mmHg con antihipertensivos intravenosos antes de iniciar cualquier tratamiento de reperfusión, por el riesgo de sangrado." },
      { id: "D", label: "D", text: "Diferir el tratamiento hasta confirmar el diagnóstico con resonancia magnética cerebral urgente, dado que la TC simple no mostró alteraciones que justifiquen reperfundir al paciente." },
    ],
    correctOptionId: "A",
    explanation:
      "Esta paciente presenta un **ictus isquémico agudo** con oclusión de gran vaso (ACM izquierda, M1) dentro de la ventana terapéutica. El manejo estándar es la **fibrinolisis intravenosa** (alteplasa o tenecteplasa) si está dentro de las 4.5 horas desde el inicio de los síntomas (o desde la última vez visto asintomático) y no existen contraindicaciones, **en combinación con trombectomía mecánica** cuando hay oclusión de gran vaso demostrada por angio-TC, ya que ambos tratamientos son complementarios y no excluyentes: la fibrinolisis no debe retrasar la trombectomía, ni viceversa. La presión arterial debe controlarse antes de la fibrinolisis solo hasta un umbral seguro (habitualmente <185/110 mmHg), no hasta la normalización completa, que no es necesaria ni es el objetivo.\n\n**TRAMPA DEL EXAMEN:** Una trampa frecuente es plantear fibrinolisis y trombectomía como estrategias excluyentes (\"o una o la otra\"); en oclusión de gran vaso dentro de ventana, ambas están indicadas y se ofrecen en combinación (\"bridging therapy\"), salvo contraindicación específica para alguna de ellas. Otra trampa es exigir un umbral de presión arterial demasiado estricto o esperar una resonancia magnética que no es necesaria cuando la TC simple ya descarta hemorragia y la clínica es compatible con ictus isquémico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ante un ictus isquémico con oclusión de gran vaso dentro de ventana, piense en \"y\", no en \"o\": fibrinolisis intravenosa Y trombectomía mecánica, cada una activada en paralelo, sin que la organización de una retrase a la otra. La TC simple sin sangrado ni isquemia extensa ya le da luz verde para la fibrinolisis; no necesita resonancia magnética para confirmar lo que la clínica y la TC ya le están diciendo. Sobre la presión arterial, controle solo lo necesario para no superar el umbral de seguridad (185/110 mmHg) antes de la fibrinolisis; no se obsesione con normalizarla del todo, porque bajarla en exceso puede comprometer la perfusión de la zona de penumbra isquémica que todavía es salvable.",
    keyPoints: [
      "Ictus isquémico con oclusión de gran vaso dentro de ventana: fibrinolisis intravenosa (hasta 4.5h) y trombectomía mecánica son complementarias, no excluyentes.",
      "El umbral de presión arterial antes de fibrinolisis es de seguridad (<185/110 mmHg), no normalización completa.",
      "La TC craneal simple sin sangrado es suficiente para decidir fibrinolisis; no se requiere resonancia magnética para iniciar el tratamiento.",
    ],
  },
  {
    id: "mir-2026-07",
    university: "MIR (España)",
    examArea: "NEFROLOGÍA",
    topic: "HIPERPOTASEMIA SEVERA CON CAMBIOS ELECTROCARDIOGRÁFICOS",
    difficulty: "hard",
    tags: ["mir", "espana", "nefrologia"],
    statement:
      "Un varón de 62 años con enfermedad renal crónica en hemodiálisis acude por debilidad muscular tras saltarse dos sesiones de diálisis. El potasio sérico es de 7.8 mEq/L y el ECG muestra ondas T picudas y ensanchamiento del complejo QRS. ¿Cuál es la primera medida terapéutica que debe administrarse?",
    options: [
      { id: "A", label: "A", text: "Gluconato cálcico intravenoso, como medida inmediata para estabilizar la membrana miocárdica, antes de iniciar las medidas que reducen el potasio sérico." },
      { id: "B", label: "B", text: "Resinas de intercambio catiónico por vía oral como primera medida, dado su inicio de acción rápido y su eficacia probada en la hiperpotasemia con cambios electrocardiográficos." },
      { id: "C", label: "C", text: "Furosemida intravenosa en dosis altas como única medida inicial, dado que el paciente es anúrico." },
      { id: "D", label: "D", text: "Diálisis urgente como primera medida, sin ninguna intervención farmacológica previa, dado que es un paciente ya en programa de hemodiálisis." },
    ],
    correctOptionId: "A",
    explanation:
      "Ante una **hiperpotasemia severa con cambios electrocardiográficos** (ondas T picudas, ensanchamiento del QRS), la prioridad absoluta es la **estabilización de la membrana miocárdica** con **gluconato cálcico intravenoso**, que no reduce el potasio sérico pero antagoniza sus efectos eléctricos, reduciendo el riesgo inminente de arritmias malignas y parada cardíaca. Su efecto es rápido (minutos) pero transitorio, por lo que debe seguirse sin demora de medidas que **desplacen el potasio hacia el interior celular** (insulina con glucosa, beta-agonistas nebulizados) y, finalmente, de medidas que **eliminen** el potasio del organismo (diálisis en este paciente con enfermedad renal crónica terminal, ya que las resinas y diuréticos tienen un papel limitado o nulo en un paciente anúrico en diálisis).\n\n**TRAMPA DEL EXAMEN:** Un error frecuente es iniciar directamente medidas que bajan el potasio (insulina-glucosa, resinas, diálisis) sin proteger primero la membrana cardíaca con calcio, dejando al paciente en riesgo de arritmia letal mientras esas medidas hacen efecto (que toma más tiempo). Otro error es indicar furosemida o resinas como primera línea en un paciente anúrico en hemodiálisis, donde estas medidas son ineficaces al no existir función renal residual útil ni tránsito intestinal como vía de eliminación relevante en la urgencia.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., memorice el orden como una secuencia de tres pasos que no se pueden invertir: primero PROTEGER el corazón (gluconato cálcico intravenoso, efecto en minutos, antagoniza la toxicidad eléctrica del potasio sin bajarlo); segundo, METER el potasio dentro de la célula (insulina con glucosa, salbutamol nebulizado, que ganan tiempo bajando el potasio sérico transitoriamente); y tercero, SACAR el potasio del cuerpo de forma definitiva, que en este paciente anúrico en diálisis solo se logra con hemodiálisis urgente. Si usted se salta el primer paso y va directo a bajar el potasio, el paciente puede hacer una arritmia letal mientras espera que esas medidas hagan efecto; el calcio es el que le compra el tiempo para que las demás medidas trabajen.",
    keyPoints: [
      "Hiperpotasemia severa con cambios ECG: primera medida es gluconato cálcico IV para estabilizar la membrana miocárdica (no baja el potasio, pero protege el corazón).",
      "Segundo paso: desplazar el potasio al interior celular (insulina + glucosa, beta-agonistas), tercer paso: eliminarlo (diálisis en el paciente renal terminal).",
      "En el paciente anúrico en hemodiálisis, furosemida y resinas tienen un papel muy limitado; la diálisis es la medida definitiva para eliminar el potasio.",
    ],
  },
  {
    id: "mir-2026-08",
    university: "MIR (España)",
    examArea: "REUMATOLOGÍA",
    topic: "MONOARTRITIS AGUDA - ARTRITIS SÉPTICA VS GOTA",
    difficulty: "hard",
    tags: ["mir", "espana", "reumatologia"],
    statement:
      "Un varón de 55 años, con antecedente de hiperuricemia, acude por dolor, calor y tumefacción intensos de rodilla derecha de 24 horas de evolución, con fiebre de 38.4°C. No hay antecedente de trauma. ¿Cuál es la actuación diagnóstica prioritaria antes de decidir el tratamiento?",
    options: [
      { id: "A", label: "A", text: "Artrocentesis con análisis del líquido sinovial (celularidad, tinción de Gram, cultivo y búsqueda de cristales), ya que la artritis séptica debe descartarse de forma prioritaria en toda monoartritis aguda febril, independientemente del antecedente de hiperuricemia." },
      { id: "B", label: "B", text: "Iniciar tratamiento empírico con antiinflamatorios no esteroideos o colchicina a dosis plenas, asumiendo que se trata de un ataque de gota dado el antecedente de hiperuricemia, sin necesidad de artrocentesis, y reevaluar solo si no hay mejoría clínica tras 48-72 horas de tratamiento." },
      { id: "C", label: "C", text: "Solicitar una resonancia magnética de rodilla como primer paso diagnóstico, antes de cualquier procedimiento invasivo, para valorar derrame, lesiones óseas y partes blandas y decidir después la necesidad de punción." },
      { id: "D", label: "D", text: "Iniciar antibioterapia empírica de amplio espectro por vía intravenosa sin artrocentesis previa, para no retrasar el tratamiento de una posible artritis séptica, ya que el cultivo del líquido sinovial no modifica la conducta." },
    ],
    correctOptionId: "A",
    explanation:
      "Ante una **monoartritis aguda febril**, incluso con antecedente de hiperuricemia que sugiere gota, la prioridad diagnóstica es **descartar artritis séptica**, una urgencia reumatológica que puede destruir la articulación en horas-días si no se trata precozmente. La **artrocentesis** con análisis del líquido sinovial (recuento celular, tinción de Gram, cultivo, y búsqueda de cristales bajo microscopía de luz polarizada) es la prueba clave: permite diferenciar artritis séptica (leucocitosis muy elevada, habitualmente >50.000/mm³ con predominio neutrofílico, Gram o cultivo positivos) de gota (cristales de urato monosódico, negativamente birrefringentes, en forma de aguja) o pseudogota (cristales de pirofosfato cálcico, positivamente birrefringentes). Es importante recordar que **ambas entidades pueden coexistir** o simular clínicamente a la otra, por lo que el antecedente de hiperuricemia no descarta una artritis séptica sobreañadida.\n\n**TRAMPA DEL EXAMEN:** La trampa central es asumir automáticamente \"gota\" por el antecedente de hiperuricemia y tratar empíricamente sin artrocentesis, dejando pasar una artritis séptica que puede destruir la articulación de forma irreversible. La otra trampa es iniciar antibioterapia empírica sin haber obtenido antes el líquido sinovial para cultivo, lo que reduce la rentabilidad diagnóstica del cultivo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el antecedente de hiperuricemia es una trampa preciosa que el examen le pone a propósito: usted ve \"hiperuricemia + articulación caliente\" y el reflejo es pensar \"gota\", pero la fiebre y la evolución aguda le deben encender la alarma de artritis séptica, que es la que de verdad no se puede pasar por alto. La regla de oro en toda monoartritis aguda, tenga o no antecedente de gota, es: puncione primero, trate después. Mande el líquido a Gram, cultivo y cristales antes de dar el primer antiinflamatorio o el primer antibiótico; si empieza el antibiótico sin haber sacado el líquido, puede esterilizar el cultivo y quedarse sin saber si realmente era séptica. Y no olvide que gota y artritis séptica pueden coexistir en el mismo paciente, así que ver cristales no le da automáticamente el permiso de descartar infección.",
    keyPoints: [
      "Monoartritis aguda febril: la artrocentesis con análisis del líquido sinovial (Gram, cultivo, cristales) es prioritaria antes de tratar, incluso con antecedente de gota.",
      "El antecedente de hiperuricemia NO descarta artritis séptica; ambas entidades pueden coexistir.",
      "No iniciar antibioterapia empírica antes de obtener el líquido sinovial para cultivo, salvo inestabilidad que obligue a no demorar el tratamiento.",
    ],
  },
  {
    id: "mir-2026-09",
    university: "MIR (España)",
    examArea: "HEMATOLOGÍA",
    topic: "ANEMIA MEGALOBLÁSTICA - DÉFICIT DE VITAMINA B12",
    difficulty: "medium",
    tags: ["mir", "espana", "hematologia"],
    statement:
      "Una mujer de 68 años presenta astenia progresiva, glositis y parestesias simétricas en ambos pies. La analítica muestra hemoglobina 9.2 g/dL con VCM de 118 fL, y en el frotis de sangre periférica se observan neutrófilos hipersegmentados. Los niveles séricos de ácido fólico son normales. ¿Cuál es el diagnóstico más probable y el siguiente paso diagnóstico más apropiado?",
    options: [
      { id: "A", label: "A", text: "Anemia megaloblástica por déficit de vitamina B12; solicitar niveles séricos de vitamina B12 y estudiar la causa (por ejemplo, anemia perniciosa con anticuerpos anti-factor intrínseco y anti-células parietales) dada la afectación neurológica asociada." },
      { id: "B", label: "B", text: "Anemia megaloblástica por déficit de ácido fólico; iniciar suplementación con ácido fólico oral a dosis altas sin más estudios, ya que la clínica hematológica y neurológica es indistinguible del déficit de B12 y el folato corrige ambas alteraciones por igual." },
      { id: "C", label: "C", text: "Anemia ferropénica por pérdidas digestivas crónicas ocultas; solicitar estudio del metabolismo del hierro (ferritina, índice de saturación de transferrina) y programar gastroscopia y colonoscopia como siguientes pasos antes de valorar otras causas de anemia." },
      { id: "D", label: "D", text: "Anemia hemolítica autoinmune; solicitar test de Coombs directo, haptoglobina y LDH como siguiente paso diagnóstico, dado que la macrocitosis se explica por la reticulocitosis." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con **anemia megaloblástica** (VCM elevado, neutrófilos hipersegmentados) con **afectación neurológica** (parestesias simétricas, propias de la degeneración combinada subaguda medular), un dato clave que orienta específicamente a **déficit de vitamina B12** y no de ácido fólico, ya que este último no produce clínica neurológica. Con niveles de folato normales, el siguiente paso es confirmar el **déficit de vitamina B12** con su determinación sérica, y estudiar la causa subyacente; en una mujer de edad avanzada con glositis, la **anemia perniciosa** (gastritis autoinmune con destrucción de células parietales y déficit de factor intrínseco) es una causa frecuente, que se estudia con anticuerpos anti-factor intrínseco y anti-células parietales.\n\n**TRAMPA DEL EXAMEN:** La trampa es tratar empíricamente con ácido fólico sin diagnóstico confirmado: si el déficit real es de vitamina B12 y se administra únicamente ácido fólico, la anemia puede mejorar parcialmente en sangre periférica, pero la afectación neurológica puede progresar e incluso hacerse irreversible, ya que el ácido fólico no corrige el déficit de B12 subyacente.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la pista que no puede pasar por alto en esta pregunta son las parestesias: el déficit de ácido fólico da anemia megaloblástica igual de \"bonita\" en el frotis, pero NO da clínica neurológica; el que compromete la médula espinal (degeneración combinada subaguda) y los nervios periféricos es específicamente el déficit de B12. Por eso, ante VCM alto, neutrófilos hipersegmentados y síntomas neurológicos, su sospecha diagnóstica principal tiene que ser B12, no fólico, y menos aún tratar \"a ciegas\" con ácido fólico sin confirmar. Si trata con fólico a un paciente con déficit real de B12, puede incluso empeorar el cuadro neurológico mientras la sangre periférica mejora, un clásico error trampa del examen.",
    keyPoints: [
      "Anemia megaloblástica con clínica neurológica (parestesias, degeneración combinada subaguda) orienta a déficit de vitamina B12, no de ácido fólico.",
      "El ácido fólico no corrige ni previene el daño neurológico del déficit de B12; tratar empíricamente con fólico sin diagnóstico puede enmascarar la anemia y permitir que progrese el daño neurológico.",
      "En mujer mayor con glositis y déficit de B12, estudiar anemia perniciosa (anticuerpos anti-factor intrínseco y anti-células parietales).",
    ],
  },
  {
    id: "mir-2026-10",
    university: "MIR (España)",
    examArea: "PSIQUIATRÍA",
    topic: "SÍNDROME NEUROLÉPTICO MALIGNO",
    difficulty: "hard",
    tags: ["mir", "espana", "psiquiatria"],
    statement:
      "Un varón de 29 años, en tratamiento reciente con haloperidol por un episodio psicótico, es traído a Urgencias por fiebre de 39.8°C, rigidez muscular generalizada tipo \"en tubo de plomo\", alteración del nivel de conciencia y diaforesis profusa. La analítica muestra creatín-cinasa (CK) marcadamente elevada. ¿Cuál es el manejo inicial más apropiado?",
    options: [
      { id: "A", label: "A", text: "Suspender de inmediato el antipsicótico, iniciar medidas de soporte agresivas (hidratación intravenosa, enfriamiento activo, monitorización) y valorar tratamiento específico con dantroleno o bromocriptina en casos graves o refractarios." },
      { id: "B", label: "B", text: "Aumentar la dosis del antipsicótico, ya que la rigidez, la fiebre y la alteración del nivel de conciencia sugieren un control insuficiente de los síntomas psicóticos y una posible catatonía que requiere mayor bloqueo dopaminérgico." },
      { id: "C", label: "C", text: "Administrar un segundo antipsicótico de diferente familia (por ejemplo, un atípico por vía intramuscular) para controlar la agitación, manteniendo el haloperidol sin cambios y añadiendo antitérmicos convencionales (paracetamol) para la fiebre." },
      { id: "D", label: "D", text: "Iniciar benzodiacepinas en monoterapia como único tratamiento de la rigidez y la agitación, sin suspender el antipsicótico ni aportar medidas de soporte, dado que el cuadro es benigno y autolimitado en pocas horas una vez controlada la agitación." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con **síndrome neuroléptico maligno (SNM)**: fiebre alta, rigidez muscular generalizada, alteración del nivel de conciencia, disautonomía (diaforesis) y elevación marcada de CK, en el contexto de uso reciente de un antipsicótico (típicamente de alta potencia, como el haloperidol). Es una urgencia potencialmente mortal. El manejo inicial es **suspender de inmediato el fármaco causante**, junto con **medidas de soporte intensivo**: hidratación intravenosa agresiva (para prevenir el fracaso renal agudo por rabdomiólisis, dada la CK elevada), enfriamiento activo de la fiebre, y monitorización estrecha. En casos moderados-graves o refractarios a las medidas de soporte, se puede añadir tratamiento farmacológico específico como **dantroleno** (relajante muscular directo) o **bromocriptina** (agonista dopaminérgico, que contrarresta el bloqueo dopaminérgico del antipsicótico).\n\n**TRAMPA DEL EXAMEN:** Aumentar la dosis del antipsicótico o añadir un segundo antipsicótico son errores graves y potencialmente letales, ya que perpetúan la causa del síndrome. Las benzodiacepinas pueden tener un papel adyuvante para la agitación, pero nunca como único tratamiento sin retirar el fármaco causante ni aportar las medidas de soporte esenciales.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el síndrome neuroléptico maligno es de esas urgencias donde el primer gesto terapéutico es NO farmacológico en el sentido de \"añadir\": lo primero es RETIRAR el antipsicótico causante, no sumarle otro fármaco ni subir la dosis pensando que la agitación necesita \"más control\". Una vez retirado, su prioridad es el soporte: hidrate agresivamente (la rabdomiólisis con CK tan elevada puede meterle en fallo renal si no diluye y alcaliniza la orina), enfríe activamente la fiebre, y monitorice de cerca la función renal y el estado hemodinámico. Reserve el dantroleno o la bromocriptina para los casos que no responden solo con soporte y retirada del fármaco, o que sean especialmente graves. Y recuerde el diagnóstico diferencial clásico de examen: el síndrome serotoninérgico se parece mucho, pero ahí el antecedente es de fármacos serotoninérgicos (ISRS, IMAO), con hiperreflexia y clonus en lugar de la rigidez \"en tubo de plomo\" típica del SNM.",
    keyPoints: [
      "Síndrome neuroléptico maligno: fiebre + rigidez muscular + alteración de conciencia + CK elevada, tras uso de antipsicóticos (especialmente de alta potencia).",
      "Manejo inicial: suspender el antipsicótico causante + medidas de soporte agresivas (hidratación, enfriamiento); dantroleno o bromocriptina en casos graves/refractarios.",
      "Nunca aumentar la dosis del antipsicótico ni añadir otro; diferenciar del síndrome serotoninérgico (hiperreflexia/clonus vs. rigidez en tubo de plomo).",
    ],
  },
];
