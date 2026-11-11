slug: epidemiologia
---
## g-1018 | Prevalencia
- Qué es: cuántas personas tienen la enfermedad en un momento dado.
- Fórmula: casos existentes / población total (en %).
- Dice cuánta carga de enfermedad hay, pero no cuándo empezó.
- Ejemplo: 200 diabéticos en un pueblo de 2.000 → prevalencia del 10 %.
## g-1019 | Incidencia acumulada (riesgo)
- Qué es: cuántas personas sanas enferman durante un periodo.
- Fórmula: casos nuevos / población en riesgo al inicio.
- Es el riesgo de enfermar en ese tiempo.
- Ejemplo: de 1.000 sanos, 50 enferman en un año → 5 % anual.
## g-1020 | Tasa de incidencia (densidad de incidencia)
- Qué es: la velocidad con que aparecen casos nuevos, teniendo en cuenta cuánto tiempo siguió a cada persona.
- Fórmula: casos nuevos / personas-tiempo (por ejemplo, casos por 1.000 personas-año).
- Útil cuando cada persona se siguió un tiempo distinto.
## g-1021 | Tipos de estudios epidemiológicos
- Observacionales: el investigador solo mira, no interviene.
- Descriptivos: reporte de un caso, serie de casos (sin grupo control), ecológico (datos de poblaciones, no de personas) y transversal (exposición y enfermedad medidas a la vez; da prevalencia).
- Casos y controles: parte de enfermos y sanos y mira hacia atrás qué exposición tuvieron. Útil en enfermedades raras. Mide odds ratio.
- Cohortes: parte de expuestos y no expuestos y los sigue para ver quién enferma. Mide riesgo relativo.
- Experimentales: el investigador asigna el tratamiento. El principal es el ensayo clínico aleatorizado: el que mejor demuestra causa-efecto.
- Validez interna: el estudio no tiene sesgos (aleatorización, cegamiento). Validez externa: los resultados se pueden aplicar a otras poblaciones.
- Fases del ensayo: I seguridad y dosis (sanos), II eficacia inicial (enfermos), III comparación con el tratamiento estándar o placebo, IV vigilancia tras salir al mercado.
- Ensayo de campo: en personas sanas de la comunidad, para medidas preventivas como vacunas.
## g-1022 | Cómo se evalúa una prueba diagnóstica
- Tabla 2×2: VP (enfermos con prueba +), FN (enfermos con prueba −), FP (sanos con prueba +), VN (sanos con prueba −).
- Sensibilidad = VP / (VP + FN): de los enfermos, cuántos detecta. Una prueba muy sensible negativa descarta.
- Especificidad = VN / (VN + FP): de los sanos, cuántos salen negativos. Una prueba muy específica positiva confirma.
- Valor predictivo positivo = VP / (VP + FP): si sale positiva, probabilidad de estar enfermo. Sube con la prevalencia.
- Valor predictivo negativo = VN / (VN + FN): si sale negativa, probabilidad de estar sano. Baja con la prevalencia.
- Razón de verosimilitud positiva = sensibilidad / (1 − especificidad): >10 muy buena, 5-10 buena, 2-5 regular, <2 mala.
- Razón de verosimilitud negativa = (1 − sensibilidad) / especificidad: <0,1 muy buena, 0,1-0,2 buena, 0,2-0,5 regular, >0,5 mala.
## g-1023 | Valor p e intervalo de confianza
- Valor p: probabilidad de encontrar un resultado así (o más extremo) si en realidad no hubiera diferencia. Si p <0,05 se considera estadísticamente significativo.
- Intervalo de confianza del 95 %: rango de valores donde probablemente está el efecto real.
- Para RR, OR y HR: si el intervalo incluye el 1, no es significativo. Para diferencias: si incluye el 0.
- Ejemplo: RR 2,0 (IC 1,2-3,5) es significativo; RR 2,0 (IC 0,8-3,5) no, porque incluye el 1.
## g-1024 | Riesgo relativo (RR)
- Qué es: cuántas veces más (o menos) enferman los expuestos que los no expuestos.
- Fórmula: incidencia en expuestos (o tratados) / incidencia en no expuestos (o controles).
- RR = 1: no hay asociación. RR >1: la exposición aumenta el riesgo. RR <1: protege.
- Se usa en estudios de cohortes y ensayos clínicos.
## g-1025 | Odds ratio (OR)
- Qué es: compara la probabilidad de haber estado expuesto entre enfermos y sanos.
- Se usa en estudios de casos y controles.
- Se interpreta igual que el RR: 1 sin asociación, >1 factor de riesgo, <1 factor protector.
- Si la enfermedad es rara, el OR se parece al RR.
## g-1026 | Hazard ratio (HR)
- Qué es: compara la velocidad con que ocurre un evento (por ejemplo, muerte) en dos grupos a lo largo del tiempo.
- Se usa en análisis de supervivencia (curvas de Kaplan-Meier, regresión de Cox).
- Se interpreta igual: 1 sin diferencia, >1 más riesgo, <1 menos riesgo.
## g-1027 | Reducción relativa del riesgo (RRR)
- Qué es: en qué porcentaje baja el riesgo con el tratamiento, comparado con el control.
- Fórmula: RRR = 1 − RR.
- Ejemplo: control 10 % de eventos, tratados 5 % → RR = 0,5 → RRR = 50 %.
- Ojo: la RRR suena grande aunque el beneficio real sea pequeño; por eso hay que mirar también la RAR.
## g-1028 | Reducción absoluta del riesgo (RAR)
- Qué es: la diferencia de riesgo entre el grupo control y el tratado.
- Fórmula: RAR = riesgo en control − riesgo en tratados.
- Ejemplo: 10 % − 5 % = 5 %: el tratamiento evita 5 eventos por cada 100 tratados.
## g-1029 | Número necesario a tratar (NNT)
- Qué es: cuántos pacientes hay que tratar para evitar un evento.
- Fórmula: NNT = 1 / RAR (con la RAR en decimal).
- Ejemplo: sin tratamiento 10 % de infartos, con tratamiento 5 % → RAR 0,05 → NNT = 20. Tratando a 20 personas se evita 1 infarto.
- Cuanto más bajo el NNT, más útil el tratamiento.
## g-1030 | Metaanálisis
- Qué es: técnica estadística que junta los resultados de varios estudios sobre la misma pregunta para obtener una estimación más precisa.
- Hay que valorar la heterogeneidad: cuánto difieren los estudios entre sí (población, intervención, métodos).
- I²: <25 % baja, 25-50 % moderada, >50 % alta. Cuanto más homogéneos, más fiable el resultado combinado.
- Prueba de chi-cuadrado (Q de Cochran): un p bajo indica heterogeneidad significativa.
- Se representa con el gráfico de bosque (forest plot).
