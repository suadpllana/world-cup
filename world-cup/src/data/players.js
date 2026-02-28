// FIFA World Cup 2026 - Key Players (real star players per team)

const players = [
  // Argentina
  { id: 1, name: "Lionel Messi", teamId: 13, team: "Argentina", position: "Forward", number: 10, age: 38, club: "Inter Miami CF", image: "", goals: 109, caps: 187, isCaptain: true, isStar: true },
  { id: 2, name: "Julián Álvarez", teamId: 13, team: "Argentina", position: "Forward", number: 9, age: 26, club: "Atlético Madrid", image: "", goals: 11, caps: 42, isCaptain: false, isStar: true },
  { id: 3, name: "Enzo Fernández", teamId: 13, team: "Argentina", position: "Midfielder", number: 24, age: 25, club: "Chelsea", image: "", goals: 4, caps: 30, isCaptain: false, isStar: true },
  { id: 4, name: "Emiliano Martínez", teamId: 13, team: "Argentina", position: "Goalkeeper", number: 23, age: 33, club: "Aston Villa", image: "", goals: 0, caps: 55, isCaptain: false, isStar: true },

  // France
  { id: 5, name: "Kylian Mbappé", teamId: 17, team: "France", position: "Forward", number: 10, age: 27, club: "Real Madrid", image: "", goals: 48, caps: 86, isCaptain: true, isStar: true },
  { id: 6, name: "Antoine Griezmann", teamId: 17, team: "France", position: "Forward", number: 7, age: 35, club: "Atlético Madrid", image: "", goals: 46, caps: 137, isCaptain: false, isStar: true },
  { id: 7, name: "Aurélien Tchouaméni", teamId: 17, team: "France", position: "Midfielder", number: 8, age: 26, club: "Real Madrid", image: "", goals: 3, caps: 40, isCaptain: false, isStar: true },
  { id: 8, name: "Mike Maignan", teamId: 17, team: "France", position: "Goalkeeper", number: 16, age: 31, club: "AC Milan", image: "", goals: 0, caps: 20, isCaptain: false, isStar: false },

  // England
  { id: 9, name: "Harry Kane", teamId: 25, team: "England", position: "Forward", number: 9, age: 32, club: "Bayern Munich", image: "", goals: 68, caps: 98, isCaptain: true, isStar: true },
  { id: 10, name: "Jude Bellingham", teamId: 25, team: "England", position: "Midfielder", number: 10, age: 22, club: "Real Madrid", image: "", goals: 8, caps: 45, isCaptain: false, isStar: true },
  { id: 11, name: "Bukayo Saka", teamId: 25, team: "England", position: "Forward", number: 7, age: 24, club: "Arsenal", image: "", goals: 12, caps: 50, isCaptain: false, isStar: true },
  { id: 12, name: "Phil Foden", teamId: 25, team: "England", position: "Midfielder", number: 20, age: 26, club: "Manchester City", image: "", goals: 6, caps: 42, isCaptain: false, isStar: true },

  // Brazil
  { id: 13, name: "Vinícius Júnior", teamId: 21, team: "Brazil", position: "Forward", number: 7, age: 25, club: "Real Madrid", image: "", goals: 7, caps: 38, isCaptain: false, isStar: true },
  { id: 14, name: "Rodrygo", teamId: 21, team: "Brazil", position: "Forward", number: 11, age: 25, club: "Real Madrid", image: "", goals: 8, caps: 30, isCaptain: false, isStar: true },
  { id: 15, name: "Marquinhos", teamId: 21, team: "Brazil", position: "Defender", number: 4, age: 32, club: "Paris Saint-Germain", image: "", goals: 7, caps: 90, isCaptain: true, isStar: true },
  { id: 16, name: "Endrick", teamId: 21, team: "Brazil", position: "Forward", number: 9, age: 19, club: "Real Madrid", image: "", goals: 3, caps: 12, isCaptain: false, isStar: true },

  // Spain
  { id: 17, name: "Lamine Yamal", teamId: 29, team: "Spain", position: "Forward", number: 19, age: 18, club: "FC Barcelona", image: "", goals: 4, caps: 25, isCaptain: false, isStar: true },
  { id: 18, name: "Pedri", teamId: 29, team: "Spain", position: "Midfielder", number: 8, age: 23, club: "FC Barcelona", image: "", goals: 3, caps: 40, isCaptain: false, isStar: true },
  { id: 19, name: "Rodri", teamId: 29, team: "Spain", position: "Midfielder", number: 16, age: 30, club: "Manchester City", image: "", goals: 5, caps: 65, isCaptain: false, isStar: true },
  { id: 20, name: "Álvaro Morata", teamId: 29, team: "Spain", position: "Forward", number: 7, age: 33, club: "AC Milan", image: "", goals: 36, caps: 80, isCaptain: true, isStar: true },

  // Germany
  { id: 21, name: "Florian Wirtz", teamId: 33, team: "Germany", position: "Midfielder", number: 17, age: 23, club: "Bayer Leverkusen", image: "", goals: 6, caps: 30, isCaptain: false, isStar: true },
  { id: 22, name: "Jamal Musiala", teamId: 33, team: "Germany", position: "Midfielder", number: 10, age: 23, club: "Bayern Munich", image: "", goals: 7, caps: 38, isCaptain: false, isStar: true },
  { id: 23, name: "Joshua Kimmich", teamId: 33, team: "Germany", position: "Midfielder", number: 6, age: 31, club: "Bayern Munich", image: "", goals: 6, caps: 96, isCaptain: true, isStar: true },
  { id: 24, name: "Kai Havertz", teamId: 33, team: "Germany", position: "Forward", number: 9, age: 27, club: "Arsenal", image: "", goals: 20, caps: 55, isCaptain: false, isStar: true },

  // Portugal
  { id: 25, name: "Cristiano Ronaldo", teamId: 37, team: "Portugal", position: "Forward", number: 7, age: 41, club: "Al Nassr", image: "", goals: 135, caps: 213, isCaptain: true, isStar: true },
  { id: 26, name: "Bruno Fernandes", teamId: 37, team: "Portugal", position: "Midfielder", number: 8, age: 31, club: "Manchester United", image: "", goals: 22, caps: 65, isCaptain: false, isStar: true },
  { id: 27, name: "Rafael Leão", teamId: 37, team: "Portugal", position: "Forward", number: 17, age: 27, club: "AC Milan", image: "", goals: 8, caps: 35, isCaptain: false, isStar: true },
  { id: 28, name: "Bernardo Silva", teamId: 37, team: "Portugal", position: "Midfielder", number: 10, age: 31, club: "Manchester City", image: "", goals: 10, caps: 80, isCaptain: false, isStar: true },

  // Netherlands
  { id: 29, name: "Virgil van Dijk", teamId: 26, team: "Netherlands", position: "Defender", number: 4, age: 34, club: "Liverpool", image: "", goals: 8, caps: 70, isCaptain: true, isStar: true },
  { id: 30, name: "Cody Gakpo", teamId: 26, team: "Netherlands", position: "Forward", number: 11, age: 26, club: "Liverpool", image: "", goals: 14, caps: 42, isCaptain: false, isStar: true },

  // Belgium
  { id: 31, name: "Kevin De Bruyne", teamId: 41, team: "Belgium", position: "Midfielder", number: 7, age: 34, club: "Manchester City", image: "", goals: 27, caps: 105, isCaptain: true, isStar: true },
  { id: 32, name: "Jérémy Doku", teamId: 41, team: "Belgium", position: "Forward", number: 11, age: 24, club: "Manchester City", image: "", goals: 4, caps: 30, isCaptain: false, isStar: true },

  // Croatia
  { id: 33, name: "Luka Modrić", teamId: 45, team: "Croatia", position: "Midfielder", number: 10, age: 40, club: "Real Madrid", image: "", goals: 25, caps: 178, isCaptain: true, isStar: true },

  // USA
  { id: 34, name: "Christian Pulisic", teamId: 1, team: "United States", position: "Forward", number: 10, age: 27, club: "AC Milan", image: "", goals: 30, caps: 72, isCaptain: true, isStar: true },
  { id: 35, name: "Weston McKennie", teamId: 1, team: "United States", position: "Midfielder", number: 8, age: 27, club: "Juventus", image: "", goals: 11, caps: 55, isCaptain: false, isStar: true },
  { id: 36, name: "Gio Reyna", teamId: 1, team: "United States", position: "Midfielder", number: 7, age: 23, club: "Borussia Dortmund", image: "", goals: 5, caps: 30, isCaptain: false, isStar: true },
  { id: 37, name: "Tyler Adams", teamId: 1, team: "United States", position: "Midfielder", number: 4, age: 27, club: "Bournemouth", image: "", goals: 2, caps: 40, isCaptain: false, isStar: false },

  // Mexico
  { id: 38, name: "Edson Álvarez", teamId: 5, team: "Mexico", position: "Midfielder", number: 4, age: 27, club: "West Ham United", image: "", goals: 3, caps: 65, isCaptain: true, isStar: true },
  { id: 39, name: "Hirving Lozano", teamId: 5, team: "Mexico", position: "Forward", number: 22, age: 30, club: "PSV Eindhoven", image: "", goals: 19, caps: 68, isCaptain: false, isStar: true },

  // Canada
  { id: 40, name: "Alphonso Davies", teamId: 9, team: "Canada", position: "Defender", number: 19, age: 25, club: "Bayern Munich", image: "", goals: 15, caps: 55, isCaptain: true, isStar: true },
  { id: 41, name: "Jonathan David", teamId: 9, team: "Canada", position: "Forward", number: 20, age: 26, club: "Lille", image: "", goals: 28, caps: 55, isCaptain: false, isStar: true },

  // Morocco
  { id: 42, name: "Achraf Hakimi", teamId: 27, team: "Morocco", position: "Defender", number: 2, age: 27, club: "Paris Saint-Germain", image: "", goals: 11, caps: 80, isCaptain: true, isStar: true },
  { id: 43, name: "Hakim Ziyech", teamId: 27, team: "Morocco", position: "Midfielder", number: 7, age: 33, club: "Galatasaray", image: "", goals: 20, caps: 55, isCaptain: false, isStar: true },

  // Japan
  { id: 44, name: "Takefusa Kubo", teamId: 39, team: "Japan", position: "Forward", number: 11, age: 25, club: "Real Sociedad", image: "", goals: 5, caps: 35, isCaptain: false, isStar: true },

  // South Korea
  { id: 45, name: "Son Heung-min", teamId: 7, team: "South Korea", position: "Forward", number: 7, age: 33, club: "Tottenham Hotspur", image: "", goals: 40, caps: 130, isCaptain: true, isStar: true },

  // Egypt
  { id: 46, name: "Mohamed Salah", teamId: 31, team: "Egypt", position: "Forward", number: 10, age: 33, club: "Liverpool", image: "", goals: 55, caps: 95, isCaptain: true, isStar: true },

  // Nigeria
  { id: 47, name: "Victor Osimhen", teamId: 19, team: "Nigeria", position: "Forward", number: 9, age: 27, club: "Napoli", image: "", goals: 22, caps: 35, isCaptain: false, isStar: true },

  // Colombia
  { id: 48, name: "Luis Díaz", teamId: 2, team: "Colombia", position: "Forward", number: 7, age: 29, club: "Liverpool", image: "", goals: 8, caps: 50, isCaptain: false, isStar: true },

  // Uruguay
  { id: 49, name: "Federico Valverde", teamId: 34, team: "Uruguay", position: "Midfielder", number: 15, age: 27, club: "Real Madrid", image: "", goals: 8, caps: 60, isCaptain: true, isStar: true },
  { id: 50, name: "Darwin Núñez", teamId: 34, team: "Uruguay", position: "Forward", number: 9, age: 27, club: "Liverpool", image: "", goals: 12, caps: 35, isCaptain: false, isStar: true },

  // Senegal
  { id: 51, name: "Kalidou Koulibaly", teamId: 3, team: "Senegal", position: "Defender", number: 3, age: 35, club: "Al Hilal", image: "", goals: 3, caps: 72, isCaptain: true, isStar: true },

  // Turkey
  { id: 52, name: "Hakan Çalhanoğlu", teamId: 30, team: "Turkey", position: "Midfielder", number: 10, age: 32, club: "Inter Milan", image: "", goals: 20, caps: 85, isCaptain: true, isStar: true },
  { id: 53, name: "Arda Güler", teamId: 30, team: "Turkey", position: "Midfielder", number: 8, age: 21, club: "Real Madrid", image: "", goals: 7, caps: 22, isCaptain: false, isStar: true },

  // Australia
  { id: 54, name: "Mat Ryan", teamId: 20, team: "Australia", position: "Goalkeeper", number: 1, age: 34, club: "AS Roma", image: "", goals: 0, caps: 85, isCaptain: true, isStar: true },

  // Denmark
  { id: 55, name: "Rasmus Højlund", teamId: 18, team: "Denmark", position: "Forward", number: 9, age: 23, club: "Manchester United", image: "", goals: 5, caps: 20, isCaptain: false, isStar: true },

  // Switzerland
  { id: 56, name: "Granit Xhaka", teamId: 22, team: "Switzerland", position: "Midfielder", number: 10, age: 33, club: "Bayer Leverkusen", image: "", goals: 15, caps: 130, isCaptain: true, isStar: true },
];

export default players;
