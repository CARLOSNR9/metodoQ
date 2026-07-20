import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC â€” EdiciÃ³n #3 (19 jul 2025) Â· Preguntas #11â€“#20.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_11_20_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-11",
    university: "UCC",
    examArea: "Medicina Interna / ReumatologÃ­a / HematologÃ­a",
    topic: "ReumatologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "reumatologia", "hematologia"],
    statement: "Mujer de 34 aÃ±os con diagnÃ³stico previo de SÃ­ndrome AntifosfolÃ­pido (SAF) primario en manejo crÃ³nico con Warfarina. Acude a urgencias por disnea progresiva, oliguria y apariciÃ³n de mÃºltiples lesiones cutÃ¡neas retiformes y necrÃ³ticas en miembros inferiores. Al examen fÃ­sico: PA 150/95 mmHg, FC 110 lpm, SatO2 86% al aire ambiente. ParaclÃ­nicos: Creatinina 3.5 mg/dL (basal 0.9), Plaquetas 35.000/mmÂ³, Esquizocitos en frotis de sangre perifÃ©rica (3%). La radiografÃ­a de tÃ³rax evidencia infiltrados alveolares difusos bilaterales (SÃ­ndrome de Dificultad Respiratoria Aguda). El INR de ingreso es de 1.2 (subterapÃ©utico por mala adherencia). Â¿CuÃ¡l es la estrategia terapÃ©utica combinada de PRIMERA LÃNEA para revertir este cuadro agudo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender la anticoagulaciÃ³n debido a la trombocitopenia e iniciar terapia biolÃ³gica con Rituximab y Ciclofosfamida de forma inmediata.",
        distractorProfile: "fear_of_thrombocytopenia_trap",
        incorrectFeedback: "Suspender la anticoagulaciÃ³n en el CAPS es letal; la trombocitopenia es consuntiva (trombÃ³tica) y frenar la cascada de coagulaciÃ³n es el primer pilar para detener el daÃ±o microvascular."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar triple terapia obligatoria con AnticoagulaciÃ³n plena (Heparina IV), Glucocorticoides a altas dosis (pulsos) y Recambio PlasmÃ¡tico TerapÃ©utico (PlasmafÃ©resis) y/o Inmunoglobulina IV."
      },
      {
        id: "C",
        label: "C",
        text: "Transfundir 6 unidades de plaquetas para disminuir el riesgo de hemorragia alveolar e iniciar manejo con un Anticoagulante Oral Directo (DOAC).",
        distractorProfile: "deadly_transfusion_trigger",
        incorrectFeedback: "Transfundir plaquetas exacerba la microtrombosis diseminada y los DOACs estÃ¡n contraindicados por inferioridad demostrada en sÃ­ndromes antifosfolÃ­pidos trombÃ³ticos."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar fibrinolÃ­ticos sistÃ©micos (Alteplase) por sospecha de TEP masivo y realizar hemodiÃ¡lisis de urgencia.",
        distractorProfile: "wrong_thromboembolic_management",
        incorrectFeedback: "El problema del CAPS es la microtrombosis difusa (microangiopatÃ­a), no un macro-trombo Ãºnico; los fibrinolÃ­ticos elevan el riesgo de sangrado cerebral sin resolver la cascada inmunolÃ³gica subyacente."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con un SÃ­ndrome AntifosfolÃ­pido CatastrÃ³fico (CAPS), la variante mÃ¡s letal del SAF (mortalidad >50%). Se define por el desarrollo de trombosis en tres o mÃ¡s Ã³rganos, sistemas o tejidos en menos de una semana (en este caso: pulmÃ³n, riÃ±Ã³n y piel), con confirmaciÃ³n de microangiopatÃ­a trombÃ³tica (esquizocitos/trombocitopenia). El desencadenante clÃ¡sico es la suspensiÃ³n de la anticoagulaciÃ³n o una infecciÃ³n. Las guÃ­as internacionales (Task Force for CAPS) establecen que la supervivencia exige una \"terapia triple\" agresiva e inmediata: AnticoagulaciÃ³n (para frenar la trombosis en cascada), Corticosteroides a dosis de pulso (para frenar el SIRS/tormenta de citoquinas) y PlasmafÃ©resis y/o IGIV (para remover/neutralizar los anticuerpos antifosfolÃ­pidos circulantes y citoquinas).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, en el CAPS la sangre del paciente se coagula en la microcirculaciÃ³n de todo el cuerpo simultÃ¡neamente. Si te dejas asustar por las plaquetas bajas (35.000) y le quitas la anticoagulaciÃ³n (OpciÃ³n A), la paciente morirÃ¡ infartada. La trombocitopenia es por *consumo* trombÃ³tico, no por sangrado. Transfundir plaquetas (OpciÃ³n C) es gasolina para el fuego (mÃ¡s sustrato para hacer trombos). La anticoagulaciÃ³n debe ser parenteral (Heparina) y nunca con DOACs, que son inferiores a la warfarina/heparinas en SAF de alto riesgo.",
    keyPoints: [
      "Paciente con SAF conocido (o joven con trombosis atÃ­picas).",
      "Falla multiorgÃ¡nica rÃ¡pida (< 1 semana) involucrando 3 o mÃ¡s Ã³rganos (clÃ¡sico: riÃ±Ã³n, pulmÃ³n, piel/SNC).",
      "MicroangiopatÃ­a trombÃ³tica activa (trombocitopenia + esquizocitos).",
      "SAF CatastrÃ³fico (CAPS). El manejo es siempre combinado: AnticoagulaciÃ³n + Corticoides + PlasmafÃ©resis/IGIV.",
      "Tema: SÃ­ndrome AntifosfolÃ­pido CatastrÃ³fico."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-12",
    university: "UCC",
    examArea: "PediatrÃ­a / Urgencias / EndocrinologÃ­a",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "urgencias", "endocrinologia"],
    statement: "Un escolar de 8 aÃ±os con diabetes tipo 1 de reciente diagnÃ³stico ingresÃ³ hace 6 horas por Cetoacidosis DiabÃ©tica (CAD) severa (pH 7.05, Glucosa 550 mg/dL). Ha recibido reanimaciÃ³n con bolos de soluciÃ³n salina e infusiÃ³n continua de insulina (0.1 U/kg/h). Durante la Ãºltima hora de monitorizaciÃ³n, la enfermera reporta que el niÃ±o, quien previamente estaba conversando, se ha tornado irritable, somnoliento y quejÃ¡ndose de cefalea global intensa. Signos vitales actuales: PA 145/95 mmHg (elevada para su edad), FC 55 lpm (bradicardia), FR 14 rpm. Pupilas isocÃ³ricas pero de respuesta perezosa. Â¿CuÃ¡l es la conducta INMEDIATA de rescate neurolÃ³gico MÃS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Detener la infusiÃ³n de insulina, trasladar a TAC de crÃ¡neo urgente y esperar confirmaciÃ³n imagenolÃ³gica antes de administrar fÃ¡rmacos.",
        distractorProfile: "deadly_imaging_delay",
        incorrectFeedback: "En el edema cerebral post-CAD, la descompresiÃ³n osmolar es una emergencia vital; posponerla para realizar un TAC garantiza el enclavamiento cerebral y la muerte encefÃ¡lica."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar hiperventilaciÃ³n mecÃ¡nica profilÃ¡ctica intubando al paciente con meta de PaCO2 < 25 mmHg.",
        distractorProfile: "outdated_and_dangerous_neuromanagement",
        incorrectFeedback: "La hiperventilaciÃ³n profilÃ¡ctica intensa (PaCO2 < 25) causa una vasoconstricciÃ³n cerebral extrema, provocando isquemia tisular global; solo se usa transitoriamente como puente a la cirugÃ­a descompresiva en herniaciones extremas."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar inmediatamente Manitol al 20% intravenoso (0.5 a 1 g/kg) o SoluciÃ³n Salina HipertÃ³nica al 3%, elevando la cabecera a 30 grados."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar un bolo rÃ¡pido de Dextrosa al 10% y Bicarbonato de Sodio intravenoso para corregir la acidosis intracelular.",
        distractorProfile: "pathophysiological_exacerbator",
        incorrectFeedback: "El bicarbonato de sodio genera CO2 intracelular que cruza libremente la barrera hematoencefÃ¡lica, empeorando la acidosis del LCR e incrementando drÃ¡sticamente el edema del cerebro."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con un Edema Cerebral clÃ­nico, la principal causa de mortalidad pediÃ¡trica en la CAD (usualmente ocurre entre las 4 y 12 horas del inicio del tratamiento). Los signos clÃ¡sicos de herniaciÃ³n inminente incluyen la TrÃ­ada de Cushing (hipertensiÃ³n, bradicardia, alteraciÃ³n respiratoria) asociada a deterioro sÃºbito del sensorio y cefalea. Las guÃ­as de ISPAD (International Society for Pediatric and Adolescent Diabetes) establecen categÃ³ricamente que el tratamiento hiperosmolar (Manitol o SoluciÃ³n Salina al 3%) debe iniciarse DE INMEDIATO ante la sola sospecha clÃ­nica, a la cabecera del paciente. Retrasar el manejo para confirmar el edema mediante una TomografÃ­a Computarizada de crÃ¡neo acarrea un altÃ­simo riesgo de enclavamiento amigdalino irreversible y muerte.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** En la CAD pediÃ¡trica, el cerebro es una bomba de tiempo osmolar. El TAC de crÃ¡neo (OpciÃ³n A) es el asesino silencioso en esta pregunta: el niÃ±o se te hernia y hace paro respiratorio en el pasillo de radiologÃ­a. ActÃºa como intensivista: si el niÃ±o se duerme y hace bradicardia con hipertensiÃ³n, pones el manitol y luego haces las preguntas. El uso de bicarbonato de sodio en la CAD (OpciÃ³n D) estÃ¡ casi proscrito porque paradÃ³jicamente cruza la barrera hematoencefÃ¡lica como CO2, empeorando la acidosis del LCR e induciendo aÃºn mÃ¡s edema cerebral.",
    keyPoints: [
      "NiÃ±o en tratamiento de CAD (4-12 hrs post-inicio).",
      "ApariciÃ³n de cefalea severa, alteraciÃ³n de conciencia o TrÃ­ada de Cushing (Bradicardia + HipertensiÃ³n).",
      "Edema Cerebral agudo; el tratamiento hiperosmolar (Manitol/SS HipertÃ³nica) es CLÃNICO y se inicia en el momento, sin esperar ninguna neuroimagen.",
      "Tema: Cetoacidosis DiabÃ©tica PediÃ¡trica / Edema Cerebral."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-13",
    university: "UCC",
    examArea: "Medicina Interna / NefrologÃ­a / EndocrinologÃ­a",
    topic: "NefrologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "nefrologia", "endocrinologia"],
    statement: "Hombre de 62 aÃ±os con diabetes mellitus tipo 2 de 15 aÃ±os de evoluciÃ³n, hipertensiÃ³n arterial y enfermedad renal crÃ³nica estadio 3a. Acude a consulta rutinaria asintomÃ¡tico. Sus medicamentos incluyen LosartÃ¡n, Amlodipino y Metformina. Examen fÃ­sico: PA 135/82 mmHg, hidratado, sin edemas. ParaclÃ­nicos de control revelan: Sodio 138 mEq/L, Potasio 5.8 mEq/L (Hiperkalemia), Cloro 108 mEq/L, Creatinina 1.6 mg/dL. Los gases venosos muestran: pH 7.31, HCO3 17 mEq/L, AniÃ³n Gap de 10 mEq/L (normal). El nivel de glucemia es de 145 mg/dL. Un parcial de orina muestra pH urinario de 5.5, sin cetonas. Â¿CuÃ¡l es el trastorno Ã¡cido-base subyacente MÃS probable en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cetoacidosis diabÃ©tica silenciosa.",
        distractorProfile: "wrong_anion_gap",
        incorrectFeedback: "La cetoacidosis diabÃ©tica es una acidosis por Ã¡cidos endÃ³genos que invariablemente ensancha la brecha aniÃ³nica (AniÃ³n Gap alto >12) y cursa con cetonas urinarias fuertemente positivas."
      },
      {
        id: "B",
        label: "B",
        text: "Acidosis Tubular Renal Tipo 1 (Distal).",
        distractorProfile: "wrong_potassium_direction",
        incorrectFeedback: "La Acidosis Tubular Renal Tipo 1 (falla en secretar H+ distales) se caracteriza caracterÃ­sticamente por HIPOkalemia severa y un pH urinario paradÃ³jicamente alcalino (>5.5)."
      },
      {
        id: "C",
        label: "C",
        text: "Acidosis Tubular Renal Tipo 4 (Hipoaldosteronismo HiporeninÃ©mico)."
      },
      {
        id: "D",
        label: "D",
        text: "Acidosis Tubular Renal Tipo 2 (Proximal).",
        distractorProfile: "wrong_potassium_profile",
        incorrectFeedback: "La Acidosis Tubular Renal Tipo 2 (falla en reabsorber bicarbonato proximal) tambiÃ©n cursa con HIPOkalemia y se asocia a menudo con SÃ­ndrome de Fanconi (glucosuria, fosfaturia, aminoaciduria)."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta una acidosis metabÃ³lica de brecha aniÃ³nica (AniÃ³n Gap) NORMAL (hiperclorÃ©mica) asociada a **hiperkalemia** persistente en el contexto de nefropatÃ­a diabÃ©tica. Este es el perfil bioquÃ­mico clÃ¡sico de la Acidosis Tubular Renal (ATR) Tipo 4. Se produce por un hipoaldosteronismo hiporeninÃ©mico (tÃ­pico de la diabetes por daÃ±o en el aparato yuxtaglomerular) o por resistencia a la aldosterona. La falta de aldosterona impide la secreciÃ³n de potasio y de hidrogeniones en el tÃºbulo distal, generando retenciÃ³n de potasio (hiperkalemia) y acidosis. El pH urinario suele ser < 5.5 porque el riÃ±Ã³n aÃºn puede acidificar la orina mÃ­nimamente (a diferencia de la ATR tipo 1).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** No le tengas miedo a las Acidosis Tubulares Renales, Colega, la clave es el Potasio. La ATR Tipo 1 (Distal) y la ATR Tipo 2 (Proximal) cursan casi siempre con HIPOkalemia (Potasio bajo). Si el paciente tiene el potasio alto (5.8 mEq/L) y una acidosis hiperclorÃ©mica, el problema es el eje aldosterona. Al ser diabÃ©tico y tomar un ARA-II (LosartÃ¡n), su eje estÃ¡ doblemente bloqueado, configurando la clÃ¡sica ATR tipo 4.",
    keyPoints: [
      "DiabÃ©tico con Enfermedad Renal CrÃ³nica leve-moderada.",
      "Acidosis metabÃ³lica de AniÃ³n Gap NORMAL + HIPERKALEMIA.",
      "pH urinario habitualmente Ã¡cido (< 5.5).",
      "Acidosis Tubular Renal Tipo 4. Es la Ãºnica ATR que cursa caracterÃ­sticamente con Potasio ALTO.",
      "Tema: Trastornos Ãcido-Base / Acidosis Tubular Renal."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-14",
    university: "UCC",
    examArea: "PediatrÃ­a / CardiologÃ­a / Urgencias",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "cardiologia", "urgencias"],
    statement: "Lactante femenina de 3 meses es traÃ­da a urgencias por pobre succiÃ³n, irritabilidad y palidez desde hace 3 horas. Al examen fÃ­sico: FC de 250 lpm, FR 45 rpm, PA 85/55 mmHg. Pulsos perifÃ©ricos presentes y llenado capilar de 2 segundos. Se conecta al monitor cardÃ­aco, el cual revela una taquicardia regular de complejo QRS estrecho, sin ondas P claramente visibles antes de los complejos. Tras documentar estabilidad hemodinÃ¡mica relativa, se intenta estimulaciÃ³n vagal mediante la aplicaciÃ³n de una bolsa de hielo en el rostro de la lactante por 15 segundos, sin lograr reversiÃ³n al ritmo sinusal. Â¿CuÃ¡l es la intervenciÃ³n farmacolÃ³gica de elecciÃ³n MÃS apropiada como siguiente paso?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Amiodarona en infusiÃ³n continua durante 20 minutos.",
        distractorProfile: "secondary_slow_antiarrhythmic",
        incorrectFeedback: "La amiodarona es un antiarrÃ­tmico de segunda lÃ­nea, requiere una infusiÃ³n lenta y no es el tratamiento de rescate rÃ¡pido de elecciÃ³n para terminar un circuito de reentrada nodal estable."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Adenosina intravenosa en bolo rÃ¡pido por una vÃ­a perifÃ©rica proximal, seguida inmediatamente de un bolo de soluciÃ³n salina (tÃ©cnica de doble jeringa)."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Verapamilo intravenoso lento bajo monitorizaciÃ³n estricta.",
        distractorProfile: "absolute_lethal_contraindication_in_infants",
        incorrectFeedback: "El verapamilo causa un colapso cardiovascular profundo e irreversible en menores de 1 aÃ±o debido a la dependencia miocÃ¡rdica inmadura del calcio transmembrana; estÃ¡ proscrito en este grupo etario."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar cardioversiÃ³n elÃ©ctrica sincronizada a 0.5 - 1 Joules/kg previa sedaciÃ³n superficial.",
        distractorProfile: "electrical_escalation_in_stable_patient",
        incorrectFeedback: "La cardioversiÃ³n elÃ©ctrica sincronizada es el primer paso mandatorio ÃšNICAMENTE si el paciente presenta signos claros de inestabilidad hemodinÃ¡mica (choque, hipotensiÃ³n profunda, alteraciÃ³n mental)."
      }
    ],
    correctOptionId: "B",
    explanation: "La lactante presenta una Taquicardia Supraventricular (TSV) paroxÃ­stica, identificada por frecuencia >220 lpm en lactantes, QRS estrecho y ausencia de ondas P. Dado que la paciente se encuentra hemodinÃ¡micamente ESTABLE (PA normal, llenado capilar conservado), las guÃ­as de reanimaciÃ³n pediÃ¡trica (PALS/AHA) indican maniobras vagales como primera lÃ­nea (hielo en el rostro en lactantes). Si estas fallan, el fÃ¡rmaco de elecciÃ³n absoluto es la Adenosina. La adenosina tiene una vida media ultracorta (<10 segundos), por lo que DEBE administrarse como un bolo rÃ¡pido (push) por una vÃ­a venosa lo mÃ¡s proximal posible al corazÃ³n, seguido inmediatamente de un bolo rÃ¡pido de soluciÃ³n salina normal usando una llave de tres vÃ­as para empujar la medicaciÃ³n antes de que sea metabolizada por los eritrocitos.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Cuidado con los calcioantagonistas en pediatrÃ­a, Colega. El Verapamilo (OpciÃ³n C) estÃ¡ ESTRÃCTAMENTE CONTRAINDICADO en lactantes menores de 1 aÃ±o con TSV. El miocardio inmaduro del lactante depende en extremo de los canales de calcio para mantener la contractilidad; si usas verapamilo, produces un colapso cardiovascular refractario y paro cardÃ­aco inmediato. Si el niÃ±o estÃ¡ estable, la adenosina es la regla. Si estÃ¡ inestable (chocado, PA por el piso, pÃ¡lido), olvidas los medicamentos y vas directo al choque elÃ©ctrico sincronizado.",
    keyPoints: [
      "Lactante con FC > 220 lpm o niÃ±o con FC > 180 lpm con QRS estrecho.",
      "Paciente hemodinÃ¡micamente estable tras fallo de maniobras vagales.",
      "Adenosina intravenosa rÃ¡pida con tÃ©cnica de doble jeringa. CardioversiÃ³n elÃ©ctrica solo si hay inestabilidad.",
      "Tema: Taquicardia Supraventricular PediÃ¡trica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-15",
    university: "UCC",
    examArea: "Medicina Interna / InfectologÃ­a / GastroenterologÃ­a",
    topic: "InfectologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "infectologia", "gastroenterologia"],
    statement: "Hombre de 35 aÃ±os consulta por fiebre de 39Â°C, sudoraciÃ³n nocturna, malestar general y dolor en hipocondrio derecho irradiado al hombro ipsilateral, de 10 dÃ­as de evoluciÃ³n. Hace un mes retornÃ³ de un viaje de campo por la zona rural del ChocÃ³. Al examen fÃ­sico: ictericia leve, hepatomegalia muy dolorosa a la percusiÃ³n (signo de Murphy hepÃ¡tico positivo). Los paraclÃ­nicos evidencian leucocitosis (14.000/mmÂ³) sin eosinofilia, elevaciÃ³n moderada de transaminasas y fosfatasa alcalina. Una ecografÃ­a hepatobiliar revela una lesiÃ³n quÃ­stica Ãºnica, redondeada, de bordes bien definidos, de 6 cm de diÃ¡metro en el lÃ³bulo hepÃ¡tico derecho, alejada de la cÃ¡psula de Glisson y de la vÃ­a biliar principal. SerologÃ­a IgG para *Entamoeba histolytica* resulta fuertemente positiva. Â¿CuÃ¡l es el tratamiento de PRIMERA LÃNEA MÃS adecuado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Drenaje percutÃ¡neo guiado por ecografÃ­a + Ceftriaxona sistÃ©mica por 14 dÃ­as.",
        distractorProfile: "invasive_overtreatment",
        incorrectFeedback: "El drenaje percutÃ¡neo no es de primera lÃ­nea para el absceso amebiano estÃ¡ndar sin inminencia de ruptura, y la Ceftriaxona no tiene actividad tricomonicida/amebicida Ãºtil."
      },
      {
        id: "B",
        label: "B",
        text: "Manejo mÃ©dico empÃ­rico exclusivo con Metronidazol vÃ­a oral o intravenoso durante 7 a 10 dÃ­as, seguido de un amebicida luminal."
      },
      {
        id: "C",
        label: "C",
        text: "ResecciÃ³n quirÃºrgica del segmento hepÃ¡tico afectado debido al tamaÃ±o de la lesiÃ³n (superior a 5 cm).",
        distractorProfile: "extreme_surgical_error",
        incorrectFeedback: "La resecciÃ³n anatÃ³mica quirÃºrgica del hÃ­gado por un absceso amebiano estÃ¡ totalmente proscrita, reservÃ¡ndose las intervenciones drÃ¡sticas solo para rupturas francas al peritoneo con peritonitis difusa."
      },
      {
        id: "D",
        label: "D",
        text: "Albendazol asociado a Praziquantel por riesgo de origen hidatÃ­dico parasitario.",
        distractorProfile: "wrong_parasitology",
        incorrectFeedback: "El albendazol y el praziquantel son la terapia de elecciÃ³n para el Quiste HidatÃ­dico (Echinococcus granulosus), el cual se presenta como un quiste multilocular calcificado en personas con exposiciÃ³n a ovejas/perros de pastoreo, no para la amebiasis."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Absceso HepÃ¡tico Amebiano clÃ¡sico (AHA). Las caracterÃ­sticas clÃ­nicas (fiebre, dolor en CSD, viaje a zona endÃ©mica del trÃ³pico), radiolÃ³gicas (lesiÃ³n Ãºnica en lÃ³bulo derecho) y la serologÃ­a positiva confirman el diagnÃ³stico. A diferencia del absceso piÃ³geno (bacteriano), el AHA responde espectacularmente bien al manejo mÃ©dico exclusivo. Las guÃ­as recomiendan terapia con nitroimidazoles (Metronidazol o Tinidazol) como primera lÃ­nea, con resoluciÃ³n de la fiebre usualmente en 72 horas, seguido de un agente luminal (Paromomicina o Iodoquinol) para erradicar los quistes intestinales. El drenaje percutÃ¡neo NO se realiza de rutina y se reserva para excepciones absolutas: alto riesgo de ruptura (lesiones >10 cm o muy cerca de la cÃ¡psula hepÃ¡tica), ubicaciÃ³n en el lÃ³bulo izquierdo (riesgo de ruptura al pericardio), embarazo, o falta de respuesta mÃ©dica tras 3 a 5 dÃ­as de metronidazol.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** No dejes que tu instinto de cirujano te gane aquÃ­. En el absceso piÃ³geno (el que hacen los ancianos diabÃ©ticos, con mÃºltiples microabscesos o por colecistitis), el drenaje mÃ¡s antibiÃ³ticos es la norma. Pero en el amebiano (el joven viajero con lesiÃ³n Ãºnica derecha), meterle una aguja es un riesgo innecesario. El metronidazol llega al hÃ­gado a niveles tan altos que licÃºa a la Entamoeba en dÃ­as. La lesiÃ³n descrita tiene 6 cm y estÃ¡ lejos de la cÃ¡psula; no cumple ningÃºn criterio de drenaje intervencionista.",
    keyPoints: [
      "Hombre joven con dolor CSD, fiebre y viaje a zona tropical endÃ©mica.",
      "TAC/EcografÃ­a con absceso hepÃ¡tico ÃšNICO en lÃ³bulo DERECHO. SerologÃ­a positiva para amebas.",
      "Absceso HepÃ¡tico Amebiano. Tratamiento: Metronidazol. Drenaje SOLO si mide >10cm, estÃ¡ en el lÃ³bulo izquierdo, o amenaza romperse.",
      "Tema: Infecciones Parasitarias / Absceso HepÃ¡tico."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-16",
    university: "UCC",
    examArea: "PediatrÃ­a / NeumologÃ­a / InfectologÃ­a",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neumologia", "infectologia"],
    statement: "NiÃ±o de 5 aÃ±os es llevado a urgencias en Ã©poca de pico respiratorio invernal. Tuvo un cuadro confirmado de Influenza A hace 6 dÃ­as que parecÃ­a estar resolviÃ©ndose. En las Ãºltimas 24 horas, presenta un rÃ¡pido deterioro clÃ­nico con fiebre de 40Â°C, dolor pleurÃ­tico, taquipnea severa y un episodio de hemoptisis franca. Al ingreso, luce pÃ¡lido, sÃ©ptico (PA 85/55 mmHg) y saturando 86%. La radiografÃ­a de tÃ³rax revela una neumonÃ­a consolidativa bilateral y la apariciÃ³n de mÃºltiples cavitaciones de pared fina en ambos campos pulmonares (neumatoceles). Se toman hemocultivos. Â¿CuÃ¡l es el rÃ©gimen antibiÃ³tico empÃ­rico MÃS crÃ­tico y apropiado para cubrir al patÃ³geno responsable de este cuadro?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Oseltamivir a dosis plenas asociado a Amoxicilina en dosis altas para cubrir sobreinfecciÃ³n neumocÃ³cica tÃ­pica.",
        distractorProfile: "insufficient_mrsa_coverage",
        incorrectFeedback: "La amoxicilina y el oseltamivir no tienen actividad contra el S. aureus productor de PVL (frecuentemente meticilino-resistente), permitiendo que la necrosis pulmonar progrese fatalmente."
      },
      {
        id: "B",
        label: "B",
        text: "Ampicilina/Sulbactam para cubrir anaerobios aspirativos de la cavidad oral causantes de abscesos pulmonares.",
        distractorProfile: "wrong_etiology_assumption",
        incorrectFeedback: "Los anaerobios orales causan abscesos pulmonares de progresiÃ³n muy lenta (semanas) en pacientes con alteraciones neurolÃ³gicas o de la degluciÃ³n, no cavitaciones agudas post-gripales con hemoptisis en 24 horas."
      },
      {
        id: "C",
        label: "C",
        text: "Ceftriaxona mÃ¡s Azitromicina para cobertura empÃ­rica ampliada de neumonÃ­a atÃ­pica por Mycoplasma.",
        distractorProfile: "atypical_pneumonia_trap",
        incorrectFeedback: "Mycoplasma causa neumonÃ­a atÃ­pica con infiltrados intersticiales y tos seca, pero excepcionalmente produce destrucciÃ³n tisular masiva, neumatoceles, choque o hemoptisis aguda como en este paciente."
      },
      {
        id: "D",
        label: "D",
        text: "Vancomicina o Clindamicina intravenosa de forma inmediata, asociado a una cefalosporina de tercera generaciÃ³n."
      }
    ],
    correctOptionId: "D",
    explanation: "El paciente presenta una NeumonÃ­a Necrosante o Cavitada clÃ¡sica de presentaciÃ³n hiperaguda. El antecedente de una infecciÃ³n por Influenza reciente seguida de un deterioro fulminante con hemoptisis, choque y neumatoceles es la \"huella digital\" clÃ­nica de una sobreinfecciÃ³n por *Staphylococcus aureus* resistente a meticilina (SAMR) adquirido en la comunidad, especÃ­ficamente productor de la toxina Leucocidina de Panton-Valentine (PVL). La toxina PVL destruye los neutrÃ³filos, causando necrosis masiva del parÃ©nquima pulmonar y la formaciÃ³n de neumatoceles sangrantes. El rÃ©gimen empÃ­rico debe incluir un agente con acciÃ³n contra SAMR comunitaria y preferiblemente con capacidad para inhibir la producciÃ³n de toxinas en el ribosoma (como Clindamicina o Linezolid), asociado a Vancomicina o una cefalosporina (Ceftriaxona) para cubrir cocos clÃ¡sicos.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Â¡Anota esta secuencia! Influenza que se complica a la semana = Neumococo o Estafilococo. Si la placa muestra un consolidado simple, puede ser neumococo. Pero si la viÃ±eta menciona \"neumatoceles\", \"cavitaciones\" o \"hemoptisis masiva\", el estafilococo con su toxina Panton-Valentine le hizo huecos literales al pulmÃ³n. La amoxicilina (OpciÃ³n A) se quedarÃ¡ corta porque el SAMR la destruye con sus betalactamasas. Necesitas artillerÃ­a pesada que bloquee la proteÃ­na tÃ³xica (Clindamicina) y rompa la pared del MRSA (Vancomicina).",
    keyPoints: [
      "NiÃ±o o joven con 'gripa/influenza' que mejora y de repente hace sepsis pulmonar fulminante.",
      "Hemoptisis + RadiografÃ­a con cavidades/neumatoceles.",
      "SobreinfecciÃ³n por S. aureus productor de PVL (Panton-Valentine). Cobertura obligatoria antistafilocÃ³cica con Vancomicina/Clindamicina.",
      "Tema: NeumonÃ­a Complicada PediÃ¡trica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-17",
    university: "UCC",
    examArea: "Medicina Interna / GastroenterologÃ­a",
    topic: "GastroenterologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia"],
    statement: "Hombre de 60 aÃ±os, usuario crÃ³nico de Naproxeno por osteoartritis severa, ingresa por hematemesis y melenas asociadas a presÃ­ncope. Es reanimado con cristaloides y se inicia infusiÃ³n de Pantoprazol (bolo de 80 mg). Se realiza endoscopia digestiva alta urgente que revela una Ãºlcera gÃ¡strica en la incisura angularis con un vaso visible no sangrante en el lecho (ClasificaciÃ³n de Forrest IIa). El gastroenterÃ³logo aplica terapia combinada de inyecciÃ³n con epinefrina y colocaciÃ³n de hemoclips logrando hemostasia exitosa. Posterior al procedimiento, el paciente es trasladado a la sala de hospitalizaciÃ³n. Â¿CuÃ¡l es el manejo farmacolÃ³gico Ã¡cido-supresor de elecciÃ³n en las prÃ³ximas 72 horas para prevenir el resangrado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cambiar a Inhibidor de Bomba de Protones (IBP) vÃ­a oral a dosis doble (40 mg cada 12 horas) y dieta blanda lÃ­quida.",
        distractorProfile: "oral_conversion_premature",
        incorrectFeedback: "La terapia oral intermitente no asegura un pH gÃ¡strico constantemente > 6.0 en las primeras 72 horas, permitiendo la digestiÃ³n pÃ©ptica del coÃ¡gulo hemostÃ¡tico y favoreciendo el resangrado de alto riesgo."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar infusiÃ³n continua de Inhibidor de Bomba de Protones a 8 mg/hora por 72 horas ininterrumpidas."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusiÃ³n intravenosa de Terlipresina u Octreotide por 3 a 5 dÃ­as y mantener IBP a necesidad.",
        distractorProfile: "wrong_bleeding_pathology",
        incorrectFeedback: "Los anÃ¡logos de la somatostatina (Octreotide) y la terlipresina actÃºan disminuyendo el flujo sanguÃ­neo esplÃ¡cnico; son la piedra angular de la hemorragia variceal, pero ineficaces en el sangrado arterial por Ãºlcera pÃ©ptica."
      },
      {
        id: "D",
        label: "D",
        text: "Suspender temporalmente el IBP y administrar Sucralfato lÃ­quido para crear una barrera fÃ­sica protectora sobre el clip.",
        distractorProfile: "outdated_barrier_agent",
        incorrectFeedback: "El sucralfato es un agente tÃ³pico ineficaz para estabilizar un coÃ¡gulo arterial en el lecho ulceroso frente a los efectos lÃ­ticos del Ã¡cido gÃ¡strico sostenido, careciendo de evidencia en guÃ­as modernas de sangrado agudo."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursÃ³ con una Hemorragia Digestiva Alta No Variceal por Ãºlcera pÃ©ptica con estigmas endoscÃ³picos de alto riesgo (Forrest I o IIa/IIb). La hemostasia endoscÃ³pica combinada fue exitosa. Sin embargo, para que el coÃ¡gulo plaquetario reciÃ©n formado no se degrade y se consolide, se requiere mantener el pH gÃ¡strico constantemente por encima de 6.0 (la pepsina y el Ã¡cido clorhÃ­drico destruyen los coÃ¡gulos a pH < 5.0). Las guÃ­as internacionales recomiendan fuertemente que TODOS los pacientes con Ãºlceras de alto riesgo (despuÃ©s del manejo endoscÃ³pico) reciban infusiÃ³n intravenosa continua de un IBP a dosis altas (8 mg/h) durante 72 horas, ya que esto ha demostrado reducir la tasa de resangrado, cirugÃ­a de rescate y mortalidad.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Recuerda que el cirujano y el endoscopista hacen el tapÃ³n mecÃ¡nico, pero la medicina interna protege ese tapÃ³n. Si le pasas el omeprazol a vÃ­a oral (OpciÃ³n A), el pH gÃ¡strico fluctuarÃ¡ por debajo de 4 durante la noche, el Ã¡cido digerirÃ¡ la fibrina del hemoclip y el paciente te harÃ¡ un resangrado masivo al tercer dÃ­a. La Terlipresina (OpciÃ³n C) se usa para las vÃ¡rices esofÃ¡gicas de los cirrÃ³ticos, no tiene rol clÃ­nico en la Ãºlcera pÃ©ptica gastroduodenal.",
    keyPoints: [
      "Ãšlcera pÃ©ptica sangrante activa (Forrest I) o con estigmas de alto riesgo (Forrest IIa: vaso visible, o IIb: coÃ¡gulo adherido).",
      "Post-terapia endoscÃ³pica exitosa.",
      "Mantener estricto soporte farmacolÃ³gico con IBP intravenoso en infusiÃ³n continua a 8 mg/hora durante las primeras 72 horas (el periodo de mÃ¡ximo riesgo de caÃ­da de la escara).",
      "Tema: Hemorragia Digestiva No Variceal."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-18",
    university: "UCC",
    examArea: "PediatrÃ­a / OncologÃ­a / Cuidado Intensivo",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "oncologia", "uci"],
    statement: "Un adolescente de 14 aÃ±os es traÃ­do a urgencias con un cuadro de 2 semanas de ortopnea, tos seca y edema facial que ha progresado rÃ¡pidamente. En las Ãºltimas 24 horas, el paciente asume espontÃ¡neamente una posiciÃ³n sentada e inclinada hacia adelante y presenta estridor inspiratorio. Al examen fÃ­sico: marcado edema en esclavina (cuello, cara y porciÃ³n superior del tÃ³rax), ingurgitaciÃ³n yugular sin colapso inspiratorio, y circulaciÃ³n colateral venosa en tÃ³rax. Una radiografÃ­a y TAC de tÃ³rax documentan una enorme masa mediastÃ­nica anterior que comprime la trÃ¡quea en mÃ¡s del 60% de su diÃ¡metro y obstruye la vena cava superior. El cirujano de tÃ³rax propone una mediastinoscopia y biopsia ganglionar bajo anestesia general para determinar si es un Linfoma o una Leucemia y guiar la terapia. Â¿CuÃ¡l es la conducta interdisciplinaria MÃS apropiada frente a esta propuesta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aceptar la propuesta quirÃºrgica para tener un reporte histolÃ³gico preciso que permita usar la quimioterapia especÃ­fica correcta.",
        distractorProfile: "naive_diagnostic_prioritization",
        incorrectFeedback: "Buscar el diagnÃ³stico histolÃ³gico perfecto mediante sedaciÃ³n/anestesia en un paciente con compresiÃ³n extrÃ­nseca crÃ­tica del 60% de la trÃ¡quea resultarÃ¡ en colapso irreversible de la vÃ­a aÃ©rea y muerte inmediata en quirÃ³fano."
      },
      {
        id: "B",
        label: "B",
        text: "Contraindicar absolutamente la anestesia general y la sedaciÃ³n profunda; se debe intentar una biopsia con anestesia local o instaurar manejo empÃ­rico de rescate con esteroides y radioterapia."
      },
      {
        id: "C",
        label: "C",
        text: "Proceder con la anestesia general asegurando previamente intubaciÃ³n orotraqueal con un tubo reforzado rÃ­gido para evitar el colapso.",
        distractorProfile: "mechanical_illusion_trap",
        incorrectFeedback: "La intubaciÃ³n orotraqueal no protege contra la compresiÃ³n del tumor que ocurre a nivel distal de la carina o bronquios principales; si la vÃ­a aÃ©rea inferior colapsa, la ventilaciÃ³n serÃ¡ imposible."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar drenaje pleural y pericÃ¡rdico de urgencia para aliviar el efecto restrictivo mediastÃ­nico antes de entrar al quirÃ³fano.",
        distractorProfile: "wrong_anatomic_compartment",
        incorrectFeedback: "Drenar derrames perifÃ©ricos no resuelve el problema anatÃ³mico restrictivo de una masa sÃ³lida central en el mediastino anterior, manteniendo invariable el riesgo de asfixia al momento de sedar."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un SÃ­ndrome de Vena Cava Superior y, mÃ¡s crÃ­ticamente, un SÃ­ndrome de Mediastino Medio/Anterior (compresiÃ³n crÃ­tica de la vÃ­a aÃ©rea). En pacientes pediÃ¡tricos con grandes masas mediastÃ­nicas (frecuentemente Linfoma T o LLA T), la sedaciÃ³n profunda, la anestesia general y el bloqueo neuromuscular son intervenciones de altÃ­simo riesgo de letalidad. Al relajar el tono muscular y la presiÃ³n negativa torÃ¡cica de la respiraciÃ³n espontÃ¡nea, el tumor aplasta por completo la trÃ¡quea y los grandes vasos de forma irreversible, produciendo un colapso de la vÃ­a aÃ©rea inintubable y un paro cardiorrespiratorio inanimable. Las guÃ­as oncolÃ³gicas prohÃ­ben la anestesia general en estos casos; si no es posible tomar muestra superficial (ej. ganglio supraclavicular o punciÃ³n pleural con anestesia local), se DEBE iniciar quimioterapia/esteroides de rescate \"a ciegas\" o radioterapia focalizada, y biopsiar 24-48 horas despuÃ©s cuando la masa haya reducido su tamaÃ±o.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Este es un terror clÃ¡sico de las UCI pediÃ¡tricas. Si el anestesiÃ³logo duerme a este adolescente, el mÃºsculo liso bronquial se relaja y los kilos de tumor caen directamente sobre la trÃ¡quea, cerrÃ¡ndola. Ni siquiera el mejor tubo endotraqueal podrÃ¡ pasar a travÃ©s de una masa tumoral sÃ³lida que aplasta la vÃ­a distal. Salvar la vida aquÃ­ implica decir \"No\" a la biopsia perfecta y darle megadosis de Metilprednisolona empÃ­rica. El linfoma \"se derrite\" casi milagrosamente en 12 horas con corticoides, permitiendo respirar al paciente para que luego se haga la biopsia segura.",
    keyPoints: [
      "Adolescente con gran masa mediastÃ­nica anterior + SÃ­ndrome de Vena Cava Superior y Estridor/Ortopnea.",
      "Propuesta de realizar procedimientos bajo anestesia general o intubaciÃ³n.",
      "Peligro inminente de muerte por colapso de vÃ­a aÃ©rea (SÃ­ndrome de Masa MediastÃ­nica). ContraindicaciÃ³n absoluta de sedaciÃ³n y bloqueo neuromuscular.",
      "Tema: Urgencias OncolÃ³gicas PediÃ¡tricas."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-19",
    university: "UCC",
    examArea: "Medicina Interna / EndocrinologÃ­a / Urgencias",
    topic: "EndocrinologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia", "urgencias"],
    statement: "Mujer de 30 aÃ±os, previamente sana, es traÃ­da por el servicio prehospitalario en estado de choque profundo. Relatan un cuadro de 3 dÃ­as de dolor abdominal inespecÃ­fico, vÃ³mitos repetidos, fatiga extrema y fiebre leve. Al examen fÃ­sico: estuporosa, PA 75/40 mmHg (refractaria a dos bolos de 1 litro de SSN), FC 115 lpm. Llama poderosamente la atenciÃ³n una marcada hiperpigmentaciÃ³n marrÃ³n-grisÃ¡cea en la mucosa oral, encÃ­as, pliegues palmares y cicatrices antiguas. Laboratorios de urgencia: Sodio sÃ©rico 126 mEq/L, Potasio sÃ©rico 6.2 mEq/L, Glucemia 55 mg/dL. Se sospecha una insuficiencia suprarrenal aguda (Crisis Addisoniana). Â¿CuÃ¡l es la intervenciÃ³n de diagnÃ³stico y tratamiento INMEDIATO MÃS adecuada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar una prueba de estimulaciÃ³n con ACTH (Cosintropina) rÃ¡pida y esperar los resultados del cortisol a los 30 y 60 minutos antes de administrar fÃ¡rmacos.",
        distractorProfile: "diagnostic_delay_in_shock",
        incorrectFeedback: "La prueba de estimulaciÃ³n es el estÃ¡ndar diagnÃ³stico ambulatorio; esperar una o dos horas sus resultados en una paciente chocada conlleva un riesgo altÃ­simo de muerte vascular inminente por colapso catecolaminÃ©rgico."
      },
      {
        id: "B",
        label: "B",
        text: "Extraer muestra basal para ACTH y cortisol sÃ©rico, e iniciar de inmediato bolos de Hidrocortisona intravenosa (100 mg) y cristaloides continuos."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Fludrocortisona por sonda nasogÃ¡strica para corregir la hiperkalemia, y adicionar Levotiroxina por sospecha de un sÃ­ndrome poliglandular.",
        distractorProfile: "wrong_drug_and_route",
        incorrectFeedback: "La fludrocortisona oral es para mantenimiento crÃ³nico de la deficiencia mineralocorticoide, pero carece de la potencia vascular aguda que ofrece el efecto glucocorticoide parenteral de la hidrocortisona en medio de un choque."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Norepinefrina en infusiÃ³n continua debido al estado de choque refractario y posponer el manejo esteroideo.",
        distractorProfile: "ineffective_vasopressor_without_steroids",
        incorrectFeedback: "En la crisis adrenal, hay una depleciÃ³n profunda de los receptores alfa-adrenÃ©rgicos vasculares; la norepinefrina no funcionarÃ¡ (el vaso no aprieta) si no se repone primero el cortisol sÃ©rico que es quien mantiene activo al receptor."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro de hiperpigmentaciÃ³n de mucosas/pliegues asocia el origen del problema a una Insuficiencia Adrenal Primaria (Enfermedad de Addison), donde la ACTH endÃ³gena se eleva compensatoriamente y estimula los melanocitos. El estrÃ©s del vÃ³mito desatÃ³ una Crisis Adrenal Aguda, caracterizada por choque refractario a volumen, hiponatremia, hiperkalemia e hipoglucemia (dÃ©ficit dual de glucocorticoides y mineralocorticoides). En una crisis adrenal, la administraciÃ³n de esteroides salva la vida y nunca debe demorarse. La tÃ©cnica perfecta es: pinchar la vena, extraer el tubo rojo para medir los niveles de ACTH y cortisol basal (para que el endocrinÃ³logo luego confirme el diagnÃ³stico con tranquilidad) e inyectar por la misma vÃ­a 100 mg de Hidrocortisona IV instantÃ¡neamente. No se espera a realizar pruebas dinÃ¡micas.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Esta pregunta penaliza al mÃ©dico pasivo. La prueba de estimulaciÃ³n con Cosintropina (OpciÃ³n A) es el estÃ¡ndar de oro diagnÃ³stico de la Enfermedad de Addison de manera ambulatoria, pero hacerla en la cama de urgencias mientras la paciente estÃ¡ chocada a 75/40 es absurdo. Tomas el nivel basal e infundes el esteroide. Y recuerda, la Hidrocortisona a altas dosis (>50 mg) ejerce efecto cruzado potente sobre el receptor mineralocorticoide, por lo que retendrÃ¡ sodio y excretarÃ¡ potasio sin necesidad de dar Fludrocortisona aguda.",
    keyPoints: [
      "Paciente con hiperpigmentaciÃ³n cutÃ¡nea/mucosa que ingresa en choque refractario a volumen.",
      "Laboratorios: Hiponatremia + Hiperkalemia + Hipoglucemia.",
      "Crisis Adrenal por Enfermedad de Addison. Sacar sangre para medir Cortisol/ACTH basales e inyectar Hidrocortisona 100 mg IV inmediatamente.",
      "Tema: Crisis Adrenal / Insuficiencia Suprarrenal."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-20",
    university: "UCC",
    examArea: "PediatrÃ­a / InfectologÃ­a / Urgencias",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "urgencias"],
    statement: "NiÃ±o de 4 aÃ±os, asiste a guarderÃ­a, es llevado a urgencias por fiebre de inicio sÃºbito (40.2Â°C) hace 12 horas, letargo severo y dolor en extremidades. Al ingreso: luce tÃ³xico, estuporoso, PA 70/45 mmHg, FC 158 lpm, llenado capilar de 5 segundos. Durante la evaluaciÃ³n fÃ­sica, el mÃ©dico nota la rÃ¡pida apariciÃ³n de mÃºltiples mÃ¡culas eritematosas que en cuestiÃ³n de minutos evolucionan a petequias diseminadas en el tronco, paladar y conjuntivas, fusionÃ¡ndose en el miembro inferior derecho en una placa equimÃ³tica grande de color pÃºrpura oscuro con centro necrÃ³tico. Â¿CuÃ¡l es el paso INMEDIATO de intervenciÃ³n mÃ©dica que dicta el estÃ¡ndar de reanimaciÃ³n?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar hemograma con recuento de plaquetas y pruebas de coagulaciÃ³n para confirmar CoagulaciÃ³n Intravascular Diseminada antes de intervenir.",
        distractorProfile: "catastrophic_laboratory_delay",
        incorrectFeedback: "La meningococcemia mata en cuestiÃ³n de horas. Retrasar la administraciÃ³n del antibiÃ³tico bactericida para esperar la confirmaciÃ³n laboratorial de una coagulopatÃ­a que ya es clÃ­nicamente obvia asegura el fallecimiento del menor."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar de forma urgente un bolo de Ceftriaxona intravenosa (o intraÃ³sea) incluso antes de intentar una punciÃ³n lumbar."
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
        text: "Instaurar plasmafÃ©resis de emergencia e Inmunoglobulina IV debido a la sospecha de vasculitis fulminante autoinmune.",
        distractorProfile: "misdiagnosis_autoimmune_vs_sepsis",
        incorrectFeedback: "La pÃºrpura fulminans febril de instauraciÃ³n hiperaguda en un niÃ±o previamente sano es un cuadro bacteriano sÃ©ptico directo hasta que se demuestre lo contrario; la plasmafÃ©resis como terapia autoinmune es errÃ³nea aquÃ­."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente estÃ¡ cursando con Meningococcemia (Sepsis por *Neisseria meningitidis*) manifestada en su forma mÃ¡s letal: PÃºrpura Fulminans (PÃºrpura y necrosis cutÃ¡nea masiva secundaria a CID y trombosis capilar) y choque distributivo profundo (SÃ­ndrome de Waterhouse-Friderichsen si compromete las suprarrenales). La mortalidad de la meningococcemia fulminante aumenta hora tras hora si no se inicia el tratamiento. El estÃ¡ndar de cuidado absoluto mundial exige la administraciÃ³n INMEDIATA de un antibiÃ³tico bactericida de amplio espectro (Ceftriaxona o Cefotaxime) por vÃ­a intravenosa, intraÃ³sea (o intramuscular si no hay acceso disponible aÃºn), como primera orden en reanimaciÃ³n. Las neuroimÃ¡genes o punciones lumbares quedan en segundo plano en esta fase de inestabilidad masiva.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, en pediatrÃ­a la PÃºrpura Fulminans es la pesadilla del triaje. Si un niÃ±o entra con fiebre y le ves una sola petequia que no palidece a la presiÃ³n, no lo sacas de tus ojos. El meningococo se multiplica a una velocidad asombrosa. Esperar laboratorios de coagulaciÃ³n (OpciÃ³n A) es regalarle al meningococo el tiempo que necesita para necrosar las cuatro extremidades del niÃ±o y hacer que pierda los dedos o la vida. Se infunde Ceftriaxona mientras corren los cristaloides, y no importa si la punciÃ³n lumbar se retrasa dÃ­as.",
    keyPoints: [
      "NiÃ±o o joven con fiebre brusca, toxicidad sistÃ©mica extrema y choque.",
      "Exantema petequial que progresa en minutos/horas a equimosis purpÃºricas de gran tamaÃ±o (PÃºrpura Fulminans).",
      "Sepsis MeningocÃ³cica. El tratamiento es dar AntibiÃ³tico IV (Ceftriaxona) en el primer minuto en que se canalice la vena o el hueso. Es un cÃ³digo rojo infectolÃ³gico.",
      "Tema: Enfermedad MeningocÃ³cica."
    ]
  }
];

