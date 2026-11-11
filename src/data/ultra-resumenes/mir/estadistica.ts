import type { UltraEntry } from "@/lib/ultra-resumenes/types";

/** Ultra resumen MIR · Estadística y epidemiología. Generado desde content/ultra-resumenes/mir/estadistica.md; no editar a mano. */
export const ENTRIES: UltraEntry[] = [
  {
    "kind": "heading",
    "id": "mirc-estadistica-t-tipos-de-estudios-epidemiologicos",
    "title": "Tipos de estudios epidemiológicos",
    "level": 1,
    "meta": "54 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-estadistica-clasificacion-de-los-estudios",
    "title": "Clasificación de los estudios",
    "points": [
      "Experimentales: el investigador asigna la intervención (ensayo clínico aleatorizado, el de mayor evidencia individual).",
      "Observacionales analíticos: cohortes (de la exposición al efecto) y casos y controles (del efecto a la exposición).",
      "Descriptivos: transversales (prevalencia), ecológicos (datos agregados; falacia ecológica), series de casos.",
      "Metaanálisis de ensayos clínicos: la máxima evidencia."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-estadistica-cohortes-frente-a-casos-y-controles",
    "title": "Cohortes frente a casos y controles",
    "points": [
      "Cohortes: calculan incidencia y riesgo relativo; buenas para exposiciones raras y para estudiar varios efectos; caras y largas; pérdidas de seguimiento.",
      "Casos y controles: miden la odds ratio; buenos para enfermedades raras o de latencia larga; baratos; sesgo de memoria y de selección.",
      "Cohorte histórica (retrospectiva): usa registros ya existentes."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-estadistica-ensayo-clinico",
    "title": "Ensayo clínico",
    "points": [
      "Fases: I (seguridad en voluntarios sanos), II (dosis y eficacia preliminar), III (eficacia frente al tratamiento estándar, antes de comercializar), IV (poscomercialización, efectos raros).",
      "La aleatorización controla los factores de confusión conocidos y desconocidos.",
      "Enmascaramiento (doble ciego) para evitar sesgos de información.",
      "Análisis por intención de tratar: el más conservador; preferido en ensayos de superioridad.",
      "Ensayos de no inferioridad, cruzados (cada paciente es su propio control; enfermedades crónicas estables) y factoriales."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-estadistica-t-medidas-de-frecuencia-y-de-efecto",
    "title": "Medidas de frecuencia y de efecto",
    "level": 2,
    "meta": "17 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-estadistica-medidas-de-frecuencia-y-asociacion",
    "title": "Medidas de frecuencia y asociación",
    "points": [
      "Prevalencia: casos existentes / población. Incidencia acumulada: casos nuevos / población en riesgo.",
      "Riesgo relativo: incidencia en expuestos / incidencia en no expuestos.",
      "Odds ratio: aproxima el riesgo relativo cuando la enfermedad es rara.",
      "Riesgo atribuible: diferencia de incidencias entre expuestos y no expuestos."
    ]
  },
  {
    "kind": "card",
    "id": "mirc-estadistica-medidas-de-impacto-en-ensayos",
    "title": "Medidas de impacto en ensayos",
    "points": [
      "Reducción absoluta del riesgo (RAR): diferencia de riesgos entre control y tratamiento.",
      "Número necesario a tratar (NNT) = 1 / RAR.",
      "Reducción relativa del riesgo = RAR / riesgo del grupo control."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-estadistica-t-validacion-de-pruebas-diagnosticas",
    "title": "Validación de pruebas diagnósticas",
    "level": 3,
    "meta": "13 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-estadistica-sensibilidad-especificidad-y-valores-predictivos",
    "title": "Sensibilidad, especificidad y valores predictivos",
    "points": [
      "Sensibilidad: proporción de enfermos con prueba positiva. Útil para descartar (cribado): una prueba muy sensible negativa descarta.",
      "Especificidad: proporción de sanos con prueba negativa. Útil para confirmar.",
      "Valor predictivo positivo: aumenta con la prevalencia. Valor predictivo negativo: disminuye con la prevalencia.",
      "Cociente de probabilidad positivo = sensibilidad / (1 − especificidad); no depende de la prevalencia.",
      "Curva ROC: el mejor punto de corte, el más cercano al ángulo superior izquierdo."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-estadistica-t-contraste-de-hipotesis",
    "title": "Contraste de hipótesis",
    "level": 3,
    "meta": "10 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-estadistica-errores-y-potencia",
    "title": "Errores y potencia",
    "points": [
      "Error tipo I (alfa): rechazar la hipótesis nula siendo cierta (falso positivo); se fija en 0,05.",
      "Error tipo II (beta): no rechazarla siendo falsa (falso negativo).",
      "Potencia = 1 − beta; aumenta con el tamaño muestral y con el tamaño del efecto.",
      "Valor p: probabilidad de obtener ese resultado si la hipótesis nula fuera cierta.",
      "Pruebas: chi-cuadrado (variables cualitativas), t de Student (comparar 2 medias), ANOVA (más de 2), correlación y regresión."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-estadistica-t-sesgos-y-confusion",
    "title": "Sesgos y confusión",
    "level": 4,
    "meta": "9 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-estadistica-errores-en-los-estudios",
    "title": "Errores en los estudios",
    "points": [
      "Error aleatorio: se reduce aumentando la muestra. Error sistemático (sesgo): no se arregla con más muestra.",
      "Sesgo de selección, de información (clasificación, memoria) y de confusión.",
      "Factor de confusión: se asocia a la exposición y al efecto sin ser un paso intermedio; se controla con aleatorización, restricción, emparejamiento, estratificación o análisis multivariante.",
      "Validez interna: ausencia de sesgos. Validez externa: capacidad de generalizar."
    ]
  },
  {
    "kind": "heading",
    "id": "mirc-estadistica-t-estadistica-inferencial-y-descriptiva",
    "title": "Estadística inferencial y descriptiva",
    "level": 5,
    "meta": "5 preguntas MIR 2016-2026"
  },
  {
    "kind": "card",
    "id": "mirc-estadistica-intervalos-de-confianza-y-descriptiva",
    "title": "Intervalos de confianza y descriptiva",
    "points": [
      "Intervalo de confianza al 95 %: si incluye el 1 (RR, OR) o el 0 (diferencias), no es significativo.",
      "Error estándar de la media = desviación típica / √n; disminuye al aumentar la muestra.",
      "Distribución normal: media ± 1,96 desviaciones típicas engloba el 95 %.",
      "Mediana: mejor medida de centralización si hay valores extremos."
    ]
  }
];
