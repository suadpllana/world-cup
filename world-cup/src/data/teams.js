// FIFA World Cup 2026 - All 48 qualified/expected teams with real data
// Host nations: USA, Canada, Mexico (automatic qualification)

const teams = [
  // GROUP A
  { id: 1, name: "United States", code: "USA", flag: "🇺🇸", group: "A", confederation: "CONCACAF", fifaRanking: 11, coach: "Mauricio Pochettino", captain: "Christian Pulisic", nickname: "The Stars and Stripes", appearances: 11, bestFinish: "Third Place (1930)", qualified: "Host" },
  { id: 2, name: "Colombia", code: "COL", flag: "🇨🇴", group: "A", confederation: "CONMEBOL", fifaRanking: 12, coach: "Néstor Lorenzo", captain: "James Rodríguez", nickname: "Los Cafeteros", appearances: 7, bestFinish: "Quarter-finals (2014)", qualified: "CONMEBOL Qualifiers" },
  { id: 3, name: "Senegal", code: "SEN", flag: "🇸🇳", group: "A", confederation: "CAF", fifaRanking: 17, coach: "Aliou Cissé", captain: "Kalidou Koulibaly", nickname: "Lions of Teranga", appearances: 4, bestFinish: "Quarter-finals (2002)", qualified: "CAF Qualifiers" },
  { id: 4, name: "New Zealand", code: "NZL", flag: "🇳🇿", group: "A", confederation: "OFC", fifaRanking: 93, coach: "Darren Bazeley", captain: "Chris Wood", nickname: "All Whites", appearances: 3, bestFinish: "Group Stage (2010)", qualified: "OFC Qualifiers" },

  // GROUP B
  { id: 5, name: "Mexico", code: "MEX", flag: "🇲🇽", group: "B", confederation: "CONCACAF", fifaRanking: 15, coach: "Javier Aguirre", captain: "Edson Álvarez", nickname: "El Tri", appearances: 17, bestFinish: "Quarter-finals (1970, 1986)", qualified: "Host" },
  { id: 6, name: "Ecuador", code: "ECU", flag: "🇪🇨", group: "B", confederation: "CONMEBOL", fifaRanking: 30, coach: "Sebastián Beccacece", captain: "Énner Valencia", nickname: "La Tri", appearances: 5, bestFinish: "Round of 16 (2006)", qualified: "CONMEBOL Qualifiers" },
  { id: 7, name: "South Korea", code: "KOR", flag: "🇰🇷", group: "B", confederation: "AFC", fifaRanking: 22, coach: "Hong Myung-bo", captain: "Son Heung-min", nickname: "Taegeuk Warriors", appearances: 11, bestFinish: "Fourth Place (2002)", qualified: "AFC Qualifiers" },
  { id: 8, name: "Jamaica", code: "JAM", flag: "🇯🇲", group: "B", confederation: "CONCACAF", fifaRanking: 62, coach: "Heimir Hallgrímsson", captain: "Michail Antonio", nickname: "Reggae Boyz", appearances: 2, bestFinish: "Group Stage (1998)", qualified: "CONCACAF Qualifiers" },

  // GROUP C
  { id: 9, name: "Canada", code: "CAN", flag: "🇨🇦", group: "C", confederation: "CONCACAF", fifaRanking: 40, coach: "Jesse Marsch", captain: "Alphonso Davies", nickname: "Les Rouges", appearances: 3, bestFinish: "Group Stage (2022)", qualified: "Host" },
  { id: 10, name: "Serbia", code: "SRB", flag: "🇷🇸", group: "C", confederation: "UEFA", fifaRanking: 33, coach: "Dragan Stojković", captain: "Dušan Tadić", nickname: "The Eagles", appearances: 13, bestFinish: "Fourth Place (1930, 1962)*", qualified: "UEFA Qualifiers" },
  { id: 11, name: "Algeria", code: "ALG", flag: "🇩🇿", group: "C", confederation: "CAF", fifaRanking: 36, coach: "Vladimir Petković", captain: "Riyad Mahrez", nickname: "Les Fennecs", appearances: 5, bestFinish: "Round of 16 (2014)", qualified: "CAF Qualifiers" },
  { id: 12, name: "Honduras", code: "HON", flag: "🇭🇳", group: "C", confederation: "CONCACAF", fifaRanking: 75, coach: "Reinaldo Rueda", captain: "Alberth Elis", nickname: "Los Catrachos", appearances: 4, bestFinish: "Group Stage", qualified: "CONCACAF Qualifiers" },

  // GROUP D
  { id: 13, name: "Argentina", code: "ARG", flag: "🇦🇷", group: "D", confederation: "CONMEBOL", fifaRanking: 1, coach: "Lionel Scaloni", captain: "Lionel Messi", nickname: "La Albiceleste", appearances: 18, bestFinish: "Champions (1978, 1986, 2022)", qualified: "CONMEBOL Qualifiers" },
  { id: 14, name: "Peru", code: "PER", flag: "🇵🇪", group: "D", confederation: "CONMEBOL", fifaRanking: 32, coach: "Jorge Fossati", captain: "Paolo Guerrero", nickname: "La Blanquirroja", appearances: 6, bestFinish: "Quarter-finals (1970, 1978)", qualified: "CONMEBOL Qualifiers" },
  { id: 15, name: "Ukraine", code: "UKR", flag: "🇺🇦", group: "D", confederation: "UEFA", fifaRanking: 24, coach: "Serhiy Rebrov", captain: "Oleksandr Zinchenko", nickname: "The Blue and Yellow", appearances: 2, bestFinish: "Quarter-finals (2006)", qualified: "UEFA Qualifiers" },
  { id: 16, name: "Saudi Arabia", code: "KSA", flag: "🇸🇦", group: "D", confederation: "AFC", fifaRanking: 56, coach: "Roberto Mancini", captain: "Salman Al-Faraj", nickname: "The Green Falcons", appearances: 7, bestFinish: "Round of 16 (1994)", qualified: "AFC Qualifiers" },

  // GROUP E
  { id: 17, name: "France", code: "FRA", flag: "🇫🇷", group: "E", confederation: "UEFA", fifaRanking: 2, coach: "Didier Deschamps", captain: "Kylian Mbappé", nickname: "Les Bleus", appearances: 17, bestFinish: "Champions (1998, 2018)", qualified: "UEFA Qualifiers" },
  { id: 18, name: "Denmark", code: "DEN", flag: "🇩🇰", group: "E", confederation: "UEFA", fifaRanking: 19, coach: "Kasper Hjulmand", captain: "Simon Kjær", nickname: "Danish Dynamite", appearances: 6, bestFinish: "Quarter-finals (1998)", qualified: "UEFA Qualifiers" },
  { id: 19, name: "Nigeria", code: "NGA", flag: "🇳🇬", group: "E", confederation: "CAF", fifaRanking: 28, coach: "Finidi George", captain: "William Troost-Ekong", nickname: "Super Eagles", appearances: 7, bestFinish: "Round of 16 (1994, 1998, 2014)", qualified: "CAF Qualifiers" },
  { id: 20, name: "Australia", code: "AUS", flag: "🇦🇺", group: "E", confederation: "AFC", fifaRanking: 23, coach: "Graham Arnold", captain: "Mat Ryan", nickname: "Socceroos", appearances: 6, bestFinish: "Round of 16 (2022)", qualified: "AFC Qualifiers" },

  // GROUP F
  { id: 21, name: "Brazil", code: "BRA", flag: "🇧🇷", group: "F", confederation: "CONMEBOL", fifaRanking: 5, coach: "Dorival Júnior", captain: "Marquinhos", nickname: "A Seleção", appearances: 23, bestFinish: "Champions (1958, 1962, 1970, 1994, 2002)", qualified: "CONMEBOL Qualifiers" },
  { id: 22, name: "Switzerland", code: "SUI", flag: "🇨🇭", group: "F", confederation: "UEFA", fifaRanking: 16, coach: "Murat Yakin", captain: "Granit Xhaka", nickname: "Nati", appearances: 12, bestFinish: "Quarter-finals (1934, 1938, 1954)", qualified: "UEFA Qualifiers" },
  { id: 23, name: "Cameroon", code: "CMR", flag: "🇨🇲", group: "F", confederation: "CAF", fifaRanking: 42, coach: "Marc Brys", captain: "André-Frank Zambo Anguissa", nickname: "Indomitable Lions", appearances: 8, bestFinish: "Quarter-finals (1990)", qualified: "CAF Qualifiers" },
  { id: 24, name: "Costa Rica", code: "CRC", flag: "🇨🇷", group: "F", confederation: "CONCACAF", fifaRanking: 49, coach: "Claudio Vivas", captain: "Bryan Ruiz", nickname: "Los Ticos", appearances: 6, bestFinish: "Quarter-finals (2014)", qualified: "CONCACAF Qualifiers" },

  // GROUP G
  { id: 25, name: "England", code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", group: "G", confederation: "UEFA", fifaRanking: 4, coach: "Thomas Tuchel", captain: "Harry Kane", nickname: "Three Lions", appearances: 16, bestFinish: "Champions (1966)", qualified: "UEFA Qualifiers" },
  { id: 26, name: "Netherlands", code: "NED", flag: "🇳🇱", group: "G", confederation: "UEFA", fifaRanking: 7, coach: "Ronald Koeman", captain: "Virgil van Dijk", nickname: "Oranje", appearances: 11, bestFinish: "Runners-up (1974, 1978, 2010)", qualified: "UEFA Qualifiers" },
  { id: 27, name: "Morocco", code: "MAR", flag: "🇲🇦", group: "G", confederation: "CAF", fifaRanking: 13, coach: "Walid Regragui", captain: "Achraf Hakimi", nickname: "Atlas Lions", appearances: 7, bestFinish: "Semi-finals (2022)", qualified: "CAF Qualifiers" },
  { id: 28, name: "Uzbekistan", code: "UZB", flag: "🇺🇿", group: "G", confederation: "AFC", fifaRanking: 61, coach: "Srecko Katanec", captain: "Eldor Shomurodov", nickname: "White Wolves", appearances: 1, bestFinish: "Debut", qualified: "AFC Qualifiers" },

  // GROUP H
  { id: 29, name: "Spain", code: "ESP", flag: "🇪🇸", group: "H", confederation: "UEFA", fifaRanking: 3, coach: "Luis de la Fuente", captain: "Álvaro Morata", nickname: "La Roja", appearances: 16, bestFinish: "Champions (2010)", qualified: "UEFA Qualifiers" },
  { id: 30, name: "Turkey", code: "TUR", flag: "🇹🇷", group: "H", confederation: "UEFA", fifaRanking: 26, coach: "Vincenzo Montella", captain: "Hakan Çalhanoğlu", nickname: "Crescent Stars", appearances: 3, bestFinish: "Third Place (2002)", qualified: "UEFA Qualifiers" },
  { id: 31, name: "Egypt", code: "EGY", flag: "🇪🇬", group: "H", confederation: "CAF", fifaRanking: 34, coach: "Hossam Hassan", captain: "Mohamed Salah", nickname: "The Pharaohs", appearances: 4, bestFinish: "Group Stage", qualified: "CAF Qualifiers" },
  { id: 32, name: "China PR", code: "CHN", flag: "🇨🇳", group: "H", confederation: "AFC", fifaRanking: 70, coach: "Branko Ivanković", captain: "Wu Xi", nickname: "Team Dragon", appearances: 2, bestFinish: "Group Stage (2002)", qualified: "AFC Qualifiers" },

  // GROUP I
  { id: 33, name: "Germany", code: "GER", flag: "🇩🇪", group: "I", confederation: "UEFA", fifaRanking: 8, coach: "Julian Nagelsmann", captain: "Joshua Kimmich", nickname: "Die Mannschaft", appearances: 20, bestFinish: "Champions (1954, 1974, 1990, 2014)", qualified: "UEFA Qualifiers" },
  { id: 34, name: "Uruguay", code: "URU", flag: "🇺🇾", group: "I", confederation: "CONMEBOL", fifaRanking: 10, coach: "Marcelo Bielsa", captain: "Federico Valverde", nickname: "La Celeste", appearances: 14, bestFinish: "Champions (1930, 1950)", qualified: "CONMEBOL Qualifiers" },
  { id: 35, name: "IR Iran", code: "IRN", flag: "🇮🇷", group: "I", confederation: "AFC", fifaRanking: 20, coach: "Amir Ghalenoei", captain: "Alireza Jahanbakhsh", nickname: "Team Melli", appearances: 7, bestFinish: "Group Stage", qualified: "AFC Qualifiers" },
  { id: 36, name: "Panama", code: "PAN", flag: "🇵🇦", group: "I", confederation: "CONCACAF", fifaRanking: 58, coach: "Thomas Christiansen", captain: "Aníbal Godoy", nickname: "Los Canaleros", appearances: 3, bestFinish: "Group Stage (2018)", qualified: "CONCACAF Qualifiers" },

  // GROUP J
  { id: 37, name: "Portugal", code: "POR", flag: "🇵🇹", group: "J", confederation: "UEFA", fifaRanking: 6, coach: "Roberto Martínez", captain: "Cristiano Ronaldo", nickname: "A Seleção das Quinas", appearances: 9, bestFinish: "Third Place (1966)", qualified: "UEFA Qualifiers" },
  { id: 38, name: "Chile", code: "CHI", flag: "🇨🇱", group: "J", confederation: "CONMEBOL", fifaRanking: 29, coach: "Ricardo Gareca", captain: "Arturo Vidal", nickname: "La Roja", appearances: 10, bestFinish: "Third Place (1962)", qualified: "CONMEBOL Qualifiers" },
  { id: 39, name: "Japan", code: "JPN", flag: "🇯🇵", group: "J", confederation: "AFC", fifaRanking: 14, coach: "Hajime Moriyasu", captain: "Wataru Endo", nickname: "Samurai Blue", appearances: 7, bestFinish: "Round of 16 (2002, 2010, 2018, 2022)", qualified: "AFC Qualifiers" },
  { id: 40, name: "Trinidad & Tobago", code: "TRI", flag: "🇹🇹", group: "J", confederation: "CONCACAF", fifaRanking: 97, coach: "Angus Eve", captain: "Khaleem Hyland", nickname: "Soca Warriors", appearances: 2, bestFinish: "Group Stage (2006)", qualified: "CONCACAF Qualifiers" },

  // GROUP K
  { id: 41, name: "Belgium", code: "BEL", flag: "🇧🇪", group: "K", confederation: "UEFA", fifaRanking: 9, coach: "Domenico Tedesco", captain: "Kevin De Bruyne", nickname: "Red Devils", appearances: 14, bestFinish: "Third Place (2018)", qualified: "UEFA Qualifiers" },
  { id: 42, name: "Austria", code: "AUT", flag: "🇦🇹", group: "K", confederation: "UEFA", fifaRanking: 18, coach: "Ralf Rangnick", captain: "David Alaba", nickname: "Das Team", appearances: 8, bestFinish: "Third Place (1954)", qualified: "UEFA Qualifiers" },
  { id: 43, name: "Ghana", code: "GHA", flag: "🇬🇭", group: "K", confederation: "CAF", fifaRanking: 44, coach: "Otto Addo", captain: "André Ayew", nickname: "Black Stars", appearances: 4, bestFinish: "Quarter-finals (2010)", qualified: "CAF Qualifiers" },
  { id: 44, name: "El Salvador", code: "SLV", flag: "🇸🇻", group: "K", confederation: "CONCACAF", fifaRanking: 80, coach: "Hugo Pérez", captain: "Alexander Roldán", nickname: "La Selecta", appearances: 3, bestFinish: "Group Stage", qualified: "CONCACAF Qualifiers" },

  // GROUP L
  { id: 45, name: "Croatia", code: "CRO", flag: "🇭🇷", group: "L", confederation: "UEFA", fifaRanking: 10, coach: "Zlatko Dalić", captain: "Luka Modrić", nickname: "Vatreni", appearances: 7, bestFinish: "Runners-up (2018)", qualified: "UEFA Qualifiers" },
  { id: 46, name: "Paraguay", code: "PAR", flag: "🇵🇾", group: "L", confederation: "CONMEBOL", fifaRanking: 38, coach: "Alfaro Daniel", captain: "Gustavo Gómez", nickname: "La Albirroja", appearances: 9, bestFinish: "Quarter-finals (2010)", qualified: "CONMEBOL Qualifiers" },
  { id: 47, name: "Wales", code: "WAL", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", group: "L", confederation: "UEFA", fifaRanking: 25, coach: "Craig Bellamy", captain: "Aaron Ramsey", nickname: "The Dragons", appearances: 3, bestFinish: "Semi-finals (1958)", qualified: "UEFA Qualifiers" },
  { id: 48, name: "Tunisia", code: "TUN", flag: "🇹🇳", group: "L", confederation: "CAF", fifaRanking: 35, coach: "Jalel Kadri", captain: "Youssef Msakni", nickname: "Eagles of Carthage", appearances: 7, bestFinish: "Group Stage", qualified: "CAF Qualifiers" },
];

export default teams;
