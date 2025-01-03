import { DestinationType } from '../types/destinations';

export const destinations: DestinationType[] = [
  {
    id: 1,
    name: 'Porto Seguro',
    image: 'https://cdn.pixabay.com/photo/2014/11/20/16/54/colored-ribbons-539454_1280.jpg',
    price: 2499,
    groupSize: '2-8',
    dates: 'Fev - Mar - Abr - Ago - Set - Out - Dez 2025',
    whatsapp: 'https://wa.me/5538998850202',
    availability: 1,
    maxSpots: 12,
    description: 'Venha conhecer Porto Seguro: história, praias paradisíacas e o encanto da Bahia em cada amanhecer!',
    duration: '5 dias / 4 noites',
    location: 'Porto Seguro, Bahia',
    included: [
      'Hospedagem em resort all-inclusive',
      'Passeio de catamarã às piscinas naturais',
      'Transfer aeroporto-hotel-aeroporto',
      'Café da manhã completo',
      'Guia local especializado'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Chegada em Maragogi',
        activities: [
          'Check-in no resort',
          'Drink de boas-vindas',
          'Jantar de confraternização'
        ]
      },
      {
        day: 2,
        title: 'Piscinas Naturais',
        activities: [
          'Café da manhã no hotel',
          'Passeio de catamarã',
          'Mergulho nas piscinas naturais',
          'Almoço em restaurante local'
        ]
      },
      {
        day: 3,
        title: 'Praias Paradisíacas',
        activities: [
          'Café da manhã no hotel',
          'Tour pelas praias locais',
          'Tempo livre para banho de mar',
          'Pôr do sol na praia'
        ]
      },
      {
        day: 4,
        title: 'Dia Livre',
        activities: [
          'Café da manhã no hotel',
          'Atividades opcionais',
          'Aproveite a infraestrutura do resort',
          'Jantar de despedida'
        ]
      },
      {
        day: 5,
        title: 'Retorno',
        activities: [
          'Café da manhã no hotel',
          'Check-out',
          'Transfer para o aeroporto'
        ]
      }
    ],
    paymentMethods: [
      'Cartão de crédito em até 12x',
      'PIX com 5% de desconto',
      'Transferência bancária'
    ],
    gallery: [
      'https://cdn.pixabay.com/photo/2017/02/08/12/22/trancoso-2048683_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/04/24/20/33/praia-2257767_1280.jpg',
      'https://cdn.pixabay.com/photo/2014/07/29/15/35/beach-404633_1280.jpg'
    ]
  },
  {
    id: 2,
    name: 'Balneário Camboriú',
    image: 'https://cdn.pixabay.com/photo/2020/04/24/00/51/balneario-camboriu-5084547_1280.jpg',
    price: 4899,
    groupSize: '4-12',
    dates: 'Out 2025',
    whatsapp: 'https://wa.me/5538998850202',
    availability: 6,
    maxSpots: 10,
    description: 'Venha conhecer Balneário Camboriú: praias deslumbrantes, diversão sem fim e momentos inesquecíveis!',
    duration: '6 dias / 5 noites',
    location: 'Balneário Camboriú, Santa Catarina',
    included: [
      'Passagem aérea ida e volta',
      'Hospedagem em pousada',
      'Taxa de preservação ambiental',
      'Passeios com guia local',
      'Café da manhã'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Chegada na Ilha',
        activities: [
          'Recepção no aeroporto',
          'Transfer para pousada',
          'Tour de reconhecimento',
          'Jantar de boas-vindas'
        ]
      },
      {
        day: 2,
        title: 'Baía dos Porcos e Praia do Sancho',
        activities: [
          'Café da manhã',
          'Trilha até a Baía dos Porcos',
          'Snorkeling',
          'Visita à Praia do Sancho'
        ]
      },
      {
        day: 3,
        title: 'Passeio de Barco',
        activities: [
          'Café da manhã',
          'Volta pela ilha de barco',
          'Mergulho com tartarugas',
          'Pôr do sol no Forte dos Remédios'
        ]
      },
      {
        day: 4,
        title: 'Praia do Sueste',
        activities: [
          'Café da manhã',
          'Mergulho na Praia do Sueste',
          'Visita ao Projeto Tamar',
          'Tempo livre'
        ]
      },
      {
        day: 5,
        title: 'Praias e Mirantes',
        activities: [
          'Café da manhã',
          'Visita aos principais mirantes',
          'Praia do Cachorro',
          'Jantar de despedida'
        ]
      },
      {
        day: 6,
        title: 'Retorno',
        activities: [
          'Café da manhã',
          'Últimas compras',
          'Transfer para o aeroporto'
        ]
      }
    ],
    paymentMethods: [
      'Cartão de crédito em até 12x',
      'PIX com 5% de desconto',
      'Transferência bancária'
    ],
    gallery: [
      'https://cdn.pixabay.com/photo/2017/05/23/18/46/santa-catarina-2338119_1280.jpg',
      'https://cdn.pixabay.com/photo/2019/10/09/17/25/beach-4537864_1280.jpg',
      'https://cdn.pixabay.com/photo/2020/04/24/00/51/balneario-camboriu-5084547_1280.jpg'
    ]
  },
  {
    id: 3,
    name: 'Salvador',
    image: 'https://cdn.pixabay.com/photo/2016/02/12/23/40/salvador-1197085_1280.jpg',
    price: 3599,
    groupSize: '2-6',
    dates: 'Out 2025',
    whatsapp: 'https://wa.me/5538998850202',
    availability: 4,
    maxSpots: 6,
    description: 'Venha conhecer Salvador: praias paradisíacas, cultura vibrante e o melhor da Bahia te espera!',
    duration: '4 dias / 3 noites',
    location: 'Salvador, Bahia',
    included: [
      'Transfer aeroporto-hotel',
      'Hospedagem com café da manhã',
      'Passeios em 4x4',
      'Guia especializado',
      'Seguro viagem'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Chegada em Barreirinhas',
        activities: [
          'Transfer do aeroporto',
          'Check-in na pousada',
          'Passeio pelo Rio Preguiças',
          'Pôr do sol nos Pequenos Lençóis'
        ]
      },
      {
        day: 2,
        title: 'Grandes Lençóis',
        activities: [
          'Café da manhã',
          'Passeio de 4x4 aos Grandes Lençóis',
          'Banho nas lagoas',
          'Fotografia nas dunas'
        ]
      },
      {
        day: 3,
        title: 'Atins e Rio Preguiças',
        activities: [
          'Café da manhã',
          'Visita ao vilarejo de Atins',
          'Passeio de lancha',
          'Farol Preguiças'
        ]
      },
      {
        day: 4,
        title: 'Retorno',
        activities: [
          'Café da manhã',
          'Tempo livre',
          'Transfer para o aeroporto'
        ]
      }
    ],
    paymentMethods: [
      'Cartão de crédito em até 12x',
      'PIX com 5% de desconto',
      'Transferência bancária'
    ],
    gallery: [
      'https://cdn.pixabay.com/photo/2017/06/07/06/00/el-salvador-2379443_1280.jpg',
      'https://cdn.pixabay.com/photo/2013/09/24/00/55/pelorinho-salvador-de-bahia-185518_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/08/26/20/29/porto-3633275_1280.jpg'
    ]
  },
  {
    id: 4,
    name: 'Jericoacoara',
    image: 'https://images.unsplash.com/photo-1524943999231-42946c42ee78?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2899,
    groupSize: '4-10',
    dates: 'Set 2025',
    whatsapp: 'https://wa.me/5538998850202',
    availability: 6,
    maxSpots: 10,
    description: 'Venha conhecer Jericoacoara: dunas encantadoras, mar cristalino e a paz que você merece!',
    duration: '5 dias / 4 noites',
    location: 'Jericoacoara, Ceará',
    included: [
      'Transfer rodoviário',
      'Hospedagem em pousada',
      'Café da manhã',
      'Guias locais',
      'Equipamentos para trilhas'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Chegada em Lençóis',
        activities: [
          'Recepção na rodoviária',
          'Check-in na pousada',
          'City tour histórico',
          'Jantar típico'
        ]
      },
      {
        day: 2,
        title: 'Morro do Pai Inácio',
        activities: [
          'Café da manhã',
          'Trilha ao Morro do Pai Inácio',
          'Gruta da Lapinha',
          'Pôr do sol no mirante'
        ]
      },
      {
        day: 3,
        title: 'Cachoeira da Fumaça',
        activities: [
          'Café da manhã',
          'Trilha à Cachoeira da Fumaça',
          'Banho em poços naturais',
          'Contemplação da natureza'
        ]
      },
      {
        day: 4,
        title: 'Poço Azul',
        activities: [
          'Café da manhã',
          'Visita ao Poço Azul',
          'Gruta da Pratinha',
          'Jantar de despedida'
        ]
      },
      {
        day: 5,
        title: 'Retorno',
        activities: [
          'Café da manhã',
          'Tempo livre no centro histórico',
          'Transfer para rodoviária'
        ]
      }
    ],
    paymentMethods: [
      'Cartão de crédito em até 12x',
      'PIX com 5% de desconto',
      'Transferência bancária'
    ],
    gallery: [
      'https://cdn.pixabay.com/photo/2015/03/23/19/22/jericoacoara-686519_1280.jpg',
      'https://cdn.pixabay.com/photo/2016/08/21/15/00/jericoacoara-1609845_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/05/27/03/02/dune-2347495_1280.jpg'
    ]
  },
  {
    id: 5,
    name: 'Maceió',
    image: 'https://cdn.pixabay.com/photo/2014/03/26/23/02/maceio-299107_1280.jpg',
    price: 3299,
    groupSize: '2-8',
    dates: 'Jan - Abr 2025',
    whatsapp: 'https://wa.me/5538998850202',
    availability: 3,
    maxSpots: 8,
    description: 'Venha conhecer Maceió: praias de águas cristalinas, coqueirais deslumbrantes e o paraíso alagoano te espera!',
    duration: '4 dias / 3 noites',
    location: 'Maceió, Alagoas',
    included: [
      'Transfer aeroporto-hotel',
      'Hospedagem com café',
      'Equipamentos de mergulho',
      'Ingressos para atrações',
      'Guia especializado'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Chegada em Bonito',
        activities: [
          'Transfer do aeroporto',
          'Check-in na pousada',
          'Visita ao Aquário Natural',
          'Jantar de boas-vindas'
        ]
      },
      {
        day: 2,
        title: 'Gruta do Lago Azul',
        activities: [
          'Café da manhã',
          'Visita à Gruta do Lago Azul',
          'Flutuação no Rio Sucuri',
          'Observação de aves'
        ]
      },
      {
        day: 3,
        title: 'Aventura e Natureza',
        activities: [
          'Café da manhã',
          'Mergulho no Rio da Prata',
          'Cachoeira do Aquidaban',
          'Jantar de despedida'
        ]
      },
      {
        day: 4,
        title: 'Retorno',
        activities: [
          'Café da manhã',
          'Tempo livre',
          'Transfer para o aeroporto'
        ]
      }
    ],
    paymentMethods: [
      'Cartão de crédito em até 12x',
      'PIX com 5% de desconto',
      'Transferência bancária'
    ],
    gallery: [
      'https://cdn.pixabay.com/photo/2017/11/07/00/31/sunset-2925308_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/10/16/16/32/sea-3751843_1280.jpg',
      'https://cdn.pixabay.com/photo/2015/04/28/23/15/travel-744538_1280.jpg'
    ]
  },
  {
    id: 6,
    name: 'Ilhéus',
    image: 'https://cdn.pixabay.com/photo/2018/09/15/18/20/islets-3680039_1280.jpg',
    price: 1999,
    groupSize: '6-12',
    dates: 'Set 2025',
    whatsapp: 'https://wa.me/5538998850202',
    availability: 5,
    maxSpots: 10,
    description: 'Venha conhecer Ilhéus: praias paradisíacas, história rica e o encanto do sul da Bahia!',
    duration: '4 dias / 3 noites',
    location: 'Ilhéus, Bahia',
    included: [
      'Transfer aeroporto-hotel',
      'Hospedagem com café',
      'Equipamentos de mergulho',
      'Ingressos para atrações',
      'Guia especializado'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Chegada em Bonito',
        activities: [
          'Transfer do aeroporto',
          'Check-in na pousada',
          'Visita ao Aquário Natural',
          'Jantar de boas-vindas'
        ]
      },
      {
        day: 2,
        title: 'Gruta do Lago Azul',
        activities: [
          'Café da manhã',
          'Visita à Gruta do Lago Azul',
          'Flutuação no Rio Sucuri',
          'Observação de aves'
        ]
      },
      {
        day: 3,
        title: 'Aventura e Natureza',
        activities: [
          'Café da manhã',
          'Mergulho no Rio da Prata',
          'Cachoeira do Aquidaban',
          'Jantar de despedida'
        ]
      },
      {
        day: 4,
        title: 'Retorno',
        activities: [
          'Café da manhã',
          'Tempo livre',
          'Transfer para o aeroporto'
        ]
      }
    ],
    paymentMethods: [
      'Cartão de crédito em até 12x',
      'PIX com 5% de desconto',
      'Transferência bancária'
    ],
    gallery: [
      'https://cdn.pixabay.com/photo/2017/06/15/17/24/beach-2406096_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/12/12/14/58/islets-3014868_1280.jpg',
      'https://cdn.pixabay.com/photo/2015/02/27/15/36/surf-652262_960_720.jpg'
    ]
  },
  {
    id: 7,
    name: 'Cabo Frio',
    image: 'https://cdn.pixabay.com/photo/2017/07/15/20/53/cabo-frio-2507716_1280.jpg',
    price: 2999,
    groupSize: '8-16',
    dates: 'Abr - Ago 2025',
    whatsapp: 'https://wa.me/5538998850202',
    availability: 7,
    maxSpots: 10,
    description: 'Venha conhecer Cabo Frio: águas cristalinas, dunas de areia branca e um destino perfeito para relaxar e se aventurar!',
    duration: '4 dias / 3 noites',
    location: 'Cabo Frio, Rio de Janeiro',
    included: [
      'Transfer aeroporto-hotel',
      'Hospedagem com café',
      'Equipamentos de mergulho',
      'Ingressos para atrações',
      'Guia especializado'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Chegada em Bonito',
        activities: [
          'Transfer do aeroporto',
          'Check-in na pousada',
          'Visita ao Aquário Natural',
          'Jantar de boas-vindas'
        ]
      },
      {
        day: 2,
        title: 'Gruta do Lago Azul',
        activities: [
          'Café da manhã',
          'Visita à Gruta do Lago Azul',
          'Flutuação no Rio Sucuri',
          'Observação de aves'
        ]
      },
      {
        day: 3,
        title: 'Aventura e Natureza',
        activities: [
          'Café da manhã',
          'Mergulho no Rio da Prata',
          'Cachoeira do Aquidaban',
          'Jantar de despedida'
        ]
      },
      {
        day: 4,
        title: 'Retorno',
        activities: [
          'Café da manhã',
          'Tempo livre',
          'Transfer para o aeroporto'
        ]
      }
    ],
    paymentMethods: [
      'Cartão de crédito em até 12x',
      'PIX com 5% de desconto',
      'Transferência bancária'
    ],
    gallery: [
      'https://cdn.pixabay.com/photo/2017/07/15/20/54/cabo-frio-2507720_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/05/31/02/47/arraial-do-cabo-2358886_1280.jpg',
      'https://cdn.pixabay.com/photo/2020/05/06/07/05/arraial-do-cabo-5136403_1280.jpg'
    ]
  }
];