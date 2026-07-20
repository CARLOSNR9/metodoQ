import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC â€” EdiciÃ³n #3 (19 jul 2025) Â· Preguntas #51â€“#60.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_51_60_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-51",
    university: "UCC",
    examArea: "Medicina Interna / ReumatologÃ­a / NefrologÃ­a",
    topic: "ReumatologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "reumatologia", "nefrologia"],
    statement: "Mujer de 58 aÃ±os, con antecedente de infecciÃ³n crÃ³nica por el Virus de la Hepatitis C (VHC) no tratada, consulta por un cuadro de 2 meses de evoluciÃ³n de astenia progresiva, artralgias de pequeÃ±as articulaciones y la apariciÃ³n recurrente de lesiones purpÃºricas palpables en miembros inferiores. Al examen fÃ­sico: PA 155/95 mmHg, edema bipalpebral y pÃºrpura palpable en piernas y glÃºteos. ParaclÃ­nicos: Creatinina sÃ©rica 2.4 mg/dL (previa de 0.8), BUN 65 mg/dL. Factor Reumatoide (FR) fuertemente positivo. El parcial de orina evidencia hematuria glomerular y proteinuria de 1.8 g/24h. Los niveles de complemento muestran un **C3 normal (110 mg/dL) con un C4 indetectable (< 2 mg/dL)**. Â¿CuÃ¡l es el diagnÃ³stico fisiopatolÃ³gico MÃS probable y el mecanismo responsable de la hipocomplementemia selectiva?",
    options: [
      {
        id: "A",
        label: "A",
        text: "NefropatÃ­a por IgA desencadenada por el VHC; mediada por hiperactivaciÃ³n de la vÃ­a alternativa del complemento.",
        distractorProfile: "wrong_glomerulopathy_association",
        incorrectFeedback: "La nefropatÃ­a por IgA no suele consumir significativamente el complemento sÃ©rico y no se manifiesta con pÃºrpura palpable difusa y factor reumatoide positivo masivo sistÃ©mico, siendo su sello la hematuria asintomÃ¡tica."
      },
      {
        id: "B",
        label: "B",
        text: "Crioglobulinemia Mixta Esencial; mediada por inmunocomplejos (IgM-IgG) que activan masivamente la vÃ­a clÃ¡sica del complemento."
      },
      {
        id: "C",
        label: "C",
        text: "PoliangeÃ­tis MicroscÃ³pica (MPA); mediada por anticuerpos p-ANCA que consumen directamente el C4 sÃ©rico.",
        distractorProfile: "pauci_immune_trap",
        incorrectFeedback: "Las vasculitis ANCA (como la MPA o Wegener) son \"pauci-inmunes\", lo que significa que caracterÃ­sticamente NO consumen el complemento (C3 y C4 son normales) debido a la escasa o nula formaciÃ³n de inmunocomplejos."
      },
      {
        id: "D",
        label: "D",
        text: "Glomerulonefritis postinfecciosa de inicio tardÃ­o; mediada por activaciÃ³n de la vÃ­a de las lectinas por antÃ­genos virales.",
        distractorProfile: "wrong_complement_pathway",
        incorrectFeedback: "La GN postinfecciosa consume preferentemente el C3 por activaciÃ³n de la vÃ­a alternativa inducida por antÃ­genos bacterianos (estreptococo), no el C4 de manera selectiva."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta la clÃ¡sica \"TrÃ­ada de Meltzer\" (pÃºrpura palpable, artralgias y debilidad) sumada a una glomerulonefritis membranoproliferativa, en el contexto de una infecciÃ³n crÃ³nica por el VHC. Este cuadro es patognomÃ³nico de la Vasculitis CrioglobulinÃ©mica (Crioglobulinemia Mixta, tipos II o III). El VHC estimula la producciÃ³n de IgM monoclonal con actividad de Factor Reumatoide, la cual se une a la IgG del huÃ©sped formando inmunocomplejos masivos que precipitan con el frÃ­o (crioglobulinas). Estos inmunocomplejos se depositan en el subendotelio y activan poderosamente la **vÃ­a clÃ¡sica** del complemento. El sello laboratorial absoluto de la crioglobulinemia mixta es la caÃ­da profunda, a veces indetectable, del **C4**, manteniendo el C3 relativamente normal o levemente disminuido.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, en las preguntas de glomerulonefritis el complemento es el rey del diagnÃ³stico. Si cae el C3 y el C4 juntos, piensa en Lupus (vÃ­a clÃ¡sica masiva). Si cae SOLO el C3, piensa en Postinfecciosa (GNPE) o en la nefropatÃ­a por C3 (activaciÃ³n de vÃ­a alternativa). Pero si ves que el C4 se fue a cero y el C3 estÃ¡ normal, eso grita Â¡CRIOGLOBULINEMIA! a los cuatro vientos. La pista del \"Factor Reumatoide alto\" en alguien que no tiene artritis reumatoide deformante te lo confirma: esa IgM es la crioglobulina disfrazada.",
    keyPoints: [
      "Paciente con antecedente de Hepatitis C que hace SÃ­ndrome NefrÃ­tico + PÃºrpura palpable + Factor Reumatoide positivo.",
      "Perfil de complemento: C4 marcadamente bajo (casi cero) con C3 normal.",
      "Crioglobulinemia Mixta. Requiere tratamiento combinado con antivirales directos (AAD) para el VHC e inmunosupresiÃ³n (Rituximab/Esteroides) para la vasculitis activa.",
      "Tema: Vasculitis de Vasos PequeÃ±os / Crioglobulinemia."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-52",
    university: "UCC",
    examArea: "Medicina Interna / NeumologÃ­a / CardiologÃ­a",
    topic: "NeumologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neumologia", "cardiologia"],
    statement: "Mujer de 32 aÃ±os, sin antecedentes de importancia, es evaluada por disnea progresiva de esfuerzos de 6 meses de evoluciÃ³n que progresÃ³ a episodios de sÃ­ncope durante la actividad fÃ­sica. Un ecocardiograma revela hipertrofia del ventrÃ­culo derecho, aplanamiento del septum interventricular y una PresiÃ³n SistÃ³lica de la Arteria Pulmonar (PSAP) estimada en 65 mmHg, sin cardiopatÃ­a izquierda ni cortocircuitos. Se realiza un cateterismo cardÃ­aco derecho que confirma el diagnÃ³stico de HipertensiÃ³n Arterial Pulmonar (HAP) Grupo 1 (IdiopÃ¡tica), reportando una PresiÃ³n Arterial Pulmonar Media (PAPm) de 48 mmHg y una PresiÃ³n en CuÃ±a (PCP/Wedge) de 10 mmHg. Durante el procedimiento se administra Ã“xido NÃ­trico inhalado como test de vasorreactividad aguda, logrÃ¡ndose una caÃ­da de la PAPm a 32 mmHg, manteniendo un gasto cardÃ­aco normal. Â¿CuÃ¡l es el tratamiento de PRIMERA LÃNEA especÃ­fico MÃS apropiado para esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Sildenafil (inhibidor de la PDE-5) y BosentÃ¡n (antagonista del receptor de endotelina) en terapia combinada inmediata.",
        distractorProfile: "specific_therapy_override",
        incorrectFeedback: "La terapia combinada avanzada estÃ¡ indicada Ãºnicamente para pacientes con test de vasorreactividad NEGATIVO o aquellos vasorreactivos que fracasan en sostener la respuesta a los calcioantagonistas al aÃ±o de seguimiento."
      },
      {
        id: "B",
        label: "B",
        text: "Calcioantagonistas a dosis altas (Amlodipino o Diltiazem) por vÃ­a oral."
      },
      {
        id: "C",
        label: "C",
        text: "Epoprostenol en infusiÃ³n intravenosa continua a travÃ©s de catÃ©ter venoso central tunelizado.",
        distractorProfile: "severe_non_responder_therapy",
        incorrectFeedback: "Las prostaciclinas parenterales son el tratamiento salvavidas de urgencia para pacientes con HAP severa o inestable (sÃ­ncope) que son NO respondedores a la vasorreactividad; usarlas aquÃ­ priva a la paciente de la terapia oral efectiva de primera lÃ­nea."
      },
      {
        id: "D",
        label: "D",
        text: "Riociguat oral debido al alto riesgo de mortalidad evidenciado por los episodios de sÃ­ncope de esfuerzo.",
        distractorProfile: "wrong_pulmonary_hypertension_group",
        incorrectFeedback: "El Riociguat (estimulador de la guanilato ciclasa) tiene su principal indicaciÃ³n avalada en la HipertensiÃ³n Pulmonar TromboembÃ³lica CrÃ³nica (Grupo 4), no en el subgrupo hiper-reactivo del Grupo 1."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta una HipertensiÃ³n Arterial Pulmonar (HAP) Grupo 1 confirmada. El Cateterismo Derecho es el gold standard. En todos los pacientes con HAP idiopÃ¡tica se exige realizar una prueba de vasorreactividad pulmonar aguda (con Ã“xido NÃ­trico, Epoprostenol o Adenosina). Se considera que una prueba es **POSITIVA** si la PAPm disminuye en mÃ¡s de 10 mmHg y alcanza un valor absoluto < 40 mmHg, sin caÃ­da del gasto cardÃ­aco. La paciente cumpliÃ³ estrictamente estos criterios (bajÃ³ de 48 a 32 mmHg). Para la minorÃ­a de pacientes con vasorreactividad aguda positiva (~10%), el tratamiento inicial de elecciÃ³n no son las terapias vasodilatadoras pulmonares avanzadas, sino los bloqueadores de los canales de calcio (Calcioantagonistas) a dosis altas, los cuales mejoran dramÃ¡ticamente la supervivencia en este subgrupo selecto.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Otra cascarita de subespecialidad, Colega. El mÃ©dico no entrenado ve \"HipertensiÃ³n Pulmonar\" e inmediatamente quiere prescribir Sildenafil (Viagra) o Epoprostenol. Pero las guÃ­as (ESC/ERS) exigen el reto con Ã“xido NÃ­trico para separar a los pacientes. Si el pulmÃ³n de la paciente es capaz de relajar sus arterias con el gas (respondedor), significa que el problema aÃºn es predominantemente vasospÃ¡stico y no de remodelaciÃ³n fibrÃ³tica total. A estos afortunados, unas simples pastillas de Amlodipino a dosis altas les pueden regalar dÃ©cadas de vida. Si no responde al test, ahÃ­ sÃ­ sacas la artillerÃ­a pesada del Sildenafil, Macitentan o prostaciclinas.",
    keyPoints: [
      "Paciente joven con HAP Grupo 1 confirmada por cateterismo derecho.",
      "Test de vasorreactividad aguda que genera una caÃ­da de la PAPm > 10 mmHg logrando un valor final < 40 mmHg.",
      "Prueba de vasorreactividad POSITIVA. IndicaciÃ³n absoluta de inicio de Calcioantagonistas a altas dosis (Amlodipino/Nifedipino). Las terapias especÃ­ficas para HAP (Bosentan, Sildenafil) se reservan para los \"no respondedores\".",
      "Tema: HipertensiÃ³n Pulmonar."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-53",
    university: "UCC",
    examArea: "Medicina Interna / GastroenterologÃ­a / InfectologÃ­a",
    topic: "GastroenterologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia", "infectologia"],
    statement: "Hombre de 72 aÃ±os, hospitalizado hace 15 dÃ­as por una neumonÃ­a adquirida en la comunidad grave tratada con Ceftriaxona y Levofloxacino. Hace 48 horas iniciÃ³ con episodios de diarrea acuosa muy profusa (>10 al dÃ­a), dolor abdominal severo tipo cÃ³lico y fiebre de 39Â°C. Hoy se encuentra obnubilado, con PA 80/50 mmHg (choque), FC 130 lpm, y un abdomen intensamente distendido y doloroso a la palpaciÃ³n difusa. Los paraclÃ­nicos muestran leucocitosis masiva de 38,000/mmÂ³ y lactato sÃ©rico de 6.5 mmol/L. Una radiografÃ­a de abdomen evidencia dilataciÃ³n del colon transverso de 8 cm. Una prueba rÃ¡pida de toxinas A/B en heces resulta positiva para *Clostridioides difficile*. Â¿CuÃ¡l es la terapia antibiÃ³tica farmacolÃ³gica MÃS indicada en este momento para la infecciÃ³n?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Vancomicina oral (125 mg cada 6 horas) como monoterapia, por su alta eficacia intraluminal.",
        distractorProfile: "standard_therapy_in_severe_case",
        incorrectFeedback: "La monoterapia oral a dosis bajas es para el episodio severo pero NO fulminante. En Ã­leo paralÃ­tico y choque, la monoterapia oral fracasarÃ¡ en alcanzar el colon y el paciente morirÃ¡ de perforaciÃ³n inminente."
      },
      {
        id: "B",
        label: "B",
        text: "Fidaxomicina oral (200 mg cada 12 horas) por ser la droga de elecciÃ³n para prevenir las recurrencias.",
        distractorProfile: "expensive_but_futile_in_ileus",
        incorrectFeedback: "La Fidaxomicina es excelente para primeros episodios y recurrencias por su protecciÃ³n a la flora normal, pero carece de evidencia y aprobaciÃ³n para la infecciÃ³n fulminante con choque o Ã­leo paralÃ­tico."
      },
      {
        id: "C",
        label: "C",
        text: "Metronidazol intravenoso (500 mg cada 8 horas) asociado obligatoriamente a Vancomicina por sonda nasogÃ¡strica (500 mg cada 6 horas) o enema."
      },
      {
        id: "D",
        label: "D",
        text: "Vancomicina intravenosa a dosis altas debido a la inestabilidad hemodinÃ¡mica y el estado de choque del paciente.",
        distractorProfile: "deadly_pharmacokinetic_error",
        incorrectFeedback: "La vancomicina administrada por vÃ­a intravenosa no cruza la barrera de la mucosa hacia la luz colÃ³nica, por lo que es absolutamente inÃºtil contra el *C. difficile* que prolifera en el lumen intestinal."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con una infecciÃ³n fulminante por *C. difficile* complicada con choque y megacolon tÃ³xico incipiente (Ã­leo). En las infecciones no complicadas, la Vancomicina o Fidaxomicina vÃ­a oral en monoterapia son de elecciÃ³n. Sin embargo, en la enfermedad **fulminante o complicada** (presencia de choque, Ã­leo, megacolon o leucocitosis masiva >35k), el trÃ¡nsito intestinal se detiene. Si solo se da Vancomicina oral, esta nunca llegarÃ¡ al colon enfermo. Las guÃ­as de la IDSA y ACG exigen terapia de rescate combinada: Metronidazol INTRAVENOSO (que alcanza la submucosa del colon a travÃ©s de la sangre) MÃS Vancomicina a dosis mÃ¡ximas (500 mg) a travÃ©s de Sonda NasogÃ¡strica o retenida en enemas rectales para maximizar la cobertura tÃ³pica, evaluando simultÃ¡neamente la necesidad de colectomÃ­a de urgencia.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** AquÃ­ estÃ¡ la cascarita farmacolÃ³gica de toda la vida. Nunca, jamÃ¡s, selecciones \"Vancomicina Intravenosa\" (OpciÃ³n D) para tratar *C. difficile*. La Vancomicina IV no se excreta hacia la luz intestinal en absoluto, por lo que nunca toca a la bacteria. Si el paciente tiene Ã­leo o megacolon tÃ³xico, darle Vanco oral tampoco sirve porque la pastilla se queda atascada en el estÃ³mago paralizado. La Ãºnica manera de \"bombardear\" el colon inflamado desde ambos flancos es el Metronidazol por vÃ­a intravenosa (llega por los capilares a la mucosa) y la Vanco introducida por sonda gÃ¡strica o enemas rectales.",
    keyPoints: [
      "InfecciÃ³n por C. difficile que debuta con inestabilidad hemodinÃ¡mica (choque), Ã­leo paralÃ­tico o leucocitosis masiva (>35k).",
      "Dilema terapÃ©utico sobre la vÃ­a de administraciÃ³n de antibiÃ³ticos.",
      "InfecciÃ³n Fulminante por C. difficile. El esquema mandatorio es Metronidazol IV + Vancomicina enteral (alta dosis). La Vanco IV NUNCA sirve para C. diff.",
      "Tema: InfecciÃ³n por Clostridioides difficile."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-54",
    university: "UCC",
    examArea: "PediatrÃ­a / NeurologÃ­a / HematologÃ­a",
    topic: "NeurologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neurologia", "hematologia"],
    statement: "Un niÃ±o de 6 aÃ±os, con diagnÃ³stico homocigoto de Anemia de CÃ©lulas Falciformes (HbSS), ingresa al servicio de urgencias por debilidad sÃºbita del hemicuerpo izquierdo y asimetrÃ­a facial de 2 horas de evoluciÃ³n. Al examen neurolÃ³gico: hemiparesia izquierda 2/5, reflejo de Babinski presente a la izquierda y afasia motora. La tomografÃ­a de crÃ¡neo simple inicial descarta hemorragia. Se realiza una Angio-RMN cerebral que evidencia oclusiÃ³n aguda de la arteria cerebral media derecha. La hemoglobina de ingreso es de 7.5 g/dL y los signos vitales son estables. Ante este infarto isquÃ©mico agudo establecido, Â¿cuÃ¡l es el tratamiento INMEDIATO para detener la extensiÃ³n de la lesiÃ³n neurolÃ³gica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Alteplase (rt-PA) endovenoso de inmediato, ya que el niÃ±o se encuentra dentro de la ventana terapÃ©utica (< 4.5 horas).",
        distractorProfile: "adult_stroke_protocol_applied_to_peds",
        incorrectFeedback: "La trombÃ³lisis endovenosa carece de evidencia de eficacia y seguridad en la edad pediÃ¡trica con ACV por cÃ©lulas falciformes, y su uso estÃ¡ proscrito debido a la fisiopatologÃ­a celular oclusiva y no fibrinÃ³geno-dependiente."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar infusiÃ³n continua de Heparina de Bajo Peso Molecular a dosis terapÃ©utica (1 mg/kg/12h).",
        distractorProfile: "passive_anticoagulation",
        incorrectFeedback: "La heparina previene la formaciÃ³n de nuevos trombos de fibrina pero no deshace el aglomerado de eritrocitos falciformes falciformados que ya estÃ¡ causando la isquemia cerebral crÃ­tica."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar exanguinotransfusiÃ³n urgente manual o automatizada con el objetivo de reducir la fracciÃ³n de Hemoglobina S por debajo del 30%."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Ãcido AcetilsalicÃ­lico (AAS) 300 mg e iniciar Hidroxiurea a dosis altas por sonda.",
        distractorProfile: "chronic_preventive_applied_to_acute",
        incorrectFeedback: "La hidroxiurea disminuye el riesgo de primeros o segundos ACVs a largo plazo al subir la hemoglobina fetal, pero tarda meses en actuar; no sirve en lo absoluto en la fase hiperaguda para salvar tejido cerebral en isquemia."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente pediÃ¡trico presenta un Ataque Cerebrovascular (ACV) isquÃ©mico agudo, una de las emergencias mÃ¡s graves y frecuentes en los niÃ±os con Anemia Falciforme. La fisiopatologÃ­a del ACV en estos pacientes no es ateroembÃ³lica clÃ¡sica, sino resultado de la estenosis progresiva y la oclusiÃ³n micro/macrovascular pura provocada por la oclusiÃ³n de los eritrocitos falciformes y el daÃ±o endotelial difuso. Debido a esta mecÃ¡nica, los fibrinolÃ­ticos (como el rt-PA) estÃ¡n **CONTRAINDICADOS** en el ACV agudo pediÃ¡trico por enfermedad falciforme, careciendo de beneficio e incrementando el riesgo de sangrado. El tratamiento agudo salvavidas obligatorio es el recambio sanguÃ­neo inmediato (ExanguinotransfusiÃ³n, o transfusiÃ³n simple de glÃ³bulos rojos si la exanguinotransfusiÃ³n no estÃ¡ disponible y la Hb es baja) con la meta estricta de diluir la sangre enferma y disminuir el porcentaje de Hemoglobina S a < 30%.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, aquÃ­ te asaltan con el instinto de \"CÃ³digo ACV = Alteplase\". Esa regla aplica estrictamente para los adultos con ACV trombÃ³tico/embÃ³lico tradicional. En pediatrÃ­a, las guÃ­as internacionales prohÃ­ben la trombÃ³lisis para la enfermedad falciforme. El cerebro del niÃ±o falciforme se estÃ¡ infartando porque tiene \"troncos\" de cÃ©lulas deformadas estancados en los vasos, no redes de fibrina primaria. La Ãºnica manera de desatascar ese coÃ¡gulo celular es sacar la sangre mutada y empujar glÃ³bulos rojos sanos redonditos para que restauren la fluidez.",
    keyPoints: [
      "NiÃ±o o adolescente con Anemia de CÃ©lulas Falciformes (HbSS).",
      "PresentaciÃ³n aguda de dÃ©ficit neurolÃ³gico focal (ACV isquÃ©mico).",
      "ExanguinotransfusiÃ³n de urgencia para bajar la HbS <30%. FibrinolÃ­ticos (TrombÃ³lisis con rt-PA) PROSCRITOS en edad pediÃ¡trica por falciformia.",
      "Tema: Urgencias HematolÃ³gicas / ACV en Anemia Falciforme."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-55",
    university: "UCC",
    examArea: "Medicina Interna / InfectologÃ­a / CardiologÃ­a",
    topic: "InfectologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "infectologia", "cardiologia"],
    statement: "Hombre de 68 aÃ±os con antecedente de cÃ¡ncer de colon estadio III, resecado hace 3 meses, ingresa por fiebre de 38.5Â°C, escalofrÃ­os y astenia de 3 semanas de evoluciÃ³n. Al examen fÃ­sico se ausculta un soplo sistÃ³lico eyectivo nuevo en foco aÃ³rtico, petequias subconjuntivales y hemorragias en astilla en las uÃ±as. Los tres sets de hemocultivos tomados al ingreso son positivos a las 24 horas para *Streptococcus gallolyticus* (anteriormente *Streptococcus bovis* tipo I). Un ecocardiograma transesofÃ¡gico confirma una vegetaciÃ³n de 12 mm en la vÃ¡lvula aÃ³rtica sin abscesos. El paciente inicia tratamiento con Penicilina G cristalina intravenosa, con excelente respuesta y resoluciÃ³n de la fiebre. AdemÃ¡s de completar el ciclo antibiÃ³tico de 4 semanas, Â¿cuÃ¡l es el paso diagnÃ³stico OBLIGATORIO que debe asegurarse en el manejo integral de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar una TomografÃ­a por EmisiÃ³n de Positrones (PET-CT) para descartar diseminaciÃ³n metastÃ¡sica del cÃ¡ncer.",
        distractorProfile: "unspecific_oncological_screening",
        incorrectFeedback: "Aunque el paciente tiene antecedente de cÃ¡ncer, la colonoscopia Ã³ptica es superior para detectar pÃ³lipos premalignos sangrantes o recurrencias mucosas locales que sirven de puerta de entrada bacteriana, algo que el PET-CT no discrimina eficientemente a nivel intraluminal temprano."
      },
      {
        id: "B",
        label: "B",
        text: "Realizar una videocolonoscopia total, idealmente durante la misma hospitalizaciÃ³n."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar exodoncia total profilÃ¡ctica bajo anestesia general para erradicar focos odontogÃ©nicos.",
        distractorProfile: "wrong_bacterial_habitat",
        incorrectFeedback: "Los estreptococos del grupo *viridans* (como *S. mutans* o *S. sanguinis*) habitan la cavidad oral y producen endocarditis post-procedimientos dentales. *S. gallolyticus* es estrictamente de flora gastrointestinal."
      },
      {
        id: "D",
        label: "D",
        text: "Programar reemplazo valvular aÃ³rtico antes del egreso para evitar embolismos paraneoplÃ¡sicos.",
        distractorProfile: "unjustified_surgery",
        incorrectFeedback: "Una vegetaciÃ³n de 12 mm en el lado izquierdo con excelente respuesta clÃ­nica a los antibiÃ³ticos (afebril) y sin insuficiencia valvular severa ni abscesos, no cumple criterios absolutos de reemplazo valvular quirÃºrgico primario."
      }
    ],
    correctOptionId: "B",
    explanation: "La endocarditis infecciosa producida por *Streptococcus gallolyticus* (antiguo *S. bovis* biotipo I) tiene una fortÃ­sima y demostrada asociaciÃ³n patognomÃ³nica con la presencia de **pÃ³lipos premalignos y cÃ¡ncer colorrectal**. La translocaciÃ³n de esta bacteria desde la luz intestinal hacia el torrente sanguÃ­neo ocurre a travÃ©s de microperforaciones o Ãºlceras en las displasias del colon. Las guÃ­as de la AHA, ESC y sociedades de gastroenterologÃ­a establecen como mandato universal que TODO paciente con bacteriemia o endocarditis por *S. gallolyticus* debe someterse a una colonoscopia total exhaustiva para buscar y extirpar pÃ³lipos o descartar neoplasia colÃ³nica, incluso si tienen antecedentes recientes de cÃ¡ncer resecado (como en este caso, donde puede haber recurrencia local, un segundo primario o adenomas sincrÃ³nicos).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Esta es la clÃ¡sica pregunta \"cross-specialty\". Curar la vÃ¡lvula cardÃ­aca del paciente y darle el alta sin mirarle el colon es una sentencia a corto plazo, porque el cÃ¡ncer de colon subyacente lo matarÃ¡ en un aÃ±o. La asociaciÃ³n es tan fuerte que aislar *S. bovis* en la sangre es prÃ¡cticamente un marcador tumoral bacteriano. Aunque tenga antecedente reciente de cirugÃ­a de colon, la recurrencia tumoral en la anastomosis es el caldo de cultivo perfecto para esta bacteria. Pide el endoscopio.",
    keyPoints: [
      "Paciente con Endocarditis Infecciosa y aislamiento microbiolÃ³gico exclusivo de *Streptococcus gallolyticus* o *S. bovis*.",
      "EvaluaciÃ³n de pasos mandatorios extracardÃ­acos en el manejo.",
      "AsociaciÃ³n ineludible con CÃ¡ncer de Colon/PÃ³lipos. El estudio mandatorio e innegociable es la Videocolonoscopia Total.",
      "Tema: Endocarditis Infecciosa / Neoplasias Gastrointestinales."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-56",
    university: "UCC",
    examArea: "Medicina Interna / ToxicologÃ­a / Urgencias",
    topic: "ToxicologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "toxicologia", "urgencias"],
    statement: "Mujer de 55 aÃ±os es traÃ­da al servicio de urgencias 2 horas despuÃ©s de ingerir intencionalmente el contenido completo de su frasco de Metoprolol y Verapamilo (tratamiento crÃ³nico para hipertensiÃ³n y migraÃ±a). A su llegada, la paciente se encuentra letÃ¡rgica. Signos vitales: PA 60/40 mmHg, FC 35 lpm (bradicardia severa), SatO2 96%, FR 18 rpm. El ECG confirma bloqueo auriculoventricular de tercer grado y prolongaciÃ³n del intervalo PR en los latidos capturados. La glucemia capilar es de 60 mg/dL. Tras asegurar la vÃ­a aÃ©rea y administrar bolos rÃ¡pidos de 2 litros de soluciÃ³n salina, la paciente persiste en choque y bradicardia. Se administran 3 dosis de Atropina IV (0.5 mg cada una) sin ningÃºn tipo de respuesta cronotrÃ³pica. Â¿CuÃ¡l es el antÃ­doto / terapia farmacolÃ³gica INMEDIATA de mayor evidencia y eficacia para revertir este estado de toxicidad profunda?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Instalar marcapasos transcutÃ¡neo como medida exclusiva hasta que los fÃ¡rmacos se metabolicen.",
        distractorProfile: "purely_electrical_fix_ignoring_inotropism",
        incorrectFeedback: "El marcapasos corrige la bradicardia (cronotropismo), pero la causa principal de la hipotensiÃ³n mortal es la pÃ©rdida absoluta de la fuerza de contracciÃ³n (inotropismo). Sin soporte metabÃ³lico y revertir la intoxicaciÃ³n intracelular con glucagÃ³n/insulina, el marcapasos generarÃ¡ actividad elÃ©ctrica sin pulso efectivo."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar bolos intravenosos de GlucagÃ³n e iniciar Terapia con Insulina de Alta Dosis y Euglucemia (HIET)."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusiÃ³n de Amiodarona para estabilizar el automatismo del nodo sinusal.",
        distractorProfile: "antiarrhythmic_contraindication",
        incorrectFeedback: "La amiodarona exacerba profundamente la bradicardia y los bloqueos AV; su uso en una sobredosis de depresores nodales causarÃ­a asistolia definitiva inmediata."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar infusiÃ³n intravenosa de Flumazenil y Fisostigmina a dosis de rescate.",
        distractorProfile: "wrong_toxidrome_antidotes",
        incorrectFeedback: "El flumazenil es el antÃ­doto de las benzodiacepinas y la fisostigmina es el antÃ­doto del sÃ­ndrome anticolinÃ©rgico; ninguno tiene papel fisiolÃ³gico en el bloqueo adrenÃ©rgico o cÃ¡lcico de esta paciente."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una intoxicaciÃ³n letal mixta por Betabloqueadores (Metoprolol) y Calcioantagonistas (Verapamilo). Estos fÃ¡rmacos deprimen profundamente el inotropismo y el cronotropismo cardÃ­aco, bloqueando el metabolismo de carbohidratos en el miocardio y suprimiendo la liberaciÃ³n de insulina pancreÃ¡tica (de ahÃ­ la hipoglucemia y el choque refractario). Tras la falla predecible de la atropina y los lÃ­quidos, las guÃ­as toxicolÃ³gicas dictan el uso de **GlucagÃ³n intravenoso** (que estimula la adenilato ciclasa saltÃ¡ndose el receptor beta-bloqueado, aumentando el AMPc intracelular y el calcio). Conjuntamente, el estÃ¡ndar actual de soporte hemodinÃ¡mico crÃ­tico es la **Terapia con Insulina en Altas Dosis y Euglucemia (HIET)**: se infunden dosis masivas de insulina regular (hasta 1-10 UI/kg/h) junto con bolos continuos de dextrosa para evitar la hipoglucemia. La insulina en dosis altas ejerce un poderoso efecto inotrÃ³pico positivo al restaurar la asimilaciÃ³n de glucosa por el miocardio intoxicado y mejorar la contractilidad.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Si intentas tratar este choque como cualquier otro (poniendo Nora o Adrenalina), fracasarÃ¡s, porque los receptores beta-1 del corazÃ³n estÃ¡n fÃ­sicamente \"tapados\" por los fÃ¡rmacos ingeridos; las catecolaminas rebotarÃ¡n contra la pared. El GlucagÃ³n es la ganzÃºa fisiolÃ³gica: tiene su propio receptor en el corazÃ³n y abre las compuertas del calcio saltÃ¡ndose la puerta principal. La Insulina a sÃºper-dosis alimenta a un miocardio que estÃ¡ literalmente muriendo de hambre metabÃ³lica inducida por el calcioantagonista. El marcapasos transcutÃ¡neo (OpciÃ³n A) se usa en la vida real simultÃ¡neamente si hay bradicardia extrema, pero no corrige el fallo de contracciÃ³n (inotropismo) por lo que el paciente seguirÃ¡ chocado (PA 60/40) aunque le subas la frecuencia cardÃ­aca.",
    keyPoints: [
      "Choque profundo y bradicardia severa refractaria a lÃ­quidos y atropina.",
      "Antecedente de sobredosis de Beta-bloqueadores y/o Calcioantagonistas.",
      "El antÃ­doto combinado: GlucagÃ³n IV (aumenta AMPc independientemente del receptor) + Terapia con Insulina a Altas Dosis (HIET para rescate inotrÃ³pico del miocardio).",
      "Tema: ToxicologÃ­a / IntoxicaciÃ³n por Antihipertensivos."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-57",
    university: "UCC",
    examArea: "PediatrÃ­a / NefrologÃ­a / UrologÃ­a",
    topic: "NefrologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "nefrologia", "urologia"],
    statement: "Un lactante masculino de 5 meses de edad es evaluado en urgencias por su segundo episodio de infecciÃ³n de vÃ­as urinarias febril en los Ãºltimos 3 meses, esta vez causado por *Klebsiella pneumoniae*. Una ecografÃ­a renal reporta hidronefrosis bilateral severa con marcado engrosamiento de la pared vesical y dilataciÃ³n de ambos urÃ©teres. Ante este hallazgo, se realiza de inmediato una CistouretrografÃ­a Miccional CistoscÃ³pica (CUMC o VCUG), la cual evidencia una vejiga de contornos irregulares, trabeculada, con reflujo vesicoureteral grado V bilateral y una dilataciÃ³n masiva de la uretra posterior proximal. Durante la fase de micciÃ³n del estudio, se observa un estrechamiento abrupto en la zona uretral distal al cuello vesical. Â¿CuÃ¡l es la intervenciÃ³n quirÃºrgica urolÃ³gica INMEDIATA MÃS indicada para salvar la funciÃ³n de ambos riÃ±ones?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar reimplante ureteral bilateral tipo Cohen para corregir el reflujo vesicoureteral masivo.",
        distractorProfile: "treating_the_consequence_not_cause",
        incorrectFeedback: "El reflujo es secundario a la presiÃ³n hidrostÃ¡tica infravesical alta; operar los urÃ©teres sin resecar las valvas resultarÃ¡ en el fracaso del reimplante y destrucciÃ³n renal inminente."
      },
      {
        id: "B",
        label: "B",
        text: "ResecciÃ³n transuretral de valvas de uretra posterior (ablaciÃ³n endoscÃ³pica)."
      },
      {
        id: "C",
        label: "C",
        text: "NefrostomÃ­a percutÃ¡nea bilateral guiada por ecografÃ­a y diferir cirugÃ­a correctiva al aÃ±o de edad.",
        distractorProfile: "invasive_delay_of_curative_therapy",
        incorrectFeedback: "Las derivaciones urinarias altas (nefrostomÃ­as/vesicostomÃ­as) solo se usan como puente temporal en neonatos extremadamente prematuros o sÃ©pticos inestables que no toleran la endoscopia; a los 5 meses de edad, la ablaciÃ³n primaria es el estÃ¡ndar seguro."
      },
      {
        id: "D",
        label: "D",
        text: "CircuncisiÃ³n bajo anestesia general y dilataciÃ³n uretral secuencial seriada.",
        distractorProfile: "wrong_anatomical_pathology",
        incorrectFeedback: "La fimosis severa puede causar infecciones y algo de obstrucciÃ³n, pero no la dilataciÃ³n patognomÃ³nica de la uretra posterior ni las vejigas de lucha masivas caracterÃ­sticas de los velos mucosos endocavitarios de las VUP."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro describe la presentaciÃ³n clÃ­nica y radiolÃ³gica patognomÃ³nica de las **Valvas de Uretra Posterior (VUP)**, la causa congÃ©nita de obstrucciÃ³n del tracto urinario inferior mÃ¡s grave y frecuente en reciÃ©n nacidos y lactantes masculinos. La obstrucciÃ³n infravesical constante hace que la vejiga trabaje contra resistencia, hipertrofiando y trabeculando su pared (\"vejiga de lucha\"), lo que destruye el mecanismo antirreflujo en la uniÃ³n ureterovesical, provocando hidroureteronefrosis secundaria grave bilateral (que finalmente destruye el parÃ©nquima renal). La CUMC evidencia la dilataciÃ³n clÃ¡sica de la uretra posterior (signo del \"ojo de cerradura\"). El tratamiento curativo que debe realizarse de inmediato para liberar la vÃ­a y evitar la progresiÃ³n a enfermedad renal crÃ³nica terminal es la **resecciÃ³n endoscÃ³pica de las valvas de uretra posterior** (ablaciÃ³n transuretral).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** En la patologÃ­a urolÃ³gica obstructiva, el nivel de la obstrucciÃ³n lo dice todo. Si fuera unilateral, pensarÃ­as en estenosis pieloureteral. Pero si ambos riÃ±ones estÃ¡n inflados, y la vejiga tiene las paredes gruesas, el problema estÃ¡ DEBAJO de la vejiga. En un varÃ³n lactante, eso siempre es valvas de uretra posterior. El error del mÃ©dico general (OpciÃ³n A) es enfocarse en el reflujo (Grado V). El reflujo aquÃ­ es *secundario* a la inmensa presiÃ³n dentro de la vejiga porque no puede vaciarse. Si re-implantas los urÃ©teres sin destruir las valvas de la uretra, la presiÃ³n volverÃ¡ a daÃ±ar el reimplante. Primero abres el caÃ±o principal (la uretra), y en el 50% de los niÃ±os, el reflujo desaparece solo al bajar la presiÃ³n vesical.",
    keyPoints: [
      "Lactante masculino con infecciones urinarias o chorro miccional dÃ©bil/goteo.",
      "EcografÃ­a: Hidronefrosis BILATERAL + Engrosamiento de la pared de la vejiga.",
      "CUMC: Vejiga trabeculada y uretra posterior muy dilatada (signo clÃ¡sico).",
      "Valvas de Uretra Posterior (VUP). El manejo es destructivo/ablativo: resecar/fulgurar las valvas por vÃ­a endoscÃ³pica transuretral urgente.",
      "Tema: Malformaciones UrolÃ³gicas CongÃ©nitas."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-58",
    university: "UCC",
    examArea: "Medicina Interna / NefrologÃ­a / FarmacologÃ­a",
    topic: "NefrologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "nefrologia", "farmacologia"],
    statement: "Hombre de 70 aÃ±os con antecedente de gota crÃ³nica recurrente, hipertensiÃ³n arterial y enfermedad renal crÃ³nica estadio 3b secundaria a nefropatÃ­a hipertensiva. Hace 2 semanas, su reumatÃ³logo incrementÃ³ la dosis de Alopurinol de 100 a 300 mg/dÃ­a. Consulta hoy a urgencias por astenia marcada, fiebre de 38Â°C, y un exantema maculopapular generalizado prurÃ­tico severo. Al examen fÃ­sico no hay edema ni compromiso mucoso. ParaclÃ­nicos: Creatinina sÃ©rica 3.8 mg/dL (basal de 1.5 mg/dL), BUN 85 mg/dL. Hemograma revela Leucocitosis de 14,000/mmÂ³ con una llamativa **Eosinofilia del 12%** (1,680 eosinÃ³filos/uL). El sedimento urinario muestra leucocitos abundantes, cilindros granulosos y la presencia de eosinÃ³filos en orina (Eosinofiluria positiva con tinciÃ³n de Hansel). Â¿CuÃ¡l es el diagnÃ³stico fisiopatolÃ³gico MÃS probable que explica la injuria renal aguda?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Necrosis Tubular Aguda isquÃ©mica secundaria a deshidrataciÃ³n insensible por la fiebre persistente.",
        distractorProfile: "common_lra_overlap",
        incorrectFeedback: "La NTA no es de etiologÃ­a inmunolÃ³gica; por tanto, cursa clÃ¡sicamente sin fiebre primaria, sin erupciones cutÃ¡neas mediadas por alergia y con ausencia estricta de eosinofilia sÃ©rica o urinaria."
      },
      {
        id: "B",
        label: "B",
        text: "Nefritis Intersticial Aguda inmuno-alÃ©rgica secundaria a hipersensibilidad al Alopurinol."
      },
      {
        id: "C",
        label: "C",
        text: "SÃ­ndrome de DRESS (ReacciÃ³n a drogas con eosinofilia y sÃ­ntomas sistÃ©micos) complicado con microangiopatÃ­a trombÃ³tica.",
        distractorProfile: "severity_overshoot",
        incorrectFeedback: "Aunque el Alopurinol puede causar DRESS, este cursa con afectaciÃ³n multiorgÃ¡nica (hepatitis fulminante, neumonitis, miocarditis) y adenopatÃ­as difusas, pero no se asocia tÃ­picamente con microangiopatÃ­a trombÃ³tica (esquizocitos/trombocitopenia) pura causante de LRA."
      },
      {
        id: "D",
        label: "D",
        text: "NefropatÃ­a por cristales de Ã¡cido Ãºrico aguda inducida por precipitaciÃ³n masiva tras el aumento de la dosis de Alopurinol.",
        distractorProfile: "mechanistic_error",
        incorrectFeedback: "El alopurinol *disminuye* la producciÃ³n de Ã¡cido Ãºrico, previniendo la nefropatÃ­a por uratos. La precipitaciÃ³n aguda ocurre tÃ­picamente por lisis tumoral bajo quimioterapia, y no produce eosinofilia sistÃ©mica reactiva."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta la trÃ­ada clÃ¡sica de la Nefritis Intersticial Aguda (NIA) inducida por fÃ¡rmacos: fiebre, exantema cutÃ¡neo (rash) y eosinofilia, asociada a una LesiÃ³n Renal Aguda severa. Aunque la trÃ­ada completa solo se ve en el 10-15% de los pacientes, el hallazgo de eosinofilia perifÃ©rica masiva y eosinofiluria en un paciente que recientemente iniciÃ³/aumentÃ³ un fÃ¡rmaco gatillo de alto riesgo (como Alopurinol, AINEs, Omeprazol, Penicilinas o Sulfas) sella el diagnÃ³stico clÃ­nico. FisiopatolÃ³gicamente, es una reacciÃ³n de hipersensibilidad retardada tipo IV (mediada por cÃ©lulas T) en el intersticio renal. El tratamiento exige la suspensiÃ³n inmediata del fÃ¡rmaco ofensor y, ante la severidad del daÃ±o renal (creatinina de 3.8), el inicio temprano de corticosteroides (Prednisolona) para apagar la inflamaciÃ³n intersticial y prevenir la fibrosis irreversible.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** En nefrologÃ­a clÃ­nica, diferenciar la causa de una lesiÃ³n renal aguda en un anciano medicado es vital. La Necrosis Tubular Aguda (OpciÃ³n A) presenta cilindros \"granulosos oscuros o color barro\" (muddy brown) y NUNCA cursa con exantema, fiebre y eosinofilos en orina, es puramente isquÃ©mica o tÃ³xica directa. El Alopurinol, ademÃ¡s de causar el temido SÃ­ndrome de Steven-Johnson (que cursarÃ­a con descamaciÃ³n masiva y compromiso de mucosas orales/conjuntivales), es uno de los reyes de la Nefritis Intersticial Aguda. Si retiras la pastilla hoy y le pasas bolos de corticoides, ese riÃ±Ã³n puede recuperar su filtrado basal en semanas.",
    keyPoints: [
      "Paciente con inicio reciente de un medicamento nuevo (Alopurinol, AINEs, IBPs, antibiÃ³ticos).",
      "Desarrollo de Falla Renal Aguda + Fiebre + Exantema cutÃ¡neo.",
      "Marcador pivote laboratorial: Eosinofilia en sangre y/o Eosinofiluria en el sedimento.",
      "Nefritis Intersticial Aguda. El tratamiento primario es suspender la droga causante y administrar esteroides sistÃ©micos tempranos.",
      "Tema: LesiÃ³n Renal Aguda / Nefritis Intersticial."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-59",
    university: "UCC",
    examArea: "PediatrÃ­a / InmunologÃ­a / InfectologÃ­a",
    topic: "InmunologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "inmunologia", "infectologia"],
    statement: "Lactante masculino de 14 meses de edad es evaluado por un cuadro de abscesos subcutÃ¡neos profundos y recurrentes en glÃºteos y regiÃ³n cervical, los cuales han requerido drenaje quirÃºrgico en tres ocasiones en los Ãºltimos seis meses, aislando sistemÃ¡ticamente *Staphylococcus aureus* meticilino-sensible. Su historial mÃ©dico resalta ademÃ¡s un episodio de neumonÃ­a severa por *Aspergillus fumigatus* a los 10 meses y un antecedente de onfalitis supurativa al mes de nacido. Los linfocitos T, B, NK y los niveles de inmunoglobulinas sÃ©ricas (IgA, IgG, IgM) son rigurosamente normales. Para llegar al diagnÃ³stico etiolÃ³gico de esta Inmunodeficiencia Primaria, Â¿cuÃ¡l es el examen confirmatorio de primera lÃ­nea con mayor rendimiento actual?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ensayo del estallido respiratorio mediante citometrÃ­a de flujo con prueba de Dihidrorrodamina (DHR) 123."
      },
      {
        id: "B",
        label: "B",
        text: "Prueba de hipersensibilidad cutÃ¡nea de tipo retardado (prueba de CÃ¡ndida y PPD) para evaluar inmunidad celular.",
        distractorProfile: "wrong_immunity_arm",
        incorrectFeedback: "Estas pruebas evalÃºan in vivo la inmunidad celular de linfocitos T memoria. Los defectos de cÃ©lulas T (ej. Inmunodeficiencia Severa Combinada) causan candidiasis mucocutÃ¡nea pertinaz e infecciones virales fulminantes, no la formaciÃ³n de grandes abscesos estafilocÃ³cicos."
      },
      {
        id: "C",
        label: "C",
        text: "CuantificaciÃ³n de los niveles de complemento total (CH50) y factores terminales del complemento (C5-C9).",
        distractorProfile: "complement_deficiency_pattern",
        incorrectFeedback: "Las deficiencias de los componentes tardÃ­os del complemento (C5-C9, complejo de ataque a la membrana) se asocian clÃ¡sicamente a bacteriemias recurrentes exclusivamente por especies encapsuladas (particularmente *Neisseria meningitidis*), no a *Aspergillus* o abscesos."
      },
      {
        id: "D",
        label: "D",
        text: "AnÃ¡lisis de frotis de sangre perifÃ©rica para la bÃºsqueda de cuerpos de Howell-Jolly como signo de asplenia funcional.",
        distractorProfile: "spleen_defect_pattern",
        incorrectFeedback: "La asplenia anatÃ³mica o funcional hace a los pacientes susceptibles a sepsis fulminante por bacterias encapsuladas (Neumococo, Haemophilus, Meningococo), no predispone al desarrollo de granulomas o abscesos fÃºngicos invasivos tisulares de la EGC."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con un cuadro clÃ¡sico de Enfermedad Granulomatosa CrÃ³nica (EGC), un defecto primario de la inmunidad fagocÃ­tica. Los pacientes presentan un defecto genÃ©tico en la enzima NAPDH oxidasa de los neutrÃ³filos, lo que les impide generar especies reactivas de oxÃ­geno (\"estallido respiratorio\" o *respiratory burst*) como el perÃ³xido de hidrÃ³geno y aniÃ³n superÃ³xido, incapacitÃ¡ndolos para destruir bacterias y hongos que son fagocitados. El sello clÃ­nico de la EGC es la susceptibilidad patognomÃ³nica a microorganismos **catalasa-positivos** (que destruyen el propio perÃ³xido de hidrÃ³geno bacteriano), siendo los mÃ¡s comunes: *Staphylococcus aureus*, *Aspergillus spp.*, *Serratia marcescens*, *Burkholderia cepacia* y *Nocardia*. Las cÃ©lulas B y T son numÃ©ricamente normales. La prueba de oro confirmatoria moderna (que reemplazÃ³ a la antigua prueba del azul de nitroazul de tetrazolio [NBT]) es la prueba de la **Dihidrorrodamina (DHR) por citometrÃ­a de flujo**, la cual mide directamente la falla en la producciÃ³n de superÃ³xido de los neutrÃ³filos estimulados.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** El diferencial de las inmunodeficiencias no tiene que ser un dolor de cabeza, Colega. BÃºscales el patrÃ³n: Si el niÃ±o hace meningitis o neumonÃ­as bacterianas repetitivas por neumococo desde que se le acaban los anticuerpos de la mamÃ¡ (6 meses), le faltan Linfocitos B (Agammaglobulinemia de Bruton). Si hace hongos invasivos orales masivos (CÃ¡ndida) y virus fulminantes, le faltan Linfocitos T (SCID o DiGeorge). Pero si sus infecciones son puramente ABSCESOS llenos de pus, especialmente de estafilococo o *Aspergillus*, el problema estÃ¡ en los soldados rasos: los neutrÃ³filos. Los neutrÃ³filos del paciente con EGC se \"tragan\" la bacteria, pero como no tienen NADPH oxidasa, no la pueden disolver. El estallido respiratorio (DHR 123) expone directamente que el neutrÃ³filo dispara salvas en blanco.",
    keyPoints: [
      "NiÃ±o con abscesos recurrentes de piel, ganglios o pulmÃ³n.",
      "Cultivos persistentes de microorganismos catalasa-positivos (S. aureus, Aspergillus, Serratia, Burkholderia).",
      "Inmunoglobulinas y conteo de linfocitos normales.",
      "Falla fagocÃ­tica por Enfermedad Granulomatosa CrÃ³nica. Se diagnostica mediante la prueba del estallido respiratorio con Dihidrorrodamina (DHR) 123.",
      "Tema: Inmunodeficiencias Primarias PediÃ¡tricas."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-60",
    university: "UCC",
    examArea: "Medicina Interna / EndocrinologÃ­a",
    topic: "EndocrinologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia"],
    statement: "Mujer de 48 aÃ±os, asintomÃ¡tica, a quien se le realizÃ³ una TomografÃ­a Computarizada (TC) de abdomen sin contraste para estudio de un cÃ³lico nefrÃ­tico resuelto. Como hallazgo incidental, el radiÃ³logo reporta una masa sÃ³lida, redondeada de 3.8 cm de diÃ¡metro en la glÃ¡ndula suprarrenal izquierda, con un valor de atenuaciÃ³n de 8 Unidades Hounsfield (HU) en fase simple. La paciente no presenta estrÃ­as violÃ¡ceas, no hay plÃ©tora facial, niega cefalea o palpitaciones episÃ³dicas, y su presiÃ³n arterial es de 118/72 mmHg sostenida. El panel metabÃ³lico no muestra hipokalemia. Como paso del protocolo internacional de evaluaciÃ³n del \"Incidentaloma Suprarrenal\", Â¿cuÃ¡l de los siguientes estudios neuroendocrinos es OBLIGATORIO realizar en primera instancia en esta paciente asintomÃ¡tica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Biopsia percutÃ¡nea con aguja fina guiada por TC para descartar enfermedad metastÃ¡sica.",
        distractorProfile: "deadly_premature_invasion",
        incorrectFeedback: "La biopsia suprarrenal es de altÃ­simo riesgo; nunca se debe realizar sin descartar feocromocitoma hormonalmente (riesgo de crisis hipertensiva fatal) y solo se indica en casos con fuerte sospecha de enfermedad metastÃ¡sica secundaria de un primario extra-adrenal conocido."
      },
      {
        id: "B",
        label: "B",
        text: "Test de SupresiÃ³n nocturna con 1 mg de Dexametasona y mediciÃ³n de Metanefrinas libres en plasma o fraccionadas en orina."
      },
      {
        id: "C",
        label: "C",
        text: "MediciÃ³n aislada de la RelaciÃ³n Aldosterona-Renina PlasmÃ¡tica (ARR) en suero matutino basal.",
        distractorProfile: "incomplete_hormonal_workup",
        incorrectFeedback: "Aunque el tamizaje de aldosterona es mandatorio para descartar SÃ­ndrome de Conn en masas adrenales, las guÃ­as establecen que este solo se exige si el paciente presenta HipertensiÃ³n Arterial o Hipokalemia concurrente. Si es normotenso (118/72), se puede obviar."
      },
      {
        id: "D",
        label: "D",
        text: "Vigilancia radiolÃ³gica expectante con nueva TAC en 6 meses; los tumores de fenotipo lipÃ­dico < 4 cm no requieren abordaje metabÃ³lico inicial.",
        distractorProfile: "dangerous_passive_clearance",
        incorrectFeedback: "La baja densidad (<10 HU) asegura casi con certeza que es un adenoma benigno, pero no brinda ninguna informaciÃ³n sobre su autonomÃ­a secretora. Ignorar el cribado hormonal expone a complicaciones metabÃ³licas silentes severas."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta un \"Incidentaloma Suprarrenal\". A pesar de su carÃ¡cter incidental (descubierto por estudios de otra causa) y su aparente benignidad radiolÃ³gica (tumor < 4 cm con baja atenuaciÃ³n < 10 Unidades Hounsfield, indicativo de tejido rico en lÃ­pidos tÃ­pico del adenoma benigno), las guÃ­as de la Sociedad Europea de EndocrinologÃ­a (ESE) y la Endocrine Society exigen una evaluaciÃ³n funcional hormonal OBLIGATORIA para TODO tumor adrenal > 1 cm, sea sintomÃ¡tico o no. El cribado inicial mandatorio para toda masa incluye excluir hipercortisolismo autÃ³nomo subclÃ­nico (prueba de supresiÃ³n con 1 mg de Dexametasona) y excluir feocromocitoma silente (Metanefrinas libres en plasma o fraccionadas en orina de 24h). El estudio del eje renina-aldosterona (ARR) solo es obligatorio si la paciente asocia hipertensiÃ³n o hipokalemia.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** El incidentaloma suprarrenal tiene dos preguntas vitales: \"Â¿Es cÃ¡ncer?\" y \"Â¿Produce hormonas?\". Lo de si es cÃ¡ncer te lo responde el tomÃ³grafo: los adenomas benignos estÃ¡n llenos de grasa, y la grasa en la TAC es \"oscura\", por lo que marcan menos de 10 Unidades Hounsfield (HU). Si tiene 8 HU, te quedas tranquila por ese lado. Pero la segunda pregunta te obliga a pincharle la vena a la paciente. Hasta el 10% de estos tumores benignos producen cortisol \"de a poquitos\" (SÃ­ndrome de Cushing subclÃ­nico) que no te engorda pero te desbarata los huesos y te infarta en silencio. NUNCA ordenes una biopsia (OpciÃ³n A) en un tumor suprarrenal sin antes descartar feocromocitoma; la aguja apretarÃ¡ el tumor y dispararÃ¡ catecolaminas causando la muerte del paciente en el tomÃ³grafo.",
    keyPoints: [
      "Masa Suprarrenal diagnosticada por incidentalidad (por otra razÃ³n clÃ­nica).",
      "Paciente sin sintomatologÃ­a metabÃ³lica (normotenso, no obeso).",
      "Regla de oro: Todo Incidentaloma Suprarrenal debe estudiarse hormonalmente (Cushing y Feocromocitoma por protocolo bÃ¡sico; Aldosterona solo si hay HTA o hipokalemia). La biopsia es la Ãºltima y rara opciÃ³n.",
      "Tema: EndocrinologÃ­a / Incidentaloma Suprarrenal."
    ]
  }
];

