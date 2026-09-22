# Clínica Ubertriz de Usabilidade

Ferramenta de ensino de Interação Humano-Computador com **500 problemas de usabilidade**, diagnosticados por **12 conjuntos de heurísticas** e resolvidos com a **UBERTRIZ**.

Acesse: https://gersonklein.github.io/clinica-ubertriz/ — ou abra `index.html` em qualquer navegador (a pasta `dados/` precisa estar junto).

## O que cada problema traz

A solução aparece ao abrir o problema; o raciocínio completo fica oculto até ser pedido, em sete passos:

1. **Diagnóstico** — heurísticas violadas em vários conjuntos (Nielsen, Bastien & Scapin, Shneiderman, Norman, Tognazzini, Gerhardt-Powals, ISO 9241-110, WCAG 2.2, Bertini, Leis de UX, dark patterns e diretrizes Humano-IA).
2. **Formulação** — forma do problema (P01–P16), tensão e uma formulação alternativa (“e se o problema for outro?”).
3. **Contradições** — a principal (C01–C36) e a **de segunda ordem**, que a própria solução pode criar, com mitigação.
4. **Transformação** — metaoperador principal e combinados (U01–U36).
5. **Três escalas** — soluções micro, meso e macro, e sempre uma alternativa por subtração.
6. **Contrafactual e limites** — o que acontece sem intervenção e o que limita a solução (L01–L08).
7. **Verificação** — ganhos e perdas no vetor de idealidade (I01–I12), quem ganha e quem perde, métrica, gravidade pela rubrica, critério de refutação e grau de confiança.

## Abas

- **Problemas** — busca e filtros por conjunto e item de heurística, família de metaoperador, escala, domínio, gravidade e público vulnerável.
- **Hipermatriz** — mapa de calor contradições × famílias de metaoperadores, com as regiões não exploradas, a **auditoria de vieses** calculada ao vivo e o vetor de idealidade.
- **Heurísticas** — os 12 conjuntos, com fonte, itens e quantos problemas cada um cobre.
- **Método** — os sete passos com as tabelas completas.
- **Treino** — três etapas: heurística violada (aceita qualquer item correto do conjunto escolhido), família de metaoperadores e contradição de segunda ordem.

## Auditoria de vieses

`node ferramentas/validar.js` verifica o formato dos 500 casos e as metas contra vieses:

| Meta | O que evita |
|---|---|
| Nenhuma contradição > 10% e nenhum metaoperador > 8%; todos os 36 de cada usados | Concentração em poucos códigos |
| Nenhuma família > 40% dentro de uma heurística | A heurística decidir o operador |
| Macro ≥ 20% e micro ≤ 45% | Resolver tudo só na tela |
| Gravidade = impacto×2 + frequência + persistência | Gravidade por impressão |
| Soluções subtrativas ≥ 25% | Viés aditivo |
| Nenhum domínio > 20%, todos ≥ 25 casos | Viés de domínio (e-commerce) |
| Público vulnerável explícito ≥ 20% | “Usuário padrão” jovem e conectado |
| Custos explícitos ≥ 60% | Soluções “gratuitas” |
| Confiança média/baixa ≥ 15%, com refutação em todos | Viés de confirmação do autor |
| Todo item das 12 heurísticas com ao menos um caso | Cobertura incompleta |

As análises são propostas para estudo, não verdades: discuta, refute e melhore.

## Arquivos

- `index.html` — a interface.
- `dados/ubertriz.js` — catálogos da UBERTRIZ (C, U, I, P, L, escalas, domínios).
- `dados/heuristicas.js` — os 12 conjuntos de heurísticas.
- `dados/problemas-h01.js` … `h10.js` — os 500 problemas (50 por heurística de Nielsen).
- `ferramentas/validar.js` — validação e auditoria de vieses (Node.js).
- `conversa_TRIZ_SUPERTRIZ_UBERTRIZ_completa.md` — texto-base da TRIZ, SUPERTRIZ e UBERTRIZ.
