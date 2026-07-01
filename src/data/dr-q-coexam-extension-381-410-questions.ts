import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Banco universal MetodoQ · Dr. Q — extensión coexam dr-q-381 a dr-q-410.
 * Bloque multi-universidad PREGUNTA 1–30 — adición neta al banco.
 */
export const DR_Q_COEXAM_EXTENSION_381_410_QUESTIONS: TrainingQuestion[] = [
  {
    id: "dr-q-381",
    examArea: "HEMATOLOGÍA",
    topic: "HEMATOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","hematologia"],
    statement: "Hombre de 25 años, de raza negra, consulta por fatiga para realizar actividades cotidianas. Refiere episodios recientes de hematoquecia, por los cuales recibió tratamiento por enteritis enterohemorrágica. El hemograma reporta: hemoglobina 9 g/dL, hematocrito 27% y volumen corpuscular medio (VCM) de 60 fL.\n¿Cuál es el diagnóstico más probable y cuál es la causa de la anemia?",
    options: [
      { id: "A", label: "A", text: "Anemia de enfermedad crónica secundaria a infección intestinal." },
      { id: "B", label: "B", text: "Anemia ferropénica secundaria a pérdidas gastrointestinales." },
      { id: "C", label: "C", text: "Anemia de células falciformes con crisis aplásica." },
      { id: "D", label: "D", text: "Talasemia menor." },
    ],
    correctOptionId: "B",
    explanation: "La presencia de una anemia microcítica (VCM 60 fL) en un paciente con hemorragia digestiva baja reciente orienta principalmente a una anemia por deficiencia de hierro secundaria a pérdidas crónicas o agudas de sangre. Aunque la raza negra aumenta la prevalencia de hemoglobinopatías, el contexto clínico y los índices hematimétricos hacen más probable una anemia ferropénica.",
    keyPoints: [
      "Cuando veas: Hemoglobina baja. VCM <80 fL. Hematoquecia. Fatiga.",
      "Debes pensar en: Anemia ferropénica por pérdidas gastrointestinales.",
      "Tema: Anemias microcíticas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el abordaje etiológico de las anemias microcíticas.
La clave no es la raza del paciente.
La clave es:
La hematoquecia.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Hb 9 g/dL.
• VCM 60 fL.
• Sangrado digestivo reciente.
Esto corresponde a:
Anemia microcítica.
¿Cuál es la causa más frecuente en este contexto?
La pérdida de sangre produce:
Déficit progresivo de hierro.
Como consecuencia aparece:
Anemia ferropénica.
¿Por qué el VCM está disminuido?
Porque la deficiencia de hierro ocasiona:
Disminución de la síntesis de hemoglobina.
Esto genera:
Eritrocitos pequeños e hipocrómicos.
¿Por qué NO anemia falciforme?
Porque la anemia drepanocítica generalmente es:
Normocítica.
Además suele acompañarse de:
• Crisis vasooclusivas.
• Ictericia.
• Reticulocitosis.
¿Por qué NO talasemia menor?
Aunque también produce microcitosis importante:
No explica la hematoquecia reciente.
Además suele encontrarse:
Microcitosis desproporcionada con hemoglobina relativamente conservada y recuento de eritrocitos elevado.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Paciente de raza negra."
Y responden:
Anemia falciforme.
Sin embargo:
El dato decisivo es:
La hemorragia digestiva asociada a una anemia microcítica.
Esto orienta a:
Ferropenia.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar anemia microcítica.
2.	Buscar pérdidas de sangre.
3.	Sospechar deficiencia de hierro.
4.	Confirmar con ferritina y perfil férrico.
5.	Tratar la causa del sangrado e iniciar suplementación con hierro.
Perlas de examen
✅ La causa más frecuente de anemia ferropénica en adultos es la pérdida crónica de sangre.
✅ Ferritina baja es el marcador más específico de deficiencia de hierro.
✅ TIBC elevada y saturación de transferrina baja apoyan el diagnóstico.
✅ Todo hombre adulto con anemia ferropénica requiere estudio del tracto gastrointestinal.
✅ La anemia ferropénica produce microcitosis e hipocromía.
✅ La anemia falciforme suele ser normocítica.
✅ La talasemia menor presenta microcitosis marcada con ferritina normal.
Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• UpToDate: Iron Deficiency Anemia in Adults.
• British Society of Gastroenterology Guidelines on Iron Deficiency Anemia.`,
  },
  {
    id: "dr-q-382",
    examArea: "NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neumologia"],
    statement: "Mujer de 60 años, tabaquista activa con índice tabáquico de 40 paquetes-año, consulta por tos seca crónica y disnea progresiva, con mMRC 3. Niega pérdida de peso, hemoptisis, diaforesis nocturna o astenia. La radiografía de tórax no muestra lesiones parenquimatosas ni cavitaciones. Se realiza espirometría que reporta:\n• VEF1/CVF: 0.58 (posbroncodilatador)\n• CVF: 82% del predicho\n• VEF1: 58% del predicho\n¿Cuál es el diagnóstico y el tratamiento más adecuado?",
    options: [
      { id: "A", label: "A", text: "Asma persistente moderada; corticosteroide inhalado en monoterapia." },
      { id: "B", label: "B", text: "EPOC GOLD 2, Grupo B; broncodilatador de acción prolongada dual (LABA + LAMA)." },
      { id: "C", label: "C", text: "Tuberculosis pulmonar; esquema HRZE." },
      { id: "D", label: "D", text: "Fibrosis pulmonar idiopática; pirfenidona." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta una limitación persistente del flujo aéreo (VEF1/CVF <0.70 posbroncodilatador), compatible con EPOC. El VEF1 del 58% corresponde a obstrucción moderada (GOLD 2). Debido a que presenta disnea importante (mMRC 3) y no refiere exacerbaciones frecuentes, se clasifica como Grupo B, cuyo tratamiento inicial recomendado es doble broncodilatación con LABA/LAMA.",
    keyPoints: [
      "Cuando veas: Tabaquismo. Tos crónica. Disnea. VEF1/CVF <0.70.",
      "Debes pensar en: EPOC.",
      "Tema: Enfermedad pulmonar obstructiva crónica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la interpretación de la espirometría y la clasificación GOLD.
La clave no es el tabaquismo.
La clave es:
La relación VEF1/CVF.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Tos crónica.
• Disnea progresiva.
• Importante antecedente tabáquico.
La espirometría muestra:
VEF1/CVF = 0.58.
Esto confirma:
Obstrucción persistente del flujo aéreo.
¿Cuál es la gravedad?
VEF1 = 58% del predicho.
Corresponde a:
GOLD 2 (50-79%).
¿Cómo se clasifica clínicamente?
Tiene:
• mMRC 3.
• No exacerbaciones frecuentes.
Esto corresponde a:
Grupo B.
¿Cuál es el tratamiento inicial?
Las guías GOLD actuales recomiendan:
LABA + LAMA.
Ejemplos:
• Tiotropio + olodaterol.
• Umeclidinio + vilanterol.
• Glicopirronio + indacaterol.
¿Qué otras medidas son obligatorias?
• Suspensión completa del tabaquismo.
• Vacunación contra influenza.
• Vacunación antineumocócica.
• Rehabilitación pulmonar.
• Educación sobre técnica inhalatoria.
¿Por qué NO corticoide inhalado solo?
Porque:
No es tratamiento inicial del EPOC.
Además:
Los corticosteroides inhalados se reservan para pacientes con exacerbaciones frecuentes y eosinofilia elevada o coexistencia con asma.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Tos crónica."
Y responden:
Asma.
Sin embargo:
El dato decisivo es:
La obstrucción fija en una fumadora con VEF1/CVF <0.70.
Esto orienta a:
EPOC.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar obstrucción (VEF1/CVF <0.70).
2.	Clasificar GOLD según VEF1.
3.	Clasificar el grupo clínico.
4.	Iniciar LABA/LAMA.
5.	Indicar suspensión del tabaquismo y rehabilitación pulmonar.
Perlas de examen
✅ El diagnóstico de EPOC requiere VEF1/CVF posbroncodilatador <0.70.
✅ VEF1 de 58% corresponde a GOLD 2.
✅ mMRC ≥2 clasifica al paciente como sintomático.
✅ Grupo B: tratamiento inicial con doble broncodilatación (LABA/LAMA).
✅ La cesación del tabaquismo es la única intervención que modifica la progresión de la enfermedad.
✅ Los corticosteroides inhalados no son de primera línea en todos los pacientes con EPOC.
✅ La rehabilitación pulmonar mejora la capacidad funcional y la calidad de vida.
Referencias
• GOLD Report 2025.
• Harrison's Principles of Internal Medicine.
• Murray & Nadel's Textbook of Respiratory Medicine.
• UpToDate: Stable COPD in Adults.
• ERS/ATS Clinical Practice Guidelines.`,
  },
  {
    id: "dr-q-383",
    examArea: "MEDICINA PREVENTIVA - NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neumologia"],
    statement: "Paciente de 60 años, fumador activo desde hace 30 años, con consumo promedio de medio paquete de cigarrillos al día. Niega síntomas respiratorios y consulta para valoración preventiva.\n¿Cuál es su índice paquete-año (IPA) y cuál es la medida de salud pública más apropiada?",
    options: [
      { id: "A", label: "A", text: "IPA: 15 paquetes-año. Solicitar tomografía de tórax de alta resolución." },
      { id: "B", label: "B", text: "IPA: 15 paquetes-año. Realizar desparasitación anual." },
      { id: "C", label: "C", text: "IPA: 15 paquetes-año. Solicitar tomografía de tórax de baja dosis de radiación." },
      { id: "D", label: "D", text: "IPA: 15 paquetes-año. Administrar vacunación contra Haemophilus influenzae tipo b." },
    ],
    correctOptionId: "C",
    explanation: "El índice paquete-año (IPA) se calcula multiplicando el número de paquetes consumidos al día por los años de tabaquismo.\nIPA = 0.5 paquetes/día × 30 años = 15 paquetes-año.\nEn Colombia y de acuerdo con las recomendaciones internacionales, la tomografía de tórax de baja dosis (LDCT) es el estudio de tamización recomendado para personas con alto riesgo de cáncer de pulmón. Aunque clásicamente el beneficio demostrado corresponde a pacientes con ≥20 paquetes-año, entre 50 y 80 años y fumadores activos o que dejaron de fumar hace menos de 15 años, dentro de las opciones planteadas esta es la única intervención de tamización apropiada relacionada con el tabaquismo.",
    keyPoints: [
      "Cuando veas: Fumador crónico. Edad mayor de 50 años. Consulta preventiva.",
      "Debes pensar en: Calcular el índice paquete-año.",
      "Tema: Tamización para cáncer de pulmón.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el cálculo del índice paquete-año y las medidas de prevención en el fumador.
La clave no es la edad.
La clave es:
Calcular correctamente el IPA.
¿Cómo se calcula?
IPA = (Paquetes/día) × (Años fumando)
En este caso:
• 0.5 paquetes/día.
• 30 años.
Resultado:
IPA = 15 paquetes-año.
¿Qué examen se utiliza para tamización?
La respuesta correcta es:
Tomografía de tórax de baja dosis de radiación.
¿Por qué NO TAC de alta resolución?
Porque la TACAR está indicada para:
• Enfermedad pulmonar intersticial.
• Bronquiectasias.
• Algunas enfermedades ocupacionales.
No para tamización de cáncer de pulmón.
¿Por qué NO vacunación contra Haemophilus influenzae tipo b?
Porque la vacuna Hib hace parte del esquema infantil y no está indicada como estrategia preventiva rutinaria en adultos fumadores inmunocompetentes.
¿Por qué NO desparasitación?
No existe indicación de desparasitación anual por el antecedente de tabaquismo.
¿Cuál es la trampa de examen?
Muchos estudiantes calculan:
30 paquetes-año.
Olvidando que el paciente fuma:
Medio paquete diario.
Entonces:
0.5 × 30 = 15 paquetes-año.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Calcular el IPA.
2.	Identificar si cumple criterios de tamización.
3.	Elegir tomografía de baja dosis.
4.	Promover cesación del tabaquismo.
Perlas de examen
✅ IPA = paquetes/día × años fumando.
✅ Medio paquete durante 30 años = 15 paquetes-año.
✅ La TAC de baja dosis es el estudio de tamización para cáncer de pulmón.
✅ La TAC de alta resolución no se utiliza para tamización.
✅ La cesación del tabaquismo continúa siendo la intervención más efectiva para disminuir la mortalidad.
✅ El tamizaje debe acompañarse siempre de consejería para dejar de fumar.
✅ Las guías actuales recomiendan LDCT en adultos de alto riesgo (habitualmente ≥20 paquetes-año, según la guía utilizada).
Referencias
• USPSTF Recommendation Statement: Lung Cancer Screening.
• NCCN Guidelines: Lung Cancer Screening.
• GOLD Report 2025.
• Harrison's Principles of Internal Medicine.
• Ministerio de Salud y Protección Social de Colombia. Guías de promoción y mantenimiento de la salud.`,
  },
  {
    id: "dr-q-384",
    examArea: "MEDICINA INTERNA - NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neumologia"],
    statement: "Varón de 67 años, sin antecedentes patológicos de importancia, consulta por cuadro de una semana de evolución consistente en tos, fiebre hasta de 39 °C y malestar general. La radiografía de tórax evidencia consolidación basal izquierda. Durante la estancia en urgencias presenta un episodio de desaturación que responde a oxígeno suplementario por cánula nasal a 2 L/min. Niega hospitalizaciones recientes, uso de antibióticos en los últimos 90 días o contacto con instituciones de salud.\n¿Cuál es la mejor estrategia terapéutica?",
    options: [
      { id: "A", label: "A", text: "Amoxicilina oral y egreso inmediato." },
      { id: "B", label: "B", text: "Piperacilina/tazobactam más vancomicina intravenosa." },
      { id: "C", label: "C", text: "Hospitalización en sala general, oxigenoterapia y ceftriaxona intravenosa asociada a azitromicina." },
      { id: "D", label: "D", text: "Oseltamivir y observación." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta una neumonía adquirida en la comunidad (NAC) que requiere hospitalización por la necesidad de oxígeno suplementario. Al no presentar factores de riesgo para microorganismos resistentes como Pseudomonas aeruginosa o Staphylococcus aureus resistente a meticilina (SAMR), el tratamiento empírico recomendado es un β-lactámico intravenoso asociado a un macrólido.",
    keyPoints: [
      "Cuando veas: Consolidación pulmonar. Hipoxemia. Sin hospitalización reciente. Sin antibióticos recientes.",
      "Debes pensar en: Neumonía adquirida en la comunidad.",
      "Tema: Neumonía adquirida en la comunidad.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el tratamiento empírico de la NAC.
La clave no es la consolidación.
La clave es:
La ausencia de factores de riesgo para bacterias multirresistentes.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Fiebre.
• Consolidación radiológica.
• Hipoxemia.
Esto confirma:
Neumonía adquirida en la comunidad.
¿Requiere hospitalización?
Sí.
Porque necesita:
Oxígeno suplementario.
¿Cuál es el tratamiento empírico recomendado?
En paciente hospitalizado en sala general:
• Ceftriaxona IV.
Más:
• Azitromicina IV o VO.
Como alternativa puede utilizarse:
Una fluoroquinolona respiratoria en monoterapia cuando exista contraindicación para β-lactámicos.
¿Por qué NO usar piperacilina/tazobactam?
Porque el paciente:
• No tiene hospitalización reciente.
• No recibió antibióticos recientemente.
• No presenta factores de riesgo para Pseudomonas.
¿Por qué agregar un macrólido?
Porque proporciona cobertura para:
Patógenos atípicos.
Como:
• Mycoplasma pneumoniae.
• Chlamydophila pneumoniae.
• Legionella pneumophila.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Desaturación."
Y responden:
Antibióticos de amplio espectro antipseudomónicos.
Sin embargo:
El dato decisivo es:
Que se trata de una NAC sin factores de riesgo para microorganismos resistentes.
Esto orienta a:
β-lactámico + macrólido.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar NAC.
2.	Valorar necesidad de hospitalización.
3.	Identificar factores de riesgo para gérmenes resistentes.
4.	Iniciar ceftriaxona + azitromicina.
5.	Administrar oxígeno y medidas de soporte.
Perlas de examen
✅ La necesidad de oxígeno es un criterio frecuente de hospitalización.
✅ Ceftriaxona + azitromicina es el esquema clásico para NAC hospitalizada en sala general.
✅ No debe cubrirse rutinariamente Pseudomonas ni SAMR.
✅ Los macrólidos cubren microorganismos atípicos.
✅ Deben obtenerse hemocultivos y, cuando sea posible, cultivo de esputo antes del inicio de antibióticos si no retrasan el tratamiento.
✅ La reevaluación clínica debe realizarse a las 48-72 horas.
✅ El uso innecesario de antibióticos de amplio espectro favorece la resistencia bacteriana.
Referencias
• IDSA/ATS Clinical Practice Guideline for Community-Acquired Pneumonia.
• Harrison's Principles of Internal Medicine.
• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.
• UpToDate: Treatment of Community-Acquired Pneumonia in Adults.
• Guía de Práctica Clínica Colombiana para Neumonía Adquirida en la Comunidad.`,
  },
  {
    id: "dr-q-385",
    examArea: "ORTOPEDIA - ONCOLOGÍA",
    topic: "ORTOPEDIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ortopedia"],
    statement: "Adolescente de 16 años consulta por gonalgia derecha de 4 meses de evolución, de predominio nocturno y progresiva. Refiere además dificultad para aumentar de peso a pesar de realizar dieta hiperproteica y entrenamiento físico regular. Inicialmente se realiza radiografía de rodilla, la cual no evidencia alteraciones. Posteriormente, se solicita radiografía de fémur que muestra una lesión lítica en la metáfisis distal del fémur asociada a reacción perióstica en \"rayos de sol\".\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Sarcoma de Ewing." },
      { id: "B", label: "B", text: "Osteocondroma." },
      { id: "C", label: "C", text: "Osteosarcoma." },
      { id: "D", label: "D", text: "Quiste óseo aneurismático." },
    ],
    correctOptionId: "C",
    explanation: "El osteosarcoma es el tumor óseo maligno primario más frecuente en adolescentes. Se localiza con mayor frecuencia en las metáfisis de los huesos largos, especialmente alrededor de la rodilla (fémur distal y tibia proximal). La reacción perióstica en \"rayos de sol\" y el triángulo de Codman son hallazgos radiográficos clásicos.",
    keyPoints: [
      "Cuando veas: Adolescente. Dolor óseo progresivo. Lesión metafisaria. Reacción perióstica en \"rayos de sol\".",
      "Debes pensar en: Osteosarcoma.",
      "Tema: Tumores óseos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el tumor óseo maligno más frecuente en adolescentes.
La clave no es el dolor de rodilla.
La clave es:
La reacción perióstica.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Adolescente.
• Dolor progresivo.
• Lesión en metáfisis distal del fémur.
• Imagen en "rayos de sol".
Esto corresponde clásicamente a:
Osteosarcoma.
¿Por qué aparece la imagen en "rayos de sol"?
Porque el tumor produce:
Formación agresiva de hueso nuevo.
Generando espículas óseas que irradian desde la cortical.
¿Qué otros hallazgos son clásicos?
• Triángulo de Codman.
• Destrucción cortical.
• Masa de tejidos blandos.
¿Cuál es la localización más frecuente?
Alrededor de la rodilla:
• Metáfisis distal del fémur.
• Metáfisis proximal de la tibia.
¿Por qué NO sarcoma de Ewing?
Porque el sarcoma de Ewing típicamente:
• Afecta la diáfisis.
• Produce reacción perióstica en "capas de cebolla" (onion-skin).
¿Por qué NO osteocondroma?
Porque es un tumor benigno con:
Exostosis ósea.
No produce:
Lesión lítica agresiva ni reacción en rayos de sol.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Adolescente."
Y responden:
Sarcoma de Ewing.
Sin embargo:
El dato decisivo es:
La lesión metafisaria con reacción perióstica en "rayos de sol".
Esto orienta a:
Osteosarcoma.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la edad.
2.	Localizar la lesión.
3.	Reconocer el patrón radiológico.
4.	Diagnosticar osteosarcoma.
5.	Confirmar con biopsia antes de cualquier tratamiento definitivo.
Perlas de examen
✅ El osteosarcoma es el tumor óseo maligno primario más frecuente en adolescentes.
✅ La localización clásica es la metáfisis distal del fémur.
✅ La reacción perióstica en "rayos de sol" es altamente sugestiva.
✅ El triángulo de Codman es otro hallazgo radiográfico característico.
✅ La biopsia debe realizarse por el equipo de oncología ortopédica.
✅ La TAC de tórax hace parte de la estadificación por la alta frecuencia de metástasis pulmonares.
✅ El tratamiento consiste en quimioterapia neoadyuvante seguida de resección quirúrgica y quimioterapia adyuvante.
Referencias
• Campbell's Operative Orthopaedics.
• DeVita, Hellman, and Rosenberg's Cancer: Principles & Practice of Oncology.
• AAOS Comprehensive Orthopaedic Review.
• NCCN Guidelines: Bone Cancer.
• UpToDate: Osteosarcoma: Epidemiology, Pathology, Clinical Presentation, and Diagnosis.`,
  },
  {
    id: "dr-q-386",
    examArea: "ORTOPEDIA - ONCOLOGÍA",
    topic: "ORTOPEDIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ortopedia"],
    statement: "Adolescente de 14 años consulta por dolor progresivo en el tercio medio del muslo izquierdo de 3 meses de evolución, que inicialmente aparecía con la actividad física, pero actualmente también se presenta en reposo y durante la noche. Refiere pérdida de peso de 4 kg en los últimos dos meses y episodios febriles ocasionales. Al examen físico presenta aumento de volumen y dolor a la palpación sobre la diáfisis femoral. La radiografía evidencia una lesión osteolítica diafisaria con reacción perióstica laminada en \"capas de cebolla\".\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Osteosarcoma." },
      { id: "B", label: "B", text: "Sarcoma de Ewing." },
      { id: "C", label: "C", text: "Osteomielitis crónica." },
      { id: "D", label: "D", text: "Osteocondroma." },
    ],
    correctOptionId: "B",
    explanation: "La reacción perióstica en \"capas de cebolla\" (onion-skin) es un hallazgo radiológico clásico del sarcoma de Ewing. Este tumor maligno afecta principalmente a niños y adolescentes, con predilección por la diáfisis de los huesos largos y puede acompañarse de síntomas constitucionales como fiebre y pérdida de peso.",
    keyPoints: [
      "Cuando veas: Adolescente. Dolor óseo. Lesión diafisaria. Reacción perióstica en \"capas de cebolla\".",
      "Debes pensar en: Sarcoma de Ewing.",
      "Tema: Tumores óseos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la diferenciación entre los dos tumores óseos malignos más preguntados en los exámenes.
La clave no es el dolor.
La clave es:
La localización del tumor y el patrón radiológico.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Adolescente.
• Lesión en la diáfisis.
• Reacción perióstica laminada.
• Síntomas constitucionales.
Esto corresponde clásicamente a:
Sarcoma de Ewing.
¿Por qué aparece la imagen en "capas de cebolla"?
Porque existe:
Elevación repetitiva del periostio por el rápido crecimiento tumoral.
Lo que produce:
Depósitos concéntricos de hueso nuevo.
¿Dónde aparece con mayor frecuencia?
• Diáfisis del fémur.
• Tibia.
• Húmero.
• Pelvis.
¿Qué alteración genética es característica?
La translocación:
t(11;22)(q24;q12)
Que origina el gen de fusión:
EWSR1-FLI1.
¿Por qué NO osteosarcoma?
Porque el osteosarcoma afecta principalmente:
La metáfisis.
Y produce:
Reacción perióstica en "rayos de sol" y triángulo de Codman.
¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan:
"Adolescente + tumor óseo."
Pero olvidan diferenciar:
Metáfisis versus diáfisis.
La regla de examen es:
👉 Metáfisis + rayos de sol = Osteosarcoma.
👉 Diáfisis + capas de cebolla = Sarcoma de Ewing.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la edad.
2.	Localizar la lesión.
3.	Reconocer la reacción perióstica.
4.	Diagnosticar sarcoma de Ewing.
5.	Confirmar mediante biopsia y estudio molecular.
Perlas de examen
✅ La reacción en "capas de cebolla" es el hallazgo radiográfico clásico del sarcoma de Ewing.
✅ El sarcoma de Ewing compromete principalmente la diáfisis de los huesos largos.
✅ Puede simular una osteomielitis por presentar fiebre y elevación de reactantes de fase aguda.
✅ La translocación t(11;22) es característica del tumor.
✅ Las metástasis pulmonares y óseas son frecuentes al diagnóstico.
✅ El tratamiento incluye quimioterapia neoadyuvante, cirugía y/o radioterapia.
✅ La biopsia debe realizarse antes del tratamiento definitivo.
Referencias
• Campbell's Operative Orthopaedics.
• DeVita, Hellman, and Rosenberg's Cancer: Principles & Practice of Oncology.
• AAOS Comprehensive Orthopaedic Review.
• NCCN Guidelines: Bone Cancer.
• UpToDate: Ewing Sarcoma: Clinical Features, Diagnosis, and Staging.`,
  },
  {
    id: "dr-q-387",
    examArea: "ORTOPEDIA - PEDIATRÍA",
    topic: "ORTOPEDIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ortopedia"],
    statement: "Preadolescente de 13 años, futbolista de alto rendimiento, consulta por dolor progresivo en la cara anterior de la rodilla derecha de 3 meses de evolución. Refiere aumento del dolor posterior a los entrenamientos, al correr, saltar y subir escaleras. Al examen físico presenta dolor exquisito a la palpación de la tuberosidad tibial anterior, con discreto edema localizado. Se solicita radiografía lateral de rodilla.\n¿Qué hallazgo radiográfico esperaría encontrar?",
    options: [
      { id: "A", label: "A", text: "Lesión lítica metafisaria con reacción perióstica en \"rayos de sol\"." },
      { id: "B", label: "B", text: "Fragmentación e irregularidad de la tuberosidad tibial anterior con edema de tejidos blandos." },
      { id: "C", label: "C", text: "Reacción perióstica en \"capas de cebolla\" en la diáfisis tibial." },
      { id: "D", label: "D", text: "Ensanchamiento del espacio articular con erosiones marginales." },
    ],
    correctOptionId: "B",
    explanation: "La enfermedad de Osgood-Schlatter corresponde a una apofisitis por tracción de la tuberosidad tibial anterior secundaria a la tracción repetitiva del tendón rotuliano durante el crecimiento. La radiografía suele mostrar fragmentación, irregularidad y/o osículos en la tuberosidad tibial anterior, asociados a aumento del volumen de los tejidos blandos.",
    keyPoints: [
      "Cuando veas: Adolescente deportista. Dolor anterior de rodilla. Dolor en tuberosidad tibial. Empeora con saltos y carrera.",
      "Debes pensar en: Enfermedad de Osgood-Schlatter.",
      "Tema: Lesiones por sobreuso en adolescentes.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la causa más frecuente de dolor anterior de rodilla en adolescentes deportistas.
La clave no es el dolor.
La clave es:
La localización del dolor.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Adolescente.
• Deportista.
• Dolor en tuberosidad tibial.
• Dolor posterior al ejercicio.
Esto corresponde a:
Enfermedad de Osgood-Schlatter.
¿Qué ocurre fisiopatológicamente?
Durante el crecimiento:
La tracción repetitiva del tendón rotuliano produce:
Microavulsiones de la apófisis tibial.
¿Qué muestra la radiografía?
Los hallazgos clásicos son:
• Fragmentación de la tuberosidad tibial anterior.
• Irregularidad de la apófisis.
• Osículos de osificación.
• Aumento de partes blandas.
¿Cuál es el tratamiento?
Principalmente conservador:
• Disminución temporal de la actividad deportiva.
• Hielo.
• AINE según necesidad.
• Estiramientos del cuádriceps e isquiotibiales.
• Fisioterapia.
¿Por qué NO osteosarcoma?
Porque el osteosarcoma produce:
Lesión metafisaria agresiva con reacción en "rayos de sol".
¿Por qué NO sarcoma de Ewing?
Porque el sarcoma de Ewing produce:
Lesión diafisaria con reacción perióstica en "capas de cebolla".
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Dolor de rodilla."
Y responden:
Lesión meniscal.
Sin embargo:
El dato decisivo es:
Dolor localizado sobre la tuberosidad tibial en un adolescente deportista.
Esto orienta a:
Osgood-Schlatter.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Adolescente deportista.
2.	Dolor anterior de rodilla.
3.	Dolor sobre la tuberosidad tibial.
4.	Radiografía con fragmentación de la tuberosidad.
5.	Manejo conservador.
Perlas de examen
✅ Es la causa más frecuente de dolor anterior de rodilla en adolescentes deportistas.
✅ Corresponde a una apofisitis por tracción de la tuberosidad tibial anterior.
✅ Afecta principalmente a adolescentes entre 10 y 15 años.
✅ La radiografía muestra fragmentación e irregularidad de la tuberosidad tibial.
✅ El tratamiento suele ser conservador.
✅ El pronóstico es excelente y generalmente se resuelve al finalizar el crecimiento.
✅ Debe diferenciarse de tumores óseos y fracturas por avulsión.
Referencias
• Campbell's Operative Orthopaedics.
• Rockwood and Wilkins' Fractures in Children.
• Nelson Textbook of Pediatrics.
• AAOS Clinical Practice Guidelines.
• UpToDate: Osgood-Schlatter Disease.`,
  },
  {
    id: "dr-q-388",
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement: "Paciente de 55 años, auxiliar administrativo, consulta por dolor torácico opresivo de 2 días de evolución, asociado a estrés laboral importante. Ingresa a urgencias donde el electrocardiograma es normal, pero las troponinas se encuentran en rango de \"rule-in\" para infarto agudo de miocardio. Se realiza coronariografía, la cual no evidencia lesiones coronarias obstructivas (<50% de estenosis). El ecocardiograma transtorácico reporta fracción de eyección del ventrículo izquierdo de 57% sin alteraciones segmentarias de la contractilidad. El paciente solicita una explicación sobre su diagnóstico.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Angina inestable." },
      { id: "B", label: "B", text: "Infarto agudo de miocardio con enfermedad coronaria obstructiva." },
      { id: "C", label: "C", text: "MINOCA (Infarto de miocardio con arterias coronarias no obstructivas)." },
      { id: "D", label: "D", text: "Miocarditis viral." },
    ],
    correctOptionId: "C",
    explanation: "El MINOCA (Myocardial Infarction with Non-Obstructive Coronary Arteries) se diagnostica cuando el paciente cumple criterios de infarto agudo de miocardio (elevación de troponinas con evidencia de lesión miocárdica) y la coronariografía demuestra ausencia de lesiones coronarias obstructivas significativas (<50%). Es un diagnóstico de trabajo que posteriormente requiere establecer la etiología mediante estudios adicionales, especialmente resonancia magnética cardíaca.",
    keyPoints: [
      "Cuando veas: Dolor torácico. Troponinas positivas. Coronarias sin lesiones obstructivas. Ecocardiograma normal o poco alterado.",
      "Debes pensar en: MINOCA.",
      "Tema: Síndromes coronarios agudos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los conceptos más nuevos en cardiología.
La clave no es el dolor.
La clave es:
Las coronarias normales.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Dolor torácico.
• Troponinas elevadas.
• Coronariografía sin lesiones significativas.
Esto corresponde a:
MINOCA.
¿Qué significa MINOCA?
Myocardial Infarction with Non-Obstructive Coronary Arteries.
Para diagnosticarlo deben cumplirse:
• Criterios universales de infarto.
• Estenosis coronaria menor del 50%.
• Ausencia de otra causa evidente que explique la elevación de troponinas.
¿Cuáles pueden ser las causas?
• Rotura o erosión de placa no obstructiva.
• Vasoespasmo coronario.
• Disfunción microvascular.
• Embolia coronaria.
• Disección coronaria espontánea.
¿Qué estudio ayuda a definir la etiología?
La respuesta clásica es:
Resonancia magnética cardíaca.
Permite diferenciar:
• Miocarditis.
• Síndrome de Takotsubo.
• Infarto verdadero.
¿Por qué NO angina inestable?
Porque en la angina inestable:
No existe elevación de troponinas.
¿Por qué NO IAM clásico?
Porque no hay enfermedad coronaria obstructiva.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Troponinas positivas."
Y responden:
IAM con ateroesclerosis.
Sin embargo:
El dato decisivo es:
La coronariografía normal.
Esto orienta a:
MINOCA.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar criterios de infarto.
2.	Realizar coronariografía.
3.	Identificar coronarias no obstructivas.
4.	Diagnosticar MINOCA.
5.	Solicitar resonancia magnética cardíaca para establecer la etiología.
Perlas de examen
✅ MINOCA representa aproximadamente el 5-10% de todos los infartos agudos de miocardio.
✅ La coronariografía muestra estenosis menores del 50%.
✅ La resonancia magnética cardíaca es fundamental para definir la causa.
✅ El tratamiento definitivo depende de la etiología identificada.
✅ Deben descartarse miocarditis y síndrome de Takotsubo.
✅ Las mujeres presentan MINOCA con mayor frecuencia que los hombres.
✅ MINOCA no es un diagnóstico final, sino un diagnóstico de trabajo.
Referencias
• Fourth Universal Definition of Myocardial Infarction.
• ESC Guidelines for Acute Coronary Syndromes.
• AHA Scientific Statement on MINOCA.
• Harrison's Principles of Internal Medicine.
• UpToDate: Myocardial Infarction with Nonobstructive Coronary Arteries (MINOCA).`,
  },
  {
    id: "dr-q-389",
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement: "Paciente de 90 años, con antecedentes de diabetes mellitus tipo 2 y dislipidemia adecuadamente controladas (HbA1c 7%, LDL 54 mg/dL), completamente funcional (Índice de Barthel: 90), sin antecedentes de eventos cardiovasculares mayores. Consulta por dolor torácico opresivo desencadenado al caminar varias cuadras o subir las escaleras de su vivienda, que desaparece con el reposo y no requiere analgésicos. Se realiza ecocardiograma de estrés que evidencia hipocinesia de la pared lateral inducida por el ejercicio, compatible con isquemia miocárdica.\n¿Cuál es el manejo más adecuado?",
    options: [
      { id: "A", label: "A", text: "Iniciar tratamiento médico antianginoso y optimizar el manejo de los factores de riesgo cardiovascular." },
      { id: "B", label: "B", text: "Realizar coronariografía urgente para revascularización inmediata." },
      { id: "C", label: "C", text: "Programar coronariografía ambulatoria con intención de revascularización." },
      { id: "D", label: "D", text: "Solicitar angiotomografía coronaria como estudio adicional." },
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta un cuadro compatible con angina crónica estable. En pacientes clínicamente estables, sin síndrome coronario agudo ni angina refractaria, el tratamiento inicial recomendado es el manejo médico óptimo, que incluye antianginosos y control estricto de los factores de riesgo cardiovascular. La revascularización se reserva para pacientes con síntomas persistentes a pesar del tratamiento médico óptimo o con anatomía coronaria de alto riesgo.",
    keyPoints: [
      "Cuando veas: Dolor torácico con el esfuerzo. Alivio con el reposo. Prueba funcional positiva para isquemia. Paciente estable.",
      "Debes pensar en: Angina crónica estable.",
      "Tema: Síndrome coronario crónico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los conceptos más preguntados en cardiología moderna.
La clave no es la edad.
La clave es:
Que el paciente está estable.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Dolor anginoso típico.
• Desencadenado por esfuerzo.
• Cede con el reposo.
• Ecocardiograma de estrés positivo.
Esto corresponde a:
Síndrome coronario crónico (angina estable).
¿Cuál es el tratamiento inicial?
La evidencia actual demuestra que en pacientes estables:
Debe iniciarse primero:
Manejo médico óptimo.
¿En qué consiste?
• Antiagregación plaquetaria (cuando esté indicada).
• Estatina de alta intensidad.
• Betabloqueador como primera línea para el control de la angina (o calcioantagonistas si existe contraindicación).
• Nitratos de acción corta para alivio de los episodios.
• Control estricto de diabetes, presión arterial y otros factores de riesgo.
• Modificación del estilo de vida.
¿Por qué NO realizar coronariografía urgente?
Porque:
No existe un síndrome coronario agudo.
No presenta:
• Dolor en reposo.
• Elevación de troponinas.
• Cambios dinámicos del ECG.
• Inestabilidad hemodinámica.
¿Por qué NO indicar revascularización inmediata?
Los estudios COURAGE, ISCHEMIA y ISCHEMIA-EXTEND demostraron que, en pacientes con cardiopatía isquémica estable, la revascularización inicial no reduce la mortalidad ni el riesgo de infarto frente al manejo médico óptimo, salvo en situaciones específicas como angina refractaria o anatomía coronaria de alto riesgo.
¿Por qué NO solicitar una angioTAC?
Porque:
Ya existe una prueba funcional positiva para isquemia.
El siguiente paso no es realizar otra prueba diagnóstica, sino iniciar tratamiento.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Ecocardiograma positivo para isquemia."
Y responden:
Coronariografía inmediata.
Sin embargo:
El dato decisivo es:
Que el paciente tiene una angina estable y controlable.
Esto orienta inicialmente a:
Tratamiento médico óptimo.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar angina estable.
2.	Estratificar el riesgo.
3.	Iniciar manejo médico óptimo.
4.	Reevaluar la respuesta clínica.
5.	Reservar la revascularización para síntomas persistentes o anatomía de alto riesgo.
Perlas de examen
✅ El tratamiento inicial de la angina crónica estable es el manejo médico óptimo.
✅ Los betabloqueadores son el tratamiento antianginoso de primera línea en ausencia de contraindicaciones.
✅ Los nitratos sublinguales alivian las crisis anginosas.
✅ La revascularización mejora principalmente los síntomas, no la supervivencia, en la mayoría de pacientes estables.
✅ La edad avanzada por sí sola no constituye indicación de coronariografía.
✅ El control de los factores de riesgo cardiovascular es fundamental.
✅ La decisión de revascularizar depende de la persistencia de síntomas y de la anatomía coronaria.
Referencias
• ESC Guidelines for the Management of Chronic Coronary Syndromes (2024).
• ACC/AHA Guideline for the Management of Chronic Coronary Disease.
• Harrison's Principles of Internal Medicine.
• COURAGE Trial.
• ISCHEMIA Trial.`,
  },
  {
    id: "dr-q-390",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement: "Paciente de 50 años consulta por dolor abdominal crónico posprandial de varios meses de evolución, con mejoría parcial al utilizar antiespasmódicos y antiácidos. Acude a urgencias por dolor intenso en hipocondrio derecho de 4 horas de evolución, que no mejora con el tratamiento habitual. La ecografía hepatobiliar reporta vesícula con múltiples cálculos, sin engrosamiento de la pared, sin líquido perivesicular, sin dilatación de la vía biliar y sin otros hallazgos. Los laboratorios muestran: AST 100 U/L, ALT 80 U/L, bilirrubina total 2.4 mg/dL y bilirrubina directa 2.0 mg/dL.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Colecistectomía laparoscópica inmediata." },
      { id: "B", label: "B", text: "Colangiopancreatografía retrógrada endoscópica (CPRE) urgente." },
      { id: "C", label: "C", text: "Solicitar colangiorresonancia magnética (CPRM) o ultrasonido endoscópico para descartar coledocolitiasis antes de la colecistectomía." },
      { id: "D", label: "D", text: "Alta con analgésicos y control ambulatorio." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta colelitiasis sintomática con datos de colestasis (hiperbilirrubinemia directa) pero sin evidencia ecográfica de dilatación de la vía biliar ni colangitis. De acuerdo con las guías ASGE, corresponde a un paciente con riesgo intermedio de coledocolitiasis, por lo que debe confirmarse el diagnóstico mediante CPRM o ultrasonido endoscópico antes de indicar una CPRE o proceder a la colecistectomía.",
    keyPoints: [
      "Cuando veas: Colelitiasis. Bilirrubina elevada. Sin dilatación de la vía biliar. Sin colangitis.",
      "Debes pensar en: Riesgo intermedio de coledocolitiasis.",
      "Tema: Coledocolitiasis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la estratificación del riesgo de coledocolitiasis.
La clave no son los cálculos.
La clave es:
La bilirrubina elevada sin dilatación de la vía biliar.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Cólico biliar.
• Colelitiasis.
• Bilirrubina directa elevada.
• Ecografía sin dilatación del colédoco.
Esto sugiere:
Posible coledocolitiasis.
¿Debe realizarse CPRE inmediatamente?
No.
La CPRE se reserva para pacientes con:
Alto riesgo de coledocolitiasis.
¿Por qué este paciente es de riesgo intermedio?
Porque presenta:
• Alteración de pruebas hepáticas.
• Bilirrubina elevada.
Pero NO presenta:
• Colédoco dilatado.
• Cálculo visualizado en el colédoco.
• Colangitis.
• Bilirrubina >4 mg/dL asociada a dilatación del colédoco.
¿Cuál es el siguiente paso?
Confirmar la presencia de cálculos mediante:
• Colangiorresonancia (CPRM).
O
• Ultrasonido endoscópico (USE).
Si el estudio confirma coledocolitiasis:
Se realiza:
CPRE terapéutica.
Posteriormente:
Colecistectomía laparoscópica.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Bilirrubina elevada."
Y responden:
CPRE urgente.
Sin embargo:
El dato decisivo es:
La ausencia de dilatación de la vía biliar y de criterios de alto riesgo.
Esto orienta a:
Realizar primero una prueba diagnóstica no invasiva.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Diagnosticar colelitiasis sintomática.
2.	Estratificar el riesgo de coledocolitiasis.
3.	Riesgo intermedio → CPRM o USE.
4.	Confirmar el diagnóstico.
5.	Realizar CPRE solo si se documenta coledocolitiasis.
Perlas de examen
✅ Bilirrubina elevada sin dilatación del colédoco corresponde habitualmente a riesgo intermedio de coledocolitiasis.
✅ La CPRM y el ultrasonido endoscópico son las pruebas diagnósticas de elección en este escenario.
✅ La CPRE es un procedimiento principalmente terapéutico.
✅ La ecografía puede no detectar cálculos pequeños del colédoco.
✅ La colangitis requiere drenaje urgente mediante CPRE.
✅ La colecistectomía debe realizarse después de resolver la obstrucción biliar cuando existe coledocolitiasis.
✅ La estratificación propuesta por la ASGE evita CPRE innecesarias.
Referencias
• ASGE Guideline on the Role of Endoscopy in Choledocholithiasis.
• Tokyo Guidelines.
• Sabiston Textbook of Surgery.
• Schwartz's Principles of Surgery.
• UpToDate: Evaluation of Suspected Choledocholithiasis.`,
  },
  {
    id: "dr-q-391",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement: "Hombre de 68 años consulta por ictericia progresiva de un mes de evolución, acompañada de coluria, acolia y pérdida de 8 kg en los últimos tres meses. Niega fiebre y dolor abdominal. Al examen físico presenta una masa lisa y palpable en el hipocondrio derecho correspondiente a una vesícula biliar distendida, no dolorosa.\n¿Qué signo semiológico presenta el paciente y cuál es la patología más probable?",
    options: [
      { id: "A", label: "A", text: "Signo de Murphy; colecistitis aguda." },
      { id: "B", label: "B", text: "Signo de Courvoisier-Terrier; adenocarcinoma de cabeza de páncreas." },
      { id: "C", label: "C", text: "Signo de Blumberg; perforación de víscera hueca." },
      { id: "D", label: "D", text: "Signo de Cullen; pancreatitis aguda grave." },
    ],
    correctOptionId: "B",
    explanation: "El signo de Courvoisier-Terrier consiste en la presencia de una vesícula biliar palpable, aumentada de tamaño e indolora en un paciente con ictericia obstructiva. Este hallazgo sugiere una obstrucción maligna de la vía biliar distal, siendo la causa más frecuente el adenocarcinoma de la cabeza del páncreas. También puede observarse en colangiocarcinoma distal o carcinoma periampular.",
    keyPoints: [
      "Cuando veas: Ictericia progresiva. Vesícula palpable. Indolora. Pérdida de peso.",
      "Debes pensar en: Signo de Courvoisier-Terrier.",
      "Tema: Semiología hepatobiliar.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los signos semiológicos más importantes de cirugía.
La clave no es la ictericia.
La clave es:
La vesícula palpable.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Ictericia obstructiva.
• Vesícula distendida.
• Ausencia de dolor.
• Síndrome constitucional.
Esto corresponde al:
Signo de Courvoisier-Terrier.
¿Por qué ocurre?
La obstrucción lenta y progresiva del colédoco distal permite:
La distensión progresiva de la vesícula biliar.
Esto suele ocurrir en:
Tumores malignos.
¿Por qué NO ocurre en la colelitiasis?
Porque en los pacientes con litiasis crónica:
La vesícula suele encontrarse:
• Fibrosada.
• Retráctil.
• Poco distensible.
Por ello, generalmente:
No es palpable.
¿Cuál es la causa más frecuente en los exámenes?
La respuesta clásica es:
Adenocarcinoma de la cabeza del páncreas.
Otras causas incluyen:
• Colangiocarcinoma distal.
• Carcinoma de la ampolla de Vater.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Ictericia."
Y responden:
Coledocolitiasis.
Sin embargo:
El dato decisivo es:
La vesícula palpable e indolora.
Esto orienta a:
Obstrucción biliar maligna.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar ictericia obstructiva.
2.	Palpar la vesícula.
3.	Reconocer el signo de Courvoisier-Terrier.
4.	Sospechar malignidad pancreatobiliar.
5.	Solicitar TAC de abdomen con protocolo pancreático y completar la estadificación.
Perlas de examen
✅ Vesícula palpable + ictericia = Signo de Courvoisier-Terrier.
✅ Sugiere obstrucción maligna de la vía biliar distal.
✅ El adenocarcinoma de cabeza de páncreas es la causa más frecuente.
✅ En la coledocolitiasis la vesícula suele estar fibrosada y no es palpable.
✅ Debe solicitarse TAC contrastada como estudio inicial de extensión.
✅ La pérdida de peso es un dato que aumenta la sospecha de malignidad.
✅ Es uno de los signos semiológicos más preguntados en cirugía general.
Referencias
• Sabiston Textbook of Surgery.
• Schwartz's Principles of Surgery.
• Sleisenger and Fordtran's Gastrointestinal Disease.
• Harrison's Principles of Internal Medicine.
• UpToDate: Clinical Manifestations and Diagnosis of Pancreatic Cancer.`,
  },
  {
    id: "dr-q-392",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement: "Paciente de 72 años con estancia prolongada en la Unidad de Cuidados Intensivos por choque séptico secundario a neumonía. Durante la hospitalización presenta episodios febriles persistentes y dolor en hipocondrio derecho. Los reactantes de fase aguda no muestran elevación significativa respecto a controles previos. Se realiza ecografía abdominal que reporta vesícula biliar con engrosamiento de la pared, líquido perivesicular y signo de Murphy ecográfico positivo, sin evidencia de cálculos en su interior.\n¿Cuál es la impresión diagnóstica y la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Colelitiasis sintomática; colecistectomía laparoscópica electiva." },
      { id: "B", label: "B", text: "Colecistitis aguda calculosa; colecistectomía laparoscópica urgente." },
      { id: "C", label: "C", text: "Colecistitis aguda alitiásica; iniciar antibióticos de amplio espectro y realizar colecistostomía percutánea." },
      { id: "D", label: "D", text: "Colangitis aguda; CPRE urgente." },
    ],
    correctOptionId: "C",
    explanation: "La colecistitis aguda alitiásica ocurre típicamente en pacientes críticamente enfermos, con estancia prolongada en UCI, ventilación mecánica, sepsis, trauma mayor o nutrición parenteral. El tratamiento inicial consiste en antibióticos de amplio espectro y drenaje de la vesícula mediante colecistostomía percutánea cuando el paciente presenta alto riesgo quirúrgico. La colecistectomía definitiva puede realizarse una vez el paciente se estabilice.",
    keyPoints: [
      "Cuando veas: Paciente en UCI. Fiebre persistente. Dolor en hipocondrio derecho. Vesícula inflamada sin cálculos.",
      "Debes pensar en: Colecistitis aguda alitiásica.",
      "Tema: Patología biliar.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una causa frecuente de fiebre de origen desconocido en pacientes críticos.
La clave no es el dolor.
La clave es:
La ausencia de cálculos.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Estancia prolongada en UCI.
• Sepsis.
• Dolor en hipocondrio derecho.
• Vesícula inflamada.
• Sin cálculos.
Esto corresponde a:
Colecistitis aguda alitiásica.
¿Quiénes tienen mayor riesgo?
• Pacientes en UCI.
• Ventilación mecánica.
• Grandes quemados.
• Politraumatizados.
• Sepsis.
• Nutrición parenteral prolongada.
¿Cuál es la fisiopatología?
Predominan:
• Estasis biliar.
• Hipoperfusión vesicular.
• Isquemia.
• Sobreinfección secundaria.
¿Cuál es el manejo?
Debe iniciarse:
• Antibióticos de amplio espectro.
Y debido al alto riesgo quirúrgico:
• Colecistostomía percutánea guiada por imagen.
Posteriormente, cuando el paciente mejore:
• Colecistectomía definitiva si está indicada.
¿Por qué NO colecistectomía inmediata?
Porque estos pacientes presentan:
Alta mortalidad perioperatoria.
La colecistostomía constituye el tratamiento de elección como control inicial de la infección en pacientes inestables.
¿Por qué NO CPRE?
Porque:
No existen datos de obstrucción de la vía biliar ni colangitis.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"No hay cálculos."
Y descartan:
Colecistitis.
Sin embargo:
El dato decisivo es:
Paciente crítico + vesícula inflamada sin litiasis.
Esto orienta a:
Colecistitis aguda alitiásica.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Sospechar colecistitis alitiásica en pacientes críticos.
2.	Confirmar con ecografía o TAC.
3.	Iniciar antibióticos de amplio espectro.
4.	Realizar colecistostomía percutánea.
5.	Considerar colecistectomía diferida cuando el paciente se estabilice.
Perlas de examen
✅ La colecistitis alitiásica representa aproximadamente el 5-10% de las colecistitis agudas.
✅ Es mucho más frecuente en pacientes hospitalizados en UCI.
✅ Tiene mayor riesgo de gangrena y perforación que la colecistitis calculosa.
✅ La ecografía muestra pared vesicular engrosada, líquido perivesicular y ausencia de cálculos.
✅ La colecistostomía percutánea es el tratamiento inicial de elección en pacientes críticamente enfermos.
✅ Deben iniciarse antibióticos con cobertura para enterobacterias y anaerobios.
✅ Es una causa clásica de fiebre persistente en pacientes con estancia prolongada en cuidados intensivos.
Referencias
• Tokyo Guidelines 2018/2023.
• Sabiston Textbook of Surgery.
• Schwartz's Principles of Surgery.
• UpToDate: Acute Acalculous Cholecystitis.
• World Society of Emergency Surgery (WSES) Guidelines on Acute Calculous and Acalculous Cholecystitis.`,
  },
  {
    id: "dr-q-393",
    examArea: "CIRUGÍA GENERAL - TRAUMA",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement: "Mujer de 27 años, geocientífica, es llevada al servicio de urgencias tras caer por una ladera rocosa mientras realizaba trabajo de campo en las faldas de un volcán. Ingresa consciente, hemodinámicamente estable, con signos vitales dentro de límites normales. Al examen físico presenta una herida penetrante en la pared abdominal con evisceración de epiplón (epiplocele), sin signos de irritación peritoneal ni evisceración intestinal. El FAST es negativo y no presenta otras lesiones evidentes.\n¿Cuál es la conducta inmediata más adecuada?",
    options: [
      { id: "A", label: "A", text: "Reducir el epiplón manualmente y realizar cierre primario de la herida en urgencias." },
      { id: "B", label: "B", text: "Solicitar TAC de abdomen con contraste y decidir conducta según el resultado." },
      { id: "C", label: "C", text: "Laparotomía exploratoria urgente." },
      { id: "D", label: "D", text: "Manejo conservador con antibióticos y observación clínica." },
    ],
    correctOptionId: "C",
    explanation: "La evisceración de epiplón (epiplocele) secundaria a trauma penetrante abdominal constituye una indicación de exploración quirúrgica urgente, incluso en pacientes hemodinámicamente estables y sin signos de irritación peritoneal, debido al alto riesgo de lesión de víscera hueca u otras lesiones intraabdominales no evidentes en el examen físico inicial.",
    keyPoints: [
      "Cuando veas: Trauma penetrante abdominal. Epiplocele. Evisceración. Paciente estable.",
      "Debes pensar en: Laparotomía exploratoria.",
      "Tema: Trauma abdominal penetrante.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa las indicaciones absolutas de laparotomía en trauma abdominal.
La clave no es la estabilidad hemodinámica.
La clave es:
La evisceración.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Trauma penetrante.
• Salida de epiplón.
• Abdomen sin peritonitis.
Esto corresponde a:
Epiplocele traumático.
¿Es suficiente observar?
No.
¿Por qué?
Porque la evisceración demuestra:
Violación del peritoneo.
Y aumenta significativamente la probabilidad de:
• Lesión intestinal.
• Lesión mesentérica.
• Lesión vascular.
¿Cuáles son las indicaciones clásicas de laparotomía inmediata en trauma penetrante?
• Inestabilidad hemodinámica.
• Peritonitis.
• Evisceración (epiplón o vísceras).
• Empalamiento.
• Hemorragia no controlada.
¿Por qué NO solicitar TAC?
Porque:
La paciente ya presenta un criterio de manejo quirúrgico.
La tomografía retrasaría el tratamiento.
¿Por qué NO reducir el epiplón?
Porque:
Existe riesgo de introducir tejido contaminado y pasar por alto lesiones intraabdominales.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Paciente estable."
Y responden:
TAC de abdomen.
Sin embargo:
El dato decisivo es:
La presencia de epiplocele.
Esto constituye:
Indicación de laparotomía exploratoria.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar trauma penetrante.
2.	Reconocer la evisceración.
3.	No intentar reducir el epiplón.
4.	Llevar al paciente a cirugía.
5.	Explorar y reparar las lesiones encontradas.
Perlas de examen
✅ La evisceración de epiplón es una indicación clásica de laparotomía exploratoria.
✅ La estabilidad hemodinámica no descarta lesiones intraabdominales graves.
✅ No debe reintroducirse el epiplón en el servicio de urgencias.
✅ Debe cubrirse la evisceración con gasas estériles húmedas mientras se prepara la cirugía.
✅ El FAST puede ser negativo en lesiones de víscera hueca.
✅ La TAC no está indicada cuando existe una indicación absoluta de laparotomía.
✅ El objetivo es identificar y tratar lesiones asociadas antes de que desarrollen peritonitis o sepsis.
Referencias
• ATLS® 11th Edition.
• Sabiston Textbook of Surgery.
• Schwartz's Principles of Surgery.
• EAST Practice Management Guidelines for Penetrating Abdominal Trauma.
• WSES Guidelines on Blunt and Penetrating Bowel Injury.`,
  },
  {
    id: "dr-q-394",
    examArea: "CIRUGÍA GENERAL - TRAUMA",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement: "Paciente de 30 años es llevado al servicio de urgencias tras sufrir una herida por arma cortopunzante en abdomen durante una riña. Al examen físico presenta una herida que compromete únicamente la piel y el tejido celular subcutáneo, sin evidencia de violación de la fascia anterior. Se encuentra hemodinámicamente estable, con signos vitales normales. Está agitado, exige ser llevado inmediatamente a cirugía y amenaza al personal de salud. La herida presenta sangrado escaso.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Laparotomía exploratoria urgente por tratarse de una herida por arma blanca." },
      { id: "B", label: "B", text: "Tomografía abdominal con contraste de rutina." },
      { id: "C", label: "C", text: "Exploración local de la herida, manejo local, profilaxis correspondiente y observación clínica, con apoyo de seguridad si el paciente representa un riesgo para el personal." },
      { id: "D", label: "D", text: "Laparoscopia diagnóstica inmediata." },
    ],
    correctOptionId: "C",
    explanation: "En pacientes hemodinámicamente estables con trauma penetrante abdominal en quienes la exploración local demuestra que la fascia anterior no está violada, no existe indicación de laparotomía ni de estudios adicionales de rutina. El manejo consiste en tratamiento local de la herida, profilaxis antitetánica según corresponda, antibióticos cuando estén indicados y observación clínica. Si el paciente presenta comportamiento agresivo que compromete la seguridad del personal o de otros pacientes, deben activarse los protocolos institucionales de seguridad y control conductual, sin modificar las indicaciones médicas.",
    keyPoints: [
      "Cuando veas: Herida por arma blanca. No atraviesa la fascia. Paciente estable.",
      "Debes pensar en: Trauma penetrante superficial.",
      "Tema: Trauma abdominal penetrante.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el manejo selectivo del trauma penetrante abdominal.
La clave no es el arma.
La clave es:
La integridad de la fascia.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Herida superficial.
• Fascia íntegra.
• Estabilidad hemodinámica.
Esto indica:
Que no existe evidencia de penetración a la cavidad abdominal.
¿Cuál es el manejo?
Debe realizarse:
• Exploración local de la herida.
• Irrigación y cierre cuando corresponda.
• Profilaxis antitetánica.
• Observación clínica.
¿Debe ir a cirugía?
No.
Porque:
La fascia no fue violada.
¿Cuándo está indicada la laparotomía?
Ante:
• Inestabilidad hemodinámica.
• Peritonitis.
• Evisceración.
• Violación peritoneal con indicación quirúrgica.
• Sangrado no controlado.
¿Qué hacer con el comportamiento agresivo?
Las amenazas del paciente no constituyen una indicación quirúrgica.
Debe:
• Mantenerse la conducta basada en criterios clínicos.
• Activar el protocolo institucional de seguridad.
• Solicitar apoyo de personal de seguridad y, si es necesario, implementar medidas de contención de acuerdo con la normativa y la valoración médica.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Herida por arma blanca."
Y responden:
Laparotomía.
Sin embargo:
El dato decisivo es:
La fascia permanece íntegra.
Esto orienta a:
Manejo conservador.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Valorar estabilidad hemodinámica.
2.	Explorar la herida.
3.	Confirmar integridad de la fascia.
4.	Realizar manejo local y observación.
5.	Mantener la seguridad del equipo asistencial mediante los protocolos institucionales.
Perlas de examen
✅ La exploración local de la herida es fundamental en pacientes estables.
✅ Si la fascia no está violada, generalmente no se requieren laparotomía ni TAC.
✅ Las decisiones quirúrgicas se basan en hallazgos clínicos, no en la presión ejercida por el paciente.
✅ La profilaxis antitetánica debe verificarse en todo trauma penetrante.
✅ La seguridad del personal sanitario debe garantizarse mediante los protocolos institucionales.
✅ La laparotomía innecesaria aumenta la morbilidad.
✅ El manejo selectivo del trauma penetrante ha disminuido significativamente el número de laparotomías no terapéuticas.
Referencias
• ATLS® 11th Edition.
• EAST Practice Management Guidelines for Penetrating Abdominal Trauma.
• WSES Guidelines on Penetrating Abdominal Trauma.
• Sabiston Textbook of Surgery.
• Schwartz's Principles of Surgery.`,
  },
  {
    id: "dr-q-395",
    examArea: "PEDIATRÍA - NUTRICIÓN",
    topic: "PEDIATRÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","pediatria"],
    statement: "Niño de 24 meses es llevado a consulta de crecimiento y desarrollo. La madre refiere que en los últimos cuatro meses ha disminuido el apetito y ha presentado episodios repetitivos de diarrea. Al examen físico se observa disminución del tejido celular subcutáneo y masa muscular, sin edema. Los indicadores antropométricos son:\n●\tPeso para la talla: -2.8 DE\n●\tTalla para la edad: -1.1 DE\n●\tPeso para la edad: -2.3 DE\n●\tPerímetro braquial: 12.0 cm\n¿Cuál es el diagnóstico nutricional más probable?",
    options: [
      { id: "A", label: "A", text: "Riesgo de desnutrición; seguimiento en 6 meses." },
      { id: "B", label: "B", text: "Desnutrición aguda moderada." },
      { id: "C", label: "C", text: "Desnutrición aguda severa." },
      { id: "D", label: "D", text: "Desnutrición crónica (talla baja)." },
    ],
    correctOptionId: "B",
    explanation: "La clasificación nutricional en menores de 5 años se realiza utilizando los estándares de crecimiento de la OMS. Un peso para la talla entre -2 y -3 desviaciones estándar (DE) corresponde a desnutrición aguda moderada. La talla para la edad de -1.1 DE no cumple criterio de desnutrición crónica (que requiere < -2 DE).",
    keyPoints: [
      "Cuando veas: Peso/Talla < -2 DE. Talla/Edad > -2 DE. Menor de 5 años.",
      "Debes pensar en: Desnutrición aguda moderada.",
      "Tema: Valoración nutricional pediátrica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la interpretación de los indicadores antropométricos de la OMS.
La clave no es el peso.
La clave es:
Qué indicador está alterado.
¿Qué está ocurriendo realmente?
El niño presenta:
• Peso/Talla: -2.8 DE.
• Talla/Edad: -1.1 DE.
Esto significa:
Existe:
Desnutrición aguda.
No existe:
Desnutrición crónica.
¿Cómo se clasifican los indicadores?
Peso para la talla
• ≥ -2 DE → Normal.
• < -2 y ≥ -3 DE → Desnutrición aguda moderada.
• < -3 DE → Desnutrición aguda severa.
Talla para la edad
• ≥ -2 DE → Normal.
• < -2 DE → Desnutrición crónica (talla baja).
Peso para la edad
Se utiliza como:
Indicador global de desnutrición.
No diferencia entre:
Desnutrición aguda y crónica.
¿Por qué NO es desnutrición severa?
Porque el peso para la talla es:
-2.8 DE.
La desnutrición aguda severa requiere:
< -3 DE.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
Peso para la edad.
Y clasifican la desnutrición.
Sin embargo:
El indicador que determina la desnutrición aguda es:
Peso para la talla.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Revisar peso para la talla.
2.	Clasificar la desnutrición aguda.
3.	Revisar talla para la edad.
4.	Determinar si existe talla baja.
5.	Formular el diagnóstico nutricional.
Perlas de examen
✅ Peso para la talla evalúa desnutrición aguda.
✅ Talla para la edad evalúa desnutrición crónica.
✅ Peso para la edad identifica bajo peso, pero no diferencia el tipo de desnutrición.
✅ -2 a -3 DE corresponde a desnutrición aguda moderada.
✅ < -3 DE corresponde a desnutrición aguda severa.
✅ El edema nutricional clasifica automáticamente al paciente como desnutrición aguda severa.
✅ Los estándares antropométricos de referencia corresponden a la OMS para menores de 5 años.
Referencias
• OMS. WHO Child Growth Standards.
• Ministerio de Salud y Protección Social de Colombia. Lineamiento para el manejo integrado de la desnutrición aguda en menores de 5 años.
• Guías AIEPI.
• Nelson Textbook of Pediatrics.
• UpToDate: Assessment of Nutritional Status in Children.`,
  },
  {
    id: "dr-q-396",
    examArea: "PEDIATRÍA - NUTRICIÓN",
    topic: "PEDIATRÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","pediatria"],
    statement: "Niña de 18 meses es llevada al servicio de urgencias por diarrea de 7 días de evolución y disminución importante del apetito. La madre refiere pérdida de peso durante el último mes. Al examen físico se observa disminución del tejido celular subcutáneo, masa muscular reducida y letargia leve, sin edema bilateral. Los indicadores antropométricos muestran:\n●\tPeso para la talla: -2.6 DE\n●\tTalla para la edad: -0.8 DE\n●\tPeso para la edad: -2.1 DE\nDe acuerdo con los lineamientos del Ministerio de Salud de Colombia, ¿cuál es la siguiente medición antropométrica indispensable para clasificar adecuadamente la gravedad de la desnutrición aguda?",
    options: [
      { id: "A", label: "A", text: "Circunferencia cefálica." },
      { id: "B", label: "B", text: "Pliegue tricipital." },
      { id: "C", label: "C", text: "Perímetro braquial (MUAC)." },
      { id: "D", label: "D", text: "Índice de masa corporal." },
    ],
    correctOptionId: "C",
    explanation: "El perímetro braquial (Mid-Upper Arm Circumference, MUAC) es una medición fundamental en la valoración de la desnutrición aguda en niños entre 6 y 59 meses. Según los lineamientos del Ministerio de Salud de Colombia y la OMS, permite identificar rápidamente la gravedad de la desnutrición y definir la conducta terapéutica, incluso cuando no es posible obtener peso y talla de forma adecuada.",
    keyPoints: [
      "Cuando veas: Niño entre 6 y 59 meses. Sospecha de desnutrición aguda. Necesidad de clasificar gravedad.",
      "Debes pensar en: Perímetro braquial (MUAC).",
      "Tema: Desnutrición aguda.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los criterios diagnósticos más utilizados en programas de tamización nutricional.
La clave no es el peso.
La clave es:
El perímetro braquial.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Bajo peso para la talla.
• Pérdida de masa muscular.
Debe establecerse:
La gravedad de la desnutrición.
¿Qué medición permite hacerlo rápidamente?
La respuesta clásica es:
Perímetro braquial (MUAC).
¿Cómo se interpreta?
MUAC ≥12.5 cm
• Normal.
MUAC ≥11.5 cm y <12.5 cm
• Desnutrición aguda moderada.
MUAC <11.5 cm
• Desnutrición aguda severa.
¿Y si presenta edema bilateral con fóvea?
Se clasifica como:
Desnutrición aguda severa.
Aunque el MUAC sea mayor de 11.5 cm.
¿Por qué es tan importante?
Porque:
• Es fácil de realizar.
• Tiene buena capacidad para identificar niños con alto riesgo de mortalidad.
• Puede utilizarse incluso en escenarios comunitarios.
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
Índice de masa corporal.
Sin embargo:
En menores de 5 años el indicador recomendado por las guías es:
El perímetro braquial.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar al menor de 5 años.
2.	Sospechar desnutrición aguda.
3.	Medir el perímetro braquial.
4.	Clasificar la gravedad.
5.	Definir el manejo según los lineamientos nacionales.
Perlas de examen
✅ El perímetro braquial (MUAC) se utiliza en niños de 6 a 59 meses.
✅ MUAC <11.5 cm = desnutrición aguda severa.
✅ MUAC entre 11.5 y <12.5 cm = desnutrición aguda moderada.
✅ MUAC ≥12.5 cm = sin desnutrición aguda por este criterio.
✅ El edema bilateral con fóvea clasifica al paciente como desnutrición aguda severa, independientemente del MUAC.
✅ El MUAC es uno de los mejores predictores de mortalidad por desnutrición.
✅ Es una herramienta recomendada por la OMS y el Ministerio de Salud de Colombia para tamización y clasificación nutricional.
Referencias
• Ministerio de Salud y Protección Social de Colombia. Lineamiento para el manejo integrado de la desnutrición aguda moderada y severa en niños de 0 a 59 meses.
• Organización Mundial de la Salud (OMS). WHO Guideline: Updates on the Management of Severe Acute Malnutrition in Infants and Children.
• Guías AIEPI.
• Nelson Textbook of Pediatrics.
• UNICEF. Guidance on MUAC in Children 6–59 Months.`,
  },
  {
    id: "dr-q-397",
    examArea: "PEDIATRÍA - NEUMOLOGÍA",
    topic: "PEDIATRÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","pediatria"],
    statement: "Niño de 6 años, con antecedente de bronquiolitis durante el primer año de vida, consulta por episodios recurrentes de disnea, sibilancias y desaturación, principalmente desencadenados por infecciones respiratorias virales. Se encuentra en manejo únicamente con salbutamol inhalado (SABA) a demanda, indicado previamente en un hospital de primer nivel. Acude a consulta prioritaria debido a cancelación de su cita con pediatría. La madre refiere tos nocturna al menos 3 noches por semana, con un episodio semanal que interfiere con el sueño. No ha requerido hospitalizaciones recientes. Radiografía de tórax normal y hemoleucograma sin alteraciones.\nDe acuerdo con la Guía GINA 2025, ¿cuál es el manejo más apropiado?",
    options: [
      { id: "A", label: "A", text: "Continuar únicamente salbutamol inhalado a demanda." },
      { id: "B", label: "B", text: "Iniciar corticosteroide inhalado (ICS) en dosis baja como tratamiento controlador diario, mantener SABA como medicamento de rescate y educación sobre técnica inhalatoria." },
      { id: "C", label: "C", text: "Iniciar LABA en monoterapia." },
      { id: "D", label: "D", text: "Iniciar prednisolona oral diaria durante tres meses." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta síntomas compatibles con asma persistente, caracterizada por síntomas nocturnos frecuentes y necesidad repetida de broncodilatador de rescate. Según GINA 2025, en niños de 6 a 11 años, el uso exclusivo de SABA no se recomienda, ya que aumenta el riesgo de exacerbaciones. Todo niño con asma debe recibir tratamiento con un corticosteroide inhalado como parte del manejo.",
    keyPoints: [
      "Cuando veas: Niño de 6 a 11 años. Tos nocturna ≥2 veces al mes. Sibilancias recurrentes. Uso frecuente de SABA.",
      "Debes pensar en: Asma persistente.",
      "Tema: Asma pediátrica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los cambios más importantes introducidos por GINA en los últimos años.
La clave no son las sibilancias.
La clave es:
La frecuencia de los síntomas nocturnos.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Tos nocturna.
• Despertares por síntomas.
• Episodios recurrentes desencadenados por infecciones virales.
• Uso exclusivo de SABA.
Esto corresponde a:
Asma persistente.
¿Qué recomienda GINA 2025?
En niños entre 6 y 11 años:
No utilizar SABA como único tratamiento.
Debe iniciarse:
Corticosteroide inhalado diario en dosis bajas.
Además:
• Salbutamol como medicamento de rescate.
• Educación en técnica inhalatoria.
• Plan escrito de acción para el asma.
• Control de factores desencadenantes.
¿Cuáles son ejemplos de ICS en dosis bajas?
• Budesonida.
• Beclometasona.
• Fluticasona.
¿Cuándo se escala el tratamiento?
Si persisten síntomas pese a buena adherencia y técnica inhalatoria:
Se considera:
• Incrementar la dosis del ICS.
O
• Añadir LABA en combinación con ICS.
¿Por qué NO continuar solo con SABA?
Porque múltiples estudios han demostrado que:
El uso aislado de SABA incrementa el riesgo de:
• Exacerbaciones.
• Hospitalización.
• Mortalidad por asma.
¿Por qué NO LABA solo?
Porque:
La monoterapia con LABA está contraindicada en el asma.
Siempre debe asociarse a un corticosteroide inhalado.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Bronquiolitis previa."
Y responden:
Broncoespasmo viral.
Sin embargo:
El dato decisivo es:
La recurrencia de síntomas nocturnos y el patrón compatible con asma persistente.
Esto orienta a:
Iniciar tratamiento controlador con corticosteroide inhalado.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar el diagnóstico clínico de asma.
2.	Identificar la frecuencia de los síntomas.
3.	Suspender el uso de SABA como única terapia.
4.	Iniciar ICS diario.
5.	Reevaluar el control en 1 a 3 meses.
Perlas de examen
✅ GINA 2025 no recomienda el uso de SABA como único tratamiento en niños con asma.
✅ Todo niño de 6 a 11 años con asma debe recibir un corticosteroide inhalado.
✅ Los corticosteroides inhalados son el tratamiento controlador de primera línea.
✅ Antes de escalar el tratamiento siempre debe verificarse la técnica inhalatoria y la adherencia.
✅ La radiografía de tórax suele ser normal en el asma.
✅ La bronquiolitis en la infancia aumenta el riesgo de desarrollar asma en algunos pacientes.
✅ El objetivo del tratamiento es lograr control de síntomas y prevenir exacerbaciones.
Referencias
• Global Initiative for Asthma (GINA) 2025.
• Nelson Textbook of Pediatrics.
• UpToDate: Management of Asthma in Children.
• Guía Colombiana para el Diagnóstico y Manejo del Asma.
• European Respiratory Society Guidelines for Pediatric Asthma.`,
  },
  {
    id: "dr-q-398",
    examArea: "PEDIATRÍA - INFECTOLOGÍA",
    topic: "PEDIATRÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","pediatria"],
    statement: "Niña de 6 años, procedente de zona endémica para arbovirosis, consulta por cuadro de 5 días de evolución consistente en fiebre de hasta 39 °C, cefalea retroocular intensa, astenia, adinamia, malestar general, artralgias, mialgias, dolor abdominal y múltiples episodios eméticos. Al examen físico presenta temperatura de 38.7 °C, FC 110 lpm, PA 90/60 mmHg, petequias en extremidades, hepatomegalia de 3 cm por debajo del reborde costal y prueba del torniquete positiva.\n¿Cuál es la sospecha diagnóstica y cuáles son los exámenes iniciales más importantes?",
    options: [
      { id: "A", label: "A", text: "Malaria complicada; gota gruesa y extendido de sangre periférica." },
      { id: "B", label: "B", text: "Dengue con signos de alarma; hemoleucograma seriado con hematocrito y plaquetas, pruebas de función hepática, albúmina, tiempos de coagulación y confirmación etiológica con NS1 o RT-PCR (≤5 días) o IgM (≥5 días)." },
      { id: "C", label: "C", text: "Leptospirosis; uroanálisis y creatinfosfoquinasa." },
      { id: "D", label: "D", text: "Chikunguña; factor reumatoide y velocidad de sedimentación globular." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta un cuadro altamente sugestivo de dengue con signos de alarma, dado por dolor abdominal, vómitos persistentes, hepatomegalia mayor de 2 cm y manifestaciones hemorrágicas (petequias y prueba del torniquete positiva). El estudio inicial debe incluir hemoleucograma seriado con seguimiento del hematocrito y las plaquetas, además de pruebas de función hepática, albúmina y coagulación. Como se encuentra en el quinto día de enfermedad, pueden solicitarse antígeno NS1 o RT-PCR (si están disponibles y según el momento de la toma) o IgM, dependiendo de la disponibilidad y la fase clínica.",
    keyPoints: [
      "Cuando veas: Fiebre. Cefalea retroocular. Mialgias. Petequias. Dolor abdominal. Hepatomegalia.",
      "Debes pensar en: Dengue con signos de alarma.",
      "Tema: Arbovirosis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el reconocimiento temprano del dengue con signos de alarma.
La clave no es la fiebre.
La clave es:
Los signos de alarma.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Procedencia de zona endémica.
• Fiebre de 5 días.
• Cefalea retroocular.
• Petequias.
• Dolor abdominal.
• Vómitos.
• Hepatomegalia.
Esto corresponde a:
Dengue con signos de alarma.
¿Cuáles son los signos de alarma?
• Dolor abdominal intenso.
• Vómitos persistentes.
• Hepatomegalia >2 cm.
• Sangrado de mucosas o manifestaciones hemorrágicas.
• Aumento progresivo del hematocrito con descenso de plaquetas.
• Acumulación de líquidos.
• Letargia o irritabilidad.
¿Cuáles son los exámenes más importantes?
• Hemoleucograma seriado.
• Hematocrito.
• Plaquetas.
• AST y ALT.
• Albúmina.
• Tiempos de coagulación.
• Creatinina y electrólitos si hay compromiso sistémico.
Para confirmar la infección:
• NS1 o RT-PCR durante la fase temprana (habitualmente hasta el día 5).
• IgM a partir del quinto día de enfermedad.
¿Por qué NO es chikunguña?
Porque predominan:
• Artralgias incapacitantes.
No son característicos:
• Dolor abdominal.
• Hemoconcentración.
• Trombocitopenia.
¿Por qué NO malaria?
Porque el cuadro clínico es mucho más compatible con dengue y presenta signos clásicos de fuga capilar.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Fiebre + zona endémica."
Y responden:
Malaria.
Sin embargo:
El dato decisivo es:
La combinación de:
• Cefalea retroocular.
• Petequias.
• Prueba del torniquete positiva.
• Dolor abdominal.
• Hepatomegalia.
Esto orienta a:
Dengue con signos de alarma.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Sospechar dengue.
2.	Identificar signos de alarma.
3.	Solicitar hemoleucograma seriado y hematocrito.
4.	Confirmar mediante NS1/RT-PCR o IgM según el tiempo de evolución.
5.	Iniciar manejo hospitalario con monitorización estrecha y reposición cuidadosa de líquidos.
Perlas de examen
✅ El hematocrito y las plaquetas deben controlarse de forma seriada.
✅ El aumento del hematocrito asociado a trombocitopenia indica fuga capilar.
✅ El dolor abdominal y los vómitos persistentes son signos de alarma.
✅ La hepatomegalia mayor de 2 cm es un signo de alarma reconocido por la OMS.
✅ El antígeno NS1 es más útil en los primeros días de la enfermedad.
✅ La IgM suele positivizarse a partir del quinto día de evolución.
✅ Los AINE están contraindicados por el riesgo de sangrado; el antipirético de elección es el acetaminofén.
Referencias
• Guía de Práctica Clínica Colombiana para Dengue.
• Organización Mundial de la Salud. Dengue: Guidelines for Diagnosis, Treatment, Prevention and Control.
• Ministerio de Salud y Protección Social de Colombia. Lineamientos para la vigilancia y manejo clínico del dengue.
• Nelson Textbook of Pediatrics.
• UpToDate: Clinical Manifestations and Diagnosis of Dengue Virus Infection.`,
  },
  {
    id: "dr-q-399",
    examArea: "GINECOLOGÍA - ENFERMEDADES DE TRANSMISIÓN SEXUAL",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Mujer de 30 años, trabajadora sexual, consulta por reaparición de lesiones vesiculares agrupadas y ulcerativas en labios mayores y monte de Venus, intensamente dolorosas y pruriginosas, de 48 horas de evolución. Refiere un episodio similar hace un año con resolución completa tras tratamiento con aciclovir oral y crema de aciclovir. Niega embarazo y refiere planificación definitiva mediante salpingectomía bilateral. No utiliza preservativo durante sus relaciones sexuales.\n¿Cuál es el manejo más apropiado?",
    options: [
      { id: "A", label: "A", text: "Aciclovir tópico como único tratamiento." },
      { id: "B", label: "B", text: "Aciclovir oral durante el episodio actual, tamizaje para otras infecciones de transmisión sexual y consejería sobre uso consistente del preservativo." },
      { id: "C", label: "C", text: "Penicilina benzatínica intramuscular dosis única." },
      { id: "D", label: "D", text: "Crioterapia de las lesiones vulvares." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta una recurrencia de herpes genital, cuyo tratamiento de elección es un antiviral por vía oral (aciclovir, valaciclovir o famciclovir). El tratamiento tópico con aciclovir tiene un beneficio clínico mínimo y no se recomienda como monoterapia. Debido a que presenta factores de alto riesgo para otras infecciones de transmisión sexual, debe ofrecerse tamizaje para VIH, sífilis, hepatitis B, hepatitis C (según factores de riesgo) y otras ITS, además de educación sobre el uso correcto y consistente del preservativo.",
    keyPoints: [
      "Cuando veas: Vesículas dolorosas. Úlceras genitales. Episodios recurrentes.",
      "Debes pensar en: Herpes genital recurrente.",
      "Tema: Infecciones de transmisión sexual.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el manejo del herpes genital recurrente.
La clave no son las úlceras.
La clave es:
La recurrencia.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Lesiones vesiculares.
• Dolor.
• Prurito.
• Antecedente de episodio previo.
Esto corresponde a:
Herpes genital recurrente por virus herpes simple (VHS), generalmente tipo 2, aunque el VHS-1 también puede ser responsable.
¿Cuál es el tratamiento?
Debe iniciarse:
Aciclovir oral.
Esquemas aceptados incluyen:
• Aciclovir 400 mg VO cada 8 horas durante 5 días.
O
• Valaciclovir.
O
• Famciclovir.
¿Cuándo se considera tratamiento supresor?
Cuando existen:
• Recurrencias frecuentes (habitualmente ≥6 episodios por año).
• Importante afectación de la calidad de vida.
En ese caso se indica:
Aciclovir o valaciclovir diariamente durante varios meses.
¿Qué otras intervenciones deben realizarse?
Toda persona con una ITS debe recibir:
• Tamizaje para VIH.
• Prueba para sífilis.
• Tamizaje para hepatitis B y C cuando esté indicado.
• Evaluación para gonorrea y clamidia según el riesgo.
• Consejería sobre preservativo.
¿Por qué NO usar solo aciclovir en crema?
Porque:
Su beneficio es escaso.
Las guías internacionales no recomiendan el tratamiento tópico como monoterapia.
¿Por qué NO penicilina?
Porque:
La penicilina trata:
Sífilis.
No herpes genital.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Ya había mejorado con aciclovir en crema."
Y responden:
Repetir el tratamiento tópico.
Sin embargo:
El dato decisivo es:
La recurrencia de herpes genital.
El manejo recomendado es:
Antiviral sistémico.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Reconocer el herpes genital recurrente.
2.	Iniciar antiviral oral.
3.	Realizar tamizaje para otras ITS.
4.	Educar sobre prevención y uso del preservativo.
5.	Considerar terapia supresora si las recurrencias son frecuentes.
Perlas de examen
✅ El herpes genital recurrente se trata con antivirales por vía oral.
✅ El aciclovir tópico no se recomienda como tratamiento único.
✅ Debe ofrecerse tamizaje para VIH y sífilis a todo paciente con una ITS.
✅ El uso del preservativo disminuye, pero no elimina completamente, el riesgo de transmisión del VHS.
✅ La terapia supresora está indicada en pacientes con recurrencias frecuentes o gran impacto en la calidad de vida.
✅ La planificación definitiva no protege contra las infecciones de transmisión sexual.
✅ El VHS permanece latente en los ganglios sensitivos y puede reactivarse periódicamente.
Referencias
• Guía de Práctica Clínica Colombiana para la atención de las infecciones de transmisión sexual.
• Centers for Disease Control and Prevention (CDC). Sexually Transmitted Infections Treatment Guidelines, 2021.
• Organización Mundial de la Salud. Guidelines for the Management of Sexually Transmitted Infections.
• UpToDate: Treatment and Prevention of Herpes Simplex Virus Type 1 in Immunocompetent Adolescents and Adults.
• Red Book. American Academy of Pediatrics.`,
  },
  {
    id: "dr-q-400",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - DIABETES GESTACIONAL",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Mujer de 22 años, primigesta, cursó embarazo complicado por diabetes mellitus gestacional manejada con insulina, logrando adecuado control glucémico durante toda la gestación. Finaliza el embarazo a las 37.6 semanas mediante parto sin complicaciones, obteniéndose un recién nacido sano. Durante la visita posparto inmediata pregunta si debe continuar aplicándose la insulina y si requiere algún examen de seguimiento.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Continuar el mismo esquema de insulina y solicitar hemoglobina glucosilada a los 3 meses." },
      { id: "B", label: "B", text: "Suspender la insulina inmediatamente después del parto y solicitar una prueba de tolerancia oral a la glucosa (75 g) entre las 4 y 12 semanas posparto." },
      { id: "C", label: "C", text: "Suspender la insulina y no realizar ningún estudio adicional, pues la diabetes gestacional desaparece tras el parto." },
      { id: "D", label: "D", text: "Continuar insulina durante 6 meses y solicitar únicamente glucemia en ayunas al año." },
    ],
    correctOptionId: "B",
    explanation: "Después del alumbramiento desaparece la resistencia a la insulina mediada por las hormonas placentarias, por lo que la mayoría de las mujeres con diabetes gestacional pueden suspender la insulina inmediatamente después del parto. Sin embargo, estas pacientes tienen un alto riesgo de desarrollar diabetes mellitus tipo 2, por lo que todas deben realizarse una prueba de tolerancia oral a la glucosa con 75 g entre las 4 y 12 semanas posparto, método recomendado por las guías internacionales y el Ministerio de Salud de Colombia.",
    keyPoints: [
      "Cuando veas: Diabetes gestacional. Tratamiento con insulina. Posparto inmediato.",
      "Debes pensar en: Suspender la insulina y tamizar diabetes persistente.",
      "Tema: Diabetes gestacional.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta muy frecuente porque evalúa el seguimiento posparto de la diabetes gestacional.
La clave no es el tratamiento durante el embarazo.
La clave es:
El manejo después del parto.
¿Qué está ocurriendo realmente?
Durante el embarazo:
Las hormonas placentarias producen:
• Resistencia a la insulina.
Después del parto:
Con la expulsión de la placenta:
La resistencia a la insulina desaparece rápidamente.
¿Qué ocurre con la insulina?
En mujeres con:
Diabetes gestacional pura
Debe:
Suspenderse inmediatamente después del parto, salvo que persista hiperglucemia.
¿Qué examen debe solicitarse?
La prueba de elección es:
Prueba de tolerancia oral a la glucosa con 75 g (PTGO).
¿Cuándo?
Entre las 4 y 12 semanas posparto.
¿Por qué NO solicitar solamente HbA1c?
Porque:
En el posparto temprano la hemoglobina glucosilada tiene menor sensibilidad para detectar alteraciones del metabolismo de la glucosa y no sustituye la PTGO en este contexto.
¿Por qué es importante el seguimiento?
Porque aproximadamente:
• El 30-50% de las mujeres desarrollarán diabetes mellitus tipo 2 en los siguientes años.
Además:
Existe alto riesgo de recurrencia de diabetes gestacional en futuros embarazos.
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
"Continuar la insulina."
Sin embargo:
El dato decisivo es:
Que la paciente tenía:
Diabetes gestacional, no diabetes pregestacional.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Finaliza el embarazo.
2.	Suspender la insulina.
3.	Controlar glucemias en el posparto inmediato según evolución clínica.
4.	Solicitar PTGO con 75 g entre las 4 y 12 semanas.
5.	Realizar seguimiento periódico por el elevado riesgo de diabetes tipo 2.
Perlas de examen
✅ La insulina generalmente se suspende inmediatamente después del parto en la diabetes gestacional.
✅ La PTGO con 75 g entre las 4 y 12 semanas es el estudio de elección para el seguimiento.
✅ La HbA1c no reemplaza la PTGO en el control posparto inicial.
✅ La diabetes gestacional aumenta significativamente el riesgo futuro de diabetes mellitus tipo 2.
✅ Deben promoverse cambios en el estilo de vida y control periódico de glucemia.
✅ En embarazos futuros debe realizarse tamización temprana para diabetes gestacional.
✅ Si la PTGO es normal, se recomienda repetir el tamizaje para diabetes al menos cada 1 a 3 años.
Referencias
• American Diabetes Association. Standards of Care in Diabetes 2025.
• ACOG Practice Bulletin: Gestational Diabetes Mellitus.
• Ministerio de Salud y Protección Social de Colombia. Guía de Práctica Clínica para Diabetes en el Embarazo.
• FIGO Guidelines on Hyperglycemia in Pregnancy.
• Williams Obstetrics, 26th Edition.`,
  },
  {
    id: "dr-q-401",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - DIABETES GESTACIONAL",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Mujer de 29 años, G2P2, consulta a control posparto 8 semanas después de un embarazo complicado por diabetes mellitus gestacional tratada con insulina. Durante el puerperio inmediato suspendió la insulinoterapia y sus glucemias fueron normales. Actualmente se encuentra asintomática y pregunta cómo debe realizarse el seguimiento para descartar diabetes mellitus en el futuro.\n¿Cuál es la estrategia de tamización recomendada?",
    options: [
      { id: "A", label: "A", text: "Solicitar hemoglobina glucosilada (HbA1c) a las 6 semanas y, si es normal, no requiere más controles." },
      { id: "B", label: "B", text: "Realizar una prueba de tolerancia oral a la glucosa (PTGO) con 75 g entre las 4 y 12 semanas posparto; si es normal, continuar tamización para diabetes cada 1 a 3 años." },
      { id: "C", label: "C", text: "Solicitar únicamente glucemia en ayunas anual durante toda la vida." },
      { id: "D", label: "D", text: "No requiere seguimiento, ya que la diabetes gestacional desaparece después del parto." },
    ],
    correctOptionId: "B",
    explanation: "La PTGO con 75 g entre las 4 y 12 semanas posparto es el examen de elección para detectar diabetes o prediabetes persistente en mujeres con antecedente de diabetes gestacional. Si el resultado es normal, la paciente continúa teniendo un riesgo elevado de desarrollar diabetes mellitus tipo 2, por lo que debe mantenerse un tamizaje periódico cada 1 a 3 años mediante glucemia en ayunas, HbA1c o una nueva PTGO, según el riesgo individual y las recomendaciones clínicas.",
    keyPoints: [
      "Cuando veas: Antecedente de diabetes gestacional. Control posparto. Paciente asintomática.",
      "Debes pensar en: PTGO a las 4-12 semanas y tamización periódica.",
      "Tema: Seguimiento de la diabetes gestacional.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los seguimientos más preguntados en ginecología y endocrinología.
La clave no es la insulina.
La clave es:
El seguimiento después del embarazo.
¿Qué está ocurriendo realmente?
La paciente tuvo:
• Diabetes gestacional.
Después del parto:
La mayoría recupera la normoglucemia.
Sin embargo:
El riesgo de desarrollar diabetes mellitus tipo 2 permanece elevado.
¿Qué examen debe solicitarse?
La prueba de elección es:
Prueba de tolerancia oral a la glucosa con 75 g.
¿Cuándo?
Entre las 4 y 12 semanas posparto.
Si la prueba es normal, ¿termina el seguimiento?
No.
Debe continuarse el tamizaje:
Cada 1 a 3 años.
¿Qué pruebas pueden utilizarse posteriormente?
• Glucemia en ayunas.
• Hemoglobina glucosilada.
• PTGO con 75 g cuando exista mayor sospecha clínica.
¿Por qué NO utilizar únicamente HbA1c en el posparto temprano?
Porque:
Durante las primeras semanas posteriores al parto presenta menor sensibilidad diagnóstica y no reemplaza la PTGO.
¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan únicamente:
"PTGO a las 6 semanas."
Pero olvidan que:
El seguimiento continúa toda la vida, debido al elevado riesgo de desarrollar diabetes tipo 2.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Suspender la insulina tras el parto (si corresponde).
2.	Realizar PTGO con 75 g entre las 4 y 12 semanas.
3.	Interpretar el resultado.
4.	Si es normal, continuar tamización cada 1 a 3 años.
5.	En un embarazo futuro, realizar tamización desde el primer control prenatal.
Perlas de examen
✅ La PTGO con 75 g es el examen de elección entre las 4 y 12 semanas posparto.
✅ La HbA1c no sustituye la PTGO en el tamizaje posparto inicial.
✅ Si la PTGO es normal, el tamizaje debe repetirse cada 1 a 3 años.
✅ El antecedente de diabetes gestacional aumenta significativamente el riesgo de diabetes mellitus tipo 2.
✅ Deben promoverse cambios en el estilo de vida para reducir dicho riesgo.
✅ En futuros embarazos se recomienda tamización temprana para diabetes desde la primera consulta prenatal.
✅ La recurrencia de diabetes gestacional en embarazos posteriores es frecuente.
Referencias
• American Diabetes Association. Standards of Care in Diabetes 2025.
• ACOG Practice Bulletin: Gestational Diabetes Mellitus.
• FIGO Initiative on Hyperglycemia in Pregnancy.
• Ministerio de Salud y Protección Social de Colombia. Guía de Práctica Clínica para Diabetes en el Embarazo.
• Williams Obstetrics, 26th Edition.`,
  },
  {
    id: "dr-q-402",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - PROMOCIÓN Y MANTENIMIENTO DE LA SALUD",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Mujer de 21 años consulta a una cita de promoción y mantenimiento de la salud. Refiere inicio de relaciones sexuales a los 15 años y múltiples parejas sexuales durante los últimos años. No presenta síntomas ginecológicos y solicita la realización de una citología cervicouterina por considerar que tiene alto riesgo de cáncer de cuello uterino.\nDe acuerdo con las RIAS y los lineamientos del Ministerio de Salud y Protección Social de Colombia, ¿cuál es la recomendación más adecuada?",
    options: [
      { id: "A", label: "A", text: "Realizar citología cervicouterina anual desde esta consulta." },
      { id: "B", label: "B", text: "Solicitar prueba de ADN para VPH de alto riesgo." },
      { id: "C", label: "C", text: "No realizar tamización para cáncer de cuello uterino en este momento; iniciar citología a los 25 años y brindar consejería sobre prevención de infecciones de transmisión sexual y vacunación contra VPH si está indicada." },
      { id: "D", label: "D", text: "Realizar colposcopia por el antecedente de múltiples parejas sexuales." },
    ],
    correctOptionId: "C",
    explanation: "De acuerdo con las RIAS de Promoción y Mantenimiento de la Salud y la Guía de Práctica Clínica colombiana, el antecedente de múltiples parejas sexuales no modifica la edad de inicio del tamizaje para cáncer de cuello uterino. En mujeres menores de 25 años asintomáticas no se recomienda realizar citología como prueba de tamización. En esta consulta deben fortalecerse las estrategias de prevención primaria, incluyendo educación sexual, promoción del uso del preservativo, tamizaje para infecciones de transmisión sexual según el riesgo y verificación del estado de vacunación contra el VPH.",
    keyPoints: [
      "Cuando veas: Mujer menor de 25 años. Múltiples parejas sexuales. Solicita citología.",
      "Debes pensar en: No iniciar tamización antes de los 25 años.",
      "Tema: Tamización para cáncer de cuello uterino.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta muy frecuente porque evalúa una de las recomendaciones que más cambió con las RIAS.
La clave no son las parejas sexuales.
La clave es:
La edad de la paciente.
¿Qué está ocurriendo realmente?
La paciente presenta:
• 21 años.
• Asintomática.
• Alto riesgo para ITS.
Pero:
No cumple la edad para iniciar el tamizaje de cáncer de cuello uterino.
¿Qué recomiendan las RIAS?
Entre los:
25 y 29 años
La prueba de tamización es:
Citología cervicouterina.
A partir de los:
30 hasta los 65 años
Se prefiere:
Prueba de ADN para VPH de alto riesgo, según el esquema nacional de tamización.
¿Las múltiples parejas sexuales modifican la edad de inicio?
No.
Aumentan el riesgo de infección por VPH y otras ITS.
Pero:
No constituyen una indicación para adelantar el inicio de la citología en mujeres inmunocompetentes y asintomáticas.
¿Qué debe hacerse en esta consulta?
• Consejería sobre uso consistente del preservativo.
• Tamizaje para ITS según factores de riesgo (VIH, sífilis y otras infecciones cuando corresponda).
• Verificar esquema de vacunación contra VPH y completarlo si está indicado.
¿Por qué NO realizar prueba de ADN para VPH?
Porque:
No se recomienda como prueba de tamización en mujeres menores de 30 años dentro de las RIAS.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Múltiples parejas sexuales."
Y responden:
Realizar citología.
Sin embargo:
El dato decisivo es:
La paciente tiene 21 años.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Verificar la edad.
2.	Confirmar que es asintomática.
3.	No realizar tamización para cáncer de cuello uterino antes de los 25 años.
4.	Promover prevención de ITS.
5.	Verificar vacunación contra VPH.
Perlas de examen
✅ En Colombia el tamizaje para cáncer de cuello uterino inicia a los 25 años en mujeres de riesgo habitual.
✅ Entre los 25 y 29 años la prueba de elección es la citología cervicouterina.
✅ Entre los 30 y 65 años se recomienda preferentemente la prueba de ADN para VPH de alto riesgo.
✅ Las múltiples parejas sexuales no modifican la edad de inicio del tamizaje.
✅ La vacunación contra VPH sigue siendo una estrategia de prevención primaria.
✅ Debe ofrecerse tamizaje para ITS de acuerdo con los factores de riesgo individuales.
✅ El uso del preservativo disminuye el riesgo de ITS, aunque no elimina completamente la transmisión del VPH.
Referencias
• Ministerio de Salud y Protección Social de Colombia. RIAS para la Promoción y Mantenimiento de la Salud.
• Guía de Práctica Clínica para la detección y manejo de lesiones precancerosas de cuello uterino.
• Resolución 3280 de 2018.
• Organización Mundial de la Salud. WHO Guideline for Cervical Cancer Screening.
• ASCCP Risk-Based Management Guidelines.`,
  },
  {
    id: "dr-q-403",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - CÁNCER DE CUELLO UTERINO",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Mujer de 27 años, G0P0, acude a consulta para revisión de resultados de tamización para cáncer de cuello uterino. Refiere una citología realizada hace un año reportada como Negativa para lesión intraepitelial o malignidad (NILM). En el control actual, la citología informa Lesión Intraepitelial Escamosa de Bajo Grado (LIE-BG/LSIL). La paciente se encuentra asintomática y no tiene antecedentes de inmunosupresión.\n¿Cuál es el siguiente paso más adecuado?",
    options: [
      { id: "A", label: "A", text: "Repetir citología en un año." },
      { id: "B", label: "B", text: "Realizar prueba de ADN para VPH de alto riesgo." },
      { id: "C", label: "C", text: "Remitir a colposcopia con biopsia dirigida." },
      { id: "D", label: "D", text: "Realizar histerectomía total." },
    ],
    correctOptionId: "C",
    explanation: "En una mujer de 25 a 29 años con resultado citológico de LIE-BG (LSIL), la conducta recomendada por las guías colombianas de tamización y manejo es la remisión a colposcopia para evaluación del cuello uterino y toma de biopsia de las lesiones sospechosas. El resultado citológico previo negativo no modifica esta conducta.",
    keyPoints: [
      "Cuando veas: Mujer de 25 a 29 años. Citología con LIE-BG.",
      "Debes pensar en: Colposcopia.",
      "Tema: Lesiones intraepiteliales del cuello uterino.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el algoritmo de manejo de las alteraciones citológicas.
La clave no es la citología previa.
La clave es:
El resultado actual.
¿Qué está ocurriendo realmente?
La paciente presenta:
• 27 años.
• Citología con:
LIE-BG (LSIL).
¿Cuál es la conducta?
La paciente debe ser remitida para:
Colposcopia.
¿Por qué?
Porque la lesión de bajo grado puede corresponder a:
• Infección transitoria por VPH.
O
• Una lesión de mayor grado no detectada únicamente por citología.
La colposcopia permite:
• Identificar la zona de transformación.
• Tomar biopsias dirigidas.
• Confirmar el diagnóstico histopatológico.
¿Por qué NO repetir la citología?
Porque:
En mujeres entre 25 y 29 años, una citología con LIE-BG requiere evaluación colposcópica.
¿Por qué NO realizar histerectomía?
Porque:
El manejo depende del resultado histológico y la gran mayoría de las lesiones de bajo grado no requieren tratamiento quirúrgico radical.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Citología previa normal."
Y responden:
Repetir la citología.
Sin embargo:
El dato decisivo es:
El resultado actual: LIE-BG.
Esto orienta a:
Colposcopia.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la edad.
2.	Interpretar el resultado citológico.
3.	Remitir a colposcopia.
4.	Realizar biopsia dirigida si existen lesiones.
5.	Definir el manejo según el resultado histopatológico.
Perlas de examen
✅ En mujeres de 25 a 29 años, un resultado de LIE-BG (LSIL) amerita colposcopia.
✅ La citología previa normal no modifica la conducta.
✅ El diagnóstico definitivo depende de la biopsia cervical.
✅ La mayoría de las lesiones de bajo grado se relacionan con infección por VPH de carácter transitorio.
✅ La colposcopia permite identificar lesiones de mayor grado que pueden pasar inadvertidas en la citología.
✅ El tratamiento definitivo depende del resultado histológico.
✅ Las pacientes inmunosuprimidas siguen algoritmos diferentes y requieren vigilancia más estrecha.
Referencias
• Ministerio de Salud y Protección Social de Colombia. Guía de Práctica Clínica para la detección y manejo de lesiones precancerosas de cuello uterino.
• Resolución 3280 de 2018.
• ASCCP Risk-Based Management Consensus Guidelines.
• Organización Mundial de la Salud. WHO Guideline for Cervical Cancer Screening.
• Berek & Novak's Gynecology.`,
  },
  {
    id: "dr-q-404",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - TAMIZACIÓN DE CÁNCER DE CUELLO UTERINO",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Mujer de 30 años, con obesidad grado I (IMC 31 kg/m²), consulta a control de Promoción y Mantenimiento de la Salud. Hace 5 años se realizó prueba de ADN para VPH de alto riesgo con resultado negativo. En el control actual se practica citología cervicouterina, la cual es Negativa para lesión intraepitelial o malignidad (NILM). Niega antecedentes de inmunosupresión, infección por VIH, trasplante o lesiones cervicales previas.\nDe acuerdo con las RIAS y la Guía de Práctica Clínica colombiana, ¿cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Repetir citología cervicouterina en un año." },
      { id: "B", label: "B", text: "Realizar colposcopia por presentar obesidad." },
      { id: "C", label: "C", text: "Solicitar nuevamente prueba de ADN para VPH de alto riesgo y, si es negativa, continuar tamización cada 5 años." },
      { id: "D", label: "D", text: "Suspender el tamizaje hasta los 65 años por tener una citología normal." },
    ],
    correctOptionId: "C",
    explanation: "En Colombia, las RIAS establecen que en mujeres entre 30 y 65 años, la prueba de elección para tamización es el ADN para VPH de alto riesgo cada 5 años. En esta paciente ya transcurrieron cinco años desde el último resultado negativo, por lo que corresponde repetir la prueba. La citología negativa no modifica el esquema de tamización. La obesidad no constituye un factor que cambie el intervalo ni la estrategia de tamización.",
    keyPoints: [
      "Cuando veas: Mujer entre 30 y 65 años. ADN para VPH negativo hace 5 años. Citología actual negativa.",
      "Debes pensar en: Repetir ADN para VPH.",
      "Tema: Tamización para cáncer de cuello uterino.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa los intervalos de tamización establecidos por las RIAS.
La clave no es la citología.
La clave es:
El tiempo transcurrido desde la última prueba de ADN para VPH.
¿Qué está ocurriendo realmente?
La paciente presenta:
• 30 años.
• ADN para VPH negativo hace 5 años.
• Citología actual normal.
¿Qué corresponde hacer?
Según las RIAS:
Debe realizarse nuevamente:
Prueba de ADN para VPH de alto riesgo.
¿Por qué?
Porque en mujeres de:
30 a 65 años
La estrategia preferida de tamización es:
ADN para VPH cada 5 años.
¿La obesidad modifica el esquema?
No.
Factores como:
• Obesidad.
• Diabetes.
• Hipertensión.
• Tabaquismo.
No modifican el algoritmo de tamización.
¿Quiénes sí tienen un esquema diferente?
• Mujeres con VIH.
• Inmunosuprimidas.
• Antecedente de NIC 2, NIC 3 o cáncer de cuello uterino.
• Exposición intrauterina a dietilestilbestrol (DES).
¿Por qué NO repetir citología anual?
Porque:
La citología no es la prueba de elección para mujeres entre 30 y 65 años cuando se dispone de prueba de ADN para VPH.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Citología negativa."
Y responden:
Control en un año.
Sin embargo:
El dato decisivo es:
Han transcurrido 5 años desde la última prueba de ADN para VPH.
Esto orienta a:
Repetir la prueba de ADN para VPH.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la edad.
2.	Verificar la última prueba de tamización.
3.	Si han pasado 5 años desde un ADN para VPH negativo, repetir la prueba.
4.	Si vuelve a ser negativa, continuar tamización cada 5 años.
5.	Mantener el tamizaje hasta los 65 años, siempre que se cumplan los criterios para finalizarlo.
Perlas de examen
✅ Entre los 30 y 65 años, la prueba preferida es el ADN para VPH de alto riesgo cada 5 años.
✅ Una citología negativa no reemplaza la prueba de ADN para VPH en este grupo etario.
✅ La obesidad no modifica el intervalo de tamización.
✅ Las pacientes inmunosuprimidas siguen protocolos especiales.
✅ La tamización puede suspenderse a los 65 años únicamente si existe un adecuado antecedente de pruebas negativas y no hay factores de alto riesgo.
✅ El objetivo del ADN para VPH es detectar infección persistente por genotipos oncogénicos antes del desarrollo de lesiones precursoras.
Referencias
• Ministerio de Salud y Protección Social de Colombia. Resolución 3280 de 2018 (RIAS de Promoción y Mantenimiento de la Salud).
• Guía de Práctica Clínica para la detección y manejo de lesiones precancerosas de cuello uterino.
• Organización Mundial de la Salud. WHO Guideline for Cervical Cancer Screening.
• ASCCP Risk-Based Management Guidelines.
• Instituto Nacional de Cancerología de Colombia. Lineamientos de tamización para cáncer de cuello uterino.`,
  },
  {
    id: "dr-q-405",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - TAMIZACIÓN DE CÁNCER DE CUELLO UTERINO",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Mujer de 33 años, sexualmente activa, con dos parejas sexuales en el último año. Planifica con anticonceptivos orales combinados y no utiliza preservativo. Como parte del programa de tamización para cáncer de cuello uterino se realiza prueba de ADN para VPH, la cual resulta positiva para VPH 18 (genotipo de alto riesgo). La citología cervicouterina es Negativa para lesión intraepitelial o malignidad (NILM). No presenta antecedentes de inmunosupresión ni de lesiones cervicales previas.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Repetir la prueba de ADN para VPH en 5 años." },
      { id: "B", label: "B", text: "Repetir citología en un año." },
      { id: "C", label: "C", text: "Remitir inmediatamente a colposcopia con biopsia dirigida si se identifican lesiones." },
      { id: "D", label: "D", text: "Realizar conización cervical." },
    ],
    correctOptionId: "C",
    explanation: "La detección de VPH 16 o VPH 18 confiere un alto riesgo de desarrollar lesiones intraepiteliales de alto grado y cáncer de cuello uterino. Por este motivo, la presencia de VPH 16 o 18 amerita colposcopia independientemente del resultado de la citología. La citología negativa no descarta una lesión significativa cuando existe infección por estos genotipos de alto riesgo.\nNota para el examen: si el reporte indica únicamente VPH de alto riesgo diferente de 16 y 18 con citología negativa, la conducta habitual es repetir la prueba de VPH al año (según el algoritmo nacional). Sin embargo, si el resultado incluye VPH 18, la conducta correcta es colposcopia.",
    keyPoints: [
      "Cuando veas: Mujer ≥30 años. ADN para VPH positivo para 16 o 18. Citología negativa.",
      "Debes pensar en: Colposcopia.",
      "Tema: Tamización para cáncer de cuello uterino.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los algoritmos más preguntados en ginecología.
La clave no es la citología.
La clave es:
El genotipo del VPH.
¿Qué está ocurriendo realmente?
La paciente presenta:
• ADN para VPH positivo.
• Genotipo 18.
• Citología negativa.
Aunque la citología sea normal:
La paciente tiene un riesgo elevado de presentar una lesión cervical significativa.
Por ello:
Debe realizarse:
Colposcopia.
¿Por qué?
Los genotipos:
• VPH 16.
• VPH 18.
Son responsables de la mayoría de los casos de cáncer de cuello uterino y se consideran de mayor riesgo oncogénico.
¿Por qué NO repetir la citología?
Porque:
La presencia de VPH 18 modifica la conducta.
¿Cuándo se repite el ADN para VPH al año?
Cuando existe:
• VPH de alto riesgo diferente de 16 y 18.
• Citología negativa.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Citología negativa."
Y responden:
Control en un año.
Sin embargo:
El dato decisivo es:
La positividad para VPH 18.
Esto obliga a:
Colposcopia inmediata.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar el genotipo del VPH.
2.	Si es 16 o 18 → colposcopia.
3.	Si es otro VPH de alto riesgo y la citología es negativa → seguimiento según algoritmo (habitualmente repetición del VPH al año).
4.	Realizar biopsia si la colposcopia evidencia lesiones.
5.	Definir el tratamiento de acuerdo con el resultado histopatológico.
Perlas de examen
✅ El VPH 16 y el VPH 18 requieren colposcopia, aun con citología negativa.
✅ La citología normal no excluye lesiones precursoras en pacientes con VPH 16 o 18.
✅ El tratamiento definitivo depende del resultado histológico.
✅ El uso de anticonceptivos orales no modifica el algoritmo de tamización.
✅ El uso consistente del preservativo disminuye el riesgo de nuevas infecciones por VPH y otras ITS.
✅ Debe reforzarse la educación sobre prevención y adherencia al seguimiento.
Referencias
• Ministerio de Salud y Protección Social de Colombia. Guía de Práctica Clínica para la detección y manejo de lesiones precancerosas de cuello uterino.
• Resolución 3280 de 2018.
• ASCCP Risk-Based Management Consensus Guidelines.
• Organización Mundial de la Salud. WHO Guideline for Cervical Cancer Screening.
• Instituto Nacional de Cancerología de Colombia. Lineamientos de tamización para cáncer de cuello uterino.`,
  },
  {
    id: "dr-q-406",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - RUPTURA PREMATURA DE MEMBRANAS PRETÉRMINO",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Primigestante de 20 años, con embarazo de 33 semanas + 6 días, consulta al servicio de urgencias por salida abundante de líquido vaginal claro desde hace 6 horas, suficiente para manchar la ropa y formar un charco en el piso. Niega actividad uterina, sangrado vaginal o fiebre. Refiere adecuada percepción de movimientos fetales. Al examen físico se encuentra hemodinámicamente estable, afebril y sin dolor abdominal. Los últimos controles prenatales fueron normales. La especuloscopia confirma salida de líquido amniótico a través del orificio cervical externo.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Inducir inmediatamente el trabajo de parto con oxitocina." },
      { id: "B", label: "B", text: "Hospitalizar, iniciar antibioticoterapia para prolongar la latencia, administrar un ciclo de corticoides para maduración pulmonar fetal, vigilancia materno-fetal y profilaxis para Streptococcus agalactiae según el estado de colonización." },
      { id: "C", label: "C", text: "Dar egreso con reposo domiciliario y control en una semana." },
      { id: "D", label: "D", text: "Realizar cesárea urgente por ruptura prematura de membranas." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta una ruptura prematura de membranas pretérmino (RPMPT) antes de las 34 semanas, sin datos de infección, trabajo de parto, sufrimiento fetal ni otras indicaciones de finalización inmediata del embarazo. El manejo recomendado es expectante intrahospitalario, con antibioticoterapia para prolongar la latencia, un ciclo único de corticoides antenatales y vigilancia estrecha materna y fetal. Si se desconoce el estado de colonización para Streptococcus agalactiae, debe administrarse profilaxis intraparto cuando corresponda.",
    keyPoints: [
      "Cuando veas: Embarazo <34 semanas. Salida de líquido amniótico. Sin trabajo de parto. Sin corioamnionitis.",
      "Debes pensar en: RPM pretérmino con manejo expectante.",
      "Tema: Ruptura prematura de membranas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el manejo según la edad gestacional en la ruptura prematura de membranas.
La clave no es la salida de líquido.
La clave es:
La edad gestacional: 33 semanas + 6 días.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Ruptura de membranas.
• Antes de las 34 semanas.
• Sin infección.
• Sin trabajo de parto.
Esto corresponde a:
Ruptura prematura de membranas pretérmino (RPMPT).
¿Cuál es el manejo?
Debe hospitalizarse para:
• Vigilancia materna y fetal.
• Antibioticoterapia para prolongar la latencia.
• Corticoides antenatales (un ciclo).
• Monitorización de signos de corioamnionitis.
• Vigilancia del bienestar fetal.
¿Qué antibióticos se utilizan?
El esquema clásico de latencia incluye:
• Ampicilina intravenosa seguida de amoxicilina oral.
Asociada a:
• Eritromicina o azitromicina, según disponibilidad y protocolos institucionales.
¿Se administran corticoides?
Sí.
Entre las:
24 y 33 semanas + 6 días, y pueden considerarse hasta las 36 semanas + 6 días en situaciones seleccionadas si no se administraron previamente.
¿Qué ocurre si aparece?
• Corioamnionitis.
• Sufrimiento fetal.
• Trabajo de parto establecido.
• Desprendimiento de placenta.
En esos casos:
Debe finalizarse la gestación.
¿Por qué NO inducir inmediatamente?
Porque:
Antes de las 34 semanas, en ausencia de contraindicaciones, el manejo expectante mejora los desenlaces neonatales.
¿Por qué NO realizar cesárea?
Porque:
La ruptura prematura de membranas no constituye por sí sola una indicación de cesárea.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Ruptura de membranas."
Y responden:
Inducción inmediata.
Sin embargo:
El dato decisivo es:
33 semanas + 6 días, sin infección y sin trabajo de parto.
Esto orienta a:
Manejo expectante intrahospitalario.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar la ruptura de membranas.
2.	Determinar la edad gestacional.
3.	Descartar corioamnionitis y compromiso fetal.
4.	Iniciar antibióticos de latencia y corticoides.
5.	Finalizar la gestación solo si aparece una indicación materna o fetal o al alcanzar la edad gestacional recomendada según las guías.
Perlas de examen
✅ La RPM pretérmino antes de las 34 semanas suele manejarse de forma expectante si no existen contraindicaciones.
✅ La antibioticoterapia prolonga el período de latencia y disminuye complicaciones infecciosas.
✅ Debe administrarse un ciclo de corticoides para maduración pulmonar fetal.
✅ Debe vigilarse estrechamente la aparición de corioamnionitis.
✅ La ruptura prematura de membranas no es una indicación de cesárea.
✅ El tacto vaginal digital debe evitarse hasta definir la conducta, ya que incrementa el riesgo de infección.
✅ La especuloscopia es el método inicial recomendado para confirmar la salida de líquido amniótico.
Referencias
• ACOG Practice Bulletin No. 217: Prelabor Rupture of Membranes.
• Guía de Práctica Clínica Colombiana para la prevención, detección y manejo de las complicaciones del embarazo.
• FIGO Good Practice Recommendations.
• Williams Obstetrics, 26th Edition.
• Royal College of Obstetricians and Gynaecologists (RCOG). Green-top Guideline: Preterm Prelabour Rupture of Membranes.`,
  },
  {
    id: "dr-q-407",
    examArea: "URGENCIAS - TRAUMA CRANEOENCEFÁLICO",
    topic: "URGENCIAS",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","urgencias"],
    statement: "Hombre de 27 años, caballista, es encontrado por el cuerpo de bomberos acostado en la plaza principal de un municipio luego de una cabalgata. Es llevado al puesto de salud de primer nivel. Al ingreso se encuentra en aparente estado de alicoramiento, despierto, consciente y orientado (Glasgow 15/15), con cefalea occipital intensa y amnesia retrógrada; no recuerda el accidente ni los acontecimientos ocurridos durante las últimas horas. Al examen físico presenta una herida de 5 cm en región occipital con sangrado controlado, sin focalización neurológica ni otros hallazgos traumáticos relevantes. El paciente insiste en regresar a su casa para \"pasar el guayabo\".\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Dar egreso con analgésicos y recomendaciones, ya que el Glasgow es 15." },
      { id: "B", label: "B", text: "Sutura de la herida y observación por dos horas antes del alta." },
      { id: "C", label: "C", text: "Remitir de manera prioritaria a un centro con capacidad para realizar TAC de cráneo y observación hospitalaria, sin otorgar egreso." },
      { id: "D", label: "D", text: "Solicitar radiografía de cráneo y dar salida si no evidencia fracturas." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta un traumatismo craneoencefálico leve (Glasgow 15) con criterios de alto riesgo para lesión intracraneal, incluyendo amnesia retrógrada, mecanismo de trauma no claramente establecido, cefalea importante, intoxicación alcohólica y traumatismo occipital. En un puesto de salud de primer nivel, la conducta indicada es no dar egreso, estabilizar al paciente, reparar la herida si es necesario y remitir para tomografía de cráneo y vigilancia.",
    keyPoints: [
      "Cuando veas: Glasgow 15. Amnesia postraumática. Intoxicación alcohólica. Cefalea. Trauma craneal.",
      "Debes pensar en: Necesidad de TAC de cráneo.",
      "Tema: Trauma craneoencefálico leve.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa los criterios para solicitar una TAC de cráneo en el trauma craneoencefálico leve.
La clave no es el Glasgow.
La clave es:
Los factores de riesgo asociados.
¿Qué está ocurriendo realmente?
El paciente presenta:
• TCE leve.
• Glasgow 15.
Pero además:
• Amnesia retrógrada.
• Intoxicación alcohólica.
• Cefalea.
• Trauma occipital.
La intoxicación alcohólica impide una valoración neurológica completamente confiable y puede enmascarar el deterioro clínico.
¿Qué indican las guías?
Este paciente requiere:
• Observación médica.
• TAC de cráneo.
• Remisión si el centro no dispone de imágenes diagnósticas.
¿Por qué NO dar salida?
Porque existe riesgo de:
• Hematoma epidural.
• Hematoma subdural.
• Contusión cerebral.
• Hemorragia intracraneal tardía.
¿Por qué NO solicitar radiografía de cráneo?
Porque:
La radiografía no descarta lesiones intracraneales y no forma parte de la evaluación del TCE leve en las guías actuales.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Glasgow 15."
Y responden:
Alta domiciliaria.
Sin embargo:
Los datos decisivos son:
• Amnesia.
• Intoxicación alcohólica.
• Cefalea.
Estos son criterios para:
Realizar TAC de cráneo y observación.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Evaluar ABCDE.
2.	Clasificar el TCE.
3.	Identificar factores de riesgo.
4.	Solicitar TAC de cráneo o remitir si no está disponible.
5.	No otorgar egreso hasta descartar lesión intracraneal clínicamente significativa.
Perlas de examen
✅ Glasgow 15 no excluye una lesión intracraneal.
✅ La amnesia postraumática es un criterio para realizar neuroimagen.
✅ La intoxicación alcohólica dificulta la valoración neurológica y aumenta la indicación de observación.
✅ La radiografía de cráneo no está indicada para evaluar un TCE leve.
✅ La TAC de cráneo es el estudio de elección.
✅ En instituciones de primer nivel debe remitirse oportunamente cuando no se disponga de TAC.
✅ Antes de la remisión deben realizarse limpieza y cierre de la herida, profilaxis antitetánica según el antecedente vacunal y monitorización neurológica seriada.
Referencias
• ATLS® 11th Edition.
• NICE Guideline NG232: Head Injury (2023).
• Canadian CT Head Rule.
• ACEP Clinical Policy for Mild Traumatic Brain Injury.
• Ministerio de Salud y Protección Social de Colombia. Guía para la atención inicial del paciente politraumatizado.`,
  },
  {
    id: "dr-q-408",
    examArea: "URGENCIAS - TRAUMA CRANEOENCEFÁLICO",
    topic: "URGENCIAS",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","urgencias"],
    statement: "Hombre de 60 años es traído por el cuerpo de bomberos al servicio de urgencias de un hospital de primer nivel por alteración del estado de conciencia y aliento etílico. Vive solo y los vecinos refieren que \"ha permanecido dormido desde hace dos días luego de irse de parranda\". Al ingreso se encuentra hemodinámicamente estable, sin focalización neurológica evidente, por lo que el médico de turno diagnostica intoxicación etílica aguda e inicia hidratación intravenosa y vigilancia neurológica. Durante el cambio de turno, el personal de enfermería informa un episodio de relajación de esfínteres y persistencia del compromiso del estado de conciencia.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Continuar observación y reposición de líquidos, ya que el cuadro es compatible con intoxicación alcohólica." },
      { id: "B", label: "B", text: "Administrar flumazenil por probable intoxicación por depresores del sistema nervioso central." },
      { id: "C", label: "C", text: "Considerar un traumatismo craneoencefálico hasta demostrar lo contrario, activar remisión urgente para tomografía de cráneo y valoración por un centro de mayor complejidad." },
      { id: "D", label: "D", text: "Dar de alta cuando desaparezca el aliento etílico." },
    ],
    correctOptionId: "C",
    explanation: "Todo paciente con alteración del estado de conciencia atribuida inicialmente a intoxicación alcohólica debe ser reevaluado de forma continua. La persistencia del compromiso neurológico, especialmente asociada a incontinencia de esfínteres, obliga a sospechar una lesión neurológica estructural, siendo el hematoma subdural una de las principales posibilidades diagnósticas en este contexto. En un hospital de primer nivel, la conducta correcta es estabilizar al paciente y remitir de forma urgente para realización de TAC de cráneo, sin asumir que la alteración se debe únicamente al alcohol.",
    keyPoints: [
      "Cuando veas: Paciente con aliento etílico. Alteración del estado de conciencia prolongada. Relajación de esfínteres. Evolución no esperada.",
      "Debes pensar en: Traumatismo craneoencefálico hasta demostrar lo contrario.",
      "Tema: Trauma craneoencefálico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los errores diagnósticos más frecuentes en urgencias.
La clave no es el alcohol.
La clave es:
La evolución clínica.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Alteración del estado de conciencia.
• Aliento etílico.
• Evolución de aproximadamente dos días.
• Relajación de esfínteres.
Esto obliga a pensar que:
No todo es atribuible a la intoxicación alcohólica.
¿Qué diagnóstico debe descartarse primero?
Un:
Traumatismo craneoencefálico con hemorragia intracraneal, especialmente un hematoma subdural, frecuente en adultos mayores tras traumatismos inadvertidos.
¿Por qué?
Porque el alcohol:
• Favorece las caídas.
• Enmascara el examen neurológico.
• Retrasa el diagnóstico.
¿Cuál es la conducta?
• Reevaluación neurológica inmediata.
• ABCDE.
• Glucemia capilar.
• Remisión urgente para TAC de cráneo.
• Observación en un centro con capacidad diagnóstica y terapéutica.
¿Por qué NO continuar solo con líquidos?
Porque:
La persistencia del compromiso neurológico es un signo de alarma.
¿Por qué NO administrar flumazenil?
Porque:
No existe evidencia de intoxicación por benzodiacepinas y su uso indiscriminado puede desencadenar convulsiones.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Aliento etílico."
Y responden:
Intoxicación alcohólica.
Sin embargo:
El dato decisivo es:
La persistencia del deterioro neurológico y la relajación de esfínteres.
Esto obliga a:
Descartar una lesión intracraneal.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	No atribuir automáticamente el compromiso neurológico al alcohol.
2.	Reevaluar continuamente al paciente.
3.	Identificar signos de alarma.
4.	Solicitar o remitir para TAC de cráneo.
5.	Mantener observación hasta establecer el diagnóstico.
Perlas de examen
✅ Todo paciente con intoxicación alcohólica debe tener una causa neurológica descartada si la evolución no es la esperada.
✅ El hematoma subdural es una complicación frecuente tras caídas en pacientes alcohólicos y adultos mayores.
✅ La relajación de esfínteres constituye un signo de alarma neurológico.
✅ La TAC de cráneo es el estudio inicial de elección.
✅ La intoxicación alcohólica es un diagnóstico de exclusión cuando existe antecedente de trauma o alteración neurológica persistente.
✅ Nunca debe darse de alta a un paciente con deterioro del estado de conciencia sin una explicación clara.
✅ En instituciones de baja complejidad debe priorizarse la remisión temprana cuando no se dispone de neuroimagen.
Referencias
• ATLS® 11th Edition.
• NICE Guideline NG232: Head Injury (2023).
• ACEP Clinical Policy for Mild and Moderate Traumatic Brain Injury.
• Tintinalli's Emergency Medicine.
• Ministerio de Salud y Protección Social de Colombia. Guía para la atención inicial del paciente politraumatizado.`,
  },
  {
    id: "dr-q-409",
    examArea: "PSIQUIATRÍA - URGENCIAS PSIQUIÁTRICAS",
    topic: "PSIQUIATRÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","psiquiatria"],
    statement: "Mujer de 27 años, con antecedente de trastorno afectivo bipolar tipo I, en abandono del tratamiento farmacológico desde hace varios meses debido a situación de calle y consumo de sustancias psicoactivas. Es trasladada al servicio de urgencias por la Policía Nacional, quienes informan que fue encontrada golpeando a varias mujeres en vía pública mientras manifestaba ser \"la Miss Universo Colombia\". Al ingreso se encuentra despierta, verborreica, con ideas delirantes de grandeza, heteroagresiva, amenazante y hostil hacia el personal de salud, por lo que permanece contenida físicamente por los uniformados.\n¿Cuál es la conducta inicial más apropiada?",
    options: [
      { id: "A", label: "A", text: "Intentar psicoterapia de contención y esperar que disminuya la agitación espontáneamente." },
      { id: "B", label: "B", text: "Administrar diazepam oral y dar egreso cuando disminuya la agresividad." },
      { id: "C", label: "C", text: "Realizar contención verbal, mantener medidas de seguridad, administrar sedación farmacológica de urgencia (antipsicótico asociado o no a benzodiacepina según el contexto clínico), continuar la valoración médica para descartar causas orgánicas y solicitar valoración por psiquiatría para hospitalización involuntaria si persiste el riesgo." },
      { id: "D", label: "D", text: "Iniciar litio por vía oral como único tratamiento y citar a control ambulatorio." },
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta un episodio maníaco con síntomas psicóticos y heteroagresividad, constituyendo una urgencia psiquiátrica. La prioridad inicial es proteger a la paciente, al personal de salud y a terceros mediante medidas de desescalamiento, contención física solo cuando sea estrictamente necesaria y sedación farmacológica. Posteriormente debe descartarse una causa médica o tóxica contribuyente y realizar valoración por psiquiatría para definir el tratamiento definitivo y la necesidad de hospitalización, que puede ser involuntaria si existe riesgo para sí misma o para otras personas.",
    keyPoints: [
      "Cuando veas: Trastorno bipolar. Delirio de grandeza. Verborrea. Agitación. Heteroagresividad.",
      "Debes pensar en: Manía con síntomas psicóticos.",
      "Tema: Urgencias psiquiátricas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el manejo inicial del paciente agitado en urgencias.
La clave no es el diagnóstico.
La clave es:
El riesgo inmediato.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Trastorno bipolar.
• Delirio megalomaníaco.
• Agitación psicomotora.
• Conducta heteroagresiva.
Esto constituye:
Una urgencia psiquiátrica.
¿Cuál es la prioridad?
Garantizar la seguridad de:
• La paciente.
• El personal de salud.
• Otros pacientes.
¿Cómo debe iniciarse el manejo?
Siempre que sea posible:
1.	Contención verbal.
2.	Ambiente tranquilo.
3.	Disminución de estímulos.
Si esto fracasa o existe riesgo inminente:
Se indica:
Sedación farmacológica con un antipsicótico (por ejemplo, haloperidol u olanzapina) asociado o no a una benzodiacepina (como lorazepam o midazolam), de acuerdo con el estado clínico y las guías institucionales.
¿Debe descartarse otra causa?
Sí.
Siempre debe investigarse:
• Hipoglucemia.
• Hipoxia.
• Intoxicación o abstinencia de sustancias.
• Trastornos metabólicos.
• Otras causas neurológicas.
¿Requiere hospitalización?
Sí.
Por el riesgo de agresión y la pérdida del juicio de realidad, está indicada la valoración por psiquiatría y la hospitalización cuando persista el riesgo, incluso si debe realizarse de manera involuntaria conforme a la legislación vigente.
¿Por qué NO iniciar únicamente litio?
Porque:
El litio tiene un inicio de acción lento y no controla la agitación aguda.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Trastorno bipolar."
Y responden:
Litio.
Sin embargo:
El dato decisivo es:
La heteroagresividad con síntomas psicóticos.
Esto obliga primero a:
Controlar la agitación y garantizar la seguridad.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Proteger al paciente y al equipo de salud.
2.	Intentar contención verbal.
3.	Si existe riesgo inminente, administrar sedación farmacológica.
4.	Descartar causas orgánicas o tóxicas.
5.	Solicitar valoración por psiquiatría y definir hospitalización.
Perlas de examen
✅ La prioridad en el paciente agitado es la seguridad.
✅ La contención física solo debe utilizarse cuando otras medidas han fracasado y por el menor tiempo posible.
✅ Los antipsicóticos son la base del manejo farmacológico de la agitación psicótica; pueden asociarse a benzodiacepinas según el contexto clínico.
✅ El litio y otros estabilizadores del ánimo no son el tratamiento inicial de la agitación grave.
✅ Siempre deben descartarse causas médicas de alteración del comportamiento.
✅ El consumo de sustancias psicoactivas puede precipitar o exacerbar un episodio maníaco.
✅ La hospitalización involuntaria puede estar indicada cuando existe riesgo para el paciente o para terceros.
Referencias
• Guía de Práctica Clínica Colombiana para el diagnóstico y tratamiento del trastorno afectivo bipolar.
• American Psychiatric Association. Practice Guideline for the Treatment of Patients With Bipolar Disorder.
• NICE Guideline: Bipolar Disorder.
• Maudsley Prescribing Guidelines in Psychiatry.
• Kaplan & Sadock's Synopsis of Psychiatry.`,
  },
  {
    id: "dr-q-410",
    examArea: "PSIQUIATRÍA - ESQUIZOFRENIA",
    topic: "PSIQUIATRÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","psiquiatria"],
    statement: "Hombre de 30 años, arquitecto, con antecedente de diabetes mellitus tipo 2 de difícil control e IMC de 31 kg/m², en seguimiento por medicina interna. Es llevado a consulta por su familia debido a cambios progresivos del comportamiento desde hace aproximadamente 8 meses. Refiere que pasa la mayor parte del tiempo encerrado en su habitación, abandonó su trabajo y con frecuencia habla y ríe solo. Manifiesta que \"sus compañeros de la obra lo están vigilando, existe una conspiración para sacarlo del país y enviarlo por trata de blancas\", por lo que decidió no volver a trabajar. Además, utiliza un casco permanentemente porque asegura que así evitará que lo despidan. Durante la valoración por psiquiatría se establece el diagnóstico de esquizofrenia y se decide iniciar tratamiento farmacológico.\n¿Cuál es el tratamiento de elección y cuál es la mejor consideración respecto al riesgo metabólico de este paciente?",
    options: [
      { id: "A", label: "A", text: "Iniciar olanzapina, por ser el antipsicótico con menor riesgo metabólico." },
      { id: "B", label: "B", text: "Iniciar clozapina como tratamiento de primera línea." },
      { id: "C", label: "C", text: "Iniciar aripiprazol, considerando su menor riesgo de aumento de peso y alteraciones metabólicas, con monitorización periódica de peso, glucemia y perfil lipídico." },
      { id: "D", label: "D", text: "Iniciar haloperidol exclusivamente, ya que no produce alteraciones metabólicas." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta un cuadro compatible con esquizofrenia, con síntomas positivos (delirios persecutorios, conducta desorganizada y probable respuesta a alucinaciones auditivas), síntomas negativos (aislamiento social y deterioro funcional) y una evolución mayor de seis meses. En un paciente con obesidad y diabetes mellitus tipo 2, deben preferirse antipsicóticos con bajo riesgo metabólico, como aripiprazol (o lurasidona/ziprasidona según disponibilidad), evitando en lo posible fármacos con alta propensión a producir aumento de peso y resistencia a la insulina, como olanzapina y clozapina, salvo indicaciones específicas.",
    keyPoints: [
      "Cuando veas: Delirios persecutorios. Deterioro funcional >6 meses. Habla o ríe solo. Diabetes y obesidad.",
      "Debes pensar en: Esquizofrenia y selección individualizada del antipsicótico.",
      "Tema: Esquizofrenia.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa no solo el tratamiento de la esquizofrenia, sino la individualización del antipsicótico según las comorbilidades.
La clave no es únicamente la psicosis.
La clave es:
El riesgo metabólico.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Delirios persecutorios.
• Probables alucinaciones auditivas.
• Aislamiento social.
• Deterioro laboral.
• Evolución mayor de seis meses.
Esto corresponde a:
Esquizofrenia.
¿Qué tratamiento debe iniciarse?
Las guías recomiendan:
Un antipsicótico de segunda generación como tratamiento de primera línea.
Sin embargo:
Este paciente tiene:
• Diabetes mellitus tipo 2.
• Obesidad.
Por ello debe preferirse un medicamento con:
Menor riesgo metabólico.
¿Cuáles tienen menor riesgo?
• Aripiprazol.
• Lurasidona.
• Ziprasidona.
¿Cuáles presentan mayor riesgo?
• Clozapina.
• Olanzapina.
Estos fármacos producen con mayor frecuencia:
• Ganancia de peso.
• Hiperglucemia.
• Dislipidemia.
• Síndrome metabólico.
¿Por qué NO iniciar clozapina?
Porque:
La clozapina no es un tratamiento de primera línea; está indicada principalmente en esquizofrenia resistente al tratamiento o con riesgo persistente de suicidio.
¿Por qué NO haloperidol?
Aunque tiene escaso impacto metabólico, presenta mayor riesgo de:
• Síntomas extrapiramidales.
• Distonías.
• Parkinsonismo.
• Discinesia tardía.
Por ello, los antipsicóticos atípicos son generalmente la primera elección.
¿Qué seguimiento metabólico debe realizarse?
Antes y durante el tratamiento deben controlarse:
• Peso.
• IMC.
• Circunferencia abdominal.
• Presión arterial.
• Glucemia o HbA1c.
• Perfil lipídico.
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
"Olanzapina porque es muy efectiva."
Sin embargo:
El dato decisivo es:
Diabetes mellitus tipo 2 y obesidad.
Esto obliga a elegir un antipsicótico con:
Menor riesgo metabólico.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Diagnosticar esquizofrenia.
2.	Identificar las comorbilidades.
3.	Elegir un antipsicótico de segunda generación con bajo riesgo metabólico.
4.	Monitorizar parámetros metabólicos desde el inicio.
5.	Evaluar respuesta clínica y efectos adversos periódicamente.
Perlas de examen
✅ Los antipsicóticos atípicos son el tratamiento de primera línea para la esquizofrenia.
✅ Aripiprazol presenta uno de los menores riesgos de aumento de peso y alteraciones metabólicas.
✅ Olanzapina y clozapina son los antipsicóticos con mayor riesgo de síndrome metabólico.
✅ La clozapina está indicada principalmente en esquizofrenia resistente al tratamiento.
✅ Todo paciente que inicia un antipsicótico debe tener monitorización de peso, glucemia y perfil lipídico.
✅ La diabetes mellitus y la obesidad modifican la elección del antipsicótico.
✅ El deterioro funcional por más de seis meses es un criterio diagnóstico clave para esquizofrenia.
Referencias
• American Psychiatric Association. Practice Guideline for the Treatment of Patients With Schizophrenia.
• NICE Guideline NG222: Psychosis and Schizophrenia in Adults.
• Maudsley Prescribing Guidelines in Psychiatry.
• Kaplan & Sadock's Synopsis of Psychiatry.
• World Federation of Societies of Biological Psychiatry (WFSBP) Guidelines for the Biological Treatment of Schizophrenia.

 

</user_query>`,
  }
];
