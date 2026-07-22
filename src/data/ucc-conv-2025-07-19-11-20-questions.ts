import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #3 (19 jul 2025) Â· Preguntas #11”“#20.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_11_20_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-11",
    university: "UCC",
    examArea: "Medicina Interna / Reumatología / Hematología",
    topic: "Reumatología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "reumatologia", "hematologia"],
    statement: "Mujer de 34 años con diagnóstico previo de Síndrome Antifosfolípido (SAF) primario en manejo crónico con Warfarina. Acude a urgencias por disnea progresiva, oliguria y aparición de múltiples lesiones cutáneas retiformes y necróticas en miembros inferiores. Al examen físico: PA 150/95 mmHg, FC 110 lpm, SatO2 86% al aire ambiente. Paraclínicos: Creatinina 3.5 mg/dL (basal 0.9), Plaquetas 35.000/mmÂ³, Esquizocitos en frotis de sangre periférica (3%). La radiografía de tórax evidencia infiltrados alveolares difusos bilaterales (Síndrome de Dificultad Respiratoria Aguda). El INR de ingreso es de 1.2 (subterapéutico por mala adherencia). ¿Cuál es la estrategia terapéutica combinada de PRIMERA LÍNEA para revertir este cuadro agudo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender la anticoagulación debido a la trombocitopenia e iniciar terapia biológica con Rituximab y Ciclofosfamida de forma inmediata.",
        distractorProfile: "fear_of_thrombocytopenia_trap",
        incorrectFeedback: "Suspender la anticoagulación en el CAPS es letal; la trombocitopenia es consuntiva (trombótica) y frenar la cascada de coagulación es el primer pilar para detener el daño microvascular."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar triple terapia obligatoria con Anticoagulación plena (Heparina IV), Glucocorticoides a altas dosis (pulsos) y Recambio Plasmático Terapéutico (Plasmaféresis) y/o Inmunoglobulina IV."
      },
      {
        id: "C",
        label: "C",
        text: "Transfundir 6 unidades de plaquetas para disminuir el riesgo de hemorragia alveolar e iniciar manejo con un Anticoagulante Oral Directo (DOAC).",
        distractorProfile: "deadly_transfusion_trigger",
        incorrectFeedback: "Transfundir plaquetas exacerba la microtrombosis diseminada y los DOACs están contraindicados por inferioridad demostrada en síndromes antifosfolípidos trombóticos."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar fibrinolíticos sistémicos (Alteplase) por sospecha de TEP masivo y realizar hemodiálisis de urgencia.",
        distractorProfile: "wrong_thromboembolic_management",
        incorrectFeedback: "El problema del CAPS es la microtrombosis difusa (microangiopatía), no un macro-trombo único; los fibrinolíticos elevan el riesgo de sangrado cerebral sin resolver la cascada inmunológica subyacente."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con un Síndrome Antifosfolípido Catastrófico (CAPS), la variante más letal del SAF (mortalidad >50%). Se define por el desarrollo de trombosis en tres o más órganos, sistemas o tejidos en menos de una semana (en este caso: pulmón, riñón y piel), con confirmación de microangiopatía trombótica (esquizocitos/trombocitopenia). El desencadenante clásico es la suspensión de la anticoagulación o una infección. Las guías internacionales (Task Force for CAPS) establecen que la supervivencia exige una \"terapia triple\" agresiva e inmediata: Anticoagulación (para frenar la trombosis en cascada), Corticosteroides a dosis de pulso (para frenar el SIRS/tormenta de citoquinas) y Plasmaféresis y/o IGIV (para remover/neutralizar los anticuerpos antifosfolípidos circulantes y citoquinas).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, en el CAPS la sangre del paciente se coagula en la microcirculación de todo el cuerpo simultáneamente. Si te dejas asustar por las plaquetas bajas (35.000) y le quitas la anticoagulación (Opción A), la paciente morirá infartada. La trombocitopenia es por *consumo* trombótico, no por sangrado. Transfundir plaquetas (Opción C) es gasolina para el fuego (más sustrato para hacer trombos). La anticoagulación debe ser parenteral (Heparina) y nunca con DOACs, que son inferiores a la warfarina/heparinas en SAF de alto riesgo.",
    keyPoints: [
      "Paciente con SAF conocido (o joven con trombosis atípicas).",
      "Falla multiorgánica rápida (< 1 semana) involucrando 3 o más órganos (clásico: riñón, pulmón, piel/SNC).",
      "Microangiopatía trombótica activa (trombocitopenia + esquizocitos).",
      "SAF Catastrófico (CAPS). El manejo es siempre combinado: Anticoagulación + Corticoides + Plasmaféresis/IGIV.",
      "Tema: Síndrome Antifosfolípido Catastrófico."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-12",
    university: "UCC",
    examArea: "Pediatría / Urgencias / Endocrinología",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "urgencias", "endocrinologia"],
    statement: "Un escolar de 8 años con diabetes tipo 1 de reciente diagnóstico ingresó hace 6 horas por Cetoacidosis Diabética (CAD) severa (pH 7.05, Glucosa 550 mg/dL). Ha recibido reanimación con bolos de solución salina e infusión continua de insulina (0.1 U/kg/h). Durante la última hora de monitorización, la enfermera reporta que el niño, quien previamente estaba conversando, se ha tornado irritable, somnoliento y quejándose de cefalea global intensa. Signos vitales actuales: PA 145/95 mmHg (elevada para su edad), FC 55 lpm (bradicardia), FR 14 rpm. Pupilas isocóricas pero de respuesta perezosa. ¿Cuál es la conducta INMEDIATA de rescate neurológico MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Detener la infusión de insulina, trasladar a TAC de cráneo urgente y esperar confirmación imagenológica antes de administrar fármacos.",
        distractorProfile: "deadly_imaging_delay",
        incorrectFeedback: "En el edema cerebral post-CAD, la descompresión osmolar es una emergencia vital; posponerla para realizar un TAC garantiza el enclavamiento cerebral y la muerte encefálica."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar hiperventilación mecánica profiláctica intubando al paciente con meta de PaCO2 < 25 mmHg.",
        distractorProfile: "outdated_and_dangerous_neuromanagement",
        incorrectFeedback: "La hiperventilación profiláctica intensa (PaCO2 < 25) causa una vasoconstricción cerebral extrema, provocando isquemia tisular global; solo se usa transitoriamente como puente a la cirugía descompresiva en herniaciones extremas."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar inmediatamente Manitol al 20% intravenoso (0.5 a 1 g/kg) o Solución Salina Hipertónica al 3%, elevando la cabecera a 30 grados."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar un bolo rápido de Dextrosa al 10% y Bicarbonato de Sodio intravenoso para corregir la acidosis intracelular.",
        distractorProfile: "pathophysiological_exacerbator",
        incorrectFeedback: "El bicarbonato de sodio genera CO2 intracelular que cruza libremente la barrera hematoencefálica, empeorando la acidosis del LCR e incrementando drásticamente el edema del cerebro."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con un Edema Cerebral clínico, la principal causa de mortalidad pediátrica en la CAD (usualmente ocurre entre las 4 y 12 horas del inicio del tratamiento). Los signos clásicos de herniación inminente incluyen la Tríada de Cushing (hipertensión, bradicardia, alteración respiratoria) asociada a deterioro súbito del sensorio y cefalea. Las guías de ISPAD (International Society for Pediatric and Adolescent Diabetes) establecen categóricamente que el tratamiento hiperosmolar (Manitol o Solución Salina al 3%) debe iniciarse DE INMEDIATO ante la sola sospecha clínica, a la cabecera del paciente. Retrasar el manejo para confirmar el edema mediante una Tomografía Computarizada de cráneo acarrea un altísimo riesgo de enclavamiento amigdalino irreversible y muerte.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** En la CAD pediátrica, el cerebro es una bomba de tiempo osmolar. El TAC de cráneo (Opción A) es el asesino silencioso en esta pregunta: el niño se te hernia y hace paro respiratorio en el pasillo de radiología. Actúa como intensivista: si el niño se duerme y hace bradicardia con hipertensión, pones el manitol y luego haces las preguntas. El uso de bicarbonato de sodio en la CAD (Opción D) está casi proscrito porque paradójicamente cruza la barrera hematoencefálica como CO2, empeorando la acidosis del LCR e induciendo aún más edema cerebral.",
    keyPoints: [
      "Niño en tratamiento de CAD (4-12 hrs post-inicio).",
      "Aparición de cefalea severa, alteración de conciencia o Tríada de Cushing (Bradicardia + Hipertensión).",
      "Edema Cerebral agudo; el tratamiento hiperosmolar (Manitol/SS Hipertónica) es CLÍNICO y se inicia en el momento, sin esperar ninguna neuroimagen.",
      "Tema: Cetoacidosis Diabética Pediátrica / Edema Cerebral."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-13",
    university: "UCC",
    examArea: "Medicina Interna / Nefrología / Endocrinología",
    topic: "Nefrología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "nefrologia", "endocrinologia"],
    statement: "Hombre de 62 años con diabetes mellitus tipo 2 de 15 años de evolución, hipertensión arterial y enfermedad renal crónica estadio 3a. Acude a consulta rutinaria asintomático. Sus medicamentos incluyen Losartán, Amlodipino y Metformina. Examen físico: PA 135/82 mmHg, hidratado, sin edemas. Paraclínicos de control revelan: Sodio 138 mEq/L, Potasio 5.8 mEq/L (Hiperkalemia), Cloro 108 mEq/L, Creatinina 1.6 mg/dL. Los gases venosos muestran: pH 7.31, HCO3 17 mEq/L, Anión Gap de 10 mEq/L (normal). El nivel de glucemia es de 145 mg/dL. Un parcial de orina muestra pH urinario de 5.5, sin cetonas. ¿Cuál es el trastorno ácido-base subyacente MÁS probable en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cetoacidosis diabética silenciosa.",
        distractorProfile: "wrong_anion_gap",
        incorrectFeedback: "La cetoacidosis diabética es una acidosis por ácidos endógenos que invariablemente ensancha la brecha aniónica (Anión Gap alto >12) y cursa con cetonas urinarias fuertemente positivas."
      },
      {
        id: "B",
        label: "B",
        text: "Acidosis Tubular Renal Tipo 1 (Distal).",
        distractorProfile: "wrong_potassium_direction",
        incorrectFeedback: "La Acidosis Tubular Renal Tipo 1 (falla en secretar H+ distales) se caracteriza característicamente por HIPOkalemia severa y un pH urinario paradójicamente alcalino (>5.5)."
      },
      {
        id: "C",
        label: "C",
        text: "Acidosis Tubular Renal Tipo 4 (Hipoaldosteronismo Hiporeninémico)."
      },
      {
        id: "D",
        label: "D",
        text: "Acidosis Tubular Renal Tipo 2 (Proximal).",
        distractorProfile: "wrong_potassium_profile",
        incorrectFeedback: "La Acidosis Tubular Renal Tipo 2 (falla en reabsorber bicarbonato proximal) también cursa con HIPOkalemia y se asocia a menudo con Síndrome de Fanconi (glucosuria, fosfaturia, aminoaciduria)."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta una acidosis metabólica de brecha aniónica (Anión Gap) NORMAL (hiperclorémica) asociada a **hiperkalemia** persistente en el contexto de nefropatía diabética. Este es el perfil bioquímico clásico de la Acidosis Tubular Renal (ATR) Tipo 4. Se produce por un hipoaldosteronismo hiporeninémico (típico de la diabetes por daño en el aparato yuxtaglomerular) o por resistencia a la aldosterona. La falta de aldosterona impide la secreción de potasio y de hidrogeniones en el túbulo distal, generando retención de potasio (hiperkalemia) y acidosis. El pH urinario suele ser < 5.5 porque el riñón aún puede acidificar la orina mínimamente (a diferencia de la ATR tipo 1).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** No le tengas miedo a las Acidosis Tubulares Renales, Colega, la clave es el Potasio. La ATR Tipo 1 (Distal) y la ATR Tipo 2 (Proximal) cursan casi siempre con HIPOkalemia (Potasio bajo). Si el paciente tiene el potasio alto (5.8 mEq/L) y una acidosis hiperclorémica, el problema es el eje aldosterona. Al ser diabético y tomar un ARA-II (Losartán), su eje está doblemente bloqueado, configurando la clásica ATR tipo 4.",
    keyPoints: [
      "Diabético con Enfermedad Renal Crónica leve-moderada.",
      "Acidosis metabólica de Anión Gap NORMAL + HIPERKALEMIA.",
      "pH urinario habitualmente ácido (< 5.5).",
      "Acidosis Tubular Renal Tipo 4. Es la única ATR que cursa característicamente con Potasio ALTO.",
      "Tema: Trastornos Ácido-Base / Acidosis Tubular Renal."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-14",
    university: "UCC",
    examArea: "Pediatría / Cardiología / Urgencias",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "cardiologia", "urgencias"],
    statement: "Lactante femenina de 3 meses es traída a urgencias por pobre succión, irritabilidad y palidez desde hace 3 horas. Al examen físico: FC de 250 lpm, FR 45 rpm, PA 85/55 mmHg. Pulsos periféricos presentes y llenado capilar de 2 segundos. Se conecta al monitor cardíaco, el cual revela una taquicardia regular de complejo QRS estrecho, sin ondas P claramente visibles antes de los complejos. Tras documentar estabilidad hemodinámica relativa, se intenta estimulación vagal mediante la aplicación de una bolsa de hielo en el rostro de la lactante por 15 segundos, sin lograr reversión al ritmo sinusal. ¿Cuál es la intervención farmacológica de elección MÁS apropiada como siguiente paso?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Amiodarona en infusión continua durante 20 minutos.",
        distractorProfile: "secondary_slow_antiarrhythmic",
        incorrectFeedback: "La amiodarona es un antiarrítmico de segunda línea, requiere una infusión lenta y no es el tratamiento de rescate rápido de elección para terminar un circuito de reentrada nodal estable."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Adenosina intravenosa en bolo rápido por una vía periférica proximal, seguida inmediatamente de un bolo de solución salina (técnica de doble jeringa)."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Verapamilo intravenoso lento bajo monitorización estricta.",
        distractorProfile: "absolute_lethal_contraindication_in_infants",
        incorrectFeedback: "El verapamilo causa un colapso cardiovascular profundo e irreversible en menores de 1 año debido a la dependencia miocárdica inmadura del calcio transmembrana; está proscrito en este grupo etario."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar cardioversión eléctrica sincronizada a 0.5 - 1 Joules/kg previa sedación superficial.",
        distractorProfile: "electrical_escalation_in_stable_patient",
        incorrectFeedback: "La cardioversión eléctrica sincronizada es el primer paso mandatorio ÚNICAMENTE si el paciente presenta signos claros de inestabilidad hemodinámica (choque, hipotensión profunda, alteración mental)."
      }
    ],
    correctOptionId: "B",
    explanation: "La lactante presenta una Taquicardia Supraventricular (TSV) paroxística, identificada por frecuencia >220 lpm en lactantes, QRS estrecho y ausencia de ondas P. Dado que la paciente se encuentra hemodinámicamente ESTABLE (PA normal, llenado capilar conservado), las guías de reanimación pediátrica (PALS/AHA) indican maniobras vagales como primera línea (hielo en el rostro en lactantes). Si estas fallan, el fármaco de elección absoluto es la Adenosina. La adenosina tiene una vida media ultracorta (<10 segundos), por lo que DEBE administrarse como un bolo rápido (push) por una vía venosa lo más proximal posible al corazón, seguido inmediatamente de un bolo rápido de solución salina normal usando una llave de tres vías para empujar la medicación antes de que sea metabolizada por los eritrocitos.",
    keyPoints: [
      "Lactante con FC > 220 lpm o niño con FC > 180 lpm con QRS estrecho.",
      "Paciente hemodinámicamente estable tras fallo de maniobras vagales.",
      "Adenosina intravenosa rápida con técnica de doble jeringa. Cardioversión eléctrica solo si hay inestabilidad.",
      "Tema: Taquicardia Supraventricular Pediátrica."
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica porque evalúa el manejo escalonado de la TSV en pediatría y el peligro de los calcioantagonistas.

La clave no es saltar directamente al choque eléctrico.
La clave es:
Adenosina en bolo rápido como primera línea farmacológica tras fallo de maniobras vagales en paciente estable.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Lactante de 3 meses con pobre succión, irritabilidad y palidez.
• FC de 250 lpm, QRS estrecho, sin ondas P.
• Paciente hemodinámicamente estable (PA y llenado capilar adecuados).
• Fallo de maniobras vagales (hielo en el rostro).

¿Por qué la opción B es la respuesta correcta?
La adenosina intravenosa en bolo rápido (técnica de doble jeringa) es el fármaco de elección indiscutible para la TSV estable en pediatría que no revierte con maniobras vagales.

¿Por qué NO amiodarona?
Es un antiarrítmico de segunda línea, requiere infusión lenta, no es de rescate ultra-rápido para este contexto.

¿Por qué NO verapamilo?
Contraindicación absoluta y letal en menores de 1 año. El miocardio inmaduro depende en extremo de los canales de calcio; usar verapamilo producirá colapso cardiovascular irreversible.

¿Por qué NO cardioversión eléctrica?
Solo está indicada como primer paso si hay inestabilidad hemodinámica clara (choque, hipotensión profunda, mala perfusión severa). Esta paciente está estable.

¿Cuál es la trampa de examen?
Muchos estudiantes se asustan por la FC de 250 lpm y responden cardioversión eléctrica de inmediato.
Pero el dato decisivo es la estabilidad hemodinámica relativa y el fallo vagal previo.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar TSV estable vs inestable.
2. Si está inestable → Cardioversión eléctrica sincronizada.
3. Si está estable → Maniobras vagales (hielo en lactantes).
4. Si fallan las maniobras → Adenosina IV rápida con doble jeringa.
5. Evitar a toda costa Verapamilo en menores de 1 año.

Perlas de examen
✅ TSV en lactantes = FC > 220 lpm.
✅ Adenosina siempre en técnica de doble jeringa por su vida media <10 segundos.
✅ Verapamilo = PROSCRITO en menores de 1 año.
✅ Estabilidad hemodinámica define el uso de fármacos vs electricidad.

Referencias
• PALS (Pediatric Advanced Life Support) AHA Guidelines.
• Nelson Textbook of Pediatrics.
• UpToDate: Management of supraventricular tachycardia in children.`
  },
  {
    id: "ucc-conv-2025-07-19-15",
    university: "UCC",
    examArea: "Medicina Interna / Infectología / Gastroenterología",
    topic: "Infectología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "infectologia", "gastroenterologia"],
    statement: "Hombre de 35 años consulta por fiebre de 39°C, sudoración nocturna, malestar general y dolor en hipocondrio derecho irradiado al hombro ipsilateral, de 10 días de evolución. Hace un mes retornó de un viaje de campo por la zona rural del Chocó. Al examen físico: ictericia leve, hepatomegalia muy dolorosa a la percusión (signo de Murphy hepático positivo). Los paraclínicos evidencian leucocitosis (14.000/mmÂ³) sin eosinofilia, elevación moderada de transaminasas y fosfatasa alcalina. Una ecografía hepatobiliar revela una lesión quística única, redondeada, de bordes bien definidos, de 6 cm de diámetro en el lóbulo hepático derecho, alejada de la cápsula de Glisson y de la vía biliar principal. Serología IgG para *Entamoeba histolytica* resulta fuertemente positiva. ¿Cuál es el tratamiento de PRIMERA LÍNEA MÁS adecuado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Drenaje percutáneo guiado por ecografía + Ceftriaxona sistémica por 14 días.",
        distractorProfile: "invasive_overtreatment",
        incorrectFeedback: "El drenaje percutáneo no es de primera línea para el absceso amebiano estándar sin inminencia de ruptura, y la Ceftriaxona no tiene actividad tricomonicida/amebicida útil."
      },
      {
        id: "B",
        label: "B",
        text: "Manejo médico empírico exclusivo con Metronidazol vía oral o intravenoso durante 7 a 10 días, seguido de un amebicida luminal."
      },
      {
        id: "C",
        label: "C",
        text: "Resección quirúrgica del segmento hepático afectado debido al tamaño de la lesión (superior a 5 cm).",
        distractorProfile: "extreme_surgical_error",
        incorrectFeedback: "La resección anatómica quirúrgica del hígado por un absceso amebiano está totalmente proscrita, reservándose las intervenciones drásticas solo para rupturas francas al peritoneo con peritonitis difusa."
      },
      {
        id: "D",
        label: "D",
        text: "Albendazol asociado a Praziquantel por riesgo de origen hidatídico parasitario.",
        distractorProfile: "wrong_parasitology",
        incorrectFeedback: "El albendazol y el praziquantel son la terapia de elección para el Quiste Hidatídico (Echinococcus granulosus), el cual se presenta como un quiste multilocular calcificado en personas con exposición a ovejas/perros de pastoreo, no para la amebiasis."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Absceso Hepático Amebiano clásico (AHA). Las características clínicas (fiebre, dolor en CSD, viaje a zona endémica del trópico), radiológicas (lesión única en lóbulo derecho) y la serología positiva confirman el diagnóstico. A diferencia del absceso piógeno (bacteriano), el AHA responde espectacularmente bien al manejo médico exclusivo. Las guías recomiendan terapia con nitroimidazoles (Metronidazol o Tinidazol) como primera línea, con resolución de la fiebre usualmente en 72 horas, seguido de un agente luminal (Paromomicina o Iodoquinol) para erradicar los quistes intestinales. El drenaje percutáneo NO se realiza de rutina y se reserva para excepciones absolutas: alto riesgo de ruptura (lesiones >10 cm o muy cerca de la cápsula hepática), ubicación en el lóbulo izquierdo (riesgo de ruptura al pericardio), embarazo, o falta de respuesta médica tras 3 a 5 días de metronidazol.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** No dejes que tu instinto de cirujano te gane aquí. En el absceso piógeno (el que hacen los ancianos diabéticos, con múltiples microabscesos o por colecistitis), el drenaje más antibióticos es la norma. Pero en el amebiano (el joven viajero con lesión única derecha), meterle una aguja es un riesgo innecesario. El metronidazol llega al hígado a niveles tan altos que licúa a la Entamoeba en días. La lesión descrita tiene 6 cm y está lejos de la cápsula; no cumple ningún criterio de drenaje intervencionista.",
    keyPoints: [
      "Hombre joven con dolor CSD, fiebre y viaje a zona tropical endémica.",
      "TAC/Ecografía con absceso hepático ÚNICO en lóbulo DERECHO. Serología positiva para amebas.",
      "Absceso Hepático Amebiano. Tratamiento: Metronidazol. Drenaje SOLO si mide >10cm, está en el lóbulo izquierdo, o amenaza romperse.",
      "Tema: Infecciones Parasitarias / Absceso Hepático."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-16",
    university: "UCC",
    examArea: "Pediatría / Neumología / Infectología",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neumologia", "infectologia"],
    statement: "Niño de 5 años es llevado a urgencias en época de pico respiratorio invernal. Tuvo un cuadro confirmado de Influenza A hace 6 días que parecía estar resolviéndose. En las últimas 24 horas, presenta un rápido deterioro clínico con fiebre de 40°C, dolor pleurítico, taquipnea severa y un episodio de hemoptisis franca. Al ingreso, luce pálido, séptico (PA 85/55 mmHg) y saturando 86%. La radiografía de tórax revela una neumonía consolidativa bilateral y la aparición de múltiples cavitaciones de pared fina en ambos campos pulmonares (neumatoceles). Se toman hemocultivos. ¿Cuál es el régimen antibiótico empírico MÁS crítico y apropiado para cubrir al patógeno responsable de este cuadro?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Oseltamivir a dosis plenas asociado a Amoxicilina en dosis altas para cubrir sobreinfección neumocócica típica.",
        distractorProfile: "insufficient_mrsa_coverage",
        incorrectFeedback: "La amoxicilina y el oseltamivir no tienen actividad contra el S. aureus productor de PVL (frecuentemente meticilino-resistente), permitiendo que la necrosis pulmonar progrese fatalmente."
      },
      {
        id: "B",
        label: "B",
        text: "Ampicilina/Sulbactam para cubrir anaerobios aspirativos de la cavidad oral causantes de abscesos pulmonares.",
        distractorProfile: "wrong_etiology_assumption",
        incorrectFeedback: "Los anaerobios orales causan abscesos pulmonares de progresión muy lenta (semanas) en pacientes con alteraciones neurológicas o de la deglución, no cavitaciones agudas post-gripales con hemoptisis en 24 horas."
      },
      {
        id: "C",
        label: "C",
        text: "Ceftriaxona más Azitromicina para cobertura empírica ampliada de neumonía atípica por Mycoplasma.",
        distractorProfile: "atypical_pneumonia_trap",
        incorrectFeedback: "Mycoplasma causa neumonía atípica con infiltrados intersticiales y tos seca, pero excepcionalmente produce destrucción tisular masiva, neumatoceles, choque o hemoptisis aguda como en este paciente."
      },
      {
        id: "D",
        label: "D",
        text: "Vancomicina o Clindamicina intravenosa de forma inmediata, asociado a una cefalosporina de tercera generación."
      }
    ],
    correctOptionId: "D",
    explanation: "El paciente presenta una Neumonía Necrosante o Cavitada clásica de presentación hiperaguda. El antecedente de una infección por Influenza reciente seguida de un deterioro fulminante con hemoptisis, choque y neumatoceles es la \"huella digital\" clínica de una sobreinfección por *Staphylococcus aureus* resistente a meticilina (SAMR) adquirido en la comunidad, específicamente productor de la toxina Leucocidina de Panton-Valentine (PVL). La toxina PVL destruye los neutrófilos, causando necrosis masiva del parénquima pulmonar y la formación de neumatoceles sangrantes. El régimen empírico debe incluir un agente con acción contra SAMR comunitaria y preferiblemente con capacidad para inhibir la producción de toxinas en el ribosoma (como Clindamicina o Linezolid), asociado a Vancomicina o una cefalosporina (Ceftriaxona) para cubrir cocos clásicos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** ¡Anota esta secuencia! Influenza que se complica a la semana = Neumococo o Estafilococo. Si la placa muestra un consolidado simple, puede ser neumococo. Pero si la viñeta menciona \"neumatoceles\", \"cavitaciones\" o \"hemoptisis masiva\", el estafilococo con su toxina Panton-Valentine le hizo huecos literales al pulmón. La amoxicilina (Opción A) se quedará corta porque el SAMR la destruye con sus betalactamasas. Necesitas artillería pesada que bloquee la proteína tóxica (Clindamicina) y rompa la pared del MRSA (Vancomicina).",
    keyPoints: [
      "Niño o joven con 'gripa/influenza' que mejora y de repente hace sepsis pulmonar fulminante.",
      "Hemoptisis + Radiografía con cavidades/neumatoceles.",
      "Sobreinfección por S. aureus productor de PVL (Panton-Valentine). Cobertura obligatoria antistafilocócica con Vancomicina/Clindamicina.",
      "Tema: Neumonía Complicada Pediátrica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-17",
    university: "UCC",
    examArea: "Medicina Interna / Gastroenterología",
    topic: "Gastroenterología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia"],
    statement: "Hombre de 60 años, usuario crónico de Naproxeno por osteoartritis severa, ingresa por hematemesis y melenas asociadas a presíncope. Es reanimado con cristaloides y se inicia infusión de Pantoprazol (bolo de 80 mg). Se realiza endoscopia digestiva alta urgente que revela una úlcera gástrica en la incisura angularis con un vaso visible no sangrante en el lecho (Clasificación de Forrest IIa). El gastroenterólogo aplica terapia combinada de inyección con epinefrina y colocación de hemoclips logrando hemostasia exitosa. Posterior al procedimiento, el paciente es trasladado a la sala de hospitalización. ¿Cuál es el manejo farmacológico ácido-supresor de elección en las próximas 72 horas para prevenir el resangrado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cambiar a Inhibidor de Bomba de Protones (IBP) vía oral a dosis doble (40 mg cada 12 horas) y dieta blanda líquida.",
        distractorProfile: "oral_conversion_premature",
        incorrectFeedback: "La terapia oral intermitente no asegura un pH gástrico constantemente > 6.0 en las primeras 72 horas, permitiendo la digestión péptica del coágulo hemostático y favoreciendo el resangrado de alto riesgo."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar infusión continua de Inhibidor de Bomba de Protones a 8 mg/hora por 72 horas ininterrumpidas."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusión intravenosa de Terlipresina u Octreotide por 3 a 5 días y mantener IBP a necesidad.",
        distractorProfile: "wrong_bleeding_pathology",
        incorrectFeedback: "Los análogos de la somatostatina (Octreotide) y la terlipresina actúan disminuyendo el flujo sanguíneo esplácnico; son la piedra angular de la hemorragia variceal, pero ineficaces en el sangrado arterial por úlcera péptica."
      },
      {
        id: "D",
        label: "D",
        text: "Suspender temporalmente el IBP y administrar Sucralfato líquido para crear una barrera física protectora sobre el clip.",
        distractorProfile: "outdated_barrier_agent",
        incorrectFeedback: "El sucralfato es un agente tópico ineficaz para estabilizar un coágulo arterial en el lecho ulceroso frente a los efectos líticos del ácido gástrico sostenido, careciendo de evidencia en guías modernas de sangrado agudo."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursó con una Hemorragia Digestiva Alta No Variceal por úlcera péptica con estigmas endoscópicos de alto riesgo (Forrest I o IIa/IIb). La hemostasia endoscópica combinada fue exitosa. Sin embargo, para que el coágulo plaquetario recién formado no se degrade y se consolide, se requiere mantener el pH gástrico constantemente por encima de 6.0 (la pepsina y el ácido clorhídrico destruyen los coágulos a pH < 5.0). Las guías internacionales recomiendan fuertemente que TODOS los pacientes con úlceras de alto riesgo (después del manejo endoscópico) reciban infusión intravenosa continua de un IBP a dosis altas (8 mg/h) durante 72 horas, ya que esto ha demostrado reducir la tasa de resangrado, cirugía de rescate y mortalidad.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Recuerda que el cirujano y el endoscopista hacen el tapón mecánico, pero la medicina interna protege ese tapón. Si le pasas el omeprazol a vía oral (Opción A), el pH gástrico fluctuará por debajo de 4 durante la noche, el ácido digerirá la fibrina del hemoclip y el paciente te hará un resangrado masivo al tercer día. La Terlipresina (Opción C) se usa para las várices esofágicas de los cirróticos, no tiene rol clínico en la úlcera péptica gastroduodenal.",
    keyPoints: [
      "Úlcera péptica sangrante activa (Forrest I) o con estigmas de alto riesgo (Forrest IIa: vaso visible, o IIb: coágulo adherido).",
      "Post-terapia endoscópica exitosa.",
      "Mantener estricto soporte farmacológico con IBP intravenoso en infusión continua a 8 mg/hora durante las primeras 72 horas (el periodo de máximo riesgo de caída de la escara).",
      "Tema: Hemorragia Digestiva No Variceal."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-18",
    university: "UCC",
    examArea: "Pediatría / Oncología / Cuidado Intensivo",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "oncologia", "uci"],
    statement: "Un adolescente de 14 años es traído a urgencias con un cuadro de 2 semanas de ortopnea, tos seca y edema facial que ha progresado rápidamente. En las últimas 24 horas, el paciente asume espontáneamente una posición sentada e inclinada hacia adelante y presenta estridor inspiratorio. Al examen físico: marcado edema en esclavina (cuello, cara y porción superior del tórax), ingurgitación yugular sin colapso inspiratorio, y circulación colateral venosa en tórax. Una radiografía y TAC de tórax documentan una enorme masa mediastínica anterior que comprime la tráquea en más del 60% de su diámetro y obstruye la vena cava superior. El cirujano de tórax propone una mediastinoscopia y biopsia ganglionar bajo anestesia general para determinar si es un Linfoma o una Leucemia y guiar la terapia. ¿Cuál es la conducta interdisciplinaria MÁS apropiada frente a esta propuesta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aceptar la propuesta quirúrgica para tener un reporte histológico preciso que permita usar la quimioterapia específica correcta.",
        distractorProfile: "naive_diagnostic_prioritization",
        incorrectFeedback: "Buscar el diagnóstico histológico perfecto mediante sedación/anestesia en un paciente con compresión extrínseca crítica del 60% de la tráquea resultará en colapso irreversible de la vía aérea y muerte inmediata en quirófano."
      },
      {
        id: "B",
        label: "B",
        text: "Contraindicar absolutamente la anestesia general y la sedación profunda; se debe intentar una biopsia con anestesia local o instaurar manejo empírico de rescate con esteroides y radioterapia."
      },
      {
        id: "C",
        label: "C",
        text: "Proceder con la anestesia general asegurando previamente intubación orotraqueal con un tubo reforzado rígido para evitar el colapso.",
        distractorProfile: "mechanical_illusion_trap",
        incorrectFeedback: "La intubación orotraqueal no protege contra la compresión del tumor que ocurre a nivel distal de la carina o bronquios principales; si la vía aérea inferior colapsa, la ventilación será imposible."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar drenaje pleural y pericárdico de urgencia para aliviar el efecto restrictivo mediastínico antes de entrar al quirófano.",
        distractorProfile: "wrong_anatomic_compartment",
        incorrectFeedback: "Drenar derrames periféricos no resuelve el problema anatómico restrictivo de una masa sólida central en el mediastino anterior, manteniendo invariable el riesgo de asfixia al momento de sedar."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Síndrome de Vena Cava Superior y, más críticamente, un Síndrome de Mediastino Medio/Anterior (compresión crítica de la vía aérea). En pacientes pediátricos con grandes masas mediastínicas (frecuentemente Linfoma T o LLA T), la sedación profunda, la anestesia general y el bloqueo neuromuscular son intervenciones de altísimo riesgo de letalidad. Al relajar el tono muscular y la presión negativa torácica de la respiración espontánea, el tumor aplasta por completo la tráquea y los grandes vasos de forma irreversible, produciendo un colapso de la vía aérea inintubable y un paro cardiorrespiratorio inanimable. Las guías oncológicas prohíben la anestesia general en estos casos; si no es posible tomar muestra superficial (ej. ganglio supraclavicular o punción pleural con anestesia local), se DEBE iniciar quimioterapia/esteroides de rescate \"a ciegas\" o radioterapia focalizada, y biopsiar 24-48 horas después cuando la masa haya reducido su tamaño.",
    keyPoints: [
      "Adolescente con gran masa mediastínica anterior + Síndrome de Vena Cava Superior y Estridor/Ortopnea.",
      "Propuesta de realizar procedimientos bajo anestesia general o intubación.",
      "Peligro inminente de muerte por colapso de vía aérea (Síndrome de Masa Mediastínica). Contraindicación absoluta de sedación y bloqueo neuromuscular.",
      "Tema: Urgencias Oncológicas Pediátricas."
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de pediatría oncológica porque evalúa una trampa muy frecuente en el mundo quirúrgico: intentar asegurar el diagnóstico histológico poniendo en riesgo inminente la vida del paciente.

La clave no es obtener el diagnóstico perfecto enseguida.
La clave es:
No aplicar anestesia general a un paciente con gran masa mediastínica que ya tiene estridor y ortopnea (Signos de compresión crítica de la vía aérea).

¿Qué está ocurriendo realmente?

El paciente presenta:
• Adolescente de 14 años.
• Síndrome de Vena Cava Superior (edema en esclavina, ingurgitación yugular sin colapso).
• Compresión crítica de la vía aérea (estridor inspiratorio, ortopnea, masa comprimiendo >60% de la tráquea).
• Sospecha de Linfoma T o LLA T.

¿Por qué la opción B es la respuesta correcta?

Ante una masa mediastínica gigante que ya estrecha severamente la tráquea, el simple hecho de aplicar anestesia general, relajar el músculo liso bronquial y perder la presión negativa de la respiración espontánea provoca que el tumor colapse completamente la tráquea y vasos adyacentes. El paciente sufrirá paro inminente, será inintubable y no podrá reanimarse. El manejo empírico de rescate con esteroides (Metilprednisolona) o radioterapia salva la vida al reducir el tumor drásticamente en 12-24h para entonces proceder a la biopsia de manera segura.

¿Por qué fallan las otras opciones?

• Aceptar propuesta quirúrgica (A): Como se explicó, es la crónica de una muerte anunciada en el quirófano.
• Intubación orotraqueal previa (C): La compresión frecuentemente es a nivel de la tráquea distal o carina. Aunque intubes, la masa aplasta la vía aérea distal, haciendo la ventilación imposible.
• Drenaje pleural y pericárdico (D): Drenar líquido periférico no alivia el efecto mecánico de una masa tumoral sólida masiva aplastando el mediastino central.

¿Cuál es la trampa del examen?

Muchos estudiantes se aferran al dogma médico de "primero diagnosticar, después tratar" y piensan que tratar "a ciegas" con quimioterapia/esteroides es mala práctica. Pero el dato decisivo es: En urgencias oncológicas, cuando el colapso de la vía aérea es inminente por tumor, el dogma se invierte y los esteroides empíricos son mandatorios como rescate vital.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar la masa mediastínica con estridor/ortopnea.
2. Evitar sedación y anestesia general por completo.
3. Intentar biopsia de ganglios periféricos bajo anestesia local si es factible y rápido.
4. Si no hay tejido accesible o el colapso es inminente: iniciar esteroides empíricos.
5. Biopsiar de manera formal solo cuando la masa mediastínica haya disminuido de tamaño.

Perlas de examen
✅ Masa mediastínica grande + ortopnea = Prohibida la anestesia general.
✅ El músculo liso relajado permite que el peso del tumor aplaste la tráquea.
✅ En pediatría, Linfoma/Leucemia T mediastinal son altamente respondedores rápidos a esteroides.
✅ Ningún tubo orotraqueal vence el peso de un tumor sobre la tráquea distal.

Referencias
• Nelson Textbook of Pediatrics: Oncologic Emergencies.
• PALS Guidelines: Management of airway obstruction in mediastinal mass.
• UpToDate: Clinical presentation and management of anterior mediastinal masses.`
  },
  {
    id: "ucc-conv-2025-07-19-19",
    university: "UCC",
    examArea: "Medicina Interna / Endocrinología / Urgencias",
    topic: "Endocrinología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia", "urgencias"],
    statement: "Mujer de 30 años, previamente sana, es traída por el servicio prehospitalario en estado de choque profundo. Relatan un cuadro de 3 días de dolor abdominal inespecífico, vómitos repetidos, fatiga extrema y fiebre leve. Al examen físico: estuporosa, PA 75/40 mmHg (refractaria a dos bolos de 1 litro de SSN), FC 115 lpm. Llama poderosamente la atención una marcada hiperpigmentación marrón-grisácea en la mucosa oral, encías, pliegues palmares y cicatrices antiguas. Laboratorios de urgencia: Sodio sérico 126 mEq/L, Potasio sérico 6.2 mEq/L, Glucemia 55 mg/dL. Se sospecha una insuficiencia suprarrenal aguda (Crisis Addisoniana). ¿Cuál es la intervención de diagnóstico y tratamiento INMEDIATO MÁS adecuada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar una prueba de estimulación con ACTH (Cosintropina) rápida y esperar los resultados del cortisol a los 30 y 60 minutos antes de administrar fármacos.",
        distractorProfile: "diagnostic_delay_in_shock",
        incorrectFeedback: "La prueba de estimulación es el estándar diagnóstico ambulatorio; esperar una o dos horas sus resultados en una paciente chocada conlleva un riesgo altísimo de muerte vascular inminente por colapso catecolaminérgico."
      },
      {
        id: "B",
        label: "B",
        text: "Extraer muestra basal para ACTH y cortisol sérico, e iniciar de inmediato bolos de Hidrocortisona intravenosa (100 mg) y cristaloides continuos."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Fludrocortisona por sonda nasogástrica para corregir la hiperkalemia, y adicionar Levotiroxina por sospecha de un síndrome poliglandular.",
        distractorProfile: "wrong_drug_and_route",
        incorrectFeedback: "La fludrocortisona oral es para mantenimiento crónico de la deficiencia mineralocorticoide, pero carece de la potencia vascular aguda que ofrece el efecto glucocorticoide parenteral de la hidrocortisona en medio de un choque."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Norepinefrina en infusión continua debido al estado de choque refractario y posponer el manejo esteroideo.",
        distractorProfile: "ineffective_vasopressor_without_steroids",
        incorrectFeedback: "En la crisis adrenal, hay una depleción profunda de los receptores alfa-adrenérgicos vasculares; la norepinefrina no funcionará (el vaso no aprieta) si no se repone primero el cortisol sérico que es quien mantiene activo al receptor."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro de hiperpigmentación de mucosas/pliegues asocia el origen del problema a una Insuficiencia Adrenal Primaria (Enfermedad de Addison), donde la ACTH endógena se eleva compensatoriamente y estimula los melanocitos. El estrés del vómito desató una Crisis Adrenal Aguda, caracterizada por choque refractario a volumen, hiponatremia, hiperkalemia e hipoglucemia (déficit dual de glucocorticoides y mineralocorticoides). En una crisis adrenal, la administración de esteroides salva la vida y nunca debe demorarse. La técnica perfecta es: pinchar la vena, extraer el tubo rojo para medir los niveles de ACTH y cortisol basal (para que el endocrinólogo luego confirme el diagnóstico con tranquilidad) e inyectar por la misma vía 100 mg de Hidrocortisona IV instantáneamente. No se espera a realizar pruebas dinámicas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Esta pregunta penaliza al médico pasivo. La prueba de estimulación con Cosintropina (Opción A) es el estándar de oro diagnóstico de la Enfermedad de Addison de manera ambulatoria, pero hacerla en la cama de urgencias mientras la paciente está chocada a 75/40 es absurdo. Tomas el nivel basal e infundes el esteroide. Y recuerda, la Hidrocortisona a altas dosis (>50 mg) ejerce efecto cruzado potente sobre el receptor mineralocorticoide, por lo que retendrá sodio y excretará potasio sin necesidad de dar Fludrocortisona aguda.",
    keyPoints: [
      "Paciente con hiperpigmentación cutánea/mucosa que ingresa en choque refractario a volumen.",
      "Laboratorios: Hiponatremia + Hiperkalemia + Hipoglucemia.",
      "Crisis Adrenal por Enfermedad de Addison. Sacar sangre para medir Cortisol/ACTH basales e inyectar Hidrocortisona 100 mg IV inmediatamente.",
      "Tema: Crisis Adrenal / Insuficiencia Suprarrenal."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-20",
    university: "UCC",
    examArea: "Pediatría / Infectología / Urgencias",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "urgencias"],
    statement: "Niño de 4 años, asiste a guardería, es llevado a urgencias por fiebre de inicio súbito (40.2°C) hace 12 horas, letargo severo y dolor en extremidades. Al ingreso: luce tóxico, estuporoso, PA 70/45 mmHg, FC 158 lpm, llenado capilar de 5 segundos. Durante la evaluación física, el médico nota la rápida aparición de múltiples máculas eritematosas que en cuestión de minutos evolucionan a petequias diseminadas en el tronco, paladar y conjuntivas, fusionándose en el miembro inferior derecho en una placa equimótica grande de color púrpura oscuro con centro necrótico. ¿Cuál es el paso INMEDIATO de intervención médica que dicta el estándar de reanimación?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar hemograma con recuento de plaquetas y pruebas de coagulación para confirmar Coagulación Intravascular Diseminada antes de intervenir.",
        distractorProfile: "catastrophic_laboratory_delay",
        incorrectFeedback: "La meningococcemia mata en cuestión de horas. Retrasar la administración del antibiótico bactericida para esperar la confirmación laboratorial de una coagulopatía que ya es clínicamente obvia asegura el fallecimiento del menor."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar de forma urgente un bolo de Ceftriaxona intravenosa (o intraósea) incluso antes de intentar una punción lumbar."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar pulsos de Metilprednisolona para estabilizar el endotelio capilar y evitar el choque irreversible.",
        distractorProfile: "ineffective_sepsis_modulation",
        incorrectFeedback: "Aunque los esteroides tienen rol en la meningitis bacteriana comprobada para prevenir sordera o como suplemento en el choque refractario (falla suprarrenal), su uso aislado inicial sin destruir la bacteria es irrelevante frente al colapso infeccioso."
      },
      {
        id: "D",
        label: "D",
        text: "Instaurar plasmaféresis de emergencia e Inmunoglobulina IV debido a la sospecha de vasculitis fulminante autoinmune.",
        distractorProfile: "misdiagnosis_autoimmune_vs_sepsis",
        incorrectFeedback: "La púrpura fulminans febril de instauración hiperaguda en un niño previamente sano es un cuadro bacteriano séptico directo hasta que se demuestre lo contrario; la plasmaféresis como terapia autoinmune es errónea aquí."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente está cursando con Meningococcemia (Sepsis por *Neisseria meningitidis*) manifestada en su forma más letal: Púrpura Fulminans (Púrpura y necrosis cutánea masiva secundaria a CID y trombosis capilar) y choque distributivo profundo (Síndrome de Waterhouse-Friderichsen si compromete las suprarrenales). La mortalidad de la meningococcemia fulminante aumenta hora tras hora si no se inicia el tratamiento. El estándar de cuidado absoluto mundial exige la administración INMEDIATA de un antibiótico bactericida de amplio espectro (Ceftriaxona o Cefotaxime) por vía intravenosa, intraósea (o intramuscular si no hay acceso disponible aún), como primera orden en reanimación. Las neuroimágenes o punciones lumbares quedan en segundo plano en esta fase de inestabilidad masiva.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, en pediatría la Púrpura Fulminans es la pesadilla del triaje. Si un niño entra con fiebre y le ves una sola petequia que no palidece a la presión, no lo sacas de tus ojos. El meningococo se multiplica a una velocidad asombrosa. Esperar laboratorios de coagulación (Opción A) es regalarle al meningococo el tiempo que necesita para necrosar las cuatro extremidades del niño y hacer que pierda los dedos o la vida. Se infunde Ceftriaxona mientras corren los cristaloides, y no importa si la punción lumbar se retrasa días.",
    keyPoints: [
      "Niño o joven con fiebre brusca, toxicidad sistémica extrema y choque.",
      "Exantema petequial que progresa en minutos/horas a equimosis purpúricas de gran tamaño (Púrpura Fulminans).",
      "Sepsis Meningocócica. El tratamiento es dar Antibiótico IV (Ceftriaxona) en el primer minuto en que se canalice la vena o el hueso. Es un código rojo infectológico.",
      "Tema: Enfermedad Meningocócica."
    ]
  }
];

