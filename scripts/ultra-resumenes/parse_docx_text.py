import re, json, sys
src = sys.argv[1]
lines = open(src, encoding='utf-8').read().split('\n')
items = []
for ln in lines:
    m = re.match(r'^(\d+)\.\s+(.*)$', ln)
    if m:
        items.append([int(m.group(1)), m.group(2).strip()])
    elif ln.strip() and items:
        items[-1][1] += '\n' + ln.strip()
print(len(items), file=sys.stderr)
# sanity: sequential numbering
for i,(n,_) in enumerate(items):
    if n != i+1: print('gap', i+1, n, file=sys.stderr); break
json.dump(items, open(sys.argv[2],'w'), ensure_ascii=False)
