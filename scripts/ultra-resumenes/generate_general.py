import json, re, sys, os
items = dict((n, t) for n, t in json.load(open(sys.argv[1])))
outdir = sys.argv[2]
os.makedirs(outdir, exist_ok=True)

def rng(a, b): return list(range(a, b + 1))

MI = {
 "reumatologia": [747,749,750,751]+rng(761,775)+[826,827,936],
 "nefrologia": rng(776,799)+[812,828]+rng(905,908)+[952,959,962],
 "cardiologia": [756,759,800,813,818,819]+rng(843,853)+rng(872,881)+[899,900,902,904,921,922,937,938,943,944,945,956]+rng(973,976)+rng(984,986),
 "endocrinologia": rng(801,806)+[815,817]+rng(829,832)+[920,953,954,955,961,963,966,967]+rng(977,983)+rng(987,991)+[993],
 "neumologia": rng(807,811)+rng(855,869)+[995,997,998],
 "gastroenterologia": [748,753,755,816]+rng(820,825)+rng(893,897)+[941],
 "infectologia": [752,754,757,760,814]+rng(833,842)+[854,870,871]+rng(883,892)+[919,939,948,951,957,972,992,996],
 "hematologia": [746,882,898,901,903]+rng(909,918)+rng(924,929)+rng(931,935)+[942,946,947,949,950,958,960]+rng(968,971),
 "otros-interna": [758,923,930,940,964,965,994],
}
assigned = sorted(sum(MI.values(), []))
expected = [n for n in rng(746,998) if n not in (780,785)]
missing = sorted(set(expected)-set(assigned)); dup = sorted(n for n in set(assigned) if assigned.count(n)>1)
assert not missing and not dup, (missing, dup)

# slug, title, group, level, numbers(or MI key), skip-heading
CATS = [
 ("cardiologia","Cardiología y vascular","Medicina interna",1,"mi"),
 ("neumologia","Neumología","Medicina interna",1,"mi"),
 ("nefrologia","Nefrología y medio interno","Medicina interna",1,"mi"),
 ("endocrinologia","Endocrinología y metabolismo","Medicina interna",1,"mi"),
 ("gastroenterologia","Gastroenterología y hepatología","Medicina interna",1,"mi"),
 ("infectologia","Infectología y medicina tropical","Medicina interna",1,"mi"),
 ("hematologia","Hematología y coagulación","Medicina interna",1,"mi"),
 ("reumatologia","Reumatología","Medicina interna",1,"mi"),
 ("otros-interna","Otros temas de medicina interna","Medicina interna",2,"mi"),
 ("pediatria","Pediatría","Áreas troncales",1,rng(388,517)),
 ("ginecologia-obstetricia","Ginecología y obstetricia","Áreas troncales",1,rng(267,386)),
 ("cirugia","Cirugía general","Áreas troncales",1,rng(600,673)),
 ("urgencias","Urgencias","Áreas troncales",1,rng(675,744)),
 ("neurologia","Neurología y neurocirugía","Especialidades",2,rng(519,598)),
 ("psiquiatria","Psiquiatría","Especialidades",2,rng(241,265)),
 ("ortopedia","Ortopedia y traumatología","Especialidades",2,rng(166,239)),
 ("epidemiologia","Epidemiología y salud pública","Especialidades",2,rng(1018,1030)),
 ("dermatologia","Dermatología","Especialidades menores",3,rng(11,57)),
 ("otorrinolaringologia","Otorrinolaringología","Especialidades menores",3,rng(72,103)),
 ("oftalmologia","Oftalmología","Especialidades menores",3,rng(105,140)),
 ("urologia","Urología","Especialidades menores",3,rng(142,164)),
 ("ciencias-basicas","Ciencias básicas","Especialidades menores",3,rng(1000,1016)),
 ("cirugia-plastica","Cirugía plástica","Especialidades menores",4,rng(59,70)),
 ("medicina-deporte","Medicina del deporte","Especialidades menores",4,rng(2,9)),
]
# check coverage of all items except category headings
heads = {1,10,58,71,104,141,165,240,266,387,518,599,674,745,999,1017}
allnums = set()
for c in CATS:
    nums = MI[c[0]] if c[4]=="mi" else c[4]
    allnums |= set(nums)
allnums |= {780,785}
miss = sorted(set(range(1,1031)) - allnums - heads)
assert not miss, miss

STOP = set("DE LA EL EN Y POR CON SIN DEL LOS LAS AL SU NO O A E U MAS MÁS SI ES UN UNA QUE SE TTO VS PARA".split())
KEEP = set("""VIH TBC EPOC NAC HTA ERGE ACV IAM SCA TEP TVP LES AR AIJ PHS ERC CDI QT QTC ECG EKG DM ADA AHA ESC ACC MRC DLCO EPID PML SAF CID TCE UCI VHB VHA VHC VHE VPH HPV TFG HBPM AINES AINE IBP ITU EVDA PTH TSH LH FSH HCG MET METS PRISM SDD ASA FEVI NYHA BNP DILI MASLD IRS ATP TRALI TACO CPRE LLC LMC LMA LLA SIDA SNC EULAR ACR SLEDAI CURB PESI PCV BLEE KPC MRSA RCP ABCDE FAST ATLS GCS TDAH TEA TOC TAB TEPT ISRS IMAO RN RNPT HELLP RPM DPPNI IVE ITS EPI TAR TARV UDEA ARNI IECA IECAS ARA SGLT2 GLP1 GLP-1 DPP4 HBA1C LDL HDL TG PCR VSG ANA ANCA ANCAS FR CCP IGA IGG IGM IGE CMV VEB VSR VVZ HSV EGB SGB SDRA SIRS QSOFA SOFA PAS PAD PAM FC FR SAT TAC RMN RM ECO OMS ODS EAP IVU HPB CA HB VCM ADE RDW PTI PTT TTP SHU INR AVC TIA HSA HIC PIC LCR EEG EMG ELA EM SGB""".split())

def fix_word(w):
    core = re.sub(r'[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9-]', '', w)
    up = core.upper()
    if core and core == up and re.search(r'[A-ZÁÉÍÓÚÑ]', core):
        if up in KEEP or (len(core) <= 3 and up not in STOP and not re.search(r'[ÁÉÍÓÚ]', core) and (len(core) > 1 or up not in ('Y', 'O'))):
            return w
        return w.lower()
    return w

def sentence_case(title):
    letters = re.sub(r'[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ]', '', title)
    if not letters: return title
    upper_ratio = sum(1 for ch in letters if ch.isupper()) / len(letters)
    t = ' '.join(fix_word(w) for w in title.split(' '))
    for a, b in TYPOS.items():
        t = re.sub(r'\b' + a + r'\b', b, t, flags=re.I)
    t = re.sub(r'([a-záéíóúñ]{3,})([A-ZÁÉÍÓÚÑ])$', lambda m: m.group(1) + m.group(2).lower(), t)
    if t.count('(') > t.count(')'):
        t = t[:t.rfind('(')].rstrip(' ,;:-')
    t = re.sub(r'\b(hepatitis|vitamina|tipo|grupo|clase|estadio)\s+([a-e])\b', lambda m: m.group(1) + ' ' + m.group(2).upper(), t, flags=re.I)
    t = re.sub(r'\b([a-e])\s+\((VH[A-E])\)', lambda m: m.group(1).upper() + ' (' + m.group(2) + ')', t)
    t = t.strip(' ,;:-')
    # first alphabetical char uppercase
    for i, ch in enumerate(t):
        if ch.isalpha():
            t = t[:i] + ch.upper() + t[i+1:]
            break
    return t

def clean(s):
    s = s.replace(' ', ' ').replace('\\', '/')
    s = re.sub(r'[ \t]+', ' ', s)
    return s.strip()

TYPOS = {"Trastoros": "trastornos", "Trastono": "trastorno", "Gomerulonefritis": "glomerulonefritis", "Firenona": "finerenona", "Sindrome": "síndrome", "nefrotico": "nefrótico", "nefritico": "nefrítico", "cronica": "crónica", "cronico": "crónico", "diabetica": "diabética", "dialitica": "dialítica", "Lesion": "lesión", "rapidamente": "rápidamente", "compensacion": "compensación", "Nefropatias": "nefropatías", "pediatrico": "pediátrico", "idiopatica": "idiopática", "cardiopatias": "cardiopatías", "hipertrofica": "hipertrófica", "cardiaca": "cardiaca", "Prevencion": "prevención", "pretermito": "pretérmino", "Perdida": "pérdida", "UROLOGOGIA": "urología", "OFTALMOLOGIA": "oftalmología", "rabdomiolisis": "rabdomiólisis", "fibrosis quistica": "fibrosis quística"}
ART = re.compile(r'^(el|la|los|las|un|una)\s+', re.I)

def split_title(text):
    t = text.lstrip('.-*• ').strip()
    t = re.sub(r'^\((?:[^()]*)\)\s*', lambda m: m.group(0), t)
    m = re.match(r'^(.{3,80}?)\s*:(?!\d)\s*(.*)$', t, re.S)
    if m and '. ' not in m.group(1) and m.group(2).strip():
        return m.group(1).strip(' -*:'), m.group(2).strip(), True
    m = re.match(r'^(.{3,80}?)\s*[,.](?!\d)\s+(.*)$', t, re.S)
    if m:
        return ART.sub('', m.group(1)).strip(' -*'), m.group(2).strip(), True
    words = t.split()
    return ' '.join(words[:8]).rstrip(',.;:') + '…', t, False

SPLITS = [
    r'\n+',
    r'\*{2,}',
    r'\s*;\s*-\s*',
    r'(?<=[.;:)])\s*-\s*(?=[A-Za-zÁÉÍÓÚÑáéíóúñ(¿>])',
    r'\s+-\s*(?=[A-ZÁÉÍÓÚÑ(])',
    r'\s*//\s*',
    r'(?<=[.;,:)])\s+(?=\d{1,2}\s*[.)]\s*[A-Za-zÁÉÍÓÚÑáéíóúñ(])',
]
SENT = r'(?<=[a-záéíóúñ0-9)%])\.\s+(?=[A-ZÁÉÍÓÚÑ¿(])'

def to_points(body):
    parts = [body]
    for rx in SPLITS:
        parts = [p for part in parts for p in re.split(rx, part)]
    out = []
    for p in parts:
        sub = re.split(SENT, p) if len(p) > 280 else [p]
        for q in sub:
            q = q.strip(' \t-*•,;')
            q = re.sub(r'\s+', ' ', q)
            if len(q) < 2: continue
            if q[0].islower(): q = q[0].upper() + q[1:]
            out.append(q)
    return out

def entries_for(nums):
    res = []
    for n in nums:
        raw = clean(items[n])
        if len(raw.strip(' .-*•')) < 3:
            continue  # elemento vacío (solo imagen en el documento)
        if n in (780, 785) or (len(raw) < 50 and raw.rstrip().endswith(':')):
            res.append({"kind": "heading", "id": f"g-{n}", "title": sentence_case(raw.rstrip(': '))})
            continue
        title, body, _ = split_title(raw)
        if len(title.strip(' ….')) < 2:
            title = ' '.join(raw.lstrip('.-*• ').split()[:8]).rstrip(',.;:') + '…'
        res.append({"kind": "card", "id": f"g-{n}", "title": sentence_case(title), "points": to_points(body)})
    return res

# Nephrology: keep the two headings at their positions


index = []
for slug, title, group, level, nums in CATS:
    nums = MI[slug] if nums == "mi" else nums
    entries = entries_for(nums)
    cards = sum(1 for e in entries if e["kind"] == "card")
    const = "ENTRIES"
    body = json.dumps(entries, ensure_ascii=False, indent=2)
    with open(os.path.join(outdir, f"{slug}.ts"), "w", encoding="utf-8") as f:
        f.write('import type { UltraEntry } from "@/lib/ultra-resumenes/types";\n\n')
        f.write(f'/** Ultra resumen general · {title}. Generado desde el documento de fichas de Método Q. */\n')
        f.write(f'export const {const}: UltraEntry[] = {body};\n')
    index.append({"slug": slug, "title": title, "group": group, "level": level, "cardCount": cards})
json.dump(index, open(os.path.join(sys.argv[3]), "w"), ensure_ascii=False, indent=2)
print(sum(i["cardCount"] for i in index), "cards")
