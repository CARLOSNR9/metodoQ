import type { TrainingQuestion } from "@/lib/questions/types";

export const MIR_2026_111_120_QUESTIONS: TrainingQuestion[] = [
  {
    id: "mir-2026-111",
    university: "MIR (España)",
    examArea: "GINECOLOGÍA",
    topic: "DIAGNÓSTICO DEL SÍNDROME DE OVARIO POLIQUÍSTICO",
    difficulty: "medium",
    tags: ["mir", "espana", "ginecologia"],
    statement:
      "Una mujer de 24 años consulta por reglas cada 45-60 días desde la menarquia, acné e hirsutismo moderado. La testosterona total está ligeramente elevada. La TSH y la prolactina son normales y la 17-hidroxiprogesterona basal es normal. ¿Cuál es la afirmación correcta?",
    options: [
      { id: "A", label: "A", text: "No puede diagnosticarse un síndrome de ovario poliquístico sin demostrar ovarios poliquísticos en la ecografía." },
      { id: "B", label: "B", text: "Cumple criterios de síndrome de ovario poliquístico (oligoanovulación e hiperandrogenismo), una vez excluidas otras causas." },
      { id: "C", label: "C", text: "El diagnóstico exige demostrar resistencia a la insulina mediante una sobrecarga oral de glucosa." },
      { id: "D", label: "D", text: "El cuadro es diagnóstico de hiperplasia suprarrenal congénita no clásica." },
    ],
    correctOptionId: "B",
    explanation:
      "Según los **criterios de Rotterdam**, el **síndrome de ovario poliquístico (SOP)** se diagnostica con **2 de 3**: **oligo/anovulación**, **hiperandrogenismo clínico o bioquímico** y **morfología de ovario poliquístico** en la ecografía, **tras excluir** otras causas (disfunción tiroidea, hiperprolactinemia, hiperplasia suprarrenal congénita no clásica, tumores productores de andrógenos). Esta paciente tiene los dos primeros y las pruebas de exclusión son normales.\n\n**TRAMPA DEL EXAMEN:** La ecografía **no es imprescindible** si se cumplen los otros dos criterios. La **resistencia a la insulina** es frecuente en el SOP y conviene cribar alteraciones metabólicas, pero **no es criterio diagnóstico**. Una 17-hidroxiprogesterona normal hace improbable la hiperplasia suprarrenal no clásica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el SOP es un diagnóstico de exclusión con criterios muy concretos: dos de tres. Reglas irregulares más signos de exceso de andrógenos ya bastan, siempre que haya descartado tiroides, prolactina y la suprarrenal. Luego no olvide el lado metabólico: peso, glucemia y lípidos, porque estas pacientes tienen más riesgo de diabetes tipo 2.",
    keyPoints: [
      "SOP (Rotterdam): 2 de 3 — oligoanovulación, hiperandrogenismo, ovarios poliquísticos en ecografía.",
      "Es un diagnóstico de exclusión: descartar tiroides, hiperprolactinemia, HSC no clásica y tumores androgénicos.",
      "La resistencia a la insulina es frecuente, pero no es criterio diagnóstico.",
    ],
  },
  {
    id: "mir-2026-112",
    university: "MIR (España)",
    examArea: "GINECOLOGÍA",
    topic: "CRIBADO DE CÁNCER DE CÉRVIX EN ESPAÑA",
    difficulty: "easy",
    tags: ["mir", "espana", "ginecologia"],
    statement:
      "Una mujer de 40 años, sin antecedentes de interés, acude a su centro de salud para el cribado de cáncer de cuello uterino. Según el programa de cribado poblacional vigente en España, ¿qué prueba y con qué periodicidad está indicada?",
    options: [
      { id: "A", label: "A", text: "Determinación del virus del papiloma humano de alto riesgo cada 5 años." },
      { id: "B", label: "B", text: "Citología cervical anual." },
      { id: "C", label: "C", text: "Colposcopia cada 3 años." },
      { id: "D", label: "D", text: "Citología cada 3 años hasta los 65 años, sin determinación de VPH." },
    ],
    correctOptionId: "A",
    explanation:
      "En el cribado poblacional de cáncer de cérvix en España, entre los **25 y los 34 años** se realiza **citología cada 3 años**, y entre los **35 y los 65 años** la prueba primaria es la **determinación de VPH de alto riesgo cada 5 años**. Si el VPH es positivo, se realiza citología de triaje para decidir el seguimiento o la derivación a colposcopia.\n\n**TRAMPA DEL EXAMEN:** La **citología anual** no está indicada: aumenta los falsos positivos y los procedimientos innecesarios sin beneficio adicional. La **colposcopia** no es una prueba de cribado, sino de diagnóstico ante un cribado alterado.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., quédese con la edad bisagra de los 35. Antes, citología cada 3 años, porque en mujeres jóvenes las infecciones por VPH son muy frecuentes y transitorias y la prueba de VPH daría demasiados positivos sin importancia. A partir de los 35, el test de VPH es más sensible y su valor predictivo negativo permite espaciar el cribado a 5 años.",
    keyPoints: [
      "Cribado de cérvix en España: 25-34 años, citología cada 3 años.",
      "35-65 años: test de VPH de alto riesgo cada 5 años (citología como triaje si es positivo).",
      "La colposcopia es diagnóstica, no de cribado.",
    ],
  },
  {
    id: "mir-2026-113",
    university: "MIR (España)",
    examArea: "GINECOLOGÍA",
    topic: "ENDOMETRIOSIS: CLÍNICA Y TRATAMIENTO INICIAL",
    difficulty: "medium",
    tags: ["mir", "espana", "ginecologia"],
    statement:
      "Una mujer de 29 años, sin deseo gestacional actual, presenta dismenorrea progresiva desde hace años, dispareunia profunda y dolor pélvico cíclico. La exploración revela nódulos dolorosos en los ligamentos uterosacros y la ecografía muestra un quiste ovárico de 3 cm con contenido en «vidrio esmerilado». ¿Cuál es el tratamiento inicial más adecuado?",
    options: [
      { id: "A", label: "A", text: "Histerectomía con doble anexectomía." },
      { id: "B", label: "B", text: "Laparoscopia urgente para extirpar el quiste." },
      { id: "C", label: "C", text: "Tratamiento hormonal (progestágenos o anticonceptivos combinados) junto con antiinflamatorios para el dolor." },
      { id: "D", label: "D", text: "Observación sin tratamiento hasta que desee gestación." },
    ],
    correctOptionId: "C",
    explanation:
      "El cuadro es típico de **endometriosis** (dismenorrea progresiva, dispareunia profunda, nódulos en uterosacros) con un **endometrioma** («quiste de chocolate», ecografía en vidrio esmerilado). En una mujer joven sin deseo gestacional y con un endometrioma pequeño, el tratamiento inicial es **médico**: **AINE** para el dolor y **tratamiento hormonal** (progestágenos como el dienogest o anticonceptivos combinados, preferiblemente en pauta continua).\n\n**TRAMPA DEL EXAMEN:** La cirugía radical no está indicada en una mujer joven. La cirugía del endometrioma se reserva para quistes grandes, dudas diagnósticas, fracaso del tratamiento médico o infertilidad seleccionada, y puede reducir la reserva ovárica. No tratar deja a la paciente con dolor y permite la progresión.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la endometriosis es una enfermedad crónica dependiente de estrógenos: el objetivo es controlar el dolor y frenar la enfermedad, no «curarla» con un bisturí en la primera consulta. Empiece con antiinflamatorios y hormonas, y reserve la cirugía para cuando esté realmente indicada, cuidando siempre la fertilidad futura.",
    keyPoints: [
      "Endometriosis: dismenorrea progresiva, dispareunia profunda, dolor pélvico crónico e infertilidad.",
      "Endometrioma: quiste ovárico con contenido en «vidrio esmerilado» en la ecografía.",
      "Tratamiento inicial: AINE + hormonal (progestágenos o anticonceptivos combinados); cirugía en casos seleccionados.",
    ],
  },
  {
    id: "mir-2026-114",
    university: "MIR (España)",
    examArea: "GINECOLOGÍA",
    topic: "SANGRADO POSMENOPÁUSICO",
    difficulty: "medium",
    tags: ["mir", "espana", "ginecologia"],
    statement:
      "Una mujer de 62 años, con menopausia a los 51 y sin tratamiento hormonal, consulta por un episodio de sangrado vaginal. Es obesa y diabética. ¿Cuál es la primera exploración complementaria que debe realizarse?",
    options: [
      { id: "A", label: "A", text: "Resonancia magnética pélvica." },
      { id: "B", label: "B", text: "Determinación de CA-125." },
      { id: "C", label: "C", text: "Legrado uterino fraccionado bajo anestesia general." },
      { id: "D", label: "D", text: "Ecografía transvaginal para medir el grosor endometrial." },
    ],
    correctOptionId: "D",
    explanation:
      "Todo **sangrado posmenopáusico** obliga a **descartar un cáncer de endometrio**, especialmente con factores de riesgo como la **obesidad** y la **diabetes**. La primera prueba es la **ecografía transvaginal**: un **endometrio ≤ 4 mm** tiene un valor predictivo negativo muy alto; si es **> 4 mm** (o persiste el sangrado), se obtiene **biopsia endometrial**, idealmente por **histeroscopia** o con cánula de aspiración en consulta.\n\n**TRAMPA DEL EXAMEN:** El CA-125 no sirve para el diagnóstico del cáncer de endometrio. La resonancia se usa para la estadificación una vez diagnosticado. El legrado a ciegas ha sido desplazado por la biopsia dirigida por histeroscopia.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., sangrado después de la menopausia es cáncer de endometrio hasta que se demuestre lo contrario, aunque la causa más frecuente sea la atrofia. El primer paso es barato y rápido: ecografía transvaginal. Si el endometrio está fino, tranquilidad razonable; si está engrosado, biopsia. No se salte el orden.",
    keyPoints: [
      "Sangrado posmenopáusico: descartar cáncer de endometrio (causa más frecuente: atrofia).",
      "Primera prueba: ecografía transvaginal; endometrio > 4 mm → biopsia endometrial.",
      "Factores de riesgo de cáncer de endometrio: obesidad, diabetes, estrógenos sin oposición, nuliparidad.",
    ],
  },
  {
    id: "mir-2026-115",
    university: "MIR (España)",
    examArea: "GINECOLOGÍA",
    topic: "MIOMA SUBMUCOSO CON SANGRADO MENSTRUAL ABUNDANTE",
    difficulty: "medium",
    tags: ["mir", "espana", "ginecologia"],
    statement:
      "Una mujer de 34 años con deseo gestacional presenta reglas muy abundantes y anemia ferropénica. La ecografía muestra un mioma submucoso de 2,5 cm que protruye más del 50% en la cavidad uterina. ¿Cuál es el tratamiento de elección?",
    options: [
      { id: "A", label: "A", text: "Histerectomía total." },
      { id: "B", label: "B", text: "Miomectomía histeroscópica." },
      { id: "C", label: "C", text: "Embolización de las arterias uterinas." },
      { id: "D", label: "D", text: "Esperar a la menopausia, cuando los miomas disminuyen de tamaño." },
    ],
    correctOptionId: "B",
    explanation:
      "Los **miomas submucosos** son los que más se asocian a **sangrado menstrual abundante** e **infertilidad**, al deformar la cavidad endometrial. En una mujer con **deseo gestacional** y un mioma submucoso de este tamaño, el tratamiento de elección es la **miomectomía histeroscópica**, que conserva el útero y resuelve el sangrado. La anemia se trata con hierro.\n\n**TRAMPA DEL EXAMEN:** La **histerectomía** elimina la posibilidad de gestación. La **embolización** no se recomienda de primera elección en mujeres que desean gestar. Esperar a la menopausia deja a una mujer joven con anemia durante años.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., con los miomas la localización lo decide casi todo. Los submucosos, aunque sean pequeños, dan mucha clínica y se quitan desde dentro, por histeroscopia, sin abrir el abdomen. Los subserosos rara vez sangran y a menudo solo se vigilan. Y siempre pregunte por el deseo de embarazo antes de proponer un tratamiento.",
    keyPoints: [
      "Mioma submucoso: más asociado a sangrado abundante e infertilidad.",
      "Tratamiento de elección con deseo gestacional: miomectomía histeroscópica.",
      "La histerectomía es el tratamiento definitivo solo si no hay deseo gestacional.",
    ],
  },
  {
    id: "mir-2026-116",
    university: "MIR (España)",
    examArea: "OBSTETRICIA",
    topic: "PREECLAMPSIA CON CRITERIOS DE GRAVEDAD",
    difficulty: "hard",
    tags: ["mir", "espana", "obstetricia"],
    statement:
      "Una primigesta de 36 semanas presenta presión arterial de 165/112 mmHg en dos tomas, proteinuria, cefalea intensa y fotopsias. El registro cardiotocográfico es normal. ¿Cuál es la actitud más adecuada?",
    options: [
      { id: "A", label: "A", text: "Reposo domiciliario y control de presión arterial en 1 semana." },
      { id: "B", label: "B", text: "Tratamiento antihipertensivo oral y mantener la gestación hasta la semana 40." },
      { id: "C", label: "C", text: "Sulfato de magnesio, antihipertensivo intravenoso y finalización de la gestación tras estabilizar a la madre." },
      { id: "D", label: "D", text: "Administrar corticoides y esperar 48 horas antes de decidir." },
    ],
    correctOptionId: "C",
    explanation:
      "Se trata de una **preeclampsia con criterios de gravedad**: presión arterial **≥ 160/110 mmHg** y **síntomas neurológicos** (cefalea, fotopsias), que indican riesgo de **eclampsia**. El manejo incluye **sulfato de magnesio** para prevenir las convulsiones, **antihipertensivo** de acción rápida (labetalol o hidralazina intravenosos, o nifedipino oral) y, a partir de las **34 semanas**, **finalizar la gestación** una vez estabilizada la madre, porque el único tratamiento definitivo es el parto.\n\n**TRAMPA DEL EXAMEN:** Manejo expectante o domiciliario en una preeclampsia grave a término expone a eclampsia, desprendimiento de placenta o síndrome HELLP. Los corticoides para la maduración pulmonar se indican antes de las 34-35 semanas, no a las 36.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cefalea y fotopsias en una gestante hipertensa son una alarma neurológica. Sulfato de magnesio sí o sí, baje la presión con cuidado y, con 36 semanas, no se le ocurra alargar el embarazo: estabilice y finalice. El bebé a esa edad gestacional está preparado; la madre en riesgo es la que manda.",
    keyPoints: [
      "Preeclampsia grave: PA ≥ 160/110, síntomas neurológicos, HELLP, oliguria, edema pulmonar, etc.",
      "Sulfato de magnesio para prevenir la eclampsia + antihipertensivo rápido.",
      "Tratamiento definitivo: finalizar la gestación (a partir de 34 semanas tras estabilizar).",
    ],
  },
  {
    id: "mir-2026-117",
    university: "MIR (España)",
    examArea: "OBSTETRICIA",
    topic: "CRIBADO DE DIABETES GESTACIONAL",
    difficulty: "easy",
    tags: ["mir", "espana", "obstetricia"],
    statement:
      "Una gestante de 26 semanas sin factores de riesgo realiza el test de O'Sullivan (50 g de glucosa), con una glucemia a la hora de 152 mg/dl. Según la estrategia en dos pasos utilizada en España, ¿cuál es el siguiente paso?",
    options: [
      { id: "A", label: "A", text: "Realizar una sobrecarga oral con 100 g de glucosa." },
      { id: "B", label: "B", text: "Diagnosticar diabetes gestacional e iniciar insulina." },
      { id: "C", label: "C", text: "Repetir el test de O'Sullivan en 4 semanas." },
      { id: "D", label: "D", text: "No hacer nada, porque el resultado es normal." },
    ],
    correctOptionId: "A",
    explanation:
      "En la estrategia en dos pasos, el **test de O'Sullivan** (50 g, glucemia a la hora) se realiza en el **segundo trimestre (24-28 semanas)** a todas las gestantes, y en el primer trimestre a las que tienen factores de riesgo. Un resultado **≥ 140 mg/dl** es **positivo** y obliga a confirmar con la **sobrecarga oral de 100 g de glucosa** (3 horas). La diabetes gestacional se diagnostica si **dos o más valores** están alterados.\n\n**TRAMPA DEL EXAMEN:** El O'Sullivan es una prueba de **cribado**, no diagnóstica: un positivo no permite diagnosticar diabetes gestacional ni iniciar tratamiento. Además, el tratamiento inicial de la diabetes gestacional es la dieta y el ejercicio; la insulina se añade si no se alcanzan los objetivos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., O'Sullivan cribado, 100 gramos diagnóstico. El corte del O'Sullivan es 140 mg/dl. Si confirma el diagnóstico, empiece por dieta y ejercicio y controle glucemias; la insulina llega solo si no basta.",
    keyPoints: [
      "Cribado de diabetes gestacional: O'Sullivan (50 g) a las 24-28 semanas; positivo si ≥ 140 mg/dl.",
      "Confirmación: sobrecarga oral de 100 g; diagnóstico con ≥ 2 valores alterados.",
      "Tratamiento inicial: dieta y ejercicio; insulina si no se alcanzan los objetivos.",
    ],
  },
  {
    id: "mir-2026-118",
    university: "MIR (España)",
    examArea: "OBSTETRICIA",
    topic: "PLACENTA PREVIA",
    difficulty: "medium",
    tags: ["mir", "espana", "obstetricia"],
    statement:
      "Una gestante de 32 semanas, con dos cesáreas previas, acude por sangrado vaginal de sangre roja brillante, indoloro, de inicio súbito. El útero está relajado y el registro fetal es normal. ¿Qué exploración debe evitarse hasta conocer la localización placentaria?",
    options: [
      { id: "A", label: "A", text: "La ecografía abdominal." },
      { id: "B", label: "B", text: "La monitorización fetal." },
      { id: "C", label: "C", text: "La toma de constantes maternas." },
      { id: "D", label: "D", text: "El tacto vaginal." },
    ],
    correctOptionId: "D",
    explanation:
      "Un **sangrado rojo brillante, indoloro, con útero relajado** en el tercer trimestre sugiere **placenta previa**. Las **cesáreas previas** son un factor de riesgo (y también de acretismo placentario). Hasta localizar la placenta por **ecografía** está **contraindicado el tacto vaginal**, que puede desencadenar una hemorragia masiva. La ecografía transvaginal realizada con cuidado es segura y la más precisa.\n\n**TRAMPA DEL EXAMEN:** Confundir con el **desprendimiento prematuro de placenta**, que cursa con **dolor**, **hipertonía uterina** y sangre oscura, a menudo con afectación fetal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., regla de oro de guardia: gestante que sangra en el tercer trimestre, las manos quietas hasta que la ecografía le diga dónde está la placenta. Si es previa, un tacto puede convertir un sangrado manejable en una emergencia. Y ante cesáreas previas con placenta previa, piense en acretismo.",
    keyPoints: [
      "Placenta previa: sangrado rojo, indoloro, útero relajado en el 3.er trimestre.",
      "Tacto vaginal contraindicado hasta localizar la placenta por ecografía.",
      "Desprendimiento de placenta: dolor, hipertonía y sangre oscura; cesáreas previas → riesgo de acretismo.",
    ],
  },
  {
    id: "mir-2026-119",
    university: "MIR (España)",
    examArea: "OBSTETRICIA",
    topic: "PROFILAXIS DE LA ISOINMUNIZACIÓN RH",
    difficulty: "easy",
    tags: ["mir", "espana", "obstetricia"],
    statement:
      "Una gestante Rh negativo, con test de Coombs indirecto negativo y pareja Rh positivo, está en la semana 28 de una gestación sin incidencias. ¿Cuál es la actitud correcta para prevenir la isoinmunización?",
    options: [
      { id: "A", label: "A", text: "No administrar nada hasta el parto y valorar entonces." },
      { id: "B", label: "B", text: "Administrar inmunoglobulina anti-D en la semana 28 y de nuevo en las 72 horas tras el parto si el recién nacido es Rh positivo." },
      { id: "C", label: "C", text: "Administrar inmunoglobulina anti-D solo si el test de Coombs indirecto se positiviza." },
      { id: "D", label: "D", text: "Realizar una transfusión intrauterina profiláctica." },
    ],
    correctOptionId: "B",
    explanation:
      "La **profilaxis anti-D** en gestantes **Rh negativo no sensibilizadas** (Coombs indirecto negativo) incluye una dosis de **inmunoglobulina anti-D en la semana 28** y otra en las **72 horas posteriores al parto** si el recién nacido es **Rh positivo**. También se administra tras cualquier evento de riesgo de hemorragia fetomaterna: aborto, embarazo ectópico, amniocentesis, traumatismo abdominal o sangrado.\n\n**TRAMPA DEL EXAMEN:** Si el Coombs indirecto ya es positivo por anticuerpos anti-D, la madre **está sensibilizada** y la profilaxis **no sirve**: se debe vigilar la anemia fetal. La transfusión intrauterina es un tratamiento de la anemia fetal grave, no una profilaxis.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la anti-D funciona porque elimina los hematíes fetales antes de que la madre fabrique sus propios anticuerpos. Por eso solo sirve si la madre aún no está sensibilizada. Semana 28 y posparto, más cualquier situación de sangrado: así de sencillo y así de eficaz.",
    keyPoints: [
      "Gestante Rh negativo no sensibilizada: anti-D en la semana 28 y en las 72 h posparto si RN Rh positivo.",
      "Anti-D también tras aborto, ectópico, amniocentesis, traumatismo o sangrado.",
      "Si ya está sensibilizada (Coombs indirecto positivo), la profilaxis no sirve: vigilar anemia fetal.",
    ],
  },
  {
    id: "mir-2026-120",
    university: "MIR (España)",
    examArea: "OBSTETRICIA",
    topic: "HEMORRAGIA POSPARTO POR ATONÍA UTERINA",
    difficulty: "medium",
    tags: ["mir", "espana", "obstetricia"],
    statement:
      "Tras un parto vaginal de un recién nacido de 4.200 g, con placenta completa, la puérpera presenta sangrado abundante. A la palpación, el útero está blando y por encima del ombligo. ¿Cuál es la primera medida terapéutica?",
    options: [
      { id: "A", label: "A", text: "Histerectomía urgente." },
      { id: "B", label: "B", text: "Legrado uterino inmediato." },
      { id: "C", label: "C", text: "Masaje uterino bimanual y administración de oxitocina." },
      { id: "D", label: "D", text: "Embolización de las arterias uterinas." },
    ],
    correctOptionId: "C",
    explanation:
      "La causa más frecuente de **hemorragia posparto** es la **atonía uterina** (útero blando, subinvolucionado), favorecida por la **sobredistensión uterina** (macrosomía, gestación múltiple, polihidramnios). La primera medida es el **masaje uterino** y los **uterotónicos**, empezando por la **oxitocina** (seguida si es necesario de metilergometrina, carboprost o misoprostol), junto con reanimación y ácido tranexámico.\n\n**TRAMPA DEL EXAMEN:** La **placenta completa** hace menos probable la retención de restos, por lo que el legrado no es la primera medida. La embolización y la histerectomía se reservan para cuando fracasan las medidas médicas y conservadoras.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., recuerde las cuatro «T» de la hemorragia posparto: Tono, Trauma, Tejido y Trombina. El tono es la causa número uno. Útero blando: masaje y oxitocina de inmediato, mientras canaliza vías y avisa al equipo. Se escala paso a paso; la cirugía es el último escalón.",
    keyPoints: [
      "Causa más frecuente de hemorragia posparto: atonía uterina (las 4 T: Tono, Trauma, Tejido, Trombina).",
      "Primera medida: masaje uterino + oxitocina; después otros uterotónicos y ácido tranexámico.",
      "Embolización o histerectomía solo si fracasan las medidas médicas.",
    ],
  },
];
