import type { TrainingQuestion } from "@/lib/questions/types";

export const MIR_2026_11_20_QUESTIONS: TrainingQuestion[] = [
  {
    id: "mir-2026-11",
    university: "MIR (España)",
    examArea: "OBSTETRICIA",
    topic: "PREECLAMPSIA GRAVE Y PROFILAXIS DE ECLAMPSIA",
    difficulty: "hard",
    tags: ["mir", "espana", "obstetricia"],
    statement:
      "Una gestante de 34 semanas acude por cefalea intensa y dolor en hipocondrio derecho. La presión arterial es 168/112 mmHg, con proteinuria significativa en tira reactiva. Analítica: plaquetas 98.000/µL, transaminasas elevadas. No hay convulsiones. ¿Cuál es el manejo farmacológico más apropiado además de la finalización programada de la gestación?",
    options: [
      { id: "A", label: "A", text: "Sulfato de magnesio intravenoso para profilaxis de crisis eclámptica, junto con tratamiento antihipertensivo (labetalol o hidralazina intravenosos) para control tensional agudo." },
      { id: "B", label: "B", text: "Diazepam intravenoso en infusión continua como profilaxis de convulsiones, sin necesidad de tratamiento antihipertensivo si la paciente está asintomática desde el punto de vista neurológico." },
      { id: "C", label: "C", text: "Iniciar antihipertensivos orales de forma ambulatoria, difiriendo la finalización de la gestación hasta las 37 semanas." },
      { id: "D", label: "D", text: "Sulfato de magnesio intramuscular cuando aparezcan convulsiones clínicas, sin uso profiláctico previo." },
    ],
    correctOptionId: "A",
    explanation:
      "Esta gestante presenta una **preeclampsia con criterios de gravedad** (PA ≥160/110 mmHg, trombocitopenia, elevación de transaminasas, síntomas como cefalea y dolor en hipocondrio derecho sugestivo de afectación hepática). El manejo incluye dos pilares farmacológicos simultáneos: **sulfato de magnesio intravenoso** como **profilaxis** de la crisis eclámptica (no solo tratamiento una vez ocurre la convulsión, sino prevención en toda preeclampsia grave) y **tratamiento antihipertensivo agudo** (labetalol o hidralazina intravenosos, también nifedipino oral de acción rápida) para evitar las complicaciones cerebrovasculares de la hipertensión severa. Ambas medidas son independientes: el sulfato de magnesio no sustituye el control tensional, y viceversa.\n\n**TRAMPA DEL EXAMEN:** El sulfato de magnesio en preeclampsia grave es **profiláctico**, no se espera a que la paciente convulsione para iniciarlo; ese es el error clásico de confundirlo con el manejo exclusivamente reactivo de la eclampsia ya establecida. El diazepam no es el fármaco de elección para la profilaxis ni el tratamiento de la eclampsia; el sulfato de magnesio ha demostrado superioridad clara sobre las benzodiacepinas y la fenitoína en los ensayos clínicos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en preeclampsia grave usted no espera la convulsión para actuar: el sulfato de magnesio se administra de forma profiláctica desde que diagnostica la gravedad, precisamente para evitar que la paciente llegue a convulsionar. Es un error muy castigado en el examen pensar que el magnesio es \"para cuando convulsione\"; en ese escenario ya llegó tarde con la prevención. En paralelo, no descuide la presión arterial: una PA de 168/112 es una emergencia hipertensiva en el embarazo que requiere tratamiento intravenoso inmediato (labetalol o hidralazina), independientemente de que ya esté con magnesio. Y recuerde: ni el diazepam ni la fenitoína son de primera línea aquí, el magnesio es el protagonista indiscutible de la profilaxis y el tratamiento de la eclampsia.",
    keyPoints: [
      "Preeclampsia grave: sulfato de magnesio intravenoso como profilaxis de eclampsia (no solo tratamiento reactivo tras la convulsión).",
      "Tratamiento antihipertensivo agudo (labetalol o hidralazina IV, o nifedipino oral) en paralelo al magnesio, no como alternativa.",
      "El sulfato de magnesio es superior a benzodiacepinas y fenitoína para la profilaxis/tratamiento de la eclampsia.",
    ],
  },
  {
    id: "mir-2026-12",
    university: "MIR (España)",
    examArea: "GINECOLOGÍA",
    topic: "EMBARAZO ECTÓPICO ROTO",
    difficulty: "hard",
    tags: ["mir", "espana", "ginecologia"],
    statement:
      "Una mujer de 29 años, con amenorrea de 7 semanas y test de embarazo positivo, acude por dolor abdominal súbito e intenso en fosa ilíaca derecha, con síncope previo al ingreso. Presenta PA 88/54 mmHg, FC 118 lpm y abdomen con signos de irritación peritoneal. La ecografía transvaginal no muestra saco gestacional intrauterino, con líquido libre abundante en pelvis. ¿Cuál es la conducta inmediata más apropiada?",
    options: [
      { id: "A", label: "A", text: "Laparoscopia (o laparotomía si la inestabilidad hemodinámica lo requiere) urgente, tras iniciar reanimación con cristaloides, dado el cuadro compatible con embarazo ectópico roto con hemoperitoneo." },
      { id: "B", label: "B", text: "Manejo médico ambulatorio con metotrexato intramuscular y control seriado de beta-hCG, dado que es el tratamiento de elección en el embarazo ectópico tubárico." },
      { id: "C", label: "C", text: "Manejo expectante con determinaciones seriadas de beta-hCG cada 48 horas y ecografía de control, dado que el diagnóstico ecográfico todavía no es definitivo." },
      { id: "D", label: "D", text: "Solicitar resonancia magnética pélvica urgente para confirmar la localización exacta del embarazo ectópico y la cuantía del hemoperitoneo antes de decidir el tratamiento." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con **embarazo ectópico roto con hemoperitoneo**: amenorrea + beta-hCG positiva + ausencia de saco gestacional intrauterino + dolor abdominal agudo + inestabilidad hemodinámica (hipotensión, taquicardia, síncope) + líquido libre abundante en la ecografía. Esta combinación constituye una **urgencia quirúrgica**: la paciente está sangrando activamente a la cavidad peritoneal. La conducta es la **reanimación con cristaloides/hemoderivados en paralelo** con el traslado inmediato a quirófano para **cirugía urgente** (laparoscopia si la situación hemodinámica lo permite, laparotomía si hay inestabilidad grave), sin demorar el tratamiento con más pruebas de imagen.\n\n**TRAMPA DEL EXAMEN:** El metotrexato es una opción válida en el embarazo ectópico, pero **únicamente en pacientes hemodinámicamente estables**, con criterios específicos (beta-hCG no muy elevada, ausencia de actividad cardíaca embrionaria, ausencia de rotura); en un ectópico roto con signos de shock hemorrágico, el metotrexato y el manejo expectante están completamente contraindicados. Pedir una resonancia magnética en este contexto es un error grave que retrasa el tratamiento definitivo de una paciente que se está desangrando.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando una paciente con sospecha de embarazo ectópico llega con síncope, hipotensión y taquicardia, usted ya no está ante una discusión de \"metotrexato versus cirugía\"; está ante un abdomen agudo hemorrágico que necesita quirófano ya. El líquido libre abundante en la ecografía junto con la inestabilidad le confirma que hay sangrado activo intraperitoneal, y cada minuto que pierde pidiendo más imágenes es sangre que la paciente sigue perdiendo. Active el protocolo de reanimación (cristaloides, cruzar sangre) en paralelo mientras avisa a quirófano, y decida entre laparoscopia o laparotomía según cómo evolucione la estabilidad hemodinámica en ese momento, no según la preferencia técnica.",
    keyPoints: [
      "Embarazo ectópico con inestabilidad hemodinámica y hemoperitoneo: cirugía urgente (laparoscopia o laparotomía), en paralelo con reanimación.",
      "El metotrexato solo es una opción en pacientes estables, sin rotura ni signos de sangrado activo.",
      "No retrasar el tratamiento quirúrgico con estudios de imagen adicionales (RM) en un ectópico roto inestable.",
    ],
  },
  {
    id: "mir-2026-13",
    university: "MIR (España)",
    examArea: "PEDIATRÍA",
    topic: "BRONQUIOLITIS AGUDA DEL LACTANTE",
    difficulty: "medium",
    tags: ["mir", "espana", "pediatria"],
    statement:
      "Un lactante de 4 meses, previamente sano, presenta desde hace 2 días tos, rinorrea y desde esta mañana dificultad respiratoria con sibilancias difusas y tiraje subcostal leve. Saturación de oxígeno 95% con aire ambiente, buena tolerancia oral, sin apneas. ¿Cuál es el manejo más apropiado?",
    options: [
      { id: "A", label: "A", text: "Manejo de soporte (desobstrucción nasal, fraccionamiento de tomas, hidratación) y observación ambulatoria, evitando broncodilatadores, corticoides y antibióticos de rutina, dado que la bronquiolitis es de etiología viral y estos fármacos no han demostrado beneficio consistente." },
      { id: "B", label: "B", text: "Iniciar salbutamol inhalado con cámara espaciadora como broncodilatador de primera línea, dado que el cuadro cursa con sibilancias y tiraje, y mantenerlo pautado cada 4-6 horas aunque no se observe respuesta clínica tras la primera dosis, junto con lavados nasales y observación domiciliaria." },
      { id: "C", label: "C", text: "Iniciar corticoides sistémicos (prednisolona oral o dexametasona) de forma sistemática durante 3-5 días, ya que reducen la inflamación bronquiolar, la duración de los síntomas y la necesidad de ingreso en la bronquiolitis del lactante." },
      { id: "D", label: "D", text: "Iniciar antibioterapia empírica de amplio espectro (por ejemplo, amoxicilina-clavulánico), dado el riesgo de sobreinfección bacteriana en un lactante con dificultad respiratoria y fiebre, y mantenerla hasta la mejoría clínica." },
    ],
    correctOptionId: "A",
    explanation:
      "La **bronquiolitis aguda** (típicamente por virus respiratorio sincitial) en un lactante con buena tolerancia oral, sin signos de dificultad respiratoria grave (sin tiraje intenso, sin apneas, saturación >92-94%) se maneja de forma ambulatoria con **medidas de soporte**: desobstrucción nasal con suero fisiológico, fraccionamiento de las tomas, e hidratación adecuada. Las guías actuales **no recomiendan de rutina** broncodilatadores (salbutamol), corticoides sistémicos ni antibióticos, ya que los ensayos clínicos no han mostrado un beneficio consistente sobre la evolución de la enfermedad, y sí efectos adversos innecesarios.\n\n**TRAMPA DEL EXAMEN:** La presencia de sibilancias tienta al estudiante a tratar como si fuera una crisis asmática típica con broncodilatadores; sin embargo, la fisiopatología de la bronquiolitis (obstrucción por edema, moco e inflamación de la vía aérea pequeña) responde peor a los broncodilatadores que el asma, y el tratamiento de soporte es el pilar del manejo en el paciente sin criterios de ingreso.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., no caiga en el reflejo automático de \"sibilancias = salbutamol\"; en la bronquiolitis del lactante ese reflejo no aplica igual que en el asma, porque el problema es sobre todo obstrucción por moco e inflamación de la vía aérea pequeña, no broncoespasmo puro. Las guías actuales son claras: en el lactante sin criterios de gravedad (buena saturación, buena tolerancia oral, sin apneas, sin tiraje intenso), lo que funciona es lo más simple: limpiar la nariz, dar tomas más frecuentes y en menor cantidad, e hidratar bien. Reserve su atención para vigilar los signos de alarma que sí obligarían a ingreso: apneas, dificultad respiratoria progresiva, mala tolerancia oral, o saturación persistentemente baja.",
    keyPoints: [
      "Bronquiolitis aguda del lactante sin criterios de gravedad: manejo de soporte (desobstrucción nasal, hidratación, fraccionar tomas), ambulatorio.",
      "No se recomienda de rutina salbutamol, corticoides ni antibióticos; no han demostrado beneficio consistente y sí efectos adversos.",
      "Criterios de alarma que orientan a ingreso: apneas, dificultad respiratoria progresiva, mala tolerancia oral, hipoxemia significativa.",
    ],
  },
  {
    id: "mir-2026-14",
    university: "MIR (España)",
    examArea: "PEDIATRÍA",
    topic: "CONVULSIÓN FEBRIL SIMPLE",
    difficulty: "medium",
    tags: ["mir", "espana", "pediatria"],
    statement:
      "Un niño de 20 meses presenta una crisis convulsiva tónico-clónica generalizada de 3 minutos de duración, en el contexto de fiebre de 39.5°C por un cuadro catarral. La crisis cede espontáneamente, y tras un breve periodo poscrítico el niño recupera un estado neurológico normal, con exploración física y neurológica sin hallazgos. Es su primer episodio. ¿Cuál es la actitud más apropiada?",
    options: [
      { id: "A", label: "A", text: "Tranquilizar a la familia, tratar la causa de la fiebre, y no indicar de rutina electroencefalograma, neuroimagen ni punción lumbar, ya que se trata de una convulsión febril simple." },
      { id: "B", label: "B", text: "Realizar punción lumbar en el niño con una primera convulsión febril, aunque la exploración neurológica sea normal, para descartar una meningitis bacteriana." },
      { id: "C", label: "C", text: "Indicar tratamiento antiepiléptico profiláctico continuo con ácido valproico para prevenir la recurrencia, dado que ya ha presentado un primer episodio." },
      { id: "D", label: "D", text: "Solicitar resonancia magnética cerebral urgente y electroencefalograma antes del alta, dado que una primera convulsión en la infancia requiere neuroimagen y estudio neurofisiológico inmediatos." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con una **convulsión febril simple**: crisis generalizada, de menos de 15 minutos de duración, única en 24 horas, en un niño neurológicamente normal antes y después del episodio, entre los 6 meses y los 5 años, sin datos de infección del sistema nervioso central. Esta entidad tiene un **pronóstico excelente** y **no requiere** de forma rutinaria electroencefalograma, neuroimagen ni punción lumbar; el manejo consiste en tranquilizar a la familia, tratar la causa de la fiebre, y explicar signos de alarma para consultar de nuevo. El tratamiento antiepiléptico profiláctico continuo **no está indicado** tras una convulsión febril simple, dado su pronóstico benigno y el bajo riesgo de desarrollar epilepsia.\n\n**TRAMPA DEL EXAMEN:** El examen suele intentar generar alarma innecesaria proponiendo pruebas invasivas (punción lumbar) o neuroimagen \"por rutina\" en un cuadro claramente benigno; estas solo están indicadas si hay datos de alarma (crisis focal, duración prolongada >15 min, recurrencia en 24 horas, alteración del nivel de conciencia persistente, signos meníngeos, edad menor de 6 meses, o exploración neurológica anormal), es decir, ante una convulsión febril **compleja** o atípica, no ante la simple.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la palabra clave aquí es \"simple\": generalizada, corta (menos de 15 minutos), única, en un niño que antes y después de la crisis está neurológicamente perfecto, en el rango de edad típico. Con esos criterios cumplidos, usted no necesita electroencefalograma, ni neuroimagen, ni punción lumbar de rutina; lo que sí necesita es dedicar tiempo a explicarle bien a la familia que esto, aunque asuste muchísimo verlo, tiene un pronóstico excelente y no requiere tratamiento preventivo continuo. Reserve las pruebas complementarias para cuando la historia no encaje con \"simple\": si la crisis fue focal, duró más de 15 minutos, se repitió en el mismo día, o el niño no volvió a la normalidad neurológica esperada, ahí sí cambia todo el enfoque diagnóstico.",
    keyPoints: [
      "Convulsión febril simple: generalizada, <15 min, única en 24h, niño neurológicamente normal antes/después, 6 meses-5 años.",
      "No requiere EEG, neuroimagen ni punción lumbar de rutina; estas se reservan para datos de alarma o convulsión febril compleja.",
      "No está indicado tratamiento antiepiléptico profiláctico continuo tras una convulsión febril simple.",
    ],
  },
  {
    id: "mir-2026-15",
    university: "MIR (España)",
    examArea: "DERMATOLOGÍA",
    topic: "NECRÓLISIS EPIDÉRMICA TÓXICA / SÍNDROME DE STEVENS-JOHNSON",
    difficulty: "hard",
    tags: ["mir", "espana", "dermatologia"],
    statement:
      "Una mujer de 45 años, que inició tratamiento con carbamazepina hace 10 días, presenta fiebre, malestar general y erupción cutánea dolorosa con máculas purpúricas que confluyen, además de ampollas flácidas con desprendimiento epidérmico al roce (signo de Nikolsky positivo), afectando aproximadamente el 15% de la superficie corporal, con afectación de mucosa oral y conjuntival. ¿Cuál es la actuación más apropiada?",
    options: [
      { id: "A", label: "A", text: "Suspender de inmediato el fármaco sospechoso (carbamazepina), derivar a una unidad especializada (idealmente de quemados o cuidados intensivos) para manejo de soporte intensivo, y evitar reexposición futura al fármaco." },
      { id: "B", label: "B", text: "Continuar la carbamazepina a dosis reducida con vigilancia estrecha de las lesiones, ya que la suspensión brusca de antiepilépticos puede precipitar crisis comiciales de mayor riesgo vital que la propia reacción cutánea en este paciente." },
      { id: "C", label: "C", text: "Manejo ambulatorio con antihistamínicos orales y emolientes, con revisión en consulta de dermatología en una semana, dado que se trata de una reacción alérgica cutánea leve y autolimitada, sin afectación sistémica ni de mucosas relevante." },
      { id: "D", label: "D", text: "Iniciar corticoides tópicos de alta potencia sobre las lesiones cutáneas y mucosas como tratamiento principal, sin necesidad de valorar ingreso hospitalario ni derivación a una unidad especializada, ya que la reacción suele resolverse sola." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con el espectro **síndrome de Stevens-Johnson/necrólisis epidérmica tóxica (SSJ/NET)**, una reacción mucocutánea grave, frecuentemente **inducida por fármacos** (la carbamazepina es un desencadenante clásico), caracterizada por desprendimiento epidérmico (signo de Nikolsky positivo), afectación mucosa, y riesgo de complicaciones sistémicas graves (sepsis, alteraciones hidroelectrolíticas, insuficiencia respiratoria). La actuación esencial e inmediata es **identificar y suspender el fármaco causante** cuanto antes (la suspensión precoz mejora el pronóstico), y derivar a una unidad especializada (quemados o UCI) para **manejo de soporte intensivo** (fluidoterapia, control de temperatura, cuidado de heridas, prevención de infecciones), de forma análoga al manejo del gran quemado dada la extensión de la pérdida de barrera cutánea.\n\n**TRAMPA DEL EXAMEN:** Mantener el fármaco sospechoso, aunque sea a dosis reducida, es un error grave: la reexposición o continuación del fármaco causante empeora drásticamente el pronóstico. Subestimar la gravedad tratándolo como una reacción alérgica cutánea leve ambulatoria ignora el riesgo vital de esta entidad, que requiere manejo hospitalario especializado similar al de un gran quemado.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ante un paciente con ampollas que se desprenden al roce (Nikolsky positivo), afectación de mucosas y el antecedente reciente de un fármaco de alto riesgo como la carbamazepina, su primera acción, sin discusión, es suspender ese fármaco de inmediato; cada día que lo mantiene empeora el pronóstico y aumenta la superficie de piel comprometida. Este paciente no es un caso de \"alergia cutánea\" para tratar con antihistamínicos en casa; es un paciente que, funcionalmente, ha perdido una porción relevante de su barrera cutánea, con el mismo riesgo de infección, pérdida de líquidos y desregulación térmica que un gran quemado, y por eso el manejo de soporte en una unidad especializada (quemados o UCI) es tan importante como identificar y retirar el fármaco. Y recuerde para siempre: ese fármaco queda contraindicado de por vida en este paciente, la reexposición puede ser incluso más grave.",
    keyPoints: [
      "SSJ/NET: reacción mucocutánea grave, frecuentemente inducida por fármacos (carbamazepina, entre otros); Nikolsky positivo, afectación de mucosas.",
      "Actuación inmediata: identificar y suspender el fármaco causante cuanto antes; nunca continuarlo ni a dosis reducida.",
      "Manejo de soporte intensivo en unidad especializada (quemados/UCI), análogo al del gran quemado por la extensión de pérdida de barrera cutánea.",
    ],
  },
  {
    id: "mir-2026-16",
    university: "MIR (España)",
    examArea: "ONCOLOGÍA / URGENCIAS",
    topic: "NEUTROPENIA FEBRIL POSTQUIMIOTERAPIA",
    difficulty: "hard",
    tags: ["mir", "espana", "oncologia"],
    statement:
      "Un varón de 58 años, en tratamiento con quimioterapia por linfoma hace 10 días, acude a Urgencias por fiebre de 38.9°C sin foco claro. El hemograma muestra neutrófilos de 380/µL. El paciente está hemodinámicamente estable, sin signos claros de foco infeccioso en la exploración. ¿Cuál es la actuación más apropiada?",
    options: [
      { id: "A", label: "A", text: "Extraer hemocultivos (y cultivos de otros focos según sospecha clínica) e iniciar antibioterapia empírica de amplio espectro con actividad antipseudomónica de forma inmediata, sin esperar el resultado de los cultivos." },
      { id: "B", label: "B", text: "Esperar el resultado de los hemocultivos antes de iniciar cualquier antibiótico, dado que el paciente está hemodinámicamente estable y así se evita un tratamiento empírico innecesario." },
      { id: "C", label: "C", text: "Iniciar tratamiento antipirético y reevaluar en 24 horas, ya que la fiebre sin foco claro en un paciente oncológico estable no requiere antibioterapia inmediata." },
      { id: "D", label: "D", text: "Administrar factores estimulantes de colonias de granulocitos (G-CSF) como medida para recuperar cuanto antes el recuento de neutrófilos, sin necesidad de antibioterapia empírica." },
    ],
    correctOptionId: "A",
    explanation:
      "Este paciente presenta una **neutropenia febril** (neutrófilos <500/µL con fiebre ≥38.3°C, o ≥38°C sostenida), una urgencia oncológica: el riesgo de infección grave y rápidamente progresiva (incluida sepsis) es elevado, y la ausencia de un foco claro no descarta una infección grave, ya que la neutropenia limita la respuesta inflamatoria habitual (puede haber muy pocos signos localizados pese a una infección seria). La actuación estándar es obtener **hemocultivos** (y cultivos dirigidos según la clínica) e iniciar **antibioterapia empírica de amplio espectro con cobertura antipseudomónica** (por ejemplo, un betalactámico antipseudomónico) de forma **inmediata**, sin esperar los resultados microbiológicos, dado que el retraso se asocia a mayor mortalidad.\n\n**TRAMPA DEL EXAMEN:** Esperar los cultivos o confiar en la estabilidad hemodinámica actual del paciente para retrasar el antibiótico es un error grave: el paciente neutropénico febril puede deteriorarse muy rápidamente porque carece de la respuesta inmune habitual para contener la infección. El G-CSF puede tener un papel adyuvante en casos seleccionados, pero nunca sustituye a la antibioterapia empírica inmediata.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en el paciente oncohematológico neutropénico y febril, la ausencia de un foco claro en la exploración NO es tranquilizadora, es al revés: sin neutrófilos suficientes, el cuerpo no puede montar la respuesta inflamatoria típica (pus, induración, signos claros), así que una infección grave puede estar cursando casi \"silenciosa\" clínicamente. La regla de oro es actuar como si ya hubiera una infección grave hasta que se demuestre lo contrario: cultive rápido, pero no espere ese resultado para arrancar el antibiótico de amplio espectro con cobertura antipseudomónica. Cada hora de retraso en este escenario tiene un correlato directo con peor pronóstico, así que trátelo con la misma urgencia que trataría una sepsis franca, aunque el paciente todavía luzca relativamente bien delante de usted.",
    keyPoints: [
      "Neutropenia febril (neutrófilos <500/µL + fiebre ≥38.3°C): urgencia oncológica, riesgo de infección grave incluso sin foco claro.",
      "Actuación inmediata: hemocultivos + antibioterapia empírica de amplio espectro con cobertura antipseudomónica, sin esperar resultados microbiológicos.",
      "La estabilidad hemodinámica actual no justifica retrasar el antibiótico; el deterioro puede ser muy rápido por la ausencia de respuesta inmune adecuada.",
    ],
  },
  {
    id: "mir-2026-17",
    university: "MIR (España)",
    examArea: "UROLOGÍA",
    topic: "TORSIÓN TESTICULAR",
    difficulty: "hard",
    tags: ["mir", "espana", "urologia"],
    statement:
      "Un adolescente de 14 años acude por dolor testicular derecho súbito e intenso de 4 horas de evolución, con náuseas asociadas. Al examen, el testículo derecho está elevado, horizontalizado y muy doloroso a la palpación, con ausencia del reflejo cremastérico ipsilateral. ¿Cuál es la conducta más apropiada?",
    options: [
      { id: "A", label: "A", text: "Exploración quirúrgica urgente sin demorar el tratamiento por la realización de pruebas de imagen, dado el cuadro clínico altamente sugestivo de torsión testicular y la urgencia del tiempo de isquemia." },
      { id: "B", label: "B", text: "Solicitar ecografía Doppler testicular antes de la decisión quirúrgica, aunque esto demore la intervención varias horas, ya que la exploración clínica no permite distinguir la torsión de una orquiepididimitis." },
      { id: "C", label: "C", text: "Manejo conservador con antiinflamatorios, reposo y suspensorio escrotal, con reevaluación ambulatoria en 48 horas si el dolor no mejora de forma significativa." },
      { id: "D", label: "D", text: "Iniciar antibioterapia empírica para epididimitis (por ejemplo, ceftriaxona y doxiciclina), dado que es la causa más frecuente de dolor testicular agudo en la adolescencia." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es altamente sugestivo de **torsión testicular**: dolor súbito e intenso, testículo elevado y horizontalizado (signo de Angell), y ausencia del reflejo cremastérico (uno de los signos con mayor sensibilidad). La torsión testicular es una **urgencia quirúrgica tiempo-dependiente**: la viabilidad testicular disminuye drásticamente después de las 6 horas de isquemia, por lo que ante una sospecha clínica alta, la conducta correcta es la **exploración quirúrgica urgente** (destorsión y fijación bilateral, u orquiectomía si el testículo ya es inviable), **sin retrasar el tratamiento** por pruebas de imagen como la ecografía Doppler, que solo se reservan para los casos clínicamente dudosos donde el diagnóstico no es evidente.\n\n**TRAMPA DEL EXAMEN:** Exigir una ecografía Doppler \"obligatoria\" antes de operar es el error clásico en esta pregunta: cuando la clínica ya es muy sugestiva (como en este caso), esperar la imagen solo consume el tiempo de isquemia caliente que puede salvar el testículo. Confundir el cuadro con epididimitis (que típicamente tiene inicio más gradual, con reflejo cremastérico conservado y mejoría del dolor al elevar el testículo, signo de Prehn positivo) y tratar con antibióticos retrasaría peligrosamente el diagnóstico correcto.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la torsión testicular es de esas urgencias donde el reloj es tan importante como en un ictus o un IAMCEST: cada hora que pasa sin destorsionar reduce las probabilidades de salvar ese testículo, y después de las 6 horas la viabilidad cae en picado. Si la clínica ya le grita torsión (dolor súbito e intenso, testículo elevado y horizontalizado, cremastérico ausente), no pierda tiempo esperando una ecografía Doppler \"para confirmar\"; llame a urología y vaya a quirófano. Guarde el Doppler para los casos donde la clínica es más ambigua y sí tiene margen de tiempo para estudiar antes de decidir. Y no confunda el cuadro con una epididimitis: ahí el dolor suele instaurarse más gradualmente, el cremastérico suele estar presente, y elevar el testículo alivia el dolor (signo de Prehn), justo lo contrario de lo que verá en una torsión.",
    keyPoints: [
      "Torsión testicular: dolor súbito, testículo elevado/horizontalizado, reflejo cremastérico ausente; urgencia quirúrgica tiempo-dependiente (viabilidad cae tras 6h de isquemia).",
      "Ante clínica altamente sugestiva, exploración quirúrgica urgente SIN esperar ecografía Doppler; esta se reserva para casos clínicamente dudosos.",
      "Diferenciar de epididimitis: inicio más gradual, cremastérico conservado, signo de Prehn positivo (alivio del dolor al elevar el testículo).",
    ],
  },
  {
    id: "mir-2026-18",
    university: "MIR (España)",
    examArea: "OFTALMOLOGÍA",
    topic: "GLAUCOMA AGUDO DE ÁNGULO CERRADO",
    difficulty: "medium",
    tags: ["mir", "espana", "oftalmologia"],
    statement:
      "Una mujer de 67 años acude por dolor ocular derecho intenso de inicio brusco, asociado a cefalea, náuseas y visión de halos alrededor de las luces. Al examen, el ojo derecho presenta hiperemia conjuntival marcada, córnea de aspecto edematoso, y la pupila está en midriasis media, arreactiva a la luz. La presión intraocular está claramente elevada. ¿Cuál es la actuación más apropiada?",
    options: [
      { id: "A", label: "A", text: "Derivación oftalmológica urgente para tratamiento inmediato dirigido a reducir la presión intraocular (farmacológico y posteriormente iridotomía láser), dado el cuadro compatible con glaucoma agudo de ángulo cerrado." },
      { id: "B", label: "B", text: "Administrar un midriático tópico (tropicamida o fenilefrina) para dilatar la pupila y facilitar la exploración completa del fondo de ojo antes de iniciar el tratamiento, dado que la causa del ojo rojo doloroso todavía no está clara." },
      { id: "C", label: "C", text: "Manejo ambulatorio con analgésicos orales y colirio lubricante, con reevaluación en una consulta programada de oftalmología en una semana, dado que el ojo rojo doloroso suele ser de causa benigna en adultos sin antecedentes." },
      { id: "D", label: "D", text: "Iniciar antibioterapia tópica de amplio espectro cada 2 horas, dado que el cuadro de ojo rojo con visión borrosa es compatible con una conjuntivitis bacteriana grave." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con **glaucoma agudo de ángulo cerrado**: dolor ocular intenso de inicio brusco, cefalea, náuseas, halos alrededor de las luces (por edema corneal), hiperemia, córnea edematosa, pupila en midriasis media arreactiva, y presión intraocular elevada. Es una **urgencia oftalmológica**: el aumento brusco de la presión intraocular puede producir daño irreversible del nervio óptico en pocas horas si no se trata. La actuación es la **derivación oftalmológica urgente** para iniciar tratamiento dirigido a reducir la presión intraocular de forma aguda (fármacos tópicos y sistémicos: betabloqueantes tópicos, agonistas alfa-2, inhibidores de la anhidrasa carbónica, y en ocasiones manitol intravenoso), seguido del tratamiento definitivo con **iridotomía periférica con láser** (habitualmente bilateral, dado el riesgo del ojo contralateral).\n\n**TRAMPA DEL EXAMEN:** Administrar un midriático tópico en este contexto es un error grave y potencialmente devastador: dilatar aún más la pupila empeora el bloqueo pupilar y puede agravar drásticamente la crisis de glaucoma agudo. Confundir el cuadro con una conjuntivitis (que no suele cursar con dolor intenso, halos, midriasis media ni presión intraocular elevada) y tratar con antibióticos retrasaría peligrosamente el tratamiento correcto.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ante un ojo rojo y doloroso, aprenda a distinguir rápido el \"ojo rojo banal\" del \"ojo rojo que amenaza la visión\": los halos alrededor de las luces, la pupila en midriasis media fija, la córnea que se ve \"empañada\" por el edema, y el dolor intenso con cefalea y náuseas, son la combinación clásica del glaucoma agudo de ángulo cerrado, y eso es una urgencia oftalmológica real donde las horas cuentan para salvar el nervio óptico. Nunca, bajo ninguna circunstancia, le ponga un midriático a este ojo pensando en explorar mejor el fondo; eso es literalmente echarle leña al fuego del bloqueo pupilar. Derive de inmediato a oftalmología para que bajen la presión intraocular con el arsenal farmacológico adecuado y definan el momento de la iridotomía láser, que además se hace preventivamente en el ojo contrario porque el riesgo de que le pase lo mismo es alto.",
    keyPoints: [
      "Glaucoma agudo de ángulo cerrado: dolor ocular brusco intenso, halos, midriasis media arreactiva, córnea edematosa, PIO elevada; urgencia oftalmológica.",
      "Nunca administrar midriáticos tópicos: empeoran el bloqueo pupilar y agravan la crisis.",
      "Tratamiento: reducción urgente de la PIO (fármacos tópicos/sistémicos) y posteriormente iridotomía periférica con láser, habitualmente bilateral.",
    ],
  },
  {
    id: "mir-2026-19",
    university: "MIR (España)",
    examArea: "OTORRINOLARINGOLOGÍA / PEDIATRÍA",
    topic: "EPIGLOTITIS AGUDA VS LARINGOTRAQUEÍTIS (CRUP)",
    difficulty: "hard",
    tags: ["mir", "espana", "otorrino"],
    statement:
      "Un niño de 3 años, con vacunación incompleta, presenta fiebre alta de inicio brusco, babeo, voz apagada y estridor inspiratorio, adoptando espontáneamente una postura en trípode con el cuello en hiperextensión. Los padres refieren que rechaza tumbarse. No hay tos perruna. ¿Cuál es la actuación más apropiada?",
    options: [
      { id: "A", label: "A", text: "Evitar cualquier maniobra que pueda agitar al niño o explorar la orofaringe con depresor, mantenerlo en la posición que él mismo adopte, y garantizar de inmediato una vía aérea avanzada en un entorno controlado (quirófano/UCI) por personal experimentado, dado el cuadro compatible con epiglotitis aguda." },
      { id: "B", label: "B", text: "Administrar corticoide oral (dexametasona a 0,15-0,6 mg/kg) y adrenalina nebulizada, y mantener al niño en observación en Urgencias durante al menos 3-4 horas antes de decidir el alta, dado que el cuadro es compatible con una laringotraqueítis aguda (crup) de gravedad moderada y responde bien al tratamiento médico." },
      { id: "C", label: "C", text: "Explorar la orofaringe con depresor lingual y buena iluminación para visualizar directamente la epiglotis y confirmar el diagnóstico antes de cualquier otra medida, ya que no se debe instrumentar la vía aérea de un niño sin haber confirmado la causa de la obstrucción, en especial si el niño está estable." },
      { id: "D", label: "D", text: "Solicitar radiografía lateral de cuello para buscar el signo del pulgar antes de intervenir, aunque el niño esté sentado, babeando y con estridor, y trasladarlo a la sala de radiología acompañado de sus padres, ya que la imagen es imprescindible para confirmar el diagnóstico." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con **epiglotitis aguda**: fiebre alta de inicio brusco, babeo (por dificultad para deglutir), voz apagada (\"en patata caliente\"), postura en trípode con hiperextensión cervical (posición que el niño adopta instintivamente para optimizar la vía aérea), y ausencia de la tos perruna característica del crup. Es una **urgencia de vía aérea**: la epiglotis inflamada puede obstruir completamente la vía aérea de forma súbita. La actuación esencial es **no agitar ni manipular al niño** (evitar exploraciones que generen llanto o ansiedad, incluida la exploración con depresor lingual, que puede precipitar un laringoespasmo y obstrucción completa) y **asegurar la vía aérea de forma controlada**, idealmente en quirófano con personal experimentado en vía aérea difícil pediátrica (anestesiología/ORL), antes de cualquier otra maniobra diagnóstica.\n\n**TRAMPA DEL EXAMEN:** Explorar la orofaringe con depresor lingual para \"confirmar\" el diagnóstico es un error potencialmente letal: puede desencadenar un espasmo laríngeo y obstrucción completa de la vía aérea en un niño con epiglotitis. Confundir el cuadro con crup (laringotraqueítis, que típicamente cursa con tos perruna, estridor y disfonía de inicio más gradual, sin el aspecto tóxico ni el babeo tan marcado) y tratar solo con corticoides y adrenalina nebulizada subestima gravemente el riesgo vital de la epiglotitis.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ante un niño con esta pinta —fiebre alta y brusca, babeando, con la voz apagada y sentado espontáneamente en trípode con el cuello estirado hacia atrás— usted tiene que pensar en epiglotitis hasta que se demuestre lo contrario, y la clave de oro aquí es: NO LO TOQUE MÁS DE LO NECESARIO. Nada de depresores linguales para \"mirar bien la garganta\", nada de exploraciones que lo agiten o lo hagan llorar, nada de acostarlo si él prefiere estar sentado; cualquiera de esas maniobras puede ser el detonante de una obstrucción completa de la vía aérea. Su prioridad absoluta es avisar de inmediato a anestesia y ORL para asegurar la vía aérea en un entorno controlado, idealmente quirófano, antes de que la situación se descompense. Y no confunda este cuadro con un crup: el crup suele tener tos perruna característica y un niño con mejor aspecto general; la epiglotitis tiene ese aspecto tóxico, el babeo y la ausencia de tos perruna que la hacen mucho más peligrosa.",
    keyPoints: [
      "Epiglotitis aguda: fiebre alta brusca, babeo, voz apagada, postura en trípode, sin tos perruna; urgencia de vía aérea.",
      "No manipular la orofaringe (depresor) ni agitar al niño: riesgo de laringoespasmo y obstrucción completa de la vía aérea.",
      "Prioridad: asegurar la vía aérea de forma controlada (quirófano/UCI, personal experimentado) antes de otras maniobras diagnósticas.",
    ],
  },
  {
    id: "mir-2026-20",
    university: "MIR (España)",
    examArea: "MEDICINA INTENSIVA / INFECCIOSAS",
    topic: "SHOCK SÉPTICO - MANEJO DE LA PRIMERA HORA",
    difficulty: "hard",
    tags: ["mir", "espana", "medicina-intensiva"],
    statement:
      "Una mujer de 74 años con sospecha de infección urinaria acude con PA 78/48 mmHg, FC 118 lpm, temperatura 38.9°C y lactato de 4.2 mmol/L, sin respuesta tensional tras un primer bolo de 30 mL/kg de cristaloides. ¿Cuál es la actuación más apropiada en este momento?",
    options: [
      { id: "A", label: "A", text: "Extraer hemocultivos (si no retrasan el tratamiento) e iniciar antibioterapia empírica de amplio espectro de forma inmediata, junto con inicio de vasopresores (norepinefrina de primera elección) para mantener una presión arterial media objetivo, dado el shock séptico persistente tras la fluidoterapia inicial." },
      { id: "B", label: "B", text: "Continuar administrando bolos adicionales de cristaloides de forma indefinida hasta normalizar la presión arterial, sin considerar el inicio de vasopresores, ya que en el shock séptico la hipotensión se debe a hipovolemia y los vasopresores empeoran la perfusión." },
      { id: "C", label: "C", text: "Esperar el resultado de los hemocultivos y del resto de cultivos antes de iniciar la antibioterapia, para poder dirigirla al germen causante y evitar seleccionar resistencias antibióticas innecesarias en un paciente que ya está recibiendo fluidoterapia intensiva." },
      { id: "D", label: "D", text: "Iniciar corticoides sistémicos en altas dosis (metilprednisolona en bolos) como tratamiento de primera línea del shock, sin necesidad de antibioterapia ni vasopresores, dado que la respuesta inflamatoria sistémica es la principal causa de la hipotensión." },
    ],
    correctOptionId: "A",
    explanation:
      "Esta paciente cumple criterios de **shock séptico** (sospecha de infección + hipotensión persistente que no responde a la fluidoterapia inicial adecuada + lactato elevado, marcador de hipoperfusión tisular). El manejo de la primera hora (\"hour-1 bundle\") incluye: extracción de **hemocultivos** (idealmente antes del antibiótico, pero sin retrasarlo si esto no es posible de forma inmediata), inicio de **antibioterapia empírica de amplio espectro** cuanto antes (cada hora de retraso se asocia a mayor mortalidad), fluidoterapia adecuada (ya administrada en este caso), y si la hipotensión persiste pese al volumen, inicio de **vasopresores**, siendo la **norepinefrina** el fármaco de primera elección, con el objetivo de mantener una presión arterial media adecuada (habitualmente ≥65 mmHg) y así preservar la perfusión de órganos vitales.\n\n**TRAMPA DEL EXAMEN:** Insistir en bolos de cristaloides de forma indefinida sin considerar vasopresores, una vez ya se administró un volumen adecuado y la hipotensión persiste, retrasa el soporte hemodinámico necesario y puede favorecer la sobrecarga de volumen (edema pulmonar, síndrome compartimental abdominal). Esperar los cultivos antes del antibiótico es otro error grave y clásico: en sepsis/shock séptico, el antibiótico no debe retrasarse por la espera de resultados microbiológicos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en el shock séptico la primera hora es literalmente el nombre del protocolo (\"hour-1 bundle\") porque cada intervención de esa primera hora —cultivos, antibiótico de amplio espectro, líquidos, y si hace falta, vasopresor— tiene un impacto medible en la mortalidad si se retrasa. Esta paciente ya recibió su bolo inicial adecuado de cristaloides y sigue hipotensa con lactato alto: eso es shock séptico que no responde solo a volumen, y ahí es cuando usted no debe seguir \"ahogando\" a la paciente en más y más líquido esperando que reaccione; el siguiente paso lógico es la norepinefrina, su vasopresor de primera línea, para sostener la presión de perfusión mientras el antibiótico empieza a controlar la fuente de la infección. Y por favor, nunca espere el cultivo para dar el antibiótico: extráigalo rápido, sí, pero si eso le va a tomar más de unos minutos, dé el antibiótico de todas formas; la ventana de oro para reducir mortalidad en sepsis se mide en minutos-horas, no en el tiempo que tarda el laboratorio en procesar una muestra.",
    keyPoints: [
      "Shock séptico: hipotensión persistente pese a fluidoterapia adecuada + hipoperfusión (lactato elevado); manejo de la primera hora es crítico para el pronóstico.",
      "Hemocultivos y antibioterapia empírica de amplio espectro inmediata (sin esperar resultados microbiológicos); norepinefrina como vasopresor de primera elección si persiste la hipotensión.",
      "No insistir indefinidamente en bolos de cristaloides sin vasopresores una vez administrado un volumen adecuado; riesgo de sobrecarga de volumen.",
    ],
  },
];
