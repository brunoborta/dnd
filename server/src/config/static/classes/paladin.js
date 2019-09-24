export default {
  1: {
    bba: 1,
    for: 2,
    ref: 0,
    will: 0,
    habilities: [
      [
        'Aura do bem',
        'O poder da aura do bem de um paladino equivale ao seu nível de paladino',
      ],
      [
        'Detectar o Mal',
        'Paladinos podem utilizar detectar maldade sem limite diário',
      ],
    ],
    special: [
      {
        label: 'Destruir o mal',
        description:
          'Uma vez por dia, um paladino pode tentar destruir o mal usando um ataque corporal regular. Ele adiciona o seu modificador de Carisma (se houver) na jogada de ataque, causando 1 ponto de dano adicional por nivel de paladino. Por exemplo, um paladino de 13o nível, empunhando uma espada longa, causaria 1d8 + 13 pontos de dano, mais o bonus adicional da Força e outros efeitos mágicos que normalmente se aplicam. Se o paladino, acidentalmente, tentar destruir uma criatura que não seja maligna, a habilidade não surtirá efeito, mas não poderá ser utilizada novamente naquele dia.',
        control: {
          type: 'damage',
          xPerDay: 1,
          alwaysActive: false,
          extraDamage: 1,
          mod: 'CHA',
        },
      },
    ],
    feats: 0,
    spells: [null, null, null, null],
    maxSpellLevel: 4,
    weapons: ['simples', 'comum'],
    armor: ['leve', 'media', 'pesada'],
    shield: true,
    bodyShield: false,
  },
  2: {
    bba: 2,
    for: 3,
    ref: 0,
    will: 0,
    habilities: [
      [
        'Aura do bem',
        'O poder da aura do bem de um paladino equivale ao seu nível de paladino',
      ],
      [
        'Detectar o Mal',
        'Paladinos podem utilizar detectar maldade sem limite diário',
      ],
    ],
    special: [
      {
        label: 'Destruir o mal',
        level: 1,
        description:
          'Uma vez por dia, um paladino pode tentar destruir o mal usando um ataque corporal regular. Ele adiciona o seu modificador de Carisma (se houver) na jogada de ataque, causando 1 ponto de dano adicional por nivel de paladino. Por exemplo, um paladino de 13o nível, empunhando uma espada longa, causaria 1d8 + 13 pontos de dano, mais o bonus adicional da Força e outros efeitos mágicos que normalmente se aplicam. Se o paladino, acidentalmente, tentar destruir uma criatura que não seja maligna, a habilidade não surtirá efeito, mas não poderá ser utilizada novamente naquele dia.',
        control: {
          type: 'damage',
          xPerDay: 1,
          alwaysActive: false,
          extraDamage: 2,
          mod: 'CHA',
        },
      },
      {
        label: 'Graça divina',
        level: 2,
        description:
          'A partir do nível 2, o paladino adquire um bonus equivalente ao seu modificador de Carisma (se houver) em todos seus testes de resistência.',
        control: {
          type: 'resistence',
          xPerDay: null,
          alwaysActive: true,
          mod: 'CHA',
        },
      },
      {
        label: 'Cura pelas mãos',
        level: 2,
        description:
          'A partir do nível 2, o paladino com carisma 12 ou mais será capaz de cyrar ferimentos (dele ou de outras pessoas) por meio do toque. A cada dia, ele consegue recuperar uma quantidade de pontos de vida equivalente ao seu nivel de paladino multiplicado pelo seu modificador de Carisma (se houver). Por exemplo, um paladino de nível 7 que tenha Carisma 16 (+3 de modificador) pode curar 21 pontos de dano a cada dia. O personagem pode dividir esse valor entre diversos personagens, e não precisa utilizá-lo em uma única ocasião. Ativar a cura pelas mãos exige uma ação padrão. Por outro lado, o paladino é capaz de usar parte ou todo seu poder de cura para causar dano em mortos-vivos. Usar a habilidade dessa maneira requer um ataque de toque bem-sucedido que não provoca ataques de oportunidade. O paladino decide quantos pontos de seu limite diário utilizará depois de tocar com sucesso o morto-vivo.',
        control: {
          type: 'pv',
          base: 2,
          operator: 'times',
          mod: 'CHA',
          requirement: [['CHA', 12]],
        },
      },
    ],
    feats: 0,
    spells: [null, null, null, null],
    maxSpellLevel: 4,
    weapons: ['simples', 'comum'],
    armor: ['leve', 'media', 'pesada'],
    shield: true,
    bodyShield: false,
  },
  3: {
    bba: 3,
    for: 3,
    ref: 1,
    will: 1,
    habilities: [
      [
        'Aura do bem',
        'O poder da aura do bem de um paladino equivale ao seu nível de paladino',
      ],
      [
        'Detectar o mal',
        'Paladinos podem utilizar detectar maldade sem limite diário',
      ],
      [
        'Aura de coragem',
        'A partir no nível 3, um paladino será imune ao medo (mágico ou não). Qualquer aliado que se encontre num raio de 3m do paladino recebe +4 de bonus de moral em todos os testes de resistência contra efeitos de medo. Essa habilidade funciona enquanto o paladino estiver consciente, mas não quando estiver inconsciente ou morto.',
      ],
      [
        'Saúde divina',
        'A partir no nível 3, um paladino adquire imunidade contra todas as doenças, inclusive as doenças sobrenaturais e mágicas (como podridão da múmia e a licantropia).',
      ],
    ],
    special: [
      {
        label: 'Destruir o mal',
        level: 1,
        description:
          'Uma vez por dia, um paladino pode tentar destruir o mal usando um ataque corporal regular. Ele adiciona o seu modificador de Carisma (se houver) na jogada de ataque, causando 1 ponto de dano adicional por nivel de paladino. Por exemplo, um paladino de 13o nível, empunhando uma espada longa, causaria 1d8 + 13 pontos de dano, mais o bonus adicional da Força e outros efeitos mágicos que normalmente se aplicam. Se o paladino, acidentalmente, tentar destruir uma criatura que não seja maligna, a habilidade não surtirá efeito, mas não poderá ser utilizada novamente naquele dia.',
        control: {
          type: 'damage',
          xPerDay: 1,
          extraDamage: 3,
          mod: 'CHA',
        },
      },
      {
        label: 'Graça divina',
        level: 2,
        description:
          'A partir do nível 2, o paladino adquire um bonus equivalente ao seu modificador de Carisma (se houver) em todos seus testes de resistência.',
        control: {
          type: 'resistence',
          alwaysActive: true,
          mod: 'CHA',
        },
      },
      {
        label: 'Cura pelas mãos',
        level: 2,
        description:
          'A partir do nível 2, o paladino com carisma 12 ou mais será capaz de cyrar ferimentos (dele ou de outras pessoas) por meio do toque. A cada dia, ele consegue recuperar uma quantidade de pontos de vida equivalente ao seu nivel de paladino multiplicado pelo seu modificador de Carisma (se houver). Por exemplo, um paladino de nível 7 que tenha Carisma 16 (+3 de modificador) pode curar 21 pontos de dano a cada dia. O personagem pode dividir esse valor entre diversos personagens, e não precisa utilizá-lo em uma única ocasião. Ativar a cura pelas mãos exige uma ação padrão. Por outro lado, o paladino é capaz de usar parte ou todo seu poder de cura para causar dano em mortos-vivos. Usar a habilidade dessa maneira requer um ataque de toque bem-sucedido que não provoca ataques de oportunidade. O paladino decide quantos pontos de seu limite diário utilizará depois de tocar com sucesso o morto-vivo.',
        control: {
          type: 'pv',
          base: 3,
          operator: 'times',
          mod: 'CHA',
          requirement: [['CHA', 12]],
        },
      },
    ],
    feats: 0,
    spells: [null, null, null, null],
    maxSpellLevel: 4,
    weapons: ['simples', 'comum'],
    armor: ['leve', 'media', 'pesada'],
    shield: true,
    bodyShield: false,
  },
  4: {
    bba: 4,
    for: 4,
    ref: 1,
    will: 1,
    habilities: [
      [
        'Aura do bem',
        'O poder da aura do bem de um paladino equivale ao seu nível de paladino',
      ],
      [
        'Detectar o mal',
        'Paladinos podem utilizar detectar maldade sem limite diário',
      ],
      [
        'Aura de coragem',
        'A partir no nível 3, um paladino será imune ao medo (mágico ou não). Qualquer aliado que se encontre num raio de 3m do paladino recebe +4 de bonus de moral em todos os testes de resistência contra efeitos de medo. Essa habilidade funciona enquanto o paladino estiver consciente, mas não quando estiver inconsciente ou morto.',
      ],
      [
        'Saúde divina',
        'A partir no nível 3, um paladino adquire imunidade contra todas as doenças, inclusive as doenças sobrenaturais e mágicas (como podridão da múmia e a licantropia).',
      ],
    ],
    special: [
      {
        label: 'Destruir o mal',
        level: 1,
        description:
          'Uma vez por dia, um paladino pode tentar destruir o mal usando um ataque corporal regular. Ele adiciona o seu modificador de Carisma (se houver) na jogada de ataque, causando 1 ponto de dano adicional por nivel de paladino. Por exemplo, um paladino de 13o nível, empunhando uma espada longa, causaria 1d8 + 13 pontos de dano, mais o bonus adicional da Força e outros efeitos mágicos que normalmente se aplicam. Se o paladino, acidentalmente, tentar destruir uma criatura que não seja maligna, a habilidade não surtirá efeito, mas não poderá ser utilizada novamente naquele dia.',
        control: {
          type: 'damage',
          xPerDay: 1,
          extraDamage: 4,
          mod: 'CHA',
        },
      },
      {
        label: 'Graça divina',
        level: 2,
        description:
          'A partir do nível 2, o paladino adquire um bonus equivalente ao seu modificador de Carisma (se houver) em todos seus testes de resistência.',
        control: {
          type: 'resistence',
          alwaysActive: true,
          mod: 'CHA',
        },
      },
      {
        label: 'Cura pelas mãos',
        level: 2,
        description:
          'A partir do nível 2, o paladino com carisma 12 ou mais será capaz de curar ferimentos (dele ou de outras pessoas) por meio do toque. A cada dia, ele consegue recuperar uma quantidade de pontos de vida equivalente ao seu nivel de paladino multiplicado pelo seu modificador de Carisma (se houver). Por exemplo, um paladino de nível 7 que tenha Carisma 16 (+3 de modificador) pode curar 21 pontos de dano a cada dia. O personagem pode dividir esse valor entre diversos personagens, e não precisa utilizá-lo em uma única ocasião. Ativar a cura pelas mãos exige uma ação padrão. Por outro lado, o paladino é capaz de usar parte ou todo seu poder de cura para causar dano em mortos-vivos. Usar a habilidade dessa maneira requer um ataque de toque bem-sucedido que não provoca ataques de oportunidade. O paladino decide quantos pontos de seu limite diário utilizará depois de tocar com sucesso o morto-vivo.',
        control: {
          type: 'pv',
          base: 4,
          operator: 'times',
          mod: 'CHA',
          requirement: [['CHA', 12]],
        },
      },
      {
        label: 'Expulsar Mortos-vivos',
        level: 4,
        description:
          'Quando um paladino atinge o nível 4, ele adquire a habilidade sobrenatural de expulsar mortos-vivos. Ele pode usar essa habilidade uma quantidade de vezes por dia equivalente a 3 + seu modificador de Carisma. Ele expulsa mortos-vivos como um clerigo com 3 niveis abaixo do seu nivel de paladino (veja Expulsar e Fascinar Mortos-vivos)',
        control: {
          type: 'xPerDay',
          xPerDay: 3,
          mod: 'CHA',
        },
      },
    ],
    feats: 0,
    spells: [0, null, null, null],
    maxSpellLevel: 4,
    weapons: ['simples', 'comum'],
    armor: ['leve', 'media', 'pesada'],
    shield: true,
    bodyShield: false,
  },
  5: {
    bba: 5,
    for: 4,
    ref: 1,
    will: 1,
    habilities: [
      [
        'Aura do bem',
        'O poder da aura do bem de um paladino equivale ao seu nível de paladino',
      ],
      [
        'Detectar o mal',
        'Paladinos podem utilizar detectar maldade sem limite diário',
      ],
      [
        'Aura de coragem',
        'A partir no nível 3, um paladino será imune ao medo (mágico ou não). Qualquer aliado que se encontre num raio de 3m do paladino recebe +4 de bonus de moral em todos os testes de resistência contra efeitos de medo. Essa habilidade funciona enquanto o paladino estiver consciente, mas não quando estiver inconsciente ou morto.',
      ],
      [
        'Saúde divina',
        'A partir no nível 3, um paladino adquire imunidade contra todas as doenças, inclusive as doenças sobrenaturais e mágicas (como podridão da múmia e a licantropia).',
      ],
      [
        'Montaria Especial',
        'A partir no nível 5, um paladino pode invocar uma montaria tunada.',
      ],
    ],
    special: [
      {
        label: 'Destruir o mal',
        level: 1,
        description:
          'Uma vez por dia, um paladino pode tentar destruir o mal usando um ataque corporal regular. Ele adiciona o seu modificador de Carisma (se houver) na jogada de ataque, causando 1 ponto de dano adicional por nivel de paladino. Por exemplo, um paladino de 13o nível, empunhando uma espada longa, causaria 1d8 + 13 pontos de dano, mais o bonus adicional da Força e outros efeitos mágicos que normalmente se aplicam. Se o paladino, acidentalmente, tentar destruir uma criatura que não seja maligna, a habilidade não surtirá efeito, mas não poderá ser utilizada novamente naquele dia.',
        control: {
          type: 'damage',
          xPerDay: 2,
          extraDamage: 5,
          mod: 'CHA',
        },
      },
      {
        label: 'Graça divina',
        level: 2,
        description:
          'A partir do nível 2, o paladino adquire um bonus equivalente ao seu modificador de Carisma (se houver) em todos seus testes de resistência.',
        control: {
          type: 'resistence',
          alwaysActive: true,
          mod: 'CHA',
        },
      },
      {
        label: 'Cura pelas mãos',
        level: 2,
        description:
          'A partir do nível 2, o paladino com carisma 12 ou mais será capaz de curar ferimentos (dele ou de outras pessoas) por meio do toque. A cada dia, ele consegue recuperar uma quantidade de pontos de vida equivalente ao seu nivel de paladino multiplicado pelo seu modificador de Carisma (se houver). Por exemplo, um paladino de nível 7 que tenha Carisma 16 (+3 de modificador) pode curar 21 pontos de dano a cada dia. O personagem pode dividir esse valor entre diversos personagens, e não precisa utilizá-lo em uma única ocasião. Ativar a cura pelas mãos exige uma ação padrão. Por outro lado, o paladino é capaz de usar parte ou todo seu poder de cura para causar dano em mortos-vivos. Usar a habilidade dessa maneira requer um ataque de toque bem-sucedido que não provoca ataques de oportunidade. O paladino decide quantos pontos de seu limite diário utilizará depois de tocar com sucesso o morto-vivo.',
        control: {
          type: 'pv',
          base: 4,
          operator: 'times',
          mod: 'CHA',
          requirement: [['CHA', 12]],
        },
      },
      {
        label: 'Expulsar Mortos-vivos',
        level: 4,
        description:
          'Quando um paladino atinge o nível 4, ele adquire a habilidade sobrenatural de expulsar mortos-vivos. Ele pode usar essa habilidade uma quantidade de vezes por dia equivalente a 3 + seu modificador de Carisma. Ele expulsa mortos-vivos como um clerigo com 3 niveis abaixo do seu nivel de paladino (veja Expulsar e Fascinar Mortos-vivos)',
        control: {
          type: 'xPerDay',
          xPerDay: 3,
          mod: 'CHA',
        },
      },
    ],
    feats: 0,
    spells: [0, null, null, null],
    maxSpellLevel: 4,
    weapons: ['simples', 'comum'],
    armor: ['leve', 'media', 'pesada'],
    shield: true,
    bodyShield: false,
  },
};
