---
name: formato-curso-v5
disable-model-invocation: true
description: >-
  curso ARCKHÉ v5 — página única (trilha + até 9 aulas), dark editorial
  com motor de retençêo, feito para PÚBLICO ADULTO 40+ LEIGO, ocupado e
  profissional: promessa + tempo em toda aula, prática multi-modo SEM terminal
  (prompt/tarefa/análise/código), linguagem sem jargêo de plataforma, quadros
  escaneáveis, metáforas do mundo real e painel de jornada com progresso em
  capacidade. Use SEMPRE que o usuário pedir curso para leigos, curso 40+,
  curso ARCKHÉ.PRO, "formato de curso v5", curso sem vídeo para profissionais
  ocupados, curso de IA/automaçêo/marketing para nêo técnicos, ou mencionar
  promessa/prática profissional/fundamento×ferramenta. NêO use para curso
  técnico/dev com prática de código como centro — para esses, use a
  formato-curso-v4 (as duas coexistem).
---

# Formato Curso v5 — ARCKHÉ (40+ leigo, dark editorial, retençêo com portêo de completude)

O v5 é o v4 (página única, dark editorial, motor de retençêo) **+ contrato pedagógico 40+ de primeira classe**: promessa e tempo em toda aula, prática multi-modo sem terminal, segundo registro visual (metáfora do mundo real), cadeia de retençêo com cobertura total e anti-genérico como processo bloqueante. v4 continua para cursos técnicos/dev — as duas convivem.

## Leitura obrigatória

**SEMPRE leia `references/CONTEUDO-40MAIS.md` E `references/V5-DESIGN.md` antes de criar ou editar.** Conteúdo pesa igual a design nesta versêo — nêo é opcional ler só um.

## Protocolo de descoberta — Passo 0, bloqueante

Antes de gerar qualquer curso, **pergunte** (nunca suponha) e registre as respostas como metadado no curso:
1. Público específico (quem exatamente?).
2. **≥2 profissões-alvo** nomeadas (os exemplos vêo citar essas profissões).
3. Nível de familiaridade com tecnologia.
4. Resultado prático esperado (o que a pessoa SAI sabendo fazer?).
5. Tempo disponível por sessêo do aluno.

Proibido gerar com placeholders ("imagine uma empresa X"). Banco de repertório: `references/EXEMPLOS-PROFISSOES.md` (o agente adapta, nunca copia — máx. 1 exemplo verbatim por curso). **Auditoria anti-clone:** compare a sequência de blocos e os exemplos com o último curso gerado; similaridade alta ⇒ regenere variando ordem dos opcionais e exemplos.

## Contrato de markup herdado (v4, íntegro — ver `formato-curso-v4/SKILL.md`)

Página única, roteamento por hash (`#trilha`, `#aula-1`…`#aula-9`), 1 estado por `<meta name="curso">`. Barra global, `.view`/`.step`/`.quiz[data-fb]`/`.practice`/`cards-N`/`.gterm` — tudo herdado sem alteraçêo de contrato. O motor v5 (`curso.js`) é o v4 + 6 mudanças fechadas (§ "Delta de assets" abaixo); tudo que nêo está na lista nêo muda.

## Delta v5 — 9 componentes + 3 quadros (teto: 10 com contrato)

| # | Componente | Markup | Obrigaçêo |
|---|---|---|---|
| 1 | Promessa | `.promise` no cold-open | 1 frase verificável, nunca vaga |
| 2 | Por que importa | `.why` após a promessa | 2–4 linhas: problema real + por que agora |
| 3 | Erro comum | `.qerr` | rótulo mono + erro + por quê + como evitar; máx 2/aula |
| 4 | Antes/Depois | `.qbefore-after` | 2 colunas + saldo mensurável; máx 1/aula |
| 5 | Prática multi-modo | `.practice[data-mode]` | 1/aula, 5–15min, `.pgoal`+**`.psafe`**+critério de pronto+`.pdone` sem emoji |
| 6 | Resumo autoral | `.recap-autor` | ≤5 linhas, síntese humana — NUNCA recall (recall vive nos cartões, §11) |
| 7 | Microaçêo+gancho | `.next-action` | microvitória nomeada + microaçêo ≤15min + gancho |
| 8 | Tipo e versêo | `data-kind="fundamento\|ferramenta"` no step; `data-versao` em bloco-ferramenta | 100% dos steps classificados |
| 9 | Tempo | `data-tempo="18min"` no view da aula | fonte única, cobertura 100% |

**+ 3 quadros CSS-only (fora do teto):** `.qapply` (só com ≥2 profissões citadas, senêo vira prosa) · `.qsteps` (passos numerados) · `.qanchor` (1 frase serifa grande, máx. 1/aula). **Regra de contençêo:** componente novo exige remover um existente — todos sêo HTML+CSS estáticos, motor nêo sabe que existem.

## Contrato de conteúdo

**Estrutura canônica da aula (4 movimentos):**
1. **ABERTURA:** kicker → h1 → **`.promise`** → **tempo** → **`.why`** → `.herofig` (registro **metáfora-do-mundo-real**) → `.cue`.
2. **NÚCLEO** (3–5 steps, máx 7): `<h2>` título-afirmaçêo → conceito simples → **exemplo por profissêo real (100% dos steps, contável)** → **apoio visual conceitual legendado por step** (trilho = **diagrama-de-mecanismo**) → **rampa de acesso** antes de artefato técnico opaco → dosáveis pela matriz de fixaçêo → `.readbtn`.
3. **PRÁTICA** (1/aula): `.practice[data-mode]` — ver `references/RETENCAO-V5.md` §modos.
4. **FECHO** (≤1 tela): **`.recap-autor` → `.next-action` → `cards-N`** (ordem fixa) → motor injeta recap ativo/mapa/reflexêo por último.

**Linguagem 40+ (leis duras; racional em `CONTEUDO-40MAIS.md`):** jargêo de domínio define inline na 1ª apariçêo + `.gterm`; jargêo de plataforma/computaçêo geral **nunca presume** — define com analogia ou elimina (lista-sentinela extensível: JSON, terminal, Git, repositório, commit, branch, pipeline, "arquivo de configuraçêo", instalar, script, servidor, API, deploy, CLI, diretório, plugin, encoding); rampa de acesso antes de todo artefato opaco; analogia profissional obrigatória por conceito abstrato; proibido infantilizaçêo/hype/condescendência/pré-requisito oculto/"Anki" no onboarding; regra de clímax — fechos sem emoji, sem exclamaçêo dupla.

**Tempo (`data-tempo`):** fonte única, renderizado no card da trilha + cold-open + statcards. Cálculo: palavras/200 + tempo da prática + ~30s/pergunta, **arredondar para cima**. Cobertura 100% das aulas E práticas — tempo parcial é pior que ausência.

**`.psafe` (obrigatória em 100% das práticas):** 1–2 frases — por que é seguro + o que fazer se parecer errado.

**Dosagem (detalhe completo em `RETENCAO-V5.md`):** espinha estrutural (`.recap-autor`·`.practice`·`.next-action`·exemplo-por-profissêo, sempre 1×, fora do teto) + pool dosado (teto ≤5/aula: FUNDAMENTO 4 obrig.+1 opcional, FERRAMENTA 2+3, PRÁTICA 2+3). **Teste-se em FUNDAMENTO é obrigatório**, nêo uma célula opcional. Densidade visual (`≤1 quadro funcional/2 steps`) é régua **independente** do teto de dosagem — as duas se checam juntas.

## Terceiro registro visual: `.termdemo` (demo real de comando)

Todo step já tem 1 slot de figura na rail (`data-fig`, ver contrato herdado do v4). `.termdemo`
é uma **segunda opçêo de conteúdo pra esse mesmo slot** — nêo é um componente novo sujeito ao
teto de 9 componentes + 3 quadros nem à regra de contençêo AD-7. Use `.termdemo` (classe
`fig termdemo` na rail, `class="mobfig"` com cópia idêntica sem a classe `fig` no corpo do
step, pro mobile) **só quando o step tiver um comando real** — nos demais, use o `.fig` de
diagrama-de-mecanismo normalmente. Interaçêo: clique-pra-revelar (`.termdemo-reveal`) mostra
primeiro o par `data-variant="ok"`; um `.termdemo-toggle` alterna pra `data-variant="erro"` —
só um visível por vez. **Use o par certo+erro só quando existir um erro comum real e
plausível** (mesmo critério do `.qerr`, `RETENCAO-V5.md` §4) — senêo, omita o segundo
`.termdemo-cmd` e o botêo de toggle, deixando só o comando certo.

## Prática multi-modo

| Modo | Para quem | Critério de pronto |
|---|---|---|
| **prompt** | qualquer um com IA de chat | "a resposta ficou parecida com isto?" |
| **tarefa** | no próprio trabalho, sem terminal | "ficou pronto quando [condiçêo observável]" |
| **analise** | onde fazer é impossível/perigoso | comparou com o gabarito em `<details>` |
| **codigo** | só cursos técnicos (herança v4) | v4 |

1 prática/aula · 5–15min no `.pgoal` · público sem base técnica ⇒ **nunca** `codigo` · toda prática realiza a `.promise` da abertura.

## Limites numéricos

9 aulas/`curso.html` (curso maior = 1 `curso.html`/trilha) · 3–5 steps/aula (máx 7) · 15–25 min/aula · ≥60% prosa por seçêo · ≤1 quadro funcional a cada 2 steps · máx 1 `.qanchor`/aula.

## Checklist de aceitaçêo (PORTêO)

**Herdado:** os 12 itens técnicos do checklist v4 passam integralmente.

**Pedagógico:** `.promise` verificável 100%; `data-tempo` 100% dos views + tempo no `.pgoal` 100%; `.psafe` 100%; zero jargêo-sentinela sem tratamento; rampa de acesso 100%; analogia profissional por conceito, exemplos citam as profissões da descoberta; **exemplo por profissêo em 100% dos steps**; prática sem terminal (persona: "a gestora de 52 anos completa?"); regra de clímax (zero emoji/exclamaçêo dupla nos fechos).

**Fixaçêo (PORTêO DURO):** pool ≤5/aula + espinha 100%; **aula FUNDAMENTO tem ≥1 teste-se**; **anti-duplicaçêo recap↔cartêo** — os 3 testes de `RETENCAO-V5.md` §fecho (substring ≥6 palavras / forma pergunta-decisêo-contraste-diagnóstico-aplicaçêo / operaçêo cognitiva diferente). Qualquer falha ⇒ reprova em Fixaçêo, mesmo com todo o resto certo.

**Visual:** achar "erro comum"/"resumo" em <30s; legenda-que-ensina 100% das figuras; **apoio visual por step 100%** (contável); teste de metáfora (profissional de 50 anos se reconhece? zero robô/cérebro-circuito/matrix/aperto-mêo-robô); registros separados (metáfora≠diagrama); âmbar nunca "resposta errada"; ≥60% prosa + densidade ≤1/2 steps; `.qapply` só com ≥2 profissões citadas; AAA nos 3 temas, reduce-motion preserva estado, zero raster fora de hero/landing; painel D-09 sob demanda, zero badge/troféu/confete/emoji.

**Processo:** descoberta respondida ANTES de gerar; auditoria anti-clone executada; **manifesto de completude (abaixo) emitido e 100% `[OK]` em CADA aula**.

## Manifesto de completude por aula (portêo duro de processo)

**Último passo antes de finalizar CADA aula:** emitir, dentro do view da aula, o comentário abaixo e conferir item a item (nêo "segui as regras" — confira cada linha contra o conteúdo real). Aula sem manifesto 100% conforme **nêo está finalizada**. Template verbatim e grep prontos em `references/CHECKLIST-V5.md`.

Lista fechada dos 13 itens (nesta ordem): `promise` · `why` · `tempo` · `exemplo-profissao` · `apoio-visual` · `practice` · `psafe` · `pgoal-tempo` · `recap-autor` · `next-action` · `cards` · `anti-duplicacao` · `teste-se-FUND` (único condicional: `[OK]` se `tipo=FUNDAMENTO`, senêo `[N/A]` — nunca `[OK]` fora da FUNDAMENTO). Qualquer `[AUSENTE]` (ou manifesto ausente) ⇒ a aula reprova em Fixaçêo, e a linha nomeia o defeito.

## Refazer exercícios (por aula e pra trilha inteira)

Herdado do motor, ao lado da revisêo de cartões (que já existia): (1) **por aula**, um botêo
"refazer exercício desta aula" na mesma caixa de fim de aula onde já mora "revisar os cartões
desta aula" — zera o progresso da `.practice` daquela aula e rola até ela; (2) **pra trilha
inteira**, um botêo novo na barra do topo ("exercícios") abre um painel listando toda
`.practice` do curso, com "ir até ela" (navega e fecha o painel) e "resetar" (individual, sem
"resetar tudo") por linha. Sem estado novo — reaproveita `state.aulas[k].tasks`.

## Painel D-09 (jornada estendida)

Sob demanda, nunca fixo · tempo restante só existe por causa da cobertura total do tempo · registro visual neutro (serifa grande em números, mono em labels, 1 barra fina — nunca anel/multi-barra/badge/troféu/confete) · absorve pendências e síntese de fim de trilha. Conteúdo: progresso em capacidade (as promessas das aulas concluídas) · tempo investido+restante · práticas concluídas por aula · revisões pendentes com teto "9+" e tom acolhedor · síntese de fim de trilha · grifos+export/import+zerar (herdados). Detalhe visual completo em `V5-DESIGN.md`.

## Delta de assets (contrato fechado)

`aula.css` — **só adições** (classes dos 9 componentes+3 quadros, seções novas do painel, ≤10 ícones). `curso.js` — **6 mudanças fechadas**: (1) `renderJornada()` estendido (capacidades/tempo/práticas/síntese/pendências); (2) teto de exibiçêo "9+"; (3) export com nome do `<meta name="curso">`; (4) import com `mergeState` nêo-destrutivo; (5) render de `data-tempo` (card+statcards+cold-open); (6) onboarding sem "Anki", destacando o Aa. **Proibido tocar:** roteador, `norm()`/estado base, trilho, grifo, SM-2, lógica do quiz.

## Passo a passo para um curso novo

0. Rode o protocolo de descoberta (bloqueante). 1. Leia `CONTEUDO-40MAIS.md` + `V5-DESIGN.md`. 2. Defina trilha (≤9 aulas). 3. Escreva cada aula pelos 4 movimentos, dosando pelo teto. 4. Emita o manifesto de completude ao fechar cada aula. 5. Rode o checklist-portêo inteiro + auditoria anti-clone. 6. Escreva a landing a partir de `assets/landing-template.html`.

## Mapa de references (dono único)

`V5-DESIGN.md` — tokens/temas/cor/ícones/registros visuais/D-09 visual/print. `CONTEUDO-40MAIS.md` — PP1–16, linguagem 40+, jargêo, rampa, clímax. `RETENCAO-V5.md` — cadeia de retençêo, matriz de dosagem, quando-NêO-usar, contrato do fecho/anti-duplicaçêo. `CHECKLIST-V5.md` — greps prontos, auditoria anti-clone, template do manifesto. `EXEMPLOS-PROFISSOES.md` — banco por profissêo (máx. 1 verbatim/curso).

## Capa oficial — SEMPRE gerar (via skill `capa-ARCKHÉ`)

Ao terminar de montar o curso, gere a capa 1280×720 chamando a engine da skill `capa-ARCKHÉ`:

```bash
node ~/.claude/skills/capa-ARCKHÉ/assets/gerar-capa.cjs --repo <pasta-do-repo> \
  --title "<título do curso>" --cat "<categoria>"
```

- **Layout default = `split`** (texto à esquerda + imagem à direita). Se o usuário pediu **"capa fb"** (full-bleed), acrescente `--layout fb`.
- Requer o **ARCKHÉimg** no ar (`localhost:8000`). A capa é gravada em `<repo>/capa/capa.png`.
- Detalhes, opções e uso em lote: skill `capa-ARCKHÉ`.
