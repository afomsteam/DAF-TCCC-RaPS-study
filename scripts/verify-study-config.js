const vm = require('vm');
const fs = require('fs');
const code = fs.readFileSync('www/tiers.js','utf8');
const ctx = {window:{}};
vm.createContext(ctx); vm.runInContext(code, ctx);
const A = ctx.window.TCCC_TIERS;
const expected = {
  '1': ['TTA',28,19],
  '2': ['TQ',15,11],
  '3': ['NPA',13,7],
  '4': ['NDC',15,12],
  '5': ['BLOOD',26,11]
};
let ok = true;
for (const [id,[shortName,total,critical]] of Object.entries(expected)) {
  const a=A[id];
  const items=a?.sections?.flatMap(s=>s.items)||[];
  const c=items.filter(i=>i.critical).length;
  if(!a || a.shortName!==shortName || items.length!==total || c!==critical){
    console.error(`FAIL ${id}: expected ${shortName} ${total}/${critical}; got ${a?.shortName} ${items.length}/${c}`);ok=false;
  } else console.log(`PASS ${shortName}: ${total} items, ${critical} critical`);
}
if(Object.keys(A).length!==5){console.error(`FAIL expected 5 assessments, got ${Object.keys(A).length}`);ok=false;}
process.exit(ok?0:1);
