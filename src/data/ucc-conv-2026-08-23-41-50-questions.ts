import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · Preguntas #41–#50.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_08_23_41_50_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-08-23-41",
    university: "UCC",
    examArea: "MEDICINA INTERNA - GASTROENTEROLOGÍA / HEPATOLOGÍA",
    topic: "Hepatología",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","hepatolog-a","hepatolog","a"],
    statement: "Una mujer de 22 años es llevada a urgencias por sus padres debido a ictericia progresiva de 5 días de evolución y alteraciones del comportamiento (hoy despertó agresiva y muy desorientada). No consume alcohol, medicamentos ni drogas ilícitas. Al examen físico: ictericia profunda, asterixis franca y hepatomegalia leve. Los laboratorios revelan una falla hepática aguda fulminante y una anemia severa: Hemoglobina 6.5 g/dL, Reticulocitos 12%, Bilirrubina Total 28 mg/dL (a predominio indirecto), AST 1.100 U/L, ALT 950 U/L. El dato paraclínico que deja perplejo al médico de urgencias es una Fosfatasa Alcalina de apenas 15 U/L (anormalmente baja). El test de Coombs directo es negativo. El índice Fosfatasa Alcalina/Bilirrubina es menor a 2. Ante este patrón bioquímico patognomónico que asocia hemólisis no autoinmune y necrosis hepática, ¿cuál es el diagnóstico definitivo y la única conducta salvavidas?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Falla hepática fulminante por Enfermedad de Wilson; requiere inclusión urgente en lista de trasplante hepático (Status 1) y plasmaféresis como puente.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de HELLP atípico; requiere interconsulta a ginecología para cesárea de emergencia y sulfato de magnesio.",
      },
      {
        id: "C",
        label: "C",
        text: "Hepatitis Autoinmune Tipo 1; requiere inicio inmediato de pulsos de Metilprednisolona a dosis de 1 g/día.",
      },
      {
        id: "D",
        label: "D",
        text: "Intoxicación oculta por Acetaminofén (Paracetamol); requiere infusión inmediata de N-acetilcisteína a dosis máximas de carga.",
      },
    ],
    correctOptionId: "A",
    explanation: "La paciente cursa con una Falla Hepática Fulminante por Enfermedad de Wilson. Aunque la enfermedad de Wilson (acumulación de cobre) suele ser crónica, en algunos jóvenes debuta de forma explosiva y letal. La fisiopatología de este debut es asombrosa: el hígado enfermo se necrosa de golpe, liberando al torrente sanguíneo cantidades masivas de cobre libre tóxico. Este cobre en la sangre destruye la membrana de los glóbulos rojos, causando una Anemia Hemolítica intravascular severa con Coombs negativo. El perfil de laboratorio es el \"santo grial\" de esta enfermedad: Bilirrubina por los cielos (>20 mg/dL por el fallo hepático más la hemólisis) contrastando con una Fosfatasa Alcalina en el piso (< 40 U/L). ¿Por qué la Fosfatasa Alcalina está baja? Porque la enzima fosfatasa alcalina necesita zinc para funcionar, y el exceso de cobre libre en la sangre desplaza al zinc, paralizando la enzima. Si el índice Fosfatasa Alcalina / Bilirrubina Total es < 4, el diagnóstico de Wilson fulminante tiene una especificidad cercana al 100%. A diferencia del Wilson crónico, donde se usan quelantes (Penicilamina), en la falla fulminante la mortalidad es casi del 100% sin un hígado nuevo. El tratamiento es el Trasplante Hepático de urgencia absoluta; la plasmaféresis se usa solo para \"lavar\" el cobre de la sangre y que la paciente no muera mientras espera el órgano.",
    keyPoints: [
      "Paciente joven con Falla Hepática Aguda (Encefalopatía + Ictericia).; Anemia Hemolítica (Coombs negativo) concomitante.; Perfil de oro: Bilirrubina MUY ALTA y Fosfatasa Alcalina MUY BAJA.",
      "Enfermedad de Wilson fulminante. El exceso de cobre lisa los eritrocitos y apaga la fosfatasa alcalina. Conducta obligatoria: Trasplante Hepático Urgente. (Los quelantes orales son muy lentos para esta crisis).",
      "Hepatología / Enfermedad de Wilson.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-42",
    university: "UCC",
    examArea: "PEDIATRÍA - INFECTOLOGÍA / URGENCIAS",
    topic: "Infectología Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","infectolog-a-pedi-trica","infectolog","a","pedi","trica"],
    statement: "Un niño de 6 años es traído a urgencias a finales de la primavera tras presentar un cuadro de 4 días de fiebre alta persistente (39.8°C), cefalea frontal intensa, dolor muscular profundo (mialgias) y postración. Los padres relatan que hace una semana estuvieron de campamento en una zona boscosa. Al evaluar la piel del niño, el pediatra documenta un exantema maculopapular que inició en las muñecas, los tobillos, las palmas de las manos y las plantas de los pies, y que en las últimas 24 horas ha migrado de forma centrípeta hacia el tronco, tornándose de color rojo oscuro, petequial y no blanqueable a la presión. Las plaquetas se encuentran en 65,000/mm³ y hay leve elevación de transaminasas. Ante la alta sospecha clínica de Fiebre Maculosa de las Montañas Rocosas (FMMR) debido al patrón del rash y la exposición a garrapatas, ¿cuál es el antibiótico de PRIMERA LÍNEA OBLIGATORIO que debe administrarse de inmediato, a pesar de la edad del paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Amoxicilina a dosis altas (90 mg/kg/día) para cubrir la infección espiroquetal temprana sin riesgo dental.",
      },
      {
        id: "B",
        label: "B",
        text: "Doxiciclina por vía intravenosa u oral de forma inmediata, siendo la única indicación salvavidas que supera la contraindicación por edad.",
      },
      {
        id: "C",
        label: "C",
        text: "Ceftriaxona intravenosa, ya que las tetraciclinas causan hipoplasia irreversible del esmalte dental en niños menores de 8 años.",
      },
      {
        id: "D",
        label: "D",
        text: "Cloranfenicol intravenoso para cubrir el espectro intracelular preservando el cartílago de crecimiento infantil.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Fiebre Maculosa de las Montañas Rocosas (FMMR), causada por la bacteria intracelular obligada Rickettsia rickettsii, transmitida por la picadura de garrapatas. La clínica es un clásico de los boards: fiebre súbita y un rash que, de manera muy inusual, empieza en palmas, plantas, muñecas y tobillos, y luego avanza hacia el centro del cuerpo (centrípeto), volviéndose petequial. Esta enfermedad tiene una mortalidad altísima por vasculitis difusa y choque si no se trata a tiempo. El \"truco\" de esta pregunta es puramente farmacológico y legal: La regla general en pediatría dice que la Doxiciclina (una tetraciclina) está CONTRAINDICADA en niños menores de 8 años porque se une al calcio y tiñe los dientes de amarillo/marrón de forma permanente e inhibe el crecimiento óseo. ¡SIN EMBARGO!, las guías de los CDC, la AAP y la OMS establecen una EXCEPCIÓN ABSOLUTA a esta regla: Para cualquier sospecha de FMMR (o infecciones graves por Rickettsias), la Doxiciclina es el fármaco de primera línea innegociable SIN IMPORTAR LA EDAD DEL NIÑO. Es el único antibiótico que penetra eficazmente y evita la muerte. El beneficio de salvar la vida supera inmensamente el riesgo cosmético dental (que de hecho, en cursos cortos de 7 días, se ha demostrado que rara vez mancha los dientes).",
    keyPoints: [
      "Niño con antecedente de acampar o jugar en bosques (garrapatas).; Rash que empieza en PALMAS y PLANTAS, luego va al tronco + Fiebre y cefalea.",
      "Fiebre Maculosa de las Montañas Rocosas (Rickettsia rickettsii). Excepción Pediátrica de Oro: Doxiciclina INMEDIATA para todas las edades. Jamás uses otros antibióticos por miedo a manchar los dientes.",
      "Infectología Pediátrica / Zoonosis.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-43",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEFROLOGÍA / INMUNOLOGÍA",
    topic: "Vasculitis de Pequeños Vasos",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","vasculitis-de-peque-os-vasos","vasculitis","de","peque","os","vasos"],
    statement: "Un hombre de 52 años, diagnosticado con Hepatitis C crónica hace más de una década (sin tratamiento curativo actual), acude a consulta por fatiga profunda y dolor articular simétrico severo en ambas manos (artralgias). Llama la atención a la inspección cutánea la presencia de múltiples lesiones rojizo-violáceas no blanqueables y palpables (púrpura palpable) agrupadas en las extremidades inferiores. El paciente relata que siente adormecimiento doloroso en los pies (neuropatía sensitiva). Laboratorios: Creatinina elevada en 2.2 mg/dL. El parcial de orina muestra hematuria dismórfica y proteinuria en rango no nefrótico. Perfil inmunológico de urgencia: Complemento C4 extremadamente bajo (indetectable), con niveles de C3 dentro de límites normales, y Factor Reumatoide fuertemente POSITIVO. ¿Cuál es el mecanismo fisiopatológico subyacente que explica el daño vasculítico y renal simultáneo en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Vasculitis por depósito de IgA en los pequeños vasos de la piel y el mesangio renal, desencadenada por el virus.",
      },
      {
        id: "B",
        label: "B",
        text: "Producción de Inmunoglobulina M (IgM) con actividad de Factor Reumatoide que se une a la IgG, precipitando con el frío y formando complejos inmunes mixtos en el endotelio.",
      },
      {
        id: "C",
        label: "C",
        text: "Mimetismo molecular del virus de la Hepatitis C que genera anticuerpos directos contra la membrana basal glomerular (Anti-MBG).",
      },
      {
        id: "D",
        label: "D",
        text: "Activación de la vía alterna del complemento que destruye directamente las células endoteliales sin mediación de inmunoglobulinas.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Crioglobulinemia Mixta (Tipo II o III), una vasculitis de vasos pequeños impulsada abrumadoramente (hasta en un 80-90% de los casos) por la infección crónica del Virus de la Hepatitis C (VHC). La fisiopatología es una elegante cadena de desastres inmunológicos: la infección crónica vuelve locos a los linfocitos B, los cuales producen anticuerpos IgM. Estos anticuerpos IgM tienen actividad de Factor Reumatoide (FR), lo que significa que atacan a la propia IgG del paciente. Estos complejos inmunes (IgM-IgG) tienen la extraña propiedad de precipitar (coagularse) cuando la temperatura de la sangre baja (por eso se llaman Crio-globulinas) y se disuelven al calentarse. Al precipitar en la piel fría de las piernas, causan la púrpura palpable; al atascarse en los glomérulos renales, causan la falla renal (glomerulonefritis membranoproliferativa). El sello bioquímico irrefutable de la crioglobulinemia mixta en los exámenes es el consumo masivo del complemento por la vía clásica, lo que destruye el C4, dejando típicamente el C4 MUY BAJO o en cero, con un C3 normal, acompañado de un Factor Reumatoide altísimo en un paciente que no tiene artritis reumatoide.",
    keyPoints: [
      "Paciente con antecedente de Hepatitis C crónica.; Tríada de Meltzer (o similar): Púrpura palpable + Artralgias + Debilidad (Añadiendo Falla Renal o Neuropatía).; Laboratorio infalible: C4 muy bajo + C3 normal + Factor Reumatoide Positivo.",
      "Vasculitis por Crioglobulinemia Mixta. Las inmunoglobulinas precipitan con el frío. Tratamiento: Inmunosupresores (Rituximab) para la urgencia vascular y tratamiento antiviral curativo contra el VHC para erradicar la causa raíz.",
      "Vasculitis de Pequeños Vasos / Complicaciones Hepatitis C.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-44",
    university: "UCC",
    examArea: "MEDICINA INTERNA - TOXICOLOGÍA / PSIQUIATRÍA",
    topic: "Toxicología de Urgencias",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","toxicolog-a-de-urgencias","toxicolog","a","de","urgencias"],
    statement: "Una mujer de 25 años es traída en ambulancia tras ser encontrada convulsionando en su apartamento. A un lado de la cama se halló un frasco vacío de Amitriptilina (un antidepresivo). En la sala de urgencias, la paciente se encuentra en coma (Glasgow 6/15). Al examen físico: la piel está marcadamente seca y caliente, las pupilas están ampliamente dilatadas y paralíticas (midriasis), presenta retención urinaria globo vesical) y ruidos intestinales ausentes. Sus signos vitales muestran PA 85/50 mmHg y FC 145 lpm. El electrocardiograma (ECG) inicial revela una taquicardia sinusal con un ensanchamiento profundo del complejo QRS a 170 milisegundos y una onda R prominente en la derivación aVR. Ante el riesgo inminente de arritmias ventriculares letales causadas por el bloqueo de los canales rápidos de sodio miocárdicos, ¿cuál es la intervención FARMACOLÓGICA INTRAVENOSA DE RESCATE OBLIGATORIA para esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Fenitoína intravenosa para controlar las convulsiones y estabilizar los canales de sodio.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Sulfato de Magnesio intravenoso para acortar el intervalo QT y prevenir torsades de pointes.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar bolos repetidos de Bicarbonato de Sodio intravenoso hasta lograr el estrechamiento del complejo QRS.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Fisostigmina en infusión continua para revertir el toxíndrome anticolinérgico profundo a nivel cerebral y periférico.",
      },
    ],
    correctOptionId: "C",
    explanation: "La paciente cursa con una severa Intoxicación por Antidepresivos Tricíclicos (ATC, como la Amitriptilina). Esta sobredosis se caracteriza por tres graves frentes de ataque: 1) Efecto anticolinérgico central y periférico (piel seca, roja, pupila dilatada, coma, retención urinaria). 2) Convulsiones (por bloqueo GABA y receptores de histamina). 3) Toxicidad cardiovascular letal: los ATC son potentes bloqueadores de los canales rápidos de Sodio en el corazón (actúan como un antiarrítmico de clase Ia tóxico). Esto enlentece la conducción ventricular, manifestándose en el ECG como un QRS muy ancho (> 100 ms) y una onda R terminal grande en aVR. Un QRS > 100 ms predice convulsiones, y un QRS > 160 ms predice arritmias ventriculares inminentes (Taquicardia Ventricular / Paro). La regla absolutista en toxicología dicta que la terapia salvavidas inmediata es la infusión de Bicarbonato de Sodio IV en bolos. El Bicarbonato actúa por dos vías simultáneas: aporta una carga brutal de Sodio que compite y \"empuja\" al veneno fuera de los canales bloqueados, y alcaliniza la sangre (pH meta de 7.45 - 7.55) lo que disminuye la fracción activa y tóxica del antidepresivo.",
    keyPoints: [
      "Sobredosis de fármacos psiquiátricos en joven (Amitriptilina, Imipramina).; Toxíndrome Anticolinérgico: \"Loca como un sombrerero, ciega como un murciélago, roja como un betabel, seca como un hueso, caliente como una liebre\".; ECG Pivote: QRS ANCHO.",
      "Intoxicación por Antidepresivos Tricíclicos. Antídoto obligado para el corazón (si el QRS es ancho o hay hipotensión): Bicarbonato de Sodio intravenoso. (Si tiene convulsiones, usar Benzodiacepinas, JAMÁS Fenitoína).",
      "Toxicología de Urgencias / Antidepresivos Tricíclicos.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-45",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / URGENCIAS",
    topic: "Valvulopatías",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","valvulopat-as","valvulopat","as"],
    statement: "Hombre de 76 años acude a urgencias por presentar episodios repetidos de mareo severo y síncope de esfuerzo al intentar subir escaleras en la última semana. Refiere que últimamente también siente opresión en el pecho al caminar rápido (angina). A la evaluación en triaje, la enfermera reporta un dolor torácico de intensidad 6/10 de características inespecíficas. Al examen físico, los signos vitales son estables (PA 130/85 mmHg, FC 70 lpm). A la palpación carotídea, los pulsos se perciben disminuidos en amplitud y con una fase de ascenso retrasada (pulsus parvus et tardus). La auscultación cardíaca revela un soplo sistólico rudo, eyectivo, de máxima intensidad en el foco aórtico, con acmé tardío (creciendo-decreciendo) que irradia claramente a ambas carótidas, con abolición del segundo ruido cardíaco. Con la intención de aliviar el dolor torácico en la sala de observación, el interno de turno le administra una tableta de Nitroglicerina sublingual de 0.4 mg. Cinco minutos después, el paciente colapsa repentinamente, cayendo en un choque profundo con presión arterial de 50/30 mmHg. ¿Cuál es el mecanismo fisiopatológico del colapso yatrogénico inducido por la medicación?",
    options: [
      {
        id: "A",
        label: "A",
        text: "La nitroglicerina indujo un espasmo coronario paradójico severo, precipitando un infarto transmural y disfunción contráctil irreversible.",
      },
      {
        id: "B",
        label: "B",
        text: "La nitroglicerina produjo una venodilatación masiva, disminuyendo drásticamente la precarga en un ventrículo que dependía de altas presiones de llenado para empujar la sangre a través de una válvula aórtica críticamente estrecha.",
      },
      {
        id: "C",
        label: "C",
        text: "La absorción sublingual desencadenó un bloqueo súbito del nodo auriculoventricular por hipersensibilidad a los nitratos.",
      },
      {
        id: "D",
        label: "D",
        text: "La vasodilatación arterial periférica excesiva robó el flujo sanguíneo de la barrera hematoencefálica causando síncope neurológico directo.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Estenosis Aórtica Severa. La clásica tríada clínica de síntomas de mal pronóstico es: Angina, Síncope (ambos desencadenados por el esfuerzo) y Falla Cardíaca (Disnea). El examen físico describe impecablemente el soplo sistólico que irradia al cuello y el pulso carotídeo débil y tardío (parvus et tardus), que indica que la sangre apenas logra salir por un orificio valvular casi calcificado por completo. Fisiopatológicamente, en la estenosis aórtica severa, el ventrículo izquierdo se vuelve hipertrófico y extremadamente rígido. Para lograr empujar la sangre contra una válvula estrecha como el agujero de una aguja, el ventrículo depende absolutamente de una PRECARGA altísima (necesita estar repleto de volumen de sangre venosa para generar la presión suficiente para abrir la válvula a la fuerza). Los nitratos (Nitroglicerina) son venodilatadores potentes: relajan las venas y estancan la sangre en las piernas. Al administrar la pastilla, el retorno venoso al corazón (precarga) cae drásticamente. El ventrículo rígido se quedó \"vacío\" de repente y no logró generar la fuerza para empujar sangre a través de la estenosis aórtica. El Gasto Cardíaco cayó a cero instantáneamente, causando el colapso y el choque profundo yatrogénico (Tratamiento de rescate: levantar las piernas y pasar bolos de líquido intravenoso rápido).",
    keyPoints: [
      "Anciano con Síncope de esfuerzo + Angina.; Auscultación: Soplo sistólico en foco aórtico irradiado a cuello (carótidas) + Pulso parvus et tardus.",
      "Estenosis Aórtica Severa. REGLA FARMACOLÓGICA DE ORO: En estos pacientes están contraindicados los medicamentos que bajan abruptamente la PRECARGA (Nitratos, Diuréticos excesivos) y la POSTCARGA (IECAs/Vasodilatadores fuertes), porque precipitan colapso cardiovascular. Dependen del volumen para vivir.",
      "Valvulopatías / Cardiología.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-46",
    university: "UCC",
    examArea: "PEDIATRÍA - NEUMOLOGÍA / OTORRINOLARINGOLOGÍA",
    topic: "Infecciones Profundas del Cuello",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","infecciones-profundas-del-cuello","infecciones","profundas","del","cuello"],
    statement: "Un niño de 4 años, previamente sano y con vacunas de rutina incompletas para su edad, es llevado a la urgencia en la tarde. Los padres relatan que amaneció con fiebre alta (39.2°C), letargia, odinofagia progresiva y un profundo rechazo a los alimentos sólidos y líquidos. Además, refieren que en las últimas horas el cuello del niño ha adoptado una postura inusual y \"no permite que se lo movamos hacia atrás\". Al examen físico: el paciente luce tóxico, babea moderadamente (sialorrea leve a moderada), y su voz se percibe apagada y sin resonancia (voz \"de papa caliente\"). Al solicitar al paciente que extienda el cuello, este llora amargamente por dolor intenso y se opone al movimiento (torticólis / rigidez de cuello extensión). Se evidencia un bulto sutil en la pared posterior de la orofaringe unilateralmente. No adopta posición de trípode estricta y puede acostarse en la camilla con dolor. Ante el diagnóstico presuntivo, ¿cuál es el abordaje diagnóstico de imagen OBLIGATORIO para delimitar esta infección profunda de los espacios fasciales del cuello?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Radiografía lateral del cuello en inspiración para documentar el signo del \"pulgar\" epiglotítico clásico antes de intubar.",
      },
      {
        id: "B",
        label: "B",
        text: "Tomografía Computarizada (TC) de cuello con contraste endovenoso para localizar la extensión del absceso y planear drenaje.",
      },
      {
        id: "C",
        label: "C",
        text: "Ecografía cervical anterior exclusiva para visualizar ganglios linfáticos hipertrofiados descartando linfoma.",
      },
      {
        id: "D",
        label: "D",
        text: "Fibrobroncoscopia flexible a pie de cama para tomar muestras purulentas directas de la laringe subglótica.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Absceso Retrofaríngeo, una infección profunda y letal de los espacios fasciales del cuello típica en niños entre 2 y 5 años de edad. Es una complicación supurativa bacteriana (usualmente por flora mixta como Streptococcus pyogenes y anaerobios) secundaria a una infección de las vías respiratorias superiores (como amigdalitis), en la cual los ganglios linfáticos retrofaríngeos supuran y forman una cavidad purulenta por detrás de la faringe y el esófago, empujando la pared hacia adelante. La clínica de oro que lo distingue de otras infecciones agudas como la epiglotitis es el dolor cervical extremo: el paciente presenta torticólis marcada y rigidez o negativa absoluta a EXTENDER el cuello (porque extender el cuello tensa la fascia prevertebral aplastando el absceso, causando un dolor atroz), junto a la voz de \"papa caliente\". A diferencia de la epiglotitis donde la TAC está contraindicada por inestabilidad aguda total, en el absceso retrofaríngeo con vía aérea semi-estable, el abordaje Gold Standard es la Tomografía Computarizada (TC) de cuello con contraste. La TC delimita con precisión nanométrica el tamaño de la cápsula del absceso de pus, verifica si se ha diseminado hacia el espacio \"peligroso\" (peligro de fascitis necrotizante torácica o mediastinitis) y guía el bisturí del cirujano otorrinolaringólogo para el drenaje transoral o transcervical, complementado con altas dosis de Ampicilina/Sulbactam o Clindamicina IV.",
    keyPoints: [
      "Niño preescolar (2 a 5 años) con fiebre alta y \"voz de papa caliente\" o baboseo.; Dato Pivote: Rigidez de cuello, tortícolis, o el niño SE NIEGA A EXTENDER EL CUELLO (porque estira el absceso). Abombamiento faríngeo posterior.",
      "Absceso Retrofaríngeo. Manejo inicial de ORO: TAC de cuello con contraste.\n(Diferencia: El paciente con epiglotitis adopta la posición contraria, de trípode, con el cuello voluntariamente extendido hacia adelante para abrir la vía aérea, y nunca debe ser metido a un escáner).",
      "Infecciones Profundas del Cuello / Otorrinolaringología Pediátrica.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-47",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEFROLOGÍA / INMUNOLOGÍA",
    topic: "Lesión Renal Aguda Pediátrica y de Adultos",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","lesi-n-renal-aguda-pedi-trica-y-de-adultos","lesi","n","renal","aguda","pedi","trica","y","de","adultos"],
    statement: "Una mujer de 45 años consulta por fiebre de 38°C, un brote cutáneo maculopapular eritematoso difuso en tronco y una marcada disminución del volumen urinario (oliguria) durante los últimos tres días. Al interrogatorio detallado, menciona haber presentado hace dos semanas un cuadro de dolor abdominal tipo \"ardor\" (pirosis severa), para el cual el farmacéutico de su barrio le recetó Omeprazol 40 mg cada 12 horas y dosis altas de Ibuprofeno por unos dolores articulares de rodilla. Al ingreso: Creatinina sérica 3.8 mg/dL y BUN 45 mg/dL. El parcial de orina reporta piuria leve, hematuria microscópica y el hallazgo patognomónico en el frotis urinario con tinción de Hansel o Wright de presencia de Eosinófilos (Eosinofiluria). Una ecografía renal es normal, descartando obstrucción. ¿Cuál es la entidad fisiopatológica inducida por fármacos y la conducta terapéutica de primera línea e innegociable que revertirá rápidamente este daño renal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Glomerulonefritis rápidamente progresiva inducida por AINEs; el tratamiento exige pulsos de metilprednisolona y biopsia urgente de riñón.",
      },
      {
        id: "B",
        label: "B",
        text: "Necrosis Tubular Aguda (NTA) isquémica tóxica; requiere hidratación masiva con suero salino al 0.9% y suspender los antihipertensivos.",
      },
      {
        id: "C",
        label: "C",
        text: "Nefritis Intersticial Aguda (NIA) inmunoalérgica; el paso mandatorio y definitivo es identificar y suspender absolutamente los medicamentos ofensores (Omeprazol/Ibuprofeno).",
      },
      {
        id: "D",
        label: "D",
        text: "Nefropatía por cambios mínimos secundaria a hipersensibilidad cruzada; el manejo de elección es iniciar inhibidores de calcineurina como tacrolimus.",
      },
    ],
    correctOptionId: "C",
    explanation: "La paciente cursa con Nefritis Intersticial Aguda (NIA), una de las causas reversibles pero más \"invisibles\" de la falla renal aguda intrahospitalaria o ambulatoria. Es una clásica reacción de hipersensibilidad retardada tipo IV (celular) donde los linfocitos T y los eosinófilos atacan masivamente el intersticio que rodea los túbulos renales, inducidos típicamente por medicamentos. El clásico cuadro (\"Tríada de la NIA\", presente en el 10% de los pacientes pero altamente evaluada en los exámenes) es: Fiebre de bajo grado + Exantema maculopapular (rash alérgico) + Falla renal aguda con Eosinofiluria en la orina. Tradicionalmente se asociaba a las Penicilinas y Cefalosporinas, pero en la epidemiología moderna, los principales culpables silenciosos en adultos son los AINEs (Ibuprofeno) y los Inhibidores de Bomba de Protones - IBP (Omeprazol/Pantoprazol). El paso terapéutico primario, curativo e indispensable que detiene y revierte la inflamación túbulo-intersticial en más del 80% de los casos es la identificación y SUSPENSIÓN ABSOLUTA inmediata de todos los fármacos nefro-alergénicos sospechosos. Si tras la suspensión y reanimación hídrica no hay mejoría en 3 a 5 días, o el deterioro es dramático, el segundo paso es el uso de Corticosteroides sistémicos orales (Prednisona).",
    keyPoints: [
      "Paciente tomando fármacos comunes recientes (AINEs, Omeprazol, Penicilinas, Diuréticos).; Clínica súbita de Fiebre + Erupción cutánea alérgica.; Laboratorio: Falla renal aguda + Eosinófilos en orina (Eosinofiluria).",
      "Nefritis Intersticial Aguda (NIA). Fisiopatología: Hipersensibilidad en el intersticio renal. Tratamiento: Quitar las drogas ofensoras INMEDIATAMENTE. (Corticoides de rescate si no mejora o biopsia si hay duda).",
      "Lesión Renal Aguda Pediátrica y de Adultos / Nefrología.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-48",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / GASTROENTEROLOGÍA",
    topic: "Endocrinología Genética",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","endocrinolog-a-gen-tica","endocrinolog","a","gen","tica"],
    statement: "Un hombre de 35 años, sin antecedentes psiquiátricos, acude a consulta quejándose de dolor abdominal severo tipo ardor en epigastrio (como una \"quemadura continua\") asociado a diarrea crónica acuosa masiva de varios meses de evolución, que no cede con el ayuno. Una endoscopia de vías digestivas altas reporta un estómago repleto de pliegues gástricos hipertrofiados, con presencia de múltiples úlceras pépticas profundas (más de cinco) en el duodeno, que de forma atípica se extienden hasta la segunda y tercera porción del yeyuno proximal. Se inician dosis muy altas de inhibidores de la bomba de protones, pero el cuadro ulcero-diarreico es refractario. Además, revisando sus paraclínicos sistémicos de rutina, se reporta una hipercalcemia de 11.5 mg/dL con una Hormona Paratiroidea (PTH) intacta de 150 pg/mL (elevada) y antecedentes de nefrolitiasis a repetición (cálculos renales de oxalato cálcico). Su padre sufrió de tumores en el cerebro \"que le afectaron la vista\". ¿Cuál es el diagnóstico sindrómico genético subyacente y cuál es la tercera glándula que debe ser evaluada obligatoriamente en el tamizaje inicial?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome de Neoplasia Endocrina Múltiple tipo 2A (MEN 2A); requiere despistaje urgente de Feocromocitoma en glándulas suprarrenales.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Neoplasia Endocrina Múltiple tipo 1 (MEN 1); requiere despistaje urgente de Adenomas de Hipófisis Anterior (ej. Prolactinoma).",
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome de von Hippel-Lindau (VHL); se debe evaluar la médula suprarrenal y los ojos buscando hemangioblastomas retinianos.",
      },
      {
        id: "D",
        label: "D",
        text: "Carcinoma Medular de Tiroides esporádico con metástasis gástricas, requiere ecografía del cuello obligatoria.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta el Síndrome de Neoplasia Endocrina Múltiple Tipo 1 (MEN 1 o Síndrome de Wermer), causado por una mutación en el gen supresor de tumores MEN1 (menin). El MEN 1 se define por la regla de oro nemotécnica de las \"3 P\" (tumores en órganos que empiezan con P en inglés/latín): Pituitaria (Hipófisis), Paratiroides y Páncreas (tumores neuroendocrinos pancreáticos). En esta brillante viñeta, el paciente tiene un cuadro florido de las primeras dos \"P\":\n\nPáncreas/Duodeno: Las múltiples úlceras refractarias y en ubicaciones atípicas (yeyuno) con diarrea masiva definen el Síndrome de Zollinger-Ellison (ZES), causado por un tumor neuroendocrino (Gastrinoma) secretor de Gastrina (que baña al intestino en un ácido mortal).\n\nParatiroides: La hipercalcemia y los cálculos renales con PTH altísima definen el Hiperparatiroidismo Primario hiperplásico (usualmente la primera manifestación en aparecer en el MEN1).\n\nEl tumor del padre en el cerebro que dañó su vista fue seguramente un Macroadenoma Hipofisiario (comprimiendo el quiasma óptico).\nPara completar el diagnóstico sistémico y profilaxis en este paciente, la tercera \"P\" faltante a tamizar de urgencia es la glándula Pituitaria/Hipófisis anterior, buscando frecuentemente un Prolactinoma (midiendo niveles de Prolactina y resonancia selar).",
    keyPoints: [
      "Paciente joven/adulto con Úlceras múltiples y extrañas o diarrea brutal (Gastrinoma - ZES).; Y además le encuentran Calcio alto y piedras en riñón (Hiperparatiroidismo).",
      "Síndrome MEN 1 (Mutación del gen Menin). Las 3 P: Paratiroides (100%), Páncreas (ZES/Insulinomas), Pituitaria (Prolactinomas). (El feocromocitoma no pertenece a este síndrome, pertenece al MEN 2).",
      "Endocrinología Genética / Síndromes MEN.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-49",
    university: "UCC",
    examArea: "PEDIATRÍA - GASTROENTEROLOGÍA / NEONATOLOGÍA",
    topic: "Neonatología",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","neonatolog-a","neonatolog","a"],
    statement: "Un recién nacido a término es evaluado a las tres semanas de vida por sus padres en consulta de puericultura. Los padres, preocupados, informan que el niño es \"muy amarillo\", aunque parece dormir bien, se alimenta con lactancia materna exclusiva con apetito voraz y gana peso de forma maravillosa (está en el percentil 85 para su peso). El color amarillento de su piel se hizo evidente en la segunda semana de vida y no ha desaparecido. Al examen físico: paciente vigoroso, sonriente, abdomen blando sin masas, y NO se palpa hepatomegalia (hígado normal). Un detalle crítico del interrogatorio revela que las deposiciones del bebé son doradas/amarillo mostaza y la orina es clara y normal. Los laboratorios séricos muestran Bilirrubina Total de 14 mg/dL con una Bilirrubina Directa de 0.8 mg/dL (francamente normal, predominio indirecto aplastante) y hemograma normal sin anemia. ¿Cuál es el diagnóstico MÁS probable, la fisiopatología subyacente y la conducta pediátrica recomendada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Atresia de Vías Biliares extrahepática incipiente; la conducta es remitir para biopsia hepática y procedimiento de Kasai.",
      },
      {
        id: "B",
        label: "B",
        text: "Ictericia por Leche Materna (Breast Milk Jaundice); el factor fisiopatológico involucra beta-glucuronidasas en la leche que reabsorben la bilirrubina, la conducta es continuar la lactancia materna de forma exclusiva y tranquilizar a los padres.",
      },
      {
        id: "C",
        label: "C",
        text: "Ictericia por Falta de Lactancia (Breastfeeding Jaundice); la poca ingesta calórica retrasa el meconio, la conducta es iniciar fórmulas suplementarias artificiales vigorosas cada 2 horas.",
      },
      {
        id: "D",
        label: "D",
        text: "Síndrome de Crigler-Najjar tipo I; ausencia total de enzima UGT1A1, exige suspender alimentación enteral e iniciar fototerapia permanente.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Ictericia por Leche Materna (Breast Milk Jaundice), un diagnóstico clínico de exclusión absolutamente benigno y tardío. La clave está en el niño sano y feliz: la bilirrubina está elevada, pero es a expensas de la Bilirrubina INDIRECTA (no conjugada), y el niño evacúa heces doradas y orina clara, con buen peso. Fisiopatológicamente, la leche materna contiene de forma natural enzimas (como beta-glucuronidasas y pregnandiol) que rompen la conjugación de la bilirrubina ya excretada en el intestino del bebé, obligándolo a reabsorberla y mandarla de vuelta a la sangre (aumenta la circulación enterohepática). Típicamente debuta en la segunda o tercera semana de vida y puede durar hasta dos o tres meses. La pauta de oro de las sociedades pediátricas modernas exige que el tratamiento de elección sea Tranquilizar a los padres (Reassurance) y mantener la lactancia materna exclusiva a demanda. JAMÁS se debe interrumpir la lactancia, a menos que la bilirrubina indirecta ascienda a niveles catastróficos de riesgo neurológico (ej. > 20-25 mg/dL), donde se indicaría fototerapia sin suspender la lactancia si es posible.",
    keyPoints: [
      "Neonato > 2 semanas (tardío). GANA BUEN PESO (gordo y feliz).; Ictericia Indirecta alta + Deposiciones NORMALES (Mostaza).",
      "Ictericia por Leche Materna (Breast Milk Jaundice). Causa: Enzimas en la leche aumentan reabsorción intestinal. NO SUSPENDER LA LECHE, continuar lactancia exclusiva, pronóstico excelente.\n(Contraste: La ictericia por falta de leche/Breastfeeding Jaundice ocurre en la 1ra semana, el niño pierde peso groseramente, está deshidratado y hace pocas heces).",
      "Neonatología / Ictericias Benignas.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-50",
    university: "UCC",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA / CARDIOLOGÍA",
    topic: "Zoonosis Infecciosas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","zoonosis-infecciosas","zoonosis","infecciosas"],
    statement: "Un joven de 24 años, excursionista y guardabosques de un parque nacional boscoso en el noreste de Estados Unidos, es transferido a urgencias tras un episodio de síncope abrupto. Relata que ha estado sintiéndose extremadamente fatigado y con dolores musculares difusos desde hace dos semanas. No ha tenido dolores de pecho. Al interrogarlo sobre antecedentes dermatológicos, el joven recuerda que hace un mes notó una gran lesión roja circular y plana en el muslo, con un centro más claro en forma de \"diana\" o \"tiro al blanco\" (Eritema migrans) que desapareció por sí sola en unos días. Al ingreso a urgencias: PA 90/60 mmHg, pulso palpado irregularmente lento. Se solicita un ECG de 12 derivaciones STAT que reporta un Bloqueo Auriculoventricular Completo (de tercer grado) con un ritmo de escape ventricular a 35 lpm. Tras la colocación de un marcapasos transvenoso temporal para estabilizar la perfusión cerebral inminente, ¿cuál es el agente etiológico responsable y el tratamiento antimicrobiano intravenoso ESPECÍFICO de primera línea exigido para esta manifestación secundaria diseminada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Rickettsia rickettsii; requiere tratamiento endovenoso inmediato de por vida con Doxiciclina.",
      },
      {
        id: "B",
        label: "B",
        text: "Trypanosoma cruzi; el tratamiento exige administración prolongada de Benznidazol en la fase aguda del mega-corazón.",
      },
      {
        id: "C",
        label: "C",
        text: "Borrelia burgdorferi; requiere infusión intravenosa de Ceftriaxona o Penicilina G de alta penetración a nivel central durante 14 a 21 días.",
      },
      {
        id: "D",
        label: "D",
        text: "Virus del Zika u otros flavivirus arbovirales; manejo de soporte hemodinámico y administración de esteroides orales a altas dosis.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con Carditis de Lyme, una de las manifestaciones más letales y clásicas de la fase de diseminación temprana de la Enfermedad de Lyme (transmitida por la picadura de la garrapata Ixodes scapularis que esconde la espiroqueta Borrelia burgdorferi). La historia clínica está servida en bandeja de oro: el rash en forma de \"diana\" (Eritema Migrans) es la fase primaria, presente semanas antes del colapso del órgano interno. La bacteria entra a la circulación, llega al corazón, e invade masivamente el tejido del nodo auriculoventricular. Esta inflamación aguda bloquea eléctricamente los cables de conducción, produciendo bloqueos cardíacos de rápida progresión (frecuentemente culminando en Bloqueo AV Completo o de 3er grado e induciendo síncope en jóvenes sin aterosclerosis). Mientras que la enfermedad de Lyme temprana de piel sola se cura fácil con Doxiciclina oral, la afectación cardíaca o neurológica grave (Carditis severa o Meningitis) exige hospitalización y tratamiento con antibióticos intravenosos de alta potencia para salvar los nervios y las fibras cardíacas: la Ceftriaxona Intravenosa o Penicilina G en dosis plenas por 14 a 21 días es el régimen profiláctico y curativo innegociable mundial. Con el tratamiento adecuado, el nodo AV se desinflama y el bloqueo cardíaco suele resolver espontáneamente en días, permitiendo retirar el marcapasos temporal.",
    keyPoints: [
      "Paciente joven, excursionista (bosques, riesgo de garrapatas) con síncope o bradicardia misteriosa profunda.; Sello clínico del mes anterior: Eritema migrans (Mancha en tiro al blanco).; ECG: Bloqueos AV de alto grado (2do o 3er grado) en corazón estructural sano.",
      "Carditis de Lyme (Borrelia burgdorferi). Requiere estabilización eléctrica temporal (marcapasos) y Tratamiento de oro: Ceftriaxona IV (Doxiciclina solo si es bloqueo muy leve o en fase cutánea primaria pura).",
      "Zoonosis Infecciosas / Lyme en Medicina Interna.",
    ],
  }
];
