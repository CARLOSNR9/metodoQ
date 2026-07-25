import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #3 (19 jul 2025) Â· Preguntas #21”“#30.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_21_30_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-21",
    university: "UCC",
    examArea: "Medicina Interna / Neurología / Cuidado Intensivo",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neurologia", "cuidado_intensivo"],
    statement: "Mujer de 28 años, con diagnóstico previo de Miastenia Gravis en manejo crónico con Piridostigmina oral, es traída a urgencias por presentar debilidad muscular generalizada profunda de 48 horas de evolución tras un cuadro de gastroenteritis aguda. A su ingreso: PA 130/80 mmHg, FC 110 lpm. Presenta ptosis palpebral bilateral severa, voz nasal, incapacidad para deglutir saliva y un patrón respiratorio paradójico con uso marcado de músculos accesorios. La Capacidad Vital Forzada (CVF) medida a la cabecera es de 10 mL/kg. Se decide proceder con intubación orotraqueal electiva y traslado a la Unidad de Cuidados Intensivos. Además de iniciar Inmunoglobulina Intravenosa (IGIV) o Plasmaféresis, ¿cuál es la conducta MÁS adecuada respecto a su medicación de base (Piridostigmina)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aumentar la dosis de Piridostigmina al doble y administrarla por sonda nasogástrica para revertir la crisis.",
        distractorProfile: "deadly_cholinergic_overload",
        incorrectFeedback: "Aumentar la dosis en una placa neuromuscular refractaria no mejora la fuerza motora (nicotínica), pero exacerba letalmente los efectos muscarínicos induciendo broncorrea masiva y bradicardia severa."
      },
      {
        id: "B",
        label: "B",
        text: "Suspender temporalmente la Piridostigmina mientras la paciente se encuentre bajo ventilación mecánica invasiva."
      },
      {
        id: "C",
        label: "C",
        text: "Cambiar la Piridostigmina oral a Neostigmina intravenosa en infusión continua para lograr mayor biodisponibilidad.",
        distractorProfile: "wrong_pharmacological_escalation",
        incorrectFeedback: "La administración intravenosa de anticolinesterásicos agrava severamente el manejo de las secreciones de la vía aérea en el paciente bajo ventilación mecánica, complicando el destete respiratorio."
      },
      {
        id: "D",
        label: "D",
        text: "Mantener la dosis basal exacta de Piridostigmina para evitar un rebote de debilidad muscular severa al extubarla.",
        distractorProfile: "unjustified_maintenance_therapy",
        incorrectFeedback: "Mantener el fármaco no previene ningún \"rebote\" porque el problema primario es autoinmune (exceso de anticuerpos), y mantenerlo expone al paciente a neumonías asociadas al ventilador por secreciones espesas."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con una Crisis Miasténica (falla respiratoria inminente evidenciada por CVF < 15 mL/kg y síntomas bulbares severos). El tratamiento pilar en la UCI es el soporte ventilatorio invasivo y la inmunomodulación rápida (IGIV o Plasmaféresis). Una regla de oro en el cuidado intensivo neurocrítico es que, una vez el paciente con crisis miasténica está intubado, los inhibidores de la acetilcolinesterasa (Piridostigmina) DEBEN SUSPENDERSE. Esto se hace por dos razones: 1) Evitar la hipersecreción traqueobronquial colinérgica que complica el manejo del ventilador y favorece neumonías asociadas al ventilador, y 2) Descartar que el cuadro tenga un componente de \"Crisis Colinérgica\" por sobredosis acumulativa del fármaco, permitiendo que la placa neuromuscular se \"limpie\" y recupere su sensibilidad.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, en neurología esta pregunta tumba a la mayoría. El instinto médico te dice \"si el paciente está débil por falta de acetilcolina, dale más medicina\". ¡Falso! En la crisis miasténica severa, la placa motora está tan tapada por anticuerpos que la piridostigmina ya no tiene dónde actuar. Si le das más dosis (opción A o C), solo vas a hiperestimular los receptores muscarínicos del pulmón, inundando el tubo endotraqueal de mocos espesos (broncorrea colinérgica) y causando un SDRA o atelectasias masivas. Intubas, suspendes la pastilla, lavas la sangre con plasmaféresis y, días después, cuando la vayas a extubar, reinicias la piridostigmina.",
    keyPoints: [
      "Paciente con Miastenia Gravis que desarrolla debilidad bulbar/respiratoria (Crisis Miasténica).",
      "Indicación de intubación orotraqueal (CVF < 15-20 mL/kg).",
      "Suspensión inmediata de los anticolinesterásicos (Piridostigmina) una vez intubado, e inicio de IGIV o Plasmaféresis.",
      "Tema: Urgencias Neurológicas / Crisis Miasténica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-22",
    university: "UCC",
    examArea: "Pediatría / Nefrología",
    topic: "Nefrología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "nefrologia"],
    statement: "Un niño de 4 años fue diagnosticado hace 8 semanas con Síndrome Nefrótico Idiopático (edema, proteinuria de 50 mg/mÂ²/h e hipoalbuminemia de 1.8 g/dL). Se inició tratamiento estandarizado con Prednisolona vía oral a dosis de 60 mg/mÂ²/día. Hoy acude a control evidenciándose persistencia de edema facial y escrotal. Los exámenes de control reportan: Albúmina sérica de 2.0 g/dL y un parcial de orina con proteinuria masiva (relación Pr/Cr en orina de 4.5). Sus niveles de complemento (C3 y C4) son normales y la serología viral es negativa. ¿Cuál es el paso INMEDIATO de mayor relevancia clínica y pronóstica para reorientar el manejo de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Adicionar un Inhibidor de la Enzima Convertidora de Angiotensina (Enalapril) y continuar la Prednisolona por 4 semanas más.",
        distractorProfile: "insufficient_conservative_management",
        incorrectFeedback: "Los IECAs son terapias coadyuvantes antiproteinúricas útiles, pero continuar con un esquema de esteroides que ya demostró fracaso clínico (superando las 6 semanas) expone al niño a toxicidad grave sin beneficio primario."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar terapia inmunosupresora de segunda línea con Ciclofosfamida o Tacrolimus de forma empírica.",
        distractorProfile: "blind_immunosuppression_trap",
        incorrectFeedback: "El uso de inhibidores de calcineurina o agentes alquilantes está indicado en la corticorresistencia, pero NUNCA se inician de forma empírica sin una biopsia renal previa que clasifique el tipo histológico de lesión."
      },
      {
        id: "C",
        label: "C",
        text: "Indicar de forma prioritaria la realización de una biopsia renal percutánea."
      },
      {
        id: "D",
        label: "D",
        text: "Doblar la dosis actual de Prednisolona y administrar pulsos de Metilprednisolona intravenosa.",
        distractorProfile: "dangerous_steroid_overload",
        incorrectFeedback: "Aumentar aún más las dosis de esteroides en un paciente francamente corticorresistente no inducirá remisión, pero precipitará complicaciones agudas como cataratas, osteopenia severa y supresión suprarrenal."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta un Síndrome Nefrótico Corticorresistente (SNCR), definido formalmente por la persistencia de proteinuria en rango nefrótico a pesar de haber completado 4 a 6 semanas (dependiendo de la guía ISKDC o KDIGO) de tratamiento con corticosteroides a dosis plenas. En pediatría, el síndrome nefrótico típico (usualmente de Cambios Mínimos) no se biopsia de entrada porque asume una alta tasa de respuesta a esteroides. SIN EMBARGO, ante la instauración de corticorresistencia, el algoritmo cambia radicalmente: la indicación de biopsia renal percutánea se vuelve ABSOLUTA. Esto es debido a que la etiología probable deja de ser Cambios Mínimos y cambia hacia Glomeruloesclerosis Focal y Segmentaria (GEFS) o patologías genéticas podocitarias, las cuales requieren confirmación histológica antes de exponer al niño a inmunosupresores de alta toxicidad celular.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, en pediatría, la aguja de biopsia se guarda celosamente hasta que el esteroide fracasa. Un niño de 4 años con síndrome nefrótico debe \"secarse\" (remitir la proteinuria) en menos de 4 semanas. Si llegas a la semana 6 y la orina sigue espumosa con proteínas altísimas, el diagnóstico ya no es una simple enfermedad de cambios mínimos benigna. Tiene alta probabilidad de ser una GEFS. No puedes empezar a darle Tacrolimus o Ciclosporina (Opción B) a ciegas sin ver primero bajo el microscopio electrónico si los podocitos están esclerosados o si hay una mutación genética, porque si es genético (mutación de nefrina/podocina), los inmunosupresores no le servirán de nada y solo le destrozarán la médula ósea.",
    keyPoints: [
      "Niño con síndrome nefrótico que NO remite la proteinuria tras 4 a 6 semanas de esteroides a dosis plenas.",
      "Confirmación de Corticorresistencia.",
      "Biopsia Renal Obligatoria. No se debe iniciar quimioterapia/inmunosupresión mayor (inhibidores de calcineurina) sin tener el resultado histopatológico y descartar causas genéticas.",
      "Tema: Síndrome Nefrótico Pediátrico / Corticorresistencia."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-23",
    university: "UCC",
    examArea: "Medicina Interna / Cardiología / Nefrología",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "nefrologia"],
    statement: "Hombre de 55 años con antecedente de Enfermedad Renal Crónica estadio 5 en hemodiálisis trisemanal, quien reporta haber faltado a sus últimas cuatro sesiones (hace 9 días). Es traído a urgencias por presentar dolor torácico retroesternal de características pleuríticas, que empeora en decúbito supino y mejora al inclinarse hacia adelante. Al examen físico: PA 118/78 mmHg, FC 98 lpm, SatO2 96%, sin ingurgitación yugular y sin pulso paradójico. A la auscultación se evidencia un frote pericárdico rudo trifásico en el borde esternal izquierdo. El ecocardiograma de ingreso muestra un derrame pericárdico circunferencial leve (<10 mm) sin colapso de cavidades derechas ni variaciones respiratorias significativas. Paraclínicos: BUN de 145 mg/dL, Creatinina 11.2 mg/dL. ¿Cuál es el tratamiento de PRIMERA LÍNEA para el cuadro actual de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar manejo inmediato con AINEs (Ibuprofeno a dosis altas) asociados a Colchicina por 3 meses.",
        distractorProfile: "automatic_guideline_misapplication",
        incorrectFeedback: "El tratamiento con AINEs y colchicina es el estándar para la pericarditis aguda viral/idiopática, pero es completamente ineficaz en la pericarditis urémica, donde la causa inflamatoria es la acumulación de toxinas no dializadas."
      },
      {
        id: "B",
        label: "B",
        text: "Coordinar el inicio de una sesión de Hemodiálisis de urgencia intensiva."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar Pericardiocentesis evacuadora guiada por ecografía para análisis del líquido pericárdico.",
        distractorProfile: "premature_invasive_procedure",
        incorrectFeedback: "La pericardiocentesis se reserva estrictamente para pacientes con evidencia clínica o ecocardiográfica de taponamiento cardíaco inminente; invadir un derrame pericárdico leve conlleva un riesgo de perforación miocárdica injustificado."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar pulsos de Metilprednisolona intravenosa de forma prioritaria.",
        distractorProfile: "wrong_immunosuppression_use",
        incorrectFeedback: "Los corticosteroides sistémicos se reservan para pericarditis autoinmunes severas o refractarias (ej. Lupus) y no depuran la causa primaria de la inflamación tóxica urémica."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Pericarditis Urémica clásica, diagnosticada por la clínica (dolor pericárdico), el frote rudo patognomónico y el contexto de síndrome urémico severo (BUN > 100 mg/dL por abandono de diálisis). A diferencia de la pericarditis aguda viral/idiopática, la fisiopatología de la pericarditis urémica es puramente tóxica/inflamatoria por retención de toxinas nitrogenadas. Por lo tanto, NO responde al manejo convencional con AINEs o Colchicina. Las guías internacionales establecen que la presencia de frote o pericarditis clínica en un paciente con ERC es una INDICACIÓN ABSOLUTA de diálisis de urgencia (o intensificación del esquema dialítico si ya lo recibe). El derrame pericárdico es leve y no tiene signos ecográficos ni clínicos de taponamiento (no hay colapso de VD, no hay pulso paradójico), por lo que el drenaje invasivo no está indicado.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Mucho ojo con no actuar en modo \"piloto automático\", Colega. Si ves \"pericarditis\", el cerebro grita \"¡Ibuprofeno y Colchicina!\" (Opción A). Pero el paciente tiene la creatinina en 11 y el BUN en 145; los AINEs son inútiles contra las toxinas urémicas y agravarían el riesgo de sangrado pericárdico por la disfunción plaquetaria de la uremia. La diálisis es el único mecanismo capaz de \"lavar\" la urea de la sangre y desinflamar el pericardio. Tampoco debes puncionar (Opción C) un derrame de 8 mm en un paciente urémico estable; la aguja rozará el ventrículo y causarás una hemorragia miocárdica iatrogénica letal.",
    keyPoints: [
      "Paciente con Enfermedad Renal Crónica / elevación marcada de BUN (> 80-100 mg/dL).",
      "Dolor torácico pleurítico que mejora al sentarse + frote pericárdico a la auscultación.",
      "Ausencia de signos de taponamiento cardíaco.",
      "Pericarditis Urémica. El tratamiento curativo es iniciar/intensificar la Hemodiálisis. AINEs y Colchicina están inindicados.",
      "Tema: Urgencias Dialíticas / Pericarditis Urémica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-24",
    university: "UCC",
    examArea: "Pediatría / Infectología / Neumología",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "neumologia"],
    statement: "Niña de 10 años, con diagnóstico de Fibrosis Quística (mutación F508del homocigota), es hospitalizada por una exacerbación pulmonar aguda caracterizada por aumento de la tos, volumen de esputo francamente purulento, caída del VEF1 en un 15% respecto a su basal y pérdida de peso reciente. En su historia clínica, los cultivos de esputo de hace 6 meses y 1 año documentaron colonización crónica por *Pseudomonas aeruginosa* (cepas mucoides). La paciente no luce en choque, pero se encuentra muy sintomática. Según los estándares de cuidado para la exacerbación infecciosa en Fibrosis Quística colonizada, ¿cuál de los siguientes regímenes antibióticos es el de PRIMERA LÍNEA MÁS apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cefepime intravenoso como monoterapia a dosis altas.",
        distractorProfile: "dangerous_monotherapy_in_cf",
        incorrectFeedback: "La monoterapia intravenosa en exacerbaciones agudas por *Pseudomonas* en FQ se asocia a tasas inaceptablemente altas de fracaso terapéutico y emergencia rápida de resistencia antimicrobiana intra-hospitalaria."
      },
      {
        id: "B",
        label: "B",
        text: "Ceftazidima intravenosa asociada a Tobramicina intravenosa."
      },
      {
        id: "C",
        label: "C",
        text: "Levofloxacino oral en dosis única diaria asociado a Azitromicina.",
        distractorProfile: "inadequate_oral_coverage",
        incorrectFeedback: "Las fluoroquinolonas orales se reservan para exacerbaciones muy leves en ámbito ambulatorio; una exacerbación hospitalaria con pérdida de VEF1 exige la biodisponibilidad y potencia de la terapia combinada parenteral."
      },
      {
        id: "D",
        label: "D",
        text: "Tobramicina inhalada de forma exclusiva sin necesidad de manejo sistémico por la estabilidad hemodinámica.",
        distractorProfile: "inappropriate_acute_management",
        incorrectFeedback: "Los antibióticos inhalados (como tobramicina o colistina) se utilizan crónicamente para suprimir la carga bacteriana ambulatoria, pero carecen de la penetración alveolar profunda requerida para resolver un episodio inflamatorio agudo lobar."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con una exacerbación pulmonar aguda en el contexto de una Fibrosis Quística (FQ) con colonización crónica confirmada por *Pseudomonas aeruginosa*. Las guías de la Cystic Fibrosis Foundation (CFF) establecen categóricamente que, para tratar una exacerbación aguda en un paciente colonizado por *Pseudomonas*, el tratamiento de elección EXIGE una terapia combinada intravenosa con **dos** antibióticos de diferentes clases con actividad antipseudomónica (terapia dual). Esto se realiza para asegurar un efecto bactericida sinérgico y, fundamentalmente, para prevenir la aparición in vivo de cepas extremadamente resistentes. La combinación clásica recomendada es un beta-lactámico antipseudomónico (Ceftazidima, Cefepime, Meropenem o Piperacilina-Tazobactam) asociado a un aminoglucósido (Tobramicina o Amikacina).",
    keyPoints: [
      "Niño/adulto con Fibrosis Quística colonizado por *Pseudomonas aeruginosa*.",
      "Cuadro clínico de exacerbación pulmonar infecciosa aguda.",
      "Terapia intravenosa DUAL obligatoria antipseudomónica (ej. Ceftazidima + Aminoglucósido). La monoterapia está proscrita en exacerbaciones severas de FQ.",
      "Tema: Fibrosis Quística / Exacerbación Pulmonar."
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica porque evalúa la prevención de resistencia bacteriana en exacerbaciones pulmonares de FQ.

La clave no es iniciar antibiótico de amplio espectro en monoterapia.
La clave es:
Terapia combinada intravenosa con dos antipseudomónicos de diferentes clases en pacientes con FQ colonizados por Pseudomonas.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Fibrosis Quística con mutación F508del.
• Exacerbación aguda: caída del VEF1, esputo purulento, tos.
• Colonización crónica por Pseudomonas aeruginosa mucoide.

¿Por qué la opción B es la respuesta correcta?
La combinación de Ceftazidima (beta-lactámico antipseudomónico) más Tobramicina (aminoglucósido) asegura un efecto sinérgico y previene la rápida resistencia que surge durante el tratamiento agudo hospitalario de cepas formadoras de biopelículas.

¿Por qué NO cefepime en monoterapia?
En la Fibrosis Quística, la Pseudomonas vive protegida bajo una biopelícula (biofilm) espesa de alginato. Si usas monoterapia, las bacterias mutarán sus porinas en menos de 48 horas creando cepas multirresistentes inmanejables. La monoterapia está proscrita en exacerbaciones severas de FQ.

¿Por qué NO levofloxacino oral?
Las quinolonas orales están reservadas para exacerbaciones muy leves de manejo estrictamente ambulatorio sin compromiso de la función pulmonar. Con caída del VEF1, se requiere la potencia de la vía intravenosa.

¿Por qué NO tobramicina inhalada exclusiva?
La terapia inhalada es el pilar de mantenimiento ambulatorio para frenar la colonización, pero no alcanza la penetración alveolar profunda necesaria para resolver un episodio inflamatorio consolidativo agudo.

¿Cuál es la trampa de examen?
Muchos estudiantes piensan:
"Cefepime es un antibiótico de muy amplio espectro, con eso bastará."
Pero el dato decisivo es:
En fibrosis quística colonizada, la Pseudomonas siempre requiere DOS mecanismos de acción diferentes durante una crisis grave (uno para la pared y otro intracelular).

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar paciente con FQ exacerbado y caída de función pulmonar.
2. Confirmar antecedente de colonización por Pseudomonas.
3. Iniciar manejo intrahospitalario intravenoso.
4. Prescribir obligatoriamente DOBLE terapia antipseudomónica (Beta-lactámico + Aminoglucósido).

Perlas de examen
✅ FQ con caída de VEF1 = Exacerbación aguda grave = Manejo IV hospitalario.
✅ Exacerbación por Pseudomonas = Siempre terapia combinada doble.
✅ Monoterapia intravenosa antipseudomónica = Fracaso garantizado en FQ.
✅ Tratamiento inhalado = Mantenimiento, NUNCA manejo de crisis aguda.

Referencias
• Cystic Fibrosis Foundation Pulmonary Exacerbations Guidelines.
• Nelson Textbook of Pediatrics.
• UpToDate: Treatment of acute pulmonary exacerbations in cystic fibrosis.`
  },
  {
    id: "ucc-conv-2025-07-19-25",
    university: "UCC",
    examArea: "Medicina Interna / Endocrinología",
    topic: "Endocrinología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia"],
    statement: "Mujer de 42 años acude a consulta por hallazgo incidental de una masa cervical anterior. Al examen físico se palpa un nódulo tiroideo en el lóbulo derecho, de consistencia firme, móvil, indoloro. No hay adenopatías cervicales palpables. Se realiza una ecografía de tiroides que describe un nódulo sólido, hipoecogénico, de bordes regulares, sin microcalcificaciones, con un diámetro máximo de 2.2 cm (TIRADS 4). Los paraclínicos iniciales solicitados reportan una TSH sérica de 0.05 mUI/L (marcadamente suprimida, rango normal 0.4-4.0), con niveles de T4 libre y T3 total normales. ¿Cuál es el paso INMEDIATO MÁS adecuado a seguir en la evaluación de este nódulo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar una Punción Aspiración con Aguja Fina (PAAF) guiada por ecografía basándose en el diámetro mayor a 1.5 cm.",
        distractorProfile: "premature_biopsy_without_functional_status",
        incorrectFeedback: "La PAAF está indicada por ecografía únicamente si la TSH es normal o elevada (o si la gammagrafía demuestra un nódulo frío); puncionar un nódulo funcionante sin estudio isotópico previo viola el algoritmo diagnóstico y genera falsos diagnósticos citológicos."
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar de forma prioritaria una Gammagrafía Tiroidea con Iodo-123 o Tecnecio-99m."
      },
      {
        id: "C",
        label: "C",
        text: "Prescribir Metimazol para normalizar el perfil hormonal antes de decidir la resección quirúrgica.",
        distractorProfile: "premature_medical_therapy",
        incorrectFeedback: "Aunque los antitiroideos pueden ser parte del tratamiento futuro de un adenoma tóxico, iniciar manejo farmacológico sin confirmar el estado funcional anatómico con gammagrafía enmascara el cuadro subyacente."
      },
      {
        id: "D",
        label: "D",
        text: "Programar Lobectomía tiroidea derecha debido al alto riesgo de malignidad por el aspecto hipoecogénico ecográfico.",
        distractorProfile: "unjustified_surgery",
        incorrectFeedback: "Un nódulo hiperfuncionante asintomático sin confirmación de malignidad no tiene indicación quirúrgica de urgencia; la cirugía inmediata es un sobretratamiento radical inaceptable."
      }
    ],
    correctOptionId: "B",
    explanation: "El abordaje del nódulo tiroideo está estrictamente protocolizado por las guías de la American Thyroid Association (ATA). El primer paso laboratorial absoluto ante un nódulo tiroideo clínico o ecográfico es medir la TSH sérica. Si la TSH es normal o alta, el nódulo se evalúa según sus características ecográficas (tamaño y sospecha) para decidir la biopsia (PAAF). SIN EMBARGO, si la TSH se encuentra **suprimida** (baja), indica que la glándula está produciendo hormona de forma autónoma. En este caso específico, el siguiente paso OBLIGATORIO es una Gammagrafía Tiroidea. Si el nódulo es \"caliente\" (hipercaptante/autónomo), el riesgo de malignidad es inferior al 1%, y la PAAF NO ESTÁ INDICADA, manejándose como un adenoma tóxico. Solo si el nódulo resulta ser \"frío\" (no captante), se procede a la PAAF.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, aquí el algoritmo te tienta a equivocarte. Si ves un nódulo TIRADS 4 de 2.2 cm, tu mente grita \"¡punción a la aguja!\" (Opción A). Pero el nódulo es inteligente, el algoritmo te pone un \"peaje\" previo: la TSH. Si la TSH es de 0.05, significa que el nódulo es una fábrica hiperactiva de hormonas (un adenoma tóxico o nódulo caliente). El cáncer de tiroides es tejido desorganizado que casi nunca es capaz de producir hormona tiroidea funcionante. Por ende, los nódulos \"calientes\" en gammagrafía casi nunca son cáncer. Si lo puncionas sin necesidad, puedes inducir un sangrado intra-nodular masivo, además de desperdiciar recursos del sistema de salud.",
    keyPoints: [
      "Paciente con nódulo tiroideo palpable o ecográfico.",
      "TSH marcadamente disminuida (suprimida).",
      "Realizar Gammagrafía Tiroidea inmediata para evaluar funcionalidad. NUNCA puncionar de primera línea un nódulo con TSH suprimida sin conocer si es hiperfuncionante.",
      "Tema: Nódulo Tiroideo / Gammagrafía."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-26",
    university: "UCC",
    examArea: "Medicina Interna / Infectología / Neurología",
    topic: "Infectología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "infectologia", "neurologia"],
    statement: "Hombre de 35 años, con antecedente de infección por VIH en estado de abandono crónico del tratamiento antirretroviral (TARV), acude por cuadro de 3 semanas de progresión insidiosa de debilidad en el hemicuerpo izquierdo, inestabilidad de la marcha, dificultad para la articulación de palabras (disartria) y déficit de atención leve. Niega fiebre, cefalea o convulsiones. Examen neurológico: hemiparesia espástica izquierda profunda, hemianopsia homónima izquierda y ataxia franca. El recuento actual de CD4 es de 35 cél/mmÂ³. Una Resonancia Magnética (RMN) cerebral simple y con contraste evidencia múltiples lesiones extensas, asimétricas y confluentes en la sustancia blanca periventricular y subcortical del hemisferio derecho y fosa posterior; dichas lesiones NO captan medio de contraste, NO generan edema perilesional y NO presentan efecto de masa. ¿Cuál es el diagnóstico MÁS probable y su tratamiento específico de primera línea?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Linfoma Primario del SNC; se debe iniciar Metotrexato sistémico y radioterapia craneal.",
        distractorProfile: "wrong_radiological_pattern_lymphoma",
        incorrectFeedback: "El linfoma primario del SNC típicamente se presenta como una o pocas lesiones focales periventriculares que presentan captación sólida o en anillo irregular de contraste, asociado a un marcado efecto de masa tumoral."
      },
      {
        id: "B",
        label: "B",
        text: "Encefalitis por Toxoplasma gondii; iniciar terapia empírica con Pirimetamina y Sulfadiazina.",
        distractorProfile: "wrong_radiological_pattern_toxoplasma",
        incorrectFeedback: "La toxoplasmosis cerebral se manifiesta clásicamente por múltiples lesiones nodulares en los ganglios basales que presentan un intenso realce en anillo tras la administración de gadolinio, con abundante edema vasogénico periférico."
      },
      {
        id: "C",
        label: "C",
        text: "Leucoencefalopatía Multifocal Progresiva (LMP); el tratamiento exige el inicio temprano y optimización de la terapia antirretroviral (TARV)."
      },
      {
        id: "D",
        label: "D",
        text: "Encefalitis por Citomegalovirus (CMV); administrar Ganciclovir endovenoso de forma prioritaria.",
        distractorProfile: "rare_cmv_manifestation",
        incorrectFeedback: "La encefalitis por CMV es una entidad subaguda que produce un patrón de ventriculoencefalitis con realce ependimario difuso, muy distante del daño focal en la sustancia blanca profunda (leucoencefalopatía) descrito."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta la descripción clínica y radiológica perfecta de la Leucoencefalopatía Multifocal Progresiva (LMP), una enfermedad desmielinizante subaguda causada por la reactivación del Virus JC en pacientes con inmunosupresión profunda (CD4 clásicamente < 100). Su sello patognomónico distintivo frente a otras infecciones oportunistas en la neuroimagen (RMN) es la presencia de lesiones en la sustancia blanca que carecen de realce (no captan contraste) y no presentan efecto de masa ni edema perilesional, a diferencia de la toxoplasmosis o el linfoma. Lamentablemente, no existe ningún fármaco antiviral o terapia dirigida que destruya el virus JC con eficacia clínica probada. El ÚNICO tratamiento que mejora la supervivencia en la LMP es la reconstitución rápida del sistema inmunológico celular mediante el inicio y optimización urgente de la Terapia Antirretroviral (TARV).",
    keyPoints: [
      "Paciente con VIH severamente inmunosuprimido (CD4 < 50-100).",
      "Déficit neurológico focal subagudo SIN fiebre ni cefalea (apiretico).",
      "RMN cerebral: Lesiones en sustancia blanca, ASIMÉTRICAS, SIN realce de contraste y SIN efecto de masa/edema.",
      "Leucoencefalopatía Multifocal Progresiva (Virus JC). Tratamiento: Iniciar o reiniciar el TARV inmediatamente (Inmunoreconstitución).",
      "Tema: Infecciones Oportunistas SNC / VIH."
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de infectología neurológica porque evalúa la capacidad de diferenciar lesiones cerebrales en pacientes con VIH basándose en un patrón radiológico clave.

La clave no es formular un antibiótico o antiviral específico.
La clave es:
Identificar las lesiones "silenciosas" (sin edema, sin realce) del Virus JC e iniciar urgentemente la Terapia Antirretroviral (TARV).

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 35 años con infección por VIH y abandono crónico del TARV.
• Inmunosupresión profunda (CD4 = 35 cél/mm³).
• Déficit neurológico focal subagudo (hemiparesia, ataxia, disartria) sin síntomas de hipertensión endocraneana ni fiebre.
• RMN: Lesiones en la sustancia blanca asimétricas que NO captan contraste, NO tienen edema y NO generan efecto de masa.

¿Por qué la opción C es la respuesta correcta?
El cuadro clínico y el hallazgo radiológico "fantasma" son patognomónicos de la Leucoencefalopatía Multifocal Progresiva (LMP) causada por la reactivación del Virus JC. Dado que ningún antiviral ha demostrado eficacia probada contra este virus, la única intervención salvadora es reconstituir el sistema inmunitario del paciente reiniciando o ajustando rápidamente la Terapia Antirretroviral.

¿Por qué fallan las otras opciones?
• Linfoma Primario del SNC (A): Produce lesiones periventriculares que SÍ captan contraste (a menudo de forma sólida o en anillo irregular) y generan importante efecto de masa.
• Toxoplasmosis cerebral (B): Cursa clásicamente con lesiones nodulares múltiples en ganglios basales que presentan intenso realce en anillo con gadolinio y abundante edema vasogénico.
• Encefalitis por CMV (D): Genera una ventriculoencefalitis con realce ependimario, no un daño en la sustancia blanca profunda sin realce. Además, el paciente típico con CMV presenta más síntomas constitucionales.

¿Cuál es la trampa del examen?
Muchos estudiantes asumen que cualquier infección grave en el SNC requiere un tratamiento antimicrobiano directo (como Ganciclovir o Pirimetamina).
Pero el dato decisivo es:
Frente al Virus JC causando LMP, el único "fármaco" eficaz son los propios linfocitos CD4 del paciente, los cuales solo se recuperan reiniciando el TARV.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Paciente con VIH severamente inmunosuprimido y síntomas focales subagudos.
2. Evaluar RMN cerebral.
3. Si hay múltiples nódulos con realce en anillo y edema: Toxoplasmosis.
4. Si hay lesión(es) focal(es) grande(s) con realce y efecto de masa: Linfoma.
5. Si hay daño asimétrico en sustancia blanca SIN realce, SIN edema, SIN efecto de masa: LMP por Virus JC.
6. Manejo de LMP: Reconstitución inmunológica con TARV lo antes posible.

Perlas de examen
✅ LMP (Virus JC) = Lesiones en RMN sin realce, sin edema y sin efecto de masa ("lesiones fantasma").
✅ Toxoplasmosis = Múltiples nódulos con realce en anillo y edema periférico.
✅ Linfoma = Masa periventricular única/pocas con realce y efecto de masa.
✅ El único tratamiento para la LMP es el rescate inmunológico (TARV).

Referencias
• Harrison's Principles of Internal Medicine: HIV/AIDS.
• Guidelines for the Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV.
• UpToDate: Progressive multifocal leukoencephalopathy (PML): Treatment and prognosis.`
  },
  {
    id: "ucc-conv-2025-07-19-27",
    university: "UCC",
    examArea: "Pediatría / Gastroenterología / Cirugía",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "gastroenterologia", "cirugia"],
    statement: "Un lactante masculino de 5 semanas de vida es traído a consulta pediátrica por ictericia persistente desde su segunda semana de nacimiento. A diferencia de las primeras semanas, la madre nota ahora que los pañales presentan deposiciones de color masilla/blanco tiza (acolia sostenida) y la orina mancha intensamente el pañal de color té (coluria). El niño ha ganado peso discretamente pero su desarrollo es normal. Al examen físico: ictericia generalizada verdínica, hepatomegalia de consistencia firme a 4 cm del reborde costal; el bazo no es palpable. Paraclínicos: Bilirrubina Total 12.5 mg/dL, Bilirrubina Directa 9.8 mg/dL, ALT 115 U/L, AST 130 U/L, GGT 850 U/L. Una ecografía hepática en ayuno muestra vesícula biliar ausente (o un cordón fibroso remanente) y presencia del \"signo del cordón triangular\" en el hilio hepático. Con este diagnóstico altamente probable, ¿cuál es la intervención TARDÍA o complicación irreversible que se busca prevenir al establecer un límite de edad crítico (<60-90 días) para el procedimiento corrector?",
    options: [
      {
        id: "A",
        label: "A",
        text: "El desarrollo inminente de encefalopatía por depósito de bilirrubina indirecta en los ganglios basales (Kernicterus).",
        distractorProfile: "toxicological_pathway_error",
        incorrectFeedback: "El Kernicterus es una complicación neurotóxica exclusiva del depósito de bilirrubina INDIRECTA (no conjugada, liposoluble). En la atresia biliar, el aumento es predominante o exclusivamente de bilirrubina DIRECTA, la cual es hidrosoluble y no penetra el SNC."
      },
      {
        id: "B",
        label: "B",
        text: "La aparición de un carcinoma hepatocelular primario de la infancia desencadenado por la inflamación ductal.",
        distractorProfile: "wrong_oncological_timeline",
        incorrectFeedback: "Aunque la atresia de vías biliares produce cirrosis (factor de riesgo tumoral en adultos), el carcinoma hepatocelular no es la complicación temprana que marca el reloj de supervivencia a los 3 meses de vida del bebé."
      },
      {
        id: "C",
        label: "C",
        text: "El establecimiento de cirrosis biliar secundaria progresiva y falla hepática terminal, requiriendo trasplante."
      },
      {
        id: "D",
        label: "D",
        text: "La obliteración del conducto pancreático accesorio con desarrollo de insuficiencia exocrina nutricional profunda.",
        distractorProfile: "wrong_organ_system",
        incorrectFeedback: "La atresia afecta de forma focal y progresiva al árbol biliar intra y extrahepático; el conducto pancreático drena de forma independiente hacia el duodeno en su mayoría, por lo que la insuficiencia pancreática no es la secuela primaria temida de este síndrome."
      }
    ],
    correctOptionId: "C",
    explanation: "El lactante cursa con una Atresia de Vías Biliares (AVB), la causa número uno de ictericia neonatal colestásica (directa) y la indicación más frecuente de trasplante hepático infantil en el mundo. La presentación patognomónica involucra un niño que \"luce bien\" pero presenta acolia, coluria y un nivel altísimo de bilirrubina conjugada/directa y GGT. El hallazgo ecográfico del \"signo del cordón triangular\" (tejido fibroso hiper-ecogénico en el hilio) sella la alta sospecha. La urgencia absoluta en el diagnóstico de la AVB radica en que el tejido inflamatorio biliar destruye el parénquima hepático silenciosamente. Si el procedimiento quirúrgico corrector (Portoenterostomía de Kasai) se realiza tarde (típicamente después de los 60 a 90 días de vida), el daño parenquimatoso ya ha progresado a una Cirrosis Biliar Secundaria irreversible, haciendo que la cirugía de Kasai fracase y condenando al niño a requerir un trasplante hepático inmediato para no morir.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un mito frecuente y trágico de la práctica clínica es ver un bebé amarillo al mes de vida y decirle a la mamá: \"Póngalo al sol que eso es leche materna\". La ictericia por leche materna SIEMPRE es indirecta y NUNCA hace caca blanca. Si el bebé defeca masilla blanca, su tubo biliar se tapó (atresia biliar). La bilirrubina directa no cruza la barrera hematoencefálica, por lo que NUNCA produce Kernicterus (eso destruye la trampa de la Opción A). Lo que sí hace el ácido biliar acumulado es carcomer el hígado hasta volverlo una piedra cirrótica. Por eso, el pediatra corre contra reloj: si el cirujano hace el Kasai a los 40 días, el niño salva su hígado propio; si lo operan a los 100 días, ya necesita un donante de hígado.",
    keyPoints: [
      "Lactante (4 a 8 semanas) con ictericia que NO resuelve, acolia franca y coluria.",
      "Bilirrubinemia de predominio Directo (Conjugada).",
      "Ecografía con vesícula \"fantasma\" o signo del cordón triangular.",
      "Atresia de Vías Biliares. La meta es intervenir quirúrgicamente (cirugía de Kasai) ANTES de los 60 días para evitar la progresión silenciosa a cirrosis biliar terminal.",
      "Tema: Ictericia Neonatal Colestásica / Atresia Biliar."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-28",
    university: "UCC",
    examArea: "Medicina Interna / Hematología / Urgencias",
    topic: "Hematología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "hematologia", "urgencias"],
    statement: "Hombre de 30 años acude a urgencias quejándose de sangrado profundo en las encías al cepillarse y la aparición espontánea de múltiples equimosis (\"morados\") masivas en tronco y extremidades durante los últimos 4 días, acompañado de astenia profunda. Al examen físico: palidez mucocutánea generalizada y petequias extensas; no se palpan adenopatías ni visceromegalias. Laboratorios: Leucocitos 1,500/mmÂ³, Neutrófilos absolutos 400/mmÂ³, Hemoglobina 7.2 g/dL, Plaquetas 12,000/mmÂ³. Tiempos de coagulación: TP 28 seg, TPT 55 seg, Fibrinógeno 65 mg/dL (disminuido), Dímero-D > 5,000 ng/mL. Un frotis de sangre periférica urgente revela abundantes células atípicas de gran tamaño, con un citoplasma densamente granuloso y múltiples estructuras cristalinas rosadas en forma de astilla o bastón en su interior (Múltiples Cuerpos de Auer). ¿Cuál es la intervención de supervivencia INMEDIATA que NO debe posponerse en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender cualquier intervención oncológica específica hasta obtener la confirmación citogenética por aspirado de médula ósea.",
        distractorProfile: "deadly_diagnostic_delay",
        incorrectFeedback: "La espera de resultados moleculares o de médula ósea (que tardan de 48 a 72 horas) está proscrita en guías hematológicas ante sospecha de LPA, debido a la inaceptable letalidad hemorrágica por CID en el periodo de espera."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar administración inmediata y a altas dosis de Ácido Todo-Trans Retinoico (ATRA) por vía oral ante la alta sospecha clínica de Leucemia Promielocítica Aguda."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar quimioterapia citotóxica endovenosa convencional con esquema 7+3 (Citarabina y Daunorrubicina) para frenar la proliferación blastica agudamente.",
        distractorProfile: "harmful_initial_chemotherapy",
        incorrectFeedback: "La quimioterapia citotóxica lítica (como 7+3) rompe los blastos circulantes masivamente. Si los rompes antes de inducir su maduración con ATRA, liberarán toneladas de gránulos de proteasa a la sangre, empeorando catastróficamente la CID y matando al paciente."
      },
      {
        id: "D",
        label: "D",
        text: "Transfundir crioprecipitados y plaquetas simultáneamente con una infusión a dosis plenas de Heparina de Bajo Peso Molecular para tratar la coagulopatía diseminada.",
        distractorProfile: "paradoxical_coagulopathy_error",
        incorrectFeedback: "Aunque se debe dar soporte transfusional si hay sangrado activo masivo, el uso rutinario de heparina a dosis plenas en la coagulopatía de la LPA incrementa gravemente el riesgo de hemorragia fatal del SNC, no resolviendo la patogenia primaria tumoral."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Leucemia Promielocítica Aguda (LPA, anteriormente Leucemia Mieloide Aguda variante M3). Se caracteriza por la clásica presentación hiperaguda de pancitopenia y un cuadro catastrófico de Coagulación Intravascular Diseminada (CID) fulminante. El frotis periférico es virtualmente diagnóstico: promielocitos hipergranulares atípicos agrupados con los inconfundibles \"Cuerpos de Auer\" (agregaciones cristalizadas de enzimas lisosomales). La LPA se produce por una translocación cromosómica t(15;17) que genera un receptor mutado de ácido retinoico, bloqueando la maduración celular. La regla de oro internacional de la hematología de urgencias es: ante la **sola sospecha morfológica o clínica de LPA**, el tratamiento con ATRA (derivado de vitamina A) DEBE INICIARSE DE INMEDIATO en urgencias, sin esperar el resultado de la médula ósea ni la confirmación genética. El ATRA fuerza la maduración terminal de los promielocitos en 24-48 horas, apagando la liberación de procoagulantes que causan la hemorragia intracraneana mortal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** La Leucemia Promielocítica Aguda es la leucemia aguda más curable del mundo de la medicina moderna, pero tiene la mayor mortalidad pre-tratamiento de todas. Si retrasas el ATRA para el día de mañana buscando la cama en UCI o esperando al patólogo especialista, el paciente toserá, le sangrará el cerebro de forma difusa (por la CID) y fallecerá. El ATRA no es quimioterapia venenosa celular, es una simple vitamina dirigida que \"despierta\" genéticamente al blasto maligno y le permite convertirse en un neutrófilo sano y dejar de sangrar. ¡Dalo apenas veas el frotis!",
    keyPoints: [
      "Paciente joven con pancitopenia que debuta sangrando profusamente con alteraciones compatibles con CID (TP/TPT prolongados, fibrinógeno bajo, dímero D alto).",
      "Frotis de sangre con presencia destacada de Cuerpos de Auer (bastones rosados en el citoplasma).",
      "Leucemia Promielocítica Aguda (LMA M3). El paso más urgente de vida o muerte es suministrar ATRA oral, superando en prioridad a la quimioterapia e imágenes.",
      "Tema: Urgencias Hematológicas / Leucemia Promielocítica Aguda."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-29",
    university: "UCC",
    examArea: "Medicina Interna / Reumatología / Gineco-Obstetricia",
    topic: "Reumatología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "reumatologia", "gineco-obstetricia"],
    statement: "Mujer de 26 años con diagnóstico conocido de Lupus Eritematoso Sistémico (LES) desde hace 3 años, con antecedente de nefritis lúpica controlada. Actualmente cursa un embarazo de 14 semanas de gestación. Su enfermedad reumatológica se encontraba en remisión mantenida durante el último año bajo manejo estricto ambulatorio con Hidroxicloroquina (200 mg/día) y Micofenolato de Mofetilo (MMF, 1 g cada 12 horas), habiendo ignorado la indicación de planificación familiar. Durante la consulta prenatal actual, se constata estabilidad clínica, presión arterial normal y parcial de orina con proteínas negativas. ¿Cuál es el ajuste farmacológico INMEDIATO más seguro y mandatorio en esta paciente gestante?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Continuar ambos medicamentos en la dosis exacta actual para evitar la recaída renal que pondría en riesgo inminente al feto.",
        distractorProfile: "dangerous_teratogenic_continuation",
        incorrectFeedback: "El mantenimiento del Micofenolato durante el embarazo somete al feto a una embriopatía demostrada (ausencia de desarrollo de la oreja externa, paladar hendido y defectos cardíacos estructurales)."
      },
      {
        id: "B",
        label: "B",
        text: "Suspender inmediatamente el Micofenolato de Mofetilo e iniciar Azatioprina oral, manteniendo la Hidroxicloroquina inalterada."
      },
      {
        id: "C",
        label: "C",
        text: "Suspender todos los fármacos inmunomoduladores durante el primer y segundo trimestre debido al riesgo teratogénico global de los modificadores de enfermedad.",
        distractorProfile: "catastrophic_disease_rebound",
        incorrectFeedback: "Abandonar los fármacos modificadores de la enfermedad bajo el pretexto de \"cero drogas en el embarazo\" en una paciente lúpica induce brotes agudos severos, preeclampsia precoz y muerte perinatal en altos porcentajes."
      },
      {
        id: "D",
        label: "D",
        text: "Reemplazar la Hidroxicloroquina por Metotrexato a bajas dosis y continuar con el Micofenolato bajo vigilancia estricta ecográfica.",
        distractorProfile: "swap_for_another_teratogen",
        incorrectFeedback: "El Metotrexato es el teratógeno más potente y citotóxico (inhibidor del ácido fólico) en el armamentario reumatológico, estando absolutamente contraindicado en mujeres con deseo genésico o embarazo instaurado."
      }
    ],
    correctOptionId: "B",
    explanation: "El manejo del LES en el embarazo requiere un balance delicadísimo. El principio rector es que el riesgo de muerte fetal o complicaciones maternas catastróficas por una *recaída lúpica* durante el embarazo supera el riesgo general de usar medicamentos compatibles. La Hidroxicloroquina es el pilar de supervivencia y SE DEBE MANTENER OBLIGATORIAMENTE en todo el embarazo (suspenderla precipita brotes lúpicos masivos y daño orgánico materno-fetal). SIN EMBARGO, el Micofenolato de Mofetilo es un teratógeno humano absoluto comprobado (Clasificación D/X, asociado a malformaciones craneofaciales y abortos) y debe suspenderse DE INMEDIATO. El fármaco de transición y mantenimiento de elección para reemplazar al micofenolato, considerado seguro durante la gestación (no atraviesa la barrera placentaria de forma enzimáticamente activa para el feto), es la Azatioprina.",
    keyPoints: [
      "Paciente con Lupus u otra enfermedad autoinmune grave embarazada.",
      "Manejo previo que incluye Micofenolato de Mofetilo, Metotrexato o Ciclofosfamida.",
      "La Hidroxicloroquina SIEMPRE se continúa (es segura y salva embarazos lúpicos). El Micofenolato es TERATOGÉNICO absoluto y se sustituye inmediatamente por Azatioprina (que es segura).",
      "Tema: Lupus y Embarazo / Farmacología Autoinmune."
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Punto fundamental en el control prenatal de reumatología. El manejo farmacológico de la gestante lúpica exige conocer exactamente qué medicamentos salvan al feto y cuáles lo deforman.

La clave no es suspender todas las medicinas por miedo a dañar al bebé.
La clave es:
La Hidroxicloroquina salva embarazos lúpicos (no se suspende). El Micofenolato es un teratógeno absoluto y debe sustituirse de inmediato por Azatioprina.

### ¿Qué está ocurriendo realmente?
Una paciente joven con Lupus Eritematoso Sistémico (LES) se embaraza estando bajo tratamiento de mantenimiento con Hidroxicloroquina y Micofenolato de Mofetilo (MMF).
El Lupus en el embarazo es una enfermedad de alto riesgo: si la madre hace un brote lúpico (especialmente renal), el riesgo de preeclampsia severa, restricción del crecimiento y muerte fetal o materna se dispara a niveles catastróficos. Por ende, **abandonar el tratamiento inmunosupresor (la opción C) es una sentencia de muerte o complicaciones graves para ambos.**
La **Hidroxicloroquina** es el pilar de la supervivencia: estabiliza la enfermedad, previene recaídas, disminuye bloqueos cardíacos congénitos y es completamente segura para el feto. ¡JAMÁS se suspende!
Sin embargo, el **Micofenolato de Mofetilo**, la **Ciclofosfamida** y el **Metotrexato** son teratógenos humanos absolutos (Categoría X/D). Causan abortos espontáneos tempranos o malformaciones craneofaciales y viscerales graves. El Micofenolato DEBE suspenderse el mismo día que se confirma el embarazo (idealmente meses antes de la concepción).
Para no dejar a la paciente sin protección renal, la alternativa inmunosupresora que ha demostrado ser segura durante todo el embarazo es la **Azatioprina**. El hígado fetal inmaduro carece de la enzima inosinato pirofosforilasa, protegiendo al bebé de los efectos tóxicos de la Azatioprina mientras el fármaco sí actúa inmunosuprimiendo a la madre.

### ¿Por qué la opción B es la respuesta correcta?
Porque retira inmediatamente el agente teratogénico comprobado (Micofenolato), lo reemplaza por una alternativa segura y probada (Azatioprina) para evitar el rebote de la enfermedad renal, y mantiene la Hidroxicloroquina protectora.

### ¿Por qué fallan las otras opciones?
• Opción A (Continuar ambos): Someter al feto al Micofenolato causará una embriopatía (ausencia de desarrollo de orejas, paladar hendido, defectos cardíacos).
• Opción C (Suspender todo): Dejar a una paciente lúpica sin inmunosupresión durante el primer trimestre garantiza casi con certeza un brote severo de la enfermedad o pérdida gestacional autoinmune.
• Opción D (Cambiar por Metotrexato): El Metotrexato es el inhibidor del ácido fólico más potente del arsenal reumatológico. Es un abortifaciente y teratógeno letal en el embarazo.

### La trampa del examen
Muchos estudiantes piensan:
"Embarazo = cero fármacos químicos = suspenderlo todo por precaución".
En reumatología, la enfermedad activa es mucho más letal para el embarazo que los fármacos permitidos. Suspender la Hidroxicloroquina es el error más castigado en los exámenes.

### Perlas de examen
• Fármacos SEGUROS en gestante Lúpica: Hidroxicloroquina, Corticosteroides a baja dosis, Azatioprina, Tacrolimus/Ciclosporina.
• Fármacos PROHIBIDOS (Teratógenos absolutos): Micofenolato, Metotrexato, Ciclofosfamida, Leflunomida.
• Prevención en gestante con Ac Antifosfolípidos: Añadir Aspirina a dosis bajas (81-150 mg) antes de la semana 16 para prevenir preeclampsia.

### Referencias
• EULAR recommendations for women's health and the management of family planning, assisted reproduction, pregnancy and menopause in patients with systemic lupus erythematosus.
• ACR Guidelines for Management of Reproductive Health in Rheumatic and Musculoskeletal Diseases.
• UpToDate: Pregnancy in women with systemic lupus erythematosus.`
  },
  {
    id: "ucc-conv-2025-07-19-30",
    university: "UCC",
    examArea: "Pediatría / Neonatología / Cardiología",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neonatologia", "cardiologia"],
    statement: "Recién nacido prematuro de 26 semanas de edad gestacional se encuentra en su cuarto día de vida en la Unidad de Cuidados Intensivos Neonatales, conectado a ventilación mecánica por Síndrome de Dificultad Respiratoria (Enfermedad de Membrana Hialina). Hoy, el neonatólogo documenta la aparición de un soplo sistólico en maquinaria continuo en el borde esternal superior izquierdo, acompañado de pulsos saltones arteriales periféricos (celer) y un aumento progresivo de los requerimientos ventilatorios con hepatomegalia. Un ecocardiograma confirma un Conducto Arterioso Permeable (PDA) hemodinámicamente significativo. En los paraclínicos urgentes tomados hace una hora resalta un recuento plaquetario de 38.000/mmÂ³ y una ecografía transfontanelar reporta una Hemorragia Intraventricular (HIV) aguda grado III en el lado derecho. ¿Cuál es la estrategia de cierre del ductus MÁS segura y apropiada en este neonato?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar tratamiento farmacológico con dosis endovenosas plenas de Indometacina, titulando a respuesta de cierre ecográfico.",
        distractorProfile: "dangerous_classical_drug_use",
        incorrectFeedback: "La indometacina genera una potente disfunción plaquetaria e interfiere severamente con la coagulación microvascular, exacerbando de forma catastrófica y aguda la hemorragia intracraneal activa preexistente en el neonato."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar ciclo farmacológico endovenoso con Ibuprofeno Lisina durante 3 días.",
        distractorProfile: "harmful_ibuprofen_usage",
        incorrectFeedback: "Aunque el ibuprofeno es considerado más noble que la indometacina sobre el flujo renal, comparte la misma contraindicación plaquetaria/anti-hemostática que todos los AINEs ante un sangrado masivo en el sistema nervioso central."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Acetaminofén (Paracetamol) intravenoso, o en caso de refractariedad, derivar a ligadura quirúrgica directa del conducto."
      },
      {
        id: "D",
        label: "D",
        text: "Aumentar el aporte de líquidos endovenosos diarios a 150 cc/kg y administrar furosemida para favorecer el cierre espontáneo natural.",
        distractorProfile: "volume_overload_error",
        incorrectFeedback: "Aumentar el volumen de líquidos circulantes es contraproducente, empeorará drásticamente el flujo de izquierda a derecha a través del ductus, expandiendo la sobrecarga hídrica hacia los pulmones e induciendo falla cardíaca congestiva intratable."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con un Conducto Arterioso Permeable (PDA) sintomático (genera sobrecarga izquierda, edema pulmonar y falla cardíaca derecha congestiva). Aunque los inhibidores no selectivos de la ciclooxigenasa (AINEs como la Indometacina y el Ibuprofeno) son el gold standard mundial clásico para el cierre farmacológico del ductus, están ABSOLUTAMENTE CONTRAINDICADOS en neonatos que presenten: 1) Sangrado activo importante (como la Hemorragia Intraventricular grado III documentada), 2) Trombocitopenia moderada/severa (< 50,000) o falla en la coagulación, 3) Lesión renal aguda oligúrica, o 4) Enterocolitis Necrotizante activa. Al estar vetados los AINEs, la terapia de rescate médica emergente y con creciente evidencia de seguridad es el Paracetamol (Acetaminofén) intravenoso, el cual no inhibe la agregación plaquetaria. Si el paracetamol no funciona (o no está disponible), la conducta final de salvamento es la ligadura mecánica toracoscópica o quirúrgica del ductus por cirugía cardiovascular.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Con esta cerramos con broche de oro la neonatología, Colega. Saber tratar un Ductus abierto es esencial, pero saber CUÁNDO NO tratarlo con AINEs salva al prematuro. La Indometacina no solo cierra el ductus de maravilla, sino que también tumba el flujo sanguíneo de la arteria mesentérica superior (riesgo de NEC), cierra las arteriolas renales y paraliza a las plaquetas que tratan de taponar la sangre en el cerebro inmaduro. En un bebé prematuro con la cabeza llena de sangre y sin plaquetas de respaldo (38,000), ponerle Ibuprofeno o Indometacina transformará un sangrado local en una hemorragia parenquimatosa letal en horas. Usas Paracetamol IV o llamas al cirujano.",
    keyPoints: [
      "Neonato prematuro con diagnóstico clínico/ecocardiográfico de Conducto Arterioso Permeable sintomático.",
      "Presencia de contraindicaciones absolutas para AINEs: Hemorragia intraventricular aguda, plaquetas muy bajas o falla renal aguda en anuria.",
      "Restricción estricta de Indometacina/Ibuprofeno. El cierre debe intentarse con Paracetamol IV o escalarse a ligadura quirúrgica (o cierre percutáneo).",
      "Tema: Cardiopatías Congénitas / PDA en el Prematuro."
    ]
  }
];

