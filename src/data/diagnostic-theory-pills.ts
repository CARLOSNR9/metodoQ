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

  "ucc-dx-01": `Res. 3280 — tamizaje cáncer colorrectal

Población 50–75 años asintomática, riesgo promedio:
- SOMF (inmunoquímica) bienal
- Colonoscopia confirmatoria si positivo (ordenable por médico general)

No ACE como tamizaje.
No colonoscopia primaria en riesgo promedio sin indicación.
Tamizaje no depende de síntomas.`,

  "ucc-dx-02": `CAD — fisiopatología y primer paso

Déficit de insulina → lipólisis → cetonas → acidosis con brecha aniónica (no láctica primaria).

Primero: cristaloides isotónicos.
Insulina IV después de volumen y K+ seguro.
Bicarbonato solo en pH extremos.`,

  "ucc-dx-03": `Casos y controles vs cohorte

Se elige por desenlace (casos vs controles) → exposición retrospectiva.
Medida: Odds Ratio (OR).

Cohorte: parte de expuestos/no expuestos → incidencia → Riesgo Relativo.
Transversal: un solo momento temporal.`,

  "ucc-dx-04": `Farmacología SRAA y trastuzumab

Contraindicado: IECA + ARA II simultáneos (bloqueo dual SRAA) → ↑ nefrotoxicidad e hiperK+ sin beneficio (ONTARGET).

Trastuzumab: cardiotoxicidad tipo II → ecocardiograma basal y seriado (FEVI).`,

  "ucc-dx-05": `Sífilis gestacional — algoritmo reverso (Colombia)

Primer contacto prenatal:
- Prueba treponémica rápida en POC
- Si positiva: penicilina benzatínica inmediata + VDRL/RPR para títulos basales

No postergar al tercer trimestre.
Campo oscuro solo en lesión ulcerosa activa.`,

  "ucc-dx-06": `Dogma central — célula eucariota

- Replicación ADN: núcleo
- Transcripción: núcleo (ARNm)
- Traducción: citoplasma (ribosomas)

No confundir con procariota (todo en citoplasma sin compartimentación).`,

  "ucc-dx-07": `EPOC — criterios de Anthonisen para ATB

3 criterios: ↑ disnea, ↑ volumen esputo, ↑ purulencia (color).
Tipo I (los 3) → antibiótico indicado.

Hospitalización sola no basta.
Leucocitosis/fiebre son inespecíficos.`,

  "ucc-dx-08": `LES — autoanticuerpos

ANA: sensible pero poco específico.
Anti-Sm: máxima especificidad para LES.
Anti-dsDNA: específico, correlaciona con actividad y nefritis lúpica.

Anti-CCP → artritis reumatoide.
Anti-Ro/La → Sjögren/lupus cutáneo subagudo.`,

  "ucc-dx-09": `Sensibilidad — tabla 2×2

Sensibilidad = VP / (VP + FN) = 400 / 500 = 80%.

Columna de ENFERMOS (gold standard positivo).

No confundir:
- Especificidad = VN / (VN + FP) = 90%
- VPP = VP / (VP + FP) ≈ 88%`,

  "ucc-dx-10": `Bifosfonatos orales — esofagitis

Alendronato y similares:
- Ayunas
- Solo con agua abundante
- Permanecer erguido 30–60 min antes de acostarse

Calcio/lácteos en la toma quelatan el fármaco y anulan absorción.
No tomar antes de dormir (reflujo esofágico del comprimido).`,
};
