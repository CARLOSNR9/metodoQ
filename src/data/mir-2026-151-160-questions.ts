import type { TrainingQuestion } from "@/lib/questions/types";

export const MIR_2026_151_160_QUESTIONS: TrainingQuestion[] = [
  {
    id: "mir-2026-151",
    university: "MIR (España)",
    examArea: "TRAUMATOLOGÍA",
    topic: "LUMBALGIA AGUDA MECÁNICA SIN SIGNOS DE ALARMA",
    difficulty: "easy",
    tags: ["mir", "espana", "traumatologia"],
    statement:
      "Un hombre de 38 años presenta dolor lumbar de 5 días de evolución tras levantar una caja pesada, sin irradiación por debajo de la rodilla, sin fiebre, pérdida de peso, antecedentes oncológicos ni alteraciones esfinterianas. La exploración neurológica es normal. ¿Cuál es la actitud más adecuada?",
    options: [
      { id: "A", label: "A", text: "Resonancia magnética lumbar urgente para descartar una hernia discal y valorar su tratamiento quirúrgico precoz, junto con reposo en cama hasta tener el resultado." },
      { id: "B", label: "B", text: "Analgesia (AINE o paracetamol), mantener la actividad habitual en la medida de lo posible y evitar el reposo en cama, sin pruebas de imagen." },
      { id: "C", label: "C", text: "Reposo absoluto en cama durante 2 semanas, con relajantes musculares y opioides, evitando cualquier actividad física hasta la desaparición completa del dolor lumbar." },
      { id: "D", label: "D", text: "Radiografía lumbar en dos proyecciones y derivación preferente a cirugía de columna para valorar la artrodesis, ya que el dolor lumbar agudo suele deberse a inestabilidad vertebral." },
    ],
    correctOptionId: "B",
    explanation:
      "La **lumbalgia aguda mecánica inespecífica** tiene un **pronóstico excelente** y suele resolverse en pocas semanas. En ausencia de **signos de alarma** («banderas rojas»: fiebre, pérdida de peso, antecedente de cáncer, traumatismo importante, déficit neurológico progresivo, síndrome de cola de caballo, inmunosupresión, edad avanzada con dolor de inicio reciente), **no están indicadas las pruebas de imagen**. El tratamiento es **analgesia** y **mantener la actividad**, porque el **reposo en cama retrasa la recuperación**.\n\n**TRAMPA DEL EXAMEN:** Pedir resonancia o radiografía sin signos de alarma: los hallazgos degenerativos son frecuentes en personas asintomáticas y pueden llevar a intervenciones innecesarias.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la mayoría de las lumbalgias se curan solas. Su trabajo es buscar las banderas rojas; si no aparecen, tranquilice al paciente, dele analgesia y anímelo a moverse. La cama es el peor tratamiento para una espalda.",
    keyPoints: [
      "Lumbalgia mecánica sin banderas rojas: sin pruebas de imagen.",
      "Tratamiento: analgesia y mantener la actividad; el reposo en cama retrasa la recuperación.",
      "Banderas rojas: fiebre, pérdida de peso, cáncer previo, déficit neurológico, cola de caballo, traumatismo importante.",
    ],
  },
  {
    id: "mir-2026-152",
    university: "MIR (España)",
    examArea: "OFTALMOLOGÍA",
    topic: "DESPRENDIMIENTO DE RETINA REGMATÓGENO",
    difficulty: "medium",
    tags: ["mir", "espana", "oftalmologia"],
    statement:
      "Un hombre de 58 años, miope magno, refiere desde ayer la aparición de numerosas «moscas volantes», destellos luminosos y, desde hace unas horas, una sombra como una cortina que avanza desde la parte superior del campo visual del ojo derecho. ¿Cuál es la actitud correcta?",
    options: [
      { id: "A", label: "A", text: "Tranquilizar al paciente: las moscas volantes son benignas y propias de la edad avanzada." },
      { id: "B", label: "B", text: "Colirio antibiótico y revisión programada en la consulta de oftalmología en un mes." },
      { id: "C", label: "C", text: "Corticoides sistémicos a dosis altas por sospecha de una uveítis posterior aguda." },
      { id: "D", label: "D", text: "Derivación urgente a oftalmología para exploración del fondo de ojo y tratamiento quirúrgico." },
    ],
    correctOptionId: "D",
    explanation:
      "La tríada de **miodesopsias** (moscas volantes) de aparición brusca, **fotopsias** (destellos) y **pérdida de campo visual en forma de cortina** es típica del **desprendimiento de retina regmatógeno**. El principal factor de riesgo es la **miopía** (también la cirugía de cataratas y los traumatismos). Es una **urgencia oftalmológica**: requiere **fondo de ojo con dilatación** y **tratamiento quirúrgico** (vitrectomía, cerclaje o retinopexia), con mejor pronóstico si la **mácula** aún no se ha desprendido.\n\n**TRAMPA DEL EXAMEN:** Unas moscas volantes aisladas y estables pueden ser un desprendimiento de vítreo posterior benigno, pero su aparición brusca con fotopsias o una sombra en el campo visual obliga a descartar un desgarro o desprendimiento de retina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., moscas, destellos y cortina: tres palabras que significan derivación urgente al oftalmólogo. El tiempo es mácula: si se opera antes de que la mácula se desprenda, la visión central se conserva.",
    keyPoints: [
      "Desprendimiento de retina: miodesopsias bruscas, fotopsias y pérdida de campo «en cortina».",
      "Factores de riesgo: miopía, cirugía de cataratas, traumatismos.",
      "Urgencia oftalmológica: fondo de ojo y cirugía; mejor pronóstico si la mácula está aplicada.",
    ],
  },
  {
    id: "mir-2026-153",
    university: "MIR (España)",
    examArea: "OFTALMOLOGÍA",
    topic: "OCLUSIÓN DE LA ARTERIA CENTRAL DE LA RETINA",
    difficulty: "hard",
    tags: ["mir", "espana", "oftalmologia"],
    statement:
      "Un hombre de 70 años, hipertenso y con fibrilación auricular, presenta pérdida brusca e indolora de la visión del ojo izquierdo hace una hora. El fondo de ojo muestra una retina blanquecina y edematosa con una «mancha rojo cereza» en la mácula. ¿Cuál es el diagnóstico y qué estudio no debe olvidarse?",
    options: [
      { id: "A", label: "A", text: "Oclusión de la arteria central de la retina; estudio etiológico urgente como un ictus (fuente embólica) y descartar arteritis de células gigantes (VSG, PCR)." },
      { id: "B", label: "B", text: "Glaucoma agudo de ángulo cerrado; medir la presión intraocular exclusivamente y tratar con hipotensores, sin estudio vascular." },
      { id: "C", label: "C", text: "Desprendimiento de retina regmatógeno; no precisa estudio sistémico, solo cirugía vitreorretiniana programada." },
      { id: "D", label: "D", text: "Neuritis óptica desmielinizante; resonancia magnética cerebral para descartar esclerosis múltiple y corticoides intravenosos, con estudio cardiovascular completo." },
    ],
    correctOptionId: "A",
    explanation:
      "La **oclusión de la arteria central de la retina** produce una **pérdida de visión brusca, indolora y profunda**. En el fondo de ojo la retina isquémica está **pálida y edematosa**, y la mácula (nutrida por la coroides) destaca como una **mancha rojo cereza**. La causa más frecuente es **embólica** (carótida, fibrilación auricular), por lo que se considera un **equivalente de ictus** y requiere **estudio vascular urgente**. En mayores de 50 años hay que **descartar la arteritis de células gigantes** (VSG y PCR), por el riesgo de afectación del otro ojo.\n\n**TRAMPA DEL EXAMEN:** El glaucoma agudo es **doloroso** con ojo rojo. La **neuritis óptica** es más frecuente en jóvenes, con dolor con los movimientos oculares y fondo de ojo normal o papilitis.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., un ojo que se apaga de golpe sin dolor y una mancha rojo cereza: la arteria central se ha tapado. Trate a ese paciente como un ictus: busque el émbolo en el corazón y las carótidas. Y en una persona mayor pida VSG y PCR el mismo día.",
    keyPoints: [
      "Oclusión de la arteria central de la retina: pérdida brusca e indolora; retina pálida con mancha rojo cereza.",
      "Causa embólica frecuente: estudio urgente como un ictus (FA, carótidas).",
      "En mayores de 50 años, descartar arteritis de células gigantes (VSG, PCR).",
    ],
  },
  {
    id: "mir-2026-154",
    university: "MIR (España)",
    examArea: "OFTALMOLOGÍA",
    topic: "UVEÍTIS ANTERIOR AGUDA",
    difficulty: "medium",
    tags: ["mir", "espana", "oftalmologia"],
    statement:
      "Un hombre de 32 años con espondilitis anquilosante HLA-B27 positivo presenta ojo rojo derecho doloroso, fotofobia y visión borrosa. La exploración muestra inyección ciliar (periquerática), pupila en miosis y células en la cámara anterior. ¿Cuál es el tratamiento?",
    options: [
      { id: "A", label: "A", text: "Colirio antibiótico de amplio espectro." },
      { id: "B", label: "B", text: "Lágrimas artificiales y revisión en 2 semanas." },
      { id: "C", label: "C", text: "Corticoides tópicos y colirio ciclopléjico." },
      { id: "D", label: "D", text: "Acetazolamida y manitol intravenosos." },
    ],
    correctOptionId: "C",
    explanation:
      "La **uveítis anterior aguda** cursa con **ojo rojo doloroso**, **fotofobia**, **inyección ciliar**, **miosis** y **células y flare en la cámara anterior**. Se asocia al **HLA-B27** y a las **espondiloartropatías**. El tratamiento es **corticoides tópicos** (para la inflamación) y **ciclopléjicos** (alivian el dolor por espasmo ciliar y **evitan las sinequias** posteriores). Debe ser valorada por oftalmología.\n\n**TRAMPA DEL EXAMEN:** La **conjuntivitis** produce inyección conjuntival, secreción, sin dolor intenso ni alteración pupilar, y no requiere corticoides. El **glaucoma agudo** cursa con **midriasis media arreactiva**, presión intraocular muy elevada y córnea edematosa (acetazolamida y manitol).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., para el ojo rojo mire la pupila: pequeña en la uveítis, en midriasis media en el glaucoma agudo y normal en la conjuntivitis. En un paciente con espondilitis y ojo rojo con fotofobia, piense en uveítis anterior: corticoides tópicos y ciclopléjico, y derivación a oftalmología.",
    keyPoints: [
      "Uveítis anterior: ojo rojo doloroso, fotofobia, inyección ciliar, miosis, células en cámara anterior.",
      "Asociada a HLA-B27 y espondiloartropatías.",
      "Tratamiento: corticoides tópicos + ciclopléjicos (evitan sinequias y alivian el dolor).",
    ],
  },
  {
    id: "mir-2026-155",
    university: "MIR (España)",
    examArea: "OFTALMOLOGÍA",
    topic: "CRIBADO DE RETINOPATÍA DIABÉTICA",
    difficulty: "easy",
    tags: ["mir", "espana", "oftalmologia"],
    statement:
      "Un hombre de 55 años acaba de ser diagnosticado de diabetes mellitus tipo 2. No refiere síntomas visuales. ¿Cuándo debe realizarse el primer examen de fondo de ojo?",
    options: [
      { id: "A", label: "A", text: "A los 5 años del diagnóstico." },
      { id: "B", label: "B", text: "En el momento del diagnóstico." },
      { id: "C", label: "C", text: "Solo si aparece pérdida de agudeza visual." },
      { id: "D", label: "D", text: "Cuando la hemoglobina glicada supere el 9%." },
    ],
    correctOptionId: "B",
    explanation:
      "En la **diabetes tipo 2** el **primer fondo de ojo** debe hacerse **en el momento del diagnóstico**, porque la enfermedad suele llevar años evolucionando sin diagnosticar y puede haber retinopatía ya establecida. En la **diabetes tipo 1**, el cribado se inicia a los **5 años del diagnóstico** (o en la pubertad). Después, las revisiones se repiten cada **1-2 años** si no hay retinopatía, y con mayor frecuencia si la hay. La retinografía no midriática con lectura por especialistas es una herramienta de cribado eficaz.\n\n**TRAMPA DEL EXAMEN:** Aplicar a la diabetes tipo 2 el esquema de la tipo 1. La retinopatía diabética es **asintomática** hasta fases avanzadas (edema macular, hemorragia vítrea), por eso se criba.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el diabético tipo 2 llega a la consulta con años de hiperglucemia a sus espaldas, así que mire el fondo de ojo desde el primer día. Al tipo 1 lo conocemos desde el principio de su enfermedad, por eso podemos esperar unos años.",
    keyPoints: [
      "DM tipo 2: primer fondo de ojo en el momento del diagnóstico.",
      "DM tipo 1: cribado a partir de los 5 años del diagnóstico.",
      "La retinopatía diabética es asintomática hasta fases avanzadas: cribado periódico cada 1-2 años.",
    ],
  },
  {
    id: "mir-2026-156",
    university: "MIR (España)",
    examArea: "OTORRINOLARINGOLOGÍA",
    topic: "OTITIS MEDIA AGUDA EN EL NIÑO",
    difficulty: "easy",
    tags: ["mir", "espana", "otorrinolaringologia"],
    statement:
      "Un niño de 18 meses presenta fiebre de 39 °C, irritabilidad y otalgia de 24 horas. La otoscopia muestra ambos tímpanos abombados y eritematosos. No tiene alergias. ¿Cuál es el tratamiento más adecuado?",
    options: [
      { id: "A", label: "A", text: "Gotas óticas de ciprofloxacino durante 7 días en el oído afectado." },
      { id: "B", label: "B", text: "Azitromicina oral durante 3 días como primera elección antibiótica." },
      { id: "C", label: "C", text: "Solo observación durante 7 días, sin analgesia ni antibióticos." },
      { id: "D", label: "D", text: "Amoxicilina oral a dosis altas (80-90 mg/kg/día) y analgesia." },
    ],
    correctOptionId: "D",
    explanation:
      "La **otitis media aguda** se diagnostica por la **otalgia** (o equivalentes en lactantes) y el **tímpano abombado**. En **menores de 2 años con otitis bilateral** o en niños con **síntomas intensos** (fiebre ≥ 39 °C, otalgia intensa) está indicado el **tratamiento antibiótico**: **amoxicilina a dosis altas** (80-90 mg/kg/día), por la posible resistencia intermedia del neumococo, junto con **analgesia**. En niños mayores de 2 años con síntomas leves puede plantearse la **observación** con analgesia y reevaluación.\n\n**TRAMPA DEL EXAMEN:** Las gotas óticas se usan en la otitis externa o con perforación/drenajes. Los **macrólidos** se reservan para alergias a betalactámicos. La observación no es adecuada en un menor de 2 años con otitis bilateral y fiebre alta.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en otitis la edad y la gravedad deciden. Lactante con otitis bilateral y fiebre alta: amoxicilina a dosis altas. Niño mayor con molestias leves: analgesia y vigilancia. Y nunca olvide el analgésico: el dolor es lo que más sufre el niño.",
    keyPoints: [
      "OMA: otalgia + tímpano abombado.",
      "Antibiótico en < 2 años con OMA bilateral o síntomas intensos: amoxicilina 80-90 mg/kg/día.",
      "En > 2 años con síntomas leves: puede observarse con analgesia; macrólidos solo si alergia.",
    ],
  },
  {
    id: "mir-2026-157",
    university: "MIR (España)",
    examArea: "OTORRINOLARINGOLOGÍA",
    topic: "PARÁLISIS FACIAL PERIFÉRICA IDIOPÁTICA",
    difficulty: "medium",
    tags: ["mir", "espana", "otorrinolaringologia"],
    statement:
      "Una mujer de 40 años se despierta con la hemicara derecha paralizada: no puede cerrar el ojo, arrugar la frente ni elevar la comisura bucal derecha. No hay vesículas en el pabellón auricular ni otros déficits neurológicos. ¿Cuál es el tratamiento de elección?",
    options: [
      { id: "A", label: "A", text: "Corticoides orales iniciados en las primeras 72 horas y protección ocular (lágrimas artificiales, oclusión nocturna)." },
      { id: "B", label: "B", text: "Descompresión quirúrgica urgente del nervio facial en su trayecto intratemporal, para evitar secuelas permanentes." },
      { id: "C", label: "C", text: "Trombolisis intravenosa por sospecha de ictus isquémico, ya que la parálisis facial es de instauración brusca." },
      { id: "D", label: "D", text: "Aciclovir intravenoso en monoterapia a dosis altas, ya que la causa es siempre el virus herpes simple." },
    ],
    correctOptionId: "A",
    explanation:
      "Una **parálisis facial que afecta a toda la hemicara, incluida la frente**, es **periférica** (lesión del nervio facial). Sin otras causas identificables (vesículas del síndrome de **Ramsay Hunt**, otitis, tumores, traumatismos), se trata de una **parálisis de Bell**. El tratamiento es con **corticoides orales** iniciados en las **primeras 72 horas**, que mejoran la recuperación, y **protección ocular** para evitar la queratitis por exposición. La mayoría se recupera en semanas o meses.\n\n**TRAMPA DEL EXAMEN:** La **parálisis facial central** (ictus) **respeta la musculatura de la frente**, por su inervación bilateral; aquí la frente está afectada. Los antivirales en monoterapia no están indicados; se reservan asociados a corticoides en casos graves o en el Ramsay Hunt.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., pídale al paciente que arrugue la frente: si no puede, la parálisis es periférica. Corticoides pronto y cuide el ojo, porque el paciente no parpadea y la córnea se seca. Y busque vesículas en la oreja antes de etiquetarla como Bell.",
    keyPoints: [
      "Parálisis facial periférica: afecta a toda la hemicara, incluida la frente; la central respeta la frente.",
      "Parálisis de Bell: corticoides orales en las primeras 72 h + protección ocular.",
      "Vesículas en el pabellón auricular sugieren síndrome de Ramsay Hunt (VVZ).",
    ],
  },
  {
    id: "mir-2026-158",
    university: "MIR (España)",
    examArea: "OTORRINOLARINGOLOGÍA",
    topic: "VÉRTIGO POSICIONAL PAROXÍSTICO BENIGNO",
    difficulty: "medium",
    tags: ["mir", "espana", "otorrinolaringologia"],
    statement:
      "Una mujer de 62 años presenta crisis de vértigo de segundos de duración al girarse en la cama o al mirar hacia arriba, sin hipoacusia ni acúfenos. La maniobra de Dix-Hallpike hacia la derecha provoca, tras una breve latencia, un nistagmo torsional agotable. ¿Cuál es el tratamiento de elección?",
    options: [
      { id: "A", label: "A", text: "Sedantes vestibulares de forma prolongada (sulpirida o betahistina)." },
      { id: "B", label: "B", text: "Resonancia magnética cerebral urgente para descartar un ictus." },
      { id: "C", label: "C", text: "Maniobra de reposición de partículas (maniobra de Epley)." },
      { id: "D", label: "D", text: "Corticoides intratimpánicos por sospecha de enfermedad de Ménière." },
    ],
    correctOptionId: "C",
    explanation:
      "El **vértigo posicional paroxístico benigno (VPPB)** es la causa más frecuente de vértigo periférico: crisis **breves (segundos)** desencadenadas por **cambios de posición de la cabeza**, sin síntomas auditivos. Se debe a otoconias desplazadas, generalmente al **conducto semicircular posterior**. La maniobra de **Dix-Hallpike** provoca un **nistagmo con latencia, torsional, agotable y fatigable**. El tratamiento es la **maniobra de reposición de partículas de Epley**, muy eficaz.\n\n**TRAMPA DEL EXAMEN:** Los **sedantes vestibulares** prolongados retrasan la compensación central y no tratan la causa. Un nistagmo **sin latencia, no agotable, vertical puro** o con otros signos neurológicos sugiere **origen central** y sí requiere neuroimagen.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., vértigo de segundos al darse la vuelta en la cama: VPPB. Confírmelo con el Dix-Hallpike y trátelo con Epley en la misma consulta. Es de las pocas cosas en medicina que se curan en cinco minutos con las manos.",
    keyPoints: [
      "VPPB: vértigo de segundos con cambios posturales, sin hipoacusia ni acúfenos.",
      "Dix-Hallpike: nistagmo con latencia, torsional y agotable (conducto posterior).",
      "Tratamiento: maniobra de Epley; los sedantes vestibulares no están indicados de forma prolongada.",
    ],
  },
  {
    id: "mir-2026-159",
    university: "MIR (España)",
    examArea: "DERMATOLOGÍA",
    topic: "LESIÓN PIGMENTADA SOSPECHOSA DE MELANOMA",
    difficulty: "medium",
    tags: ["mir", "espana", "dermatologia"],
    statement:
      "Una mujer de 45 años consulta por un nevus en la espalda que ha crecido en los últimos meses. Mide 9 mm, es asimétrico, de bordes irregulares y con varios tonos de marrón y negro. ¿Cuál es la actitud más adecuada?",
    options: [
      { id: "A", label: "A", text: "Crioterapia de la lesión pigmentada con nitrógeno líquido, sin estudio histológico previo." },
      { id: "B", label: "B", text: "Extirpación completa de la lesión con un margen estrecho (biopsia escisional) para estudio histológico." },
      { id: "C", label: "C", text: "Biopsia por afeitado superficial de la parte más oscura de la lesión para un diagnóstico rápido y cómodo." },
      { id: "D", label: "D", text: "Control fotográfico y dermatoscópico de la lesión en 12 meses, sin extirparla." },
    ],
    correctOptionId: "B",
    explanation:
      "La lesión cumple varios criterios **ABCDE** de sospecha de **melanoma**: **A**simetría, **B**ordes irregulares, **C**olor heterogéneo, **D**iámetro > 6 mm y **E**volución (crecimiento). Ante la sospecha, se realiza una **biopsia escisional**: **extirpación completa con margen estrecho (1-3 mm)**, que permite medir el **índice de Breslow** (espesor), el principal factor pronóstico. Después se amplían los márgenes según el Breslow y se valora la biopsia del ganglio centinela.\n\n**TRAMPA DEL EXAMEN:** La **crioterapia** destruye la lesión sin estudio histológico. La **biopsia por afeitado** o parcial impide medir correctamente el Breslow. Vigilar un año una lesión con estos criterios retrasa el diagnóstico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., un lunar que cambia es un lunar que se extirpa. Quítelo entero, con un margen pequeño, y deje que el patólogo mida el Breslow: de ese número depende todo lo que viene después.",
    keyPoints: [
      "Criterios ABCDE: Asimetría, Bordes, Color, Diámetro > 6 mm, Evolución.",
      "Sospecha de melanoma: biopsia escisional completa con margen estrecho (1-3 mm).",
      "Índice de Breslow: principal factor pronóstico; guía la ampliación de márgenes y el ganglio centinela.",
    ],
  },
  {
    id: "mir-2026-160",
    university: "MIR (España)",
    examArea: "DERMATOLOGÍA",
    topic: "PSORIASIS EN PLACAS MODERADA-GRAVE",
    difficulty: "medium",
    tags: ["mir", "espana", "dermatologia"],
    statement:
      "Un hombre de 35 años tiene psoriasis en placas que afecta al 25% de la superficie corporal, con gran impacto en su calidad de vida, pese al tratamiento tópico correcto con corticoides y análogos de la vitamina D. No tiene comorbilidades relevantes. ¿Cuál es el siguiente escalón terapéutico más adecuado?",
    options: [
      { id: "A", label: "A", text: "Corticoides orales a dosis altas de forma prolongada hasta el blanqueamiento completo de las placas, con retirada progresiva." },
      { id: "B", label: "B", text: "Antibióticos orales (tetraciclinas) durante 3 meses por sospecha de sobreinfección estreptocócica de las placas." },
      { id: "C", label: "C", text: "Aumentar la potencia del corticoide tópico y aplicarlo en oclusión en todo el cuerpo de forma continuada durante varios meses, sin necesidad de tratamiento sistémico." },
      { id: "D", label: "D", text: "Fototerapia o tratamiento sistémico convencional (por ejemplo, metotrexato), reservando los biológicos si fracasan o están contraindicados." },
    ],
    correctOptionId: "D",
    explanation:
      "La **psoriasis moderada-grave** (por ejemplo, **superficie afectada > 10%**, PASI alto o gran impacto en la calidad de vida) que no responde al tratamiento tópico requiere **fototerapia** (UVB de banda estrecha) o **tratamiento sistémico convencional**: **metotrexato**, ciclosporina, acitretina o apremilast. Si fracasan, no se toleran o están contraindicados, se indican los **fármacos biológicos** (anti-TNF, anti-IL-17, anti-IL-23, anti-IL-12/23). La psoriasis se asocia a **artritis psoriásica** y a **síndrome metabólico**, que deben buscarse.\n\n**TRAMPA DEL EXAMEN:** Los **corticoides sistémicos** están **contraindicados** en la psoriasis por el riesgo de **rebote** y de formas pustulosas o eritrodérmicas al retirarlos. Aplicar corticoides potentes en oclusión en todo el cuerpo produce absorción sistémica y atrofia cutánea.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en psoriasis nunca corticoides por vía oral: al retirarlos, la enfermedad puede volver peor que antes. Escale con orden: tópicos, luego fototerapia o sistémicos clásicos y, si no funcionan, biológicos. Y pregunte por las articulaciones y el riesgo cardiovascular.",
    keyPoints: [
      "Psoriasis moderada-grave: fototerapia o sistémicos convencionales (metotrexato, ciclosporina, acitretina, apremilast).",
      "Biológicos si fracasan, no se toleran o están contraindicados los convencionales.",
      "Evitar corticoides sistémicos (rebote, psoriasis pustulosa o eritrodérmica).",
    ],
  },
];
