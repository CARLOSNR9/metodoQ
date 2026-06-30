import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Banco universal MetodoQ · Dr. Q — Hematología (banco general).
 * PREGUNTAS BANCO GENERAL METODO Q: HEMATOLOGIA · 14/06/2026
 * Aplica a cualquier universidad, especialidad y nivel.
 */
export const DR_Q_HEMATOLOGIA_BANCO_GENERAL_QUESTIONS: TrainingQuestion[] = [
  {
    id: "dr-q-256",
    examArea: "Hematología / Anemias",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia", "macrocitica", "vcm"],
    statement: "Hombre de 65 años en estudio por cuadro crónico de decaimiento y somnolencia. En el hemograma se evidencia una hemoglobina de 10 g/dL, con un volumen corpuscular medio de 106 fL. ¿Cuál de los siguientes diagnósticos es el MENOS probable?",
    options: [
      { id: "A", label: "A", text: "Déficit de vitamina B12." },
      { id: "B", label: "B", text: "Hipotiroidismo." },
      { id: "C", label: "C", text: "Síndrome mielodisplásico." },
      { id: "D", label: "D", text: "Talasemia menor." },
    ],
    correctOptionId: "D",
    explanation: "La talasemia menor típicamente produce una anemia microcítica (VCM disminuido), no macrocítica. Por el contrario, el déficit de vitamina B12, el hipotiroidismo y los síndromes mielodisplásicos son causas clásicas de anemia macrocítica.",
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
    statement: "En una anemia por deficiencia de hierro en una mujer joven con dismenorrea, sangrado menstrual abundante e irregular, ¿cuál de los siguientes parámetros estará aumentado?",
    options: [
      { id: "A", label: "A", text: "Ferritina sérica." },
      { id: "B", label: "B", text: "Saturación de transferrina." },
      { id: "C", label: "C", text: "Receptor soluble de transferrina." },
      { id: "D", label: "D", text: "Volumen corpuscular medio." },
    ],
    correctOptionId: "C",
    explanation: "En la anemia ferropénica existe un aumento de la expresión celular de receptores de transferrina para captar más hierro, lo que se traduce en elevación del receptor soluble de transferrina en sangre.",
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
    statement: "Hombre de 64 años, sin antecedentes de importancia, consulta por astenia y adinamia de varios meses de evolución. No acude a controles médicos desde hace más de 15 años. Hemograma: Hb 11 g/dL, Hto 33%, VCM 77 fL, RDW 22%. ¿Cuál es la conducta más apropiada según las guías de práctica clínica?",
    options: [
      { id: "A", label: "A", text: "Iniciar hierro oral empírico y reevaluar en 3 meses." },
      { id: "B", label: "B", text: "Solicitar colonoscopia para descartar neoplasia gastrointestinal." },
      { id: "C", label: "C", text: "Solicitar transfusión de glóbulos rojos." },
      { id: "D", label: "D", text: "Iniciar vitamina B12 intramuscular." },
    ],
    correctOptionId: "B",
    explanation: "En un hombre mayor con anemia microcítica sugestiva de ferropenia, debe asumirse inicialmente que existe pérdida crónica de sangre hasta demostrar lo contrario. La principal preocupación es descartar cáncer colorrectal u otra fuente digestiva de sangrado.",
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
    statement: "Mujer de 73 años con hematocrito de 30%, Hb 10 g/dL, VCM 85 fL, hierro sérico 29 μg/dL (37-145) y ferritina 340 ng/mL (15-150). ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Hemorragia gastrointestinal." },
      { id: "B", label: "B", text: "Síndrome de malabsorción intestinal." },
      { id: "C", label: "C", text: "Talasemia minor." },
      { id: "D", label: "D", text: "Polimialgia reumática." },
    ],
    correctOptionId: "D",
    explanation: "La paciente presenta una anemia de enfermedad crónica (anemia inflamatoria): hierro sérico bajo con ferritina elevada. La ferritina es un reactante de fase aguda y aumenta en estados inflamatorios crónicos como la polimialgia reumática.",
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
    statement: "Mujer de 41 años en seguimiento por anemia. En la analítica destaca Hb 11 g/dL, ferropenia, macrocitosis e hipergastrinemia. Tiene antecedentes de lupus y enfermedad de Graves. ¿Cuál es la causa más probable de la anemia?",
    options: [
      { id: "A", label: "A", text: "Enfermedad celíaca." },
      { id: "B", label: "B", text: "Gastritis autoinmune tipo A." },
      { id: "C", label: "C", text: "Anemia ferropénica por menorragia." },
      { id: "D", label: "D", text: "Síndrome mielodisplásico." },
    ],
    correctOptionId: "B",
    explanation: "La asociación de enfermedades autoinmunes (LES y Graves), macrocitosis, hipergastrinemia y anemia sugiere fuertemente una gastritis autoinmune con destrucción de células parietales, responsable de anemia perniciosa por déficit de vitamina B12.",
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
    statement: "Mujer de 50 años de raza negra consulta por astenia, adinamia, parestesias en miembros inferiores, alteración de la marcha y pérdida de fuerza. Laboratorios: Hb 9 g/dL, VCM 110 fL, plaquetas 115.000/mm³, leucocitos 6.000/mm³, reticulocitos 1%, haptoglobina 0 g/L, LDH 1.200 U/L, AST 50 U/L, ALT 30 U/L, Coombs directo negativo. ¿Cuál es el tratamiento que debe administrarse?",
    options: [
      { id: "A", label: "A", text: "Ácido fólico oral." },
      { id: "B", label: "B", text: "Prednisolona 1 mg/kg/día." },
      { id: "C", label: "C", text: "Hierro intravenoso." },
      { id: "D", label: "D", text: "Vitamina B12 intramuscular." },
    ],
    correctOptionId: "D",
    explanation: "La paciente presenta una anemia megaloblástica por déficit de vitamina B12, asociada a compromiso neurológico. El tratamiento debe iniciarse de forma inmediata con reposición parenteral de cobalamina.",
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
    statement: "Hombre de 24 años consulta por fatiga progresiva, gingivorragia y episodios frecuentes de infecciones respiratorias en los últimos 3 meses. Al examen físico presenta palidez marcada y petequias en extremidades. No se documentan adenopatías ni hepatoesplenomegalia. Hemograma: Hb 7.8 g/dL, leucocitos 1.800/mm³, neutrófilos 400/mm³, plaquetas 18.000/mm³, reticulocitos 0.2%. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Leucemia mieloide aguda." },
      { id: "B", label: "B", text: "Aplasia medular." },
      { id: "C", label: "C", text: "Púrpura trombocitopénica inmune." },
      { id: "D", label: "D", text: "Hiperesplenismo." },
    ],
    correctOptionId: "B",
    explanation: "La combinación de pancitopenia severa, reticulocitopenia y ausencia de organomegalias es altamente sugestiva de aplasia medular.",
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
    statement: "Mujer de 32 años consulta por fatiga progresiva, equimosis espontáneas y fiebre recurrente de 6 semanas de evolución. Como antecedente refiere tratamiento prolongado con cloranfenicol por una infección adquirida en zona rural. Al examen físico presenta palidez y petequias generalizadas. No tiene adenopatías ni hepatoesplenomegalia. Hemograma: Hb 6.9 g/dL, leucocitos 1.200/mm³, neutrófilos 300/mm³, plaquetas 15.000/mm³, reticulocitos 0.1%. ¿Cuál es el hallazgo más probable en la biopsia de médula ósea?",
    options: [
      { id: "A", label: "A", text: "Médula hipercelular con infiltración blástica superior al 20%." },
      { id: "B", label: "B", text: "Médula hipocelular con reemplazo por tejido adiposo." },
      { id: "C", label: "C", text: "Fibrosis reticulínica difusa con dacriocitos en sangre periférica." },
      { id: "D", label: "D", text: "Hiperplasia eritroide con megaloblastosis intensa." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta una aplasia medular secundaria a fármacos. El cloranfenicol es uno de los medicamentos clásicamente asociados con destrucción de células madre hematopoyéticas y desarrollo de pancitopenia severa.",
    keyPoints: [
      "Cuando veas: pancitopenia + reticulocitos muy bajos + ausencia de organomegalias + exposición a cloranfenicol.",
      "Debes pensar en: aplasia medular inducida por medicamentos.",
      "Tema: Insuficiencia medular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica porque evalúa una asociación farmacológica que sigue apareciendo con frecuencia en exámenes de residencia.

La clave no es la anemia.
La clave es:
Pancitopenia + antecedente farmacológico.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Anemia severa.
• Neutropenia severa.
• Trombocitopenia severa.
Es decir:
Pancitopenia.
Además tiene:
Reticulocitos extremadamente bajos.
Esto indica que la médula:
No está produciendo células sanguíneas.

¿Qué dato cambia completamente la respuesta?
Este:
Uso prolongado de cloranfenicol.
El cloranfenicol es uno de los fármacos clásicos asociados a:
Aplasia medular idiosincrática.
Aunque es infrecuente, cuando ocurre puede ser potencialmente fatal.

¿Qué ocurre en la médula ósea?
Las células madre hematopoyéticas son destruidas o severamente deprimidas.
Como consecuencia:
• Disminuye la eritropoyesis.
• Disminuye la granulopoyesis.
• Disminuye la producción de plaquetas.
La biopsia muestra:
Médula hipocelular reemplazada por grasa.
Este es el hallazgo característico.

¿Por qué no es una leucemia aguda?
Porque en la leucemia la médula suele encontrarse:
Hipercelular.
Con infiltración por blastos.
Además suelen existir:
• Adenopatías.
• Hepatoesplenomegalia.
Hallazgos ausentes en este caso.

¿Qué medicamentos preguntan con frecuencia?
Clásicos de examen
• Cloranfenicol.
• Carbamazepina.
• Fenitoína.
• Sulfonamidas.
• Antitiroideos (metimazol, propiltiouracilo).

¿Cuál es la trampa del examen?
Muchos estudiantes observan:
Pancitopenia.
Y responden:
Leucemia aguda.
Pero el dato decisivo es:
Reticulocitopenia profunda + ausencia de organomegalias + exposición farmacológica.

Entonces, ¿qué debe recordarse?
La secuencia fisiopatológica es:
1. Exposición al fármaco.
2. Lesión de células madre hematopoyéticas.
3. Hipocelularidad medular.
4. Pancitopenia.
5. Infecciones, anemia y sangrado.

Perlas de examen
✅ Cloranfenicol es una causa clásica de aplasia medular.
✅ La pancitopenia es el hallazgo hematológico cardinal.
✅ Los reticulocitos están muy disminuidos.
✅ No suele haber adenopatías ni esplenomegalia.
✅ La biopsia muestra médula hipocelular reemplazada por grasa.
✅ La neutropenia severa aumenta el riesgo de infecciones graves.
✅ En pacientes jóvenes, el trasplante de progenitores hematopoyéticos puede ser curativo.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• British Society for Haematology Guidelines on Aplastic Anemia.
• UpToDate: Acquired Aplastic Anemia in Adults.`,
  },
  {
    id: "dr-q-264",
    examArea: "Hematología / Aplasia medular secundaria a medicamentos",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "aplasia_medular", "metimazol", "antitiroideos"],
    statement: "Mujer de 38 años con antecedente de enfermedad de Graves en tratamiento con metimazol desde hace 4 meses. Consulta por fiebre de 39°C, odinofagia intensa y múltiples úlceras orales de 48 horas de evolución. Al examen físico presenta palidez y petequias aisladas. Hemograma: Hb 8.5 g/dL, leucocitos 900/mm³, neutrófilos 100/mm³, plaquetas 25.000/mm³, reticulocitos 0.2%. No presenta adenopatías ni hepatoesplenomegalia. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Leucemia mieloide aguda." },
      { id: "B", label: "B", text: "Síndrome mielodisplásico." },
      { id: "C", label: "C", text: "Aplasia medular inducida por metimazol." },
      { id: "D", label: "D", text: "Mononucleosis infecciosa." },
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta pancitopenia severa con reticulocitopenia y antecedente de exposición a un fármaco clásicamente asociado a toxicidad medular. La ausencia de adenopatías y organomegalias apoya una falla medular primaria.",
    keyPoints: [
      "Cuando veas: metimazol + pancitopenia + reticulocitos bajos + fiebre y odinofagia.",
      "Debes pensar en: toxicidad medular inducida por antitiroideos.",
      "Tema: Aplasia medular secundaria a medicamentos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica porque combina dos temas muy preguntados:
• Enfermedad de Graves.
• Toxicidad hematológica por antitiroideos.

La clave no es el hipertiroidismo.
La clave es:
El hemograma.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Anemia.
• Leucopenia severa.
• Neutropenia profunda.
• Trombocitopenia.
Es decir:
Pancitopenia.
Además:
Reticulocitos 0.2%.
Lo que indica una falla importante de la producción medular.

¿Por qué consulta por fiebre y odinofagia?
Porque la complicación más inmediata de la neutropenia grave es:
La infección.
Las manifestaciones clásicas suelen ser:
• Fiebre.
• Odinofagia.
• Úlceras orales.
• Infecciones bacterianas recurrentes.

¿Qué dato cambia completamente la respuesta?
Este:
Tratamiento con metimazol.
Los antitiroideos pueden producir:
Agranulocitosis
(la complicación más frecuente y más preguntada).
Y más raramente:
Aplasia medular.

¿Cómo se diferencia de una agranulocitosis aislada?
En la agranulocitosis típica:
• Neutrófilos ↓↓↓
• Plaquetas normales.
• Hb normal.
Aquí encontramos:
• Hb ↓
• Plaquetas ↓
• Reticulocitos ↓
Por tanto existe compromiso de:
Todas las líneas hematopoyéticas.

¿Qué encontraríamos en médula ósea?
Lo característico sería:
Hipocelularidad marcada con sustitución grasa.

¿Cuál es la conducta inmediata?
Ante la sospecha:
Suspender inmediatamente el metimazol.
Posteriormente:
• Hospitalización.
• Antibióticos de amplio espectro si hay neutropenia febril.
• Soporte transfusional según necesidad.
• Valoración por hematología.

¿Cuál es la trampa del examen?
Muchos estudiantes responden:
Agranulocitosis.
Porque asocian correctamente:
Metimazol + fiebre + odinofagia.
Pero la presencia simultánea de:
• Anemia.
• Trombocitopenia.
• Reticulocitopenia.
Indica una lesión más extensa:
Aplasia medular.

Entonces, ¿qué debe recordarse?
La secuencia es:
1. Exposición al metimazol.
2. Daño medular.
3. Pancitopenia.
4. Neutropenia grave.
5. Fiebre e infecciones.
6. Diagnóstico de aplasia medular farmacológica.

Perlas de examen
✅ Metimazol puede producir agranulocitosis.
✅ Más raramente puede producir aplasia medular.
✅ Fiebre + odinofagia en un paciente con metimazol obliga a solicitar hemograma urgente.
✅ Pancitopenia sugiere compromiso de todas las líneas celulares.
✅ Los reticulocitos bajos indican falla de producción.
✅ La ausencia de organomegalias favorece aplasia medular.
✅ El primer paso es suspender inmediatamente el fármaco.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• American Thyroid Association Guidelines.
• UpToDate: Antithyroid Drug-Induced Agranulocytosis and Aplastic Anemia.`,
  },
  {
    id: "dr-q-265",
    examArea: "Hematología / Anemias hemolíticas hereditarias",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "drepanocitosis", "anemia_hemolitica", "crisis_vasooclusiva"],
    statement: "Varón de 38 años procedente de Haití consulta por episodios recurrentes de dolor intenso en extremidades y región lumbar desde la adolescencia, que suelen precipitarse tras infecciones o deshidratación. Refiere múltiples hospitalizaciones por dolor óseo severo y antecedente de colelitiasis pigmentaria a edad temprana. En el examen físico presenta ictericia escleral leve y una cicatriz de colecistectomía. Hemograma: Hb 8.5 g/dL, reticulocitos 12%, bilirrubina indirecta elevada y LDH aumentada. Conforme a la enfermedad que sospecha, señale la respuesta correcta:",
    options: [
      { id: "A", label: "A", text: "La esplenomegalia es un hallazgo frecuente en los cuadros crónicos del adulto." },
      { id: "B", label: "B", text: "Puede producir episodios dolorosos por crisis vasooclusivas." },
      { id: "C", label: "C", text: "Es debida a un defecto congénito en las proteínas de la membrana eritrocitaria." },
      { id: "D", label: "D", text: "La prueba de Coombs suele ser positiva durante las crisis." },
    ],
    correctOptionId: "B",
    explanation: "La descripción es altamente sugestiva de una hemoglobinopatía S, cuya manifestación clínica característica son las crisis vasooclusivas dolorosas secundarias a la polimerización de la hemoglobina anormal.",
    keyPoints: [
      "Cuando veas: paciente afrodescendiente + anemia hemolítica crónica + ictericia + litiasis pigmentaria + crisis dolorosas recurrentes.",
      "Debes pensar en: drepanocitosis (anemia falciforme).",
      "Tema: Anemias hemolíticas hereditarias.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de hemoglobinopatías porque evalúa la capacidad de reconocer la enfermedad a partir de sus manifestaciones clínicas, sin mencionar directamente el diagnóstico.

La clave no es el origen haitiano.
La clave es:
La combinación de hemólisis crónica y crisis dolorosas recurrentes.

¿Qué está ocurriendo realmente?
El paciente presenta múltiples datos de hemólisis crónica:
• Anemia.
• Reticulocitosis.
• Bilirrubina indirecta elevada.
• LDH elevada.
• Colelitiasis pigmentaria precoz.
Además presenta:
Episodios dolorosos recurrentes.
Este dato prácticamente define la enfermedad.

¿Cuál es el mecanismo fisiopatológico?
Existe una mutación puntual en la cadena β de la hemoglobina.
La hemoglobina anormal:
Polimeriza en situaciones de hipoxia, infección o deshidratación.
Como consecuencia:
• Los eritrocitos se deforman.
• Adquieren forma de hoz.
• Ocluyen la microcirculación.
Esto genera:
Crisis vasooclusivas.

¿Por qué la opción A es falsa?
Muchos estudiantes la marcan.
Sin embargo, en los pacientes adultos suele ocurrir:
Autosplenectomía funcional.
Los repetidos infartos esplénicos terminan produciendo:
• Atrofia esplénica.
• Asplenia funcional.
Por ello:
La esplenomegalia NO es habitual en adultos con enfermedad avanzada.

¿Por qué la opción C es falsa?
Los defectos de membrana producen enfermedades como:
• Esferocitosis hereditaria.
• Eliptocitosis hereditaria.
La enfermedad sospechada aquí es:
Un trastorno de la hemoglobina.
No de la membrana eritrocitaria.

¿Por qué la opción D es falsa?
La prueba de Coombs positiva es característica de:
Anemia hemolítica autoinmune.
La drepanocitosis es una:
Anemia hemolítica no inmune.
Por tanto:
El Coombs es negativo.

¿Cuál es la trampa del examen?
La trampa clásica es:
Asociar hemólisis con esplenomegalia.
En drepanocitosis ocurre justamente lo contrario:
El bazo termina atrofiándose.

Entonces, ¿qué debe recordarse?
La secuencia fisiopatológica es:
1. Mutación de la β-globina.
2. Formación de hemoglobina S.
3. Polimerización en condiciones de estrés.
4. Deformación eritrocitaria.
5. Hemólisis crónica.
6. Crisis vasooclusivas.

Perlas de examen
✅ Las crisis dolorosas son la manifestación más característica.
✅ La colelitiasis pigmentaria es frecuente.
✅ Existe hemólisis crónica con reticulocitosis.
✅ La LDH y la bilirrubina indirecta suelen estar elevadas.
✅ La prueba de Coombs es negativa.
✅ Los adultos desarrollan asplenia funcional por autosplenectomía.
✅ La enfermedad se debe a un defecto de la hemoglobina, no de la membrana eritrocitaria.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• ASH Guidelines for Sickle Cell Disease.
• UpToDate: Clinical Manifestations of Sickle Cell Disease.`,
  },
  {
    id: "dr-q-266",
    examArea: "Hematología / Anemias hemolíticas adquiridas",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia_hemolitica", "autoinmune", "les", "coombs"],
    statement: "Mujer de 25 años con diagnóstico de LES en tratamiento con hidroxicloroquina consulta por astenia, adinamia y somnolencia progresiva. Hemograma: Hb 8.4 g/dL, Hto 25.2%, VCM 107 fL. En la extensión de sangre periférica se observan policromatofilia y esferocitos. ¿Cuál es la ayuda diagnóstica más útil para continuar el estudio?",
    options: [
      { id: "A", label: "A", text: "Dosificación sérica de vitamina B12." },
      { id: "B", label: "B", text: "Aspirado de médula ósea." },
      { id: "C", label: "C", text: "Test de Coombs directo." },
      { id: "D", label: "D", text: "Electroforesis de hemoglobina." },
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta una anemia macrocítica en el contexto de LES. La presencia de policromatofilia y esferocitos orienta a hemólisis, y en una paciente con lupus debe sospecharse una anemia hemolítica autoinmune. El estudio de elección para confirmar el diagnóstico es el test de Coombs directo.",
    keyPoints: [
      "Cuando veas: LES + anemia + esferocitos + policromatofilia.",
      "Debes pensar en: anemia hemolítica autoinmune.",
      "Tema: Anemias hemolíticas adquiridas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de hematología porque evalúa una de las manifestaciones hematológicas más frecuentes y preguntadas del lupus eritematoso sistémico.

La clave no es el VCM.
La clave es:
Identificar datos indirectos de hemólisis.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Anemia.
• Macrocitosis.
• Policromatofilia.
• Esferocitos.
Estos hallazgos sugieren:
Destrucción acelerada de eritrocitos.
Ante la hemólisis, la médula ósea responde aumentando la producción de reticulocitos.

¿Por qué aparece macrocitosis?
Muchos estudiantes asocian automáticamente:
VCM elevado = déficit de vitamina B12.
Pero existe otra causa frecuente:
Reticulocitosis.
Los reticulocitos son eritrocitos jóvenes y tienen mayor tamaño que los eritrocitos maduros.
Por ello:
La hemólisis puede elevar el VCM.

¿Por qué pensar en anemia hemolítica autoinmune?
Porque el LES es una de las enfermedades clásicamente asociadas a:
Producción de autoanticuerpos contra eritrocitos.
Estos anticuerpos producen:
• Hemólisis extravascular.
• Esferocitosis secundaria.
• Reticulocitosis.

¿Qué estudio confirma el diagnóstico?
Test de Coombs directo
Detecta:
Inmunoglobulinas o complemento adheridos a la superficie eritrocitaria.
Un resultado positivo confirma:
Hemólisis inmunomediada.

¿Por qué no vitamina B12?
Aunque existe macrocitosis:
• No hay datos neurológicos.
• No hay pancitopenia.
• Sí existen datos sugestivos de hemólisis.
Por ello la prioridad diagnóstica es otra.

¿Por qué no electroforesis de hemoglobina?
Porque las hemoglobinopatías no son la principal sospecha en:
Una mujer joven con LES y datos de hemólisis autoinmune.

¿Cuál es la trampa del examen?
La trampa clásica es:
Ver VCM 107 y responder vitamina B12.
Sin embargo:
El contexto clínico es más importante que el número aislado.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. LES.
2. Producción de autoanticuerpos.
3. Hemólisis eritrocitaria.
4. Reticulocitosis.
5. Macrocitosis secundaria.
6. Coombs directo positivo.

Perlas de examen
✅ El LES es una causa clásica de anemia hemolítica autoinmune.
✅ La hemólisis puede elevar el VCM por reticulocitosis.
✅ Los esferocitos sugieren hemólisis extravascular.
✅ La policromatofilia indica respuesta medular.
✅ El Coombs directo confirma hemólisis inmunológica.
✅ No toda macrocitosis es déficit de vitamina B12.
✅ En el MIR suelen mezclar macrocitosis por reticulocitosis con anemia megaloblástica para generar confusión.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• UpToDate: Warm Autoimmune Hemolytic Anemia.
• EULAR Recommendations for Systemic Lupus Erythematosus.`,
  },
  {
    id: "dr-q-267",
    examArea: "Hematología / Anemias hemolíticas adquiridas",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia_hemolitica", "coombs", "hemolisis"],
    statement: "Mujer de 60 años consulta por 15 días de somnolencia y astenia. Refiere dormir 8-9 horas cada noche sin interrupciones. Al examen físico presenta palidez mucocutánea. Laboratorios: Hb 8 g/dL, VCM 100 fL, LDH 900 U/L, haptoglobina indetectable y bilirrubina total 3.5 mg/dL. Señale la respuesta correcta:",
    options: [
      { id: "A", label: "A", text: "Se trata de una anemia hemolítica; para determinar su naturaleza debemos solicitar una electroforesis de hemoglobinas." },
      { id: "B", label: "B", text: "Se trata de una anemia hemolítica; debemos solicitar un test de Coombs directo, que determina la presencia de IgG y/o la fracción C3 del complemento sobre la membrana del hematíe." },
      { id: "C", label: "C", text: "Se trata de una anemia hemolítica; debemos solicitar un test de Coombs directo, que determina la presencia de IgG libre en plasma." },
      { id: "D", label: "D", text: "Se trata de una anemia hemolítica; para determinar su naturaleza debemos solicitar una prueba de Coombs indirecto." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta un perfil clásico de hemólisis: anemia, LDH elevada, bilirrubina aumentada e haptoglobina indetectable. El siguiente paso es determinar si la hemólisis es inmunológica mediante un test de Coombs directo.",
    keyPoints: [
      "Cuando veas: LDH elevada + haptoglobina disminuida + bilirrubina indirecta elevada + anemia.",
      "Debes pensar en: anemia hemolítica.",
      "Tema: Anemias hemolíticas adquiridas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica porque evalúa uno de los algoritmos diagnósticos más preguntados en hematología.

La clave no es la hemoglobina.
La clave es:
Reconocer los marcadores bioquímicos de hemólisis.

¿Qué está ocurriendo realmente?
La paciente presenta:
Parámetro | Resultado
Hb | 8 g/dL ↓
LDH | 900 U/L ↑
Haptoglobina | Indetectable ↓↓↓
Bilirrubina | 3.5 mg/dL ↑
Esta combinación es prácticamente diagnóstica de:
Hemólisis.

¿Por qué aumenta la LDH?
Los eritrocitos contienen grandes cantidades de LDH.
Cuando son destruidos:
Liberan LDH al plasma.
Por eso suele encontrarse:
LDH marcadamente elevada.

¿Por qué disminuye la haptoglobina?
La haptoglobina se une a la hemoglobina libre circulante.
Cuando existe hemólisis:
La hemoglobina liberada consume la haptoglobina.
Por ello:
La haptoglobina disminuye o desaparece.

¿Por qué aumenta la bilirrubina?
La degradación acelerada del grupo hemo genera:
Bilirrubina indirecta.
Por tanto:
La bilirrubina aumenta.

¿Qué estudio debe solicitarse después?
Una vez confirmada la hemólisis:
Debe determinarse si es inmunológica o no inmunológica.
El estudio de elección es:
Test de Coombs directo

¿Qué detecta realmente el Coombs directo?
Esta es la perla de examen.
El Coombs directo identifica:
IgG y/o complemento (C3) adheridos a la membrana del eritrocito.
Es decir:
Anticuerpos pegados al hematíe.

¿Por qué la opción C es falsa?
Porque el Coombs directo:
No detecta anticuerpos libres en plasma.
Eso corresponde al:
Coombs indirecto.
Pregunta muy clásica de examen.

¿Por qué no electroforesis inicialmente?
La electroforesis de hemoglobina se utiliza para:
• Drepanocitosis.
• Talasemias.
• Otras hemoglobinopatías.
Pero primero debemos determinar:
Si la hemólisis es autoinmune.

¿Cuál es la trampa del examen?
Muchos estudiantes confunden:
Coombs directo
Detecta:
Anticuerpos adheridos al eritrocito.
Coombs indirecto
Detecta:
Anticuerpos libres en el plasma.
Esa diferencia suele ser el objetivo real de la pregunta.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar hemólisis.
2. Solicitar Coombs directo.
3. Determinar si la hemólisis es inmunológica.
4. Continuar el estudio etiológico.

Perlas de examen
✅ LDH elevada es un marcador de hemólisis.
✅ Haptoglobina baja es uno de los hallazgos más específicos.
✅ La bilirrubina indirecta suele aumentar.
✅ El Coombs directo detecta IgG o C3 adheridos al eritrocito.
✅ El Coombs indirecto detecta anticuerpos libres en plasma.
✅ La hemólisis puede producir macrocitosis por reticulocitosis.
✅ Antes de buscar causas raras, primero debe establecerse si la hemólisis es inmune o no inmune.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• UpToDate: Diagnostic Approach to Hemolytic Anemia.
• ASH Guidelines for Autoimmune Hemolytic Anemia.`,
  },
  {
    id: "dr-q-268",
    examArea: "Hematología / Anemias hemolíticas hereditarias",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "esferocitosis", "anemia_hemolitica", "chcm"],
    statement: "Mujer de 35 años en valoración prequirúrgica. En los estudios preoperatorios se encuentra Hb 9 g/dL, VCM 80 fL y CHCM 38 g/dL. Al examen físico presenta esplenomegalia. Estudios complementarios: bilirrubina total 2 mg/dL (indirecta 1.8 mg/dL), LDH 500 U/L y reticulocitos 10%. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Esferocitosis hereditaria." },
      { id: "B", label: "B", text: "Drepanocitosis." },
      { id: "C", label: "C", text: "Anemia hemolítica autoinmune." },
      { id: "D", label: "D", text: "Anemia sideroblástica." },
    ],
    correctOptionId: "A",
    explanation: "La combinación de hemólisis crónica, esplenomegalia y, sobre todo, una CHCM elevada (38 g/dL) es altamente sugestiva de esferocitosis hereditaria.",
    keyPoints: [
      "Cuando veas: CHCM elevada + esplenomegalia + reticulocitosis + bilirrubina indirecta elevada.",
      "Debes pensar en: esferocitosis hereditaria.",
      "Tema: Anemias hemolíticas hereditarias.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de hematología porque evalúa uno de los datos de laboratorio más específicos de toda la especialidad.

La clave no es la hemoglobina.
La clave es:
La CHCM de 38 g/dL.

¿Qué está ocurriendo realmente?
La paciente presenta múltiples datos de hemólisis:
Parámetro | Resultado
Hb | 9 g/dL ↓
Reticulocitos | 10% ↑
Bilirrubina indirecta | ↑
LDH | ↑
Esplenomegalia | Presente
Todo esto indica:
Anemia hemolítica crónica.

¿Qué dato orienta específicamente a esferocitosis?
CHCM elevada
Esta es una perla de examen clásica.
La mayoría de las anemias presentan:
CHCM normal o disminuida.
La esferocitosis hereditaria es una de las pocas entidades donde puede encontrarse:
CHCM aumentada.

¿Cuál es el defecto fisiopatológico?
Existe una alteración congénita de proteínas de membrana como:
• Espectrina.
• Anquirina.
• Banda 3.
• Proteína 4.2.
Como consecuencia:
El eritrocito pierde superficie de membrana.
Y adopta una forma:
Esférica.

¿Por qué aparece hemólisis?
Los esferocitos tienen menor deformabilidad.
Cuando atraviesan el bazo:
Son atrapados y destruidos.
Produciendo:
Hemólisis extravascular.

¿Por qué aparece esplenomegalia?
El bazo trabaja constantemente eliminando eritrocitos anormales.
Con el tiempo ocurre:
Hiperplasia del sistema reticuloendotelial.
Generando:
Esplenomegalia.

¿Por qué no es drepanocitosis?
La drepanocitosis suele asociarse con:
• Crisis vasooclusivas.
• Antecedente familiar compatible.
• Autosplenectomía funcional en adultos.
Además:
La CHCM elevada no es un hallazgo clásico.

¿Por qué no es anemia hemolítica autoinmune?
Porque aunque también puede producir esferocitos:
La pregunta busca la causa más probable.
Y la pista fundamental es:
CHCM marcadamente elevada.
Hallazgo clásico de esferocitosis hereditaria.

¿Cuál es la trampa del examen?
Muchos estudiantes se enfocan en:
Hemólisis + esplenomegalia.
Y dudan entre hemólisis autoinmune y esferocitosis.
Sin embargo:
La CHCM elevada prácticamente señala la respuesta.

Entonces, ¿qué debe recordarse?
La secuencia fisiopatológica es:
1. Defecto de membrana eritrocitaria.
2. Formación de esferocitos.
3. Secuestro esplénico.
4. Hemólisis extravascular.
5. Esplenomegalia.
6. Reticulocitosis compensadora.

Perlas de examen
✅ CHCM elevada es una pista clásica de esferocitosis hereditaria.
✅ La hemólisis es predominantemente extravascular.
✅ Existe reticulocitosis compensadora.
✅ La bilirrubina indirecta suele aumentar.
✅ La esplenomegalia es frecuente.
✅ Los defectos clásicos son espectrina y anquirina.
✅ El estudio confirmatorio moderno es la citometría con eosina-5-maleimida (EMA).

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• UpToDate: Hereditary Spherocytosis.
• British Society for Haematology Guidelines on Hereditary Spherocytosis.`,
  },
  {
    id: "dr-q-269",
    examArea: "Hematología / Enfoque diagnóstico de las anemias hemolíticas",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia_hemolitica", "esquistocitos", "microangiopatica"],
    statement: "Hombre de 42 años consulta por ictericia, coluria y fatiga progresiva. Laboratorios: Hb 8.5 g/dL, reticulocitos 12%, LDH 1.500 U/L, haptoglobina indetectable y bilirrubina indirecta elevada. En el extendido de sangre periférica se observan abundantes esquistocitos. ¿Cuál es la clasificación más adecuada de esta anemia hemolítica?",
    options: [
      { id: "A", label: "A", text: "Hemólisis extravascular inmunológica." },
      { id: "B", label: "B", text: "Hemólisis extravascular no inmunológica." },
      { id: "C", label: "C", text: "Hemólisis intravascular no inmunológica." },
      { id: "D", label: "D", text: "Hemólisis intravascular inmunológica." },
    ],
    correctOptionId: "C",
    explanation: "La presencia de esquistocitos indica destrucción mecánica de eritrocitos dentro de la circulación, característica de las anemias hemolíticas microangiopáticas.",
    keyPoints: [
      "Cuando veas: esquistocitos + LDH muy elevada + haptoglobina indetectable + coluria.",
      "Debes pensar en: hemólisis intravascular.",
      "Tema: Enfoque diagnóstico de las anemias hemolíticas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta fundamental porque el enfoque diagnóstico de las anemias hemolíticas se basa en responder dos preguntas:
¿Dónde ocurre la hemólisis?
• Intravascular.
• Extravascular.
¿Quién la produce?
• Mecanismo inmunológico.
• Mecanismo no inmunológico.
Ese es el algoritmo que debes tener en mente en el examen y en residencia.

¿Qué está ocurriendo realmente?
El paciente presenta datos inequívocos de hemólisis:
• Anemia.
• Reticulocitosis.
• LDH elevada.
• Bilirrubina indirecta elevada.
• Haptoglobina disminuida.
Ahora debemos clasificarla.

¿Qué dato cambia completamente la respuesta?
Este:
Esquistocitos.
Los esquistocitos son fragmentos de eritrocitos.
Indican:
Destrucción mecánica dentro del vaso sanguíneo.
Por tanto:
Hemólisis intravascular.

¿Por qué es no inmunológica?
Porque el mecanismo es:
Trauma mecánico del eritrocito.
No hay anticuerpos destruyendo hematíes.
Las causas clásicas son:
• Púrpura trombótica trombocitopénica.
• Síndrome urémico hemolítico.
• CID.
• Prótesis valvulares mecánicas.

¿Cómo sería una hemólisis intravascular inmunológica?
Ejemplos:
• Reacción transfusional aguda.
• Hemoglobinuria paroxística a frigore.
Allí la destrucción ocurre dentro del vaso pero mediada por anticuerpos o complemento.

¿Cómo sería una hemólisis extravascular?
La destrucción ocurre principalmente en:
• Bazo.
• Hígado.
Ejemplos:
• Esferocitosis hereditaria.
• Anemia hemolítica autoinmune caliente.

¿Cuál es la trampa del examen?
Muchos estudiantes memorizan enfermedades.
Pero el examen suele preguntar:
Primero clasifique la hemólisis.
Y luego piense en la enfermedad.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar hemólisis.
2. Determinar si es intra o extravascular.
3. Determinar si es inmune o no inmune.
4. Buscar la etiología específica.

Perlas de examen
✅ Esquistocitos = hemólisis intravascular.
✅ Esferocitos = hemólisis extravascular.
✅ Haptoglobina indetectable sugiere hemólisis intravascular importante.
✅ El Coombs directo clasifica las hemólisis inmunológicas.
✅ El enfoque diagnóstico siempre inicia con: ¿dónde ocurre la hemólisis?
✅ Después se pregunta: ¿es inmune o no inmune?
✅ Ese algoritmo resuelve la mayoría de preguntas de anemias hemolíticas en residencia.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• UpToDate: Diagnostic Approach to Hemolytic Anemia.
• ASH Guidelines for Hemolytic Anemias.`,
  },
  {
    id: "dr-q-270",
    examArea: "Hematología / Anemias hemolíticas autoinmunes",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia_hemolitica", "autoinmune", "anticuerpos_calientes", "coombs"],
    statement: "Mujer de 68 años consulta por fatiga progresiva, ictericia leve y disnea de esfuerzo. Al examen físico presenta esplenomegalia. Laboratorios: Hb 7.9 g/dL, reticulocitos 11%, LDH 850 U/L, haptoglobina indetectable y bilirrubina indirecta elevada. El test de Coombs directo es positivo para IgG y negativo para C3. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Anemia hemolítica autoinmune por anticuerpos fríos." },
      { id: "B", label: "B", text: "Hemoglobinuria paroxística nocturna." },
      { id: "C", label: "C", text: "Anemia hemolítica autoinmune por anticuerpos calientes." },
      { id: "D", label: "D", text: "Esferocitosis hereditaria." },
    ],
    correctOptionId: "C",
    explanation: "La positividad para IgG en el Coombs directo es característica de la anemia hemolítica autoinmune por anticuerpos calientes, la forma más frecuente de hemólisis autoinmune.",
    keyPoints: [
      "Cuando veas: hemólisis + Coombs directo positivo + IgG sobre la membrana eritrocitaria.",
      "Debes pensar en: anemia hemolítica autoinmune por anticuerpos calientes.",
      "Tema: Anemias hemolíticas autoinmunes.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica porque evalúa uno de los pasos fundamentales del enfoque de las anemias hemolíticas.
La secuencia diagnóstica siempre debe ser:
1. Confirmar hemólisis.
2. Determinar si es intra o extravascular.
3. Determinar si es inmunológica o no inmunológica.
4. Identificar el mecanismo específico.

¿Existe hemólisis?
Sí.
La paciente presenta:
• Anemia.
• Reticulocitosis.
• LDH elevada.
• Bilirrubina indirecta elevada.
• Haptoglobina disminuida.
Estos hallazgos confirman:
Hemólisis.

¿Es inmunológica o no inmunológica?
El dato decisivo es:
Coombs directo positivo.
Por definición esto indica:
Hemólisis inmunomediada.

¿Qué detecta el Coombs directo?
Detecta:
Inmunoglobulinas o complemento adheridos a la superficie del eritrocito.
No detecta anticuerpos libres en plasma.

¿Por qué se trata de anticuerpos calientes?
Porque el Coombs muestra:
IgG positiva.
Los anticuerpos calientes:
• Son habitualmente IgG.
• Actúan a temperatura corporal.
• Producen principalmente hemólisis extravascular.
• Se asocian a LES, LLC y algunos medicamentos.

¿Cómo sería una hemólisis por anticuerpos fríos?
Los anticuerpos fríos suelen ser:
IgM.
Activan complemento y el Coombs suele mostrar:
Positividad para C3.
Se asocian clásicamente a:
• Infección por Mycoplasma.
• Mononucleosis infecciosa.
• Trastornos linfoproliferativos.

¿Cuál es la trampa de examen?
Muchos estudiantes memorizan:
Calientes = IgG.
Fríos = IgM.
Pero olvidan lo realmente importante:
El patrón del Coombs directo.

Entonces, ¿qué debe recordarse?
Anticuerpos calientes
• IgG.
• Coombs IgG positivo.
• Hemólisis predominantemente extravascular.
Anticuerpos fríos
• IgM.
• Coombs C3 positivo.
• Activación del complemento.

Perlas de examen
✅ La anemia hemolítica autoinmune caliente es la más frecuente.
✅ Los anticuerpos calientes son IgG.
✅ Los anticuerpos fríos son generalmente IgM.
✅ Coombs directo positivo para IgG orienta a anticuerpos calientes.
✅ Coombs positivo para C3 orienta a anticuerpos fríos.
✅ El enfoque de la hemólisis siempre inicia determinando si es inmune o no inmune.
✅ El Coombs directo es la prueba clave en las anemias hemolíticas autoinmunes.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• UpToDate: Warm Autoimmune Hemolytic Anemia.
• UpToDate: Cold Agglutinin Disease.`,
  },
  {
    id: "dr-q-271",
    examArea: "Hematología / Anemias hemolíticas autoinmunes",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia_hemolitica", "aglutininas_frias", "coombs"],
    statement: "Hombre de 72 años consulta por fatiga, acrocianosis y episodios repetidos de cambio de coloración en dedos de las manos al exponerse al frío. Refiere que los síntomas empeoran durante las mañanas frías. Al examen físico presenta ictericia leve y cianosis distal. Laboratorios: Hb 8.2 g/dL, reticulocitos 9%, LDH 950 U/L, bilirrubina indirecta elevada y haptoglobina indetectable. El test de Coombs directo es positivo para C3 y negativo para IgG. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Anemia hemolítica autoinmune por anticuerpos calientes." },
      { id: "B", label: "B", text: "Enfermedad por aglutininas frías." },
      { id: "C", label: "C", text: "Esferocitosis hereditaria." },
      { id: "D", label: "D", text: "Hemoglobinuria paroxística nocturna." },
    ],
    correctOptionId: "B",
    explanation: "La combinación de hemólisis, síntomas desencadenados por exposición al frío y Coombs directo positivo para complemento (C3) es característica de la enfermedad por aglutininas frías.",
    keyPoints: [
      "Cuando veas: hemólisis + acrocianosis + empeoramiento con el frío + Coombs positivo para C3.",
      "Debes pensar en: enfermedad por aglutininas frías.",
      "Tema: Anemias hemolíticas autoinmunes.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica porque obliga a diferenciar los dos grandes grupos de anemias hemolíticas autoinmunes:
• Anticuerpos calientes.
• Anticuerpos fríos.

La clave no es la anemia.
La clave es:
La relación de los síntomas con el frío y el patrón del Coombs.

¿Existe hemólisis?
Sí.
El paciente presenta:
• Anemia.
• Reticulocitosis.
• LDH elevada.
• Bilirrubina indirecta elevada.
• Haptoglobina disminuida.
Estos hallazgos confirman:
Hemólisis.

¿Es inmunológica o no inmunológica?
El dato decisivo es:
Coombs directo positivo.
Por tanto:
Se trata de una hemólisis inmunológica.

¿Qué orienta específicamente a anticuerpos fríos?
Tres hallazgos:
1. Acrocianosis
La aglutinación eritrocitaria ocurre en zonas de menor temperatura corporal:
• Dedos.
• Orejas.
• Nariz.
2. Síntomas desencadenados por frío
Es una característica muy sugestiva.
3. Coombs positivo para C3
Este es el hallazgo más importante.

¿Qué anticuerpo produce esta enfermedad?
Generalmente:
IgM.
La IgM activa intensamente el complemento.
Por eso el Coombs suele detectar:
C3 sobre la membrana eritrocitaria.

¿Cómo sería una hemólisis por anticuerpos calientes?
En ese caso:
• Predomina IgG.
• Coombs positivo para IgG.
• Hemólisis predominantemente extravascular.

¿Con qué enfermedades puede asociarse?
Clásicamente:
• Infección por Mycoplasma pneumoniae.
• Mononucleosis infecciosa.
• Trastornos linfoproliferativos.

¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan:
Frío = IgM.
Pero olvidan que la pregunta suele resolverse observando:
El resultado del Coombs.

Entonces, ¿qué debe recordarse?
Anticuerpos calientes
• IgG.
• Coombs IgG positivo.
• Hemólisis extravascular.
Anticuerpos fríos
• IgM.
• Coombs C3 positivo.
• Síntomas desencadenados por frío.
• Acrocianosis.

Perlas de examen
✅ Acrocianosis es una pista clásica de enfermedad por aglutininas frías.
✅ Los anticuerpos fríos suelen ser IgM.
✅ El Coombs directo suele ser positivo para C3.
✅ La exposición al frío precipita los síntomas.
✅ Se trata de una hemólisis inmunológica.
✅ El complemento participa activamente en la destrucción eritrocitaria.
✅ El patrón Coombs C3 positivo debe asociarse inmediatamente con anticuerpos fríos.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• UpToDate: Cold Agglutinin Disease.
• ASH Guidelines for Autoimmune Hemolytic Anemia.`,
  },
  {
    id: "dr-q-272",
    examArea: "Hematología / Anemias hemolíticas corpusculares",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "g6pd", "anemia_hemolitica", "bite_cells"],
    statement: "Hombre de 26 años consulta por ictericia, coluria y fatiga intensa de 48 horas de evolución. Refiere que tres días antes inició tratamiento con trimetoprim-sulfametoxazol por una infección urinaria. Al examen físico presenta ictericia escleral leve, sin esplenomegalia. Laboratorios: Hb 8.7 g/dL, reticulocitos 10%, LDH 1.200 U/L, bilirrubina indirecta elevada, haptoglobina indetectable. En el frotis de sangre periférica se observan \"bite cells\" (células mordidas). ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Esferocitosis hereditaria." },
      { id: "B", label: "B", text: "Déficit de glucosa-6-fosfato deshidrogenasa (G6PD)." },
      { id: "C", label: "C", text: "Anemia hemolítica autoinmune caliente." },
      { id: "D", label: "D", text: "Enfermedad por aglutininas frías." },
    ],
    correctOptionId: "B",
    explanation: "La hemólisis aguda desencadenada por un fármaco oxidante y la presencia de células mordidas en el frotis son hallazgos clásicos del déficit de G6PD.",
    keyPoints: [
      "Cuando veas: hemólisis aguda + exposición a medicamentos oxidantes + coluria + bite cells.",
      "Debes pensar en: déficit de G6PD.",
      "Tema: Anemias hemolíticas corpusculares.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica porque evalúa una de las causas más frecuentes de hemólisis desencadenada por medicamentos.

La clave no es la anemia.
La clave es:
El desencadenante oxidativo.

¿Existe hemólisis?
Sí.
El paciente presenta:
• Anemia.
• Reticulocitosis.
• LDH elevada.
• Bilirrubina indirecta elevada.
• Haptoglobina disminuida.
Estos hallazgos confirman:
Hemólisis.

¿Es intravascular o extravascular?
En el déficit de G6PD pueden coexistir ambos mecanismos, aunque frecuentemente predomina una hemólisis aguda asociada al estrés oxidativo.

¿Cuál es el defecto fisiopatológico?
La G6PD participa en la vía de las pentosas fosfato.
Su función principal es generar:
NADPH.
El NADPH permite mantener el glutatión reducido, principal mecanismo de defensa del eritrocito frente al estrés oxidativo.

¿Qué ocurre cuando falta G6PD?
El eritrocito pierde capacidad para neutralizar radicales libres.
Ante ciertos estímulos oxidantes ocurre:
• Daño de la hemoglobina.
• Formación de cuerpos de Heinz.
• Destrucción eritrocitaria.

¿Qué desencadena las crisis hemolíticas?
Clásicamente:
Medicamentos
• Sulfonamidas.
• Dapsona.
• Primaquina.
• Nitrofurantoína.
Infecciones
Son uno de los desencadenantes más frecuentes.
Habas (favismo)
Perla clásica de examen.

¿Qué significan las "bite cells"?
Los macrófagos esplénicos eliminan los cuerpos de Heinz acumulados en el eritrocito.
Como consecuencia aparecen:
Células mordidas (bite cells).
Este es un hallazgo muy característico.

¿Por qué no es esferocitosis hereditaria?
La esferocitosis se caracteriza por:
• Esferocitos.
• CHCM elevada.
• Esplenomegalia frecuente.
No por crisis desencadenadas por oxidantes.

¿Por qué no es una hemólisis autoinmune?
Porque no existen datos de autoinmunidad ni evidencia de anticuerpos contra el eritrocito.
El mecanismo aquí es:
Estrés oxidativo.

¿Cuál es la trampa de examen?
Muchos estudiantes memorizan:
Déficit de G6PD = favismo.
Pero en la práctica y en los exámenes, el desencadenante más frecuente suele ser:
Una infección o un medicamento oxidante.

Entonces, ¿qué debe recordarse?
El enfoque correcto es:
1. Confirmar hemólisis.
2. Identificar el desencadenante.
3. Buscar datos de daño oxidativo.
4. Reconocer los hallazgos característicos del frotis.

Perlas de examen
✅ El déficit de G6PD es una enzimopatía eritrocitaria.
✅ La hemólisis suele desencadenarse por infecciones o medicamentos oxidantes.
✅ Las sulfonamidas son un desencadenante clásico.
✅ Los cuerpos de Heinz son característicos.
✅ Las células mordidas (bite cells) orientan al diagnóstico.
✅ El defecto está en la producción de NADPH.
✅ La enfermedad se hereda ligada al cromosoma X.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• UpToDate: Clinical Manifestations and Diagnosis of G6PD Deficiency.
• ASH Guidelines on Hemolytic Anemias.`,
  },
  {
    id: "dr-q-273",
    examArea: "Hematología / Anemias hemolíticas adquiridas",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "hpn", "hemoglobinuria", "trombosis"],
    statement: "Hombre de 34 años consulta por fatiga progresiva y episodios repetidos de orina oscura al despertar, que mejoran durante el día. Refiere además un episodio reciente de trombosis venosa abdominal sin factores de riesgo conocidos. Laboratorios: Hb 8.5 g/dL, reticulocitos 9%, LDH 1.800 U/L, haptoglobina indetectable y Coombs directo negativo. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Anemia hemolítica autoinmune." },
      { id: "B", label: "B", text: "Déficit de glucosa-6-fosfato deshidrogenasa." },
      { id: "C", label: "C", text: "Hemoglobinuria paroxística nocturna." },
      { id: "D", label: "D", text: "Esferocitosis hereditaria." },
    ],
    correctOptionId: "C",
    explanation: "La combinación de hemólisis intravascular, Coombs negativo, hemoglobinuria y trombosis en sitios inusuales es altamente sugestiva de hemoglobinuria paroxística nocturna (HPN).",
    keyPoints: [
      "Cuando veas: orina oscura al despertar + hemólisis intravascular + Coombs negativo + trombosis inexplicada.",
      "Debes pensar en: hemoglobinuria paroxística nocturna.",
      "Tema: Anemias hemolíticas adquiridas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica porque evalúa una de las anemias hemolíticas adquiridas más características.

La clave no es la anemia.
La clave es:
Hemólisis + trombosis.

¿Existe hemólisis?
Sí.
El paciente presenta:
• Anemia.
• Reticulocitosis.
• LDH muy elevada.
• Haptoglobina indetectable.
Estos hallazgos confirman:
Hemólisis.

¿Es intravascular o extravascular?
La presencia de:
• Hemoglobinuria.
• LDH muy elevada.
• Haptoglobina prácticamente ausente.
Orienta a:
Hemólisis intravascular.

¿Qué dato es el más importante de toda la pregunta?
Este:
Trombosis venosa abdominal sin causa aparente.
Es probablemente el dato más clásico de la enfermedad.
Las trombosis pueden aparecer en sitios inusuales:
• Venas hepáticas (síndrome de Budd-Chiari).
• Vena porta.
• Venas mesentéricas.
• Senos venosos cerebrales.

¿Qué ocurre realmente?
La HPN es una enfermedad adquirida de la célula madre hematopoyética.
Existe una alteración que provoca pérdida de proteínas reguladoras del complemento en la superficie eritrocitaria.
Como consecuencia:
El complemento destruye los eritrocitos.
Produciendo hemólisis intravascular crónica.

¿Por qué la orina es más oscura al despertar?
Es el hallazgo clásico que da nombre a la enfermedad.
Durante la noche puede aumentar la activación del complemento y la hemólisis, favoreciendo la aparición de:
Hemoglobinuria matutina.

¿Cómo se confirma el diagnóstico?
Mediante:
Citometría de flujo.
Demostrando ausencia de proteínas ancladas por GPI (CD55 y CD59).

¿Cuál es la trampa de examen?
Muchos estudiantes se quedan con:
"Orina oscura al despertar".
Pero el dato más importante y más preguntado es:
Trombosis en sitios inusuales.

Entonces, ¿qué debe recordarse?
El enfoque correcto es:
1. Confirmar hemólisis.
2. Identificar que es intravascular.
3. Observar que el Coombs es negativo.
4. Buscar hemoglobinuria y trombosis.
5. Sospechar HPN.

Perlas de examen
✅ La HPN es una hemólisis intravascular adquirida.
✅ El Coombs directo es negativo.
✅ La hemoglobinuria matutina es un hallazgo clásico.
✅ La trombosis es la principal causa de morbimortalidad.
✅ Las trombosis suelen aparecer en sitios inusuales.
✅ La LDH suele estar muy elevada.
✅ La prueba diagnóstica de elección es la citometría de flujo para CD55 y CD59.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• UpToDate: Clinical Manifestations and Diagnosis of Paroxysmal Nocturnal Hemoglobinuria.
• ASH Guidelines for Paroxysmal Nocturnal Hemoglobinuria.`,
  },
  {
    id: "dr-q-274",
    examArea: "Hematología / Hemoglobinopatías",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "drepanocitosis", "electroforesis", "diagnostico"],
    statement: "Varón de 22 años, afrodescendiente, consulta por dolor intenso en ambos miembros inferiores de inicio súbito. Refiere múltiples episodios similares desde la adolescencia, varios ingresos hospitalarios por dolor óseo y antecedente de colecistectomía a los 18 años por litiasis pigmentaria. Al examen físico presenta ictericia escleral leve. Laboratorios: Hb 8.2 g/dL, reticulocitos 11%, LDH elevada y bilirrubina indirecta aumentada. ¿Cuál es la prueba diagnóstica confirmatoria más adecuada?",
    options: [
      { id: "A", label: "A", text: "Test de Coombs directo." },
      { id: "B", label: "B", text: "Citometría de flujo para CD55 y CD59." },
      { id: "C", label: "C", text: "Electroforesis de hemoglobina." },
      { id: "D", label: "D", text: "Prueba de fragilidad osmótica." },
    ],
    correctOptionId: "C",
    explanation: "La combinación de anemia hemolítica crónica, crisis dolorosas recurrentes y litiasis pigmentaria es altamente sugestiva de drepanocitosis. El diagnóstico se confirma mediante electroforesis de hemoglobina.",
    keyPoints: [
      "Cuando veas: crisis dolorosas recurrentes + anemia hemolítica + ictericia + litiasis pigmentaria precoz.",
      "Debes pensar en: drepanocitosis.",
      "Tema: Hemoglobinopatías.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica porque evalúa el diagnóstico de una de las hemoglobinopatías más frecuentes del mundo.

La clave no es la anemia.
La clave es:
Las crisis dolorosas recurrentes.

¿Existe hemólisis?
Sí.
El paciente presenta:
• Anemia.
• Reticulocitosis.
• LDH elevada.
• Bilirrubina indirecta elevada.
Estos hallazgos indican:
Hemólisis crónica.

¿Es intravascular o extravascular?
La drepanocitosis puede producir ambos mecanismos, aunque predomina la hemólisis extravascular crónica asociada al secuestro esplénico y destrucción eritrocitaria.

¿Qué dato orienta específicamente al diagnóstico?
La combinación de:
• Crisis dolorosas recurrentes.
• Hemólisis crónica.
• Litiasis pigmentaria en paciente joven.
Es altamente sugestiva de:
Drepanocitosis.

¿Por qué aparecen las crisis dolorosas?
Los eritrocitos anormales pueden deformarse y ocluir la microcirculación.
Como consecuencia aparecen:
Crisis vasooclusivas.
Estas son la manifestación clínica más característica de la enfermedad.

¿Cuál es la prueba confirmatoria?
Electroforesis de hemoglobina
Permite:
• Identificar hemoglobina S.
• Cuantificar los diferentes tipos de hemoglobina.
• Confirmar el diagnóstico.

¿Por qué no Coombs?
El Coombs se utiliza para:
Hemólisis inmunológicas.
La drepanocitosis es una hemoglobinopatía hereditaria.

¿Por qué no CD55/CD59?
Esa prueba se utiliza para:
Hemoglobinuria paroxística nocturna.

¿Por qué no fragilidad osmótica?
La fragilidad osmótica se emplea principalmente en:
Esferocitosis hereditaria.

¿Cuál es la trampa de examen?
Muchos estudiantes identifican correctamente la enfermedad, pero olvidan:
Cuál es la prueba confirmatoria.
La respuesta correcta es:
Electroforesis de hemoglobina.

Entonces, ¿qué debe recordarse?
El enfoque correcto es:
1. Confirmar hemólisis.
2. Reconocer los datos clínicos característicos.
3. Sospechar hemoglobinopatía.
4. Confirmar con electroforesis de hemoglobina.

Perlas de examen
✅ Las crisis vasooclusivas son el hallazgo clínico más característico.
✅ La litiasis pigmentaria es frecuente por hemólisis crónica.
✅ Existe reticulocitosis compensadora.
✅ La bilirrubina indirecta suele estar elevada.
✅ La electroforesis de hemoglobina confirma el diagnóstico.
✅ Se trata de una hemoglobinopatía hereditaria.
✅ La hemólisis crónica debe hacer pensar en complicaciones biliares tempranas.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• ASH Guidelines for Sickle Cell Disease.
• UpToDate: Diagnosis of Sickle Cell Disease.`,
  },
  {
    id: "dr-q-275",
    examArea: "Hematología / Complicaciones agudas de la drepanocitosis",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "drepanocitosis", "crisis_vasooclusiva", "manejo"],
    statement: "Varón de 24 años con drepanocitosis consulta por dolor intenso en ambos fémures y región lumbar de 12 horas de evolución. Refiere que el episodio inició tras un cuadro de gastroenteritis con pobre ingesta de líquidos. Al examen físico presenta FC 110 lpm, TA 120/70 mmHg, temperatura 37°C y saturación de oxígeno de 96% al ambiente. Laboratorios: Hb 8 g/dL (similar a su basal), reticulocitos 10%, bilirrubina indirecta elevada y LDH aumentada. ¿Cuál es la conducta inicial más apropiada?",
    options: [
      { id: "A", label: "A", text: "Transfusión inmediata de glóbulos rojos." },
      { id: "B", label: "B", text: "Hidratación intravenosa, analgesia adecuada y oxígeno solo si existe hipoxemia." },
      { id: "C", label: "C", text: "Plasmaféresis urgente." },
      { id: "D", label: "D", text: "Corticoides sistémicos a dosis altas." },
    ],
    correctOptionId: "B",
    explanation: "La crisis vasooclusiva es la complicación aguda más frecuente de la drepanocitosis. El tratamiento inicial se basa en control adecuado del dolor, hidratación y corrección de factores precipitantes.",
    keyPoints: [
      "Cuando veas: dolor óseo intenso + antecedente de drepanocitosis + deshidratación o infección reciente.",
      "Debes pensar en: crisis vasooclusiva.",
      "Tema: Complicaciones agudas de la drepanocitosis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica porque evalúa la complicación aguda más frecuente de la drepanocitosis.

La clave no es la hemoglobina.
La clave es:
El dolor óseo agudo.

¿Qué está ocurriendo realmente?
La drepanocitosis produce eritrocitos con tendencia a deformarse en situaciones como:
• Deshidratación.
• Infección.
• Hipoxia.
• Acidosis.
Estos eritrocitos alteran el flujo sanguíneo microvascular y generan:
Oclusión vascular.
Como consecuencia aparece:
Isquemia tisular y dolor.

¿Cómo reconocer una crisis vasooclusiva?
Los hallazgos típicos son:
• Dolor intenso óseo.
• Dolor lumbar.
• Dolor en extremidades.
• Ausencia de otra explicación evidente.
En este caso además existe un desencadenante clásico:
Gastroenteritis con disminución de la ingesta hídrica.

¿Cuál es el tratamiento inicial?
Tres pilares fundamentales:
Analgesia
Debe ser precoz y suficiente.
El manejo inadecuado del dolor es una de las causas más frecuentes de complicaciones.
Hidratación
Ayuda a disminuir la viscosidad sanguínea y corregir uno de los desencadenantes principales.
Oxígeno
Solo si existe:
Hipoxemia documentada.
No debe administrarse rutinariamente a pacientes normoxémicos.

¿Cuándo transfundir?
La transfusión no forma parte del manejo rutinario de toda crisis dolorosa.
Se reserva para situaciones específicas como:
• Síndrome torácico agudo.
• Accidente cerebrovascular.
• Anemia severa sintomática.
• Secuestro esplénico grave.
En este caso:
La hemoglobina es similar a su valor basal.
Por tanto no existe indicación inmediata de transfusión.

¿Por qué no corticoides?
No forman parte del manejo estándar de la crisis vasooclusiva no complicada.

¿Cuál es la trampa de examen?
Muchos estudiantes asocian:
Anemia grave = transfusión.
Pero en drepanocitosis lo importante es comparar:
La hemoglobina actual con la basal.
Si el valor es similar al habitual del paciente:
La prioridad es controlar la crisis vasooclusiva.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer la crisis vasooclusiva.
2. Analgesia temprana y adecuada.
3. Hidratación.
4. Buscar desencadenantes.
5. Administrar oxígeno solo si existe hipoxemia.
6. Reservar transfusión para indicaciones específicas.

Perlas de examen
✅ La crisis vasooclusiva es la complicación aguda más frecuente de la drepanocitosis.
✅ La deshidratación es un desencadenante clásico.
✅ El tratamiento inicial es analgesia + hidratación.
✅ El oxígeno se administra únicamente si hay hipoxemia.
✅ No toda crisis dolorosa requiere transfusión.
✅ La hemoglobina debe compararse con el valor basal del paciente.
✅ Siempre deben buscarse factores precipitantes asociados.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• ASH Guidelines for Sickle Cell Disease.
• UpToDate: Management of Acute Painful Episodes in Sickle Cell Disease.`,
  }
];
