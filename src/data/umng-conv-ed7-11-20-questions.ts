import type { TrainingQuestion } from "@/lib/questions/types";

export const UMNG_CONV_ED7_11_20_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed7-11",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "TOXICIDAD POR SULFATO DE MAGNESIO EN ECLAMPSIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Una mujer de 19 años, primigestante, con 34 semanas de gestación y preeclampsia con criterios de severidad, además de antecedente de enfermedad renal crónica (creatinina basal 2.1 mg/dL), presenta una convulsión tónico-clónica generalizada. Se administra la dosis de carga de Sulfato de Magnesio (4 g IV) y se inicia infusión de mantenimiento a 1 g/hora. Cuatro horas después, la paciente presenta una SEGUNDA convulsión tónico-clónica. Al examinarla en ese momento, antes de decidir cualquier conducta, el personal de enfermería reporta reflejos patelares ausentes bilateralmente y una frecuencia respiratoria de 10 respiraciones por minuto. ¿Cuál es la conducta MÁS APROPIADA ante este escenario específico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar una segunda dosis de carga de Sulfato de Magnesio (2-4 g IV adicionales) de inmediato, sin evaluar los reflejos ni la frecuencia respiratoria, ya que toda convulsión recurrente se maneja igual.",
      },
      {
        id: "B",
        label: "B",
        text: "Aumentar la infusión de mantenimiento de Sulfato de Magnesio a 3 g/hora para \"reforzar\" el efecto anticonvulsivante ante la recurrencia.",
      },
      {
        id: "C",
        label: "C",
        text: "Suspender inmediatamente el Sulfato de Magnesio, administrar Gluconato de Calcio IV como antídoto de la toxicidad, controlar la convulsión activa con una benzodiacepina (p. ej. Lorazepam), y reevaluar la función renal y los niveles séricos de magnesio antes de decidir si reiniciar el fármaco a dosis ajustada.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar Fenitoína IV como reemplazo definitivo del Sulfato de Magnesio en toda paciente con enfermedad renal crónica, sin necesidad de vigilar signos de toxicidad previamente.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Esta paciente tiene DOS problemas simultáneos que hay que distinguir con cuidado: una convulsión eclámptica recurrente Y signos clínicos claros de **toxicidad por magnesio** (arreflexia patelar y depresión respiratoria con FR de 10 rpm), agravados por su enfermedad renal crónica de base, que reduce drásticamente la depuración renal del magnesio y favorece su acumulación tóxica. A diferencia del escenario habitual donde una convulsión recurrente se trata repitiendo la carga de Sulfato de Magnesio, aquí repetir la dosis sería peligroso porque la paciente YA está intoxicada: la progresión clásica de la toxicidad por magnesio es pérdida de reflejos osteotendinosos (~7-10 mEq/L), seguida de depresión respiratoria (~10-15 mEq/L) y, si no se corrige, paro cardiorrespiratorio (>15-20 mEq/L). La conducta correcta es **suspender el Sulfato de Magnesio**, administrar el antídoto específico (**Gluconato de Calcio IV**), controlar la convulsión activa con un anticonvulsivante alternativo de acción rápida (benzodiacepina), y solo después reevaluar función renal y niveles séricos de magnesio para decidir si se reinicia el fármaco a una dosis de mantenimiento reducida y con monitorización estrecha.\n\n**TRAMPA DEL EXAMEN:** El estudiante que memorizó \"convulsión recurrente = repetir la carga de Magnesio\" cae directo en la trampa si no lee con atención los signos vitales adicionales del enunciado. Aquí el examen le está dando deliberadamente los signos de toxicidad (reflejos ausentes, FR de 10) junto con la convulsión recurrente, precisamente para ver si usted evalúa a la paciente ANTES de repetir la dosis por reflejo, en lugar de aplicar la misma respuesta mecánica de otros casos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta es la razón por la que nunca, nunca, se debe repetir una dosis de Sulfato de Magnesio \"a ciegas\" solo porque la paciente convulsionó de nuevo: antes de tocar la bomba de infusión, revise reflejos patelares, frecuencia respiratoria y diuresis, siempre, en cada reevaluación. En esta paciente con enfermedad renal crónica, el magnesio se está acumulando más rápido de lo esperado porque el riñón no lo está aclarando bien, y los signos que le están mostrando (arreflexia, bradipnea) son una alarma roja de que ya está en zona tóxica, no de que necesite más fármaco. El gluconato de calcio es su as bajo la manga: revierte rápidamente la toxicidad neuromuscular y respiratoria del magnesio. Para la convulsión activa en ese momento, use una benzodiacepina de acción corta mientras resuelve el cuadro de toxicidad, y luego, con la paciente ya calcio-tratada y reevaluada, decida si reinicia el magnesio a una dosis mucho más conservadora, con niveles séricos seriados. Y no lo olvide: en insuficiencia renal, la dosis de mantenimiento de magnesio siempre se ajusta a la baja desde el inicio, idealmente guiada por niveles.",
    keyPoints: [
      "Antes de repetir una dosis de Sulfato de Magnesio ante convulsión recurrente, siempre evaluar signos de toxicidad: reflejos patelares, frecuencia respiratoria y diuresis.",
      "En enfermedad renal crónica el magnesio se acumula por depuración renal reducida: ajustar la dosis de mantenimiento a la baja y monitorizar niveles séricos.",
      "Toxicidad por magnesio: antídoto es Gluconato de Calcio IV; la convulsión activa se controla con benzodiacepina mientras se resuelve la toxicidad, no repitiendo la carga.",
    ],
  },
  {
    id: "umng-conv-ed7-12",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "HEMORRAGIA POSPARTO - CÓDIGO ROJO OBSTÉTRICO",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Una mujer de 29 años tiene un parto vaginal de gemelos a las 39 semanas. Inmediatamente después del alumbramiento espontáneo y completo de la placenta, presenta sangrado vaginal abundante y continuo, con estimación de pérdida sanguínea mayor a 1000 mL en pocos minutos. Al examen, el útero se palpa blando, aumentado de tamaño, con el fondo mal delimitado y sin la consistencia firme y leñosa esperada tras el alumbramiento. Los signos vitales muestran PA 90/55 mmHg y FC 118 lpm. ¿Cuál es la causa MÁS PROBABLE de esta hemorragia posparto, y cuál es la PRIMERA medida terapéutica dentro del manejo escalonado (código rojo obstétrico)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Atonía uterina (causa más frecuente de hemorragia posparto, dentro de la regla de las \"4 T\"); manejo inicial: masaje uterino bimanual asociado a Oxitocina IV (uterotónico de primera línea), mientras se activa en paralelo el código rojo (accesos venosos de grueso calibre, reanimación con líquidos y hemoderivados según necesidad).",
      },
      {
        id: "B",
        label: "B",
        text: "Ruptura uterina; la conducta inicial es laparotomía exploratoria inmediata, sin intentar ninguna medida médica previa.",
      },
      {
        id: "C",
        label: "C",
        text: "Retención de restos placentarios; la conducta inicial es legrado uterino instrumental de urgencia, antes de administrar cualquier uterotónico.",
      },
      {
        id: "D",
        label: "D",
        text: "Coagulopatía de consumo como causa primaria; la conducta inicial es transfusión masiva de plasma fresco congelado exclusivamente, sin necesidad de uterotónicos.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El hallazgo de un útero **blando, aumentado de tamaño y mal contraído** ('útero en bolsa') inmediatamente tras el alumbramiento, en el contexto de una hemorragia posparto masiva, es el cuadro clásico de **atonía uterina**, la causa más frecuente de hemorragia posparto (aproximadamente el 70% de los casos), dentro de la regla mnemotécnica de las \"4 T\" (Tono, Trauma, Tejido, Trombina). El manejo escalonado inicia con medidas de bajo riesgo y alta efectividad: **masaje uterino bimanual** (que estimula la contracción miometrial y facilita la identificación de coágulos retenidos) asociado a **Oxitocina intravenosa** como uterotónico de primera línea, todo esto en paralelo con la activación del **código rojo obstétrico** (dos accesos venosos de grueso calibre, reanimación con cristaloides, solicitud y reserva de hemoderivados, monitorización estrecha, y aviso al equipo multidisciplinario). Si estas medidas no logran controlar el sangrado, se escala a uterotónicos de segunda línea (Metilergonovina, Misoprostol, Carbetocina), Ácido Tranexámico temprano, y posteriormente a medidas mecánicas (taponamiento con balón, suturas compresivas tipo B-Lynch) y quirúrgicas (ligadura de arterias uterinas, histerectomía) si persiste refractaria.\n\n**TRAMPA DEL EXAMEN:** Ante una hemorragia posparto masiva, el estudiante nervioso tiende a saltar directamente a medidas invasivas (legrado, laparotomía) sin haber intentado primero las medidas de primera línea, sistemáticas y de bajo riesgo (masaje + oxitocina), que resuelven la inmensa mayoría de los casos de atonía. La escalada quirúrgica se reserva para cuando estas medidas fallan, no como primer paso.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el código rojo obstétrico se gana en los primeros minutos, y ese útero blando que usted está palpando con el fondo \"perdido\" le está gritando atonía uterina antes de que le lleguen los resultados de ningún laboratorio. Masajee el útero con firmeza mientras alguien más canaliza dos venas gruesas y pide sangre; ponga la Oxitocina corriendo de inmediato. No espere a ver si \"mejora sola\": en hemorragia posparto, cada minuto sin uterotónico es más sangre perdida. Si en los primeros minutos no responde adecuadamente, no se quede repitiendo la misma medida indefinidamente; escale rápido a la segunda línea de uterotónicos y administre Ácido Tranexámico temprano (el estudio WOMAN mostró que reduce mortalidad si se da dentro de las primeras 3 horas). El taponamiento con balón y las suturas compresivas son su puente antes de llegar a cirugía mayor, y la histerectomía es el último recurso, no el primero.",
    keyPoints: [
      "Atonía uterina es la causa más frecuente de hemorragia posparto (regla de las 4 T: Tono, Trauma, Tejido, Trombina); se reconoce por útero blando, aumentado de tamaño, mal contraído.",
      "Manejo escalonado: masaje uterino bimanual + Oxitocina IV primera línea, con código rojo activado en paralelo (accesos venosos, líquidos, hemoderivados).",
      "Si no responde: uterotónicos de segunda línea + Ácido Tranexámico temprano, luego taponamiento con balón/suturas compresivas, y cirugía (ligadura arterial/histerectomía) como último recurso.",
    ],
  },
  {
    id: "umng-conv-ed7-13",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "RUPTURA UTERINA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Una mujer de 33 años, G3P2 (dos cesáreas previas), con 38 semanas de gestación, se encuentra en trabajo de parto realizando una prueba de trabajo de parto tras cesárea (TOLAC), con inducción/conducción con infusión de Oxitocina. Súbitamente refiere dolor abdominal intenso y CONTINUO, distinto al dolor intermitente que tenía con las contracciones previas. La enfermera reporta que el tocómetro ya no registra actividad uterina y que la frecuencia cardíaca fetal muestra bradicardia sostenida severa. Al examen, la presentación fetal cefálica que antes estaba encajada ahora se palpa alta y no descendida, y la paciente presenta palidez, taquicardia e hipotensión incipiente. ¿Cuál es el diagnóstico más probable, y cuál es la conducta INMEDIATA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Desprendimiento de placenta normoinserta; manejo expectante con monitoria fetal continua, sin necesidad de cesárea inmediata.",
      },
      {
        id: "B",
        label: "B",
        text: "Trabajo de parto normal en fase activa avanzada; continuar la prueba de trabajo de parto con la infusión de Oxitocina sin realizar cambios en la conducta.",
      },
      {
        id: "C",
        label: "C",
        text: "Corioamnionitis con sufrimiento fetal secundario; iniciar antibióticos de amplio espectro y continuar la vía vaginal.",
      },
      {
        id: "D",
        label: "D",
        text: "Ruptura uterina (alto riesgo por cicatriz de cesárea previa sometida a TOLAC con Oxitocina); realizar cesárea de emergencia (laparotomía urgente) inmediata para la extracción fetal y el control quirúrgico del sangrado materno.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El cuadro descrito corresponde a la **tríada clásica de ruptura uterina**: dolor abdominal súbito e intenso que cambia de carácter (continuo, ya no relacionado con las contracciones), **cese abrupto de la actividad uterina** en el tocómetro, **pérdida de la estación de la presentación fetal** (la cabeza que estaba encajada 'se sube'), y **bradicardia fetal sostenida severa**, todo esto acompañado de signos incipientes de choque hipovolémico materno. El principal factor de riesgo es la **cicatriz uterina previa por cesárea** sometida a una prueba de trabajo de parto (TOLAC), riesgo que se amplifica significativamente con el uso de **Oxitocina** para inducción/conducción. Ante esta sospecha clínica, la conducta es una **cesárea/laparotomía de EMERGENCIA inmediata**, sin retrasar la intervención por estudios adicionales, con el doble objetivo de extraer al feto en la ventana de tiempo más corta posible y controlar quirúrgicamente el sangrado materno (reparación del defecto uterino o histerectomía si el sangrado no se logra controlar).\n\n**TRAMPA DEL EXAMEN:** La bradicardia fetal severa aislada podría hacer pensar en un simple sufrimiento fetal agudo manejable con maniobras de reanimación intrauterina (cambio de posición, oxígeno, suspender oxitocina), pero la combinación con dolor súbito de características distintas, cese de la actividad uterina y pérdida de la estación fetal en una paciente con cesárea previa en TOLAC configura una emergencia quirúrgica que no admite maniobras conservadoras ni demoras.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la ruptura uterina es de esas complicaciones donde los minutos literalmente definen si el bebé sobrevive con secuelas neurológicas o no, y si la madre termina con o sin su útero. En una paciente con cesárea previa en TOLAC, cualquier cambio brusco en el patrón de dolor, sumado a pérdida de la actividad uterina en el monitor y bradicardia fetal sostenida, debe encender todas sus alarmas de inmediato. No pierda tiempo pidiendo ecografía para \"confirmar\" el diagnóstico ni esperando a ver si la bradicardia se recupera sola: actívese, avise a quirófano, y lleve a la paciente a cesárea de emergencia ya. Una vez en cirugía, además de extraer al bebé lo más rápido posible, su siguiente prioridad es controlar el sangrado materno del defecto uterino; en la mayoría de los casos se logra reparar, pero en rupturas extensas o con sangrado incontrolable, la histerectomía salva la vida de la madre.",
    keyPoints: [
      "Tríada clásica de ruptura uterina: dolor abdominal súbito e intenso y continuo + cese de la actividad uterina + pérdida de la estación fetal + bradicardia fetal severa.",
      "Principal factor de riesgo: cesárea previa sometida a prueba de trabajo de parto (TOLAC), amplificado por el uso de Oxitocina/inductores.",
      "Manejo: cesárea/laparotomía de EMERGENCIA inmediata para extracción fetal y control del sangrado materno (reparación uterina o histerectomía si no se controla).",
    ],
  },
  {
    id: "umng-conv-ed7-14",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "EMBARAZO ECTÓPICO ROTO",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Una mujer de 27 años, con fecha de última regla hace 7 semanas y prueba de embarazo en orina positiva, consulta al servicio de urgencias por dolor abdominal súbito e intenso en fosa ilíaca derecha, irradiado al hombro derecho, con un episodio sincopal previo al ingreso. Al examen físico se encuentra pálida, con PA 82/50 mmHg, FC 128 lpm, y abdomen en tabla con signos claros de irritación peritoneal generalizada. No se cuenta de forma inmediata con ecografía transvaginal por la inestabilidad de la paciente. ¿Cuál es la conducta INMEDIATA más apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar beta-hCG cuantitativa seriada cada 48 horas para confirmar el diagnóstico antes de decidir cualquier conducta terapéutica.",
      },
      {
        id: "B",
        label: "B",
        text: "Laparotomía/laparoscopia exploratoria de urgencia inmediata (sin esperar estudios adicionales confirmatorios), con reanimación simultánea (líquidos IV, solicitud de hemoderivados), dado el cuadro de abdomen agudo con inestabilidad hemodinámica altamente sugestivo de embarazo ectópico roto.",
      },
      {
        id: "C",
        label: "C",
        text: "Manejo médico expectante con Metotrexato intramuscular, ya que es el tratamiento de elección independientemente del estado hemodinámico de la paciente.",
      },
      {
        id: "D",
        label: "D",
        text: "Dar egreso con analgesia oral y control ambulatorio en una semana, ya que el dolor irradiado al hombro es un hallazgo inespecífico sin relevancia diagnóstica.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El cuadro clínico es altamente sugestivo de un **embarazo ectópico roto** con hemoperitoneo significativo: dolor abdominal súbito, prueba de embarazo positiva con amenorrea de pocas semanas, dolor irradiado al hombro (**signo de Kehr**, por irritación diafragmática secundaria a la sangre libre en cavidad peritoneal), síncope, abdomen en tabla con irritación peritoneal, e **inestabilidad hemodinámica franca** (hipotensión, taquicardia). En este escenario, el diagnóstico es esencialmente CLÍNICO y la conducta es una **urgencia quirúrgica inmediata**: no se debe retrasar la cirugía esperando confirmación con beta-hCG seriada ni con ecografía, ya que cada minuto de retraso permite mayor pérdida sanguínea hacia la cavidad abdominal. Se lleva a la paciente a **laparotomía o laparoscopia de urgencia** (según disponibilidad y estabilidad relativa) con **reanimación hemodinámica simultánea** (líquidos cristaloides, hemoderivados según necesidad, tipificación y reserva de sangre).\n\n**TRAMPA DEL EXAMEN:** El estudiante bien entrenado en el algoritmo \"clásico\" del ectópico (beta-hCG + ecografía transvaginal para localizar el saco) puede caer en la trampa de querer \"confirmar\" el diagnóstico antes de actuar, olvidando que ante inestabilidad hemodinámica franca el manejo cambia por completo: se opera con sospecha clínica fundamentada, sin esperar estudios que solo retrasarían una intervención que ya no admite demora.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el hemoperitoneo mata rápido, y un embarazo ectópico roto con la paciente hipotensa y taquicárdica en su camilla no le está dando tiempo para pedir ecografías ni esperar una segunda beta-hCG en 48 horas. El signo de Kehr (ese dolor que 'viaja' hasta el hombro) es oro puro en el examen físico: sangre libre irritando el diafragma, punto. En el ectópico roto e inestable, el quirófano ES la sala de reanimación: mientras el anestesiólogo y usted reponen volumen y piden sangre cruzada, el cirujano ya debe estar preparando el campo. El Metotrexato es una excelente opción, pero solo para el ectópico NO roto, en paciente hemodinámicamente estable, con criterios específicos (beta-hCG relativamente baja, masa pequeña, sin actividad cardíaca embrionaria); en este escenario está completamente contraindicado.",
    keyPoints: [
      "Embarazo ectópico roto = urgencia quirúrgica: dolor súbito + signo de Kehr (dolor irradiado al hombro) + inestabilidad hemodinámica + síncope configuran un abdomen agudo hemorrágico.",
      "Con paciente inestable, NO se debe esperar confirmación por beta-hCG seriada ni ecografía: se procede a cirugía de urgencia con reanimación simultánea.",
      "El Metotrexato solo aplica en ectópico NO roto, hemodinámicamente estable, con criterios específicos (beta-hCG baja, masa pequeña, sin actividad cardíaca embrionaria).",
    ],
  },
  {
    id: "umng-conv-ed7-15",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "SÍNDROME HELLP",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Una mujer de 31 años, con 33 semanas de gestación y diagnóstico de preeclampsia hace una semana en manejo ambulatorio, consulta por dolor en epigastrio y en hipocondrio derecho de inicio reciente, asociado a náuseas y malestar general. Al examen, PA 158/102 mmHg. Los laboratorios muestran: frotis de sangre periférica con esquistocitos, LDH elevada, bilirrubina indirecta elevada (datos de hemólisis), AST y ALT tres veces por encima del valor normal, y recuento de plaquetas de 68.000/mm³. ¿Cuál es el diagnóstico más probable, y cuál es la conducta terapéutica DEFINITIVA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome HELLP (Hemólisis, enzimas hepáticas Elevadas, Plaquetas bajas), variante severa de preeclampsia; la conducta definitiva es la finalización del embarazo (parto) tras estabilización materna, independientemente de la edad gestacional, sin retrasar significativamente el parto ante deterioro materno.",
      },
      {
        id: "B",
        label: "B",
        text: "Hígado graso agudo del embarazo; manejo con dieta baja en grasas y control ambulatorio semanal, sin necesidad de finalizar el embarazo de forma urgente.",
      },
      {
        id: "C",
        label: "C",
        text: "Colecistitis aguda litiásica; manejo con colecistectomía laparoscópica electiva en el puerperio.",
      },
      {
        id: "D",
        label: "D",
        text: "Hepatitis viral aguda concomitante; manejo sintomático exclusivamente, sin relación con el embarazo ni necesidad de finalizarlo.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro corresponde al **Síndrome HELLP** (por sus siglas en inglés: Hemolysis, Elevated Liver enzymes, Low Platelets), considerado una variante severa/complicación de la preeclampsia, caracterizado por la tríada de **hemólisis microangiopática** (esquistocitos en el frotis, LDH elevada, bilirrubina indirecta elevada), **enzimas hepáticas elevadas** (AST/ALT), y **trombocitopenia** (<100.000/mm³). El dolor en epigastrio/hipocondrio derecho es un hallazgo clave y se debe a la **distensión de la cápsula hepática (cápsula de Glisson)** por edema e inflamación del parénquima hepático, siendo un signo de alarma de posible **hematoma subcapsular hepático**, con riesgo de ruptura hepática, una complicación catastrófica. La conducta terapéutica DEFINITIVA del Síndrome HELLP es la **finalización del embarazo** tras una breve estabilización materna (control tensional, Sulfato de Magnesio profiláctico para convulsiones, corrección de coagulopatía si existe), **independientemente de la edad gestacional** cuando hay deterioro materno significativo; solo en casos seleccionados, con estabilidad materno-fetal y menos de 34 semanas, se puede considerar un retraso breve de 24-48 horas para administrar corticoides de maduración pulmonar fetal, pero nunca a expensas de la seguridad materna.\n\n**TRAMPA DEL EXAMEN:** El estudiante puede pensar que, por tratarse de una gestación pretérmino de 33 semanas, se debe priorizar \"esperar\" para lograr la maduración pulmonar fetal completa antes de finalizar. Sin embargo, el Síndrome HELLP es impredecible y puede deteriorarse abruptamente (hematoma/ruptura hepática, coagulación intravascular diseminada, eclampsia, desprendimiento de placenta), por lo que el parto no se retrasa de forma significativa una vez hecho el diagnóstico con deterioro materno.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando vea una gestante con preeclampsia que empieza a quejarse de dolor en el hipocondrio derecho, piense inmediatamente en la cápsula hepática distendida y pida de una vez el cuadro completo: frotis con esquistocitos, LDH, bilirrubinas, transaminasas y plaquetas. El Síndrome HELLP es traicionero porque puede progresar en horas hacia un hematoma subcapsular hepático que, si se rompe, es una hemorragia intraabdominal masiva con mortalidad altísima. No se deje tentar por la idea de \"ganar tiempo\" para la madurez pulmonar fetal a toda costa; si la madre se está deteriorando, el embarazo se termina, punto. Si el cuadro le permite un margen de 24-48 horas con estabilidad razonable y menos de 34 semanas, dé una dosis de corticoides mientras prepara el parto, pero tenga siempre el quirófano listo, porque esta paciente puede cambiar de estable a crítica en cuestión de horas.",
    keyPoints: [
      "Síndrome HELLP: Hemólisis + Enzimas hepáticas elevadas + Plaquetopenia, variante severa de preeclampsia; el dolor en epigastrio/hipocondrio derecho refleja distensión de la cápsula hepática.",
      "Tratamiento definitivo: FINALIZAR el embarazo, independientemente de la edad gestacional, si hay deterioro materno.",
      "Riesgo temido: hematoma subcapsular hepático con ruptura; vigilar plaquetas, LDH y transaminasas, y administrar Sulfato de Magnesio profiláctico.",
    ],
  },
  {
    id: "umng-conv-ed7-16",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "PLACENTA PREVIA CON SANGRADO ACTIVO",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Una mujer de 35 años, G4P2, con 32 semanas de gestación y diagnóstico ecográfico de placenta previa oclusiva total realizado a las 28 semanas, ingresa a urgencias por sangrado vaginal rojo rutilante, abundante, de inicio súbito e indoloro hace una hora. Al ingreso: PA 100/65 mmHg, FC 105 lpm, sangrado activo continuo estimado en 600 mL, frecuencia cardíaca fetal 150 lpm con trazado reactivo. ¿Cuál es la conducta INMEDIATA más apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar tacto vaginal digital para evaluar la dilatación cervical antes de cualquier otra medida, ya que es el primer paso obligatorio en toda hemorragia del tercer trimestre.",
      },
      {
        id: "B",
        label: "B",
        text: "Indicar manejo expectante ambulatorio con reposo en casa, ya que el sangrado en placenta previa siempre cede espontáneamente sin necesidad de hospitalización.",
      },
      {
        id: "C",
        label: "C",
        text: "Hospitalización inmediata, accesos venosos y reanimación con líquidos/hemoderivados según necesidad, monitoria fetal continua, y cesárea de urgencia si el sangrado es persistente/significativo o hay compromiso materno-fetal, evitando SIEMPRE el tacto vaginal digital.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar inducción de trabajo de parto vaginal con Oxitocina, ya que en placenta previa la vía del parto es siempre vaginal cuando el sangrado es de intensidad leve a moderada.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "La placenta previa se manifiesta clásicamente con **sangrado vaginal rojo rutilante, INDOLORO**, de aparición súbita en el segundo o tercer trimestre. Ante un episodio de sangrado activo, la conducta es **hospitalización inmediata** con estabilización materna (accesos venosos, reanimación con líquidos y hemoderivados según la magnitud del sangrado, tipificación y reserva de sangre) y **monitoria fetal continua**. Un principio fundamental e innegociable en la placenta previa es que **NUNCA se debe realizar tacto vaginal digital**, ya que puede desprender la placenta de su inserción anómala sobre o cerca del orificio cervical interno y desencadenar una hemorragia catastrófica; la evaluación se hace mediante ecografía (transabdominal o transvaginal cuidadosa), que es segura. Según la severidad del sangrado y el compromiso materno-fetal, se decide entre manejo expectante hospitalario (con corticoides para maduración pulmonar fetal si el embarazo es pretérmino y la paciente está estable) o **cesárea de urgencia** si el sangrado es persistente, significativo, o hay compromiso materno-fetal; en la placenta previa oclusiva total, la vía del parto es SIEMPRE cesárea, nunca vaginal.\n\n**TRAMPA DEL EXAMEN:** El reflejo de realizar un tacto vaginal como \"primer paso\" ante cualquier sangrado del tercer trimestre es exactamente la trampa mortal en placenta previa: a diferencia de otras causas de sangrado obstétrico, aquí el tacto vaginal está formalmente contraindicado hasta que se haya descartado la inserción baja de la placenta por ecografía. Otra trampa es asumir que, por ser un sangrado \"leve a moderado\", la vía del parto puede ser vaginal; en placenta previa oclusiva total, la cesárea es obligatoria.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., grábese esta regla de oro: en placenta previa, NUNCA tacto vaginal. Ese dedo explorador puede desgarrar los vasos placentarios que están literalmente sobre el orificio cervical y provocar una hemorragia que usted no va a poder controlar a tiempo. Confirme o reevalúe siempre con ecografía, que es segura y no manipula la zona placentaria. Una vez hospitalizada, estabilice a la madre, monitorice al feto de forma continua, y si el embarazo es pretérmino y la paciente está estable, aprovecha la ventana para dar corticoides de maduración pulmonar y tener sangre cruzada lista en el banco por si el sangrado se reactiva. Pero si el sangrado es persistente o hay cualquier signo de compromiso materno o fetal, no se demore: cesárea de urgencia, porque en la previa oclusiva total el parto vaginal simplemente no es una opción segura.",
    keyPoints: [
      "Placenta previa: sangrado vaginal rojo rutilante, INDOLORO, en segundo/tercer trimestre. NUNCA realizar tacto vaginal digital (riesgo de hemorragia catastrófica).",
      "Manejo: hospitalización, estabilización materna (líquidos/hemoderivados), monitoria fetal continua, y evaluación por ecografía (no por tacto vaginal).",
      "Vía del parto: SIEMPRE cesárea en placenta previa oclusiva total; se realiza de urgencia si el sangrado es significativo/persistente o hay compromiso materno-fetal.",
    ],
  },
  {
    id: "umng-conv-ed7-17",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "CORIOAMNIONITIS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Una mujer de 24 años, con 39 semanas de gestación, presenta ruptura prematura de membranas hace 20 horas y se encuentra en trabajo de parto con monitoria fetal continua. Desarrolla fiebre materna de 38.4°C y taquicardia materna de 118 lpm. El trazado de monitoria muestra taquicardia fetal sostenida de 175 lpm. Al examen, el líquido amniótico que drena tiene olor fétido y aspecto purulento. Los laboratorios muestran leucocitosis de 18.000/mm³ con desviación a la izquierda. ¿Cuál es el diagnóstico más probable, y cuál es la conducta terapéutica apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Corioamnionitis; manejo únicamente con antipiréticos, esperando el parto espontáneo sin iniciar antibióticos hasta contar con resultados de cultivo positivo.",
      },
      {
        id: "B",
        label: "B",
        text: "Corioamnionitis (infección intraamniótica); manejo con antibióticos de amplio espectro IV de inicio inmediato (p. ej. Ampicilina + Gentamicina), sin retrasar el inicio por esperar cultivos, y finalización expedita del parto por la vía más apropiada (la corioamnionitis por sí sola no es indicación absoluta de cesárea).",
      },
      {
        id: "C",
        label: "C",
        text: "Corioamnionitis; manejo con cesárea electiva programada en 48 horas, tras completar un ciclo de maduración cervical previa.",
      },
      {
        id: "D",
        label: "D",
        text: "Fiebre puerperal de causa no infecciosa; manejo expectante sin antibióticos, considerando la taquicardia fetal como una respuesta fisiológica normal al trabajo de parto.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El cuadro cumple criterios de **corioamnionitis (infección/inflamación intraamniótica, también llamada \"Triple I\")**: fiebre materna ≥38°C junto con criterios adicionales de sospecha como **taquicardia materna, taquicardia fetal sostenida, líquido amniótico fétido/purulento y leucocitosis materna con desviación a la izquierda**, en el contexto de un factor de riesgo clásico como la **ruptura prolongada de membranas**. El manejo requiere el inicio **inmediato de antibióticos intravenosos de amplio espectro** (esquema clásico: Ampicilina + Gentamicina, agregando cobertura anaerobia como Clindamicina o Metronidazol si se realiza cesárea), **sin esperar el resultado de cultivos**, dado que el retraso del tratamiento se asocia a mayor riesgo de sepsis materna y neonatal. En paralelo, se busca la **finalización expedita del parto**, pero es importante recordar que la corioamnionitis, por sí sola, **NO es una indicación absoluta de cesárea**: la vía del parto se decide según los criterios obstétricos habituales (progresión del trabajo de parto, bienestar fetal), prefiriendo la vía vaginal si el progreso es adecuado.\n\n**TRAMPA DEL EXAMEN:** Dos trampas comunes aquí: primero, esperar el resultado de cultivos antes de iniciar antibióticos, lo cual retrasa peligrosamente un tratamiento que debe ser empírico e inmediato; segundo, asumir que toda corioamnionitis obliga a una cesárea, cuando en realidad la vía del parto sigue las indicaciones obstétricas habituales y la vía vaginal es preferible si el trabajo de parto progresa bien.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ante la sospecha de corioamnionitis, el antibiótico no espera resultados de laboratorio: se administra de forma empírica e inmediata apenas se establece la sospecha clínica, porque cada hora de retraso aumenta el riesgo de sepsis neonatal, que es la verdadera pesadilla de este cuadro (piense en ese recién nacido que va a nacer bañado en un líquido amniótico infectado). Ampicilina más Gentamicina es el esquema clásico que debe salir de memoria. Y no cometa el error de pensar que corioamnionitis es sinónimo automático de cesárea: si el trabajo de parto va progresando adecuadamente y el feto tolera bien, la vía vaginal es perfectamente válida y hasta preferible, porque la cesárea en presencia de infección intraamniótica tiene mayor riesgo de complicaciones como endometritis posoperatoria y dehiscencia de la herida. La meta es un parto expedito, por la vía que sea más segura y eficiente según la evolución obstétrica.",
    keyPoints: [
      "Corioamnionitis (Triple I): fiebre materna + taquicardia materna/fetal + líquido amniótico fétido/purulento + leucocitosis, típicamente asociada a ruptura prolongada de membranas.",
      "Manejo: antibióticos IV de amplio espectro INMEDIATOS (Ampicilina + Gentamicina), sin esperar cultivos, más finalización expedita del parto.",
      "La corioamnionitis NO es indicación absoluta de cesárea; la vía del parto se decide según criterios obstétricos habituales.",
    ],
  },
  {
    id: "umng-conv-ed7-18",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "DISTOCIA DE HOMBROS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Durante un parto vaginal, la cabeza fetal sale pero se retrae inmediatamente contra el periné materno (\"signo de la tortuga\"), y la extracción de los hombros no progresa con la tracción habitual hacia abajo. El peso fetal estimado es de 4200 g, y la madre tiene diagnóstico de diabetes gestacional en tratamiento con insulina. ¿Cuál es la secuencia INICIAL de maniobras recomendadas ante esta distocia de hombros?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aplicar tracción axial fuerte y sostenida sobre la cabeza fetal, junto con presión fúndica manual firme, como primeras maniobras para desimpactar el hombro anterior.",
      },
      {
        id: "B",
        label: "B",
        text: "Realizar cesárea de emergencia inmediata, ya que una vez que la cabeza fetal ha salido no existen maniobras vaginales útiles para resolver la distocia de hombros.",
      },
      {
        id: "C",
        label: "C",
        text: "Aplicar fórceps para tracción adicional sobre la cabeza fetal como primera medida, antes de intentar cualquier maniobra manual materna.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar ayuda inmediata del equipo, evitar la tracción excesiva y la presión fúndica; iniciar con la maniobra de McRoberts (hiperflexión e hiperabducción de las caderas maternas) más presión suprapúbica y, si no se resuelve, continuar con maniobras internas (rotación de Woods/Rubin, extracción del hombro posterior).",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El \"signo de la tortuga\" y la falla en la extracción de los hombros con la tracción habitual, en un feto con factor de riesgo de macrosomía (madre con diabetes gestacional, peso estimado >4000 g), son el cuadro típico de **distocia de hombros**, una emergencia obstétrica en la que cada segundo de retraso aumenta el riesgo de asfixia fetal y de lesión traumática. El manejo sigue un algoritmo escalonado (mnemotecnia HELPERR): **pedir ayuda inmediata** (equipo obstétrico, neonatología, anestesia), **evitar la tracción axial excesiva sobre la cabeza fetal y la presión fúndica** (ambas maniobras empeoran la impactación del hombro contra la sínfisis del pubis y aumentan drásticamente el riesgo de lesión del plexo braquial y de fractura de clavícula/húmero), e iniciar con la **maniobra de McRoberts** (hiperflexión e hiperabducción extrema de las caderas maternas sobre el abdomen, que rectifica el ángulo lumbosacro) asociada a **presión suprapúbica** (no fúndica), maniobra que resuelve la mayoría de los casos. Si esto no es suficiente, se continúa con **maniobras internas** (rotación de Woods/Rubin para rotar el hombro posterior hacia una posición oblicua, o extracción activa del brazo/hombro posterior), reservando maniobras de último recurso (como la maniobra de Zavanelli) para los casos verdaderamente refractarios.\n\n**TRAMPA DEL EXAMEN:** El instinto de \"halar más duro\" o pedir a un ayudante que empuje el fondo uterino para \"ayudar a sacar\" al bebé es precisamente la conducta que el examen busca que usted identifique como INCORRECTA: ambas maniobras empeoran la impactación del hombro y son la causa clásica de parálisis de Erb-Duchenne (lesión del plexo braquial) y de fracturas óseas fetales.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., grábese esto: en distocia de hombros, nunca hale duro y nunca empuje el fondo uterino. Ambas maniobras solo logran encajar más el hombro anterior contra el pubis materno y son la receta perfecta para una lesión permanente del plexo braquial del bebé. Pida ayuda de inmediato, en voz alta, porque va a necesitar varias manos. La McRoberts es su primera jugada porque es rápida, no invasiva, y resuelve la mayoría de los casos simplemente cambiando la geometría de la pelvis materna; combínela con presión suprapúbica (no fúndica) para ayudar a desimpactar el hombro anterior. Si con esto no se resuelve en los siguientes segundos, entre con las maniobras internas: rote el hombro posterior hacia una posición oblicua (Woods/Rubin) o extraiga directamente el brazo posterior, que casi siempre libera el espacio suficiente para completar el parto. La calma y el orden de las maniobras, más que la fuerza, es lo que salva a este bebé sin secuelas.",
    keyPoints: [
      "Distocia de hombros: \"signo de la tortuga\" tras la salida de la cabeza fetal; factor de riesgo clásico: macrosomía fetal (asociada a diabetes gestacional/materna).",
      "NUNCA traccionar excesivamente la cabeza fetal ni aplicar presión fúndica (riesgo de lesión del plexo braquial y fracturas).",
      "Secuencia de manejo: pedir ayuda + maniobra de McRoberts + presión suprapúbica primero; si falla, maniobras internas (rotación de Woods/Rubin, extracción del hombro posterior).",
    ],
  },
  {
    id: "umng-conv-ed7-19",
    university: "UMNG",
    examArea: "GINECOLOGÍA ONCOLÓGICA",
    topic: "TAMIZACIÓN Y MANEJO DE LESIÓN CERVICAL ANORMAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Una mujer de 34 años, asintomática, sin antecedentes de citologías previas anormales, se realiza una citología cervicouterina (Papanicolaou) de tamización de rutina que reporta \"Lesión Intraepitelial Escamosa de Alto Grado (HSIL)\". La prueba de VPH de alto riesgo es positiva. ¿Cuál es la conducta apropiada ante este resultado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Repetir la citología en 12 meses, ya que un solo resultado anormal, sin importar el grado, no amerita estudios adicionales inmediatos.",
      },
      {
        id: "B",
        label: "B",
        text: "Remitir a Colposcopia con biopsia dirigida de las zonas anormales (y eventual estudio endocervical), dado que un resultado de HSIL requiere confirmación histológica para descartar una lesión de alto grado o un cáncer invasor subyacente.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar tratamiento con conización cervical inmediata, sin colposcopia previa, ya que el HSIL siempre requiere manejo quirúrgico de entrada sin necesidad de confirmación histológica dirigida.",
      },
      {
        id: "D",
        label: "D",
        text: "Indicar únicamente vacunación contra el VPH como manejo definitivo, dado que la vacuna tiene efecto terapéutico sobre las lesiones cervicales ya establecidas.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Un resultado citológico de **HSIL (Lesión Intraepitelial Escamosa de Alto Grado)**, especialmente asociado a una prueba de **VPH de alto riesgo positiva**, tiene un valor predictivo alto para la presencia de una lesión precancerosa significativa (NIC 2/3) o, con menor frecuencia, de un cáncer invasor subyacente, por lo que NO puede manejarse con observación ni con repetición de la citología. La conducta correcta es la remisión a **Colposcopia con biopsia dirigida** de las zonas cervicales anormales visualizadas (complementada con estudio endocervical si es necesario), que permite obtener la **confirmación histológica** requerida para definir el manejo definitivo. Una vez confirmada la lesión por histología, el tratamiento (procedimiento excisional tipo LEEP/conización, o en casos seleccionados manejo ablativo) se decide según el grado de la lesión, la edad y los deseos reproductivos de la paciente, pero NUNCA se realiza un procedimiento excisional \"a ciegas\" sin la confirmación histológica previa mediante colposcopia-biopsia, salvo protocolos específicos de \"ver y tratar\" reservados para contextos particulares.\n\n**TRAMPA DEL EXAMEN:** Dos trampas frecuentes: repetir la citología o esperar, subestimando el alto riesgo que implica un resultado de HSIL; y, en el extremo opuesto, saltar directamente a la conización sin colposcopia-biopsia previa, omitiendo el paso diagnóstico necesario. Otra trampa clásica es pensar que la vacuna contra el VPH puede \"tratar\" una lesión que ya está establecida: la vacuna es exclusivamente PROFILÁCTICA, previene nuevas infecciones y lesiones futuras, pero no tiene ningún efecto terapéutico sobre el tejido ya displásico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando el reporte de citología le diga HSIL, no hay espacio para \"esperar y ver\": esa paciente necesita colposcopia con biopsia dirigida, sí o sí, porque el riesgo de que haya una lesión de alto grado (o incluso cáncer invasor) por debajo de ese resultado citológico es demasiado alto para dejarlo pasar. La colposcopia le permite al ginecólogo ver directamente el cuello uterino, identificar las zonas anormales con ácido acético y lugol, y tomar biopsia dirigida de esos sitios específicos; con ese resultado histológico en la mano, ahí sí se decide el tratamiento definitivo, casi siempre un procedimiento excisional como el LEEP. Y por favor, aclárele siempre a sus pacientes el mito de la vacuna: la vacuna contra el VPH previene, no cura; una vez la lesión ya está formada, la vacuna no la va a hacer desaparecer, así que no sirve como tratamiento de un HSIL ya diagnosticado.",
    keyPoints: [
      "Citología HSIL con VPH de alto riesgo positivo = alto riesgo de lesión NIC 2/3 subyacente; requiere Colposcopia con biopsia dirigida, NO repetir citología ni observar.",
      "El tratamiento definitivo (conización/LEEP) se decide según la histología confirmada por colposcopia-biopsia, nunca de forma 'a ciegas'.",
      "La vacuna contra el VPH es PROFILÁCTICA (previene nuevas infecciones/lesiones), NO tiene efecto terapéutico sobre lesiones cervicales ya establecidas.",
    ],
  },
  {
    id: "umng-conv-ed7-20",
    university: "UMNG",
    examArea: "GINECOLOGÍA ONCOLÓGICA",
    topic: "MASA ANEXIAL SOSPECHOSA DE MALIGNIDAD",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed7"],
    statement:
      "Una mujer de 58 años, posmenopáusica y asintomática, tiene el hallazgo incidental en una ecografía abdominal (solicitada por otro motivo) de una masa anexial derecha de 7 cm, de características complejas: componente sólido-quístico, con septos gruesos, papilas/vegetaciones internas, y flujo Doppler central de baja resistencia. No se evidencia ascitis. El Ca-125 sérico se reporta elevado en 340 U/mL (valor normal <35 U/mL). ¿Cuál es la conducta apropiada ante este hallazgo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Remitir a Ginecología Oncológica para manejo quirúrgico especializado (estadificación quirúrgica completa: histerectomía + salpingooforectomía bilateral + estadificación ganglionar/peritoneal), dado el alto índice de sospecha de malignidad por la combinación de masa anexial compleja posmenopáusica y Ca-125 marcadamente elevado.",
      },
      {
        id: "B",
        label: "B",
        text: "Indicar manejo expectante con ecografías de control cada 6 meses, ya que la ausencia de síntomas en la paciente descarta razonablemente la posibilidad de malignidad.",
      },
      {
        id: "C",
        label: "C",
        text: "Realizar punción-aspiración con aguja fina (PAAF) de la masa por vía transvaginal como primer paso diagnóstico, antes de considerar cualquier manejo quirúrgico.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar quimioterapia empírica sin confirmación histológica, dado que un Ca-125 marcadamente elevado es por sí solo diagnóstico definitivo de cáncer de ovario.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "La combinación de una **masa anexial posmenopáusica de características ecográficas complejas** (componente sólido-quístico, septos gruesos, papilas/vegetaciones internas, flujo Doppler central) junto con un **Ca-125 marcadamente elevado** configura un cuadro de **alto riesgo de malignidad ovárica** (herramientas de estratificación de riesgo como el Índice de Riesgo de Malignidad -RMI-, que combina estado menopáusico, hallazgos ecográficos y nivel de Ca-125, apoyan esta sospecha). La conducta apropiada es la **remisión a Ginecología Oncológica** para manejo quirúrgico especializado, ya que la evidencia muestra que el tratamiento por un equipo de oncología ginecológica mejora los desenlaces. El abordaje quirúrgico incluye la exploración con biopsia por congelación intraoperatoria y, si se confirma malignidad, la **estadificación quirúrgica completa** (histerectomía total + salpingooforectomía bilateral + omentectomía + estadificación ganglionar pélvica/paraaórtica + lavados/biopsias peritoneales). Es fundamental recordar que la **punción-aspiración o biopsia percutánea de una masa anexial sospechosa está CONTRAINDICADA**, ya que conlleva riesgo de siembra tumoral (diseminación de células malignas a la cavidad peritoneal, empeorando el estadio) y tiene baja sensibilidad/especificidad diagnóstica; el diagnóstico definitivo se obtiene por histopatología tras la extirpación quirúrgica completa, nunca por punción previa ni por quimioterapia empírica sin tejido.\n\n**TRAMPA DEL EXAMEN:** La ausencia de síntomas puede llevar al estudiante a subestimar el riesgo (\"si no le duele nada, no puede ser cáncer\"), olvidando que el cáncer de ovario es notoriamente silente en sus etapas iniciales. Otra trampa clásica es asumir que, como en otras masas del cuerpo, una punción-biopsia percutánea es un paso diagnóstico razonable; en la masa anexial sospechosa esto está formalmente contraindicado por el riesgo de siembra tumoral.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., al cáncer de ovario lo llaman \"el asesino silencioso\" precisamente porque, como en esta paciente, puede aparecer como un hallazgo incidental completamente asintomático hasta que ya está en un Índice de Riesgo de Malignidad alto. No se deje llevar por la falta de síntomas: combine siempre el estado menopáusico, las características ecográficas (septos gruesos, papilas, Doppler central son banderas rojas) y el Ca-125 para calcular su sospecha de malignidad. Y por ningún motivo se le ocurra puncionar esa masa para \"salir de dudas rápido\": una punción percutánea puede sembrar células tumorales en la cavidad peritoneal y convertir lo que era un estadio localizado en un estadio avanzado, empeorando drásticamente el pronóstico de la paciente. Remita a su colega de oncología ginecológica, que es quien tiene el entrenamiento y el equipo para hacer la estadificación quirúrgica completa con biopsia por congelación intraoperatoria, y recuerde: el diagnóstico definitivo siempre es histopatológico tras la cirugía, nunca antes.",
    keyPoints: [
      "Masa anexial posmenopáusica compleja (sólido-quística, septos gruesos, papilas, Doppler central) + Ca-125 muy elevado = alta sospecha de malignidad (apoyada por índices como el RMI).",
      "Remitir a Ginecología Oncológica para cirugía de estadificación completa; el diagnóstico definitivo es histopatológico tras la cirugía.",
      "NUNCA realizar punción/biopsia percutánea de una masa anexial sospechosa (riesgo de siembra tumoral); no iniciar quimioterapia sin confirmación histológica.",
    ],
  },
];
