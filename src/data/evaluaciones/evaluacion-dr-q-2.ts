import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Segunda Evaluación — Reto del Dr. Q.
 * Fuente: documento oficial revisado por el Dr. Q ("PREGUNTAS SEGUNDA EVALUACION").
 * El enunciado, las opciones, la respuesta correcta y las explicaciones deben
 * coincidir de forma literal con ese documento.
 */
export const DR_Q_EVAL_2_QUESTIONS: TrainingQuestion[] = [
  {
    "id": "dr-q-eval2-1",
    "examArea": "Nefrología / Fisiología renal (alta)",
    "topic": "Nefrología / Fisiología renal (alta)",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "La mayor parte del agua y de los solutos ultrafiltrados en el glomérulo son reabsorbidos a lo largo del túbulo renal. ¿En qué segmento de la nefrona se produce principalmente la reabsorción de ambos?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Asa de Henle, porción descendente y túbulo contorneado distal."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Asa de Henle, porción ascendente y túbulo contorneado proximal."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Túbulo contorneado proximal para ambos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Túbulo colector y asa de Henle, porción descendente."
      },
    ],
    "correctOptionId": "C",
    "explanation": "El túbulo contorneado proximal (TCP) es el principal segmento de reabsorción renal. Aproximadamente 65-70% del agua y del Na⁺ filtrados se reabsorben aquí, junto con la mayor parte de la glucosa, aminoácidos, bicarbonato y otros solutos.\nLo que debes saber para el examen\nEl TCP reabsorbe masivamente:\nNa⁺: ~65-70%.\nAgua: ~65-70%.\nCl⁻: ~60-70%.\nHCO₃⁻: ~80-90%.\nGlucosa: prácticamente 100% en condiciones normales.\nAminoácidos: prácticamente 100%.\nFosfato: una proporción importante.\nLa característica fundamental es:\nEl túbulo proximal realiza la mayor parte de la reabsorción del filtrado glomerular.\nTema: Fisiología tubular y manejo renal del agua y los electrolitos.",
    "keyPoints": [],
    "theoryContent": "El túbulo contorneado proximal (TCP) es el principal segmento de reabsorción renal. Aproximadamente 65-70% del agua y del Na⁺ filtrados se reabsorben aquí, junto con la mayor parte de la glucosa, aminoácidos, bicarbonato y otros solutos.\nLo que debes saber para el examen\nEl TCP reabsorbe masivamente:\nNa⁺: ~65-70%.\nAgua: ~65-70%.\nCl⁻: ~60-70%.\nHCO₃⁻: ~80-90%.\nGlucosa: prácticamente 100% en condiciones normales.\nAminoácidos: prácticamente 100%.\nFosfato: una proporción importante.\nLa característica fundamental es:\nEl túbulo proximal realiza la mayor parte de la reabsorción del filtrado glomerular.\nTema: Fisiología tubular y manejo renal del agua y los electrolitos.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nEsta pregunta se resuelve con una idea fundamental:\nEl túbulo proximal es el gran recuperador del riñón.\nEl glomérulo filtra enormes cantidades de agua y solutos continuamente.\nPero el organismo no puede perder todo ese filtrado por la orina.\nPor eso, inmediatamente después de la filtración:\nFiltrado glomerular\n↓\nTúbulo proximal\n↓\nReabsorción masiva\n\n¿Cuánta agua se reabsorbe aquí?\nAproximadamente:\n65-70% del agua filtrada.\nY ocurre principalmente por reabsorción de solutos, especialmente sodio, seguida de agua por mecanismos osmóticos.\nPor eso podemos pensar:\nNa⁺ se reabsorbe → el agua lo sigue.\n\n¿Y los solutos?\nTambién se produce una reabsorción masiva.\nEl TCP recupera prácticamente toda la:\nGlucosa.\nMayor parte de los aminoácidos.\nGran parte del bicarbonato.\nUna proporción importante de sodio, cloro, potasio y fosfato.\nPor eso la opción C es la mejor respuesta.\n\n¿Qué hacen entonces las otras partes de la nefrona?\nAsa de Henle\nNo es el principal sitio de reabsorción global.\nTiene una función fundamental en la:\nGeneración del gradiente osmótico medular.\nLa rama descendente es muy permeable al agua, mientras que la rama ascendente gruesa reabsorbe Na⁺, K⁺ y Cl⁻ y es prácticamente impermeable al agua.\nTúbulo distal\nRealiza ajustes más finos del contenido de electrolitos.\nTúbulo colector\nParticipa en la regulación final del:\nAgua.\nSodio.\nPotasio.\nEquilibrio ácido-base.\nEspecialmente bajo control hormonal.\n\n🔥 TRAMPA DE EXAMEN\nNo confundas:\n\"Mayor parte de la reabsorción\"\ncon:\n\"Segmento más importante para concentrar la orina\".\nEl TCP es el principal sitio de reabsorción masiva, mientras que el asa de Henle y el túbulo colector tienen papeles esenciales en la capacidad de concentración y regulación fina de la orina.\n\nRegla de oro para residencia\nTÚBULO PROXIMAL = REABSORCIÓN MASIVA.\nAgua + Na⁺ + glucosa + aminoácidos + HCO₃⁻ → TCP.\n\nPerlas de examen\n✅ El TCP reabsorbe aproximadamente 65-70% del filtrado.\n✅ La reabsorción de agua en el TCP es predominantemente isoosmótica.\n✅ En condiciones normales, la glucosa y los aminoácidos filtrados se reabsorben prácticamente por completo en el TCP.\n✅ El asa de Henle es fundamental para establecer el gradiente osmótico medular.\n✅ El túbulo colector realiza ajustes finales regulados principalmente por ADH y aldosterona.\n📚 Referencias\nBoron WF, Boulpaep EL. Medical Physiology.\nHall JE. Guyton and Hall. Tratado de Fisiología Médica.\nKoeppen BM, Stanton BA. Renal Physiology.\nManual AMIR – Nefrología."
  },
  {
    "id": "dr-q-eval2-2",
    "examArea": "Nefrología / Fisiología renal – ADH (alta)",
    "topic": "Nefrología / Fisiología renal – ADH (alta)",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Una de las siguientes afirmaciones en relación con la hormona antidiurética (ADH) es correcta. ¿Cuál de las siguientes es la opción correcta?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "La ADH favorece la reabsorción activa de agua en el asa de Henle."
      },
      {
        "id": "B",
        "label": "B",
        "text": "La presencia de ADH permite la reabsorción de agua libre, diluyendo la orina."
      },
      {
        "id": "C",
        "label": "C",
        "text": "La presencia de ADH concentra la orina al disminuir la filtración glomerular."
      },
      {
        "id": "D",
        "label": "D",
        "text": "La presencia de ADH aumenta la permeabilidad al agua del túbulo colector, concentrando la orina."
      },
    ],
    "correctOptionId": "D",
    "explanation": "La ADH (vasopresina) actúa principalmente sobre los receptores V2 de las células principales del túbulo colector, promoviendo la inserción de acuaporinas-2 en la membrana apical. Esto aumenta la permeabilidad al agua y permite su reabsorción hacia el intersticio medular, produciendo una orina más concentrada.\nLo que debes saber para el examen\nADH = retención de agua\n↑ ADH\n↓\n↑ AQP2 en túbulo colector\n↓\n↑ permeabilidad al agua\n↓\n↑ reabsorción de agua\n↓\n↓ volumen urinario + ↑ concentración de la orina\nTema: Regulación renal del agua y concentración urinaria.",
    "keyPoints": [],
    "theoryContent": "La ADH (vasopresina) actúa principalmente sobre los receptores V2 de las células principales del túbulo colector, promoviendo la inserción de acuaporinas-2 en la membrana apical. Esto aumenta la permeabilidad al agua y permite su reabsorción hacia el intersticio medular, produciendo una orina más concentrada.\nLo que debes saber para el examen\nADH = retención de agua\n↑ ADH\n↓\n↑ AQP2 en túbulo colector\n↓\n↑ permeabilidad al agua\n↓\n↑ reabsorción de agua\n↓\n↓ volumen urinario + ↑ concentración de la orina\nTema: Regulación renal del agua y concentración urinaria.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nEsta pregunta se resuelve identificando dónde actúa la ADH y qué hace con el agua.\nPASO 1. ¿Cuál es la función principal de la ADH?\nLa ADH aparece cuando el organismo necesita:\nConservar agua.\nPor tanto:\nADH → ahorra agua.\n\nPASO 2. ¿Dónde actúa?\nSu acción fundamental en el riñón ocurre en:\nTÚBULO COLECTOR.\nLa ADH se une al:\nReceptor V2\nde las células principales.\n↓\nActiva la vía de:\nAMPc → PKA\n↓\nFavorece la inserción de:\nAcuaporinas-2\nen la membrana luminal.\n↓\nEl agua puede entrar a la célula y posteriormente pasar hacia el intersticio.\n\nPASO 3. ¿Qué ocurre con la orina?\nSi se reabsorbe más agua:\n↓ agua en la orina\n↓\nOrina más concentrada.\nPor eso la opción D es correcta.\n\n¿Por qué las otras son incorrectas?\nA. Reabsorción activa de agua en el asa de Henle ❌\nEl agua no se reabsorbe activamente.\nAdemás, la acción fundamental de la ADH sobre la permeabilidad al agua ocurre en el túbulo colector, no en el asa de Henle.\nB. Reabsorción de agua libre diluyendo la orina ❌\nEs exactamente lo contrario.\nSi aumenta la ADH:\nSe conserva agua → la orina se concentra.\nC. Concentración de la orina disminuyendo la filtración glomerular ❌\nLa ADH no concentra la orina mediante una disminución primaria de la filtración glomerular.\nSu mecanismo fundamental es:\n↑ permeabilidad al agua del túbulo colector.\n\n🔥 TRAMPA DE EXAMEN\nCuando veas:\nADH\npiensa inmediatamente:\nV2 → AQP2 → túbulo colector → reabsorción de agua → orina concentrada.\n\nRegla de oro para residencia\nADH = AGUA\nADH ↑ → AQP2 ↑ → reabsorción de agua ↑ → orina concentrada.\nMientras que:\nADH ↓ → reabsorción de agua ↓ → orina diluida.\n\nPerlas de examen\n✅ La ADH actúa principalmente mediante receptores V2 en el túbulo colector.\n✅ La acuaporina-2 es la principal acuaporina regulada por ADH.\n✅ La ADH aumenta la permeabilidad al agua del túbulo colector.\n✅ ADH alta → orina concentrada y menor volumen urinario.\n✅ ADH baja → orina diluida y mayor volumen urinario.\n📚 Referencias\nHall JE. Guyton y Hall. Tratado de Fisiología Médica.\nBoron WF, Boulpaep EL. Medical Physiology.\nManual AMIR – Nefrología."
  },
  {
    "id": "dr-q-eval2-3",
    "examArea": "Nefrología / Diuréticos y electrolitos (alta)",
    "topic": "Nefrología / Diuréticos y electrolitos (alta)",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Cuando un paciente bajo tratamiento diurético con tiazidas o furosemida incumple la dieta y consume más sal de la prescrita, ¿cuál de los siguientes resultados analíticos sería el más esperable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Mayor hiperpotasemia."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Mayor hipopotasemia."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Mayor hipernatremia."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Mayor hiponatremia."
      },
    ],
    "correctOptionId": "B",
    "explanation": "Los diuréticos tiazídicos y de asa aumentan la llegada de sodio al túbulo distal, favoreciendo allí el intercambio de sodio por potasio y aumentando la pérdida urinaria de K⁺. Una mayor ingesta de sal puede favorecer una mayor carga de sodio distal y, en este contexto, potenciar la kaliuresis, aumentando el riesgo de hipopotasemia.\nLo que debes saber para el examen\nDiuréticos → pérdida de potasio\nTiazidas y diuréticos de asa\n→ ↑ natriuresis→ ↑ llegada de Na⁺ al nefrón distal→ ↑ secreción de K⁺→ hipopotasemia\nLa hipopotasemia es especialmente importante porque puede favorecer:\nDebilidad muscular.\nCalambres.\nArritmias cardíacas.\nTema: Alteraciones hidroelectrolíticas secundarias a diuréticos.",
    "keyPoints": [],
    "theoryContent": "Los diuréticos tiazídicos y de asa aumentan la llegada de sodio al túbulo distal, favoreciendo allí el intercambio de sodio por potasio y aumentando la pérdida urinaria de K⁺. Una mayor ingesta de sal puede favorecer una mayor carga de sodio distal y, en este contexto, potenciar la kaliuresis, aumentando el riesgo de hipopotasemia.\nLo que debes saber para el examen\nDiuréticos → pérdida de potasio\nTiazidas y diuréticos de asa\n→ ↑ natriuresis→ ↑ llegada de Na⁺ al nefrón distal→ ↑ secreción de K⁺→ hipopotasemia\nLa hipopotasemia es especialmente importante porque puede favorecer:\nDebilidad muscular.\nCalambres.\nArritmias cardíacas.\nTema: Alteraciones hidroelectrolíticas secundarias a diuréticos.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nLa pregunta quiere que relaciones:\nDiurético + mayor consumo de sal → ¿qué electrolito se pierde más?\nLa clave está en el potasio.\nPASO 1. ¿Qué hacen las tiazidas y la furosemida?\nAmbos aumentan la eliminación renal de sodio y agua.\nPero además:\n↑ Na⁺ llega al nefrón distal\n↓\nEl túbulo distal/colector reabsorbe Na⁺\n↓\nAumenta la secreción de:\nK⁺\n↓\nHipopotasemia.\n\nPASO 2. ¿Qué ocurre si el paciente consume más sal?\nUna mayor carga de sodio puede aumentar la disponibilidad de Na⁺ para su reabsorción distal.\nEsto favorece:\nMayor secreción de K⁺.\nPor eso la alteración que debemos vigilar es:\n↓ K⁺ → hipopotasemia.\n\n¿Por qué las otras opciones no son la mejor respuesta?\nA. Mayor hiperpotasemia ❌\nEs lo contrario de lo esperado con tiazidas y furosemida.\nLos diuréticos que favorecen hiperpotasemia son principalmente los ahorradores de potasio, como:\nEspironolactona.\nEplerenona.\nAmilorida.\nC. Mayor hipernatremia ❌\nEl problema característico de estos diuréticos no es provocar hipernatremia por aumento del sodio corporal.\nD. Mayor hiponatremia ❌\nLas tiazidas pueden producir hiponatremia, especialmente en determinados pacientes, pero la pregunta está enfocando el efecto sobre el potasio asociado a la carga de sodio.\n\n🔥 TRAMPA DE EXAMEN\nQuédate con esta relación:\nMás Na⁺ distal → más K⁺ perdido.\nPor eso:\nDiurético + carga de Na⁺ → piensa en hipopotasemia.\n\nRegla de oro para residencia\nTiazidas y furosemida → HIPOPOTASEMIA.\nMientras que:\nEspironolactona/amilorida → HIPERPOTASEMIA.\n\nPerlas de examen\n✅ Furosemida: diurético de asa → potente natriuresis → pérdida de K⁺.\n✅ Tiazidas: bloquean el cotransportador Na⁺/Cl⁻ en túbulo distal → pueden producir hipopotasemia.\n✅ La hipopotasemia aumenta el riesgo de arritmias.\n✅ La ingesta excesiva de sal también puede reducir el efecto antihipertensivo de los diuréticos.\n📚 Referencias\nHall JE. Guyton y Hall. Tratado de Fisiología Médica.\nBoron WF, Boulpaep EL. Medical Physiology.\nManual AMIR – Nefrología."
  },
  {
    "id": "dr-q-eval2-4",
    "examArea": "Hematología / Anemia hemolítica",
    "topic": "Hematología / Anemia hemolítica",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un hombre de 34 años consulta por astenia, ictericia leve y orina oscura de varios días de evolución. En el hemograma presenta anemia con reticulocitosis; en la bioquímica se observa aumento de la LDH y de la bilirrubina indirecta, con disminución marcada de la haptoglobina. Además, presenta esplenomegalia y la prueba de antiglobulina directa (Coombs directo) resulta positiva. ¿Cuál de las siguientes opciones explica mejor el mecanismo de la anemia de este paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Destrucción eritrocitaria intravascular secundaria a fragmentación mecánica de los hematíes."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Destrucción eritrocitaria extravascular mediada por anticuerpos y eliminación principalmente esplénica."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Disminución de la producción eritroide secundaria a déficit de hierro y ausencia de respuesta reticulocitaria."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Destrucción eritrocitaria intravascular causada por una alteración hereditaria de la membrana del hematíe."
      },
    ],
    "correctOptionId": "B",
    "explanation": "El paciente tiene datos claros de hemólisis: ↑ LDH, ↑ bilirrubina indirecta, ↓ haptoglobina y ↑ reticulocitos. La positividad del Coombs directo orienta hacia una anemia hemolítica inmunológica, mientras que la esplenomegalia favorece el mecanismo de hemólisis extravascular, en el que los eritrocitos recubiertos por anticuerpos son reconocidos y eliminados principalmente por los macrófagos del bazo.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nCuando sospeches anemia hemolítica, primero confirma:\nHemólisis =\n↑ LDH + ↑ bilirrubina indirecta + ↓ haptoglobina + ↑ reticulocitos\nDespués pregunta:\n¿Dónde se destruye el hematíe?\nINTRAVASCULAR\nHemoglobinemia.\nHemoglobinuria.\nHaptoglobina muy disminuida.\nEsquistocitos en algunos mecanismos.\nEXTRAVASCULAR\nPrincipalmente bazo.\nEsplenomegalia.\nIctericia.\nPuede haber esferocitos.\nY finalmente:\n¿Es inmunológica?\n👉 Coombs directo positivo → pensar en hemólisis inmunológica.",
    "keyPoints": [],
    "theoryContent": "El paciente tiene datos claros de hemólisis: ↑ LDH, ↑ bilirrubina indirecta, ↓ haptoglobina y ↑ reticulocitos. La positividad del Coombs directo orienta hacia una anemia hemolítica inmunológica, mientras que la esplenomegalia favorece el mecanismo de hemólisis extravascular, en el que los eritrocitos recubiertos por anticuerpos son reconocidos y eliminados principalmente por los macrófagos del bazo.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nCuando sospeches anemia hemolítica, primero confirma:\nHemólisis =\n↑ LDH + ↑ bilirrubina indirecta + ↓ haptoglobina + ↑ reticulocitos\nDespués pregunta:\n¿Dónde se destruye el hematíe?\nINTRAVASCULAR\nHemoglobinemia.\nHemoglobinuria.\nHaptoglobina muy disminuida.\nEsquistocitos en algunos mecanismos.\nEXTRAVASCULAR\nPrincipalmente bazo.\nEsplenomegalia.\nIctericia.\nPuede haber esferocitos.\nY finalmente:\n¿Es inmunológica?\n👉 Coombs directo positivo → pensar en hemólisis inmunológica.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nPASO 1. Confirma que realmente existe hemólisis\nEl caso nos da cuatro pistas:\nLDH ↑\n→ destrucción celular.\nBilirrubina indirecta ↑\n→ degradación de hemoglobina.\nHaptoglobina ↓\n→ está siendo consumida al unirse a la hemoglobina libre.\nReticulocitos ↑\n→ la médula intenta compensar la destrucción periférica.\nPor tanto:\nSí hay hemólisis.\n\nPASO 2. Determina dónde ocurre\nAquí aparece un dato fundamental:\nEsplenomegalia.\nEl bazo es un órgano fundamental para la hemólisis extravascular.\nLos eritrocitos marcados por inmunoglobulinas son reconocidos por los macrófagos esplénicos y posteriormente destruidos.\nPor eso:\nEsplenomegalia + hemólisis → piensa en hemólisis extravascular.\n\nPASO 3. Determina si es inmunológica\nEl dato definitivo es:\nCoombs directo positivo.\nEsto significa que existen inmunoglobulinas y/o complemento unidos a la superficie del eritrocito.\nPor tanto:\nCoombs positivo → anemia hemolítica inmunológica.\n\n¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. Hemólisis intravascular por fragmentación mecánica ❌\nEsto orientaría hacia una hemólisis microangiopática o mecánica, donde podemos encontrar esquistocitos.\nEjemplos clásicos:\nPTT.\nSHU.\nCID.\nPrótesis valvulares mecánicas.\nNo es el patrón descrito.\nC. Disminución de producción eritroide ❌\nEl paciente tiene:\nRETICULOCITOSIS.\nEso indica que la médula está respondiendo a una pérdida periférica de hematíes.\nD. Alteración hereditaria de membrana ❌\nUna alteración de membrana como la esferocitosis hereditaria puede producir hemólisis extravascular, pero habitualmente el Coombs directo es negativo.\n\n🔥 TRAMPA DE EXAMEN\nNo cometas este error:\nCoombs positivo = automáticamente hemólisis intravascular.\n❌ Incorrecto.\nEl Coombs te dice principalmente:\n\"¿Es inmunológica?\"\nMientras que otros datos te ayudan a determinar:\n\"¿Dónde se destruye?\"\nBazo → extravascular.\nVasos → intravascular.\n\n🧠 REGLA DE ORO\nHemólisis → primero confirma.\nLDH ↑ + BI ↑ + haptoglobina ↓ + reticulocitos ↑\nDespués localiza.\nBazo → extravascular.\nDespués identifica la causa.\nCoombs + → inmunológica.\nEn este caso:\nHemólisis + esplenomegalia + Coombs positivo = anemia hemolítica inmunológica extravascular.\n\n📚 REFERENCIAS\nFuente base: infografía proporcionada, Consejos del Doctor Q #16 – Algoritmo de anemia hemolítica, Método Q.\nManual AMIR – Hematología: anemias hemolíticas.\nHoffbrand AV, Moss PAH. Hoffbrand's Essential Haematology.\nKaushansky K, et al. Williams Hematology."
  },
  {
    "id": "dr-q-eval2-5",
    "examArea": "Hematología / Anemia hemolítica",
    "topic": "Hematología / Anemia hemolítica",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Una mujer de 29 años consulta por episodios recurrentes de orina oscura, astenia y disnea de esfuerzo. En el hemograma presenta anemia con reticulocitosis; la bioquímica muestra aumento de la LDH, bilirrubina indirecta elevada y haptoglobina marcadamente disminuida. La prueba de antiglobulina directa (Coombs directo) es negativa y no presenta esplenomegalia. ¿Cuál de los siguientes hallazgos orientaría con mayor fuerza hacia una hemólisis intravascular en esta paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Esferocitosis en sangre periférica."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hemoglobinuria y hemosiderinuria."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Esplenomegalia con hiperbilirrubinemia indirecta."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Aumento de la destrucción eritrocitaria por macrófagos esplénicos."
      },
    ],
    "correctOptionId": "B",
    "explanation": "La hemólisis intravascular ocurre directamente dentro de la circulación y libera hemoglobina al plasma. Cuando la capacidad de unión de la haptoglobina se supera, aparece hemoglobinemia y hemoglobinuria; posteriormente puede aparecer hemosiderinuria.\nEl cuadro de la paciente —hemólisis, Coombs negativo, ausencia de esplenomegalia y orina oscura— obliga a pensar en causas de hemólisis intravascular, entre ellas la hemoglobinuria paroxística nocturna (HPN).\n\nLO QUE DEBES SABER PARA EL EXAMEN\n🔴 HEMÓLISIS INTRAVASCULAR\nEl eritrocito se destruye dentro de los vasos:\nEritrocito → hemoglobina libre → plasma → orina\nHallazgos característicos:\n↓↓↓ Haptoglobina\n↑ LDH\n↑ Bilirrubina indirecta\nHemoglobinemia\nHemoglobinuria\nHemosiderinuria\n🔵 HEMÓLISIS EXTRAVASCULAR\nEl eritrocito es eliminado principalmente por macrófagos del:\nBazo\nPuede aparecer:\nEsplenomegalia.\nIctericia.\nEsferocitos, dependiendo de la causa.",
    "keyPoints": [],
    "theoryContent": "La hemólisis intravascular ocurre directamente dentro de la circulación y libera hemoglobina al plasma. Cuando la capacidad de unión de la haptoglobina se supera, aparece hemoglobinemia y hemoglobinuria; posteriormente puede aparecer hemosiderinuria.\nEl cuadro de la paciente —hemólisis, Coombs negativo, ausencia de esplenomegalia y orina oscura— obliga a pensar en causas de hemólisis intravascular, entre ellas la hemoglobinuria paroxística nocturna (HPN).\n\nLO QUE DEBES SABER PARA EL EXAMEN\n🔴 HEMÓLISIS INTRAVASCULAR\nEl eritrocito se destruye dentro de los vasos:\nEritrocito → hemoglobina libre → plasma → orina\nHallazgos característicos:\n↓↓↓ Haptoglobina\n↑ LDH\n↑ Bilirrubina indirecta\nHemoglobinemia\nHemoglobinuria\nHemosiderinuria\n🔵 HEMÓLISIS EXTRAVASCULAR\nEl eritrocito es eliminado principalmente por macrófagos del:\nBazo\nPuede aparecer:\nEsplenomegalia.\nIctericia.\nEsferocitos, dependiendo de la causa.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nPASO 1. Ya sabemos que hay hemólisis\nLa combinación:\nLDH ↑ + bilirrubina indirecta ↑ + haptoglobina ↓ + reticulocitos ↑\nnos confirma destrucción periférica de hematíes.\nPero ahora viene la segunda pregunta:\n¿Dónde se están destruyendo?\n\nPASO 2. Busca pistas de hemólisis intravascular\nLa pista más importante es:\nORINA OSCURA\nPero ojo:\nOrina oscura ≠ siempre hematuria.\nEn una hemólisis intravascular puede existir:\nHemoglobinuria\nLa hemoglobina libre pasa al filtrado glomerular y aparece en la orina.\nCon el tiempo también puede aparecer:\nHemosiderinuria\nEsto es particularmente característico de hemólisis intravascular crónica.\n\nPASO 3. ¿Por qué la haptoglobina está tan baja?\nLa haptoglobina se une a la hemoglobina libre.\nCuando existe hemólisis intravascular:\nEritrocito se rompe\n↓\nHb libre en plasma\n↓\nHb + haptoglobina\n↓\nEl complejo es retirado de la circulación.\nPor eso:\nHemólisis intravascular → haptoglobina muy disminuida.\n\n🧠 ¿Y qué enfermedad te debe venir a la cabeza?\nEn una persona joven con:\nHemólisis intravascular.\nCoombs negativo.\nEpisodios de orina oscura.\nSin esplenomegalia.\n👉 Piensa en hemoglobinuria paroxística nocturna (HPN).\nLa HPN es un trastorno adquirido de la célula madre hematopoyética que produce hematíes especialmente susceptibles a la acción del complemento.\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. Esferocitosis ❌\nLos esferocitos orientan hacia determinados procesos de hemólisis extravascular, especialmente esferocitosis hereditaria y anemia hemolítica autoinmune caliente.\nC. Esplenomegalia ❌\nLa esplenomegalia apunta más hacia:\nHemólisis extravascular.\nEl bazo actúa como órgano principal de destrucción.\nD. Macrófagos esplénicos ❌\nEsto describe precisamente el mecanismo de:\nHemólisis extravascular.\n\n🔥 TRAMPA DE EXAMEN\nSi ves:\nHemólisis + esplenomegalia → EXTRAVASCULAR\nSi ves:\nHemólisis + hemoglobinuria → INTRAVASCULAR\nY si además aparece:\nCoombs negativo + hemólisis intravascular en paciente joven → piensa en HPN.\n\n🎯 ALGORITMO QUE ESTAMOS CONSTRUYENDO\n1️⃣ ¿Hay hemólisis?\nLDH ↑ + BI ↑ + haptoglobina ↓ + reticulocitos ↑\n↓\n2️⃣ ¿Dónde?\nIntravascular → hemoglobinuria / hemosiderinuria\nExtravascular → bazo / esplenomegalia\n↓\n3️⃣ ¿Es inmunológica?\nCoombs positivo → inmunológica\nCoombs negativo → buscar otras causas\nEse es exactamente el razonamiento que quiero que te quede de estas preguntas, no memorizar enfermedades aisladas.\n📚 REFERENCIAS\nFuente base: infografía proporcionada, Consejos del Doctor Q #16 – Algoritmo de anemia hemolítica, Método Q.\nManual AMIR – Hematología: anemias hemolíticas.\nHoffbrand AV, Moss PAH. Hoffbrand's Essential Haematology.\nKaushansky K, et al. Williams Hematology."
  },
  {
    "id": "dr-q-eval2-6",
    "examArea": "Hematología / Talasemias",
    "topic": "Hematología / Talasemias",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Una mujer de 24 años consulta por astenia leve. En el hemograma presenta hemoglobina de 10,8 g/dL, VCM de 64 fL y una cifra de eritrocitos de 5,8 millones/μL. La ferritina y el hierro sérico son normales. En el frotis de sangre periférica se observan microcitosis e hipocromía. ¿Cuál de las siguientes características orienta con mayor probabilidad hacia un rasgo talasémico?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Microcitosis intensa asociada a una disminución marcada del número de eritrocitos."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Microcitosis desproporcionada respecto al grado de anemia con número de eritrocitos conservado o elevado."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Elevación marcada de la amplitud de distribución eritrocitaria asociada a ferropenia."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Disminución del VCM secundaria exclusivamente a una reducción de la síntesis de hierro."
      },
    ],
    "correctOptionId": "B",
    "explanation": "La clave está en que el paciente presenta una microcitosis muy marcada (VCM 64 fL), pero la anemia es relativamente leve y, sobre todo, tiene un número de eritrocitos elevado.\nEsto orienta hacia rasgo talasémico.\nEn la ferropenia, en cambio, suele existir una disminución más evidente de la producción eritrocitaria.\n\nLO QUE DEBES SABER PARA EL EXAMEN\n🔴 Talasemia menor\nPiensa:\n\"Muchos hematíes, pero pequeños.\"\nCaracterísticas:\nAnemia generalmente leve.\nVCM muy bajo.\nEritrocitos normales o ↑.\nMicrocitosis desproporcionada respecto a la anemia.\nHierro y ferritina generalmente normales.\n🔵 Ferropenia\nPiensa:\n\"Pocos hematíes y pequeños.\"\nHb ↓\nVCM ↓\nHierro ↓\nFerritina ↓\nADE/RDW frecuentemente ↑",
    "keyPoints": [],
    "theoryContent": "La clave está en que el paciente presenta una microcitosis muy marcada (VCM 64 fL), pero la anemia es relativamente leve y, sobre todo, tiene un número de eritrocitos elevado.\nEsto orienta hacia rasgo talasémico.\nEn la ferropenia, en cambio, suele existir una disminución más evidente de la producción eritrocitaria.\n\nLO QUE DEBES SABER PARA EL EXAMEN\n🔴 Talasemia menor\nPiensa:\n\"Muchos hematíes, pero pequeños.\"\nCaracterísticas:\nAnemia generalmente leve.\nVCM muy bajo.\nEritrocitos normales o ↑.\nMicrocitosis desproporcionada respecto a la anemia.\nHierro y ferritina generalmente normales.\n🔵 Ferropenia\nPiensa:\n\"Pocos hematíes y pequeños.\"\nHb ↓\nVCM ↓\nHierro ↓\nFerritina ↓\nADE/RDW frecuentemente ↑\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nPASO 1. Mira primero el VCM\nTenemos:\nVCM = 64 fL\nEs una microcitosis importante.\nPero todavía no sabemos la causa.\nLas dos grandes posibilidades que debes tener en mente son:\nFerropenia ↔ Talasemia\n\nPASO 2. Mira la intensidad de la anemia\nHb:\n10,8 g/dL\nLa anemia es relativamente leve.\nSin embargo, el VCM está muy disminuido.\nEsto genera una discordancia:\nMicrocitosis muy marcada + anemia relativamente leve.\n🚨 Piensa en talasemia.\n\nPASO 3. Mira el número de eritrocitos\nAquí está la verdadera pista:\n5,8 millones/μL\nEstá conservado/elevado.\nEn el rasgo talasémico, la médula produce numerosos hematíes pequeños porque existe un defecto en la síntesis de cadenas de globina.\nPor eso:\nTalasemia → muchos hematíes pequeños.\n\n🔥 TRAMPA DE EXAMEN\nNo caigas en:\n\"VCM muy bajo = ferropenia.\"\n❌ No necesariamente.\nSi tienes:\nVCM MUY BAJO + Hb relativamente conservada + eritrocitos ↑\n👉 TALASEMIA MENOR.\n\n🧠 REGLA DE ORO\nTalasemia menor\nMicrocitosis desproporcionada + eritrocitos ↑ + hierro normal\nFerropenia\nMicrocitosis + eritrocitos ↓/normal + ferritina ↓\nY recuerda:\nLa talasemia no es un problema de falta de hierro; es un problema de síntesis de globina.\n\n📚 REFERENCIAS\nFuente base: infografía proporcionada, Consejos del Doctor Q #16 – Algoritmo de anemia hemolítica, Método Q, donde se incluyen las talasemias dentro de las causas de hemólisis por defectos intrínsecos de la hemoglobina.\nManual AMIR – Hematología: anemias hemolíticas y talasemias.\nHoffbrand AV, Moss PAH. Hoffbrand's Essential Haematology.\nKaushansky K, et al. Williams Hematology.\n\n\n¡De una, socio! 🔥 Seguimos con talasemias, pero ahora subimos un escalón: después de reconocer el rasgo talasémico, vamos a diferenciar rasgo beta-talasémico de anemia ferropénica mediante el estudio de hemoglobinas."
  },
  {
    "id": "dr-q-eval2-7",
    "examArea": "Hematología / Talasemias",
    "topic": "Hematología / Talasemias",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Una mujer de 23 años presenta anemia microcítica e hipocrómica persistente. La hemoglobina es de 11,1 g/dL, el VCM de 67 fL y el número de eritrocitos de 5,7 millones/μL. La ferritina es normal y no presenta datos de sangrado. Se realiza electroforesis de hemoglobina, que muestra un aumento de la fracción HbA₂. ¿Cuál de los siguientes diagnósticos es el más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Anemia ferropénica por disminución de los depósitos de hierro."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Rasgo beta-talasémico por disminución de la síntesis de cadenas beta de globina."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Anemia sideroblástica por alteración de la incorporación del hierro al grupo hemo."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Anemia de enfermedad crónica por alteración de la disponibilidad del hierro."
      },
    ],
    "correctOptionId": "B",
    "explanation": "La combinación de microcitosis marcada, anemia relativamente leve, número de eritrocitos elevado, ferritina normal y, especialmente, aumento de HbA₂ es característica del rasgo beta-talasémico.\n\nLO QUE DEBES SABER PARA EL EXAMEN\n🔴 Rasgo beta-talasémico\nPiensa en:\nMicrocitosis marcada+anemia leve+eritrocitos normales/↑+hierro normal+\nHbA₂ ↑\n👉 Beta-talasemia menor.\nLa clave fisiopatológica es una disminución de la síntesis de cadenas β de globina.",
    "keyPoints": [],
    "theoryContent": "La combinación de microcitosis marcada, anemia relativamente leve, número de eritrocitos elevado, ferritina normal y, especialmente, aumento de HbA₂ es característica del rasgo beta-talasémico.\n\nLO QUE DEBES SABER PARA EL EXAMEN\n🔴 Rasgo beta-talasémico\nPiensa en:\nMicrocitosis marcada+anemia leve+eritrocitos normales/↑+hierro normal+\nHbA₂ ↑\n👉 Beta-talasemia menor.\nLa clave fisiopatológica es una disminución de la síntesis de cadenas β de globina.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nPASO 1. ¿Qué tipo de anemia tenemos?\nEl VCM es:\n67 fL\nTenemos una microcitosis importante.\nPero la hemoglobina solamente está discretamente disminuida:\nHb 11,1 g/dL\nEsto ya nos genera la primera pista:\nMicrocitosis muy marcada con anemia relativamente leve.\n\nPASO 2. Mira el número de hematíes\nTenemos:\n5,7 millones/μL\nEstá elevado/conservado.\nEsto es muy característico del rasgo talasémico.\nTalasemia → muchos hematíes pequeños.\n\nPASO 3. Mira el hierro\nLa ferritina es:\nNORMAL\nPor tanto, no estamos ante la clásica ferropenia.\nEsto nos aleja de:\nAnemia ferropénica.\n\nPASO 4. Aparece LA PISTA\nLa electroforesis muestra:\nHbA₂ ↑\n🚨 Esta es la pista que prácticamente te entrega el diagnóstico.\nEn el rasgo beta-talasémico, la disminución de la síntesis de cadenas β altera la composición normal de las hemoglobinas y se observa típicamente:\n↑ HbA₂\n\n🧠 ¿POR QUÉ AUMENTA LA HbA₂?\nLa HbA₂ está formada por:\nα₂δ₂\nMientras que la HbA predominante está formada por:\nα₂β₂\nSi disminuye la disponibilidad de cadenas β, aumenta relativamente la utilización de cadenas δ, favoreciendo una mayor proporción de:\nHbA₂.\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. Anemia ferropénica ❌\nEsperaríamos:\nFerritina ↓.\nHierro ↓.\nMicrocitosis.\nGeneralmente ADE ↑.\nAquí la ferritina es normal y existe HbA₂ elevada.\nC. Anemia sideroblástica ❌\nPuede producir microcitosis, pero el mecanismo es diferente: existe alteración de la síntesis del grupo hemo y no es el patrón típico de aumento de HbA₂ descrito aquí.\nD. Anemia de enfermedad crónica ❌\nPuede ser normocítica o, en algunos casos, microcítica, pero no explica el patrón de microcitosis marcada + eritrocitosis relativa + HbA₂ elevada.\n\n🔥 TRAMPA DE EXAMEN\nCuando tengas:\nVCM MUY BAJO + Hb relativamente conservada + eritrocitos ↑\npiensa:\nTALASEMIA\nY si además te dan:\nHbA₂ ↑\nBETA-TALASEMIA MENOR.\n\n🎯 ALGORITMO QUE ESTAMOS CONSTRUYENDO\nMicrocitosis\n↓\n¿Hierro/ferritina bajos?\n→ Sí → Ferropenia\n→ No → sigue pensando en talasemia\n↓\nEritrocitos conservados/↑ + microcitosis desproporcionada\n↓\nElectroforesis: HbA₂ ↑\n↓\nRasgo beta-talasémico\n\n📚 REFERENCIAS\nManual AMIR – Hematología: talasemias.\nHoffbrand AV, Moss PAH. Hoffbrand's Essential Haematology.\nKaushansky K, et al. Williams Hematology."
  },
  {
    "id": "dr-q-eval2-8",
    "examArea": "Nefrología / Trastornos hidroelectrolíticos (alta)",
    "topic": "Nefrología / Trastornos hidroelectrolíticos (alta)",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente de 78 años con antecedentes de demencia avanzada es ingresado por deterioro progresivo del nivel de conciencia y escasa ingesta oral durante varios días; en la analítica presenta una concentración sérica de sodio de 158 mEq/L. ¿Cuál de las siguientes situaciones se asocia con mayor frecuencia al desarrollo de hipernatremia?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Bajo nivel de conciencia con incapacidad para acceder adecuadamente al agua."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Fallo cardíaco derecho con aumento de la presión venosa central."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Secreción inadecuada de ADH con retención de agua libre."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hiponatremia dilucional secundaria a exceso de ingesta hídrica."
      },
    ],
    "correctOptionId": "A",
    "explanation": "La hipernatremia refleja, en la mayoría de los casos, un déficit relativo de agua respecto al sodio corporal. Los pacientes con alteración del nivel de conciencia pueden no ser capaces de reconocer la sed, pedir agua o acceder a ella, por lo que tienen un riesgo elevado de desarrollar hipernatremia.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nLa hipernatremia aparece fundamentalmente cuando existe:\nPérdida de agua > pérdida de sodio\no cuando existe:\nAporte insuficiente de agua.\nSituaciones clásicas:\nAlteración del nivel de conciencia.\nIncapacidad para acceder al agua.\nPérdidas gastrointestinales importantes.\nPérdidas renales de agua.\nDiabetes insípida.\n🧠 Idea clave\nHipernatremia = problema de agua, no simplemente de sodio.",
    "keyPoints": [],
    "theoryContent": "La hipernatremia refleja, en la mayoría de los casos, un déficit relativo de agua respecto al sodio corporal. Los pacientes con alteración del nivel de conciencia pueden no ser capaces de reconocer la sed, pedir agua o acceder a ella, por lo que tienen un riesgo elevado de desarrollar hipernatremia.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nLa hipernatremia aparece fundamentalmente cuando existe:\nPérdida de agua > pérdida de sodio\no cuando existe:\nAporte insuficiente de agua.\nSituaciones clásicas:\nAlteración del nivel de conciencia.\nIncapacidad para acceder al agua.\nPérdidas gastrointestinales importantes.\nPérdidas renales de agua.\nDiabetes insípida.\n🧠 Idea clave\nHipernatremia = problema de agua, no simplemente de sodio.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nPASO 1. ¿Qué significa tener Na⁺ = 158 mEq/L?\nEl sodio plasmático está elevado.\nPero cuidado con la interpretación:\nLa hipernatremia generalmente representa déficit de agua libre en relación con el sodio.\nPor eso, ante una hipernatremia, piensa primero:\n¿De dónde está perdiendo agua este paciente?\no:\n¿Por qué no puede beber agua?\n\nPASO 2. ¿Por qué el bajo nivel de conciencia es tan importante?\nUna persona consciente puede responder a un aumento de la osmolaridad mediante:\n↑ osmolaridad\n↓\n↑ sed\n↓\ningesta de agua\n↓\ncorrección de la hipernatremia.\nPero un paciente con alteración importante de conciencia puede ser incapaz de:\nPercibir adecuadamente la sed.\nSolicitar agua.\nAcceder al agua.\nMantener una ingesta suficiente.\nPor eso:\nAlteración de conciencia → riesgo de déficit de agua → hipernatremia.\n\n¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nB. Fallo cardíaco derecho ❌\nEl fallo cardíaco puede producir alteraciones importantes del volumen y del manejo renal de sodio y agua, pero no es la asociación clásica que busca esta pregunta.\nC. SIADH ❌\nLa secreción inadecuada de ADH provoca:\n↑ ADH\n↓\n↑ reabsorción de agua\n↓\ndilución del sodio plasmático\n↓\nHIPONATREMIA.\nPor tanto, es prácticamente lo contrario de lo que buscamos.\nD. Hiponatremia dilucional ❌\nUna situación de exceso relativo de agua produce disminución de la concentración de sodio, no hipernatremia.\n\n🔥 TRAMPA DE EXAMEN\nNo pienses:\n\"Hipernatremia = demasiado sodio.\"\nPiensa:\n\"Hipernatremia = falta relativa de agua.\"\nY cuando aparezca un paciente con:\nAlteración de conciencia + imposibilidad para beber\n🚨 PIENSA EN HIPERNATREMIA.\n\n🎯 REGLA DE ORO\nHIPERNATREMIA = AGUA INSUFICIENTE\nNo puede beber → pierde agua → Na⁺ se concentra → hipernatremia.\nEn cambio:\nSIADH → exceso de agua → hiponatremia.\n\n📚 REFERENCIAS\nHall JE. Guyton y Hall. Tratado de Fisiología Médica.\nBoron WF, Boulpaep EL. Medical Physiology."
  },
  {
    "id": "dr-q-eval2-9",
    "examArea": "Nefrología / Funciones endocrinas del riñón (alta)",
    "topic": "Nefrología / Funciones endocrinas del riñón (alta)",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Sobre las funciones endocrinas del riñón, una es FALSA:",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "La hipoxia renal produce aumento de la síntesis de EPO en la corteza renal."
      },
      {
        "id": "B",
        "label": "B",
        "text": "El riñón participa en el metabolismo fosfocálcico como órgano diana de la vitamina D y mediante la segunda hidroxilación de la vitamina D."
      },
      {
        "id": "C",
        "label": "C",
        "text": "El riñón es diana de la angiotensina II, sintetizada tras la liberación de renina por el propio riñón; la AT-II produce vasoconstricción general y renal, aumento la volemia y tensión arterial."
      },
      {
        "id": "D",
        "label": "D",
        "text": "El riñón participa en el catabolismo de la insulina; en la insuficiencia renal hay tendencia a la hipoglucemia por acumulación de insulina."
      },
    ],
    "correctOptionId": "A",
    "explanation": "Según la fuente proporcionada, esta es la afirmación FALSA.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nEl riñón posee importantes funciones endocrinas relacionadas con:\nEritropoyetina (EPO): participa en la regulación de la eritropoyesis.\nVitamina D: participa en el metabolismo fosfocálcico y en la segunda hidroxilación de la vitamina D.\nSistema renina-angiotensina: el riñón libera renina, participando en la regulación de la volemia y la presión arterial.\nInsulina: el riñón participa en su catabolismo; en la insuficiencia renal puede existir acumulación de insulina y tendencia a la hipoglucemia.",
    "keyPoints": [],
    "theoryContent": "Según la fuente proporcionada, esta es la afirmación FALSA.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nEl riñón posee importantes funciones endocrinas relacionadas con:\nEritropoyetina (EPO): participa en la regulación de la eritropoyesis.\nVitamina D: participa en el metabolismo fosfocálcico y en la segunda hidroxilación de la vitamina D.\nSistema renina-angiotensina: el riñón libera renina, participando en la regulación de la volemia y la presión arterial.\nInsulina: el riñón participa en su catabolismo; en la insuficiencia renal puede existir acumulación de insulina y tendencia a la hipoglucemia.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nA. La hipoxia renal produce aumento de la síntesis de EPO en la corteza renal. ❌\nEsta es la afirmación falsa según la fuente y, por tanto, la respuesta correcta.\nLa pregunta busca evaluar las funciones endocrinas del riñón y, específicamente, la localización señalada en relación con la síntesis de eritropoyetina (EPO).\n👉 Trampa de examen: no basta con reconocer que la hipoxia renal estimula la EPO; en esta pregunta también importa la localización indicada en la afirmación.\n\nB. El riñón y la vitamina D ✅\nEl riñón participa en el metabolismo fosfocálcico y realiza la segunda hidroxilación de la vitamina D, proceso necesario para su activación.\nPor tanto, esta afirmación es correcta.\n\nC. Angiotensina II y riñón ✅\nEl riñón libera renina, que participa en el sistema renina-angiotensina.\nLa angiotensina II produce:\nVasoconstricción.\nAumento de la presión arterial.\nAumento de la volemia mediante sus efectos sobre el manejo de sodio y agua.\nPor tanto, según el planteamiento de la fuente, esta afirmación es correcta.\n\nD. Catabolismo de la insulina ✅\nEl riñón participa en el catabolismo de la insulina.\nEn la insuficiencia renal puede disminuir su eliminación, favoreciendo:\nAcumulación de insulina → tendencia a hipoglucemia.\nPor tanto, esta afirmación es correcta.\n\n🔥 TRAMPA DE EXAMEN\nLa pregunta mezcla cuatro funciones diferentes del riñón:\nEPO → eritropoyesis\nVitamina D → metabolismo fosfocálcico\nRenina → regulación de presión y volemia\nInsulina → catabolismo\nLa clave está en identificar cuál afirmación contiene el error señalado por la fuente.\n\n🎯 REGLA DE ORO\nFUNCIONES ENDOCRINAS DEL RIÑÓN\nEPO + Vitamina D + Renina + metabolismo de insulina\nY en esta pregunta:\nA = FALSA.\n\n📚 REFERENCIAS\nHall JE. Guyton y Hall. Tratado de Fisiología Médica.\nBoron WF, Boulpaep EL. Medical Physiology."
  },
  {
    "id": "dr-q-eval2-10",
    "examArea": "Nefrología / Aparato yuxtaglomerular (alta)",
    "topic": "Nefrología / Aparato yuxtaglomerular (alta)",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Uno de los siguientes no forma parte del aparato yuxtaglomerular, señale cuál:",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Arteriola eferente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Mácula densa en el túbulo contorneado proximal."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Mácula densa en el túbulo contorneado distal."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Mesangio."
      },
    ],
    "correctOptionId": "B",
    "explanation": "La mácula densa forma parte del aparato yuxtaglomerular y se encuentra en el túbulo contorneado distal, no en el túbulo contorneado proximal.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nEl aparato yuxtaglomerular se encuentra en el polo vascular del glomérulo y está formado fundamentalmente por:\nMácula densa: células especializadas del túbulo contorneado distal que detectan la concentración de NaCl tubular.\nCélulas yuxtaglomerulares o granulares: localizadas principalmente en la pared de la arteriola aferente; producen renina.\nCélulas mesangiales extraglomerulares: participan en la comunicación entre la mácula densa y las células granulares.\n👉 Mácula densa = túbulo distal.",
    "keyPoints": [],
    "theoryContent": "La mácula densa forma parte del aparato yuxtaglomerular y se encuentra en el túbulo contorneado distal, no en el túbulo contorneado proximal.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nEl aparato yuxtaglomerular se encuentra en el polo vascular del glomérulo y está formado fundamentalmente por:\nMácula densa: células especializadas del túbulo contorneado distal que detectan la concentración de NaCl tubular.\nCélulas yuxtaglomerulares o granulares: localizadas principalmente en la pared de la arteriola aferente; producen renina.\nCélulas mesangiales extraglomerulares: participan en la comunicación entre la mácula densa y las células granulares.\n👉 Mácula densa = túbulo distal.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nA. Arteriola eferente ✅\nLa arteriola eferente forma parte de la estructura vascular relacionada con el polo vascular glomerular y participa en la regulación de la presión intraglomerular.\nOjo: la liberación de renina se asocia principalmente a las células yuxtaglomerulares de la arteriola aferente, no a la eferente.\n\nB. Mácula densa en el túbulo contorneado proximal ❌\nEsta es la falsa.\nLa mácula densa no está localizada en el túbulo contorneado proximal.\nSe encuentra en una porción especializada del túbulo distal, en contacto con el polo vascular del glomérulo.\nPor tanto:\nMácula densa → túbulo contorneado distal.\n\nC. Mácula densa en el túbulo contorneado distal ✅\nEsta es la localización correcta.\nLa mácula densa detecta cambios en la concentración de NaCl que llega al túbulo distal y participa en el mecanismo de retroalimentación tubuloglomerular y en la regulación de la secreción de renina.\n\nD. Mesangio ✅\nEl mesangio extraglomerular forma parte del aparato yuxtaglomerular y participa en la comunicación entre la mácula densa y las células yuxtaglomerulares.\n\n🔥 TRAMPA DE EXAMEN\nEl examen intenta hacerte confundir:\nTúbulo proximal → reabsorción masiva\ncon\nTúbulo distal → mácula densa.\nLa asociación que tienes que automatizar es:\nMÁCULA DENSA = TÚBULO DISTAL.\n\n🎯 REGLA DE ORO\nAparato yuxtaglomerular =\nMácula densa + células yuxtaglomerulares + mesangio extraglomerular.\nY la perla:\nLa mácula densa está en el túbulo distal, NO en el proximal.\n\n📚 REFERENCIAS\nHall JE. Guyton y Hall. Tratado de Fisiología Médica.\nBoron WF, Boulpaep EL. Medical Physiology."
  },
  {
    "id": "dr-q-eval2-11",
    "examArea": "Nefrología / Fisiología renal (alta)",
    "topic": "Nefrología / Fisiología renal (alta)",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "¿Cuál de los siguientes asociaciones fisiológicas es FALSA?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Dopamina y prostaglandinas: vasodilatación renal."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Amlodipino: vasodilatación de la arteriola eferente."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Angiotensina II: vasoconstricción sistémica y de la arteriola eferente."
      },
      {
        "id": "D",
        "label": "D",
        "text": "IECA, ARA2, alfa-bloqueantes: vasodilatación de la arteriola eferente."
      },
    ],
    "correctOptionId": "B",
    "explanation": "La asociación falsa es la B. El amlodipino, como antagonista de los canales de calcio, produce vasodilatación predominantemente arteriolar sistémica, pero no se caracteriza por producir vasodilatación selectiva de la arteriola eferente.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nLa resistencia de las arteriolas aferente y eferente determina de manera importante la presión hidrostática glomerular y, por tanto, la filtración glomerular.\nArteriola eferente\nAngiotensina II → vasoconstricción eferente.\nIECA/ARA-II → vasodilatación eferente.\nEsto último disminuye la presión intraglomerular y puede reducir la TFG.\nDopamina y prostaglandinas\nSe asocian con vasodilatación renal, favoreciendo el flujo sanguíneo renal.",
    "keyPoints": [],
    "theoryContent": "La asociación falsa es la B. El amlodipino, como antagonista de los canales de calcio, produce vasodilatación predominantemente arteriolar sistémica, pero no se caracteriza por producir vasodilatación selectiva de la arteriola eferente.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nLa resistencia de las arteriolas aferente y eferente determina de manera importante la presión hidrostática glomerular y, por tanto, la filtración glomerular.\nArteriola eferente\nAngiotensina II → vasoconstricción eferente.\nIECA/ARA-II → vasodilatación eferente.\nEsto último disminuye la presión intraglomerular y puede reducir la TFG.\nDopamina y prostaglandinas\nSe asocian con vasodilatación renal, favoreciendo el flujo sanguíneo renal.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nA. Dopamina y prostaglandinas: vasodilatación renal. ✅\nLa dopamina, a determinadas concentraciones, y las prostaglandinas renales producen vasodilatación renal.\n👉 Asociación que debes reconocer directamente:\nDopamina + prostaglandinas → vasodilatación renal.\n\nB. Amlodipino: vasodilatación de la arteriola eferente. ❌\nEsta es la falsa.\nEl amlodipino es un antagonista de los canales de calcio del grupo de las dihidropiridinas y produce principalmente vasodilatación arteriolar sistémica.\nLa pregunta intenta hacerte asociar cualquier fármaco vasodilatador con una vasodilatación específica de la arteriola eferente.\n🚨 No caigas en esa trampa.\n\nC. Angiotensina II: vasoconstricción sistémica y de la arteriola eferente. ✅\nLa angiotensina II produce vasoconstricción sistémica y tiene un efecto importante sobre la arteriola eferente.\nEsto ayuda a mantener la presión intraglomerular cuando disminuye la perfusión renal.\nAngiotensina II → constricción eferente → ↑ presión intraglomerular.\n\nD. IECA, ARA2, alfa-bloqueantes: vasodilatación de la arteriola eferente. ✅\nEn el planteamiento de la fuente, estos fármacos se asocian con vasodilatación de la arteriola eferente.\nLa asociación especialmente importante que debes dominar es:\nIECA / ARA-II → vasodilatación eferente → ↓ presión intraglomerular.\nPor eso estos fármacos pueden producir un descenso de la TFG y aumento de creatinina, especialmente en situaciones de perfusión renal comprometida.\n\n🔥 TRAMPA DE EXAMEN\nCuando aparezca una pregunta sobre la arteriola eferente, piensa inmediatamente:\nAngiotensina II → CONTRAE\nIECA / ARA-II → DILATAN\nEsta relación es fundamental para entender el efecto hemodinámico de los bloqueadores del sistema renina-angiotensina sobre el glomérulo.\n\n🎯 REGLA DE ORO\nANGIOTENSINA II CIERRA LA EFERENTE.IECA/ARA-II ABREN LA EFERENTE.\nY en esta pregunta:\nA = verdadera\nB = FALSA ✅\nC = verdadera\nD = verdadera\n\n📚 REFERENCIAS\nHall JE. Guyton y Hall. Tratado de Fisiología Médica.\nBoron WF, Boulpaep EL. Medical Physiology."
  },
  {
    "id": "dr-q-eval2-12",
    "examArea": "Nefrología / Fármacos nefroprotectores (alta)",
    "topic": "Nefrología / Fármacos nefroprotectores (alta)",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente de 64 años con diabetes mellitus tipo 2 y enfermedad renal crónica presenta albuminuria persistente pese al tratamiento adecuado con un inhibidor del sistema renina-angiotensina. Se decide iniciar un inhibidor del cotransportador sodio-glucosa tipo 2 (SGLT2). ¿Cuál de los siguientes mecanismos explica principalmente el efecto nefroprotector de estos fármacos?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Aumento de la reabsorción de sodio y glucosa en el túbulo contorneado proximal, disminuyendo la presión intraglomerular."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Bloqueo de la reabsorción de sodio y glucosa en el túbulo contorneado proximal, aumentando la llegada de NaCl a la mácula densa y restaurando la retroalimentación tubuloglomerular."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Vasodilatación de la arteriola aferente, aumentando el flujo renal y disminuyendo la presión intraglomerular."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Bloqueo directo de los receptores AT1 de angiotensina II en la arteriola eferente, reduciendo la filtración glomerular."
      },
    ],
    "correctOptionId": "B",
    "explanation": "Los inhibidores SGLT2 bloquean la reabsorción de glucosa y sodio en el túbulo contorneado proximal. Esto aumenta la cantidad de NaCl que alcanza la mácula densa, lo que restaura la retroalimentación tubuloglomerular y favorece la vasoconstricción de la arteriola aferente.\nEl resultado es:\n↓ presión intraglomerular → ↓ hiperfiltración → ↓ albuminuria → nefroprotección.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nSGLT2 → TCP → Na⁺ + glucosa\nLos SGLT2 se encuentran en el túbulo contorneado proximal y participan en la reabsorción de glucosa junto con sodio.\nAl bloquearlos:\n↓ reabsorción Na⁺/glucosa\n↓\n↑ NaCl llega a mácula densa\n↓\n↑ retroalimentación tubuloglomerular\n↓\nvasoconstricción aferente\n↓\n↓ presión intraglomerular\n↓\nNEFROPROTECCIÓN",
    "keyPoints": [],
    "theoryContent": "Los inhibidores SGLT2 bloquean la reabsorción de glucosa y sodio en el túbulo contorneado proximal. Esto aumenta la cantidad de NaCl que alcanza la mácula densa, lo que restaura la retroalimentación tubuloglomerular y favorece la vasoconstricción de la arteriola aferente.\nEl resultado es:\n↓ presión intraglomerular → ↓ hiperfiltración → ↓ albuminuria → nefroprotección.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nSGLT2 → TCP → Na⁺ + glucosa\nLos SGLT2 se encuentran en el túbulo contorneado proximal y participan en la reabsorción de glucosa junto con sodio.\nAl bloquearlos:\n↓ reabsorción Na⁺/glucosa\n↓\n↑ NaCl llega a mácula densa\n↓\n↑ retroalimentación tubuloglomerular\n↓\nvasoconstricción aferente\n↓\n↓ presión intraglomerular\n↓\nNEFROPROTECCIÓN\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\n¿Cuál es la clave fisiopatológica?\nEl punto fundamental es entender que los SGLT2 no protegen únicamente porque disminuyan la glucemia.\nSu efecto renal depende en gran medida de modificar la hemodinámica glomerular.\nEn la diabetes existe tendencia a la hiperfiltración glomerular.\nLos SGLT2 bloquean la reabsorción proximal de:\nNa⁺ + glucosa\nPor lo tanto, llega más NaCl a la mácula densa.\nLa mácula densa interpreta este aumento de NaCl como una señal de que existe suficiente filtración y activa la:\nRetroalimentación tubuloglomerular\nEsto produce vasoconstricción de la arteriola aferente.\nConsecuencia:\n↓ presión intraglomerular\ny por tanto:\n↓ hiperfiltración y ↓ albuminuria.\n\n¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. ❌\nLos SGLT2 hacen exactamente lo contrario:\nbloquean la reabsorción de sodio y glucosa en el TCP.\n\nC. ❌\nNo producen vasodilatación aferente como mecanismo nefroprotector.\nEl aumento de NaCl en la mácula densa favorece:\nvasoconstricción aferente → ↓ presión intraglomerular.\n\nD. ❌\nEl bloqueo del receptor AT1 corresponde a los ARA-II, no a los inhibidores SGLT2.\nLos SGLT2 actúan directamente sobre el túbulo proximal.\n\n🔥 TRAMPA DE EXAMEN\nNo te quedes únicamente con:\nSGLT2 = glucosuria.\nPara nefrología debes pensar:\nSGLT2 → ↑ NaCl en mácula densa → feedback tubuloglomerular → vasoconstricción aferente → ↓ presión intraglomerular.\nEse es el concepto nefroprotector que quieren que reconozcas.\n\n🎯 REGLA DE ORO\nSGLT2: \"MENOS REABSORCIÓN PROXIMAL → MÁS NaCl A LA MÁCULA DENSA → MENOS PRESIÓN GLOMERULAR\".\nTCP → SGLT2 ↓ → NaCl distal ↑ → aferente se contrae → presión intraglomerular ↓ → riñón protegido.\n\n📚 REFERENCIAS\nHeerspink HJL, et al. SGLT2 inhibitors in patients with kidney disease. Kidney International.\nKDIGO. Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease.\nHall JE. Guyton y Hall. Tratado de Fisiología Médica."
  },
  {
    "id": "dr-q-eval2-13",
    "examArea": "Nefrología / Función renal – Fórmula CKD-EPI (alta)",
    "topic": "Nefrología / Función renal – Fórmula CKD-EPI (alta)",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "¿Cuál de los siguientes parámetros NO forma parte de la fórmula utilizada para estimar el filtrado glomerular mediante CKD-EPI?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Edad."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Sexo."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Raza."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Peso."
      },
    ],
    "correctOptionId": "D",
    "explanation": "La fórmula CKD-EPI estima el filtrado glomerular utilizando fundamentalmente variables como creatinina sérica, edad y sexo; el peso corporal no forma parte de la fórmula.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nLa ecuación CKD-EPI se utiliza para estimar la TFG (eGFR) a partir de variables demográficas y bioquímicas.\nVariables clásicas:\nCreatinina sérica\nEdad\nSexo\nRaza, en las versiones antiguas que incluían un factor específico para población negra.\n🚨 El peso NO es una variable de la fórmula CKD-EPI.",
    "keyPoints": [],
    "theoryContent": "La fórmula CKD-EPI estima el filtrado glomerular utilizando fundamentalmente variables como creatinina sérica, edad y sexo; el peso corporal no forma parte de la fórmula.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nLa ecuación CKD-EPI se utiliza para estimar la TFG (eGFR) a partir de variables demográficas y bioquímicas.\nVariables clásicas:\nCreatinina sérica\nEdad\nSexo\nRaza, en las versiones antiguas que incluían un factor específico para población negra.\n🚨 El peso NO es una variable de la fórmula CKD-EPI.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nLa trampa está en diferenciar las fórmulas de estimación de función renal.\nLa CKD-EPI utiliza principalmente la creatinina sérica, junto con características demográficas como edad y sexo.\nEl peso corporal puede ser relevante para otras estimaciones o para ajustar determinadas variables clínicas, pero no forma parte directamente de la ecuación CKD-EPI.\nPor eso:\nA. Edad → SÍ forma parte. ✅\nLa edad es una de las variables utilizadas para estimar la TFG.\nB. Sexo → SÍ forma parte. ✅\nEl sexo modifica el cálculo de la TFG estimada.\nC. Raza → SÍ en la versión clásica. ✅\nLa ecuación CKD-EPI original incluía un coeficiente relacionado con la raza negra.\n⚠️ Importante: las ecuaciones CKD-EPI más recientes, especialmente la CKD-EPI 2021, eliminaron el componente racial. Pero para esta pregunta y el enfoque clásico de la fuente, la respuesta buscada es D.\nD. Peso → NO forma parte. ❌\nEsta es la respuesta.\n\n🔥 TRAMPA DE EXAMEN\nNo confundas:\nCKD-EPI → creatinina + edad + sexo (+ raza en la versión clásica)\ncon otras fórmulas que pueden incorporar peso corporal.\n🎯 REGLA DE ORO\nCKD-EPI NO NECESITA EL PESO.\n\n📚 REFERENCIAS\nLevey AS, et al. A New Equation to Estimate Glomerular Filtration Rate. Annals of Internal Medicine. 2009.\nInker LA, et al. New Creatinine- and Cystatin C–Based Equations to Estimate GFR without Race. New England Journal of Medicine. 2021."
  },
  {
    "id": "dr-q-eval2-14",
    "examArea": "Nefrología / Hiponatremia",
    "topic": "Nefrología / Hiponatremia",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "En un enfermo de 57 años con edemas en MMII, la presencia de sodio plasmático de 125 mEq/l indica:",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Hiponatremia con VEC disminuido, tratamiento con suero salino isotónico."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Pseudohiponatremia, tratamiento de la hiperglucemia."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Secreción inadecuada de ADH, restricción hídrica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hiponatremia con VEC aumentado, restricción hídrica ± diuréticos."
      },
    ],
    "correctOptionId": "D",
    "explanation": "El dato fundamental del caso es la presencia de edemas en miembros inferiores, que orienta hacia una hiponatremia hipervolémica, es decir, una hiponatremia con volumen extracelular (VEC) aumentado.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nLa hiponatremia se puede clasificar según el estado del volumen extracelular:\nHipovolémica: ↓ VEC → pérdida de sodio y agua, con mayor pérdida de sodio.\nEuvolémica: VEC aparentemente normal → típico de SIADH.\nHipervolémica: ↑ VEC → presencia de edemas, como ocurre en insuficiencia cardiaca, cirrosis o síndrome nefrótico.\n👉 Edema + Na⁺ bajo = piensa en hiponatremia hipervolémica.\nEl manejo incluye fundamentalmente:\nRestricción hídrica ± diuréticos, dependiendo de la causa y situación clínica.",
    "keyPoints": [],
    "theoryContent": "El dato fundamental del caso es la presencia de edemas en miembros inferiores, que orienta hacia una hiponatremia hipervolémica, es decir, una hiponatremia con volumen extracelular (VEC) aumentado.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nLa hiponatremia se puede clasificar según el estado del volumen extracelular:\nHipovolémica: ↓ VEC → pérdida de sodio y agua, con mayor pérdida de sodio.\nEuvolémica: VEC aparentemente normal → típico de SIADH.\nHipervolémica: ↑ VEC → presencia de edemas, como ocurre en insuficiencia cardiaca, cirrosis o síndrome nefrótico.\n👉 Edema + Na⁺ bajo = piensa en hiponatremia hipervolémica.\nEl manejo incluye fundamentalmente:\nRestricción hídrica ± diuréticos, dependiendo de la causa y situación clínica.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nA. Hiponatremia con VEC disminuido, tratamiento con suero salino isotónico. ❌\nEsta opción correspondería a una hiponatremia hipovolémica.\nPero el paciente presenta edemas, lo que indica aumento del volumen extracelular.\nPor tanto, no es la opción adecuada para este caso.\n\nB. Pseudohiponatremia, tratamiento de la hiperglucemia. ❌\nLa pseudohiponatremia no se diagnostica simplemente por encontrar un sodio de 125 mEq/L.\nAdemás, el dato clínico proporcionado —edemas en MMII— orienta hacia una alteración del volumen extracelular.\n\nC. Secreción inadecuada de ADH, restricción hídrica. ❌\nLa SIADH produce clásicamente una hiponatremia euvolémica, no una hiponatremia con edemas.\nLa restricción hídrica puede formar parte de su tratamiento, pero el estado de volumen del paciente no encaja con SIADH.\n\nD. Hiponatremia con VEC aumentado, restricción hídrica ± diuréticos. ✅\nEsta es la correcta.\nEl paciente presenta:\nNa⁺ 125 mEq/L\n\nEdemas en MMII\n↓\nHiponatremia hipervolémica\nEl organismo tiene un exceso de agua corporal total, aunque el sodio plasmático esté disminuido.\nPor eso, el abordaje incluye:\nRestricción hídrica ± diuréticos.\n\n🔥 TRAMPA DE EXAMEN\nNo te quedes solamente con:\nNa⁺ bajo = dar suero salino.\nPrimero debes preguntarte:\n¿Cómo está el VEC?\nEdemas → VEC aumentado → hiponatremia hipervolémica.\n\n🎯 REGLA DE ORO\nHIPONATREMIA + EDEMA = HIPERVOLEMIA\n↓ Na⁺ + ↑ VEC → restricción hídrica ± diuréticos.\n\n📚 REFERENCIAS\nFuente principal: imagen proporcionada por el usuario, Nefrología, pregunta 16.\nManual AMIR – Nefrología / Trastornos hidroelectrolíticos.\nHall JE. Guyton y Hall. Tratado de Fisiología Médica.\nKDIGO. Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease."
  },
  {
    "id": "dr-q-eval2-15",
    "examArea": "Nefrología / Hiponatremia posoperatoria",
    "topic": "Nefrología / Hiponatremia posoperatoria",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente de 63 años presenta deterioro progresivo del nivel de conciencia a las 8 h tras una cirugía de colecistectomía con anestesia general, con un postoperatorio inicial normal. Está hemodinámicamente estable, sin datos de insuficiencia cardiaca, afebril, sin focalidad neurológica. Sin alteraciones en el hemograma ni en la coagulación; en la bioquímica muestra urea 38 mg/dl, glucemia 116 mg/dl, Na⁺ 117 mEq/l, K⁺ 4,7 mEq/l; en la orina muestra osmolalidad de 500 mOsm/Kg y sodio de 35 mEq/l. ¿Cuál es la causa más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Deshidratación hipotónica."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hiponatremia ADH-dependiente."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Tubulopatía pierde-sal por anestésicos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Sepsis en fase inicial."
      },
    ],
    "correctOptionId": "B",
    "explanation": "El cuadro es compatible con una hiponatremia mediada por ADH, en el contexto posoperatorio.\nEl dato clave es:\nNa⁺ 117 mEq/L + orina concentrada (500 mOsm/kg) + Na⁺ urinario 35 mEq/L\nLa anestesia general, el dolor, las náuseas y el estrés quirúrgico son estímulos potentes para la liberación de ADH, pudiendo provocar hiponatremia posoperatoria. (OUP Academic)\n\nLO QUE DEBES SABER PARA EL EXAMEN\nAnte una hiponatremia, la osmolalidad urinaria ayuda a determinar si existe actividad de ADH.\nADH suprimida\n→ orina muy diluida→ osmolaridad urinaria ≤100 mOsm/kg\nADH presente\n→ retención de agua→ orina inapropiadamente concentrada >100 mOsm/kg\nEn este paciente:\nOsm urinaria = 500 mOsm/kg\n→ ADH está actuando.\nAdemás:\nNa urinario = 35 mEq/L\nes compatible con el patrón de hiponatremia euvolémica/SIAD cuando se han excluido otras causas. (OUP Academic)",
    "keyPoints": [],
    "theoryContent": "El cuadro es compatible con una hiponatremia mediada por ADH, en el contexto posoperatorio.\nEl dato clave es:\nNa⁺ 117 mEq/L + orina concentrada (500 mOsm/kg) + Na⁺ urinario 35 mEq/L\nLa anestesia general, el dolor, las náuseas y el estrés quirúrgico son estímulos potentes para la liberación de ADH, pudiendo provocar hiponatremia posoperatoria. (OUP Academic)\n\nLO QUE DEBES SABER PARA EL EXAMEN\nAnte una hiponatremia, la osmolalidad urinaria ayuda a determinar si existe actividad de ADH.\nADH suprimida\n→ orina muy diluida→ osmolaridad urinaria ≤100 mOsm/kg\nADH presente\n→ retención de agua→ orina inapropiadamente concentrada >100 mOsm/kg\nEn este paciente:\nOsm urinaria = 500 mOsm/kg\n→ ADH está actuando.\nAdemás:\nNa urinario = 35 mEq/L\nes compatible con el patrón de hiponatremia euvolémica/SIAD cuando se han excluido otras causas. (OUP Academic)\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nA. Deshidratación hipotónica ❌\nEn una hiponatremia hipovolémica esperaríamos datos clínicos de disminución del volumen extracelular.\nPero el paciente está:\nHemodinámicamente estable.\nSin datos de hipoperfusión.\nSin otros datos que orienten a deshidratación.\nAdemás, el contexto posoperatorio favorece una liberación inapropiada de ADH.\n\nB. Hiponatremia ADH-dependiente ✅\nEsta es la correcta.\nEl paciente acaba de ser sometido a cirugía y posteriormente desarrolla una hiponatremia grave con alteración neurológica.\nLa combinación:\nHiponatremia + orina muy concentrada\nindica que la ADH no está adecuadamente suprimida.\nLa anestesia general, el dolor, las náuseas y el estrés son estímulos conocidos para la secreción de vasopresina y pueden producir hiponatremia posoperatoria. (OUP Academic)\n\nC. Tubulopatía pierde-sal por anestésicos ❌\nNo es la explicación más probable.\nLa clave fisiopatológica del caso está en la retención de agua mediada por ADH, demostrada indirectamente por la elevada osmolalidad urinaria.\n\nD. Sepsis en fase inicial ❌\nEl paciente está afebril, hemodinámicamente estable y no presenta datos clínicos que orienten hacia sepsis.\nPor tanto, no es la explicación más probable del cuadro.\n\n🔥 TRAMPA DE EXAMEN\nNo te dejes engañar por el contexto quirúrgico.\nLa pregunta realmente quiere que relaciones:\nPOSOPERATORIO → ↑ ADH → RETENCIÓN DE AGUA → HIPONATREMIA\nY la pista de laboratorio que lo confirma es:\nOsmolaridad urinaria 500 mOsm/kg\nUna orina tan concentrada en un paciente hiponatrémico significa que la ADH está actuando.\n\n🎯 REGLA DE ORO\nHIPONATREMIA + ORINA CONCENTRADA = ADH PRESENTE.\nY en el paciente posoperatorio:\nCirugía + dolor/estrés/náuseas → ↑ ADH → hiponatremia ADH-dependiente.\n\n📚 REFERENCIAS\nSpasovski G, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. European Journal of Endocrinology. (OUP Academic)\nHoorn EJ, Zietse R. Approach to the Patient: Hyponatremia and the Syndrome of Inappropriate Antidiuresis. Journal of Clinical Endocrinology & Metabolism. (OUP Academic)"
  },
  {
    "id": "dr-q-eval2-16",
    "examArea": "Nefrología / Balance de líquidos (alta)",
    "topic": "Nefrología / Balance de líquidos (alta)",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Con respecto al balance de líquidos, una es FALSA:",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "La deshidratación hipotónica se produce con pérdidas renales o extrarrenales de líquido rico en sodio; entre las causas renales destacan el abuso de diuréticos, la enfermedad de Addison y las nefropatías pierde-sal."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Se producen deshidrataciones hipotónicas extrarrenales en la hiperhidrosis y la ventilación mecánica; cursan con sodio bajo en orina y orina concentrada."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Hay hiperhidratación sin edemas en el SIADH y en el hiperaldosteronismo primario."
      },
      {
        "id": "D",
        "label": "D",
        "text": "La deshidratación hipertónica cursa con menor repercusión hemodinámica y mayor afectación neurológica."
      },
    ],
    "correctOptionId": "B",
    "explanation": "La afirmación B es la falsa.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nLa deshidratación hipotónica ocurre cuando la pérdida de sodio es proporcionalmente mayor que la pérdida de agua.\nPuede ser:\nRenal: diuréticos, enfermedad de Addison y nefropatías pierde-sal.\nExtrarrenal: pérdidas de líquidos hipotónicos, especialmente gastrointestinales o cutáneas.\nLa deshidratación hipertónica, por el contrario, produce una mayor pérdida de agua respecto al sodio y tiene especial repercusión sobre el compartimento intracelular, incluido el sistema nervioso central.",
    "keyPoints": [],
    "theoryContent": "La afirmación B es la falsa.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nLa deshidratación hipotónica ocurre cuando la pérdida de sodio es proporcionalmente mayor que la pérdida de agua.\nPuede ser:\nRenal: diuréticos, enfermedad de Addison y nefropatías pierde-sal.\nExtrarrenal: pérdidas de líquidos hipotónicos, especialmente gastrointestinales o cutáneas.\nLa deshidratación hipertónica, por el contrario, produce una mayor pérdida de agua respecto al sodio y tiene especial repercusión sobre el compartimento intracelular, incluido el sistema nervioso central.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nA. Deshidratación hipotónica por pérdidas ricas en sodio. ✅\nCorrecta.\nCuando se pierde proporcionalmente más sodio que agua, disminuye la concentración plasmática de sodio y aparece una deshidratación hipotónica.\nEntre las causas renales destacan:\nDiuréticos + enfermedad de Addison + nefropatías pierde-sal.\n\nB. Deshidrataciones hipotónicas extrarrenales en hiperhidrosis y ventilación mecánica. ❌\nEsta es la falsa.\nLa afirmación atribuye tanto a la hiperhidrosis como a la ventilación mecánica un patrón de deshidratación hipotónica.\nLa trampa está en el tipo de pérdida de agua y electrolitos: las pérdidas respiratorias por ventilación mecánica son fundamentalmente pérdidas de agua, por lo que no deben clasificarse automáticamente como pérdidas hipotónicas.\n👉 No memorices \"ventilación mecánica = deshidratación hipotónica\".\n\nC. Hiperhidratación sin edemas en SIADH e hiperaldosteronismo primario. ✅\nCorrecta en el planteamiento de la pregunta.\nEn el SIADH existe retención de agua con expansión leve del volumen extracelular, pero habitualmente sin edema clínicamente evidente.\nEn el hiperaldosteronismo primario existe retención de sodio y expansión del volumen extracelular; sin embargo, el fenómeno de escape de aldosterona limita la aparición de edema.\n\nD. Deshidratación hipertónica: menor repercusión hemodinámica y mayor afectación neurológica. ✅\nCorrecta.\nEn la deshidratación hipertónica existe una pérdida proporcionalmente mayor de agua.\nEl aumento de la osmolaridad extracelular provoca salida de agua desde las células, incluida la célula neuronal.\nPor eso predominan las manifestaciones neurológicas.\n\n🔥 TRAMPA DE EXAMEN\nNo confundas:\nDeshidratación hipotónica\n↓ Na⁺ → pérdida proporcionalmente mayor de sodio\nvs.\nDeshidratación hipertónica\n↑ Na⁺ → pérdida proporcionalmente mayor de agua → mayor repercusión neurológica.\n\n🎯 REGLA DE ORO\nHIPOTÓNICA = pierdo más Na⁺.HIPERTÓNICA = pierdo más H₂O → cerebro afectado.\nY para esta pregunta:\nA ✅ — B ❌ — C ✅ — D ✅\n\n📚 REFERENCIAS\nHall JE. Guyton y Hall. Tratado de Fisiología Médica.\nBoron WF, Boulpaep EL. Medical Physiology."
  },
  {
    "id": "dr-q-eval2-17",
    "examArea": "Nefrología / Hiperpotasemia",
    "topic": "Nefrología / Hiperpotasemia",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Una de las siguientes no es útil en el manejo de la hiperpotasemia:",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Tiazidas."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Resinas de intercambio iónico."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Furosemida."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Insulina."
      },
    ],
    "correctOptionId": "A",
    "explanation": "La opción que no es útil en el manejo de la hiperpotasemia, según la pregunta fuente, es A. Tiazidas.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nEn el tratamiento de la hiperpotasemia, existen diferentes estrategias según la gravedad y el contexto:\nInsulina: favorece la entrada de K⁺ al interior celular y disminuye rápidamente la concentración plasmática.\nFurosemida: aumenta la excreción renal de potasio cuando existe función renal y diuresis suficientes.\nResinas de intercambio iónico: favorecen la eliminación gastrointestinal de potasio.\nTiazidas: no son una herramienta habitual para el manejo de la hiperpotasemia aguda.",
    "keyPoints": [],
    "theoryContent": "La opción que no es útil en el manejo de la hiperpotasemia, según la pregunta fuente, es A. Tiazidas.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nEn el tratamiento de la hiperpotasemia, existen diferentes estrategias según la gravedad y el contexto:\nInsulina: favorece la entrada de K⁺ al interior celular y disminuye rápidamente la concentración plasmática.\nFurosemida: aumenta la excreción renal de potasio cuando existe función renal y diuresis suficientes.\nResinas de intercambio iónico: favorecen la eliminación gastrointestinal de potasio.\nTiazidas: no son una herramienta habitual para el manejo de la hiperpotasemia aguda.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nA. Tiazidas ❌\nEsta es la respuesta correcta.\nLas tiazidas no constituyen una medida útil para el manejo de una hiperpotasemia aguda.\n👉 En una pregunta de tratamiento de hiperpotasemia, no debes pensar en las tiazidas como medida de elección.\n\nB. Resinas de intercambio iónico ✅\nLas resinas de intercambio iónico permiten favorecer la eliminación gastrointestinal del potasio mediante intercambio de iones en el tubo digestivo.\nSu efecto es más lento y no sustituyen las medidas urgentes cuando existe una hiperpotasemia grave con alteraciones electrocardiográficas.\n\nC. Furosemida ✅\nLa furosemida, como diurético de asa, aumenta la excreción renal de sodio y agua y favorece también la eliminación urinaria de K⁺.\nSu utilidad depende de que el paciente tenga suficiente función renal y capacidad de producir orina.\n\nD. Insulina ✅\nLa insulina favorece el desplazamiento del potasio desde el espacio extracelular hacia el interior de las células.\nPor eso:\nInsulina → ↑ entrada de K⁺ a la célula → ↓ K⁺ plasmático.\n⚠️ Es importante recordar que este mecanismo redistribuye el potasio; no elimina el potasio corporal total.\n\n🔥 TRAMPA DE EXAMEN\nEn hiperpotasemia debes diferenciar dos objetivos:\n1. Meter el K⁺ dentro de la célula\nInsulina → ↓ K⁺ plasmático\n2. Sacar el K⁺ del organismo\nFurosemida / resinas → ↑ eliminación de K⁺\n\n🎯 REGLA DE ORO\nINSULINA = mete K⁺ en la célula.FUROSEMIDA = elimina K⁺ por riñón.RESINAS = eliminan K⁺ por tubo digestivo.\nEn esta pregunta:\nA ❌ — B ✅ — C ✅ — D ✅\n\n📚 REFERENCIAS\nHall JE. Guyton y Hall. Tratado de Fisiología Médica.\nKDIGO. Potassium Management in Kidney Diseases: Conclusions from a KDIGO Controversies Conference. (KDIGO)"
  },
  {
    "id": "dr-q-eval2-18",
    "examArea": "Nefrología / Hiperpotasemia grave (alta)",
    "topic": "Nefrología / Hiperpotasemia grave (alta)",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente de 68 años con enfermedad renal crónica consulta por debilidad muscular. Presenta K⁺ de 7,1 mEq/L y el electrocardiograma muestra ondas T picudas y ensanchamiento del QRS. ¿Cuál es la actuación inicial más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar furosemida intravenosa y esperar la respuesta del potasio sérico."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar resinas de intercambio iónico y repetir el potasio en 6 horas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administrar gluconato cálcico intravenoso para estabilizar la membrana miocárdica y posteriormente iniciar medidas para disminuir el potasio."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar únicamente insulina con glucosa para desplazar el potasio al interior celular."
      },
    ],
    "correctOptionId": "C",
    "explanation": "En una hiperpotasemia grave con alteraciones electrocardiográficas, la prioridad inmediata es proteger el corazón con calcio intravenoso. El calcio no disminuye la concentración de K⁺, sino que estabiliza la membrana cardíaca y reduce el riesgo de arritmias. Posteriormente deben utilizarse medidas para desplazar el K⁺ al interior celular y/o eliminarlo del organismo. (UK Kidney Association)\n\nLO QUE DEBES SABER PARA EL EXAMEN\nAnte una hiperpotasemia grave, piensa en tres objetivos:\n🫀 1. PROTEGER EL CORAZÓN\nCalcio IV\n→ estabiliza la membrana miocárdica.\n🔄 2. METER EL K⁺ EN LA CÉLULA\nInsulina + glucosa\n± salbutamol\n→ disminuyen rápidamente el K⁺ plasmático mediante redistribución. (UK Kidney Association)\n🚽 3. SACAR EL K⁺ DEL ORGANISMO\nDiuréticos de asa, quelantes de potasio o diálisis, dependiendo del contexto clínico y de la función renal. (KDIGO)",
    "keyPoints": [],
    "theoryContent": "En una hiperpotasemia grave con alteraciones electrocardiográficas, la prioridad inmediata es proteger el corazón con calcio intravenoso. El calcio no disminuye la concentración de K⁺, sino que estabiliza la membrana cardíaca y reduce el riesgo de arritmias. Posteriormente deben utilizarse medidas para desplazar el K⁺ al interior celular y/o eliminarlo del organismo. (UK Kidney Association)\n\nLO QUE DEBES SABER PARA EL EXAMEN\nAnte una hiperpotasemia grave, piensa en tres objetivos:\n🫀 1. PROTEGER EL CORAZÓN\nCalcio IV\n→ estabiliza la membrana miocárdica.\n🔄 2. METER EL K⁺ EN LA CÉLULA\nInsulina + glucosa\n± salbutamol\n→ disminuyen rápidamente el K⁺ plasmático mediante redistribución. (UK Kidney Association)\n🚽 3. SACAR EL K⁺ DEL ORGANISMO\nDiuréticos de asa, quelantes de potasio o diálisis, dependiendo del contexto clínico y de la función renal. (KDIGO)\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nA. Furosemida IV ❌\nPuede favorecer la eliminación renal de potasio, pero no es la prioridad cuando existen alteraciones electrocardiográficas.\nPrimero hay que proteger el corazón.\n\nB. Resinas de intercambio iónico ❌\nPueden favorecer la eliminación gastrointestinal de K⁺, pero su efecto no es suficientemente rápido para resolver de entrada una hiperpotasemia grave con alteraciones ECG.\n\nC. Gluconato cálcico IV ✅\nEsta es la correcta.\nEl paciente tiene:\nK⁺ 7,1 mEq/L + alteraciones ECG\n↓\nHiperpotasemia potencialmente mortal\n↓\nCALCIO IV\nEl calcio antagoniza los efectos eléctricos de la hiperpotasemia sobre el miocardio, pero no elimina ni desplaza el K⁺.\nDespués se debe actuar sobre el potasio con medidas como insulina-glucosa y estrategias para eliminarlo. (KDIGO)\n\nD. Insulina con glucosa ❌\nLa insulina es fundamental porque favorece la entrada de K⁺ a las células.\nPero en presencia de alteraciones electrocardiográficas, la primera prioridad es:\nESTABILIZAR EL MIOCARDIO CON CALCIO.\nLa insulina no sustituye al calcio en esta situación. (UK Kidney Association)\n\n🔥 TRAMPA DE EXAMEN\nEsta es una de las asociaciones más importantes:\nCALCIO NO BAJA EL POTASIO.\nSu función es:\nCALCIO → PROTEGE EL CORAZÓN\nMientras que:\nINSULINA → METE K⁺ EN LA CÉLULA\nY:\nDIÁLISIS / ELIMINACIÓN RENAL / QUELANTES → SACAN K⁺ DEL ORGANISMO\n\n🎯 REGLA DE ORO\nHIPERK + ECG ALTERADO = CALCIO PRIMERO.\nDespués:\nInsulina + glucosa → ↓ K⁺ plasmático\nMedidas de eliminación → ↓ K⁺ corporal total\nLas guías actuales recomiendan tratamiento urgente en la hiperpotasemia grave y monitorización estrecha de ECG, potasio y glucemia durante el tratamiento. (UK Kidney Association)\n\n📚 REFERENCIAS\nUK Kidney Association. Clinical Practice Guideline – Management of Hyperkalaemia in Adults, 2023. (UK Kidney Association)\nKDIGO. Potassium Management in Kidney Diseases: Conclusions from a KDIGO Controversies Conference. (KDIGO)\nHall JE. Guyton y Hall. Tratado de Fisiología Médica."
  },
  {
    "id": "dr-q-eval2-19",
    "examArea": "Nefrología / Hiperpotasemia grave (alta)",
    "topic": "Nefrología / Hiperpotasemia grave (alta)",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente de 70 años con enfermedad renal crónica presenta una hiperpotasemia de 6,8 mEq/L. El electrocardiograma muestra ondas T picudas, pero no presenta ensanchamiento del QRS. Se administra tratamiento con gluconato cálcico e insulina con glucosa. ¿Cuál de las siguientes medidas tiene como objetivo eliminar el potasio del organismo, y no simplemente redistribuirlo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Insulina con glucosa."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Salbutamol inhalado."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Bicarbonato sódico intravenoso."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hemodiálisis."
      },
    ],
    "correctOptionId": "D",
    "explanation": "La hemodiálisis elimina potasio del organismo, mientras que la insulina y el salbutamol producen principalmente un desplazamiento del K⁺ hacia el interior celular. Las guías actuales consideran la diálisis una medida fundamental cuando existe hiperpotasemia grave en pacientes con indicación de terapia renal sustitutiva. (UK Kidney Association)\n\nLO QUE DEBES SABER PARA EL EXAMEN\nEn la hiperpotasemia grave hay que diferenciar:\nMEDIDAS QUE REDISTRIBUYEN K⁺\nInsulina + glucosa→ introduce K⁺ en la célula.\nSalbutamol→ favorece la entrada de K⁺ en la célula.\nEstas medidas no eliminan el potasio corporal total.\nMEDIDAS QUE ELIMINAN K⁺\nHemodiálisis→ elimina directamente K⁺ del organismo.\nDiuréticos→ aumentan la eliminación renal si existe función renal y diuresis adecuadas.\nQuelantes de potasio→ favorecen su eliminación gastrointestinal. (UK Kidney Association)",
    "keyPoints": [],
    "theoryContent": "La hemodiálisis elimina potasio del organismo, mientras que la insulina y el salbutamol producen principalmente un desplazamiento del K⁺ hacia el interior celular. Las guías actuales consideran la diálisis una medida fundamental cuando existe hiperpotasemia grave en pacientes con indicación de terapia renal sustitutiva. (UK Kidney Association)\n\nLO QUE DEBES SABER PARA EL EXAMEN\nEn la hiperpotasemia grave hay que diferenciar:\nMEDIDAS QUE REDISTRIBUYEN K⁺\nInsulina + glucosa→ introduce K⁺ en la célula.\nSalbutamol→ favorece la entrada de K⁺ en la célula.\nEstas medidas no eliminan el potasio corporal total.\nMEDIDAS QUE ELIMINAN K⁺\nHemodiálisis→ elimina directamente K⁺ del organismo.\nDiuréticos→ aumentan la eliminación renal si existe función renal y diuresis adecuadas.\nQuelantes de potasio→ favorecen su eliminación gastrointestinal. (UK Kidney Association)\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nA. Insulina con glucosa ❌\nLa insulina produce un desplazamiento rápido del K⁺ desde el espacio extracelular hacia el interior de las células.\n↓ K⁺ plasmático\nPero:\nK⁺ corporal total ≠ disminuido.\nPor eso puede existir rebote de la hiperpotasemia cuando desaparece el efecto.\n\nB. Salbutamol inhalado ❌\nEl agonismo β₂ favorece la entrada de K⁺ a las células.\nEs, por tanto, otra medida de redistribución.\nNo elimina directamente el potasio corporal.\n\nC. Bicarbonato sódico intravenoso ❌\nNo es una medida rutinaria para el tratamiento agudo de la hiperpotasemia. Su utilidad depende especialmente del contexto de acidosis metabólica, y las guías actuales no recomiendan su utilización rutinaria en la hiperpotasemia aguda. (UK Kidney Association)\n\nD. Hemodiálisis ✅\nEsta es la correcta.\nLa hemodiálisis permite extraer directamente K⁺ de la circulación, reduciendo el contenido corporal total de potasio.\nEs especialmente importante cuando existe insuficiencia renal grave y la eliminación renal de potasio es inadecuada.\nEn pacientes en hemodiálisis con hiperpotasemia grave (K⁺ ≥6,5 mmol/L), la UK Kidney Association recomienda tratamiento dialítico urgente. (UK Kidney Association)\n\n🔥 TRAMPA DE EXAMEN\nLa pregunta intenta que confundas:\n\"Bajar el K⁺ plasmático\"\ncon\n\"Eliminar el K⁺ del organismo\".\nNo son lo mismo.\nINSULINA = REDISTRIBUYE\nSALBUTAMOL = REDISTRIBUYE\nHEMODIÁLISIS = ELIMINA\n\n🎯 REGLA DE ORO\nEn hiperpotasemia: primero protege el corazón, luego mete K⁺ en la célula y finalmente sácalo del cuerpo.\nCalcio → corazón 🫀Insulina/glucosa → célula 🔄Diálisis/diuréticos/quelantes → organismo 🚽\n\n📚 REFERENCIAS\nUK Kidney Association. Clinical Practice Guideline: Management of Hyperkalaemia in Adults, 2023. (UK Kidney Association)\nHall JE. Guyton y Hall. Tratado de Fisiología Médica."
  },
  {
    "id": "dr-q-eval2-20",
    "examArea": "Nefrología / Equilibrio ácido-base",
    "topic": "Nefrología / Equilibrio ácido-base",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Sobre el equilibrio ácido-base una NO es correcta:",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "La acidosis puede tener dos orígenes, respiratorio si la causa es una acumulación de CO₂, y metabólico si la causa es un descenso del bicarbonato sérico."
      },
      {
        "id": "B",
        "label": "B",
        "text": "En patologías crónicas agudizadas hay que tener en cuenta la corrección esperable para hacer un diagnóstico correcto."
      },
      {
        "id": "C",
        "label": "C",
        "text": "En las acidosis metabólicas es útil conocer el anion gap, o hiato aniónico, pues orienta hacia distintas patologías."
      },
      {
        "id": "D",
        "label": "D",
        "text": "El anion gap se calcula restando a los iones positivos (Na y K) los iones negativos (HCO₃ y Cl)."
      },
    ],
    "correctOptionId": "D",
    "explanation": "La afirmación D es la incorrecta porque el anion gap se calcula como la diferencia entre los cationes medidos y los aniones medidos. Puede expresarse como (Na⁺ + K⁺) − (Cl⁻ + HCO₃⁻), aunque en la práctica clínica habitualmente se omite el K⁺ y se utiliza Na⁺ − (Cl⁻ + HCO₃⁻). (CNIB)\n\nLO QUE DEBES SABER PARA EL EXAMEN\nEl anion gap (AG) permite detectar la presencia de aniones no medidos y es especialmente útil para clasificar las acidosis metabólicas. (PubMed Central (PMC))\nLa fórmula más utilizada es:\nAG = Na⁺ − (Cl⁻ + HCO₃⁻)\nTambién puede calcularse incluyendo el potasio:\nAG = (Na⁺ + K⁺) − (Cl⁻ + HCO₃⁻)\nLa fórmula sin K⁺ es la más utilizada clínicamente. (PubMed Central (PMC))",
    "keyPoints": [],
    "theoryContent": "La afirmación D es la incorrecta porque el anion gap se calcula como la diferencia entre los cationes medidos y los aniones medidos. Puede expresarse como (Na⁺ + K⁺) − (Cl⁻ + HCO₃⁻), aunque en la práctica clínica habitualmente se omite el K⁺ y se utiliza Na⁺ − (Cl⁻ + HCO₃⁻). (CNIB)\n\nLO QUE DEBES SABER PARA EL EXAMEN\nEl anion gap (AG) permite detectar la presencia de aniones no medidos y es especialmente útil para clasificar las acidosis metabólicas. (PubMed Central (PMC))\nLa fórmula más utilizada es:\nAG = Na⁺ − (Cl⁻ + HCO₃⁻)\nTambién puede calcularse incluyendo el potasio:\nAG = (Na⁺ + K⁺) − (Cl⁻ + HCO₃⁻)\nLa fórmula sin K⁺ es la más utilizada clínicamente. (PubMed Central (PMC))\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nA. Acidosis respiratoria vs. metabólica ✅\nCorrecta.\nLa acidosis respiratoria se produce por aumento de CO₂, mientras que la acidosis metabólica se caracteriza por disminución del HCO₃⁻.\n👉 Respiratoria = problema primario del CO₂.\n👉 Metabólica = problema primario del HCO₃⁻.\n\nB. Patologías crónicas agudizadas ✅\nCorrecta.\nCuando existe una alteración crónica que se agudiza, debemos conocer cuál sería la compensación fisiológica esperada.\nEsto permite reconocer trastornos mixtos.\n\nC. Anion gap en la acidosis metabólica ✅\nCorrecta.\nEl AG permite orientar la causa de una acidosis metabólica.\nUn aumento del AG indica acumulación de aniones no medidos, como ocurre, por ejemplo, con lactato o cuerpos cetónicos. (CNIB)\n\nD. Cálculo del anion gap ❌\nEsta es la falsa.\nLa frase dice que se deben restar:\niones positivos − iones negativos\nPero la forma correcta debe expresarse como:\ncationes medidos − aniones medidos\nEs decir:\nNa⁺ − (Cl⁻ + HCO₃⁻)\no, si se incluye el potasio:\n(Na⁺ + K⁺) − (Cl⁻ + HCO₃⁻). (CNIB)\n\n🔥 TRAMPA DE EXAMEN\nLa palabra \"gap\" puede confundir.\nNo significa que exista realmente un \"hueco\" entre cargas positivas y negativas: el plasma debe mantener la electroneutralidad. El cálculo refleja principalmente la presencia de iones no medidos. (MSD Manuals)\nFórmula que debes llevarte:\nAG = Na⁺ − (Cl⁻ + HCO₃⁻)\n👉 Sin K⁺ = fórmula clínica habitual.\n\n🎯 PERLA DEL DR Q\nAnion gap = lo que mido de positivo − lo que mido de negativo.\nNa − (Cl + HCO₃)\nY recuerda:\n↑ AG → piensa en aniones no medidos.\n\n📚 REFERENCIAS\nMSD Manual Professional Edition – Acid-Base Disorders. (MSD Manuals)\nStatPearls / NCBI Bookshelf – Biochemistry, Anion Gap. (CNIB)\nOh et al. – Collection and Interpretation of Laboratory Data. (PubMed Central (PMC))"
  },
  {
    "id": "dr-q-eval2-21",
    "examArea": "Nefrología / Equilibrio ácido-base – Intoxicaciones",
    "topic": "Nefrología / Equilibrio ácido-base – Intoxicaciones",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Acude a urgencias un paciente, camionero de profesión, que ha tomado varios “chupitos” de un líquido verde que el camarero creía que era licor de hierbas, pero de sabor extraño. Al poco de la ingesta, el paciente comenzó con mareo, debilidad, náuseas, y una respiración rápida y profunda. En la analítica que usted realiza observa pH 7.09, HCO₃ 8 mmol/L, Na⁺ 143 mmol/L, K⁺ 3.7 mmol/L y Cl⁻ 112 mmol/L. Orina muy poco, y en la orina que se obtiene destaca la presencia de cristales. ¿Cuál de las siguientes causas de acidosis metabólica es más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Cetoacidosis alcohólica."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Acidosis láctica."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Intoxicación por metanol."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Intoxicación por etilenglicol."
      },
    ],
    "correctOptionId": "D",
    "explanation": "El dato que prácticamente delata el diagnóstico es la combinación de:\nAcidosis metabólica grave + anion gap elevado + cristales urinarios + oliguria.\nEl etilenglicol se metaboliza a ácido glicólico y ácido oxálico, responsables de la acidosis metabólica y de la formación de cristales de oxalato cálcico, que pueden producir lesión tubular y fracaso renal agudo. (CNIB)\n\nLO QUE DEBES SABER PARA EL EXAMEN\nPrimero calcula el anion gap:\nAG = Na⁺ − (Cl⁻ + HCO₃⁻)\nAG = 143 − (112 + 8) = 23 mEq/L\n👉 Existe acidosis metabólica con anion gap elevado.\nAhora añade la pista clínica:\nCristales urinarios + oliguria → piensa en ETILENGLICOL.",
    "keyPoints": [],
    "theoryContent": "El dato que prácticamente delata el diagnóstico es la combinación de:\nAcidosis metabólica grave + anion gap elevado + cristales urinarios + oliguria.\nEl etilenglicol se metaboliza a ácido glicólico y ácido oxálico, responsables de la acidosis metabólica y de la formación de cristales de oxalato cálcico, que pueden producir lesión tubular y fracaso renal agudo. (CNIB)\n\nLO QUE DEBES SABER PARA EL EXAMEN\nPrimero calcula el anion gap:\nAG = Na⁺ − (Cl⁻ + HCO₃⁻)\nAG = 143 − (112 + 8) = 23 mEq/L\n👉 Existe acidosis metabólica con anion gap elevado.\nAhora añade la pista clínica:\nCristales urinarios + oliguria → piensa en ETILENGLICOL.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nA. Cetoacidosis alcohólica ❌\nPuede producir una acidosis metabólica con anion gap elevado, especialmente en pacientes con consumo importante de alcohol asociado a ayuno y vómitos.\nPero no explica adecuadamente la presencia de cristales urinarios y la oliguria.\n\nB. Acidosis láctica ❌\nTambién produce una acidosis metabólica con anion gap elevado.\nSin embargo, el caso no aporta datos que sugieran hipoperfusión, shock o una causa evidente de aumento del lactato.\nLa presencia de cristales urinarios orienta mucho más hacia una intoxicación por etilenglicol.\n\nC. Intoxicación por metanol ❌\nEl metanol también puede producir una acidosis metabólica con anion gap elevado, pero su pista clásica es diferente:\nMetanol → alteraciones visuales / toxicidad del nervio óptico.\nSu metabolito tóxico principal es el ácido fórmico.\n👉 Metanol = visión.\n\nD. Intoxicación por etilenglicol ✅\nEsta es la correcta.\nEl etilenglicol puede encontrarse en productos industriales y anticongelantes.\nSu metabolismo produce:\nEtilenglicol → glicolaldehído → ácido glicólico → ácido glioxílico → ácido oxálico\n↓\nÁcidos orgánicos → ↑ anion gap\n↓\nOxalato cálcico → cristales urinarios + lesión renal\nLa combinación de anion gap elevado y cristaluria por oxalato cálcico es una pista clásica de esta intoxicación. (PubMed)\n\n🔥 TRAMPA DE EXAMEN\nCuando veas:\nACIDOSIS METABÓLICA + CRISTALES URINARIOS\npiensa inmediatamente:\nETILENGLICOL\nY diferencia las intoxicaciones por alcoholes:\nIntoxicación\nPista\nMetanol\n👁️ Alteraciones visuales\nEtilenglicol\n💎 Oxalato cálcico + lesión renal\nEtanol\n🍺 Intoxicación alcohólica\nIsopropanol\n🧪 Cetosis sin acidosis metabólica significativa\n\n🎯 PERLA DEL DR Q\n“Cristales + acidosis con anion gap = etilenglicol hasta demostrar lo contrario.”\nY ojo con la evolución:\nInicialmente: puede existir gap osmolar elevado por el propio etilenglicol.\nPosteriormente: al metabolizarse → aumenta el anion gap y aparecen los metabolitos tóxicos.\nLa lesión renal se relaciona especialmente con el depósito de oxalato cálcico en los túbulos. (CNIB)\n\n📚 REFERENCIAS\nHall JE. Guyton y Hall. Tratado de Fisiología Médica.\nManual AMIR – Nefrología / Equilibrio ácido-base.\nStatPearls / NCBI Bookshelf. Ethylene Glycol Toxicity. (CNIB)\nCadnapaphornchai P, et al. Ethylene glycol poisoning: diagnosis based on high osmolal and anion gaps and crystalluria. Annals of Emergency Medicine. (PubMed)"
  },
  {
    "id": "dr-q-eval2-22",
    "examArea": "Nefrología / Gases arteriales y compensación (alta)",
    "topic": "Nefrología / Gases arteriales y compensación (alta)",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente de 64 años con antecedentes de EPOC consulta por aumento de la disnea y somnolencia. En la gasometría arterial presenta: pH 7,28, PaCO₂ 60 mmHg y HCO₃⁻ 27 mEq/L. ¿Cuál de las siguientes alteraciones ácido-base es más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Acidosis metabólica con compensación respiratoria."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Acidosis respiratoria aguda."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Acidosis respiratoria crónica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Alcalosis metabólica con compensación respiratoria."
      },
    ],
    "correctOptionId": "B",
    "explanation": "El paciente presenta acidemia (pH 7,28) con PaCO₂ elevada, por lo que el trastorno primario es una acidosis respiratoria. La elevación del HCO₃⁻ hasta 27 mEq/L indica compensación metabólica, pero es insuficiente para considerarla una acidosis respiratoria crónica. En la acidosis respiratoria aguda, el HCO₃⁻ aumenta aproximadamente 1–2 mEq/L por cada 10 mmHg de incremento de PaCO₂; en la crónica, aumenta aproximadamente 3–4 mEq/L por cada 10 mmHg. (Manuales Merck)\n\nLO QUE DEBES SABER PARA EL EXAMEN\nCuando interpretes una gasometría:\n1. Mira primero el pH\n< 7,35 → acidemia\n> 7,45 → alcalemia\n2. Mira PaCO₂ y HCO₃⁻\nPaCO₂ ↑ → acidosis respiratoria\nHCO₃⁻ ↓ → acidosis metabólica\nEn este caso:\npH ↓ + PaCO₂ ↑ → acidosis respiratoria.",
    "keyPoints": [],
    "theoryContent": "El paciente presenta acidemia (pH 7,28) con PaCO₂ elevada, por lo que el trastorno primario es una acidosis respiratoria. La elevación del HCO₃⁻ hasta 27 mEq/L indica compensación metabólica, pero es insuficiente para considerarla una acidosis respiratoria crónica. En la acidosis respiratoria aguda, el HCO₃⁻ aumenta aproximadamente 1–2 mEq/L por cada 10 mmHg de incremento de PaCO₂; en la crónica, aumenta aproximadamente 3–4 mEq/L por cada 10 mmHg. (Manuales Merck)\n\nLO QUE DEBES SABER PARA EL EXAMEN\nCuando interpretes una gasometría:\n1. Mira primero el pH\n< 7,35 → acidemia\n> 7,45 → alcalemia\n2. Mira PaCO₂ y HCO₃⁻\nPaCO₂ ↑ → acidosis respiratoria\nHCO₃⁻ ↓ → acidosis metabólica\nEn este caso:\npH ↓ + PaCO₂ ↑ → acidosis respiratoria.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nA. Acidosis metabólica ❌\nNo.\nEn una acidosis metabólica el trastorno primario sería un descenso del HCO₃⁻.\nAquí el bicarbonato está elevado a 27 mEq/L.\n\nB. Acidosis respiratoria aguda ✅\nEsta es la correcta.\nTenemos:\npH 7,28 ↓\nPaCO₂ 60 ↑\nHCO₃⁻ 27 ↑\nEl aumento de CO₂ es el responsable primario de la acidemia.\nLa compensación renal comienza aumentando el bicarbonato, pero todavía es limitada en un proceso agudo.\nSi la PaCO₂ aumenta de 40 → 60 mmHg:\n↑20 mmHg\nEn una acidosis respiratoria aguda esperamos aproximadamente:\n↑ HCO₃⁻ 2–4 mEq/L\nPor tanto, un HCO₃⁻ de aproximadamente 26–28 mEq/L encaja con un proceso agudo. (Manuales Merck)\n\nC. Acidosis respiratoria crónica ❌\nEl paciente tiene EPOC, lo que puede hacerte caer en la trampa.\nPero tener EPOC no significa automáticamente que la gasometría represente una acidosis respiratoria crónica.\nEn la acidosis respiratoria crónica existe una compensación renal mucho mayor:\n↑ HCO₃⁻ ≈ 3–4 mEq/L por cada ↑10 mmHg de PaCO₂. (Manuales Merck)\nCon una PaCO₂ de 60 mmHg, esperaríamos un bicarbonato considerablemente más elevado que 27 mEq/L.\n\nD. Alcalosis metabólica ❌\nNo corresponde porque el pH está disminuido y el HCO₃⁻ no está elevado de forma primaria.\n\n🔥 TRAMPA DE EXAMEN\nNo te dejes engañar por el antecedente de EPOC.\nLa pregunta realmente quiere que determines:\n¿Cuánto ha aumentado el HCO₃⁻ para el aumento de PaCO₂?\nRESPIRATORIA AGUDA\nHCO₃⁻ ↑ 1–2 mEq/L / cada +10 mmHg CO₂\nRESPIRATORIA CRÓNICA\nHCO₃⁻ ↑ 3–4 mEq/L / cada +10 mmHg CO₂ (Manuales Merck)\n\n🎯 REGLA DE ORO\nCO₂ = pulmón.HCO₃⁻ = riñón.\nPaCO₂ ↑ + pH ↓ → acidosis respiratoria.\nDespués pregunta:\n¿El HCO₃⁻ compensó lo suficiente?\nAhí distingues aguda vs. crónica.\n\n📚 REFERENCIAS\nManual Merck, Trastornos del equilibrio ácido-base. (Manuales Merck)\nManual Merck, Cambios primarios y compensaciones en los trastornos del equilibrio ácido-base. (Manuales Merck)"
  },
  {
    "id": "dr-q-eval2-23",
    "examArea": "NEFROLOGÍA / EQUILIBRIO ÁCIDO-BASE",
    "topic": "NEFROLOGÍA / EQUILIBRIO ÁCIDO-BASE",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente de 48 años consulta por diarrea abundante de varios días de evolución. Presenta debilidad y taquipnea. En la gasometría arterial se encuentra pH 7,25, HCO₃⁻ 14 mEq/L y PaCO₂ 30 mmHg. ¿Cuál de las siguientes afirmaciones es correcta?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Presenta una acidosis metabólica con compensación respiratoria adecuada."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Presenta una acidosis respiratoria con compensación metabólica."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Presenta una acidosis metabólica asociada a una acidosis respiratoria."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Presenta una alcalosis metabólica con compensación respiratoria."
      },
    ],
    "correctOptionId": "A",
    "explanation": "El primer paso es identificar el trastorno primario:\npH 7,25 ↓ → acidemia\nHCO₃⁻ 14 mEq/L ↓ → acidosis metabólica\nPaCO₂ 30 mmHg ↓ → respuesta respiratoria compensatoria\nAhora debemos determinar si la compensación respiratoria es adecuada mediante la fórmula de Winter.\nCon un HCO₃⁻ de 14 mEq/L:\nPaCO₂ esperada = 1,5 × 14 + 8 = 29 mmHg\nCon el margen de ±2:\nPaCO₂ esperada = 27–31 mmHg\nLa PaCO₂ real es 30 mmHg, por lo tanto se encuentra dentro del rango esperado.\n👉 Acidosis metabólica con compensación respiratoria adecuada.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nCuando encuentres una gasometría, sigue siempre este orden:\n1. Determina qué ocurre con el pH\npH < 7,35 → acidemia\npH > 7,45 → alcalemia\nAquí:\n7,25 → acidemia.\n2. Determina el trastorno primario\nSi el pH está bajo:\nHCO₃⁻ ↓ → acidosis metabólica\nPaCO₂ ↑ → acidosis respiratoria\nAquí:\nHCO₃⁻ = 14 ↓\nPor tanto:\n👉 Acidosis metabólica.\n3. Comprueba la compensación\nEn la acidosis metabólica, el organismo responde aumentando la ventilación para eliminar CO₂.\nPor eso:\n↓ HCO₃⁻ → hiperventilación → ↓ PaCO₂\nPero hay que determinar si la caída del CO₂ es la esperada.\nAhí aparece la fórmula de Winter.",
    "keyPoints": [],
    "theoryContent": "El primer paso es identificar el trastorno primario:\npH 7,25 ↓ → acidemia\nHCO₃⁻ 14 mEq/L ↓ → acidosis metabólica\nPaCO₂ 30 mmHg ↓ → respuesta respiratoria compensatoria\nAhora debemos determinar si la compensación respiratoria es adecuada mediante la fórmula de Winter.\nCon un HCO₃⁻ de 14 mEq/L:\nPaCO₂ esperada = 1,5 × 14 + 8 = 29 mmHg\nCon el margen de ±2:\nPaCO₂ esperada = 27–31 mmHg\nLa PaCO₂ real es 30 mmHg, por lo tanto se encuentra dentro del rango esperado.\n👉 Acidosis metabólica con compensación respiratoria adecuada.\n\nLO QUE DEBES SABER PARA EL EXAMEN\nCuando encuentres una gasometría, sigue siempre este orden:\n1. Determina qué ocurre con el pH\npH < 7,35 → acidemia\npH > 7,45 → alcalemia\nAquí:\n7,25 → acidemia.\n2. Determina el trastorno primario\nSi el pH está bajo:\nHCO₃⁻ ↓ → acidosis metabólica\nPaCO₂ ↑ → acidosis respiratoria\nAquí:\nHCO₃⁻ = 14 ↓\nPor tanto:\n👉 Acidosis metabólica.\n3. Comprueba la compensación\nEn la acidosis metabólica, el organismo responde aumentando la ventilación para eliminar CO₂.\nPor eso:\n↓ HCO₃⁻ → hiperventilación → ↓ PaCO₂\nPero hay que determinar si la caída del CO₂ es la esperada.\nAhí aparece la fórmula de Winter.\n\nEXPLICACIÓN DEL PROFE: BY DR Q.\n\n🧠 PASO 1. ¿El paciente está acidémico o alcalémico?\nEl pH es 7,25.\nEstá por debajo de 7,35.\n👉 Acidemia.\n\n🧠 PASO 2. ¿Es metabólica o respiratoria?\nEl HCO₃⁻ está disminuido:\nHCO₃⁻ = 14 mEq/L\nEsto explica la acidemia.\n👉 Acidosis metabólica primaria.\nLa PaCO₂ también está disminuida:\nPaCO₂ = 30 mmHg\nPero esto no significa que exista una alcalosis respiratoria primaria.\nEn este contexto representa la respuesta compensatoria del pulmón.\n\n🧠 PASO 3. ¿La compensación es adecuada?\nAquí está la verdadera dificultad de la pregunta.\nEn una acidosis metabólica debemos calcular cuánto debería caer la PaCO₂.\nAplicamos Winter:\nPaCO₂ esperada = 1,5 × HCO₃⁻ + 8 ± 2\nCon HCO₃⁻ = 14:\n29 ± 2 mmHg\nPor lo tanto, esperamos una PaCO₂ entre:\n27 y 31 mmHg.\nLa PaCO₂ medida es:\n30 mmHg.\n👉 Está dentro del rango.\nConclusión: compensación respiratoria adecuada.\n\n¿POR QUÉ NO SON LAS OTRAS?\nB. Acidosis respiratoria con compensación metabólica ❌\nPara que el trastorno primario fuera una acidosis respiratoria esperaríamos:\n↑ PaCO₂\nPero el paciente tiene:\nPaCO₂ = 30 mmHg ↓\nPor lo tanto, no puede ser una acidosis respiratoria primaria.\n\nC. Acidosis metabólica asociada a acidosis respiratoria ❌\nEsta opción sería correcta si la PaCO₂ estuviera más elevada de lo esperado para el grado de acidosis metabólica.\nPor ejemplo, con HCO₃⁻ de 14 mEq/L esperaríamos una PaCO₂ cercana a 29 ± 2.\nSi encontráramos una PaCO₂ de 45–50 mmHg, sospecharíamos:\n👉 Acidosis metabólica + acidosis respiratoria.\nPero aquí la PaCO₂ es 30 mmHg, exactamente dentro de la compensación esperada.\n\nD. Alcalosis metabólica con compensación respiratoria ❌\nUna alcalosis metabólica tendría:\n↑ HCO₃⁻\nAquí ocurre exactamente lo contrario:\nHCO₃⁻ = 14 ↓\nPor tanto, esta opción no corresponde.\n\n⚠️ ERROR FRECUENTE\nUn error clásico es pensar:\n“PaCO₂ baja = alcalosis respiratoria.”\nNo necesariamente.\nPrimero hay que identificar el trastorno primario.\nEn este caso:\nHCO₃⁻ ↓ → acidosis metabólica\nEl pulmón responde:\nhiperventilación → ↓ PaCO₂\nPor eso una PaCO₂ baja puede ser simplemente compensación.\n\n🔥 TRAMPA DE EXAMEN\nSi tienes:\npH ↓ + HCO₃⁻ ↓ + PaCO₂ ↓\n👉 Acidosis metabólica.\nPero todavía falta una pregunta:\n¿La compensación es adecuada?\nUtiliza Winter.\nPaCO₂ dentro de lo esperado → compensación adecuada.\nPaCO₂ mayor de lo esperado → acidosis respiratoria agregada.\nPaCO₂ menor de lo esperado → alcalosis respiratoria agregada.\n\n🎯 PERLA DEL DR Q\n“En la acidosis metabólica, no basta con identificar el bicarbonato bajo: hay que mirar si el pulmón está compensando como debe.”\nHCO₃⁻ ↓ → el pulmón debe bajar la PaCO₂.\nSi la PaCO₂ encaja con Winter, tienes una acidosis metabólica simple con compensación adecuada.\n📚 REFERENCIAS\nManual Merck, Trastornos del equilibrio ácido-base. (Manuales Merck)\nManual Merck, Cambios primarios y compensaciones en los trastornos del equilibrio ácido-base. (Manuales Merck)"
  },
  {
    "id": "dr-q-eval2-24",
    "examArea": "NEFROLOGÍA / EQUILIBRIO ÁCIDO-BASE",
    "topic": "NEFROLOGÍA / EQUILIBRIO ÁCIDO-BASE",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Una mujer de 32 años, previamente sana, consulta por hiperventilación, parestesias peribucales y mareo que comenzaron hace aproximadamente 30 minutos durante una crisis de ansiedad. La gasometría arterial muestra pH 7,52, PaCO₂ 25 mmHg y HCO₃⁻ 23 mEq/L. ¿Cuál de las siguientes alteraciones ácido-base presenta la paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Alcalosis respiratoria aguda sin compensación metabólica renal significativa."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Alcalosis respiratoria crónica con compensación metabólica adecuada."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Alcalosis metabólica con compensación respiratoria adecuada."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Trastorno mixto con alcalosis metabólica y alcalosis respiratoria."
      },
    ],
    "correctOptionId": "A",
    "explanation": "La paciente presenta alcalemia (pH 7,52) y una PaCO₂ marcadamente disminuida (25 mmHg), lo que identifica una alcalosis respiratoria primaria. Como el cuadro comenzó hace solo 30 minutos, todavía no ha transcurrido el tiempo necesario para desarrollar una compensación renal significativa mediante modificación de la reabsorción y excreción de bicarbonato. Por ello, el HCO₃⁻ permanece prácticamente normal, con un valor de 23 mEq/L. La compensación renal importante de la alcalosis respiratoria aparece después de varias horas y se establece durante los días siguientes. \n\nLO QUE DEBES SABER PARA EL EXAMEN\nEn una alcalosis respiratoria:\nHiperventilación → ↓ PaCO₂ → ↑ pH\nLa compensación ocurre inicialmente por amortiguación química inmediata y posteriormente mediante el riñón, que disminuye la excreción de H⁺ y reduce la reabsorción de bicarbonato.\nAlcalosis respiratoria aguda\nPor cada ↓10 mmHg de PaCO₂:\n→ HCO₃⁻ ↓ aproximadamente 1-2 mEq/L.\nAlcalosis respiratoria crónica\nPor cada ↓10 mmHg de PaCO₂:\n→ HCO₃⁻ ↓ aproximadamente 4-5 mEq/L.\nTema: Interpretación de gases arteriales y compensación ácido-base.",
    "keyPoints": [],
    "theoryContent": "La paciente presenta alcalemia (pH 7,52) y una PaCO₂ marcadamente disminuida (25 mmHg), lo que identifica una alcalosis respiratoria primaria. Como el cuadro comenzó hace solo 30 minutos, todavía no ha transcurrido el tiempo necesario para desarrollar una compensación renal significativa mediante modificación de la reabsorción y excreción de bicarbonato. Por ello, el HCO₃⁻ permanece prácticamente normal, con un valor de 23 mEq/L. La compensación renal importante de la alcalosis respiratoria aparece después de varias horas y se establece durante los días siguientes. \n\nLO QUE DEBES SABER PARA EL EXAMEN\nEn una alcalosis respiratoria:\nHiperventilación → ↓ PaCO₂ → ↑ pH\nLa compensación ocurre inicialmente por amortiguación química inmediata y posteriormente mediante el riñón, que disminuye la excreción de H⁺ y reduce la reabsorción de bicarbonato.\nAlcalosis respiratoria aguda\nPor cada ↓10 mmHg de PaCO₂:\n→ HCO₃⁻ ↓ aproximadamente 1-2 mEq/L.\nAlcalosis respiratoria crónica\nPor cada ↓10 mmHg de PaCO₂:\n→ HCO₃⁻ ↓ aproximadamente 4-5 mEq/L.\nTema: Interpretación de gases arteriales y compensación ácido-base.\n\nEXPLICACIÓN DEL PROFE: BY DR Q\n\nPASO 1. Mira el pH\npH = 7,52\n↓\nHay:\nALCALEMIA\n\nPASO 2. Identifica el trastorno primario\nPaCO₂ = 25 mmHg\nEstá disminuida.\nComo el CO₂ se comporta como un ácido:\n↓ CO₂ → ↓ ácido carbónico → ↑ pH\n↓\nAlcalosis respiratoria primaria.\n\nPASO 3. Ahora mira el tiempo\nLos síntomas comenzaron hace solamente 30 minutos.\nEl riñón todavía no ha tenido tiempo de realizar una compensación metabólica importante.\nLa compensación renal significativa requiere tiempo y se desarrolla posteriormente; en la alcalosis respiratoria crónica la adaptación renal se establece durante varios días. \nPor eso el HCO₃⁻ está:\n23 mEq/L\nPrácticamente normal.\n\n¿Por qué no necesitamos una gran caída del bicarbonato?\nEn los primeros minutos existe una respuesta de amortiguación química que puede producir una pequeña disminución del bicarbonato.\nLa compensación renal verdadera vendrá después:\n↓ PaCO₂ sostenida\n↓\nRiñón ↓ reabsorción de HCO₃⁻\n↓\n↑ excreción de bicarbonato\n↓\n↓ HCO₃⁻ plasmático\nPero eso no sucede plenamente en 30 minutos.\n\n¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nB. Alcalosis respiratoria crónica ❌\nNo puede ser crónica porque los síntomas comenzaron hace apenas 30 minutos.\nAdemás, una alcalosis respiratoria crónica tendría una disminución mucho mayor del bicarbonato para una PaCO₂ de 25 mmHg. (Merck Manuals)\n\nC. Alcalosis metabólica ❌\nLa alteración primaria de una alcalosis metabólica sería:\n↑ HCO₃⁻\nAquí el bicarbonato es 23 mEq/L, no está elevado.\n\nD. Trastorno mixto ❌\nNo hay evidencia de alcalosis metabólica asociada. El descenso del CO₂ explica el aumento del pH y el bicarbonato prácticamente normal es compatible con la fase aguda.\n\n🔥 TRAMPA DE EXAMEN\nNo basta con reconocer:\nPaCO₂ ↓ = alcalosis respiratoria.\nDespués tienes que preguntar:\n¿Cuánto tiempo lleva el trastorno?\nPorque:\nRESPIRATORIO AGUDO → compensación renal mínima\nRESPIRATORIO CRÓNICO → compensación renal importante\n\n🎯 REGLA DE ORO\nEL PULMÓN CAMBIA RÁPIDO; EL RIÑÓN COMPENSA LENTO.\nEn una alteración respiratoria que acaba de comenzar:\nNo esperes un gran cambio del HCO₃⁻.\n\nPERLAS DE EXAMEN\n✅ Alcalosis respiratoria = PaCO₂ baja + pH alto.\n✅ En la fase aguda, el HCO₃⁻ cambia poco.\n✅ En la fase crónica, el riñón aumenta la pérdida de bicarbonato y la compensación es mucho mayor. (Merck Manuals)\n✅ Ansiedad, dolor, hipoxemia y algunas enfermedades del SNC pueden producir hiperventilación y alcalosis respiratoria. (Merck Manuals)\n✅ En gases arteriales, el tiempo de evolución es fundamental para determinar si la compensación observada es apropiada.\n📚 REFERENCIAS\nHall JE. Guyton y Hall. Tratado de Fisiología Médica.\nBoron WF, Boulpaep EL. Medical Physiology.\nManual Merck. Trastornos del equilibrio ácido-base. (Merck Manuals)\nManual Merck. Alcalosis respiratoria. (Merck Manuals)"
  },
  {
    "id": "dr-q-eval2-25",
    "examArea": "NEFROLOGÍA / ENFERMEDAD RENAL CRÓNICA",
    "topic": "NEFROLOGÍA / ENFERMEDAD RENAL CRÓNICA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un hombre de 58 años con hipertensión arterial y diabetes mellitus tipo 2 de 10 años de evolución es valorado en consulta de seguimiento; presenta presión arterial de 138/82 mmHg, creatinina sérica de 1,7 mg/dL, tasa de filtración glomerular estimada de 46 mL/min/1,73 m² y relación albúmina/creatinina urinaria de 420 mg/g, sin datos de lesión renal aguda y con estos hallazgos persistentes durante más de 3 meses; recibe losartán y metformina, y su médico desea implementar una estrategia que disminuya el riesgo de progresión de la enfermedad renal y de eventos cardiovasculares. ¿Cuál de las siguientes intervenciones farmacológicas ofrece mayor beneficio renal en este paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Iniciar un inhibidor del cotransportador sodio-glucosa tipo 2 (SGLT2), como empagliflozina."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Suspender el bloqueo del sistema renina-angiotensina para evitar el deterioro de la filtración glomerular."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Añadir un diurético de asa como tratamiento específico para reducir la albuminuria."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Sustituir el losartán por un calcioantagonista dihidropiridínico para mejorar la función renal."
      },
    ],
    "correctOptionId": "A",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEste paciente tiene enfermedad renal crónica (ERC) con una TFG estimada de 46 mL/min/1,73 m², compatible con G3a, y albuminuria de 420 mg/g, correspondiente a A3. La combinación de disminución persistente de la TFG y albuminuria importante identifica a un paciente con riesgo elevado de progresión renal y cardiovascular. La guía KDIGO 2024 recomienda los iSGLT2 en pacientes con ERC y diabetes tipo 2, y también en pacientes con ERC con TFG ≥20 mL/min/1,73 m² y albuminuria significativa, por su capacidad de reducir la progresión de la enfermedad renal y eventos cardiovasculares. (KDIGO)",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEste paciente tiene enfermedad renal crónica (ERC) con una TFG estimada de 46 mL/min/1,73 m², compatible con G3a, y albuminuria de 420 mg/g, correspondiente a A3. La combinación de disminución persistente de la TFG y albuminuria importante identifica a un paciente con riesgo elevado de progresión renal y cardiovascular. La guía KDIGO 2024 recomienda los iSGLT2 en pacientes con ERC y diabetes tipo 2, y también en pacientes con ERC con TFG ≥20 mL/min/1,73 m² y albuminuria significativa, por su capacidad de reducir la progresión de la enfermedad renal y eventos cardiovasculares. (KDIGO)\n\n🔥 EXPLICACIÓN DEL PROFE: BY DR Q\n\n1. Primero: reconoce el patrón de ERC\nNo basta con encontrar una creatinina elevada.\nPara hablar de enfermedad renal crónica, la alteración debe persistir durante ≥3 meses. En este caso ya tenemos ese criterio.\nLa clasificación se hace mediante dos dimensiones:\nG = función renal según TFGA = albuminuria según relación albúmina/creatinina\nNuestro paciente:\nTFG = 46 mL/min/1,73 m² → G3a\nACR = 420 mg/g → A3\nPor tanto:\nERC G3a A3\nY esto es importante porque no todos los pacientes con ERC tienen el mismo riesgo.\n2. ¿Por qué la albuminuria importa tanto?\nLa albuminuria no es solamente un marcador de daño renal: también se relaciona con el riesgo de progresión de ERC y con el riesgo cardiovascular.\nUna albuminuria de 420 mg/g es claramente patológica y coloca al paciente en una categoría de riesgo elevada.\n🎯 REGLA DE ORO:ERC = piensa siempre en TFG + albuminuria.\n3. ¿Por qué el iSGLT2 es la respuesta?\nLos inhibidores SGLT2 producen efectos renales que van mucho más allá del simple control de la glucosa.\nAl bloquear la reabsorción de glucosa y sodio en el túbulo proximal, aumenta la llegada de sodio a la mácula densa y se favorece la restauración de la retroalimentación tubuloglomerular. Esto reduce la hiperfiltración glomerular y la presión intraglomerular.\nEl resultado final es una disminución de la progresión de la enfermedad renal y beneficios cardiovasculares.\nKDIGO 2024 recomienda iSGLT2 en pacientes con ERC y diabetes tipo 2, y específicamente contempla su uso con TFG ≥20 mL/min/1,73 m² y ACR ≥200 mg/g. Este paciente tiene TFG 46 y ACR 420, por lo que encaja claramente. (KDIGO)\n4. ¿Qué ocurre con la creatinina al iniciar un iSGLT2?\n🔥 TRAMPA DE EXAMEN\nAl iniciar un iSGLT2 puede aparecer una pequeña disminución inicial y reversible de la TFG.\nEsto no significa necesariamente lesión renal aguda ni obliga a suspender el medicamento.\nKDIGO señala que esta disminución inicial reversible de la TFG es esperable y, por sí sola, no constituye una razón para retirar el tratamiento. (KDIGO)\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nB. Suspender el losartán\nIncorrecto.\nEl paciente tiene albuminuria A3, por lo que el bloqueo del sistema renina-angiotensina continúa siendo una estrategia fundamental.\nLos IECA/ARA-II disminuyen la presión intraglomerular mediante vasodilatación predominante de la arteriola eferente y reducen la albuminuria.\nNo se suspenden simplemente porque la creatinina pueda aumentar ligeramente después de iniciarlos o ajustarlos. KDIGO recomienda vigilar creatinina y potasio tras iniciar o aumentar estos fármacos. (KDIGO)\nC. Añadir un diurético de asa\nIncorrecto.\nLos diuréticos de asa son fundamentales para controlar sobrecarga de volumen, edema o hipertensión en determinados pacientes, pero no son el tratamiento nefroprotector de elección para disminuir la progresión de la ERC albuminúrica.\nD. Sustituir losartán por un calcioantagonista\nIncorrecto.\nUn calcioantagonista puede ser útil para el control de la presión arterial, pero en un paciente con ERC albuminúrica el bloqueo del sistema renina-angiotensina tiene un papel específico en la reducción de la albuminuria y protección renal.\nNo tendría sentido retirar el ARA-II simplemente para reemplazarlo por un calcioantagonista.\n\n🔥 TRAMPA DE EXAMEN\n“La TFG bajó después de iniciar tratamiento” ≠ “el tratamiento dañó el riñón”.\nCon terapias hemodinámicamente activas, especialmente IECA/ARA-II e iSGLT2, puede aparecer una caída inicial de la TFG.\nLo importante es reconocer cuándo esa caída excede lo esperado y buscar causas adicionales de lesión renal. KDIGO considera que una reducción >30% de la TFG después de iniciar terapias hemodinámicamente activas amerita evaluación. (KDIGO)\n🎯 REGLA DE ORO DR Q\nERC + diabetes tipo 2 + albuminuria significativa + TFG ≥20 → piensa en iSGLT2.\nY recuerda:\nERC = TFG + albuminuria + tiempo ≥3 meses.\n💎 PERLAS DE EXAMEN\nG3a: TFG 45–59 mL/min/1,73 m².\nA3: ACR >300 mg/g.\nLa albuminuria es un marcador de daño renal y riesgo cardiovascular.\nLos iSGLT2 son fármacos nefroprotectores, no solamente hipoglucemiantes.\nUna caída inicial de TFG con iSGLT2 puede ser esperable y reversible.\nEn ERC albuminúrica, el bloqueo del sistema renina-angiotensina sigue siendo una pieza fundamental del tratamiento. (KDIGO)\n📚 REFERENCIAS\nKDIGO. 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney International. 2024;105(Suppl 4S):S117-S314. (KDIGO)\nKDIGO. Executive Summary of the 2024 Clinical Practice Guideline for the Evaluation and Management of CKD. Kidney International. 2024. (KDIGO)\nKDIGO. CKD Evaluation and Management Guideline resources and current recommendations. (KDIGO)"
  },
  {
    "id": "dr-q-eval2-26",
    "examArea": "NEFROLOGÍA / LESIÓN RENAL AGUDA VS. ENFERMEDAD RENAL CRÓNICA",
    "topic": "NEFROLOGÍA / LESIÓN RENAL AGUDA VS. ENFERMEDAD RENAL CRÓNICA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un hombre de 62 años consulta por creatinina sérica de 2,8 mg/dL; hace 8 meses tenía creatinina de 1,0 mg/dL, actualmente presenta hipertensión, anemia normocítica y ecografía renal con riñones pequeños y aumento de la ecogenicidad cortical, sin cambios recientes en su estado clínico. ¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Lesión renal aguda prerrenal."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Enfermedad renal crónica."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Lesión renal aguda intrínseca."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Lesión renal aguda posrenal."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa clave para diferenciar lesión renal aguda (LRA) de enfermedad renal crónica (ERC) es la temporalidad.\nAquí existen datos de cronicidad:\nCreatinina elevada durante un período prolongado.\nAnemia normocítica asociada a ERC.\nRiñones pequeños y ecogénicos, hallazgo típico de enfermedad renal crónica avanzada.\n🔥 TRAMPA DE EXAMEN: una creatinina elevada por sí sola no permite diferenciar LRA de ERC. Hay que buscar datos que indiquen cronicidad.\n🎯 REGLA DE ORO DR Q\nERC → ≥3 meses + datos de cronicidad.\nLRA → deterioro rápido de la función renal en horas a días.\n📚 REFERENCIAS\nKDIGO. 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney International. 2024.\nKDIGO. Clinical Practice Guideline for Acute Kidney Injury. Kidney International Supplements.",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa clave para diferenciar lesión renal aguda (LRA) de enfermedad renal crónica (ERC) es la temporalidad.\nAquí existen datos de cronicidad:\nCreatinina elevada durante un período prolongado.\nAnemia normocítica asociada a ERC.\nRiñones pequeños y ecogénicos, hallazgo típico de enfermedad renal crónica avanzada.\n🔥 TRAMPA DE EXAMEN: una creatinina elevada por sí sola no permite diferenciar LRA de ERC. Hay que buscar datos que indiquen cronicidad.\n🎯 REGLA DE ORO DR Q\nERC → ≥3 meses + datos de cronicidad.\nLRA → deterioro rápido de la función renal en horas a días.\n📚 REFERENCIAS\nKDIGO. 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney International. 2024.\nKDIGO. Clinical Practice Guideline for Acute Kidney Injury. Kidney International Supplements."
  },
  {
    "id": "dr-q-eval2-27",
    "examArea": "NEFROLOGÍA / ENFERMEDAD RENAL CRÓNICA",
    "topic": "NEFROLOGÍA / ENFERMEDAD RENAL CRÓNICA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente de 30 años consulta por un hallazgo incidental en una tomografía abdominal que evidencia ausencia de un riñón, sin antecedentes de nefrectomía; presenta una tasa de filtración glomerular estimada de 75 mL/min/1,73 m², sin proteinuria, hematuria ni otros marcadores de daño renal. ¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Enfermedad renal crónica estadio G2."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Lesión renal aguda de origen desconocido."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Agenesia renal unilateral con riñón único funcional."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Enfermedad renal crónica secundaria a pérdida renal unilateral."
      },
    ],
    "correctOptionId": "C",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa ausencia de un riñón en un paciente joven sin antecedente de nefrectomía sugiere una alteración congénita, siendo la agenesia renal unilateral una de las principales posibilidades.\nEn este caso, la TFG es de 75 mL/min/1,73 m², lo que corresponde a la categoría G2. Sin embargo, una TFG entre 60 y 89 no establece por sí sola el diagnóstico de enfermedad renal crónica. Para considerar ERC debe existir además un marcador de daño renal persistente durante ≥3 meses.\nPor lo tanto:\nRiñón único + TFG 75 + ausencia de daño renal ≠ necesariamente ERC.",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa ausencia de un riñón en un paciente joven sin antecedente de nefrectomía sugiere una alteración congénita, siendo la agenesia renal unilateral una de las principales posibilidades.\nEn este caso, la TFG es de 75 mL/min/1,73 m², lo que corresponde a la categoría G2. Sin embargo, una TFG entre 60 y 89 no establece por sí sola el diagnóstico de enfermedad renal crónica. Para considerar ERC debe existir además un marcador de daño renal persistente durante ≥3 meses.\nPor lo tanto:\nRiñón único + TFG 75 + ausencia de daño renal ≠ necesariamente ERC.\n\n🔥 EXPLICACIÓN DEL PROFE: BY DR Q\n\n1. Primero identifica qué significa “monorreno”\nEl término monorreno describe que el paciente tiene un solo riñón funcional o anatómicamente presente.\nPero hay que preguntarse:\n¿Por qué tiene un solo riñón?\nLas posibilidades incluyen:\nAgenesia renal: el riñón nunca se desarrolló.\nNefrectomía: el riñón fue retirado quirúrgicamente.\nRiñón atrófico o no funcional: existe, pero prácticamente no contribuye a la función renal.\nEn este caso no existe antecedente de nefrectomía y el hallazgo es incidental en un paciente joven, por lo que la opción más compatible es la agenesia renal unilateral.\n\n2. ¿Una TFG de 75 significa ERC?\nAquí está la principal trampa.\nUna TFG de:\n60–89 mL/min/1,73 m² → G2\nPero G2 no equivale automáticamente a ERC.\nPara diagnosticar ERC se necesita:\nAlteración de la estructura o función renal durante ≥3 meses\ny puede demostrarse mediante:\nTFG <60 mL/min/1,73 m², o\nmarcadores de daño renal, como albuminuria, alteraciones del sedimento urinario, alteraciones estructurales, entre otros.\nPor eso, en este paciente, una TFG de 75 aislada no basta para decir “ERC G2”.\n\n3. Entonces, ¿tener un solo riñón es una enfermedad renal crónica?\nNo necesariamente.\nUn paciente puede vivir con un riñón único congénito y mantener una función renal suficiente durante años.\nEl riñón restante puede experimentar hiperfiltración compensatoria, aumentando su capacidad funcional para mantener la homeostasis.\nPor eso, el diagnóstico anatómico:\nAgenesia renal unilateral\nno debe transformarse automáticamente en:\nEnfermedad renal crónica\nSon conceptos diferentes.\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. Enfermedad renal crónica estadio G2\nIncorrecta.\nAunque la TFG de 75 corresponde a G2, esto no permite diagnosticar ERC por sí solo.\nFalta demostrar un marcador adicional de daño renal persistente.\n🔥 Trampa: confundir una categoría de TFG con el diagnóstico de ERC.\n\nB. Lesión renal aguda de origen desconocido\nIncorrecta.\nNo existen datos de deterioro súbito de la función renal, aumento reciente de creatinina ni contexto compatible con lesión renal aguda.\nAdemás, el hallazgo principal es anatómico.\n\nD. Enfermedad renal crónica secundaria a pérdida renal unilateral\nIncorrecta.\nLa pérdida de un riñón no significa automáticamente que exista ERC.\nLa definición de ERC depende de la función renal y/o presencia de daño renal persistente, no simplemente del número de riñones presentes.\n\n🔥 TRAMPA DE EXAMEN\nUn paciente puede tener:\nTFG 75 → G2\ny NO tener ERC.\nPara que una categoría G1 o G2 sea considerada ERC debe existir además evidencia de daño renal.\n\n🎯 REGLA DE ORO DR Q\nG1 o G2 + sin marcador de daño renal ≠ ERC.\nY recuerda:\nRiñón único ≠ automáticamente enfermedad renal crónica.\nPrimero identifica la causa del riñón único y después evalúa si realmente existen criterios de ERC.\n\n💎 PERLAS DE EXAMEN\nMonorreno sin nefrectomía → piensa en anomalía congénita.\nTFG 60–89 → categoría G2.\nG2 sin daño renal → no basta para diagnosticar ERC.\nERC → alteración renal ≥3 meses.\nLa anatomía y la función deben analizarse por separado.\n\n📚 REFERENCIAS\nKDIGO. 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney International. 2024.\nKDIGO. KDIGO 2024 CKD Guideline – Executive Summary. Kidney International. 2024.\nNational Institute of Diabetes and Digestive and Kidney Diseases (NIDDK). Chronic Kidney Disease (CKD) – Definition and Staging."
  },
  {
    "id": "dr-q-eval2-28",
    "examArea": "NEFROLOGÍA / CLASIFICACIÓN DE LA ENFERMEDAD RENAL CRÓNICA",
    "topic": "NEFROLOGÍA / CLASIFICACIÓN DE LA ENFERMEDAD RENAL CRÓNICA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "¿Cuál de las siguientes combinaciones corresponde correctamente a la clasificación de la enfermedad renal crónica según la tasa de filtración glomerular estimada (TFG)?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "G1: 90–119; G2: 60–89; G3a: 45–59; G3b: 30–44; G4: 15–29; G5: <15 mL/min/1,73 m²."
      },
      {
        "id": "B",
        "label": "B",
        "text": "G1: ≥90; G2: 60–89; G3a: 45–59; G3b: 30–44; G4: 15–29; G5: <15 mL/min/1,73 m²."
      },
      {
        "id": "C",
        "label": "C",
        "text": "G1: ≥120; G2: 90–119; G3: 60–89; G4: 30–59; G5: <30 mL/min/1,73 m²."
      },
      {
        "id": "D",
        "label": "D",
        "text": "G1: ≥90; G2: 75–89; G3a: 60–74; G3b: 45–59; G4: 30–44; G5: <30 mL/min/1,73 m²."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa ERC se clasifica por la TFG en categorías G:\nG1: ≥90\nG2: 60–89\nG3a: 45–59\nG3b: 30–44\nG4: 15–29\nG5: <15 mL/min/1,73 m²\nAdemás de la categoría G, la clasificación moderna incorpora la albuminuria (A1–A3).",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa ERC se clasifica por la TFG en categorías G:\nG1: ≥90\nG2: 60–89\nG3a: 45–59\nG3b: 30–44\nG4: 15–29\nG5: <15 mL/min/1,73 m²\nAdemás de la categoría G, la clasificación moderna incorpora la albuminuria (A1–A3).\n\n🔥 EXPLICACIÓN DEL PROFE: BY DR Q\n\nLa división más importante que debes memorizar es:\nG3 = 30–59, pero se subdivide en:\nG3a = 45–59G3b = 30–44\nEsto es una trampa frecuente porque muchos recuerdan únicamente “G3 = 30–59” y olvidan diferenciar a y b.\n🎯 REGLA DE ORO:45 = G3a | 30 = G3b | 15 = G4 | <15 = G5\n❌ ¿Por qué las otras son incorrectas?\nA. Incorrecta porque G1 comienza en ≥90, no en 90–119.\nC. Incorrecta porque desplaza todas las categorías y no corresponde a la clasificación KDIGO.\nD. Incorrecta porque utiliza límites que no corresponden a las categorías G establecidas.\n💎 PERLAS DE EXAMEN\nERC se clasifica con CGA:\nC = causaG = TFGA = albuminuria\nNo basta con decir “ERC G3”; cuando sea posible, debes pensar también en la categoría de albuminuria.\n📚 REFERENCIAS\nKDIGO. 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney International. 2024.\nKDIGO. KDIGO 2024 CKD Guideline – Executive Summary. Kidney International. 2024."
  },
  {
    "id": "dr-q-eval2-29",
    "examArea": "NEFROLOGÍA",
    "topic": "NEFROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Respecto a la anemia de la insuficiencia renal crónica, todas las afirmaciones siguientes son correctas EXCEPTO una. Señálela:",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Aparece con filtrados menores de 60 ml/min y es normocítica normocrómica."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Se debe fundamentalmente al acortamiento de la vida media del hematíe por el ambiente urémico; también intervienen la hipoproducción de EPO, déficit de hierro y folato, hiperparatiroidismo, inflamación crónica y toxicidad por el aluminio."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Se trata eficazmente con eritropoyetina humana recombinante o darbepoetina, que permite una administración más espaciada."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Se debe suplementar hierro cuando se objetiva ferropenia, con alteración de los parámetros de depósitos y disponibilidad de hierro."
      },
    ],
    "correctOptionId": "B",
    "explanation": "LO QUE DEBES SABER PARA EL EXAMEN\nLa anemia de la enfermedad renal crónica es habitualmente normocítica y normocrómica y se relaciona principalmente con una producción insuficiente de eritropoyetina por el riñón, además de otros mecanismos como inflamación, alteraciones del metabolismo del hierro y menor supervivencia eritrocitaria.\nLa clave de la pregunta está en la palabra \"fundamentalmente\".\nEl acortamiento de la vida media del eritrocito contribuye, pero no constituye el mecanismo fundamental de la anemia renal. La disminución de la eritropoyesis por déficit relativo de EPO es un mecanismo central.",
    "keyPoints": [],
    "theoryContent": "LO QUE DEBES SABER PARA EL EXAMEN\nLa anemia de la enfermedad renal crónica es habitualmente normocítica y normocrómica y se relaciona principalmente con una producción insuficiente de eritropoyetina por el riñón, además de otros mecanismos como inflamación, alteraciones del metabolismo del hierro y menor supervivencia eritrocitaria.\nLa clave de la pregunta está en la palabra \"fundamentalmente\".\nEl acortamiento de la vida media del eritrocito contribuye, pero no constituye el mecanismo fundamental de la anemia renal. La disminución de la eritropoyesis por déficit relativo de EPO es un mecanismo central.\n\nEXPLICACIÓN DEL PROFE: BY DR Q.\n\n🧠 1. ¿Por qué aparece anemia en la ERC?\nPiensa en tres mecanismos principales:\n1. ↓ Producción de EPO → ↓ eritropoyesis\nEl riñón sano produce EPO en respuesta a la hipoxia. Cuando existe enfermedad renal crónica, disminuye la capacidad de producir una respuesta eritropoyética adecuada.\n2. Ambiente urémico → ↓ supervivencia eritrocitaria\nLas toxinas urémicas alteran la función de los eritrocitos y contribuyen a reducir su vida media.\n3. Alteraciones del hierro e inflamación\nLa inflamación crónica favorece la elevación de hepcidina, disminuyendo la disponibilidad del hierro para la eritropoyesis. También puede existir déficit absoluto de hierro.\nPor eso la anemia renal no debe explicarse únicamente por \"falta de EPO\", pero tampoco es correcto decir que el acortamiento de la vida eritrocitaria sea el mecanismo fundamental.\n\n🔴 ¿Por qué la B es la falsa?\nLa opción afirma:\n\"Se debe fundamentalmente al acortamiento de la vida media del hematíe...\"\nAhí está la trampa.\nEl acortamiento de la vida media eritrocitaria sí ocurre, pero es un mecanismo contribuyente.\nEl mecanismo central es la disminución de la producción renal de EPO, acompañada de alteraciones del hierro, inflamación y otros factores.\nPor eso:\nB = FALSA ❌\n\n🩸 2. ¿Cómo es típicamente la anemia renal?\nClásicamente:\nNormocítica \nNormocrómica \nHipoproliferativa \nSuele hacerse más frecuente conforme disminuye la función renal, aunque no debe utilizarse un punto de corte rígido de TFG para explicar todos los casos.\n\n💉 3. ¿Cómo se trata?\nEl tratamiento puede incluir agentes estimulantes de la eritropoyesis (ESA), como:\nEritropoyetina humana recombinante. \nDarbepoetina. \nLa darbepoetina tiene una vida media más prolongada y permite una administración menos frecuente.\nPero antes de iniciar o intensificar ESA hay que evaluar y corregir causas tratables de anemia, especialmente el déficit de hierro. La guía KDIGO 2026 enfatiza precisamente la evaluación sistemática de hemoglobina, ferritina y saturación de transferrina, además de otras causas corregibles. \n\n🧲 4. ¿Qué pasa con el hierro?\nEn la ERC puede existir:\nDéficit absoluto de hierro→ las reservas corporales de hierro están disminuidas.\nDéficit funcional de hierro→ existe hierro almacenado, pero no está adecuadamente disponible para la eritropoyesis.\nPor eso no basta con mirar únicamente la hemoglobina: deben evaluarse parámetros como ferritina y saturación de transferrina (TSAT).\n⚠️ Ojo con actualizar el material: los puntos de corte clásicos de la pregunta de la imagen no deben memorizarse como criterios universales actuales. La guía KDIGO 2026 propone umbrales de inicio de hierro diferentes según el contexto clínico y si el paciente recibe o no hemodiálisis. \n\n🔥 PERLA DE EXAMEN — DR Q\nERC + anemia normocítica normocrómica → piensa primero en déficit relativo de EPO.\nY recuerda:\n↓ EPO = mecanismo central↓ vida media eritrocitaria = mecanismo contribuyenteInflamación/hepcidina + hierro = mecanismos adicionales\n🎯 TRAMPA\nSi una opción dice:\n\"La anemia renal se debe fundamentalmente al acortamiento de la vida media del hematíe\"\n🚨 DESCONFÍA.\nEl acortamiento existe, pero no es el mecanismo fundamental.\n\n📚 REFERENCIAS\nKDIGO. 2026 Clinical Practice Guideline for the Management of Anemia in Chronic Kidney Disease. Kidney International. 2026. \nKDIGO. 2026 Clinical Practice Guideline for Anemia in CKD — Executive Summary. 2026. \nKDIGO. 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney International. 2024. "
  },
  {
    "id": "dr-q-eval2-30",
    "examArea": "NEFROLOGÍA",
    "topic": "NEFROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Revisa usted en consulta a un paciente de 73 años, hipertenso en tratamiento, dislipémico, con IRC con EFG 22 ml/min. ¿Cuál de las siguientes alteraciones NO esperaría encontrar en su analítica?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Anemia normocítica y normocrómica."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Acidosis metabólica con anion gap elevado."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Hiponatremia."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hipocalcemia."
      },
    ],
    "correctOptionId": "C",
    "explanation": "LO QUE DEBES SABER PARA EL EXAMEN\nUna TFG de 22 ml/min corresponde a una enfermedad renal crónica G4 (15–29 ml/min/1,73 m²). En la ERC avanzada aparecen alteraciones hematológicas, ácido-base y del metabolismo mineral. \nPor tanto, es esperable encontrar:\nAnemia, habitualmente normocítica y normocrómica. \nAcidosis metabólica, por disminución de la capacidad renal para excretar ácido. \nAlteraciones del metabolismo mineral, incluyendo tendencia a hipocalcemia. \nHiponatremia: puede aparecer en determinados pacientes, pero no es una alteración característica que deba esperarse simplemente por tener una TFG de 22 ml/min. \n👉 Por eso, dentro del planteamiento clásico de esta pregunta, la respuesta es C.",
    "keyPoints": [],
    "theoryContent": "LO QUE DEBES SABER PARA EL EXAMEN\nUna TFG de 22 ml/min corresponde a una enfermedad renal crónica G4 (15–29 ml/min/1,73 m²). En la ERC avanzada aparecen alteraciones hematológicas, ácido-base y del metabolismo mineral. \nPor tanto, es esperable encontrar:\nAnemia, habitualmente normocítica y normocrómica. \nAcidosis metabólica, por disminución de la capacidad renal para excretar ácido. \nAlteraciones del metabolismo mineral, incluyendo tendencia a hipocalcemia. \nHiponatremia: puede aparecer en determinados pacientes, pero no es una alteración característica que deba esperarse simplemente por tener una TFG de 22 ml/min. \n👉 Por eso, dentro del planteamiento clásico de esta pregunta, la respuesta es C.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q.\n\n1. ¿Qué significa una TFG de 22 ml/min?\nPrimero clasifica mentalmente:\nTFG 15–29 → ERC G4.\nA medida que disminuye la masa renal funcional, el riñón pierde progresivamente su capacidad para mantener la homeostasis.\nLa clasificación G4 forma parte de la clasificación KDIGO de la ERC. \n\n🩸 2. ¿Por qué esperaría anemia?\nEl riñón participa en la regulación de la eritropoyesis mediante la producción de eritropoyetina (EPO).\nEn la ERC avanzada existe una respuesta eritropoyética insuficiente, junto con alteraciones del hierro, inflamación y otros mecanismos.\nPor eso la anemia de la ERC clásicamente es:\nNormocítica + normocrómica + hipoproliferativa.\nLa anemia es una complicación frecuente de la ERC y actualmente cuenta con una guía KDIGO específica actualizada en 2026. \n✅ A = esperable.\n\n⚗️ 3. ¿Por qué aparece acidosis metabólica?\nEl riñón debe:\nExcretar la carga diaria de ácido. \nGenerar y reabsorber bicarbonato. \nExcretar ácido principalmente en forma de NH₄⁺ y ácido titulable. \nCuando disminuye significativamente la función renal, disminuye la capacidad de manejar la carga ácida.\nResultado:\n↓ TFG → ↓ excreción de ácido → ↓ HCO₃⁻ → acidosis metabólica.\nEn fases avanzadas puede existir un anion gap elevado por acumulación de aniones no medidos.\n✅ B = esperable.\n\n🦴 4. ¿Por qué esperaría hipocalcemia?\nLa disminución de la función renal altera el metabolismo de fósforo y vitamina D.\nLa secuencia que debes recordar es:\n↓ función renal\n↓\n↓ excreción de fósforo\n↓\n↑ fósforo\n↓\n↓ disponibilidad de calcio + alteración del metabolismo de vitamina D\n↓\nhipocalcemia\nEsto contribuye al desarrollo del trastorno mineral y óseo asociado a la ERC (CKD-MBD).\n✅ D = esperable.\n\n🧂 5. ¿Y la hiponatremia?\nAquí está la trampa.\nEl riñón enfermo puede tener dificultades para manejar adecuadamente el agua y el sodio, y la hiponatremia puede aparecer en determinadas circunstancias.\nPero la pregunta no pregunta:\n\"¿Cuál puede aparecer?\"\nPregunta:\n\"¿Cuál NO esperaría encontrar?\"\nCon una TFG de 22 ml/min, las alteraciones clásicamente asociadas a la ERC avanzada son anemia, acidosis metabólica y trastorno mineral, mientras que la hiponatremia no constituye una consecuencia obligada o característica de la ERC G4.\n🎯 Por eso:\nC. Hiponatremia → CORRECTA como respuesta a la pregunta.\n\n🔥 PERLA DE EXAMEN — DR Q\nCuando te den una ERC avanzada, piensa automáticamente:\nRIÑÓN ENFERMO →\n🩸 ↓ EPO → anemia\n⚗️ ↓ excreción de H⁺ → acidosis\n🦴 ↑ fósforo + ↓ metabolismo de vitamina D → hipocalcemia/CKD-MBD\n🧂 Alteraciones de agua y electrolitos → variables, no asumir hiponatremia automáticamente\n🚨 TRAMPA\nNo confundas:\n\"puede ocurrir\"\ncon\n\"es una alteración característica que debo esperar\".\n\n📚 REFERENCIAS\nKDIGO CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney International. 2024;105(Suppl 4S):S117–S314. \nKDIGO Anemia Work Group. KDIGO 2026 Clinical Practice Guideline for the Management of Anemia in Chronic Kidney Disease. Kidney International. 2026;109(Suppl 1S):S1–S99. \nKDIGO CKD-MBD Update Work Group. KDIGO 2017 Clinical Practice Guideline Update for the Diagnosis, Evaluation, Prevention, and Treatment of CKD-MBD."
  },
  {
    "id": "dr-q-eval2-31",
    "examArea": "NEFROLOGÍA",
    "topic": "NEFROLOGÍA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente presenta deterioro progresivo de la función renal y proteinuria importante. En la ecografía renal se observa aumento bilateral del tamaño de los riñones. ¿Cuál de las siguientes enfermedades debe considerarse especialmente como causa de este hallazgo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Amiloidosis renal."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Nefroesclerosis hipertensiva."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Nefropatía crónica por reflujo vesicoureteral."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Enfermedad renal crónica terminal de larga evolución."
      },
    ],
    "correctOptionId": "A",
    "explanation": "LO QUE DEBES SABER PARA EL EXAMEN\nLa amiloidosis renal puede producir depósito de proteínas amiloides en el parénquima renal, causando deterioro progresivo de la función renal y, con frecuencia, proteinuria importante o síndrome nefrótico. En fases tempranas puede observarse aumento del tamaño renal en ecografía o tomografía. (PubMed Central (PMC))\nLa combinación:\nEnfermedad renal + proteinuria marcada + riñones aumentados de tamaño\ndebe hacer pensar en una enfermedad infiltrativa, particularmente amiloidosis.",
    "keyPoints": [],
    "theoryContent": "LO QUE DEBES SABER PARA EL EXAMEN\nLa amiloidosis renal puede producir depósito de proteínas amiloides en el parénquima renal, causando deterioro progresivo de la función renal y, con frecuencia, proteinuria importante o síndrome nefrótico. En fases tempranas puede observarse aumento del tamaño renal en ecografía o tomografía. (PubMed Central (PMC))\nLa combinación:\nEnfermedad renal + proteinuria marcada + riñones aumentados de tamaño\ndebe hacer pensar en una enfermedad infiltrativa, particularmente amiloidosis.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q.\n\n1. ¿Qué está pasando en el riñón?\nEn la amiloidosis se depositan proteínas amiloides de forma extracelular en diferentes estructuras del riñón, especialmente en el glomérulo, vasos e intersticio.\nEsto puede alterar progresivamente la función renal.\nUna de las manifestaciones más importantes es:\nDepósito de amiloide → lesión glomerular → proteinuria → síndrome nefrótico → deterioro de la función renal.\nLa proteinuria puede ser incluso de rango nefrótico y constituye una manifestación característica de la afectación renal por amiloidosis. (PubMed Central (PMC))\n\n2. ¿Por qué pueden crecer los riñones?\nLa infiltración por material amiloide puede producir aumento del tamaño renal, especialmente en etapas tempranas.\nPor eso, ante:\nERC + riñones grandes\nno debes pensar automáticamente en una ERC terminal avanzada.\nEn enfermedades infiltrativas como la amiloidosis, los riñones pueden encontrarse aumentados de tamaño inicialmente y posteriormente disminuir de tamaño cuando progresa la pérdida de función renal. (PubMed Central (PMC))\n\n3. ¿Por qué NO son las otras?\nB. Nefroesclerosis hipertensiva ❌\nLa enfermedad hipertensiva crónica suele asociarse con riñones pequeños y cambios crónicos de nefroesclerosis, no con crecimiento renal bilateral como hallazgo característico.\nC. Nefropatía crónica por reflujo ❌\nEl daño crónico por reflujo produce cicatrices corticales y riñones generalmente pequeños o asimétricos, no el patrón de infiltración bilateral planteado.\nD. ERC terminal de larga evolución ❌\nEn la enfermedad renal crónica avanzada de larga evolución, lo clásico es encontrar riñones pequeños y contraídos, especialmente en muchas nefropatías crónicas.\n\n🔥 PERLA DE EXAMEN — DR Q\nRIÑÓN GRANDE + PROTEINURIA → PIENSA EN INFILTRACIÓN\nEntre las causas clásicas:\n🧠 Amiloidosis\nY recuerda la evolución:\nAmiloidosis temprana → riñones pueden estar aumentados de tamaño\n⬇️\nProgresión de la enfermedad → pérdida de parénquima funcional\n⬇️\nERC avanzada → pueden terminar pequeños/atróficos\nLa ausencia de aumento renal no descarta amiloidosis, porque el tamaño renal es variable y no todos los pacientes presentan nefromegalia. (PubMed)\n\n📚 REFERENCIAS\nKawashima A, et al. Imaging evaluation of amyloidosis of the urinary tract and retroperitoneum. Radiographics. 2011. (PubMed)\nEkelund L. Radiologic findings in renal amyloidosis. AJR Am J Roentgenol. 1977.\nKaram S, et al. Non-Immunoglobulin Amyloidosis-Mediated Kidney Disease. Advances in Kidney Disease and Health. 2024."
  },
  {
    "id": "dr-q-eval2-32",
    "examArea": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO",
    "topic": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente consulta por dolor torácico opresivo de inicio súbito; presenta elevación y posterior descenso de troponina cardíaca por encima del percentil 99 y cambios electrocardiográficos nuevos compatibles con isquemia. ¿Cuál de los siguientes elementos es indispensable para establecer el diagnóstico clínico de infarto agudo de miocardio?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Elevación aislada de troponina cardíaca por encima del percentil 99."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Evidencia de lesión miocárdica aguda asociada a evidencia de isquemia miocárdica."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Identificación angiográfica obligatoria de una obstrucción coronaria significativa."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Presencia obligatoria de elevación del segmento ST en el electrocardiograma."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa Quinta Definición Universal de Infarto de Miocardio 2026, elaborada conjuntamente por ESC, ACC, AHA y WHF, mantiene un concepto fundamental:\nInfarto de miocardio = lesión miocárdica aguda + evidencia de isquemia miocárdica. (Escardio)\nLa lesión miocárdica aguda se define por un ascenso y/o descenso de troponina cardíaca, con al menos un valor por encima del percentil 99, utilizando los límites superiores de referencia específicos por sexo. (OUP Academic)\nPero:\nTroponina elevada ≠ automáticamente infarto.\nLa troponina puede elevarse en múltiples situaciones sin isquemia miocárdica, como insuficiencia cardíaca aguda, embolia pulmonar, taquiarritmias, sepsis o miocarditis. (OUP Academic)",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa Quinta Definición Universal de Infarto de Miocardio 2026, elaborada conjuntamente por ESC, ACC, AHA y WHF, mantiene un concepto fundamental:\nInfarto de miocardio = lesión miocárdica aguda + evidencia de isquemia miocárdica. (Escardio)\nLa lesión miocárdica aguda se define por un ascenso y/o descenso de troponina cardíaca, con al menos un valor por encima del percentil 99, utilizando los límites superiores de referencia específicos por sexo. (OUP Academic)\nPero:\nTroponina elevada ≠ automáticamente infarto.\nLa troponina puede elevarse en múltiples situaciones sin isquemia miocárdica, como insuficiencia cardíaca aguda, embolia pulmonar, taquiarritmias, sepsis o miocarditis. (OUP Academic)\n\n🔥 EXPLICACIÓN DEL PROFE: BY DR Q\n\n1. Primero: diferencia lesión miocárdica de infarto\nEste es uno de los conceptos que debemos actualizar con la nueva definición de 2026.\nLESIÓN MIOCÁRDICA AGUDA\nTroponina ↑/↓ + ≥1 valor > percentil 99\n⬇️\nDemuestra lesión miocárdica aguda.\nPero todavía no puedes decir automáticamente que es un infarto.\nINFARTO DE MIOCARDIO\nNecesitas:\nLesión miocárdica aguda\n+\nevidencia de isquemia miocárdica. (OUP Academic)\n\n2. ¿Cómo demostramos la isquemia?\nLa nueva definición contempla diferentes evidencias de isquemia, entre ellas:\nSíntomas compatibles con isquemia.\nNuevos cambios isquémicos en el ECG.\nNuevas ondas Q patológicas.\nEvidencia por imagen de nueva pérdida de miocardio viable.\nNueva alteración regional de la contractilidad compatible con etiología isquémica.\nIdentificación de una patología coronaria aguda compatible con el cuadro. (OUP Academic)\nPor eso, no necesitas obligatoriamente un supradesnivel del ST.\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. Elevación aislada de troponina ❌\nEsta es la trampa clásica.\nUna troponina elevada demuestra lesión miocárdica, pero puede aparecer sin isquemia.\nPor ejemplo:\nEmbolia pulmonar → troponina ↑\npero eso no convierte automáticamente al paciente en un paciente con IAM.\n🎯 Troponina elevada = lesión miocárdica.\n🎯 Troponina elevada + isquemia = IAM, si se cumplen los criterios diagnósticos. (OUP Academic)\n\nC. Obstrucción coronaria significativa obligatoria ❌\nNo todos los infartos requieren encontrar una obstrucción coronaria significativa.\nLa nueva definición reconoce diferentes patologías coronarias agudas, incluyendo:\nAterotrombosis.\nDisección coronaria espontánea.\nVasoespasmo.\nEmbolia coronaria.\nPor tanto, no es obligatorio demostrar una obstrucción coronaria significativa mediante angiografía para establecer el diagnóstico. (Escardio)\n\nD. Elevación del ST obligatoria ❌\nTampoco.\nPuede existir un infarto sin elevación clásica del ST.\nLa definición diagnóstica se basa en la combinación de lesión miocárdica aguda + evidencia de isquemia, no exclusivamente en el ECG con elevación del ST. (OUP Academic)\n\n🔥 TRAMPA DE EXAMEN\nTROPONINA ≠ INFARTO\nMemorízalo así:\nTroponina ↑/↓ + >P99\n⬇️\n🩸 LESIÓN MIOCÁRDICA AGUDA\nSi además existe:\nISQUEMIA\n⬇️\n❤️ INFARTO DE MIOCARDIO\n\n🎯 REGLA DE ORO DR Q\nNO DIAGNOSTIQUES IAM SOLO POR UNA TROPONINA ELEVADA.\nPrimero pregunta:\n¿Existe lesión miocárdica aguda?\n⬇️\n¿Existe evidencia de isquemia?\n⬇️\nSí + sí = IAM.\n\n💎 PERLAS DE EXAMEN\nTroponina elevada aislada → lesión miocárdica, no necesariamente IAM.\nLa lesión miocárdica aguda requiere ascenso y/o descenso de troponina con al menos un valor > percentil 99. (OUP Academic)\nPara diagnosticar IAM debe existir isquemia además de la lesión miocárdica aguda.\nLa nueva definición 2026 utiliza umbrales de troponina específicos por sexo. (Escardio)\nEl nuevo sistema clasifica el IAM en primario, secundario y relacionado con procedimientos, sustituyendo la clasificación numérica previa como eje principal. (Escardio)\n📚 REFERENCIAS\nESC/ACC/AHA/WHF. Fifth Universal Definition of Myocardial Infarction. European Heart Journal. 2026. (OUP Academic)\nEuropean Society of Cardiology. Fifth Universal Definition of Myocardial Infarction (2026). 28 agosto 2026. (Escardio)\nESC. 2026 Pocket Guidelines on the Fifth Universal Definition of Myocardial Infarction. 2026. (Escardio)"
  },
  {
    "id": "dr-q-eval2-33",
    "examArea": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO",
    "topic": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente de 78 años con anemia grave presenta dolor torácico, cambios isquémicos nuevos en el electrocardiograma y ascenso y descenso de troponina cardíaca con valores por encima del percentil 99; no se identifican datos de una patología coronaria aguda, pero existe una estenosis coronaria obstructiva conocida. ¿Cuál es la clasificación más adecuada según la nueva definición universal de infarto de miocardio de 2026?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Infarto de miocardio primario por aterotrombosis coronaria aguda."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Infarto de miocardio secundario por desequilibrio entre aporte y demanda de oxígeno."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Infarto de miocardio relacionado con procedimiento cardíaco."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Lesión miocárdica crónica sin evidencia de infarto."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa Quinta Definición Universal de Infarto de Miocardio 2026 abandona la clasificación numérica tradicional de tipos 1, 2, 3, 4 y 5 y propone tres categorías clínicas:\nIAM primario: aparece espontáneamente por una patología coronaria aguda.\nIAM secundario: aparece como consecuencia de otra enfermedad aguda que produce un desequilibrio entre el aporte y la demanda de oxígeno del miocardio.\nIAM relacionado con procedimientos: ocurre como complicación de un procedimiento cardíaco percutáneo o quirúrgico. (Escardio)\nEn este paciente, la anemia grave genera un importante desequilibrio entre el aporte y la demanda de oxígeno. Si existe lesión miocárdica aguda y evidencia de isquemia, estamos ante un IAM secundario. (OUP Academic)",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa Quinta Definición Universal de Infarto de Miocardio 2026 abandona la clasificación numérica tradicional de tipos 1, 2, 3, 4 y 5 y propone tres categorías clínicas:\nIAM primario: aparece espontáneamente por una patología coronaria aguda.\nIAM secundario: aparece como consecuencia de otra enfermedad aguda que produce un desequilibrio entre el aporte y la demanda de oxígeno del miocardio.\nIAM relacionado con procedimientos: ocurre como complicación de un procedimiento cardíaco percutáneo o quirúrgico. (Escardio)\nEn este paciente, la anemia grave genera un importante desequilibrio entre el aporte y la demanda de oxígeno. Si existe lesión miocárdica aguda y evidencia de isquemia, estamos ante un IAM secundario. (OUP Academic)\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n\n1. Primero: confirma que existe lesión miocárdica aguda\nTenemos:\nAscenso y descenso de troponina\n\nAl menos un valor > percentil 99\n⬇️\nLESIÓN MIOCÁRDICA AGUDA\nPero todavía necesitamos demostrar isquemia para llamarlo infarto.\nAquí tenemos:\nDolor torácico + cambios isquémicos en ECG\n⬇️\nExiste evidencia de isquemia.\nPor tanto:\nLesión miocárdica aguda + isquemia = IAM.\n\n2. Ahora viene el concepto nuevo: ¿qué produjo el IAM?\nAquí está la verdadera enseñanza de la pregunta.\nEl paciente tiene:\nANEMIA GRAVE\n⬇️\n↓ capacidad de transporte de O₂\n⬇️\n↓ aporte de oxígeno al miocardio\n⬇️\nDesequilibrio aporte/demanda\n⬇️\nIsquemia miocárdica\n⬇️\nLesión miocárdica + isquemia\n⬇️\nIAM SECUNDARIO\nLa nueva definición reserva el IAM secundario para los casos en los que la lesión isquémica ocurre secundariamente a otra condición aguda que produce desequilibrio entre aporte y demanda. (OUP Academic)\n\n🔥 ¿QUÉ CAMBIÓ CON RESPECTO AL CONCEPTO ANTIGUO?\nAntes probablemente habrías pensado:\nIAM tipo 2\nAhora la nomenclatura que debemos aprender es:\nIAM secundario\nLa ESC, ACC, AHA y WHF sustituyeron la clasificación numérica por una clasificación basada en el contexto clínico y la fisiopatología. (Escardio)\n🎯 Traducción Método Q:\nAntes: Tipo 1 → Tipo 2 → Tipo 3 → Tipo 4 → Tipo 5.\nAhora:PRIMARIO → SECUNDARIO → RELACIONADO CON PROCEDIMIENTO.\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. IAM primario por aterotrombosis coronaria aguda ❌\nIncorrecta.\nEl IAM primario ocurre espontáneamente por una patología coronaria aguda, como aterotrombosis, disección coronaria espontánea, vasoespasmo o embolia coronaria.\nEn este caso, el desencadenante es una condición sistémica aguda: anemia grave, sin evidencia de patología coronaria aguda. (OUP Academic)\n\nC. IAM relacionado con procedimiento cardíaco ❌\nNo existe ningún procedimiento cardíaco en el caso.\nEsta categoría se utiliza cuando el IAM ocurre como complicación de un procedimiento cardíaco percutáneo o quirúrgico dentro de los criterios temporales establecidos por la nueva definición. (OUP Academic)\n\nD. Lesión miocárdica crónica ❌\nExiste un ascenso y descenso de troponina, lo que indica un proceso agudo.\nAdemás, existen síntomas y cambios electrocardiográficos compatibles con isquemia.\nPor tanto, no estamos ante una lesión miocárdica crónica aislada.\n\n🔥 TRAMPA DE EXAMEN\nNO TODO IAM CON ENFERMEDAD CORONARIA ES UN IAM PRIMARIO.\nUn paciente puede tener enfermedad coronaria obstructiva y desarrollar un IAM secundario si una condición aguda produce un desequilibrio significativo entre aporte y demanda y se cumplen los criterios diagnósticos.\nEjemplos de situaciones que pueden producir este escenario incluyen:\nAnemia grave.\nHipoxemia.\nHipotensión/shock.\nTaquiarritmias.\nOtras situaciones de desequilibrio aporte-demanda.\nLa nueva definición busca precisamente distinguir estos escenarios y evitar etiquetar automáticamente como IAM primario cualquier cuadro con troponina elevada e isquemia. (OUP Academic)\n\n🎯 REGLA DE ORO DR Q\nPREGUNTA SIEMPRE: ¿QUÉ PROVOCÓ LA ISQUEMIA?\nPatología coronaria aguda → IAM PRIMARIO.\nOtra enfermedad aguda → desequilibrio aporte/demanda → IAM SECUNDARIO.\nComplicación de procedimiento cardíaco → IAM RELACIONADO CON PROCEDIMIENTO.\n\n💎 PERLAS DE EXAMEN\nLa nueva clasificación 2026 tiene 3 categorías clínicas.\nIAM primario = patología coronaria aguda espontánea.\nIAM secundario = condición aguda → desequilibrio aporte/demanda.\nIAM relacionado con procedimiento = complicación de procedimiento cardíaco.\nLa antigua categoría IAM tipo 2 se reemplaza conceptualmente por IAM secundario, con criterios diagnósticos más específicos. (OUP Academic)\nLa presencia de enfermedad coronaria obstructiva no convierte automáticamente el evento en IAM primario.\n📚 REFERENCIAS\nESC/ACC/AHA/WHF. Fifth Universal Definition of Myocardial Infarction. European Heart Journal. 2026. (OUP Academic)\nEuropean Society of Cardiology. Fifth Universal Definition of Myocardial Infarction (2026). 28 agosto 2026. (Escardio)\nESC. 2026 Pocket Guidelines on the Fifth Universal Definition of Myocardial Infarction. 2026. (Escardio)"
  },
  {
    "id": "dr-q-eval2-34",
    "examArea": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO",
    "topic": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente consulta por dolor torácico y presenta una elevación de troponina cardíaca por encima del percentil 99, pero sin cambios dinámicos y sin evidencia clínica, electrocardiográfica o por imagen de isquemia miocárdica. ¿Cuál es el diagnóstico más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Infarto agudo de miocardio primario."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Infarto agudo de miocardio secundario."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Lesión miocárdica crónica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Lesión miocárdica aguda."
      },
    ],
    "correctOptionId": "C",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa troponina elevada no equivale automáticamente a infarto.\nPrimero debemos determinar si existe lesión miocárdica y después si esa lesión es aguda o crónica.\nTroponina > percentil 99 + valores estables → lesión miocárdica crónica.\nTroponina > percentil 99 + ascenso y/o descenso → lesión miocárdica aguda.\nLesión miocárdica aguda + evidencia de isquemia → infarto de miocardio.\nEste concepto es fundamental en la nueva Quinta Definición Universal de Infarto de Miocardio de 2026.",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa troponina elevada no equivale automáticamente a infarto.\nPrimero debemos determinar si existe lesión miocárdica y después si esa lesión es aguda o crónica.\nTroponina > percentil 99 + valores estables → lesión miocárdica crónica.\nTroponina > percentil 99 + ascenso y/o descenso → lesión miocárdica aguda.\nLesión miocárdica aguda + evidencia de isquemia → infarto de miocardio.\nEste concepto es fundamental en la nueva Quinta Definición Universal de Infarto de Miocardio de 2026.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n\n1. Primer paso: ¿hay lesión miocárdica?\nSí.\nLa troponina está por encima del percentil 99.\n⬇️\nExiste lesión miocárdica.\nPero todavía no sabemos si es aguda o crónica.\n\n2. Segundo paso: ¿es aguda o crónica?\nAquí está la clave:\nLa troponina no presenta cambios dinámicos.\nPermanece elevada pero estable.\n⬇️\nLESIÓN MIOCÁRDICA CRÓNICA\nEsto puede observarse, por ejemplo, en pacientes con determinadas enfermedades estructurales cardíacas o enfermedad renal crónica.\n\n3. Tercer paso: ¿hay isquemia?\nNo.\nEl paciente no presenta evidencia clínica, electrocardiográfica ni por imagen de isquemia.\nPor tanto, no podemos diagnosticar un infarto de miocardio.\n\n🔥 TRAMPA DE EXAMEN\nTroponina elevada ≠ IAM.\nLa pregunta que debes hacerte siempre es:\n¿La troponina está elevada? → ¿es dinámica? → ¿hay evidencia de isquemia?\n🎯 Troponina elevada y estable → lesión miocárdica crónica.\n🎯 Troponina elevada con ascenso/descenso → lesión miocárdica aguda.\n🎯 Lesión aguda + isquemia → IAM.\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. Infarto agudo de miocardio primario ❌\nNo hay evidencia de isquemia ni de una patología coronaria aguda.\nB. Infarto agudo de miocardio secundario ❌\nTampoco existe una condición aguda que produzca un desequilibrio entre aporte y demanda de oxígeno.\nD. Lesión miocárdica aguda ❌\nPara hablar de lesión miocárdica aguda necesitamos evidencia de un patrón dinámico de troponina, con ascenso y/o descenso.\n\n🎯 REGLA DE ORO DR Q\nPRIMERO TROPO → DESPUÉS DINÁMICA → DESPUÉS ISQUEMIA.\nElevada estable → CRÓNICA.\nElevada dinámica → AGUDA.\nAguda + isquemia → INFARTO.\n\n💎 PERLAS DE EXAMEN\nEl percentil 99 define el límite superior de referencia de la troponina.\nLa elevación aislada de troponina indica lesión miocárdica, no necesariamente IAM.\nLa lesión miocárdica puede ser aguda o crónica.\nLa ausencia de isquemia impide llamar automáticamente al cuadro infarto de miocardio.\nEste razonamiento es especialmente importante en pacientes con enfermedad renal crónica, insuficiencia cardíaca y otras enfermedades que pueden producir elevación persistente de troponina.\n📚 REFERENCIAS\nESC/ACC/AHA/WHF. Fifth Universal Definition of Myocardial Infarction. European Heart Journal. 2026.\nEuropean Society of Cardiology. Fifth Universal Definition of Myocardial Infarction. 2026. ESC – Quinta Definición Universal de Infarto de Miocardio"
  },
  {
    "id": "dr-q-eval2-35",
    "examArea": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO",
    "topic": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente consulta por dolor torácico típico y presenta elevación dinámica de troponina cardíaca junto con cambios electrocardiográficos compatibles con isquemia; no existe anemia, hipoxemia, hipotensión, taquiarritmia ni otra condición aguda que explique un desequilibrio entre el aporte y la demanda de oxígeno. ¿Cuál es el siguiente concepto que mejor define el cuadro según la Quinta Definición Universal de Infarto de Miocardio de 2026?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Infarto de miocardio secundario por desequilibrio entre aporte y demanda."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Infarto de miocardio primario por una patología coronaria aguda."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Lesión miocárdica crónica sin evidencia de isquemia."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Lesión miocárdica aguda sin posibilidad de establecer un infarto."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa nueva definición de 2026 considera IAM primario cuando existe un cuadro espontáneo de isquemia miocárdica aguda + lesión miocárdica aguda, sin que otra condición aguda o un procedimiento cardíaco sea el desencadenante. Aunque la mayoría de estos casos se deben a aterotrombosis, también pueden deberse a otras patologías coronarias agudas como disección coronaria espontánea, embolia coronaria o vasoespasmo. (OUP Academic)\nLa gran idea es:\nNo preguntes solamente \"¿hay infarto?\"\nAhora debes preguntarte:\n¿Cuál es el mecanismo que produjo el infarto?",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa nueva definición de 2026 considera IAM primario cuando existe un cuadro espontáneo de isquemia miocárdica aguda + lesión miocárdica aguda, sin que otra condición aguda o un procedimiento cardíaco sea el desencadenante. Aunque la mayoría de estos casos se deben a aterotrombosis, también pueden deberse a otras patologías coronarias agudas como disección coronaria espontánea, embolia coronaria o vasoespasmo. (OUP Academic)\nLa gran idea es:\nNo preguntes solamente \"¿hay infarto?\"\nAhora debes preguntarte:\n¿Cuál es el mecanismo que produjo el infarto?\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n\n1. Primero confirma lesión miocárdica aguda\nTenemos:\nTroponina con ascenso/descenso\n\n≥1 valor por encima del percentil 99\n⬇️\nLESIÓN MIOCÁRDICA AGUDA\n\n2. Después demuestra isquemia\nEl paciente tiene:\nDolor torácico típico\n\nCambios electrocardiográficos isquémicos\n⬇️\nEVIDENCIA DE ISQUEMIA MIOCÁRDICA\nPor tanto:\nLesión miocárdica aguda + isquemia\n⬇️\n❤️ INFARTO DE MIOCARDIO\nLa definición clínica de IAM requiere precisamente esta combinación. (OUP Academic)\n\n3. Ahora determina el contexto\nAquí está la parte nueva que debemos aprender.\nEl paciente no tiene una condición alternativa capaz de generar un desequilibrio aporte-demanda:\n❌ No anemia grave.❌ No hipoxemia.❌ No hipotensión/shock.❌ No taquiarritmia.❌ No hipertensión extrema como desencadenante.\nTampoco existe un procedimiento cardíaco reciente.\nEntonces debemos pensar en:\nIAM PRIMARIO\nLa definición 2026 lo considera un infarto espontáneo producido por una patología coronaria aguda primaria. (OUP Academic)\n\n🩺 ¿QUÉ PATOLOGÍAS PUEDEN PRODUCIR UN IAM PRIMARIO?\n🔥 Este es un cambio importante respecto a cómo aprendíamos el concepto tradicional.\nEl IAM primario no significa exclusivamente aterotrombosis.\nPuede producirse por:\nAterotrombosis.\nDisección coronaria espontánea.\nEmbolia coronaria.\nVasoespasmo coronario.\nReestenosis, trombosis del stent o fallo del injerto cuando ocurren >30 días después del procedimiento. (OUP Academic)\nPor eso, después de diagnosticar un IAM primario, la angiografía y/o la imagen cardíaca pueden ser fundamentales para establecer la etiología coronaria concreta. (OUP Academic)\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. Infarto de miocardio secundario ❌\nIncorrecta.\nEl IAM secundario aparece cuando una condición aguda alternativa produce un desequilibrio entre el aporte y la demanda de oxígeno.\nEjemplo:\nAnemia grave → ↓ aporte de O₂ → isquemia → IAM secundario.\nAquí no existe ese desencadenante.\n\nC. Lesión miocárdica crónica ❌\nIncorrecta.\nExiste un patrón dinámico de troponina, compatible con lesión aguda.\nAdemás, hay evidencia de isquemia.\nPor tanto, no es una lesión miocárdica crónica.\n\nD. Lesión miocárdica aguda sin posibilidad de establecer un infarto ❌\nIncorrecta.\nYa tenemos los dos elementos fundamentales:\nLesión miocárdica aguda\n\nEvidencia de isquemia\n⬇️\nIAM\nLo que queda por determinar es la etiología del IAM, no si existe infarto.\n\n🔥 TRAMPA DE EXAMEN\nIAM PRIMARIO ≠ exclusivamente aterotrombosis\nLa clasificación de 2026 amplía el concepto de IAM primario.\nPiensa:\nIAM espontáneo\n⬇️\n¿Existe otra enfermedad aguda que explique el desequilibrio aporte-demanda?\nSí → IAM secundario.\nNo → busca una patología coronaria aguda → IAM primario.\nY dentro del primario:\naterotrombosis ≠ única posibilidad.\n\n🎯 REGLA DE ORO DR Q\nINFARTO PRIMARIO = INFARTO ESPONTÁNEO POR PATOLOGÍA CORONARIA AGUDA.\nPuede ser:\nAterotrombosis | Disección | Embolia | Vasoespasmo\n\n💎 PERLAS DE EXAMEN\nLa Quinta Definición Universal de IAM 2026 reemplaza la antigua clasificación numérica como eje principal. (Escardio)\nAhora debes pensar en IAM primario, secundario o relacionado con procedimiento.\nEl IAM primario ocurre espontáneamente por una patología coronaria aguda.\nLa aterotrombosis es la causa más frecuente, pero no es la única.\nLa angiografía y la imagen cardíaca tienen un papel importante para confirmar el diagnóstico y definir la etiología. (OUP Academic)\nUn IAM relacionado con un procedimiento cardíaco se considera como tal cuando ocurre por una complicación del procedimiento dentro de los 30 días. (OUP Academic)\n📚 REFERENCIAS\nESC/ACC/AHA/WHF. Fifth Universal Definition of Myocardial Infarction. European Heart Journal. 2026. (OUP Academic)\nEuropean Society of Cardiology. Fifth Universal Definition of Myocardial Infarction (2026). 28 de agosto de 2026. (Escardio)\nESC. 2026 Pocket Guidelines on the Fifth Universal Definition of Myocardial Infarction. 2026. (Escardio)"
  },
  {
    "id": "dr-q-eval2-36",
    "examArea": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO – HALLAZGOS ELECTROCARDIOGRÁFICOS",
    "topic": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO – HALLAZGOS ELECTROCARDIOGRÁFICOS",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente consulta por dolor torácico intenso de inicio reciente. El electrocardiograma muestra depresión ascendente del segmento ST en las precordiales V2-V5 acompañada de ondas T altas, simétricas y prominentes, sin el patrón clásico de elevación del ST. ¿Cuál de los siguientes patrones electrocardiográficos describe mejor este hallazgo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Patrón de Wellens."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Patrón de de Winter."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Patrón de Sgarbossa."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Patrón de Aslanger."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEl patrón de de Winter es un patrón electrocardiográfico asociado a oclusión coronaria aguda, caracterizado clásicamente por:\nDepresión ascendente del ST en las precordiales + ondas T altas, prominentes y simétricas.\nLa guía 2026 lo incluye entre los patrones que pueden sugerir oclusión coronaria aguda, incluso en ausencia del típico supradesnivel del ST. (OUP Academic)\nPor eso, no debemos aprender únicamente \"ST elevado = oclusión\".\nHay pacientes con una oclusión coronaria aguda que presentan otros patrones electrocardiográficos.",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEl patrón de de Winter es un patrón electrocardiográfico asociado a oclusión coronaria aguda, caracterizado clásicamente por:\nDepresión ascendente del ST en las precordiales + ondas T altas, prominentes y simétricas.\nLa guía 2026 lo incluye entre los patrones que pueden sugerir oclusión coronaria aguda, incluso en ausencia del típico supradesnivel del ST. (OUP Academic)\nPor eso, no debemos aprender únicamente \"ST elevado = oclusión\".\nHay pacientes con una oclusión coronaria aguda que presentan otros patrones electrocardiográficos.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n\n1. ¿Qué debes reconocer en el ECG?\nLa descripción es prácticamente una fotografía verbal del patrón:\nST con depresión ascendente\n\nondas T altas y simétricas\n\nprecordiales\n⬇️\n🔥 DE WINTER\nEs un patrón que debe hacer sospechar una oclusión coronaria aguda, particularmente en el contexto clínico apropiado.\nLa guía 2026 señala específicamente el patrón de de Winter entre los hallazgos electrocardiográficos que pueden indicar una oclusión coronaria aguda. (OUP Academic)\n\n2. ¿Por qué es importante si no hay elevación del ST?\nPorque el ECG tradicionalmente nos hace pensar:\nST elevado → STEMI → oclusión coronaria.\nPero la realidad es más compleja.\nLa nueva definición reconoce que no todas las oclusiones coronarias agudas producen el patrón clásico de STEMI.\nDe hecho, la guía señala que una proporción de pacientes manejados inicialmente como NSTEMI puede presentar una oclusión aguda de la arteria culpable. (OUP Academic)\nPor eso debemos reconocer patrones alternativos.\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. Patrón de Wellens ❌\nWellens se caracteriza por:\nOndas T bifásicas o\nOndas T profundamente invertidas,\ntípicamente en V2-V3, habitualmente durante un período sin dolor.\nSe asocia con enfermedad significativa de la descendente anterior.\n👉 T altas y simétricas + ST ascendente deprimido = piensa de Winter, no Wellens. (OUP Academic)\n\nC. Patrón de Sgarbossa ❌\nLos criterios de Sgarbossa se utilizan fundamentalmente cuando existe:\nBloqueo de rama izquierda, o\nestimulación ventricular,\ny se buscan alteraciones del ST en relación con la dirección del QRS.\nEntre los criterios clásicos se incluyen:\nElevación concordante del ST ≥1 mm.\nDepresión concordante del ST ≥1 mm en V1-V3.\nElevación discordante del ST ≥5 mm.\n(OUP Academic)\n👉 Si el problema describe ondas T altas y simétricas con ST ascendente deprimido en precordiales, piensa en de Winter.\n\nD. Patrón de Aslanger ❌\nEl patrón de Aslanger es otro patrón de oclusión/isquemia descrito en la definición 2026, caracterizado por:\nElevación aislada del ST en III + depresión del ST en V4-V6 con onda T positiva. (OUP Academic)\nNo corresponde al patrón presentado.\n\n🔥 TRAMPA DE EXAMEN\nNO BUSQUES ÚNICAMENTE EL ST ELEVADO.\nLa guía 2026 destaca diferentes patrones que pueden sugerir oclusión coronaria aguda:\nde Winter\nWellens\nSgarbossa\nAslanger\nOndas T hiperagudas\nAlteraciones importantes del ST\n(OUP Academic)\nPor eso, ante un paciente con dolor torácico intenso y un ECG que no cumple los criterios clásicos de STEMI, pero tiene un patrón altamente sugestivo de oclusión, no debes asumir que \"como no hay ST elevado, no hay oclusión\".\n\n🎯 REGLA DE ORO DR Q\nDOLOR TORÁCICO + ECG ATÍPICO NO SIGNIFICA ECG BENIGNO.\nSTEMI clásico → elevación del ST.\nPero:\nde Winter → T altas + ST ascendente deprimido\nWellens → T bifásicas/profundamente invertidas\nSgarbossa → alteraciones del ST en BRI/estimulación\nAslanger → III elevado + ST deprimido V4-V6\nTodos pueden ser pistas de oclusión coronaria aguda en el contexto apropiado. (OUP Academic)\n\n💎 PERLAS DE EXAMEN\nde Winter: depresión ascendente del ST + T altas y simétricas en precordiales.\nWellens: T bifásicas o profundamente invertidas, especialmente V2-V3.\nSgarbossa: interpretar el ST en relación con el QRS en BRI o estimulación ventricular.\nAslanger: elevación aislada en III + depresión en V4-V6.\nOndas T hiperagudas: ondas T simétricas, anchas y desproporcionadamente grandes respecto al QRS. (OUP Academic)\nLa ausencia de elevación clásica del ST no excluye una oclusión coronaria aguda. (OUP Academic)\n📚 REFERENCIAS\nESC/ACC/AHA/WHF. Fifth Universal Definition of Myocardial Infarction (2026). European Heart Journal. Publicado el 28 de agosto de 2026. (OUP Academic)\nESC/ACC/AHA/WHF. Sección 13: The electrocardiogram, incluyendo criterios y patrones electrocardiográficos de isquemia y oclusión coronaria aguda. (OUP Academic)"
  },
  {
    "id": "dr-q-eval2-37",
    "examArea": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO / ELECTROCARDIOGRAMA",
    "topic": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO / ELECTROCARDIOGRAMA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un hombre de 50 años consulta por dolor torácico atípico de inicio reciente. El electrocardiograma muestra elevación del segmento ST de 1 mm en DII y 1 mm en DIII, sin otras alteraciones significativas. Según la Quinta Definición Universal de Infarto de Miocardio 2026, ¿cuál es la interpretación más adecuada de este electrocardiograma?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "No cumple criterios de elevación del ST porque en un hombre mayor de 40 años se requieren ≥2 mm en cualquier derivación."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Cumple el criterio electrocardiográfico de elevación del ST, porque en derivaciones distintas de V2-V3 el umbral es ≥1 mm en al menos dos derivaciones contiguas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "No cumple criterios porque se requiere una elevación ≥2 mm en DII y DIII para considerar un IAM con elevación del ST."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Cumple criterios únicamente si además presenta elevación ≥2 mm en V2-V3."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEsta pregunta tiene una trampa de edad y derivación.\nLa definición 2026 establece elevación del ST en el punto J en ≥2 derivaciones contiguas:\nEn V2-V3:\nHombres <40 años: ≥2,5 mm\nHombres ≥40 años: ≥2 mm\nMujeres: ≥1,5 mm\nEn todas las demás derivaciones:\n≥1 mm\nPor tanto, DII y DIII no utilizan el corte de 2 mm de los hombres mayores de 40 años. Ese corte es específico para V2-V3. (OUP Academic)",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEsta pregunta tiene una trampa de edad y derivación.\nLa definición 2026 establece elevación del ST en el punto J en ≥2 derivaciones contiguas:\nEn V2-V3:\nHombres <40 años: ≥2,5 mm\nHombres ≥40 años: ≥2 mm\nMujeres: ≥1,5 mm\nEn todas las demás derivaciones:\n≥1 mm\nPor tanto, DII y DIII no utilizan el corte de 2 mm de los hombres mayores de 40 años. Ese corte es específico para V2-V3. (OUP Academic)\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n\n1. Primero mira dónde está la elevación\nEl paciente tiene:\nDII ↑ 1 mm\nDIII ↑ 1 mm\nEstas son dos derivaciones contiguas que representan la cara inferior.\nPor tanto:\n≥1 mm en DII + ≥1 mm en DIII\n⬇️\n✅ Cumple el criterio de elevación del ST.\n\n2. Ahora viene la trampa\nEl paciente tiene 50 años.\nPodrías recordar:\n\"Hombre >40 años → necesito ≥2 mm.\"\n❌ Incorrecto.\nLa edad modifica el punto de corte solamente en V2-V3.\nEs decir:\nHombre ≥40 años + V2-V3 → ≥2 mm\nPero:\nDII, DIII, aVF, DI, aVL, V4-V6 → ≥1 mm\n(OUP Academic)\n\n🔥 ¿POR QUÉ EXISTE UN UMBRAL DIFERENTE EN V2-V3?\nPorque la elevación del ST en V2-V3 puede encontrarse como variante de la repolarización normal, especialmente en personas jóvenes.\nPor eso la definición utiliza puntos de corte más altos en estas derivaciones y los ajusta según sexo y edad.\nV2-V3 = las derivaciones especiales.\nHombre <40 → ≥2,5 mm\nHombre ≥40 → ≥2 mm\nMujer → ≥1,5 mm\nResto de derivaciones:\n≥1 mm\n(OUP Academic)\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. No cumple porque necesita ≥2 mm en cualquier derivación ❌\nIncorrecta.\nEl corte de ≥2 mm para hombres ≥40 años corresponde a V2-V3, no a todas las derivaciones.\n\nC. Se necesitan ≥2 mm en DII y DIII ❌\nIncorrecta.\nEn las derivaciones inferiores, el criterio es:\n≥1 mm en ≥2 derivaciones contiguas.\nPor tanto, 1 mm en DII + 1 mm en DIII cumple el criterio electrocardiográfico.\n\nD. Necesita además elevación en V2-V3 ❌\nIncorrecta.\nNo es necesario que exista elevación en V2-V3.\nDII y DIII son derivaciones contiguas y pueden cumplir por sí mismas el criterio de elevación del ST.\n\n🚨 TRAMPA DE EXAMEN\nNo memorices:\n\"Hombre mayor de 40 → 2 mm.\"\nMemoriza:\n\"Hombre mayor de 40 → 2 mm EN V2-V3.\"\nEse pequeño detalle cambia la respuesta.\n\n🎯 REGLA DE ORO DR Q\nST ↑ ≥1 mm en ≥2 derivaciones contiguas\nEXCEPTO V2-V3:\n👨 <40 años → ≥2,5 mm\n👨 ≥40 años → ≥2 mm\n👩 cualquier edad → ≥1,5 mm\n(OUP Academic)\n\n💎 PERLAS DE EXAMEN\nDII + DIII + aVF → cara inferior.\nEn derivaciones distintas de V2-V3: ≥1 mm en ≥2 derivaciones contiguas.\nEn V2-V3 existen puntos de corte específicos por sexo y edad.\nUn hombre de 50 años con 1 mm en DII y DIII sí cumple el criterio de elevación del ST.\nEstos criterios electrocardiográficos establecen una sospecha/diagnóstico de trabajo de STEMI, pero el diagnóstico final de IAM requiere integrar clínica, troponina y, cuando corresponda, imagen y evaluación coronaria. (OUP Academic)\nLa ausencia de elevación clásica del ST no descarta una oclusión coronaria aguda; existen patrones como de Winter, Wellens, Sgarbossa y Aslanger. (OUP Academic)\n📚 REFERENCIAS\nESC/ACC/AHA/WHF. Fifth Universal Definition of Myocardial Infarction. European Heart Journal. 2026. (OUP Academic)\nESC/ACC/AHA/WHF. Sección 13, The electrocardiogram, y Tabla 5: criterios electrocardiográficos de isquemia e infarto. (OUP Academic)"
  },
  {
    "id": "dr-q-eval2-38",
    "examArea": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO / IMAGEN CARDÍACA",
    "topic": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO / IMAGEN CARDÍACA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Una mujer de 52 años consulta por dolor torácico y presenta elevación dinámica de troponina cardíaca y cambios inespecíficos del segmento ST; la angiografía coronaria no muestra lesiones obstructivas ni una complicación coronaria aguda. La ecocardiografía evidencia alteración de la contractilidad ventricular izquierda, pero el patrón no corresponde claramente a un territorio coronario. ¿Cuál de las siguientes pruebas es especialmente útil para diferenciar un infarto de miocardio de diagnósticos alternativos como miocarditis o síndrome de Takotsubo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Radiografía de tórax."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Resonancia magnética cardíaca con realce tardío de gadolinio."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Holter de 24 horas."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Prueba de esfuerzo convencional."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa resonancia magnética cardíaca (CMR) adquiere un papel especialmente importante en la evaluación de pacientes con lesión miocárdica aguda cuando la etiología no está clara.\nLa CMR permite valorar:\nEdema miocárdico.\nInflamación.\nNecrosis/fibrosis mediante realce tardío de gadolinio (LGE).\nObstrucción microvascular.\nHemorragia intramiocárdica.\nFunción ventricular y alteraciones regionales de la contractilidad.\nAdemás, puede ayudar a diferenciar un IAM de entidades como miocarditis o Takotsubo cuando la angiografía no demuestra una causa coronaria aguda. (OUP Academic)",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa resonancia magnética cardíaca (CMR) adquiere un papel especialmente importante en la evaluación de pacientes con lesión miocárdica aguda cuando la etiología no está clara.\nLa CMR permite valorar:\nEdema miocárdico.\nInflamación.\nNecrosis/fibrosis mediante realce tardío de gadolinio (LGE).\nObstrucción microvascular.\nHemorragia intramiocárdica.\nFunción ventricular y alteraciones regionales de la contractilidad.\nAdemás, puede ayudar a diferenciar un IAM de entidades como miocarditis o Takotsubo cuando la angiografía no demuestra una causa coronaria aguda. (OUP Academic)\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n\n1. Primero: ¿qué tenemos?\nEl paciente tiene:\nTroponina con ascenso/descenso\n⬇️\nLESIÓN MIOCÁRDICA AGUDA\nPero eso no significa automáticamente IAM.\n\n2. La angiografía no encuentra una causa coronaria\nNo hay:\nObstrucción coronaria significativa.\nTrombosis evidente.\nComplicación coronaria aguda.\nEntonces aparece una pregunta fundamental:\n¿La lesión miocárdica se debe realmente a isquemia?\nAquí es donde la imagen cardíaca adquiere un papel fundamental.\n\n🧲 ¿POR QUÉ LA RESONANCIA CARDÍACA ES TAN ÚTIL?\nLa CMR puede mostrar diferentes patrones de lesión miocárdica.\n❤️ IAM\nEl patrón de lesión suele corresponder a una distribución isquémica, relacionada con un territorio vascular determinado.\nEl realce tardío de gadolinio (LGE) permite identificar necrosis/fibrosis y valorar su extensión.\n🦠 Miocarditis\nPuede mostrar edema e inflamación y un patrón de lesión que no sigue necesariamente la distribución de un territorio coronario.\n💔 Takotsubo\nPuede existir una importante alteración de la función ventricular y elevación de troponina, pero el patrón no corresponde necesariamente a una distribución coronaria y generalmente no presenta el patrón típico de necrosis isquémica por LGE.\nLa CMR puede ayudar a separar estas entidades. (OUP Academic)\n\n🔥 ¿QUÉ CAMBIÓ CON LA DEFINICIÓN 2026?\nEste es el concepto que quiero que te lleves:\nAntes podíamos pensar de manera muy simplificada:\nTroponina + dolor torácico + ECG = IAM.\nAhora el enfoque es mucho más integrador:\nCLÍNICA\n↓\nECG\n↓\nTROPONINA\n↓\nIMAGEN CARDÍACA / CORONARIA\n↓\n¿QUÉ ESTÁ PRODUCIENDO LA LESIÓN MIOCÁRDICA?\nLa nueva definición establece que el diagnóstico clínico de IAM puede apoyarse en biomarcadores, ECG y evidencia mediante imagen coronaria o cardíaca. Ningún criterio aislado debe interpretarse fuera del contexto clínico. (OUP Academic)\n\n🩺 ¿Y QUÉ PAPEL TIENE EL ECOCARDIOGRAMA?\nNo debemos pensar que todo es resonancia.\nLa ecocardiografía sigue siendo una herramienta fundamental y rápida.\nPuede demostrar:\nAlteraciones regionales de la contractilidad.\nExtensión del infarto.\nTrombo ventricular.\nInsuficiencia mitral por complicación mecánica.\nComunicación interventricular.\nDerrame pericárdico.\nPseudoaneurisma.\nFunción ventricular.\nAdemás, puede ayudar a identificar diagnósticos alternativos como disección aórtica, pericarditis o embolia pulmonar masiva. (OUP Academic)\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. Radiografía de tórax ❌\nPuede ser útil para evaluar otras causas de dolor torácico o congestión pulmonar, pero no caracteriza directamente la lesión miocárdica ni permite diferenciar adecuadamente IAM, miocarditis y Takotsubo.\nC. Holter de 24 horas ❌\nEs útil para detectar arritmias, pero no es la prueba de elección para caracterizar el tejido miocárdico.\nD. Prueba de esfuerzo convencional ❌\nNo es la herramienta adecuada en el contexto de lesión miocárdica aguda para diferenciar etiologías.\n\n🔥 TRAMPA DE EXAMEN\nMINOCA NO SIGNIFICA \"NO HAY INFARTO\".\nSi encuentras:\nTroponina ↑/↓\n\nevidencia de isquemia\n\narterias coronarias sin obstrucción significativa\nno debes concluir automáticamente:\n\"Entonces no es un infarto\".\nHay que investigar la causa.\nLa CMR puede ser especialmente útil para distinguir IAM de miocarditis, Takotsubo y otras causas de lesión miocárdica. (OUP Academic)\n\n🎯 REGLA DE ORO DR Q\nTROPONINA ELEVADA TE DICE QUE HAY LESIÓN; LA IMAGEN AYUDA A DECIR QUÉ LA ESTÁ CAUSANDO.\nY en un paciente con lesión miocárdica aguda y coronarias no obstructivas:\nCMR = piensa en ella para buscar la etiología.\n\n💎 PERLAS DE EXAMEN\nEcocardiografía: rápida, disponible y excelente para valorar alteraciones segmentarias y complicaciones mecánicas.\nCMR: excelente caracterización tisular.\nLGE: permite identificar necrosis/fibrosis y valorar su distribución.\nT2: permite valorar edema/inflamación.\nLa CMR es especialmente útil cuando la angiografía no identifica una patología coronaria aguda. (OUP Academic)\nEn MINOCA, la CMR tiene mayor rendimiento diagnóstico cuando se realiza tempranamente; la definición 2026 señala un mayor rendimiento cuando se realiza dentro de las primeras 2 semanas. (OUP Academic)\nLa imagen también permite detectar complicaciones del IAM: trombo ventricular, pseudoaneurisma, insuficiencia mitral, comunicación interventricular y afectación del ventrículo derecho. (OUP Academic)\n📚 REFERENCIAS\nESC/ACC/AHA/WHF. Fifth Universal Definition of Myocardial Infarction. European Heart Journal. 2026. Sección 15: Coronary and cardiac imaging. (OUP Academic)\nEuropean Society of Cardiology. Fifth Universal Definition of Myocardial Infarction (2026). Publicada el 28 de agosto de 2026. (Escardio)\nESC. 2026 Pocket Guidelines on the Fifth Universal Definition of Myocardial Infarction. 2026. (Escardio)"
  },
  {
    "id": "dr-q-eval2-39",
    "examArea": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO / MINOCA",
    "topic": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO / MINOCA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un hombre de 55 años consulta por dolor torácico y presenta elevación dinámica de troponina con cambios electrocardiográficos compatibles con isquemia; la angiografía coronaria no muestra estenosis ≥50%. Se encuentra estable y no existe inicialmente una causa extracoronaria evidente de lesión miocárdica. Según la Quinta Definición Universal de Infarto de Miocardio de 2026, ¿cuál es la denominación más adecuada para este escenario?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Infarto de miocardio sin obstrucción coronaria (MINOCA), como diagnóstico definitivo."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Lesión miocárdica con arterias coronarias no obstructivas, como diagnóstico de trabajo."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Infarto de miocardio secundario confirmado por ausencia de enfermedad coronaria obstructiva."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Lesión miocárdica crónica secundaria a enfermedad coronaria no obstructiva."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEste es uno de los cambios importantes de la Quinta Definición Universal de IAM 2026.\nAnteriormente se utilizaba:\nMINOCA = Myocardial Infarction with Non-Obstructive Coronary Arteries\nAhora la definición cambia a:\nMyocardial injury with non-obstructive coronary arteries\nEs decir:\nLesión miocárdica con arterias coronarias no obstructivas.\nLa razón es fundamental: encontrar coronarias sin obstrucciones ≥50% no demuestra que el paciente tenga un infarto. Puede tener una causa coronaria de IAM, pero también puede tener miocarditis, síndrome de Takotsubo, cardiomiopatía, embolia pulmonar u otras causas. Por eso MINOCA pasa a ser un diagnóstico de trabajo, que obliga a continuar la investigación hasta establecer la causa definitiva. (OUP Academic)",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEste es uno de los cambios importantes de la Quinta Definición Universal de IAM 2026.\nAnteriormente se utilizaba:\nMINOCA = Myocardial Infarction with Non-Obstructive Coronary Arteries\nAhora la definición cambia a:\nMyocardial injury with non-obstructive coronary arteries\nEs decir:\nLesión miocárdica con arterias coronarias no obstructivas.\nLa razón es fundamental: encontrar coronarias sin obstrucciones ≥50% no demuestra que el paciente tenga un infarto. Puede tener una causa coronaria de IAM, pero también puede tener miocarditis, síndrome de Takotsubo, cardiomiopatía, embolia pulmonar u otras causas. Por eso MINOCA pasa a ser un diagnóstico de trabajo, que obliga a continuar la investigación hasta establecer la causa definitiva. (OUP Academic)\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n\n1. ¿Qué tenemos inicialmente?\nEl paciente presenta:\nTroponina con ascenso/descenso\n⬇️\nLesión miocárdica aguda\nAdemás:\nCambios electrocardiográficos compatibles con isquemia\n⬇️\nExiste una sospecha importante de IAM.\n\n2. ¿Qué encontramos en la coronariografía?\nNo hay estenosis ≥50%.\n⬇️\nArterias coronarias no obstructivas.\nAquí aparece el concepto MINOCA.\nPero atención:\n🚨 NO DIGAS TODAVÍA \"INFARTO\".\nLa nueva definición 2026 cambió precisamente este punto.\n\n🔥 ¿QUÉ CAMBIÓ CON MINOCA?\nAntes:\nMINOCA\n= Myocardial Infarction with Non-Obstructive Coronary Arteries\nEl propio nombre decía:\n\"Esto es un infarto\".\nAhora:\nLesión miocárdica + coronarias no obstructivas\n⬇️\nDIAGNÓSTICO DE TRABAJO\nPorque todavía necesitamos descubrir qué está causando la lesión miocárdica. (OUP Academic)\n\n🧲 ¿QUÉ HACES DESPUÉS?\nAquí conecta directamente con nuestra pregunta anterior sobre imagen cardíaca.\nUna vez que encontramos coronarias no obstructivas, debemos buscar la etiología.\nPor ejemplo:\n❤️ IAM verdadero\nPuede existir una causa coronaria como:\nVasoespasmo.\nDisección coronaria espontánea.\nEmbolia coronaria.\nAterotrombosis con reperfusión espontánea.\nOtras patologías coronarias agudas.\n🦠 Miocarditis\nPuede producir:\nTroponina ↑ + alteraciones ECG + dolor torácico\ny simular un IAM.\n💔 Takotsubo\nPuede producir:\nTroponina ↑ + alteraciones ECG + alteración importante de la contractilidad\nsin que exista necesariamente un infarto isquémico.\nPor eso la resonancia magnética cardíaca puede ser fundamental para establecer el diagnóstico definitivo. (OUP Academic)\n\n🔥 EL CONCEPTO QUE QUIERO QUE TE LLEVES\nMINOCA YA NO ES EL DIAGNÓSTICO FINAL.\nEs un:\nDIAGNÓSTICO DE TRABAJO\nhasta determinar la etiología.\nEl paciente puede terminar siendo diagnosticado con:\nIAM primario\no\nIAM secundario\no\nMiocarditis\no\nTakotsubo\no\notra causa de lesión miocárdica.\nLa nueva definición señala explícitamente que, si después de los estudios se confirma un IAM, este debe clasificarse finalmente como primario, secundario o relacionado con procedimiento, según el contexto. (OUP Academic)\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. Infarto de miocardio sin obstrucción coronaria como diagnóstico definitivo ❌\nEsta es la trampa principal.\nEl término MINOCA ya no debe utilizarse como si demostrara que el paciente tiene definitivamente un IAM.\nLas coronarias no obstructivas simplemente indican que no existe una estenosis ≥50%, pero todavía falta determinar la causa. (OUP Academic)\n\nC. IAM secundario confirmado por ausencia de enfermedad coronaria obstructiva ❌\nIncorrecta.\nLa ausencia de obstrucción coronaria no convierte automáticamente el cuadro en IAM secundario.\nEl IAM secundario requiere una condición aguda que produzca desequilibrio entre aporte y demanda de oxígeno.\n\nD. Lesión miocárdica crónica ❌\nIncorrecta.\nExiste un patrón dinámico de troponina:\nascenso/descenso → lesión miocárdica aguda.\nNo corresponde a lesión crónica.\n\n🎯 REGLA DE ORO DR Q\nCORONARIAS <50% ≠ DIAGNÓSTICO FINAL.\nPiensa:\nLesión miocárdica + coronarias no obstructivas\n⬇️\nDiagnóstico de trabajo\n⬇️\nINVESTIGA LA CAUSA\n⬇️\nIAM / miocarditis / Takotsubo / otra etiología\n\n💎 PERLAS DE EXAMEN\nEn 2026, MINOCA se redefine como lesión miocárdica con arterias coronarias no obstructivas. (OUP Academic)\nNo es un diagnóstico final, sino un diagnóstico de trabajo.\nCoronarias no obstructivas = sin estenosis ≥50% en la angiografía. (OUP Academic)\nLa CMR es especialmente útil para buscar una causa alternativa como miocarditis o Takotsubo.\nSi finalmente se confirma un IAM, debe clasificarse según la nueva clasificación primario, secundario o relacionado con procedimiento. (OUP Academic)\nMINOCA no significa \"coronarias normales y ya está\": significa \"todavía tenemos que averiguar qué ocurrió\".\n📚 REFERENCIAS\nESC/ACC/AHA/WHF. Fifth Universal Definition of Myocardial Infarction. European Heart Journal. 2026. Sección 11: Myocardial injury with non-obstructive coronary arteries. (OUP Academic)\nEuropean Society of Cardiology. Fifth Universal Definition of Myocardial Infarction (2026). 28 de agosto de 2026. (Escardio)\nESC. 2026 Pocket Guidelines on the Fifth Universal Definition of Myocardial Infarction. 2026. (Escardio)"
  },
  {
    "id": "dr-q-eval2-40",
    "examArea": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO / MINOCA",
    "topic": "CARDIOLOGÍA / INFARTO AGUDO DE MIOCARDIO / MINOCA",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un hombre de 55 años presenta dolor torácico, cambios isquémicos en el ECG y elevación dinámica de troponina; la angiografía coronaria no muestra estenosis ≥50% y no identifica una lesión coronaria culpable. Se encuentra hemodinámicamente estable y persiste la sospecha de lesión miocárdica aguda. ¿Cuál es el siguiente estudio que debe priorizarse para establecer la etiología?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Prueba de esfuerzo con ejercicio."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Resonancia magnética cardíaca con caracterización tisular."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Holter de 24 horas."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Radiografía de tórax."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nCuando un paciente presenta lesión miocárdica aguda + coronarias no obstructivas, todavía no conocemos la causa definitiva.\nLa nueva definición 2026 considera este escenario como:\nLesión miocárdica con arterias coronarias no obstructivas\ny lo considera un diagnóstico de trabajo, no un diagnóstico final.\nEl siguiente paso es buscar activamente la etiología. La resonancia magnética cardíaca (CMR) tiene un papel central porque permite diferenciar entre:\nInfarto de miocardio.\nMiocarditis.\nSíndrome de Takotsubo.\nCardiomiopatías.\nOtras causas de lesión miocárdica.\nLa definición 2026 señala que el rendimiento diagnóstico de la CMR es mayor cuando se realiza dentro de las primeras 2 semanas. (OUP Academic)",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nCuando un paciente presenta lesión miocárdica aguda + coronarias no obstructivas, todavía no conocemos la causa definitiva.\nLa nueva definición 2026 considera este escenario como:\nLesión miocárdica con arterias coronarias no obstructivas\ny lo considera un diagnóstico de trabajo, no un diagnóstico final.\nEl siguiente paso es buscar activamente la etiología. La resonancia magnética cardíaca (CMR) tiene un papel central porque permite diferenciar entre:\nInfarto de miocardio.\nMiocarditis.\nSíndrome de Takotsubo.\nCardiomiopatías.\nOtras causas de lesión miocárdica.\nLa definición 2026 señala que el rendimiento diagnóstico de la CMR es mayor cuando se realiza dentro de las primeras 2 semanas. (OUP Academic)\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n\n1. Ya hicimos la coronariografía\nTenemos:\nTroponina ↑↓\n\nECG compatible con isquemia\n\nCoronarias sin estenosis ≥50%\n⬇️\nLESIÓN MIOCÁRDICA CON CORONARIAS NO OBSTRUCTIVAS\nPero todavía no sabemos:\n¿Es realmente un infarto o estamos frente a otra causa de lesión miocárdica?\n\n2. Aquí entra la resonancia cardíaca\nLa CMR permite mirar directamente el tejido miocárdico.\nPuede evaluar:\nEdema.\nInflamación.\nNecrosis.\nFibrosis.\nViabilidad.\nAlteraciones regionales.\nObstrucción microvascular.\nHemorragia intramiocárdica.\nY, sobre todo, permite identificar patrones diferentes de lesión. (OUP Academic)\n\n🧲 3. ¿Qué puede encontrar la CMR?\n❤️ INFARTO\nPatrón de lesión compatible con etiología isquémica, generalmente siguiendo una distribución vascular.\n🦠 MIOCARDITIS\nPuede mostrar edema e inflamación con un patrón de lesión que no sigue una distribución coronaria típica.\n💔 TAKOTSUBO\nPuede existir una marcada alteración de la contractilidad, pero sin el patrón típico de necrosis isquémica del infarto.\nPor eso la CMR puede cambiar completamente el diagnóstico y, por tanto, el tratamiento. La definición 2026 señala que, en pacientes con este escenario, la CMR identifica con frecuencia diagnósticos alternativos como miocarditis o Takotsubo. (OUP Academic)\n\n🔥 4. ¿Y si la CMR demuestra que sí es un infarto?\nEntonces todavía tenemos que determinar qué mecanismo coronario lo produjo.\nAquí pueden entrar:\n🔬 Imagen intracoronaria\nOCT / IVUS\nPuede detectar:\nRotura de placa.\nErosión de placa.\nTrombo mural.\nDisección coronaria espontánea.\nHematoma intramural.\n💉 Pruebas funcionales coronarias\nPueden ayudar a identificar:\nVasoespasmo epicárdico.\nDisfunción microvascular.\nEsto es especialmente útil cuando la angiografía convencional parece normal. (OUP Academic)\n\n🧠 EL ALGORITMO QUE QUIERO QUE TE APRENDAS\nLESIÓN MIOCÁRDICA AGUDA\n⬇️\nCORONARIAS NO OBSTRUCTIVAS\n⬇️\nDIAGNÓSTICO DE TRABAJO\n⬇️\n🧲 CMR\n⬇️\n¿IAM?\nSí → buscar mecanismo coronario.\n¿Miocarditis?\nSí → diagnóstico alternativo.\n¿Takotsubo?\nSí → diagnóstico alternativo.\n¿No resuelve?\n⬇️\nOCT/IVUS + pruebas funcionales coronarias según sospecha. (OUP Academic)\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. Prueba de esfuerzo ❌\nNo es el estudio prioritario para caracterizar una lesión miocárdica aguda ya establecida.\nPrimero debemos determinar qué está causando la lesión.\n\nC. Holter de 24 horas ❌\nPuede ser útil si sospechamos una arritmia como desencadenante, pero no permite caracterizar directamente el tejido miocárdico ni diferenciar IAM de miocarditis o Takotsubo.\n\nD. Radiografía de tórax ❌\nPuede aportar información sobre congestión pulmonar u otras causas de dolor torácico, pero tiene poca capacidad para determinar la etiología de la lesión miocárdica.\n\n🔥 TRAMPA DE EXAMEN\n\"Coronarias normales\" NO significa \"paciente normal\".\nY tampoco significa:\n\"Ya descarté el infarto.\"\nSignifica:\nAHORA TENGO QUE EXPLICAR LA LESIÓN MIOCÁRDICA.\nPor eso la CMR es tan importante.\n\n🎯 REGLA DE ORO DR Q\nMINOCA / LESIÓN MIOCÁRDICA CON CORONARIAS NO OBSTRUCTIVAS → BUSCA LA ETIOLOGÍA, NO TE QUEDES CON EL NOMBRE.\nCMR = pieza fundamental del estudio.\nIdealmente:\ndentro de las primeras 2 semanas. (OUP Academic)\n\n💎 PERLAS DE EXAMEN\nCoronarias <50% → diagnóstico de trabajo, no diagnóstico final.\nCMR es fundamental para diferenciar IAM, miocarditis y Takotsubo.\nLa CMR tiene mayor rendimiento cuando se realiza dentro de las 2 primeras semanas.\nSi se sospecha una causa coronaria sutil → OCT/IVUS.\nSi se sospecha vasoespasmo o disfunción microvascular → pruebas funcionales coronarias.\nSi finalmente se confirma un IAM, se clasifica como primario, secundario o relacionado con procedimiento según el mecanismo. (OUP Academic)\n📚 REFERENCIAS\nESC/ACC/AHA/WHF. Fifth Universal Definition of Myocardial Infarction. European Heart Journal. 2026. Secciones 11 y 15. (OUP Academic)\nEuropean Society of Cardiology. Fifth Universal Definition of Myocardial Infarction – 2026. ESC – Quinta Definición Universal de Infarto de Miocardio\nESC/ACC/AHA/WHF. Fifth Universal Definition of Myocardial Infarction, sección de imagen coronaria y cardíaca. (OUP Academic)"
  },
  {
    "id": "dr-q-eval2-41",
    "examArea": "CARDIOLOGÍA / INSUFICIENCIA CARDIACA / NUEVA CLASIFICACIÓN ESC 2026",
    "topic": "CARDIOLOGÍA / INSUFICIENCIA CARDIACA / NUEVA CLASIFICACIÓN ESC 2026",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Según las nuevas guías ESC 2026 de insuficiencia cardiaca, ¿cómo se clasifica actualmente a un paciente con insuficiencia cardiaca y una fracción de eyección ventricular izquierda del 45%?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Insuficiencia cardiaca con fracción de eyección ligeramente reducida (HFmrEF)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Insuficiencia cardiaca con fracción de eyección reducida (HFrEF)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Insuficiencia cardiaca con fracción de eyección preservada (HFpEF)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Insuficiencia cardiaca con fracción de eyección mejorada (HFimpEF)."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEste es uno de los cambios más importantes de la ESC 2026.\nLa clasificación anterior utilizaba:\nHFrEF: ≤40%\nHFmrEF: 41–49%\nHFpEF: ≥50%\nLa ESC 2026 elimina HFmrEF como fenotipo independiente y establece un punto de corte simplificado:\n🔴 HFrEF → FEVI <50%\n🟢 HFpEF → FEVI ≥50%\nPor lo tanto:\nFEVI 45% → HFrEF. (Escardio)",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEste es uno de los cambios más importantes de la ESC 2026.\nLa clasificación anterior utilizaba:\nHFrEF: ≤40%\nHFmrEF: 41–49%\nHFpEF: ≥50%\nLa ESC 2026 elimina HFmrEF como fenotipo independiente y establece un punto de corte simplificado:\n🔴 HFrEF → FEVI <50%\n🟢 HFpEF → FEVI ≥50%\nPor lo tanto:\nFEVI 45% → HFrEF. (Escardio)\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n\n1. ¿Qué cambió?\nAntes teníamos tres grupos:\n≤40% → HFrEF\n41–49% → HFmrEF\n≥50% → HFpEF\nLa nueva guía considera que los pacientes con FEVI ligeramente disminuida comparten suficiente fisiopatología y respuesta terapéutica con aquellos con FEVI reducida como para simplificar la clasificación. (Escardio)\nPor eso:\nSe elimina HFmrEF como categoría independiente.\n\n2. ¿Qué debes memorizar ahora?\nOlvídate de la antigua división 40–41–49.\nPara la clasificación ESC 2026:\nFEVI <50% → HFrEF\nFEVI ≥50% → HFpEF\nAsí de sencillo.\n\n🔥 ¿POR QUÉ CAMBIARON LA CLASIFICACIÓN?\nLa categoría HFmrEF había surgido en gran medida porque muchos ensayos clínicos utilizaban diferentes puntos de corte para seleccionar pacientes.\nCon la acumulación de evidencia, se observó que los pacientes con FEVI ligeramente reducida comparten características fisiopatológicas y pueden beneficiarse de tratamientos utilizados en HFrEF.\nLa ESC decidió, por tanto, simplificar la clasificación para facilitar su aplicación clínica. (Escardio)\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. HFmrEF ❌\nEra la respuesta correcta con la clasificación anterior.\nPero en 2026 la ESC elimina HFmrEF como fenotipo independiente.\nUna FEVI de 45% ahora entra dentro de:\nHFrEF.\n\nC. HFpEF ❌\nHFpEF corresponde actualmente a:\nFEVI ≥50%\nComo el paciente tiene 45%, no cumple este criterio. (Escardio)\n\nD. HFimpEF ❌\nEsta categoría no se define simplemente por tener una FEVI de 45%.\nLa insuficiencia cardiaca con FEVI mejorada hace referencia a pacientes cuya FEVI ha aumentado desde una situación previa de FEVI reducida como consecuencia de la evolución y/o tratamiento.\nEs decir:\nNo basta con conocer una FEVI aislada.\nHay que conocer la trayectoria de la FEVI.\n\n🔥 TRAMPA DE EXAMEN\nSi ves:\nFEVI 45%\ny automáticamente respondes:\nHFmrEF\n🚨 ESTÁS USANDO LA CLASIFICACIÓN ANTIGUA.\nDesde la ESC 2026:\n45% = HFrEF.\n\n🎯 REGLA DE ORO DR Q\nESC 2026\nFEVI <50% → HFrEF 🔴\nFEVI ≥50% → HFpEF 🟢\n🚨 HFmrEF 41–49% → YA NO ES UN FENOTIPO INDEPENDIENTE.\n(Escardio)\n\n💎 PERLAS DE EXAMEN\nFEVI 35% → HFrEF.\nFEVI 45% → HFrEF.\nFEVI 49% → HFrEF.\nFEVI 50% → HFpEF.\nFEVI 60% → HFpEF.\nLa ESC 2026 adopta además una clasificación por estadios A-D, desde pacientes en riesgo hasta insuficiencia cardiaca avanzada, enfatizando prevención y diagnóstico temprano. (Escardio)\nTambién cambia la nomenclatura terapéutica: FMT (foundational medical therapy), AMT (additional medical therapy) y GDIT (guideline-directed interventional therapy). (Escardio)\nLa denominación “acute heart failure” se sustituye por “decompensated heart failure”, porque algunas descompensaciones pueden producirse de forma progresiva y no necesariamente súbita. (Escardio)\n📚 REFERENCIAS\nEuropean Society of Cardiology (ESC). 2026 ESC Guidelines for the management of heart failure. European Heart Journal. 2026; publicado el 28 de agosto de 2026. (Escardio)\nESC. Major changes made to the ESC Guidelines on heart failure. 28 de agosto de 2026. (Escardio)\nESC. 2026 Pocket Guidelines on Heart Failure. 2026. (Escardio)"
  },
  {
    "id": "dr-q-eval2-42",
    "examArea": "CARDIOLOGÍA / INSUFICIENCIA CARDIACA / ESTADIOS ESC 2026",
    "topic": "CARDIOLOGÍA / INSUFICIENCIA CARDIACA / ESTADIOS ESC 2026",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un hombre de 58 años con hipertensión arterial y diabetes mellitus tipo 2 consulta para control ambulatorio; se encuentra asintomático, sin disnea, ortopnea, edema ni intolerancia al ejercicio, presenta examen cardiovascular normal y ecocardiograma sin alteraciones estructurales relevantes, sin embargo, por sus factores de riesgo cardiovasculares tiene un riesgo aumentado de desarrollar insuficiencia cardiaca en el futuro. De acuerdo con la clasificación por estadios propuesta en las guías ESC 2026 de insuficiencia cardiaca, ¿en qué estadio se encuentra este paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Estadio A: paciente con factores de riesgo para desarrollar insuficiencia cardiaca, pero sin enfermedad cardiaca estructural, síntomas ni signos de insuficiencia cardiaca."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Estadio B: paciente con enfermedad cardiaca estructural o alteraciones funcionales que sugieren una fase preclínica de insuficiencia cardiaca, pero todavía sin síntomas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Estadio C: paciente con enfermedad cardiaca estructural y síntomas o signos actuales o previos compatibles con insuficiencia cardiaca."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Estadio D: paciente con insuficiencia cardiaca avanzada, síntomas persistentes y necesidad de estrategias terapéuticas especializadas."
      },
    ],
    "correctOptionId": "A",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa ESC 2026 incorpora una clasificación por estadios A-D, buscando identificar la enfermedad desde la fase de riesgo hasta la insuficiencia cardiaca avanzada. (Escardio)\nEstadio A → riesgo de insuficiencia cardiaca.\nEstadio B → preinsuficiencia cardiaca / alteraciones objetivas, pero sin síntomas.\nEstadio C → insuficiencia cardiaca clínica, con síntomas/signos actuales o previos.\nEstadio D → insuficiencia cardiaca avanzada.\n🔥 TRAMPA DE EXAMEN\nTener factores de riesgo NO significa tener insuficiencia cardiaca.\nUn paciente con HTA, diabetes, obesidad, enfermedad coronaria u otros factores de riesgo, pero sin evidencia de enfermedad cardiaca ni síntomas, permanece en estadio A.\nEl salto conceptual importante es:\nA → riesgoB → enfermedad/pre-HF sin síntomasC → HF clínicaD → HF avanzada\n🎯 REGLA DE ORO\nA = At risk.B = Before symptomatic HF.C = Clinical HF.D = Advanced HF.\n❌ ¿Por qué no las otras?\nB. Incorrecta. El estadio B requiere evidencia objetiva de alteración cardiaca o una fase de preinsuficiencia cardiaca, aunque el paciente todavía no tenga síntomas. En este caso el corazón es estructuralmente normal.\nC. Incorrecta. El estadio C corresponde a insuficiencia cardiaca clínica, con síntomas/signos actuales o antecedentes compatibles. Nuestro paciente está asintomático.\nD. Incorrecta. El estadio D representa la enfermedad avanzada, con síntomas importantes/persistentes y necesidad de estrategias especializadas.\n💎 PERLA DE EXAMEN\nLa gran idea de la ESC 2026 es que la insuficiencia cardiaca no debe considerarse únicamente cuando aparecen los síntomas. La nueva clasificación enfatiza prevención, reconocimiento precoz e intervención temprana desde los pacientes en riesgo. (Escardio)\n📚 REFERENCIAS\nEuropean Society of Cardiology (ESC). 2026 ESC Guidelines for the management of heart failure. European Heart Journal. 2026. (Escardio)\nESC. Major changes made to the ESC Guidelines on heart failure. 28 Aug 2026. (Escardio)\nESC. 2026 Pocket Guidelines on Heart Failure. (Escardio)",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa ESC 2026 incorpora una clasificación por estadios A-D, buscando identificar la enfermedad desde la fase de riesgo hasta la insuficiencia cardiaca avanzada. (Escardio)\nEstadio A → riesgo de insuficiencia cardiaca.\nEstadio B → preinsuficiencia cardiaca / alteraciones objetivas, pero sin síntomas.\nEstadio C → insuficiencia cardiaca clínica, con síntomas/signos actuales o previos.\nEstadio D → insuficiencia cardiaca avanzada.\n🔥 TRAMPA DE EXAMEN\nTener factores de riesgo NO significa tener insuficiencia cardiaca.\nUn paciente con HTA, diabetes, obesidad, enfermedad coronaria u otros factores de riesgo, pero sin evidencia de enfermedad cardiaca ni síntomas, permanece en estadio A.\nEl salto conceptual importante es:\nA → riesgoB → enfermedad/pre-HF sin síntomasC → HF clínicaD → HF avanzada\n🎯 REGLA DE ORO\nA = At risk.B = Before symptomatic HF.C = Clinical HF.D = Advanced HF.\n❌ ¿Por qué no las otras?\nB. Incorrecta. El estadio B requiere evidencia objetiva de alteración cardiaca o una fase de preinsuficiencia cardiaca, aunque el paciente todavía no tenga síntomas. En este caso el corazón es estructuralmente normal.\nC. Incorrecta. El estadio C corresponde a insuficiencia cardiaca clínica, con síntomas/signos actuales o antecedentes compatibles. Nuestro paciente está asintomático.\nD. Incorrecta. El estadio D representa la enfermedad avanzada, con síntomas importantes/persistentes y necesidad de estrategias especializadas.\n💎 PERLA DE EXAMEN\nLa gran idea de la ESC 2026 es que la insuficiencia cardiaca no debe considerarse únicamente cuando aparecen los síntomas. La nueva clasificación enfatiza prevención, reconocimiento precoz e intervención temprana desde los pacientes en riesgo. (Escardio)\n📚 REFERENCIAS\nEuropean Society of Cardiology (ESC). 2026 ESC Guidelines for the management of heart failure. European Heart Journal. 2026. (Escardio)\nESC. Major changes made to the ESC Guidelines on heart failure. 28 Aug 2026. (Escardio)\nESC. 2026 Pocket Guidelines on Heart Failure. (Escardio)"
  },
  {
    "id": "dr-q-eval2-43",
    "examArea": "CARDIOLOGÍA / INSUFICIENCIA CARDIACA / TRATAMIENTO FUNDAMENTAL",
    "topic": "CARDIOLOGÍA / INSUFICIENCIA CARDIACA / TRATAMIENTO FUNDAMENTAL",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Una mujer de 67 años presenta insuficiencia cardiaca crónica sintomática con una fracción de eyección del ventrículo izquierdo del 38%, actualmente estable y sin signos de congestión. Se inicia tratamiento farmacológico dirigido según las recomendaciones ESC 2026 y el médico plantea qué grupo terapéutico debe considerarse parte del tratamiento médico fundamental debido a su beneficio en reducción de hospitalizaciones y mortalidad. ¿Cuál de los siguientes grupos farmacológicos corresponde a esta terapia fundamental?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Antagonistas de los receptores mineralocorticoides."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Digoxina como tratamiento fundamental en todos los pacientes."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Nitratos de acción prolongada como tratamiento fundamental."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Ivabradina como tratamiento fundamental independientemente de la frecuencia cardiaca."
      },
    ],
    "correctOptionId": "A",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nUna de las novedades importantes de la ESC 2026 es la reorganización del tratamiento de la insuficiencia cardiaca alrededor de la terapia médica fundamental (FMT, foundational medical therapy) y la terapia médica adicional.\nEntre las novedades destaca que los antagonistas de los receptores mineralocorticoides (ARM/MRA) reciben una recomendación clase I en la insuficiencia cardiaca crónica independientemente de la FEVI, siempre teniendo en cuenta las condiciones clínicas y la seguridad del paciente.\n🔥 TRAMPA DE EXAMEN\nNo pienses:\n\"Los ARM son únicamente para FEVI reducida.\"\nLa ESC 2026 amplía el enfoque y establece el papel de los ARM independientemente de la FEVI, aunque el beneficio y las indicaciones concretas pueden variar según el fenotipo y el contexto clínico.\n🎯 REGLA DE ORO\nESC 2026 → ARM = terapia fundamental en IC crónica, independientemente de la FEVI.\n❌ ¿Por qué no las otras?\nB. Digoxina — Incorrecta. Puede utilizarse en pacientes seleccionados, pero no constituye tratamiento fundamental universal para todos los pacientes con insuficiencia cardiaca.\nC. Nitratos — Incorrecta. No forman parte de la terapia médica fundamental universal de la insuficiencia cardiaca.\nD. Ivabradina — Incorrecta. Su utilización depende de características específicas, especialmente la frecuencia cardiaca y el ritmo sinusal; no es terapia fundamental universal.\n💎 PERLA DE EXAMEN\nLa ESC 2026 introduce una forma más estructurada de pensar el tratamiento:\nFMT → tratamiento fundamental que reduce eventosAMT → tratamientos adicionales según fenotipo/objetivoGDIT → intervenciones y dispositivos dirigidos por las guías\nEste cambio de nomenclatura es importante porque permite separar lo que constituye la base terapéutica de las intervenciones añadidas según las características individuales del paciente.\n📚 REFERENCIAS\nEuropean Society of Cardiology. 2026 ESC Guidelines for the management of heart failure. European Heart Journal. 2026.\nEuropean Society of Cardiology. 2026 ESC Guidelines – Heart Failure. Guía oficial ESC de insuficiencia cardiaca\nESC. Major changes made to the ESC Guidelines on heart failure. 2026. Cambios principales de la guía ESC 2026",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nUna de las novedades importantes de la ESC 2026 es la reorganización del tratamiento de la insuficiencia cardiaca alrededor de la terapia médica fundamental (FMT, foundational medical therapy) y la terapia médica adicional.\nEntre las novedades destaca que los antagonistas de los receptores mineralocorticoides (ARM/MRA) reciben una recomendación clase I en la insuficiencia cardiaca crónica independientemente de la FEVI, siempre teniendo en cuenta las condiciones clínicas y la seguridad del paciente.\n🔥 TRAMPA DE EXAMEN\nNo pienses:\n\"Los ARM son únicamente para FEVI reducida.\"\nLa ESC 2026 amplía el enfoque y establece el papel de los ARM independientemente de la FEVI, aunque el beneficio y las indicaciones concretas pueden variar según el fenotipo y el contexto clínico.\n🎯 REGLA DE ORO\nESC 2026 → ARM = terapia fundamental en IC crónica, independientemente de la FEVI.\n❌ ¿Por qué no las otras?\nB. Digoxina — Incorrecta. Puede utilizarse en pacientes seleccionados, pero no constituye tratamiento fundamental universal para todos los pacientes con insuficiencia cardiaca.\nC. Nitratos — Incorrecta. No forman parte de la terapia médica fundamental universal de la insuficiencia cardiaca.\nD. Ivabradina — Incorrecta. Su utilización depende de características específicas, especialmente la frecuencia cardiaca y el ritmo sinusal; no es terapia fundamental universal.\n💎 PERLA DE EXAMEN\nLa ESC 2026 introduce una forma más estructurada de pensar el tratamiento:\nFMT → tratamiento fundamental que reduce eventosAMT → tratamientos adicionales según fenotipo/objetivoGDIT → intervenciones y dispositivos dirigidos por las guías\nEste cambio de nomenclatura es importante porque permite separar lo que constituye la base terapéutica de las intervenciones añadidas según las características individuales del paciente.\n📚 REFERENCIAS\nEuropean Society of Cardiology. 2026 ESC Guidelines for the management of heart failure. European Heart Journal. 2026.\nEuropean Society of Cardiology. 2026 ESC Guidelines – Heart Failure. Guía oficial ESC de insuficiencia cardiaca\nESC. Major changes made to the ESC Guidelines on heart failure. 2026. Cambios principales de la guía ESC 2026"
  },
  {
    "id": "dr-q-eval2-44",
    "examArea": "CARDIOLOGÍA / INSUFICIENCIA CARDIACA / ESC 2026",
    "topic": "CARDIOLOGÍA / INSUFICIENCIA CARDIACA / ESC 2026",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente de 68 años presenta insuficiencia cardiaca crónica con FEVI de 35%, ritmo sinusal y síntomas persistentes pese al tratamiento inicial. No presenta contraindicaciones para tratamiento farmacológico. Según la nueva clasificación terapéutica de la ESC 2026, ¿cuál de los siguientes grupos pertenece a la terapia médica fundamental (FMT)?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Digoxina, ivabradina y vericiguat."
      },
      {
        "id": "B",
        "label": "B",
        "text": "IECA/ARNI, betabloqueador, antagonista del receptor mineralocorticoide e inhibidor SGLT2."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Nitratos, hidralazina y digoxina."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Ivabradina, hierro intravenoso y diuréticos de asa."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa ESC 2026 cambia la forma de hablar del tratamiento de la IC.\nEn lugar de utilizar de manera genérica el término GDMT, introduce:\nFMT → Foundational Medical Therapy\nTerapia médica fundamental\nSon tratamientos dirigidos a pacientes con IC en general que tienen recomendación clase I para disminuir hospitalizaciones por IC y/o mortalidad. (Escardio)\nEn el paciente con HFrEF, la base farmacológica continúa siendo:\nBloqueo del sistema renina-angiotensina mediante IECA/ARNI según el paciente.\nBetabloqueador.\nAntagonista del receptor mineralocorticoide (ARM).\nInhibidor SGLT2.\nLa novedad no es que estos medicamentos hayan aparecido de repente, sino cómo la guía los organiza conceptualmente dentro de la estrategia terapéutica.",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa ESC 2026 cambia la forma de hablar del tratamiento de la IC.\nEn lugar de utilizar de manera genérica el término GDMT, introduce:\nFMT → Foundational Medical Therapy\nTerapia médica fundamental\nSon tratamientos dirigidos a pacientes con IC en general que tienen recomendación clase I para disminuir hospitalizaciones por IC y/o mortalidad. (Escardio)\nEn el paciente con HFrEF, la base farmacológica continúa siendo:\nBloqueo del sistema renina-angiotensina mediante IECA/ARNI según el paciente.\nBetabloqueador.\nAntagonista del receptor mineralocorticoide (ARM).\nInhibidor SGLT2.\nLa novedad no es que estos medicamentos hayan aparecido de repente, sino cómo la guía los organiza conceptualmente dentro de la estrategia terapéutica.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n\nLa forma clásica de estudiarlo era:\n\"Los 4 pilares de HFrEF\".\nAhora la ESC quiere que pensemos en:\nFMT = fundamento del tratamiento\n⬇️\nDespués:\nAMT = Additional Medical Therapy\nTratamientos adicionales según el fenotipo, síntomas, comorbilidades o características específicas.\n⬇️\nY finalmente:\nGDIT = Guideline-Directed Interventional Therapy\nDispositivos e intervenciones recomendadas por las guías.\nLa propia ESC explica que esta nueva nomenclatura busca evitar la confusión que había generado el término GDMT, que se había vuelto demasiado amplio a medida que aparecía nueva evidencia. (Escardio)\n\n🔥 ¿POR QUÉ ESTA PREGUNTA ES IMPORTANTE?\nPorque la guía 2026 no solamente cambia qué tratamientos utilizamos, sino también cómo debemos conceptualizar el tratamiento de la IC.\nAntes:\nGDMT\n⬇️\nUna categoría relativamente amplia.\nAhora:\nFMT\n⬇️\nTratamiento fundamental.\nAMT\n⬇️\nTratamiento adicional.\nGDIT\n⬇️\nTratamiento intervencionista/dispositivos.\n(Escardio)\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. Digoxina + ivabradina + vericiguat ❌\nSon tratamientos que pueden tener indicaciones específicas, pero no constituyen la FMT universal.\nPueden entrar dentro de la categoría de terapia médica adicional, dependiendo del escenario clínico.\n\nC. Nitratos + hidralazina + digoxina ❌\nPueden tener utilidad en situaciones seleccionadas, pero no representan la base farmacológica universal de la HFrEF.\n\nD. Ivabradina + hierro IV + diurético ❌\nPueden ser muy importantes en pacientes seleccionados:\nIvabradina → determinadas características de frecuencia y ritmo.\nHierro IV → déficit de hierro en pacientes que cumplen criterios.\nDiuréticos → fundamentalmente para controlar la congestión.\nPero no constituyen por sí mismos la FMT.\n\n🚨 TRAMPA DE EXAMEN\nNo confundas:\nFMT ≠ todos los medicamentos que utilizamos en IC.\nLa FMT representa el núcleo terapéutico con evidencia clase I para reducir eventos.\nLos demás tratamientos se agregan:\nsegún el fenotipo y las características del paciente.\n\n🎯 REGLA DE ORO DR Q\nESC 2026: primero piensa en FMT → después AMT → después GDIT cuando corresponda.\nY para HFrEF:\n🫀 FMT = bloqueo neurohormonal + betabloqueo + ARM + SGLT2\n\n💎 PERLAS DE EXAMEN\nFMT = foundational medical therapy.\nAMT = additional medical therapy.\nGDIT = guideline-directed interventional therapy.\nLa ESC 2026 abandona el uso de GDMT como término general y propone esta nomenclatura más específica. (Escardio)\nLa guía también establece una recomendación clase I para los ARM en IC crónica independientemente de la FEVI, un cambio terapéutico importante. (Escardio)\nLa clasificación por FEVI también cambió: HFrEF <50% y HFpEF ≥50%. (Escardio)\n📚 REFERENCIAS\nEuropean Society of Cardiology. 2026 ESC Guidelines for the management of heart failure. European Heart Journal. 2026. (Escardio)\nESC. 2026 ESC Guidelines for the management of heart failure – major changes. 28 de agosto de 2026. (Escardio)\nESC. 2026 Pocket Guidelines on Heart Failure. 2026. (Escardio)"
  },
  {
    "id": "dr-q-eval2-45",
    "examArea": "CARDIOLOGÍA / INSUFICIENCIA CARDIACA / HFpEF Y OBESIDAD",
    "topic": "CARDIOLOGÍA / INSUFICIENCIA CARDIACA / HFpEF Y OBESIDAD",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente de 64 años con insuficiencia cardiaca con FEVI de 55% presenta obesidad (IMC 34 kg/m²), disnea de esfuerzo y limitación funcional persistente. Recibe tratamiento dirigido para su insuficiencia cardiaca y no presenta contraindicaciones para tratamiento farmacológico. Según las nuevas guías ESC 2026, ¿cuál de las siguientes opciones puede considerarse para mejorar su situación clínica?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Semaglutida o tirzepatida."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Digoxina obligatoriamente como tratamiento de primera línea."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Ivabradina independientemente de la frecuencia cardiaca y del ritmo."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Suspender los inhibidores SGLT2 porque solo son útiles en HFrEF."
      },
    ],
    "correctOptionId": "A",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nUno de los cambios terapéuticos más llamativos de la ESC 2026 es la incorporación de:\nSemaglutida o tirzepatida → HFpEF + obesidad\ncon una recomendación:\nClase IIa\nLa recomendación se fundamenta en la evidencia de pacientes con HFpEF y obesidad, en quienes estos fármacos han demostrado beneficios principalmente sobre síntomas, capacidad funcional y calidad de vida, además del importante efecto sobre el peso. La guía 2026 los incorpora como una opción terapéutica específica para este fenotipo. (Escardio)",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nUno de los cambios terapéuticos más llamativos de la ESC 2026 es la incorporación de:\nSemaglutida o tirzepatida → HFpEF + obesidad\ncon una recomendación:\nClase IIa\nLa recomendación se fundamenta en la evidencia de pacientes con HFpEF y obesidad, en quienes estos fármacos han demostrado beneficios principalmente sobre síntomas, capacidad funcional y calidad de vida, además del importante efecto sobre el peso. La guía 2026 los incorpora como una opción terapéutica específica para este fenotipo. (Escardio)\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n\nAquí la clave es reconocer el fenotipo.\nTenemos:\nFEVI 55%\n⬇️\nHFpEF\n\nIMC 34 kg/m²\n⬇️\nOBESIDAD\n\nSíntomas de IC\n⬇️\nHFpEF + OBESIDAD\nY este es precisamente el escenario donde la ESC 2026 incorpora:\nSemaglutida o tirzepatida\ncomo tratamiento que debe considerarse. (Escardio)\n\n🔥 ¿POR QUÉ ES IMPORTANTE?\nPorque durante mucho tiempo la obesidad se consideró principalmente una comorbilidad del paciente con IC.\nAhora existe evidencia de que tratar directamente la obesidad puede mejorar aspectos importantes del síndrome de HFpEF.\nLos estudios con semaglutida mostraron mejoría en:\nPeso corporal.\nSíntomas de insuficiencia cardiaca.\nLimitaciones físicas.\nCapacidad funcional.\nCalidad de vida.\nY tirzepatida también mostró resultados favorables en pacientes con HFpEF + obesidad. (OUP Academic)\n\n🚨 PERO OJO CON ESTA TRAMPA\nNo memorices:\n\"GLP-1 = tratamiento de toda insuficiencia cardiaca.\"\n❌ Incorrecto.\nLa recomendación de la ESC 2026 está dirigida específicamente a:\nHFpEF + obesidad\nNo significa que semaglutida o tirzepatida sean parte de la terapia fundamental universal de la insuficiencia cardiaca.\nDe hecho, la evidencia en HFrEF sigue siendo mucho más incierta. (OUP Academic)\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nB. Digoxina obligatoriamente como primera línea ❌\nLa digoxina puede tener indicaciones en determinados pacientes, pero no es el tratamiento obligatorio de primera línea para HFpEF.\n\nC. Ivabradina independientemente de frecuencia y ritmo ❌\nLa ivabradina no se utiliza indiscriminadamente. Su indicación depende de características concretas del paciente, particularmente ritmo sinusal y frecuencia cardiaca.\n\nD. Suspender SGLT2 porque solo sirven en HFrEF ❌\n🚨 Falsa.\nLos inhibidores SGLT2 tienen un papel importante también en HFpEF, reduciendo el riesgo de eventos relacionados con insuficiencia cardiaca. La guía 2026 mantiene su importancia en este fenotipo. (Escardio)\n\n🎯 REGLA DE ORO DR Q\nHFpEF + OBESIDAD → piensa en SEMAGLUTIDA / TIRZEPATIDA.\nESC 2026 → IIa\nY recuerda:\nNo es para cualquier IC.\nEs especialmente el fenotipo:\n🫀 HFpEF + obesidad\n\n💎 PERLA DE EXAMEN\nEsta puede ser una pregunta muy tramposa porque el examen puede cambiar solamente un dato:\nHFpEF + obesidad → ✅ semaglutida/tirzepatida\npero:\nHFrEF + obesidad → ⚠️ no extrapolar automáticamente esta recomendación.\nLa evidencia disponible para GLP-1 en HFrEF todavía no permite colocarlos como terapia modificadora fundamental de la HFrEF. (OUP Academic)\n\n📚 REFERENCIAS\nEuropean Society of Cardiology. 2026 ESC Guidelines for the management of heart failure. European Heart Journal, 2026. (Escardio)\nESC. 2026 ESC Guidelines for the management of heart failure – major changes. 29 agosto 2026. (Escardio)\nESC. Major changes made to the ESC Guidelines on heart failure. 2026. (Escardio)\nEvidencia de semaglutida/tirzepatida en HFpEF y obesidad. (OUP Academic)"
  },
  {
    "id": "dr-q-eval2-46",
    "examArea": "CARDIOLOGÍA / INSUFICIENCIA CARDIACA / OBESIDAD",
    "topic": "CARDIOLOGÍA / INSUFICIENCIA CARDIACA / OBESIDAD",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Una mujer de 68 años con FEVI de 58%, IMC de 36 kg/m², hipertensión y fibrilación auricular presenta disnea de esfuerzo y limitación funcional compatibles con insuficiencia cardiaca. Recibe tratamiento convencional y persiste sintomática. No presenta diabetes mellitus ni contraindicación para tratamiento farmacológico.\nSegún las guías ESC 2026, ¿cuál de las siguientes afirmaciones respecto al manejo de esta paciente es CORRECTA?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "La obesidad debe considerarse únicamente una comorbilidad, por lo que el tratamiento farmacológico dirigido a la pérdida de peso no tiene un papel específico en la insuficiencia cardiaca."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Semaglutida o tirzepatida pueden considerarse en esta paciente, dado que presenta IC con FEVI preservada y obesidad, con una recomendación clase IIa."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Semaglutida o tirzepatida sustituyen a los inhibidores SGLT2 como terapia médica fundamental en la IC con FEVI preservada y obesidad."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Los agonistas incretínicos están recomendados con clase I para todos los pacientes con insuficiencia cardiaca, independientemente de la FEVI y del IMC."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa clave está en reconocer el fenotipo específico:\nFEVI ≥50%\n⬇️HFpEF\n\nIMC ≥30 kg/m²\n⬇️Obesidad\n⬇️\nHFpEF + OBESIDAD\nEste es precisamente el grupo en el que la ESC 2026 incorpora:\nSEMAGLUTIDA o TIRZEPATIDA → Clase IIa. (Escardio)",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa clave está en reconocer el fenotipo específico:\nFEVI ≥50%\n⬇️HFpEF\n\nIMC ≥30 kg/m²\n⬇️Obesidad\n⬇️\nHFpEF + OBESIDAD\nEste es precisamente el grupo en el que la ESC 2026 incorpora:\nSEMAGLUTIDA o TIRZEPATIDA → Clase IIa. (Escardio)\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n\nAquí la pregunta tiene varias capas.\n1. Primero identifica el fenotipo\nFEVI:\n58%\n⬇️\nHFpEF\nLa ESC 2026 utiliza:\nHFrEF → FEVI <50%\nHFpEF → FEVI ≥50% (Escardio)\n\n2. Después identifica la comorbilidad que cambia el manejo\nIMC:\n36 kg/m²\n⬇️\nOBESIDAD\nY aquí está el punto importante:\nEn HFpEF, la obesidad no es simplemente una comorbilidad que ignoramos.\nLa guía 2026 reconoce específicamente el tratamiento de la obesidad como parte del manejo de determinados pacientes con HFpEF. (Escardio)\n\n🔥 3. ¿Qué fármacos aparecen en la nueva guía?\nSemaglutida\nTirzepatida\nEn:\nHFpEF + obesidad\ncon:\nClase IIa\nEs decir, debe considerarse en pacientes apropiadamente seleccionados. (Escardio)\n\n🧠 ¿POR QUÉ?\nLos estudios en HFpEF asociada a obesidad demostraron beneficios sobre variables como:\npeso corporal,\nsíntomas relacionados con IC,\nlimitación física,\ncapacidad funcional,\ncalidad de vida.\nPor ejemplo, en el programa STEP-HFpEF, semaglutida produjo una mejoría significativa de los síntomas y función física además de una importante reducción de peso. (Escardio)\n\n🚨 LA TRAMPA GRANDE\nNo pienses:\n\"Semaglutida = tratamiento fundamental de toda IC\".\n❌ Incorrecto.\nLa recomendación de la ESC 2026 es específica para:\nHFpEF + obesidad\ny tiene clase IIa, no clase I universal. (Escardio)\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. La obesidad es solamente una comorbilidad ❌\nIncorrecta.\nLa nueva guía reconoce que en pacientes con HFpEF y obesidad la reducción de peso puede formar parte de una estrategia terapéutica dirigida al fenotipo. (Escardio)\n\nC. Sustituyen a los SGLT2 ❌\nIncorrecta.\nNo debes plantear:\nSGLT2 vs. semaglutida/tirzepatida\ncomo si fueran tratamientos intercambiables.\nLa nueva recomendación para semaglutida/tirzepatida aborda específicamente el fenotipo de HFpEF con obesidad.\n\nD. Clase I para toda IC ❌\nDemasiado amplia.\nLa recomendación es:\nHFpEF + obesidad → IIa\nNo:\nToda IC → clase I.\n\n🎯 REGLA DE ORO DR Q\nFEVI ≥50% + obesidad → piensa en GLP-1/GIP.\nHFpEF + obesidad\n⬇️\nSemaglutida / Tirzepatida\n⬇️\nClase IIa\n(Escardio)\n\n💎 TRAMPA DE EXAMEN\nSi el caso dice:\nFEVI 58% + IMC 36%\n→ HFpEF + obesidad → 🟢 piensa en semaglutida/tirzepatida.\nPero si cambia a:\nFEVI 35% + IMC 36%\n🚨 NO extrapoles automáticamente esta recomendación.\nLa recomendación novedosa de la ESC 2026 está formulada para HFpEF con obesidad. (Escardio)\n📚 REFERENCIAS\nESC. 2026 ESC Guidelines for the management of heart failure. European Heart Journal. 2026. (Escardio)\nESC. 2026 ESC Guidelines for the management of heart failure – key changes. 2026. (Escardio)\nESC. Major changes made to the ESC Guidelines on heart failure. 2026. (Escardio)\nESC. STEP-HFpEF trial: semaglutida en HFpEF y obesidad. (Escardio)"
  },
  {
    "id": "dr-q-eval2-47",
    "examArea": "CARDIOLOGÍA / IC DESCOMPENSADA / TRATAMIENTO FARMACOLÓGICO",
    "topic": "CARDIOLOGÍA / IC DESCOMPENSADA / TRATAMIENTO FARMACOLÓGICO",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un hombre de 72 años con antecedente de insuficiencia cardiaca consulta por disnea intensa, ortopnea y edema de miembros inferiores. Presenta crépitos pulmonares, ingurgitación yugular y signos claros de congestión. La presión arterial es de 135/80 mmHg y no presenta signos de hipoperfusión.\n¿Cuál es el tratamiento farmacológico inicial más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Iniciar un inotrópico intravenoso como dobutamina."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar un diurético de asa por vía intravenosa para conseguir una rápida descongestión."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administrar un vasopresor como noradrenalina como tratamiento inicial."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Suspender los diuréticos y administrar una carga de volumen intravenoso."
      },
    ],
    "correctOptionId": "B",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEl paciente tiene:\nCongestión importante+PA conservada+sin hipoperfusión\n⬇️\n🎯 OBJETIVO PRINCIPAL: DESCONGESTIONAR\nPor eso, el tratamiento inicial fundamental es un:\n💧 DIURÉTICO DE ASA IV\ncomo furosemida intravenosa.\nLa guía 2026 dedica una sección específica al manejo de la descompensación y la descongestión, haciendo de esta una parte central del tratamiento. (Escardio)",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nEl paciente tiene:\nCongestión importante+PA conservada+sin hipoperfusión\n⬇️\n🎯 OBJETIVO PRINCIPAL: DESCONGESTIONAR\nPor eso, el tratamiento inicial fundamental es un:\n💧 DIURÉTICO DE ASA IV\ncomo furosemida intravenosa.\nLa guía 2026 dedica una sección específica al manejo de la descompensación y la descongestión, haciendo de esta una parte central del tratamiento. (Escardio)\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n\nPiensa primero en qué perfil tiene el paciente.\n🟢 PERFIL DE ESTA PREGUNTA\n\"Wet + warm\"\n💧 Wet → congestionado🔥 Warm → perfusión conservada\nEntonces:\nPrimero saco líquido.\nDiurético de asa IV\n⬇️\n↓ volumen intravascular/extracelular\n⬇️\n↓ presiones de llenado\n⬇️\n↓ congestión pulmonar y periférica\n⬇️\n↓ disnea\n\n🚨 ¿CUÁNDO PENSARÍAS EN VASODILATADORES?\nAquí está la siguiente capa de la pregunta.\nSi el paciente está:\n💧 CONGESTIONADO\n\n🩸 HIPERTENSO\npueden utilizarse vasodilatadores IV, como nitratos, para disminuir las presiones de llenado y mejorar la congestión.\nPero este paciente tiene:\n135/80 mmHg\ny el tratamiento fundamental sigue siendo la descongestión con diurético IV. La guía contempla el tratamiento de la congestión y el papel de los vasodilatadores dentro del manejo de la descompensación. (Escardio)\n\n🚨 ¿Y LOS INOTRÓPICOS?\nAquí está una de las trampas clásicas:\nDOBUTAMINA ≠ tratamiento rutinario de toda IC descompensada.\nLos inotrópicos se reservan para situaciones seleccionadas, especialmente cuando existe:\nhipoperfusión / shock cardiogénico\nNo simplemente porque el paciente esté disneico o congestivo.\nPor eso:\nCongestión + perfusión conservada\n→ ❌ no necesitas empezar con dobutamina.\n\n❌ ¿POR QUÉ LAS OTRAS SON INCORRECTAS?\nA. Dobutamina ❌\nNo hay evidencia de hipoperfusión ni shock.\nEl paciente está \"warm\".\n\nC. Noradrenalina ❌\nEs un vasopresor utilizado en situaciones de hipotensión/shock, no como tratamiento inicial de un paciente hipertenso y congestivo.\n\nD. Carga de volumen ❌\nEs exactamente lo contrario de lo que necesita.\nEl paciente tiene:\nedema + congestión pulmonar + ingurgitación yugular\n→ necesita descongestión, no más volumen.\n\n🎯 REGLA DE ORO DR Q\nIC DESCOMPENSADA\nPrimero pregunta:\n¿Está congestionado?\nSi sí:\n💧 DIURÉTICO DE ASA IV\nDespués pregunta:\n¿Está hipertenso?\nSi además está hipertenso y congestionado:\n💉 considerar vasodilatadores IV\nY finalmente:\n¿Está hipoperfundido/shock?\nSi sí:\n⚡ considerar inotrópicos/vasopresores según el perfil hemodinámico.\n\n💎 PERLA DE EXAMEN\nNo memorices simplemente:\n\"IC descompensada = furosemida\".\nMemoriza el razonamiento:\nWET + WARM → descongestiona.\nWET + hipertenso → descongestiona ± vasodilatador.\nCOLD / hipoperfundido → piensa en soporte hemodinámico.\nLa nueva ESC 2026 pone además especial énfasis en que algunas descompensaciones pueden ser progresivas y no necesariamente súbitas, razón por la que reemplaza el término general “acute HF” por “decompensated HF”. (Escardio)\n📚 REFERENCIAS\nEuropean Society of Cardiology. 2026 ESC Guidelines for the management of heart failure. European Heart Journal, 2026. (Escardio)\nESC. 2026 Pocket Guidelines on Heart Failure — sección de Decompensated HF y Decongestion management. (Escardio)\nESC. 2026 ESC Guidelines for the management of heart failure – key changes. (Escardio)"
  },
  {
    "id": "dr-q-eval2-48",
    "examArea": "NEUROLOGÍA / AFASIAS",
    "topic": "NEUROLOGÍA / AFASIAS",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente diestro presenta de forma súbita un trastorno del lenguaje. Al explorarlo, comprende adecuadamente las órdenes, pero habla de manera fluida, con numerosas palabras, aunque el contenido es poco comprensible y presenta parafasias. Además, tiene una marcada dificultad para repetir frases.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Afasia de Broca."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Afasia de Wernicke."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Afasia de conducción."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Afasia transcortical motora."
      },
    ],
    "correctOptionId": "C",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa clave está en las 3 variables fundamentales de toda afasia:\n\nBroca\nWernicke\nConducción\nFluidez\n↓\n↑\n↑\nComprensión\nRelativamente conservada\n↓\nConservada\nRepetición\n↓\n↓\n↓↓↓\nEn nuestro paciente:\nHabla fluida ✅Comprensión conservada ✅Repetición muy alterada ❌\n⬇️\nAFASIA DE CONDUCCIÓN",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa clave está en las 3 variables fundamentales de toda afasia:\n\nBroca\nWernicke\nConducción\nFluidez\n↓\n↑\n↑\nComprensión\nRelativamente conservada\n↓\nConservada\nRepetición\n↓\n↓\n↓↓↓\nEn nuestro paciente:\nHabla fluida ✅Comprensión conservada ✅Repetición muy alterada ❌\n⬇️\nAFASIA DE CONDUCCIÓN\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n\nLa afasia de conducción es una alteración clásica en la que el paciente:\n\"Habla bien y entiende bien, pero no puede repetir bien.\"\nLa lesión suele afectar las conexiones entre las áreas del lenguaje, clásicamente asociadas al fascículo arqueado.\nPor eso puedes imaginarlo así:\nWERNICKE 🧠 → 🚧 → BROCA\nLa información lingüística llega y se comprende, y el paciente puede producir lenguaje espontáneo, pero la repetición está especialmente comprometida.\n\n🔥 DIFERENCIA CON LAS DOS GRANDES\n🗣️ BROCA\nHabla: no fluidaComprensión: relativamente conservadaRepetición: alterada\n\"Entiende, pero habla poco y con esfuerzo.\"\n\n🗣️ WERNICKE\nHabla: fluidaComprensión: alteradaRepetición: alterada\n\"Habla mucho, pero no entiende.\"\n\n🗣️ CONDUCCIÓN\nHabla: fluidaComprensión: conservadaRepetición: muy alterada\n\"Habla y entiende, pero no puede repetir.\"\n\n🎯 REGLA DE ORO DR Q\nFLUIDEZ + COMPRENSIÓN + REPETICIÓN\nSi encuentras:\nFluente + entiende + NO REPITE\n⬇️\n🧠 AFASIA DE CONDUCCIÓN\n\n💎 PERLA DE EXAMEN\nLa repetición es probablemente la variable que más ayuda a separar las afasias.\nCuando te den un caso, no te pierdas en todos los detalles:\n1️⃣ ¿Habla fluido?\n2️⃣ ¿Comprende?\n3️⃣ ¿Puede repetir?\nCon esas tres preguntas puedes resolver muchísimas preguntas de afasias.\n\n❌ ¿POR QUÉ LAS OTRAS?\nA. Broca ❌Esperarías un lenguaje no fluido, esforzado y telegráfico, con comprensión relativamente conservada.\nB. Wernicke ❌El lenguaje sería fluido, pero existiría alteración importante de la comprensión.\nD. Transcortical motora ❌Se caracteriza por lenguaje no fluido, con comprensión relativamente conservada, pero repetición preservada.\n\n📚 REFERENCIAS\nBlumenfeld H. Neuroanatomy through Clinical Cases. Oxford University Press.\nDaroff RB, et al. Bradley’s Neurology in Clinical Practice. Elsevier.\nDeJong RN. The Neurologic Examination. Lippincott Williams & Wilkins."
  },
  {
    "id": "dr-q-eval2-49",
    "examArea": "NEUROLOGÍA / AFASIAS",
    "topic": "NEUROLOGÍA / AFASIAS",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente diestro presenta de forma súbita dificultad para comunicarse. Durante la exploración comprende correctamente las órdenes y preguntas, pero su lenguaje espontáneo es escaso, lento, esforzado y con frases cortas, aunque sabe lo que quiere expresar. La repetición también está alterada.\n¿Cuál de las siguientes localizaciones es la más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Circunvolución frontal inferior dominante (área de Broca)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Circunvolución temporal superior dominante (área de Wernicke)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Fascículo arqueado del hemisferio dominante."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Corteza occipital dominante."
      },
    ],
    "correctOptionId": "A",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa clave está en:\nHabla no fluida + comprensión conservada\n⬇️\n🗣️ AFASIA DE BROCA\nEl paciente sabe lo que quiere decir, comprende el lenguaje, pero tiene dificultad para producirlo.\nEn cambio:\nWernicke\n⬇️\nHabla fluida + comprensión alterada",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa clave está en:\nHabla no fluida + comprensión conservada\n⬇️\n🗣️ AFASIA DE BROCA\nEl paciente sabe lo que quiere decir, comprende el lenguaje, pero tiene dificultad para producirlo.\nEn cambio:\nWernicke\n⬇️\nHabla fluida + comprensión alterada\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n\nPiensa en estas dos preguntas:\n1️⃣ ¿Habla?\nBROCA → habla poco, con esfuerzo.\nWERNICKE → habla mucho y fluidamente.\n2️⃣ ¿Entiende?\nBROCA → comprende relativamente bien.\nWERNICKE → comprensión alterada.\nPor eso:\nBROCA = no fluye, pero entiende.\nWERNICKE = fluye, pero no entiende.\n\n🔥 COMPARACIÓN DE ALTO RENDIMIENTO\nCaracterística\nBroca\nWernicke\nFluidez\n↓\n↑\nComprensión\nConservada\nAlterada\nRepetición\n↓\n↓\nLenguaje\nEsforzado, telegráfico\nFluido, incoherente\nConciencia del déficit\nFrecuentemente conservada\nFrecuentemente disminuida\n🧠 Localización\nBroca → lóbulo frontal dominante\nWernicke → región temporal posterior dominante\n\n🚨 TRAMPA DE EXAMEN\nNo te dejes engañar por:\n\"La repetición está alterada\".\nEso ocurre en ambas.\nLa diferencia fundamental aquí es:\nFLUIDEZ + COMPRENSIÓN\nNo fluye + entiende → BROCA\nFluye + no entiende → WERNICKE\n\n🎯 REGLA DE ORO DR Q\n🗣️ BROCA = sabe lo que quiere decir, pero no logra decirlo.\n🧠 WERNICKE = habla con facilidad, pero no comprende adecuadamente.\nFLUIDEZ ↓ + COMPRENSIÓN ↑ → BROCA\nFLUIDEZ ↑ + COMPRENSIÓN ↓ → WERNICKE\n\n💎 PERLA DE EXAMEN\nEn un diestro, la afasia suele implicar lesión del hemisferio dominante, habitualmente el izquierdo.\nPor eso, ante:\nPaciente diestro + afasia\n⬇️\npiensa primero en:\nHEMISFERIO IZQUIERDO\ny luego utiliza fluidez + comprensión + repetición para localizar el tipo de afasia.\n\n📚 REFERENCIAS\nBlumenfeld H. Neuroanatomy Through Clinical Cases. Oxford University Press.\nDaroff RB, et al. Bradley’s Neurology in Clinical Practice. Elsevier.\nDeJong RN. The Neurologic Examination. Lippincott Williams & Wilkins."
  },
  {
    "id": "dr-q-eval2-50",
    "examArea": "NEUROANATOMÍA / VÍA CORTICOESPINAL",
    "topic": "NEUROANATOMÍA / VÍA CORTICOESPINAL",
    "difficulty": "hard",
    "tags": ["dr-q", "evaluacion-2", "pro"],
    "statement": "Un paciente presenta un accidente cerebrovascular que afecta la corteza motora primaria del hemisferio cerebral izquierdo. ¿Qué déficit neurológico es más probable encontrar?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Hemiparesia derecha con predominio en cara y miembro superior."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hemiparesia izquierda con predominio en cara y miembro superior."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Hemiparesia derecha con predominio en miembro inferior."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hemiparesia izquierda con predominio en miembro inferior."
      },
    ],
    "correctOptionId": "A",
    "explanation": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa corteza motora primaria se encuentra en la circunvolución precentral, en el lóbulo frontal.\nEl cuerpo está representado de forma somatotópica:\nCara → miembro superior → tronco → miembro inferior\nY existe una representación contralateral:\n🧠 Hemisferio izquierdo\n⬇️\n🦾 Control predominante del hemicuerpo derecho\nPor eso:\nLesión motora izquierda → déficit motor derecho.\n\n🔥 PERO AQUÍ ESTÁ LA CLAVE\nLa corteza motora tiene una distribución tipo homúnculo motor.\nLa región:\nLateral de la corteza\n→ cara + miembro superior\nMientras que:\nMedial, en el lobulillo paracentral\n→ miembro inferior\nPor eso una lesión de la corteza motora lateral izquierda produce:\nHemiparesia derecha con predominio faciobraquial.",
    "keyPoints": [],
    "theoryContent": "🧠 LO QUE DEBES SABER PARA EL EXAMEN\nLa corteza motora primaria se encuentra en la circunvolución precentral, en el lóbulo frontal.\nEl cuerpo está representado de forma somatotópica:\nCara → miembro superior → tronco → miembro inferior\nY existe una representación contralateral:\n🧠 Hemisferio izquierdo\n⬇️\n🦾 Control predominante del hemicuerpo derecho\nPor eso:\nLesión motora izquierda → déficit motor derecho.\n\n🔥 PERO AQUÍ ESTÁ LA CLAVE\nLa corteza motora tiene una distribución tipo homúnculo motor.\nLa región:\nLateral de la corteza\n→ cara + miembro superior\nMientras que:\nMedial, en el lobulillo paracentral\n→ miembro inferior\nPor eso una lesión de la corteza motora lateral izquierda produce:\nHemiparesia derecha con predominio faciobraquial.\n\n🧠 EXPLICACIÓN DEL PROFE: BY DR Q\n\nImagina la corteza motora como un mapa:\nLateral\n🗣️ Cara⬇️💪 Brazo⬇️🧍 Tronco\nMedial\n⬇️🦵 Pierna\nEntonces:\nLesión cortical lateral izquierda\n→ cara derecha→ brazo derecho→ pierna relativamente menos afectada.\n\n🚨 TRAMPA DE EXAMEN\nNo confundas:\nCorteza motora lateral\n→ cara + brazo\ncon:\nCorteza motora medial\n→ pierna\nUna lesión de la arteria cerebral anterior afecta principalmente la superficie medial frontal y, por tanto:\ndéficit predominante en miembro inferior contralateral.\nMientras que una lesión de la arteria cerebral media afecta principalmente la superficie lateral:\ndéficit predominante en cara y miembro superior contralaterales.\n\n🎯 REGLA DE ORO DR Q\n🧠 Corteza motora izquierda → cuerpo derecho\nY:\nLateral → cara + brazo\nMedial → pierna\nPor eso:\nACV cortical lateral izquierdo → hemiparesia derecha faciobraquial.\n\n💎 PERLA DE EXAMEN\nSi además de la hemiparesia derecha aparece afasia, piensa en:\n🧠 Hemisferio dominante izquierdo + arteria cerebral media izquierda.\nEse combo es especialmente clásico en pacientes diestros.\n\n📚 REFERENCIAS\nBlumenfeld H. Neuroanatomy Through Clinical Cases. Oxford University Press.\nSnell RS. Clinical Neuroanatomy. Wolters Kluwer.\nDaroff RB, et al. Bradley’s Neurology in Clinical Practice. Elsevier."
  },
];
