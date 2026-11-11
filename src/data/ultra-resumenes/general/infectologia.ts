import type { UltraEntry } from "@/lib/ultra-resumenes/types";

/** Ultra resumen general · infectologia. Generado desde content/ultra-resumenes/general/infectologia.md; no editar a mano. */
export const ENTRIES: UltraEntry[] = [
  {
    "kind": "card",
    "id": "g-752",
    "title": "Profilaxis de meningitis meningocócica (también en VIH)",
    "points": [
      "Contactos cercanos de un caso de meningitis por meningococo.",
      "Primera línea: rifampicina, ceftriaxona intramuscular dosis única o ciprofloxacino dosis única.",
      "Segunda línea: azitromicina.",
      "Dar lo antes posible (idealmente en las primeras 24 h)."
    ]
  },
  {
    "kind": "card",
    "id": "g-754",
    "title": "Leucoencefalopatía multifocal progresiva (LMP)",
    "points": [
      "Infección del cerebro por el virus JC en personas muy inmunosuprimidas (VIH con CD4 bajos, natalizumab, trasplantes).",
      "Déficits neurológicos focales que avanzan (debilidad, alteraciones visuales, ataxia), sin fiebre.",
      "RM: lesiones en la sustancia blanca sin realce ni efecto de masa. PCR del virus JC en LCR.",
      "No hay antiviral: restaurar la inmunidad (empezar TAR en VIH o suspender el inmunosupresor). Mal pronóstico."
    ]
  },
  {
    "kind": "card",
    "id": "g-757",
    "title": "Tuberculosis resistente a isoniazida",
    "points": [
      "Opción 1: rifampicina + etambutol + pirazinamida + una quinolona (levofloxacino o moxifloxacino) durante 6 meses. En VIH, valorar prolongar.",
      "Opción 2: si no tolera la pirazinamida, rifampicina + etambutol + quinolona 9-12 meses (confirmar sensibilidad a la quinolona).",
      "La resistencia a rifampicina (o multirresistente) necesita esquemas distintos, manejados por especialistas."
    ]
  },
  {
    "kind": "card",
    "id": "g-760",
    "title": "Candidemia (Candida en sangre)",
    "points": [
      "Tratamiento de entrada: equinocandina (caspofungina o micafungina).",
      "Retirar catéteres, hacer fondo de ojo y ecocardiograma si persiste.",
      "Mantener 14 días desde el primer hemocultivo negativo."
    ]
  },
  {
    "kind": "card",
    "id": "g-814",
    "title": "Seguimiento de la sífilis tras el tratamiento",
    "points": [
      "Se sigue con la prueba no treponémica (VDRL o RPR), que debe bajar.",
      "Sífilis temprana: control a los 6 y 12 meses.",
      "Sífilis tardía: a los 6, 12 y 24 meses.",
      "Con VIH: a los 1, 3, 6, 9 y 12 meses.",
      "Respuesta adecuada: el título baja 4 veces (por ejemplo, de 1:32 a 1:8)."
    ]
  },
  {
    "kind": "card",
    "id": "g-833",
    "title": "Neumonía por Pneumocystis en VIH",
    "points": [
      "Sospechar con CD4 <200: disnea progresiva, tos seca, hipoxemia, infiltrados intersticiales bilaterales.",
      "Tratamiento de primera línea: trimetoprim-sulfametoxazol.",
      "Corticoides en las primeras 72 h si es moderada-grave (PaO2 <70 mmHg o gradiente alveoloarterial >35): bajan la mortalidad y la necesidad de ventilación."
    ]
  },
  {
    "kind": "card",
    "id": "g-834",
    "title": "VIH: diagnóstico y tratamiento",
    "points": [
      "Periodo ventana: la carga viral (ARN) detecta desde ~10 días; la prueba de 4.ª generación (anticuerpos + antígeno p24) desde ~14 días; las de 3.ª generación desde ~30 días.",
      "Diagnóstico con 2 pruebas positivas; si hay discordancia, carga viral. Si es indeterminado, repetir en 1 mes y remitir a infectología.",
      "Estadios por CD4: 1 >500; 2 200-499; 3 (sida) <200.",
      "Tratamiento antirretroviral para todos y lo antes posible.",
      "Esquema inicial actual: 2 inhibidores de la transcriptasa análogos (tenofovir + emtricitabina o lamivudina) + dolutegravir (inhibidor de la integrasa).",
      "Tenofovir disoproxilo: vigilar riñón (evitar si filtrado <60) y hueso. Abacavir: pedir antes HLA-B*5701. Efavirenz: evitar en el embarazo inicial y síntomas neuropsiquiátricos."
    ]
  },
  {
    "kind": "card",
    "id": "g-835",
    "title": "VIH: vacunas y profilaxis de infecciones oportunistas",
    "points": [
      "Vacunas: influenza inactivada anual, COVID-19, neumococo (conjugada ± polisacárida), hepatitis B (comprobar anti-HBs), meningococo, zóster recombinante desde los 18 años, VPH y Tdap.",
      "Vacunas vivas (triple viral, varicela): solo si CD4 ≥200 (y ≥15 %); nunca influenza viva.",
      "CD4 <200: profilaxis de Pneumocystis con trimetoprim-sulfametoxazol.",
      "CD4 <100 con toxoplasma IgG positivo: trimetoprim-sulfametoxazol (también cubre toxoplasma).",
      "CD4 <150 en zona endémica de histoplasma: itraconazol.",
      "CD4 <100 con antígeno de criptococo positivo: tratamiento anticipado con fluconazol.",
      "Tuberculosis latente (tuberculina ≥5 mm, IGRA positivo o contacto cercano): tratar.",
      "Las profilaxis se suspenden cuando el TAR sube los CD4 por encima de los umbrales."
    ]
  },
  {
    "kind": "card",
    "id": "g-836",
    "title": "Profilaxis pre y posexposición al VIH",
    "points": [
      "Preexposición (PrEP): personas sin VIH con alto riesgo; tenofovir 300 mg + emtricitabina 200 mg al día mientras dure el riesgo.",
      "Posexposición (PEP): empezar idealmente en 2 horas y como máximo en 72 horas. Tenofovir + emtricitabina (o lamivudina) + dolutegravir (o raltegravir) durante 28 días.",
      "Niños <12 años o <35 kg: zidovudina + lamivudina + inhibidor de integrasa.",
      "No hace falta PEP si la fuente tiene VIH con carga indetectable mantenida (>6 meses, último control reciente) y buena adherencia.",
      "Seguimiento: prueba de VIH a las 4 y 16 semanas; serologías de hepatitis B y C. Tras exposición sexual: profilaxis de ITS (ceftriaxona + azitromicina + metronidazol) y anticoncepción de emergencia."
    ]
  },
  {
    "kind": "card",
    "id": "g-837",
    "title": "Tuberculosis pulmonar",
    "points": [
      "Mycobacterium tuberculosis; su factor de virulencia es el factor cuerda.",
      "Síntomas: tos con expectoración, hemoptisis, fiebre, sudoración nocturna, pérdida de peso; algunos solo tienen cambios en la Rx.",
      "Sintomático respiratorio (a quien se le busca TB): tos con flema >15 días; en inmunosuprimidos, tos o fiebre o sudoración sin importar el tiempo; en niños, tos >15 días o fiebre >8 días.",
      "Diagnóstico: preferir la prueba molecular (detecta además resistencia a rifampicina); baciloscopia y cultivo.",
      "Tratamiento: 2 meses de rifampicina, isoniazida, pirazinamida y etambutol (RHZE) + 4 meses de rifampicina e isoniazida (RH). Controles a los 2, 4 y 6 meses.",
      "Curado: cultivo negativo al final. Fracaso: baciloscopia o cultivo positivo al 4.º mes o después.",
      "Aislamiento las primeras 2 semanas de tratamiento."
    ]
  },
  {
    "kind": "card",
    "id": "g-838",
    "title": "Efectos adversos de los antituberculosos",
    "points": [
      "Rifampicina: hepatotoxicidad, orina y lágrimas naranjas, muchas interacciones (baja el efecto de anticonceptivos, warfarina, antirretrovirales).",
      "Isoniazida: hepatitis y neuropatía periférica (prevenir con piridoxina, vitamina B6).",
      "Pirazinamida: hepatotoxicidad, ácido úrico alto y artralgias.",
      "Etambutol: neuritis óptica (pérdida de visión de colores); vigilar la vista."
    ]
  },
  {
    "kind": "card",
    "id": "g-839",
    "title": "Tuberculosis latente",
    "points": [
      "Infección sin síntomas ni contagio; riesgo de reactivarse.",
      "Tuberculina positiva: ≥5 mm en inmunosuprimidos o contactos cercanos; ≥10 mm en el resto (en algunos protocolos ≥15 mm en población sin riesgo). IGRA como alternativa.",
      "No se trata a todos, solo a: contactos cercanos, conversión reciente, inmunosupresión de riesgo (VIH, anti-TNF, trasplante, corticoides ≥15 mg/día >1 mes) y lesiones fibróticas en la Rx.",
      "Niños <5 años y personas con VIH con contacto cercano: tratar aunque la tuberculina sea negativa.",
      "Antes de tratar, descartar tuberculosis activa.",
      "Esquemas: isoniazida + rifampicina 3 meses; rifampicina 4 meses; isoniazida + rifapentina semanal 3 meses; isoniazida 6-9 meses."
    ]
  },
  {
    "kind": "card",
    "id": "g-840",
    "title": "Coinfección VIH y tuberculosis",
    "points": [
      "Si ya tomaba TAR: seguir y empezar el tratamiento de TB.",
      "Si no tomaba TAR: empezar primero la TB y luego el TAR: con CD4 <50, en las 2 primeras semanas; con CD4 ≥50, entre las 2 y 8 semanas. En meningitis tuberculosa, esperar ~8 semanas (riesgo de reconstitución inmune grave).",
      "La rifampicina reduce los niveles de inhibidores de proteasa e integrasa (subir la dosis de dolutegravir a cada 12 h).",
      "Tratamiento de la TB igual: 2 meses RHZE + 4 meses RH. Cotrimoxazol si CD4 <200."
    ]
  },
  {
    "kind": "card",
    "id": "g-841",
    "title": "Marcadores de hepatitis B (y coinfección con VIH)",
    "points": [
      "HBsAg: hay infección (aguda o crónica). Anti-HBs >10: inmunidad (vacuna o curación).",
      "Anti-HBc (core): solo aparece por infección natural, no por vacuna. IgM anti-HBc: infección aguda. IgG anti-HBc: infección pasada o crónica.",
      "HBeAg: el virus se está replicando activamente.",
      "Anti-HBc aislado: pensar en hepatitis B oculta → pedir ADN viral.",
      "Tratar si ADN ≥2.000 UI/ml con transaminasas altas o fibrosis significativa, y a todo cirrótico con ADN detectable.",
      "Fármacos: tenofovir o entecavir; en VIH, el TAR debe incluir tenofovir + emtricitabina/lamivudina (activos contra ambos virus)."
    ]
  },
  {
    "kind": "card",
    "id": "g-842",
    "title": "Fases de la hepatitis B crónica",
    "points": [
      "Inmunotolerante: HBeAg positivo, ADN muy alto, transaminasas normales.",
      "Inmunoactiva: transaminasas altas, ADN alto (>2.000) y daño hepático → tratar.",
      "Portador inactivo: HBeAg negativo, anti-HBe positivo, ADN bajo (<2.000), transaminasas normales → vigilar.",
      "Reactivación: el ADN y las transaminasas vuelven a subir (por ejemplo, con quimioterapia o inmunosupresión)."
    ]
  },
  {
    "kind": "card",
    "id": "g-854",
    "title": "Influenza",
    "points": [
      "Fiebre súbita ≥38 °C con tos o dolor de garganta, dolores musculares, cefalea y malestar; en niños puede haber vómitos o diarrea.",
      "Diagnóstico clínico en temporada.",
      "Oseltamivir siempre en influenza grave o complicada (neumonía, hipoxemia, hospitalización) y en grupos de riesgo (≤2 años, ≥65 años, embarazo y puerperio, enfermedades crónicas, inmunosupresión, obesidad mórbida), aunque hayan pasado más de 48 h.",
      "En sanos con cuadro leve: opcional si consulta en las primeras 48 h.",
      "No esperar la confirmación para tratar si la sospecha es alta."
    ]
  },
  {
    "kind": "card",
    "id": "g-870",
    "title": "Endocarditis infecciosa",
    "points": [
      "Aguda (<6 semanas), subaguda (6 semanas-3 meses), crónica (>3 meses).",
      "Gérmenes: grampositivos en el 90 % (S. aureus, estreptococos del grupo viridans, enterococo); grupo HACEK; con hemocultivos negativos, Coxiella, Bartonella, Brucella.",
      "Clínica: fiebre + soplo nuevo; hematuria; lesiones de Janeway (manchas indoloras en palmas), nódulos de Osler (dolorosos en pulpejos) y manchas de Roth en la retina.",
      "Hemocultivos (3 sets antes del antibiótico) y ecocardiograma.",
      "Criterios de Duke mayores: hemocultivos positivos para un germen típico (≥2) y ecocardiograma con vegetación, absceso o nueva insuficiencia valvular.",
      "Menores: cardiopatía predisponente o drogas IV, fiebre ≥38, fenómenos vasculares (embolias, Janeway), inmunológicos (Osler, Roth, glomerulonefritis), hemocultivo no típico.",
      "Definitiva: 2 mayores, 1 mayor + 3 menores o 5 menores. Posible: 1 mayor + 1 menor o 3 menores.",
      "Tratamiento: antibiótico intravenoso 4-6 semanas según el germen; cirugía si hay insuficiencia cardiaca, infección no controlada o alto riesgo de embolias."
    ]
  },
  {
    "kind": "card",
    "id": "g-871",
    "title": "Bacteriemia asociada a catéter",
    "points": [
      "Retirar el catéter si el germen es Candida, S. aureus, Pseudomonas u otros gramnegativos no fermentadores, si la bacteriemia persiste o hay complicaciones (endocarditis, émbolos sépticos, tromboflebitis).",
      "Estafilococo coagulasa negativo en paciente estable con pocos accesos: se puede intentar salvar el catéter con antibiótico sistémico + sellado antibiótico del catéter."
    ]
  },
  {
    "kind": "card",
    "id": "g-883",
    "title": "Malaria",
    "points": [
      "Plasmodium falciparum (la más grave) y P. vivax; transmitida por el mosquito Anopheles en zonas por debajo de ~1.500 m.",
      "Fiebre con escalofríos en alguien que vive o viajó a zona endémica. Diagnóstico: gota gruesa o prueba rápida.",
      "Complicada (parasitemia + al menos un criterio): neurológico (Glasgow <11, convulsiones, postración), respiratorio (distrés, edema pulmonar), choque, renal (creatinina >3 u oliguria), anemia grave (Hb <7 adultos, <5 niños), sangrado o CID, hipoglucemia <40, acidosis (bicarbonato <15, lactato >5), ictericia con disfunción de órganos, hiperparasitemia (>10 %).",
      "Complicada: artesunato intravenoso y hospitalización.",
      "No complicada por falciparum: arteméter-lumefantrina. Por vivax: cloroquina + primaquina (descartar déficit de G6PD; primaquina contraindicada en embarazo)."
    ]
  },
  {
    "kind": "card",
    "id": "g-884",
    "title": "Dengue",
    "points": [
      "Fiebre alta súbita 2-7 días, cefalea, dolor detrás de los ojos, dolor muscular y articular, exantema.",
      "Diagnóstico: NS1 o PCR en los primeros 5 días; IgM desde el día 5. Leucopenia y plaquetas bajas.",
      "Signos de alarma: dolor abdominal intenso, vómitos persistentes, acumulación de líquidos, sangrado de mucosas, somnolencia o irritabilidad, hígado >2 cm, hematocrito que sube.",
      "Dengue grave: choque por fuga de plasma, sangrado grave o daño de órganos (transaminasas ≥1.000, riñón, cerebro, corazón).",
      "Sin signos de alarma: casa, hidratación oral y acetaminofén. Nunca AINE ni aspirina.",
      "Con signos de alarma: hospital, cristaloides escalonados (5-7 ml/kg/h 1-2 h, luego 3-5 y después 2-3 según orina y hematocrito).",
      "Grave: UCI; bolo de cristaloide 20 ml/kg en 15-30 min, repetir según respuesta; coloides si no responde; transfundir si sangra."
    ]
  },
  {
    "kind": "card",
    "id": "g-885",
    "title": "Vacuna contra el dengue",
    "points": [
      "Qdenga: cubre los 4 serotipos; de 4 a 60 años; 2 dosis separadas 3 meses.",
      "Reduce dengue con síntomas y hospitalizaciones.",
      "No está en el esquema gratuito (PAI) de Colombia."
    ]
  },
  {
    "kind": "card",
    "id": "g-886",
    "title": "Fiebre amarilla",
    "points": [
      "Flavivirus transmitido por Aedes aegypti (urbano) o Haemagogus (selva).",
      "Tres fases: fiebre súbita con pulso lento para la fiebre (signo de Faget) → mejoría de 24-48 h → fase tóxica con ictericia, falla renal y vómito negro (sangre).",
      "Diagnóstico: PCR los primeros 5 días; IgM después. Transaminasas altas (AST > ALT), leucopenia, plaquetas bajas.",
      "Tratamiento de soporte; evitar AINE y aspirina. Los graves al hospital.",
      "Prevención: vacuna de virus vivo, dosis única. Contraindicada en <6 meses, inmunosuprimidos, alergia grave al huevo y enfermedad del timo."
    ]
  },
  {
    "kind": "card",
    "id": "g-887",
    "title": "Fiebre de Oropouche",
    "points": [
      "Virus transmitido por el jején (Culicoides paraensis).",
      "Fiebre súbita, cefalea intensa, dolor muscular y articular; característicamente bifásica: mejora y vuelve a la semana.",
      "Puede complicarse con meningitis o encefalitis.",
      "Diagnóstico: descartar otros arbovirus; PCR los primeros 5 días o IgM después.",
      "Soporte con hidratación y acetaminofén; no AINE ni aspirina hasta descartar dengue."
    ]
  },
  {
    "kind": "card",
    "id": "g-888",
    "title": "Enfermedad de Chagas",
    "points": [
      "Trypanosoma cruzi, transmitido por las heces del pito (triatomino), por alimentos contaminados, de madre a hijo o por transfusión.",
      "Aguda: fiebre, ganglios y signo de Romaña (párpado hinchado de un lado).",
      "Crónica: miocardiopatía (bloqueo de rama derecha, aneurisma de la punta, arritmias) o megaesófago y megacolon.",
      "Diagnóstico: en la fase aguda se ve el parásito en sangre; en la crónica, dos pruebas serológicas distintas positivas.",
      "Tratamiento: benznidazol 5-7 mg/kg/día en 2 dosis 60 días (o nifurtimox 60-90 días); más útil cuanto antes. Benznidazol contraindicado en embarazo e insuficiencia renal o hepática grave."
    ]
  },
  {
    "kind": "card",
    "id": "g-889",
    "title": "Enfermedad de Lyme",
    "points": [
      "Borrelia burgdorferi, transmitida por garrapatas Ixodes.",
      "Temprana localizada: eritema migratorio (lesión en ojo de buey), diagnóstico solo clínico.",
      "Temprana diseminada: parálisis facial (a veces bilateral), meningitis, carditis con bloqueo AV.",
      "Tardía: artritis de grandes articulaciones (rodilla).",
      "Fuera del eritema migratorio: ELISA y, si es positiva, Western blot.",
      "Tratamiento: doxiciclina 100 mg cada 12 h 10-21 días (amoxicilina en embarazo). Afectación neurológica grave o bloqueo AV completo: ceftriaxona intravenosa."
    ]
  },
  {
    "kind": "card",
    "id": "g-890",
    "title": "Leishmaniasis",
    "points": [
      "Protozoo transmitido por la picadura del flebótomo (palomilla).",
      "Cutánea: úlcera indolora de bordes elevados (la más frecuente en Colombia). Mucosa: destruye nariz y boca. Visceral: fiebre prolongada, hígado y bazo muy grandes y pancitopenia.",
      "Diagnóstico: ver amastigotes en frotis o biopsia, o PCR.",
      "Cutánea única y pequeña: tratamiento local (calor, frío o antimonial intralesional).",
      "Cutánea múltiple, grande, en cara o articulaciones, o inmunosuprimido: antimonial pentavalente (meglumina 20 mg/kg/día 20 días); alternativas miltefosina oral o anfotericina B.",
      "Mucosa: antimonial 28 días o anfotericina B. Visceral: anfotericina B liposomal."
    ]
  },
  {
    "kind": "card",
    "id": "g-891",
    "title": "Fiebre tifoidea",
    "points": [
      "Salmonella Typhi, por agua o alimentos contaminados.",
      "Fiebre que sube día a día, pulso lento para la fiebre, dolor abdominal, manchas rosadas en tronco, hígado y bazo grandes.",
      "Complicaciones: sangrado y perforación intestinal, sepsis.",
      "Diagnóstico: hemocultivo en las primeras 2 semanas; coprocultivo después.",
      "Tratamiento empírico: fluoroquinolona (o ceftriaxona o azitromicina según resistencias)."
    ]
  },
  {
    "kind": "card",
    "id": "g-892",
    "title": "Leptospirosis",
    "points": [
      "Leptospira, por contacto con agua o tierra contaminada con orina de animales (ratas). Incubación ~10 días.",
      "Fiebre súbita, cefalea, dolor muscular intenso en las pantorrillas y ojos rojos sin secreción (sufusión conjuntival).",
      "Forma grave (Weil): ictericia, insuficiencia renal y sangrados.",
      "Diagnóstico: PCR al inicio; IgM y prueba MAT para confirmar.",
      "Leve: doxiciclina 7 días (amoxicilina en niños pequeños y embarazadas). Grave: hospital con penicilina G o ceftriaxona."
    ]
  },
  {
    "kind": "card",
    "id": "g-919",
    "title": "Espondilodiscitis",
    "points": [
      "Infección del disco y vértebras, por vía sanguínea o por inoculación (cirugía).",
      "Dolor de espalda que empeora de noche, con o sin fiebre. VSG y PCR altas.",
      "Diagnóstico: RM con contraste y biopsia o cultivos (hemocultivos).",
      "Piógena: afecta 2 vértebras contiguas y el disco. Tuberculosa (mal de Pott): torácica, puede afectar vértebras salteadas y dar giba. Brucelosis: lumbar baja, contacto con leche o queso sin pasteurizar.",
      "Tratamiento empírico: cubrir S. aureus resistente y gramnegativos (vancomicina + cefepima o carbapenémico) 6 semanas; se puede pasar a vía oral si está estable.",
      "Cirugía si hay déficit neurológico, sepsis, absceso grande, fracaso del tratamiento o inestabilidad de la columna."
    ]
  },
  {
    "kind": "card",
    "id": "g-939",
    "title": "Exposición al virus de la hepatitis B",
    "points": [
      "Vacunado con anti-HBs >10: no necesita nada.",
      "No vacunado o sin respuesta: inmunoglobulina contra hepatitis B (idealmente en 24 h, máximo 7 días) + vacuna."
    ]
  },
  {
    "kind": "card",
    "id": "g-948",
    "title": "Neurocisticercosis: tratamiento",
    "points": [
      "Si hay convulsiones, primero controlarlas con antiepilépticos.",
      "Antiparasitario solo si hay quistes vivos: 1-2 quistes, albendazol; más de 2, albendazol + praziquantel.",
      "Corticoides junto al antiparasitario para controlar la inflamación al morir los quistes.",
      "Lesiones calcificadas: no dar antiparasitario. Hidrocefalia o quistes ventriculares: cirugía."
    ]
  },
  {
    "kind": "card",
    "id": "g-951",
    "title": "Pistas de algunas infecciones del sistema nervioso",
    "points": [
      "Listeria: meningitis en ancianos, embarazadas o inmunosuprimidos; puede dar romboencefalitis (pares craneales, ataxia, nistagmo). Cubrir con ampicilina.",
      "Meningococo: meningitis con petequias o púrpura que no desaparece al presionar; puede progresar rápido a choque."
    ]
  },
  {
    "kind": "card",
    "id": "g-957",
    "title": "LMP: hallazgos en la imagen",
    "points": [
      "Causada por el virus JC en inmunosupresión grave.",
      "Clínica: hemiparesia, ataxia, alteraciones visuales, diplopía.",
      "RM: lesiones hiperintensas en T2 en la sustancia blanca, sin efecto de masa ni realce."
    ]
  },
  {
    "kind": "card",
    "id": "g-972",
    "title": "Vacuna contra neumococo en adultos",
    "points": [
      "Conjugadas: PCV15, PCV20, PCV21. Polisacárida: PPSV23.",
      "Adultos ≥50 años (o con condiciones de riesgo) que nunca recibieron conjugada: PCV15, PCV20 o PCV21.",
      "Si se usa PCV15, completar con PPSV23 al menos 1 año después. Con PCV20 o PCV21 no hace falta."
    ]
  },
  {
    "kind": "card",
    "id": "g-992",
    "title": "Resistencias bacterianas en el antibiograma",
    "points": [
      "BLEE: resistente a cefalosporinas de 3.ª generación, sensible a carbapenémicos y cefoxitina. Tratamiento: carbapenémico (en leves, piperacilina-tazobactam si es sensible).",
      "AmpC (Enterobacter, Serratia, Citrobacter): resistente también a cefoxitina; evitar cefalosporinas de 3.ª; carbapenémico o cefepima según el caso.",
      "Carbapenemasas (KPC, NDM, OXA-48): resistentes a carbapenémicos; ceftazidima-avibactam, meropenem-vaborbactam, imipenem-relebactam o colistina según sensibilidad.",
      "SAMR (S. aureus resistente a meticilina, gen mecA): vancomicina o daptomicina; linezolid o clindamicina como alternativas.",
      "Enterococo resistente a vancomicina: linezolid o daptomicina."
    ]
  },
  {
    "kind": "card",
    "id": "g-996",
    "title": "Histoplasmosis",
    "points": [
      "Hongo Histoplasma capsulatum que se respira en tierra con excremento de murciélagos o aves (cuevas, gallineros).",
      "La mayoría pasa sin síntomas o con fiebre, tos y dolor torácico; en inmunosuprimidos (VIH) puede diseminarse.",
      "Diagnóstico: cultivo, antígeno en orina o sangre (muy sensible) y granulomas en la biopsia.",
      "Tratamiento: itraconazol en moderadas; anfotericina B en graves o diseminadas."
    ]
  }
];
