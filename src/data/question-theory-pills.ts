/** Píldoras de teoría para preguntas base sin `theoryContent` inline. */
export const QUESTION_THEORY_PILLS: Record<string, string> = {
  "q0-semio": `S4 vs S3: guía rápida para semiología cardiovascular

El S4 ocurre en presístole (contracción auricular contra ventrículo rígido). Clásico en HTA crónica con HVI.

S3: inicio diástole, llenado rápido, insuficiencia o miocardiopatía dilatada.

Cómo resolver:
- Ubica el momento del ciclo (final diástole = S4).
- Relaciona rigidez ventricular con HTA.
- Descarta estenosis mitral (sonido de apertura post-S2) y S3.`,
  "q1": `CAD pediátrica: orden de prioridades en la primera hora

En cetoacidosis diabética, la rehidratación con cristaloides isotónicos es la intervención primaria antes de insulina.

Por qué:
- Restaura perfusión y filtración glomerular.
- Iniciar insulina simultáneamente con expansión agresiva aumenta gradiente osmótico → riesgo de edema cerebral (complicación letal en pediatría).

Secuencia:
1. Expansión con SF 0.9% (20-30 min).
2. Insulina IV cuando K+ y volumen lo permitan.
3. Evitar bicarbonato rutinario.

Trampa: elegir insulina + bicarbonato como "prioridad absoluta".`,
  "q2": `Dengue en Colombia: grupos A, B1, B2 y C

Signos de alarma en fase crítica (post-defervescencia):
- Dolor abdominal intenso
- Hepatomegalia >2 cm
- Sangrado mucoso, acumulación de líquidos, etc.

Grupo B2 = al menos un signo de alarma → hospitalización + cristaloides IV.

No confundir:
- Grupo A: sin alarma, ambulatorio.
- Grupo C: dengue grave (choque, sangrado severo).
- B1: sin alarma pero con comorbilidades/embarazo/etc.

El dolor abdominal + hepatomegalia tras caída de fiebre = B2 obligatorio.`,
  "q3": `Trauma pélvico inestable: ATLS 11ª edición

Choque + pelvis inestable + FAST negativo → sangrado pélvico venoso/óseo probable.

Prioridad: faja pélvica a nivel de trocánteres mayores (reduce volumen pélvico).

Además:
- Protocolo de transfusión masiva
- Ácido tranexámico <3 h
- Hipotensión permisiva (evitar cristaloides masivos)

No TAC antes de estabilizar mecánica si inestable.
No laparotomía solo por FAST negativo con mecanismo pélvico claro.`,
  "q4": `Hemorragia postparto: Código Rojo

Atonía uterina + sangrado masivo + TA 75/40 + FC 140 + confusión = choque severo (>30-40% volemia).

Primeros 20 minutos:
- Dos accesos IV
- Cristaloides calentados
- Transfusión inmediata (O negativo si necesario)
- Masaje uterino + uterotónicos concurrentes

No esperar pruebas cruzadas en choque severo.
No histerectomía sin estabilización inicial cuando hay respuesta a medidas.`,
  "q5": `Sepsis neonatal temprana (<72 h)

Factores de riesgo: RPM >18 h, fiebre materna, prematuridad.

Cualquier signo clínico (letargia, rechazo succión, fiebre) + factor de riesgo = acción inmediata.

Esquema empírico Colombia:
- Hemocultivo primero
- Ampicilina + gentamicina IV

No observación expectante con síntomas.
Cefotaxima sola no es esquema estándar de primera línea en guía nacional clásica.`,
  "q6": `Vólvulo de sigmoides vs ciego

Signo del grano de café (asa en omega) emergiendo de pelvis = vólvulo de sigmoides.

Sin peritonitis/isquemia → devolvulación endoscópica (rectosigmoidoscopia/colonoscopia) como primera opción.

Vólvulo cecal: imagen diferente, casi siempre requiere cirugía (hemicolectomía derecha).

Íleo paralítico no produce signo del grano de café.`,
  "q7": `Envenenamiento botrópico (Mapaná/Bothrops)

Cuadro grave: edema masivo + coagulopatía de consumo (incoagulable) + sangrado sistémico.

Tratamiento:
- Suero antiofídico polivalente IV
- Dosis por gravedad clínica, NO por peso
- Vía IV (IM ineficaz)

No plasma antes de antiveneno (no neutraliza toxina).
No confundir con accidente elapídico (neurotoxicidad predominante).`,
  "q8": `Preeclampsia severa con síntomas de vasoespasmo

Cefalea + fosfenos + hiperreflexia + TA 170/115 + proteinuria = preeclampsia con criterios de severidad.

Intervención dual:
1. Sulfato de magnesio (prevención de eclampsia)
2. Antihipertensivo IV seguro (labetalol, hidralazina, nifedipino según protocolo)

No IECA (contraindicados en embarazo).
No cesárea inmediata sin estabilización (riesgo de ACV materno).`,
  "q9": `Malaria grave por P. falciparum en Colombia

Criterios de gravedad: parasitemia >5%, anemia severa, alteración conciencia, ictericia, etc.

Tratamiento:
- Hospitalización
- Artesunato IV (derivado artemisinina parenteral)

No cloroquina (resistencia en falciparum).
No ACT oral ambulatorio en malaria complicada.
No monoterapia con sulfadoxina-pirimetamina en grave.`,
  "q10": `IAMCEST sin hemodinamia disponible

ECG con ST ↑ + síntomas = reperfusión urgente.

Si PCI no disponible en ≤120 min → fibrinólisis IV en ≤30 min (puerta-aguja).

No esperar troponinas.
No traslado prolongado sin fibrinólisis si supera ventana para PCI oportuna.`,
  "q11-semio": `Insuficiencia cardíaca con FEVI reducida: congestión

La bomba falla en vaciamiento sistólico → ↑ presión telediastólica ventricular → transmisión retrógrada:
- Pulmonar → disnea, ortopnea
- Sistémico → YVP, hepatomegalia, RHY positivo

No es primarily:
- Solo activación simpática (compensador, no explica congestión directamente)
- Lesión valvular primaria (puede coexistir, pero aquí el motor es falla sistólica)

Regla UNAL/economía del conocimiento: un mecanismo hidrostático unifica ortopnea + YVP + RHY.`,
};
