import { buildUnivalleQuestion as q } from "./build-question";

/** Ruta Dermatología Univalle · #01–#10 (dermatología tropical e infecciosa). */
export const UNIVALLE_DERMATOLOGIA_01_10 = [
  q({
    id: "univalle-derm-01",
    examArea: "DERMATOLOGÍA",
    topic: "LEISHMANIASIS CUTÁNEA",
    difficulty: "medium",
    tags: ["dermatologia", "tropical"],
    statement:
      "Un hombre de 24 años, soldado que regresa de 3 meses de operaciones en zona rural de López de Micay (Cauca), consulta al Hospital Universitario del Valle por una úlcera en el antebrazo de 6 semanas de evolución. Es redondeada, de 3 cm, indolora, con bordes elevados, eritemato-violáceos y fondo limpio granular. El frotis directo del borde muestra amastigotes. No tiene lesiones mucosas, ni comorbilidades, y sus pruebas renal, hepática y electrocardiograma son normales. ¿Cuál es el tratamiento de primera línea recomendado en Colombia?",
    options: [
      [
        "Antimoniato de meglumina 20 mg/kg/día de Sb⁵⁺ por 20 días.",
      ],
      [
        "Dicloxacilina oral por 10 días y curaciones diarias.",
        "La úlcera de bordes elevados e indolora, en zona endémica y con amastigotes, no es una piodermitis bacteriana; los antibióticos no curan la leishmaniasis.",
      ],
      [
        "Itraconazol oral por 3 meses.",
        "Los azoles se usan en micosis profundas (esporotricosis, paracoccidioidomicosis); en leishmaniasis cutánea no son primera línea en Colombia.",
      ],
      [
        "Anfotericina B liposomal como primera opción ambulatoria.",
        "La anfotericina se reserva para formas mucosas graves, viscerales o fracaso/contraindicación de antimoniales; no es la primera línea ambulatoria cutánea.",
      ],
    ],
    correct: "A",
    explanation:
      "Enfermedad sospechada: Leishmaniasis cutánea (L. panamensis/braziliensis, frecuentes en el Pacífico colombiano).\n\nDato decisivo: úlcera indolora de bordes elevados en militar que estuvo en selva, con amastigotes en el frotis.\n\nEn Colombia la primera línea para la forma cutánea es el antimonial pentavalente (antimoniato de meglumina o estibogluconato) a 20 mg/kg/día de Sb⁵⁺ por 20 días (IM o IV). Alternativas: miltefosina oral (útil en zonas de difícil acceso), pentamidina, y en casos seleccionados terapia local (termoterapia, antimonial intralesional). Antes de iniciar se piden función renal, hepática, pancreática y ECG (cardiotoxicidad: prolongación del QT).\n\n**Trampa del examen:** confundirla con un ectima o una piodermitis y dar antibiótico. La pista es la cronicidad (>2 semanas), la indolencia y el antecedente epidemiológico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, en el Valle y el Pacífico la leishmaniasis es pan de cada día. Militar + selva + úlcera que no duele y no cierra = leishmania hasta que se demuestre lo contrario. Y nunca olvides revisarle la nariz: la forma mucosa cambia todo el manejo.",
    keyPoints: [
      "Úlcera crónica indolora de bordes elevados + zona endémica = leishmaniasis cutánea.",
      "Primera línea en Colombia: antimoniato de meglumina 20 mg/kg/día × 20 días.",
      "Antes y durante el tratamiento: ECG, función renal, hepática y pancreática.",
    ],
  }),
  q({
    id: "univalle-derm-02",
    examArea: "DERMATOLOGÍA",
    topic: "LEPRA (ENFERMEDAD DE HANSEN)",
    difficulty: "medium",
    tags: ["dermatologia", "tropical", "salud-publica"],
    statement:
      "Una mujer de 46 años, de Buenaventura, consulta por 'manchas blancas' en espalda y brazo desde hace un año. Al examen hay 3 máculas hipocrómicas de bordes definidos, secas, sin vello, con pérdida de la sensibilidad térmica y dolorosa. Se palpa engrosado el nervio cubital derecho. La baciloscopia de linfa es negativa. ¿Cuál es la clasificación operativa y el esquema de tratamiento recomendado por la OMS?",
    options: [
      [
        "Multibacilar; rifampicina, dapsona y clofazimina por 12 meses.",
        "Se considera multibacilar si hay más de 5 lesiones o baciloscopia positiva. Esta paciente tiene 3 lesiones y baciloscopia negativa.",
      ],
      [
        "Paucibacilar; rifampicina, dapsona y clofazimina por 6 meses.",
      ],
      [
        "Paucibacilar; dapsona en monoterapia por 12 meses.",
        "La monoterapia está contraindicada en lepra porque selecciona resistencia; siempre se usa poliquimioterapia.",
      ],
      [
        "No requiere tratamiento si la baciloscopia es negativa; solo control anual.",
        "El diagnóstico de lepra es clínico (lesión con pérdida de sensibilidad o nervio engrosado). Una baciloscopia negativa no descarta la enfermedad ni exime de tratamiento.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad sospechada: Lepra paucibacilar (tuberculoide/indeterminada).\n\nDato decisivo: lesiones hipocrómicas anestésicas + nervio periférico engrosado = signos cardinales de lepra.\n\nClasificación operativa de la OMS: paucibacilar (PB) = 1 a 5 lesiones y baciloscopia negativa; multibacilar (MB) = más de 5 lesiones, compromiso de más de un tronco nervioso o baciloscopia positiva. Desde 2018 la OMS recomienda el mismo esquema de 3 fármacos (rifampicina + dapsona + clofazimina) para ambos: 6 meses en PB y 12 meses en MB. Es un evento de notificación obligatoria y se deben examinar los convivientes.\n\n**Trampa del examen:** pensar que baciloscopia negativa descarta lepra. En las formas paucibacilares suele ser negativa.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, toda mancha que no siente es lepra hasta que se demuestre lo contrario. Toca la mancha con un algodón y con un tubo frío y caliente: ese examen de 30 segundos le cambia la vida al paciente.",
    keyPoints: [
      "Mancha con pérdida de sensibilidad o nervio engrosado = sospechar lepra.",
      "PB: ≤5 lesiones y baciloscopia negativa. MB: >5 lesiones o baciloscopia positiva.",
      "OMS: rifampicina + dapsona + clofazimina; 6 meses (PB) o 12 meses (MB).",
    ],
  }),
  q({
    id: "univalle-derm-03",
    examArea: "DERMATOLOGÍA",
    topic: "CROMOBLASTOMICOSIS",
    difficulty: "hard",
    tags: ["dermatologia", "tropical", "micosis-profunda"],
    statement:
      "Un agricultor de 58 años, que trabaja descalzo en zona rural de Jamundí, consulta por una placa verrucosa de crecimiento lento en el dorso del pie izquierdo, de 4 años de evolución, con superficie costrosa y puntos negros. No tiene fiebre ni adenopatías. En el examen directo con KOH de las costras se observan estructuras redondas, de pared gruesa, color marrón, con tabiques en dos planos. ¿Cuál es el diagnóstico?",
    options: [
      [
        "Esporotricosis linfocutánea.",
        "La esporotricosis produce nódulos que ascienden por el trayecto linfático y en el directo casi nunca se ven levaduras; no produce cuerpos marrones tabicados.",
      ],
      [
        "Micetoma eumicético.",
        "El micetoma produce tumefacción con fístulas que drenan granos; no se caracteriza por células escleróticas marrones.",
      ],
      [
        "Cromoblastomicosis.",
      ],
      [
        "Tuberculosis verrucosa cutis.",
        "Puede dar una placa verrucosa, pero no explica los cuerpos marrones tabicados en el KOH, que son patognomónicos de cromoblastomicosis.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad sospechada: Cromoblastomicosis (Fonsecaea pedrosoi, la especie más frecuente en Colombia).\n\nDato decisivo: células muriformes (cuerpos escleróticos o 'fumagoides'): estructuras marrones, de pared gruesa y tabicadas, en un KOH de una placa verrucosa crónica de extremidad inferior en agricultor.\n\nEs una micosis de implantación por trauma con material vegetal. Los puntos negros de la superficie corresponden a la eliminación transepidérmica del hongo y son el mejor sitio para tomar la muestra. Tratamiento: itraconazol prolongado, combinado con crioterapia o cirugía en lesiones pequeñas. Complicaciones: linfedema y, en lesiones antiguas, carcinoma escamocelular.\n\n**Trampa del examen:** confundir las micosis profundas. Memoriza la imagen típica de cada una: cuerpos muriformes (cromoblastomicosis), levadura en 'rueda de timón' (paracoccidioidomicosis), granos (micetoma).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, agricultor descalzo + placa de verruga que lleva años + puntos negros = raspa los puntos negros y busca los 'granos de café' marrones al microscopio. Esa imagen te da el punto en el examen.",
    keyPoints: [
      "Placa verrucosa crónica en agricultor + puntos negros = cromoblastomicosis.",
      "KOH: cuerpos muriformes (fumagoides) marrones, tabicados.",
      "Tratamiento: itraconazol prolongado ± crioterapia o cirugía.",
    ],
  }),
  q({
    id: "univalle-derm-04",
    examArea: "DERMATOLOGÍA",
    topic: "ESPOROTRICOSIS",
    difficulty: "easy",
    tags: ["dermatologia", "micosis-profunda"],
    statement:
      "Una mujer de 39 años, jardinera en un vivero de Palmira, se pinchó el dedo índice con una rosa hace 4 semanas. Ahora tiene un nódulo ulcerado en el dedo y varios nódulos subcutáneos indoloros que ascienden en línea por el dorso de la mano y el antebrazo. Está afebril. ¿Cuál es el tratamiento de elección?",
    options: [
      [
        "Cefalexina oral por 14 días.",
        "Una celulitis bacteriana no produce nódulos escalonados en el trayecto linfático durante semanas; este patrón 'esporotricoide' sugiere una micosis de implantación.",
      ],
      [
        "Itraconazol oral hasta 2 a 4 semanas después de la resolución de las lesiones.",
      ],
      [
        "Terbinafina tópica dos veces al día.",
        "Los tópicos no alcanzan el tejido subcutáneo ni linfático; la esporotricosis necesita tratamiento sistémico.",
      ],
      [
        "Resección quirúrgica de todos los nódulos.",
        "La cirugía no es el tratamiento de elección; diseminaría la lesión y el tratamiento médico es muy efectivo.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad sospechada: Esporotricosis linfocutánea (Sporothrix schenckii complex).\n\nDato decisivo: inoculación con espina o material vegetal (rosas, musgo, madera) seguida de nódulos que ascienden por el trayecto linfático (patrón esporotricoide).\n\nTratamiento de elección: itraconazol oral (por lo general 200 mg/día), mantenido 2 a 4 semanas después de la curación clínica (en total 3 a 6 meses). Alternativa clásica y económica: yoduro de potasio en solución saturada. En el embarazo, termoterapia local. El cultivo confirma el diagnóstico; en el examen directo las levaduras rara vez se ven.\n\n**Trampa del examen:** tratarla como celulitis. El patrón lineal ascendente y la evolución de semanas, sin fiebre, la distinguen.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, 'la enfermedad del jardinero de rosas'. Si los nódulos suben por el brazo como cuentas de un collar, piensa en esporotricosis. Ojo: hoy también se transmite por arañazo de gato en otros países de la región.",
    keyPoints: [
      "Pinchazo con planta + nódulos lineales ascendentes = esporotricosis.",
      "Tratamiento: itraconazol oral; alternativa: yoduro de potasio.",
      "Diagnóstico: cultivo (el directo suele ser negativo).",
    ],
  }),
  q({
    id: "univalle-derm-05",
    examArea: "DERMATOLOGÍA",
    topic: "PARACOCCIDIOIDOMICOSIS",
    difficulty: "hard",
    tags: ["dermatologia", "micosis-profunda", "tropical"],
    statement:
      "Un hombre de 52 años, caficultor de la zona cafetera del norte del Valle y fumador de 30 paquetes/año, consulta por odinofagia y pérdida de 8 kg en 4 meses. En la mucosa oral tiene lesiones ulceradas, granulomatosas, con puntos hemorrágicos finos sobre un fondo eritematoso. La radiografía de tórax muestra infiltrados intersticiales bilaterales. En el KOH de la lesión oral se ven levaduras grandes con múltiples gemaciones periféricas. ¿Cuál es el diagnóstico más probable?",
    options: [
      [
        "Histoplasmosis diseminada.",
        "Histoplasma es una levadura pequeña e intracelular; no produce gemaciones múltiples en 'rueda de timón'.",
      ],
      [
        "Tuberculosis orofaríngea.",
        "La tuberculosis puede dar úlceras orales y compromiso pulmonar, pero el KOH no mostraría levaduras con gemación múltiple.",
      ],
      [
        "Carcinoma escamocelular oral con metástasis pulmonares.",
        "Es un diferencial válido en un fumador, pero el hallazgo micológico confirma una micosis.",
      ],
      [
        "Paracoccidioidomicosis crónica del adulto.",
      ],
    ],
    correct: "D",
    explanation:
      "Enfermedad sospechada: Paracoccidioidomicosis crónica (Paracoccidioides brasiliensis/lutzii).\n\nDato decisivo: levaduras grandes con múltiples gemaciones ('rueda de timón' o 'Mickey Mouse') + estomatitis moriforme (signo de Aguiar-Pupo) + compromiso pulmonar en un hombre agricultor y fumador.\n\nEs la micosis sistémica endémica más relevante de Latinoamérica. La forma crónica del adulto predomina en hombres (los estrógenos protegen a la mujer) que trabajan la tierra (café). El pulmón es la puerta de entrada y la mucosa oral el sitio de diseminación típico. Tratamiento: itraconazol por 9 a 18 meses; formas graves con anfotericina B; alternativa trimetoprim-sulfametoxazol. Hay que buscar compromiso suprarrenal.\n\n**Trampa del examen:** irse por cáncer o por tuberculosis porque el paciente es fumador y está adelgazado. La morfología de la levadura es el dato que no admite discusión.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, hombre del campo cafetero + boca con 'moras' sangrantes + pulmón afectado = paracoco. Las levaduras con muchos hijos alrededor parecen un timón de barco: esa imagen es tuya.",
    keyPoints: [
      "Estomatitis moriforme + pulmón + agricultor varón = paracoccidioidomicosis.",
      "Levaduras con gemación múltiple en 'rueda de timón'.",
      "Tratamiento: itraconazol prolongado; graves: anfotericina B.",
    ],
  }),
  q({
    id: "univalle-derm-06",
    examArea: "DERMATOLOGÍA",
    topic: "VITÍLIGO",
    difficulty: "medium",
    tags: ["dermatologia", "univalle-historia"],
    statement:
      "Una estudiante de 22 años tiene una mácula acrómica de 4 × 3 cm en la región frontal derecha que sigue un dermatoma. Apareció hace 4 años, creció durante 6 meses y desde hace 3 años no ha cambiado de tamaño ni han aparecido lesiones nuevas. Recibió tacrolimus tópico y fototerapia focal por más de un año sin repigmentación. No tiene enfermedad tiroidea. ¿Cuál es la conducta más adecuada?",
    options: [
      [
        "Corticoide oral en minipulsos por 6 meses.",
        "Los minipulsos se usan para frenar un vitíligo activo y en progresión; esta lesión lleva 3 años estable.",
      ],
      [
        "Trasplante autólogo de melanocitos o injertos (minigrafts/suspensión de células epidérmicas).",
      ],
      [
        "Despigmentación total con monobenzona.",
        "La despigmentación se reserva para vitíligo universal (más del 80% de la superficie); no para una lesión pequeña y localizada.",
      ],
      [
        "Biopsia para descartar micosis fungoide hipopigmentada antes de cualquier tratamiento.",
        "El cuadro clínico (acromía segmentaria estable de años) es típico de vitíligo; no hay datos que obliguen a biopsiar.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad sospechada: Vitíligo segmentario estable refractario.\n\nDato decisivo: estabilidad mayor de 1 año (sin crecimiento ni lesiones nuevas) y fracaso del tratamiento médico.\n\nEl vitíligo segmentario suele estabilizarse temprano y responde mal al tratamiento médico, pero es el que mejor responde a la cirugía. Las técnicas quirúrgicas (minigrafts, injertos epidérmicos por ampolla de succión y trasplante de suspensión de melanocitos y queratinocitos no cultivados) exigen que la enfermedad esté estable. Cali tiene un lugar en esta historia: el Dr. Rafael Falabella, dermatólogo de la Universidad del Valle, fue pionero mundial de la cirugía del vitíligo, y la Especialización en Dermatología de Univalle nació en 1971 en el Hospital Universitario del Valle bajo su dirección.\n\n**Trampa del examen:** operar un vitíligo activo (el injerto falla y el trauma puede generar lesiones nuevas por fenómeno de Koebner) o usar esteroides sistémicos en uno estable.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, en vitíligo la palabra clave es ESTABILIDAD. Activo: frenar (tópicos, fototerapia, minipulsos). Estable y refractario: trasplantar melanocitos. Si vas a Univalle, conocer a Falabella es conocer la casa.",
    keyPoints: [
      "Vitíligo estable (>1 año sin cambios) y refractario = candidato a cirugía.",
      "Técnicas: minigrafts, injerto por ampolla de succión, suspensión de melanocitos.",
      "El Dr. Rafael Falabella (Univalle, Cali) fue pionero de la cirugía del vitíligo.",
    ],
  }),
  q({
    id: "univalle-derm-07",
    examArea: "DERMATOLOGÍA",
    topic: "ESCABIOSIS",
    difficulty: "easy",
    tags: ["dermatologia", "pediatria"],
    statement:
      "Una madre lleva a consulta a su hijo de 7 años por prurito intenso de predominio nocturno desde hace 3 semanas. Ella y la hermana mayor también tienen picazón. Al examen hay pápulas excoriadas y trayectos lineales finos en los espacios interdigitales de las manos, las muñecas y la región periumbilical. ¿Cuál es el manejo correcto?",
    options: [
      [
        "Hidroxicina oral al niño y control en un mes.",
        "El antihistamínico alivia el prurito, pero no elimina el ácaro; sin escabicida la infestación persiste y sigue contagiando.",
      ],
      [
        "Permetrina al 5% solo al niño, de cuello hacia abajo, una sola aplicación.",
        "Si no se trata a todos los convivientes a la vez, el niño se reinfesta. Además se recomienda repetir la aplicación a los 7 días.",
      ],
      [
        "Permetrina al 5% a todos los convivientes al mismo tiempo, repetida a los 7 días, y lavado en caliente de la ropa de cama.",
      ],
      [
        "Corticoide tópico de alta potencia en las lesiones dos veces al día.",
        "El corticoide calma el prurito pero puede enmascarar y extender la infestación (escabiosis 'incógnita').",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad sospechada: Escabiosis (Sarcoptes scabiei var. hominis).\n\nDato decisivo: prurito nocturno + convivientes afectados + surcos en interdigitales, muñecas y región periumbilical.\n\nTratamiento: permetrina al 5% en todo el cuerpo (en niños pequeños también el cuero cabelludo), se deja 8 a 12 horas y se repite a los 7 días. Se trata a TODOS los convivientes al mismo tiempo, tengan o no síntomas. La ropa de cama y la ropa usada se lavan con agua caliente o se guardan en bolsa cerrada por 72 horas. La ivermectina oral es alternativa (no en menores de 15 kg ni en embarazo). El prurito puede durar 2 a 4 semanas después del tratamiento y no significa fracaso.\n\n**Trampa del examen:** tratar solo al caso índice.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, si pica de noche y le pica a toda la familia, es sarna. El tratamiento es familiar o no sirve.",
    keyPoints: [
      "Prurito nocturno + convivientes con síntomas + surcos = escabiosis.",
      "Permetrina 5% a todos los convivientes, repetir a los 7 días.",
      "El prurito residual por 2–4 semanas es esperable.",
    ],
  }),
  q({
    id: "univalle-derm-08",
    examArea: "DERMATOLOGÍA",
    topic: "TIÑA CAPITIS",
    difficulty: "easy",
    tags: ["dermatologia", "pediatria"],
    statement:
      "Un niño de 6 años presenta una placa de alopecia redondeada de 3 cm en el cuero cabelludo, con descamación grisácea y pelos cortados a pocos milímetros de la piel. Tiene un gato en casa. El examen directo con KOH muestra hifas y esporas que rodean el tallo piloso. ¿Cuál es el tratamiento adecuado?",
    options: [
      [
        "Clotrimazol crema por 4 semanas.",
        "El dermatofito invade el folículo y el tallo piloso, donde el antifúngico tópico no llega. La tiña capitis siempre requiere tratamiento oral.",
      ],
      [
        "Griseofulvina o terbinafina oral por varias semanas, más champú antifúngico como coadyuvante.",
      ],
      [
        "Corticoide tópico por sospecha de alopecia areata.",
        "La alopecia areata no descama ni tiene pelos rotos con hongos en el KOH; el examen directo ya confirmó una dermatofitosis.",
      ],
      [
        "Rapado del cuero cabelludo como único tratamiento.",
        "Rapar no está indicado y no elimina la infección folicular.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad sospechada: Tiña capitis microspórica (Microsporum canis, transmitida por gatos y perros).\n\nDato decisivo: placa alopécica descamativa con pelos cortados + KOH con parasitación ectotrix del pelo.\n\nLa tiña capitis requiere SIEMPRE tratamiento sistémico: griseofulvina (de elección para Microsporum) o terbinafina (más útil para Trichophyton), por 6 a 8 semanas o más. El champú de ketoconazol o sulfuro de selenio reduce el contagio, pero solo es coadyuvante. Hay que examinar a la mascota y a los convivientes.\n\n**Trampa del examen:** tratarla como una tiña corporis con crema. Una variante inflamatoria, el querión de Celso, tampoco se drena: se trata con antifúngico oral.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, regla de oro: tiña en el pelo o en la uña = pastillas. Tiña en la piel lampiña = crema.",
    keyPoints: [
      "Tiña capitis = tratamiento oral obligatorio (griseofulvina o terbinafina).",
      "M. canis se asocia a gatos y perros: revisar la mascota.",
      "El champú antifúngico solo es coadyuvante.",
    ],
  }),
  q({
    id: "univalle-derm-09",
    examArea: "DERMATOLOGÍA",
    topic: "SÍFILIS SECUNDARIA",
    difficulty: "medium",
    tags: ["dermatologia", "its", "salud-publica"],
    statement:
      "Un hombre de 27 años consulta por una erupción no pruriginosa de 2 semanas: máculas y pápulas eritemato-cobrizas en el tronco, las palmas y las plantas, con un collarete descamativo fino, y placas blanquecinas húmedas en la región perianal. Refiere una úlcera indolora en el pene hace 2 meses que cerró sola. No tiene alergias. La prueba no treponémica es reactiva 1:64 y la prueba treponémica es positiva. ¿Cuál es el tratamiento?",
    options: [
      [
        "Penicilina G benzatínica 2.400.000 UI IM, dosis única.",
      ],
      [
        "Penicilina G benzatínica 2.400.000 UI IM semanal por 3 semanas.",
        "El esquema de 3 dosis semanales es para sífilis latente tardía o de duración desconocida; esta es una sífilis secundaria (temprana).",
      ],
      [
        "Ceftriaxona 1 g IV diaria por 14 días.",
        "Es un esquema de neurosífilis o alternativo; la primera línea de la sífilis temprana sin alergia es la penicilina benzatínica.",
      ],
      [
        "Aciclovir oral por 7 días.",
        "El antecedente de chancro indoloro y el exantema palmoplantar con serologías positivas confirman sífilis, no herpes.",
      ],
    ],
    correct: "A",
    explanation:
      "Enfermedad sospechada: Sífilis secundaria.\n\nDato decisivo: exantema palmoplantar no pruriginoso con collarete descamativo + condilomas planos + antecedente de chancro indoloro + serologías positivas.\n\nLa sífilis temprana (primaria, secundaria o latente de menos de un año) se trata con penicilina G benzatínica 2,4 millones UI IM en dosis única. Se debe advertir sobre la reacción de Jarisch-Herxheimer (fiebre y malestar en las primeras 24 horas), tamizar VIH y otras ITS, notificar y tratar a los contactos. El seguimiento se hace con la prueba no treponémica (se espera que caiga 4 veces, por ejemplo de 1:64 a 1:16).\n\n**Trampa del examen:** dar el esquema de 3 dosis de la sífilis latente tardía.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, rash en palmas y plantas en un adulto joven = pide VDRL. Sífilis temprana: una dosis de benzatínica. Tardía o de duración desconocida: tres.",
    keyPoints: [
      "Exantema palmoplantar + condilomas planos = sífilis secundaria.",
      "Sífilis temprana: penicilina benzatínica 2,4 M UI IM, dosis única.",
      "Seguimiento con prueba no treponémica (caída de 4 veces).",
    ],
  }),
  q({
    id: "univalle-derm-10",
    examArea: "DERMATOLOGÍA",
    topic: "SARCOMA DE KAPOSI",
    difficulty: "medium",
    tags: ["dermatologia", "vih"],
    statement:
      "Un hombre de 34 años con diagnóstico reciente de VIH (CD4 de 110 células/µL, sin tratamiento antirretroviral) consulta por placas y nódulos violáceos, indoloros, en las piernas y el paladar duro, de 2 meses de evolución. La biopsia muestra proliferación de células fusiformes con hendiduras vasculares y extravasación de eritrocitos. ¿Cuál es el agente asociado y el pilar del tratamiento?",
    options: [
      [
        "Bartonella henselae; eritromicina oral.",
        "La angiomatosis bacilar es un diferencial importante, pero la histología de células fusiformes con hendiduras vasculares es de Kaposi.",
      ],
      [
        "Virus de Epstein-Barr; aciclovir.",
        "El VEB se asocia a leucoplasia vellosa y linfomas, no a sarcoma de Kaposi.",
      ],
      [
        "Herpesvirus humano 8; inicio de terapia antirretroviral.",
      ],
      [
        "Virus del papiloma humano; crioterapia de todas las lesiones.",
        "El VPH se asocia a verrugas y carcinomas anogenitales, no a Kaposi.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad sospechada: Sarcoma de Kaposi asociado al sida (epidémico).\n\nDato decisivo: lesiones violáceas en piel y paladar en paciente con VIH avanzado + histología de células fusiformes con hendiduras vasculares.\n\nEs causado por el herpesvirus humano 8 (VHH-8). El pilar del tratamiento es la terapia antirretroviral (TAR): la reconstitución inmune hace regresar muchas lesiones. La enfermedad extensa, visceral o rápidamente progresiva necesita quimioterapia (doxorrubicina liposomal o paclitaxel). Las lesiones en el paladar obligan a buscar compromiso gastrointestinal o pulmonar.\n\n**Trampa del examen:** confundirlo con angiomatosis bacilar. Ambas son lesiones vasculares en VIH, pero la angiomatosis tiene bacilos en la tinción de Warthin-Starry y responde a macrólidos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, mancha morada en un paciente con VIH: mira el paladar, pide biopsia y empieza el antirretroviral. El mejor tratamiento del Kaposi es devolverle las defensas al paciente.",
    keyPoints: [
      "Sarcoma de Kaposi = VHH-8.",
      "Pilar del tratamiento en VIH: terapia antirretroviral.",
      "Diferencial: angiomatosis bacilar (Bartonella), que responde a macrólidos.",
    ],
  }),
];
