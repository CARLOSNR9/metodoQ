"""Convierte content/ultra-resumenes/mir/*.md en datos TS para el módulo MIR.

Formato de cada .md:

    slug: neumologia
    title: Neumología y cirugía torácica
    keys: NEUMOLOGÍA            (especialidades del banco, separadas por coma)
    total: 143                  (preguntas MIR del periodo)
    period: 2016-2026
    ---
    # Título del tema | 1 | 22   (nivel 1-5 y preguntas del tema)
    ## Título de la ficha
    - Punto clave
    - Otro punto

Uso: python3 -I scripts/ultra-resumenes/build_mir.py
"""
import json, os, re, sys, unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SRC = os.path.join(ROOT, 'content', 'ultra-resumenes', 'mir')
OUT = os.path.join(ROOT, 'src', 'data', 'ultra-resumenes', 'mir')
INDEX = os.path.join(ROOT, 'src', 'lib', 'ultra-resumenes', 'mir-content.ts')

def slugify(text):
    text = unicodedata.normalize('NFD', text)
    text = ''.join(c for c in text if not unicodedata.combining(c)).lower()
    return re.sub(r'[^a-z0-9]+', '-', text).strip('-')

def parse(path):
    head, body = open(path, encoding='utf-8').read().split('\n---\n', 1)
    meta = dict(line.split(':', 1) for line in head.strip().split('\n'))
    meta = {k.strip(): v.strip() for k, v in meta.items()}
    slug = meta['slug']
    entries, used, card = [], set(), None
    for raw in body.split('\n'):
        line = raw.rstrip()
        if not line.strip():
            continue
        if line.startswith('# '):
            parts = [p.strip() for p in line[2:].split('|')]
            title, level, preg = parts[0], int(parts[1]), int(parts[2])
            hid = f'mirc-{slug}-t-{slugify(title)}'
            plural = 'pregunta' if preg == 1 else 'preguntas'
            entries.append({'kind': 'heading', 'id': hid, 'title': title, 'level': level,
                            'meta': f"{preg} {plural} MIR {meta.get('period', '')}".strip() if preg else 'Tema puente'})
            card = None
        elif line.startswith('## '):
            title = line[3:].strip()
            base = cid = f'mirc-{slug}-{slugify(title)}'
            n = 2
            while cid in used:
                cid = f'{base}-{n}'; n += 1
            used.add(cid)
            card = {'kind': 'card', 'id': cid, 'title': title, 'points': []}
            entries.append(card)
        elif line.lstrip().startswith('- '):
            if card is None:
                sys.exit(f'{path}: punto sin ficha: {line}')
            card['points'].append(line.lstrip()[2:].strip())
        elif card is not None and card['points'] and raw.startswith('  '):
            card['points'][-1] += ' ' + line.strip()
        else:
            sys.exit(f'{path}: línea no reconocida: {line}')
    for e in entries:
        if e['kind'] == 'card' and not e['points']:
            sys.exit(f'{path}: ficha sin puntos: {e["title"]}')
    return meta, entries

def main():
    index = []
    for name in sorted(os.listdir(SRC)):
        if not name.endswith('.md'):
            continue
        meta, entries = parse(os.path.join(SRC, name))
        slug = meta['slug']
        with open(os.path.join(OUT, f'{slug}.ts'), 'w', encoding='utf-8') as f:
            f.write('import type { UltraEntry } from "@/lib/ultra-resumenes/types";\n\n')
            f.write(f'/** Ultra resumen MIR · {meta["title"]}. Generado desde content/ultra-resumenes/mir/{name}; no editar a mano. */\n')
            f.write(f'export const ENTRIES: UltraEntry[] = {json.dumps(entries, ensure_ascii=False, indent=2)};\n')
        index.append({'slug': slug, 'title': meta['title'], 'keys': [k.strip() for k in meta['keys'].split(',')],
                      'total': int(meta.get('total', 0)), 'period': meta.get('period', ''),
                      'cardCount': sum(1 for e in entries if e['kind'] == 'card'),
                      'topicCount': sum(1 for e in entries if e['kind'] == 'heading')})
    lines = [
        'import type { UltraEntry } from "./types";', '',
        '/**',
        ' * Contenido propio de los ultra resúmenes MIR por especialidad (temas por',
        ' * rentabilidad y fichas). Generado por scripts/ultra-resumenes/build_mir.py.',
        ' */',
        'export type MirUltraContent = {',
        '  slug: string;', '  title: string;',
        '  /** Especialidades del banco (examArea) que entran en esta categoría. */',
        '  keys: string[];',
        '  /** Preguntas MIR del periodo repartidas entre los temas. */',
        '  total: number;', '  period: string;', '  cardCount: number;', '  topicCount: number;',
        '  load: () => Promise<UltraEntry[]>;', '};', '',
        'export const MIR_ULTRA_CONTENT: MirUltraContent[] = [',
    ]
    for i in index:
        fields = ', '.join(f'{k}: {json.dumps(v, ensure_ascii=False)}' for k, v in i.items())
        lines.append(f'  {{ {fields}, load: () => import("@/data/ultra-resumenes/mir/{i["slug"]}").then((m) => m.ENTRIES) }},')
    lines += ['];', '']
    open(INDEX, 'w', encoding='utf-8').write('\n'.join(lines))
    for i in index:
        print(f"{i['slug']}: {i['topicCount']} temas, {i['cardCount']} fichas")

main()
