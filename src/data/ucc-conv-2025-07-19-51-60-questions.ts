import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #3 (19 jul 2025) · Preguntas #51–#60.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_51_60_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-51",
    university: "UCC",
    examArea: "Medicina Interna / Reumatología / Nefrología",
    topic: "Reumatología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "reumatologia", "nefrologia"],
    statement: "Mujer de 58 años, con antecedente de infección crónica por el Virus de la Hepatitis C (VHC) no tratada, consulta por un cuadro de 2 meses de evolución de astenia progresiva, artralgias de pequeñas articulaciones y la aparición recurrente de lesiones purpúricas palpables en miembros inferiores. Al examen físico: PA 155/95 mmHg, edema bipalpebral y púrpura palpable en piernas y glúteos. Paraclínicos: Creatinina sérica 2.4 mg/dL (previa de 0.8), BUN 65 mg/dL. Factor Reumatoide (FR) fuertemente positivo. El parcial de orina evidencia hematuria glomerular y proteinuria de 1.8 g/24h. Los niveles de complemento muestran un **C3 normal (110 mg/dL) con un C4 indetectable (< 2 mg/dL)**. ¿Cuál es el diagnóstico fisiopatológico MÁS probable y el mecanismo responsable de la hipocomplementemia selectiva?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nefropatía por IgA desencadenada por el VHC; mediada por hiperactivación de la vía alternativa del complemento.",
        distractorProfile: "wrong_glomerulopathy_association",
        incorrectFeedback: "La nefropatía por IgA no suele consumir significativamente el complemento sérico y no se manifiesta con púrpura palpable difusa y factor reumatoide positivo masivo sistémico, siendo su sello la hematuria asintomática."
      },
      {
        id: "B",
        label: "B",
        text: "Crioglobulinemia Mixta Esencial; mediada por inmunocomplejos (IgM-IgG) que activan masivamente la vía clásica del complemento."
      },
      {
        id: "C",
        label: "C",
        text: "Poliangeítis Microscópica (MPA); mediada por anticuerpos p-ANCA que consumen directamente el C4 sérico.",
        distractorProfile: "pauci_immune_trap",
        incorrectFeedback: "Las vasculitis ANCA (como la MPA o Wegener) son \"pauci-inmunes\", lo que significa que característicamente NO consumen el complemento (C3 y C4 son normales) debido a la escasa o nula formación de inmunocomplejos."
      },
      {
        id: "D",
        label: "D",
        text: "Glomerulonefritis postinfecciosa de inicio tardío; mediada por activación de la vía de las lectinas por antígenos virales.",
        distractorProfile: "wrong_complement_pathway",
        incorrectFeedback: "La GN postinfecciosa consume preferentemente el C3 por activación de la vía alternativa inducida por antígenos bacterianos (estreptococo), no el C4 de manera selectiva."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta la clásica \"Tríada de Meltzer\" (púrpura palpable, artralgias y debilidad) sumada a una glomerulonefritis membranoproliferativa, en el contexto de una infección crónica por el VHC. Este cuadro es patognomónico de la Vasculitis Crioglobulinémica (Crioglobulinemia Mixta, tipos II o III). El VHC estimula la producción de IgM monoclonal con actividad de Factor Reumatoide, la cual se une a la IgG del huésped formando inmunocomplejos masivos que precipitan con el frío (crioglobulinas). Estos inmunocomplejos se depositan en el subendotelio y activan poderosamente la **vía clásica** del complemento. El sello laboratorial absoluto de la crioglobulinemia mixta es la caída profunda, a veces indetectable, del **C4**, manteniendo el C3 relativamente normal o levemente disminuido.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, en las preguntas de glomerulonefritis el complemento es el rey del diagnóstico. Si cae el C3 y el C4 juntos, piensa en Lupus (vía clásica masiva). Si cae SOLO el C3, piensa en Postinfecciosa (GNPE) o en la nefropatía por C3 (activación de vía alternativa). Pero si ves que el C4 se fue a cero y el C3 está normal, eso grita ¡CRIOGLOBULINEMIA! a los cuatro vientos. La pista del \"Factor Reumatoide alto\" en alguien que no tiene artritis reumatoide deformante te lo confirma: esa IgM es la crioglobulina disfrazada.",
    keyPoints: [
      "Paciente con antecedente de Hepatitis C que hace Síndrome Nefrítico + Púrpura palpable + Factor Reumatoide positivo.",
      "Perfil de complemento: C4 marcadamente bajo (casi cero) con C3 normal.",
      "Crioglobulinemia Mixta. Requiere tratamiento combinado con antivirales directos (AAD) para el VHC e inmunosupresión (Rituximab/Esteroides) para la vasculitis activa.",
      "Tema: Vasculitis de Vasos Pequeños / Crioglobulinemia."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-52",
    university: "UCC",
    examArea: "Medicina Interna / Neumología / Cardiología",
    topic: "Neumología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neumologia", "cardiologia"],
    statement: "Mujer de 32 años, sin antecedentes de importancia, es evaluada por disnea progresiva de esfuerzos de 6 meses de evolución que progresó a episodios de síncope durante la actividad física. Un ecocardiograma revela hipertrofia del ventrículo derecho, aplanamiento del septum interventricular y una Presión Sistólica de la Arteria Pulmonar (PSAP) estimada en 65 mmHg, sin cardiopatía izquierda ni cortocircuitos. Se realiza un cateterismo cardíaco derecho que confirma el diagnóstico de Hipertensión Arterial Pulmonar (HAP) Grupo 1 (Idiopática), reportando una Presión Arterial Pulmonar Media (PAPm) de 48 mmHg y una Presión en Cuña (PCP/Wedge) de 10 mmHg. Durante el procedimiento se administra Óxido Nítrico inhalado como test de vasorreactividad aguda, lográndose una caída de la PAPm a 32 mmHg, manteniendo un gasto cardíaco normal. ¿Cuál es el tratamiento de PRIMERA LÍNEA específico MÁS apropiado para esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Sildenafil (inhibidor de la PDE-5) y Bosentán (antagonista del receptor de endotelina) en terapia combinada inmediata.",
        distractorProfile: "specific_therapy_override",
        incorrectFeedback: "La terapia combinada avanzada está indicada únicamente para pacientes con test de vasorreactividad NEGATIVO o aquellos vasorreactivos que fracasan en sostener la respuesta a los calcioantagonistas al año de seguimiento."
      },
      {
        id: "B",
        label: "B",
        text: "Calcioantagonistas a dosis altas (Amlodipino o Diltiazem) por vía oral."
      },
      {
        id: "C",
        label: "C",
        text: "Epoprostenol en infusión intravenosa continua a través de catéter venoso central tunelizado.",
        distractorProfile: "severe_non_responder_therapy",
        incorrectFeedback: "Las prostaciclinas parenterales son el tratamiento salvavidas de urgencia para pacientes con HAP severa o inestable (síncope) que son NO respondedores a la vasorreactividad; usarlas aquí priva a la paciente de la terapia oral efectiva de primera línea."
      },
      {
        id: "D",
        label: "D",
        text: "Riociguat oral debido al alto riesgo de mortalidad evidenciado por los episodios de síncope de esfuerzo.",
        distractorProfile: "wrong_pulmonary_hypertension_group",
        incorrectFeedback: "El Riociguat (estimulador de la guanilato ciclasa) tiene su principal indicación avalada en la Hipertensión Pulmonar Tromboembólica Crónica (Grupo 4), no en el subgrupo hiper-reactivo del Grupo 1."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta una Hipertensión Arterial Pulmonar (HAP) Grupo 1 confirmada. El Cateterismo Derecho es el gold standard. En todos los pacientes con HAP idiopática se exige realizar una prueba de vasorreactividad pulmonar aguda (con Óxido Nítrico, Epoprostenol o Adenosina). Se considera que una prueba es **POSITIVA** si la PAPm disminuye en más de 10 mmHg y alcanza un valor absoluto < 40 mmHg, sin caída del gasto cardíaco. La paciente cumplió estrictamente estos criterios (bajó de 48 a 32 mmHg). Para la minoría de pacientes con vasorreactividad aguda positiva (~10%), el tratamiento inicial de elección no son las terapias vasodilatadoras pulmonares avanzadas, sino los bloqueadores de los canales de calcio (Calcioantagonistas) a dosis altas, los cuales mejoran dramáticamente la supervivencia en este subgrupo selecto.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Otra cascarita de subespecialidad, Elizabeth. El médico no entrenado ve \"Hipertensión Pulmonar\" e inmediatamente quiere prescribir Sildenafil (Viagra) o Epoprostenol. Pero las guías (ESC/ERS) exigen el reto con Óxido Nítrico para separar a los pacientes. Si el pulmón de la paciente es capaz de relajar sus arterias con el gas (respondedor), significa que el problema aún es predominantemente vasospástico y no de remodelación fibrótica total. A estos afortunados, unas simples pastillas de Amlodipino a dosis altas les pueden regalar décadas de vida. Si no responde al test, ahí sí sacas la artillería pesada del Sildenafil, Macitentan o prostaciclinas.",
    keyPoints: [
      "Paciente joven con HAP Grupo 1 confirmada por cateterismo derecho.",
      "Test de vasorreactividad aguda que genera una caída de la PAPm > 10 mmHg logrando un valor final < 40 mmHg.",
      "Prueba de vasorreactividad POSITIVA. Indicación absoluta de inicio de Calcioantagonistas a altas dosis (Amlodipino/Nifedipino). Las terapias específicas para HAP (Bosentan, Sildenafil) se reservan para los \"no respondedores\".",
      "Tema: Hipertensión Pulmonar."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-53",
    university: "UCC",
    examArea: "Medicina Interna / Gastroenterología / Infectología",
    topic: "Gastroenterología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia", "infectologia"],
    statement: "Hombre de 72 años, hospitalizado hace 15 días por una neumonía adquirida en la comunidad grave tratada con Ceftriaxona y Levofloxacino. Hace 48 horas inició con episodios de diarrea acuosa muy profusa (>10 al día), dolor abdominal severo tipo cólico y fiebre de 39°C. Hoy se encuentra obnubilado, con PA 80/50 mmHg (choque), FC 130 lpm, y un abdomen intensamente distendido y doloroso a la palpación difusa. Los paraclínicos muestran leucocitosis masiva de 38,000/mm³ y lactato sérico de 6.5 mmol/L. Una radiografía de abdomen evidencia dilatación del colon transverso de 8 cm. Una prueba rápida de toxinas A/B en heces resulta positiva para *Clostridioides difficile*. ¿Cuál es la terapia antibiótica farmacológica MÁS indicada en este momento para la infección?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Vancomicina oral (125 mg cada 6 horas) como monoterapia, por su alta eficacia intraluminal.",
        distractorProfile: "standard_therapy_in_severe_case",
        incorrectFeedback: "La monoterapia oral a dosis bajas es para el episodio severo pero NO fulminante. En íleo paralítico y choque, la monoterapia oral fracasará en alcanzar el colon y el paciente morirá de perforación inminente."
      },
      {
        id: "B",
        label: "B",
        text: "Fidaxomicina oral (200 mg cada 12 horas) por ser la droga de elección para prevenir las recurrencias.",
        distractorProfile: "expensive_but_futile_in_ileus",
        incorrectFeedback: "La Fidaxomicina es excelente para primeros episodios y recurrencias por su protección a la flora normal, pero carece de evidencia y aprobación para la infección fulminante con choque o íleo paralítico."
      },
      {
        id: "C",
        label: "C",
        text: "Metronidazol intravenoso (500 mg cada 8 horas) asociado obligatoriamente a Vancomicina por sonda nasogástrica (500 mg cada 6 horas) o enema."
      },
      {
        id: "D",
        label: "D",
        text: "Vancomicina intravenosa a dosis altas debido a la inestabilidad hemodinámica y el estado de choque del paciente.",
        distractorProfile: "deadly_pharmacokinetic_error",
        incorrectFeedback: "La vancomicina administrada por vía intravenosa no cruza la barrera de la mucosa hacia la luz colónica, por lo que es absolutamente inútil contra el *C. difficile* que prolifera en el lumen intestinal."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con una infección fulminante por *C. difficile* complicada con choque y megacolon tóxico incipiente (íleo). En las infecciones no complicadas, la Vancomicina o Fidaxomicina vía oral en monoterapia son de elección. Sin embargo, en la enfermedad **fulminante o complicada** (presencia de choque, íleo, megacolon o leucocitosis masiva >35k), el tránsito intestinal se detiene. Si solo se da Vancomicina oral, esta nunca llegará al colon enfermo. Las guías de la IDSA y ACG exigen terapia de rescate combinada: Metronidazol INTRAVENOSO (que alcanza la submucosa del colon a través de la sangre) MÁS Vancomicina a dosis máximas (500 mg) a través de Sonda Nasogástrica o retenida en enemas rectales para maximizar la cobertura tópica, evaluando simultáneamente la necesidad de colectomía de urgencia.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Aquí está la cascarita farmacológica de toda la vida. Nunca, jamás, selecciones \"Vancomicina Intravenosa\" (Opción D) para tratar *C. difficile*. La Vancomicina IV no se excreta hacia la luz intestinal en absoluto, por lo que nunca toca a la bacteria. Si el paciente tiene íleo o megacolon tóxico, darle Vanco oral tampoco sirve porque la pastilla se queda atascada en el estómago paralizado. La única manera de \"bombardear\" el colon inflamado desde ambos flancos es el Metronidazol por vía intravenosa (llega por los capilares a la mucosa) y la Vanco introducida por sonda gástrica o enemas rectales.",
    keyPoints: [
      "Infección por C. difficile que debuta con inestabilidad hemodinámica (choque), íleo paralítico o leucocitosis masiva (>35k).",
      "Dilema terapéutico sobre la vía de administración de antibióticos.",
      "Infección Fulminante por C. difficile. El esquema mandatorio es Metronidazol IV + Vancomicina enteral (alta dosis). La Vanco IV NUNCA sirve para C. diff.",
      "Tema: Infección por Clostridioides difficile."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-54",
    university: "UCC",
    examArea: "Pediatría / Neurología / Hematología",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neurologia", "hematologia"],
    statement: "Un niño de 6 años, con diagnóstico homocigoto de Anemia de Células Falciformes (HbSS), ingresa al servicio de urgencias por debilidad súbita del hemicuerpo izquierdo y asimetría facial de 2 horas de evolución. Al examen neurológico: hemiparesia izquierda 2/5, reflejo de Babinski presente a la izquierda y afasia motora. La tomografía de cráneo simple inicial descarta hemorragia. Se realiza una Angio-RMN cerebral que evidencia oclusión aguda de la arteria cerebral media derecha. La hemoglobina de ingreso es de 7.5 g/dL y los signos vitales son estables. Ante este infarto isquémico agudo establecido, ¿cuál es el tratamiento INMEDIATO para detener la extensión de la lesión neurológica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Alteplase (rt-PA) endovenoso de inmediato, ya que el niño se encuentra dentro de la ventana terapéutica (< 4.5 horas).",
        distractorProfile: "adult_stroke_protocol_applied_to_peds",
        incorrectFeedback: "La trombólisis endovenosa carece de evidencia de eficacia y seguridad en la edad pediátrica con ACV por células falciformes, y su uso está proscrito debido a la fisiopatología celular oclusiva y no fibrinógeno-dependiente."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar infusión continua de Heparina de Bajo Peso Molecular a dosis terapéutica (1 mg/kg/12h).",
        distractorProfile: "passive_anticoagulation",
        incorrectFeedback: "La heparina previene la formación de nuevos trombos de fibrina pero no deshace el aglomerado de eritrocitos falciformes falciformados que ya está causando la isquemia cerebral crítica."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar exanguinotransfusión urgente manual o automatizada con el objetivo de reducir la fracción de Hemoglobina S por debajo del 30%."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Ácido Acetilsalicílico (AAS) 300 mg e iniciar Hidroxiurea a dosis altas por sonda.",
        distractorProfile: "chronic_preventive_applied_to_acute",
        incorrectFeedback: "La hidroxiurea disminuye el riesgo de primeros o segundos ACVs a largo plazo al subir la hemoglobina fetal, pero tarda meses en actuar; no sirve en lo absoluto en la fase hiperaguda para salvar tejido cerebral en isquemia."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente pediátrico presenta un Ataque Cerebrovascular (ACV) isquémico agudo, una de las emergencias más graves y frecuentes en los niños con Anemia Falciforme. La fisiopatología del ACV en estos pacientes no es ateroembólica clásica, sino resultado de la estenosis progresiva y la oclusión micro/macrovascular pura provocada por la oclusión de los eritrocitos falciformes y el daño endotelial difuso. Debido a esta mecánica, los fibrinolíticos (como el rt-PA) están **CONTRAINDICADOS** en el ACV agudo pediátrico por enfermedad falciforme, careciendo de beneficio e incrementando el riesgo de sangrado. El tratamiento agudo salvavidas obligatorio es el recambio sanguíneo inmediato (Exanguinotransfusión, o transfusión simple de glóbulos rojos si la exanguinotransfusión no está disponible y la Hb es baja) con la meta estricta de diluir la sangre enferma y disminuir el porcentaje de Hemoglobina S a < 30%.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, aquí te asaltan con el instinto de \"Código ACV = Alteplase\". Esa regla aplica estrictamente para los adultos con ACV trombótico/embólico tradicional. En pediatría, las guías internacionales prohíben la trombólisis para la enfermedad falciforme. El cerebro del niño falciforme se está infartando porque tiene \"troncos\" de células deformadas estancados en los vasos, no redes de fibrina primaria. La única manera de desatascar ese coágulo celular es sacar la sangre mutada y empujar glóbulos rojos sanos redonditos para que restauren la fluidez.",
    keyPoints: [
      "Niño o adolescente con Anemia de Células Falciformes (HbSS).",
      "Presentación aguda de déficit neurológico focal (ACV isquémico).",
      "Exanguinotransfusión de urgencia para bajar la HbS <30%. Fibrinolíticos (Trombólisis con rt-PA) PROSCRITOS en edad pediátrica por falciformia.",
      "Tema: Urgencias Hematológicas / ACV en Anemia Falciforme."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-55",
    university: "UCC",
    examArea: "Medicina Interna / Infectología / Cardiología",
    topic: "Infectología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "infectologia", "cardiologia"],
    statement: "Hombre de 68 años con antecedente de cáncer de colon estadio III, resecado hace 3 meses, ingresa por fiebre de 38.5°C, escalofríos y astenia de 3 semanas de evolución. Al examen físico se ausculta un soplo sistólico eyectivo nuevo en foco aórtico, petequias subconjuntivales y hemorragias en astilla en las uñas. Los tres sets de hemocultivos tomados al ingreso son positivos a las 24 horas para *Streptococcus gallolyticus* (anteriormente *Streptococcus bovis* tipo I). Un ecocardiograma transesofágico confirma una vegetación de 12 mm en la válvula aórtica sin abscesos. El paciente inicia tratamiento con Penicilina G cristalina intravenosa, con excelente respuesta y resolución de la fiebre. Además de completar el ciclo antibiótico de 4 semanas, ¿cuál es el paso diagnóstico OBLIGATORIO que debe asegurarse en el manejo integral de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar una Tomografía por Emisión de Positrones (PET-CT) para descartar diseminación metastásica del cáncer.",
        distractorProfile: "unspecific_oncological_screening",
        incorrectFeedback: "Aunque el paciente tiene antecedente de cáncer, la colonoscopia óptica es superior para detectar pólipos premalignos sangrantes o recurrencias mucosas locales que sirven de puerta de entrada bacteriana, algo que el PET-CT no discrimina eficientemente a nivel intraluminal temprano."
      },
      {
        id: "B",
        label: "B",
        text: "Realizar una videocolonoscopia total, idealmente durante la misma hospitalización."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar exodoncia total profiláctica bajo anestesia general para erradicar focos odontogénicos.",
        distractorProfile: "wrong_bacterial_habitat",
        incorrectFeedback: "Los estreptococos del grupo *viridans* (como *S. mutans* o *S. sanguinis*) habitan la cavidad oral y producen endocarditis post-procedimientos dentales. *S. gallolyticus* es estrictamente de flora gastrointestinal."
      },
      {
        id: "D",
        label: "D",
        text: "Programar reemplazo valvular aórtico antes del egreso para evitar embolismos paraneoplásicos.",
        distractorProfile: "unjustified_surgery",
        incorrectFeedback: "Una vegetación de 12 mm en el lado izquierdo con excelente respuesta clínica a los antibióticos (afebril) y sin insuficiencia valvular severa ni abscesos, no cumple criterios absolutos de reemplazo valvular quirúrgico primario."
      }
    ],
    correctOptionId: "B",
    explanation: "La endocarditis infecciosa producida por *Streptococcus gallolyticus* (antiguo *S. bovis* biotipo I) tiene una fortísima y demostrada asociación patognomónica con la presencia de **pólipos premalignos y cáncer colorrectal**. La translocación de esta bacteria desde la luz intestinal hacia el torrente sanguíneo ocurre a través de microperforaciones o úlceras en las displasias del colon. Las guías de la AHA, ESC y sociedades de gastroenterología establecen como mandato universal que TODO paciente con bacteriemia o endocarditis por *S. gallolyticus* debe someterse a una colonoscopia total exhaustiva para buscar y extirpar pólipos o descartar neoplasia colónica, incluso si tienen antecedentes recientes de cáncer resecado (como en este caso, donde puede haber recurrencia local, un segundo primario o adenomas sincrónicos).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Esta es la clásica pregunta \"cross-specialty\". Curar la válvula cardíaca del paciente y darle el alta sin mirarle el colon es una sentencia a corto plazo, porque el cáncer de colon subyacente lo matará en un año. La asociación es tan fuerte que aislar *S. bovis* en la sangre es prácticamente un marcador tumoral bacteriano. Aunque tenga antecedente reciente de cirugía de colon, la recurrencia tumoral en la anastomosis es el caldo de cultivo perfecto para esta bacteria. Pide el endoscopio.",
    keyPoints: [
      "Paciente con Endocarditis Infecciosa y aislamiento microbiológico exclusivo de *Streptococcus gallolyticus* o *S. bovis*.",
      "Evaluación de pasos mandatorios extracardíacos en el manejo.",
      "Asociación ineludible con Cáncer de Colon/Pólipos. El estudio mandatorio e innegociable es la Videocolonoscopia Total.",
      "Tema: Endocarditis Infecciosa / Neoplasias Gastrointestinales."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-56",
    university: "UCC",
    examArea: "Medicina Interna / Toxicología / Urgencias",
    topic: "Toxicología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "toxicologia", "urgencias"],
    statement: "Mujer de 55 años es traída al servicio de urgencias 2 horas después de ingerir intencionalmente el contenido completo de su frasco de Metoprolol y Verapamilo (tratamiento crónico para hipertensión y migraña). A su llegada, la paciente se encuentra letárgica. Signos vitales: PA 60/40 mmHg, FC 35 lpm (bradicardia severa), SatO2 96%, FR 18 rpm. El ECG confirma bloqueo auriculoventricular de tercer grado y prolongación del intervalo PR en los latidos capturados. La glucemia capilar es de 60 mg/dL. Tras asegurar la vía aérea y administrar bolos rápidos de 2 litros de solución salina, la paciente persiste en choque y bradicardia. Se administran 3 dosis de Atropina IV (0.5 mg cada una) sin ningún tipo de respuesta cronotrópica. ¿Cuál es el antídoto / terapia farmacológica INMEDIATA de mayor evidencia y eficacia para revertir este estado de toxicidad profunda?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Instalar marcapasos transcutáneo como medida exclusiva hasta que los fármacos se metabolicen.",
        distractorProfile: "purely_electrical_fix_ignoring_inotropism",
        incorrectFeedback: "El marcapasos corrige la bradicardia (cronotropismo), pero la causa principal de la hipotensión mortal es la pérdida absoluta de la fuerza de contracción (inotropismo). Sin soporte metabólico y revertir la intoxicación intracelular con glucagón/insulina, el marcapasos generará actividad eléctrica sin pulso efectivo."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar bolos intravenosos de Glucagón e iniciar Terapia con Insulina de Alta Dosis y Euglucemia (HIET)."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusión de Amiodarona para estabilizar el automatismo del nodo sinusal.",
        distractorProfile: "antiarrhythmic_contraindication",
        incorrectFeedback: "La amiodarona exacerba profundamente la bradicardia y los bloqueos AV; su uso en una sobredosis de depresores nodales causaría asistolia definitiva inmediata."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar infusión intravenosa de Flumazenil y Fisostigmina a dosis de rescate.",
        distractorProfile: "wrong_toxidrome_antidotes",
        incorrectFeedback: "El flumazenil es el antídoto de las benzodiacepinas y la fisostigmina es el antídoto del síndrome anticolinérgico; ninguno tiene papel fisiológico en el bloqueo adrenérgico o cálcico de esta paciente."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una intoxicación letal mixta por Betabloqueadores (Metoprolol) y Calcioantagonistas (Verapamilo). Estos fármacos deprimen profundamente el inotropismo y el cronotropismo cardíaco, bloqueando el metabolismo de carbohidratos en el miocardio y suprimiendo la liberación de insulina pancreática (de ahí la hipoglucemia y el choque refractario). Tras la falla predecible de la atropina y los líquidos, las guías toxicológicas dictan el uso de **Glucagón intravenoso** (que estimula la adenilato ciclasa saltándose el receptor beta-bloqueado, aumentando el AMPc intracelular y el calcio). Conjuntamente, el estándar actual de soporte hemodinámico crítico es la **Terapia con Insulina en Altas Dosis y Euglucemia (HIET)**: se infunden dosis masivas de insulina regular (hasta 1-10 UI/kg/h) junto con bolos continuos de dextrosa para evitar la hipoglucemia. La insulina en dosis altas ejerce un poderoso efecto inotrópico positivo al restaurar la asimilación de glucosa por el miocardio intoxicado y mejorar la contractilidad.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Si intentas tratar este choque como cualquier otro (poniendo Nora o Adrenalina), fracasarás, porque los receptores beta-1 del corazón están físicamente \"tapados\" por los fármacos ingeridos; las catecolaminas rebotarán contra la pared. El Glucagón es la ganzúa fisiológica: tiene su propio receptor en el corazón y abre las compuertas del calcio saltándose la puerta principal. La Insulina a súper-dosis alimenta a un miocardio que está literalmente muriendo de hambre metabólica inducida por el calcioantagonista. El marcapasos transcutáneo (Opción A) se usa en la vida real simultáneamente si hay bradicardia extrema, pero no corrige el fallo de contracción (inotropismo) por lo que el paciente seguirá chocado (PA 60/40) aunque le subas la frecuencia cardíaca.",
    keyPoints: [
      "Choque profundo y bradicardia severa refractaria a líquidos y atropina.",
      "Antecedente de sobredosis de Beta-bloqueadores y/o Calcioantagonistas.",
      "El antídoto combinado: Glucagón IV (aumenta AMPc independientemente del receptor) + Terapia con Insulina a Altas Dosis (HIET para rescate inotrópico del miocardio).",
      "Tema: Toxicología / Intoxicación por Antihipertensivos."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-57",
    university: "UCC",
    examArea: "Pediatría / Nefrología / Urología",
    topic: "Nefrología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "nefrologia", "urologia"],
    statement: "Un lactante masculino de 5 meses de edad es evaluado en urgencias por su segundo episodio de infección de vías urinarias febril en los últimos 3 meses, esta vez causado por *Klebsiella pneumoniae*. Una ecografía renal reporta hidronefrosis bilateral severa con marcado engrosamiento de la pared vesical y dilatación de ambos uréteres. Ante este hallazgo, se realiza de inmediato una Cistouretrografía Miccional Cistoscópica (CUMC o VCUG), la cual evidencia una vejiga de contornos irregulares, trabeculada, con reflujo vesicoureteral grado V bilateral y una dilatación masiva de la uretra posterior proximal. Durante la fase de micción del estudio, se observa un estrechamiento abrupto en la zona uretral distal al cuello vesical. ¿Cuál es la intervención quirúrgica urológica INMEDIATA MÁS indicada para salvar la función de ambos riñones?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar reimplante ureteral bilateral tipo Cohen para corregir el reflujo vesicoureteral masivo.",
        distractorProfile: "treating_the_consequence_not_cause",
        incorrectFeedback: "El reflujo es secundario a la presión hidrostática infravesical alta; operar los uréteres sin resecar las valvas resultará en el fracaso del reimplante y destrucción renal inminente."
      },
      {
        id: "B",
        label: "B",
        text: "Resección transuretral de valvas de uretra posterior (ablación endoscópica)."
      },
      {
        id: "C",
        label: "C",
        text: "Nefrostomía percutánea bilateral guiada por ecografía y diferir cirugía correctiva al año de edad.",
        distractorProfile: "invasive_delay_of_curative_therapy",
        incorrectFeedback: "Las derivaciones urinarias altas (nefrostomías/vesicostomías) solo se usan como puente temporal en neonatos extremadamente prematuros o sépticos inestables que no toleran la endoscopia; a los 5 meses de edad, la ablación primaria es el estándar seguro."
      },
      {
        id: "D",
        label: "D",
        text: "Circuncisión bajo anestesia general y dilatación uretral secuencial seriada.",
        distractorProfile: "wrong_anatomical_pathology",
        incorrectFeedback: "La fimosis severa puede causar infecciones y algo de obstrucción, pero no la dilatación patognomónica de la uretra posterior ni las vejigas de lucha masivas características de los velos mucosos endocavitarios de las VUP."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro describe la presentación clínica y radiológica patognomónica de las **Valvas de Uretra Posterior (VUP)**, la causa congénita de obstrucción del tracto urinario inferior más grave y frecuente en recién nacidos y lactantes masculinos. La obstrucción infravesical constante hace que la vejiga trabaje contra resistencia, hipertrofiando y trabeculando su pared (\"vejiga de lucha\"), lo que destruye el mecanismo antirreflujo en la unión ureterovesical, provocando hidroureteronefrosis secundaria grave bilateral (que finalmente destruye el parénquima renal). La CUMC evidencia la dilatación clásica de la uretra posterior (signo del \"ojo de cerradura\"). El tratamiento curativo que debe realizarse de inmediato para liberar la vía y evitar la progresión a enfermedad renal crónica terminal es la **resección endoscópica de las valvas de uretra posterior** (ablación transuretral).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** En la patología urológica obstructiva, el nivel de la obstrucción lo dice todo. Si fuera unilateral, pensarías en estenosis pieloureteral. Pero si ambos riñones están inflados, y la vejiga tiene las paredes gruesas, el problema está DEBAJO de la vejiga. En un varón lactante, eso siempre es valvas de uretra posterior. El error del médico general (Opción A) es enfocarse en el reflujo (Grado V). El reflujo aquí es *secundario* a la inmensa presión dentro de la vejiga porque no puede vaciarse. Si re-implantas los uréteres sin destruir las valvas de la uretra, la presión volverá a dañar el reimplante. Primero abres el caño principal (la uretra), y en el 50% de los niños, el reflujo desaparece solo al bajar la presión vesical.",
    keyPoints: [
      "Lactante masculino con infecciones urinarias o chorro miccional débil/goteo.",
      "Ecografía: Hidronefrosis BILATERAL + Engrosamiento de la pared de la vejiga.",
      "CUMC: Vejiga trabeculada y uretra posterior muy dilatada (signo clásico).",
      "Valvas de Uretra Posterior (VUP). El manejo es destructivo/ablativo: resecar/fulgurar las valvas por vía endoscópica transuretral urgente.",
      "Tema: Malformaciones Urológicas Congénitas."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-58",
    university: "UCC",
    examArea: "Medicina Interna / Nefrología / Farmacología",
    topic: "Nefrología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "nefrologia", "farmacologia"],
    statement: "Hombre de 70 años con antecedente de gota crónica recurrente, hipertensión arterial y enfermedad renal crónica estadio 3b secundaria a nefropatía hipertensiva. Hace 2 semanas, su reumatólogo incrementó la dosis de Alopurinol de 100 a 300 mg/día. Consulta hoy a urgencias por astenia marcada, fiebre de 38°C, y un exantema maculopapular generalizado prurítico severo. Al examen físico no hay edema ni compromiso mucoso. Paraclínicos: Creatinina sérica 3.8 mg/dL (basal de 1.5 mg/dL), BUN 85 mg/dL. Hemograma revela Leucocitosis de 14,000/mm³ con una llamativa **Eosinofilia del 12%** (1,680 eosinófilos/uL). El sedimento urinario muestra leucocitos abundantes, cilindros granulosos y la presencia de eosinófilos en orina (Eosinofiluria positiva con tinción de Hansel). ¿Cuál es el diagnóstico fisiopatológico MÁS probable que explica la injuria renal aguda?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Necrosis Tubular Aguda isquémica secundaria a deshidratación insensible por la fiebre persistente.",
        distractorProfile: "common_lra_overlap",
        incorrectFeedback: "La NTA no es de etiología inmunológica; por tanto, cursa clásicamente sin fiebre primaria, sin erupciones cutáneas mediadas por alergia y con ausencia estricta de eosinofilia sérica o urinaria."
      },
      {
        id: "B",
        label: "B",
        text: "Nefritis Intersticial Aguda inmuno-alérgica secundaria a hipersensibilidad al Alopurinol."
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome de DRESS (Reacción a drogas con eosinofilia y síntomas sistémicos) complicado con microangiopatía trombótica.",
        distractorProfile: "severity_overshoot",
        incorrectFeedback: "Aunque el Alopurinol puede causar DRESS, este cursa con afectación multiorgánica (hepatitis fulminante, neumonitis, miocarditis) y adenopatías difusas, pero no se asocia típicamente con microangiopatía trombótica (esquizocitos/trombocitopenia) pura causante de LRA."
      },
      {
        id: "D",
        label: "D",
        text: "Nefropatía por cristales de ácido úrico aguda inducida por precipitación masiva tras el aumento de la dosis de Alopurinol.",
        distractorProfile: "mechanistic_error",
        incorrectFeedback: "El alopurinol *disminuye* la producción de ácido úrico, previniendo la nefropatía por uratos. La precipitación aguda ocurre típicamente por lisis tumoral bajo quimioterapia, y no produce eosinofilia sistémica reactiva."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta la tríada clásica de la Nefritis Intersticial Aguda (NIA) inducida por fármacos: fiebre, exantema cutáneo (rash) y eosinofilia, asociada a una Lesión Renal Aguda severa. Aunque la tríada completa solo se ve en el 10-15% de los pacientes, el hallazgo de eosinofilia periférica masiva y eosinofiluria en un paciente que recientemente inició/aumentó un fármaco gatillo de alto riesgo (como Alopurinol, AINEs, Omeprazol, Penicilinas o Sulfas) sella el diagnóstico clínico. Fisiopatológicamente, es una reacción de hipersensibilidad retardada tipo IV (mediada por células T) en el intersticio renal. El tratamiento exige la suspensión inmediata del fármaco ofensor y, ante la severidad del daño renal (creatinina de 3.8), el inicio temprano de corticosteroides (Prednisolona) para apagar la inflamación intersticial y prevenir la fibrosis irreversible.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** En nefrología clínica, diferenciar la causa de una lesión renal aguda en un anciano medicado es vital. La Necrosis Tubular Aguda (Opción A) presenta cilindros \"granulosos oscuros o color barro\" (muddy brown) y NUNCA cursa con exantema, fiebre y eosinofilos en orina, es puramente isquémica o tóxica directa. El Alopurinol, además de causar el temido Síndrome de Steven-Johnson (que cursaría con descamación masiva y compromiso de mucosas orales/conjuntivales), es uno de los reyes de la Nefritis Intersticial Aguda. Si retiras la pastilla hoy y le pasas bolos de corticoides, ese riñón puede recuperar su filtrado basal en semanas.",
    keyPoints: [
      "Paciente con inicio reciente de un medicamento nuevo (Alopurinol, AINEs, IBPs, antibióticos).",
      "Desarrollo de Falla Renal Aguda + Fiebre + Exantema cutáneo.",
      "Marcador pivote laboratorial: Eosinofilia en sangre y/o Eosinofiluria en el sedimento.",
      "Nefritis Intersticial Aguda. El tratamiento primario es suspender la droga causante y administrar esteroides sistémicos tempranos.",
      "Tema: Lesión Renal Aguda / Nefritis Intersticial."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-59",
    university: "UCC",
    examArea: "Pediatría / Inmunología / Infectología",
    topic: "Inmunología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "inmunologia", "infectologia"],
    statement: "Lactante masculino de 14 meses de edad es evaluado por un cuadro de abscesos subcutáneos profundos y recurrentes en glúteos y región cervical, los cuales han requerido drenaje quirúrgico en tres ocasiones en los últimos seis meses, aislando sistemáticamente *Staphylococcus aureus* meticilino-sensible. Su historial médico resalta además un episodio de neumonía severa por *Aspergillus fumigatus* a los 10 meses y un antecedente de onfalitis supurativa al mes de nacido. Los linfocitos T, B, NK y los niveles de inmunoglobulinas séricas (IgA, IgG, IgM) son rigurosamente normales. Para llegar al diagnóstico etiológico de esta Inmunodeficiencia Primaria, ¿cuál es el examen confirmatorio de primera línea con mayor rendimiento actual?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ensayo del estallido respiratorio mediante citometría de flujo con prueba de Dihidrorrodamina (DHR) 123."
      },
      {
        id: "B",
        label: "B",
        text: "Prueba de hipersensibilidad cutánea de tipo retardado (prueba de Cándida y PPD) para evaluar inmunidad celular.",
        distractorProfile: "wrong_immunity_arm",
        incorrectFeedback: "Estas pruebas evalúan in vivo la inmunidad celular de linfocitos T memoria. Los defectos de células T (ej. Inmunodeficiencia Severa Combinada) causan candidiasis mucocutánea pertinaz e infecciones virales fulminantes, no la formación de grandes abscesos estafilocócicos."
      },
      {
        id: "C",
        label: "C",
        text: "Cuantificación de los niveles de complemento total (CH50) y factores terminales del complemento (C5-C9).",
        distractorProfile: "complement_deficiency_pattern",
        incorrectFeedback: "Las deficiencias de los componentes tardíos del complemento (C5-C9, complejo de ataque a la membrana) se asocian clásicamente a bacteriemias recurrentes exclusivamente por especies encapsuladas (particularmente *Neisseria meningitidis*), no a *Aspergillus* o abscesos."
      },
      {
        id: "D",
        label: "D",
        text: "Análisis de frotis de sangre periférica para la búsqueda de cuerpos de Howell-Jolly como signo de asplenia funcional.",
        distractorProfile: "spleen_defect_pattern",
        incorrectFeedback: "La asplenia anatómica o funcional hace a los pacientes susceptibles a sepsis fulminante por bacterias encapsuladas (Neumococo, Haemophilus, Meningococo), no predispone al desarrollo de granulomas o abscesos fúngicos invasivos tisulares de la EGC."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con un cuadro clásico de Enfermedad Granulomatosa Crónica (EGC), un defecto primario de la inmunidad fagocítica. Los pacientes presentan un defecto genético en la enzima NAPDH oxidasa de los neutrófilos, lo que les impide generar especies reactivas de oxígeno (\"estallido respiratorio\" o *respiratory burst*) como el peróxido de hidrógeno y anión superóxido, incapacitándolos para destruir bacterias y hongos que son fagocitados. El sello clínico de la EGC es la susceptibilidad patognomónica a microorganismos **catalasa-positivos** (que destruyen el propio peróxido de hidrógeno bacteriano), siendo los más comunes: *Staphylococcus aureus*, *Aspergillus spp.*, *Serratia marcescens*, *Burkholderia cepacia* y *Nocardia*. Las células B y T son numéricamente normales. La prueba de oro confirmatoria moderna (que reemplazó a la antigua prueba del azul de nitroazul de tetrazolio [NBT]) es la prueba de la **Dihidrorrodamina (DHR) por citometría de flujo**, la cual mide directamente la falla en la producción de superóxido de los neutrófilos estimulados.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** El diferencial de las inmunodeficiencias no tiene que ser un dolor de cabeza, Elizabeth. Búscales el patrón: Si el niño hace meningitis o neumonías bacterianas repetitivas por neumococo desde que se le acaban los anticuerpos de la mamá (6 meses), le faltan Linfocitos B (Agammaglobulinemia de Bruton). Si hace hongos invasivos orales masivos (Cándida) y virus fulminantes, le faltan Linfocitos T (SCID o DiGeorge). Pero si sus infecciones son puramente ABSCESOS llenos de pus, especialmente de estafilococo o *Aspergillus*, el problema está en los soldados rasos: los neutrófilos. Los neutrófilos del paciente con EGC se \"tragan\" la bacteria, pero como no tienen NADPH oxidasa, no la pueden disolver. El estallido respiratorio (DHR 123) expone directamente que el neutrófilo dispara salvas en blanco.",
    keyPoints: [
      "Niño con abscesos recurrentes de piel, ganglios o pulmón.",
      "Cultivos persistentes de microorganismos catalasa-positivos (S. aureus, Aspergillus, Serratia, Burkholderia).",
      "Inmunoglobulinas y conteo de linfocitos normales.",
      "Falla fagocítica por Enfermedad Granulomatosa Crónica. Se diagnostica mediante la prueba del estallido respiratorio con Dihidrorrodamina (DHR) 123.",
      "Tema: Inmunodeficiencias Primarias Pediátricas."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-60",
    university: "UCC",
    examArea: "Medicina Interna / Endocrinología",
    topic: "Endocrinología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia"],
    statement: "Mujer de 48 años, asintomática, a quien se le realizó una Tomografía Computarizada (TC) de abdomen sin contraste para estudio de un cólico nefrítico resuelto. Como hallazgo incidental, el radiólogo reporta una masa sólida, redondeada de 3.8 cm de diámetro en la glándula suprarrenal izquierda, con un valor de atenuación de 8 Unidades Hounsfield (HU) en fase simple. La paciente no presenta estrías violáceas, no hay plétora facial, niega cefalea o palpitaciones episódicas, y su presión arterial es de 118/72 mmHg sostenida. El panel metabólico no muestra hipokalemia. Como paso del protocolo internacional de evaluación del \"Incidentaloma Suprarrenal\", ¿cuál de los siguientes estudios neuroendocrinos es OBLIGATORIO realizar en primera instancia en esta paciente asintomática?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Biopsia percutánea con aguja fina guiada por TC para descartar enfermedad metastásica.",
        distractorProfile: "deadly_premature_invasion",
        incorrectFeedback: "La biopsia suprarrenal es de altísimo riesgo; nunca se debe realizar sin descartar feocromocitoma hormonalmente (riesgo de crisis hipertensiva fatal) y solo se indica en casos con fuerte sospecha de enfermedad metastásica secundaria de un primario extra-adrenal conocido."
      },
      {
        id: "B",
        label: "B",
        text: "Test de Supresión nocturna con 1 mg de Dexametasona y medición de Metanefrinas libres en plasma o fraccionadas en orina."
      },
      {
        id: "C",
        label: "C",
        text: "Medición aislada de la Relación Aldosterona-Renina Plasmática (ARR) en suero matutino basal.",
        distractorProfile: "incomplete_hormonal_workup",
        incorrectFeedback: "Aunque el tamizaje de aldosterona es mandatorio para descartar Síndrome de Conn en masas adrenales, las guías establecen que este solo se exige si el paciente presenta Hipertensión Arterial o Hipokalemia concurrente. Si es normotenso (118/72), se puede obviar."
      },
      {
        id: "D",
        label: "D",
        text: "Vigilancia radiológica expectante con nueva TAC en 6 meses; los tumores de fenotipo lipídico < 4 cm no requieren abordaje metabólico inicial.",
        distractorProfile: "dangerous_passive_clearance",
        incorrectFeedback: "La baja densidad (<10 HU) asegura casi con certeza que es un adenoma benigno, pero no brinda ninguna información sobre su autonomía secretora. Ignorar el cribado hormonal expone a complicaciones metabólicas silentes severas."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta un \"Incidentaloma Suprarrenal\". A pesar de su carácter incidental (descubierto por estudios de otra causa) y su aparente benignidad radiológica (tumor < 4 cm con baja atenuación < 10 Unidades Hounsfield, indicativo de tejido rico en lípidos típico del adenoma benigno), las guías de la Sociedad Europea de Endocrinología (ESE) y la Endocrine Society exigen una evaluación funcional hormonal OBLIGATORIA para TODO tumor adrenal > 1 cm, sea sintomático o no. El cribado inicial mandatorio para toda masa incluye excluir hipercortisolismo autónomo subclínico (prueba de supresión con 1 mg de Dexametasona) y excluir feocromocitoma silente (Metanefrinas libres en plasma o fraccionadas en orina de 24h). El estudio del eje renina-aldosterona (ARR) solo es obligatorio si la paciente asocia hipertensión o hipokalemia.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** El incidentaloma suprarrenal tiene dos preguntas vitales: \"¿Es cáncer?\" y \"¿Produce hormonas?\". Lo de si es cáncer te lo responde el tomógrafo: los adenomas benignos están llenos de grasa, y la grasa en la TAC es \"oscura\", por lo que marcan menos de 10 Unidades Hounsfield (HU). Si tiene 8 HU, te quedas tranquila por ese lado. Pero la segunda pregunta te obliga a pincharle la vena a la paciente. Hasta el 10% de estos tumores benignos producen cortisol \"de a poquitos\" (Síndrome de Cushing subclínico) que no te engorda pero te desbarata los huesos y te infarta en silencio. NUNCA ordenes una biopsia (Opción A) en un tumor suprarrenal sin antes descartar feocromocitoma; la aguja apretará el tumor y disparará catecolaminas causando la muerte del paciente en el tomógrafo.",
    keyPoints: [
      "Masa Suprarrenal diagnosticada por incidentalidad (por otra razón clínica).",
      "Paciente sin sintomatología metabólica (normotenso, no obeso).",
      "Regla de oro: Todo Incidentaloma Suprarrenal debe estudiarse hormonalmente (Cushing y Feocromocitoma por protocolo básico; Aldosterona solo si hay HTA o hipokalemia). La biopsia es la última y rara opción.",
      "Tema: Endocrinología / Incidentaloma Suprarrenal."
    ]
  }
];
