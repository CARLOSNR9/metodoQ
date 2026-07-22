import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #3 (19 jul 2025) Â· Preguntas #71”“#80.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_71_80_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-71",
    university: "UCC",
    examArea: "Medicina Interna / Neumología / Reumatología",
    topic: "Neumología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neumologia", "reumatologia"],
    statement: "Mujer de 52 años, con Artritis Reumatoide activa severa refractaria a Metotrexato y Leflunomida. Su reumatólogo decide iniciar terapia biológica con un inhibidor del Factor de Necrosis Tumoral alfa (Infliximab). Por protocolo, se le realiza tamizaje para Tuberculosis (TB). La paciente se encuentra completamente asintomática, sin tos ni pérdida de peso. La radiografía de tórax es estrictamente normal. Sin embargo, la prueba de liberación de interferón gamma (IGRA - QuantiFERON-TB) reporta un resultado francamente POSITIVO. ¿Cuál es la conducta OBLIGATORIA a seguir antes de poder administrar la primera dosis del agente biológico anti-TNF?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Considerar el resultado como un falso positivo por la autoinmunidad cruzada de la AR, e iniciar el Infliximab de inmediato bajo vigilancia clínica.",
        distractorProfile: "deadly_biological_ignorance",
        incorrectFeedback: "Ignorar un IGRA positivo en el contexto de terapia anti-TNF condena a la paciente a una reactivación por tuberculosis diseminada o miliar de alta letalidad, ya que el TNF es indispensable para la integridad del granuloma."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar profilaxis con Isoniazida (con piridoxina) por 9 meses o Rifampicina por 4 meses, y diferir el inicio del Infliximab al menos por 1 mes tras haber empezado la profilaxis."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar esquema tetraconjugado antituberculoso completo (Isoniazida, Rifampicina, Pirazinamida y Etambutol - HRZE) simultáneamente con el Infliximab para máxima protección.",
        distractorProfile: "over_treatment_for_active_tb",
        incorrectFeedback: "El esquema HRZE se reserva exclusivamente para la Tuberculosis Activa. Darlo de forma empírica y profiláctica a una ITBL somete a la paciente a un riesgo cuádruple e innecesario de hepatotoxicidad severa."
      },
      {
        id: "D",
        label: "D",
        text: "Repetir el tamizaje con Prueba de Tuberculina (PPD); si resulta negativa (< 5 mm), se descarta la TB latente y se inicia el biológico.",
        distractorProfile: "test_downgrading_error",
        incorrectFeedback: "El IGRA es superior en especificidad al PPD. Si el IGRA es positivo, no se debe buscar un PPD negativo para \"descartar\" la infección, pues un PPD negativo en este escenario reflejaría anergia por la propia inmunosupresión de la AR, no ausencia de infección."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con Infección Tuberculosa Latente (ITBL), demostrada por un IGRA positivo en ausencia de síntomas y con radiografía de tórax normal (lo que descarta TB activa). El Factor de Necrosis Tumoral alfa (TNF-α) es la molécula maestra que mantiene a los macrófagos estructurados alrededor del granuloma tuberculoso. Si se administra un fármaco anti-TNF (Infliximab, Adalimumab, Etanercept) a una paciente con ITBL, el granuloma se \"desmorona\" y la paciente sufrirá una reactivación tuberculosa fulminante (a menudo miliar o extrapulmonar). Las guías mundiales exigen iniciar tratamiento para la TB latente (usualmente Isoniazida x 9 meses o Rifampicina x 4 meses) y diferir obligatoriamente el inicio del biológico al menos durante 3 a 4 semanas (1 mes) para asegurar que el bacilo latente esté bajo control bactericida.",
    keyPoints: [
      "Paciente que iniciará Terapia Biológica (especialmente anti-TNF).",
      "Tamizaje con IGRA o PPD positivo + Radiografía normal (asintomático).",
      "Tuberculosis Latente de alto riesgo de reactivación. Requiere profilaxis antibacilífera (Isoniazida o Rifampicina) y el biológico DEBE postergarse por 1 mes.",
      "Tema: Tuberculosis Latente / Farmacología Inmunosupresora."
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de farmacología e infectología porque evalúa el conocimiento de un efecto adverso fatal y absolutamente prevenible asociado a la inmunosupresión biológica moderna.

La clave no es sobretratar una enfermedad que no está activa, ni subestimar una prueba positiva.
La clave es:
Dar profilaxis para la Infección Tuberculosa Latente (ITBL) y retrasar la dosis del Anti-TNF un mes para evitar reactivación fulminante.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Artritis Reumatoide severa candidata a Infliximab (un biológico Anti-TNF alfa).
• Paciente asintomática sin síntomas respiratorios o sistémicos de Tuberculosis (TB).
• Radiografía de tórax normal (excluye TB activa).
• IGRA (QuantiFERON-TB) positivo (confirma infección latente).

¿Por qué la opción B es la respuesta correcta?
El IGRA positivo indica que el bacilo Mycobacterium tuberculosis está vivo, pero "encerrado" dentro de granulomas pulmonares asintomáticos mantenidos por el TNF-alfa del propio paciente. Si administramos Infliximab (Anti-TNF), destruimos la cerradura del granuloma, causando una diseminación miliar letal. La regla de oro es iniciar profilaxis mono-fármaco (Isoniazida o Rifampicina) para matar los bacilos latentes y esperar al menos 1 mes antes de iniciar el biológico para asegurar que la profilaxis esté haciendo efecto.

¿Por qué fallan las otras opciones?
• Asumir falso positivo (A): A diferencia del PPD (que da falsos positivos por la vacuna BCG), el IGRA es altamente específico para TB. Ignorarlo es condenar a la paciente a una reactivación mortal.
• Esquema tetraconjugado HRZE (C): El esquema de cuatro drogas se utiliza ÚNICAMENTE cuando hay Tuberculosis Activa confirmada (Ej. cavernas pulmonares o baciloscopia positiva). Usar HRZE para una ITBL expone a la paciente a un riesgo enorme e innecesario de toxicidad hepática.
• Repetir con PPD (D): El PPD es menos específico. Además, si saliera negativo no "anularía" el IGRA, sino que evidenciaría anergia inmunológica por la AR base. El IGRA positivo manda.

¿Cuál es la trampa del examen?
Muchos estudiantes se confunden pensando que al haber un IGRA positivo deben dar el esquema completo de TB "por si acaso", o peor, descartan la TB porque la radiografía es normal.
Pero el dato decisivo es:
IGRA positivo + asintomático + Rx normal = Tuberculosis Latente (ITBL). Solo requiere 1 fármaco, no 4, y un compás de espera prudente de 1 mes antes del biológico.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Paciente a iniciar biológico Anti-TNF (Infliximab, Adalimumab, Etanercept).
2. Protocolo obligatorio: Solicitar Rx de tórax y prueba de IGRA o PPD.
3. Si IGRA (+), confirmar que Rx tórax sea normal (ausencia de TB activa).
4. Iniciar tratamiento para ITBL: Isoniazida (9 meses) o Rifampicina (4 meses).
5. Diferir el inicio del biológico Anti-TNF por 3 a 4 semanas.

Perlas de examen
✅ Anti-TNF alfa rompe granulomas = altísimo riesgo de TB de reactivación diseminada.
✅ IGRA (+) no requiere confirmación con PPD, y no se afecta por la vacuna BCG.
✅ ITBL = Profilaxis (Isoniazida o Rifampicina). TB Activa = Tetraconjugado (HRZE).
✅ Nunca iniciar un anti-TNF en un paciente IGRA (+) el mismo día del diagnóstico.

Referencias
• American College of Rheumatology (ACR) Guidelines for Rheumatoid Arthritis.
• CDC Guidelines for Targeted Tuberculin Testing and Treatment of Latent Tuberculosis Infection.
• UpToDate: Treatment of latent tuberculosis infection in adults.`
  },
  {
    id: "ucc-conv-2025-07-19-72",
    university: "UCC",
    examArea: "Pediatría / Urgencias / Toxicología",
    topic: "Toxicología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "urgencias", "toxicologia"],
    statement: "Un niño de 3 años es traído a urgencias en brazos de su madre. La madre refiere que el niño encontró su frasco de pastillas de suplemento prenatal (Sulfato Ferroso) y se comió aproximadamente 30 tabletas hace 3 horas. Al ingreso, el paciente se encuentra irritable, con dolor abdominal tipo cólico severo y ha presentado 5 episodios de vómitos, los dos últimos con estrías de sangre roja fresca (hematemesis). Signos vitales: PA 85/55 mmHg, FC 145 lpm, SatO2 96%. Una radiografía simple de abdomen evidencia múltiples opacidades radiodensas en la cámara gástrica y duodeno. Los laboratorios urgentes reportan un Hierro Sérico de 580 mcg/dL. ¿Cuál es la terapia toxicológica de rescate MÁS adecuada y prioritaria en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar dosis repetidas de Carbón Activado por sonda nasogástrica para adsorber el metal en la luz intestinal.",
        distractorProfile: "wrong_toxicological_adsorbent",
        incorrectFeedback: "El carbón activado no posee capacidad de adsorción física sobre los metales pesados o iones elementales como el hierro, el litio o el potasio, resultando en un procedimiento fútil y con riesgo de broncoaspiración."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar de inmediato infusión intravenosa continua de Deferoxamina a 15 mg/kg/hora."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar hemodiálisis de urgencia con filtros de alto flujo debido a que el hierro sérico supera el límite letal de 500 mcg/dL.",
        distractorProfile: "ineffective_extracorporeal_clearance",
        incorrectFeedback: "La hemodiálisis no es efectiva para la remoción de hierro sérico libre debido a su extenso volumen de distribución intracelular y alta affinity proteica en sangre; el riñón solo bota el hierro si está quelado previamente."
      },
      {
        id: "D",
        label: "D",
        text: "Inducir el vómito con Jarabe de Ipecacuana seguido de la administración de leche entera para formar complejos insolubles en el estómago.",
        distractorProfile: "obsolete_and_dangerous_gastric_emptying",
        incorrectFeedback: "El jarabe de ipecacuana está retirado y proscrito a nivel mundial en toxicología por falta de eficacia y riesgo de broncoaspiración letal. Dar leche no impide la absorción tóxica a nivel intestinal."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Intoxicación Aguda por Hierro en su primera fase (toxicidad gastrointestinal severa con necrosis mucosa directa, hemorragia y choque temprano). El diagnóstico de gravedad está sustentado por la sintomatología tóxica (hematemesis, choque), las pastillas visibles en la radiografía y, categóricamente, por un Hierro Sérico > 500 mcg/dL (rango de toxicidad sistémica grave con riesgo inminente de disfunción mitocondrial celular, acidosis metabólica y falla hepática aguda). La terapia antidótica OBLIGATORIA ante síntomas severos o hierro >500 es el agente quelante **Deferoxamina intravenosa**. Esta molécula se une al hierro férrico libre en la sangre formando ferrioxamina, un compuesto hidrosoluble que es excretado por el riñón (tiñendo clásicamente la orina de color \"vino tinto\" o \"rosado\").\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un error de triaje toxicológico clásico. Todos los niños que comen cosas tóxicas reciben Carbón Activado, ¿verdad? ¡Falso! Los metales pesados (Hierro, Litio, Plomo) y los alcoholes NO se pegan al carbón activado, pasa derecho. Al meterle carbón (Opción A) solo lograrás que el niño vomite negro y el hierro seguirá quemando su estómago y absorbiéndose. El hierro tampoco se puede sacar con Hemodiálisis (Opción C) porque es una molécula que en la sangre viaja unida a proteínas con altísima afinidad y tiene un gran volumen de distribución; la máquina no lo atrapa. La Deferoxamina es la única que tiene la fuerza química para arrancarle el hierro a los tejidos y botarlo por la orina.",
    keyPoints: [
      "Preescolar con ingesta accidental de vitaminas/pastillas prenatales + Vómitos sanguinolentos.",
      "Rx de abdomen con pastillas radiopacas.",
      "Hierro sérico > 500 mcg/dL o presencia de choque/acidosis metabólica.",
      "Intoxicación Grave por Hierro. El Carbón Activado NO sirve. El tratamiento salvavidas es la Deferoxamina IV.",
      "Tema: Toxicología Pediátrica / Intoxicación por Hierro."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-73",
    university: "UCC",
    examArea: "Medicina Interna / Cardiología / Farmacología",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "farmacologia"],
    statement: "Mujer de 68 años con antecedente de asma bronquial severa de difícil control (actualmente usando corticoides inhalados a altas dosis y LABA/LAMA). Acude al servicio de urgencias por exacerbación de su disnea y aparición de palpitaciones. Al examen físico: broncoespasmo bilateral marcado con sibilancias inspiratorias y espiratorias; FR 26 rpm, SatO2 91%. PA 130/80 mmHg. El electrocardiograma revela una Fibrilación Auricular con Respuesta Ventricular Rápida (FA con RVR) a una frecuencia de 155 lpm. La paciente no presenta signos de inestabilidad hemodinámica ni edema pulmonar cardiogénico. ¿Cuál es el fármaco cronotrópico negativo de elección MÁS seguro para el control de la frecuencia cardíaca en esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Propranolol intravenoso en bolos titulables.",
        distractorProfile: "non_selective_beta_blocker_lethal_trap",
        incorrectFeedback: "El propranolol es un beta-bloqueador no selectivo puro; su administración en una crisis asmática provocará el cierre total de la vía aérea en escasos minutos."
      },
      {
        id: "B",
        label: "B",
        text: "Adenosina en técnica de doble jeringa para restaurar el ritmo sinusal.",
        distractorProfile: "wrong_drug_and_dangerous_side_effect",
        incorrectFeedback: "La adenosina está contraindicada en pacientes con asma severa porque induce degranulación de mastocitos e intenso broncoespasmo. Además, la adenosina no cardioverte la fibrilación auricular, solo produce un bloqueo AV fugaz."
      },
      {
        id: "C",
        label: "C",
        text: "Diltiazem o Verapamilo intravenoso en infusión."
      },
      {
        id: "D",
        label: "D",
        text: "Metoprolol intravenoso, por ser cardioselectivo (beta-1), minimizando el riesgo de broncoespasmo.",
        distractorProfile: "relative_contraindication_overlooked",
        incorrectFeedback: "Aunque el metoprolol es beta-1 selectivo, la selectividad se pierde a dosis más altas. En pacientes con asma severo y broncoespasmo activo, incluso pequeñas afinidades beta-2 pueden desencadenar broncoconstricción fatal."
      }
    ],
    correctOptionId: "C",
    explanation: "La paciente cursa con una FA de respuesta rápida en un contexto complejo: **asma severa reagudizada**. El objetivo terapéutico en el paciente estable es el control de la frecuencia cardíaca. Sin embargo, el uso de Beta-bloqueadores (incluso los cardioselectivos como el Metoprolol o Bisoprolol) en un paciente con asma severa descompensada y broncoespasmo activo acarrea un riesgo muy alto de bloquear los pocos receptores beta-2 funcionales en el pulmón, empeorando el broncoespasmo y causando insuficiencia ventilatoria aguda. Las guías de la AHA/ACC para FA establecen que en pacientes con asma o EPOC severo broncoconstricto, el medicamento de PRIMERA LÍNEA para el control de frecuencia nodal debe ser un Calcioantagonista no dihidropiridínico (Diltiazem o Verapamilo), los cuales frenan eficientemente el nodo AV sin interactuar con los receptores bronquiales.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Aquí el instinto traiciona al internista. Uno se siente muy seguro con el Metoprolol porque el libro dice que es \"beta-1 selectivo\". Falso sentido de seguridad: en medio de un ataque de asma, los pulmones están hiperreactivos y cualquier molécula que antagonice los receptores (porque el metoprolol se \"desborda\" hacia el beta-2 a dosis terapéuticas) sellará los bronquios. Los bloqueadores de calcio (Diltiazem) hacen el trabajo eléctrico en el corazón sin asomarse a los pulmones. La Adenosina (Opción B) no solo no detiene una Fibrilación Auricular (solo la enlentece por 10 segundos), sino que es un potente broncoconstrictor primario que ahogaría a esta paciente al instante.",
    keyPoints: [
      "Paciente ESTABLE con Fibrilación Auricular rápida (RVR).",
      "Coexistencia de ASMA SEVERA o EPOC en crisis con broncoespasmo.",
      "Decisión de qué \"frenador del nodo\" usar.",
      "Diltiazem o Verapamilo. Evitar a toda costa los beta-bloqueadores, incluso los \"cardioselectivos\", ya que pierden su selectividad a dosis altas y bloquean el bronquio.",
      "Tema: Fibrilación Auricular / Farmacología."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-74",
    university: "UCC",
    examArea: "Pediatría / Infectología / Neurología",
    topic: "Infectología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "neurologia"],
    statement: "Un niño de 5 años es traído a urgencias porque su madre notó al despertar que \"tiene la cara chueca\". Al examen físico, el niño presenta imposibilidad absoluta para arrugar la frente del lado derecho, imposibilidad para cerrar el ojo derecho (signo de Bell positivo) y desviación de la comisura labial hacia la izquierda al sonreír. El resto del examen neurológico (fuerza y sensibilidad en extremidades) es normal. Al revisar sus antecedentes recientes, la madre menciona que el niño finalizó hace dos semanas un tratamiento empírico irregular (3 días) de amoxicilina por un dolor de oído intenso en el lado derecho. A la otoscopia actual, la membrana timpánica derecha se observa eritematosa, abombada y con un nivel hidroaéreo purulento posterior. ¿Cuál es la interpretación diagnóstica MÁS correcta y el tratamiento a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Parálisis de Bell idiopática; iniciar de inmediato un ciclo corto de Prednisolona oral y lágrimas artificiales.",
        distractorProfile: "default_diagnosis_ignores_red_flags",
        incorrectFeedback: "Asumir una parálisis de Bell idiopática y administrar esteroides cuando hay una infección purulenta activa no drenada contigua al nervio facial, facilita la diseminación intracraneal de la infección (meningitis o absceso epidural)."
      },
      {
        id: "B",
        label: "B",
        text: "Enfermedad de Lyme diseminada temprana; iniciar Amoxicilina por 21 días e inmovilizar el ojo afectado.",
        distractorProfile: "epidemiologic_overlap_error",
        incorrectFeedback: "Aunque la enfermedad de Lyme puede dar parálisis facial (incluso bilateral), la presencia de una OMA purulenta clara ipsilateral y la ausencia de historia de picadura de garrapata o eritema migrans descartan primariamente esta etiología reumatológica/infecciosa de segunda línea."
      },
      {
        id: "C",
        label: "C",
        text: "Parálisis facial periférica secundaria a Otitis Media Aguda complicada; requiere Miringotomía de urgencia y cobertura antibiótica parenteral."
      },
      {
        id: "D",
        label: "D",
        text: "Accidente Cerebrovascular isquémico de fosa posterior; realizar RMN cerebral urgente e iniciar heparina.",
        distractorProfile: "wrong_central_neurological_pathology",
        incorrectFeedback: "Los accidentes cerebrovasculares supratentoriales producen una parálisis facial CENTRAL, la cual respeta los músculos de la frente y el cierre del ojo debido a la inervación cortical bilateral del núcleo facial superior."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta una Parálisis Facial PERIFÉRICA (compromete tanto el tercio superior como el inferior del rostro, a diferencia de la parálisis central que respeta la frente por inervación cruzada bilateral). Aunque la causa más frecuente en pediatría es idiopática (Parálisis de Bell), la semiología manda: la presencia de una **Otitis Media Aguda (OMA)** purulenta ipsilateral a la parálisis descarta el diagnóstico de \"idiopática\". El nervio facial (VII par) transcurre a través del canal de Falopio dentro del oído medio; la inflamación purulenta a presión de la OMA puede erosionar el conducto o transmitir toxinas inflamatorias que comprimen el nervio causando su parálisis aguda. Esta es una **complicación supurativa severa de la OMA**, y su manejo no son esteroides, sino liberar inmediatamente el pus a presión del oído (Miringotomía / tubo de timpanostomía) asociado a antibióticos intravenosos de amplio espectro (ej. Ceftriaxona).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un escenario donde la semiología y la otoscopia son el juez supremo. Si el oído estuviera sano, el diagnóstico sería Parálisis de Bell y el tratamiento con Corticoides (Opción A) sería perfecto. Pero si ves un tímpano abombado y lleno de pus que está asfixiando al nervio facial que pasa justo por ahí, los esteroides solos no curarán el foco infeccioso, y el pus terminará erosionando la mastoides. La opción D (ACV) se descarta fácil: un infarto cerebral motor daría una parálisis CENTRAL (el niño sí podría arrugar la frente, porque la frente tiene doble inervación desde ambos hemisferios).",
    keyPoints: [
      "Niño con Parálisis Facial Periférica (no arruga la frente, ojo abierto, boca desviada).",
      "Otoscopia ANORMAL ipsilateral (OMA purulenta) o antecedente de otitis mal tratada.",
      "Parálisis Facial secundaria a OMA (complicación aguda). Tratamiento exige antibióticos agresivos y Miringotomía para descomprimir el nervio facial. No es Parálisis de Bell.",
      "Tema: Complicaciones de OMA / Neurología Pediátrica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-75",
    university: "UCC",
    examArea: "Medicina Interna / Endocrinología",
    topic: "Endocrinología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia"],
    statement: "Mujer de 78 años, con antecedentes desconocidos por vivir sola, es encontrada por su hija en estado de letargia profunda y marcada lentitud motora. Al ingreso a urgencias en época de invierno: estuporosa, PA 100/60 mmHg, bradicardia de 48 lpm, hipotermia (T 34.2°C). Al examen físico resalta un engrosamiento burdo de las facies, macroglosia evidente, edema periorbitario y piel sumamente reseca y fría (mixedema generalizado). Los reflejos miotáticos presentan una fase de relajación extremadamente prolongada. Se realiza un panel de laboratorios urgentes: Glucemia 65 mg/dL, Sodio sérico **112 mEq/L** (Hiponatremia severa). La osmolaridad urinaria es de 350 mOsm/kg con Sodio urinario de 45 mEq/L, y el estado de la paciente es euvolémico clínico. Un perfil tiroideo tomado STAT revela TSH en 185 mUI/L (rango normal 0.4-4.0) con T4 libre indetectable. ¿Cuál es el tratamiento INMEDIATO de elección para corregir la severa hiponatremia de esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administración agresiva de Solución Salina Hipertónica al 3% bajo vigilancia neurológica para subir el sodio entre 4 a 6 mEq/L en las primeras 6 horas.",
        distractorProfile: "blind_hyponatremia_algorithm_error",
        incorrectFeedback: "La solución salina hipertónica al 3% se reserva en el coma mixematoso ÚNICAMENTE si la paciente cursa con convulsiones activas inducidas por el edema cerebral. Su uso rutinario sobrecarga un corazón hipodinámico y no resuelve la causa raíz endocrina de la retención acuosa."
      },
      {
        id: "B",
        label: "B",
        text: "Restricción hídrica estricta (<800 cc/día) y prescripción de Tolvaptán oral, asumiendo un Síndrome de Secreción Inadecuada de ADH (SIADH) severo.",
        distractorProfile: "wrong_euvolemic_hyponatremia_pathology",
        incorrectFeedback: "Aunque los laboratorios (sodio orina alto, normovolemia) imitan al SIADH, la presencia de TSH masivamente elevada confirma que la hiponatremia es secundaria al hipotiroidismo profundo. Usar Vaptanes en un coma metabólico inestable es iatrogénico."
      },
      {
        id: "C",
        label: "C",
        text: "Infusión intravenosa de Hidrocortisona a dosis de estrés, seguida de Levotiroxina endovenosa; no se requieren bolos de sodio hipertónico primarios."
      },
      {
        id: "D",
        label: "D",
        text: "Hemodiálisis de urgencia para remoción del exceso de agua libre retenida en el espacio intersticial mixedematoso.",
        distractorProfile: "extreme_and_unwarranted_intervention",
        incorrectFeedback: "La hemodiálisis no tiene indicación para tratar el edema mixedematoso, el cual es rico en proteínas/mucopolisacáridos, no agua libre pura extracelular que responda a ultrafiltración."
      }
    ],
    correctOptionId: "C",
    explanation: "La paciente cursa con un Coma Mixematoso (la fase más extrema del hipotiroidismo descompensado). Las características patognomónicas incluyen alteración del sensorio, hipotermia, bradicardia y un mixedema franco (edema por depósito de glucosaminoglicanos y ácido hialurónico). A nivel electrolítico, el hipotiroidismo severo es una de las causas clásicas de **Hiponatremia Euvolémica** (similar laboratorialmente al SIADH, debido a la reducción drástica del filtrado glomerular y la incapacidad de suprimir la ADH). La clave terapéutica aquí es que la hiponatremia inducida por el coma mixematoso se resuelve fisiológicamente al restaurar el metabolismo basal celular. El tratamiento inmediato exige, en orden inquebrantable, dar Glucocorticoides (Hidrocortisona IV) para proteger contra una insuficiencia adrenal subyacente simultánea (Síndrome de Schmidt), seguido de la administración de Hormona Tiroidea (Levotiroxina o T3) intravenosa. El sodio mejorará dramáticamente solo con la hormona tiroidea (\"diuresis de agua libre\"); usar solución salina hipertónica está desaconsejado a menos que la paciente esté convulsionando activamente, pues agrava el riesgo de desmielinización y sobrecarga cardíaca.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un choque entre el instinto de la nefrología y la endocrinología. El nefrólogo ve \"Sodio 112\" y quiere ponerle solución hipertónica al 3% (Opción A). Pero el endocrinólogo te grita: la paciente no tiene 112 porque haya tomado mucha agua, tiene 112 porque su corazón late tan despacio y su riñón filtra tan poco por falta de tiroxina, que toda el agua se quedó estancada. Tan pronto inyectes la Levotiroxina, las células se \"prenderán\", el gasto cardíaco aumentará, el riñón orinará litros de agua estancada y el sodio subirá mágicamente a 135. Darle sal hipertónica a un corazón mixedematoso bradicárdico puede causar insuficiencia cardíaca congestiva aguda por sobrecarga de volumen iatrogénica.",
    keyPoints: [
      "Anciana con hipotermia, bradicardia, letargia y signos de mixedema (macroglosia, reflejos lentos).",
      "TSH astronómica (hipotiroidismo profundo).",
      "Hiponatremia severa asociada.",
      "Coma Mixematoso. La corrección del sodio se hace aportando Levotiroxina (previa cobertura con Hidrocortisona IV). La restricción hídrica o la salina hipertónica no atacan la raíz celular del problema.",
      "Tema: Urgencias Endocrinas / Coma Mixematoso."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-76",
    university: "UCC",
    examArea: "Pediatría / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "cardiologia", "urgencias"],
    statement: "Un niño de 4 años, previamente sano, es llevado al servicio de urgencias por un cuadro de 4 días de disnea de esfuerzo progresiva y dolor abdominal. La madre menciona que el niño tuvo un \"resfriado muy fuerte\" (rinofaringitis viral) hace dos semanas. Al examen físico: febrícula de 37.5°C, marcado trabajo respiratorio (FR 45 rpm), cianosis perioral leve y taquicardia desproporcionada en reposo (FC 165 lpm). Se ausculta un ritmo de galope claro por presencia de tercer ruido (S3), soplos sistólicos funcionales por dilatación y estertores crepitantes en ambas bases pulmonares. Llama la atención una hepatomegalia firme a 5 cm del reborde costal derecho. La radiografía de tórax revela una acentuada cardiomegalia global con índice cardiotorácico de 0.65 y congestión venosa hiliar. ¿Cuál es la sospecha diagnóstica prioritaria y el soporte farmacológico inicial MÁS adecuado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Neumonía atípica complicada con derrame pleural masivo; se debe iniciar administración intravenosa de Clindamicina y Macrólidos.",
        distractorProfile: "wrong_system_primary_focus",
        incorrectFeedback: "La neumonía atípica no genera cardiomegalia global extrema ni ritmo de galope (S3); la hepatomegalia refleja congestión hepática por falla de corazón derecho, incompatible con un origen puramente respiratorio."
      },
      {
        id: "B",
        label: "B",
        text: "Pericarditis aguda viral con taponamiento inminente; se requiere administración inmediata de Ibuprofeno a altas dosis y colchicina.",
        distractorProfile: "wrong_inflammatory_cardiac_layer",
        incorrectFeedback: "La pericarditis produce frote auscultatorio y dolor torácico pleurítico, pero no causa ritmo de galope por S3 ni edema pulmonar directo (crepitantes), y dar AINEs deprimirá más a un niño inestable hemodinámicamente."
      },
      {
        id: "C",
        label: "C",
        text: "Miocarditis viral aguda con falla cardíaca congestiva; el manejo prioritario incluye soporte inotrópico (Milrinona/Dobutamina) y terapia diurética agresiva."
      },
      {
        id: "D",
        label: "D",
        text: "Sepsis de origen respiratorio con choque caliente secundario; el paso inicial mandatorio es un bolo de Lactato de Ringer a 20 cc/kg en menos de 15 minutos.",
        distractorProfile: "lethal_fluid_overload",
        incorrectFeedback: "Administrar bolos rápidos de volumen a un paciente con insuficiencia cardíaca aguda congestiva (galope, estertores, hepatomegalia) precipitará un edema agudo de pulmón letal inmediato por sobrecarga diastólica."
      }
    ],
    correctOptionId: "C",
    explanation: "El niño presenta un cuadro clásico y fulminante de Miocarditis Viral Pediátrica (comúnmente secundaria a Coxsackievirus B, Adenovirus o Parvovirus B19 tras un pródromo respiratorio o gastrointestinal). Se manifiesta fisiopatológicamente como una Insuficiencia Cardíaca Aguda de tipo sistólica. Los signos semiológicos son el \"grito\" de la falla de bomba: taquicardia masiva desproporcionada a la fiebre, ritmo de galope (S3, signo de disfunción ventricular izquierda y sobrecarga de volumen), estertores pulmonares (congestión retrógrada izquierda) y hepatomegalia marcada (congestión retrógrada derecha). El corazón del niño se ha dilatado y no tiene fuerza de contracción. La terapia aguda de rescate se enfoca en descargar el volumen retenido (diuréticos de asa, Furosemida) y aumentar la fuerza contráctil del miocardio enfermo con inotrópicos intravenosos (Milrinona, que además es vasodilatador o inodilatador, o Dobutamina), mientras se decide la necesidad de soporte extracorpóreo (ECMO) si hay colapso severo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Cuidado con activar el protocolo de sepsis a ciegas (Opción D). Es el error que cobra más vidas en la urgencia pediátrica con miocarditis. El niño luce pálido, respira rápido y está muy taquicárdico, por lo que el interno asume \"Sepsis\" y ordena \"¡Bolo de 20 cc/kg de cristaloides a presión!\". Al pasar ese volumen a un miocardio inflamado y dilatado que no tiene fuerza para contraerse, provocas un edema agudo de pulmón iatrogénico instantáneo y paro cardiorrespiratorio por falla de bomba diastólica. La hepatomegalia y el ritmo de galope en la auscultación son tu freno de mano: te indican que el tanque ya está lleno, no le metas más agua.",
    keyPoints: [
      "Niño o lactante con pródromo viral previo (hace 1-2 semanas).",
      "Disnea de novo, hepatomegalia, ritmo de galope (S3) y Cardiomegalia en la Rx Tórax.",
      "Taquicardia que no cuadra con la temperatura (muy rápido para tan poca fiebre).",
      "Miocarditis Viral con Falla Cardíaca Biventricular. El tratamiento de urgencia es soporte Inotrópico y Diuréticos. Los bolos de líquidos rápidos están contraindicados.",
      "Tema: Urgencias Cardiovasculares / Miocarditis Pediátrica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-77",
    university: "UCC",
    examArea: "Medicina Interna / Gastroenterología / Urgencias",
    topic: "Gastroenterología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia", "urgencias"],
    statement: "Hombre de 78 años, hipertenso crónico, es traído a urgencias por la expulsión de múltiples deposiciones de abundante sangre roja rutilante pura con coágulos (hematoquecia severa). Refiere que el evento fue de inicio súbito, acompañado de urgencia defecatoria, pero COMPLETAMENTE INDOLORO. Al ingreso presenta palidez severa, sudoración fría, PA 85/50 mmHg y FC 125 lpm (choque hipovolémico activo). Tras la reanimación hemodinámica agresiva con cristaloides y 2 unidades de glóbulos rojos, se logra estabilizar su presión a 110/70 mmHg. Se realiza una colonoscopia de urgencia en las primeras 12 horas, la cual evidencia abundante sangre fresca y grandes coágulos amorfos distribuidos a lo largo del colon ascendente y ciego, imposibilitando la visualización directa de la mucosa o del vaso sangrante específico, a pesar de lavados intensivos. El paciente presenta un nuevo episodio de hipotensión asociado a rectorragia durante la recuperación endoscópica. ¿Cuál es el siguiente paso diagnóstico-terapéutico MÁS apropiado y de mayor rendimiento en este escenario?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar una Angiografía por Tomografía Computarizada (Angio-TC) de abdomen y pelvis o una Angiografía Mesentérica convencional inmediata para embolización dirigida."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar administración intravenosa de Terlipresina a dosis altas (2 mg cada 4 horas) para inducir vasoconstricción esplácnica prolongada.",
        distractorProfile: "upper_gi_pharmacology_applied_to_lower",
        incorrectFeedback: "Los vasoactivos (Terlipresina u Octreotide) están avalados y son el pilar fundamental del sangrado VARICEAL (hipertensión portal). No tienen eficacia demostrada, indicación, ni rol comprobado en el control agudo del sangrado arterial bajo diverticular o angiodisplásico."
      },
      {
        id: "C",
        label: "C",
        text: "Instalar un balón de Sengstaken-Blakemore a través del canal anal para hacer hemostasia compresiva mecánica de la mucosa colónica.",
        distractorProfile: "wrong_anatomical_device_use",
        incorrectFeedback: "El balón de Sengstaken-Blakemore fue diseñado anatómicamente de forma exclusiva para comprimir las várices del esófago inferior y cardias gástrico; usarlo en el recto/colon es imposible, peligroso y médicamente irracional."
      },
      {
        id: "D",
        label: "D",
        text: "Programar al paciente de inmediato para una Colectomía Subtotal de urgencia con ileostomía, ya que la falla endoscópica es indicación quirúrgica directa.",
        distractorProfile: "premature_radical_surgery",
        incorrectFeedback: "La cirugía de resección colónica \"a ciegas\" de rescate tiene una altísima mortalidad (>30%) en adultos mayores inestables y debe ser evitada a toda costa si la embolización angiográfica mínimamente invasiva (mucho más segura) no se ha intentado previamente."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con una Hemorragia Digestiva Baja (HDB) aguda, masiva y de alto riesgo, probablemente secundaria a Enfermedad Diverticular o Angiodisplasia (las dos principales causas de sangrado bajo indoloro y profuso en ancianos). Cuando el paciente se encuentra inestable, presenta sangrado continuo masivo, y la **colonoscopia no es concluyente o falla por mala visibilidad (sangre abundante)**, las guías internacionales (ACG, ASGE) establecen que el paso mandatorio a seguir es la localización radiológica intravascular. La Angio-TC detecta sangrados activos con flujos tan bajos como 0.3 a 0.5 mL/min de manera rápida y no invasiva, trazando el mapa. Inmediatamente después (o directamente si está disponible), la Angiografía Mesentérica permite no solo ver el vaso sangrante, sino canalizarlo selectivamente e inyectar *coils*, gelfoam o microesferas para embolizarlo y salvar la vida del paciente sin requerir una riesgosa cirugía de colon.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** En la hemorragia digestiva baja masiva, el colonoscopio pierde su magia cuando el tubo digestivo está nadando en sangre roja porque la luz absorbe la imagen. Llevar a este paciente a una Colectomía de Urgencia \"a ciegas\" (Opción D) es el último, ultimísimo recurso de desesperación; quitarle todo el colon a un anciano de 78 años chocado tiene una mortalidad quirúrgica casi prohibitiva. Si inyectas contraste por la arteria (Angio-TC), verás exactamente cómo la arteria mesentérica superior \"escupe\" contraste hacia la luz del ciego, dándole el blanco exacto al radiólogo intervencionista para taponar esa arteriola milimétrica y curar el cuadro.",
    keyPoints: [
      "Anciano con hematoquecia/rectorragia masiva indolora (probable divertículo o angiodisplasia).",
      "Inestabilidad hemodinámica intermitente o persistente.",
      "Colonoscopia urgente FALLIDA por falta de visibilidad por coágulos o no logra hacer hemostasia.",
      "Angio-TC abdominal seguida de Angiografía Mesentérica con Embolización. Es el método de elección y puente de rescate ante el fallo endoscópico.",
      "Tema: Hemorragia Digestiva Baja."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-78",
    university: "UCC",
    examArea: "Pediatría / Nefrología / Genética",
    topic: "Nefrología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "nefrologia", "genetica"],
    statement: "Un niño de 8 años es llevado a la consulta de nefrología por el hallazgo persistente de microhematuria aislada en tres parciales de orina consecutivos, realizados como tamizaje escolar. El niño se encuentra asintomático, con presión arterial normal y función renal conservada (Creatinina 0.5 mg/dL). No presenta edemas. Al revisar los sedimentos urinarios, se reporta la presencia persistente de glóbulos rojos dismórficos (>80%) y trazas de proteínas. La evaluación de la historia familiar es clave: su padre (de 38 años) se encuentra en lista de espera para trasplante renal por Enfermedad Renal Crónica terminal de causa no biopsiada, y adicionalmente utiliza audífonos bilaterales desde los 30 años por sordera neurosensorial. El examen de agudeza auditiva y visual del niño, realizado el mes pasado, reportó parámetros normales para la edad. Con estos hallazgos clínicos y familiares, ¿cuál es el mecanismo fisiopatológico y genético MÁS probable subyacente a la enfermedad que cursa este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Depósito mesangial exagerado de inmunoglobulinas IgA poliméricas con O-glicosilación deficiente tras un desencadenante antigénico respiratorio.",
        distractorProfile: "overlapping_hematuria_disease",
        incorrectFeedback: "Describe la patogenia de la Nefropatía por IgA (Enfermedad de Berger). Aunque causa hematuria microscópica/macroscópica recurrente, no se asocia patogénicamente ni familiarmente con la presencia de sordera neurosensorial bilateral progresiva y no suele heredar una diálisis tan penetrante."
      },
      {
        id: "B",
        label: "B",
        text: "Alteración genética en la síntesis de las cadenas alfa-3, alfa-4 o alfa-5 del colágeno tipo IV, afectando la arquitectura estructural de la membrana basal glomerular."
      },
      {
        id: "C",
        label: "C",
        text: "Mutación de genes codificadores de las proteínas del citoesqueleto del podocito (Nefrina/Podocina), induciendo esclerosis segmentaria resistente a esteroides.",
        distractorProfile: "wrong_glomerular_layer_defect",
        incorrectFeedback: "Estas mutaciones (ej. NPHS1, NPHS2) causan el Síndrome Nefrótico Congénito o GEFS familiar, presentándose clínicamente con proteinuria masiva intratable y edemas en el periodo neonatal/infantil, no con microhematuria aislada indolente."
      },
      {
        id: "D",
        label: "D",
        text: "Adelgazamiento difuso benigno de las membranas basales glomerulares, de herencia autosómica dominante, sin riesgo de deterioro de función renal a largo plazo.",
        distractorProfile: "benign_familial_hematuria_trap",
        incorrectFeedback: "La Hematuria Familiar Benigna (Nefropatía de membrana basal delgada) también causa hematuria de por vida, pero como su nombre indica, no progresa a falla renal terminal en el adulto ni causa sordera neurosensorial (lo que contrasta agudamente con la historia del padre)."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Síndrome de Alport de herencia ligada al cromosoma X (la forma más común, 80-85% de los casos). Las claves diagnósticas infalibles radican en la historia clínica: un paciente pediátrico varón con hematuria glomerular (microhematuria con dismorfismo eritrocitario), asociado a un padre joven que debutó en su edad adulta con Falla Renal Terminal y, de forma patognomónica, con **sordera neurosensorial progresiva** (y a veces anomalías oculares como el lenticono anterior). Fisiopatológicamente, el Síndrome de Alport es una enfermedad genética del tejido conectivo causada por mutaciones en los genes COL4A3, COL4A4 o COL4A5, los cuales son responsables de la síntesis de las cadenas alfa del Colágeno Tipo IV. El Colágeno Tipo IV es el ladrillo estructural principal que forma la Membrana Basal Glomerular del riñón, la cóclea del oído interno y el cristalino del ojo. Al estar mutado, la membrana basal renal se fisura (causando hematuria inicial), se engruesa e irregulariza (en \"capas de hojaldre\" a la microscopía electrónica), y finalmente se esclerosa llevando a la diálisis en la segunda o tercera década de la vida.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Para el examen de la UCC, debes saber separar las hematurias microscópicas puras en pediatría. Si la hematuria familiar no tiene a nadie en diálisis y el abuelo orina sangre pero está sano, es la Enfermedad de Membrana Basal Delgada (Opción D), que es benigna de por vida. Si la hematuria duele y vino justo el día que el niño se infectó la garganta, es Nefropatía por IgA (Opción A). Pero si en la familia los hombres se quedan sordos y luego necesitan un riñón nuevo a los 30 años, ese colágeno tipo IV viene dañado de fábrica (Alport).",
    keyPoints: [
      "Niño o joven con hematuria glomerular microscópica persistente asintomática.",
      "Antecedente familiar patognomónico: Insuficiencia Renal en hombres de la familia asociada a Sordera/Cofosis neurosensorial.",
      "Síndrome de Alport. La patogenia es una falla en el Colágeno Tipo IV de la membrana basal.",
      "Tema: Glomerulopatías Hereditarias / Síndrome de Alport."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-79",
    university: "UCC",
    examArea: "Medicina Interna / Neurología / Gineco-Obstetricia",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neurologia", "ginecologia"],
    statement: "Mujer de 28 años, primigestante cursando su semana 18 de gestación. Tiene antecedente diagnóstico de Esclerosis Múltiple (EM) tipo Remitente-Recurrente desde hace 4 años; previo a su embarazo, venía en manejo con Natalizumab (un anticuerpo monoclonal modificador de la enfermedad), el cual suspendió tan pronto supo de su estado gestacional por precaución. Consulta al servicio de urgencias por un cuadro de inicio agudo de 48 horas de disminución dolorosa de la agudeza visual en su ojo derecho, con alteración en la visión de los colores y percepción de un \"punto ciego\" central. Al examen neurológico se confirma un Defecto Pupilar Aferente Relativo (Pupila de Marcus Gunn) en el ojo derecho. La paciente es evaluada por oftalmología y neurología, confirmándose un brote (recaída) agudo de Neuritis Óptica secundario a su Esclerosis Múltiple. ¿Cuál es el tratamiento agudo INMEDIATO y seguro para preservar la función visual durante este periodo del embarazo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar de inmediato terapia inmunosupresora modificadora de enfermedad con Interferón beta-1a sistémico continuo.",
        distractorProfile: "chronic_therapy_applied_to_acute_relapse",
        incorrectFeedback: "Los fármacos modificadores de la enfermedad (DMTs) como el interferón no actúan con la rapidez necesaria para detener la desmielinización aguda de un brote activo (neuritis) y no recuperan el tejido en peligro; solo modulan la respuesta a meses vista."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar pulsos cortos intravenosos de Metilprednisolona a dosis altas (ej. 1 gramo diario por 3 a 5 días) bajo monitoreo fetal estrecho."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar de forma prioritaria sesiones diarias de Plasmaféresis terapéutica durante la primera semana.",
        distractorProfile: "premature_escalation_to_second_line",
        incorrectFeedback: "La plasmaféresis es un tratamiento agresivo considerado de SEGUNDA línea. Solo está indicada en la mujer embarazada si el brote desmielinizante es catastrófico y ha mostrado refractariedad absoluta y ausencia de respuesta clínica a los pulsos iniciales de corticosteroides."
      },
      {
        id: "D",
        label: "D",
        text: "Mantener una conducta expectante con observación estrecha, contraindicando todo inmunosupresor farmacológico hasta después del parto.",
        distractorProfile: "passive_and_negligent_neuromanagement",
        incorrectFeedback: "Aunque el embarazo mismo produce un estado fisiológico de tolerancia inmunológica protectora contra brotes, si la recaída ocurre y amenaza una vía funcional mayor (como la visión), abstenerse de tratarla garantiza secuelas y discapacidad materna irreversibles."
      }
    ],
    correctOptionId: "B",
    explanation: "El escenario clínico plantea una recaída aguda incapacitante (Neuritis Óptica Aguda) de Esclerosis Múltiple (EM) durante el embarazo (en este caso un rebote clásico post-suspensión de fármacos potentes como el Natalizumab). Las recaídas que provocan déficits funcionales graves, como la amenaza de pérdida visual, deben ser tratadas activamente a pesar del embarazo para evitar secuelas neurológicas permanentes. Las guías de Neurología y Obstetricia (AAN/EAN) establecen que la primera línea de tratamiento para el brote agudo de EM en la gestante son los **pulsos intravenosos cortos de Glucocorticoides a dosis altas (Metilprednisolona)**. La metilprednisolona es relativamente segura en el segundo y tercer trimestre (es ampliamente metabolizada en la placenta por la enzima 11-beta-hidroxiesteroide deshidrogenasa, minimizando la exposición fetal cruzada a diferencia de la dexametasona), controlando eficientemente el edema y la desmielinización del nervio óptico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, en el manejo neurológico de la embarazada el concepto central es \"apagar el fuego sin envenenar al feto\". El nervio óptico se está desmielinizando e inflamando; si esperas al parto (Opción D), el nervio se atrofiará y la paciente quedará ciega del ojo derecho para siempre. Los pulsos de Metilprednisolona en el segundo y tercer trimestre no causan paladar hendido (riesgo solo en 1er trimestre con uso crónico) y cruzan muy poco la placenta. Es la mejor herramienta que tienes en tu maletín. Los modificadores de enfermedad crónicos (como el Interferón, Opción A) no desinflaman el brote agudo, solo sirven para \"evitar\" futuras recaídas.",
    keyPoints: [
      "Mujer embarazada con antecedente de Esclerosis Múltiple (o debut de la misma).",
      "Desarrollo de brote agudo incapacitante (como neuritis óptica o paraparesia) que requiere atención.",
      "El tratamiento agudo salvavidas de la función nerviosa son los Pulsos Cortos de Metilprednisolona IV (seguros y efectivos). Evitar la pasividad que condena a secuelas.",
      "Tema: Enfermedades Desmielinizantes / Neurología Gestacional."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-80",
    university: "UCC",
    examArea: "Pediatría / Neonatología / Endocrinología",
    topic: "Endocrinología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neonatologia", "endocrinologia"],
    statement: "Un recién nacido a término (39 semanas de gestación), masculino, pesa al nacer 4.600 gramos (macrosómico, por encima del percentil 97 para la edad gestacional). Es producto de una madre con Diabetes Mellitus Gestacional con pobre adherencia a los controles y a la dieta. El neonato es extraído por vía vaginal sin trauma, tiene un Apgar de 8 y 9, y presenta un aspecto pletórico. A las 2 horas de vida, la enfermera nota que el bebé se encuentra pálido, hipoactivo, con letargia marcada, presencia de temblores finos distales (hiperexcitabilidad) y rechazo a la succión. Inmediatamente se realiza una glucometría capilar en el talón, la cual reporta **25 mg/dL** (hipoglucemia sintomática profunda). Se extrae muestra venosa confirmatoria. ¿Cuál es el manejo inicial MÁS apropiado y seguro para revertir la neurotoxicidad aguda en este paciente, asumiendo protocolo de cuidado crítico neonatal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fomentar lactancia materna frecuente de forma inmediata y reevaluar la glucometría capilar en 30 minutos sin invasiones.",
        distractorProfile: "passive_management_in_emergency",
        incorrectFeedback: "La alimentación enteral exclusiva está indicada únicamente en hipoglucemias leves y asintomáticas. En presencia de letargia o temblores con valores < 25 mg/dL, diferir la glucosa intravenosa expone al niño a convulsiones inminentes y daño neuronal irreversible."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar un bolo intravenoso rápido de Dextrosa al 50% (DAD 50%) a razón de 2 cc/kg por acceso periférico.",
        distractorProfile: "lethal_hyperosmolar_concentration",
        incorrectFeedback: "La Dextrosa al 50% está proscrita en neonatología; su hiperosmolaridad causa esclerosis y necrosis venosa inmediata. Además, desencadena una respuesta insulínica de rebote masiva en el hijo de madre diabética, provocando hipoglucemias posteriores más graves."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar un bolo intravenoso de Dextrosa al 10% (DAD 10%) a razón de 2 mL/kg (200 mg/kg), seguido de una infusión continua de glucosa (VIG) de 6 a 8 mg/kg/min."
      },
      {
        id: "D",
        label: "D",
        text: "Inyectar Glucagón intramuscular a dosis de 1 mg/kg mientras se prepara un catéter venoso umbilical central.",
        distractorProfile: "mechanistic_failure_in_neonate",
        incorrectFeedback: "El glucagón requiere reservas adecuadas de glucógeno hepático para estimular la glucogenólisis. Los recién nacidos estresados rápidamente depletadas sus reservas, haciendo que el glucagón sea ineficaz frente al severo hiperinsulinismo."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente es un clásico \"Hijo de Madre Diabética\". Debido al alto suministro de glucosa transplacentario durante el embarazo, el feto desarrolló una hiperplasia masiva de las células beta del páncreas para producir altísimas cantidades de insulina. Al cortar el cordón umbilical, la entrada de glucosa se apaga de golpe, pero el páncreas del bebé sigue liberando insulina en avalancha (hiperinsulinismo endógeno), generando una caída precipitosa y profunda del azúcar sanguíneo (25 mg/dL) en las primeras horas de vida. Cuando un neonato presenta hipoglucemia **SINTOMÁTICA** o niveles severos (< 25-30 mg/dL), el manejo oral es insuficiente y peligroso. El protocolo de la AAP y PALS dicta que se debe administrar un **bolo rápido y controlado de Dextrosa al 10%** (2 cc/kg = 200 mg/kg), ya que usar concentraciones mayores como el DAD 50% causaría daño masivo en las venas y dispararía un rebote insulínico aún peor. Tras el bolo, es obligatorio iniciar una Velocidad de Infusión de Glucosa (VIG) continua alta para empatar la secreción de la insulina hiperactiva, usualmente entre 6 y 8 mg/kg/min.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, el neonato sintomático es una emergencia neurológica. El cerebro del bebé se está quedando sin combustible y cada minuto cuenta. Si le das leche materna (Opción A), el vaciamiento gástrico tomará tiempo y no será suficiente para vencer la avalancha de insulina que tiene su cuerpo; la leche es para el niño asintomático con glucosa en 40, no para el que está letárgico en 25. El DAD al 50% (Opción B) es un veneno para las venitas del recién nacido; las quema al instante por su extrema hiperosmolaridad y genera un pico glucémico tan alto que el páncreas del bebé responderá liberando AÚN MÁS insulina, empeorando el problema. El Glucagón (Opción D) necesita reservas de glucógeno hepático para funcionar; este bebé macrosómico y estresado ya quemó todo su glucógeno, por lo que el Glucagón no tendrá \"municiones\" para subir el azúcar. Bolo de DAD al 10% es el estándar de oro pediátrico mundial.",
    keyPoints: [
      "Recién nacido macrosómico de madre con diabetes.",
      "Aparición de temblores, letargia o convulsiones a las 2-6 horas de vida.",
      "Glucometría/Glucemia < 25-30 mg/dL (francamente sintomático).",
      "Hipoglucemia neonatal por Hiperinsulinismo fetal. El tratamiento de urgencia es parenteral con bolo de DAD 10% (2 cc/kg) más infusión continua. La alimentación enteral sola solo se intenta en bebés asintomáticos y limítrofes.",
      "Tema: Complicaciones del Recién Nacido / Hijo de Madre Diabética."
    ]
  }
];

