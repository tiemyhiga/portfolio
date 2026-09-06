/* Tiemy Higa — vitrine de projetos · i18n
 * Dicionários inline (não buscados por fetch) e script clássico, sem módulo,
 * para a página também funcionar aberta direto do disco (file://).
 * As chaves seguem a ordem do DOM em index.html.
 */
(function (window, document) {
  'use strict';

  const DEFAULT_LANG = 'pt-BR';
  const STORAGE_KEY = 'tiemy.lang';

  const LANGS = [
    { code: 'pt-BR', short: 'PT' },
    { code: 'en-US', short: 'EN' },
    { code: 'es-419', short: 'ES' },
  ];

  const DICT = {

  /* ══════════════════════════════════════════════════ português (Brasil) ══ */
  'pt-BR': {
    'meta.title': 'Tiemy Higa · Designer de produto e de serviço',
    'meta.description':
      'Projetos selecionados de Tiemy Higa: produto digital, design de serviço e desenho técnico. Campinas, Brasil.',
    'meta.langName': 'Português (Brasil)',

    'nav.skip': 'Pular para o conteúdo',
    'nav.perfil': 'Perfil',
    'nav.trajetoria': 'Trajetória',
    'nav.projetos': 'Projetos',
    'nav.metodo': 'Método',
    'nav.cta': 'Falar comigo',
    'nav.langLabel': 'Idioma',
    'nav.menuLabel': 'Abrir menu',

    'hero.eyebrow': 'Designer de produto e de serviço · Campinas, Brasil',
    'hero.lead':
      'Desenho produtos digitais e os serviços em volta deles. Vim da arquitetura, na FAU USP, e trouxe de lá o desenho técnico: medir antes de cortar, detalhar antes de montar. Hoje aplico isso em pesquisa, interface e design system.',
    'hero.ctaPrimary': 'Ver os seis projetos',
    'hero.ctaSecondary': 'Falar comigo',

    'stamp.now.k': 'Agora',
    'stamp.now.v': 'Fundadora, Head of Design e CEO · Serinus Tecnologia',
    'stamp.build.k': 'Construindo',
    'stamp.build.v': 'Cuco Calendar',
    'stamp.also.k': 'Também',
    'stamp.also.v': 'Product Owner e Product Designer · Residência Tecnológica em Saúde Digital',
    'stamp.edu.k': 'Formação',
    'stamp.edu.v': 'Arquitetura, Urbanismo e Design · FAU USP',
    'stamp.lang.k': 'Idiomas',
    'stamp.lang.v': 'Português, inglês e espanhol',

    'perfil.title': 'Perfil',
    'perfil.p1':
      'Trabalho com experiências digitais acessíveis e centradas em quem usa. Gosto de estratégia de produto e de problemas reais: os que aparecem quando alguém tenta fazer uma coisa simples e não consegue.',
    'perfil.p2':
      'Meu percurso é de campo. Presidi uma empresa júnior e fundei o setor comercial dela. Trabalhei com sucesso do cliente e educação numa empresa de software. Abri a minha própria empresa de tecnologia, onde sou CEO e Head of Design. Também sou Product Owner e Product Designer numa residência em saúde digital.',
    'perfil.p3':
      'Estudo como o design molda comportamento e percepção. Na prática, isso vira pesquisa com usuário, fluxo desenhado antes da tela, design system que aguenta o time crescer e métrica que diz se a decisão foi boa.',
    'perfil.doing.title': 'Do que eu cuido',
    'perfil.doing.1': 'Pesquisa com usuário e teste de usabilidade',
    'perfil.doing.2': 'Fluxo, arquitetura de informação e interface',
    'perfil.doing.3': 'Design system: componente, token e documentação',
    'perfil.doing.4': 'Design de serviço e jornada de ponta a ponta',
    'perfil.doing.5': 'Conteúdo de produto e redação',
    'perfil.doing.6': 'Planejamento com OKRs e métricas de experiência',

    'traj.title': 'Trajetória',
    'traj.note': 'Sete anos entre a prancheta e o produto.',

    'traj.1.when': 'Desde 2024',
    'traj.1.title': 'Fundadora, Head of Design e CEO · Serinus Tecnologia',
    'traj.1.where': 'Empresa de tecnologia própria · remoto',
    'traj.1.body':
      'Montei a empresa e o time do zero absoluto. Respondo pela direção, pelas contas e pelo produto. Formei as equipes de design, produto e marketing, e desenho a experiência e a interface do que a gente constrói. O primeiro produto foi o Papagaio.Bot. Depois de descontinuá-lo, pivotamos: hoje a Serinus constrói o Cuco Calendar.',

    'traj.2.when': 'Desde 2026',
    'traj.2.title': 'Product Owner e Product Designer · Residência Tecnológica em Saúde Digital',
    'traj.2.where': 'InovaUSP e Samsung Ocean · híbrido, São Paulo',
    'traj.2.body':
      'Programa de seis meses para desenvolver soluções digitais para a saúde, com imersão em ambientes reais de atendimento. Estou na squad de um aplicativo de gestão da saúde da família, em parceria com FAPESP e SUS. Cuido do design system, das entrevistas e dos testes de usabilidade que embasam a interface.',

    'traj.3.when': '2024 a 2025',
    'traj.3.title': 'Intercâmbio em Design · CIDI UNAM',
    'traj.3.where': 'Centro de Investigaciones de Diseño Industrial · Cidade do México',
    'traj.3.body':
      'Um ano fora do eixo: design de serviço, UX, fotografia de produto e cor. Voltei falando espanhol com fluência e com outra referência de como se ensina projeto.',

    'traj.4.when': '2022 a 2024',
    'traj.4.title': 'Customer Success e Educacional · Graphisoft Brasil',
    'traj.4.where': 'Software BIM para arquitetura, engenharia e construção · híbrido, São Paulo',
    'traj.4.body':
      'Cuidei do sucesso dos estudantes que usam o Archicad na licença gratuita, tratando cada um como cliente. Revisei e afinei conteúdos e artes para o público universitário. Criei produtos digitais e físicos para distribuir entre os estudantes. Conduzi o Programa de Estudantes Embaixadores do Archicad: processo, divulgação e inscrição. Também dei o curso de Archicad para iniciantes na FAU USP.',

    'traj.5.when': '2019 a 2022',
    'traj.5.title': 'Presidente · FAUUSP Jr.',
    'traj.5.where': 'Empresa júnior de arquitetura, urbanismo e design · USP, São Paulo',
    'traj.5.body':
      'Fundei o departamento comercial em 2020 e multipliquei a receita por 15,3. Trouxe sucesso do cliente, estratégias de CX e Jobs to Be Done para dentro da casa. Em 2021 assumi a presidência e reescrevi processos internos com design de serviço. Implementei BIM em projetos reais e organizei hackathons, eventos e parcerias.',

    'proj.title': 'Seis projetos',
    'proj.note': 'Cinco digitais e um construído em madeira.',

    'meta.period': 'Período',
    'meta.kind': 'Tipo',
    'meta.status': 'Situação',
    'meta.scope': 'Escopo',

    'label.did': 'O que eu fiz',
    'label.inside': 'O que tem dentro',
    'label.platforms': 'Plataformas',
    'label.problem': 'O problema',
    'label.how': 'Como funciona',
    'label.idea': 'A ideia',
    'label.recog': 'Reconhecimento',
    'label.context': 'Contexto',
    'label.team': 'Equipe',
    'label.brief': 'O pedido',
    'label.result': 'Resultado',
    'label.pivot': 'O pivô',
    'label.building': 'Como estamos construindo',
    'label.led': 'O que eu liderei',
    'label.designed': 'O que eu desenhei',
    'label.ended': 'Como terminou',
    'label.visual': 'Decisões visuais',

    'p1.role': 'Design de produto e de marca · Serinus Tecnologia',
    'p1.period': 'Atual',
    'p1.kind': 'Produto digital',
    'p1.status': 'No ar',
    'p1.alt': 'Diagrama: várias contas de calendário convergindo para uma única grade semanal, com trilha de fusos horários e um link de disponibilidade abaixo.',
    'p1.lead':
      'Um agregador de calendários. Reúne as agendas das contas Google, Microsoft (Outlook) e Apple que a pessoa escolhe conectar, e mostra tudo em uma tela só. É o produto que a Serinus constrói agora.',
    'p1.pivot':
      'O Papagaio.Bot não vingou. Em vez de insistir, encerramos e pivotamos. O Cuco nasceu dessa decisão e de uma lição concreta: no produto anterior passamos tempo demais construindo antes de descobrir que vender seria difícil.',
    'p1.building':
      'Discovery e construção acontecem juntos. Cada funcionalidade entra, é testada com usuário e é ajustada. Corrigimos bug e refinamos fluxo no mesmo ritmo em que o produto cresce. A pergunta "alguém quer isso?" vem antes de a tela ficar pronta.',
    'p1.did.1': 'Experiência e interface do produto, do fluxo à tela final',
    'p1.did.2': 'Identidade visual e design system aplicado ao app e ao site',
    'p1.did.3': 'Landing page responsiva e as páginas secundárias',
    'p1.did.4': 'Conteúdo de produto: redação de interface e material de divulgação',
    'p1.in.1': 'Criar, editar e mover eventos de qualquer conta conectada',
    'p1.in.2': 'Link de agendamento com horários livres calculados sobre todas as contas',
    'p1.in.3': 'Vários fusos horários lado a lado',
    'p1.in.4': 'Mostrar ou ocultar cada agenda, inclusive as compartilhadas',
    'p1.in.5': 'Aniversários com a idade e cobrança por Pix',
    'p1.platforms': 'web, Windows, macOS, Linux, Android e iOS',

    'p2.role': 'Product Owner e Product Designer · Residência Tecnológica em Saúde Digital',
    'p2.period': '2026',
    'p2.kind': 'Aplicativo móvel',
    'p2.status': 'Em desenvolvimento',
    'p2.alt': 'Diagrama: um exame passa por OCR e IA e vira uma ficha organizada; abaixo, a matriarca ligada a quatro perfis da família.',
    'p2.lead':
      'Um aplicativo para digitalizar e organizar os documentos e exames de saúde da família. O nome vem da samaúma, a árvore que sustenta um pedaço inteiro da floresta em volta dela.',
    'p2.problem':
      'Em muitas casas há uma pessoa que carrega a saúde de todo mundo: consultas, exames, receitas, histórico dos filhos, do cônjuge, dos pais e o dela. Isso vive espalhado em papel, foto no celular e memória. O ÚMA é desenhado para ela.',
    'p2.how.1': 'OCR lê o documento fotografado e extrai o texto',
    'p2.how.2': 'Um agente de IA resume e organiza o que foi lido',
    'p2.how.3': 'Tudo se agrupa por pessoa dentro de um perfil de família',
    'p2.did.1': 'Criação e manutenção do design system no Figma',
    'p2.did.2': 'Entrevistas e testes de usabilidade para embasar a interface',
    'p2.did.3': 'Jornada do usuário, persona e mapa de empatia',
    'p2.did.4': 'Condução em Double Diamond e Design Sprint, com Scrum',
    'p2.note':
      'O projeto está em desenvolvimento na squad, em parceria com FAPESP e SUS. Ainda não há versão pública.',

    'p3.role': 'Fundadora e Head of Design · Serinus Tecnologia',
    'p3.period': '2024 a 2026',
    'p3.kind': 'Produto digital',
    'p3.status': 'Descontinuado',
    'p3.alt': 'Fluxograma: uma mensagem chega, o sistema pergunta se está no roteiro; se sim responde sozinho, se não pausa e chama uma pessoa do time.',
    'p3.lead':
      'Automação de atendimento e vendas no WhatsApp com IA. Foi o primeiro produto da Serinus e o motivo de eu ter aberto a empresa. Não existe mais.',
    'p3.led.1': 'Abertura da empresa e montagem do time, do zero absoluto',
    'p3.led.2': 'Formação e condução das equipes de design, produto e marketing',
    'p3.led.3': 'Direção de produto: o que entrava, o que ficava de fora, em que ordem',
    'p3.led.4': 'Planejamento com OKRs junto do time de desenvolvimento',
    'p3.led.5': 'Decisão de encerrar o produto e conduzir o pivô',
    'p3.des.1': 'Experiência e interface da extensão para navegador',
    'p3.des.2': 'Editor de fluxos de mensagem para quem não programa',
    'p3.des.3': 'Landing pages responsivas e fluxos com foco em clareza',
    'p3.idea':
      'Automação de conversa costuma travar no momento em que a pessoa sai do roteiro. O Papagaio.Bot reconhecia esse momento: pausava a conversa e chamava alguém do time. O resto, a parte repetitiva, ele resolvia sozinho.',
    'p3.ended':
      'Construímos muito antes de validar. Quando o produto ficou pronto, vender se mostrou difícil, e a conta não fechava. Encerramos e pivotamos para o Cuco Calendar. Foi a experiência que mais me ensinou sobre empreender: hoje eu valido enquanto construo, e sei a que hora parar.',
    'p3.recog':
      'Projeto vencedor da subcategoria de desenho de serviço e experiências no Premio Nacional de Diseño: Diseña México, em 2025.',

    'p4.role': 'Projeto de concurso · FAUUSP Jr.',
    'p4.kind': 'Arquitetura efêmera',
    'p4.status': 'Selecionado no desafio',
    'p4.alt': 'Desenho técnico: planta com módulos hexagonais dispostos a 60 graus e um corte mostrando a cobertura aberta e a ventilação.',
    'p4.lead':
      'Uma célula temporária e modular para apoiar o ensino ao ar livre durante a pandemia de covid-19. Estrutura aberta, montada e desmontada no pátio da escola.',
    'p4.context':
      'O desafio internacional Design for Emergency: Semeando Ideias, promovido pela Northeastern University com o Museu da Casa Brasileira e a FAU USP, pedia respostas de projeto para a emergência sanitária. Foram quarenta propostas inscritas e vinte selecionadas, divididas em quatro categorias. O Espaço 60º entrou pela categoria de apoio comunitário.',
    'p4.team':
      'Projeto coletivo da FAUUSP Jr., com André Góes, Gabriel Paraizo, Giselle Jensen, Rebecca Cavalcante e eu. O resultado também saiu no Jornal da USP.',
    'p4.linkSheet': 'Prancha de entrega, PDF ↗',
    'p4.linkResult': 'Resultado do desafio ↗',
    'p4.linkCat': 'Catálogo de ideias ↗',

    'p5.title': 'Blog do Daquisu',
    'p5.role': 'Design de interface · projeto para terceiro',
    'p5.kind': 'Site editorial',
    'p5.status': 'No ar',
    'p5.alt': 'Wireframe: cabeçalho com navegação e três cartões de artigo, com a paleta verde e bege especificada abaixo.',
    'p5.lead':
      'Design de interface para um blog pessoal: textos sobre vida universitária, tecnologia, intercâmbio e o que mais couber. Conteúdo em primeira pessoa, publicado sem pressa.',
    'p5.brief':
      'O Daquisu pediu um site com cara de manual e artesanal, que não parecesse saído de um template. E que fosse confortável de ler: nada de interface disputando atenção com o texto.',
    'p5.vis.1': 'Ícones e logotipo desenhados à mão por mim, um a um',
    'p5.vis.2': 'Verde como cor da marca, a cor favorita do Daquisu',
    'p5.vis.3': 'Bege no fundo, para lembrar a folha de papel',
    'p5.vis.4': 'Hierarquia levada pela tipografia e pelo espaço, sem cor competindo',
    'p5.did.1': 'Navegação e arquitetura das seções',
    'p5.did.2': 'Lista de artigos em cartões com imagem, título, data e tempo de leitura',
    'p5.did.3': 'Escala tipográfica e medida de coluna para leitura longa',
    'p5.did.4': 'Sistema de categorias e as peças gráficas do site',

    'p6.title': 'Mesa de trabalho e guarda-roupas',
    'p6.role': 'Projeto de mobiliário e desenho técnico · freelance',
    'p6.kind': 'Projeto físico',
    'p6.scope': 'Suíte de 3,88 × 3,48 m',
    'p6.status': 'Construído',
    'p6.alt': 'Desenho técnico: elevação do guarda-roupas e da mesa de trabalho, com linhas de cota e um detalhe ampliado.',
    'p6.lead':
      'Dois móveis sob medida para a suíte de uma cliente, de 3,88 por 3,48 metros: uma mesa de trabalho e um guarda-roupas. Único projeto desta lista que existe em madeira.',
    'p6.did.1': 'Levantamento do ambiente e definição do programa com a cliente',
    'p6.did.2': 'Projeto das duas peças, com portas abertas e fechadas estudadas',
    'p6.did.3': 'Pranchas técnicas: plantas, cortes, isométricas e detalhes construtivos',
    'p6.did.4': 'Documentação para o marceneiro executar sem depender de mim',
    'p6.result':
      'Os móveis foram montados por um profissional a partir das pranchas. O projeto se manteve quase inteiro. Mudaram as cores, entraram gavetas na mesa e o espelho do guarda-roupas não foi instalado.',
    'p6.link': 'Ver as pranchas técnicas e as fotos do resultado ↗',

    /* legendas dentro dos desenhos */
    'd1.a': 'várias contas', 'd1.b': 'uma tela', 'd1.c': 'fusos', 'd1.d': 'link de disponibilidade',
    'd2.a': 'exame', 'd2.b': 'OCR + IA', 'd2.c': 'ficha organizada', 'd2.d': 'matriarca',
    'd2.e': 'filhos', 'd2.f': 'cônjuge', 'd2.g': 'pais', 'd2.h': 'ela', 'd2.i': 'uma família, um lugar só',
    'd3.a': 'mensagem', 'd3.b': 'no roteiro?', 'd3.c': 'sim', 'd3.d': 'responde sozinho',
    'd3.e': 'não', 'd3.f': 'pausa e chama a pessoa',
    'd3.i': 'fluxo montado sem escrever código',
    'd4.a': 'planta · módulos a 60º', 'd4.b': 'distância', 'd4.c': 'corte', 'd4.d': 'ar livre',
    'd4.e': 'ventilação', 'd4.f': 'célula temporária, modular, desmontável',
    'd5.a': 'data · tempo', 'd5.b': 'medida de coluna', 'd5.c': 'verde e bege',
    'd6.a': 'elevação · guarda-roupas', 'd6.b': 'elevação · mesa', 'd6.c': 'prateleira',
    'd6.d': 'det. 1', 'd6.e': 'esquema · cotas na prancha original',

    'met.title': 'Como eu trabalho',
    'met.1.title': 'Design e UX',
    'met.1.body':
      'Experiência do usuário e da pessoa cliente, design de serviço, interface, pesquisa, wireframe, protótipo web e mobile, design system e conteúdo de produto.',
    'met.2.title': 'Métodos',
    'met.2.body':
      'Design Thinking, Double Diamond, Design Sprint e Scrum. Jornada do usuário, mapa de empatia, service blueprint e persona. OKRs para planejar e CSAT, CES, CR e NPS para medir.',
    'met.3.title': 'Ferramentas',
    'met.3.body':
      'Figma, Adobe Creative Suite, Google Workspace e Microsoft Office, Typeform, GitHub, Python e HTML/CSS. Archicad, do tempo de prancheta, que ainda uso.',

    'met.edu.title': 'Formação',
    'met.edu.1k': '2019 a 2026',
    'met.edu.1': 'Arquitetura, Urbanismo e Design · FAU USP, São Paulo',
    'met.edu.2k': '2024 a 2025',
    'met.edu.2': 'Intercâmbio em Design · CIDI UNAM, Cidade do México',
    'met.edu.3k': '2014 a 2016',
    'met.edu.3': 'Técnico em Enfermagem · Cotuca, Unicamp, Campinas',

    'met.lang.title': 'Idiomas',
    'met.lang.pt': 'Português', 'met.lang.ptv': 'Nativo',
    'met.lang.en': 'Inglês', 'met.lang.env': 'Fluente',
    'met.lang.es': 'Espanhol', 'met.lang.esv': 'Fluente',

    'met.recog.title': 'Reconhecimentos e participações',
    'met.recog.1': 'Premio Nacional de Diseño, Diseña México: vencedora na subcategoria de desenho de serviço e experiências',
    'met.recog.2': 'Service Design Network: Young Talent Board, participação remota',
    'met.recog.3': 'ARQUISUR: coleta e desenvolvimento de dados de São Paulo',
    'met.recog.4': 'Instrutora do curso de Archicad para iniciantes na FAU USP',
    'met.recog.5': 'Design for Emergency: projeto selecionado e publicação no Jornal da USP',
    'met.recog.6': 'Hackathon NASA Space Apps, desafio covid-19: protótipo de um vestível que transmite batimentos',
    'met.recog.ph': 'Espaço reservado para prova social futura',

    'cta.title': 'Contato',
    'cta.lead':
      'Se algo aqui conversa com o que você está construindo, me escreva. Respondo em português, inglês ou espanhol.',
    'cta.mail': 'E-mail',
    'cta.city': 'Cidade',
    'cta.cityv': 'Campinas, SP, Brasil',
    'cta.feedback': 'Deixar um comentário: [LINK-FEEDBACK]',

    'foot.note': 'Página feita à mão, em HTML e CSS.',
  },

  /* ═══════════════════════════════════════════════════ english (US) ══ */
  'en-US': {
    'meta.title': 'Tiemy Higa · Product and service designer',
    'meta.description':
      'Selected projects by Tiemy Higa: digital product, service design and technical drawing. Campinas, Brazil.',
    'meta.langName': 'English (US)',

    'nav.skip': 'Skip to content',
    'nav.perfil': 'Profile',
    'nav.trajetoria': 'Path',
    'nav.projetos': 'Projects',
    'nav.metodo': 'Method',
    'nav.cta': 'Get in touch',
    'nav.langLabel': 'Language',
    'nav.menuLabel': 'Open menu',

    'hero.eyebrow': 'Product and service designer · Campinas, Brazil',
    'hero.lead':
      'I design digital products and the services around them. I came from architecture, at FAU USP, and brought technical drawing with me: measure before you cut, detail before you build. Today that goes into research, interface and design systems.',
    'hero.ctaPrimary': 'See the six projects',
    'hero.ctaSecondary': 'Get in touch',

    'stamp.now.k': 'Now',
    'stamp.now.v': 'Founder, Head of Design and CEO · Serinus Tecnologia',
    'stamp.build.k': 'Building',
    'stamp.build.v': 'Cuco Calendar',
    'stamp.also.k': 'Also',
    'stamp.also.v': 'Product Owner and Product Designer · Digital Health Technology Residency',
    'stamp.edu.k': 'Studying',
    'stamp.edu.v': 'Architecture, Urbanism and Design · FAU USP',
    'stamp.lang.k': 'Languages',
    'stamp.lang.v': 'Portuguese, English and Spanish',

    'perfil.title': 'Profile',
    'perfil.p1':
      'I work on digital experiences that are accessible and built around the person using them. I like product strategy and real problems: the ones that show up when someone tries to do something simple and can’t.',
    'perfil.p2':
      'My path has been hands on. I led a junior enterprise as president and founded its sales department. I worked in customer success and education at a software company. I opened my own technology company, where I am CEO and Head of Design. I am also Product Owner and Product Designer in a digital health residency.',
    'perfil.p3':
      'I study how design shapes behaviour and perception. In practice that becomes user research, flows drawn before screens, a design system that survives the team growing, and metrics that tell you whether the call was right.',
    'perfil.doing.title': 'What I own',
    'perfil.doing.1': 'User research and usability testing',
    'perfil.doing.2': 'Flows, information architecture and interface',
    'perfil.doing.3': 'Design systems: components, tokens and documentation',
    'perfil.doing.4': 'Service design and journeys from end to end',
    'perfil.doing.5': 'Product content and copywriting',
    'perfil.doing.6': 'Planning with OKRs and experience metrics',

    'traj.title': 'Path',
    'traj.note': 'Seven years between the drawing board and the product.',

    'traj.1.when': 'Since 2024',
    'traj.1.title': 'Founder, Head of Design and CEO · Serinus Tecnologia',
    'traj.1.where': 'My own technology company · remote',
    'traj.1.body':
      'I built the company and the team from absolute zero. I own the direction, the books and the product. I formed the design, product and marketing teams, and I design the experience and the interface of what we build. The first product was Papagaio.Bot. After shutting it down we pivoted: today Serinus builds Cuco Calendar.',

    'traj.2.when': 'Since 2026',
    'traj.2.title': 'Product Owner and Product Designer · Digital Health Technology Residency',
    'traj.2.where': 'InovaUSP and Samsung Ocean · hybrid, São Paulo',
    'traj.2.body':
      'A programme of six months for building digital solutions in healthcare, with immersion in real care settings. I am on the squad of a family health management app, in partnership with FAPESP and the Brazilian public health system. I own the design system and the interviews and usability tests the interface rests on.',

    'traj.3.when': '2024 to 2025',
    'traj.3.title': 'Design exchange · CIDI UNAM',
    'traj.3.where': 'Centro de Investigaciones de Diseño Industrial · Mexico City',
    'traj.3.body':
      'A year off the usual track: service design, UX, product photography and colour. I came back fluent in Spanish and with a different reference for how design is taught.',

    'traj.4.when': '2022 to 2024',
    'traj.4.title': 'Customer Success and Education · Graphisoft Brasil',
    'traj.4.where': 'BIM software for architecture, engineering and construction · hybrid, São Paulo',
    'traj.4.body':
      'I looked after the success of students using Archicad on the free licence, treating each of them as a customer. I reviewed and sharpened content and artwork for the university audience. I created digital and physical products to hand out to students. I ran the Archicad Student Ambassador Programme: process, outreach and applications. I also taught the beginners Archicad course at FAU USP.',

    'traj.5.when': '2019 to 2022',
    'traj.5.title': 'President · FAUUSP Jr.',
    'traj.5.where': 'Junior enterprise for architecture, urbanism and design · USP, São Paulo',
    'traj.5.body':
      'I founded the sales department in 2020 and multiplied revenue by 15.3. I brought customer success, CX strategy and Jobs to Be Done into the house. In 2021 I took over as president and rewrote internal processes using service design. I put BIM to work on real projects and organised hackathons, events and partnerships.',

    'proj.title': 'Six projects',
    'proj.note': 'Five digital, one built in wood.',

    'meta.period': 'Period',
    'meta.kind': 'Type',
    'meta.status': 'Status',
    'meta.scope': 'Scope',

    'label.did': 'What I did',
    'label.inside': 'What it does',
    'label.platforms': 'Platforms',
    'label.problem': 'The problem',
    'label.how': 'How it works',
    'label.idea': 'The idea',
    'label.recog': 'Recognition',
    'label.context': 'Context',
    'label.team': 'Team',
    'label.brief': 'The brief',
    'label.result': 'Result',
    'label.pivot': 'The pivot',
    'label.building': 'How we are building it',
    'label.led': 'What I led',
    'label.designed': 'What I designed',
    'label.ended': 'How it ended',
    'label.visual': 'Visual decisions',

    'p1.role': 'Product and brand design · Serinus Tecnologia',
    'p1.period': 'Current',
    'p1.kind': 'Digital product',
    'p1.status': 'Live',
    'p1.alt': 'Diagram: several calendar accounts converging into a single weekly grid, with a time zone rail and an availability link below.',
    'p1.lead':
      'A calendar aggregator. It gathers the calendars from the Google, Microsoft (Outlook) and Apple accounts a person chooses to connect, and shows all of it on one screen. It is the product Serinus is building now.',
    'p1.pivot':
      'Papagaio.Bot did not take off. Rather than push harder, we shut it down and pivoted. Cuco came out of that decision and out of a concrete lesson: on the previous product we spent far too long building before finding out that selling would be hard.',
    'p1.building':
      'Discovery and building happen together. Every feature ships, gets tested with users and gets adjusted. We fix bugs and refine flows at the same pace the product grows. The question "does anyone want this?" comes before the screen is finished.',
    'p1.did.1': 'Product experience and interface, from flow to final screen',
    'p1.did.2': 'Visual identity and design system applied to the app and the site',
    'p1.did.3': 'Responsive landing page and the secondary pages',
    'p1.did.4': 'Product content: interface copy and launch material',
    'p1.in.1': 'Create, edit and move events from any connected account',
    'p1.in.2': 'A scheduling link with free slots calculated across every account',
    'p1.in.3': 'Several time zones side by side',
    'p1.in.4': 'Show or hide each calendar, shared ones included',
    'p1.in.5': 'Birthdays with the age, and charging by Pix',
    'p1.platforms': 'web, Windows, macOS, Linux, Android and iOS',

    'p2.role': 'Product Owner and Product Designer · Digital Health Technology Residency',
    'p2.period': '2026',
    'p2.kind': 'Mobile app',
    'p2.status': 'In development',
    'p2.alt': 'Diagram: a medical exam passes through OCR and AI and becomes an organised record; below, the matriarch connected to four family profiles.',
    'p2.lead':
      'An app for digitising and organising a family’s health documents and test results. The name comes from the samaúma, the tree that holds up a whole stretch of forest around it.',
    'p2.problem':
      'In many households one person carries everyone’s health: appointments, test results, prescriptions, the children’s history, the partner’s, the parents’ and her own. It lives scattered across paper, phone photos and memory. ÚMA is designed for her.',
    'p2.how.1': 'OCR reads the photographed document and pulls out the text',
    'p2.how.2': 'An AI agent summarises and organises what it read',
    'p2.how.3': 'Everything groups by person inside a family profile',
    'p2.did.1': 'Building and maintaining the design system in Figma',
    'p2.did.2': 'Interviews and usability tests behind the interface',
    'p2.did.3': 'User journey, persona and empathy map',
    'p2.did.4': 'Running Double Diamond and Design Sprint, with Scrum',
    'p2.note':
      'The project is in development with the squad, in partnership with FAPESP and the Brazilian public health system. There is no public release yet.',

    'p3.role': 'Founder and Head of Design · Serinus Tecnologia',
    'p3.period': '2024 to 2026',
    'p3.kind': 'Digital product',
    'p3.status': 'Discontinued',
    'p3.alt': 'Flowchart: a message arrives, the system asks whether it is on script; if yes it answers by itself, if not it pauses and calls someone from the team.',
    'p3.lead':
      'AI automation for sales and support on WhatsApp. It was Serinus’s first product and the reason I opened the company. It no longer exists.',
    'p3.led.1': 'Opening the company and assembling the team, from absolute zero',
    'p3.led.2': 'Forming and running the design, product and marketing teams',
    'p3.led.3': 'Product direction: what went in, what stayed out, in what order',
    'p3.led.4': 'Planning with OKRs alongside the development team',
    'p3.led.5': 'The decision to shut the product down and run the pivot',
    'p3.des.1': 'Experience and interface of the browser extension',
    'p3.des.2': 'A message flow editor for people who do not code',
    'p3.des.3': 'Responsive landing pages and flows built for clarity',
    'p3.idea':
      'Conversation automation usually breaks the moment a person steps off the script. Papagaio.Bot recognised that moment: it paused the conversation and called someone from the team. The rest, the repetitive part, it handled alone.',
    'p3.ended':
      'We built a lot before validating. When the product was ready, selling proved hard and the numbers did not add up. We shut it down and pivoted to Cuco Calendar. It is the experience that taught me most about building a company: today I validate while I build, and I know when to stop.',
    'p3.recog':
      'Winning project in the service and experience design subcategory at the Premio Nacional de Diseño: Diseña México, in 2025.',

    'p4.role': 'Competition entry · FAUUSP Jr.',
    'p4.kind': 'Ephemeral architecture',
    'p4.status': 'Selected in the challenge',
    'p4.alt': 'Technical drawing: a plan with hexagonal modules set at 60 degrees, and a section showing the open canopy and the airflow.',
    'p4.lead':
      'A temporary, modular cell to support open air teaching during the covid-19 pandemic. An open structure, assembled and taken down in the school yard.',
    'p4.context':
      'The international challenge Design for Emergency: Semeando Ideias, run by Northeastern University with the Museu da Casa Brasileira and FAU USP, asked for design answers to the health emergency. Forty proposals were entered and twenty selected, split across four categories. Espaço 60º came in through community support.',
    'p4.team':
      'A collective FAUUSP Jr. project, with André Góes, Gabriel Paraizo, Giselle Jensen, Rebecca Cavalcante and me. The result was also covered in Jornal da USP.',
    'p4.linkSheet': 'Submission sheet, PDF ↗',
    'p4.linkResult': 'Challenge results ↗',
    'p4.linkCat': 'Ideas catalogue ↗',

    'p5.title': 'Daquisu’s blog',
    'p5.role': 'Interface design · client project',
    'p5.kind': 'Editorial site',
    'p5.status': 'Live',
    'p5.alt': 'Wireframe: a header with navigation and three article cards, with the green and beige palette specified below.',
    'p5.lead':
      'Interface design for a personal blog: writing about university life, technology, living abroad and whatever else fits. First person, published without hurry.',
    'p5.brief':
      'Daquisu asked for a site that felt handmade and crafted, not something out of a template. And comfortable to read: no interface competing with the text for attention.',
    'p5.vis.1': 'Icons and logo drawn by hand by me, one at a time',
    'p5.vis.2': 'Green as the brand colour, Daquisu’s favourite',
    'p5.vis.3': 'Beige in the background, to recall a sheet of paper',
    'p5.vis.4': 'Hierarchy carried by type and space, with no colour competing',
    'p5.did.1': 'Navigation and the architecture of the sections',
    'p5.did.2': 'Article list as cards with image, title, date and reading time',
    'p5.did.3': 'Type scale and column measure for long reading',
    'p5.did.4': 'Category system and the graphic pieces across the site',

    'p6.title': 'Desk and wardrobe',
    'p6.role': 'Furniture design and technical drawing · freelance',
    'p6.kind': 'Physical project',
    'p6.scope': 'A 3.88 × 3.48 m suite',
    'p6.status': 'Built',
    'p6.alt': 'Technical drawing: elevations of the wardrobe and the desk, with dimension lines and one enlarged detail.',
    'p6.lead':
      'Two pieces made to measure for a client’s suite of 3.88 by 3.48 metres: a desk and a wardrobe. The only project on this list that exists in wood.',
    'p6.did.1': 'Surveying the room and setting the brief with the client',
    'p6.did.2': 'Designing both pieces, studied with doors open and closed',
    'p6.did.3': 'Technical sheets: plans, sections, isometrics and construction details',
    'p6.did.4': 'Documentation the carpenter could build from without me',
    'p6.result':
      'The pieces were built by a professional straight from the sheets. The design held almost entirely. Colours changed, drawers were added to the desk, and the wardrobe mirror was not installed.',
    'p6.link': 'See the technical sheets and photos of the result ↗',

    /* labels inside the drawings */
    'd1.a': 'several accounts', 'd1.b': 'one screen', 'd1.c': 'time zones', 'd1.d': 'availability link',
    'd2.a': 'test result', 'd2.b': 'OCR + AI', 'd2.c': 'organised record', 'd2.d': 'matriarch',
    'd2.e': 'children', 'd2.f': 'partner', 'd2.g': 'parents', 'd2.h': 'her', 'd2.i': 'one family, one place',
    'd3.a': 'message', 'd3.b': 'on script?', 'd3.c': 'yes', 'd3.d': 'answers alone',
    'd3.e': 'no', 'd3.f': 'pauses and calls a person',
    'd3.i': 'flow built without writing code',
    'd4.a': 'plan · modules at 60º', 'd4.b': 'distance', 'd4.c': 'section', 'd4.d': 'open air',
    'd4.e': 'airflow', 'd4.f': 'temporary, modular, demountable cell',
    'd5.a': 'date · time', 'd5.b': 'column measure', 'd5.c': 'green and beige',
    'd6.a': 'elevation · wardrobe', 'd6.b': 'elevation · desk', 'd6.c': 'shelf',
    'd6.d': 'det. 1', 'd6.e': 'schematic · dimensions on the original sheet',

    'met.title': 'How I work',
    'met.1.title': 'Design and UX',
    'met.1.body':
      'User and customer experience, service design, interface, research, wireframing, web and mobile prototyping, design systems and product content.',
    'met.2.title': 'Methods',
    'met.2.body':
      'Design Thinking, Double Diamond, Design Sprint and Scrum. User journeys, empathy maps, service blueprints and personas. OKRs to plan, and CSAT, CES, CR and NPS to measure.',
    'met.3.title': 'Tools',
    'met.3.body':
      'Figma, Adobe Creative Suite, Google Workspace and Microsoft Office, Typeform, GitHub, Python and HTML/CSS. Archicad, from the drawing board years, still in use.',

    'met.edu.title': 'Education',
    'met.edu.1k': '2019 to 2026',
    'met.edu.1': 'Architecture, Urbanism and Design · FAU USP, São Paulo',
    'met.edu.2k': '2024 to 2025',
    'met.edu.2': 'Design exchange · CIDI UNAM, Mexico City',
    'met.edu.3k': '2014 to 2016',
    'met.edu.3': 'Nursing technician · Cotuca, Unicamp, Campinas',

    'met.lang.title': 'Languages',
    'met.lang.pt': 'Portuguese', 'met.lang.ptv': 'Native',
    'met.lang.en': 'English', 'met.lang.env': 'Fluent',
    'met.lang.es': 'Spanish', 'met.lang.esv': 'Fluent',

    'met.recog.title': 'Recognition and participation',
    'met.recog.1': 'Premio Nacional de Diseño, Diseña México: winner in the service and experience design subcategory',
    'met.recog.2': 'Service Design Network: Young Talent Board, remote participation',
    'met.recog.3': 'ARQUISUR: gathering and developing data on São Paulo',
    'met.recog.4': 'Instructor of the beginners Archicad course at FAU USP',
    'met.recog.5': 'Design for Emergency: selected project, covered in Jornal da USP',
    'met.recog.6': 'NASA Space Apps hackathon, covid-19 challenge: prototype of a wearable that transmits heartbeats',
    'met.recog.ph': 'Space reserved for future social proof',

    'cta.title': 'Contact',
    'cta.lead':
      'If something here speaks to what you are building, write to me. I answer in Portuguese, English or Spanish.',
    'cta.mail': 'Email',
    'cta.city': 'City',
    'cta.cityv': 'Campinas, SP, Brazil',
    'cta.feedback': 'Leave a comment: [LINK-FEEDBACK]',

    'foot.note': 'Page made by hand, in HTML and CSS.',
  },

  /* ══════════════════════════════════════ español (Latinoamérica) ══ */
  'es-419': {
    'meta.title': 'Tiemy Higa · Diseñadora de producto y de servicio',
    'meta.description':
      'Proyectos seleccionados de Tiemy Higa: producto digital, diseño de servicio y dibujo técnico. Campinas, Brasil.',
    'meta.langName': 'Español (Latinoamérica)',

    'nav.skip': 'Saltar al contenido',
    'nav.perfil': 'Perfil',
    'nav.trajetoria': 'Trayectoria',
    'nav.projetos': 'Proyectos',
    'nav.metodo': 'Método',
    'nav.cta': 'Hablemos',
    'nav.langLabel': 'Idioma',
    'nav.menuLabel': 'Abrir menú',

    'hero.eyebrow': 'Diseñadora de producto y de servicio · Campinas, Brasil',
    'hero.lead':
      'Diseño productos digitales y los servicios que los rodean. Vengo de la arquitectura, en la FAU USP, y de ahí traje el dibujo técnico: medir antes de cortar, detallar antes de armar. Hoy eso va a la investigación, la interfaz y el design system.',
    'hero.ctaPrimary': 'Ver los seis proyectos',
    'hero.ctaSecondary': 'Hablemos',

    'stamp.now.k': 'Ahora',
    'stamp.now.v': 'Fundadora, Head of Design y CEO · Serinus Tecnologia',
    'stamp.build.k': 'Construyendo',
    'stamp.build.v': 'Cuco Calendar',
    'stamp.also.k': 'También',
    'stamp.also.v': 'Product Owner y Product Designer · Residencia Tecnológica en Salud Digital',
    'stamp.edu.k': 'Formación',
    'stamp.edu.v': 'Arquitectura, Urbanismo y Diseño · FAU USP',
    'stamp.lang.k': 'Idiomas',
    'stamp.lang.v': 'Portugués, inglés y español',

    'perfil.title': 'Perfil',
    'perfil.p1':
      'Trabajo con experiencias digitales accesibles y centradas en quien las usa. Me interesan la estrategia de producto y los problemas reales: los que aparecen cuando alguien intenta hacer algo simple y no puede.',
    'perfil.p2':
      'Mi recorrido es de campo. Presidí una empresa junior y fundé su área comercial. Trabajé en customer success y educación en una empresa de software. Abrí mi propia empresa de tecnología, donde soy CEO y Head of Design. También soy Product Owner y Product Designer en una residencia de salud digital.',
    'perfil.p3':
      'Estudio cómo el diseño moldea el comportamiento y la percepción. En la práctica eso se vuelve investigación con usuarios, flujos dibujados antes que pantallas, un design system que aguanta el crecimiento del equipo y métricas que dicen si la decisión fue buena.',
    'perfil.doing.title': 'De qué me hago cargo',
    'perfil.doing.1': 'Investigación con usuarios y pruebas de usabilidad',
    'perfil.doing.2': 'Flujos, arquitectura de información e interfaz',
    'perfil.doing.3': 'Design system: componentes, tokens y documentación',
    'perfil.doing.4': 'Diseño de servicio y recorrido de punta a punta',
    'perfil.doing.5': 'Contenido de producto y redacción',
    'perfil.doing.6': 'Planificación con OKRs y métricas de experiencia',

    'traj.title': 'Trayectoria',
    'traj.note': 'Siete años entre el tablero de dibujo y el producto.',

    'traj.1.when': 'Desde 2024',
    'traj.1.title': 'Fundadora, Head of Design y CEO · Serinus Tecnologia',
    'traj.1.where': 'Empresa de tecnología propia · remoto',
    'traj.1.body':
      'Armé la empresa y el equipo desde cero absoluto. Respondo por la dirección, por las cuentas y por el producto. Formé los equipos de diseño, producto y marketing, y diseño la experiencia y la interfaz de lo que construimos. El primer producto fue Papagaio.Bot. Después de darlo de baja, pivoteamos: hoy Serinus construye Cuco Calendar.',

    'traj.2.when': 'Desde 2026',
    'traj.2.title': 'Product Owner y Product Designer · Residencia Tecnológica en Salud Digital',
    'traj.2.where': 'InovaUSP y Samsung Ocean · híbrido, São Paulo',
    'traj.2.body':
      'Programa de seis meses para desarrollar soluciones digitales en salud, con inmersión en entornos reales de atención. Estoy en el squad de una aplicación de gestión de la salud familiar, en alianza con FAPESP y el sistema público de salud de Brasil. Me hago cargo del design system y de las entrevistas y pruebas de usabilidad en que se apoya la interfaz.',

    'traj.3.when': '2024 a 2025',
    'traj.3.title': 'Intercambio en Diseño · CIDI UNAM',
    'traj.3.where': 'Centro de Investigaciones de Diseño Industrial · Ciudad de México',
    'traj.3.body':
      'Un año fuera del eje: diseño de servicio, UX, fotografía de producto y color. Volví hablando español con fluidez y con otra referencia de cómo se enseña proyecto.',

    'traj.4.when': '2022 a 2024',
    'traj.4.title': 'Customer Success y Educación · Graphisoft Brasil',
    'traj.4.where': 'Software BIM para arquitectura, ingeniería y construcción · híbrido, São Paulo',
    'traj.4.body':
      'Cuidé el éxito de los estudiantes que usan Archicad en la licencia gratuita, tratando a cada uno como cliente. Revisé y afiné contenidos y artes para el público universitario. Creé productos digitales y físicos para repartir entre los estudiantes. Conduje el Programa de Estudiantes Embajadores de Archicad: proceso, difusión e inscripción. También dicté el curso de Archicad para principiantes en la FAU USP.',

    'traj.5.when': '2019 a 2022',
    'traj.5.title': 'Presidenta · FAUUSP Jr.',
    'traj.5.where': 'Empresa junior de arquitectura, urbanismo y diseño · USP, São Paulo',
    'traj.5.body':
      'Fundé el área comercial en 2020 y multipliqué los ingresos por 15,3. Traje customer success, estrategias de CX y Jobs to Be Done a la casa. En 2021 asumí la presidencia y reescribí los procesos internos con diseño de servicio. Implementé BIM en proyectos reales y organicé hackathons, eventos y alianzas.',

    'proj.title': 'Seis proyectos',
    'proj.note': 'Cinco digitales y uno construido en madera.',

    'meta.period': 'Período',
    'meta.kind': 'Tipo',
    'meta.status': 'Estado',
    'meta.scope': 'Alcance',

    'label.did': 'Qué hice',
    'label.inside': 'Qué tiene adentro',
    'label.platforms': 'Plataformas',
    'label.problem': 'El problema',
    'label.how': 'Cómo funciona',
    'label.idea': 'La idea',
    'label.recog': 'Reconocimiento',
    'label.context': 'Contexto',
    'label.team': 'Equipo',
    'label.brief': 'El pedido',
    'label.result': 'Resultado',
    'label.pivot': 'El pivote',
    'label.building': 'Cómo lo estamos construyendo',
    'label.led': 'Qué lideré',
    'label.designed': 'Qué diseñé',
    'label.ended': 'Cómo terminó',
    'label.visual': 'Decisiones visuales',

    'p1.role': 'Diseño de producto y de marca · Serinus Tecnologia',
    'p1.period': 'Actual',
    'p1.kind': 'Producto digital',
    'p1.status': 'En línea',
    'p1.alt': 'Diagrama: varias cuentas de calendario convergen en una sola grilla semanal, con un riel de husos horarios y un enlace de disponibilidad debajo.',
    'p1.lead':
      'Un agregador de calendarios. Reúne las agendas de las cuentas Google, Microsoft (Outlook) y Apple que la persona elige conectar, y lo muestra todo en una sola pantalla. Es el producto que Serinus construye ahora.',
    'p1.pivot':
      'Papagaio.Bot no prosperó. En vez de insistir, lo cerramos y pivoteamos. Cuco nació de esa decisión y de una lección concreta: en el producto anterior pasamos demasiado tiempo construyendo antes de descubrir que vender sería difícil.',
    'p1.building':
      'Discovery y construcción ocurren juntos. Cada funcionalidad entra, se prueba con usuarios y se ajusta. Corregimos bugs y refinamos flujos al mismo ritmo en que el producto crece. La pregunta "¿alguien quiere esto?" viene antes de que la pantalla esté lista.',
    'p1.did.1': 'Experiencia e interfaz del producto, del flujo a la pantalla final',
    'p1.did.2': 'Identidad visual y design system aplicado a la app y al sitio',
    'p1.did.3': 'Landing page responsiva y las páginas secundarias',
    'p1.did.4': 'Contenido de producto: redacción de interfaz y material de difusión',
    'p1.in.1': 'Crear, editar y mover eventos de cualquier cuenta conectada',
    'p1.in.2': 'Enlace de agendamiento con horarios libres calculados sobre todas las cuentas',
    'p1.in.3': 'Varios husos horarios lado a lado',
    'p1.in.4': 'Mostrar u ocultar cada agenda, incluidas las compartidas',
    'p1.in.5': 'Cumpleaños con la edad y cobro por Pix',
    'p1.platforms': 'web, Windows, macOS, Linux, Android e iOS',

    'p2.role': 'Product Owner y Product Designer · Residencia Tecnológica en Salud Digital',
    'p2.period': '2026',
    'p2.kind': 'Aplicación móvil',
    'p2.status': 'En desarrollo',
    'p2.alt': 'Diagrama: un examen pasa por OCR e IA y se convierte en una ficha organizada; abajo, la matriarca conectada a cuatro perfiles de la familia.',
    'p2.lead':
      'Una aplicación para digitalizar y organizar los documentos y exámenes de salud de la familia. El nombre viene de la samaúma, el árbol que sostiene un trecho entero de selva a su alrededor.',
    'p2.problem':
      'En muchas casas hay una persona que carga la salud de todos: consultas, exámenes, recetas, el historial de los hijos, del cónyuge, de los padres y el suyo. Eso vive disperso entre papel, fotos en el celular y memoria. ÚMA está diseñado para ella.',
    'p2.how.1': 'El OCR lee el documento fotografiado y extrae el texto',
    'p2.how.2': 'Un agente de IA resume y organiza lo leído',
    'p2.how.3': 'Todo se agrupa por persona dentro de un perfil de familia',
    'p2.did.1': 'Creación y mantenimiento del design system en Figma',
    'p2.did.2': 'Entrevistas y pruebas de usabilidad que sustentan la interfaz',
    'p2.did.3': 'Recorrido del usuario, persona y mapa de empatía',
    'p2.did.4': 'Conducción en Double Diamond y Design Sprint, con Scrum',
    'p2.note':
      'El proyecto está en desarrollo en el squad, en alianza con FAPESP y el sistema público de salud de Brasil. Todavía no hay versión pública.',

    'p3.role': 'Fundadora y Head of Design · Serinus Tecnologia',
    'p3.period': '2024 a 2026',
    'p3.kind': 'Producto digital',
    'p3.status': 'Descontinuado',
    'p3.alt': 'Diagrama de flujo: llega un mensaje, el sistema pregunta si está en el guion; si sí responde solo, si no pausa y llama a alguien del equipo.',
    'p3.lead':
      'Automatización de atención y ventas en WhatsApp con IA. Fue el primer producto de Serinus y la razón por la que abrí la empresa. Ya no existe.',
    'p3.led.1': 'Apertura de la empresa y armado del equipo, desde cero absoluto',
    'p3.led.2': 'Formación y conducción de los equipos de diseño, producto y marketing',
    'p3.led.3': 'Dirección de producto: qué entraba, qué quedaba afuera, en qué orden',
    'p3.led.4': 'Planificación con OKRs junto al equipo de desarrollo',
    'p3.led.5': 'La decisión de cerrar el producto y conducir el pivote',
    'p3.des.1': 'Experiencia e interfaz de la extensión para navegador',
    'p3.des.2': 'Editor de flujos de mensajes para quien no programa',
    'p3.des.3': 'Landing pages responsivas y flujos enfocados en la claridad',
    'p3.idea':
      'La automatización de conversaciones suele trabarse en el momento en que la persona se sale del guion. Papagaio.Bot reconocía ese momento: pausaba la conversación y llamaba a alguien del equipo. El resto, la parte repetitiva, lo resolvía solo.',
    'p3.ended':
      'Construimos mucho antes de validar. Cuando el producto estuvo listo, vender resultó difícil y la cuenta no cerraba. Lo cerramos y pivoteamos hacia Cuco Calendar. Es la experiencia que más me enseñó sobre emprender: hoy valido mientras construyo, y sé cuándo parar.',
    'p3.recog':
      'Proyecto ganador de la subcategoría de diseño de servicios y experiencias en el Premio Nacional de Diseño: Diseña México, en 2025.',

    'p4.role': 'Proyecto de concurso · FAUUSP Jr.',
    'p4.kind': 'Arquitectura efímera',
    'p4.status': 'Seleccionado en el desafío',
    'p4.alt': 'Dibujo técnico: planta con módulos hexagonales dispuestos a 60 grados y un corte que muestra la cubierta abierta y la ventilación.',
    'p4.lead':
      'Una célula temporal y modular para apoyar la enseñanza al aire libre durante la pandemia de covid-19. Estructura abierta, montada y desmontada en el patio de la escuela.',
    'p4.context':
      'El desafío internacional Design for Emergency: Semeando Ideias, impulsado por la Northeastern University junto al Museu da Casa Brasileira y la FAU USP, pedía respuestas de proyecto para la emergencia sanitaria. Se inscribieron cuarenta propuestas y veinte fueron seleccionadas, repartidas en cuatro categorías. Espaço 60º entró por la de apoyo comunitario.',
    'p4.team':
      'Proyecto colectivo de FAUUSP Jr., con André Góes, Gabriel Paraizo, Giselle Jensen, Rebecca Cavalcante y yo. El resultado también salió en el Jornal da USP.',
    'p4.linkSheet': 'Lámina de entrega, PDF ↗',
    'p4.linkResult': 'Resultado del desafío ↗',
    'p4.linkCat': 'Catálogo de ideas ↗',

    'p5.title': 'Blog de Daquisu',
    'p5.role': 'Diseño de interfaz · proyecto para terceros',
    'p5.kind': 'Sitio editorial',
    'p5.status': 'En línea',
    'p5.alt': 'Wireframe: encabezado con navegación y tres tarjetas de artículo, con la paleta verde y beige especificada debajo.',
    'p5.lead':
      'Diseño de interfaz para un blog personal: textos sobre vida universitaria, tecnología, intercambio y lo que vaya cabiendo. Primera persona, publicado sin apuro.',
    'p5.brief':
      'Daquisu pidió un sitio con cara manual y artesanal, que no pareciera salido de una plantilla. Y que fuera cómodo de leer: nada de interfaz disputándole atención al texto.',
    'p5.vis.1': 'Íconos y logotipo dibujados a mano por mí, uno por uno',
    'p5.vis.2': 'Verde como color de marca, el favorito de Daquisu',
    'p5.vis.3': 'Beige en el fondo, para recordar la hoja de papel',
    'p5.vis.4': 'Jerarquía llevada por la tipografía y el espacio, sin color compitiendo',
    'p5.did.1': 'Navegación y arquitectura de las secciones',
    'p5.did.2': 'Lista de artículos en tarjetas con imagen, título, fecha y tiempo de lectura',
    'p5.did.3': 'Escala tipográfica y medida de columna para lectura larga',
    'p5.did.4': 'Sistema de categorías y las piezas gráficas del sitio',

    'p6.title': 'Escritorio y clóset',
    'p6.role': 'Proyecto de mobiliario y dibujo técnico · freelance',
    'p6.kind': 'Proyecto físico',
    'p6.scope': 'Suite de 3,88 × 3,48 m',
    'p6.status': 'Construido',
    'p6.alt': 'Dibujo técnico: elevaciones del clóset y del escritorio, con líneas de cota y un detalle ampliado.',
    'p6.lead':
      'Dos muebles a medida para la suite de una clienta, de 3,88 por 3,48 metros: un escritorio y un clóset. El único proyecto de esta lista que existe en madera.',
    'p6.did.1': 'Levantamiento del ambiente y definición del programa con la clienta',
    'p6.did.2': 'Proyecto de las dos piezas, estudiadas con puertas abiertas y cerradas',
    'p6.did.3': 'Láminas técnicas: plantas, cortes, isometrías y detalles constructivos',
    'p6.did.4': 'Documentación para que el carpintero ejecutara sin depender de mí',
    'p6.result':
      'Los muebles fueron armados por un profesional a partir de las láminas. El proyecto se mantuvo casi entero. Cambiaron los colores, entraron cajones en el escritorio y el espejo del clóset no se instaló.',
    'p6.link': 'Ver las láminas técnicas y las fotos del resultado ↗',

    /* leyendas dentro de los dibujos */
    'd1.a': 'varias cuentas', 'd1.b': 'una pantalla', 'd1.c': 'husos', 'd1.d': 'enlace de disponibilidad',
    'd2.a': 'examen', 'd2.b': 'OCR + IA', 'd2.c': 'ficha organizada', 'd2.d': 'matriarca',
    'd2.e': 'hijos', 'd2.f': 'cónyuge', 'd2.g': 'padres', 'd2.h': 'ella', 'd2.i': 'una familia, un solo lugar',
    'd3.a': 'mensaje', 'd3.b': '¿en el guion?', 'd3.c': 'sí', 'd3.d': 'responde solo',
    'd3.e': 'no', 'd3.f': 'pausa y llama a la persona',
    'd3.i': 'flujo armado sin escribir código',
    'd4.a': 'planta · módulos a 60º', 'd4.b': 'distancia', 'd4.c': 'corte', 'd4.d': 'aire libre',
    'd4.e': 'ventilación', 'd4.f': 'célula temporal, modular, desmontable',
    'd5.a': 'fecha · tiempo', 'd5.b': 'medida de columna', 'd5.c': 'verde y beige',
    'd6.a': 'elevación · clóset', 'd6.b': 'elevación · escritorio', 'd6.c': 'repisa',
    'd6.d': 'det. 1', 'd6.e': 'esquema · cotas en la lámina original',

    'met.title': 'Cómo trabajo',
    'met.1.title': 'Diseño y UX',
    'met.1.body':
      'Experiencia de usuario y de cliente, diseño de servicio, interfaz, investigación, wireframes, prototipos web y móviles, design systems y contenido de producto.',
    'met.2.title': 'Métodos',
    'met.2.body':
      'Design Thinking, Double Diamond, Design Sprint y Scrum. Recorrido del usuario, mapa de empatía, service blueprint y personas. OKRs para planificar y CSAT, CES, CR y NPS para medir.',
    'met.3.title': 'Herramientas',
    'met.3.body':
      'Figma, Adobe Creative Suite, Google Workspace y Microsoft Office, Typeform, GitHub, Python y HTML/CSS. Archicad, de los años de tablero, que sigo usando.',

    'met.edu.title': 'Formación',
    'met.edu.1k': '2019 a 2026',
    'met.edu.1': 'Arquitectura, Urbanismo y Diseño · FAU USP, São Paulo',
    'met.edu.2k': '2024 a 2025',
    'met.edu.2': 'Intercambio en Diseño · CIDI UNAM, Ciudad de México',
    'met.edu.3k': '2014 a 2016',
    'met.edu.3': 'Técnica en Enfermería · Cotuca, Unicamp, Campinas',

    'met.lang.title': 'Idiomas',
    'met.lang.pt': 'Portugués', 'met.lang.ptv': 'Nativo',
    'met.lang.en': 'Inglés', 'met.lang.env': 'Fluido',
    'met.lang.es': 'Español', 'met.lang.esv': 'Fluido',

    'met.recog.title': 'Reconocimientos y participaciones',
    'met.recog.1': 'Premio Nacional de Diseño, Diseña México: ganadora en la subcategoría de diseño de servicios y experiencias',
    'met.recog.2': 'Service Design Network: Young Talent Board, participación remota',
    'met.recog.3': 'ARQUISUR: recolección y desarrollo de datos de São Paulo',
    'met.recog.4': 'Instructora del curso de Archicad para principiantes en la FAU USP',
    'met.recog.5': 'Design for Emergency: proyecto seleccionado y publicación en el Jornal da USP',
    'met.recog.6': 'Hackathon NASA Space Apps, desafío covid-19: prototipo de un wearable que transmite latidos',
    'met.recog.ph': 'Espacio reservado para prueba social futura',

    'cta.title': 'Contacto',
    'cta.lead':
      'Si algo de acá conversa con lo que estás construyendo, escribime. Respondo en portugués, inglés o español.',
    'cta.mail': 'Correo',
    'cta.city': 'Ciudad',
    'cta.cityv': 'Campinas, SP, Brasil',
    'cta.feedback': 'Dejar un comentario: [LINK-FEEDBACK]',

    'foot.note': 'Página hecha a mano, en HTML y CSS.',
  },

  };

  /* ─────────────────────────────────────────────────────────── motor ── */

  function readStoredLang() {
    try { return window.localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function writeStoredLang(lang) {
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* modo privado */ }
  }

  /** Escolhe o idioma: ?lang= → escolha salva → navegador → padrão. */
  function detectLang() {
    const fromQuery = new URLSearchParams(location.search).get('lang');
    if (fromQuery && DICT[fromQuery]) return fromQuery;

    const stored = readStoredLang();
    if (stored && DICT[stored]) return stored;

    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    const base = nav.toLowerCase().split('-')[0];
    if (base === 'pt') return 'pt-BR';
    if (base === 'es') return 'es-419';
    if (base === 'en') return 'en-US';
    return DEFAULT_LANG;
  }

  function t(key, lang) {
    const table = DICT[lang] || DICT[DEFAULT_LANG];
    if (table[key] != null) return table[key];
    if (DICT[DEFAULT_LANG][key] != null) return DICT[DEFAULT_LANG][key];
    return key;
  }

  /** `es-419` é uma tag BCP-47 válida (América Latina); vai literal em <html lang>. */
  function applyLang(code) {
    const lang = DICT[code] ? code : DEFAULT_LANG;

    document.documentElement.lang = lang;
    document.title = t('meta.title', lang);

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.description', lang));

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t('meta.title', lang));

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t('meta.description', lang));

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', lang.replace('-', '_'));

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'), lang);
    });

    // data-i18n-attr="aria-label:nav.menuLabel; title:foo.bar"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        const parts = pair.split(':');
        const attr = (parts[0] || '').trim();
        const key = (parts[1] || '').trim();
        if (attr && key) el.setAttribute(attr, t(key, lang));
      });
    });

    document.querySelectorAll('[data-lang-option]').forEach(function (btn) {
      const on = btn.getAttribute('data-lang-option') === lang;
      btn.setAttribute('aria-checked', String(on));
      btn.classList.toggle('is-active', on);
    });

    const current = document.querySelector('[data-lang-current]');
    if (current) {
      const meta = LANGS.filter(function (l) { return l.code === lang; })[0];
      current.textContent = meta ? meta.short : lang;
    }

    writeStoredLang(lang);
    document.dispatchEvent(new CustomEvent('tiemy:langchange', { detail: { lang: lang } }));
  }

  window.PortfolioI18n = {
    DICT: DICT,
    LANGS: LANGS,
    DEFAULT_LANG: DEFAULT_LANG,
    detectLang: detectLang,
    applyLang: applyLang,
    t: t,
  };
})(window, document);
