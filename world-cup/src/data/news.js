// FIFA World Cup 2026 - Latest News & Updates (realistic articles)

const news = [
  {
    id: 1,
    title: "FIFA World Cup 2026: The Biggest Tournament in History Kicks Off June 11",
    summary: "For the first time ever, 48 teams will compete across three nations — the United States, Mexico, and Canada — in the expanded FIFA World Cup 2026.",
    content: "FIFA has confirmed the complete schedule for the 2026 World Cup, the first ever to feature 48 teams. The tournament will span 39 days, from June 11 to July 19, 2026. With 104 matches played across 16 venues in three countries, this edition promises to be the most ambitious sporting event in history. The opening match will take place at Estadio Azteca in Mexico City, while MetLife Stadium in New Jersey will host the grand final. FIFA President Gianni Infantino called it 'a new era for world football.'",
    category: "Tournament",
    date: "2026-02-28",
    image: "stadium",
    featured: true,
    author: "FIFA Media"
  },
  {
    id: 2,
    title: "Messi Confirms: 'World Cup 2026 Will Be My Last Dance'",
    summary: "Lionel Messi has confirmed he will participate in the 2026 FIFA World Cup in the United States, calling it his farewell to international football.",
    content: "In an emotional interview, Lionel Messi confirmed that the 2026 World Cup would be his final tournament with Argentina. 'Playing in the United States, where I now call home, is the perfect way to close this chapter,' the 38-year-old Inter Miami star said. Messi, who led Argentina to glory in Qatar 2022, will be aiming for a historic back-to-back World Cup triumph. Coach Lionel Scaloni expressed confidence: 'Leo remains an incredible player. His experience and leadership are invaluable.'",
    category: "Players",
    date: "2026-02-25",
    image: "player",
    featured: true,
    author: "ESPN FC"
  },
  {
    id: 3,
    title: "Ronaldo at 41: Portugal Captain Set to Make World Cup History",
    summary: "Cristiano Ronaldo will become the oldest outfield player to appear in a World Cup if he features at the 2026 tournament.",
    content: "At 41 years old, Cristiano Ronaldo is defying age and expectations. The Portuguese superstar has been confirmed in Roberto Martínez's squad for the 2026 World Cup, making him potentially the oldest outfield player to participate in the tournament's history. With 135 international goals, Ronaldo remains a vital figure for Portugal. 'Records are meant to be broken, and Cristiano continues to break them,' Martínez stated. Ronaldo himself has said that representing his country at another World Cup is 'a dream come true.'",
    category: "Players",
    date: "2026-02-22",
    image: "player",
    featured: false,
    author: "BBC Sport"
  },
  {
    id: 4,
    title: "MetLife Stadium Renovation Complete Ahead of World Cup Final",
    summary: "The $400 million renovation of MetLife Stadium has been completed, including the installation of a new natural grass pitch for the World Cup.",
    content: "MetLife Stadium in East Rutherford, New Jersey, has completed its extensive $400 million renovation ahead of hosting the 2026 World Cup Final. The stadium, which normally hosts NFL games on artificial turf, has installed a state-of-the-art hybrid grass system specifically designed for elite-level football. New luxury suites, expanded media facilities, and improved fan experience areas have been added. The venue can now hold up to 82,500 spectators for the final. 'This will be the stage for history,' said the organizing committee chair.",
    category: "Stadiums",
    date: "2026-02-20",
    image: "stadium",
    featured: true,
    author: "AP Sports"
  },
  {
    id: 5,
    title: "Spain's Golden Generation: Yamal Leads La Roja's World Cup Charge",
    summary: "At just 18, Lamine Yamal is set to lead a talented Spain squad that many consider the tournament favorites after their Euro 2024 triumph.",
    content: "Spain heads into the 2026 World Cup as one of the strongest contenders, led by the exceptional teenage talent Lamine Yamal. The Barcelona prodigy, who became the youngest ever goalscorer at a European Championship in 2024, has continued his remarkable rise. Alongside Pedri, Rodri, and Gavi, Spain boasts one of the most exciting squads in the tournament. Coach Luis de la Fuente has successfully blended youth with experience, creating a team that plays the beautiful possession-based football Spain is known for.",
    category: "Teams",
    date: "2026-02-18",
    image: "team",
    featured: false,
    author: "Marca"
  },
  {
    id: 6,
    title: "Host Nation Excitement: USA Prepares for Its Biggest Sporting Event",
    summary: "With the World Cup set to take place across 11 American cities, the United States is gearing up for what organizers call 'the most watched event in US history.'",
    content: "The United States is in full World Cup fever as June approaches. Ticket sales have shattered records with over 5 million tickets sold across all venues. Major cities like New York, Los Angeles, Miami, and Houston are establishing massive fan zones and cultural festivals. The USMNT, led by coach Mauricio Pochettino and captain Christian Pulisic, carries the hopes of a nation dreaming of a deep run on home soil. Soccer's popularity in America has surged dramatically, with MLS attendance reaching all-time highs in the buildup to the tournament.",
    category: "Tournament",
    date: "2026-02-15",
    image: "stadium",
    featured: false,
    author: "Fox Sports"
  },
  {
    id: 7,
    title: "Mbappé and Bellingham: The Rivalry Set to Define World Cup 2026",
    summary: "Both Real Madrid teammates will face off internationally as France and England are tipped as tournament favorites.",
    content: "The 2026 World Cup could see the budding rivalry between Kylian Mbappé and Jude Bellingham take center stage on the world's biggest platform. Both are key figures at Real Madrid, but come June they'll represent rival nations. Mbappé, France's captain since 2023, has scored 48 international goals. Bellingham, England's creative heartbeat, was instrumental in their Euro 2024 campaign. Both players could face each other as early as the knockout rounds, creating a fascinating subplot in what promises to be an electric tournament.",
    category: "Players",
    date: "2026-02-12",
    image: "player",
    featured: false,
    author: "The Athletic"
  },
  {
    id: 8,
    title: "New World Cup Format Explained: How 48 Teams Will Compete",
    summary: "FIFA's expanded format means 12 groups of four, with the top two and eight best third-placed teams advancing to a Round of 32.",
    content: "The 2026 World Cup introduces a bold new format. The 48 participating teams will be divided into 12 groups of four. The top two from each group advance automatically, joined by the eight best third-placed teams to complete a Round of 32. From there, it's a straight knockout tournament through to the final. This means 104 total matches — up from 64 in the previous format. Critics worry about fixture congestion, but FIFA believes the expanded format gives  more nations the chance to shine on the world stage.",
    category: "Tournament",
    date: "2026-02-08",
    image: "info",
    featured: false,
    author: "FIFA Media"
  },
  {
    id: 9,
    title: "Estadio Azteca: The Only Stadium to Host Three World Cups",
    summary: "Mexico City's iconic Estadio Azteca will make history as the first and only venue to host matches in three different FIFA World Cups.",
    content: "Estadio Azteca holds a special place in football history. It witnessed Pelé's Brazil lift the Jules Rimet trophy in 1970 and Maradona's legendary 'Hand of God' and 'Goal of the Century' in 1986. Now, in 2026, it becomes the only stadium to host three World Cups. Despite concerns about its age, significant renovations have modernized the facilities while preserving its iconic character. The 87,000-capacity venue will host group stage matches and a Round of 32 game, adding another glorious chapter to its storied history.",
    category: "Stadiums",
    date: "2026-02-05",
    image: "stadium",
    featured: false,
    author: "Goal.com"
  },
  {
    id: 10,
    title: "Canada Aims to Create History in Home World Cup",
    summary: "After their maiden World Cup appearance in 2022, Canada looks to build on momentum with Alphonso Davies and Jonathan David leading the charge.",
    content: "Canada's men's football program has experienced a remarkable transformation. After 36 years without a World Cup appearance, they qualified for Qatar 2022 and now get to host the world's biggest tournament. Alphonso Davies, the Bayern Munich speedster and team captain, is the face of the program. Alongside striker Jonathan David, who has been prolific for Lille, Canada will aim to advance past the group stage for the first time. Coach Jesse Marsch has instilled an intense pressing style that has made Canada a team no one wants to face.",
    category: "Teams",
    date: "2026-02-01",
    image: "team",
    featured: false,
    author: "TSN"
  },
  {
    id: 11,
    title: "World Cup 2026 Official Match Ball 'Unidream' Unveiled by adidas",
    summary: "adidas has revealed the official match ball for the 2026 FIFA World Cup, named 'Unidream', celebrating the unity of three host nations.",
    content: "adidas has officially unveiled 'Unidream', the official match ball for the FIFA World Cup 2026. The ball features a striking design incorporating the colors and cultural elements of the three host nations: the United States, Mexico, and Canada. Using next-generation Connected Ball Technology, the Unidream includes an inertial measurement unit (IMU) sensor that provides real-time data for semi-automated offside technology and other VAR decisions. 'This ball represents dreams coming together across borders,' said adidas CEO.",
    category: "Tournament",
    date: "2026-01-28",
    image: "info",
    featured: false,
    author: "adidas"
  },
  {
    id: 12,
    title: "Morocco's Historic Semi-Final Run in 2022: Can the Atlas Lions Repeat?",
    summary: "After making history as the first African team to reach a World Cup semi-final, Morocco enters 2026 among the dark horses under Walid Regragui.",
    content: "Morocco's unforgettable run to the 2022 World Cup semi-finals transformed their status in world football. Under coach Walid Regragui, the Atlas Lions defeated Belgium, Spain, and Portugal before falling to France. Now, with an even stronger squad featuring Achraf Hakimi, Hakim Ziyech, and rising stars, Morocco are determined to go even further. Drawn in a tough Group G alongside England and the Netherlands, they'll need to be at their best from the start. But if 2022 proved anything, it's that Morocco should never be underestimated.",
    category: "Teams",
    date: "2026-01-20",
    image: "team",
    featured: false,
    author: "Al Jazeera Sport"
  }
];

export default news;
