import type { TrainingQuestion } from "@/lib/questions/types";

export const UMNG_CONV_ED5_01_10_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed5-01",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "ANATOMÍA QUIRÚRGICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed5"],
    statement: "Un hombre de 65 años acude a urgencias por referir un dolor intenso en la región inguinal derecha que inició hace 48 horas. El paciente es portador de una hernia inguinal no reductible de años de evolución. Al examen físico, se evidencia un abultamiento en la ingle derecha, eritematoso, caliente y exquisitamente doloroso. Se asume el diagnóstico de una hernia inguinal estrangulada y se lleva de inmediato a laparotomía/exploración inguinal. Al abrir el saco herniario, el cirujano no encuentra un asa de intestino delgado isquémica común; en su lugar, encuentra que el único órgano contenido dentro del saco herniario es un Apéndice Cecal francamente gangrenoso y perforado, bañado en pus. Teniendo en cuenta los epónimos quirúrgicos anatómicos que las universidades adoran evaluar, ¿cuál es el nombre de esta hernia específica?",
    options: [
      { id: "A", label: "A", text: "Hernia de Richter." },
      { id: "B", label: "B", text: "Hernia de Littre." },
      { id: "C", label: "C", text: "Hernia de Amyand." },
      { id: "D", label: "D", text: "Hernia de Garengeot." }
    ],
    correctOptionId: "C",
    explanation: "El epónimo de Hernia de Amyand se define exclusivamente como la presencia de un Apéndice Cecal (inflamado o sano) dentro del saco de una Hernia INGUINAL. Ocurre en menos del 1% de las hernias. El paciente debuta como si tuviera una hernia estrangulada normal, pero en realidad es una apendicitis que ocurrió dentro de los testículos/ingle por la migración del órgano. El tratamiento requiere Apendicectomía a través del defecto inguinal y reparación de la hernia (usualmente SIN malla sintética si hay pus, para evitar infección de la prótesis).\n\n**TRAMPA DEL EXAMEN:** Amyand vs De Garengeot: El estudiante sabe que apéndice en hernia tiene un nombre raro. Apéndice en Hernia Inguinal = Amyand. Apéndice en Hernia Femoral = De Garengeot.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando entras a operar una hernia dura y roja, te preparas mentalmente para cortar y pegar un pedazo de intestino delgado podrido. Imagina la sorpresa del cirujano al abrir el saco blanco perlescente y encontrarse con el \"gusanito\" del apéndice nadando en pus, muy lejos de su casa habitual. Como el ciego es móvil, a este abuelo se le escurrió el apéndice por el anillo inguinal hace años. Un buen día, un pedazo de heces lo tapó, y al abuelo le dio apendicitis dentro de la región inguinal. Córtalo desde la base, lava con litros de suero la ingle, y cierra el hueco usando solo los tendones del paciente (Técnica de Bassini o Shouldice); si le pones una malla de plástico a esa sopa de bacterias, te hará un rechazo infeccioso garantizado el mes que viene.",
    keyPoints: [
      "Contenidos Herniarios Epónimos:",
      "Amyand: Apéndice en hernia Inguinal.",
      "Littre: Divertículo de Meckel en el saco.",
      "Richter: Solo borde antimesentérico pellizcado (isquemia sin obstrucción total).",
      "Pantalón: Hernia inguinal directa e indirecta simultáneas (a caballo sobre los vasos epigástricos)."
    ]
  },
  {
    id: "umng-conv-ed5-02",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "INFECTOLOGÍA Y HEMATOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed5"],
    statement: "Un lactante de 4 meses, que no ha recibido vacunas debido a creencias antivacunas de sus padres, es traído a urgencias severamente agotado. La madre refiere que lleva 2 semanas tosiendo, pero en los últimos días la tos se ha vuelto aterradora: \"tose 10 a 15 veces seguidas sin parar, se pone azul (cianótico) por falta de aire, y al terminar el ataque coge aire haciendo un sonido silbante profundo como el canto de un gallo, tras lo cual vomita la leche\". El niño no ha tenido fiebre significativa. Usted solicita un Cuadro Hemático de urgencia que reporta un hallazgo alarmante: Leucocitos totales de 65.000 cél/mm³ (Extremadamente altos), con un 85% de Linfocitos maduros. Las plaquetas y la hemoglobina son normales. Ante la sospecha de la madre de que su hijo tiene una \"leucemia\", ¿cuál es su diagnóstico etiológico infeccioso y cómo explica esta reacción en la sangre?",
    options: [
      { id: "A", label: "A", text: "Leucemia Linfoblástica Aguda / La infiltración de la médula ósea y el pulmón causa la disnea." },
      { id: "B", label: "B", text: "Infección por el Virus Sincitial Respiratorio (VSR) / Bronquiolitis severa con reacción linfocítica viral aguda." },
      { id: "C", label: "C", text: "Infección por Bordetella pertussis / La Toxina Pertussis inhibe la migración de linfocitos hacia los tejidos, dejándolos atrapados en el torrente sanguíneo." },
      { id: "D", label: "D", text: "Neumonía Atípica por Chlamydia trachomatis / El síndrome de tos emetizante en el lactante genera éstasis leucocitaria venosa." }
    ],
    correctOptionId: "C",
    explanation: "La Tos Ferina (Infección por Bordetella pertussis) es una bacteria altamente contagiosa prevenida por la vacuna DPT. Tiene una fase paroxística que es un infierno para el bebé: no puede respirar porque tose en ráfagas (hasta ponerse morado) y el esfuerzo hace que vomite la comida. Al tomar aire hace el famoso \"gallo inspiratorio\" (whoop). Pero la Pista de Oro del Examen es la trampa hematológica: La bacteria produce la Toxina Pertussis, la cual inactiva los receptores de quimiocinas de los glóbulos blancos. Los linfocitos se siguen fabricando en la médula ósea y salen a la sangre, pero \"pierden el GPS\"; no pueden salirse de los vasos sanguíneos hacia los tejidos. Entonces se acumulan y se acumulan en la sangre circulante hasta llegar a números espantosos (60.000 a 100.000), simulando una Leucemia (Reacción Leucemoide Linfocítica). Esto es tan denso que puede causar hiperviscosidad y falla cardíaca derecha. El tratamiento es dar Macrólidos (Azitromicina o Claritromicina) para frenar el contagio, aunque no alivien la tos instantáneamente porque la toxina ya hizo daño.\n\n**TRAMPA DEL EXAMEN:** La trampa del cáncer: Te ponen un niño tosiendo y un hemograma con 70.000 blancos. El estudiante en pánico marca Leucemia. Siempre lee la fórmula diferencial: si los linfocitos son maduros y la tos tiene \"gallo\" y vómito, es Bordetella. La toxina los dejó ciegos circulando en la sangre.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ver toser a un niño con Tos Ferina es desesperante; sientes que se va a morir asfixiado frente a ti. La bacteria se pegó a los cilios de su tráquea y los paralizó soltando su toxina. Pero la toxina hizo algo más malévolo: entró a la sangre y \"borró\" los mapas de los glóbulos blancos. Los linfocitos del niño, incapaces de encontrar la salida hacia los tejidos para combatir, se quedaron dando vueltas en la sangre como carros en una rotonda cerrada, subiendo el conteo a 65 mil células. No asustes a la mamá diciéndole que su hijo tiene cáncer; mándala a aislar al bebé, dale su macrólido, y reza para que la sangre no se vuelva tan espesa que le tapone el corazón derecho (Cor Pulmonale). Y por Dios, vacunen a sus hijos.",
    keyPoints: [
      "Tos Paroxística + Cianosis + Gallo inspiratorio + Vómito post-tusivo = Tos Ferina (Bordetella pertussis).",
      "Laboratorio Patognomónico (El terror del pediatra): Leucocitosis Extrema (Ej. 60.000) con LINFOCITOSIS ABSOLUTA (Reacción leucemoide).",
      "Tratamiento: Macrólidos (Azitromicina)."
    ]
  },
  {
    id: "umng-conv-ed5-03",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed5"],
    statement: "Un paciente masculino de 75 años, con antecedente de Falla Cardíaca con fracción de eyección reducida (FEVI 30%) y Fibrilación Auricular crónica, acude a urgencias quejándose de náuseas severas, dos episodios eméticos, anorexia (pérdida de apetito) y una notable confusión mental. Al interrogarlo, el abuelo reporta un síntoma visual muy peculiar: \"Doctor, desde ayer veo que los focos de luz de la casa tienen como unos halos o aros de color amarillo-verdoso brillantes a su alrededor\". Sus medicamentos diarios son Enalapril, Espironolactona, Furosemida y un medicamento inotrópico que toma desde hace años. Al realizar el Electrocardiograma (ECG), usted evidencia la presencia de múltiples Contracciones Ventriculares Prematuras (Extrasístoles) y un Infradesnivel del segmento ST en forma cóncava, asimilando una \"cubeta\" o \"bigote de Salvador Dalí\". Los laboratorios revelan un Potasio sérico de 2.8 mEq/L (Hipokalemia). ¿Cuál es la intoxicación farmacológica que padece, y cómo contribuyó el diurético a precipitar este cuadro mortal?",
    options: [
      { id: "A", label: "A", text: "Intoxicación por Amiodarona / La Furosemida causó fibrosis pulmonar e hipotiroidismo simultáneo." },
      { id: "B", label: "B", text: "Intoxicación por Digoxina / La Furosemida causó hipokalemia, lo que aumenta la unión y toxicidad del fármaco al dejar \"vacíos\" los receptores de la bomba Na+/K+ ATPasa." },
      { id: "C", label: "C", text: "Intoxicación por Espironolactona / Causó alcalosis metabólica que precipitó toxicidad visual retiniana directa." },
      { id: "D", label: "D", text: "Intoxicación por Quinidina / La diuresis causó un cinconismo letal con elongación del QT." }
    ],
    correctOptionId: "B",
    explanation: "La Digoxina es un medicamento viejo usado para mejorar la fuerza del corazón (inotrópico positivo) y frenar la Fibrilación Auricular. Funciona BLOQUEANDO la bomba Sodio-Potasio ATPasa en las células del corazón. Normalmente, el Potasio y la Digoxina \"compiten\" por el mismo asiento en esta bomba. Este abuelo estaba tomando Furosemida (un diurético que hace botar el Potasio por la orina). Al bajar el potasio en su sangre (Hipokalemia de 2.8), el \"asiento\" en el corazón quedó vacío; la Digoxina aprovechó, se pegó fuertemente a la bomba y la paralizó por completo, intoxicándolo. La clínica de la Intoxicación Digitálica es clara:\n- Gastrointestinal: Náuseas, vómitos, pérdida de apetito.\n- Oftalmológico: Xantopsia (visión de colores alterada, halos amarillo-verdosos alrededor de las cosas).\n- Cardiológico: El corazón hace arritmias peligrosas y ECG muestra la famosa Cubeta Digitálica. El tratamiento es corregir urgente el Potasio IV, y si hay arritmias mortales, administrar los Fragmentos Fab específicos anti-digoxina.\n\n**TRAMPA DEL EXAMEN:** Van Gogh y la Medicina: Se dice que Vincent Van Gogh tomaba \"Dedalera\" (la planta de donde viene la digoxina) recetada por su médico. La toxicidad le provocó Xantopsia, lo que explica por qué sus pinturas (como \"La noche estrellada\" o \"Los Girasoles\") tienen esos halos amarillos y verdosos vibrantes. Todo estudiante de medicina debe saberse este chisme.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente anciano está sufriendo la misma locura visual que el pintor Vincent Van Gogh. La \"pastillita para el corazón\" se acumuló en su sangre porque el diurético le lavó el potasio de las venas. La digoxina, sin el potasio estorbándole, apagó por completo la electricidad fina de las bombas celulares de su retina y su miocardio. Esa \"cubeta\" que ves en el electrocardiograma como una sonrisa caída es la huella digital de la planta Dedalera impregnando su músculo cardíaco. Tienes que colgarle cloruro de potasio rápido por vena central; apenas le devuelvas el potasio a su sangre, el potasio empujará a la digoxina de la silla y el viejo dejará de ver girasoles amarillos en los bombillos de urgencias.",
    keyPoints: [
      "Intoxicación por DIGOXINA: Gatillo principal: HIPOKALEMIA (Suele ser culpa del uso simultáneo de Furosemida).",
      "Síntomas visuales oro: Xantopsia (Halos amarillo-verdosos).",
      "ECG típico: Cubeta Digitálica. Arritmia típica: Taquicardia Ventricular Bidireccional o bloqueos.",
      "Antídoto: Anticuerpos Fab (Digibind)."
    ]
  },
  {
    id: "umng-conv-ed5-04",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "URGENCIAS Y PEDIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed5"],
    statement: "Una mujer de 22 años, primigestante, acude al servicio de urgencias obstétricas en su semana 29 de gestación. Refiere que hace unas horas presentó un fuerte dolor lumbar y expulsión del \"tapón mucoso\". Al realizarle el monitoreo tococardiográfico, usted documenta contracciones regulares (4 en 10 minutos) de alta intensidad. Al tacto vaginal, el cuello uterino presenta borramiento del 80% y una dilatación de 5 centímetros, con membranas íntegras. El diagnóstico es un Trabajo de Parto Pretérmino inminente y Activo que ya no es posible detener a largo plazo (Tocolisis fallida). Sabiendo que el nacimiento del feto prematuro (29 semanas) ocurrirá en las próximas 6 a 12 horas inevitablemente, y tras haber asegurado la maduración pulmonar con Betametasona, ¿cuál es el segundo FARMACO ENDOVENOSO que USTED DEBE administrar OBLIGATORIAMENTE de forma profiláctica a la madre antes del parto, con el único fin de proteger el cerebro del recién nacido?",
    options: [
      { id: "A", label: "A", text: "Ampicilina en dosis de carga para neuroprotección contra el Estreptococo del Grupo B." },
      { id: "B", label: "B", text: "Indometacina intravenosa a dosis altas para sellar el foramen oval antes de la hipoxia del parto." },
      { id: "C", label: "C", text: "Sulfato de Magnesio (MgSO4) en bolo y perfusión continua para Neuroprotección fetal." },
      { id: "D", label: "D", text: "Atosibán intravenoso para paralizar el útero permanentemente y evitar trauma craneal en el expulsivo." }
    ],
    correctOptionId: "C",
    explanation: "El cerebro de un feto menor de 32 semanas tiene unos vasos sanguíneos finísimos en los ventrículos cerebrales (la matriz germinal). Cuando el bebé nace tan chiquito, la simple presión de pasar por el canal vaginal o los cambios de presión arterial al respirar causan que esos vasitos estallen (Hemorragia Intraventricular del Prematuro). Esto condena al bebé a sufrir Parálisis Cerebral Infantil (PCI) severa y retraso mental para toda la vida. La obstetricia mundial descubrió que, si tú le pasas SULFATO DE MAGNESIO intravenoso a la madre en las 24 horas (o mínimo 4 horas) ANTES del nacimiento inevitable de un bebé de menos de 32 semanas, el magnesio cruza la placenta, baña el cerebro del feto, estabiliza los vasos sanguíneos y bloquea el daño por radicales libres. Se reduce drásticamente la incidencia de parálisis cerebral y hemorragias mortales. Esta es la indicación absoluta de oro de Neuroprotección Fetal.\n\n**TRAMPA DEL EXAMEN:** Los 3 Usos del Magnesio Obstétrico: El Sulfato de Magnesio es el superhéroe de la ginecóloga. Prevenir/Tratar convulsiones en Eclampsia (Cualquier semana). Único fin de Neuroprotección Fetal en parto inminente de < 32 Semanas. (Raramente ya) como tocolítico débil para frenar el parto, aunque está relegado por el Nifedipino.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente va a dar a luz hoy sí o sí. La dilatación va en cinco centímetros, las \"trancas\" se rompieron. Ese bebé de 29 semanas es tan frágil que los vasitos capilares de su pequeño cerebro son como papel de arroz mojado. Cuando su cabeza se exprima contra el hueso de la pelvis de su madre en el canal de parto, el esfuerzo estallará las venas de su cerebro, induciendo una hemorragia masiva. Pídele a la enfermera la bomba del Sulfato de Magnesio urgente. Pásale una carga a la mamá, y el químico viajará al cordón umbilical blindando los vasos del cerebro del feto con iones de magnesio, \"teflonando\" su mente contra el impacto de nacer demasiado pronto. Podrá nacer chiquito y necesitar incubadora por un mes, pero gracias a tu magnesio no terminará en una silla de ruedas por parálisis infantil.",
    keyPoints: [
      "Parto Pretérmino INMINENTE con feto de < 32 Semanas:",
      "Profilaxis Pulmonar = Corticoides (Betametasona/Dexametasona).",
      "Profilaxis Cerebral (Neuroprotección) = SULFATO DE MAGNESIO (Previene Hemorragia Intraventricular y Parálisis Cerebral Infantil)."
    ]
  },
  {
    id: "umng-conv-ed5-05",
    university: "UMNG",
    examArea: "ORTOPEDIA Y TRAUMATOLOGÍA",
    topic: "MEDICINA DEPORTIVA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed5"],
    statement: "Un jugador de baloncesto universitario de 20 años es traído a urgencias cojeando y sin poder apoyar el pie derecho. Relata que durante un salto para atrapar el balón, aterrizó torpemente apoyando todo el peso de su cuerpo sobre el borde externo del pie derecho, forzando un mecanismo de \"inversión forzada súbita\". Al examinar su pie, usted palpa la zona del dolor máximo, el cual se localiza exquisitamente en el borde externo del mediopié, exactamente en la base del quinto hueso metatarsiano. Usted solicita una radiografía simple del pie. El radiólogo observa una línea de fractura transversa limpia que atraviesa exactamente la unión metáfiso-diafisiaria del 5° metatarsiano (a unos 1.5 cm de la base ósea), sin compromiso articular directo con el hueso cuboides. ¿Cuál es el nombre epónimo de esta fractura específica y por qué su manejo ortopédico es tan estricto comparado con otras fracturas del mismo hueso?",
    options: [
      { id: "A", label: "A", text: "Fractura de Lisfranc / Alto riesgo de luxación tarso-metatarsiana divergente." },
      { id: "B", label: "B", text: "Fractura Pseudo-Jones (Fractura por avulsión de la tuberosidad) / Riesgo de arrancar el tendón del peroneo corto, requiere clavos de inmediato." },
      { id: "C", label: "C", text: "Fractura de Marcha / Riesgo de callo óseo doloroso si sigue caminando, manejo con plantilla blanda." },
      { id: "D", label: "D", text: "Fractura de Jones / Altísimo riesgo de pseudoartrosis y necrosis avascular por irrigación retrógrada pobre, requiere yeso sin apoyo o cirugía (tornillo intramedular)." }
    ],
    correctOptionId: "D",
    explanation: "La Fractura de Jones ocurre exactamente en la unión entre la metáfisis y la diáfisis del 5° Metatarsiano. ¿Por qué es una pesadilla ortopédica? Porque justo esa franja del hueso milimétrica es una \"zona de cuencas o aguas divisorias vascular\" (watershed area). Casi no le llega sangre natural. Si ese hueso se parte ahí, las células óseas se mueren de hambre y no logran pegar la cicatriz, terminando en Pseudoartrosis (hueso que no suelda jamás) o Retardo de consolidación. Todo paciente diagnosticado con Fractura de Jones debe tener OBLIGATORIAMENTE CERO apoyo de peso del pie por 6 a 8 semanas con yeso (muletas estrictas) o, en su gran mayoría moderna, se pasan directo a Quirófano para clavarle un Tornillo Intramedular de compresión por dentro del hueso que lo mantenga firme y obligado a sanar.\n\n**TRAMPA DEL EXAMEN:** Pseudo-Jones vs Jones: ¡Un centímetro hace toda la diferencia! Se rompió en la pura \"puntita\" (Avulsión de la tuberosidad): Pseudo-Jones -> Cierra rápido, camina con bota ortopédica, no pasa nada. Se rompió 1.5 cm más abajo (Unión con la caña del hueso): Jones pura -> Zona muerta vascular, Prohibido pisar, alto riesgo de cirugía por no unión ósea.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu jugador de baloncesto casi arruina su carrera en una mala pisada. El hueso exterior de su pie (el 5to metatarsiano) sufrió una fractura caprichosa. Se partió exactamente en el \"desierto vascular\" de su anatomía. Ni las arterias de arriba ni las de abajo alcanzan a regar con sangre el sitio donde se hizo la grieta. Si le dices \"Tranquilo campeón, póngase esta venda de tobillo y empiece a caminar suave la otra semana\", el hueso, al no tener oxígeno ni sangre para fabricar calcio, se rendirá. En tres meses los dos bordes del hueso estarán lisos, muertos y separados para siempre por tejido fibroso (Pseudoartrosis). Tienes que ponerle un yeso duro como roca y confiscarle los zapatos de ese pie. Se va de muletas por dos meses para que su cuerpo, forzado en reposo absoluto, logre enviar un vasito capilar a sanar la grieta milimétrica de Jones.",
    keyPoints: [
      "Fractura de la Unión metáfiso-diafisiaria del 5° Metatarsiano = Fractura de JONES.",
      "Riesgo Oculto Clínico: Pseudoartrosis / Retardo de consolidación (Por pobre irrigación sanguínea en esa franja anatómica).",
      "Manejo restrictivo: Yeso SIN APOYO prolongado o Cirugía con Tornillo."
    ]
  },
  {
    id: "umng-conv-ed5-06",
    university: "UMNG",
    examArea: "INFECTOLOGÍA",
    topic: "URGENCIAS QUIRÚRGICAS Y MEDICINA TROPICAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed5"],
    statement: "Un hombre de 55 años, con antecedente de Cirrosis Hepática secundaria a infección crónica por Virus de la Hepatitis C, se encontraba de vacaciones en la costa atlántica colombiana (mar abierto). Relata que ayer caminaba descalzo por la orilla de la playa buscando ostras frescas cuando accidentalmente se hizo una leve cortada en la planta del pie izquierdo con una concha marina. Acude al hospital local apenas 24 horas después del corte en un estado desolador: el paciente está en choque séptico hiperagudo (PA 60/40 mmHg, FC 135 lpm), fiebre de 40°C y somnolencia profunda. Al examinar el pie y la pierna izquierda, usted observa un edema masivo amoratado, dolorosísimo a la palpación, con aparición veloz de enormes ampollas hemorrágicas (flictenas oscuras) y necrosis de la piel que avanza hacia el muslo en cuestión de minutos (Fascitis Necrotizante fulminante). Ante este cuadro catastrófico fulgurante ligado a agua de mar y enfermedad hepática crónica, ¿cuál es la bacteria exótica destructora aislada, y cuál es la causa metabólica por la que mató al paciente tan rápido?",
    options: [
      { id: "A", label: "A", text: "Aeromonas hydrophila / El paciente adquirió la bacteria al nadar en un río de agua dulce y su inmunosupresión permitió el avance." },
      { id: "B", label: "B", text: "Staphylococcus aureus meticilino-resistente (MRSA) / Producción de toxina del Síndrome de Choque Tóxico." },
      { id: "C", label: "C", text: "Vibrio vulnificus / La bacteria es halofílica (agua salada) y experimenta una hiper-proliferación letal inmediata en pacientes con exceso de hierro en sangre (hemocromatosis o cirrosis)." },
      { id: "D", label: "D", text: "Streptococcus pyogenes (Grupo A) / La bacteria devoradora de carne libera exotoxina pirógena que licúa el tejido celular subcutáneo." }
    ],
    correctOptionId: "C",
    explanation: "El Vibrio vulnificus es el asesino perfecto del Mar Caribe y el Golfo. Esta bacteria vive en aguas marinas cálidas, saladas (halofílica) y en las ostras bivalvas que filtran el agua de mar. Entra al cuerpo humano por dos vías: te tragas las ostras crudas o te cortas el pie con una de sus conchas/coral. En una persona sana, daña la piel o da una gastroenteritis fuerte. PERO, el Vibrio vulnificus tiene una necesidad fisiológica extrema: para sobrevivir y multiplicarse rápido necesita HIERRO. En las personas sanas, el hierro está guardado y amarrado en la sangre. Sin embargo, los pacientes con Cirrosis Hepática, daño hepático crónico, o Hemocromatosis, tienen el hígado tan dañado que \"sueltan\" grandes cantidades de Hierro libre circulante en la sangre. Cuando la bacteria huele este bufet de hierro libre, entra en un frenesí reproductivo monstruoso. Destroza y pudre toda la pierna en 12 horas, formando ampollas llenas de sangre muerta (flictenas hemorrágicas) y precipita un choque séptico que mata a la mayoría de los cirróticos en menos de 48 horas. (Manejo urgente: Antibióticos como Ceftazidima + Doxiciclina y el cirujano amputará la pierna para salvarle la vida).\n\n**TRAMPA DEL EXAMEN:** Geografía de las bacterias acuáticas asesinas: Tienes que aprenderte esta división sagrada. Agua DULCE (Río/lago) + Necrosis rápida = Aeromonas hydrophila. Agua SALADA (Mar/Ostra) + Cirrótico muerto en horas = Vibrio vulnificus. Agua de PECERA (Acuarios) + Granulomas leñosos lentos en el brazo = Mycobacterium marinum.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente no debió pisar la playa sin zapatos. Esa pequeña herida en su talón le abrió las compuertas de la sangre a uno de los monstruos microscópicos más rápidos de la naturaleza marina. El Vibrio vulnificus es una bacteria que adora la sal, pero tiene una adicción mortal por el Hierro. El hígado arruinado por la cirrosis de este señor le falló en su trabajo de esconder el hierro del cuerpo. Toda la sangre de la pierna es un banquete abierto para la bacteria. Al comer y reproducirse, soltó toxinas necrosantes que \"derritieron\" los músculos de la pierna, separando las capas de piel y llenándolas de sangre podrida negra en ampollas gigantes en menos de un día. Consigue la sierra ortopédica; si el cirujano no le amputa la pierna a nivel del fémur esta tarde y lo inundas de antibióticos de amplio espectro, su corazón y sus riñones claudicarán mañana al amanecer por el choque tóxico.",
    keyPoints: [
      "Paciente Cirrótico o Enfermo del Hígado + Herida en Agua Salada / Ostras Crudas + Choque Séptico Rápido con Bullas/Ampollas hemorrágicas en extremidad.",
      "Bacteria Oculta Letal: Vibrio vulnificus.",
      "Fisiopatología: La bacteria es hiperagresiva porque se nutre del exceso de Hierro libre sérico del cirrótico."
    ]
  },
  {
    id: "umng-conv-ed5-07",
    university: "UMNG",
    examArea: "NEFROLOGÍA",
    topic: "UROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed5"],
    statement: "Un joven de 24 años, portador del rasgo de células falciformes (Heterocigoto HbAS) conocido por sus padres, acude a urgencias quejándose de un dolor lumbar cólico derecho de instauración rápida y punzante (\"me retuerzo de dolor de espaldas\"), irradiado a la ingle. Refiere también haber orinado sangre fresca con coágulos evidentes esta mañana. A pesar de que el cuadro aparenta ser una nefrolitiasis (un cálculo renal) clásica, la Tomografía Computarizada (Uro-TAC) simple no evidencia ninguna piedra densa de calcio u oxalato bajando por el uréter. Lo que el radiólogo evidencia es un defecto de llenado a nivel de los cálices renales, describiendo un hallazgo clásico: el medio de contraste rodea un pedazo de tejido flotante en el riñón formando la imagen del \"Signo del Anillo\" o \"Signo en palo de golf\" en el cáliz. Usted intuye que un pedazo del propio riñón del paciente se acaba de desprender, causando la obstrucción. ¿Cuál es la entidad patológica nefrourinaria isquémica confirmada y sus causas?",
    options: [
      { id: "A", label: "A", text: "Pielonefritis Enfisematosa masiva / Exclusiva de pacientes diabéticos descompensados." },
      { id: "B", label: "B", text: "Infarto Renal Total de la Arteria Principal / Embolismo secundario a fibrilación auricular." },
      { id: "C", label: "C", text: "Necrosis Papilar Renal / Isquemia microvascular aguda inducida clásicamente por células falciformes, consumo masivo crónico de AINEs (analgésicos), Diabetes o Pielonefritis." },
      { id: "D", label: "D", text: "Carcinoma de Células Transicionales urotelial (Tumor de vía urinaria) / Crecimiento y desprendimiento papilar maligno sangrante." }
    ],
    correctOptionId: "C",
    explanation: "Los riñones están formados por pirámides. La puntita de la pirámide (por donde gotea la orina al uréter) se llama Papila Renal. Esta papila está en el \"sótano\" de la circulación de sangre; recibe oxígeno al límite del colapso (isquemia fisiológica). Ciertas condiciones estresan tanto estos vasitos capilares que las papilas mueren y se necrosan. La principal causa en jóvenes de raza negra es la Anemia o el Rasgo Falciforme (las células en hoz se atoran en la punta del riñón y lo tapan). Otras causas mundiales famosas (Nemotecnia POST): Pielonefritis, Obstrucción, Sickle cell (falciformes) y Analgésicos (consumir Ibuprofeno/AINEs como chicles crónicamente). Cuando la papila se pudre, se desprende literalmente un trozo de carne del riñón (\"sloughing\"). Ese trozo de carne muerta cae por el tubo de la orina y bloquea el conducto igualito que si fuera una piedra, dando cólico renal atroz y sangre. En la urografía, el contraste envuelve al pedazo de carne muerta flotante, viéndose un anillo gris oscuro con borde brillante blanco (Signo del Anillo).\n\n**TRAMPA DEL EXAMEN:** Mnemotecnias Salvavidas del daño renal analgésico: Si a un paciente le duelen los riñones por usar drogas de dolor toda su vida: AINEs crónicos = Necrosis Papilar (el riñón \"escupe\" pedazos de sí mismo por falta de prostaglandinas dilatadoras). AINEs agudos (Días/Alergia) = Nefritis Intersticial (Brota con sarpullido, fiebre y Eosinófilos, del Lote 4).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este joven está botando pedazos de su riñón hacia el inodoro. Los glóbulos rojos de su cuerpo tienen una falla genética que los vuelve rígidos cuando les falta oxígeno (células falciformes). La punta del filtro de sus riñones (la papila) es la zona más asfixiada de todo su abdomen. Esos glóbulos rígidos hicieron un trancón y taponaron los vasitos microscópicos, \"infartando\" un triángulo minúsculo de carne viva de riñón. El tejido negro se pudrió, se despegó y cayó al embudo del uréter. Al intentar orinar esa masita de tejido muerto, su riñón gritó con un cólico idéntico al de una piedra de calcio. Si lo llenas de agua por las venas, la orina a presión terminará por arrastrar y botar esa costra de carne por el pene y la pesadilla cederá sin usar litotricia alguna.",
    keyPoints: [
      "Mnemotecnia Causas de Necrosis Papilar Renal: SODA.",
      "Sickle Cell Disease / Trait (Anemia Falciforme).",
      "Obstrucción (Crónica).",
      "Diabetes mellitus.",
      "Analgésicos (Abuso de AINEs/Fenacetina).",
      "Clínica: Cólico nefrítico engañoso + Hematuria + Signo del Anillo radiológico (tejido papilar necrosado desprendido)."
    ]
  },
  {
    id: "umng-conv-ed5-08",
    university: "UMNG",
    examArea: "NEUROLOGÍA Y CUIDADOS INTENSIVOS",
    topic: "INMUNOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed5"],
    statement: "Un hombre de 35 años ingresa al servicio de urgencias por un cuadro de debilidad progresiva en ambas piernas que inició hace 3 días. El paciente refiere que sentía \"hormigueo en la punta de los pies\" pero hoy, al intentar pararse de la cama, se desplomó debido a una parálisis flácida ascendente severa. La debilidad ya compromete los músculos de los muslos y del abdomen. Usted evalúa sus reflejos osteotendinosos rotulianos y aquilianos, encontrando una franca y patognomónica Arreflexia global bilateral (ausencia total de reflejos 0/4). El paciente menciona como único antecedente de importancia haber sufrido un fuerte cuadro de diarrea febril por comer pollo mal cocido (Campylobacter jejuni) hace unas 3 semanas. Sabiendo que el cuadro es altamente sugerente de un Síndrome de Guillain-Barré, usted realiza una Punción Lumbar (LCR) de protocolo. ¿Qué hallazgo espera encontrar en el LCR para este diagnóstico, y cuál es la terapia MODULADORA OBLIGATORIA INICIAL, advirtiendo un error medicamentoso inútil común?",
    options: [
      { id: "A", label: "A", text: "Pleocitosis linfocitaria extrema sin proteínas / Administrar Ciclofosfamida intravenosa inmediata." },
      { id: "B", label: "B", text: "Líquido Cefalorraquídeo purulento con bacterias Gram Negativas en curvatura / Administrar Corticoesteroides (Dexametasona) a altas dosis para apagar la parálisis." },
      { id: "C", label: "C", text: "Disociación Albúmino-Citológica (Proteínas muy altas con recuento de células completamente normal < 5) / Administrar Inmunoglobulina Intravenosa (IGIV) o realizar Plasmaféresis de urgencia." },
      { id: "D", label: "D", text: "Hipoglucorraquia severa y Bandas oligoclonales ausentes / Tratar empíricamente con antibióticos macrólidos por 14 días." }
    ],
    correctOptionId: "C",
    explanation: "El Síndrome de Guillain-Barré es una tragedia inmunológica (Mimetismo molecular). El cuerpo del paciente fabricó anticuerpos contra la cápsula de la bacteria Campylobacter jejuni del pollo dañado de hace tres semanas. Pero esos anticuerpos tienen miopía genética: creyeron que la cubierta nerviosa de las piernas del hombre (la mielina de los nervios periféricos y raíces nerviosas espinales) también era la bacteria. Empezaron a destruir los nervios periféricos de abajo hacia arriba (\"Machetazo\" desmielinizante periférico de parálisis flácida y arreflexia). Cuando tú le sacas líquido de la médula espinal (LCR), notarás un fenómeno único: DISOCIACIÓN ALBÚMINO-CITOLÓGICA. Significa que como los nervios se deshacen y hay gran inflamación alrededor, las Proteínas suben masivamente (ej. > 100 mg/dL), PERO el número de glóbulos blancos o células sigue estando en 0 o < 5 (por eso hay \"disociación\", suben proteínas solas sin células). Para salvarle la vida antes de que la parálisis suba al diafragma y lo asfixie, DEBES inundar su cuerpo de Inmunoglobulina Intravenosa (IGIV) o pasar a Plasmaféresis (recambio de sangre).\n\n**TRAMPA DEL EXAMEN:** El tratamiento falso y peligroso: El examinador adora la trampa de poner \"Corticosteroides\" para tratar SGB. A la memoria clínica le gusta recetar esteroides para todo lo autoinmune. Guillain-Barré es la excepción de la neuroinmunología. Jamás le des corticoides. Plamaféresis o IGIV es la única respuesta.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente sobrevivió a una diarrea de pollo crudo hace un mes para enfrentarse hoy a una traición interna. Los \"perros de ataque\" de su sistema inmune que vencieron a la bacteria se volvieron locos. Encontraron que la mielina (el plástico que recubre los cables de los nervios de sus piernas) tenía la misma cara que la bacteria. Empezaron a comerse ese plástico desde la punta de los dedos de los pies hacia arriba. Sin plástico protector, la corriente eléctrica muscular se fuga al vacío. Si este muchacho no recibe el antídoto hoy, los perros subirán por el tórax, desconectarán su diafragma y sus pulmones caerán paralizados exigiéndote un respirador mecánico durante tres meses. Cuelga de inmediato las carísimas bolsas de Inmunoglobulina humana importada. Esa medicina inundará la sangre de tu paciente y distraerá a sus propios anticuerpos, permitiendo que sus nervios comiencen la milagrosa reconstrucción de su vaina protectora y recupere la fuerza motriz para caminar fuera de tu UCI.",
    keyPoints: [
      "Parálisis Flácida Ascendente + ARREFLEXIA + Antecedente de Diarrea (Campylobacter jejuni) = Síndrome de Guillain-Barré.",
      "Punción Lumbar Diagnóstica de Oro: Disociación Albúmino-Citológica (Mucha Proteína, Cero Células Blancas).",
      "Terapia Moduladora de Rescate: Plasmaféresis o Inmunoglobulina IV (IGIV). (Esteroides NO SIRVEN)."
    ]
  },
  {
    id: "umng-conv-ed5-09",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "NEUROCIRUGÍA Y OTORRINOLARINGOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed5"],
    statement: "Un joven motociclista de 22 años ingresa a la sala de reanimación luego de sufrir un accidente severo: mientras conducía por una zona rural sin iluminación a alta velocidad, no vio un alambre de púas atravesado en el camino (accidente de cuerda de tender la ropa o Clothesline injury). El alambre golpeó violentamente la porción anterior e inferior de su cuello antes de tirarlo de la moto al piso. Al llegar, el joven está consciente, sentado, sosteniéndose el cuello con ambas manos y luchando fuertemente por respirar (estridor ruidoso constante). Usted escucha que al hablar, su voz es completamente ronca y apagada. A la palpación de la cara anterior del cuello, el hallazgo es aterrador: usted no logra palpar la prominencia tiroidea natural (\"Manzana de Adán\"), la cual está aplanada o desaparecida. Además, el cuello está inflado y cruje al tacto debido a un enfisema subcutáneo cervical masivo (aire debajo de la piel). Sabiendo la inminencia absoluta de asfixia en el próximo minuto, ¿cuál es el paso de aseguramiento de vía aérea y conducta quirúrgica DEFINITIVA MANDATORIA para este trauma anatómico específico?",
    options: [
      { id: "A", label: "A", text: "Proceder a realizar una cricotiroidotomía con aguja gruesa para descompresión aérea temporal." },
      { id: "B", label: "B", text: "Intentar Intubación Orotraqueal ciega rápida por la boca utilizando la fuerza del mandril para franquear el coágulo en la tráquea." },
      { id: "C", label: "C", text: "Colocar de inmediato una Máscara Laríngea Supraglótica (LMA) y dar oxígeno a presión mientras se lleva a piso a estabilizarse." },
      { id: "D", label: "D", text: "Reconocer la Separación Laringotraqueal (Tráquea rota) y llevar INMEDIATAMENTE a quirófano para abordaje de Cuello Abierto, asegurando la vía aérea mediante Traqueostomía Quirúrgica controlada bajo visión directa y reparación anatómica." }
    ],
    correctOptionId: "D",
    explanation: "El joven sufrió el infame \"Clothesline injury\". El cable le pegó directo a la laringe aplastando y quebrando sus cartílagos (Tiroides y Cricoides). La laringe quedó hundida (por eso \"se borró la manzana de Adán\"). La tráquea, al separarse del resto, retrocedió y se escondió en el tórax dejando salir aire a la piel. La ÚNICA forma de salvarlo sin iatrogenia (y si el cirujano está ahí) es llevarlo corriendo a quirófano. El otorrinolaringólogo o cirujano rajará el cuello anterior con el bisturí en una Traqueostomía de Urgencia bajo visión directa. Verá con sus propios ojos el muñón de la tráquea sana rota, lo agarrará con pinzas y clavará un tubo traqueal estéril directo al pulmón salvándole el oxígeno, para después dedicarse 4 horas a coser el cartílago quebrado con alambre fino para reconstruirle la voz.\n\n**TRAMPA DEL EXAMEN:** El instinto de la intubación rápida: En urgencias, todo el que no respira recibe intubación por boca. El ATLS te evalúa si sabes frenar ese instinto animal cuando la anatomía está rota. Tráquea quebrada/Cuello aplastado = Llama al cirujano para vía aérea quirúrgica en quirófano.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagínate un tubo de cartón que conecta la boca de este joven con sus pulmones. El alambre de púas cortó ese tubo limpiamente por la mitad. El tubo sano de abajo se retrajo y resbaló hacia abajo, hacia el pecho, buscando esconderse del golpe. Todo el aire que intenta tragar el muchacho sale por el hueco y se infla en la grasa de su cuello, dándole ese sonido asqueroso y burbujeante cuando lo tocas. El cartílago duro de la laringe que protegía las cuerdas vocales estalló, escondiendo su \"manzana de Adán\". Guarda tu laringoscopio con mango de metal; si intentas empujar el plástico a la fuerza en esa carnicería oscura de su garganta rajada, el plástico se desviará fuera del tubo de la tráquea y le inflarás de aire la vena yugular o la musculatura, asfixiándolo definitivamente. Dile a urgencias que preparen el quirófano para traqueostomía abierta y que la sangre dicte el camino.",
    keyPoints: [
      "Trauma directo en cuello anterior (Cable/Motociclista) + Ronquera + Aplanamiento/Pérdida de la \"Manzana de Adán\" (Cartílago Tiroides).",
      "Diagnóstico: Fractura de Laringe / Separación Traqueal.",
      "Conducta OBLIGATORIA salvavidas: Cuidado extremo con la Vía Aérea. Preferiblemente TRAQUEOSTOMÍA / Vía Aérea QUIRÚRGICA. (Nunca forzar el tubo ciegamente por la boca por riesgo de crear falso trayecto letal)."
    ]
  },
  {
    id: "umng-conv-ed5-10",
    university: "UMNG",
    examArea: "CARDIOLOGÍA",
    topic: "MEDICINA DE URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed5"],
    statement: "Un hombre de 70 años, diagnosticado con cardiopatía isquémica crónica severa y miocardiopatía isquémico-necrótica (corazón con gran debilidad de bomba), es traído por sus hijos a urgencias porque mientras veía televisión sufrió un síncope fulminante \"con caída súbita al piso como un peso muerto\", recuperando la conciencia y orientación a los dos minutos. Al ingreso, el abuelo está despierto pero mareado. PA de 110/60 mmHg, pulso lento de 35 lpm. Usted toma un Electrocardiograma (ECG) de 12 derivaciones de emergencia para investigar el síncope cardiógeno (Síncope de Stokes-Adams). El ECG muestra el siguiente trazo escalofriante de forma persistente: Las Ondas P auriculares aparecen con una frecuencia constante y regular a 80 latidos por minuto, pero los complejos QRS son muy ANCHOS y aberrantes y caminan independientemente con una frecuencia lentísima de 35 latidos por minuto. Al medirlos, la distancia entre las ondas P es idéntica siempre, y la distancia entre los QRS es idéntica siempre, pero las ondas P y los complejos QRS no tienen NINGUNA RELACIÓN entre sí (se cruzan ciegamente sin conectarse). Ante el dictamen electrofisiológico, ¿cuál es el diagnóstico letal subyacente y la medida Terapéutica Invasiva INICIAL para curar el bloqueo?",
    options: [
      { id: "A", label: "A", text: "Bloqueo Auriculoventricular de Segundo Grado Mobitz I (Wenckebach) / Administrar bolos de Atropina IV para secar la acción vagal." },
      { id: "B", label: "B", text: "Bloqueo Auriculoventricular de Tercer Grado (Bloqueo AV Completo) infranodal / Implantación urgente de un Marcapasos Transvenoso o Definitivo, evitando el uso aislado de Atropina." },
      { id: "C", label: "C", text: "Fibrilación Auricular con respuesta ventricular lenta por daño isquémico en reposo / Iniciar infusión de Amiodarona." },
      { id: "D", label: "D", text: "Bloqueo Auriculoventricular de Segundo Grado Mobitz II / Prescribir Isoproterenol crónico y dar alta ambulatoria bajo observación estricta." }
    ],
    correctOptionId: "B",
    explanation: "El Bloqueo AV de Tercer Grado (Bloqueo Completo) es el \"Divorcio Total\". El puente eléctrico que une la parte de arriba del corazón (Aurículas/Ondas P) con la parte de abajo (Ventrículos/QRS) fue destruido físicamente, probablemente por los años de isquemia que sufrió el paciente (fibrosis infranodal de la red de His-Purkinje). Las aurículas siguen soltando sus chispas solas, guiadas por el marcapasos natural sinusal a la perfecta velocidad de 80 por minuto. Pero esos 80 corrientazos no pueden bajar la escalera para encender al músculo ventricular de abajo. Al ver que no le llega energía, el ventrículo en pánico decide \"encenderse a sí mismo\" inventando su propio marcapasos (Ritmo de escape idioventricular). Pero como el ventrículo no sabe mandar electricidad rápida, solo suelta chispas lentas, amorfas y anchas a la triste velocidad de 30-40 lpm. Este corazón no está latiendo al unísono, son dos corazones latiendo a su propia música separados. Esta bradicardia brutal tumba la presión y da desmayos instantáneos que casi matan al viejo (Síncope de Stokes-Adams). ¿Por qué no le das ATROPINA en inyección de urgencia de la AHA? Porque la Atropina acelera el nodo sinusal \"de arriba\"; al abuelo le pueden latir las aurículas de arriba a 150 por la droga, pero el puente de la mitad SIGUE ESTANDO ROTO. Ninguna chispa bajará. Debes ponerle parches de Marcapasos Transcutáneo (externo) en el pecho del paciente para que el choque le obligue a latir a la fuerza, y subirlo a cirugía cardiovascular inmediatamente para atornillarle un cable definitivo en la punta del corazón (Marcapasos Definitivo).\n\n**TRAMPA DEL EXAMEN:** Usar Atropina en Todo Lento: El curso del ACLS dice que si ves bradicardia des Atropina. ¡La trampa del residente! La Atropina en el Bloqueo de 3er grado de QRS Ancho (Infranodal) es fútil (no sirve) y hasta peligrosa. Los cables abajo del puente de His no tienen receptores vagales/muscarínicos. Al poner atropina aumentas el consumo de O2 auricular inútilmente sin pasar la señal. En bradicardia grave de QRS ancho, grita y pide MARCAPASOS de una vez o dopamina/adrenalina en goteo como puente cronotrópico de los ventrículos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente acaba de divorciarse eléctricamente por dentro. La parte de arriba de su corazón y la parte de abajo cortaron toda comunicación telefónica y se odian; decidieron vivir vidas separadas. El marcapasos original \"el sinusal de las aurículas\" sigue enviando su telegrama de \"latan a 80 veces por minuto\" al ventrículo inferior, pero el puente de cables por el cual viajaba el telegrama se marchitó y se fibrosó por el poco oxígeno de tantos años de daño cardiaco. El ventrículo asustado sin su capitán, asumió el mando como el maquinista novato de un tren. Dispara lento, grueso y tonto a 35 veces por minuto, dándole tiempo al paciente de quedarse sin sangre en el cerebro en la sala de su casa, y colapsar desplomado al suelo en el síncope de Adams. Olvídate de los jarabes mágicos y las inyecciones de Atropina inútiles para los nódulos. Llama al electrofisiólogo que baje corriendo y ponle un \"puente de titanio eléctrico con batería artificial\" clavado en su clavícula, uniendo la parte superior de su corazón con la de abajo. Le habrás regalado una batería nueva a su vida.",
    keyPoints: [
      "Bloqueo AV de Tercer Grado (Completo) = Disociación AV Total (Ondas P marchan por su cuenta y QRS marchan lentos por su cuenta).",
      "Complicación oro: Síncope fulminante recurrente sin aviso.",
      "Conducta clínica: Implante de MARCAPASOS DEFINITIVO (Y transitorio externo en urgencias).",
      "Medicamento Inútil: Atropina (No cruza la lesión si el escape es de QRS Ancho Infranodal)."
    ]
  }
];
