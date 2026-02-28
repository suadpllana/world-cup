// ============================================================
// FIFA WORLD CUP 2026 - COMPLETE DATA
// Host: USA, Mexico, Canada | 48 Teams | June 11 - July 19, 2026
// ============================================================

const WC2026 = {
  tournament: {
    name: "FIFA World Cup 2026™",
    edition: "23rd",
    hosts: ["United States", "Mexico", "Canada"],
    startDate: "2026-06-11",
    endDate: "2026-07-19",
    totalTeams: 48,
    totalGroups: 12,
    totalMatches: 104,
    mascot: "Ito, Layla & Sunny",
    slogan: "We Are 26",
    ball: "adidas Al Hilm 26",
    ticketsSold: "5,000,000+",
    expectedViewers: "5 billion+",
    logo: "⚽"
  },

  // ============================================================
  // STADIUMS (16 Venues)
  // ============================================================
  stadiums: [
    {
      id: 1,
      name: "MetLife Stadium",
      city: "East Rutherford, New Jersey",
      country: "USA",
      capacity: 82500,
      image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600",
      description: "Home of the NFL's New York Giants and Jets. Will host the FIFA World Cup 2026 Final.",
      hostMatches: ["Group Stage", "Round of 32", "Quarter-Final", "Final"],
      yearBuilt: 2010,
      surface: "Grass (temporary)",
      coordinates: { lat: 40.8135, lng: -74.0745 }
    },
    {
      id: 2,
      name: "SoFi Stadium",
      city: "Inglewood, California",
      country: "USA",
      capacity: 70240,
      image: "https://images.unsplash.com/photo-1614632537423-5e1c4950845e?w=600",
      description: "State-of-the-art venue, home of the LA Rams and Chargers. One of the most expensive stadiums ever built.",
      hostMatches: ["Group Stage", "Round of 32", "Semi-Final"],
      yearBuilt: 2020,
      surface: "Grass (temporary)",
      coordinates: { lat: 33.9535, lng: -118.3392 }
    },
    {
      id: 3,
      name: "AT&T Stadium",
      city: "Arlington, Texas",
      country: "USA",
      capacity: 80000,
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=600",
      description: "Iconic retractable roof stadium, home of the Dallas Cowboys.",
      hostMatches: ["Group Stage", "Round of 32", "Semi-Final"],
      yearBuilt: 2009,
      surface: "Grass (temporary)",
      coordinates: { lat: 32.7473, lng: -97.0945 }
    },
    {
      id: 4,
      name: "Hard Rock Stadium",
      city: "Miami Gardens, Florida",
      country: "USA",
      capacity: 65326,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600",
      description: "Home of the Miami Dolphins, with a stunning canopy roof design. Will host the 3rd place match.",
      hostMatches: ["Group Stage", "Round of 32", "Quarter-Final", "Third-Place Match"],
      yearBuilt: 1987,
      surface: "Natural Grass",
      coordinates: { lat: 25.958, lng: -80.2389 }
    },
    {
      id: 5,
      name: "Lumen Field",
      city: "Seattle, Washington",
      country: "USA",
      capacity: 69000,
      image: "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=600",
      description: "Known for its electric atmosphere. Home of the Seattle Seahawks and Sounders FC.",
      hostMatches: ["Group Stage", "Round of 32"],
      yearBuilt: 2002,
      surface: "Natural Grass",
      coordinates: { lat: 47.5952, lng: -122.3316 }
    },
    {
      id: 6,
      name: "Lincoln Financial Field",
      city: "Philadelphia, Pennsylvania",
      country: "USA",
      capacity: 69796,
      image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600",
      description: "Home of the Philadelphia Eagles. Known for its passionate fan atmosphere.",
      hostMatches: ["Group Stage", "Round of 32", "Quarter-Final"],
      yearBuilt: 2003,
      surface: "Natural Grass",
      coordinates: { lat: 39.9008, lng: -75.1675 }
    },
    {
      id: 7,
      name: "NRG Stadium",
      city: "Houston, Texas",
      country: "USA",
      capacity: 72220,
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=600",
      description: "Retractable roof stadium, home of the Houston Texans.",
      hostMatches: ["Group Stage", "Round of 32"],
      yearBuilt: 2002,
      surface: "Grass (temporary)",
      coordinates: { lat: 29.6847, lng: -95.4107 }
    },
    {
      id: 8,
      name: "Mercedes-Benz Stadium",
      city: "Atlanta, Georgia",
      country: "USA",
      capacity: 71000,
      image: "https://images.unsplash.com/photo-1614632537423-5e1c4950845e?w=600",
      description: "Architectural marvel with unique retractable roof. Home of Atlanta United FC.",
      hostMatches: ["Group Stage", "Round of 32", "Quarter-Final"],
      yearBuilt: 2017,
      surface: "Grass (temporary)",
      coordinates: { lat: 33.7553, lng: -84.4006 }
    },
    {
      id: 9,
      name: "Arrowhead Stadium",
      city: "Kansas City, Missouri",
      country: "USA",
      capacity: 76416,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600",
      description: "One of the loudest stadiums in the world. Home of the Kansas City Chiefs.",
      hostMatches: ["Group Stage", "Round of 32"],
      yearBuilt: 1972,
      surface: "Natural Grass",
      coordinates: { lat: 39.0489, lng: -94.4839 }
    },
    {
      id: 10,
      name: "Gillette Stadium",
      city: "Foxborough, Massachusetts",
      country: "USA",
      capacity: 65878,
      image: "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=600",
      description: "Home of the New England Patriots and Revolution.",
      hostMatches: ["Group Stage", "Round of 32"],
      yearBuilt: 2002,
      surface: "Natural Grass",
      coordinates: { lat: 42.0909, lng: -71.2643 }
    },
    {
      id: 11,
      name: "Levi's Stadium",
      city: "Santa Clara, California",
      country: "USA",
      capacity: 68500,
      image: "https://images.unsplash.com/photo-1614632537423-5e1c4950845e?w=600",
      description: "Modern venue in Silicon Valley, home of the San Francisco 49ers.",
      hostMatches: ["Group Stage", "Round of 32"],
      yearBuilt: 2014,
      surface: "Natural Grass",
      coordinates: { lat: 37.4033, lng: -121.9694 }
    },
    {
      id: 12,
      name: "Estadio Azteca",
      city: "Mexico City",
      country: "Mexico",
      capacity: 87523,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600",
      description: "Legendary venue — the only stadium to host 3 FIFA World Cup Finals (1970, 1986, 2026). Home of Club América.",
      hostMatches: ["Opening Match", "Group Stage", "Round of 32"],
      yearBuilt: 1966,
      surface: "Natural Grass",
      coordinates: { lat: 19.3029, lng: -99.1505 }
    },
    {
      id: 13,
      name: "Estadio BBVA",
      city: "Monterrey",
      country: "Mexico",
      capacity: 53500,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600",
      description: "Stunning modern stadium set against the Sierra Madre mountains. Home of CF Monterrey.",
      hostMatches: ["Group Stage", "Round of 32"],
      yearBuilt: 2015,
      surface: "Natural Grass",
      coordinates: { lat: 25.6030, lng: -100.0095 }
    },
    {
      id: 14,
      name: "Estadio Akron",
      city: "Guadalajara",
      country: "Mexico",
      capacity: 49850,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600",
      description: "Unique volcanic rock-inspired design. Home of CD Guadalajara (Chivas).",
      hostMatches: ["Group Stage", "Round of 32"],
      yearBuilt: 2010,
      surface: "Natural Grass",
      coordinates: { lat: 20.6820, lng: -103.4624 }
    },
    {
      id: 15,
      name: "BMO Field",
      city: "Toronto",
      country: "Canada",
      capacity: 45736,
      image: "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=600",
      description: "Expanded for the World Cup. Home of Toronto FC and the Canadian national team.",
      hostMatches: ["Group Stage", "Round of 32"],
      yearBuilt: 2007,
      surface: "Natural Grass",
      coordinates: { lat: 43.6332, lng: -79.4186 }
    },
    {
      id: 16,
      name: "BC Place",
      city: "Vancouver",
      country: "Canada",
      capacity: 54500,
      image: "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=600",
      description: "Retractable roof stadium, home of the Vancouver Whitecaps FC.",
      hostMatches: ["Group Stage", "Round of 32"],
      yearBuilt: 1983,
      surface: "Grass (temporary)",
      coordinates: { lat: 49.2768, lng: -123.1118 }
    }
  ],

  // ============================================================
  // 48 QUALIFIED TEAMS (All groups confirmed)
  // ============================================================
  groups: {
    A: { teams: ["USA", "Morocco", "Scotland", "Burkina Faso"] },
    B: { teams: ["Argentina", "Australia", "Bahrain", "Denmark"] },
    C: { teams: ["Mexico", "Ecuador", "Bolivia", "Peru"] },
    D: { teams: ["France", "Colombia", "South Korea", "New Zealand"] },
    E: { teams: ["Brazil", "Turkey", "China PR", "Saudi Arabia"] },
    F: { teams: ["England", "Senegal", "Slovenia", "Trinidad and Tobago"] },
    G: { teams: ["Canada", "Serbia", "Cameroon", "Qatar"] },
    H: { teams: ["Germany", "Japan", "Costa Rica", "Indonesia"] },
    I: { teams: ["Spain", "Nigeria", "Paraguay", "Uzbekistan"] },
    J: { teams: ["Portugal", "Iran", "Panama", "Ivory Coast"] },
    K: { teams: ["Netherlands", "Uruguay", "Ghana", "Honduras"] },
    L: { teams: ["Belgium", "Croatia", "Ukraine", "Tunisia"] }
  },

  teams: [
    // GROUP A
    {
      id: 1, name: "United States", code: "USA", flag: "🇺🇸", group: "A",
      confederation: "CONCACAF", fifaRanking: 11, appearances: 11,
      bestFinish: "Semi-Finals (1930)", coach: "Mauricio Pochettino",
      captain: "Christian Pulisic", stadium: "Various (Host)",
      colors: { primary: "#002868", secondary: "#BF0A30" },
      keyPlayers: ["Christian Pulisic", "Weston McKennie", "Gio Reyna", "Yunus Musah", "Tyler Adams"],
      squad: {
        goalkeepers: ["Matt Turner", "Ethan Horvath", "Gaga Slonina"],
        defenders: ["Sergiño Dest", "Tim Ream", "Chris Richards", "Antonee Robinson", "Joe Scally", "Mark McKenzie"],
        midfielders: ["Tyler Adams", "Weston McKennie", "Yunus Musah", "Gio Reyna", "Johnny Cardoso", "Luca de la Torre"],
        forwards: ["Christian Pulisic", "Timothy Weah", "Folarin Balogun", "Josh Sargent", "Ricardo Pepi", "Brenden Aaronson"]
      }
    },
    {
      id: 2, name: "Morocco", code: "MAR", flag: "🇲🇦", group: "A",
      confederation: "CAF", fifaRanking: 13, appearances: 7,
      bestFinish: "Semi-Finals (2022)", coach: "Walid Regragui",
      captain: "Achraf Hakimi", stadium: "Stade Mohammed V",
      colors: { primary: "#C1272D", secondary: "#006233" },
      keyPlayers: ["Achraf Hakimi", "Hakim Ziyech", "Youssef En-Nesyri", "Sofyan Amrabat", "Noussair Mazraoui"],
      squad: {
        goalkeepers: ["Yassine Bounou", "Munir Mohamedi", "Anas Zniti"],
        defenders: ["Achraf Hakimi", "Noussair Mazraoui", "Nayef Aguerd", "Romain Saïss", "Jawad El Yamiq"],
        midfielders: ["Sofyan Amrabat", "Azzedine Ounahi", "Bilal El Khannouss", "Selim Amallah", "Ilias Chair"],
        forwards: ["Hakim Ziyech", "Youssef En-Nesyri", "Sofiane Boufal", "Abde Ezzalzouli", "Brahim Díaz"]
      }
    },
    {
      id: 3, name: "Scotland", code: "SCO", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", group: "A",
      confederation: "UEFA", fifaRanking: 39, appearances: 9,
      bestFinish: "Group Stage", coach: "Steve Clarke",
      captain: "Andy Robertson", stadium: "Hampden Park",
      colors: { primary: "#003078", secondary: "#FFFFFF" },
      keyPlayers: ["Andy Robertson", "Scott McTominay", "John McGinn", "Kieran Tierney", "Che Adams"],
      squad: {
        goalkeepers: ["Angus Gunn", "Zander Clark", "Liam Kelly"],
        defenders: ["Andy Robertson", "Kieran Tierney", "Grant Hanley", "Scott McKenna", "Jack Hendry"],
        midfielders: ["Scott McTominay", "John McGinn", "Callum McGregor", "Billy Gilmour", "Ryan Christie"],
        forwards: ["Che Adams", "Lyndon Dykes", "Lawrence Shankland", "Stuart Armstrong", "Ryan Fraser"]
      }
    },
    {
      id: 4, name: "Burkina Faso", code: "BFA", flag: "🇧🇫", group: "A",
      confederation: "CAF", fifaRanking: 56, appearances: 3,
      bestFinish: "Group Stage (2014)", coach: "Brama Traoré",
      captain: "Bertrand Traoré", stadium: "Stade du 4-Août",
      colors: { primary: "#009E49", secondary: "#EF2B2D" },
      keyPlayers: ["Bertrand Traoré", "Edmond Tapsoba", "Dango Ouattara", "Issa Kaboré", "Lassina Traoré"],
      squad: {
        goalkeepers: ["Hervé Koffi", "Farid Ouédraogo", "Abou Sissoko"],
        defenders: ["Edmond Tapsoba", "Issa Kaboré", "Steeve Yago", "Issoufou Dayo", "Patrick Malo"],
        midfielders: ["Blati Touré", "Gustavo Sangaré", "Bryan Faber Rasmussen", "Adama Guira", "Saïdou Simporé"],
        forwards: ["Bertrand Traoré", "Dango Ouattara", "Lassina Traoré", "Mohamed Konaté", "Hassane Bandé"]
      }
    },
    // GROUP B
    {
      id: 5, name: "Argentina", code: "ARG", flag: "🇦🇷", group: "B",
      confederation: "CONMEBOL", fifaRanking: 1, appearances: 18,
      bestFinish: "Champions (1978, 1986, 2022)", coach: "Lionel Scaloni",
      captain: "Lionel Messi", stadium: "Estadio Monumental",
      colors: { primary: "#74ACDF", secondary: "#FFFFFF" },
      keyPlayers: ["Lionel Messi", "Julián Álvarez", "Enzo Fernández", "Rodrigo De Paul", "Emiliano Martínez"],
      squad: {
        goalkeepers: ["Emiliano Martínez", "Franco Armani", "Gerónimo Rulli"],
        defenders: ["Nicolás Otamendi", "Cristian Romero", "Lisandro Martínez", "Nahuel Molina", "Marcos Acuña"],
        midfielders: ["Enzo Fernández", "Rodrigo De Paul", "Alexis Mac Allister", "Leandro Paredes", "Giovani Lo Celso"],
        forwards: ["Lionel Messi", "Julián Álvarez", "Lautaro Martínez", "Ángel Di María", "Paulo Dybala"]
      }
    },
    {
      id: 6, name: "Australia", code: "AUS", flag: "🇦🇺", group: "B",
      confederation: "AFC", fifaRanking: 24, appearances: 6,
      bestFinish: "Round of 16 (2022)", coach: "Tony Popovic",
      captain: "Jackson Irvine", stadium: "Stadium Australia",
      colors: { primary: "#FFCD00", secondary: "#00843D" },
      keyPlayers: ["Jackson Irvine", "Riley McGree", "Awer Mabil", "Harry Souttar", "Mathew Leckie"],
      squad: {
        goalkeepers: ["Mathew Ryan", "Andrew Redmayne", "Joe Gauci"],
        defenders: ["Harry Souttar", "Kye Rowles", "Aziz Behich", "Nathaniel Atkinson", "Joel King"],
        midfielders: ["Jackson Irvine", "Riley McGree", "Aaron Mooy", "Ajdin Hrustic", "Cameron Devlin"],
        forwards: ["Mathew Leckie", "Awer Mabil", "Jamie Maclaren", "Mitchell Duke", "Garang Kuol"]
      }
    },
    {
      id: 7, name: "Bahrain", code: "BHR", flag: "🇧🇭", group: "B",
      confederation: "AFC", fifaRanking: 80, appearances: 1,
      bestFinish: "Debut (2026)", coach: "Dragan Talajić",
      captain: "Sayed Dhiya Saeed", stadium: "Bahrain National Stadium",
      colors: { primary: "#CE1126", secondary: "#FFFFFF" },
      keyPlayers: ["Sayed Dhiya Saeed", "Abdulla Yusuf Helal", "Komail Al Aswad", "Ali Madan", "Mahdi Abduljabbar"],
      squad: {
        goalkeepers: ["Sayed Shubbar Alawi", "Abdulrahman Abdulqader", "Ebrahim Lutfallah"],
        defenders: ["Ahmed Bughammar", "Waleed Al Hayam", "Hamad Al Shamsan", "Sayed Redha Isa", "Rashed Al Hooti"],
        midfielders: ["Sayed Dhiya Saeed", "Ali Madan", "Komail Al Aswad", "Mahdi Abduljabbar", "Mohamed Marhoon"],
        forwards: ["Abdulla Yusuf Helal", "Ismaeel Abdullatif", "Mahdi Al Humaidan", "Ali Haram", "Abbas Al Asfoor"]
      }
    },
    {
      id: 8, name: "Denmark", code: "DEN", flag: "🇩🇰", group: "B",
      confederation: "UEFA", fifaRanking: 18, appearances: 6,
      bestFinish: "Quarter-Finals (1998)", coach: "Brian Riemer",
      captain: "Pierre-Emile Højbjerg", stadium: "Parken Stadium",
      colors: { primary: "#C8102E", secondary: "#FFFFFF" },
      keyPlayers: ["Pierre-Emile Højbjerg", "Christian Eriksen", "Rasmus Højlund", "Joakim Mæhle", "Andreas Christensen"],
      squad: {
        goalkeepers: ["Kasper Schmeichel", "Frederik Rønnow", "Oliver Christensen"],
        defenders: ["Andreas Christensen", "Simon Kjær", "Joakim Mæhle", "Joachim Andersen", "Victor Nelsson"],
        midfielders: ["Pierre-Emile Højbjerg", "Christian Eriksen", "Morten Hjulmand", "Thomas Delaney", "Mikkel Damsgaard"],
        forwards: ["Rasmus Højlund", "Jonas Wind", "Yussuf Poulsen", "Andreas Skov Olsen", "Jacob Bruun Larsen"]
      }
    },
    // GROUP C
    {
      id: 9, name: "Mexico", code: "MEX", flag: "🇲🇽", group: "C",
      confederation: "CONCACAF", fifaRanking: 15, appearances: 17,
      bestFinish: "Quarter-Finals (1970, 1986)", coach: "Javier Aguirre",
      captain: "Edson Álvarez", stadium: "Estadio Azteca (Host)",
      colors: { primary: "#006847", secondary: "#CE1126" },
      keyPlayers: ["Edson Álvarez", "Hirving Lozano", "Raúl Jiménez", "Santiago Giménez", "Jesús Corona"],
      squad: {
        goalkeepers: ["Guillermo Ochoa", "Alfredo Talavera", "Luis Malagón"],
        defenders: ["César Montes", "Johan Vásquez", "Jorge Sánchez", "Jesús Gallardo", "Gerardo Arteaga"],
        midfielders: ["Edson Álvarez", "Luis Romo", "Andrés Guardado", "Carlos Rodríguez", "Érick Gutiérrez"],
        forwards: ["Hirving Lozano", "Santiago Giménez", "Raúl Jiménez", "Jesús Corona", "Alexis Vega"]
      }
    },
    {
      id: 10, name: "Ecuador", code: "ECU", flag: "🇪🇨", group: "C",
      confederation: "CONMEBOL", fifaRanking: 28, appearances: 4,
      bestFinish: "Round of 16 (2006)", coach: "Sebastián Beccacece",
      captain: "Enner Valencia", stadium: "Estadio Monumental Banco Pichincha",
      colors: { primary: "#FFD100", secondary: "#003DA5" },
      keyPlayers: ["Enner Valencia", "Moisés Caicedo", "Piero Hincapié", "Gonzalo Plata", "Jeremy Sarmiento"],
      squad: {
        goalkeepers: ["Hernán Galíndez", "Alexander Domínguez", "Moisés Ramírez"],
        defenders: ["Piero Hincapié", "Pervis Estupiñán", "Robert Arboleda", "Félix Torres", "Angelo Preciado"],
        midfielders: ["Moisés Caicedo", "Carlos Gruezo", "Jhegson Méndez", "Alan Franco", "Jeremy Sarmiento"],
        forwards: ["Enner Valencia", "Gonzalo Plata", "Michael Estrada", "Kevin Rodríguez", "Jordy Caicedo"]
      }
    },
    {
      id: 11, name: "Bolivia", code: "BOL", flag: "🇧🇴", group: "C",
      confederation: "CONMEBOL", fifaRanking: 72, appearances: 4,
      bestFinish: "Group Stage (1994)", coach: "Óscar Villegas",
      captain: "Marcelo Martins", stadium: "Estadio Hernando Siles",
      colors: { primary: "#007A33", secondary: "#CE1126" },
      keyPlayers: ["Marcelo Martins", "Ramiro Vaca", "Boris Céspedes", "Henry Vaca", "Carlos Lampe"],
      squad: {
        goalkeepers: ["Carlos Lampe", "Rubén Cordano", "Guillermo Viscarra"],
        defenders: ["José Sagredo", "Adrián Jusino", "Jesús Sagredo", "Roberto Fernández", "Diego Bejarano"],
        midfielders: ["Boris Céspedes", "Ramiro Vaca", "Henry Vaca", "Fernando Saucedo", "Leonel Justiniano"],
        forwards: ["Marcelo Martins", "Víctor Ábrego", "Bruno Miranda", "Rodrigo Ramallo", "César Menacho"]
      }
    },
    {
      id: 12, name: "Peru", code: "PER", flag: "🇵🇪", group: "C",
      confederation: "CONMEBOL", fifaRanking: 32, appearances: 6,
      bestFinish: "Quarter-Finals (1970)", coach: "Jorge Fossati",
      captain: "Paolo Guerrero", stadium: "Estadio Nacional",
      colors: { primary: "#D91023", secondary: "#FFFFFF" },
      keyPlayers: ["Paolo Guerrero", "André Carrillo", "Renato Tapia", "Gianluca Lapadula", "Pedro Aquino"],
      squad: {
        goalkeepers: ["Pedro Gallese", "Carlos Cáceda", "Diego Romero"],
        defenders: ["Luis Advíncula", "Alexander Callens", "Carlos Zambrano", "Miguel Araujo", "Marcos López"],
        midfielders: ["Renato Tapia", "Yoshimar Yotún", "Pedro Aquino", "Christofer Gonzáles", "Sergio Peña"],
        forwards: ["Paolo Guerrero", "Gianluca Lapadula", "André Carrillo", "Edison Flores", "Bryan Reyna"]
      }
    },
    // GROUP D
    {
      id: 13, name: "France", code: "FRA", flag: "🇫🇷", group: "D",
      confederation: "UEFA", fifaRanking: 2, appearances: 16,
      bestFinish: "Champions (1998, 2018)", coach: "Didier Deschamps",
      captain: "Kylian Mbappé", stadium: "Stade de France",
      colors: { primary: "#002395", secondary: "#FFFFFF" },
      keyPlayers: ["Kylian Mbappé", "Antoine Griezmann", "Aurélien Tchouaméni", "Eduardo Camavinga", "William Saliba"],
      squad: {
        goalkeepers: ["Mike Maignan", "Alphonse Areola", "Brice Samba"],
        defenders: ["William Saliba", "Dayot Upamecano", "Theo Hernández", "Jules Koundé", "Ibrahima Konaté"],
        midfielders: ["Aurélien Tchouaméni", "Eduardo Camavinga", "N'Golo Kanté", "Adrien Rabiot", "Youssouf Fofana"],
        forwards: ["Kylian Mbappé", "Antoine Griezmann", "Ousmane Dembélé", "Marcus Thuram", "Randal Kolo Muani"]
      }
    },
    {
      id: 14, name: "Colombia", code: "COL", flag: "🇨🇴", group: "D",
      confederation: "CONMEBOL", fifaRanking: 12, appearances: 7,
      bestFinish: "Quarter-Finals (2014)", coach: "Néstor Lorenzo",
      captain: "James Rodríguez", stadium: "Estadio Metropolitano",
      colors: { primary: "#FCD116", secondary: "#003893" },
      keyPlayers: ["James Rodríguez", "Luis Díaz", "Rafael Santos Borré", "Jhon Arias", "Yerry Mina"],
      squad: {
        goalkeepers: ["David Ospina", "Camilo Vargas", "Álvaro Montero"],
        defenders: ["Yerry Mina", "Davinson Sánchez", "Stefan Medina", "Johan Mojica", "Daniel Muñoz"],
        midfielders: ["James Rodríguez", "Mateus Uribe", "Jefferson Lerma", "Juan Fernando Quintero", "Kevin Castaño"],
        forwards: ["Luis Díaz", "Rafael Santos Borré", "Jhon Arias", "Miguel Borja", "Jhon Córdoba"]
      }
    },
    {
      id: 15, name: "South Korea", code: "KOR", flag: "🇰🇷", group: "D",
      confederation: "AFC", fifaRanking: 22, appearances: 11,
      bestFinish: "Semi-Finals (2002)", coach: "Hong Myung-bo",
      captain: "Son Heung-min", stadium: "Seoul World Cup Stadium",
      colors: { primary: "#CD2E3A", secondary: "#FFFFFF" },
      keyPlayers: ["Son Heung-min", "Kim Min-jae", "Lee Kang-in", "Hwang Hee-chan", "Cho Gue-sung"],
      squad: {
        goalkeepers: ["Kim Seung-gyu", "Jo Hyeon-woo", "Song Bum-keun"],
        defenders: ["Kim Min-jae", "Kim Young-gwon", "Kwon Kyung-won", "Kim Moon-hwan", "Kim Jin-su"],
        midfielders: ["Lee Kang-in", "Hwang In-beom", "Jung Woo-young", "Paik Seung-ho", "Lee Jae-sung"],
        forwards: ["Son Heung-min", "Hwang Hee-chan", "Cho Gue-sung", "Lee Seung-woo", "Jeong Sang-bin"]
      }
    },
    {
      id: 16, name: "New Zealand", code: "NZL", flag: "🇳🇿", group: "D",
      confederation: "OFC", fifaRanking: 93, appearances: 3,
      bestFinish: "Group Stage (2010)", coach: "Darren Bazeley",
      captain: "Chris Wood", stadium: "Eden Park",
      colors: { primary: "#000000", secondary: "#FFFFFF" },
      keyPlayers: ["Chris Wood", "Sarpreet Singh", "Liberato Cacace", "Joe Bell", "Matt Garbett"],
      squad: {
        goalkeepers: ["Stefan Marinovic", "Oliver Sail", "Alex Paulsen"],
        defenders: ["Winston Reid", "Tommy Smith", "Nando Pijnaker", "Liberato Cacace", "Michael Boxall"],
        midfielders: ["Joe Bell", "Sarpreet Singh", "Matt Garbett", "Marko Stamenic", "Tim Payne"],
        forwards: ["Chris Wood", "Ben Waine", "Kosta Barbarouses", "Matthew Garbett", "Eli Just"]
      }
    },
    // GROUP E
    {
      id: 17, name: "Brazil", code: "BRA", flag: "🇧🇷", group: "E",
      confederation: "CONMEBOL", fifaRanking: 3, appearances: 22,
      bestFinish: "Champions (1958, 1962, 1970, 1994, 2002)", coach: "Dorival Júnior",
      captain: "Marquinhos", stadium: "Maracanã",
      colors: { primary: "#FFDF00", secondary: "#009C3B" },
      keyPlayers: ["Vinícius Jr.", "Rodrygo", "Endrick", "Bruno Guimarães", "Marquinhos"],
      squad: {
        goalkeepers: ["Alisson", "Ederson", "Bento"],
        defenders: ["Marquinhos", "Éder Militão", "Gabriel Magalhães", "Danilo", "Wendell"],
        midfielders: ["Bruno Guimarães", "Casemiro", "Lucas Paquetá", "João Gomes", "André"],
        forwards: ["Vinícius Jr.", "Rodrygo", "Endrick", "Raphinha", "Richarlison"]
      }
    },
    {
      id: 18, name: "Turkey", code: "TUR", flag: "🇹🇷", group: "E",
      confederation: "UEFA", fifaRanking: 26, appearances: 3,
      bestFinish: "Semi-Finals (2002)", coach: "Vincenzo Montella",
      captain: "Hakan Çalhanoğlu", stadium: "Atatürk Olympic Stadium",
      colors: { primary: "#E30A17", secondary: "#FFFFFF" },
      keyPlayers: ["Hakan Çalhanoğlu", "Arda Güler", "Ferdi Kadıoğlu", "Kenan Yıldız", "Barış Alper Yılmaz"],
      squad: {
        goalkeepers: ["Uğurcan Çakır", "Altay Bayındır", "Mert Günok"],
        defenders: ["Merih Demiral", "Çağlar Söyüncü", "Ferdi Kadıoğlu", "Zeki Çelik", "Samet Akaydin"],
        midfielders: ["Hakan Çalhanoğlu", "Arda Güler", "Orkun Kökçü", "Salih Özcan", "İsmail Yüksek"],
        forwards: ["Kenan Yıldız", "Barış Alper Yılmaz", "Cenk Tosun", "Kerem Aktürkoğlu", "Yusuf Yazıcı"]
      }
    },
    {
      id: 19, name: "China PR", code: "CHN", flag: "🇨🇳", group: "E",
      confederation: "AFC", fifaRanking: 86, appearances: 2,
      bestFinish: "Group Stage (2002)", coach: "Branko Ivanković",
      captain: "Wu Xi", stadium: "Workers' Stadium",
      colors: { primary: "#DE2910", secondary: "#FFDE00" },
      keyPlayers: ["Wu Lei", "Wu Xi", "Zhang Linpeng", "Wei Shihao", "Yan Junling"],
      squad: {
        goalkeepers: ["Yan Junling", "Liu Dianzuo", "Wang Dalei"],
        defenders: ["Zhang Linpeng", "Jiang Guangtai", "Zhu Chenjie", "Li Yang", "Wang Shenchao"],
        midfielders: ["Wu Xi", "Xu Xin", "Xie Pengfei", "Li Ke", "Dai Wai Tsun"],
        forwards: ["Wu Lei", "Wei Shihao", "Alan", "Tan Long", "Zhang Yuning"]
      }
    },
    {
      id: 20, name: "Saudi Arabia", code: "KSA", flag: "🇸🇦", group: "E",
      confederation: "AFC", fifaRanking: 55, appearances: 7,
      bestFinish: "Round of 16 (1994)", coach: "Roberto Mancini",
      captain: "Salman Al-Faraj", stadium: "King Fahd Stadium",
      colors: { primary: "#006C35", secondary: "#FFFFFF" },
      keyPlayers: ["Salem Al-Dawsari", "Salman Al-Faraj", "Mohammed Al-Burayk", "Firas Al-Buraikan", "Ali Al-Hassan"],
      squad: {
        goalkeepers: ["Mohammed Al-Owais", "Mohammed Al-Rubaie", "Nawaf Al-Aqidi"],
        defenders: ["Ali Al-Bulaihi", "Yasser Al-Shahrani", "Mohammed Al-Burayk", "Abdulelah Al-Amri", "Hassan Tambakti"],
        midfielders: ["Salman Al-Faraj", "Sami Al-Najei", "Abdulellah Al-Malki", "Mohamed Kanno", "Nasser Al-Dawsari"],
        forwards: ["Salem Al-Dawsari", "Firas Al-Buraikan", "Saleh Al-Shehri", "Abdullah Al-Hamdan", "Abdulrahman Ghareeb"]
      }
    },
    // GROUP F
    {
      id: 21, name: "England", code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", group: "F",
      confederation: "UEFA", fifaRanking: 5, appearances: 16,
      bestFinish: "Champions (1966)", coach: "Thomas Tuchel",
      captain: "Harry Kane", stadium: "Wembley Stadium",
      colors: { primary: "#FFFFFF", secondary: "#002366" },
      keyPlayers: ["Harry Kane", "Jude Bellingham", "Bukayo Saka", "Phil Foden", "Declan Rice"],
      squad: {
        goalkeepers: ["Jordan Pickford", "Dean Henderson", "Aaron Ramsdale"],
        defenders: ["John Stones", "Kyle Walker", "Luke Shaw", "Marc Guéhi", "Trent Alexander-Arnold"],
        midfielders: ["Jude Bellingham", "Declan Rice", "Phil Foden", "Kobbie Mainoo", "Cole Palmer"],
        forwards: ["Harry Kane", "Bukayo Saka", "Anthony Gordon", "Ollie Watkins", "Jarrod Bowen"]
      }
    },
    {
      id: 22, name: "Senegal", code: "SEN", flag: "🇸🇳", group: "F",
      confederation: "CAF", fifaRanking: 17, appearances: 4,
      bestFinish: "Quarter-Finals (2002)", coach: "Aliou Cissé",
      captain: "Kalidou Koulibaly", stadium: "Stade Abdoulaye Wade",
      colors: { primary: "#00853F", secondary: "#FDEF42" },
      keyPlayers: ["Kalidou Koulibaly", "Ismaïla Sarr", "Idrissa Gueye", "Abdou Diallo", "Nicolas Jackson"],
      squad: {
        goalkeepers: ["Édouard Mendy", "Alfred Gomis", "Seny Dieng"],
        defenders: ["Kalidou Koulibaly", "Abdou Diallo", "Youssouf Sabaly", "Formose Mendy", "Moussa Niakhaté"],
        midfielders: ["Idrissa Gueye", "Nampalys Mendy", "Pape Matar Sarr", "Pape Gueye", "Pathé Ciss"],
        forwards: ["Ismaïla Sarr", "Nicolas Jackson", "Boulaye Dia", "Habib Diarra", "Iliman Ndiaye"]
      }
    },
    {
      id: 23, name: "Slovenia", code: "SVN", flag: "🇸🇮", group: "F",
      confederation: "UEFA", fifaRanking: 50, appearances: 3,
      bestFinish: "Group Stage (2010)", coach: "Matjaž Kek",
      captain: "Jan Oblak", stadium: "Stožice Stadium",
      colors: { primary: "#003DA5", secondary: "#FFFFFF" },
      keyPlayers: ["Jan Oblak", "Benjamin Šeško", "Josip Iličić", "Andraž Šporar", "Adam Gnezda Čerin"],
      squad: {
        goalkeepers: ["Jan Oblak", "Vid Belec", "Igor Vekić"],
        defenders: ["Jaka Bijol", "Miha Mevlja", "Petar Stojanović", "Erik Janža", "David Brekalo"],
        midfielders: ["Adam Gnezda Čerin", "Jasmin Kurtić", "Sandi Lovrić", "Timi Max Elšnik", "Jon Gorenc Stanković"],
        forwards: ["Benjamin Šeško", "Josip Iličić", "Andraž Šporar", "Žan Celar", "Jan Mlakar"]
      }
    },
    {
      id: 24, name: "Trinidad and Tobago", code: "TRI", flag: "🇹🇹", group: "F",
      confederation: "CONCACAF", fifaRanking: 97, appearances: 2,
      bestFinish: "Group Stage (2006)", coach: "Angus Eve",
      captain: "Khaleem Hyland", stadium: "Hasely Crawford Stadium",
      colors: { primary: "#CE1126", secondary: "#000000" },
      keyPlayers: ["Khaleem Hyland", "Levi García", "Gary Griffith Jr", "Duane Muckette", "Alvin Jones"],
      squad: {
        goalkeepers: ["Marvin Phillip", "Nicklas Frenderup", "Denzil Smith"],
        defenders: ["Alvin Jones", "Sheldon Bateau", "Curtis Gonzales", "Aubrey David", "Tristan Blackman"],
        midfielders: ["Khaleem Hyland", "Duane Muckette", "Joevin Jones", "Noah Powder", "André Rampersad"],
        forwards: ["Levi García", "Gary Griffith Jr", "Reon Moore", "Nathaniel James", "Ryan Telfer"]
      }
    },
    // GROUP G
    {
      id: 25, name: "Canada", code: "CAN", flag: "🇨🇦", group: "G",
      confederation: "CONCACAF", fifaRanking: 35, appearances: 3,
      bestFinish: "Group Stage (2022)", coach: "Jesse Marsch",
      captain: "Alphonso Davies", stadium: "BMO Field (Host)",
      colors: { primary: "#FF0000", secondary: "#FFFFFF" },
      keyPlayers: ["Alphonso Davies", "Jonathan David", "Cyle Larin", "Tajon Buchanan", "Stephen Eustáquio"],
      squad: {
        goalkeepers: ["Milan Borjan", "Maxime Crépeau", "Dayne St. Clair"],
        defenders: ["Alphonso Davies", "Alistair Johnston", "Kamal Miller", "Steven Vitória", "Sam Adekugbe"],
        midfielders: ["Stephen Eustáquio", "Ismael Koné", "Mark-Anthony Kaye", "Jonathan Osorio", "Liam Fraser"],
        forwards: ["Jonathan David", "Cyle Larin", "Tajon Buchanan", "David Junior Hoilett", "Ike Ugbo"]
      }
    },
    {
      id: 26, name: "Serbia", code: "SRB", flag: "🇷🇸", group: "G",
      confederation: "UEFA", fifaRanking: 33, appearances: 3,
      bestFinish: "Group Stage", coach: "Dragan Stojković",
      captain: "Dušan Tadić", stadium: "Rajko Mitić Stadium",
      colors: { primary: "#C6363C", secondary: "#FFFFFF" },
      keyPlayers: ["Dušan Tadić", "Aleksandar Mitrović", "Dušan Vlahović", "Sergej Milinković-Savić", "Filip Kostić"],
      squad: {
        goalkeepers: ["Predrag Rajković", "Vanja Milinković-Savić", "Djordje Petković"],
        defenders: ["Nikola Milenković", "Strahinja Pavlović", "Miloš Veljković", "Filip Mladenović", "Srđan Babić"],
        midfielders: ["Dušan Tadić", "Sergej Milinković-Savić", "Filip Kostić", "Sasa Lukić", "Nemanja Gudelj"],
        forwards: ["Aleksandar Mitrović", "Dušan Vlahović", "Luka Jović", "Filip Djuričić", "Andrija Živković"]
      }
    },
    {
      id: 27, name: "Cameroon", code: "CMR", flag: "🇨🇲", group: "G",
      confederation: "CAF", fifaRanking: 44, appearances: 8,
      bestFinish: "Quarter-Finals (1990)", coach: "Marc Brys",
      captain: "Vincent Aboubakar", stadium: "Stade Ahmadou Ahidjo",
      colors: { primary: "#007A5E", secondary: "#CE1126" },
      keyPlayers: ["Vincent Aboubakar", "André-Frank Zambo Anguissa", "Eric Maxim Choupo-Moting", "Karl Toko Ekambi", "Bryan Mbeumo"],
      squad: {
        goalkeepers: ["André Onana", "Devis Epassy", "Simon Ngapandouetnbu"],
        defenders: ["Jean-Charles Castelletto", "Nicolas Nkoulou", "Collins Fai", "Nouhou Tolo", "Olivier Mbaizo"],
        midfielders: ["André-Frank Zambo Anguissa", "Martin Hongla", "Pierre Kunde", "Samuel Oum Gouet", "Georges Mandjeck"],
        forwards: ["Vincent Aboubakar", "Eric Maxim Choupo-Moting", "Bryan Mbeumo", "Karl Toko Ekambi", "Christian Bassogog"]
      }
    },
    {
      id: 28, name: "Qatar", code: "QAT", flag: "🇶🇦", group: "G",
      confederation: "AFC", fifaRanking: 38, appearances: 2,
      bestFinish: "Group Stage (2022)", coach: "Tintin Márquez",
      captain: "Hassan Al-Haydos", stadium: "Khalifa International Stadium",
      colors: { primary: "#8D1B3D", secondary: "#FFFFFF" },
      keyPlayers: ["Hassan Al-Haydos", "Almoez Ali", "Akram Afif", "Pedro Miguel", "Abdelkarim Hassan"],
      squad: {
        goalkeepers: ["Saad Al Sheeb", "Meshaal Barsham", "Yousof Hassan"],
        defenders: ["Pedro Miguel", "Abdelkarim Hassan", "Bassam Al-Rawi", "Boualem Khoukhi", "Musab Kheder"],
        midfielders: ["Hassan Al-Haydos", "Abdulaziz Hatem", "Karim Boudiaf", "Assim Madibo", "Ali Assadalla"],
        forwards: ["Almoez Ali", "Akram Afif", "Mohammed Muntari", "Ahmed Alaaeldin", "Hasan Al-Haidos"]
      }
    },
    // GROUP H
    {
      id: 29, name: "Germany", code: "GER", flag: "🇩🇪", group: "H",
      confederation: "UEFA", fifaRanking: 8, appearances: 20,
      bestFinish: "Champions (1954, 1974, 1990, 2014)", coach: "Julian Nagelsmann",
      captain: "İlkay Gündoğan", stadium: "Allianz Arena",
      colors: { primary: "#000000", secondary: "#FFFFFF" },
      keyPlayers: ["Jamal Musiala", "Florian Wirtz", "İlkay Gündoğan", "Antonio Rüdiger", "Kai Havertz"],
      squad: {
        goalkeepers: ["Manuel Neuer", "Marc-André ter Stegen", "Oliver Baumann"],
        defenders: ["Antonio Rüdiger", "Jonathan Tah", "David Raum", "Joshua Kimmich", "Nico Schlotterbeck"],
        midfielders: ["İlkay Gündoğan", "Jamal Musiala", "Florian Wirtz", "Robert Andrich", "Leon Goretzka"],
        forwards: ["Kai Havertz", "Leroy Sané", "Serge Gnabry", "Niclas Füllkrug", "Deniz Undav"]
      }
    },
    {
      id: 30, name: "Japan", code: "JPN", flag: "🇯🇵", group: "H",
      confederation: "AFC", fifaRanking: 14, appearances: 7,
      bestFinish: "Round of 16 (2002, 2018, 2022)", coach: "Hajime Moriyasu",
      captain: "Wataru Endo", stadium: "Saitama Stadium",
      colors: { primary: "#000080", secondary: "#FFFFFF" },
      keyPlayers: ["Takefusa Kubo", "Kaoru Mitoma", "Wataru Endo", "Takehiro Tomiyasu", "Daichi Kamada"],
      squad: {
        goalkeepers: ["Shūichi Gonda", "Daniel Schmidt", "Zion Suzuki"],
        defenders: ["Takehiro Tomiyasu", "Ko Itakura", "Shogo Taniguchi", "Hiroki Sakai", "Miki Yamane"],
        midfielders: ["Wataru Endo", "Daichi Kamada", "Hidemasa Morita", "Ao Tanaka", "Ritsu Doan"],
        forwards: ["Takefusa Kubo", "Kaoru Mitoma", "Ayase Ueda", "Kyogo Furuhashi", "Takuma Asano"]
      }
    },
    {
      id: 31, name: "Costa Rica", code: "CRC", flag: "🇨🇷", group: "H",
      confederation: "CONCACAF", fifaRanking: 48, appearances: 6,
      bestFinish: "Quarter-Finals (2014)", coach: "Claudio Vivas",
      captain: "Bryan Ruiz", stadium: "Estadio Nacional",
      colors: { primary: "#CE1126", secondary: "#FFFFFF" },
      keyPlayers: ["Keylor Navas", "Bryan Ruiz", "Joel Campbell", "Jewison Bennette", "Brandon Aguilera"],
      squad: {
        goalkeepers: ["Keylor Navas", "Patrick Sequeira", "Aarón Cruz"],
        defenders: ["Francisco Calvo", "Juan Pablo Vargas", "Bryan Oviedo", "Keysher Fuller", "Carlos Martínez"],
        midfielders: ["Bryan Ruiz", "Celso Borges", "Yeltsin Tejeda", "Brandon Aguilera", "Jewison Bennette"],
        forwards: ["Joel Campbell", "Anthony Contreras", "Johan Venegas", "Manfred Ugalde", "Warren Madrigal"]
      }
    },
    {
      id: 32, name: "Indonesia", code: "IDN", flag: "🇮🇩", group: "H",
      confederation: "AFC", fifaRanking: 88, appearances: 1,
      bestFinish: "Debut (2026)", coach: "Shin Tae-yong",
      captain: "Asnawi Mangkualam", stadium: "Gelora Bung Karno Stadium",
      colors: { primary: "#CE1126", secondary: "#FFFFFF" },
      keyPlayers: ["Asnawi Mangkualam", "Pratama Arhan", "Egy Maulana Vikri", "Marc Klok", "Nathan Tjoe-A-On"],
      squad: {
        goalkeepers: ["Nadeo Argawinata", "Ernando Ari", "Muhammad Ridho"],
        defenders: ["Asnawi Mangkualam", "Pratama Arhan", "Jordi Amat", "Elkan Baggott", "Rizky Ridho"],
        midfielders: ["Marc Klok", "Egy Maulana Vikri", "Witan Sulaeman", "Thom Haye", "Ivar Jenner"],
        forwards: ["Nathan Tjoe-A-On", "Marselino Ferdinan", "Hokky Caraka", "Dendy Sulistyawan", "Ramadhan Sananta"]
      }
    },
    // GROUP I
    {
      id: 33, name: "Spain", code: "ESP", flag: "🇪🇸", group: "I",
      confederation: "UEFA", fifaRanking: 4, appearances: 16,
      bestFinish: "Champions (2010)", coach: "Luis de la Fuente",
      captain: "Álvaro Morata", stadium: "Santiago Bernabéu",
      colors: { primary: "#AA151B", secondary: "#F1BF00" },
      keyPlayers: ["Pedri", "Gavi", "Lamine Yamal", "Nico Williams", "Rodri"],
      squad: {
        goalkeepers: ["Unai Simón", "David Raya", "Robert Sánchez"],
        defenders: ["Dani Carvajal", "Aymeric Laporte", "Robin Le Normand", "Marc Cucurella", "Alejandro Grimaldo"],
        midfielders: ["Rodri", "Pedri", "Gavi", "Fabián Ruiz", "Dani Olmo"],
        forwards: ["Lamine Yamal", "Nico Williams", "Álvaro Morata", "Ferran Torres", "Mikel Oyarzabal"]
      }
    },
    {
      id: 34, name: "Nigeria", code: "NGA", flag: "🇳🇬", group: "I",
      confederation: "CAF", fifaRanking: 30, appearances: 7,
      bestFinish: "Round of 16 (1994, 1998, 2014)", coach: "Éric Chelle",
      captain: "Ahmed Musa", stadium: "Moshood Abiola Stadium",
      colors: { primary: "#008751", secondary: "#FFFFFF" },
      keyPlayers: ["Victor Osimhen", "Samuel Chukwueze", "Wilfred Ndidi", "Alex Iwobi", "Calvin Bassey"],
      squad: {
        goalkeepers: ["Francis Uzoho", "Maduka Okoye", "Stanley Nwabali"],
        defenders: ["Calvin Bassey", "William Troost-Ekong", "Ola Aina", "Bright Osayi-Samuel", "Semi Ajayi"],
        midfielders: ["Wilfred Ndidi", "Alex Iwobi", "Joe Aribo", "Raphael Onyedika", "Frank Onyeka"],
        forwards: ["Victor Osimhen", "Samuel Chukwueze", "Kelechi Iheanacho", "Ademola Lookman", "Moses Simon"]
      }
    },
    {
      id: 35, name: "Paraguay", code: "PAR", flag: "🇵🇾", group: "I",
      confederation: "CONMEBOL", fifaRanking: 53, appearances: 9,
      bestFinish: "Quarter-Finals (2010)", coach: "Alfaro Moreno",
      captain: "Gustavo Gómez", stadium: "Estadio Defensores del Chaco",
      colors: { primary: "#CE1126", secondary: "#FFFFFF" },
      keyPlayers: ["Miguel Almirón", "Gustavo Gómez", "Julio Enciso", "Matías Rojas", "Omar Alderete"],
      squad: {
        goalkeepers: ["Antony Silva", "Alfaro Aguilar", "Rodrigo Muñoz"],
        defenders: ["Gustavo Gómez", "Omar Alderete", "Junior Alonso", "Robert Rojas", "Alberto Espínola"],
        midfielders: ["Matías Rojas", "Andrés Cubas", "Mathías Villasanti", "Ángel Romero", "Óscar Romero"],
        forwards: ["Miguel Almirón", "Julio Enciso", "Adam Bareiro", "Antonio Sanabria", "Gabriel Ávalos"]
      }
    },
    {
      id: 36, name: "Uzbekistan", code: "UZB", flag: "🇺🇿", group: "I",
      confederation: "AFC", fifaRanking: 60, appearances: 1,
      bestFinish: "Debut (2026)", coach: "Srecko Katanec",
      captain: "Server Djeparov", stadium: "Bunyodkor Stadium",
      colors: { primary: "#1EB53A", secondary: "#FFFFFF" },
      keyPlayers: ["Eldor Shomurodov", "Jaloliddin Masharipov", "Oston Urunov", "Abbosbek Fayzullaev", "Husniddin Aliqulov"],
      squad: {
        goalkeepers: ["Eldorbek Suyunov", "Utkirbek Khaydarov", "Botirali Ergashev"],
        defenders: ["Husniddin Aliqulov", "Rustamjon Ashurmatov", "Davron Khashimov", "Abbas Tursunov", "Akmal Mozgovoy"],
        midfielders: ["Jaloliddin Masharipov", "Oston Urunov", "Jamshid Iskanderov", "Abbosbek Fayzullaev", "Jamaliddin Komilov"],
        forwards: ["Eldor Shomurodov", "Igor Sergeev", "Bobur Abdikholikov", "Azizbek Turgunboev", "Sardor Rashidov"]
      }
    },
    // GROUP J
    {
      id: 37, name: "Portugal", code: "POR", flag: "🇵🇹", group: "J",
      confederation: "UEFA", fifaRanking: 6, appearances: 8,
      bestFinish: "Semi-Finals (1966, 2006)", coach: "Roberto Martínez",
      captain: "Cristiano Ronaldo", stadium: "Estádio da Luz",
      colors: { primary: "#006600", secondary: "#FF0000" },
      keyPlayers: ["Cristiano Ronaldo", "Bruno Fernandes", "Bernardo Silva", "Rafael Leão", "Rúben Dias"],
      squad: {
        goalkeepers: ["Diogo Costa", "Rui Patrício", "José Sá"],
        defenders: ["Rúben Dias", "Pepe", "Nuno Mendes", "João Cancelo", "Diogo Dalot"],
        midfielders: ["Bruno Fernandes", "Bernardo Silva", "Vitinha", "João Palhinha", "João Neves"],
        forwards: ["Cristiano Ronaldo", "Rafael Leão", "Gonçalo Ramos", "Pedro Neto", "Diogo Jota"]
      }
    },
    {
      id: 38, name: "Iran", code: "IRN", flag: "🇮🇷", group: "J",
      confederation: "AFC", fifaRanking: 20, appearances: 7,
      bestFinish: "Group Stage", coach: "Amir Ghalenoei",
      captain: "Ehsan Hajsafi", stadium: "Azadi Stadium",
      colors: { primary: "#FFFFFF", secondary: "#CE1126" },
      keyPlayers: ["Mehdi Taremi", "Sardar Azmoun", "Alireza Jahanbakhsh", "Ehsan Hajsafi", "Saeid Ezatolahi"],
      squad: {
        goalkeepers: ["Alireza Beiranvand", "Hossein Hosseini", "Amir Abedzadeh"],
        defenders: ["Ehsan Hajsafi", "Sadegh Moharrami", "Shoja Khalilzadeh", "Morteza Pouraliganji", "Milad Mohammadi"],
        midfielders: ["Saeid Ezatolahi", "Ahmad Nourollahi", "Saman Ghoddos", "Alireza Jahanbakhsh", "Ali Gholizadeh"],
        forwards: ["Mehdi Taremi", "Sardar Azmoun", "Karim Ansarifard", "Allahyar Sayyadmanesh", "Shahab Zahedi"]
      }
    },
    {
      id: 39, name: "Panama", code: "PAN", flag: "🇵🇦", group: "J",
      confederation: "CONCACAF", fifaRanking: 52, appearances: 2,
      bestFinish: "Group Stage (2018)", coach: "Thomas Christiansen",
      captain: "Aníbal Godoy", stadium: "Estadio Rommel Fernández",
      colors: { primary: "#CE1126", secondary: "#FFFFFF" },
      keyPlayers: ["Aníbal Godoy", "José Luis Rodríguez", "Édgar Bárcenas", "Eric Davis", "César Yanis"],
      squad: {
        goalkeepers: ["Luis Mejía", "Orlando Mosquera", "César Samudio"],
        defenders: ["Eric Davis", "Harold Cummings", "Fidel Escobar", "Michael Amir Murillo", "Andrés Andrade"],
        midfielders: ["Aníbal Godoy", "Adalberto Carrasquilla", "José Luis Rodríguez", "Édgar Bárcenas", "Alberto Quintero"],
        forwards: ["César Yanis", "Rolando Blackburn", "Gabriel Torres", "José Fajardo", "Ismael Díaz"]
      }
    },
    {
      id: 40, name: "Ivory Coast", code: "CIV", flag: "🇨🇮", group: "J",
      confederation: "CAF", fifaRanking: 37, appearances: 4,
      bestFinish: "Group Stage (2006, 2010, 2014)", coach: "Émerse Faé",
      captain: "Franck Kessié", stadium: "Stade Félix Houphouët-Boigny",
      colors: { primary: "#FF8200", secondary: "#009739" },
      keyPlayers: ["Franck Kessié", "Sébastien Haller", "Nicolas Pépé", "Simon Adingra", "Ibrahim Sangaré"],
      squad: {
        goalkeepers: ["Badra Ali Sangaré", "Yahia Fofana", "Eliezer Ira"],
        defenders: ["Serge Aurier", "Eric Bailly", "Willy Boly", "Ghislain Konan", "Emmanuel Agbadou"],
        midfielders: ["Franck Kessié", "Ibrahim Sangaré", "Seko Fofana", "Jean Michael Seri", "Max-Alain Gradel"],
        forwards: ["Sébastien Haller", "Simon Adingra", "Nicolas Pépé", "Wilfried Zaha", "Christian Kouamé"]
      }
    },
    // GROUP K
    {
      id: 41, name: "Netherlands", code: "NED", flag: "🇳🇱", group: "K",
      confederation: "UEFA", fifaRanking: 7, appearances: 11,
      bestFinish: "Runners-Up (1974, 1978, 2010)", coach: "Ronald Koeman",
      captain: "Virgil van Dijk", stadium: "Johan Cruijff ArenA",
      colors: { primary: "#FF6600", secondary: "#FFFFFF" },
      keyPlayers: ["Virgil van Dijk", "Frenkie de Jong", "Cody Gakpo", "Xavi Simons", "Nathan Aké"],
      squad: {
        goalkeepers: ["Bart Verbruggen", "Justin Bijlow", "Mark Flekken"],
        defenders: ["Virgil van Dijk", "Nathan Aké", "Matthijs de Ligt", "Denzel Dumfries", "Jurriën Timber"],
        midfielders: ["Frenkie de Jong", "Xavi Simons", "Tijjani Reijnders", "Teun Koopmeiners", "Ryan Gravenberch"],
        forwards: ["Cody Gakpo", "Memphis Depay", "Donyell Malen", "Steven Bergwijn", "Wout Weghorst"]
      }
    },
    {
      id: 42, name: "Uruguay", code: "URU", flag: "🇺🇾", group: "K",
      confederation: "CONMEBOL", fifaRanking: 10, appearances: 14,
      bestFinish: "Champions (1930, 1950)", coach: "Marcelo Bielsa",
      captain: "Federico Valverde", stadium: "Estadio Centenario",
      colors: { primary: "#0038A8", secondary: "#FFFFFF" },
      keyPlayers: ["Federico Valverde", "Darwin Núñez", "Ronald Araújo", "Rodrigo Bentancur", "Facundo Pellistri"],
      squad: {
        goalkeepers: ["Sergio Rochet", "Fernando Muslera", "Santiago Mele"],
        defenders: ["Ronald Araújo", "José Giménez", "Mathías Olivera", "Guillermo Varela", "Sebastián Cáceres"],
        midfielders: ["Federico Valverde", "Rodrigo Bentancur", "Nicolás De La Cruz", "Manuel Ugarte", "Giorgian De Arrascaeta"],
        forwards: ["Darwin Núñez", "Luis Suárez", "Facundo Pellistri", "Maximiliano Gómez", "Agustín Canobbio"]
      }
    },
    {
      id: 43, name: "Ghana", code: "GHA", flag: "🇬🇭", group: "K",
      confederation: "CAF", fifaRanking: 61, appearances: 5,
      bestFinish: "Quarter-Finals (2010)", coach: "Otto Addo",
      captain: "André Ayew", stadium: "Accra Sports Stadium",
      colors: { primary: "#000000", secondary: "#CE1126" },
      keyPlayers: ["André Ayew", "Thomas Partey", "Mohammed Kudus", "Inaki Williams", "Tariq Lamptey"],
      squad: {
        goalkeepers: ["Lawrence Ati-Zigi", "Abdul Manaf Nurudeen", "Ibrahim Danlad"],
        defenders: ["Tariq Lamptey", "Alexander Djiku", "Mohammed Salisu", "Daniel Amartey", "Gideon Mensah"],
        midfielders: ["Thomas Partey", "Mohammed Kudus", "Salis Abdul Samed", "Daniel-Kofi Kyereh", "Elisha Owusu"],
        forwards: ["André Ayew", "Inaki Williams", "Jordan Ayew", "Antoine Semenyo", "Osman Bukari"]
      }
    },
    {
      id: 44, name: "Honduras", code: "HON", flag: "🇭🇳", group: "K",
      confederation: "CONCACAF", fifaRanking: 74, appearances: 4,
      bestFinish: "Group Stage (2010, 2014)", coach: "Reinaldo Rueda",
      captain: "Alberth Elis", stadium: "Estadio Olímpico Metropolitano",
      colors: { primary: "#0051A5", secondary: "#FFFFFF" },
      keyPlayers: ["Alberth Elis", "Romell Quioto", "Kervin Arriaga", "Maynor Figueroa", "Andy Najar"],
      squad: {
        goalkeepers: ["Luis López", "Edrick Menjívar", "Rafael Zúniga"],
        defenders: ["Maynor Figueroa", "Denil Maldonado", "Kevin Álvarez", "Diego Rodríguez", "Wesly Decas"],
        midfielders: ["Kervin Arriaga", "Deybi Flores", "Edwin Rodríguez", "Andy Najar", "Bryan Acosta"],
        forwards: ["Alberth Elis", "Romell Quioto", "Anthony Lozano", "Jerry Bengtson", "Rubilio Castillo"]
      }
    },
    // GROUP L
    {
      id: 45, name: "Belgium", code: "BEL", flag: "🇧🇪", group: "L",
      confederation: "UEFA", fifaRanking: 9, appearances: 14,
      bestFinish: "Semi-Finals (2018)", coach: "Domenico Tedesco",
      captain: "Kevin De Bruyne", stadium: "King Baudouin Stadium",
      colors: { primary: "#CE1126", secondary: "#000000" },
      keyPlayers: ["Kevin De Bruyne", "Romelu Lukaku", "Jeremy Doku", "Amadou Onana", "Arthur Theate"],
      squad: {
        goalkeepers: ["Thibaut Courtois", "Koen Casteels", "Matz Sels"],
        defenders: ["Jan Vertonghen", "Arthur Theate", "Zeno Debast", "Timothy Castagne", "Maxim De Cuyper"],
        midfielders: ["Kevin De Bruyne", "Amadou Onana", "Youri Tielemans", "Orel Mangala", "Aster Vranckx"],
        forwards: ["Romelu Lukaku", "Jeremy Doku", "Lois Openda", "Dodi Lukébakio", "Johan Bakayoko"]
      }
    },
    {
      id: 46, name: "Croatia", code: "CRO", flag: "🇭🇷", group: "L",
      confederation: "UEFA", fifaRanking: 16, appearances: 7,
      bestFinish: "Runners-Up (2018)", coach: "Zlatko Dalić",
      captain: "Luka Modrić", stadium: "Stadion Maksimir",
      colors: { primary: "#FF0000", secondary: "#FFFFFF" },
      keyPlayers: ["Luka Modrić", "Mateo Kovačić", "Joško Gvardiol", "Andrej Kramarić", "Marcelo Brozović"],
      squad: {
        goalkeepers: ["Dominik Livaković", "Ivica Ivušić", "Nediljko Labrović"],
        defenders: ["Joško Gvardiol", "Domagoj Vida", "Borna Sosa", "Josip Stanišić", "Martin Erlić"],
        midfielders: ["Luka Modrić", "Mateo Kovačić", "Marcelo Brozović", "Mario Pašalić", "Lovro Majer"],
        forwards: ["Andrej Kramarić", "Bruno Petković", "Ivan Perišić", "Marko Livaja", "Ante Budimir"]
      }
    },
    {
      id: 47, name: "Ukraine", code: "UKR", flag: "🇺🇦", group: "L",
      confederation: "UEFA", fifaRanking: 25, appearances: 2,
      bestFinish: "Quarter-Finals (2006)", coach: "Serhiy Rebrov",
      captain: "Andriy Yarmolenko", stadium: "NSC Olimpiyskiy",
      colors: { primary: "#005BBB", secondary: "#FFD500" },
      keyPlayers: ["Oleksandr Zinchenko", "Mykhailo Mudryk", "Artem Dovbyk", "Andriy Yarmolenko", "Georgiy Sudakov"],
      squad: {
        goalkeepers: ["Anatoliy Trubin", "Andriy Lunin", "Heorhiy Bushchan"],
        defenders: ["Oleksandr Zinchenko", "Illia Zabarnyi", "Mykola Matviyenko", "Yukhym Konoplia", "Vitaliy Mykolenko"],
        midfielders: ["Georgiy Sudakov", "Taras Stepanenko", "Oleksandr Zubkov", "Serhiy Sydorchuk", "Viktor Tsygankov"],
        forwards: ["Mykhailo Mudryk", "Artem Dovbyk", "Andriy Yarmolenko", "Roman Yaremchuk", "Vladyslav Vanat"]
      }
    },
    {
      id: 48, name: "Tunisia", code: "TUN", flag: "🇹🇳", group: "L",
      confederation: "CAF", fifaRanking: 42, appearances: 6,
      bestFinish: "Group Stage", coach: "Faouzi Benzarti",
      captain: "Youssef Msakni", stadium: "Stade Olympique de Radès",
      colors: { primary: "#CE1126", secondary: "#FFFFFF" },
      keyPlayers: ["Youssef Msakni", "Aïssa Laïdouni", "Wahbi Khazri", "Hannibal Mejbri", "Mohamed Ali Ben Romdhane"],
      squad: {
        goalkeepers: ["Aymen Dahmen", "Mouez Hassen", "Béchir Ben Saïd"],
        defenders: ["Montassar Talbi", "Dylan Bronn", "Mohamed Dräger", "Ali Maâloul", "Nader Ghandri"],
        midfielders: ["Aïssa Laïdouni", "Hannibal Mejbri", "Mohamed Ali Ben Romdhane", "Ellyes Skhiri", "Naïm Sliti"],
        forwards: ["Youssef Msakni", "Wahbi Khazri", "Seifeddine Jaziri", "Anis Ben Slimane", "Issam Jebali"]
      }
    }
  ],

  // ============================================================
  // KEY FIXTURES (Sample matches for each stage)
  // ============================================================
  fixtures: [
    // OPENING MATCH
    { id: 1, stage: "Group Stage", group: "C", date: "2026-06-11", time: "20:00", home: "Mexico", away: "Ecuador", stadium: "Estadio Azteca", city: "Mexico City", status: "scheduled" },
    // GROUP A - Matchday 1
    { id: 2, stage: "Group Stage", group: "A", date: "2026-06-12", time: "18:00", home: "United States", away: "Burkina Faso", stadium: "SoFi Stadium", city: "Los Angeles", status: "scheduled" },
    { id: 3, stage: "Group Stage", group: "A", date: "2026-06-12", time: "21:00", home: "Morocco", away: "Scotland", stadium: "MetLife Stadium", city: "New York/NJ", status: "scheduled" },
    // GROUP B - Matchday 1
    { id: 4, stage: "Group Stage", group: "B", date: "2026-06-12", time: "15:00", home: "Argentina", away: "Bahrain", stadium: "Hard Rock Stadium", city: "Miami", status: "scheduled" },
    { id: 5, stage: "Group Stage", group: "B", date: "2026-06-12", time: "12:00", home: "Denmark", away: "Australia", stadium: "Lumen Field", city: "Seattle", status: "scheduled" },
    // GROUP C - Matchday 1
    { id: 6, stage: "Group Stage", group: "C", date: "2026-06-13", time: "18:00", home: "Peru", away: "Bolivia", stadium: "Estadio BBVA", city: "Monterrey", status: "scheduled" },
    // GROUP D - Matchday 1
    { id: 7, stage: "Group Stage", group: "D", date: "2026-06-13", time: "21:00", home: "France", away: "New Zealand", stadium: "AT&T Stadium", city: "Dallas", status: "scheduled" },
    { id: 8, stage: "Group Stage", group: "D", date: "2026-06-13", time: "15:00", home: "Colombia", away: "South Korea", stadium: "Mercedes-Benz Stadium", city: "Atlanta", status: "scheduled" },
    // GROUP E - Matchday 1
    { id: 9, stage: "Group Stage", group: "E", date: "2026-06-14", time: "18:00", home: "Brazil", away: "Saudi Arabia", stadium: "NRG Stadium", city: "Houston", status: "scheduled" },
    { id: 10, stage: "Group Stage", group: "E", date: "2026-06-14", time: "21:00", home: "Turkey", away: "China PR", stadium: "Lincoln Financial Field", city: "Philadelphia", status: "scheduled" },
    // GROUP F - Matchday 1
    { id: 11, stage: "Group Stage", group: "F", date: "2026-06-14", time: "12:00", home: "England", away: "Trinidad and Tobago", stadium: "Arrowhead Stadium", city: "Kansas City", status: "scheduled" },
    { id: 12, stage: "Group Stage", group: "F", date: "2026-06-14", time: "15:00", home: "Senegal", away: "Slovenia", stadium: "Gillette Stadium", city: "Boston", status: "scheduled" },
    // GROUP G - Matchday 1
    { id: 13, stage: "Group Stage", group: "G", date: "2026-06-15", time: "18:00", home: "Canada", away: "Qatar", stadium: "BMO Field", city: "Toronto", status: "scheduled" },
    { id: 14, stage: "Group Stage", group: "G", date: "2026-06-15", time: "21:00", home: "Serbia", away: "Cameroon", stadium: "BC Place", city: "Vancouver", status: "scheduled" },
    // GROUP H - Matchday 1
    { id: 15, stage: "Group Stage", group: "H", date: "2026-06-15", time: "15:00", home: "Germany", away: "Indonesia", stadium: "Levi's Stadium", city: "San Francisco", status: "scheduled" },
    { id: 16, stage: "Group Stage", group: "H", date: "2026-06-15", time: "12:00", home: "Japan", away: "Costa Rica", stadium: "Estadio Akron", city: "Guadalajara", status: "scheduled" },
    // GROUP I - Matchday 1
    { id: 17, stage: "Group Stage", group: "I", date: "2026-06-16", time: "18:00", home: "Spain", away: "Uzbekistan", stadium: "SoFi Stadium", city: "Los Angeles", status: "scheduled" },
    { id: 18, stage: "Group Stage", group: "I", date: "2026-06-16", time: "21:00", home: "Nigeria", away: "Paraguay", stadium: "Hard Rock Stadium", city: "Miami", status: "scheduled" },
    // GROUP J - Matchday 1
    { id: 19, stage: "Group Stage", group: "J", date: "2026-06-16", time: "15:00", home: "Portugal", away: "Ivory Coast", stadium: "MetLife Stadium", city: "New York/NJ", status: "scheduled" },
    { id: 20, stage: "Group Stage", group: "J", date: "2026-06-16", time: "12:00", home: "Iran", away: "Panama", stadium: "AT&T Stadium", city: "Dallas", status: "scheduled" },
    // GROUP K - Matchday 1
    { id: 21, stage: "Group Stage", group: "K", date: "2026-06-17", time: "18:00", home: "Netherlands", away: "Honduras", stadium: "Mercedes-Benz Stadium", city: "Atlanta", status: "scheduled" },
    { id: 22, stage: "Group Stage", group: "K", date: "2026-06-17", time: "21:00", home: "Uruguay", away: "Ghana", stadium: "Lincoln Financial Field", city: "Philadelphia", status: "scheduled" },
    // GROUP L - Matchday 1
    { id: 23, stage: "Group Stage", group: "L", date: "2026-06-17", time: "15:00", home: "Belgium", away: "Tunisia", stadium: "NRG Stadium", city: "Houston", status: "scheduled" },
    { id: 24, stage: "Group Stage", group: "L", date: "2026-06-17", time: "12:00", home: "Croatia", away: "Ukraine", stadium: "Lumen Field", city: "Seattle", status: "scheduled" },
    // MATCHDAY 2 HIGHLIGHTS
    { id: 25, stage: "Group Stage", group: "A", date: "2026-06-18", time: "21:00", home: "United States", away: "Morocco", stadium: "MetLife Stadium", city: "New York/NJ", status: "scheduled" },
    { id: 26, stage: "Group Stage", group: "A", date: "2026-06-18", time: "15:00", home: "Scotland", away: "Burkina Faso", stadium: "Arrowhead Stadium", city: "Kansas City", status: "scheduled" },
    { id: 27, stage: "Group Stage", group: "B", date: "2026-06-19", time: "21:00", home: "Argentina", away: "Denmark", stadium: "Hard Rock Stadium", city: "Miami", status: "scheduled" },
    { id: 28, stage: "Group Stage", group: "B", date: "2026-06-19", time: "15:00", home: "Australia", away: "Bahrain", stadium: "Gillette Stadium", city: "Boston", status: "scheduled" },
    { id: 29, stage: "Group Stage", group: "D", date: "2026-06-20", time: "21:00", home: "France", away: "Colombia", stadium: "SoFi Stadium", city: "Los Angeles", status: "scheduled" },
    { id: 30, stage: "Group Stage", group: "E", date: "2026-06-21", time: "21:00", home: "Brazil", away: "Turkey", stadium: "AT&T Stadium", city: "Dallas", status: "scheduled" },
    { id: 31, stage: "Group Stage", group: "F", date: "2026-06-22", time: "18:00", home: "England", away: "Senegal", stadium: "MetLife Stadium", city: "New York/NJ", status: "scheduled" },
    // MATCHDAY 3 HIGHLIGHTS
    { id: 32, stage: "Group Stage", group: "A", date: "2026-06-24", time: "21:00", home: "United States", away: "Scotland", stadium: "AT&T Stadium", city: "Dallas", status: "scheduled" },
    { id: 33, stage: "Group Stage", group: "A", date: "2026-06-24", time: "21:00", home: "Morocco", away: "Burkina Faso", stadium: "SoFi Stadium", city: "Los Angeles", status: "scheduled" },
    { id: 34, stage: "Group Stage", group: "B", date: "2026-06-25", time: "18:00", home: "Argentina", away: "Australia", stadium: "NRG Stadium", city: "Houston", status: "scheduled" },
    { id: 35, stage: "Group Stage", group: "D", date: "2026-06-26", time: "21:00", home: "France", away: "South Korea", stadium: "Lincoln Financial Field", city: "Philadelphia", status: "scheduled" },
    { id: 36, stage: "Group Stage", group: "E", date: "2026-06-27", time: "21:00", home: "Brazil", away: "China PR", stadium: "Mercedes-Benz Stadium", city: "Atlanta", status: "scheduled" },
    // KNOCKOUT STAGE
    { id: 37, stage: "Round of 32", group: null, date: "2026-07-01", time: "18:00", home: "1A", away: "2C", stadium: "MetLife Stadium", city: "New York/NJ", status: "scheduled" },
    { id: 38, stage: "Round of 32", group: null, date: "2026-07-01", time: "21:00", home: "1B", away: "2D", stadium: "SoFi Stadium", city: "Los Angeles", status: "scheduled" },
    { id: 39, stage: "Round of 32", group: null, date: "2026-07-02", time: "18:00", home: "1C", away: "2A", stadium: "Estadio Azteca", city: "Mexico City", status: "scheduled" },
    { id: 40, stage: "Round of 32", group: null, date: "2026-07-02", time: "21:00", home: "1D", away: "2B", stadium: "AT&T Stadium", city: "Dallas", status: "scheduled" },
    { id: 41, stage: "Round of 32", group: null, date: "2026-07-03", time: "18:00", home: "1E", away: "2G", stadium: "Hard Rock Stadium", city: "Miami", status: "scheduled" },
    { id: 42, stage: "Round of 32", group: null, date: "2026-07-03", time: "21:00", home: "1F", away: "2H", stadium: "Mercedes-Benz Stadium", city: "Atlanta", status: "scheduled" },
    { id: 43, stage: "Round of 32", group: null, date: "2026-07-04", time: "18:00", home: "1G", away: "2E", stadium: "BMO Field", city: "Toronto", status: "scheduled" },
    { id: 44, stage: "Round of 32", group: null, date: "2026-07-04", time: "21:00", home: "1H", away: "2F", stadium: "Lumen Field", city: "Seattle", status: "scheduled" },
    // ROUND OF 16
    { id: 45, stage: "Round of 16", group: null, date: "2026-07-05", time: "18:00", home: "W37", away: "W38", stadium: "AT&T Stadium", city: "Dallas", status: "scheduled" },
    { id: 46, stage: "Round of 16", group: null, date: "2026-07-05", time: "21:00", home: "W39", away: "W40", stadium: "MetLife Stadium", city: "New York/NJ", status: "scheduled" },
    { id: 47, stage: "Round of 16", group: null, date: "2026-07-06", time: "18:00", home: "W41", away: "W42", stadium: "SoFi Stadium", city: "Los Angeles", status: "scheduled" },
    { id: 48, stage: "Round of 16", group: null, date: "2026-07-06", time: "21:00", home: "W43", away: "W44", stadium: "Hard Rock Stadium", city: "Miami", status: "scheduled" },
    // QUARTER-FINALS
    { id: 49, stage: "Quarter-Final", group: null, date: "2026-07-09", time: "18:00", home: "W45", away: "W46", stadium: "MetLife Stadium", city: "New York/NJ", status: "scheduled" },
    { id: 50, stage: "Quarter-Final", group: null, date: "2026-07-09", time: "21:00", home: "W47", away: "W48", stadium: "Hard Rock Stadium", city: "Miami", status: "scheduled" },
    { id: 51, stage: "Quarter-Final", group: null, date: "2026-07-10", time: "18:00", home: "TBD", away: "TBD", stadium: "Lincoln Financial Field", city: "Philadelphia", status: "scheduled" },
    { id: 52, stage: "Quarter-Final", group: null, date: "2026-07-10", time: "21:00", home: "TBD", away: "TBD", stadium: "Mercedes-Benz Stadium", city: "Atlanta", status: "scheduled" },
    // SEMI-FINALS
    { id: 53, stage: "Semi-Final", group: null, date: "2026-07-14", time: "21:00", home: "TBD", away: "TBD", stadium: "SoFi Stadium", city: "Los Angeles", status: "scheduled" },
    { id: 54, stage: "Semi-Final", group: null, date: "2026-07-15", time: "21:00", home: "TBD", away: "TBD", stadium: "AT&T Stadium", city: "Dallas", status: "scheduled" },
    // THIRD PLACE MATCH
    { id: 55, stage: "Third-Place Match", group: null, date: "2026-07-18", time: "18:00", home: "TBD", away: "TBD", stadium: "Hard Rock Stadium", city: "Miami", status: "scheduled" },
    // FINAL
    { id: 56, stage: "Final", group: null, date: "2026-07-19", time: "21:00", home: "TBD", away: "TBD", stadium: "MetLife Stadium", city: "New York/NJ", status: "scheduled" }
  ],

  // ============================================================
  // NEWS ARTICLES
  // ============================================================
  news: [
    {
      id: 1,
      title: "FIFA World Cup 2026™ Draw Complete: 48 Teams Learn Their Fate",
      category: "draw",
      date: "2025-12-13",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600",
      summary: "The historic draw for the first-ever 48-team FIFA World Cup has been conducted in Miami, with hosts USA, Mexico, and Canada placed in Groups A, C, and G respectively.",
      content: "In a spectacular ceremony at the Adrienne Arsht Center in Miami, the draw for the FIFA World Cup 2026™ was conducted, determining the groups for all 48 participating nations. This marks the first time the tournament will feature 48 teams, divided into 12 groups of four. The draw produced several blockbuster matchups, with defending champions Argentina drawn alongside Denmark, while Group E features Brazil, Turkey, China, and Saudi Arabia.",
      author: "FIFA.com",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "MetLife Stadium Confirmed as FIFA World Cup 2026™ Final Venue",
      category: "stadiums",
      date: "2025-11-20",
      image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600",
      summary: "The 82,500-capacity MetLife Stadium in East Rutherford, New Jersey will host the biggest sporting event on the planet.",
      content: "FIFA has officially confirmed that MetLife Stadium will host the FIFA World Cup 2026™ Final on July 19, 2026. The venue, located just minutes from New York City, will undergo significant modifications including the installation of a natural grass surface. The stadium will also host several group stage matches and a quarter-final, making it one of the busiest venues of the tournament.",
      author: "FIFA.com",
      readTime: "4 min"
    },
    {
      id: 3,
      title: "Messi Confirms: 'World Cup 2026 Will Be My Last Dance'",
      category: "players",
      date: "2026-01-15",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600",
      summary: "Argentine legend Lionel Messi has confirmed he will compete in the 2026 FIFA World Cup, calling it his farewell to the international stage.",
      content: "In an emotional interview with TyC Sports, Lionel Messi confirmed that the 2026 FIFA World Cup in the United States will be his final World Cup appearance. 'After winning it in Qatar, there is nothing more beautiful than defending the title. This will be my last dance,' said the 38-year-old legend. Messi, who has scored 108 goals for Argentina in 186 appearances, will look to become only the second captain to lift the trophy in consecutive World Cups.",
      author: "AP Sports",
      readTime: "3 min"
    },
    {
      id: 4,
      title: "Cristiano Ronaldo to Lead Portugal at Age 41",
      category: "players",
      date: "2026-02-01",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600",
      summary: "Portugal coach Roberto Martínez confirms Cristiano Ronaldo will captain the team at the 2026 World Cup.",
      content: "Roberto Martínez has confirmed that Cristiano Ronaldo will lead Portugal at the 2026 FIFA World Cup, making him the oldest outfield player to appear in the competition's history at age 41. 'Cristiano is still one of our most important players. His leadership, experience, and goalscoring ability remain invaluable,' said Martínez. Ronaldo, now with 130+ international goals, will bid for World Cup glory in what is expected to be his final tournament.",
      author: "Reuters",
      readTime: "4 min"
    },
    {
      id: 5,
      title: "Indonesia and Bahrain Set to Make Historic World Cup Debuts",
      category: "teams",
      date: "2026-01-28",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600",
      summary: "Two nations will experience the World Cup for the very first time when the tournament kicks off in June 2026.",
      content: "The FIFA World Cup 2026™ will witness two debut nations — Indonesia and Bahrain — both making historic first appearances. Indonesia, drawn in Group H alongside Germany, Japan, and Costa Rica, faces a tough challenge but carries the hopes of 270+ million people. Bahrain, in Group B with Argentina, Denmark, and Australia, qualified through an inspiring AFC qualification campaign.",
      author: "BBC Sport",
      readTime: "5 min"
    },
    {
      id: 6,
      title: "Estadio Azteca Makes History as First Stadium to Host Three World Cups",
      category: "stadiums",
      date: "2025-10-15",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600",
      summary: "Mexico City's iconic Estadio Azteca will host the tournament's opening match, becoming the first venue to feature in three World Cups.",
      content: "The legendary Estadio Azteca in Mexico City will make history when it hosts the opening match of the FIFA World Cup 2026™ between Mexico and Ecuador on June 11. The 87,523-capacity stadium previously hosted the finals in 1970 and 1986, and has witnessed some of football's greatest moments including Maradona's 'Hand of God' and 'Goal of the Century'. Extensive renovations have been completed to modernize the venue.",
      author: "ESPN",
      readTime: "6 min"
    },
    {
      id: 7,
      title: "Record 5 Million Tickets Available for World Cup 2026",
      category: "tournament",
      date: "2025-09-01",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600",
      summary: "FIFA announces the largest ever ticket allocation for a World Cup, with over 5 million tickets across 16 venues.",
      content: "FIFA has announced that a record 5 million+ tickets will be available for the 2026 World Cup, the largest allocation in tournament history. The expansion to 48 teams and 104 matches, spread across 16 world-class venues in three countries, allows significantly more fans to experience the tournament live. Ticket prices start at $50 for group stage matches, with special allocations for host nation residents.",
      author: "FIFA.com",
      readTime: "4 min"
    },
    {
      id: 8,
      title: "Kylian Mbappé Leads Golden Boot Race Predictions",
      category: "players",
      date: "2026-02-10",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600",
      summary: "The French superstar is the bookmakers' favorite to win the Golden Boot at the 2026 World Cup.",
      content: "Kylian Mbappé, now 27 and at the peak of his powers with Real Madrid, has been installed as the favorite to win the Golden Boot at the 2026 FIFA World Cup. The French captain, who scored 8 goals at the 2022 World Cup including a hat-trick in the final, will be looking to go one better after the heartbreak of losing on penalties to Argentina. Other contenders include Harry Kane, Vinícius Jr., and Erling Haaland (should Norway qualify through playoffs).",
      author: "The Guardian",
      readTime: "3 min"
    },
    {
      id: 9,
      title: "VAR Technology Upgraded: Semi-Automated Offside to Feature at World Cup 2026",
      category: "tournament",
      date: "2026-01-05",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600",
      summary: "FIFA confirms enhanced VAR and semi-automated offside technology will be used across all 104 matches.",
      content: "FIFA has confirmed that the most advanced VAR system ever deployed will be used at the 2026 World Cup. Building on the semi-automated offside technology introduced at the 2022 World Cup in Qatar, the upgraded system features AI-enhanced ball tracking, improved camera angles (38 cameras per stadium), and faster decision-making algorithms. The average time for offside decisions is expected to drop to under 25 seconds.",
      author: "FIFA.com",
      readTime: "5 min"
    },
    {
      id: 10,
      title: "Young Stars to Watch: Yamal, Endrick, Mainoo and More",
      category: "players",
      date: "2026-02-20",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600",
      summary: "A new generation of football superstars is ready to illuminate the biggest stage in world football.",
      content: "The 2026 World Cup promises to be a showcase for football's brightest young talents. Spain's Lamine Yamal (18) has already established himself as one of the world's best wingers. Brazil's Endrick (19) carries the hopes of a nation desperate to end their 24-year World Cup drought. England's Kobbie Mainoo (21) anchors the Three Lions' midfield alongside Jude Bellingham. Turkey's Arda Güler (21) and Germany's Florian Wirtz (23) round out the list of wonderkids ready to announce themselves on the global stage.",
      author: "Sky Sports",
      readTime: "6 min"
    },
    {
      id: 11,
      title: "USA 2026: Transportation Infrastructure Ready for World Cup",
      category: "tournament",
      date: "2026-02-15",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600",
      summary: "Host cities across the US, Mexico, and Canada finalize transportation plans for the 48-team mega event.",
      content: "All 16 host cities have finalized their transportation plans for the FIFA World Cup 2026™. The United States has invested over $2 billion in infrastructure improvements, including expanded public transit routes, dedicated shuttle services, and enhanced airport capacity. Mexico City's metro system has added World Cup-specific routes, while Toronto and Vancouver have prepared comprehensive multi-modal transit plans. Fan zones in each city will be connected via free shuttle services to stadiums.",
      author: "Associated Press",
      readTime: "7 min"
    },
    {
      id: 12,
      title: "World Cup 2026 Official Song Collaboration Features Global Artists",
      category: "culture",
      date: "2026-02-25",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600",
      summary: "FIFA reveals a star-studded lineup for the official World Cup 2026 anthem.",
      content: "FIFA has unveiled the official anthem for the 2026 World Cup, featuring a historic collaboration between artists from all three host nations and beyond. The song, titled 'We Are 26', brings together artists from across North America and the world. The anthem reflects the tournament's theme of unity and the historic nature of the first tri-nation World Cup. A special performance is planned for the opening ceremony at Estadio Azteca.",
      author: "Billboard",
      readTime: "3 min"
    }
  ],

  // ============================================================
  // STAR PLAYERS (Featured)
  // ============================================================
  starPlayers: [
    { name: "Lionel Messi", team: "Argentina", flag: "🇦🇷", position: "Forward", age: 38, club: "Inter Miami CF", goals: 108, caps: 186, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200", rating: 93 },
    { name: "Kylian Mbappé", team: "France", flag: "🇫🇷", position: "Forward", age: 27, club: "Real Madrid", goals: 47, caps: 86, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200", rating: 95 },
    { name: "Vinícius Jr.", team: "Brazil", flag: "🇧🇷", position: "Forward", age: 25, club: "Real Madrid", goals: 22, caps: 42, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200", rating: 93 },
    { name: "Jude Bellingham", team: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", position: "Midfielder", age: 22, club: "Real Madrid", goals: 10, caps: 40, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200", rating: 92 },
    { name: "Lamine Yamal", team: "Spain", flag: "🇪🇸", position: "Forward", age: 18, club: "FC Barcelona", goals: 8, caps: 30, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200", rating: 90 },
    { name: "Cristiano Ronaldo", team: "Portugal", flag: "🇵🇹", position: "Forward", age: 41, club: "Al Nassr", goals: 135, caps: 215, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200", rating: 88 },
    { name: "Harry Kane", team: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", position: "Forward", age: 32, club: "Bayern Munich", goals: 68, caps: 98, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200", rating: 91 },
    { name: "Endrick", team: "Brazil", flag: "🇧🇷", position: "Forward", age: 19, club: "Real Madrid", goals: 6, caps: 15, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200", rating: 86 },
    { name: "Florian Wirtz", team: "Germany", flag: "🇩🇪", position: "Midfielder", age: 23, club: "Bayer Leverkusen", goals: 12, caps: 35, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200", rating: 91 },
    { name: "Pedri", team: "Spain", flag: "🇪🇸", position: "Midfielder", age: 23, club: "FC Barcelona", goals: 4, caps: 38, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200", rating: 90 },
    { name: "Son Heung-min", team: "South Korea", flag: "🇰🇷", position: "Forward", age: 33, club: "Tottenham", goals: 48, caps: 130, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200", rating: 89 },
    { name: "Alphonso Davies", team: "Canada", flag: "🇨🇦", position: "Defender", age: 25, club: "Real Madrid", goals: 5, caps: 55, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200", rating: 88 },
    { name: "Christian Pulisic", team: "USA", flag: "🇺🇸", position: "Midfielder", age: 27, club: "AC Milan", goals: 30, caps: 72, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200", rating: 87 },
    { name: "Achraf Hakimi", team: "Morocco", flag: "🇲🇦", position: "Defender", age: 27, club: "PSG", goals: 9, caps: 80, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200", rating: 88 },
    { name: "Victor Osimhen", team: "Nigeria", flag: "🇳🇬", position: "Forward", age: 27, club: "Napoli", goals: 22, caps: 35, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200", rating: 89 },
    { name: "Jamal Musiala", team: "Germany", flag: "🇩🇪", position: "Midfielder", age: 23, club: "Bayern Munich", goals: 8, caps: 40, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200", rating: 91 },
  ],

  // ============================================================
  // PAST WORLD CUP WINNERS (History)
  // ============================================================
  history: [
    { year: 2022, host: "Qatar", winner: "Argentina", runnerUp: "France", third: "Croatia", topScorer: "Kylian Mbappé (8)", goldenBall: "Lionel Messi" },
    { year: 2018, host: "Russia", winner: "France", runnerUp: "Croatia", third: "Belgium", topScorer: "Harry Kane (6)", goldenBall: "Luka Modrić" },
    { year: 2014, host: "Brazil", winner: "Germany", runnerUp: "Argentina", third: "Netherlands", topScorer: "James Rodríguez (6)", goldenBall: "Lionel Messi" },
    { year: 2010, host: "South Africa", winner: "Spain", runnerUp: "Netherlands", third: "Germany", topScorer: "Thomas Müller (5)", goldenBall: "Diego Forlán" },
    { year: 2006, host: "Germany", winner: "Italy", runnerUp: "France", third: "Germany", topScorer: "Miroslav Klose (5)", goldenBall: "Zinedine Zidane" },
    { year: 2002, host: "Japan/South Korea", winner: "Brazil", runnerUp: "Germany", third: "Turkey", topScorer: "Ronaldo (8)", goldenBall: "Oliver Kahn" },
    { year: 1998, host: "France", winner: "France", runnerUp: "Brazil", third: "Croatia", topScorer: "Davor Šuker (6)", goldenBall: "Ronaldo" },
    { year: 1994, host: "United States", winner: "Brazil", runnerUp: "Italy", third: "Sweden", topScorer: "Hristo Stoichkov & Oleg Salenko (6)", goldenBall: "Romário" },
    { year: 1990, host: "Italy", winner: "Germany", runnerUp: "Argentina", third: "Italy", topScorer: "Salvatore Schillaci (6)", goldenBall: "Salvatore Schillaci" },
    { year: 1986, host: "Mexico", winner: "Argentina", runnerUp: "Germany", third: "France", topScorer: "Gary Lineker (6)", goldenBall: "Diego Maradona" },
    { year: 1982, host: "Spain", winner: "Italy", runnerUp: "Germany", third: "Poland", topScorer: "Paolo Rossi (6)", goldenBall: "Paolo Rossi" },
    { year: 1978, host: "Argentina", winner: "Argentina", runnerUp: "Netherlands", third: "Brazil", topScorer: "Mario Kempes (6)", goldenBall: "Mario Kempes" },
    { year: 1974, host: "Germany", winner: "Germany", runnerUp: "Netherlands", third: "Poland", topScorer: "Grzegorz Lato (7)", goldenBall: "Johan Cruyff" },
    { year: 1970, host: "Mexico", winner: "Brazil", runnerUp: "Italy", third: "Germany", topScorer: "Gerd Müller (10)", goldenBall: "Pelé" },
    { year: 1966, host: "England", winner: "England", runnerUp: "Germany", third: "Portugal", topScorer: "Eusébio (9)", goldenBall: "Bobby Charlton" },
    { year: 1962, host: "Chile", winner: "Brazil", runnerUp: "Czechoslovakia", third: "Chile", topScorer: "Multiple (4)", goldenBall: "Garrincha" },
    { year: 1958, host: "Sweden", winner: "Brazil", runnerUp: "Sweden", third: "France", topScorer: "Just Fontaine (13)", goldenBall: "Didi" },
    { year: 1954, host: "Switzerland", winner: "Germany", runnerUp: "Hungary", third: "Austria", topScorer: "Sándor Kocsis (11)", goldenBall: "Fritz Walter" },
    { year: 1950, host: "Brazil", winner: "Uruguay", runnerUp: "Brazil", third: "Sweden", topScorer: "Ademir (8)", goldenBall: "Zizinho" },
    { year: 1938, host: "France", winner: "Italy", runnerUp: "Hungary", third: "Brazil", topScorer: "Leônidas (7)", goldenBall: "Leônidas" },
    { year: 1934, host: "Italy", winner: "Italy", runnerUp: "Czechoslovakia", third: "Germany", topScorer: "Oldřich Nejedlý (5)", goldenBall: "Giuseppe Meazza" },
    { year: 1930, host: "Uruguay", winner: "Uruguay", runnerUp: "Argentina", third: "USA", topScorer: "Guillermo Stábile (8)", goldenBall: "José Nasazzi" }
  ],

  // ============================================================
  // WORLD CUP RECORDS
  // ============================================================
  records: {
    allTimeTopScorer: { name: "Miroslav Klose", goals: 16, country: "Germany" },
    mostAppearances: { name: "Lothar Matthäus", matches: 25, country: "Germany" },
    mostTitles: { country: "Brazil", titles: 5 },
    highestScoringMatch: { match: "Austria 7-5 Switzerland", year: 1954 },
    fastestGoal: { name: "Hakan Şükür", seconds: 11, year: 2002, country: "Turkey" },
    mostGoalsInTournament: { name: "Just Fontaine", goals: 13, year: 1958, country: "France" },
    oldestPlayer: { name: "Essam El-Hadary", age: "45y 161d", year: 2018, country: "Egypt" },
    youngestPlayer: { name: "Norman Whiteside", age: "17y 41d", year: 1982, country: "Northern Ireland" },
    mostAttendance: { year: 1994, host: "USA", total: "3,587,538" }
  },

  // ============================================================
  // CONFEDERATION BREAKDOWN
  // ============================================================
  confederations: [
    { name: "UEFA (Europe)", slots: 16, color: "#003399", teams: ["France", "England", "Spain", "Germany", "Portugal", "Netherlands", "Belgium", "Croatia", "Denmark", "Serbia", "Scotland", "Slovenia", "Ukraine", "Turkey"] },
    { name: "CONMEBOL (South America)", slots: 6, color: "#00A859", teams: ["Argentina", "Brazil", "Uruguay", "Colombia", "Ecuador", "Paraguay", "Peru", "Bolivia"] },
    { name: "CONCACAF (N. America)", slots: 6, color: "#FFD100", teams: ["USA", "Mexico", "Canada", "Costa Rica", "Panama", "Honduras", "Trinidad and Tobago"] },
    { name: "AFC (Asia)", slots: 8, color: "#FF6B00", teams: ["Japan", "South Korea", "Saudi Arabia", "Iran", "Qatar", "Bahrain", "China PR", "Indonesia", "Uzbekistan"] },
    { name: "CAF (Africa)", slots: 9, color: "#CE1126", teams: ["Morocco", "Nigeria", "Senegal", "Cameroon", "Ghana", "Tunisia", "Ivory Coast", "Burkina Faso"] },
    { name: "OFC (Oceania)", slots: 1, color: "#0099CC", teams: ["New Zealand"] }
  ]
};
