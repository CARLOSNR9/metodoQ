import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Tercera Evaluación — Reto del Dr. Q.
 * Fuente: documento revisado por el Dr. Q ("nuevo_reto_dr_q3").
 * El enunciado, las opciones, la respuesta correcta y las explicaciones deben
 * coincidir de forma literal con ese documento.
 */
export const DR_Q_EVAL_3_QUESTIONS: TrainingQuestion[] = [
  {
    "id": "dr-q-eval3-1",
    "examArea": "NEUROLOGÍA / SEMIOLOGÍA",
    "topic": "NEUROLOGÍA / SEMIOLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un paciente de 68 años, diestro, presenta una lesión cortical en el hemisferio derecho. En la exploración neurológica puede mover adecuadamente las extremidades y reconoce los estímulos sensitivos básicos. Sin embargo, ignora sistemáticamente los objetos situados a su izquierda y, al vestirse, solo se coloca la ropa en la mitad derecha de su cuerpo. ¿Cuál de las siguientes alteraciones explica mejor este hallazgo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Agnosia táctil"
      },
      {
        "id": "B",
        "label": "B",
        "text": "Apraxia ideomotora"
      },
      {
        "id": "C",
        "label": "C",
        "text": "Heminegligencia espacial"
      },
      {
        "id": "D",
        "label": "D",
        "text": "Afasia de Wernicke"
      },
    ],
    "correctOptionId": "C",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa heminegligencia es un trastorno de la atención hacia los estímulos del espacio contralateral a una lesión cerebral. Es especialmente característica de lesiones del hemisferio no dominante, habitualmente el derecho, por lo que el paciente ignora el lado izquierdo de su realidad.\nPuede manifestarse como:\n• Ignorar objetos de un lado.\n• No atender a la mitad contralateral del cuerpo.\n• Asomatognosia: no reconoce su hemicuerpo.\n• Anosognosia: no reconoce su propio déficit.\n• Extinción: percibe un estímulo unilateral, pero no el contralateral cuando ambos se presentan simultáneamente.",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa heminegligencia es un trastorno de la atención hacia los estímulos del espacio contralateral a una lesión cerebral. Es especialmente característica de lesiones del hemisferio no dominante, habitualmente el derecho, por lo que el paciente ignora el lado izquierdo de su realidad.\nPuede manifestarse como:\n• Ignorar objetos de un lado.\n• No atender a la mitad contralateral del cuerpo.\n• Asomatognosia: no reconoce su hemicuerpo.\n• Anosognosia: no reconoce su propio déficit.\n• Extinción: percibe un estímulo unilateral, pero no el contralateral cuando ambos se presentan simultáneamente.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nLa clave está en “lesión derecha + ignora todo lo que está a la izquierda”.\nNo estamos ante un problema de fuerza, sensibilidad ni lenguaje. El paciente recibe la información, pero falla en dirigir la atención hacia el hemiespacio contralateral.\n👉 Derecha lesionada → negligencia izquierda.\nEste es uno de esos conceptos que el MIR puede disfrazar con actividades cotidianas: comer únicamente la comida de un lado del plato, afeitarse una mitad de la cara o vestirse solamente una mitad del cuerpo.\n\n❌ ¿POR QUÉ NO LAS OTRAS?\nA. Agnosia táctil:\nEl paciente percibe el estímulo táctil, pero es incapaz de reconocer un objeto mediante el tacto. Es un trastorno de reconocimiento sensorial, no de atención espacial.\nB. Apraxia ideomotora:\nEl paciente conserva fuerza, sensibilidad y coordinación, pero no puede ejecutar correctamente un acto aprendido, pese a comprender lo que se le solicita.\nD. Afasia de Wernicke:\nEs un trastorno del lenguaje asociado al hemisferio dominante, caracterizado por lenguaje fluido pero con comprensión alterada. No explica la omisión sistemática del hemiespacio izquierdo.\n\n🚨 TRAMPA DE EXAMEN\nNegligencia ≠ hemianopsia.\nEn la negligencia el problema fundamental es atencional: el paciente no presta atención al lado contralateral.\nAdemás, recuerda:\nHemisferio derecho no dominante → negligencia izquierda.\nEl manual señala específicamente que la negligencia suele aparecer con lesiones del hemisferio no dominante y que una lesión hemisférica derecha hace que el paciente ignore lo situado a la izquierda.\n\n🎯 REGLA DE ORO DR Q\n“Lo ve, pero no le presta atención” → NEGLIGENCIA.\n“Lo siente, pero no sabe qué es” → AGNOSIA.\n“Sabe qué debe hacer, pero no puede ejecutar el acto aprendido” → APRAXIA.\n\n📚 REFERENCIA\n1. Blumenfeld H. Neuroanatomy Through Clinical Cases. Oxford University Press.\n2. Snell RS. Clinical Neuroanatomy. Wolters Kluwer.\n3. Daroff RB, et al. Bradley’s Neurology in Clinical Practice. Elsevier."
  },
  {
    "id": "dr-q-eval3-2",
    "examArea": "NEUROLOGÍA / SEMIOLOGÍA",
    "topic": "NEUROLOGÍA / SEMIOLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un paciente de 62 años presenta debilidad progresiva en la mitad derecha del cuerpo. En la exploración se encuentra hipertonía, hiperreflexia y signo de Babinski derecho, sin atrofia muscular significativa ni fasciculaciones. ¿Dónde se localiza más probablemente la lesión responsable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Segunda motoneurona periférica"
      },
      {
        "id": "B",
        "label": "B",
        "text": "Primera motoneurona o vía piramidal"
      },
      {
        "id": "C",
        "label": "C",
        "text": "Unión neuromuscular"
      },
      {
        "id": "D",
        "label": "D",
        "text": "Músculo esquelético"
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa lesión de la primera motoneurona produce el clásico síndrome piramidal:\n• Espasticidad / hipertonía\n• Hiperreflexia\n• Babinski positivo\n• Debilidad de distribución piramidal\n• Reflejos cutáneos abolidos\nEn contraste, la lesión de la segunda motoneurona produce hipotonía, hiporreflexia o arreflexia, atrofia intensa y fasciculaciones.",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa lesión de la primera motoneurona produce el clásico síndrome piramidal:\n• Espasticidad / hipertonía\n• Hiperreflexia\n• Babinski positivo\n• Debilidad de distribución piramidal\n• Reflejos cutáneos abolidos\nEn contraste, la lesión de la segunda motoneurona produce hipotonía, hiporreflexia o arreflexia, atrofia intensa y fasciculaciones.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nAquí hay que reconocer el patrón de lesión, no memorizar una estructura aislada.\nEl paciente tiene:\nDebilidad + espasticidad + hiperreflexia + Babinski → 1.ª motoneurona.\nLa primera motoneurona se origina en la corteza motora y sus axones forman la vía piramidal. Por eso, cuando esta vía se lesiona, aparece el síndrome de neurona motora superior.\nEn cambio, si el problema estuviera en la segunda motoneurona, esperaríamos justamente lo contrario: hipotonía, hiporreflexia, atrofia y fasciculaciones.\n\n❌ ¿POR QUÉ NO LAS OTRAS?\nA. Segunda motoneurona periférica:\nEsperaríamos hipotonía, reflejos disminuidos, atrofia intensa y fasciculaciones.\nC. Unión neuromuscular:\nNo explica el síndrome piramidal con Babinski e hiperreflexia.\nD. Músculo esquelético:\nLas miopatías producen típicamente debilidad proximal, con reflejos generalmente conservados o disminuidos, pero sin Babinski.\n\n🚨 TRAMPA DE EXAMEN\nNo confundas atrofia por desuso con lesión de segunda motoneurona.\nLa clave para localizar una lesión motora es mirar tono + reflejos + Babinski + fasciculaciones.\n👉 1.ª motoneurona = espasticidad + hiperreflexia + Babinski.\n👉 2.ª motoneurona = atrofia + fasciculaciones + hiporreflexia.\n\n🎯 REGLA DE ORO DR Q\n“Arriba está rígido y exagerado; abajo está flácido y apagado.”\n1.ª MN → ↑ tono, ↑ ROT, Babinski +\n2.ª MN → ↓ tono, ↓ ROT, fasciculaciones\n\n📚 REFERENCIA\n1. Blumenfeld H. Neuroanatomy Through Clinical Cases. Oxford University Press.\n2. Snell RS. Clinical Neuroanatomy. Wolters Kluwer.\n3. Daroff RB, et al. Bradley’s Neurology in Clinical Practice. Elsevier."
  },
  {
    "id": "dr-q-eval3-3",
    "examArea": "NEUROLOGÍA / NEUROANATOMÍA",
    "topic": "NEUROLOGÍA / NEUROANATOMÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "¿Dónde se localiza principalmente el área cortical encargada de la comprensión del lenguaje?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Giro frontal inferior del hemisferio dominante, correspondiente al área de Broca."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Región temporal posterior perisilviana del hemisferio dominante, correspondiente al área de Wernicke."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Giro precentral del hemisferio dominante, correspondiente al área motora primaria."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Lóbulo occipital del hemisferio dominante, correspondiente a la corteza visual primaria."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEl área de Wernicke se localiza en la región temporal posterior perisilviana del hemisferio dominante y está relacionada fundamentalmente con la comprensión del lenguaje.\nEl hemisferio dominante es el que predomina para las funciones de lenguaje y audición; en la mayoría de las personas diestras corresponde al hemisferio izquierdo.",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEl área de Wernicke se localiza en la región temporal posterior perisilviana del hemisferio dominante y está relacionada fundamentalmente con la comprensión del lenguaje.\nEl hemisferio dominante es el que predomina para las funciones de lenguaje y audición; en la mayoría de las personas diestras corresponde al hemisferio izquierdo.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nPara ubicar las áreas del lenguaje, piensa:\nBROCA → producción motora del lenguaje → frontal.\nWERNICKE → comprensión del lenguaje → temporal posterior.\nLa pregunta busca que relaciones función + localización anatómica.\nUna lesión de Wernicke produce una afasia fluente, con comprensión alterada, parafasias, jergafasia y neologismos.\n\n❌ ¿POR QUÉ NO LAS OTRAS?\nA. Broca: está en el lóbulo frontal y corresponde a la parte motora del lenguaje, no al área principal de comprensión.\nC. Giro precentral: corresponde a la corteza motora primaria.\nD. Lóbulo occipital: está relacionado principalmente con la visión.\n\n🚨 TRAMPA DE EXAMEN\nNo confundas:\nWernicke = comprender → TEMPORAL.\nBroca = producir → FRONTAL.\n\n🎯 PERLA DR Q\n“Si el paciente habla mucho pero no entiende → piensa en WERNICKE.”\n\n📚 REFERENCIAS\n1. Blumenfeld H. Neuroanatomy Through Clinical Cases. Oxford University Press.\n2. Snell RS. Clinical Neuroanatomy. Wolters Kluwer.\n3. Daroff RB, et al. Bradley’s Neurology in Clinical Practice. Elsevier."
  },
  {
    "id": "dr-q-eval3-4",
    "examArea": "NEUROLOGÍA / NEUROANATOMÍA",
    "topic": "NEUROLOGÍA / NEUROANATOMÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un paciente presenta un trastorno del lenguaje caracterizado por habla fluida, abundantes parafasias y marcada dificultad para comprender lo que se le dice. ¿Qué estructura cortical está principalmente afectada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Área de Broca, localizada en el giro frontal inferior del hemisferio dominante."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Área de Wernicke, localizada en la región temporal posterior perisilviana del hemisferio dominante."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Circunvolución supramarginal, relacionada principalmente con la corteza motora del lenguaje."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Corteza motora primaria, localizada en el giro precentral del hemisferio dominante."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa afasia de Wernicke se caracteriza por:\n• Fluencia conservada o aumentada.\n• Comprensión alterada.\n• Parafasias y jergafasia.\n• Neologismos.\n• Habitualmente el paciente no es consciente del déficit.\n• Se relaciona con una lesión de la región temporal perisilviana posterior del hemisferio dominante.",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa afasia de Wernicke se caracteriza por:\n• Fluencia conservada o aumentada.\n• Comprensión alterada.\n• Parafasias y jergafasia.\n• Neologismos.\n• Habitualmente el paciente no es consciente del déficit.\n• Se relaciona con una lesión de la región temporal perisilviana posterior del hemisferio dominante.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nAquí la clave es reconocer el patrón clínico antes de pensar en la anatomía:\nHabla fluida + comprensión mala + parafasias → WERNICKE.\nEn cambio:\nHabla no fluida + comprensión relativamente conservada → BROCA.\nEl Manual AMIR resume que la fluencia, la comprensión y la repetición son las variables fundamentales para clasificar las afasias.\n\n❌ ¿POR QUÉ NO LAS OTRAS?\nA. Broca: corresponde a la parte motora del lenguaje y su lesión produce un lenguaje poco fluido, telegráfico y agramatical, con comprensión relativamente conservada.\nC. Circunvolución supramarginal: participa en la afasia de conducción cuando existe desconexión entre Broca y Wernicke, especialmente por lesión del fascículo arcuato.\nD. Corteza motora primaria: su lesión produce fundamentalmente déficit motor contralateral, no una afasia de comprensión.\n\n🚨 TRAMPA DE EXAMEN\nWernicke no significa simplemente \"habla mal\".\nEl paciente puede hablar muchísimo y con fluidez, pero el contenido es incoherente y no comprende adecuadamente el lenguaje.\n\n🎯 PERLA DR Q\n\nWERNICKE = FLUIDEZ ↑ + COMPRENSIÓN ↓ + PARAFASIAS.\n\n📚 REFERENCIAS\n1. Blumenfeld H. Neuroanatomy Through Clinical Cases. Oxford University Press.\n2. Snell RS. Clinical Neuroanatomy. Wolters Kluwer.\n3. Daroff RB, et al. Bradley’s Neurology in Clinical Practice. Elsevier."
  },
  {
    "id": "dr-q-eval3-5",
    "examArea": "NEUROLOGÍA / DIENCÉFALO",
    "topic": "NEUROLOGÍA / DIENCÉFALO",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "¿Cuál de las siguientes funciones está principalmente relacionada con el hipotálamo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Integración de la sensibilidad vibratoria y propioceptiva consciente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Regulación de la temperatura corporal, osmolaridad, sed y funciones endocrinas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Generación de movimientos voluntarios mediante la corteza motora primaria."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Procesamiento cortical de la información visual procedente de la retina."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEl hipotálamo es el principal centro de regulación de las funciones viscerales y de la homeostasis.\nEntre sus funciones fundamentales están:\n• 🌡️ Regulación de la temperatura corporal.\n• 💧 Regulación de la osmolaridad plasmática.\n• 🥤 Control de la sed.\n• 🍽️ Control del hambre.\n• 😴 Influencia sobre el ciclo vigilia-sueño.\n• 🧪 Control endocrino mediante su influencia sobre la hipófisis.",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEl hipotálamo es el principal centro de regulación de las funciones viscerales y de la homeostasis.\nEntre sus funciones fundamentales están:\n• 🌡️ Regulación de la temperatura corporal.\n• 💧 Regulación de la osmolaridad plasmática.\n• 🥤 Control de la sed.\n• 🍽️ Control del hambre.\n• 😴 Influencia sobre el ciclo vigilia-sueño.\n• 🧪 Control endocrino mediante su influencia sobre la hipófisis.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nPiensa en el hipotálamo como el \"termostato y centro de homeostasis\" del SNC.\nSi el examen te habla de:\ntemperatura + osmolaridad + sed + hambre + endocrinología → HIPOTÁLAMO.\nNo necesitas memorizar cada núcleo hipotalámico para esta pregunta. Primero debes reconocer su función global: mantener estable el medio interno.\n\n❌ ¿POR QUÉ NO LAS OTRAS?\nA. Sensibilidad vibratoria y propioceptiva: corresponde fundamentalmente a los cordones posteriores–lemnisco medial, no al hipotálamo.\nC. Movimientos voluntarios: la ejecución motora depende principalmente de la corteza motora y las vías motoras, estructuras que el manual aborda posteriormente dentro de los sistemas motores.\nD. Información visual: corresponde a las vías y corteza visual, principalmente relacionadas con el lóbulo occipital.\n\n🚨 TRAMPA DE EXAMEN\nNo confundas:\n\nHIPOTÁLAMO → HOMEOSTASIS\ncon\n\nHIPÓFISIS → EJECUCIÓN DE LA RESPUESTA ENDOCRINA.\nEl hipotálamo regula la función de la hipófisis, pero no es simplemente \"una glándula endocrina\".\n\n🎯 PERLA DR Q\nSi te preguntan quién mantiene el equilibrio del medio interno: piensa HIPOTÁLAMO.\nY ojo: la siguiente parte del libro es el subtálamo y el tálamo, donde aparece una asociación MUY preguntable: lesión del núcleo subtalámico de Luys → hemibalismo.\n\n📚 REFERENCIA\nManual Neurología y Neurocirugía — Tema 1: Semiología, apartado 1.2. Diencéfalo."
  },
  {
    "id": "dr-q-eval3-6",
    "examArea": "NEUROANATOMÍA",
    "topic": "NEUROANATOMÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Respecto a las funciones del lóbulo frontal, ¿cuál de las siguientes asociaciones es CORRECTA?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Área de Broca → comprensión del lenguaje."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Área premotora → planificación y programación del movimiento."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Área motora primaria → memoria y aprendizaje."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Centro oculógiro frontal → percepción visual."
      },
    ],
    "correctOptionId": "B",
    "explanation": "El lóbulo frontal participa principalmente en la actividad motora y las conductas sociales. En su región prerrolándica se encuentran el área motora primaria, área premotora, área motora suplementaria, área de Broca y centro oculógiro frontal. Las áreas premotora y motora suplementaria participan en la planificación/programación de los movimientos.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLóbulo frontal = MOTOR + CONDUCTA\nDentro de la región prerrolándica:\n• Área motora primaria: ejecución del movimiento.\n• Área premotora: planificación/programación motora, especialmente musculatura proximal.\n• Área motora suplementaria: planificación/programación motora, con predominio medial y participación en unidades distales.\n• Área de Broca: componente motor del lenguaje.\n• Centro oculógiro frontal: movimientos oculares conjugados.\n🔥 Perla MIR\nNo confundas:\nPremotora + suplementaria = PLANIFICAN\nMotora primaria = EJECUTA\nBroca = PRODUCCIÓN DEL LENGUAJE",
    "keyPoints": [],
    "theoryContent": "El lóbulo frontal participa principalmente en la actividad motora y las conductas sociales. En su región prerrolándica se encuentran el área motora primaria, área premotora, área motora suplementaria, área de Broca y centro oculógiro frontal. Las áreas premotora y motora suplementaria participan en la planificación/programación de los movimientos.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLóbulo frontal = MOTOR + CONDUCTA\nDentro de la región prerrolándica:\n• Área motora primaria: ejecución del movimiento.\n• Área premotora: planificación/programación motora, especialmente musculatura proximal.\n• Área motora suplementaria: planificación/programación motora, con predominio medial y participación en unidades distales.\n• Área de Broca: componente motor del lenguaje.\n• Centro oculógiro frontal: movimientos oculares conjugados.\n🔥 Perla MIR\nNo confundas:\nPremotora + suplementaria = PLANIFICAN\nMotora primaria = EJECUTA\nBroca = PRODUCCIÓN DEL LENGUAJE\n\n👨‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nLa clave está en diferenciar planificación de ejecución.\n1️⃣ ¿Quieres realizar un movimiento?\nPrimero necesitas programarlo.\nAhí participan las áreas premotora y motora suplementaria.\n2️⃣ ¿Después qué ocurre?\nLa orden llega al área motora primaria, encargada de ejecutar el movimiento.\nPor eso, si el examen pregunta:\n“¿Qué área participa en la planificación/programación motora?”\n👉 Premotora / suplementaria.\n3️⃣ ¿Y Broca?\nBroca también está en el lóbulo frontal, pero no significa \"área motora de cualquier movimiento\": es la parte motora del lenguaje.\n\n❌ ¿POR QUÉ NO LAS OTRAS?\nA. Área de Broca → comprensión ❌\nIncorrecto. Broca corresponde a la parte motora del lenguaje. La comprensión se relaciona clásicamente con Wernicke.\nC. Área motora primaria → memoria ❌\nLa memoria y el aprendizaje se asocian principalmente al lóbulo temporal en este esquema.\nD. Centro oculógiro frontal → percepción visual ❌\nParticipa en los movimientos oculares conjugados, no en la percepción visual.\n\n⚠️ TRAMPA DE EXAMEN\nEl error típico es meter todas las funciones motoras en el mismo saco.\n\nPLANIFICACIÓN ≠ EJECUCIÓN\n🧠 Premotora/suplementaria → planifica\n🧠 Motora primaria → ejecuta\nY recuerda que Broca está en el frontal, pero su función específica es el lenguaje motor.\n\n🏆 REGLA DE ORO DR Q\n“Primero PLANIFICO, después EJECUTO.”\nPremotora → planifica.\nMotora primaria → ejecuta.\n\n📚 REFERENCIAS\n• Manual Neurología y Neurocirugía, Tema : Semiología, apartado Síndromes por afectación de los lóbulos cerebrales."
  },
  {
    "id": "dr-q-eval3-7",
    "examArea": "NEUROANATOMÍA",
    "topic": "NEUROANATOMÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un paciente presenta una lesión en el hemisferio dominante, localizada en la circunvolución angular. ¿Cuál de los siguientes hallazgos sería más característico?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Heminegligencia espacial y anosognosia."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Síndrome de Gerstmann con acalculia, agrafia y agnosia digital."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Afasia de Wernicke con habla fluida y mala comprensión."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Apraxia oculomotora con ataxia óptica."
      },
    ],
    "correctOptionId": "B",
    "explanation": "La circunvolución angular del hemisferio dominante es una localización clásica del síndrome de Gerstmann, caracterizado por:\n• Agrafia\n• Alexia\n• Acalculia\n• Agnosia digital\n• Desorientación derecha-izquierda\nEl Manual AMIR lo relaciona específicamente con una lesión de la circunvolución angular o pliegue curvo dominante.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\nCircunvolución angular dominante → GERSTMANN\nLa asociación que quiero que te quede grabada es:\n🧠 Gerstmann = “no sé escribir, calcular, reconocer mis dedos ni distinguir derecha de izquierda”.\nGerstmann:\nA → Acalculia\nA → Agrafia\nA → Agnosia digital\nD → desorientación Derecha-izquierda\nY además puede aparecer alexia.",
    "keyPoints": [],
    "theoryContent": "La circunvolución angular del hemisferio dominante es una localización clásica del síndrome de Gerstmann, caracterizado por:\n• Agrafia\n• Alexia\n• Acalculia\n• Agnosia digital\n• Desorientación derecha-izquierda\nEl Manual AMIR lo relaciona específicamente con una lesión de la circunvolución angular o pliegue curvo dominante.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\nCircunvolución angular dominante → GERSTMANN\nLa asociación que quiero que te quede grabada es:\n🧠 Gerstmann = “no sé escribir, calcular, reconocer mis dedos ni distinguir derecha de izquierda”.\nGerstmann:\nA → Acalculia\nA → Agrafia\nA → Agnosia digital\nD → desorientación Derecha-izquierda\nY además puede aparecer alexia.\n\n👨‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nAquí la clave no es memorizar cinco síntomas aislados.\nLa circunvolución angular dominante participa en funciones relacionadas con la integración de información lingüística, simbólica y espacial.\nPor eso, cuando se lesiona, aparecen problemas aparentemente diferentes:\n• escribir → agrafia\n• leer → alexia\n• realizar cálculos → acalculia\n• identificar los dedos → agnosia digital\n• diferenciar derecha e izquierda → desorientación D-I\nTodos estos déficits se agrupan en el síndrome de Gerstmann.\n🔥 Lo importante:\nSi el examen te da:\n“Lesión de circunvolución angular dominante”\ntu cerebro debería responder inmediatamente:\n\nGERSTMANN.\n\n❌ ¿POR QUÉ NO LAS OTRAS?\nA. Heminegligencia + anosognosia ❌\nSon características clásicas de lesión del hemisferio no dominante, especialmente parietal.\nC. Afasia de Wernicke ❌\nWernicke corresponde al lóbulo temporal dominante, en su región perisilviana posterior.\nD. Síndrome de Balint ❌\nLa tríada de apraxia oculomotora, ataxia óptica y simultagnosia se relaciona con lesiones occipitoparietales bilaterales.\n\n⚠️ TRAMPA DE EXAMEN\nNo confundas:\n\nPARIETAL DOMINANTE\n→ Gerstmann\ncon\n\nPARIETAL NO DOMINANTE\n→ heminegligencia + anosognosia + alteraciones visuoespaciales.\n\n🏆 REGLA DE ORO DR Q\n“Angular dominante = GERSTMANN.”\nAgrafia + Acalculia + Agnosia digital + derecha/izquierda.\n\n📚 REFERENCIAS\n• Manual Neurología y Neurocirugía — Tema Semiología: síndromes por afectación de los lóbulos cerebrales y lesión del lóbulo parietal dominante."
  },
  {
    "id": "dr-q-eval3-8",
    "examArea": "NEUROLOGÍA / MOTONEURONA",
    "topic": "NEUROLOGÍA / MOTONEURONA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un paciente de 58 años presenta debilidad progresiva de las cuatro extremidades desde hace 14 meses. En la exploración se observa atrofia y fasciculaciones en la musculatura de las manos, asociadas a hiperreflexia generalizada y signo de Babinski bilateral. No presenta alteraciones sensitivas ni esfinterianas.\n¿Cuál de los siguientes diagnósticos explica mejor este cuadro?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Polineuropatía periférica, por afectación difusa de los nervios periféricos."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Mielopatía cervical, por compromiso predominante de las raíces nerviosas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Esclerosis lateral amiotrófica, por afectación simultánea de primera y segunda motoneurona."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Esclerosis múltiple, por lesiones desmielinizantes multifocales del SNC."
      },
    ],
    "correctOptionId": "C",
    "explanation": "La clave está en la combinación de signos de primera y segunda motoneurona:\n• Segunda motoneurona: atrofia + fasciculaciones → lesión de asta anterior/motoneurona inferior.\n• Primera motoneurona: hiperreflexia + Babinski → lesión de la vía corticoespinal.\n• Ausencia de síntomas sensitivos → orienta fuertemente hacia enfermedad de motoneurona.\nLa combinación de ambos niveles de afectación en un cuadro progresivo es característica de la esclerosis lateral amiotrófica (ELA).\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 ELA = 1.ª + 2.ª MOTONEURONA\nPrimera motoneurona → vía corticoespinal\n• ↑ reflejos\n• Espasticidad\n• Babinski +\n• Debilidad\nSegunda motoneurona → asta anterior/nervio motor\n• Atrofia\n• Fasciculaciones\n• Hipotonía\n• Debilidad\n• Hiporreflexia en el territorio afectado\n👉 Si aparecen signos de ambas simultáneamente + no hay alteración sensitiva → piensa en ELA.",
    "keyPoints": [],
    "theoryContent": "La clave está en la combinación de signos de primera y segunda motoneurona:\n• Segunda motoneurona: atrofia + fasciculaciones → lesión de asta anterior/motoneurona inferior.\n• Primera motoneurona: hiperreflexia + Babinski → lesión de la vía corticoespinal.\n• Ausencia de síntomas sensitivos → orienta fuertemente hacia enfermedad de motoneurona.\nLa combinación de ambos niveles de afectación en un cuadro progresivo es característica de la esclerosis lateral amiotrófica (ELA).\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 ELA = 1.ª + 2.ª MOTONEURONA\nPrimera motoneurona → vía corticoespinal\n• ↑ reflejos\n• Espasticidad\n• Babinski +\n• Debilidad\nSegunda motoneurona → asta anterior/nervio motor\n• Atrofia\n• Fasciculaciones\n• Hipotonía\n• Debilidad\n• Hiporreflexia en el territorio afectado\n👉 Si aparecen signos de ambas simultáneamente + no hay alteración sensitiva → piensa en ELA.\n\n🧑‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nAquí la pregunta no pretende que memorices simplemente \"fasciculaciones = ELA\".\nLo importante es localizar la lesión.\nEl paciente tiene atrofia y fasciculaciones, lo que te dice:\n\"Hay lesión de la segunda motoneurona.\"\nPero simultáneamente tiene:\n\"hiperreflexia + Babinski → lesión de la primera motoneurona.\"\nEntonces tienes dos niveles de la vía motora afectados al mismo tiempo.\nY aparece otro dato brutal:\n\n🚨 NO HAY ALTERACIÓN SENSITIVA.\nEso hace que una polineuropatía sea mucho menos probable y orienta hacia una enfermedad que afecta predominantemente al sistema motor.\nPor eso:\n1.ª motoneurona + 2.ª motoneurona + ausencia de síntomas sensitivos = ELA.\n\n❌ ¿POR QUÉ NO LAS OTRAS?\nA. Polineuropatía periférica ❌\nEsperarías afectación de nervios periféricos, habitualmente con síntomas sensitivos y signos de segunda motoneurona, pero no explica bien la combinación de Babinski + hiperreflexia generalizada.\nB. Mielopatía cervical ❌\nPuede producir signos de primera y segunda motoneurona dependiendo del nivel, pero la distribución y la progresión descritas, junto con la ausencia de alteraciones sensitivas, hacen mucho más característica una enfermedad de motoneurona.\nD. Esclerosis múltiple ❌\nPuede producir signos piramidales, pero el cuadro clásico de atrofia y fasciculaciones asociadas a signos piramidales orienta hacia enfermedad de motoneurona.\n\n⚠️ TRAMPA DE EXAMEN\nFasciculaciones NO significan automáticamente ELA.\nLa verdadera pista es:\nFasciculaciones/atrofia + hiperreflexia/Babinski.\nEs decir:\n\nSIGNOS DE 2.ª MOTONEURONA + SIGNOS DE 1.ª MOTONEURONA\nEse es el patrón que tienes que reconocer.\n\n📚 REFERENCIAS\n• Manual de Neurología. Enfermedades de la motoneurona.\n• Manual de Neuroanatomía. Vía corticoespinal y sistema motor.\n• Bradley & Daroff. Neurology in Clinical Practice. Motor neuron diseases.\n• Adams and Victor's Principles of Neurology. Motor neuron disorders."
  },
  {
    "id": "dr-q-eval3-9",
    "examArea": "NEUROLOGÍA / LÓBULO FRONTAL",
    "topic": "NEUROLOGÍA / LÓBULO FRONTAL",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un paciente de 59 años presenta desde hace aproximadamente 2 años cambios progresivos de conducta, con pérdida de las normas sociales, comentarios inapropiados, impulsividad y conductas repetitivas. La familia refiere que su memoria para hechos recientes se encuentra relativamente conservada. En la exploración destaca dificultad para inhibir respuestas y para adaptar su conducta a diferentes situaciones.\n¿Cuál de las siguientes estructuras se relaciona más directamente con este patrón de alteración conductual?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Corteza orbitofrontal, relacionada con la inhibición y el control de la conducta social."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Corteza occipital primaria, relacionada principalmente con el procesamiento visual."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Corteza temporal medial, fundamental para la consolidación de nuevos recuerdos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Corteza somatosensorial primaria, responsable del procesamiento de la sensibilidad corporal."
      },
    ],
    "correctOptionId": "A",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa corteza orbitofrontal participa especialmente en:\n• Inhibición de conductas\n• Control de impulsos\n• Conducta social\n• Evaluación de recompensas y castigos\n• Adaptación de la conducta según las consecuencias\nPor eso, cuando se altera, pueden aparecer:\nDesinhibición + impulsividad + conducta social inapropiada + pérdida de juicio.\nEsto encaja muy bien con la variante conductual de la demencia frontotemporal.",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa corteza orbitofrontal participa especialmente en:\n• Inhibición de conductas\n• Control de impulsos\n• Conducta social\n• Evaluación de recompensas y castigos\n• Adaptación de la conducta según las consecuencias\nPor eso, cuando se altera, pueden aparecer:\nDesinhibición + impulsividad + conducta social inapropiada + pérdida de juicio.\nEsto encaja muy bien con la variante conductual de la demencia frontotemporal.\n\n🧑‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nAquí quiero que pienses en el lóbulo frontal como el \"director ejecutivo\" de la conducta.\nNo solamente se encarga de movernos.\nTambién decide:\n\"¿Esto que estoy pensando lo debo hacer o no?\"\nLa región orbitofrontal funciona como un importante sistema de freno conductual.\nPor eso, si se lesiona, el paciente puede comenzar a:\n• decir cosas inapropiadas,\n• gastar dinero impulsivamente,\n• comer compulsivamente,\n• perder las normas sociales,\n• actuar sin valorar las consecuencias.\nY aquí aparece una pista fundamental del caso:\n\n🚨 CAMBIO DE PERSONALIDAD + DESINHIBICIÓN + MEMORIA RELATIVAMENTE CONSERVADA\nPiensa primero en:\n\nDEMENCIA FRONTOTEMPORAL → VARIANTE CONDUCTUAL.\n\n🔥 DIFERENCIA ANATÓMICA DE ALTO RENDIMIENTO\nRegión frontal | Alteración predominante\nOrbitofrontal | Desinhibición, impulsividad, conducta social inapropiada\nDorsolateral | Funciones ejecutivas, planificación, flexibilidad mental\nMedial/cingulada anterior | Apatía, abulia, pérdida de iniciativa\nÁrea motora primaria | Déficit motor\n\n⚠️ TRAMPA DE EXAMEN\nNo confundas:\n\"Demencia frontotemporal\" → diagnóstico clínico.\ncon:\n\"Corteza orbitofrontal\" → localización anatómica especialmente relacionada con desinhibición y conducta social.\n\n❌ ¿POR QUÉ NO LAS OTRAS?\nB. Corteza occipital ❌\nSu función principal está relacionada con el procesamiento visual.\nC. Corteza temporal medial ❌\nEl hipocampo y estructuras temporales mediales son fundamentales para la memoria episódica, por lo que su afectación es más característica de síndromes amnésicos.\nD. Corteza somatosensorial primaria ❌\nProcesa información sensitiva corporal; no explica la desinhibición conductual.\n\n🎯 PERLA DOCTOR Q\n\"Si el paciente pierde el freno social, piensa en la corteza orbitofrontal.\"\nY recuerda el mapa:\n🧠 Orbitofrontal = inhibición\n🧠 Dorsolateral = planificación\n🧠 Medial = iniciativa\n\n📚 REFERENCIAS\n• Adams and Victor's Principles of Neurology. Dementia and cognitive disorders.\n• Bradley & Daroff. Neurology in Clinical Practice. Frontotemporal dementia and frontal lobe syndromes."
  },
  {
    "id": "dr-q-eval3-10",
    "examArea": "NEUROLOGÍA / CORDONES POSTERIORES",
    "topic": "NEUROLOGÍA / CORDONES POSTERIORES",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Una mujer de 52 años consulta por inestabilidad de la marcha y dificultad para mantener el equilibrio, especialmente al cerrar los ojos. En la exploración presenta pérdida de la sensibilidad vibratoria y propioceptiva en ambos miembros inferiores, con fuerza conservada. El signo de Romberg es claramente positivo.\n¿Cuál de las siguientes estructuras está principalmente afectada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Cordones posteriores de la médula espinal, responsables de la propiocepción y sensibilidad vibratoria."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Tractos espinotalámicos laterales, responsables de la sensibilidad termoalgésica."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Tractos corticoespinales laterales, responsables de la motricidad voluntaria."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Astas anteriores de la médula espinal, responsables de la motoneurona inferior."
      },
    ],
    "correctOptionId": "A",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLos cordones posteriores transmiten principalmente:\n• Propiocepción consciente\n• Sensibilidad vibratoria\n• Tacto discriminativo\nPor eso, su lesión produce:\nPérdida de vibración + pérdida de posición articular + Romberg positivo.\nEl paciente puede tener fuerza completamente normal.",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLos cordones posteriores transmiten principalmente:\n• Propiocepción consciente\n• Sensibilidad vibratoria\n• Tacto discriminativo\nPor eso, su lesión produce:\nPérdida de vibración + pérdida de posición articular + Romberg positivo.\nEl paciente puede tener fuerza completamente normal.\n\n🧑‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nAquí tienes que aprender a localizar por modalidad sensitiva.\nSi te dicen:\n\"No siente vibración ni sabe dónde están sus articulaciones\"\n👉 piensa inmediatamente en cordones posteriores.\nAhora viene la segunda pista:\n¿Por qué empeora al cerrar los ojos?\nPorque mientras tiene los ojos abiertos puede utilizar la visión como compensación.\nPero cuando los cierra, pierde esa referencia visual y queda dependiendo de su propiocepción.\nPor eso:\nLesión de cordones posteriores → Romberg positivo.\n\n🔥 ¿Y QUÉ TIENE QUE VER LA B12?\nEsta pregunta introduce un contexto clásico:\nGastritis atrófica → déficit de vitamina B12 → afectación neurológica.\nLa deficiencia de B12 puede producir degeneración combinada subaguda, que afecta fundamentalmente:\n• Cordones posteriores → pérdida de vibración y propiocepción.\n• Tractos corticoespinales → signos piramidales.\nPor eso un paciente con déficit de B12 puede terminar presentando una combinación de:\nRomberg positivo + alteración de vibración/propiocepción ± signos de primera motoneurona.\n\n⚠️ TRAMPA DE EXAMEN\nRomberg positivo NO significa exclusivamente enfermedad vestibular.\nSi el paciente tiene:\nRomberg + pérdida de vibración/propiocepción\n→ piensa en ataxia sensitiva por afectación de cordones posteriores.\n\n❌ ¿POR QUÉ NO LAS OTRAS?\nB. Tracto espinotalámico ❌\nTransmite principalmente dolor y temperatura. Su lesión produciría alteraciones termoalgésicas, no una pérdida predominante de vibración y propiocepción.\nC. Tracto corticoespinal ❌\nSu lesión produce signos de primera motoneurona: espasticidad, hiperreflexia y Babinski.\nD. Astas anteriores ❌\nAfectan a la segunda motoneurona, produciendo debilidad, atrofia, fasciculaciones e hiporreflexia.\n\n🎯 PERLA DOCTOR Q\n\"Vibración + posición + Romberg = cordones posteriores.\"\nY si además aparece:\nB12 baja + cordones posteriores + vía piramidal → degeneración combinada subaguda.\n\n📚 REFERENCIAS\n• Adams and Victor's Principles of Neurology. Disorders of the spinal cord and sensory systems.\n• Bradley & Daroff. Neurology in Clinical Practice. Myelopathies and disorders of sensory pathways."
  },
  {
    "id": "dr-q-eval3-11",
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un hombre de 64 años consulta por un cuadro progresivo de 3 años de evolución caracterizado por lentitud de movimientos y rigidez, inicialmente predominantes en la extremidad superior izquierda. En el último año ha desarrollado dificultad para utilizar esa mano pese a conservar la fuerza, con movimientos involuntarios de la extremidad que el paciente describe como si «no le perteneciera». En la exploración presenta parkinsonismo marcadamente asimétrico, apraxia ideomotora y alteración de la sensibilidad cortical. ¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Enfermedad de Parkinson idiopática."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Degeneración corticobasal."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Demencia con cuerpos de Lewy."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Atrofia multisistémica."
      },
    ],
    "correctOptionId": "B",
    "explanation": "¿POR QUÉ?\nLa clave no es simplemente encontrar parkinsonismo, sino reconocer la combinación:\nParkinsonismo muy asimétrico + apraxia + signos corticales + fenómeno de “extremidad ajena” → degeneración corticobasal.\nLa degeneración corticobasal es un parkinsonismo atípico caracterizado clásicamente por una afectación marcadamente asimétrica y la asociación de signos extrapiramidales con manifestaciones corticales.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔑 Enfermedad de Parkinson idiopática\nPiensa en:\n• Bradicinesia.\n• Rigidez.\n• Temblor de reposo.\n• Alteración postural en fases evolucionadas.\n• Respuesta a levodopa.\n• Puede asociar trastorno de conducta del sueño REM.\n🔑 Degeneración corticobasal\nLa palabra que debes tener grabada es:\n\nCORTICAL + PARKINSONISMO ASIMÉTRICO\nBusca:\n• Parkinsonismo marcadamente asimétrico.\n• Apraxia.\n• Alteración de sensibilidad cortical.\n• Fenómeno de extremidad ajena.\n• Distonía.\n• Mioclonías.\n👉 Si aparece una mano que parece “no pertenecerle” al paciente, piensa en degeneración corticobasal.\n🔑 Diferencia rápida\nEnfermedad | Pista característica\nParkinson idiopático | Parkinsonismo típico + buena respuesta a levodopa\nDegeneración corticobasal | Parkinsonismo asimétrico + signos corticales\nCuerpos de Lewy | Demencia + fluctuaciones + alucinaciones visuales + parkinsonismo\nAtrofia multisistémica | Parkinsonismo + disautonomía ± signos cerebelosos",
    "keyPoints": [],
    "theoryContent": "¿POR QUÉ?\nLa clave no es simplemente encontrar parkinsonismo, sino reconocer la combinación:\nParkinsonismo muy asimétrico + apraxia + signos corticales + fenómeno de “extremidad ajena” → degeneración corticobasal.\nLa degeneración corticobasal es un parkinsonismo atípico caracterizado clásicamente por una afectación marcadamente asimétrica y la asociación de signos extrapiramidales con manifestaciones corticales.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔑 Enfermedad de Parkinson idiopática\nPiensa en:\n• Bradicinesia.\n• Rigidez.\n• Temblor de reposo.\n• Alteración postural en fases evolucionadas.\n• Respuesta a levodopa.\n• Puede asociar trastorno de conducta del sueño REM.\n🔑 Degeneración corticobasal\nLa palabra que debes tener grabada es:\n\nCORTICAL + PARKINSONISMO ASIMÉTRICO\nBusca:\n• Parkinsonismo marcadamente asimétrico.\n• Apraxia.\n• Alteración de sensibilidad cortical.\n• Fenómeno de extremidad ajena.\n• Distonía.\n• Mioclonías.\n👉 Si aparece una mano que parece “no pertenecerle” al paciente, piensa en degeneración corticobasal.\n🔑 Diferencia rápida\nEnfermedad | Pista característica\nParkinson idiopático | Parkinsonismo típico + buena respuesta a levodopa\nDegeneración corticobasal | Parkinsonismo asimétrico + signos corticales\nCuerpos de Lewy | Demencia + fluctuaciones + alucinaciones visuales + parkinsonismo\nAtrofia multisistémica | Parkinsonismo + disautonomía ± signos cerebelosos\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nVamos a razonarla como residente:\nPaso 1 → ¿Hay parkinsonismo?\nSí: hay bradicinesia y rigidez.\nPaso 2 → ¿Es simétrico?\nNo. Es muy asimétrico, lo que ya debe hacerte pensar en un parkinsonismo atípico.\nPaso 3 → ¿Hay signos que NO son propios de un Parkinson puro?\nSí:\n• Apraxia.\n• Alteración cortical sensitiva.\n• Extremidad ajena.\nPaso 4 → ¿Qué enfermedad combina parkinsonismo asimétrico con signos corticales?\n👉 Degeneración corticobasal.\n\n⚠️ TRAMPA DE EXAMEN\nNo todo paciente con rigidez + bradicinesia tiene enfermedad de Parkinson.\nCuando aparezcan signos corticales, especialmente:\nAPraxia + extremidad ajena + parkinsonismo asimétrico\n\n🚨 SAL DEL DIAGNÓSTICO DE PARKINSON IDIOPÁTICO.\nPiensa en degeneración corticobasal.\n\n📚 REFERENCIAS\n• Jankovic J. Parkinson’s disease: clinical features and diagnosis. Journal of Neurology, Neurosurgery & Psychiatry.\n• Armstrong MJ, et al. Criteria for the diagnosis of corticobasal degeneration. Neurology."
  },
  {
    "id": "dr-q-eval3-12",
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Una mujer de 58 años presenta de forma súbita dificultad para formar nuevos recuerdos. Repite constantemente las mismas preguntas y no recuerda lo ocurrido desde el inicio del episodio. Sin embargo, reconoce a sus familiares, mantiene su identidad y puede realizar correctamente acciones habituales. No presenta déficit neurológico focal, alteración del nivel de conciencia ni crisis epilépticas. Tras aproximadamente 10 horas, recupera progresivamente la capacidad de formar nuevos recuerdos y no vuelve a presentar síntomas.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Amnesia global transitoria."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Amnesia epiléptica transitoria."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Síndrome confusional agudo."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Amnesia disociativa."
      },
    ],
    "correctOptionId": "A",
    "explanation": "¿POR QUÉ?\nEl patrón clásico es:\nInicio brusco + amnesia anterógrada intensa + repetición de preguntas + identidad y conciencia conservadas + ausencia de otros déficits neurológicos + resolución espontánea en <24 h.\nLa paciente no puede almacenar nuevos recuerdos, pero conserva otras funciones cognitivas y sabe quién es.\nEl caso destaca precisamente este patrón: amnesia anterógrada abolida, memoria retrógrada relativamente conservada y resolución espontánea alrededor de las 15 horas.\n\n📚 LO QUE DEBES SABER PARA EL EXAMEN\n🔑 Amnesia global transitoria (AGT)\nPiensa:\n“¿Qué acaba de pasar?” → repetición constante de preguntas.\nCaracterísticas:\n• Inicio súbito.\n• Amnesia anterógrada predominante.\n• Puede existir cierto componente de amnesia retrógrada.\n• Identidad personal conservada.\n• Conciencia conservada.\n• No hay focalidad neurológica relevante.\n• Duración habitualmente de horas.\n• Debe resolverse completamente en menos de 24 horas.\n• Después queda una laguna correspondiente al episodio.\nPuede aparecer después de situaciones precipitantes como esfuerzo físico intenso, estrés emocional o maniobras de Valsalva; en este caso, el episodio aparece después de una tos intensa.",
    "keyPoints": [],
    "theoryContent": "¿POR QUÉ?\nEl patrón clásico es:\nInicio brusco + amnesia anterógrada intensa + repetición de preguntas + identidad y conciencia conservadas + ausencia de otros déficits neurológicos + resolución espontánea en <24 h.\nLa paciente no puede almacenar nuevos recuerdos, pero conserva otras funciones cognitivas y sabe quién es.\nEl caso destaca precisamente este patrón: amnesia anterógrada abolida, memoria retrógrada relativamente conservada y resolución espontánea alrededor de las 15 horas.\n\n📚 LO QUE DEBES SABER PARA EL EXAMEN\n🔑 Amnesia global transitoria (AGT)\nPiensa:\n“¿Qué acaba de pasar?” → repetición constante de preguntas.\nCaracterísticas:\n• Inicio súbito.\n• Amnesia anterógrada predominante.\n• Puede existir cierto componente de amnesia retrógrada.\n• Identidad personal conservada.\n• Conciencia conservada.\n• No hay focalidad neurológica relevante.\n• Duración habitualmente de horas.\n• Debe resolverse completamente en menos de 24 horas.\n• Después queda una laguna correspondiente al episodio.\nPuede aparecer después de situaciones precipitantes como esfuerzo físico intenso, estrés emocional o maniobras de Valsalva; en este caso, el episodio aparece después de una tos intensa.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q.\nPaso 1 → ¿Está consciente?\nSí.\nPor tanto, no estamos ante una alteración global del nivel de conciencia.\nPaso 2 → ¿Puede formar recuerdos nuevos?\n❌ No.\nEsta es la alteración principal:\n\nAMNESIA ANTERÓGRADA.\nPaso 3 → ¿Sabe quién es?\n✅ Sí.\nEsto es muy importante. La paciente conserva su identidad y reconoce a las personas.\nPaso 4 → ¿Tiene otros déficits neurológicos?\n❌ No.\nNo hay paresia, alteración del lenguaje, alteración de la conciencia ni otros signos focales.\nPaso 5 → ¿Cuánto dura?\nHoras y se resuelve espontáneamente.\n👉 <24 horas = piensa en amnesia global transitoria.\n\n❌ ¿POR QUÉ NO LAS OTRAS?\nB. Amnesia epiléptica transitoria: suele presentar episodios más breves y recurrentes, con frecuencia al despertar, y puede asociarse a otros datos sugestivos de epilepsia.\nC. Síndrome confusional agudo: existe una alteración más amplia de la atención y de la conciencia, no simplemente una incapacidad aislada para formar nuevos recuerdos.\nD. Amnesia disociativa: suele relacionarse con acontecimientos psicológicamente relevantes y puede afectar especialmente la memoria autobiográfica/identidad, pero no presenta este patrón clásico de amnesia anterógrada transitoria.\n\n⚠️ TRAMPA DE EXAMEN\nNo confundas “no recuerda lo que acaba de ocurrir” con delirium.\nEn la amnesia global transitoria, el paciente puede estar:\ndespierto + orientado respecto a su identidad + conversando normalmente + repitiendo la misma pregunta porque no consigue almacenar la respuesta.\nEse patrón es tremendamente característico.\n🧠 Regla DR Q:\n“REPITE, PERO NO RETIENE” → AMNESIA GLOBAL TRANSITORIA.\n\n📚 REFERENCIAS\n• Hodges JR, Warlow CP. The aetiology of transient global amnesia: a case-control study of 114 cases with prospective follow-up. Brain. 1990.\n• Sander K, Sander D. New insights into transient global amnesia: recent imaging and clinical findings. Lancet Neurology."
  },
  {
    "id": "dr-q-eval3-13",
    "examArea": "NEUROANATOMÍA",
    "topic": "NEUROANATOMÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un paciente de 62 años presenta de forma súbita dificultad para repetir frases que acaba de escuchar. Su lenguaje espontáneo es relativamente fluido y comprende adecuadamente las órdenes. Sin embargo, al pedirle que repita una frase sencilla, comete múltiples errores fonémicos y es incapaz de reproducirla correctamente. La denominación de objetos también está parcialmente alterada.\n¿Cuál de las siguientes estructuras está más probablemente lesionada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Área de Broca, en la circunvolución frontal inferior dominante."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Área de Wernicke, en la región temporal posterior dominante."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Fascículo arqueado, que conecta las áreas de Broca y Wernicke."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Corteza motora primaria, en la circunvolución precentral dominante."
      },
    ],
    "correctOptionId": "C",
    "explanation": "¿Por qué?\nEl dato clave es:\nComprende el lenguaje y habla con relativa fluidez, pero tiene una marcada dificultad para repetir.\nEsto corresponde a la afasia de conducción.\nLa lesión clásica se localiza en el fascículo arqueado, una vía de sustancia blanca que conecta las regiones perisilvianas del lenguaje, especialmente Wernicke con Broca.\nEl paciente puede:\n• Comprender relativamente bien.\n• Mantener un lenguaje espontáneo relativamente fluido.\n• Presentar repetición muy alterada, que es el dato más característico.\n• Presentar parafasias fonémicas.\n• Tener alteración variable de la denominación.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔑 Las tres afasias que debes diferenciar rápidamente:\nAfasia | Fluidez | Comprensión | Repetición\nBroca | ↓ | Relativamente conservada | ↓\nWernicke | ↑ | ↓ | ↓\nConducción | ↑ | ↑ | ↓↓↓\n🧠 Regla de oro\nPaciente que comprende + habla fluido + NO puede repetir → afasia de conducción → fascículo arqueado.\nEse patrón debe saltarte prácticamente de inmediato en una pregunta MIR.",
    "keyPoints": [],
    "theoryContent": "¿Por qué?\nEl dato clave es:\nComprende el lenguaje y habla con relativa fluidez, pero tiene una marcada dificultad para repetir.\nEsto corresponde a la afasia de conducción.\nLa lesión clásica se localiza en el fascículo arqueado, una vía de sustancia blanca que conecta las regiones perisilvianas del lenguaje, especialmente Wernicke con Broca.\nEl paciente puede:\n• Comprender relativamente bien.\n• Mantener un lenguaje espontáneo relativamente fluido.\n• Presentar repetición muy alterada, que es el dato más característico.\n• Presentar parafasias fonémicas.\n• Tener alteración variable de la denominación.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔑 Las tres afasias que debes diferenciar rápidamente:\nAfasia | Fluidez | Comprensión | Repetición\nBroca | ↓ | Relativamente conservada | ↓\nWernicke | ↑ | ↓ | ↓\nConducción | ↑ | ↑ | ↓↓↓\n🧠 Regla de oro\nPaciente que comprende + habla fluido + NO puede repetir → afasia de conducción → fascículo arqueado.\nEse patrón debe saltarte prácticamente de inmediato en una pregunta MIR.\n\n👨‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nPiensa en el lenguaje como un circuito:\nWernicke → comprensión → fascículo arqueado → Broca → producción del lenguaje.\nSi se lesiona Broca, el paciente tiene problemas para producir lenguaje:\n👉 habla poco, con esfuerzo y de manera no fluida.\nSi se lesiona Wernicke, el paciente produce lenguaje fluido, pero no comprende adecuadamente.\nPero si lesionamos el fascículo arqueado, las dos áreas principales pueden seguir funcionando de manera relativamente independiente:\n• Wernicke recibe y comprende.\n• Broca puede producir lenguaje.\n• Pero la conexión entre ambas está dañada.\nPor eso el paciente puede conversar y comprender relativamente bien, pero cuando le dices:\n\"Repita: El cielo está azul.\"\naparecen errores, sustituciones de sonidos y una incapacidad marcada para repetir.\n❌ ¿Por qué NO las otras?\nA. Área de Broca ❌\nProduciría una afasia predominantemente no fluente, con lenguaje esforzado y reducido. La comprensión suele estar relativamente conservada.\nB. Área de Wernicke ❌\nEsperaríamos lenguaje fluido pero alteración importante de la comprensión, además de una repetición alterada.\nC. Fascículo arqueado ✅\nEs la asociación clásica con afasia de conducción: comprensión relativamente preservada, lenguaje fluido y repetición desproporcionadamente alterada.\nD. Corteza motora primaria ❌\nUna lesión motora dominante puede producir déficits motores, pero no explica este patrón específico de alteración del lenguaje y, especialmente, de la repetición.\n\n⚠️ TRAMPA DE EXAMEN\nNo confundas \"habla fluida\" con \"habla normal\".\nEn la afasia de Wernicke y en la de conducción ambas pueden ser fluidas.\nLa pregunta se resuelve mirando principalmente:\n\n¿COMPRENDE? → ¿REPITE?\nFluido + comprende + no repite = CONDUCCIÓN.\n\n📚 REFERENCIAS\n• Blumenfeld H. Neuroanatomy Through Clinical Cases. Oxford University Press.\n• Ropper AH, Samuels MA, Klein JP. Adams and Victor's Principles of Neurology. McGraw-Hill.\n• Kandel ER et al. Principles of Neural Science. McGraw-Hill."
  },
  {
    "id": "dr-q-eval3-14",
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un paciente de 42 años presenta una lesión localizada en el hipotálamo. A partir de entonces desarrolla alteraciones en la regulación de la sed y de la osmolaridad plasmática, además de cambios en la función endocrina dependiente de la hipófisis. ¿Cuál de las siguientes funciones se encuentra directamente relacionada con el hipotálamo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Interpretación de símbolos y reconocimiento de estímulos visuales complejos."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Regulación de la osmolaridad plasmática y control de funciones neuroendocrinas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Generación de la actividad motora voluntaria de la corteza cerebral."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Comprensión del lenguaje hablado y asociación semántica."
      },
    ],
    "correctOptionId": "B",
    "explanation": "¿POR QUÉ?\nEl hipotálamo funciona como un centro integrador fundamental para mantener la homeostasis.\nEntre sus funciones principales están:\n• Regulación de la osmolaridad plasmática → mediante osmorreceptores y control de la secreción de ADH y de la sed.\n• Control neuroendocrino → regula la adenohipófisis mediante hormonas liberadoras e inhibidoras.\n• Termorregulación.\n• Regulación del hambre y la saciedad.\n• Control de funciones autonómicas.\n• Participación en la conducta sexual y reproductiva.\n• Regulación de ritmos circadianos, especialmente mediante el núcleo supraquiasmático.\nPor eso, una lesión hipotalámica puede producir una combinación de alteraciones endocrinas, autonómicas y homeostáticas.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔑 Hipotálamo = HOMEOSTASIS\nPiensa en el hipotálamo como el gran \"termostato y regulador interno\" del organismo.\nOsmolaridad ↑ → osmorreceptores hipotalámicos → ADH ↑ + sed ↑ → retención de agua.\nAdemás:\nHipotálamo → hipófisis → regulación endocrina periférica.",
    "keyPoints": [],
    "theoryContent": "¿POR QUÉ?\nEl hipotálamo funciona como un centro integrador fundamental para mantener la homeostasis.\nEntre sus funciones principales están:\n• Regulación de la osmolaridad plasmática → mediante osmorreceptores y control de la secreción de ADH y de la sed.\n• Control neuroendocrino → regula la adenohipófisis mediante hormonas liberadoras e inhibidoras.\n• Termorregulación.\n• Regulación del hambre y la saciedad.\n• Control de funciones autonómicas.\n• Participación en la conducta sexual y reproductiva.\n• Regulación de ritmos circadianos, especialmente mediante el núcleo supraquiasmático.\nPor eso, una lesión hipotalámica puede producir una combinación de alteraciones endocrinas, autonómicas y homeostáticas.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔑 Hipotálamo = HOMEOSTASIS\nPiensa en el hipotálamo como el gran \"termostato y regulador interno\" del organismo.\nOsmolaridad ↑ → osmorreceptores hipotalámicos → ADH ↑ + sed ↑ → retención de agua.\nAdemás:\nHipotálamo → hipófisis → regulación endocrina periférica.\n\n🧑‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nLa clave es no aprender una lista aislada.\nCuando veas HIPOTÁLAMO, piensa:\n\"¿Qué necesita controlar el organismo para mantenerse estable?\"\nTemperatura, agua, osmolaridad, hambre, sed, reproducción, ritmos circadianos y sistema endocrino.\nEn cambio, interpretar símbolos, comprender lenguaje o ejecutar movimientos voluntarios son funciones corticales, no funciones propias del hipotálamo.\n❌ Distractores\nA. Interpretación de símbolos:\nSe relaciona fundamentalmente con funciones de asociación cortical, no con el hipotálamo.\nC. Actividad motora voluntaria:\nDepende principalmente de la corteza motora y de los circuitos motores asociados.\nD. Comprensión del lenguaje:\nSe relaciona con las redes corticales del lenguaje, especialmente el hemisferio dominante.\n\n⚠️ TRAMPA DE EXAMEN\nNo confundas:\nHIPOTÁLAMO → homeostasis + endocrino + conducta/autonómico\ncon\nCORTEZA CEREBRAL → funciones cognitivas superiores.\nEsta pregunta utiliza precisamente esta distinción: la interpretación de símbolos NO es una función hipotalámica.\n\n📚 REFERENCIAS\n• Guyton y Hall. Tratado de Fisiología Médica, regulación de la función endocrina y funciones del hipotálamo.\n• Blumenfeld H. Neuroanatomy Through Clinical Cases.\n• Kandel ER et al. Principles of Neural Science."
  },
  {
    "id": "dr-q-eval3-15",
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Una mujer de 68 años consulta por presentar desde hace varios meses alteraciones progresivas del comportamiento, con episodios de desinhibición, pérdida de las normas sociales y dificultad creciente para controlar sus impulsos. Su familia refiere que inicialmente no presentaba problemas importantes de memoria. En la exploración se evidencia una conducta social inapropiada y disminución de la capacidad de juicio.\n¿Cuál de las siguientes estructuras se relaciona más directamente con este tipo de alteraciones?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Corteza prefrontal."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Corteza occipital primaria."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Corteza somatosensorial primaria."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Corteza auditiva primaria."
      },
    ],
    "correctOptionId": "A",
    "explanation": "¿POR QUÉ?\nLa corteza prefrontal participa de manera fundamental en las funciones ejecutivas y en la regulación de la conducta.\nEntre sus funciones se encuentran:\n• Planificación.\n• Juicio.\n• Toma de decisiones.\n• Control de impulsos.\n• Conducta social.\n• Personalidad.\n• Memoria de trabajo.\nPor eso, las lesiones frontales, especialmente de regiones orbitofrontales y prefrontales, pueden producir desinhibición, impulsividad, pérdida del juicio social y cambios de personalidad.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLóbulo frontal = conducta + función ejecutiva + movimiento\nDentro del lóbulo frontal debes diferenciar:\nCorteza motora primaria → movimiento voluntario.\nÁrea premotora → planificación y preparación del movimiento.\nÁrea prefrontal → funciones ejecutivas, personalidad y conducta.\nÁrea de Broca → producción del lenguaje en el hemisferio dominante.\n🔑 Regla de examen\nPaciente que cambia de personalidad, se desinhibe y pierde el juicio → piensa en corteza prefrontal/orbitofrontal.",
    "keyPoints": [],
    "theoryContent": "¿POR QUÉ?\nLa corteza prefrontal participa de manera fundamental en las funciones ejecutivas y en la regulación de la conducta.\nEntre sus funciones se encuentran:\n• Planificación.\n• Juicio.\n• Toma de decisiones.\n• Control de impulsos.\n• Conducta social.\n• Personalidad.\n• Memoria de trabajo.\nPor eso, las lesiones frontales, especialmente de regiones orbitofrontales y prefrontales, pueden producir desinhibición, impulsividad, pérdida del juicio social y cambios de personalidad.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLóbulo frontal = conducta + función ejecutiva + movimiento\nDentro del lóbulo frontal debes diferenciar:\nCorteza motora primaria → movimiento voluntario.\nÁrea premotora → planificación y preparación del movimiento.\nÁrea prefrontal → funciones ejecutivas, personalidad y conducta.\nÁrea de Broca → producción del lenguaje en el hemisferio dominante.\n🔑 Regla de examen\nPaciente que cambia de personalidad, se desinhibe y pierde el juicio → piensa en corteza prefrontal/orbitofrontal.\n\n🧑‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nAquí la clave no es memorizar que \"frontal = conducta\".\nHay que reconocer el patrón clínico.\nUn paciente que antes tenía una conducta social adecuada y comienza a:\n• hacer comentarios inapropiados,\n• perder las inhibiciones,\n• actuar impulsivamente,\n• tomar malas decisiones,\n• mostrar cambios marcados de personalidad,\nestá presentando una alteración de las funciones ejecutivas y del control de la conducta, funciones estrechamente relacionadas con la corteza prefrontal.\nEsto es especialmente importante en el contexto de una demencia frontotemporal, donde los cambios conductuales pueden aparecer antes que el deterioro de la memoria.\n❌ ¿Por qué no las demás?\nB. Corteza occipital primaria:\nSe encarga fundamentalmente del procesamiento visual primario. Una lesión produce alteraciones del campo visual, no desinhibición.\nC. Corteza somatosensorial primaria:\nProcesa sensibilidad somática consciente: tacto, dolor, temperatura, vibración y propiocepción.\nD. Corteza auditiva primaria:\nParticipa en el procesamiento inicial de los estímulos auditivos.\n\n🔥 PERLA MIR\nCambio de personalidad + desinhibición + pérdida del juicio → LÓBULO FRONTAL.\nY si además hay conducta social inapropiada progresiva con memoria relativamente preservada al inicio, piensa especialmente en:\nDemencia frontotemporal → variante conductual.\n\n⚠️ TRAMPA DE EXAMEN\nNo todo deterioro cognitivo es Alzheimer.\nSi el primer problema es un cambio marcado de personalidad y conducta, especialmente en un paciente relativamente joven, debes pensar en demencia frontotemporal antes que en Alzheimer.\n\n📚 REFERENCIAS\n• AMIR. Manual de Neurología, capítulo de Neuroanatomía y demencias.\n• Blumenfeld H. Neuroanatomy Through Clinical Cases.\n• Kandel ER, et al. Principles of Neural Science.\n• Guyton y Hall. Tratado de Fisiología Médica, funciones corticales superiores."
  },
  {
    "id": "dr-q-eval3-16",
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "¿Cuál de las siguientes modalidades sensitivas se transmite principalmente por el tracto espinotalámico?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Vibración y propiocepción consciente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Tacto discriminativo y grafestesia."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Dolor y temperatura."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Propiocepción inconsciente."
      },
    ],
    "correctOptionId": "C",
    "explanation": "¿POR QUÉ?\nEl tracto espinotalámico, perteneciente al sistema anterolateral, transmite principalmente:\n• Dolor\n• Temperatura\n• Tacto grosero\nLa primera neurona entra por la raíz dorsal y la segunda neurona cruza en la médula espinal, generalmente a través de la comisura blanca anterior, para ascender posteriormente por el lado contralateral.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔑 Espinotalámico = DOLOR + TEMPERATURA\nLa característica anatómica que más debes recordar:\nEl tracto espinotalámico cruza temprano en la médula espinal.\nPor eso, una lesión unilateral del tracto espinotalámico produce pérdida contralateral de dolor y temperatura por debajo de la lesión.",
    "keyPoints": [],
    "theoryContent": "¿POR QUÉ?\nEl tracto espinotalámico, perteneciente al sistema anterolateral, transmite principalmente:\n• Dolor\n• Temperatura\n• Tacto grosero\nLa primera neurona entra por la raíz dorsal y la segunda neurona cruza en la médula espinal, generalmente a través de la comisura blanca anterior, para ascender posteriormente por el lado contralateral.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔑 Espinotalámico = DOLOR + TEMPERATURA\nLa característica anatómica que más debes recordar:\nEl tracto espinotalámico cruza temprano en la médula espinal.\nPor eso, una lesión unilateral del tracto espinotalámico produce pérdida contralateral de dolor y temperatura por debajo de la lesión.\n\n🧑‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nPara no confundirte con los tractos sensitivos, piensa primero en qué modalidad llevan:\nTracto | Principal modalidad | ¿Dónde cruza?\nEspinotalámico | Dolor y temperatura | Médula espinal\nColumnas dorsales–lemnisco medial | Vibración, propiocepción y tacto fino | Bulbo\nEspinocerebelosos | Propiocepción inconsciente | Principalmente sin llegar al tálamo\n\n⚠️ PERLA MIR\nEspinotalámico → cruza en médula.\nColumnas dorsales → ascienden ipsilateralmente y cruzan en bulbo.\nEse contraste es fundamental para localizar lesiones medulares.\n\n📚 REFERENCIAS\n• AMIR. Manual de Neurología, apartado de vías sensitivas.\n• Blumenfeld H. Neuroanatomy Through Clinical Cases.\n• Kandel ER et al. Principles of Neural Science."
  },
  {
    "id": "dr-q-eval3-17",
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "¿Cuál de las siguientes modalidades sensitivas se transmite principalmente por los cordones posteriores de la médula espinal?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Dolor y temperatura."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Vibración y propiocepción consciente."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Dolor y tacto grosero."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Propiocepción inconsciente."
      },
    ],
    "correctOptionId": "B",
    "explanation": "¿POR QUÉ?\nLos cordones posteriores forman parte de la vía columnas dorsales–lemnisco medial y transmiten principalmente:\n• Propiocepción consciente\n• Sensibilidad vibratoria\n• Tacto fino o discriminativo\n• Discriminación de dos puntos\nA diferencia del tracto espinotalámico, las fibras de los cordones posteriores ascienden ipsilateralmente por la médula y cruzan posteriormente en el bulbo raquídeo.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔑 Cordones posteriores = VIBRACIÓN + PROPIOCEPCIÓN + TACTO FINO\nLa secuencia fundamental es:\nReceptor → ganglio de la raíz dorsal → cordón posterior ipsilateral → núcleos grácil/cuneiforme en bulbo → decusación → lemnisco medial → tálamo → corteza somatosensorial.\n\n⚠️ PERLA MIR\nCordones posteriores → cruzan en el BULBO.\nEspinotalámico → cruza en la MÉDULA.\nEste contraste es una de las claves para localizar lesiones sensitivas.",
    "keyPoints": [],
    "theoryContent": "¿POR QUÉ?\nLos cordones posteriores forman parte de la vía columnas dorsales–lemnisco medial y transmiten principalmente:\n• Propiocepción consciente\n• Sensibilidad vibratoria\n• Tacto fino o discriminativo\n• Discriminación de dos puntos\nA diferencia del tracto espinotalámico, las fibras de los cordones posteriores ascienden ipsilateralmente por la médula y cruzan posteriormente en el bulbo raquídeo.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔑 Cordones posteriores = VIBRACIÓN + PROPIOCEPCIÓN + TACTO FINO\nLa secuencia fundamental es:\nReceptor → ganglio de la raíz dorsal → cordón posterior ipsilateral → núcleos grácil/cuneiforme en bulbo → decusación → lemnisco medial → tálamo → corteza somatosensorial.\n\n⚠️ PERLA MIR\nCordones posteriores → cruzan en el BULBO.\nEspinotalámico → cruza en la MÉDULA.\nEste contraste es una de las claves para localizar lesiones sensitivas.\n\n🧑‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nLa mejor manera de diferenciar ambas vías es preguntarte qué información necesitan transmitir.\nSi el paciente necesita saber:\n\"¿Dónde está mi pierna aunque tenga los ojos cerrados?\"\n→ Propiocepción → cordones posteriores.\nSi necesita percibir:\n\"¿Está caliente o me está doliendo?\"\n→ Temperatura/dolor → espinotalámico.\nPor eso una lesión de los cordones posteriores puede producir ataxia sensitiva y Romberg positivo, porque el paciente pierde información propioceptiva necesaria para conocer la posición de sus extremidades.\n❌ Distractores\nA. Dolor y temperatura: → tracto espinotalámico.\nC. Dolor y tacto grosero: → principalmente sistema anterolateral.\nD. Propiocepción inconsciente: → vías espinocerebelosas.\n\n🔥 PERLA FINAL\n\nCORDÓN POSTERIOR = \"¿DÓNDE ESTÁ MI CUERPO?\"\n\nESPINOTALÁMICO = \"¿ME DUELE O ESTÁ CALIENTE?\"\n\n📚 REFERENCIAS\n• AMIR. Manual de Neurología, apartado de vías sensitivas.\n• Blumenfeld H. Neuroanatomy Through Clinical Cases.\n• Kandel ER et al. Principles of Neural Science."
  },
  {
    "id": "dr-q-eval3-18",
    "examArea": "NEUROLOGÍA / PARES CRANEALES",
    "topic": "NEUROLOGÍA / PARES CRANEALES",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un paciente de 63 años presenta diplopía horizontal que empeora al mirar hacia la derecha. En la exploración se observa que el ojo derecho no puede realizar abducción, mientras que la aducción está conservada. No presenta alteraciones pupilares ni otros déficits neurológicos.\n¿Cuál de los siguientes pares craneales está lesionado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "III par craneal (oculomotor)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "IV par craneal (troclear)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "V par craneal (trigémino)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "VI par craneal (abducens)."
      },
    ],
    "correctOptionId": "D",
    "explanation": "¿POR QUÉ?\nEl VI par craneal inerva el músculo recto lateral, encargado de la abducción del ojo.\nPor tanto:\nLesión del VI → incapacidad para abducir el ojo → diplopía horizontal.\nEl ojo afectado queda desviado hacia medial por el predominio del recto medial, que continúa funcionando.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔑 Los tres pares oculomotores\nIII → oculomotor\n• Recto medial\n• Recto superior\n• Recto inferior\n• Oblicuo inferior\n• Elevador del párpado\n• Parasimpático pupilar\nIV → troclear\n• Oblicuo superior\nVI → abducens\n• Recto lateral → abducción\n🔥 Regla de oro\nVI = mira hacia afuera.\nSi el ojo no puede abducir, piensa inmediatamente en VI par.",
    "keyPoints": [],
    "theoryContent": "¿POR QUÉ?\nEl VI par craneal inerva el músculo recto lateral, encargado de la abducción del ojo.\nPor tanto:\nLesión del VI → incapacidad para abducir el ojo → diplopía horizontal.\nEl ojo afectado queda desviado hacia medial por el predominio del recto medial, que continúa funcionando.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔑 Los tres pares oculomotores\nIII → oculomotor\n• Recto medial\n• Recto superior\n• Recto inferior\n• Oblicuo inferior\n• Elevador del párpado\n• Parasimpático pupilar\nIV → troclear\n• Oblicuo superior\nVI → abducens\n• Recto lateral → abducción\n🔥 Regla de oro\nVI = mira hacia afuera.\nSi el ojo no puede abducir, piensa inmediatamente en VI par.\n\n👨‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nLa pregunta se resuelve con una sola función.\n¿Qué músculo mueve el ojo hacia lateral?\n👉 Recto lateral.\n¿Quién lo inerva?\n👉 VI par craneal.\nPor eso:\nVI lesionado → recto lateral paralizado → ojo queda hacia dentro → diplopía horizontal.\n\n❌ ¿POR QUÉ NO LAS OTRAS?\nA. III par ❌\nSu lesión produce una oftalmoplejía mucho más extensa, con alteración de múltiples movimientos oculares y, dependiendo de la localización, puede asociar ptosis y midriasis.\nB. IV par ❌\nAfecta al oblicuo superior, produciendo dificultad para la depresión del ojo en aducción y diplopía vertical.\nC. V par ❌\nEl trigémino es principalmente sensitivo para la cara y también aporta la inervación motora de los músculos de la masticación; no controla la abducción ocular.\n\n⚠️ TRAMPA DE EXAMEN\nNo memorices solamente:\nVI = recto lateral.\nRelaciona siempre:\nAbducción → recto lateral → VI par.\nAsí puedes resolver la pregunta incluso aunque cambien completamente la presentación clínica.\n\n📚 REFERENCIAS\n• Manual de Neurología, apartado de pares craneales y motilidad ocular.\n• Blumenfeld H. Neuroanatomy Through Clinical Cases.\n• Kandel ER et al. Principles of Neural Science.\nPerla Doctor Q:\n🧠 “Si el ojo no sale hacia afuera, el VI está fuera de juego.”"
  },
  {
    "id": "dr-q-eval3-19",
    "examArea": "NEUROLOGÍA / PARES CRANEALES",
    "topic": "NEUROLOGÍA / PARES CRANEALES",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un paciente consulta por diplopía vertical que empeora al bajar escaleras y al leer. En la exploración presenta dificultad para realizar la depresión del ojo derecho cuando este se encuentra en aducción. No presenta alteraciones pupilares ni otros déficits neurológicos.\n¿Cuál de los siguientes pares craneales está lesionado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "III par craneal (oculomotor)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "IV par craneal (troclear)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "V par craneal (trigémino)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "VI par craneal (abducens)."
      },
    ],
    "correctOptionId": "B",
    "explanation": "¿POR QUÉ?\nEl IV par craneal inerva exclusivamente al músculo oblicuo superior.\nLa función que debes reconocer es:\nOblicuo superior → depresión del ojo en aducción + intorsión.\nPor eso, una lesión del IV par produce:\n• Diplopía vertical\n• Dificultad para mirar hacia abajo, especialmente con el ojo en aducción.\n• Mayor dificultad al bajar escaleras o leer.\n• El paciente puede compensar inclinando la cabeza.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔑 III – IV – VI: movimientos oculares\nIII → casi todos los movimientos oculares\nIV → oblicuo superior → ↓ en aducción\nVI → recto lateral → abducción\n🔥 Regla de oro\n“El IV mira hacia abajo cuando el ojo está hacia dentro.”\nSi te dicen:\nDiplopía vertical + dificultad para bajar escaleras + ojo en aducción no puede deprimirse → IV.",
    "keyPoints": [],
    "theoryContent": "¿POR QUÉ?\nEl IV par craneal inerva exclusivamente al músculo oblicuo superior.\nLa función que debes reconocer es:\nOblicuo superior → depresión del ojo en aducción + intorsión.\nPor eso, una lesión del IV par produce:\n• Diplopía vertical\n• Dificultad para mirar hacia abajo, especialmente con el ojo en aducción.\n• Mayor dificultad al bajar escaleras o leer.\n• El paciente puede compensar inclinando la cabeza.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔑 III – IV – VI: movimientos oculares\nIII → casi todos los movimientos oculares\nIV → oblicuo superior → ↓ en aducción\nVI → recto lateral → abducción\n🔥 Regla de oro\n“El IV mira hacia abajo cuando el ojo está hacia dentro.”\nSi te dicen:\nDiplopía vertical + dificultad para bajar escaleras + ojo en aducción no puede deprimirse → IV.\n\n👨‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nLa clave es entender el movimiento, no memorizar el número.\nEl oblicuo superior tiene como función principal la intorsión, pero clínicamente su acción más útil para localizar una lesión del IV es:\n\nDEPRESIÓN DEL OJO EN ADUCCIÓN.\nPor eso hacemos esta prueba:\n1. Pedimos al paciente que aduzca el ojo.\n2. Luego le pedimos que lo mueva hacia abajo.\n3. Si no puede → sospecha lesión del IV par.\nEsto explica por qué estos pacientes tienen problemas especialmente al:\n🪜 bajar escaleras\n📖 leer\nporque necesitan mirar hacia abajo.\n\n❌ ¿POR QUÉ NO LAS OTRAS?\nA. III par ❌\nUna lesión del III produciría una oftalmoplejía mucho más extensa, pudiendo asociar ptosis y midriasis si se comprometen las fibras parasimpáticas.\nC. V par ❌\nEl trigémino participa principalmente en la sensibilidad facial y la masticación, no en la motilidad ocular.\nD. VI par ❌\nEl VI inerva el recto lateral, por lo que su lesión produce incapacidad para abducir el ojo y diplopía predominantemente horizontal.\n\n⚠️ TRAMPA DE EXAMEN\nNo confundas:\nIV → diplopía vertical + dificultad para mirar ABAJO con el ojo ADUCIDO.\ncon:\nVI → diplopía horizontal + incapacidad para ABducir.\n\n🏆 PERLA DOCTOR Q\nIII = casi todo\nIV = abajo y adentro\nVI = afuera\n\n📚 REFERENCIAS\n• Manual de Neurología, apartado de pares craneales y motilidad ocular.\n• Blumenfeld H. Neuroanatomy Through Clinical Cases.\n• Kandel ER et al. Principles of Neural Science."
  },
  {
    "id": "dr-q-eval3-20",
    "examArea": "NEUROLOGÍA / PARES CRANEALES",
    "topic": "NEUROLOGÍA / PARES CRANEALES",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "¿Cuál de los siguientes pares craneales tiene únicamente función sensitiva?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Nervio trigémino (V)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Nervio facial (VII)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Nervio vestibulococlear (VIII)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Nervio vago (X)."
      },
    ],
    "correctOptionId": "C",
    "explanation": "¿POR QUÉ?\nEl VIII par craneal, nervio vestibulococlear, es un nervio exclusivamente sensitivo.\nEstá formado por dos componentes:\n• Coclear → audición.\n• Vestibular → equilibrio y aceleración de la cabeza.\nPor tanto:\nVIII = audición + equilibrio = exclusivamente sensitivo.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEntre los pares craneales, los que tienen función exclusivamente sensitiva son:\n• I → Olfatorio → olfato\n• II → Óptico → visión\n• VIII → Vestibulococlear → audición y equilibrio\n🔥 Regla de oro\nI, II y VIII = sensitivos puros.\nMientras que:\nIII, IV, VI, XI y XII → motores puros.\nY:\nV, VII, IX y X → mixtos.",
    "keyPoints": [],
    "theoryContent": "¿POR QUÉ?\nEl VIII par craneal, nervio vestibulococlear, es un nervio exclusivamente sensitivo.\nEstá formado por dos componentes:\n• Coclear → audición.\n• Vestibular → equilibrio y aceleración de la cabeza.\nPor tanto:\nVIII = audición + equilibrio = exclusivamente sensitivo.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEntre los pares craneales, los que tienen función exclusivamente sensitiva son:\n• I → Olfatorio → olfato\n• II → Óptico → visión\n• VIII → Vestibulococlear → audición y equilibrio\n🔥 Regla de oro\nI, II y VIII = sensitivos puros.\nMientras que:\nIII, IV, VI, XI y XII → motores puros.\nY:\nV, VII, IX y X → mixtos.\n\n👨‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nEsta es una pregunta clásica de clasificación de pares craneales.\nNo basta con memorizar el VIII: piensa en qué información lleva.\nEl nervio vestibulococlear lleva información desde receptores especializados hacia el SNC:\nCóclea → audición\nAparato vestibular → equilibrio\nNo tiene una función motora.\nPor eso pertenece al grupo de los pares sensitivos puros.\n\n❌ ¿POR QUÉ NO LOS OTROS?\nA. V — Trigémino ❌\nEs mixto: sensibilidad de la cara + función motora de la masticación.\nB. VII — Facial ❌\nEs mixto: expresión facial, gusto de los 2/3 anteriores de la lengua y funciones parasimpáticas, además de componentes sensitivos.\nC. VIII — Vestibulococlear ✅\nEs exclusivamente sensitivo: audición y equilibrio.\nD. X — Vago ❌\nEs mixto, con funciones motoras, sensitivas y parasimpáticas.\n\n⚠️ TRAMPA DE EXAMEN\nNo confundas:\nVIII = exclusivamente sensitivo\ncon:\nVIII = exclusivamente audición.\nTiene dos componentes funcionales:\nCoclear → audición\nVestibular → equilibrio\n\n🏆 PERLA DOCTOR Q\n\nI + II + VIII = SENSITIVOS PUROS\n🧠 Olfato + visión + audición/equilibrio.\n\n📚 REFERENCIAS\n• Manual de Neurología, apartado de pares craneales.\n• Blumenfeld H. Neuroanatomy Through Clinical Cases.\n• Kandel ER et al. Principles of Neural Science."
  },
  {
    "id": "dr-q-eval3-21",
    "examArea": "NEUROLOGÍA / SÍNDROMES CRUZADOS",
    "topic": "NEUROLOGÍA / SÍNDROMES CRUZADOS",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un paciente de 67 años presenta de forma súbita diplopía, con ptosis y midriasis del ojo derecho, asociada a debilidad de las extremidades izquierdas. La sensibilidad está conservada.\n¿Cuál de las siguientes localizaciones explica mejor este cuadro?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Lesión de la protuberancia derecha."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Lesión del mesencéfalo derecho."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Lesión del bulbo raquídeo derecho."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Lesión del hemisferio cerebral derecho."
      },
    ],
    "correctOptionId": "B",
    "explanation": "¿POR QUÉ?\nEl paciente presenta:\n• III par craneal derecho afectado → ptosis + midriasis + oftalmoplejía.\n• Hemiparesia izquierda → afectación de la vía corticoespinal antes de su decusación.\nLa combinación de:\nDéficit de un par craneal ipsilateral + déficit motor contralateral\nes característica de un síndrome cruzado del tronco encefálico.\nEn este caso, la lesión está en el mesencéfalo derecho, donde se encuentran el III par craneal y las fibras corticoespinales.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔑 SÍNDROME CRUZADO\nLa regla fundamental es:\nPar craneal ipsilateral + déficit neurológico contralateral = lesión del tronco encefálico.\n¿Por qué?\nPorque los pares craneales producen signos del mismo lado de la lesión, mientras que las vías largas, como la corticoespinal, producen signos contralaterales cuando todavía no han cruzado.",
    "keyPoints": [],
    "theoryContent": "¿POR QUÉ?\nEl paciente presenta:\n• III par craneal derecho afectado → ptosis + midriasis + oftalmoplejía.\n• Hemiparesia izquierda → afectación de la vía corticoespinal antes de su decusación.\nLa combinación de:\nDéficit de un par craneal ipsilateral + déficit motor contralateral\nes característica de un síndrome cruzado del tronco encefálico.\nEn este caso, la lesión está en el mesencéfalo derecho, donde se encuentran el III par craneal y las fibras corticoespinales.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔑 SÍNDROME CRUZADO\nLa regla fundamental es:\nPar craneal ipsilateral + déficit neurológico contralateral = lesión del tronco encefálico.\n¿Por qué?\nPorque los pares craneales producen signos del mismo lado de la lesión, mientras que las vías largas, como la corticoespinal, producen signos contralaterales cuando todavía no han cruzado.\n\n👨‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nMiremos el caso por partes.\n1️⃣ ¿Qué par craneal está afectado?\nPtosis + midriasis + diplopía → III par craneal.\n2️⃣ ¿De qué lado?\nDerecho.\nPor tanto, tenemos:\nIII derecho → lesión derecha.\n3️⃣ ¿Qué ocurre con la fuerza?\nHay debilidad de las extremidades izquierdas.\nTenemos entonces:\nIII derecho + hemiparesia izquierda.\nEsto es exactamente el patrón de un síndrome cruzado.\n4️⃣ ¿Dónde está el III par?\nEn el mesencéfalo.\nPor tanto:\nMesencéfalo derecho → III derecho + vía corticoespinal → hemiparesia izquierda.\n\n❌ ¿POR QUÉ NO LAS OTRAS?\nA. Protuberancia derecha ❌\nAunque la protuberancia también puede producir síndromes cruzados, los pares craneales implicados serían principalmente VI y VII, entre otros, no el III.\nB. Mesencéfalo derecho ✅\nContiene el III par y las fibras corticoespinales → patrón clásico de síndrome de Weber.\nC. Bulbo derecho ❌\nLos síndromes cruzados bulbares clásicos suelen involucrar los pares IX, X o XII, dependiendo de la localización.\nD. Hemisferio cerebral derecho ❌\nUna lesión hemisférica puede producir hemiparesia contralateral, pero no explica un déficit ipsilateral de un par craneal de esta forma.\n\n⚠️ TRAMPA DE EXAMEN\nNo te quedes solamente con:\n“III par = mesencéfalo.”\nLa clave MIR es reconocer el patrón:\nIPSILATERAL → par craneal\nCONTRALATERAL → vía larga\n👉 Síndrome cruzado = TRONCO ENCEFÁLICO.\n\n🏆 PERLA DOCTOR Q\n“Cara de un lado, cuerpo del otro → piensa en tronco.”\nY si tienes:\nIII par ipsilateral + hemiparesia contralateral → MESENCÉFALO → síndrome de Weber.\n\n📚 REFERENCIAS\n• Manual de Neurología, apartado de síndromes troncoencefálicos y pares craneales.\n• Blumenfeld H. Neuroanatomy Through Clinical Cases.\n• Kandel ER et al. Principles of Neural Science."
  },
  {
    "id": "dr-q-eval3-22",
    "examArea": "NEUROLOGÍA / MÉDULA ESPINAL",
    "topic": "NEUROLOGÍA / MÉDULA ESPINAL",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un paciente de 35 años sufre un traumatismo penetrante que produce una hemisección derecha de la médula espinal a nivel de T10. ¿Cuál de los siguientes patrones neurológicos sería más característico por debajo de la lesión?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Pérdida bilateral de dolor y temperatura, con conservación de la propiocepción."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Pérdida ipsilateral de vibración y propiocepción, asociada a pérdida contralateral de dolor y temperatura."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Pérdida contralateral de vibración y propiocepción, asociada a pérdida ipsilateral de dolor y temperatura."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Pérdida bilateral de todas las modalidades sensitivas por debajo de la lesión."
      },
    ],
    "correctOptionId": "B",
    "explanation": "¿POR QUÉ?\nLa hemisección medular (síndrome de Brown-Séquard) produce un patrón característico porque las principales vías sensitivas cruzan en lugares diferentes.\nEn una hemisección derecha:\n🟢 IPSILATERAL → cordones posteriores\nSe pierde:\n• Vibración.\n• Propiocepción consciente.\n• Tacto discriminativo.\nLas fibras de los cordones posteriores todavía no han cruzado dentro de la médula, por lo que la pérdida es ipsilateral.\n🔴 CONTRALATERAL → tracto espinotalámico\nSe pierde:\n• Dolor.\n• Temperatura.\nEstas fibras cruzan en la médula espinal, por lo que la pérdida aparece en el lado contralateral.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 BROWN-SÉQUARD = \"MISMO LADO + LADO CONTRARIO\"\nIpsilateral:\n• Vibración ↓\n• Propiocepción ↓\n• Tacto fino ↓\n• Signos de primera motoneurona por debajo de la lesión.\nContralateral:\n• Dolor ↓\n• Temperatura ↓\n🧠 Regla de oro\nCordones posteriores → ipsilateral.\nEspinotalámico → contralateral.",
    "keyPoints": [],
    "theoryContent": "¿POR QUÉ?\nLa hemisección medular (síndrome de Brown-Séquard) produce un patrón característico porque las principales vías sensitivas cruzan en lugares diferentes.\nEn una hemisección derecha:\n🟢 IPSILATERAL → cordones posteriores\nSe pierde:\n• Vibración.\n• Propiocepción consciente.\n• Tacto discriminativo.\nLas fibras de los cordones posteriores todavía no han cruzado dentro de la médula, por lo que la pérdida es ipsilateral.\n🔴 CONTRALATERAL → tracto espinotalámico\nSe pierde:\n• Dolor.\n• Temperatura.\nEstas fibras cruzan en la médula espinal, por lo que la pérdida aparece en el lado contralateral.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 BROWN-SÉQUARD = \"MISMO LADO + LADO CONTRARIO\"\nIpsilateral:\n• Vibración ↓\n• Propiocepción ↓\n• Tacto fino ↓\n• Signos de primera motoneurona por debajo de la lesión.\nContralateral:\n• Dolor ↓\n• Temperatura ↓\n🧠 Regla de oro\nCordones posteriores → ipsilateral.\nEspinotalámico → contralateral.\n\n👨‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nEste síndrome se entiende completamente con una sola pregunta:\n¿Dónde cruza cada vía?\nCordones posteriores:\nReceptor → médula → sube por el mismo lado → cruza en el bulbo.\nPor eso:\nHemisección derecha → pérdida derecha de vibración y propiocepción.\nEspinotalámico:\nReceptor → entra en médula → cruza en la médula → asciende por el lado contrario.\nPor eso:\nHemisección derecha → pérdida izquierda de dolor y temperatura.\nY además, si la lesión afecta el tracto corticoespinal, aparecerán signos de primera motoneurona ipsilaterales por debajo de la lesión.\n\n❌ ¿POR QUÉ NO LAS OTRAS?\nA. Pérdida bilateral de dolor y temperatura ❌\nNo corresponde al patrón de una hemisección medular.\nB. Ipsilateral vibración/propiocepción + contralateral dolor/temperatura ✅\nEs el patrón sensitivo clásico del síndrome de Brown-Séquard.\nC. Contralateral vibración/propiocepción ❌\nLos cordones posteriores ascienden ipsilateralmente dentro de la médula.\nD. Pérdida bilateral de todas las modalidades ❌\nCorrespondería a una lesión medular mucho más extensa, no a una hemisección.\n\n⚠️ TRAMPA DE EXAMEN\nLa pérdida contralateral de dolor y temperatura no necesariamente comienza exactamente al mismo nivel de la lesión, porque las fibras espinotalámicas pueden ascender algunos segmentos antes de cruzar.\nPero para una pregunta conceptual:\nBrown-Séquard = propiocepción ipsilateral + dolor/temperatura contralateral.\n\n🏆 PERLA DOCTOR Q\n\"Brown-Séquard: mismo lado siente posición; lado contrario siente dolor.\"\nIPSILATERAL → cordones posteriores + vía piramidal\nCONTRALATERAL → espinotalámico\n\n📚 REFERENCIAS\n• Manual de Neurología, apartado de síndromes medulares y vías sensitivas.\n• Blumenfeld H. Neuroanatomy Through Clinical Cases.\n• Kandel ER et al. Principles of Neural Science."
  },
  {
    "id": "dr-q-eval3-23",
    "examArea": "NEUROLOGÍA / PREVENCIÓN DEL ACV",
    "topic": "NEUROLOGÍA / PREVENCIÓN DEL ACV",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Una mujer de 70 años consulta preocupada por su riesgo de sufrir un accidente cerebrovascular, ya que su madre falleció por esta causa hace un año. Tiene antecedentes de hipertensión arterial y diabetes mellitus tipo 2, en tratamiento con glipizida, aspirina, enalapril y atorvastatina. Fuma 20 cigarrillos al día y no realiza ejercicio de forma regular. En la exploración presenta una presión arterial de 150/80 mmHg. En la analítica destaca una HbA1c de 8% y un LDL de 110 mg/dL.¿Cuál de las siguientes intervenciones se asocia con una mayor reducción del riesgo de ACV?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Conseguir unos niveles óptimos de hemoglobina A1c."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Conseguir un óptimo control de la presión arterial."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Añadir al tratamiento un antioxidante."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Conseguir el abandono completo del hábito tabáquico."
      },
    ],
    "correctOptionId": "B",
    "explanation": "JUSTIFICACIÓN\nLa hipertensión arterial es el principal factor de riesgo modificable para el ACV y su tratamiento constituye una de las estrategias más eficaces para prevenir tanto el ictus isquémico como el hemorrágico.\nEn esta paciente existe una PA de 150/80 mmHg, por lo que el control tensional es claramente mejorable.\nLa diabetes, el tabaquismo y la dislipidemia también aumentan el riesgo cerebrovascular y deben tratarse, pero el concepto que busca la pregunta es:\nHTA → principal factor de riesgo modificable de ACV → controlar la PA es una de las intervenciones con mayor impacto preventivo.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 FACTORES DE RIESGO MODIFICABLES DE ACV\n• Hipertensión arterial ⭐⭐⭐\n• Tabaquismo\n• Diabetes mellitus\n• Dislipidemia\n• Obesidad\n• Sedentarismo\n• Dieta inadecuada\n• Fibrilación auricular y otras cardiopatías, según el contexto\nPero cuando te pregunten por el factor de riesgo modificable más importante, piensa inmediatamente:\n\n🩸 HIPERTENSIÓN ARTERIAL\nLa guía AHA/ASA de prevención primaria de 2024 recomienda tratar la hipertensión para prevenir el ACV y establece como objetivo general <130/80 mmHg en adultos con hipertensión en determinados escenarios de riesgo.",
    "keyPoints": [],
    "theoryContent": "JUSTIFICACIÓN\nLa hipertensión arterial es el principal factor de riesgo modificable para el ACV y su tratamiento constituye una de las estrategias más eficaces para prevenir tanto el ictus isquémico como el hemorrágico.\nEn esta paciente existe una PA de 150/80 mmHg, por lo que el control tensional es claramente mejorable.\nLa diabetes, el tabaquismo y la dislipidemia también aumentan el riesgo cerebrovascular y deben tratarse, pero el concepto que busca la pregunta es:\nHTA → principal factor de riesgo modificable de ACV → controlar la PA es una de las intervenciones con mayor impacto preventivo.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 FACTORES DE RIESGO MODIFICABLES DE ACV\n• Hipertensión arterial ⭐⭐⭐\n• Tabaquismo\n• Diabetes mellitus\n• Dislipidemia\n• Obesidad\n• Sedentarismo\n• Dieta inadecuada\n• Fibrilación auricular y otras cardiopatías, según el contexto\nPero cuando te pregunten por el factor de riesgo modificable más importante, piensa inmediatamente:\n\n🩸 HIPERTENSIÓN ARTERIAL\nLa guía AHA/ASA de prevención primaria de 2024 recomienda tratar la hipertensión para prevenir el ACV y establece como objetivo general <130/80 mmHg en adultos con hipertensión en determinados escenarios de riesgo.\n\n👨‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nEsta pregunta tiene una trampa interesante porque varias respuestas son correctas desde el punto de vista preventivo.\n🚬 ¿Dejar de fumar?\nSí.\nEl tabaquismo aumenta significativamente el riesgo vascular y abandonar el tabaco es una intervención fundamental. Las recomendaciones actuales de prevención cerebrovascular incluyen específicamente la cesación tabáquica como parte del manejo integral del riesgo.\n🍬 ¿Controlar la HbA1c?\nTambién es importante.\nEsta paciente tiene una HbA1c de 8%, por lo que su diabetes está insuficientemente controlada. Sin embargo, el beneficio de intensificar exclusivamente el control glucémico sobre la prevención del ACV es menos contundente que el beneficio del control de la presión arterial. De hecho, la guía de prevención primaria de 2024 señala que el objetivo glucémico óptimo específicamente para reducir el riesgo de ACV sigue siendo un área con incertidumbre.\n🧪 ¿Antioxidantes?\nNo.\nNo existe una recomendación de añadir antioxidantes como estrategia específica para prevenir ACV.\n🩸 ¿Controlar la presión arterial?\nAquí está la clave.\nLa relación entre presión arterial y riesgo de ACV es fuerte y progresiva, y los ensayos clínicos han demostrado reducción de eventos cerebrovasculares mediante el tratamiento antihipertensivo.\nPor eso:\nLa respuesta que mejor encaja con el concepto preguntado es B.\n\n❌ ¿POR QUÉ NO LAS OTRAS?\nA. HbA1c óptima ❌\nLa diabetes es un factor de riesgo importante, pero la reducción intensiva de la glucemia no tiene el mismo impacto preventivo sobre el ACV que el control de la presión arterial.\nB. Control óptimo de la PA ✅\nEs la respuesta correcta.\nLa hipertensión es el principal factor de riesgo modificable de ACV, y reducir la PA disminuye el riesgo de eventos cerebrovasculares.\nC. Antioxidante ❌\nNo existe evidencia suficiente para recomendar antioxidantes como intervención específica de prevención del ACV.\nD. Abandono del tabaco ❌\nOjo: esta opción también es una intervención preventiva excelente. No es \"incorrecta\" clínicamente.\nLa clave está en que la pregunta pregunta cuál se asocia con una mayor reducción del riesgo de ACV, y el concepto clásico que se pretende evaluar es el control de la hipertensión.\n\n⚠️ TRAMPA MIR\nNo confundas:\n\"Factor de riesgo modificable más importante\"\ncon:\n\"Todas las intervenciones que reducen el riesgo de ACV\".\nDejar de fumar, controlar la diabetes, tratar la dislipidemia, hacer ejercicio y controlar la PA son todas medidas correctas.\nPero si aparece:\n¿Cuál es el factor de riesgo modificable más importante para ACV?\n\n👉 HIPERTENSIÓN ARTERIAL.\n\n🏆 PERLA DOCTOR Q\n\n🩸 ACV → PIENSA EN PRESIÓN ARTERIAL\nHTA = principal factor de riesgo modificable de ACV.\nY una perla adicional:\nLa reducción de la PA es más importante que elegir un antihipertensivo concreto para disminuir el riesgo de ACV.\n\n📚 REFERENCIAS\n1. Kleindorfer DO, et al. 2021 Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack. Stroke. 2021;52:e364-e467. La guía destaca el manejo de factores vasculares, especialmente la hipertensión, además de diabetes, tabaquismo y lípidos.\n2. Kernan WN, et al. / AHA/ASA. Guidelines for the Primary Prevention of Stroke. La hipertensión se describe como el factor de riesgo modificable más importante y mejor documentado para ACV, y su tratamiento como una de las estrategias más eficaces de prevención.\n3. Kleindorfer DO, et al. / AHA/ASA. 2024 Guideline for the Primary Prevention of Stroke. Incluye recomendaciones actuales sobre control de PA, diabetes, tabaquismo, lípidos, actividad física y otros factores de riesgo."
  },
  {
    "id": "dr-q-eval3-24",
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Una mujer de 76 años, sin antecedentes de traumatismo, presenta de forma brusca dificultad para hablar y pérdida de fuerza en el brazo derecho. La TC craneal muestra una hemorragia intraparenquimatosa lobar parietal izquierda, sin afectación de ganglios basales ni tálamo. La paciente no presenta cifras de presión arterial especialmente elevadas y refiere que hace 8 meses tuvo un episodio similar, aunque de menor intensidad, que se resolvió espontáneamente. En la RM cerebral se observan además múltiples pequeños focos de susceptibilidad magnética localizados predominantemente en regiones corticales y subcorticales. ¿Cuál de las siguientes entidades explica mejor este cuadro?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Arteriopatía hipertensiva de pequeño vaso."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Angiopatía cerebral amiloidea."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Malformación arteriovenosa cerebral."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hemorragia secundaria a metástasis cerebral."
      },
    ],
    "correctOptionId": "B",
    "explanation": "JUSTIFICACIÓN\nLa angiopatía cerebral amiloidea se produce por depósito de β-amiloide en las paredes de las arterias pequeñas y medianas de las leptomeninges y la corteza cerebral, provocando fragilidad vascular y predisposición a hemorragias.\nLa clave del caso es la combinación:\nPaciente anciano + hemorragia lobar recurrente + microhemorragias corticales/subcorticales.\nEsto contrasta con la arteriopatía hipertensiva, que típicamente produce hemorragias en estructuras profundas, especialmente:\n• Ganglios basales → putamen.\n• Tálamo.\n• Puente.\n• Cerebelo.\nPor tanto, hemorragia lobar en un paciente de edad avanzada = pensar en angiopatía cerebral amiloidea, especialmente si existen múltiples microhemorragias lobares.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔥 1. Localización de la hemorragia = pista etiológica\nLocalización | Causa clásica\nLobar/cortical | 🧠 Angiopatía cerebral amiloidea\nGanglios basales | Hipertensión\nTálamo | Hipertensión\nPuente | Hipertensión\nCerebelo | Hipertensión\nRegla MIR:\nAnciano + hemorragia lobar → angiopatía amiloidea hasta demostrar lo contrario.\n🔥 2. ¿Qué son las microhemorragias?\nLas microhemorragias visibles en secuencias de susceptibilidad de la RM son una manifestación de enfermedad de pequeño vaso.\nSu distribución ayuda muchísimo:\n• Lobar/cortical-subcortical → angiopatía amiloidea.\n• Profunda → hipertensión.\n🔥 3. Manifestación característica\nLa angiopatía cerebral amiloidea puede producir:\n• Hemorragias lobares espontáneas.\n• Hemorragias lobares recurrentes.\n• Microhemorragias corticales.\n• Siderosis superficial cortical.\n• Deterioro cognitivo en algunos pacientes.",
    "keyPoints": [],
    "theoryContent": "JUSTIFICACIÓN\nLa angiopatía cerebral amiloidea se produce por depósito de β-amiloide en las paredes de las arterias pequeñas y medianas de las leptomeninges y la corteza cerebral, provocando fragilidad vascular y predisposición a hemorragias.\nLa clave del caso es la combinación:\nPaciente anciano + hemorragia lobar recurrente + microhemorragias corticales/subcorticales.\nEsto contrasta con la arteriopatía hipertensiva, que típicamente produce hemorragias en estructuras profundas, especialmente:\n• Ganglios basales → putamen.\n• Tálamo.\n• Puente.\n• Cerebelo.\nPor tanto, hemorragia lobar en un paciente de edad avanzada = pensar en angiopatía cerebral amiloidea, especialmente si existen múltiples microhemorragias lobares.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔥 1. Localización de la hemorragia = pista etiológica\nLocalización | Causa clásica\nLobar/cortical | 🧠 Angiopatía cerebral amiloidea\nGanglios basales | Hipertensión\nTálamo | Hipertensión\nPuente | Hipertensión\nCerebelo | Hipertensión\nRegla MIR:\nAnciano + hemorragia lobar → angiopatía amiloidea hasta demostrar lo contrario.\n🔥 2. ¿Qué son las microhemorragias?\nLas microhemorragias visibles en secuencias de susceptibilidad de la RM son una manifestación de enfermedad de pequeño vaso.\nSu distribución ayuda muchísimo:\n• Lobar/cortical-subcortical → angiopatía amiloidea.\n• Profunda → hipertensión.\n🔥 3. Manifestación característica\nLa angiopatía cerebral amiloidea puede producir:\n• Hemorragias lobares espontáneas.\n• Hemorragias lobares recurrentes.\n• Microhemorragias corticales.\n• Siderosis superficial cortical.\n• Deterioro cognitivo en algunos pacientes.\n\n👨‍⚕️ EXPLICACIÓN DEL PROFE: BY DR Q\nAquí quiero que aprendas a leer la TC antes de mirar las opciones.\nUn paciente de 76 años tiene una hemorragia cerebral.\nLa primera pregunta no es:\n\"¿Cuál de las opciones conozco?\"\nLa primera pregunta es:\n\"¿Dónde está sangrando?\"\nSi la hemorragia está en putamen, tálamo, puente o cerebelo, piensa primero en hipertensión crónica.\nPero si el paciente es mayor y la hemorragia está en corteza o sustancia blanca subcortical, cambia completamente el razonamiento:\nhemorragia lobar → angiopatía cerebral amiloidea.\nY si además aparecen microhemorragias lobares, prácticamente te están señalando el diagnóstico.\n⚠️ Error clásico\nNo confundas:\nHipertensión → hemorragia profunda\ncon\nAngiopatía amiloidea → hemorragia lobar.\nEsa asociación anatómica es una de las perlas de alto rendimiento de Neurología.\n\n📚 REFERENCIAS\n• Greenberg SM, et al. 2022 Guideline for the Management of Patients With Spontaneous Intracerebral Hemorrhage. Stroke. 2022.\n• Greenberg SM, et al. Boston Criteria v2.0 for Cerebral Amyloid Angiopathy. Lancet Neurology. 2022."
  },
  {
    "id": "dr-q-eval3-25",
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Una mujer de 38 años consulta por una cefalea de inicio súbito y máxima intensidad desde el primer minuto, acompañada de vómitos y fotofobia. El episodio comenzó mientras realizaba ejercicio intenso, hace aproximadamente 8 horas. En la exploración neurológica no presenta focalidad. Se realiza una TC craneal sin contraste que no muestra alteraciones. Ante la elevada sospecha clínica de hemorragia subaracnoidea, ¿cuál es la siguiente actuación más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Solicitar una RM cerebral con secuencias de difusión y susceptibilidad magnética."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Realizar una punción lumbar para estudiar el líquido cefalorraquídeo."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Dar el alta con tratamiento sintomático al ser normal la TC craneal."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Repetir la TC craneal en 24 horas antes de realizar cualquier otra prueba."
      },
    ],
    "correctOptionId": "B",
    "explanation": "JUSTIFICACIÓN\nEl cuadro es altamente sugestivo de hemorragia subaracnoidea (HSA) por la presencia de una cefalea en trueno, especialmente al alcanzar su máxima intensidad desde el inicio y aparecer durante el ejercicio.\nUna TC craneal negativa no excluye completamente una HSA, especialmente cuando han transcurrido varias horas desde el inicio del cuadro.\nCuando persiste una elevada sospecha clínica después de una TC negativa, la punción lumbar permite detectar productos de degradación de la sangre en el LCR, especialmente xantocromía.\nLa clave del caso es:\nCefalea en trueno + TC negativa + alta sospecha de HSA → punción lumbar.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔥 1. La cefalea en trueno es una bandera roja\nUna cefalea que alcanza su máxima intensidad de forma prácticamente inmediata obliga a descartar causas secundarias, especialmente:\n• Hemorragia subaracnoidea.\n• Disección arterial.\n• Trombosis venosa cerebral.\n• Síndrome de vasoconstricción cerebral reversible.\n🔥 2. La TC negativa NO siempre descarta HSA\nLa sensibilidad de la TC depende del tiempo transcurrido desde el inicio de los síntomas.\nPor eso, si existe una sospecha clínica importante y la TC no demuestra sangre, debemos plantearnos una prueba adicional.\nEn el escenario clásico de examen:\nSospecha de HSA → TC craneal → TC negativa → punción lumbar.\n🔥 3. ¿Qué buscamos en el LCR?\nPrincipalmente:\nXantocromía → resultado de la degradación de los hematíes presentes en el espacio subaracnoideo.\nEsto ayuda a diferenciar una verdadera HSA de una posible punción lumbar traumática.",
    "keyPoints": [],
    "theoryContent": "JUSTIFICACIÓN\nEl cuadro es altamente sugestivo de hemorragia subaracnoidea (HSA) por la presencia de una cefalea en trueno, especialmente al alcanzar su máxima intensidad desde el inicio y aparecer durante el ejercicio.\nUna TC craneal negativa no excluye completamente una HSA, especialmente cuando han transcurrido varias horas desde el inicio del cuadro.\nCuando persiste una elevada sospecha clínica después de una TC negativa, la punción lumbar permite detectar productos de degradación de la sangre en el LCR, especialmente xantocromía.\nLa clave del caso es:\nCefalea en trueno + TC negativa + alta sospecha de HSA → punción lumbar.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔥 1. La cefalea en trueno es una bandera roja\nUna cefalea que alcanza su máxima intensidad de forma prácticamente inmediata obliga a descartar causas secundarias, especialmente:\n• Hemorragia subaracnoidea.\n• Disección arterial.\n• Trombosis venosa cerebral.\n• Síndrome de vasoconstricción cerebral reversible.\n🔥 2. La TC negativa NO siempre descarta HSA\nLa sensibilidad de la TC depende del tiempo transcurrido desde el inicio de los síntomas.\nPor eso, si existe una sospecha clínica importante y la TC no demuestra sangre, debemos plantearnos una prueba adicional.\nEn el escenario clásico de examen:\nSospecha de HSA → TC craneal → TC negativa → punción lumbar.\n🔥 3. ¿Qué buscamos en el LCR?\nPrincipalmente:\nXantocromía → resultado de la degradación de los hematíes presentes en el espacio subaracnoideo.\nEsto ayuda a diferenciar una verdadera HSA de una posible punción lumbar traumática.\n\n👨‍⚕️ EXPLICACIÓN DEL PROFE: BY DR Q\nEsta pregunta tiene una trampa muy típica:\n\"La TC es normal, entonces no tiene HSA.\"\n\n❌ FALSO.\nLa pregunta realmente quiere comprobar si sabes qué hacer cuando tienes una sospecha clínica fuerte pero una prueba inicial negativa.\nEl paciente no tiene simplemente \"dolor de cabeza\".\nTiene:\ninicio súbito + máxima intensidad desde el primer momento + desencadenante físico.\nEso es una cefalea en trueno hasta demostrar lo contrario.\nPor eso no puedes tranquilizarte simplemente porque la TC sea normal.\n🧠 Perla MIR\nCEFalea en trueno → piensa primero en HSA.\nY si la TC es negativa pero la sospecha persiste, el siguiente paso clásico es:\n👉 PUNCIÓN LUMBAR → xantocromía.\n\n📚 REFERENCIAS\n• Connolly ES Jr, et al. Guidelines for the Management of Aneurysmal Subarachnoid Hemorrhage. Stroke.\n• Perry JJ, et al. Estudios sobre el rendimiento diagnóstico de la TC y la punción lumbar en pacientes con cefalea aguda. BMJ."
  },
  {
    "id": "dr-q-eval3-26",
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un varón de 67 años presenta un ictus isquémico hemisférico izquierdo con afasia y hemiparesia derecha. El estudio etiológico incluye ecocardiografía, Doppler de troncos supraaórticos y monitorización electrocardiográfica prolongada, sin encontrar una fuente cardioembólica ni enfermedad carotídea significativa. No presenta fibrilación auricular conocida. Se clasifica el ictus como de origen indeterminado. ¿Cuál de las siguientes opciones es la más adecuada como tratamiento de prevención secundaria?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Iniciar anticoagulación oral con acenocumarol de forma indefinida."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar antiagregación plaquetaria con ácido acetilsalicílico."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Iniciar heparina de bajo peso molecular a dosis anticoagulantes."
      },
      {
        "id": "D",
        "label": "D",
        "text": "No iniciar tratamiento antitrombótico hasta demostrar una fuente cardioembólica."
      },
    ],
    "correctOptionId": "B",
    "explanation": "JUSTIFICACIÓN\nCuando un paciente presenta un ictus isquémico de origen indeterminado y no se identifica una fuente cardioembólica que justifique anticoagulación, la estrategia de prevención secundaria es la antiagregación plaquetaria.\nEl ácido acetilsalicílico inhibe de forma irreversible la COX-1 plaquetaria, disminuyendo la síntesis de tromboxano A₂ y, por tanto, la agregación plaquetaria.\nLa anticoagulación está indicada cuando existe una causa que la justifique, como fibrilación auricular u otra fuente cardioembólica de alto riesgo.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔥 1. La pregunta clave después de un ictus es: ¿cuál es el mecanismo?\nIctus no cardioembólico → antiagregación.\nIctus cardioembólico, especialmente por FA → anticoagulación.\n🔥 2. Ictus criptogénico\nSi haces un estudio completo y no encuentras:\n• enfermedad carotídea significativa,\n• fuente cardioembólica,\n• fibrilación auricular,\nel ictus puede clasificarse como criptogénico/de origen indeterminado.\nEn este escenario, no se anticoagula de rutina simplemente porque no conozcamos la causa.\n🔥 3. Ojo con la trampa\nEl razonamiento incorrecto sería:\n\"No sé de dónde viene el émbolo → entonces anticoagulo por si acaso.\"\n❌ No.\nLa anticoagulación tiene un riesgo hemorrágico y debe existir una indicación clara.",
    "keyPoints": [],
    "theoryContent": "JUSTIFICACIÓN\nCuando un paciente presenta un ictus isquémico de origen indeterminado y no se identifica una fuente cardioembólica que justifique anticoagulación, la estrategia de prevención secundaria es la antiagregación plaquetaria.\nEl ácido acetilsalicílico inhibe de forma irreversible la COX-1 plaquetaria, disminuyendo la síntesis de tromboxano A₂ y, por tanto, la agregación plaquetaria.\nLa anticoagulación está indicada cuando existe una causa que la justifique, como fibrilación auricular u otra fuente cardioembólica de alto riesgo.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n🔥 1. La pregunta clave después de un ictus es: ¿cuál es el mecanismo?\nIctus no cardioembólico → antiagregación.\nIctus cardioembólico, especialmente por FA → anticoagulación.\n🔥 2. Ictus criptogénico\nSi haces un estudio completo y no encuentras:\n• enfermedad carotídea significativa,\n• fuente cardioembólica,\n• fibrilación auricular,\nel ictus puede clasificarse como criptogénico/de origen indeterminado.\nEn este escenario, no se anticoagula de rutina simplemente porque no conozcamos la causa.\n🔥 3. Ojo con la trampa\nEl razonamiento incorrecto sería:\n\"No sé de dónde viene el émbolo → entonces anticoagulo por si acaso.\"\n❌ No.\nLa anticoagulación tiene un riesgo hemorrágico y debe existir una indicación clara.\n\n👨‍⚕️ EXPLICACIÓN DEL PROFE: BY DR Q\nEsta es una pregunta de mecanismo + tratamiento.\nCuando veas un ictus, piensa:\n¿Cardioembólico?\nSi encuentras FA → anticoagulante.\nSi no encuentras una fuente cardioembólica y estamos ante un ictus no cardioembólico o de origen indeterminado → antiagregante.\nPor eso el dato más importante del caso no es que el paciente tenga 67 años ni que tenga afasia.\nEs este:\nEstudio etiológico negativo + ausencia de FA.\nEso te lleva a:\n\nICTUS DE ORIGEN INDETERMINADO → AAS.\n\n⚠️ PERLA MIR\nNo confundas:\nAAS = prevención secundaria del ictus isquémico no cardioembólico.\nAnticoagulación = prevención secundaria cuando existe una fuente cardioembólica que la indique.\n\n📚 REFERENCIAS\n• Kleindorfer DO, et al. 2021 Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack. Stroke."
  },
  {
    "id": "dr-q-eval3-27",
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un paciente de 71 años con factores de riesgo vascular acude a urgencias porque de manera brusca comienza a reconocer las letras por separado, pero es incapaz de unirlas para leer palabras y frases. Sin embargo, conserva la capacidad de escribir con normalidad. ¿Cuál de las siguientes arterias está más probablemente afectada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Arteria cerebral media izquierda."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Arteria cerebral posterior derecha."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Arteria basilar."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Arteria cerebral posterior izquierda."
      },
    ],
    "correctOptionId": "D",
    "explanation": "JUSTIFICACIÓN\nEl cuadro corresponde a una alexia sin agrafia: el paciente puede escribir, pero posteriormente es incapaz de leer lo que ha escrito.\nLa lesión clásica afecta al córtex visual occipital izquierdo y al esplenio del cuerpo calloso, interrumpiendo la llegada de la información visual al hemisferio dominante del lenguaje.\nLa irrigación de estas estructuras depende fundamentalmente de la arteria cerebral posterior izquierda.\nEl dato clave es:\nLee letras → no puede integrarlas en palabras → puede escribir normalmente.\nEsto orienta a alexia sin agrafia.\n\nLO QUE DEBES SABER PARA EL EXAMEN\n🧠 Alexia sin agrafia\nTambién llamada alexia pura.\n• Lectura: ❌ alterada.\n• Escritura: ✅ conservada.\n• Comprensión del lenguaje: conservada.\n• Lenguaje espontáneo: conservado.\n• Lesión: corteza visual occipital dominante + esplenio.\n• Arteria: cerebral posterior del lado dominante, habitualmente la izquierda.\n🔥 Perla MIR\nAlexia + agrafia → piensa en lesión del hemisferio dominante, especialmente áreas del lenguaje.\nAlexia SIN agrafia → piensa inmediatamente en:\nPCA izquierda → occipital izquierdo + esplenio.\nEl paciente puede escribir una palabra porque las áreas motoras y del lenguaje escrito funcionan, pero no puede leerla después, porque la información visual no puede alcanzar adecuadamente las áreas lingüísticas del hemisferio dominante.",
    "keyPoints": [],
    "theoryContent": "JUSTIFICACIÓN\nEl cuadro corresponde a una alexia sin agrafia: el paciente puede escribir, pero posteriormente es incapaz de leer lo que ha escrito.\nLa lesión clásica afecta al córtex visual occipital izquierdo y al esplenio del cuerpo calloso, interrumpiendo la llegada de la información visual al hemisferio dominante del lenguaje.\nLa irrigación de estas estructuras depende fundamentalmente de la arteria cerebral posterior izquierda.\nEl dato clave es:\nLee letras → no puede integrarlas en palabras → puede escribir normalmente.\nEsto orienta a alexia sin agrafia.\n\nLO QUE DEBES SABER PARA EL EXAMEN\n🧠 Alexia sin agrafia\nTambién llamada alexia pura.\n• Lectura: ❌ alterada.\n• Escritura: ✅ conservada.\n• Comprensión del lenguaje: conservada.\n• Lenguaje espontáneo: conservado.\n• Lesión: corteza visual occipital dominante + esplenio.\n• Arteria: cerebral posterior del lado dominante, habitualmente la izquierda.\n🔥 Perla MIR\nAlexia + agrafia → piensa en lesión del hemisferio dominante, especialmente áreas del lenguaje.\nAlexia SIN agrafia → piensa inmediatamente en:\nPCA izquierda → occipital izquierdo + esplenio.\nEl paciente puede escribir una palabra porque las áreas motoras y del lenguaje escrito funcionan, pero no puede leerla después, porque la información visual no puede alcanzar adecuadamente las áreas lingüísticas del hemisferio dominante.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\nAquí la clave no es memorizar simplemente \"PCA = alexia\".\nHay que entender el circuito.\nLa información visual llega a la corteza visual occipital. Para que podamos leer una palabra, esa información visual debe comunicarse con las áreas lingüísticas del hemisferio dominante.\nEn la alexia sin agrafia, el paciente ve, reconoce letras individualmente e incluso puede escribir, pero la información visual procedente del campo visual derecho no consigue llegar correctamente a las áreas del lenguaje del hemisferio izquierdo.\nEsto ocurre por una lesión del:\noccipital izquierdo + esplenio del cuerpo calloso.\nPor eso:\nPCA izquierda → occipital izquierdo → déficit visual/léxico\ny\nPCA izquierda → esplenio → se interrumpe la comunicación visual con el hemisferio dominante.\n❌ Error típico\nPensar:\n\"Si el problema es leer, tiene que ser una lesión de Broca o Wernicke.\"\nNo necesariamente.\nEn la alexia sin agrafia, las áreas clásicas del lenguaje pueden estar conservadas. El problema está en cómo llega la información visual a ellas.\n\n🧠 TABLA DE ALTO RENDIMIENTO\nAlteración | Escritura | Lectura | Localización típica\nAlexia sin agrafia | ✅ | ❌ | Occipital dominante + esplenio\nAlexia con agrafia | ❌ | ❌ | Región parietotemporal dominante\nAfasia de Broca | Variable | Variable | Frontal dominante\nAfasia de Wernicke | Alterada | Alterada | Temporal dominante\n\n🚨 PERLA DR Q\n\"Puede escribir pero no puede leer\" = ALEXIA SIN AGRAFIA = PCA IZQUIERDA.\nNo te distraigas con que reconoce las letras individualmente. El problema está en integrar/procesar la información visual para convertirla en lenguaje escrito.\n\n📚 REFERENCIAS\n• Blumenfeld H. Neuroanatomy Through Clinical Cases. Oxford University Press.\n• Adams and Victor's Principles of Neurology. McGraw-Hill."
  },
  {
    "id": "dr-q-eval3-28",
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "¿Cuál de los siguientes no es característico de un ictus de la arteria cerebral anterior (ACA)?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Abulia."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Incontinencia urinaria."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Paresia de la pierna contralateral."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Desviación óculo-cefálica hacia el lado de la lesión."
      },
    ],
    "correctOptionId": "D",
    "explanation": "JUSTIFICACIÓN\nEl territorio de la arteria cerebral anterior irriga fundamentalmente la superficie medial de los lóbulos frontal y parietal, incluyendo la representación motora de la extremidad inferior y estructuras frontales relacionadas con la iniciativa y el control vesical.\nPor eso, un ictus de ACA puede producir:\n• Paresia contralateral predominante en la pierna.\n• Abulia o disminución marcada de la iniciativa.\n• Incontinencia urinaria.\n• Alteraciones conductuales y signos de liberación frontal.\nLa desviación óculo-cefálica hacia el lado de la lesión se relaciona fundamentalmente con afectación del campo ocular frontal, cuyo territorio vascular clásico corresponde a la arteria cerebral media, por lo que no es una manifestación característica del síndrome de ACA.\n\nLO QUE DEBES SABER PARA EL EXAMEN\n\n🧠 ARTERIA CEREBRAL ANTERIOR → «PIERNA + FRONTAL + PIS»\nPiensa en tres grandes claves:\n\n1. PIERNA\n→ Paresia contralateral predominante en miembro inferior.\n\n2. FRONTAL\n→ Abulia, alteraciones conductuales, apatía y otros signos frontales.\n3. PIS\n→ Incontinencia urinaria por afectación de estructuras frontales implicadas en el control vesical.\n🔥 Perla MIR\nACA = pierna > brazo + abulia + incontinencia urinaria.\nEn cambio:\nMCA → cara/brazo + afasia o negligencia + desviación de la mirada hacia el lado de la lesión.",
    "keyPoints": [],
    "theoryContent": "JUSTIFICACIÓN\nEl territorio de la arteria cerebral anterior irriga fundamentalmente la superficie medial de los lóbulos frontal y parietal, incluyendo la representación motora de la extremidad inferior y estructuras frontales relacionadas con la iniciativa y el control vesical.\nPor eso, un ictus de ACA puede producir:\n• Paresia contralateral predominante en la pierna.\n• Abulia o disminución marcada de la iniciativa.\n• Incontinencia urinaria.\n• Alteraciones conductuales y signos de liberación frontal.\nLa desviación óculo-cefálica hacia el lado de la lesión se relaciona fundamentalmente con afectación del campo ocular frontal, cuyo territorio vascular clásico corresponde a la arteria cerebral media, por lo que no es una manifestación característica del síndrome de ACA.\n\nLO QUE DEBES SABER PARA EL EXAMEN\n\n🧠 ARTERIA CEREBRAL ANTERIOR → «PIERNA + FRONTAL + PIS»\nPiensa en tres grandes claves:\n\n1. PIERNA\n→ Paresia contralateral predominante en miembro inferior.\n\n2. FRONTAL\n→ Abulia, alteraciones conductuales, apatía y otros signos frontales.\n3. PIS\n→ Incontinencia urinaria por afectación de estructuras frontales implicadas en el control vesical.\n🔥 Perla MIR\nACA = pierna > brazo + abulia + incontinencia urinaria.\nEn cambio:\nMCA → cara/brazo + afasia o negligencia + desviación de la mirada hacia el lado de la lesión.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\nAquí el truco está en localizar el territorio cortical.\nLa representación motora del cuerpo está organizada de manera que la pierna se encuentra en la superficie medial del hemisferio, mientras que cara y miembro superior predominan en la superficie lateral.\nPor eso:\nACA → superficie medial → pierna.\nMientras que:\nMCA → superficie lateral → cara y brazo.\nAdemás, la ACA participa en la irrigación de regiones frontales relacionadas con motivación, iniciativa y control esfinteriano, de ahí la asociación clásica:\nAbulia + incontinencia urinaria + paresia de predominio crural = ACA.\nLa desviación de la mirada hacia el lado de la lesión, sin embargo, nos debe hacer pensar en una lesión hemisférica que compromete el campo ocular frontal, clásicamente dentro del territorio de la MCA.\n🚨 Error típico\nNo memorices simplemente:\n\"ACA = desviación de la mirada\".\nMemoriza la distribución:\nACA → medial → pierna.\nMCA → lateral → cara/brazo + campo ocular frontal.\n\n📌 TABLA DE ALTO RENDIMIENTO\nArteria | Déficit motor predominante | Otros datos clave\nACA | 🦵 Pierna contralateral | Abulia + incontinencia urinaria\nMCA | 💪 Cara y brazo contralaterales | Afasia si hemisferio dominante; negligencia si no dominante; desviación de la mirada\nACP | Alteraciones visuales | Hemianopsia homónima\n\n🧠 PERLA DR Q\n\nACA = \"P.I.P.\"\nP → Pierna\nI → Incontinencia\nP → Pérdida de iniciativa (abulia)\nY si aparece desviación de la mirada hacia la lesión, piensa primero en MCA, no en ACA.\n\n📚 REFERENCIAS\n• Blumenfeld H. Neuroanatomy Through Clinical Cases. Oxford University Press.\n• Ropper AH, Samuels MA, Klein JP. Adams and Victor's Principles of Neurology. McGraw-Hill.\n• Snell RS. Clinical Neuroanatomy. Wolters Kluwer."
  },
  {
    "id": "dr-q-eval3-29",
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Si observamos una parálisis bilateral de la lengua, manteniéndose el gusto y la sensibilidad táctil de su mucosa, hay que pensar en una parálisis del nervio:",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Maxilar inferior."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hipogloso."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Facial."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Glosofaríngeo."
      },
    ],
    "correctOptionId": "B",
    "explanation": "JUSTIFICACIÓN\nEl nervio hipogloso (XII par craneal) es el principal nervio motor de la lengua.\nUna lesión bilateral del XII produce parálisis bilateral de la lengua, mientras que el gusto y la sensibilidad de la mucosa lingual permanecen conservados, porque estas funciones dependen de otros pares craneales.\n• Motor de la lengua → XII (hipogloso)\n• Gusto de los 2/3 anteriores → VII\n• Sensibilidad general de los 2/3 anteriores → V3\n• Gusto y sensibilidad del tercio posterior → IX\nPor tanto, si el déficit es exclusivamente motor lingual, piensa en XII.\n\nLO QUE DEBES SABER PARA EL EXAMEN\n\n🧠 INERVACIÓN DE LA LENGUA\nFunción | Región | Nervio\nMotricidad | Toda la lengua excepto palatogloso | XII Hipogloso\nSensibilidad general | 2/3 anteriores | V3 — lingual\nGusto | 2/3 anteriores | VII — cuerda del tímpano\nSensibilidad + gusto | 1/3 posterior | IX — glosofaríngeo\nMotricidad | Palatogloso | X — vago\n🔥 Perla MIR\nXII = mueve la lengua.\nSi te preguntan por una parálisis lingual y no hablan de alteraciones sensitivas ni del gusto → HIPOGLOSO.",
    "keyPoints": [],
    "theoryContent": "JUSTIFICACIÓN\nEl nervio hipogloso (XII par craneal) es el principal nervio motor de la lengua.\nUna lesión bilateral del XII produce parálisis bilateral de la lengua, mientras que el gusto y la sensibilidad de la mucosa lingual permanecen conservados, porque estas funciones dependen de otros pares craneales.\n• Motor de la lengua → XII (hipogloso)\n• Gusto de los 2/3 anteriores → VII\n• Sensibilidad general de los 2/3 anteriores → V3\n• Gusto y sensibilidad del tercio posterior → IX\nPor tanto, si el déficit es exclusivamente motor lingual, piensa en XII.\n\nLO QUE DEBES SABER PARA EL EXAMEN\n\n🧠 INERVACIÓN DE LA LENGUA\nFunción | Región | Nervio\nMotricidad | Toda la lengua excepto palatogloso | XII Hipogloso\nSensibilidad general | 2/3 anteriores | V3 — lingual\nGusto | 2/3 anteriores | VII — cuerda del tímpano\nSensibilidad + gusto | 1/3 posterior | IX — glosofaríngeo\nMotricidad | Palatogloso | X — vago\n🔥 Perla MIR\nXII = mueve la lengua.\nSi te preguntan por una parálisis lingual y no hablan de alteraciones sensitivas ni del gusto → HIPOGLOSO.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\nLa pregunta está construida para que diferencies función motora de función sensitiva y gustativa.\nEl hipogloso es un nervio motor. Por eso una lesión del XII produce alteraciones en el movimiento de la lengua, pero no tiene por qué alterar ni el gusto ni la sensibilidad de la mucosa.\nEsto permite descartar rápidamente:\n• V3: aporta sensibilidad general a los 2/3 anteriores.\n• VII: aporta el gusto de los 2/3 anteriores.\n• IX: aporta sensibilidad y gusto del tercio posterior.\n\n🚨 OJO CON ESTA TRAMPA\nNo confundas:\n\"La lengua está paralizada\" → XII\ncon\n\"La lengua ha perdido sensibilidad\" → V3 o IX según territorio.\nY tampoco:\n\"Ha perdido el gusto\" → VII o IX según territorio.\n\n📌 PERLA DR Q\n\nMOTOR = XII\n\nSENSIBILIDAD = V3 / IX\n\nGUSTO = VII / IX\nY recuerda la excepción motora:\nPalatogloso → X (vago).\n\n📚 REFERENCIAS\n• Manual de Neurología, apartado de pares craneales.\n• Snell RS. Clinical Neuroanatomy. Wolters Kluwer."
  },
  {
    "id": "dr-q-eval3-30",
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un varón de 28 años consulta por debilidad progresiva en ambas piernas de 5 días de evolución. Refiere que el cuadro comenzó con parestesias en ambos pies y posteriormente presentó dificultad para subir escaleras. En las últimas 24 horas nota también debilidad en las manos. En la exploración presenta tetraparesia flácida y simétrica, con arreflexia osteotendinosa generalizada y sensibilidad ligeramente disminuida en los pies. No presenta nivel sensitivo ni alteraciones esfinterianas. Refiere haber presentado un episodio de diarrea autolimitada aproximadamente 2 semanas antes.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Mielopatía cervical aguda."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Síndrome de Guillain-Barré."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Esclerosis múltiple."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Esclerosis lateral amiotrófica."
      },
    ],
    "correctOptionId": "B",
    "explanation": "Justificación\nEl cuadro es altamente sugestivo de síndrome de Guillain-Barré (SGB):\n• Debilidad progresiva y simétrica.\n• Inicio en miembros inferiores con progresión ascendente.\n• Arreflexia.\n• Parestesias asociadas.\n• Ausencia de nivel sensitivo.\n• Ausencia de alteración esfinteriana.\n• Antecedente de infección gastrointestinal reciente, clásicamente asociado a Campylobacter jejuni.\nEl SGB es una polirradiculoneuropatía inflamatoria aguda, habitualmente desmielinizante, que afecta al sistema nervioso periférico.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 SÍNDROME DE GUILLAIN-BARRÉ = DEBILIDAD + ARREFLEXIA\nCaracterística | Guillain-Barré\nDebilidad | Simétrica y progresiva\nDistribución | Típicamente ascendente\nReflejos | Disminuidos o abolidos\nSensibilidad | Parestesias frecuentes, déficit sensitivo generalmente leve\nNivel sensitivo | ❌\nEsfínteres | Generalmente respetados\nAntecedente infeccioso | Frecuente\nLCR | Disociación albúmino-citológica\nComplicación clave | Insuficiencia respiratoria\nTratamiento | IVIG o plasmaféresis\n\n⚠️ PERLA MIR\nNo te quedes únicamente con \"debilidad ascendente\".\nLa combinación que debe hacerte pensar inmediatamente en SGB es:\nParesia flácida simétrica + arreflexia + ausencia de nivel sensitivo.\nY algo fundamental:\nEl SGB puede producir insuficiencia respiratoria incluso antes de que el paciente parezca gravemente afectado.\nPor eso hay que vigilar la función respiratoria y la musculatura bulbar.",
    "keyPoints": [],
    "theoryContent": "Justificación\nEl cuadro es altamente sugestivo de síndrome de Guillain-Barré (SGB):\n• Debilidad progresiva y simétrica.\n• Inicio en miembros inferiores con progresión ascendente.\n• Arreflexia.\n• Parestesias asociadas.\n• Ausencia de nivel sensitivo.\n• Ausencia de alteración esfinteriana.\n• Antecedente de infección gastrointestinal reciente, clásicamente asociado a Campylobacter jejuni.\nEl SGB es una polirradiculoneuropatía inflamatoria aguda, habitualmente desmielinizante, que afecta al sistema nervioso periférico.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 SÍNDROME DE GUILLAIN-BARRÉ = DEBILIDAD + ARREFLEXIA\nCaracterística | Guillain-Barré\nDebilidad | Simétrica y progresiva\nDistribución | Típicamente ascendente\nReflejos | Disminuidos o abolidos\nSensibilidad | Parestesias frecuentes, déficit sensitivo generalmente leve\nNivel sensitivo | ❌\nEsfínteres | Generalmente respetados\nAntecedente infeccioso | Frecuente\nLCR | Disociación albúmino-citológica\nComplicación clave | Insuficiencia respiratoria\nTratamiento | IVIG o plasmaféresis\n\n⚠️ PERLA MIR\nNo te quedes únicamente con \"debilidad ascendente\".\nLa combinación que debe hacerte pensar inmediatamente en SGB es:\nParesia flácida simétrica + arreflexia + ausencia de nivel sensitivo.\nY algo fundamental:\nEl SGB puede producir insuficiencia respiratoria incluso antes de que el paciente parezca gravemente afectado.\nPor eso hay que vigilar la función respiratoria y la musculatura bulbar.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nPiensa primero dónde está la lesión.\n1️⃣ ¿Médula espinal?\nUna lesión medular suele darte un nivel sensitivo, alteraciones esfinterianas y, dependiendo de la fase, signos de primera motoneurona.\nAquí no tenemos nada de eso.\n2️⃣ ¿Primera motoneurona?\nEsperaríamos:\nespasticidad + hiperreflexia + Babinski.\nAquí ocurre exactamente lo contrario:\nflacidez + arreflexia.\n3️⃣ ¿Segunda motoneurona / nervio periférico?\nSí.\nY cuando además tenemos:\nsimetría + progresión rápida + arreflexia → piensa en Guillain-Barré.\n\n🎯 PERLA DE ORO\nGuillain-Barré = paciente que se va quedando sin fuerza y sin reflejos.\nSi además aparece:\ndisnea, disfagia, disartria o debilidad facial → piensa en compromiso de musculatura respiratoria/bulbar y vigila estrechamente.\n\n📚 REFERENCIAS\n• Harrison. Principios de Medicina Interna: enfermedades del sistema nervioso periférico.\n• Adams and Victor's Principles of Neurology: Guillain-Barré syndrome and acute inflammatory polyneuropathies."
  },
  {
    "id": "dr-q-eval3-31",
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un paciente de 62 años consulta porque desde hace varias semanas presenta dificultad para reconocer objetos que se le muestran. Al explorarle, la agudeza visual, los campos visuales y la capacidad para distinguir colores están conservados. Sin embargo, cuando se le muestra un objeto cotidiano, como unas llaves, es incapaz de identificar qué es, aunque puede describir correctamente su forma, tamaño y color. Además, cuando se le permite tocar las llaves, consigue reconocerlas inmediatamente. ¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Negligencia visuoespacial."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Agnosia visual."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Prosopagnosia."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Ceguera cortical."
      },
    ],
    "correctOptionId": "B",
    "explanation": "Justificación\nLa agnosia visual consiste en la incapacidad para reconocer o identificar estímulos visuales a pesar de que la función visual primaria está conservada.\nEl paciente ve el objeto, puede describir sus características físicas, pero no consigue atribuirle significado cuando lo percibe visualmente.\nLa clave del caso es:\nVe → describe → pero no reconoce.\nSin embargo, puede reconocer el objeto mediante otra modalidad sensorial, en este caso el tacto.\nLa lesión suele localizarse en las áreas de asociación visual occipitotemporales, especialmente del hemisferio dominante o de forma bilateral dependiendo del tipo de agnosia.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 AGNOSIAS: NO ES UN PROBLEMA DE VER\nUna agnosia es la incapacidad para reconocer un estímulo mediante una modalidad sensorial determinada conservando la función sensorial primaria.\nTrastorno | Déficit principal\nAgnosia visual | No reconoce objetos por la vista\nProsopagnosia | No reconoce caras\nAstereognosia | No reconoce objetos mediante el tacto\nAnosognosia | No reconoce su propio déficit\nSimultagnosia | Dificultad para integrar varios elementos visuales simultáneamente\n⚠️ Diferencia fundamental\nAgnosia visual ≠ ceguera cortical.\nEn la ceguera cortical existe una alteración de la percepción visual primaria por lesión de la corteza visual occipital.\nEn la agnosia:\nla información visual llega → pero no se consigue reconocer su significado.",
    "keyPoints": [],
    "theoryContent": "Justificación\nLa agnosia visual consiste en la incapacidad para reconocer o identificar estímulos visuales a pesar de que la función visual primaria está conservada.\nEl paciente ve el objeto, puede describir sus características físicas, pero no consigue atribuirle significado cuando lo percibe visualmente.\nLa clave del caso es:\nVe → describe → pero no reconoce.\nSin embargo, puede reconocer el objeto mediante otra modalidad sensorial, en este caso el tacto.\nLa lesión suele localizarse en las áreas de asociación visual occipitotemporales, especialmente del hemisferio dominante o de forma bilateral dependiendo del tipo de agnosia.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 AGNOSIAS: NO ES UN PROBLEMA DE VER\nUna agnosia es la incapacidad para reconocer un estímulo mediante una modalidad sensorial determinada conservando la función sensorial primaria.\nTrastorno | Déficit principal\nAgnosia visual | No reconoce objetos por la vista\nProsopagnosia | No reconoce caras\nAstereognosia | No reconoce objetos mediante el tacto\nAnosognosia | No reconoce su propio déficit\nSimultagnosia | Dificultad para integrar varios elementos visuales simultáneamente\n⚠️ Diferencia fundamental\nAgnosia visual ≠ ceguera cortical.\nEn la ceguera cortical existe una alteración de la percepción visual primaria por lesión de la corteza visual occipital.\nEn la agnosia:\nla información visual llega → pero no se consigue reconocer su significado.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nPiensa en el procesamiento visual como una cadena:\nOjo → corteza visual primaria → áreas de asociación → reconocimiento.\nSi falla la corteza visual primaria:\n👉 no ve adecuadamente.\nSi la corteza visual funciona pero falla el procesamiento asociativo:\n👉 ve, pero no reconoce.\nEse es exactamente el concepto que debes identificar en esta pregunta.\n🎯 Perla MIR\nSi el paciente:\npuede describir el objeto pero no sabe qué es → AGNOSIA VISUAL.\nSi además puede reconocerlo al tocarlo, eso refuerza todavía más el diagnóstico.\n\n📌 TRAMPA DE EXAMEN\nNo confundas agnosia visual con prosopagnosia.\nLa prosopagnosia es una forma específica de agnosia en la que el paciente:\nve una cara → pero no puede reconocer a quién pertenece.\nSi el problema afecta a objetos visuales en general, piensa en agnosia visual.\n\n📚 REFERENCIAS\n1. Adams and Victor's Principles of Neurology. Sección de trastornos de las funciones corticales superiores y agnosias.\n2. Harrison. Principios de Medicina Interna. Neurología: trastornos cognitivos y funciones corticales superiores."
  },
  {
    "id": "dr-q-eval3-32",
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "El neurotransmisor ganglionar del sistema nervioso simpático es la:",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Noradrenalina."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Adrenalina."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Acetilcolina."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Dopamina."
      },
    ],
    "correctOptionId": "C",
    "explanation": "Justificación\nEn el sistema nervioso autónomo, todas las neuronas preganglionares, tanto simpáticas como parasimpáticas, liberan acetilcolina (ACh) en el ganglio autónomo.\nLa ACh actúa sobre receptores nicotínicos neuronales (Nn) de la neurona posganglionar.\nPor tanto:\nNeurona preganglionar → ACh → receptor nicotínico → neurona posganglionar.\nEn el sistema simpático, la mayoría de las neuronas posganglionares liberan posteriormente noradrenalina sobre el órgano efector.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\nSistema nervioso autónomo\nLocalización | Neurotransmisor\nSimpático preganglionar | Acetilcolina\nSimpático posganglionar | Noradrenalina\nParasimpático preganglionar | Acetilcolina\nParasimpático posganglionar | Acetilcolina\n⚠️ Excepciones importantes\nHay dos excepciones que debes recordar:\n• Glándulas sudoríparas: la neurona simpática posganglionar libera ACh, no noradrenalina.\n• Médula suprarrenal: recibe fibras simpáticas preganglionares colinérgicas; la ACh estimula receptores nicotínicos de las células cromafines, que liberan principalmente adrenalina y también noradrenalina a la sangre.",
    "keyPoints": [],
    "theoryContent": "Justificación\nEn el sistema nervioso autónomo, todas las neuronas preganglionares, tanto simpáticas como parasimpáticas, liberan acetilcolina (ACh) en el ganglio autónomo.\nLa ACh actúa sobre receptores nicotínicos neuronales (Nn) de la neurona posganglionar.\nPor tanto:\nNeurona preganglionar → ACh → receptor nicotínico → neurona posganglionar.\nEn el sistema simpático, la mayoría de las neuronas posganglionares liberan posteriormente noradrenalina sobre el órgano efector.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\nSistema nervioso autónomo\nLocalización | Neurotransmisor\nSimpático preganglionar | Acetilcolina\nSimpático posganglionar | Noradrenalina\nParasimpático preganglionar | Acetilcolina\nParasimpático posganglionar | Acetilcolina\n⚠️ Excepciones importantes\nHay dos excepciones que debes recordar:\n• Glándulas sudoríparas: la neurona simpática posganglionar libera ACh, no noradrenalina.\n• Médula suprarrenal: recibe fibras simpáticas preganglionares colinérgicas; la ACh estimula receptores nicotínicos de las células cromafines, que liberan principalmente adrenalina y también noradrenalina a la sangre.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nLa palabra que tienes que detectar es “ganglionar”.\nEl ganglio autónomo es el lugar donde hace sinapsis la neurona preganglionar con la posganglionar.\nY en todos los ganglios autónomos:\nPreganglionar = ACETILCOLINA.\nDa igual que sea simpático o parasimpático.\nLo que cambia principalmente después del ganglio es el neurotransmisor de la neurona posganglionar:\nSimpático → generalmente noradrenalina.\nParasimpático → acetilcolina.\n\n🎯 PERLA MIR\n“En el ganglio: ACh siempre.”\nNo confundas:\nACh → ganglio\nNoradrenalina → mayoría de efectores simpáticos\n\n📚 REFERENCIAS\n1. Guyton y Hall. Tratado de Fisiología Médica. Sistema nervioso autónomo: estructura, función y neurotransmisores.\n2. Ganong. Fisiología médica. Organización del sistema nervioso autónomo y transmisión colinérgica/adrenérgica.\n3. Harrison. Principios de Medicina Interna. Fisiología y farmacología del sistema nervioso autónomo."
  },
  {
    "id": "dr-q-eval3-33",
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Vemos a un paciente en su casa porque, desde 24 horas antes, comenzó bruscamente con sensación de movimiento de los objetos y desequilibrio, que cede tras el reposo, se acompaña de sudoración ligera y náuseas. No ha perdido audición y la exploración neurológica es normal, excepto nistagmus horizontal. En los tímpanos y conductos auditivos no se encuentra patología. ¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Síndrome de Menière."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Espondiloartrosis cervical."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Vértigo posicional benigno."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Proceso expansivo intracraneal localizado en cerebelo."
      },
    ],
    "correctOptionId": "C",
    "explanation": "Justificación\nEl cuadro corresponde a un vértigo periférico, caracterizado por:\n• Sensación intensa de movimiento de los objetos.\n• Desequilibrio.\n• Náuseas y síntomas vegetativos.\n• Nistagmo horizontal.\n• Exploración neurológica por lo demás normal.\n• Ausencia de pérdida auditiva, lo que hace menos probable un síndrome de Menière.\nLa opción que mejor encaja entre las disponibles es el vértigo posicional benigno (VPPB).\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 DIFERENCIAR VÉRTIGO PERIFÉRICO Y CENTRAL\nCaracterística | Periférico | Central\nInicio | Frecuentemente brusco | Variable\nIntensidad del vértigo | Intensa | Variable\nNáuseas/vómitos | Frecuentes | Menos prominentes\nNistagmo | Habitualmente horizontal/rotatorio | Puede ser vertical\nSíntomas neurológicos | Ausentes | Pueden aparecer\nAudición | Puede estar afectada según etiología | Generalmente conservada\n🎯 Perla MIR\nEn un paciente con:\nvértigo intenso + nistagmo horizontal + náuseas + exploración neurológica normal\npiensa inicialmente en vértigo periférico.",
    "keyPoints": [],
    "theoryContent": "Justificación\nEl cuadro corresponde a un vértigo periférico, caracterizado por:\n• Sensación intensa de movimiento de los objetos.\n• Desequilibrio.\n• Náuseas y síntomas vegetativos.\n• Nistagmo horizontal.\n• Exploración neurológica por lo demás normal.\n• Ausencia de pérdida auditiva, lo que hace menos probable un síndrome de Menière.\nLa opción que mejor encaja entre las disponibles es el vértigo posicional benigno (VPPB).\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 DIFERENCIAR VÉRTIGO PERIFÉRICO Y CENTRAL\nCaracterística | Periférico | Central\nInicio | Frecuentemente brusco | Variable\nIntensidad del vértigo | Intensa | Variable\nNáuseas/vómitos | Frecuentes | Menos prominentes\nNistagmo | Habitualmente horizontal/rotatorio | Puede ser vertical\nSíntomas neurológicos | Ausentes | Pueden aparecer\nAudición | Puede estar afectada según etiología | Generalmente conservada\n🎯 Perla MIR\nEn un paciente con:\nvértigo intenso + nistagmo horizontal + náuseas + exploración neurológica normal\npiensa inicialmente en vértigo periférico.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nAquí tienes que localizar primero el problema:\n¿Vestibular periférico o central?\nEl paciente tiene un cuadro predominantemente vestibular:\nvértigo + desequilibrio + síntomas vegetativos + nistagmo.\nPero no presenta:\n❌ déficit motor\n❌ déficit sensitivo\n❌ alteración de pares craneales\n❌ ataxia neurológica persistente\n❌ otros signos focales\nPor tanto, el cuadro apunta hacia un origen periférico.\n¿Por qué no Menière?\nPorque en Menière esperamos la asociación clásica:\nVértigo episódico + hipoacusia neurosensorial fluctuante + acúfenos/plenitud ótica.\nAquí se especifica:\n“No ha perdido audición.”\nEse dato está puesto precisamente para alejarte de Menière.\n¿Por qué no lesión cerebelosa?\nUn proceso expansivo cerebeloso debería hacer sospechar signos cerebelosos y/o otros signos neurológicos, que no aparecen en el caso.\n\n⚠️ PERLA DE EXAMEN\nVPPB → vértigo desencadenado por cambios de posición de la cabeza y episodios breves.\nLa pista más importante del VPPB es la relación con los movimientos cefálicos y la positividad de la maniobra de Dix-Hallpike en el canal posterior.\nPor tanto, aunque la pregunta presenta un cuadro compatible con vértigo periférico, el dato de “cede tras el reposo” no es por sí solo suficiente para diagnosticar VPPB. Entre las opciones ofrecidas, sin embargo, C es la respuesta que propone el material.\n\n📚 REFERENCIAS\n1. Adams and Victor's Principles of Neurology. Disorders of the vestibular system.\n2. Harrison. Principios de Medicina Interna. Trastornos vestibulares y vértigo."
  },
  {
    "id": "dr-q-eval3-34",
    "examArea": "EPIDEMIOLOGÍA",
    "topic": "EPIDEMIOLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un grupo de investigadores quiere estudiar la asociación entre consumo de tabaco y cáncer de pulmón. Para ello, seleccionan 500 pacientes que ya han sido diagnosticados con cáncer de pulmón y 500 personas sin cáncer de pulmón, y posteriormente investigan mediante sus historias clínicas y entrevistas si habían estado expuestos al tabaco durante los años previos. ¿Qué tipo de estudio epidemiológico se está realizando?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Estudio de cohortes prospectivo."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Estudio de casos y controles."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Estudio transversal de prevalencia."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Ensayo clínico aleatorizado."
      },
    ],
    "correctOptionId": "B",
    "explanation": "Justificación\nLa clave está en cómo se seleccionan los participantes:\nPrimero se selecciona según la enfermedad → después se investiga la exposición.\nLos investigadores parten de:\n• Casos: pacientes con cáncer de pulmón.\n• Controles: personas sin cáncer de pulmón.\nY posteriormente buscan si existió exposición previa al tabaco.\nEso define un estudio de casos y controles.\nEl estudio compara retrospectivamente la frecuencia de una exposición entre casos y controles y permite calcular principalmente la odds ratio (OR).\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 LA CLAVE ES: ¿DE DÓNDE PARTO?\nEstudio | Se parte de... | Se busca... | Medida típica\nCasos y controles | Enfermedad | Exposición previa | OR\nCohortes | Exposición | Aparición de enfermedad | RR\nTransversal | Población en un momento | Exposición + enfermedad simultáneamente | Prevalencia\nEnsayo clínico | Intervención | Resultado | RR, RAR, NNT, etc.\n🎯 Regla de oro\n\nCASOS Y CONTROLES → ENFERMEDAD → EXPOSICIÓN → OR\n\nCOHORTES → EXPOSICIÓN → ENFERMEDAD → RR",
    "keyPoints": [],
    "theoryContent": "Justificación\nLa clave está en cómo se seleccionan los participantes:\nPrimero se selecciona según la enfermedad → después se investiga la exposición.\nLos investigadores parten de:\n• Casos: pacientes con cáncer de pulmón.\n• Controles: personas sin cáncer de pulmón.\nY posteriormente buscan si existió exposición previa al tabaco.\nEso define un estudio de casos y controles.\nEl estudio compara retrospectivamente la frecuencia de una exposición entre casos y controles y permite calcular principalmente la odds ratio (OR).\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 LA CLAVE ES: ¿DE DÓNDE PARTO?\nEstudio | Se parte de... | Se busca... | Medida típica\nCasos y controles | Enfermedad | Exposición previa | OR\nCohortes | Exposición | Aparición de enfermedad | RR\nTransversal | Población en un momento | Exposición + enfermedad simultáneamente | Prevalencia\nEnsayo clínico | Intervención | Resultado | RR, RAR, NNT, etc.\n🎯 Regla de oro\n\nCASOS Y CONTROLES → ENFERMEDAD → EXPOSICIÓN → OR\n\nCOHORTES → EXPOSICIÓN → ENFERMEDAD → RR\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nImagina que quieres saber si fumar causa cáncer de pulmón.\nSi haces CASOS Y CONTROLES:\nPrimero buscas:\n🚬 ¿Quién tiene cáncer?\n→ Casos: cáncer de pulmón\n→ Controles: no cáncer\nDespués preguntas:\n🚬 ¿Quién fumaba?\nEso es exactamente lo que ocurre en la pregunta.\nSi fuera una COHORTE:\nHarías lo contrario:\nPrimero seleccionas:\n🚬 Fumadores\n🚭 No fumadores\nY los sigues durante años para determinar:\n🫁 ¿Quién desarrolla cáncer de pulmón?\nPor eso:\nCasos y controles miran hacia atrás desde la enfermedad.\nCohortes siguen hacia adelante desde la exposición.\n\n⚠️ TRAMPA DE EXAMEN\nNo te dejes engañar porque el caso diga que utilizan historias clínicas o preguntan por exposiciones pasadas.\nEso no define por sí solo un estudio de casos y controles.\nLo que manda es:\n¿Cómo fueron seleccionados los pacientes?\nSi fueron seleccionados por tener o no tener la enfermedad → CASOS Y CONTROLES.\nSi fueron seleccionados por estar o no expuestos → COHORTE.\n\n💎 PERLAS DE EXAMEN\n• Casos y controles: especialmente útiles para enfermedades raras o con largo período de latencia.\n• Cohortes: permiten calcular directamente incidencia y riesgo relativo.\n• Transversal: fotografía de una población en un momento determinado → prevalencia.\n• Casos y controles: la medida clásica de asociación es la OR.\n• Cohortes: la medida clásica es el RR.\n\n🧠 FRASE PARA MEMORIZAR\n“Si empiezo por el enfermo, hago casos y controles; si empiezo por el expuesto, hago cohortes.”\n\n📚 REFERENCIAS\n1. Gordis L. Epidemiology. Elsevier.\n2. Rothman KJ, Greenland S, Lash TL. Modern Epidemiology. Wolters Kluwer.\n3. Fletcher RH, Fletcher SW. Clinical Epidemiology: The Essentials. Wolters Kluwer."
  },
  {
    "id": "dr-q-eval3-35",
    "examArea": "EPIDEMIOLOGÍA",
    "topic": "EPIDEMIOLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un grupo de investigadores quiere estudiar si la obesidad aumenta el riesgo de desarrollar diabetes mellitus tipo 2. Para ello, seleccionan inicialmente a 2.000 adultos sin diabetes, de los cuales 800 presentan obesidad y 1.200 no. Todos son seguidos durante 10 años para determinar cuántos desarrollan diabetes mellitus tipo 2. ¿Qué medida de asociación es la más adecuada para comparar el riesgo de desarrollar diabetes entre ambos grupos?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Odds ratio (OR)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Riesgo relativo (RR)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Razón de prevalencias."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Diferencia de prevalencias."
      },
    ],
    "correctOptionId": "B",
    "explanation": "JUSTIFICACIÓN\nEste es un estudio de cohortes porque los participantes son clasificados inicialmente según su exposición —obesidad— y posteriormente son seguidos en el tiempo para observar la aparición de la enfermedad —diabetes mellitus tipo 2—.\nEn una cohorte podemos calcular directamente la incidencia de la enfermedad en expuestos y no expuestos y comparar ambos riesgos mediante el:\nRiesgo relativo (RR).\nUn RR de 2, por ejemplo, indicaría que el grupo expuesto presenta aproximadamente el doble de riesgo de desarrollar la enfermedad respecto al grupo no expuesto.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 COHORTES = EXPOSICIÓN → ENFERMEDAD\nLa secuencia mental es:\nExpuestos / no expuestos → seguimiento → aparición de enfermedad → incidencia → RR\nEsto permite calcular:\n• Incidencia en expuestos\n• Incidencia en no expuestos\n• Riesgo relativo (RR)\n• Diferencia de riesgos (DR)\n• Fracción atribuible, entre otras medidas.",
    "keyPoints": [],
    "theoryContent": "JUSTIFICACIÓN\nEste es un estudio de cohortes porque los participantes son clasificados inicialmente según su exposición —obesidad— y posteriormente son seguidos en el tiempo para observar la aparición de la enfermedad —diabetes mellitus tipo 2—.\nEn una cohorte podemos calcular directamente la incidencia de la enfermedad en expuestos y no expuestos y comparar ambos riesgos mediante el:\nRiesgo relativo (RR).\nUn RR de 2, por ejemplo, indicaría que el grupo expuesto presenta aproximadamente el doble de riesgo de desarrollar la enfermedad respecto al grupo no expuesto.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 COHORTES = EXPOSICIÓN → ENFERMEDAD\nLa secuencia mental es:\nExpuestos / no expuestos → seguimiento → aparición de enfermedad → incidencia → RR\nEsto permite calcular:\n• Incidencia en expuestos\n• Incidencia en no expuestos\n• Riesgo relativo (RR)\n• Diferencia de riesgos (DR)\n• Fracción atribuible, entre otras medidas.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nMiremos primero cómo se construyó el estudio.\nLos investigadores no buscaron primero quién tenía diabetes.\nPrimero hicieron:\n👤 800 obesos\n👤 1.200 no obesos\nY después preguntaron:\n¿Quién desarrolla diabetes durante los siguientes 10 años?\nEso es una cohorte.\nPor eso podemos conocer directamente la incidencia:\nIncidencia en expuestos = casos nuevos de diabetes entre los obesos / total de obesos.\nIncidencia en no expuestos = casos nuevos de diabetes entre los no obesos / total de no obesos.\nY posteriormente:\nRR = incidencia en expuestos / incidencia en no expuestos.\n\n⚠️ TRAMPA DE EXAMEN\nLa OR se asocia clásicamente con los estudios de casos y controles.\nNo significa que una cohorte nunca pueda utilizar una OR, pero si te preguntan:\n“¿Cuál es la medida de asociación característica de una cohorte?”\nLa respuesta que debes marcar es:\n\nRR → RIESGO RELATIVO.\n\n🎯 REGLA DE ORO\nCOHORTES → puedo calcular incidencia → RR\nCASOS Y CONTROLES → no puedo calcular incidencia directamente → OR\nTRANSVERSAL → fotografía → prevalencia\n\n💎 PERLA DE EXAMEN\nOtra ventaja fundamental de las cohortes es que permiten estudiar múltiples desenlaces a partir de una misma exposición.\nPor ejemplo, siguiendo una cohorte de fumadores y no fumadores puedes estudiar posteriormente:\n• cáncer de pulmón,\n• EPOC,\n• enfermedad cardiovascular,\n• ictus, etc.\nEn cambio, en un estudio de casos y controles partes de un desenlace concreto y buscas retrospectivamente las exposiciones asociadas.\n\n📚 REFERENCIAS\n1. Gordis L. Epidemiology. Elsevier.\n2. Rothman KJ, Greenland S, Lash TL. Modern Epidemiology. Wolters Kluwer.\n3. Fletcher RH, Fletcher SW. Clinical Epidemiology: The Essentials. Wolters Kluwer.\n\n🧠 PERLA FINAL DEL DR Q\n“Si empiezo por la exposición y sigo al paciente para ver qué ocurre, estoy haciendo una cohorte; por eso puedo calcular RR.”"
  },
  {
    "id": "dr-q-eval3-36",
    "examArea": "EPIDEMIOLOGÍA",
    "topic": "EPIDEMIOLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un hospital quiere estudiar si la exposición laboral a un determinado producto químico aumenta el riesgo de desarrollar una enfermedad hepática. Los investigadores identifican en los registros laborales a un grupo de trabajadores que estuvieron expuestos al producto entre 2010 y 2015 y otro grupo de trabajadores no expuestos durante el mismo periodo. Posteriormente revisan sus historias clínicas para determinar cuántos desarrollaron enfermedad hepática hasta 2025. ¿Qué tipo de estudio epidemiológico se está realizando?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Estudio de casos y controles."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Estudio de cohortes retrospectivo."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Estudio transversal."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Estudio ecológico."
      },
    ],
    "correctOptionId": "B",
    "explanation": "JUSTIFICACIÓN\nLa clave está nuevamente en cómo se seleccionan los participantes.\nLos investigadores parten de:\n• Expuestos al producto químico.\n• No expuestos al producto químico.\nDespués determinan quién desarrolló la enfermedad.\nPor tanto, conceptualmente es una cohorte:\nExposición → enfermedad\nEs retrospectiva porque tanto la exposición como una parte del seguimiento ya ocurrieron cuando comienza el estudio y los investigadores reconstruyen la información utilizando registros laborales e historias clínicas.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 COHORTE PROSPECTIVA VS RETROSPECTIVA\nCohorte prospectiva:\nSelecciono hoy según exposición → sigo hacia el futuro → observo enfermedad.\nCohorte retrospectiva:\nSelecciono según una exposición ocurrida en el pasado → reviso registros → determino qué ocurrió posteriormente.\nEn ambas:\n\nEXPOSICIÓN → ENFERMEDAD\nY ambas permiten calcular incidencia y riesgo relativo.",
    "keyPoints": [],
    "theoryContent": "JUSTIFICACIÓN\nLa clave está nuevamente en cómo se seleccionan los participantes.\nLos investigadores parten de:\n• Expuestos al producto químico.\n• No expuestos al producto químico.\nDespués determinan quién desarrolló la enfermedad.\nPor tanto, conceptualmente es una cohorte:\nExposición → enfermedad\nEs retrospectiva porque tanto la exposición como una parte del seguimiento ya ocurrieron cuando comienza el estudio y los investigadores reconstruyen la información utilizando registros laborales e historias clínicas.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 COHORTE PROSPECTIVA VS RETROSPECTIVA\nCohorte prospectiva:\nSelecciono hoy según exposición → sigo hacia el futuro → observo enfermedad.\nCohorte retrospectiva:\nSelecciono según una exposición ocurrida en el pasado → reviso registros → determino qué ocurrió posteriormente.\nEn ambas:\n\nEXPOSICIÓN → ENFERMEDAD\nY ambas permiten calcular incidencia y riesgo relativo.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nNo te dejes engañar porque el investigador está utilizando historias clínicas.\nEso no convierte automáticamente al estudio en casos y controles.\nLa pregunta fundamental siempre es:\n¿Cómo seleccionaron a los pacientes?\nAquí fueron seleccionados según:\n☑ Exposición al producto químico\n☑ Ausencia de exposición\nY después se buscó:\n→ aparición de enfermedad hepática.\nPor tanto:\n\nCOHORTE.\nComo los acontecimientos ya habían ocurrido y se reconstruyen mediante registros:\n\nCOHORTE RETROSPECTIVA.\n\n⚠️ TRAMPA DE EXAMEN\nImagina ahora que el investigador hubiera hecho lo contrario:\nPrimero selecciona:\n🧑‍⚕️ Pacientes con enfermedad hepática\n🧑‍⚕️ Pacientes sin enfermedad hepática\nY después pregunta:\n“¿Quién estuvo expuesto al producto químico?”\nEso sería:\n\nCASOS Y CONTROLES → OR\nPero en nuestra pregunta:\nExpuestos → enfermedad\n\nCOHORTE → RR\n\n🎯 REGLA DE ORO\n\nCOHORTE:\n\nEXPOSICIÓN → ENFERMEDAD → RR\n\nCASOS Y CONTROLES:\n\nENFERMEDAD → EXPOSICIÓN → OR\nLa palabra retrospectivo no cambia la lógica fundamental del diseño.\n\n💎 PERLAS DE EXAMEN\nUna cohorte, ya sea prospectiva o retrospectiva, permite estudiar múltiples desenlaces asociados a una misma exposición.\nPor ejemplo, una cohorte de trabajadores expuestos podría evaluar posteriormente:\n• hepatopatía,\n• cáncer,\n• alteraciones neurológicas,\n• enfermedad respiratoria.\nEso es diferente de un estudio de casos y controles, que normalmente parte de un desenlace específico.\n\n📚 REFERENCIAS\n1. Gordis L. Epidemiology. Elsevier.\n2. Rothman KJ, Greenland S, Lash TL. Modern Epidemiology. Wolters Kluwer.\n3. Fletcher RH, Fletcher SW. Clinical Epidemiology: The Essentials. Wolters Kluwer.\n\n🧠 PERLA FINAL DEL DR Q\n“Que un estudio mire hacia atrás no lo convierte en casos y controles: si parte de la exposición y busca la enfermedad, sigue siendo una cohorte.”"
  },
  {
    "id": "dr-q-eval3-37",
    "examArea": "EPIDEMIOLOGÍA",
    "topic": "EPIDEMIOLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "En un ensayo clínico se compara un nuevo tratamiento para prevenir el ictus en pacientes de alto riesgo frente al tratamiento estándar. Durante el seguimiento, el 10% de los pacientes del grupo control presenta un ictus, mientras que en el grupo tratado lo presenta el 5%. ¿Cuál es el número necesario a tratar (NNT) para prevenir un ictus?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "5 pacientes."
      },
      {
        "id": "B",
        "label": "B",
        "text": "10 pacientes."
      },
      {
        "id": "C",
        "label": "C",
        "text": "20 pacientes."
      },
      {
        "id": "D",
        "label": "D",
        "text": "50 pacientes."
      },
    ],
    "correctOptionId": "C",
    "explanation": "JUSTIFICACIÓN\nPara calcular el NNT primero obtenemos la reducción absoluta del riesgo (RAR):\nRAR = riesgo en controles − riesgo en tratados\nEn este caso:\nRAR = 10% − 5% = 5% = 0,05\nDespués:\n\nNNT = 1 / RAR\nPor tanto:\nNNT = 1 / 0,05 = 20\nEsto significa que debemos tratar a 20 pacientes con el nuevo tratamiento, en lugar del tratamiento estándar, para prevenir un ictus adicional durante el periodo de seguimiento estudiado.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 NÚMERO NECESARIO A TRATAR\nEl NNT indica:\nNúmero de pacientes que necesito tratar para evitar un evento adicional.\nLa fórmula fundamental es:\nNNT = 1 / reducción absoluta del riesgo\nY:\nRAR = riesgo en controles − riesgo en tratados",
    "keyPoints": [],
    "theoryContent": "JUSTIFICACIÓN\nPara calcular el NNT primero obtenemos la reducción absoluta del riesgo (RAR):\nRAR = riesgo en controles − riesgo en tratados\nEn este caso:\nRAR = 10% − 5% = 5% = 0,05\nDespués:\n\nNNT = 1 / RAR\nPor tanto:\nNNT = 1 / 0,05 = 20\nEsto significa que debemos tratar a 20 pacientes con el nuevo tratamiento, en lugar del tratamiento estándar, para prevenir un ictus adicional durante el periodo de seguimiento estudiado.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 NÚMERO NECESARIO A TRATAR\nEl NNT indica:\nNúmero de pacientes que necesito tratar para evitar un evento adicional.\nLa fórmula fundamental es:\nNNT = 1 / reducción absoluta del riesgo\nY:\nRAR = riesgo en controles − riesgo en tratados\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nAquí el error típico es utilizar el riesgo relativo.\nTenemos:\n• Riesgo control = 10%\n• Riesgo tratamiento = 5%\nLa reducción relativa del riesgo sería:\n(10 − 5) / 10 = 50%\nPero ese 50% NO es el NNT.\nPara calcular NNT necesitamos la reducción absoluta:\n10% − 5% = 5%\nY finalmente:\n1 / 0,05 = 20\n\n⚠️ TRAMPA DE EXAMEN\nNunca hagas:\nNNT = 1 / reducción relativa del riesgo. ❌\nSiempre:\nNNT = 1 / reducción absoluta del riesgo. ✅\n\n🎯 REGLA DE ORO\n“NNT siempre nace de la RAR.”\nY recuerda que, cuando el resultado es decimal, el NNT se redondea hacia arriba al siguiente número entero.\n\n💎 PERLAS DE EXAMEN\nTambién debes conocer el concepto inverso:\nNNH — Número necesario para dañar\nSe utiliza para expresar cuántos pacientes deben recibir una intervención para producir un evento adverso adicional.\nLa lógica es similar, pero utilizando el incremento absoluto del riesgo.\nEjemplo rápido:\nSi un tratamiento aumenta un efecto adverso del 2% al 5%:\nAumento absoluto del riesgo = 3% = 0,03\nNNH = 1 / 0,03 ≈ 33,3 → 34\n\n📚 REFERENCIAS\n1. Gordis L. Epidemiology. Elsevier.\n2. Fletcher RH, Fletcher SW. Clinical Epidemiology: The Essentials. Wolters Kluwer.\n3. Rothman KJ, Greenland S, Lash TL. Modern Epidemiology. Wolters Kluwer.\n\n🧠 PERLA FINAL DEL DR Q\n\nRAR → NNT\n\nNNT = 1/RAR"
  },
  {
    "id": "dr-q-eval3-38",
    "examArea": "EPIDEMIOLOGÍA",
    "topic": "EPIDEMIOLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "En un ensayo clínico se evalúa un nuevo tratamiento para prevenir una complicación cardiovascular. En el grupo tratado, 20 de cada 100 pacientes presentan el evento durante el seguimiento, mientras que en el grupo control lo presentan 30 de cada 100. ¿Cuál es la reducción relativa del riesgo (RRR) producida por el tratamiento?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "10%"
      },
      {
        "id": "B",
        "label": "B",
        "text": "20%"
      },
      {
        "id": "C",
        "label": "C",
        "text": "33%"
      },
      {
        "id": "D",
        "label": "D",
        "text": "50%"
      },
    ],
    "correctOptionId": "C",
    "explanation": "JUSTIFICACIÓN\nPrimero calculamos la reducción absoluta del riesgo (RAR):\nRAR = Riesgo control − Riesgo tratado\nRAR = 30% − 20% = 10%\nPero la pregunta no pide RAR. Pide la reducción relativa del riesgo (RRR).\nLa RRR compara cuánto se reduce el riesgo respecto al riesgo inicial del grupo control:\nRRR = RAR / Riesgo control\nRRR = 10% / 30% = 0,33 ≈ 33%\nPor tanto, el tratamiento produce aproximadamente una:\n📉 Reducción relativa del riesgo del 33%.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 NO CONFUNDIR RAR, RR Y RRR\nMedida | Cálculo | Resultado\nRiesgo control | — | 30%\nRiesgo tratado | — | 20%\nRAR | 30 − 20 | 10%\nRR | 20 / 30 | 0,67\n\nRRR | 1 − RR | 33%\nNNT | 1 / 0,10 | 10",
    "keyPoints": [],
    "theoryContent": "JUSTIFICACIÓN\nPrimero calculamos la reducción absoluta del riesgo (RAR):\nRAR = Riesgo control − Riesgo tratado\nRAR = 30% − 20% = 10%\nPero la pregunta no pide RAR. Pide la reducción relativa del riesgo (RRR).\nLa RRR compara cuánto se reduce el riesgo respecto al riesgo inicial del grupo control:\nRRR = RAR / Riesgo control\nRRR = 10% / 30% = 0,33 ≈ 33%\nPor tanto, el tratamiento produce aproximadamente una:\n📉 Reducción relativa del riesgo del 33%.\n\n🧠 LO QUE DEBES SABER PARA EL EXAMEN\n\n🔥 NO CONFUNDIR RAR, RR Y RRR\nMedida | Cálculo | Resultado\nRiesgo control | — | 30%\nRiesgo tratado | — | 20%\nRAR | 30 − 20 | 10%\nRR | 20 / 30 | 0,67\n\nRRR | 1 − RR | 33%\nNNT | 1 / 0,10 | 10\n\n👨‍🏫 EXPLICACIÓN DEL PROFE: BY DR Q\nEste tipo de pregunta es una trampa clásica porque los números parecen muy sencillos.\nEl tratamiento disminuye el riesgo de:\n30% → 20%\nPor tanto, inmediatamente puedes decir:\nRAR = 10 puntos porcentuales.\nPero eso NO significa que haya reducido el riesgo un 10%.\nPara saber cuánto disminuyó relativamente, debemos comparar esos 10 puntos con el riesgo inicial:\n10 / 30 = 0,33\n→ 33% de reducción relativa.\n\n⚠️ TRAMPA DE EXAMEN\nSi te preguntan:\n¿Cuánto disminuyó el riesgo en términos absolutos?\n👉 10%\nSi te preguntan:\n¿Cuánto disminuyó proporcionalmente respecto al riesgo inicial?\n👉 33%\nSi te preguntan:\n¿Cuántos pacientes necesito tratar para evitar un evento?\n👉 NNT = 10\n\n🎯 REGLA DE ORO\nRAR = diferencia de riesgos.\nRR = riesgo tratado / riesgo control.\n\nRRR = 1 − RR.\n\nNNT = 1 / RAR.\n\n💎 PERLA DR Q\n30% → 20%\n🟥 RAR = 10 puntos porcentuales\n🟦 RRR = 33%\n🟩 NNT = 10\nTres conceptos distintos para los mismos datos.\n\n📚 REFERENCIAS\n1. Gordis L. Epidemiology. Elsevier.\n2. Fletcher RH, Fletcher SW. Clinical Epidemiology: The Essentials. Wolters Kluwer.\n3. Rothman KJ, Greenland S, Lash TL. Modern Epidemiology. Wolters Kluwer."
  },
  {
    "id": "dr-q-eval3-39",
    "examArea": "EPIDEMIOLOGÍA",
    "topic": "EPIDEMIOLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un hombre de 58 años consulta por tos crónica y pérdida de peso, por lo que se sospecha una enfermedad pulmonar determinada. Se realiza una prueba diagnóstica cuyo resultado se compara con el método de referencia. De 100 pacientes que realmente tienen la enfermedad, 90 presentan un resultado positivo en la prueba, mientras que de 100 pacientes que realmente no tienen la enfermedad, 95 presentan un resultado negativo. ¿Cuál de las siguientes afirmaciones describe correctamente las características de esta prueba diagnóstica?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "La sensibilidad es del 95% y representa la capacidad de identificar correctamente a los pacientes sanos."
      },
      {
        "id": "B",
        "label": "B",
        "text": "La especificidad es del 90% y representa la capacidad de identificar correctamente a los pacientes enfermos."
      },
      {
        "id": "C",
        "label": "C",
        "text": "La sensibilidad es del 90% y la especificidad es del 95%."
      },
      {
        "id": "D",
        "label": "D",
        "text": "La sensibilidad es del 10% y la especificidad es del 5%."
      },
    ],
    "correctOptionId": "C",
    "explanation": "LO QUE DEBES SABER PARA EL EXAMEN\nLa sensibilidad responde:\nDe los que SÍ tienen la enfermedad, ¿cuántos salen positivos?\nAquí:\n• 100 tienen la enfermedad.\n• 90 salen positivos.\n• Por tanto, sensibilidad = 90%.\nLa especificidad responde:\nDe los que NO tienen la enfermedad, ¿cuántos salen negativos?\nAquí:\n• 100 no tienen la enfermedad.\n• 95 salen negativos.\n• Por tanto, especificidad = 95%.",
    "keyPoints": [],
    "theoryContent": "LO QUE DEBES SABER PARA EL EXAMEN\nLa sensibilidad responde:\nDe los que SÍ tienen la enfermedad, ¿cuántos salen positivos?\nAquí:\n• 100 tienen la enfermedad.\n• 90 salen positivos.\n• Por tanto, sensibilidad = 90%.\nLa especificidad responde:\nDe los que NO tienen la enfermedad, ¿cuántos salen negativos?\nAquí:\n• 100 no tienen la enfermedad.\n• 95 salen negativos.\n• Por tanto, especificidad = 95%.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nLa forma más fácil de no confundirse es no memorizar las fórmulas aisladas, sino empezar siempre por la pregunta:\n1️⃣ Sensibilidad → empieza por los ENFERMOS\nSi parto de los pacientes enfermos, estoy preguntando:\n¿Cuántos detecta correctamente mi prueba?\nEso es sensibilidad.\nPor eso:\nEnfermedad → prueba positiva = sensibilidad.\nUna prueba con alta sensibilidad tiene pocos falsos negativos.\n2️⃣ Especificidad → empieza por los SANOS\nSi parto de los pacientes sanos, pregunto:\n¿Cuántos identifica correctamente como negativos?\nEso es especificidad.\nPor eso:\nSin enfermedad → prueba negativa = especificidad.\nUna prueba con alta especificidad tiene pocos falsos positivos.\n\n🔥 TRAMPA DE EXAMEN\nEl error clásico es intercambiar sensibilidad y especificidad.\n\nSENSIBILIDAD = ENFERMOS → POSITIVOS\n\nESPECIFICIDAD = SANOS → NEGATIVOS\nUna forma de recordarlo:\nSensible = encuentra enfermos.\nEspecífica = descarta sanos.\nY otra regla todavía más útil:\nAlta sensibilidad → pocos falsos negativos.\nAlta especificidad → pocos falsos positivos.\n¿Por qué las otras opciones son incorrectas?\nA. Incorrecta. El 95% corresponde a la especificidad, no a la sensibilidad. Además, identificar correctamente a los sanos corresponde a especificidad.\nB. Incorrecta. El 90% corresponde a la sensibilidad, no a la especificidad. Identificar correctamente a los enfermos es sensibilidad.\nC. Correcta. La sensibilidad es 90% y la especificidad 95%.\nD. Incorrecta. Confunde los porcentajes de pacientes correctamente identificados con sus complementarios.\n\n🎯 REGLA DE ORO\nSensibilidad → enfermo positivo.\nEspecificidad → sano negativo.\nY esto te prepara para el siguiente escalón: valor predictivo positivo y negativo, donde aparece una de las trampas epidemiológicas más importantes: los valores predictivos dependen de la prevalencia de la enfermedad.\n\n💎 PERLAS DE EXAMEN\n• Sensibilidad alta → ↓ falsos negativos.\n• Especificidad alta → ↓ falsos positivos.\n• Una prueba muy sensible es especialmente útil cuando un resultado negativo ayuda a descartar enfermedad.\n• Una prueba muy específica es especialmente útil cuando un resultado positivo ayuda a confirmar enfermedad.\n• Sensibilidad y especificidad son propiedades intrínsecas de la prueba frente al estándar de referencia.\n• VPP y VPN sí dependen de la prevalencia.\n\n📚 REFERENCIAS\n• Fletcher RH, Fletcher SW, Fletcher GS. Clinical Epidemiology: The Essentials. Wolters Kluwer.\n• Guyatt G, Rennie D, Meade MO, Cook DJ. Users' Guides to the Medical Literature. McGraw-Hill.\n• Porta M, ed. A Dictionary of Epidemiology. Oxford University Press."
  },
  {
    "id": "dr-q-eval3-40",
    "examArea": "NEUROLOGÍA / ACV ISQUÉMICO AGUDO",
    "topic": "NEUROLOGÍA / ACV ISQUÉMICO AGUDO",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un hombre de 67 años, previamente independiente, presenta de forma súbita desviación de la comisura bucal y debilidad de miembro superior e inferior derechos mientras desayunaba. Es llevado a urgencias 2 horas después del inicio de los síntomas. En la exploración presenta un déficit neurológico claramente incapacitante. La glucemia es de 110 mg/dL y la tomografía computarizada cerebral sin contraste no muestra hemorragia intracraneal ni cambios isquémicos extensos. ¿Cuál de las siguientes es la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar aspirina inmediatamente y observar la evolución clínica durante las siguientes 24 horas."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar trombólisis intravenosa con un fibrinolítico elegible y realizar posteriormente la evaluación para tratamiento endovascular si está indicado."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Esperar una resonancia cerebral con difusión antes de iniciar cualquier tratamiento de reperfusión."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Iniciar anticoagulación intravenosa inmediata para prevenir la progresión del trombo cerebral."
      },
    ],
    "correctOptionId": "B",
    "explanation": "LO QUE DEBES SABER PARA EL EXAMEN\nEste es el algoritmo mental que debes aplicar ante un ACV isquémico agudo:\nDéficit neurológico súbito → determinar hora de inicio/último momento bien → TC cerebral sin contraste → descartar hemorragia → valorar reperfusión.\nEn este paciente tenemos:\n• Inicio conocido: 2 horas.\n• Déficit: discapacitante.\n• TC: sin hemorragia.\n• Glucemia: normal.\n• No hay ningún dato en el caso que contraindique trombólisis.\nPor tanto, es candidato a trombólisis intravenosa.\nLa guía AHA/ASA 2026 recomienda, en pacientes adultos elegibles dentro de las primeras 4,5 horas, tenecteplasa 0,25 mg/kg (máximo 25 mg) o alteplasa 0,9 mg/kg.",
    "keyPoints": [],
    "theoryContent": "LO QUE DEBES SABER PARA EL EXAMEN\nEste es el algoritmo mental que debes aplicar ante un ACV isquémico agudo:\nDéficit neurológico súbito → determinar hora de inicio/último momento bien → TC cerebral sin contraste → descartar hemorragia → valorar reperfusión.\nEn este paciente tenemos:\n• Inicio conocido: 2 horas.\n• Déficit: discapacitante.\n• TC: sin hemorragia.\n• Glucemia: normal.\n• No hay ningún dato en el caso que contraindique trombólisis.\nPor tanto, es candidato a trombólisis intravenosa.\nLa guía AHA/ASA 2026 recomienda, en pacientes adultos elegibles dentro de las primeras 4,5 horas, tenecteplasa 0,25 mg/kg (máximo 25 mg) o alteplasa 0,9 mg/kg.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nLa clave es entender que en el ACV isquémico el tiempo es cerebro.\nCuando se ocluye una arteria cerebral aparecen:\nNúcleo del infarto → tejido irreversiblemente lesionado\nalrededor:\nPenumbra isquémica → tejido potencialmente recuperable.\nEl objetivo de la reperfusión es recuperar esa penumbra antes de que se convierta en infarto establecido.\nPor eso no queremos esperar estudios innecesarios cuando ya tenemos suficiente información para tratar.\n🔥 PASO 1: ¿Es realmente un ACV sospechoso?\nDéficit neurológico focal de instauración súbita.\nAquí:\nhemiparesia derecha + desviación facial → lesión cerebral focal aguda.\n🔥 PASO 2: ¿Hay hemorragia?\nLa primera prueba fundamental es la TC cerebral sin contraste.\nNo necesitamos que la TC demuestre el infarto para poder trombolizar.\nLo importante inicialmente es:\n¿Hay hemorragia intracraneal?\nEn este caso:\nNO.\n🔥 PASO 3: ¿Está dentro de ventana?\nEl paciente llega a las 2 horas.\nLa ventana convencional para trombólisis intravenosa es:\n≤ 4,5 horas.\nPor tanto:\n2 h < 4,5 h → candidato.\nLa recomendación actual enfatiza que el tratamiento debe iniciarse lo antes posible, evitando retrasos innecesarios por neuroimagen avanzada cuando el paciente ya es elegible.\n🔥 PASO 4: ¿El déficit es incapacitante?\nEsto es importantísimo.\nNo debes utilizar únicamente el número del NIHSS para decidir si un déficit es incapacitante.\nUn déficit con NIHSS bajo puede ser funcionalmente devastador; por ejemplo, una alteración motora que impida caminar puede considerarse discapacitante.\nAquí el caso dice explícitamente:\ndéficit claramente incapacitante.\nPor tanto, la reperfusión está indicada si cumple los demás criterios.\n\n¿POR QUÉ NO LAS OTRAS?\n❌ A. Aspirina inmediatamente\nIncorrecta.\nLa aspirina no sustituye la terapia de reperfusión en un paciente que es candidato a trombólisis.\nPrimero debemos valorar y administrar la terapia de reperfusión indicada.\nAdemás, la aspirina administrada precozmente durante la trombólisis aumenta el riesgo hemorrágico y no mejora los resultados funcionales.\n❌ C. Esperar resonancia\nEsta es una trampa clásica.\nNo necesitas esperar una RM para iniciar trombólisis en un paciente con:\n• déficit compatible,\n• ventana adecuada,\n• TC sin hemorragia,\n• y ausencia de contraindicaciones.\nLa neuroimagen avanzada puede ser útil en determinados escenarios, especialmente para ventanas extendidas, pero no debe retrasar innecesariamente la trombólisis en el paciente elegible dentro de las 4,5 horas.\n❌ D. Anticoagulación intravenosa\nIncorrecta.\nLa anticoagulación inmediata no es el tratamiento de reperfusión estándar del ACV isquémico agudo.\nEl tratamiento agudo se basa en:\ntrombólisis intravenosa y/o trombectomía mecánica en pacientes seleccionados.\n\n🔥 TRAMPA DE EXAMEN\nNo pienses:\n“ACV = aspirina.”\nPiensa primero:\n“¿Este paciente puede reperfundirse?”\nY sigue:\n¿Cuándo empezó? → ¿Hemorragia? → ¿Déficit incapacitante? → ¿Trombólisis? → ¿Hay oclusión de gran vaso? → ¿Trombectomía?\n\n🎯 REGLA DE ORO\nACV isquémico + déficit discapacitante + ≤4,5 h + TC sin hemorragia = piensa inmediatamente en trombólisis IV.\nY recuerda:\nNO necesitas esperar una RM si eso retrasa un tratamiento de reperfusión indicado.\n\n💎 PERLAS DE EXAMEN\n• La trombólisis IV debe administrarse lo más rápido posible cuando el paciente es elegible.\n• Actualmente, la guía AHA/ASA 2026 acepta alteplasa o tenecteplasa dentro de la ventana de 4,5 horas.\n• Tenecteplasa: 0,25 mg/kg, máximo 25 mg.\n• Alteplasa: 0,9 mg/kg.\n• La TC sin contraste sirve fundamentalmente para descartar hemorragia y valorar cambios isquémicos extensos.\n• En pacientes con oclusión de gran vaso, la trombectomía puede estar indicada además de la trombólisis.\n• La trombectomía tiene ventanas ampliadas en pacientes seleccionados; la guía 2026 mantiene indicaciones hasta 24 horas en determinados pacientes con oclusión de circulación anterior.\n\n📚 REFERENCIAS\n• Prabhakaran S, et al. 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke. 2026.\n• American Heart Association/American Stroke Association. 2026 Acute Ischemic Stroke Guideline."
  },
  {
    "id": "dr-q-eval3-41",
    "examArea": "NEFROLOGÍA / ENFERMEDAD RENAL CRÓNICA",
    "topic": "NEFROLOGÍA / ENFERMEDAD RENAL CRÓNICA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un hombre de 62 años con antecedentes de hipertensión arterial y diabetes mellitus tipo 2 acude a control médico. En dos evaluaciones separadas por cuatro meses presenta una tasa de filtración glomerular estimada de 48 mL/min/1,73 m² y una relación albúmina/creatinina urinaria de 420 mg/g. No presenta síntomas urémicos ni alteraciones electrolíticas relevantes. Según la clasificación KDIGO, ¿cuál es la categoría de filtrado glomerular y albuminuria de este paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "G2-A2: filtrado glomerular ligeramente disminuido y albuminuria moderadamente aumentada."
      },
      {
        "id": "B",
        "label": "B",
        "text": "G3a-A3: filtrado glomerular moderadamente disminuido y albuminuria severamente aumentada."
      },
      {
        "id": "C",
        "label": "C",
        "text": "G3b-A2: filtrado glomerular moderada a severamente disminuido y albuminuria moderadamente aumentada."
      },
      {
        "id": "D",
        "label": "D",
        "text": "G4-A3: filtrado glomerular gravemente disminuido y albuminuria severamente aumentada."
      },
    ],
    "correctOptionId": "B",
    "explanation": "LO QUE DEBES SABER PARA EL EXAMEN\nLa clasificación KDIGO de la enfermedad renal crónica utiliza dos parámetros fundamentales:\n• TFGe: estima la capacidad de filtración de los riñones.\n• Albuminuria: refleja daño renal y aporta información pronóstica independiente.\nLa combinación de ambos permite estimar el riesgo de progresión renal y de complicaciones cardiovasculares.\n1. Clasificación por filtrado glomerular\nCategoría | TFGe (mL/min/1,73 m²) | Interpretación\nG1 | ≥90 | Normal o alta\nG2 | 60–89 | Ligeramente disminuida\nG3a | 45–59 | Leve a moderadamente disminuida\nG3b | 30–44 | Moderada a gravemente disminuida\nG4 | 15–29 | Gravemente disminuida\nG5 | <15 | Fallo renal\nEn G5, la TFGe es menor de 15.\n2. Clasificación por albuminuria\nCategoría | Relación albúmina/creatinina urinaria\nA1 | Menos de 30 mg/g\nA2 | 30–300 mg/g\nA3 | Más de 300 mg/g",
    "keyPoints": [],
    "theoryContent": "LO QUE DEBES SABER PARA EL EXAMEN\nLa clasificación KDIGO de la enfermedad renal crónica utiliza dos parámetros fundamentales:\n• TFGe: estima la capacidad de filtración de los riñones.\n• Albuminuria: refleja daño renal y aporta información pronóstica independiente.\nLa combinación de ambos permite estimar el riesgo de progresión renal y de complicaciones cardiovasculares.\n1. Clasificación por filtrado glomerular\nCategoría | TFGe (mL/min/1,73 m²) | Interpretación\nG1 | ≥90 | Normal o alta\nG2 | 60–89 | Ligeramente disminuida\nG3a | 45–59 | Leve a moderadamente disminuida\nG3b | 30–44 | Moderada a gravemente disminuida\nG4 | 15–29 | Gravemente disminuida\nG5 | <15 | Fallo renal\nEn G5, la TFGe es menor de 15.\n2. Clasificación por albuminuria\nCategoría | Relación albúmina/creatinina urinaria\nA1 | Menos de 30 mg/g\nA2 | 30–300 mg/g\nA3 | Más de 300 mg/g\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\nPaso 1. Clasificar la TFGe.\nEl paciente tiene una TFGe de 48 mL/min/1,73 m².\nEste valor se encuentra entre 45 y 59, por lo que corresponde a G3a.\nPaso 2. Clasificar la albuminuria.\nLa relación albúmina/creatinina es de 420 mg/g.\nComo supera los 300 mg/g, corresponde a A3, es decir, albuminuria severamente aumentada.\nPaso 3. Confirmar la cronicidad.\nLas alteraciones persisten durante cuatro meses, superando el umbral de tres meses necesario para establecer enfermedad renal crónica, siempre que se descarten otras explicaciones clínicas pertinentes.\nDiagnóstico por categorías: ERC G3a-A3.\nLa diabetes y la hipertensión son causas frecuentes de ERC, pero la clasificación G3a-A3 describe la función renal y la albuminuria; por sí sola no demuestra la etiología.\n\n🔥 TRAMPA DE EXAMEN\nNo confundas la categoría de filtrado con la de albuminuria: G3a no significa lo mismo que A3.\n• La letra G corresponde al filtrado glomerular.\n• La letra A corresponde a la albuminuria.\nAdemás, una TFGe reducida en una sola medición no basta para demostrar cronicidad. KDIGO recomienda establecer persistencia durante al menos tres meses y no asumir ERC a partir de un único resultado anormal.\n\n🎯 REGLA DE ORO\nTFGe de 45–59 = G3a.\nAlbuminuria superior a 300 mg/g = A3.\nPor eso, este paciente tiene ERC G3a-A3.\n\n💎 PERLAS DE EXAMEN\n• La ERC se define por alteraciones de la estructura o función renal presentes durante al menos tres meses.\n• La albuminuria puede identificar daño renal incluso con una TFGe conservada.\n• Una categoría de albuminuria más alta implica mayor riesgo renal y cardiovascular.\n• La clasificación KDIGO combina causa, categoría G y categoría A.\n• La relación albúmina/creatinina en una muestra de orina, preferiblemente la primera de la mañana, es una prueba recomendada para evaluar albuminuria.\n\n📚 REFERENCIAS\n1. Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney International. 2024;105(Suppl 4):S117–S314.\n2. KDIGO. Executive Summary of the KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease."
  },
  {
    "id": "dr-q-eval3-42",
    "examArea": "NEFROLOGÍA / ACIDOSIS METABÓLICA CON ANION GAP ELEVADO",
    "topic": "NEFROLOGÍA / ACIDOSIS METABÓLICA CON ANION GAP ELEVADO",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un hombre de 24 años con diabetes mellitus tipo 1 consulta por dolor abdominal, vómitos y respiración profunda y rápida. La glucemia es de 420 mg/dL, el sodio de 138 mEq/L, el cloro de 100 mEq/L, el bicarbonato de 10 mEq/L y el pH arterial de 7,18. Se detectan concentraciones elevadas de β-hidroxibutirato. ¿Cuál es el diagnóstico ácido-base más probable, según los datos proporcionados?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Acidosis metabólica con anion gap normal, secundaria a pérdida gastrointestinal de bicarbonato."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Acidosis respiratoria primaria con compensación metabólica."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Acidosis metabólica con anion gap elevado, secundaria a acumulación de cetoácidos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Alcalosis metabólica con compensación respiratoria."
      },
    ],
    "correctOptionId": "C",
    "explanation": "LO QUE DEBES SABER PARA EL EXAMEN\n1. Calcula el anion gap\nSustituimos los valores:\nAG = 138 − (100 + 10) = 28 mEq/L\nUn anion gap de 28 mEq/L está elevado según los rangos habituales.\n2. Interpreta el pH y el bicarbonato\n• pH = 7,18 → acidemia.\n• HCO₃⁻ = 10 mEq/L → disminuido.\n• Anion gap = 28 mEq/L → elevado.\nEl trastorno primario es una acidosis metabólica con anion gap elevado.\nEn este contexto, la hiperglucemia y la elevación del β-hidroxibutirato apuntan a una cetoacidosis diabética.",
    "keyPoints": [],
    "theoryContent": "LO QUE DEBES SABER PARA EL EXAMEN\n1. Calcula el anion gap\nSustituimos los valores:\nAG = 138 − (100 + 10) = 28 mEq/L\nUn anion gap de 28 mEq/L está elevado según los rangos habituales.\n2. Interpreta el pH y el bicarbonato\n• pH = 7,18 → acidemia.\n• HCO₃⁻ = 10 mEq/L → disminuido.\n• Anion gap = 28 mEq/L → elevado.\nEl trastorno primario es una acidosis metabólica con anion gap elevado.\nEn este contexto, la hiperglucemia y la elevación del β-hidroxibutirato apuntan a una cetoacidosis diabética.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n¿Por qué aumenta el anion gap?\nEn la cetoacidosis diabética, la deficiencia de insulina y el aumento de hormonas contrarreguladoras favorecen la lipólisis. Los ácidos grasos llegan al hígado y se convierten en cuerpos cetónicos, especialmente β-hidroxibutirato y acetoacetato.\nEstos ácidos liberan protones, que son amortiguados por el bicarbonato. Al disminuir el bicarbonato, sus aniones acompañantes quedan sin estar representados entre los electrolitos que usamos en el cálculo habitual: por eso aumenta el anion gap.\nLa respiración profunda y rápida —respiración de Kussmaul— es una respuesta compensatoria para reducir la PaCO₂ y elevar parcialmente el pH.\n¿Cómo comprobarías la compensación respiratoria?\nUtiliza la fórmula de Winter:\nPaCO₂ esperada = 1,5 × (HCO₃⁻) + 8 ± 2\nEn este paciente:\nPaCO₂ = 1,5 × (10) + 8 = 23 ± 2 mmHg\nLa PaCO₂ medida no se proporciona, así que no podemos confirmar si la compensación es apropiada ni descartar un trastorno respiratorio mixto. Esta es una distinción importante: el caso sí permite identificar la acidosis metabólica con anion gap elevado, pero no evaluar completamente la compensación sin ese dato.\n\n🔥 TRAMPA DE EXAMEN\nNo todas las acidosis metabólicas tienen anion gap elevado.\n• Anion gap elevado: acumulación de ácidos no medidos, como cetoácidos, lactato o ciertos tóxicos.\n• Anion gap normal: pérdida de bicarbonato o alteración de la excreción renal de ácido, con frecuencia acompañada de hipercloremia.\n¿Por qué no las otras opciones?\n• A. Incorrecta: el anion gap calculado es 28, no normal.\n• B. Incorrecta: el bicarbonato bajo y el pH ácido indican un trastorno metabólico primario, no una acidosis respiratoria primaria.\n• C. Correcta: el anion gap elevado, la acidemia, el bicarbonato bajo y la cetonemia concuerdan con cetoacidosis diabética.\n• D. Incorrecta: hay acidemia, no alcalemia, y el bicarbonato está disminuido.\n\n🎯 REGLA DE ORO\nAnte una gasometría, sigue siempre este orden:\n1. pH: ¿acidemia o alcalemia?\n2. HCO₃⁻ y PaCO₂: ¿cuál explica el cambio primario?\n3. Anion gap: ¿está elevado?\n4. Compensación: ¿es la esperada?\n5. Causa clínica: ¿lactato, cetonas, insuficiencia renal o tóxicos?\n\n💎 PERLAS DE EXAMEN\n• Un anion gap elevado orienta a acumulación de aniones no medidos.\n• La cetoacidosis diabética suele producir acidosis metabólica con anion gap elevado.\n• La respiración de Kussmaul es una compensación respiratoria, no la causa primaria de la acidosis.\n• En la cetoacidosis, la medición de β-hidroxibutirato ayuda a confirmar la cetosis.\n• El anion gap puede ser útil para el razonamiento diagnóstico, pero las recomendaciones actuales priorizan la cetonemia y la resolución de la acidosis para evaluar la resolución de la cetoacidosis diabética.\n\n📚 REFERENCIAS\n1. Umpierrez GE, et al. Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care. 2024.\n2. American Diabetes Association Professional Practice Committee. 16. Diabetes Care in the Hospital: Standards of Care in Diabetes—2026. Diabetes Care. 2026.\n3. Adrogué HJ, Madias NE. Secondary Responses to Altered Acid-Base Status: The Rules of Engagement. New England Journal of Medicine. Referencia clásica para la interpretación de trastornos ácido-base."
  },
  {
    "id": "dr-q-eval3-43",
    "examArea": "NEUROLOGÍA / MIASTENIA GRAVIS",
    "topic": "NEUROLOGÍA / MIASTENIA GRAVIS",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Una mujer de 29 años consulta por diplopía y ptosis palpebral bilateral que empeoran al final del día y mejoran después de descansar. Refiere que le cuesta mantener los brazos elevados mientras se peina, pero recupera parcialmente la fuerza tras unos minutos de reposo. La exploración muestra debilidad ocular y proximal fluctuante, sensibilidad conservada y reflejos osteotendinosos normales. ¿Cuál de los siguientes mecanismos fisiopatológicos explica mejor este cuadro?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Anticuerpos contra los canales de calcio presinápticos dependientes de voltaje, con disminución de la liberación de acetilcolina."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Anticuerpos contra los receptores postsinápticos de acetilcolina, con reducción de la transmisión neuromuscular."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Desmielinización segmentaria de nervios periféricos, con enlentecimiento de la conducción motora y sensitiva."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Degeneración de las motoneuronas del asta anterior, con denervación progresiva y fasciculaciones."
      },
    ],
    "correctOptionId": "B",
    "explanation": "LO QUE DEBES SABER PARA EL EXAMEN\nLa miastenia gravis es una enfermedad autoinmunitaria de la unión neuromuscular. En la mayoría de los casos, los anticuerpos se dirigen contra los receptores postsinápticos de acetilcolina; en otros pacientes pueden dirigirse contra proteínas como MuSK o LRP4.\nLa consecuencia es una disminución de la eficacia de la transmisión neuromuscular, que produce debilidad fluctuante y fatigabilidad.",
    "keyPoints": [],
    "theoryContent": "LO QUE DEBES SABER PARA EL EXAMEN\nLa miastenia gravis es una enfermedad autoinmunitaria de la unión neuromuscular. En la mayoría de los casos, los anticuerpos se dirigen contra los receptores postsinápticos de acetilcolina; en otros pacientes pueden dirigirse contra proteínas como MuSK o LRP4.\nLa consecuencia es una disminución de la eficacia de la transmisión neuromuscular, que produce debilidad fluctuante y fatigabilidad.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n1. Reconoce el patrón clínico\nLas pistas fundamentales son:\n• Ptosis y diplopía: compromiso frecuente de la musculatura ocular.\n• Empeoramiento con el uso: la debilidad aumenta con la actividad repetida.\n• Mejoría con el reposo: característica de la fatigabilidad miasténica.\n• Sensibilidad conservada: la enfermedad afecta la transmisión motora en la unión neuromuscular, no las vías sensitivas.\n2. Localiza la lesión\nLa alteración se encuentra en la membrana postsináptica de la unión neuromuscular.\nEn condiciones normales, la acetilcolina liberada por la terminal presináptica se une a sus receptores musculares y genera un potencial de placa terminal. En la miastenia gravis, la reducción funcional de los receptores disminuye el margen de seguridad de la transmisión neuromuscular y facilita el fallo durante la actividad repetida.\n3. Diferénciala de Lambert-Eaton\nCaracterística | Miastenia gravis | Lambert-Eaton\nLocalización | Postsináptica | Presináptica\nAnticuerpo típico | Receptor de acetilcolina | Canal de calcio tipo P/Q\nDebilidad | Ocular y variable; también proximal | Predominio proximal\nReflejos | Habitualmente conservados | Frecuentemente disminuidos\nCon ejercicio breve | Puede empeorar la fatigabilidad | Puede mejorar transitoriamente la fuerza\nAsociación clásica | Enfermedad del timo | Cáncer microcítico de pulmón\n\n🔥 TRAMPA DE EXAMEN\nNo confundas fatigabilidad con una pérdida fija de fuerza.\nLa combinación de ptosis, diplopía y debilidad fluctuante que empeora con la actividad apunta a miastenia gravis. Si predominan debilidad proximal, hiporreflexia y facilitación tras el ejercicio, considera Lambert-Eaton.\n¿Por qué no las otras opciones?\n• A. Incorrecta: corresponde al mecanismo presináptico del síndrome de Lambert-Eaton.\n• B. Correcta: la afectación de los receptores postsinápticos de acetilcolina explica la debilidad fatigable.\n• C. Incorrecta: la desmielinización periférica produce alteraciones de conducción y puede asociar manifestaciones sensitivas; no explica el patrón ocular fluctuante típico.\n• D. Incorrecta: la enfermedad de motoneurona suele producir signos motores progresivos, atrofia y fasciculaciones, no fatigabilidad ocular reversible con el reposo.\n\n🎯 REGLA DE ORO\nMiastenia gravis = postsináptica + ptosis/diplopía + debilidad fatigable.\nLambert-Eaton = presináptica + hiporreflexia + facilitación con el ejercicio.\n\n💎 PERLAS DE EXAMEN\n• La prueba inicial suele incluir anticuerpos contra el receptor de acetilcolina; si son negativos y la sospecha persiste, pueden evaluarse otros anticuerpos y estudios electrofisiológicos.\n• Debe evaluarse el timo mediante imagen cuando se confirma o se sospecha firmemente miastenia gravis.\n• La aparición de disfagia, disartria, debilidad respiratoria o dificultad para manejar secreciones exige valoración urgente por posible crisis miasténica.\n• La sensibilidad suele estar conservada porque el problema está en la transmisión neuromuscular, no en los nervios sensitivos.\n\n📚 REFERENCIAS\n1. Gilhus NE. Myasthenia Gravis. New England Journal of Medicine. 2016;375:2570–2581.\n2. Dresser L, et al. Myasthenia Gravis: Epidemiology, Pathophysiology and Clinical Manifestations. Journal of Clinical Medicine. 2021;10(11):2235.\n3. Merck Manual Professional Edition. Myasthenia Gravis."
  },
  {
    "id": "dr-q-eval3-44",
    "examArea": "NEFROLOGÍA / ACIDOSIS METABÓLICA POR INTOXICACIÓN POR METANOL",
    "topic": "NEFROLOGÍA / ACIDOSIS METABÓLICA POR INTOXICACIÓN POR METANOL",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un hombre de 43 años es llevado a urgencias por visión borrosa, cefalea y vómitos, que comenzaron varias horas después de ingerir una bebida alcohólica de procedencia desconocida. Presenta frecuencia respiratoria de 30 rpm y Glasgow de 14/15. Los laboratorios muestran Na⁺ 140 mEq/L, Cl⁻ 102 mEq/L, HCO₃⁻ 8 mEq/L, albúmina 4 g/dL, pH arterial 7,12 y PaCO₂ 20 mmHg. La osmolaridad sérica medida es de 330 mOsm/kg, mientras que la calculada es de 290 mOsm/kg. La concentración de metanol aún no está disponible. ¿Cuál es la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Esperar la concentración sérica de metanol antes de iniciar tratamiento específico y solicitar una tomografía cerebral por la alteración visual."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar fomepizol, corregir la acidosis según la situación clínica, administrar folato o ácido folínico y solicitar hemodiálisis urgente."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administrar bicarbonato como tratamiento único, ya que la brecha osmolar elevada indica que el metanol todavía no se ha metabolizado."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar etanol por vía oral y observar la evolución de la visión, reservando la hemodiálisis para cuando se confirme insuficiencia renal."
      },
    ],
    "correctOptionId": "B",
    "explanation": "LO QUE DEBES SABER PARA EL EXAMEN\n1. Calcula el anion gap\nAG = Na⁺ − (Cl⁻ + HCO₃⁻)\nAG = 140 − (102 + 8) = 30 mEq/L\nEl paciente presenta acidosis metabólica con anion gap elevado, junto con síntomas visuales y una historia compatible con exposición a un alcohol tóxico.\n2. Calcula la brecha osmolar\nBrecha osmolar = 330 − 290 = 40 mOsm/kg\nEstá elevada. En el contexto clínico, esto apoya la presencia de un osmole no medido, como el metanol.\n3. Evalúa la compensación respiratoria\nAplicamos la fórmula de Winter:\nPaCO₂ = 1,5 × (8) + 8 ± 2\nPaCO₂ = 20 ± 2 mmHg\nLa PaCO₂ medida es de 20 mmHg, compatible con compensación respiratoria apropiada.\nConclusión: acidosis metabólica con anion gap elevado, brecha osmolar elevada y manifestaciones visuales compatibles con intoxicación por metanol.",
    "keyPoints": [],
    "theoryContent": "LO QUE DEBES SABER PARA EL EXAMEN\n1. Calcula el anion gap\nAG = Na⁺ − (Cl⁻ + HCO₃⁻)\nAG = 140 − (102 + 8) = 30 mEq/L\nEl paciente presenta acidosis metabólica con anion gap elevado, junto con síntomas visuales y una historia compatible con exposición a un alcohol tóxico.\n2. Calcula la brecha osmolar\nBrecha osmolar = 330 − 290 = 40 mOsm/kg\nEstá elevada. En el contexto clínico, esto apoya la presencia de un osmole no medido, como el metanol.\n3. Evalúa la compensación respiratoria\nAplicamos la fórmula de Winter:\nPaCO₂ = 1,5 × (8) + 8 ± 2\nPaCO₂ = 20 ± 2 mmHg\nLa PaCO₂ medida es de 20 mmHg, compatible con compensación respiratoria apropiada.\nConclusión: acidosis metabólica con anion gap elevado, brecha osmolar elevada y manifestaciones visuales compatibles con intoxicación por metanol.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n¿Por qué el metanol produce acidosis?\nEl metanol se metaboliza principalmente mediante la alcohol deshidrogenasa:\nMetanol → formaldehído → ácido fórmico/formiato.\nEl formiato es especialmente importante porque contribuye a la acidosis y a la toxicidad ocular, incluida la lesión del nervio óptico. La presentación puede incluir un período de latencia entre la ingestión y la aparición de alteraciones visuales y acidosis.\n¿Por qué hay dos brechas elevadas?\n• Anion gap elevado: por acumulación de aniones no medidos, especialmente formiato.\n• Brecha osmolar elevada: por presencia de partículas osmóticamente activas no incluidas en el cálculo de la osmolaridad, como el metanol.\nNo son equivalentes y ninguna de las dos identifica por sí sola el tóxico. Además, pueden variar con el tiempo: al metabolizarse el metanol, puede disminuir la brecha osmolar mientras aumenta el anion gap.\n¿Por qué debe iniciarse tratamiento sin esperar la concentración?\nLa combinación de exposición sospechada, alteración visual y acidosis grave exige actuación inmediata. No se debe retrasar el antídoto mientras se espera la confirmación analítica cuando la sospecha clínica es alta.\n• Fomepizol: inhibe la alcohol deshidrogenasa y evita la formación adicional de metabolitos tóxicos.\n• Bicarbonato intravenoso: puede utilizarse para corregir la acidemia significativa, con monitorización estrecha.\n• Ácido folínico o folato: favorece el metabolismo del formiato.\n• Hemodiálisis: elimina metanol y formiato, y contribuye a corregir la acidosis.\nLa hemodiálisis está especialmente indicada aquí porque el paciente presenta alteraciones visuales nuevas y anion gap de 30 mEq/L. EXTRIP recomienda tratamiento extracorpóreo ante alteraciones visuales atribuibles al metanol o anion gap superior a 24 mmol/L, entre otros criterios.\n\n🔥 TRAMPA DE EXAMEN\nUna brecha osmolar elevada no significa que el metanol esté sin metabolizar.\nUn paciente puede tener simultáneamente brecha osmolar y anion gap elevados. En fases más tardías, el metanol original puede haber disminuido mientras sus metabolitos tóxicos producen una acidosis cada vez más importante.\n¿Por qué no las otras opciones?\n• A. Incorrecta: retrasar el antídoto ante sospecha clínica importante puede permitir que continúe la producción de metabolitos tóxicos.\n• B. Correcta: aborda el bloqueo metabólico, la acidemia, el metabolismo del formiato y la eliminación extracorpórea.\n• C. Incorrecta: el bicarbonato no bloquea la formación de metabolitos ni elimina eficazmente el metanol; la brecha osmolar no permite asegurar que todavía no haya metabolismo.\n• D. Incorrecta: el etanol puede utilizarse como alternativa al fomepizol en determinados entornos, pero requiere control estrecho. No se debe administrar por vía oral ni retrasar la hemodiálisis indicada hasta que aparezca insuficiencia renal.\n\n🎯 REGLA DE ORO\nAnte acidosis con anion gap elevado + brecha osmolar elevada + alteraciones visuales, sospecha intoxicación por metanol y actúa urgentemente.\nNo esperes la concentración sérica si la sospecha clínica es alta.\n\n💎 PERLAS DE EXAMEN\n• El metabolito responsable de gran parte de la toxicidad ocular y de la acidosis es el formiato.\n• El antídoto de elección suele ser fomepizol cuando está disponible.\n• La hemodiálisis intermitente es la modalidad extracorpórea preferida por EXTRIP.\n• Un anion gap superior a 24 mmol/L es uno de los criterios de EXTRIP para recomendar tratamiento extracorpóreo en intoxicación por metanol.\n• La ausencia de una brecha osmolar elevada no excluye completamente una intoxicación por alcohol tóxico.\n• Esta es una urgencia médica real: se requiere manejo hospitalario inmediato, toxicología y nefrología.\n\n📚 REFERENCIAS\n1. American Academy of Clinical Toxicology. Practice Guidelines on the Treatment of Methanol Poisoning.\n2. EXTRIP Workgroup. Methanol: Recommendations for Extracorporeal Treatment.\n3. CDC/NIOSH. Methanol: Systemic Agent."
  },
  {
    "id": "dr-q-eval3-45",
    "examArea": "HEMATOLOGÍA / ANEMIA APLÁSICA",
    "topic": "HEMATOLOGÍA / ANEMIA APLÁSICA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un hombre de 26 años consulta por fatiga progresiva, infecciones respiratorias recurrentes y aparición espontánea de equimosis durante los últimos dos meses. El hemograma muestra hemoglobina de 7,8 g/dL, leucocitos de 1.400/µL, neutrófilos absolutos de 350/µL y plaquetas de 18.000/µL. El recuento de reticulocitos está marcadamente disminuido. En el examen físico no se palpan adenopatías ni hepatoesplenomegalia. La biopsia de médula ósea muestra marcada hipocelularidad, con sustitución del tejido hematopoyético por grasa, sin infiltración neoplásica. ¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Leucemia mieloide aguda con sustitución de la médula ósea por blastos."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Anemia aplásica adquirida con falla global de la hematopoyesis."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Anemia hemolítica autoinmune con destrucción periférica de eritrocitos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Púrpura trombocitopénica inmune con trombocitopenia aislada."
      },
    ],
    "correctOptionId": "B",
    "explanation": "LO QUE DEBES SABER PARA EL EXAMEN\nLa anemia aplásica es un trastorno de falla medular, caracterizado por pancitopenia periférica y médula ósea hipocelular, generalmente sin infiltración maligna ni fibrosis significativa. En la forma adquirida, el mecanismo suele involucrar una lesión inmunomediada de las células madre hematopoyéticas.",
    "keyPoints": [],
    "theoryContent": "LO QUE DEBES SABER PARA EL EXAMEN\nLa anemia aplásica es un trastorno de falla medular, caracterizado por pancitopenia periférica y médula ósea hipocelular, generalmente sin infiltración maligna ni fibrosis significativa. En la forma adquirida, el mecanismo suele involucrar una lesión inmunomediada de las células madre hematopoyéticas.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n1. Identifica las tres líneas celulares afectadas.\n• Hemoglobina baja → anemia.\n• Neutrófilos de 350/µL → neutropenia grave.\n• Plaquetas de 18.000/µL → trombocitopenia grave.\nLa afectación de las tres líneas constituye pancitopenia.\n2. Interpreta los reticulocitos.\nEl recuento marcadamente disminuido indica que la médula no está respondiendo adecuadamente a la anemia. Esto favorece un defecto de producción frente a una destrucción periférica aislada.\n3. Interpreta la biopsia medular.\nLa combinación de hipocelularidad marcada y sustitución grasa del tejido hematopoyético es característica de la anemia aplásica.\n4. Integra los hallazgos.\nPancitopenia + reticulocitopenia + médula hipocelular sin infiltración neoplásica = anemia aplásica.\n\n🔥 TRAMPA DE EXAMEN\nNo toda pancitopenia significa anemia aplásica.\nLa clave está en la médula ósea:\n• Anemia aplásica: médula hipocelular, reemplazada por grasa.\n• Leucemia aguda: proliferación de blastos; la celularidad suele estar aumentada, aunque existen excepciones.\n• Síndrome mielodisplásico: hematopoyesis ineficaz y displasia, con médula habitualmente normocelular o hipercelular, aunque puede ser hipocelular.\n• Hiperesplenismo: secuestro periférico de células, con un contexto clínico compatible y posible esplenomegalia.\n¿Por qué no las otras opciones?\nA. Leucemia mieloide aguda. Incorrecta: no se describen blastos ni infiltración neoplásica; la biopsia muestra hipocelularidad con sustitución grasa.\nB. Anemia aplásica adquirida. Correcta: explica la pancitopenia, la reticulocitopenia y la hipocelularidad medular.\nC. Anemia hemolítica autoinmune. Incorrecta: esperaría datos de hemólisis y, por lo general, respuesta reticulocitaria aumentada si la médula conserva su capacidad funcional.\nD. Púrpura trombocitopénica inmune. Incorrecta: produce trombocitopenia aislada en el cuadro típico, no pancitopenia con médula hipocelular.\n\n🎯 REGLA DE ORO\nPancitopenia + reticulocitos bajos + médula ósea hipocelular con sustitución grasa = anemia aplásica hasta demostrar lo contrario.\n\n💎 PERLAS DE EXAMEN\n• La anemia aplásica afecta la producción de eritrocitos, leucocitos y plaquetas.\n• La neutropenia grave aumenta el riesgo de infecciones potencialmente mortales.\n• La trombocitopenia grave aumenta el riesgo de hemorragia.\n• La forma adquirida suele estar mediada por mecanismos inmunitarios contra las células madre hematopoyéticas.\n• El estudio inicial debe excluir causas reversibles y otras enfermedades medulares; puede incluir aspirado y biopsia de médula ósea, citometría de flujo y estudios citogenéticos o moleculares según el contexto.\n• En pacientes seleccionados con anemia aplásica grave, el tratamiento puede incluir trasplante alogénico de progenitores hematopoyéticos o inmunosupresión con globulina antitimocítica y ciclosporina, frecuentemente combinada con eltrombopag, según las características del paciente.\n\n📚 REFERENCIAS\n1. Young NS. Aplastic Anemia. New England Journal of Medicine. Revisión sobre fisiopatología, diagnóstico y tratamiento de la anemia aplásica.\n2. Killick SB, et al. Guidelines for the Diagnosis and Management of Adult Aplastic Anaemia. British Journal of Haematology.\n3. National Cancer Institute. Aplastic Anemia Treatment. Información sobre opciones terapéuticas y trasplante."
  },
  {
    "id": "dr-q-eval3-46",
    "examArea": "HEMATOLOGÍA / ANEMIA FERROPÉNICA",
    "topic": "HEMATOLOGÍA / ANEMIA FERROPÉNICA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Una mujer de 34 años consulta por fatiga, disminución de la tolerancia al ejercicio y deseo de ingerir hielo. Refiere menstruaciones abundantes desde hace un año. El hemograma muestra hemoglobina de 9,2 g/dL, volumen corpuscular medio de 70 fL y amplitud de distribución eritrocitaria aumentada. El perfil férrico evidencia hierro sérico disminuido, ferritina de 7 ng/mL, capacidad total de fijación del hierro (TIBC) aumentada y saturación de transferrina disminuida. ¿Cuál de las siguientes alteraciones explica mejor este perfil?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Aumento de los depósitos de hierro con secuestro del hierro circulante mediado por inflamación."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Disminución de los depósitos de hierro, con aumento compensatorio de la capacidad de transporte y reducción de la saturación de transferrina."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Disminución de la síntesis de globinas, con depósitos de hierro conservados y ferritina normal."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Destrucción periférica de eritrocitos con aumento compensatorio de la eritropoyesis y de los reticulocitos."
      },
    ],
    "correctOptionId": "B",
    "explanation": "LO QUE DEBES SABER PARA EL EXAMEN\nLa anemia ferropénica aparece cuando las reservas de hierro son insuficientes para cubrir las necesidades de la eritropoyesis. Su patrón clásico es:\nParámetro | Anemia ferropénica\nHierro sérico | ↓\nFerritina | ↓\n\nTIBC | ↑\nSaturación de transferrina | ↓\nVCM | ↓ habitualmente\nRDW | ↑ frecuentemente\nLa ferritina baja es uno de los hallazgos más útiles para identificar ferropenia. Sin embargo, como es un reactante de fase aguda, puede encontrarse normal o elevada si existe inflamación concomitante.",
    "keyPoints": [],
    "theoryContent": "LO QUE DEBES SABER PARA EL EXAMEN\nLa anemia ferropénica aparece cuando las reservas de hierro son insuficientes para cubrir las necesidades de la eritropoyesis. Su patrón clásico es:\nParámetro | Anemia ferropénica\nHierro sérico | ↓\nFerritina | ↓\n\nTIBC | ↑\nSaturación de transferrina | ↓\nVCM | ↓ habitualmente\nRDW | ↑ frecuentemente\nLa ferritina baja es uno de los hallazgos más útiles para identificar ferropenia. Sin embargo, como es un reactante de fase aguda, puede encontrarse normal o elevada si existe inflamación concomitante.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n1. ¿Por qué disminuye la ferritina?\nLa ferritina refleja los depósitos de hierro. Cuando estos se agotan, su concentración disminuye.\nEn esta paciente, la ferritina de 7 ng/mL indica reservas marcadamente reducidas y, junto con el contexto de menstruaciones abundantes, apoya fuertemente el diagnóstico de ferropenia.\n2. ¿Por qué aumenta el TIBC?\nLa capacidad total de fijación del hierro refleja, principalmente, la capacidad de transporte asociada a la transferrina.\nAnte la falta de hierro, el organismo aumenta la disponibilidad de transferrina para captar y transportar el hierro que circula.\nPor eso, el patrón clásico es:\nHierro bajo + ferritina baja + TIBC alto.\n3. ¿Por qué disminuye la saturación de transferrina?\nLa saturación indica qué proporción de la capacidad de transporte está ocupada por hierro.\nSaturación de transferrina = (Hierro sérico / TIBC) × 100\nSi disminuye el hierro circulante mientras aumenta la capacidad de fijación, la saturación cae.\n4. ¿Qué aporta el hemograma?\nEl VCM de 70 fL indica microcitosis. El RDW aumentado refleja mayor variabilidad en el tamaño de los eritrocitos, un hallazgo frecuente en la ferropenia.\nEl deseo de ingerir hielo —pagofagia, una forma de pica— es otra pista clínica clásica.\n\n🔥 TRAMPA DE EXAMEN: FERROPENIA VS. ANEMIA DE LA INFLAMACIÓN\nParámetro | Ferropenia | Anemia de la inflamación\nHierro sérico | ↓ | ↓\nFerritina | ↓ | Normal o ↑\nTIBC | ↑ | Normal o ↓\nSaturación de transferrina | ↓ | ↓ habitualmente\nLa principal trampa es pensar que todo hierro sérico bajo significa ferropenia. En la inflamación, la hepcidina aumenta y reduce la disponibilidad del hierro para la eritropoyesis, aunque los depósitos no estén agotados.\n¿Por qué no las otras opciones?\n• A. Incorrecta: describe mejor la anemia de la inflamación, en la que la ferritina suele estar conservada o elevada y el TIBC normal o disminuido.\n• B. Correcta: explica las reservas agotadas, el hierro circulante bajo, el TIBC elevado y la saturación disminuida.\n• C. Incorrecta: un defecto de síntesis de globinas, como la talasemia, puede causar microcitosis, pero no explica por sí solo una ferritina tan baja.\n• D. Incorrecta: la hemólisis se asocia con otros datos, como aumento de LDH y bilirrubina indirecta, disminución de haptoglobina y, generalmente, respuesta reticulocitaria aumentada si la médula funciona adecuadamente.\n\n🎯 REGLA DE ORO\nFerropenia = hierro bajo, ferritina baja, TIBC alto y saturación baja.\nSi encuentras hierro bajo, pero ferritina normal o elevada y TIBC bajo, piensa en anemia de la inflamación.\n\n💎 PERLAS DE EXAMEN\n• La ferropenia suele comenzar con agotamiento de los depósitos antes de que aparezca anemia manifiesta.\n• La ferritina baja es muy sugestiva de déficit de hierro; una ferritina normal no siempre lo excluye en presencia de inflamación.\n• En un hombre adulto o una mujer posmenopáusica con anemia ferropénica, es fundamental investigar pérdidas gastrointestinales y otras causas de sangrado.\n• En mujeres con menstruaciones abundantes, debe evaluarse la causa del sangrado, sin asumir que esta explica necesariamente todos los hallazgos.\n• El tratamiento incluye reposición de hierro y corrección de la causa subyacente; la vía oral suele ser apropiada en muchos pacientes, mientras que el hierro intravenoso se reserva para situaciones seleccionadas.\n\n📚 REFERENCIAS\n1. Snook J, et al. British Society of Gastroenterology guidelines for the management of iron deficiency anaemia in adults. Gut. 2021;70:2030–2051.\n2. Camaschella C. Iron-Deficiency Anemia. New England Journal of Medicine. 2015;372:1832–1843.\n3. World Health Organization. WHO guideline on use of ferritin concentrations to assess iron status in individuals and populations."
  },
  {
    "id": "dr-q-eval3-47",
    "examArea": "PSIQUIATRÍA / TRASTORNO BIPOLAR",
    "topic": "PSIQUIATRÍA / TRASTORNO BIPOLAR",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Una mujer de 27 años es llevada a consulta por su familia debido a un cambio marcado de comportamiento durante los últimos ocho días. Duerme dos horas por noche sin sentirse cansada, habla constantemente, presenta fuga de ideas, afirma que va a crear una empresa multinacional en pocas semanas y ha gastado gran parte de sus ahorros en proyectos que considera infalibles. Su familia refiere que el comportamiento ha generado conflictos importantes y que la paciente ha tenido que abandonar temporalmente su trabajo. No consume sustancias psicoactivas y los estudios iniciales no identifican una causa médica. ¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Trastorno bipolar tipo II, porque presenta síntomas de elevación del ánimo sin síntomas depresivos actuales."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Episodio maníaco, compatible con trastorno bipolar tipo I."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Episodio hipomaníaco, compatible con trastorno bipolar tipo II."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Trastorno ciclotímico, por presentar fluctuaciones persistentes de energía y estado de ánimo."
      },
    ],
    "correctOptionId": "B",
    "explanation": "LO QUE DEBES SABER PARA EL EXAMEN\nLa diferencia fundamental entre manía e hipomanía no es solamente la intensidad de la euforia: importa la duración, la repercusión funcional, la necesidad de hospitalización y la presencia de síntomas psicóticos.\nCaracterística | Manía | Hipomanía\nDuración habitual mínima | 7 días, salvo que requiera hospitalización | 4 días consecutivos\nDeterioro funcional | Marcado | No marcado\nHospitalización | Puede ser necesaria | No es necesaria por la hipomanía en sí\nSíntomas psicóticos | Pueden aparecer | No aparecen\nDiagnóstico asociado | Bipolar I | Bipolar II, si existe además un episodio depresivo mayor y nunca ha habido manía",
    "keyPoints": [],
    "theoryContent": "LO QUE DEBES SABER PARA EL EXAMEN\nLa diferencia fundamental entre manía e hipomanía no es solamente la intensidad de la euforia: importa la duración, la repercusión funcional, la necesidad de hospitalización y la presencia de síntomas psicóticos.\nCaracterística | Manía | Hipomanía\nDuración habitual mínima | 7 días, salvo que requiera hospitalización | 4 días consecutivos\nDeterioro funcional | Marcado | No marcado\nHospitalización | Puede ser necesaria | No es necesaria por la hipomanía en sí\nSíntomas psicóticos | Pueden aparecer | No aparecen\nDiagnóstico asociado | Bipolar I | Bipolar II, si existe además un episodio depresivo mayor y nunca ha habido manía\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n1. Identifica los síntomas de activación\nLa paciente presenta:\n• Disminución de la necesidad de dormir.\n• Verborrea.\n• Fuga de ideas.\n• Grandiosidad.\n• Conductas impulsivas con consecuencias económicas.\n• Deterioro laboral y social importante.\nEste conjunto es compatible con un episodio maníaco.\n2. Determina la duración\nLos síntomas llevan ocho días. La duración supera el umbral habitual de siete días para la manía.\n3. Valora el deterioro funcional\nLa paciente ha comprometido sus ahorros y ha tenido que abandonar temporalmente el trabajo. Esto indica una repercusión funcional importante, que favorece manía frente a hipomanía.\n4. Clasifica el trastorno bipolar\nUn solo episodio maníaco es suficiente para establecer el diagnóstico de trastorno bipolar tipo I, una vez descartadas causas médicas, sustancias y otros diagnósticos pertinentes.\nEn cambio, el trastorno bipolar tipo II requiere al menos un episodio hipomaníaco y uno depresivo mayor, sin antecedentes de episodio maníaco.\n\n🔥 TRAMPA DE EXAMEN\nNo confundas bipolar II con una versión menos grave del bipolar I.\nEn el bipolar II, la ausencia de manía es esencial para el diagnóstico, y los episodios depresivos pueden causar una discapacidad considerable.\nLa presencia de manía, aunque sea una sola vez, descarta el diagnóstico de bipolar II.\n¿Por qué no las otras opciones?\n• A. Bipolar II: incorrecta. La paciente presenta un cuadro compatible con manía, no hipomanía.\n• B. Episodio maníaco: correcta. Cumple duración y presenta deterioro funcional marcado.\n• C. Episodio hipomaníaco: incorrecta. La repercusión laboral y económica es demasiado importante para el patrón típico de hipomanía.\n• D. Ciclotimia: incorrecta. No se describe el curso crónico de síntomas hipomaníacos y depresivos subumbrales necesario para este diagnóstico.\n\n🎯 REGLA DE ORO\nUna manía = bipolar I.\nHipomanía + depresión mayor, sin manía previa = bipolar II.\n\n💎 PERLAS DE EXAMEN\n• La disminución de la necesidad de dormir no es lo mismo que padecer insomnio: el paciente maníaco puede dormir muy poco y aun así sentirse descansado.\n• La grandiosidad, la verborrea, la fuga de ideas y la conducta de riesgo son pistas clásicas de manía.\n• La presencia de síntomas psicóticos durante un episodio de elevación del ánimo excluye la hipomanía.\n• Antes de diagnosticar un trastorno bipolar, hay que valorar sustancias, medicamentos y causas médicas.\n• Ante manía aguda, especialmente con conductas peligrosas, síntomas psicóticos o incapacidad para el autocuidado, debe evaluarse la necesidad de atención urgente y hospitalización.\n\n📚 REFERENCIAS\n1. American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). 2022.\n2. National Institute for Health and Care Excellence (NICE). Bipolar disorder: assessment and management.\n3. Merck Manual Professional Edition. Bipolar Disorders."
  },
  {
    "id": "dr-q-eval3-48",
    "examArea": "PSIQUIATRÍA / SÍNDROME SEROTONINÉRGICO",
    "topic": "PSIQUIATRÍA / SÍNDROME SEROTONINÉRGICO",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un hombre de 35 años en tratamiento con sertralina por depresión inicia tramadol por dolor lumbar. Veinticuatro horas después consulta por agitación, sudoración profusa, diarrea y temblor. En la exploración presenta temperatura de 38,3 °C, hiperreflexia generalizada y clonus inducible en ambos tobillos. ¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Síndrome neuroléptico maligno por bloqueo dopaminérgico, caracterizado por rigidez generalizada y evolución habitualmente más lenta."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Síndrome serotoninérgico por exceso de actividad serotoninérgica, precipitado por la interacción farmacológica."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Catatonía maligna asociada a un trastorno afectivo, sin relación directa con los medicamentos utilizados."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Síndrome anticolinérgico por inhibición muscarínica, caracterizado por piel seca, retención urinaria y disminución de los ruidos intestinales."
      },
    ],
    "correctOptionId": "B",
    "explanation": "LO QUE DEBES SABER PARA EL EXAMEN\nEl síndrome serotoninérgico es una reacción potencialmente grave causada por un exceso de actividad serotoninérgica, generalmente tras iniciar, aumentar o combinar medicamentos serotoninérgicos.\nLa combinación de un antidepresivo serotoninérgico con tramadol puede desencadenarlo. Las pistas clínicas más útiles son clonus, hiperreflexia, agitación y síntomas autonómicos, con aparición habitualmente rápida tras el cambio farmacológico.",
    "keyPoints": [],
    "theoryContent": "LO QUE DEBES SABER PARA EL EXAMEN\nEl síndrome serotoninérgico es una reacción potencialmente grave causada por un exceso de actividad serotoninérgica, generalmente tras iniciar, aumentar o combinar medicamentos serotoninérgicos.\nLa combinación de un antidepresivo serotoninérgico con tramadol puede desencadenarlo. Las pistas clínicas más útiles son clonus, hiperreflexia, agitación y síntomas autonómicos, con aparición habitualmente rápida tras el cambio farmacológico.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n1. Identifica la exposición farmacológica\nLa sertralina inhibe la recaptación de serotonina. El tramadol, además de su acción opioide, tiene actividad serotoninérgica.\nLa combinación aumenta el riesgo de toxicidad serotoninérgica.\n2. Reconoce el patrón neuromuscular\nEl dato más importante del caso es:\nClonus + hiperreflexia.\nEstos hallazgos orientan especialmente hacia síndrome serotoninérgico, en contraste con el síndrome neuroléptico maligno, donde suele predominar la rigidez muscular intensa.\n3. Aplica los criterios de Hunter\nEn un paciente expuesto a un agente serotoninérgico, la presencia de clonus espontáneo, o de clonus inducible u ocular acompañado de agitación o diaforesis, entre otras combinaciones diagnósticas, permite identificar el síndrome serotoninérgico.\nEn este caso, el paciente presenta clonus inducible y diaforesis, por lo que cumple criterios de Hunter.\n4. ¿Cuál es la conducta inicial?\n• Suspender los agentes serotoninérgicos implicados.\n• Administrar tratamiento de soporte, con vigilancia de temperatura, estado mental y constantes vitales.\n• Utilizar benzodiacepinas para controlar la agitación y la actividad muscular cuando estén indicadas.\n• En casos moderados o graves, considerar medidas adicionales según la evolución clínica y el entorno hospitalario.\nLos casos graves con hipertermia importante, rigidez o inestabilidad autonómica requieren manejo urgente, control de la temperatura y soporte intensivo cuando corresponda.\n\n🔥 TRAMPA DE EXAMEN\nNo te quedes únicamente con la fiebre y la agitación: aparecen en varios síndromes toxicológicos.\nBusca el hallazgo que discrimina:\n• Síndrome serotoninérgico: clonus e hiperreflexia.\n• Síndrome neuroléptico maligno: rigidez generalizada marcada, a menudo descrita como «en tubo de plomo», con hiporreflexia relativa y evolución más lenta.\n• Síndrome anticolinérgico: piel seca, midriasis, retención urinaria y disminución de la motilidad intestinal.\n¿Por qué no las otras opciones?\n• A. Síndrome neuroléptico maligno: no es la mejor respuesta porque no se describe exposición a antagonistas dopaminérgicos ni predomina la rigidez característica; el clonus y la hiperreflexia favorecen toxicidad serotoninérgica.\n• B. Síndrome serotoninérgico: correcta por la interacción farmacológica, el inicio rápido, la diaforesis, la diarrea, la hiperreflexia y el clonus.\n• C. Catatonía maligna: puede compartir fiebre y alteraciones conductuales, pero el contexto farmacológico y los hallazgos neuromusculares apoyan el diagnóstico serotoninérgico.\n• D. Síndrome anticolinérgico: incorrecta porque el paciente presenta sudoración y diarrea, no el patrón típico de sequedad y reducción de la motilidad intestinal.\n\n🎯 REGLA DE ORO\nPaciente que combina fármacos serotoninérgicos + agitación + clonus + hiperreflexia = síndrome serotoninérgico hasta demostrar lo contrario.\n\n💎 PERLAS DE EXAMEN\n• El síndrome serotoninérgico puede aparecer en cuestión de horas tras una interacción farmacológica.\n• El clonus es una de las pistas semiológicas más útiles.\n• El síndrome neuroléptico maligno suele aparecer durante un período más prolongado después de iniciar o modificar un antagonista dopaminérgico.\n• La creatina-cinasa puede elevarse en ambos síndromes, por lo que no debe utilizarse aisladamente para diferenciarlos.\n• La gravedad clínica, especialmente la hipertermia y la inestabilidad autonómica, determina la urgencia y la intensidad del tratamiento.\n\n📚 REFERENCIAS\n1. Dunkley EJC, et al. The Hunter Serotonin Toxicity Criteria: simple and accurate diagnostic decision rules for serotonin toxicity. QJM. 2003;96:635–642.\n2. Boyer EW, Shannon M. The Serotonin Syndrome. New England Journal of Medicine. 2005;352:1112–1120.\n3. Merck Manual Professional Edition. Serotonin Syndrome."
  },
  {
    "id": "dr-q-eval3-49",
    "examArea": "CARDIOLOGÍA / TAQUIARRITMIAS",
    "topic": "CARDIOLOGÍA / TAQUIARRITMIAS",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-3", "pro"],
    "statement": "Un hombre de 68 años con antecedente de infarto agudo de miocardio hace tres años consulta por palpitaciones de inicio súbito. El electrocardiograma muestra una taquicardia regular de QRS ancho, con frecuencia ventricular de 178 lpm y complejos QRS de 160 ms, de morfología monomórfica. El paciente está consciente, pero presenta presión arterial de 76/48 mmHg, diaforesis fría y confusión de inicio reciente. Tiene pulso central palpable. ¿Cuál es la conducta inmediata más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar adenosina intravenosa en bolo y esperar la respuesta electrocardiográfica antes de decidir la siguiente intervención."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar amiodarona intravenosa en infusión lenta y reevaluar la presión arterial después de completar la dosis."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Realizar cardioversión eléctrica sincronizada inmediata, con sedación si es factible sin retrasar el procedimiento."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Realizar desfibrilación no sincronizada inmediata, porque toda taquicardia de QRS ancho debe tratarse como fibrilación ventricular."
      },
    ],
    "correctOptionId": "C",
    "explanation": "LO QUE DEBES SABER PARA EL EXAMEN\nLa primera decisión ante una taquiarritmia no es identificar con absoluta certeza el mecanismo electrofisiológico: es determinar si el paciente está hemodinámicamente estable o inestable.\nLa hipotensión, la alteración aguda del estado mental, el shock, el dolor torácico isquémico y la insuficiencia cardíaca aguda son signos de inestabilidad que pueden exigir cardioversión inmediata.",
    "keyPoints": [],
    "theoryContent": "LO QUE DEBES SABER PARA EL EXAMEN\nLa primera decisión ante una taquiarritmia no es identificar con absoluta certeza el mecanismo electrofisiológico: es determinar si el paciente está hemodinámicamente estable o inestable.\nLa hipotensión, la alteración aguda del estado mental, el shock, el dolor torácico isquémico y la insuficiencia cardíaca aguda son signos de inestabilidad que pueden exigir cardioversión inmediata.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n1. Interpreta el electrocardiograma\n• Frecuencia: 178 lpm.\n• Ritmo: regular.\n• QRS: 160 ms, por tanto, ancho.\n• Morfología: monomórfica.\nEn un paciente con antecedente de infarto, una taquicardia regular de QRS ancho debe considerarse taquicardia ventricular (TV) hasta demostrar lo contrario. El antecedente de cicatriz miocárdica aumenta la probabilidad de un circuito de reentrada ventricular.\n2. Reconoce la inestabilidad hemodinámica\nLa presión arterial es de 76/48 mmHg y hay confusión y diaforesis fría. Estos datos sugieren hipoperfusión secundaria a la taquiarritmia.\nEl paciente tiene pulso, pero eso no significa que esté estable.\n3. Selecciona el tratamiento eléctrico correcto\nTaquicardia con pulso + inestabilidad hemodinámica → cardioversión sincronizada inmediata.\nLa sincronización hace que el equipo administre la descarga sobre el complejo QRS, evitando aplicar el choque durante la fase vulnerable de la onda T.\nDebe utilizarse sedación si es factible, pero nunca se debe retrasar la cardioversión en un paciente críticamente inestable.\n\n🔥 TRAMPA DE EXAMEN: CARDIOVERSIÓN VS. DESFIBRILACIÓN\nSituación | Conducta eléctrica\nTaquicardia con pulso e inestabilidad | Cardioversión sincronizada\nFibrilación ventricular | Desfibrilación no sincronizada\nTV polimórfica sostenida | Desfibrilación no sincronizada\nTV monomórfica con pulso y estable | Valorar antiarrítmicos IV y consulta experta\n¿Por qué no las otras opciones?\nA. Adenosina. Puede considerarse en una taquicardia estable, regular y monomórfica de QRS ancho cuando el diagnóstico es incierto. No debe retrasar el tratamiento eléctrico de un paciente inestable.\nB. Amiodarona. Es una opción para determinadas taquicardias de QRS ancho estables, pero no sustituye la cardioversión inmediata ante hipotensión y alteración del estado mental.\nC. Cardioversión sincronizada. Correcta: hay taquicardia con pulso e inestabilidad hemodinámica.\nD. Desfibrilación no sincronizada. Incorrecta en esta situación: el ritmo es monomórfico y el paciente tiene pulso. La descarga no sincronizada se utiliza en ritmos como la fibrilación ventricular y la TV polimórfica sostenida.\n\n🎯 REGLA DE ORO\nPrimero el pulso, después la estabilidad y finalmente el ritmo.\n• Sin pulso: seguir el algoritmo de paro cardíaco.\n• Con pulso e inestable: cardioversión sincronizada si el ritmo permite sincronización.\n• Con pulso y estable: analizar el ECG y seleccionar el tratamiento específico.\n\n💎 PERLAS DE EXAMEN\n• Una taquicardia regular de QRS ancho debe hacer sospechar TV, especialmente en pacientes con cardiopatía estructural.\n• La inestabilidad hemodinámica determina la urgencia del tratamiento, no la certeza absoluta del diagnóstico electrocardiográfico.\n• La cardioversión sincronizada debe comprobarse en el monitor antes de descargar.\n• Si el paciente pierde el pulso y presenta TV sin pulso o fibrilación ventricular, se debe pasar al algoritmo de paro con desfibrilación y RCP.\n• En una taquicardia de QRS ancho, deben evitarse verapamilo y diltiazem cuando el mecanismo no está aclarado, por el riesgo de deterioro hemodinámico.\n\n📚 REFERENCIAS\n1. American Heart Association. Adult Tachyarrhythmia With a Pulse Algorithm. ACLS Guidelines, 2025.\n2. American Heart Association. Part 9: Adult Advanced Life Support — 2025 AHA Guidelines for CPR and ECC."
  },
];
