import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Primera Evaluación — Reto del Dr. Q.
 * Fuente: documento oficial revisado por el Dr. Q ("PREGUNTAS PRIMERA EVALUACION").
 * El enunciado, las opciones, la respuesta correcta y las explicaciones deben
 * coincidir de forma literal con ese documento.
 */
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
    "statement": "Una mujer de 22 años presenta una parada cardiorrespiratoria con un ritmo desfibrilable. Se están realizando compresiones torácicas de alta calidad y ventilaciones. Ya se ha administrado una descarga con el desfibrilador y se ha canalizado una vía venosa periférica.\n¿Cuál de las siguientes actuaciones sería la más correcta a continuación?",
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
    "explanation": "Tras una sola descarga, la conducta correcta es continuar RCP de alta calidad durante 2 minutos, sin administrar todavía amiodarona ni atropina.\nLa amiodarona (300 mg IV/IO) está indicada en la fibrilación ventricular o taquicardia ventricular sin pulso refractarias, pero después de la tercera descarga, no tras la primera.\n\nLo que debes saber para el examen\nEn un paro con FV/TV sin pulso:\n• Desfibrilación precoz.\n• RCP de alta calidad.\n• Tras la 1.ª descarga → RCP 2 minutos.\n• Tras la 2.ª descarga → RCP + adrenalina 1 mg.\n• Tras la 3.ª descarga → RCP + amiodarona 300 mg.\nTema: Soporte Vital Avanzado (SVA).",
    "keyPoints": [],
    "theoryContent": "Tras una sola descarga, la conducta correcta es continuar RCP de alta calidad durante 2 minutos, sin administrar todavía amiodarona ni atropina.\nLa amiodarona (300 mg IV/IO) está indicada en la fibrilación ventricular o taquicardia ventricular sin pulso refractarias, pero después de la tercera descarga, no tras la primera.\n\nLo que debes saber para el examen\nEn un paro con FV/TV sin pulso:\n• Desfibrilación precoz.\n• RCP de alta calidad.\n• Tras la 1.ª descarga → RCP 2 minutos.\n• Tras la 2.ª descarga → RCP + adrenalina 1 mg.\n• Tras la 3.ª descarga → RCP + amiodarona 300 mg.\nTema: Soporte Vital Avanzado (SVA).\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nAnalicemos el caso\nEl dato clave es:\n\"Ya se ha administrado una descarga.\"\nEsto significa que estamos justo después de la primera descarga, por lo que aún no corresponde administrar fármacos antiarrítmicos.\nSecuencia correcta que debes memorizar\n1.ª descarga → RCP 2 minutos.\n2.ª descarga → RCP + adrenalina 1 mg.\n3.ª descarga → RCP + amiodarona 300 mg IV.\n¿Por qué todas las opciones son incorrectas?\nA. Amiodarona 150 mg ❌\nEs una dosis posterior, no indicada en este momento.\nB. Amiodarona 300 mg ❌\nCorrecta en el algoritmo, pero solo tras la tercera descarga, no tras la primera.\nC. Atropina 1 mg ❌\nNo tiene indicación en paro cardíaco.\n¿Cuál es la trampa del examen?\nEl examen intenta que recuerdes cuándo se administra cada fármaco, no solo cuál.\nAquí el error típico es:\n👉 Ver \"ritmo desfibrilable\" y marcar amiodarona automáticamente.\nPero lo importante es el momento del algoritmo.\nRegla de oro para residencia\nFV/TV sin pulso\n• 1.ª descarga → RCP.\n• 2.ª descarga → Adrenalina.\n• 3.ª descarga → Amiodarona 300 mg.\nPerlas de examen\n✅ La cronología del algoritmo es clave.\n✅ La amiodarona nunca se administra tras la primera descarga.\n✅ La atropina no tiene papel en el paro cardíaco.\n✅ Prioridad absoluta:\nRCP de alta calidad + desfibrilación precoz.\nReferencias\n• European Resuscitation Council (ERC) Guidelines.\n• American Heart Association (AHA) ACLS Guidelines.\n• Manual AMIR – Cardiología."
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
    "statement": "Una persona presenta una parada cardiorrespiratoria. Tras comprobar la ausencia de pulso, se inicia la reanimación cardiopulmonar básica.\n¿Cuál de las siguientes afirmaciones es correcta con respecto a la reanimación cardiopulmonar?",
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
    "explanation": "En el adulto, la RCP básica debe iniciarse inmediatamente con una relación de 30 compresiones torácicas por 2 ventilaciones, manteniendo compresiones de alta calidad hasta la llegada de un desfibrilador o de un equipo de soporte vital avanzado.\n\nLo que debes saber para el examen\nEn la RCP básica del adulto:\n• 30 compresiones : 2 ventilaciones.\n• Frecuencia: 100-120 compresiones/minuto.\n• Profundidad: 5-6 cm.\n• Permitir la reexpansión completa del tórax.\n• Minimizar las interrupciones.\nTema: Reanimación cardiopulmonar básica.",
    "keyPoints": [],
    "theoryContent": "En el adulto, la RCP básica debe iniciarse inmediatamente con una relación de 30 compresiones torácicas por 2 ventilaciones, manteniendo compresiones de alta calidad hasta la llegada de un desfibrilador o de un equipo de soporte vital avanzado.\n\nLo que debes saber para el examen\nEn la RCP básica del adulto:\n• 30 compresiones : 2 ventilaciones.\n• Frecuencia: 100-120 compresiones/minuto.\n• Profundidad: 5-6 cm.\n• Permitir la reexpansión completa del tórax.\n• Minimizar las interrupciones.\nTema: Reanimación cardiopulmonar básica.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica sobre el algoritmo inicial de soporte vital.\nAnalicemos el caso\nEl paciente presenta una:\n• Parada cardiorrespiratoria.\n• Ausencia de pulso.\nLa actuación inmediata consiste en iniciar una RCP de alta calidad, utilizando la relación universal para adultos:\n30 compresiones por 2 ventilaciones.\nEsta secuencia debe mantenerse hasta disponer de un desfibrilador o de un equipo de soporte vital avanzado.\n¿Por qué las otras opciones son incorrectas?\nB. Realizar cardioversión ❌\nLa cardioversión sincronizada se utiliza únicamente en taquiarritmias con pulso.\nEn un paciente sin pulso, si el ritmo es desfibrilable, el tratamiento es la desfibrilación, nunca la cardioversión.\nC. Administrar 3 mg de atropina en asistolia ❌\nLa atropina ya no forma parte del algoritmo de parada cardiorrespiratoria.\nEn asistolia se administra:\n• RCP de alta calidad.\n• Adrenalina 1 mg cada 3-5 minutos.\n• Búsqueda y tratamiento de causas reversibles (4H y 4T).\nD. No administrar adrenalina en fibrilación ventricular ❌\nEs falso.\nEn la fibrilación ventricular o taquicardia ventricular sin pulso, la adrenalina sí está indicada, iniciándose tras la segunda descarga y repitiéndose cada 3-5 minutos.\n¿Cuál es la trampa del examen?\nMuchos estudiantes confunden:\n• Cardioversión → Paciente con pulso.\n• Desfibrilación → Paciente sin pulso.\nAdemás, algunos continúan asociando la atropina al tratamiento de la asistolia, pese a que fue retirada de los algoritmos actuales.\nRegla de oro para residencia\nPaciente sin pulso\n↓\nIniciar inmediatamente RCP 30:2.\nFV/TV sin pulso → Desfibrilar.\nAsistolia/AESP → Adrenalina + RCP.\nPerlas de examen\n✅ La relación 30:2 es el estándar en adultos durante la RCP básica.\n✅ La desfibrilación solo está indicada en fibrilación ventricular y taquicardia ventricular sin pulso.\n✅ La atropina ya no tiene indicación en el manejo de la parada cardiorrespiratoria.\n✅ La adrenalina se utiliza en todos los ritmos de parada, variando únicamente el momento de administración según el algoritmo.\nReferencias\n• European Resuscitation Council (ERC) Guidelines.\n• American Heart Association (AHA) ACLS Guidelines.\n• Manual AMIR – Cardiología."
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
    "statement": "Un hombre de 67 años presenta una parada cardiorrespiratoria. En el monitor se observa una asistolia. Se inicia inmediatamente reanimación cardiopulmonar de alta calidad y se canaliza una vía intravenosa.\n¿Cuál de las siguientes actuaciones es la más adecuada?",
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
    "explanation": "La asistolia es un ritmo no desfibrilable. El tratamiento consiste en RCP de alta calidad, administración de adrenalina 1 mg IV/IO cada 3-5 minutos y búsqueda activa de las causas reversibles (4H y 4T). Ni la desfibrilación, ni la amiodarona, ni la atropina están indicadas.\n\nLo que debes saber para el examen\nEn los ritmos no desfibrilables (asistolia y actividad eléctrica sin pulso):\n• RCP de alta calidad.\n• Adrenalina 1 mg IV/IO cada 3-5 minutos.\n• Reevaluar el ritmo cada 2 minutos.\n• Buscar y tratar las 4H y 4T.\nTema: Algoritmo de parada cardiorrespiratoria en ritmos no desfibrilables.",
    "keyPoints": [],
    "theoryContent": "La asistolia es un ritmo no desfibrilable. El tratamiento consiste en RCP de alta calidad, administración de adrenalina 1 mg IV/IO cada 3-5 minutos y búsqueda activa de las causas reversibles (4H y 4T). Ni la desfibrilación, ni la amiodarona, ni la atropina están indicadas.\n\nLo que debes saber para el examen\nEn los ritmos no desfibrilables (asistolia y actividad eléctrica sin pulso):\n• RCP de alta calidad.\n• Adrenalina 1 mg IV/IO cada 3-5 minutos.\n• Reevaluar el ritmo cada 2 minutos.\n• Buscar y tratar las 4H y 4T.\nTema: Algoritmo de parada cardiorrespiratoria en ritmos no desfibrilables.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica de soporte vital avanzado.\nAnalicemos el caso\nEl dato clave del enunciado es:\nAsistolia.\nLa asistolia corresponde a un:\nRitmo no desfibrilable.\nPor ello, la prioridad es:\n• RCP de alta calidad.\n• Administración precoz de adrenalina.\n• Identificación y tratamiento de las causas reversibles.\n¿Qué ritmos son desfibrilables?\nDesfibrilables\n• Fibrilación ventricular.\n• Taquicardia ventricular sin pulso.\nNo desfibrilables\n• Asistolia.\n• Actividad eléctrica sin pulso (AESP).\n¿Por qué las otras opciones son incorrectas?\nA. Desfibrilación inmediata ❌\nLa desfibrilación no está indicada en la asistolia porque no existe una actividad eléctrica susceptible de reiniciarse.\nB. Amiodarona 300 mg IV ❌\nLa amiodarona solo se administra en FV o TV sin pulso refractarias, tras la tercera descarga.\nD. Atropina 1 mg IV ❌\nLa atropina fue retirada de los algoritmos de parada cardíaca y no tiene indicación en la asistolia.\n¿Cuál es la trampa del examen?\nMuchos estudiantes memorizan los fármacos, pero olvidan identificar primero el tipo de ritmo.\nSiempre debes preguntarte:\n¿Es un ritmo desfibrilable o no?\nSi la respuesta es asistolia, nunca debes desfibrilar ni administrar amiodarona.\nRegla de oro para residencia\nAsistolia o AESP\n↓\nRCP + adrenalina + búsqueda de las 4H y 4T.\nNunca desfibrilar.\nPerlas de examen\n✅ La asistolia y la AESP son ritmos no desfibrilables.\n✅ La adrenalina debe administrarse lo antes posible y repetirse cada 3-5 minutos.\n✅ La atropina ya no forma parte del algoritmo de parada cardiorrespiratoria.\n✅ Las 4H y 4T deben buscarse de forma sistemática durante toda la reanimación.\nReferencias\n• European Resuscitation Council (ERC) Guidelines.\n• American Heart Association (AHA) ACLS Guidelines.\n• Manual AMIR – Cardiología."
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
    "statement": "Un adolescente es apuñalado y golpeado durante una reyerta callejera. A la llegada del equipo de emergencias se encuentra inconsciente. Presenta tres heridas penetrantes en el hemitórax izquierdo por las que entra y sale aire con la respiración, así como dos heridas incisas en la cara anterior y medial del muslo derecho con hemorragia pulsátil y abundante.\n¿Cuál es la actitud que debe adoptarse de forma inmediata antes de la llegada al hospital?",
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
    "explanation": "El paciente presenta un traumatismo penetrante torácico con herida aspirativa y una hemorragia arterial externa potencialmente exanguinante. En el ámbito prehospitalario la prioridad es el control inmediato de las lesiones que comprometen la vida, mediante un apósito oclusivo ventilado (o sellado por tres lados) sobre las heridas torácicas, control de la hemorragia mediante compresión directa o torniquete si es necesario y traslado urgente a un centro de trauma.\n\nLo que debes saber para el examen\nEn el trauma penetrante:\n• Control inmediato de la hemorragia masiva.\n• Sellado de las heridas torácicas aspirativas con apósito oclusivo ventilado.\n• Evitar retrasos innecesarios en el traslado.\n• Priorizar siempre las intervenciones que salvan la vida.\nTema: Manejo inicial del trauma (ATLS).",
    "keyPoints": [],
    "theoryContent": "El paciente presenta un traumatismo penetrante torácico con herida aspirativa y una hemorragia arterial externa potencialmente exanguinante. En el ámbito prehospitalario la prioridad es el control inmediato de las lesiones que comprometen la vida, mediante un apósito oclusivo ventilado (o sellado por tres lados) sobre las heridas torácicas, control de la hemorragia mediante compresión directa o torniquete si es necesario y traslado urgente a un centro de trauma.\n\nLo que debes saber para el examen\nEn el trauma penetrante:\n• Control inmediato de la hemorragia masiva.\n• Sellado de las heridas torácicas aspirativas con apósito oclusivo ventilado.\n• Evitar retrasos innecesarios en el traslado.\n• Priorizar siempre las intervenciones que salvan la vida.\nTema: Manejo inicial del trauma (ATLS).\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica del manejo inicial del paciente politraumatizado.\nAnalicemos el caso\nEl paciente presenta dos lesiones potencialmente mortales:\n• Heridas torácicas aspirativas, compatibles con un neumotórax abierto.\n• Hemorragia arterial activa en el muslo, con riesgo de choque hemorrágico.\nEl tratamiento inicial debe dirigirse inmediatamente a controlar ambas situaciones antes del traslado.\n¿Qué debe hacerse?\n• Sellar la herida torácica con un apósito oclusivo ventilado (o un sello oclusivo fijado por tres lados si no se dispone de un dispositivo comercial), evitando el desarrollo de un neumotórax a tensión.\n• Controlar la hemorragia externa mediante compresión directa y, si no es suficiente, colocar un torniquete proximal.\n• Traslado urgente a un centro con capacidad para cirugía de trauma.\n¿Por qué las otras opciones son incorrectas?\nB. Intubación y fluidoterapia agresiva durante el traslado ❌\nLa intubación no debe retrasar el control de las lesiones que amenazan la vida. Además, la reposición agresiva de líquidos puede empeorar el sangrado antes del control de la hemorragia.\nC. Exploración neurológica detallada ❌\nLa valoración neurológica completa forma parte de la evaluación secundaria. Antes deben resolverse las amenazas inmediatas según el enfoque ABCDE.\nD. Vendaje compresivo de todas las heridas y fluidoterapia agresiva ❌\nLas heridas torácicas aspirativas requieren un apósito oclusivo, no un simple vendaje compresivo. Asimismo, la fluidoterapia agresiva no sustituye el control precoz de la hemorragia.\n¿Cuál es la trampa del examen?\nMuchos estudiantes se centran en el estado de inconsciencia o en la necesidad de intubación.\nSin embargo, en trauma el principio fundamental es:\nTratar primero aquello que mata primero.\nEn este caso:\n• Neumotórax abierto.\n• Hemorragia arterial masiva.\nRegla de oro para residencia\nTrauma penetrante\n↓\nControl de hemorragia + sellado de heridas torácicas + traslado inmediato.\nPerlas de examen\n✅ Las heridas torácicas aspirativas deben cubrirse con un apósito oclusivo ventilado.\n✅ La hemorragia externa masiva debe controlarse inmediatamente con compresión o torniquete.\n✅ El manejo del politraumatizado sigue la secuencia ABCDE del ATLS.\n✅ Nunca debe retrasarse el traslado por procedimientos que no cambien la supervivencia inmediata.\nReferencias\n• ATLS® (Advanced Trauma Life Support), American College of Surgeons.\n• European Trauma Course Manual.\n• Manual AMIR – Cirugía General y Trauma."
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
    "explanation": "El neumotórax a tensión constituye una de las lesiones torácicas letales inmediatas descritas en el protocolo ATLS, ya que puede provocar rápidamente colapso pulmonar, desviación mediastínica, disminución del retorno venoso, shock obstructivo y paro cardiorrespiratorio. Por ello, debe descomprimirse de forma inmediata, incluso antes de realizar estudios complementarios.\n\nLo que debes saber para el examen\nEn el paciente politraumatizado:\n• El manejo sigue la secuencia ABCDE.\n• Se trata primero la lesión que mata antes.\n• El neumotórax a tensión se corrige de inmediato mediante descompresión torácica y posterior drenaje pleural.\nTema: Manejo inicial del paciente politraumatizado (ATLS).",
    "keyPoints": [],
    "theoryContent": "El neumotórax a tensión constituye una de las lesiones torácicas letales inmediatas descritas en el protocolo ATLS, ya que puede provocar rápidamente colapso pulmonar, desviación mediastínica, disminución del retorno venoso, shock obstructivo y paro cardiorrespiratorio. Por ello, debe descomprimirse de forma inmediata, incluso antes de realizar estudios complementarios.\n\nLo que debes saber para el examen\nEn el paciente politraumatizado:\n• El manejo sigue la secuencia ABCDE.\n• Se trata primero la lesión que mata antes.\n• El neumotórax a tensión se corrige de inmediato mediante descompresión torácica y posterior drenaje pleural.\nTema: Manejo inicial del paciente politraumatizado (ATLS).\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una de las preguntas más clásicas de trauma.\nAnalicemos el caso\nEl paciente presenta varias lesiones graves, pero el examen pregunta:\n¿Cuál debe tratarse primero?\nLa respuesta se basa en el principio fundamental del ATLS:\nTratar primero aquello que compromete la vida de forma inmediata.\nEntre las opciones, el neumotórax a tensión es la lesión que puede producir la muerte en pocos minutos si no se descomprime.\n¿Qué ocurre en un neumotórax a tensión?\nLa entrada de aire al espacio pleural sin posibilidad de salida produce:\n• Colapso del pulmón afectado.\n• Desviación del mediastino.\n• Compresión de la vena cava.\n• Disminución del retorno venoso.\n• Shock obstructivo.\n• Parada cardiorrespiratoria.\nEl tratamiento no debe esperar a la radiografía.\nSe realiza:\n• Descompresión inmediata (aguja o toracostomía según los recursos disponibles).\n• Posteriormente, colocación de tubo de drenaje torácico.\n¿Por qué las otras opciones son incorrectas?\nA. Fractura abierta de tibia ❌\nEs una lesión grave que requiere estabilización, antibióticos y tratamiento quirúrgico, pero raramente compromete la vida de forma inmediata.\nB. Hemoperitoneo por rotura esplénica ❌\nPuede causar un choque hemorrágico y requerir cirugía urgente, pero primero deben resolverse las lesiones que impiden la oxigenación y ventilación.\nC. Hematoma epidural ❌\nEs una urgencia neuroquirúrgica, pero antes debe asegurarse una adecuada ventilación y circulación.\n¿Cuál es la trampa del examen?\nMuchos estudiantes eligen el hematoma epidural o el hemoperitoneo por su gravedad.\nSin embargo, en trauma la prioridad no depende de la lesión más espectacular, sino de la que mata antes.\nRegla de oro para residencia\nEn trauma:\nPrimero lo que impide respirar.\nDespués lo que hace sangrar.\nLuego el resto de lesiones.\nPerlas de examen\n✅ El neumotórax a tensión es una de las lesiones torácicas letales inmediatas del ATLS.\n✅ El diagnóstico es clínico y no debe retrasarse el tratamiento esperando pruebas de imagen.\n✅ La descompresión inmediata salva la vida; el drenaje pleural constituye el tratamiento definitivo.\n✅ El protocolo ABCDE siempre prioriza la corrección de las alteraciones que comprometen la vía aérea, la ventilación y la circulación.\nReferencias\n• ATLS® (Advanced Trauma Life Support), American College of Surgeons.\n• European Trauma Course Manual.\n• Manual AMIR – Cirugía General y Trauma."
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
    "explanation": "Los signos vitales son compatibles con un choque hemorrágico clase II (ATLS), caracterizado por una pérdida aproximada del 15-30% de la volemia, con taquicardia (>100 lpm), taquipnea, presión arterial habitualmente conservada y signos iniciales de hipoperfusión periférica.\n\nLo que debes saber para el examen\nClasificación ATLS del choque hemorrágico:\n• Clase I: <15% de pérdida.\n• Clase II: 15-30% de pérdida.\n• Clase III: 30-40% de pérdida.\n• Clase IV: >40% de pérdida.\nTema: Choque hemorrágico en el paciente politraumatizado.",
    "keyPoints": [],
    "theoryContent": "Los signos vitales son compatibles con un choque hemorrágico clase II (ATLS), caracterizado por una pérdida aproximada del 15-30% de la volemia, con taquicardia (>100 lpm), taquipnea, presión arterial habitualmente conservada y signos iniciales de hipoperfusión periférica.\n\nLo que debes saber para el examen\nClasificación ATLS del choque hemorrágico:\n• Clase I: <15% de pérdida.\n• Clase II: 15-30% de pérdida.\n• Clase III: 30-40% de pérdida.\n• Clase IV: >40% de pérdida.\nTema: Choque hemorrágico en el paciente politraumatizado.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica basada en la clasificación del choque hemorrágico del ATLS.\nAnalicemos el caso\nEl paciente presenta:\n• FC: 115 lpm.\n• FR: 25 rpm.\n• Presión arterial conservada.\n• Pulso radial palpable.\n• Relleno capilar discretamente prolongado.\nEstos hallazgos indican un paciente que ha comenzado a compensar una pérdida moderada de sangre, pero que aún mantiene la presión arterial.\nEsto corresponde a:\nChoque hemorrágico clase II.\n¿Cómo recordar las clases del choque hemorrágico?\nClase I (<15%)\n• FC <100 lpm.\n• TA normal.\n• Sin cambios importantes.\nClase II (15-30%)\n• FC 100-120 lpm.\n• FR 20-30 rpm.\n• TA generalmente normal.\n• Pulsos periféricos presentes.\n• Requiere reposición inicial con cristaloides y vigilancia estrecha.\nClase III (30-40%)\n• FC >120 lpm.\n• Hipotensión.\n• Taquipnea importante.\n• Suele requerir transfusión sanguínea.\nClase IV (>40%)\n• Hipotensión grave.\n• Estado mental alterado.\n• Shock profundo.\n• Reanimación masiva y control urgente del sangrado.\n¿Por qué las otras opciones son incorrectas?\nB. Más del 30% de pérdida ❌\nCon una pérdida superior al 30% ya es habitual encontrar hipotensión y un compromiso hemodinámico mucho más evidente.\nC. Más del 40% de pérdida ❌\nEl paciente presentaría un shock profundo, con hipotensión marcada y signos de hipoperfusión severa.\nD. Más del 50% de pérdida ❌\nUna pérdida de esta magnitud suele ser incompatible con la estabilidad hemodinámica observada en el caso.\n¿Cuál es la trampa del examen?\nMuchos estudiantes asocian:\nTaquicardia = choque grave.\nSin embargo, en trauma la presión arterial puede permanecer normal durante fases iniciales gracias a los mecanismos compensadores.\nPor ello, la taquicardia con TA conservada es típica del choque hemorrágico clase II.\nRegla de oro para residencia\nFC 100-120 + TA normal\n↓\nChoque hemorrágico Clase II (15-30% de pérdida sanguínea).\nPerlas de examen\n✅ La hipotensión es un signo tardío del choque hemorrágico.\n✅ La taquicardia suele ser el primer dato clínico de pérdida significativa de sangre.\n✅ El objetivo inicial es controlar la hemorragia y realizar una reanimación guiada por la respuesta clínica.\nReferencias\n• ATLS® (Advanced Trauma Life Support), American College of Surgeons.\n• Schwartz's Principles of Surgery.\n• Manual AMIR – Cirugía General y Trauma."
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
    "explanation": "El paciente presenta la clásica tríada de Beck:\n• Hipotensión arterial.\n• Ingurgitación yugular.\n• Ruidos cardíacos apagados.\nEn el contexto de un traumatismo penetrante torácico, estos hallazgos son altamente sugestivos de taponamiento cardíaco, una urgencia vital que requiere descompresión inmediata.\n\nLo que debes saber para el examen\nAnte un traumatismo torácico penetrante con:\n• Hipotensión.\n• Ingurgitación yugular.\n• Ruidos cardíacos apagados.\nDebe sospecharse:\nTaponamiento cardíaco.\nTema: Lesiones torácicas letales del ATLS.",
    "keyPoints": [],
    "theoryContent": "El paciente presenta la clásica tríada de Beck:\n• Hipotensión arterial.\n• Ingurgitación yugular.\n• Ruidos cardíacos apagados.\nEn el contexto de un traumatismo penetrante torácico, estos hallazgos son altamente sugestivos de taponamiento cardíaco, una urgencia vital que requiere descompresión inmediata.\n\nLo que debes saber para el examen\nAnte un traumatismo torácico penetrante con:\n• Hipotensión.\n• Ingurgitación yugular.\n• Ruidos cardíacos apagados.\nDebe sospecharse:\nTaponamiento cardíaco.\nTema: Lesiones torácicas letales del ATLS.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una de las preguntas más clásicas de trauma.\nAnalicemos el caso\nEl paciente presenta una herida penetrante precordial y desarrolla:\n• Hipotensión.\n• Distensión yugular.\n• Disminución de los tonos cardíacos.\nEstos tres hallazgos constituyen la:\nTríada de Beck.\nLa sangre acumulada dentro del saco pericárdico aumenta la presión intrapericárdica, impidiendo el adecuado llenado de los ventrículos y produciendo un shock obstructivo.\n¿Cuál es el tratamiento?\nEl tratamiento definitivo consiste en:\n• Toracotomía urgente en el contexto de trauma penetrante con inestabilidad hemodinámica.\nComo medida temporal, en situaciones seleccionadas y cuando no se dispone de cirugía inmediata, puede realizarse una pericardiocentesis, aunque su utilidad en el trauma es limitada.\n¿Por qué las otras opciones son incorrectas?\nA. Neumotórax a tensión ❌\nTambién puede producir hipotensión e ingurgitación yugular, pero suele asociarse a:\n• Ausencia o marcada disminución del murmullo vesicular unilateral.\n• Hipersonoridad.\n• Desviación traqueal (hallazgo tardío).\nNo explica los ruidos cardíacos apagados.\nB. Hemotórax ❌\nProduce choque hemorrágico y disminución del murmullo vesicular, pero no la tríada clásica de Beck.\nD. Rotura del bronquio principal ❌\nSe manifiesta con enfisema subcutáneo masivo, fuga aérea persistente y neumotórax que no mejora tras el drenaje pleural.\n¿Cuál es la trampa del examen?\nMuchos estudiantes confunden el taponamiento cardíaco con el neumotórax a tensión, ya que ambos pueden producir:\n• Hipotensión.\n• Ingurgitación yugular.\nLa clave diferenciadora es:\nRuidos cardíacos apagados = Taponamiento cardíaco.\nRegla de oro para residencia\nHerida precordial + Tríada de Beck\n↓\nTaponamiento cardíaco hasta demostrar lo contrario.\nPerlas de examen\n✅ La tríada de Beck está formada por:\n• Hipotensión.\n• Ingurgitación yugular.\n• Ruidos cardíacos apagados.\n✅ El taponamiento cardíaco produce un shock obstructivo.\n✅ Es una de las lesiones torácicas letales que deben identificarse y tratarse durante la evaluación primaria del ATLS.\nReferencias\n• ATLS® (Advanced Trauma Life Support), American College of Surgeons.\n• Sabiston Textbook of Surgery.\n• Manual AMIR – Cirugía General y Trauma."
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
    "statement": "Un varón de 26 años consulta por una masa submandibular derecha de crecimiento lento durante varias semanas. Refiere que hace dos días la lesión fistulizó a la piel, drenando material purulento con estructuras granulosas similares a \"granos de azufre\". El Gram del exudado muestra bacterias filamentosas grampositivas.\nCon respecto a la enfermedad que presenta el paciente, ¿cuál de las siguientes afirmaciones es FALSA?",
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
    "explanation": "El cuadro corresponde a una actinomicosis cervicofacial, causada por Actinomyces israelii, un bacilo grampositivo filamentoso, anaerobio o microaerófilo, comensal de la cavidad oral. El tratamiento de elección es penicilina G intravenosa, seguida de un tratamiento prolongado con amoxicilina o penicilina V oral. La gentamicina no es el tratamiento de elección.\n\nLo que debes saber para el examen\nAnte un paciente con:\n• Masa cervicofacial de evolución lenta.\n• Fístulas cutáneas.\n• \"Granos de azufre\".\n• Bacilos grampositivos filamentosos.\nDebe sospecharse:\nActinomicosis cervicofacial por Actinomyces israelii.\nTema: Actinomicosis.",
    "keyPoints": [],
    "theoryContent": "El cuadro corresponde a una actinomicosis cervicofacial, causada por Actinomyces israelii, un bacilo grampositivo filamentoso, anaerobio o microaerófilo, comensal de la cavidad oral. El tratamiento de elección es penicilina G intravenosa, seguida de un tratamiento prolongado con amoxicilina o penicilina V oral. La gentamicina no es el tratamiento de elección.\n\nLo que debes saber para el examen\nAnte un paciente con:\n• Masa cervicofacial de evolución lenta.\n• Fístulas cutáneas.\n• \"Granos de azufre\".\n• Bacilos grampositivos filamentosos.\nDebe sospecharse:\nActinomicosis cervicofacial por Actinomyces israelii.\nTema: Actinomicosis.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica para diferenciar Actinomyces de Nocardia, dos bacterias filamentosas grampositivas que suelen confundirse en los exámenes.\nAnalicemos el caso\nLas claves diagnósticas son:\n• Masa submandibular de crecimiento lento.\n• Formación de fístulas.\n• Drenaje con \"granos de azufre\".\n• Bacilos grampositivos filamentosos.\nTodo ello es prácticamente diagnóstico de:\nActinomicosis cervicofacial.\nLa forma cervicofacial representa aproximadamente el 50-60 % de los casos y suele aparecer tras traumatismos o procedimientos odontológicos.\n¿Qué microorganismo la produce?\nActinomyces israelii\nCaracterísticas:\n• Bacilo grampositivo filamentoso.\n• Anaerobio o microaerófilo.\n• No ácido-alcohol resistente.\n• Comensal de la cavidad oral, tubo digestivo y tracto genital femenino.\n¿Cuál es el tratamiento?\nEl tratamiento de elección es:\n• Penicilina G intravenosa en los casos graves.\n• Posteriormente, amoxicilina o penicilina oral durante varios meses.\nEn ocasiones se requiere drenaje quirúrgico de abscesos.\n¿Por qué las otras opciones son correctas?\nA. Bacilo grampositivo anaerobio ✅\nEs una característica clásica de Actinomyces.\nB. La forma cervicofacial es la más frecuente ✅\nEs la presentación más habitual de la enfermedad.\nC. \"Granos de azufre\" ✅\nConstituyen un hallazgo muy característico y altamente sugestivo de actinomicosis.\n¿Por qué la opción D es falsa?\nLa gentamicina no es eficaz como tratamiento de elección frente a Actinomyces.\nEl antibiótico clásico y de primera línea es:\nPenicilina G.\n¿Cuál es la trampa del examen?\nEl examen intenta que confundas:\nActinomyces\nNocardia\nAnaerobio\nAerobio\nNo ácido-alcohol resistente\nDébilmente ácido-alcohol resistente\nGranos de azufre\nNo característicos\nPenicilina\nTrimetoprim-sulfametoxazol\nRegla de oro para residencia\nGranos de azufre + masa cervicofacial + grampositivo filamentoso\n↓\nActinomyces → Penicilina.\nPerlas de examen\n✅ Actinomyces es anaerobio.\n✅ La forma cervicofacial es la presentación más frecuente.\n✅ Los granos de azufre son un hallazgo clásico de actinomicosis.\n✅ Nocardia es aerobia, parcialmente ácido-alcohol resistente y se trata con trimetoprim-sulfametoxazol, no con penicilina.\nReferencias\n• Manual AMIR – Enfermedades Infecciosas.\n• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.\n• Murray. Microbiología Médica."
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
    "explanation": "El ácido clavulánico no posee actividad antibacteriana clínicamente relevante por sí solo. Su función principal es inhibir las betalactamasas, protegiendo a antibióticos como la amoxicilina o la ticarcilina de la degradación enzimática y ampliando así su espectro de acción.\n\nLo que debes saber para el examen\nCaracterísticas de los betalactámicos:\n• Son bactericidas.\n• Actúan inhibiendo la síntesis de la pared celular mediante unión a las proteínas fijadoras de penicilina (PBP).\n• Solo algunos presentan actividad frente a Pseudomonas aeruginosa.\n• Los inhibidores de betalactamasas no sustituyen al antibiótico, sino que potencian su eficacia.\nTema: Betalactámicos e inhibidores de betalactamasas.",
    "keyPoints": [],
    "theoryContent": "El ácido clavulánico no posee actividad antibacteriana clínicamente relevante por sí solo. Su función principal es inhibir las betalactamasas, protegiendo a antibióticos como la amoxicilina o la ticarcilina de la degradación enzimática y ampliando así su espectro de acción.\n\nLo que debes saber para el examen\nCaracterísticas de los betalactámicos:\n• Son bactericidas.\n• Actúan inhibiendo la síntesis de la pared celular mediante unión a las proteínas fijadoras de penicilina (PBP).\n• Solo algunos presentan actividad frente a Pseudomonas aeruginosa.\n• Los inhibidores de betalactamasas no sustituyen al antibiótico, sino que potencian su eficacia.\nTema: Betalactámicos e inhibidores de betalactamasas.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica de farmacología antimicrobiana.\nAnalicemos cada afirmación\nEl objetivo es identificar la afirmación falsa.\nOpción A ✅\nLa ampicilina cubre Enterococcus faecalis.\nEs correcta.\nLa ampicilina continúa siendo uno de los antibióticos de elección frente a E. faecalis, siempre que la cepa sea sensible.\nOpción B ✅\nLos betalactámicos son:\n• Bactericidas.\nActúan inhibiendo la síntesis del peptidoglicano de la pared bacteriana.\nOpción C ✅\nLa mayoría de los betalactámicos no tienen actividad frente a Pseudomonas aeruginosa.\nSolo algunos antibióticos presentan cobertura, por ejemplo:\n• Piperacilina.\n• Ceftazidima.\n• Cefepima.\n• Ceftolozano.\n• Aztreonam.\n• Imipenem.\n• Meropenem.\nOpción D ❌\nEsta es la afirmación falsa.\nEl ácido clavulánico:\n• Es un inhibidor suicida de las betalactamasas.\n• Tiene actividad antibacteriana mínima o nula desde el punto de vista clínico.\n• Su utilidad consiste en proteger al betalactámico de la hidrólisis por las betalactamasas.\nNo debe considerarse un antibiótico bactericida por sí mismo.\n¿Cuál es la trampa del examen?\nMuchos estudiantes creen que:\nAmoxicilina-clavulanato = dos antibióticos activos.\nEn realidad:\n• Amoxicilina → antibiótico.\n• Ácido clavulánico → inhibidor de betalactamasas.\nRegla de oro para residencia\nClavulanato, sulbactam y tazobactam\n↓\nNo matan bacterias; protegen al betalactámico frente a las betalactamasas.\nPerlas de examen\n✅ Todos los betalactámicos son bactericidas.\n✅ Los inhibidores clásicos de betalactamasas son:\n• Ácido clavulánico.\n• Sulbactam.\n• Tazobactam.\n✅ Solo algunos betalactámicos tienen actividad frente a Pseudomonas aeruginosa.\n✅ La ampicilina mantiene excelente actividad frente a Enterococcus faecalis (no frente a E. faecium, que suele ser resistente).\nReferencias\n• Manual AMIR – Enfermedades Infecciosas.\n• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.\n• Katzung. Farmacología Básica y Clínica."
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
    "explanation": "El SAMR (Staphylococcus aureus resistente a meticilina) posee el gen mecA, que codifica una PBP2a con baja afinidad por los betalactámicos. Por ello, meropenem y el resto de los carbapenémicos convencionales no son eficaces frente al SAMR. El tratamiento suele realizarse con vancomicina, linezolid, daptomicina o ceftarolina, según el tipo de infección.\n\nLo que debes saber para el examen\nSobre Staphylococcus aureus:\n• El principal reservorio son las narinas.\n• El estado de portador aumenta el riesgo de infección.\n• El SAMR es resistente a prácticamente todos los betalactámicos convencionales.\n• La mupirocina intranasal forma parte de las estrategias de descolonización.\nTema: Staphylococcus aureus y resistencia a meticilina.",
    "keyPoints": [],
    "theoryContent": "El SAMR (Staphylococcus aureus resistente a meticilina) posee el gen mecA, que codifica una PBP2a con baja afinidad por los betalactámicos. Por ello, meropenem y el resto de los carbapenémicos convencionales no son eficaces frente al SAMR. El tratamiento suele realizarse con vancomicina, linezolid, daptomicina o ceftarolina, según el tipo de infección.\n\nLo que debes saber para el examen\nSobre Staphylococcus aureus:\n• El principal reservorio son las narinas.\n• El estado de portador aumenta el riesgo de infección.\n• El SAMR es resistente a prácticamente todos los betalactámicos convencionales.\n• La mupirocina intranasal forma parte de las estrategias de descolonización.\nTema: Staphylococcus aureus y resistencia a meticilina.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica sobre SAMR y las estrategias de prevención de la infección por S. aureus.\nAnalicemos cada opción\nEl objetivo es identificar la afirmación falsa.\nOpción A ✅\nEs correcta.\nEl principal factor de riesgo para desarrollar una infección por S. aureus es ser portador nasal, ya que las narinas anteriores constituyen su principal reservorio.\nOpción B ❌\nEsta es la afirmación falsa.\nEl SAMR expresa la proteína PBP2a, que confiere resistencia a:\n• Penicilinas.\n• Cefalosporinas convencionales.\n• Carbapenémicos (incluido meropenem).\nPor ello, meropenem no debe utilizarse para tratar infecciones por SAMR.\nOpción C ✅\nEs correcta.\nLas cepas productoras de la leucocidina de Panton-Valentine (PVL) producen una potente toxina responsable de necrosis tisular.\nSe recomienda asociar fármacos que inhiben la síntesis proteica, como:\n• Clindamicina.\n• Linezolid.\nEstos antibióticos disminuyen la producción de toxinas.\nOpción D ✅\nEs correcta.\nLa descolonización nasal con mupirocina, asociada al baño corporal con clorhexidina, ha demostrado reducir la incidencia de infecciones quirúrgicas en pacientes portadores de S. aureus.\n¿Cuál es la trampa del examen?\nMuchos estudiantes recuerdan que:\nMeropenem es un antibiótico \"muy potente\".\nSin embargo, la potencia no supera el mecanismo de resistencia del SAMR.\nSiempre debes recordar:\nSAMR = resistencia a los betalactámicos convencionales por PBP2a.\nRegla de oro para residencia\nSAMR\n↓\nVancomicina, linezolid, daptomicina o ceftarolina.\nNunca meropenem como tratamiento dirigido.\nPerlas de examen\n✅ El principal reservorio de S. aureus son las narinas anteriores.\n✅ El estado de portador nasal aumenta significativamente el riesgo de infección.\n✅ Las cepas con leucocidina de Panton-Valentine producen infecciones cutáneas necrosantes y neumonía necrosante.\n✅ La mupirocina intranasal y la clorhexidina corporal forman parte de los protocolos de descolonización en pacientes seleccionados.\nReferencias\n• Manual AMIR – Enfermedades Infecciosas.\n• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.\n• Murray. Microbiología Médica."
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
    "explanation": "Esta afirmación es falsa. Las fluoroquinolonas, especialmente ciprofloxacino y levofloxacino, alcanzan altas concentraciones urinarias gracias a su importante eliminación renal, por lo que han sido ampliamente utilizadas en el tratamiento de infecciones urinarias por bacilos gramnegativos (aunque su uso actualmente está más restringido por el aumento de resistencias y sus efectos adversos).\n\nLo que debes saber para el examen\nLas quinolonas:\n• Son bactericidas.\n• Inhiben la ADN girasa (topoisomerasa II) y la topoisomerasa IV.\n• Presentan excelente biodisponibilidad oral.\n• Alcanzan altas concentraciones en orina (excepto algunas excepciones como moxifloxacino, que no se utiliza para ITU).\nTema: Quinolonas.",
    "keyPoints": [],
    "theoryContent": "Esta afirmación es falsa. Las fluoroquinolonas, especialmente ciprofloxacino y levofloxacino, alcanzan altas concentraciones urinarias gracias a su importante eliminación renal, por lo que han sido ampliamente utilizadas en el tratamiento de infecciones urinarias por bacilos gramnegativos (aunque su uso actualmente está más restringido por el aumento de resistencias y sus efectos adversos).\n\nLo que debes saber para el examen\nLas quinolonas:\n• Son bactericidas.\n• Inhiben la ADN girasa (topoisomerasa II) y la topoisomerasa IV.\n• Presentan excelente biodisponibilidad oral.\n• Alcanzan altas concentraciones en orina (excepto algunas excepciones como moxifloxacino, que no se utiliza para ITU).\nTema: Quinolonas.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica de farmacología porque evalúa el mecanismo de acción y las características farmacocinéticas de las fluoroquinolonas.\nAnalicemos cada opción\nOpción A ✅\nEs correcta.\nLas quinolonas son antibióticos:\n• Bactericidas.\nSu acción depende de la concentración y producen muerte bacteriana al inhibir la replicación del ADN.\nOpción B ❌\nEsta es la afirmación falsa.\nLas principales fluoroquinolonas utilizadas en clínica, como:\n• Ciprofloxacino.\n• Levofloxacino.\nse eliminan en gran parte por vía renal y alcanzan elevadas concentraciones urinarias, motivo por el cual han sido muy empleadas en las infecciones urinarias por gramnegativos.\nLa excepción importante para recordar es:\n• Moxifloxacino, que presenta escasa eliminación urinaria y no debe utilizarse para infecciones urinarias.\nOpción C ✅\nEs correcta.\nEl levofloxacino posee una biodisponibilidad oral cercana al 100 %, por lo que las dosis oral e intravenosa suelen ser equivalentes.\nOpción D ✅\nEs correcta.\nLas quinolonas inhiben:\n• ADN girasa (topoisomerasa II), principalmente en gramnegativos.\n• Topoisomerasa IV, especialmente en grampositivos.\nEsto bloquea la replicación y transcripción del ADN bacteriano.\n¿Cuál es la trampa del examen?\nMuchos estudiantes memorizan que las quinolonas se usan para ITU, pero olvidan la excepción:\nMoxifloxacino NO sirve para infecciones urinarias.\nEl examen generaliza esta característica a todo el grupo, lo cual hace que la afirmación sea falsa.\nRegla de oro para residencia\nQuinolonas\n↓\nBactericidas + inhiben ADN girasa/topoisomerasa IV + excelente biodisponibilidad oral.\nCiprofloxacino y levofloxacino → ITU.\nMoxifloxacino → No ITU.\nPerlas de examen\n✅ Ciprofloxacino tiene excelente actividad frente a Pseudomonas aeruginosa.\n✅ Levofloxacino mejora la cobertura frente a Streptococcus pneumoniae.\n✅ Moxifloxacino posee buena actividad frente a anaerobios, pero no alcanza concentraciones urinarias adecuadas.\n✅ Las quinolonas pueden producir tendinopatía y rotura del tendón de Aquiles, prolongación del QT y alteraciones de la glucemia.\nReferencias\n• Manual AMIR – Enfermedades Infecciosas.\n• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.\n• Katzung. Farmacología Básica y Clínica."
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
    "statement": "Un paciente oncológico, portador de una sonda vesical, consulta por un cuadro compatible con infección urinaria complicada y recibe tratamiento empírico con cefotaxima intravenosa. Posteriormente, el laboratorio informa crecimiento de Pseudomonas aeruginosa en los hemocultivos, quedando pendiente el antibiograma.\nCon esta información preliminar, ¿cuál es la conducta más adecuada?",
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
    "explanation": "La cefotaxima no posee actividad frente a Pseudomonas aeruginosa. Ante el aislamiento de este microorganismo en un paciente con bacteriemia e infección urinaria complicada, debe iniciarse un betalactámico con actividad antipseudomónica, como piperacilina-tazobactam, mientras se dispone del antibiograma.\n\nLo que debes saber para el examen\nCuando se identifica Pseudomonas aeruginosa:\n• Debe utilizarse un antibiótico antipseudomónico.\n• Cefotaxima y ceftriaxona NO cubren Pseudomonas.\n• Ertapenem NO tiene actividad frente a Pseudomonas.\n• El tratamiento definitivo debe ajustarse según el antibiograma.\nTema: Tratamiento de Pseudomonas aeruginosa.",
    "keyPoints": [],
    "theoryContent": "La cefotaxima no posee actividad frente a Pseudomonas aeruginosa. Ante el aislamiento de este microorganismo en un paciente con bacteriemia e infección urinaria complicada, debe iniciarse un betalactámico con actividad antipseudomónica, como piperacilina-tazobactam, mientras se dispone del antibiograma.\n\nLo que debes saber para el examen\nCuando se identifica Pseudomonas aeruginosa:\n• Debe utilizarse un antibiótico antipseudomónico.\n• Cefotaxima y ceftriaxona NO cubren Pseudomonas.\n• Ertapenem NO tiene actividad frente a Pseudomonas.\n• El tratamiento definitivo debe ajustarse según el antibiograma.\nTema: Tratamiento de Pseudomonas aeruginosa.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica sobre los betalactámicos con actividad antipseudomónica.\nAnalicemos el caso\nLas claves son:\n• Paciente oncológico.\n• Infección urinaria complicada.\n• Hemocultivos positivos para Pseudomonas aeruginosa.\n• Tratamiento empírico con cefotaxima.\nEn cuanto se identifica Pseudomonas, el tratamiento debe modificarse porque:\nLa cefotaxima no tiene actividad frente a este microorganismo.\nPor ello, la mejor conducta es iniciar un antibiótico activo frente a Pseudomonas, siendo piperacilina-tazobactam una excelente opción empírica.\n¿Qué antibióticos cubren Pseudomonas?\nLos más importantes para el examen son:\nBetalactámicos\n• Piperacilina-tazobactam.\n• Ceftazidima.\n• Cefepima.\n• Ceftolozano-tazobactam.\n• Imipenem.\n• Meropenem.\n• Aztreonam.\nOtros\n• Ciprofloxacino.\n• Levofloxacino (según sensibilidad).\n• Aminoglucósidos.\n¿Por qué las otras opciones son incorrectas?\nA. Mantener cefotaxima ❌\nLa cefotaxima carece de actividad frente a Pseudomonas aeruginosa.\nB. Ertapenem ❌\nEl ertapenem es la gran excepción entre los carbapenémicos:\nNo cubre Pseudomonas.\nD. Añadir trimetoprim-sulfametoxazol ❌\nEl TMP-SMX no forma parte del tratamiento habitual de las infecciones por Pseudomonas y no aporta la sinergia buscada.\n¿Cuál es la trampa del examen?\nEl examen suele preguntar:\n¿Cuál es el carbapenémico que NO cubre Pseudomonas?\nLa respuesta siempre es:\nErtapenem.\nRegla de oro para residencia\nPseudomonas\n↓\nPiperacilina-tazobactam, cefepima, ceftazidima, meropenem o imipenem.\nNunca cefotaxima, ceftriaxona ni ertapenem.\nPerlas de examen\n✅ Cefotaxima y ceftriaxona no tienen actividad frente a Pseudomonas aeruginosa.\n✅ Ertapenem es el único carbapenémico de uso habitual que no cubre Pseudomonas.\n✅ Piperacilina-tazobactam constituye una de las opciones empíricas de elección en infecciones graves por Pseudomonas.\n✅ El tratamiento definitivo siempre debe ajustarse al antibiograma para favorecer el uso racional de antibióticos.\nReferencias\n• Manual AMIR – Enfermedades Infecciosas.\n• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.\n• Sanford Guide to Antimicrobial Therapy."
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
    "explanation": "La afirmación es falsa porque la amoxicilina sola no ofrece una cobertura adecuada frente a los anaerobios productores de betalactamasas, especialmente Bacteroides fragilis, principal anaerobio implicado en las infecciones intraabdominales. Para estas infecciones se requieren esquemas con actividad anaerobicida adecuada, como amoxicilina-ácido clavulánico, piperacilina-tazobactam o una cefalosporina asociada a metronidazol.\n\nLo que debes saber para el examen\nEn las infecciones intraabdominales por flora mixta debe cubrirse:\n• Grampositivos.\n• Enterobacterias gramnegativas.\n• Anaerobios, especialmente Bacteroides fragilis.\nTema: Tratamiento antibiótico de las infecciones intraabdominales.",
    "keyPoints": [],
    "theoryContent": "La afirmación es falsa porque la amoxicilina sola no ofrece una cobertura adecuada frente a los anaerobios productores de betalactamasas, especialmente Bacteroides fragilis, principal anaerobio implicado en las infecciones intraabdominales. Para estas infecciones se requieren esquemas con actividad anaerobicida adecuada, como amoxicilina-ácido clavulánico, piperacilina-tazobactam o una cefalosporina asociada a metronidazol.\n\nLo que debes saber para el examen\nEn las infecciones intraabdominales por flora mixta debe cubrirse:\n• Grampositivos.\n• Enterobacterias gramnegativas.\n• Anaerobios, especialmente Bacteroides fragilis.\nTema: Tratamiento antibiótico de las infecciones intraabdominales.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica porque integra el espectro de acción de varios antibióticos.\nAnalicemos cada opción\nOpción A ❌\nEs la afirmación falsa.\nAunque la amoxicilina tiene actividad frente a algunos grampositivos y anaerobios sensibles, no cubre adecuadamente Bacteroides fragilis, ya que este produce betalactamasas.\nPor ello, la combinación:\nAmoxicilina + aminoglucósido\nno es un tratamiento adecuado para una infección intraabdominal por flora mixta.\nLas alternativas correctas incluyen:\n• Amoxicilina-clavulanato.\n• Piperacilina-tazobactam.\n• Ceftriaxona + metronidazol.\n• Cefotaxima + metronidazol.\nOpción B ✅\nEs correcta.\nEl metronidazol presenta una excelente actividad frente a:\n• Anaerobios estrictos.\n• Bacteroides fragilis.\n• Clostridium spp.\nOpción C ✅\nEs correcta.\nLa nefrotoxicidad por aminoglucósidos se relaciona con concentraciones elevadas mantenidas.\nPor ello:\n• Los niveles valle permiten valorar el riesgo de toxicidad renal.\nOpción D ✅\nEs correcta.\nEl aztreonam tiene un espectro muy parecido al de los aminoglucósidos:\n• Bacilos gramnegativos aerobios.\n• Incluye Pseudomonas aeruginosa.\n• No tiene actividad frente a grampositivos ni anaerobios.\n¿Cuál es la trampa del examen?\nMuchos estudiantes recuerdan que:\nLa amoxicilina cubre anaerobios.\nPero olvidan que el principal anaerobio de las infecciones intraabdominales es:\nBacteroides fragilis, productor de betalactamasas.\nPor eso la amoxicilina debe asociarse a un inhibidor de betalactamasas o sustituirse por otro esquema con mejor cobertura.\nRegla de oro para residencia\nInfección intraabdominal\n↓\nSiempre cubrir Bacteroides fragilis.\nMetronidazol o betalactámico con inhibidor de betalactamasas.\nPerlas de examen\n✅ Metronidazol es uno de los mejores antibióticos frente a anaerobios.\n✅ Los niveles valle de aminoglucósidos ayudan a prevenir la nefrotoxicidad.\n✅ Aztreonam cubre únicamente gramnegativos aerobios, incluido Pseudomonas aeruginosa.\n✅ Amoxicilina sola no es adecuada para infecciones intraabdominales por flora mixta debido a su escasa actividad frente a Bacteroides fragilis.\nReferencias\n• Manual AMIR – Enfermedades Infecciosas.\n• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.\n• Sanford Guide to Antimicrobial Therapy."
  },
  {
    "id": "dr-q-eval1-14",
    "examArea": "Enfermedades Infecciosas / Antibióticos",
    "topic": "Enfermedades Infecciosas / Antibióticos",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 72 años, diabético y con enfermedad renal crónica, ingresa por pielonefritis complicada con datos de sepsis. Tiene antecedentes de múltiples hospitalizaciones y varios tratamientos antibióticos en el último año. Debido al alto riesgo de infección por Pseudomonas aeruginosa, se decide iniciar tratamiento antibiótico empírico.\n¿Cuál de los siguientes antibióticos NO posee actividad frente a Pseudomonas aeruginosa?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Piperacilina-tazobactam."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Cefepima."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Ertapenem."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Meropenem."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El ertapenem es el único carbapenémico de uso habitual que no presenta actividad frente a Pseudomonas aeruginosa. En pacientes con sospecha o confirmación de infección por este microorganismo deben utilizarse antibióticos con actividad antipseudomónica, como piperacilina-tazobactam, cefepima, ceftazidima, meropenem o imipenem.\n\nLo que debes saber para el examen\nAntipseudomónicos clásicos:\n• Piperacilina-tazobactam.\n• Ceftazidima.\n• Cefepima.\n• Aztreonam.\n• Imipenem.\n• Meropenem.\n• Ciprofloxacino.\n• Levofloxacino (según sensibilidad).\n• Aminoglucósidos.\n❌ No cubren Pseudomonas:\n• Ceftriaxona.\n• Cefotaxima.\n• Ertapenem.\n• Amoxicilina-clavulanato.\nTema: Cobertura antibiótica frente a Pseudomonas aeruginosa.",
    "keyPoints": [],
    "theoryContent": "El ertapenem es el único carbapenémico de uso habitual que no presenta actividad frente a Pseudomonas aeruginosa. En pacientes con sospecha o confirmación de infección por este microorganismo deben utilizarse antibióticos con actividad antipseudomónica, como piperacilina-tazobactam, cefepima, ceftazidima, meropenem o imipenem.\n\nLo que debes saber para el examen\nAntipseudomónicos clásicos:\n• Piperacilina-tazobactam.\n• Ceftazidima.\n• Cefepima.\n• Aztreonam.\n• Imipenem.\n• Meropenem.\n• Ciprofloxacino.\n• Levofloxacino (según sensibilidad).\n• Aminoglucósidos.\n❌ No cubren Pseudomonas:\n• Ceftriaxona.\n• Cefotaxima.\n• Ertapenem.\n• Amoxicilina-clavulanato.\nTema: Cobertura antibiótica frente a Pseudomonas aeruginosa.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una de las preguntas más repetidas en los exámenes de residencia.\nAnalicemos el caso\nEl paciente presenta múltiples factores de riesgo para infección por Pseudomonas:\n• Hospitalizaciones repetidas.\n• Uso reciente de antibióticos.\n• Infección urinaria complicada.\n• Sepsis.\nEn este contexto es imprescindible iniciar un antibiótico con actividad antipseudomónica.\n¿Qué debes memorizar?\nLos betalactámicos con cobertura frente a Pseudomonas son:\n✅ Piperacilina-tazobactam.\n✅ Ceftazidima.\n✅ Cefepima.\n✅ Ceftolozano-tazobactam.\n✅ Imipenem.\n✅ Meropenem.\n✅ Aztreonam.\n¿Cuál es la gran excepción?\nEl examen pregunta una y otra vez:\n¿Qué carbapenémico NO cubre Pseudomonas?\nLa respuesta siempre es:\nErtapenem.\n¿Por qué las otras opciones son correctas?\nA. Piperacilina-tazobactam ✅\nEs uno de los antibióticos empíricos de elección para infecciones graves por Pseudomonas.\nB. Cefepima ✅\nCefalosporina de cuarta generación con excelente actividad antipseudomónica.\nD. Meropenem ✅\nCarbapenémico con muy buena actividad frente a Pseudomonas.\n¿Cuál es la trampa del examen?\nMuchos estudiantes piensan:\n\"Todos los carbapenémicos cubren Pseudomonas\".\nEso es falso.\nRecuerda siempre:\nErtapenem = excepción.\nRegla de oro para residencia\nPseudomonas\n↓\nPiperacilina-tazobactam, cefepima, ceftazidima, meropenem o imipenem.\nNunca ertapenem.\nPerlas de examen\n✅ Cefotaxima y ceftriaxona tampoco cubren Pseudomonas aeruginosa.\n✅ Aztreonam cubre gramnegativos aerobios, incluida Pseudomonas, y es útil en pacientes con alergia grave a penicilinas.\n✅ La elección definitiva del tratamiento debe ajustarse al antibiograma.\nReferencias\n• Manual AMIR – Enfermedades Infecciosas.\n• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.\n• Sanford Guide to Antimicrobial Therapy."
  },
  {
    "id": "dr-q-eval1-15",
    "examArea": "Gastroenterología / Hepatología",
    "topic": "Gastroenterología / Hepatología",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 58 años con antecedente de cirrosis hepática alcohólica consulta para seguimiento. Al examen físico presenta ascitis, esplenomegalia y se documentan varices esofágicas en una endoscopia digestiva alta.\n¿Cuál es el mecanismo fisiopatológico común que explica estas tres manifestaciones?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Disminución de la síntesis de albúmina."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Activación de las células de Kupffer."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Hipertensión portal secundaria a fibrosis hepática."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Aumento de la producción de bilirrubina."
      }
    ],
    "correctOptionId": "C",
    "explanation": "La fibrosis hepática produce un aumento de la resistencia al flujo sanguíneo portal, originando hipertensión portal, mecanismo responsable de la aparición de ascitis, esplenomegalia congestiva y circulación colateral portosistémica, incluyendo las varices esofágicas.\n\nLo que debes saber para el examen\nLa hipertensión portal es la principal complicación hemodinámica de la cirrosis y explica:\n• Ascitis.\n• Esplenomegalia.\n• Varices esofágicas.\n• Circulación colateral (caput medusae, hemorroides).\nTema: Hipertensión portal.",
    "keyPoints": [],
    "theoryContent": "La fibrosis hepática produce un aumento de la resistencia al flujo sanguíneo portal, originando hipertensión portal, mecanismo responsable de la aparición de ascitis, esplenomegalia congestiva y circulación colateral portosistémica, incluyendo las varices esofágicas.\n\nLo que debes saber para el examen\nLa hipertensión portal es la principal complicación hemodinámica de la cirrosis y explica:\n• Ascitis.\n• Esplenomegalia.\n• Varices esofágicas.\n• Circulación colateral (caput medusae, hemorroides).\nTema: Hipertensión portal.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una de las preguntas más clásicas de hepatología.\nAnalicemos el caso\nEl paciente presenta la tríada típica de la hipertensión portal:\n• Ascitis.\n• Esplenomegalia.\n• Varices esofágicas.\nTodas estas manifestaciones tienen un origen común:\nAumento de la presión en el sistema porta secundario a la fibrosis hepática.\nLa fibrosis distorsiona la arquitectura del hígado y aumenta la resistencia al paso de la sangre portal, generando hipertensión portal.\n¿Cómo produce cada manifestación?\nAscitis\nSe desarrolla por la combinación de:\n• Hipertensión portal (↑ presión hidrostática).\n• Vasodilatación esplácnica.\n• Activación del sistema renina-angiotensina-aldosterona.\n• Retención renal de sodio y agua.\nEsplenomegalia\nEl aumento de la presión portal provoca congestión venosa del bazo, favoreciendo además el desarrollo de hiperesplenismo.\nVarices esofágicas\nLa sangre busca vías alternativas para retornar a la circulación sistémica, formando colaterales portosistémicas, especialmente en el esófago distal.\n¿Por qué las otras opciones son incorrectas?\nA. Disminución de la síntesis de albúmina ❌\nContribuye a la formación de ascitis al disminuir la presión oncótica plasmática, pero no explica las varices esofágicas ni la esplenomegalia.\nB. Activación de las células de Kupffer ❌\nParticipa en la inflamación y fibrogénesis, pero no constituye el mecanismo directo responsable de estas tres manifestaciones.\nD. Aumento de la producción de bilirrubina ❌\nLa hiperbilirrubinemia produce ictericia, pero no explica el desarrollo de hipertensión portal ni sus complicaciones.\n¿Cuál es la trampa del examen?\nMuchos estudiantes responden:\nHipoalbuminemia, porque la relacionan con la ascitis.\nSin embargo, la pregunta pide:\n¿Qué mecanismo explica las tres manifestaciones simultáneamente?\nLa única respuesta correcta es:\nHipertensión portal.\nRegla de oro para residencia\nCirrosis + ascitis + esplenomegalia + varices\n↓\nHipertensión portal hasta demostrar lo contrario.\nPerlas de examen\n✅ La hipertensión portal se define por un aumento del gradiente de presión portal.\n✅ Las varices esofágicas son consecuencia de la formación de colaterales portosistémicas.\n✅ El hiperesplenismo secundario a la esplenomegalia puede producir trombocitopenia, leucopenia y anemia.\n✅ La hipoalbuminemia favorece la ascitis, pero no es la causa principal de las varices ni de la esplenomegalia.\nReferencias\n• Harrison. Principios de Medicina Interna.\n• Sleisenger & Fordtran. Gastrointestinal and Liver Disease.\n• Manual AMIR – Aparato Digestivo."
  },
  {
    "id": "dr-q-eval1-16",
    "examArea": "Gastroenterología / Hepatología",
    "topic": "Gastroenterología / Hepatología",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 62 años con cirrosis hepática por virus de la hepatitis C acude a consulta para valoración pronóstica y presenta los siguientes datos: bilirrubina total de 3,8 mg/dL, albúmina de 2,6 g/dL, INR de 2,1, ascitis moderada controlada parcialmente con diuréticos y encefalopatía hepática grado II. ¿Cuál es la clasificación Child-Pugh de este paciente y cuál es su principal implicación clínica?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Child A (5-6 puntos): candidato ideal para resección hepática sin incremento del riesgo."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Child B (7-9 puntos): enfermedad hepática moderada; debe valorarse para trasplante hepático y presenta mayor riesgo de complicaciones."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Child C (10-15 puntos): enfermedad compensada con excelente supervivencia a 1 año."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Child A (5-6 puntos): no requiere seguimiento por hipertensión portal."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Cálculo del Child-Pugh\nParámetro\nValor\nPuntos\nBilirrubina\n3,8 mg/dL\n3\nAlbúmina\n2,6 g/dL\n3\nINR\n2,1\n2\nAscitis moderada\n\n2\nEncefalopatía grado II\n\n2\nPuntaje total = 12 puntos → Child-Pugh C.\n⚠️ Ojo con la trampa: al sumar correctamente los puntos, el paciente corresponde a Child C, por lo que la opción B es incorrecta. La clasificación real sería Child C (10-15 puntos), que implica enfermedad hepática descompensada, mal pronóstico y clara indicación de valoración para trasplante hepático.\n\nLo que debes saber para el examen\nClasificación de Child-Pugh\nClase\nPuntaje\nSupervivencia aproximada a 1 año\nA\n5-6\n≈95-100%\nB\n7-9\n≈80-85%\nC\n10-15\n≈40-50%\nTema: Clasificación pronóstica de la cirrosis.",
    "keyPoints": [],
    "theoryContent": "Cálculo del Child-Pugh\nParámetro\nValor\nPuntos\nBilirrubina\n3,8 mg/dL\n3\nAlbúmina\n2,6 g/dL\n3\nINR\n2,1\n2\nAscitis moderada\n\n2\nEncefalopatía grado II\n\n2\nPuntaje total = 12 puntos → Child-Pugh C.\n⚠️ Ojo con la trampa: al sumar correctamente los puntos, el paciente corresponde a Child C, por lo que la opción B es incorrecta. La clasificación real sería Child C (10-15 puntos), que implica enfermedad hepática descompensada, mal pronóstico y clara indicación de valoración para trasplante hepático.\n\nLo que debes saber para el examen\nClasificación de Child-Pugh\nClase\nPuntaje\nSupervivencia aproximada a 1 año\nA\n5-6\n≈95-100%\nB\n7-9\n≈80-85%\nC\n10-15\n≈40-50%\nTema: Clasificación pronóstica de la cirrosis.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica de residencia porque obliga a calcular el puntaje completo del Child-Pugh y no solo a memorizar la clasificación.\nPaso 1. Recordar los cinco parámetros\nEl Child-Pugh evalúa:\n• Bilirrubina\n• Albúmina\n• INR (o tiempo de protrombina)\n• Ascitis\n• Encefalopatía\nCada uno puntúa 1, 2 o 3 puntos.\nPaso 2. Sumar correctamente\n• 5-6 puntos → Child A\n• 7-9 puntos → Child B\n• 10-15 puntos → Child C\nImplicación clínica\nChild A\n• Cirrosis compensada\n• Buen pronóstico\n• Bajo riesgo quirúrgico\nChild B\n• Cirrosis con deterioro moderado\n• Mayor riesgo de descompensación\n• Posible valoración para trasplante\nChild C\n• Cirrosis descompensada\n• Alto riesgo de mortalidad\n• Muy alto riesgo quirúrgico\n• Indicación clara de trasplante hepático\nTrampa del examen\nEl error más frecuente es no sumar correctamente los puntos. Aunque conozcas la teoría, un fallo en el cálculo cambia completamente la respuesta.\nRegla de oro\n• 5-6 → A\n• 7-9 → B\n• 10-15 → C\nPerlas de examen\n✅ El Child-Pugh incluye 5 variables: bilirrubina, albúmina, INR, ascitis y encefalopatía.✅ Child C implica el peor pronóstico y alta mortalidad.✅ El MELD es el sistema principal para trasplante hepático, pero el Child-Pugh sigue siendo clave para pronóstico y riesgo quirúrgico.\nReferencias\n• Harrison. Principios de Medicina Interna\n• EASL Clinical Practice Guidelines\n• Manual AMIR – Aparato Digestivo"
  },
  {
    "id": "dr-q-eval1-17",
    "examArea": "Gastroenterología / Hepatología",
    "topic": "Gastroenterología / Hepatología",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Una mujer de 67 años con antecedente de cirrosis secundaria a infección crónica por el virus de la hepatitis C acude al servicio de urgencias por presentar hematemesis abundante. En la exploración física se evidencian ascitis y ligera ictericia.\n¿Cuál es la actitud diagnóstica y terapéutica más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Estabilizar hemodinámicamente, realizar una endoscopia y colocar un TIPS si presenta hemorragia por varices."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Realizar una paracentesis, seguida de una endoscopia y ligadura de varices."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Estabilizar a la paciente, iniciar un fármaco vasoactivo, realizar una endoscopia y practicar ligadura si se confirma hemorragia por varices."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Esperar al resultado de la endoscopia para iniciar el tratamiento."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Ante la sospecha de hemorragia digestiva alta por rotura de varices esofágicas, el manejo debe iniciarse antes de la endoscopia con medidas de reanimación, administración de fármacos vasoactivos (terlipresina, octreótido o somatostatina) y antibioterapia profiláctica. Posteriormente debe realizarse una endoscopia urgente con ligadura elástica de las varices.\n\nLo que debes saber para el examen\nEl manejo inicial de una hemorragia variceal sigue siempre el mismo orden:\n• Estabilización hemodinámica.\n• Inicio inmediato de fármacos vasoactivos.\n• Antibioterapia profiláctica.\n• Endoscopia urgente (<12 horas) con ligadura elástica.\n• Si fracasa el control del sangrado → considerar TIPS precoz.\nTema: Hemorragia digestiva por hipertensión portal.",
    "keyPoints": [],
    "theoryContent": "Ante la sospecha de hemorragia digestiva alta por rotura de varices esofágicas, el manejo debe iniciarse antes de la endoscopia con medidas de reanimación, administración de fármacos vasoactivos (terlipresina, octreótido o somatostatina) y antibioterapia profiláctica. Posteriormente debe realizarse una endoscopia urgente con ligadura elástica de las varices.\n\nLo que debes saber para el examen\nEl manejo inicial de una hemorragia variceal sigue siempre el mismo orden:\n• Estabilización hemodinámica.\n• Inicio inmediato de fármacos vasoactivos.\n• Antibioterapia profiláctica.\n• Endoscopia urgente (<12 horas) con ligadura elástica.\n• Si fracasa el control del sangrado → considerar TIPS precoz.\nTema: Hemorragia digestiva por hipertensión portal.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una de las preguntas más repetidas en los exámenes de residencia porque evalúa el algoritmo de manejo de la hemorragia por varices esofágicas.\nAnalicemos el caso\nLas pistas diagnósticas son:\n• Cirrosis por VHC.\n• Ascitis.\n• Ictericia.\n• Hematemesis.\nHasta demostrar lo contrario, se trata de una:\nHemorragia digestiva alta secundaria a rotura de varices esofágicas.\nEl tratamiento no comienza con la endoscopia, sino con la estabilización y el tratamiento farmacológico.\n¿Cuál es el manejo correcto?\n• ABC y reanimación hemodinámica.\n• Iniciar inmediatamente un vasoactivo:\n• Terlipresina.\n• Octreótido.\n• Somatostatina.\n• Antibioterapia profiláctica (habitualmente ceftriaxona).\n• Endoscopia urgente con ligadura elástica.\n• Si el sangrado no se controla o el riesgo de resangrado es muy alto → TIPS.\n¿Por qué las otras opciones son incorrectas?\nA. Estabilizar + endoscopia + TIPS ❌\nEl TIPS no es el tratamiento inicial. Se reserva para fracaso del tratamiento endoscópico/farmacológico o para pacientes seleccionados de alto riesgo.\nB. Paracentesis antes de la endoscopia ❌\nAunque la ascitis puede requerir estudio mediante paracentesis, no es la prioridad frente a una hemorragia digestiva activa.\nD. Esperar a la endoscopia ❌\nError clásico de examen.\nEl tratamiento vasoactivo debe iniciarse desde el momento en que se sospecha una hemorragia variceal, sin esperar la confirmación endoscópica.\n¿Cuál es la trampa del examen?\nMuchos estudiantes recuerdan la ligadura de varices, pero olvidan que:\nLos fármacos vasoactivos se administran antes de la endoscopia.\nAdemás, otro punto de alta rentabilidad es recordar que:\nTodos los pacientes con hemorragia variceal deben recibir antibioterapia profiláctica, aunque no existan datos de infección.\nRegla de oro para residencia\nHemorragia por varices\n↓\nVasoactivo + antibiótico + endoscopia con ligadura.\nTIPS solo si falla el tratamiento inicial o en pacientes seleccionados de alto riesgo.\nPerlas de examen\n✅ Iniciar terlipresina, octreótido o somatostatina inmediatamente ante la sospecha de hemorragia variceal.\n✅ La ligadura elástica es el tratamiento endoscópico de elección.\n✅ La ceftriaxona es el antibiótico profiláctico más utilizado en pacientes cirróticos con hemorragia digestiva alta.\n✅ El TIPS no constituye el tratamiento inicial; se indica cuando fracasa el tratamiento estándar o de forma precoz en determinados pacientes con alto riesgo de resangrado.\nReferencias\n• Manual AMIR – Aparato Digestivo.\n• Baveno VII Consensus Workshop.\n• EASL Clinical Practice Guidelines on Portal Hypertension."
  },
  {
    "id": "dr-q-eval1-18",
    "examArea": "Enfermedades Infecciosas / Endocarditis Infecciosa",
    "topic": "Enfermedades Infecciosas / Endocarditis Infecciosa",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 52 años con antecedente de prolapso de la válvula mitral consulta por fiebre de 10 días y aparición de un nuevo soplo sistólico. Los hemocultivos son positivos para Streptococcus viridans.\n¿Cuál fue el paso fisiopatológico indispensable para que las bacterias pudieran colonizar la válvula?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Producción excesiva de IL-6."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Formación previa de un trombo estéril de fibrina y plaquetas sobre un endotelio lesionado."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Activación de los linfocitos Th17."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Aumento de la presión arterial sistémica."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El primer paso en la fisiopatología de la endocarditis infecciosa es la lesión del endotelio valvular, que favorece la formación de una endocarditis trombótica no bacteriana, compuesta por fibrina y plaquetas. Posteriormente, durante un episodio de bacteriemia, microorganismos como Streptococcus viridans se adhieren a este trombo estéril, proliferan y forman las vegetaciones características.\n\nLo que debes saber para el examen\nLa fisiopatología de la endocarditis ocurre en este orden:\n• Lesión del endotelio valvular.\n• Depósito de fibrina y plaquetas (trombo estéril).\n• Bacteriemia.\n• Adhesión bacteriana.\n• Formación de vegetaciones infectadas.\nTema: Fisiopatología de la endocarditis infecciosa.",
    "keyPoints": [],
    "theoryContent": "El primer paso en la fisiopatología de la endocarditis infecciosa es la lesión del endotelio valvular, que favorece la formación de una endocarditis trombótica no bacteriana, compuesta por fibrina y plaquetas. Posteriormente, durante un episodio de bacteriemia, microorganismos como Streptococcus viridans se adhieren a este trombo estéril, proliferan y forman las vegetaciones características.\n\nLo que debes saber para el examen\nLa fisiopatología de la endocarditis ocurre en este orden:\n• Lesión del endotelio valvular.\n• Depósito de fibrina y plaquetas (trombo estéril).\n• Bacteriemia.\n• Adhesión bacteriana.\n• Formación de vegetaciones infectadas.\nTema: Fisiopatología de la endocarditis infecciosa.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una de las preguntas más frecuentes de residencia porque evalúa el mecanismo fisiopatológico, no solo el microorganismo causal.\nAnalicemos el caso\nLas claves son:\n• Prolapso de la válvula mitral.\n• Fiebre.\n• Nuevo soplo.\n• Hemocultivos positivos para Streptococcus viridans.\nTodo ello orienta a una:\nEndocarditis infecciosa sobre una válvula previamente lesionada.\n¿Cómo se desarrolla la endocarditis?\nPaso 1\nLesión del endotelio valvular por:\n• Valvulopatías.\n• Prótesis valvulares.\n• Cardiopatías congénitas.\n• Chorros turbulentos.\n↓\nPaso 2\nSe forma un:\nTrombo estéril de fibrina y plaquetas.\nEsto se conoce como:\nEndocarditis trombótica no bacteriana.\n↓\nPaso 3\nOcurre una bacteriemia transitoria.\n↓\nPaso 4\nLas bacterias se adhieren al trombo gracias a moléculas de adhesión (adhesinas).\n↓\nPaso 5\nSe desarrollan las vegetaciones infecciosas, protegidas por fibrina, lo que dificulta la acción del sistema inmunitario y de los antibióticos.\n¿Por qué las otras opciones son incorrectas?\nA. Producción excesiva de IL-6 ❌\nLa IL-6 participa en la respuesta inflamatoria, pero no constituye el paso indispensable para la colonización valvular.\nC. Activación de los linfocitos Th17 ❌\nForma parte de la respuesta inmunitaria adaptativa, pero no interviene en la adhesión inicial de las bacterias.\nD. Aumento de la presión arterial sistémica ❌\nNo tiene un papel directo en el desarrollo de la endocarditis infecciosa.\n¿Cuál es la trampa del examen?\nMuchos estudiantes creen que:\nLa bacteriemia por sí sola produce endocarditis.\nEsto es falso.\nLa mayoría de las bacteriemias transitorias no producen endocarditis.\nDebe existir previamente:\nUna lesión endotelial con formación de un trombo estéril de fibrina y plaquetas.\nRegla de oro para residencia\nLesión valvular\n↓\nFibrina + plaquetas\n↓\nBacteriemia\n↓\nVegetación infecciosa.\nPerlas de examen\n✅ Streptococcus viridans es una causa clásica de endocarditis subaguda tras procedimientos dentales.\n✅ Las vegetaciones están formadas por bacterias, fibrina y plaquetas.\n✅ El ecocardiograma transesofágico es la técnica con mayor sensibilidad para detectar vegetaciones.\n✅ La endocarditis infecciosa se diagnostica mediante los criterios de Duke modificados.\nReferencias\n• Harrison. Principios de Medicina Interna.\n• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.\n• Manual AMIR – Enfermedades Infecciosas."
  },
  {
    "id": "dr-q-eval1-19",
    "examArea": "Enfermedades Infecciosas / Endocarditis Infecciosa",
    "topic": "Enfermedades Infecciosas / Endocarditis Infecciosa",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 60 años consulta por fiebre persistente, pérdida de peso y malestar general. Se sospecha endocarditis infecciosa. Se obtienen tres hemocultivos antes de iniciar tratamiento antibiótico, todos ellos positivos para Streptococcus viridans.\n¿Cuál de los siguientes constituye un criterio mayor de Duke?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Fiebre mayor de 38 °C."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hemocultivos positivos para un microorganismo típico."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Uso de drogas intravenosas."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hemorragias en astilla."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Los hemocultivos positivos para microorganismos típicos de endocarditis, como Streptococcus viridans, Streptococcus gallolyticus, Staphylococcus aureus, enterococos adquiridos en la comunidad o los microorganismos del grupo HACEK, constituyen un criterio mayor de Duke cuando cumplen los criterios microbiológicos establecidos.\n\nLo que debes saber para el examen\nCriterios mayores de Duke\n✅ 1. Hemocultivos positivos para microorganismos típicos.\n✅ 2. Evidencia de afectación endocárdica, como:\n• Ecocardiograma con vegetación.\n• Absceso.\n• Dehiscencia parcial de prótesis valvular.\n• Nueva insuficiencia valvular.\nCriterios menores\n• Fiebre ≥38 °C.\n• Predisposición (valvulopatía o consumo de drogas IV).\n• Fenómenos vasculares.\n• Fenómenos inmunológicos.\n• Evidencia microbiológica que no cumple criterio mayor.\nTema: Diagnóstico de la endocarditis infecciosa.",
    "keyPoints": [],
    "theoryContent": "Los hemocultivos positivos para microorganismos típicos de endocarditis, como Streptococcus viridans, Streptococcus gallolyticus, Staphylococcus aureus, enterococos adquiridos en la comunidad o los microorganismos del grupo HACEK, constituyen un criterio mayor de Duke cuando cumplen los criterios microbiológicos establecidos.\n\nLo que debes saber para el examen\nCriterios mayores de Duke\n✅ 1. Hemocultivos positivos para microorganismos típicos.\n✅ 2. Evidencia de afectación endocárdica, como:\n• Ecocardiograma con vegetación.\n• Absceso.\n• Dehiscencia parcial de prótesis valvular.\n• Nueva insuficiencia valvular.\nCriterios menores\n• Fiebre ≥38 °C.\n• Predisposición (valvulopatía o consumo de drogas IV).\n• Fenómenos vasculares.\n• Fenómenos inmunológicos.\n• Evidencia microbiológica que no cumple criterio mayor.\nTema: Diagnóstico de la endocarditis infecciosa.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nLos criterios de Duke modificados son la herramienta diagnóstica más utilizada para establecer el diagnóstico de endocarditis infecciosa.\nLos dos criterios mayores que nunca debes olvidar\n1. Hemocultivos positivos\nDeben demostrar microorganismos típicos de endocarditis, entre ellos:\n• Streptococcus viridans.\n• Streptococcus gallolyticus (antes S. bovis).\n• Staphylococcus aureus.\n• Enterococcus spp. adquirido en la comunidad.\n• Grupo HACEK.\n2. Evidencia de compromiso endocárdico\nGeneralmente mediante ecocardiografía:\n• Vegetación.\n• Absceso.\n• Nueva dehiscencia de una prótesis.\n• Nueva insuficiencia valvular.\n¿Por qué las otras opciones son incorrectas?\nA. Fiebre mayor de 38 °C ❌\nEs un criterio menor, aunque está presente en la mayoría de los pacientes.\nC. Uso de drogas intravenosas ❌\nEs un criterio menor, ya que representa un factor predisponente.\nD. Hemorragias en astilla ❌\nCorresponden a un fenómeno vascular, también considerado criterio menor.\n¿Cuál es la trampa del examen?\nLos exámenes suelen preguntar:\n¿Qué es un criterio mayor y qué es un criterio menor?\nLa confusión más frecuente consiste en considerar que la fiebre o el consumo de drogas intravenosas son criterios mayores.\nRecuerda que solo existen dos grandes grupos de criterios mayores:\n• Microbiológicos (hemocultivos positivos).\n• Ecocardiográficos (evidencia de afectación endocárdica).\nRegla de oro para residencia\nDuke mayores = Hemocultivos + Ecocardiograma.\nTodo lo demás (fiebre, factores predisponentes, fenómenos vasculares e inmunológicos) corresponde a criterios menores.\nPerlas de examen\n✅ El diagnóstico definitivo puede establecerse con:\n• 2 criterios mayores, o\n• 1 criterio mayor + 3 menores, o\n• 5 criterios menores.\n✅ El ecocardiograma transesofágico tiene mayor sensibilidad que el transtorácico para detectar vegetaciones.\n✅ Antes de iniciar antibióticos deben obtenerse tres hemocultivos de sitios diferentes.\nReferencias\n• Duke Criteria for Infective Endocarditis (modificados).\n• Harrison. Principios de Medicina Interna.\n• Manual AMIR – Enfermedades Infecciosas."
  },
  {
    "id": "dr-q-eval1-20",
    "examArea": "Enfermedades Infecciosas / Endocarditis Infecciosa",
    "topic": "Enfermedades Infecciosas / Endocarditis Infecciosa",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 58 años con antecedente de prolapso de la válvula mitral consulta por fiebre de dos semanas, pérdida de peso y astenia. Se realizan tres hemocultivos que son positivos para Streptococcus viridans. El ecocardiograma evidencia una vegetación de 8 mm sobre la válvula mitral nativa, sin datos de insuficiencia cardíaca ni abscesos.\n¿Cuál es el tratamiento de elección en este paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Vancomicina intravenosa durante 2 semanas."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Penicilina G intravenosa o ceftriaxona durante 4 semanas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Ciprofloxacino por vía oral durante 10 días."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Cirugía valvular urgente como tratamiento inicial."
      }
    ],
    "correctOptionId": "B",
    "explanation": "La endocarditis por Streptococcus viridans en válvula nativa y sensible a penicilina se trata con penicilina G o ceftriaxona intravenosa durante 4 semanas. La cirugía se reserva para situaciones específicas como insuficiencia cardíaca, infección no controlada o alto riesgo embólico.\n\nLo que debes saber para el examen\nTratamiento según el microorganismo\nStreptococcus viridans (válvula nativa)\n→ Penicilina G o ceftriaxona IV durante 4 semanas.\nStaphylococcus aureus sensible a meticilina (MSSA)\n→ Cloxacilina (u oxacilina/nafcilina según disponibilidad).\nStaphylococcus aureus resistente a meticilina (MRSA)\n→ Vancomicina o daptomicina.\nEnterococcus faecalis\n→ Ampicilina + ceftriaxona (o ampicilina + gentamicina en casos seleccionados).\nTema: Tratamiento antibiótico de la endocarditis infecciosa.",
    "keyPoints": [],
    "theoryContent": "La endocarditis por Streptococcus viridans en válvula nativa y sensible a penicilina se trata con penicilina G o ceftriaxona intravenosa durante 4 semanas. La cirugía se reserva para situaciones específicas como insuficiencia cardíaca, infección no controlada o alto riesgo embólico.\n\nLo que debes saber para el examen\nTratamiento según el microorganismo\nStreptococcus viridans (válvula nativa)\n→ Penicilina G o ceftriaxona IV durante 4 semanas.\nStaphylococcus aureus sensible a meticilina (MSSA)\n→ Cloxacilina (u oxacilina/nafcilina según disponibilidad).\nStaphylococcus aureus resistente a meticilina (MRSA)\n→ Vancomicina o daptomicina.\nEnterococcus faecalis\n→ Ampicilina + ceftriaxona (o ampicilina + gentamicina en casos seleccionados).\nTema: Tratamiento antibiótico de la endocarditis infecciosa.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEn los exámenes de residencia suelen preguntar qué antibiótico utilizar según el microorganismo aislado y cuándo debe indicarse cirugía.\nAnalicemos el caso\nEl paciente presenta:\n• Hemocultivos positivos para Streptococcus viridans.\n• Válvula nativa.\n• Vegetación pequeña.\n• Sin insuficiencia cardíaca.\n• Sin absceso.\n• Sin datos de embolias repetidas.\nPor tanto, el tratamiento es exclusivamente médico.\n¿Cuándo basta con antibióticos?\nSiempre que:\n• El paciente esté estable.\n• El microorganismo sea sensible.\n• No exista insuficiencia cardíaca.\n• No haya absceso perivalvular.\n• No persista la bacteriemia.\n¿Cuándo debe operarse una endocarditis?\nLas tres indicaciones clásicas que debes memorizar son:\n1. Insuficiencia cardíaca\nEs la indicación quirúrgica más frecuente.\n2. Infección no controlada\n• Absceso.\n• Bacteriemia persistente.\n• Fiebre persistente pese al tratamiento adecuado.\n• Gérmenes difíciles de erradicar (por ejemplo, hongos).\n3. Prevención de embolias\nEspecialmente si existen:\n• Vegetaciones >10 mm con embolias.\n• Vegetaciones >15 mm de muy alto riesgo.\n¿Por qué las otras opciones son incorrectas?\nA. Vancomicina durante 2 semanas ❌\nLa vancomicina se reserva para alergia a betalactámicos o microorganismos resistentes, y la duración habitual no es de 2 semanas en este contexto.\nC. Ciprofloxacino oral ❌\nNo forma parte del tratamiento estándar de la endocarditis por Streptococcus viridans.\nD. Cirugía urgente ❌\nNo está indicada porque el paciente no presenta ninguna de las indicaciones quirúrgicas mayores.\n¿Cuál es la trampa del examen?\nMuchos estudiantes creen que:\nToda vegetación requiere cirugía.\nEsto es falso.\nLa mayoría de las endocarditis en válvula nativa se manejan con antibióticos intravenosos, reservando la cirugía para complicaciones bien definidas.\nRegla de oro para residencia\nEndocarditis por Streptococcus viridans\n↓\nPenicilina G o ceftriaxona IV durante 4 semanas.\nCirugía solo si hay insuficiencia cardíaca, infección persistente o alto riesgo embólico.\nPerlas de examen\n✅ Siempre obtener tres hemocultivos antes de iniciar antibióticos.\n✅ El tratamiento de la endocarditis es intravenoso y prolongado (habitualmente 4-6 semanas).\n✅ La insuficiencia cardíaca es la indicación quirúrgica más importante y frecuente.\n✅ Las vegetaciones grandes con embolias recurrentes aumentan la indicación de cirugía.\nReferencias\n• European Society of Cardiology (ESC). Guía de Endocarditis Infecciosa.\n• Harrison. Principios de Medicina Interna.\n• Manual AMIR – Enfermedades Infecciosas."
  },
  {
    "id": "dr-q-eval1-21",
    "examArea": "Enfermedades Infecciosas / Endocarditis Infecciosa",
    "topic": "Enfermedades Infecciosas / Endocarditis Infecciosa",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 68 años con antecedente de reemplazo valvular aórtico biológico hace 3 años consulta por fiebre de 39 °C, escalofríos y malestar general de 5 días de evolución. Al examen físico presenta un nuevo soplo diastólico. Se sospecha endocarditis infecciosa y se obtienen tres hemocultivos antes de iniciar tratamiento antibiótico.\nMientras se conocen los resultados microbiológicos, ¿cuál es el tratamiento empírico más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Penicilina G intravenosa."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Ceftriaxona en monoterapia."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Vancomicina + cefepima intravenosos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Piperacilina-tazobactam en monoterapia."
      }
    ],
    "correctOptionId": "C",
    "explanation": "En un paciente con endocarditis sobre válvula protésica debe iniciarse un tratamiento empírico que cubra Staphylococcus aureus (incluido SAMR), estafilococos coagulasa negativos, estreptococos, enterococos y bacilos gramnegativos, mientras se obtienen los resultados de los hemocultivos. Una combinación ampliamente recomendada es vancomicina + cefepima hasta dirigir posteriormente el tratamiento según el microorganismo aislado.\n\nLo que debes saber para el examen\nTratamiento empírico de la endocarditis\nVálvula nativa\n• Vancomicina + ceftriaxona (o cefepima según el contexto clínico).\nVálvula protésica\n• Vancomicina + cefepima.\n• En algunos protocolos puede añadirse gentamicina y/o rifampicina una vez identificado un estafilococo asociado a prótesis.\nTema: Tratamiento empírico de la endocarditis infecciosa.",
    "keyPoints": [],
    "theoryContent": "En un paciente con endocarditis sobre válvula protésica debe iniciarse un tratamiento empírico que cubra Staphylococcus aureus (incluido SAMR), estafilococos coagulasa negativos, estreptococos, enterococos y bacilos gramnegativos, mientras se obtienen los resultados de los hemocultivos. Una combinación ampliamente recomendada es vancomicina + cefepima hasta dirigir posteriormente el tratamiento según el microorganismo aislado.\n\nLo que debes saber para el examen\nTratamiento empírico de la endocarditis\nVálvula nativa\n• Vancomicina + ceftriaxona (o cefepima según el contexto clínico).\nVálvula protésica\n• Vancomicina + cefepima.\n• En algunos protocolos puede añadirse gentamicina y/o rifampicina una vez identificado un estafilococo asociado a prótesis.\nTema: Tratamiento empírico de la endocarditis infecciosa.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta muy frecuente porque diferencia el tratamiento empírico del tratamiento dirigido.\nAnalicemos el caso\nLas claves son:\n• Fiebre.\n• Nuevo soplo.\n• Prótesis valvular.\n• Sospecha de endocarditis.\nEn este momento todavía no conocemos el microorganismo, por lo que el tratamiento debe ser:\nEmpírico y de amplio espectro.\nDebe cubrir los microorganismos más frecuentes:\n• Staphylococcus aureus (incluido MRSA).\n• Estafilococos coagulasa negativos.\n• Estreptococos.\n• Enterococos.\n• Algunos bacilos gramnegativos.\nPor ello, la mejor opción es:\nVancomicina + cefepima.\n¿Qué hacer antes de iniciar antibióticos?\nNunca olvides:\n✅ Obtener tres hemocultivos de diferentes venopunciones.\nDespués:\n✅ Iniciar inmediatamente el tratamiento empírico.\n¿Por qué las otras opciones son incorrectas?\nA. Penicilina G ❌\nSolo sería adecuada como tratamiento dirigido frente a microorganismos sensibles, como Streptococcus viridans.\nB. Ceftriaxona en monoterapia ❌\nNo proporciona cobertura frente a SAMR ni frente a muchos estafilococos resistentes.\nD. Piperacilina-tazobactam ❌\nAunque tiene un amplio espectro, no constituye el tratamiento empírico de elección para la endocarditis infecciosa porque no cubre adecuadamente el MRSA.\n¿Cuál es la trampa del examen?\nMuchos estudiantes confunden:\n• Tratamiento empírico → amplio espectro.\n• Tratamiento dirigido → según hemocultivos.\nSi el examen dice:\n\"Mientras llegan los hemocultivos...\"\nLa respuesta casi siempre será un esquema con vancomicina asociada a otro betalactámico de amplio espectro.\nRegla de oro para residencia\nSospecha de endocarditis\n↓\n3 hemocultivos → iniciar tratamiento empírico.\nCuando llegue el cultivo → desescalar al tratamiento dirigido.\nPerlas de examen\n✅ Nunca iniciar antibióticos antes de obtener los hemocultivos, salvo que el paciente esté inestable y no sea posible retrasarlos.\n✅ La vancomicina proporciona cobertura frente al SAMR.\n✅ El tratamiento definitivo debe ajustarse según el microorganismo aislado y su antibiograma.\n✅ La duración habitual del tratamiento es de 4 a 6 semanas de antibióticos intravenosos.\nReferencias\n• European Society of Cardiology (ESC). Guía de Endocarditis Infecciosa.\n• Harrison. Principios de Medicina Interna.\n• Manual AMIR – Enfermedades Infecciosas."
  },
  {
    "id": "dr-q-eval1-22",
    "examArea": "Enfermedades Infecciosas / Endocarditis Infecciosa",
    "topic": "Enfermedades Infecciosas / Endocarditis Infecciosa",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 64 años con antecedente de válvula aórtica bicúspide consulta por fiebre de 3 semanas, pérdida de peso y disnea progresiva. Los hemocultivos son positivos para Staphylococcus aureus y el ecocardiograma transesofágico muestra una vegetación de 12 mm sobre la válvula aórtica, con insuficiencia aórtica grave. A pesar de recibir tratamiento antibiótico dirigido durante 48 horas, el paciente desarrolla edema agudo de pulmón y requiere oxígeno de alto flujo.\n¿Cuál es la conducta más apropiada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Continuar el tratamiento antibiótico durante 6 semanas y reevaluar posteriormente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Cambiar el tratamiento a un esquema de mayor espectro y repetir el ecocardiograma en una semana."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Realizar cirugía valvular urgente por insuficiencia cardíaca secundaria a endocarditis."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Iniciar anticoagulación plena para disminuir el riesgo embólico."
      }
    ],
    "correctOptionId": "C",
    "explanation": "La insuficiencia cardíaca aguda causada por una destrucción valvular secundaria a endocarditis infecciosa constituye la principal indicación de cirugía urgente. El tratamiento antibiótico es indispensable, pero no corrige la insuficiencia valvular grave, por lo que retrasar la intervención aumenta significativamente la mortalidad.\n\nLo que debes saber para el examen\nIndicaciones mayores de cirugía en endocarditis\n✅ 1. Insuficiencia cardíaca secundaria a insuficiencia valvular aguda (la más importante y frecuente).\n✅ 2. Infección no controlada, como:\n• Absceso perivalvular.\n• Bacteriemia persistente.\n• Fiebre persistente pese a tratamiento adecuado.\n• Gérmenes de difícil erradicación (hongos, algunas bacterias multirresistentes).\n✅ 3. Prevención de embolias, especialmente:\n• Vegetaciones >10 mm con embolias previas.\n• Vegetaciones >15 mm con muy alto riesgo embólico.\nTema: Indicaciones quirúrgicas en la endocarditis infecciosa.",
    "keyPoints": [],
    "theoryContent": "La insuficiencia cardíaca aguda causada por una destrucción valvular secundaria a endocarditis infecciosa constituye la principal indicación de cirugía urgente. El tratamiento antibiótico es indispensable, pero no corrige la insuficiencia valvular grave, por lo que retrasar la intervención aumenta significativamente la mortalidad.\n\nLo que debes saber para el examen\nIndicaciones mayores de cirugía en endocarditis\n✅ 1. Insuficiencia cardíaca secundaria a insuficiencia valvular aguda (la más importante y frecuente).\n✅ 2. Infección no controlada, como:\n• Absceso perivalvular.\n• Bacteriemia persistente.\n• Fiebre persistente pese a tratamiento adecuado.\n• Gérmenes de difícil erradicación (hongos, algunas bacterias multirresistentes).\n✅ 3. Prevención de embolias, especialmente:\n• Vegetaciones >10 mm con embolias previas.\n• Vegetaciones >15 mm con muy alto riesgo embólico.\nTema: Indicaciones quirúrgicas en la endocarditis infecciosa.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una de las preguntas más rentables en los exámenes de residencia.\nAnalicemos el caso\nLas claves son:\n• Endocarditis por Staphylococcus aureus.\n• Insuficiencia aórtica grave.\n• Edema agudo de pulmón.\n• Deterioro clínico a pesar del inicio del tratamiento antibiótico.\nLa aparición de insuficiencia cardíaca indica que la infección ha producido una destrucción importante de la válvula, generando una regurgitación severa que el tratamiento médico no puede resolver.\nPor ello, la conducta correcta es:\nCirugía valvular urgente.\n¿Por qué la insuficiencia cardíaca es la principal indicación quirúrgica?\nPorque es la complicación que más incrementa la mortalidad en la endocarditis.\nLa cirugía permite:\n• Eliminar el tejido infectado.\n• Reparar o reemplazar la válvula.\n• Corregir la insuficiencia valvular.\n• Mejorar el gasto cardíaco.\n¿Por qué las otras opciones son incorrectas?\nA. Continuar solo antibióticos ❌\nError frecuente.\nCuando existe insuficiencia cardíaca secundaria a destrucción valvular, los antibióticos por sí solos son insuficientes.\nB. Cambiar a un esquema más amplio ❌\nNo existe evidencia de fracaso microbiológico; el problema es mecánico (insuficiencia valvular), no falta de cobertura antibiótica.\nD. Anticoagulación plena ❌\nLa anticoagulación no está indicada para prevenir embolias en la endocarditis y puede aumentar el riesgo de hemorragia, especialmente si existen complicaciones neurológicas.\n¿Cuál es la trampa del examen?\nMuchos estudiantes piensan que:\n\"Primero hay que terminar las 6 semanas de antibióticos.\"\nEsto es falso.\nCuando aparece:\n• Edema agudo de pulmón.\n• Insuficiencia cardíaca.\n• Shock cardiogénico.\nLa cirugía no debe retrasarse.\nRegla de oro para residencia\nEndocarditis + insuficiencia cardíaca\n↓\nCirugía urgente.\nNo esperar a completar el tratamiento antibiótico.\nPerlas de examen\n✅ La insuficiencia cardíaca es la indicación quirúrgica más importante en la endocarditis infecciosa.\n✅ Las otras dos grandes indicaciones son la infección no controlada y la prevención de embolias.\n✅ La presencia de una vegetación grande por sí sola no siempre implica cirugía; debe valorarse junto con el riesgo embólico y la evolución clínica.\nReferencias\n• 2023 ESC Guidelines for the Management of Infective Endocarditis.\n• Harrison. Principios de Medicina Interna.\n• Manual AMIR – Enfermedades Infecciosas."
  },
  {
    "id": "dr-q-eval1-23",
    "examArea": "Enfermedades Infecciosas / Endocarditis Infecciosa",
    "topic": "Enfermedades Infecciosas / Endocarditis Infecciosa",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 58 años con antecedente de reemplazo valvular aórtico mecánico hace 2 años será sometido a una extracción dental por un absceso periapical. No presenta alergias medicamentosas y su función renal es normal.\n¿Cuál es la conducta más adecuada para prevenir una endocarditis infecciosa?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "No administrar profilaxis antibiótica porque las extracciones dentales no producen bacteriemia."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar amoxicilina 2 g por vía oral, 30-60 minutos antes del procedimiento."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administrar ceftriaxona intravenosa durante 5 días posteriores al procedimiento."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar vancomicina intravenosa antes y después del procedimiento."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Los pacientes con prótesis valvulares cardíacas pertenecen al grupo de alto riesgo de endocarditis infecciosa y deben recibir profilaxis antibiótica antes de procedimientos dentales que impliquen manipulación de la encía, de la región periapical del diente o perforación de la mucosa oral. El esquema de elección es amoxicilina 2 g VO (50 mg/kg en niños), 30-60 minutos antes del procedimiento.\n\nLo que debes saber para el examen\n¿Quiénes requieren profilaxis?\n✅ Prótesis valvulares (mecánicas o biológicas).\n✅ Material protésico utilizado para reparación valvular.\n✅ Antecedente de endocarditis infecciosa.\n✅ Algunas cardiopatías congénitas de alto riesgo:\n• Cianóticas no reparadas.\n• Reparadas con material protésico durante los primeros 6 meses.\n• Reparadas con defectos residuales junto al material protésico.\nNo se recomienda en el prolapso mitral, soplos inocentes ni la mayoría de las valvulopatías adquiridas.\nTema: Profilaxis de la endocarditis infecciosa.",
    "keyPoints": [],
    "theoryContent": "Los pacientes con prótesis valvulares cardíacas pertenecen al grupo de alto riesgo de endocarditis infecciosa y deben recibir profilaxis antibiótica antes de procedimientos dentales que impliquen manipulación de la encía, de la región periapical del diente o perforación de la mucosa oral. El esquema de elección es amoxicilina 2 g VO (50 mg/kg en niños), 30-60 minutos antes del procedimiento.\n\nLo que debes saber para el examen\n¿Quiénes requieren profilaxis?\n✅ Prótesis valvulares (mecánicas o biológicas).\n✅ Material protésico utilizado para reparación valvular.\n✅ Antecedente de endocarditis infecciosa.\n✅ Algunas cardiopatías congénitas de alto riesgo:\n• Cianóticas no reparadas.\n• Reparadas con material protésico durante los primeros 6 meses.\n• Reparadas con defectos residuales junto al material protésico.\nNo se recomienda en el prolapso mitral, soplos inocentes ni la mayoría de las valvulopatías adquiridas.\nTema: Profilaxis de la endocarditis infecciosa.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una de las preguntas más frecuentes del MIR y de los exámenes de residencia porque evalúa quién necesita profilaxis y cuál es el antibiótico correcto.\nAnalicemos el caso\nEl paciente presenta:\n• Prótesis valvular mecánica.\n• Procedimiento dental con manipulación gingival.\nAmbas condiciones cumplen criterios para:\nProfilaxis antibiótica frente a endocarditis infecciosa.\n¿Cuál es el antibiótico de elección?\nPaciente sin alergia a penicilinas\n➡️ Amoxicilina 2 g VO\n30-60 minutos antes del procedimiento.\n¿Y si es alérgico a penicilinas?\nLas alternativas incluyen:\n• Azitromicina.\n• Claritromicina.\n• Doxiciclina.\n⚠️ Perla MIR: Las guías más recientes ya no recomiendan clindamicina como alternativa rutinaria debido a su mayor riesgo de reacciones adversas, especialmente infección por Clostridioides difficile.\n¿En qué procedimientos se recomienda?\nPrincipalmente en procedimientos dentales que produzcan:\n• Manipulación del tejido gingival.\n• Manipulación de la región periapical.\n• Perforación de la mucosa oral.\nNo está indicada para procedimientos digestivos, genitourinarios o respiratorios de rutina en ausencia de infección activa.\n¿Por qué las otras opciones son incorrectas?\nA. No administrar profilaxis ❌\nIncorrecto. El paciente tiene una prótesis valvular, una indicación clásica de profilaxis.\nC. Ceftriaxona durante 5 días ❌\nNo existe indicación de tratamiento antibiótico prolongado como profilaxis.\nD. Vancomicina antes y después ❌\nLa vancomicina solo se reserva para situaciones muy específicas y no constituye el esquema habitual de profilaxis.\n¿Cuál es la trampa del examen?\nLos exámenes suelen preguntar:\n¿Quién necesita profilaxis?\nNo todos los pacientes con valvulopatías la requieren.\nDebes memorizar únicamente los grupos de alto riesgo.\nRegla de oro para residencia\nPrótesis valvular + procedimiento dental con manipulación gingival\n↓\nAmoxicilina 2 g VO, 30-60 minutos antes.\nPerlas de examen\n✅ Prótesis valvular = indicación absoluta de profilaxis.\n✅ Antecedente de endocarditis = siempre requiere profilaxis.\n✅ La profilaxis consiste en una única dosis preprocedimiento, no en varios días de antibióticos.\n✅ El microorganismo que se busca prevenir con mayor frecuencia es Streptococcus viridans, procedente de la flora oral.\nReferencias\n• 2023 ESC Guidelines for the Management of Infective Endocarditis.\n• American Heart Association (AHA) Scientific Statement on Prevention of Infective Endocarditis.\n• Manual AMIR – Enfermedades Infecciosas."
  },
  {
    "id": "dr-q-eval1-24",
    "examArea": "Hematología / Anemias",
    "topic": "Hematología / Anemias",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Una mujer de 34 años consulta por fatiga progresiva, disnea de esfuerzo y palpitaciones desde hace tres meses, asociando menstruaciones abundantes de larga data; al examen físico presenta palidez mucocutánea, coiloniquia y queilitis angular, y en los estudios de laboratorio se observa hemoglobina de 8,5 g/dL, VCM de 68 fL, HCM de 22 pg, reticulocitos de 0,6%, ferritina de 8 ng/mL, hierro sérico de 20 μg/dL, TIBC de 460 μg/dL y saturación de transferrina de 5%, ¿cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Anemia de enfermedad crónica."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Talasemia menor."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Anemia ferropénica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Anemia sideroblástica."
      }
    ],
    "correctOptionId": "C",
    "explanation": "La paciente presenta una anemia microcítica e hipocrómica con ferritina disminuida, hierro sérico bajo, TIBC elevado y saturación de transferrina marcadamente reducida, patrón característico de anemia ferropénica secundaria a pérdidas crónicas, en este caso de origen ginecológico.\n\nLo que debes saber para el examen\nEsta pregunta evalúa el reconocimiento del patrón clásico de anemia microcítica y la interpretación del perfil férrico.\nTema: Abordaje diagnóstico de las anemias.",
    "keyPoints": [],
    "theoryContent": "La paciente presenta una anemia microcítica e hipocrómica con ferritina disminuida, hierro sérico bajo, TIBC elevado y saturación de transferrina marcadamente reducida, patrón característico de anemia ferropénica secundaria a pérdidas crónicas, en este caso de origen ginecológico.\n\nLo que debes saber para el examen\nEsta pregunta evalúa el reconocimiento del patrón clásico de anemia microcítica y la interpretación del perfil férrico.\nTema: Abordaje diagnóstico de las anemias.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta parece sencilla, pero en el examen el error típico no es no saber la respuesta, sino no saber justificarla rápido bajo presión.\nPaso 1. Confirmar anemia\nHemoglobina:\n8,5 g/dL\n→ Hay anemia.\n\nPaso 2. Clasificación por VCM\nVCM:\n68 fL\n→ Anemia microcítica.\nEn este punto, el examen ya te obliga a pensar en:\n• Ferropenia\n• Talasemia\n• Anemia de enfermedad crónica\n• Anemia sideroblástica\n\nPaso 3. Reticulocitos\nReticulocitos:\n0,6%\n→ Respuesta medular baja.\nEsto indica un problema de producción eritrocitaria, no hemólisis.\n\nPaso 4. Perfil de hierro (clave del diagnóstico)\n• Ferritina ↓↓↓ → depósitos agotados\n• Hierro sérico ↓ → poco hierro circulante\n• TIBC ↑ → aumento compensatorio de transferrina\n• Saturación de transferrina ↓↓↓ → muy baja disponibilidad\n→ Todo el patrón es ferropenia absoluta.\n\nPERLAS DE EXAMEN\n✅ La ferropenia es la causa más frecuente de anemia microcítica.✅ La ferritina baja es diagnóstica de déficit de hierro (si no hay inflamación).✅ El TIBC elevado es clave para diferenciar ferropenia de anemia de enfermedad crónica.✅ La coiloniquia y queilitis angular son signos clínicos clásicos de ferropenia.✅ En toda anemia ferropénica en adultos hay que buscar la causa del sangrado crónico.\n\nAlgoritmo mental rápido\nAnemia → VCM → reticulocitos → perfil de hierro → diagnóstico\n\nReferencias\n• Harrison. Principios de Medicina Interna.\n• Hoffbrand’s Essential Haematology.\n• Manual AMIR – Hematología."
  },
  {
    "id": "dr-q-eval1-25",
    "examArea": "Hematología / Anemias",
    "topic": "Hematología / Anemias",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 67 años con antecedente de artritis reumatoide de larga evolución consulta por astenia y disminución de la tolerancia al ejercicio; en los estudios de laboratorio se reporta hemoglobina 9,2 g/dL, VCM 78 fL, reticulocitos 0,7%, ferritina 180 ng/mL, hierro sérico 35 μg/dL, TIBC 180 μg/dL y saturación de transferrina 18%, ¿cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Anemia ferropénica."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Anemia de enfermedad crónica."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Talasemia menor."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Anemia sideroblástica."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente presenta una anemia microcítica con reticulocitos bajos, hierro sérico disminuido, ferritina elevada y TIBC disminuido, patrón característico de anemia de enfermedad crónica secundaria a la inflamación persistente por artritis reumatoide.\n\nLo que debes saber para el examen\nEsta pregunta evalúa la capacidad de diferenciar la anemia de enfermedad crónica de la anemia ferropénica, uno de los temas más preguntados en los exámenes de residencia.\nTema: Anemia de enfermedad crónica.",
    "keyPoints": [],
    "theoryContent": "El paciente presenta una anemia microcítica con reticulocitos bajos, hierro sérico disminuido, ferritina elevada y TIBC disminuido, patrón característico de anemia de enfermedad crónica secundaria a la inflamación persistente por artritis reumatoide.\n\nLo que debes saber para el examen\nEsta pregunta evalúa la capacidad de diferenciar la anemia de enfermedad crónica de la anemia ferropénica, uno de los temas más preguntados en los exámenes de residencia.\nTema: Anemia de enfermedad crónica.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es la pregunta “gemela” de la anemia ferropénica. El examen busca que aprendas a diferenciarlas usando el perfil férrico.\nPaso 1. Confirmar anemia\nHemoglobina: 9,2 g/dL → hay anemia.\nPaso 2. Clasificar por VCM\nVCM: 78 fL → anemia microcítica.\nDiagnósticos principales:\n• Ferropenia\n• Anemia de enfermedad crónica\n• Talasemia\n• Anemia sideroblástica\nPaso 3. Reticulocitos\nReticulocitos: 0,7% → respuesta medular disminuida (problema de producción).\nPaso 4. Perfil de hierro (CLAVE)\n• Ferritina ↑ (180 ng/mL) → reservas conservadas o aumentadas\n• Hierro sérico ↓ → poco hierro circulante\n• TIBC ↓ (180 μg/dL) → menos transferrina\n• Saturación de transferrina ↓ → menos hierro disponible\n👉 Esto corresponde a anemia de enfermedad crónica.\nFisiopatología\nEn la artritis reumatoide aumenta la hepcidina, que:\n• Disminuye absorción intestinal de hierro\n• Bloquea liberación desde macrófagos\n• Reduce hierro disponible para médula ósea\nResultado: hierro almacenado alto pero inutilizable.\n\nPor qué las otras opciones son incorrectas\nA. Anemia ferropénica ❌Ferritina baja y TIBC alto (opuesto al caso).\nC. Talasemia menor ❌Hierro y ferritina normales, microcitosis desproporcionada y eritrocitos relativamente elevados.\nD. Anemia sideroblástica ❌Hierro y ferritina elevados con saturación de transferrina alta.\n\nPERLAS DE EXAMEN\n✅ Hepcidina = clave de la anemia de enfermedad crónica✅ Ferritina alta + TIBC bajo = diagnóstico típico✅ Artritis reumatoide = causa clásica✅ Ferritina = reactante de fase aguda\n\nAlgoritmo rápido\n• Ferritina ↓ + TIBC ↑ → ferropenia\n• Ferritina ↑ + TIBC ↓ → anemia de enfermedad crónica\nReferencias\n• Harrison. Principios de Medicina Interna\n• Hoffbrand’s Essential Haematology\n• Manual AMIR – Hematología"
  },
  {
    "id": "dr-q-eval1-26",
    "examArea": "Hematología / Anemias",
    "topic": "Hematología / Anemias",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 69 años consulta por fatiga progresiva, parestesias en ambos pies e inestabilidad para la marcha desde hace varios meses. Al examen físico presenta palidez, disminución de la sensibilidad vibratoria en miembros inferiores y glositis atrófica. Los estudios de laboratorio muestran hemoglobina de 8,8 g/dL, VCM de 116 fL, reticulocitos de 0,5%, leucopenia leve, plaquetas de 110.000/μL, vitamina B12 de 110 pg/mL y ácido metilmalónico elevado.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Anemia ferropénica."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Anemia megaloblástica por déficit de vitamina B12."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Anemia de enfermedad crónica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Anemia aplásica."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente presenta una anemia macrocítica, con reticulocitos bajos, pancitopenia leve, déficit de vitamina B12 y manifestaciones neurológicas, hallazgos característicos de una anemia megaloblástica por deficiencia de vitamina B12.\n\nLo que debes saber para el examen\nEsta pregunta evalúa el reconocimiento del patrón clásico de anemia macrocítica megaloblástica y su diferenciación de otras causas de macrocitosis.\nTema: Anemia megaloblástica.",
    "keyPoints": [],
    "theoryContent": "El paciente presenta una anemia macrocítica, con reticulocitos bajos, pancitopenia leve, déficit de vitamina B12 y manifestaciones neurológicas, hallazgos característicos de una anemia megaloblástica por deficiencia de vitamina B12.\n\nLo que debes saber para el examen\nEsta pregunta evalúa el reconocimiento del patrón clásico de anemia macrocítica megaloblástica y su diferenciación de otras causas de macrocitosis.\nTema: Anemia megaloblástica.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nAhora cambiamos completamente el enfoque.\nEn las preguntas anteriores el primer paso fue identificar una anemia microcítica.\nAquí el dato clave es otro.\nPaso 1. Confirmar anemia\nHemoglobina:\n8,8 g/dL\n→ El paciente tiene anemia.\n\nPaso 2. Clasificar por VCM\nVCM:\n116 fL\n→ Anemia macrocítica.\nCuando el VCM es mayor de 100 fL, debes pensar principalmente en:\n• Déficit de vitamina B12.\n• Déficit de ácido fólico.\n• Alcoholismo.\n• Hepatopatía.\n• Hipotiroidismo.\n• Síndrome mielodisplásico.\n\nPaso 3. Reticulocitos\nReticulocitos:\n0,5%\n→ La médula ósea no está respondiendo adecuadamente.\nSe trata nuevamente de un problema de producción.\n\nPaso 4. Buscar la causa de la macrocitosis\nEl laboratorio muestra:\n• Vitamina B12 ↓\n• Ácido metilmalónico ↑\nEste último dato prácticamente confirma:\nDéficit de vitamina B12.\n¿Por qué?\nPorque la vitamina B12 es necesaria para convertir el metilmalonil-CoA en succinil-CoA.\nCuando falta vitamina B12:\n→ Aumenta el ácido metilmalónico.\n\nPaso 5. El dato que más preguntan en residencia\nEl paciente presenta:\n• Parestesias.\n• Alteración de la marcha.\n• Disminución de la sensibilidad vibratoria.\nEstos síntomas son consecuencia de la:\nDesmielinización de los cordones posteriores y laterales de la médula espinal (degeneración combinada subaguda).\n⚠️ Este compromiso neurológico NO ocurre en el déficit de ácido fólico.\n\n¿Por qué las otras opciones son incorrectas?\nA. Anemia ferropénica ❌\nProduce una anemia microcítica, no macrocítica.\nC. Anemia de enfermedad crónica ❌\nGeneralmente es normocítica o microcítica y no produce manifestaciones neurológicas.\nD. Anemia aplásica ❌\nPuede producir pancitopenia, pero no cursa con macrocitosis marcada, glositis, déficit de vitamina B12 ni elevación del ácido metilmalónico.\n\nPERLAS DE EXAMEN\n✅ VCM >100 fL = pensar en anemia macrocítica.\n✅ Déficit de vitamina B12 → ↑ ácido metilmalónico + síntomas neurológicos.\n✅ Déficit de ácido fólico → NO produce alteraciones neurológicas.\n✅ La anemia megaloblástica puede asociarse a pancitopenia por alteración de la síntesis de ADN.\n\nAlgoritmo mental rápido\nAnemia → VCM\n• VCM <80 → Microcítica.\n• VCM 80-100 → Normocítica.\n• VCM >100 → Macrocítica.\nSi es macrocítica:\n→ Vitamina B12 y ácido fólico.\nSi además hay:\nNeuropatía + ácido metilmalónico elevado\n↓\nDéficit de vitamina B12.\nReferencias\n• Harrison. Principios de Medicina Interna.\n• Hoffbrand's Essential Haematology.\n• Manual AMIR – Hematología."
  },
  {
    "id": "dr-q-eval1-27",
    "examArea": "Hematología / Anemias",
    "topic": "Hematología / Anemias",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Una mujer de 61 años consulta por fatiga progresiva, parestesias en manos y pies y dificultad para caminar desde hace varios meses. Refiere antecedente de tiroiditis de Hashimoto. Al examen físico presenta glositis atrófica y disminución de la sensibilidad vibratoria en miembros inferiores. Los laboratorios muestran: hemoglobina 8,7 g/dL, VCM 118 fL, vitamina B12 95 pg/mL, ácido metilmalónico elevado y homocisteína elevada. ¿Cuál es la causa más probable de la anemia de esta paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Déficit de ácido fólico secundario a malnutrición."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Destrucción autoinmune de las células parietales gástricas con déficit de factor intrínseco."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Resección del íleon terminal."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Enfermedad celíaca con malabsorción de vitamina B12."
      }
    ],
    "correctOptionId": "B",
    "explanation": "La anemia perniciosa es una enfermedad autoinmunitaria caracterizada por la destrucción de las células parietales gástricas y la producción de anticuerpos contra el factor intrínseco, lo que impide la absorción de vitamina B12 en el íleon terminal. Es la causa más frecuente de déficit de vitamina B12 en adultos y se asocia con otras enfermedades autoinmunes, como la tiroiditis de Hashimoto.\n\nLo que debes saber para el examen\nLa anemia perniciosa es la causa más frecuente de anemia megaloblástica por déficit de vitamina B12 en adultos.\nTema: Anemia perniciosa.",
    "keyPoints": [],
    "theoryContent": "La anemia perniciosa es una enfermedad autoinmunitaria caracterizada por la destrucción de las células parietales gástricas y la producción de anticuerpos contra el factor intrínseco, lo que impide la absorción de vitamina B12 en el íleon terminal. Es la causa más frecuente de déficit de vitamina B12 en adultos y se asocia con otras enfermedades autoinmunes, como la tiroiditis de Hashimoto.\n\nLo que debes saber para el examen\nLa anemia perniciosa es la causa más frecuente de anemia megaloblástica por déficit de vitamina B12 en adultos.\nTema: Anemia perniciosa.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta busca diferenciar el déficit de vitamina B12 de la anemia perniciosa. No son sinónimos: la anemia perniciosa es una causa específica de déficit de vitamina B12.\n\nPaso 1. Reconocer la anemia\nEl paciente presenta hemoglobina baja y VCM de 118 fL, lo que indica una anemia macrocítica.\n\nPaso 2. Confirmar déficit de vitamina B12\nLos datos clave son vitamina B12 disminuida, ácido metilmalónico elevado y homocisteína elevada, lo que confirma un verdadero déficit de vitamina B12.\n\nPaso 3. Buscar la causa\nEl dato más importante es el antecedente de enfermedad autoinmune (Hashimoto), lo que orienta fuertemente a una etiología autoinmunitaria como la anemia perniciosa. En esta enfermedad ocurre destrucción autoinmune de las células parietales, disminución del factor intrínseco, mala absorción de vitamina B12 y desarrollo de anemia megaloblástica.\n\n¿Qué anticuerpos preguntan en el examen?\nLos más importantes son los anticuerpos contra el factor intrínseco (muy específicos) y los anticuerpos contra las células parietales (más sensibles pero menos específicos).\n\n¿Por qué las otras opciones son incorrectas?\nA. El déficit de ácido fólico no explica las manifestaciones neurológicas ni el aumento del ácido metilmalónico.C. La resección del íleon terminal también produce déficit de vitamina B12, pero el contexto autoinmunitario del caso orienta a anemia perniciosa.D. La enfermedad celíaca produce principalmente malabsorción de hierro y ácido fólico; el déficit de B12 es menos característico.\n\nPERLAS DE EXAMEN\nLa anemia perniciosa es una enfermedad autoinmunitaria, se produce por déficit de factor intrínseco, la vitamina B12 se absorbe en el íleon terminal pero requiere dicho factor, se asocia a Hashimoto, vitíligo, diabetes tipo 1 y enfermedad de Addison, y los anticuerpos anti-factor intrínseco son los más específicos.\n\nAlgoritmo mental rápido\nAnemia macrocítica → vitamina B12 baja → síntomas neurológicos → contexto autoinmune → anemia perniciosa.\nReferencias\n• Harrison. Principios de Medicina Interna\n• Hoffbrand’s Essential Haematology\n• Manual AMIR – Hematología"
  },
  {
    "id": "dr-q-eval1-28",
    "examArea": "Toxicología / Urgencias",
    "topic": "Toxicología / Urgencias",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 34 años consulta al servicio de urgencias 2 horas después de sufrir una mordedura de serpiente mientras realizaba labores agrícolas en una zona rural, refiriendo dolor intenso y edema progresivo del miembro inferior izquierdo; al examen físico presenta edema que compromete toda la pierna, equimosis alrededor del sitio de la mordedura y sangrado por los sitios de venopunción, y los laboratorios muestran plaquetas de 85.000/μL, fibrinógeno de 90 mg/dL y TP y TPT prolongados, por lo que se pregunta cuál es el manejo inicial más adecuado.",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar antibióticos de amplio espectro y realizar desbridamiento quirúrgico inmediato."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar suero antiofídico polivalente intravenoso y monitorizar la respuesta clínica y de laboratorio."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Realizar torniquete proximal y aplicar hielo sobre la extremidad afectada."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Indicar observación durante 24 horas y analgesia, ya que las alteraciones de la coagulación suelen resolverse espontáneamente."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente presenta un accidente ofídico moderado-grave con manifestaciones sistémicas (coagulopatía de consumo) y compromiso local progresivo, lo cual constituye una indicación absoluta de administración de suero antiofídico, que es el único tratamiento capaz de neutralizar el veneno circulante.\n\nLo que debes saber para el examen\nLas indicaciones de suero antiofídico incluyen edema progresivo, alteraciones de la coagulación, sangrado espontáneo, compromiso neurotóxico, hipotensión o choque, y rabdomiólisis o lesión renal aguda.\nTema: Accidente ofídico.",
    "keyPoints": [],
    "theoryContent": "El paciente presenta un accidente ofídico moderado-grave con manifestaciones sistémicas (coagulopatía de consumo) y compromiso local progresivo, lo cual constituye una indicación absoluta de administración de suero antiofídico, que es el único tratamiento capaz de neutralizar el veneno circulante.\n\nLo que debes saber para el examen\nLas indicaciones de suero antiofídico incluyen edema progresivo, alteraciones de la coagulación, sangrado espontáneo, compromiso neurotóxico, hipotensión o choque, y rabdomiólisis o lesión renal aguda.\nTema: Accidente ofídico.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta evalúa si reconoces cuándo está indicado el antiveneno.\nEl paciente presenta dolor intenso, edema progresivo y equimosis, lo que ya sugiere envenenamiento significativo, y además hay datos de compromiso sistémico como sangrado por venopunción, plaquetopenia, fibrinógeno bajo y TP y TPT prolongados, lo que indica una coagulopatía inducida por veneno, típica de serpientes del género Bothrops.\nEl tratamiento específico es el suero antiofídico intravenoso, que debe administrarse de forma inmediata ante criterios clínicos de gravedad, incluso si han pasado varias horas desde la mordedura. Además, el manejo incluye analgesia, limpieza de la herida, profilaxis antitetánica si está indicada y monitorización clínica y de laboratorio.\nLas otras opciones son incorrectas porque los antibióticos y el desbridamiento no son de rutina y este último puede ser perjudicial en fase aguda, el torniquete y el hielo están contraindicados por riesgo de isquemia y daño tisular, y la observación sin tratamiento es inadecuada ante la presencia de coagulopatía y sangrado.\nPERLAS DE EXAMEN\nEl suero antiofídico es el único tratamiento específico del accidente ofídico. No deben usarse torniquetes, incisiones, succión del veneno ni hielo. El edema progresivo y las alteraciones de la coagulación son criterios de gravedad, y en Latinoamérica el género Bothrops es el más frecuente, caracterizado por edema, necrosis local y coagulopatía.\nAlgoritmo mental rápido\nMordedura de serpiente → ¿hay edema progresivo o compromiso sistémico? → sí → administrar suero antiofídico intravenoso.\nReferencias\nManual AMIR – Toxicología.Guías del Ministerio de Salud de Colombia para el manejo del accidente ofídico.Harrison. Principios de Medicina Interna."
  },
  {
    "id": "dr-q-eval1-29",
    "examArea": "Toxicología / Accidente Ofídico",
    "topic": "Toxicología / Accidente Ofídico",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 41 años consulta al servicio de urgencias 90 minutos después de sufrir una mordedura de serpiente mientras trabajaba en un cultivo de cacao. Al examen físico presenta ptosis palpebral bilateral, diplopía, disfagia y disartria, con edema mínimo alrededor del sitio de la mordedura y sin alteraciones de la coagulación. Los signos vitales son estables.\n¿Cuál es el género de serpiente más probablemente responsable del accidente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Bothrops."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Lachesis."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Micrurus (coral)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Crotalus."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El cuadro clínico corresponde a un accidente elapídico (coral), caracterizado por un veneno predominantemente neurotóxico, con escaso compromiso local y aparición progresiva de parálisis de pares craneales y debilidad muscular, que puede evolucionar a insuficiencia respiratoria.\n\nLo que debes saber para el examen\nEl examen suele diferenciar los accidentes ofídicos según el tipo de veneno predominante:\n• Bothrops → Hemotóxico y citotóxico.\n• Lachesis → Hemotóxico + síndrome vagal.\n• Micrurus → Neurotóxico.\n• Crotalus → Neurotóxico + miotóxico.\nTema: Diferencias entre accidentes ofídicos.",
    "keyPoints": [],
    "theoryContent": "El cuadro clínico corresponde a un accidente elapídico (coral), caracterizado por un veneno predominantemente neurotóxico, con escaso compromiso local y aparición progresiva de parálisis de pares craneales y debilidad muscular, que puede evolucionar a insuficiencia respiratoria.\n\nLo que debes saber para el examen\nEl examen suele diferenciar los accidentes ofídicos según el tipo de veneno predominante:\n• Bothrops → Hemotóxico y citotóxico.\n• Lachesis → Hemotóxico + síndrome vagal.\n• Micrurus → Neurotóxico.\n• Crotalus → Neurotóxico + miotóxico.\nTema: Diferencias entre accidentes ofídicos.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica porque el examen espera que identifiques la serpiente por el cuadro clínico, incluso sin verla.\n\nPaso 1. ¿Hay compromiso local importante?\nNo.\nSolo presenta:\n• Edema mínimo.\n• Poco dolor.\n↓\nEsto hace poco probable un accidente por Bothrops o Lachesis.\n\nPaso 2. ¿Qué predomina?\nEl paciente presenta:\n• Ptosis.\n• Diplopía.\n• Disfagia.\n• Disartria.\n↓\nTodo corresponde a una:\nParálisis neuromuscular.\nEsto es característico de:\nMicrurus (coral).\n\n¿Cómo diferenciar las serpientes en el examen?\n🟢 Bothrops (mapaná, talla X)\nEs la más frecuente en Colombia.\nProduce:\n• Dolor intenso.\n• Edema importante.\n• Ampollas.\n• Necrosis.\n• Coagulopatía.\n• Sangrado.\nPalabra clave del examen:\nEdema + sangrado.\n\n🔴 Lachesis (verrugosa)\nProduce un cuadro similar al Bothrops, pero además presenta un síndrome vagal, caracterizado por:\n• Hipotensión.\n• Bradicardia.\n• Náuseas.\n• Vómitos.\n• Diarrea.\nPalabra clave:\nVagalismo.\n\n⚫ Micrurus (coral)\nProduce:\n• Ptosis.\n• Diplopía.\n• Disfagia.\n• Disartria.\n• Parálisis respiratoria.\nPrácticamente no produce edema ni necrosis.\nPalabra clave:\nNeurotoxicidad pura.\n\n🟡 Crotalus (cascabel)\nProduce:\n• Neurotoxicidad.\n• Rabdomiólisis.\n• Mioglobinuria.\n• Insuficiencia renal aguda.\nPalabra clave:\nOrina oscura + CPK elevada.\n\n¿Por qué las otras opciones son incorrectas?\nA. Bothrops ❌\nEsperaríamos edema importante, dolor intenso y alteraciones de la coagulación.\nB. Lachesis ❌\nAdemás del edema y la coagulopatía, habría manifestaciones vagales (hipotensión, vómitos, diarrea).\nD. Crotalus ❌\nProduce neurotoxicidad, pero suele asociarse a rabdomiólisis y mioglobinuria, hallazgos ausentes en este caso.\n\nPERLAS DE EXAMEN\n✅ Bothrops = edema + necrosis + coagulopatía.\n✅ Lachesis = Bothrops + síndrome vagal.\n✅ Micrurus = neurotoxicidad con mínimo compromiso local.\n✅ Crotalus = neurotoxicidad + rabdomiólisis + mioglobinuria.\n\nAlgoritmo mental rápido\n¿Qué predomina?\n• Edema + sangrado → Bothrops.\n• Edema + vagalismo → Lachesis.\n• Neurotoxicidad pura → Micrurus.\n• Neurotoxicidad + rabdomiólisis → Crotalus.\nReferencias\n• Manual AMIR – Toxicología.\n• Guía Colombiana para el Manejo del Accidente Ofídico.\n• Harrison. Principios de Medicina Interna."
  },
  {
    "id": "dr-q-eval1-30",
    "examArea": "Toxicología / Accidente Ofídico",
    "topic": "Toxicología / Accidente Ofídico",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 29 años consulta al servicio de urgencias 3 horas después de sufrir una mordedura de serpiente del género Bothrops en el miembro inferior derecho. Al examen físico presenta edema que compromete toda la extremidad, intenso dolor local, equimosis y sangrado por el sitio de la mordedura. Los laboratorios muestran:\n• Plaquetas: 70.000/μL\n• Fibrinógeno: 80 mg/dL\n• TP y TPT prolongados.\nSe encuentra hemodinámicamente estable, sin choque ni compromiso neurológico.\n¿Cómo se clasifica este accidente ofídico?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Accidente bothrópico leve."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Accidente bothrópico moderado."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Accidente bothrópico grave."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Accidente bothrópico seco (sin envenenamiento)."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente presenta compromiso local severo (edema de toda la extremidad y equimosis) asociado a manifestaciones sistémicas con coagulopatía de consumo, criterios que clasifican el cuadro como un accidente bothrópico grave, requiriendo administración inmediata de suero antiofídico y monitorización estrecha.\n\nLo que debes saber para el examen\nClasificación del accidente bothrópico\nLeve\n• Dolor.\n• Edema limitado al sitio de la mordedura.\n• Sin alteraciones de coagulación.\nModerado\n• Edema que sobrepasa el segmento comprometido.\n• Equimosis.\n• Alteraciones leves de la coagulación.\n• Sangrado leve.\nGrave\n• Edema de toda la extremidad o rápidamente progresivo.\n• Necrosis o ampollas extensas.\n• Sangrado espontáneo.\n• Coagulopatía importante.\n• Hipotensión, choque o lesión renal aguda.\nTema: Clasificación del accidente bothrópico.",
    "keyPoints": [],
    "theoryContent": "El paciente presenta compromiso local severo (edema de toda la extremidad y equimosis) asociado a manifestaciones sistémicas con coagulopatía de consumo, criterios que clasifican el cuadro como un accidente bothrópico grave, requiriendo administración inmediata de suero antiofídico y monitorización estrecha.\n\nLo que debes saber para el examen\nClasificación del accidente bothrópico\nLeve\n• Dolor.\n• Edema limitado al sitio de la mordedura.\n• Sin alteraciones de coagulación.\nModerado\n• Edema que sobrepasa el segmento comprometido.\n• Equimosis.\n• Alteraciones leves de la coagulación.\n• Sangrado leve.\nGrave\n• Edema de toda la extremidad o rápidamente progresivo.\n• Necrosis o ampollas extensas.\n• Sangrado espontáneo.\n• Coagulopatía importante.\n• Hipotensión, choque o lesión renal aguda.\nTema: Clasificación del accidente bothrópico.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta clásica porque el examen suele pedirte clasificar la gravedad, ya que de ello depende la cantidad de suero antiofídico a administrar.\n\nPaso 1. Evaluar el compromiso local\nEl paciente presenta:\n• Dolor intenso.\n• Edema de toda la extremidad.\n• Equimosis.\n↓\nEl compromiso local ya es importante.\n\nPaso 2. Buscar compromiso sistémico\nLos laboratorios muestran:\n• Plaquetopenia.\n• Hipofibrinogenemia.\n• TP y TPT prolongados.\n↓\nExiste una coagulopatía de consumo inducida por el veneno.\n\nPaso 3. Clasificar\nAl combinar:\n• Edema extenso.\n• Alteraciones importantes de la coagulación.\n↓\nSe trata de un:\nAccidente bothrópico grave.\n\n¿Por qué las otras opciones son incorrectas?\nA. Leve ❌\nEn el accidente leve el edema permanece localizado y no existen alteraciones sistémicas.\nB. Moderado ❌\nPuede haber edema progresivo y alteraciones leves de la coagulación, pero no una coagulopatía tan marcada con fibrinógeno muy disminuido y compromiso de toda la extremidad.\nD. Accidente seco ❌\nEn un accidente seco no aparecen manifestaciones locales ni sistémicas porque no hubo inoculación significativa de veneno.\n\nPERLAS DE EXAMEN\n✅ Leve = edema localizado.\n✅ Moderado = edema progresivo + alteraciones leves de coagulación.\n✅ Grave = edema masivo + coagulopatía importante ± choque, necrosis o lesión renal aguda.\n✅ La clasificación determina el número de frascos de suero antiofídico que debe administrarse según los protocolos nacionales.\n\nAlgoritmo mental rápido\nBothrops\n↓\n¿Solo edema local? → Leve.\n¿Edema progresivo + alteraciones leves? → Moderado.\n¿Edema masivo + coagulopatía importante o compromiso sistémico? → Grave.\nReferencias\n• Guía Colombiana para el Manejo del Accidente Ofídico.\n• Manual AMIR – Toxicología.\n• Harrison. Principios de Medicina Interna."
  },
  {
    "id": "dr-q-eval1-31",
    "examArea": "Cardiología / Arritmias",
    "topic": "Cardiología / Arritmias",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 62 años, exfumador, sin otros antecedentes de interés, acude al servicio de Urgencias tras presentar un síncope de inicio súbito mientras caminaba. No presentó síntomas previos y recuperó espontáneamente la conciencia a los 2-3 minutos. Desde entonces refiere mareo. A su llegada presenta:TA: 155/85 mmHg, FC: 50 lpm, Glucemia capilar: 135 mg/Dl. Se realiza un electrocardiograma que evidencia un bloqueo auriculoventricular con ondas P que ocasionalmente no son conducidas a los ventrículos, manteniéndose constante el intervalo PR de los latidos conducidos.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Bloqueo AV de primer grado."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Bloqueo AV de segundo grado Mobitz I."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Bloqueo AV de segundo grado Mobitz II."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Bloqueo AV de tercer grado."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El Mobitz II se caracteriza por ondas P no conducidas de forma súbita, sin prolongación progresiva del intervalo PR. Es un bloqueo generalmente localizado en el sistema His-Purkinje, con riesgo elevado de progresión a bloqueo AV completo, especialmente cuando produce síncope.\n\nLo que debes saber para el examen\nDiferenciar los bloqueos AV\nBloqueo AV de 1.er grado\n→ Todas las ondas P conducen.→ PR >200 ms, pero constante.\nMobitz I (Wenckebach)\n→ PR se prolonga progresivamente→ hasta que aparece una P no conducida.\nMobitz II\n→ PR constante→ aparece súbitamente una P no conducida.\nBloqueo AV de 3.er grado\n→ Disociación AV completa.→ Las ondas P y los QRS marchan independientemente.",
    "keyPoints": [],
    "theoryContent": "El Mobitz II se caracteriza por ondas P no conducidas de forma súbita, sin prolongación progresiva del intervalo PR. Es un bloqueo generalmente localizado en el sistema His-Purkinje, con riesgo elevado de progresión a bloqueo AV completo, especialmente cuando produce síncope.\n\nLo que debes saber para el examen\nDiferenciar los bloqueos AV\nBloqueo AV de 1.er grado\n→ Todas las ondas P conducen.→ PR >200 ms, pero constante.\nMobitz I (Wenckebach)\n→ PR se prolonga progresivamente→ hasta que aparece una P no conducida.\nMobitz II\n→ PR constante→ aparece súbitamente una P no conducida.\nBloqueo AV de 3.er grado\n→ Disociación AV completa.→ Las ondas P y los QRS marchan independientemente.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta es excelente porque obliga a diferenciar los bloqueos AV de segundo grado, que son muy fáciles de confundir.\nPaso 1. ¿Hay bloqueo de la conducción AV?\nSí.\nHay ondas P que no consiguen generar un complejo QRS.\n↓\nExiste un bloqueo AV.\n\nPaso 2. ¿Qué ocurre con el intervalo PR?\nAquí está la clave:\nEl PR permanece constante antes de la onda P bloqueada.\nNo existe prolongación progresiva.\n↓\nEsto descarta el Mobitz I.\n↓\nMobitz II.\n\n¿Cómo diferenciar Mobitz I de Mobitz II?\nMobitz I → \"se va alargando\"\nP → QRSP → QRSP → QRS\nPR ↑\nP → ❌ QRS\nEs decir:\nPR progresivamente más largo → P bloqueada.\n\nMobitz II → \"se cae de repente\"\nP → QRSP → QRSP → QRSP → ❌ QRS\nPero:\nPR permanece constante.\nEsta es la clave.\n\n¿Por qué el síncope es importante?\nEl paciente presenta:\nSíncope + bradicardia + Mobitz II\nEsto es clínicamente relevante porque el Mobitz II puede progresar súbitamente a:\nBloqueo AV completo.\nPor eso no es un bloqueo benigno que simplemente se observe.\n\n¿Por qué las otras opciones son incorrectas?\nA. Bloqueo AV de primer grado ❌\nEn el primer grado todas las ondas P conducen. Lo único anormal es un PR prolongado.\nB. Mobitz I ❌\nEn Mobitz I existe prolongación progresiva del PR antes de que aparezca la P bloqueada.\nD. Bloqueo AV de tercer grado ❌\nEn el tercer grado existe disociación auriculoventricular completa: las ondas P y los QRS tienen ritmos independientes.\n\nPERLAS DE EXAMEN\n✅ Mobitz I = PR se alarga progresivamente → P bloqueada.\n✅ Mobitz II = PR constante → P bloqueada súbitamente.\n✅ Mobitz II tiene mayor riesgo de progresar a bloqueo AV completo.\n✅ Síncope + Mobitz II = paciente de alto riesgo y requiere valoración para marcapasos.\n\nAlgoritmo mental rápido\n¿Todas las P conducen?\n→ Sí → 1.er grado si PR >200 ms.\n→ No → bloqueo AV de 2.º grado.\nDespués pregunta:\n¿PR se alarga progresivamente?\n→ Sí → Mobitz I.\n→ No, PR constante → Mobitz II.\n¿Existe disociación P-QRS?\n→ Sí → 3.er grado.\nReferencias\n• ESC Guidelines for the management of cardiac pacing and cardiac resynchronization therapy.\n• Braunwald's Heart Disease.\n• Manual AMIR – Cardiología."
  },
  {
    "id": "dr-q-eval1-32",
    "examArea": "Cardiología / Arritmias",
    "topic": "Cardiología / Arritmias",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "En referencia al paciente del caso clínico anterior, con síncope, bradicardia y bloqueo AV de segundo grado Mobitz II, señale cuál es la opción terapéutica más apropiada.",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "El paciente ha de ser ingresado para implantarle un marcapasos definitivo."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Se trata de un síncope vasovagal y el bloqueo es de bajo grado, por lo que puede ser dado de alta para seguimiento y control ambulatorio."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Para el manejo de este paciente es indispensable la realización de una coronariografía con vistas a descartar sustrato coronario que justifique su clínica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Por el alto riesgo de parada cardíaca se debería realizar una cardioversión eléctrica o farmacológica cuanto antes."
      }
    ],
    "correctOptionId": "A",
    "explanation": "El bloqueo AV Mobitz II es un trastorno de conducción de alto riesgo, con posibilidad de progresión a bloqueo AV completo y asistolia. En un paciente que además presenta síncope atribuible al bloqueo, está indicada la estimulación cardíaca permanente.\n\nLo que debes saber para el examen\n¿Cuándo pensar en marcapasos?\nMobitz II→ Alto riesgo de progresión.\nMobitz II + síncope→ Marcapasos definitivo.\nBloqueo AV completo→ Marcapasos definitivo, salvo situaciones reversibles.\nBloqueo AV avanzado→ Considerar estimulación permanente según el contexto.\nTema: Bloqueos auriculoventriculares y tratamiento con marcapasos.",
    "keyPoints": [],
    "theoryContent": "El bloqueo AV Mobitz II es un trastorno de conducción de alto riesgo, con posibilidad de progresión a bloqueo AV completo y asistolia. En un paciente que además presenta síncope atribuible al bloqueo, está indicada la estimulación cardíaca permanente.\n\nLo que debes saber para el examen\n¿Cuándo pensar en marcapasos?\nMobitz II→ Alto riesgo de progresión.\nMobitz II + síncope→ Marcapasos definitivo.\nBloqueo AV completo→ Marcapasos definitivo, salvo situaciones reversibles.\nBloqueo AV avanzado→ Considerar estimulación permanente según el contexto.\nTema: Bloqueos auriculoventriculares y tratamiento con marcapasos.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta es la continuación perfecta de la anterior.\nPrimero identificamos:\nBloqueo AV de segundo grado Mobitz II.\nAhora debemos responder:\n¿Qué hacemos con este paciente?\nLa respuesta es:\nMarcapasos definitivo.\n¿Por qué?\nEl Mobitz II suele localizarse en el sistema His-Purkinje, por debajo del nodo AV.\nEsto significa que la conducción puede deteriorarse de forma impredecible:\nMobitz II\n↓\nBloqueo AV avanzado\n↓\nBloqueo AV completo\n↓\nBradicardia extrema / asistolia\nPor eso no es un trastorno que deba manejarse simplemente con observación ambulatoria.\n\nEl dato que cambia todo: el síncope\nEste paciente no tiene simplemente un hallazgo electrocardiográfico incidental.\nTiene:\n• Síncope súbito.\n• Bradicardia.\n• Mobitz II.\nEsto sugiere que el bloqueo produjo una reducción transitoria del gasto cardíaco cerebral.\nPor tanto:\nEl síncope es probablemente consecuencia del trastorno de conducción.\n\n¿Por qué las otras opciones son incorrectas?\nB. Alta y seguimiento ambulatorio ❌\nEs precisamente lo contrario de lo que debemos hacer.\nUn Mobitz II puede progresar rápidamente a bloqueo AV completo.\nAdemás, el paciente ya presentó síncope, lo que demuestra repercusión clínica.\n\nC. Coronariografía ❌\nNo es la intervención indispensable.\nAunque la enfermedad coronaria puede producir trastornos de conducción, en este paciente la prioridad es tratar el bloqueo AV de alto riesgo.\nSi existen datos clínicos que sugieran isquemia, se estudiará posteriormente.\n\nD. Cardioversión eléctrica/farmacológica ❌\nLa cardioversión se utiliza para determinadas taquiarritmias, no para tratar un bloqueo AV con bradicardia.\nAquí el problema es:\nFallo de la conducción AV.\nPor tanto, necesitamos estimular el corazón, no cardiovertirlo.\n\nPERLA DE EXAMEN 🔥\nCuando veas:\nSíncope + Mobitz II\npiensa inmediatamente:\nMARCAPASOS.\nNo te distraigas buscando causas vasovagales.\n\nAlgoritmo mental\nBloqueo AV\n↓\n¿Mobitz I?\nPR se prolonga progresivamente → generalmente menor riesgo.\n¿Mobitz II?\nPR constante + P bloqueada súbitamente→ alto riesgo\n↓\n¿Síntomas como síncope?\n↓\nMARCAPASOS DEFINITIVO\n\nLo que debes dominar para residencia\n• Reconocer los diferentes grados de bloqueo AV.\n• Diferenciar Mobitz I vs. Mobitz II.\n• Identificar el Mobitz II como bloqueo de alto riesgo.\n• Reconocer el síncope como manifestación de compromiso hemodinámico.\n• Saber que el tratamiento definitivo es la estimulación cardíaca permanente.\nReferencias\n• ESC Guidelines for the management of cardiac pacing and cardiac resynchronization therapy.\n• Braunwald's Heart Disease.\n• Manual AMIR – Cardiología."
  },
  {
    "id": "dr-q-eval1-33",
    "examArea": "Gastroenterología / Enfermedad Inflamatoria Intestinal",
    "topic": "Gastroenterología / Enfermedad Inflamatoria Intestinal",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un muchacho de 17 años con antecedente de enfermedad de Crohn con afectación colónica de 2 años de evolución, en tratamiento de mantenimiento con azatioprina, consulta por la aparición desde hace 5 días de nódulos subcutáneos rojo-violáceos, calientes y dolorosos, de localización pretibial bilateral, asociados a un incremento del número de deposiciones y dolor abdominal.\n¿Cuál es la actitud más adecuada en este caso?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Ajustar el tratamiento de la enfermedad intestinal."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Biopsiar zonas de piel alejadas de las áreas lesionadas y pautar analgésicos opioides de entrada."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Sospechar la existencia de una lesión tumoral maligna intestinal como desencadenante del proceso cutáneo."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Sospechar isquemia bilateral de extremidades inferiores de origen medicamentoso."
      }
    ],
    "correctOptionId": "A",
    "explanation": "El cuadro es compatible con eritema nudoso, una manifestación cutánea frecuente de la enfermedad inflamatoria intestinal. La presencia simultánea de lesiones pretibiales dolorosas y aumento de la actividad intestinal indica que el eritema nudoso está asociado a un brote de enfermedad de Crohn. Por ello, el manejo fundamental consiste en controlar la actividad de la enfermedad intestinal.\n\nLo que debes saber para el examen\nEritema nudoso en enfermedad inflamatoria intestinal\nEl eritema nudoso se caracteriza por:\n• Nódulos subcutáneos dolorosos.\n• Coloración eritematosa o rojo-violácea.\n• Predominio en la superficie anterior de las piernas.\n• Asociación con actividad de Crohn o colitis ulcerosa.\nSu aparición puede reflejar:\nActividad de la enfermedad intestinal.\nPor ello, el tratamiento debe dirigirse principalmente al control de la enfermedad inflamatoria intestinal.\nTema: Manifestaciones extraintestinales de la enfermedad inflamatoria intestinal.",
    "keyPoints": [],
    "theoryContent": "El cuadro es compatible con eritema nudoso, una manifestación cutánea frecuente de la enfermedad inflamatoria intestinal. La presencia simultánea de lesiones pretibiales dolorosas y aumento de la actividad intestinal indica que el eritema nudoso está asociado a un brote de enfermedad de Crohn. Por ello, el manejo fundamental consiste en controlar la actividad de la enfermedad intestinal.\n\nLo que debes saber para el examen\nEritema nudoso en enfermedad inflamatoria intestinal\nEl eritema nudoso se caracteriza por:\n• Nódulos subcutáneos dolorosos.\n• Coloración eritematosa o rojo-violácea.\n• Predominio en la superficie anterior de las piernas.\n• Asociación con actividad de Crohn o colitis ulcerosa.\nSu aparición puede reflejar:\nActividad de la enfermedad intestinal.\nPor ello, el tratamiento debe dirigirse principalmente al control de la enfermedad inflamatoria intestinal.\nTema: Manifestaciones extraintestinales de la enfermedad inflamatoria intestinal.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta tiene una palabra clave:\nNódulos dolorosos pretibiales.\nCuando veas:\nNódulos subcutáneos + dolor + región pretibial\n↓\nPiensa en:\nERITEMA NUDOSO.\nAhora hay que relacionarlo con el contexto clínico.\nEl paciente tiene:\n• Enfermedad de Crohn.\n• Aumento de deposiciones.\n• Dolor abdominal.\n• Aparición simultánea de las lesiones cutáneas.\nEsto indica:\nEritema nudoso asociado a actividad de la enfermedad intestinal.\n\n¿Qué hacemos?\nNo debemos tratar únicamente la lesión cutánea.\nLa prioridad es:\nControlar el brote de la enfermedad inflamatoria intestinal.\nAl controlar la actividad intestinal, el eritema nudoso suele mejorar.\n\n¿Por qué las otras opciones son incorrectas?\nB. Biopsiar piel alejada + opioides ❌\nEl diagnóstico del eritema nudoso suele ser clínico.\nAdemás, los opioides no constituyen el tratamiento inicial de esta manifestación.\n\nC. Tumor intestinal maligno ❌\nEl cuadro clínico encaja mucho mejor con una manifestación extraintestinal de Crohn, especialmente porque aparece simultáneamente con el aumento de la actividad intestinal.\n\nD. Isquemia bilateral por medicamentos ❌\nNo explica adecuadamente:\n• Los nódulos subcutáneos.\n• Su localización pretibial.\n• El dolor.\n• La asociación con el brote intestinal.\n\n¿Cómo diferenciar las manifestaciones cutáneas importantes?\n🟢 Eritema nudoso\nNódulos dolorosos pretibiales\n↓\nAsociado a actividad intestinal.\nTratamiento principal → controlar la EII.\n\n🔴 Pioderma gangrenoso\nLesión inicialmente pustulosa o nodular\n↓\nÚlcera dolorosa rápidamente progresiva\n↓\nBordes violáceos socavados.\nPuede asociarse a EII, pero su manejo es diferente.\n\nPERLA DE EXAMEN 🔥\nCrohn/colitis + nódulos dolorosos pretibiales + brote intestinal\n↓\nERITEMA NUDOSO\n↓\nTRATA LA ENFERMEDAD INTESTINAL.\n\nAlgoritmo mental\nPaciente con EII\n↓\nManifestación cutánea\n↓\n¿Nódulos dolorosos pretibiales?\n→ Eritema nudoso\n↓\n¿Hay actividad intestinal?\n→ Sí → controlar el brote intestinal.\n\nLo que debes dominar para residencia\n• Reconocer el eritema nudoso.\n• Identificarlo como manifestación extraintestinal de la EII.\n• Relacionarlo con la actividad intestinal.\n• Diferenciarlo del pioderma gangrenoso.\n• Recordar que el tratamiento principal es el control de la enfermedad intestinal subyacente.\n\n📚 REFERENCIAS\n• Torres J, Bonovas S, Doherty G, et al. ECCO Guidelines on Therapeutics in Crohn’s Disease. J Crohns Colitis. 2020.\n• Harbord M, Eliakim R, Bettenworth D, et al. Third European Evidence-based Consensus on Diagnosis and Management of Ulcerative Colitis. J Crohns Colitis. 2017.\n• James WD, Elston DM, Treat JR, Rosenbach MA. Andrews’ Diseases of the Skin: Clinical Dermatology. 13th ed.\n• UpToDate. Erythema nodosum: Etiology, clinical manifestations, and diagnosis.\n• UpToDate. Cutaneous manifestations of inflammatory bowel disease."
  },
  {
    "id": "dr-q-eval1-34",
    "examArea": "Hematología / Gastroenterología",
    "topic": "Hematología / Gastroenterología",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Una mujer de 55 años, postmenopáusica, consulta por astenia y disnea de esfuerzo. En la anamnesis refiere ligera epigastralgia y pirosis ocasional. Niega metrorragias. En la analítica presenta:Hemoglobina: 6 g/dL, VCM: 69 fL, Sideremia: 13 μg/dL, Ferritina: 4 ng/mLSe realiza una endoscopia digestiva alta, que muestra únicamente una pequeña hernia hiatal por deslizamiento, sin signos de esofagitis.\n¿Cuál es la actitud más correcta?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar hierro oral y observar la evolución de la anemia."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Tratar con inhibidores de la bomba de protones y evaluar a los tres meses."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Recomendar una colonoscopia completa."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Realizar un estudio con cápsula endoscópica."
      }
    ],
    "correctOptionId": "C",
    "explanation": "La paciente presenta una anemia ferropénica severa y es postmenopáusica, sin una causa ginecológica evidente. La endoscopia alta no identifica una fuente de sangrado significativa. En este contexto debe investigarse el tracto gastrointestinal inferior, especialmente mediante colonoscopia, para descartar lesiones sangrantes, pólipos o neoplasia colorrectal.\n\nLo que debes saber para el examen\nAnemia ferropénica en una mujer postmenopáusica\nLa combinación:\nHb ↓ + VCM ↓ + ferritina ↓ + hierro ↓\n↓\nAnemia ferropénica.\nEn una mujer postmenopáusica o en un hombre adulto:\nLa anemia ferropénica debe considerarse pérdida gastrointestinal hasta demostrar lo contrario.\nSi la endoscopia digestiva alta no identifica la causa:\n↓\nColonoscopia.\nTema: Estudio de la anemia ferropénica en adultos.",
    "keyPoints": [],
    "theoryContent": "La paciente presenta una anemia ferropénica severa y es postmenopáusica, sin una causa ginecológica evidente. La endoscopia alta no identifica una fuente de sangrado significativa. En este contexto debe investigarse el tracto gastrointestinal inferior, especialmente mediante colonoscopia, para descartar lesiones sangrantes, pólipos o neoplasia colorrectal.\n\nLo que debes saber para el examen\nAnemia ferropénica en una mujer postmenopáusica\nLa combinación:\nHb ↓ + VCM ↓ + ferritina ↓ + hierro ↓\n↓\nAnemia ferropénica.\nEn una mujer postmenopáusica o en un hombre adulto:\nLa anemia ferropénica debe considerarse pérdida gastrointestinal hasta demostrar lo contrario.\nSi la endoscopia digestiva alta no identifica la causa:\n↓\nColonoscopia.\nTema: Estudio de la anemia ferropénica en adultos.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta tiene una trampa importante:\nNo debemos conformarnos con diagnosticar la ferropenia.\nTenemos que encontrar por qué está perdiendo hierro.\n\nPASO 1. ¿Qué tipo de anemia tiene?\nHemoglobina:\n6 g/dL\n↓\nAnemia severa.\nVCM:\n69 fL\n↓\nAnemia microcítica.\nAhora miramos el hierro:\n• Sideremia ↓\n• Ferritina ↓↓↓\n↓\nFerropenia.\n\nPASO 2. ¿Por qué esta paciente es especialmente importante?\nEs:\nPostmenopáusica.\nPor lo tanto, ya no podemos atribuir la pérdida de hierro a menstruaciones.\nAdemás:\nNo presenta metrorragias.\nEntonces debemos buscar una fuente de pérdida de sangre, especialmente:\nTracto gastrointestinal.\n\nPASO 3. Ya se hizo endoscopia alta\nLa endoscopia solamente muestra:\nPequeña hernia hiatal por deslizamiento sin esofagitis.\nEsto no explica una anemia ferropénica tan severa.\nPor lo tanto:\nEndoscopia alta sin causa\n↓\nHay que estudiar:\nColon.\n↓\nColonoscopia completa.\n\n¿Por qué no basta con dar hierro?\nA. Hierro oral y observar ❌\nEl hierro corrige la deficiencia, pero no identifica ni trata la causa de la pérdida.\nEn una paciente postmenopáusica con anemia ferropénica severa, sería un error simplemente administrar hierro y esperar.\nHay que descartar:\n• Cáncer colorrectal.\n• Pólipos sangrantes.\n• Angiodisplasias.\n• Otras fuentes de sangrado digestivo.\n\n¿Por qué no IBP?\nB. Inhibidores de bomba de protones ❌\nLa paciente presenta pirosis y una pequeña hernia hiatal, pero:\nNo existe una lesión hemorrágica en la endoscopia alta.\nNo debemos asumir que la pirosis explica la anemia.\n\n¿Por qué no cápsula endoscópica?\nD. Cápsula endoscópica ❌\nLa cápsula permite estudiar principalmente el intestino delgado, pero todavía falta estudiar una fuente mucho más accesible y clínicamente prioritaria:\nEl colon.\nLa cápsula se reserva generalmente para situaciones en las que la evaluación endoscópica convencional no ha identificado la fuente y existe indicación de estudiar intestino delgado.\n\n🔥 LA TRAMPA DE EXAMEN\nCuando veas:\nHombre adulto o mujer postmenopáusica + anemia ferropénica\nNO pienses simplemente:\n\"Dar hierro.\"\nPiensa:\n¿Dónde está sangrando?\nY especialmente:\n¿Hay que descartar cáncer colorrectal?\n\nPERLA DE EXAMEN 🔥\nMujer postmenopáusica + anemia ferropénica\n↓\nBuscar pérdida gastrointestinal.\n↓\nEndoscopia alta + colonoscopia según el contexto.\nSi la endoscopia alta ya fue realizada y es negativa:\n↓\nColonoscopia.\n\nAlgoritmo mental\nAnemia\n↓\nVCM bajo\n↓\nFerritina baja\n↓\nFERROPENIA\n↓\n¿Hombre o mujer postmenopáusica?\n↓\nBuscar sangrado gastrointestinal.\n↓\n¿Endoscopia alta negativa?\n↓\nCOLONOSCOPIA.\n\nLo que debes dominar para residencia\n• Reconocer el patrón de anemia ferropénica.\n• Diferenciar ferropenia de anemia de enfermedad crónica.\n• Recordar que en hombres y mujeres postmenopáusicas debe buscarse una causa gastrointestinal.\n• No atribuir una anemia severa a hallazgos incidentales como una pequeña hernia hiatal.\n• Saber cuándo avanzar desde la endoscopia alta hacia la colonoscopia.\n• Reservar el estudio del intestino delgado para escenarios en los que la evaluación convencional no ha encontrado la causa.\n📚 Referencias\n• Harrison. Principios de Medicina Interna.\n• Hoffbrand's Essential Haematology.\n• Manual AMIR – Hematología / Aparato Digestivo."
  },
  {
    "id": "dr-q-eval1-35",
    "examArea": "Gastroenterología / Pancreatitis aguda",
    "topic": "Gastroenterología / Pancreatitis aguda",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Los criterios de Ranson se utilizan como marcadores pronósticos tempranos en la pancreatitis aguda. ¿Cuál de los siguientes parámetros NO constituye un criterio de Ranson asociado a peor pronóstico?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "GOT sérica >250 UI/L."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Leucocitosis >16.000/mm³."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Edad <55 años."
      },
      {
        "id": "D",
        "label": "D",
        "text": "LDH sérica >350 UI/L."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El criterio de Ranson relacionado con la edad es:\nEdad >55 años.\nPor tanto, una edad menor de 55 años no suma puntos y no constituye un predictor de mal pronóstico dentro de los criterios clásicos de Ranson.\n\nLo que debes saber para el examen\nCriterios de Ranson al ingreso\nRecuerda:\n• Edad >55 años\n• Leucocitos >16.000/mm³\n• GOT (AST) >250 UI/L\n• LDH >350 UI/L\n• Glucosa >200 mg/dL\nDurante las primeras 48 horas se evalúan otros parámetros como:\n• Descenso del hematocrito.\n• Aumento del BUN.\n• Calcio <8 mg/dL.\n• Déficit de bases.\n• Secuestro de líquidos.\nTema: Pronóstico de la pancreatitis aguda.",
    "keyPoints": [],
    "theoryContent": "El criterio de Ranson relacionado con la edad es:\nEdad >55 años.\nPor tanto, una edad menor de 55 años no suma puntos y no constituye un predictor de mal pronóstico dentro de los criterios clásicos de Ranson.\n\nLo que debes saber para el examen\nCriterios de Ranson al ingreso\nRecuerda:\n• Edad >55 años\n• Leucocitos >16.000/mm³\n• GOT (AST) >250 UI/L\n• LDH >350 UI/L\n• Glucosa >200 mg/dL\nDurante las primeras 48 horas se evalúan otros parámetros como:\n• Descenso del hematocrito.\n• Aumento del BUN.\n• Calcio <8 mg/dL.\n• Déficit de bases.\n• Secuestro de líquidos.\nTema: Pronóstico de la pancreatitis aguda.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta es principalmente de memoria de criterios, pero tiene una trampa muy clásica.\n¿Cuál es la trampa?\nEl estudiante recuerda:\n\"Edad → 55 años\"\npero puede equivocarse con la dirección.\nNo es:\n❌ Edad <55 años\nEs:\n✅ Edad >55 años.\nPor eso la respuesta es C.\n\nRanson al ingreso: cómo memorizarlo\nPuedes recordar:\n\"GLA-L-G\"\n• Glucosa >200\n• Leucocitos >16.000\n• AST/GOT >250\n• LDH >350\n• G → edad >55\nLo importante es reconocer que estos parámetros se obtienen al ingreso.\n\n¿Qué pasa después?\nA las 48 horas se evalúan:\nHematocrito ↓\nBUN ↑\nCalcio ↓\nDéficit de bases ↑\nSecuestro de líquidos ↑\nCuantos más criterios de Ranson se cumplen, mayor es la gravedad y la mortalidad de la pancreatitis.\n\n¿Por qué las otras opciones sí son criterios?\nA. GOT >250 UI/L ✅\nSí es criterio de Ranson al ingreso.\nB. Leucocitos >16.000/mm³ ✅\nSí es criterio de Ranson al ingreso.\nD. LDH >350 UI/L ✅\nSí es criterio de Ranson al ingreso.\nC. Edad <55 años ❌\nNo suma puntos.\nEl criterio es:\nEdad >55 años.\n\n🔥 PERLA DE EXAMEN\nCuando te pregunten por Ranson:\nAL INGRESO\nEdad >55\nLeucocitos >16.000\nGOT >250\nLDH >350\nGlucosa >200\n↓\nA LAS 48 HORAS\nHto ↓\nBUN ↑\nCa ↓\nDéficit de bases ↑\nLíquidos secuestrados ↑\n\nAlgoritmo mental\nPancreatitis aguda\n↓\n¿Me preguntan Ranson?\n↓\nPrimero:\n5 criterios al ingreso\n↓\nDespués:\n5 criterios a las 48 h\n↓\nMayor puntuación = mayor gravedad.\nLo que debes dominar para residencia\n• Saber los 5 criterios de ingreso.\n• Saber los 5 criterios de las primeras 48 horas.\n• No confundir >55 años con <55.\n• Recordar que Ranson es un sistema pronóstico, no un criterio diagnóstico de pancreatitis.\n\n📚 REFERENCIAS\n• Ranson JH, Rifkind KM, Roses DF, Fink SD, Eng K, Spencer FC. Objective early identification of severe acute pancreatitis. Am J Gastroenterol. 1974;61(6):443–451.\n• Banks PA, Bollen TL, Dervenis C, et al. Classification of acute pancreatitis—2012: revision of the Atlanta classification and definitions. Gut. 2013;62(1):102–111.\n• Tenner S, Baillie J, DeWitt J, Vege SS. American College of Gastroenterology guideline: management of acute pancreatitis. Am J Gastroenterol. 2013;108(9):1400–1415.\n• UK Working Party on Acute Pancreatitis. UK guidelines for the management of acute pancreatitis. Gut. 2005;54(Suppl 3)–iii9."
  },
  {
    "id": "dr-q-eval1-36",
    "examArea": "Cirugía General / Hernias inguinocrurales",
    "topic": "Cirugía General / Hernias inguinocrurales",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Sobre las hernias de la región inguinocrural, señale la afirmación FALSA:",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Ante una hernia incarcerada está indicada la intervención quirúrgica urgente, ya que por definición presentan compromiso vascular."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Actualmente, las técnicas de reparación herniaria más generalizadas son aquellas que emplean material protésico, como la hernioplastia tipo Liechtenstein."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Una hernia es de tipo indirecto si el saco herniario sale de la cavidad abdominal a través del orificio inguinal profundo."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Las hernias crurales presentan mayor riesgo de incarceración que las hernias inguinales."
      }
    ],
    "correctOptionId": "A",
    "explanation": "La afirmación es falsa porque incarceración y estrangulación no son sinónimos.\nUna hernia incarcerada es aquella que no puede reducirse espontáneamente o mediante maniobras de reducción. Puede existir incarceración sin compromiso vascular.\nCuando existe compromiso del flujo sanguíneo del contenido herniario hablamos de:\nHernia estrangulada.\nLa estrangulación sí constituye una urgencia quirúrgica por riesgo de isquemia, necrosis y perforación.\n\nLo que debes saber para el examen\n🔴 Incarceración ≠ estrangulación\nHernia incarcerada\n→ No reducible.\n→ Puede conservar la vascularización.\nHernia estrangulada\n→ Compromiso vascular.\n→ Isquemia del contenido herniario.\n→ Urgencia quirúrgica.\n\nHernia inguinal indirecta\nEl saco herniario pasa por:\nOrificio inguinal profundo\ny puede recorrer el conducto inguinal.\nSe encuentra lateral a los vasos epigástricos inferiores.\n\nHernia inguinal directa\nProtruye a través del:\nTriángulo de Hesselbach\ny se encuentra medial a los vasos epigástricos inferiores.\n\nHernia crural o femoral\nPasa por el:\nConducto femoral\ny presenta un mayor riesgo de incarceración y estrangulación debido a su estrecho cuello herniario.",
    "keyPoints": [],
    "theoryContent": "La afirmación es falsa porque incarceración y estrangulación no son sinónimos.\nUna hernia incarcerada es aquella que no puede reducirse espontáneamente o mediante maniobras de reducción. Puede existir incarceración sin compromiso vascular.\nCuando existe compromiso del flujo sanguíneo del contenido herniario hablamos de:\nHernia estrangulada.\nLa estrangulación sí constituye una urgencia quirúrgica por riesgo de isquemia, necrosis y perforación.\n\nLo que debes saber para el examen\n🔴 Incarceración ≠ estrangulación\nHernia incarcerada\n→ No reducible.\n→ Puede conservar la vascularización.\nHernia estrangulada\n→ Compromiso vascular.\n→ Isquemia del contenido herniario.\n→ Urgencia quirúrgica.\n\nHernia inguinal indirecta\nEl saco herniario pasa por:\nOrificio inguinal profundo\ny puede recorrer el conducto inguinal.\nSe encuentra lateral a los vasos epigástricos inferiores.\n\nHernia inguinal directa\nProtruye a través del:\nTriángulo de Hesselbach\ny se encuentra medial a los vasos epigástricos inferiores.\n\nHernia crural o femoral\nPasa por el:\nConducto femoral\ny presenta un mayor riesgo de incarceración y estrangulación debido a su estrecho cuello herniario.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta tiene una trampa conceptual que debes tener clarísima.\n¿Qué significa incarcerada?\nImagina una hernia que:\nSale → queda atrapada → no puede regresar.\nEso es:\nINCARCERACIÓN\nPero el intestino puede seguir recibiendo sangre.\nPor lo tanto:\nIncarcerada ≠ necesariamente isquémica.\n\n¿Qué significa estrangulada?\nAhora imagina:\nHernia → atrapamiento → compresión vascular → isquemia → necrosis.\nEso es:\nESTRANGULACIÓN.\nAquí sí existe compromiso vascular.\n\n¿Por qué la opción A es falsa?\nDice:\n\"Hernia incarcerada... por definición presentan compromiso vascular.\"\n❌ Incorrecto.\nEl compromiso vascular define la estrangulación, no la incarceración.\nLa frase que debes memorizar:\nToda estrangulada está incarcerada, pero no toda incarcerada está estrangulada.\n🔥 Esta es una perla clásica de examen.\n\n¿Por qué las otras opciones son correctas?\nB. Reparación con material protésico ✅\nLas técnicas con malla, como Liechtenstein, son ampliamente utilizadas en la reparación de hernias inguinales, especialmente en cirugía abierta.\nLa malla permite reforzar la pared posterior del conducto inguinal y disminuye la tasa de recurrencia.\n\nC. Hernia indirecta ✅\nLa hernia inguinal indirecta:\nEntra por el orificio inguinal profundo.\nAdemás:\nIndirecta → lateral a vasos epigástricos inferiores.\nDirecta → medial a vasos epigástricos inferiores.\n\nD. Hernia crural con mayor riesgo de incarceración ✅\nEl anillo femoral es relativamente estrecho.\nPor ello:\nHernia femoral → mayor riesgo de incarceración y estrangulación.\nEsto es especialmente importante en mujeres y pacientes de edad avanzada.\n\n🔥 PERLAS DE EXAMEN\nIncarcerada\nNo reducible\n↓\nNo necesariamente isquemia.\nEstrangulada\nNo reducible + compromiso vascular\n↓\nURGENCIA QUIRÚRGICA\n\nTabla mental rápida\nHernia\nRelación anatómica\nRiesgo\nIndirecta\nOrificio inguinal profundo\nMenor que femoral\nDirecta\nTriángulo de Hesselbach\nMenor riesgo de estrangulación\nFemoral/crural\nConducto femoral\n🔥 Mayor riesgo de incarceración/estrangulación\n\nAlgoritmo mental\nHernia no reducible\n↓\n¿Hay compromiso vascular?\nNo → Incarcerada.\nSí → Estrangulada → cirugía urgente.\n\nLo que debes dominar para residencia\n• Diferenciar incarceración de estrangulación.\n• Recordar que la estrangulación implica compromiso vascular.\n• Identificar la hernia inguinal indirecta por el orificio inguinal profundo.\n• Diferenciar directa e indirecta respecto a los vasos epigástricos inferiores.\n• Recordar que la hernia femoral tiene mayor riesgo de incarceración y estrangulación.\n• Conocer la hernioplastia de Liechtenstein como reparación protésica clásica.\nREFERENCIA\nSchwartz’s Principles of Surgery, 11th Edition. McGraw-Hill Education.Sabiston Textbook of Surgery, 21st Edition. Elsevier.Nyhus and Condon’s Hernia, 6th Edition. Lippincott Williams & Wilkins."
  },
  {
    "id": "dr-q-eval1-37",
    "examArea": "Cirugía General / Hernias inguinocrurales",
    "topic": "Cirugía General / Hernias inguinocrurales",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 68 años consulta por una masa inguinal derecha que aparece al estar de pie y aumenta con la tos. Al examen físico se identifica una tumoración que protruye medial a los vasos epigástricos inferiores, atraviesa el triángulo de Hesselbach y puede reducirse manualmente al acostarse. ¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Hernia inguinal indirecta."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hernia inguinal directa."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Hernia femoral."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hernia obturatriz."
      }
    ],
    "correctOptionId": "B",
    "explanation": "La hernia inguinal directa protruye a través del triángulo de Hesselbach, por lo que se encuentra medial a los vasos epigástricos inferiores. A diferencia de la hernia indirecta, no atraviesa el orificio inguinal profundo.\n\nLo que debes saber para el examen\nLa relación con los vasos epigástricos inferiores es la clave:\n• Hernia directa → medial a los vasos epigástricos inferiores.\n• Hernia indirecta → lateral a los vasos epigástricos inferiores.\n• Hernia femoral → por debajo del ligamento inguinal, a través del conducto femoral.\nTema: Anatomía y clasificación de las hernias inguinales.",
    "keyPoints": [],
    "theoryContent": "La hernia inguinal directa protruye a través del triángulo de Hesselbach, por lo que se encuentra medial a los vasos epigástricos inferiores. A diferencia de la hernia indirecta, no atraviesa el orificio inguinal profundo.\n\nLo que debes saber para el examen\nLa relación con los vasos epigástricos inferiores es la clave:\n• Hernia directa → medial a los vasos epigástricos inferiores.\n• Hernia indirecta → lateral a los vasos epigástricos inferiores.\n• Hernia femoral → por debajo del ligamento inguinal, a través del conducto femoral.\nTema: Anatomía y clasificación de las hernias inguinales.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta busca que puedas diferenciar rápidamente las dos grandes hernias inguinales.\nAnalicemos el caso\nEl dato decisivo es:\n\"Medial a los vasos epigástricos inferiores.\"\nEso significa:\nHERNIA DIRECTA.\nAdemás, el caso menciona explícitamente:\nTriángulo de Hesselbach.\nLa hernia directa protruye por esta zona debido a debilidad de la pared posterior del conducto inguinal.\n\n¿Cómo recordar directa vs. indirecta?\nHernia directa\nD → Dentro/medial\n→ Medial a los vasos epigástricos inferiores.\n→ Triángulo de Hesselbach.\n→ Suele aparecer por debilidad adquirida de la pared abdominal.\n\nHernia indirecta\n→ Lateral a los vasos epigástricos inferiores.\n→ Entra por el orificio inguinal profundo.\n→ Recorre el conducto inguinal.\n→ Puede alcanzar el escroto.\n\n¿Por qué las otras opciones son incorrectas?\nA. Hernia inguinal indirecta ❌\nLa indirecta pasa lateral a los vasos epigástricos inferiores y entra por el orificio inguinal profundo.\nC. Hernia femoral ❌\nSe encuentra por debajo del ligamento inguinal, en el conducto femoral, y no en el triángulo de Hesselbach.\nD. Hernia obturatriz ❌\nAtraviesa el conducto obturador y suele presentarse con dolor en la cara medial del muslo por compromiso del nervio obturador.\n\n🔥 TRAMPA DE EXAMEN\nSi solo recuerdas una cosa:\nDIRECTA = MEDIAL.INDIRECTA = LATERAL.\nRespecto a:\nVASOS EPIGÁSTRICOS INFERIORES.\n\nRegla de oro para residencia\nHesselbach → directa.\nOrificio inguinal profundo → indirecta.\nDebajo del ligamento inguinal → femoral.\n\nPerlas de examen\n✅ La hernia directa protruye por el triángulo de Hesselbach.\n✅ La hernia indirecta pasa por el orificio inguinal profundo.\n✅ La hernia indirecta es lateral a los vasos epigástricos inferiores.\n✅ La hernia directa es medial a los vasos epigástricos inferiores.\n✅ Las hernias femorales presentan mayor riesgo de incarceración y estrangulación.\n📚 Referencias\n• Brunicardi FC, et al. Schwartz's Principles of Surgery. McGraw-Hill.\n• Townsend CM, et al. Sabiston Textbook of Surgery. Elsevier.\n• Manual AMIR – Cirugía General.\n• European Hernia Society. International guidelines for groin hernia management. Hernia."
  },
  {
    "id": "dr-q-eval1-38",
    "examArea": "Cardiología / Insuficiencia cardíaca y fibrilación auricular",
    "topic": "Cardiología / Insuficiencia cardíaca y fibrilación auricular",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Una mujer de 78 años con antecedente de hipertensión arterial en tratamiento con amlodipino ingresó hace 3 meses por debut de insuficiencia cardíaca y fibrilación auricular. El ecocardiograma evidenció disfunción ventricular izquierda moderada y al alta se suspendió el amlodipino y se inició tratamiento con furosemida y enalapril. En la actualidad refiere mejoría del cansancio y del edema, aunque persisten algunos síntomas. En la exploración no presenta signos de insuficiencia cardíaca, pero registra TA 150/90 mmHg y FC 120 lpm. El ECG muestra fibrilación auricular con respuesta ventricular rápida de 110-120 lpm. ¿Qué tratamiento tiene más probabilidades de mejorar los síntomas y reducir la mortalidad por eventos cardiovasculares?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Digoxina y ácido acetilsalicílico."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Atenolol y ácido acetilsalicílico."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Verapamilo y warfarina."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Carvedilol y warfarina."
      }
    ],
    "correctOptionId": "D",
    "explanation": "La paciente presenta insuficiencia cardíaca con disfunción ventricular izquierda asociada a fibrilación auricular con frecuencia ventricular elevada. El carvedilol, además de contribuir al control de la frecuencia, ha demostrado beneficio pronóstico en pacientes con insuficiencia cardíaca con disfunción sistólica. La warfarina está indicada para la prevención de eventos tromboembólicos en esta paciente con fibrilación auricular y elevado riesgo embólico.\n\nLo que debes saber para el examen\nEn un paciente con:\nInsuficiencia cardíaca con disfunción ventricular izquierda + fibrilación auricular\nhay que pensar en dos objetivos:\n• Control de la frecuencia: betabloqueante como carvedilol.\n• Prevención del tromboembolismo: anticoagulación según riesgo.\nAdemás, los betabloqueantes con beneficio pronóstico en insuficiencia cardíaca incluyen:\n• Carvedilol\n• Bisoprolol\n• Metoprolol succinato\nTema: Fibrilación auricular en paciente con insuficiencia cardíaca.",
    "keyPoints": [],
    "theoryContent": "La paciente presenta insuficiencia cardíaca con disfunción ventricular izquierda asociada a fibrilación auricular con frecuencia ventricular elevada. El carvedilol, además de contribuir al control de la frecuencia, ha demostrado beneficio pronóstico en pacientes con insuficiencia cardíaca con disfunción sistólica. La warfarina está indicada para la prevención de eventos tromboembólicos en esta paciente con fibrilación auricular y elevado riesgo embólico.\n\nLo que debes saber para el examen\nEn un paciente con:\nInsuficiencia cardíaca con disfunción ventricular izquierda + fibrilación auricular\nhay que pensar en dos objetivos:\n• Control de la frecuencia: betabloqueante como carvedilol.\n• Prevención del tromboembolismo: anticoagulación según riesgo.\nAdemás, los betabloqueantes con beneficio pronóstico en insuficiencia cardíaca incluyen:\n• Carvedilol\n• Bisoprolol\n• Metoprolol succinato\nTema: Fibrilación auricular en paciente con insuficiencia cardíaca.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta mezcla dos problemas:\nInsuficiencia cardíaca + fibrilación auricular rápida.\nY el examen quiere que identifiques un tratamiento que actúe sobre ambos problemas y tenga impacto pronóstico.\nPaso 1. ¿Qué problema tiene actualmente?\nLa paciente está clínicamente mejor de su insuficiencia cardíaca, pero presenta:\nFA + FC 110-120 lpm\n↓\nTiene una respuesta ventricular rápida.\nNecesitamos controlar la frecuencia.\n\nPaso 2. ¿Qué fármaco elegir?\nEn un paciente con disfunción ventricular izquierda:\nBetabloqueante\nes una excelente opción.\nPero no todos los betabloqueantes son iguales desde el punto de vista pronóstico.\nLos que han demostrado reducción de mortalidad en insuficiencia cardíaca con fracción de eyección reducida incluyen:\nCarvedilol, bisoprolol y metoprolol succinato.\nPor eso, entre las opciones disponibles:\nCarvedilol → mejor opción.\n\nPaso 3. ¿Por qué warfarina?\nLa paciente tiene:\n• Edad 78 años.\n• Hipertensión.\n• Insuficiencia cardíaca.\n• Fibrilación auricular.\nTiene un riesgo elevado de ictus cardioembólico.\nPor ello requiere:\nAnticoagulación.\nLa opción que combina el betabloqueante con anticoagulación es:\nCarvedilol + warfarina.\n\n¿Por qué las otras opciones son incorrectas?\nA. Digoxina + ácido acetilsalicílico ❌\nLa digoxina puede ayudar al control de la frecuencia, especialmente en pacientes con insuficiencia cardíaca, pero no ha demostrado el mismo beneficio pronóstico que los betabloqueantes.\nAdemás, el ácido acetilsalicílico no proporciona una protección tromboembólica equivalente a la anticoagulación en una paciente con FA de alto riesgo.\n\nB. Atenolol + ácido acetilsalicílico ❌\nAunque el atenolol puede disminuir la frecuencia cardíaca, no es uno de los betabloqueantes con evidencia de reducción de mortalidad en la insuficiencia cardíaca sistólica.\nAdemás, nuevamente:\nAAS ≠ anticoagulación adecuada para FA de alto riesgo.\n\nC. Verapamilo + warfarina ❌\nLa warfarina sería apropiada para prevenir embolias, pero el verapamilo tiene efecto inotrópico negativo y debe evitarse en pacientes con disfunción ventricular sistólica significativa.\n\nD. Carvedilol + warfarina ✅\nCombina:\nControl de frecuencia + beneficio pronóstico en IC\ncon\nPrevención del tromboembolismo por FA.\nPor eso es la mejor respuesta.\n\n🔥 TRAMPA DE EXAMEN\nNo basta con identificar:\n\"FA → controlar frecuencia.\"\nHay que mirar el corazón de fondo.\nFA + disfunción ventricular izquierda\nEvita pensar automáticamente en:\n❌ Verapamilo/diltiazem.\nPorque los calcioantagonistas no dihidropiridínicos tienen efecto inotrópico negativo.\nPiensa:\nBetabloqueante.\nY si además preguntan por beneficio pronóstico en insuficiencia cardíaca:\nCarvedilol / bisoprolol / metoprolol succinato.\n\nRegla de oro para residencia\nFA + IC con disfunción sistólica\n↓\nBetabloqueante + anticoagulación según riesgo tromboembólico.\n\nPerlas de examen\n✅ Carvedilol reduce mortalidad en pacientes seleccionados con insuficiencia cardíaca con disfunción sistólica.\n✅ Verapamilo y diltiazem deben evitarse en la insuficiencia cardíaca con fracción de eyección reducida por su efecto inotrópico negativo.\n✅ La digoxina puede controlar la frecuencia, pero no tiene el mismo beneficio sobre mortalidad que los betabloqueantes con evidencia en IC.\n✅ En FA, la prevención del ictus se basa en la anticoagulación según el riesgo tromboembólico, no en sustituirla rutinariamente por aspirina.\n📚 Referencias\n• McDonagh TA, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2021.\n• Hindricks G, et al. 2020 ESC Guidelines for the diagnosis and management of atrial fibrillation. Eur Heart J. 2021.\n• Heidenreich PA, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation. 2022.\n• Braunwald. Heart Disease: A Textbook of Cardiovascular Medicine.\n• Manual AMIR – Cardiología."
  },
  {
    "id": "dr-q-eval1-39",
    "examArea": "Cardiología / Fibrilación auricular",
    "topic": "Cardiología / Fibrilación auricular",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 74 años con antecedentes de hipertensión arterial y diabetes mellitus tipo 2 consulta por episodios recurrentes de palpitaciones y disnea de esfuerzo. El electrocardiograma muestra fibrilación auricular con respuesta ventricular de 90 lpm. No presenta hipotensión, dolor torácico ni signos de insuficiencia cardíaca aguda. ¿Cuál de las siguientes estrategias es la más adecuada para reducir su riesgo de accidente cerebrovascular?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Iniciar ácido acetilsalicílico como tratamiento antitrombótico."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar anticoagulación oral según su riesgo tromboembólico."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Realizar cardioversión eléctrica inmediata sin anticoagulación previa."
      },
      {
        "id": "D",
        "label": "D",
        "text": "No iniciar tratamiento antitrombótico mientras permanezca asintomático."
      }
    ],
    "correctOptionId": "B",
    "explanation": "La fibrilación auricular aumenta el riesgo de tromboembolismo y accidente cerebrovascular. En este paciente, la edad, hipertensión y diabetes incrementan claramente el riesgo tromboembólico, por lo que está indicada la anticoagulación oral.\n\nLo que debes saber para el examen\nEn la fibrilación auricular, el tratamiento debe plantearse en varios ejes:\n• Prevención del tromboembolismo.\n• Control de la frecuencia.\n• Control del ritmo en pacientes seleccionados.\n• Tratamiento de las enfermedades cardiovasculares asociadas.\nLa decisión de anticoagular depende fundamentalmente del riesgo tromboembólico, tradicionalmente estimado mediante CHA₂DS₂-VASc.\nTema: Prevención del accidente cerebrovascular en fibrilación auricular.",
    "keyPoints": [],
    "theoryContent": "La fibrilación auricular aumenta el riesgo de tromboembolismo y accidente cerebrovascular. En este paciente, la edad, hipertensión y diabetes incrementan claramente el riesgo tromboembólico, por lo que está indicada la anticoagulación oral.\n\nLo que debes saber para el examen\nEn la fibrilación auricular, el tratamiento debe plantearse en varios ejes:\n• Prevención del tromboembolismo.\n• Control de la frecuencia.\n• Control del ritmo en pacientes seleccionados.\n• Tratamiento de las enfermedades cardiovasculares asociadas.\nLa decisión de anticoagular depende fundamentalmente del riesgo tromboembólico, tradicionalmente estimado mediante CHA₂DS₂-VASc.\nTema: Prevención del accidente cerebrovascular en fibrilación auricular.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta quiere que separes dos conceptos que muchas veces se mezclan:\nControlar la frecuencia NO es lo mismo que prevenir el ictus.\nEste paciente tiene una frecuencia ventricular de 90 lpm, por lo que la frecuencia está relativamente controlada.\nPero sigue teniendo:\nFibrilación auricular → riesgo tromboembólico.\n\nPaso 1. Calcular el riesgo\nEl paciente tiene:\n• Edad 74 años → 1 punto\n• Hipertensión → 1 punto\n• Diabetes → 1 punto\nAdemás, es hombre.\nPor tanto:\nCHA₂DS₂-VASc = 3\nEsto representa un riesgo tromboembólico suficientemente elevado para indicar anticoagulación oral.\n\nPaso 2. ¿Aspirina?\nA. Ácido acetilsalicílico ❌\nLa aspirina no es una alternativa equivalente a la anticoagulación para prevenir el ictus asociado a FA.\nEsta es una trampa clásica:\nFA + alto riesgo tromboembólico → anticoagulación.\nNo:\nFA + aspirina.\n\nPaso 3. ¿Cardioversión inmediata?\nC. Cardioversión eléctrica inmediata ❌\nEl paciente está:\n• Hemodinámicamente estable.\n• Sin insuficiencia cardíaca aguda.\n• Sin isquemia aguda.\nPor tanto, no existe indicación de cardioversión urgente.\nAdemás, si la duración de la FA es prolongada o desconocida, la cardioversión requiere una estrategia adecuada de anticoagulación o exclusión de trombo auricular.\n\nPaso 4. ¿No anticoagular porque está asintomático?\nD. ❌\nEl riesgo de ictus no depende de que el paciente tenga o no síntomas.\nLa FA puede ser completamente asintomática y seguir generando riesgo tromboembólico.\n\n🔥 TRAMPA DE EXAMEN\nEl paciente puede estar:\n• Sin palpitaciones.\n• Con frecuencia controlada.\n• Hemodinámicamente estable.\nY aun así:\nNecesitar anticoagulación.\nPorque la anticoagulación se decide principalmente por el:\nRiesgo tromboembólico.\n\nRegla de oro para residencia\nFA\n↓\nPregunta 1:\n¿Está inestable?\n→ Sí → cardioversión eléctrica urgente.\n→ No → valorar estrategia de frecuencia/ritmo.\nPregunta 2:\n¿Tiene riesgo tromboembólico elevado?\n→ Sí → anticoagulación.\n\nPerlas de examen\n✅ La FA no valvular puede tratarse con anticoagulantes orales directos como primera opción en muchos pacientes.\n✅ La presencia de válvula mecánica o estenosis mitral moderada-grave cambia la estrategia anticoagulante y clásicamente requiere antagonista de vitamina K.\n✅ La aspirina no sustituye a la anticoagulación para prevenir el ictus en pacientes con FA que tienen indicación de anticoagular.\n✅ Inestabilidad hemodinámica por FA → cardioversión eléctrica inmediata.\n📚 Referencias\n• European Society of Cardiology. 2024 ESC Guidelines for the management of atrial fibrillation.\n• American Heart Association/American College of Cardiology. Guideline for the Diagnosis and Management of Atrial Fibrillation.\n• Braunwald. Heart Disease: A Textbook of Cardiovascular Medicine.\n• Manual AMIR – Cardiología."
  },
  {
    "id": "dr-q-eval1-40",
    "examArea": "Cardiología / Fibrilación auricular",
    "topic": "Cardiología / Fibrilación auricular",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 68 años con antecedentes de hipertensión arterial y fibrilación auricular paroxística consulta por palpitaciones de inicio súbito desde hace aproximadamente 3 horas. Presenta FC 145 lpm, TA 125/75 mmHg, saturación de oxígeno de 97% y no presenta dolor torácico, edema agudo de pulmón ni alteración del estado de conciencia. El ECG confirma fibrilación auricular con respuesta ventricular rápida. ¿Cuál es la conducta más adecuada en este momento?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Realizar cardioversión eléctrica inmediata por tratarse de una frecuencia ventricular superior a 140 lpm."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar un fármaco para control de la frecuencia y valorar posteriormente una estrategia de control del ritmo."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administrar adenosina intravenosa para convertir la fibrilación auricular a ritmo sinusal."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Realizar desfibrilación eléctrica no sincronizada de forma inmediata."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente está hemodinámicamente estable, por lo que no requiere cardioversión eléctrica urgente. En este contexto puede realizarse control de la frecuencia ventricular con un betabloqueante o, según la función ventricular y el contexto clínico, otros fármacos apropiados.\n\nLo que debes saber para el examen\nLa primera pregunta ante una FA con respuesta ventricular rápida es:\n¿Está hemodinámicamente estable?\nInestable:\n• Hipotensión/shock.\n• Edema agudo de pulmón.\n• Isquemia miocárdica.\n• Alteración grave del estado de conciencia.\n→ Cardioversión eléctrica sincronizada inmediata.\nEstable:\n→ Control de frecuencia y/o estrategia de control del ritmo según el paciente.\nTema: Manejo inicial de la fibrilación auricular con respuesta ventricular rápida.",
    "keyPoints": [],
    "theoryContent": "El paciente está hemodinámicamente estable, por lo que no requiere cardioversión eléctrica urgente. En este contexto puede realizarse control de la frecuencia ventricular con un betabloqueante o, según la función ventricular y el contexto clínico, otros fármacos apropiados.\n\nLo que debes saber para el examen\nLa primera pregunta ante una FA con respuesta ventricular rápida es:\n¿Está hemodinámicamente estable?\nInestable:\n• Hipotensión/shock.\n• Edema agudo de pulmón.\n• Isquemia miocárdica.\n• Alteración grave del estado de conciencia.\n→ Cardioversión eléctrica sincronizada inmediata.\nEstable:\n→ Control de frecuencia y/o estrategia de control del ritmo según el paciente.\nTema: Manejo inicial de la fibrilación auricular con respuesta ventricular rápida.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nLa clave está en no dejarse impresionar por la frecuencia de 145 lpm.\nLa pregunta no dice:\n\"¿Tiene una frecuencia muy alta?\"\nPregunta:\n¿Está estable o inestable?\nY este paciente está estable:\n• TA 125/75.\n• Sin shock.\n• Sin edema pulmonar.\n• Sin isquemia.\n• Sin alteración de conciencia.\nPor lo tanto:\nNO necesita cardioversión eléctrica urgente.\n\n¿Cuándo sí cardiovertimos inmediatamente?\nSi la FA está provocando compromiso hemodinámico:\nFA\n↓\nHipotensión/shock, edema pulmonar, isquemia o deterioro grave\n↓\nCARDIOVERSIÓN ELÉCTRICA SINCRONIZADA\nAquí está la diferencia fundamental.\n\n¿Qué hacemos en el paciente estable?\nPodemos realizar:\nControl de frecuencia\nCon fármacos como:\n• Betabloqueantes.\n• Diltiazem/verapamilo en pacientes seleccionados sin disfunción sistólica significativa.\n• Digoxina en determinados pacientes, especialmente cuando existe insuficiencia cardíaca.\nLa elección depende del contexto clínico.\n\n¿Por qué las otras opciones son incorrectas?\nA. Cardioversión eléctrica inmediata ❌\nLa frecuencia de 145 lpm por sí sola no indica cardioversión urgente.\nLo que determina la urgencia es la inestabilidad hemodinámica.\nC. Adenosina ❌\nLa adenosina puede terminar algunas taquicardias supraventriculares por reentrada, pero no convierte una fibrilación auricular a ritmo sinusal.\nD. Desfibrilación no sincronizada ❌\nLa desfibrilación no sincronizada se utiliza en ritmos como:\n• Fibrilación ventricular.\n• Taquicardia ventricular sin pulso.\nPara una FA que requiere cardioversión se utiliza:\nCardioversión eléctrica sincronizada.\n\n🔥 TRAMPA DE EXAMEN\nNo memorices:\n\"FA rápida = cardioversión.\"\nMemoriza:\n\"FA + INESTABILIDAD = cardioversión eléctrica sincronizada.\"\nSi está estable:\nControl de frecuencia/ritmo + valorar anticoagulación.\n\nRegla de oro para residencia\nFA con respuesta ventricular rápida\n↓\n¿Inestable?\nSí → cardioversión eléctrica sincronizada.\nNo → control de frecuencia/ritmo + valorar riesgo tromboembólico.\n\nPerlas de examen\n✅ Adenosina no convierte la FA.\n✅ La cardioversión de una FA estable no se decide únicamente por la frecuencia ventricular.\n✅ FA + shock/edema pulmonar/isquemia → cardioversión sincronizada inmediata.\n✅ Siempre recuerda que el manejo de la FA tiene dos grandes objetivos: control de la arritmia y prevención del tromboembolismo.\n📚 Referencias\n• European Society of Cardiology. 2024 ESC Guidelines for the management of atrial fibrillation.\n• American Heart Association/American College of Cardiology. Guideline for the Diagnosis and Management of Atrial Fibrillation.\n• Braunwald. Heart Disease: A Textbook of Cardiovascular Medicine.\n• Manual AMIR – Cardiología."
  },
  {
    "id": "dr-q-eval1-41",
    "examArea": "Cardiología / Síndrome coronario agudo con elevación del ST",
    "topic": "Cardiología / Síndrome coronario agudo con elevación del ST",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 72 años, exfumador, hipertenso y diabético, con antecedente de ictus con paresia residual en el brazo izquierdo hace 4 meses, acude al Servicio de Urgencias de un hospital comarcal por dolor precordial intenso de 2 horas de evolución. En la exploración física presenta piel fría y sudorosa y tensión arterial de 80 mmHg. El electrocardiograma muestra elevación marcada del segmento ST en V1-V6, I y aVL. ¿Cuál de los siguientes tratamientos de reperfusión coronaria es el más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Fibrinólisis sistémica de forma inmediata en el hospital comarcal."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Traslado inmediato a un centro terciario para tratamiento con fibrinólisis."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Traslado inmediato a un centro terciario para procedimiento de revascularización percutánea."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Estabilización hemodinámica y procedimiento de revascularización diferido."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente presenta un IAM con elevación del segmento ST (IAMCEST) de solo 2 horas de evolución y además está hemodinámicamente inestable. La fibrinólisis está contraindicada por el antecedente reciente de ictus hace 4 meses. Por tanto, la estrategia de reperfusión indicada es el traslado inmediato a un centro con capacidad de intervención coronaria percutánea (ICP) primaria.\n\nLo que debes saber para el examen\nEn el IAMCEST, la estrategia de reperfusión depende fundamentalmente de:\n• Tiempo desde el inicio de los síntomas.\n• Disponibilidad de ICP primaria.\n• Contraindicaciones para fibrinólisis.\n• Situación hemodinámica del paciente.\nCuando existe una contraindicación para fibrinólisis:\nICP primaria si está disponible.\nEn este caso, el antecedente de ictus isquémico hace 4 meses contraindica la fibrinólisis.\nTema: Reperfusión en el síndrome coronario agudo con elevación del ST.",
    "keyPoints": [],
    "theoryContent": "El paciente presenta un IAM con elevación del segmento ST (IAMCEST) de solo 2 horas de evolución y además está hemodinámicamente inestable. La fibrinólisis está contraindicada por el antecedente reciente de ictus hace 4 meses. Por tanto, la estrategia de reperfusión indicada es el traslado inmediato a un centro con capacidad de intervención coronaria percutánea (ICP) primaria.\n\nLo que debes saber para el examen\nEn el IAMCEST, la estrategia de reperfusión depende fundamentalmente de:\n• Tiempo desde el inicio de los síntomas.\n• Disponibilidad de ICP primaria.\n• Contraindicaciones para fibrinólisis.\n• Situación hemodinámica del paciente.\nCuando existe una contraindicación para fibrinólisis:\nICP primaria si está disponible.\nEn este caso, el antecedente de ictus isquémico hace 4 meses contraindica la fibrinólisis.\nTema: Reperfusión en el síndrome coronario agudo con elevación del ST.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta tiene una clave muy importante:\nIAMCEST de 2 horas + ictus hace 4 meses.\nPrimero reconocemos el síndrome:\nDolor torácico intenso\n\nElevación del ST en múltiples derivaciones\n↓\nIAMCEST extenso.\nAdemás:\nTA 80 mmHg + piel fría y sudorosa\n↓\nInestabilidad hemodinámica / shock cardiogénico.\nEste paciente necesita reperfusión urgente.\n\n¿Fibrinólisis?\nAquí aparece la trampa.\nEl paciente tiene antecedente de:\nIctus hace 4 meses.\nLa fibrinólisis sistémica está contraindicada ante un ictus isquémico reciente, por el elevado riesgo de hemorragia intracraneal.\nPor tanto:\n❌ No fibrinólisis en el hospital comarcal.\n❌ No traslado para realizar fibrinólisis.\nLa alternativa es:\nICP primaria.\n\n¿Por qué traslado inmediato?\nEl hospital comarcal no dispone de capacidad de revascularización percutánea.\nPor tanto:\nIAMCEST\n↓\nContraindicación para fibrinólisis\n↓\nTraslado urgente a centro con ICP\n↓\nRevascularización coronaria percutánea primaria.\nNo debemos esperar a que el paciente se \"estabilice completamente\" para reperfundir la arteria culpable.\n\n¿Por qué las otras opciones son incorrectas?\nA. Fibrinólisis sistémica inmediata ❌\nEstá contraindicada por el ictus reciente.\nB. Traslado para fibrinólisis ❌\nEl problema persiste: trasladarlo a otro centro no elimina la contraindicación para la fibrinólisis.\nD. Estabilización y revascularización diferida ❌\nEl paciente tiene un IAMCEST de 2 horas y compromiso hemodinámico.\nLa reperfusión debe ser urgente, no diferida.\n\n🔥 TRAMPA DE EXAMEN\nCuando veas:\nIAMCEST + contraindicación para fibrinólisis\npiensa inmediatamente:\nICP PRIMARIA.\nY si además tiene:\nShock cardiogénico\nla necesidad de reperfusión urgente es todavía más evidente.\n\nRegla de oro para residencia\nIAMCEST\n↓\n¿Puede recibir fibrinólisis?\nNo → ICP primaria.\nSí → valorar ICP vs fibrinólisis según disponibilidad y tiempos.\n\nPerlas de examen\n✅ Ictus reciente = contraindicación importante para fibrinólisis.\n✅ La ICP primaria es la estrategia de elección cuando la fibrinólisis está contraindicada.\n✅ Shock cardiogénico + IAMCEST → reperfusión urgente.\n✅ No se debe retrasar la reperfusión esperando una estabilización hemodinámica completa cuando existe una estrategia de reperfusión indicada.\n📚 Referencias\n• Ibanez B, et al. 2017 ESC Guidelines for the management of acute myocardial infarction in patients presenting with ST-segment elevation. European Heart Journal.\n• Collet JP, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. European Heart Journal.\n• Braunwald. Heart Disease: A Textbook of Cardiovascular Medicine.\n• Manual AMIR – Cardiología."
  },
  {
    "id": "dr-q-eval1-42",
    "examArea": "Cardiología / Cardiopatía isquémica",
    "topic": "Cardiología / Cardiopatía isquémica",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 61 años consulta por dolor retroesternal opresivo de 90 minutos de evolución, acompañado de diaforesis y náuseas. El electrocardiograma muestra elevación del segmento ST en DII, DIII y aVF, compatible con un infarto agudo de miocardio inferior. Se realiza una angioplastia coronaria primaria con colocación de stent, con adecuada reperfusión. El ecocardiograma posterior muestra una fracción de eyección del ventrículo izquierdo de 38%. Se encuentra hemodinámicamente estable, sin signos de congestión pulmonar. ¿Cuál de los siguientes tratamientos farmacológicos debe formar parte del manejo posterior al infarto por su beneficio en la reducción de mortalidad?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Verapamilo."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Betabloqueante."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Digoxina."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Diltiazem."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Los betabloqueantes tienen un papel fundamental después del infarto de miocardio, especialmente en pacientes con disfunción ventricular izquierda, ya que disminuyen la demanda miocárdica de oxígeno, reducen el riesgo de arritmias y han demostrado beneficio pronóstico en pacientes seleccionados.\n\nLo que debes saber para el examen\nDespués de un IAM, el tratamiento farmacológico busca:\n• Prevenir reinfarto.\n• Disminuir mortalidad.\n• Prevenir remodelado ventricular.\n• Controlar los factores de riesgo.\nEntre los tratamientos fundamentales se encuentran:\n• Antiagregación plaquetaria.\n• Estatinas de alta intensidad.\n• Betabloqueantes, especialmente cuando existe disfunción ventricular izquierda.\n• IECA/ARA-II en pacientes con disfunción ventricular, hipertensión, diabetes u otras indicaciones.\n• Antagonistas de aldosterona en pacientes seleccionados.\nTema: Tratamiento farmacológico posterior al infarto de miocardio.",
    "keyPoints": [],
    "theoryContent": "Los betabloqueantes tienen un papel fundamental después del infarto de miocardio, especialmente en pacientes con disfunción ventricular izquierda, ya que disminuyen la demanda miocárdica de oxígeno, reducen el riesgo de arritmias y han demostrado beneficio pronóstico en pacientes seleccionados.\n\nLo que debes saber para el examen\nDespués de un IAM, el tratamiento farmacológico busca:\n• Prevenir reinfarto.\n• Disminuir mortalidad.\n• Prevenir remodelado ventricular.\n• Controlar los factores de riesgo.\nEntre los tratamientos fundamentales se encuentran:\n• Antiagregación plaquetaria.\n• Estatinas de alta intensidad.\n• Betabloqueantes, especialmente cuando existe disfunción ventricular izquierda.\n• IECA/ARA-II en pacientes con disfunción ventricular, hipertensión, diabetes u otras indicaciones.\n• Antagonistas de aldosterona en pacientes seleccionados.\nTema: Tratamiento farmacológico posterior al infarto de miocardio.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nLa pregunta nos da una pista muy importante:\nFracción de eyección de 38%.\nEste paciente ha sufrido un IAM y presenta:\nDisfunción ventricular izquierda.\nPor eso debemos pensar en tratamientos que no solo controlen síntomas, sino que:\nMejoren el pronóstico.\nEl betabloqueante disminuye:\n• Frecuencia cardíaca.\n• Contractilidad.\n• Consumo de oxígeno miocárdico.\nAdemás, reduce la actividad simpática y el riesgo de determinadas arritmias.\n\n¿Por qué no utilizar calcioantagonistas?\nVerapamilo ❌\nDiltiazem ❌\nAmbos son calcioantagonistas no dihidropiridínicos y tienen:\nEfecto inotrópico negativo.\nEn un paciente con disfunción ventricular izquierda, pueden empeorar la función sistólica.\n\n¿Y la digoxina?\nDigoxina ❌\nLa digoxina puede utilizarse en determinados pacientes con insuficiencia cardíaca o fibrilación auricular para control de frecuencia, pero no es un tratamiento estándar para mejorar la supervivencia después de un IAM.\n\n🔥 TRAMPA DE EXAMEN\nNo confundas:\n\"Disminuir la frecuencia cardíaca\"\ncon\n\"Mejorar el pronóstico después de un IAM.\"\nVarios fármacos pueden disminuir la frecuencia, pero los betabloqueantes tienen un papel pronóstico importante en pacientes seleccionados, especialmente con disfunción ventricular izquierda.\n\nRegla de oro para residencia\nIAM + disfunción ventricular izquierda\n↓\nBetabloqueante + IECA/ARA-II + estatina de alta intensidad + antiagregación\nsegún las características y tolerancia del paciente.\n\nPerlas de examen\n✅ Los betabloqueantes reducen el estímulo simpático y el consumo de oxígeno miocárdico.\n✅ La disfunción ventricular izquierda posterior a IAM es una situación especialmente relevante para el tratamiento neurohormonal.\n✅ Verapamilo y diltiazem deben utilizarse con precaución o evitarse en disfunción sistólica significativa.\n✅ Después de un IAM, la prevención secundaria es fundamental: antiagregación + estatina de alta intensidad + control de factores de riesgo, junto con tratamiento dirigido de la disfunción ventricular cuando corresponda.\n📚 Referencias\n• Collet JP, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. European Heart Journal. 2023.\n• Byrne RA, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. European Heart Journal. 2023.\n• Heidenreich PA, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation. 2022.\n• Braunwald. Heart Disease: A Textbook of Cardiovascular Medicine.\n• Manual AMIR – Cardiología."
  },
  {
    "id": "dr-q-eval1-43",
    "examArea": "Cardiología / Insuficiencia cardíaca",
    "topic": "Cardiología / Insuficiencia cardíaca",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Los inhibidores de la enzima convertidora de angiotensina (IECA) son fármacos de primera línea para el tratamiento de:",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Las arritmias ventriculares."
      },
      {
        "id": "B",
        "label": "B",
        "text": "La insuficiencia cardíaca."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Los bloqueos AV de segundo y tercer grado."
      },
      {
        "id": "D",
        "label": "D",
        "text": "La hipercolesterolemia."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Los IECA son fundamentales en el tratamiento de la insuficiencia cardíaca, especialmente cuando existe disfunción ventricular izquierda, porque disminuyen la activación del sistema renina-angiotensina-aldosterona, reducen la poscarga y el remodelado ventricular y han demostrado beneficio pronóstico.\n\nLo que debes saber para el examen\nLos IECA tienen especial importancia en:\n• Insuficiencia cardíaca con fracción de eyección reducida.\n• Disfunción ventricular izquierda.\n• Hipertensión arterial.\n• Prevención del remodelado posterior al infarto de miocardio.\nTema: Tratamiento farmacológico de la insuficiencia cardíaca.",
    "keyPoints": [],
    "theoryContent": "Los IECA son fundamentales en el tratamiento de la insuficiencia cardíaca, especialmente cuando existe disfunción ventricular izquierda, porque disminuyen la activación del sistema renina-angiotensina-aldosterona, reducen la poscarga y el remodelado ventricular y han demostrado beneficio pronóstico.\n\nLo que debes saber para el examen\nLos IECA tienen especial importancia en:\n• Insuficiencia cardíaca con fracción de eyección reducida.\n• Disfunción ventricular izquierda.\n• Hipertensión arterial.\n• Prevención del remodelado posterior al infarto de miocardio.\nTema: Tratamiento farmacológico de la insuficiencia cardíaca.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta es una pregunta directa, pero tiene una enseñanza importante:\nLos IECA no son simplemente antihipertensivos. También modifican el pronóstico de determinadas enfermedades cardiovasculares.\n¿Qué hacen?\nAl inhibir la enzima convertidora:\n↓\n↓ Angiotensina II\n↓\n↓ Vasoconstricción↓ Aldosterona↓ Retención hidrosalina↓ Remodelado ventricular\n↓\nMejora de la insuficiencia cardíaca.\n\n¿Por qué las otras opciones son incorrectas?\nA. Arritmias ventriculares ❌\nLos IECA no son antiarrítmicos. Pueden reducir indirectamente el riesgo arrítmico al mejorar la función ventricular, pero no son tratamiento de primera línea de las arritmias ventriculares.\nC. Bloqueos AV de segundo y tercer grado ❌\nLos bloqueos AV son trastornos de la conducción eléctrica.\nEn los bloqueos AV avanzados, la estrategia puede requerir:\nMarcapasos.\nLos IECA no corrigen el defecto de conducción.\nD. Hipercolesterolemia ❌\nEl tratamiento farmacológico de primera línea de la hipercolesterolemia, cuando está indicado, son las:\nEstatinas.\n\n🔥 TRAMPA DE EXAMEN\nCuando pienses en IECA, asócialos con:\n\"CORAZÓN + RIÑÓN + PRESIÓN\"\nCorazón:→ Insuficiencia cardíaca.→ Disfunción ventricular izquierda.→ Remodelado post-IAM.\nRiñón:→ Enfermedad renal con determinadas indicaciones, especialmente proteinuria/albuminuria.\nPresión:→ Hipertensión arterial.\n\nRegla de oro para residencia\nInsuficiencia cardíaca con disfunción sistólica\n↓\nBloqueo del sistema renina-angiotensina\n↓\nIECA / ARA-II / ARNI según el contexto clínico.\n\nPerlas de examen\n✅ Los IECA disminuyen mortalidad y hospitalizaciones en pacientes apropiados con insuficiencia cardíaca con fracción de eyección reducida.\n✅ Reducen el remodelado ventricular.\n✅ No son antiarrítmicos.\n✅ No tratan los bloqueos AV.\n✅ No son fármacos hipolipemiantes.\n📚 Referencias\n• McDonagh TA, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. European Heart Journal. 2021.\n• Heidenreich PA, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation. 2022.\n• Braunwald. Heart Disease: A Textbook of Cardiovascular Medicine.\n• Manual AMIR – Cardiología."
  },
  {
    "id": "dr-q-eval1-44",
    "examArea": "Cardiología / Insuficiencia cardíaca",
    "topic": "Cardiología / Insuficiencia cardíaca",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un hombre de 75 años, hipertenso y dislipémico, con antecedentes de insuficiencia cardíaca por disfunción sistólica del ventrículo izquierdo (FE <30%), acude a consulta por empeoramiento de su disnea habitual en las últimas semanas. Presenta una presión arterial de 160/95 mmHg y frecuencia cardíaca de 65 lpm. En la exploración física no se auscultan crepitantes y la presión venosa yugular es normal. Aporta una determinación de creatinina de 3,7 mg/dL, con iones dentro de la normalidad. ¿Cuál de los siguientes fármacos es el más adecuado para mejorar el pronóstico de su insuficiencia cardíaca?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Enalapril."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Losartán."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Espironolactona."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Bisoprolol."
      }
    ],
    "correctOptionId": "D",
    "explanation": "El paciente presenta insuficiencia cardíaca con disfunción sistólica grave y una insuficiencia renal importante (creatinina 3,7 mg/dL). En este contexto, los fármacos que bloquean el sistema renina-angiotensina y la espironolactona plantean problemas por la función renal. El bisoprolol, uno de los betabloqueantes con evidencia de beneficio pronóstico en la insuficiencia cardíaca con disfunción sistólica, es la opción más adecuada entre las disponibles.\n\nLo que debes saber para el examen\nEn la insuficiencia cardíaca con fracción de eyección reducida, los tratamientos con beneficio pronóstico incluyen:\n• Betabloqueantes: bisoprolol, carvedilol y metoprolol succinato.\n• IECA/ARA-II/ARNI según el contexto.\n• Antagonistas de mineralocorticoides en pacientes seleccionados.\nPero siempre hay que valorar:\nFunción renal y potasio.\nEn este caso, la creatinina de 3,7 mg/dL es el dato que hace que las opciones que actúan sobre el sistema renina-angiotensina o la aldosterona sean menos apropiadas.",
    "keyPoints": [],
    "theoryContent": "El paciente presenta insuficiencia cardíaca con disfunción sistólica grave y una insuficiencia renal importante (creatinina 3,7 mg/dL). En este contexto, los fármacos que bloquean el sistema renina-angiotensina y la espironolactona plantean problemas por la función renal. El bisoprolol, uno de los betabloqueantes con evidencia de beneficio pronóstico en la insuficiencia cardíaca con disfunción sistólica, es la opción más adecuada entre las disponibles.\n\nLo que debes saber para el examen\nEn la insuficiencia cardíaca con fracción de eyección reducida, los tratamientos con beneficio pronóstico incluyen:\n• Betabloqueantes: bisoprolol, carvedilol y metoprolol succinato.\n• IECA/ARA-II/ARNI según el contexto.\n• Antagonistas de mineralocorticoides en pacientes seleccionados.\nPero siempre hay que valorar:\nFunción renal y potasio.\nEn este caso, la creatinina de 3,7 mg/dL es el dato que hace que las opciones que actúan sobre el sistema renina-angiotensina o la aldosterona sean menos apropiadas.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta parece preguntar simplemente:\n\"¿Cuál de estos fármacos mejora la supervivencia en insuficiencia cardíaca?\"\nPero hay una segunda capa:\n¿Cuál puede utilizarse en ESTE paciente?\n\nPASO 1. Reconocer la insuficiencia cardíaca con disfunción sistólica\nFE:\n<30%\n↓\nInsuficiencia cardíaca con fracción de eyección reducida grave.\nPor tanto, debemos buscar fármacos con beneficio pronóstico, no únicamente medicamentos para aliviar la congestión.\n\nPASO 2. Encontrar el dato que cambia la pregunta\nCreatinina:\n3,7 mg/dL\nEsto indica una disfunción renal importante.\nAhora revisamos las opciones.\n\nA. Enalapril ❌\nEl enalapril es un IECA y tiene beneficio pronóstico en la insuficiencia cardíaca con FE reducida.\nPero en este paciente existe una insuficiencia renal importante, por lo que su utilización requiere especial precaución y no es la mejor opción entre las disponibles.\n\nB. Losartán ❌\nMisma lógica.\nEl losartán es un ARA-II y puede mejorar el pronóstico en determinados pacientes con insuficiencia cardíaca.\nSin embargo:\nLa función renal severamente deteriorada limita esta opción.\n\nC. Espironolactona ❌\nLa espironolactona también tiene beneficio pronóstico en pacientes seleccionados con insuficiencia cardíaca y FE reducida.\nPero su utilización está limitada por:\n• Insuficiencia renal.\n• Riesgo de hiperpotasemia.\nCon una creatinina de 3,7 mg/dL, no es la opción adecuada.\n\nD. Bisoprolol ✅\nEl bisoprolol es un betabloqueante con evidencia de beneficio pronóstico en la insuficiencia cardíaca con disfunción sistólica.\nAdemás, en este contexto es la alternativa más apropiada de las ofrecidas.\nPor eso:\nD. Bisoprolol.\n\n🔥 TRAMPA DE EXAMEN\nNo caigas en:\n\"IECA = insuficiencia cardíaca → enalapril.\"\nEso sería demasiado automático.\nPrimero identifica:\n¿Hay alguna contraindicación o limitación importante?\nEn esta pregunta:\nCreatinina 3,7 mg/dL.\nEse dato está ahí precisamente para obligarte a reconsiderar las opciones.\n\nRegla de oro para residencia\nIC con FE reducida\n↓\nBusca fármacos que disminuyan mortalidad:\nIECA/ARNI + betabloqueante + antagonista mineralocorticoide, según el paciente.\nPero antes:\nREVISA FUNCIÓN RENAL Y POTASIO.\n\nPerlas de examen\n✅ Bisoprolol, carvedilol y metoprolol succinato son betabloqueantes con evidencia de beneficio pronóstico en IC con FE reducida.\n✅ La insuficiencia renal avanzada limita el uso de IECA/ARA-II y especialmente de antagonistas de mineralocorticoides.\n✅ La espironolactona obliga a vigilar especialmente el potasio y la función renal.\n✅ No confundas medicamentos que mejoran síntomas con aquellos que tienen beneficio pronóstico.\n📚 Referencias\n• McDonagh TA, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. European Heart Journal. 2021.\n• Heidenreich PA, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation. 2022.\n• Braunwald. Heart Disease: A Textbook of Cardiovascular Medicine.\n• Manual AMIR – Cardiología."
  },
  {
    "id": "dr-q-eval1-45",
    "examArea": "Neumología / EPOC",
    "topic": "Neumología / EPOC",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "La rehabilitación pulmonar es una intervención fundamental en el manejo integral de los pacientes con EPOC. ¿Cuál de las siguientes afirmaciones NO corresponde a uno de los beneficios demostrados de la rehabilitación pulmonar?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Mejora la calidad de vida."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Mejora la disnea."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Disminuye la mortalidad."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Disminuye la frecuencia de hospitalización."
      }
    ],
    "correctOptionId": "C",
    "explanation": "La rehabilitación pulmonar en la EPOC mejora de forma significativa la disnea, capacidad funcional y calidad de vida, y puede reducir las hospitalizaciones y exacerbaciones. Sin embargo, no se considera una intervención que haya demostrado reducir directamente la mortalidad.\n\nLo que debes saber para el examen\nLa rehabilitación pulmonar incluye ejercicio físico, educación, intervención nutricional y estrategias para mejorar el autocuidado.\nSus principales beneficios son:\n• ↓ Disnea\n• ↑ Capacidad de ejercicio\n• ↑ Calidad de vida\n• ↓ Impacto de los síntomas\n• ↓ Hospitalizaciones, especialmente después de exacerbaciones en pacientes seleccionados.\nTema: Tratamiento no farmacológico de la EPOC.",
    "keyPoints": [],
    "theoryContent": "La rehabilitación pulmonar en la EPOC mejora de forma significativa la disnea, capacidad funcional y calidad de vida, y puede reducir las hospitalizaciones y exacerbaciones. Sin embargo, no se considera una intervención que haya demostrado reducir directamente la mortalidad.\n\nLo que debes saber para el examen\nLa rehabilitación pulmonar incluye ejercicio físico, educación, intervención nutricional y estrategias para mejorar el autocuidado.\nSus principales beneficios son:\n• ↓ Disnea\n• ↑ Capacidad de ejercicio\n• ↑ Calidad de vida\n• ↓ Impacto de los síntomas\n• ↓ Hospitalizaciones, especialmente después de exacerbaciones en pacientes seleccionados.\nTema: Tratamiento no farmacológico de la EPOC.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta es de esas que parecen sencillas, pero tienen una trampa de pronóstico.\nLa rehabilitación pulmonar es excelente para mejorar:\nCómo vive el paciente con EPOC.\nPero no debemos atribuirle automáticamente un beneficio demostrado sobre:\nSupervivencia.\n\n¿Qué mejora claramente?\n1. Disnea ✅\nEl entrenamiento muscular y el acondicionamiento físico permiten que el paciente realice actividades con menor sensación de falta de aire.\n2. Calidad de vida ✅\nEl paciente mejora su capacidad para realizar actividades cotidianas y disminuye la limitación funcional producida por la enfermedad.\n3. Hospitalizaciones ✅\nLa rehabilitación pulmonar puede reducir las exacerbaciones y hospitalizaciones en determinados contextos, especialmente cuando se integra en programas de recuperación posteriores a exacerbaciones.\n4. Mortalidad ❌\nAquí está la respuesta.\nLa rehabilitación pulmonar no se considera un tratamiento con beneficio demostrado directo sobre la mortalidad.\n\n🔥 TRAMPA DE EXAMEN\nNo confundas:\nMejora mucho la capacidad funcional\ncon:\nAumenta la supervivencia.\nLa rehabilitación pulmonar es fundamentalmente una intervención para:\nSíntomas + capacidad funcional + calidad de vida.\n\nRegla de oro para residencia\nEPOC + rehabilitación pulmonar\n↓\n↓ Disnea\n↑ Capacidad de ejercicio\n↑ Calidad de vida\n↓ Hospitalizaciones\nPero:\n❌ No disminuye directamente la mortalidad.\n\nPerlas de examen\n✅ La rehabilitación pulmonar es una intervención multidisciplinaria.\n✅ El ejercicio físico es uno de sus componentes centrales.\n✅ Es especialmente útil para mejorar la capacidad funcional y la disnea.\n✅ La oxigenoterapia crónica sí puede reducir mortalidad en pacientes con EPOC e hipoxemia crónica grave seleccionados; no hay que confundirla con la rehabilitación pulmonar.\n📚 Referencias\n• Global Initiative for Chronic Obstructive Lung Disease (GOLD). Global Strategy for the Prevention, Diagnosis and Management of COPD.\n• Spruit MA, et al. An official American Thoracic Society/European Respiratory Society statement: key concepts and advances in pulmonary rehabilitation. Am J Respir Crit Care Med.\n• Manual AMIR – Neumología.\n• Harrison. Principios de Medicina Interna."
  },
  {
    "id": "dr-q-eval1-46",
    "examArea": "Reumatología / Gota",
    "topic": "Reumatología / Gota",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Un paciente con hiperuricemia que habitualmente toma 100 mg de alopurinol al día acude a Urgencias por dolor agudo y signos inflamatorios en la rodilla derecha. Se realiza una artrocentesis y en el microscopio de luz polarizada se observan cristales en forma de aguja con birrefringencia negativa. ¿Qué actitud terapéutica, entre las siguientes, es la más adecuada en este caso?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Suspender alopurinol e iniciar tratamiento con colchicina."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Suspender alopurinol y comenzar con AINE."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Añadir AINE hasta que la crisis remita."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Aumentar la dosis de alopurinol a 300 mg/día."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente presenta una crisis aguda de gota. Los cristales de urato monosódico tienen forma de aguja y presentan birrefringencia negativa. Durante una crisis aguda no debe suspenderse el alopurinol si el paciente ya lo estaba tomando; se añade tratamiento antiinflamatorio, como un AINE, colchicina o corticoide según el contexto clínico.\n\nLo que debes saber para el examen\nCrisis aguda de gota\nCristales de urato monosódico:\n• Forma de aguja.\n• Birrefringencia negativa.\n• Se observan dentro de los leucocitos en el líquido sinovial.\nEl tratamiento de la crisis incluye:\n• AINE.\n• Colchicina.\n• Glucocorticoides en determinados pacientes.\nSi el paciente ya recibe tratamiento hipouricemiante:\nNo se debe suspender el alopurinol durante la crisis.\nTema: Diagnóstico y tratamiento de la artritis gotosa aguda.",
    "keyPoints": [],
    "theoryContent": "El paciente presenta una crisis aguda de gota. Los cristales de urato monosódico tienen forma de aguja y presentan birrefringencia negativa. Durante una crisis aguda no debe suspenderse el alopurinol si el paciente ya lo estaba tomando; se añade tratamiento antiinflamatorio, como un AINE, colchicina o corticoide según el contexto clínico.\n\nLo que debes saber para el examen\nCrisis aguda de gota\nCristales de urato monosódico:\n• Forma de aguja.\n• Birrefringencia negativa.\n• Se observan dentro de los leucocitos en el líquido sinovial.\nEl tratamiento de la crisis incluye:\n• AINE.\n• Colchicina.\n• Glucocorticoides en determinados pacientes.\nSi el paciente ya recibe tratamiento hipouricemiante:\nNo se debe suspender el alopurinol durante la crisis.\nTema: Diagnóstico y tratamiento de la artritis gotosa aguda.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta tiene dos conceptos que debes reconocer inmediatamente.\nPASO 1. Identificar el cristal\nLa artrocentesis muestra:\nCristales en forma de aguja + birrefringencia negativa.\nEso es:\nUrato monosódico → GOTA.\nPara no confundirte:\nGota\n→ Cristales de urato monosódico.\n→ Aguja.\n→ Birrefringencia negativa.\n\nPASO 2. ¿Estamos ante una crisis aguda?\nSí.\nEl paciente presenta:\n• Dolor intenso.\n• Inflamación articular.\n• Rodilla afectada.\n• Cristales de urato en el líquido sinovial.\n↓\nArtritis gotosa aguda.\nAhora el objetivo inmediato es:\nControlar la inflamación y el dolor.\n\nPASO 3. ¿Qué hacemos con el alopurinol?\nAquí está la trampa.\nEl paciente ya está tomando alopurinol.\nNo debemos:\n❌ Suspenderlo.\nTampoco:\n❌ Aumentar inmediatamente la dosis durante la crisis.\nLo correcto es:\nMantener el tratamiento hipouricemiante y tratar la crisis con un antiinflamatorio.\nPor eso la respuesta es:\nC. Añadir AINE hasta que la crisis remita.\n\n¿Por qué las otras opciones son incorrectas?\nA. Suspender alopurinol e iniciar colchicina ❌\nLa colchicina sí es una opción para tratar la crisis, pero no es necesario suspender el alopurinol.\nB. Suspender alopurinol y comenzar AINE ❌\nEl AINE sería apropiado, pero nuevamente:\nNo se debe suspender el alopurinol que el paciente ya estaba tomando.\nD. Aumentar alopurinol a 300 mg/día ❌\nEl alopurinol es un tratamiento hipouricemiante a largo plazo, no el tratamiento para controlar la inflamación de una crisis aguda.\n\n🔥 TRAMPA DE EXAMEN\nNo confundas:\nTratamiento de la crisis\n→ AINE / colchicina / corticoide\ncon:\nTratamiento hipouricemiante\n→ Alopurinol / febuxostat, entre otros.\nEl primero controla:\nLa inflamación actual.\nEl segundo busca:\nPrevenir futuras crisis y reducir los depósitos de urato.\n\nRegla de oro para residencia\nGota aguda\n↓\nAgujas + birrefringencia negativa\n↓\nUrato monosódico\n↓\nAntiinflamatorio\nY si ya tomaba alopurinol:\nNO lo suspendas durante la crisis.\n\nPerlas de examen\n✅ Gota = cristales en aguja + birrefringencia negativa.\n✅ Pseudogota = cristales romboidales + birrefringencia positiva débil.\n✅ El alopurinol no trata el dolor de la crisis aguda.\n✅ El tratamiento de la crisis es antiinflamatorio.\n✅ Si el paciente ya recibe tratamiento hipouricemiante, no debe suspenderse simplemente porque aparezca una crisis.\n📚 Referencias\n• FitzGerald JD, et al. 2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Care & Research. 2020.\n• Richette P, et al. 2016 updated EULAR evidence-based recommendations for the management of gout. Annals of the Rheumatic Diseases. 2017.\n• Harrison. Principios de Medicina Interna.\n• Manual AMIR – Reumatología."
  },
  {
    "id": "dr-q-eval1-47",
    "examArea": "Reumatología / Osteoporosis",
    "topic": "Reumatología / Osteoporosis",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "De los métodos terapéuticos citados a continuación, ¿cuál considera que resulta más eficaz para prevenir la fractura de cadera?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Estrógenos."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Calcio y vitamina D."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Bifosfonatos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Actividad física."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Los bifosfonatos son uno de los tratamientos farmacológicos de primera línea para la osteoporosis y han demostrado reducir de forma significativa el riesgo de fracturas vertebrales y no vertebrales, incluida la fractura de cadera. El calcio, la vitamina D y la actividad física son importantes medidas complementarias, pero no tienen la misma eficacia antifractura cuando se utilizan como intervención aislada.\n\nLo que debes saber para el examen\nTratamiento de la osteoporosis\nLos bifosfonatos son fármacos antirresortivos que disminuyen la actividad de los osteoclastos.\nEntre ellos:\n• Alendronato.\n• Risedronato.\n• Ibandronato.\n• Ácido zoledrónico.\nEl alendronato, risedronato y zoledronato han demostrado reducción del riesgo de fractura de cadera.\nTema: Tratamiento farmacológico de la osteoporosis y prevención de fracturas.",
    "keyPoints": [],
    "theoryContent": "Los bifosfonatos son uno de los tratamientos farmacológicos de primera línea para la osteoporosis y han demostrado reducir de forma significativa el riesgo de fracturas vertebrales y no vertebrales, incluida la fractura de cadera. El calcio, la vitamina D y la actividad física son importantes medidas complementarias, pero no tienen la misma eficacia antifractura cuando se utilizan como intervención aislada.\n\nLo que debes saber para el examen\nTratamiento de la osteoporosis\nLos bifosfonatos son fármacos antirresortivos que disminuyen la actividad de los osteoclastos.\nEntre ellos:\n• Alendronato.\n• Risedronato.\n• Ibandronato.\n• Ácido zoledrónico.\nEl alendronato, risedronato y zoledronato han demostrado reducción del riesgo de fractura de cadera.\nTema: Tratamiento farmacológico de la osteoporosis y prevención de fracturas.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nLa pregunta compara cuatro intervenciones que pueden aparecer en el manejo de la osteoporosis, pero no todas tienen el mismo impacto sobre la prevención de fracturas.\nLa clave está en:\n\"¿Cuál es más eficaz para prevenir la fractura de cadera?\"\nLa respuesta es:\nBIFOSFONATOS.\n\n¿Qué hacen los bifosfonatos?\nLa osteoporosis se caracteriza por un desequilibrio del remodelado óseo con aumento de la resorción.\nLos bifosfonatos:\n↓ actividad de los osteoclastos\n↓\n↓ resorción ósea\n↓\n↑ densidad mineral ósea\n↓\n↓ riesgo de fracturas.\n\n¿Por qué no calcio + vitamina D?\nB. ❌\nSon fundamentales para mantener una adecuada salud ósea y corregir déficits, pero por sí solos no tienen la eficacia antifractura de los tratamientos farmacológicos específicos de la osteoporosis en pacientes con alto riesgo.\n\n¿Por qué no actividad física?\nD. ❌\nEl ejercicio, especialmente los ejercicios con carga y de fuerza, es importante porque:\n• Ayuda a mantener masa ósea.\n• Mejora fuerza muscular.\n• Mejora equilibrio.\n• Reduce riesgo de caídas.\nPero no sustituye al tratamiento farmacológico cuando existe osteoporosis con alto riesgo de fractura.\n\n¿Y los estrógenos?\nA. ❌\nLos estrógenos disminuyen la pérdida ósea y pueden reducir fracturas, pero actualmente no constituyen el tratamiento de elección general para la osteoporosis debido a su perfil de riesgos y a la disponibilidad de alternativas más seguras para la mayoría de pacientes.\n\n🔥 TRAMPA DE EXAMEN\nNo confundas:\nMedidas necesarias para una buena salud ósea\ncon:\nTratamiento farmacológico eficaz para prevenir fracturas osteoporóticas.\nCalcio + vitamina D + ejercicio\n→ Base del manejo.\nBifosfonatos\n→ Tratamiento antifractura de primera línea en muchos pacientes.\n\nRegla de oro para residencia\nOsteoporosis establecida + alto riesgo de fractura\n↓\nTratamiento antirresortivo\n↓\nBifosfonatos como opción de primera línea en muchos pacientes.\n\nPerlas de examen\n✅ Bifosfonatos → ↓ resorción ósea.\n✅ Alendronato, risedronato y zoledronato reducen el riesgo de fractura de cadera.\n✅ Calcio y vitamina D son importantes, pero no sustituyen el tratamiento farmacológico en osteoporosis de alto riesgo.\n✅ El ejercicio disminuye el riesgo de caídas y ayuda a conservar la salud ósea, pero tampoco sustituye el tratamiento específico cuando está indicado.\n📚 Referencias\n• LeBoff MS, et al. The Clinician's Guide to Prevention and Treatment of Osteoporosis. Osteoporosis International. 2022.\n• Eastell R, et al. Pharmacological Management of Osteoporosis in Postmenopausal Women: An Endocrine Society Clinical Practice Guideline. Journal of Clinical Endocrinology & Metabolism. 2019; actualización 2020.\n• Harrison. Principios de Medicina Interna.\n• Manual AMIR – Reumatología."
  },
  {
    "id": "dr-q-eval1-48",
    "examArea": "Neurología / Accidente cerebrovascular",
    "topic": "Neurología / Accidente cerebrovascular",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Indique qué arteria es la afectada en un paciente diestro que, por un infarto cerebral, presenta trastornos motores, sensitivos y afasia.",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Cerebral anterior derecha."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Cerebral media derecha."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Cerebral media izquierda."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Cerebral anterior izquierda."
      }
    ],
    "correctOptionId": "C",
    "explanation": "En una persona diestra, el hemisferio dominante para el lenguaje es habitualmente el izquierdo. La arteria cerebral media izquierda irriga gran parte de las áreas corticales relacionadas con el lenguaje y las regiones motoras y sensitivas de predominio facial y de la extremidad superior. Por ello, la asociación de déficit motor + sensitivo + afasia orienta a un infarto en el territorio de la cerebral media izquierda.\n\nLo que debes saber para el examen\nArteria cerebral media\nLa ACM irriga gran parte de la superficie lateral del hemisferio cerebral, incluyendo áreas motoras, sensitivas y del lenguaje.\nACM izquierda en paciente diestro:\n→ Hemiparesia derecha.→ Déficit sensitivo derecho.→ Afasia si afecta el hemisferio dominante.\nACM derecha:\n→ Hemiparesia y déficit sensitivo izquierdos.→ Puede producir heminegligencia izquierda, especialmente en lesiones extensas.\nTema: Síndromes vasculares cerebrales.",
    "keyPoints": [],
    "theoryContent": "En una persona diestra, el hemisferio dominante para el lenguaje es habitualmente el izquierdo. La arteria cerebral media izquierda irriga gran parte de las áreas corticales relacionadas con el lenguaje y las regiones motoras y sensitivas de predominio facial y de la extremidad superior. Por ello, la asociación de déficit motor + sensitivo + afasia orienta a un infarto en el territorio de la cerebral media izquierda.\n\nLo que debes saber para el examen\nArteria cerebral media\nLa ACM irriga gran parte de la superficie lateral del hemisferio cerebral, incluyendo áreas motoras, sensitivas y del lenguaje.\nACM izquierda en paciente diestro:\n→ Hemiparesia derecha.→ Déficit sensitivo derecho.→ Afasia si afecta el hemisferio dominante.\nACM derecha:\n→ Hemiparesia y déficit sensitivo izquierdos.→ Puede producir heminegligencia izquierda, especialmente en lesiones extensas.\nTema: Síndromes vasculares cerebrales.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta se resuelve juntando dos datos:\nPaciente diestro + afasia.\nPASO 1. ¿Dónde está el lenguaje?\nEn la mayoría de las personas diestras:\nHemisferio izquierdo = hemisferio dominante para el lenguaje.\nPor tanto:\nAfasia\n↓\nHemisferio izquierdo.\n\nPASO 2. ¿Qué arteria irriga ese territorio?\nLa principal arteria que irriga la superficie lateral del hemisferio y las áreas del lenguaje es:\nArteria cerebral media.\nEntonces:\nAfasia\n\nDéficit motor y sensitivo\n↓\nHemisferio dominante izquierdo\n↓\nCerebral media izquierda.\n\n¿Por qué no cerebral anterior?\nLa arteria cerebral anterior irriga predominantemente la superficie medial de los hemisferios, especialmente las áreas relacionadas con la extremidad inferior.\nPor eso:\nACA → pierna predominante.\nMientras que:\nACM → cara y brazo predominantes.\n\n¿Por qué no cerebral media derecha?\nLa cerebral media derecha puede producir:\n• Hemiparesia izquierda.\n• Déficit sensitivo izquierdo.\n• Heminegligencia.\nPero en un paciente diestro, la afasia orienta fuertemente hacia el:\nHemisferio dominante izquierdo.\n\n🔥 TRAMPA DE EXAMEN\nNo memorices únicamente:\n\"Afasia = cerebral media.\"\nHaz el razonamiento completo:\nAfasia → hemisferio dominante.\nDiestro → generalmente hemisferio izquierdo.\nHemisferio izquierdo + lenguaje → ACM izquierda.\n\nRegla de oro para residencia\nACM izquierda\n→ Afasia + hemiparesia/hipoestesia derecha.\nACM derecha\n→ Hemiparesia/hipoestesia izquierda + heminegligencia.\nACA\n→ Déficit predominante de miembro inferior.\n\nPerlas de examen\n✅ En la mayoría de los diestros, el hemisferio izquierdo es dominante para el lenguaje.\n✅ Afasia → hemisferio dominante.\n✅ ACM → cara y brazo predominantemente.\n✅ ACA → pierna predominantemente.\n✅ La combinación afasia + déficit motor/sensitivo contralateral es altamente sugestiva de lesión de la ACM del hemisferio dominante.\n📚 Referencias\n• Powers WJ, et al. 2019 Guidelines for the Early Management of Patients With Acute Ischemic Stroke. Stroke. 2019.\n• Caplan LR. Caplan's Stroke: A Clinical Approach.\n• Harrison. Principios de Medicina Interna.\n• Manual AMIR – Neurología."
  },
  {
    "id": "dr-q-eval1-49",
    "examArea": "Hematología / Anemia ferropénica",
    "topic": "Hematología / Anemia ferropénica",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "Una mujer de 35 años sana consulta por astenia. En el hemograma presenta anemia microcítica e hipocrómica, con hemoglobina de 7 g/dL, volumen corpuscular medio de 68 fL, hemoglobina corpuscular media de 24 pg, una amplitud de distribución eritrocitaria (ADE) elevada del 20%, reticulocitos disminuidos (0,3%; 30.000/L absolutos), contenido de hemoglobina disminuido en los reticulocitos (17 pg) y discreta trombocitosis (500.000 plaquetas/μL). Con los datos del hemograma, ¿cuál sería su sospecha diagnóstica aun sin tener la bioquímica de la paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Rasgo talasémico."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Anemia central, arregenerativa, por déficit de ácido fólico."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Anemia periférica, regenerativa, hemolítica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Anemia central, arregenerativa, por déficit de hierro."
      }
    ],
    "correctOptionId": "D",
    "explanation": "El hemograma muestra una anemia microcítica e hipocrómica, con ADE elevada, reticulocitos disminuidos y bajo contenido de hemoglobina en los reticulocitos. Este patrón orienta fuertemente hacia una anemia ferropénica, que es una anemia central/arregenerativa por alteración de la producción eritroide debido a la falta de hierro.\n\nLo que debes saber para el examen\nPara interpretar una anemia, primero piensa en dos preguntas:\n1. ¿Es microcítica, normocítica o macrocítica?\nAquí:\nVCM 68 fL → microcítica.\n↓\nPensamos principalmente en:\n• Ferropenia.\n• Talasemia.\n• Anemia de enfermedad crónica.\n• Anemia sideroblástica.\n2. ¿La médula está respondiendo?\nReticulocitos:\n0,3% → disminuidos.\n↓\nEs una anemia arregenerativa/central.\nAdemás:\nContenido de Hb reticulocitaria ↓\n↓\nIndica que los nuevos eritrocitos están recibiendo una cantidad insuficiente de hierro para sintetizar hemoglobina.\nTema: Interpretación del hemograma en la anemia ferropénica.",
    "keyPoints": [],
    "theoryContent": "El hemograma muestra una anemia microcítica e hipocrómica, con ADE elevada, reticulocitos disminuidos y bajo contenido de hemoglobina en los reticulocitos. Este patrón orienta fuertemente hacia una anemia ferropénica, que es una anemia central/arregenerativa por alteración de la producción eritroide debido a la falta de hierro.\n\nLo que debes saber para el examen\nPara interpretar una anemia, primero piensa en dos preguntas:\n1. ¿Es microcítica, normocítica o macrocítica?\nAquí:\nVCM 68 fL → microcítica.\n↓\nPensamos principalmente en:\n• Ferropenia.\n• Talasemia.\n• Anemia de enfermedad crónica.\n• Anemia sideroblástica.\n2. ¿La médula está respondiendo?\nReticulocitos:\n0,3% → disminuidos.\n↓\nEs una anemia arregenerativa/central.\nAdemás:\nContenido de Hb reticulocitaria ↓\n↓\nIndica que los nuevos eritrocitos están recibiendo una cantidad insuficiente de hierro para sintetizar hemoglobina.\nTema: Interpretación del hemograma en la anemia ferropénica.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta es muy buena porque permite llegar al diagnóstico antes de tener ferritina, hierro sérico o transferrina.\nVamos paso por paso.\nPASO 1. ¿Qué tipo de anemia tenemos?\nLa hemoglobina es:\n7 g/dL\nHay anemia importante.\nEl VCM es:\n68 fL\n↓\nMICROCÍTICA\nY la HCM está disminuida:\n24 pg\n↓\nHIPOCROMÍA\nPor tanto:\nAnemia microcítica hipocrómica.\n\nPASO 2. ¿La médula está respondiendo?\nReticulocitos:\n0,3%\ny absolutos:\n30.000/L\nEstán disminuidos.\n↓\nLa médula no está respondiendo adecuadamente.\nPor tanto:\nAnemia central / arregenerativa.\nEsto es fundamental.\n\nPASO 3. ¿Qué nos dice el ADE?\nADE:\n20% → elevado.\nEsto significa que existe una importante variabilidad en el tamaño de los eritrocitos:\nAnisocitosis.\nLa elevación del ADE es muy característica de la ferropenia, especialmente cuando esta se desarrolla progresivamente.\nEn el rasgo talasémico, el ADE suele ser normal o menos elevado.\n\nPASO 4. El dato fino: hemoglobina reticulocitaria\nEl contenido de hemoglobina de los reticulocitos es:\n17 pg → disminuido.\nEsto indica que los eritrocitos recién producidos están incorporando poca hemoglobina.\n↓\nDéficit de hierro disponible para la eritropoyesis.\nPor eso el conjunto del hemograma apunta a:\nANEMIA FERROPÉNICA.\n\n¿Por qué las otras opciones son incorrectas?\nA. Rasgo talasémico ❌\nLa talasemia también produce anemia microcítica, pero típicamente:\n• VCM muy bajo.\n• Eritrocitos relativamente numerosos.\n• ADE generalmente normal.\n• Reticulocitos no necesariamente tan disminuidos.\nAquí la combinación de ADE elevada + hipocromía + reticulocitopenia + Hb reticulocitaria baja favorece ferropenia.\n\nB. Déficit de ácido fólico ❌\nEl déficit de folato produce:\nAnemia macrocítica/megaloblástica.\nAquí el VCM es:\n68 fL.\nPor tanto, no corresponde.\n\nC. Anemia hemolítica ❌\nUna anemia hemolítica periférica generalmente genera:\nReticulocitosis.\nAquí ocurre exactamente lo contrario:\nReticulocitos disminuidos.\nPor eso es una anemia central/arregenerativa.\n\n🔥 TRAMPA DE EXAMEN\nNo basta con ver:\nMicrocitosis → talasemia o ferropenia.\nHay que integrar:\nMicrocitosis\n\nHipocromía\n\nADE ↑\n\nReticulocitos ↓\n\nHb reticulocitaria ↓\n↓\nFERROPENIA.\n\nRegla de oro para residencia\nMicrocítica + hipocrómica + ADE alto + reticulocitos bajos = piensa primero en ferropenia.\nMientras que:\nMicrocitosis marcada + eritrocitos relativamente numerosos + ADE normal = piensa en talasemia.\n\nPerlas de examen\n✅ Reticulocitos bajos → anemia central/arregenerativa.\n✅ Reticulocitos altos → respuesta medular, típica de pérdidas o hemólisis.\n✅ ADE elevado favorece ferropenia frente al rasgo talasémico.\n✅ La hemoglobina reticulocitaria baja indica disponibilidad insuficiente de hierro para la eritropoyesis.\n✅ La trombocitosis reactiva puede acompañar a la anemia ferropénica.\n📚 Referencias\n• Hoffbrand AV, et al. Hoffbrand's Essential Haematology.\n• Kaushansky K, et al. Williams Hematology.\n• Harrison. Principios de Medicina Interna.\n• Manual AMIR – Hematología."
  },
  {
    "id": "dr-q-eval1-50",
    "examArea": "Endocrinología / Hiperparatiroidismo secundario en ERC",
    "topic": "Endocrinología / Hiperparatiroidismo secundario en ERC",
    "difficulty": "hard",
    "tags": [
      "dr-q",
      "evaluacion-1",
      "pro"
    ],
    "statement": "¿Cuál de las siguientes alteraciones NO es característica del hiperparatiroidismo secundario de los pacientes con insuficiencia renal?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Hiperfosfaturia."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Calcificaciones vasculares."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Reabsorción subperióstica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Producto fosfocálcico elevado."
      }
    ],
    "correctOptionId": "A",
    "explanation": "En la insuficiencia renal crónica avanzada, el riñón pierde capacidad para excretar fósforo, por lo que lo característico es la retención de fosfato/hiperfosfatemia, no la hiperfosfaturia. La hiperfosfaturia puede aparecer inicialmente como mecanismo compensatorio mediado por PTH y FGF23, pero en la ERC avanzada predomina la incapacidad renal para eliminar fósforo.\n\nLo que debes saber para el examen\nLa secuencia clásica es:\nERC\n↓\n↓ filtrado glomerular\n↓\nRetención de fósforo\n\n↓ producción de calcitriol\n↓\n↓ calcio sérico\n↓\n↑ PTH\n↓\nHiperparatiroidismo secundario\nEntre sus manifestaciones encontramos:\n• ↑ PTH\n• Alteraciones calcio-fósforo.\n• Osteodistrofia renal.\n• Reabsorción subperióstica.\n• Calcificaciones vasculares.\n• Elevación del producto calcio-fósforo en determinados contextos.\nTema: Trastorno mineral óseo asociado a enfermedad renal crónica.",
    "keyPoints": [],
    "theoryContent": "En la insuficiencia renal crónica avanzada, el riñón pierde capacidad para excretar fósforo, por lo que lo característico es la retención de fosfato/hiperfosfatemia, no la hiperfosfaturia. La hiperfosfaturia puede aparecer inicialmente como mecanismo compensatorio mediado por PTH y FGF23, pero en la ERC avanzada predomina la incapacidad renal para eliminar fósforo.\n\nLo que debes saber para el examen\nLa secuencia clásica es:\nERC\n↓\n↓ filtrado glomerular\n↓\nRetención de fósforo\n\n↓ producción de calcitriol\n↓\n↓ calcio sérico\n↓\n↑ PTH\n↓\nHiperparatiroidismo secundario\nEntre sus manifestaciones encontramos:\n• ↑ PTH\n• Alteraciones calcio-fósforo.\n• Osteodistrofia renal.\n• Reabsorción subperióstica.\n• Calcificaciones vasculares.\n• Elevación del producto calcio-fósforo en determinados contextos.\nTema: Trastorno mineral óseo asociado a enfermedad renal crónica.\n\nEXPLICACIÓN DEL PROFE BY DR Q\n\nEsta pregunta se resuelve identificando primero qué le ocurre al fósforo en la insuficiencia renal.\nPASO 1. ¿Qué ocurre cuando disminuye el filtrado glomerular?\nEl riñón pierde capacidad para eliminar fósforo.\n↓\nRetención de fósforo.\nPor tanto, en la ERC avanzada:\nFósforo ↑\nNo:\n❌ Hiperfosfaturia.\nPor eso la opción A es la que NO corresponde al cuadro establecido.\n\nPASO 2. ¿Por qué aumenta la PTH?\nLa retención de fósforo y la disminución de calcitriol favorecen:\n↓\n↓ calcio\n↓\n↑ PTH\n↓\nHiperparatiroidismo secundario.\nLa PTH intenta mantener el calcio sérico mediante:\n• ↑ resorción ósea.\n• ↑ reabsorción renal de calcio.\n• ↑ activación de vitamina D, aunque esta capacidad está reducida en la ERC.\n\nPASO 3. ¿Qué pasa con el hueso?\nEl exceso crónico de PTH produce aumento del remodelado óseo.\nPuede aparecer:\nReabsorción subperióstica.\nPor eso la opción C sí es característica.\n\nPASO 4. ¿Y las calcificaciones vasculares?\nLa alteración persistente del metabolismo:\nCalcio + fósforo\npuede favorecer:\nCalcificación vascular y de tejidos blandos.\nPor eso la opción B también es correcta.\n\n🔥 TRAMPA DE EXAMEN\nLa palabra que puede confundirte es:\n\"Hiperfosfaturia\".\nLa PTH sí aumenta la excreción renal de fósforo cuando el riñón conserva suficiente función.\nPero cuando hablamos del hiperparatiroidismo secundario de la ERC avanzada, el problema fundamental es:\nRETENCIÓN DE FÓSFORO.\nPor tanto:\nERC → hiperfosfatemia, no hiperfosfaturia.\n\nRegla de oro para residencia\nERC\n↓\n↓ eliminación de fósforo\n↓\n↑ fósforo + ↓ calcitriol\n↓\n↓ calcio\n↓\n↑ PTH → hiperparatiroidismo secundario\n\nPerlas de examen\n✅ ERC avanzada → hiperfosfatemia.\n✅ ↓ calcitriol contribuye a la hipocalcemia.\n✅ ↑ PTH produce osteodistrofia renal.\n✅ La reabsorción subperióstica es una manifestación de hiperparatiroidismo.\n✅ Las alteraciones calcio-fósforo favorecen calcificaciones vasculares.\n📚 Referencias\n• Kidney Disease: Improving Global Outcomes (KDIGO). 2017 Clinical Practice Guideline Update for the Diagnosis, Evaluation, Prevention, and Treatment of Chronic Kidney Disease–Mineral and Bone Disorder (CKD-MBD). Kidney International Supplements. 2017.\n• Harrison. Principios de Medicina Interna.\n• Williams Textbook of Endocrinology.\n• Manual AMIR – Endocrinología."
  }
];
