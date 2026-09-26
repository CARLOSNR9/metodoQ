import type { TrainingQuestion } from "@/lib/questions/types";

export const MIR_2026_191_200_QUESTIONS: TrainingQuestion[] = [
  {
    id: "mir-2026-191",
    university: "MIR (España)",
    examArea: "ENDOCRINOLOGÍA",
    topic: "DIABETES TIPO 2 CON ENFERMEDAD CARDIOVASCULAR ESTABLECIDA",
    difficulty: "medium",
    tags: ["mir", "espana", "endocrinologia"],
    statement:
      "Un hombre de 62 años con diabetes tipo 2 y un infarto de miocardio previo está en tratamiento con metformina a dosis plenas y dieta. Su hemoglobina glicada es del 7,4% y el filtrado glomerular es normal. ¿Cuál es el siguiente paso terapéutico más adecuado?",
    options: [
      { id: "A", label: "A", text: "Añadir una sulfonilurea (glimepirida) por su bajo coste y su potente efecto sobre la hemoglobina glicada." },
      { id: "B", label: "B", text: "Suspender la metformina y comenzar insulina basal nocturna para intensificar el control glucémico del paciente." },
      { id: "C", label: "C", text: "Mantener el mismo tratamiento con metformina, ya que la hemoglobina glicada es casi normal y no hay complicaciones." },
      { id: "D", label: "D", text: "Añadir un agonista del receptor de GLP-1 o un inhibidor de SGLT2 con beneficio cardiovascular demostrado." },
    ],
    correctOptionId: "D",
    explanation:
      "En la **diabetes tipo 2** con **enfermedad cardiovascular aterosclerótica establecida**, **insuficiencia cardíaca** o **enfermedad renal crónica**, las guías recomiendan añadir un **agonista del receptor de GLP-1** (liraglutida, semaglutida, dulaglutida) o un **inhibidor de SGLT2** (empagliflozina, dapagliflozina) con **beneficio cardiovascular demostrado**, **con independencia de la hemoglobina glicada**. Los iSGLT2 se priorizan en la insuficiencia cardíaca y la enfermedad renal; los arGLP-1 reducen además el peso.\n\n**TRAMPA DEL EXAMEN:** Decidir solo por la HbA1c. En este paciente el objetivo no es solo la glucemia, sino reducir los eventos cardiovasculares. Las **sulfonilureas** producen hipoglucemias y aumento de peso, sin beneficio cardiovascular.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., hoy el tratamiento de la diabetes tipo 2 se elige mirando el corazón y el riñón, no solo el azúcar. Paciente con infarto previo: añada un fármaco que proteja el corazón aunque la glicada esté casi en objetivo.",
    keyPoints: [
      "DM2 con ECV establecida, IC o ERC: añadir arGLP-1 o iSGLT2 con beneficio CV, independientemente de la HbA1c.",
      "iSGLT2 prioritarios en IC y ERC; arGLP-1 además reducen el peso.",
      "Las sulfonilureas causan hipoglucemia y aumento de peso, sin beneficio cardiovascular.",
    ],
  },
  {
    id: "mir-2026-192",
    university: "MIR (España)",
    examArea: "HEMATOLOGÍA",
    topic: "ANEMIA FERROPÉNICA EN EL VARÓN ADULTO",
    difficulty: "easy",
    tags: ["mir", "espana", "hematologia"],
    statement:
      "Un hombre de 64 años presenta astenia. La analítica muestra hemoglobina de 9,8 g/dl, VCM de 72 fl y ferritina de 6 ng/ml. No refiere sangrados visibles ni síntomas digestivos. ¿Cuál es la actitud más adecuada, además de iniciar hierro oral?",
    options: [
      { id: "A", label: "A", text: "Estudio del tubo digestivo con gastroscopia y colonoscopia." },
      { id: "B", label: "B", text: "Ninguna prueba adicional: basta con reponer el hierro por vía oral." },
      { id: "C", label: "C", text: "Aspirado de médula ósea como primera prueba diagnóstica del paciente." },
      { id: "D", label: "D", text: "Electroforesis de hemoglobinas para descartar una talasemia minor." },
    ],
    correctOptionId: "A",
    explanation:
      "La **anemia ferropénica** (microcítica, con **ferritina baja**) en un **varón adulto** o en una **mujer posmenopáusica** obliga a buscar una **pérdida digestiva oculta**, y en particular a descartar un **cáncer colorrectal** o gástrico. Por ello se realiza **gastroscopia y colonoscopia**, además de valorar la **enfermedad celíaca** (serología) y otras causas de malabsorción. Se inicia **hierro oral**, y se reserva el intravenoso para intolerancia, malabsorción o necesidad de reposición rápida.\n\n**TRAMPA DEL EXAMEN:** Tratar la anemia sin buscar la causa puede retrasar el diagnóstico de un cáncer digestivo. En la **talasemia** la ferritina es normal o alta, con VCM muy bajo y hemoglobina poco descendida.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., un hombre adulto no tiene «anemia ferropénica sin más»: tiene hierro que se le está perdiendo por algún sitio, casi siempre por el tubo digestivo. Dele hierro, pero mándelo a endoscopia arriba y abajo.",
    keyPoints: [
      "Anemia ferropénica en varón adulto o mujer posmenopáusica: estudio digestivo (gastroscopia + colonoscopia).",
      "Descartar también enfermedad celíaca y otras causas de malabsorción.",
      "Talasemia: ferritina normal o alta, VCM muy bajo con hemoglobina poco descendida.",
    ],
  },
  {
    id: "mir-2026-193",
    university: "MIR (España)",
    examArea: "HEMATOLOGÍA",
    topic: "DIAGNÓSTICO DEL MIELOMA MÚLTIPLE",
    difficulty: "medium",
    tags: ["mir", "espana", "hematologia"],
    statement:
      "Un hombre de 70 años consulta por dolor lumbar persistente. La analítica muestra anemia normocítica, calcio de 11,8 mg/dl, creatinina de 2,1 mg/dl y proteínas totales elevadas con un pico monoclonal en el proteinograma. La radiografía muestra lesiones líticas en el cráneo. ¿Qué prueba confirma el diagnóstico?",
    options: [
      { id: "A", label: "A", text: "Gammagrafía ósea con tecnecio para confirmar las lesiones líticas del esqueleto, que es la prueba de imagen más sensible para detectarlas." },
      { id: "B", label: "B", text: "Determinación del PSA sérico y tacto rectal por la sospecha de metástasis óseas de un adenocarcinoma de próstata no diagnosticado." },
      { id: "C", label: "C", text: "Biopsia renal percutánea para estudiar la causa de la insuficiencia renal y de la proteinuria antes de cualquier otro estudio hematológico." },
      { id: "D", label: "D", text: "Aspirado o biopsia de médula ósea que demuestre ≥ 10% de células plasmáticas clonales, junto con la inmunofijación y las cadenas ligeras libres en suero." },
    ],
    correctOptionId: "D",
    explanation:
      "El **mieloma múltiple** se sospecha por los criterios **CRAB**: hiper**C**alcemia, insuficiencia **R**enal, **A**nemia y lesiones óseas líticas (**B**one), junto con un **componente monoclonal**. El diagnóstico requiere **≥ 10% de células plasmáticas clonales en la médula ósea** (o un plasmocitoma) y un evento definitorio (CRAB u otros biomarcadores). El estudio incluye **proteinograma**, **inmunofijación** en suero y orina, **cadenas ligeras libres** y pruebas de imagen (TC de baja dosis o PET-TC).\n\n**TRAMPA DEL EXAMEN:** La **gammagrafía ósea** puede ser **normal** en el mieloma porque las lesiones son puramente líticas, sin actividad osteoblástica. El PSA orienta a metástasis de próstata, que suelen ser blásticas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., anciano con dolor óseo, calcio alto, riñón alterado y anemia: piense en mieloma y pida un proteinograma. La confirmación está en la médula ósea. Y recuerde que la gammagrafía no ve bien estas lesiones.",
    keyPoints: [
      "Mieloma: CRAB (hipercalcemia, insuficiencia renal, anemia, lesiones líticas) + componente monoclonal.",
      "Diagnóstico: ≥ 10% de células plasmáticas clonales en médula ósea (o plasmocitoma) + evento definitorio.",
      "La gammagrafía ósea puede ser normal (lesiones puramente líticas); usar TC de baja dosis o PET-TC.",
    ],
  },
  {
    id: "mir-2026-194",
    university: "MIR (España)",
    examArea: "REUMATOLOGÍA",
    topic: "TRATAMIENTO INICIAL DE LA ARTRITIS REUMATOIDE",
    difficulty: "medium",
    tags: ["mir", "espana", "reumatologia"],
    statement:
      "Una mujer de 45 años presenta desde hace 3 meses dolor e inflamación simétrica de las articulaciones metacarpofalángicas e interfalángicas proximales de ambas manos, con rigidez matutina de más de una hora. El factor reumatoide y los anticuerpos anti-péptidos citrulinados son positivos. ¿Cuál es el tratamiento de inicio más adecuado?",
    options: [
      { id: "A", label: "A", text: "AINE en monoterapia durante un año antes de valorar otros tratamientos modificadores de la enfermedad." },
      { id: "B", label: "B", text: "Metotrexato de forma precoz (FAME sintético convencional), con corticoides a dosis bajas como puente si es necesario." },
      { id: "C", label: "C", text: "Un fármaco biológico anti-TNF como primera opción terapéutica en todos los casos de artritis reumatoide." },
      { id: "D", label: "D", text: "Corticoides a dosis altas de forma indefinida en monoterapia hasta el control completo de la inflamación." },
    ],
    correctOptionId: "B",
    explanation:
      "La **artritis reumatoide** se presenta como **poliartritis simétrica** de pequeñas articulaciones de manos (MCF, IFP) con **rigidez matutina prolongada**. Los **anticuerpos anti-CCP** son muy específicos y, junto con el factor reumatoide, indican **peor pronóstico**. El tratamiento debe iniciarse de forma **precoz** («ventana de oportunidad») con un **FAME sintético convencional**, de elección el **metotrexato** (con **ácido fólico**), pudiendo usar **corticoides a dosis bajas** durante un tiempo limitado como puente. Si no se alcanza el objetivo, se añaden **biológicos** o inhibidores de JAK.\n\n**TRAMPA DEL EXAMEN:** Los **AINE** alivian los síntomas pero **no frenan el daño articular**. Los **biológicos** no son la primera línea habitual. Los corticoides en monoterapia prolongada tienen muchos efectos adversos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en la artritis reumatoide el tiempo es articulación: cuanto antes empiece el metotrexato, menos erosiones. Trate con objetivo (remisión o baja actividad) y ajuste el tratamiento cada pocos meses si no lo alcanza.",
    keyPoints: [
      "AR: poliartritis simétrica de manos, rigidez matutina > 1 h; anti-CCP muy específicos.",
      "Tratamiento precoz con metotrexato (+ ácido fólico); corticoides a dosis bajas como puente.",
      "Si no se alcanza el objetivo: biológicos o inhibidores de JAK; los AINE no frenan el daño.",
    ],
  },
  {
    id: "mir-2026-195",
    university: "MIR (España)",
    examArea: "REUMATOLOGÍA",
    topic: "POLIMIALGIA REUMÁTICA",
    difficulty: "easy",
    tags: ["mir", "espana", "reumatologia"],
    statement:
      "Una mujer de 72 años refiere desde hace 6 semanas dolor y rigidez intensos en ambos hombros y caderas, peor por las mañanas, que le impiden peinarse y levantarse de la silla. La fuerza muscular es normal. La VSG es de 68 mm/h y la CK es normal. No tiene cefalea ni alteraciones visuales. ¿Cuál es el tratamiento?",
    options: [
      { id: "A", label: "A", text: "Prednisona a dosis bajas-moderadas (12,5-25 mg/día) con descenso lento durante meses." },
      { id: "B", label: "B", text: "Prednisona a dosis de 1 mg/kg/día con urgencia, por el riesgo inminente de ceguera irreversible." },
      { id: "C", label: "C", text: "Metotrexato en monoterapia como primera línea para evitar los efectos adversos de los corticoides." },
      { id: "D", label: "D", text: "AINE a demanda para el dolor y la rigidez de cinturas; no precisa corticoides." },
    ],
    correctOptionId: "A",
    explanation:
      "La **polimialgia reumática** afecta a **mayores de 50 años**, con **dolor y rigidez en las cinturas escapular y pelviana**, **VSG/PCR elevadas**, **fuerza conservada** y **CK normal**. Responde de forma **rápida y espectacular** a **prednisona a dosis bajas-moderadas** (12,5-25 mg/día), que se reduce **lentamente** durante un año o más. Hay que preguntar siempre por síntomas de **arteritis de células gigantes** (cefalea, claudicación mandibular, alteraciones visuales), que se asocia a ella y requiere dosis altas.\n\n**TRAMPA DEL EXAMEN:** Las **dosis altas (1 mg/kg)** son para la **arteritis de células gigantes**, no para la polimialgia aislada. La **CK normal** y la **fuerza conservada** diferencian la polimialgia de las miopatías inflamatorias.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., anciana que no puede peinarse ni levantarse de la silla por rigidez, con VSG alta y CK normal: polimialgia. Con poca prednisona mejora en días, y esa respuesta ayuda a confirmar el diagnóstico. Pero pregúntele siempre por la cabeza y los ojos.",
    keyPoints: [
      "Polimialgia reumática: > 50 años, dolor y rigidez de cinturas, VSG/PCR elevadas, fuerza y CK normales.",
      "Tratamiento: prednisona 12,5-25 mg/día con respuesta rápida y descenso lento.",
      "Descartar arteritis de células gigantes asociada (requiere dosis altas).",
    ],
  },
  {
    id: "mir-2026-196",
    university: "MIR (España)",
    examArea: "UROLOGÍA",
    topic: "HIPERPLASIA BENIGNA DE PRÓSTATA",
    difficulty: "easy",
    tags: ["mir", "espana", "urologia"],
    statement:
      "Un hombre de 64 años refiere chorro miccional débil, dificultad para iniciar la micción y nicturia de 3 veces por noche, con repercusión en su calidad de vida. El tacto rectal muestra una próstata aumentada de tamaño, lisa y elástica, estimada en 30 ml. El PSA y la función renal son normales. ¿Cuál es el tratamiento farmacológico inicial más adecuado?",
    options: [
      { id: "A", label: "A", text: "Resección transuretral de próstata como primera opción." },
      { id: "B", label: "B", text: "Antibióticos durante 4 semanas." },
      { id: "C", label: "C", text: "Inhibidor de la 5-alfa-reductasa en monoterapia." },
      { id: "D", label: "D", text: "Alfabloqueante (por ejemplo, tamsulosina)." },
    ],
    correctOptionId: "D",
    explanation:
      "La **hiperplasia benigna de próstata** produce síntomas del tracto urinario inferior de **vaciado** (chorro débil, dificultad para iniciar) y de **llenado** (nicturia, urgencia). Con síntomas **moderados** y repercusión en la calidad de vida, el tratamiento inicial es un **alfabloqueante** (tamsulosina, silodosina, alfuzosina), que mejora los síntomas en días. Los **inhibidores de la 5-alfa-reductasa** (finasterida, dutasterida) están indicados en **próstatas grandes (> 30-40 ml)**, reducen el volumen prostático y el riesgo de retención y cirugía, pero actúan en meses y **reducen el PSA a la mitad**. La **cirugía** se reserva para síntomas refractarios o complicaciones (retención de repetición, litiasis vesical, insuficiencia renal, hematuria recurrente).\n\n**TRAMPA DEL EXAMEN:** Operar como primera opción sin complicaciones. Olvidar que la finasterida y la dutasterida reducen el PSA, lo que debe tenerse en cuenta al interpretarlo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., próstata de tamaño moderado y síntomas molestos: alfabloqueante, que funciona rápido. Avise de la hipotensión ortostática y de la eyaculación retrógrada. Si la próstata es grande, añada un inhibidor de la 5-alfa-reductasa.",
    keyPoints: [
      "HBP con síntomas moderados: alfabloqueante (tamsulosina) como tratamiento inicial.",
      "Inhibidores de 5-alfa-reductasa en próstatas grandes; reducen el PSA a la mitad.",
      "Cirugía si hay síntomas refractarios o complicaciones (retención, litiasis, insuficiencia renal).",
    ],
  },
  {
    id: "mir-2026-197",
    university: "MIR (España)",
    examArea: "UROLOGÍA",
    topic: "SOSPECHA DE CÁNCER DE PRÓSTATA POR PSA ELEVADO",
    difficulty: "medium",
    tags: ["mir", "espana", "urologia"],
    statement:
      "Un hombre de 60 años, asintomático, presenta un PSA de 7,5 ng/ml confirmado en una segunda determinación. El tacto rectal es normal. ¿Cuál es el siguiente paso más adecuado según las recomendaciones actuales?",
    options: [
      { id: "A", label: "A", text: "Iniciar tratamiento hormonal de privación androgénica sin confirmación histológica del cáncer." },
      { id: "B", label: "B", text: "Gammagrafía ósea como primera prueba para descartar metástasis antes de cualquier otra exploración." },
      { id: "C", label: "C", text: "Resonancia magnética multiparamétrica de próstata antes de decidir la biopsia." },
      { id: "D", label: "D", text: "Prostatectomía radical directamente, sin necesidad de un estudio histológico previo de la próstata." },
    ],
    correctOptionId: "C",
    explanation:
      "Ante un **PSA elevado** y confirmado, las recomendaciones actuales indican realizar una **resonancia magnética multiparamétrica de próstata** antes de la biopsia. Permite **dirigir la biopsia** a las lesiones sospechosas (clasificación **PI-RADS**), mejorar la detección de cánceres **clínicamente significativos** y evitar biopsias innecesarias. El diagnóstico se confirma con la **biopsia**, y el grado se expresa con la escala de **Gleason/ISUP**.\n\n**TRAMPA DEL EXAMEN:** No se inicia ningún tratamiento oncológico sin **diagnóstico histológico**. La gammagrafía ósea forma parte del estudio de extensión en tumores de riesgo intermedio-alto ya diagnosticados.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el PSA no diagnostica el cáncer: le dice que hay que mirar mejor. Primero resonancia y, según lo que muestre, biopsia dirigida. Así se encuentran los tumores que importan y se evitan pinchazos innecesarios.",
    keyPoints: [
      "PSA elevado confirmado: resonancia multiparamétrica (PI-RADS) antes de la biopsia.",
      "La biopsia dirigida confirma el diagnóstico; grado según Gleason/ISUP.",
      "Ningún tratamiento oncológico sin diagnóstico histológico.",
    ],
  },
  {
    id: "mir-2026-198",
    university: "MIR (España)",
    examArea: "ONCOLOGÍA",
    topic: "CARCINOMA MICROCÍTICO DE PULMÓN Y SÍNDROMES PARANEOPLÁSICOS",
    difficulty: "medium",
    tags: ["mir", "espana", "oncologia"],
    statement:
      "Un fumador de 62 años presenta una masa pulmonar central con adenopatías mediastínicas voluminosas, hiponatremia euvolémica con osmolalidad urinaria inapropiadamente elevada y debilidad proximal que mejora con el ejercicio repetido. ¿Cuál es el tipo histológico más probable?",
    options: [
      { id: "A", label: "A", text: "Adenocarcinoma de pulmón periférico con mutación de EGFR." },
      { id: "B", label: "B", text: "Carcinoma de células grandes." },
      { id: "C", label: "C", text: "Tumor carcinoide típico de localización bronquial." },
      { id: "D", label: "D", text: "Carcinoma microcítico (de células pequeñas)." },
    ],
    correctOptionId: "D",
    explanation:
      "El **carcinoma microcítico de pulmón** es de **localización central**, está muy relacionado con el **tabaco**, crece **rápido** y suele diagnosticarse **diseminado**. Es el tumor pulmonar que más se asocia a **síndromes paraneoplásicos**: **SIADH** (hiponatremia euvolémica), **síndrome de Cushing ectópico** y el **síndrome miasténico de Eaton-Lambert** (debilidad proximal que **mejora con el ejercicio repetido**, por anticuerpos contra los canales de calcio). Se trata con **quimioterapia** (platino-etopósido) asociada a **inmunoterapia** y radioterapia según el estadio; la cirugía es excepcional.\n\n**TRAMPA DEL EXAMEN:** El **carcinoma epidermoide** se asocia típicamente a **hipercalcemia** por PTHrP. El **adenocarcinoma** es el más frecuente en conjunto (también en no fumadores) y suele ser periférico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando un cáncer de pulmón da síntomas «hormonales» o neurológicos a distancia, piense en el microcítico. Sodio bajo, Cushing o una debilidad que mejora al repetir el movimiento: todo apunta a las células pequeñas.",
    keyPoints: [
      "Carcinoma microcítico: central, tabaco, crecimiento rápido, diagnóstico en fase diseminada.",
      "Paraneoplásicos: SIADH, Cushing ectópico y Eaton-Lambert (debilidad que mejora con el ejercicio).",
      "Epidermoide: hipercalcemia por PTHrP; adenocarcinoma: el más frecuente, periférico.",
    ],
  },
  {
    id: "mir-2026-199",
    university: "MIR (España)",
    examArea: "ONCOLOGÍA",
    topic: "CÁNCER DE MAMA HER2 POSITIVO: TRASTUZUMAB",
    difficulty: "medium",
    tags: ["mir", "espana", "oncologia"],
    statement:
      "Una mujer de 50 años con un carcinoma ductal infiltrante de mama con sobreexpresión de HER2 va a iniciar tratamiento sistémico que incluye trastuzumab. ¿Qué prueba debe realizarse antes de iniciarlo y periódicamente durante el tratamiento?",
    options: [
      { id: "A", label: "A", text: "Ecocardiograma (o ventriculografía isotópica) para valorar la fracción de eyección del ventrículo izquierdo." },
      { id: "B", label: "B", text: "Audiometría seriada antes de cada ciclo para detectar de forma precoz la ototoxicidad acumulativa del tratamiento." },
      { id: "C", label: "C", text: "Espirometría con difusión de CO para detectar la toxicidad pulmonar del tratamiento." },
      { id: "D", label: "D", text: "Densitometría ósea por el riesgo de osteoporosis asociado al tratamiento oncológico." },
    ],
    correctOptionId: "A",
    explanation:
      "El **trastuzumab** es un anticuerpo monoclonal **anti-HER2** que ha mejorado de forma notable el pronóstico del **cáncer de mama HER2 positivo**. Su principal efecto adverso es la **cardiotoxicidad**, en forma de **disfunción ventricular izquierda** generalmente **reversible** (a diferencia de la de las antraciclinas, que es dosis dependiente e irreversible). Por ello se debe valorar la **fracción de eyección** con **ecocardiograma** antes de iniciarlo y de forma periódica durante el tratamiento.\n\n**TRAMPA DEL EXAMEN:** La **ototoxicidad** es propia del cisplatino; la **toxicidad pulmonar**, de la bleomicina; y la pérdida de **densidad ósea**, de los **inhibidores de la aromatasa**.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., trastuzumab y corazón van de la mano. Ecocardiograma basal y controles cada pocos meses. Si la fracción de eyección cae, se suspende, se trata y, con frecuencia, se recupera.",
    keyPoints: [
      "Cáncer de mama HER2+: trastuzumab (anti-HER2).",
      "Principal toxicidad: disfunción ventricular izquierda, generalmente reversible.",
      "Ecocardiograma antes y durante el tratamiento; antraciclinas: cardiotoxicidad dosis dependiente e irreversible.",
    ],
  },
  {
    id: "mir-2026-200",
    university: "MIR (España)",
    examArea: "MEDICINA DE URGENCIAS",
    topic: "REPOSICIÓN DE LÍQUIDOS EN EL GRAN QUEMADO",
    difficulty: "hard",
    tags: ["mir", "espana", "urgencias"],
    statement:
      "Un hombre de 70 kg sufre quemaduras de segundo grado profundo y tercer grado que afectan al 30% de su superficie corporal. Según la fórmula de Parkland, ¿qué volumen de cristaloides debe recibir en las primeras 8 horas desde la quemadura?",
    options: [
      { id: "A", label: "A", text: "8.400 ml." },
      { id: "B", label: "B", text: "4.200 ml." },
      { id: "C", label: "C", text: "2.100 ml." },
      { id: "D", label: "D", text: "1.050 ml." },
    ],
    correctOptionId: "B",
    explanation:
      "La **fórmula de Parkland** calcula la reposición de **cristaloides (Ringer lactato)** en las primeras **24 horas**: **4 ml × peso (kg) × % de superficie corporal quemada** (solo quemaduras de segundo y tercer grado). En este caso: 4 × 70 × 30 = **8.400 ml en 24 horas**, de los que **la mitad (4.200 ml) se administra en las primeras 8 horas** desde la quemadura (no desde la llegada al hospital) y la otra mitad en las 16 horas siguientes. El volumen se ajusta según la **diuresis** (objetivo 0,5 ml/kg/h en adultos). La extensión se estima con la **regla de los 9** de Wallace.\n\n**TRAMPA DEL EXAMEN:** 8.400 ml es el total de 24 horas. Las quemaduras de primer grado no se incluyen en el cálculo. El tiempo se cuenta desde el momento de la quemadura.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., 4 × kilos × porcentaje, la mitad en las primeras 8 horas. Y la fórmula es solo el punto de partida: lo que manda es la diuresis. Poco líquido lleva al shock; demasiado, a edemas y síndrome compartimental.",
    keyPoints: [
      "Parkland: 4 ml × kg × % SCQ (2.º y 3.er grado) de Ringer lactato en 24 h.",
      "La mitad en las primeras 8 h desde la quemadura; el resto en las 16 h siguientes.",
      "Ajustar según diuresis (0,5 ml/kg/h en adultos); extensión con la regla de los 9.",
    ],
  },
];
