# formato-curso-v2 â€” curso INEMA.CLUB com camada de aprendizagem

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="48" />
  <p><strong>Arckhé AI</strong></p>
</div>


EvoluÃ§Ã£o da skill `formato-curso` (pÃ¡ginas HTML de curso INEMA.CLUB) com uma **camada de aprendizagem** e **temas trocÃ¡veis**, mantendo a regra de ouro: **self-contained** (Tailwind via CDN + JS inline), sem build, sem backend, estado em `localStorage`.

## ðŸ”— Demo ao vivo

âž¡ï¸ **https://inematds.github.io/formato-curso-v2/** (redireciona para o curso-demo)

## O que tem de novo

- **Progresso** marcÃ¡vel por tÃ³pico, agregando tÃ³pico â†’ mÃ³dulo â†’ trilha â†’ curso (via manifesto do curso).
- **Marcar dÃºvida** e **anotaÃ§Ãµes / highlight** no prÃ³prio texto.
- Painel **"minha jornada"** consolidando progresso, dÃºvidas e notas.
- **Export / Import** das anotaÃ§Ãµes em `.json` (backup/portabilidade; base do sync v2).
- **5 temas trocÃ¡veis** que transformam a pÃ¡gina inteira: INEMA Dark (padrÃ£o), Claro, SÃ©pia, Foco, Alto-contraste â€” + preferÃªncias de leitura (largura de linha, entrelinha, fonte, acento).
- Acessibilidade: skip link, foco preso na jornada, `prefers-reduced-motion`, ARIA.

## Estrutura

```
formato-curso-v2/      # a skill (SKILL.md + references/ + assets/learn.js,learn.css)
demo/                  # curso-demo (1 trilha, 2 mÃ³dulos) â€” Ã© o que o Pages serve
verify/                # harness Playwright (smoke / temas / contrato)
DESIGN-SPEC.md         # design da camada de aprendizagem
VERIFICACAO.md         # relatÃ³rio de verificaÃ§Ã£o (45/45 em navegador real)
```

Verificado em navegador real: **smoke 23/23 Â· temas 10/10 Â· contrato 12/12**.

## Formatos v7.x â€” INEMA Learning (19/10/2026)

| Skill | O que Ã© | Curso de referÃªncia |
|---|---|---|
| `formato-curso-v72/` | Plataforma (barra lateral, progresso, gaveta "seu estudo") + didÃ¡tica v7: diagrama clicÃ¡vel primeiro, texto curto, simulaÃ§Ã£o, copiar, prÃ¡tica com "pronto quando", teste comentado. ConteÃºdo em JSON â†’ `gerar.py`; portÃ£o `validar.py` + `conferir-tela.cjs`. | [do-chat-ao-agente-v72](https://inematds.github.io/do-chat-ao-agente-v72/) |
| `formato-curso-v71/` | A mesma base sem a camada de estudo nem as fotos por aula. | [do-chat-ao-agente-v71](https://inematds.github.io/do-chat-ao-agente-v71/) |

Curso novo: `formato-curso-v72/scripts/novo-curso.sh ~/projetos/<repo> "<Nome>"`.

---

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="32" />
  <p><strong>Arckhé AI</strong></p>
</div>