const continents = {
  europe: {
    name: 'Europa',
    description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
    countries: 50,
    languages: 60,
    top100cities: 27,
    bannerImg: 'europebanner.png',
    cities: [
      {
        city: 'Londres',
        country: 'Reino Unido',
        flag: 'uk.png',
        img: 'london.png',
      },
      {
        city: 'Paris',
        country: 'França',
        flag: 'fra.png',
        img: 'paris.png',
      },
      {
        city: 'Roma',
        country: 'Itália',
        flag: 'ita.png',
        img: 'rome.png',
      },
      {
        city: 'Praga',
        country: 'República Tcheca',
        flag: 'uk.png',
        img: 'prague.png',
      },
      {
        city: 'Amsterdã',
        country: 'Holanda',
        flag: 'ned.png',
        img: 'amsterda.png',
      }
    ]
  },
  northamerica: {
    name: 'América do Norte',
    description: 'A America do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia). Pela última definição, a América do Norte incluiria a América Central Continental e Insular (Caribe).',
    countries: 3,
    languages: 6,
    top100cities: 10,
    bannerImg: 'northamericabanner.png',
    cities: [
      {
        city: 'Las Vegas',
        country: 'Estados Unidos',
        flag: 'usa.png',
        img: 'lasvegas.jpg',
      },
      {
        city: 'Cancun',
        country: 'México',
        flag: 'mex.png',
        img: 'cancun.jpg',
      },
      {
        city: 'Toronto',
        country: 'Canadá',
        flag: 'can.png',
        img: 'toronto.jpg',
      }
    ]
  },
  southamerica: {
    name: 'América do Sul',
    description: 'A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de Drake. Tem uma extensão de 7 500 km desde o mar do Caribe até ao cabo Horn, ponto extremo sul do continente.',
    countries: 12,
    languages: 9,
    top100cities: 6,
    bannerImg: 'southamericabanner.png',
    cities: [
      {
        city: 'Buenos Aires',
        country: 'Argentina',
        flag: 'arg.png',
        img: 'buenosaires.jpg',
      },
      {
        city: 'Rio de Janeiro',
        country: 'Brasil',
        flag: 'bra.png',
        img: 'riodejaneiro.jpg',
      },
      {
        city: 'São Paulo',
        country: 'Brasil',
        flag: 'bra.png',
        img: 'saopaulo.jpg',
      },
      {
        city: 'Salvador',
        country: 'Brasil',
        flag: 'bra.png',
        img: 'salvador.jpg',
      },
      {
        city: 'Santiago',
        country: 'Chile',
        flag: 'chi.png',
        img: 'santiago.jpg',
      },
      {
        city: 'Curitiba ',
        country: 'Brasil',
        flag: 'bra.png',
        img: 'curitiba.jpg',
      }
    ]
  },
  africa: {
    name: 'África',
    description: 'A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005), representando cerca de um sétimo da população mundial, e 54 países independentes.',
    countries: 54,
    languages: 1250300,
    top100cities: 1,
    bannerImg: 'africabanner.png',
    cities: [
      {
        city: 'Johannesburgo',
        country: 'África do Sul',
        flag: 'afr.png',
        img: 'johannesburg.jpg',
      },
    ]
  },
  asia: {
    name: 'Ásia',
    description: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering.',
    countries: 50,
    languages: 8,
    top100cities: 1,
    bannerImg: 'asiabanner.png',
    cities: [
      {
        city: 'Hong Kong',
        country: 'China',
        flag: 'china.png',
        img: 'hongkong.jpg',
      },
    ]
  },
  oceania: {
    name: 'Ocêania',
    description: 'Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont dUrville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes.',
    countries: 16,
    languages: 18,
    top100cities: 1,
    bannerImg: 'oceaniabanner.png',
    cities: [
      {
        city: 'Sydney',
        country: 'Austrália',
        flag: 'aus.png',
        img: 'sydney.jpg',
      },
    ]
  },
}

export function getContient(name: string) {
  return continents[name];
}