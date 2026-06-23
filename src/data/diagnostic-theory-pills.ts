/** Píldoras de teoría para baterías diagnósticas Act1 (UdeA, UNAL, UCC Pasto). */
export const DIAGNOSTIC_THEORY_PILLS: Record<string, string> = {
  "udea-dx-01": `Malaria grave por P. falciparum (MSPS Colombia)

Criterios de gravedad en el caso: Hb <5 g/dL, alteración del sensorio, falla renal, ictericia/coagulopatía, parasitemia alta.

Tratamiento de primera línea:
- Artesunato IV 2.4 mg/kg en T0, 12 h y 24 h (adultos ≥20 kg).
- 3.0 mg/kg solo si peso <20 kg.

Errores clásicos:
- Cloroquina (resistencia en falciparum + vía oral inadecuada en inestable).
- Quinina IV como primera línea (desplazada por artesunato).
- Confundir dosis pediátrica con adulto.

Post-tratamiento: completar esquema con ACT oral cuando el paciente tolere vía oral.`,

  "udea-dx-02": `Accidente botrópico severo (protocolo INS)

Botrópico (Bothrops): edema, necrosis local, coagulopatía de consumo, falla renal.

Estratificación de dosis antiveneno (polivalente IV):
- Leve: ~4 viales
- Moderado: ~6 viales
- Severo: 10 viales + reanimación hídrica agresiva

Este caso: oliguria, sangrado sistémico, incoagulabilidad = severo.

Contraindicado:
- Fasciotomía profiláctica con coagulopatía activa.
- Heparina/anticoagulantes sistémicos.
- Vía IM del antiveneno.`,

  "udea-dx-03": `TB pulmonar nueva — Resolución 227/2020 (Colombia)

Baciloscopia +++ y GeneXpert positivo sin resistencia a rifampicina = iniciar YA.

Fase intensiva empírica: HRZE (4 fármacos) simultáneos.
- El esquema triple (HRZ sin etambutol) quedó obsoleto por resistencia primaria a isoniazida (~9,5%).

Preferir dosis fija combinada (adherencia).

No esperar cultivo para iniciar en TB bacilífera confirmada.`,

  "udea-dx-04": `Dengue — fase crítica y categoría B2

Tras defervescencia aparecen signos de alarma:
- Dolor abdominal intenso
- Vómitos persistentes
- Hepatomegalia dolorosa
- Hemoconcentración (↑ hematocrito)

= Grupo B2 → hospitalización + cristaloides IV.

No es Grupo C (choque/sangrado grave) aún → no transfusión profiláctica de plaquetas.
No es ambulatorio (Grupo A).`,

  "udea-dx-05": `EAP cardiogénico hipertensivo

Cuadro: disnea súbita, espuma rosada, estertores, S3, PA muy elevada, hipoxemia.

Tratamiento:
- Vasodilatador IV (nitroglicerina)
- Furosemida IV
- CPAP/BiPAP

Evitar:
- Betabloqueadores IV en descompensación aguda.
- Expansión con cristaloides (empeora congestión pulmonar).
- Adenosina (no es TSV).`,

  "udea-dx-06": `CAD severa — primera hora

Orden correcto:
1. Cristaloides agresivos (SF 0.9%)
2. Reponer K+ si ≤3.3 mEq/L ANTES de insulina
3. Insulina en infusión continua (no bolo inicial rutinario)

No al inicio:
- Bolo de insulina con K+ bajo (arritmias).
- Bicarbonato rutinario (salvo pH extremo).
- Diálisis como primera línea.`,

  "udea-dx-07": `Apendicitis aguda no complicada

Ecografía confirmatoria + cuadro clínico típico → apendicectomía laparoscópica urgente.

Profilaxis ATB preoperatoria: cobertura gramnegativa + anaerobios.

No:
- Solo antibióticos 14 días ambulatorios.
- TAC diferida 48 h con diagnóstico ya establecido.
- Ileostomía profiláctica en apendicitis simple.`,

  "udea-dx-08": `Preeclampsia severa

Criterios: PA ≥160/110, síntomas (cefalea, epigastralgia, visión), plaquetopenia, transaminitis.

Manejo:
- Sulfato de magnesio (eclampsia)
- Antihipertensivo IV (labetalol/hidralazina)
- Finalización del embarazo tras estabilización (parto = tratamiento definitivo).`,

  "udea-dx-09": `EDA aguda — Plan C (AIEPI)

Deshidratación severa/choque en lactante:
- Letargia, fontanela hundida, pliegue >2 s
- Pulsos débiles, TRC prolongado

= Plan C: cristaloides IV 100 mL/kg (protocolo institucional), no TRO exclusiva.

Antibióticos no son rutina en diarrea acuosa viral.`,

  "udea-dx-10": `Acceso a salud — Ley 100 y tutela

Negación de servicio del PBS con indicación médica y riesgo vital → acción de tutela por derecho fundamental a la salud.

El médico debe documentar indicación y continuidad.
No abstenerse por ser "asunto contractual EPS-paciente".`,

  "unal-dx-01": `ICFep — tratamiento con evidencia

FEVI preservada (≥50%) con síntomas congestivos.

iSGLT2 (dapagliflozina/empagliflozina): ensayos EMPEROR-Preserved y DELIVER → ↓ hospitalizaciones por IC.

IECA/ARNI/ARM: menor evidencia en ICFep vs ICFEr.
No confundir con algoritmo de IC de fracción reducida.`,

  "unal-dx-02": `DM2 + obesidad — segunda línea (ACE)

Tras metformina al máximo con HbA1c fuera de meta e IMC elevado:
- AR GLP-1: mejor control glucémico + pérdida de peso.

Evitar sulfonilureas (hipoglucemia, ↑ peso).
Insulina no es obligatoria como segundo paso en este perfil.`,

  "unal-dx-03": `IRA prerrenal

Contexto: diarrea, hipotensión ortostática, oliguria.
Na urinario bajo (<20) → retención renal de sodio por hipovolemia.

Manejo: cristaloides + tratar causa. Reevaluar creatinina.
No dializar ni inmunosuprimir sin datos de glomerulonefritis.`,

  "unal-dx-04": `EPOC agudizado grave

Hipoxemia + hipercapnia (pH 7.32, PaCO2 58) + trabajo respiratorio.

Manejo: broncodilatadores, corticoide sistémico, ATB si indicado, oxígeno titulado, BiPAP.

VNI antes de IOT si no hay contraindicación.
Evitar morfina (deprime ventilación).`,

  "unal-dx-05": `Ictus isquémico agudo

TAC sin hemorragia, NIHSS 14, ventana 2 h → evaluar alteplasa IV.

PA elevada se maneja según protocolo; no es contraindicación absoluta aislada.

AAS no es reperfusión. Anticoagulación plena no sustituye trombólisis.`,

  "unal-dx-06": `Sepsis abdominal — primera hora

Hipotensión + lactato elevado + foco abdominal (defensa FID).

Bundle:
- Cristaloides en bolo
- Antibiótico empírico en la primera hora (sin esperar cultivos)
- Control de foco (apendicitis/perforación → cirugía)`,

  "unal-dx-07": `Colecistitis aguda

Murphy +, ecografía compatible → colecistectomía laparoscópica precoz en el mismo ingreso.

CPRE solo si coledocolitiasis/colangitis (dilatación vía biliar, colangitis).
No diferir 6 meses ni solo ATB ambulatorio.`,

  "unal-dx-08": `Hemorragia postparto por atonía

Tras oxitocina sin respuesta:
- Masaje uterino bimanual
- Segundo uterotónico (misoprostol/metilergometrina según contraindicaciones)
- Reanimación continua

Escalonamiento rápido; no alta ni anticoagulación en sangrado activo.`,

  "unal-dx-09": `Neumonía pediátrica grave (AIEPI)

SatO2 91%, tiraje subcostal, FR elevada → hospitalización + oxígeno + antibiótico según edad.

No ambulatorio con hipoxemia.
Broncodilatadores/corticoides solos no tratan neumonía bacteriana.`,

  "unal-dx-10": `Bioética — urgencia sin voluntad anticipada

Sin directriz válida del paciente incapaz:
- Actuar en beneficio (beneficencia/no maleficencia) si procedimiento vital está indicado.
- Documentar decisión y diálogo familiar.

Familia no sustituye automáticamente autonomía en urgencia reversible.
Justicia no autoriza negar UCI por edad.`,

  "ucc-dx-01": `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa tamizaje de cáncer colorrectal en atención primaria según la Resolución 3280 de 2018 (RIAS, curso de vida adultez): ¿cuándo cribar y con qué prueba en riesgo promedio?

¿Qué está ocurriendo realmente?
- Hombre de 53 años, trabajador agrícola de Nariño, en consulta de medicina general.
- HTA controlada con losartán, IMC 28.5 (sobrepeso), sin síntomas digestivos.
- Niega antecedente familiar de cáncer colorrectal → riesgo promedio, no alto riesgo.
- Examen físico normal; la pregunta no es diagnóstico, es prevención según curso de vida.

¿Qué dato es clave en el examen?
- Res. 3280: tamizaje universal en hombres y mujeres de 50 a 75 años asintomáticos de riesgo promedio.
- Estrategia preferida en APS: SOMF por inmunoquímica (FIT) bienal.
- Si SOMF positivo: colonoscopia confirmatoria, ordenable por médico general sin barrera de especialista.
- El tamizaje no depende de síntomas ni de antecedente familiar en riesgo promedio.

¿Por qué fallan las otras opciones?
- Colonoscopia total inmediata como tamizaje primario: reservada para alto riesgo (antecedente familiar de primer grado, síndromes polipósicos), no para riesgo promedio.
- No tamizar por ausencia de síntomas: error clásico; el cribado es justamente en asintomáticos de 50–75 años.
- ACE sérico como primera línea: no tiene sensibilidad ni especificidad para tamizaje poblacional; se usa en seguimiento de cáncer ya diagnosticado.

Clave: 53 años + asintomático + riesgo promedio = SOMF bienal; colonoscopia solo si positivo.

Perlas de examen
• La edad (50–75) activa el tamizaje aunque el paciente se sienta sano.
• En Colombia la 3280 es la referencia obligatoria en preguntas de APS/RIAS.
• No confundir tamizaje (población sana) con estudio diagnóstico (síntomas).

Referencias: Resolución 3280 de 2018; RIAS curso de vida adultez; Guías INC Colombia cáncer colorrectal.`,

  "ucc-dx-02": `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa CAD en DM1: mecanismo de la acidosis y la primera intervención urgente en un paciente con shock y acidosis severa.

¿Qué está ocurriendo realmente?
- Mujer de 26 años con DM1 que omitió insulina glargina tras infección urinaria.
- Poliuria, polidipsia, dolor abdominal, deterioro de consciencia.
- Signos de hipovolemia: TA 85/55, mucosas secas, FC 128, aliento cetósico, respiración de Kussmaul (FR 32).
- Glucometría >500 mg/dL; gases: pH 7.12, HCO3 8, pCO2 24 (compensación respiratoria).
- Cuadro típico de CAD severa por déficit absoluto de insulina, no por exceso de insulina.

¿Qué dato es clave en el examen?
- Mecanismo: insulopenia → lipólisis y beta-oxidación → cuerpos cetónicos (acetoacetato, beta-hidroxibutirato) → acidosis metabólica con brecha aniónica elevada.
- No es acidosis láctica primaria (aunque puede coexistir hipoperfusión); el primum movens es la cetogénesis.
- Primera intervención: reanimación con cristaloides isotónicos (SF 0.9%) — la hipovolemia es lo que más mata en la primera hora.
- Insulina IV solo después de iniciar volumen y confirmar K+ seguro (≥3.3 mEq/L según ADA).
- Bicarbonato: reservado para pH <6.9 con inestabilidad; a pH 7.12 no es primera línea.

¿Por qué fallan las otras opciones?
- Acidosis láctica + bicarbonato: confunde CAD con shock séptico/láctico; el bicarbonato rutinario no corrige la causa y puede empeorar el potasio intracelular.
- Bolo de insulina como primer paso: la fluidoterapia precede a la insulina; además con hipoperfusión la vía SC es errática.
- Insulina SC + reposición agresiva de K+ sin volumen: invierte el algoritmo; en CAD severa con shock se requiere insulina IV tras volumen.

Clave: DM1 + omisión de insulina + cetosis + pH 7.12 → cristaloides primero, insulina IV después, K+ siempre en mente.

Perlas de examen
• Kussmaul + aliento cetósico + glucemia alta = CAD hasta demostrar lo contrario.
• La pregunta suele mezclar "mecanismo" con "primer paso"; responde ambas partes.
• No confundir CAD (DM1, cetosis) con estado hiperosmolar (DM2, sin cetosis marcada).

Referencias: ADA Standards of Care — DKA; Tintinalli Emergency Medicine; UpToDate Cetoacidosis diabética.`,

  "ucc-dx-03": `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa identificación de diseño epidemiológico y medida de asociación apropiada a partir de un estudio observacional en Nariño.

¿Qué está ocurriendo realmente?
- 150 pacientes con adenocarcinoma de cardias (C160) = CASOS (ya tienen el desenlace).
- 300 controles emparejados por edad y sexo = grupo sin el desenlace, seleccionado para comparar.
- Cuestionario retrospectivo sobre consumo de alimentos ahumados con nitritos en 20 años = exposición indagada hacia atrás.
- No hay seguimiento prospectivo de sanos hacia el cáncer; el desenlace ya ocurrió al reclutar.

¿Qué dato es clave en el examen?
- Diseño: casos y controles (observacional analítico retrospectivo).
- Se parte del desenlace (enfermo vs sano) y se investiga exposición pasada.
- No hay incidencia porque no se siguió una cohorte en el tiempo → no se calcula Riesgo Relativo (RR).
- Medida válida: Odds Ratio (OR) = odds de exposición en casos / odds de exposición en controles.
- El emparejamiento (edad, sexo) controla confusión; el sesgo de recuerdo es limitación inherente al diseño.

¿Por qué fallan las otras opciones?
- Cohorte prospectiva + RR: en cohorte se parte de expuestos/no expuestos sanos y se mide incidencia del desenlace; aquí los enfermos ya están seleccionados.
- Transversal + Razón de Prevalencias: mide exposición y desenlace en un solo corte temporal; aquí hay direccionalidad retrospectiva clara (20 años de exposición).
- Ensayo cuasi-experimental + RRA: implica intervención/asignación de exposición; esto es observacional puro.

Clave: desenlace ya presente al reclutar + exposición retrospectiva = casos y controles → OR.

Perlas de examen
• Pregunta trampa: "150 casos y 300 controles" → casos y controles, no cohorte.
• RR solo con incidencia; OR es la medida natural del caso-control.
• Memorizar: cohorte = expuesto → desenlace; caso-control = desenlace → exposición.

Referencias: Gordis Epidemiology; Fletcher Clinical Epidemiology; CEU epidemiología clínica.`,

  "ucc-dx-04": `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa dos trampas farmacológicas en un mismo caso: bloqueo dual del SRAA en HTA y cardiotoxicidad de trastuzumab en oncología.

¿Qué está ocurriendo realmente?
- Hombre de 52 años con obesidad abdominal (perímetro 108 cm), HTA esencial de novo tras fallar medidas no farmacológicas.
- Creatinina 0.95, K+ 4.3, glucosa en ayunas 118 → síndrome metabólico / prediabetes, sin daño renal establecido.
- Sin IC ni cardiopatía isquémica: perfil típico donde IECA o ARA II solos son de primera línea, no la combinación.
- La pregunta pide dos respuestas: combinación antihipertensiva contraindicada + fármaco oncológico con eco basal obligatorio.

¿Qué dato es clave en el examen?
- Contraindicado: IECA + ARA II simultáneos (bloqueo dual del SRAA).
- Evidencia ONTARGET: ↑ nefrotoxicidad, ↑ hiperpotasemia, sin beneficio cardiovascular adicional.
- Los IECA o ARA II por separado SÍ están indicados en HTA con disglucemia/obesidad; la trampa es la combinación.
- Trastuzumab (anti-HER2): cardiotoxicidad tipo II (disfunción, no necrosis miocitaria) → ecocardiograma basal y seriado (FEVI).
- Diferencia con antraciclinas: cardiotoxicidad tipo I (dosis-dependiente, irreversible).

¿Por qué fallan las otras opciones?
- Betabloqueadores contraindicados + tamoxifeno: los BB no están contraindicados de forma absoluta en síndrome metabólico; tamoxifeno no exige protocolo ecocardiográfico por cardiotoxicidad tipo II.
- IECA contraindicados con hiperglucemia + docetaxel: los IECA/ARA II son de primera línea con disglucemia; docetaxel no tiene el mismo perfil que trastuzumab.
- Tiazidas contraindicadas con obesidad + paclitaxel: las tiazidas no están absolutamente contraindicadas; paclitaxel no exige el mismo seguimiento de FEVI que trastuzumab.

Clave: bloqueo dual SRAA = prohibido; trastuzumab = eco basal + seriado de FEVI.

Perlas de examen
• Pregunta doble: lee las dos partes del enunciado antes de elegir.
• ONTARGET es la cita obligatoria para IECA + ARA II.
• Tipo I (antraciclinas) vs Tipo II (trastuzumab): trampa recurrente en residencia.

Referencias: ONTARGET Study; ESC/ACC HTA Guidelines; ASCO Trastuzumab Cardiac Monitoring.`,

  "ucc-dx-05": `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa el algoritmo de tamizaje de sífilis gestacional en primer control prenatal según Res. 3280 de 2018 en atención primaria colombiana.

¿Qué está ocurriendo realmente?
- Gestante de 22 años, 9 semanas de gestación, primer control prenatal.
- Sin lesiones genitales visibles → no hay indicación de microscopía de campo oscuro.
- Contexto: prevención de sífilis congénita desde el primer contacto con el servicio de salud.
- La pregunta es de protocolo nacional (algoritmo reverso), no de estadio clínico de sífilis.

¿Qué dato es clave en el examen?
- Algoritmo reverso vigente en Colombia: prueba treponémica rápida en punto de atención (POC) en el primer contacto prenatal.
- Si positiva: penicilina benzatínica inmediata (no esperar confirmación para tratar) + VDRL/RPR para títulos basales y seguimiento.
- Si negativa: documentar y continuar controles; re-tamizaje según ruta materno-perinatal (tercer trimestre y parto).
- El tamizaje no se posterga al tercer trimestre: la sífilis congénita es prevenible con detección y tratamiento tempranos.
- Campo oscuro: solo en lesión ulcerosa activa (sífilis primaria), no como tamizaje universal en gestante asintomática.

¿Por qué fallan las otras opciones?
- VDRL/RPR primero y luego treponémica: es el algoritmo clásico directo, obsoleto en APS colombiana; la rápida treponémica POC tiene prioridad.
- Campo oscuro de flujo vaginal universal: no hay lesión; además no es tamizaje de población.
- Postergar al tercer trimestre: retrasa tratamiento y aumenta riesgo de transmisión vertical.

Clave: primer contacto prenatal → rápida treponémica POC → si (+) tratar ya + VDRL para títulos.

Perlas de examen
• "Algoritmo reverso" = treponémica primero, no treponémica de confirmación después de VDRL.
• Penicilina benzatínica es el único tratamiento seguro en embarazo.
• Res. 3280 es la biblia en preguntas de ruta materno-perinatal en Colombia.

Referencias: Resolución 3280 de 2018; Guía MSPS sífilis gestacional; OMS eliminación sífilis congénita.`,

  "ucc-dx-06": `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa compartimentalización del dogma central de la biología molecular en células eucariotas humanas: dónde ocurren replicación, transcripción y traducción.

¿Qué está ocurriendo realmente?
- Célula eucariota humana: ADN nuclear, organelas membranosas, citoplasma con ribosomas.
- La pregunta no pide excepciones (mitocondria) sino la localización predominante de los tres procesos.
- Es pregunta de ciencias básicas (10% del examen UCC), pero con distractores que mezclan procariota y eucariota.

¿Qué dato es clave en el examen?
- Replicación del ADN: núcleo (ADN polimerasa nuclear, durante fase S del ciclo celular).
- Transcripción (ADN → ARNm): núcleo (ARN polimerasa II); el ARNm precursor se procesa (splicing) antes de exportarse.
- Traducción (ARNm → proteína): citoplasma, en ribosomas libres o unidos al retículo rugoso.
- El ARNm maduro sale al citosol a través de poros nucleares; la traducción no ocurre en el núcleo.

¿Por qué fallan las otras opciones?
- Todo en citoplasma: patrón de procariota (bacteria), donde no hay núcleo ni compartimentación nuclear.
- Replicación y traducción en núcleo; transcripción en citoplasma: invierte los compartimentos; la traducción requiere ribosomas citoplasmáticos.
- Transcripción en citoplasma; replicación y traducción en núcleo: viola el dogma central en eucariotas.

Clave: ADN se replica y se transcribe en núcleo; la proteína se sintetiza en citoplasma (ribosomas).

Perlas de examen
• Trampa clásica: confundir eucariota con procariota (todo en citoplasma).
• Otra trampa: poner traducción en el núcleo (no hay ribosomas funcionales allí).
• Matiz avanzado: mitocondria tiene ADN propio y traduce localmente, pero no es lo que preguntan.

Referencias: Lehninger Biochemistry; Alberts Molecular Biology of the Cell; Harper Biochemistry.`,

  "ucc-dx-07": `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa indicación de antibióticos en exacerbación de EPOC según criterios de Anthonisen (GOLD), no según gravedad aislada o biomarcadores.

¿Qué está ocurriendo realmente?
- Hombre de 68 años, EPOC por tabaquismo 40 paquetes/año, exacerbación en 48 h.
- Disnea mMRC subió de 2 a 4 (empeoramiento de disnea).
- Mayor volumen de esputo y purulencia (esputo verdoso) = sospecha de componente infeccioso bacteriano.
- Taquipnea 30 rpm, musculatura accesoria, SatO2 84%, sibilancias → exacerbación severa que requiere hospitalización, pero la pregunta es la justificación de ATB.

¿Qué dato es clave en el examen?
- Criterios de Anthonisen (3 de 3 para tipo I):
  1. Aumento de disnea
  2. Aumento de volumen de esputo
  3. Aumento de purulencia del esputo
- Este paciente cumple los 3 → exacerbación tipo I → antibióticos empíricos indicados (GOLD).
- Si solo hay 2 criterios, uno debe ser purulencia del esputo para indicar ATB.
- La hospitalización por sí sola no justifica antibióticos; muchas exacerbaciones severas son puramente inflamatorias.

¿Por qué fallan las otras opciones?
- Todo hospitalizado recibe ATB: la hospitalización refleja gravedad respiratoria, no criterio infeccioso aislado.
- Solo con leucocitos >15 000 o fiebre >38.5°C: biomarcadores inespecíficos; Anthonisen es clínico-fenomenológico.
- Solo con aislamiento previo de Pseudomonas: el cultivo previo guía el esquema en pacientes colonizados, no es requisito para indicar ATB en tipo I.

Clave: disnea + volumen + purulencia del esputo = Anthonisen tipo I = antibiótico indicado.

Perlas de examen
• La purulencia del esputo es el criterio más pesado cuando solo hay 2 de 3.
• No confundir indicación de ATB (Anthonisen) con indicación de hospitalización (gasometría, SatO2, trabajo respiratorio).
• En colonizados por Pseudomonas, el ATB se escala, pero no se condiciona al cultivo previo.

Referencias: GOLD Report EPOC; Anthonisen et al.; Celli Stable COPD Exacerbation Guidelines.`,

  "ucc-dx-08": `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa autoanticuerpos específicos de LES y su asociación con nefritis lúpica en una paciente con cuadro sistémico completo.

¿Qué está ocurriendo realmente?
- Mujer joven (32 años) con síntomas sistémicos: astenia, poliartralgias simétricas matutinas, fotosensibilidad.
- Rash malar que respeta surcos nasogenianos (signo de mariposa clásico).
- Edema, proteinuria 1.5 g/24 h con hematuria y acantocitos → nefritis lúpica activa.
- ANA 1:640 patrón homogéneo: muy sensible para lupus, pero poco específico (positivo en muchas autoinmunidades).

¿Qué dato es clave en el examen?
- Anti-Smith (anti-Sm): máxima especificidad para LES (>95%); confirma el diagnóstico pero tiene baja sensibilidad.
- Anti-DNA de doble cadena (anti-dsDNA): alta especificidad para LES; títulos correlacionan con actividad de enfermedad y nefritis lúpica.
- La pregunta pide anticuerpos que confirman LES y se asocian a nefritis → anti-Sm + anti-dsDNA.
- ANA positivo solo orienta; no confirma ni predice nefritis por sí solo.

¿Por qué fallan las otras opciones?
- Anti-Ro (SSA) y anti-La (SSB): típicos de síndrome de Sjögren y lupus cutáneo subagudo neonatal; no los más específicos para LES sistémico con nefritis.
- Anti-CCP: específico de artritis reumatoide, no de lupus.
- Anti-centrómero y anti-Scl-70: orientan a esclerosis sistémica (forma limitada y difusa respectivamente).

Clave: ANA sensible + anti-Sm (especificidad) + anti-dsDNA (actividad/nefritis) = perfil lúpico confirmatorio.

Perlas de examen
• ANA positivo no diagnostica lupus; anti-Sm y anti-dsDNA sí confirman.
• Acantocitos + proteinuria + anti-dsDNA = nefritis lúpica activa hasta biopsia.
• Anti-CCP = artritis reumatoide; anti-Scl-70 = esclerodermia difusa.

Referencias: ACR/EULAR Criteria SLE 2019; UpToDate Lupus Nephritis; Harrison Rheumatology.`,

  "ucc-dx-09": `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa cálculo de sensibilidad a partir de una tabla 2×2 con gold standard (clamp euglucémico) para resistencia a la insulina.

¿Qué está ocurriendo realmente?
- 1000 adultos evaluados con prueba nueva vs gold standard.
- VP = 400 (enfermos correctamente identificados).
- FN = 100 (enfermos que la prueba no detectó).
- FP = 50 (sanos que la prueba marcó positivos).
- VN = 450 (sanos correctamente identificados como negativos).
- Total enfermos (gold standard +) = VP + FN = 400 + 100 = 500.

¿Qué dato es clave en el examen?
- Sensibilidad = capacidad de detectar enfermos = VP / (VP + FN).
- Cálculo: 400 / (400 + 100) = 400 / 500 = 0.80 = 80%.
- Se trabaja sobre la columna de ENFERMOS (gold standard positivo), no sobre sanos ni sobre todos los positivos de la prueba.

¿Por qué fallan las otras opciones?
- 90%: es la especificidad = VN / (VN + FP) = 450 / (450 + 50) = 450/500 = 90%. Trampa clásica: confundir sensibilidad con especificidad.
- 88%: aproxima el VPP = VP / (VP + FP) = 400 / (400 + 50) = 400/450 ≈ 88.9%. El VPP depende de la prevalencia; la sensibilidad no.
- 75%: error de denominador (dividir por total de la prueba o por otra columna).

Clave: sensibilidad = VP / (VP + FN) = enfermos detectados / todos los enfermos = 80%.

Perlas de examen
• Mnemotecnia: Sensibilidad = enfermos (columna vertical de enfermos).
• Especificidad = sanos (columna vertical de sanos).
• VPP y VPN dependen de prevalencia; sensibilidad y especificidad son intrínsecas de la prueba.

Referencias: Fletcher Clinical Epidemiology; CEU Bioestadística; Gordis Epidemiology.`,

  "ucc-dx-10": `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta evalúa instrucciones posológicas obligatorias de bifosfonatos orales (alendronato) para prevenir esofagitis medicamentosa en una mujer con osteoporosis.

¿Qué está ocurriendo realmente?
- Mujer de 65 años con osteoporosis (T-score -2.8 lumbar, -2.6 cuello femoral).
- Factores de riesgo: edad, sexo, antecedente materno de fractura de cuello femoral.
- HTA como comorbilidad; se prescribe alendronato 70 mg semanal oral.
- La pregunta no es indicación de tratamiento sino cómo tomarlo para evitar efecto adverso esofágico.

¿Qué dato es clave en el examen?
- Bifosfonatos orales (alendronato, risedronato): baja biodisponibilidad (<1%) y alto potencial de irritación esofágica.
- Regla obligatoria:
  1. Tomar en ayunas (mínimo 30 min antes de alimentos).
  2. Solo con agua abundante (no jugos, no leche).
  3. Permanecer erguido (sentada o de pie) 30–60 minutos antes de acostarse o de comer.
- El fármaco que permanece en el esófago por decúbito o falta de agua causa esofagitis, úlcera y estenosis.

¿Por qué fallan las otras opciones?
- Con desayuno y leche/yogur: el calcio y los alimentos quelatan el bifosfonato, anulando absorción y prolongando contacto esofágico.
- Tomar en la noche antes de dormir: el decúbito inmediato favorece reflujo del comprimido al esófago → esofagitis severa.
- Suspender por dolor óseo leve sugiriendo osteonecrosis: la osteonecrosis de mandíbula/fémur atípica es rara, asociada a uso prolongado, no a las primeras dosis.

Clave: ayuno + agua abundante + erguido 30–60 min = tríada obligatoria del bifosfonato oral.

Perlas de examen
• Si la pregunta dice "alendronato oral", piensa inmediatamente en esofagitis por mala técnica.
• Calcio y bifosfonato se separan al menos 30–60 min (idealmente horas).
• Osteonecrosis atípica es efecto adverso de largo plazo, no de posología aguda.

Referencias: NOF Clinician's Guide Osteoporosis; UpToDate Oral Bisphosphonates; Beers Criteria geriatría.`,
};
