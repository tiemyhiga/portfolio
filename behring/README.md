# tiemyhiga.com/behring

Vitrine de projetos da Tiemy Higa. HTML, CSS e JavaScript sem build, sem
dependências e sem framework — abre direto no navegador, inclusive por `file://`.

```
behring/
  index.html
  assets/
    css/styles.css      # tokens + todo o estilo
    js/i18n.js          # dicionários pt-BR / en-US / es-419 e o motor de tradução
    js/main.js          # idioma, menu, nav sticky, reveal on scroll
    img/favicon.svg
```

## Rodar

Abra `index.html` no navegador. Para servir por HTTP, a partir da raiz do repositório:

```bash
python -m http.server 8000
# http://localhost:8000/behring/
```

Em produção, a pasta `behring/` responde em `tiemyhiga.com/behring`.

## Idiomas

Três idiomas, todos completos: **português do Brasil** (padrão), **inglês
americano** e **espanhol latino-americano**.

- Troca pelo seletor no topo direito.
- A escolha fica salva em `localStorage` (`tiemy.lang`).
- Ordem de decisão: `?lang=` na URL → escolha salva → idioma do navegador → pt-BR.
- Para testar direto: `index.html?lang=en-US`, `index.html?lang=es-419`.

O texto vive em `assets/js/i18n.js`, num dicionário por idioma. No HTML, cada nó
traduzível carrega `data-i18n="chave"`; atributos usam
`data-i18n-attr="aria-label:chave"`. As legendas dentro dos desenhos SVG também
são traduzidas — são nós `<text>` com `data-i18n`.

Os dicionários são inline (não são buscados por `fetch`) justamente para a página
funcionar aberta do disco. São 212 chaves, com paridade entre os três idiomas.

## Identidade

Extraída do arquivo Figma **Nosso currículo**, frame `Resume_Tiemy2026.02`, via
`figma-cli`, para a página falar a mesma língua visual do currículo.

- **Carmim** `#be1622` como único acento — nome, títulos de seção, numeração e
  as linhas de cota dos desenhos.
- **Tinta** `#1e1e1e` sobre papel branco.
- **Tipografia** Futura em quatro pesos no currículo (Bold, Medium, Light e Light
  Condensed). Futura não existe na web: a página usa **Jost**, a revivência
  geométrica mais próxima, carregada do Google Fonts.
- **Detalhe de canto**: dois quadrados em degrau, o mesmo "Red Detail" que marca
  os cantos da folha A4 do currículo. Aqui vira marca da página e do favicon.
- A página inteira é montada como uma **prancha técnica**: fios de 1 px, bloco de
  legenda no topo, seções numeradas 00–04 e projetos numerados 01–06.

## Desenhos

Não há captura de tela nem foto de nenhum projeto. Cada prancha traz um **desenho
vetorial do mecanismo** — feito à mão em SVG, na mesma linguagem de desenho
técnico do resto da página. Nenhuma tela de produto foi recriada ou inventada.

Para trocar por imagens reais depois, substitua o conteúdo de `<figure class="draw">`
por um `<img>`; o quadro e o espaçamento continuam valendo.

## Placeholders a substituir

| Placeholder | Onde aparece |
|---|---|
| `[LINK-WEB]` | Prancha 01, Cuco Calendar |
| `[LINK-ANDROID]` | Prancha 01, botão da Google Play |
| `[LINK-IOS]` | Prancha 01, botão da App Store |
| `[LINK-FEEDBACK]` | Seção Contato |

Há também um espaço marcado como **prova social futura** na lista de
reconhecimentos — está vazio de propósito, sem número, depoimento ou logotipo
inventado.

## Regras de conteúdo respeitadas

- Nenhum concorrente citado e nenhuma comparação, direta ou indireta.
- Nenhum número, métrica, depoimento, prêmio ou logotipo de cliente inventado.
  Tudo vem do currículo, do portfólio no Figma ou dos sites dos próprios projetos.
- Os desenhos não afirmam medidas que não estão documentadas: as cotas do
  mobiliário aparecem como linhas sem valor, com a nota "cotas na prancha original".
- Tom direto, frases curtas, sem superlativo genérico.

## Acessibilidade

- HTML semântico, skip link, foco visível, hierarquia de headings sem saltos.
- Menu de idiomas com `role="menu"` / `menuitemradio` e `aria-checked`; fecha com
  `Esc` ou clique fora.
- Cada desenho é `role="img"` com descrição traduzida, e não contém nada focável.
- `prefers-reduced-motion` desliga as animações e o scroll suave.
- Há folha de estilo de impressão: a página sai em papel sem a barra, sem os
  botões e sem os desenhos grudados.
