// Valida os problemas e audita vieses e cobertura (UBERTRIZ, Parte XII — T12 Metacobertura).
// Uso: node ferramentas/validar.js            (exige as metas globais)
//      node ferramentas/validar.js --parcial  (só relata as metas; útil enquanto os lotes são escritos)
const fs = require("fs");
const path = require("path");
const dir = path.resolve(__dirname, "../dados");
global.window = {};
require(path.join(dir, "ubertriz.js"));
require(path.join(dir, "heuristicas.js"));
fs.readdirSync(dir).filter(f => /^problemas-h\d\d\.js$/.test(f)).sort().forEach(f => require(path.join(dir, f)));
const { C, U, I, PF, L, DOM, ST, sevDe } = window.UBZ;
const P = window.PROBLEMAS;
const HX = new Set(window.HEUR.flatMap(s => s.itens.map(i => i[0])));
const parcial = process.argv.includes("--parcial");
const erros = [], metas = [];
const pct = (n, d) => (100 * n / d).toFixed(1) + "%";
const conta = arr => arr.reduce((m, k) => (m[k] = (m[k] || 0) + 1, m), {});
const top = (m, n = 5) => Object.entries(m).sort((a, b) => b[1] - a[1]).slice(0, n).map(([k, v]) => `${k}=${v}`).join(" ");

// ---------- formato ----------
const obrig = ["id","h","t","sym","ten","sol","c","u","e","i","m","freq","imp","pers","sev","pf","hx","dom","ag","alt","esc","st","sub","ops","c2","cf","lim","ide","ref","conf"];
// “(?![a-zà-ú])” no lugar de \b, que não reconhece letras acentuadas
const proibidas = /a pessoa (erra|esquece|não lê|se confunde)(?![a-zà-ú])|usuário (burro|leigo demais|não lê)(?![a-zà-ú])|culpa do usuário/i;
const ids = new Set(), titulos = new Set();
for (const p of P) {
  const e = m => erros.push(`#${p.id} ${m}`);
  obrig.forEach(k => (p[k] === undefined || p[k] === "") && e(`campo vazio: ${k}`));
  if (ids.has(p.id)) e("id repetido"); ids.add(p.id);
  if (titulos.has(p.t)) e("título repetido"); titulos.add(p.t);
  if (!C[p.c]) e("c inválido " + p.c);
  if (!U[p.u]) e("u inválido " + p.u);
  if (!I[p.i]) e("i inválido " + p.i);
  if (!PF[p.pf]) e("pf inválido " + p.pf);
  if (!DOM[p.dom]) e("dom inválido " + p.dom);
  if (!ST[p.st]) e("st inválido " + p.st);
  if (!["micro","meso","macro"].includes(p.e)) e("escala inválida");
  if (!["alta","média","baixa"].includes(p.conf)) e("conf inválida " + p.conf);
  if (p.sev !== sevDe(p.freq, p.imp, p.pers)) e("gravidade não bate com a rubrica");
  [p.freq, p.imp, p.pers].forEach(v => (v < 1 || v > 3) && e("freq/imp/pers fora de 1–3"));
  if (p.hx.length < 4 || p.hx.length > 9) e(`hx com ${p.hx.length} itens (esperado 4–9)`);
  p.hx.forEach(h => !HX.has(h) && e("heurística inexistente " + h));
  if (p.hx.includes("NI" + p.h)) e("hx repete a heurística Nielsen de referência NI" + p.h);
  if (p.ops.length < 2 || p.ops.length > 3) e("ops deve ter 2–3 operadores");
  p.ops.forEach(u => (!U[u] || u === p.u) && e("op inválido ou repetido " + u));
  if (!C[p.c2.c]) e("c2 inválido " + p.c2.c);
  if (!p.c2.t || !p.c2.mit) e("c2 incompleto");
  if (!L[p.lim.l] || !p.lim.t) e("limite inválido");
  ["micro","meso","macro"].forEach(k => !p.esc[k] && e("esc sem " + k));
  [...p.ide.mais, ...p.ide.menos].forEach(k => !I[k] && e("idealidade inválida " + k));
  if (p.ide.mais.some(k => p.ide.menos.includes(k))) e("mesma dimensão em ganho e perda");
  if (proibidas.test(p.sym + " " + p.ten)) e("linguagem que culpa a pessoa");
  // qualidade: campos de análise precisam dizer algo específico
  const curtos = { alt: p.alt, sub: p.sub, cf: p.cf, ref: p.ref, "c2.t": p.c2.t, "c2.mit": p.c2.mit, "lim.t": p.lim.t, "esc.micro": p.esc.micro, "esc.meso": p.esc.meso, "esc.macro": p.esc.macro };
  Object.entries(curtos).forEach(([k, v]) => v && v.length < 22 && e(`texto raso em ${k}: “${v}”`));
  if (/^(Padrão|Política|Guia|Opção|Chips|Prévia|Botão|Fluxo|Aviso)\.?$/i.test((p.esc.meso || "").trim())) e("esc.meso genérico");
  if (/^Estaria errada se (ninguém|todos|as pessoas não)\b/i.test(p.ref) && p.ref.length < 60) e("refutação genérica: " + p.ref);
  if (/^(Regra|Guia|Padrão|Política|Componente|Glossário)[^,;:]{0,20}\.$/i.test(p.esc.macro || "") || /^(Regra|Guia|Padrão)[^,;:]{0,20}\.$/i.test(p.esc.meso || "")) e("escala com texto genérico");
}

// ---------- metas de viés ----------
const N = P.length;
const meta = (ok, nome, det) => metas.push({ ok, nome, det });
const cC = conta(P.map(p => p.c)), cU = conta(P.map(p => p.u));
const fam = u => U[u][0];
meta(Math.max(...Object.values(cC)) <= N * 0.10, "V1 nenhuma contradição > 10%", top(cC));
meta(Math.max(...Object.values(cU)) <= N * 0.08, "V1 nenhum metaoperador > 8%", top(cU));
const usadosC = new Set(P.flatMap(p => [p.c, p.c2.c]));
const usadosU = new Set(P.flatMap(p => [p.u, ...p.ops]));
meta(usadosC.size === 36, "V1 todas as 36 contradições", `faltam: ${Object.keys(C).filter(k => !usadosC.has(k)).join(" ") || "—"}`);
meta(usadosU.size === 36, "V1 todos os 36 metaoperadores", `faltam: ${Object.keys(U).filter(k => !usadosU.has(k)).join(" ") || "—"}`);
const famTodos = conta(P.flatMap(p => [p.u, ...p.ops].map(fam)));
meta(Math.min(...Object.values(famTodos)) >= 40 && Object.keys(famTodos).length === 12, "V1 cada família ≥ 40 usos (principal + combinados)", top(famTodos, 12));
// A lente principal é distribuída entre Nielsen e os outros conjuntos presentes
// no diagnóstico; não se audita mais por lotes artificiais de Nielsen.
const principal = p => p.id % 10 === 0 ? "NI" + p.h : p.hx[(p.id - 1) % p.hx.length];
const cPrincipal = conta(P.map(p => principal(p).replace(/[0-9.]+$/, "")));
meta(window.HEUR.every(s => cPrincipal[s.id] > 0), "V0 todos os 12 conjuntos aparecem como diagnóstico principal", JSON.stringify(cPrincipal));
let piorH = "", piorV = 0;
for (const set of window.HEUR) {
  const ps = P.filter(p => principal(p).startsWith(set.id)); if (!ps.length) continue;
  const m = conta(ps.map(p => fam(p.u))); const [k, v] = Object.entries(m).sort((a, b) => b[1] - a[1])[0];
  if (v / ps.length > piorV) { piorV = v / ps.length; piorH = `${set.id}→${k} ${v}/${ps.length}`; }
}
meta(piorV <= 0.40, "V2 conjunto heurístico principal não decide a família (≤ 40%)", "pior: " + piorH);
const cE = conta(P.map(p => p.e));
meta((cE.macro || 0) >= N * 0.20 && (cE.micro || 0) <= N * 0.45, "V3 escalas: macro ≥ 20%, micro ≤ 45%", JSON.stringify(cE));
meta(true, "V4 gravidade pela rubrica", JSON.stringify(conta(P.map(p => p.sev))));
const cST = conta(P.map(p => p.st));
meta((cST.sub || 0) >= N * 0.25, "V5 soluções subtrativas ≥ 25%", JSON.stringify(cST));
const cD = conta(P.map(p => p.dom));
meta(Math.max(...Object.values(cD)) <= Math.max(N * 0.20, 1) && (parcial || Object.keys(DOM).every(k => (cD[k] || 0) >= 25)), "V6 domínios: nenhum > 20%, todos ≥ 25", JSON.stringify(cD));
const nVul = P.filter(p => p.vul).length;
meta(nVul >= N * 0.20, "V7 público vulnerável explícito ≥ 20%", `${nVul} (${pct(nVul, N)}) — ${top(conta(P.filter(p => p.vul).map(p => p.vul)), 8)}`);
const nMenos = P.filter(p => p.ide.menos.length).length;
meta(nMenos >= N * 0.60, "V8 custos explícitos (ide−) ≥ 60%", `${nMenos} (${pct(nMenos, N)})`);
const nConf = P.filter(p => p.conf !== "alta").length;
meta(nConf >= N * 0.15, "V9 confiança não-alta ≥ 15%", `${nConf} (${pct(nConf, N)})`);
const cobH = conta(P.flatMap(p => ["NI" + p.h, ...p.hx]));
const semH = [...HX].filter(h => !cobH[h]);
meta(parcial || semH.length === 0, "Cobertura: todo item de heurística com ≥ 1 problema", semH.length ? "sem problemas: " + semH.join(" ") : "completa");

// ---------- relatório ----------
console.log(`\n${N} problemas · ${erros.length} erros de formato`);
erros.slice(0, process.argv.includes("--todos") ? 1e9 : 40).forEach(e => console.log("  ✗ " + e));
if (erros.length > 40) console.log(`  … e mais ${erros.length - 40}`);
console.log("\nMetas de viés e cobertura" + (parcial ? " (modo parcial: só relato)" : ""));
metas.forEach(m => console.log(`  ${m.ok ? "✓" : "✗"} ${m.nome} — ${m.det}`));
const falhou = erros.length || (!parcial && metas.some(m => !m.ok));
process.exit(falhou ? 1 : 0);
