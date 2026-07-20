import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC â€” EdiciÃ³n #3 (19 jul 2025) Â· Preguntas #81â€“#90.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_81_90_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-81",
    university: "UCC",
    examArea: "Medicina Interna / CardiologÃ­a / FarmacologÃ­a",
    topic: "CardiologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "farmacologia"],
    statement: "Mujer de 45 aÃ±os, con antecedente de Trastorno Depresivo Mayor en manejo crÃ³nico con Citalopram a dosis altas (40 mg/dÃ­a), acude a urgencias por un cuadro de neumonÃ­a atÃ­pica para la cual su mÃ©dico general le prescribiÃ³ Azitromicina oral hace 3 dÃ­as. Hoy es traÃ­da por presentar dos episodios de sÃ­ncope estando en reposo. Al ingreso en urgencias, la paciente se encuentra obnubilada, pÃ¡lida y diaforÃ©tica. El monitor electrocardiogrÃ¡fico muestra mÃºltiples salvas de una taquicardia ventricular polimÃ³rfica que gira sobre su propio eje isoelÃ©ctrico, a una frecuencia de 220 lpm. Durante la salva (que dura 15 segundos y revierte espontÃ¡neamente), la presiÃ³n arterial cae a 60/40 mmHg. Entre los episodios, la paciente recupera el ritmo sinusal, pero se observa un intervalo QTc de 580 ms. Los electrolitos sÃ©ricos (Potasio, Calcio, Magnesio) se encuentran en rangos de estricta normalidad. Â¿CuÃ¡l es el tratamiento INMEDIATO de elecciÃ³n para prevenir un nuevo episodio letal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "CardioversiÃ³n elÃ©ctrica sincronizada con 100 Joules.",
        distractorProfile: "premature_electrical_therapy",
        incorrectFeedback: "La cardioversiÃ³n/desfibrilaciÃ³n estÃ¡ indicada SOLO si la Torsades de Pointes degenera en FibrilaciÃ³n Ventricular sostenida sin pulso o produce un choque hemodinÃ¡mico irreversible continuo. En salvas autolimitadas, la correcciÃ³n iÃ³nica (Magnesio) es la prioridad preventiva."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Amiodarona intravenosa (bolo de 150 mg) para estabilizar el ritmo ventricular.",
        distractorProfile: "deadly_antiarrhythmic_choice",
        incorrectFeedback: "La Amiodarona es el fÃ¡rmaco de elecciÃ³n para la TV monomÃ³rfica, pero estÃ¡ ABSOLUTAMENTE CONTRAINDICADA en la TV polimÃ³rfica tipo Torsades de Pointes porque prolonga de forma potente el intervalo QT, agravando la arritmia letal."
      },
      {
        id: "C",
        label: "C",
        text: "InfusiÃ³n intravenosa de Sulfato de Magnesio (1 a 2 gramos), independientemente del valor de magnesio sÃ©rico."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar un bolo de LidocaÃ­na y suspender de inmediato el Citalopram y la Azitromicina.",
        distractorProfile: "secondary_alternative_error",
        incorrectFeedback: "Suspender los fÃ¡rmacos gatillo es obligatorio, pero la lidocaÃ­na es solo una medida de tercera lÃ­nea de escasa eficacia en Torsades de Pointes si no se ha administrado primero el Sulfato de Magnesio."
      }
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta *Torsades de Pointes* (TorsiÃ³n de Puntas), una taquicardia ventricular polimÃ³rfica patognomÃ³nicamente desencadenada por la prolongaciÃ³n del intervalo QT. La etiologÃ­a en este caso es farmacolÃ³gica: una interacciÃ³n letal entre dos fÃ¡rmacos prolongadores del QT ampliamente conocidos (Citalopram y un macrÃ³lido como la Azitromicina). El tratamiento de primera lÃ­nea y salvavidas absoluto para prevenir las recurrencias de Torsades de Pointes en un paciente que aÃºn tiene pulso y recupera el ritmo es la administraciÃ³n de **Sulfato de Magnesio intravenoso**, sin importar que los niveles de magnesio en sangre del paciente sean normales. El magnesio actÃºa estabilizando los canales iÃ³nicos transmembrana (bloquea la entrada temprana de calcio) y previene las post-despolarizaciones tempranas que gatillan la arritmia.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, aquÃ­ hay dos trampas venenosas. La primera es la Amiodarona (OpciÃ³n B): en la vida real, si el mÃ©dico ve \"taquicardia ventricular\" y pone Amiodarona, estÃ¡ inyectando un antiarrÃ­tmico de clase III (bloqueador de canales de potasio) que prolonga masivamente el QT. Al hacer eso, la paciente entrarÃ¡ en FibrilaciÃ³n Ventricular intratable y morirÃ¡ en la camilla. La segunda trampa es el choque elÃ©ctrico (OpciÃ³n A): solo chocamos o desfibrilamos la Torsades de Pointes si la paciente se queda SIN PULSO o el ritmo no revierte y colapsa. Si entra y sale de la arritmia de forma paroxÃ­stica, el choque no curarÃ¡ el QT largo de base; el Sulfato de Magnesio es la Ãºnica bala de plata.",
    keyPoints: [
      "Paciente polimedicado (Antidepresivos, AntipsicÃ³ticos, MacrÃ³lidos, Fluoroquinolonas, OndansetrÃ³n).",
      "SÃ­ncope + Torsades de Pointes (Taquicardia polimÃ³rfica que \"gira\" en el monitor).",
      "QTc basal prolongado (> 450 ms en hombres o > 470 ms en mujeres).",
      "Sulfato de Magnesio IV inmediato. NUNCA usar Amiodarona (porque prolonga aÃºn mÃ¡s el QT).",
      "Tema: Arritmias Ventriculares / Torsades de Pointes."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-82",
    university: "UCC",
    examArea: "PediatrÃ­a / NeonatologÃ­a / CirugÃ­a",
    topic: "CirugÃ­a PediÃ¡trica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neonatologia", "cirugia"],
    statement: "ReciÃ©n nacido pretÃ©rmino (35 semanas), producto de un embarazo complicado con polihidramnios severo diagnosticado en el tercer trimestre. En la sala de partos, el neonato presenta sialorrea abundante y babeo espumoso continuo por la boca (\"hace burbujas\"). En su primer intento de alimentaciÃ³n al pecho materno, el bebÃ© tose enÃ©rgicamente, se atraganta y presenta un episodio de cianosis profunda que requiere estimulaciÃ³n. El pediatra intenta pasar una sonda orogÃ¡strica calibre 8 Fr, pero esta encuentra un tope elÃ¡stico a los 10 cm de la arcada dentaria y no logra avanzar al estÃ³mago. Una radiografÃ­a toracoabdominal muestra la sonda enrollada en el bolsÃ³n esofÃ¡gico superior, pero se observa una burbuja gÃ¡strica francamente prominente y abundante aire en el intestino. Â¿CuÃ¡l es la variante anatÃ³mica MÃS probable y su implicaciÃ³n respiratoria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Atresia esofÃ¡gica pura (Tipo A); el aire intestinal proviene de degluciÃ³n intrauterina previa.",
        distractorProfile: "radiographic_impossibility",
        incorrectFeedback: "En la atresia esofÃ¡gica pura (Tipo A), sin ninguna fÃ­stula asociada, el aire inspirado no tiene ninguna vÃ­a anatÃ³mica para alcanzar el estÃ³mago; la radiografÃ­a mostrarÃ­a invariablemente un abdomen completamente opaco y sin gas (gasless abdomen)."
      },
      {
        id: "B",
        label: "B",
        text: "Atresia esofÃ¡gica con fÃ­stula traqueoesofÃ¡gica distal (Tipo C); alto riesgo de neumonitis quÃ­mica por reflujo de Ã¡cido gÃ¡strico hacia los pulmones."
      },
      {
        id: "C",
        label: "C",
        text: "FÃ­stula traqueoesofÃ¡gica en \"H\" (Tipo E) sin atresia; la sonda se enrollÃ³ por espasmo del esfÃ­nter esofÃ¡gico inferior.",
        distractorProfile: "clinical_and_anatomic_mismatch",
        incorrectFeedback: "La fÃ­stula en \"H\" permite el paso libre de una sonda orogÃ¡strica hasta el estÃ³mago sin enrollarse, ya que el esÃ³fago es patente en toda su extensiÃ³n. Su sÃ­ntoma principal es la neumonÃ­a aspirativa recurrente y episodios de asfixia al comer, pero no babeo masivo ni imposibilidad de pasar sonda."
      },
      {
        id: "D",
        label: "D",
        text: "Atresia esofÃ¡gica con fÃ­stula traqueoesofÃ¡gica proximal (Tipo B); el aire abdominal refleja perforaciÃ³n gÃ¡strica intrauterina.",
        distractorProfile: "rare_variant_and_wrong_physiopathology",
        incorrectFeedback: "La variante Tipo B tiene fÃ­stula desde la trÃ¡quea hacia el bolsÃ³n esofÃ¡gico SUPERIOR. Al igual que el Tipo A, carece de conexiÃ³n traqueal con el estÃ³mago inferior, por lo que su radiografÃ­a tambiÃ©n serÃ­a un \"abdomen sin gas\"."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Atresia EsofÃ¡gica, evidenciada por la sialorrea masiva (incapacidad para tragar la propia saliva), el atragantamiento inmediato al comer y la imposibilidad de pasar una sonda orogÃ¡strica (se enrolla en el fondo de saco ciego superior). Existen 5 tipos de Atresia EsofÃ¡gica. La presencia masiva de AIRE EN EL ESTÃ“MAGO y los intestinos (burbuja gÃ¡strica en la radiografÃ­a) en un niÃ±o que tiene el esÃ³fago superior totalmente cerrado, indica que el aire respirado estÃ¡ llegando al estÃ³mago a travÃ©s de una comunicaciÃ³n (fÃ­stula) entre la trÃ¡quea y el esÃ³fago inferior. Esta es la **Atresia EsofÃ¡gica Tipo C (Atresia proximal con fÃ­stula distal)**, la variante mÃ¡s comÃºn (85% de los casos). El mayor peligro letal de esta configuraciÃ³n no es la desnutriciÃ³n, sino que el Ã¡cido gÃ¡strico del estÃ³mago refluye libremente por el esÃ³fago inferior, cruza la fÃ­stula y entra directamente al Ã¡rbol traqueobronquial, causando una neumonitis quÃ­mica y sepsis pulmonar masiva.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** La clÃ­nica es de libro, pero la radiografÃ­a deprime los errores. Si el esÃ³fago estÃ¡ cerrado arriba (la sonda se enrolla), la Ãºnica forma fÃ­sica en el universo para que haya gas en el estÃ³mago es que haya un tubo conectando los pulmones (llenos de aire) con el estÃ³mago. Esa es la fÃ­stula traqueoesofÃ¡gica distal (Tipo C). Si marcas la Atresia pura (OpciÃ³n A), el abdomen en la radiografÃ­a se verÃ­a completamente blanco, opaco, sin una sola burbuja de gas, porque nada conecta al estÃ³mago con el exterior. La prevenciÃ³n es posicionar al bebÃ© con la cabeza elevada a 45 grados para que la gravedad mantenga el Ã¡cido gÃ¡strico abajo y no inunde los pulmones a travÃ©s de la fÃ­stula.",
    keyPoints: [
      "Polihidramnios materno + Neonato con babeo espumoso y atragantamiento con la primera toma.",
      "Sonda orogÃ¡strica que \"no pasa\" y se enrolla en el tÃ³rax superior.",
      "Rx de abdomen CON mucho aire gÃ¡strico = Tipo C (fÃ­stula distal). Rx SIN aire (abdomen opaco) = Tipo A (Atresia pura).",
      "Atresia EsofÃ¡gica Tipo C. El manejo inicial requiere dejar una sonda a succiÃ³n continua en el bolsÃ³n superior, posiciÃ³n semisentada y cirugÃ­a urgente. Nunca hacer estudios con contraste baritado.",
      "Tema: CirugÃ­a Neonatal / Atresia EsofÃ¡gica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-83",
    university: "UCC",
    examArea: "Medicina Interna / NefrologÃ­a / FarmacologÃ­a",
    topic: "NefrologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "nefrologia", "farmacologia"],
    statement: "Un hombre de 62 aÃ±os, deportista amateur, acude a la consulta externa quejÃ¡ndose de la apariciÃ³n reciente de un edema severo en miembros inferiores (hasta los muslos), orina \"extremadamente espumosa\" y astenia. Refiere haber estado consumiendo Dosis Altas de Naproxeno (1000 mg/dÃ­a) e Ibuprofeno durante los Ãºltimos 4 meses debido a una tendinitis rotuliana crÃ³nica. Al examen fÃ­sico: PA 140/85 mmHg, edema grado III/IV con fÃ³vea, anasarca incipiente. ParaclÃ­nicos: Creatinina sÃ©rica 1.3 mg/dL, AlbÃºmina sÃ©rica 1.9 g/dL. Parcial de orina: ProteÃ­nas > 300 mg/dL (proteinuria masiva en orina de 24h: 9.5 gramos), sedimento urinario estrictamente normal, sin hematuria y sin cilindros. Tiempos de coagulaciÃ³n y complemento normales. Se le practica una biopsia renal. El reporte de microscopÃ­a Ã³ptica es normal (sin inflamaciÃ³n ni cicatrices glomerulares). Â¿QuÃ© hallazgo especÃ­fico se documentarÃ¡ de forma ineludible en la MicroscopÃ­a ElectrÃ³nica (ME) para confirmar la glomerulopatÃ­a inducida por AINEs en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "DepÃ³sitos subepiteliales densos en forma de \"jorobas\" (humps).",
        distractorProfile: "post-infectious_glomerulonephritis_trap",
        incorrectFeedback: "Las \"jorobas\" subepiteliales a la microscopÃ­a electrÃ³nica son patognomÃ³nicas de la Glomerulonefritis Postinfecciosa (PostestreptocÃ³cica), la cual debuta clÃ¡sicamente como un sÃ­ndrome nefrÃ­tico impuro (con hematuria macroscÃ³pica y falla renal aguda), no como un nefrÃ³tico puro inducido por fÃ¡rmacos."
      },
      {
        id: "B",
        label: "B",
        text: "Borramiento extenso, fusiÃ³n o fusiÃ³n de los pedicelos (procesos podocitarios) de las cÃ©lulas epiteliales viscerales."
      },
      {
        id: "C",
        label: "C",
        text: "Engrosamiento masivo de la membrana basal con depÃ³sitos de amiloide.",
        distractorProfile: "wrong_protein_deposition_disease",
        incorrectFeedback: "La amiloidosis causa sÃ­ndrome nefrÃ³tico en adultos, pero cursa con depÃ³sitos que son francamente visibles a la microscopÃ­a Ã³ptica (material amorfo eosinÃ³filo que tiÃ±e rojo congo positivo y da birrefringencia verde manzana), contradiciendo el reporte de MO normal de la viÃ±eta."
      },
      {
        id: "D",
        label: "D",
        text: "Presencia de semilunas celulares y fibrinosas en el espacio de Bowman.",
        distractorProfile: "rp_glomerulonephritis_trap",
        incorrectFeedback: "Las semilunas (crescentes) son el marcador de la Glomerulonefritis RÃ¡pidamente Progresiva; se evidencian claramente en la microscopÃ­a Ã³ptica y cursan con hematuria, sedimento activo y falla renal terminal en semanas, cuadro ausente en este paciente."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un SÃ­ndrome NefrÃ³tico puro (proteinuria masiva >3.5g, hipoalbuminemia severa y edema, sin hematuria). La asociaciÃ³n clÃ¡sica, peculiar y altamente evaluada entre el uso crÃ³nico o abusivo de Antiinflamatorios No Esteroideos (AINEs) y el sÃ­ndrome nefrÃ³tico masivo en adultos es el desarrollo de la **Enfermedad de Cambios MÃ­nimos (ECM)**, a menudo coexistiendo con episodios de Nefritis Intersticial Aguda. En la Enfermedad de Cambios MÃ­nimos, la microscopÃ­a Ã³ptica (convencional) y la inmunofluorescencia son, por definiciÃ³n, completamente NORMALES. La Ãºnica alteraciÃ³n patolÃ³gica reside a nivel ultramicroscÃ³pico: la microscopÃ­a electrÃ³nica demuestra la pÃ©rdida, borramiento, fusiÃ³n o retracciÃ³n (effacement) de los pedicelos de los podocitos, lo que arruina la barrera de filtraciÃ³n de cargas negativas y deja escapar masivamente la albÃºmina a la orina.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, la trampa aquÃ­ es creer que la Enfermedad de Cambios MÃ­nimos es exclusiva de la pediatrÃ­a. Si bien es el 90% de los nefrÃ³ticos en niÃ±os, en adultos suele presentarse asociada a dos grandes gatillos (y a los examinadores les encanta preguntarlos): Los AINEs a dosis tÃ³xicas y el Linfoma de Hodgkin. FÃ­jate en los distractores: las \"jorobas\" o humps (OpciÃ³n A) son el sello de la Glomerulonefritis PostestreptocÃ³cica, la cual darÃ­a hematuria y C3 bajo. Las semilunas (OpciÃ³n D) dan falla renal rÃ¡pida y hematuria. Si el riÃ±Ã³n se ve \"sano\" en el microscopio normal pero bota 9 gramos de proteÃ­nas, el daÃ±o es subcelular (podocitario).",
    keyPoints: [
      "Adulto con SÃ­ndrome NefrÃ³tico masivo (>8 gramos de proteÃ­nas) DE INICIO ABRUPTO, sin hematuria.",
      "Fuerte antecedente de consumo de AINEs (Naproxeno, Ibuprofeno) o antecedente de Linfoma de Hodgkin.",
      "Biopsia renal que reporta \"MicroscopÃ­a Ã“ptica normal\".",
      "Enfermedad de Cambios MÃ­nimos inducida por fÃ¡rmacos/paraneoplÃ¡sica. Sello histolÃ³gico en M.E.: Borramiento/FusiÃ³n de podocitos (pedicelos). Responde mÃ¡gicamente a retirar el AINE y dar esteroides.",
      "Tema: GlomerulopatÃ­as Primarias / Enfermedad de Cambios MÃ­nimos."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-84",
    university: "UCC",
    examArea: "PediatrÃ­a / InfectologÃ­a / NeurologÃ­a",
    topic: "InfectologÃ­a PediÃ¡trica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "neurologia"],
    statement: "Un niÃ±o de 6 aÃ±os, con diagnÃ³stico conocido de TetralogÃ­a de Fallot no corregida (con cianosis crÃ³nica y saturaciones basales de 82%), es llevado a urgencias por un cuadro de 3 dÃ­as de fiebre persistente de 38.5Â°C, cefalea matutina intensa, vÃ³mitos y cambios en el comportamiento (marcada somnolencia). Hoy en la maÃ±ana presentÃ³ una convulsiÃ³n focal motora en la mano y hemicara derecha. Al examen fÃ­sico: obnubilado, febril, SatO2 80% al aire ambiente, hemiparesia derecha 3/5 y edema de papila bilateral. Se realiza una TomografÃ­a Computarizada (TC) de crÃ¡neo con contraste que evidencia una lesiÃ³n Ãºnica de 3 cm en el lÃ³bulo frontal izquierdo, redondeada, con un marcado realce en forma de anillo y extenso edema vasogÃ©nico perilesional. Â¿CuÃ¡l es la fisiopatologÃ­a MÃS probable de esta lesiÃ³n y los microorganismos etiolÃ³gicos que DEBEN cubrirse empÃ­ricamente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "EmbolizaciÃ³n asÃ©ptica por endocarditis trombÃ³tica no bacteriana (marÃ¡ntica); no requiere antibiÃ³ticos, solo anticoagulaciÃ³n y cirugÃ­a cardÃ­aca.",
        distractorProfile: "wrong_pathology_oncologic_overlap",
        incorrectFeedback: "La endocarditis marÃ¡ntica se asocia a estados de hipercoagulabilidad en neoplasias malignas avanzadas (adenocarcinomas) o lupus, pero produce infartos cerebrales isquÃ©micos mÃºltiples sin fiebre alta, no una gran lesiÃ³n purulenta con realce en anillo y edema masivo."
      },
      {
        id: "B",
        label: "B",
        text: "DiseminaciÃ³n hematÃ³gena de un embolismo bacteriano paradÃ³jico (Absceso Cerebral); la terapia empÃ­rica de elecciÃ³n es Ceftriaxona o Cefotaxima asociada a Metronidazol."
      },
      {
        id: "C",
        label: "C",
        text: "ReactivaciÃ³n de un tuberculoma del sistema nervioso central secundario a hipoxia crÃ³nica; requiere esquema antituberculoso HRZE inmediato.",
        distractorProfile: "epidemiologic_overlap",
        incorrectFeedback: "El tuberculoma cerebral puede realzar en anillo, pero tÃ­picamente tiene un curso subagudo/crÃ³nico de semanas a meses con sÃ­ntomas constitucionales profundos, y no es la complicaciÃ³n directa hiperaguda de un cortocircuito de derecha a izquierda."
      },
      {
        id: "D",
        label: "D",
        text: "Ruptura de un aneurisma micÃ³tico por endocarditis; el tratamiento empÃ­rico de elecciÃ³n es la Vancomicina aislada a altas dosis.",
        distractorProfile: "endocarditis_complication_mismatch",
        incorrectFeedback: "La ruptura de un aneurisma micÃ³tico causa una hemorragia intracerebral o subaracnoidea catastrÃ³fica, la cual se verÃ­a hiperdensa/blanca en la TAC simple, en lugar del patrÃ³n quÃ­stico-purulento con realce en anillo perifÃ©rico propio del absceso parenquimatoso."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Absceso Cerebral agudo. Los niÃ±os con CardiopatÃ­as CongÃ©nitas CianÃ³genas (como la TetralogÃ­a de Fallot, que cursa con un cortocircuito de derecha a izquierda intracardÃ­aco masivo) tienen un riesgo astronÃ³micamente alto de desarrollar abscesos cerebrales. FisiopatolÃ³gicamente, las bacterias transitorias en la sangre venosa (usualmente flora oral como *Streptococcus spp.* o anaerobios tras el cepillado dental) cruzan la comunicaciÃ³n interventricular directamente hacia la circulaciÃ³n sistÃ©mica y el cerebro, **saltÃ¡ndose o esquivando el lecho capilar pulmonar** (el cual normalmente actÃºa como un filtro fagocÃ­tico gigantesco que esteriliza la sangre venosa). La imagen de \"realce en anillo\" con edema y focalizaciÃ³n es la firma del absceso. La punciÃ³n lumbar estÃ¡ contraindicada por riesgo de herniaciÃ³n. El tratamiento empÃ­rico mandatorio requiere penetraciÃ³n de la barrera hematoencefÃ¡lica y cobertura para flora oral/anaerobios y bacilos entÃ©ricos: Cefalosporina de 3Âª generaciÃ³n (Ceftriaxona) + Metronidazol (asociando Vancomicina si hay sospecha de S. aureus o trauma/cirugÃ­a previa).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Un escenario fascinante donde la cardiologÃ­a explica la infectologÃ­a. Â¿Por quÃ© un niÃ±o sano rara vez hace un absceso cerebral de la nada, pero el niÃ±o con Fallot sÃ­? Porque en el niÃ±o sano, cualquier bacteria que entra por una encÃ­a sangrante viaja por las venas hasta los pulmones; allÃ­, los macrÃ³fagos alveolares se la comen antes de que llegue a la aorta. En el Fallot, la bacteria llega al ventrÃ­culo derecho y, debido a la estenosis pulmonar, cruza por el hueco del tabique (CIV) directo a la aorta y sube al cerebro sin haber tocado los pulmones. Esa es la embolia paradÃ³jica. Cubrir los anaerobios (Metronidazol) es la clave porque las bacterias provienen mayormente de hendiduras gingivales sin oxÃ­geno.",
    keyPoints: [
      "NiÃ±o con CardiopatÃ­a CianÃ³gena (TetralogÃ­a de Fallot, TGA) o MAV pulmonar.",
      "TrÃ­ada: Fiebre + Cefalea/VÃ³mitos (HIC) + DÃ©ficit NeurolÃ³gico Focal o ConvulsiÃ³n focal.",
      "TAC: LesiÃ³n que realza en anillo con edema vasogÃ©nico perilesional.",
      "Absceso Cerebral por Embolismo ParadÃ³jico (se salta el filtro pulmonar). NO hacer PunciÃ³n Lumbar. Cobertura empÃ­rica urgente con Ceftriaxona + Metronidazol.",
      "Tema: NeuroinfecciÃ³n / Absceso Cerebral PediÃ¡trico."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-85",
    university: "UCC",
    examArea: "Medicina Interna / EndocrinologÃ­a / Urgencias",
    topic: "EndocrinologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia", "urgencias"],
    statement: "Hombre de 75 aÃ±os, diabÃ©tico tipo 2, es traÃ­do a urgencias en estado de coma. Su familia refiere que vive solo y ha estado sufriendo de una gastroenteritis viral severa (vÃ³mitos y diarrea) en las Ãºltimas 72 horas que le ha impedido comer. A pesar del ayuno, el paciente continuÃ³ tomando su medicaciÃ³n antidiabÃ©tica de base, Glibenclamida (10 mg/dÃ­a). Al ingreso: Glasgow 6/15, diaforÃ©tico, taquicÃ¡rdico (FC 115 lpm). Se toma una glucometrÃ­a capilar que marca 30 mg/dL. Inmediatamente se administra un bolo de 50 mL de Dextrosa al 50% (DAD 50%), y el paciente despierta conversando a los 5 minutos (Glucosa 110 mg/dL). Sin embargo, a pesar de iniciar una infusiÃ³n de Dextrosa al 10% de mantenimiento y brindarle dieta oral, el paciente vuelve a caer en estupor a las dos horas (GlucometrÃ­a 35 mg/dL). Ante la hipoglucemia severa y refractaria inducida por sulfonilureas, Â¿cuÃ¡l es el antÃ­doto farmacolÃ³gico MÃS adecuado para frenar el hiperinsulinismo sostenido?",
    options: [
      {
        id: "A",
        label: "A",
        text: "GlucagÃ³n intravenoso o intramuscular en bolos repetidos.",
        distractorProfile: "empty_glycogen_stores_trap",
        incorrectFeedback: "El glucagÃ³n eleva la glucemia induciendo glucogenÃ³lisis hepÃ¡tica. En un paciente que lleva 72 horas en ayuno y vÃ³mito por gastroenteritis, las reservas de glucÃ³geno estÃ¡n nulas, por lo que el glucagÃ³n serÃ¡ ineficaz. AdemÃ¡s, el glucagÃ³n tambiÃ©n tiene un efecto insulinotrÃ³pico paradÃ³jico leve."
      },
      {
        id: "B",
        label: "B",
        text: "InfusiÃ³n intravenosa de Octreotide (AnÃ¡logo de Somatostatina)."
      },
      {
        id: "C",
        label: "C",
        text: "Bolos repetidos de Dextrosa al 50% (DAD 50%) cada hora hasta la eliminaciÃ³n renal del fÃ¡rmaco oral.",
        distractorProfile: "destructive_rollercoaster_management",
        incorrectFeedback: "Administrar bolos repetidos de DAD 50% exacerba enormemente el pico de secreciÃ³n insulÃ­nica endÃ³gena (efecto rebote), provoca esclerosis y trombosis de las venas perifÃ©ricas, e induce un daÃ±o neurolÃ³gico secundario a las drÃ¡sticas oscilaciones osmolares."
      },
      {
        id: "D",
        label: "D",
        text: "Hidrocortisona intravenosa a dosis de estrÃ©s para aumentar la neoglucogÃ©nesis hepÃ¡tica.",
        distractorProfile: "too_slow_and_wrong_pathway",
        incorrectFeedback: "Aunque los glucocorticoides tienen un efecto hiperglucemiante por resistencia insulÃ­nica, su latencia de acciÃ³n es de varias horas, siendo inÃºtiles para revertir de manera inmediata un choque neuroglucopÃ©nico refractario que requiere antagonismo celular en el pÃ¡ncreas."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Hipoglucemia Severa Inducida por Sulfonilureas (Glibenclamida). Las sulfonilureas son secretagogos potentes de acciÃ³n prolongada; se unen al canal de potasio sensible a ATP en las cÃ©lulas beta del pÃ¡ncreas, forzando una despolarizaciÃ³n y una liberaciÃ³n masiva y continua de insulina endÃ³gena, independientemente del nivel de glucosa en sangre. La trampa mortal de esta intoxicaciÃ³n es que administrar Dextrosa (bolos) agrava el problema a largo plazo: el azÃºcar exÃ³geno estimula AÃšN MÃS al pÃ¡ncreas a liberar insulina (efecto rebote hiperinsulÃ­nico), lo que explica por quÃ© el paciente recae rÃ¡pidamente a pesar del goteo de DAD 10%. El tratamiento de rescate definitivo, cuando la hipoglucemia se vuelve recurrente o refractaria a la glucosa inicial, es el **Octreotide**. Al ser un anÃ¡logo de la somatostatina, el Octreotide inhibe directa y profundamente la liberaciÃ³n de insulina por las cÃ©lulas beta del pÃ¡ncreas, rompiendo el ciclo vicioso de secreciÃ³n.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Un caso sÃºper frecuente en nuestros abuelos, Colega. Como la Glibenclamida tiene una vida media larguÃ­sima (peor aÃºn si el riÃ±Ã³n estÃ¡ fallando un poco por la deshidrataciÃ³n), el abuelo va a seguir botando insulina por 24 a 48 horas seguidas. Si tratas de ganar esta guerra solo con bolos de DAD 50% (OpciÃ³n C), causarÃ¡s una flebitis quÃ­mica horrible en las venas del paciente, harÃ¡s una \"montaÃ±a rusa\" de azÃºcar y el abuelo acabarÃ¡ con daÃ±o neurolÃ³gico permanente. Pones el Octreotide y es como \"desconectarle la baterÃ­a\" al pÃ¡ncreas. El GlucagÃ³n (OpciÃ³n A) no sirve en la desnutriciÃ³n/ayuno de 72 horas porque las reservas de glucÃ³geno hepÃ¡tico ya estÃ¡n agotadas; el glucagÃ³n necesita glucÃ³geno guardado para funcionar.",
    keyPoints: [
      "Anciano diabÃ©tico tratado con Sulfonilureas (Glibenclamida, Glimepirida) que se salta comidas (o con falla renal).",
      "Hipoglucemia profunda que REBOTA o recae rÃ¡pidamente a pesar de la infusiÃ³n continua de Dextrosa IV.",
      "Hipoglucemia Refractaria por Sulfonilureas. El antÃ­doto fisiolÃ³gico salvavidas que inhibe la secreciÃ³n de insulina endÃ³gena es el OCTREOTIDE subcutÃ¡neo o intravenoso.",
      "Tema: Urgencias EndocrinolÃ³gicas / Hipoglucemia Refractaria."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-86",
    university: "UCC",
    examArea: "PediatrÃ­a / GastroenterologÃ­a / Urgencias",
    topic: "GastroenterologÃ­a PediÃ¡trica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "urgencias", "endoscopia"],
    statement: "NiÃ±o de 2 aÃ±os de edad es llevado a urgencias por sus padres en estado de irritabilidad, babeo continuo (sialorrea) y rechazo total a la alimentaciÃ³n de inicio sÃºbito hace 45 minutos. Los padres sospechan que el menor ingiriÃ³ algo mientras jugaba solo en el cuarto de manualidades y herramientas del abuelo. Al examen fÃ­sico: hemodinÃ¡micamente estable, SatO2 98%, sin estridor respiratorio. Una radiografÃ­a cÃ©rvico-tÃ³raco-abdominal AP y Lateral documenta un objeto radiopaco redondo alojado en el tercio superior del esÃ³fago (a nivel de la clavÃ­cula/C6). En la proyecciÃ³n anteroposterior (AP), el objeto muestra un signo del \"doble contorno\" o \"halo anular\". En la proyecciÃ³n lateral, se observa un borde escalonado o biselado. Â¿CuÃ¡l es el riesgo patogÃ©nico MÃS grave asociado a este objeto y la conducta ineludible inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Necrosis de licuefacciÃ³n esofÃ¡gica por quemadura electrolÃ­tica/hidrÃ³xido; se debe proceder a extracciÃ³n endoscÃ³pica INMEDIATA (emergencia de < 2 horas)."
      },
      {
        id: "B",
        label: "B",
        text: "ObstrucciÃ³n mecÃ¡nica benigna por impactaciÃ³n de una moneda; se debe observar por 24 horas y realizar extracciÃ³n con sonda Foley si no progresa.",
        distractorProfile: "catastrophic_radiological_misinterpretation",
        incorrectFeedback: "La radiografÃ­a describe el signo patognomÃ³nico de una pila de botÃ³n (\"doble contorno\"), no de una moneda (que se verÃ­a como un disco sÃ³lido homogÃ©neo). Observar una pila impactada en esÃ³fago por 24 horas garantiza necrosis transmural letal."
      },
      {
        id: "C",
        label: "C",
        text: "PerforaciÃ³n intestinal por toxicidad de metales pesados (plomo); se requiere administraciÃ³n inmediata de catÃ¡rticos salinos y extracciÃ³n quirÃºrgica.",
        distractorProfile: "wrong_toxicology_mechanism",
        incorrectFeedback: "La toxicidad sistÃ©mica por metales de la baterÃ­a ocurre solo si se rompe la cÃ¡psula, pero el mecanismo letal hiperagudo en las primeras horas es netamente la quemadura cÃ¡ustica/elÃ©ctrica por generaciÃ³n de hidrÃ³xidos tisulares locales."
      },
      {
        id: "D",
        label: "D",
        text: "Riesgo de migraciÃ³n hacia la vÃ­a aÃ©rea; se debe programar extracciÃ³n ambulatoria por broncoscopia rÃ­gida en las prÃ³ximas 24 horas.",
        distractorProfile: "unaccepted_delay_and_wrong_location",
        incorrectFeedback: "El cuerpo extraÃ±o ya estÃ¡ impactado en la vÃ­a digestiva (esÃ³fago), no en la trÃ¡quea; programar el procedimiento para el dÃ­a siguiente es negligencia grave debido a la perforaciÃ³n esofÃ¡gica inminente."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente ingiriÃ³ una Pila de BotÃ³n (baterÃ­a de reloj/litio), un evento que constituye una de las **emergencias pediÃ¡tricas endoscÃ³picas mÃ¡s crÃ­ticas y tiempo-dependientes**. RadiolÃ³gicamente, la pila de botÃ³n se diferencia de una moneda inofensiva por dos signos clave: el \"doble contorno o halo\" en la radiografÃ­a AP, y el \"bisel o escalÃ³n\" en la radiografÃ­a lateral (que corresponden al diseÃ±o de contacto negativo/positivo de la baterÃ­a). A diferencia de una moneda (que solo causa obstrucciÃ³n mecÃ¡nica), la pila de botÃ³n atascada en el esÃ³fago (donde las paredes hÃºmedas conectan sus polos) genera una corriente elÃ©ctrica micro-galvÃ¡nica inmediata. Esta corriente produce hidrÃ³xido de sodio en el polo negativo, provocando una **necrosis de licuefacciÃ³n cÃ¡ustica profunda** en la pared del esÃ³fago que puede causar perforaciÃ³n franca, mediastinitis o una fÃ­stula aorto-esofÃ¡gica mortal en apenas **2 horas** de impactaciÃ³n. El tratamiento exige remociÃ³n endoscÃ³pica de emergencia innegociable (< 2 horas).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Un error de diagnÃ³stico radiolÃ³gico aquÃ­ cuesta la vida del niÃ±o. Muchos internos ven un cÃ­rculo blanco en la placa y le dicen a los padres \"tranquilos, se tragÃ³ una moneda, esperemos a que la expulse en la popÃ³\". Si le das el alta y era una pila, la pila perfora el esÃ³fago, erosiona la arteria aorta y el niÃ±o muere desangrado en su cama a las pocas horas. Si el cÃ­rculo blanco tiene un doble anillo (como un platillo volador o un botÃ³n de jean), es una baterÃ­a. Entras al quirÃ³fano a las 3 AM sin dudarlo.",
    keyPoints: [
      "Preescolar con sospecha de cuerpo extraÃ±o esofÃ¡gico.",
      "RadiografÃ­a radiopaca redonda con \"Doble anillo/contorno\" o \"escalÃ³n lateral\".",
      "Pila de botÃ³n (BaterÃ­a). Es una emergencia quirÃºrgica/endoscÃ³pica de extrema urgencia por riesgo de perforaciÃ³n esofÃ¡gica tÃ©rmica/quÃ­mica masiva en menos de 2 horas. Nunca diferir.",
      "Tema: Ingesta de Cuerpos ExtraÃ±os PediÃ¡tricos / Pila de BotÃ³n."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-87",
    university: "UCC",
    examArea: "Medicina Interna / NeumologÃ­a / Cuidado Intensivo",
    topic: "NeumologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neumologia", "cuidado_intensivo"],
    statement: "Mujer de 55 aÃ±os, ingresada en el servicio de ginecologÃ­a cursando el 12Âº dÃ­a postoperatorio de una histerectomÃ­a radical por carcinoma de endometrio. Durante la maÃ±ana, al levantarse al baÃ±o, presenta de forma brusca disnea extrema, opresiÃ³n torÃ¡cica, mareo profundo y sÃ­ncope transitorio. A la evaluaciÃ³n mÃ©dica se encuentra pÃ¡lida, mal prefundida, diaforÃ©tica. Signos vitales: PA 70/40 mmHg (choque), FC 135 lpm, SatO2 84% con O2 a 15 L/min. IngurgitaciÃ³n yugular evidente. Se realiza de inmediato una ecocardiografÃ­a a la cabecera (POCUS) que evidencia dilataciÃ³n masiva del VentrÃ­culo Derecho (relaciÃ³n VD/VI > 1.0) con desviaciÃ³n del septum interventricular hacia la izquierda (signo de la \"D\" en eje corto) y ausencia de derrame pericÃ¡rdico. Tras la administraciÃ³n de 500 mL de cristaloides, la PA cae a 65/35 mmHg. Ante la imposibilidad inmediata de realizar una Angio-TC de tÃ³rax por la inestabilidad extrema, Â¿cuÃ¡l es la intervenciÃ³n terapÃ©utica DE SALVAMENTO MÃS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar terapia trombolÃ­tica sistÃ©mica intravenosa inmediata (ej. Alteplase o Tenecteplase) por sospecha altÃ­sima de TEP Masivo."
      },
      {
        id: "B",
        label: "B",
        text: "Suspender lÃ­quidos, iniciar infusiÃ³n de Noradrenalina a dosis altas e iniciar anticoagulaciÃ³n exclusiva con Heparina de Bajo Peso Molecular.",
        distractorProfile: "inadequate_therapy_for_massive_pe",
        incorrectFeedback: "La anticoagulaciÃ³n exclusiva es el pilar para el TEP estable (bajo/intermedio riesgo). En el TEP masivo, la heparina no restaura la permeabilidad de la arteria pulmonar, por lo que el ventrÃ­culo derecho seguirÃ¡ claudicando contra la presiÃ³n insuperable hasta el colapso final."
      },
      {
        id: "C",
        label: "C",
        text: "Trasladar urgentemente a la paciente a sala de operaciones para TromboendarterectomÃ­a pulmonar abierta por la contraindicaciÃ³n quirÃºrgica de la trombÃ³lisis.",
        distractorProfile: "logistic_delay_trap",
        incorrectFeedback: "La embolectomÃ­a quirÃºrgica o por catÃ©ter es una alternativa si la trombÃ³lisis estÃ¡ contraindicada ABSOLUTAMENTE (ej. sangrado intracraneal), pero su disponibilidad casi nunca es inmediata en hospitales promedio, garantizando la muerte pre-operatoria. AdemÃ¡s, la cirugÃ­a reciente es solo una contraindicaciÃ³n relativa."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar pericardiocentesis de urgencia ante la sospecha de taponamiento cardÃ­aco oculto con disfunciÃ³n ventricular derecha.",
        distractorProfile: "bedside_echo_misinterpretation",
        incorrectFeedback: "El enunciado descarta explÃ­citamente el derrame pericÃ¡rdico mediante la ecocardiografÃ­a POCUS, haciendo la pericardiocentesis una intervenciÃ³n fÃºtil, incorrecta y extremadamente peligrosa."
      }
    ],
    correctOptionId: "A",
    explanation: "La paciente cursa con un Tromboembolismo Pulmonar (TEP) Masivo (de Alto Riesgo), evidenciado por inestabilidad hemodinÃ¡mica profunda (choque cardiogÃ©nico derecho), desaturaciÃ³n e ingurgitaciÃ³n yugular tras una inmovilizaciÃ³n quirÃºrgica oncolÃ³gica. La ecocardiografÃ­a a la cabecera confirmÃ³ la \"cor pulmonale aguda\" (fallo y dilataciÃ³n masiva del VD). SegÃºn las guÃ­as de la Sociedad Europea de CardiologÃ­a (ESC), en un paciente con inestabilidad hemodinÃ¡mica franca, sospecha clÃ­nica altÃ­sima de TEP y un ecocardiograma que documente falla ventricular derecha inequÃ­voca, **NO se debe retrasar la terapia para obtener una Angio-TC**. El tratamiento de rescate primario es la **TrombÃ³lisis SistÃ©mica Inmediata (rt-PA)**. Aunque la paciente estÃ¡ en posoperatorio reciente de cirugÃ­a pÃ©lvica (lo cual es una contraindicaciÃ³n *relativa* para fibrinolÃ­ticos debido al riesgo de sangrado de la cÃºpula vaginal), en el escenario de choque obstructivo fulminante y paro cardiorrespiratorio inminente, el riesgo de muerte por asfixia y falla del VD supera el riesgo de sangrado quirÃºrgico, y la trombÃ³lisis es mandatoria.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** AquÃ­ te mido el pulso como clÃ­nico en jefe de la UCI, Colega. Tienes a una mujer a 5 minutos de hacer un paro cardÃ­aco por obstrucciÃ³n total de la arteria pulmonar. La opciÃ³n B (Heparina + Nora) es la ruta de los cobardes; la heparina no disuelve un coÃ¡gulo del tamaÃ±o de un pulgar que estÃ¡ trabado en la bifurcaciÃ³n pulmonar, la paciente morirÃ¡. El verdadero dilema mental es: \"Â¡Pero si la operaron hace 12 dÃ­as, va a sangrar por todas partes!\". Las guÃ­as son clarÃ­simas: el TEP masivo en choque desautoriza el miedo al sangrado, prefieres una paciente que sangre en la pelvis (que el cirujano puede re-explorar y empaquetar) a una paciente muerta por fallo de bomba. Administra el fibrinolÃ­tico.",
    keyPoints: [
      "Paciente con cuadro agudo de disnea/sÃ­ncope postoperatorio o oncolÃ³gico que se presenta EN CHOQUE (HipotensiÃ³n <90 mmHg).",
      "Eco-Bedside (POCUS) con crecimiento masivo del VD y colapso del VI (Septum en \"D\").",
      "TEP de Alto Riesgo / Masivo. Requiere TrombÃ³lisis SistÃ©mica (Alteplase) INMEDIATA. No retrasar la terapia por TAC. La inestabilidad vital hace que casi todas las contraindicaciones de la trombÃ³lisis pasen a ser relativas.",
      "Tema: Tromboembolismo Pulmonar Masivo / Urgencias."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-88",
    university: "UCC",
    examArea: "PediatrÃ­a / ReumatologÃ­a / OftalmologÃ­a",
    topic: "ReumatologÃ­a PediÃ¡trica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "reumatologia"],
    statement: "Una niÃ±a de 3 aÃ±os es llevada a la consulta de pediatrÃ­a por presentar, desde hace 4 meses, aumento de volumen, rigidez matutina y cojera (claudicaciÃ³n) matinal en la rodilla derecha y el tobillo izquierdo. El examen fÃ­sico revela derrame articular y limitaciÃ³n a la movilidad en dichas dos articulaciones de manera indolora, sin eritema cutÃ¡neo. Resto del examen es normal, con crecimiento y desarrollo conservados. No hay fiebre, pÃ©rdida de peso ni visceromegalias. Laboratorios: Hemograma, funciÃ³n renal y hepÃ¡tica normales. Factor Reumatoide (FR) negativo. Anticuerpos Antinucleares (ANA) francamente POSITIVOS a un tÃ­tulo de 1:640. Se establece diagnÃ³stico de Artritis IdiopÃ¡tica Juvenil (AIJ) en su variedad Oligoarticular. Ante este diagnÃ³stico y perfil serolÃ³gico, Â¿cuÃ¡l es la interconsulta OBLIGATORIA MÃS urgente y crÃ­tica que previene la secuela irreversible mÃ¡s temida de esta enfermedad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "RemisiÃ³n a NefrologÃ­a PediÃ¡trica para biopsia renal por alto riesgo de Glomerulonefritis LÃºpica Silente.",
        distractorProfile: "ana_lupus_generalization_trap",
        incorrectFeedback: "Aunque los ANA estÃ¡n positivos, el lupus debuta sistÃ©micamente con nefritis, citopenias, rash y compromiso polisistÃ©mico grave, no como una mono/oligoartritis crÃ³nica indolente y aislada en una niÃ±a de 3 aÃ±os, por lo que una biopsia renal carece de justificaciÃ³n clÃ­nica."
      },
      {
        id: "B",
        label: "B",
        text: "RemisiÃ³n a OftalmologÃ­a para un examen con LÃ¡mpara de Hendidura urgente por riesgo de UveÃ­tis Anterior AsintomÃ¡tica."
      },
      {
        id: "C",
        label: "C",
        text: "RemisiÃ³n a CardiologÃ­a PediÃ¡trica para ecocardiograma buscando carditis reumÃ¡tica silente e insuficiencia aÃ³rtica.",
        distractorProfile: "rheumatic_fever_overlap",
        incorrectFeedback: "La fiebre reumÃ¡tica causa poliartritis migratoria, cursa con fiebre alta y reactantes fase aguda elevados, y se asocia a anticuerpos anti-estreptolisina, pero no a positividad de ANA y cojera indolora persistente de meses de duraciÃ³n."
      },
      {
        id: "D",
        label: "D",
        text: "RemisiÃ³n a Ortopedia Infantil para artrocentesis diagnÃ³stica y lavado articular profilÃ¡ctico.",
        distractorProfile: "aggressive_surgical_trap",
        incorrectFeedback: "El lavado articular quirÃºrgico se reserva para la artritis sÃ©ptica comprobada. En la AIJ, la intervenciÃ³n articular se limita a la infiltraciÃ³n terapÃ©utica de corticoides de depÃ³sito (triamcinolona) tras confirmaciÃ³n clÃ­nica."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con Artritis IdiopÃ¡tica Juvenil (AIJ) variedad Oligoarticular (afecta â‰¤ 4 articulaciones en los primeros 6 meses). A diferencia de los adultos, el gran peligro oculto de las niÃ±as preescolares con AIJ Oligoarticular y **Anticuerpos Antinucleares (ANA) positivos** no es la destrucciÃ³n Ã³sea severa, sino el desarrollo de **UveÃ­tis Anterior CrÃ³nica NO granulomatosa**. Esta inflamaciÃ³n del ojo es engaÃ±osa porque cursa tÃ­picamente de forma COMPLETAMENTE ASINTOMÃTICA (ojo blanco, indoloro, sin fotofobia). Sin embargo, si no se detecta y se trata tempranamente con esteroides oftÃ¡lmicos, el daÃ±o inflamatorio silencioso provocarÃ¡ sinequias (adherencias del iris), cataratas secundarias, glaucoma y, finalmente, ceguera bilateral irreversible. Las guÃ­as reumatolÃ³gicas internacionales exigen que todo niÃ±o con AIJ Oligoarticular ANA (+) sea evaluado con LÃ¡mpara de Hendidura por el oftalmÃ³logo cada 3 meses durante los primeros aÃ±os de la enfermedad.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Pura medicina preventiva fina, Colega. La mamÃ¡ viene asustada porque la niÃ±a cojea. El problema articular de la AIJ Oligoarticular casi siempre remite muy bien con AINEs o infiltraciones, la niÃ±a no perderÃ¡ la pierna. Pero si tÃº (el pediatra) no agendas la cita con el oftalmÃ³logo hoy mismo, la niÃ±a perderÃ¡ la vista de por vida, porque la uveÃ­tis de la AIJ no enrojece el ojo como la uveÃ­tis del adulto. El ojo se ve blanco y sano por fuera, pero por dentro el iris se estÃ¡ fusionando al cristalino (sinequias posteriores). El ANA positivo es el marcador estadÃ­stico infalible que te grita \"este ojo corre peligro\".",
    keyPoints: [
      "NiÃ±a preescolar (<6 aÃ±os) con inflamaciÃ³n de 1 a 4 articulaciones (clÃ¡sico rodilla/tobillo), tÃ­picamente indolora.",
      "ANA Positivos, FR Negativo (AIJ Oligoarticular clÃ¡sica).",
      "Riesgo elevadÃ­simo de UveÃ­tis Anterior AsintomÃ¡tica. La evaluaciÃ³n con LÃ¡mpara de Hendidura por oftalmologÃ­a es mandatoria para evitar la ceguera.",
      "Tema: Artritis IdiopÃ¡tica Juvenil / Complicaciones OftalmolÃ³gicas."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-89",
    university: "UCC",
    examArea: "Medicina Interna / GastroenterologÃ­a / CirugÃ­a",
    topic: "GastroenterologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia", "cirugia"],
    statement: "Hombre de 65 aÃ±os, previamente sano, ingresa a urgencias traÃ­do por su hijo. Refiere un cuadro de dolor en el cuadrante superior derecho de 48 horas de evoluciÃ³n, asociado a fiebre no cuantificada. En las Ãºltimas 12 horas, la familia notÃ³ al paciente muy confuso, respondiendo incoherencias y con una coloraciÃ³n amarillenta marcada en los ojos. Al examen fÃ­sico: obnubilado, ictericia franca en escleras y mucosas, PA 85/55 mmHg (hipotensiÃ³n), FC 115 lpm, T 39.5Â°C. Abdomen muy doloroso a la palpaciÃ³n del hipocondrio derecho. Laboratorios urgentes: Leucocitos 22.000/mmÂ³, Bilirrubina Total 7.5 mg/dL (Bilirrubina Directa 6.1 mg/dL), Fosfatasa Alcalina 680 U/L. Una ecografÃ­a hepatobiliar revela la vesÃ­cula biliar distendida sin paredes engrosadas, pero se documenta un colÃ©doco marcadamente dilatado de 14 mm con una imagen ecogÃ©nica productora de sombra acÃºstica en su interior. Se inicia reanimaciÃ³n hÃ­drica intensa y antibiÃ³ticos intravenosos de amplio espectro, pero el paciente persiste hipotenso. Â¿CuÃ¡l es el procedimiento DE EMERGENCIA VITAL innegociable a continuaciÃ³n?",
    options: [
      {
        id: "A",
        label: "A",
        text: "ColecistectomÃ­a laparoscÃ³pica de urgencia en las primeras 24 horas.",
        distractorProfile: "wrong_anatomic_target_surgery",
        incorrectFeedback: "La colecistectomÃ­a extrae la vesÃ­cula biliar pero no desobstruye el colÃ©doco, dejando la causa primaria de la colangitis (la coledocolitiasis) completamente intacta y garantizando la progresiÃ³n de la sepsis."
      },
      {
        id: "B",
        label: "B",
        text: "ColangiopancreatografÃ­a RetrÃ³grada EndoscÃ³pica (CPRE) urgente para esfinterotomÃ­a y drenaje de la vÃ­a biliar."
      },
      {
        id: "C",
        label: "C",
        text: "DerivaciÃ³n biliodigestiva (HepaticoyeyunostomÃ­a en Y de Roux) a cielo abierto.",
        distractorProfile: "obsolete_major_surgery_in_unstable_patient",
        incorrectFeedback: "Las reconstrucciones biliares complejas a cielo abierto en medio de un choque sÃ©ptico por colangitis purulenta acarrean una mortalidad quirÃºrgica casi total; las directrices exigen enfoques mÃ­nimamente invasivos de endoscopia (CPRE) o percutÃ¡neos."
      },
      {
        id: "D",
        label: "D",
        text: "Instaurar infusiÃ³n continua de Noradrenalina, diferiendo intervenciones invasivas hasta alcanzar normotensiÃ³n arterial.",
        distractorProfile: "deadly_delay_of_source_control",
        incorrectFeedback: "Los vasopresores son requeridos para soporte, pero posponer el control del foco (source control = destapar el colÃ©doco) en una sepsis de origen obstructivo purulento impide revertir el cuadro inflamatorio base."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Colangitis Aguda TÃ³xica o Supurativa severa, un cuadro infeccioso catastrÃ³fico que se define por la **Pentada de Reynolds**: TrÃ­ada de Charcot (Dolor en CSD, Ictericia y Fiebre) MÃS Shock Hipotensivo y AlteraciÃ³n del Sensorio. La fisiopatologÃ­a radica en un cÃ¡lculo que tapona por completo el conducto colÃ©doco, convirtiendo a la vÃ­a biliar intra y extrahepÃ¡tica en un absceso a altÃ­sima presiÃ³n que \"inyecta\" bacterias directamente al torrente venoso hepÃ¡tico. La mortalidad de la Pentada de Reynolds con tratamiento mÃ©dico exclusivo (antibiÃ³ticos solos) se acerca al 100%, ya que los antibiÃ³ticos no logran penetrar la pus a alta presiÃ³n retenida tras la piedra. SegÃºn las GuÃ­as de Tokio 2018 (TG18), la Colangitis de Grado III (Severa, con disfunciÃ³n de Ã³rganos/choque) exige **Drenaje Biliar Urgente / Emergente**. El gold standard minimamente invasivo de primera lÃ­nea que desatasca la caÃ±erÃ­a salvando la vida del paciente es la CPRE con esfinterotomÃ­a y extracciÃ³n del cÃ¡lculo o colocaciÃ³n de stent.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, aquÃ­ no se negocia. Si un paciente tiene \"Pentada de Reynolds\", el pus estÃ¡ empujando las paredes del hÃ­gado para llegar a la sangre. La ColecistectomÃ­a (OpciÃ³n A) no sirve para nada aquÃ­: quitar la vesÃ­cula biliar es sacar un Ã³rgano adyacente, pero la piedra asesina estÃ¡ en el tubo principal (el colÃ©doco). Operar la vesÃ­cula dejarÃ­a al paciente con el colÃ©doco bloqueado e igual morirÃ­a. Si el gastroenterÃ³logo no puede hacer la CPRE porque el paciente estÃ¡ muy inestable o la anatomÃ­a falla, el paso siguiente es drenarlo con una aguja por la piel del hÃ­gado (Drenaje Biliar TranshepÃ¡tico PercutÃ¡neo - CTPH). Los antibiÃ³ticos o los vasopresores solos sin liberar la presiÃ³n biliar son cosmÃ©ticos.",
    keyPoints: [
      "Paciente con TrÃ­ada de Charcot (Ictericia + Dolor CSD + Fiebre) que ademÃ¡s tiene HipotensiÃ³n y ConfusiÃ³n Mental.",
      "EcografÃ­a evidenciando coledocolitiasis (colÃ©doco > 6-8 mm con piedra).",
      "Colangitis TÃ³xica / Pentada de Reynolds. El paso de reanimaciÃ³n suprema, despuÃ©s de iniciar los antibiÃ³ticos, es destapar el conducto colÃ©doco mediante CPRE de urgencia.",
      "Tema: Urgencias Biliares / Colangitis Aguda."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-90",
    university: "UCC",
    examArea: "Medicina Interna / ReumatologÃ­a / InfectologÃ­a",
    topic: "InfectologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "reumatologia", "infectologia"],
    statement: "Mujer de 22 aÃ±os, nulÃ­para, sin comorbilidades conocidas. Consulta a urgencias por un cuadro de 4 dÃ­as de fiebre, escalofrÃ­os y mÃºltiples dolores articulares migratorios (rodilla derecha, luego codo izquierdo, seguido de la muÃ±eca derecha). Hoy nota la apariciÃ³n de 6 lesiones pustulosas indoloras con base eritematosa distribuidas en las palmas de las manos, el dorso de los pies y los antebrazos. Al examen fÃ­sico: febrÃ­cula de 37.8Â°C, se palpa inflamaciÃ³n franca a nivel de la cara dorsal de las muÃ±ecas que sigue el trayecto de los tendones extensores (tenosinovitis manifiesta). Refiere ser sexualmente activa y haber tenido un cambio de pareja reciente. Se toman hemocultivos y cultivos de lÃ­quido sinovial articular, los cuales, tras 48 horas de incubaciÃ³n, se reportan negativos. El gram articular tampoco muestra gÃ©rmenes. Â¿CuÃ¡l es el diagnÃ³stico clÃ­nico MÃS probable y la prueba diagnÃ³stica que confirmarÃ­a el agente patÃ³geno con la mayor especificidad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Endocarditis infecciosa de vÃ¡lvula derecha por S. aureus; el diagnÃ³stico se confirma con ecocardiograma transesofÃ¡gico.",
        distractorProfile: "wrong_infectious_syndrome_and_focus",
        incorrectFeedback: "Aunque la endocarditis puede causar lesiones embÃ³licas en las palmas (lesiones de Janeway), el sÃ­ndrome primario articular (tenosinovitis) en una paciente joven sin fiebre alta ni soplos orienta hacia una patologÃ­a reumatolÃ³gica/infecciosa transmitida sexualmente."
      },
      {
        id: "B",
        label: "B",
        text: "Fiebre reumÃ¡tica aguda post-estreptocÃ³cica; la prueba diagnÃ³stica de elecciÃ³n son los tÃ­tulos de Anti-estreptolisina O (ASO).",
        distractorProfile: "age_and_clinical_presentation_mismatch",
        incorrectFeedback: "La fiebre reumÃ¡tica presenta poliartritis migratoria, pero sus lesiones cutÃ¡neas clÃ¡sicas son el eritema marginado o nÃ³dulos subcutÃ¡neos, NO lesiones pustulosas palmo-plantares ni tenosinovitis manifiesta, siendo ademÃ¡s muy rara despuÃ©s de la adolescencia."
      },
      {
        id: "C",
        label: "C",
        text: "InfecciÃ³n GonocÃ³cica Diseminada (SÃ­ndrome Artritis-Dermatitis); la confirmaciÃ³n requiere pruebas de amplificaciÃ³n de Ã¡cidos nucleicos (NAAT) de exudado endocervical o hisopado vaginal."
      },
      {
        id: "D",
        label: "D",
        text: "SÃ­ndrome de Reiter (Artritis Reactiva) por Chlamydia trachomatis; el diagnÃ³stico definitivo lo da el anÃ¡lisis de HLA-B27.",
        distractorProfile: "wrong_rheumatologic_reactive_pathology",
        incorrectFeedback: "La artritis reactiva causa uretritis, uveÃ­tis y artritis asimÃ©trica, y la queratodermia blenorrÃ¡gica, pero la trÃ­ada hiperaguda de tenosinovitis, poliartritis y pÃºstulas es patognomÃ³nica de la bacteriemia gonocÃ³cica activa."
      }
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta la trÃ­ada clÃ¡sica de la InfecciÃ³n GonocÃ³cica Diseminada (IGD): tenosinovitis, dermatitis (lesiones pustulosas acrales) y poliartralgias migratorias. Ocurre caracterÃ­sticamente en mujeres jÃ³venes sexualmente activas (a menudo coincidiendo con la menstruaciÃ³n o un embarazo temprano). *Neisseria gonorrhoeae* es un microorganismo muy fastidioso; por tanto, los hemocultivos y los cultivos de lÃ­quido sinovial rutinarios son negativos en mÃ¡s del 70-80% de los casos (pues requiere medios especiales como el agar Thayer-Martin, e incluso asÃ­ la rentabilidad es baja). Para confirmar el patÃ³geno, la prueba mÃ¡s sensible y especÃ­fica es el NAAT (Prueba de AmplificaciÃ³n de Ãcidos Nucleicos) tomado directamente de las mucosas donde el patÃ³geno coloniza primariamente: endocÃ©rvix, uretra, faringe o recto, independientemente de que la paciente no tenga sÃ­ntomas genitourinarios (flujo).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Un clÃ¡sico de los servicios de urgencias. Ves las pÃºstulas, la inflamaciÃ³n de los tendones y piensas \"Â¡Artritis sÃ©ptica!\". Le sacas lÃ­quido a la rodilla y oh sorpresa, el lÃ­quido estÃ¡ estÃ©ril. Â¡No caigas en la trampa! El gonococo diseminado daÃ±a las articulaciones mÃ¡s por mecanismos inmunomediados circulantes y microabscesos que por purulencia franca masiva dentro del espacio articular. Como el gonococo odia el medio ambiente externo y no crece en los caldos de cultivo normales, tienes que ir a buscar su ADN directamente a su \"cueva\" (el cÃ©rvix) usando NAAT (PCR).",
    keyPoints: [
      "TrÃ­ada: Tenosinovitis + PÃºstulas acrales + Poliartralgia migratoria.",
      "Mujer joven sexualmente activa.",
      "Cultivos articulares y hemocultivos TÃPICAMENTE NEGATIVOS por la naturaleza fastidiosa de la bacteria.",
      "El diagnÃ³stico etiolÃ³gico se confirma buscando *Neisseria gonorrhoeae* en las mucosas primarias mediante NAAT (PCR endocervical).",
      "Tema: Infecciones de TransmisiÃ³n Sexual / Artritis GonocÃ³cica."
    ]
  }
];

