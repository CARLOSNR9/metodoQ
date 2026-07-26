import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #4 (26 jul 2026) · Preguntas #21–#30.
 */
export const UCC_CONV_2026_07_26_21_30_QUESTIONS: TrainingQuestion[] = [
  {
    "id": "ucc-conv-2026-07-26-21",
    "university": "UCC",
    "examArea": "PEDIATRÍA - NEONATOLOGÍA / NEUROLOGÍA",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Recién nacido a término (40 semanas), producto de un parto vaginal instrumentado con fórceps tras un desprendimiento prematuro de placenta. Al nacer presenta asfixia perinatal severa (Apgar de 2 y 4 a los 5 y 10 minutos, respectivamente). Unos gases del cordón umbilical muestran pH de 6.9 y exceso de bases de -18 mmol/L. Actualmente, a las 4 horas de vida, el neonato se encuentra en la UCIN, respirando espontáneamente pero luce francamente letárgico, con pupilas mióticas de reacción lenta, hipotonía global y succión débil, sin convulsiones clínicas evidentes (Encefalopatía Hipóxico-Isquémica grado II de Sarnat). ¿Cuál es la intervención terapéutica con MAYOR nivel de evidencia que debe iniciarse de forma OBLIGATORIA antes de alcanzar las 6 horas de vida para mejorar el pronóstico neurocognitivo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar fenobarbital en dosis de carga profiláctica para prevenir crisis convulsivas subclínicas inminentes."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar Hipotermia Terapéutica Corporal Total guiada por protocolo para alcanzar una temperatura central de 33.5°C por 72 horas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Infundir Dexametasona a dosis altas para reducir el edema citotóxico cerebral agudo post-anóxico."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Mantener FiO2 al 100% y realizar hiperventilación leve (PaCO2 30-35 mmHg) para generar vasoconstricción cerebral y reducir la presión intracraneana."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente cursa con una Encefalopatía Hipóxico-Isquémica (EHI) moderada a severa. El daño neurológico tras la asfixia no ocurre solo en el momento del parto (fase primaria), sino que continúa durante la fase de reperfusión (fase secundaria) debido a la apoptosis celular, el estrés oxidativo y la liberación de glutamato. La única intervención neuroprotectora con eficacia contundente demostrada para reducir la muerte y la discapacidad grave (parálisis cerebral) es la Hipotermia Terapéutica. La ventana de oportunidad de oro es crítica: **debe iniciarse antes de las primeras 6 horas de vida**. Reducir la temperatura corporal a 33.5°C enlentece el metabolismo cerebral, inhibe la cascada inflamatoria y bloquea la muerte celular programada.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** En la neonatología moderna, enfriar cerebros salva vidas. Hace años se intentaban locuras como la hiperventilación (Opción D), pero esto es catastrófico: si produces hipocapnia (bajar el CO2), las arterias cerebrales se constriñen y terminas matando de isquemia el poco tejido sano que sobrevivió a la asfixia inicial (el nivel de CO2 en el neonato asfixiado debe ser estrictamente normal). Dar fenobarbital profiláctico (Opción A) no previene las secuelas a largo plazo y deprime aún más al niño, reservándose solo para tratar convulsiones clínicamente evidentes o demostradas por aEEG. El reloj corre: si el niño tiene 4 horas, llama a la UCIN para prender la manta térmica de enfriamiento ya.\n\n* distractorProfile: obsolete_neurologic_prophylaxis\n* incorrectFeedback: El uso profiláctico de anticonvulsivantes en neonatos asfixiados sin evidencia de crisis eléctricas o clínicas no mejora el neurodesarrollo a largo plazo y potencia la depresión respiratoria y neurológica del paciente.\n* distractorProfile: wrong_edema_management_in_asphyxia\n* incorrectFeedback: Los corticosteroides carecen de eficacia para tratar el edema citotóxico (intracelular) producido por la isquemia perinatal; solo son efectivos para el edema vasogénico asociado a tumores o abscesos.\n* distractorProfile: deadly_iatrogenic_vasoconstriction\n* incorrectFeedback: La hiperventilación induce vasoconstricción cerebral profunda; en un cerebro que acaba de sufrir isquemia masiva, reducir el flujo sanguíneo empeora drásticamente la necrosis tisular.",
    "keyPoints": [
      "Cuando veas:",
      "• Neonato a término o pretérmino tardío (>36 semanas) con asfixia perinatal severa (Apgar bajo, pH de cordón < 7.0 o exceso de bases ≤ -16).",
      "• Clínica de Encefalopatía (letargia, coma, hipotonía, convulsiones).",
      "• Edad menor a 6 horas.",
      "Debes pensar en:",
      "Hipotermia Terapéutica inmediata por 72 horas. Retrasar esta intervención más de 6 horas disminuye drásticamente su eficacia.",
      "Tema: Neurología Neonatal / Asfixia Perinatal."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-22",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - INFECTOLOGÍA / NEUROLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 68 años, con antecedente de hipertensión arterial e hiperplasia prostática benigna, es traído a urgencias por su hija debido a un cuadro de 24 horas de fiebre de 39.2°C, cefalea holocraneana severa y confusión mental progresiva. Al examen físico: obnubilado, desorientado, con rigidez de nuca evidente y signos de Kernig y Brudzinski francamente positivos. No presenta papiledema ni focalización motora, por lo que se realiza punción lumbar directa. El citoquímico del LCR reporta: Leucocitos 1.400/mm³ (90% polimorfonucleares), Proteínas 180 mg/dL, Glucosa 25 mg/dL (glucemia sérica de 95 mg/dL). El análisis de Gram informa abundantes bacilos Gram positivos pleomórficos. ¿Cuál es el ajuste antimicrobiano empírico INMEDIATO OBLIGATORIO que dicta la edad y el hallazgo del paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Adicionar Gentamicina al esquema de Ceftriaxona para cubrir *Streptococcus agalactiae* de inicio tardío.",
        "distractorProfile": "neonatal_etiology_overlap",
        "incorrectFeedback": "El S. agalactiae (Estreptococo del grupo B) es una causa predominante de meningitis en el periodo neonatal temprano y tardío (primeros 3 meses), siendo extremadamente raro como patógeno primario de meningitis en un adulto de 68 años."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar Ceftriaxona y Vancomicina exclusivamente, por alta probabilidad de *Streptococcus pneumoniae* resistente.",
        "distractorProfile": "incomplete_standard_empiric_therapy",
        "incorrectFeedback": "Aunque la Vancomicina cubre el Neumococo resistente, este esquema excluye por completo la protección contra Listeria monocytogenes, bacteria que tiene alta prevalencia en mayores de 50 años y que no responde a cefalosporinas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Adicionar Ampicilina intravenosa a dosis meningeas (2 g cada 4h) al esquema de Ceftriaxona y Vancomicina."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Iniciar tratamiento exclusivo con Meropenem al documentarse bacilos Gram positivos típicos de infecciones nosocomiales.",
        "distractorProfile": "wrong_broad_spectrum_selection",
        "incorrectFeedback": "Aunque el Meropenem cubre a Listeria y es útil en caso de alergia a la penicilina, no se recomienda como monoterapia de primera línea rutinaria sobre el régimen específico de Ampicilina para cepas de la comunidad."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente cursa con una Meningitis Bacteriana aguda de la comunidad. En adultos sanos, el esquema empírico estándar es Ceftriaxona + Vancomicina (para cubrir neumococo y meningococo). SIN EMBARGO, en pacientes con alteración de la inmunidad celular o en **adultos mayores de 50 años**, la epidemiología cambia drásticamente debido a la reaparición de la susceptibilidad a **Listeria monocytogenes** (un bacilo Gram positivo intracelular). El hallazgo del Gram (bacilos Gram positivos) lo confirma. La *Listeria* es intrínsecamente resistente a TODAS las cefalosporinas de cualquier generación (incluyendo la Ceftriaxona). La droga de elección absoluta y mandatoria que debe incluirse empíricamente en todo mayor de 50 años con meningitis es la **Ampicilina** intravenosa a altas dosis.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Esta es una regla epidemiológica que no puedes olvidar en urgencias, Elizabeth. Si el paciente tiene 45 años, la Ceftriaxona y la Vanco bastan. Si ayer cumplió 50 años y un día, la guía de la IDSA obliga a agregar la Ampicilina. La *Listeria monocytogenes* es una bacteria que se ríe de las cefalosporinas por mutaciones en sus PBP (proteínas fijadoras de penicilina). Un adulto mayor que debuta con meningitis y se queda solo con Ceftriaxona, se irá a casa en una caja fúnebre porque la *Listeria* no sufrirá ni un rasguño. Si el Gram te sopla que hay un \"bacilo Gram positivo\" en el LCR, el diagnóstico etiológico de *Listeria* ya está prácticamente firmado (el neumococo es un coco en cadenas, no un bacilo).",
    "keyPoints": [
      "Cuando veas:",
      "• Adulto > 50 años, neonato (< 1 mes), mujer embarazada o paciente inmunosuprimido.",
      "• Cuadro de Meningitis Bacteriana aguda (clínica o por LCR).",
      "Debes pensar en:",
      "El esquema empírico siempre DEBE incluir AMPICILINA para cubrir *Listeria monocytogenes*. (Esquema final >50 años: Ceftriaxona + Vanco + Ampicilina + Dexametasona).",
      "Tema: Neuroinfección / Meningitis Listeria."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-23",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - HEMATOLOGÍA / URGENCIAS",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Mujer de 72 años, sin antecedentes de sangrado personal ni familiar, acude a urgencias por la aparición brusca de un hematoma gigante y doloroso en el glúteo y muslo derechos tras sentarse bruscamente en una silla. Al examen físico: hemodinámicamente estable, con un extenso hematoma muscular a tensión. No hay petequias ni sangrado en mucosas. Laboratorios: Hemoglobina 9.5 g/dL, Plaquetas 250,000/mm³ (Normal). Tiempos de coagulación: Tiempo de Protrombina (TP) 12 seg (Normal), **Tiempo de Tromboplastina Parcial activado (TPTa) de 85 segundos (muy prolongado, control 30 seg)**. Se realiza una prueba de mezcla (Mixing Study) 1:1 con plasma normal, incubada a 37°C por 2 horas, reportando un TPTa de 78 segundos (ausencia de corrección). ¿Cuál es la terapia hemostática de PRIMERA LÍNEA para detener el sangrado agudo en esta paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Infusión de Plasma Fresco Congelado (PFC) a dosis de 15 mL/kg para reponer el déficit de todos los factores.",
        "distractorProfile": "futile_replacement_in_inhibitor_setting",
        "incorrectFeedback": "El PFC contiene niveles basales (no concentrados) de Factor VIII, el cual será neutralizado inmediata y masivamente por los autoanticuerpos circulantes del paciente de alta titulación, no logrando ningún efecto hemostático sobre el hematoma en expansión."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Transfusión masiva de Factor VIII recombinante para superar la deficiencia aguda.",
        "distractorProfile": "overwhelmed_specific_factor_therapy",
        "incorrectFeedback": "A diferencia de los hemofílicos leves, en la Hemofilia A Adquirida autoinmune la carga de inhibidores suele ser de tan alto título (Unidades Bethesda altas) que las dosis masivas de FVIII exógeno fracasan en saturar el anticuerpo."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administración de un agente de Bypass coagulatorio como el Factor VII activado recombinante (rFVIIa) o FEIBA."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Iniciar pulsos de Metilprednisolona y diferir terapias de reemplazo hasta tipificar el anticuerpo.",
        "distractorProfile": "right_chronic_therapy_wrong_timing",
        "incorrectFeedback": "Los esteroides (y rituximab/ciclofosfamida) son la terapia curativa inmunosupresora que erradicará el clon de células B en las semanas siguientes, pero no actúan a la velocidad requerida para detener una hemorragia muscular activa que causará un síndrome compartimental agudo o exanguinación hoy."
      }
    ],
    "correctOptionId": "C",
    "explanation": "La paciente cursa con una **Hemofilia A Adquirida**, una enfermedad autoinmune rara y potencialmente fatal donde una persona sana desarrolla repentinamente autoanticuerpos (inhibidores) contra su propio Factor VIII. La triada diagnóstica es clásica: 1) Anciano o mujer en posparto con hematomas musculares masivos de novo (sin historia previa de sangrado); 2) TPTa muy prolongado con TP y plaquetas normales (daño puro de vía intrínseca); 3) **Prueba de Mezcla que NO CORRIGE**, lo cual demuestra la presencia de un *inhibidor* circulante (el anticuerpo destruye tanto el factor VIII del paciente como el factor VIII del plasma donado de la prueba). En presencia de un inhibidor, administrar Plasma Fresco o Factor VIII estándar es absolutamente fútil porque el autoanticuerpo los destruirá instantáneamente. El sangrado debe frenarse usando un **Agente de Bypass** (rFVIIa o Concentrado de Complejo Protrombínico Activado - FEIBA), los cuales activan la vía común (Factor X) directamente sobre la plaqueta, saltándose la necesidad del Factor VIII.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un \"hueso\" puro de la hematología. Cuando veas un TPTa largo, el examen te está preguntando si sabes diferenciar una hemofilia congénita (deficiencia) de un inhibidor (enfermedad autoinmune). Si juntas la sangre del paciente con plasma normal y el reloj se arregla (corrige a 30 seg), al paciente le faltaba algo (deficiencia). Pero en esta viñeta la mezcla no arregló nada (se quedó en 78 seg). Esto significa que la sangre del paciente tiene un \"veneno\" (autoanticuerpo anti-FVIII) que también destruyó el plasma que le pusiste de prueba. Por eso la Opción A y B son letales: todo el factor que le infundas será aniquilado en segundos por el anticuerpo circulante. Debes \"hacerle trampa\" al sistema de coagulación con el Factor VIIa (Bypass).",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente anciano o puérpera con sangrado mayor muscular/articular SIN antecedente personal de sangrado.",
      "• Laboratorio: TPTa aislado muy prolongado.",
      "• Prueba de Mezcla: NO corrige (confirmando presencia de un inhibidor/anticuerpo).",
      "Debes pensar en:",
      "Hemofilia Adquirida. Tratamiento para el sangrado: Agentes de Bypass (rFVIIa). El tratamiento inmunosupresor (Rituximab/Esteroides) se inicia después para erradicar el anticuerpo.",
      "Tema: Trastornos Hemorrágicos / Hemofilia Adquirida."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-24",
    "university": "UCC",
    "examArea": "PEDIATRÍA - NEFROLOGÍA / INMUNOLOGÍA",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Un niño de 4 años, previamente sano, ingresa a urgencias por palidez generalizada, oliguria de 24 horas y aparición de petequias distales. Los padres niegan rigurosamente historia de fiebre, diarrea, consumo de carne cruda o viajes recientes. Al examen físico: PA 135/90 mmHg (hipertenso), FC 120 lpm. Paraclínicos: Hemoglobina 6.2 g/dL, Plaquetas 25,000/mm³. Creatinina sérica 3.8 mg/dL. El frotis de sangre periférica documenta 6% de esquizocitos. La prueba rápida en heces para toxina Shiga (STEC) resulta negativa. Un perfil inmunológico urgente revela un complemento **C3 marcadamente disminuido** con C4 normal y actividad de la metaloproteasa ADAMTS13 del 85% (normal). Ante el diagnóstico etiológico específico de esta Microangiopatía Trombótica (MAT), ¿cuál es el tratamiento biológico INMEDIATO capaz de detener la destrucción renal y salvar la vida del paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administración de Rituximab intravenoso (Anti-CD20) para frenar la producción de autoanticuerpos.",
        "distractorProfile": "incorrect_immunomodulatory_target",
        "incorrectFeedback": "Aunque el Rituximab puede usarse como terapia de segunda línea para erradicar autoanticuerpos anti-Factor H a largo plazo, no detiene la activación en cascada fulminante y aguda del complemento activo que está infartando el riñón en horas."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Plasmaféresis terapéutica diaria ininterrumpida durante 14 días para reponer factores deficientes.",
        "distractorProfile": "ptt_treatment_applied_to_ahus",
        "incorrectFeedback": "El recambio plasmático es la piedra angular del tratamiento de la PTT (ADAMTS13 <10%). En el SUH atípico, la plasmaféresis empírica tiene una tasa de fracaso muy alta y alta mortalidad si se difiere el eculizumab."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Infusión intravenosa de Eculizumab (Anticuerpo monoclonal Anti-C5)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Transfusión masiva de plaquetas asociada a Hemodiálisis de alto flujo.",
        "distractorProfile": "catastrophic_platelet_transfusion",
        "incorrectFeedback": "La transfusión profiláctica de plaquetas en microangiopatías trombóticas activas exacerba drásticamente el proceso trombótico diseminado, empeorando la isquemia renal y cerebral al aportar más \"leña al fuego\" de los microtrombos."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente cursa con un **Síndrome Urémico Hemolítico Atípico (SUHa)**. Clínicamente presenta la triada de anemia hemolítica microangiopática (esquizocitos), trombocitopenia y falla renal severa. La clave diagnóstica que lo diferencia del SUH típico es la **ausencia de diarrea / toxina Shiga** y la presencia de hipocomplementemia (C3 bajo). Fisiopatológicamente, el SUHa se debe a una mutación genética o un autoanticuerpo (anti-Factor H) que produce una desregulación y activación crónica destructiva e incontrolable de la vía alternativa del complemento. El daño endotelial es causado directamente por la formación continua del Complejo de Ataque a la Membrana (C5b-9). La prueba de ADAMTS13 >10% descarta la Púrpura Trombocitopénica Trombótica (PTT). El fármaco salvavidas que cambió la historia natural de esta enfermedad casi letal es el **Eculizumab**, un anticuerpo monoclonal que bloquea específicamente la fracción C5 del complemento, apagando instantáneamente la cascada destructiva.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, en las microangiopatías trombóticas el diagnóstico diferencial te guía a usar un arma distinta.\n\n1. Si el paciente tiene diarrea sanguinolenta previa (Toxina Shiga) = SUH típico = Manejo de soporte estricto, los antibióticos están prohibidos.\n2. Si el paciente tiene síntomas neurológicos graves y la ADAMTS13 es < 10% = PTT = El tratamiento es Plasmaféresis urgente para remover anticuerpos (Opción B en esta viñeta sería correcta si fuera PTT).\n3. Si el paciente NO tiene diarrea, el ADAMTS13 está normal, pero el complemento (C3) está bajo = SUHa = Genética del complemento. Tratamiento: Eculizumab. Nunca le pongas plaquetas (Opción D) a un paciente con MAT porque las plaquetas nuevas alimentan los coágulos renales, provocando necrosis cortical bilateral.",
    "keyPoints": [
      "Cuando veas:",
      "• Niño o adulto con tríada de SUH (Falla renal + Plaquetas bajas + Esquizocitos).",
      "• Historia de diarrea sanguinolenta AUSENTE y toxina Shiga NEGATIVA.",
      "• LCR/Complemento: C3 marcadamente disminuido y niveles de ADAMTS13 normales.",
      "Debes pensar en:",
      "Síndrome Urémico Hemolítico Atípico (SUHa) mediado por el complemento. El único tratamiento fisiopatológico resolutivo es el Eculizumab.",
      "Tema: Nefrología Pediátrica / SUH Atípico."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-25",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - GASTROENTEROLOGÍA / REUMATOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 60 años consulta por un cuadro insidioso de 4 semanas de ictericia progresiva, prurito severo y pérdida de peso de 5 kg. Refiere que la ictericia ha sido completamente indolora, sin fiebre. Al examen físico se palpa aumento del tamaño de las glándulas submandibulares bilateralmente. Paraclínicos: Bilirrubina Total 14 mg/dL (Directa 11.5 mg/dL), Fosfatasa Alcalina 980 U/L, AST 80 U/L, CA 19-9 dentro de rangos normales. Una Tomografía Computarizada (TC) de abdomen con contraste revela un páncreas globalmente agrandado, con pérdida de su patrón lobulillar normal, asumiendo una forma radiológica \"en salchicha\". Se observa un estrechamiento largo y fino de la porción distal del colédoco intra-pancreático, sin dilatación del conducto pancreático principal ni calcificaciones. Los niveles séricos de una inmunoglobulina en particular reportan > 300 mg/dL (marcadamente elevados por encima del doble de su valor de referencia). ¿Cuál es la terapia de primera línea que inducirá remisión rápida de este síndrome pseudo-tumoral?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Procedimiento de Whipple (Pancreatoduodenectomía cefálica) por alto riesgo de Adenocarcinoma de cabeza de páncreas oculto.",
        "distractorProfile": "catastrophic_surgical_misdiagnosis",
        "incorrectFeedback": "Intervenir quirúrgicamente a un paciente con enfermedad inflamatoria por IgG4 con la cirugía abdominal de mayor morbimortalidad posible (Whipple) representa un sobretratamiento inaceptable ante una patología autoinmune reversible médicamente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Prescribir terapia con Corticosteroides sistémicos (Prednisona oral a dosis de 40 mg/día) y monitorización imagenológica a las 4 semanas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Instaurar un esquema de antibióticos parenterales prolongados por sospecha de pancreatitis crónica supurativa.",
        "distractorProfile": "wrong_inflammatory_etiology",
        "incorrectFeedback": "La pancreatitis crónica bacteriana o supurativa es excepcional en ausencia de inmunosupresión previa o pseudoquistes infectados; la patología de base es fibroinflamatoria linfoplasmocitaria, por lo que los antibióticos son fútiles."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Realizar un drenaje biliar percutáneo y programar suplementación vitalicia con enzimas pancreáticas.",
        "distractorProfile": "symptomatic_palliation_avoiding_cure",
        "incorrectFeedback": "Aunque la derivación biliar alivia la ictericia transitoriamente, no detiene la cascada autoinmune fibrosante en el tejido pancreático, ni es necesaria si el uso temprano de esteroides desinflama rápidamente el conducto distal ocluido."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente cursa con la presentación estelar de la **Pancreatitis Autoinmune (PAI) Tipo 1**, la cual es la manifestación pancreática de la **Enfermedad Relacionada con IgG4**. Clínicamente simula a la perfección un cáncer de cabeza de páncreas (ictericia obstructiva indolora y pérdida de peso en un anciano), de ahí que se denomine el \"gran simulador pseudo-tumoral\". Las pistas diagnósticas clave que descartan la neoplasia son: afectación sincrónica de otras glándulas (las glándulas salivales/sialoadenitis por IgG4), un CA 19-9 normal, la radiología patognomónica del páncreas \"en forma de salchicha\" (agrandamiento difuso con un halo fibroso) y estrechamientos largos del colédoco. El sello diagnóstico bioquímico es la elevación sérica masiva de la fracción **IgG4**. El tratamiento es espectacularmente médico: los corticosteroides (Prednisona) encogen la masa inflamatoria de forma drástica y alivian la ictericia obstructiva en cuestión de dos a cuatro semanas, evitando cirugías radicales innecesarias.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, a este paciente, hace 20 años, le habrían abierto el abdomen y le habrían mutilado la vía biliar, el duodeno y el páncreas con un procedimiento de Whipple (Opción A). El patólogo revisaría la pieza quirúrgica extirpada y diría \"Oh, sorpresa, no hay células malignas, solo una infiltración densa de linfocitos y células plasmáticas positivas para IgG4\". Para evitar esa tragedia quirúrgica inmensa, siempre que veas un tumor en el páncreas que no dilata el conducto de Wirsung (ausencia de signo del doble conducto) y donde el páncreas entero se ve hinchado como un embutido, pídele niveles de IgG4 en sangre. Unas pastillas de Prednisona curan el cuadro.",
    "keyPoints": [
      "Cuando veas:",
      "• Hombre adulto mayor con Ictericia Indolora (Sospecha inicial de Cáncer de Páncreas).",
      "• TAC: Páncreas \"en salchicha\" o aumento difuso de la glándula sin dilatación del Wirsung.",
      "• Marcadores: CA 19-9 negativo + IgG4 en suero > 2 veces el valor normal.",
      "Debes pensar en:",
      "Pancreatitis Autoinmune (Enfermedad por IgG4). Es una patología benigna que cursa de forma pseudo-tumoral. El tratamiento curativo es puramente médico con Esteroides (Prednisona).",
      "Tema: Gastroenterología / Enfermedad por IgG4."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-26",
    "university": "UCC",
    "examArea": "PEDIATRÍA - CARDIOLOGÍA / REUMATOLOGÍA",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Un lactante masculino de 18 meses, hijo de padres procedentes de área rural con acceso limitado al sistema de salud, es traído a consulta externa por presentar una cojera persistente y descamación profusa en los dedos de manos y pies. La madre reporta que el niño tuvo un cuadro febril severo (39.5°C) que duró 12 días hace aproximadamente un mes, acompañado de \"ojos rojos\", labios agrietados y sarpullido, pero que resolvió solo con acetaminofén casero y \"baños botánicos\" sin evaluación médica formal. Hoy el paciente se encuentra afebril y luce vital. Sospechando un diagnóstico tardío de Enfermedad de Kawasaki, se realiza de forma prioritaria un ecocardiograma transtorácico. El reporte documenta una fracción de eyección normal, sin derrame, pero resalta la presencia de Aneurismas Coronarios Gigantes bilaterales (Z-score de +12; diámetro máximo de 9.5 mm en la coronaria descendente anterior). ¿Cuál es la terapia farmacológica ambulatoria crónica INDISPENSABLE de mantenimiento para evitar la mortalidad súbita en este niño?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Suspender cualquier antiinflamatorio y mantener control ecocardiográfico semestral hasta la regresión espontánea.",
        "distractorProfile": "passive_and_lethal_neglect",
        "incorrectFeedback": "Los aneurismas gigantes tienen una tasa muy baja de regresión anatómica espontánea. Enviar a un niño con ectasias coronarias severas a la casa sin profilaxis antitrombótica asegura un infarto de miocardio fulminante a corto o mediano plazo."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar inmunoglobulina G intravenosa (IGIV) a 2 g/kg y corticoides sistémicos de forma inmediata.",
        "distractorProfile": "acute_therapy_applied_out_of_window",
        "incorrectFeedback": "La IGIV es curativa y prevencionista SI se administra durante la fase aguda febril (ideamente primeros 10 días). A las 4 semanas de evolución y con el niño afebril (fase de convalecencia), la cascada inmunológica primaria ya se apagó y el daño estructural coronario ya está instaurado; la IGIV no revierte el aneurisma gigante."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Prescribir Ácido Acetilsalicílico (AAS) a dosis antiagregantes asociado OBLIGATORIAMENTE a anticoagulación sistémica (ej. Warfarina o Heparina de Bajo Peso Molecular)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Iniciar clopidogrel en monoterapia a dosis pediátricas como agente de seguridad máxima.",
        "distractorProfile": "insufficient_anti_thrombotic_regimen",
        "incorrectFeedback": "El clopidogrel inhibe la agregación plaquetaria, pero su uso aislado fracasa en prevenir los coágulos dependientes de fibrina en las zonas de estasis vascular profunda del saco aneurismático masivo; se requiere el efecto directo de un anticoagulante sistémico."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente cursa con una secuela tardía catastrófica de una Enfermedad de Kawasaki no tratada a tiempo: el desarrollo de **Aneurismas Coronarios Gigantes** (definidos por guías AHA como diámetro absoluto ≥ 8 mm o un Z-score ≥ 10). La dilatación masiva de la arteria coronaria destruye el flujo laminar, generando estasis sanguíneo severo en el interior del saco aneurismático. Este ambiente es altamente protrombótico. Si la sangre se coagula dentro del aneurisma, se produce la oclusión total aguda del vaso y un infarto agudo de miocardio letal en un lactante. Según las directrices de la AHA, los pacientes con aneurismas gigantes (riesgo cardiovascular máximo) tienen indicación ABSOLUTA de **terapia antitrombótica combinada de por vida (o hasta la regresión del aneurisma)**: antiagregación plaquetaria con Aspirina a dosis bajas (3-5 mg/kg/día) MÁS anticoagulación sistémica plena (Warfarina con INR objetivo 2.0-3.0, o HBPM).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, aquí no te están preguntando el tratamiento agudo del Kawasaki. El niño ya superó la fase inflamatoria febril hace un mes (la ventana de eficacia para la IGIV se cerró, Opción B). Ahora, el problema es mecánico. Una coronaria de un niño que mide casi 1 cm de ancho (9.5 mm) es una laguna gigante de sangre estancada. Si le das solo aspirina, no bloquearás la formación de trombos de fibrina. Necesitas anticoagulación terapéutica agresiva (Warfarina) para mantener esa sangre líquida. La causa principal de muerte del Kawasaki no es el estallido del aneurisma, es la trombosis aguda isquémica del mismo.",
    "keyPoints": [
      "Cuando veas:",
      "• Antecedente clásico de Enfermedad de Kawasaki (tratada o no).",
      "• Ecocardiograma con Aneurismas Coronarios GIGANTES (diámetro ≥ 8 mm o Z-score ≥ 10).",
      "• Decisión sobre manejo crónico ambulatorio.",
      "Debes pensar en:",
      "Doble terapia profiláctica obligatoria: Aspirina (Antiagregante) + Warfarina / Heparina de Bajo Peso Molecular (Anticoagulante). Para aneurismas pequeños a medianos, basta solo con Aspirina.",
      "Tema: Complicaciones Enfermedad de Kawasaki / Cardiología Pediátrica."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-27",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - NEUMOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 68 años de edad, ex fumador pesado, agricultor pensionado. Consulta por un cuadro de 2 años de evolución de disnea progresiva de esfuerzo y una tos seca persistente (\"tos en accesos cortos\") que interfiere con su calidad de vida. Al examen físico resalta acropaquia bilateral franca (dedos en palillo de tambor) y, a la auscultación, crepitantes secos inspiratorios bilaterales intensos en las bases pulmonares, descritos como \"sonido de desgarro de velcro\". Una Tomografía Computarizada de Alta Resolución (TCAR) de tórax reporta engrosamiento de los septos interlobulillares, bronquiectasias de tracción periféricas y un patrón de quistes aéreos apilados en capas de localización predominantemente subpleural y basal inferior. Los hallazgos radiológicos se reportan como \"Patrón de Neumonía Intersticial Usual (UIP) definitivo\". No hay hallazgos de adenopatías o pleuritis. De acuerdo a las guías internacionales para el manejo de la Fibrosis Pulmonar Idiopática (FPI), ¿cuál es la conducta terapéutica con MAYOR evidencia para ralentizar la progresión de la enfermedad y el deterioro de la función pulmonar?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Instaurar pulsos intravenosos de Metilprednisolona seguidos de un esquema de desmonte lento con Azatioprina.",
        "distractorProfile": "obsolete_and_harmful_therapy",
        "incorrectFeedback": "El uso de terapia inmunosupresora (Triple terapia con Prednisona, Azatioprina y N-acetilcisteína) en la Fibrosis Pulmonar Idiopática pura demostró en el estudio PANTHER un aumento inaceptable de mortalidad por todas las causas y hospitalizaciones sin beneficio pulmonar; se considera actualmente una contraindicación fuerte."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Prescribir terapia empírica de amplio espectro con Levofloxacino para descartar bronquiectasias sobreinfectadas silentes.",
        "distractorProfile": "symptomatic_illusion_trap",
        "incorrectFeedback": "Las bronquiectasias de tracción en la FPI son un fenómeno puramente restrictivo-mecánico (el pulmón se retrae por la fibrosis y ensancha las vías aéreas a la fuerza), a diferencia de las bronquiectasias supurativas idiopáticas o de la Fibrosis Quística. Los antibióticos no detienen el declive restrictivo fatal."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Iniciar terapia crónica y temprana con agentes Antifibróticos (Nintedanib o Pirfenidona)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Observación activa y remitir directamente para inclusión en lista de trasplante pulmonar bilateral.",
        "distractorProfile": "passive_abandonment_of_medical_options",
        "incorrectFeedback": "Aunque el trasplante pulmonar es el único tratamiento curativo definitivo, retrasar el inicio temprano de los antifibróticos acelerará de forma alarmante la caída de la función pulmonar, precipitando una falla respiratoria mortal antes de que el paciente logre siquiera recibir un órgano de donante."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente presenta el diagnóstico impecable y de libro de la **Fibrosis Pulmonar Idiopática (FPI)**. Claves clínicas: anciano, hombre, tos seca, crépitos \"tipo velcro\" y acropaquias. Clave radiológica confirmatoria absoluta: Patrón de Neumonía Intersticial Usual (UIP) en la TCAR (caracterizado por las tres banderas rojas: daño basal, bronquiectasias de tracción y el infame \"panal de abejas\" o *honeycombing* periférico subpleural). Hace años se creía que esto era un proceso autoinmune (tratado erróneamente con esteroides), pero hoy se sabe que es un defecto fibrótico anómalo aberrante y agresivo del parénquima pulmonar (proliferación fibroblástica pura). Los únicos medicamentos aprobados a nivel mundial que han demostrado estadísticamente en grandes ensayos clínicos (INPULSIS y ASCEND) reducir en casi un 50% la tasa de declive anual de la Capacidad Vital Forzada (CVF) son los fármacos antifibróticos de diana específica: **Nintedanib** (inhibidor de tirosina quinasa) o **Pirfenidona**.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un hito histórico de la neumología. ¡La trampa mortal de esta pregunta es la Opción A! Darle Prednisona a una Fibrosis Pulmonar Idiopática (patrón UIP en panal de abejas) es una iatrogenia antigua que el estudio clínico PANTHER-IPF obligó a detener por exceso de mortalidad. Los esteroides aumentaban las muertes, los ingresos hospitalarios y las neumonías sin frenar en absoluto la cicatrización fibrótica. Si el radiólogo escribe \"UIP\" o \"Panal de Abejas\", olvídate de los corticoides. Ve directo al Nintedanib o la Pirfenidona. Solo usas corticoides si la enfermedad fuera una NINE (Neumonía Intersticial No Específica) o se asociara a una enfermedad reumatológica activa (como lupus o artritis reumatoide).",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente mayor de 60 años con disnea crónica, crépitos \"velcro\" en bases y dedos en palillo de tambor.",
      "• TAC de Alta Resolución reportando patrón \"Panal de Abejas\" (Honeycombing) y Bronquiectasias de tracción en localización subpleural basal.",
      "Debes pensar en:",
      "Fibrosis Pulmonar Idiopática (Patrón UIP). El tratamiento específico y único son los Antifibróticos (Pirfenidona / Nintedanib). Los corticosteroides e inmunosupresores son perjudiciales en este patrón clásico.",
      "Tema: Enfermedades Pulmonares Intersticiales / FPI."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-28",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - ENDOCRINOLOGÍA / ONCOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 62 años, fumador de larga data (50 paquetes/año), acude a consulta por fatiga extrema, constipación severa, poliuria, confusión progresiva y sed insaciable de dos semanas de evolución. Al examen físico se documenta pérdida de peso importante, sequedad de mucosas e hiporreflexia. Paraclínicos en urgencias: Sodio 139 mEq/L, Potasio 3.5 mEq/L, **Calcio sérico total de 14.8 mg/dL** (con albúmina de 3.8 g/dL), Fosfato sérico francamente disminuido en 1.8 mg/dL. El panel endocrinológico revela una Hormona Paratiroidea intacta (PTHi) de **8 pg/mL** (marcadamente suprimida; valor normal 15-65 pg/mL) y niveles de 1,25-(OH)2 Vitamina D indetectables. Una radiografía de tórax revela una gran masa cavitada central en el pulmón derecho. Tras instaurar una agresiva hidratación intravenosa con solución salina normal, ¿cuál es la mediación farmacológica patogénica ESPECÍFICA para controlar de manera sostenida esta crisis metabólica paraneoplásica?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar Bicarbonato de Sodio intravenoso para alcalinizar la orina y acelerar la calciuresis renal.",
        "distractorProfile": "obsolete_salicylate_management_mismatch",
        "incorrectFeedback": "La alcalinización de la orina se utiliza para la intoxicación por ácido acetilsalicílico o metotrexato, no para la hipercalcemia. De hecho, alcalinizar el plasma empeoraría los síntomas neurológicos al promover la unión del poco calcio ionizado libre a las proteínas."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Infusión de un bisfosfonato intravenoso de alta potencia (ej. Ácido Zoledrónico) o el inhibidor de RANKL (Denosumab)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Iniciar manejo exclusivo con Glucocorticoides a dosis altas (Hidrocortisona IV) por sospecha de hipercalcemia por producción extra-renal de calcitriol (vitamina D).",
        "distractorProfile": "wrong_hypercalcemia_mechanism",
        "incorrectFeedback": "Los corticosteroides son la terapia de oro para la hipercalcemia inducida por producción patológica de 1,25-(OH)2 Vitamina D (ej. Linfomas, Sarcoidosis, Tuberculosis). En la hipercalcemia humoral por PTHrP de los tumores sólidos escamosos, su eficacia para reducir el calcio es mínima."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Cirugía de paratiroidectomía urgente para extirpar la fuente primaria de secreción cálcica anómala.",
        "distractorProfile": "missing_the_suppressed_axis",
        "incorrectFeedback": "Intervenir quirúrgicamente las glándulas paratiroides en este paciente constituiría una negligencia brutal; el nivel sérico de PTH suprimido (8 pg/mL) demuestra que las glándulas son fisiológicamente inocentes y no están causando el problema; la fuente del calcio es el cáncer torácico."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente cursa con **Hipercalcemia de la Malignidad**, específicamente del tipo humoral. Es una emergencia metabólica oncológica clásica. La presentación es típica de un Carcinoma Escamocelular de Pulmón (asociado a tabaquismo y masas cavitadas). El tumor secreta masivamente una proteína engañosa llamada **Péptido Relacionado con la PTH (PTHrP)**. Esta molécula imita la acción de la PTH normal en los huesos (estimulando osteoclastos para romper el hueso y liberar calcio a la sangre) y en el riñón (botando fósforo, causando hipofosfatemia). Sin embargo, el altísimo nivel de calcio circulante aplasta y bloquea por completo la glándula paratiroides sana del paciente, por lo que los niveles medibles en sangre de PTH real están en el piso (PTH suprimida en 8 pg/mL). El tratamiento crónico de la hipercalcemia tumoral osteolítica destructiva, tras la reanimación hídrica (salina 0.9%), exige el uso de potentes inhibidores de la resorción ósea: Bisfosfonatos IV (Ácido Zoledrónico o Pamidronato).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, aquí te juegan el truco del eje hormonal inhibido. Si tienes el calcio en las nubes (14.8), pero la PTH está muy baja (en 8), significa que la glándula tiroides está sana y trabajando a la defensiva tratando de sobrevivir. El calcio está saliendo de otro lugar que no le hace caso a las reglas. En este caso, el cáncer escamoso está fabricando un falso clon de PTH (el PTHrP). Los esteroides (Opción C) son fabulosos para la hipercalcemia de los linfomas y sarcoidosis (que producen Vitamina D y aumentan la absorción del intestino), pero en los tumores sólidos, el problema es que el tumor se está \"comiendo\" literalmente los huesos; los bisfosfonatos envenenan a los osteoclastos, bloqueando la fuente de calcio y permitiendo que el riñón limpie la sangre.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente oncológico o fumador crónico con masa central pulmonar.",
      "• Calcio > 13-14 mg/dL con síntomas clásicos (Constipación, Poliuria, Confusión mental).",
      "• PTHi Sérica SUPRIMIDA (<15 pg/mL).",
      "Debes pensar en:",
      "Hipercalcemia Tumoral Humoral mediada por PTHrP. Requiere agresiva hidratación inicial y administración mandatoria de Bisfosfonatos Intravenosos para frenar la destrucción de hueso comandada por el tumor.",
      "Tema: Urgencias Oncológicas / Trastornos del Calcio."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-29",
    "university": "UCC",
    "examArea": "PEDIATRÍA - INFECTOLOGÍA / NEONATOLOGÍA",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Un recién nacido, extraído por cesárea a las 38 semanas, presenta al examen físico de adaptación un peso al nacer de 1.800 gramos (restricción simétrica del crecimiento intrauterino - RCIU severo) y microcefalia marcada. Se documentan múltiples equimosis y un exantema purpúrico papular generalizado de aspecto azul violáceo (\"Blueberry Muffin Rash\") en todo el tronco, asociado a franca hepatoesplenomegalia e ictericia precoz. El neonato es ingresado a cuidado intensivo neonatal; una ecografía cerebral de ingreso revela una moderada ventriculomegalia bilateral con múltiples áreas difusas hiper-ecogénicas que delinean los bordes de los ventrículos laterales (**calcificaciones periventriculares predominantes**). La evaluación formal mediante potenciales evocados de tallo auditivo (PEATC) reporta hipoacusia neurosensorial bilateral profunda. Ante el diagnóstico presuntivo de esta infección congénita, ¿cuál es el régimen terapéutico farmacológico INDISPENSABLE para detener la progresión de la pérdida auditiva?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Terapia combinada de Sulfadiazina, Pirimetamina y Ácido Folínico continuo por 12 meses.",
        "distractorProfile": "toxoplasmosis_etiology_overlap",
        "incorrectFeedback": "Esta terapia es exclusiva para la Toxoplasmosis congénita. La toxoplasmosis se caracteriza radiológicamente por calcificaciones cerebrales diseminadas/difusas corticales e hidrocefalia obstructiva, no microcefalia ni el patrón periventricular del CMV."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Infusión intravenosa de Ganciclovir y transición precoz a Valganciclovir oral durante un período sostenido de 6 meses."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Tratamiento antirretroviral triconjugado empírico inmediato (Zidovudina, Lamivudina, Nevirapina) en profilaxis.",
        "distractorProfile": "hiv_perinatal_confusion",
        "incorrectFeedback": "El VIH congénito periparto raramente produce síntomas catastróficos multisistémicos sintomáticos tempranos al nacimiento (como microcefalia y calcificaciones); suele presentarse como inmunodeficiencia, retraso ponderal crónico y neumonías oportunistas semanas o meses posteriores."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Penicilina G cristalina intravenosa por 14 días para prevenir el empeoramiento óseo-cartilaginoso agudo.",
        "distractorProfile": "congenital_syphilis_trap",
        "incorrectFeedback": "La penicilina G cristalina es el tratamiento para la Sífilis Congénita. Aunque la sífilis temprana cursa con ictericia y hepatoesplenomegalia, su sello radiológico primario son las periostitis dolorosas (osteocondritis) y el pénfigo sifilítico en la piel, sin producir clásicamente microcefalia por calcificaciones intrauterinas."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente cursa con la presentación más sintomática y devastadora del **Citomegalovirus (CMV) Congénito**. Es la infección viral fetal más frecuente y la principal causa de sordera neurosensorial no genética infantil. Clínicamente cursa con el síndrome TORCH florido (RCIU, ictericia, rash tipo muffin de arándano y hepatoesplenomegalia). La radiología diferencia genialmente esta infección de otras: el CMV tiene un tropismo destructivo espectacular por la matriz germinal embrionaria en el cerebro, generando calcificaciones destructivas localizadas estrictamente alrededor de los ventrículos cerebrales (**calcificaciones periventriculares**), y destruyendo el tejido neuroglial induciendo **microcefalia** severa. Un ensayo clínico crucial demostró que tratar a los niños sintomáticos con afectación del SNC durante 6 meses completos con Valganciclovir (tras la inducción inicial con Ganciclovir IV) detiene y mejora el deterioro de la audición neurosensorial progresiva y mejora los desenlaces de neurodesarrollo a largo plazo en comparación con la terapia de solo 6 semanas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** La regla de oro del TORCH en las imágenes, que no debes olvidar nunca. Como vimos antes en la Toxoplasmosis, el gato (Toxoplasma) deja la caca esparcida por todo el jardín (calcificaciones cerebrales DIFUSAS corticales). El CMV, en cambio, prefiere pintar la casa por los bordes internos (calcificaciones PERIVENTRICULARES, bordea las cavidades ventriculares). Además, el CMV impide que el cerebro crezca (microcefalia), mientras que el Toxoplasma suele tapar el drenaje de líquido provocando una cabeza gigante (hidrocefalia obstructiva). El tratamiento de primera línea para el CMV no tiene nada que ver con azoles o pirimetamina (Opción A), requiere los potentes antivirales de la familia del Ganciclovir. Es tóxico para la médula (da neutropenia), pero salva el oído del bebé.",
    "keyPoints": [
      "Cuando veas:",
      "• Neonato pequeño para la edad gestacional con microcefalia e Hipoacusia Neurosensorial profunda.",
      "• Ecografía/TAC craneal: Calcificaciones PERIVENTRICULARES.",
      "• Exantema púrpura violáceo (Blueberry Muffin Baby).",
      "Debes pensar en:",
      "Infección Congénita por Citomegalovirus (CMV). El tratamiento es con Ganciclovir IV seguido de Valganciclovir oral por 6 meses para proteger la audición.",
      "Tema: Infecciones Perinatales (TORCH) / CMV."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-30",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - CARDIOLOGÍA / URGENCIAS",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 54 años, con múltiples factores de riesgo cardiovascular, cursa su cuarto día de estancia en la UCI coronaria tras presentar un Infarto Agudo de Miocardio con elevación del ST (IAMCEST) de cara anterolateral muy extenso (derivaciones V1-V6). A pesar de una angioplastia primaria a la arteria descendente anterior, el paciente mantuvo disfunción contráctil residual severa (FEVI 32%). En el monitoreo electrocardiográfico continuo, se observa súbitamente el desarrollo de un Bloqueo de Rama Derecha (BRD) de novo, asociado a un Bloqueo Fascicular Anterior Izquierdo (BFAI) (desviación extrema del eje a la izquierda en -60°). Una hora después, sobre este bloqueo bifascicular agudo, el paciente desarrolla un bloqueo AV de segundo grado tipo Mobitz II. El paciente se encuentra hemodinámicamente límite pero estable (PA 100/60 mmHg, FC 52 lpm), sin síncope por el momento. ¿Cuál es la intervención cardiológica invasiva profiláctica y obligatoria en este escenario?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar de inmediato un bolo intravenoso de 1 mg de Atropina para revertir la alteración nodal vagal inducida por la isquemia de pared anterior.",
        "distractorProfile": "wrong_pharmacological_target_for_infrahisian_block",
        "incorrectFeedback": "La Atropina es útil en bloqueos de origen nodal (supra-Hisianos), clásicos del infarto inferior por hipertonía vagal. En el bloqueo infra-Hisiano (Mobitz II) típico del infarto anterior, la Atropina es ineficaz y puede agravar la isquemia al aumentar la frecuencia sinusal."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Suspender los agentes betabloqueadores, iniciar infusión de Dopamina y ordenar Holter de 24 horas antes del alta por seguridad ambulatoria.",
        "distractorProfile": "dangerously_conservative_management",
        "incorrectFeedback": "La infusión de cronotrópicos positivos no resuelve la necrosis del sistema de His-Purkinje; enviar a un paciente a observación o alta domiciliaria con un Mobitz II secundario a necrosis isquémica anterior asegura un evento de muerte súbita."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Insertar inmediatamente un marcapasos temporal transvenoso, dado el riesgo inminente de progresión a bloqueo auriculoventricular completo irreversible."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Indicar Cardioversión Eléctrica Sincronizada a 100 Joules para restablecer la conducción a través del nodo AV.",
        "distractorProfile": "lethal_electrical_error",
        "incorrectFeedback": "La cardioversión eléctrica sincronizada está indicada para taquiarritmias inestables (ej. Fibrilación Auricular con respuesta rápida, Taquicardia Ventricular con pulso). Aplicar choque eléctrico en un bloqueo AV es absolutamente inútil y perjudicial."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente cursa con un Infarto de Pared Anterior (IAMCEST anterior extenso) que se complica con un **Bloqueo Bifascicular** (BRD + BFAI) de novo, el cual rápidamente progresa a un **Bloqueo AV de segundo grado tipo Mobitz II**. La irrigación del sistema de conducción (específicamente de las ramas del Haz de His por debajo del nodo AV) depende en gran medida de las ramas septales de la arteria Descendente Anterior. Un bloqueo Mobitz II o bifascicular de novo en el contexto de un IAM anterior indica una necrosis masiva del septo interventricular y de los fascículos de conducción infranodales (bloqueo intra-Hisiano o infra-Hisiano). Este tipo de bloqueos **NO responden a la Atropina** y tienen un riesgo altísimo de progresar repentinamente a un Bloqueo AV Completo (de tercer grado) con asístole letal o ritmos de escape ventricular insuficientes. Por lo tanto, las guías establecen indicación Clase I para la colocación profiláctica de un **marcapasos temporal transvenoso** en estos pacientes, preparándose para la casi segura necesidad de un marcapasos definitivo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, aquí hay que diferenciar dos mundos en los infartos. Si el infarto es de la cara INFERIOR (Coronaria Derecha), suele dar bloqueos benignos (Wenckebach, bradicardia sinusal) por puro reflejo vagal exagerado o isquemia transitoria del nodo AV; esos bloqueos mejoran solos o con una dosis de Atropina. PERO, si el infarto es de la cara ANTERIOR (Descendente Anterior), el bloqueo significa que el tabique del corazón y el Haz de His se han necrosado literalmente. Ese tejido de conducción infra-Hisiano está muerto y no va a responder a la Atropina (Opción A). El siguiente paso es un Bloqueo de Tercer Grado asfíctico. No esperes a que el corazón se apague por completo, debes llamar al hemodinamista para meter un cable de marcapasos por la vena de inmediato (Opción C).",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente con Infarto Agudo de Miocardio ANTERIOR.",
      "• Desarrollo de nuevo Bloqueo Bifascicular (BRD + BFAI o BRD + BFPI) o Bloqueo AV Mobitz II.",
      "Debes pensar en:",
      "Necrosis septal extensa e isquemia infranodal. Riesgo inminente de Bloqueo AV completo. La Atropina NO sirve; se requiere insertar un MARCAPASOS TEMPORAL urgente.",
      "Tema: Complicaciones Eléctricas del IAM / Cardiología."
    ]
  }
];
