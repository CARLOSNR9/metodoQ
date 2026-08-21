import type { TrainingQuestion } from "@/lib/questions/types";

export const DR_Q_EVAL_1_QUESTIONS: TrainingQuestion[] = [
  {
    "id": "dr-q-eval1-1",
    "examArea": "Cardiología / Reanimación Cardiopulmonar",
    "topic": "Cardiología / Reanimación Cardiopulmonar",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Una mujer de 22 años presenta una parada cardiorrespiratoria con un ritmo desfibrilable. Se están realizando compresiones torácicas de alta calidad y ventilaciones. Ya se ha administrado una descarga con el desfibrilador y se ha canalizado una vía venosa periférica.\r\n¿Cuál de las siguientes actuaciones sería la más correcta a continuación?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar 150 mg de amiodarona intravenosa."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar 300 mg de amiodarona intravenosa."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administrar 1 mg de atropina intravenosa."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Ninguna de las anteriores es correcta en este momento."
      }
    ],
    "correctOptionId": "D",
    "explanation": "**Lo que debes saber para el examen:**\nEn un paro con FV/TV sin pulso:\r\n•\tDesfibrilación precoz.\r\n•\tRCP de alta calidad.\r\n•\tTras la 1.ª descarga → RCP 2 minutos.\r\n•\tTras la 2.ª descarga → RCP + adrenalina 1 mg.\r\n•\tTras la 3.ª descarga → RCP + amiodarona 300 mg.",
    "keyPoints": [],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\n\nAnalicemos el caso\r\nEl dato clave es:\r\n\"Ya se ha administrado una descarga.\"\r\nEsto significa que estamos justo después de la primera descarga, por lo que aún no corresponde administrar fármacos antiarrítmicos.\r\nSecuencia correcta que debes memorizar\r\n1.ª descarga → RCP 2 minutos.\r\n2.ª descarga → RCP + adrenalina 1 mg.\r\n3.ª descarga → RCP + amiodarona 300 mg IV.\r\n¿Por qué todas las opciones son incorrectas?\r\nA. Amiodarona 150 mg ❌\r\nEs una dosis posterior, no indicada en este momento.\r\nB. Amiodarona 300 mg ❌\r\nCorrecta en el algoritmo, pero solo tras la tercera descarga, no tras la primera.\r\nC. Atropina 1 mg ❌\r\nNo tiene indicación en paro cardíaco.\r\n¿Cuál es la trampa del examen?\r\nEl examen intenta que recuerdes cuándo se administra cada fármaco, no solo cuál.\r\nAquí el error típico es:\r\n👉 Ver \"ritmo desfibrilable\" y marcar amiodarona automáticamente.\r\nPero lo importante es el momento del algoritmo.\r\nRegla de oro para residencia\r\nFV/TV sin pulso\r\n•\t1.ª descarga → RCP.\r\n•\t2.ª descarga → Adrenalina.\r\n•\t3.ª descarga → Amiodarona 300 mg.\r\nPerlas de examen\r\n✅ La cronología del algoritmo es clave.\r\n✅ La amiodarona nunca se administra tras la primera descarga.\r\n✅ La atropina no tiene papel en el paro cardíaco.\r\n✅ Prioridad absoluta:\r\nRCP de alta calidad + desfibrilación precoz.\r\nReferencias\r\n•\tEuropean Resuscitation Council (ERC) Guidelines.\r\n•\tAmerican Heart Association (AHA) ACLS Guidelines.\r\n•\tManual AMIR – Cardiología."
  },
  {
    "id": "dr-q-eval1-2",
    "examArea": "Cardiología / Reanimación Cardiopulmonar",
    "topic": "Cardiología / Reanimación Cardiopulmonar",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Una persona presenta una parada cardiorrespiratoria. Tras comprobar la ausencia de pulso, se inicia la reanimación cardiopulmonar básica.\r\n¿Cuál de las siguientes afirmaciones es correcta con respecto a la reanimación cardiopulmonar?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Tras comprobar la ausencia de pulso, la reanimación cardiopulmonar básica debe realizarse siguiendo la pauta de 30 compresiones torácicas y 2 insuflaciones pulmonares."
      },
      {
        "id": "B",
        "label": "B",
        "text": "En cuanto se disponga de los medios necesarios se debe realizar una cardioversión si el paciente aún no ha recuperado el pulso."
      },
      {
        "id": "C",
        "label": "C",
        "text": "En caso de asistolia deben administrarse 3 mg de atropina."
      },
      {
        "id": "D",
        "label": "D",
        "text": "La adrenalina, a dosis de 1 mg cada 3 minutos, no se administrará si el mecanismo de parada es una fibrilación ventricular."
      }
    ],
    "correctOptionId": "A",
    "explanation": "**Lo que debes saber para el examen:**\nEn la RCP básica del adulto:\r\n•\t30 compresiones : 2 ventilaciones.\r\n•\tFrecuencia: 100-120 compresiones/minuto.\r\n•\tProfundidad: 5-6 cm.\r\n•\tPermitir la reexpansión completa del tórax.\r\n•\tMinimizar las interrupciones.",
    "keyPoints": [],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica sobre el algoritmo inicial de soporte vital.\r\nAnalicemos el caso\r\nEl paciente presenta una:\r\n•\tParada cardiorrespiratoria.\r\n•\tAusencia de pulso.\r\nLa actuación inmediata consiste en iniciar una RCP de alta calidad, utilizando la relación universal para adultos:\r\n30 compresiones por 2 ventilaciones.\r\nEsta secuencia debe mantenerse hasta disponer de un desfibrilador o de un equipo de soporte vital avanzado.\r\n¿Por qué las otras opciones son incorrectas?\r\nB. Realizar cardioversión ❌\r\nLa cardioversión sincronizada se utiliza únicamente en taquiarritmias con pulso.\r\nEn un paciente sin pulso, si el ritmo es desfibrilable, el tratamiento es la desfibrilación, nunca la cardioversión.\r\nC. Administrar 3 mg de atropina en asistolia ❌\r\nLa atropina ya no forma parte del algoritmo de parada cardiorrespiratoria.\r\nEn asistolia se administra:\r\n•\tRCP de alta calidad.\r\n•\tAdrenalina 1 mg cada 3-5 minutos.\r\n•\tBúsqueda y tratamiento de causas reversibles (4H y 4T).\r\nD. No administrar adrenalina en fibrilación ventricular ❌\r\nEs falso.\r\nEn la fibrilación ventricular o taquicardia ventricular sin pulso, la adrenalina sí está indicada, iniciándose tras la segunda descarga y repitiéndose cada 3-5 minutos.\r\n¿Cuál es la trampa del examen?\r\nMuchos estudiantes confunden:\r\n•\tCardioversión → Paciente con pulso.\r\n•\tDesfibrilación → Paciente sin pulso.\r\nAdemás, algunos continúan asociando la atropina al tratamiento de la asistolia, pese a que fue retirada de los algoritmos actuales.\r\nRegla de oro para residencia\r\nPaciente sin pulso\r\n↓\r\nIniciar inmediatamente RCP 30:2.\r\nFV/TV sin pulso → Desfibrilar.\r\nAsistolia/AESP → Adrenalina + RCP.\r\nPerlas de examen\r\n✅ La relación 30:2 es el estándar en adultos durante la RCP básica.\r\n✅ La desfibrilación solo está indicada en fibrilación ventricular y taquicardia ventricular sin pulso.\r\n✅ La atropina ya no tiene indicación en el manejo de la parada cardiorrespiratoria.\r\n✅ La adrenalina se utiliza en todos los ritmos de parada, variando únicamente el momento de administración según el algoritmo.\r\nReferencias\r\n•\tEuropean Resuscitation Council (ERC) Guidelines.\r\n•\tAmerican Heart Association (AHA) ACLS Guidelines.\r\n•\tManual AMIR – Cardiología."
  },
  {
    "id": "dr-q-eval1-3",
    "examArea": "Cardiología / Reanimación Cardiopulmonar",
    "topic": "Cardiología / Reanimación Cardiopulmonar",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 67 años presenta una parada cardiorrespiratoria. En el monitor se observa una asistolia. Se inicia inmediatamente reanimación cardiopulmonar de alta calidad y se canaliza una vía intravenosa.\r\n¿Cuál de las siguientes actuaciones es la más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Realizar desfibrilación inmediata."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar 300 mg de amiodarona intravenosa."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administrar 1 mg de adrenalina intravenosa y continuar la RCP."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar 1 mg de atropina intravenosa."
      }
    ],
    "correctOptionId": "C",
    "explanation": "**Lo que debes saber para el examen:**\nEn los ritmos no desfibrilables (asistolia y actividad eléctrica sin pulso):\r\n•\tRCP de alta calidad.\r\n•\tAdrenalina 1 mg IV/IO cada 3-5 minutos.\r\n•\tReevaluar el ritmo cada 2 minutos.\r\n•\tBuscar y tratar las 4H y 4T.",
    "keyPoints": [],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica de soporte vital avanzado.\r\nAnalicemos el caso\r\nEl dato clave del enunciado es:\r\nAsistolia.\r\nLa asistolia corresponde a un:\r\nRitmo no desfibrilable.\r\nPor ello, la prioridad es:\r\n•\tRCP de alta calidad.\r\n•\tAdministración precoz de adrenalina.\r\n•\tIdentificación y tratamiento de las causas reversibles.\r\n¿Qué ritmos son desfibrilables?\r\nDesfibrilables\r\n•\tFibrilación ventricular.\r\n•\tTaquicardia ventricular sin pulso.\r\nNo desfibrilables\r\n•\tAsistolia.\r\n•\tActividad eléctrica sin pulso (AESP).\r\n¿Por qué las otras opciones son incorrectas?\r\nA. Desfibrilación inmediata ❌\r\nLa desfibrilación no está indicada en la asistolia porque no existe una actividad eléctrica susceptible de reiniciarse.\r\nB. Amiodarona 300 mg IV ❌\r\nLa amiodarona solo se administra en FV o TV sin pulso refractarias, tras la tercera descarga.\r\nD. Atropina 1 mg IV ❌\r\nLa atropina fue retirada de los algoritmos de parada cardíaca y no tiene indicación en la asistolia.\r\n¿Cuál es la trampa del examen?\r\nMuchos estudiantes memorizan los fármacos, pero olvidan identificar primero el tipo de ritmo.\r\nSiempre debes preguntarte:\r\n¿Es un ritmo desfibrilable o no?\r\nSi la respuesta es asistolia, nunca debes desfibrilar ni administrar amiodarona.\r\nRegla de oro para residencia\r\nAsistolia o AESP\r\n↓\r\nRCP + adrenalina + búsqueda de las 4H y 4T.\r\nNunca desfibrilar.\r\nPerlas de examen\r\n✅ La asistolia y la AESP son ritmos no desfibrilables.\r\n✅ La adrenalina debe administrarse lo antes posible y repetirse cada 3-5 minutos.\r\n✅ La atropina ya no forma parte del algoritmo de parada cardiorrespiratoria.\r\n✅ Las 4H y 4T deben buscarse de forma sistemática durante toda la reanimación.\r\nReferencias\r\n•\tEuropean Resuscitation Council (ERC) Guidelines.\r\n•\tAmerican Heart Association (AHA) ACLS Guidelines.\r\n•\tManual AMIR – Cardiología."
  },
  {
    "id": "dr-q-eval1-4",
    "examArea": "Cirugía General / Trauma",
    "topic": "Cirugía General / Trauma",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un adolescente es apuñalado y golpeado durante una reyerta callejera. A la llegada del equipo de emergencias se encuentra inconsciente. Presenta tres heridas penetrantes en el hemitórax izquierdo por las que entra y sale aire con la respiración, así como dos heridas incisas en la cara anterior y medial del muslo derecho con hemorragia pulsátil y abundante.\r\n¿Cuál es la actitud que debe adoptarse de forma inmediata antes de la llegada al hospital?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Taponamiento parcial (apósito oclusivo ventilado) de las heridas torácicas, control por compresión del sangrado arterial de la extremidad y traslado inmediato."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Traslado inmediato al hospital, intubándolo durante el transporte y administrando líquidos a presión."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Control del sangrado arterial seguido de una exploración neurológica detallada y posteriormente intubación y traslado."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Colocar un vendaje compresivo sobre todas las heridas, iniciar fluidoterapia agresiva y diferir el control definitivo hasta la llegada al hospital."
      }
    ],
    "correctOptionId": "A",
    "explanation": "**Lo que debes saber para el examen:**\nEn el trauma penetrante:\r\n•\tControl inmediato de la hemorragia masiva.\r\n•\tSellado de las heridas torácicas aspirativas con apósito oclusivo ventilado.\r\n•\tEvitar retrasos innecesarios en el traslado.\r\n•\tPriorizar siempre las intervenciones que salvan la vida.",
    "keyPoints": [],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica del manejo inicial del paciente politraumatizado.\r\nAnalicemos el caso\r\nEl paciente presenta dos lesiones potencialmente mortales:\r\n•\tHeridas torácicas aspirativas, compatibles con un neumotórax abierto.\r\n•\tHemorragia arterial activa en el muslo, con riesgo de choque hemorrágico.\r\nEl tratamiento inicial debe dirigirse inmediatamente a controlar ambas situaciones antes del traslado.\r\n¿Qué debe hacerse?\r\n1.\tSellar la herida torácica con un apósito oclusivo ventilado (o un sello oclusivo fijado por tres lados si no se dispone de un dispositivo comercial), evitando el desarrollo de un neumotórax a tensión.\r\n2.\tControlar la hemorragia externa mediante compresión directa y, si no es suficiente, colocar un torniquete proximal.\r\n3.\tTraslado urgente a un centro con capacidad para cirugía de trauma.\r\n¿Por qué las otras opciones son incorrectas?\r\nB. Intubación y fluidoterapia agresiva durante el traslado ❌\r\nLa intubación no debe retrasar el control de las lesiones que amenazan la vida. Además, la reposición agresiva de líquidos puede empeorar el sangrado antes del control de la hemorragia.\r\nC. Exploración neurológica detallada ❌\r\nLa valoración neurológica completa forma parte de la evaluación secundaria. Antes deben resolverse las amenazas inmediatas según el enfoque ABCDE.\r\nD. Vendaje compresivo de todas las heridas y fluidoterapia agresiva ❌\r\nLas heridas torácicas aspirativas requieren un apósito oclusivo, no un simple vendaje compresivo. Asimismo, la fluidoterapia agresiva no sustituye el control precoz de la hemorragia.\r\n¿Cuál es la trampa del examen?\r\nMuchos estudiantes se centran en el estado de inconsciencia o en la necesidad de intubación.\r\nSin embargo, en trauma el principio fundamental es:\r\nTratar primero aquello que mata primero.\r\nEn este caso:\r\n•\tNeumotórax abierto.\r\n•\tHemorragia arterial masiva.\r\nRegla de oro para residencia\r\nTrauma penetrante\r\n↓\r\nControl de hemorragia + sellado de heridas torácicas + traslado inmediato.\r\nPerlas de examen\r\n✅ Las heridas torácicas aspirativas deben cubrirse con un apósito oclusivo ventilado.\r\n✅ La hemorragia externa masiva debe controlarse inmediatamente con compresión o torniquete.\r\n✅ El manejo del politraumatizado sigue la secuencia ABCDE del ATLS.\r\n✅ Nunca debe retrasarse el traslado por procedimientos que no cambien la supervivencia inmediata.\r\nReferencias\r\n•\tATLS® (Advanced Trauma Life Support), American College of Surgeons.\r\n•\tEuropean Trauma Course Manual.\r\n•\tManual AMIR – Cirugía General y Trauma."
  },
  {
    "id": "dr-q-eval1-5",
    "examArea": "Cirugía General / Trauma",
    "topic": "Cirugía General / Trauma",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un paciente politraumatizado es llevado al servicio de urgencias tras un accidente de alta energía, y durante la valoración inicial se identifican las siguientes lesiones: fractura abierta de tibia, hemoperitoneo secundario a rotura esplénica, hematoma epidural y neumotórax a tensión; ¿cuál de las siguientes lesiones debe tratarse en primer lugar?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Fractura abierta de tibia."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hemoperitoneo por rotura esplénica."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Hematoma epidural."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Neumotórax a tensión."
      }
    ],
    "correctOptionId": "D",
    "explanation": "**Lo que debes saber para el examen:**\nEn el paciente politraumatizado:\r\n•\tEl manejo sigue la secuencia ABCDE.\r\n•\tSe trata primero la lesión que mata antes.\r\n•\tEl neumotórax a tensión se corrige de inmediato mediante descompresión torácica y posterior drenaje pleural.",
    "keyPoints": [],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una de las preguntas más clásicas de trauma.\r\nAnalicemos el caso\r\nEl paciente presenta varias lesiones graves, pero el examen pregunta:\r\n¿Cuál debe tratarse primero?\r\nLa respuesta se basa en el principio fundamental del ATLS:\r\nTratar primero aquello que compromete la vida de forma inmediata.\r\nEntre las opciones, el neumotórax a tensión es la lesión que puede producir la muerte en pocos minutos si no se descomprime.\r\n¿Qué ocurre en un neumotórax a tensión?\r\nLa entrada de aire al espacio pleural sin posibilidad de salida produce:\r\n•\tColapso del pulmón afectado.\r\n•\tDesviación del mediastino.\r\n•\tCompresión de la vena cava.\r\n•\tDisminución del retorno venoso.\r\n•\tShock obstructivo.\r\n•\tParada cardiorrespiratoria.\r\nEl tratamiento no debe esperar a la radiografía.\r\nSe realiza:\r\n•\tDescompresión inmediata (aguja o toracostomía según los recursos disponibles).\r\n•\tPosteriormente, colocación de tubo de drenaje torácico.\r\n¿Por qué las otras opciones son incorrectas?\r\nA. Fractura abierta de tibia ❌\r\nEs una lesión grave que requiere estabilización, antibióticos y tratamiento quirúrgico, pero raramente compromete la vida de forma inmediata.\r\nB. Hemoperitoneo por rotura esplénica ❌\r\nPuede causar un choque hemorrágico y requerir cirugía urgente, pero primero deben resolverse las lesiones que impiden la oxigenación y ventilación.\r\nC. Hematoma epidural ❌\r\nEs una urgencia neuroquirúrgica, pero antes debe asegurarse una adecuada ventilación y circulación.\r\n¿Cuál es la trampa del examen?\r\nMuchos estudiantes eligen el hematoma epidural o el hemoperitoneo por su gravedad.\r\nSin embargo, en trauma la prioridad no depende de la lesión más espectacular, sino de la que mata antes.\r\nRegla de oro para residencia\r\nEn trauma:\r\nPrimero lo que impide respirar.\r\nDespués lo que hace sangrar.\r\nLuego el resto de lesiones.\r\nPerlas de examen\r\n✅ El neumotórax a tensión es una de las lesiones torácicas letales inmediatas del ATLS.\r\n✅ El diagnóstico es clínico y no debe retrasarse el tratamiento esperando pruebas de imagen.\r\n✅ La descompresión inmediata salva la vida; el drenaje pleural constituye el tratamiento definitivo.\r\n✅ El protocolo ABCDE siempre prioriza la corrección de las alteraciones que comprometen la vía aérea, la ventilación y la circulación.\r\nReferencias\r\n•\tATLS® (Advanced Trauma Life Support), American College of Surgeons.\r\n•\tEuropean Trauma Course Manual.\r\n•\tManual AMIR – Cirugía General y Trauma."
  },
  {
    "id": "dr-q-eval1-6",
    "examArea": "Cirugía General / Trauma",
    "topic": "Cirugía General / Trauma",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 18 años es trasladado al servicio de urgencias tras ser atropellado mientras circulaba en bicicleta y a su llegada presenta frecuencia cardíaca de 115 lpm, presión arterial de 110/75 mmHg, pulso radial palpable, relleno capilar de 2,5 segundos y frecuencia respiratoria de 25 rpm; ¿qué indican estos datos?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Ha perdido entre un 15 y un 30% de la volemia y precisa reposición de volumen."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Ha perdido más de un 30% de la volemia y precisa reposición de volumen y de sangre."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Ha perdido más de un 40% de la volemia y precisará tratamiento quirúrgico."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Ha perdido más de un 50% de la volemia y precisa reposición de volumen y cirugía urgente."
      }
    ],
    "correctOptionId": "A",
    "explanation": "**Lo que debes saber para el examen:**\nClasificación ATLS del choque hemorrágico:\r\n•\tClase I: <15% de pérdida.\r\n•\tClase II: 15-30% de pérdida.\r\n•\tClase III: 30-40% de pérdida.\r\n•\tClase IV: >40% de pérdida.",
    "keyPoints": [],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica basada en la clasificación del choque hemorrágico del ATLS.\r\nAnalicemos el caso\r\nEl paciente presenta:\r\n•\tFC: 115 lpm.\r\n•\tFR: 25 rpm.\r\n•\tPresión arterial conservada.\r\n•\tPulso radial palpable.\r\n•\tRelleno capilar discretamente prolongado.\r\nEstos hallazgos indican un paciente que ha comenzado a compensar una pérdida moderada de sangre, pero que aún mantiene la presión arterial.\r\nEsto corresponde a:\r\nChoque hemorrágico clase II.\r\n¿Cómo recordar las clases del choque hemorrágico?\r\nClase I (<15%)\r\n•\tFC <100 lpm.\r\n•\tTA normal.\r\n•\tSin cambios importantes.\r\nClase II (15-30%)\r\n•\tFC 100-120 lpm.\r\n•\tFR 20-30 rpm.\r\n•\tTA generalmente normal.\r\n•\tPulsos periféricos presentes.\r\n•\tRequiere reposición inicial con cristaloides y vigilancia estrecha.\r\nClase III (30-40%)\r\n•\tFC >120 lpm.\r\n•\tHipotensión.\r\n•\tTaquipnea importante.\r\n•\tSuele requerir transfusión sanguínea.\r\nClase IV (>40%)\r\n•\tHipotensión grave.\r\n•\tEstado mental alterado.\r\n•\tShock profundo.\r\n•\tReanimación masiva y control urgente del sangrado.\r\n¿Por qué las otras opciones son incorrectas?\r\nB. Más del 30% de pérdida ❌\r\nCon una pérdida superior al 30% ya es habitual encontrar hipotensión y un compromiso hemodinámico mucho más evidente.\r\nC. Más del 40% de pérdida ❌\r\nEl paciente presentaría un shock profundo, con hipotensión marcada y signos de hipoperfusión severa.\r\nD. Más del 50% de pérdida ❌\r\nUna pérdida de esta magnitud suele ser incompatible con la estabilidad hemodinámica observada en el caso.\r\n¿Cuál es la trampa del examen?\r\nMuchos estudiantes asocian:\r\nTaquicardia = choque grave.\r\nSin embargo, en trauma la presión arterial puede permanecer normal durante fases iniciales gracias a los mecanismos compensadores.\r\nPor ello, la taquicardia con TA conservada es típica del choque hemorrágico clase II.\r\nRegla de oro para residencia\r\nFC 100-120 + TA normal\r\n↓\r\nChoque hemorrágico Clase II (15-30% de pérdida sanguínea).\r\nPerlas de examen\r\n✅ La hipotensión es un signo tardío del choque hemorrágico.\r\n✅ La taquicardia suele ser el primer dato clínico de pérdida significativa de sangre.\r\n✅ El objetivo inicial es controlar la hemorragia y realizar una reanimación guiada por la respuesta clínica.\r\nReferencias\r\n•\tATLS® (Advanced Trauma Life Support), American College of Surgeons.\r\n•\tSchwartz's Principles of Surgery.\r\n•\tManual AMIR – Cirugía General y Trauma."
  },
  {
    "id": "dr-q-eval1-7",
    "examArea": "Cirugía General / Trauma",
    "topic": "Cirugía General / Trauma",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un individuo llega al servicio de urgencias tras sufrir una herida por arma blanca en el sexto espacio intercostal izquierdo en la pared torácica anterior, y al examen físico presenta presión arterial de 80/50 mmHg, disminución de los tonos cardíacos y distensión yugular; ¿cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Neumotórax a tensión."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hemotórax."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Taponamiento cardíaco."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Rotura del bronquio principal."
      }
    ],
    "correctOptionId": "C",
    "explanation": "**Lo que debes saber para el examen:**\nAnte un traumatismo torácico penetrante con:\r\n•\tHipotensión.\r\n•\tIngurgitación yugular.\r\n•\tRuidos cardíacos apagados.\r\nDebe sospecharse:\r\nTaponamiento cardíaco.",
    "keyPoints": [],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una de las preguntas más clásicas de trauma.\r\nAnalicemos el caso\r\nEl paciente presenta una herida penetrante precordial y desarrolla:\r\n•\tHipotensión.\r\n•\tDistensión yugular.\r\n•\tDisminución de los tonos cardíacos.\r\nEstos tres hallazgos constituyen la:\r\nTríada de Beck.\r\nLa sangre acumulada dentro del saco pericárdico aumenta la presión intrapericárdica, impidiendo el adecuado llenado de los ventrículos y produciendo un shock obstructivo.\r\n¿Cuál es el tratamiento?\r\nEl tratamiento definitivo consiste en:\r\n•\tToracotomía urgente en el contexto de trauma penetrante con inestabilidad hemodinámica.\r\nComo medida temporal, en situaciones seleccionadas y cuando no se dispone de cirugía inmediata, puede realizarse una pericardiocentesis, aunque su utilidad en el trauma es limitada.\r\n¿Por qué las otras opciones son incorrectas?\r\nA. Neumotórax a tensión ❌\r\nTambién puede producir hipotensión e ingurgitación yugular, pero suele asociarse a:\r\n•\tAusencia o marcada disminución del murmullo vesicular unilateral.\r\n•\tHipersonoridad.\r\n•\tDesviación traqueal (hallazgo tardío).\r\nNo explica los ruidos cardíacos apagados.\r\nB. Hemotórax ❌\r\nProduce choque hemorrágico y disminución del murmullo vesicular, pero no la tríada clásica de Beck.\r\nD. Rotura del bronquio principal ❌\r\nSe manifiesta con enfisema subcutáneo masivo, fuga aérea persistente y neumotórax que no mejora tras el drenaje pleural.\r\n¿Cuál es la trampa del examen?\r\nMuchos estudiantes confunden el taponamiento cardíaco con el neumotórax a tensión, ya que ambos pueden producir:\r\n•\tHipotensión.\r\n•\tIngurgitación yugular.\r\nLa clave diferenciadora es:\r\nRuidos cardíacos apagados = Taponamiento cardíaco.\r\nRegla de oro para residencia\r\nHerida precordial + Tríada de Beck\r\n↓\r\nTaponamiento cardíaco hasta demostrar lo contrario.\r\nPerlas de examen\r\n✅ La tríada de Beck está formada por:\r\n•\tHipotensión.\r\n•\tIngurgitación yugular.\r\n•\tRuidos cardíacos apagados.\r\n✅ El taponamiento cardíaco produce un shock obstructivo.\r\n✅ Es una de las lesiones torácicas letales que deben identificarse y tratarse durante la evaluación primaria del ATLS.\r\nReferencias\r\n•\tATLS® (Advanced Trauma Life Support), American College of Surgeons.\r\n•\tSabiston Textbook of Surgery.\r\n•\tManual AMIR – Cirugía General y Trauma."
  },
  {
    "id": "dr-q-eval1-8",
    "examArea": "Enfermedades Infecciosas / Microbiología",
    "topic": "Enfermedades Infecciosas / Microbiología",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un varón de 26 años consulta por una masa submandibular derecha de crecimiento lento durante varias semanas. Refiere que hace dos días la lesión fistulizó a la piel, drenando material purulento con estructuras granulosas similares a \"granos de azufre\". El Gram del exudado muestra bacterias filamentosas grampositivas.\r\nCon respecto a la enfermedad que presenta el paciente, ¿cuál de las siguientes afirmaciones es FALSA?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "La bacteria causal es un bacilo grampositivo anaerobio."
      },
      {
        "id": "B",
        "label": "B",
        "text": "La forma clínica más frecuente es la cervicofacial."
      },
      {
        "id": "C",
        "label": "C",
        "text": "La presencia de \"granos de azufre\" es altamente característica de esta enfermedad."
      },
      {
        "id": "D",
        "label": "D",
        "text": "El tratamiento de elección es la gentamicina intravenosa."
      }
    ],
    "correctOptionId": "D",
    "explanation": "**Lo que debes saber para el examen:**\nAnte un paciente con:\r\n•\tMasa cervicofacial de evolución lenta.\r\n•\tFístulas cutáneas.\r\n•\t\"Granos de azufre\".\r\n•\tBacilos grampositivos filamentosos.\r\nDebe sospecharse:\r\nActinomicosis cervicofacial por Actinomyces israelii.",
    "keyPoints": [],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica para diferenciar Actinomyces de Nocardia, dos bacterias filamentosas grampositivas que suelen confundirse en los exámenes.\r\nAnalicemos el caso\r\nLas claves diagnósticas son:\r\n•\tMasa submandibular de crecimiento lento.\r\n•\tFormación de fístulas.\r\n•\tDrenaje con \"granos de azufre\".\r\n•\tBacilos grampositivos filamentosos.\r\nTodo ello es prácticamente diagnóstico de:\r\nActinomicosis cervicofacial.\r\nLa forma cervicofacial representa aproximadamente el 50-60 % de los casos y suele aparecer tras traumatismos o procedimientos odontológicos.\r\n¿Qué microorganismo la produce?\r\nActinomyces israelii\r\nCaracterísticas:\r\n•\tBacilo grampositivo filamentoso.\r\n•\tAnaerobio o microaerófilo.\r\n•\tNo ácido-alcohol resistente.\r\n•\tComensal de la cavidad oral, tubo digestivo y tracto genital femenino.\r\n¿Cuál es el tratamiento?\r\nEl tratamiento de elección es:\r\n•\tPenicilina G intravenosa en los casos graves.\r\n•\tPosteriormente, amoxicilina o penicilina oral durante varios meses.\r\nEn ocasiones se requiere drenaje quirúrgico de abscesos.\r\n¿Por qué las otras opciones son correctas?\r\nA. Bacilo grampositivo anaerobio ✅\r\nEs una característica clásica de Actinomyces.\r\nB. La forma cervicofacial es la más frecuente ✅\r\nEs la presentación más habitual de la enfermedad.\r\nC. \"Granos de azufre\" ✅\r\nConstituyen un hallazgo muy característico y altamente sugestivo de actinomicosis.\r\n¿Por qué la opción D es falsa?\r\nLa gentamicina no es eficaz como tratamiento de elección frente a Actinomyces.\r\nEl antibiótico clásico y de primera línea es:\r\nPenicilina G.\r\n¿Cuál es la trampa del examen?\r\nEl examen intenta que confundas:\r\nActinomyces\tNocardia\r\nAnaerobio\tAerobio\r\nNo ácido-alcohol resistente\tDébilmente ácido-alcohol resistente\r\nGranos de azufre\tNo característicos\r\nPenicilina\tTrimetoprim-sulfametoxazol\r\nRegla de oro para residencia\r\nGranos de azufre + masa cervicofacial + grampositivo filamentoso\r\n↓\r\nActinomyces → Penicilina.\r\nPerlas de examen\r\n✅ Actinomyces es anaerobio.\r\n✅ La forma cervicofacial es la presentación más frecuente.\r\n✅ Los granos de azufre son un hallazgo clásico de actinomicosis.\r\n✅ Nocardia es aerobia, parcialmente ácido-alcohol resistente y se trata con trimetoprim-sulfametoxazol, no con penicilina.\r\nReferencias\r\n•\tManual AMIR – Enfermedades Infecciosas.\r\n•\tMandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.\r\n•\tMurray. Microbiología Médica."
  },
  {
    "id": "dr-q-eval1-9",
    "examArea": "Farmacología / Enfermedades Infecciosas",
    "topic": "Farmacología / Enfermedades Infecciosas",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Con respecto a los antibióticos betalactámicos, ¿cuál de las siguientes afirmaciones es FALSA?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "El espectro de la ampicilina incluye Enterococcus faecalis, siendo infrecuentes las cepas resistentes."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Son antibióticos bactericidas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "La gran mayoría de los betalactámicos no incluyen Pseudomonas aeruginosa en su espectro."
      },
      {
        "id": "D",
        "label": "D",
        "text": "El ácido clavulánico tiene, por sí mismo, un potente efecto bactericida sobre la mayoría de los grampositivos."
      }
    ],
    "correctOptionId": "D",
    "explanation": "**Lo que debes saber para el examen:**\nCaracterísticas de los betalactámicos:\r\n•\tSon bactericidas.\r\n•\tActúan inhibiendo la síntesis de la pared celular mediante unión a las proteínas fijadoras de penicilina (PBP).\r\n•\tSolo algunos presentan actividad frente a Pseudomonas aeruginosa.\r\n•\tLos inhibidores de betalactamasas no sustituyen al antibiótico, sino que potencian su eficacia.",
    "keyPoints": [],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica de farmacología antimicrobiana.\r\nAnalicemos cada afirmación\r\nEl objetivo es identificar la afirmación falsa.\r\nOpción A ✅\r\nLa ampicilina cubre Enterococcus faecalis.\r\nEs correcta.\r\nLa ampicilina continúa siendo uno de los antibióticos de elección frente a E. faecalis, siempre que la cepa sea sensible.\r\nOpción B ✅\r\nLos betalactámicos son:\r\n•\tBactericidas.\r\nActúan inhibiendo la síntesis del peptidoglicano de la pared bacteriana.\r\nOpción C ✅\r\nLa mayoría de los betalactámicos no tienen actividad frente a Pseudomonas aeruginosa.\r\nSolo algunos antibióticos presentan cobertura, por ejemplo:\r\n•\tPiperacilina.\r\n•\tCeftazidima.\r\n•\tCefepima.\r\n•\tCeftolozano.\r\n•\tAztreonam.\r\n•\tImipenem.\r\n•\tMeropenem.\r\nOpción D ❌\r\nEsta es la afirmación falsa.\r\nEl ácido clavulánico:\r\n•\tEs un inhibidor suicida de las betalactamasas.\r\n•\tTiene actividad antibacteriana mínima o nula desde el punto de vista clínico.\r\n•\tSu utilidad consiste en proteger al betalactámico de la hidrólisis por las betalactamasas.\r\nNo debe considerarse un antibiótico bactericida por sí mismo.\r\n¿Cuál es la trampa del examen?\r\nMuchos estudiantes creen que:\r\nAmoxicilina-clavulanato = dos antibióticos activos.\r\nEn realidad:\r\n•\tAmoxicilina → antibiótico.\r\n•\tÁcido clavulánico → inhibidor de betalactamasas.\r\nRegla de oro para residencia\r\nClavulanato, sulbactam y tazobactam\r\n↓\r\nNo matan bacterias; protegen al betalactámico frente a las betalactamasas.\r\nPerlas de examen\r\n✅ Todos los betalactámicos son bactericidas.\r\n✅ Los inhibidores clásicos de betalactamasas son:\r\n•\tÁcido clavulánico.\r\n•\tSulbactam.\r\n•\tTazobactam.\r\n✅ Solo algunos betalactámicos tienen actividad frente a Pseudomonas aeruginosa.\r\n✅ La ampicilina mantiene excelente actividad frente a Enterococcus faecalis (no frente a E. faecium, que suele ser resistente).\r\nReferencias\r\n•\tManual AMIR – Enfermedades Infecciosas.\r\n•\tMandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.\r\n•\tKatzung. Farmacología Básica y Clínica."
  },
  {
    "id": "dr-q-eval1-10",
    "examArea": "Enfermedades Infecciosas / Microbiología",
    "topic": "Enfermedades Infecciosas / Microbiología",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Con respecto a Staphylococcus aureus, ¿cuál de las siguientes afirmaciones es FALSA?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "El principal factor para desarrollar infección por S. aureus es ser portador, siendo las narinas el principal reservorio."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Para el tratamiento de SAMR se puede utilizar meropenem."
      },
      {
        "id": "C",
        "label": "C",
        "text": "En las infecciones causadas por cepas productoras de leucocidina de Panton-Valentine se aconseja asociar al tratamiento clindamicina o linezolid."
      },
      {
        "id": "D",
        "label": "D",
        "text": "La descolonización nasal con mupirocina junto con el lavado corporal con clorhexidina ha demostrado reducir la tasa de infección quirúrgica."
      }
    ],
    "correctOptionId": "B",
    "explanation": "**Lo que debes saber para el examen:**\nSobre Staphylococcus aureus:\r\n•\tEl principal reservorio son las narinas.\r\n•\tEl estado de portador aumenta el riesgo de infección.\r\n•\tEl SAMR es resistente a prácticamente todos los betalactámicos convencionales.\r\n•\tLa mupirocina intranasal forma parte de las estrategias de descolonización.",
    "keyPoints": [],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica sobre SAMR y las estrategias de prevención de la infección por S. aureus.\r\nAnalicemos cada opción\r\nEl objetivo es identificar la afirmación falsa.\r\nOpción A ✅\r\nEs correcta.\r\nEl principal factor de riesgo para desarrollar una infección por S. aureus es ser portador nasal, ya que las narinas anteriores constituyen su principal reservorio.\r\nOpción B ❌\r\nEsta es la afirmación falsa.\r\nEl SAMR expresa la proteína PBP2a, que confiere resistencia a:\r\n•\tPenicilinas.\r\n•\tCefalosporinas convencionales.\r\n•\tCarbapenémicos (incluido meropenem).\r\nPor ello, meropenem no debe utilizarse para tratar infecciones por SAMR.\r\nOpción C ✅\r\nEs correcta.\r\nLas cepas productoras de la leucocidina de Panton-Valentine (PVL) producen una potente toxina responsable de necrosis tisular.\r\nSe recomienda asociar fármacos que inhiben la síntesis proteica, como:\r\n•\tClindamicina.\r\n•\tLinezolid.\r\nEstos antibióticos disminuyen la producción de toxinas.\r\nOpción D ✅\r\nEs correcta.\r\nLa descolonización nasal con mupirocina, asociada al baño corporal con clorhexidina, ha demostrado reducir la incidencia de infecciones quirúrgicas en pacientes portadores de S. aureus.\r\n¿Cuál es la trampa del examen?\r\nMuchos estudiantes recuerdan que:\r\nMeropenem es un antibiótico \"muy potente\".\r\nSin embargo, la potencia no supera el mecanismo de resistencia del SAMR.\r\nSiempre debes recordar:\r\nSAMR = resistencia a los betalactámicos convencionales por PBP2a.\r\nRegla de oro para residencia\r\nSAMR\r\n↓\r\nVancomicina, linezolid, daptomicina o ceftarolina.\r\nNunca meropenem como tratamiento dirigido.\r\nPerlas de examen\r\n✅ El principal reservorio de S. aureus son las narinas anteriores.\r\n✅ El estado de portador nasal aumenta significativamente el riesgo de infección.\r\n✅ Las cepas con leucocidina de Panton-Valentine producen infecciones cutáneas necrosantes y neumonía necrosante.\r\n✅ La mupirocina intranasal y la clorhexidina corporal forman parte de los protocolos de descolonización en pacientes seleccionados.\r\nReferencias\r\n•\tManual AMIR – Enfermedades Infecciosas.\r\n•\tMandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.\r\n•\tMurray. Microbiología Médica."
  },
  {
    "id": "dr-q-eval1-11",
    "examArea": "Farmacología / Enfermedades Infecciosas",
    "topic": "Farmacología / Enfermedades Infecciosas",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Con respecto a las quinolonas, ¿cuál de las siguientes afirmaciones es FALSA?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Son fármacos bactericidas."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Uno de los principales problemas que plantean es su escasa utilidad para el tratamiento de infecciones urinarias por gramnegativos, pues apenas se excretan por la orina."
      },
      {
        "id": "C",
        "label": "C",
        "text": "La biodisponibilidad oral del levofloxacino es cercana al 100%."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Su diana de acción es la girasa bacteriana."
      }
    ],
    "correctOptionId": "B",
    "explanation": "**Lo que debes saber para el examen:**\nLas quinolonas:\r\n•\tSon bactericidas.\r\n•\tInhiben la ADN girasa (topoisomerasa II) y la topoisomerasa IV.\r\n•\tPresentan excelente biodisponibilidad oral.\r\n•\tAlcanzan altas concentraciones en orina (excepto algunas excepciones como moxifloxacino, que no se utiliza para ITU).",
    "keyPoints": [],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica de farmacología porque evalúa el mecanismo de acción y las características farmacocinéticas de las fluoroquinolonas.\r\nAnalicemos cada opción\r\nOpción A ✅\r\nEs correcta.\r\nLas quinolonas son antibióticos:\r\n•\tBactericidas.\r\nSu acción depende de la concentración y producen muerte bacteriana al inhibir la replicación del ADN.\r\nOpción B ❌\r\nEsta es la afirmación falsa.\r\nLas principales fluoroquinolonas utilizadas en clínica, como:\r\n•\tCiprofloxacino.\r\n•\tLevofloxacino.\r\nse eliminan en gran parte por vía renal y alcanzan elevadas concentraciones urinarias, motivo por el cual han sido muy empleadas en las infecciones urinarias por gramnegativos.\r\nLa excepción importante para recordar es:\r\n•\tMoxifloxacino, que presenta escasa eliminación urinaria y no debe utilizarse para infecciones urinarias.\r\nOpción C ✅\r\nEs correcta.\r\nEl levofloxacino posee una biodisponibilidad oral cercana al 100 %, por lo que las dosis oral e intravenosa suelen ser equivalentes.\r\nOpción D ✅\r\nEs correcta.\r\nLas quinolonas inhiben:\r\n•\tADN girasa (topoisomerasa II), principalmente en gramnegativos.\r\n•\tTopoisomerasa IV, especialmente en grampositivos.\r\nEsto bloquea la replicación y transcripción del ADN bacteriano.\r\n¿Cuál es la trampa del examen?\r\nMuchos estudiantes memorizan que las quinolonas se usan para ITU, pero olvidan la excepción:\r\nMoxifloxacino NO sirve para infecciones urinarias.\r\nEl examen generaliza esta característica a todo el grupo, lo cual hace que la afirmación sea falsa.\r\nRegla de oro para residencia\r\nQuinolonas\r\n↓\r\nBactericidas + inhiben ADN girasa/topoisomerasa IV + excelente biodisponibilidad oral.\r\nCiprofloxacino y levofloxacino → ITU.\r\nMoxifloxacino → No ITU.\r\nPerlas de examen\r\n✅ Ciprofloxacino tiene excelente actividad frente a Pseudomonas aeruginosa.\r\n✅ Levofloxacino mejora la cobertura frente a Streptococcus pneumoniae.\r\n✅ Moxifloxacino posee buena actividad frente a anaerobios, pero no alcanza concentraciones urinarias adecuadas.\r\n✅ Las quinolonas pueden producir tendinopatía y rotura del tendón de Aquiles, prolongación del QT y alteraciones de la glucemia.\r\nReferencias\r\n•\tManual AMIR – Enfermedades Infecciosas.\r\n•\tMandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.\r\n•\tKatzung. Farmacología Básica y Clínica."
  },
  {
    "id": "dr-q-eval1-12",
    "examArea": "Enfermedades Infecciosas / Antibióticos",
    "topic": "Enfermedades Infecciosas / Antibióticos",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un paciente oncológico, portador de una sonda vesical, consulta por un cuadro compatible con infección urinaria complicada y recibe tratamiento empírico con cefotaxima intravenosa. Posteriormente, el laboratorio informa crecimiento de Pseudomonas aeruginosa en los hemocultivos, quedando pendiente el antibiograma.\r\nCon esta información preliminar, ¿cuál es la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Esperar el antibiograma y mantener tratamiento con cefotaxima."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Suspender la cefotaxima e iniciar tratamiento con ertapenem."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Cambiar el tratamiento a piperacilina-tazobactam."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Añadir trimetoprim-sulfametoxazol para conseguir sinergia y ampliar la cobertura."
      }
    ],
    "correctOptionId": "C",
    "explanation": "**Lo que debes saber para el examen:**\nCuando se identifica Pseudomonas aeruginosa:\r\n•\tDebe utilizarse un antibiótico antipseudomónico.\r\n•\tCefotaxima y ceftriaxona NO cubren Pseudomonas.\r\n•\tErtapenem NO tiene actividad frente a Pseudomonas.\r\n•\tEl tratamiento definitivo debe ajustarse según el antibiograma.",
    "keyPoints": [],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica sobre los betalactámicos con actividad antipseudomónica.\r\nAnalicemos el caso\r\nLas claves son:\r\n•\tPaciente oncológico.\r\n•\tInfección urinaria complicada.\r\n•\tHemocultivos positivos para Pseudomonas aeruginosa.\r\n•\tTratamiento empírico con cefotaxima.\r\nEn cuanto se identifica Pseudomonas, el tratamiento debe modificarse porque:\r\nLa cefotaxima no tiene actividad frente a este microorganismo.\r\nPor ello, la mejor conducta es iniciar un antibiótico activo frente a Pseudomonas, siendo piperacilina-tazobactam una excelente opción empírica.\r\n¿Qué antibióticos cubren Pseudomonas?\r\nLos más importantes para el examen son:\r\nBetalactámicos\r\n•\tPiperacilina-tazobactam.\r\n•\tCeftazidima.\r\n•\tCefepima.\r\n•\tCeftolozano-tazobactam.\r\n•\tImipenem.\r\n•\tMeropenem.\r\n•\tAztreonam.\r\nOtros\r\n•\tCiprofloxacino.\r\n•\tLevofloxacino (según sensibilidad).\r\n•\tAminoglucósidos.\r\n¿Por qué las otras opciones son incorrectas?\r\nA. Mantener cefotaxima ❌\r\nLa cefotaxima carece de actividad frente a Pseudomonas aeruginosa.\r\nB. Ertapenem ❌\r\nEl ertapenem es la gran excepción entre los carbapenémicos:\r\nNo cubre Pseudomonas.\r\nD. Añadir trimetoprim-sulfametoxazol ❌\r\nEl TMP-SMX no forma parte del tratamiento habitual de las infecciones por Pseudomonas y no aporta la sinergia buscada.\r\n¿Cuál es la trampa del examen?\r\nEl examen suele preguntar:\r\n¿Cuál es el carbapenémico que NO cubre Pseudomonas?\r\nLa respuesta siempre es:\r\nErtapenem.\r\nRegla de oro para residencia\r\nPseudomonas\r\n↓\r\nPiperacilina-tazobactam, cefepima, ceftazidima, meropenem o imipenem.\r\nNunca cefotaxima, ceftriaxona ni ertapenem.\r\nPerlas de examen\r\n✅ Cefotaxima y ceftriaxona no tienen actividad frente a Pseudomonas aeruginosa.\r\n✅ Ertapenem es el único carbapenémico de uso habitual que no cubre Pseudomonas.\r\n✅ Piperacilina-tazobactam constituye una de las opciones empíricas de elección en infecciones graves por Pseudomonas.\r\n✅ El tratamiento definitivo siempre debe ajustarse al antibiograma para favorecer el uso racional de antibióticos.\r\nReferencias\r\n•\tManual AMIR – Enfermedades Infecciosas.\r\n•\tMandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.\r\n•\tSanford Guide to Antimicrobial Therapy."
  },
  {
    "id": "dr-q-eval1-13",
    "examArea": "Farmacología / Enfermedades Infecciosas",
    "topic": "Farmacología / Enfermedades Infecciosas",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Con respecto a los siguientes esquemas antibióticos, ¿cuál de las siguientes afirmaciones es FALSA?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "La amoxicilina, para cubrir grampositivos y anaerobios, asociada a un aminoglucósido como cobertura frente a gramnegativos, es una buena opción para el tratamiento de infecciones intraabdominales por flora mixta."
      },
      {
        "id": "B",
        "label": "B",
        "text": "El metronidazol actúa frente a anaerobios."
      },
      {
        "id": "C",
        "label": "C",
        "text": "La monitorización de los niveles valle de gentamicina es útil para el control de la nefrotoxicidad por aminoglucósidos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "El espectro del aztreonam es comparable al de los aminoglucósidos en general."
      }
    ],
    "correctOptionId": "A",
    "explanation": "**Lo que debes saber para el examen:**\nEn las infecciones intraabdominales por flora mixta debe cubrirse:\r\n•\tGrampositivos.\r\n•\tEnterobacterias gramnegativas.\r\n•\tAnaerobios, especialmente Bacteroides fragilis.",
    "keyPoints": [],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica porque integra el espectro de acción de varios antibióticos.\r\nAnalicemos cada opción\r\nOpción A ❌\r\nEs la afirmación falsa.\r\nAunque la amoxicilina tiene actividad frente a algunos grampositivos y anaerobios sensibles, no cubre adecuadamente Bacteroides fragilis, ya que este produce betalactamasas.\r\nPor ello, la combinación:\r\nAmoxicilina + aminoglucósido\r\nno es un tratamiento adecuado para una infección intraabdominal por flora mixta.\r\nLas alternativas correctas incluyen:\r\n•\tAmoxicilina-clavulanato.\r\n•\tPiperacilina-tazobactam.\r\n•\tCeftriaxona + metronidazol.\r\n•\tCefotaxima + metronidazol.\r\nOpción B ✅\r\nEs correcta.\r\nEl metronidazol presenta una excelente actividad frente a:\r\n•\tAnaerobios estrictos.\r\n•\tBacteroides fragilis.\r\n•\tClostridium spp.\r\nOpción C ✅\r\nEs correcta.\r\nLa nefrotoxicidad por aminoglucósidos se relaciona con concentraciones elevadas mantenidas.\r\nPor ello:\r\n•\tLos niveles valle permiten valorar el riesgo de toxicidad renal.\r\nOpción D ✅\r\nEs correcta.\r\nEl aztreonam tiene un espectro muy parecido al de los aminoglucósidos:\r\n•\tBacilos gramnegativos aerobios.\r\n•\tIncluye Pseudomonas aeruginosa.\r\n•\tNo tiene actividad frente a grampositivos ni anaerobios.\r\n¿Cuál es la trampa del examen?\r\nMuchos estudiantes recuerdan que:\r\nLa amoxicilina cubre anaerobios.\r\nPero olvidan que el principal anaerobio de las infecciones intraabdominales es:\r\nBacteroides fragilis, productor de betalactamasas.\r\nPor eso la amoxicilina debe asociarse a un inhibidor de betalactamasas o sustituirse por otro esquema con mejor cobertura.\r\nRegla de oro para residencia\r\nInfección intraabdominal\r\n↓\r\nSiempre cubrir Bacteroides fragilis.\r\nMetronidazol o betalactámico con inhibidor de betalactamasas.\r\nPerlas de examen\r\n✅ Metronidazol es uno de los mejores antibióticos frente a anaerobios.\r\n✅ Los niveles valle de aminoglucósidos ayudan a prevenir la nefrotoxicidad.\r\n✅ Aztreonam cubre únicamente gramnegativos aerobios, incluido Pseudomonas aeruginosa.\r\n✅ Amoxicilina sola no es adecuada para infecciones intraabdominales por flora mixta debido a su escasa actividad frente a Bacteroides fragilis.\r\nReferencias\r\n•\tManual AMIR – Enfermedades Infecciosas.\n<truncated 163359 bytes>\n\nNOTE: The output was truncated because it was too long. Use a more targeted query or a smaller range to get the information you need."
  }
];
