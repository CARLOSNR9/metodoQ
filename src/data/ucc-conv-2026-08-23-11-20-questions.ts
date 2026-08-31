import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · Preguntas #11–#20.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_08_23_11_20_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-08-23-11",
    university: "UCC",
    examArea: "PEDIATRÍA - GASTROENTEROLOGÍA / CIRUGÍA",
    topic: "Cirugía Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","cirug-a-pedi-trica","cirug","a","pedi","trica"],
    statement: "Un lactante de 4 semanas de vida es traído por sus padres por presentar ictericia persistente desde su primera semana de nacimiento. La madre relata que el bebé se alimenta bien y luce activo, pero ha notado que las deposiciones del niño son \"blancas como la masilla\" (acolia franca) y la orina mancha el pañal de un color oscuro intenso (coluria). Al examen físico se evidencia ictericia mucocutánea generalizada y hepatomegalia de consistencia firme a 4 cm bajo el reborde costal. Laboratorios: Bilirrubina Total 12 mg/dL con una Bilirrubina Directa de 9.5 mg/dL. Las transaminasas están levemente elevadas y la GGT está francamente alta. Una ecografía en ayunas no logra visualizar la vesícula biliar y revela el \"signo del cordón triangular\" en el porta hepatis. Ante el diagnóstico casi definitivo de esta patología obstructiva neonatal, ¿cuál es el límite de tiempo de oro OBLIGATORIO para realizar la cirugía derivativa curativa antes de que el daño hepático (cirrosis biliar) sea irreversible y obligue a un trasplante hepático?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Antes de los 6 meses de vida.",
      },
      {
        id: "B",
        label: "B",
        text: "Antes de las 8 semanas (60 días) de vida.",
      },
      {
        id: "C",
        label: "C",
        text: "Antes de las 24 horas del diagnóstico para evitar peritonitis biliar.",
      },
      {
        id: "D",
        label: "D",
        text: "Se difiere hasta el año de edad para permitir el crecimiento de los conductos hepáticos remanentes.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Atresia de Vías Biliares (AVB), la principal causa de ictericia colestásica neonatal y la indicación número uno de trasplante hepático en pediatría. Se trata de un proceso fibro-obliterativo progresivo que destruye las vías biliares extrahepáticas. La clínica clásica es un bebé que luce \"sano\" (no tóxico, a diferencia de la sepsis), pero que a las 2-4 semanas de vida presenta ictericia progresiva, acolia (heces blancas por falta de bilis en el intestino) y coluria (exceso de bilirrubina directa filtrada en riñón). La cirugía salvavidas y de derivación es la Hepatoportoenterostomía de Kasai (se conecta un asa de yeyuno directamente al hilio hepático cortado para que la bilis drene al intestino). La regla sagrada y el factor pronóstico más importante de esta cirugía es el TIEMPO: el procedimiento de Kasai debe realizarse idealmente antes de los 60 días de vida (8 semanas). Si se opera después de los 90 días, la tasa de éxito (flujo de bilis) cae en picada a menos del 20%, ya que la fibrosis habrá destruido los conductos intrahepáticos de forma irreversible, condenando al bebé a cirrosis biliar terminal y muerte sin un trasplante.",
    keyPoints: [
    "Neonato de 2 a 6 semanas de vida con Ictericia que NO mejora.; Signos de colestasis: Heces blancas (Acolia) + Orina oscura (Coluria).; Predominio de Bilirrubina DIRECTA/Conjugada.",
    "Atresia de Vías Biliares. (Nunca es ictericia por leche materna si hay acolia y bilirrubina directa). El tratamiento es la Cirugía de Kasai y DEBE hacerse antes de las 8 semanas de vida.",
    "Cirugía Pediátrica / Gastroenterología."
],
  },
  {
    id: "ucc-conv-2026-08-23-12",
    university: "UCC",
    examArea: "MEDICINA INTERNA - HEPATOLOGÍA / URGENCIAS",
    topic: "Hepatología",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","hepatolog-a","hepatolog","a"],
    statement: "Un hombre de 62 años con cirrosis hepática de origen enólico y ascitis a tensión ingresa por urgencias con un cuadro de encefalopatía grado II, febrícula (37.8°C) y dolor abdominal difuso leve. A su ingreso, sus laboratorios revelan: Creatinina 1.8 mg/dL (basal de 0.9 mg/dL hace un mes), BUN 45 mg/dL y Bilirrubina Total 5.2 mg/dL. Se realiza una paracentesis diagnóstica que reporta un recuento celular de 800 leucocitos/mm³ con un 85% de polimorfonucleares (PMN). El Gram es negativo. Se diagnostica una Peritonitis Bacteriana Espontánea (PBE) y se inicia inmediatamente tratamiento con Cefotaxima intravenosa. Sin embargo, para prevenir la complicación letal más frecuente asociada a la PBE y reducir la mortalidad hospitalaria en este paciente específico, ¿cuál es la infusión intravenosa OBLIGATORIA que debe administrarse el Día 1 y el Día 3 de su hospitalización?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Infusión de Octreotide y Terlipresina para disminuir el flujo esplácnico y el dolor.",
      },
      {
        id: "B",
        label: "B",
        text: "Albúmina humana intravenosa a dosis de 1.5 g/kg el día 1, y 1.0 g/kg el día 3.",
      },
      {
        id: "C",
        label: "C",
        text: "Infusión de Bicarbonato de Sodio para corregir la acidosis tubular secundaria a la sepsis.",
      },
      {
        id: "D",
        label: "D",
        text: "Plasma Fresco Congelado (PFC) para reponer los factores de coagulación consumidos por la infección peritoneal.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Peritonitis Bacteriana Espontánea (PBE) (confirmada por > 250 PMN/mm³ en el líquido ascítico). En el paciente cirrótico, la PBE no solo causa sepsis, sino que genera una vasodilatación esplácnica masiva mediada por citoquinas. Esta vasodilatación \"roba\" la sangre de la circulación central, provocando una caída brutal de la perfusión hacia los riñones, precipitando el letal Síndrome Hepatorrenal (SHR). Aproximadamente el 30-40% de los pacientes con PBE desarrollan insuficiencia renal aguda, la cual dispara la mortalidad por encima del 50%. Múltiples ensayos clínicos mundiales han demostrado de forma irrefutable que la administración intravenosa de Albúmina humana (1.5 g/kg el Día 1 y 1.0 g/kg el Día 3) como expansor de volumen plasmático potente y prolongado, reduce la incidencia de falla renal del 33% al 10%, y reduce la mortalidad de forma dramática. Esta infusión está estrictamente indicada (es obligatoria) si el paciente presenta signos de riesgo en sus laboratorios de ingreso: Creatinina > 1 mg/dL, BUN > 30 mg/dL, o Bilirrubina Total > 4 mg/dL. (Nuestro paciente cumple todos estos criterios de alto riesgo).",
    keyPoints: [
    "Cirrótico con PBE (> 250 PMN en ascitis) + Antibióticos (Cefotaxima).; Presencia de Falla Renal sutil (Creatinina o BUN elevados) o Ictericia marcada (Bilirrubina > 4).",
    "Prevención OBLIGATORIA del Síndrome Hepatorrenal. El pilar para evitar que el riñón muera es la expansión con Albúmina IV los días 1 y 3.",
    "Hepatología / Complicaciones de PBE."
],
  },
  {
    id: "ucc-conv-2026-08-23-13",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / TOXICOLOGÍA",
    topic: "Toxicología Cardiovascular",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","toxicolog-a-cardiovascular","toxicolog","a","cardiovascular"],
    statement: "Un paciente masculino de 72 años, con antecedente de Falla Cardíaca con FEVI reducida (25%) y Fibrilación Auricular crónica, acude a urgencias quejándose de náuseas intensas, vómitos, fatiga severa y visión borrosa (refiere ver \"halos amarillos\" alrededor de las luces). Su medicación ambulatoria incluye Enalapril, Carvedilol, Furosemida, Espironolactona y Digoxina. Hace dos semanas, debido a un cuadro de edemas en miembros inferiores, el paciente duplicó por su cuenta la dosis diaria de Furosemida. Al examen físico: PA 110/60 mmHg, FC 45 lpm. El electrocardiograma (ECG) inicial evidencia una Taquicardia Auricular (ondas P a 180 lpm) acompañada de un Bloqueo Auriculoventricular (AV) de segundo grado tipo Mobitz I (Wenckebach) y extrasístoles ventriculares frecuentes. La clásica cubeta digitálica está presente. ¿Cuál es el trastorno hidroelectrolítico provocado por su ajuste de medicación que precipitó agudamente este cuadro de toxicidad letal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hipercalcemia aguda.",
      },
      {
        id: "B",
        label: "B",
        text: "Hiponatremia dilucional.",
      },
      {
        id: "C",
        label: "C",
        text: "Hiperkalemia severa por falla renal prerrenal.",
      },
      {
        id: "D",
        label: "D",
        text: "Hipokalemia inducida por diuréticos.",
      },
    ],
    correctOptionId: "D",
    explanation: "El paciente cursa con una Intoxicación digitálica (Toxicidad por Digoxina). Los signos visuales patognomónicos (visión amarilla / xantopsia o halos), las náuseas (primer síntoma tóxico usual) y las arritmias mixtas paradójicas (Taquicardia auricular con Bloqueo AV simultáneo) son el sello clásico de la intoxicación. La digoxina actúa bloqueando la bomba Na+/K+ ATPasa en el miocardiocito. Sin embargo, el Potasio sérico (K+) compite directamente con la Digoxina por el mismo sitio de unión en la bomba. Si un paciente desarrolla HIPOKALEMIA (Potasio bajo), la digoxina ya no tiene competencia y se une masivamente a las bombas, desencadenando una toxicidad fulminante y arritmias letales incluso con niveles séricos de digoxina que podrían considerarse en \"rango terapéutico\" normal. Al duplicar la Furosemida (un diurético perdedor de potasio), el paciente vació sus reservas de potasio, abriendo la puerta a la intoxicación. El tratamiento incluye reponer el potasio, suspender la digoxina y, si hay inestabilidad extrema o riesgo vital, administrar anticuerpos antidigoxina (Fragmentos Fab / Digibind).",
    keyPoints: [
    "Paciente anciano cardiópata tomando Digoxina + Diuréticos de asa.; Síntomas GI (náuseas/vómitos) + Alteraciones visuales (halos amarillos/verdes).; ECG con arritmias complejas (ej. Taquicardia Auricular + Bloqueo AV).",
    "Intoxicación por Digoxina. El factor precipitante número uno es la Hipokalemia. (Ojo al detalle: la intoxicación en sí puede causar hiperkalemia severa por envenenamiento general de las bombas, pero es la hipokalemia inicial la que dispara la toxicidad al permitirle paso libre al fármaco).",
    "Toxicología Cardiovascular / Efectos Adversos Farmacológicos."
],
  },
  {
    id: "ucc-conv-2026-08-23-14",
    university: "UCC",
    examArea: "PEDIATRÍA - INMUNOLOGÍA / HEMATOLOGÍA",
    topic: "Inmunodeficiencias Primarias Pediátricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","inmunodeficiencias-primarias-pedi-tricas","inmunodeficiencias","primarias","pedi","tricas"],
    statement: "Un lactante varón de 4 meses de edad es derivado a infectología pediátrica por una historia de infecciones recurrentes y severas. Desde su nacimiento, ha presentado episodios de muguet oral (Candidiasis) intratable que no responde a nistatina tópica, diarrea crónica y falla de medro. Hace una semana estuvo hospitalizado en UCI por una Neumonía por Pneumocystis jirovecii. A la exploración física se documenta ausencia de tejido linfoide periférico (amígdalas y ganglios linfáticos palpables minúsculos o nulos). El paraclínico de rutina revela una Linfopenia absoluta profunda (Linfocitos < 1.000/mm³), y una radiografía de tórax confirma la ausencia total de sombra tímica. Ante la fuerte sospecha clínica del defecto genético letal subyacente (frecuentemente ligado al cromosoma X por mutación del gen gamma-c del receptor de interleucinas), ¿cuál es el único tratamiento CURATIVO y definitivo para salvar la vida de este niño?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reemplazo vitalicio de Inmunoglobulina G Intravenosa (IGIV) mensual.",
      },
      {
        id: "B",
        label: "B",
        text: "Trasplante de células madre hematopoyéticas (Trasplante de Médula Ósea) de urgencia.",
      },
      {
        id: "C",
        label: "C",
        text: "Infusión intravenosa de enzima Adenosina Deaminasa (ADA) recombinante.",
      },
      {
        id: "D",
        label: "D",
        text: "Timectomía total y administración crónica de factores estimulantes de colonias granulocíticas (G-CSF).",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Inmunodeficiencia Combinada Grave (SCID, por sus siglas en inglés), la forma más letal y profunda de las inmunodeficiencias primarias (famosa históricamente por el caso del \"Niño Burbuja\"). Se llama \"combinada\" porque el defecto genético paraliza el desarrollo tanto de la inmunidad celular (Linfocitos T) como de la inmunidad humoral (Linfocitos B). El niño nace virtualmente sin sistema inmunológico defensivo. La clínica debuta en los primeros meses de vida (cuando los anticuerpos maternos se desgastan) con infecciones oportunistas monstruosas (Cándida oral invasiva, Pneumocystis, CMV), diarrea intratable, falla de medro y Linfopenia absoluta severa. La falta de timo en la placa es por ausencia total de células T en desarrollo. Sin tratamiento, la condición es invariablemente mortal antes del primer año de vida. Las IGIV y profilaxis antibióticas solo ganan tiempo; la única cura absoluta y permanente que reescribe el sistema inmunológico del paciente desde cero es el Trasplante de Células Madre Hematopoyéticas (Médula Ósea).",
    keyPoints: [
    "Lactante (meses de vida) con infecciones oportunistas brutales (Pneumocystis jirovecii, Cándida severa).; Hallazgos físicos: \"No hay ganglios\" ni amígdalas + Ausencia de sombra de Timo en Rx.; Laboratorio: LINFOPENIA absoluta extrema.",
    "SCID (Inmunodeficiencia Combinada Grave). Tratamiento definitivo: Trasplante de Médula Ósea. Reglas de oro: PROHIBIDAS las vacunas vivas atenuadas (ej. BCG, Rotavirus, Triple Viral, Polio) porque lo matarán de una infección diseminada. Y si requiere transfusión de sangre, DEBE ser sangre Irradiada (para evitar la Enfermedad de Injerto contra Huésped por los leucocitos del donante).",
    "Inmunodeficiencias Primarias Pediátricas / SCID."
],
  },
  {
    id: "ucc-conv-2026-08-23-15",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEFROLOGÍA / RADIOLOGÍA",
    topic: "Efectos Adversos Radiológicos",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","efectos-adversos-radiol-gicos","efectos","adversos","radiol","gicos"],
    statement: "Un paciente masculino de 55 años, con antecedente de Enfermedad Renal Crónica Estadio 4 (Tasa de Filtrado Glomerular estimada de 20 mL/min/1.73m²), está programado para una Resonancia Magnética (RMN) de cráneo debido a la sospecha de un meningioma. El protocolo estándar del hospital para este estudio incluye la administración endovenosa de un medio de contraste basado en Gadolinio para delimitar la masa tumoral. El residente de medicina interna detiene la solicitud de imagen en el sistema y se niega rotundamente a autorizar el contraste. ¿Qué complicación yatrogénica devastadora, fibrótica, irreversible y casi exclusiva de los pacientes con falla renal avanzada busca prevenir el residente al prohibir el uso de Gadolinio?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nefropatía Inducida por Contraste hiperosmolar que precipitará diálisis de emergencia en 24 horas.",
      },
      {
        id: "B",
        label: "B",
        text: "Fibrosis Sistémica Nefrógena (Dermopatía Fibrosante Nefrógena).",
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome de Churg-Strauss desencadenado por depósito iónico en pequeños vasos.",
      },
      {
        id: "D",
        label: "D",
        text: "Reacción anafilactoide cruzada masiva mediada por IgE en pacientes urémicos.",
      },
    ],
    correctOptionId: "B",
    explanation: "Esta es la complicación bandera y el \"coco\" del uso del contraste en Resonancia Magnética. A diferencia del contraste yodado de las Tomografías (que \"quema\" el riñón causando Nefropatía por Contraste aguda), el contraste de Gadolinio utilizado en la RMN no es típicamente nefrotóxico, PERO en pacientes con falla renal severa (TFG < 30 mL/min, y especialmente en diálisis), el riñón es incapaz de excretarlo. El Gadolinio se estanca en la sangre por días, perdiendo sus moléculas protectoras (quelantes) y liberando iones tóxicos libres que se depositan en la piel, articulaciones y órganos internos. Esto desata una catástrofe fibrótica irremediable conocida como Fibrosis Sistémica Nefrógena (NSF). Clínicamente, semanas o meses después del estudio, la piel del paciente se vuelve tan dura, brillante e indurada como la madera (esclerodermia-like), causando contracturas articulares severas que postran al paciente en silla de ruedas, fibrosis pulmonar y de órganos internos, sin tratamiento curativo conocido hasta la fecha.",
    keyPoints: [
    "Paciente con Enfermedad Renal Crónica severa (Estadio 4 o 5, TFG < 30) o falla renal aguda.; Necesidad de realizar una Resonancia Magnética con contraste.",
    "Peligro extremo de Fibrosis Sistémica Nefrógena (NSF). REGLA OBLIGATORIA: Está absolutamente contraindicado el uso de contrastes de gadolinio clásicos en pacientes con TFG < 30. (Se deben buscar alternativas de imagen como TAC sin contraste o eco).",
    "Efectos Adversos Radiológicos / Nefrología."
],
  },
  {
    id: "ucc-conv-2026-08-23-16",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUMOLOGÍA / INFECTOLOGÍA",
    topic: "Neumopatías Ocupacionales",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","neumopat-as-ocupacionales","neumopat","as","ocupacionales"],
    statement: "Un hombre de 65 años, trabajador retirado de la minería de cuarzo y limpiador con chorro de arena (sandblaster) durante 30 años, acude a consulta por tos crónica productiva, febrícula vespertina y pérdida de peso (6 kg en el último mes). En su historial, se le diagnosticó hace años una neumoconiosis ocupacional. La radiografía de tórax basal de archivo del paciente mostraba múltiples nódulos pequeños predominantemente en los lóbulos superiores y calcificación periférica de los ganglios hiliares \"en cáscara de huevo\" (eggshell calcification). Sin embargo, en la radiografía de tórax solicitada el día de hoy, se evidencia la aparición reciente de una gran caverna en el lóbulo superior derecho. Al examen físico, el paciente luce caquéctico. ¿Cuál es el patógeno infeccioso subyacente que aprovecha el defecto inmunológico intracelular provocado por este mineral, siendo la complicación clínica a descartar obligatoriamente en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aspergilosis pulmonar invasiva; las esporas fúngicas anidan en la necrosis fibrótica del mineral.",
      },
      {
        id: "B",
        label: "B",
        text: "Tuberculosis Pulmonar (Mycobacterium tuberculosis); la sílice ingerida por los macrófagos alveolares destruye su capacidad fagocítica y oxidativa.",
      },
      {
        id: "C",
        label: "C",
        text: "Neumonía necrotizante por Staphylococcus aureus meticilino-resistente (SAMR); el mineral crea un nido aséptico ideal para el biofilm.",
      },
      {
        id: "D",
        label: "D",
        text: "Histoplasmosis diseminada; el polvo de la mina se mezcla con guano de murciélago desencadenando el cuadro.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Silicosis crónica complicada. La exposición laboral clásica al polvo de cuarzo, canteras o limpieza con chorro de arena (sandblasting) genera depósitos de sílice cristalina en los pulmones. Los hallazgos radiológicos clásicos son los nódulos en lóbulos superiores y, patognomónicamente, los ganglios hiliares calcificados en \"cáscara de huevo\". El grave peligro de la silicosis radica en la biología celular: la sílice cristalina es fagocitada por los macrófagos alveolares pulmonares, pero el mineral es indestructible. La sílice perfora los lisosomas del macrófago por dentro, matando a la célula de defensa y liberando sus enzimas al intersticio (creando cicatrices/fibrosis). Al tener los macrófagos destruidos, los pacientes silicosos pierden la defensa de primera línea celular y sufren un riesgo inmensamente elevado (hasta 30 veces mayor que la población normal) de desarrollar y reactivar la Tuberculosis Pulmonar (Silicotuberculosis). Todo paciente con antecedente de silicosis que desarrolla una caverna, tos persistente nueva, fiebre o pérdida de peso, tiene Tuberculosis hasta que el frotis de bacilos ácido-alcohol resistentes (BAAR) y el cultivo demuestren lo contrario.",
    keyPoints: [
    "Trabajador de canteras, vidrio, cerámica, o minero (expuesto a sílice).; Rx: Nódulos pulmonares superiores + Ganglios en \"cáscara de huevo\".; Deterioro clínico rápido: Cavernas o fiebre y sudores nocturnos.",
    "Silicosis + Tuberculosis superpuesta. Fisiopatología: Disfunción masiva de los macrófagos alveolares por toxicidad de la sílice. Exige aislamiento y baciloscopias seriadas urgentes.",
    "Neumopatías Ocupacionales / Infectología."
],
  },
  {
    id: "ucc-conv-2026-08-23-17",
    university: "UCC",
    examArea: "PEDIATRÍA - NEUROLOGÍA",
    topic: "Neurología Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","neurolog-a-pedi-trica","neurolog","a","pedi","trica"],
    statement: "Una lactante femenina de 6 meses de edad, previamente sana pero con antecedentes de asfixia perinatal leve, es traída por su madre en estado de extrema ansiedad. La madre reporta que durante las últimas semanas la niña ha comenzado a presentar \"episodios de cólicos muy extraños\" que ocurren frecuentemente al despertar o al quedarse dormida. Durante los episodios, la niña flexiona bruscamente el cuello, la cintura y las piernas hacia el abdomen, levantando y cruzando los brazos hacia adelante como si diera un abrazo. Estas contracciones duran un par de segundos, pero ocurren en \"salvas\" o racimos de hasta 20 a 30 repeticiones consecutivas. Tras las salvas, la niña llora desconsoladamente. El pediatra advierte además una detención en el neurodesarrollo en el último mes. Al realizarle un Electroencefalograma (EEG) en sueño, se documenta un patrón profundamente caótico, desorganizado, de ondas lentas de alto voltaje entremezcladas con puntas multifocales asincrónicas (Hipsarritmia). ¿Cuál es el tratamiento de elección INICIAL para frenar el daño neurológico de esta encefalopatía epiléptica catastrófica infantil?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fenobarbital o Ácido Valproico intravenoso a dosis de impregnación para abortar las salvas motoras.",
      },
      {
        id: "B",
        label: "B",
        text: "Corticotropina (Hormona Adrenocorticotropa o ACTH) intramuscular o Corticosteroides orales a altas dosis.",
      },
      {
        id: "C",
        label: "C",
        text: "Carbamazepina en jarabe para estabilizar los focos de hiperactividad temporal y detener los espasmos de flexión.",
      },
      {
        id: "D",
        label: "D",
        text: "Diazepam intravenoso inmediato y remisión a cirugía para callosotomía de urgencia.",
      },
    ],
    correctOptionId: "B",
    explanation: "La lactante presenta la devastadora tríada del Síndrome de West (Espasmos Infantiles): 1) Espasmos infantiles (en salvas, tipo \"navaja\" o \"abrazo de moro\", típicos al despertar/dormir); 2) Estancamiento o retroceso del neurodesarrollo; y 3) Patrón de EEG patognomónico de Hipsarritmia (un caos eléctrico total). A diferencia de las convulsiones pediátricas convencionales, los antiepilépticos clásicos fallan rotundamente y pueden agravar el cuadro. El tratamiento hormonal OBLIGATORIO de primera línea, que ha demostrado \"apagar\" el caos de la hipsarritmia y detener los espasmos, es la ACTH (Hormona Adrenocorticotropa) intramuscular o, en su defecto, los corticosteroides orales a dosis altas (Prednisona/Prednisolona). (Nota fina: Si el Síndrome de West es secundario a Esclerosis Tuberosa - manchas acrómicas, nódulos en cerebro -, el fármaco de primera línea cambia a Vigabatrina).",
    keyPoints: [
    "Lactante (4 a 8 meses) que hace episodios tipo \"susto/abrazo o flexión en navaja\" repetitivos al despertar.; Pérdida de los hitos del desarrollo (ya no sonríe, ya no se sienta).; Palabras mágicas en el EEG: Hipsarritmia.",
    "Síndrome de West (Espasmos infantiles). Tratamiento de primera línea: ACTH (Corticotropina) o Corticoides. Si le das anticonvulsivos normales, el niño perderá el intelecto irreversiblemente.",
    "Neurología Pediátrica / Encefalopatías Epilépticas."
],
  },
  {
    id: "ucc-conv-2026-08-23-18",
    university: "UCC",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA / URGENCIAS",
    topic: "Enfermedades Tropicales",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","enfermedades-tropicales","enfermedades","tropicales"],
    statement: "Un paciente masculino de 35 años es traído a urgencias en estado de estupor febril profundo y convulsiones recientes. El familiar informa que el paciente regresó hace 10 días de un viaje de trabajo al departamento del Chocó (zona endémica), donde no utilizó mosquiteros ni tomó quimioprofilaxis. Al ingreso: T 40.2°C, PA 85/50 mmHg (hipotensión), ictericia escleral marcada y palidez cutánea severa. Laboratorios de urgencia: Hemoglobina 6.5 g/dL, Plaquetas 40.000/mm³, Creatinina 2.8 mg/dL, y una Glucemia de 42 mg/dL. El extendido de sangre periférica (Gota Gruesa) confirma de inmediato la presencia de múltiples anillos finos y formas de \"audífonos\" intracelulares, con un recuento parasitario del 8% de glóbulos rojos infectados. Se diagnostica Malaria Severa (Paludismo Complicado). Ante la letalidad inminente por neuro-paludismo e isquemia multiorgánica, ¿cuál es el agente antimalárico INTRVENOSO DE PRIMERA LÍNEA OBLIGATORIO establecido por las pautas de la OMS para erradicar la infección y salvar la vida?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cloroquina oral en esquema de tres días más Primaquina para erradicar hipnozoítos hepáticos.",
      },
      {
        id: "B",
        label: "B",
        text: "Quinina intravenosa administrada en bolo rápido durante 15 minutos en la sala de reanimación.",
      },
      {
        id: "C",
        label: "C",
        text: "Artesunato intravenoso inmediato a dosis de 2.4 mg/kg, seguido de un curso completo de ACT (Terapia Combinada Basada en Artemisinina) al tolerar la vía oral.",
      },
      {
        id: "D",
        label: "D",
        text: "Mefloquina intravenosa aislada para esterilizar los glóbulos rojos parasitados de la circulación central.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con Malaria Severa o Complicada por Plasmodium falciparum (la especie más letal, deducida por la alta parasitemia >5%, ictericia, falla renal, hipoglucemia profunda y el neuro-paludismo/coma). El P. falciparum modifica la superficie de los glóbulos rojos haciéndolos \"pegajosos\" (rosetas o aglutinación), lo que tapona las microarterias del cerebro, riñón y pulmón, causando infartos isquémicos mortales. Las guías de la Organización Mundial de la Salud (OMS) abandonaron la Quinina IV por su alta toxicidad y menor eficacia, estableciendo como TRATAMIENTO DE ORO Y PRIMERA LÍNEA indiscutible el ARTESUNATO INTRAVENOSO. Es el antiparasitario más potente, que elimina y \"limpia\" la biomasa de parásitos en sangre a una velocidad abrumadora, reduciendo significativamente la mortalidad frente a la quinina. (Nota: en la malaria grave, JAMÁS se da tratamiento exclusivamente oral como primera opción).",
    keyPoints: [
    "Paciente que regresa de zona endémica (África, Amazonía, Chocó-Colombia) con fiebre alta y escalofríos.; Signos de Malaria Severa: Coma (Neuropaludismo), Falla renal, Ictericia franca, Dificultad respiratoria, Hipoglucemia o Parasitemia > 5%.",
    "Plasmodium falciparum. Emergencia infectológica. El fármaco intravenoso que \"barre\" el parásito de la sangre salvando la vida es el Artesunato IV.",
    "Enfermedades Tropicales / Malaria Grave."
],
  },
  {
    id: "ucc-conv-2026-08-23-19",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / URGENCIAS",
    topic: "Urgencias Metabólicas Endocrinas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-metab-licas-endocrinas","urgencias","metab","licas","endocrinas"],
    statement: "Un hombre de 82 años, institucionalizado por demencia vascular, es traído a urgencias por alteración extrema del sensorio (estupor) y signos de severa deshidratación (globos oculares hundidos, mucosa oral en \"lija\", llenado capilar prolongado). La enfermera del asilo relata que el abuelo presentaba poliuria franca hace unos días, pero desde ayer se encuentra somnoliento y ha dejado de ingerir cualquier líquido. Al ingreso, el paciente está taquicárdico (115 lpm) e hipotenso (80/50 mmHg). Laboratorios urgentes: Glucemia de 1.150 mg/dL, BUN 85 mg/dL, Creatinina 2.5 mg/dL, Sodio sérico de 149 mEq/L. Los gases venosos reportan: pH 7.34, HCO3 22 mEq/L (sin acidosis metabólica profunda). El análisis de orina detecta glucosuria masiva pero ausencia de cuerpos cetónicos. Una vez asegurada la vía aérea, ¿cuál es el PRIMER paso terapéutico OBLIGATORIO Y URGENTE en las siguientes 2 horas para evitar el choque hipovolémico terminal en este anciano, antes de considerar el descenso agresivo de la glucosa?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Infusión de Insulina Regular intravenosa a 0.1 U/kg/h inmediatamente para frenar la neoglucogénesis y limpiar el azúcar tóxico de la sangre.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar bolo empírico de Bicarbonato de Sodio y comenzar un goteo de Dextrosa al 5% para proteger al cerebro del choque osmolar inminente.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar fluidoterapia intravenosa agresiva y sostenida exclusivamente con Solución Salina Normal (0.9%) para reponer el volumen intravascular y perfundir el riñón.",
      },
      {
        id: "D",
        label: "D",
        text: "Pasar una sonda vesical, administrar Furosemida a dosis altas para lavar el azúcar mediante diuresis forzada y empezar la insulina subcutánea.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con un Estado Hiperosmolar Hiperglucémico (HHS o EHH), la complicación metabólica más letal de la Diabetes Mellitus Tipo 2, típica en ancianos frágiles que no pueden acceder libremente al agua. A diferencia de la Cetoacidosis Diabética (CAD), el paciente tipo 2 produce un \"chorrito\" residual de insulina endógena; esta insulina mínima basta para frenar la quema de grasas (lipólisis), por lo que no se producen cetonas ni acidosis letal. Sin embargo, la insulina no alcanza para meter la glucosa a las células. El azúcar se acumula en la sangre a niveles astronómicos (>600 a 1000 mg/dL). Esta sangre hecha \"almíbar\" arrastra osmóticamente el agua desde las células y el cuerpo orina litros incontrolables de agua (diuresis osmótica). El déficit de líquidos en un HHS es masivo y aterrador: ¡un paciente puede tener un déficit de agua libre de 8 a 12 LITROS al momento de llegar a urgencias! El paso número UNO, que salva la vida y precede a cualquier ampolla de insulina, es rellenar los tanques colapsados del abuelo con Solución Salina Normal (0.9%) a chorro (1 a 2 Litros en las primeras horas). Si le pones insulina antes que el agua, empeorarás la hipovolemia.",
    keyPoints: [
    "Anciano DM2 con alteración mental severa, letargia o coma.; Glucosa GIGANTE (> 600 - 1000) + Deshidratación extrema.; Diferencial clave: SIN acidosis metabólica severa y SIN cetonas en orina (No es CAD).",
    "Estado Hiperosmolar Hiperglucémico. Conducta estelar salva-vidas: Líquidos, líquidos, líquidos (Solución Salina 0.9%) PRIMERO. El déficit de volumen mata al paciente antes que el azúcar alto.",
    "Urgencias Metabólicas Endocrinas / EHH."
],
  },
  {
    id: "ucc-conv-2026-08-23-20",
    university: "UCC",
    examArea: "PEDIATRÍA - CARDIOLOGÍA / NEONATOLOGÍA",
    topic: "Urgencias Cardiológicas Pediátricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-cardiol-gicas-pedi-tricas","urgencias","cardiol","gicas","pedi","tricas"],
    statement: "Un neonato de 24 horas de vida, nacido a término sin factores de riesgo evidentes, es evaluado por un cuadro progresivo de cianosis intensa (coloración morada azulada en piel y mucosas). Pese a colocarle una cámara cefálica (Hood) con Oxígeno al 100%, la cianosis no mejora y la oximetría de pulso se mantiene estancada en 68% (Prueba de Hiperoxia negativa o fallida). Al examen físico, el niño no se ve angustiado respiratoriamente (sin retracciones importantes ni quejido) a pesar del color, y la auscultación revela un segundo ruido cardíaco único fuerte sin soplos audibles llamativos. La radiografía de tórax revela una vascularización pulmonar ligeramente aumentada o normal, con un pedículo vascular superior marcadamente estrecho y una silueta cardíaca en forma ovoide o \"huevo colgado de un hilo/cordón\" (egg-on-a-string). Ante la evidencia clínica y radiológica de la cardiopatía congénita cianógena más frecuente al nacimiento, ¿cuál es la medida farmacológica inmediata de soporte vital y la posterior intervención mecánica en hemodinamia que asegurarán la supervivencia del neonato hasta la cirugía correctiva definitiva?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar O2 hiperbárico a presión positiva alta y cierre urgente del defecto interauricular mediante parche.",
      },
      {
        id: "B",
        label: "B",
        text: "Infusión IV continua de Prostaglandina E1 (PGE1) para mantener el ductus abierto y la realización urgente de una Septostomía Atrial con globo de Rashkind.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Indometacina endovenosa o Ibuprofeno para acelerar el cierre del ductus arterioso, forzando la mezcla a nivel ventricular exclusivamente.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar un cerclaje de la arteria pulmonar (Pulmonary Artery Banding) inmediato y diferir los fármacos inotrópicos hasta estabilizar la función hepática.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta Transposición de las Grandes Arterias (TGA), la causa más común de cianosis grave en el recién nacido inmediato. El fallo embriológico de rotación del conotronco genera dos circuitos paralelos cerrados: el ventrículo derecho bombea la sangre azul oscura desoxigenada directo de vuelta al cuerpo por la Aorta que nació del lugar equivocado; el ventrículo izquierdo recibe sangre roja del pulmón y la bombea en círculos inútiles de vuelta al pulmón por una Arteria Pulmonar desplazada. El bebé sobrevive en las primeras horas solo porque el Ductus Arterioso y el Foramen Oval (comunicaciones fetales) siguen abiertos, permitiendo que la sangre roja y la azul se mezclen. La radiografía en \"huevo en un cordón\" es el signo rey de los boards para la TGA (el pedículo superior es angosto porque la aorta está por delante de la pulmonar tapándola en sombra). Cuando estas ventanas de escape se cierran en el 2do día, el bebé entra en isquemia extrema y la prueba del oxígeno falla porque el O2 nunca llega a la Aorta. El manejo de rescate OBLIGATORIO incluye: 1) Prostaglandina E1 intravenosa a chorro para reabrir el ductus arterioso salvavidas y lograr mezcla. 2) Llevar al neonato de urgencia a cateterismo para realizar una Septostomía Atrial con Globo de Rashkind: se pasa un globo desinflado a través del foramen oval, se infla en la aurícula izquierda y se jala bruscamente hacia la derecha, rompiendo o \"rasgando\" el tabique interauricular (creando una Comunicación Interauricular - CIA masiva y fija). Este boquete en las aurículas garantiza que las sangres se sigan mezclando a raudales, comprando un valiosísimo tiempo de vida (días) hasta que el cirujano cardiovascular corte y cambie las grandes arterias a su posición anatómica real (Cirugía de Switch Arterial de Jatene).",
    keyPoints: [
    "Neonato que debuta cianótico severo en sus primeras 24-48 horas de vida.; El oxígeno 100% NO LE SUBE LA SATURACIÓN (Prueba de Hiperoxia fallida = problema de circuito cardíaco, no pulmón).; Rx tórax con el \"Huevo en una cuerda\".",
    "Transposición de Grandes Arterias (TGA). Supervivencia: Mantener abierta la tubería fetal con Prostaglandinas (PGE1) y rajar el tabique interauricular de urgencia (Procedimiento de Rashkind).",
    "Urgencias Cardiológicas Pediátricas / Cardiopatías Congénitas Cianógenas."
],
  }
];
