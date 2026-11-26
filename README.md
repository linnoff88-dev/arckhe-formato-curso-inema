# formato-curso-v2 ê¢â¬â curso ARCKHê AI com camada de aprendizagem

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="48" />
  <p><strong>Arckhé AI</strong></p>
</div>


EvoluêÂ§êÂ£o da skill `formato-curso` (pêÂ¡ginas HTML de curso ARCKHê AI) com uma **camada de aprendizagem** e **temas trocêÂ¡veis**, mantendo a regra de ouro: **self-contained** (Tailwind via CDN + JS inline), sem build, sem backend, estado em `localStorage`.

## ê°Å¸ââ Demo ao vivo

ê¢Å¾Â¡ê¯Â¸Â **https://linnoff88-dev.github.io/ (redireciona para o curso-demo)

## O que tem de novo

- **Progresso** marcêÂ¡vel por têÂ³pico, agregando têÂ³pico ê¢â â mêÂ³dulo ê¢â â trilha ê¢â â curso (via manifesto do curso).
- **Marcar dêÂºvida** e **anotaêÂ§êÂµes / highlight** no prêÂ³prio texto.
- Painel **"minha jornada"** consolidando progresso, dêÂºvidas e notas.
- **Export / Import** das anotaêÂ§êÂµes em `.json` (backup/portabilidade; base do sync v2).
- **5 temas trocêÂ¡veis** que transformam a pêÂ¡gina inteira: ARCKHê Dark (padrêÂ£o), Claro, SêÂ©pia, Foco, Alto-contraste ê¢â¬â + preferêÂªncias de leitura (largura de linha, entrelinha, fonte, acento).
- Acessibilidade: skip link, foco preso na jornada, `prefers-reduced-motion`, ARIA.

## Estrutura

```
formato-curso-v2/      # a skill (SKILL.md + references/ + assets/learn.js,learn.css)
demo/                  # curso-demo (1 trilha, 2 mêÂ³dulos) ê¢â¬â êÂ© o que o Pages serve
verify/                # harness Playwright (smoke / temas / contrato)
DESIGN-SPEC.md         # design da camada de aprendizagem
VERIFICACAO.md         # relatêÂ³rio de verificaêÂ§êÂ£o (45/45 em navegador real)
```

Verificado em navegador real: **smoke 23/23 êÂ· temas 10/10 êÂ· contrato 12/12**.

## Formatos v7.x ê¢â¬â ARCKHê Learning (19/10/2026)

| Skill | O que êÂ© | Curso de referêÂªncia |
|---|---|---|
| `formato-curso-v72/` | Plataforma (barra lateral, progresso, gaveta "seu estudo") + didêÂ¡tica v7: diagrama clicêÂ¡vel primeiro, texto curto, simulaêÂ§êÂ£o, copiar, prêÂ¡tica com "pronto quando", teste comentado. ConteêÂºdo em JSON ê¢â â `gerar.py`; portêÂ£o `validar.py` + `conferir-tela.cjs`. | [do-chat-ao-agente-v72](https://linnoff88-dev.github.io/ |
| `formato-curso-v71/` | A mesma base sem a camada de estudo nem as fotos por aula. | [do-chat-ao-agente-v71](https://linnoff88-dev.github.io/ |

Curso novo: `formato-curso-v72/scripts/novo-curso.sh ~/projetos/<repo> "<Nome>"`.

---

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="32" />
  <p><strong>Arckhé AI</strong></p>
</div>