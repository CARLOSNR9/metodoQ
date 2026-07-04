import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const META = {
  1: {
    examArea: "Medicina Interna / Cardiología / Insuficiencia cardíaca",
    topic: "Cardiología",
    slug: "cardiologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "guidelines_misapplication",
        feedback:
          "La ivabradina está indicada solo si la FC en reposo es ≥70 lpm en ritmo sinusal a pesar de betabloqueador; este paciente tiene FC de 68 lpm.",
      },
      C: {
        profile: "outdated_practice",
        feedback:
          "Aunque reduce hospitalizaciones, la digoxina no impacta mortalidad y se reserva como último recurso sintomático, siendo superada por la TRC.",
      },
      D: {
        profile: "symptomatic_fix_only",
        feedback:
          "Aumentar el betabloqueador puede empeorar los síntomas de bajo gasto y retrasa una intervención (TRC) con indicación clase I.",
      },
    },
  },
  2: {
    examArea: "Medicina Interna / Nefrología / Urgencias",
    topic: "Nefrología",
    slug: "nefrologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "passive_danger",
        feedback:
          "La diuresis acuosa activa (200 cc/h) no se detiene solo con suspender el aporte; el sodio puede seguir subiendo y consolidar daño neurológico.",
      },
      C: {
        profile: "continuing_harm",
        feedback:
          "Si ya superó el umbral máximo de corrección, continuar aportando sodio empeora la hipertonicidad iatrogénica.",
      },
      D: {
        profile: "worsening_factor",
        feedback:
          "La furosemida aumenta la pérdida de agua libre y eleva aún más el sodio sérico, lo opuesto a lo necesario.",
      },
    },
  },
  3: {
    examArea: "Pediatría / Infectología / Urgencias",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "incomplete_standard_of_care",
        feedback:
          "Omite la dexametasona, mandatoria antes o junto con la primera dosis de ATB en meningitis neumocócica pediátrica.",
      },
      C: {
        profile: "wrong_age_group",
        feedback:
          "Esquema del neonato (<28 días) para Listeria y GBS, no para un lactante de 7 meses con neumococo.",
      },
      D: {
        profile: "wrong_etiology",
        feedback:
          "El aciclovir cubre encefalitis por VHS, pero el Gram confirmó diplococos Gram positivos bacterianos.",
      },
    },
  },
  4: {
    examArea: "Medicina Interna / Gastroenterología / Hepatología",
    topic: "Gastroenterología",
    slug: "gastroenterologia",
    difficulty: "hard",
    correct: "A",
    distractors: {
      B: {
        profile: "premature_escalation",
        feedback:
          "La diálisis se reserva como puente a trasplante o por urgencias dialíticas refractarias al manejo con terlipresina.",
      },
      C: {
        profile: "contraindicated_in_aki",
        feedback:
          "Los diuréticos están contraindicados en LRA activa con sospecha de SHR; exacerban la hipovolemia arterial efectiva.",
      },
      D: {
        profile: "wrong_fluid_choice",
        feedback:
          "Los cristaloides empeoran la ascitis sin expandir volumen arterial efectivo; el expansor validado es la albúmina.",
      },
    },
  },
  5: {
    examArea: "Pediatría / Hematología / Urgencias",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "delayed_intervention",
        feedback:
          "La observación es inadecuada con wet purpura y plaquetas de 4,000/mm³ por riesgo de sangrado del SNC.",
      },
      C: {
        profile: "pathophysiological_flaw",
        feedback:
          "En PTI autoinmune las plaquetas transfundidas se destruyen casi al instante; no corrigen el recuento de forma útil.",
      },
      D: {
        profile: "unnecessary_diagnostic_delay",
        feedback:
          "No se recomienda MO rutinaria en presentación típica de PTI pediátrica antes de IGIV o corticoides.",
      },
    },
  },
  6: {
    examArea: "Medicina Interna / Urgencias / Neumología",
    topic: "Neumología",
    slug: "neumologia",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "insufficient_escalation",
        feedback:
          "El sulfato de magnesio no sustituye el manejo de vía aérea cuando hay somnolencia y tórax silente.",
      },
      B: {
        profile: "contraindicated_in_altered_mental_status",
        feedback:
          "La VMNI está contraindicada con alteración del sensorio por riesgo de broncoaspiración.",
      },
      D: {
        profile: "wrong_indication",
        feedback:
          "La adrenalina IM es para anafilaxia, no sustituye la intubación en asma casi fatal.",
      },
    },
  },
  7: {
    examArea: "Pediatría / Gastroenterología / Cirugía pediátrica",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "A",
    distractors: {
      B: {
        profile: "overly_aggressive",
        feedback:
          "La cirugía directa se reserva para peritonitis, perforación o inestabilidad; aquí el paciente está estable.",
      },
      C: {
        profile: "outdated_diagnostic",
        feedback:
          "El tránsito con bario fue reemplazado por ecografía con alta sensibilidad para intususcepción.",
      },
      D: {
        profile: "passive_management_acute_abdomen",
        feedback:
          "La intususcepción es urgencia por isquemia intestinal; la observación conduce a necrosis.",
      },
    },
  },
  8: {
    examArea: "Medicina Interna / Infectología / Neurología",
    topic: "Infectología",
    slug: "infectologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "premature_invasive",
        feedback:
          "La biopsia se indica solo si no hay mejoría clínica o radiológica tras 10-14 días de tratamiento empírico.",
      },
      C: {
        profile: "risk_of_iris",
        feedback:
          "Iniciar TARV inmediato con neuroinfección no controlada expone a SIRI del SNC potencialmente fatal.",
      },
      D: {
        profile: "wrong_disease_management",
        feedback:
          "Enfoque oncológico inapropiado para toxoplasmosis curable; los corticoides no son rutinarios.",
      },
    },
  },
  9: {
    examArea: "Pediatría / Reumatología / Cardiología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "wrong_paradigm",
        feedback:
          "La fiebre persistente refleja vasculitis autoinmune, no sobreinfección bacteriana que requiera ATB empíricos.",
      },
      C: {
        profile: "dangerous_delay",
        feedback:
          "Esperar con solo aspirina ante Kawasaki refractario expone a aneurismas coronarios; se necesita re-tratamiento ahora.",
      },
      D: {
        profile: "inappropriate_discharge",
        feedback:
          "El egreso con fiebre persistente es inseguro; el ibuprofeno puede antagonizar la aspirina.",
      },
    },
  },
  10: {
    examArea: "Medicina Interna / Endocrinología / Urgencias",
    topic: "Endocrinología",
    slug: "endocrinologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "gap_in_coverage",
        feedback:
          "Suspender IV sin traslape deja una ventana sin insulina y provoca rebote de CAD por la vida media corta de la IV.",
      },
      C: {
        profile: "pure_fluid_mismanagement",
        feedback:
          "Apagar la insulina en DM1 que acaba de resolver CAD garantiza recaída metabólica rápida.",
      },
      D: {
        profile: "unnecessary_prolongation",
        feedback:
          "Prolongar infusión innecesaria retrasa nutrición y aumenta riesgo de hipoglucemia iatrogénica.",
      },
    },
  },
  11: {
    examArea: "Pediatría / Endocrinología / Neonatología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "A",
    distractors: {
      B: {
        profile: "diagnostic_over_therapeutic",
        feedback:
          "El cariotipo y la 17-hidroxiprogesterona confirman el diagnóstico, pero retrasar reanimación hídrica y esteroidea en un paciente chocado es letal.",
      },
      C: {
        profile: "wrong_metabolic_pathway",
        feedback:
          "La galactosemia causa disfunción hepática e ictericia, pero no explica la triada de crisis pierda-sal con hiperpigmentación escrotal.",
      },
      D: {
        profile: "pathophysiological_misunderstanding",
        feedback:
          "El SIADH cursa con normovolemia o hipervolemia y normokalemia; aquí hay deshidratación severa e hiperkalemia por hipoaldosteronismo.",
      },
    },
  },
  12: {
    examArea: "Medicina Interna / Reumatología / Hematología",
    topic: "Reumatología",
    slug: "reumatologia",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "mix_test_misinterpretation",
        feedback:
          "Una deficiencia de factores corregiría el TPTa al aportar plasma normal en la prueba de mezcla 1:1.",
      },
      B: {
        profile: "wrong_clinical_context",
        feedback:
          "No hay sepsis ni sangrado microvascular; en CID se prolongan TP y TPTa con trombocitopenia grave.",
      },
      D: {
        profile: "technical_nonsense",
        feedback:
          "Una variación de 3 segundos (58→55) confirma ausencia de corrección; cambiar la relación de mezcla no es el protocolo estándar.",
      },
    },
  },
  13: {
    examArea: "Medicina Interna / Infectología / Oncología",
    topic: "Infectología",
    slug: "infectologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "risk_underestimation",
        feedback:
          "La estabilidad hemodinámica no quita el alto riesgo de neutropenia profunda (<100) en LMA; la terapia oral ambulatoria está contraindicada.",
      },
      C: {
        profile: "premature_glycopeptide_use",
        feedback:
          "Sin eritema, secreción ni choque séptico, el catéter no justifica vancomicina empírica inicial por riesgo de resistencia.",
      },
      D: {
        profile: "lethal_delay",
        feedback:
          "Sin neutrófilos, la bacteriemia progresa a choque en horas; esperar cultivos antes de medicar es mala praxis.",
      },
    },
  },
  14: {
    examArea: "Pediatría / Urgencias / Neumología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "A",
    distractors: {
      B: {
        profile: "outdated_practice",
        feedback:
          "Las metilxantinas fueron desplazadas por su perfil cardiotóxico y neurotóxico frente al sulfato de magnesio.",
      },
      C: {
        profile: "premature_invasive_ventilation",
        feedback:
          "La intubación tiene alto riesgo de barotrauma; al estar alerta y con sibilancias audibles, se agota primero la terapia de segunda línea.",
      },
      D: {
        profile: "inappropriate_discontinuation",
        feedback:
          "Suspender salbutamol empeora el broncoespasmo; la solución salina hipertónica no tiene indicación en crisis asmática aguda.",
      },
    },
  },
  15: {
    examArea: "Medicina Interna / Hematología / Urgencias",
    topic: "Hematología",
    slug: "hematologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "deadly_intervention",
        feedback:
          "La transfusión de plaquetas está contraindicada en PTT por aumentar la agregación microvascular trombótica en órganos diana.",
      },
      C: {
        profile: "wrong_mechanism_action",
        feedback:
          "La IGIV es pilar de PTI, pero en PTT el problema es déficit de ADAMTS13 por inhibidores; la IGIV no detiene la microangiopatía.",
      },
      D: {
        profile: "unnecessary_diagnostic_delay",
        feedback:
          "Los esquizocitos orientan a daño intravascular, no medular; retrasar plasmaféresis por aspirado de MO aumenta la mortalidad.",
      },
    },
  },
  16: {
    examArea: "Pediatría / Nefrología / Infectología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "surgical_bias_and_adrenal_crisis",
        feedback:
          "La cirugía innecesaria empeora el pronóstico y suspender esteroides bruscamente tras 3 semanas genera insuficiencia suprarrenal aguda.",
      },
      C: {
        profile: "infectious_blindness",
        feedback:
          "Fiebre alta y Blumberg positivo indican proceso infeccioso peritoneal; aumentar inmunosupresión sin ATB lleva a sepsis abdominal.",
      },
      D: {
        profile: "wrong_priority",
        feedback:
          "La albúmina con furosemida maneja edema refractario, pero ante peritonitis la prioridad absoluta es el antibiótico.",
      },
    },
  },
  17: {
    examArea: "Medicina Interna / Neurología / Urgencias",
    topic: "Neurología",
    slug: "neurologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "safety_protocol_violation",
        feedback:
          "Iniciar r-tPA con PA 196/112 mmHg viola criterios de seguridad y expone a hemorragia intracerebral iatrogénica.",
      },
      C: {
        profile: "therapeutic_nihilism",
        feedback:
          "La hipertensión al ingreso no es contraindicación absoluta; si la PA responde al manejo IV, el paciente sigue siendo candidato a trombólisis.",
      },
      D: {
        profile: "excessive_bp_lowering",
        feedback:
          "Bajar la PA drásticamente a rangos normales colapsa la perfusión cerebral en la penumbra isquémica y extiende el infarto.",
      },
    },
  },
  18: {
    examArea: "Pediatría / Cardiología / Reumatología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "A",
    distractors: {
      B: {
        profile: "inappropriate_steroid_use",
        feedback:
          "La prednisolona no está indicada sin carditis; el antibiótico de elección es penicilina benzatínica IM.",
      },
      C: {
        profile: "wrong_pathology_treatment",
        feedback:
          "Simula artritis séptica; la artritis reumática es inmunológica, migratoria y no se beneficia de infiltración local.",
      },
      D: {
        profile: "insufficient_therapy",
        feedback:
          "El acetaminofén no tiene la potencia antiinflamatoria requerida para la poliartritis reumática.",
      },
    },
  },
  19: {
    examArea: "Medicina Interna / Gastroenterología / Urgencias",
    topic: "Gastroenterología",
    slug: "gastroenterologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "outdated_aggressive_practice",
        feedback:
          "La reanimación agresiva con SSN 0.9% aumenta morbimortalidad por sobrecarga hídrica e acidosis hiperclorémica.",
      },
      C: {
        profile: "insufficient_resuscitation",
        feedback:
          "La restricción absoluta causa hipoperfusión pancreática y falla renal por isquemia.",
      },
      D: {
        profile: "unsafe_fluid_choice",
        feedback:
          "Los coloides (especialmente almidones) están contraindicados en estados inflamatorios agudos por riesgo de LRA.",
      },
    },
  },
  20: {
    examArea: "Medicina Interna / Endocrinología / Urgencias",
    topic: "Endocrinología",
    slug: "endocrinologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "deadly_sequencing_error",
        feedback:
          "Pasar levotiroxina sin cobertura glucocorticoide agota el cortisol residual e induce crisis adrenal potencialmente mortal.",
      },
      C: {
        profile: "symptomatic_illusion",
        feedback:
          "El sistema cardiovascular no responde a vasopresores por déficit tiroideo; la hipotensión corrige restituyendo hormonas y esteroides.",
      },
      D: {
        profile: "incorrect_pathophysiological_target",
        feedback:
          "La hiponatremia es dilucional por exceso de ADH; responde a reposición tiroidea; salina hipertónica solo si hay convulsiones activas.",
      },
    },
  },
  21: {
    examArea: "Medicina Interna / Hematología / Oncología",
    topic: "Hematología",
    slug: "hematologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "outdated_and_dangerous_practice",
        feedback:
          "El alopurinol no reduce el ácido úrico ya formado y la alcalinización promueve precipitación de fosfato de calcio con hiperfosfatemia.",
      },
      C: {
        profile: "premature_hemodialysis",
        feedback:
          "La diálisis es recurso final si hay refractariedad; primero se intenta rasburicasa, que puede revertir la nefropatía por uratos.",
      },
      D: {
        profile: "diuretic_misuse",
        feedback:
          "Los diuréticos solo si hay sobrecarga u oliguria post-expansión; usarlos a ciegas deshidrata el túbulo y acelera precipitación de cristales.",
      },
    },
  },
  22: {
    examArea: "Pediatría / Neurología / Urgencias",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "benzodiazepine_overuse",
        feedback:
          "Una tercera benzodiacepina aumenta el riesgo de parada respiratoria y raramente controla la crisis si las primeras dosis fallaron.",
      },
      C: {
        profile: "premature_airway_escalation",
        feedback:
          "Intubación y anestésicos generales se reservan para estado epiléptico refractario tras fallo de segunda línea.",
      },
      D: {
        profile: "misplacement_of_anticonvulsant",
        feedback:
          "El fenobarbital es estándar en estado epiléptico neonatal; en niños >1 mes se desplaza a tercera línea por sedación y depresión respiratoria.",
      },
    },
  },
  23: {
    examArea: "Medicina Interna / Nefrología",
    topic: "Nefrología",
    slug: "nefrologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "timing_and_clinical_mismatch",
        feedback:
          "El daño por contraste pica a los 3-5 días y carece de manifestaciones embólicas cutáneas o eosinofilia.",
      },
      C: {
        profile: "laboratory_overlap_trap",
        feedback:
          "La NTIA comparte eosinofilia y eosinofiluria, pero no explica lesiones isquémicas periféricas ni hipocomplementemia.",
      },
      D: {
        profile: "wrong_pathophysiology",
        feedback:
          "No hay antecedente infeccioso compatible y el sedimento típico sería nefrítico con hematuria dismórfica y cilindros hemáticos.",
      },
    },
  },
  24: {
    examArea: "Pediatría / Gastroenterología / Cirugía pediátrica",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "premature_surgery",
        feedback:
          "Cirugía inmediata sin corrección metabólica está contraindicada por riesgo de apnea postoperatoria y arritmias letales.",
      },
      C: {
        profile: "wrong_diagnosis",
        feedback:
          "La APLV no causa vómitos proyectivos masivos con alcalosis metabólica ni masa pilórica palpable.",
      },
      D: {
        profile: "catastrophic_biochemical_error",
        feedback:
          "El paciente ya está en alcalosis severa (pH 7.54); administrar bicarbonato agrava críticamente el trastorno.",
      },
    },
  },
  25: {
    examArea: "Medicina Interna / Reumatología / Nefrología",
    topic: "Reumatología",
    slug: "reumatologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "empirical_overuse",
        feedback:
          "Los pulsos pueden ser necesarios, pero la biopsia va primero y la hidroxicloroquina nunca se suspende en brote lúpico.",
      },
      C: {
        profile: "premature_treatment_modification",
        feedback:
          "El micofenolato es estándar en clases III/IV, pero cambiar sin histología impide ajustar dosis y evaluar cronicidad.",
      },
      D: {
        profile: "diagnostic_delay",
        feedback:
          "Proteinuria masiva con sedimento activo y LRA ya es indicación absoluta de biopsia; esperar orina 24 h retrasa un procedimiento urgente.",
      },
    },
  },
  26: {
    examArea: "Pediatría / Infectología / Ortopedia",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "catastrophic_misdiagnosis",
        feedback:
          "La sinovitis transitoria cursa sin fiebre alta ni reactantes tan elevados; confundirla con artritis séptica destruye la articulación.",
      },
      B: {
        profile: "incomplete_management_priority",
        feedback:
          "La cobertura ATB es correcta, pero retrasar la descompresión física perpetúa el riesgo de necrosis avascular de la cabeza femoral.",
      },
      D: {
        profile: "unnecessary_diagnostic_delay",
        feedback:
          "La ecografía ya demostró derrame y la clínica es soberana; retrasar drenaje para RMN agrava la isquemia femoral.",
      },
    },
  },
  27: {
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    slug: "cardiologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "diagnostic_trap_ischemia",
        feedback:
          "Ingresar a cateterismo sin estabilizar la aorta ni confirmar disección retrasa cirugía e incrementa riesgo de ruptura.",
      },
      C: {
        profile: "deadly_contraindication",
        feedback:
          "La fibrinólisis en disección aórtica causa hemorragia incontrolable y muerte por taponamiento cardíaco o hemotórax.",
      },
      D: {
        profile: "dangerous_pharmacotherapy",
        feedback:
          "Antiagregar y anticoagular con disrupción de la túnica media destruye la hemostasia local y provoca exanguinación.",
      },
    },
  },
  28: {
    examArea: "Pediatría / Neumología / Urgencias",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "misdiagnosis_and_discharge",
        feedback:
          "Tratar como proceso infeccioso crónico retrasa la remoción del cuerpo extraño y perpetúa daño pulmonar y riesgo de asfixia.",
      },
      B: {
        profile: "wrong_etiology_management",
        feedback:
          "Las sibilancias asmáticas son bilaterales y fluctuantes; sibilancias rígidas unilaterales tras ahogo indican obstrucción mecánica.",
      },
      D: {
        profile: "unnecessary_radiation_and_delay",
        feedback:
          "La TC expone innecesariamente al niño a radiación y retrasa el tratamiento definitivo endoscópico ante clínica clara.",
      },
    },
  },
  29: {
    examArea: "Medicina Interna / Endocrinología",
    topic: "Endocrinología",
    slug: "endocrinologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "catastrophic_pharmacological_clash",
        feedback:
          "La espironolactona interfiere masivamente con la prueba al elevar renina y bloquear aldosterona; debe evitarse en el tamizaje.",
      },
      C: {
        profile: "ignorance_of_drug_interference",
        feedback:
          "Tiazidas y ARA-II estimulan la renina plasmática, reduciendo falsamente la ARR y generando falsos negativos.",
      },
      D: {
        profile: "patient_endangerment",
        feedback:
          "Dejar sin medicación a un hipertenso resistente expone a crisis hipertensiva, ACV o IAM durante la espera.",
      },
    },
  },
  30: {
    examArea: "Medicina Interna / Neumología / Urgencias",
    topic: "Neumología",
    slug: "neumologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "biomarker_misapplication_in_pregnancy",
        feedback:
          "El dímero D se eleva fisiológicamente en gestación; un resultado positivo no confirma nada y obliga a imagen de todos modos.",
      },
      C: {
        profile: "premature_radiation_exposure",
        feedback:
          "Saltarse el Doppler de extremidades priva de un diagnóstico seguro sin radiación sobre tejido mamario materno.",
      },
      D: {
        profile: "non_exclusive_modality",
        feedback:
          "La gammagrafía V/Q es opción si Rx normal y Doppler negativo, pero no es única ni debe preceder la ecografía compresiva.",
      },
    },
  },
  31: {
    examArea: "Pediatría / Nefrología / Infectología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "public_health_trap",
        feedback:
          "Cualquier antibiótico, incluidos macrólidos, exacerba la liberación de toxina Shiga y agrava el cuadro clínico.",
      },
      C: {
        profile: "inappropriate_transfusion_trigger",
        feedback:
          "En microangiopatías trombóticas (SUH/PTT), transfundir plaquetas profilácticamente alimenta el proceso trombótico sistémico.",
      },
      D: {
        profile: "logical_but_deadly",
        feedback:
          "Un beta-lactámico bactericida lisis-dependiente desencadena liberación letal de toxina Shiga al torrente sanguíneo.",
      },
    },
  },
  32: {
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    slug: "cardiologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "catastrophic_preload_reduction",
        feedback:
          "Diuréticos y nitratos reducen la precarga y colapsan el gasto cardíaco del ventrículo derecho isquémico.",
      },
      C: {
        profile: "inappropriate_vasodilation",
        feedback:
          "La nitroglicerina es venodilatador potente y provoca hipotensión extrema en un VD precarga-dependiente.",
      },
      D: {
        profile: "cardiogenic_shock_precipitant",
        feedback:
          "El paciente ya está hipotenso y bradicárdico; un betabloqueador deprime inotropía y cronotropía precipitando choque.",
      },
    },
  },
  33: {
    examArea: "Medicina Interna / Infectología / Oftalmología",
    topic: "Infectología",
    slug: "infectologia",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "failure_to_recognize_cns_involvement",
        feedback:
          "La penicilina benzatínica IM no alcanza concentraciones terapéuticas en humor acuoso, vítreo ni LCR.",
      },
      B: {
        profile: "delayed_and_incorrect_treatment",
        feedback:
          "Independientemente del LCR, la afectación ocular confirma infección del SNC y dicta terapia endovenosa obligatoria.",
      },
      D: {
        profile: "wrong_drug_choice_for_severe_disease",
        feedback:
          "La doxiciclina no es estándar para complicaciones del SNC; además el paciente no es alérgico a penicilina.",
      },
    },
  },
  34: {
    examArea: "Pediatría / Neonatología / Cirugía pediátrica",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "insufficient_medical_management",
        feedback:
          "Manejo médico adecuado para estadio II, pero insuficiente y letal ante perforación intestinal franca (IIIB).",
      },
      C: {
        profile: "contraindicated_diagnostic_test",
        feedback:
          "Enemas con contraste están contraindicados ante neumoperitoneo por riesgo de fuga al peritoneo.",
      },
      D: {
        profile: "wrong_system_pathology",
        feedback:
          "El cuadro es abdominal y séptico; la prostaglandina E1 no repara un intestino perforado.",
      },
    },
  },
  35: {
    examArea: "Medicina Interna / Hematología / Urgencias",
    topic: "Hematología",
    slug: "hematologia",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "drug_cross_reactivity_error",
        feedback:
          "La HNF comparte el mismo mecanismo inmunogénico que la enoxaparina y exacerba el cuadro trombótico.",
      },
      B: {
        profile: "fatal_pharmacological_trap",
        feedback:
          "Iniciar warfarina en fase aguda de TIH depleta Proteína C y causa necrosis cutánea fulminante o gangrena venosa.",
      },
      D: {
        profile: "worsening_thrombosis",
        feedback:
          "Mantener el agente causal alimenta el ciclo inmunológico; transfundir plaquetas provee más PF4 para formar trombos.",
      },
    },
  },
  36: {
    examArea: "Medicina Interna / Gastroenterología / Hepatología",
    topic: "Gastroenterología",
    slug: "gastroenterologia",
    difficulty: "hard",
    correct: "A",
    distractors: {
      B: {
        profile: "misapplied_renal_protection",
        feedback:
          "Terlipresina y albúmina tratan SHR instaurado, no son profilaxis primaria universal en sangrado variceal agudo.",
      },
      C: {
        profile: "wrong_prophylaxis_target",
        feedback:
          "La profilaxis antibiótica sistémica con ceftriaxona impacta mortalidad y resangrado más que el manejo amoniacal.",
      },
      D: {
        profile: "wrong_procedure_timing",
        feedback:
          "Paracentesis en inestabilidad hemodinámica reciente puede desencadenar choque y no sustituye profilaxis antibiótica empírica.",
      },
    },
  },
  37: {
    examArea: "Medicina Interna / Reumatología / Nefrología",
    topic: "Reumatología",
    slug: "reumatologia",
    difficulty: "hard",
    correct: "A",
    distractors: {
      B: {
        profile: "pathophysiological_reversal_trap",
        feedback:
          "Los corticosteroides son el gatillo más fuerte de crisis renal esclerodérmica; dosis altas aceleran vasculopatía oclusiva.",
      },
      C: {
        profile: "strict_guideline_misapplication",
        feedback:
          "Labetalol carece del efecto específico de inhibición del SRAA intrarenal requerido en la CRE.",
      },
      D: {
        profile: "premature_abandonment_of_medical_therapy",
        feedback:
          "Con IECAs agresivos y tempranos, hasta 50% recuperan función renal; la plasmaféresis no tiene rol salvo PTT o ANCA concomitantes.",
      },
    },
  },
  38: {
    examArea: "Pediatría / Infectología / Neonatología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "passive_danger_in_neonate",
        feedback:
          "Antibiótico iniciado en fase sintomática no altera el curso clínico y la tosferina neonatal tiene alta mortalidad.",
      },
      B: {
        profile: "vaccine_timing_and_mechanism_error",
        feedback:
          "La vacuna requiere semanas o meses para generar anticuerpos protectores; es inútil para profilaxis aguda post-exposición.",
      },
      D: {
        profile: "wrong_macrolide_complication",
        feedback:
          "La eritromicina en <1 mes se asocia a estenosis pilórica hipertrófica (no intususcepción); se prefiere azitromicina.",
      },
    },
  },
  39: {
    examArea: "Medicina Interna / Endocrinología / Urgencias",
    topic: "Endocrinología",
    slug: "endocrinologia",
    difficulty: "hard",
    correct: "D",
    distractors: {
      A: {
        profile: "deadly_sequencing_error",
        feedback:
          "Yodo antes de tionamida aporta sustrato masivo para nuevas hormonas tiroideas, exacerbando la tirotoxicosis (Jod-Basedow).",
      },
      B: {
        profile: "incomplete_pathological_blockade",
        feedback:
          "Tratar solo síntomas adrenérgicos sin bloquear síntesis y liberación hormonal asegura fallo multiorgánico prolongado.",
      },
      C: {
        profile: "slightly_out_of_order",
        feedback:
          "La relación PTU-yodo es correcta, pero la primera intervención vital para proteger miocardio y cerebro es el beta-bloqueador.",
      },
    },
  },
  40: {
    examArea: "Pediatría / Toxicología / Urgencias",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "D",
    distractors: {
      A: {
        profile: "false_clinical_marker",
        feedback:
          "La miosis es resistente a atropina sistémica; usarla como meta conduce a sobredosificación y cardiotoxicidad.",
      },
      B: {
        profile: "wrong_receptor_target",
        feedback:
          "Las fasciculaciones son nicotínicas; la atropina no las revierte; para síntomas nicotínicos se requieren oximas (pralidoxima).",
      },
      C: {
        profile: "early_surrogate_marker",
        feedback:
          "La taquicardia aparece pronto con atropina, pero no garantiza alvéolos libres de secreciones; detenerse allí expone a asfixia.",
      },
    },
  },
  41: {
    examArea: "Medicina Interna / Neumología / Urgencias",
    topic: "Neumología",
    slug: "neumologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "anatomical_error",
        feedback:
          "Intubar selectivamente el bronquio derecho dirige la ventilación a la zona de hemorragia y deja sin ventilar el pulmón sano.",
      },
      C: {
        profile: "catastrophic_positioning",
        feedback:
          "Con el pulmón enfermo arriba, la gravedad drena la sangre hacia el pulmón sano izquierdo causando asfixia inmediata.",
      },
      D: {
        profile: "insufficient_conservative_management",
        feedback:
          "El ácido tranexámico es coadyuvante; diferir la vía aérea avanzada con SatO2 84% y sangrado activo es negligencia fatal.",
      },
    },
  },
  42: {
    examArea: "Pediatría / Cardiología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "wrong_age_intervention",
        feedback:
          "La prostaglandina E1 es vital en el neonato; a los 8 meses el ductus está cerrado y fibrótico, siendo inútil.",
      },
      B: {
        profile: "contraindicated_positive_inotrope",
        feedback:
          "La digoxina es inotrópico positivo; aumenta el espasmo del infundíbulo pulmonar y empeora la crisis.",
      },
      D: {
        profile: "absurd_diagnosis",
        feedback:
          "La cianosis con desaparición del soplo en Fallot tiene fisiopatología clara; la ruptura de pared libre es de IAM en adultos.",
      },
    },
  },
  43: {
    examArea: "Medicina Interna / Gastroenterología / Hepatología",
    topic: "Gastroenterología",
    slug: "gastroenterologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "lack_of_secondary_prevention",
        feedback:
          "Omitir la profilaxis secundaria tras PBE es mala praxis por la alta mortalidad asociada a la recurrencia.",
      },
      C: {
        profile: "wrong_prophylaxis_route",
        feedback:
          "Las cefalosporinas IM no son estándar para profilaxis prolongada por complicaciones en coagulópatas y resistencia; se prefiere la vía oral.",
      },
      D: {
        profile: "wrong_drug_indication",
        feedback:
          "La rifaximina es pilar de la encefalopatía hepática; no reemplaza a quinolonas o TMP-SMX en profilaxis secundaria de PBE.",
      },
    },
  },
  44: {
    examArea: "Pediatría / Endocrinología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "catastrophic_delay",
        feedback:
          "Esperar síntomas clínicos (cretinismo) significa que el daño neurocognitivo irreversible ya se instauró.",
      },
      B: {
        profile: "prioritization_of_diagnosis_over_brain",
        feedback:
          "La etiología no cambia la necesidad de reemplazo; retrasar la T4 por imágenes es mala práctica.",
      },
      D: {
        profile: "opposite_pharmacological_effect",
        feedback:
          "El PTU es antitiroideo (para hipertiroidismo); en hipotiroidismo agrava severamente el cuadro.",
      },
    },
  },
  45: {
    examArea: "Medicina Interna / Infectología / Neurología",
    topic: "Infectología",
    slug: "infectologia",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "deadly_extrapolation_from_bacterial_guidelines",
        feedback:
          "La dexametasona está contraindicada en meningitis criptocócica aguda; no alivia la HIC y aumenta la mortalidad.",
      },
      B: {
        profile: "abandonment_of_induction_therapy",
        feedback:
          "El deterioro es por HIC mecánica, no fallo del fármaco; la inducción con Anfotericina + Flucitosina debe completarse.",
      },
      D: {
        profile: "wrong_medical_and_surgical_indication",
        feedback:
          "El manitol no tiene eficacia comprobada; la DVP se reserva solo si fallan las punciones lumbares seriadas.",
      },
    },
  },
  46: {
    examArea: "Medicina Interna / Nefrología / Reumatología",
    topic: "Reumatología",
    slug: "reumatologia",
    difficulty: "hard",
    correct: "D",
    distractors: {
      A: {
        profile: "goodpasture_trap",
        feedback:
          "Goodpasture causa hemorragia alveolar y GN, pero no úlceras orales ni costras nasales granulomatosas de vía aérea superior.",
      },
      B: {
        profile: "microscopic_polyangiitis_overlap",
        feedback:
          "Los p-ANCA (Anti-MPO) son de MPA y Churg-Strauss; la MPA no presenta inflamación destructiva severa de vía aérea superior.",
      },
      C: {
        profile: "lupus_generalization",
        feedback:
          "El LES puede causar nefritis, pero no es la primera opción ante necrosis de vía aérea superior ligada a vasculitis ANCA.",
      },
    },
  },
  47: {
    examArea: "Pediatría / Oncología / Cirugía pediátrica",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "premature_and_deadly_surgery",
        feedback:
          "La cirugía de rutina en tiflitis no complicada tiene morbimortalidad inaceptable por sangrado y sepsis de la herida.",
      },
      C: {
        profile: "absolute_contraindication",
        feedback:
          "Introducir contraste a presión en un ciego friable y necrótico precipita perforación intestinal iatrogénica.",
      },
      D: {
        profile: "invasive_diagnostic_danger",
        feedback:
          "La colonoscopia está contraindicada en tiflitis aguda por altísimo riesgo de perforar el intestino isquémico.",
      },
    },
  },
  48: {
    examArea: "Medicina Interna / Cardiología / Neurología",
    topic: "Cardiología",
    slug: "cardiologia",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "dangerous_outpatient_management",
        feedback:
          "La warfarina tarda 3-5 días en ser terapéutica; egresar con INR 1.4 sin puente de heparina expone a infarto cerebral masivo.",
      },
      B: {
        profile: "absolute_guideline_contraindication",
        feedback:
          "Los DOACs están estrictamente contraindicados en prótesis valvulares mecánicas (aumentan trombosis y sangrado).",
      },
      D: {
        profile: "catastrophic_triple_therapy",
        feedback:
          "La doble antiagregación no corrige el déficit de factores dependientes de vitamina K y multiplica el riesgo de hemorragia intracraneal.",
      },
    },
  },
  49: {
    examArea: "Medicina Interna / Gastroenterología / Toxicología",
    topic: "Gastroenterología",
    slug: "gastroenterologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "wrong_coagulopathy_management_in_alf",
        feedback:
          "El INR es marcador pronóstico endógeno (King's College); corregirlo con plasma lo enmascara y no revierte la necrosis hepática.",
      },
      C: {
        profile: "overreliance_on_extracorporeal_therapy",
        feedback:
          "El NAPQI se une covalente y permanentemente a los hepatocitos; no flota libre a las 72 h para removerse por diálisis.",
      },
      D: {
        profile: "deadly_outdated_knowledge",
        feedback:
          "Asumir que la NAC no sirve tras 24 h priva del único agente comprobado para reducir mortalidad en necrosis por paracetamol.",
      },
    },
  },
  50: {
    examArea: "Pediatría / Infectología / Urgencias",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "omission_of_passive_immunity",
        feedback:
          "Solo vacuna en exposición Categoría III deja una ventana de 1-2 semanas en que el virus puede ascender al encéfalo.",
      },
      C: {
        profile: "epidemiological_ignorance",
        feedback:
          "El ciclo silvestre (murciélagos) es permanente; subestimar el riesgo garantiza mortalidad del 100% si se contrae el virus.",
      },
      D: {
        profile: "failure_to_induce_active_immunity",
        feedback:
          "La IGAR tiene vida media corta; sin la vacuna que genere memoria propia, el paciente queda desprotegido al agotarse.",
      },
    },
  },
  51: {
    examArea: "Medicina Interna / Neumología / Infectología",
    topic: "Neumología",
    slug: "neumologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "passive_and_insufficient_management",
        feedback:
          "El antibiótico aislado no penetra el espacio pleural infectado y permite la organización del derrame en lóculos fibróticos.",
      },
      C: {
        profile: "premature_surgical_intervention",
        feedback:
          "La VATS/decorticación es segunda línea si fracasan el tubo de tórax y los fibrinolíticos o si hay fase organizativa avanzada.",
      },
      D: {
        profile: "diagnostic_delay_in_emergency",
        feedback:
          "Retrasar el drenaje de líquido ácido y con Gram positivo para tomar imágenes aumenta la morbilidad y la sepsis local.",
      },
    },
  },
  52: {
    examArea: "Pediatría / Infectología / Nefrología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "A",
    distractors: {
      B: {
        profile: "overdiagnosis_and_unnecessary_invasion",
        feedback:
          "La CUMC es invasiva y no es tamizaje de rutina en la primera IVU si la ecografía es normal.",
      },
      C: {
        profile: "misapplied_advanced_imaging",
        feedback:
          "El DMSA evalúa cicatrices crónicas; se reserva para IVU recurrentes o pielonefritis atípica, no de rutina inicial.",
      },
      D: {
        profile: "diagnostic_omission",
        feedback:
          "En lactantes, la IVU febril puede ser la primera manifestación de malformaciones nefrourológicas que requieren ecografía.",
      },
    },
  },
  53: {
    examArea: "Medicina Interna / Endocrinología / Urgencias",
    topic: "Endocrinología",
    slug: "endocrinologia",
    difficulty: "hard",
    correct: "A",
    distractors: {
      B: {
        profile: "dehydration_exacerbation",
        feedback:
          "La furosemida de entrada exacerba la deshidratación, reduce el filtrado glomerular y empeora la hipercalcemia.",
      },
      C: {
        profile: "inverse_treatment_fatal",
        feedback:
          "El gluconato de calcio es para hiperkalemia/hipocalcemia; darlo con calcio de 14.8 puede causar paro cardíaco en sístole.",
      },
      D: {
        profile: "premature_surgery",
        feedback:
          "Operar a un paciente metabólicamente inestable en crisis hipercalcémica tiene mortalidad inaceptable; primero se estabiliza.",
      },
    },
  },
  54: {
    examArea: "Pediatría / Gastroenterología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "outdated_serology",
        feedback:
          "Los anti-gliadina se abandonaron por baja especificidad; los isotipos IgG no son primera línea salvo deficiencia de IgA.",
      },
      C: {
        profile: "premature_invasive_testing",
        feedback:
          "Endoscopia con anestesia sin serología previa viola los algoritmos escalonados coste-efectivos y de seguridad.",
      },
      D: {
        profile: "non_specific_and_wrong_antibody",
        feedback:
          "El Van de Kamer confirma esteatorrea pero no la etiología, y los IgM no tienen rol validado en enteropatía por gluten.",
      },
    },
  },
  55: {
    examArea: "Medicina Interna / Cardiología",
    topic: "Cardiología",
    slug: "cardiologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "deadly_node_blocker",
        feedback:
          "La adenosina bloquea el nodo AV forzando conducción exclusiva por la vía accesoria; induce fibrilación ventricular y muerte súbita.",
      },
      C: {
        profile: "dangerous_pharmacological_trap",
        feedback:
          "Calcioantagonistas y betabloqueadores aumentan la conducción por la vía accesoria; precipitan choque y ritmos letales.",
      },
      D: {
        profile: "premature_electricity",
        feedback:
          "La cardioversión eléctrica es de elección solo si hay inestabilidad hemodinámica, ausente en esta paciente estable.",
      },
    },
  },
  56: {
    examArea: "Pediatría / Reumatología / Nefrología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "overreliance_on_unproven_efficacy",
        feedback:
          "Los corticosteroides no tienen eficacia demostrada para prevenir el daño renal en presentaciones leves de vasculitis por IgA.",
      },
      C: {
        profile: "aggressive_treatment_error",
        feedback:
          "La ciclofosfamida tiene alta toxicidad gonadal y medular; se reserva para GN lúpica o vasculitis ANCA severas, no nefritis IgA leve.",
      },
      D: {
        profile: "inappropriate_medication_and_diet",
        feedback:
          "La aspirina aumenta el riesgo de sangrado en un intestino ya inflamado y suspender la vía oral sin abdomen agudo desnutre al niño.",
      },
    },
  },
  57: {
    examArea: "Medicina Interna / Nefrología",
    topic: "Nefrología",
    slug: "nefrologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "wrong_pathology_and_antibody",
        feedback:
          "La enfermedad de cambios mínimos no se asocia a Anti-PLA2R y su primera línea son corticosteroides, no ciclofosfamida.",
      },
      C: {
        profile: "immunologic_misinterpretation",
        feedback:
          "La GN membranoproliferativa cursa con hipocomplementemia y sedimento nefrítico; no se relaciona con Anti-PLA2R.",
      },
      D: {
        profile: "wrong_association_and_insufficient_therapy",
        feedback:
          "El PLA2R es exclusivo de la membranosa, no de la focal y segmentaria; el alto riesgo requiere inmunosupresión biológica.",
      },
    },
  },
  58: {
    examArea: "Pediatría / Neumología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "cutting_edge_threshold_ignorance",
        feedback:
          "Ignorar que 48-52 mEq/L es anormal e indeterminado retrasa el diagnóstico de una enfermedad letal con secuelas irreversibles.",
      },
      C: {
        profile: "premature_confirmation",
        feedback:
          "El test de sudor sella el diagnóstico solo con ≥60 mEq/L; la zona gris requiere confirmación genética obligatoria.",
      },
      D: {
        profile: "technical_absurdity",
        feedback:
          "La iontoforesis con pilocarpina se realiza en la piel; la saliva no es matriz validada para medir cloro en FQ.",
      },
    },
  },
  59: {
    examArea: "Medicina Interna / Infectología / Cardiología",
    topic: "Infectología",
    slug: "infectologia",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "outdated_dogma",
        feedback:
          "El dogma de que el lado derecho nunca se opera es falso; ignorar vegetación gigante con embolismo activo aumenta la mortalidad.",
      },
      B: {
        profile: "deadly_anticoagulation_in_ie",
        feedback:
          "La anticoagulación está contraindicada en EI activa (salvo prótesis mecánica) por riesgo de hemorragia por aneurismas micóticos.",
      },
      D: {
        profile: "improper_delay_of_indicated_surgery",
        feedback:
          "La daptomicina es buena opción, pero cambiar el fármaco no resuelve la vegetación de 22 mm que sigue embolizando.",
      },
    },
  },
  60: {
    examArea: "Medicina Interna / Urgencias / Toxicología",
    topic: "Toxicología",
    slug: "toxicologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "dangerous_diagnostic_delay",
        feedback:
          "El bicarbonato ayuda, pero usarlo solo y esperar niveles séricos sin antídoto ni diálisis causa muerte cerebral iatrogénica.",
      },
      C: {
        profile: "blind_protocol_application",
        feedback:
          "Con gases devastadores conocidos y sospecha clara de metanol, el flumazenil puede desencadenar convulsiones sin beneficio.",
      },
      D: {
        profile: "ineffective_toxicological_intervention",
        feedback:
          "El carbón activado no adsorbe alcoholes de bajo peso molecular y el lavado en coma sin vía aérea causa broncoaspiración masiva.",
      },
    },
  },
  61: {
    examArea: "Medicina Interna / Reumatología / Neumología",
    topic: "Reumatología",
    slug: "reumatologia",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "classic_dermatomyositis_trap",
        feedback:
          "Los anti-Mi2 son de la dermatomiositis clásica (heliotropo/Gottron), con baja asociación a EPID y manos de mecánico.",
      },
      B: {
        profile: "overlapping_rheumatology_marker",
        feedback:
          "Los anti-Scl70 marcan esclerosis sistémica difusa; causan fibrosis pero no miositis con CPK en miles.",
      },
      D: {
        profile: "hyper_acute_phenotype_trap",
        feedback:
          "Los anti-MDA5 se asocian a dermatomiositis amiopática con EPID fulminante y úlceras, no al antisintetasa clásico.",
      },
    },
  },
  62: {
    examArea: "Pediatría / Nefrología / Trastornos electrolíticos",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "tubulopathy_overlap_trap",
        feedback:
          "El Bartter debuta en la lactancia con poliuria y retraso severo, y cursa con hipercalciuria, no hipocalciuria.",
      },
      C: {
        profile: "hypertensive_vs_normotensive_alkalosis",
        feedback:
          "El hiperaldosteronismo primario cursa invariablemente con hipertensión por expansión de volumen.",
      },
      D: {
        profile: "opposite_acid_base_disorder",
        feedback:
          "La ATR distal cursa con acidosis metabólica hiperclorémica, el opuesto de la alcalosis de este niño.",
      },
    },
  },
  63: {
    examArea: "Medicina Interna / Nefrología",
    topic: "Nefrología",
    slug: "nefrologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "insufficient_therapy_for_crescentic_gn",
        feedback:
          "El manejo conservador es regla en IgA de lenta progresión, pero es ineficaz en la variante crecentérica que lleva a anuria en días.",
      },
      C: {
        profile: "wrong_immuno_modality",
        feedback:
          "La plasmaféresis es pilar de Goodpasture o vasculitis ANCA con hemorragia alveolar, sin beneficio neto en IgA crecentérica aislada.",
      },
      D: {
        profile: "premature_abandonment",
        feedback:
          "Las semilunas celulares son agudas y potencialmente reversibles con inmunosupresión a tiempo; catalogar como ERC terminal es prematuro.",
      },
    },
  },
  64: {
    examArea: "Pediatría / Gastroenterología / Cirugía pediátrica",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "wrong_anatomic_site_investigation",
        feedback:
          "Los pólipos juveniles sangran escaso en estrías; la colonoscopia no visualiza el íleon proximal donde está el Meckel.",
      },
      C: {
        profile: "excessive_radiation_and_low_utility",
        feedback:
          "La Angio-TC solo detecta sangrado muy activo (>0.5 mL/min) en el momento exacto y expone al lactante a alta radiación.",
      },
      D: {
        profile: "dangerous_discharge_and_wrong_etiology",
        feedback:
          "Sin fiebre ni diarrea cólica sugestiva de enteritis, dar de alta a un niño con anemia aguda por sangrado masivo es negligencia.",
      },
    },
  },
  65: {
    examArea: "Medicina Interna / Cardiología",
    topic: "Cardiología",
    slug: "cardiologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "premature_surgery_without_differentiation",
        feedback:
          "Operar sin diferenciar estenosis verdadera de pseudosevera expone a alta mortalidad si la falla es una miocardiopatía primaria.",
      },
      C: {
        profile: "misapplied_alternative_modality",
        feedback:
          "El score de calcio es útil con FEVI conservada; con FEVI reducida, el reto con dobutamina es la primera línea obligatoria.",
      },
      D: {
        profile: "dangerous_conservative_delay",
        feedback:
          "Los betabloqueadores a dosis altas reducen aún más la inotropía de un ventrículo que falla en vencer la postcarga, precipitando choque.",
      },
    },
  },
  66: {
    examArea: "Pediatría / Infectología / Urgencias",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "omission_of_toxin_suppression_and_mrsa",
        feedback:
          "La ceftriaxona no cubre SAMR ni bloquea la transcripción ribosomal de la toxina TSST-1.",
      },
      C: {
        profile: "wrong_spectrum_for_staph",
        feedback:
          "Este esquema está obsoleto por resistencia a betalactamasas y la gentamicina no suprime toxinas.",
      },
      D: {
        profile: "inappropriate_broad_spectrum",
        feedback:
          "El meropenem no cubre bien SAMR comunitario ni iguala la potencia antitoxina de la clindamicina.",
      },
    },
  },
  67: {
    examArea: "Medicina Interna / Gastroenterología / Infectología",
    topic: "Gastroenterología",
    slug: "gastroenterologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "misapplied_cirrhosis_algorithm",
        feedback:
          "Los diuréticos sirven con SAAG ≥1.1; con SAAG bajo el líquido es inflamatorio/tumoral local y solo causarán falla prerrenal.",
      },
      C: {
        profile: "cell_count_misinterpretation",
        feedback:
          "La PBE cursa con PMN ≥250/mm³ en cirróticos; este líquido es de predominio linfocítico, descartando infección bacteriana aguda.",
      },
      D: {
        profile: "cardiac_etiology_clash",
        feedback:
          "La falla cardíaca cursa con SAAG alto (≥1.1) por presión hidrostática, incompatible con el gradiente de 0.9 hallado.",
      },
    },
  },
  68: {
    examArea: "Pediatría / Hematología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "wrong_antibody_type",
        feedback:
          "La AHAI caliente es por IgG y el Coombs sería positivo para IgG, sin la asociación con neumonía atípica.",
      },
      C: {
        profile: "congenital_vs_autoimmune",
        feedback:
          "La esferocitosis es un defecto estructural hereditario de la membrana y cursa con Coombs directo negativo.",
      },
      D: {
        profile: "microangiopathy_mismatch",
        feedback:
          "El SUH por neumococo es hemólisis microangiopática no inmune con esquizocitos y Coombs negativo.",
      },
    },
  },
  69: {
    examArea: "Medicina Interna / Endocrinología / Urgencias",
    topic: "Endocrinología",
    slug: "endocrinologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "wrong_modality_and_dangerous_delay",
        feedback:
          "La cabergolina es manejo crónico del prolactinoma; no tiene rol en hemorragia aguda y es inútil por sonda en una paciente estuporosa.",
      },
      C: {
        profile: "premature_surgery_without_metabolic_stabilization",
        feedback:
          "La cirugía descompresiva (transesfenoidal) debe posponerse hasta revertir el choque adrenal con esteroides.",
      },
      D: {
        profile: "catastrophic_hemodynamic_error",
        feedback:
          "Con PA 74/38, un vasodilatador potente como el nitroprusiato colapsa la perfusión cerebral causando muerte encefálica.",
      },
    },
  },
  70: {
    examArea: "Medicina Interna / Infectología / Urgencias",
    topic: "Infectología",
    slug: "infectologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "wrong_species_and_outdated_guideline",
        feedback:
          "La cloroquina solo sirve para P. vivax; el P. falciparum es resistente en Colombia y el manejo ambulatorio en coma es letal.",
      },
      C: {
        profile: "inappropriate_route_for_severe_disease",
        feedback:
          "Arteméter+Lumefantrina es de primera línea en malaria NO complicada; el paciente estuporoso no tolera ni absorbe la vía oral.",
      },
      D: {
        profile: "outdated_first_line",
        feedback:
          "La quinina IV se desplazó a segunda línea por ser más tóxica y menos eficaz que el artesunato IV.",
      },
    },
  },
  71: {
    examArea: "Medicina Interna / Cardiología",
    topic: "Cardiología",
    slug: "cardiologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "premature_interventional_procedure",
        feedback:
          "La valvuloplastia es el tratamiento definitivo si falla el manejo médico, pero no de entrada sin estabilizar la FA y el edema pulmonar.",
      },
      C: {
        profile: "electrical_misapplication",
        feedback:
          "La cardioversión es para inestabilidad profunda; en normotensa, revertir una aurícula dilatada sin anticoagulación previa arriesga ACV.",
      },
      D: {
        profile: "dangerous_hemodynamic_and_fetal_drug",
        feedback:
          "El VI está sano y no sufre por postcarga; el nitroprusiato está contraindicado en embarazo por toxicidad fetal por cianuro.",
      },
    },
  },
  72: {
    examArea: "Pediatría / Infectología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "platelete_transfusion_trap",
        feedback:
          "La OMS/OPS prohíbe la transfusión profiláctica de plaquetas en dengue; no previene sangrado y aumenta sobrecarga hídrica.",
      },
      C: {
        profile: "vasoactive_before_volume_error",
        feedback:
          "Usar vasopresores con las venas vacías por fuga plasmática provoca vasoconstricción destructiva y falla multiorgánica.",
      },
      D: {
        profile: "diagnostic_delay_in_shock",
        feedback:
          "Retrasar la reanimación de un niño en choque para tomar imágenes es negligente; la prioridad es restaurar la perfusión.",
      },
    },
  },
  73: {
    examArea: "Medicina Interna / Gastroenterología / Hepatología",
    topic: "Gastroenterología",
    slug: "gastroenterologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "toxic_outdated_medication",
        feedback:
          "La neomicina fue abandonada por nefrotoxicidad y ototoxicidad acumulativa en cirróticos.",
      },
      C: {
        profile: "transient_illusion_marker",
        feedback:
          "El flumazenil da mejoría transitoria de minutos y no altera la acumulación de amonio cerebral que causa el edema astrocitario.",
      },
      D: {
        profile: "unproven_monotherapy",
        feedback:
          "LOLA estimula el ciclo de la urea, pero la evidencia no permite usarla como sustituto de lactulosa + rifaximina.",
      },
    },
  },
  74: {
    examArea: "Pediatría / Nefrología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "dangerous_clinical_passivity",
        feedback:
          "Es falso que el C3 dure bajo un año en GNPE; ignorar la hipocomplementemia prolongada retrasa diagnósticos que progresan a ERC terminal.",
      },
      C: {
        profile: "empirical_treatment_error",
        feedback:
          "Nunca se inicia inmunosupresión sistémica tóxica en nefrología pediátrica sin diagnóstico histológico por biopsia.",
      },
      D: {
        profile: "wrong_pathophysiological_target",
        feedback:
          "La glomerulonefritis es inmunológica por complejos, no infección activa; más antibiótico no altera el complemento.",
      },
    },
  },
  75: {
    examArea: "Medicina Interna / Neurología",
    topic: "Neurología",
    slug: "neurologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "diagnostic_vs_prognostic_marker",
        feedback:
          "La disociación albúmino-citológica confirma el diagnóstico, pero no correlaciona con la parálisis respiratoria ni guía la vía aérea.",
      },
      C: {
        profile: "non_acute_utility",
        feedback:
          "La EMG clasifica la variante (AIDP vs AMAN), pero es estática y no define el soporte ventilatorio agudo.",
      },
      D: {
        profile: "academic_distractor",
        feedback:
          "Los anti-GM1 se asocian a la variante axonal post-Campylobacter, pero no informan sobre la fatiga del diafragma en tiempo real.",
      },
    },
  },
  76: {
    examArea: "Pediatría / Infectología / Neonatología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "A",
    distractors: {
      B: {
        profile: "absolute_neonatal_contraindication",
        feedback:
          "La ceftriaxona está contraindicada en <28 días por riesgo de Kernicterus y precipitación orgánica con calcio.",
      },
      C: {
        profile: "inappropriate_broad_spectrum",
        feedback:
          "Este ultra-espectro es para sepsis neonatal tardía nosocomial, no para transmisión vertical del canal del parto.",
      },
      D: {
        profile: "neonatal_toxic_combination",
        feedback:
          "Reitera el error de la ceftriaxona neonatal; ampicilina + gentamicina alcanzan sinergia adecuada sin toxicidad biliar.",
      },
    },
  },
  77: {
    examArea: "Medicina Interna / Gastroenterología / Hepatología",
    topic: "Gastroenterología",
    slug: "gastroenterologia",
    difficulty: "hard",
    correct: "A",
    distractors: {
      B: {
        profile: "endoscopia_loop_error",
        feedback:
          "Repetir endoscopia tras el fallo de una ligadura exitosa tiene alto riesgo de perforación, visibilidad nula y retrasa el TIPS salvavidas.",
      },
      C: {
        profile: "futile_drug_switch",
        feedback:
          "Cambiar terlipresina por octreotide no aporta beneficio mecánico; el fallo es por hipertensión portal anatómica refractaria.",
      },
      D: {
        profile: "archaic_and_lethal_surgery",
        feedback:
          "La cirugía shunt abierta está en desuso por mortalidad perioperatoria del 80-90% en reserva hepática comprometida.",
      },
    },
  },
  78: {
    examArea: "Pediatría / Toxicología / Urgencias",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "polar_opposite_trap",
        feedback:
          "El toxídrome colinérgico produce el opuesto: miosis, sialorrea, broncorrea y diarrea (paciente mojado).",
      },
      C: {
        profile: "wrong_syndrome_and_dangerous_drug",
        feedback:
          "El simpaticomimético cursa con diaforesis profusa; el propranolol puro causa estimulación alfa-1 sin oposición y crisis hipertensiva.",
      },
      D: {
        profile: "incompatible_presentation",
        feedback:
          "El toxídrome sedante deprime el SNC con estupor, hiporreflexia y bradicardia, opuesto a la taquicardia e hipertermia de esta viñeta.",
      },
    },
  },
  79: {
    examArea: "Medicina Interna / Neumología / Urgencias",
    topic: "Neumología",
    slug: "neumologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "premature_invasive_ventilation",
        feedback:
          "La intubación directa es prematura; la VMNI evita la ventilación invasiva en >80% de los casos con sus complicaciones en EPOC.",
      },
      C: {
        profile: "lethal_hyperoxia",
        feedback:
          "Saturar a un EPOC retenedor >95% anula el reflejo hipóxico, empeora el V/Q y sube la PaCO2 por efecto Haldane, induciendo coma.",
      },
      D: {
        profile: "dangerous_treatment_delay",
        feedback:
          "Esteroides y broncodilatadores son necesarios, pero retrasar el soporte con pH 7.22 causa fatiga diafragmática irreversible y paro.",
      },
    },
  },
  80: {
    examArea: "Medicina Interna / Nefrología / Trastornos ácido-base",
    topic: "Nefrología",
    slug: "nefrologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "diagnostic_and_therapeutic_clash",
        feedback:
          "El cloro urinario de 6 mEq/L demuestra cuadro cloruro-sensible; el HCl central es medida ultra-extrema reservada para pH >7.55 refractario.",
      },
      C: {
        profile: "dangerous_electrolyte_worsening",
        feedback:
          "La acetazolamida excreta potasio masivamente; darla con potasio de 2.1 provoca hipokalemia fatal con Torsades de Pointes.",
      },
      D: {
        profile: "wrong_mechanism_action",
        feedback:
          "El gluconato de calcio estabiliza el miocardio en hiperkalemia; aquí no aporta beneficio en alcalosis con hipokalemia extrema.",
      },
    },
  },
  81: {
    examArea: "Pediatría / Urgencias / Neumología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "fatal_airway_manipulation",
        feedback:
          "Manipular la orofaringe con bajalenguas en epiglotitis puede desencadenar laringoespasmo reflejo y oclusión completa de la vía aérea.",
      },
      C: {
        profile: "wrong_disease_management",
        feedback:
          "La adrenalina nebulizada y esteroides tratan el crupe; no desinflaman una epiglotis cartilaginosa edematizada ni resuelven la obstrucción mecánica.",
      },
      D: {
        profile: "dangerous_diagnostic_delay",
        feedback:
          "Trasladar a radiología a un niño en riesgo de colapso respiratorio retrasa el aseguramiento de la vía aérea y puede precipitar paro.",
      },
    },
  },
  82: {
    examArea: "Medicina Interna / Gastroenterología / Oncología",
    topic: "Gastroenterología",
    slug: "gastroenterologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "unnecessary_invasive_procedure",
        feedback:
          "En cirrótico con lesión LI-RADS 5, la biopsia no está indicada y añade riesgo de siembra tumoral y hemorragia sin cambiar la conducta.",
      },
      C: {
        profile: "unnecessary_diagnostic_delay",
        feedback:
          "El diagnóstico ya es definitivo por imagen; repetir RMN y esperar 6 meses retrasa un tratamiento potencialmente curable.",
      },
      D: {
        profile: "premature_systemic_therapy",
        feedback:
          "El sorafenib es para CHC avanzado (BCLC C); una lesión única de 2.2 cm es candidata a terapia curativa, no sistémica empírica.",
      },
    },
  },
  83: {
    examArea: "Medicina Interna / Reumatología",
    topic: "Reumatología",
    slug: "reumatologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "dangerous_diagnostic_delay",
        feedback:
          "Diferir el esteroide por esperar la biopsia expone a ceguera irreversible; la histología no se altera si se biopsia dentro de 2 semanas.",
      },
      C: {
        profile: "insufficient_dose_and_route",
        feedback:
          "Prednisona oral a dosis bajas y estudio ambulatorio son insuficientes ante amenaza visual aguda; se requieren pulsos IV inmediatos.",
      },
      D: {
        profile: "wrong_pathophysiology",
        feedback:
          "La pérdida visual es por vasculitis inflamatoria de arterias ciliares, no embólica; la anticoagulación no detiene el proceso inmunológico.",
      },
    },
  },
  84: {
    examArea: "Pediatría / Gastroenterología / Cirugía pediátrica",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "premature_surgery",
        feedback:
          "La laparotomía de entrada en enterocolitis con tejidos friables e inflamados tiene mortalidad altísima; primero se estabiliza y descomprime.",
      },
      C: {
        profile: "absolute_contraindication",
        feedback:
          "El colon por enema a presión en enterocolitis activa perfora el colon necrótico y provoca peritonitis fecal letal.",
      },
      D: {
        profile: "wrong_system_pathology",
        feedback:
          "El cuadro es abdominal y séptico por Hirschsprung; la prostaglandina E1 no tiene rol en un colon aganglionar con enterocolitis.",
      },
    },
  },
  85: {
    examArea: "Medicina Interna / Nefrología / Trastornos electrolíticos",
    topic: "Nefrología",
    slug: "nefrologia",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "ineffective_and_slow_measure",
        feedback:
          "Furosemida y bicarbonato actúan lento y no protegen el miocardio; con onda sinusoidal el paciente entra en FV antes de su efecto.",
      },
      B: {
        profile: "wrong_sequencing_error",
        feedback:
          "La insulina-dextrosa tarda 15-30 min en actuar; sin estabilizar antes con calcio, la onda sinusoidal progresa a asistolia o FV.",
      },
      D: {
        profile: "delayed_definitive_therapy",
        feedback:
          "La diálisis es la solución definitiva pero no inmediata; sin el escudo de calcio previo el corazón puede detenerse mientras se prepara.",
      },
    },
  },
  86: {
    examArea: "Pediatría / Oncología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "contraindicated_biopsy",
        feedback:
          "La biopsia percutánea rompe la cápsula del tumor de Wilms, siembra el peritoneo y sube el estadio, obligando a radioterapia iatrogénica.",
      },
      C: {
        profile: "premature_surgery_without_staging",
        feedback:
          "Operar sin imágenes impide detectar trombo tumoral en vena cava, metástasis pulmonares o tumor bilateral que cambian el abordaje.",
      },
      D: {
        profile: "empirical_chemotherapy_error",
        feedback:
          "Iniciar quimioterapia solo con un parcial de orina, sin estadificación ni confirmación imagenológica, es inaceptable.",
      },
    },
  },
  87: {
    examArea: "Medicina Interna / Infectología / Cardiología",
    topic: "Infectología",
    slug: "infectologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "dangerous_passivity",
        feedback:
          "Un bloqueo AV de novo no es progresión benigna; ignorarlo y esperar una semana permite la destrucción del anillo aórtico.",
      },
      C: {
        profile: "wrong_etiology_attribution",
        feedback:
          "La vancomicina no causa bloqueo AV; atribuirlo a toxicidad y suspender el ATB deja sin cobertura una endocarditis por SAMR.",
      },
      D: {
        profile: "wrong_anatomic_extension",
        feedback:
          "El bloqueo AV se origina en la contigüidad de la raíz aórtica con el nodo AV, no en la tricúspide; la Rx de tórax no evalúa abscesos.",
      },
    },
  },
  88: {
    examArea: "Medicina Interna / Endocrinología",
    topic: "Endocrinología",
    slug: "endocrinologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "deadly_sequencing_error",
        feedback:
          "Iniciar el betabloqueador primero deja la estimulación alfa-1 sin oposición y precipita crisis hipertensiva maligna y edema pulmonar.",
      },
      C: {
        profile: "wrong_pharmacological_strategy",
        feedback:
          "El metoprolol de entrada repite el error del bloqueo beta sin alfa; los alfa-bloqueadores siguen siendo pilar preoperatorio vigente.",
      },
      D: {
        profile: "unsafe_intraoperative_gamble",
        feedback:
          "No preparar al paciente garantiza inestabilidad hemodinámica extrema en la manipulación tumoral; el bloqueo alfa previo es mandatorio.",
      },
    },
  },
  89: {
    examArea: "Pediatría / Neumología / Infectología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "wrong_asthma_analogy",
        feedback:
          "En bronquiolitis el problema es moco, detritos y edema, no broncoespasmo; salbutamol y esteroides carecen de eficacia y no se recomiendan.",
      },
      C: {
        profile: "premature_invasive_ventilation",
        feedback:
          "La intubación directa se reserva si fracasa el CPAP o hay apnea prolongada refractaria; el soporte no invasivo evita la vía invasiva.",
      },
      D: {
        profile: "inappropriate_discharge",
        feedback:
          "Egresar a un lactante con SatO2 85% y apneas es negligente; requiere monitorización y soporte respiratorio hospitalario.",
      },
    },
  },
  90: {
    examArea: "Medicina Interna / Reumatología / Nefrología",
    topic: "Reumatología",
    slug: "reumatologia",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "contraindicated_in_ckd",
        feedback:
          "Los AINEs están contraindicados en ERC avanzada; vasoconstriñen la arteriola aferente y precipitan falla renal aguda sobre crónica.",
      },
      B: {
        profile: "toxic_accumulation_risk",
        feedback:
          "La colchicina a dosis estándar en TFGe <30 se acumula y causa neuromiopatía y aplasia medular potencialmente fatales.",
      },
      D: {
        profile: "acute_flare_precipitant",
        feedback:
          "El alopurinol nunca se inicia durante la crisis; el descenso brusco del urato desprende cristales y perpetúa e intensifica el ataque.",
      },
    },
  },
  91: {
    examArea: "Pediatría / Infectología / Neonatología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "inadequate_treatment_for_confirmed_case",
        feedback:
          "La dosis única de benzatínica es exclusivamente profiláctica para recién nacidos de madres adecuadamente tratadas pero con seguimiento dudoso; es negligencia usarla en un niño con criterios de infección confirmada/probable.",
      },
      B: {
        profile: "placental_pharmacology_error",
        feedback:
          "La eritromicina materna trata a la madre pero no al feto; asumir que el niño está sano por el tratamiento materno macrólido permite la progresión de la sífilis tardía mutilante.",
      },
      D: {
        profile: "unapproved_route_and_drug",
        feedback:
          "No existe ninguna guía mundial que avale el uso de penicilinas orales para el tratamiento de la sífilis congénita debido a la absorción errática y su incapacidad para penetrar la barrera hematoencefálica del neonato.",
      },
    },
  },
  92: {
    examArea: "Medicina Interna / Cuidado Intensivo / Neumología",
    topic: "Neumología",
    slug: "neumologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "deadly_pressure_stacking",
        feedback:
          "Aumentar la PEEP sin haber reducido primero el inmenso volumen corriente incrementará aún más la Presión Meseta por encima de 40 cmH2O, garantizando un neumotórax masivo a tensión por ruptura alveolar.",
      },
      C: {
        profile: "historical_lethal_practice",
        feedback:
          "Era la práctica común en los años 80, pero el estudio ARDSnet demostró que los volúmenes altos aumentan drásticamente la mortalidad por biotrauma celular y cizallamiento alveolar (atelectrauma).",
      },
      D: {
        profile: "symptomatic_illusion",
        feedback:
          "El bloqueo neuromuscular es útil en SDRA severo, pero la corrección prioritaria es mecánica (bajar el volumen). El bicarbonato no resuelve la hipercapnia originada por mala programación ventilatoria.",
      },
    },
  },
  93: {
    examArea: "Pediatría / Neonatología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "wrong_hemodynamic_intervention",
        feedback:
          "La Prostaglandina E1 mantiene abierto el ductus; en la HPPN el ductus YA está abierto permitiendo el cortocircuito de derecha a izquierda, el problema primario a tratar es la resistencia vascular pulmonar.",
      },
      C: {
        profile: "pathophysiological_clash",
        feedback:
          "Los AINEs se usan para CERRAR el ductus arterioso en prematuros. Cerrar el ductus en un paciente con HPPN severa sin haber relajado primero el pulmón causará fallo ventricular derecho fulminante al dejarlo sin válvula de escape (pop-off valve).",
      },
      D: {
        profile: "secondary_treatment_prioritized_wrong",
        feedback:
          "Aunque el surfactante inactiva los detritos meconiales, su latencia de acción es lenta y no ejerce un efecto vasodilatador pulmonar inmediato para yugular una crisis hipóxica por hipertensión pulmonar refractaria.",
      },
    },
  },
  94: {
    examArea: "Medicina Interna / Gastroenterología",
    topic: "Gastroenterología",
    slug: "gastroenterologia",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "historical_second_line",
        feedback:
          "Grandes ensayos clínicos recientes (como el ensayo STOPAH) demostraron que la pentoxifilina NO mejora la supervivencia en la hepatitis alcohólica severa, quedando relegada al desuso frente a los corticoides.",
      },
      B: {
        profile: "intoxication_extrapolation_trap",
        feedback:
          "La NAC es el pilar de la intoxicación aguda por acetaminofén; en la hepatitis alcohólica, aunque se estudió como coadyuvante, no puede reemplazar a los esteroides como terapia primaria inmunomoduladora.",
      },
      D: {
        profile: "unrealistic_surgical_timing",
        feedback:
          "En la inmensa mayoría de los centros mundiales, la hepatitis alcohólica aguda con consumo activo hasta hace dos semanas es una contraindicación para trasplante inmediato (requieren 6 meses de abstinencia), debiendo agotar la terapia médica.",
      },
    },
  },
  95: {
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    slug: "cardiologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "absolute_lethal_contraindication",
        feedback:
          "La terapia fibrinolítica en los síndromes coronarios agudos SIN elevación del ST carece de beneficio, empeora la trombosis local (efecto protrombótico paradójico de la plasmina) y aumenta el riesgo de sangrado fatal.",
      },
      C: {
        profile: "dangerous_passive_delay",
        feedback:
          "Las heparinas evitan la propagación del coágulo, pero no disuelven la obstrucción que está causando la isquemia refractaria, las arritmias y el choque inminente; esperar 24 horas garantiza la mortalidad.",
      },
      D: {
        profile: "superficial_symptom_management",
        feedback:
          "Aunque la amiodarona trata la arritmia de forma temporal, no aborda el problema central anatómico (isquemia profunda); posponer la revascularización urgente por optimizar medicación sella el daño miocárdico definitivo.",
      },
    },
  },
  96: {
    examArea: "Pediatría / Nefrología / Urología",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "common_disease_overlap",
        feedback:
          "Aunque los cálculos causan dolor lumbar y hematuria, no explican la patogenia hipercoagulable sistémica subyacente del nefrótico ni causan el signo pivote del varicocele izquierdo agudo.",
      },
      C: {
        profile: "chronic_obstruction_tool",
        feedback:
          "El renograma MAG-3 evalúa obstrucciones crónicas de la unión ureteropélvica (hidronefrosis) o función diferencial, no es un examen útil para documentar oclusiones intravasculares venosas agudas en urgencias.",
      },
      D: {
        profile: "wrong_anatomical_level",
        feedback:
          "La CUMC evalúa el tracto urinario inferior (vejiga y uretra); la trombosis venosa renal ocurre a nivel macrovascular vascular retroperitoneal, por lo que una CUMC sería inútil y sometería al niño a estrés sin beneficio.",
      },
    },
  },
  97: {
    examArea: "Medicina Interna / Nefrología / Neurología",
    topic: "Nefrología",
    slug: "nefrologia",
    difficulty: "hard",
    correct: "B",
    distractors: {
      A: {
        profile: "misdiagnosis_and_fatal_treatment",
        feedback:
          "Restringir líquidos en un paciente hipotenso y poliúrico (CSW) agrava la hipovolemia sistémica, colapsa la presión de perfusión cerebral y puede inducir isquemia cerebral por vasoespasmo post-HSA.",
      },
      C: {
        profile: "pathophysiological_opposite_trap",
        feedback:
          "La Diabetes Insípida se caracteriza por perder agua libre pura, lo que genera HIPERnatremia sérica profunda (> 145 mEq/L) y una orina intensamente diluida (sodio urinario y osmolaridad urinaria bajísimas), contrario a esta viñeta.",
      },
      D: {
        profile: "wrong_diagnosis_wrong_drug",
        feedback:
          "Los vaptanes actúan como acuaporéticos, forzando la excreción de agua libre; darlos a un paciente que ya está severamente contraído y poliúrico lo llevaría directamente a la muerte hemodinámica.",
      },
    },
  },
  98: {
    examArea: "Medicina Interna / Hematología / Urgencias",
    topic: "Hematología",
    slug: "hematologia",
    difficulty: "hard",
    correct: "C",
    distractors: {
      A: {
        profile: "allergy_overlap_trap",
        feedback:
          "La anafilaxia transfusional (típica en déficit de IgA) causa disnea por broncoespasmo (sibilancias, estridor), hipotensión profunda y choque urticariforme, no estertores crepitantes con hipertensión masiva e ingurgitación yugular.",
      },
      B: {
        profile: "ards_confusion_trap",
        feedback:
          "El TRALI es un edema pulmonar no cardiogénico mediado por inflamación; los pacientes cursan típicamente con hipotensión, fiebre y un BNP normal, sin sobrecarga de volumen.",
      },
      D: {
        profile: "wrong_transfusion_complication",
        feedback:
          "La hemólisis por incompatibilidad ABO genera dolor lumbar, hemoglobinuria (orina oscura), fiebre, escalofríos, CID y choque, no la clásica presentación del edema pulmonar por hipertensión hidrostática.",
      },
    },
  },
  99: {
    examArea: "Pediatría / Reumatología / Cuidado Intensivo",
    topic: "Pediatría",
    slug: "pediatria",
    difficulty: "hard",
    correct: "A",
    distractors: {
      B: {
        profile: "infectious_overlay_trap",
        feedback:
          "La sepsis grave podría explicar la CID y el choque, pero la elevación astronómica de ferritina unida a la hipertrigliceridemia y la historia reumatológica primaria es el sello bioquímico del síndrome hemofagocítico.",
      },
      C: {
        profile: "pharmacological_history_trap",
        feedback:
          "El Síndrome de Reye clásico (degeneración grasa hepática post-viral con aspirina) causa edema cerebral e insuficiencia hepática grave (amoníaco elevado), pero no produce fiebre continua, hiperferritinemia ni caída paradójica aislada de la VSG por CID primaria.",
      },
      D: {
        profile: "secondary_cytopenia_trap",
        feedback:
          "Aunque la LLA debuta con visceromegalias y pancitopenia, no explica el deterioro hiperagudo con tormenta inflamatoria hemofagocítica brutal, coagulopatía de consumo grave e hiperferritinemia extrema en un paciente reumatológico en crisis.",
      },
    },
  },
  100: {
    examArea: "Medicina Interna / Infectología / Neurología",
    topic: "Infectología",
    slug: "infectologia",
    difficulty: "hard",
    correct: "A",
    distractors: {
      B: {
        profile: "diagnostic_superiority_lethal_trap",
        feedback:
          "Priorizar la pureza del cultivo microbiológico sobre la destrucción bacteriana exponencial en un tejido tan noble como el cerebro es la principal causa de iatrogenia mortal en la atención de las meningitis.",
      },
      C: {
        profile: "protocol_violation_and_death",
        feedback:
          "Realizar una PL en un paciente con evidencia clínica de hipertensión intracraneana severa (papiledema) sin descartar lesiones de efecto de masa provoca un gradiente de presión caudal que desencadena enclavamiento amigdalino fatal.",
      },
      D: {
        profile: "wrong_priority_treatment",
        feedback:
          "El tratamiento de la HIC aguda es de soporte, pero no reemplaza la acción terapéutica etiológica; atacar mecánicamente el edema mientras la bacteria causante se sigue replicando libremente por falta de antibióticos asegura el fracaso clínico.",
      },
    },
  },
};

const BATCHES = [
  {
    start: 1,
    end: 10,
    input: "professor-ucc-conv-2025-07-05-01-10.txt",
    output: "ucc-conv-2025-07-05-01-10-questions.ts",
    exportName: "UCC_CONV_2025_07_05_01_10_QUESTIONS",
    label: "#01–#10",
  },
  {
    start: 11,
    end: 20,
    input: "professor-ucc-conv-2025-07-05-11-20.txt",
    output: "ucc-conv-2025-07-05-11-20-questions.ts",
    exportName: "UCC_CONV_2025_07_05_11_20_QUESTIONS",
    label: "#11–#20",
  },
  {
    start: 21,
    end: 30,
    input: "professor-ucc-conv-2025-07-05-21-30.txt",
    output: "ucc-conv-2025-07-05-21-30-questions.ts",
    exportName: "UCC_CONV_2025_07_05_21_30_QUESTIONS",
    label: "#21–#30",
  },
  {
    start: 31,
    end: 40,
    input: "professor-ucc-conv-2025-07-05-31-40.txt",
    output: "ucc-conv-2025-07-05-31-40-questions.ts",
    exportName: "UCC_CONV_2025_07_05_31_40_QUESTIONS",
    label: "#31–#40",
  },
  {
    start: 41,
    end: 50,
    input: "professor-ucc-conv-2025-07-05-41-50.txt",
    output: "ucc-conv-2025-07-05-41-50-questions.ts",
    exportName: "UCC_CONV_2025_07_05_41_50_QUESTIONS",
    label: "#41–#50",
  },
  {
    start: 51,
    end: 60,
    input: "professor-ucc-conv-2025-07-05-51-60.txt",
    output: "ucc-conv-2025-07-05-51-60-questions.ts",
    exportName: "UCC_CONV_2025_07_05_51_60_QUESTIONS",
    label: "#51–#60",
  },
  {
    start: 61,
    end: 70,
    input: "professor-ucc-conv-2025-07-05-61-70.txt",
    output: "ucc-conv-2025-07-05-61-70-questions.ts",
    exportName: "UCC_CONV_2025_07_05_61_70_QUESTIONS",
    label: "#61–#70",
  },
  {
    start: 71,
    end: 80,
    input: "professor-ucc-conv-2025-07-05-71-80.txt",
    output: "ucc-conv-2025-07-05-71-80-questions.ts",
    exportName: "UCC_CONV_2025_07_05_71_80_QUESTIONS",
    label: "#71–#80",
  },
  {
    start: 81,
    end: 90,
    input: "professor-ucc-conv-2025-07-05-81-90.txt",
    output: "ucc-conv-2025-07-05-81-90-questions.ts",
    exportName: "UCC_CONV_2025_07_05_81_90_QUESTIONS",
    label: "#81–#90",
  },
  {
    start: 91,
    end: 100,
    input: "professor-ucc-conv-2025-07-05-91-100.txt",
    output: "ucc-conv-2025-07-05-91-100-questions.ts",
    exportName: "UCC_CONV_2025_07_05_91_100_QUESTIONS",
    label: "#91–#100",
  },
];

function parseBlocks(raw) {
  const parts = raw.split(/(?:^|\n)PREGUNTA (\d+) \(/);
  const blocks = {};
  for (let i = 1; i < parts.length; i += 2) {
    blocks[Number(parts[i])] = parseBlock(parts[i + 1], Number(parts[i]));
  }
  return blocks;
}

function parseBlock(body, num) {
  const bodyClean = body.replace(/^[^)]+\)\r?\n/, "");
  const optionsStart = bodyClean.search(/^A\. /m);
  const correctIdx = bodyClean.search(/^✅ Respuesta correcta:/m);
  if (optionsStart === -1 || correctIdx === -1) {
    throw new Error(`Parse error PREGUNTA ${num}`);
  }

  const statement = bodyClean.slice(0, optionsStart).trim();
  const optionsSection = bodyClean.slice(optionsStart, correctIdx);
  const options = [];
  for (const line of optionsSection.split("\n")) {
    const m = line.match(/^([A-D])\.\s*(.+)$/);
    if (m) options.push({ id: m[1], text: m[2].trim() });
  }

  const after = bodyClean.slice(correctIdx);
  const explMatch = after.match(
    /✅ Respuesta correcta:[^\n]*\n([\s\S]*?)(?:\nLo que debes saber|\n*$)/,
  );
  const explanation = (explMatch?.[1] ?? "").trim().replace(/^[A-D]\.\s*/, "");

  const kpMatch = bodyClean.match(
    /Cuando veas:\n([\s\S]*?)\nDebes pensar en:\n([\s\S]*?)\nTema: ([^\n]+)/,
  );
  if (!kpMatch) throw new Error(`Missing keyPoints PREGUNTA ${num}`);

  const cuando = kpMatch[1]
    .split("\n")
    .map((l) => l.replace(/^•\s*/, "").trim())
    .filter(Boolean)
    .join("; ");

  const keyPoints = [
    cuando,
    kpMatch[2].trim(),
    kpMatch[3].trim(),
  ];

  return { statement, options, explanation, keyPoints };
}

function renderQuestion(n, q, meta) {
  const id = String(n).padStart(2, "0");
  const tags = [
    "ucc",
    "convocatoria",
    "2025_07_05",
    meta.slug,
    ...meta.slug.split("_"),
  ].filter((t, i, a) => a.indexOf(t) === i);

  const options = q.options.map((opt) => {
    const distractor = meta.distractors[opt.id];
    const lines = [
      `      {`,
      `        id: ${JSON.stringify(opt.id)},`,
      `        label: ${JSON.stringify(opt.id)},`,
      `        text: ${JSON.stringify(opt.text)},`,
    ];
    if (distractor) {
      lines.push(`        distractorProfile: ${JSON.stringify(distractor.profile)},`);
      lines.push(
        `        incorrectFeedback: ${JSON.stringify(distractor.feedback)},`,
      );
    }
    lines.push(`      },`);
    return lines.join("\n");
  });

  return `  {
    id: "ucc-conv-2025-07-05-${id}",
    university: "UCC",
    examArea: ${JSON.stringify(meta.examArea)},
    topic: ${JSON.stringify(meta.topic)},
    difficulty: ${JSON.stringify(meta.difficulty)},
    tags: ${JSON.stringify(tags)},
    statement: ${JSON.stringify(q.statement)},
    options: [
${options.join("\n")}
    ],
    correctOptionId: ${JSON.stringify(meta.correct)},
    explanation: ${JSON.stringify(q.explanation)},
    keyPoints: [
      ${q.keyPoints.map((kp) => JSON.stringify(kp)).join(",\n      ")},
    ],
  }`;
}

function generateBatch(batch) {
  const raw = fs.readFileSync(path.join(__dirname, batch.input), "utf8");
  const blocks = parseBlocks(raw);
  const questions = [];

  for (let n = batch.start; n <= batch.end; n++) {
    const q = blocks[n];
    const meta = META[n];
    if (!q || !meta) throw new Error(`Missing PREGUNTA ${n} in ${batch.input}`);
    questions.push(renderQuestion(n, q, meta));
  }

  const batchPath = path.join(__dirname, "../src/data", batch.output);
  const batchContent = `import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #2 (5 jul 2025) · Preguntas ${batch.label}.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const ${batch.exportName}: TrainingQuestion[] = [
${questions.join(",\n")}
];
`;

  fs.writeFileSync(batchPath, batchContent, "utf8");
  console.log(`Generated ${batchPath} (${questions.length} questions)`);
  return batch;
}

const generated = BATCHES.map(generateBatch);

const aggPath = path.join(__dirname, "../src/data/ucc-conv-2025-07-05-questions.ts");
const aggImports = generated
  .map((b) => `import { ${b.exportName} } from "@/data/${b.output.replace(".ts", "")}";`)
  .join("\n");
const aggSpreads = generated.map((b) => `  ...${b.exportName},`).join("\n");

const aggContent = `${aggImports}
import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #2 (5 jul 2025) · agregador.
 * Banco completo de 100 preguntas (#01–#100).
 */
export const UCC_CONV_2025_07_05_QUESTIONS: TrainingQuestion[] = [
${aggSpreads}
];

export const UCC_CONV_2025_07_05_QUESTION_COUNT = UCC_CONV_2025_07_05_QUESTIONS.length;
`;

fs.writeFileSync(aggPath, aggContent, "utf8");
console.log(`Updated ${aggPath} (${generated.reduce((s, b) => s + (b.end - b.start + 1), 0)} total)`);
