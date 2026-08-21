import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · Preguntas #41–#50.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_08_09_41_50_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-08-09-41",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUMOLOGÍA / TOXICOLOGÍA",
    topic: "Efectos Adversos Farmacológicos",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","efectos-adversos-farmacol-gicos","efectos","adversos","farmacol","gicos"],
    statement: "Hombre de 72 años, con antecedente de Fibrilación Auricular permanente tratada con Amiodarona (200 mg/día) durante los últimos 4 años. Acude a la consulta externa de neumología refiriendo un cuadro insidioso de 3 meses de disnea progresiva de esfuerzo, tos seca irritativa y pérdida de 4 kg de peso. Al examen físico: paciente estable, saturación de oxígeno 91% al aire ambiente. A la auscultación pulmonar se evidencian estertores crepitantes secos (\"en velcro\") bilaterales predominantemente en las bases. No hay ingurgitación yugular ni edemas en miembros inferiores. Una Tomografía Computarizada de Alta Resolución (TCAR) de tórax revela opacidades intersticiales reticulares bilaterales con parches de vidrio esmerilado y áreas focales de alta atenuación (densidad radiológica mayor al músculo) en el parénquima. Tras descartar etiología infecciosa o falla cardíaca, se diagnostica Toxicidad Pulmonar por Amiodarona. ¿Cuál es la conducta terapéutica INMEDIATA y a largo plazo más apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender la Amiodarona de inmediato y prescribir un curso prolongado de Corticosteroides sistémicos (ej. Prednisona), iniciando a dosis medias/altas con reducción gradual a lo largo de varios meses.",
      },
      {
        id: "B",
        label: "B",
        text: "Suspender la Amiodarona e iniciar inmediatamente terapia antifibrótica específica (Nintedanib o Pirfenidona) para detener el remodelado intersticial.",
      },
      {
        id: "C",
        label: "C",
        text: "Mantener la Amiodarona por riesgo arritmogénico y adicionar Furosemida a altas dosis para secar el intersticio pulmonar.",
      },
      {
        id: "D",
        label: "D",
        text: "Suspender la Amiodarona y prescribir lavados broncoalveolares seriados para extraer los macrófagos espumosos cargados de fosfolípidos.",
      },
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con Toxicidad Pulmonar por Amiodarona, la reacción adversa más grave (y potencialmente fatal) de este antiarrítmico. Ocurre típicamente tras años de uso acumulativo. La amiodarona y sus metabolitos se acumulan en los lisosomas de los macrófagos y neumocitos, causando fosfolipidosis y una potente reacción inflamatoria/fibrótica (Neumonitis Intersticial). El hallazgo en la TCAR de zonas con \"alta atenuación\" (brillantes) se debe al alto contenido de Yodo del fármaco depositado en el pulmón. El tratamiento OBLIGATORIO es suspender el fármaco ofensor inmediatamente. Sin embargo, como la amiodarona es extremadamente lipofílica y tiene una vida media de eliminación gigantesca (hasta 6 meses o más), la inflamación pulmonar continuará progresando y destruyendo el tejido incluso meses después de haber dejado la pastilla. Por esto, la indicación innegociable es el uso de Corticosteroides sistémicos de forma prolongada (4 a 12 meses) para \"apagar\" la neumonitis mientras el cuerpo depura lentamente el fármaco de sus depósitos grasos.",
    keyPoints: [
      "Paciente anciano en tratamiento crónico con Amiodarona.; Disnea progresiva, tos seca y crépitos tipo velcro (sin signos de falla cardíaca).; TAC de tórax con intersticiopatía y áreas densas (ricas en yodo).",
      "Neumonitis por Amiodarona. Tratamiento dual obligatorio: Retirar el fármaco MÁS Corticoides sistémicos prolongados. El retiro aislado no frena el daño agudo por la larga vida media del tóxico.",
      "Efectos Adversos Farmacológicos / Intersticiopatías.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-42",
    university: "UCC",
    examArea: "PEDIATRÍA - INFECTOLOGÍA / PREVENTIVA",
    topic: "Infectología Preventiva Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","infectolog-a-preventiva-pedi-trica","infectolog","a","preventiva","pedi","trica"],
    statement: "Un lactante masculino de 3 meses de edad acude a su control pediátrico de rutina en el mes de noviembre (inicio de la temporada invernal/pico respiratorio). En sus antecedentes perinatales destaca que nació prematuramente a las 27 semanas de gestación con un peso de 950 gramos, y requirió ventilación mecánica prolongada, desarrollando Displasia Broncopulmonar (DBP) por la cual aún requiere oxígeno domiciliario por cánula nasal a bajo flujo (0.25 L/min). Actualmente se encuentra clínicamente estable, sin fiebre. El pediatra tratante, en cumplimiento de los protocolos de infectología preventiva para prematuros extremos con patología pulmonar crónica, ordena la aplicación mensual intramuscular de Palivizumab. ¿Contra qué proteína patogénica específica de qué agente etiológico está dirigido este anticuerpo monoclonal humano profiláctico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Contra la toxina pertussis de la bacteria Bordetella pertussis.",
      },
      {
        id: "B",
        label: "B",
        text: "Contra la neuroaminidasa del Virus de la Influenza A (H1N1).",
      },
      {
        id: "C",
        label: "C",
        text: "Contra la proteína de fusión (Proteína F) del Virus Sincitial Respiratorio (VSR).",
      },
      {
        id: "D",
        label: "D",
        text: "Contra la cápsula de polisacáridos del Streptococcus pneumoniae serotipo 19A.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente es un candidato absoluto para recibir profilaxis con Palivizumab. Este fármaco es un anticuerpo monoclonal humanizado de clase IgG1, diseñado específicamente para neutralizar y unirse a la Proteína F (de Fusión) del Virus Sincitial Respiratorio (VSR). El VSR es la causa número uno de bronquiolitis y neumonía viral letal en lactantes. En pacientes con altísimo riesgo (como prematuros extremos < 29 semanas, niños con Displasia Broncopulmonar que requieren oxígeno, o cardiopatías congénitas hemodinámicamente significativas), la infección por VSR causa un colapso respiratorio catastrófico. Como no existe una vacuna activa universal para los bebés de esta edad, se les confiere \"inmunidad pasiva\" inyectándoles el anticuerpo monoclonal (Palivizumab) una vez al mes durante los 5 meses que dura la temporada de mayor circulación viral (otoño/invierno). La proteína F es la \"llave\" que usa el virus para fusionar su envoltura con la membrana de la célula respiratoria humana; al bloquearla, el virus no puede infectar.",
    keyPoints: [
      "Lactante ex-prematuro severo (< 29 sem) o con enfermedad pulmonar/cardíaca crónica.; Indicación de inmunización mensual pasiva en época de invierno.",
      "Palivizumab. Anticuerpo monoclonal anti-VSR (bloquea la Proteína de Fusión F). Previene hospitalizaciones por bronquiolitis grave. No es un tratamiento agudo, es profilaxis estricta.",
      "Infectología Preventiva Pediátrica / Virus Sincitial Respiratorio.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-43",
    university: "UCC",
    examArea: "MEDICINA INTERNA - GASTROENTEROLOGÍA / INFECTOLOGÍA",
    topic: "Enfermedades Tropicales",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","enfermedades-tropicales","enfermedades","tropicales"],
    statement: "Un hombre de 45 años, inmigrante proveniente de una zona rural de Bolivia y con residencia previa prolongada en Sudamérica tropical, consulta por disfagia progresiva a sólidos y líquidos que ha empeorado en el último año, regurgitación de alimentos no digeridos durante la noche y pérdida de peso de 8 kg. Refiere además que su cardiólogo le documentó recientemente un Bloqueo Completo de Rama Derecha (BCRD) con hemibloqueo anterior izquierdo en el electrocardiograma, asintomático. Una radiografía de esófago con bario (esofagograma) muestra un esófago masivamente dilatado y tortuoso (megaesófago), con un estrechamiento distal cónico simétrico y liso en forma de \"pico de pájaro\". La manometría esofágica confirma aperistalsis completa del cuerpo esofágico y falla en la relajación del esfínter esofágico inferior (EEI). Ante la presentación de esta Acalasia, ¿cuál es el agente etiológico infeccioso sistémico oculto que explica la destrucción simultánea de los plexos mientéricos esofágicos y del sistema de conducción cardíaco?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Infección crónica por el virus linfotrópico de células T humanas (HTLV-1).",
      },
      {
        id: "B",
        label: "B",
        text: "Neurotoxina latente derivada de una infección antigua por Clostridium botulinum.",
      },
      {
        id: "C",
        label: "C",
        text: "Infección parasitaria por Trypanosoma cruzi (Enfermedad de Chagas).",
      },
      {
        id: "D",
        label: "D",
        text: "Daño autoinmune postinfeccioso desencadenado por el virus de Epstein-Barr (VEB).",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con una Pseudoacalasia o Acalasia Secundaria inducida por la Enfermedad de Chagas. La infección crónica por el parásito protozoario Trypanosoma cruzi (transmitido por las heces de los insectos triatominos o \"chinches besuconas\" en áreas endémicas de Sudamérica) produce una destrucción inmunomediada y directa de los ganglios parasimpáticos (plexos mientéricos de Auerbach) del tracto gastrointestinal. Esto paraliza el esófago (Acalasia chagásica con megaesófago) y el colon (Megacolon chagásico). La clave espectacular de la viñeta es la asociación con el corazón: el parásito también destruye el sistema de conducción de His-Purkinje y el miocardio. El hallazgo electrocardiográfico más común y patognomónico de la miocardiopatía chagásica es el Bloqueo Completo de Rama Derecha (BCRD) asociado a Hemibloqueo Anterior Izquierdo (HBAI). Cuando un paciente sudamericano presenta disfagia por acalasia + bloqueo de rama en el corazón, la serología para Chagas es confirmatoria y obligatoria.",
    keyPoints: [
      "Paciente procedente de zona endémica sudamericana.; Disfagia a líquidos/sólidos, regurgitación y Rx en \"pico de pájaro\" (Acalasia / Megaesófago) Y/O constipación severa (Megacolon).; ECG: BCRD + HBAI, arritmias ventriculares o miocardiopatía dilatada apical.",
      "Enfermedad de Chagas crónica (Trypanosoma cruzi). Destruye nervios autónomos intestinales y fibras eléctricas cardíacas.",
      "Enfermedades Tropicales / Acalasia Secundaria.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-44",
    university: "UCC",
    examArea: "PEDIATRÍA - HEMATOLOGÍA / GINECOLOGÍA",
    topic: "Trastornos de la Coagulación",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","trastornos-de-la-coagulaci-n","trastornos","de","la","coagulaci","n"],
    statement: "Una adolescente femenina de 14 años es llevada al servicio de urgencias ginecológicas por su madre debido a sangrado menstrual masivo (menorragia). La paciente relata que su menarquia (primera regla) ocurrió hace dos semanas y el sangrado no se ha detenido, empapando una toalla higiénica nocturna cada hora en los últimos 3 días, y presentando coágulos grandes. Al interrogatorio, refiere que desde la niñez presentaba epistaxis frecuentes (sangrados nasales de más de 20 minutos) y formación fácil de grandes equimosis ante traumas mínimos. Laboratorios: Hemoglobina 7.8 g/dL, Plaquetas 250,000/mm³ (Normales). Tiempo de Protrombina (TP) normal, pero el Tiempo de Tromboplastina Parcial activado (TPTa) está discretamente prolongado. El Tiempo de Sangría (Bleeding Time) es francamente anormal (prolongado). Una prueba de cofactor de Ristocetina revela agregación plaquetaria defectuosa. ¿Cuál es el tratamiento de PRIMERA LÍNEA para el control agudo de esta crisis hemorrágica en esta patología hereditaria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Desmopresina (DDAVP) endovenosa o intranasal y Ácido Tranexámico.",
      },
      {
        id: "B",
        label: "B",
        text: "Transfusión masiva de Plaquetas irradiadas para corregir el defecto primario.",
      },
      {
        id: "C",
        label: "C",
        text: "Administración de Factor VIII recombinante de alta pureza sin factor de von Willebrand asociado.",
        distractorProfile: "hemophilia_a_treatment_trap",
        incorrectFeedback: "Dar Factor VIII de alta pureza (sin vWF) corrige el TPTa temporalmente, pero no corrige la hemostasia primaria defectuosa (la adhesión plaquetaria), por lo que la paciente seguirá sangrando por las mucosas. Se requieren concentrados que contengan ambos factores si la DDAVP falla.",
      },
      {
        id: "D",
        label: "D",
        text: "Administración de Heparina de Bajo Peso Molecular para evitar la coagulación intravascular.",
      },
    ],
    correctOptionId: "A",
    explanation: "La paciente cursa con un debut hemorrágico clásico de Enfermedad de von Willebrand (EvW) (usualmente Tipo 1), el trastorno de la coagulación hereditario más frecuente en humanos. En las adolescentes, se diagnostica frecuentemente durante la menarquia debido a hemorragias uterinas anormales incontrolables. El Factor de von Willebrand (FvW) tiene dos funciones vitales: 1) Pegar las plaquetas al endotelio herido (hemostasia primaria, por eso la paciente tiene epistaxis y el Tiempo de Sangría prolongado, a pesar de tener un número de plaquetas normales); y 2) Proteger y transportar al Factor VIII en la sangre. Al faltar FvW, el Factor VIII se degrada rápidamente, lo que explica la prolongación del TPTa (hemostasia secundaria). El test de Ristocetina confirma la incapacidad de las plaquetas para aglutinarse. El tratamiento de rescate de oro para la EvW Tipo 1 es la Desmopresina (DDAVP). Este fármaco fuerza a las células endoteliales (cuerpos de Weibel-Palade) a exprimir masivamente a la sangre todas sus reservas almacenadas de FvW y Factor VIII, deteniendo el sangrado en minutos. Los antifibrinolíticos (Ácido Tranexámico) evitan que el coágulo mucoso se disuelva.",
    keyPoints: [
      "Adolescente con menarquia hemorrágica brutal O persona con epistaxis crónicas / moretones.; Perfil: Plaquetas normales, pero Tiempo de Sangría ALTO y TPTa levemente ALTO.; Test de Cofactor de Ristocetina alterado.",
      "Enfermedad de von Willebrand. Tratamiento agudo (Tipo 1): DDAVP (Desmopresina). (Nota: en la EvW tipo 3 o 2B severa, la DDAVP no sirve y se deben dar concentrados plasmáticos de FvW/FVIII).",
      "Trastornos de la Coagulación / Hemorragia Pediátrica.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-45",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / CIRUGÍA",
    topic: "Urgencias Endocrinológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","urgencias-endocrinol-gicas","urgencias","endocrinol","gicas"],
    statement: "Hombre de 40 años, con diagnóstico incidental de una masa suprarrenal derecha de 6 cm. El paciente ha presentado episodios de cefalea paroxística palpitante, diaforesis intensa y palpitaciones (tríada clásica) asociados a crisis hipertensivas de hasta 220/120 mmHg. El perfil bioquímico de metanefrinas fraccionadas en orina de 24 horas y plasma resultó estar elevado a 5 veces el límite superior de la normalidad. Con el diagnóstico confirmado de Feocromocitoma, se programa al paciente para una adrenalectomía laparoscópica en 3 semanas. Para optimizar al paciente en el periodo preoperatorio y evitar una crisis adrenérgica hipertensiva mortal inducida por la manipulación del tumor y la inducción anestésica, ¿cuál es la SECUENCIA farmacológica OBLIGATORIA que debe seguirse?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar bloqueadores beta-adrenérgicos (ej. Propranolol) como paso inicial, y 10 días después añadir bloqueadores alfa-adrenérgicos (Fenoxibenzamina).",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar exclusively bloqueadores de los canales de calcio (Amlodipino) durante las 3 semanas previas.",
        distractorProfile: "inadequate_single_agent_therapy",
        incorrectFeedback: "Los calcioantagonistas son coadyuvantes útiles si el paciente no tolera los bloqueadores alfa, pero no tienen el poder fisiológico primario para antagonizar directamente los receptores adrenérgicos inundados por las catecolaminas del tumor.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar bloqueadores alfa-adrenérgicos (Fenoxibenzamina o Doxazosina) por 10-14 días PRIMERO, seguidos de la adición de bloqueadores beta-adrenérgicos solo unos días antes de la cirugía si hay taquicardia.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar inducción anestésica directamente sin fármacos previos para evitar choque vasodilatador refractario post-extirpación del tumor.",
        distractorProfile: "surgical_suicide",
        incorrectFeedback: "La manipulación del tumor no bloqueado libera bolos masivos de catecolaminas. Entrar al quirófano sin bloqueo Alfa previo asegura volatilizar la presión arterial a niveles incompatibles con la vida (ej. > 250/150) durante la laringoscopia o la disección retroperitoneal.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con un Feocromocitoma, un tumor neuroendocrino mortal que secreta toneladas de catecolaminas (adrenalina y noradrenalina). Durante la cirugía, al tocar el tumor, este exprimirá un lago de adrenalina a la sangre, lo que puede causar un ACV hemorrágico o un paro cardíaco por presión arterial de 300 mmHg. Para evitarlo, se debe \"sellar\" al sistema cardiovascular antes de operar. La REGLA SAGRADA y la secuencia de oro de la endocrinología exige que se debe iniciar el bloqueo en orden alfabético: Primero A (Alfa), luego B (Beta). Se debe saturar la vasculatura periférica con bloqueadores alfa-1 (Fenoxibenzamina o Doxazosina) durante 10 a 14 días. Esto dilata las arterias (que están crónicamente exprimidas por la adrenalina) y permite reponer el volumen sanguíneo contraído. SOLO una vez que se ha logrado un bloqueo Alfa completo y la presión está controlada, se puede introducir un bloqueador Beta (Propranolol/Atenolol) para frenar la taquicardia secundaria.",
    keyPoints: [
      "Paciente con Tríada de Feocromocitoma (Cefalea + Diaforesis + Taquicardia) y masa adrenal.; Preparación para resección quirúrgica (Adrenalectomía).",
      "Bloqueo preoperatorio: ALFA antes que BETA (siempre en orden alfabético). Nunca iniciar el betabloqueador sin haber bloqueado el alfa primero.",
      "Urgencias Endocrinológicas / Feocromocitoma.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-46",
    university: "UCC",
    examArea: "PEDIATRÍA - NEUMOLOGÍA / URGENCIAS",
    topic: "Neumología Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","neumolog-a-pedi-trica","neumolog","a","pedi","trica"],
    statement: "Niño de 2 años, previamente muy sano, es traído de urgencias por sus padres. Relatan que mientras el niño jugaba y comía cacahuates (maní) en el suelo de la sala, presentó un episodio súbito y violento de asfixia, tos seca cianosante y arcadas. Tras unos minutos, el acceso de tos cedió, pero el niño persistió con \"un silbido al respirar\". A su ingreso, el paciente se encuentra afebril, FR 35 rpm y SatO2 93%. A la auscultación, se documentan sibilancias fijas exclusivamente en el hemitórax derecho, acompañadas de una marcada disminución del murmullo vesicular en ese mismo lado. Se realiza una radiografía simple de tórax en inspiración y espiración, la cual revela que el hemitórax derecho está hiperlúcido (más negro de lo normal), con el diafragma aplanado y una desviación sutil del mediastino hacia la izquierda durante la espiración (atrapamiento aéreo). No se observan objetos radiopacos. ¿Cuál es el paso diagnóstico-terapéutico de elección MÁS INMEDIATO para resolver la emergencia mecánica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar nebulizaciones con Salbutamol y Corticosteroides sistémicos, asumiendo debut de asma de la infancia desencadenada por alergia al maní.",
      },
      {
        id: "B",
        label: "B",
        text: "Realizar Broncoscopia Rígida de urgencia bajo anestesia general para visualización y extracción física.",
      },
      {
        id: "C",
        label: "C",
        text: "Solicitar una Tomografía Computarizada (TC) de tórax para confirmar la ubicación del maní antes de someterlo a anestesia.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar Broncoscopia Flexible en la cama de urgencias con sedación leve para empujar el objeto hacia un lóbulo inferior.",
      },
    ],
    correctOptionId: "B",
    explanation: "El niño presenta la clásica tríada de Aspiración de Cuerpo Extraño: episodio agudo presenciado de asfixia (choking), sibilancias UNILATERALES de inicio súbito, y disminución del ruido aéreo. Al tratarse de un cuerpo orgánico (maní/cacahuate), este es radiolúcido y jamás se verá en la radiografía de tórax como un punto blanco. Sin embargo, los signos indirectos radiográficos son la clave: el objeto orgánico se hincha en el bronquio (usualmente el bronquio principal derecho, por ser más vertical y ancho) creando un efecto de válvula unidireccional (ball-valve effect). El aire entra al inspirar, pero no puede salir al espirar. Esto causa hiperinsuflación unilateral (pulmón derecho grande y \"negro\") y empuja el mediastino hacia el lado sano. El tratamiento de ORO innegociable, ante la sospecha clínica clara, es la Broncoscopia Rígida en el quirófano. A diferencia de la broncoscopia flexible, el tubo rígido permite al cirujano/neumólogo pasar pinzas potentes para agarrar y triturar el cuerpo extraño de forma segura mientras se ventila continuamente al paciente por el mismo tubo.",
    keyPoints: [
      "Niño preescolar (1 a 3 años) con episodio súbito de tos y ahogo mientras comía frutos secos/jugaba.; Sibilancias o silencio auscultatorio UNILATERAL.; Rx Tórax: Hiperinsuflación unilateral (o atelectasia), pero el objeto orgánico (maní) NO SE VE.",
      "Aspiración de Cuerpo Extraño orgánico (Radiolúcido). Tratamiento OBLIGATORIO: Broncoscopia Rígida de urgencia para extracción.",
      "Neumología Pediátrica / Aspiración de Cuerpo Extraño.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-47",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUROLOGÍA / URGENCIAS",
    topic: "Urgencias Neurológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","urgencias-neurol-gicas","urgencias","neurol","gicas"],
    statement: "Un hombre de 50 años acude a urgencias quejándose de dolor lumbar agudo muy intenso irradiado a ambas extremidades inferiores. Refiere que anoche, al intentar levantar una caja pesada, sintió un \"chasquido\" en la espalda y el dolor lo dejó inmovilizado. Durante la evaluación, el paciente reporta que hace 6 horas perdió completamente el control de los esfínteres, habiendo orinado de forma involuntaria (incontinencia por rebosamiento) sin poder evitarlo. Al examen físico, se documenta una debilidad motora asimétrica, severa y flácida en ambas piernas, y abolición de los reflejos rotulianos y aquilianos. Al evaluar la sensibilidad perianal, el paciente no siente el roce de la aguja en la región perineal y glútea interna (anestesia en silla de montar) y el tacto rectal evidencia un esfínter anal complaciente y flácido (sin tono). ¿Cuál es la conducta diagnóstica-terapéutica DE EXTREMA URGENCIA requerida para evitar la discapacidad pélvica permanente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar Resonancia Magnética (RMN) lumbosacra inmediata y solicitar descompresión quirúrgica neuroquirúrgica (laminectomía) en las siguientes 24-48 horas.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar dosis orales altas de AINEs y relajantes musculares, asumiendo un síndrome miofascial severo con radiculopatía benigna temporal.",
      },
      {
        id: "C",
        label: "C",
        text: "Solicitar una electromiografía (EMG) de extremidades inferiores para diferenciar una lesión axonal de una desmielinizante antes de operar.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar punción lumbar de urgencia para descartar neuroinfección oculta como causa de la parálisis flácida ascendente.",
      },
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con un Síndrome de Cauda Equina (Cola de Caballo), una de las mayores emergencias absolutas de la neurología y ortopedia espinal. Fisiopatológicamente, ocurre por una compresión masiva (generalmente una hernia discal central gigantesca, trauma o tumor) de las raíces nerviosas espinales lumbosacras libres por debajo de L1/L2. Las \"banderas rojas\" clínicas que lo diferencian de una simple ciática o lumbago son inconfundibles: 1) Afectación de esfínteres (retención urinaria que gotea por rebosamiento, o pérdida del tono anal), 2) Anestesia en silla de montar (pérdida de sensibilidad en periné/genitales/glúteos internos), y 3) Debilidad flácida y asimétrica en miembros inferiores (parálisis de motoneurona inferior, arreflexia). La ventana neurológica es implacable: si las raíces no se liberan quirúrgicamente de la presión antes de 48 horas (idealmente < 24h), el paciente quedará con disfunción vesical, fecal y sexual permanente de por vida, además de parálisis en las piernas.",
    keyPoints: [
      "Paciente con dolor lumbar súbito o trauma.; Banderas Rojas Supremas: Pérdida del control de orina/heces, Anestesia en silla de montar (no siente al limpiarse), hipotonía de miembros inferiores.",
      "Síndrome de Cauda Equina. Es una emergencia neuroquirúrgica pura. Estudio obligatorio: RMN Lumbosacra inmediata. Tratamiento: Laminectomía descompresiva de urgencia (<48h).",
      "Urgencias Neurológicas / Compresión Espinal.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-48",
    university: "UCC",
    examArea: "PEDIATRÍA - NEFROLOGÍA",
    topic: "Glomerulopatías Pediátricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","glomerulopat-as-pedi-tricas","glomerulopat","as","pedi","tricas"],
    statement: "Un niño de 7 años es traído a urgencias porque su madre notó hoy que la orina del niño tiene un color \"café oscuro o color refresco de cola\". Al interrogatorio, refiere que hace unas 3 semanas el paciente presentó \"llagas\" con costras doradas en las rodillas y el mentón (impétigo) que fueron tratadas de forma irregular con cremas caseras. Al examen físico, el niño presenta edema periorbitario marcado (\"cara hinchada\") e hipertensión arterial severa para su edad (PA 145/95 mmHg). Un uroanálisis reporta hematuria franca con cilindros eritrocitarios, proteinuria de 1.5 g/24h y ausencia de piuria. Un panel inmunológico de urgencia reporta niveles de Complemento C3 marcadamente reducidos (15 mg/dL), con niveles de Complemento C4 estrictamente normales. ¿Cuál es la etiología subyacente y la medida terapéutica farmacológica de elección para manejar la complicación principal del cuadro agudo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nefropatía por IgA; se debe iniciar ciclo inmunosupresor prolongado con Prednisona oral de inmediato para frenar el daño glomerular crónico.",
      },
      {
        id: "B",
        label: "B",
        text: "Glomerulonefritis Postestreptocócica (GNPE); el manejo agudo debe centrarse en restricción hídrica y diuréticos de asa (Furosemida) para controlar la hipertensión y el edema.",
      },
      {
        id: "C",
        label: "C",
        text: "Granulomatosis con Poliangeítis (Wegener); administrar Ciclofosfamida y pulsos de Metilprednisolona por alta probabilidad de falla renal rápidamente progresiva.",
      },
      {
        id: "D",
        label: "D",
        text: "Síndrome Urémico Hemolítico Atípico (SUHa); el manejo mandatorio requiere inicio de anticuerpos monoclonales anti-C5 (Eculizumab) y plasmaféresis.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Síndrome Nefrítico agudo clásico (Hematuria macroscópica con cilindros, Edema e Hipertensión), con el antecedente cronológico perfecto de una infección cutánea previa (impétigo de 3 semanas, típico de Streptococcus pyogenes). Este cuadro sella el diagnóstico de una Glomerulonefritis Postestreptocócica (GNPE). El perfil inmunológico pivote es contundente: C3 consumido (bajo) por activación masiva de la vía alternativa del complemento, mientras que el C4 permanece normal. La GNPE es una enfermedad inmunomediada (depósitos subepiteliales de complejos inmunes en \"jorobas\" o humps) que es típicamente autolimitada y benigna a largo plazo; el riñón se desinflama solo en semanas. Por lo tanto, el uso de corticoides o inmunosupresores mayores está injustificado. El verdadero riesgo vital en la fase aguda es la Sobrecarga de Volumen extrema, la cual causa la hipertensión severa, edema agudo de pulmón y encefalopatía hipertensiva (convulsiones). El tratamiento de oro es puramente sintomático/soporte: restricción de agua y sal, y el uso agresivo de Diuréticos de Asa (Furosemida) para forzar al riñón a botar el exceso de agua extracelular retenida, normalizando la presión arterial de forma rápida y segura.",
    keyPoints: [
      "Niño preescolar/escolar con Orina color \"Coca-cola\" (Hematuria glomerular) + Hinchazón de cara + Hipertensión.; Antecedente de Faringitis (1-2 semanas previas) o Impétigo de la piel (3-4 semanas previas).; Marcador Pivote: C3 muy bajo, C4 normal.",
      "Glomerulonefritis Postestreptocócica (GNPE). Enfermedad autolimitada (no usar esteroides). El tratamiento vital es tratar la Hipertensión por sobrecarga de agua usando Furosemida (Diuréticos).",
      "Glomerulopatías Pediátricas / GN Postinfecciosa.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-49",
    university: "UCC",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA / NEUROLOGÍA",
    topic: "Infecciones de Transmisión Sexual",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","infecciones-de-transmisi-n-sexual","infecciones","de","transmisi","n","sexual"],
    statement: "Un hombre de 55 años es referido a la clínica de neurología quejándose de dolores agudos, punzantes e intensos que bajan por ambas piernas como \"relámpagos o choques eléctricos\" (dolores fulgurantes), asociados a caídas frecuentes en la oscuridad. Niega trauma previo. Al examen neurológico: el paciente camina arrastrando los pies y golpeándolos fuertemente contra el suelo (marcha tabética). La prueba de Romberg es intensamente positiva. Existe arreflexia patelar y aquílea profunda, y pérdida total de la propiocepción en las extremidades inferiores. La inspección oftalmológica revela pupilas bilaterales mióticas, asimétricas, que se contraen adecuadamente al acomodar la vista hacia objetos cercanos, pero que no presentan ninguna reactividad contráctil al estímulo de luz brillante (Pupilas de Argyll Robertson). El VDRL sérico es positivo 1:64 y el FTA-ABS resulta reactivo. Ante la confirmación de la fase terciaria de esta neuroinfección crónica, ¿cuál es el esquema terapéutico antibiótico OBLIGATORIO que detiene la progresión patológica y penetra la barrera hematoencefálica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Penicilina G Benzatínica intramuscular en dosis única de 2.4 millones de Unidades, por su efecto de depósito celular crónico.",
      },
      {
        id: "B",
        label: "B",
        text: "Azitromicina oral en dosis semanales combinada con Ceftriaxona intravenosa profiláctica.",
        distractorProfile: "generic_std_cocktail_error",
        incorrectFeedback: "La azitromicina trata Clamidia o Chancroide, pero la resistencia del Treponema pallidum a macrólidos es muy alta. Aunque la Ceftriaxona IV es una alternativa secundaria de rescate para neurosífilis en caso de escasez de penicilina, la Penicilina G cristalina sigue siendo indiscutiblemente el patrón de oro y de primera elección protocolar.",
      },
      {
        id: "C",
        label: "C",
        text: "Penicilina G Acuosa (Cristalina) Intravenosa en infusión continua o dosis fraccionadas (18-24 millones U/día) durante 10 a 14 días.",
      },
      {
        id: "D",
        label: "D",
        text: "Doxiciclina oral por 28 días, como fármaco de elección indiscutible para neuroinfecciones espiroquetales destructivas.",
        distractorProfile: "alternative_allergy_regimen",
        incorrectFeedback: "La doxiciclina se usa en neuroinfecciones como la de Borrelia (Enfermedad de Lyme) y puede ser una alternativa extrema en pacientes con alergia no desensibilizable a la penicilina, pero su eficacia es muy inferior a la penicilina intravenosa de oro para treponemas intra-parenquimatosos profundos.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con Neurosífilis Tardía (Sífilis Terciaria), manifestada específicamente como Tabes Dorsalis (desmielinización y degeneración de las columnas posteriores de la médula espinal y raíces dorsales por infección crónica por Treponema pallidum). El cuadro clínico es un museo de la semiología clásica: dolores fulgurantes (\"relámpagos\") en piernas, ataxia sensitiva profunda de base ancha, arreflexia y la legendaria Pupila de Argyll Robertson (pupilas con disociación luz-acomodación: reaccionan a la acomodación cercana, pero no a la luz pupilar). Para erradicar a la espiroqueta de los tejidos santuarios como el líquido cefalorraquídeo y el parénquima medular, el nivel de antibiótico en el SNC debe ser inmensamente alto. Las guías infecciosas (CDC/OMS) establecen como estándar innegociable el uso de Penicilina G Acuosa (Cristalina) por vía INTRAVENOSA (de acción corta pero de altísima concentración tisular) a dosis masivas de 18 a 24 millones de unidades al día, durante 10 a 14 días continuos.",
    keyPoints: [
      "Paciente con antecedente incierto de ETS, que hace \"dolores como electricidad\" en piernas.; Romberg Positivo (no sabe dónde están sus piernas), Ataxia y falta de reflejos rotulianos (Tabes Dorsalis).; Ojos con Pupila de Argyll Robertson (Acomoda pero no reacciona a la luz).",
      "Neurosífilis (Sífilis Terciaria). Exige tratamiento intravenoso con Penicilina G Cristalina / Acuosa a dosis millonarias por 14 días. La penicilina intramuscular está contraindicada porque no alcanza los niveles tóxicos para la espiroqueta dentro del cerebro.",
      "Infecciones de Transmisión Sexual / Neurosífilis.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-50",
    university: "UCC",
    examArea: "PEDIATRÍA - ENDOCRINOLOGÍA / GENÉTICA",
    topic: "Endocrinología",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","endocrinolog-a","endocrinolog","a"],
    statement: "Un adolescente masculino de 16 años acude a la clínica de endocrinología remitido por el médico general, debido a la ausencia absoluta de desarrollo de caracteres sexuales secundarios. El paciente no ha presentado aumento del volumen testicular (testículos bilaterales de volumen pre-puberal < 3 mL medidos por orquidómetro de Prader) ni crecimiento del vello púbico. Su crecimiento estatural ha sido lento pero sostenido (no hay enanismo extremo). Al interrogatorio dirigido, el paciente menciona casualmente una incapacidad absoluta y congénita para percibir olores (Anosmia profunda confirmada al acercarle café y alcohol sin respuesta olfatoria), un rasgo que comparte con su tío materno. Los laboratorios iniciales reportan niveles de Testosterona total indetectables y, de forma reveladora, la Hormona Luteinizante (LH) y Hormona Foliculoestimulante (FSH) séricas se encuentran fuertemente disminuidas. Un cariotipo de sangre periférica documenta una fórmula genómica 46,XY. ¿Cuál es el defecto de migración embriológica subyacente que unifica de forma patognomónica el fenotipo gonadal y olfatorio en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Mutación genética que induce falla primaria del testículo con hialinización de túbulos seminíferos (Hipogonadismo Hipergonadotrópico clásico).",
      },
      {
        id: "B",
        label: "B",
        text: "Deleción en el brazo corto del cromosoma 15 (Síndrome de Prader-Willi) asociado a hiperfagia y retraso mental.",
      },
      {
        id: "C",
        label: "C",
        text: "Defecto en la migración fetal de las neuronas secretoras de GnRH desde la placoda olfatoria hacia el hipotálamo (Síndrome de Kallmann).",
      },
      {
        id: "D",
        label: "D",
        text: "Mutación del receptor de andrógenos que impide la acción de la testosterona periférica, resultando en un fenotipo femenino oculto (Síndrome de Morris).",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con el Síndrome de Kallmann (un hipogonadismo hipogonadotrópico congénito asociado a anosmia/hiposmia). Esta es la respuesta clínica perfecta a la \"tríada\" evaluada en los boards de endocrinología: Ausencia de Pubertad + Gonadotropinas (LH/FSH) Bajas + Ausencia del sentido del Olfato (Anosmia). Fisiopatológicamente y de forma asombrosa, las neuronas que deben secretar la Hormona Liberadora de Gonadotropinas (GnRH) no nacen en el cerebro; nacen en la nariz del feto embrionario (en la placoda olfatoria) y tienen que migrar o \"trepar\" físicamente por los nervios olfatorios y los bulbos olfatorios para llegar hasta el hipotálamo. En el síndrome de Kallmann (frecuentemente ligado al gen KAL1 en cromosoma X), esta migración fracasa. Por lo tanto, los tractos olfatorios no se forman (el paciente no puede oler), y las neuronas de GnRH se quedan estancadas en la nariz sin llegar al hipotálamo. Al no haber GnRH, la hipófisis nunca recibe la orden de liberar LH/FSH, y los testículos (que están genéticamente sanos, solo están \"dormidos\") nunca reciben el estímulo para producir testosterona e iniciar la pubertad. El tratamiento consiste en inducción hormonal sustitutiva (testosterona o pulsos de GnRH si desea fertilidad).",
    keyPoints: [
      "Adolescente varón (usualmente) con Retraso Puberal / Hipogonadismo.; Perfil Hormonal: Testosterona BAJA y Gonadotropinas (LH/FSH) BAJAS (Patrón Hipogonadotrópico = problema central).; Dato Pivote: Incapacidad para OLER (Anosmia).",
      "Síndrome de Kallmann. El defecto es la falla de migración conjunta del nervio olfatorio y de las neuronas que producen GnRH hacia el hipotálamo.",
      "Endocrinología / Retraso de la Pubertad.",
    ],
  }
];
