import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #4 (26 jul 2026) · Preguntas #01–#10.
 */
export const UCC_CONV_2026_07_26_01_10_QUESTIONS: TrainingQuestion[] = [
  {
    "id": "ucc-conv-2026-07-26-01",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - REUMATOLOGÍA / ANESTESIOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Mujer de 58 años, con diagnóstico de Artritis Reumatoide seropositiva de 20 años de evolución, con deformidades articulares severas en manos y pies (cuello de cisne, ráfaga cubital). Acude al servicio de urgencias por un cuadro de colecistitis aguda calculosa que requiere colecistectomía laparoscópica de urgencia bajo anestesia general. La paciente se encuentra estable hemodinámicamente, sin focalización neurológica, quejándose únicamente de dolor abdominal. Previo a la inducción anestésica y el abordaje avanzado de la vía aérea, ¿cuál es el paso de evaluación preoperatoria OBLIGATORIO en esta paciente para prevenir una secuela catastrófica?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Solicitar una ecocardiografía transtorácica para descartar derrame pericárdico reumatoide asintomático.",
        "distractorProfile": "secondary_complication_misplaced",
        "incorrectFeedback": "Aunque la pericarditis es una complicación extraarticular, en ausencia de inestabilidad o clínica de taponamiento, no representa el riesgo agudo mecánico de muerte inminente durante la manipulación de la vía aérea en el quirófano."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Suspender inmediatamente el Metotrexato y los agentes biológicos para prevenir sepsis postoperatoria.",
        "distractorProfile": "wrong_perioperative_med_management",
        "incorrectFeedback": "El Metotrexato comúnmente se continúa durante el periodo perioperatorio porque el riesgo de un brote reumatoide supera el riesgo infeccioso leve; los biológicos se suspenden semanas antes, no en el momento agudo de la cirugía."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Tomar radiografías de la columna cervical en flexión y extensión máximas para evaluar la unión atlantoaxoidea."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar pulsos de hidrocortisona profilácticos por riesgo de crisis suprarrenal debido al uso crónico de AINEs.",
        "distractorProfile": "wrong_drug_mechanism_adrenal",
        "incorrectFeedback": "El uso de AINEs no causa supresión del eje hipotálamo-hipófisis-adrenal; esta precaución aplicaría solo si la paciente fuera usuaria crónica de corticosteroides sistémicos, dato no especificado en el caso."
      }
    ],
    "correctOptionId": "C",
    "explanation": "La paciente cursa con una Artritis Reumatoide (AR) de larga data y destructiva. Una de las complicaciones extra-articulares más temidas (y a menudo asintomáticas) de la AR crónica es la **subluxación atlantoaxoidea** (inestabilidad de la articulación C1-C2) producida por la destrucción del ligamento transverso por el pannus reumatoide. Durante la intubación orotraqueal para la anestesia general, la maniobra de hiperextensión del cuello puede provocar el desplazamiento del odontoides y la sección transversal inmediata de la médula espinal cervical alta, causando tetraplejía flácida irreversible o muerte súbita por paro respiratorio. Las guías exigen obligatoriamente una evaluación radiológica dinámica (flexión/extensión) de la columna cervical antes de cualquier cirugía que requiera intubación en pacientes con AR crónica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, esta es una perla que te salva la vida en urgencias y quirófanos. Nunca confíes en el cuello de un paciente con AR crónica severa, incluso si nunca le ha dolido. Al dormir a la paciente con los relajantes musculares, pierdes la protección del tono muscular cervical; el laringoscopio empuja la cabeza hacia atrás, el diente del axis se desliza y decapita la médula.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente con Artritis Reumatoide de larga data o destructiva.",
      "• Programación para cirugía electiva o de urgencia que requiera intubación orotraqueal.",
      "Debes pensar en:",
      "Alto riesgo de subluxación atlantoaxoidea. Es mandatorio solicitar radiografías de columna cervical dinámica antes de manipular el cuello del paciente en quirófano.",
      "Tema: Complicaciones de Artritis Reumatoide / Valoración Preoperatoria."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-02",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - ENDOCRINOLOGÍA / NEUROLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 35 años acude a consulta externa refiriendo cefalea progresiva, disminución de la libido y disfunción eréctil de 6 meses de evolución. En las últimas semanas nota dificultad para ver los objetos situados a los lados mientras conduce su vehículo. Al examen físico se documenta una hemianopsia bitemporal mediante campimetría por confrontación. Se solicita una Resonancia Magnética (RMN) cerebral que revela una gran masa selar y supraselar de 4.5 cm de diámetro (Macroadenoma) que comprime severamente el quiasma óptico. Los laboratorios hormonales de ingreso reportan: Prolactina sérica masivamente elevada en 4,500 ng/mL (valor normal < 20 ng/mL), IGF-1 normal, TSH normal, Cortisol AM normal. Ante el inminente riesgo de ceguera irreversible, ¿cuál es el tratamiento INMEDIATO MÁS apropiado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Remisión inmediata a neurocirugía para resección transesfenoidal endoscópica descompresiva urgente.",
        "distractorProfile": "intuitive_surgical_trap",
        "incorrectFeedback": "La descompresión neuroquirúrgica primaria en el prolactinoma puro es un error terapéutico según las guías, ya que la morbimortalidad quirúrgica supera con creces la excelente y rápida respuesta anatómica a los agonistas dopaminérgicos."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar de forma urgente agonistas dopaminérgicos (Cabergolina) a altas dosis por vía oral."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Radioterapia estereotáctica fraccionada urgente para reducir el volumen tumoral.",
        "distractorProfile": "obsolete_primary_therapy",
        "incorrectFeedback": "La radioterapia tiene un inicio de acción de meses a años y un altísimo riesgo de panhipopituitarismo tardío, reservándose solo para tumores agresivos o malignos puramente refractarios a toda otra línea de manejo."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar un bolo de Dexametasona IV seguido de octreotide subcutáneo y programación quirúrgica.",
        "distractorProfile": "wrong_hormonal_axis_antagonist",
        "incorrectFeedback": "Los análogos de somatostatina (Octreotide) son el tratamiento de los adenomas secretores de Hormona de Crecimiento (Acromegalia) o TSH, no de los prolactinomas, y la dexametasona no reduce el volumen de este tumor específico."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente cursa con un Macroprolactinoma gigante complicado con compresión del quiasma óptico. Este es uno de los \"trucos\" más evaluados y contraintuitivos de la medicina interna. A diferencia de casi cualquier otro tumor cerebral que comprometa la vía visual (donde la cirugía es la regla de oro), el Prolactinoma es la EXCEPCIÓN ABSOLUTA. La terapia médica con **agonistas dopaminérgicos (Cabergolina o Bromocriptina)** es el tratamiento de primera línea, INDEPENDIENTEMENTE del tamaño del tumor o de la severidad del defecto del campo visual. La cabergolina induce una reducción drástica del volumen tumoral en cuestión de días a semanas, recuperando la visión de manera espectacular sin necesidad de someter al paciente a los riesgos de la neurocirugía. La cirugía se reserva únicamente para la apoplejía hipofisiaria aguda (sangrado) o para la verdadera refractariedad médica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, aquí es donde la endocrinología reta a la neurocirugía. Si ves un campo visual afectado, tu mano va a querer marcar \"Cirugía transesfenoidal\" (Opción A). ¡Detente! Un nivel de prolactina de 4,500 ng/mL confirma que la masa es un prolactinoma puro (ojo: niveles entre 50 y 150 pueden ser por compresión del tallo pituitario por otro tumor \"no funcionante\", pero >250 es un prolactinoma indiscutible). Estos tumores \"se derriten\" con la Cabergolina. Operarlos de entrada expone al paciente a meningitis, fístula de LCR o panhipopituitarismo sin aportar mayor beneficio que la pastilla.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente con masa en la silla turca (Macroadenoma) + Hemianopsia bitemporal.",
      "• Niveles de Prolactina verdaderamente altos (> 200 - 250 ng/mL, en este caso 4,500).",
      "Debes pensar en:",
      "Macroprolactinoma. El tratamiento de primera línea es SIEMPRE MÉDICO (Cabergolina), incluso con compromiso visual grave. NO marcar cirugía de entrada.",
      "Tema: Endocrinología / Prolactinoma."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-03",
    "university": "UCC",
    "examArea": "PEDIATRÍA - INFECTOLOGÍA / NEUROLOGÍA",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Un neonato masculino es evaluado a las 48 horas de nacido por presentar macrocefalia progresiva. Su madre, proveniente de una zona rural con alta convivencia con animales de granja y felinos, no asistió a controles prenatales. Al examen físico: fontanela anterior amplia y tensa, estrabismo convergente. Una ecografía transfontanelar y una TC de cráneo revelan hidrocefalia triventricular y múltiples calcificaciones difusas dispersas a lo largo de todo el parénquima cerebral (corticales y subcorticales). El fondo de ojo reporta coriorretinitis macular bilateral cicatricial. Ante la tríada clásica de este síndrome infeccioso congénito (Tríada de Sabin), ¿cuál es el esquema de tratamiento de elección innegociable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Ganciclovir intravenoso seguido de Valganciclovir oral durante 6 meses, monitorizando toxicidad hematológica.",
        "distractorProfile": "wrong_torch_infection_treatment",
        "incorrectFeedback": "Es el tratamiento de elección para la infección congénita por Citomegalovirus (CMV), el cual se caracteriza patognomónicamente por microcefalia y calcificaciones periventriculares, distinto al patrón difuso del paciente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Pirimetamina, Sulfadiazina y Ácido Folínico (Leucovorina) de forma prolongada durante el primer año de vida."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Penicilina G Acuosa endovenosa por 10 a 14 días para prevenir sordera neurosensorial progresiva.",
        "distractorProfile": "syphilis_overlap_trap",
        "incorrectFeedback": "La Penicilina es el tratamiento de la Sífilis Congénita (cuya tríada de Hutchinson incluye queratitis, sordera y dientes mellados en fase tardía), pero no produce coriorretinitis fulminante ni calcificaciones cerebrales masivas en el periodo neonatal."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Espiramicina en monoterapia oral continua hasta documentar negativización de los anticuerpos IgM.",
        "distractorProfile": "maternal_prophylaxis_applied_to_infected_fetus",
        "incorrectFeedback": "La espiramicina se prescribe a la madre durante el embarazo reciente para prevenir la transmisión transplacentaria, pero carece de penetración hematoencefálica efectiva y no trata la infección tisular una vez el feto ya está invadido y sintomático."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente presenta la clásica Tríada de Sabin: Hidrocefalia, Coriorretinitis y Calcificaciones intracraneanas DIFUSAS, que es el sello patognomónico de la **Toxoplasmosis Congénita**. (A diferencia de la infección por Citomegalovirus, donde las calcificaciones suelen ser periventriculares y cursa clásicamente con microcefalia, no hidrocefalia). La infección ocurre cuando una madre seronegativa adquiere *Toxoplasma gondii* (por carnes crudas o heces de gato) durante la gestación. El tratamiento de la toxoplasmosis congénita sintomática está estandarizado mundialmente y es imperativo iniciarlo rápidamente para intentar rescatar la función visual y neurológica remanente: la combinación de un antagonista del folato (Pirimetamina) y una sulfonamida (Sulfadiazina). Es OBLIGATORIO añadir Ácido Folínico (Leucovorina, no ácido fólico) para proteger la médula ósea del bebé de la toxicidad hematológica de la pirimetamina. El tratamiento suele mantenerse durante 12 meses completos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** En las preguntas TORCH, la ubicación de las calcificaciones cerebrales es tu boleto ganador. Calcificaciones Periventriculares (bordeando los ventrículos) = Citomegalovirus (CMV). Calcificaciones Difusas (esparcidas como polvo por toda la corteza) = Toxoplasmosis. Otra diferencia es el tamaño de la cabeza: CMV da microcefalia (cerebro pequeño y destruido), mientras Toxoplasma hace hidrocefalia (cabeza enorme por bloqueo del acueducto). Si te confundes y marcas Ganciclovir (Opción A), estarías tratando CMV. La Espiramicina (Opción D) es una trampa muy fina: la espiramicina se le da a la MADRE gestante para evitar que el parásito cruce la placenta; pero una vez el bebé ya está infectado, la espiramicina no penetra bien el cerebro del niño, debes usar Pirimetamina/Sulfadiazina.",
    "keyPoints": [
      "Cuando veas:",
      "• Neonato con Tríada de Sabin: Hidrocefalia + Coriorretinitis + Calcificaciones difusas (no periventriculares).",
      "• Madre con antecedente epidemiológico de riesgo (felinos, carne cruda, no controlada).",
      "Debes pensar en:",
      "Toxoplasmosis Congénita. Fármacos mandatorios: Pirimetamina + Sulfadiazina + Ácido Folínico (Leucovorina) durante 1 año.",
      "Tema: Infecciones Perinatales (TORCH) / Toxoplasmosis."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-04",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - GASTROENTEROLOGÍA / URGENCIAS",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 76 años, con historia clínica de Fibrilación Auricular permanente sin adherencia al tratamiento anticoagulante y tabaquismo pesado. Ingresa a urgencias en la madrugada quejándose de la instauración hiperaguda de un dolor abdominal generalizado de intensidad insoportable (10/10), asociado a náuseas y dos episodios de vómito. Al ingreso, el paciente se encuentra retorciéndose de dolor. Al examen físico: PA 145/90 mmHg, FC 122 lpm (arrítmico). A la palpación abdominal, el vientre es blando, francamente depresible, sin defensa muscular localizada y sin signo de rebote (Blumberg negativo). No se palpan masas. Los gases arteriales reportan un lactato sérico de 6.8 mmol/L (marcadamente elevado). Ante la disociación clínico-semiológica, ¿cuál es el examen diagnóstico de elección INMEDIATO (Gold Standard inicial) para confirmar la catástrofe vascular sospechada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Tomografía Computarizada (TC) de abdomen simple sin contraste para buscar aire libre subdiafragmático.",
        "distractorProfile": "late_stage_marker_trap",
        "incorrectFeedback": "La TC sin contraste falla en delimitar la anatomía vascular arterial. Esperar a encontrar neumoperitoneo (aire libre) o neumatosis intestinal significa esperar a que el intestino sufra necrosis y perforación transmural completa, un escenario con mortalidad casi absoluta."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Angiografía por Tomografía Computarizada (Angio-TC) de abdomen y pelvis en fases arterial y venosa."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Ecografía Doppler abdominal de vasos mesentéricos como primera línea no invasiva e indolora.",
        "distractorProfile": "inadequate_acute_modality",
        "incorrectFeedback": "El Doppler mesentérico requiere un operador sumamente experto y su rendimiento cae en picada en el contexto agudo debido al íleo paralítico reactivo que interpone gas intestinal masivo entre el transductor y las arterias esplácnicas."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Endoscopia de vías digestivas altas y colonoscopia simultánea urgente.",
        "distractorProfile": "wrong_ischemia_location",
        "incorrectFeedback": "La isquemia mesentérica aguda afecta típicamente al intestino delgado (irrigado por la AMS); los endoscopios convencionales no alcanzan el yeyuno o el íleon proximal, y la insuflación de aire podría perforar un tejido isquémico friable inminente."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente cursa con un cuadro clásico y letal de Isquemia Mesentérica Aguda (IMA), en este caso, de origen embólico (desencadenado por la Fibrilación Auricular no anticoagulada que lanzó un coágulo a la arteria mesentérica superior). La descripción patognomónica de la IMA en las viñetas médicas es **\"Dolor abdominal extremo, totalmente desproporcionado a los hallazgos físicos benignos\"** (el paciente grita de dolor, pero el abdomen es blando y no hay irritación peritoneal temprana). El lactato elevado es un marcador ominoso de isquemia intestinal. Las guías quirúrgicas y gastroenterológicas establecen que el estudio de elección primario que cambió la supervivencia de esta patología es la Angiografía por TC (Angio-TAC) bifásica. Es rápida, no invasiva y posee una sensibilidad/especificidad superior al 95% para visualizar el trombo/émbolo ocluyendo la arteria, permitiendo la programación de la embolectomía quirúrgica o endovascular inmediata.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, esta es la viñeta por excelencia para evaluar tu intuición clínica ante los silencios semiológicos. El abdomen de este abuelo no duele a la palpación porque el peritoneo parietal (el que se irrita y da rebote) aún no se ha enterado de lo que pasa. El dolor es visceral puro por asfixia isquémica de las asas intestinales, las cuales están muriendo sin oxígeno por dentro. Si pides una TAC simple (Opción A), no verás las arterias tapadas, y para cuando veas neumoperitoneo (gas libre) significará que el intestino ya se perforó y el paciente probablemente morirá. La Ecografía Doppler (Opción C) falla estrepitosamente en urgencias porque estos pacientes suelen tener muchísimo gas intestinal por el íleo adinámico secundario, lo que impide que las ondas de ultrasonido vean los vasos mesentéricos profundos.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente anciano o con factores de riesgo cardiovascular (Especialmente Fibrilación Auricular).",
      "• Dolor abdominal súbito y desgarrador, pero el examen físico abdominal es CASI NORMAL (\"Dolor desproporcionado\").",
      "• Lactato sérico elevado.",
      "Debes pensar en:",
      "Isquemia Mesentérica Aguda. El estudio diagnóstico inmediato es la Angio-TC de abdomen.",
      "Tema: Urgencias Gastroenterológicas / Isquemia Mesentérica."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-05",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - CARDIOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 64 años, ingresa al servicio de urgencias por dolor torácico de características pleuríticas, que se exacerba al acostarse (decúbito supino) y al toser, mejorando cuando se inclina hacia adelante. Como antecedente, el paciente sufrió un Infarto Agudo de Miocardio con elevación del ST (IAMCEST) de pared anterior extensa hace exactamente **3 semanas**, el cual fue manejado con angioplastia primaria y un stent liberador de fármacos en la arteria descendente anterior. Al examen físico actual: febrícula de 37.8°C, se ausculta un frote pericárdico rasposo intermitente en el borde esternal izquierdo. El ECG muestra una elevación difusa del segmento ST con concavidad superior y depresión del segmento PR en múltiples derivaciones (excepto aVR). Los biomarcadores de troponina están negativos (planos). ¿Cuál es el régimen antiinflamatorio de PRIMERA LÍNEA MÁS seguro y adecuado para el síndrome clínico actual?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Ibuprofeno a altas dosis combinado con Colchicina oral durante 3 meses.",
        "distractorProfile": "standard_pericarditis_therapy_applied_erroneously",
        "incorrectFeedback": "Los AINEs tradicionales (no aspirina) como el ibuprofeno, indometacina o naproxeno están formalmente contraindicados en las primeras semanas post-IAM, ya que interfieren bioquímicamente con la formación de la cicatriz de colágeno, disparando el riesgo de ruptura cardíaca."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Ácido Acetilsalicílico (AAS) a altas dosis (ej. 650-1000 mg c/8h) asociado a Colchicina oral."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Prednisona oral a dosis medias de manera aislada para evitar interacciones antiplaquetarias.",
        "distractorProfile": "detrimental_immunosuppression_in_scar_tissue",
        "incorrectFeedback": "Al igual que los AINEs, los glucocorticoides inhiben masivamente la cicatrización miocárdica; su uso en el Síndrome de Dressler se reserva como último recurso si hay refractariedad absoluta a la Aspirina + Colchicina, y a menudo provocan \"pericarditis de rebote\" inmanejables al destetarlos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Reiniciar la anticoagulación plena con Heparina de Bajo Peso Molecular por sospecha de trombosis recurrente.",
        "distractorProfile": "wrong_pathology_and_hemorrhage_risk",
        "incorrectFeedback": "El cuadro es netamente inflamatorio pericárdico (no isquémico ni trombótico nuevo). Usar anticoagulación plena en medio de una pericarditis post-infarto aguda incrementa el riesgo de generar un sangrado intrapericárdico (hemopericardio) y taponamiento cardíaco fatal."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente cursa con un Síndrome de Dressler (Pericarditis Post-infarto Tardía). Esta es una pericarditis de naturaleza **autoinmune**, que se presenta característicamente semanas o meses después de un daño miocárdico extenso (como el IAM anterior de este paciente), desencadenada por la exposición de antígenos miocárdicos al sistema inmune. Presenta la clínica clásica de una pericarditis (dolor pleurítico que mejora al sentarse, frote, supra-ST difuso cóncavo). La trampa del Dressler radica en la farmacología: aunque la mayoría de las pericarditis virales idiopáticas se tratan de primera línea con cualquier AINE (Ibuprofeno/Indometacina), en los pacientes **post-infarto reciente**, los AINEs no-Aspirina están CONTRAINDICADOS, ya que interfieren con la cicatrización miocárdica (cicatrización del tejido infartado) e incrementan drásticamente el riesgo de adelgazamiento y ruptura de la pared libre del ventrículo. La droga de elección segura es el Ácido Acetilsalicílico (AAS o Aspirina) a dosis altas antiinflamatorias, invariablemente asociado a Colchicina para acelerar la remisión y evitar recidivas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un error de prescripción clásico en cardiología. El Ibuprofeno y la Indometacina (Opción A) son fabulosos para una pericarditis de un joven sano. Pero si le das Ibuprofeno a un corazón que apenas hace 3 semanas se infartó y está tratando de depositar colágeno para hacer una cicatriz firme, el AINE inhibirá a los fibroblastos. Esa zona infartada se volverá delgada como el papel y, un buen día, se romperá con un latido (Ruptura de pared libre), matando al paciente por taponamiento en segundos. La Aspirina a altas dosis es el único antiinflamatorio que ha demostrado no alterar negativamente la arquitectura de la cicatriz isquémica. Los Corticoides (Opción C) se evitan también porque retrasan la cicatrización y favorecen recaídas horribles al suspenderlos.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente con dolor pericárdico, fiebre y frote, de 2 a 8 semanas DESPUÉS de un Infarto de Miocardio.",
      "• ECG con supra-ST difuso, cóncavo, sin elevación de troponinas agudas.",
      "Debes pensar en:",
      "Síndrome de Dressler. El único AINE permitido y de primera línea post-infarto es la Aspirina (AAS) a altas dosis, acompañada de Colchicina.",
      "Tema: Complicaciones Tardías del Infarto / Síndrome de Dressler."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-06",
    "university": "UCC",
    "examArea": "PEDIATRÍA - UROLOGÍA / URGENCIAS",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Adolescente masculino de 14 años es llevado a urgencias por sus padres a las 3 de la madrugada. El paciente reporta haberse despertado abruptamente por un dolor escrotal izquierdo de inicio súbito, de intensidad 10/10, irradiado hacia la región inguinal y asociado a un episodio de vómito. Al examen físico: el hemiescroto izquierdo se encuentra eritematoso y discretamente edematizado; a la palpación, el testículo izquierdo está extremadamente doloroso, se observa en una posición más elevada (ascendido) respecto al derecho, y su eje longitudinal yace horizontalizado (Signo de Gouverneur). La estimulación de la cara interna del muslo no produce elevación del testículo homolateral (Reflejo cremastérico abolido). Ante el diagnóstico clínico presuntivo, ¿cuál es el siguiente paso MÁS indicado en el algoritmo de manejo de esta emergencia?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Solicitar una ecografía testicular Doppler color de urgencia y posponer conductas hasta evidenciar ausencia de flujo arterial.",
        "distractorProfile": "lethal_diagnostic_delay",
        "incorrectFeedback": "La ecografía Doppler es una herramienta complementaria, no mandatoria ante un cuadro clínico clásico; esperar por el radiólogo consume la estrecha ventana de isquemia reversible (4 a 6 horas), resultando invariablemente en la orquiectomía por necrosis."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar manejo empírico con Ceftriaxona intramuscular y Azitromicina oral por sospecha de Epididimitis aguda y evaluar en 48 horas.",
        "distractorProfile": "wrong_etiology_and_negligence",
        "incorrectFeedback": "La epididimitis infecciosa de transmisión sexual tiene una instauración gradual (días), se asocia a síntomas irritativos urinarios y raramente eleva el testículo ni suprime el reflejo cremastérico; tratar con antibióticos una torsión condena el órgano a la necrosis."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Solicitar interconsulta inmediata a Cirugía Pediátrica o Urología para exploración quirúrgica y destorsión testicular directa de urgencia."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Realizar un examen general de orina y cultivo, administrando analgésicos intravenosos potentes mientras se reciben resultados.",
        "distractorProfile": "passive_and_harmful_delay",
        "incorrectFeedback": "Los laboratorios no cambian la conducta quirúrgica urgente frente al síndrome de escroto agudo isquémico, y \"esconder\" el cuadro tras opiáceos sin contactar al cirujano viola el principio del control del daño local inmediato."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente presenta la clínica patognomónica de una Torsión Testicular, una urgencia urológica absoluta tiempo-dependiente. La tríada clínica determinante es: inicio súbito del dolor en reposo (a menudo nocturno), el ascenso y horizontalización del testículo (debido al acortamiento y giro del cordón espermático), y la **abolición del reflejo cremastérico** (considerado el signo clínico de mayor sensibilidad y especificidad en este contexto). La ventana de viabilidad para salvar el tejido testicular isquémico es de escasas 4 a 6 horas desde el inicio del dolor. Las directrices urológicas establecen que si la sospecha clínica es alta y la ventana de tiempo es estrecha, la intervención OBLIGATORIA es la exploración quirúrgica inmediata. Realizar estudios de imagen (Ecografía Doppler) está indicado ÚNICAMENTE si hay duda razonable (presentación atípica o subaguda), pero **NUNCA debe retrasar** la cirugía en un cuadro florido, ya que la isquemia es tiempo-dependiente y el ultrasonido puede arrojar falsos negativos (hasta un 10-15% muestran flujo residual falso).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, perder un testículo por burocracia radiológica es inaceptable. El distractor número uno mundial de los exámenes de residencia y de la guardia de urgencias es pedir la \"Eco Doppler\" (Opción A) en un paciente que llegó gritando a las 3 AM con el testículo en el techo y sin reflejo cremastérico. Si el radiólogo está dormido o no llega rápido, esas 2 horas de retraso cruzan el límite isquémico y el cirujano abrirá la bolsa escrotal solo para encontrar un testículo negro y necrótico. Y ojo con confundirlo con Epididimitis (Opción B): la epididimitis duele de forma gradual, el testículo cuelga normal, hay fiebre o disuria, y el reflejo cremastérico suele estar intacto.",
    "keyPoints": [
      "Cuando veas:",
      "• Pre-adolescente / Adolescente con dolor testicular unilateral de inicio explosivo/súbito y náuseas.",
      "• Testículo alto, horizontal y reflejo cremastérico AUSENTE.",
      "Debes pensar en:",
      "Torsión Testicular. El manejo es la cirugía de urgencia (destorsión y orquidopexia bilateral). NO retrasar la cirugía por pedir una Ecografía Doppler si el diagnóstico clínico es evidente.",
      "Tema: Urgencias Urológicas / Torsión Testicular."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-07",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - TOXICOLOGÍA / NEFROLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Mujer de 42 años, con antecedente de Trastorno Afectivo Bipolar (TAB) mal controlado. Acude a urgencias traída por sus familiares, quienes la notan inestable al caminar, con lenguaje \"enredado\" y con \"temblores gruesos\" en las manos que empezaron hace 2 días y se agravaron hoy hasta postrarla en la cama. Sus medicamentos incluyen Carbonato de Litio, Ibuprofeno (por mialgias recientes) y Lisinopril. Al examen físico: alerta pero severamente desorientada, disartria franca, temblor de acción de gran amplitud, ataxia cerebelosa severa e hiperreflexia generalizada. Paraclínicos: Creatinina sérica 2.1 mg/dL (basal de 0.9 mg/dL). Litemia (niveles séricos de litio) reportada en **3.8 mEq/L** (Rango terapéutico: 0.6 - 1.2 mEq/L). Se inicia hidratación intravenosa inmediata con Solución Salina Normal. ¿Cuál es la terapia de depuración toxicológica ESPECÍFICA Y OBLIGATORIA para evitar el daño neurológico permanente (Síndrome SILENT)?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Hemodiálisis intermitente de urgencia inmediata."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Lavado gástrico con Carbón Activado a dosis múltiples por sonda nasogástrica.",
        "distractorProfile": "wrong_toxicological_adsorbent",
        "incorrectFeedback": "El litio es un ion monovalente pequeño (similar al sodio) que carece por completo de afinidad física o química por el carbón activado, resultando en un procedimiento ineficaz y con riesgo inaceptable de aspiración en una paciente con disartria/ataxia."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Forzar diuresis con infusión de Furosemida a altas dosis asociada a alcalinización urinaria.",
        "distractorProfile": "ineffective_and_detrimental_renal_clearance",
        "incorrectFeedback": "La furosemida deprime el volumen intravascular, promoviendo paradójicamente que el túbulo proximal reabsorba avidamente sodio (y consigo litio), agravando severamente la intoxicación. La alcalinización urinaria es el tratamiento de la aspirina (salicilatos), no del litio."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hemoperfusión o recambio plasmático terapéutico (Plasmaféresis).",
        "distractorProfile": "wrong_extracorporeal_technique_for_the_molecule",
        "incorrectFeedback": "El litio NO se une a las proteínas plasmáticas (tiene 0% de unión proteica), circula totalmente libre. Por lo tanto, la plasmaféresis o hemoperfusión (útiles para tóxicos grandes o unidos a proteínas) no lo capturarán."
      }
    ],
    "correctOptionId": "A",
    "explanation": "La paciente cursa con una **Intoxicación Severa por Litio**. La toxicidad por litio es de predominio neurotóxico irreversible (disartria, ataxia severa, temblor grueso, convulsiones). Esta sobredosis fue clásicamente precipitada por el uso concomitante de AINEs (Ibuprofeno) o IECAs (Lisinopril), los cuales reducen drásticamente el filtrado glomerular y la excreción de litio, causando su acumulación hasta niveles tóxicos y generando falla renal (creatinina de 2.1). Las guías de la EXTRIP (Extracorporeal Treatments in Poisoning) establecen indicaciones absolutas y precisas para realizar **Hemodiálisis inmediata** en litio: 1) Niveles de litio > 4.0 mEq/L independientemente de la clínica. 2) Niveles de litio > 2.5 mEq/L si hay Falla Renal o alteración del estado neurológico grave (como nuestra paciente que tiene ataxia y confusión). 3) Deterioro clínico progresivo a pesar de líquidos IV. El litio es una molécula muy pequeña, iónica y no se une a proteínas en sangre, lo que la hace excepcionalmente dializable.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un error trágico de toxicología, Elizabeth, es intentar usar Carbón Activado (Opción B) en esta paciente. Recuerda la regla inquebrantable de urgencias: el carbón activado NO adsorbe metales ni iones elementales (Li, Fe, Pb, K). El litio (Li+) es un ión tan pequeño que atraviesa el carbón como agua. Tampoco se puede usar la diuresis forzada (Opción C) porque obligar al riñón a botar orina cuando ya está fallando no acelera el aclaramiento del litio de forma significativa y empeora la deshidratación. El litio se saca de la sangre con la máquina del nefrólogo (Hemodiálisis).",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente psiquiátrico tomando Litio (con deshidratación, AINEs o IECAs recientes).",
      "• Clínica neurotóxica grave: ataxia, disartria, temblor grueso (no fino, el fino es efecto secundario normal).",
      "• Litemia > 2.5 mEq/L + Falla Renal, o Litemia > 4.0 mEq/L.",
      "Debes pensar en:",
      "Indicación absoluta de Hemodiálisis de urgencia. Los fluidos (SSN) se inician siempre, pero no reemplazan la diálisis si el paciente tiene toxicidad del SNC (riesgo del Síndrome Neurológico Irreversible Inducido por Litio - SILENT).",
      "Tema: Toxicología / Intoxicación por Litio."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-08",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - ENDOCRINOLOGÍA / GASTROENTEROLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 42 años con antecedente de obesidad grado I y dislipidemia, consulta a urgencias por un dolor epigástrico en banda, irradiado a la espalda, acompañado de vómitos severos. Al examen físico: febrícula de 37.6°C, xantomas eruptivos diseminados en glúteos y superficies extensoras. Laboratorios iniciales: Amilasa sérica normal (95 U/L), pero Lipasa elevada en 1.500 U/L. Perfil lipídico de urgencia asombrosamente anormal: **Triglicéridos de 4.850 mg/dL** (valor normal < 150 mg/dL). Con diagnóstico de Pancreatitis Aguda inducida por Hipertrigliceridemia severa, el paciente se encuentra en ayuno estricto y reanimación agresiva con cristaloides. Ante la ausencia de disponibilidad inmediata de recambio plasmático (plasmaféresis), ¿cuál es el tratamiento farmacológico intravenoso DE RESCATE con evidencia sólida para depurar rápidamente los triglicéridos séricos en el escenario agudo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Infusión endovenosa continua de Insulina Regular asociada a Dextrosa al 5%."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar Fibratos (Gemfibrozilo o Fenofibrato) en dosis de carga altas por sonda nasogástrica.",
        "distractorProfile": "chronic_therapy_applied_to_acute_crisis",
        "incorrectFeedback": "Los fibratos son el pilar del manejo crónico ambulatorio de la hipertrigliceridemia, pero su inicio de acción es de varios días o semanas y su absorción es nula o errática durante la fase de íleo y ayuno de la pancreatitis aguda."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Infusión de heparina no fraccionada continua para movilizar y activar la lipoproteína lipasa periférica a nivel endotelial sistémico.",
        "distractorProfile": "paradoxical_lipid_rebound_therapy",
        "incorrectFeedback": "La heparina libera temporalmente LPL al torrente, pero esto causa un agotamiento rápido de las reservas de la enzima en el endotelio; posteriormente la degradación de triglicéridos colapsa, resultando en un rebote masivo y empeoramiento de la toxicidad pancreática."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar estatinas de alta intensidad (Atorvastatina 80 mg) disueltas e inyectadas por sonda, asociado a Niacina.",
        "distractorProfile": "wrong_lipid_fraction_target",
        "incorrectFeedback": "Las estatinas son inhibidores de la HMG-CoA reductasa, excelentes para reducir el colesterol LDL y prevenir infartos, pero su impacto sobre la reducción extrema de triglicéridos es clínicamente irrelevante en el contexto agudo."
      }
    ],
    "correctOptionId": "A",
    "explanation": "El paciente cursa con una Pancreatitis Aguda secundaria a Hipertrigliceridemia Masiva (habitualmente ocurre con TG > 1,000 mg/dL). Fisiopatológicamente, el páncreas es agredido por los ácidos grasos libres que se liberan masivamente de los quilomicrones y VLDL. La lipasa pancreática los digiere generando un ambiente lipotóxico letal para el tejido pancreático. Una de las trampas paraclínicas clásicas es que en esta entidad, la amilasa sérica puede salir falsamente NORMAL debido a la interferencia del suero lipémico en el laboratorio, pero la Lipasa sí se eleva. Para reducir rápidamente los triglicéridos a metas seguras (< 500 mg/dL), el gold standard es la plasmaféresis. Si no está disponible, el tratamiento médico de rescate validado es la **Infusión de Insulina Regular IV**. La insulina actúa estimulando potentemente la actividad de la enzima **Lipoproteína Lipasa (LPL)** periférica, lo que acelera la degradación química de los triglicéridos en los quilomicrones circulantes, depurando el plasma en cuestión de 48-72 horas. Se asocia con dextrosa IV para evitar la hipoglucemia si el paciente no es marcadamente hiperglucémico de base.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Para salvar a este páncreas de la autodigestión grasa no sirven las pastillas. Las estatinas bajan el colesterol, no los triglicéridos; los fibratos orales (Opción B) tardan semanas en lograr impacto y darlos por sonda a un paciente con íleo y vómitos no tiene sentido. El verdadero debate tóxico recae sobre la Heparina (Opción C): clásicamente se decía que la heparina liberaba la LPL de los vasos al torrente, ¡y es cierto! Pero luego esa LPL se agota y los triglicéridos sufren un rebote peor; hoy en día la heparina está proscrita como tratamiento principal para bajar lípidos. Infunde insulina regular y verás cómo esa sangre que parecía leche al ingresarle se vuelve roja y cristalina en un par de días.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente con Pancreatitis Aguda severa + Xantomas cutáneos.",
      "• Triglicéridos > 1,000 mg/dL (a menudo > 4,000).",
      "• (Dato fino: la Amilasa puede salir falsamente normal por el plasma graso o \"lechoso\").",
      "Debes pensar en:",
      "Pancreatitis por Hipertrigliceridemia. Tratamiento agudo de depuración: Plasmaféresis o Infusión de Insulina IV. Los fibratos se dan como prevención a largo plazo, no salvan de la crisis aguda.",
      "Tema: Urgencias Metabólicas / Pancreatitis Aguda."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-09",
    "university": "UCC",
    "examArea": "PEDIATRÍA - NEUMOLOGÍA / URGENCIAS",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Niña de 4 años es llevada a urgencias en época de otoño. La madre relata que la niña inició con rinorrea clara y una leve tos \"perruna\" o disfónica hace 3 días. Esta mañana, el cuadro clínico sufrió un deterioro brusco y fulminante: fiebre de 39.8°C, aspecto intensamente tóxico, letargia profunda y dificultad respiratoria severa. Al examen físico: estridor inspiratorio y espiratorio audibles a distancia, tirajes universales y SatO2 85% con soporte. No hay babeo (sialorrea) ni adopta postura en trípode. Se le administran nebulizaciones repetidas de Adrenalina racémica y Dexametasona sistémica sin observar ABSOLUTAMENTE NINGUNA mejoría del estridor ni del trabajo respiratorio. En la laringoscopia directa durante la preparación de la vía aérea en urgencias se evidencia abundante secreción purulenta espesa, costras fibrinopurulentas densas que taponan la luz subglótica y mucosa inflamada, pero la epiglotis luce de aspecto normal. ¿Cuál es el diagnóstico clínico definitivo MÁS certero para este cuadro?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Síndrome de Crupe laringotraqueobronquitis clásico exacerbado, refractario por subdosificación esteroidea.",
        "distractorProfile": "viral_syndrome_overestimation",
        "incorrectFeedback": "El Crupe viral clásico responde al menos temporalmente a la adrenalina nebulizada, la cual encoge rápidamente el edema mucoso; la falla absoluta a esta respuesta, combinada con toxicidad severa purulenta, excluye un proceso puramente inflamatorio viral no complicado."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Epiglotitis aguda complicada con extensión infraglótica por *Haemophilus influenzae*.",
        "distractorProfile": "epiglottitis_symptom_mismatch",
        "incorrectFeedback": "La epiglotitis se caracteriza clásicamente por inflamación e hinchazón selectiva supra-glótica de la epiglotis (color rojo cereza) con dolor al deglutir que genera babeo intenso (sialorrea) e incapacidad de vocalizar (voz de \"papa caliente\"); además, la laringoscopia aquí reportó una epiglotis normal."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Traqueítis Bacteriana Aguda (Crupe Pseudomembranoso bacteriano)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Aspiración de cuerpo extraño orgánico no detectado asociado a infección sobreagregada.",
        "distractorProfile": "mechanical_obstruction_overlap",
        "incorrectFeedback": "Aunque un cuerpo extraño da estridor y puede sobreinfectarse crónicamente, carece del pródromo viral coriciforme característico y raramente produce exudados y membranas purulentas difusas (pseudomembranas) en toda la luz traqueal de instauración en horas."
      }
    ],
    "correctOptionId": "C",
    "explanation": "La paciente cursa con una **Traqueítis Bacteriana** (típicamente causada por *Staphylococcus aureus*, *Streptococcus pneumoniae* o *Moraxella catarrhalis*). Clínicamente, es una de las emergencias de vía aérea pediátrica más engañosas, ya que a menudo se presenta como un pródromo idéntico al Crupe viral leve (Laringotraqueobronquitis, por parainfluenza) que repent clip mente sufre una sobreinfección bacteriana masiva, tornando al niño altamente tóxico y febril (\"un crupe que se volvió tóxico de la noche a la mañana\"). La clave patognomónica que la separa del Crupe común es la **ausencia de respuesta a la Adrenalina racémica** (debido a que la obstrucción no es por edema de las cuerdas, sino por secreciones purulentas espesas intratraqueales mecánicas que se pegan como cemento). La clave que la separa de la Epiglotitis es la **ausencia de sialorrea (babeo) o postura en trípode**, y laringoscópicamente la epiglotis es delgada y normal, mientras el pus grueso fluye de la zona subglótica. El manejo exige intubación orotraqueal frecuente con lavados purulentos, broncoscopia rígida y antibióticos intravenosos agresivos (Ceftriaxona + Clindamicina o Vancomicina).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** La traqueítis bacteriana es la principal causa letal del mal uso de algoritmos. Si llega un niño con tos de foca (crupe) y le pones epinefrina, y a los 30 minutos sigue asfixiándose, el interno se asusta y le pone otra nebulización. Si no responde, tu chip mental debe saltar la alarma: no es edema viral. Son cáscaras de moco y pus estafilocócicas ahogando al niño desde adentro. La adrenalina constriñe vasos, no disuelve pus. Aquí tienes que preparar el tubo endotraqueal para empujar la costra y sacar el pus con presión, mientras la vancomicina ataca a la bacteria.",
    "keyPoints": [
      "Cuando veas:",
      "• Niño preescolar con \"Crupe\" (tos perruna) que súbitamente se vuelve MUY tóxico y febril (>39°C).",
      "• Estridor severo que NO MEJORA ni un milímetro con la Adrenalina nebulizada.",
      "• Ausencia de babeo (no es epiglotitis).",
      "Debes pensar en:",
      "Traqueítis Bacteriana (Crupe membranoso). Obstrucción mecánica por placas de pus bajo las cuerdas vocales. Requiere Intubación/Endoscopia para aspiración directa y Antibióticos IV.",
      "Tema: Urgencias Respiratorias / Obstrucción de Vía Aérea Pediátrica."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-10",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - HEMATOLOGÍA / NEUROLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 68 años con antecedente de astenia y dolor lumbar sordo de meses de evolución, consulta por disminución progresiva de la agudeza visual, letargia y episodios de epistaxis franca bilateral que no ceden a maniobras compresivas. Al examen físico: pálido, estuporoso, sin visceromegalias. El oftalmólogo evalúa el fondo de ojo evidenciando venas retinianas gruesas, tortuosas, con aspecto \"en salchicha\", y múltiples hemorragias retinianas. Los laboratorios reportan: Hemoglobina 8.1 g/dL, Creatinina 1.1 mg/dL, Calcio normal. Se detecta un pico monoclonal voluminoso de proteínas en el suero. La inmunofijación sérica confirma que se trata predominantemente de una **inmunoglobulina de isotipo IgM** circulante a alta concentración (pico de 4 g/dL). ¿Cuál es la terapia de rescate INMEDIATA MÁS indicada para evitar la trombosis microvascular y el coma inminente antes de iniciar quimioterapia?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Realizar sesiones de Plasmaféresis Terapéutica (recambio plasmático) de urgencia."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar factor VIII y factor von Willebrand recombinantes para frenar la epistaxis activa.",
        "distractorProfile": "wrong_bleeding_mechanism_therapy",
        "incorrectFeedback": "El sangrado en la Macroglobulinemia de Waldenström se debe a que la IgM recubre las plaquetas e impide su función, no a una deficiencia primaria de factores de coagulación. Añadir factores no resuelve el problema y no mejora el riesgo neurológico."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Transfundir 2 unidades de Glóbulos Rojos Empaquetados (GRE) rápidamente para revertir la anemia sintomática y la isquemia retiniana.",
        "distractorProfile": "lethal_viscosity_exacerbation",
        "incorrectFeedback": "En un Síndrome de Hiperviscosidad florido, transfundir eritrocitos aumenta dramáticamente el hematocrito y la viscosidad sanguínea total, pudiendo precipitar un accidente cerebrovascular isquémico agudo masivo o infarto miocárdico."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar terapia dirigida con inhibidores de proteasoma (Bortezomib) para destruir el clon de células plasmáticas.",
        "distractorProfile": "definitive_therapy_applied_as_acute_rescue",
        "incorrectFeedback": "El Bortezomib es parte de los regímenes quimioterapéuticos definitivos para el clon subyacente, pero su inicio de acción es demasiado lento (semanas) para rescatar al paciente del coma inminente mediado por hiperviscosidad aguda."
      }
    ],
    "correctOptionId": "A",
    "explanation": "El paciente cursa con **Macroglobulinemia de Waldenström** (un linfoma linfoplasmocítico) complicada con el temido **Síndrome de Hiperviscosidad Sanguínea**. A diferencia de otros mielomas/linfomas, en la enfermedad de Waldenström el clon tumoral produce cantidades masivas de **IgM monoclonal** (la inmunoglobulina humana más grande y pesada, al ser un pentámero masivo). Esta acumulación de IgM vuelve la sangre literalmente espesa como miel. La clínica es patognomónica: sangrado mucoso (la IgM interfiere con las plaquetas y coagulación, de ahí la epistaxis), letargia o coma por estasis del flujo cerebral, y visión borrosa por retinopatía de hiperviscosidad (venas de la retina dilatadas en forma de \"salchicha\"). El tratamiento agudo y mandatorio es la **Plasmaféresis terapéutica urgente**; la máquina extrae la sangre, centrifuga o filtra los millones de pentámeros de IgM pesados, disminuye la viscosidad y revierte el cuadro visual y neurológico de forma espectacular.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, aquí te enfrentas a una urgencia que no se resuelve con los métodos habituales. Si ves a un paciente con sangrado y piensas en reponer factores de coagulación, o ves anemia y quieres transfundir, en este caso particular estarías cometiendo un error fatal. La sangre ya es demasiado \"espesa\" por la inmensa cantidad de IgM (macroglobulinas). Transfundir glóbulos rojos (Opción C) añadiría más viscosidad al sistema y precipitaría un coma irreversible o infartos múltiples. La quimioterapia (Opción D) es el tratamiento definitivo para la enfermedad, pero tarda días o semanas en hacer efecto y no soluciona la urgencia inminente de la hiperviscosidad. Lo único que salva la vida en ese momento es conectar al paciente a una máquina para extraer esa sangre y filtrar mecánicamente los anticuerpos gigantes: la plasmaféresis.",
    "keyPoints": [
      "Cuando veas:",
      "• Anciano con anemia, epistaxis y alteración neurológica/visual (letargia, venas retinianas en \"salchicha\").",
      "• Gammapatía monoclonal con un pico EXCLUSIVO de isotipo IgM.",
      "• Sangre \"espesa\" = Síndrome de Hiperviscosidad.",
      "Debes pensar en:",
      "Macroglobulinemia de Waldenström. El tratamiento de urgencia no es quimioterapia ni transfusión; es \"limpiar la sangre\" mecánicamente mediante plasmaféresis.",
      "Tema: Hematología / Macroglobulinemia de Waldenström y Síndrome de Hiperviscosidad."
    ]
  }
];
