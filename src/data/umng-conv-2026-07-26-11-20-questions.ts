import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #1 (26 jul 2026) · Preguntas #11–#20.
 */
export const UMNG_CONV_2026_07_26_11_20_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-2026-07-26-11",
    university: "UMNG",
    examArea: "MEDICINA TROPICAL / INFECTOLOGÍA",
    topic: "INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un soldado profesional de 24 años, recientemente trasladado tras un operativo de 3 meses en la selva del Catatumbo, consulta por la aparición de una lesión ulcerada en el antebrazo derecho de 4 semanas de evolución. Al examen físico: úlcera de 3 cm de diámetro, bordes elevados, indurados y fondo granulomatoso limpio. La lesión es completamente indolora y no hay adenopatías palpables. Se realiza un frotis directo del borde de la lesión que reporta abundantes amastigotes. Según la guía del Ministerio de Salud de Colombia, ¿cuál es el tratamiento de primera línea y cuál es su principal efecto adverso que obliga a monitorización estricta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Anfotericina B desoxicolato / Nefrotoxicidad severa e hipokalemia.",
        distractorProfile: "second_line_rescue_therapy",
        incorrectFeedback: "Es el tratamiento de rescate para casos refractarios o para formas viscerales graves, pero su perfil de nefrotoxicidad extrema la excluye como primera línea para una úlcera cutánea no complicada."
      },
      {
        id: "B",
        label: "B",
        text: "Miltefosina oral / Hepatotoxicidad y teratogenicidad.",
        distractorProfile: "alternative_oral_regimen",
        incorrectFeedback: "Es el único tratamiento oral y se usa en Colombia, pero se reserva como alternativa ante contraindicaciones del Glucantime o en población pediátrica específica, no es el gold standard primario."
      },
      {
        id: "C",
        label: "C",
        text: "Antimoniato de meglumina (Glucantime) / Cardiotoxicidad (Prolongación del QT) y pancreatitis."
      },
      {
        id: "D",
        label: "D",
        text: "Itraconazol oral / Toxicidad retiniana y neuritis óptica.",
        distractorProfile: "fungal_treatment_confusion",
        incorrectFeedback: "El itraconazol es un antifúngico usado para la Esporotricosis (que da úlceras y nódulos linfáticos), pero no es el tratamiento de los parásitos intracelulares de Leishmania."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta una Leishmaniasis Cutánea clásica (úlcera indolora, bordes levantados, antecedente epidemiológico selvático, amastigotes en frotis). En Colombia (y gran parte de Latinoamérica), los antimoniales pentavalentes, como el Antimoniato de meglumina (Glucantime), siguen siendo la primera línea de tratamiento sistémico para la Leishmaniasis cutánea, mucosa y visceral. La trampa de los exámenes de la Universidad Militar es evaluar tu conocimiento sobre la seguridad de estos fármacos en la tropa. El Glucantime es altamente tóxico; sus efectos adversos más temidos (que obligan a suspender la dosis) son la prolongación del intervalo QTc (riesgo de Torsades de Pointes), la alteración de las enzimas hepáticas y la pancreatitis química (elevación de lipasa/amilasa). Por ello, se exige ECG, pruebas hepáticas y pancreáticas antes y durante el tratamiento.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nColega, en la vida militar verás cientos de estas \"picaduras de pito\" (aunque la transmite la Lutzomyia, no el pito). Nunca le des antibióticos a una úlcera que no duele. Muchos internos se asustan y marcan Anfotericina B (Opción A), pero la Anfotericina es artillería pesada; se reserva para Leishmaniasis Visceral (Kala-azar), Leishmaniasis Mucosa severa o falla terapéutica a los antimoniales. La Miltefosina (Opción B) sí se usa, pero es segunda línea o para niños, no es la terapia inicial estándar para un soldado adulto sin contraindicaciones.",
    keyPoints: [
      "Cuando veas:",
      "• Úlcera crónica INDOLORA con bordes levantados en un paciente que viene de zona selvática (militar, minero, agricultor).",
      "• Frotis con \"amastigotes\".",
      "Debes pensar en:",
      "Leishmaniasis Cutánea. El fármaco rey en Colombia es el Glucantime. Su toxicidad es cardiaca (ECG) y pancreática.",
      "Tema: Enfermedades Transmitidas por Vectores / Leishmaniasis."
    ]
  },
  {
    id: "umng-conv-2026-07-26-12",
    university: "UMNG",
    examArea: "TRAUMA / ORTOPEDIA",
    topic: "ORTOPEDIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un cadete de 19 años sufre un trauma por aplastamiento en su pierna derecha durante un entrenamiento. Se le diagnostica una fractura cerrada de la diáfisis tibial y se le coloca una inmovilización temporal (férula de yeso). Cuatro horas después, el paciente solicita atención quejándose de un dolor insoportable, urente, que clasifica como 10/10 y que no cede a pesar de los opioides intravenosos. Al examen físico, la pierna está tensa, y la dorsiflexión pasiva de los dedos del pie desencadena un grito de dolor en el paciente. Los pulsos pedio y tibial posterior están presentes y el llenado capilar es de 2 segundos. ¿Cuál es el siguiente paso INMEDIATO en el manejo de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar una ecografía Doppler arterial urgente para descartar lesión vascular poplítea.",
        distractorProfile: "diagnostic_delay_trap",
        incorrectFeedback: "El diagnóstico es clínico. Retrasar una intervención tiempo-dependiente (el músculo muere en 4-6 horas) por un examen radiológico constituye negligencia, especialmente cuando los pulsos presentes ya descartan una oclusión arterial mayor aguda."
      },
      {
        id: "B",
        label: "B",
        text: "Retirar la inmovilización, mantener la pierna a nivel del corazón y contactar a cirugía para fasciotomía."
      },
      {
        id: "C",
        label: "C",
        text: "Elevar la extremidad por encima del nivel del corazón y aplicar hielo local para reducir el edema.",
        distractorProfile: "common_sense_wrong_physiology",
        incorrectFeedback: "Elevar la extremidad disminuye la presión de perfusión arterial local. En un compartimento hipertenso, esto reduce aún más el flujo de oxígeno a los tejidos estresados, acelerando la necrosis isquémica."
      },
      {
        id: "D",
        label: "D",
        text: "Esperar a la abolición de los pulsos distales o palidez extrema para indicar la cirugía.",
        distractorProfile: "late_sign_confusion",
        incorrectFeedback: "Las \"5 P\" (Pain, Pallor, Pulselessness, Paresthesia, Paralysis) son clásicas, pero la palidez y la falta de pulso (Pulselessness) ocurren cuando el daño ya es irreversible. Intervenir en esa etapa generalmente resulta en amputación."
      }
    ],
    correctOptionId: "B",
    explanation: "Estamos ante el cuadro clínico más letal para una extremidad: el Síndrome Compartimental Agudo. Este síndrome se diagnostica CLÍNICAMENTE (dolor desproporcionado, dolor al estiramiento pasivo, tensión muscular). El error más catastrófico (y el más evaluado en los exámenes) es creer que se necesitan pulsos ausentes para diagnosticarlo. La ausencia de pulsos es un signo TARDÍO e irreversible de amputación inminente; el síndrome compartimental ocluye primero los capilares y las vénulas (causando isquemia muscular y nerviosa), mientras que la gran arteria (que tiene mayor presión) sigue latiendo. El primer paso siempre es liberar toda restricción externa (quitar yesos/vendas), no elevar la pierna (elevarla disminuye la presión arterial local y empeora la isquemia) y preparar la descompresión quirúrgica inmediata (fasciotomía).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEl interno que espera a que el pulso desaparezca, es el interno que entrega una pierna negra y muerta en el turno. La presión dentro del compartimento para matar el músculo es de unos 30-40 mmHg, pero la presión de la arteria tibial para que sientas el pulso es de 120 mmHg. ¡El músculo se asfixia mucho antes de que la arteria principal se tape! Si elevas la pierna (Opción C), le quitas la fuerza a la gravedad que ayuda a la sangre arterial a entrar al compartimento apretado, empeorando la necrosis. ¡La pierna se deja a nivel del corazón!",
    keyPoints: [
      "Cuando veas:",
      "• Trauma cerrado o fractura de tibia + Dolor desproporcionado a los analgésicos.",
      "• Dolor EXTREMO al estirar pasivamente los dedos.",
      "Debes pensar en:",
      "Síndrome Compartimental. La conducta inmediata es retirar compresiones y Fasciotomía. NO ESPERES a que desaparezca el pulso. NO eleves la extremidad.",
      "Tema: Urgencias Ortopédicas / Síndrome Compartimental."
    ]
  },
  {
    id: "umng-conv-2026-07-26-13",
    university: "UMNG",
    examArea: "URGENCIAS / CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Hombre de 45 años es llevado a urgencias por presentar palpitaciones de inicio súbito, dolor torácico opresivo y visión borrosa. Al examen físico: paciente somnoliento, diaforético, con palidez marcada. Signos vitales: PA 75/40 mmHg, FC 195 lpm, FR 24 rpm, SatO2 93%. Se realiza un ECG de 12 derivaciones que evidencia una taquicardia de complejos estrechos (QRS < 0.12s), regular, sin ondas P visibles. ¿Cuál es la intervención INMEDIATA de primera elección para salvaguardar la vida de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Maniobras vagales (Masaje carotídeo o maniobra de Valsalva).",
        distractorProfile: "stable_algorithm_step_one",
        incorrectFeedback: "Las maniobras vagales son el paso inicial correcto para una TSV, pero única y exclusivamente en pacientes estables."
      },
      {
        id: "B",
        label: "B",
        text: "Adenosina 6 mg en bolo intravenoso rápido, seguido de lavado con solución salina.",
        distractorProfile: "stable_algorithm_pharmacology",
        incorrectFeedback: "Droga de elección para TSV ortodrómica o por reentrada nodal en pacientes estables. Su uso en pacientes chocados retrasa la terapia eléctrica salvavidas."
      },
      {
        id: "C",
        label: "C",
        text: "Cardioversión eléctrica sincronizada."
      },
      {
        id: "D",
        label: "D",
        text: "Amiodarona 150 mg intravenosos a pasar en 10 minutos.",
        distractorProfile: "wide_complex_or_afib_trap",
        incorrectFeedback: "La amiodarona se prefiere en taquicardias de complejo ancho (Taquicardia Ventricular) estables. Administrarla en un paciente ya hipotenso puede agravar el choque debido a los efectos vasodilatadores de su vehículo diluyente."
      }
    ],
    correctOptionId: "C",
    explanation: "Esta es una pregunta pura de soporte vital avanzado (ACLS). El paciente tiene una Taquicardia Supraventricular (TSV). Sin embargo, el análisis del ritmo pasa a un segundo plano cuando evalúas el estado del paciente. El paciente está INESTABLE HEMODINÁMICAMENTE (hipotensión severa de 75/40, alteración del estado mental, dolor torácico isquémico y signos de choque). El algoritmo de la AHA/ACLS es inviolable: TODA taquiarritmia (estrecha, ancha, regular o irregular) que curse con inestabilidad hemodinámica requiere Cardioversión Eléctrica Sincronizada Inmediata. La terapia farmacológica toma demasiado tiempo o deprime aún más la presión arterial.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEn el quirófano de urgencias no hay tiempo para leer el ECG con lupa si el paciente se está apagando. Muchos estudiantes leen \"complejo estrecho regular sin ondas P\" y su cerebro grita: ¡Adenosina! (Opción B). La adenosina es mágica, sí, pero SOLO si el paciente está tomando café y conversando contigo (estable). Si le metes adenosina a un corazón chocado y con presión de 75/40, esa pausa transitoria que hace la adenosina puede convertirse en una asistolia definitiva. Prepara las palas, dale a \"Sincronizar\" (para que la descarga no caiga en la onda T y le causes una Fibrilación Ventricular) y descarga.",
    keyPoints: [
      "Cuando veas:",
      "• Cualquier Taquicardia (FC > 150) + Inestabilidad (Hipotensión, choque, alteración mental, dolor anginoso, falla cardiaca aguda).",
      "Debes pensar en:",
      "¡Electricidad! La respuesta correcta SIEMPRE será Cardioversión Sincronizada. Los medicamentos son para pacientes ESTABLES.",
      "Tema: Reanimación / ACLS (Taquiarritmias)."
    ]
  },
  {
    id: "umng-conv-2026-07-26-14",
    university: "UMNG",
    examArea: "MEDICINA INTERNA / NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un recluta de 18 años colapsa durante una marcha forzada bajo el sol intenso. Es traído a sanidad militar quejándose de mialgias generalizadas severas. Refiere haber orinado muy oscuro, \"color Coca-Cola\". Signos vitales estables, pero luce deshidratado. Laboratorios de ingreso: Creatinina sérica 2.4 mg/dL (basal 0.8), BUN 45 mg/dL, Potasio 5.2 mEq/L, Creatina Cinasa (CK) total 55,000 U/L. El uroanálisis con tira reactiva es fuertemente positivo para \"sangre\", pero el sedimento microscópico muestra 0-1 eritrocitos por campo. ¿Cuál es la piedra angular del tratamiento inicial para evitar la necesidad de terapia de reemplazo renal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Furosemida intravenosa a altas dosis para forzar la diuresis y limpiar los túbulos.",
        distractorProfile: "wrong_diuretic_timing",
        incorrectFeedback: "Los diuréticos solo se consideran (y con mucha controversia) SI el paciente ya está adecuadamente reanimado con volumen y sigue oligúrico. Darlos de entrada en hipovolemia precipita la falla renal."
      },
      {
        id: "B",
        label: "B",
        text: "Infusión agresiva de cristaloides isotónicos (Solución Salina 0.9% o Lactato de Ringer) inmediata."
      },
      {
        id: "C",
        label: "C",
        text: "Bicarbonato de sodio intravenoso profiláctico para alcalinizar la orina.",
        distractorProfile: "outdated_secondary_therapy_made_primary",
        incorrectFeedback: "La alcalinización urinaria es una terapia de segunda línea opcional y discutida. Nunca reemplaza o retrasa la expansión de volumen con cristaloides simples, que es el único paso que disminuye sólidamente la mortalidad renal."
      },
      {
        id: "D",
        label: "D",
        text: "Administración de Manitol al 20% para disminuir el edema muscular y arrastrar pigmentos.",
        distractorProfile: "osmotic_diuresis_trap",
        incorrectFeedback: "El manitol es un diurético osmótico que carece de evidencia concluyente sobre superioridad frente a los cristaloides, y en dosis altas o falla renal instalada, puede acumularse causando edema pulmonar."
      }
    ],
    correctOptionId: "B",
    explanation: "El diagnóstico es innegable: Rabdomiólisis Severa inducida por ejercicio extremo. La destrucción masiva del músculo esquelético libera mioglobina a la sangre. La mioglobina es tóxica para los túbulos renales de tres formas: obstrucción tubular por cilindros, toxicidad oxidativa directa y vasoconstricción renal severa (por eso el paciente hizo una Lesión Renal Aguda con creatinina en 2.4). El truco semiológico de la orina es clave: la tira reactiva no distingue entre hemoglobina y mioglobina, por eso marca \"sangre +++\", pero el microscopio no ve glóbulos rojos (mioglobinuria). La única intervención de primera línea con evidencia absoluta para prevenir el daño renal irreversible es la reanimación hídrica agresiva temprana con cristaloides isotónicos (hasta 10-15 Litros/día si es necesario) para mantener un flujo urinario altísimo (>200-300 ml/hora) que \"lave\" los cilindros de mioglobina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nLa rabdomiólisis destruye riñones porque la mioglobina precipita como cemento en los túbulos cuando hay deshidratación y orina ácida. Tu misión es convertir a ese paciente en una fuente de agua continua. Los líquidos van primero SIEMPRE. El uso de diuréticos de asa como la Furosemida (Opción A) en un paciente hipovolémico está contraindicado porque concentra aún más la mioglobina en el riñón. El Bicarbonato (Opción C) fue popular en los 90s, pero los estudios recientes demuestran que no es superior a la solución salina sola y puede agravar la hipocalcemia que acompaña a la rabdomiólisis.",
    keyPoints: [
      "Cuando veas:",
      "• Entrenamiento militar / Trauma / Inmovilización prolongada.",
      "• Mialgias + Orina oscura + Creatina Cinasa (CK) por las nubes (>10,000).",
      "• Tira reactiva positiva para sangre SIN hematíes en el microscopio.",
      "Debes pensar en:",
      "Rabdomiólisis. El pilar absoluto y primario son los Líquidos Intravenosos a chorro.",
      "Tema: Nefrología / Rabdomiólisis y Falla Renal Aguda."
    ]
  },
  {
    id: "umng-conv-2026-07-26-15",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL / ATLS",
    topic: "CIRUGÍA GENERAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Hombre de 22 años ingresa a urgencias tras recibir una herida por arma blanca en el hemitórax derecho. A su ingreso se encuentra cianótico, agitado y severamente disneico. Signos vitales: PA 80/50 mmHg, FC 135 lpm, SatO2 82%. Al examen físico físico se evidencia ingurgitación yugular marcada, la tráquea está desviada hacia el lado izquierdo. A la percusión, el hemitórax derecho es marcadamente timpánico (hiperresonante) y a la auscultación hay ausencia total de murmullo vesicular en ese lado. ¿Cuál es la conducta inicial correcta que debe ejecutarse en los próximos segundos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Intubación orotraqueal de secuencia rápida para asegurar la vía aérea.",
        distractorProfile: "wrong_abcde_priority",
        incorrectFeedback: "Intubar a este paciente agravará el neumotórax a tensión debido a la ventilación con presión positiva que meterá aire a la fuerza a la cavidad pleural, colapsando el mediastino instantáneamente y causando paro cardíaco en la intubación."
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar radiografía de tórax portátil urgente para confirmar el diagnóstico anatómico.",
        distractorProfile: "fatal_diagnostic_delay",
        incorrectFeedback: "El neumotórax a tensión es una emergencia clínica. Retrasar la descompresión por pruebas de imagen viola el primer principio del soporte vital en trauma (tratar las amenazas inminentes a la vida a medida que se descubren)."
      },
      {
        id: "C",
        label: "C",
        text: "Descompresión con aguja gruesa en el quinto espacio intercostal (o toracostomía digital) inmediata."
      },
      {
        id: "D",
        label: "D",
        text: "Pericardiocentesis subxifoidea guiada por ecografía FAST.",
        distractorProfile: "overlapping_shock_syndrome",
        incorrectFeedback: "Es el tratamiento para el taponamiento cardíaco, el cual comparte la ingurgitación yugular y la hipotensión, pero no desvía la tráquea ni causa timpanismo o ausencia unilateral de ruidos respiratorios."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente está muriendo por un Neumotórax a Tensión. La herida torácica funcionó como una válvula unidireccional: el aire entra a la pleura en cada inspiración, pero no puede salir. El pulmón colapsa, empuja el mediastino hacia el lado sano (tráquea desviada a la izquierda), colapsa la vena cava (ingurgitación yugular) y el retorno venoso cae a cero (choque obstructivo severo con PA de 80/50). Según el ATLS, el neumotórax a tensión es un diagnóstico EXCLUSIVAMENTE clínico. Esperar a una radiografía es firmar el certificado de defunción del paciente. El tratamiento prehospitalario o inmediato en box es la descompresión con aguja (ATLS 10a edición cambió el sitio de elección al 5to espacio intercostal, línea axilar media en adultos, o 2do espacio línea medioclavicular), o la toracostomía digital, antes de colocar el tubo de tórax definitivo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nSi este paciente llega a tu turno y pides una placa de tórax (Opción B), la placa va a salir hermosa... pero será una autopsia radiológica. El diagnóstico te lo dieron las manos y los oídos: no suena, está hueco (timpánico), las venas saltan y la presión está en el piso. Descomprime ese tórax ¡ya!. Y cuidado con confundirlo con el Taponamiento Cardíaco (Opción D). El taponamiento tiene la Tríada de Beck (ruidos cardiacos velados, hipotensión, yugulares ingurgitadas), pero los pulmones suenan NORMAL y la tráquea está CENTRAL.",
    keyPoints: [
      "Cuando veas:",
      "• Trauma torácico + Hipotensión + Venas del cuello distendidas + Ausencia de ruidos en un hemitórax.",
      "Debes pensar en:",
      "Neumotórax a Tensión. Es un diagnóstico clínico. Tratamiento inmediato: Aguja de descompresión o dedo (Toracostomía). NUNCA pedir Radiografía.",
      "Tema: ATLS / Trauma de Tórax."
    ]
  },
  {
    id: "umng-conv-2026-07-26-16",
    university: "UMNG",
    examArea: "PEDIATRÍA / NEONATOLOGÍA",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Recién nacido a término (40 semanas), extraído por cesárea debido a sufrimiento fetal agudo. Al nacer, el líquido amniótico es espeso y \"puré de guisantes\" (teñido de meconio espeso). El neonato nace hipotónico (flácido), pálido y no respira de forma espontánea (apneico). La frecuencia cardíaca inicial es de 70 lpm. Usted lo recibe en la cuna térmica, realiza los pasos iniciales (calentar, secar, estimular y despejar vía aérea con perilla). A pesar de esto, a los 30 segundos de vida, el neonato persiste apneico y con FC de 80 lpm. Siguiendo el algoritmo actual de Reanimación Neonatal (NRP 8va edición), ¿cuál es el paso INMEDIATO a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar intubación orotraqueal inmediata y aspirar la tráquea conectando el tubo a un aspirador de meconio.",
        distractorProfile: "obsolete_historical_guideline",
        incorrectFeedback: "Procedimiento proscrito de rutina desde el 2015 por la AHA/AAP. Retrasa la ventilación alveolar efectiva, que es el objetivo primordial en un recién nacido asfixiado."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar compresiones torácicas coordinadas con ventilación a presión positiva (relación 3:1).",
        distractorProfile: "premature_chest_compressions",
        incorrectFeedback: "Las compresiones en neonatología SOLO se inician cuando la Frecuencia Cardíaca es < 60 lpm después de al menos 30 segundos de ventilación a presión positiva efectiva."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar Ventilación a Presión Positiva (VPP) con bolsa-mascarilla a un ritmo de 40-60 respiraciones por minuto."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar adrenalina intravenosa por vena umbilical debido a bradicardia severa.",
        distractorProfile: "skipping_resuscitation_steps",
        incorrectFeedback: "La farmacología es el último escalón. En el neonato, la bradicardia casi siempre es secundaria a hipoxia (asfixia), no a daño cardiaco primario; revirtiendo la hipoxia con VPP, el corazón acelerará automáticamente."
      }
    ],
    correctOptionId: "C",
    explanation: "Esta pregunta evalúa un cambio paradigmático y crucial en la Reanimación Neonatal (NRP). Hace varios años, a todo niño que nacía deprimido con líquido meconiado se le intubaba inmediatamente para aspirarle la tráquea antes de dejarlo respirar. La evidencia demostró que esto era perjudicial, retrasaba la ventilación y causaba daño de cuerdas vocales. Hoy en día (NRP 7ma y 8va edición), la presencia de meconio YA NO CAMBIA el algoritmo inicial. Si el niño no respira (apnea) o su FC es menor de 100 lpm tras los pasos iniciales (como en este caso, que tiene 80 lpm), el paso universal, absoluto y salvavidas es INICIAR VENTILACIÓN A PRESIÓN POSITIVA (VPP) CON BOLSA-MASCARILLA. Ventilar los pulmones es el paso más importante en toda la reanimación neonatal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., los libros viejos que tienes en la casa te van a hacer perder esta pregunta. La \"Intubación para succión de meconio\" (Opción A) es una trampa histórica. Si gastas 45 segundos tratando de intubar a este niño asfixiado, su corazón se detendrá. Los pulmones del bebé necesitan expandirse y recibir oxígeno ahora mismo. Ponle la mascarilla y dale presión positiva. Si el tórax se mueve, vamos bien. Las compresiones cardiacas (Opción B) solo se inician si, a pesar de dar VPP EFECTIVA durante 30 segundos, la frecuencia cardiaca CAE POR DEBAJO DE 60 lpm. Este niño tiene 80, así que aún le salva la VPP sola.",
    keyPoints: [
      "Cuando veas:",
      "• Neonato con líquido meconiado, que nace deprimido (apneico o hipotónico).",
      "• FC < 100 lpm.",
      "Debes pensar en:",
      "NRP Actualizado. Olvídate de intubar para aspirar meconio. El manejo es igual a cualquier asfixia: Calentar/secar/estimular, y si no mejora, Ventilación a Presión Positiva (VPP).",
      "Tema: Reanimación Neonatal (NRP)."
    ]
  },
  {
    id: "umng-conv-2026-07-26-17",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Mujer de 26 años es llevada a urgencias por síncope en su lugar de trabajo. Presenta dolor abdominal intenso, de inicio súbito en fosa ilíaca derecha, que se irradia al hombro derecho. Refiere un retraso menstrual de 7 semanas, sin otros antecedentes de importancia. Al examen físico: sudorosa, pálida, PA 70/40 mmHg, FC 135 lpm, FR 26 rpm. Abdomen en tabla, doloroso difusamente, con signo de rebote fuertemente positivo y dolor extremo a la movilización del cérvix. ¿Cuál es el manejo INMEDIATO para esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar nivel cuantitativo de beta-hCG sérica y ecografía transvaginal para confirmar viabilidad.",
        distractorProfile: "stable_workup_in_unstable_patient",
        incorrectFeedback: "Es el protocolo perfecto para un embarazo ectópico sospechado en una paciente estable. En choque hemorrágico, el tiempo invertido en estos estudios es letal."
      },
      {
        id: "B",
        label: "B",
        text: "Resucitación hídrica e interconsulta inmediata para Laparotomía exploratoria de urgencia."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Metotrexato intramuscular a dosis de 50 mg/m² por embarazo ectópico diagnosticado.",
        distractorProfile: "medical_management_contraindication",
        incorrectFeedback: "La inestabilidad hemodinámica, los signos de ruptura (líquido libre, irritación peritoneal) y el dolor severo son CONTRAINDICACIONES ABSOLUTAS para el manejo médico con Metotrexato."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar una culdocentesis diagnóstica para confirmar hemoperitoneo antes de intervenir.",
        distractorProfile: "obsolete_invasive_diagnostic",
        incorrectFeedback: "La culdocentesis (punción del fondo de saco de Douglas) es dolorosa, anticuada y ha sido reemplazada por la ecografía FAST en la cama del paciente; pero ante un cuadro clínico tan evidente y catastrófico, no cambia la decisión quirúrgica de ir a pabellón de inmediato."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con un Embarazo Ectópico Roto, una catástrofe obstétrica que produce choque hemorrágico hipovolémico fulminante por sangrado intraperitoneal libre. El dolor irradiado al hombro es el \"Signo de Kehr\", causado por la irritación del nervio frénico por la sangre que llena la cavidad abdominal y toca el diafragma. La clave de esta pregunta (y el motivo por el cual los cirujanos se enojan con los internos) es la inestabilidad hemodinámica (PA 70/40, choque). Un embarazo ectópico ROTO CON CHOQUE es una urgencia quirúrgica absoluta. No hay tiempo para exámenes confirmatorios cruzados; se activan protocolos de transfusión masiva y se lleva directo al quirófano (Laparotomía o Laparoscopia de urgencia dependiendo del equipo, pero la incisión rápida suele ser laparotomía en estado de choque profundo) para detener la hemorragia salpingofaríngea.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEn una mujer joven desmayada y chocada, \"hasta que se demuestre lo contrario, está embarazada y sangrando por dentro\". Si marcas ecografía y beta-hCG cuantitativa (Opción A), la paciente morirá desangrada en la sala de radiología esperando el resultado del laboratorio. El Metotrexato (Opción C) es espectacular, pero SOLO se usa en ectópicos \"tranquilos\" (NO rotos, madre estable, saco pequeño < 4cm, beta-hCG baja). Un ectópico roto con una paciente chocada no se disuelve con pastillas, se sutura en quirófano.",
    keyPoints: [
      "Cuando veas:",
      "• Mujer en edad fértil + Amenorrea + Dolor abdominal súbito.",
      "• Inestabilidad hemodinámica (Hipotensión, taquicardia) + Irritación peritoneal (rebote).",
      "Debes pensar en:",
      "Embarazo ectópico ROTO. Conducta: Quirófano INMEDIATO (Cirugía). NO se piden exámenes diagnósticos demorados, NO se da Metotrexato.",
      "Tema: Urgencias Ginecológicas / Embarazo Ectópico."
    ]
  },
  {
    id: "umng-conv-2026-07-26-18",
    university: "UMNG",
    examArea: "MEDICINA INTERNA / GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Hombre de 55 años, con antecedente de cirrosis hepática alcohólica (Child-Pugh B), es traído a urgencias tras presentar tres episodios de hematemesis masiva y coágulos. Al ingreso: PA 85/50 mmHg, FC 120 lpm. El paciente luce pálido y sudoroso. Se aseguran dos accesos venosos periféricos de grueso calibre, se inician cristaloides y una infusión de Terlipresina intravenosa. Mientras se espera la llegada urgente del endoscopista, ¿qué otra intervención farmacológica profiláctica es MANDATORIA en este paciente ya que ha demostrado disminuir la reaparición del sangrado y la mortalidad global?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Infusión intravenosa de Ácido Tranexámico a altas dosis.",
        distractorProfile: "wrong_hemorrhage_guideline",
        incorrectFeedback: "El ácido tranexámico (antifibrinolítico) tiene evidencia sólida en trauma mayor (estudio CRASH-2) y hemorragia posparto, pero el estudio HALT-IT demostró categóricamente que NO aporta beneficio y sí aumenta el riesgo trombótico venoso en sangrado gastrointestinal."
      },
      {
        id: "B",
        label: "B",
        text: "Administración de un betabloqueador (Propranolol) intravenoso o por sonda nasogástrica.",
        distractorProfile: "chronic_therapy_applied_acutely",
        incorrectFeedback: "Los betabloqueadores no selectivos son fundamentales para prevenir el primer sangrado variceal o evitar recurrencias a largo plazo. Durante la hemorragia aguda están estrictamente contraindicados porque impiden la taquicardia compensatoria necesaria para mantener el gasto cardíaco."
      },
      {
        id: "C",
        label: "C",
        text: "Administración de Ceftriaxona o Norfloxacina (Antibioticoterapia profiláctica)."
      },
      {
        id: "D",
        label: "D",
        text: "Transfusión empírica de Plasma Fresco Congelado y Plaquetas para corregir la coagulopatía cirrótica.",
        distractorProfile: "lab_correction_without_clinical_indication",
        incorrectFeedback: "Corregir un INR prolongado o trombocitopenia rutinariamente con PFC no detiene el sangrado variceal, expande peligrosamente el volumen intravascular (aumentando la presión portal y rompiendo más várices) y no está recomendado por las guías actuales."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta un choque hemorrágico por Sangrado Variceal (Várices esofágicas rotas) secundario a hipertensión portal cirrótica. El manejo inicial exige reanimación, drogas vasoactivas esplácnicas (Terlipresina, Somatostatina u Octreotide) y endoscopia terapéutica antes de las 12 horas. Sin embargo, un principio fundamental avalado por las guías de Baveno es que todo paciente cirrótico con sangrado gastrointestinal alto tiene un riesgo elevadísimo (hasta 50%) de desarrollar infecciones bacterianas (especialmente Peritonitis Bacteriana Espontánea o bacteriemias) en los primeros 7 días. La infección no solo mata por sepsis, sino que interfiere con la hemostasia y precipita el resangrado. La evidencia es contundente: administrar antibióticos profilácticos (Ceftriaxona IV es de elección en sangrado agudo) reduce significativamente la mortalidad y el riesgo de re-sangrado. Es un paso innegociable.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEsta es la típica pregunta que diferencia al especialista del médico general. Todos saben pedir la endoscopia y los líquidos, pero el que salva al paciente es el que recuerda el antibiótico. La sangre en el intestino de un cirrótico alimenta a las bacterias entéricas, estas translocan a la sangre, producen sepsis, liberan heparina endógena y el coágulo de la várice se deshace. Propranolol (Opción B) NUNCA se da en un sangrado agudo; el propranolol es prevención primaria o secundaria a largo plazo, pero en el momento del choque, le quitas al corazón la taquicardia compensatoria y lo matas.",
    keyPoints: [
      "Cuando veas:",
      "• Paciente cirrótico con Hematemesis o Melena.",
      "• Pregunta sobre manejo médico esencial en urgencias (además de los líquidos y octreotide/terlipresina).",
      "Debes pensar en:",
      "Profilaxis antibiótica. Se DEBE dar Ceftriaxona (o quinolonas) a todos, tengan o no fiebre.",
      "Tema: Urgencias Gastroenterológicas / Hemorragia de Vías Digestivas Altas."
    ]
  },
  {
    id: "umng-conv-2026-07-26-19",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un agricultor de 35 años es traído por sus compañeros de cultivo tras encontrarlo convulsionando en el campo donde estaba fumigando. Al ingreso, el paciente está obnubilado, presenta fasciculaciones musculares generalizadas, sudoración profusa, sialorrea masiva y relajación de esfínteres. Signos vitales: PA 90/60 mmHg, FC 45 lpm, FR 28 rpm. Al examen ocular se evidencia miosis puntiforme bilateral. A la auscultación pulmonar hay abundantes estertores crépitos gruesos bilaterales por hipersecreción bronquial. Se diagnostica Intoxicación por Organofosforados y se inicia terapia con Atropina intravenosa. ¿Cuál es el parámetro clínico principal que indica que el paciente ha alcanzado una \"atropinización\" adecuada y se debe frenar la dosis de carga?",
    options: [
      {
        id: "A",
        label: "A",
        text: "La desaparición de las fasciculaciones musculares y la debilidad en las extremidades.",
        distractorProfile: "wrong_receptor_pharmacology",
        incorrectFeedback: "Las fasciculaciones y la parálisis son efectos mediados por receptores NICOTÍNICOS. La atropina solo antagoniza los receptores MUSCARÍNICOS. Por lo tanto, la atropina jamás revertirá el compromiso muscular (se requieren oximas para esto)."
      },
      {
        id: "B",
        label: "B",
        text: "La reversión de la miosis (presencia de midriasis reactiva).",
        distractorProfile: "unreliable_clinical_marker",
        incorrectFeedback: "La midriasis es un efecto de la atropina, pero es un marcador engañoso. Puede ocurrir midriasis precoz o asimetría ocular, e interrumpir el antídoto basándose solo en los ojos conduce al ahogamiento inminente por secreciones residuales en la vía aérea."
      },
      {
        id: "C",
        label: "C",
        text: "La recuperación de la conciencia y la orientación en las tres esferas.",
        distractorProfile: "mixed_toxic_neurological_effects",
        incorrectFeedback: "Los organofosforados penetran el SNC alterando profundamente la conciencia. La recuperación neurológica puede tomar horas o días, y esperar a que el paciente despierte para considerar adecuada la dosis cardiorrespiratoria es incorrecto y peligroso."
      },
      {
        id: "D",
        label: "D",
        text: "La sequedad de las secreciones del árbol traqueobronquial (pulmones limpios)."
      }
    ],
    correctOptionId: "D",
    explanation: "Estamos ante un Síndrome Colinérgico clásico causado por organofosforados (inhibición irreversible de la acetilcolinesterasa). Presenta la mnemotecnia SLUDGE (Salivación, Lagrimeo, Urinario, Diarrea, Gastrointestinal, Emesis) + los DUMBELS (Bradicardia, Broncorrea, Broncoespasmo, Miosis). La causa principal de muerte inmediata es el ahogamiento en sus propias secreciones respiratorias (Broncorrea + Broncoespasmo) por la estimulación de receptores muscarínicos. El antídoto salvavidas es la Atropina (un antagonista muscarínico competitivo). El error clínico más letal es suspender la atropina basándose en las pupilas o la frecuencia cardiaca. La meta clínica (criterio de atropinización) es \"secar\" al paciente: pulmones limpios (ausencia de estertores/secreciones), axilas secas y FC >80 lpm.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nColega, si le quitas la atropina porque \"ya le vi las pupilas grandes\" (Opción B), el paciente se te asfixia en el cubículo en 10 minutos. La pupila puede estar dilatada por hipoxia o responder rápido, mientras que los pulmones siguen inundados de moco espeso. La atropina bloquea lo muscarínico (secreciones y bradicardia), pero ¡cuidado!, la atropina NO bloquea los receptores nicotínicos (los del músculo estriado). Por ende, no curará ni quitará las fasciculaciones musculares (Opción A). Para curar el músculo, necesitas la oximas (Pralidoxima), que sí reactiva la enzima en toda la unión neuromuscular.",
    keyPoints: [
      "Cuando veas:",
      "• Agricultor fumigando + SLUDGE + Pupilas puntiformes + Bradicardia.",
      "• Pregunta: \"¿Hasta cuándo dar Atropina?\".",
      "Debes pensar en:",
      "Intoxicación por Organofosforados. Meta de atropinización = Desaparición de las secreciones pulmonares (secado bronquial) y normalización cardíaca. NO guiarse por la dilatación de las pupilas.",
      "Tema: Toxicología / Plaguicidas inhibidores de la colinesterasa."
    ]
  },
  {
    id: "umng-conv-2026-07-26-20",
    university: "UMNG",
    examArea: "PSIQUIATRÍA / MEDICINA MILITAR",
    topic: "PSIQUIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un sargento de 28 años, dado de baja médica tras sufrir una emboscada con explosivos en la que perdió a varios compañeros hace 8 meses, es llevado a sanidad por su esposa. Ella refiere que él no duerme, se despierta gritando bañado en sudor y, en ocasiones, se lanza al suelo al escuchar el escape de una motocicleta, reaccionando de forma agresiva. El paciente confiesa estar experimentando recuerdos invasivos incontrolables del evento (flashbacks) y evita cualquier reunión social o contacto con excompañeros militares. Se establece el diagnóstico de Trastorno por Estrés Postraumático (TEPT). Además del manejo psicoterapéutico centrado en el trauma, ¿cuál es el tratamiento farmacológico de primera línea a instaurar?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Benzodiacepinas (Clonazepam) a dosis altas para controlar la hipervigilancia y la agresividad.",
        distractorProfile: "harmful_symptomatic_treatment",
        incorrectFeedback: "Contraindicadas de rutina. Aunque bajan la ansiedad transitoriamente, interfieren en el procesamiento del trauma en psicoterapia, aumentan la tolerancia, predisponen al abuso severo y pueden causar excitación paradójica/hostilidad en pacientes traumatizados."
      },
      {
        id: "B",
        label: "B",
        text: "Antipsicóticos atípicos (Risperidona) como monoterapia primaria.",
        distractorProfile: "severe_psychiatry_trap",
        incorrectFeedback: "No son primera línea para TEPT no complicado. Su uso rutinario expone al paciente a síndrome metabólico y efectos extrapiramidales sin tratar el circuito central de la ansiedad traumática."
      },
      {
        id: "C",
        label: "C",
        text: "Inhibidores Selectivos de la Recaptación de Serotonina (ISRS) como Sertralina o Paroxetina."
      },
      {
        id: "D",
        label: "D",
        text: "Ácido Valproico o Litio como estabilizadores del ánimo crónicos.",
        distractorProfile: "bipolar_treatment_applied_wrongly",
        incorrectFeedback: "Fármacos diseñados para el manejo del Trastorno Afectivo Bipolar (manía/depresión). El TEPT no es un desorden primario de ciclaje anímico endógeno, sino una alteración patológica del condicionamiento al miedo, donde estos medicamentos no tienen indicación primaria."
      }
    ],
    correctOptionId: "C",
    explanation: "Esta viñeta clínica es fundamental en el contexto de medicina militar (TEPT post-combate). El diagnóstico está claro, cumpliendo criterios sintomáticos (reviviscencia/flashbacks, evitación, alteraciones cognitivo-anímicas e hiperalerta neurovegetativa) por más de 1 mes de duración (tiene 8 meses). Las guías internacionales de la APA y la OMS establecen que los Inhibidores Selectivos de la Recaptación de Serotonina (ISRS) (principalmente Sertralina y Paroxetina) y los duales IRSN (Venlafaxina) son los ÚNICOS fármacos de primera línea aprobados para reducir globalmente el núcleo sintomático del TEPT. Adicionalmente, de forma off-label con fuerte nivel de evidencia, se puede usar Prazosina (un antagonista alfa-1) específicamente para bloquear las pesadillas de combate mediadas por adrenalina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEn psiquiatría militar, recetar Clonazepam (Opción A) a un veterano con TEPT es encender una bomba de tiempo. Las benzodiacepinas NO tratan el trauma de base, interfieren con la psicoterapia porque impiden que el cerebro \"procese\" y desensibilice el recuerdo, y lo más peligroso: causan desinhibición frontal (el paciente pierde el filtro y se vuelve más explosivo o violento) además del riesgo altísimo de abuso de sustancias (adicción concurrente). Los antipsicóticos (Opción B) no son primera línea, se reservan solo si el paciente hace episodios de psicosis manifiesta con pérdida total de contacto con la realidad, no para los flashbacks clásicos.",
    keyPoints: [
      "Cuando veas:",
      "• Veterano de guerra / Víctima de accidente o violencia que revive el trauma (flashbacks), evita el tema y está hipervigilante meses después.",
      "Debes pensar en:",
      "TEPT. Tratamiento farmacológico primario: ISRS (Sertralina, Paroxetina, Fluoxetina). Psicoterapia (TCC). (El medicamento Prazosina es la perla para tratar las pesadillas).",
      "Tema: Psiquiatría / Trastornos Relacionados con Traumas y Factores de Estrés."
    ]
  }
];
