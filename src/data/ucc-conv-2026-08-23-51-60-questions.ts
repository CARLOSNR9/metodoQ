import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · Preguntas #51–#60.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_08_23_51_60_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-08-23-51",
    university: "UCC",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA / GASTROENTEROLOGÍA",
    topic: "Infectología Tropical",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","infectolog-a-tropical","infectolog","a","tropical"],
    statement: "Un hombre de 45 años, ganadero y criador de ovejas, acude a urgencias por presentar fiebre intermitente, dolor en hipocondrio derecho y sensación de saciedad precoz. Al examen físico se palpa una hepatomegalia firme y dolorosa. La ecografía abdominal reporta una gran lesión quística en el lóbulo derecho del hígado de 10 cm, con presencia de \"quistes hijos\" en su interior y calcificaciones en la pared (signo de la rueda de carro). El médico residente de urgencias, asumiendo que se trata de un absceso hepático amebiano o piógeno, propone realizar de inmediato una Aspiración Percutánea con aguja fina guiada por ecografía para drenar el líquido y cultivar. ¿Por qué esta conducta médica está ABSOLUTAMENTE PROSCRITA y podría precipitar la muerte instantánea del paciente en la sala de radiología?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Porque el drenaje diseminaría huevos de Ascaris lumbricoides a la vía biliar, causando colangitis supurativa refractaria.",
        incorrectFeedback: "Ascaris no forma quistes hepáticos con quistes hijos y calcificaciones. La lesión quística compleja con vesículas hijas en un paciente con contacto con perros y ovejas es un quiste hidatídico, cuya punción sin preparación puede causar anafilaxia.",
      },
      {
        id: "B",
        label: "B",
        text: "Porque se trata de un Quiste Hidatídico (Echinococcus granulosus); la punción puede derramar líquido hidatídico rico en antígenos al peritoneo, causando un Choque Anafiláctico letal inmediato.",
      },
      {
        id: "C",
        label: "C",
        text: "Porque se trata de un Cistoadenoma biliar; la punción rompería las tabicaciones malignas, causando siembra peritoneal de células de carcinoma.",
        incorrectFeedback: "El cistoadenoma biliar es raro y no explica el antecedente epidemiológico ni los quistes hijos. El riesgo letal inmediato de la punción en este caso es la anafilaxia por líquido hidatídico.",
      },
      {
        id: "D",
        label: "D",
        text: "Porque en el absceso amebiano (Entamoeba histolytica), la punción genera una fístula pleuropulmonar que ahoga el lóbulo inferior derecho.",
        incorrectFeedback: "En el absceso amebiano la aspiración percutánea no está proscrita (se usa en abscesos grandes o que no responden). La contraindicación de la punción a ciegas es para el quiste hidatídico.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Equinococosis Quística (Quiste Hidatídico), una zoonosis transmitida típicamente por el ciclo perro-oveja. El humano se infecta al ingerir huevos del parásito Echinococcus granulosus. La larva se asienta principalmente en el hígado, formando un quiste complejo con calcificaciones y quistes hijos. El líquido dentro de este quiste es altamente antigénico. La REGLA DE ORO PROHIBITIVA en infectología y cirugía dicta que jamás se debe puncionar a ciegas un quiste hepático si hay sospecha epidemiológica y ecográfica de hidatidosis. Si la aguja rompe la capa germinal y el líquido a alta presión se derrama en la cavidad abdominal, el paciente sufrirá un Choque Anafiláctico fulminante y, si sobrevive, una siembra peritoneal masiva (hidatidosis secundaria). El manejo requiere confirmación serológica, albendazol preoperatorio y cirugía controlada (o técnica PAIR bajo estricto control esterilizante con agentes escolicidas como solución salina hipertónica).",
    keyPoints: [
    "Paciente ganadero (contacto con perros/ovejas).; Quiste hepático complejo (con calcificaciones o \"quistes hijos\").",
    "Quiste Hidatídico. Peligro máximo: Ruptura o punción accidental = Choque Anafiláctico. No lo pinches en urgencias. Inicia Albendazol.",
    "Infectología Tropical / Zoonosis Parasitarias."
],
  },
  {
    id: "ucc-conv-2026-08-23-52",
    university: "UCC",
    examArea: "PEDIATRÍA - NEUROLOGÍA / GENÉTICA",
    topic: "Genética",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","gen-tica","gen","tica"],
    statement: "Una niña de 18 meses de edad es traída por sus padres a neurología pediátrica debido a una regresión alarmante en su desarrollo. Los padres afirman que la niña tuvo un desarrollo psicomotor completamente normal hasta los 12 meses (se sentaba, balbuceaba palabras e interactuaba). Sin embargo, en los últimos 6 meses ha dejado de hablar, ya no hace contacto visual (aislamiento autista) y perdió la capacidad de usar sus manos para jugar. Llamativamente, la niña presenta movimientos estereotipados y repetitivos e incesantes de las manos, frotándoselas como si se las estuviera \"lavando\" todo el tiempo. Su perímetro cefálico, que estaba en el percentil 50 al nacer, ahora se encuentra en el percentil 3 (microcefalia adquirida). ¿Cuál es el diagnóstico genético de esta encefalopatía progresiva que afecta casi exclusivamente a niñas?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome de Angelman (Deleción 15q11-13 materna).",
        incorrectFeedback: "El síndrome de Angelman se presenta con risa inmotivada, ataxia, convulsiones y ausencia de lenguaje, y afecta a ambos sexos, sin una regresión tras un desarrollo normal. Los movimientos de \"lavado de manos\" con microcefalia adquirida en una niña son típicos de Rett.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de X Frágil (Mutación FMR1).",
        incorrectFeedback: "El X frágil afecta más a varones, con macrocefalia, orejas grandes y macroorquidismo, sin regresión del desarrollo ni microcefalia adquirida.",
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome de Rett (Mutación del gen MECP2).",
      },
      {
        id: "D",
        label: "D",
        text: "Trastorno del Espectro Autista primario severo.",
        incorrectFeedback: "El autismo no produce microcefalia adquirida, pérdida del uso propositivo de las manos ni estereotipias de \"lavado de manos\" tras un desarrollo normal. Este patrón regresivo en una niña es el síndrome de Rett (MECP2).",
      },
    ],
    correctOptionId: "C",
    explanation: "La paciente cursa con el inconfundible Síndrome de Rett. Es un trastorno del neurodesarrollo ligado al cromosoma X dominante, causado por mutaciones en el gen MECP2. Al ser letal en varones (quienes no tienen una copia sana de rescate), afecta casi exclusivamente a niñas. La curva clínica de la enfermedad es el secreto para los exámenes: Desarrollo normal entre los 6 y 18 meses, seguido de una REGRESIÓN profunda (pérdida de las habilidades manuales y del lenguaje ya adquiridas). El signo físico patognomónico es el movimiento constante de \"lavado de manos\" (hand-wringing stereotypic movements). Además, desarrollan desaceleración del crecimiento craneal (microcefalia adquirida), convulsiones, apneas intermitentes e hiperventilación. No tiene cura y el manejo es sintomático y multidisciplinario.",
    keyPoints: [
    "NIÑA de 1 a 2 años.; Regresión del desarrollo (perdió lo que había aprendido).; Signo de oro: Estereotipias manuales (\"Lavado de manos\").",
    "Síndrome de Rett. Gen mutado: MECP2. No lo confundas con autismo clásico, el autismo primario no suele dar una regresión tan devastadora con pérdida motora de las manos ni desaceleración de la cabeza (microcefalia).",
    "Genética / Neurología Pediátrica."
],
  },
  {
    id: "ucc-conv-2026-08-23-53",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUMOLOGÍA",
    topic: "Neumopatías Raras",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","neumopat-as-raras","neumopat","as","raras"],
    statement: "Un hombre de 35 años, fumador activo, consulta a neumología por disnea de instauración insidiosa y tos seca de 4 meses de evolución. Niega fiebre, pérdida de peso, hemoptisis o exposición ocupacional a polvos tóxicos. Al examen físico no se auscultan crépitos ni sibilancias francas. La radiografía de tórax revela infiltrados alveolares bilaterales perihiliares difusos. Se realiza un Lavado Broncoalveolar (LBA) a través de fibrobroncoscopia. Para asombro del médico, el líquido recuperado del pulmón tiene un aspecto lechoso y turbio, francamente opaco. Al enviarlo a patología, el líquido resulta negativo para bacterias, hongos o malignidad, pero la tinción de ácido peryódico de Schiff (PAS) es fuertemente POSITIVA, revelando material lipoproteico proteináceo acelular masivo llenando los espacios alveolares. ¿Cuál es la fisiopatología inmunológica que causa el acúmulo de esta \"leche\" alveolar y cuál es la terapia curativa mecánica innegociable?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Acúmulo de quilo por ruptura del conducto torácico; requiere ligadura quirúrgica o embolización del conducto.",
        incorrectFeedback: "El quilotórax acumula quilo en el espacio PLEURAL, no material PAS positivo dentro de los alvéolos. El patrón descrito corresponde a proteinosis alveolar.",
      },
      {
        id: "B",
        label: "B",
        text: "Fallo del aclaramiento de los macrófagos alveolares mediado por autoanticuerpos contra el factor estimulante de colonias de macrófagos y granulocitos (anti-GM-CSF); requiere lavado pulmonar total bajo anestesia general.",
      },
      {
        id: "C",
        label: "C",
        text: "Infección indolente por Pneumocystis jirovecii; requiere inicio de Trimetoprima-Sulfametoxazol a dosis altas y corticoides.",
        incorrectFeedback: "Pneumocystis puede dar material espumoso alveolar, pero se ven quistes con tinción de plata y ocurre en inmunosuprimidos; aquí las tinciones para hongos son negativas. El material PAS positivo acelular es proteinosis alveolar.",
      },
      {
        id: "D",
        label: "D",
        text: "Secreción paraneoplásica de surfactante por un adenocarcinoma mucinoso oculto; requiere quimioterapia empírica y lobectomía.",
        incorrectFeedback: "El adenocarcinoma mucinoso no secreta surfactante masivo en todos los alvéolos y la citología para malignidad es negativa. La causa es la falla de los macrófagos por anticuerpos anti-GM-CSF.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Proteinosis Alveolar Pulmonar (PAP). Es una enfermedad respiratoria rarísima pero infaltable en los exámenes de subespecialidad. Normalmente, los macrófagos alveolares \"comen y limpian\" el surfactante viejo que se acumula en los alvéolos. Para que estos macrófagos funcionen, necesitan la señal de una hormona llamada GM-CSF. En la PAP idiopática/autoinmune (90% de los casos, muy asociada a tabaquismo), el paciente desarrolla autoanticuerpos que bloquean y destruyen el GM-CSF. Los macrófagos se paralizan y los alvéolos se llenan lentamente de surfactante viejo (lipoproteínas), ahogando al paciente. El sello absoluto de esta enfermedad es el Lavado Broncoalveolar que sale \"lechoso\" u opaco, y que al microscopio se tiñe de fucsia brillante con la tinción de PAS. El tratamiento es espectacular: se intuba al paciente con un tubo de doble luz bajo anestesia general y se realiza un Lavado Pulmonar Total, metiendo y sacando litros de solución salina tibia hasta \"lavar\" toda la proteína lechosa del pulmón, curando al paciente por años.",
    keyPoints: [
    "Paciente joven/adulto fumador con disnea seca crónica.; Líquido de lavado broncoalveolar LECHOSO (Milky effluent).; Tinción PAS positiva de material acelular.",
    "Proteinosis Alveolar Pulmonar. Fisiopatología: Anticuerpos anti-GM-CSF (el macrófago no limpia el surfactante). Tratamiento de oro: Lavado Pulmonar Total (WLL).",
    "Neumopatías Raras / Neumología."
],
  },
  {
    id: "ucc-conv-2026-08-23-54",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / ENDOCRINOLOGÍA",
    topic: "Efectos Adversos Farmacológicos",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","efectos-adversos-farmacol-gicos","efectos","adversos","farmacol","gicos"],
    statement: "Un paciente masculino de 65 años, con antecedente de Fibrilación Auricular permanente tratada desde hace 3 años con Amiodarona, acude por presentar pérdida de peso progresiva, temblor fino en las manos, palpitaciones (su FA se ha vuelto muy rápida y refractaria a los betabloqueadores) e irritabilidad. Al examen físico no hay bocio doloroso. Los laboratorios de función tiroidea reportan: TSH suprimida (<0.01 mUI/L) y T4 libre y T3 libre muy elevadas (Tirotoxicosis). Se realiza un ultrasonido Doppler tiroideo a color que muestra una vascularización marcadamente DISMINUIDA (ausencia de flujo o \"infierno tiroideo\"). Para evitar una crisis cardiovascular inminente inducida por la sobrecarga tiroidea y dada la fisiopatología destructiva de este subtipo específico de toxicidad, ¿cuál es el tratamiento farmacológico DE ELECCIÓN que apaga rápidamente esta entidad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender Amiodarona e iniciar altas dosis de Metimazol o Propiltiouracilo (PTU) de forma prolongada, ya que la glándula está sintetizando hormonas en exceso por la sobrecarga de Yodo.",
        incorrectFeedback: "Las tionamidas tratan la tirotoxicosis por amiodarona tipo 1 (síntesis aumentada, con vascularización AUMENTADA en el Doppler). Con flujo disminuido se trata del tipo 2 (tiroiditis destructiva), en el que no sirven porque la glándula no está fabricando hormona.",
      },
      {
        id: "B",
        label: "B",
        text: "Mantener la Amiodarona y administrar un ciclo moderado de Corticosteroides sistémicos (Glucocorticoides) por vía oral, ya que se trata de una tiroiditis destructiva inflamatoria.",
      },
      {
        id: "C",
        label: "C",
        text: "Suspender Amiodarona y administrar Yodo Radiactivo (I-131) de inmediato para ablacionar la glándula tiroides hiperactiva.",
        incorrectFeedback: "El yodo radiactivo no funciona: la sobrecarga de yodo de la amiodarona y la destrucción glandular impiden su captación. Además, no está indicado de forma aguda.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Carbonato de Litio y Lugol (Yodo inorgánico) para bloquear la liberación de hormonas preformadas mediante el efecto Wolff-Chaikoff.",
        incorrectFeedback: "El Lugol aporta más yodo y no tiene sentido en una tiroiditis por fármaco rico en yodo. El litio no es el tratamiento de elección. La tiroiditis destructiva (tipo 2) responde a los glucocorticoides.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Tirotoxicosis Inducida por Amiodarona (AIT), pero la clave absoluta es identificar cuál de los dos tipos padece, ya que sus tratamientos son diametralmente opuestos.\n\nAIT Tipo 1: El exceso de yodo de la pastilla le da \"gasolina\" a una glándula tiroides con un bocio preexistente y la hace FABRICAR hormonas sin control. El Doppler muestra vascularidad a tope (Infierno tiroideo). Se trata con Metimazol/PTU.\n\nAIT Tipo 2 (Nuestra paciente): Es una Tiroiditis Destructiva. La Amiodarona se vuelve tóxica, inflama y destruye físicamente las células tiroideas, haciendo que derramen a la sangre todas las hormonas que ya tenían almacenadas. El Doppler, como en la viñeta, muestra vascularización DISMINUIDA O AUSENTE (la glándula está muriendo, no fabricando). Al no estar fabricando hormonas nuevas, darle Metimazol (Opción A) es absolutamente inútil. El tratamiento OBLIGATORIO Y DE ORO para el Tipo 2 son los Corticosteroides (Glucocorticoides), que desinflaman la glándula y detienen la destrucción. (La Amiodarona a menudo se puede continuar si es vital para la arritmia cardíaca, ya que los esteroides apagarán la tiroiditis subyacente).",
    keyPoints: [
    "Paciente tomando Amiodarona que hace Hipertiroidismo (Tirotoxicosis).; Eco Doppler de cuello con flujo SANGUÍNEO DISMINUIDO.",
    "Tirotoxicosis inducida por Amiodarona Tipo 2 (Tiroiditis destructiva). Tratamiento: Glucocorticoides (Prednisona). (Prohibido dar antitiroideos).",
    "Efectos Adversos Farmacológicos / Endocrinología."
],
  },
  {
    id: "ucc-conv-2026-08-23-55",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEFROLOGÍA / INMUNOLOGÍA",
    topic: "Glomerulopatías",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","glomerulopat-as","glomerulopat","as"],
    statement: "Un hombre de 62 años, con historial de tabaquismo y una leve hipertensión controlada, es derivado a nefrología por la aparición súbita de un edema generalizado que abarca desde los tobillos hasta la región sacra y facial. Refiere orina muy espumosa, sin hematuria visible. Laboratorios: Albúmina sérica de 2.0 g/dL (severa hipoalbuminemia), Perfil lipídico con Colesterol Total de 380 mg/dL, Creatinina de 0.9 mg/dL. El urianálisis revela proteinuria > 500 mg/dL, con un sedimento inactivo (sin células ni cilindros hemáticos). La cuantificación en 24 horas muestra una proteinuria nefrótica masiva de 9 g/día. Ante la principal sospecha de una Glomerulopatía Membranosa, se envía un panel inmunológico serológico especializado. ¿Cuál es el autoanticuerpo sérico de descubrimiento reciente que, si resulta POSITIVO, confirmará que la enfermedad es primaria (idiopática) y evitará la necesidad de un extenso tamizaje invasivo en busca de tumores sólidos ocultos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Anticuerpos anti-membrana basal glomerular (Anti-MBG).",
        incorrectFeedback: "Los anticuerpos anti-MBG son propios de la enfermedad de Goodpasture (glomerulonefritis rápidamente progresiva), no de la nefropatía membranosa.",
      },
      {
        id: "B",
        label: "B",
        text: "Anticuerpos anti-receptor de Fosfolipasa A2 tipo M (anti-PLA2R).",
      },
      {
        id: "C",
        label: "C",
        text: "Anticuerpos Anticitoplasma de Neutrófilos (ANCA) tipo p-ANCA.",
        incorrectFeedback: "Los ANCA son marcadores de las vasculitis de pequeño vaso (glomerulonefritis pauciinmune), no de la nefropatía membranosa primaria.",
      },
      {
        id: "D",
        label: "D",
        text: "Anticuerpos Anti-Smith y anti-dsDNA fuertemente positivos.",
        incorrectFeedback: "Los anti-Smith y anti-dsDNA apoyan un lupus (nefritis lúpica clase V, membranosa SECUNDARIA). El anticuerpo que confirma la forma primaria es el anti-PLA2R.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Nefropatía Membranosa, la causa más común de Síndrome Nefrótico primario en adultos no diabéticos y no afrodescendientes. Esta patología deposita inmunocomplejos por debajo de los podocitos (subepiteliales), destruyendo la barrera de proteínas pero sin inflamar el glomérulo (por eso no hay falla renal aguda ni sangre en la orina). El problema histórico de la Nefropatía Membranosa era que hasta el 25% de las veces es Secundaria a un Cáncer oculto de órgano sólido (pulmón, colon, próstata). Antes, todo abuelo con esta enfermedad era sometido a colonoscopias y tomografías aterradoras buscando cáncer. El descubrimiento médico que revolucionó esta entidad fue hallar que el 70-80% de las Nefropatías Membranosas Primarias (que NO son por cáncer ni lupus) son causadas por un anticuerpo específico contra un receptor de los podocitos: el Anticuerpo anti-PLA2R (Receptor de Fosfolipasa A2). Si le sacas sangre al paciente y tiene anti-PLA2R positivo, puedes respirar aliviado: su riñón está enfermo por una autoinmunidad directa primaria, y la probabilidad de que tenga un cáncer sólido oculto detrás es casi nula.",
    keyPoints: [
    "Adulto mayor caucásico con Síndrome Nefrótico masivo (edema, albúmina baja, colesterol alto). Sedimento limpio.; Sospecha de Nefropatía Membranosa.",
    "Anticuerpo Anti-PLA2R. Es el marcador de oro de la Membranosa Primaria. Si es negativo, ¡toca buscar el Cáncer oculto, Lupus o Hepatitis B urgente!",
    "Glomerulopatías / Síndrome Nefrótico en adultos."
],
  },
  {
    id: "ucc-conv-2026-08-23-56",
    university: "UCC",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA / NEUROLOGÍA",
    topic: "Infecciones Oportunistas en VIH",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","infecciones-oportunistas-en-vih","infecciones","oportunistas","en","vih"],
    statement: "Un hombre de 42 años, diagnosticado con VIH de larga data con pobre adherencia a la Terapia Antirretroviral (TARV), acude a consulta acompañado de su esposa. Ella refiere que en los últimos dos meses ha notado un cambio sutil en la personalidad del paciente (apatía, fallos de memoria leve). Sin embargo, lo más preocupante ha ocurrido en las últimas 3 semanas: el paciente desarrolló una hemiparesia espástica progresiva del lado derecho y un déficit del campo visual asimétrico (hemianopsia homónima), sin fiebre ni convulsiones. Al examen neurológico: alerta, alerta cognitiva en declive, fuerza 2/5 en hemicuerpo derecho con hiperreflexia. Los CD4 actuales están en 40 células/mm³. Una Resonancia Magnética Cerebral con gadolinio revela múltiples lesiones hiperintensas en secuencias T2 en la sustancia blanca subcortical asimétrica parietal y occipital izquierda. Las lesiones NO presentan efecto de masa, NO causan desplazamiento de línea media y, crucialmente, NO TIENEN NINGÚN REALCE (captación) TRAS INYECTAR EL CONTRASTE. ¿Cuál es el diagnóstico viral oportunista definitivo que explica esta desmielinización fatal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Toxoplasmosis cerebral por Toxoplasma gondii; el parásito invade la sustancia gris formando abscesos.",
        incorrectFeedback: "La toxoplasmosis produce lesiones con realce en anillo y efecto de masa en los ganglios basales. Las lesiones de sustancia blanca sin efecto de masa ni realce son típicas de leucoencefalopatía multifocal progresiva.",
      },
      {
        id: "B",
        label: "B",
        text: "Linfoma Primario del Sistema Nervioso Central asociado al Virus de Epstein-Barr (VEB).",
        incorrectFeedback: "El linfoma primario del SNC es una lesión que capta contraste (suele ser única y periventricular) y tiene efecto de masa. No coincide con lesiones sin realce ni efecto de masa.",
      },
      {
        id: "C",
        label: "C",
        text: "Leucoencefalopatía Multifocal Progresiva (LMP) causada por la reactivación del Virus JC.",
      },
      {
        id: "D",
        label: "D",
        text: "Complejo de Demencia asociado a VIH (Encefalopatía por VIH) con atrofia difusa.",
        incorrectFeedback: "La encefalopatía por VIH produce atrofia y cambios simétricos difusos de la sustancia blanca, con demencia subcortical lenta, no lesiones multifocales asimétricas con déficits focales. Esto es leucoencefalopatía multifocal progresiva.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con Leucoencefalopatía Multifocal Progresiva (LMP), una neuroinfección oportunista devastadora que ataca a pacientes con profunda inmunosupresión celular (VIH con CD4 < 50, o pacientes usando inmunosupresores biológicos como Natalizumab). Es causada por la reactivación del Poliomavirus JC. El virus JC ataca y destruye exclusivamente a los Oligodendrocitos (las células que fabrican la mielina en el cerebro). Esto produce una desmielinización progresiva e inexorable de la sustancia blanca, manifestada como déficits motores (hemiparesia), visuales y cognitivos que empeoran semana a semana, sin causar fiebre. La pista radiológica que separa a la LMP del resto de infecciones oportunistas es negativa: en la RMN, la sustancia blanca se ve inflamada (blanca en T2), pero como el virus NO produce inflamación agresiva con ruptura de la barrera hematoencefálica, las lesiones NUNCA \"brillan\" ni captan contraste (No realce en anillo) y NUNCA empujan o hinchan el cerebro (No hay efecto de masa ni edema vasogénico). El único \"tratamiento\" es revivir el sistema inmune iniciando TARV de forma urgente.",
    keyPoints: [
    "Paciente con VIH severo (CD4 muy bajos) y déficits neurológicos focales progresivos sin fiebre.; RMN de Cerebro Pivote: Lesiones en la sustancia blanca asimétricas, SIN REALCE AL CONTRASTE y SIN EFECTO DE MASA.",
    "Leucoencefalopatía Multifocal Progresiva (LMP). Agente viral: Virus JC. (Si tuviera realce en anillo y edema, pensarías en Toxoplasmosis o Linfoma).",
    "Infecciones Oportunistas en VIH / Neurología."
],
  },
  {
    id: "ucc-conv-2026-08-23-57",
    university: "UCC",
    examArea: "PEDIATRÍA - CARDIOLOGÍA / INFECTOLOGÍA",
    topic: "Vasculitis Pediátricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","vasculitis-pedi-tricas","vasculitis","pedi","tricas"],
    statement: "Un lactante varón de 2 años de edad es llevado al consultorio de pediatría por cansancio y fiebre intermitente. Hace un mes y medio, el niño sufrió un cuadro caracterizado por fiebre alta sostenida durante 6 días, ojos rojos intensos sin lagañas (inyección conjuntival bulbar), labios fisurados sangrantes, lengua \"aframbuesada\" y descamación de la piel alrededor de las uñas de las manos y pies. En aquel entonces, fue evaluado en una clínica rural y tratado únicamente con Acetaminofén por sospecha de \"infección viral leve\". El niño sobrevivió a la fase aguda, pero hoy luce crónicamente enfermo. A la exploración cardiovascular actual, se ausculta un nuevo soplo pansistólico en el ápex irradiado a la axila, acompañado de un ritmo de galope con tercer ruido (S3) e incipiente hepatomegalia. Un ecocardiograma revela una dilatación masiva y disfunción contráctil severa del ventrículo izquierdo, además de la presencia de múltiples aneurismas esféricos gigantes (10 mm de diámetro) en las arterias coronarias derecha y descendente anterior. El pediatra se percata de la enfermedad primaria que padeció el niño hace mes y medio y que pasó desapercibida. A pesar de lo tardío del diagnóstico, ¿qué patología viral inofensiva debió descartar vigorosamente el médico rural antes de enviar al niño a casa, y qué secuela irreversible enfrenta hoy el paciente por no recibir el tratamiento intravenoso de primera línea a tiempo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Escarlatina por Estreptococo del Grupo A; enfrenta insuficiencia mitral por Carditis Reumática residual.",
        incorrectFeedback: "La escarlatina da exantema con lengua en fresa, pero la fiebre de más de 5 días con conjuntivitis no purulenta, descamación periungueal y aneurismas coronarios es Kawasaki. La carditis reumática afecta las válvulas, no forma aneurismas coronarios.",
      },
      {
        id: "B",
        label: "B",
        text: "Enfermedad de Kawasaki (Vasculitis); enfrenta un riesgo inminente de infarto de miocardio letal secundario a trombosis de los aneurismas coronarios gigantes formados por falta de Inmunoglobulina G Intravenosa temprana.",
      },
      {
        id: "C",
        label: "C",
        text: "Sarampión atípico tardío; enfrenta miocardiopatía dilatada secundaria a encefalitis esclerosante subaguda (PEES).",
        incorrectFeedback: "El sarampión no produce aneurismas coronarios, y la panencefalitis esclerosante subaguda aparece años después y es neurológica. El cuadro descrito es enfermedad de Kawasaki.",
      },
      {
        id: "D",
        label: "D",
        text: "Mononucleosis infecciosa por Epstein-Barr; enfrenta rotura esplénica silente con choque hipovolémico intraabdominal.",
        incorrectFeedback: "La mononucleosis da faringitis, adenopatías y esplenomegalia, no aneurismas coronarios. La secuela de Kawasaki no tratado con IGIV es el aneurisma coronario con riesgo de infarto.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente padeció de manera inadvertida la Enfermedad de Kawasaki, una vasculitis sistémica aguda de vasos medianos que ataca preferencialmente a las arterias coronarias. La historia clínica inicial era de libro: fiebre prolongada > 5 días, conjuntivitis bulbar seca, cambios orales (lengua de fresa/labios rotos) y descamación periungueal. El enorme drama de la Enfermedad de Kawasaki no es la fiebre, sino lo que hace en el corazón si no se trata en los primeros 10 días. Si el niño no recibe Inmunoglobulina G Intravenosa (IGIV) de inmediato, el 25% desarrollará destrucción e inflamación de las arterias coronarias, formando Aneurismas Coronarios Gigantes. Al dilatarse la arteria como un globo, la sangre se estanca adentro, se coagula, y el niño de 2 años sufre un Infarto Agudo de Miocardio fulminante o miocarditis isquémica (lo que explica hoy su falla cardíaca, galope y soplo de insuficiencia mitral por isquemia de músculos papilares).",
    keyPoints: [
    "Niño < 5 años. Fiebre > 5 días. Ojos rojos limpios, boca roja/partida, ganglio cervical y piel descamada.; Meses después: Regresa con Falla cardíaca, Muerte Súbita o Isquemia miocárdica (Infarto en pediatría).",
    "Enfermedad de Kawasaki mal tratada. La IGIV dada en los primeros 10 días \"apaga\" el fuego autoinmune y previene los aneurismas coronarios en un 95%. Si el aneurisma ya es gigante (>8mm), el niño requerirá anticoagulación sistémica (Warfarina) más Aspirina de por vida para que la sangre no se coagule adentro.",
    "Vasculitis Pediátricas / Cardiología Infantil."
],
  },
  {
    id: "ucc-conv-2026-08-23-58",
    university: "UCC",
    examArea: "MEDICINA INTERNA - HEMATOLOGÍA",
    topic: "Neoplasias Mieloproliferativas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","neoplasias-mieloproliferativas","neoplasias","mieloproliferativas"],
    statement: "Hombre de 60 años consulta a urgencias quejándose de intensa comezón (prurito) generalizada, la cual, curiosamente, se vuelve insoportable e intratable inmediatamente después de tomar duchas con agua caliente. Además, refiere cefaleas continuas, visión borrosa ocasional y un dolor quemante o sensación de ardor severo en las plantas de los pies y palmas de las manos que lo obligan a quitarse los calcetines (Eritromelalgia). A la inspección visual, el rostro del paciente luce intensamente rojo y congestionado (plétora facial pletórica) y se palpa esplenomegalia gigante a 5 cm bajo el margen costal izquierdo. Se solicita un hemograma de rutina que asombra al equipo médico: Hemoglobina 20.5 g/dL, Hematocrito 62%, Leucocitos 18,500/mm³ y Plaquetas 550,000/mm³ (Panmielosis). Ante el riesgo de hiperviscosidad y trombosis inminente, se instaura terapia con flebotomías terapéuticas seriadas. ¿Cuál es el defecto genético intracelular MÁS específico y frecuente (encontrado en >95% de los pacientes) que confirma el diagnóstico molecular de esta neoplasia mieloproliferativa?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Translocación genética t(9;22) formando el gen de fusión BCR-ABL.",
        incorrectFeedback: "El BCR-ABL (cromosoma Filadelfia) define la leucemia mieloide crónica. En la policitemia vera la mutación característica es JAK2 V617F.",
      },
      {
        id: "B",
        label: "B",
        text: "Mutación somática de ganancia de función V617F en el gen de la quinasa JAK2.",
      },
      {
        id: "C",
        label: "C",
        text: "Deficiencia grave de la enzima G6PD que causa lisis y sobreproducción medular compensatoria.",
        incorrectFeedback: "El déficit de G6PD causa hemólisis episódica, no panmielosis ni eritrocitosis. El cuadro es una policitemia vera (JAK2).",
      },
      {
        id: "D",
        label: "D",
        text: "Aumento primario en la secreción de Eritropoyetina (EPO) por un carcinoma de células claras renal oculto.",
        incorrectFeedback: "La policitemia secundaria por EPO (p. ej., tumor renal) eleva solo los glóbulos rojos, con EPO alta. En la policitemia vera hay panmielosis con EPO BAJA, por la mutación JAK2.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Policitemia Vera (PV), una neoplasia mieloproliferativa crónica caracterizada por la hiperproducción descontrolada de las tres líneas sanguíneas (glóbulos rojos, blancos y plaquetas = panmielosis), independientemente de la hormona eritropoyetina (EPO). La clínica es \"exquisitamente\" literaria: el Prurito Acuagénico (una picazón enloquecedora minutos después del contacto con agua tibia/caliente, debido a la liberación masiva de histamina por los basófilos clonales de la piel) y la Eritromelalgia (ardor agudo y enrojecimiento en manos/pies por microtrombos plaquetarios, que ceden mágicamente a la Aspirina). El exceso de sangre hace que la cara esté pletórica (roja) y tapan el bazo (esplenomegalia masiva). El hallazgo molecular de ORO para certificar la PV es la Mutación JAK2 V617F, que está presente en casi el 97% de los casos. Esta mutación mantiene el receptor de la célula madre hematopoyética \"encendido todo el tiempo\", como si hubiera EPO, haciendo que la médula ósea fabrique sangre a cántaros. De hecho, por mecanismo de retroalimentación negativa, el nivel de Eritropoyetina (EPO) en sangre en estos pacientes está anormalmente BAJO o suprimido.",
    keyPoints: [
    "Adulto mayor con Hematocrito > 60% (Sangre súper espesa).; Detalles mágicos: Comezón después de bañarse con agua caliente y enrojecimiento ardoroso de las manos (eritromelalgia).; Plétora y bazo inmenso.",
    "Policitemia Vera. Gen culpable: Mutación JAK2. (A diferencia de los que fuman o viven en la altura, donde la EPO está alta; en la PV, la EPO sérica está inhibida y baja).",
    "Neoplasias Mieloproliferativas / Hematología."
],
  },
  {
    id: "ucc-conv-2026-08-23-59",
    university: "UCC",
    examArea: "PEDIATRÍA - GASTROENTEROLOGÍA / CIRUGÍA",
    topic: "Embriología Quirúrgica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","embriolog-a-quir-rgica","embriolog","a","quir","rgica"],
    statement: "Una niña prematura (32 semanas de gestación), actualmente con 2 meses de vida corregida, fue diagnosticada y tratada exitosamente por un Onfalocele gigante al nacimiento. Su madre la trae al servicio de urgencias hoy porque presenta rechazo total al alimento, múltiples episodios de vómitos verdosos (biliosos) que iniciaron hace 4 horas, e irritabilidad inconsolable que ha progresado a letargia y signos de deshidratación. Al examen físico: la cicatriz umbilical del Onfalocele cerrado luce sana, pero el abdomen se encuentra algo distendido, asimétrico y sumamente doloroso a la palpación. Las constantes vitales evidencian taquicardia sostenida (180 lpm) y llenado capilar prolongado. Se realiza una Serie de Vías Digestivas Altas (SEGD) de emergencia que revela ausencia de cruce de la unión duodenoyeyunal (Ángulo de Treitz) a la izquierda de la línea media y un patrón duodenal en forma de \"sacacorchos\" (corkscrew sign). ¿Cuál es el defecto de rotación embriológico subyacente que predispuso ineludiblemente a este infarto isquémico abdominal inminente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ausencia total de rotación antihoraria de 270 grados del intestino medio en torno a la arteria mesentérica superior, dejando el ciego anclado en el hipocondrio derecho.",
      },
      {
        id: "B",
        label: "B",
        text: "Defecto de cierre de los pliegues laterales del embrión con eventración intestinal libre y aséptica en el líquido amniótico (Gastrosquisis).",
        incorrectFeedback: "La gastrosquisis es un defecto de la pared abdominal que puede asociarse a malrotación, pero no es el defecto de rotación en sí. El signo del sacacorchos con el ángulo de Treitz a la derecha indica malrotación con vólvulo del intestino medio.",
      },
      {
        id: "C",
        label: "C",
        text: "Hipertrofia progresiva del músculo circular del píloro por sobreestimulación gástrica extrínseca.",
        incorrectFeedback: "La hipertrofia del píloro produce vómito no bilioso sin isquemia intestinal. El vómito bilioso con sacacorchos en la serie GI es malrotación con vólvulo.",
      },
      {
        id: "D",
        label: "D",
        text: "Fijación congénita persistente del conducto onfalomesentérico a la pared abdominal anterior formando bridas estrangulantes.",
        incorrectFeedback: "Las bandas del conducto onfalomesentérico pueden causar obstrucción, pero no explican la posición anómala del ángulo de Treitz ni el signo del sacacorchos, que son de malrotación.",
      },
    ],
    correctOptionId: "A",
    explanation: "La paciente cursa con un Vólvulo de Intestino Medio secundario a una Malrotación Intestinal. Esta es la catástrofe que sigue invariablemente a los defectos de la pared abdominal congénitos grandes como el Onfalocele o la Gastrosquisis. Embriológicamente, en un feto sano, los intestinos salen al cordón umbilical a la sexta semana y regresan al abdomen en la décima semana, realizando una exquisita rotación de 270 grados en sentido contrario a las agujas del reloj alrededor del eje de la Arteria Mesentérica Superior (AMS), anclando firmemente el Ángulo de Treitz a la izquierda y el Ciego a la fosa ilíaca derecha. En un niño con Onfalocele, como los intestinos se pasaron el desarrollo \"viviendo afuera\" en el saco, NUNCA lograron rotar esos 270 grados al meterlos a la fuerza por el cirujano. El ciego queda \"flotando\" arriba en el centro, atado por bandas de tejido (Bandas de Ladd) que cruzan sobre el duodeno y lo obstruyen. Peor aún, todo el intestino delgado queda colgado de un pedículo arterial minúsculo e inestable. En cualquier momento de la infancia (como en esta niña de 2 meses), el intestino gira sobre sí mismo como un reloj, estrangulando la arteria mesentérica superior (Vólvulo), necrosando el intestino entero en 6 horas y produciendo los vómitos biliosos agudos y el signo de \"sacacorchos\" en el fluoroscopio de contraste.",
    keyPoints: [
    "Bebé con VÓMITO BILIOSO.; Antecedente CLAVE: Niño operado de Onfalocele, Gastrosquisis o Hernia Diafragmática.; Serie gastrointestinal con aspecto de Sacacorchos (corkscrew sign).",
    "Malrotación Intestinal y Vólvulo de Intestino Medio. Todo niño nacido con los intestinos \"afuera\" tiene malrotación anatómica obligatoria por definición embriológica. La cirugía innegociable inmediata es el Procedimiento de Ladd.",
    "Embriología Quirúrgica / Malrotación."
],
  },
  {
    id: "ucc-conv-2026-08-23-60",
    university: "UCC",
    examArea: "MEDICINA INTERNA - PSIQUIATRÍA / NEUROLOGÍA",
    topic: "Toxicología",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","toxicolog-a","toxicolog","a"],
    statement: "Un joven de 22 años, diagnosticado hace dos semanas con esquizofrenia paranoide tras un primer brote psicótico florido, es traído al servicio de urgencias por sus padres en un estado clínico aterrador. A su llegada, el paciente se encuentra sumamente aletargado, mutista y sudando profusamente a gotas gruesas (diaforesis masiva). Al intentar evaluarlo, el médico encuentra que los brazos y las piernas del paciente presentan una rigidez extrema, dura e inquebrantable, similar a intentar doblar un \"tubo de plomo\" (Lead-pipe rigidity), sin temblores rítmicos ni clonus desencadenable. La temperatura central axilar es de 41.2°C (Hipertermia severa). La presión arterial fluctúa caóticamente entre 180/100 mmHg y 90/50 mmHg en minutos, con taquicardia sostenida. Sus familiares reportan que el psiquiatra le había recetado Haloperidol intramuscular de depósito y Flufenazina oral. Los laboratorios revelan una Creatina Quinasa (CPK) total en 35.000 U/L (indicio de necrosis muscular masiva). Dada la emergencia toxicológica letal secundaria al antagonismo dopaminérgico puro, ¿cuál es el antídoto farmacológico ESPECÍFICO de reversión central que, además del soporte y enfriamiento, dictan las pautas de rescate neurológico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ciproheptadina oral por sonda nasogástrica.",
        incorrectFeedback: "La ciproheptadina es el antídoto del síndrome serotoninérgico (antagonista 5-HT2A). En el síndrome neuroléptico maligno, por bloqueo D2, se usa un agonista dopaminérgico como la bromocriptina.",
      },
      {
        id: "B",
        label: "B",
        text: "Bromocriptina (o Amantadina) oral o por sonda, frecuentemente combinada con Dantroleno sistémico.",
      },
      {
        id: "C",
        label: "C",
        text: "Naloxona en bolos intravenosos seriados hasta que despierte.",
        incorrectFeedback: "La naloxona revierte opioides; no tiene efecto sobre el bloqueo dopaminérgico. El tratamiento es suspender el neuroléptico, dar soporte, bromocriptina o amantadina y, en casos graves, dantroleno.",
      },
      {
        id: "D",
        label: "D",
        text: "Flumazenil intravenoso lento y administración agresiva de Fisostigmina.",
        incorrectFeedback: "El flumazenil revierte benzodiacepinas (incluso pueden ser útiles en este cuadro) y la fisostigmina revierte el síndrome anticolinérgico. Ninguno trata el síndrome neuroléptico maligno.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Síndrome Neuroléptico Maligno (SNM), una emergencia neurológica fulminante (con alta tasa de mortalidad por falla renal o paro cardíaco) causada por un bloqueo drástico y masivo de los receptores D2 de Dopamina en el sistema nervioso central (cerebro y ganglios basales). Es desencadenado de manera clásica por los antipsicóticos típicos de alta potencia, como el Haloperidol. La tétrada patognomónica de oro es: 1) Alteración del estado mental; 2) Inestabilidad autonómica caótica (presión loca, diaforesis extrema); 3) Hipertermia altísima (> 40°C); y 4) Rigidez en \"TUBO DE PLOMO\" extrema y global (este es el sello, los músculos se quedan trabados al máximo y se deshacen liberando CPK altísima). Al identificar que la causa fisiopatológica es la falta abrupta de Dopamina, el antídoto específico de reversión de primera línea son los Agonistas Dopaminérgicos directos, como la Bromocriptina o la Amantadina (inundan el receptor y devuelven la movilidad). Como el músculo está en un espasmo rígido letal quemando energía, se asocia concomitantemente Dantroleno sódico intravenoso (un relajante muscular periférico directo) para frenar la necrosis miocítica y detener el daño por la CPK.",
    keyPoints: [
    "Paciente psiquiátrico joven que tomó antipsicóticos recientes (Haloperidol, Clorpromazina).; Fiebre altísima (> 40°C) + Alteración mental + Disautonomía.; Dato Clínico Rey: Rigidez generalizada inquebrantable en \"Tubo de Plomo\". (NO hay clonus, NO hay hiperreflexia). CPK por las nubes.",
    "Síndrome Neuroléptico Maligno. Causado por bloqueo brusco de Dopamina. Antídoto central: Bromocriptina (agonista dopaminérgico). Relajante muscular: Dantroleno.",
    "Toxicología / Urgencias Psiquiátricas."
],
  }
];
