import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #7 (6 sep 2026) · Preguntas #91–#100.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_06_91_100_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-06-91",
    university: "UCC",
    examArea: "PEDIATRÍA - HEMATOLOGÍA",
    topic: "Hematología Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","hematolog-a-pedi-trica","hematolog","a","pedi","trica"],
    statement: "Una niña de 4 años, previamente sana, es traída a consulta por aparición súbita de petequias generalizadas y equimosis fáciles ante traumas mínimos, de 2 días de evolución. La madre refiere que la niña tuvo un cuadro viral respiratorio leve hace 2 semanas, ya resuelto completamente. Al examen físico la niña luce clínicamente bien, sin fiebre, sin hepatoesplenomegalia ni adenopatías, con petequias difusas en piel y algunas equimosis en extremidades inferiores, sin sangrado activo de mucosas. Los laboratorios muestran: Plaquetas 8.000/mm³ (severamente bajas), con Hemoglobina, Leucocitos y diferencial completamente NORMALES, y un frotis de sangre periférica que confirma trombocitopenia aislada sin otras alteraciones morfológicas. ¿Cuál es el diagnóstico más probable, y cuál es la conducta inicial más apropiada dado que la niña está clínicamente bien sin sangrado significativo activo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Leucemia Linfoblástica Aguda; se requiere aspirado de médula ósea urgente antes de cualquier otra consideración diagnóstica o terapéutica.",
        distractorProfile: "wrong_diagnosis_missing_isolated_thrombocytopenia_clue",
        incorrectFeedback: "La Leucemia Linfoblástica Aguda típicamente se presenta con alteración de múltiples líneas celulares (anemia, alteración leucocitaria con posibles blastos), hepatoesplenomegalia y/o adenopatías, hallazgos ausentes en esta niña con trombocitopenia estrictamente aislada y resto de líneas celulares normales, características típicas de PTI.",
      },
      {
        id: "B",
        label: "B",
        text: "Púrpura Trombocitopénica Inmune (PTI); en una niña clínicamente bien sin sangrado significativo, la conducta apropiada es la OBSERVACIÓN CLÍNICA, reservando el tratamiento farmacológico para sangrado significativo o plaquetas extremadamente bajas con factores de riesgo adicionales.",
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome Hemolítico Urémico; se requiere inicio inmediato de diálisis renal independientemente de la función renal actual.",
        distractorProfile: "wrong_diagnosis_missing_key_features",
        incorrectFeedback: "El Síndrome Hemolítico Urémico se caracteriza por la tríada de anemia hemolítica microangiopática, trombocitopenia Y lesión renal aguda, típicamente tras un cuadro de diarrea (frecuentemente sanguinolenta); esta niña no presenta anemia ni compromiso renal, siendo su trombocitopenia aislada mucho más compatible con PTI.",
      },
      {
        id: "D",
        label: "D",
        text: "Coagulación Intravascular Diseminada; se requiere transfusión masiva de plasma fresco congelado y plaquetas de forma inmediata.",
        distractorProfile: "wrong_diagnosis_missing_coagulation_factor_involvement",
        incorrectFeedback: "La CID típicamente ocurre en el contexto de una enfermedad sistémica grave subyacente (sepsis, trauma) con alteración de los tiempos de coagulación y el fibrinógeno, hallazgos no descritos en esta niña, cuyo cuadro de trombocitopenia aislada tras infección viral reciente en un paciente clínicamente bien es característico de PTI.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta una **Púrpura Trombocitopénica Inmune (PTI)**, la causa más frecuente de trombocitopenia aislada en niños previamente sanos, típicamente desencadenada por una respuesta inmune (con producción de anticuerpos que causan destrucción plaquetaria) tras una infección viral reciente (como el cuadro respiratorio referido 2 semanas antes). La clave diagnóstica es la **trombocitopenia AISLADA** (sin anemia, sin alteración leucocitaria, sin hallazgos morfológicos anómalos en el frotis que sugieran un proceso maligno infiltrativo de médula ósea), en un niño que por lo demás luce **clínicamente bien**. Un punto crucial y frecuentemente contraintuitivo del manejo moderno de la PTI pediátrica es que, en un niño **clínicamente estable sin sangrado significativo** (solo petequias/equimosis cutáneas, sin sangrado de mucosas importante ni hemorragia interna), la conducta recomendada por las guías actuales es la **observación clínica cuidadosa**, incluso con recuentos plaquetarios muy bajos como en este caso, ya que la PTI pediátrica tiene un curso frecuentemente autolimitado (resolución espontánea en semanas a meses en la mayoría de los casos) y el tratamiento farmacológico (corticoides, inmunoglobulina IV) conlleva sus propios riesgos y efectos secundarios sin necesariamente cambiar el curso final de la enfermedad; el tratamiento se reserva para sangrado mucocutáneo significativo, hemorragia interna, o situaciones de alto riesgo específicas.",
    keyPoints: [
    "Niño previamente sano, con antecedente de infección viral 1-3 semanas antes, ahora con Trombocitopenia AISLADA (resto de líneas celulares normales) + Petequias/equimosis, SIN otros síntomas sistémicos.",
    "Púrpura Trombocitopénica Inmune (PTI). Conducta en niño clínicamente BIEN sin sangrado significativo: OBSERVACIÓN, no tratamiento farmacológico automático. Tratar solo si hay sangrado mucocutáneo importante, hemorragia interna, o alto riesgo.",
    "Hematología Pediátrica / Púrpura Trombocitopénica Inmune."
],
  },
  {
    id: "ucc-conv-2026-09-06-92",
    university: "UCC",
    examArea: "MEDICINA INTERNA - PSIQUIATRÍA / NEUROLOGÍA",
    topic: "Urgencias Neuropsiquiátricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-neuropsiqui-tricas","urgencias","neuropsiqui","tricas"],
    statement: "Un hombre de 40 años, con antecedente de Esquizofrenia en tratamiento con Haloperidol, es traído a urgencias por su familia debido a fiebre alta (40°C), rigidez muscular generalizada severa (\"en tubo de plomo\"), y confusión progresiva de 3 días de evolución, tras haber aumentado recientemente la dosis de su antipsicótico por síntomas psicóticos exacerbados. Al examen físico: diaforesis profusa, taquicardia, presión arterial lábil, y **reflejos osteotendinosos NORMALES a DISMINUIDOS** (sin hiperreflexia ni clonus). Los laboratorios muestran CPK marcadamente elevada (12.000 U/L) y leucocitosis. ¿Cuál es el diagnóstico, cuál es el hallazgo del examen neurológico que lo DIFERENCIA del Síndrome Serotoninérgico, y cuál es el tratamiento farmacológico específico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome Serotoninérgico; se diferencia por la presencia de hiperreflexia y clonus; tratamiento con Ciproheptadina.",
        distractorProfile: "wrong_diagnosis_reversed_neurologic_findings",
        incorrectFeedback: "Esta viñeta describe explícitamente reflejos NORMALES a DISMINUIDOS, sin clonus ni hiperreflexia, hallazgo opuesto al del Síndrome Serotoninérgico; junto con la instalación en días tras aumento de un antipsicótico (no un agente serotoninérgico), el cuadro corresponde específicamente al Síndrome Neuroléptico Maligno.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome Neuroléptico Maligno; se diferencia del Síndrome Serotoninérgico por presentar rigidez \"en tubo de plomo\" con reflejos NORMALES/DISMINUIDOS (sin clonus ni hiperreflexia) y una instalación más lenta (días); tratamiento específico con Dantroleno y/o Bromocriptina, además de suspender el antipsicótico.",
      },
      {
        id: "C",
        label: "C",
        text: "Catatonia maligna primaria; se diferencia por la ausencia total de rigidez muscular; tratamiento exclusivo con Benzodiacepinas en altas dosis.",
        distractorProfile: "wrong_diagnosis_contradicts_key_finding",
        incorrectFeedback: "La rigidez muscular \"en tubo de plomo\" está explícitamente presente y es un hallazgo central en esta viñeta, no ausente; el contexto claro de reciente aumento de dosis de un antipsicótico dopaminérgico bloqueador hace mucho más probable el Síndrome Neuroléptico Maligno que una catatonia primaria.",
      },
      {
        id: "D",
        label: "D",
        text: "Golpe de calor clásico; se diferencia por la piel caliente y seca sin diaforesis; tratamiento con enfriamiento externo exclusivamente sin fármacos específicos.",
        distractorProfile: "wrong_diagnosis_contradicts_described_findings",
        incorrectFeedback: "Esta viñeta describe explícitamente diaforesis profusa (piel húmeda, no seca), y el antecedente claro de aumento reciente de dosis de un antipsicótico es la pista contextual clave que apunta directamente al Síndrome Neuroléptico Maligno, que además requiere tratamiento farmacológico específico, no solo enfriamiento.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un **Síndrome Neuroléptico Maligno**, una reacción idiosincrática potencialmente mortal al uso de antipsicóticos (bloqueadores de receptores dopaminérgicos, como el Haloperidol), caracterizada por la tétrada clásica de **fiebre alta**, **rigidez muscular generalizada \"en tubo de plomo\"**, **alteración del estado mental**, e **inestabilidad autonómica** (diaforesis, taquicardia, presión arterial lábil), con **CPK marcadamente elevada** reflejando la rigidez muscular sostenida y el daño muscular asociado (con riesgo de rabdomiólisis secundaria). Como se estableció previamente en esta edición, la clave diferencial fundamental frente al Síndrome Serotoninérgico es el **examen neurológico**: en el Síndrome Neuroléptico Maligno, los **reflejos osteotendinosos son normales o están DISMINUIDOS**, sin clonus ni hiperreflexia (el sistema nervioso está \"congelado\" por el bloqueo dopaminérgico), y la instalación es característicamente **más lenta**, desarrollándose a lo largo de **días** tras el inicio o aumento de dosis del antipsicótico (a diferencia de las horas del Síndrome Serotoninérgico). El tratamiento específico, además de la suspensión inmediata del antipsicótico causal y medidas de soporte (hidratación, enfriamiento), incluye el **Dantroleno** (relajante muscular directo que reduce la liberación de calcio del retículo sarcoplásmico) y/o la **Bromocriptina** (agonista dopaminérgico que contrarresta el bloqueo dopaminérgico causal).",
    keyPoints: [
    "Paciente en tratamiento con Antipsicótico (o suspensión de agonista dopaminérgico) + Fiebre alta + Rigidez \"en tubo de plomo\" + Alteración mental, de instalación en DÍAS.; Reflejos NORMALES/DISMINUIDOS (sin clonus).",
    "Síndrome Neuroléptico Maligno. Diferencia clave con Síndrome Serotoninérgico: SNM tiene rigidez + reflejos DISMINUIDOS + instalación en DÍAS; Serotoninérgico tiene clonus/hiperreflexia + instalación en HORAS. Tratamiento: Dantroleno +/- Bromocriptina + suspender el antipsicótico.",
    "Urgencias Neuropsiquiátricas / Síndrome Neuroléptico Maligno."
],
  },
  {
    id: "ucc-conv-2026-09-06-93",
    university: "UCC",
    examArea: "GINECOLOGÍA - INFECTOLOGÍA",
    topic: "Infecciones Ginecológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","infecciones-ginecol-gicas","infecciones","ginecol","gicas"],
    statement: "Una mujer de 24 años, sexualmente activa con múltiples parejas y uso inconsistente de preservativo, consulta por dolor pélvico bilateral progresivo de 5 días de evolución, fiebre de 38.5°C, y flujo vaginal purulento maloliente. Al examen físico hay dolor abdominal bajo bilateral con defensa leve, y al examen ginecológico hay dolor intenso a la movilización cervical (Signo del Candelero positivo) y dolor bilateral a la palpación de los anexos. Una ecografía transvaginal identifica una masa anexial derecha compleja, multiloculada, de 6 cm, compatible con un absceso. La paciente está hemodinámicamente estable, sin signos de peritonitis generalizada ni sepsis severa. ¿Cuál es el diagnóstico, y cuál es el manejo inicial APROPIADO dado que la paciente está clínicamente estable, antes de considerar intervención quirúrgica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Apendicitis Aguda complicada; manejo con apendicectomía de urgencia inmediata sin necesidad de estudios adicionales.",
        distractorProfile: "wrong_diagnosis_missing_gynecologic_findings",
        incorrectFeedback: "El dolor bilateral, el flujo vaginal purulento y el dolor a la movilización cervical son hallazgos ginecológicos específicos no explicados por una apendicitis (que típicamente causa dolor unilateral derecho sin estos hallazgos pélvicos); la ecografía confirmando una masa anexial compleja apoya el diagnóstico de absceso tubo-ovárico.",
      },
      {
        id: "B",
        label: "B",
        text: "Enfermedad Inflamatoria Pélvica complicada con Absceso Tubo-Ovárico; manejo inicial con antibioticoterapia de amplio espectro intravenosa (cobertura para gérmenes aerobios, anaerobios y de transmisión sexual), reservando el drenaje (percutáneo o quirúrgico) para falta de respuesta al tratamiento médico o deterioro clínico.",
      },
      {
        id: "C",
        label: "C",
        text: "Torsión Ovárica; manejo exclusivamente quirúrgico urgente sin necesidad de cobertura antibiótica.",
        distractorProfile: "wrong_diagnosis_missing_infectious_signs",
        incorrectFeedback: "La fiebre, el flujo purulento maloliente y el dolor bilateral con hallazgos ecográficos de una masa compleja compatible con absceso son incompatibles con una torsión ovárica aislada (que típicamente es unilateral, sin fiebre ni flujo purulento), y son característicos de un proceso infeccioso pélvico que requiere antibioticoterapia.",
      },
      {
        id: "D",
        label: "D",
        text: "Endometriosis con endometrioma complicado; manejo con anticonceptivos hormonales combinados como primera línea.",
        distractorProfile: "wrong_diagnosis_missing_acute_infectious_presentation",
        incorrectFeedback: "La fiebre, el flujo purulento y el dolor agudo a la movilización cervical no son características de un endometrioma (que típicamente es un hallazgo crónico sin fiebre ni secreción purulenta); este cuadro agudo infeccioso es característico de Enfermedad Inflamatoria Pélvica con absceso tubo-ovárico.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta una **Enfermedad Inflamatoria Pélvica (EIP)** complicada con un **Absceso Tubo-Ovárico**, la complicación más grave de la EIP no tratada o tratada inadecuadamente, típicamente causada por una infección ascendente desde el tracto genital inferior (frecuentemente relacionada con *Chlamydia trachomatis* o *Neisseria gonorrhoeae*, aunque los abscesos tubo-ováricos suelen ser polimicrobianos, incluyendo flora anaerobia). Los hallazgos clásicos de dolor pélvico, fiebre, flujo purulento, dolor a la movilización cervical (Signo del Candelero) y dolor anexial bilateral, junto con la confirmación ecográfica de una masa anexial compleja compatible con absceso, establecen el diagnóstico. En una paciente **hemodinámicamente estable**, sin signos de rotura del absceso (peritonitis generalizada) ni sepsis severa, el manejo inicial apropiado es la **antibioticoterapia de amplio espectro intravenosa**, con cobertura que incluya gérmenes aerobios gram negativos, anaerobios, y los patógenos de transmisión sexual clásicos, administrada durante al menos 24-48 horas con reevaluación clínica estrecha; el **drenaje** (ya sea percutáneo guiado por imagen o quirúrgico) se **reserva** para los casos que no muestran mejoría clínica con el tratamiento médico, que se deterioran, o que presentan abscesos de gran tamaño con alto riesgo de rotura.",
    keyPoints: [
    "Mujer joven sexualmente activa con Dolor pélvico bilateral + Fiebre + Flujo purulento + Dolor a la movilización cervical + Masa anexial compleja (absceso) en ecografía, ESTABLE hemodinámicamente.",
    "Absceso Tubo-Ovárico (complicación de EIP). Manejo inicial en paciente ESTABLE: Antibiótico de amplio espectro IV (cobertura aerobia + anaerobia + ETS), reservando drenaje para falta de respuesta o deterioro clínico.",
    "Infecciones Ginecológicas / Enfermedad Inflamatoria Pélvica y Absceso Tubo-Ovárico."
],
  },
  {
    id: "ucc-conv-2026-09-06-94",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUMOLOGÍA / REUMATOLOGÍA",
    topic: "Enfermedades Granulomatosas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","enfermedades-granulomatosas","enfermedades","granulomatosas"],
    statement: "Una mujer afrodescendiente de 35 años consulta por tos seca persistente de 4 meses de evolución, disnea progresiva leve, y dolor articular difuso. Al examen físico se observan nódulos eritematosos dolorosos en la superficie anterior de ambas piernas (Eritema Nodoso), y adenopatías cervicales pequeñas no dolorosas. Una radiografía de tórax muestra **adenopatías hiliares bilaterales simétricas**, sin infiltrados parenquimatosos significativos. Los laboratorios muestran Calcio sérico levemente elevado y Enzima Convertidora de Angiotensina (ECA) sérica elevada. Una biopsia de una de las adenopatías cervicales muestra **granulomas no caseificantes** bien formados, sin evidencia de necrosis ni de microorganismos en las tinciones especiales. ¿Cuál es el diagnóstico, y por qué puede presentarse HIPERCALCEMIA en esta condición, a pesar de que la PTH (Hormona Paratiroidea) esté característicamente SUPRIMIDA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Tuberculosis Ganglionar; la hipercalcemia se debe a metástasis óseas líticas directas de la infección micobacteriana.",
        distractorProfile: "wrong_diagnosis_and_wrong_mechanism",
        incorrectFeedback: "La biopsia mostró granulomas NO caseificantes sin evidencia de microorganismos, hallazgo que descarta tuberculosis (que produce granulomas CASEIFICANTES con necrosis); además, la tuberculosis no causa hipercalcemia por metástasis óseas líticas como mecanismo característico, siendo este un mecanismo incorrecto.",
      },
      {
        id: "B",
        label: "B",
        text: "Sarcoidosis; la hipercalcemia se debe a la producción autónoma y no regulada de Calcitriol (Vitamina D activa) por los macrófagos dentro de los granulomas, independiente del control normal de la PTH.",
      },
      {
        id: "C",
        label: "C",
        text: "Linfoma de Hodgkin; la hipercalcemia se debe exclusivamente a la producción ectópica de PTH-rp (proteína relacionada con PTH) por las células tumorales.",
        distractorProfile: "wrong_diagnosis_and_wrong_mechanism_attribution",
        incorrectFeedback: "La biopsia describe granulomas no caseificantes, no células de Reed-Sternberg características del Linfoma de Hodgkin; además, aunque algunos tumores sí producen PTH-rp, el mecanismo específico de hipercalcemia por producción extrarrenal de Calcitriol es característico de enfermedades granulomatosas como la Sarcoidosis, no del Linfoma de Hodgkin.",
      },
      {
        id: "D",
        label: "D",
        text: "Silicosis ocupacional; la hipercalcemia es un hallazgo esperado y directamente causado por el depósito de sílice en el hueso.",
        distractorProfile: "wrong_diagnosis_and_fabricated_mechanism",
        incorrectFeedback: "No hay antecedente de exposición ocupacional a sílice descrito, y el patrón de adenopatías hiliares bilaterales simétricas con eritema nodoso y granulomas no caseificantes es característico de Sarcoidosis, no de Silicosis; además, el depósito de sílice en el hueso no es un mecanismo reconocido de hipercalcemia.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta **Sarcoidosis**, una enfermedad granulomatosa multisistémica de causa no completamente esclarecida, que predomina en mujeres afrodescendientes jóvenes-adultas y afecta clásicamente los pulmones y el sistema linfático torácico. El hallazgo radiográfico de **adenopatías hiliares bilaterales simétricas** es altamente característico, junto con las manifestaciones extrapulmonares clásicas: **Eritema Nodoso** (nódulos subcutáneos dolorosos, frecuentemente en las piernas), artralgias, y adenopatías periféricas. El diagnóstico se confirma mediante biopsia que demuestra **granulomas NO caseificantes** (bien formados, sin la necrosis central característica de los granulomas tuberculosos), tras excluir infecciones (como tuberculosis) mediante tinciones y cultivos apropiados. La **hipercalcemia**, presente en un subgrupo de pacientes con sarcoidosis, tiene un mecanismo fisiopatológico fascinante y distintivo: los **macrófagos activados dentro de los granulomas sarcoideos expresan de forma autónoma y no regulada la enzima 1-alfa-hidroxilasa**, que convierte la vitamina D inactiva en su forma activa, el **Calcitriol**, de forma **independiente del control fisiológico normal** que ejerce la PTH sobre esta conversión (que normalmente ocurre solo en el riñón, bajo estricta regulación). Este exceso de Calcitriol aumenta la absorción intestinal de calcio, causando hipercalcemia, mientras que la **PTH permanece suprimida** (respuesta fisiológica normal y apropiada a la hipercalcemia resultante).",
    keyPoints: [
    "Mujer joven (frecuentemente afrodescendiente) con Tos seca crónica + Adenopatías hiliares BILATERALES simétricas + Eritema Nodoso + Artralgias.; Biopsia: Granulomas NO caseificantes. Hipercalcemia con PTH SUPRIMIDA.",
    "Sarcoidosis. Mecanismo de la hipercalcemia: producción EXTRARRENAL y autónoma de Calcitriol por los macrófagos del granuloma (vía 1-alfa-hidroxilasa), independiente de la PTH (que está apropiadamente suprimida).",
    "Enfermedades Granulomatosas / Sarcoidosis."
],
  },
  {
    id: "ucc-conv-2026-09-06-95",
    university: "UCC",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA TROPICAL",
    topic: "Infectología Tropical",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","infectolog-a-tropical","infectolog","a","tropical"],
    statement: "Un hombre de 28 años, residente de una zona endémica, consulta por fiebre alta de 4 días de evolución, cefalea retroocular intensa, mialgias y artralgias generalizadas severas (\"fiebre rompehuesos\"), y un exantema maculopapular difuso. En el día 5, coincidiendo con la caída de la fiebre, el paciente presenta dolor abdominal intenso, vómito persistente, sangrado de encías, y aparición de petequias y equimosis espontáneas. Al examen físico hay hepatomegalia dolorosa, y una prueba de torniquete (aplicación de manguito de presión arterial durante 5 minutos) resulta marcadamente positiva (más de 20 petequias en un área de 2.5 cm). Los laboratorios muestran Hematocrito en ascenso progresivo (hemoconcentración) junto con Plaquetas en descenso marcado (35.000/mm³). ¿Cuál es el diagnóstico, cuál es el signo de alarma MÁS importante que indica progresión hacia la forma grave de esta enfermedad, y cuál es el pilar del manejo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fiebre Tifoidea; el signo de alarma principal es la aparición de roséola tífica; el pilar del manejo es antibioticoterapia dirigida con Ceftriaxona.",
        distractorProfile: "wrong_diagnosis_missing_hemoconcentration_pattern",
        incorrectFeedback: "La Fiebre Tifoidea no explica la hemoconcentración con trombocitopenia ni la prueba del torniquete positiva descritas en esta viñeta; el patrón temporal característico (deterioro coincidiendo con la caída de la fiebre) y los hallazgos de laboratorio son específicos de la fase crítica del Dengue.",
      },
      {
        id: "B",
        label: "B",
        text: "Dengue con signos de alarma (progresando a Dengue Grave); el signo de alarma clave es la hemoconcentración (Hematocrito en ascenso) que refleja fuga capilar/plasmática; el pilar del manejo es la REPOSICIÓN CUIDADOSA Y MONITORIZADA de líquidos intravenosos, evitando tanto la hipovolemia como la sobrecarga.",
      },
      {
        id: "C",
        label: "C",
        text: "Malaria por Plasmodium falciparum; el signo de alarma principal es la parasitemia elevada; el pilar del manejo es Artesunato intravenoso exclusivamente.",
        distractorProfile: "wrong_diagnosis_missing_key_lab_pattern",
        incorrectFeedback: "La Malaria no cursa característicamente con el patrón específico de hemoconcentración progresiva reflejando fuga capilar ni con la prueba del torniquete positiva; estos hallazgos son específicos y definitorios del Dengue con signos de alarma.",
      },
      {
        id: "D",
        label: "D",
        text: "Leptospirosis; el signo de alarma principal es la ictericia franca; el pilar del manejo es Penicilina intravenosa en dosis altas.",
        distractorProfile: "wrong_diagnosis_missing_key_findings",
        incorrectFeedback: "No hay ictericia franca descrita en esta viñeta, y el patrón específico de deterioro coincidiendo con la defervescencia, junto con la hemoconcentración progresiva, es característico del Dengue, no de la Leptospirosis, que además no se maneja principalmente con reposición cuidadosa de líquidos guiada por hematocrito.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta **Dengue**, una infección viral transmitida por el mosquito *Aedes aegypti*, endémica en múltiples regiones tropicales y subtropicales (incluyendo Colombia). El cuadro inicial de fiebre alta, cefalea retroocular, mialgias/artralgias intensas (\"fiebre rompehuesos\") y exantema es característico de la **fase febril**. La transición hacia la **fase crítica**, que clásicamente coincide con la **caída de la fiebre** (un momento engañoso en el que el paciente y a veces el médico pueden pensar erróneamente que está mejorando), es cuando aparecen los **signos de alarma**: dolor abdominal intenso, vómito persistente, sangrado de mucosas, letargia, hepatomegalia dolorosa, y el hallazgo de laboratorio más importante: el **aumento del Hematocrito (hemoconcentración) junto con la caída de plaquetas**, que refleja el fenómeno fisiopatológico central del dengue grave: el **aumento de la permeabilidad vascular con fuga de plasma** hacia el espacio extravascular. Este es el momento crítico donde el manejo debe intensificarse con **reposición de líquidos intravenosos cuidadosamente calculada y monitorizada** (guiada por el hematocrito seriado, la diuresis, y signos vitales), buscando el equilibrio delicado entre corregir la hipovolemia intravascular (por la fuga de plasma) sin causar sobrecarga de volumen (que puede precipitar derrames pleurales/ascitis sintomáticos o edema pulmonar), siendo esta la piedra angular del manejo del dengue con signos de alarma.",
    keyPoints: [
    "Fiebre alta + Cefalea retroocular + Mialgias/artralgias severas + Exantema, en zona endémica; que al CAER LA FIEBRE desarrolla: Dolor abdominal + Vómito persistente + Sangrado + Prueba del torniquete positiva.",
    "Dengue con signos de alarma. Signo de laboratorio CLAVE de fuga capilar: Hematocrito en ASCENSO (hemoconcentración) + Plaquetas en descenso. Pilar del manejo: Reposición de líquidos IV cuidadosamente monitorizada (ni poco ni exceso).",
    "Infectología Tropical / Dengue con Signos de Alarma."
],
  },
  {
    id: "ucc-conv-2026-09-06-96",
    university: "UCC",
    examArea: "CIRUGÍA GENERAL - GASTROENTEROLOGÍA",
    topic: "Emergencias Vasculares Abdominales",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","emergencias-vasculares-abdominales","emergencias","vasculares","abdominales"],
    statement: "Un hombre de 78 años, con antecedente de Fibrilación Auricular no anticoagulada adecuadamente, consulta por dolor abdominal difuso, intenso, de inicio súbito hace 6 horas, notablemente **desproporcionado** en relación con los hallazgos relativamente escasos al examen físico (abdomen blando, sin claros signos de irritación peritoneal en esta etapa inicial). Refiere náuseas y una deposición con sangre hace 1 hora. Signos vitales: taquicardia, hipotensión leve. Los laboratorios muestran leucocitosis marcada (22.000/mm³), Lactato sérico elevado (5.2 mmol/L), y acidosis metabólica. Una angiotomografía abdominal confirma la oclusión embólica aguda de la arteria mesentérica superior. ¿Cuál es el diagnóstico, por qué el dolor desproporcionado a los hallazgos del examen físico es la pista clínica más importante en las etapas TEMPRANAS, y cuál es la conducta terapéutica urgente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Pancreatitis Aguda Biliar; manejo con reposo intestinal y analgesia, sin necesidad de intervención urgente sobre los vasos mesentéricos.",
        distractorProfile: "wrong_diagnosis_missing_key_lab_and_history",
        incorrectFeedback: "La Pancreatitis no explica el hallazgo angiográfico de oclusión embólica de la arteria mesentérica superior, ni el contexto de Fibrilación Auricular no anticoagulada como fuente embólica clara; el lactato marcadamente elevado con acidosis y el dolor desproporcionado son característicos de isquemia mesentérica, no de pancreatitis.",
      },
      {
        id: "B",
        label: "B",
        text: "Isquemia Mesentérica Aguda (embólica); el dolor desproporcionado precede a los signos peritoneales porque estos aparecen solo cuando ya hay necrosis transmural establecida; conducta: laparotomía exploratoria urgente con embolectomía/revascularización y resección del intestino no viable si ya existe necrosis.",
      },
      {
        id: "C",
        label: "C",
        text: "Diverticulitis Aguda no complicada; manejo ambulatorio con antibióticos orales y dieta líquida.",
        distractorProfile: "dangerous_underestimation_of_vascular_emergency",
        incorrectFeedback: "El manejo ambulatorio sería catastróficamente inadecuado ante una oclusión embólica arterial mesentérica confirmada por angiotomografía, que requiere intervención quirúrgica urgente para revascularizar el intestino antes de que progrese a necrosis irreversible.",
      },
      {
        id: "D",
        label: "D",
        text: "Colitis Isquémica leve del colon izquierdo; manejo conservador exclusivamente con hidratación, sin necesidad de estudios angiográficos ni cirugía.",
        distractorProfile: "wrong_diagnosis_wrong_territory_and_severity",
        incorrectFeedback: "La Colitis Isquémica del colon izquierdo típicamente tiene un curso más leve e involucra la circulación mesentérica inferior, no la oclusión embólica de la arteria mesentérica superior confirmada angiográficamente en esta viñeta, que representa una emergencia quirúrgica de mayor severidad.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta una **Isquemia Mesentérica Aguda** de origen **embólico**, precipitada por su Fibrilación Auricular no anticoagulada adecuadamente (fuente clásica de émbolos, frecuentemente originados en la aurícula izquierda, que viajan hacia la arteria mesentérica superior, la cual tiene un origen aórtico relativamente directo que favorece la embolización hacia ese territorio). La clave clínica **más importante en las etapas tempranas**, y que representa una de las \"perlas\" más repetidas en toda la medicina de urgencias, es el **dolor abdominal desproporcionado en relación con los hallazgos relativamente benignos del examen físico**: esto ocurre porque, en las primeras horas, el intestino isquémico duele intensamente (el dolor visceral por isquemia es extremo) pero **aún no ha progresado a necrosis transmural**, que es precisamente lo que genera los signos de irritación peritoneal (rigidez, rebote, defensa) al comprometer también la serosa; por eso, un abdomen que se examina \"relativamente blando\" en un paciente que grita de dolor NO debe tranquilizar al clínico, sino alarmarlo aún más sobre la posibilidad de isquemia mesentérica en etapa temprana, potencialmente reversible. El lactato elevado y la acidosis metabólica reflejan el sufrimiento tisular isquémico ya en curso. Ante la confirmación angiográfica, la conducta es la **laparotomía exploratoria urgente**, con el objetivo de restaurar el flujo sanguíneo (embolectomía quirúrgica o revascularización) y resecar cualquier segmento intestinal ya necrótico e irreversiblemente dañado.",
    keyPoints: [
    "Paciente con factor de riesgo embólico (Fibrilación Auricular) + Dolor abdominal SÚBITO e intenso, DESPROPORCIONADO a un examen físico relativamente benigno (sin peritonismo claro en etapa temprana).; Lactato elevado + Acidosis metabólica.",
    "Isquemia Mesentérica Aguda embólica. Regla de oro: el dolor desproporcionado PRECEDE a los signos peritoneales, que solo aparecen con necrosis transmural ya establecida. Sospechar tempranamente es clave para revascularizar ANTES de que el intestino se necrose. Conducta: Laparotomía urgente.",
    "Emergencias Vasculares Abdominales / Isquemia Mesentérica Aguda."
],
  },
  {
    id: "ucc-conv-2026-09-06-97",
    university: "UCC",
    examArea: "MEDICINA INTERNA - TOXICOLOGÍA / CARDIOLOGÍA",
    topic: "Toxicología Cardiovascular",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","toxicolog-a-cardiovascular","toxicolog","a","cardiovascular"],
    statement: "Un hombre de 60 años, con antecedente de Hipertensión Arterial en tratamiento con Propranolol, es traído a urgencias tras una sobredosis intencional con múltiples tabletas de su medicamento hace 1 hora. Al ingreso: bradicardia marcada (FC 38 lpm), hipotensión severa (PA 72/45 mmHg), y alteración leve del estado de conciencia. El electrocardiograma muestra bradicardia sinusal con QRS de duración normal. La glucosa sérica es de 58 mg/dL (levemente baja). A pesar de la administración de Atropina intravenosa (sin respuesta adecuada) y un bolo de líquidos IV, el paciente permanece hipotenso y bradicárdico. ¿Cuál es el antídoto/tratamiento farmacológico ESPECÍFICO de esta intoxicación que debe considerarse a continuación, dado su mecanismo único que evita el receptor Beta-adrenérgico bloqueado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Adrenalina en altas dosis exclusivamente, ya que actúa directamente sobre los mismos receptores Beta ya bloqueados.",
        distractorProfile: "ineffective_treatment_same_blocked_receptor",
        incorrectFeedback: "La Adrenalina actúa precisamente sobre los mismos receptores Beta-adrenérgicos que ya están bloqueados por el Propranolol en sobredosis, por lo que su efectividad puede estar significativamente reducida; el Glucagón es superior porque actúa por una vía completamente independiente de ese receptor bloqueado.",
      },
      {
        id: "B",
        label: "B",
        text: "Glucagón intravenoso en bolo, que aumenta el AMP cíclico intracelular por una vía INDEPENDIENTE del receptor Beta-adrenérgico (bloqueado por el fármaco), mejorando la contractilidad y frecuencia cardíaca.",
      },
      {
        id: "C",
        label: "C",
        text: "Naloxona intravenosa, asumiendo una intoxicación combinada con opioides no reportada por el paciente.",
        distractorProfile: "irrelevant_alternative_without_clinical_basis",
        incorrectFeedback: "No hay hallazgos clínicos (como miosis puntiforme o depresión respiratoria característica) que sugieran una intoxicación opioide concomitante; el cuadro de bradicardia e hipotensión refractaria en el contexto de sobredosis confirmada de betabloqueador apunta directamente al uso de Glucagón como antídoto específico.",
      },
      {
        id: "D",
        label: "D",
        text: "Flumazenil intravenoso, para revertir un posible efecto sedante adicional de benzodiacepinas no reportadas.",
        distractorProfile: "irrelevant_and_potentially_risky_speculation",
        incorrectFeedback: "No hay antecedente ni hallazgos que sugieran uso concomitante de benzodiacepinas, y el Flumazenil no tiene ningún efecto sobre la bradicardia e hipotensión causadas específicamente por el bloqueo Beta-adrenérgico, que requiere el antídoto específico Glucagón.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta una **Intoxicación por Betabloqueadores (Propranolol)**, causando bradicardia e hipotensión severas por el bloqueo excesivo de los receptores Beta-adrenérgicos cardíacos, con la particularidad adicional de que el Propranolol (un betabloqueador lipofílico no selectivo) puede también causar depresión del sistema nervioso central e **hipoglucemia** (por bloqueo de la respuesta simpática normal que promueve la glucogenólisis). Cuando la bradicardia/hipotensión no responden adecuadamente a las medidas iniciales estándar (Atropina, líquidos IV), el antídoto específico de elección es el **Glucagón intravenoso**, que tiene la ventaja farmacológica única de **aumentar la producción de AMP cíclico intracelular en el miocardio a través de un receptor completamente distinto e independiente del receptor Beta-adrenérgico** (que está bloqueado por el fármaco tóxico); al activar esta vía alternativa, el Glucagón logra mejorar la contractilidad cardíaca (efecto inotrópico) y la frecuencia cardíaca (efecto cronotrópico) sin necesidad de que el receptor Beta bloqueado esté funcional, esencialmente \"evitando\" el sitio de bloqueo del fármaco tóxico por completo.",
    keyPoints: [
    "Sobredosis de Betabloqueadores + Bradicardia + Hipotensión REFRACTARIA a Atropina y líquidos + posible Hipoglucemia asociada.",
    "Intoxicación por Betabloqueadores. Antídoto ESPECÍFICO cuando falla el manejo inicial: GLUCAGÓN IV (aumenta el AMPc por una vía independiente del receptor Beta bloqueado). Mnemotecnia: \"el Glucagón le da la vuelta al bloqueo\".",
    "Toxicología Cardiovascular / Intoxicación por Betabloqueadores."
],
  },
  {
    id: "ucc-conv-2026-09-06-98",
    university: "UCC",
    examArea: "PEDIATRÍA - ENDOCRINOLOGÍA",
    topic: "Endocrinología Neonatal",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","endocrinolog-a-neonatal","endocrinolog","a","neonatal"],
    statement: "Un recién nacido a término, aparentemente sano al examen físico inicial, es identificado mediante el tamizaje neonatal universal (prueba de talón) realizado a las 48 horas de vida con niveles de TSH marcadamente elevados. Al ser contactados, los padres refieren que el bebé ha estado \"muy tranquilo, duerme mucho y casi no llora\", con dificultad para la lactancia y estreñimiento. Al examen físico más detallado se detecta ictericia prolongada, hipotonía leve, fontanelas amplias, y una hernia umbilical pequeña. ¿Cuál es el diagnóstico, y por qué es de importancia CRÍTICA iniciar el tratamiento de reemplazo hormonal lo más pronto posible (idealmente dentro de las primeras 2 semanas de vida), independientemente de lo \"sano\" que luzca el bebé clínicamente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ictericia Fisiológica del Recién Nacido; no requiere ningún tratamiento específico ni es urgente, solo observación.",
        distractorProfile: "dangerous_dismissal_of_screening_result",
        incorrectFeedback: "Aunque la ictericia prolongada es uno de los hallazgos asociados, el hallazgo central y diagnóstico en esta viñeta es la TSH marcadamente elevada en el tamizaje neonatal, que confirma Hipotiroidismo Congénito, una condición que requiere tratamiento urgente para prevenir daño neurológico irreversible, no simple observación.",
      },
      {
        id: "B",
        label: "B",
        text: "Hipotiroidismo Congénito; el tratamiento temprano con Levotiroxina es CRÍTICO porque la hormona tiroidea es esencial para el desarrollo neurológico normal en las primeras semanas de vida, y el retraso en el tratamiento puede causar discapacidad intelectual IRREVERSIBLE.",
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome de Down; el tratamiento hormonal no tiene ningún rol específico en esta condición genética.",
        distractorProfile: "wrong_diagnosis_missing_screening_result",
        incorrectFeedback: "El Síndrome de Down es un diagnóstico genético distinto que no se detecta mediante el tamizaje de TSH neonatal; el hallazgo específico de TSH elevada en el tamizaje universal es diagnóstico de Hipotiroidismo Congénito, que sí requiere tratamiento hormonal urgente.",
      },
      {
        id: "D",
        label: "D",
        text: "Sepsis Neonatal Tardía; requiere manejo exclusivamente con antibióticos de amplio espectro sin relación con el eje tiroideo.",
        distractorProfile: "wrong_diagnosis_ignoring_screening_result",
        incorrectFeedback: "No hay hallazgos de un proceso infeccioso agudo (fiebre, inestabilidad hemodinámica) descritos, y el hallazgo definitorio de esta viñeta es la TSH marcadamente elevada en el tamizaje neonatal universal, que es diagnóstico específico de Hipotiroidismo Congénito.",
      },
    ],
    correctOptionId: "B",
    explanation: "El recién nacido presenta **Hipotiroidismo Congénito**, detectado mediante el **tamizaje neonatal universal** (una de las intervenciones de salud pública más costo-efectivas en pediatría), que muestra TSH marcadamente elevada. Es fundamental reconocer que los recién nacidos con hipotiroidismo congénito frecuentemente lucen **clínicamente normales o presentan signos muy sutiles e inespecíficos** al nacer (letargia, dificultad para alimentarse, estreñimiento, ictericia prolongada, hipotonía, fontanelas amplias, hernia umbilical), precisamente porque **la hormona tiroidea materna** que cruzó la placenta durante el embarazo brindó cierta protección transitoria; sin embargo, una vez nacido, el niño depende completamente de su propia producción tiroidea (ausente o insuficiente) para el desarrollo cerebral normal. La razón por la que el **tratamiento con Levotiroxina debe iniciarse lo más pronto posible** (idealmente dentro de las primeras 1-2 semanas de vida) es que la hormona tiroidea es **absolutamente esencial para la mielinización y el desarrollo neuronal normal** durante este periodo crítico y ventana única del desarrollo cerebral; el retraso en el diagnóstico y tratamiento (situación común antes de la implementación universal del tamizaje neonatal) resultaba históricamente en **discapacidad intelectual severa e IRREVERSIBLE** (anteriormente conocida como \"cretinismo\"), un daño que **no puede revertirse** una vez que la ventana crítica del desarrollo neurológico ha pasado, sin importar cuán agresivamente se trate posteriormente.",
    keyPoints: [
    "Tamizaje neonatal con TSH elevada + hallazgos sutiles/inespecíficos (letargia, estreñimiento, ictericia prolongada, hipotonía, hernia umbilical, fontanelas amplias).",
    "Hipotiroidismo Congénito. REGLA DE ORO: iniciar Levotiroxina LO ANTES POSIBLE (idealmente <2 semanas de vida). La hormona tiroidea es esencial para el desarrollo cerebral en esta ventana crítica; el retraso causa discapacidad intelectual IRREVERSIBLE. El tamizaje neonatal universal es la herramienta clave porque el bebé puede lucir clínicamente normal al nacer.",
    "Endocrinología Neonatal / Hipotiroidismo Congénito."
],
  },
  {
    id: "ucc-conv-2026-09-06-99",
    university: "UCC",
    examArea: "CIRUGÍA GENERAL - GASTROENTEROLOGÍA",
    topic: "Cirugía General",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","cirug-a-general","cirug","a","general"],
    statement: "Un hombre de 65 años, con antecedente conocido de enfermedad diverticular del colon sigmoides, consulta por dolor abdominal en fosa ilíaca izquierda de 3 días de evolución, fiebre de 38.7°C, y cambios en el hábito intestinal. Al examen físico hay dolor localizado en fosa ilíaca izquierda con defensa muscular leve, sin signos de irritación peritoneal generalizada. Una tomografía abdominal contrastada confirma engrosamiento de la pared del colon sigmoides con inflamación de la grasa pericólica y un **absceso pericólico de 3.5 cm**, sin evidencia de aire libre extraluminal ni de peritonitis generalizada. ¿Cuál es la clasificación de esta diverticulitis complicada, y cuál es el manejo APROPIADO dado el tamaño del absceso y la ausencia de peritonitis generalizada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Diverticulitis No Complicada; manejo ambulatorio exclusivamente con antibióticos orales, sin necesidad de ningún procedimiento adicional.",
        distractorProfile: "underestimation_of_complicated_disease",
        incorrectFeedback: "La presencia de un absceso pericólico documentado por tomografía define esta diverticulitis como COMPLICADA, no simple; un absceso de este tamaño (3.5 cm) generalmente requiere drenaje percutáneo además de antibióticos, y el manejo ambulatorio con antibióticos orales únicamente sería insuficiente.",
      },
      {
        id: "B",
        label: "B",
        text: "Diverticulitis Complicada con absceso pericólico (Hinchey Ib/II); manejo con antibioticoterapia intravenosa Y drenaje percutáneo guiado por imagen del absceso (dado su tamaño >3-4 cm), reservando la cirugía de urgencia para falta de respuesta o deterioro.",
      },
      {
        id: "C",
        label: "C",
        text: "Diverticulitis Perforada con Peritonitis Purulenta Generalizada (Hinchey III); manejo con lavado peritoneal laparoscópico de urgencia inmediata sin necesidad de antibióticos previos.",
        distractorProfile: "overestimation_of_severity",
        incorrectFeedback: "La tomografía describe un absceso LOCALIZADO sin evidencia de peritonitis generalizada difusa, lo que corresponde a Hinchey I-II, no III; además, los antibióticos siempre se inician de forma simultánea o previa a cualquier intervención, nunca se omiten.",
      },
      {
        id: "D",
        label: "D",
        text: "Diverticulitis Perforada con Peritonitis Fecal (Hinchey IV); manejo con Procedimiento de Hartmann de urgencia como única opción terapéutica posible.",
        distractorProfile: "overestimation_and_premature_definitive_surgery",
        incorrectFeedback: "No hay evidencia de perforación libre con contaminación fecal generalizada (Hinchey IV) en esta viñeta, que describe un absceso pericólico localizado; el manejo inicial apropiado en este estadio es el drenaje percutáneo con antibióticos, no una cirugía radical de urgencia como el Hartmann.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta una **Diverticulitis Aguda Complicada** con formación de un **absceso pericólico**, correspondiente a la clasificación de **Hinchey Ib/II** (absceso localizado, pericólico o pélvico, sin peritonitis generalizada difusa). La clasificación de Hinchey es fundamental para guiar el manejo: los estadios I (flemón/absceso pequeño pericólico) frecuentemente responden a manejo médico exclusivo con antibióticos; sin embargo, los abscesos de **mayor tamaño (generalmente >3-4 cm)**, como el de 3.5 cm en este paciente, tienen menor probabilidad de resolución con antibióticos solos y se benefician significativamente de un **drenaje percutáneo guiado por imagen (ecografía o tomografía)**, que permite evacuar la colección purulenta de forma mínimamente invasiva, evitando o retrasando la necesidad de cirugía de urgencia (que conlleva mayor morbimortalidad en el contexto agudo/inflamatorio) y frecuentemente permitiendo una eventual resección electiva programada del segmento colónico afectado en un momento posterior, en mejores condiciones clínicas. La cirugía de urgencia (Hartmann u otra resección) se reserva para los estadios más avanzados (Hinchey III: peritonitis purulenta generalizada por rotura del absceso; Hinchey IV: peritonitis fecal por perforación libre) o para la falta de respuesta/deterioro clínico tras el manejo inicial con antibióticos y drenaje.",
    keyPoints: [
    "Diverticulitis con Absceso pericólico de tamaño significativo (>3-4 cm), SIN peritonitis generalizada.",
    "Diverticulitis Complicada (Hinchey I-II). Manejo: Antibiótico IV + DRENAJE PERCUTÁNEO del absceso (no cirugía de urgencia de entrada). Cirugía de urgencia reservada para Hinchey III/IV (peritonitis generalizada) o falta de respuesta al manejo inicial.",
    "Cirugía General / Diverticulitis Complicada (Clasificación de Hinchey)."
],
  },
  {
    id: "ucc-conv-2026-09-06-100",
    university: "UCC",
    examArea: "MEDICINA INTERNA - GASTROENTEROLOGÍA / HEPATOLOGÍA",
    topic: "Hepatología Vascular",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","hepatolog-a-vascular","hepatolog","a","vascular"],
    statement: "Una mujer de 32 años, con antecedente de Policitemia Vera diagnosticada hace 1 año (en tratamiento irregular), consulta por dolor abdominal difuso progresivo de 2 semanas de evolución, distensión abdominal marcada, e ictericia leve. Al examen físico hay hepatomegalia dolorosa y ascitis clínicamente evidente a la percusión, sin esplenomegalia significativa adicional a la ya conocida por su enfermedad hematológica de base. Los laboratorios muestran transaminasas elevadas y función hepática sintética levemente alterada. Una ecografía Doppler hepática muestra **ausencia de flujo en las venas hepáticas**, con un patrón de flujo hepático alterado y colaterales venosas visibles. ¿Cuál es el diagnóstico de esta complicación hepática asociada a los estados de hipercoagulabilidad como su enfermedad hematológica de base, y cuál es la conducta diagnóstica/terapéutica a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cirrosis Hepática Criptogénica; manejo con Espironolactona y restricción de sodio exclusivamente, sin necesidad de estudios vasculares adicionales.",
        distractorProfile: "wrong_diagnosis_missing_vascular_workup",
        incorrectFeedback: "El hallazgo específico de ausencia de flujo en las venas hepáticas por Doppler, en una paciente con un estado de hipercoagulabilidad conocido (Policitemia Vera), es diagnóstico de Budd-Chiari; etiquetar el cuadro como cirrosis \"criptogénica\" sin descartar activamente una causa vascular tratable retrasa el manejo específico y la anticoagulación necesaria.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Budd-Chiari (Trombosis de las Venas Hepáticas); requiere anticoagulación y evaluación urgente para manejo de la obstrucción venosa (angioplastia/stent, derivación portosistémica, o trasplante hepático según severidad), además de tratar la Policitemia Vera de base.",
      },
      {
        id: "C",
        label: "C",
        text: "Hepatitis Viral Aguda Fulminante; manejo exclusivamente de soporte, sin necesidad de estudios vasculares ni anticoagulación.",
        distractorProfile: "wrong_diagnosis_ignoring_doppler_finding",
        incorrectFeedback: "La Hepatitis Viral Fulminante no explica la ausencia de flujo en las venas hepáticas documentada por Doppler; este hallazgo vascular específico, junto con el antecedente de un estado protrombótico conocido, es diagnóstico de Budd-Chiari, que requiere anticoagulación y manejo de la obstrucción venosa, no solo soporte.",
      },
      {
        id: "D",
        label: "D",
        text: "Colangitis Esclerosante Primaria; manejo con Ácido Ursodesoxicólico como tratamiento único.",
        distractorProfile: "wrong_diagnosis_wrong_imaging_pattern",
        incorrectFeedback: "La Colangitis Esclerosante Primaria se caracteriza por estenosis y dilataciones \"en rosario\" de la vía biliar en la colangiografía, no por ausencia de flujo en las venas hepáticas; este hallazgo Doppler específico en el contexto de un estado de hipercoagulabilidad confirma Budd-Chiari, no una colangiopatía.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta un **Síndrome de Budd-Chiari**, causado por la **obstrucción del flujo venoso de salida hepático** (trombosis de las venas hepáticas y/o de la vena cava inferior en su porción suprahepática), generando congestión hepática retrógrada. La causa subyacente más frecuente e importante a identificar es un **estado de hipercoagulabilidad**, siendo las **neoplasias mieloproliferativas** (particularmente la **Policitemia Vera**, como en esta paciente) una de las asociaciones más clásicas y frecuentes, debido al estado protrombótico intrínseco de estas condiciones hematológicas (frecuentemente relacionado con la mutación JAK2). El cuadro clínico clásico de la tríada **dolor abdominal, hepatomegalia dolorosa, y ascitis** (con o sin ictericia asociada), confirmado por la ecografía Doppler que demuestra ausencia o alteración del flujo en las venas hepáticas, establece el diagnóstico. El manejo requiere un abordaje dual: **anticoagulación sistémica** (para prevenir la progresión trombótica y tratar la causa subyacente), y una evaluación urgente para **restaurar el flujo venoso hepático** mediante técnicas escalonadas según la severidad y la anatomía (angioplastia con o sin colocación de stent en obstrucciones focales, derivación portosistémica intrahepática transyugular -TIPS- en casos más extensos, y trasplante hepático en casos de falla hepática fulminante o cirrosis ya establecida), además del tratamiento específico y optimizado de la Policitemia Vera subyacente para controlar el estado protrombótico de base.",
    keyPoints: [
    "Paciente con estado de hipercoagulabilidad conocido (especialmente Neoplasias Mieloproliferativas como Policitemia Vera) + Tríada: Dolor abdominal + Hepatomegalia dolorosa + Ascitis.; Doppler hepático: ausencia/alteración de flujo en venas hepáticas.",
    "Síndrome de Budd-Chiari (Trombosis de venas hepáticas). Causa clásica a buscar: Estados de hipercoagulabilidad (Neoplasias Mieloproliferativas, Síndrome Antifosfolípido, entre otros). Manejo: Anticoagulación + Restauración del flujo venoso (angioplastia/stent/TIPS/trasplante según severidad) + Tratar la causa subyacente.",
    "Hepatología Vascular / Síndrome de Budd-Chiari."
],
  }
];
