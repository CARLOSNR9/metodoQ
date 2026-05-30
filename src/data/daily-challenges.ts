import type { TrainingQuestion } from "@/lib/questions/types";

export const DAILY_CHALLENGES: TrainingQuestion[] = [
  {
    id: "pill-day-1",
    topic: "Semiología",
    statement: "Un paciente de 72 años con antecedente de hipertensión arterial mal controlada presenta un ruido de baja frecuencia al final de la diástole (presístole), mejor escuchado en el ápex con la campana. ¿Cuál es la causa fisiopatológica más probable?",
    options: [
      { id: "A", label: "A", text: "Vibración por llenado rápido ventricular (S3)." },
      { id: "B", label: "B", text: "Contracción auricular contra un ventrículo rígido (S4)." },
      { id: "C", label: "C", text: "Apertura de válvula mitral estenosada." },
      { id: "D", label: "D", text: "Cierre retardado de la válvula pulmonar." }
    ],
    correctOptionId: "B",
    explanation: "El cuarto ruido (S4) es causado por la sístole auricular que empuja sangre hacia un ventrículo con distensibilidad disminuida, común en hipertrofia por hipertensión crónica.",
    keyPoints: ["Ocurre en presístole", "Indica rigidez ventricular", "Signo clásico de HTA crónica"],
    theoryContent: `El cuarto ruido cardíaco (S4): cuándo sospecharlo y por qué aparece

Los ruidos cardíacos se organizan en el ciclo: S1 (cierre mitral/tricúspide), S2 (aórtico/pulmonar), y opcionalmente S3 y S4 en diástole.

El S4 es un sonido de baja frecuencia en presístole (final de la diástole), producido cuando la aurícula se contrae y empuja sangre hacia un ventrículo rígido o hipertrofiado. Por eso se escucha mejor con la campana en el ápex (foco mitral).

Diferencia clave S3 vs S4:
- S3: inicio de la diástole, asociado a llenado rápido y volumen elevado (insuficiencia, miocardiopatía dilatada, niños sanos).
- S4: final de la diástole, asociado a rigidez ventricular (HTA crónica, HVI, cardiopatía isquémica, estenosis aórtica).

Contexto clínico del caso:
Paciente mayor con HTA mal controlada → hipertrofia concéntrica del VI → menor distensibilidad → S4 en presístole.

Trampas de examen:
- Confundir S4 con apertura de estenosis mitral (también diastólico, pero ocurre después de S2 y suena como "chasquido" de apertura).
- Pensar que todo ruido diastólico es S3.
- Olvidar que S4 desaparece en fibrilación auricular (no hay contracción auricular organizada).

Cómo resolver la pregunta:
1. Ubica el momento del ciclo (presístole = S4).
2. Relaciona rigidez ventricular con HTA crónica.
3. Elimina opciones que describen otros fenómenos (S3, estenosis mitral, cierre pulmonar).`
  },
  {
    id: "pill-day-2",
    topic: "Cardiología",
    statement: "Hombre de 65 años con dolor torácico opresivo y elevación del ST en V2-V4. Se encuentra en un centro sin hemodinamia y el traslado tardará >3 horas. ¿Conducta inmediata?",
    options: [
      { id: "A", label: "A", text: "Traslado inmediato para angioplastia primaria." },
      { id: "B", label: "B", text: "Administrar terapia fibrinolítica sistémica IV." },
      { id: "C", label: "C", text: "Esperar troponinas para confirmar diagnóstico." },
      { id: "D", label: "D", text: "Iniciar solo manejo médico con doble antiagregación." }
    ],
    correctOptionId: "B",
    explanation: "En IAMCEST, si la angioplastia no puede realizarse en <120 min, se debe realizar fibrinólisis en los primeros 30 min para salvar miocardio.",
    keyPoints: ["Tiempo es músculo", "Fibrinólisis si traslado >120 min", "Puerta-aguja <30 min"],
    theoryContent: `IAMCEST sin hemodinamia disponible: reperfusión primaria vs fibrinólisis

En el infarto agudo con elevación del ST (IAMCEST), el objetivo es reperfundir lo antes posible. Existen dos estrategias principales:
1. Angioplastia primaria (PCI): preferida si puede realizarse en ≤120 min desde el primer contacto médico.
2. Fibrinólisis sistémica: indicada si la PCI no está disponible a tiempo.

Regla práctica de guías:
- Si el traslado a centro con hemodinamia tomará más de 120 minutos desde el diagnóstico, administra fibrinólisis en los primeros 30 min (meta puerta-aguja).
- Si la PCI puede lograrse en ≤120 min, prioriza traslado para angioplastia.

Por qué no esperar troponinas:
El diagnóstico de IAMCEST es clínico-electrocardiográfico. Esperar biomarcadores retrasa la reperfusión y aumenta mortalidad.

Por qué no solo manejo médico:
La doble antiagregación sin reperfusión no restaura flujo en oclusión coronaria aguda. El tiempo de isquemia determina tamaño del infarto.

Después de fibrinólisis:
Evalúa reperfusión (criterios clínicos/ECG). Si falla o hay inestabilidad, considera rescate con angioplastia.

Trampas de examen:
- "Traslado inmediato" suena bien, pero si tarda >3 h pierdes la ventana óptima sin fibrinólisis.
- Confundir meta puerta-balón (90 min) con puerta-aguja (30 min).

Algoritmo mental:
ECG con ST ↑ + síntomas compatibles → ¿PCI ≤120 min? Sí → traslado urgente. No → fibrinólisis ya.`
  },
  {
    id: "pill-day-3",
    topic: "Endocrinología",
    statement: "Paciente femenina con IMC de 33 kg/m² y HbA1c de 8.4% a pesar de dosis máxima de Metformina. No tiene enfermedad cardiovascular. ¿Qué fármaco es la mejor adición según ACE 2025?",
    options: [
      { id: "A", label: "A", text: "Sulfonilureas (Gliclazida)." },
      { id: "B", label: "B", text: "Insulina basal nocturna." },
      { id: "C", label: "C", text: "Agonistas del receptor GLP-1." },
      { id: "D", label: "D", text: "Inhibidores de la DPP-4." }
    ],
    correctOptionId: "C",
    explanation: "Los AR GLP-1 son preferidos en pacientes con obesidad por su alta eficacia glucémica y beneficio en reducción de peso.",
    keyPoints: ["Enfoque holístico (glucemia + peso)", "AR GLP-1 superior en obesidad", "Protección metabólica"],
    theoryContent: `Diabetes tipo 2 con obesidad: por qué los AR GLP-1 son segunda línea preferida

Cuando metformina a dosis máxima no alcanza la meta (HbA1c persistentemente elevada), la elección del segundo fármaco depende de comorbilidades, no solo de la cifra glucémica.

En paciente con obesidad (IMC ≥27-30) sin enfermedad cardiovascular establecida, los agonistas del receptor GLP-1 (semaglutida, liraglutida, dulaglutida) ofrecen:
- Potente reducción de HbA1c (1-1.5% aprox.)
- Pérdida de peso significativa (efecto central de saciedad + ralentización gástrica)
- Bajo riesgo de hipoglucemia (glucosa-dependiente)

Comparación rápida:
- Sulfonilureas: baratas pero ↑ peso e hipoglucemia.
- Insulina basal: útil con glucosa muy alta, pero promueve ganancia ponderal.
- iDPP-4: peso neutro, menos potencia glucémica que GLP-1.
- AR GLP-1: mejor perfil en obesidad + diabetes.

Guías actuales (ADA/EASD, ACE):
Priorizan GLP-1 o iSGLT2 según perfil. En obesidad predominante → GLP-1 primero.

Trampa de examen:
No escoger insulina como "mejor adición" cuando el problema principal es obesidad + HbA1c moderada sin cetoacidosis.

Cómo resolver:
1. ¿Hay obesidad? → piensa GLP-1.
2. ¿Hay IC o ERC? → considera iSGLT2.
3. ¿Glucosa >300 persistente con síntomas? → insulina transitoria.`
  },
  {
    id: "pill-day-4",
    topic: "Neumología",
    statement: "Paciente con EPOC Grupo E (exacerbador frecuente) y recuento de eosinófilos de 120 cél/uL. ¿Cuál es el tratamiento de mantenimiento inicial indicado?",
    options: [
      { id: "A", label: "A", text: "Monoterapia con LAMA." },
      { id: "B", label: "B", text: "Terapia dual LABA/LAMA." },
      { id: "C", label: "C", text: "Terapia dual ICS/LABA." },
      { id: "D", label: "D", text: "Terapia triple ICS/LABA/LAMA." }
    ],
    correctOptionId: "B",
    explanation: "Para el Grupo E, la combinación LABA/LAMA es el pilar para reducir exacerbaciones. Los corticoides (ICS) solo se añaden si eosinófilos >300.",
    keyPoints: ["Grupo E = Doble broncodilatación", "Eosinófilos guían uso de ICS", "LABA/LAMA reduce mortalidad"],
    theoryContent: `EPOC Grupo E: tratamiento escalonado según exacerbaciones y eosinófilos

La clasificación GOLD combina síntomas (mMRC/CAT) y exacerbaciones. El Grupo E (exacerbador frecuente) requiere tratamiento que reduzca eventos, no solo alivie disnea.

Pilar del Grupo E:
Terapia dual broncodilatadora LABA + LAMA (doble broncodilatación de larga acción). Esto mejora función pulmonar, disnea y reduce exacerbaciones vs monoterapia.

¿Cuándo agregar corticoide inhalado (ICS)?
- Eosinófilos ≥300 cél/µL sugieren componente inflamatorio tipo 2 → considerar triple terapia ICS/LABA/LAMA.
- Con eosinófilos 100-300: valoración individual.
- Con eosinófilos <100: ICS generalmente NO se recomienda (riesgo de neumonía sin beneficio claro).

En este caso (eosinófilos 120):
Aún no cumple umbral clásico de ≥300 para ICS. La respuesta correcta es LABA/LAMA, no triple terapia ni ICS/LABA.

Trampas de examen:
- Asumir que todo EPOC necesita corticoide inhalado.
- Confundir Grupo E con asma-EPOC overlap (overlap sí puede necesitar ICS antes).

Algoritmo:
Grupo E → LABA/LAMA → si eosinófilos altos o eosinofilia persistente → escalar a triple.`
  },
  {
    id: "pill-day-5",
    topic: "Infectología",
    statement: "Paciente con diagnóstico de TB Multidrogorresistente (MDR). ¿Cuál es la periodicidad del seguimiento de los contactos domiciliarios según MinSalud?",
    options: [
      { id: "A", label: "A", text: "Mensual hasta que el índice sea negativo." },
      { id: "B", label: "B", text: "Trimestral durante tratamiento y semestral por 2 años después." },
      { id: "C", label: "C", text: "Única valoración con PPD al inicio." },
      { id: "D", label: "D", text: "Semestral constante por 5 años." }
    ],
    correctOptionId: "B",
    explanation: "La norma técnica colombiana exige vigilancia trimestral de contactos durante el tratamiento de TB MDR para detección temprana de nuevos casos.",
    keyPoints: ["Vigilancia activa trimestral", "Seguimiento post-cura por 2 años", "Prioridad de salud pública"],
    theoryContent: `TB multidrogorresistente (MDR): vigilancia de contactos en Colombia

La tuberculosis MDR (resistente al menos a rifampicina e isoniazida) exige manejo prolongado con esquemas de segunda línea y vigilancia intensa de contactos por alto riesgo de transmisión y enfermedad latente activa.

Norma técnica MinSalud (Colombia):
Los contactos de casos de TB MDR deben ser evaluados al identificar el caso y luego:
- Seguimiento trimestral mientras el caso índice recibe tratamiento.
- Seguimiento semestral durante 2 años adicionales después de completar el tratamiento del índice.

Objetivo:
Detectar tempranamente TB activa o progresión de infección latente en contactos de alto riesgo (convivientes, contactos cercanos).

¿Por qué no solo PPD inicial?
Una sola prueba al inicio no captura conversión tardía. Los contactos pueden desarrollar enfermedad meses después.

¿Por qué no mensual indefinido?
No es el esquema estandarizado nacional; la norma define periodicidad trimestral + semestral post-tratamiento.

Implicación para el examen:
Preguntas de salud pública en Colombia suelen evaluar conocimiento de la norma técnica, no solo principios generales de TB sensible.`
  },
  {
    id: "pill-day-6",
    topic: "Neurología",
    statement: "Paciente con hemiparesia súbita y afasia de 45 min de evolución. ¿Qué escala es fundamental para decidir terapia de reperfusión?",
    options: [
      { id: "A", label: "A", text: "Escala de Glasgow." },
      { id: "B", label: "B", text: "Escala ABCD2." },
      { id: "C", label: "C", text: "Escala NIHSS." },
      { id: "D", label: "D", text: "Escala ASPECTS." }
    ],
    correctOptionId: "C",
    explanation: "La NIHSS es el estándar para cuantificar el déficit neurológico y es criterio de inclusión/exclusión para trombólisis.",
    keyPoints: ["NIHSS = Cuantificación objetiva", "Decisión terapéutica rápida", "FAST es solo prehospitalario"],
    theoryContent: `Código ictus: escalas clínicas y su propósito en reperfusión

Ante un déficit neurológico agudo, el tiempo define el tratamiento. Varias escalas se usan en momentos distintos del flujo:

NIHSS (National Institutes of Health Stroke Scale):
- Cuantifica severidad del déficit neurológico (0-42).
- Estándar para decidir elegibilidad de trombólisis IV y trombectomía.
- Se repite para monitorizar evolución.
- Es la escala fundamental en la ventana de reperfusión aguda.

ASPECTS:
- Evalúa extensión de isquemia temprana en TAC simple (0-10).
- Ayuda a estratificar riesgo/beneficio de reperfusión, especialmente en trombectomía.
- No reemplaza NIHSS para cuantificar el déficit clínico.

Glasgow:
- Nivel de conciencia en trauma/intensivos.
- No detalla déficit focal ni guía trombólisis específicamente.

ABCD2:
- Estratifica riesgo de infarto en AIT (evento transitorio), no en ictus establecido agudo.

FAST (Face, Arms, Speech, Time):
- Herramienta prehospitalaria de detección rápida.
- No sustituye evaluación formal con NIHSS en urgencias.

Trampa de examen:
Elegir ASPECTS cuando preguntan por "decidir terapia de reperfusión" en el cuadro clínico agudo → la respuesta es NIHSS.

Regla práctica:
Prehospitalario = FAST. Urgencias/decisión reperfusión = NIHSS + imagen (TAC).`
  },
  {
    id: "pill-day-7",
    topic: "Bioestadística",
    statement: "Se aplica una prueba diagnóstica con Sensibilidad 99% y Especificidad 95% en una población con Prevalencia muy baja. ¿Por qué el Valor Predictivo Positivo (VPP) es bajo?",
    options: [
      { id: "A", label: "A", text: "Porque el VPP depende directamente de la prevalencia." },
      { id: "B", label: "B", text: "Porque la sensibilidad es demasiado alta.", incorrectFeedback: "Sensibilidad alta ayuda a detectar enfermos, pero no explica un VPP bajo. El problema aquí es la prevalencia baja que genera muchos falsos positivos." },
      { id: "C", label: "C", text: "Por el sesgo de altura en ciudades como Bogotá." },
      { id: "D", label: "D", text: "Porque los valores predictivos son invariables." }
    ],
    correctOptionId: "A",
    explanation: "Matemáticamente (Bayes), si la prevalencia es casi cero, los falsos positivos superarán a los verdaderos, bajando drásticamente el VPP.",
    keyPoints: ["VPP depende de la Prevalencia", "Teorema de Bayes aplicado", "Cuidado con tamizajes masivos"],
    theoryContent: `¿Por qué una prueba "excelente" puede dar un VPP pésimo?

Sensibilidad y especificidad describen cómo se comporta la prueba en pacientes con y sin enfermedad. Los valores predictivos, en cambio, responden la pregunta clínica real: "Si el resultado es positivo (o negativo), ¿cuánto debo confiar en él?".

El VPP depende de tres variables: sensibilidad, especificidad y prevalencia. En poblaciones con prevalencia muy baja, incluso una especificidad del 95% genera muchos falsos positivos absolutos. Esos falsos positivos pueden superar fácilmente a los verdaderos positivos.

Ejemplo numérico simplificado (población de 10.000, prevalencia 0,1%):
- Enfermos reales: 10
- Con sensibilidad 99%: ~10 verdaderos positivos
- Sanos: 9.990
- Con especificidad 95%: ~500 falsos positivos
- VPP ≈ 10 / (10 + 500) ≈ 2%

Conclusión clínica:
Un resultado positivo en tamizaje masivo NO equivale a enfermedad confirmada. Siempre requiere una prueba confirmatoria y interpretación en contexto pretest.

Trampa de examen:
No confundir sensibilidad alta con VPP alto. Una prueba muy sensible puede ser útil para descartar enfermedad (VPN alto con baja prevalencia), pero el VPP cae cuando la enfermedad es rara.

Cómo resolver este tipo de pregunta:
1. Identifica si te preguntan propiedades intrínsecas de la prueba (Sens/Esp) o utilidad clínica posterior (VPP/VPN).
2. Si mencionan prevalencia baja + resultado positivo, piensa en falsos positivos dominantes.
3. Recuerda Bayes: el resultado posterior depende del prior (prevalencia).`
  }
];
