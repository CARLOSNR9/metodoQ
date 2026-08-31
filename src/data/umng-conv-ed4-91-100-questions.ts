import type { TrainingQuestion } from "@/lib/questions/types";

export const UMNG_CONV_ED4_91_100_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed4-91",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "CIRUGÍA DE QUEMADOS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 40 años es rescatado por los bomberos del interior de un apartamento cerrado en llamas. Llega a urgencias consciente, agitado y tosiendo. Al examen físico, presenta quemaduras de segundo grado en cara, cuello y tórax anterior (15% de Superficie Corporal Quemada). Sus signos vitales muestran PA 130/80 mmHg, FC 110 lpm, FR 22 rpm y SatO2 de 96% al ambiente. Llama poderosamente la atención que el paciente tiene las vibrisas nasales (vellos de la nariz) chamuscadas, presenta hollín y esputo carbonáceo en la boca, y su voz suena ligeramente ronca. Aunque el paciente está respirando por sus propios medios y la saturación es perfecta, ¿cuál es la conducta MÁS ADECUADA E INMEDIATA en el manejo de la vía aérea de este paciente según el ATLS?",
    options: [
      { id: "A", label: "A", text: "Administrar Oxígeno al 100% por mascarilla, nebulizar con corticoides y observar estrictamente en la UCI por si se deteriora." },
      { id: "B", label: "B", text: "Realizar Intubación Orotraqueal de secuencia rápida profiláctica INMEDIATA, antes de que el paciente se asfixie." },
      { id: "C", label: "C", text: "Realizar una Traqueostomía de urgencia en la sala de reanimación, ya que la vía aérea superior está quemada y no se debe pasar un tubo." },
      { id: "D", label: "D", text: "Iniciar reanimación hídrica con la fórmula de Parkland y esperar el resultado de los gases arteriales para decidir si se intuba." }
    ],
    correctOptionId: "B",
    explanation: "La Quemadura de la Vía Aérea (Lesión por Inhalación) es la principal causa de muerte temprana en quemados en espacios cerrados. El aire súper caliente o los químicos del humo queman la mucosa de la garganta, glotis y tráquea. Los signos patognomónicos son: Hollín en boca/nariz, vellos nasales quemados, quemadura facial y ronquera (disfonía). La regla de oro del ATLS exige que, ante estos signos clínicos, se realice una Intubación Endotraqueal Profiláctica y Temprana. ¡No importa si el paciente satura al 98% o está hablando contigo! En las siguientes 2 a 12 horas, la reanimación con líquidos causará que esos tejidos quemados se hinchen como esponjas gigantes (Edema de glotis masivo), sellando la vía aérea por completo. Si le pasas el tubo endotraqueal AHORA que todavía está desinflamado, aseguras un túnel de plástico duro por donde podrá respirar cuando el cuello se le vuelva irreconocible.\n\n**TRAMPA DEL EXAMEN:** El paciente que se ve bien: Te ponen saturaciones perfectas (96%) y un paciente caminando para tentarte a decir \"déjenlo en observación con oxígeno\". En quemados, la observación sin tubo ante esputo negro es muerte por asfixia en la madrugada.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente te está hablando con voz ronca y te jura que respira bien. No le creas a su saturación, créele al hollín de su saliva. El vapor a 200 grados que inhaló \"cocinó\" literalmente las mucosas de su laringe. Como las células quemadas se van a hinchar, en un par de horas su garganta por dentro será del tamaño de una toronja, cerrando la puerta del aire para siempre. Si tú decides intubarlo cuando él empiece a ahogarse, al meter el laringoscopio solo verás un túnel de carne roja hinchada, sin rastro de cuerdas vocales, y tendrás que rajarle la tráquea con bisturí (Cricotiroidotomía) bañado en sangre. Duérmelo AHORA, desliza el tubo de plástico seguro, y déjalo intubado en la UCI hasta que la inflamación ceda en unos días.",
    keyPoints: [
      "Signos de Quemadura de Vía Aérea: Incendio cerrado + Hollín en boca + Vibrisas nasales quemadas + Disfonía.",
      "Conducta Salvavidas: INTUBACIÓN OROTRAQUEAL PROFILÁCTICA TEMPRANA. (Antes de que se instaure el edema masivo)."
    ]
  },
  {
    id: "umng-conv-ed4-92",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "REUMATOLOGÍA - INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un niño de 3 años es traído por su madre a la consulta porque lleva 6 días continuos con fiebre alta (39.5°C) que no cede con antipiréticos. Al examinar al niño, usted nota varios signos clínicos llamativos: ambos ojos están intensamente rojos pero NO tienen legañas ni secreción purulenta (Inyección conjuntival bulbar no supurativa). Los labios del niño están secos, agrietados y sangrantes, y al abrir la boca, su lengua luce roja y con papilas protuberantes (\"Lengua aframbuesada\"). En el cuello, usted palpa un ganglio linfático gigante de 2 cm en el lado derecho. Al revisar sus manos y pies, nota que están enrojecidos e hinchados (edema duro indurado). Usted hace el diagnóstico clínico de Enfermedad de Kawasaki. ¿Cuál es el tratamiento INMEDIATO de primera línea para esta enfermedad y qué complicación letal oculta busca prevenir?",
    options: [
      { id: "A", label: "A", text: "Penicilina G Benzatínica intramuscular / Prevenir la Cardiopatía Reumática Crónica." },
      { id: "B", label: "B", text: "Inmunoglobulina Intravenosa (IGIV) a dosis altas MÁS Ácido Acetilsalicílico (Aspirina) / Prevenir la formación de Aneurismas Coronarios." },
      { id: "C", label: "C", text: "Corticoides sistémicos a dosis altas (Metilprednisolona) / Prevenir la Insuficiencia Renal Aguda por vasculitis." },
      { id: "D", label: "D", text: "Paracetamol y líquidos intravenosos de soporte exclusivo / Prevenir el choque tóxico estafilocócico." }
    ],
    correctOptionId: "B",
    explanation: "La Enfermedad de Kawasaki es una Vasculitis sistémica aguda de medianos y pequeños vasos que afecta casi exclusivamente a niños menores de 5 años. El diagnóstico es 100% clínico (Fiebre de >5 días + 4 de 5 criterios: Ojos rojos sin pus, boca/lengua roja o agrietada, ganglio cervical gigante >1.5cm, sarpullido polimorfo, y alteraciones en las extremidades como edema indurado que luego se descama). El terror del Kawasaki es que esa vasculitis ataca directamente a las Arterias Coronarias del corazón del niño. Si no se trata a tiempo (en los primeros 10 días), las paredes de las arterias coronarias se debilitan, se inflan como globos (Aneurismas Coronarios) y el niño puede morir súbitamente de un infarto agudo de miocardio a los 4 años de edad por trombosis de ese globo.\nPara apagar el fuego inmunológico y evitar los aneurismas, el tratamiento estándar de oro innegociable es Inmunoglobulina Intravenosa (IGIV) a dosis masivas MÁS Ácido Acetilsalicílico (Aspirina) a dosis altas antiinflamatorias.\n\n**TRAMPA DEL EXAMEN:** La Aspirina Pediátrica: En una pregunta del Lote anterior vimos que dar Aspirina a un niño con fiebre viral causaba el mortal Síndrome de Reye (falla hepática y coma). El examinador quiere ver si dudas. La Enfermedad de Kawasaki ES LA ÚNICA EXCEPCIÓN MÉDICA PEDIÁTRICA MUNDIAL. En Kawasaki SÍ tienes que dar Aspirina a dosis altísimas para desinflamar las coronarias y prevenir que las plaquetas formen coágulos en los aneurismas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., las arterias coronarias de este niñito están sufriendo una quemadura autoinmune por dentro. Al debilitarse, la presión de la sangre las infla como si fueran llantas de bicicleta con un chichón gigante (aneurismas). Si la sangre se estanca en ese hueco, formará un coágulo, y un niño de 3 años morirá fulminado de un infarto al corazón en su cuna. Tienes que apagar ese fuego inmune hoy mismo. Pide los frascos carísimos de Inmunoglobulina, pónselos por la vena para bloquear sus anticuerpos locos, y trágate el miedo pediátrico a la Aspirina; dale dosis gigantes de aspirina para licuarle la sangre y desinflamar sus arterias. Es la única vez en tu vida que recetarás Aspirina a un niño con fiebre y serás un héroe por hacerlo.",
    keyPoints: [
      "Tríada oro de KAWASAKI: Niño < 5 años + Fiebre prolongada (>5 días) + Ojos rojos SIN PUS + Lengua Aframbuesada.",
      "Complicación letal a evitar: ANEURISMAS CORONARIOS (Causa de infarto infantil).",
      "Tratamiento obligatorio: Inmunoglobulina IV (IGIV) + ASPIRINA."
    ]
  },
  {
    id: "umng-conv-ed4-93",
    university: "UMNG",
    examArea: "GINECOLOGÍA ONCOLÓGICA",
    topic: "PATOLOGÍA CERVICAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una mujer de 52 años, multípara, residente de una zona rural sin acceso a citologías de tamizaje en los últimos 15 años, asiste a urgencias quejándose de sangrado vaginal de olor fétido intenso y dolor pélvico opresivo crónico. Refiere además que ha notado que orina muy poco en los últimos días y tiene dolor lumbar sordo bilateral. A la exploración ginecológica con espéculo, usted visualiza una enorme masa fungosa y friable que reemplaza totalmente el cérvix, sangra al tacto y se extiende a los fondos de saco vaginales. Al realizar el tacto rectovaginal, usted palpa que el tejido tumoral infiltra rígidamente ambos parametrios hasta alcanzar la pared pélvica lateral ósea (útero \"congelado\" en la pelvis). Además, una ecografía renal de urgencia demuestra Hidronefrosis Bilateral severa. Tras confirmar el diagnóstico de Carcinoma Escamocelular de Cérvix Estadio IIIB, ¿cuál es el tratamiento estándar de primera línea y curativo para esta paciente?",
    options: [
      { id: "A", label: "A", text: "Histerectomía Radical tipo Wertheim-Meigs con linfadenectomía pélvica, seguida de Quimioterapia." },
      { id: "B", label: "B", text: "Braquiterapia vaginal aislada para control del sangrado y cuidados paliativos renales." },
      { id: "C", label: "C", text: "Quimiorradioterapia Concurrente (Radioterapia externa + Cisplatino), seguida de braquiterapia." },
      { id: "D", label: "D", text: "Conización cervical (LEEP) amplia con márgenes negativos y nefrostomías percutáneas." }
    ],
    correctOptionId: "C",
    explanation: "En el Estadio IIIB, el cáncer invadió los ligamentos de los lados (parametrios) y creció tanto que se estrelló contra los huesos de la pelvis. Al hacer esto, \"estranguló\" los dos tubos de la orina (uréteres) que bajan de los riñones, causando que la orina se devuelva (Hidronefrosis bilateral) e induciendo Falla Renal Postrenal (la causa #1 de muerte en cáncer de cérvix no tratado). Como no se puede operar, la salvación oncológica mundial es la Quimiorradioterapia Concurrente. Se administra Radioterapia Externa apuntando a toda la pelvis para \"achicharrar\" el tumor masivo y soltar los uréteres, y al mismo tiempo se da Quimioterapia sistémica (Cisplatino) para potenciar el efecto de los rayos y matar las micrometástasis. Finalmente se refuerza con Braquiterapia. (Previo a esto, el urólogo le pondrá sondas de nefrostomía a los riñones para que no muera de falla renal en las semanas de radioterapia).\n\n**TRAMPA DEL EXAMEN:** Asumir que Cáncer = Extirpación: Siempre recuerda que el cáncer de cérvix avanzado (Desde el Estadio IIB y IIIB para arriba) se cura con MÁQUINAS DE RADIACIÓN, no con bisturí. Si la paciente dice \"útero fijado a la pared\", la respuesta quirúrgica siempre será incorrecta.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el VPH que esta mujer pescó de joven hizo estragos en el silencio del campo. El tumor del cuello de su matriz echó raíces hacia la derecha e izquierda de la vagina, como hiedra envolviendo los tubos del uréter hasta atornillarse contra el hueso de su pelvis (pelvis congelada). Al atrapar los uréteres, la orina no puede bajar, los riñones de la paciente están como dos globos a punto de explotar (hidronefrosis). Dile al cirujano general que guarde su bisturí; si él intenta arrancar ese bloque de piedra, la paciente morirá desangrada por las arterias ilíacas infiltradas. A esta paciente la salvará el físico médico y el radioncólogo, disparando haces de radiación calculados milimétricamente para derretir la masa desde afuera hacia adentro, con ayuda del Cisplatino por la vena.",
    keyPoints: [
      "Cáncer de Cérvix Avanzado (Estadio IIIB): Infiltra pared pélvica o causa Hidronefrosis/Uremia.",
      "CONTRAINDICACIÓN ABSOLUTA: Histerectomía radical / Cirugía.",
      "Tratamiento Universal de Elección: Radioterapia + Quimioterapia Concurrente (Cisplatino)."
    ]
  },
  {
    id: "umng-conv-ed4-94",
    university: "UMNG",
    examArea: "NEUROLOGÍA",
    topic: "CUIDADO CRÍTICO",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una mujer de 55 años, sin antecedentes previos, es llevada a urgencias en ambulancia tras sufrir un colapso súbito en el supermercado. La paciente refirió un dolor de cabeza \"explosivo, como un trueno\", al cual describió como \"El peor dolor de cabeza de toda mi vida\", antes de vomitar profusamente y perder transitoriamente el conocimiento. A su ingreso, está obnubilada, presenta rigidez de nuca franca (meningismo), pero NO presenta fiebre. La Tomografía Computarizada (TAC) de cráneo simple sin contraste revela una hiperdensidad (sangre fresca blanca) dibujando de forma perfecta la Cisterna Supraselar, la hendidura interhemisférica y el polígono de Willis en forma de \"estrella de mar\". Mientras el neurocirujano prepara la sala de hemodinamia para embolizar el aneurisma roto, usted debe iniciar un manejo farmacológico protector para evitar la complicación que MATA o deja en estado vegetativo al 30% de estos pacientes entre el día 4 y el día 10. ¿Cuál es el medicamento de oro OBLIGATORIO que debe prescribirse?",
    options: [
      { id: "A", label: "A", text: "Fenitoína intravenosa para profilaxis total anticonvulsivante de por vida." },
      { id: "B", label: "B", text: "Manitol al 20% en infusión continua masiva." },
      { id: "C", label: "C", text: "Nimodipino oral o por sonda nasogástrica estricto cada 4 horas." },
      { id: "D", label: "D", text: "Ácido Tranexámico intravenoso de inmediato." }
    ],
    correctOptionId: "C",
    explanation: "El paciente sufrió una Hemorragia Subaracnoidea (HSA). Un \"globito\" (aneurisma) de sus arterias en la base del cerebro estalló (cefalea en trueno). El neurocirujano le pondrá un clip metálico o unos coils (espirales de platino) por cateterismo para tapar el hueco del aneurisma y salvarle la vida hoy. PERO el peligro apenas comienza. Toda esa sangre que se derramó en el LCR va a oxidarse con el paso de los días. Esa sangre vieja y podrida es altamente IRRITANTE para las arterias sanas del cerebro. Entre el día 4 y el día 14, las arterias del cerebro reaccionan a esa irritación contrayéndose brutalmente (VASOESPASMO CEREBRAL). El paciente, que estaba hablando feliz en la UCI tras la cirugía, de repente sufre un infarto cerebral masivo y se queda mudo y paralítico. Para PREVENIR esto, las guías mundiales exigen iniciar desde el Minuto Cero el NIMODIPINO (un bloqueador de canales de calcio que es específico para el cerebro) administrado de forma Oral (o SNG) 60 mg cada 4 horas durante 21 días seguidos. El Nimodipino \"lubrica y relaja\" los vasos cerebrales, reduciendo drásticamente la muerte y la discapacidad por vasoespasmo retardado.\n\n**TRAMPA DEL EXAMEN:** La presentación del Nimodipino: El Nimodipino SOLO tiene eficacia clínica demostrada para la HSA si se da vía oral o por sonda gástrica. Las formas intravenosas demostraron tumbar la presión sistémica del paciente. Las preguntas de residencia adoran poner como trampa \"Nimodipino IV\". Debe ser oral/SNG.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente esquivó la bala principal cuando no murió por la explosión inicial del aneurisma en el supermercado. Pero ahora tiene un problema: el líquido cefalorraquídeo de su cerebro está lleno de sangre negra coagulada. Esa sangre va a irritar las arterias del polígono de Willis como si les echaran ácido encima. En la próxima semana, las arterias se cerrarán de dolor y rabia (Vasoespasmo), dejándole el cerebro sin oxígeno en un infarto masivo silencioso. Pon a la enfermera a machacar pastillas amarillas de Nimodipino y métele esa dosis sagradamente por la sonda gástrica cada 4 horas, sea de día o de madrugada. Este bloqueador de calcio tiene las llaves mágicas de las arterias del cráneo; las obligará a mantenerse abiertas y calmas, dejando que el cerebro limpie la sangre muerta en paz.",
    keyPoints: [
      "Hemorragia Subaracnoidea (HSA): Clínica: Cefalea Súbita en Trueno (La peor de la vida) + Signos meníngeos + TAC con sangre estrellada en base de cráneo.",
      "Complicación tardía más temida (Día 4-14): Vasoespasmo Cerebral Isquémico.",
      "Prevención Farmacológica de ORO: NIMODIPINO oral (60 mg cada 4h por 21 días)."
    ]
  },
  {
    id: "umng-conv-ed4-95",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "MEDICINA DE URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un paciente masculino de 38 años, diagnosticado de Tuberculosis pulmonar latente en esquema profiláctico, es traído en ambulancia al servicio de urgencias luego de ingerir dos frascos enteros de su medicación para la Tuberculosis en un intento de autólisis. Al ingreso, el paciente se encuentra en un estado de Estatus Epiléptico refractario (convulsiones generalizadas tónico-clónicas que no han cedido tras la administración consecutiva de 3 dosis altas de Diazepam IV y una carga de Fenitoína en reanimación). Sus gases arteriales muestran una acidosis láctica profunda secundaria al daño muscular por las convulsiones prolongadas. Sabiendo el medicamento específico que este paciente estaba tomando diariamente de forma preventiva, ¿cuál es el diagnóstico toxicológico y el antídoto INTRAVENOSO OBLIGATORIO que apagará la crisis convulsiva de forma casi instantánea al reponer el cofactor GABA central?",
    options: [
      { id: "A", label: "A", text: "Intoxicación por Rifampicina / Antídoto: Emulsión Lipídica Intravenosa." },
      { id: "B", label: "B", text: "Intoxicación por Etambutol / Antídoto: Azul de metileno rápido." },
      { id: "C", label: "C", text: "Intoxicación por Isoniazida / Antídoto: Piridoxina (Vitamina B6) en bolos intravenosos dosis-dependientes." },
      { id: "D", label: "D", text: "Intoxicación por Pirazinamida / Antídoto: Bicarbonato de Sodio y Hemodiálisis extrema." }
    ],
    correctOptionId: "C",
    explanation: "La Isoniazida (INH) es el pilar de la Tuberculosis. Su principal efecto secundario crónico es la Neuropatía Periférica (por eso siempre se receta junto con Vitamina B6 al enfermo). Pero en Sobredosis Masiva Aguda, la Isoniazida ataca al cerebro. El medicamento bloquea masivamente a la enzima (Glutamato descarboxilasa dependiente de piridoxina) que fabrica el GABA en las neuronas. El GABA es el freno del cerebro. Si te quedas sin GABA, el cerebro se acelera al infinito, produciendo Convulsiones letales prolongadas. ¿Por qué no sirve inyectarle Diazepam a chorros? Porque el Diazepam necesita \"pegarse\" al receptor del GABA para funcionar; si el paciente NO TIENE la sustancia química GABA en el cerebro, el Diazepam no tiene de donde agarrarse para abrir el canal de Cloro. ¡El paciente convulsionará hasta que el corazón se le detenga! El único antídoto en el mundo es inyectarle directamente PIRIDOXINA (Vitamina B6) pura por la vena (típicamente se da 1 gramo de Piridoxina por cada gramo de Isoniazida ingerido, hasta 5 gramos directos). La Vitamina B6 entra al cerebro, destraba la máquina, el cerebro fabrica toneladas de GABA en un segundo, y las convulsiones cesan casi por arte de magia de inmediato.\n\n**TRAMPA DEL EXAMEN:** Asumir que las benzodiacepinas lo curan todo: En toxicología de urgencias, hay un axioma claro. Si un paciente tiene convulsiones que no ceden (Estatus refractario) a dos ampollas de midazolam o diazepam, debes buscar los \"Tóxicos Mudos al Diazepam\": Isoniazida (falta Vit B6), Hipoglucemia severa (falta Glucosa), o Hiponatremia (falta Sal).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., los frenos del cerebro de este hombre no están gastados, simplemente desaparecieron. Al tomarse el frasco de Isoniazida (la pastillita milagrosa contra la TBC), el medicamento quemó toda la reserva de Vitamina B6 que su cuerpo tenía para fabricar \"GABA\" (el líquido de frenos neurológico). Le puedes inyectar 10 ampollas de Lorazepam para frenar su ataque epiléptico, y sus neuronas se reirán de tu esfuerzo, porque la droga no encuentra el líquido para empujar el pedal. Consigue en el carro de paro o en la farmacia las oscuras ampollas de Piridoxina. Empújaselas por la vena del brazo en megadosis. El cerebro absorberá la vitamina y fabricará su propio líquido de frenos, parando la convulsión eléctrica en el monitor como si desconectaras la televisión de la pared.",
    keyPoints: [
      "Tratamiento para Tuberculosis / Tóxico desconocido + Convulsiones REFRACTARIAS a Benzodiacepinas = Intoxicación por ISONIAZIDA.",
      "Fisiopatología: Secuestra el fosfato de piridoxal, dejando al cerebro SIN GABA (Inhibidor).",
      "Antídoto Mágico: PIRIDOXINA (Vitamina B6) Intravenosa en gramo a gramo."
    ]
  },
  {
    id: "umng-conv-ed4-96",
    university: "UMNG",
    examArea: "UROLOGÍA",
    topic: "MEDICINA DE URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una mujer de 55 años asiste al servicio de urgencias quejándose de dolor cólico intenso, desgarrador e irradiado hacia la fosa ilíaca izquierda y la región inguinal, asociado a náuseas persistentes, que inició súbitamente esta madrugada. Al interrogar a la paciente, ella revela que además siente mucho frío y ha tiritado violentamente (escalofríos repetidos). Al examen físico, luce pálida y sudorosa, su Temperatura es de 39.5°C, PA de 90/55 mmHg (Tendencia a la hipotensión) y el pulso es de 115 lpm. Se realiza un examen de orina de urgencia (Uroanálisis) que demuestra orina turbia, piuria franca (más de 100 leucocitos por campo) y bacteriuria abundante (+++). Una Tomografía (Uro-TAC simple) confirma la presencia de un Cálculo (Lito) de 8 milímetros enclavado en el uréter proximal izquierdo, el cual causa hidroureteronefrosis severa moderada de ese riñón. Ante esta emergencia litiásica complicada que cursa francamente con Urosepsis grave, ¿cuál es el paso QUIRÚRGICO-INTERVENCIONISTA de urgencia INNEGOCIABLE que debe ejecutarse tras el inicio del antibiótico de amplio espectro?",
    options: [
      { id: "A", label: "A", text: "Realizar Litotricia Extracorpórea por Ondas de Choque (LEOC) inmediata para pulverizar y destruir la piedra lo más pronto posible." },
      { id: "B", label: "B", text: "Someter a la paciente a Ureteroscopia flexible láser urgente para extraer el cálculo por vía endoscópica retrograda hasta sacarlo." },
      { id: "C", label: "C", text: "Derivación urinaria urgente (Descompresión de la Vía Urinaria) mediante inserción de Catéter doble J (pigtail) o Nefrostomía Percutánea de inmediato." },
      { id: "D", label: "D", text: "Realizar Laparotomía exploratoria y nefrectomía izquierda de urgencia por riesgo de pionefrosis letal diseminada." }
    ],
    correctOptionId: "C",
    explanation: "La orina de la paciente dejó de ser líquida y se volvió pus por la infección bloqueada. Todo el riñón izquierdo se está inflando a presión (Pionefrosis) y botando bacterias a la sangre de la paciente, matándola (por eso tiene la presión por el suelo, en 90/55). Las guías urológicas internacionales (AUA y EAU) son claras: Cólico Nefrítico + FIEBRE/INFECCIÓN = EMERGENCIA UROLÓGICA (Descompresión INMEDIATA). El único objetivo no es sacar la piedra hoy; el objetivo es salvar la vida. Para esto se hace un Drenaje Temporal: el urólogo entra rápidamente, pasa un alambre fino por el lado de la piedra y deja metido un tubo de plástico con rizos en las puntas (Catéter Doble J o Pigtail) que conecte el riñón con la vejiga, saltándose el trancón. O, si no se puede por abajo, el radiólogo le clava un tubo por la espalda hacia el riñón (Nefrostomía percutánea). Al destapar la cañería, los litros de pus escapan a la bolsa de recolección, bajando la presión renal, permitiendo que el antibiótico funcione y la fiebre caiga. Días o semanas después, con la paciente sana y fría en casa, se citará para ahora sí destruir la piedra.\n\n**TRAMPA DEL EXAMEN:** Manejo electivo vs Manejo de Urgencias:\n- Piedra grande + Sin fiebre (Paciente sano con cólico feo) -> Litotricia o Ureteroscopia (sacar la piedra).\n- Piedra + Fiebre/Leucocitosis/Choque -> Derivación de Orina (Doble J o Nefrostomía) (NUNCA romper la piedra hoy).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el riñón izquierdo de esta señora es un globo a punto de reventar relleno de pus. La piedra de su uretra bloqueó la salida de la orina, las bacterias del tracto urinario nadaron felices hacia el charco de agua estancada y montaron su cuartel general. Esa es la causa de sus escalofríos y la hipotensión que la tienen al borde de la tumba. Ni se te ocurra sugerir que \"le pasen láser\" a la piedra hoy. Si haces eso, el agua a presión del láser enviará tsunamis de bacterias del riñón hacia las venas de la paciente y ella hará paro en el quirófano de la fiebre. Solo métanle un alambrito de plástico con huecos de lado a lado por encima del cálculo para que la orina sucia logre filtrarse hacia la vejiga, liberas la presión letal y le das el antibiótico fuerte. La \"operación bonita\" para cazar y moler la piedra la dejarás para el mes entrante, cuando ella llegue caminando contenta a consulta externa.",
    keyPoints: [
      "Urgencias Urológicas Absolutas (Descompresión Inmediata):",
      "1. Cólico Nefrítico (Obstrucción) + INFECCIÓN (Fiebre/Pus en orina).",
      "2. Cólico Nefrítico + Riñón Único (Anuria).",
      "3. Cólico Nefrítico + Falla Renal Aguda o Dolor Refractario a Opiáceos.",
      "Manejo quirúrgico salvavidas: Catéter Doble J o Nefrostomía Percutánea."
    ]
  },
  {
    id: "umng-conv-ed4-97",
    university: "UMNG",
    examArea: "ORTOPEDIA Y TRAUMATOLOGÍA",
    topic: "GERIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una mujer de 82 años, con diagnóstico de Osteoporosis severa, resbala en la alfombra del baño de su casa y cae fuertemente apoyándose sobre su lado derecho. Su nieto la encuentra imposibilitada para levantarse del piso, quejándose amargamente de dolor en la zona superior de su muslo y región pélvica derecha. Al examinar a la paciente en la camilla de urgencias, usted evidencia una postura ortopédica que delata instantáneamente el diagnóstico antes de solicitar la radiografía de la cadera. Al mirar sus miembros inferiores apoyados sobre la sábana, la pierna derecha del paciente asume la siguiente posición clásica:",
    options: [
      { id: "A", label: "A", text: "La extremidad está acortada, flexionada, en aducción y severamente rotada hacia ADENTRO (Rotación Interna)." },
      { id: "B", label: "B", text: "La extremidad se encuentra extendida en longitud normal, pero se ve francamente cianótica, sin pulso, y rotada hacia ADENTRO." },
      { id: "C", label: "C", text: "La extremidad está francamente acortada, ligeramente en abducción y severamente rotada hacia AFUERA (Rotación Externa), de tal modo que el borde exterior del pie derecho toca o descansa directamente sobre el colchón." },
      { id: "D", label: "D", text: "La extremidad se observa alargada (más larga que la izquierda), con abducción marcada y el talón apuntando hacia el cielo." }
    ],
    correctOptionId: "C",
    explanation: "La Fractura de Cadera del Anciano (ya sea de Cuello Femoral Intracapsular o Intertrocantérica Extracapsular) ocurre en huesos osteoporóticos con mecanismos tan bobos como tropezar con la mascota. El hueso del cuello del fémur se parte por la mitad (como si quebraras un palo de escoba viejo). Al perder el soporte duro del cuello, el hueso largo del muslo \"se resbala\" hacia arriba empujado por la fuerza masiva de los músculos glúteos y los isquiotibiales (Por eso la pierna se ve ACORTADA, el talón derecho está más arriba que el izquierdo). Pero lo más llamativo es que, como el hueso ya no está atado firmemente al anillo pélvico, la gravedad simple y la acción del músculo Psoas-Ilíaco y rotadores cortos jalan todo el fémur \"abriendo la puerta\". El pie del paciente se voltea totalmente hacia el lado, \"desparramado\" hacia el exterior en una ROTACIÓN EXTERNA marcada (90 grados), y la parte externa de su zapato o tobillo rosa casi completamente con las sábanas de la cama. Al ver un abuelo acostado con \"una pierna más corta y el pie apuntando exageradamente hacia afuera\", ni lo dudes, la cadera está rota.\n\n**TRAMPA DEL EXAMEN:** Fractura vs Luxación en Rotaciones: Vuelvo a insistirte, la UMNG adora jugar con las rotaciones del pie, lo vimos en el lote anterior.\n- Joven con choque de moto y pie hacia ADENTRO = Luxación Posterior de Cadera.\n- Abuela con caída y pie hacia AFUERA = Fractura de Cuello Femoral de Cadera.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., los huesos de esta abuelita son como galletas de soda frágiles. Al tropezar con la alfombra del baño, la caída y la simple contracción desesperada de sus músculos para evitar golpearse rompieron el cuello de su fémur como una varita de yeso. Al romperse el puente que une su pierna con la pelvis, la pierna se volvió un péndulo sin ancla. Los músculos de la cadera, al estar tan tensos, recogieron la pierna jalándola hacia la cadera (acortamiento). Y como no hay nada que mantenga el pie mirando al techo, el peso mismo de la pierna y los tendones de la cadera abrieron la puerta. El pie se desploma de lado hacia la parte exterior de la camilla (Rotación Externa). Mantenla quieta en su camilla, pide la radiografía de pelvis que confirmará tu instinto de galeno de la vieja escuela y súbela al ortopedista para que le pongan clavos de titanio mañana a primera hora.",
    keyPoints: [
      "Signo visual oro de la FRACTURA DE CADERA en el anciano:",
      "Extremidad inferior ACORTADA.",
      "Extremidad inferior en ROTACIÓN EXTERNA (El pie cae \"abierto\" hacia afuera tocando la camilla)."
    ]
  },
  {
    id: "umng-conv-ed4-98",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "CUIDADO CRÍTICO",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una paciente de 28 años, nulípara, es hospitalizada en su semana 39 de embarazo por diagnóstico de Preeclampsia con Criterios de Severidad (PA 170/115 mmHg, proteinuria masiva). Mientras es evaluada por el ginecobstetra, la paciente súbitamente queda con la mirada fija, pierde el conocimiento, y presenta contracciones musculares violentas tónicas seguidas de movimientos clónicos rítmicos generalizados (Crisis Eclámptica inminente o activa), acompañadas de cianosis facial por apnea. Antes de preparar la cesárea de emergencia o la estabilización de vía aérea avanzada que dicte el caso, usted debe administrar inmediatamente el anticonvulsivante de PRIMERA LÍNEA (droga neuroprotectora y estabilizadora de membrana de oro). ¿Cuál es este medicamento innegociable mundialmente para abortar y prevenir recurrencias de las convulsiones de la Eclampsia?",
    options: [
      { id: "A", label: "A", text: "Diazepam intravenoso seguido de Fenitoína impregnada en infusión rápida por 20 minutos (15 mg/kg)." },
      { id: "B", label: "B", text: "Sulfato de Magnesio (MgSO4) infusión intravenosa: 4 gramos en bolo de carga lenta, seguido de goteo de mantenimiento de 1 a 2 g/h." },
      { id: "C", label: "C", text: "Labetalol intravenoso a dosis máximas para bajar la presión arterial cerebral que causa las crisis, hasta llegar a 120/80 mmHg." },
      { id: "D", label: "D", text: "Ácido Valproico o Levetiracetam por vía endovenosa para control de foco epileptogénico temporal." }
    ],
    correctOptionId: "B",
    explanation: "El Sulfato de Magnesio (MgSO4) es un ión neuroprotector milagroso. En la Eclampsia, el cerebro de la madre se \"hinchó\" (Edema vasogénico y endotelial por hipertensión brutal / Síndrome PRES). Esto disparó los canales de los receptores NMDA del cerebro electrocutándolo en convulsiones. El Magnesio bloquea el canal de calcio del receptor NMDA, actuando como el mejor anticonvulsivante del mundo exclusivo para esta enfermedad, relajando además los vasos cerebrales (y protegiendo neurológicamente al bebé). La dosis universal de ORO (Protocolo Zuspan Modificado) es 4 gramos Intravenosos de bolo inicial (Carga en 15 a 20 min), seguidos de una infusión constante por bomba de goteo de 1 a 2 gramos por hora que se mantiene durante 24 horas después del parto/cesárea.\n\n**TRAMPA DEL EXAMEN:** La memoria del Urgenciólogo: Ver a alguien mover brazos y piernas convulsionando te grita \"Tráeme la ampolla de Midazolam\". Si haces eso en obstetricia, cometes mala praxis. Memoriza: \"Embarazada que convulsiona y tiene barriga y presión alta, se envasa en Sulfato de Magnesio\".\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el cerebro de esta mamá joven y embarazada hizo cortocircuito. Las arterias de su cabeza se apretaron tanto por la presión alta que dejaron pasar líquido hacia el interior del cerebro (edema cerebral), ahogando las neuronas en chispas de electricidad incontrolada. No corras a buscar las drogas de los psiquiatras o los epilépticos. Su enfermedad es un fallo del endotelio vascular causado por la placenta rebelde que lleva adentro. Cuelga un bolo espeso de 4 gramos de Sulfato de Magnesio directo por sus venas. El magnesio es un tapón molecular perfecto: se pega a los receptores cerebrales y cierra el paso al calcio tóxico que la hace temblar, relajándola suavemente y apagando la convulsión sin sedarla profundamente para que no se ahogue. Apagado el incendio, corre a sacarle a ese bebé de adentro, que es la única cura final para esta enfermedad.",
    keyPoints: [
      "Tratamiento Curativo y Profiláctico de las Convulsiones en ECLAMPSIA (y Preeclampsia Severa):",
      "Fármaco ÚNICO de Primera Línea: SULFATO DE MAGNESIO (MgSO4) Intravenoso.",
      "Dosis estándar universal: Carga 4g IV (en 20 min) -> Mantenimiento 1-2 g/h.",
      "Es superior al Diazepam o Fenitoína para proteger madre/feto."
    ]
  },
  {
    id: "umng-conv-ed4-99",
    university: "UMNG",
    examArea: "MEDICINA TROPICAL",
    topic: "INFECTOLOGÍA Y CUIDADO CRÍTICO",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un campesino de 35 años, oriundo y procedente de una zona selvática endémica del Chocó (Costa Pacífica colombiana), asiste de urgencia al hospital local tras 6 días de un cuadro inicial febril (temperaturas en \"picos\" intermitentes muy agresivos con sudoración empapadora) que ha evolucionado hacia un franco estupor y desorientación profunda el día de hoy (Glasgow 9). Al examen físico, el paciente presenta ictericia franca en piel y conjuntivas, palidez masiva de mucosas (Hb 6.0 g/dL) y signos de hepatomegalia. En urgencias, convulsiona. Una Gota Gruesa de emergencia confirma la presencia aplastante de anillos finos y múltiples parásitos en un solo glóbulo rojo, confirmando el diagnóstico de Malaria Severa (Paludismo Complicado Cerebral) por infección de Plasmodium falciparum con parasitemia del 8%. Teniendo en cuenta el alto riesgo de muerte por secuestro microvascular cerebral (Roseteo de glóbulos rojos) en las próximas 24 horas, ¿cuál es el medicamento antimalárico INTRVENOSO de PRIMERA LÍNEA dictado por la Organización Mundial de la Salud y Minsalud para salvarle la vida al paciente?",
    options: [
      { id: "A", label: "A", text: "Cloroquina oral en esquema de 3 días con Primaquina para limpieza final de hipnozoítos." },
      { id: "B", label: "B", text: "Artesunato Intravenoso (IV) o intramuscular, con dosis al tiempo cero, 12 h y 24 h." },
      { id: "C", label: "C", text: "Quinina oral con Clindamicina adyuvante para profilaxis neurológica." },
      { id: "D", label: "D", text: "Megadosis de Mefloquina oral y exanguinotransfusión inminente." }
    ],
    correctOptionId: "B",
    explanation: "La Malaria Cerebral Complicada ocurre porque el Plasmodium falciparum infecta los glóbulos rojos y los vuelve \"pegajosos\" (les crecen unos ganchos de proteína en la membrana externa). Millones de glóbulos rojos pegajosos se \"estrellan y amontonan\" en las pequeñas venitas del cerebro del paciente (Roseteo/Secuestro endotelial), tapando el oxígeno de las neuronas y causando microinfartos esparcidos (por eso el hombre entra en coma y convulsiona). El único Fármaco Mágico que \"destruye y arranca\" a los parásitos pegados de los vasos sanguíneos del cerebro rápidamente de manera intravenosa es el Artesunato IV (o IM si no hay vía). Las guías de oro dictan administrar Artesunato intravenoso a las 0h, 12h, 24h y luego diario hasta que tolere vía oral (para pasar a la Terapia Combinada Basada en Artemisinina ACT de mantenimiento, como Arteméter/Lumefantrina oral para matar el sobrante). La mortalidad se desploma drásticamente usando este fármaco chino derivado del ajenjo dulce.\n\n**TRAMPA DEL EXAMEN:** Actualización farmacológica letal: Un profesor \"vieja guardia\" te tentará con Quinina Intravenosa. Si bien en un pueblo sin recursos a las 3 AM puedes usar Quinina IV para salvar la vida si no hay otra cosa, el Examen de Estado avala única y oficialmente al Artesunato IV como REY de la primera línea en Malaria Complicada avalado por la OMS y el Ministerio desde hace una década.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., las pequeñas venas del lóbulo frontal de este campesino están taponadas por millones de glóbulos rojos redondos infestados de gusanos en forma de anillo. El parásito de la malaria del pacífico colombiano sabe cómo hacerse \"chicloso\" para que el cuerpo no se lo coma fácilmente; al volverse chicloso trancó el tráfico de sangre oxigenada que el cerebro exigía (Malaria cerebral). Su hígado está fallando y las pupilas no le reaccionan en coma. No le pongas tabletitas de medicina en la boca a un hombre desmayado porque se ahogará con ellas. Canaliza una vía grande en su brazo y pasa en goteo la joya de la selva asiática: el Artesunato de inyección. El químico entrará al cerebro y \"pelará\" el pegamento de las células enfermas, rompiendo los parásitos vivos por dentro y permitiéndole despertar en el pabellón de la UCI mañana en la mañana para dar las gracias.",
    keyPoints: [
      "Malaria Complicada (Coma, Convulsión, Choque, Falla renal, Anemia <7g, Falla Hepática, Sangrado o Parasitemia muy alta) = Casi siempre es P. falciparum.",
      "Tratamiento INNEGOCIABLE Salvavidas: ARTESUNATO Intravenoso (IV) (Bajar de la Quinina al segundo puesto)."
    ]
  },
  {
    id: "umng-conv-ed4-100",
    university: "UMNG",
    examArea: "BIOÉTICA Y LEGISLACIÓN COLOMBIANA",
    topic: "CUIDADO PALIATIVO - ¡LA LEYENDA DEL ÚLTIMO CASO!",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Usted es el médico de planta en una sala de medicina interna oncológica. Se encuentra frente al caso de un paciente varón de 75 años con diagnóstico de Cáncer de Pulmón (Mesotelioma metastásico difuso) en fase terminal irreversible, con pronóstico de vida de escasas horas. El paciente sufre de Disnea Refractaria masiva, asfixia agónica (estertores de muerte) y un dolor oncológico intratable que le causa angustia, agitación y un sufrimiento abrumador frente a su familia, siendo refractario a todas las medidas estándar oxigenatorias y analgésicas basales. Sabiendo que no hay posibilidad de curación, y tras discutir el caso con la familia que implora \"que no lo dejen sufrir más asfixiándose\", usted decide instaurar el protocolo de Sedación Paliativa Terminal. Usted prescribe de forma pautada una infusión continua intravenosa a dosis tituladas muy altas de Midazolam (Benzodiacepina para sedación profunda) combinada con Morfina (Opioide potente para dolor y sed de aire). Usted sabe perfectamente que, debido a la depresión respiratoria, esta intervención acelerará previsiblemente el momento final del fallecimiento del paciente en las próximas horas. Teniendo en cuenta la Bioética Mundial y el Código de Ética de Colombia, ¿este acto médico es éticamente lícito, o incurre en Eutanasia Activa / Homicidio por piedad sancionable por la ley?",
    options: [
      { id: "A", label: "A", text: "El acto es ILEGAL (Eutanasia Activa no protocolizada). Usted será destituido y llevado a fiscalía por homicidio, ya que administrar medicamentos que aceleran la muerte está prohibido sin un comité nacional de Muerte Digna previo aprobatorio." },
      { id: "B", label: "B", text: "El acto es LÍCITO y respaldado éticamente bajo el Principio del Doble Efecto. La intención moral es aliviar el síntoma intratable del dolor y la disnea (Efecto bueno primario), asumiendo el adelantamiento de la muerte como una consecuencia tolerada, secundaria y no intencional (Efecto malo secundario)." },
      { id: "C", label: "C", text: "El acto es LÍCITO, pero se define legalmente como Homicidio por Piedad consentido, el cual está despenalizado en Colombia para todos los médicos de piso y no acarrea sanción." },
      { id: "D", label: "D", text: "El acto es ILEGAL porque la Sedación Paliativa solo permite el uso de Oxígeno y analgésicos menores (Acetaminofén/Tramadol) en el pre-mortem, la dosis \"muy alta\" de morfina cruzó el margen de la mala praxis intencional." }
    ],
    correctOptionId: "B",
    explanation: "Esta es la lección de vida para todo especialista. El Principio de Doble Efecto (o Acción de Voluntario Indirecto) dice que una acción que tiene un resultado bueno y uno malo es ÉTICAMENTE LÍCITA y correcta, siempre y cuando se cumplan estrictas reglas:\n1) La acción en sí misma es buena (Administrar una droga aprobada para calmar).\n2) La intención directa del médico es lograr el efecto BUENO (Aliviar la disnea y la angustia con Morfina y Midazolam, no lo hace \"con la intención malvada de matarlo\").\n3) El efecto bueno NO se logra a través del efecto malo (No matas para aliviar el dolor, alivias el dolor y, lamentablemente, deprimiste el centro respiratorio acelerando algo que iba a pasar hoy de todas formas).\n4) Hay una causa proporcional grave (El sufrimiento actual es inhumano y atroz, la muerte es inminente).\nAl aplicar la Sedación Paliativa, tú eres un médico ético y heroico. Duermes la mente del anciano para que no esté consciente del pánico de no poder respirar en sus últimas dos horas de vida. Te amparan todas las cortes internacionales y los códigos de bioética globales. Has brindado una muerte digna.\n\n**TRAMPA DEL EXAMEN:** Asustar al joven médico con demandas e inexperiencia: Te dirán que usar Morphina/Midazolam \"acelerando\" la muerte es Eutanasia velada (A y C). Nunca confundas Sedación Paliativa (tu fin primario es sedar el sufrimiento) con Eutanasia Activa Directa (tu fin primario es la paralización miocárdica y el cese de vida instantáneo).\n\n**EXPLICACIÓN DEL PROFE BY DR Q (ÚLTIMO DISCURSO MAGISTRAL):**\nDr., cierra el manual de farmacología un segundo y mira a la familia que está llorando al pie de esa cama en el pabellón de oncología. Los pulmones de este hombre son piedra tumoral dura. Ya no logran meter oxígeno. Su cerebro, desesperado, le da la sensación de estarse ahogando bajo el agua durante las últimas 4 horas sin descanso; mira sus ojos pelados del pánico mientras usa hasta el último músculo del cuello tratando de tragar aire. Y la medicina aquí no tiene curas, ni trasplantes, ni magia.\nPero la medicina tiene Misericordia.\nNo te escondas detrás de miedos legales sobre \"si le pongo mucha morfina lo mato antes\". Su muerte ocurrirá esta noche de todos modos. Tu trabajo supremo hoy no es salvar su cuerpo de la fosa de tierra, es salvar la poca alma y dignidad que le queda antes del final. Cuélgale la bomba de infusión en las venas. Mezcla los miligramos gruesos de Midazolam para apagar el pánico de su cerebro frontal y los miligramos pesados de Morfina para aplacar el hambre de aire y relajar las válvulas apretadas del pecho. Verás cómo, en cuestión de 10 minutos, sus hombros se aflojan, su mirada de pánico se convierte en un sueño profundo y tranquilo, y la respiración agónica se vuelve un suspiro espaciado.\nSi dos horas después de esa bomba su corazón deja de latir con la familia sosteniendo su mano limpia y en paz, tú no has matado a nadie. Tú le has quitado el terror al monstruo del cáncer. Y eso, mi querido residente, es la cima más alta del arte de la Medicina.",
    keyPoints: [
      "Paciente Agónico / Terminal + Síntomas Refractarios Inhumanos (Disnea/Dolor/Delirio):",
      "Terapia Obligatoria: SEDACIÓN PALIATIVA (Midazolam + Opioides IV).",
      "Principio Jurídico y Ético que ampara si el paciente fallece antes por depresión respiratoria colateral: PRINCIPIO DEL DOBLE EFECTO.",
      "(Nunca es Eutanasia, Nunca es Delito; es Medicina Humanizada)."
    ]
  }
];
