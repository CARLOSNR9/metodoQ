import type { TrainingQuestion } from "@/lib/questions/types";

export const MIR_2026_161_170_QUESTIONS: TrainingQuestion[] = [
  {
    id: "mir-2026-161",
    university: "MIR (España)",
    examArea: "DERMATOLOGÍA",
    topic: "CARCINOMA BASOCELULAR",
    difficulty: "easy",
    tags: ["mir", "espana", "dermatologia"],
    statement:
      "Un hombre de 70 años, agricultor, presenta en el ala nasal una pápula de 8 mm, de aspecto perlado, con telangiectasias en superficie y una pequeña ulceración central, de crecimiento lento durante 2 años. ¿Cuál es el diagnóstico más probable y su comportamiento habitual?",
    options: [
      { id: "A", label: "A", text: "Melanoma nodular; alta tasa de metástasis precoces." },
      { id: "B", label: "B", text: "Queratosis seborreica; lesión benigna que no requiere tratamiento." },
      { id: "C", label: "C", text: "Carcinoma basocelular; crecimiento local destructivo con metástasis excepcionales." },
      { id: "D", label: "D", text: "Carcinoma epidermoide; metastatiza con más frecuencia que el resto de tumores cutáneos." },
    ],
    correctOptionId: "C",
    explanation:
      "El **carcinoma basocelular** es el **cáncer de piel más frecuente**. Aparece en zonas fotoexpuestas (sobre todo **cara**) de personas con exposición solar crónica, como una **pápula perlada con telangiectasias**, a veces con **ulceración central** («úlcera roedora»). Crece **lentamente** y es **localmente invasivo**, pero **casi nunca metastatiza**. El tratamiento de elección es la **extirpación quirúrgica**; en zonas faciales de alto riesgo o recidivas se prefiere la **cirugía de Mohs**.\n\n**TRAMPA DEL EXAMEN:** El **carcinoma epidermoide** puede metastatizar (más que el basocelular, aunque con menor frecuencia que el melanoma) y suele asentar sobre queratosis actínicas. El **melanoma** es el tumor cutáneo con mayor capacidad metastásica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., perla con vasitos en la cara de un paciente mayor con mucho sol: basocelular. No da metástasis, pero si se deja, destruye nariz, párpados u orejas. Por eso se quita, y en la cara con la técnica que más tejido sano conserva.",
    keyPoints: [
      "Carcinoma basocelular: el cáncer de piel más frecuente; pápula perlada con telangiectasias en zonas fotoexpuestas.",
      "Localmente invasivo, metástasis excepcionales.",
      "Tratamiento: extirpación quirúrgica; cirugía de Mohs en zonas faciales de alto riesgo.",
    ],
  },
  {
    id: "mir-2026-162",
    university: "MIR (España)",
    examArea: "DERMATOLOGÍA",
    topic: "DERMATITIS ATÓPICA EN LA INFANCIA",
    difficulty: "easy",
    tags: ["mir", "espana", "dermatologia"],
    statement:
      "Un niño de 3 años presenta desde lactante brotes de lesiones eccematosas muy pruriginosas en flexuras de codos y rodillas, con piel seca de forma persistente. Su madre tiene asma. ¿Cuál es la base del tratamiento?",
    options: [
      { id: "A", label: "A", text: "Emolientes diarios para restaurar la barrera cutánea y corticoides tópicos durante los brotes." },
      { id: "B", label: "B", text: "Corticoides orales de mantenimiento a dosis bajas para prevenir los brotes de forma continuada." },
      { id: "C", label: "C", text: "Dieta de exclusión de leche, huevo y trigo de entrada, aunque no haya alergia alimentaria demostrada." },
      { id: "D", label: "D", text: "Antibióticos tópicos de forma continuada sobre las zonas afectadas para evitar la colonización por estafilococo." },
    ],
    correctOptionId: "A",
    explanation:
      "La **dermatitis atópica** es una enfermedad inflamatoria crónica con **alteración de la barrera cutánea**, prurito intenso y distribución típica según la edad (en niños, **flexuras**). Forma parte de la **marcha atópica** (asma, rinitis). La base del tratamiento son los **emolientes diarios** y, en los **brotes**, los **corticoides tópicos**; en zonas delicadas (cara, pliegues) o para mantenimiento pueden usarse **inhibidores tópicos de la calcineurina** (tacrolimus, pimecrolimus). En formas graves refractarias hay tratamientos sistémicos y biológicos (por ejemplo, dupilumab).\n\n**TRAMPA DEL EXAMEN:** Las **dietas de exclusión** sin alergia alimentaria demostrada no están indicadas y pueden causar déficits nutricionales. Los **corticoides orales** producen rebote y efectos adversos. Los antibióticos se usan solo si hay sobreinfección.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la piel del niño atópico es como un muro con grietas: los emolientes las tapan cada día. Cuando hay brote, corticoide tópico sin miedo y el tiempo necesario. Y no le quite alimentos al niño sin una alergia demostrada.",
    keyPoints: [
      "Dermatitis atópica: prurito, eccema en flexuras (niños), piel seca, antecedentes atópicos.",
      "Base: emolientes diarios + corticoides tópicos en los brotes; inhibidores de la calcineurina en cara y pliegues.",
      "No hacer dietas de exclusión sin alergia alimentaria demostrada; evitar corticoides orales.",
    ],
  },
  {
    id: "mir-2026-163",
    university: "MIR (España)",
    examArea: "BIOÉTICA Y LEGISLACIÓN",
    topic: "CONSENTIMIENTO INFORMADO POR ESCRITO",
    difficulty: "easy",
    tags: ["mir", "espana", "bioetica"],
    statement:
      "Según la Ley 41/2002, básica reguladora de la autonomía del paciente, ¿en cuál de las siguientes situaciones el consentimiento informado debe prestarse por escrito?",
    options: [
      { id: "A", label: "A", text: "Para la exploración física realizada en la consulta, incluida la auscultación o la toma de la tensión arterial, así como para la entrega de informes clínicos al propio paciente." },
      { id: "B", label: "B", text: "Para la prescripción de un fármaco, incluidos los de uso habitual en atención primaria, ya que los medicamentos pueden producir efectos adversos graves o interacciones." },
      { id: "C", label: "C", text: "Nunca: la ley solo contempla el consentimiento verbal, que debe registrarse en la historia clínica, y el escrito es una práctica voluntaria de cada centro sanitario o servicio." },
      { id: "D", label: "D", text: "Para intervenciones quirúrgicas, procedimientos diagnósticos y terapéuticos invasivos y, en general, procedimientos con riesgos o inconvenientes de notoria y previsible repercusión negativa para la salud." },
    ],
    correctOptionId: "D",
    explanation:
      "La **Ley 41/2002** establece que el **consentimiento informado será, como regla general, verbal**, pero debe prestarse **por escrito** en los casos de **intervención quirúrgica**, **procedimientos diagnósticos y terapéuticos invasores** y, en general, en la aplicación de procedimientos que suponen **riesgos o inconvenientes de notoria y previsible repercusión negativa** sobre la salud del paciente. El paciente puede **revocar** su consentimiento por escrito en cualquier momento.\n\n**TRAMPA DEL EXAMEN:** No todo acto médico requiere consentimiento escrito. Además, la información la da el **médico responsable** y el documento escrito **no sustituye** a la información verbal adecuada.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el consentimiento informado es un proceso de diálogo, no una firma. La firma se exige cuando se opera, se hace algo invasivo o hay riesgos importantes. Pero lo que protege de verdad al paciente (y a usted) es haber explicado bien las opciones, los riesgos y las alternativas.",
    keyPoints: [
      "Ley 41/2002: consentimiento informado verbal como regla general.",
      "Por escrito: cirugía, procedimientos invasivos y procedimientos con riesgos notorios.",
      "El paciente puede revocar el consentimiento en cualquier momento; el documento no sustituye la información.",
    ],
  },
  {
    id: "mir-2026-164",
    university: "MIR (España)",
    examArea: "BIOÉTICA Y LEGISLACIÓN",
    topic: "CONSENTIMIENTO DEL MENOR DE 16 AÑOS O MÁS",
    difficulty: "medium",
    tags: ["mir", "espana", "bioetica"],
    statement:
      "Una adolescente de 16 años, capaz y sin alteraciones cognitivas, acude sola a su médica de familia para solicitar un método anticonceptivo y pide que no se informe a sus padres. Según la legislación española, ¿cuál es la actitud correcta?",
    options: [
      { id: "A", label: "A", text: "Negar la prescripción del anticonceptivo hasta que acuda acompañada de sus padres o tutores legales." },
      { id: "B", label: "B", text: "Prescribirlo e informar a los padres en este caso, porque es menor de edad y los padres tienen derecho a conocer el tratamiento." },
      { id: "C", label: "C", text: "Informarla, prescribir el método si está indicado y respetar la confidencialidad, ya que a partir de los 16 años puede consentir por sí misma." },
      { id: "D", label: "D", text: "Solicitar autorización judicial antes de actuar, al tratarse de una menor que no quiere informar a su familia." },
    ],
    correctOptionId: "C",
    explanation:
      "Según la **Ley 41/2002**, los **mayores de 16 años** (o menores emancipados) **prestan el consentimiento por sí mismos**: es la llamada «mayoría de edad sanitaria». Solo en actuaciones de **grave riesgo** para la vida o la salud, según criterio facultativo, consienten los representantes legales **una vez oída y tenida en cuenta la opinión del menor**. En una prescripción anticonceptiva, la paciente de 16 años consiente sola y tiene derecho a la **confidencialidad**.\n\n**TRAMPA DEL EXAMEN:** Exigir la presencia de los padres o romper la confidencialidad puede alejar a la adolescente del sistema sanitario y aumentar los riesgos. La autorización judicial no es necesaria.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., a los 16 años su paciente decide sobre su salud, y su intimidad merece el mismo respeto que la de un adulto. Aproveche la consulta para hablar de prevención de infecciones de transmisión sexual. Las excepciones son las actuaciones de grave riesgo, donde intervienen los padres, pero siempre escuchando al menor.",
    keyPoints: [
      "Ley 41/2002: los mayores de 16 años consienten por sí mismos («mayoría de edad sanitaria»).",
      "En actuaciones de grave riesgo, consienten los representantes, oída la opinión del menor.",
      "El menor maduro tiene derecho a la confidencialidad.",
    ],
  },
  {
    id: "mir-2026-165",
    university: "MIR (España)",
    examArea: "BIOÉTICA Y LEGISLACIÓN",
    topic: "LÍMITES DEL SECRETO PROFESIONAL",
    difficulty: "medium",
    tags: ["mir", "espana", "bioetica"],
    statement:
      "¿En cuál de las siguientes situaciones está justificado que el médico revele información de un paciente sin su consentimiento?",
    options: [
      { id: "A", label: "A", text: "Cuando un familiar cercano lo pide por preocupación sobre el estado de salud del paciente, si convive con él." },
      { id: "B", label: "B", text: "Ante una enfermedad de declaración obligatoria, un requerimiento judicial o un riesgo grave e inminente para terceros." },
      { id: "C", label: "C", text: "Cuando la empresa del paciente solicita el diagnóstico concreto que motiva su baja laboral para organizar su sustitución." },
      { id: "D", label: "D", text: "Nunca: el secreto profesional es absoluto y no admite ninguna excepción legal." },
    ],
    correctOptionId: "B",
    explanation:
      "El **secreto profesional** es un deber del médico, pero **no es absoluto**. Sus excepciones principales son: las **enfermedades de declaración obligatoria**, el **requerimiento judicial** (actuando como testigo o perito), la existencia de un **riesgo grave para terceros** que no se pueda evitar de otra forma, la **comunicación de lesiones** a la autoridad judicial (parte de lesiones) y la sospecha de **maltrato**. Incluso entonces se debe revelar **solo la información imprescindible**.\n\n**TRAMPA DEL EXAMEN:** Los **familiares** no tienen derecho a la información si el paciente capaz no lo autoriza. La **empresa** recibe la baja laboral, pero **sin el diagnóstico**.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., lo que el paciente le cuenta es suyo, no de su familia ni de su jefe. Solo la ley o un peligro serio para otros justifican romper el secreto, y aun así diga lo mínimo necesario. La confianza del paciente es la base de una buena medicina.",
    keyPoints: [
      "El secreto profesional no es absoluto: EDO, requerimiento judicial, riesgo grave para terceros, parte de lesiones, maltrato.",
      "Revelar solo la información imprescindible.",
      "Familiares y empresa no tienen derecho a la información clínica sin consentimiento del paciente capaz.",
    ],
  },
  {
    id: "mir-2026-166",
    university: "MIR (España)",
    examArea: "FARMACOLOGÍA",
    topic: "INTERACCIONES POR INHIBICIÓN DEL CITOCROMO CYP3A4",
    difficulty: "medium",
    tags: ["mir", "espana", "farmacologia"],
    statement:
      "Un paciente de 68 años en tratamiento con simvastatina 40 mg recibe claritromicina por una neumonía. A los pocos días presenta mialgias intensas, debilidad y orina oscura, con una CK de 25.000 U/l. ¿Cuál es el mecanismo más probable?",
    options: [
      { id: "A", label: "A", text: "Inhibición del CYP3A4 por la claritromicina, con aumento de las concentraciones de simvastatina y rabdomiólisis." },
      { id: "B", label: "B", text: "Inducción enzimática del CYP3A4 por la claritromicina, que reduce la acción de la simvastatina y provoca miopatía." },
      { id: "C", label: "C", text: "Miositis infecciosa causada por el mismo germen responsable de la neumonía adquirida en la comunidad." },
      { id: "D", label: "D", text: "Reacción alérgica de tipo I a la claritromicina con afectación muscular y elevación de la CK." },
    ],
    correctOptionId: "A",
    explanation:
      "La **claritromicina** (como la eritromicina, los azoles, algunos antirretrovirales potenciados o el zumo de pomelo) es un **inhibidor potente del CYP3A4**. La **simvastatina** (y la lovastatina y, en menor medida, la atorvastatina) se metaboliza por esta vía, por lo que sus concentraciones aumentan y se eleva el riesgo de **miopatía y rabdomiólisis**. En estos casos se debe **suspender temporalmente la estatina** o elegir un antibiótico sin esta interacción (por ejemplo, azitromicina). Las estatinas con menos interacciones por CYP3A4 son la pravastatina y la rosuvastatina.\n\n**TRAMPA DEL EXAMEN:** Los **inductores** (rifampicina, carbamazepina, fenitoína, hipérico) **disminuyen** las concentraciones de los fármacos metabolizados por CYP3A4, no las aumentan.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cada vez que prescriba claritromicina, mire la lista de medicación del paciente. Estatinas, anticoagulantes, inmunosupresores, antiarrítmicos... El inhibidor frena el metabolismo y el otro fármaco se acumula. Una interacción de libro con consecuencias muy reales.",
    keyPoints: [
      "Inhibidores de CYP3A4: claritromicina, eritromicina, azoles, ritonavir, zumo de pomelo.",
      "Simvastatina + inhibidor de CYP3A4 → miopatía y rabdomiólisis.",
      "Inductores (rifampicina, carbamazepina, fenitoína, hipérico) reducen las concentraciones.",
    ],
  },
  {
    id: "mir-2026-167",
    university: "MIR (España)",
    examArea: "FARMACOLOGÍA",
    topic: "SEMIVIDA DE ELIMINACIÓN Y ESTADO ESTACIONARIO",
    difficulty: "medium",
    tags: ["mir", "espana", "farmacologia"],
    statement:
      "Se inicia un fármaco por vía oral a dosis fijas cada 12 horas. Su semivida de eliminación es de 12 horas y su farmacocinética es lineal. ¿Cuánto tiempo, aproximadamente, tardará en alcanzarse el estado estacionario?",
    options: [
      { id: "A", label: "A", text: "12 horas (una sola semivida)." },
      { id: "B", label: "B", text: "24 horas (dos semividas del fármaco)." },
      { id: "C", label: "C", text: "Una semana, por tratarse de dosis fijas." },
      { id: "D", label: "D", text: "Entre 2 y 2,5 días (4-5 semividas)." },
    ],
    correctOptionId: "D",
    explanation:
      "En un fármaco con cinética lineal administrado a dosis fijas, el **estado estacionario** (equilibrio entre lo que entra y lo que se elimina) se alcanza tras **4-5 semividas**, **independientemente de la dosis y del intervalo**. Con una semivida de 12 horas, serían **48-60 horas**. De forma similar, tras suspender el fármaco, se elimina casi por completo en 4-5 semividas. Si se necesita alcanzar concentraciones eficaces antes, se usa una **dosis de carga**.\n\n**TRAMPA DEL EXAMEN:** Aumentar la dosis **no acelera** la llegada al estado estacionario: solo eleva la concentración que se alcanza. Lo que acorta el tiempo hasta concentraciones eficaces es la dosis de carga.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tras cada semivida el fármaco se acerca la mitad de lo que le falta al equilibrio: 50%, 75%, 87,5%, 94%, 97%. Por eso con 4-5 semividas se considera alcanzado. Útil para saber cuándo medir niveles o cuándo evaluar el efecto de un cambio de dosis.",
    keyPoints: [
      "Estado estacionario: se alcanza tras 4-5 semividas, independientemente de la dosis.",
      "Tras suspender un fármaco, se elimina casi por completo en 4-5 semividas.",
      "La dosis de carga permite alcanzar antes concentraciones eficaces.",
    ],
  },
  {
    id: "mir-2026-168",
    university: "MIR (España)",
    examArea: "FARMACOLOGÍA",
    topic: "ANTIHIPERTENSIVOS EN EL EMBARAZO",
    difficulty: "medium",
    tags: ["mir", "espana", "farmacologia"],
    statement:
      "Una mujer de 32 años con hipertensión arterial esencial, bien controlada con enalapril, acude porque está embarazada de 7 semanas. ¿Cuál es la actitud correcta con su tratamiento?",
    options: [
      { id: "A", label: "A", text: "Mantener el enalapril durante el embarazo, porque controla bien la presión arterial y cambiarlo la descompensaría." },
      { id: "B", label: "B", text: "Suspender el enalapril y sustituirlo por un antihipertensivo seguro en el embarazo, como labetalol o nifedipino." },
      { id: "C", label: "C", text: "Sustituir el enalapril por losartán, que tiene menos efectos adversos durante la gestación." },
      { id: "D", label: "D", text: "Suspender el tratamiento antihipertensivo durante el embarazo y controlar la presión arterial sin fármacos hasta el parto." },
    ],
    correctOptionId: "B",
    explanation:
      "Los **IECA** (enalapril) y los **ARA-II** (losartán) están **contraindicados en el embarazo**: en el segundo y tercer trimestre producen **fetopatía** (insuficiencia renal fetal, oligohidramnios, hipoplasia pulmonar, alteraciones craneales). Ante un embarazo, deben **sustituirse** por antihipertensivos seguros: **labetalol**, **nifedipino** o **metildopa**. La exposición accidental en el primer trimestre no justifica por sí sola la interrupción del embarazo, pero sí el cambio inmediato.\n\n**TRAMPA DEL EXAMEN:** Cambiar un IECA por un **ARA-II** mantiene el mismo riesgo. Suspender todo tratamiento en una hipertensa crónica expone a complicaciones maternas y fetales.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en toda mujer en edad fértil que tome IECA o ARA-II, hable de planificación del embarazo. Si se queda embarazada, cambie a labetalol o nifedipino. Y recuerde que la metildopa es segura, pero hoy se usa menos por sus efectos adversos.",
    keyPoints: [
      "IECA y ARA-II contraindicados en el embarazo (fetopatía renal, oligohidramnios).",
      "Antihipertensivos seguros: labetalol, nifedipino y metildopa.",
      "Planificar el cambio de tratamiento en mujeres en edad fértil.",
    ],
  },
  {
    id: "mir-2026-169",
    university: "MIR (España)",
    examArea: "INMUNOLOGÍA",
    topic: "REACCIÓN DE HIPERSENSIBILIDAD TIPO IV",
    difficulty: "easy",
    tags: ["mir", "espana", "inmunologia"],
    statement:
      "Una mujer presenta, 48 horas después de ponerse unos pendientes de bisutería, una lesión eccematosa pruriginosa en los lóbulos de las orejas. Las pruebas epicutáneas son positivas para el níquel. ¿Qué tipo de reacción de hipersensibilidad es?",
    options: [
      { id: "A", label: "A", text: "Tipo I, mediada por IgE." },
      { id: "B", label: "B", text: "Tipo II, citotóxica mediada por anticuerpos." },
      { id: "C", label: "C", text: "Tipo IV, retardada, mediada por linfocitos T." },
      { id: "D", label: "D", text: "Tipo III, por depósito de inmunocomplejos." },
    ],
    correctOptionId: "C",
    explanation:
      "La **dermatitis alérgica de contacto** es una **hipersensibilidad tipo IV** (retardada), mediada por **linfocitos T** sensibilizados, que aparece **24-72 horas** tras el contacto. Otros ejemplos son la **prueba de la tuberculina (Mantoux)**, el rechazo celular de trasplantes y algunas reacciones a fármacos. Se diagnostica con **pruebas epicutáneas** (parches).\n\n**TRAMPA DEL EXAMEN:** El **tipo I** (IgE, mastocitos) es inmediato: anafilaxia, urticaria aguda, asma alérgica. El **tipo II** es citotóxico (anemia hemolítica autoinmune, reacción transfusional). El **tipo III** se debe a inmunocomplejos (enfermedad del suero, glomerulonefritis postestreptocócica, lupus).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el reloj le da el tipo: minutos, tipo I; días, tipo IV. Los pendientes de bisutería, el reloj o el botón del pantalón son el clásico níquel. Tratamiento: evitar el alérgeno y corticoide tópico en el brote.",
    keyPoints: [
      "Tipo IV: retardada (24-72 h), mediada por linfocitos T: dermatitis de contacto, Mantoux.",
      "Tipo I: inmediata, IgE (anafilaxia); tipo II: citotóxica; tipo III: inmunocomplejos.",
      "Dermatitis de contacto: diagnóstico con pruebas epicutáneas.",
    ],
  },
  {
    id: "mir-2026-170",
    university: "MIR (España)",
    examArea: "INMUNOLOGÍA",
    topic: "DÉFICIT SELECTIVO DE IGA",
    difficulty: "medium",
    tags: ["mir", "espana", "inmunologia"],
    statement:
      "Un hombre de 30 años con sinusitis y bronquitis de repetición presenta una IgA sérica indetectable, con IgG e IgM normales. ¿Qué precaución es especialmente importante en este paciente?",
    options: [
      { id: "A", label: "A", text: "Riesgo de reacciones anafilácticas con transfusiones de hemoderivados que contengan IgA; usar productos lavados o de donantes con déficit de IgA." },
      { id: "B", label: "B", text: "Administrar inmunoglobulina intravenosa cada mes para reponer la IgA sérica deficitaria y prevenir las infecciones de repetición." },
      { id: "C", label: "C", text: "Contraindicación de las vacunas, tanto inactivadas como atenuadas, por el riesgo de infección grave y de reacción anafiláctica grave." },
      { id: "D", label: "D", text: "Trasplante de progenitores hematopoyéticos urgente, al tratarse de una inmunodeficiencia primaria grave con alto riesgo de mortalidad precoz." },
    ],
    correctOptionId: "A",
    explanation:
      "El **déficit selectivo de IgA** es la **inmunodeficiencia primaria más frecuente**. Muchos pacientes están asintomáticos; otros presentan **infecciones sinopulmonares y gastrointestinales** (giardiasis), y se asocia a **enfermedades autoinmunes**, **celiaquía** (con serología IgA falsamente negativa) y alergias. Algunos desarrollan **anticuerpos anti-IgA**, con riesgo de **reacciones anafilácticas** al recibir **hemoderivados** o **inmunoglobulinas** que contienen IgA.\n\n**TRAMPA DEL EXAMEN:** La **inmunoglobulina intravenosa no está indicada** para reponer la IgA (contiene sobre todo IgG y trazas de IgA que pueden provocar reacciones). Las vacunas inactivadas no están contraindicadas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el déficit de IgA es frecuente y a menudo silencioso, pero tiene dos detalles de examen: puede dar reacciones graves con transfusiones y falsea la serología de celiaquía basada en IgA. Recuérdelo al pedir anticuerpos antitransglutaminasa.",
    keyPoints: [
      "Déficit selectivo de IgA: la inmunodeficiencia primaria más frecuente.",
      "Infecciones sinopulmonares y digestivas, autoinmunidad y celiaquía (serología IgA falsamente negativa).",
      "Riesgo de anafilaxia con hemoderivados por anticuerpos anti-IgA; la IGIV no está indicada.",
    ],
  },
];
