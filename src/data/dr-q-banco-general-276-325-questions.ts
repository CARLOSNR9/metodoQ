import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Banco universal MetodoQ · Dr. Q — Preguntas 276-325 (banco general).
 * Medicina Interna/Urgencias, Ginecología, Psiquiatría, APS y Ciencias Básicas.
 * Aplica a cualquier universidad, especialidad y nivel.
 */
export const DR_Q_BANCO_GENERAL_276_325_QUESTIONS: TrainingQuestion[] = [
  {
    id: "dr-q-276",
    examArea: "Medicina Interna / Tromboembolismo pulmonar",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_interna", "tromboembolismo_pulmonar"],
    statement: "Paciente de 68 años con antecedente de hipertensión, quien consulta por disnea súbita y dolor torácico pleurítico. Al examen físico: PA 85/50 mmHg, FC 120 lpm, FR 28 rpm, SatO₂ 88%. Ingurgitación yugular presente. Electrocardiograma: taquicardia sinusal con patrón S1Q3T3. Ante la inestabilidad hemodinámica, ¿cuál es la conducta inicial más adecuada?",
    options: [
      { id: "A", label: "A", text: "Anticoagulación con heparina de bajo peso molecular y observación." },
      { id: "B", label: "B", text: "Solicitar angiotomografía pulmonar antes de iniciar tratamiento." },
      { id: "C", label: "C", text: "Trombólisis sistémica inmediata." },
      { id: "D", label: "D", text: "Colocación de filtro de vena cava inferior." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta un cuadro altamente sugestivo de tromboembolismo pulmonar de alto riesgo (masivo), caracterizado por hipotensión e inestabilidad hemodinámica. En este contexto, la reperfusión inmediata mediante trombólisis sistémica es el tratamiento de elección.",
    keyPoints: [
      "Cuando veas: Disnea súbita. Dolor pleurítico. Hipotensión. Ingurgitación yugular. Signos de sobrecarga derecha.",
      "Debes pensar en: Tromboembolismo pulmonar de alto riesgo.",
      "Tema: Tromboembolismo pulmonar.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la conducta terapéutica en el tromboembolismo pulmonar según el riesgo de mortalidad.
La clave no es el patrón S1Q3T3.
La clave es:
La hipotensión arterial.
¿Qué está ocurriendo realmente?
Un trombo ocluye de forma importante la circulación pulmonar.
Como consecuencia:
•	Aumenta bruscamente la resistencia vascular pulmonar.
•	El ventrículo derecho se dilata.
•	Disminuye el llenado del ventrículo izquierdo.
•	Cae el gasto cardíaco.
El resultado final es:
Choque obstructivo.
¿Qué dato define la gravedad?
Este:
PA 85/50 mmHg.
La presencia de hipotensión o choque identifica:
Tromboembolismo pulmonar de alto riesgo.
¿Qué papel tiene el ECG?
El patrón:
S1Q3T3
Es un hallazgo clásico, aunque poco sensible.
Sugiere:
Sobrecarga aguda del ventrículo derecho.
Sin embargo, la decisión terapéutica no se basa en el ECG.
Se basa en:
La estabilidad hemodinámica.
¿Por qué la trombólisis es el tratamiento indicado?
Porque el paciente presenta:
•	Hipotensión.
•	Hipoxemia.
•	Datos de sobrecarga derecha.
La reperfusión rápida permite:
•	Disolver el trombo.
•	Reducir la presión pulmonar.
•	Mejorar el gasto cardíaco.
•	Disminuir la mortalidad.
¿Por qué no esperar una angiotomografía?
En un paciente inestable:
El tratamiento no debe retrasarse mientras se obtienen estudios diagnósticos complejos.
La prioridad es:
Restaurar la perfusión.
¿Por qué no basta con anticoagulación?
La anticoagulación es el tratamiento estándar del tromboembolismo pulmonar estable.
Sin embargo:
En presencia de choque o hipotensión se requiere reperfusión.
¿Cuál es la trampa de examen?
Muchos estudiantes identifican correctamente el diagnóstico, pero olvidan clasificar el riesgo.
La pregunta no es:
¿Tiene un TEP?
La pregunta es:
¿Qué tipo de TEP tiene?
Y la respuesta es:
TEP de alto riesgo.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Sospechar TEP.
2.	Valorar estabilidad hemodinámica.
3.	Identificar hipotensión o choque.
4.	Clasificar como TEP de alto riesgo.
5.	Realizar reperfusión urgente.
Perlas de examen
✅ Hipotensión en TEP = alto riesgo.
✅ El choque en TEP es un choque obstructivo.
✅ La trombólisis está indicada en pacientes inestables.
✅ El patrón S1Q3T3 sugiere sobrecarga derecha.
✅ La anticoagulación aislada no es suficiente en el TEP de alto riesgo.
✅ La mortalidad aumenta significativamente cuando existe compromiso hemodinámico.
✅ La estabilidad hemodinámica es el principal determinante terapéutico inicial.
Referencias
• European Society of Cardiology (ESC) Guidelines on Pulmonary Embolism.
• Harrison's Principles of Internal Medicine.
• Goldhaber SZ. Pulmonary Embolism.
• UpToDate: Management of High-Risk Pulmonary Embolism.
• CHEST Guidelines for Venous Thromboembolism.`,
  },
  {
    id: "dr-q-277",
    examArea: "Medicina Interna / Emergencias endocrinológicas",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_interna", "emergencias_endocrinologicas"],
    statement: "Mujer de 45 años con antecedente de diabetes mellitus tipo 1 consulta por náuseas, vómito y dolor abdominal. Glucometría: 450 mg/dL. Gasometría arterial: pH 7.1, HCO₃⁻ 8 mEq/L, anion gap 22 mEq/L. ¿Cuál es el orden lógico del manejo inicial?",
    options: [
      { id: "A", label: "A", text: "Insulina intravenosa → líquidos intravenosos → corrección de potasio." },
      { id: "B", label: "B", text: "Bicarbonato intravenoso → insulina intravenosa → líquidos intravenosos." },
      { id: "C", label: "C", text: "Líquidos intravenosos → evaluación/corrección de potasio → insulina intravenosa." },
      { id: "D", label: "D", text: "Insulina subcutánea → líquidos intravenosos → bicarbonato intravenoso." },
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta una cetoacidosis diabética. El manejo inicial debe comenzar con expansión de volumen mediante cristaloides, seguido de evaluación del potasio sérico y posteriormente administración de insulina.",
    keyPoints: [
      "Cuando veas: Hiperglucemia. Acidosis metabólica. Anion gap elevado. Cetosis.",
      "Debes pensar en: Cetoacidosis diabética.",
      "Tema: Emergencias endocrinológicas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la secuencia correcta del tratamiento, más que el diagnóstico.
La clave no es la glucosa.
La clave es:
El orden de las intervenciones.
¿Qué está ocurriendo realmente?
La paciente presenta:
•	Glucosa 450 mg/dL.
•	pH 7.1.
•	Bicarbonato 8 mEq/L.
•	Anion gap elevado.
Estos hallazgos son compatibles con:
Cetoacidosis diabética.
La deficiencia de insulina genera:
•	Lipólisis.
•	Producción de cuerpos cetónicos.
•	Acidosis metabólica.
•	Diuresis osmótica.
•	Deshidratación severa.
¿Cuál es el primer problema a corregir?
La mayoría de estos pacientes presentan:
Déficit importante de volumen intravascular.
Por ello la primera intervención es:
Cristaloides intravenosos.
Generalmente solución salina isotónica.
¿Por qué debe evaluarse el potasio antes de la insulina?
Aunque el potasio sérico pueda parecer normal o elevado:
El déficit corporal total de potasio suele ser importante.
Cuando se administra insulina:
El potasio entra rápidamente a la célula.
Esto puede precipitar:
Hipokalemia grave.
Por eso el siguiente paso es:
Medir y corregir el potasio según corresponda.
¿Cuándo se inicia la insulina?
Una vez:
•	Iniciada la reanimación con líquidos.
•	Confirmado que el potasio permite administrarla con seguridad.
Entonces se inicia:
Insulina regular intravenosa.
¿Qué papel tiene el bicarbonato?
Muy limitado.
Generalmente solo se considera en:
Acidosis extrema (pH < 6.9).
No es una medida inicial rutinaria.
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
Insulina inmediatamente.
Porque identifican correctamente la enfermedad.
Sin embargo:
La reposición de volumen siempre es la primera intervención.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Líquidos intravenosos.
2.	Evaluar y corregir potasio.
3.	Insulina intravenosa.
4.	Identificar y tratar el factor desencadenante.
Perlas de examen
✅ La cetoacidosis diabética produce acidosis metabólica con anion gap elevado.
✅ La primera medida es la reposición de líquidos.
✅ El potasio debe evaluarse antes de iniciar insulina.
✅ La insulina corrige la cetogénesis y la hiperglucemia.
✅ El déficit corporal total de potasio suele ser importante.
✅ El bicarbonato rara vez está indicado.
✅ El objetivo inicial es corregir la hipovolemia y detener la producción de cuerpos cetónicos.
Referencias
• American Diabetes Association (ADA) Standards of Care.
• Endocrine Society Clinical Practice Guidelines.
• Harrison's Principles of Internal Medicine.
• UpToDate: Diabetic Ketoacidosis in Adults.
• Williams Textbook of Endocrinology.`,
  },
  {
    id: "dr-q-278",
    examArea: "Medicina Interna / Sepsis y choque séptico",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_interna", "sepsis_y_choque_septico"],
    statement: "Paciente de 72 años, antecedente de DM2 y ERC estadio 3, ingresa por cuadro de 48 horas de fiebre, disuria y alteración del estado de conciencia. Al examen: PA 88/50 mmHg, FC 115 lpm, FR 24 rpm, temperatura 38.5°C. Laboratorios: lactato 4.2 mmol/L, creatinina 2.1 mg/dL (basal 1.2), leucocitosis con desviación a la izquierda. Tras asegurar la vía aérea, ¿cuál es la medida con mayor impacto en la supervivencia del paciente en la primera hora?",
    options: [
      { id: "A", label: "A", text: "Administrar bicarbonato intravenoso." },
      { id: "B", label: "B", text: "Iniciar vasopresores inmediatamente." },
      { id: "C", label: "C", text: "Administrar antibióticos de amplio espectro dentro de la primera hora." },
      { id: "D", label: "D", text: "Solicitar urocultivo y esperar resultados antes de iniciar tratamiento." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta un cuadro compatible con choque séptico de origen urinario. La administración precoz de antibióticos adecuados es una de las intervenciones con mayor impacto demostrado en la reducción de la mortalidad.",
    keyPoints: [
      "Cuando veas: Sospecha de infección. Hipotensión. Lactato elevado. Disfunción orgánica.",
      "Debes pensar en: Choque séptico.",
      "Tema: Sepsis y choque séptico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa las prioridades terapéuticas durante la primera hora de atención del paciente séptico.
La clave no es la creatinina.
La clave es:
Hipotensión + lactato elevado + infección.
¿Qué está ocurriendo realmente?
El paciente presenta:
•	Infección urinaria probable.
•	Alteración del estado mental.
•	Hipotensión.
•	Lactato elevado.
•	Lesión renal aguda.
Estos hallazgos son compatibles con:
Choque séptico.
¿Por qué está elevado el lactato?
La sepsis produce:
•	Hipoperfusión tisular.
•	Alteración de la utilización celular del oxígeno.
•	Metabolismo anaerobio.
Como consecuencia:
Aumenta el lactato.
¿Cuál es la intervención que más modifica el pronóstico?
Una vez reconocida la sepsis:
La administración temprana de antibióticos apropiados.
Cada hora de retraso en el inicio del tratamiento antimicrobiano se asocia con aumento de la mortalidad.
¿Qué otras medidas deben realizarse?
El manejo inicial incluye:
•	Obtención de cultivos.
•	Reanimación con líquidos intravenosos.
•	Antibióticos tempranos.
•	Control del foco infeccioso.
•	Vasopresores si persiste la hipotensión tras la reanimación.
¿Por qué no iniciar primero vasopresores?
Los vasopresores son fundamentales cuando la hipotensión persiste después de una adecuada expansión de volumen.
Sin embargo:
No sustituyen el tratamiento de la infección.
¿Por qué no esperar los cultivos?
Los cultivos deben obtenerse idealmente antes del antibiótico.
Pero:
Nunca deben retrasar el inicio del tratamiento.
¿Por qué no bicarbonato?
La corrección de la causa del choque es mucho más importante que intentar corregir el pH mediante bicarbonato.
¿Cuál es la trampa de examen?
Muchos estudiantes se enfocan en:
La hipotensión.
Y responden:
Vasopresores.
Pero la pregunta solicita:
La medida con mayor impacto en supervivencia durante la primera hora.
Y esa intervención es:
Antibióticos tempranos.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Reconocer la sepsis.
2.	Obtener cultivos si es posible.
3.	Iniciar antibióticos de amplio espectro tempranamente.
4.	Administrar líquidos intravenosos.
5.	Utilizar vasopresores si persiste la hipotensión.
6.	Controlar el foco infeccioso.
Perlas de examen
✅ Hipotensión + lactato elevado sugieren choque séptico.
✅ La infección urinaria es una causa frecuente de sepsis en adultos mayores.
✅ Los antibióticos tempranos reducen la mortalidad.
✅ Los cultivos no deben retrasar el tratamiento.
✅ La reanimación inicial incluye líquidos intravenosos.
✅ La norepinefrina es el vasopresor de primera línea.
✅ El control del foco infeccioso forma parte esencial del tratamiento.
Referencias
• Surviving Sepsis Campaign Guidelines.
• Harrison's Principles of Internal Medicine.
• SCCM Guidelines for Sepsis and Septic Shock.
• UpToDate: Management of Sepsis and Septic Shock.
• Singer M. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3).`,
  },
  {
    id: "dr-q-279",
    examArea: "Medicina Interna / Emergencias neurológicas",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_interna", "emergencias_neurologicas"],
    statement: "Paciente masculino de 25 años sin antecedentes conocidos, traído a urgencias por convulsión tónico-clónica generalizada que persiste por 12 minutos. Al examen físico no recupera el estado de conciencia entre episodios convulsivos. Tras asegurar la vía aérea y permeabilizar acceso venoso, ¿cuál es el siguiente paso farmacológico correcto?",
    options: [
      { id: "A", label: "A", text: "Administrar fenitoína intravenosa como primera medida." },
      { id: "B", label: "B", text: "Administrar lorazepam o diazepam intravenoso." },
      { id: "C", label: "C", text: "Iniciar infusión de propofol inmediatamente." },
      { id: "D", label: "D", text: "Administrar levetiracetam oral." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un estatus epiléptico convulsivo. Tras las medidas iniciales de soporte, el tratamiento farmacológico de primera línea son las benzodiacepinas intravenosas.",
    keyPoints: [
      "Cuando veas: Convulsión ≥ 5 minutos. Convulsiones repetidas sin recuperación de conciencia. Persistencia de actividad convulsiva.",
      "Debes pensar en: Estatus epiléptico.",
      "Tema: Emergencias neurológicas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el manejo secuencial del estatus epiléptico.
La clave no es la duración exacta.
La clave es:
El paciente no recupera la conciencia entre las crisis.
¿Qué está ocurriendo realmente?
El paciente presenta:
•	Convulsión prolongada.
•	Persistencia de actividad epiléptica.
•	Ausencia de recuperación neurológica.
Por definición clínica:
Estatus epiléptico convulsivo.
Actualmente se considera que una crisis convulsiva prolongada por más de 5 minutos debe tratarse como un estatus epiléptico.
¿Cuál es el objetivo inicial?
Detener rápidamente la actividad eléctrica anormal cerebral.
Mientras más tiempo dura la crisis:
•	Mayor daño neuronal.
•	Mayor riesgo de edema cerebral.
•	Mayor riesgo de insuficiencia respiratoria.
•	Mayor mortalidad.
¿Cuál es el tratamiento de primera línea?
Benzodiacepinas
Las opciones más utilizadas son:
•	Lorazepam IV.
•	Diazepam IV.
•	Midazolam IM o IV.
Su mecanismo consiste en:
Potenciar la acción inhibitoria del GABA.
Esto permite controlar rápidamente la actividad convulsiva.
¿Qué ocurre si la convulsión continúa?
Si no responde a las benzodiacepinas se procede a una segunda línea con anticonvulsivantes como:
•	Levetiracetam.
•	Valproato.
•	Fosfenitoína o fenitoína.
¿Cuándo se utilizan anestésicos como propofol?
En situaciones de:
Estatus epiléptico refractario.
Es decir, cuando fallan las medidas iniciales y los anticonvulsivantes de segunda línea.
¿Por qué no iniciar directamente fenitoína?
Porque el manejo es escalonado.
La primera línea siempre son:
Benzodiacepinas.
¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan la fenitoína como tratamiento del estatus epiléptico.
Sin embargo:
La fenitoína es una terapia de segunda línea.
La primera intervención farmacológica tras ABC es:
Una benzodiacepina.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	ABC (vía aérea, respiración y circulación).
2.	Glucemia capilar.
3.	Benzodiacepina.
4.	Anticonvulsivante de segunda línea.
5.	Manejo de estatus refractario si persiste la crisis.
Perlas de examen
✅ Una convulsión ≥ 5 minutos debe considerarse estatus epiléptico.
✅ Las benzodiacepinas son el tratamiento inicial.
✅ Lorazepam IV suele ser una de las opciones preferidas.
✅ La ausencia de recuperación de conciencia es un dato clave.
✅ La fenitoína y el levetiracetam son tratamientos de segunda línea.
✅ El propofol se reserva para estatus refractario.
✅ Siempre debe buscarse una causa desencadenante reversible.
Referencias
• Neurocritical Care Society Guidelines.
• American Epilepsy Society Guidelines.
• Harrison's Principles of Internal Medicine.
• UpToDate: Convulsive Status Epilepticus in Adults.
• Adams and Victor's Principles of Neurology.`,
  },
  {
    id: "dr-q-280",
    examArea: "Medicina Interna / Trastornos hidroelectrolíticos",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_interna", "trastornos_hidroelectroliticos"],
    statement: "Paciente de 60 años con enfermedad renal crónica estadio 4, consulta por debilidad muscular progresiva. Al examen físico se encuentra hemodinámicamente estable. ECG: ondas T picudas y simétricas, desaparición de la onda P y ensanchamiento del complejo QRS. Potasio sérico: 7.4 mEq/L. ¿Cuál es la intervención terapéutica inicial para prevenir una arritmia fatal?",
    options: [
      { id: "A", label: "A", text: "Administrar insulina regular con dextrosa." },
      { id: "B", label: "B", text: "Iniciar hemodiálisis urgente." },
      { id: "C", label: "C", text: "Administrar gluconato de calcio intravenoso." },
      { id: "D", label: "D", text: "Administrar salbutamol nebulizado." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta hiperpotasemia grave con cambios electrocardiográficos que amenazan la vida. La primera medida es estabilizar la membrana miocárdica mediante calcio intravenoso.",
    keyPoints: [
      "Cuando veas: Potasio > 6.5 mEq/L. Ondas T picudas. QRS ancho. Alteraciones de conducción.",
      "Debes pensar en: Hiperpotasemia grave con toxicidad cardíaca.",
      "Tema: Trastornos hidroelectrolíticos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la secuencia correcta de manejo de la hiperpotasemia grave.
La clave no es el valor del potasio.
La clave es:
Los cambios electrocardiográficos.
¿Qué está ocurriendo realmente?
El paciente presenta:
•	ERC avanzada.
•	Potasio 7.4 mEq/L.
•	Alteraciones severas del ECG.
Esto indica:
Toxicidad cardíaca por hiperpotasemia.
La elevación del potasio altera el potencial de membrana de las células miocárdicas y favorece:
•	Bloqueos de conducción.
•	Arritmias ventriculares.
•	Asistolia.
¿Cuál es la prioridad inmediata?
Antes de disminuir el potasio:
Debe protegerse el corazón.
Por eso la primera medida es:
Gluconato de calcio intravenoso
El calcio:
•	No disminuye el potasio sérico.
•	No elimina potasio del organismo.
Su función es:
Estabilizar la membrana cardíaca.
Y reducir temporalmente el riesgo de arritmias fatales.
¿Qué ocurre después del calcio?
Una vez estabilizado el miocardio se deben emplear medidas que reduzcan el potasio sérico:
Redistribución intracelular
•	Insulina + dextrosa.
•	Salbutamol.
•	Bicarbonato (en casos seleccionados).
Eliminación del potasio
•	Diuréticos (si es posible).
•	Resinas intercambiadoras.
•	Hemodiálisis.
¿Por qué no insulina primero?
La insulina disminuye rápidamente el potasio.
Sin embargo:
No protege inmediatamente al corazón.
La prioridad es evitar una muerte súbita por arritmia.
¿Por qué no hemodiálisis primero?
La hemodiálisis es el tratamiento definitivo en muchos pacientes con ERC avanzada.
Pero antes de iniciar cualquier terapia definitiva:
Debe estabilizarse la membrana miocárdica.
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
Insulina + dextrosa.
Porque saben que disminuye el potasio.
Sin embargo, la pregunta solicita:
La intervención inicial para prevenir una arritmia fatal.
Y esa respuesta es:
Calcio intravenoso.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar cambios ECG.
2.	Administrar calcio intravenoso.
3.	Desplazar el potasio al interior celular.
4.	Eliminar el exceso de potasio.
5.	Corregir la causa subyacente.
Perlas de examen
✅ El calcio estabiliza la membrana cardíaca.
✅ El calcio no disminuye el potasio sérico.
✅ Ondas T picudas son un hallazgo temprano de hiperpotasemia.
✅ El ensanchamiento del QRS indica mayor gravedad.
✅ La insulina reduce rápidamente el potasio plasmático.
✅ La hemodiálisis es el tratamiento definitivo en muchos pacientes con ERC avanzada.
✅ En hiperpotasemia grave con cambios ECG, el calcio siempre es la primera intervención.
Referencias
• KDIGO Clinical Practice Guidelines.
• Harrison's Principles of Internal Medicine.
• Brenner & Rector's The Kidney.
• UpToDate: Treatment and Prevention of Hyperkalemia in Adults.
• European Resuscitation Council Guidelines.`,
  },
  {
    id: "dr-q-281",
    examArea: "Medicina Interna / Síndrome coronario agudo",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_interna", "sindrome_coronario_agudo"],
    statement: "Paciente de 55 años consulta por dolor torácico opresivo de 60 minutos de evolución, irradiado a miembro superior izquierdo y acompañado de diaforesis. ECG: elevación del segmento ST de 3 mm en V1-V4. PA 130/80 mmHg, FC 90 lpm. ¿Cuál es el objetivo principal del manejo inicial?",
    options: [
      { id: "A", label: "A", text: "Disminuir el consumo miocárdico de oxígeno mediante betabloqueadores." },
      { id: "B", label: "B", text: "Lograr la reperfusión coronaria lo más rápido posible." },
      { id: "C", label: "C", text: "Controlar el dolor con opioides intravenosos." },
      { id: "D", label: "D", text: "Prevenir arritmias ventriculares mediante amiodarona profiláctica." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un infarto agudo de miocardio con elevación del ST (IAMCEST) de localización anterior. El objetivo principal del manejo inicial es restaurar el flujo coronario para limitar el tamaño del infarto y preservar la mayor cantidad posible de miocardio viable.",
    keyPoints: [
      "Cuando veas: Dolor torácico típico. Elevación del ST en derivaciones contiguas. Inicio reciente de síntomas.",
      "Debes pensar en: IAM con elevación del ST.",
      "Tema: Síndrome coronario agudo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el concepto más importante del manejo del infarto agudo de miocardio.
La clave no es la localización del infarto.
La clave es:
El tiempo.
¿Qué está ocurriendo realmente?
El paciente presenta una oclusión coronaria aguda.
La interrupción del flujo sanguíneo provoca:
•	Isquemia miocárdica.
•	Necrosis progresiva del tejido cardíaco.
•	Pérdida de función ventricular.
Mientras más tiempo permanezca cerrada la arteria:
Mayor será el tamaño del infarto.
¿Por qué existe elevación del ST?
La elevación del segmento ST indica:
Lesión miocárdica transmural aguda.
Y generalmente refleja:
Oclusión completa de una arteria coronaria.
¿Cuál es el objetivo principal?
La prioridad absoluta es:
Reabrir la arteria culpable.
Esto puede lograrse mediante:
Intervención coronaria percutánea primaria
o
Fibrinólisis
cuando la angioplastia no está disponible oportunamente.
¿Qué beneficio aporta la reperfusión?
La reperfusión temprana:
•	Disminuye la mortalidad.
•	Reduce el tamaño del infarto.
•	Preserva la función ventricular.
•	Disminuye las complicaciones mecánicas y eléctricas.
¿Por qué no controlar solamente el dolor?
El dolor debe tratarse.
Sin embargo:
No modifica la causa principal del infarto.
¿Por qué no enfocarse primero en prevenir arritmias?
Las arritmias son una complicación.
Pero el problema fundamental sigue siendo:
La arteria coronaria ocluida.
¿Cuál es la trampa de examen?
Muchos estudiantes identifican medidas útiles en el IAM:
•	Aspirina.
•	Nitratos.
•	Morfina.
•	Betabloqueadores.
Pero la pregunta solicita:
El objetivo principal.
Y ese objetivo es:
La reperfusión.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Reconocer el IAMCEST.
2.	Activar estrategia de reperfusión.
3.	Administrar terapia antitrombótica y antiagregante.
4.	Restaurar el flujo coronario lo antes posible.
5.	Prevenir y tratar complicaciones.
Perlas de examen
✅ El IAMCEST es una emergencia de reperfusión.
✅ La elevación del ST sugiere oclusión coronaria aguda.
✅ El tiempo hasta la reperfusión influye directamente en el pronóstico.
✅ La angioplastia primaria es la estrategia preferida cuando está disponible.
✅ La fibrinólisis es una alternativa cuando la angioplastia no puede realizarse oportunamente.
✅ El objetivo es salvar miocardio viable.
✅ "Tiempo es músculo" resume el principio fisiopatológico del tratamiento.
Referencias
• European Society of Cardiology Guidelines for STEMI.
• American Heart Association Guidelines.
• Harrison's Principles of Internal Medicine.
• Braunwald's Heart Disease.
• UpToDate: Acute ST-Elevation Myocardial Infarction.`,
  },
  {
    id: "dr-q-282",
    examArea: "Medicina Interna / Infecciones del sistema nervioso central",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_interna", "infecciones_del_sistema_nervioso_central"],
    statement: "Paciente de 35 años consulta por fiebre, cefalea intensa y rigidez nucal de varios días de evolución. Tiene antecedente de infección por VIH sin tratamiento antirretroviral. Al examen físico se encuentra somnoliento y presenta ptosis palpebral derecha. ¿Cuál es la conducta inicial correcta?",
    options: [
      { id: "A", label: "A", text: "Iniciar ceftriaxona y vancomicina inmediatamente sin estudios adicionales." },
      { id: "B", label: "B", text: "Realizar punción lumbar de forma inmediata antes de cualquier imagen." },
      { id: "C", label: "C", text: "Solicitar tomografía cerebral antes de realizar la punción lumbar." },
      { id: "D", label: "D", text: "Iniciar dexametasona y dar de alta con seguimiento ambulatorio." },
    ],
    correctOptionId: "C",
    explanation: "La presencia de alteración del estado de conciencia, inmunosupresión y focalización neurológica obliga a descartar una lesión ocupante de espacio o hipertensión intracraneal antes de realizar una punción lumbar.",
    keyPoints: [
      "Cuando veas: Síndrome meníngeo. Alteración del estado mental. Déficit neurológico focal. Inmunosupresión.",
      "Debes pensar en: Riesgo de hipertensión intracraneal o lesión expansiva cerebral.",
      "Tema: Infecciones del sistema nervioso central.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa cuándo una punción lumbar puede ser peligrosa.
La clave no es la fiebre.
La clave es:
La focalización neurológica.
¿Qué está ocurriendo realmente?
El paciente presenta datos sugestivos de infección del sistema nervioso central:
•	Fiebre.
•	Cefalea.
•	Rigidez nucal.
Sin embargo, además presenta:
•	Somnolencia.
•	Ptosis palpebral derecha.
•	VIH sin tratamiento.
Estos hallazgos sugieren:
Posible compromiso intracraneal focal.
¿Por qué es importante la focalización?
La presencia de un déficit neurológico focal puede indicar:
•	Absceso cerebral.
•	Toxoplasmosis cerebral.
•	Linfoma primario del SNC.
•	Lesión ocupante de espacio.
En estas condiciones puede existir:
Efecto de masa e hipertensión intracraneal.
¿Por qué es peligrosa la punción lumbar?
Si existe una lesión expansiva con aumento de la presión intracraneal:
La extracción de líquido cefalorraquídeo puede favorecer la herniación cerebral.
Por ello primero debe realizarse:
Neuroimagen.
¿Cuál es el estudio inicial?
Tomografía cerebral
Permite identificar:
•	Edema cerebral.
•	Efecto de masa.
•	Desviación de línea media.
•	Lesiones focales.
¿Significa esto que se debe retrasar el tratamiento?
No.
Si existe alta sospecha de infección del sistema nervioso central:
Deben obtenerse hemocultivos e iniciarse tratamiento empírico oportunamente.
Sin embargo, la pregunta evalúa específicamente el siguiente paso diagnóstico seguro.
¿Cuál es la trampa de examen?
Muchos estudiantes aprenden:
Meningitis = punción lumbar.
Pero existen situaciones en las que primero debe realizarse una neuroimagen.
Entonces, ¿qué debe recordarse?
Antes de una punción lumbar debe considerarse tomografía cerebral si existen:
•	Alteración del estado mental.
•	Déficit neurológico focal.
•	Papiledema.
•	Convulsiones recientes.
•	Inmunosupresión significativa.
Perlas de examen
✅ La rigidez nucal orienta a irritación meníngea.
✅ La focalización neurológica obliga a descartar lesión ocupante de espacio.
✅ La inmunosupresión aumenta el riesgo de lesiones cerebrales focales.
✅ La tomografía cerebral puede ser necesaria antes de la punción lumbar.
✅ La herniación cerebral es la complicación que se intenta evitar.
✅ VIH sin tratamiento modifica el enfoque diagnóstico de una infección del SNC.
✅ La seguridad del paciente siempre prima sobre la rapidez de la punción lumbar.
Referencias
• Infectious Diseases Society of America (IDSA) Guidelines for Bacterial Meningitis.
• Harrison's Principles of Internal Medicine.
• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.
• UpToDate: Initial Evaluation and Management of Suspected Meningitis.
• Adams and Victor's Principles of Neurology.`,
  },
  {
    id: "dr-q-283",
    examArea: "Medicina Interna / Crisis hipertensivas",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_interna", "crisis_hipertensivas"],
    statement: "Paciente de 60 años consulta por cefalea intensa y visión borrosa. Al examen físico presenta PA 230/130 mmHg. Laboratorios: creatinina 2.5 mg/dL (basal 1.0 mg/dL). Fondo de ojo con retinopatía hipertensiva avanzada. ¿Cuál es la meta de reducción de la presión arterial durante la primera hora de tratamiento?",
    options: [
      { id: "A", label: "A", text: "Reducir la presión arterial hasta valores normales (<120/80 mmHg)." },
      { id: "B", label: "B", text: "Disminuir la presión arterial media aproximadamente un 20-25% durante la primera hora." },
      { id: "C", label: "C", text: "Reducir la presión arterial sistólica por debajo de 140 mmHg en los primeros 30 minutos." },
      { id: "D", label: "D", text: "Reducir la presión arterial diastólica por debajo de 90 mmHg en la primera hora." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta una emergencia hipertensiva con lesión aguda de órgano diana (insuficiencia renal aguda e hipertensión severa). La reducción de la presión arterial debe ser controlada y progresiva para evitar hipoperfusión de órganos vitales.",
    keyPoints: [
      "Cuando veas: PA severamente elevada. Daño agudo de órgano diana. Deterioro renal. Alteraciones neurológicas o visuales.",
      "Debes pensar en: Emergencia hipertensiva.",
      "Tema: Crisis hipertensivas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los errores más frecuentes en el manejo de las crisis hipertensivas.
La clave no es el valor de la presión.
La clave es:
La presencia de daño agudo de órgano diana.
¿Qué está ocurriendo realmente?
El paciente presenta:
•	Hipertensión severa.
•	Síntomas neurológicos.
•	Alteración visual.
•	Deterioro agudo de la función renal.
Esto corresponde a:
Emergencia hipertensiva.
¿Por qué no debe normalizarse la presión rápidamente?
Los pacientes con hipertensión crónica desarrollan mecanismos de adaptación vascular.
Si la presión arterial se reduce de forma brusca puede ocurrir:
•	Isquemia cerebral.
•	Isquemia miocárdica.
•	Lesión renal aguda.
•	Hipoperfusión sistémica.
¿Cuál es la meta durante la primera hora?
La recomendación general es:
Reducir la presión arterial media aproximadamente un 20-25% durante la primera hora.
Esto permite:
•	Disminuir el daño progresivo de órganos.
•	Mantener una perfusión adecuada.
¿Qué ocurre después?
Si el paciente permanece estable:
•	Reducción gradual durante las siguientes horas.
•	Alcanzar cifras más bajas de manera progresiva.
¿Qué medicamentos suelen utilizarse?
Dependiendo del escenario clínico:
•	Nicardipino.
•	Labetalol.
•	Nitroprusiato.
•	Nitroglicerina en situaciones específicas.
¿Cuál es la trampa de examen?
Muchos estudiantes piensan:
Presión muy alta = bajarla a normal inmediatamente.
Sin embargo:
Una reducción excesivamente rápida puede ser tan peligrosa como la hipertensión misma.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar daño agudo de órgano diana.
2.	Diagnosticar emergencia hipertensiva.
3.	Iniciar antihipertensivos intravenosos.
4.	Reducir la presión arterial media un 20-25% en la primera hora.
5.	Continuar descenso gradual posteriormente.
Perlas de examen
✅ Emergencia hipertensiva = hipertensión severa + daño agudo de órgano diana.
✅ La lesión renal aguda es un criterio de daño de órgano diana.
✅ No debe buscarse normalizar la presión inmediatamente.
✅ La reducción excesivamente rápida puede causar hipoperfusión.
✅ La meta inicial es reducir la PAM aproximadamente un 20-25%.
✅ El tratamiento suele requerir fármacos intravenosos.
✅ La velocidad de descenso es tan importante como el valor objetivo.
Referencias
• European Society of Hypertension Guidelines.
• American Heart Association Guidelines.
• Harrison's Principles of Internal Medicine.
• UpToDate: Management of Hypertensive Emergencies.
• Braunwald's Heart Disease.`,
  },
  {
    id: "dr-q-284",
    examArea: "Medicina Interna / Insuficiencia cardíaca aguda",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_interna", "insuficiencia_cardiaca_aguda"],
    statement: "Paciente de 68 años con antecedente de hipertensión arterial consulta por disnea severa de inicio súbito. Refiere ortopnea y sensación de ahogo progresiva. Al examen físico: PA 190/110 mmHg, FC 115 lpm, SatO₂ 84% al aire ambiente. Presenta estertores crepitantes bilaterales hasta campos medios y uso de musculatura accesoria. ¿Qué medida terapéutica impacta más rápidamente en la precarga y postcarga?",
    options: [
      { id: "A", label: "A", text: "Furosemida intravenosa." },
      { id: "B", label: "B", text: "Nitroglicerina intravenosa." },
      { id: "C", label: "C", text: "Dobutamina intravenosa." },
      { id: "D", label: "D", text: "Digoxina intravenosa." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta edema agudo de pulmón hipertensivo. Los nitratos intravenosos producen una rápida reducción de la precarga y, a dosis mayores, también disminuyen la postcarga, mejorando rápidamente la congestión pulmonar.",
    keyPoints: [
      "Cuando veas: Disnea súbita. Ortopnea. Estertores bilaterales. Hipoxemia. Hipertensión severa.",
      "Debes pensar en: Edema agudo de pulmón cardiogénico.",
      "Tema: Insuficiencia cardíaca aguda.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el tratamiento fisiopatológico del edema agudo de pulmón.
La clave no es la saturación.
La clave es:
Hipertensión severa + congestión pulmonar.
¿Qué está ocurriendo realmente?
El paciente presenta:
•	Disnea intensa.
•	Hipoxemia.
•	Estertores difusos.
•	Hipertensión marcada.
Esto sugiere:
Edema agudo de pulmón cardiogénico.
La elevación de las presiones de llenado del ventrículo izquierdo aumenta la presión hidrostática pulmonar y favorece:
Salida de líquido hacia los alvéolos.
¿Cuál es el objetivo inmediato?
Disminuir rápidamente:
•	La precarga.
•	La postcarga.
Para reducir la presión pulmonar y mejorar la función ventricular.
¿Por qué los nitratos son tan efectivos?
La nitroglicerina produce:
Venodilatación
Disminuye:
El retorno venoso al corazón.
Por tanto disminuye:
La precarga.
Vasodilatación arterial (a dosis más altas)
Reduce:
La resistencia vascular sistémica.
Y por tanto:
La postcarga.
El resultado es una mejoría rápida de la congestión pulmonar.
¿Por qué no la furosemida?
La furosemida es importante en el manejo.
Sin embargo:
Su efecto sobre la eliminación de volumen tarda más tiempo.
La pregunta solicita la intervención que impacta más rápidamente la precarga y la postcarga.
¿Por qué no dobutamina?
La dobutamina se utiliza principalmente en:
Bajo gasto cardíaco y choque cardiogénico.
Este paciente está hipertenso, no hipotenso.
¿Por qué no digoxina?
No tiene utilidad en el manejo agudo del edema pulmonar hipertensivo.
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
Furosemida.
Porque la asocian inmediatamente con edema pulmonar.
Pero fisiopatológicamente, la intervención que modifica más rápido la hemodinamia es:
La nitroglicerina intravenosa.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Oxigenación adecuada.
2.	Disminuir precarga y postcarga.
3.	Utilizar nitratos intravenosos.
4.	Añadir diuréticos según la situación clínica.
5.	Corregir la causa desencadenante.
Perlas de examen
✅ El edema agudo de pulmón hipertensivo es una emergencia cardiovascular.
✅ Los nitratos reducen rápidamente la precarga.
✅ A dosis mayores también disminuyen la postcarga.
✅ La mejoría clínica suele ser rápida tras la vasodilatación adecuada.
✅ La furosemida no es la intervención hemodinámica más rápida.
✅ La hipertensión es un hallazgo frecuente en el edema pulmonar agudo.
✅ El tratamiento debe dirigirse a corregir la fisiopatología de la congestión.
Referencias
• European Society of Cardiology Guidelines for Acute Heart Failure.
• Harrison's Principles of Internal Medicine.
• Braunwald's Heart Disease.
• UpToDate: Treatment of Acute Decompensated Heart Failure.
• American Heart Association Guidelines for Heart Failure.`,
  },
  {
    id: "dr-q-285",
    examArea: "Medicina Interna / Complicaciones del infarto agudo de miocardio",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_interna", "complicaciones_del_infarto_agudo_de_mioc"],
    statement: "Paciente de 64 años hospitalizado por infarto agudo de miocardio de cara anterior. Durante su evolución presenta PA 80/50 mmHg, frecuencia cardíaca 115 lpm, llenado capilar de 4 segundos, oliguria y estertores bilaterales en ambos campos pulmonares. ¿Cuál es la conducta más apropiada?",
    options: [
      { id: "A", label: "A", text: "Administrar bolo rápido de solución salina al 0.9%." },
      { id: "B", label: "B", text: "Iniciar nitroglicerina intravenosa para disminuir la congestión pulmonar." },
      { id: "C", label: "C", text: "Iniciar soporte inotrópico urgente y activar estrategia de reperfusión/revascularización." },
      { id: "D", label: "D", text: "Administrar furosemida como única medida inicial." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta un choque cardiogénico secundario a un infarto agudo de miocardio. La prioridad es restaurar la perfusión sistémica y corregir la causa subyacente mediante revascularización precoz.",
    keyPoints: [
      "Cuando veas: Hipotensión. Hipoperfusión periférica. Oliguria. Congestión pulmonar. IAM reciente.",
      "Debes pensar en: Choque cardiogénico.",
      "Tema: Complicaciones del infarto agudo de miocardio.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el reconocimiento del choque cardiogénico, una de las complicaciones más graves del infarto agudo de miocardio.
La clave no es el antecedente de IAM.
La clave es:
Hipoperfusión + congestión pulmonar.
¿Qué está ocurriendo realmente?
El paciente presenta:
•	PA 80/50 mmHg.
•	Oliguria.
•	Llenado capilar prolongado.
•	Estertores pulmonares.
Esto indica:
Hipoperfusión sistémica
Manifestada por:
•	Hipotensión.
•	Oliguria.
•	Mala perfusión periférica.
Y simultáneamente:
Congestión pulmonar
Manifestada por:
•	Estertores bilaterales.
La combinación de ambos hallazgos define:
Choque cardiogénico.
¿Cuál es el mecanismo fisiopatológico?
El infarto extenso compromete la función contráctil del ventrículo izquierdo.
Como consecuencia:
•	Disminuye el gasto cardíaco.
•	Aumenta la presión de llenado ventricular.
•	Se desarrolla edema pulmonar.
•	Disminuye la perfusión de órganos.
¿Cuál es el objetivo terapéutico?
Dos prioridades:
Mantener la perfusión tisular
Mediante:
Soporte inotrópico y hemodinámico.
Corregir la causa
Mediante:
Revascularización urgente.
La reperfusión temprana es la intervención que más impacta la supervivencia.
¿Por qué no administrar líquidos?
Esta es la trampa clásica.
El paciente ya tiene:
Congestión pulmonar.
Administrar volumen adicional puede empeorar el edema pulmonar y la insuficiencia respiratoria.
¿Por qué no nitroglicerina?
Los nitratos reducen la presión arterial.
En un paciente con:
PA 80/50 mmHg
Pueden agravar la hipoperfusión.
¿Por qué no solo furosemida?
Aunque existe congestión pulmonar, el problema principal es:
El bajo gasto cardíaco.
Tratar únicamente la congestión no corrige el choque.
¿Cuál es la trampa de examen?
Muchos estudiantes se enfocan en:
Los estertores.
Y responden diuréticos.
Sin embargo, primero deben identificar:
El estado de choque.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Reconocer el choque cardiogénico.
2.	Iniciar soporte hemodinámico.
3.	Monitorización intensiva.
4.	Revascularización urgente.
5.	Tratar las complicaciones asociadas.
Perlas de examen
✅ IAM + hipotensión + congestión pulmonar = choque cardiogénico hasta demostrar lo contrario.
✅ La oliguria es un signo de hipoperfusión sistémica.
✅ El llenado capilar prolongado indica bajo gasto cardíaco.
✅ La revascularización precoz mejora la supervivencia.
✅ Los líquidos pueden empeorar la congestión pulmonar.
✅ Los nitratos están contraindicados en hipotensión significativa.
✅ El choque cardiogénico es una emergencia cardiovascular de alta mortalidad.
Referencias
• European Society of Cardiology Guidelines for Acute Coronary Syndromes.
• Harrison's Principles of Internal Medicine.
• Braunwald's Heart Disease.
• UpToDate: Cardiogenic Shock Complicating Acute Myocardial Infarction.
• American Heart Association Guidelines for STEMI and Cardiogenic Shock.`,
  },
  {
    id: "dr-q-286",
    examArea: "Ginecología y Obstetricia / Emergencias obstétricas del primer trimestre",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia_y_obstetricia", "emergencias_obstetricas_del_primer_trime"],
    statement: "Mujer de 26 años, G2P1, consulta al servicio de urgencias por dolor abdominal bajo de aparición súbita irradiado a hombro derecho. Refiere amenorrea de 7 semanas. Al examen físico se encuentra pálida y diaforética. Signos vitales: TA 80/50 mmHg, FC 125 lpm, FR 22 rpm. Abdomen con resistencia muscular y signos de irritación peritoneal difusa. Tacto vaginal: dolor intenso a la movilización cervical y abombamiento del fondo de saco de Douglas. Prueba de embarazo positiva. Ecografía FAST a pie de cama: útero vacío y abundante líquido libre ecogénico intraabdominal. ¿Cuál es la conducta inicial más apropiada?",
    options: [
      { id: "A", label: "A", text: "Solicitar β-hCG cuantitativa seriada y observación hospitalaria." },
      { id: "B", label: "B", text: "Administrar metotrexato intramuscular." },
      { id: "C", label: "C", text: "Realizar laparoscopia diagnóstica programada." },
      { id: "D", label: "D", text: "Reanimación hemodinámica inmediata y laparotomía exploratoria urgente." },
    ],
    correctOptionId: "D",
    explanation: "La paciente presenta un embarazo ectópico roto con choque hemorrágico e irritación peritoneal generalizada. La prioridad es estabilización hemodinámica y control quirúrgico urgente de la hemorragia.",
    keyPoints: [
      "Cuando veas: Amenorrea. Dolor abdominal agudo. Prueba de embarazo positiva. Inestabilidad hemodinámica. Líquido libre abdominal.",
      "Debes pensar en: Embarazo ectópico roto hasta demostrar lo contrario.",
      "Tema: Emergencias obstétricas del primer trimestre.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las emergencias ginecoobstétricas más graves.
La clave no es la amenorrea.
La clave es:
El choque hemorrágico.
¿Qué está ocurriendo realmente?
La paciente presenta:
•	Amenorrea de 7 semanas.
•	Prueba de embarazo positiva.
•	Útero vacío.
•	Líquido libre abundante.
•	Hipotensión.
•	Taquicardia.
Esto es altamente sugestivo de:
Embarazo ectópico roto con hemoperitoneo.
¿Por qué duele el hombro derecho?
El sangrado intraabdominal irrita el diafragma.
Esta irritación genera:
Dolor referido al hombro (signo de Kehr).
Es un dato clásico de hemoperitoneo.
¿Qué significa el líquido libre ecogénico?
En una paciente embarazada e inestable:
Debe considerarse sangre hasta demostrar lo contrario.
La combinación de:
•	Útero vacío.
•	Embarazo positivo.
•	Hemoperitoneo.
Prácticamente establece el diagnóstico.
¿Cuál es la prioridad?
No es confirmar más estudios.
No es solicitar β-hCG.
La prioridad es:
Salvar la vida de la paciente.
Por tanto debe iniciarse:
Reanimación hemodinámica
•	Dos accesos venosos gruesos.
•	Cristaloides.
•	Hemoderivados según necesidad.
•	Monitorización continua.
Y simultáneamente:
Control quirúrgico del sangrado
¿Por qué no metotrexato?
El metotrexato está indicado en pacientes:
•	Hemodinámicamente estables.
•	Sin evidencia de ruptura.
•	Sin hemoperitoneo significativo.
Esta paciente cumple exactamente lo contrario.
¿Por qué no observación?
La paciente ya presenta:
Choque hemorrágico.
Retrasar el tratamiento aumenta la mortalidad.
¿Por qué laparotomía y no laparoscopia?
En pacientes inestables con hemorragia importante:
La laparotomía suele ser el abordaje más rápido para control del sangrado.
¿Cuál es la trampa de examen?
Muchos estudiantes identifican:
Embarazo ectópico.
Pero olvidan diferenciar:
•	Estable.
•	Inestable.
La conducta cambia completamente.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar embarazo ectópico roto.
2.	Reconocer choque hemorrágico.
3.	Iniciar reanimación inmediata.
4.	Activar cirugía urgente.
5.	Controlar la hemorragia.
Perlas de examen
✅ Embarazo positivo + útero vacío + líquido libre = sospecha alta de embarazo ectópico.
✅ La hipotensión y taquicardia indican choque hemorrágico.
✅ El dolor en hombro puede corresponder a irritación diafragmática por hemoperitoneo.
✅ El metotrexato está contraindicado en pacientes inestables.
✅ La prioridad es el control quirúrgico del sangrado.
✅ No deben retrasarse las medidas terapéuticas por estudios adicionales.
✅ El embarazo ectópico roto es una emergencia potencialmente mortal.
Referencias
• Williams Obstetrics.
• ACOG Practice Bulletin: Tubal Ectopic Pregnancy.
• Gabbe's Obstetrics: Normal and Problem Pregnancies.
• UpToDate: Ectopic Pregnancy Management.
• FIGO Guidelines for Ectopic Pregnancy.`,
  },
  {
    id: "dr-q-287",
    examArea: "Ginecología y Obstetricia / Trastornos hipertensivos del embarazo",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia_y_obstetricia", "trastornos_hipertensivos_del_embarazo"],
    statement: "Primigestante de 17 años, con embarazo de 33 semanas confirmado por ecografía de primer trimestre, es llevada a urgencias por cefalea occipital intensa y fosfenos de 6 horas de evolución. Refiere además dolor epigástrico tipo ardor. Al ingreso presenta TA 165/115 mmHg (confirmada 15 minutos después), FC 90 lpm. Al examen físico se documenta hiperreflexia patelar (+++/++++), dolor a la palpación profunda en hipocondrio derecho. RCTG: feto reactivo sin desaceleraciones. Laboratorios: AST 180 U/L, ALT 210 U/L, plaquetas 75.000/μL, creatinina 1.1 mg/dL. ¿Cuál es el siguiente paso más apropiado en el manejo?",
    options: [
      { id: "A", label: "A", text: "Manejo expectante con vigilancia materno-fetal hasta completar 37 semanas." },
      { id: "B", label: "B", text: "Administrar sulfato de magnesio, controlar la hipertensión e iniciar finalización del embarazo una vez estabilizada la madre." },
      { id: "C", label: "C", text: "Administrar corticoides para maduración pulmonar y dar egreso con seguimiento estrecho." },
      { id: "D", label: "D", text: "Solicitar proteinuria de 24 horas antes de establecer conducta definitiva." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta preeclampsia con criterios de gravedad asociada a síndrome HELLP. La conducta correcta es estabilizar a la madre y proceder a la finalización del embarazo, independientemente de que el bienestar fetal sea adecuado.",
    keyPoints: [
      "Cuando veas: TA ≥160/110 mmHg. Cefalea y síntomas visuales. Dolor en hipocondrio derecho o epigastralgia. Plaquetas <100.000. Elevación de transaminasas.",
      "Debes pensar en: Preeclampsia grave con síndrome HELLP.",
      "Tema: Trastornos hipertensivos del embarazo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa cuándo debe terminarse un embarazo hipertensivo independientemente de la edad gestacional.
La clave no es la presión arterial.
La clave es:
La evidencia de daño orgánico materno.
¿Qué está ocurriendo realmente?
La paciente presenta:
•	Hipertensión severa.
•	Cefalea.
•	Fosfenos.
•	Dolor en hipocondrio derecho.
•	Plaquetas de 75.000.
•	AST y ALT elevadas.
Esto corresponde a:
Preeclampsia con criterios de gravedad.
Y además:
Síndrome HELLP.
¿Por qué es HELLP?
Porque existen datos compatibles con:
H (Hemolysis)
No se aporta en el caso, pero suele formar parte del cuadro.
EL (Elevated Liver Enzymes)
AST 180 U/L.
ALT 210 U/L.
LP (Low Platelets)
Plaquetas 75.000/μL.
¿Cuál es el principal riesgo?
La paciente puede evolucionar rápidamente a:
•	Eclampsia.
•	Hemorragia cerebral.
•	Desprendimiento placentario.
•	CID.
•	Falla hepática.
•	Muerte materna.
¿Qué debe hacerse primero?
Estabilización materna
Con:
Sulfato de magnesio
Para prevenir convulsiones.
Antihipertensivos
Para disminuir el riesgo de hemorragia cerebral.
¿Y después?
La única cura definitiva de la preeclampsia es:
La finalización del embarazo.
En presencia de criterios de gravedad y HELLP:
No debe adoptarse una conducta expectante.
¿Por qué no esperar a las 37 semanas?
Porque el riesgo materno supera ampliamente el beneficio de prolongar la gestación.
¿Por qué no esperar una proteinuria?
La proteinuria:
No es necesaria para diagnosticar preeclampsia grave cuando existe daño orgánico evidente.
Esta es una trampa muy frecuente.
¿Por qué el bienestar fetal no cambia la conducta?
Aunque el registro fetal sea normal:
La indicación de terminar el embarazo está dada por la condición materna.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
33 semanas.
Y piensan:
"Intentemos prolongar el embarazo".
Pero el dato decisivo es:
HELLP + hipertensión severa + síntomas neurológicos.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Reconocer preeclampsia grave.
2.	Identificar síndrome HELLP.
3.	Administrar sulfato de magnesio.
4.	Controlar la presión arterial.
5.	Finalizar la gestación tras estabilización materna.
Perlas de examen
✅ TA ≥160/110 mmHg es un criterio de gravedad.
✅ Las plaquetas <100.000 sugieren síndrome HELLP.
✅ La epigastralgia o dolor en hipocondrio derecho es un signo de alarma.
✅ El sulfato de magnesio previene la eclampsia.
✅ La única cura definitiva es la finalización del embarazo.
✅ La proteinuria no es indispensable cuando existe daño orgánico materno.
✅ En obstetricia, la condición materna siempre tiene prioridad en situaciones de riesgo vital.
Referencias
• ACOG Practice Bulletin: Gestational Hypertension and Preeclampsia.
• Williams Obstetrics.
• FIGO Recommendations on Hypertensive Disorders of Pregnancy.
• UpToDate: HELLP Syndrome.
• ISSHP Guidelines for Hypertensive Disorders of Pregnancy.`,
  },
  {
    id: "dr-q-288",
    examArea: "Ginecología y Obstetricia / Hemorragias obstétricas del tercer trimestre",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia_y_obstetricia", "hemorragias_obstetricas_del_tercer_trime"],
    statement: "Mujer de 35 años, G4P3, con embarazo de 36 semanas y antecedente de tabaquismo pesado, consulta por inicio súbito de dolor abdominal intenso y continuo, acompañado de sangrado vaginal rojo oscuro de moderada cantidad. Al examen físico: TA 150/90 mmHg, FC 110 lpm. Se evidencia útero hipertónico (\"leñoso\"), doloroso a la palpación y que no relaja entre contracciones. La altura uterina actual es de 38 cm, habiendo sido de 34 cm en el control previo. La cardiotocografía muestra frecuencia cardíaca fetal basal de 100 lpm, pérdida de la variabilidad y desaceleraciones tardías repetitivas. ¿Cuál es el diagnóstico más probable y la conducta inmediata?",
    options: [
      { id: "A", label: "A", text: "Placenta previa sangrante; realizar ecografía transvaginal urgente antes de cualquier intervención." },
      { id: "B", label: "B", text: "Desprendimiento prematuro de placenta normoinserta (DPPNI) grave; estabilización materna y cesárea urgente." },
      { id: "C", label: "C", text: "Rotura uterina; inducción del trabajo de parto para finalizar rápidamente la gestación." },
      { id: "D", label: "D", text: "Trabajo de parto pretérmino con sufrimiento fetal; administrar tocolíticos y corticoides antenatales." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta el cuadro clásico de DPPNI grave: dolor abdominal intenso, sangrado oscuro, útero hipertónico, aumento de la altura uterina por hematoma retroplacentario y compromiso fetal agudo.",
    keyPoints: [
      "Cuando veas: Sangrado vaginal oscuro. Dolor abdominal intenso. Útero leñoso. Hipertonía uterina. Sufrimiento fetal.",
      "Debes pensar en: Desprendimiento prematuro de placenta normoinserta.",
      "Tema: Hemorragias obstétricas del tercer trimestre.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la principal diferencia clínica entre placenta previa y desprendimiento placentario.
La clave no es el sangrado.
La clave es:
El dolor y la hipertonía uterina.
¿Qué está ocurriendo realmente?
Se produce una separación prematura de una placenta normalmente implantada.
Como consecuencia:
•	Se rompe la circulación útero-placentaria.
•	Se forma un hematoma retroplacentario.
•	Aumenta la presión intrauterina.
•	Se compromete rápidamente la oxigenación fetal.
¿Qué datos orientan al diagnóstico?
Dolor abdominal intenso
A diferencia de la placenta previa, donde el sangrado suele ser:
Indoloro.
Aquí el dolor es:
Brusco e intenso.
Útero leñoso
Es uno de los hallazgos más característicos.
El útero permanece:
Hipertónico y doloroso.
Sangrado oscuro
Sugiere:
Sangre parcialmente retenida detrás de la placenta.
Aumento de la altura uterina
Puede indicar:
Expansión del hematoma retroplacentario.
¿Qué indica la cardiotocografía?
Presenta:
•	Bradicardia fetal relativa.
•	Pérdida de variabilidad.
•	Desaceleraciones tardías.
Todo ello indica:
Hipoxia fetal aguda.
¿Cuál es la conducta?
La prioridad es:
Estabilización materna
•	Accesos venosos gruesos.
•	Cristaloides.
•	Hemoderivados si son necesarios.
•	Monitorización continua.
Y posteriormente:
Cesárea urgente
Debido al compromiso fetal y al riesgo materno.
¿Por qué no esperar una ecografía?
El DPPNI es:
Un diagnóstico fundamentalmente clínico.
La ecografía puede ser normal.
Por tanto:
No debe retrasar la intervención.
¿Por qué no es placenta previa?
La placenta previa típicamente produce:
•	Sangrado rojo brillante.
•	Ausencia de dolor.
•	Útero blando.
Este caso muestra exactamente lo contrario.
¿Cuál es la trampa de examen?
Muchos estudiantes se enfocan únicamente en:
Sangrado en el tercer trimestre.
Pero el dato decisivo es:
Útero leñoso + dolor intenso.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar DPPNI.
2.	Reconocer compromiso fetal.
3.	Estabilizar a la madre.
4.	Finalizar la gestación urgentemente.
5.	Vigilar complicaciones hemorrágicas y coagulopatía.
Perlas de examen
✅ El DPPNI produce dolor abdominal intenso.
✅ El útero hipertónico o leñoso es un hallazgo clásico.
✅ El sangrado puede subestimar la magnitud real de la hemorragia.
✅ La bradicardia fetal y las desaceleraciones tardías indican sufrimiento fetal.
✅ La ecografía no descarta el diagnóstico.
✅ El tabaquismo es un factor de riesgo importante.
✅ El tratamiento definitivo suele ser la finalización urgente de la gestación cuando existe compromiso materno o fetal.
Referencias
• Williams Obstetrics.
• ACOG Practice Bulletin: Placental Abruption.
• Gabbe's Obstetrics: Normal and Problem Pregnancies.
• UpToDate: Placental Abruption.
• FIGO Recommendations on Obstetric Hemorrhage.`,
  },
  {
    id: "dr-q-289",
    examArea: "Ginecología y Obstetricia / Hemorragia posparto",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia_y_obstetricia", "hemorragia_posparto"],
    statement: "Mujer de 28 años, con diagnóstico de hipertensión gestacional en seguimiento prenatal, acaba de tener un parto vaginal de un recién nacido macrosómico de 4.200 g tras 14 horas de trabajo de parto y uso de oxitocina. Quince minutos después del alumbramiento presenta sangrado vaginal profuso. Al examen físico: PA 150/95 mmHg, FC 115 lpm. Se palpa un fondo uterino supraumbilical, flácido y de consistencia blanda. Se realiza masaje uterino bimanual y se optimiza la infusión de oxitocina sin lograr control del sangrado. ¿Cuál es el uterotónico de segunda línea más adecuado y seguro como siguiente paso?",
    options: [
      { id: "A", label: "A", text: "Metilergonovina." },
      { id: "B", label: "B", text: "Misoprostol." },
      { id: "C", label: "C", text: "Carboprost trometamina." },
      { id: "D", label: "D", text: "Ácido tranexámico." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta una hemorragia posparto por atonía uterina. Dado su antecedente de hipertensión gestacional, los derivados ergóticos como la metilergonovina están contraindicados por el riesgo de crisis hipertensiva. El misoprostol constituye una alternativa segura y eficaz como uterotónico de segunda línea.",
    keyPoints: [
      "Cuando veas: Hemorragia posparto. Útero blando. Fondo uterino elevado. Falta de respuesta a oxitocina.",
      "Debes pensar en: Atonía uterina.",
      "Tema: Hemorragia posparto.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el tratamiento escalonado de la principal causa de hemorragia posparto.
La clave no es el sangrado.
La clave es:
La hipertensión gestacional.
¿Qué está ocurriendo realmente?
La paciente presenta:
•	Sangrado abundante.
•	Útero flácido.
•	Fondo uterino elevado.
•	Falta de respuesta inicial a oxitocina.
Todo esto es característico de:
Atonía uterina.
La atonía es la causa más frecuente de hemorragia posparto.
¿Por qué ocurrió?
Esta paciente presenta múltiples factores de riesgo:
•	Trabajo de parto prolongado.
•	Uso prolongado de oxitocina.
•	Macrosomía fetal.
Todos ellos favorecen:
Fatiga del miometrio.
¿Cuál es el manejo inicial?
La secuencia habitual es:
1.	Masaje uterino.
2.	Oxitocina.
3.	Segundo uterotónico.
4.	Medidas mecánicas o quirúrgicas si persiste el sangrado.
¿Por qué no metilergonovina?
La metilergonovina es un excelente uterotónico.
Sin embargo produce:
Vasoconstricción intensa.
Por ello está contraindicada en:
•	Hipertensión gestacional.
•	Preeclampsia.
•	Hipertensión arterial crónica.
Esta es la principal trampa de la pregunta.
¿Por qué misoprostol?
El misoprostol:
•	Incrementa el tono uterino.
•	Es eficaz en hemorragia posparto.
•	No aumenta significativamente el riesgo de crisis hipertensiva.
Por ello constituye una opción segura en esta paciente.
¿Por qué no carboprost?
El carboprost también es eficaz.
Sin embargo suele evitarse inicialmente cuando existe una alternativa más segura y ampliamente disponible.
Además tiene limitaciones importantes en pacientes con:
•	Asma.
•	Enfermedad pulmonar.
¿Por qué no ácido tranexámico?
El ácido tranexámico forma parte del manejo integral de la hemorragia obstétrica.
Pero:
No es un uterotónico.
La pregunta solicita específicamente el siguiente uterotónico.
¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan:
Atonía uterina → metilergonovina.
Pero olvidan revisar:
La hipertensión de la paciente.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Diagnosticar atonía uterina.
2.	Masaje uterino.
3.	Oxitocina.
4.	Elegir el segundo uterotónico según las comorbilidades.
5.	Escalar a medidas invasivas si persiste el sangrado.
Perlas de examen
✅ La atonía uterina es la causa más frecuente de hemorragia posparto.
✅ El útero blando y aumentado de tamaño orienta al diagnóstico.
✅ La oxitocina es el uterotónico de primera línea.
✅ La metilergonovina está contraindicada en pacientes hipertensas.
✅ El misoprostol es una alternativa segura en hipertensión gestacional.
✅ La macrosomía y el trabajo de parto prolongado son factores de riesgo para atonía uterina.
✅ El tratamiento debe iniciarse de forma inmediata para prevenir choque hemorrágico.
Referencias
• Williams Obstetrics.
• ACOG Practice Bulletin: Postpartum Hemorrhage.
• FIGO Recommendations on Prevention and Treatment of Postpartum Hemorrhage.
• WHO Recommendations for the Prevention and Treatment of Postpartum Hemorrhage.
• UpToDate: Management of Postpartum Hemorrhage.`,
  },
  {
    id: "dr-q-290",
    examArea: "Ginecología y Obstetricia / Urgencias ginecológicas",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia_y_obstetricia", "urgencias_ginecologicas"],
    statement: "Mujer de 24 años, sin antecedentes de importancia, consulta por dolor abdominal bajo de aparición súbita, localizado predominantemente en fosa ilíaca derecha, de intensidad severa, tipo punzante, que la despertó durante la noche. Se acompaña de náuseas y dos episodios de vómito. Al examen físico presenta dolor a la palpación profunda en fosa ilíaca derecha con defensa voluntaria, sin signos claros de irritación peritoneal. Ecografía transvaginal: útero normal, ovario derecho aumentado de tamaño (7 x 5 cm) con múltiples folículos periféricos y quiste simple de 5 cm. Doppler: flujo arterial conservado, ausencia de flujo venoso en ovario derecho. Prueba de embarazo negativa. ¿Cuál es la conducta inicial de elección?",
    options: [
      { id: "A", label: "A", text: "Observación hospitalaria y repetición de ecografía Doppler en 24 horas." },
      { id: "B", label: "B", text: "Inicio de antibióticos de amplio espectro por sospecha de enfermedad pélvica inflamatoria." },
      { id: "C", label: "C", text: "Laparoscopia urgente con detorsión ovárica y preservación del ovario si es viable." },
      { id: "D", label: "D", text: "Ooforectomía derecha inmediata." },
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta un cuadro altamente sugestivo de torsión ovárica. La ausencia de flujo venoso es uno de los hallazgos más precoces y característicos. El tratamiento es quirúrgico urgente para preservar la función ovárica.",
    keyPoints: [
      "Cuando veas: Dolor pélvico súbito e intenso. Náuseas y vómito. Ovario aumentado de tamaño. Ausencia de flujo venoso en Doppler.",
      "Debes pensar en: Torsión ovárica.",
      "Tema: Urgencias ginecológicas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las urgencias ginecológicas con mayor riesgo de pérdida ovárica.
La clave no es el quiste.
La clave es:
La ausencia de flujo venoso.
¿Qué está ocurriendo realmente?
La torsión ocurre cuando el ovario gira sobre su pedículo vascular.
Inicialmente se compromete:
El drenaje venoso.
Posteriormente:
El flujo arterial.
Finalmente aparece:
Isquemia y necrosis ovárica.
¿Por qué el Doppler muestra flujo arterial?
Esta es una trampa clásica.
La presencia de flujo arterial:
No excluye torsión ovárica.
Debido a que:
•	La obstrucción venosa ocurre primero.
•	El ovario tiene doble irrigación.
•	Puede persistir flujo arterial parcial durante las fases iniciales.
Por ello:
La ausencia de flujo venoso es un hallazgo muy sugestivo.
¿Por qué el quiste es importante?
Los quistes ováricos aumentan el riesgo de torsión porque:
Incrementan el peso y la movilidad del ovario.
La mayoría de torsiones ocurren en ovarios:
Agrandados por quistes o masas anexiales.
¿Cuál es el tratamiento?
La conducta correcta es:
Laparoscopia urgente
Con:
•	Confirmación diagnóstica.
•	Detorsión del ovario.
•	Preservación ovárica siempre que sea posible.
¿Por qué no observar?
La viabilidad ovárica depende del tiempo.
Retrasar el tratamiento puede producir:
•	Necrosis.
•	Pérdida de la función endocrina.
•	Infertilidad futura.
¿Por qué no realizar ooforectomía de entrada?
Actualmente se recomienda:
Intentar preservar el ovario.
Incluso cuando presenta aspecto congestivo o cianótico.
La decisión de resección depende de los hallazgos intraoperatorios.
¿Por qué no administrar antibióticos?
No existen datos que sugieran:
•	Enfermedad inflamatoria pélvica.
•	Infección genital.
•	Fiebre.
•	Leucorrea.
¿Cuál es la trampa de examen?
Muchos estudiantes creen que:
Si existe flujo arterial no puede haber torsión.
Esto es falso.
La torsión puede existir aun con:
Flujo arterial conservado.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Sospechar torsión ovárica.
2.	Confirmar con clínica y ecografía.
3.	Reconocer que el Doppler normal no la excluye.
4.	Realizar laparoscopia urgente.
5.	Preservar el ovario cuando sea posible.
Perlas de examen
✅ La torsión ovárica produce dolor súbito e intenso.
✅ Las náuseas y vómitos son muy frecuentes.
✅ La ausencia de flujo venoso es un hallazgo precoz.
✅ El flujo arterial conservado no descarta el diagnóstico.
✅ Los quistes ováricos aumentan el riesgo de torsión.
✅ La laparoscopia es el procedimiento de elección.
✅ La preservación ovárica debe intentarse siempre que sea posible.
Referencias
• Williams Gynecology.
• ACOG Committee Opinion: Adnexal Torsion.
• UpToDate: Ovarian and Fallopian Tube Torsion.
• Novak's Gynecology.
• Berek & Novak's Gynecology.`,
  },
  {
    id: "dr-q-291",
    examArea: "Ginecología y Obstetricia / Infecciones ginecológicas",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia_y_obstetricia", "infecciones_ginecologicas"],
    statement: "Mujer de 25 años, nulípara, sin métodos anticonceptivos, consulta por dolor pélvico progresivo bilateral de 4 días de evolución, acompañado de fiebre de 38.5°C, malestar general y flujo vaginal amarillento de mal olor. Refiere nueva pareja sexual hace 3 semanas. Al examen físico: abdomen inferior doloroso a la palpación. A la especuloscopia se observa cérvix eritematoso y friable con secreción mucopurulenta. Al tacto vaginal presenta intenso dolor a la movilización cervical y anexos dolorosos bilateralmente. Ecografía pélvica: útero y ovarios normales, sin masas anexiales ni líquido libre. Prueba de embarazo negativa. ¿Cuál es el manejo empírico inicial más apropiado?",
    options: [
      { id: "A", label: "A", text: "Azitromicina oral en dosis única y control ambulatorio." },
      { id: "B", label: "B", text: "Ceftriaxona intramuscular más doxiciclina y metronidazol." },
      { id: "C", label: "C", text: "Legrado uterino diagnóstico." },
      { id: "D", label: "D", text: "Histerectomía subtotal urgente." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta un cuadro clínico compatible con enfermedad inflamatoria pélvica (EIP). El tratamiento empírico debe iniciarse inmediatamente cubriendo los microorganismos más frecuentemente implicados, incluyendo Neisseria gonorrhoeae, Chlamydia trachomatis y flora anaerobia.",
    keyPoints: [
      "Cuando veas: Dolor pélvico. Fiebre. Flujo mucopurulento. Dolor a la movilización cervical.",
      "Debes pensar en: Enfermedad inflamatoria pélvica (EIP).",
      "Tema: Infecciones ginecológicas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el diagnóstico clínico y el tratamiento empírico de la EIP.
La clave no es la ecografía.
La clave es:
El dolor a la movilización cervical.
¿Qué está ocurriendo realmente?
La paciente presenta:
•	Nueva pareja sexual.
•	Fiebre.
•	Leucorrea mucopurulenta.
•	Dolor pélvico bilateral.
•	Dolor cervical intenso.
Estos hallazgos son altamente sugestivos de:
Enfermedad inflamatoria pélvica.
¿Por qué es importante el dolor a la movilización cervical?
Es uno de los hallazgos clínicos más característicos.
Cuando aparece asociado a:
•	Dolor uterino.
•	Dolor anexial.
Debe considerarse EIP hasta demostrar lo contrario.
¿Por qué la ecografía es normal?
Otra trampa clásica.
La mayoría de pacientes con EIP inicial:
Tienen ecografía normal.
La ecografía es más útil para detectar complicaciones como:
•	Absceso tuboovárico.
•	Piosálpinx.
•	Hidrosálpinx.
¿Qué microorganismos deben cubrirse?
Principalmente:
•	Neisseria gonorrhoeae.
•	Chlamydia trachomatis.
•	Anaerobios genitales.
Por ello el esquema recomendado incluye:
Ceftriaxona
Cobertura gonocócica.
Doxiciclina
Cobertura para clamidia.
Metronidazol
Cobertura anaerobia.
¿Por qué iniciar tratamiento sin esperar cultivos?
Porque el diagnóstico es:
Fundamentalmente clínico.
Retrasar el tratamiento aumenta el riesgo de:
•	Infertilidad tubárica.
•	Embarazo ectópico.
•	Dolor pélvico crónico.
¿Por qué no azitromicina sola?
No proporciona cobertura adecuada para:
•	Gonococo.
•	Anaerobios.
¿Cuál es la trampa de examen?
Muchos estudiantes ven:
Ecografía normal.
Y descartan EIP.
Sin embargo:
La EIP es un diagnóstico clínico.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar dolor pélvico + fiebre.
2.	Buscar dolor a la movilización cervical.
3.	Sospechar EIP.
4.	Iniciar antibióticos empíricos de amplio espectro.
5.	Tratar precozmente para prevenir secuelas.
Perlas de examen
✅ El dolor a la movilización cervical es un hallazgo clásico de EIP.
✅ La ecografía puede ser normal en fases iniciales.
✅ El tratamiento debe iniciarse de forma empírica.
✅ La cobertura debe incluir gonococo, clamidia y anaerobios.
✅ La nueva pareja sexual es un factor de riesgo importante.
✅ El retraso terapéutico aumenta el riesgo de infertilidad.
✅ La EIP es una de las principales causas prevenibles de infertilidad tubárica.
Referencias
• CDC Sexually Transmitted Infections Treatment Guidelines.
• Williams Gynecology.
• Berek & Novak's Gynecology.
• ACOG Practice Bulletin: Pelvic Inflammatory Disease.
• UpToDate: Pelvic Inflammatory Disease in Adult Women.`,
  },
  {
    id: "dr-q-292",
    examArea: "Ginecología y Obstetricia / Hemorragias del tercer trimestre",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia_y_obstetricia", "hemorragias_del_tercer_trimestre"],
    statement: "Mujer de 33 años, G3P2, con embarazo de 32 semanas, consulta a urgencias porque despertó en medio de un charco de sangre. Refiere sangrado vaginal rojo rutilante, de moderada cantidad, completamente indoloro. Niega contracciones, pérdida de líquido amniótico o antecedente traumático. Al examen físico: TA 110/70 mmHg, FC 88 lpm. Abdomen blando, no doloroso, útero con tono normal. Registro cardiotocográfico reactivo. Ante la sospecha clínica, ¿cuál es el paso diagnóstico inicial más apropiado?",
    options: [
      { id: "A", label: "A", text: "Tacto vaginal para determinar dilatación cervical." },
      { id: "B", label: "B", text: "Amnioscopia diagnóstica." },
      { id: "C", label: "C", text: "Ecografía obstétrica con evaluación de la localización placentaria." },
      { id: "D", label: "D", text: "Inducción inmediata del trabajo de parto." },
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta un cuadro clínico altamente sugestivo de placenta previa. El estudio inicial de elección es la ecografía para determinar la relación de la placenta con el orificio cervical interno.",
    keyPoints: [
      "Cuando veas: Sangrado vaginal rojo brillante. Tercer trimestre. Ausencia de dolor. Útero relajado.",
      "Debes pensar en: Placenta previa.",
      "Tema: Hemorragias del tercer trimestre.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el abordaje diagnóstico de una de las principales causas de hemorragia obstétrica.
La clave no es el sangrado.
La clave es:
Que el sangrado es indoloro.
¿Qué está ocurriendo realmente?
La paciente presenta:
•	Sangrado rojo brillante.
•	Sin dolor.
•	Sin contracciones.
•	Útero blando.
•	Estabilidad hemodinámica.
Estos hallazgos son clásicos de:
Placenta previa.
¿Por qué ocurre el sangrado?
La placenta se encuentra implantada en el segmento uterino inferior.
A medida que progresa el embarazo:
El segmento uterino se distiende.
Esto provoca:
Separación parcial de la placenta y sangrado.
¿Cuál es el examen inicial?
La prueba diagnóstica de elección es:
Ecografía obstétrica
Permite determinar:
•	Localización placentaria.
•	Relación con el orificio cervical interno.
•	Tipo de placenta previa.
¿Por qué no realizar tacto vaginal?
Esta es una de las trampas más importantes.
Ante sospecha de placenta previa:
El tacto vaginal está contraindicado.
Porque puede desencadenar:
•	Hemorragia masiva.
•	Compromiso fetal.
•	Inestabilidad materna.
¿Por qué no inducir el parto?
Todavía no existe:
•	Diagnóstico confirmado.
•	Indicación inmediata de terminación.
Primero debe establecerse la causa del sangrado.
¿Cómo diferenciarla del desprendimiento placentario?
Placenta previa
•	Sangrado rojo brillante.
•	Indoloro.
•	Útero blando.
DPPNI
•	Sangrado oscuro.
•	Dolor intenso.
•	Útero hipertónico o leñoso.
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
Tacto vaginal.
Porque cualquier sangrado obstétrico parece requerir valoración cervical.
Sin embargo:
En placenta previa el tacto puede ser peligroso.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Sospechar placenta previa.
2.	Evitar tacto vaginal.
3.	Solicitar ecografía.
4.	Confirmar localización placentaria.
5.	Definir conducta según edad gestacional y sangrado.
Perlas de examen
✅ La placenta previa produce sangrado rojo brillante e indoloro.
✅ El útero suele encontrarse blando y no doloroso.
✅ El tacto vaginal está contraindicado hasta conocer la ubicación de la placenta.
✅ La ecografía es el estudio diagnóstico inicial de elección.
✅ El bienestar fetal puede mantenerse conservado inicialmente.
✅ Toda hemorragia indolora del tercer trimestre debe hacer sospechar placenta previa.
✅ La ecografía transvaginal puede realizarse de forma segura cuando está indicada.
Referencias
• Williams Obstetrics.
• ACOG Practice Bulletin: Placenta Previa.
• FIGO Guidelines on Placenta Previa.
• UpToDate: Placenta Previa.
• Gabbe's Obstetrics: Normal and Problem Pregnancies.`,
  },
  {
    id: "dr-q-293",
    examArea: "Ginecología y Obstetricia / Sangrado uterino anormal",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia_y_obstetricia", "sangrado_uterino_anormal"],
    statement: "Mujer de 48 años, con IMC de 36 kg/m² y diagnóstico de diabetes mellitus tipo 2, consulta por sangrado menstrual abundante y prolongado desde hace 6 meses. Refiere uso de 6 a 8 toallas higiénicas al día y ciclos cada vez más irregulares. Nunca ha estado embarazada. Al examen físico: PA 130/80 mmHg, examen pélvico sin alteraciones anatómicas evidentes, útero de tamaño normal. Ecografía transvaginal: útero de morfología normal, ovarios sin alteraciones y línea endometrial heterogénea de 17 mm. Prueba de embarazo negativa. ¿Cuál es el paso diagnóstico más importante a seguir?",
    options: [
      { id: "A", label: "A", text: "Solicitar niveles séricos de FSH y estradiol." },
      { id: "B", label: "B", text: "Iniciar tratamiento hormonal empírico y reevaluar en 6 meses." },
      { id: "C", label: "C", text: "Realizar biopsia endometrial." },
      { id: "D", label: "D", text: "Solicitar resonancia magnética pélvica." },
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta sangrado uterino anormal asociado a múltiples factores de riesgo para hiperplasia y cáncer de endometrio (obesidad, diabetes, nuliparidad y edad >45 años), además de un endometrio engrosado y heterogéneo. La biopsia endometrial es obligatoria para descartar patología premaligna o maligna.",
    keyPoints: [
      "Cuando veas: Sangrado uterino anormal. Edad ≥45 años. Obesidad. Diabetes. Endometrio engrosado.",
      "Debes pensar en: Descartar hiperplasia o cáncer de endometrio mediante biopsia endometrial.",
      "Tema: Sangrado uterino anormal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa cuándo el sangrado uterino anormal debe considerarse potencialmente maligno hasta demostrar lo contrario.
La clave no es el sangrado.
La clave es:
Los factores de riesgo para cáncer endometrial.
¿Qué está ocurriendo realmente?
La paciente presenta:
•	48 años.
•	Obesidad.
•	Diabetes mellitus.
•	Nuliparidad.
•	Sangrado uterino anormal.
•	Endometrio de 17 mm.
Este conjunto de hallazgos obliga a sospechar:
Hiperplasia endometrial o carcinoma endometrial.
¿Por qué la obesidad aumenta el riesgo?
El tejido adiposo transforma andrógenos en estrógenos mediante aromatización.
Esto genera:
Exposición prolongada a estrógenos sin oposición de progesterona.
Como consecuencia:
•	Hiperplasia endometrial.
•	Atipia endometrial.
•	Cáncer endometrial.
¿Por qué la diabetes es importante?
La diabetes se asocia a:
•	Hiperinsulinemia.
•	Resistencia a la insulina.
•	Mayor proliferación endometrial.
Por ello constituye un factor de riesgo independiente.
¿Qué importancia tiene el grosor endometrial?
Un endometrio:
Engrosado y heterogéneo.
En una paciente con sangrado uterino anormal y factores de riesgo:
Debe estudiarse histológicamente.
¿Cuál es el examen clave?
Biopsia endometrial
Porque permite:
•	Confirmar hiperplasia.
•	Identificar atipia.
•	Diagnosticar carcinoma.
¿Por qué no iniciar tratamiento hormonal?
Porque antes de tratar:
Debe excluirse malignidad.
Iniciar terapia empírica podría retrasar un diagnóstico importante.
¿Por qué no solicitar FSH?
La perimenopausia puede explicar irregularidades menstruales.
Sin embargo:
No explica por sí sola el endometrio engrosado en una paciente de alto riesgo.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
Mujer cercana a la menopausia.
Y responden:
Cambios hormonales fisiológicos.
Pero el dato decisivo es:
Endometrio de 17 mm + obesidad + diabetes + sangrado.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar sangrado uterino anormal.
2.	Buscar factores de riesgo para cáncer endometrial.
3.	Evaluar el endometrio mediante ecografía.
4.	Realizar biopsia endometrial.
5.	Definir tratamiento según el resultado histológico.
Perlas de examen
✅ Toda mujer ≥45 años con sangrado uterino anormal requiere evaluación endometrial.
✅ La obesidad es uno de los principales factores de riesgo para cáncer de endometrio.
✅ La diabetes aumenta el riesgo de hiperplasia endometrial.
✅ La nuliparidad también incrementa el riesgo.
✅ Un endometrio engrosado debe estudiarse histológicamente.
✅ La biopsia endometrial es el método diagnóstico fundamental.
✅ Nunca debe iniciarse tratamiento hormonal empírico sin excluir malignidad cuando existen factores de riesgo importantes.
Referencias
• Williams Gynecology.
• ACOG Practice Bulletin: Abnormal Uterine Bleeding.
• Berek & Novak's Gynecology.
• UpToDate: Evaluation of Abnormal Uterine Bleeding.
• NCCN Guidelines for Endometrial Cancer.`,
  },
  {
    id: "dr-q-294",
    examArea: "Ginecología y Obstetricia / Infecciones obstétricas",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia_y_obstetricia", "infecciones_obstetricas"],
    statement: "Mujer de 21 años, primigestante, con embarazo de 38 semanas, consulta por pérdida de líquido claro y abundante por vagina desde hace 24 horas. Refiere disminución de movimientos fetales. Al examen físico: TA 110/70 mmHg, FC materna 115 lpm, temperatura 38.6°C. Altura uterina 34 cm. Útero doloroso a la palpación profunda e irritable. Tacto vaginal: cérvix borrado 80%, dilatación 3 cm, salida de líquido amniótico de mal olor. Registro cardiotocográfico: frecuencia cardíaca fetal basal de 175 lpm, variabilidad mínima, sin desaceleraciones. ¿Cuál es el diagnóstico más probable y la conducta terapéutica indicada?",
    options: [
      { id: "A", label: "A", text: "Ruptura prematura de membranas sin infección; manejo expectante." },
      { id: "B", label: "B", text: "Corioamnionitis clínica; iniciar antibióticos intravenosos de amplio espectro y finalizar el embarazo." },
      { id: "C", label: "C", text: "Desprendimiento prematuro de placenta normoinserta; cesárea urgente." },
      { id: "D", label: "D", text: "Preeclampsia grave; iniciar sulfato de magnesio." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta criterios clínicos claros de infección intraamniótica: fiebre materna, taquicardia materna, taquicardia fetal, útero doloroso e irritable y líquido amniótico fétido. El tratamiento consiste en antibioticoterapia intravenosa inmediata y finalización del embarazo.",
    keyPoints: [
      "Cuando veas: Ruptura prolongada de membranas. Fiebre materna. Taquicardia fetal. Líquido amniótico fétido. Dolor uterino.",
      "Debes pensar en: Corioamnionitis clínica (infección intraamniótica).",
      "Tema: Infecciones obstétricas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las complicaciones infecciosas más importantes asociadas a la ruptura prolongada de membranas.
La clave no es la ruptura de membranas.
La clave es:
Los signos de infección materno-fetal.
¿Qué está ocurriendo realmente?
La paciente presenta:
•	Ruptura de membranas de 24 horas.
•	Fiebre de 38.6°C.
•	Taquicardia materna.
•	Taquicardia fetal.
•	Líquido amniótico maloliente.
•	Dolor uterino.
Estos hallazgos son altamente sugestivos de:
Corioamnionitis clínica.
¿Por qué ocurre?
La ruptura prolongada de membranas favorece:
El ascenso de microorganismos desde el tracto genital inferior.
La infección compromete:
•	Membranas ovulares.
•	Líquido amniótico.
•	Placenta.
•	Feto.
¿Qué importancia tiene la taquicardia fetal?
La taquicardia fetal es uno de los hallazgos más frecuentes de infección intraamniótica.
En este caso:
FC fetal de 175 lpm.
Es un dato de alarma importante.
¿Qué significa el líquido amniótico fétido?
Es un hallazgo muy sugestivo de:
Infección bacteriana intraamniótica.
Y prácticamente orienta el diagnóstico clínico.
¿Cuál es el tratamiento?
La conducta correcta incluye:
Antibióticos intravenosos
Clásicamente:
•	Ampicilina.
•	Gentamicina.
Con ajustes según protocolos institucionales.
Finalización del embarazo
La infección intraamniótica:
No mejora manteniendo el embarazo.
La fuente infecciosa persiste mientras continúe la gestación.
¿Debe hacerse cesárea obligatoriamente?
No.
La corioamnionitis:
No es una indicación absoluta de cesárea.
La vía del parto dependerá de las condiciones obstétricas.
Lo importante es:
Finalizar el embarazo.
¿Por qué no manejo expectante?
Porque existe:
Infección materno-fetal establecida.
Prolongar la gestación aumenta el riesgo de:
•	Sepsis materna.
•	Sepsis neonatal.
•	Shock séptico.
•	Muerte fetal.
¿Cuál es la trampa de examen?
Muchos estudiantes identifican la ruptura prematura de membranas y responden:
Antibióticos + observación.
Pero olvidan que la paciente ya desarrolló:
Corioamnionitis.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar infección intraamniótica.
2.	Iniciar antibióticos IV inmediatamente.
3.	Monitorizar madre y feto.
4.	Finalizar la gestación.
5.	Vigilar complicaciones sépticas.
Perlas de examen
✅ La ruptura prolongada de membranas es un factor de riesgo importante para corioamnionitis.
✅ La fiebre materna es el criterio clínico más importante.
✅ La taquicardia fetal es un hallazgo frecuente.
✅ El líquido amniótico fétido orienta fuertemente al diagnóstico.
✅ El tratamiento incluye antibióticos intravenosos.
✅ La infección intraamniótica obliga a finalizar el embarazo.
✅ La corioamnionitis no constituye por sí sola indicación obligatoria de cesárea.
Referencias
• Williams Obstetrics.
• ACOG Clinical Practice Update: Intraamniotic Infection.
• FIGO Recommendations on Intrauterine Infection.
• UpToDate: Clinical Chorioamnionitis.
• Gabbe's Obstetrics: Normal and Problem Pregnancies.`,
  },
  {
    id: "dr-q-295",
    examArea: "Ginecología y Obstetricia / Trastornos hipertensivos del embarazo",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia_y_obstetricia", "trastornos_hipertensivos_del_embarazo"],
    statement: "Mujer de 19 años, nulípara, cursando la primera semana de puerperio tras un parto institucional sin complicaciones aparentes, es llevada a urgencias por presentar convulsiones en domicilio. Su madre describe un episodio de movimientos tónico-clónicos generalizados de aproximadamente 2 minutos de duración, asociado a relajación de esfínteres y cianosis peribucal. La paciente llega somnolienta y confusa. Signos vitales: TA 160/110 mmHg, FC 105 lpm, SatO₂ 96% con oxígeno suplementario. Durante la valoración médica presenta una nueva convulsión tónico-clónica generalizada. ¿Cuál es la primera intervención farmacológica indicada para controlar y prevenir nuevas crisis?",
    options: [
      { id: "A", label: "A", text: "Diazepam intravenoso." },
      { id: "B", label: "B", text: "Fenitoína intravenosa." },
      { id: "C", label: "C", text: "Sulfato de magnesio intravenoso." },
      { id: "D", label: "D", text: "Levetiracetam intravenoso." },
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta una eclampsia posparto. El tratamiento de elección para el control y prevención de nuevas convulsiones es el sulfato de magnesio.",
    keyPoints: [
      "Cuando veas: Convulsiones. Hipertensión arterial. Embarazo o puerperio reciente.",
      "Debes pensar en: Eclampsia hasta demostrar lo contrario.",
      "Tema: Trastornos hipertensivos del embarazo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las emergencias obstétricas más graves y potencialmente mortales.
La clave no es la convulsión.
La clave es:
El puerperio asociado a hipertensión severa.
¿Qué está ocurriendo realmente?
La paciente presenta:
•	Puerperio reciente.
•	TA 160/110 mmHg.
•	Convulsiones tónico-clónicas generalizadas.
Esto corresponde a:
Eclampsia.
Recordar que la eclampsia puede aparecer:
•	Durante el embarazo.
•	Durante el parto.
•	En el puerperio.
Incluso varios días después del nacimiento.
¿Por qué convulsiona?
La fisiopatología incluye:
•	Disfunción endotelial generalizada.
•	Vasoespasmo cerebral.
•	Edema cerebral.
•	Alteración de la autorregulación vascular.
Todo ello favorece:
Crisis convulsivas generalizadas.
¿Cuál es el medicamento de elección?
Sulfato de magnesio
Porque:
•	Controla la actividad convulsiva.
•	Disminuye el riesgo de recurrencia.
•	Reduce la morbimortalidad materna.
Es superior a:
•	Fenitoína.
•	Diazepam.
•	Otros anticonvulsivantes.
En este contexto específico.
¿Por qué no diazepam?
Puede controlar una convulsión aguda.
Sin embargo:
No es el tratamiento de elección de la eclampsia.
¿Por qué no fenitoína?
Históricamente se utilizó.
Pero múltiples estudios demostraron que:
El sulfato de magnesio es más eficaz para prevenir nuevas crisis.
¿Qué debe hacerse además?
Después de controlar la convulsión:
•	Asegurar vía aérea.
•	Oxigenación adecuada.
•	Control de la hipertensión severa.
•	Monitorización materna.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
Convulsión.
Y responden:
Diazepam o fenitoína.
Pero el dato decisivo es:
Puerperio + hipertensión severa.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Reconocer eclampsia.
2.	Administrar sulfato de magnesio.
3.	Controlar la vía aérea.
4.	Tratar la hipertensión severa.
5.	Vigilar complicaciones maternas.
Perlas de examen
✅ La eclampsia puede aparecer durante el puerperio.
✅ Toda convulsión en una puérpera hipertensa debe considerarse eclampsia hasta demostrar lo contrario.
✅ El sulfato de magnesio es el tratamiento de elección.
✅ Es superior a fenitoína y benzodiacepinas para prevenir recurrencias.
✅ La hipertensión severa debe tratarse simultáneamente.
✅ La protección de la vía aérea es fundamental durante la crisis.
✅ La eclampsia es una emergencia obstétrica potencialmente mortal.
Referencias
• Williams Obstetrics.
• ACOG Practice Bulletin: Gestational Hypertension and Preeclampsia.
• FIGO Recommendations on Hypertensive Disorders of Pregnancy.
• UpToDate: Eclampsia.
• ISSHP Guidelines for Hypertensive Disorders of Pregnancy.`,
  },
  {
    id: "dr-q-296",
    examArea: "Psiquiatría / Alteración aguda del estado mental",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "alteracion_aguda_del_estado_mental"],
    statement: "Hombre de 74 años, con antecedentes de hipertensión arterial y diabetes mellitus, cursa su segundo día postoperatorio tras un reemplazo total de cadera. Durante la noche, el personal de enfermería reporta comportamiento agresivo, intento de retiro de la sonda vesical y alucinaciones visuales (\"veía insectos en las sábanas\"). En la evaluación de la mañana se encuentra somnoliento, orientado únicamente en persona, con marcada dificultad para mantener la atención durante la entrevista. Signos vitales: TA 145/90 mmHg, FC 88 lpm, T 37.2°C, SpO₂ 94%. Creatinina 1.4 mg/dL. ¿Cuál es la conducta inicial más apropiada?",
    options: [
      { id: "A", label: "A", text: "Solicitar resonancia magnética cerebral urgente para descartar accidente cerebrovascular." },
      { id: "B", label: "B", text: "Iniciar haloperidol intravenoso de forma rutinaria y permanente." },
      { id: "C", label: "C", text: "Diagnosticar demencia de inicio reciente e iniciar inhibidores de acetilcolinesterasa." },
      { id: "D", label: "D", text: "Identificar y corregir causas precipitantes, implementar medidas no farmacológicas para delirium y reservar antipsicóticos solo si existe riesgo para el paciente o el personal." },
    ],
    correctOptionId: "D",
    explanation: "El paciente presenta un cuadro típico de delirium postoperatorio: inicio agudo, curso fluctuante, alteración de la atención, desorientación y alteraciones perceptivas. El manejo inicial debe centrarse en identificar causas reversibles y aplicar medidas no farmacológicas.",
    keyPoints: [
      "Cuando veas: Inicio agudo. Curso fluctuante. Alteración de la atención. Alucinaciones. Paciente hospitalizado o postoperatorio.",
      "Debes pensar en: Delirium.",
      "Tema: Alteración aguda del estado mental.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la diferencia entre delirium y otras causas de deterioro cognitivo.
La clave no son las alucinaciones.
La clave es:
La alteración de la atención con inicio agudo y curso fluctuante.
¿Qué está ocurriendo realmente?
El paciente presenta:
•	Inicio súbito.
•	Fluctuación entre agitación y somnolencia.
•	Déficit de atención.
•	Desorientación.
•	Alteraciones perceptivas.
Estos hallazgos son característicos de:
Delirium.
¿Por qué ocurre en el postoperatorio?
Los pacientes ancianos tienen múltiples factores predisponentes:
•	Edad avanzada.
•	Cirugía mayor.
•	Dolor.
•	Privación del sueño.
•	Infecciones.
•	Retención urinaria.
•	Trastornos hidroelectrolíticos.
•	Fármacos.
¿Cuál es el hallazgo más importante para el diagnóstico?
La característica cardinal es:
La alteración de la atención.
Por eso el paciente tiene dificultad para mantener una conversación coherente o seguir instrucciones.
¿Cuál es el manejo inicial?
Lo primero es:
Buscar causas reversibles
Por ejemplo:
•	Hipoxemia.
•	Infección.
•	Retención urinaria.
•	Estreñimiento.
•	Alteraciones metabólicas.
•	Efectos adversos de medicamentos.
Y simultáneamente:
Medidas no farmacológicas
•	Reorientación frecuente.
•	Favorecer sueño nocturno.
•	Corregir déficits visuales y auditivos.
•	Movilización temprana.
•	Hidratación adecuada.
¿Cuándo usar antipsicóticos?
No se utilizan de rutina.
Se reservan para:
•	Agitación severa.
•	Riesgo de autolesión.
•	Riesgo para el personal.
•	Interferencia con tratamientos esenciales.
¿Por qué no es demencia?
La demencia se caracteriza por:
•	Inicio insidioso.
•	Evolución progresiva.
•	Atención relativamente preservada al inicio.
Este caso tiene:
Inicio agudo y fluctuante.
¿Por qué no pedir neuroimagen de entrada?
La clínica es altamente sugestiva de delirium postoperatorio.
La neuroimagen se reserva cuando existen:
•	Déficits neurológicos focales.
•	Sospecha de lesión estructural.
•	Datos atípicos.
¿Cuál es la trampa de examen?
Muchos estudiantes se enfocan en:
Las alucinaciones.
Y responden:
Trastorno psiquiátrico primario.
Pero el dato decisivo es:
Alteración aguda de la atención.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Reconocer delirium.
2.	Buscar la causa desencadenante.
3.	Corregir factores reversibles.
4.	Implementar medidas no farmacológicas.
5.	Utilizar antipsicóticos solo cuando estén claramente indicados.
Perlas de examen
✅ El delirium tiene inicio agudo y curso fluctuante.
✅ La alteración de la atención es el hallazgo cardinal.
✅ Es frecuente en pacientes ancianos hospitalizados.
✅ El postoperatorio es un desencadenante clásico.
✅ Las alucinaciones visuales son frecuentes.
✅ El tratamiento principal es corregir la causa subyacente.
✅ Los antipsicóticos no son el tratamiento de rutina y deben reservarse para situaciones específicas.
Referencias
• Harrison's Principles of Internal Medicine.
• DSM-5-TR.
• American Geriatrics Society Guidelines on Postoperative Delirium.
• UpToDate: Delirium in Hospitalized Older Adults.
• Tintinalli's Emergency Medicine.`,
  },
  {
    id: "dr-q-297",
    examArea: "Psiquiatría / Emergencias neuropsiquiátricas",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "emergencias_neuropsiquiatricas"],
    statement: "Mujer de 28 años con diagnóstico conocido de esquizofrenia, es llevada a urgencias por cuadro de 48 horas de evolución caracterizado por estupor, mutismo y rechazo de la vía oral. Al examen físico presenta FC 110 lpm, diaforesis profusa y temperatura de 39.4°C. Se evidencia rigidez muscular generalizada en \"tubo de plomo\". Laboratorios: leucocitos 15.000/mm³ y CPK 12.500 U/L. Recibe actualmente haloperidol 10 mg/día. ¿Cuál es el diagnóstico más probable y la conducta inmediata?",
    options: [
      { id: "A", label: "A", text: "Catatonia maligna; administrar benzodiacepinas y continuar haloperidol." },
      { id: "B", label: "B", text: "Síndrome serotoninérgico; suspender haloperidol e iniciar ciproeptadina." },
      { id: "C", label: "C", text: "Meningoencefalitis bacteriana; iniciar antibióticos de amplio espectro." },
      { id: "D", label: "D", text: "Síndrome neuroléptico maligno; suspender inmediatamente el antipsicótico e iniciar tratamiento de soporte intensivo." },
    ],
    correctOptionId: "D",
    explanation: "La combinación de hipertermia, rigidez muscular severa, alteración del estado mental, disautonomía y elevación marcada de CPK en una paciente que recibe haloperidol es altamente sugestiva de síndrome neuroléptico maligno.",
    keyPoints: [
      "Cuando veas: Antipsicóticos. Fiebre alta. Rigidez muscular. Elevación marcada de CPK. Alteración del estado mental.",
      "Debes pensar en: Síndrome neuroléptico maligno.",
      "Tema: Emergencias neuropsiquiátricas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las complicaciones más graves asociadas al uso de antipsicóticos.
La clave no es la fiebre.
La clave es:
Fiebre + rigidez + antipsicótico.
¿Qué está ocurriendo realmente?
La paciente presenta:
•	Uso de haloperidol.
•	Hipertermia.
•	Rigidez en tubo de plomo.
•	Alteración del estado mental.
•	Taquicardia.
•	Elevación masiva de CPK.
Esto corresponde al cuadro clásico de:
Síndrome neuroléptico maligno.
¿Por qué ocurre?
Se produce un bloqueo dopaminérgico intenso, especialmente a nivel central.
Esto genera:
•	Disfunción hipotalámica.
•	Alteración de la termorregulación.
•	Rigidez muscular severa.
•	Inestabilidad autonómica.
¿Por qué aumenta tanto la CPK?
La rigidez muscular sostenida provoca:
Rabdomiólisis.
Como consecuencia se elevan:
•	CPK.
•	Mioglobina.
•	Riesgo de lesión renal aguda.
La CPK suele encontrarse:
Marcadamente elevada.
¿Cuál es la conducta inmediata?
Suspender inmediatamente el antipsicótico
Este es el paso más importante.
Además:
Manejo de soporte intensivo
•	Hidratación agresiva.
•	Control de temperatura.
•	Monitorización cardiorrespiratoria.
•	Vigilancia de función renal.
¿Qué tratamientos específicos pueden utilizarse?
En casos moderados o graves:
•	Dantroleno.
•	Bromocriptina.
•	Amantadina.
Según disponibilidad y protocolos.
¿Por qué no es síndrome serotoninérgico?
Aunque ambos cuadros producen:
•	Fiebre.
•	Alteración mental.
•	Disautonomía.
El síndrome serotoninérgico suele asociarse a:
•	Hiperreflexia.
•	Clonus.
•	Mioclonías.
Mientras que aquí existe:
Rigidez en tubo de plomo.
Además existe antecedente claro de:
Haloperidol.
¿Por qué no es catatonia?
La catatonia puede producir estupor y mutismo.
Pero la presencia de:
•	Fiebre alta.
•	CPK de 12.500.
•	Rigidez intensa.
•	Uso de neurolépticos.
Favorece claramente síndrome neuroléptico maligno.
¿Cuál es la trampa de examen?
Muchos estudiantes se enfocan en:
El diagnóstico psiquiátrico previo.
Pero el dato decisivo es:
La exposición a antipsicóticos asociada a hipertermia y rigidez.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Reconocer síndrome neuroléptico maligno.
2.	Suspender el neuroléptico.
3.	Iniciar soporte intensivo.
4.	Corregir complicaciones.
5.	Considerar tratamiento específico en casos graves.
Perlas de examen
✅ El haloperidol es un desencadenante clásico de síndrome neuroléptico maligno.
✅ La tríada clásica incluye fiebre, rigidez y alteración del estado mental.
✅ La CPK suele encontrarse muy elevada.
✅ La rabdomiólisis es una complicación frecuente.
✅ La insuficiencia renal aguda es una causa importante de morbimortalidad.
✅ La suspensión inmediata del antipsicótico es obligatoria.
✅ La rigidez en tubo de plomo orienta más a síndrome neuroléptico maligno que a síndrome serotoninérgico.
Referencias
• Harrison's Principles of Internal Medicine.
• Kaplan & Sadock's Synopsis of Psychiatry.
• Tintinalli's Emergency Medicine.
• UpToDate: Neuroleptic Malignant Syndrome.
• DSM-5-TR.`,
  },
  {
    id: "dr-q-298",
    examArea: "Psiquiatría / Trastorno Bipolar",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "trastorno_bipolar"],
    statement: "Hombre de 32 años con antecedente conocido de Trastorno Bipolar tipo I. Ingresa por cuadro de 5 días de evolución caracterizado por logorrea, fuga de ideas, hiperactividad, compras compulsivas, gastos excesivos y marcada disminución de la necesidad de sueño (duerme aproximadamente 2 horas por noche y refiere sentirse lleno de energía). Durante la entrevista manifiesta ser \"el enviado para salvar la economía del país\". Al examen físico se encuentra hemodinámicamente estable y sin signos de falla orgánica aguda. Laboratorios: creatinina 2.2 mg/dL. ¿Cuál es el estabilizador del ánimo de elección en este paciente?",
    options: [
      { id: "A", label: "A", text: "Litio." },
      { id: "B", label: "B", text: "Valproato." },
      { id: "C", label: "C", text: "Carbamazepina." },
      { id: "D", label: "D", text: "Lamotrigina." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un episodio maníaco agudo con síntomas psicóticos. La insuficiencia renal hace que el litio sea una opción poco adecuada, por lo que el valproato constituye el estabilizador del ánimo de elección en este contexto.",
    keyPoints: [
      "Cuando veas: Grandiosidad. Disminución de la necesidad de sueño. Logorrea. Conductas de riesgo. Trastorno bipolar.",
      "Debes pensar en: Episodio maníaco.",
      "Tema: Trastorno Bipolar.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la elección del estabilizador del ánimo según las comorbilidades del paciente.
La clave no es el diagnóstico.
La clave es:
La creatinina de 2.2 mg/dL.
¿Qué está ocurriendo realmente?
El paciente presenta:
•	Estado de ánimo expansivo.
•	Grandiosidad.
•	Disminución de la necesidad de sueño.
•	Hiperactividad.
•	Conductas impulsivas.
•	Ideas delirantes de grandeza.
Todo esto corresponde a:
Episodio maníaco agudo.
¿Por qué no utilizar litio?
El litio es uno de los estabilizadores del ánimo más eficaces.
Sin embargo:
Se elimina casi exclusivamente por vía renal.
En presencia de:
Insuficiencia renal significativa.
Existe riesgo de:
•	Acumulación.
•	Toxicidad.
•	Empeoramiento de la función renal.
Por ello debe evitarse o utilizarse con extrema precaución.
¿Por qué valproato?
El valproato:
•	Es eficaz en episodios maníacos agudos.
•	Tiene inicio de acción relativamente rápido.
•	No depende fundamentalmente de la eliminación renal.
Por ello suele ser una excelente alternativa cuando el litio está contraindicado.
¿Por qué no lamotrigina?
La lamotrigina tiene utilidad principalmente en:
Prevención de recaídas y fases depresivas.
No es el tratamiento ideal para:
Manía aguda.
¿Por qué no carbamazepina?
Puede utilizarse en algunos casos.
Sin embargo:
El valproato suele considerarse una opción de primera línea para la manía aguda cuando el litio no es adecuado.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
Trastorno bipolar.
Y responden automáticamente:
Litio.
Pero la pregunta aporta un dato decisivo:
Creatinina elevada.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar episodio maníaco.
2.	Evaluar comorbilidades.
3.	Revisar función renal.
4.	Evitar litio si existe insuficiencia renal relevante.
5.	Elegir un estabilizador alternativo eficaz.
Perlas de examen
✅ El litio es un tratamiento clásico del trastorno bipolar.
✅ La insuficiencia renal limita su utilización.
✅ El valproato es una opción de primera línea para la manía aguda.
✅ La disminución de la necesidad de sueño es un hallazgo muy característico de manía.
✅ Las ideas de grandeza son frecuentes en episodios maníacos graves.
✅ La lamotrigina tiene mayor utilidad en la prevención de recaídas depresivas.
✅ Siempre deben revisarse las comorbilidades antes de seleccionar un estabilizador del ánimo.
Referencias
• Kaplan & Sadock's Synopsis of Psychiatry.
• DSM-5-TR.
• Harrison's Principles of Internal Medicine.
• CANMAT Guidelines for Bipolar Disorder.
• UpToDate: Treatment of Acute Mania in Bipolar Disorder.`,
  },
  {
    id: "dr-q-299",
    examArea: "Psiquiatría / Psicofarmacología y reacciones adversas medicamentosas",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "psicofarmacologia_y_reacciones_adversas_"],
    statement: "Mujer de 45 años, con antecedentes de obesidad y dolor crónico, consulta por tristeza profunda, anhedonia, sentimientos de culpa e ideación de muerte de 3 semanas de evolución. Ha perdido 5 kg de peso. Recibe tramadol 50 mg cada 8 horas por lumbalgia crónica. Se inicia sertralina 50 mg/día. Veinticuatro horas después es llevada a urgencias por presentar temblor, inquietud motora intensa, diaforesis, diarrea y clonus inducible en miembros inferiores. ¿Cuál es el mecanismo fisiopatológico más probable del cuadro actual?",
    options: [
      { id: "A", label: "A", text: "Bloqueo masivo de receptores dopaminérgicos D2 en sistema nervioso central." },
      { id: "B", label: "B", text: "Hiperestimulación serotoninérgica central y periférica por exceso de serotonina sináptica." },
      { id: "C", label: "C", text: "Disminución aguda de la actividad gabaérgica cortical." },
      { id: "D", label: "D", text: "Hiperactividad colinérgica secundaria a inhibición de la acetilcolinesterasa." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta un síndrome serotoninérgico precipitado por la combinación de sertralina y tramadol, ambos con actividad serotoninérgica. El exceso de serotonina produce hiperactividad neuromuscular, alteraciones autonómicas y cambios del estado mental.",
    keyPoints: [
      "Cuando veas: ISRS. Tramadol. Clonus. Diaforesis. Diarrea. Agitación.",
      "Debes pensar en: Síndrome serotoninérgico.",
      "Tema: Psicofarmacología y reacciones adversas medicamentosas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una interacción farmacológica potencialmente grave.
La clave no es la depresión.
La clave es:
Sertralina + tramadol.
¿Qué está ocurriendo realmente?
La sertralina:
Inhibe la recaptación de serotonina.
El tramadol además de ser un analgésico opioide:
También inhibe la recaptación de serotonina y noradrenalina.
La combinación produce:
Exceso de serotonina en la hendidura sináptica.
¿Qué ocurre cuando aumenta excesivamente la serotonina?
Se produce una estimulación exagerada de receptores serotoninérgicos, especialmente:
•	5-HT1A.
•	5-HT2A.
Esto genera tres grupos de manifestaciones:
Alteraciones neuromusculares
•	Temblor.
•	Hiperreflexia.
•	Clonus.
•	Mioclonías.
Alteraciones autonómicas
•	Diaforesis.
•	Hipertensión.
•	Taquicardia.
•	Diarrea.
•	Hipertermia.
Alteraciones mentales
•	Agitación.
•	Ansiedad.
•	Confusión.
¿Cuál es el dato más importante del caso?
La presencia de:
Clonus inducible.
Es uno de los hallazgos más característicos del síndrome serotoninérgico.
¿Por qué no es síndrome neuroléptico maligno?
Porque el síndrome neuroléptico maligno suele presentar:
•	Rigidez en tubo de plomo.
•	Hiporreflexia o reflejos normales.
•	Evolución más lenta.
•	Uso de antipsicóticos.
En este caso existe:
Clonus + diarrea + ISRS.
Lo cual favorece síndrome serotoninérgico.
¿Por qué no es toxicidad por opioides?
La toxicidad opioide suele producir:
•	Depresión respiratoria.
•	Miosis.
•	Disminución del estado de conciencia.
No explica:
Clonus e hiperactividad neuromuscular.
¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan que el tramadol es un opioide.
Pero olvidan que también posee:
Potente actividad serotoninérgica.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar exposición a fármacos serotoninérgicos.
2.	Reconocer clonus e hiperreflexia.
3.	Diagnosticar síndrome serotoninérgico.
4.	Suspender los medicamentos implicados.
5.	Iniciar tratamiento de soporte.
Perlas de examen
✅ El tramadol posee actividad serotoninérgica.
✅ La combinación de tramadol e ISRS aumenta el riesgo de síndrome serotoninérgico.
✅ El clonus es uno de los hallazgos más característicos.
✅ La diarrea es frecuente en el síndrome serotoninérgico.
✅ La hiperreflexia orienta más a síndrome serotoninérgico que a síndrome neuroléptico maligno.
✅ El mecanismo central es el exceso de serotonina sináptica.
✅ La mayoría de los casos aparecen tras iniciar o aumentar medicamentos serotoninérgicos.
Referencias
• Stahl's Essential Psychopharmacology.
• Kaplan & Sadock's Synopsis of Psychiatry.
• Harrison's Principles of Internal Medicine.
• UpToDate: Serotonin Syndrome.
• Tintinalli's Emergency Medicine.`,
  },
  {
    id: "dr-q-300",
    examArea: "Psiquiatría / Trastornos por consumo de sustancias",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "trastornos_por_consumo_de_sustancias"],
    statement: "Hombre de 50 años con antecedente de consumo crónico de alcohol equivalente a una botella de aguardiente diaria. Su última ingesta fue hace 48 horas luego de ser hospitalizado por una neumonía adquirida en la comunidad. Presenta agitación intensa, desorientación, diaforesis profusa, midriasis, hipertensión arterial y taquicardia. Refiere además que \"las paredes se están moviendo\". Signos vitales: TA 170/110 mmHg, FC 125 lpm. Laboratorios: AST 120 U/L, ALT 90 U/L. ¿Cuál es el tratamiento de elección para el control de los síntomas?",
    options: [
      { id: "A", label: "A", text: "Haloperidol intravenoso." },
      { id: "B", label: "B", text: "Lorazepam." },
      { id: "C", label: "C", text: "Fenitoína intravenosa." },
      { id: "D", label: "D", text: "Carbamazepina." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un cuadro compatible con delirium tremens, la forma más grave del síndrome de abstinencia alcohólica. Las benzodiacepinas constituyen el tratamiento de elección para controlar la hiperactividad autonómica y prevenir complicaciones graves.",
    keyPoints: [
      "Cuando veas: Suspensión reciente del alcohol. Agitación. Alucinaciones. Hipertensión. Taquicardia. Diaforesis.",
      "Debes pensar en: Delirium tremens.",
      "Tema: Trastornos por consumo de sustancias.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una emergencia médica frecuente y potencialmente mortal.
La clave no es el alcoholismo.
La clave es:
La abstinencia alcohólica de 48 horas asociada a alucinaciones y disautonomía.
¿Qué está ocurriendo realmente?
El paciente presenta:
•	Consumo crónico importante.
•	Suspensión brusca del alcohol.
•	Agitación.
•	Alucinaciones visuales.
•	Taquicardia.
•	Hipertensión.
•	Diaforesis.
Esto corresponde a:
Delirium tremens.
La forma más grave de abstinencia alcohólica.
¿Cuál es el mecanismo fisiopatológico?
El alcohol potencia la actividad:
GABAérgica.
Y reduce la actividad:
Glutamatérgica.
Tras años de consumo, el sistema nervioso central se adapta.
Cuando el alcohol se suspende bruscamente aparece:
Hiperexcitabilidad neuronal generalizada.
Produciendo:
•	Agitación.
•	Convulsiones.
•	Delirio.
•	Hiperactividad autonómica.
¿Cuál es el tratamiento de elección?
Benzodiacepinas
Son el tratamiento fundamental porque:
•	Sustituyen funcionalmente el efecto GABAérgico perdido.
•	Disminuyen la hiperactividad neuronal.
•	Previenen convulsiones.
•	Reducen mortalidad.
¿Por qué lorazepam?
Las benzodiacepinas más utilizadas son:
•	Diazepam.
•	Lorazepam.
•	Oxazepam.
En pacientes con posible compromiso hepático:
Lorazepam es especialmente útil.
Porque su metabolismo depende menos de la función hepática que otras benzodiacepinas.
El caso aporta intencionalmente:
AST y ALT elevadas.
¿Por qué no haloperidol?
Puede utilizarse como coadyuvante en casos seleccionados.
Sin embargo:
No es el tratamiento principal.
Además no previene:
•	Convulsiones.
•	Delirium tremens.
¿Por qué no fenitoína?
La fenitoína no trata el mecanismo fisiopatológico de la abstinencia alcohólica.
Por tanto:
No es el tratamiento de elección.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
Alucinaciones y agitación.
Y responden:
Haloperidol.
Pero el problema real es:
Abstinencia alcohólica severa.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Reconocer delirium tremens.
2.	Administrar benzodiacepinas.
3.	Corregir alteraciones hidroelectrolíticas.
4.	Administrar tiamina.
5.	Vigilar complicaciones.
Perlas de examen
✅ El delirium tremens suele aparecer entre 48 y 96 horas tras la última ingesta.
✅ Las benzodiacepinas son el tratamiento de elección.
✅ El lorazepam es útil cuando existe disfunción hepática.
✅ Las alucinaciones visuales son frecuentes.
✅ La hiperactividad autonómica puede ser intensa.
✅ La abstinencia alcohólica puede producir convulsiones.
✅ La tiamina debe administrarse tempranamente para prevenir complicaciones neurológicas.
Referencias
• Harrison's Principles of Internal Medicine.
• Kaplan & Sadock's Synopsis of Psychiatry.
• DSM-5-TR.
• UpToDate: Alcohol Withdrawal Syndrome.
• ASAM Clinical Practice Guideline on Alcohol Withdrawal Management.`,
  },
  {
    id: "dr-q-301",
    examArea: "Psiquiatría / Psiquiatría de urgencias",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "psiquiatria_de_urgencias"],
    statement: "Mujer de 19 años, estudiante universitaria, es llevada por sus padres a urgencias luego de que encontraran una carta de despedida en su habitación. Hace dos meses terminó una relación sentimental. Refiere tristeza persistente, anhedonia, insomnio de conciliación y abandono de sus actividades académicas. Durante la entrevista manifiesta: \"Nada va a mejorar, ya tengo las pastillas guardadas para esta noche\". Niega intentos suicidas previos. ¿Cuál es el nivel de riesgo y la conducta más segura?",
    options: [
      { id: "A", label: "A", text: "Riesgo bajo; manejo ambulatorio con cita prioritaria por psiquiatría." },
      { id: "B", label: "B", text: "Riesgo moderado; iniciar antidepresivo y control semanal." },
      { id: "C", label: "C", text: "Riesgo alto; hospitalización psiquiátrica y medidas de protección inmediata." },
      { id: "D", label: "D", text: "Riesgo bajo porque no tiene intentos suicidas previos." },
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta ideación suicida activa con plan específico y acceso a un método potencialmente letal. Esto constituye un riesgo suicida alto que requiere intervención inmediata y protección continua.",
    keyPoints: [
      "Cuando veas: Carta de despedida. Ideación suicida activa. Plan definido. Disponibilidad del método.",
      "Debes pensar en: Riesgo suicida alto.",
      "Tema: Psiquiatría de urgencias.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la estratificación del riesgo suicida.
La clave no es la depresión.
La clave es:
La existencia de un plan suicida concreto.
¿Qué está ocurriendo realmente?
La paciente presenta:
•	Síntomas depresivos.
•	Desesperanza.
•	Aislamiento funcional.
•	Carta de despedida.
•	Plan suicida definido.
•	Acceso inmediato al método.
Estos hallazgos indican:
Riesgo suicida alto.
¿Cómo se valora el riesgo suicida?
Existen varios elementos fundamentales:
Ideación suicida
Pensamientos de muerte o suicidio.
Plan suicida
Cómo pretende hacerlo.
Disponibilidad del método
Acceso real al mecanismo elegido.
Intención
Deseo de llevar a cabo el acto.
Conductas preparatorias
Como ocurre con:
La carta de despedida.
¿Por qué la carta es tan importante?
Representa una conducta preparatoria.
Sugiere que el paciente:
Ha avanzado más allá de la simple ideación.
Y aumenta significativamente la probabilidad de intento.
¿Por qué el hecho de tener las pastillas es relevante?
Porque existe:
Acceso inmediato al método.
La combinación de:
•	Ideación.
•	Plan.
•	Método disponible.
Constituye una emergencia psiquiátrica.
¿Cuál es la conducta correcta?
Garantizar la seguridad del paciente
Incluyendo:
•	Supervisión continua.
•	Retiro de medios potencialmente letales.
•	Valoración psiquiátrica urgente.
Hospitalización psiquiátrica
Cuando existe alto riesgo de autolesión.
¿Por qué no manejo ambulatorio?
Porque el riesgo de intento es:
Inminente.
La paciente incluso refiere:
"Para esta noche".
¿Cuál es la trampa de examen?
Muchos estudiantes se enfocan en:
No tiene intentos previos.
Pero la ausencia de intentos previos:
No descarta un riesgo suicida alto.
El dato decisivo es:
Plan estructurado con acceso al método.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar ideación suicida.
2.	Buscar plan específico.
3.	Determinar acceso al método.
4.	Evaluar intención y conductas preparatorias.
5.	Garantizar seguridad y hospitalizar si existe alto riesgo.
Perlas de examen
✅ La carta de despedida es una conducta preparatoria de alto riesgo.
✅ La disponibilidad del método aumenta significativamente el riesgo.
✅ El plan suicida específico es más importante que la simple ideación.
✅ La desesperanza es un potente predictor de suicidio.
✅ La ausencia de intentos previos no excluye riesgo elevado.
✅ El objetivo inicial es proteger la vida del paciente.
✅ El riesgo suicida alto requiere intervención inmediata y vigilancia estrecha.
Referencias
• DSM-5-TR.
• Kaplan & Sadock's Synopsis of Psychiatry.
• American Psychiatric Association Practice Guideline for Suicide Risk Assessment.
• UpToDate: Suicide Risk Assessment and Management.
• Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-302",
    examArea: "Psiquiatría / Psiquiatría de enlace y diagnóstico diferencial",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "psiquiatria_de_enlace_y_diagnostico_dife"],
    statement: "Hombre de 65 años, con antecedente de tabaquismo pesado, consulta acompañado por su esposa por cambios progresivos en el comportamiento durante los últimos meses. Refiere pérdida involuntaria de 10 kg en los últimos 3 meses. La esposa lo nota \"muy deprimido\", lento para hablar y cada vez más aislado. Durante la entrevista expresa que sus órganos \"se están pudriendo\" y afirma que ya está muerto. Al examen mental presenta marcado enlentecimiento psicomotor y delirios nihilistas compatibles con síndrome de Cotard. ¿Cuál es la prioridad diagnóstica inicial?",
    options: [
      { id: "A", label: "A", text: "Iniciar inmediatamente un ISRS y control ambulatorio en 4 semanas." },
      { id: "B", label: "B", text: "Diagnosticar trastorno delirante persistente y solicitar psicoterapia." },
      { id: "C", label: "C", text: "Buscar activamente una causa médica u orgánica subyacente, especialmente una neoplasia." },
      { id: "D", label: "D", text: "Iniciar benzodiacepinas por posible trastorno de ansiedad." },
    ],
    correctOptionId: "C",
    explanation: "La combinación de inicio tardío de síntomas psiquiátricos, pérdida importante de peso, tabaquismo y síntomas psicóticos obliga a descartar primero una causa orgánica, particularmente una enfermedad neoplásica o neurológica.",
    keyPoints: [
      "Cuando veas: Inicio tardío de síntomas psiquiátricos. Pérdida de peso inexplicada. Síntomas psicóticos de nueva aparición. Factores de riesgo para cáncer.",
      "Debes pensar en: Descartar primero una causa médica u orgánica.",
      "Tema: Psiquiatría de enlace y diagnóstico diferencial.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa cuándo los síntomas psiquiátricos pueden ser la manifestación de una enfermedad médica subyacente.
La clave no es el síndrome de Cotard.
La clave es:
La aparición tardía de síntomas psiquiátricos acompañados de signos de alarma sistémicos.
¿Qué está ocurriendo realmente?
El paciente presenta:
•	65 años.
•	Pérdida de peso significativa.
•	Tabaquismo importante.
•	Síntomas depresivos graves.
•	Delirios nihilistas.
Aunque podría tratarse de:
Depresión mayor con síntomas psicóticos.
Antes debe descartarse:
Una enfermedad médica subyacente.
¿Por qué sospechar una causa orgánica?
Existen múltiples señales de alarma:
Edad de inicio
La aparición de síntomas psicóticos por primera vez a los 65 años es poco habitual.
Pérdida de peso
Sugiere una posible enfermedad sistémica.
Tabaquismo pesado
Incrementa significativamente el riesgo de neoplasias.
¿Qué enfermedades pueden presentarse así?
Entre otras:
•	Cáncer de pulmón.
•	Metástasis cerebrales.
•	Tumores primarios del SNC.
•	Trastornos endocrinos.
•	Enfermedades neurodegenerativas.
•	Síndromes paraneoplásicos.
¿Qué es el síndrome de Cotard?
Es un trastorno delirante caracterizado por:
•	Negación de la existencia propia.
•	Creencia de estar muerto.
•	Sensación de pérdida de órganos.
•	Ideas nihilistas extremas.
Puede observarse en:
•	Depresión psicótica.
•	Trastornos neurológicos.
•	Enfermedades médicas graves.
¿Cuál es la conducta inicial?
Antes de atribuir el cuadro a una enfermedad psiquiátrica primaria:
Buscar causas médicas
Incluyendo:
•	Estudios de laboratorio.
•	Neuroimagen.
•	Búsqueda de neoplasias.
•	Evaluación neurológica.
¿Por qué no iniciar solamente antidepresivos?
Porque podría retrasarse el diagnóstico de una enfermedad potencialmente grave.
¿Cuál es la trampa de examen?
Muchos estudiantes identifican:
Síndrome de Cotard.
Y responden:
Depresión psicótica.
Pero la pregunta aporta datos deliberados para pensar en:
Etiología orgánica.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar síntomas psiquiátricos de inicio tardío.
2.	Buscar signos de alarma sistémicos.
3.	Descartar enfermedad médica subyacente.
4.	Realizar estudios dirigidos.
5.	Tratar posteriormente el trastorno psiquiátrico y la causa identificada.
Perlas de examen
✅ Los síntomas psicóticos de inicio tardío obligan a descartar causas orgánicas.
✅ La pérdida de peso inexplicada es una señal de alarma importante.
✅ El tabaquismo incrementa el riesgo de neoplasias ocultas.
✅ El síndrome de Cotard consiste en delirios nihilistas o de negación.
✅ La depresión psicótica puede manifestarse con síndrome de Cotard.
✅ Nunca debe asumirse una etiología exclusivamente psiquiátrica sin evaluar causas médicas en pacientes mayores.
✅ La búsqueda de una enfermedad orgánica es prioritaria cuando existen datos de alarma sistémica.
Referencias
• Kaplan & Sadock's Synopsis of Psychiatry.
• DSM-5-TR.
• Harrison's Principles of Internal Medicine.
• UpToDate: Psychosis in Older Adults.
• Textbook of Consultation-Liaison Psychiatry.`,
  },
  {
    id: "dr-q-303",
    examArea: "Psiquiatría / Psicofarmacología",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "psicofarmacologia"],
    statement: "Paciente de 24 años con diagnóstico de esquizofrenia refractaria, en tratamiento con clozapina 300 mg/día desde hace 3 meses. Consulta por fiebre de 38.5°C, odinofagia y malestar general de inicio reciente. Niega tos, disuria, diarrea u otros síntomas infecciosos focales. ¿Cuál es la conducta inmediata más importante?",
    options: [
      { id: "A", label: "A", text: "Iniciar antibiótico empírico ambulatorio y continuar la clozapina." },
      { id: "B", label: "B", text: "Solicitar hemograma urgente con recuento absoluto de neutrófilos y suspender temporalmente la clozapina hasta aclarar el diagnóstico." },
      { id: "C", label: "C", text: "Aumentar la dosis de clozapina por posible recaída psicótica." },
      { id: "D", label: "D", text: "Solicitar únicamente proteína C reactiva y dar seguimiento ambulatorio." },
    ],
    correctOptionId: "B",
    explanation: "La fiebre y la odinofagia en un paciente tratado con clozapina deben hacer sospechar agranulocitosis o neutropenia grave hasta demostrar lo contrario. La prioridad es evaluar inmediatamente el recuento de neutrófilos.",
    keyPoints: [
      "Cuando veas: Clozapina. Fiebre. Odinofagia. Malestar general.",
      "Debes pensar en: Agranulocitosis inducida por clozapina.",
      "Tema: Psicofarmacología.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el efecto adverso potencialmente mortal más importante de la clozapina.
La clave no es la fiebre.
La clave es:
Clozapina + fiebre + odinofagia.
¿Qué está ocurriendo realmente?
La clozapina es el antipsicótico más eficaz para:
Esquizofrenia refractaria.
Sin embargo, su principal complicación grave es:
Neutropenia o agranulocitosis.
Cuando disminuyen los neutrófilos:
•	Aumenta el riesgo de infecciones.
•	Aparecen fiebre y odinofagia.
•	Puede progresar rápidamente a sepsis.
¿Por qué la odinofagia es tan importante?
Porque la faringe suele ser uno de los primeros sitios donde se manifiestan infecciones en pacientes neutropénicos.
Por ello:
Fiebre y dolor faríngeo deben considerarse agranulocitosis hasta demostrar lo contrario.
¿Cuál es el examen prioritario?
Hemograma urgente
Con especial atención al:
Recuento absoluto de neutrófilos (RAN).
Este resultado determina la conducta posterior.
¿Por qué suspender la clozapina?
Porque si existe neutropenia significativa:
Continuar el medicamento puede agravar la supresión medular.
La seguridad del paciente tiene prioridad sobre el control de los síntomas psicóticos.
¿Por qué no iniciar simplemente antibióticos?
Porque el problema principal podría no ser una infección primaria.
La pregunta busca identificar:
La posible toxicidad hematológica del medicamento.
¿Cuál es la trampa de examen?
Muchos estudiantes piensan:
Fiebre = infección común.
Pero cuando aparece en un paciente tratado con clozapina:
Debe descartarse primero agranulocitosis.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar exposición a clozapina.
2.	Reconocer síntomas sugestivos de neutropenia.
3.	Solicitar hemograma urgente.
4.	Evaluar neutrófilos.
5.	Suspender temporalmente la clozapina mientras se aclara la causa.
Perlas de examen
✅ La clozapina es el tratamiento de elección para esquizofrenia refractaria.
✅ La agranulocitosis es su efecto adverso más temido.
✅ Fiebre y odinofagia son síntomas de alarma.
✅ El hemograma urgente es obligatorio.
✅ El seguimiento hematológico periódico es indispensable durante el tratamiento.
✅ La neutropenia puede evolucionar rápidamente a sepsis.
✅ Todo paciente con clozapina y fiebre debe evaluarse de manera urgente.
Referencias
• Kaplan & Sadock's Synopsis of Psychiatry.
• Stahl's Essential Psychopharmacology.
• DSM-5-TR.
• UpToDate: Clozapine Toxicity and Monitoring.
• Maudsley Prescribing Guidelines in Psychiatry.`,
  },
  {
    id: "dr-q-304",
    examArea: "Psiquiatría / Psiquiatría de urgencias",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "psiquiatria_de_urgencias"],
    statement: "Mujer de 30 años, sin antecedentes psiquiátricos conocidos, es llevada a urgencias por la policía tras ser encontrada en un parque gritando que \"los extraterrestres están drenando la energía de la ciudad a través de los postes de luz\". Se encuentra extremadamente agitada, agresiva y poco colaboradora. Al examen físico presenta midriasis bilateral, FC 130 lpm, TA 160/100 mmHg y diaforesis leve. ¿Cuál es la conducta inicial más adecuada en urgencias?",
    options: [
      { id: "A", label: "A", text: "Iniciar risperidona oral y programar valoración ambulatoria por psiquiatría." },
      { id: "B", label: "B", text: "Solicitar resonancia magnética cerebral antes de cualquier intervención." },
      { id: "C", label: "C", text: "Controlar primero la agitación mediante sedación farmacológica y garantizar la seguridad del paciente y del personal." },
      { id: "D", label: "D", text: "Iniciar inmediatamente tratamiento de mantenimiento para esquizofrenia." },
    ],
    correctOptionId: "C",
    explanation: "La prioridad inicial en un paciente con agitación psicomotora severa es garantizar la seguridad, controlar la conducta agitada y posteriormente completar la evaluación diagnóstica.",
    keyPoints: [
      "Cuando veas: Agitación severa. Conducta agresiva. Delirios o alucinaciones. Riesgo para sí mismo o terceros.",
      "Debes pensar en: Primero controlar la agitación y asegurar el entorno.",
      "Tema: Psiquiatría de urgencias.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa las prioridades en el manejo de una emergencia psiquiátrica.
La clave no es el diagnóstico final.
La clave es:
La agitación psicomotora grave.
¿Qué está ocurriendo realmente?
La paciente presenta:
•	Delirios extravagantes.
•	Agitación intensa.
•	Conducta potencialmente peligrosa.
•	Taquicardia.
•	Hipertensión.
•	Midriasis.
El diagnóstico definitivo aún no está claro.
Podría tratarse de:
•	Psicosis primaria.
•	Intoxicación por estimulantes.
•	Episodio maníaco.
•	Trastorno psicótico breve.
•	Otra causa médica.
Pero antes de definir la etiología:
Debe controlarse la agitación.
¿Cuál es la prioridad en urgencias?
La primera pregunta siempre es:
¿Es segura la situación para el paciente y el equipo de salud?
Si la respuesta es no:
Debe realizarse:
Contención verbal
Si es posible.
Y si fracasa:
Sedación farmacológica
Conforme a los protocolos institucionales.
¿Por qué no intentar hacer primero todos los estudios?
Porque una paciente:
•	Agresiva.
•	Combativa.
•	Poco colaboradora.
Puede:
•	Lesionarse.
•	Lesionar al personal.
•	Impedir la evaluación médica.
¿Qué sugieren la midriasis y la taquicardia?
Son datos que podrían sugerir:
Intoxicación por sustancias estimulantes.
Sin embargo, la pregunta busca evaluar:
La prioridad terapéutica inmediata.
¿Por qué no diagnosticar esquizofrenia?
Porque:
•	Es el primer episodio conocido.
•	No existe información suficiente.
•	Deben descartarse causas médicas y tóxicas.
¿Cuál es la trampa de examen?
Muchos estudiantes intentan:
Llegar primero al diagnóstico.
Pero en urgencias:
Primero se controla la situación clínica.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Garantizar seguridad.
2.	Controlar la agitación.
3.	Realizar evaluación médica completa.
4.	Buscar intoxicaciones o causas orgánicas.
5.	Establecer el diagnóstico definitivo.
Perlas de examen
✅ La seguridad del paciente y del personal es la prioridad inicial.
✅ La agitación severa constituye una urgencia médica.
✅ El diagnóstico etiológico puede realizarse después de estabilizar al paciente.
✅ La contención verbal debe intentarse cuando sea posible.
✅ La sedación farmacológica está indicada cuando existe riesgo de daño.
✅ Las sustancias estimulantes pueden producir psicosis y agitación intensa.
✅ Nunca debe retrasarse el control de la agitación por intentar obtener una historia clínica completa.
Referencias
• Kaplan & Sadock's Synopsis of Psychiatry.
• Tintinalli's Emergency Medicine.
• DSM-5-TR.
• UpToDate: Approach to the Agitated Patient.
• American Association for Emergency Psychiatry Guidelines.`,
  },
  {
    id: "dr-q-305",
    examArea: "Psiquiatría / Síndrome confusional agudo",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "sindrome_confusional_agudo"],
    statement: "Hombre de 82 años con antecedentes de insuficiencia cardíaca y fibrilación auricular, es llevado a urgencias por cuadro de desorientación fluctuante de 12 horas de evolución. Durante la valoración presenta marcada alteración de la atención, períodos de somnolencia alternados con agitación y comportamiento agresivo. Intenta golpear al personal de salud y no responde a las medidas de reorientación verbal. Se decide realizar contención farmacológica. ¿Cuál es el fármaco de elección para el control de la agitación en este paciente?",
    options: [
      { id: "A", label: "A", text: "Diazepam." },
      { id: "B", label: "B", text: "Haloperidol." },
      { id: "C", label: "C", text: "Amitriptilina." },
      { id: "D", label: "D", text: "Fenitoína." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un cuadro compatible con delirium hiperactivo. Cuando las medidas no farmacológicas fracasan y existe riesgo para el paciente o el personal, el haloperidol es el fármaco clásicamente utilizado para el control de la agitación.",
    keyPoints: [
      "Cuando veas: Inicio agudo. Curso fluctuante. Alteración de la atención. Agitación. Paciente anciano hospitalizado.",
      "Debes pensar en: Delirium.",
      "Tema: Síndrome confusional agudo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el manejo de la agitación asociada al delirium.
La clave no es la agresividad.
La clave es:
El cuadro de delirium con riesgo inmediato para el paciente y el personal.
¿Qué está ocurriendo realmente?
El paciente presenta:
•	Inicio agudo.
•	Fluctuación del estado mental.
•	Déficit de atención.
•	Desorientación.
•	Agitación severa.
Todo esto es compatible con:
Delirium hiperactivo.
¿Cuál es la prioridad?
Siempre se debe:
1.	Identificar la causa desencadenante.
2.	Aplicar medidas no farmacológicas.
Sin embargo, cuando existe:
•	Riesgo de autolesión.
•	Riesgo para terceros.
•	Interferencia con el tratamiento.
Puede requerirse:
Contención farmacológica.
¿Por qué haloperidol?
Porque:
•	Tiene rápida acción sobre la agitación.
•	Produce menor depresión respiratoria que las benzodiacepinas.
•	Ha sido tradicionalmente el antipsicótico de referencia en delirium agitado.
Además puede utilizarse en dosis bajas en pacientes ancianos.
¿Por qué no diazepam?
Las benzodiacepinas pueden:
•	Empeorar el delirium.
•	Incrementar la confusión.
•	Favorecer depresión respiratoria.
Su principal indicación es:
Abstinencia alcohólica o sedantes.
¿Por qué la fibrilación auricular y la insuficiencia cardíaca son una trampa?
Porque podrían hacer pensar en evitar antipsicóticos.
Sin embargo, la pregunta busca:
El manejo inicial clásico del delirium hiperactivo grave.
Naturalmente debe realizarse monitorización cardíaca y utilizar la dosis mínima efectiva.
¿Cuál es la trampa de examen?
Muchos estudiantes ven:
Agitación intensa.
Y responden:
Benzodiacepinas.
Pero en delirium no relacionado con abstinencia:
El haloperidol suele ser la opción inicial más utilizada.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Reconocer delirium.
2.	Buscar y corregir la causa.
3.	Intentar medidas no farmacológicas.
4.	Si existe peligro inmediato, utilizar contención farmacológica.
5.	Preferir antipsicóticos en delirium hiperactivo.
Perlas de examen
✅ El delirium tiene inicio agudo y curso fluctuante.
✅ La alteración de la atención es el hallazgo cardinal.
✅ Las medidas no farmacológicas son la base del tratamiento.
✅ El haloperidol es el fármaco clásico para la agitación grave asociada a delirium.
✅ Las benzodiacepinas pueden empeorar el delirium.
✅ La abstinencia alcohólica es una excepción importante donde sí se prefieren benzodiacepinas.
✅ Siempre debe investigarse la causa desencadenante del delirium.
Referencias
• Harrison's Principles of Internal Medicine.
• Kaplan & Sadock's Synopsis of Psychiatry.
• American Geriatrics Society Guidelines on Delirium.
• UpToDate: Delirium in Hospitalized Older Adults.
• Tintinalli's Emergency Medicine.`,
  },
  {
    id: "dr-q-306",
    examArea: "Atención Primaria en Salud / Tamización de cáncer de cuello uterino",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "atencion_primaria_en_salud", "tamizacion_de_cancer_de_cuello_uterino"],
    statement: "Paciente femenina de 34 años, G2P2, asintomática. Consulta para chequeo general. Antecedentes: fumadora activa (5 cigarrillos/día). Última citología cervical realizada hace 2 años, con resultado negativo para lesión intraepitelial o malignidad. Según las guías de práctica clínica vigentes en Colombia (Ruta de Promoción y Mantenimiento de la Salud), ¿cuál es la conducta de tamización para cáncer de cuello uterino más apropiada?",
    options: [
      { id: "A", label: "A", text: "Realizar citología cervical anual por ser fumadora." },
      { id: "B", label: "B", text: "Realizar prueba de ADN para VPH de alto riesgo y continuar tamización según resultado." },
      { id: "C", label: "C", text: "Repetir citología cervical ahora y posteriormente cada 3 años si continúa siendo negativa." },
      { id: "D", label: "D", text: "No requiere ninguna prueba hasta cumplir 50 años." },
    ],
    correctOptionId: "B",
    explanation: "La paciente tiene 34 años. En Colombia, entre los 30 y 65 años, la estrategia preferida de tamización es la prueba de ADN para VPH de alto riesgo, independientemente de antecedentes como tabaquismo o citologías previas negativas.",
    keyPoints: [
      "Cuando veas: Mujer entre 30 y 65 años. Asintomática. Consulta de tamización.",
      "Debes pensar en: Prueba de ADN para VPH de alto riesgo como estrategia preferida de tamización.",
      "Tema: Tamización de cáncer de cuello uterino.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa las estrategias actuales de tamización y porque muchos estudiantes continúan respondiendo citología cuando la prueba de VPH ya ocupa un papel central.
La clave no es que sea fumadora.
La clave es:
Tiene 34 años.
¿Por qué importa tanto la edad?
La estrategia de tamización depende fundamentalmente de la edad.
Entre 25 y 29 años
La prueba principal continúa siendo:
Citología cervical.
Entre 30 y 65 años
La estrategia preferida es:
Detección de ADN de VPH de alto riesgo.
¿Por qué se utiliza la prueba de VPH?
Porque la infección persistente por VPH de alto riesgo es la causa necesaria para el desarrollo de la mayoría de los cánceres de cuello uterino.
La prueba tiene:
•	Mayor sensibilidad.
•	Mayor capacidad de identificar mujeres en riesgo.
•	Mayor valor predictivo negativo.
¿Qué importancia tiene el tabaquismo?
El tabaquismo:
Es un factor de riesgo para progresión de lesiones cervicales.
Sin embargo:
No modifica la estrategia de tamización establecida por edad.
¿Por qué no hacer citología anual?
Esta es una trampa clásica.
Muchos estudiantes asocian:
Factor de riesgo = aumentar frecuencia.
Pero las recomendaciones actuales se basan principalmente en:
•	Edad.
•	Resultado previo.
•	Estrategia de tamización utilizada.
¿Qué ocurre si la prueba de VPH es negativa?
Una prueba negativa implica un riesgo muy bajo de lesión significativa en los años siguientes.
Por ello:
Los intervalos de tamización pueden ampliarse.
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
Citología cada año.
Porque recuerdan esquemas antiguos.
Sin embargo, en una mujer de 34 años:
La prueba de ADN para VPH es la estrategia preferida.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la edad.
2.	Determinar la estrategia de tamización correspondiente.
3.	Realizar prueba de VPH entre los 30 y 65 años.
4.	Continuar seguimiento según el resultado.
5.	No modificar la estrategia únicamente por tabaquismo.
Perlas de examen
✅ La infección persistente por VPH de alto riesgo es el principal factor causal del cáncer de cuello uterino.
✅ Entre los 30 y 65 años la prueba de ADN para VPH es la estrategia preferida de tamización.
✅ El tabaquismo aumenta el riesgo de progresión de lesiones cervicales.
✅ Una citología previa negativa no elimina la necesidad de continuar la tamización.
✅ La edad es el principal determinante de la estrategia de cribado.
✅ La prueba de VPH tiene mayor sensibilidad que la citología para detectar lesiones precursoras.
✅ Una prueba de VPH negativa confiere un riesgo muy bajo de enfermedad cervical significativa a corto plazo.
Referencias
• Resolución 3280 de 2018 – Ministerio de Salud y Protección Social de Colombia.
• Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud.
• Guía de Práctica Clínica para detección y manejo de lesiones precancerosas de cuello uterino.
• Organización Mundial de la Salud (OMS): Cervical Cancer Screening Guidelines.
• Instituto Nacional de Cancerología de Colombia.`,
  },
  {
    id: "dr-q-307",
    examArea: "Atención Primaria en Salud / Prevención cardiovascular",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "atencion_primaria_en_salud", "prevencion_cardiovascular"],
    statement: "Hombre de 52 años con diagnóstico reciente de hipertensión arterial. Al examen físico presenta IMC de 31 kg/m². Trae laboratorios que muestran glucemia en ayunas de 108 mg/dL, HbA1c de 5.9%, creatinina de 0.9 mg/dL y colesterol LDL de 155 mg/dL. No refiere síntomas cardiovasculares ni limitación funcional. ¿Cuál es la intervención de prevención primaria más costo-efectiva y prioritaria en este escenario?",
    options: [
      { id: "A", label: "A", text: "Iniciar aspirina a dosis baja de forma indefinida." },
      { id: "B", label: "B", text: "Solicitar prueba de esfuerzo para descartar enfermedad coronaria silente." },
      { id: "C", label: "C", text: "Implementar un programa estructurado de modificación del estilo de vida con reducción de peso, actividad física regular y cambios dietarios." },
      { id: "D", label: "D", text: "Solicitar ecografía Doppler carotídea como tamización cardiovascular." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta obesidad, hipertensión, prediabetes y dislipidemia. La intervención con mayor impacto poblacional, mejor relación costo-beneficio y capacidad de modificar simultáneamente todos los factores de riesgo es la modificación intensiva del estilo de vida.",
    keyPoints: [
      "Cuando veas: Obesidad. Hipertensión. Prediabetes. Dislipidemia.",
      "Debes pensar en: Intervenciones intensivas sobre estilo de vida como base de la prevención cardiovascular primaria.",
      "Tema: Prevención cardiovascular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa cuál intervención tiene el mayor impacto global sobre el riesgo cardiovascular antes de pensar en pruebas complementarias o medidas de tamización innecesarias.
La clave no es el LDL.
La clave es:
La coexistencia de múltiples factores de riesgo modificables.
¿Qué está ocurriendo realmente?
El paciente presenta:
•	Obesidad (IMC 31 kg/m²).
•	Hipertensión arterial.
•	Prediabetes.
•	LDL elevado.
Esto corresponde a un individuo con:
Alto riesgo de progresión hacia enfermedad cardiovascular y diabetes mellitus.
¿Por qué la pérdida de peso es tan importante?
La reducción ponderal produce simultáneamente:
•	Disminución de la presión arterial.
•	Mejoría de la sensibilidad a la insulina.
•	Disminución de glucemia.
•	Mejoría del perfil lipídico.
•	Reducción del riesgo cardiovascular global.
Pocas intervenciones tienen efectos tan amplios.
¿Qué medidas deben recomendarse?
Alimentación saludable
Con reducción de:
•	Ultraprocesados.
•	Azúcares refinados.
•	Grasas trans.
Y aumento de:
•	Frutas.
•	Verduras.
•	Fibra.
•	Proteínas magras.
Actividad física
Al menos:
150 minutos semanales de ejercicio aeróbico moderado.
Pérdida de peso
Una reducción del 5-10% del peso corporal puede generar beneficios metabólicos significativos.
¿Por qué no iniciar aspirina?
En prevención primaria:
El beneficio es limitado y debe balancearse contra el riesgo de sangrado.
No constituye la medida más costo-efectiva en este escenario.
¿Por qué no hacer pruebas de tamización cardiovascular?
Ni la prueba de esfuerzo ni el Doppler carotídeo están indicados de rutina en pacientes asintomáticos de este perfil.
La prioridad es:
Controlar los factores de riesgo modificables.
¿Cuál es la trampa de examen?
Muchos estudiantes se enfocan en:
El LDL de 155 mg/dL.
Y buscan una intervención farmacológica inmediata.
Sin embargo, la pregunta pregunta específicamente:
La intervención más costo-efectiva y prioritaria.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar factores de riesgo cardiovasculares.
2.	Intervenir intensivamente sobre el estilo de vida.
3.	Favorecer pérdida de peso.
4.	Promover ejercicio regular.
5.	Reducir el riesgo cardiovascular global a largo plazo.
Perlas de examen
✅ La obesidad es un factor de riesgo cardiovascular modificable mayor.
✅ La prediabetes puede revertirse con cambios intensivos del estilo de vida.
✅ La pérdida de peso mejora simultáneamente presión arterial, glucemia y perfil lipídico.
✅ El ejercicio regular reduce el riesgo cardiovascular y metabólico.
✅ La prevención primaria debe enfocarse primero en factores modificables.
✅ No se recomiendan pruebas de tamización cardiovascular indiscriminadas en pacientes asintomáticos.
✅ Las modificaciones del estilo de vida siguen siendo una de las intervenciones más costo-efectivas en medicina.
Referencias
• Guías Europeas de Prevención Cardiovascular.
• American Heart Association: Primary Prevention Guidelines.
• American Diabetes Association Standards of Care.
• Harrison's Principles of Internal Medicine.
• WHO Guidelines on Cardiovascular Disease Prevention.`,
  },
  {
    id: "dr-q-308",
    examArea: "Atención Primaria en Salud / Prevención y mantenimiento de la salud",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "atencion_primaria_en_salud", "prevencion_y_mantenimiento_de_la_salud"],
    statement: "Mujer de 68 años con antecedente de EPOC (GOLD B) y diabetes mellitus tipo 2 compensada. Acude a consulta externa en el mes de abril. Al revisar su carné de vacunación se evidencia que recibió la vacuna contra influenza hace 14 meses y una dosis de vacuna conjugada antineumocócica (PCV13) a los 65 años. ¿Cuál es la recomendación de inmunización inmediata más adecuada?",
    options: [
      { id: "A", label: "A", text: "No requiere ninguna vacuna en este momento porque ya recibió PCV13." },
      { id: "B", label: "B", text: "Aplicar únicamente una nueva dosis anual de vacuna contra influenza." },
      { id: "C", label: "C", text: "Aplicar vacuna contra influenza y completar el esquema antineumocócico con PPSV23." },
      { id: "D", label: "D", text: "Repetir PCV13 y diferir cualquier otra vacunación." },
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta factores de riesgo importantes (edad ≥65 años, EPOC y diabetes). Debe recibir vacunación anual contra influenza y completar la protección antineumocócica con PPSV23 tras haber recibido previamente PCV13.",
    keyPoints: [
      "Cuando veas: Edad ≥65 años. EPOC. Diabetes. Esquema antineumocócico incompleto.",
      "Debes pensar en: Actualizar vacunación contra influenza y completar protección antineumocócica.",
      "Tema: Prevención y mantenimiento de la salud.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa medidas preventivas de alto impacto que con frecuencia se olvidan durante el seguimiento de enfermedades crónicas.
La clave no es la diabetes.
La clave es:
Edad avanzada + EPOC.
¿Qué está ocurriendo realmente?
La paciente presenta múltiples factores que aumentan el riesgo de:
•	Neumonía.
•	Hospitalización.
•	Exacerbaciones respiratorias.
•	Mortalidad por infecciones respiratorias.
Entre ellos:
•	Edad de 68 años.
•	EPOC.
•	Diabetes mellitus.
¿Qué ocurre con la vacuna contra influenza?
La protección disminuye con el tiempo.
Por ello:
Debe administrarse anualmente.
La paciente recibió su última dosis hace:
14 meses.
Por tanto:
Debe revacunarse.
¿Qué ocurre con la vacunación antineumocócica?
La vacunación antineumocócica busca ampliar la cobertura frente a diferentes serotipos.
La paciente recibió:
PCV13 a los 65 años.
Sin embargo, el esquema clásico de protección en adultos mayores incluye posteriormente:
PPSV23.
Para ampliar la cobertura frente a serotipos adicionales.
¿Por qué es especialmente importante en EPOC?
Porque las infecciones respiratorias son una causa frecuente de:
•	Exacerbaciones.
•	Hospitalizaciones.
•	Deterioro funcional.
•	Mortalidad.
La vacunación reduce significativamente estos eventos.
¿Por qué no basta con influenza?
Porque ambas vacunas protegen contra patógenos distintos.
La pregunta busca identificar:
La necesidad de completar ambas estrategias preventivas.
¿Por qué no repetir PCV13?
No existe indicación de repetir rutinariamente una dosis ya aplicada.
Lo que falta es:
Completar la protección antineumocócica.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
Ya recibió vacuna contra neumococo.
Y concluyen:
Esquema completo.
Pero el caso aporta deliberadamente:
Solo recibió PCV13.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Verificar edad y factores de riesgo.
2.	Actualizar influenza anualmente.
3.	Revisar esquema antineumocócico.
4.	Completar las dosis faltantes.
5.	Mantener estrategias preventivas continuas.
Perlas de examen
✅ La vacuna contra influenza debe administrarse anualmente.
✅ Los pacientes con EPOC tienen alto riesgo de complicaciones respiratorias infecciosas.
✅ La diabetes incrementa el riesgo de infecciones graves.
✅ Los adultos mayores requieren protección antineumocócica adecuada.
✅ La vacunación es una de las intervenciones preventivas más costo-efectivas.
✅ Revisar el carné de vacunación forma parte del control integral de enfermedades crónicas.
✅ Las estrategias preventivas reducen hospitalizaciones y mortalidad.
Referencias
• Ministerio de Salud y Protección Social de Colombia – Programa Ampliado de Inmunizaciones.
• CDC Adult Immunization Schedule.
• GOLD Report 2025.
• WHO Position Papers on Influenza and Pneumococcal Vaccination.
• Guías de Promoción y Mantenimiento de la Salud de Colombia.`,
  },
  {
    id: "dr-q-309",
    examArea: "Atención Primaria en Salud / Prevención y mantenimiento de la salud",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "atencion_primaria_en_salud", "prevencion_y_mantenimiento_de_la_salud"],
    statement: "Hombre de 45 años que consulta por primera vez para evaluación preventiva. Niega antecedentes médicos de importancia, síntomas gastrointestinales o antecedentes familiares conocidos de cáncer colorrectal. Presión arterial promedio de dos tomas: 138/88 mmHg. Riesgo cardiovascular a 10 años calculado mediante ASCVD Score: 4.5%. ¿Cuál es la conducta de tamización para cáncer colorrectal más indicada?",
    options: [
      { id: "A", label: "A", text: "No realizar tamización hasta los 50 años porque es un paciente de bajo riesgo." },
      { id: "B", label: "B", text: "Solicitar colonoscopia inmediata como única estrategia válida de tamización." },
      { id: "C", label: "C", text: "Iniciar tamización para cáncer colorrectal desde este momento mediante una estrategia validada de cribado." },
      { id: "D", label: "D", text: "Solicitar sangre oculta en materia fecal únicamente si desarrolla síntomas digestivos." },
    ],
    correctOptionId: "C",
    explanation: "Actualmente se recomienda iniciar la tamización del cáncer colorrectal en adultos de riesgo promedio a partir de los 45 años, incluso en ausencia de síntomas o factores de riesgo adicionales.",
    keyPoints: [
      "Cuando veas: Edad ≥45 años. Riesgo promedio. Ausencia de síntomas.",
      "Debes pensar en: Inicio de la tamización para cáncer colorrectal.",
      "Tema: Prevención y mantenimiento de la salud.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los cambios más importantes en las estrategias modernas de prevención del cáncer.
La clave no es la presión arterial.
La clave es:
Tiene 45 años.
¿Qué está ocurriendo realmente?
El paciente es:
•	Asintomático.
•	Sin antecedentes personales relevantes.
•	Sin antecedentes familiares de alto riesgo conocidos.
Por tanto corresponde a un individuo de:
Riesgo promedio para cáncer colorrectal.
¿Por qué cambió la edad de inicio?
Tradicionalmente la tamización comenzaba a los 50 años.
Sin embargo, se observó:
Un aumento progresivo de cáncer colorrectal en adultos más jóvenes.
Como consecuencia, múltiples guías actualizaron sus recomendaciones.
Actualmente:
La tamización inicia a los 45 años en individuos de riesgo promedio.
¿Qué pruebas pueden utilizarse?
Existen múltiples estrategias válidas:
Métodos basados en heces
•	Sangre oculta en materia fecal.
•	Pruebas inmunoquímicas fecales.
•	Pruebas combinadas de ADN fecal.
Métodos endoscópicos
•	Colonoscopia.
La elección depende de:
•	Disponibilidad.
•	Preferencia del paciente.
•	Protocolos institucionales.
¿Por qué no esperar hasta los 50 años?
Porque la recomendación actual es:
Iniciar a los 45 años.
Ese es precisamente el punto que busca evaluar la pregunta.
¿Por qué no hacer colonoscopia obligatoriamente?
La colonoscopia es una excelente estrategia.
Pero no es:
La única opción válida de tamización.
La pregunta busca la conducta general correcta.
¿Por qué no esperar síntomas?
La finalidad de la tamización es:
Detectar lesiones antes de que aparezcan síntomas.
Cuando aparecen síntomas:
•	Sangrado.
•	Pérdida de peso.
•	Anemia.
Ya no se habla de tamización sino de:
Estudio diagnóstico.
¿Cuál es la trampa de examen?
Muchos estudiantes continúan recordando:
Inicio a los 50 años.
Pero las recomendaciones actuales han desplazado el inicio a:
Los 45 años.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar edad del paciente.
2.	Determinar si es de riesgo promedio.
3.	Iniciar tamización desde los 45 años.
4.	Elegir una estrategia validada.
5.	Mantener seguimiento periódico según el método utilizado.
Perlas de examen
✅ El cáncer colorrectal puede prevenirse mediante detección y resección de lesiones precursoras.
✅ La tamización en individuos de riesgo promedio inicia a los 45 años.
✅ La colonoscopia no es la única estrategia válida de cribado.
✅ Las pruebas fecales son alternativas aceptadas en muchos programas de tamización.
✅ La ausencia de síntomas no excluye la necesidad de tamización.
✅ El objetivo es detectar enfermedad temprana o lesiones premalignas.
✅ La prevención secundaria reduce mortalidad por cáncer colorrectal.
Referencias
• U.S. Preventive Services Task Force (USPSTF).
• American Cancer Society Guidelines for Colorectal Cancer Screening.
• NCCN Guidelines: Colorectal Cancer Screening.
• World Gastroenterology Organisation Global Guidelines.
• Guías de Promoción y Mantenimiento de la Salud.`,
  },
  {
    id: "dr-q-310",
    examArea: "Atención Primaria en Salud / Vigilancia en Salud Pública",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "atencion_primaria_en_salud", "vigilancia_en_salud_publica"],
    statement: "En una comunidad rural se reporta un aumento inusual de casos de fiebre, mialgias y exantema durante las últimas dos semanas. Como médico de Atención Primaria en Salud (APS), usted identifica que el 60% de los afectados viven cerca de un depósito de agua estancada. ¿Cuál es la primera acción de Salud Pública que debe liderar?",
    options: [
      { id: "A", label: "A", text: "Iniciar tratamiento antibiótico empírico masivo a toda la población expuesta." },
      { id: "B", label: "B", text: "Solicitar pruebas diagnósticas individuales a todos los habitantes de la comunidad antes de intervenir." },
      { id: "C", label: "C", text: "Notificar inmediatamente el posible brote al sistema de vigilancia epidemiológica e iniciar la investigación de campo y control de la fuente." },
      { id: "D", label: "D", text: "Esperar la confirmación etiológica de todos los casos antes de implementar medidas comunitarias." },
    ],
    correctOptionId: "C",
    explanation: "La presencia de un aumento inusual de casos con características epidemiológicas comunes constituye una sospecha de brote. La prioridad es activar la vigilancia epidemiológica e implementar medidas de control oportunas sin esperar la confirmación de todos los casos.",
    keyPoints: [
      "Cuando veas: Incremento inusual de casos. Agrupación geográfica. Posible fuente común. Riesgo comunitario.",
      "Debes pensar en: Notificación inmediata e investigación epidemiológica del brote.",
      "Tema: Vigilancia en Salud Pública.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa los primeros pasos ante la sospecha de un brote epidémico.
La clave no es el diagnóstico específico.
La clave es:
El aumento inusual de casos asociados a una posible fuente común.
¿Qué está ocurriendo realmente?
Se observa:
•	Incremento de pacientes con síntomas similares.
•	Concentración espacial de los casos.
•	Asociación con agua estancada.
Esto obliga a sospechar:
Un posible brote epidémico.
En Salud Pública, la identificación temprana es fundamental para evitar la expansión del evento.
¿Qué se entiende por brote?
Un brote corresponde a:
La aparición de un número de casos superior al esperado para una población, lugar y periodo determinados.
No es necesario conocer inicialmente el agente causal para actuar.
¿Cuál es la primera acción?
Notificación inmediata
Porque permite:
•	Activar los equipos de vigilancia.
•	Coordinar recursos.
•	Iniciar la investigación epidemiológica.
Simultáneamente debe realizarse:
Investigación de campo
Para identificar:
•	Fuente probable.
•	Mecanismo de transmisión.
•	Población expuesta.
¿Por qué intervenir antes de la confirmación definitiva?
Porque muchas enfermedades transmisibles requieren:
Medidas tempranas de control.
Esperar la confirmación completa puede favorecer:
•	Mayor transmisión.
•	Más casos.
•	Mayor impacto sanitario.
¿Qué medidas podrían implementarse?
Dependiendo del evento sospechado:
•	Eliminación de criaderos.
•	Educación comunitaria.
•	Control vectorial.
•	Vigilancia activa de casos.
•	Medidas ambientales.
¿Por qué no realizar primero pruebas a toda la población?
Porque durante la fase inicial la prioridad es:
Controlar el evento y caracterizarlo epidemiológicamente.
Las pruebas diagnósticas forman parte de la investigación, pero no deben retrasar las medidas de control.
¿Cuál es la trampa de examen?
Muchos estudiantes piensan primero en:
Diagnóstico individual.
Pero en Salud Pública la prioridad es:
Proteger a la comunidad.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Detectar el aumento inusual de casos.
2.	Notificar inmediatamente.
3.	Iniciar investigación epidemiológica.
4.	Identificar fuente y mecanismo de transmisión.
5.	Implementar medidas de control oportunas.
Perlas de examen
✅ Todo aumento inusual de casos debe hacer sospechar un brote.
✅ La notificación temprana es una obligación sanitaria.
✅ No es necesario conocer inicialmente el agente causal para actuar.
✅ La investigación epidemiológica debe iniciarse de forma inmediata.
✅ Las medidas de control no deben retrasarse esperando confirmaciones completas.
✅ La APS juega un papel fundamental en la detección temprana de brotes.
✅ El objetivo principal es interrumpir la transmisión y proteger a la comunidad.
Referencias
• Organización Mundial de la Salud (OMS): Vigilancia Epidemiológica.
• Organización Panamericana de la Salud (OPS): Investigación de Brotes.
• Instituto Nacional de Salud de Colombia – Lineamientos de Vigilancia en Salud Pública.
• CDC Principles of Epidemiology.
• Manual de Epidemiología para el Control de Enfermedades Transmisibles.`,
  },
  {
    id: "dr-q-311",
    examArea: "Atención Primaria en Salud / Atención Primaria en Salud",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "atencion_primaria_en_salud"],
    statement: "Paciente femenina de 58 años con antecedentes de hipertensión arterial y diabetes mellitus. Durante una consulta de control se evidencia que no ha reclamado sus medicamentos en los últimos 3 meses. Al indagar, refiere que el centro de salud se encuentra a aproximadamente 2 horas de su vivienda, no dispone de recursos económicos para el transporte y vive sola. Desde la perspectiva de Atención Primaria en Salud (APS), este caso representa principalmente una falla en:",
    options: [
      { id: "A", label: "A", text: "Calidad técnico-científica de la atención." },
      { id: "B", label: "B", text: "Seguridad del paciente." },
      { id: "C", label: "C", text: "Accesibilidad a los servicios de salud." },
      { id: "D", label: "D", text: "Vigilancia epidemiológica." },
    ],
    correctOptionId: "C",
    explanation: "La principal barrera identificada es la dificultad geográfica y económica para acceder a los servicios y medicamentos. Esto corresponde a una falla en el acceso efectivo al sistema de salud.",
    keyPoints: [
      "Cuando veas: Distancia excesiva al centro de salud. Dificultades económicas. Problemas para reclamar medicamentos. Abandono involuntario del tratamiento.",
      "Debes pensar en: Barreras de acceso a los servicios de salud.",
      "Tema: Atención Primaria en Salud.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa los determinantes que influyen en la utilización real de los servicios sanitarios.
La clave no es la diabetes.
La clave es:
La paciente no puede llegar al sistema de salud.
¿Qué está ocurriendo realmente?
La paciente tiene:
•	Enfermedades crónicas conocidas.
•	Tratamiento indicado.
•	Necesidad de seguimiento.
Sin embargo:
•	Vive lejos.
•	No tiene recursos para transporte.
•	Vive sola.
Por ello:
No logra acceder oportunamente a la atención ni a los medicamentos.
¿Qué significa accesibilidad?
La accesibilidad corresponde a la posibilidad real de que una persona pueda utilizar los servicios de salud cuando los necesita.
Incluye:
Accesibilidad geográfica
Distancia al servicio.
Accesibilidad económica
Capacidad para asumir costos relacionados con la atención.
Accesibilidad organizacional
Horarios, trámites y disponibilidad de servicios.
Accesibilidad cultural
Aceptación y adecuación de los servicios a la población.
¿Por qué no es un problema de calidad?
La calidad evalúa aspectos como:
•	Diagnóstico adecuado.
•	Tratamiento correcto.
•	Uso de evidencia científica.
En este caso:
El problema aparece antes de recibir la atención.
¿Por qué no es seguridad del paciente?
La seguridad se relaciona con:
•	Eventos adversos.
•	Errores de medicación.
•	Riesgos derivados de la atención.
Aquí el principal obstáculo es:
Llegar al sistema.
¿Por qué es importante en APS?
La Atención Primaria busca precisamente:
Reducir barreras de acceso.
Y garantizar:
•	Continuidad.
•	Oportunidad.
•	Integralidad.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
Descontrol potencial de HTA y diabetes.
Y responden:
Mala calidad de atención.
Pero la pregunta indaga por:
La causa del problema.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la barrera.
2.	Determinar si es geográfica, económica o social.
3.	Reconocer una falla de accesibilidad.
4.	Diseñar estrategias para acercar los servicios.
5.	Garantizar continuidad del cuidado.
Perlas de examen
✅ La accesibilidad es uno de los pilares fundamentales de la APS.
✅ La distancia al servicio constituye una barrera geográfica.
✅ La falta de recursos para transporte constituye una barrera económica.
✅ La accesibilidad condiciona la adherencia terapéutica.
✅ Las enfermedades crónicas requieren continuidad del cuidado.
✅ El acceso efectivo implica mucho más que la existencia física de un servicio.
✅ Las barreras de acceso generan inequidades en salud.
Referencias
• Organización Mundial de la Salud: Atención Primaria en Salud.
• Organización Panamericana de la Salud: Renovación de la APS.
• Resolución 3280 de 2018 – Ministerio de Salud y Protección Social de Colombia.
• Starfield B. Primary Care: Balancing Health Needs, Services and Technology.
• Manual de Atención Primaria en Salud.`,
  },
  {
    id: "dr-q-312",
    examArea: "Atención Primaria en Salud / Salud mental en Atención Primaria",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "atencion_primaria_en_salud", "salud_mental_en_atencion_primaria"],
    statement: "Hombre de 72 años consulta por cansancio y \"olvidos frecuentes\" de 6 meses de evolución. Vive solo desde que enviudó hace un año. Tiene antecedente de hipertensión arterial controlada. Al examen mental presenta afecto hiponímico, lenguaje enlentecido y escasa iniciativa. No se identifican ideas delirantes ni síntomas psicóticos. Se aplica la Escala de Depresión Geriátrica de Yesavage obteniendo 9/15 puntos, resultado sugestivo de depresión. ¿Cuál es la conducta más adecuada en Atención Primaria en Salud (APS)?",
    options: [
      { id: "A", label: "A", text: "Diagnosticar demencia y remitir a neurología para inicio de tratamiento específico." },
      { id: "B", label: "B", text: "Solicitar resonancia magnética cerebral urgente para descartar enfermedad neurodegenerativa." },
      { id: "C", label: "C", text: "Iniciar abordaje integral de depresión en el adulto mayor, evaluar riesgo suicida, apoyo social y seguimiento estrecho." },
      { id: "D", label: "D", text: "Considerar los síntomas como cambios normales asociados al envejecimiento." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta síntomas compatibles con depresión en el adulto mayor y una escala de Yesavage sugestiva. En APS la prioridad es confirmar el diagnóstico clínico, valorar riesgo suicida, intervenir factores psicosociales y establecer seguimiento.",
    keyPoints: [
      "Cuando veas: Adulto mayor. Tristeza o apatía. Quejas de memoria. Duelo reciente. Yesavage positivo.",
      "Debes pensar en: Depresión en el adulto mayor antes de asumir una demencia.",
      "Tema: Salud mental en Atención Primaria.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las situaciones más frecuentes en la práctica clínica:
El adulto mayor que consulta por "pérdida de memoria".
La clave no son los olvidos.
La clave es:
El contexto afectivo.
¿Qué está ocurriendo realmente?
El paciente presenta:
•	Viudez reciente.
•	Aislamiento social.
•	Fatiga.
•	Enlentecimiento psicomotor.
•	Afecto depresivo.
•	Tamización positiva para depresión.
Todo esto orienta inicialmente hacia:
Un trastorno depresivo.
¿Por qué la depresión puede parecer una demencia?
La depresión puede producir:
•	Dificultades de atención.
•	Problemas de concentración.
•	Quejas subjetivas de memoria.
•	Lentitud cognitiva.
Este fenómeno clásicamente se conoce como:
Pseudodemencia depresiva.
¿Cuál es el papel de la escala de Yesavage?
Es una herramienta de tamización.
Permite:
•	Identificar pacientes con alta probabilidad de depresión.
•	Priorizar evaluación clínica.
•	Facilitar intervención temprana.
Sin embargo:
No reemplaza la valoración médica.
¿Qué debe hacer APS?
El abordaje debe ser integral:
Confirmar el diagnóstico
Mediante entrevista clínica.
Evaluar riesgo suicida
Especialmente en:
•	Adultos mayores.
•	Personas que viven solas.
•	Duelo reciente.
Evaluar red de apoyo
Porque el aislamiento social empeora el pronóstico.
Programar seguimiento
La continuidad del cuidado es fundamental.
¿Por qué no diagnosticar demencia inmediatamente?
Porque:
•	Los síntomas afectivos predominan.
•	Existe un factor desencadenante claro.
•	La depresión puede explicar las quejas cognitivas.
Antes de diagnosticar demencia debe:
Evaluarse y tratarse la depresión.
¿Por qué no asumir que es envejecimiento normal?
Otra trampa frecuente.
La tristeza persistente, la apatía y el deterioro funcional:
No forman parte del envejecimiento fisiológico.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
Olvidos frecuentes.
Y responden:
Demencia.
Pero la pregunta aporta deliberadamente:
•	Duelo reciente.
•	Afecto depresivo.
•	Yesavage positivo.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar síntomas depresivos.
2.	Evaluar riesgo suicida.
3.	Analizar apoyo familiar y social.
4.	Iniciar intervención integral.
5.	Reevaluar posteriormente la función cognitiva.
Perlas de examen
✅ La depresión es una causa frecuente de quejas de memoria en adultos mayores.
✅ La viudez constituye un factor de riesgo para depresión.
✅ La escala de Yesavage es una herramienta útil de tamización.
✅ La pseudodemencia depresiva puede simular un trastorno neurocognitivo.
✅ Todo paciente con sospecha de depresión debe ser evaluado para riesgo suicida.
✅ El aislamiento social empeora el pronóstico de los trastornos depresivos.
✅ En APS el seguimiento continuo es parte fundamental del tratamiento.
Referencias
• Organización Mundial de la Salud: Salud Mental del Adulto Mayor.
• Guías de Atención Integral en Salud Mental.
• Yesavage JA. Geriatric Depression Scale.
• Kaplan & Sadock's Synopsis of Psychiatry.
• Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-313",
    examArea: "Atención Primaria en Salud / Hipertensión arterial",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "atencion_primaria_en_salud", "hipertension_arterial"],
    statement: "Paciente masculino de 48 años, con obesidad (IMC 32 kg/m²), consulta para valoración cardiovascular. En dos consultas diferentes presenta cifras tensionales de 146/94 mmHg y 142/92 mmHg. No presenta evidencia clínica de daño de órgano blanco ni síntomas cardiovasculares. Usted sospecha hipertensión arterial. ¿Cuál es el estándar de oro actual para confirmar el diagnóstico según la evidencia disponible en Atención Primaria en Salud?",
    options: [
      { id: "A", label: "A", text: "Repetir la presión arterial en el consultorio durante tres consultas adicionales." },
      { id: "B", label: "B", text: "Realizar monitoreo ambulatorio de presión arterial de 24 horas (MAPA)." },
      { id: "C", label: "C", text: "Solicitar ecocardiograma transtorácico." },
      { id: "D", label: "D", text: "Iniciar tratamiento antihipertensivo y reevaluar la respuesta clínica." },
    ],
    correctOptionId: "B",
    explanation: "El monitoreo ambulatorio de presión arterial (MAPA) es actualmente el método de referencia para confirmar el diagnóstico de hipertensión arterial, ya que permite detectar hipertensión sostenida, hipertensión de bata blanca e hipertensión enmascarada.",
    keyPoints: [
      "Cuando veas: Sospecha de hipertensión arterial. Cifras elevadas en consulta. Ausencia de daño de órgano blanco.",
      "Debes pensar en: Confirmar el diagnóstico mediante MAPA.",
      "Tema: Hipertensión arterial.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa cómo debe confirmarse el diagnóstico de hipertensión antes de etiquetar a un paciente como hipertenso.
La clave no son las cifras.
La clave es:
Confirmar el diagnóstico con el método más preciso disponible.
¿Qué está ocurriendo realmente?
El paciente presenta:
•	Obesidad.
•	Varias mediciones elevadas en consulta.
Esto genera una sospecha importante de:
Hipertensión arterial.
Sin embargo:
Una sospecha no equivale a un diagnóstico definitivo.
¿Por qué no basta con las cifras del consultorio?
Porque la presión arterial puede verse influenciada por múltiples factores:
•	Ansiedad.
•	Estrés.
•	Dolor.
•	Actividad física reciente.
•	Efecto de bata blanca.
Esto puede producir:
Sobreestimación de la presión arterial real.
¿Qué es el MAPA?
El monitoreo ambulatorio de presión arterial consiste en:
Medir automáticamente la presión arterial durante 24 horas mientras el paciente realiza sus actividades habituales.
Permite evaluar:
•	Presión diurna.
•	Presión nocturna.
•	Variabilidad tensional.
•	Descenso fisiológico nocturno.
¿Por qué se considera el estándar de referencia?
Porque identifica:
Hipertensión sostenida
Elevación real de la presión arterial.
Hipertensión de bata blanca
Elevación solo en el consultorio.
Hipertensión enmascarada
Presión normal en consulta pero elevada fuera de ella.
Esto mejora significativamente la precisión diagnóstica.
¿Por qué no iniciar tratamiento directamente?
Porque antes de iniciar una terapia crónica:
Debe confirmarse el diagnóstico.
Salvo situaciones especiales como:
•	Crisis hipertensivas.
•	Daño de órgano blanco.
•	Cifras extremadamente elevadas.
¿Por qué no pedir ecocardiograma?
El ecocardiograma evalúa:
•	Hipertrofia ventricular.
•	Función cardíaca.
Pero:
No confirma el diagnóstico de hipertensión.
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
Varias tomas en consultorio.
Porque históricamente era la estrategia más utilizada.
Sin embargo, actualmente:
El MAPA es el método de referencia para confirmación diagnóstica.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Detectar cifras elevadas.
2.	Sospechar hipertensión.
3.	Confirmar mediante MAPA.
4.	Clasificar el tipo de hipertensión.
5.	Iniciar manejo según el resultado.
Perlas de examen
✅ El MAPA es el método de referencia para confirmar hipertensión arterial.
✅ Permite detectar hipertensión de bata blanca.
✅ Permite identificar hipertensión enmascarada.
✅ Evalúa el comportamiento tensional durante el sueño.
✅ Reduce errores diagnósticos.
✅ Mejora la estratificación del riesgo cardiovascular.
✅ El diagnóstico definitivo debe confirmarse antes de etiquetar a un paciente como hipertenso cuando sea posible.
Referencias
• Guías Europeas de Hipertensión Arterial (ESH).
• American Heart Association Hypertension Guidelines.
• International Society of Hypertension Global Guidelines.
• Harrison's Principles of Internal Medicine.
• Guías de Atención Primaria para Hipertensión Arterial.`,
  },
  {
    id: "dr-q-314",
    examArea: "Atención Primaria en Salud / Prevención de complicaciones crónicas de la diabetes",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "atencion_primaria_en_salud", "prevencion_de_complicaciones_cronicas_de"],
    statement: "Durante una jornada de salud enfocada en riesgo cardiovascular, un paciente de 55 años con diabetes mellitus adecuadamente controlada pregunta por qué debe realizarse una prueba anual de albuminuria si no presenta síntomas urinarios ni alteraciones evidentes en su estado de salud. Como médico de Atención Primaria en Salud, ¿cuál es la mejor explicación para justificar esta recomendación?",
    options: [
      { id: "A", label: "A", text: "Porque la albuminuria permite diagnosticar infecciones urinarias asintomáticas antes de que produzcan complicaciones." },
      { id: "B", label: "B", text: "Porque la albuminuria es un marcador temprano de daño renal y de riesgo cardiovascular, incluso antes de que aparezcan síntomas o aumente la creatinina sérica." },
      { id: "C", label: "C", text: "Porque la albuminuria predice el desarrollo de cáncer renal en pacientes diabéticos." },
      { id: "D", label: "D", text: "Porque la albuminuria es necesaria para decidir la dosis de insulina utilizada por el paciente." },
    ],
    correctOptionId: "B",
    explanation: "La detección anual de albuminuria permite identificar de manera precoz la enfermedad renal diabética y estratificar el riesgo cardiovascular, facilitando intervenciones oportunas antes de que aparezcan manifestaciones clínicas.",
    keyPoints: [
      "Cuando veas: Diabetes mellitus. Tamización anual. Albuminuria. Paciente asintomático.",
      "Debes pensar en: Detección temprana de enfermedad renal y estratificación del riesgo cardiovascular.",
      "Tema: Prevención de complicaciones crónicas de la diabetes.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los conceptos fundamentales de la prevención secundaria en pacientes con diabetes.
La clave no es la creatinina.
La clave es:
Detectar daño antes de que sea clínicamente evidente.
¿Qué está ocurriendo realmente?
La diabetes puede producir:
Daño progresivo de la microcirculación renal.
Inicialmente el paciente:
•	No tiene síntomas.
•	Puede tener creatinina normal.
•	Puede mantener una tasa de filtración aparentemente conservada.
Sin embargo:
Ya puede existir lesión renal temprana.
¿Qué representa la albuminuria?
La aparición de albúmina en la orina indica:
Aumento de la permeabilidad glomerular.
Es uno de los primeros hallazgos detectables de:
Enfermedad renal diabética.
¿Por qué es tan importante?
Porque suele aparecer:
Antes de que aumente la creatinina sérica.
Por ello permite intervenir en etapas tempranas.
¿Qué relación tiene con el riesgo cardiovascular?
La albuminuria no solo refleja daño renal.
También indica:
Disfunción endotelial sistémica.
Por esta razón se asocia con mayor riesgo de:
•	Infarto agudo de miocardio.
•	Accidente cerebrovascular.
•	Insuficiencia cardíaca.
•	Mortalidad cardiovascular.
¿Por qué hacer la prueba cada año?
Porque la enfermedad renal diabética:
Puede progresar silenciosamente durante años.
La vigilancia periódica permite:
•	Detectar cambios tempranos.
•	Ajustar tratamiento.
•	Intensificar medidas de protección renal y cardiovascular.
¿Por qué no esperar síntomas?
Cuando aparecen síntomas como:
•	Edema.
•	Fatiga.
•	Manifestaciones urémicas.
La enfermedad suele encontrarse en fases más avanzadas.
La APS busca:
Detectar enfermedad antes de que produzca síntomas.
¿Cuál es la trampa de examen?
Muchos estudiantes asocian la albuminuria únicamente con:
Enfermedad renal.
Pero actualmente también se reconoce como:
Un marcador de riesgo cardiovascular.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar pacientes diabéticos.
2.	Solicitar albuminuria periódicamente.
3.	Detectar daño renal precoz.
4.	Estratificar riesgo cardiovascular.
5.	Implementar medidas de protección renal y vascular.
Perlas de examen
✅ La albuminuria es uno de los primeros marcadores de nefropatía diabética.
✅ Puede aparecer con creatinina sérica normal.
✅ La enfermedad renal diabética suele ser asintomática en fases iniciales.
✅ La albuminuria también es un marcador de riesgo cardiovascular.
✅ La detección precoz permite intervenir antes de la pérdida significativa de función renal.
✅ El tamizaje periódico forma parte del seguimiento integral del paciente diabético.
✅ La prevención de complicaciones es uno de los pilares de la Atención Primaria en Salud.
Referencias
• American Diabetes Association Standards of Care.
• KDIGO Clinical Practice Guidelines for Chronic Kidney Disease.
• Guías de Promoción y Mantenimiento de la Salud.
• Harrison's Principles of Internal Medicine.
• Brenner & Rector's The Kidney.`,
  },
  {
    id: "dr-q-315",
    examArea: "Atención Primaria en Salud / Promoción de la salud y Atención Primaria en Salud",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "atencion_primaria_en_salud", "promocion_de_la_salud_y_atencion_primari"],
    statement: "Durante la implementación de una estrategia de promoción de la salud en un barrio con alta prevalencia de obesidad, usted decide trabajar con las tiendas locales para aumentar la disponibilidad de frutas y verduras y disminuir la visibilidad de bebidas azucaradas. ¿Cómo se clasifica este tipo de intervención?",
    options: [
      { id: "A", label: "A", text: "Prevención terciaria." },
      { id: "B", label: "B", text: "Tamización poblacional." },
      { id: "C", label: "C", text: "Intervención sobre determinantes sociales y ambientales de la salud." },
      { id: "D", label: "D", text: "Prevención cuaternaria." },
    ],
    correctOptionId: "C",
    explanation: "La estrategia no se enfoca en el tratamiento de individuos enfermos, sino en modificar el entorno para facilitar elecciones saludables a nivel comunitario, actuando sobre determinantes sociales y ambientales de la salud.",
    keyPoints: [
      "Cuando veas: Modificación del entorno. Cambios en disponibilidad de alimentos. Intervenciones comunitarias. Promoción de hábitos saludables.",
      "Debes pensar en: Intervenciones sobre determinantes sociales y ambientales de la salud.",
      "Tema: Promoción de la salud y Atención Primaria en Salud.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la diferencia entre intervenir sobre el individuo y actuar sobre las condiciones que favorecen la enfermedad en una comunidad.
La clave no es la obesidad.
La clave es:
La modificación del entorno donde las personas toman decisiones.
¿Qué está ocurriendo realmente?
La obesidad es una enfermedad multifactorial.
No depende únicamente de:
•	Voluntad individual.
•	Conocimiento nutricional.
•	Motivación personal.
También está influenciada por:
•	Disponibilidad de alimentos.
•	Costos.
•	Publicidad.
•	Entorno comunitario.
¿Qué hizo el médico?
La estrategia busca:
•	Aumentar la oferta de alimentos saludables.
•	Facilitar elecciones saludables.
•	Reducir exposición a productos no saludables.
Por tanto:
Está modificando el ambiente donde vive la comunidad.
¿Qué son los determinantes sociales de la salud?
Son las condiciones en que las personas:
•	Nacen.
•	Crecen.
•	Trabajan.
•	Viven.
•	Envejecen.
Estas condiciones influyen directamente sobre el riesgo de enfermedad.
¿Por qué esta intervención es tan importante?
Porque las intervenciones poblacionales:
Alcanzan simultáneamente a muchas personas.
Y pueden producir un impacto mayor que las intervenciones individuales aisladas.
¿Por qué no es prevención terciaria?
La prevención terciaria busca:
Reducir discapacidad o complicaciones de una enfermedad ya establecida.
Por ejemplo:
•	Rehabilitación cardíaca.
•	Rehabilitación neurológica.
No es el caso.
¿Por qué no es tamización?
La tamización consiste en:
Buscar enfermedad en personas aparentemente sanas.
Aquí no se está realizando ninguna prueba diagnóstica.
¿Qué concepto de APS está evaluando la pregunta?
Uno de los principios fundamentales de APS es:
Actuar sobre los determinantes de la salud y no únicamente sobre la enfermedad.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
Obesidad.
Y buscan una estrategia clínica individual.
Pero la intervención ocurre a nivel:
Comunitario y ambiental.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar el problema poblacional.
2.	Reconocer factores ambientales asociados.
3.	Modificar el entorno comunitario.
4.	Facilitar conductas saludables.
5.	Reducir el riesgo de enfermedad a nivel poblacional.
Perlas de examen
✅ La promoción de la salud busca crear entornos favorables para la salud.
✅ Los determinantes sociales influyen profundamente en el riesgo de enfermedad.
✅ Las intervenciones ambientales tienen impacto poblacional amplio.
✅ La APS prioriza acciones comunitarias además de la atención individual.
✅ La obesidad está influenciada por factores sociales, económicos y ambientales.
✅ Modificar la disponibilidad de alimentos es una estrategia de promoción de la salud.
✅ Las intervenciones poblacionales suelen ser altamente costo-efectivas.
Referencias
• Carta de Ottawa para la Promoción de la Salud.
• Organización Mundial de la Salud: Determinantes Sociales de la Salud.
• Organización Panamericana de la Salud: Atención Primaria en Salud.
• Resolución 3280 de 2018 – Ministerio de Salud y Protección Social de Colombia.
• Manual de Promoción de la Salud y Prevención de la Enfermedad.`,
  },
  {
    id: "dr-q-316",
    examArea: "Ciencias Básicas Aplicadas a la Clínica / Inotrópicos y fisiología cardiovascular",
    topic: "Ciencias Básicas Aplicadas a la Clínica",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas_aplicadas_a_la_clinica", "inotropicos_y_fisiologia_cardiovascular"],
    statement: "Paciente masculino de 68 años que ingresa a urgencias por dolor torácico opresivo de 3 horas de evolución. Al examen físico presenta PA 70/40 mmHg, FC 115 lpm, extremidades frías, diaforesis y llenado capilar de 5 segundos. El ECG evidencia supradesnivel del ST en V1-V6. Se diagnostica choque cardiogénico secundario a infarto agudo de miocardio anterior extenso y se inicia infusión de dobutamina. Quince minutos después se observa mejoría de la presión arterial y aumento del gasto cardíaco. A nivel celular, ¿cuál es el mecanismo fisiológico directo mediante el cual este fármaco incrementa la contractilidad miocárdica?",
    options: [
      { id: "A", label: "A", text: "Inhibición de la Na+/K+ ATPasa con aumento secundario del calcio intracelular." },
      { id: "B", label: "B", text: "Estimulación de receptores β1 cardíacos con incremento de AMPc y entrada de calcio a la célula." },
      { id: "C", label: "C", text: "Bloqueo de receptores muscarínicos cardíacos con aumento de la frecuencia cardíaca." },
      { id: "D", label: "D", text: "Inhibición de la fosfodiesterasa con aumento primario de GMPc intracelular." },
    ],
    correctOptionId: "B",
    explanation: "La dobutamina es un agonista β1 predominante. Su efecto inotrópico positivo ocurre por aumento del AMPc intracelular, lo que favorece la apertura de canales de calcio dependientes de voltaje y aumenta la disponibilidad de calcio para la contracción miocárdica.",
    keyPoints: [
      "Cuando veas: Choque cardiogénico. Bajo gasto cardíaco. Dobutamina.",
      "Debes pensar en: Agonismo β1 → ↑ AMPc → ↑ Calcio intracelular → ↑ Contractilidad.",
      "Tema: Inotrópicos y fisiología cardiovascular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque integra:
•	Fisiología celular.
•	Farmacología cardiovascular.
•	Manejo del choque cardiogénico.
La clave no es el infarto.
La clave es:
¿Cómo produce la dobutamina el aumento de la fuerza de contracción?
¿Qué está ocurriendo realmente?
El paciente presenta:
•	IAM anterior extenso.
•	Disfunción severa del ventrículo izquierdo.
•	Hipotensión.
•	Hipoperfusión periférica.
Todo esto corresponde a:
Choque cardiogénico.
El problema fundamental es:
Disminución del gasto cardíaco.
¿Qué hace la dobutamina?
La dobutamina es un:
Agonista β1 adrenérgico.
Al unirse al receptor β1 activa:
•	Proteína Gs.
•	Adenilato ciclasa.
Produciendo:
Incremento del AMPc intracelular.
¿Qué hace el AMPc?
El aumento del AMPc activa:
Proteína quinasa A (PKA).
La cual fosforila los canales de calcio tipo L.
Como consecuencia:
Entra más calcio durante el potencial de acción.
¿Por qué aumenta la contractilidad?
Porque el calcio es el principal regulador de la interacción:
•	Actina.
•	Miosina.
A mayor calcio intracelular:
Mayor número de puentes cruzados.
Y por tanto:
Mayor fuerza de contracción.
¿Qué ocurre en el retículo sarcoplásmico?
Además del ingreso de calcio:
•	Se favorece la liberación de calcio almacenado.
•	Aumenta la cantidad de calcio disponible para la sístole.
Esto potencia aún más el efecto inotrópico.
¿Por qué no es la Na+/K+ ATPasa?
Ese mecanismo corresponde a:
Digoxina.
La digoxina inhibe la Na+/K+ ATPasa, aumentando indirectamente el calcio intracelular.
No es el mecanismo de la dobutamina.
¿Por qué no es GMPc?
El GMPc se relaciona principalmente con:
•	Óxido nítrico.
•	Vasodilatación.
No es el mecanismo responsable del efecto inotrópico de la dobutamina.
¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan que:
Todos aumentan la contractilidad.
Pero olvidan que cada fármaco lo hace por mecanismos distintos.
Debes asociar:
•	Dobutamina → β1.
•	Digoxina → Na/K ATPasa.
•	Milrinona → Fosfodiesterasa 3.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Activación β1.
2.	Activación de proteína Gs.
3.	Estimulación de adenilato ciclasa.
4.	Aumento de AMPc.
5.	Incremento del calcio intracelular.
6.	Aumento de la contractilidad.
Perlas de examen
✅ La dobutamina es el inotrópico más utilizado en el choque cardiogénico con bajo gasto.
✅ Su principal acción ocurre sobre receptores β1 cardíacos.
✅ El aumento del AMPc incrementa la entrada de calcio.
✅ El calcio es el principal determinante de la fuerza de contracción miocárdica.
✅ Dobutamina aumenta el gasto cardíaco principalmente por efecto inotrópico positivo.
✅ Digoxina y dobutamina aumentan la contractilidad por mecanismos diferentes.
✅ En choque cardiogénico el objetivo inicial es restaurar la perfusión tisular mientras se corrige la causa subyacente.
Referencias
• Guyton & Hall. Textbook of Medical Physiology.
• Katzung. Basic & Clinical Pharmacology.
• Braunwald's Heart Disease.
• Harrison's Principles of Internal Medicine.
• ESC Guidelines for Acute Myocardial Infarction and Cardiogenic Shock.`,
  },
  {
    id: "dr-q-317",
    examArea: "Ciencias Básicas Aplicadas a la Clínica / Fisiopatología del choque séptico",
    topic: "Ciencias Básicas Aplicadas a la Clínica",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas_aplicadas_a_la_clinica", "fisiopatologia_del_choque_septico"],
    statement: "Mujer de 72 años, procedente de un asilo, es llevada a urgencias por fiebre, obnubilación y disuria. Al examen físico presenta PA 75/40 mmHg, FC 125 lpm, temperatura de 39.2°C, extremidades calientes y rubicundas. Los gases arteriales muestran lactato de 5.5 mmol/L. Se diagnostica choque séptico. Tras recibir 3 litros de cristaloides persiste hipotensa y requiere vasopresores a dosis elevadas. ¿Cuál es la alteración fisiopatológica celular principal responsable de la vasoplejía refractaria observada en esta paciente?",
    options: [
      { id: "A", label: "A", text: "Inhibición de la síntesis de AMPc en el músculo liso vascular." },
      { id: "B", label: "B", text: "Sobreexpresión de la óxido nítrico sintasa inducible (iNOS) con producción excesiva de óxido nítrico." },
      { id: "C", label: "C", text: "Bloqueo de los canales de calcio tipo L del músculo liso vascular." },
      { id: "D", label: "D", text: "Disminución de la producción de prostaciclinas por el endotelio vascular." },
    ],
    correctOptionId: "B",
    explanation: "En el choque séptico existe una respuesta inflamatoria sistémica que induce la expresión de iNOS en células endoteliales y musculares lisas vasculares. Esto genera producción masiva de óxido nítrico (NO), potente vasodilatador responsable de la vasoplejía característica del choque distributivo.",
    keyPoints: [
      "Cuando veas: Choque séptico. Extremidades calientes. Hipotensión refractaria. Altos requerimientos de vasopresores.",
      "Debes pensar en: Exceso de óxido nítrico mediado por iNOS.",
      "Tema: Fisiopatología del choque séptico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el mecanismo celular que diferencia al choque séptico de otros tipos de choque.
La clave no es la infección.
La clave es:
La vasodilatación refractaria.
¿Qué está ocurriendo realmente?
La paciente presenta:
•	Infección grave.
•	Hipotensión persistente.
•	Lactato elevado.
•	Extremidades calientes.
Esto corresponde a:
Choque séptico.
A diferencia del choque cardiogénico o hipovolémico, aquí inicialmente predomina:
Vasodilatación sistémica.
¿Qué desencadena esta vasodilatación?
Los microorganismos y sus productos activan:
•	Macrófagos.
•	Neutrófilos.
•	Endotelio vascular.
Estos liberan:
•	TNF-α.
•	IL-1.
•	IL-6.
•	Otras citocinas inflamatorias.
¿Qué ocurre a nivel celular?
Las citocinas inducen la expresión de:
Óxido nítrico sintasa inducible (iNOS).
La iNOS produce cantidades masivas de:
Óxido nítrico (NO).
¿Qué hace el óxido nítrico?
El NO difunde hacia el músculo liso vascular y activa:
Guanilato ciclasa.
Produciendo aumento de:
GMPc intracelular.
Lo que genera:
Relajación del músculo liso vascular.
Y por tanto:
Vasodilatación intensa.
¿Por qué los vasopresores pueden volverse menos efectivos?
Porque existe:
•	Producción continua de NO.
•	Hiporreactividad vascular a catecolaminas.
•	Alteración de receptores vasculares.
Esto explica la:
Vasoplejía refractaria.
¿Por qué aparecen extremidades calientes?
En las fases iniciales del choque séptico:
La resistencia vascular sistémica disminuye marcadamente.
Por ello la piel suele estar:
•	Caliente.
•	Rubicunda.
•	Bien perfundida superficialmente.
A diferencia del choque cardiogénico.
¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan:
Hipotensión = vasoconstricción insuficiente.
Pero olvidan el mecanismo molecular.
Debes asociar:
Choque séptico → iNOS → NO → GMPc → vasodilatación.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Infección grave.
2.	Liberación de citocinas.
3.	Activación de iNOS.
4.	Producción excesiva de NO.
5.	Aumento de GMPc.
6.	Vasoplejía e hipotensión.
Perlas de examen
✅ El choque séptico es el prototipo de choque distributivo.
✅ La vasoplejía es consecuencia del exceso de óxido nítrico.
✅ La iNOS se induce por citocinas inflamatorias.
✅ El NO aumenta el GMPc intracelular.
✅ El GMPc produce relajación del músculo liso vascular.
✅ Las extremidades calientes son características de las fases iniciales del choque séptico.
✅ La hiporreactividad a catecolaminas contribuye a la hipotensión refractaria.
Referencias
• Guyton & Hall. Textbook of Medical Physiology.
• Harrison's Principles of Internal Medicine.
• Braunwald's Heart Disease.
• Surviving Sepsis Campaign Guidelines.
• Marino's The ICU Book.`,
  },
  {
    id: "dr-q-318",
    examArea: "Ciencias Básicas Aplicadas a la Clínica / Trastornos ácido-base",
    topic: "Ciencias Básicas Aplicadas a la Clínica",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas_aplicadas_a_la_clinica", "trastornos_acido_base"],
    statement: "Hombre de 25 años con Diabetes Mellitus tipo 1, ingresa por cetoacidosis diabética severa. Gasometría inicial: pH 7.10, HCO₃⁻ 8 mEq/L, pCO₂ 25 mmHg, Na⁺ 140 mEq/L, Cl⁻ 98 mEq/L. Recibe reanimación con 6 litros de solución salina al 0.9% e infusión de insulina. Veinticuatro horas después, las cetonas son negativas, pero la gasometría muestra: pH 7.25, HCO₃⁻ 14 mEq/L, pCO₂ 30 mmHg, Na⁺ 145 mEq/L, Cl⁻ 118 mEq/L. ¿Cuál es el mecanismo fisiopatológico que explica la persistencia de la acidosis?",
    options: [
      { id: "A", label: "A", text: "Producción persistente de cuerpos cetónicos por resistencia a la insulina." },
      { id: "B", label: "B", text: "Acumulación de ácido láctico secundaria a hipoperfusión tisular persistente." },
      { id: "C", label: "C", text: "Desarrollo de acidosis metabólica hiperclorémica por expansión del compartimento extracelular con solución salina." },
      { id: "D", label: "D", text: "Retención renal de fosfatos con aumento del anión gap." },
    ],
    correctOptionId: "C",
    explanation: "La cetoacidosis ha sido corregida (cetonas negativas), pero la administración de grandes volúmenes de solución salina al 0.9% ha producido una elevación importante del cloro sérico, generando una acidosis metabólica hiperclorémica con anión gap normal.",
    keyPoints: [
      "Cuando veas: CAD resuelta. Cetonas negativas. Cloro elevado. Persistencia de acidosis.",
      "Debes pensar en: Acidosis metabólica hiperclorémica secundaria a solución salina.",
      "Tema: Trastornos ácido-base.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la evolución fisiológica de la cetoacidosis diabética durante el tratamiento.
La clave no es el pH.
La clave es:
Las cetonas desaparecieron, pero la acidosis persiste.
¿Qué está ocurriendo realmente?
Al ingreso el paciente tenía:
•	pH 7.10.
•	HCO₃⁻ 8 mEq/L.
•	Cetoacidosis diabética.
Calculemos rápidamente el anión gap inicial:
[
AG = Na - (Cl + HCO_3)
]
[
AG = 140 - (98 + 8)
]
[
AG = 34
]
Existe:
Acidosis metabólica con anión gap elevado.
Típica de la CAD.
¿Qué ocurrió después?
Tras:
•	Hidratación.
•	Insulina.
Las cetonas desaparecen.
Esto indica que:
La producción de cuerpos cetónicos ya fue corregida.
Sin embargo aparece:
•	Cloro 118 mEq/L.
•	Bicarbonato bajo.
¿Por qué aumenta el cloro?
La solución salina al 0.9% contiene:
[
154\\ mEq/L\\ de\\ Na^+
]
[
154\\ mEq/L\\ de\\ Cl^-
]
Es decir:
Más cloro que el plasma normal.
Cuando se administran varios litros:
Se expande el espacio extracelular con una carga importante de cloruro.
¿Qué efecto tiene el exceso de cloro?
Para mantener la electroneutralidad:
Disminuye la concentración plasmática de bicarbonato.
Apareciendo:
Acidosis metabólica hiperclorémica.
¿Qué pasa con el anión gap?
Ahora:
[
AG = 145 - (118 + 14)
]
[
AG = 13
]
El anión gap prácticamente se normalizó.
Esto confirma que:
La acidosis por cetonas desapareció.
Y fue reemplazada por:
Acidosis hiperclorémica.
¿Por qué no es acidosis láctica?
La pregunta aporta un dato decisivo:
Cetonas negativas y mejoría clínica.
Además no hay datos de:
•	Choque.
•	Hipoperfusión persistente.
•	Lactato elevado.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
Persistencia de acidosis.
Y concluyen:
La CAD sigue activa.
Pero el dato fundamental es:
Las cetonas desaparecieron.
¿Qué debe recordarse sobre la CAD?
Durante el tratamiento puede ocurrir:
1.	Corrección de cetosis.
2.	Normalización progresiva del anión gap.
3.	Aparición transitoria de acidosis hiperclorémica.
Esto es especialmente frecuente cuando se utilizan:
Grandes volúmenes de solución salina normal.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	CAD con anión gap elevado.
2.	Administración masiva de NaCl 0.9%.
3.	Aumento del cloro sérico.
4.	Descenso relativo del bicarbonato.
5.	Acidosis metabólica hiperclorémica con anión gap normal.
Perlas de examen
✅ La resolución de la CAD se confirma principalmente por el cierre del anión gap.
✅ Las cetonas negativas indican corrección de la cetosis.
✅ La solución salina normal puede producir acidosis hiperclorémica.
✅ El exceso de cloro reduce la concentración plasmática de bicarbonato.
✅ La acidosis hiperclorémica es una complicación frecuente del tratamiento de la CAD.
✅ El anión gap normalizado indica resolución del trastorno metabólico principal.
✅ La persistencia de acidosis no siempre significa persistencia de la CAD.
Referencias
• Harrison's Principles of Internal Medicine.
• ADA Standards of Care.
• Guyton & Hall. Textbook of Medical Physiology.
• Marino's The ICU Book.
• UpToDate: Diabetic Ketoacidosis and Hyperchloremic Metabolic Acidosis.`,
  },
  {
    id: "dr-q-319",
    examArea: "Ciencias Básicas Aplicadas a la Clínica / Fisiología respiratoria",
    topic: "Ciencias Básicas Aplicadas a la Clínica",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas_aplicadas_a_la_clinica", "fisiologia_respiratoria"],
    statement: "Mujer de 65 años, fumadora pesada, con diagnóstico de EPOC severo. Ingresa por exacerbación infecciosa. Presenta disnea, cianosis y somnolencia. Gasometría inicial (FiO₂ 21%): pH 7.31, pCO₂ 58 mmHg, pO₂ 45 mmHg. Se administra oxígeno mediante mascarilla con reservorio a 15 L/min (FiO₂ cercana al 100%). Treinta minutos después la SpO₂ aumenta a 98%, pero la paciente desarrolla deterioro progresivo del estado de conciencia hasta coma hipercápnico. Gasometría de control: pH 7.15, pCO₂ 85 mmHg, pO₂ 120 mmHg. ¿Cuál es el mecanismo fisiopatológico primario que explica el empeoramiento agudo de la hipercapnia tras la oxigenoterapia?",
    options: [
      { id: "A", label: "A", text: "Supresión completa del estímulo respiratorio hipóxico." },
      { id: "B", label: "B", text: "Aumento de la producción metabólica de CO₂ por hiperoxia." },
      { id: "C", label: "C", text: "Reversión de la vasoconstricción pulmonar hipóxica con incremento del desajuste ventilación/perfusión (V/Q)." },
      { id: "D", label: "D", text: "Disminución aguda de la afinidad de la hemoglobina por el oxígeno." },
    ],
    correctOptionId: "C",
    explanation: "La principal causa del empeoramiento de la hipercapnia inducida por oxígeno en pacientes con EPOC es el aumento del desequilibrio ventilación/perfusión. La hiperoxia revierte la vasoconstricción pulmonar hipóxica, desviando flujo sanguíneo hacia alveolos pobremente ventilados y empeorando la eliminación de CO₂.",
    keyPoints: [
      "Cuando veas: EPOC severo. Oxígeno en altas concentraciones. Aumento rápido del pCO₂. Deterioro neurológico.",
      "Debes pensar en: Empeoramiento del desajuste ventilación/perfusión por abolición de la vasoconstricción pulmonar hipóxica.",
      "Tema: Fisiología respiratoria.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque uno de los conceptos más preguntados en fisiología respiratoria es:
¿Por qué algunos pacientes con EPOC empeoran cuando reciben demasiado oxígeno?
La clave no es la hipoxemia.
La clave es:
El aumento brusco del CO₂ tras la hiperoxia.
¿Qué está ocurriendo realmente?
La paciente presenta:
•	EPOC avanzado.
•	Hipoxemia severa.
•	Hipercapnia crónica.
Inicialmente:
•	pCO₂ = 58 mmHg.
•	pO₂ = 45 mmHg.
Después del oxígeno:
•	pCO₂ = 85 mmHg.
•	pO₂ = 120 mmHg.
Se desarrolla:
Narcosis por CO₂.
¿Qué es la vasoconstricción pulmonar hipóxica?
Normalmente cuando un alvéolo está mal ventilado:
La arteriola pulmonar que lo irriga se contrae.
Esto desvía sangre hacia:
Alvéolos mejor ventilados.
Es un mecanismo fisiológico que intenta optimizar la relación V/Q.
¿Qué ocurre al administrar mucho oxígeno?
La hipoxia alveolar desaparece.
Entonces se pierde:
La vasoconstricción pulmonar hipóxica.
Como consecuencia:
Aumenta el flujo sanguíneo hacia zonas muy mal ventiladas.
El resultado es:
Mayor desajuste ventilación/perfusión.
¿Por qué aumenta el CO₂?
Porque llega más sangre a unidades alveolares incapaces de eliminar adecuadamente el dióxido de carbono.
Por tanto:
La eliminación global de CO₂ empeora.
¿Qué pasa con el estímulo hipóxico?
Existe un efecto real sobre el impulso respiratorio.
Sin embargo:
No es el mecanismo principal.
Esta es una trampa clásica de examen.
Durante muchos años se enseñó que el problema principal era:
"Quitar el estímulo respiratorio".
Hoy sabemos que:
El principal mecanismo es el deterioro de la relación V/Q.
¿Qué papel tiene el efecto Haldane?
También contribuye.
La oxigenación de la hemoglobina reduce su capacidad para transportar CO₂.
Esto favorece:
Liberación de CO₂ al plasma.
Y contribuye al aumento de la pCO₂.
Sin embargo:
Tampoco es el mecanismo predominante.
¿Cuál es la trampa de examen?
Muchos estudiantes responden automáticamente:
Supresión del estímulo hipóxico.
Pero la evidencia fisiológica actual demuestra que el principal mecanismo es:
El empeoramiento del desajuste V/Q.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	EPOC avanzado.
2.	Administración excesiva de oxígeno.
3.	Pérdida de vasoconstricción pulmonar hipóxica.
4.	Empeoramiento de la relación V/Q.
5.	Retención de CO₂.
6.	Narcosis hipercápnica.
Perlas de examen
✅ El principal mecanismo de hipercapnia inducida por oxígeno es el aumento del desajuste V/Q.
✅ La vasoconstricción pulmonar hipóxica redistribuye flujo hacia zonas mejor ventiladas.
✅ La hiperoxia puede abolir este mecanismo compensador.
✅ El efecto Haldane contribuye al aumento del CO₂.
✅ La supresión del estímulo hipóxico existe, pero no es la causa principal.
✅ En EPOC grave se recomienda oxigenoterapia titulada.
✅ La meta habitual de saturación es aproximadamente 88-92% para evitar hiperoxia excesiva.
Referencias
• West's Respiratory Physiology.
• Guyton & Hall. Textbook of Medical Physiology.
• GOLD Report 2025.
• Harrison's Principles of Internal Medicine.
• Murray & Nadel's Textbook of Respiratory Medicine.`,
  },
  {
    id: "dr-q-320",
    examArea: "Ciencias Básicas Aplicadas a la Clínica / Farmacología cardiovascular",
    topic: "Ciencias Básicas Aplicadas a la Clínica",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas_aplicadas_a_la_clinica", "farmacologia_cardiovascular"],
    statement: "Hombre de 75 años con insuficiencia cardíaca con fracción de eyección reducida, en tratamiento crónico con digoxina, enalapril y furosemida. Consulta por náuseas, visión con halos amarillentos (xantopsia) y palpitaciones. El ECG muestra extrasístoles ventriculares frecuentes. Laboratorios: creatinina 1.1 mg/dL, K⁺ 2.8 mEq/L, Mg²⁺ 1.5 mg/dL. Se sospecha intoxicación digitálica. Desde el punto de vista farmacodinámico, ¿por qué la hipopotasemia facilita la toxicidad por digoxina en este paciente?",
    options: [
      { id: "A", label: "A", text: "Porque aumenta la eliminación renal de digoxina y genera metabolitos tóxicos." },
      { id: "B", label: "B", text: "Porque disminuye la unión de digoxina a proteínas plasmáticas aumentando la fracción libre." },
      { id: "C", label: "C", text: "Porque el potasio y la digoxina compiten por el mismo sitio de unión en la Na⁺/K⁺ ATPasa, aumentando la fijación de digoxina cuando el potasio disminuye." },
      { id: "D", label: "D", text: "Porque favorece la degradación intracelular de la Na⁺/K⁺ ATPasa." },
    ],
    correctOptionId: "C",
    explanation: "La hipopotasemia incrementa la afinidad funcional de la digoxina por la Na⁺/K⁺ ATPasa. Al existir menos potasio disponible para competir por el sitio de unión, la inhibición de la bomba aumenta y se potencia el riesgo de toxicidad.",
    keyPoints: [
      "Cuando veas: Digoxina. Hipopotasemia. Xantopsia. Arritmias.",
      "Debes pensar en: Mayor unión de digoxina a la Na⁺/K⁺ ATPasa por disminución de la competencia con el potasio.",
      "Tema: Farmacología cardiovascular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque integra:
•	Farmacología.
•	Fisiología celular.
•	Trastornos hidroelectrolíticos.
La clave no es la digoxina.
La clave es:
La hipopotasemia asociada.
¿Qué está ocurriendo realmente?
El paciente presenta:
•	Náuseas.
•	Xantopsia.
•	Extrasístoles ventriculares.
•	Hipopotasemia.
Este conjunto de hallazgos es altamente sugestivo de:
Intoxicación digitálica.
¿Cuál es el mecanismo de acción de la digoxina?
La digoxina inhibe:
La Na⁺/K⁺ ATPasa.
Esta bomba normalmente expulsa:
•	3 Na⁺ al exterior.
E introduce:
•	2 K⁺ al interior.
¿Qué ocurre cuando la bomba se inhibe?
Aumenta el sodio intracelular.
Esto reduce la actividad del:
Intercambiador Na⁺/Ca²⁺.
Como consecuencia:
Aumenta el calcio intracelular.
Y aumenta la fuerza de contracción cardíaca.
¿Dónde entra el potasio en esta historia?
El potasio y la digoxina interactúan sobre la misma bomba.
Existe una relación competitiva:
Más potasio → menos unión de digoxina.
Menos potasio → más unión de digoxina.
¿Qué ocurre en este paciente?
Tiene:
[
K^+ = 2.8\\ mEq/L
]
Por tanto:
Disminuye la competencia por la Na⁺/K⁺ ATPasa.
La digoxina logra unirse más fácilmente.
El resultado es:
Mayor inhibición de la bomba.
Y por tanto:
Mayor toxicidad.
¿Por qué aparecen arritmias?
El exceso de calcio intracelular favorece:
•	Pospotenciales tardíos.
•	Automatismo anormal.
•	Actividad desencadenada.
Lo que produce:
Arritmias ventriculares.
¿Qué papel tiene el magnesio?
La hipomagnesemia también aumenta el riesgo de:
•	Arritmias.
•	Toxicidad digitálica.
Por eso este paciente tiene:
[
Mg^{++}=1.5\\ mg/dL
]
Otro factor favorecedor.
¿Cuál es la trampa de examen?
Muchos estudiantes memorizan:
Hipopotasemia = toxicidad digitálica.
Pero no conocen el mecanismo.
La explicación fisiológica correcta es:
Menor competencia por la Na⁺/K⁺ ATPasa.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Disminuye el potasio.
2.	Menor competencia por la bomba.
3.	Mayor unión de digoxina.
4.	Mayor inhibición de Na⁺/K⁺ ATPasa.
5.	Mayor calcio intracelular.
6.	Mayor riesgo de toxicidad y arritmias.
Perlas de examen
✅ La Na⁺/K⁺ ATPasa es la diana farmacológica de la digoxina.
✅ La hipopotasemia aumenta la toxicidad digitálica.
✅ El mecanismo es farmacodinámico, no farmacocinético.
✅ Las arritmias son la complicación más temida de la intoxicación digitálica.
✅ Náuseas, vómito y xantopsia son hallazgos clásicos.
✅ La hipomagnesemia también favorece la toxicidad.
✅ En intoxicación digitálica siempre deben corregirse las alteraciones electrolíticas.
Referencias
• Katzung. Basic & Clinical Pharmacology.
• Goodman & Gilman's The Pharmacological Basis of Therapeutics.
• Harrison's Principles of Internal Medicine.
• Braunwald's Heart Disease.
• DiPiro's Pharmacotherapy.`,
  },
  {
    id: "dr-q-321",
    examArea: "Ciencias Básicas Aplicadas a la Clínica / Fisiopatología cardiovascular",
    topic: "Ciencias Básicas Aplicadas a la Clínica",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas_aplicadas_a_la_clinica", "fisiopatologia_cardiovascular"],
    statement: "Hombre de 55 años consulta por dolor torácico opresivo de 4 horas de evolución. El ECG muestra un infarto agudo de miocardio con elevación del ST en cara anteroseptal. Es llevado a intervención coronaria percutánea primaria, logrando restablecer el flujo en la arteria descendente anterior. Minutos después de la reperfusión desarrolla arritmias ventriculares, aumento brusco de biomarcadores cardíacos y deterioro transitorio de la contractilidad miocárdica regional. ¿Cuál es el mecanismo patológico celular responsable de este daño tisular paradójico?",
    options: [
      { id: "A", label: "A", text: "Activación de la vía extrínseca de coagulación con formación de microtrombos intracoronarios." },
      { id: "B", label: "B", text: "Producción masiva de especies reactivas de oxígeno con sobrecarga intracelular de calcio y daño mitocondrial." },
      { id: "C", label: "C", text: "Inhibición de la fosforilación oxidativa por disminución aguda del oxígeno intracelular." },
      { id: "D", label: "D", text: "Acumulación progresiva de cuerpos cetónicos dentro del miocito isquémico." },
    ],
    correctOptionId: "B",
    explanation: "El daño por reperfusión ocurre cuando el restablecimiento súbito del flujo sanguíneo genera una explosión de radicales libres, alteraciones del calcio intracelular y disfunción mitocondrial, produciendo lesión celular adicional a la causada por la isquemia inicial.",
    keyPoints: [
      "Cuando veas: IAM. Reperfusión exitosa. Arritmias de reperfusión. Empeoramiento paradójico inicial.",
      "Debes pensar en: Lesión por isquemia-reperfusión mediada por radicales libres y sobrecarga de calcio.",
      "Tema: Fisiopatología cardiovascular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los conceptos fisiopatológicos más importantes del infarto agudo de miocardio moderno.
La clave no es el infarto.
La clave es:
El daño aparece después de recuperar el flujo.
¿Qué está ocurriendo realmente?
Durante la oclusión coronaria ocurre:
•	Hipoxia.
•	Depleción de ATP.
•	Acidosis intracelular.
•	Alteración de membranas.
Sin embargo, cuando se abre la arteria:
No todo el daño desaparece.
Paradójicamente aparece:
Lesión por reperfusión.
¿Por qué ocurre?
Durante la isquemia las mitocondrias permanecen gravemente alteradas.
Cuando regresa el oxígeno:
Se produce una generación explosiva de especies reactivas de oxígeno (ROS).
Entre ellas:
•	Superóxido.
•	Peróxido de hidrógeno.
•	Radical hidroxilo.
¿Qué hacen los radicales libres?
Producen daño sobre:
•	Membranas celulares.
•	Proteínas.
•	ADN.
•	Mitocondrias.
Esto favorece:
Muerte celular adicional.
¿Qué ocurre con el calcio?
Durante la isquemia se altera el manejo intracelular del calcio.
Al reperfundir:
Grandes cantidades de calcio ingresan al miocito.
Se produce:
Sobrecarga intracelular de calcio.
¿Qué consecuencias tiene?
La sobrecarga de calcio favorece:
•	Hipercontractura miocárdica.
•	Disfunción mitocondrial.
•	Activación de proteasas.
•	Muerte celular.
Además facilita:
Arritmias ventriculares de reperfusión.
¿Qué papel tienen las mitocondrias?
La apertura del:
Poro de transición de permeabilidad mitocondrial.
Es uno de los eventos centrales del daño por reperfusión.
Esto conduce a:
•	Colapso energético.
•	Apoptosis.
•	Necrosis.
¿Cuáles son las manifestaciones clínicas?
Clásicamente:
Arritmias de reperfusión
Las más frecuentes.
Miocardio aturdido
Disfunción contráctil reversible.
Fenómeno de no reflujo
Persistencia de hipoperfusión microvascular.
Incremento de biomarcadores
Por daño celular adicional.
¿Por qué no es falta de oxígeno?
Porque el problema aparece precisamente:
Después de restablecer el aporte de oxígeno.
¿Cuál es la trampa de examen?
Muchos estudiantes piensan:
Más oxígeno siempre significa menos daño.
Pero fisiológicamente:
La reperfusión también puede generar lesión.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Isquemia prolongada.
2.	Reapertura del vaso.
3.	Producción masiva de ROS.
4.	Sobrecarga intracelular de calcio.
5.	Daño mitocondrial.
6.	Lesión por reperfusión.
Perlas de examen
✅ La lesión por reperfusión ocurre tras restaurar el flujo sanguíneo.
✅ Los radicales libres son protagonistas fundamentales del proceso.
✅ La sobrecarga intracelular de calcio agrava el daño celular.
✅ Las mitocondrias desempeñan un papel central en la lesión.
✅ Las arritmias ventriculares son una manifestación típica de reperfusión.
✅ El miocardio aturdido corresponde a disfunción reversible postisquémica.
✅ Reperfusión y lesión celular pueden coexistir simultáneamente.
Referencias
• Robbins & Cotran Pathologic Basis of Disease.
• Guyton & Hall. Textbook of Medical Physiology.
• Braunwald's Heart Disease.
• Harrison's Principles of Internal Medicine.
• ESC Guidelines for Acute Coronary Syndromes.`,
  },
  {
    id: "dr-q-322",
    examArea: "Ciencias Básicas Aplicadas a la Clínica / Fisiología tiroidea y farmacología endocrina",
    topic: "Ciencias Básicas Aplicadas a la Clínica",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas_aplicadas_a_la_clinica", "fisiologia_tiroidea_y_farmacologia_endoc"],
    statement: "Mujer de 35 años, previamente sana, consulta por palpitaciones, pérdida de peso, temblor fino distal, sudoración y exoftalmos. Laboratorios: TSH <0.01 mUI/L y T4 libre marcadamente elevada. Se diagnostica Enfermedad de Graves con tirotoxicosis severa. El médico residente inicia propranolol a dosis altas. Desde el punto de vista bioquímico, además del bloqueo betaadrenérgico para controlar la taquicardia y el temblor, ¿qué otro mecanismo fisiológico clave justifica la elección de propranolol sobre otros betabloqueadores?",
    options: [
      { id: "A", label: "A", text: "Inhibición de la síntesis tiroidea de T3 y T4 mediante bloqueo de la peroxidasa tiroidea." },
      { id: "B", label: "B", text: "Inhibición de la liberación de hormonas tiroideas almacenadas en el coloide." },
      { id: "C", label: "C", text: "Disminución de la conversión periférica de T4 a T3 por inhibición de la 5'-desyodasa." },
      { id: "D", label: "D", text: "Aumento de la depuración hepática de hormonas tiroideas mediante inducción enzimática." },
    ],
    correctOptionId: "C",
    explanation: "A dosis elevadas, el propranolol posee un efecto adicional particularmente útil en la tirotoxicosis: inhibe parcialmente la conversión periférica de tiroxina (T4) en triyodotironina (T3), reduciendo la concentración de la hormona metabólicamente más activa.",
    keyPoints: [
      "Cuando veas: Enfermedad de Graves. Tirotoxicosis severa. Propranolol.",
      "Debes pensar en: Bloqueo β + inhibición parcial de la conversión periférica T4 → T3.",
      "Tema: Fisiología tiroidea y farmacología endocrina.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa un efecto farmacológico frecuentemente olvidado del propranolol.
La clave no es el betabloqueo.
La clave es:
¿Por qué se prefiere propranolol en la tirotoxicosis severa?
¿Qué está ocurriendo realmente?
La paciente presenta:
•	Pérdida de peso.
•	Taquicardia.
•	Temblor.
•	Exoftalmos.
•	T4 libre muy elevada.
Todo compatible con:
Hipertiroidismo por Enfermedad de Graves.
¿Cuál es la hormona más activa?
Aunque la glándula tiroides secreta principalmente:
•	T4 (tiroxina)
La mayor parte de los efectos biológicos dependen de:
T3 (triyodotironina).
La T3 posee una actividad biológica varias veces superior a la T4.
¿Cómo se forma la T3?
Gran parte de la T3 circulante no sale directamente de la tiroides.
Se genera en tejidos periféricos mediante:
Conversión de T4 a T3.
Este proceso depende de la enzima:
5'-desyodasa.
¿Qué hace el propranolol?
Además del bloqueo β:
•	Disminuye la frecuencia cardíaca.
•	Reduce el temblor.
•	Disminuye la ansiedad.
A dosis altas también:
Inhibe parcialmente la 5'-desyodasa.
Como consecuencia:
Disminuye la formación periférica de T3.
¿Por qué esto es importante?
Porque permite reducir relativamente rápido la carga hormonal activa mientras:
•	Metimazol.
•	Propiltiouracilo.
•	Yodo.
Empiezan a ejercer su efecto.
¿Qué ocurre con la T3?
La conversión puede representarse así:
T_4 \\rightarrow T_3
El propranolol disminuye parcialmente esta transformación.
¿Por qué no todos los betabloqueadores son iguales?
Todos los betabloqueadores:
Controlan los síntomas adrenérgicos.
Pero el propranolol tiene además:
Este beneficio endocrinológico adicional.
Por eso suele ser el más utilizado en:
•	Tirotoxicosis severa.
•	Tormenta tiroidea.
¿Por qué no inhibe la síntesis hormonal?
La inhibición de la síntesis ocurre principalmente con:
•	Metimazol.
•	Propiltiouracilo.
No con propranolol.
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
"Porque disminuye la frecuencia cardíaca".
Eso es cierto, pero la pregunta solicita:
El mecanismo adicional que lo diferencia.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Graves produce exceso de T4 y T3.
2.	La T3 es la hormona más activa.
3.	La T4 se convierte periféricamente en T3.
4.	La 5'-desyodasa media esta reacción.
5.	El propranolol inhibe parcialmente esta enzima.
6.	Disminuye la producción periférica de T3.
Perlas de examen
✅ La T3 es la hormona tiroidea biológicamente más activa.
✅ La mayor parte de la T3 circulante se genera por conversión periférica de T4.
✅ El propranolol bloquea los efectos adrenérgicos de la tirotoxicosis.
✅ A dosis altas inhibe parcialmente la 5'-desyodasa.
✅ Este efecto reduce la conversión periférica de T4 a T3.
✅ El propranolol es especialmente útil en tirotoxicosis severa y tormenta tiroidea.
✅ El metimazol inhibe la síntesis hormonal, mientras que el propranolol reduce síntomas y conversión periférica.
Referencias
• Williams Textbook of Endocrinology.
• Harrison's Principles of Internal Medicine.
• Goodman & Gilman's The Pharmacological Basis of Therapeutics.
• Katzung. Basic & Clinical Pharmacology.
• American Thyroid Association Guidelines for Hyperthyroidism.`,
  },
  {
    id: "dr-q-323",
    examArea: "Ciencias Básicas Aplicadas a la Clínica / Hemostasia y farmacología de anticoagulantes",
    topic: "Ciencias Básicas Aplicadas a la Clínica",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas_aplicadas_a_la_clinica", "hemostasia_y_farmacologia_de_anticoagula"],
    statement: "Hombre de 60 años hospitalizado por tromboembolismo pulmonar, manejado con heparina no fraccionada (HNF) en infusión continua. Al sexto día de tratamiento presenta dolor súbito, frialdad, palidez y ausencia de pulsos en el miembro inferior derecho. Los laboratorios muestran descenso de plaquetas de 250,000/µL a 35,000/µL. Se sospecha trombocitopenia inducida por heparina (HIT) tipo II. ¿Cuál es el proceso inmunológico y patológico central responsable de esta enfermedad?",
    options: [
      { id: "A", label: "A", text: "Destrucción directa de plaquetas por toxicidad medular inducida por heparina." },
      { id: "B", label: "B", text: "Formación de anticuerpos IgG contra complejos heparina-factor plaquetario 4 (PF4), con activación masiva de plaquetas y generación de trombina." },
      { id: "C", label: "C", text: "Activación del complemento con hemólisis intravascular y consumo secundario de plaquetas." },
      { id: "D", label: "D", text: "Inhibición de la producción hepática de trombopoyetina por efecto directo de la heparina." },
    ],
    correctOptionId: "B",
    explanation: "La HIT tipo II es una complicación inmunológica protrombótica. Los anticuerpos IgG reconocen complejos formados entre la heparina y el factor plaquetario 4 (PF4), activando intensamente las plaquetas y favoreciendo la formación de trombos arteriales y venosos.",
    keyPoints: [
      "Cuando veas: Heparina. Caída de plaquetas >50%. Día 5-10 de tratamiento. Aparición de trombosis.",
      "Debes pensar en: Trombocitopenia inducida por heparina (HIT) tipo II.",
      "Tema: Hemostasia y farmacología de anticoagulantes.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las paradojas más importantes de la hematología:
Un paciente anticoagulado desarrolla trombosis.
La clave no es la trombocitopenia.
La clave es:
Trombocitopenia + trombosis.
¿Qué está ocurriendo realmente?
El paciente:
•	Recibe heparina.
•	Presenta caída brusca de plaquetas.
•	Desarrolla isquemia aguda de una extremidad.
Esto es altamente sugestivo de:
HIT tipo II.
¿Qué es el factor plaquetario 4 (PF4)?
El PF4 es una proteína liberada por:
Los gránulos alfa de las plaquetas.
Cuando se administra heparina:
Esta se une al PF4.
Formando complejos inmunogénicos.
¿Qué ocurre después?
El sistema inmune genera:
Anticuerpos IgG anti-heparina/PF4.
Estos anticuerpos se unen a los complejos.
¿Cómo se activan las plaquetas?
El complejo inmunológico interactúa con:
Receptores FcγIIa de las plaquetas.
Esto desencadena:
•	Activación plaquetaria masiva.
•	Liberación adicional de PF4.
•	Amplificación del proceso.
¿Cuál es la consecuencia principal?
La activación plaquetaria produce:
Generación masiva de trombina.
La trombina es el principal mediador de:
La formación de trombos.
Por ello el paciente desarrolla:
•	Trombosis venosa.
•	Trombosis arterial.
•	Isquemia aguda de extremidades.
¿Por qué bajan las plaquetas?
Porque las plaquetas son:
Consumidas durante el proceso trombótico.
Por eso aparece:
Trombocitopenia.
¿Por qué es una paradoja?
Porque intuitivamente:
Menos plaquetas debería significar más sangrado.
Pero en HIT ocurre lo contrario.
El problema principal es:
Trombosis.
No hemorragia.
¿Cuál es la cronología típica?
La HIT tipo II suele aparecer:
Entre el día 5 y el día 10 tras iniciar heparina.
Exactamente como ocurre en este caso.
¿Cuál es la conducta?
Ante sospecha de HIT:
1.	Suspender inmediatamente toda heparina.
2.	No usar HBPM.
3.	Iniciar anticoagulación alternativa.
Ejemplos:
•	Argatroban.
•	Bivalirudina.
•	Fondaparinux (según contexto clínico).
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
"La heparina destruye las plaquetas".
Pero la HIT tipo II es:
Una enfermedad inmunológica mediada por anticuerpos.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Heparina + PF4.
2.	Formación de complejos inmunogénicos.
3.	Producción de IgG.
4.	Activación plaquetaria masiva.
5.	Generación de trombina.
6.	Trombosis y consumo de plaquetas.
Perlas de examen
✅ La HIT tipo II es una reacción inmunológica mediada por IgG.
✅ El blanco inmunológico es el complejo heparina-PF4.
✅ La caída plaquetaria suele ser >50% del valor basal.
✅ Aparece típicamente entre los días 5 y 10 de exposición.
✅ La principal complicación es la trombosis, no el sangrado.
✅ La trombina es el mediador central del estado protrombótico.
✅ Ante sospecha de HIT debe suspenderse inmediatamente toda forma de heparina.
Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffman Hematology: Basic Principles and Practice.
• Goodman & Gilman's The Pharmacological Basis of Therapeutics.
• American Society of Hematology (ASH) Guidelines on HIT.`,
  },
  {
    id: "dr-q-324",
    examArea: "Ciencias Básicas Aplicadas a la Clínica / Microbiología y fisiopatología de la endocarditis infecciosa",
    topic: "Ciencias Básicas Aplicadas a la Clínica",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas_aplicadas_a_la_clinica", "microbiologia_y_fisiopatologia_de_la_end"],
    statement: "Hombre de 32 años, usuario activo de drogas intravenosas, consulta por fiebre de 39°C, escalofríos y disnea. A la auscultación presenta un soplo holosistólico en foco tricuspídeo. El ecocardiograma transesofágico revela una gran vegetación en la válvula tricúspide. Los hemocultivos reportan cocos Gram positivos en racimos, catalasa positivos y coagulasa positivos. ¿Cuál de los siguientes factores de virulencia de este microorganismo es el principal mediador de la adhesión inicial a las células endoteliales dañadas de la válvula cardíaca?",
    options: [
      { id: "A", label: "A", text: "Coagulasa." },
      { id: "B", label: "B", text: "Proteína A." },
      { id: "C", label: "C", text: "Adhesinas de superficie tipo MSCRAMMs (proteínas de unión a fibronectina y fibrinógeno)." },
      { id: "D", label: "D", text: "Alfa-toxina." },
    ],
    correctOptionId: "C",
    explanation: "El microorganismo es Staphylococcus aureus. La colonización inicial del endotelio valvular lesionado depende fundamentalmente de proteínas de adhesión de superficie (MSCRAMMs, Microbial Surface Components Recognizing Adhesive Matrix Molecules), capaces de unirse a fibronectina, fibrinógeno y otros componentes de la matriz extracelular expuesta.",
    keyPoints: [
      "Cuando veas: Usuario de drogas IV. Endocarditis derecha. Válvula tricúspide. Coco Gram positivo. Catalasa positiva. Coagulasa positiva.",
      "Debes pensar en: Staphylococcus aureus. Y cuando pregunten: Adhesión inicial. Debes pensar en: MSCRAMMs (unión a fibronectina y fibrinógeno).",
      "Tema: Microbiología y fisiopatología de la endocarditis infecciosa.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque obliga a diferenciar:
Adhesión bacteriana ≠ evasión inmune ≠ invasión tisular.
La clave no es identificar el microorganismo.
La clave es:
¿Qué le permite pegarse a la válvula?
¿Qué está ocurriendo realmente?
El paciente presenta:
•	Fiebre.
•	Soplo tricuspídeo.
•	Drogadicción IV.
•	Vegetación valvular.
Y los hemocultivos muestran:
•	Coco Gram positivo.
•	Catalasa positivo.
•	Coagulasa positivo.
Todo apunta a:
Staphylococcus aureus.
¿Cómo inicia una endocarditis?
Primero ocurre:
Lesión endotelial
La superficie valvular dañada expone:
•	Fibronectina.
•	Fibrinógeno.
•	Colágeno.
•	Factores de matriz extracelular.
Posteriormente:
Adhesión bacteriana
La bacteria se une a estas moléculas mediante proteínas especializadas.
¿Qué son las MSCRAMMs?
Son proteínas de superficie que reconocen componentes de la matriz extracelular.
Permiten la unión a:
•	Fibronectina.
•	Fibrinógeno.
•	Laminina.
•	Colágeno.
Este es el paso fundamental para:
Colonizar la válvula cardíaca.
¿Por qué son tan importantes?
Sin adhesión:
No hay vegetación.
Y sin vegetación:
No hay endocarditis establecida.
Por eso la adhesión es el evento inicial crítico.
¿Qué hace la coagulasa?
La coagulasa:
Convierte fibrinógeno en fibrina.
Favoreciendo:
•	Protección bacteriana.
•	Formación de abscesos.
•	Crecimiento de vegetaciones.
Pero ocurre después de la adhesión inicial.
¿Qué hace la proteína A?
La proteína A:
Se une a la fracción Fc de IgG.
Esto impide:
•	Opsonización.
•	Fagocitosis.
Es un mecanismo de evasión inmune.
No es el mecanismo principal de adhesión.
¿Qué hace la alfa-toxina?
Produce:
•	Daño celular.
•	Necrosis tisular.
•	Lesión de membranas.
Participa en la invasión, no en la adhesión inicial.
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
Coagulasa.
Porque asocian inmediatamente:
Staphylococcus aureus = coagulasa.
Pero la pregunta no pide identificación.
Pide:
Adhesión inicial al endotelio valvular.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Lesión endotelial.
2.	Exposición de fibronectina y fibrinógeno.
3.	Unión mediante MSCRAMMs.
4.	Colonización valvular.
5.	Formación de vegetación.
6.	Endocarditis infecciosa.
Perlas de examen
✅ La causa más frecuente de endocarditis en usuarios de drogas IV es Staphylococcus aureus.
✅ La válvula tricúspide es la más afectada en consumidores de drogas intravenosas.
✅ Las MSCRAMMs median la adhesión inicial al endotelio lesionado.
✅ La proteína A inhibe la opsonización al unirse a IgG.
✅ La coagulasa favorece la formación de fibrina alrededor de la bacteria.
✅ La adhesión es el primer paso para el desarrollo de vegetaciones infecciosas.
✅ Sin adhesión efectiva no puede establecerse la endocarditis.
Referencias
• Murray. Medical Microbiology.
• Jawetz, Melnick & Adelberg's Medical Microbiology.
• Harrison's Principles of Internal Medicine.
• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.
• Robbins & Cotran Pathologic Basis of Disease.`,
  },
  {
    id: "dr-q-325",
    examArea: "Ciencias Básicas Aplicadas a la Clínica / Fisiología celular y fibrosis quística",
    topic: "Ciencias Básicas Aplicadas a la Clínica",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas_aplicadas_a_la_clinica", "fisiologia_celular_y_fibrosis_quistica"],
    statement: "Hombre de 22 años, evaluado por episodios recurrentes de dolor epigástrico irradiado a la espalda. La tomografía evidencia calcificaciones pancreáticas compatibles con pancreatitis crónica. Además refiere tos crónica productiva desde la infancia. Ante la sospecha diagnóstica se realiza prueba de sudor, que reporta cloruros de 85 mmol/L (normal <40 mmol/L). ¿Cuál es la alteración fisiológica directa en las células ductales pancreáticas derivada del defecto genético responsable de esta enfermedad?",
    options: [
      { id: "A", label: "A", text: "Disminución de la secreción de bicarbonato y agua hacia la luz ductal, produciendo secreciones espesas y obstrucción ductal." },
      { id: "B", label: "B", text: "Aumento de la secreción de enzimas pancreáticas activadas hacia el conducto pancreático principal." },
      { id: "C", label: "C", text: "Incremento de la absorción ductal de bicarbonato con alcalinización excesiva de las secreciones pancreáticas." },
      { id: "D", label: "D", text: "Disminución de la síntesis de tripsinógeno con insuficiencia pancreática exocrina primaria." },
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta hallazgos compatibles con Fibrosis Quística. El defecto del canal CFTR altera la secreción de cloro y bicarbonato en las células ductales pancreáticas, generando secreciones viscosas que obstruyen los conductos pancreáticos y favorecen pancreatitis crónica e insuficiencia pancreática.",
    keyPoints: [
      "Cuando veas: Pancreatitis crónica en jóvenes. Tos crónica. Test de sudor positivo. Cloro elevado en sudor.",
      "Debes pensar en: Fibrosis Quística. Y en páncreas: Disminución de secreción de bicarbonato y agua.",
      "Tema: Fisiología celular y fibrosis quística.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque integra:
•	Genética.
•	Fisiología celular.
•	Gastroenterología.
•	Neumología.
La clave no es la pancreatitis.
La clave es:
Pancreatitis crónica + enfermedad pulmonar + test de sudor positivo.
¿Qué está ocurriendo realmente?
El paciente presenta:
•	Pancreatitis crónica precoz.
•	Tos productiva crónica.
•	Cloruros elevados en sudor.
Todo esto es altamente sugestivo de:
Fibrosis Quística.
¿Cuál es el defecto genético?
La enfermedad se produce por mutaciones del:
Gen CFTR.
El CFTR es un:
Canal de cloro dependiente de ATP.
Presente en múltiples epitelios.
¿Qué ocurre normalmente en el páncreas?
Las células ductales pancreáticas secretan:
•	Cloro.
•	Bicarbonato.
•	Agua.
Esto mantiene las secreciones:
Fluidas y alcalinas.
¿Qué hace el CFTR?
Favorece la salida de cloro al lumen.
Además participa indirectamente en la secreción de:
Bicarbonato.
¿Qué ocurre cuando falla?
Disminuye:
•	Secreción de cloro.
•	Secreción de bicarbonato.
•	Movimiento de agua hacia la luz.
El resultado es:
Secreciones densas y viscosas.
¿Qué sucede dentro del páncreas?
Las secreciones espesas producen:
•	Obstrucción ductal.
•	Inflamación crónica.
•	Fibrosis progresiva.
•	Calcificaciones.
Finalmente aparece:
Insuficiencia pancreática exocrina.
Y en algunos pacientes:
Pancreatitis recurrente.
¿Por qué el test de sudor es positivo?
En las glándulas sudoríparas el CFTR normalmente reabsorbe:
•	Cloro.
•	Sodio.
Cuando falla:
El sudor contiene concentraciones elevadas de cloruro.
Por eso:
[
Cl^- > 60\\ mmol/L
]
Es altamente sugestivo de fibrosis quística.
¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan:
Fibrosis quística = secreciones espesas.
Pero olvidan el mecanismo.
La alteración fisiológica primaria es:
Disminución de secreción de bicarbonato y agua por las células ductales.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Mutación CFTR.
2.	Disminución del transporte de cloro.
3.	Disminución de secreción de bicarbonato.
4.	Menor movimiento de agua.
5.	Secreciones viscosas.
6.	Obstrucción ductal y daño pancreático.
Perlas de examen
✅ El CFTR es un canal de cloro regulado por ATP.
✅ La fibrosis quística es una enfermedad autosómica recesiva.
✅ El test de sudor positivo muestra elevación del cloruro.
✅ Las secreciones pancreáticas se vuelven espesas por disminución de bicarbonato y agua.
✅ La obstrucción ductal favorece pancreatitis y fibrosis.
✅ La insuficiencia pancreática exocrina es una complicación frecuente.
✅ La combinación de enfermedad pulmonar crónica y pancreática debe hacer sospechar fibrosis quística.
Referencias
• Guyton & Hall. Textbook of Medical Physiology.
• Robbins & Cotran Pathologic Basis of Disease.
• Harrison's Principles of Internal Medicine.
• Sleisenger and Fordtran's Gastrointestinal and Liver Disease.
• Cystic Fibrosis Foundation Clinical Practice Guidelines.

</user_query>`,
  }
];
