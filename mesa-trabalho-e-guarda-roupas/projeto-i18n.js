/* Página do projeto de mobiliário.
 * Reaproveita o motor de tradução da home (assets/js/i18n.js) e só acrescenta
 * as chaves desta página, sobrescrevendo meta.title e meta.description.
 * Precisa rodar depois de i18n.js e antes de main.js.
 */
(function (window) {
  'use strict';

  const i18n = window.PortfolioI18n;
  if (!i18n) return;

  const PAGE = {
    'pt-BR': {
      'meta.title': 'Mesa de trabalho e guarda-roupas · Tiemy Higa',
      'meta.description':
        'Projeto de mobiliário sob medida e desenho técnico: plantas, cortes, isométricas, detalhes construtivos e as fotos do resultado.',

      'm6.back': 'Voltar para o início',
      'm6.eyebrow': 'Projeto de mobiliário e desenho técnico · freelance',
      'm6.title': 'Mesa de trabalho e guarda-roupas',
      'm6.lead':
        'Projeto individual, feito como freelance. Duas peças sob medida para a suíte de 3,88 por 3,48 metros de uma cliente: uma mesa de trabalho e um guarda-roupas. A entrega foram as pranchas técnicas, completas o bastante para o marceneiro executar sem depender de mim.',

      'm6.k1': 'Tipo', 'm6.v1': 'Projeto físico',
      'm6.k2': 'Escopo', 'm6.v2': 'Suíte de 3,88 × 3,48 m',
      'm6.k3': 'Entrega', 'm6.v3': 'Pranchas técnicas de duas peças',
      'm6.k4': 'Situação', 'm6.v4': 'Construído',

      'm6.s1': 'Plantas',
      'm6.s1note': 'O quarto levantado e os dois móveis posicionados nele.',
      'm6.c.planta1': 'Planta baixa do quarto',
      'm6.c.planta2': 'Planta baixa dos móveis',

      'm6.s2': 'Seções de corte',
      'm6.s2note': 'Onde cada corte passa, marcado em planta.',
      'm6.c.sec1': 'Mesa de trabalho',
      'm6.c.sec2': 'Guarda-roupas',

      'm6.s3': 'Cortes da mesa de trabalho',
      'm6.c.ma': 'Corte A', 'm6.c.mb': 'Corte B', 'm6.c.mc': 'Corte C', 'm6.c.md': 'Corte D',
      'm6.c.det1': 'Detalhe 1',

      'm6.s4': 'Cortes do guarda-roupas',
      'm6.c.ga': 'Corte A', 'm6.c.gb': 'Corte B', 'm6.c.gc': 'Corte C',
      'm6.c.det23': 'Detalhes 2 e 3',

      'm6.s5': 'Isométricas',
      'm6.s5note': 'As duas peças estudadas com as portas fechadas e abertas.',
      'm6.c.im1': 'Mesa de trabalho, portas fechadas',
      'm6.c.im2': 'Mesa de trabalho, portas abertas',
      'm6.c.ig1': 'Guarda-roupas, portas fechadas',
      'm6.c.ig2': 'Guarda-roupas, portas abertas',

      'm6.s6': 'Resultado',
      'm6.r1':
        'Depois da entrega, as pranchas técnicas foram para o profissional especialista montar os mobiliários.',
      'm6.r2':
        'Grande parte do projeto se manteve. Mudaram algumas cores, entraram gavetas na mesa de trabalho e o espelho do guarda-roupas não foi instalado.',
      'm6.r3': 'As fotos a seguir são amadoras, tiradas pela cliente.',
      'm6.c.foto': 'Foto da cliente',

      'm6.footBack': 'Ver os outros projetos',
    },

    'en-US': {
      'meta.title': 'Desk and wardrobe · Tiemy Higa',
      'meta.description':
        'Made to measure furniture design and technical drawing: plans, sections, isometrics, construction details and photos of the result.',

      'm6.back': 'Back to the start',
      'm6.eyebrow': 'Furniture design and technical drawing · freelance',
      'm6.title': 'Desk and wardrobe',
      'm6.lead':
        'An individual project, done freelance. Two pieces made to measure for a client’s suite of 3.88 by 3.48 metres: a desk and a wardrobe. What I delivered were the technical sheets, complete enough for the carpenter to build from without me.',

      'm6.k1': 'Type', 'm6.v1': 'Physical project',
      'm6.k2': 'Scope', 'm6.v2': 'A 3.88 × 3.48 m suite',
      'm6.k3': 'Delivered', 'm6.v3': 'Technical sheets for two pieces',
      'm6.k4': 'Status', 'm6.v4': 'Built',

      'm6.s1': 'Plans',
      'm6.s1note': 'The room as surveyed, and the two pieces placed in it.',
      'm6.c.planta1': 'Floor plan of the room',
      'm6.c.planta2': 'Floor plan of the furniture',

      'm6.s2': 'Section marks',
      'm6.s2note': 'Where each cut passes, marked on plan.',
      'm6.c.sec1': 'Desk',
      'm6.c.sec2': 'Wardrobe',

      'm6.s3': 'Sections through the desk',
      'm6.c.ma': 'Section A', 'm6.c.mb': 'Section B', 'm6.c.mc': 'Section C', 'm6.c.md': 'Section D',
      'm6.c.det1': 'Detail 1',

      'm6.s4': 'Sections through the wardrobe',
      'm6.c.ga': 'Section A', 'm6.c.gb': 'Section B', 'm6.c.gc': 'Section C',
      'm6.c.det23': 'Details 2 and 3',

      'm6.s5': 'Isometrics',
      'm6.s5note': 'Both pieces studied with the doors closed and open.',
      'm6.c.im1': 'Desk, doors closed',
      'm6.c.im2': 'Desk, doors open',
      'm6.c.ig1': 'Wardrobe, doors closed',
      'm6.c.ig2': 'Wardrobe, doors open',

      'm6.s6': 'Result',
      'm6.r1':
        'After delivery, the technical sheets went to the specialist who built the pieces.',
      'm6.r2':
        'Most of the design held. Some colours changed, drawers were added to the desk, and the wardrobe mirror was not installed.',
      'm6.r3': 'The photos below are amateur ones, taken by the client.',
      'm6.c.foto': 'Photo by the client',

      'm6.footBack': 'See the other projects',
    },

    'es-419': {
      'meta.title': 'Escritorio y clóset · Tiemy Higa',
      'meta.description':
        'Proyecto de mobiliario a medida y dibujo técnico: plantas, cortes, isometrías, detalles constructivos y fotos del resultado.',

      'm6.back': 'Volver al inicio',
      'm6.eyebrow': 'Proyecto de mobiliario y dibujo técnico · freelance',
      'm6.title': 'Escritorio y clóset',
      'm6.lead':
        'Proyecto individual, hecho como freelance. Dos piezas a medida para la suite de 3,88 por 3,48 metros de una clienta: un escritorio y un clóset. La entrega fueron las láminas técnicas, completas al punto de que el carpintero pudiera ejecutar sin depender de mí.',

      'm6.k1': 'Tipo', 'm6.v1': 'Proyecto físico',
      'm6.k2': 'Alcance', 'm6.v2': 'Suite de 3,88 × 3,48 m',
      'm6.k3': 'Entrega', 'm6.v3': 'Láminas técnicas de dos piezas',
      'm6.k4': 'Estado', 'm6.v4': 'Construido',

      'm6.s1': 'Plantas',
      'm6.s1note': 'El cuarto levantado y los dos muebles ubicados en él.',
      'm6.c.planta1': 'Planta del cuarto',
      'm6.c.planta2': 'Planta de los muebles',

      'm6.s2': 'Secciones de corte',
      'm6.s2note': 'Por dónde pasa cada corte, marcado en planta.',
      'm6.c.sec1': 'Escritorio',
      'm6.c.sec2': 'Clóset',

      'm6.s3': 'Cortes del escritorio',
      'm6.c.ma': 'Corte A', 'm6.c.mb': 'Corte B', 'm6.c.mc': 'Corte C', 'm6.c.md': 'Corte D',
      'm6.c.det1': 'Detalle 1',

      'm6.s4': 'Cortes del clóset',
      'm6.c.ga': 'Corte A', 'm6.c.gb': 'Corte B', 'm6.c.gc': 'Corte C',
      'm6.c.det23': 'Detalles 2 y 3',

      'm6.s5': 'Isometrías',
      'm6.s5note': 'Las dos piezas estudiadas con las puertas cerradas y abiertas.',
      'm6.c.im1': 'Escritorio, puertas cerradas',
      'm6.c.im2': 'Escritorio, puertas abiertas',
      'm6.c.ig1': 'Clóset, puertas cerradas',
      'm6.c.ig2': 'Clóset, puertas abiertas',

      'm6.s6': 'Resultado',
      'm6.r1':
        'Después de la entrega, las láminas técnicas fueron al profesional especialista que armó los muebles.',
      'm6.r2':
        'Gran parte del proyecto se mantuvo. Cambiaron algunos colores, entraron cajones en el escritorio y el espejo del clóset no se instaló.',
      'm6.r3': 'Las fotos siguientes son amateurs, tomadas por la clienta.',
      'm6.c.foto': 'Foto de la clienta',

      'm6.footBack': 'Ver los otros proyectos',
    },
  };

  Object.keys(PAGE).forEach(function (lang) {
    if (!i18n.DICT[lang]) return;
    Object.keys(PAGE[lang]).forEach(function (key) {
      i18n.DICT[lang][key] = PAGE[lang][key];
    });
  });
})(window);
