export const projects = [
  {
    id: 'rakieta',
    name: 'Rakieta',
    description: 'Nasza rakieta jest wynikiem wieloletnich badań i rozwoju. Została zaprojektowana z myślą o wynoszeniu małych satelitów na niską orbitę okołoziemską. Wykorzystuje innowacyjne technologie napędowe oraz lekkie i wytrzymałe materiały kompozytowe.',
    images: [
      process.env.PUBLIC_URL + '/rakieta.png',
      process.env.PUBLIC_URL + '/microsat.png',
      process.env.PUBLIC_URL + '/about.png',
    ]
  },
  {
    id: 'edukacja',
    name: 'Edukacja',
    description: 'Prowadzimy szeroko zakrojone działania edukacyjne, mające na celu popularyzację nauki i technologii kosmicznych wśród młodzieży. Organizujemy warsztaty, prelekcje i konkursy, inspirując kolejne pokolenia inżynierów i naukowców.',
    images: [
      process.env.PUBLIC_URL + '/edukacja.png',
      process.env.PUBLIC_URL + '/team.png',
      process.env.PUBLIC_URL + '/patryk.png',
    ]
  },
  {
    id: 'microsat',
    name: 'Mikrosatelita',
    description: 'Nasz mikrosatelita to zaawansowane urządzenie badawcze, które będzie zbierać dane na temat ziemskiej magnetosfery. Wyposażony w nowoczesne czujniki, pomoże nam lepiej zrozumieć zjawiska zachodzące w przestrzeni kosmicznej.',
    images: [
      process.env.PUBLIC_URL + '/microsat.png',
      process.env.PUBLIC_URL + '/rakieta.png',
      process.env.PUBLIC_URL + '/edukacja.png',
    ]
  }
];

export const teamMembers = [
  {
    id: 'kacper',
    name: 'Kacper',
    surname: 'Nowak',
    description: 'Lider zespołu, odpowiedzialny za ogólną wizję i strategię projektu. Inżynier z wieloletnim doświadczeniem w branży kosmicznej.',
    image: process.env.PUBLIC_URL + '/kacper.png'
  },
  {
    id: 'patryk',
    name: 'Patryk',
    surname: 'Kowalski',
    description: 'Główny inżynier ds. napędów. Specjalista w dziedzinie silników rakietowych na paliwo stałe i ciekłe.',
    image: process.env.PUBLIC_URL + '/patryk.png'
  },
  {
    id: 'piotr',
    name: 'Piotr',
    surname: 'Wiśniewski',
    description: 'Inżynier awioniki, odpowiedzialny za systemy sterowania i komunikacji rakiety. Pasjonat elektroniki i programowania.',
    image: process.env.PUBLIC_URL + '/piotr.png'
  },
  {
    id: 'stanislaw',
    name: 'Stanisław',
    surname: 'Wójcik',
    description: 'Specjalista ds. materiałów kompozytowych. Odpowiada za projekt i wykonanie lekkiej i wytrzymałej struktury rakiety.',
    image: process.env.PUBLIC_URL + '/stanislaw.png'
  },
  {
    id: 'szymon',
    name: 'Szymon',
    surname: 'Kowalczyk',
    description: 'Inżynier oprogramowania, twórca systemów pokładowych i naziemnych. Miłośnik otwartego oprogramowania i nowych technologii.',
    image: process.env.PUBLIC_URL + '/szymon.png'
  },
  {
    id: 'anna',
    name: 'Anna',
    surname: 'Zielińska',
    description: 'Specjalista ds. komunikacji i marketingu. Odpowiada za wizerunek SpaceY i kontakt z mediami.',
    image: process.env.PUBLIC_URL + '/team.png'
  }
];
