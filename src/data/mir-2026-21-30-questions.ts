import type { TrainingQuestion } from "@/lib/questions/types";

export const MIR_2026_21_30_QUESTIONS: TrainingQuestion[] = [
  {
    id: "mir-2026-21",
    university: "MIR (España)",
    examArea: "CIRUGÍA GENERAL",
    topic: "APENDICITIS AGUDA",
    difficulty: "medium",
    tags: ["mir", "espana", "cirugia-general"],
    statement:
      "Un varón de 22 años presenta dolor abdominal periumbilical que en las últimas 12 horas se ha localizado en fosa ilíaca derecha, con anorexia, náuseas y febrícula de 37.8°C. Al examen hay dolor a la palpación en punto de McBurney, con signo de Blumberg positivo y defensa localizada. La analítica muestra leucocitosis con neutrofilia. ¿Cuál es la conducta más apropiada?",
    options: [
      { id: "A", label: "A", text: "El cuadro clínico es altamente compatible con apendicitis aguda; debe procederse a apendicectomía (laparoscópica o abierta) sin necesidad obligatoria de pruebas de imagen adicionales cuando la presentación clínica es característica." },
      { id: "B", label: "B", text: "Debe solicitarse enema opaco como prueba diagnóstica de elección antes de decidir el tratamiento quirúrgico." },
      { id: "C", label: "C", text: "Manejo ambulatorio con analgesia y antibioterapia oral, reevaluando en 48-72 horas, dado que la apendicitis en fase inicial no requiere cirugía urgente." },
      { id: "D", label: "D", text: "Debe realizarse laparotomía exploradora amplia de entrada, sin considerar el abordaje laparoscópico en ningún caso." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es clásico de **apendicitis aguda**: dolor periumbilical migratorio hacia fosa ilíaca derecha, anorexia, febrícula, dolor en punto de McBurney, signo de Blumberg (rebote) positivo y leucocitosis con neutrofilia. Cuando la presentación clínica es característica, el diagnóstico es fundamentalmente **clínico**, y no es obligatorio solicitar pruebas de imagen adicionales antes de indicar la **apendicectomía** (por vía laparoscópica, de elección en la mayoría de los centros, o abierta según disponibilidad y características del paciente), que es el tratamiento definitivo. En casos de presentación atípica o duda diagnóstica (mujeres en edad fértil por el diagnóstico diferencial ginecológico, ancianos, niños pequeños), sí se recurre con más frecuencia a ecografía o TC abdominal para apoyar el diagnóstico.\n\n**TRAMPA DEL EXAMEN:** El enema opaco no es una prueba diagnóstica de elección para apendicitis aguda (es una prueba obsoleta y poco utilizada en este contexto). Diferir la cirugía con manejo ambulatorio en un cuadro clínico claro de apendicitis aguda retrasa el tratamiento definitivo y aumenta el riesgo de perforación, peritonitis y absceso.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando la historia y el examen físico ya le cuentan la historia clásica —dolor que migra del centro del abdomen a la fosa ilíaca derecha, anorexia, Blumberg positivo, leucocitosis— usted no necesita gastar tiempo ni recursos en imágenes \"para confirmar lo obvio\"; el siguiente paso lógico es el quirófano. Reserve la ecografía o la TC para los casos donde el cuadro no es tan claro: una mujer joven donde hay que descartar patología ginecológica, un anciano con presentación atípica, o un niño pequeño donde la historia clínica es más difícil de obtener. Y no se demore pensando en manejo conservador ambulatorio en un cuadro agudo típico; cada hora que pasa aumenta el riesgo de que ese apéndice inflamado se perfore.",
    keyPoints: [
      "Apendicitis aguda: diagnóstico fundamentalmente clínico en presentaciones típicas (dolor migratorio, McBurney, Blumberg, leucocitosis); no siempre requiere imagen.",
      "Tratamiento definitivo: apendicectomía (laparoscópica de elección en la mayoría de los casos), sin demorarla en cuadros claros.",
      "Reservar ecografía/TC para presentaciones atípicas o diagnóstico diferencial dudoso (mujeres jóvenes, ancianos, niños pequeños).",
    ],
  },
  {
    id: "mir-2026-22",
    university: "MIR (España)",
    examArea: "TRAUMATOLOGÍA",
    topic: "FRACTURA DE CADERA EN EL ANCIANO",
    difficulty: "medium",
    tags: ["mir", "espana", "traumatologia"],
    statement:
      "Una mujer de 84 años, tras una caída casual, presenta dolor en cadera derecha con acortamiento y rotación externa del miembro. La radiografía confirma fractura subcapital de cadera derecha. Presenta pluripatología (hipertensión, fibrilación auricular anticoagulada, deterioro cognitivo leve). ¿Cuál es el manejo más apropiado?",
    options: [
      { id: "A", label: "A", text: "Tratamiento quirúrgico precoz (idealmente dentro de las primeras 24-48 horas), tras optimización anestésica y manejo multidisciplinar (geriatría-traumatología), evitando la inmovilización prolongada en cama." },
      { id: "B", label: "B", text: "Tratamiento conservador con reposo absoluto en cama durante varias semanas, evitando la cirugía dado el riesgo anestésico de la edad avanzada y la pluripatología." },
      { id: "C", label: "C", text: "Diferir la cirugía de forma indefinida hasta la resolución completa de todas las comorbilidades, sin límite de tiempo predefinido." },
      { id: "D", label: "D", text: "Tracción cutánea prolongada como tratamiento definitivo único, sin necesidad de cirugía posterior." },
    ],
    correctOptionId: "A",
    explanation:
      "La **fractura de cadera en el anciano** es una entidad con alta morbimortalidad si no se trata adecuadamente. El estándar actual es el **tratamiento quirúrgico precoz**, idealmente dentro de las **primeras 24-48 horas** tras el ingreso (una vez optimizadas las condiciones médicas y anestésicas imprescindibles, sin retrasos innecesarios), ya que la cirugía precoz se asocia a menor mortalidad, menor tasa de complicaciones (úlceras por presión, trombosis venosa profunda, neumonía, delirium) y mejor recuperación funcional, en comparación con el tratamiento conservador o la cirugía diferida. El manejo **multidisciplinar** (ortogeriatría) que coordina la optimización médica perioperatoria con la cirugía precoz es el modelo con mejor evidencia.\n\n**TRAMPA DEL EXAMEN:** El tratamiento conservador con reposo prolongado en cama, pensando en \"proteger\" al paciente anciano de la cirugía, es un error grave: la inmovilización prolongada en el anciano se asocia a mayor mortalidad y complicaciones (tromboembolismo, neumonía, úlceras por presión, pérdida funcional) que la propia cirugía precoz bien planificada. Diferir la cirugía de forma indefinida \"hasta resolver todas las comorbilidades\" tampoco es correcto: se optimiza lo imprescindible, pero sin retrasar la cirugía más allá de lo estrictamente necesario.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el reflejo de \"esta señora es muy mayor y tiene muchas comorbilidades, mejor no operarla\" es exactamente el error que el examen quiere que usted evite. La evidencia es contundente: en el anciano con fractura de cadera, quedarse en cama esperando es más peligroso que operar precozmente. La inmovilización prolongada le trae trombosis, neumonía, úlceras por presión y pérdida funcional que muchas veces ya no se recupera. El manejo correcto es un equipo de ortogeriatría que optimice lo justo y necesario (anticoagulación, función cardíaca, estado de hidratación) y lleve a esta paciente a quirófano dentro de las primeras 24-48 horas, no que la deje esperando semanas \"a que mejore\", porque en cama es cuando realmente empeora.",
    keyPoints: [
      "Fractura de cadera en el anciano: cirugía precoz (24-48h), con optimización multidisciplinar (ortogeriatría), no reposo prolongado en cama.",
      "La inmovilización prolongada aumenta mortalidad y complicaciones (TVP, neumonía, úlceras por presión, deterioro funcional) más que la cirugía precoz.",
      "No diferir la cirugía de forma indefinida esperando resolver todas las comorbilidades; se optimiza solo lo imprescindible.",
    ],
  },
  {
    id: "mir-2026-23",
    university: "MIR (España)",
    examArea: "HEMATOLOGÍA / ONCOLOGÍA",
    topic: "SÍNDROME DE LISIS TUMORAL",
    difficulty: "hard",
    tags: ["mir", "espana", "hematologia"],
    statement:
      "Un varón de 45 años con diagnóstico reciente de leucemia linfoblástica aguda de alta carga tumoral inicia quimioterapia de inducción. A las 24 horas presenta oliguria, y la analítica muestra hiperpotasemia, hiperfosfatemia, hipocalcemia y elevación del ácido úrico y de la creatinina respecto al ingreso. ¿Cuál es el diagnóstico y la medida más importante que debió haberse anticipado antes de iniciar la quimioterapia?",
    options: [
      { id: "A", label: "A", text: "Síndrome de lisis tumoral; la medida preventiva clave antes de iniciar quimioterapia en pacientes de alto riesgo es la hidratación intravenosa intensiva junto con tratamiento hipouricemiante (rasburicasa o alopurinol, según el riesgo), iniciados de forma profiláctica." },
      { id: "B", label: "B", text: "Nefropatía por contraste; la medida preventiva es evitar la administración de contraste yodado antes de la quimioterapia." },
      { id: "C", label: "C", text: "Necrosis tubular aguda isquémica; la medida preventiva es restringir líquidos antes de iniciar la quimioterapia." },
      { id: "D", label: "D", text: "Nefritis intersticial aguda por fármacos; la medida preventiva es la administración profiláctica de corticoides antes de la quimioterapia." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con **síndrome de lisis tumoral (SLT)**: la destrucción masiva y rápida de células tumorales (típico tras iniciar quimioterapia en neoplasias de alta carga tumoral y alta sensibilidad a esta, como las leucemias agudas y linfomas de alto grado) libera grandes cantidades de potasio, fósforo y ácidos nucleicos (metabolizados a ácido úrico) al torrente sanguíneo, provocando **hiperpotasemia, hiperfosfatemia, hipocalcemia secundaria** (por precipitación de fosfato cálcico) e **hiperuricemia**, que puede precipitar además un **fracaso renal agudo** (por nefropatía úrica y por precipitación de cristales de fosfato cálcico en el túbulo renal). La medida clave, que debe **anticiparse antes** de iniciar la quimioterapia en pacientes de alto riesgo, es la **hidratación intravenosa intensiva** junto con tratamiento **hipouricemiante profiláctico** (rasburicasa en pacientes de alto riesgo, o alopurinol en riesgo intermedio-bajo), con monitorización estrecha de la función renal e iones.\n\n**TRAMPA DEL EXAMEN:** Confundir este cuadro con nefropatía por contraste o necrosis tubular isquémica ignora el contexto clínico clave (inicio reciente de quimioterapia en tumor de alta carga) y el patrón bioquímico característico (hiperpotasemia + hiperfosfatemia + hipocalcemia + hiperuricemia juntos), que es muy específico del síndrome de lisis tumoral y no de esas otras entidades.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el síndrome de lisis tumoral es de esas complicaciones que se **previenen**, no solo se tratan: cuando usted sabe que va a iniciar quimioterapia en un paciente con una neoplasia de alta carga tumoral y alta sensibilidad (leucemias agudas, linfomas agresivos), el momento de actuar es ANTES de la primera dosis, no después de que aparezcan los trastornos electrolíticos. Hidratación intravenosa generosa y un hipouricemiante (rasburicasa si el riesgo es alto, alopurinol si es más bajo) son su prevención estándar, junto con monitorización estrecha de potasio, fósforo, calcio, ácido úrico y función renal en las primeras 24-72 horas tras iniciar el tratamiento, que es cuando este síndrome típicamente se manifiesta. Memorice el patrón bioquímico como una firma: potasio arriba, fósforo arriba, calcio abajo, ácido úrico arriba; eso casi siempre es lisis tumoral en el contexto correcto.",
    keyPoints: [
      "Síndrome de lisis tumoral: hiperpotasemia + hiperfosfatemia + hipocalcemia + hiperuricemia, tras iniciar tratamiento en neoplasias de alta carga tumoral.",
      "Prevención (antes de iniciar quimioterapia en pacientes de alto riesgo): hidratación intravenosa intensiva + hipouricemiante profiláctico (rasburicasa o alopurinol).",
      "Puede provocar fracaso renal agudo por nefropatía úrica y precipitación de fosfato cálcico en el túbulo renal.",
    ],
  },
  {
    id: "mir-2026-24",
    university: "MIR (España)",
    examArea: "CARDIOLOGÍA",
    topic: "FIBRILACIÓN AURICULAR CON RESPUESTA VENTRICULAR RÁPIDA E INESTABILIDAD",
    difficulty: "hard",
    tags: ["mir", "espana", "cardiologia"],
    statement:
      "Una mujer de 70 años acude por palpitaciones e inicio brusco de disnea. El ECG muestra fibrilación auricular con respuesta ventricular a 160 lpm. Presenta PA 82/56 mmHg, signos de hipoperfusión periférica y disnea con crepitantes bibasales sugestivos de edema pulmonar incipiente. ¿Cuál es el manejo más apropiado en este momento?",
    options: [
      { id: "A", label: "A", text: "Cardioversión eléctrica sincronizada urgente, dado que la fibrilación auricular está causando inestabilidad hemodinámica (hipotensión y signos de hipoperfusión/edema pulmonar), sin necesidad de esperar el efecto de fármacos controladores de frecuencia." },
      { id: "B", label: "B", text: "Iniciar betabloqueante intravenoso para control de frecuencia, y reevaluar la respuesta antes de considerar cualquier otra medida." },
      { id: "C", label: "C", text: "Anticoagular de inmediato con heparina y diferir cualquier intento de cardioversión hasta completar al menos 3 semanas de anticoagulación, independientemente del estado hemodinámico." },
      { id: "D", label: "D", text: "Administrar digoxina intravenosa como fármaco de primera elección para control de frecuencia en este contexto agudo." },
    ],
    correctOptionId: "A",
    explanation:
      "Esta paciente presenta **fibrilación auricular con respuesta ventricular rápida e inestabilidad hemodinámica** (hipotensión, signos de hipoperfusión, edema pulmonar incipiente). Ante una arritmia que está causando **inestabilidad hemodinámica significativa**, el tratamiento de elección es la **cardioversión eléctrica sincronizada urgente**, sin demorar el tratamiento esperando el efecto de fármacos controladores de frecuencia (que actúan más lentamente y no resuelven la causa de la inestabilidad con la misma rapidez). La necesidad de anticoagulación previa a la cardioversión (habitualmente 3 semanas, o ecocardiograma transesofágico para descartar trombo auricular si la duración es incierta o mayor de 48 horas) se **omite o se pospone** cuando existe inestabilidad hemodinámica que amenaza la vida, priorizando la cardioversión inmediata sobre el riesgo tromboembólico.\n\n**TRAMPA DEL EXAMEN:** Insistir en el control de frecuencia farmacológico o en cumplir estrictamente el protocolo de anticoagulación previa a la cardioversión en un paciente **inestable** es el error central de esta pregunta: esas son las estrategias correctas para el paciente **estable**, pero en presencia de inestabilidad hemodinámica la prioridad cambia a restaurar el ritmo de inmediato mediante cardioversión eléctrica. La digoxina, además, tiene un inicio de acción lento y no es el fármaco de elección para el control agudo de frecuencia en este contexto.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la pregunta clave que separa \"control de frecuencia con fármacos\" de \"cardioversión eléctrica ya\" es una sola: ¿está el paciente estable o inestable? Esta paciente tiene hipotensión, signos de mala perfusión y está empezando a hacer edema pulmonar por culpa de la taquiarritmia; eso es inestabilidad hemodinámica franca causada por la arritmia, y en ese escenario usted no tiene tiempo para esperar a ver si un betabloqueante o un calcioantagonista bajan la frecuencia poco a poco. Cardioversión eléctrica sincronizada, ya. Y sobre la anticoagulación: sí, normalmente respetamos las 3 semanas previas o el ecocardiograma transesofágico antes de cardiovertir por el riesgo de embolizar un trombo auricular, pero cuando la vida del paciente está en juego por la inestabilidad, esa regla se sacrifica; usted no deja que un paciente inestable se deteriore más por seguir un protocolo pensado para el paciente estable.",
    keyPoints: [
      "Fibrilación auricular con inestabilidad hemodinámica (hipotensión, hipoperfusión, edema pulmonar): cardioversión eléctrica sincronizada urgente, sin demora.",
      "En el paciente inestable, se prioriza la cardioversión inmediata sobre el protocolo habitual de anticoagulación previa (3 semanas o ecocardiograma transesofágico).",
      "El control de frecuencia farmacológico (betabloqueantes, calcioantagonistas) es la estrategia del paciente ESTABLE, no del inestable.",
    ],
  },
  {
    id: "mir-2026-25",
    university: "MIR (España)",
    examArea: "NEFROLOGÍA",
    topic: "FRACASO RENAL AGUDO - DIAGNÓSTICO DIFERENCIAL PRERRENAL VS RENAL",
    difficulty: "medium",
    tags: ["mir", "espana", "nefrologia"],
    statement:
      "Un varón de 76 años, con cuadro de vómitos y diarrea de 3 días, presenta creatinina de 2.1 mg/dL (basal 0.9 mg/dL), con oliguria. Los parámetros urinarios muestran: sodio urinario 8 mEq/L, fracción de excreción de sodio (FeNa) 0.6%, osmolaridad urinaria elevada, y sedimento urinario sin cilindros patológicos. ¿Cuál es la etiología más probable y la conducta inicial más apropiada?",
    options: [
      { id: "A", label: "A", text: "Fracaso renal agudo de origen prerrenal (por hipovolemia secundaria a pérdidas digestivas); el manejo inicial es la reposición de volumen con fluidoterapia intravenosa, con la expectativa de recuperación de la función renal al corregir la hipoperfusión." },
      { id: "B", label: "B", text: "Necrosis tubular aguda establecida; el manejo inicial es restringir líquidos y valorar diálisis de forma inmediata, sin ensayar reposición de volumen." },
      { id: "C", label: "C", text: "Fracaso renal agudo posrenal por obstrucción; el manejo inicial es la colocación urgente de una sonda vesical o nefrostomía sin necesidad de otros estudios." },
      { id: "D", label: "D", text: "Glomerulonefritis aguda; el manejo inicial es iniciar corticoides sistémicos de forma empírica." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con un **fracaso renal agudo de origen prerrenal**: antecedente claro de pérdidas de volumen (vómitos y diarrea), con parámetros urinarios característicos de prerrenal —**sodio urinario bajo (<20 mEq/L)**, **FeNa baja (<1%)** (el riñón, al estar hipoperfundido pero estructuralmente indemne, reabsorbe ávidamente sodio y agua), **osmolaridad urinaria elevada** (orina concentrada, reflejo de una adecuada capacidad de concentración tubular), y **sedimento urinario sin cilindros patológicos** (a diferencia de la necrosis tubular aguda, donde son típicos los cilindros granulosos pigmentados/\"en barro\"). El manejo inicial es la **reposición de volumen** con fluidoterapia intravenosa, esperando la recuperación de la función renal al corregir la hipoperfusión, ya que en el prerrenal el parénquima renal está indemne y la disfunción es funcional/hemodinámica, no estructural.\n\n**TRAMPA DEL EXAMEN:** Confundir el prerrenal con necrosis tubular aguda establecida (donde la FeNa típicamente es alta, >2%, el sodio urinario es alto, y el sedimento muestra cilindros granulosos) llevaría erróneamente a restringir líquidos en un paciente que, en realidad, necesita volumen. La sonda vesical/nefrostomía es el tratamiento del fracaso renal posrenal (obstructivo), que no está sugerido por los datos de este caso (ausencia de datos de obstrucción, patrón urinario típico de prerrenal).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., memorice estos parámetros urinarios como su \"detective\" para diferenciar prerrenal de necrosis tubular aguda: en el prerrenal, el riñón está sano pero mal perfundido, así que hace exactamente lo que se supone que debe hacer ante la hipovolemia: retener sodio y agua con toda su capacidad, dando un sodio urinario bajo, una FeNa baja y una orina bien concentrada (osmolaridad alta). En la necrosis tubular aguda establecida, el riñón ya está dañado y pierde esa capacidad de concentrar y retener sodio, dando justo el patrón contrario: sodio urinario alto, FeNa alta, orina diluida, y cilindros granulosos en el sedimento. Este paciente tiene el patrón prerrenal clásico con una causa evidente (vómitos y diarrea); su tratamiento es simple y efectivo: reponga volumen, y espere ver mejorar la función renal en las próximas horas-días. Si en cambio usted restringiera líquidos pensando erróneamente en necrosis tubular, empeoraría la hipoperfusión y podría convertir un prerrenal reversible en una necrosis tubular aguda real.",
    keyPoints: [
      "Fracaso renal prerrenal: sodio urinario bajo (<20), FeNa baja (<1%), osmolaridad urinaria alta, sedimento sin cilindros patológicos; riñón estructuralmente indemne.",
      "Manejo del prerrenal: reposición de volumen; la función renal se recupera al corregir la hipoperfusión.",
      "Diferenciar de necrosis tubular aguda establecida (FeNa alta, sodio urinario alto, cilindros granulosos), donde restringir líquidos sí puede ser apropiado según el contexto.",
    ],
  },
  {
    id: "mir-2026-26",
    university: "MIR (España)",
    examArea: "NEUMOLOGÍA",
    topic: "TROMBOEMBOLISMO PULMONAR",
    difficulty: "hard",
    tags: ["mir", "espana", "neumologia"],
    statement:
      "Una mujer de 58 años, con antecedente de cirugía ortopédica reciente e inmovilización, presenta disnea súbita, dolor torácico pleurítico y taquicardia de 118 lpm. La presión arterial es 108/70 mmHg (estable). La probabilidad clínica de tromboembolismo pulmonar (TEP), según escala validada, es alta. ¿Cuál es el siguiente paso diagnóstico más apropiado?",
    options: [
      { id: "A", label: "A", text: "Angio-TC de arterias pulmonares como prueba diagnóstica de elección, dado que la probabilidad clínica es alta (no está indicado el dímero D como cribado en este escenario, ya que un resultado negativo no descartaría de forma fiable el TEP con probabilidad clínica alta)." },
      { id: "B", label: "B", text: "Determinación de dímero D como primer paso; si es negativo, se descarta TEP sin necesidad de más pruebas, independientemente de la probabilidad clínica." },
      { id: "C", label: "C", text: "Iniciar anticoagulación empírica sin ninguna prueba diagnóstica de imagen, basándose únicamente en la probabilidad clínica alta." },
      { id: "D", label: "D", text: "Solicitar radiografía de tórax como prueba diagnóstica definitiva, dado que es suficiente para confirmar o descartar TEP." },
    ],
    correctOptionId: "A",
    explanation:
      "Ante una **probabilidad clínica alta de TEP** (por escalas validadas como Wells o Ginebra), la estrategia diagnóstica recomendada es solicitar directamente la **angio-TC de arterias pulmonares**, que es la prueba de imagen de elección para confirmar o descartar el diagnóstico. El **dímero D** tiene su mayor utilidad en pacientes con **probabilidad clínica baja o intermedia**, donde un resultado negativo (con alta sensibilidad) permite excluir el TEP sin necesidad de pruebas de imagen; sin embargo, en probabilidad clínica **alta**, el dímero D **no debe usarse como cribado inicial**, ya que su valor predictivo negativo no es suficiente para descartar TEP en este grupo, y solicitarlo solo retrasaría el diagnóstico definitivo con la angio-TC.\n\n**TRAMPA DEL EXAMEN:** Usar el dímero D como prueba de cribado inicial en un paciente con probabilidad clínica alta es un error frecuente: aunque salga negativo, no se puede confiar en él para descartar TEP en este contexto, y confiar en un resultado negativo podría hacer perder un diagnóstico real. Iniciar anticoagulación empírica sin ninguna confirmación diagnóstica (salvo situaciones de inestabilidad hemodinámica grave donde la prueba de imagen no esté disponible de inmediato) tampoco es la estrategia estándar en un paciente estable.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el dímero D es una prueba maravillosa para DESCARTAR TEP cuando la probabilidad clínica es baja o intermedia, pero pierde su utilidad cuando la probabilidad clínica ya es alta: en ese escenario, aunque el dímero D salga negativo, la probabilidad de que igual sea un TEP sigue siendo relevante, así que pedirlo solo le hace perder tiempo antes de llegar a la prueba que realmente confirma o descarta el diagnóstico. Con esta paciente —cirugía ortopédica reciente, inmovilización, disnea súbita, dolor pleurítico, taquicardia— la probabilidad clínica alta ya le dice que vaya directo a la angio-TC de arterias pulmonares. Es la diferencia entre usar la herramienta correcta según el escenario clínico, y no aplicar un algoritmo de forma mecánica sin pensar en la probabilidad pretest.",
    keyPoints: [
      "TEP con probabilidad clínica alta (escala de Wells/Ginebra): angio-TC de arterias pulmonares directamente, sin pasar por dímero D.",
      "El dímero D tiene utilidad para EXCLUIR TEP solo en probabilidad clínica baja/intermedia (valor predictivo negativo alto en ese contexto).",
      "En probabilidad clínica alta, un dímero D negativo no descarta TEP de forma fiable; no debe usarse como cribado en ese escenario.",
    ],
  },
  {
    id: "mir-2026-27",
    university: "MIR (España)",
    examArea: "APARATO DIGESTIVO",
    topic: "PANCREATITIS AGUDA",
    difficulty: "medium",
    tags: ["mir", "espana", "digestivo"],
    statement:
      "Un varón de 48 años, con antecedente de colelitiasis conocida, acude por dolor abdominal intenso en epigastrio irradiado en cinturón hacia la espalda, con náuseas y vómitos. La lipasa sérica está elevada más de 3 veces el límite superior de la normalidad. ¿Cuál es el manejo inicial más apropiado en las primeras horas?",
    options: [
      { id: "A", label: "A", text: "Fluidoterapia intravenosa adecuada (goal-directed), analgesia, y reinicio de la alimentación oral precoz (según tolerancia) en cuanto sea posible, evitando el ayuno prolongado innecesario." },
      { id: "B", label: "B", text: "Ayuno absoluto prolongado durante al menos 2 semanas, independientemente de la evolución clínica, para permitir el reposo pancreático completo." },
      { id: "C", label: "C", text: "Antibioterapia profiláctica sistemática desde el ingreso en todos los casos de pancreatitis aguda, independientemente de la gravedad o la presencia de necrosis infectada." },
      { id: "D", label: "D", text: "Colecistectomía urgente en las primeras 24 horas, antes de cualquier otra medida de soporte." },
    ],
    correctOptionId: "A",
    explanation:
      "El manejo inicial de la **pancreatitis aguda** (diagnóstico confirmado con dolor característico + lipasa/amilasa elevada más de 3 veces el límite normal) se basa en: **fluidoterapia intravenosa adecuada** (para prevenir la hipoperfusión pancreática y sistémica, ajustada según respuesta clínica), **analgesia adecuada**, y **reinicio precoz de la alimentación oral** en cuanto el paciente lo tolere (habitualmente en las primeras 24-72 horas si no hay contraindicación), ya que la evidencia actual desaconseja el ayuno prolongado innecesario, que no aporta beneficio y puede empeorar la evolución (aumento de translocación bacteriana intestinal, entre otros). La **antibioterapia profiláctica sistemática** no está indicada de rutina; se reserva para casos con necrosis pancreática infectada confirmada o sospechada, no de forma preventiva en todos los pacientes. La colecistectomía, en la pancreatitis de origen biliar, se recomienda durante el mismo ingreso una vez resuelto el cuadro agudo (no como primera medida urgente antes de estabilizar al paciente).\n\n**TRAMPA DEL EXAMEN:** El ayuno prolongado \"para dar reposo al páncreas\" es una práctica antigua que el examen actual penaliza como incorrecta; la evidencia actual apoya la realimentación precoz. La antibioterapia profiláctica sistemática en toda pancreatitis aguda, sin necrosis infectada, es otro error clásico que hay que evitar.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., olvide la vieja costumbre de dejar en ayuno absoluto durante semanas a todo paciente con pancreatitis aguda \"para que el páncreas descanse\"; la evidencia moderna es clara en que reiniciar la alimentación oral tan pronto como el paciente la tolere (generalmente en las primeras 24-72 horas) es mejor que prolongar el ayuno, que solo añade riesgos sin beneficio real. Su prioridad en las primeras horas es la reanimación con líquidos, controlar bien el dolor, y vigilar la evolución (criterios de gravedad, aparición de complicaciones locales o sistémicas). No le ponga antibiótico a todo el mundo por si acaso; eso se reserva para cuando hay evidencia real de necrosis infectada, no como profilaxis rutinaria. Y sobre la vesícula: si el origen es biliar, la colecistectomía se programa durante el mismo ingreso una vez que el cuadro agudo esté controlado, no como la primera medida antes de estabilizar al paciente.",
    keyPoints: [
      "Pancreatitis aguda: manejo inicial es fluidoterapia adecuada + analgesia + realimentación oral precoz (no ayuno prolongado).",
      "Antibioterapia profiláctica sistemática NO indicada de rutina; se reserva para necrosis pancreática infectada.",
      "Colecistectomía (si origen biliar) durante el mismo ingreso una vez resuelto el cuadro agudo, no como medida urgente inicial.",
    ],
  },
  {
    id: "mir-2026-28",
    university: "MIR (España)",
    examArea: "ENDOCRINOLOGÍA",
    topic: "CRISIS TIROTÓXICA (TORMENTA TIROIDEA)",
    difficulty: "hard",
    tags: ["mir", "espana", "endocrinologia"],
    statement:
      "Una mujer de 38 años, con hipertiroidismo conocido y mal control terapéutico, acude tras un cuadro infeccioso intercurrente con fiebre de 39.5°C, taquicardia de 145 lpm, agitación psicomotriz, temblor marcado y diarrea. ¿Cuál es el manejo farmacológico inicial más apropiado ante la sospecha de tormenta tiroidea?",
    options: [
      { id: "A", label: "A", text: "Betabloqueante (propranolol) para control de la respuesta adrenérgica, antitiroideo (tionamida) para bloquear la síntesis hormonal, y posteriormente yodo (tras el antitiroideo) para bloquear la liberación hormonal, junto con corticoides e identificación y tratamiento del factor precipitante." },
      { id: "B", label: "B", text: "Administrar yodo de forma aislada como único tratamiento, sin necesidad de antitiroideos ni betabloqueantes." },
      { id: "C", label: "C", text: "Iniciar levotiroxina para regular la función tiroidea, dado que el objetivo es normalizar los niveles hormonales." },
      { id: "D", label: "D", text: "Manejo exclusivamente sintomático con antipiréticos, sin tratamiento específico dirigido al eje tiroideo." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con **tormenta tiroidea (crisis tirotóxica)**, una urgencia endocrinológica potencialmente mortal, típicamente precipitada por un factor estresante (en este caso, infección) en un paciente con hipertiroidismo mal controlado, con fiebre alta, taquicardia marcada, alteración del estado mental/agitación y síntomas digestivos (diarrea). El manejo combina varios frentes simultáneos: **betabloqueante** (propranolol, que además de controlar la frecuencia cardíaca y los síntomas adrenérgicos, inhibe parcialmente la conversión periférica de T4 a T3), **antitiroideo** (tionamida, como propiltiouracilo o metimazol, para bloquear la síntesis de nuevas hormonas tiroideas), **yodo** (administrado **después** del antitiroideo, para bloquear la liberación de hormona ya sintetizada, evitando que actúe como sustrato adicional si se da antes del antitiroideo), **corticoides** (que también inhiben la conversión periférica de T4 a T3 y cubren una posible insuficiencia suprarrenal relativa asociada al estado hipercatabólico), y la **identificación y tratamiento del factor precipitante** (en este caso, el cuadro infeccioso).\n\n**TRAMPA DEL EXAMEN:** Administrar yodo antes que el antitiroideo es un error clásico: si se da yodo primero, puede proporcionar sustrato adicional para la síntesis de nuevas hormonas tiroideas (efecto Wolff-Chaikoff no establecido aún) y empeorar paradójicamente la tirotoxicosis; el orden correcto es siempre antitiroideo primero, yodo después (típicamente al menos una hora después). La levotiroxina, un aporte de hormona tiroidea, está obviamente contraindicada en un cuadro de exceso hormonal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la tormenta tiroidea es de esas urgencias donde el tratamiento tiene una secuencia que no se puede desordenar. Primero, controle la respuesta adrenérgica con un betabloqueante, que además le ayuda a frenar un poco la conversión de T4 a T3. Después, bloquee la fábrica: la tionamida detiene la síntesis de nueva hormona. Solo DESPUÉS de haber bloqueado esa síntesis con el antitiroideo, dé el yodo, que bloquea la liberación de la hormona ya almacenada; si invierte el orden y da yodo antes que el antitiroideo, corre el riesgo de darle a la glándula más materia prima para fabricar aún más hormona, empeorando el cuadro. Añada corticoides, que le ayudan tanto con la conversión periférica como con una posible insuficiencia suprarrenal relativa por el estado hipercatabólico extremo. Y no se olvide de la causa: en esta paciente, tratar la infección que precipitó la crisis es tan importante como el manejo hormonal en sí.",
    keyPoints: [
      "Tormenta tiroidea: betabloqueante + antitiroideo (tionamida) + yodo (SIEMPRE después del antitiroideo) + corticoides + tratar el factor precipitante.",
      "Dar yodo antes que el antitiroideo puede empeorar la tirotoxicosis (aporta sustrato para más síntesis hormonal); el orden correcto es antitiroideo primero.",
      "La levotiroxina está contraindicada en este contexto de exceso hormonal.",
    ],
  },
  {
    id: "mir-2026-29",
    university: "MIR (España)",
    examArea: "ENDOCRINOLOGÍA / URGENCIAS",
    topic: "INSUFICIENCIA SUPRARRENAL AGUDA (CRISIS ADDISONIANA)",
    difficulty: "hard",
    tags: ["mir", "espana", "endocrinologia"],
    statement:
      "Una mujer de 45 años, en tratamiento crónico con corticoides orales por una enfermedad autoinmune, suspende bruscamente la medicación por cuenta propia. Cinco días después acude a Urgencias con hipotensión marcada (PA 76/48 mmHg) refractaria a fluidoterapia, náuseas, vómitos y dolor abdominal. La analítica muestra hiponatremia e hiperpotasemia. ¿Cuál es la actuación más apropiada?",
    options: [
      { id: "A", label: "A", text: "Administrar hidrocortisona intravenosa en dosis de estrés de inmediato (sin esperar confirmación analítica del cortisol si esto retrasa el tratamiento), junto con fluidoterapia intensiva con suero salino y corrección de la glucemia si existe hipoglucemia asociada." },
      { id: "B", label: "B", text: "Esperar la determinación de cortisol basal y ACTH antes de administrar cualquier corticoide, para no interferir con el diagnóstico bioquímico." },
      { id: "C", label: "C", text: "Administrar vasopresores como primera medida, sin considerar la reposición de corticoides, dado que la hipotensión es el hallazgo predominante." },
      { id: "D", label: "D", text: "Reiniciar la dosis habitual de corticoides oral previa a la suspensión, sin necesidad de dosis de estrés ni manejo intravenoso." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con **crisis addisoniana (insuficiencia suprarrenal aguda)**, precipitada por la suspensión brusca de corticoides crónicos (que produce supresión del eje hipotálamo-hipófiso-suprarrenal, dejando a la paciente sin capacidad de producir cortisol endógeno de forma aguda): hipotensión refractaria a volumen, náuseas, vómitos, dolor abdominal, hiponatremia e hiperpotasemia (por déficit de la actividad mineralocorticoide asociada). Es una **urgencia vital**: la actuación es administrar **hidrocortisona intravenosa en dosis de estrés de inmediato**, sin retrasar el tratamiento esperando la confirmación analítica (si la sospecha clínica es alta, se puede extraer una muestra de cortisol basal antes de la primera dosis, pero **nunca retrasar el tratamiento** por esperar el resultado), junto con **fluidoterapia intensiva** con suero salino (para corregir la hipovolemia y la hiponatremia) y corrección de la hipoglucemia si está presente.\n\n**TRAMPA DEL EXAMEN:** Esperar la confirmación bioquímica (cortisol, ACTH) antes de tratar es un error potencialmente letal: la crisis addisoniana no tratada puede progresar rápidamente a shock refractario y muerte. Administrar vasopresores sin corticoides ignora la causa de fondo: la hipotensión en la crisis addisoniana es refractaria a fluidos y vasopresores si no se corrige el déficit de cortisol, que es el problema fisiopatológico central.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ante una hipotensión que no responde bien a los líquidos, en una paciente con el antecedente clave de haber suspendido corticoides crónicos de golpe, la crisis addisoniana tiene que estar en su cabeza de inmediato, y el tratamiento no espera confirmación de laboratorio. Si tiene la oportunidad rápida de sacar una muestra de cortisol antes de la primera dosis, hágalo, pero si eso le va a demorar el tratamiento, no lo haga: ponga la hidrocortisona intravenosa ya. Recuerde también que en esta crisis, los vasopresores solos no van a funcionar bien; la hipotensión de la insuficiencia suprarrenal es notoriamente refractaria a fluidos y vasopresores mientras no corrija el déficit de cortisol de fondo, así que la hidrocortisona no es un tratamiento \"accesorio\", es el tratamiento central de este shock.",
    keyPoints: [
      "Crisis addisoniana: hipotensión refractaria a volumen + hiponatremia + hiperpotasemia, típicamente tras suspensión brusca de corticoides crónicos.",
      "Tratamiento: hidrocortisona intravenosa en dosis de estrés de inmediato, sin esperar confirmación analítica si esto retrasa el tratamiento.",
      "La hipotensión de la crisis addisoniana es refractaria a fluidos y vasopresores mientras no se corrija el déficit de cortisol.",
    ],
  },
  {
    id: "mir-2026-30",
    university: "MIR (España)",
    examArea: "ENFERMEDADES INFECCIOSAS / UROLOGÍA",
    topic: "PIELONEFRITIS AGUDA COMPLICADA CON SEPSIS",
    difficulty: "medium",
    tags: ["mir", "espana", "infecciosas"],
    statement:
      "Una mujer de 68 años, diabética, acude por fiebre de 39.3°C, dolor lumbar derecho intenso y síntomas urinarios de 2 días de evolución. Presenta PA 92/58 mmHg, FC 112 lpm, y analítica con leucocitosis marcada y elevación de reactantes de fase aguda. La ecografía urgente descarta dilatación de la vía urinaria. ¿Cuál es la actuación más apropiada?",
    options: [
      { id: "A", label: "A", text: "Extraer hemocultivos y urocultivo, iniciar antibioterapia empírica intravenosa de amplio espectro de inmediato junto con fluidoterapia, dado el cuadro compatible con pielonefritis aguda con criterios de sepsis, sin esperar los resultados microbiológicos para iniciar el tratamiento." },
      { id: "B", label: "B", text: "Manejo ambulatorio con antibiótico oral, dado que la ecografía descartó obstrucción de la vía urinaria." },
      { id: "C", label: "C", text: "Esperar el resultado del urocultivo antes de iniciar cualquier antibiótico, para dirigir el tratamiento de forma específica desde el inicio." },
      { id: "D", label: "D", text: "Realizar nefrostomía percutánea urgente como primera medida, sin evidencia de obstrucción de la vía urinaria en la ecografía." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es compatible con una **pielonefritis aguda con criterios de sepsis** (fiebre alta, dolor lumbar, síntomas urinarios, hipotensión relativa, taquicardia, leucocitosis y elevación de reactantes de fase aguda), en una paciente diabética (factor de riesgo para evolución complicada). La ecografía descarta un componente obstructivo que requeriría drenaje urgente (nefrostomía o catéter doble J). Ante estos hallazgos, la actuación es la misma que ante cualquier sepsis de origen urinario: **extraer hemocultivos y urocultivo**, e iniciar **antibioterapia empírica intravenosa de amplio espectro de inmediato**, sin retrasar el tratamiento esperando los resultados microbiológicos, junto con **fluidoterapia** adecuada para el soporte hemodinámico.\n\n**TRAMPA DEL EXAMEN:** El manejo ambulatorio con antibiótico oral es apropiado para una pielonefritis aguda no complicada en paciente estable, pero **no** para esta paciente, que ya cumple criterios de sepsis (inestabilidad hemodinámica relativa, taquicardia, leucocitosis marcada); aquí el manejo debe ser hospitalario e intravenoso. Esperar el urocultivo antes de iniciar antibiótico es el mismo error de retraso que en cualquier sepsis: el tratamiento empírico se inicia de inmediato y se ajusta después según el antibiograma.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., no se deje engañar por el hecho de que la ecografía descartó obstrucción; eso solo le dice que no necesita un drenaje urgente de la vía urinaria, pero no cambia que esta paciente tiene una sepsis de origen urinario que necesita tratamiento hospitalario intravenoso inmediato, no una receta para la casa. La secuencia es la misma que en cualquier sepsis: cultive rápido (hemocultivos y urocultivo), pero no espere esos resultados para arrancar el antibiótico empírico de amplio espectro; ajústelo después según lo que crezca en los cultivos y el antibiograma. Y no pierda de vista que es diabética: eso la pone en mayor riesgo de evolución tórpida y de complicaciones como abscesos renales o perirrenales, así que vigile de cerca la respuesta al tratamiento en las siguientes 48-72 horas.",
    keyPoints: [
      "Pielonefritis aguda con criterios de sepsis: manejo hospitalario, antibioterapia empírica intravenosa inmediata (tras hemocultivos/urocultivo), sin esperar resultados microbiológicos.",
      "Descartar obstrucción de la vía urinaria con ecografía; si existe, requiere drenaje urgente (nefrostomía/catéter doble J) además del antibiótico.",
      "La diabetes es un factor de riesgo para evolución complicada (abscesos renales/perirrenales); requiere vigilancia estrecha de la respuesta al tratamiento.",
    ],
  },
];
