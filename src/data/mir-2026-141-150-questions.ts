import type { TrainingQuestion } from "@/lib/questions/types";

export const MIR_2026_141_150_QUESTIONS: TrainingQuestion[] = [
  {
    id: "mir-2026-141",
    university: "MIR (España)",
    examArea: "ENFERMEDADES INFECCIOSAS",
    topic: "INICIO DEL TRATAMIENTO ANTIRRETROVIRAL",
    difficulty: "medium",
    tags: ["mir", "espana", "infecciosas"],
    statement:
      "Un varón de 30 años, asintomático, es diagnosticado de infección por VIH en un cribado. Tiene 650 linfocitos CD4/mm³ y una carga viral de 30.000 copias/ml. ¿Cuándo debe iniciarse el tratamiento antirretroviral?",
    options: [
      { id: "A", label: "A", text: "Cuando los CD4 bajen de 350/mm³." },
      { id: "B", label: "B", text: "Solo si aparece una infección oportunista." },
      { id: "C", label: "C", text: "Lo antes posible, independientemente de la cifra de CD4." },
      { id: "D", label: "D", text: "Cuando la carga viral supere las 100.000 copias/ml." },
    ],
    correctOptionId: "C",
    explanation:
      "Las guías actuales recomiendan **iniciar el tratamiento antirretroviral (TAR) en todas las personas con infección por VIH, lo antes posible y con independencia de la cifra de CD4**. El TAR precoz reduce la morbimortalidad y, al conseguir una **carga viral indetectable**, **evita la transmisión sexual** del virus (indetectable = intransmisible). Antes de iniciarlo se solicitan el **genotipo de resistencias**, el **HLA-B*57:01** (si se valora abacavir) y las serologías.\n\n**TRAMPA DEL EXAMEN:** Los umbrales de CD4 para iniciar el tratamiento son de guías antiguas. Esperar a una infección oportunista es llegar tarde.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., hoy el VIH se trata en cuanto se diagnostica. El paciente gana salud y, además, deja de transmitir el virus cuando la carga viral es indetectable. Lo que sí hay que hacer antes es elegir bien el régimen, con el genotipo y el HLA-B*57:01 si se piensa en abacavir.",
    keyPoints: [
      "TAR en todas las personas con VIH, lo antes posible, independientemente de los CD4.",
      "Carga viral indetectable = intransmisible por vía sexual.",
      "Antes de iniciar: genotipo de resistencias y HLA-B*57:01 si se valora abacavir.",
    ],
  },
  {
    id: "mir-2026-142",
    university: "MIR (España)",
    examArea: "ENFERMEDADES INFECCIOSAS",
    topic: "SÍFILIS PRIMARIA",
    difficulty: "easy",
    tags: ["mir", "espana", "infecciosas"],
    statement:
      "Un hombre de 28 años consulta por una úlcera genital única, indolora, de base indurada y bordes limpios, con adenopatía inguinal no dolorosa, aparecida 3 semanas después de una relación sexual de riesgo. No tiene alergias. ¿Cuál es el tratamiento de elección?",
    options: [
      { id: "A", label: "A", text: "Penicilina G benzatina 2,4 millones de unidades por vía intramuscular en dosis única." },
      { id: "B", label: "B", text: "Aciclovir oral durante 7 días." },
      { id: "C", label: "C", text: "Ceftriaxona intramuscular en dosis única más doxiciclina durante 7 días, sin más estudios." },
      { id: "D", label: "D", text: "Penicilina G cristalina intravenosa durante 14 días." },
    ],
    correctOptionId: "A",
    explanation:
      "El **chancro sifilítico** es una úlcera **única, indolora, indurada y de fondo limpio**, con **adenopatía regional no dolorosa**: **sífilis primaria**. El diagnóstico se apoya en las pruebas **treponémicas** y **no treponémicas** (RPR/VDRL, útil también para el seguimiento). El tratamiento de la sífilis precoz es la **penicilina G benzatina 2,4 MU IM en dosis única**. Tras la primera dosis puede aparecer la **reacción de Jarisch-Herxheimer** (fiebre, malestar), que es autolimitada. Hay que cribar otras ITS (VIH incluido) y estudiar a los contactos.\n\n**TRAMPA DEL EXAMEN:** El **herpes genital** produce **úlceras múltiples y dolorosas** sobre vesículas (aciclovir). La **penicilina G intravenosa** se reserva para la **neurosífilis**.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., úlcera genital que no duele: sífilis hasta que se demuestre lo contrario. Si duele y son varias: herpes. Una sola inyección de penicilina benzatina cura la sífilis precoz; avise al paciente de que puede tener fiebre esa noche y no piense que es una alergia.",
    keyPoints: [
      "Chancro sifilítico: úlcera única, indolora, indurada, con adenopatía no dolorosa.",
      "Sífilis precoz: penicilina G benzatina 2,4 MU IM dosis única; neurosífilis: penicilina G IV.",
      "Reacción de Jarisch-Herxheimer tras la primera dosis; cribar otras ITS y estudiar contactos.",
    ],
  },
  {
    id: "mir-2026-143",
    university: "MIR (España)",
    examArea: "ENFERMEDADES INFECCIOSAS",
    topic: "NEUMONÍA POR PNEUMOCYSTIS JIROVECII",
    difficulty: "hard",
    tags: ["mir", "espana", "infecciosas"],
    statement:
      "Un paciente con infección por VIH no tratada y 80 linfocitos CD4/mm³ presenta tos seca, disnea progresiva y fiebre de dos semanas. La radiografía muestra infiltrados intersticiales bilaterales, la LDH está elevada y la PaO₂ es de 62 mmHg. ¿Cuál es el tratamiento de elección?",
    options: [
      { id: "A", label: "A", text: "Amoxicilina-clavulánico oral." },
      { id: "B", label: "B", text: "Anfotericina B liposomal." },
      { id: "C", label: "C", text: "Isoniazida, rifampicina, pirazinamida y etambutol." },
      { id: "D", label: "D", text: "Cotrimoxazol en dosis altas junto con corticoides." },
    ],
    correctOptionId: "D",
    explanation:
      "La **neumonía por Pneumocystis jirovecii** es una infección oportunista típica con **CD4 < 200/mm³**: curso **subagudo**, tos seca, disnea e hipoxemia, **infiltrados intersticiales bilaterales** y **LDH elevada**. El tratamiento de elección es el **cotrimoxazol** (trimetoprim-sulfametoxazol) en dosis altas durante 21 días, añadiendo **corticoides** si la **PaO₂ < 70 mmHg** (o gradiente alveoloarterial ≥ 35), porque reducen la mortalidad. Con CD4 < 200 se indica **profilaxis** con cotrimoxazol.\n\n**TRAMPA DEL EXAMEN:** La anfotericina es para infecciones fúngicas como la criptococosis. El tratamiento antituberculoso no está indicado sin sospecha de tuberculosis. Y no olvide los corticoides en la hipoxemia moderada-grave.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., VIH con CD4 muy bajos, disnea de semanas, radiografía intersticial y LDH alta: Pneumocystis. Cotrimoxazol y, si la PaO₂ está por debajo de 70, corticoides. Y después, TAR y profilaxis hasta recuperar las defensas.",
    keyPoints: [
      "Pneumocystis: CD4 < 200, curso subagudo, infiltrado intersticial bilateral, LDH elevada.",
      "Tratamiento: cotrimoxazol a dosis altas 21 días + corticoides si PaO₂ < 70 mmHg.",
      "Profilaxis con cotrimoxazol si CD4 < 200/mm³.",
    ],
  },
  {
    id: "mir-2026-144",
    university: "MIR (España)",
    examArea: "ENFERMEDADES INFECCIOSAS",
    topic: "FIEBRE EN EL VIAJERO: PALUDISMO",
    difficulty: "medium",
    tags: ["mir", "espana", "infecciosas"],
    statement:
      "Una mujer de 35 años consulta por fiebre de 39 °C, escalofríos y cefalea, 10 días después de regresar de un viaje de un mes a Nigeria. No realizó quimioprofilaxis. ¿Cuál es la prueba diagnóstica que debe realizarse de forma urgente?",
    options: [
      { id: "A", label: "A", text: "Serología de dengue y esperar 2 semanas para repetirla." },
      { id: "B", label: "B", text: "Gota gruesa y extensión de sangre periférica (o test rápido de antígeno) para Plasmodium." },
      { id: "C", label: "C", text: "Hemocultivos y alta con antitérmicos." },
      { id: "D", label: "D", text: "Coprocultivo y parásitos en heces." },
    ],
    correctOptionId: "B",
    explanation:
      "Toda **fiebre en un viajero procedente de zona endémica** (especialmente **África subsahariana**) debe considerarse **paludismo** hasta que se demuestre lo contrario, porque **Plasmodium falciparum** puede producir formas graves y mortales en horas (paludismo cerebral, insuficiencia renal, distrés, anemia grave). El diagnóstico urgente se hace con la **gota gruesa y la extensión** (que cuantifica la parasitemia e identifica la especie) o con **test rápidos de antígeno**. Si es negativa y persiste la sospecha, se repite cada 12-24 horas.\n\n**TRAMPA DEL EXAMEN:** Dar de alta a un viajero febril sin descartar paludismo. El dengue y otras infecciones deben considerarse, pero no a costa de retrasar el diagnóstico de malaria.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en urgencias hay una pregunta que no puede faltar ante una fiebre: ¿ha viajado? Si viene de África sin profilaxis, la gota gruesa se pide hoy, no mañana. El falciparum no espera.",
    keyPoints: [
      "Fiebre en viajero de zona endémica: paludismo hasta que se demuestre lo contrario.",
      "Diagnóstico urgente: gota gruesa y extensión (o test rápido de antígeno); repetir si es negativa y persiste la sospecha.",
      "P. falciparum (África subsahariana) puede causar paludismo grave en horas.",
    ],
  },
  {
    id: "mir-2026-145",
    university: "MIR (España)",
    examArea: "ENFERMEDADES INFECCIOSAS",
    topic: "INFECCIÓN POR CLOSTRIDIOIDES DIFFICILE",
    difficulty: "medium",
    tags: ["mir", "espana", "infecciosas"],
    statement:
      "Una mujer de 72 años, ingresada por neumonía y tratada con amoxicilina-clavulánico, presenta al quinto día diarrea acuosa (6 deposiciones diarias), dolor abdominal y leucocitosis leve. La detección de toxina de Clostridioides difficile en heces es positiva. No tiene criterios de gravedad. ¿Cuál es el tratamiento de elección?",
    options: [
      { id: "A", label: "A", text: "Loperamida para controlar la diarrea." },
      { id: "B", label: "B", text: "Ciprofloxacino oral." },
      { id: "C", label: "C", text: "Fidaxomicina o vancomicina por vía oral, retirando si es posible el antibiótico desencadenante." },
      { id: "D", label: "D", text: "Vancomicina intravenosa." },
    ],
    correctOptionId: "C",
    explanation:
      "La **infección por Clostridioides difficile** es la principal causa de **diarrea nosocomial** asociada a **antibióticos**. El tratamiento de un primer episodio es la **fidaxomicina oral** (menor tasa de recurrencias) o la **vancomicina oral**, junto con la **retirada del antibiótico desencadenante** si es posible y medidas de **aislamiento de contacto** con lavado de manos con agua y jabón (las esporas resisten las soluciones alcohólicas). En las recurrencias múltiples se considera el **trasplante de microbiota fecal**.\n\n**TRAMPA DEL EXAMEN:** La **vancomicina intravenosa no alcanza la luz intestinal** y no es eficaz. Los **antidiarreicos** pueden favorecer el megacolon tóxico. El **metronidazol** ya no es de elección.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., diarrea en un paciente con antibióticos: piense en C. difficile. La vancomicina tiene que ir por la boca para llegar al colon; por la vena no le sirve. Y lávese las manos con agua y jabón: el gel no mata las esporas.",
    keyPoints: [
      "C. difficile: diarrea nosocomial asociada a antibióticos.",
      "Tratamiento: fidaxomicina o vancomicina ORAL; retirar el antibiótico desencadenante.",
      "Aislamiento de contacto y lavado con agua y jabón (las esporas resisten el alcohol).",
    ],
  },
  {
    id: "mir-2026-146",
    university: "MIR (España)",
    examArea: "ENFERMEDADES INFECCIOSAS",
    topic: "MONONUCLEOSIS INFECCIOSA",
    difficulty: "easy",
    tags: ["mir", "espana", "infecciosas"],
    statement:
      "Un estudiante de 19 años presenta fiebre, odinofagia con amígdalas hipertróficas y exudado, adenopatías cervicales posteriores y astenia marcada. Tras tomar amoxicilina, desarrolla un exantema maculopapuloso generalizado. En el hemograma hay linfocitosis con linfocitos atípicos. ¿Qué recomendación es correcta?",
    options: [
      { id: "A", label: "A", text: "Evitar los deportes de contacto durante varias semanas por el riesgo de rotura esplénica." },
      { id: "B", label: "B", text: "Diagnosticar alergia a la penicilina de por vida y cambiar a un macrólido." },
      { id: "C", label: "C", text: "Iniciar aciclovir intravenoso." },
      { id: "D", label: "D", text: "Pautar corticoides sistémicos en todos los casos." },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro es una **mononucleosis infecciosa** por el **virus de Epstein-Barr**: fiebre, faringoamigdalitis, **adenopatías cervicales posteriores**, astenia, **esplenomegalia** y **linfocitosis con linfocitos atípicos**. El **exantema tras amoxicilina** es muy frecuente en la mononucleosis y **no indica una alergia verdadera**. El diagnóstico se confirma con **anticuerpos heterófilos (Paul-Bunnell)** o serología específica. El tratamiento es **sintomático**, y se recomienda **evitar los deportes de contacto** durante al menos 3-4 semanas por el riesgo de **rotura esplénica**.\n\n**TRAMPA DEL EXAMEN:** Etiquetar al paciente de alérgico a la penicilina. Los **antivirales** no están indicados. Los **corticoides** se reservan para complicaciones (obstrucción de la vía aérea, anemia hemolítica, trombopenia grave).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., joven con amigdalitis, ganglios detrás del cuello, cansancio y bazo grande: mononucleosis. El exantema por amoxicilina es casi una pista diagnóstica. Y dígale que deje el rugby un tiempo: el bazo inflamado se puede romper.",
    keyPoints: [
      "Mononucleosis (VEB): fiebre, faringoamigdalitis, adenopatías posteriores, esplenomegalia, linfocitos atípicos.",
      "Exantema tras amoxicilina frecuente; no implica alergia a penicilina.",
      "Tratamiento sintomático; evitar deportes de contacto por riesgo de rotura esplénica.",
    ],
  },
  {
    id: "mir-2026-147",
    university: "MIR (España)",
    examArea: "TRAUMATOLOGÍA",
    topic: "FRACTURA DE ESCAFOIDES",
    difficulty: "medium",
    tags: ["mir", "espana", "traumatologia"],
    statement:
      "Un joven de 22 años consulta tras una caída sobre la mano en extensión. Presenta dolor a la palpación de la tabaquera anatómica. Las radiografías de muñeca, incluidas las proyecciones de escafoides, son normales. ¿Cuál es la actitud más adecuada?",
    options: [
      { id: "A", label: "A", text: "Alta sin inmovilización, ya que la radiografía es normal." },
      { id: "B", label: "B", text: "Cirugía urgente de fijación del escafoides." },
      { id: "C", label: "C", text: "Vendaje compresivo y reincorporación inmediata al deporte." },
      { id: "D", label: "D", text: "Inmovilizar la muñeca y repetir la radiografía en 10-14 días o realizar una resonancia magnética." },
    ],
    correctOptionId: "D",
    explanation:
      "La **fractura de escafoides** es la fractura más frecuente del carpo y se produce por **caída sobre la mano en extensión**. El signo clave es el **dolor en la tabaquera anatómica**. Hasta en un **20% de los casos la radiografía inicial es normal**, por lo que ante la sospecha clínica se debe **inmovilizar** y **repetir la radiografía a los 10-14 días** o realizar una **resonancia magnética** (o TC). Su vascularización es **retrógrada**, lo que explica el riesgo de **pseudoartrosis** y **necrosis avascular del polo proximal**.\n\n**TRAMPA DEL EXAMEN:** Dar el alta sin inmovilizar porque la radiografía es normal: una fractura no diagnosticada puede acabar en pseudoartrosis y artrosis de muñeca.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., duele la tabaquera anatómica: trátelo como fractura aunque la radiografía sea normal. El escafoides recibe la sangre de distal a proximal, y una fractura que se mueve puede dejar al polo proximal sin riego. Inmovilice y confirme con otra prueba.",
    keyPoints: [
      "Fractura de escafoides: caída sobre mano en extensión, dolor en la tabaquera anatómica.",
      "Radiografía inicial normal hasta en un 20%: inmovilizar y repetir Rx a los 10-14 días o RM.",
      "Vascularización retrógrada: riesgo de pseudoartrosis y necrosis avascular del polo proximal.",
    ],
  },
  {
    id: "mir-2026-148",
    university: "MIR (España)",
    examArea: "TRAUMATOLOGÍA",
    topic: "SÍNDROME COMPARTIMENTAL AGUDO",
    difficulty: "hard",
    tags: ["mir", "espana", "traumatologia"],
    statement:
      "Un motorista de 25 años ingresa con una fractura cerrada de diáfisis tibial, inmovilizada con férula. A las 8 horas refiere dolor intenso en la pierna que no cede con opioides y que aumenta con la extensión pasiva de los dedos del pie. Los pulsos pedios están presentes. ¿Cuál es la actitud correcta?",
    options: [
      { id: "A", label: "A", text: "Aumentar la analgesia y reevaluar en 12 horas, ya que los pulsos están presentes." },
      { id: "B", label: "B", text: "Retirar la férula o vendajes, medir las presiones compartimentales si hay dudas y realizar una fasciotomía urgente." },
      { id: "C", label: "C", text: "Elevar la pierna por encima del nivel del corazón y aplicar frío durante 24 horas." },
      { id: "D", label: "D", text: "Arteriografía urgente antes de cualquier otra medida." },
    ],
    correctOptionId: "B",
    explanation:
      "El **síndrome compartimental agudo** se produce por el aumento de presión dentro de un compartimento muscular cerrado, típicamente tras **fracturas de tibia**. El signo más precoz y fiable es el **dolor desproporcionado** que **aumenta con el estiramiento pasivo** de los músculos del compartimento. Los **pulsos suelen estar presentes** hasta fases muy tardías. El tratamiento es la **retirada de vendajes y férulas** y la **fasciotomía urgente**. La medición de presiones ayuda en casos dudosos o en pacientes inconscientes.\n\n**TRAMPA DEL EXAMEN:** Descartar el síndrome compartimental porque los **pulsos están presentes**. **Elevar el miembro** por encima del corazón reduce la presión de perfusión y **empeora** la isquemia; se debe mantener a la altura del corazón.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., dolor que no cede con morfina tras una fractura de tibia y que se dispara al mover los dedos: síndrome compartimental. No espere a que desaparezca el pulso, porque entonces el músculo ya estará necrosado. Quite todo lo que comprima y llame a quirófano.",
    keyPoints: [
      "Síndrome compartimental: dolor desproporcionado que aumenta con el estiramiento pasivo.",
      "Los pulsos suelen conservarse hasta fases tardías: no descartan el diagnóstico.",
      "Tratamiento: retirar vendajes y fasciotomía urgente; no elevar el miembro por encima del corazón.",
    ],
  },
  {
    id: "mir-2026-149",
    university: "MIR (España)",
    examArea: "TRAUMATOLOGÍA",
    topic: "ROTURA DEL LIGAMENTO CRUZADO ANTERIOR",
    difficulty: "medium",
    tags: ["mir", "espana", "traumatologia"],
    statement:
      "Una jugadora de baloncesto de 23 años sufre un giro de la rodilla con el pie apoyado, nota un «chasquido» y no puede continuar jugando. En pocas horas presenta un derrame articular importante (hemartros). La prueba de Lachman es positiva. ¿Cuál es el diagnóstico más probable y la prueba de imagen de elección?",
    options: [
      { id: "A", label: "A", text: "Rotura del ligamento lateral interno; radiografía simple." },
      { id: "B", label: "B", text: "Luxación de rótula; tomografía computarizada." },
      { id: "C", label: "C", text: "Rotura del ligamento cruzado anterior; resonancia magnética." },
      { id: "D", label: "D", text: "Rotura del ligamento cruzado posterior; ecografía." },
    ],
    correctOptionId: "C",
    explanation:
      "La **rotura del ligamento cruzado anterior (LCA)** se produce típicamente por un **mecanismo de pivotaje** (giro con el pie fijo) en deportes como el fútbol, el baloncesto o el esquí. Se asocia a **chasquido**, **hemartros precoz** e inestabilidad. La exploración más sensible es la **prueba de Lachman** (también el cajón anterior y el pivot shift). La **resonancia magnética** confirma la rotura y detecta lesiones asociadas (meniscos, tríada de O'Donoghue). En pacientes jóvenes y activos suele indicarse la **reconstrucción quirúrgica**.\n\n**TRAMPA DEL EXAMEN:** El **cruzado posterior** se lesiona por traumatismo directo en la cara anterior de la tibia con la rodilla flexionada (salpicadero) y da un **cajón posterior**. El ligamento lateral interno se lesiona por valgo forzado y no suele producir hemartros importante.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., giro, chasquido y rodilla hinchada en pocas horas: piense en el cruzado anterior. El hemartros agudo tras un traumatismo deportivo es LCA en la mayoría de los casos. Lachman para explorar y resonancia para confirmar.",
    keyPoints: [
      "LCA: mecanismo de pivotaje, chasquido, hemartros precoz, inestabilidad.",
      "Exploración más sensible: prueba de Lachman; confirmación con resonancia magnética.",
      "LCP: traumatismo directo con rodilla flexionada, cajón posterior.",
    ],
  },
  {
    id: "mir-2026-150",
    university: "MIR (España)",
    examArea: "TRAUMATOLOGÍA",
    topic: "SÍNDROME DEL TÚNEL CARPIANO",
    difficulty: "easy",
    tags: ["mir", "espana", "traumatologia"],
    statement:
      "Una mujer de 48 años refiere parestesias nocturnas en los dedos pulgar, índice y medio de la mano derecha, que la despiertan y mejoran al sacudir la mano. Las maniobras de Phalen y Tinel son positivas y no hay atrofia muscular. ¿Cuál es el tratamiento inicial más adecuado?",
    options: [
      { id: "A", label: "A", text: "Férula nocturna de muñeca en posición neutra y, si no mejora, infiltración con corticoides." },
      { id: "B", label: "B", text: "Liberación quirúrgica urgente del nervio cubital en el codo." },
      { id: "C", label: "C", text: "Antiepilépticos a dosis altas como primera opción." },
      { id: "D", label: "D", text: "Inmovilización con yeso durante 6 semanas." },
    ],
    correctOptionId: "A",
    explanation:
      "El **síndrome del túnel carpiano** es la neuropatía por atrapamiento más frecuente: compresión del **nervio mediano** en la muñeca, con **parestesias nocturnas** en los tres primeros dedos y mitad radial del cuarto, que mejoran al sacudir la mano. Las maniobras de **Phalen** y **Tinel** apoyan el diagnóstico y el **electromiograma** lo confirma y gradúa. En casos leves-moderados, el tratamiento inicial es **conservador**: **férula nocturna** en posición neutra y, si no mejora, **infiltración con corticoides**. La **cirugía de liberación** se indica si fracasa el tratamiento conservador o hay **atrofia tenar** o déficit motor.\n\n**TRAMPA DEL EXAMEN:** La afectación del **cuarto y quinto dedo** orienta al **nervio cubital**, no al mediano. La inmovilización rígida prolongada no está indicada.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la paciente típica le dirá que se despierta con la mano dormida y que la sacude para que se le pase. Empiece por la férula de noche. Si ve atrofia de la eminencia tenar, no espere: eso indica daño axonal y es criterio quirúrgico.",
    keyPoints: [
      "Túnel carpiano: compresión del mediano; parestesias nocturnas en 1.º-3.er dedos; Phalen y Tinel.",
      "Tratamiento inicial: férula nocturna ± infiltración con corticoides.",
      "Cirugía si fracasa el tratamiento conservador o hay atrofia tenar o déficit motor.",
    ],
  },
];
