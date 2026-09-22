import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #8 (20 sep 2026) · Preguntas #11–#20.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_20_11_20_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-20-11",
    university: "UCC",
    examArea: "MEDICINA INTERNA - GASTROENTEROLOGÍA / HEPATOLOGÍA",
    topic: "Hemorragia Digestiva Alta Variceal",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "hemorragia-digestiva-alta-variceal"],
    statement:
      "Un hombre de 54 años con cirrosis hepática de etiología alcohólica (Child-Pugh B) consulta a urgencias por hematemesis de gran volumen de 2 horas de evolución, acompañada de melenas. Al ingreso se encuentra pálido, diaforético, con PA 82/54 mmHg, FC 128 lpm y Glasgow 14/15 por somnolencia leve. Al examen abdominal hay ascitis moderada y circulación colateral visible en la pared abdominal (\"cabeza de medusa\"). Los laboratorios muestran Hemoglobina 7.2 g/dL, INR 1.6 y plaquetas 88.000/mm³. Se canalizan dos accesos venosos periféricos de grueso calibre y se inicia reposición de volumen con cristaloides. Mientras se coordina la realización de la endoscopia digestiva alta urgente (disponible en aproximadamente 60-90 minutos), ¿cuál es la conducta terapéutica que debe iniciarse de inmediato, antes de la endoscopia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Transfusión masiva de glóbulos rojos empaquetados con meta de Hemoglobina superior a 10 g/dL, iniciada de inmediato.",
        distractorProfile: "overly_aggressive_transfusion_strategy",
        incorrectFeedback:
          "En la hemorragia variceal, transfundir de forma liberal hasta metas altas de hemoglobina eleva la presión portal y el volumen intravascular, aumentando el riesgo de resangrado y de mortalidad. La estrategia recomendada es restrictiva, transfundiendo solo si Hb <7 g/dL (con metas algo más altas si hay inestabilidad hemodinámica persistente o comorbilidad cardiovascular), buscando una Hb objetivo cercana a 7-8 g/dL.",
      },
      {
        id: "B",
        label: "B",
        text: "Colocación inmediata de balón de Sengstaken-Blakemore como primera medida terapéutica, antes de cualquier fármaco vasoactivo.",
        distractorProfile: "premature_invasive_intervention",
        incorrectFeedback:
          "El taponamiento con balón es una medida de rescate temporal (puente a terapia definitiva) reservada para hemorragia variceal masiva y refractaria al tratamiento farmacológico y endoscópico inicial, no una primera línea; usarlo de entrada expone al paciente a riesgo de perforación esofágica y necrosis por presión sin haber intentado antes las medidas estándar, menos invasivas.",
      },
      {
        id: "C",
        label: "C",
        text: "Reanimación hídrica cuidadosa, inicio de un fármaco vasoactivo esplácnico (Terlipresina u Octreotide) y antibioticoterapia profiláctica (Ceftriaxona IV), con transfusión restrictiva guiada por metas.",
      },
      {
        id: "D",
        label: "D",
        text: "Infusión de Inhibidor de Bomba de Protones (IBP) en dosis altas como única medida farmacológica, difiriendo la endoscopia a las 48-72 horas por estabilidad clínica relativa.",
        distractorProfile: "wrong_therapy_for_variceal_etiology",
        incorrectFeedback:
          "El IBP de altas dosis es la estrategia farmacológica para la hemorragia por úlcera péptica, no el pilar del manejo variceal, cuyo fármaco específico es un vasoconstrictor esplácnico. Además, en la hemorragia variceal la endoscopia diagnóstico-terapéutica debe realizarse de forma urgente (idealmente dentro de las primeras 12 horas), no diferirse 48-72 horas.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El paciente cursa con una **Hemorragia Digestiva Alta de origen variceal** en el contexto de cirrosis hepática descompensada, reconocible por los estigmas de hepatopatía crónica (ascitis, circulación colateral, trombocitopenia, coagulopatía) y la hematemesis masiva con inestabilidad hemodinámica. El manejo inicial, antes incluso de la endoscopia, tiene tres pilares simultáneos: (1) reanimación con volumen cuidadosa y **transfusión restrictiva** (Hb objetivo ~7-8 g/dL), evitando la sobrecarga que eleva la presión portal y favorece el resangrado; (2) inicio precoz de un **fármaco vasoactivo esplácnico** (Terlipresina, Octreotide o Somatostatina), que reduce el flujo portal y facilita el control del sangrado incluso antes de la endoscopia; y (3) **antibioticoterapia profiláctica** (típicamente Ceftriaxona IV), ya que la infección bacteriana es frecuente en cirróticos con hemorragia variceal, empeora el pronóstico y su profilaxis ha demostrado reducir la mortalidad y el resangrado. La endoscopia digestiva alta con ligadura de várices o escleroterapia se realiza de forma urgente, idealmente dentro de las primeras 12 horas, una vez el paciente está en reanimación.",
    keyPoints: [
      "Cirrótico con hematemesis/melenas e inestabilidad hemodinámica: pensar siempre en origen variceal y activar el protocolo de hemorragia digestiva alta variceal antes de la endoscopia.",
      "Hemorragia Variceal Aguda: reanimación con transfusión restrictiva (Hb objetivo 7-8 g/dL) + fármaco vasoactivo esplácnico (Terlipresina/Octreotide) + antibiótico profiláctico (Ceftriaxona) de inicio inmediato; endoscopia terapéutica urgente dentro de las primeras 12 horas.",
      "Gastroenterología / Hepatología - Hemorragia Digestiva Alta Variceal.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-12",
    university: "UCC",
    examArea: "MEDICINA INTERNA - GASTROENTEROLOGÍA",
    topic: "Pancreatitis Aguda",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "pancreatitis-aguda"],
    statement:
      "Una mujer de 45 años, sin antecedentes de importancia, consulta por dolor epigástrico intenso, transfictivo hacia la espalda, de 8 horas de evolución, asociado a náuseas y múltiples episodios de vómito. Al examen físico: PA 100/65 mmHg, FC 108 lpm, FR 22 rpm, temperatura 37.8°C, abdomen distendido y doloroso en epigastrio sin claros signos de irritación peritoneal. Los laboratorios muestran Lipasa 1.450 U/L (5 veces el límite superior normal), leucocitos 16.200/mm³, glucosa 145 mg/dL, y una ecografía abdominal que evidencia colelitiasis sin dilatación de la vía biliar. Se confirma el diagnóstico de pancreatitis aguda de origen biliar sin evidencia de colangitis ni obstrucción persistente del colédoco. ¿Cuál es la conducta de manejo inicial MÁS apropiada en las primeras 24-48 horas?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reanimación hídrica agresiva y guiada por metas con Lactato de Ringer, e inicio de vía oral o enteral temprana (dentro de las primeras 24-72 horas) según tolerancia.",
      },
      {
        id: "B",
        label: "B",
        text: "Ayuno absoluto prolongado durante 7 a 10 días con nutrición parenteral total desde el ingreso, para \"dar reposo\" al páncreas.",
        distractorProfile: "outdated_bowel_rest_practice",
        incorrectFeedback:
          "El reposo intestinal prolongado con nutrición parenteral de entrada es una práctica obsoleta: la evidencia actual muestra que la alimentación oral o enteral temprana (según tolerancia, apenas el dolor y las náuseas lo permitan) reduce las complicaciones infecciosas, preserva la integridad de la barrera intestinal y disminuye la estancia hospitalaria en comparación con el ayuno prolongado.",
      },
      {
        id: "C",
        label: "C",
        text: "Inicio de antibioticoterapia profiláctica de amplio espectro de forma sistemática para prevenir la necrosis pancreática infectada.",
        distractorProfile: "unnecessary_prophylactic_antibiotics",
        incorrectFeedback:
          "Los antibióticos profilácticos NO están indicados de rutina en la pancreatitis aguda, incluso en casos con necrosis estéril; su uso indiscriminado no reduce la incidencia de necrosis infectada y favorece resistencia bacteriana e infecciones fúngicas. Se reservan para cuando existe evidencia clara o alta sospecha de necrosis infectada.",
      },
      {
        id: "D",
        label: "D",
        text: "Colangiopancreatografía retrógrada endoscópica (CPRE) urgente dentro de las primeras 24 horas, indicada en todo caso de pancreatitis aguda independientemente de la etiología.",
        distractorProfile: "overgeneralized_indication_for_ercp",
        incorrectFeedback:
          "La CPRE urgente solo está indicada en la pancreatitis aguda biliar cuando hay evidencia de colangitis aguda concomitante u obstrucción biliar persistente/progresiva; en este caso no hay dilatación de la vía biliar ni signos de colangitis, por lo que la CPRE urgente no está indicada y expone innecesariamente a riesgo de pancreatitis post-CPRE.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "La paciente cursa con una **Pancreatitis Aguda de origen biliar** (dolor epigástrico transfictivo + lipasa >3 veces el límite superior normal + colelitiasis en imagen), cumpliendo criterios diagnósticos con al menos 2 de los 3 elementos clásicos (dolor característico, elevación enzimática y/o hallazgos imagenológicos). El manejo inicial de la pancreatitis aguda, independientemente de su severidad, se basa en la **reanimación hídrica agresiva y guiada por metas** (diuresis >0.5 mL/kg/h, disminución de hematocrito y BUN, mejoría de signos vitales) con cristaloides balanceados como el Lactato de Ringer, que ha mostrado ventajas sobre la solución salina normal al reducir el riesgo de inflamación sistémica y acidosis hiperclorémica. El segundo pilar es la **nutrición enteral u oral temprana**, iniciada apenas el paciente tolere, en lugar del ayuno prolongado clásico, ya que mantiene la integridad de la barrera intestinal y reduce la translocación bacteriana y las complicaciones infecciosas. La colecistectomía se programa durante la misma hospitalización una vez resuelto el cuadro agudo (en pancreatitis biliar leve), y la CPRE se reserva para colangitis u obstrucción biliar persistente.",
    keyPoints: [
      "Diagnóstico de pancreatitis aguda: 2 de 3 criterios (dolor típico, lipasa/amilasa >3x LSN, hallazgos imagenológicos compatibles); la etiología biliar se sospecha con colelitiasis en la ecografía.",
      "Pancreatitis Aguda: manejo inicial = reanimación hídrica agresiva guiada por metas con cristaloides balanceados + nutrición enteral/oral temprana. Sin antibiótico profiláctico de rutina. CPRE urgente solo si hay colangitis u obstrucción biliar persistente.",
      "Gastroenterología - Pancreatitis Aguda.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-13",
    university: "UCC",
    examArea: "MEDICINA INTERNA - HEPATOLOGÍA",
    topic: "Encefalopatía Hepática",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "encefalopatia-hepatica"],
    statement:
      "Un hombre de 61 años con cirrosis hepática por hígado graso no alcohólico es traído por su familia debido a confusión progresiva y desorientación de 2 días de evolución. La esposa refiere que hace 4 días el paciente inició un diurético nuevo por edema en piernas y que además ha tenido estreñimiento marcado en la última semana. Al examen físico está desorientado en tiempo, con lenguaje lento, asterixis bilateral presente y sin signos de focalización neurológica. No hay fiebre ni signos de sangrado digestivo. Los laboratorios muestran Sodio 131 mEq/L, Potasio 2.9 mEq/L, creatinina 1.4 mg/dL, sin leucocitosis, y el amonio sérico está elevado. La tomografía cerebral simple es normal. Identificados los probables desencadenantes (hipokalemia por diurético y estreñimiento), ¿cuál es la conducta terapéutica de PRIMERA LÍNEA en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Restricción proteica severa y prolongada de la dieta como pilar principal del tratamiento.",
        distractorProfile: "outdated_protein_restriction",
        incorrectFeedback:
          "La restricción proteica severa y prolongada es una práctica obsoleta que empeora el estado nutricional (ya comprometido en el cirrótico) sin beneficio demostrado sobre el control de la encefalopatía; las guías actuales recomiendan mantener un aporte proteico adecuado (1.2-1.5 g/kg/día), priorizando fuentes vegetales/lácteas si hay intolerancia, en lugar de restringir.",
      },
      {
        id: "B",
        label: "B",
        text: "Tomografía cerebral contrastada y punción lumbar urgentes como primer paso obligatorio antes de iniciar cualquier tratamiento.",
        distractorProfile: "unnecessary_imaging_delay",
        incorrectFeedback:
          "En un cirrótico conocido, sin fiebre, sin focalización neurológica y con un desencadenante claro identificado (hipokalemia por diurético + estreñimiento), no es necesario retrasar el tratamiento con estudios adicionales de neuroimagen contrastada o punción lumbar; estos se reservan para cuando hay dudas diagnósticas, focalización neurológica o sospecha de otra causa.",
      },
      {
        id: "C",
        label: "C",
        text: "Benzodiazepinas para el manejo de la agitación y la confusión del paciente.",
        distractorProfile: "contraindicated_sedative_class",
        incorrectFeedback:
          "Las benzodiazepinas deben evitarse en la encefalopatía hepática (salvo que exista abstinencia alcohólica concomitante), ya que su metabolismo hepático alterado prolonga su efecto sedante y pueden precipitar o agravar la encefalopatía en lugar de tratarla.",
      },
      {
        id: "D",
        label: "D",
        text: "Corregir el desencadenante identificado (reponer potasio, suspender/ajustar el diurético) e iniciar Lactulosa oral o por sonda, titulada hasta lograr 2-3 deposiciones blandas al día.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El paciente cursa con una **Encefalopatía Hepática** precipitada por hipokalemia inducida por diuréticos y estreñimiento, dos de los desencadenantes más frecuentes (junto con infecciones, hemorragia digestiva, deshidratación y sobrecarga proteica). El manejo de primera línea combina dos acciones simultáneas e indispensables: **identificar y corregir el o los factores precipitantes** (en este caso, reponer el potasio y ajustar o suspender el diurético causante de la hipokalemia, que favorece la producción renal de amonio) y **disminuir la carga de amonio intestinal** mediante **Lactulosa**, un disacárido no absorbible que acidifica la luz colónica (convirtiendo el amonio en amonio ionizado, menos absorbible) y actúa como laxante osmótico, titulada hasta lograr 2-3 deposiciones blandas al día. La Rifaximina se añade típicamente como profilaxis secundaria o en casos refractarios a la lactulosa sola. La neuroimagen y la punción lumbar solo se justifican cuando hay dudas diagnósticas, focalización o fiebre, y la restricción proteica severa y las benzodiazepinas están contraindicadas.",
    keyPoints: [
      "Cirrótico con confusión/asterixis: buscar siempre el desencadenante (infección, sangrado digestivo, estreñimiento, hipokalemia/diuréticos, deshidratación, sedantes) antes o junto con el tratamiento específico.",
      "Encefalopatía Hepática: tratamiento de primera línea = corregir el desencadenante + Lactulosa oral/por sonda titulada a 2-3 deposiciones blandas/día. Evitar restricción proteica severa y benzodiazepinas.",
      "Hepatología - Encefalopatía Hepática.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-14",
    university: "UCC",
    examArea: "MEDICINA INTERNA - REUMATOLOGÍA / NEFROLOGÍA",
    topic: "Nefritis Lúpica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "nefritis-lupica"],
    statement:
      "Una mujer de 24 años, con diagnóstico de Lupus Eritematoso Sistémico hace 3 años (ANA positivo, artritis, eritema malar), en tratamiento con Hidroxicloroquina, consulta por edema progresivo en miembros inferiores y orina espumosa de 3 semanas de evolución. Al examen físico hay edema bilateral con fóvea y PA 148/92 mmHg. Los laboratorios muestran creatinina 1.3 mg/dL (previa de 0.8 mg/dL), proteinuria en orina de 24 horas de 3.8 g, hematuria microscópica con cilindros hemáticos en el sedimento, complemento C3 y C4 disminuidos, y anti-DNA de doble cadena marcadamente elevado. Una biopsia renal confirma Nefritis Lúpica Clase IV (proliferativa difusa) con actividad importante. Además de continuar la Hidroxicloroquina, ¿cuál es la conducta terapéutica de INDUCCIÓN más apropiada en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Continuar únicamente con Hidroxicloroquina en dosis optimizada, considerando que ya forma parte del tratamiento basal del lupus.",
        distractorProfile: "insufficient_monotherapy",
        incorrectFeedback:
          "La Hidroxicloroquina es un pilar de base en todo paciente con LES y debe mantenerse, pero es insuficiente como monoterapia para una nefritis lúpica proliferativa activa (Clase IV); sin inmunosupresión de inducción, la enfermedad progresa hacia daño renal irreversible y enfermedad renal terminal.",
      },
      {
        id: "B",
        label: "B",
        text: "Glucocorticoides sistémicos en dosis alta (o pulsos de Metilprednisolona IV) asociados a terapia de inducción inmunosupresora con Micofenolato de Mofetilo (o Ciclofosfamida en esquema de dosis bajas tipo Euro-Lupus).",
      },
      {
        id: "C",
        label: "C",
        text: "Manejo sintomático con antiinflamatorios no esteroideos para el edema y control del dolor, difiriendo la inmunosupresión hasta repetir la biopsia renal en 6 meses.",
        distractorProfile: "dangerous_delay_of_immunosuppression",
        incorrectFeedback:
          "Diferir la inmunosupresión en una nefritis lúpica proliferativa activa y confirmada por biopsia permite la progresión del daño glomerular hacia fibrosis irreversible y pérdida de función renal; además, los AINE pueden empeorar la función renal en este contexto. La inducción inmunosupresora debe iniciarse sin demora una vez confirmada la Clase IV activa.",
      },
      {
        id: "D",
        label: "D",
        text: "Inicio inmediato de terapia de reemplazo renal (hemodiálisis) como primera medida, independientemente de la función renal actual.",
        distractorProfile: "premature_renal_replacement_therapy",
        incorrectFeedback:
          "La paciente aún conserva función renal relativamente preservada (creatinina 1.3 mg/dL) sin criterios de urgencia dialítica (hiperkalemia refractaria, sobrecarga de volumen grave, uremia sintomática o acidosis severa); la diálisis de inicio inmediato es una intervención prematura e innecesaria cuando el tratamiento inmunosupresor puede aún revertir la actividad renal.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La paciente cursa con **Nefritis Lúpica Clase IV (proliferativa difusa)**, la forma más agresiva y de peor pronóstico de afectación renal en el Lupus Eritematoso Sistémico, evidenciada por el síndrome nefrítico-nefrótico mixto (proteinuria en rango nefrótico, hematuria con cilindros hemáticos, deterioro de la función renal), consumo de complemento (C3/C4 bajos) y anti-DNA elevado (marcadores de actividad lúpica), confirmada histológicamente. El tratamiento de **inducción** estándar combina **glucocorticoides sistémicos en dosis alta** (pulsos de Metilprednisolona IV seguidos de Prednisona oral en descenso) con un **agente inmunosupresor de inducción**: **Micofenolato de Mofetilo** o **Ciclofosfamida** (en esquema de dosis bajas tipo Euro-Lupus, que reduce la toxicidad gonadal e infecciosa manteniendo eficacia similar al esquema clásico del NIH), ambos con eficacia comparable según la evidencia actual. La Hidroxicloroquina debe mantenerse siempre como terapia de base en todo paciente con LES, ya que reduce brotes y protege contra daño de órgano, pero no sustituye la inmunosupresión de inducción en nefritis proliferativa activa.",
    keyPoints: [
      "LES con proteinuria significativa, hematuria con cilindros hemáticos, deterioro de función renal, consumo de complemento y anti-DNA elevado: sospechar nefritis lúpica y confirmar con biopsia renal.",
      "Nefritis Lúpica Clase IV (proliferativa difusa): inducción con Glucocorticoides en dosis alta + Micofenolato de Mofetilo o Ciclofosfamida (esquema Euro-Lupus); mantener siempre Hidroxicloroquina de base.",
      "Reumatología / Nefrología - Nefritis Lúpica.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-15",
    university: "UCC",
    examArea: "MEDICINA INTERNA - REUMATOLOGÍA / ORTOPEDIA",
    topic: "Artritis Séptica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "artritis-septica"],
    statement:
      "Un hombre de 58 años, con antecedente de diabetes mellitus tipo 2 mal controlada, consulta por dolor intenso, calor y aumento de volumen en la rodilla derecha de 36 horas de evolución, asociado a fiebre de 38.6°C. Refiere que no ha tenido trauma previo. Al examen físico la rodilla está eritematosa, caliente, con derrame articular evidente, y el paciente presenta dolor severo e incapacidad para tolerar cualquier movimiento pasivo de la articulación. No hay lesiones cutáneas suprayacentes ni puerta de entrada evidente. Los laboratorios muestran leucocitos 15.800/mm³, PCR marcadamente elevada y VSG 80 mm/h. El paciente se encuentra hemodinámicamente estable, sin signos de sepsis grave. Ante la alta sospecha de artritis séptica, ¿cuál es el paso diagnóstico MÁS urgente e indispensable antes de iniciar el tratamiento antibiótico empírico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Resonancia magnética de la rodilla como primer paso, para caracterizar la extensión del compromiso articular y periarticular.",
        distractorProfile: "unnecessary_imaging_delay",
        incorrectFeedback:
          "La resonancia magnética puede ser útil en casos dudosos o para evaluar complicaciones (osteomielitis contigua, colecciones periarticulares), pero no es el primer paso ante alta sospecha de artritis séptica; solicitarla de entrada retrasa la artrocentesis diagnóstica y el inicio oportuno del tratamiento, mientras el cartílago articular sigue siendo destruido por la infección activa.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar antibioticoterapia empírica de amplio espectro de inmediato, sin obtener previamente líquido sinovial, para no retrasar el tratamiento.",
        distractorProfile: "antibiotics_before_culture_sampling",
        incorrectFeedback:
          "Administrar antibióticos antes de obtener líquido sinovial (salvo que el paciente esté en shock séptico que no permita ningún retraso) reduce drásticamente el rendimiento del Gram y el cultivo, dificultando identificar el microorganismo causal y ajustar la terapia dirigida; en un paciente estable, la artrocentesis diagnóstica debe realizarse antes o, como máximo, simultáneamente al inicio del antibiótico.",
      },
      {
        id: "C",
        label: "C",
        text: "Artrocentesis diagnóstica urgente con análisis del líquido sinovial (recuento celular con diferencial, tinción de Gram y cultivo) antes de iniciar el antibiótico.",
      },
      {
        id: "D",
        label: "D",
        text: "Radiografía simple de rodilla, suficiente por sí sola para confirmar o descartar el diagnóstico de artritis séptica.",
        distractorProfile: "insufficient_diagnostic_modality",
        incorrectFeedback:
          "La radiografía simple suele ser normal en las primeras etapas de la artritis séptica (solo muestra aumento de partes blandas o derrame) y no permite confirmarla ni descartarla; el diagnóstico de certeza requiere el análisis del líquido sinovial obtenido por artrocentesis.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El cuadro es altamente sugestivo de **Artritis Séptica**, una urgencia reumatológica-ortopédica en la que cada hora de retraso diagnóstico-terapéutico incrementa el riesgo de destrucción irreversible del cartílago articular y osteomielitis contigua. Ante la sospecha clínica (monoartritis aguda, dolor severo con la movilización, fiebre y reactantes de fase aguda elevados, más aún en un paciente diabético con mayor susceptibilidad), el paso diagnóstico **MÁS urgente e indispensable** es la **artrocentesis con análisis del líquido sinovial**: recuento celular con diferencial (típicamente >50.000 células/mm³ con predominio de polimorfonucleares en artritis séptica), tinción de Gram y cultivo, que permiten confirmar el diagnóstico e identificar el microorganismo causal (con frecuencia *Staphylococcus aureus*). Esta muestra debe obtenerse **antes** de iniciar el antibiótico empírico siempre que el paciente esté hemodinámicamente estable, ya que la antibioticoterapia previa reduce significativamente el rendimiento del cultivo sin justificar el retraso de minutos que toma realizar el procedimiento. Una vez tomada la muestra, se inicia sin demora el antibiótico empírico y se coordina el drenaje articular (por artroscopia o lavado quirúrgico) según la articulación afectada.",
    keyPoints: [
      "Monoartritis aguda con fiebre, dolor severo a la movilización y reactantes de fase aguda elevados en un paciente con factores de riesgo (diabetes, edad avanzada, artropatía previa): sospechar artritis séptica.",
      "Artritis Séptica: la artrocentesis diagnóstica (recuento celular, Gram, cultivo) debe realizarse ANTES del antibiótico empírico si el paciente está estable; luego, inicio inmediato de antibiótico y valoración de drenaje articular quirúrgico.",
      "Reumatología / Ortopedia - Artritis Séptica.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-16",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUROLOGÍA / URGENCIAS",
    topic: "ACV Isquémico Agudo",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "acv-isquemico-agudo"],
    statement:
      "Una mujer de 70 años, hipertensa, es llevada a urgencias por su hija tras notar que hace 2 horas la paciente comenzó súbitamente con debilidad del hemicuerpo izquierdo y dificultad para hablar mientras desayunaban. Al ingreso: PA 172/98 mmHg, FC 84 lpm, Glasgow 14/15, con hemiparesia izquierda de predominio faciobraquial (fuerza 2/5) y disartria marcada, NIHSS de 14 puntos. No hay antecedente de sangrado reciente, cirugía mayor, trauma craneoencefálico ni uso de anticoagulantes. La tomografía cerebral simple no muestra hemorragia ni signos tempranos extensos de isquemia establecida. Los laboratorios básicos, incluyendo glucemia y plaquetas, son normales. Confirmada la ausencia de contraindicaciones y estando la paciente dentro de la ventana terapéutica, ¿cuál es la conducta MÁS apropiada en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Trombólisis intravenosa con Alteplasa (o Tenecteplasa) de inmediato, dado que la paciente está dentro de la ventana de 4.5 horas sin contraindicaciones, evaluando en paralelo criterios de oclusión de gran vaso para trombectomía mecánica.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar una resonancia magnética cerebral con secuencias de difusión para confirmar el infarto antes de considerar la trombólisis.",
        distractorProfile: "unnecessary_imaging_delay",
        incorrectFeedback:
          "En el ACV isquémico agudo, la tomografía simple de cráneo (sin contraste) es suficiente y es el estudio estándar para descartar hemorragia antes de trombolizar; esperar una resonancia magnética retrasa innecesariamente el tratamiento en un cuadro extremadamente tiempo-dependiente (\"tiempo es cerebro\"), reduciendo la eficacia de la trombólisis con cada minuto perdido.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar anticoagulación plena con Heparina no fraccionada IV de inmediato en lugar de trombólisis, para prevenir la extensión del trombo.",
        distractorProfile: "contraindicated_anticoagulation",
        incorrectFeedback:
          "La anticoagulación plena no está indicada en el manejo agudo del ACV isquémico (aumenta significativamente el riesgo de transformación hemorrágica sin beneficio demostrado en este contexto) y de ninguna manera sustituye a la trombólisis, que es el tratamiento con evidencia de mejorar el desenlace funcional cuando se administra dentro de la ventana.",
      },
      {
        id: "D",
        label: "D",
        text: "Control estricto e inmediato de la presión arterial por debajo de 140/90 mmHg antes de cualquier otra medida terapéutica.",
        distractorProfile: "overaggressive_bp_lowering",
        incorrectFeedback:
          "Antes de trombolizar se permite hipertensión permisiva hasta 185/110 mmHg (solo se baja si supera ese umbral, con fármacos de acción corta); descender la presión arterial de forma agresiva por debajo de metas normales puede reducir la presión de perfusión de la zona de penumbra isquémica y empeorar el déficit neurológico.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "La paciente presenta un **Accidente Cerebrovascular (ACV) Isquémico Agudo** con déficit focal de inicio súbito (hemiparesia faciobraquial izquierda, disartria) y un NIHSS significativo, con hora de inicio conocida (2 horas), lo que la ubica claramente dentro de la **ventana de 4.5 horas para trombólisis intravenosa** con Alteplasa o Tenecteplasa, siempre que se haya descartado hemorragia (tomografía simple, no contrastada, es suficiente) y no existan otras contraindicaciones (cirugía reciente, sangrado activo, anticoagulación terapéutica, plaquetopenia severa, entre otras). El principio rector es \"**tiempo es cerebro**\": cada minuto de retraso implica pérdida de tejido neuronal potencialmente salvable, por lo que el tratamiento no debe esperar estudios adicionales innecesarios como la resonancia magnética. De forma paralela (sin retrasar la trombólisis), debe evaluarse la presencia de oclusión de gran vaso mediante angio-TAC, ya que estos pacientes son candidatos adicionales a **trombectomía mecánica**, que puede realizarse hasta 24 horas del inicio de los síntomas en pacientes seleccionados por criterios de imagen (núcleo isquémico pequeño con penumbra rescatable).",
    keyPoints: [
      "Déficit neurológico focal de inicio súbito con hora de inicio conocida: descartar hemorragia con TAC simple y evaluar de inmediato criterios de trombólisis IV (ventana 4.5h) y trombectomía mecánica (ventana hasta 24h si hay oclusión de gran vaso y perfil de imagen favorable).",
      "ACV Isquémico Agudo: trombólisis IV inmediata si no hay contraindicaciones y está en ventana; permitir hipertensión hasta 185/110 mmHg antes de trombolizar; NO anticoagular de forma aguda ni retrasar el tratamiento esperando resonancia magnética.",
      "Neurología - ACV Isquémico Agudo / Ventana de Trombólisis y Trombectomía.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-17",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUROLOGÍA / CUIDADO CRÍTICO",
    topic: "Estado Epiléptico",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "estado-epileptico"],
    statement:
      "Un hombre de 38 años, con epilepsia focal conocida en tratamiento irregular con Levetiracetam, es llevado a urgencias por una crisis convulsiva tónico-clónica generalizada que, según los paramédicos, inició hace 25 minutos y no ha cedido espontáneamente. En la ambulancia recibió dos dosis adecuadas de Lorazepam IV (0.1 mg/kg en total, administradas correctamente y con el intervalo adecuado), sin respuesta: el paciente continúa con actividad convulsiva generalizada al llegar a urgencias. Se confirma vía aérea permeable, saturación de oxígeno 94% con oxígeno suplementario, glucometría normal y no hay signos de trauma craneoencefálico asociado. ¿Cuál es el siguiente paso MÁS apropiado en el manejo escalonado de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar dosis adicionales repetidas de benzodiazepina de forma indefinida hasta lograr el control de la crisis.",
        distractorProfile: "repeating_ineffective_firstline_therapy",
        incorrectFeedback:
          "Las benzodiazepinas tienen un efecto techo y, tras dos dosis adecuadas sin respuesta, insistir con más dosis no mejora el control de la crisis y sí aumenta significativamente el riesgo de depresión respiratoria y sedación excesiva sin beneficio adicional; el protocolo indica avanzar al siguiente escalón terapéutico.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar directamente anestesia general con infusión de Propofol e intubación orotraqueal, omitiendo el uso de un antiepiléptico de segunda línea.",
        distractorProfile: "premature_escalation_skipping_step",
        incorrectFeedback:
          "La inducción de coma farmacológico con anestésicos (Propofol, Midazolam en infusión o Pentobarbital) se reserva para el estado epiléptico refractario, es decir, cuando la crisis persiste a pesar de una benzodiazepina Y un antiepiléptico de segunda línea en dosis adecuadas; saltarse este segundo escalón expone al paciente a los riesgos de la sedación profunda y la ventilación mecánica de forma prematura.",
      },
      {
        id: "C",
        label: "C",
        text: "Suspender todo tratamiento farmacológico y solicitar un electroencefalograma urgente antes de continuar cualquier intervención.",
        distractorProfile: "dangerous_delay_seeking_confirmation",
        incorrectFeedback:
          "El estado epiléptico convulsivo con actividad tónico-clónica evidente es un diagnóstico clínico que no requiere electroencefalograma para iniciar tratamiento; suspender la terapia farmacológica mientras se coordina un EEG permite que la actividad convulsiva continúe, con el consiguiente daño neuronal progresivo por excitotoxicidad.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar un antiepiléptico de segunda línea por vía intravenosa (Levetiracetam, Fosfenitoína o Ácido Valproico) de inmediato.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El paciente cursa con un **Estado Epiléptico Convulsivo** (actividad convulsiva continua o crisis recurrentes sin recuperación de la conciencia entre ellas, de más de 5 minutos de duración), que ya ha fallado al primer escalón terapéutico: dos dosis adecuadas de benzodiazepina (Lorazepam) sin control de la crisis. Según el manejo escalonado estandarizado, el siguiente paso es la administración de un **antiepiléptico de segunda línea por vía intravenosa**: **Levetiracetam, Fosfenitoína (o Fenitoína) o Ácido Valproico**, todos con eficacia similar según la evidencia actual (ensayo ESETT), por lo que la elección depende del perfil de seguridad y comorbilidades del paciente. Solo si la crisis persiste a pesar de este segundo escalón en dosis adecuadas se define como **estado epiléptico refractario**, y se procede al tercer escalón: inducción de coma farmacológico con anestésicos en infusión continua (Propofol, Midazolam) bajo monitoreo con electroencefalograma continuo e intubación orotraqueal.",
    keyPoints: [
      "Estado epiléptico: manejo escalonado estricto por tiempo — 1) Benzodiazepina IV (Lorazepam o equivalente) en los primeros minutos; 2) si no cede, antiepiléptico de segunda línea IV (Levetiracetam/Fosfenitoína/Valproato); 3) si persiste (refractario), anestesia general con Propofol/Midazolam e intubación.",
      "Estado Epiléptico Convulsivo: tras fallo de benzodiazepina en dosis adecuada, el siguiente paso obligatorio es un antiepiléptico de segunda línea IV, sin saltar directamente a la anestesia general ni retrasar el tratamiento buscando confirmación electroencefalográfica.",
      "Neurología - Estado Epiléptico / Manejo Escalonado.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-18",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUROLOGÍA / CUIDADO CRÍTICO",
    topic: "Síndrome de Guillain-Barré",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "sindrome-guillain-barre"],
    statement:
      "Un hombre de 32 años consulta por debilidad progresiva y ascendente en ambas piernas de 4 días de evolución, que en las últimas 24 horas ha comenzado a comprometer los miembros superiores, asociada a parestesias distales simétricas. Refiere un episodio de diarrea acuosa hace 2 semanas que resolvió espontáneamente. Al examen físico hay debilidad simétrica de predominio proximal en las cuatro extremidades (fuerza 3/5), arreflexia generalizada, y sensibilidad relativamente conservada. No hay compromiso de pares craneales en este momento. Una punción lumbar muestra disociación albúmino-citológica (proteínas elevadas con celularidad normal), compatible con el diagnóstico de Síndrome de Guillain-Barré. El paciente está hemodinámicamente estable y actualmente sin dificultad respiratoria evidente. ¿Cuál es el parámetro MÁS apropiado para el monitoreo seriado del riesgo de falla respiratoria inminente en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Vigilancia exclusiva mediante oximetría de pulso (saturación de oxígeno) continua, considerándola suficiente para detectar deterioro respiratorio temprano.",
        distractorProfile: "late_marker_of_respiratory_failure",
        incorrectFeedback:
          "La saturación de oxígeno se mantiene frecuentemente normal hasta etapas muy tardías en la falla respiratoria neuromuscular, ya que el paciente puede compensar con taquipnea hasta fatigarse súbitamente; confiar solo en la oximetría retrasa el reconocimiento del deterioro y puede llevar a una intubación de emergencia en lugar de una electiva y controlada.",
      },
      {
        id: "B",
        label: "B",
        text: "Medición seriada de la Capacidad Vital Forzada (CVF) y la Fuerza Inspiratoria Negativa (NIF), considerando la intubación electiva si la CVF cae por debajo de 15-20 mL/kg o desciende rápidamente, sin esperar hipoxemia.",
      },
      {
        id: "C",
        label: "C",
        text: "Inicio de corticosteroides sistémicos en dosis altas como tratamiento modificador de la enfermedad de primera línea.",
        distractorProfile: "ineffective_therapy_for_this_disease",
        incorrectFeedback:
          "A diferencia de otras neuropatías inflamatorias como la polineuropatía desmielinizante inflamatoria crónica (CIDP), los corticosteroides NO han demostrado beneficio en el Síndrome de Guillain-Barré y no se recomiendan como tratamiento; las terapias de primera línea con eficacia demostrada son la Inmunoglobulina IV o la Plasmaféresis.",
      },
      {
        id: "D",
        label: "D",
        text: "Esperar a que el paciente presente disnea franca o hipoxemia evidente antes de considerar cualquier manejo de la vía aérea.",
        distractorProfile: "waiting_for_late_clinical_sign",
        incorrectFeedback:
          "En el Guillain-Barré, la debilidad de los músculos respiratorios puede progresar rápidamente a insuficiencia ventilatoria sin que el paciente refiera disnea marcada (por la propia debilidad muscular) y antes de que aparezca hipoxemia franca; esperar estos signos tardíos aumenta el riesgo de requerir una intubación de urgencia en condiciones subóptimas.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El paciente cursa con un **Síndrome de Guillain-Barré**, una polirradiculoneuropatía autoinmune desmielinizante aguda, frecuentemente precedida por una infección gastrointestinal o respiratoria (en este caso, un cuadro diarreico compatible con *Campylobacter jejuni*, el desencadenante infeccioso más frecuentemente asociado), que se manifiesta con debilidad ascendente y simétrica, arreflexia y disociación albúmino-citológica en el líquido cefalorraquídeo. La complicación más temida a corto plazo es la **falla respiratoria neuromuscular** por compromiso de los músculos diafragmático e intercostales, la cual puede instaurarse de forma rápida e impredecible. Por esta razón, el monitoreo NO debe basarse en la oximetría de pulso ni en la aparición de disnea (marcadores tardíos, ya que el paciente puede mantener saturación normal hasta el colapso ventilatorio), sino en la **medición seriada de la Capacidad Vital Forzada (CVF) y la Fuerza Inspiratoria Negativa (NIF)**, parámetros que reflejan directamente la fuerza de los músculos respiratorios. La llamada \"regla del 20/30/40\" orienta la intubación electiva ante CVF <15-20 mL/kg, NIF menos negativa que -30 cmH2O, o presión espiratoria positiva máxima <40 cmH2O, permitiendo anticipar la falla respiratoria antes de que se convierta en una emergencia. El tratamiento modificador de la enfermedad de elección es la Inmunoglobulina IV o la Plasmaféresis, no los corticosteroides.",
    keyPoints: [
      "Debilidad ascendente simétrica + arreflexia + antecedente de infección reciente (diarreica o respiratoria) + disociación albúmino-citológica en LCR: cuadro característico de Síndrome de Guillain-Barré.",
      "Guillain-Barré: monitoreo respiratorio con CVF y NIF seriadas (no solo oximetría ni esperar disnea); tratamiento de primera línea = Inmunoglobulina IV o Plasmaféresis (los corticosteroides NO son eficaces en esta entidad).",
      "Neurología - Síndrome de Guillain-Barré / Monitoreo Respiratorio.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-19",
    university: "UCC",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA / NEUROCIRUGÍA",
    topic: "Meningitis Bacteriana Asociada a Dispositivo Neuroquirúrgico",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "meningitis-bacteriana-neuroquirurgica"],
    statement:
      "Un hombre de 46 años, portador de una derivación ventrículo-peritoneal (DVP) colocada hace 12 días por hidrocefalia secundaria a una hemorragia subaracnoidea, es traído a urgencias por fiebre de 38.9°C, cefalea intensa y deterioro progresivo del estado de conciencia en las últimas 12 horas. Al examen hay rigidez de nuca leve y el trayecto subcutáneo del catéter está levemente eritematoso, sin secreción purulenta evidente. Se realiza una punción del reservorio de la derivación, obteniéndose líquido cefalorraquídeo turbio con pleocitosis de predominio neutrofílico, glucorraquia baja y proteínas elevadas; se toman muestras para Gram y cultivo. A diferencia del esquema empírico estándar para meningitis bacteriana adquirida en la comunidad, ¿cuál es la conducta MÁS apropiada en este paciente dado el contexto de infección asociada a dispositivo neuroquirúrgico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Mantener el esquema empírico comunitario estándar de Ceftriaxona más Vancomicina, sin modificaciones adicionales ni considerar el manejo del dispositivo.",
        distractorProfile: "inadequate_coverage_for_nosocomial_pathogens",
        incorrectFeedback:
          "La Ceftriaxona no cubre de forma confiable bacilos gramnegativos nosocomiales como *Pseudomonas aeruginosa*, microorganismos relevantes en las infecciones asociadas a derivaciones de LCR; además, cuando el propio dispositivo es la fuente de la infección, mantenerlo sin valorar su retiro o externalización perpetúa el foco infeccioso pese al tratamiento antibiótico.",
      },
      {
        id: "B",
        label: "B",
        text: "Agregar Ampicilina al esquema como medida prioritaria, asumiendo que Listeria monocytogenes es el patógeno más probable en este contexto.",
        distractorProfile: "wrong_pathogen_prioritized_for_context",
        incorrectFeedback:
          "La cobertura para Listeria monocytogenes con Ampicilina es relevante en meningitis comunitaria de pacientes mayores de 50 años, inmunosuprimidos, embarazadas o neonatos (por vía de diseminación gastrointestinal/hematógena), pero no es el patógeno prioritario en la meningitis asociada a dispositivo neuroquirúrgico, cuyo origen habitual es la flora cutánea (estafilococos) inoculada durante la colocación o por el trayecto del catéter.",
      },
      {
        id: "C",
        label: "C",
        text: "Ampliar la cobertura empírica a Vancomicina más un betalactámico con actividad antipseudomónica (Cefepime o Meropenem), cubriendo estafilococos (incluido SARM) y bacilos gramnegativos nosocomiales, y valorar de forma urgente el retiro o la externalización del dispositivo.",
      },
      {
        id: "D",
        label: "D",
        text: "Suspender cualquier antibiótico y esperar el resultado del cultivo del líquido cefalorraquídeo antes de iniciar tratamiento dirigido.",
        distractorProfile: "dangerous_delay_seeking_confirmation",
        incorrectFeedback:
          "El cultivo del LCR puede tardar 48-72 horas o más en arrojar resultados definitivos; en un paciente con deterioro neurológico progresivo y meningitis asociada a dispositivo, retrasar el inicio de antibiótico empírico mientras se esperan los cultivos aumenta significativamente el riesgo de mortalidad y de secuelas neurológicas irreversibles.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El paciente cursa con una **Meningitis Bacteriana Asociada a Dispositivo Neuroquirúrgico** (infección de derivación ventrículo-peritoneal), una entidad con un espectro microbiológico distinto al de la meningitis bacteriana comunitaria típica. En este contexto, los patógenos predominantes son los que colonizan la piel e ingresan durante la colocación o a través del trayecto subcutáneo del catéter: **estafilococos coagulasa-negativos y *Staphylococcus aureus*** (incluyendo cepas resistentes a meticilina, SARM), además de **bacilos gramnegativos nosocomiales**, entre ellos *Pseudomonas aeruginosa*, que no está cubierta por la Ceftriaxona del esquema comunitario estándar. Por ello, el esquema empírico debe ampliarse a **Vancomicina (cobertura de estafilococos, incluido SARM) más un betalactámico con actividad antipseudomónica** como **Cefepime o Meropenem** (en lugar de Ceftriaxona), ajustándose posteriormente según el resultado del Gram y cultivo. Igualmente indispensable es la **valoración neuroquirúrgica urgente para el retiro o externalización del dispositivo infectado**, ya que mientras el catéter contaminado permanezca en su sitio (frecuentemente colonizado por biopelícula bacteriana), la infección tiende a persistir a pesar de un tratamiento antibiótico adecuado.",
    keyPoints: [
      "Paciente portador de derivación de LCR (DVP u otro dispositivo neuroquirúrgico) con fiebre, cefalea y deterioro neurológico: sospechar meningitis/ventriculitis asociada al dispositivo, con espectro microbiológico distinto (estafilococos y gramnegativos nosocomiales, no el perfil comunitario típico).",
      "Meningitis Asociada a Dispositivo Neuroquirúrgico: esquema empírico = Vancomicina + Cefepime o Meropenem (cobertura antipseudomónica), más valoración urgente de retiro/externalización del dispositivo; nunca retrasar el antibiótico esperando cultivos.",
      "Infectología - Meningitis Bacteriana Asociada a Dispositivo Neuroquirúrgico.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-20",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CUIDADO CRÍTICO / NEUMOLOGÍA",
    topic: "Síndrome de Dificultad Respiratoria Aguda (SDRA)",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "sdra"],
    statement:
      "Una mujer de 52 años ingresa a la unidad de cuidados intensivos por neumonía adquirida en la comunidad complicada con sepsis. A las 48 horas de hospitalización presenta empeoramiento súbito de la disnea con hipoxemia refractaria a oxígeno suplementario, requiriendo intubación orotraqueal y ventilación mecánica. La radiografía de tórax muestra infiltrados bilaterales difusos. Con parámetros ventilatorios de FiO2 60% y PEEP 8 cmH2O, la gasometría arterial reporta PaO2 de 78 mmHg (relación PaO2/FiO2 de 130). El ecocardiograma descarta disfunción ventricular izquierda significativa como causa del edema pulmonar, y no hay evidencia de sobrecarga de volumen. Cumpliendo criterios de Berlín para Síndrome de Dificultad Respiratoria Aguda (SDRA) moderado, ¿cuál es la estrategia ventilatoria MÁS apropiada para esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ventilación mecánica protectora con volumen corriente bajo (6 mL/kg de peso corporal predicho), manteniendo presión meseta menor a 30 cmH2O, con PEEP titulado según la severidad, y considerando posición prono si la hipoxemia se vuelve refractaria (PaO2/FiO2 <150).",
      },
      {
        id: "B",
        label: "B",
        text: "Utilizar volumen corriente alto (10-12 mL/kg de peso corporal predicho) para mejorar más rápidamente la oxigenación y facilitar el reclutamiento alveolar.",
        distractorProfile: "harmful_high_tidal_volume_strategy",
        incorrectFeedback:
          "El volumen corriente alto sobredistiende los alvéolos ya comprometidos, generando lesión pulmonar inducida por el ventilador (volutrauma y barotrauma) y aumentando la mortalidad, tal como demostró el ensayo ARDSnet; la estrategia protectora con volumen corriente bajo (6 mL/kg) es la que ha demostrado reducir la mortalidad en el SDRA.",
      },
      {
        id: "C",
        label: "C",
        text: "Diuréticos en dosis altas y restricción hídrica extrema como intervención principal y suficiente, sin necesidad de ajustar la estrategia ventilatoria.",
        distractorProfile: "adjunct_therapy_mistaken_for_primary_therapy",
        incorrectFeedback:
          "Una estrategia de manejo conservador de líquidos puede ser un complemento razonable una vez resuelto el choque (para no perpetuar el edema pulmonar), pero nunca sustituye a la ventilación mecánica protectora, que es la intervención con mayor impacto demostrado sobre la mortalidad en el SDRA; además, en esta paciente no hay evidencia de sobrecarga de volumen que justifique diuréticos agresivos.",
      },
      {
        id: "D",
        label: "D",
        text: "Corticosteroides sistémicos en dosis altas de forma rutinaria en todo paciente con SDRA, independientemente del tiempo de evolución o la causa subyacente.",
        distractorProfile: "unproven_routine_therapy",
        incorrectFeedback:
          "El uso de corticosteroides en el SDRA no está indicado de forma rutinaria en todos los pacientes; su papel es selectivo y controvertido según el contexto clínico y el tiempo de evolución, y de ninguna manera reemplaza a la ventilación mecánica protectora, que es la piedra angular del tratamiento con beneficio consistente en mortalidad.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "La paciente cursa con un **Síndrome de Dificultad Respiratoria Aguda (SDRA)** de causa pulmonar (neumonía), cumpliendo los criterios de Berlín: inicio agudo (dentro de una semana de un evento clínico conocido), infiltrados bilaterales en la radiografía no explicados completamente por derrame, colapso lobar/pulmonar o nódulos, y falla respiratoria no explicada completamente por insuficiencia cardíaca o sobrecarga de volumen (descartada aquí por ecocardiograma), con una relación PaO2/FiO2 de 130 con PEEP ≥5 cmH2O, lo que corresponde a SDRA de severidad **moderada** (PaO2/FiO2 entre 100 y 200). La piedra angular del tratamiento, con el impacto más consistente demostrado sobre la mortalidad, es la **ventilación mecánica protectora**: volumen corriente bajo (**6 mL/kg de peso corporal predicho**, calculado según talla y sexo, no peso real), manteniendo la **presión meseta por debajo de 30 cmH2O** para limitar el volutrauma y el barotrauma, con un **PEEP** titulado según tablas estandarizadas (PEEP/FiO2) para favorecer el reclutamiento alveolar sin sobredistensión. En los casos con hipoxemia refractaria (PaO2/FiO2 <150 a pesar de optimización ventilatoria), la **posición prono prolongada** (al menos 12-16 horas al día) ha demostrado reducir la mortalidad al mejorar la relación ventilación-perfusión y redistribuir el estrés pulmonar. La restricción hídrica conservadora es un complemento razonable tras la estabilización hemodinámica, pero no sustituye la estrategia ventilatoria protectora, y los corticosteroides no se usan de forma rutinaria en todos los casos.",
    keyPoints: [
      "Criterios de Berlín para SDRA: inicio agudo (≤1 semana), infiltrados bilaterales no explicados por derrame/colapso/nódulos, y falla respiratoria no explicada completamente por falla cardíaca o sobrecarga de volumen, clasificado por PaO2/FiO2 (leve 200-300, moderado 100-200, severo <100).",
      "SDRA: ventilación mecánica protectora con volumen corriente bajo (6 mL/kg de peso predicho) y presión meseta <30 cmH2O es la intervención con mayor impacto en mortalidad; posición prono si hipoxemia refractaria (PaO2/FiO2 <150); evitar volumen corriente alto y no usar corticosteroides de rutina.",
      "Cuidado Crítico - Síndrome de Dificultad Respiratoria Aguda (SDRA).",
    ],
  },
];
