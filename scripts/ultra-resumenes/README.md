# Ultra resúmenes generales

Las fichas de `src/data/ultra-resumenes/general/*.ts` se generan desde el
documento Word de fichas (no se versiona en el repo).

```bash
pandoc fichas.docx -t plain --wrap=none -o fichas.txt
python3 -I scripts/ultra-resumenes/parse_docx_text.py fichas.txt items.json
python3 -I scripts/ultra-resumenes/generate_general.py items.json src/data/ultra-resumenes/general index.json
```

`generate_general.py` define qué número de ficha va en cada categoría (y
reparte Medicina interna por especialidad). Si cambian los conteos, actualiza
`cardCount` en `src/lib/ultra-resumenes/general.ts` con los de `index.json`.
Una vez se editen las fichas a mano en los `.ts`, no vuelvas a generarlas.
