import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Banco universal MetodoQ · Dr. Q — Hematología (banco general).
 * PREGUNTAS BANCO GENERAL METODO Q: HEMATOLOGIA · 14/06/2026
 * Para regenerar desde la fuente del profesor: npm run generate:hematologia
 */
export const DR_Q_HEMATOLOGIA_BANCO_GENERAL_QUESTIONS: TrainingQuestion[] = [
  {
    id: "dr-q-256",
    examArea: "Hematología / Anemias",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia", "macrocitica", "vcm"],
    statement:
      "Hombre de 65 años en estudio por cuadro crónico de decaimiento y somnolencia. En el hemograma se evidencia una hemoglobina de 10 g/dL, con un volumen corpuscular medio de 106 fL. ¿Cuál de los siguientes diagnósticos es el MENOS probable?",
    options: [
      { id: "A", label: "A", text: "Déficit de vitamina B12." },
      { id: "B", label: "B", text: "Hipotiroidismo." },
      { id: "C", label: "C", text: "Síndrome mielodisplásico." },
      { id: "D", label: "D", text: "Talasemia menor." },
    ],
    correctOptionId: "D",
    explanation:
      "La talasemia menor típicamente produce una anemia microcítica (VCM disminuido), no macrocítica. Por el contrario, el déficit de vitamina B12, el hipotiroidismo y los síndromes mielodisplásicos son causas clásicas de anemia macrocítica.",
    keyPoints: [
      "Cuando veas: VCM > 100 fL + anemia + paciente adulto mayor.",
      "Debes pensar en: anemia macrocítica.",
      "Tema: Anemias.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de hematología porque evalúa el enfoque inicial de la anemia según el volumen corpuscular medio (VCM).

La clave no es la hemoglobina.
La clave es:
Identificar que se trata de una anemia macrocítica.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hemoglobina: 10 g/dL.
• VCM: 106 fL.

Recordemos:
• Microcítica: < 80 fL.
• Normocítica: 80-100 fL.
• Macrocítica: > 100 fL.

Por lo tanto:
El paciente tiene una anemia macrocítica.

¿Cuáles son las causas clásicas de anemia macrocítica?
Déficit de vitamina B12
Produce alteración de la síntesis de ADN y maduración nuclear defectuosa.
Déficit de ácido fólico
Mecanismo similar al de la vitamina B12.
Hipotiroidismo
Especialmente en adultos mayores.
Hepatopatía crónica
Por alteración de la membrana eritrocitaria.
Alcoholismo
Una de las causas más frecuentes en la práctica clínica.
Síndrome mielodisplásico
Muy importante en pacientes de edad avanzada.

¿Por qué la talasemia menor es la respuesta correcta?
La talasemia menor genera:
Disminución de la síntesis de globina.
Como consecuencia:
• Eritrocitos pequeños.
• VCM bajo.
• Microcitosis marcada.
Por ello suele encontrarse:
VCM < 80 fL.
Incluso con hemoglobinas relativamente conservadas.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Anemia" con cualquier trastorno hematológico.
Pero el examen exige correlacionar:
Tipo de anemia + VCM.
Aquí el dato decisivo es:
VCM de 106 fL.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar el VCM.
2. Clasificar la anemia.
3. Buscar causas compatibles con esa clasificación.
4. Excluir diagnósticos que produzcan el patrón opuesto.

Perlas de examen
✅ VCM >100 fL = anemia macrocítica.
✅ Déficit de vitamina B12 y folato son las causas más clásicas.
✅ El hipotiroidismo puede producir macrocitosis.
✅ El síndrome mielodisplásico debe sospecharse en adultos mayores.
✅ El alcoholismo es una causa frecuente de macrocitosis.
✅ La talasemia menor produce microcitosis, no macrocitosis.
✅ Ante macrocitosis en un adulto mayor, siempre considerar síndrome mielodisplásico.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• UpToDate: Approach to the Adult with Macrocytic Anemia.
• ASH Guidelines for Evaluation of Anemia.`,
  },
  {
    id: "dr-q-257",
    examArea: "Hematología / Anemia ferropénica",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia", "ferropenia", "laboratorio"],
    statement:
      "En una anemia por deficiencia de hierro en una mujer joven con dismenorrea, sangrado menstrual abundante e irregular, ¿cuál de los siguientes parámetros estará aumentado?",
    options: [
      { id: "A", label: "A", text: "Ferritina sérica." },
      { id: "B", label: "B", text: "Saturación de transferrina." },
      { id: "C", label: "C", text: "Receptor soluble de transferrina." },
      { id: "D", label: "D", text: "Volumen corpuscular medio." },
    ],
    correctOptionId: "C",
    explanation:
      "En la anemia ferropénica existe un aumento de la expresión celular de receptores de transferrina para captar más hierro, lo que se traduce en elevación del receptor soluble de transferrina en sangre.",
    keyPoints: [
      "Cuando veas: mujer joven + menorragia o sangrado uterino anormal + anemia microcítica.",
      "Debes pensar en: deficiencia de hierro.",
      "Tema: Anemia ferropénica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de hematología porque evalúa los cambios de laboratorio característicos de la ferropenia.

La clave no es la anemia.
La clave es:
Entender cómo responde el organismo cuando se agotan los depósitos de hierro.

¿Qué está ocurriendo realmente?
La paciente presenta pérdidas crónicas de sangre por:
Sangrado menstrual abundante e irregular.
La pérdida continua de hierro produce:
1. Agotamiento de depósitos.
2. Disminución del hierro sérico.
3. Disminución de la producción de hemoglobina.
4. Aparición de anemia microcítica e hipocrómica.

¿Qué pasa con la ferritina?
La ferritina refleja:
Los depósitos corporales de hierro.
En la ferropenia:
Disminuye.
Por eso es uno de los marcadores más útiles para el diagnóstico.

¿Qué pasa con la saturación de transferrina?
La saturación de transferrina representa:
El porcentaje de sitios de unión ocupados por hierro.
En la ferropenia:
Disminuye.
Habitualmente por debajo del 20%.

¿Qué pasa con el VCM?
La producción insuficiente de hemoglobina genera:
Eritrocitos pequeños.
Por ello el VCM:
Disminuye.

¿Qué pasa con el receptor soluble de transferrina?
Cuando las células detectan déficit de hierro:
Aumentan la expresión de receptores de transferrina.
Su objetivo es captar la mayor cantidad posible de hierro circulante.
Como consecuencia:
El receptor soluble de transferrina aumenta.
Este hallazgo es especialmente útil porque:
No suele elevarse por inflamación.

¿Cuál es la trampa del examen?
Muchos estudiantes responden:
Ferritina.
Porque recuerdan que es el examen más utilizado.
Sin embargo la pregunta no pregunta cuál ayuda al diagnóstico.
Pregunta:
¿Cuál aumenta?
Y en la ferropenia casi todo disminuye excepto:
• Transferrina.
• TIBC.
• Receptor soluble de transferrina.

Entonces, ¿qué debe recordarse?
La secuencia clásica es:
Parámetro | Ferropenia
Ferritina | ↓
Hierro sérico | ↓
Saturación de transferrina | ↓
VCM | ↓
Transferrina/TIBC | ↑
Receptor soluble de transferrina | ↑

Perlas de examen
✅ La causa más frecuente de ferropenia en mujeres jóvenes es la pérdida menstrual.
✅ La ferritina es el mejor marcador de depósitos de hierro.
✅ Ferritina baja prácticamente confirma ferropenia.
✅ El VCM suele estar disminuido.
✅ La saturación de transferrina disminuye.
✅ El receptor soluble de transferrina aumenta.
✅ La transferrina (TIBC) también aumenta en la deficiencia de hierro.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• ASH Guidelines for Iron Deficiency Anemia.
• UpToDate: Diagnosis of Iron Deficiency in Adults.`,
  },
  {
    id: "dr-q-258",
    examArea: "Hematología / Anemia ferropénica en el adulto",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia", "ferropenia", "sangrado_digestivo"],
    statement:
      "Hombre de 64 años, sin antecedentes de importancia, consulta por astenia y adinamia de varios meses de evolución. No acude a controles médicos desde hace más de 15 años. Hemograma: Hb 11 g/dL, Hto 33%, VCM 77 fL, RDW 22%. ¿Cuál es la conducta más apropiada según las guías de práctica clínica?",
    options: [
      { id: "A", label: "A", text: "Iniciar hierro oral empírico y reevaluar en 3 meses." },
      { id: "B", label: "B", text: "Solicitar colonoscopia para descartar neoplasia gastrointestinal." },
      { id: "C", label: "C", text: "Solicitar transfusión de glóbulos rojos." },
      { id: "D", label: "D", text: "Iniciar vitamina B12 intramuscular." },
    ],
    correctOptionId: "B",
    explanation:
      "En un hombre mayor con anemia microcítica sugestiva de ferropenia, debe asumirse inicialmente que existe pérdida crónica de sangre hasta demostrar lo contrario. La principal preocupación es descartar cáncer colorrectal u otra fuente digestiva de sangrado.",
    keyPoints: [
      "Cuando veas: hombre adulto mayor + anemia microcítica + ferropenia probable + sin causa evidente.",
      "Debes pensar en: sangrado digestivo oculto hasta demostrar lo contrario.",
      "Tema: Anemia ferropénica en el adulto.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina interna y gastroenterología porque evalúa uno de los errores más peligrosos en la práctica clínica:
Tratar la ferropenia sin buscar la causa.

La clave no es la hemoglobina.
La clave es:
La combinación de edad + anemia microcítica.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hb: 11 g/dL.
• VCM: 77 fL.
• RDW: 22%.
Esto es altamente sugestivo de:
Anemia ferropénica.
El aumento del RDW refleja una gran variabilidad en el tamaño de los eritrocitos, hallazgo típico de la deficiencia de hierro.

¿Cuál es la causa más frecuente?
Depende del contexto.
Mujer joven
Generalmente:
Pérdidas ginecológicas.
Hombre adulto o mujer posmenopáusica
Debe sospecharse:
Sangrado gastrointestinal.
Hasta demostrar lo contrario.

¿Por qué la colonoscopia?
Porque una de las principales causas de ferropenia en este grupo etario es:
Cáncer colorrectal.
También deben considerarse:
• Adenomas avanzados.
• Angiodisplasias.
• Enfermedad inflamatoria intestinal.
• Úlceras gastrointestinales.

¿Por qué no iniciar hierro y ya?
Porque el hierro corrige:
La anemia.
Pero no corrige:
La causa.
Y podría retrasar el diagnóstico de una neoplasia potencialmente curable.

¿Qué dato cambia completamente la conducta?
Este:
Hombre de 64 años.
En un paciente de este perfil:
La búsqueda etiológica es obligatoria.

¿Por qué no transfundir?
La transfusión suele reservarse para:
• Inestabilidad hemodinámica.
• Sangrado activo severo.
• Anemias mucho más profundas.
Con Hb de 11 g/dL:
No está indicada.

¿Por qué no vitamina B12?
Porque la vitamina B12 produce:
Anemia macrocítica.
Aquí el VCM es:
77 fL.
Es decir:
Microcitosis.

¿Cuál es la trampa del examen?
Muchos estudiantes responden:
Hierro oral.
Porque identifican correctamente la ferropenia.
Pero la pregunta solicita:
La conducta más apropiada.
Y en un hombre adulto mayor la prioridad es:
Encontrar la causa del sangrado.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sospechar anemia ferropénica.
2. Confirmar con perfil férrico.
3. Buscar pérdida digestiva.
4. Realizar colonoscopia (y frecuentemente endoscopia alta según el contexto).
5. Tratar la causa y corregir la ferropenia.

Perlas de examen
✅ Hombre adulto + ferropenia = sangrado digestivo hasta demostrar lo contrario.
✅ La anemia ferropénica suele ser microcítica e hipocrómica.
✅ RDW elevado es característico de ferropenia.
✅ El cáncer colorrectal debe descartarse obligatoriamente.
✅ No basta con prescribir hierro.
✅ La búsqueda etiológica es tan importante como el tratamiento.
✅ En mujeres posmenopáusicas aplica el mismo principio.

Referencias
• Harrison's Principles of Internal Medicine.
• British Society of Gastroenterology Guidelines for Iron Deficiency Anemia.
• American Gastroenterological Association Guidelines.
• UpToDate: Evaluation of Iron Deficiency Anemia in Adults.
• ASH Guidelines for Iron Deficiency Anemia.`,
  },
  {
    id: "dr-q-259",
    examArea: "Hematología / Diagnóstico diferencial de las anemias",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia", "enfermedad_cronica", "ferritina"],
    statement:
      "Mujer de 73 años con hematocrito de 30%, Hb 10 g/dL, VCM 85 fL, hierro sérico 29 μg/dL (37-145) y ferritina 340 ng/mL (15-150). ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Hemorragia gastrointestinal." },
      { id: "B", label: "B", text: "Síndrome de malabsorción intestinal." },
      { id: "C", label: "C", text: "Talasemia minor." },
      { id: "D", label: "D", text: "Polimialgia reumática." },
    ],
    correctOptionId: "D",
    explanation:
      "La paciente presenta una anemia de enfermedad crónica (anemia inflamatoria): hierro sérico bajo con ferritina elevada. La ferritina es un reactante de fase aguda y aumenta en estados inflamatorios crónicos como la polimialgia reumática.",
    keyPoints: [
      "Cuando veas: hierro sérico bajo + ferritina normal o elevada + anemia normocítica o discretamente microcítica.",
      "Debes pensar en: anemia de enfermedad crónica.",
      "Tema: Diagnóstico diferencial de las anemias.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica porque obliga a diferenciar:
Ferropenia verdadera
de
Anemia de enfermedad crónica.

La clave no es la hemoglobina.
La clave es:
La ferritina.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Hb: 10 g/dL.
• VCM: 85 fL (normocítica).
• Hierro sérico bajo.
• Ferritina elevada.
Muchos estudiantes al ver:
Hierro bajo.
Piensan inmediatamente en:
Ferropenia.
Pero eso sería un error.

¿Qué pasa en la ferropenia?
Los depósitos de hierro están agotados.
Por tanto:
• Hierro sérico ↓
• Ferritina ↓
La ferritina es baja porque:
No quedan reservas.

¿Qué pasa en la anemia inflamatoria?
La inflamación aumenta la producción de:
Hepcidina.
La hepcidina bloquea:
• La absorción intestinal de hierro.
• La liberación de hierro desde los macrófagos.
Como consecuencia:
• Hierro sérico ↓
• Ferritina ↑
Porque el hierro queda "secuestrado" en los depósitos.

¿Qué enfermedad de las opciones encaja mejor?
Polimialgia reumática
Es una enfermedad inflamatoria sistémica.
Produce:
• VSG elevada.
• PCR elevada.
• Anemia inflamatoria.
Por ello es la respuesta correcta.

¿Por qué no hemorragia gastrointestinal?
La hemorragia digestiva crónica típicamente produce:
Ferropenia.
Y la ferropenia genera:
Ferritina baja.
No elevada.

¿Por qué no malabsorción intestinal?
La malabsorción de hierro produce:
Deficiencia real de hierro.
Por tanto:
Ferritina baja.

¿Por qué no talasemia minor?
La talasemia menor suele producir:
• VCM muy bajo.
• Hierro normal.
• Ferritina normal.
No este patrón.

¿Cuál es la trampa del examen?
La trampa clásica es:
Hierro bajo = ferropenia.
Falso.
Debes mirar siempre:
La ferritina.
Porque ella distingue:
• Déficit de hierro.
• Inflamación crónica.

Entonces, ¿qué debe recordarse?
Parámetro | Ferropenia | Enfermedad crónica
Hierro sérico | ↓ | ↓
Ferritina | ↓ | ↑
Hepcidina | ↓ | ↑
Reservas de hierro | ↓ | Normales o ↑

Perlas de examen
✅ Ferritina baja = ferropenia hasta demostrar lo contrario.
✅ Ferritina elevada descarta prácticamente ferropenia aislada.
✅ La anemia de enfermedad crónica suele ser normocítica.
✅ La hepcidina es la molécula clave de la anemia inflamatoria.
✅ Polimialgia reumática es una causa clásica de anemia inflamatoria.
✅ Hierro bajo no siempre significa déficit de hierro.
✅ La ferritina es el examen más útil para diferenciar ambos cuadros.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• UpToDate: Anemia of Chronic Disease.
• ASH Guidelines for Evaluation of Anemia.`,
  },
  {
    id: "dr-q-260",
    examArea: "Hematología / Anemias macrocíticas",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia", "macrocitica", "gastritis_autoinmune", "anemia_perniciosa"],
    statement:
      "Mujer de 41 años en seguimiento por anemia. En la analítica destaca Hb 11 g/dL, ferropenia, macrocitosis e hipergastrinemia. Tiene antecedentes de lupus y enfermedad de Graves. ¿Cuál es la causa más probable de la anemia?",
    options: [
      { id: "A", label: "A", text: "Enfermedad celíaca." },
      { id: "B", label: "B", text: "Gastritis autoinmune tipo A." },
      { id: "C", label: "C", text: "Anemia ferropénica por menorragia." },
      { id: "D", label: "D", text: "Síndrome mielodisplásico." },
    ],
    correctOptionId: "B",
    explanation:
      "La asociación de enfermedades autoinmunes (LES y Graves), macrocitosis, hipergastrinemia y anemia sugiere fuertemente una gastritis autoinmune con destrucción de células parietales, responsable de anemia perniciosa por déficit de vitamina B12.",
    keyPoints: [
      "Cuando veas: macrocitosis + enfermedades autoinmunes asociadas + hipergastrinemia + déficit de hierro o B12.",
      "Debes pensar en: gastritis autoinmune tipo A (anemia perniciosa).",
      "Tema: Anemias macrocíticas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica porque integra hematología, gastroenterología y autoinmunidad.

La clave no es la hemoglobina.
La clave es:
La combinación de macrocitosis + hipergastrinemia.

¿Cómo se verían estos datos en la analítica?
Hemograma
Parámetro | Resultado
Hemoglobina | 11 g/dL ↓
Hematocrito | 33% ↓
VCM | 108 fL ↑
HCM | 35 pg ↑
Reticulocitos | Bajos o normales
Perfil férrico
Parámetro | Resultado
Hierro sérico | ↓
Ferritina | ↓ o normal
Saturación de transferrina | ↓
Estudios vitamínicos
Parámetro | Resultado
Vitamina B12 | ↓↓↓
Ácido fólico | Normal
Bioquímica asociada
Parámetro | Resultado
Gastrina sérica | ↑↑
LDH | ↑
Bilirrubina indirecta | ↑
Inmunología
Parámetro | Resultado
Ac anti-factor intrínseco | Positivo
Ac anticélula parietal | Positivo

¿Qué está ocurriendo realmente?
La gastritis autoinmune tipo A destruye las:
Células parietales gástricas.
Estas células producen:
• Ácido clorhídrico.
• Factor intrínseco.

¿Por qué aparece hipergastrinemia?
Al destruirse las células parietales:
Disminuye la producción de ácido gástrico.
El organismo intenta compensarlo aumentando:
La secreción de gastrina.
Por eso la gastrina aparece muy elevada.

¿Por qué aparece déficit de B12?
La ausencia de factor intrínseco impide la absorción de vitamina B12 en el íleon terminal.
Como consecuencia:
• Megaloblastosis.
• Macrocitosis.
• Anemia perniciosa.

¿Por qué puede coexistir ferropenia?
La aclorhidria dificulta también:
La absorción intestinal del hierro.
Por eso algunos pacientes presentan inicialmente:
Ferropenia.
Y años después:
Déficit de B12.
Esta es una perla muy preguntada.

¿Qué dato cambia completamente la respuesta?
Este:
Enfermedad de Graves + lupus.
Las enfermedades autoinmunes suelen agruparse.
La gastritis autoinmune forma parte de ese contexto.

¿Cuál es la trampa del examen?
Muchos estudiantes responden:
Enfermedad celíaca.
Porque también puede producir ferropenia.
Pero la presencia de:
Hipergastrinemia.
Apunta directamente a:
Gastritis autoinmune.

Entonces, ¿qué debe recordarse?
La secuencia fisiopatológica es:
1. Destrucción autoinmune de células parietales.
2. Disminución de ácido gástrico.
3. Aumento de gastrina.
4. Déficit de factor intrínseco.
5. Déficit de vitamina B12.
6. Anemia megaloblástica.

Perlas de examen
✅ Gastritis tipo A = gastritis autoinmune del cuerpo y fundus.
✅ Produce anemia perniciosa.
✅ La gastrina está elevada.
✅ Los anticuerpos anti-factor intrínseco son altamente específicos.
✅ Se asocia a tiroiditis autoinmune y enfermedad de Graves.
✅ Puede coexistir con ferropenia.
✅ Macrocitosis + hipergastrinemia es una combinación muy sugestiva.

Referencias
• Harrison's Principles of Internal Medicine.
• Hoffbrand's Essential Haematology.
• UpToDate: Autoimmune Metaplastic Atrophic Gastritis.
• Williams Hematology.
• ACG Clinical Guidelines for Gastric Atrophy and Pernicious Anemia.`,
  },
  {
    id: "dr-q-261",
    examArea: "Hematología / Anemia megaloblástica",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia", "megaloblastica", "vitamina_b12"],
    statement:
      "Mujer de 50 años de raza negra consulta por astenia, adinamia, parestesias en miembros inferiores, alteración de la marcha y pérdida de fuerza. Laboratorios: Hb 9 g/dL, VCM 110 fL, plaquetas 115.000/mm³, leucocitos 6.000/mm³, reticulocitos 1%, haptoglobina 0 g/L, LDH 1.200 U/L, AST 50 U/L, ALT 30 U/L, Coombs directo negativo. ¿Cuál es el tratamiento que debe administrarse?",
    options: [
      { id: "A", label: "A", text: "Ácido fólico oral." },
      { id: "B", label: "B", text: "Prednisolona 1 mg/kg/día." },
      { id: "C", label: "C", text: "Hierro intravenoso." },
      { id: "D", label: "D", text: "Vitamina B12 intramuscular." },
    ],
    correctOptionId: "D",
    explanation:
      "La paciente presenta una anemia megaloblástica por déficit de vitamina B12, asociada a compromiso neurológico. El tratamiento debe iniciarse de forma inmediata con reposición parenteral de cobalamina.",
    keyPoints: [
      "Cuando veas: macrocitosis marcada + parestesias + alteración de la marcha + LDH elevada + haptoglobina disminuida.",
      "Debes pensar en: déficit de vitamina B12.",
      "Tema: Anemia megaloblástica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de hematología porque evalúa una de las pocas anemias en las que el tratamiento incorrecto puede empeorar las secuelas neurológicas.

La clave no es la hemoglobina.
La clave es:
La combinación de macrocitosis + síntomas neurológicos.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Hb: 9 g/dL.
• VCM: 110 fL.
• Plaquetopenia leve.
• Síntomas neurológicos.
Esto orienta inmediatamente hacia:
Anemia megaloblástica.

¿Qué dato cambia completamente la respuesta?
Este:
Parestesias y alteración de la marcha.
El déficit de folato NO produce manifestaciones neurológicas.
El déficit de vitamina B12 SÍ.
Por eso estos síntomas son prácticamente una pista diagnóstica.

¿Por qué está elevada la LDH?
La eritropoyesis es ineficaz.
Muchos precursores eritroides mueren dentro de la médula ósea antes de llegar a circulación.
Esto produce:
Hemólisis intramedular.
Como consecuencia:
• LDH ↑↑
• Haptoglobina ↓
• Bilirrubina indirecta puede aumentar.

¿Por qué el Coombs es negativo?
Porque no se trata de:
Hemólisis autoinmune.
La destrucción ocurre dentro de la médula ósea por alteración de la síntesis de ADN.

¿Qué ocurre a nivel neurológico?
La vitamina B12 participa en:
La síntesis y mantenimiento de la mielina.
Su déficit genera:
• Parestesias.
• Ataxia.
• Alteración de la vibración y propiocepción.
• Debilidad.
• Degeneración combinada subaguda de la médula.

¿Por qué no dar ácido fólico?
Esta es la trampa clásica.
El ácido fólico:
Corrige la anemia.
Pero NO corrige el daño neurológico.
Incluso puede permitir que el daño neurológico progrese mientras mejora el hemograma.
Por eso:
Nunca debe administrarse folato aislado cuando existe sospecha de déficit de B12.

¿Cuál es el tratamiento correcto?
Vitamina B12 intramuscular
Esquema clásico:
• 1.000 mcg IM diarios durante una semana.
• Luego semanal durante un mes.
• Posteriormente mensual según la causa.

Entonces, ¿qué debe recordarse?
La secuencia es:
1. Déficit de B12.
2. Alteración de síntesis de ADN.
3. Anemia megaloblástica.
4. Hemólisis intramedular.
5. Manifestaciones neurológicas.
6. Tratamiento con vitamina B12 parenteral.

Perlas de examen
✅ Macrocitosis + síntomas neurológicos = déficit de B12 hasta demostrar lo contrario.
✅ El folato no produce neuropatía.
✅ LDH muy elevada es típica de hemólisis intramedular.
✅ La haptoglobina puede estar disminuida.
✅ El Coombs es negativo.
✅ Nunca administrar folato aislado ante sospecha de déficit de B12.
✅ El tratamiento inicial es vitamina B12 intramuscular.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• UpToDate: Clinical Manifestations and Diagnosis of Vitamin B12 Deficiency.
• British Society for Haematology Guidelines on Vitamin B12 Deficiency.`,
  },
  {
    id: "dr-q-262",
    examArea: "Hematología / Insuficiencia medular",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "aplasia_medular", "pancitopenia"],
    statement:
      "Hombre de 24 años consulta por fatiga progresiva, gingivorragia y episodios frecuentes de infecciones respiratorias en los últimos 3 meses. Al examen físico presenta palidez marcada y petequias en extremidades. No se documentan adenopatías ni hepatoesplenomegalia. Hemograma: Hb 7.8 g/dL, leucocitos 1.800/mm³, neutrófilos 400/mm³, plaquetas 18.000/mm³, reticulocitos 0.2%. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Leucemia mieloide aguda." },
      { id: "B", label: "B", text: "Aplasia medular." },
      { id: "C", label: "C", text: "Púrpura trombocitopénica inmune." },
      { id: "D", label: "D", text: "Hiperesplenismo." },
    ],
    correctOptionId: "B",
    explanation:
      "La combinación de pancitopenia severa, reticulocitopenia y ausencia de organomegalias es altamente sugestiva de aplasia medular.",
    keyPoints: [
      "Cuando veas: pancitopenia + reticulocitos bajos + ausencia de adenopatías + ausencia de hepatoesplenomegalia.",
      "Debes pensar en: aplasia medular.",
      "Tema: Insuficiencia medular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de hematología porque obliga a diferenciar una falla de producción medular de una infiltración medular.

La clave no es la trombocitopenia.
La clave es:
La pancitopenia con reticulocitopenia.

¿Qué está ocurriendo realmente?
La médula ósea normal produce:
• Eritrocitos.
• Leucocitos.
• Plaquetas.
En la aplasia medular existe:
Destrucción o fracaso de las células madre hematopoyéticas.
Como consecuencia disminuyen simultáneamente:
• Hemoglobina.
• Leucocitos.
• Plaquetas.
Esto genera:
Pancitopenia.

¿Por qué son importantes los reticulocitos?
Los reticulocitos reflejan:
La capacidad productiva de la médula ósea.
En la aplasia:
La médula no produce.
Por ello los reticulocitos están muy disminuidos.

¿Por qué no es una leucemia aguda?
La leucemia suele acompañarse de:
• Blastos circulantes.
• Adenopatías.
• Hepatoesplenomegalia.
Además la médula generalmente está:
Hipercelular.
En la aplasia ocurre lo contrario:
Médula hipocelular.

¿Qué dato cambia completamente la respuesta?
Este:
Ausencia de hepatoesplenomegalia.
Es una de las pistas más clásicas para aplasia medular.

¿Cómo se confirma el diagnóstico?
Mediante:
Biopsia de médula ósea.
Hallazgo característico:
Médula marcadamente hipocelular reemplazada por grasa.

¿Cuáles son las causas clásicas?
• Idiopática.
• Fármacos (cloranfenicol, carbamazepina).
• Radiación.
• Hepatitis viral.
• Tóxicos como benceno.

¿Cuál es la trampa del examen?
Muchos estudiantes responden:
Leucemia.
Porque observan pancitopenia.
Sin embargo:
La ausencia de organomegalias y la reticulocitopenia apuntan hacia aplasia medular.

Entonces, ¿qué debe recordarse?
La secuencia es:
1. Falla de células madre hematopoyéticas.
2. Disminución de producción medular.
3. Pancitopenia.
4. Reticulocitopenia.
5. Médula hipocelular.

Perlas de examen
✅ Pancitopenia + reticulocitos bajos = falla medular.
✅ La aplasia medular suele cursar sin adenopatías ni esplenomegalia.
✅ La biopsia muestra médula hipocelular.
✅ Infecciones recurrentes se explican por neutropenia.
✅ Gingivorragia y petequias se explican por trombocitopenia.
✅ Fatiga y palidez se explican por anemia.
✅ En pacientes jóvenes, el trasplante alogénico es una opción curativa.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• British Society for Haematology Guidelines on Aplastic Anemia.
• UpToDate: Aplastic Anemia in Adults.`,
  },
  {
    id: "dr-q-263",
    examArea: "Hematología / Insuficiencia medular",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "aplasia_medular", "cloranfenicol"],
    statement:
      "Mujer de 32 años consulta por fatiga progresiva, equimosis espontáneas y fiebre recurrente de 6 semanas de evolución. Como antecedente refiere tratamiento prolongado con cloranfenicol por una infección adquirida en zona rural. Al examen físico presenta palidez y petequias generalizadas. No tiene adenopatías ni hepatoesplenomegalia. Hemograma: Hb 6.9 g/dL, leucocitos 1.200/mm³, neutrófilos 300/mm³, plaquetas 15.000/mm³, reticulocitos 0.1%. ¿Cuál es el hallazgo más probable en la biopsia de médula ósea?",
    options: [
      { id: "A", label: "A", text: "Médula hipercelular con infiltración blástica superior al 20%." },
      { id: "B", label: "B", text: "Médula hipocelular con reemplazo por tejido adiposo." },
      { id: "C", label: "C", text: "Fibrosis reticulínica difusa con dacriocitos en sangre periférica." },
      { id: "D", label: "D", text: "Hiperplasia eritroide con megaloblastosis intensa." },
    ],
    correctOptionId: "B",
    explanation:
      "La paciente presenta una aplasia medular secundaria a fármacos. El cloranfenicol es uno de los medicamentos clásicamente asociados con destrucción de células madre hematopoyéticas y desarrollo de pancitopenia severa.",
    keyPoints: [
      "Cuando veas: pancitopenia + reticulocitos muy bajos + ausencia de organomegalias + exposición a cloranfenicol.",
      "Debes pensar en: aplasia medular inducida por medicamentos.",
      "Tema: Insuficiencia medular.",
    ],
  },
  {
    id: "dr-q-264",
    examArea: "Hematología / Aplasia medular secundaria a medicamentos",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "aplasia_medular", "metimazol", "antitiroideos"],
    statement:
      "Mujer de 38 años con antecedente de enfermedad de Graves en tratamiento con metimazol desde hace 4 meses. Consulta por fiebre de 39°C, odinofagia intensa y múltiples úlceras orales de 48 horas de evolución. Al examen físico presenta palidez y petequias aisladas. Hemograma: Hb 8.5 g/dL, leucocitos 900/mm³, neutrófilos 100/mm³, plaquetas 25.000/mm³, reticulocitos 0.2%. No presenta adenopatías ni hepatoesplenomegalia. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Leucemia mieloide aguda." },
      { id: "B", label: "B", text: "Síndrome mielodisplásico." },
      { id: "C", label: "C", text: "Aplasia medular inducida por metimazol." },
      { id: "D", label: "D", text: "Mononucleosis infecciosa." },
    ],
    correctOptionId: "C",
    explanation:
      "La paciente presenta pancitopenia severa con reticulocitopenia y antecedente de exposición a un fármaco clásicamente asociado a toxicidad medular. La ausencia de adenopatías y organomegalias apoya una falla medular primaria.",
    keyPoints: [
      "Cuando veas: metimazol + pancitopenia + reticulocitos bajos + fiebre y odinofagia.",
      "Debes pensar en: toxicidad medular inducida por antitiroideos.",
      "Tema: Aplasia medular secundaria a medicamentos.",
    ],
  },
  {
    id: "dr-q-265",
    examArea: "Hematología / Anemias hemolíticas hereditarias",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "drepanocitosis", "anemia_hemolitica", "crisis_vasooclusiva"],
    statement:
      "Varón de 38 años procedente de Haití consulta por episodios recurrentes de dolor intenso en extremidades y región lumbar desde la adolescencia, que suelen precipitarse tras infecciones o deshidratación. Refiere múltiples hospitalizaciones por dolor óseo severo y antecedente de colelitiasis pigmentaria a edad temprana. En el examen físico presenta ictericia escleral leve y una cicatriz de colecistectomía. Hemograma: Hb 8.5 g/dL, reticulocitos 12%, bilirrubina indirecta elevada y LDH aumentada. Conforme a la enfermedad que sospecha, señale la respuesta correcta:",
    options: [
      { id: "A", label: "A", text: "La esplenomegalia es un hallazgo frecuente en los cuadros crónicos del adulto." },
      { id: "B", label: "B", text: "Puede producir episodios dolorosos por crisis vasooclusivas." },
      { id: "C", label: "C", text: "Es debida a un defecto congénito en las proteínas de la membrana eritrocitaria." },
      { id: "D", label: "D", text: "La prueba de Coombs suele ser positiva durante las crisis." },
    ],
    correctOptionId: "B",
    explanation:
      "La descripción es altamente sugestiva de una hemoglobinopatía S, cuya manifestación clínica característica son las crisis vasooclusivas dolorosas secundarias a la polimerización de la hemoglobina anormal.",
    keyPoints: [
      "Cuando veas: paciente afrodescendiente + anemia hemolítica crónica + ictericia + litiasis pigmentaria + crisis dolorosas recurrentes.",
      "Debes pensar en: drepanocitosis (anemia falciforme).",
      "Tema: Anemias hemolíticas hereditarias.",
    ],
  },
  {
    id: "dr-q-266",
    examArea: "Hematología / Anemias hemolíticas adquiridas",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia_hemolitica", "autoinmune", "les", "coombs"],
    statement:
      "Mujer de 25 años con diagnóstico de LES en tratamiento con hidroxicloroquina consulta por astenia, adinamia y somnolencia progresiva. Hemograma: Hb 8.4 g/dL, Hto 25.2%, VCM 107 fL. En la extensión de sangre periférica se observan policromatofilia y esferocitos. ¿Cuál es la ayuda diagnóstica más útil para continuar el estudio?",
    options: [
      { id: "A", label: "A", text: "Dosificación sérica de vitamina B12." },
      { id: "B", label: "B", text: "Aspirado de médula ósea." },
      { id: "C", label: "C", text: "Test de Coombs directo." },
      { id: "D", label: "D", text: "Electroforesis de hemoglobina." },
    ],
    correctOptionId: "C",
    explanation:
      "La paciente presenta una anemia macrocítica en el contexto de LES. La presencia de policromatofilia y esferocitos orienta a hemólisis, y en una paciente con lupus debe sospecharse una anemia hemolítica autoinmune. El estudio de elección para confirmar el diagnóstico es el test de Coombs directo.",
    keyPoints: [
      "Cuando veas: LES + anemia + esferocitos + policromatofilia.",
      "Debes pensar en: anemia hemolítica autoinmune.",
      "Tema: Anemias hemolíticas adquiridas.",
    ],
  },
  {
    id: "dr-q-267",
    examArea: "Hematología / Anemias hemolíticas adquiridas",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia_hemolitica", "coombs", "hemolisis"],
    statement:
      "Mujer de 60 años consulta por 15 días de somnolencia y astenia. Refiere dormir 8-9 horas cada noche sin interrupciones. Al examen físico presenta palidez mucocutánea. Laboratorios: Hb 8 g/dL, VCM 100 fL, LDH 900 U/L, haptoglobina indetectable y bilirrubina total 3.5 mg/dL. Señale la respuesta correcta:",
    options: [
      { id: "A", label: "A", text: "Se trata de una anemia hemolítica; para determinar su naturaleza debemos solicitar una electroforesis de hemoglobinas." },
      { id: "B", label: "B", text: "Se trata de una anemia hemolítica; debemos solicitar un test de Coombs directo, que determina la presencia de IgG y/o la fracción C3 del complemento sobre la membrana del hematíe." },
      { id: "C", label: "C", text: "Se trata de una anemia hemolítica; debemos solicitar un test de Coombs directo, que determina la presencia de IgG libre en plasma." },
      { id: "D", label: "D", text: "Se trata de una anemia hemolítica; para determinar su naturaleza debemos solicitar una prueba de Coombs indirecto." },
    ],
    correctOptionId: "B",
    explanation:
      "La paciente presenta un perfil clásico de hemólisis: anemia, LDH elevada, bilirrubina aumentada e haptoglobina indetectable. El siguiente paso es determinar si la hemólisis es inmunológica mediante un test de Coombs directo.",
    keyPoints: [
      "Cuando veas: LDH elevada + haptoglobina disminuida + bilirrubina indirecta elevada + anemia.",
      "Debes pensar en: anemia hemolítica.",
      "Tema: Anemias hemolíticas adquiridas.",
    ],
  },
  {
    id: "dr-q-268",
    examArea: "Hematología / Anemias hemolíticas hereditarias",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "esferocitosis", "anemia_hemolitica", "chcm"],
    statement:
      "Mujer de 35 años en valoración prequirúrgica. En los estudios preoperatorios se encuentra Hb 9 g/dL, VCM 80 fL y CHCM 38 g/dL. Al examen físico presenta esplenomegalia. Estudios complementarios: bilirrubina total 2 mg/dL (indirecta 1.8 mg/dL), LDH 500 U/L y reticulocitos 10%. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Esferocitosis hereditaria." },
      { id: "B", label: "B", text: "Drepanocitosis." },
      { id: "C", label: "C", text: "Anemia hemolítica autoinmune." },
      { id: "D", label: "D", text: "Anemia sideroblástica." },
    ],
    correctOptionId: "A",
    explanation:
      "La combinación de hemólisis crónica, esplenomegalia y, sobre todo, una CHCM elevada (38 g/dL) es altamente sugestiva de esferocitosis hereditaria.",
    keyPoints: [
      "Cuando veas: CHCM elevada + esplenomegalia + reticulocitosis + bilirrubina indirecta elevada.",
      "Debes pensar en: esferocitosis hereditaria.",
      "Tema: Anemias hemolíticas hereditarias.",
    ],
  },
  {
    id: "dr-q-269",
    examArea: "Hematología / Enfoque diagnóstico de las anemias hemolíticas",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia_hemolitica", "esquistocitos", "microangiopatica"],
    statement:
      "Hombre de 42 años consulta por ictericia, coluria y fatiga progresiva. Laboratorios: Hb 8.5 g/dL, reticulocitos 12%, LDH 1.500 U/L, haptoglobina indetectable y bilirrubina indirecta elevada. En el extendido de sangre periférica se observan abundantes esquistocitos. ¿Cuál es la clasificación más adecuada de esta anemia hemolítica?",
    options: [
      { id: "A", label: "A", text: "Hemólisis extravascular inmunológica." },
      { id: "B", label: "B", text: "Hemólisis extravascular no inmunológica." },
      { id: "C", label: "C", text: "Hemólisis intravascular no inmunológica." },
      { id: "D", label: "D", text: "Hemólisis intravascular inmunológica." },
    ],
    correctOptionId: "C",
    explanation:
      "La presencia de esquistocitos indica destrucción mecánica de eritrocitos dentro de la circulación, característica de las anemias hemolíticas microangiopáticas.",
    keyPoints: [
      "Cuando veas: esquistocitos + LDH muy elevada + haptoglobina indetectable + coluria.",
      "Debes pensar en: hemólisis intravascular.",
      "Tema: Enfoque diagnóstico de las anemias hemolíticas.",
    ],
  },
  {
    id: "dr-q-270",
    examArea: "Hematología / Anemias hemolíticas autoinmunes",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia_hemolitica", "autoinmune", "anticuerpos_calientes", "coombs"],
    statement:
      "Mujer de 68 años consulta por fatiga progresiva, ictericia leve y disnea de esfuerzo. Al examen físico presenta esplenomegalia. Laboratorios: Hb 7.9 g/dL, reticulocitos 11%, LDH 850 U/L, haptoglobina indetectable y bilirrubina indirecta elevada. El test de Coombs directo es positivo para IgG y negativo para C3. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Anemia hemolítica autoinmune por anticuerpos fríos." },
      { id: "B", label: "B", text: "Hemoglobinuria paroxística nocturna." },
      { id: "C", label: "C", text: "Anemia hemolítica autoinmune por anticuerpos calientes." },
      { id: "D", label: "D", text: "Esferocitosis hereditaria." },
    ],
    correctOptionId: "C",
    explanation:
      "La positividad para IgG en el Coombs directo es característica de la anemia hemolítica autoinmune por anticuerpos calientes, la forma más frecuente de hemólisis autoinmune.",
    keyPoints: [
      "Cuando veas: hemólisis + Coombs directo positivo + IgG sobre la membrana eritrocitaria.",
      "Debes pensar en: anemia hemolítica autoinmune por anticuerpos calientes.",
      "Tema: Anemias hemolíticas autoinmunes.",
    ],
  },
  {
    id: "dr-q-271",
    examArea: "Hematología / Anemias hemolíticas autoinmunes",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia_hemolitica", "aglutininas_frias", "coombs"],
    statement:
      "Hombre de 72 años consulta por fatiga, acrocianosis y episodios repetidos de cambio de coloración en dedos de las manos al exponerse al frío. Refiere que los síntomas empeoran durante las mañanas frías. Al examen físico presenta ictericia leve y cianosis distal. Laboratorios: Hb 8.2 g/dL, reticulocitos 9%, LDH 950 U/L, bilirrubina indirecta elevada y haptoglobina indetectable. El test de Coombs directo es positivo para C3 y negativo para IgG. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Anemia hemolítica autoinmune por anticuerpos calientes." },
      { id: "B", label: "B", text: "Enfermedad por aglutininas frías." },
      { id: "C", label: "C", text: "Esferocitosis hereditaria." },
      { id: "D", label: "D", text: "Hemoglobinuria paroxística nocturna." },
    ],
    correctOptionId: "B",
    explanation:
      "La combinación de hemólisis, síntomas desencadenados por exposición al frío y Coombs directo positivo para complemento (C3) es característica de la enfermedad por aglutininas frías.",
    keyPoints: [
      "Cuando veas: hemólisis + acrocianosis + empeoramiento con el frío + Coombs positivo para C3.",
      "Debes pensar en: enfermedad por aglutininas frías.",
      "Tema: Anemias hemolíticas autoinmunes.",
    ],
  },
  {
    id: "dr-q-272",
    examArea: "Hematología / Anemias hemolíticas corpusculares",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "g6pd", "anemia_hemolitica", "bite_cells"],
    statement:
      'Hombre de 26 años consulta por ictericia, coluria y fatiga intensa de 48 horas de evolución. Refiere que tres días antes inició tratamiento con trimetoprim-sulfametoxazol por una infección urinaria. Al examen físico presenta ictericia escleral leve, sin esplenomegalia. Laboratorios: Hb 8.7 g/dL, reticulocitos 10%, LDH 1.200 U/L, bilirrubina indirecta elevada, haptoglobina indetectable. En el frotis de sangre periférica se observan "bite cells" (células mordidas). ¿Cuál es el diagnóstico más probable?',
    options: [
      { id: "A", label: "A", text: "Esferocitosis hereditaria." },
      { id: "B", label: "B", text: "Déficit de glucosa-6-fosfato deshidrogenasa (G6PD)." },
      { id: "C", label: "C", text: "Anemia hemolítica autoinmune caliente." },
      { id: "D", label: "D", text: "Enfermedad por aglutininas frías." },
    ],
    correctOptionId: "B",
    explanation:
      "La hemólisis aguda desencadenada por un fármaco oxidante y la presencia de células mordidas en el frotis son hallazgos clásicos del déficit de G6PD.",
    keyPoints: [
      "Cuando veas: hemólisis aguda + exposición a medicamentos oxidantes + coluria + bite cells.",
      "Debes pensar en: déficit de G6PD.",
      "Tema: Anemias hemolíticas corpusculares.",
    ],
  },
  {
    id: "dr-q-273",
    examArea: "Hematología / Anemias hemolíticas adquiridas",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "hpn", "hemoglobinuria", "trombosis"],
    statement:
      "Hombre de 34 años consulta por fatiga progresiva y episodios repetidos de orina oscura al despertar, que mejoran durante el día. Refiere además un episodio reciente de trombosis venosa abdominal sin factores de riesgo conocidos. Laboratorios: Hb 8.5 g/dL, reticulocitos 9%, LDH 1.800 U/L, haptoglobina indetectable y Coombs directo negativo. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Anemia hemolítica autoinmune." },
      { id: "B", label: "B", text: "Déficit de glucosa-6-fosfato deshidrogenasa." },
      { id: "C", label: "C", text: "Hemoglobinuria paroxística nocturna." },
      { id: "D", label: "D", text: "Esferocitosis hereditaria." },
    ],
    correctOptionId: "C",
    explanation:
      "La combinación de hemólisis intravascular, Coombs negativo, hemoglobinuria y trombosis en sitios inusuales es altamente sugestiva de hemoglobinuria paroxística nocturna (HPN).",
    keyPoints: [
      "Cuando veas: orina oscura al despertar + hemólisis intravascular + Coombs negativo + trombosis inexplicada.",
      "Debes pensar en: hemoglobinuria paroxística nocturna.",
      "Tema: Anemias hemolíticas adquiridas.",
    ],
  },
  {
    id: "dr-q-274",
    examArea: "Hematología / Hemoglobinopatías",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "drepanocitosis", "electroforesis", "diagnostico"],
    statement:
      "Varón de 22 años, afrodescendiente, consulta por dolor intenso en ambos miembros inferiores de inicio súbito. Refiere múltiples episodios similares desde la adolescencia, varios ingresos hospitalarios por dolor óseo y antecedente de colecistectomía a los 18 años por litiasis pigmentaria. Al examen físico presenta ictericia escleral leve. Laboratorios: Hb 8.2 g/dL, reticulocitos 11%, LDH elevada y bilirrubina indirecta aumentada. ¿Cuál es la prueba diagnóstica confirmatoria más adecuada?",
    options: [
      { id: "A", label: "A", text: "Test de Coombs directo." },
      { id: "B", label: "B", text: "Citometría de flujo para CD55 y CD59." },
      { id: "C", label: "C", text: "Electroforesis de hemoglobina." },
      { id: "D", label: "D", text: "Prueba de fragilidad osmótica." },
    ],
    correctOptionId: "C",
    explanation:
      "La combinación de anemia hemolítica crónica, crisis dolorosas recurrentes y litiasis pigmentaria es altamente sugestiva de drepanocitosis. El diagnóstico se confirma mediante electroforesis de hemoglobina.",
    keyPoints: [
      "Cuando veas: crisis dolorosas recurrentes + anemia hemolítica + ictericia + litiasis pigmentaria precoz.",
      "Debes pensar en: drepanocitosis.",
      "Tema: Hemoglobinopatías.",
    ],
  },
  {
    id: "dr-q-275",
    examArea: "Hematología / Complicaciones agudas de la drepanocitosis",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "drepanocitosis", "crisis_vasooclusiva", "manejo"],
    statement:
      "Varón de 24 años con drepanocitosis consulta por dolor intenso en ambos fémures y región lumbar de 12 horas de evolución. Refiere que el episodio inició tras un cuadro de gastroenteritis con pobre ingesta de líquidos. Al examen físico presenta FC 110 lpm, TA 120/70 mmHg, temperatura 37°C y saturación de oxígeno de 96% al ambiente. Laboratorios: Hb 8 g/dL (similar a su basal), reticulocitos 10%, bilirrubina indirecta elevada y LDH aumentada. ¿Cuál es la conducta inicial más apropiada?",
    options: [
      { id: "A", label: "A", text: "Transfusión inmediata de glóbulos rojos." },
      { id: "B", label: "B", text: "Hidratación intravenosa, analgesia adecuada y oxígeno solo si existe hipoxemia." },
      { id: "C", label: "C", text: "Plasmaféresis urgente." },
      { id: "D", label: "D", text: "Corticoides sistémicos a dosis altas." },
    ],
    correctOptionId: "B",
    explanation:
      "La crisis vasooclusiva es la complicación aguda más frecuente de la drepanocitosis. El tratamiento inicial se basa en control adecuado del dolor, hidratación y corrección de factores precipitantes.",
    keyPoints: [
      "Cuando veas: dolor óseo intenso + antecedente de drepanocitosis + deshidratación o infección reciente.",
      "Debes pensar en: crisis vasooclusiva.",
      "Tema: Complicaciones agudas de la drepanocitosis.",
    ],
  },
];
