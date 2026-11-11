import type { UltraEntry } from "@/lib/ultra-resumenes/types";

/** Ultra resumen general · neumologia. Generado desde content/ultra-resumenes/general/neumologia.md; no editar a mano. */
export const ENTRIES: UltraEntry[] = [
  {
    "kind": "card",
    "id": "g-807",
    "title": "Índice paquete-año",
    "points": [
      "Mide cuánto ha fumado una persona.",
      "Fórmula: (cigarrillos al día × años fumando) / 20.",
      "Ejemplo: 20 cigarrillos al día durante 30 años = 30 paquetes-año.",
      "Leve <10, moderado 10-20, severo >20 paquetes-año."
    ]
  },
  {
    "kind": "card",
    "id": "g-808",
    "title": "Tamizaje de cáncer de pulmón",
    "points": [
      "Prueba: TAC de tórax de baja dosis, una vez al año. La radiografía no sirve para tamizar.",
      "A quién (deben cumplirse todos): 50-80 años, ≥20 paquetes-año y fumador activo o que dejó de fumar hace 15 años o menos."
    ]
  },
  {
    "kind": "card",
    "id": "g-809",
    "title": "Nódulo pulmonar: bajo o alto riesgo",
    "points": [
      "Bajo riesgo: joven, nunca fumó o fumó poco (<10 paquetes-año), sin cáncer previo, bordes lisos, fuera de los lóbulos superiores, sin enfisema ni fibrosis.",
      "Alto riesgo: >50-60 años, fumador importante (≥20-30 paquetes-año), cáncer previo, bordes espiculados o irregulares, en lóbulos superiores, con enfisema o fibrosis.",
      "El riesgo decide cada cuánto se repite la TAC o si se biopsia."
    ]
  },
  {
    "kind": "card",
    "id": "g-810",
    "title": "Nódulo pulmonar incidental: seguimiento (Fleischner)",
    "points": [
      "Nódulo sólido <6 mm: bajo riesgo, nada; alto riesgo, TAC opcional a los 12 meses.",
      "Sólido 6-8 mm: TAC a los 6-12 meses (y en alto riesgo otra a los 18-24 meses).",
      "Sólido >8 mm: TAC a los 3 meses, PET-TC o biopsia.",
      "No sólido (vidrio esmerilado) ≥6 mm: TAC a los 6-12 meses y luego cada 2 años hasta 5 años.",
      "Parcialmente sólido ≥6 mm: TAC a los 3-6 meses; si la parte sólida es ≥6 mm, pensar en cirugía, biopsia o PET-TC.",
      "Regla: cuanto más grande y más sólido, más preocupa."
    ]
  },
  {
    "kind": "card",
    "id": "g-811",
    "title": "Nódulo pulmonar sólido según probabilidad de cáncer",
    "points": [
      "Probabilidad baja <5 %, intermedia 5-65 %, alta >65 %.",
      ">8 mm y probabilidad baja: TAC a los 3-6, 9-12 y 24 meses; biopsia o resección si crece.",
      ">8 mm y probabilidad intermedia-alta: biopsia o PET-TC; si es alta o el PET es positivo, resección por cirugía torácica videoasistida.",
      "≤8 mm: seguimiento con TAC, más frecuente cuanto mayor sea el nódulo y el riesgo (los <5 mm de bajo riesgo no necesitan seguimiento)."
    ]
  },
  {
    "kind": "card",
    "id": "g-855",
    "title": "Neumonía adquirida en la comunidad: gravedad y tratamiento",
    "points": [
      "CURB-65 (1 punto cada uno): confusión, BUN >20 mg/dl, frecuencia respiratoria ≥30, presión baja (sistólica <90 o diastólica ≤60) y edad ≥65.",
      "0-1 punto: casa. 2: hospital. ≥3: grave, valorar UCI.",
      "Ambulatoria: amoxicilina 1 g cada 8 h o doxiciclina 100 mg cada 12 h, 5-7 días. Con comorbilidades: amoxicilina-clavulánico + macrólido.",
      "Hospitalizada: ampicilina (o penicilina cristalina) o ampicilina-sulbactam + claritromicina.",
      "Grave: ampicilina-sulbactam + claritromicina; si se sospecha Pseudomonas, piperacilina-tazobactam; si SAMR, añadir vancomicina. En la grave se puede dar corticoide.",
      "Absceso pulmonar: casi siempre por aspiración (anaerobios); antibiótico prolongado (semanas); el drenaje solo si no responde."
    ]
  },
  {
    "kind": "card",
    "id": "g-856",
    "title": "Qué germen sospechar en la neumonía",
    "points": [
      "Neumococo: el más frecuente; inicio brusco, fiebre, dolor pleurítico, condensación lobar.",
      "Mycoplasma: jóvenes, tos seca persistente, cuadro leve (neumonía atípica).",
      "Legionella: neumonía grave con diarrea, confusión e hiponatremia; relacionada con agua contaminada (aires acondicionados).",
      "S. aureus resistente: neumonía grave después de una gripe, con cavidades y hemoptisis."
    ]
  },
  {
    "kind": "card",
    "id": "g-857",
    "title": "Derrame pleural",
    "points": [
      "Puncionar (toracocentesis) si no se conoce la causa y el derrame tiene >10 mm.",
      "Criterios de Light: es exudado si cumple al menos uno: proteínas pleura/suero >0,5; LDH pleura/suero >0,6; LDH pleural >2/3 del límite alto del suero.",
      "Trasudado (insuficiencia cardiaca, cirrosis): tratar la causa. Si el paciente toma diuréticos puede parecer exudado: gradiente de albúmina suero − pleura >1,2 indica trasudado.",
      "Paraneumónico complicado (basta uno): pH <7,2, glucosa <60, Gram o cultivo positivo, pus, tabicado, LDH >1.000 u ocupa la mitad del hemitórax → antibiótico + tubo de tórax (hasta que drene <100 ml/día). Si no mejora: videotoracoscopia.",
      "Tuberculosis pleural: linfocitos y ADA alto (>40; >70 muy sugestivo); confirmar con PCR o biopsia. Se trata como la tuberculosis pulmonar.",
      "Quilotórax (líquido lechoso por rotura del conducto torácico): triglicéridos >110 mg/dl. Pseudoquilotórax: colesterol alto, derrame crónico.",
      "Maligno: citología positiva; confirmar con biopsia pleural."
    ]
  },
  {
    "kind": "card",
    "id": "g-858",
    "title": "Hipoxemia y PaFi",
    "points": [
      "PaO2 normal >80 mmHg. Hipoxemia leve 60-79, moderada 40-59, grave <40.",
      "PaFi = PaO2 / FiO2 (FiO2 en decimal; aire = 0,21). Normal ~400-500.",
      "SDRA: PaFi 200-300 leve, 100-200 moderado, <100 grave."
    ]
  },
  {
    "kind": "card",
    "id": "g-859",
    "title": "Escala de disnea mMRC",
    "points": [
      "0: solo con ejercicio intenso.",
      "1: al caminar rápido o subir una pendiente.",
      "2: camina más despacio que los de su edad o tiene que pararse en plano.",
      "3: se para tras ~100 metros.",
      "4: disnea al vestirse o no puede salir de casa.",
      "En EPOC, mMRC ≥2 = muchos síntomas."
    ]
  },
  {
    "kind": "card",
    "id": "g-860",
    "title": "Espirometría: cómo leerla",
    "points": [
      "VEF1/CVF <0,7 (o por debajo del límite inferior normal) = obstrucción (asma, EPOC).",
      "Si después del broncodilatador el VEF1 sube ≥12 % y ≥200 ml, hay respuesta broncodilatadora (sugiere asma).",
      "Obstrucción que no se corrige tras broncodilatador: EPOC.",
      "CVF baja (<80 %) con relación normal: sugiere restricción (enfermedad intersticial, pared torácica, debilidad o mal esfuerzo); se confirma midiendo volúmenes pulmonares.",
      "Relación baja y CVF baja: patrón mixto."
    ]
  },
  {
    "kind": "card",
    "id": "g-861",
    "title": "DLCO (capacidad de difusión)",
    "points": [
      "Mide qué tan bien pasa el gas del alvéolo a la sangre.",
      "Normal 80-120 %; leve 60-79 %; moderada 40-59 %; grave <40 %.",
      "Baja en enfisema, enfermedad intersticial, hipertensión pulmonar y anemia.",
      "Normal o alta en asma (y alta en hemorragia alveolar).",
      "Sirve para distinguir enfisema (DLCO baja) de bronquitis crónica (normal)."
    ]
  },
  {
    "kind": "card",
    "id": "g-862",
    "title": "Enfermedad pulmonar intersticial difusa (EPID)",
    "points": [
      "Qué es: grupo de enfermedades con inflamación y cicatriz (fibrosis) en las paredes de los alvéolos.",
      "Clínica: disnea progresiva, tos seca y crepitantes tipo velcro en las bases.",
      "Diagnóstico: TAC de alta resolución (por ejemplo, patrón de neumonía intersticial usual) y pruebas funcionales con patrón restrictivo y DLCO baja. Biopsia solo si hay dudas.",
      "Manejo: retirar la causa (fármacos, antígenos), corticoides e inmunosupresores en las inflamatorias, antifibróticos (nintedanib, pirfenidona) en las fibrosantes, oxígeno y trasplante en fases finales."
    ]
  },
  {
    "kind": "card",
    "id": "g-863",
    "title": "EPOC: diagnóstico y tratamiento",
    "points": [
      "Qué es: obstrucción persistente al flujo de aire por bronquitis crónica o enfisema (tabaco, humo de leña).",
      "Diagnóstico: síntomas + VEF1/CVF <0,7 después del broncodilatador.",
      "Grupo A (pocos síntomas, mMRC 0-1, CAT <10): un broncodilatador de larga acción (LAMA o LABA).",
      "Grupo B (más síntomas): LAMA + LABA.",
      "Grupo E (≥2 exacerbaciones moderadas o 1 con hospitalización): LAMA + LABA; añadir corticoide inhalado si eosinófilos ≥300.",
      "Si sigue exacerbando: corticoide inhalado si eosinófilos ≥100; roflumilast si VEF1 <50 % con bronquitis crónica; azitromicina en exfumadores; dupilumab si eosinófilos ≥300.",
      "Gravedad espirométrica (VEF1): GOLD 1 ≥80 %, 2 50-79 %, 3 30-49 %, 4 <30 %.",
      "Oxígeno en casa: PaO2 ≤55 o SatO2 ≤88 % en reposo; o PaO2 56-59 si hay hipertensión pulmonar, edemas por falla derecha o hematocrito >55 %."
    ]
  },
  {
    "kind": "card",
    "id": "g-864",
    "title": "Vacunas en EPOC",
    "points": [
      "Influenza (cada año), COVID-19, neumococo, virus sincitial respiratorio, tétanos-difteria-tos ferina (refuerzo cada 10 años) y herpes zóster.",
      "Zóster recombinante (Shingrix): 2 dosis separadas 2-6 meses, en ≥50 años o inmunosuprimidos ≥18 años."
    ]
  },
  {
    "kind": "card",
    "id": "g-865",
    "title": "Pre-EPOC",
    "points": [
      "Personas (fumadores o expuestas a humo de leña) con síntomas respiratorios o con daño en pruebas (enfisema en TAC, DLCO baja) pero con espirometría todavía normal.",
      "No cumplen criterios de EPOC, pero ya hay enfermedad: dejar de fumar y seguimiento."
    ]
  },
  {
    "kind": "card",
    "id": "g-866",
    "title": "PRISm",
    "points": [
      "Espirometría con relación VEF1/CVF normal (≥0,7) pero VEF1 bajo (<80 %).",
      "No es obstrucción ni restricción clásica. Se asocia a tabaco, obesidad y comorbilidades.",
      "Más riesgo de EPOC y de enfermedad cardiovascular: controlar factores de riesgo y seguir."
    ]
  },
  {
    "kind": "card",
    "id": "g-867",
    "title": "Exacerbación de EPOC",
    "points": [
      "Leve: FR ≤24, FC ≤95, SatO2 ≥92 % → casa. Moderada: FR >24, FC >95, SatO2 89-91 %. Grave: FR >28, FC >110, SatO2 <89 %, músculos accesorios → hospital o UCI.",
      "Broncodilatadores de corta acción repetidos (salbutamol ± ipratropio).",
      "Prednisona 40 mg 5 días.",
      "Antibiótico 5-7 días si el esputo es purulento con más volumen o más disnea, o si necesita ventilación.",
      "Oxígeno con meta de SatO2 88-92 % (no más: riesgo de retener CO2).",
      "Ventilación no invasiva si pH <7,35 con PaCO2 >45. Intubar si falla, hay inestabilidad, coma o no protege la vía aérea.",
      "Al alta: ajustar inhaladores, educar y rehabilitación pulmonar."
    ]
  },
  {
    "kind": "card",
    "id": "g-868",
    "title": "Asma: diagnóstico y tratamiento escalonado (GINA)",
    "points": [
      "Diagnóstico: obstrucción que mejora con broncodilatador (VEF1 sube ≥12 % y ≥200 ml), o mejora tras 4 semanas de corticoide, o caída con ejercicio o metacolina (≥20 %).",
      "Clave de la GINA en adultos: el inhalador de rescate es budesonida-formoterol (corticoide + broncodilatador). Ya no se usa salbutamol solo.",
      "Pasos 1-2 (síntomas pocas veces): budesonida-formoterol 200/6 a demanda.",
      "Paso 3: budesonida-formoterol 200/6 una inhalación cada 12 h + a demanda (MART).",
      "Paso 4: la misma combinación a dosis media (2 inhalaciones cada 12 h + a demanda).",
      "Paso 5: añadir tiotropio y valorar biológicos según el tipo de asma.",
      "Niños de 6-11 años: corticoide inhalado a dosis baja desde el inicio; desde el paso 3, corticoide + LABA (o MART con 100/6 u 80/4,5)."
    ]
  },
  {
    "kind": "card",
    "id": "g-869",
    "title": "Crisis de asma",
    "points": [
      "Salbutamol 4-10 inhalaciones cada 20 minutos durante 1 hora.",
      "Oxígeno si SatO2 <93-95 %.",
      "Corticoide sistémico temprano (oral).",
      "Moderada-grave: añadir ipratropio. Grave o que no responde: sulfato de magnesio intravenoso."
    ]
  },
  {
    "kind": "card",
    "id": "g-995",
    "title": "Silicosis y antracosis",
    "points": [
      "Silicosis: por respirar sílice (minería, canteras, construcción). Fibrosis irreversible.",
      "Puede ser asintomática o dar disnea y tos. Riesgo aumentado de tuberculosis.",
      "Radiografía: nódulos en lóbulos superiores y ganglios calcificados en cáscara de huevo.",
      "No tiene cura: evitar la exposición, dejar de fumar, vacunas, soporte y trasplante en fase final.",
      "Antracosis: depósito de carbón (minería, contaminación, humo de leña); suele ser asintomática; prevención."
    ]
  },
  {
    "kind": "card",
    "id": "g-997",
    "title": "Neumonitis por hipersensibilidad",
    "points": [
      "Qué es: reacción inmune del pulmón al respirar repetidamente algo orgánico: moho (pulmón del granjero) o proteínas de aves (criadores de palomas).",
      "Aguda: fiebre y disnea horas después de la exposición. Crónica: fibrosis.",
      "Diagnóstico: antecedente de exposición, vidrio esmerilado en TAC y muchos linfocitos en el lavado broncoalveolar.",
      "Tratamiento: evitar por completo el antígeno; corticoides en la fase inflamatoria."
    ]
  },
  {
    "kind": "card",
    "id": "g-998",
    "title": "Sarcoidosis y amiloidosis",
    "points": [
      "Sarcoidosis: granulomas no caseificantes, sobre todo en pulmón y ganglios del tórax; causa desconocida.",
      "Clínica: tos seca, disnea, cansancio. Síndrome de Löfgren: fiebre, eritema nodoso y adenopatías en ambos hilios (buen pronóstico).",
      "Diagnóstico: radiografía con adenopatías hiliares, ECA elevada y biopsia con granulomas. Tratar si hay síntomas o daño de órganos: corticoides; si no basta, metotrexato.",
      "Amiloidosis: proteínas mal plegadas que se depositan en los órganos.",
      "Tipos: AL (cadenas ligeras, discrasias de células plasmáticas), AA (inflamación crónica) y ATTR (transtiretina, hereditaria o por edad).",
      "Clínica: lengua grande, moretones alrededor de los ojos, síndrome nefrótico, miocardiopatía restrictiva (la principal causa de muerte).",
      "Diagnóstico: biopsia con rojo Congo (verde manzana con luz polarizada). Tratamiento según el tipo; evitar digoxina y antagonistas del calcio si hay afectación cardiaca."
    ]
  }
];
