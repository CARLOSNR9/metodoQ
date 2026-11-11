"""Convierte content/ultra-resumenes/general/*.md (fichas reescritas) en
src/data/ultra-resumenes/general/<slug>.ts y actualiza cardCount en
src/lib/ultra-resumenes/general.ts.

Formato:
    slug: cardiologia
    ---
    # g-780 | Separador (opcional)
    ## g-756 | Título de la ficha
    - Punto
    - Otro punto

Los ids (g-N) son los de la ficha original y deben conservarse: son la clave
del progreso del estudiante. Si falta alguno de los que había, el script falla.
Uso: python3 -I scripts/ultra-resumenes/build_general.py [slug ...]
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SRC = os.path.join(ROOT, 'content', 'ultra-resumenes', 'general')
OUT = os.path.join(ROOT, 'src', 'data', 'ultra-resumenes', 'general')
INDEX = os.path.join(ROOT, 'src', 'lib', 'ultra-resumenes', 'general.ts')

def existing_ids(path):
    if not os.path.exists(path):
        return set()
    return set(re.findall(r'"id": "([^"]+)"', open(path, encoding='utf-8').read()))

def parse(path):
    head, body = open(path, encoding='utf-8').read().split('\n---\n', 1)
    meta = {k.strip(): v.strip() for k, v in (l.split(':', 1) for l in head.strip().split('\n'))}
    entries, card = [], None
    for raw in body.split('\n'):
        line = raw.rstrip()
        if not line.strip():
            continue
        m = re.match(r'^(#{1,2}) (g-\d+)\s*\|\s*(.+)$', line)
        if m:
            if m.group(1) == '#':
                entries.append({'kind': 'heading', 'id': m.group(2), 'title': m.group(3).strip()})
                card = None
            else:
                card = {'kind': 'card', 'id': m.group(2), 'title': m.group(3).strip(), 'points': []}
                entries.append(card)
        elif line.lstrip().startswith('- ') and card is not None:
            card['points'].append(line.lstrip()[2:].strip())
        else:
            sys.exit(f'{path}: línea no reconocida: {line}')
    return meta, entries

def main():
    wanted = set(sys.argv[1:])
    index = open(INDEX, encoding='utf-8').read()
    for name in sorted(os.listdir(SRC)):
        if not name.endswith('.md'):
            continue
        meta, entries = parse(os.path.join(SRC, name))
        slug = meta['slug']
        if wanted and slug not in wanted:
            continue
        out = os.path.join(OUT, f'{slug}.ts')
        ids = [e['id'] for e in entries]
        dup = {i for i in ids if ids.count(i) > 1}
        if dup:
            sys.exit(f'{slug}: ids repetidos {sorted(dup)}')
        empty = [e['id'] for e in entries if e['kind'] == 'card' and not e['points']]
        if empty:
            sys.exit(f'{slug}: fichas sin puntos {empty}')
        missing = existing_ids(out) - set(ids)
        if missing:
            sys.exit(f'{slug}: faltan ids de la versión anterior {sorted(missing, key=lambda x: int(x[2:]))}')
        with open(out, 'w', encoding='utf-8') as f:
            f.write('import type { UltraEntry } from "@/lib/ultra-resumenes/types";\n\n')
            f.write(f'/** Ultra resumen general · {slug}. Generado desde content/ultra-resumenes/general/{name}; no editar a mano. */\n')
            f.write(f'export const ENTRIES: UltraEntry[] = {json.dumps(entries, ensure_ascii=False, indent=2)};\n')
        count = sum(1 for e in entries if e['kind'] == 'card')
        index, n = re.subn(r'(slug: "%s",[^\n]*?cardCount: )\d+' % re.escape(slug), lambda m: m.group(1) + str(count), index)
        if n != 1:
            sys.exit(f'{slug}: no encontrado en general.ts')
        print(f'{slug}: {count} fichas')
    open(INDEX, 'w', encoding='utf-8').write(index)

main()
