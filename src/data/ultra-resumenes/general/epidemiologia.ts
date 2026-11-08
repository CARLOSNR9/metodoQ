import type { UltraEntry } from "@/lib/ultra-resumenes/types";

/** Ultra resumen general · Epidemiología y salud pública. Generado desde el documento de fichas de Método Q. */
export const ENTRIES: UltraEntry[] = [
  {
    "kind": "card",
    "id": "g-1018",
    "title": "Prevalencia",
    "points": [
      "Es la proporción de personas que presentan una enfermedad en un momento determinado dentro de una población. Se calcula como casos existentes / población total y se expresa en porcentaje. Refleja la carga de enfermedad, pero no indica cuándo apareció."
    ]
  },
  {
    "kind": "card",
    "id": "g-1019",
    "title": "Incidencia acumulada (riesgo)",
    "points": [
      "Es la proporción de personas sanas que desarrollan la enfermedad durante un periodo de tiempo. Se calcula como casos nuevos / población en riesgo al inicio y estima el riesgo de enfermar en ese intervalo."
    ]
  },
  {
    "kind": "card",
    "id": "g-1020",
    "title": "Tasa de incidencia (densidad de incidencia)",
    "points": [
      "Mide la velocidad con que aparecen nuevos casos, considerando el tiempo de seguimiento. Se calcula como casos nuevos / personas-tiempo de seguimiento y se expresa como casos por persona-año."
    ]
  },
  {
    "kind": "card",
    "id": "g-1021",
    "title": "Estudios epidemiológicos se clasifican en 1",
    "points": [
      "OBSERVACIONALES: a",
      "DESCRIPTIVOS: reporte de caso:(describe un solo paciente inusual), serie de casos: (varios pacientes con la misma condición, sin grupo control), ecológico: (analiza datos por poblaciones o grupos), transversal: (exposición y enfermedad se miden al mismo tiempo, estima prevalencia). b",
      "ANALÍTICOS: Casos y controles: (retrospectivo, parte de enfermos y no enfermos y busca exposición previa, útil en enfermedades raras; estima odds ratio), Cohortes: (parte de expuestos y no expuestos y sigue en el tiempo quién desarrolla la enfermedad; puede ser prospectivo o retrospectivo y calcula riesgo relativo).",
      "EXPERIMENTALES: el investigador asigna la intervención; el principal es el ensayo clínico, donde se comparan tratamiento vs control, idealmente aleatorizado, para evaluar eficacia y establecer relación causal; Su VALIDEZ INTERNA depende del control de sesgos (aleatorización, cegamiento), mientras la VALIDEZ EXTERNA indica qué tanto los resultados pueden generalizarse a otras poblaciones",
      "Se desarrollan en FASES: Fase I evalúa seguridad y dosis, en sanos Fase II analiza eficacia inicial y seguridad en enfermos, Fase III compara con tratamiento estándar o placebo Fase IV : farmacovigilancia tras la comercialización.",
      "Ensayo de campo se hace en personas sanas para evaluar medidas preventivas (como vacunas) en la comunidad."
    ]
  },
  {
    "kind": "card",
    "id": "g-1022",
    "title": "Las pruebas diagnósticas en epidemiología se evalúan con medidas de desempeño",
    "points": [
      "1. sensibilidad = VP / (VP + FN) (capacidad de detectar pruebas positivos de entre todos los enfermos);2. especificidad = VN / (VN + FP) (capacidad de identificar sanos con test negativos)",
      "3. valor predictivo positivo (VPP) = VP / (VP + FP)( verdaderos positivos entre todas las pruebas positivas);4. valor predictivo negativo (VPN) = VN / (VN + FN) (verdaderos negativos entre todas las pruebas negativas);5. razón de verosimilitud positiva (LR+) =mayor probabilidad de positivos enfermos que positivos sanos. sensibilidad / (1 − especificidad); interpretación: <2 malo , 2-5 regular , 5-10 bueno, >10 muy bueno.",
      "6. razón de verosimilitud negativa (LR−) = menor probabilidad de negativos enfermos con respecto a negativos sanos (1 − sensibilidad) / especificidad; interpretación: > 0,5 malo , 0,5 -0,2 regular , 0,2 -0,1 buena , < 0,1 muy buena."
    ]
  },
  {
    "kind": "card",
    "id": "g-1023",
    "title": "Medidas de precisión",
    "points": [
      "1. VALOR P: que expresa la probabilidad de que los resultados observados se deban al azar, considerándose NO atribuible al azar si p < 0.05 ( < 5%)",
      "INTERVALO DE CONFIANZA: debe ser 95 % ( 95 de 100 estudios saldrán con el mismo resultado) y el valor nulo NO debe cruzar 1 para considerar que el resultado es estadísticamente significativo",
      "Ejemplos: RR = 2.0 (IC 95%: 1.2–3.5) → significativo porque no incluye 1. ; RR = 2.0 (IC 95%: 0.8–3.5) → no significativo porque cruza 1."
    ]
  },
  {
    "kind": "card",
    "id": "g-1024",
    "title": "El riesgo relativo (RR)",
    "points": [
      "Medida que compara la probabilidad de desarrollar una enfermedad en expuestos frente a no expuestos",
      "Su interpretación es: RR = 1 no hay asociación, RR > 1 la exposición aumenta el riesgo, y RR < 1 la exposición es protectora; se utiliza principalmente en estudios de cohorte",
      "Formula: grupo tratado / grupo control"
    ]
  },
  {
    "kind": "card",
    "id": "g-1025",
    "title": "El odds ratio (OR) medida de asociación que…",
    "points": [
      "El odds ratio (OR) medida de asociación que compara la probabilidad de exposición entre enfermos y no enfermos, utilizada principalmente en estudios de casos y controles",
      "Su interpretación es: OR = 1 no hay asociación, OR > 1 la exposición aumenta el riesgo, y OR < 1 la exposición es protectora ."
    ]
  },
  {
    "kind": "card",
    "id": "g-1026",
    "title": "El hazard ratio (HR) es una medida de…",
    "points": [
      "El hazard ratio (HR) es una medida de asociación usada en análisis de supervivencia que compara la tasa instantánea de ocurrencia de un evento en un grupo expuesto frente a un grupo control a lo largo del tiempo. Se interpreta igual que los anteriores."
    ]
  },
  {
    "kind": "card",
    "id": "g-1027",
    "title": "El RRR (reducción relativa del riesgo) mide cuánto…",
    "points": [
      "El RRR (reducción relativa del riesgo) mide cuánto disminuye el riesgo de un evento con una intervención respecto al control y se calcula como: RRR. = 1 − RR. Interpretación: ejemplo, si en un estudio 10% del grupo control (no tratados) presenta el evento y 5% del grupo tratado lo presenta, entonces RR = 0.05/0.10 = 0.5 (50%) y RRR = 1 − 0.5 = 0.5 (50%), lo que significa que el tratamiento reduce el riesgo del evento en un 50%"
    ]
  },
  {
    "kind": "card",
    "id": "g-1028",
    "title": "La reducción absoluta del riesgo (RAR) es la…",
    "points": [
      "La reducción absoluta del riesgo (RAR) es la diferencia del riesgo de un evento entre el grupo control y el grupo tratado, y se calcula como RAR = riesgo en control − riesgo en tratamiento",
      "Interpretación: ejemplo, si en un estudio el 10% del grupo control presenta el evento y 5% del grupo tratado lo presenta, entonces RAR = 0.10 − 0.05 = 0.05 (5%), lo que significa que el tratamiento reduce el riesgo absoluto del evento en 5%"
    ]
  },
  {
    "kind": "card",
    "id": "g-1029",
    "title": "El número necesario a tratar (NNT) es el…",
    "points": [
      "El número necesario a tratar (NNT) es el número de pacientes que deben recibir una intervención para prevenir un evento, y se calcula como NNT = 1 / RAR (reducción absoluta del riesgo)",
      "Por ejemplo: si 100 pacientes sin tratamiento tienen 10 infartos (10%) y 100 pacientes tratados tienen 5 infartos (5%), el tratamiento evita 5 infartos",
      "La RAR = 5% (0.05) y el NNT = 1/0.05 = 20, lo que significa que tratando a 20 pacientes se evita 1 infarto que habría ocurrido si no se trataban."
    ]
  },
  {
    "kind": "card",
    "id": "g-1030",
    "title": "Metaanálisis",
    "points": [
      "Es una técnica estadística que combina los resultados de varios estudios sobre el mismo tema para obtener una estimación más precisa del efecto",
      "EN SU VALIDEZ. Se valora La heterogeneidad , variabilidad o diferencias entre los resultados de los estudios incluidos, que pueden deberse a diferencias en población, intervenciones, métodos o desenlaces",
      "Se evalúa con el 1. estadístico I², donde <25% baja heterogeneidad, 25–50% moderada y >50% alta ( UN ESTUDIO ES MEJOR SI ES HOMOGÉNEO) . otra método de medición es 2. prueba Chi² (Chi cuadrado). genera un valor p de heterogeneidad, Si p ≤0.01 (< 1 % ) es heterogeneidad significativa (los estudios son diferentes entre sí), si p >0.01 (>1 %)se considera que no hay heterogeneidad significativa, más homogéneos."
    ]
  }
];
