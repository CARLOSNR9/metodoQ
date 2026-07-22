import type { TrainingQuestion } from "@/lib/questions/types";

export const UMNG_DIAGNOSTIC_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-diag-001",
    topic: "Ciencias Básicas - Genética",
    difficulty: "hard",
    statement:
      "Una aspirante a residente de cirugía plástica evalúa a un recién nacido con labio fisurado bilateral y paladar hendido, asociado a polidactilia postaxial y microftalmia. Al solicitar un cariotipo, la alteración cromosómica más probable que explica este fenotipo es:",
    options: [
      { id: "A", label: "A", text: "Trisomía 21 (Síndrome de Down)" },
      { id: "B", label: "B", text: "Trisomía 18 (Síndrome de Edwards)" },
      { id: "C", label: "C", text: "Trisomía 13 (Síndrome de Patau)" },
      { id: "D", label: "D", text: "Deleción 5p (Síndrome de Cri du Chat)" },
      { id: "E", label: "E", text: "Microdeleción 22q11.2 (Síndrome de DiGeorge)" },
    ],
    correctOptionId: "C",
    explanation:
      "La trisomía 13 (Síndrome de Patau) se caracteriza clásicamente por defectos en la línea media, incluyendo labio fisurado/paladar hendido severo, microftalmia, polidactilia (usualmente postaxial) y defectos cardíacos. La trisomía 18 se asocia más con micrognatia, occipucio prominente y superposición de los dedos. En un examen de la UMNG, el reconocimiento preciso de fenotipos genéticos es clave para las subespecialidades pediátricas y reconstructivas.",
    keyPoints: [
      "Trisomía 13: Labio/paladar hendido, microftalmia, polidactilia.",
      "Trisomía 18: Micrognatia, occipucio prominente, manos empuñadas con superposición de dedos.",
      "Identificación clínica de alteraciones de la línea media.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de genética clínica porque evalúa el reconocimiento de un fenotipo característico (malformaciones congénitas múltiples) asociado a una aneuploidía específica.

La clave no es confundir los síndromes trisómicos más frecuentes, sino recordar el patrón de malformación que domina en cada uno.
La clave es:
Defectos severos de línea media (labio/paladar hendido) + microftalmia + polidactilia = Trisomía 13 (Síndrome de Patau).

¿Qué está ocurriendo realmente?
El recién nacido presenta un patrón malformativo específico:
• Labio fisurado bilateral y paladar hendido (defecto de línea media facial).
• Microftalmia (desarrollo ocular deficiente).
• Polidactilia postaxial (dedos supernumerarios en el lado cubital).

¿Por qué la opción C es la respuesta correcta?
Este conjunto de malformaciones (particularmente los defectos severos del desarrollo del cerebro anterior y las estructuras faciales de la línea media, sumados a polidactilia) es el sello clínico distintivo del Síndrome de Patau (Trisomía 13). El reconocimiento temprano de este fenotipo guía el diagnóstico cromosómico y el pronóstico.

¿Por qué fallan las otras opciones?
• Trisomía 21 (Síndrome de Down) (A): Su fenotipo facial incluye fisuras palpebrales oblicuas hacia arriba, pliegue epicántico, puente nasal plano y macroglosia, no clásicamente defectos severos de fisura facial ni polidactilia.
• Trisomía 18 (Síndrome de Edwards) (B): Se caracteriza por micrognatia, occipucio prominente, implantación baja de pabellones auriculares, pies en mecedora y, clásicamente, manos con los dedos superpuestos (el índice sobre el medio, y el meñique sobre el anular).
• Deleción 5p (Síndrome de Cri du Chat) (D): Su principal característica es el llanto agudo similar al maullido de un gato, acompañado de microcefalia y cara de "luna llena".
• Microdeleción 22q11.2 (Síndrome de DiGeorge) (E): Presenta anomalías conotruncales del corazón, facies característica (nariz tubular), hipoplasia tímica e hipocalcemia, pero no el patrón de microftalmia con polidactilia.

¿Cuál es la trampa del examen?
Muchos estudiantes confunden los hallazgos de las tres trisomías principales (13, 18, 21).
Pero el dato decisivo es:
La trisomía 13 es "el síndrome de la línea media" y de los "números extra" (polidactilia), mientras que la 18 es "el síndrome de la superposición digital y la micrognatia".

Entonces, ¿qué debe recordarse?
La secuencia para diferenciar síndromes cromosómicos al nacer:
1. Síndrome de Patau (13): Defecto de línea media (labio leporino, holoprosencefalia), microftalmia, polidactilia. (Piensa: 13 = "P" de Patau, Paladar hendido, Polidactilia).
2. Síndrome de Edwards (18): Dedos superpuestos, micrognatia, pie en mecedora. (Piensa: 18 = E de Edwards, "Elección" = manos empuñadas).
3. Síndrome de Down (21): Hipotonía, fascies clásica, canal AV.

Perlas de examen
✅ Polidactilia + labio hendido bilateral = Trisomía 13.
✅ Dedos superpuestos + micrognatia = Trisomía 18.
✅ Reconocer fenotipos genéticos ahorra tiempo valioso en pruebas diagnósticas y orienta asesoramiento temprano.

Referencias
• Nelson Textbook of Pediatrics: Chromosomal Clinical Abnormalities.
• UpToDate: Congenital anomalies: Approach to evaluation.`,
    tags: ["Ciencias Básicas", "Genética", "Reconstructiva", "UMNG-Core"],
    university: "Universidad Militar Nueva Granada (UMNG)",
  },
  {
    id: "umng-diag-002",
    topic: "Trauma - ATLS",
    difficulty: "medium",
    statement:
      "Paciente militar masculino de 25 años ingresa al Hospital Militar Central posterior a herida por artefacto explosivo. Presenta amputación traumática del miembro inferior derecho, palidez mucocutánea severa, diaforesis, frecuencia cardíaca de 145 lpm y presión arterial no detectable. Según la clasificación de choque hemorrágico (ATLS), este paciente se encuentra en:",
    options: [
      { id: "A", label: "A", text: "Choque Grado I" },
      { id: "B", label: "B", text: "Choque Grado II" },
      { id: "C", label: "C", text: "Choque Grado III" },
      { id: "D", label: "D", text: "Choque Grado IV" },
      { id: "E", label: "E", text: "Ninguna de las anteriores, corresponde a choque neurogénico" },
    ],
    correctOptionId: "D",
    explanation:
      "El paciente presenta signos clínicos de pérdida masiva de sangre (>40% del volumen sanguíneo) indicados por una taquicardia severa (>140 lpm) y ausencia de presión arterial detectable, lo cual es patognomónico de un Choque Hemorrágico Grado IV según los protocolos ATLS. Requiere activación inmediata del protocolo de transfusión masiva y reanimación hemostática de control de daños. El distractor E evalúa la seguridad en la toma de decisiones clínicas.",
    keyPoints: [
      "Choque Grado IV: Pérdida >40%, FC >140 lpm, hipotensión severa.",
      "Manejo inmediato: Reanimación hemostática (1:1:1), control mecánico del sangrado (torniquete en contexto militar).",
    ],
    tags: ["Trauma", "ATLS", "Cirugía General", "UMNG-Core"],
    university: "Universidad Militar Nueva Granada (UMNG)",
  },
  {
    id: "umng-diag-003",
    topic: "Cirugía Plástica y Reconstructiva",
    difficulty: "hard",
    statement:
      "En el manejo inicial de un paciente de 35 años con quemaduras de segundo y tercer grado que abarcan el 45% de la superficie corporal total (SCT), la reposición de líquidos se debe guiar primordialmente para mantener un gasto urinario de:",
    options: [
      { id: "A", label: "A", text: "0.1 a 0.2 ml/kg/hr" },
      { id: "B", label: "B", text: "0.5 ml/kg/hr (0.5 a 1.0 ml/kg/hr)" },
      { id: "C", label: "C", text: "1.5 a 2.0 ml/kg/hr" },
      { id: "D", label: "D", text: "Mayor a 3.0 ml/kg/hr" },
      { id: "E", label: "E", text: "La reposición se guía exclusivamente por la presión venosa central, no por el gasto urinario" },
    ],
    correctOptionId: "B",
    explanation:
      "Según las guías internacionales para el manejo del paciente gran quemado (incluyendo los lineamientos del HMC), la meta de reanimación hídrica (ej. Fórmula de Parkland ajustada) en adultos es mantener un gasto urinario en el rango de 0.5 ml/kg/hr. Un gasto menor indica reanimación insuficiente (riesgo de lesión renal aguda), y un gasto significativamente mayor indica sobre-reanimación (riesgo de edema pulmonar y síndrome compartimental abdominal o de extremidades).",
    keyPoints: [
      "Meta de gasto urinario en adulto gran quemado: 0.5 ml/kg/hr.",
      "La sobre-reanimación es tan deletérea como la sub-reanimación.",
      "El quinto distractor (E) es un error conceptual crítico que debe descartarse inmediatamente.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica del manejo de trauma térmico porque evalúa el conocimiento de las metas de reanimación fisiológicas, superando el simple cálculo memorístico de fórmulas (como Parkland).

La clave no es saber qué volumen inicial administrar, sino cómo titular ese volumen hora tras hora.
La clave es:
El gasto urinario (0.5 ml/kg/hr en adultos) es el indicador clínico de oro para la perfusión tisular y guía los ajustes en los líquidos del gran quemado.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre adulto de 35 años.
• Quemaduras extensas (45% SCT).
• Al iniciar la reanimación con cristaloides (generalmente Lactato de Ringer), se debe monitorizar estrictamente la respuesta del cuerpo a ese volumen para evitar complicaciones por exceso o defecto.

¿Por qué la opción B es la respuesta correcta?
La meta universal para la reanimación hídrica del paciente adulto gran quemado es lograr y mantener un gasto urinario de 0.5 ml/kg/hr. Este volumen demuestra que el gasto cardíaco y la presión de perfusión a los órganos vitales (riñones) son adecuados, minimizando la carga hídrica innecesaria. Si la orina disminuye de ese valor, se aumenta el goteo; si sube de ese valor, se disminuye.

¿Por qué fallan las otras opciones?
• 0.1 a 0.2 ml/kg/hr (A): Es francamente oliguria severa. Indica hipoperfusión tisular, perpetuando el choque hipovolémico distributivo de la quemadura, con alto riesgo de necrosis tubular aguda.
• 1.5 a 2.0 ml/kg/hr (C) y Mayor a 3.0 ml/kg/hr (D): Son metas inapropiadamente altas para un adulto quemado (aunque podrían tolerarse temporalmente en niños pequeños o quemaduras eléctricas con mioglobinuria masiva para "lavar" el riñón, pero NO es la regla general). En un adulto quemado térmico típico, estos rangos generan sobre-reanimación, "resuscitation morbidity" (edema pulmonar masivo, síndrome compartimental abdominal).
• Guiarse por presión venosa central (E): La PVC ya no es un indicador confiable de precarga o respuesta a volumen. El gasto urinario sigue siendo el marcador clínico más dinámico, sensible y accesible.

¿Cuál es la trampa del examen?
Muchos estudiantes aprenden la fórmula de Parkland y creen que los líquidos calculados se deben pasar "sí o sí".
Pero el dato decisivo es:
Las fórmulas solo calculan un punto de partida. La reanimación real se ajusta hora tras hora usando la diuresis horaria. Más líquidos no siempre es mejor; el "fluid creep" (sobrecarga de líquidos) es una causa de muerte iatrogénica común hoy en día.

Entonces, ¿qué debe recordarse?
La secuencia en el manejo inicial de líquidos del gran quemado:
1. Calcular necesidad inicial con fórmula (ej: 2 a 4 ml x kg x %SCT).
2. Dar el 50% en las primeras 8 horas post-quemadura.
3. Instalar sonda Foley para medir diuresis horaria estricta.
4. Ajustar el volumen: Meta en adultos es 0.5 ml/kg/h. (En niños < 30 kg es 1 ml/kg/h).
5. Si orina poco, se aumenta el líquido. Si orina mucho, se disminuye.

Perlas de examen
✅ Adulto gran quemado = Meta diuresis 0.5 ml/kg/hr.
✅ Niño quemado (<30kg) = Meta diuresis 1.0 ml/kg/hr.
✅ Quemadura eléctrica de alto voltaje (riesgo de rabdomiólisis) = Meta diuresis 1 a 2 ml/kg/hr (generalmente de 75-100 ml/hr).
✅ La diuresis horaria manda sobre cualquier fórmula preestablecida.

Referencias
• Advanced Trauma Life Support (ATLS) Guidelines: Thermal Injuries.
• American Burn Association (ABA) Guidelines for Burn Resuscitation.
• UpToDate: Treatment of severe burn injury in adults.`,
    tags: ["Cirugía Plástica", "Quemados", "Fisiología", "UMNG-Core"],
    university: "Universidad Militar Nueva Granada (UMNG)",
  },
];
