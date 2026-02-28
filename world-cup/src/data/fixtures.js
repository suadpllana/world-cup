// FIFA World Cup 2026 - Group Stage Fixtures (Sample matches)
// Tournament: June 11 – July 19, 2026

const fixtures = [
  // ===== GROUP A =====
  { id: 1, group: "A", matchday: 1, date: "2026-06-11", time: "20:00", homeTeam: "United States", homeFlag: "🇺🇸", awayTeam: "New Zealand", awayFlag: "🇳🇿", venue: "SoFi Stadium", city: "Inglewood", stage: "Group Stage", status: "Upcoming" },
  { id: 2, group: "A", matchday: 1, date: "2026-06-12", time: "17:00", homeTeam: "Colombia", homeFlag: "🇨🇴", awayTeam: "Senegal", awayFlag: "🇸🇳", venue: "Hard Rock Stadium", city: "Miami Gardens", stage: "Group Stage", status: "Upcoming" },
  { id: 3, group: "A", matchday: 2, date: "2026-06-16", time: "20:00", homeTeam: "United States", homeFlag: "🇺🇸", awayTeam: "Senegal", awayFlag: "🇸🇳", venue: "MetLife Stadium", city: "East Rutherford", stage: "Group Stage", status: "Upcoming" },
  { id: 4, group: "A", matchday: 2, date: "2026-06-16", time: "14:00", homeTeam: "Colombia", homeFlag: "🇨🇴", awayTeam: "New Zealand", awayFlag: "🇳🇿", venue: "NRG Stadium", city: "Houston", stage: "Group Stage", status: "Upcoming" },
  { id: 5, group: "A", matchday: 3, date: "2026-06-20", time: "20:00", homeTeam: "United States", homeFlag: "🇺🇸", awayTeam: "Colombia", awayFlag: "🇨🇴", venue: "AT&T Stadium", city: "Arlington", stage: "Group Stage", status: "Upcoming" },
  { id: 6, group: "A", matchday: 3, date: "2026-06-20", time: "20:00", homeTeam: "Senegal", homeFlag: "🇸🇳", awayTeam: "New Zealand", awayFlag: "🇳🇿", venue: "Lumen Field", city: "Seattle", stage: "Group Stage", status: "Upcoming" },

  // ===== GROUP B =====
  { id: 7, group: "B", matchday: 1, date: "2026-06-12", time: "20:00", homeTeam: "Mexico", homeFlag: "🇲🇽", awayTeam: "Jamaica", awayFlag: "🇯🇲", venue: "Estadio Azteca", city: "Mexico City", stage: "Group Stage", status: "Upcoming" },
  { id: 8, group: "B", matchday: 1, date: "2026-06-12", time: "14:00", homeTeam: "Ecuador", homeFlag: "🇪🇨", awayTeam: "South Korea", awayFlag: "🇰🇷", venue: "Lincoln Financial Field", city: "Philadelphia", stage: "Group Stage", status: "Upcoming" },
  { id: 9, group: "B", matchday: 2, date: "2026-06-17", time: "17:00", homeTeam: "Mexico", homeFlag: "🇲🇽", awayTeam: "Ecuador", awayFlag: "🇪🇨", venue: "Estadio BBVA", city: "Monterrey", stage: "Group Stage", status: "Upcoming" },
  { id: 10, group: "B", matchday: 2, date: "2026-06-17", time: "14:00", homeTeam: "South Korea", homeFlag: "🇰🇷", awayTeam: "Jamaica", awayFlag: "🇯🇲", venue: "Levi's Stadium", city: "Santa Clara", stage: "Group Stage", status: "Upcoming" },
  { id: 11, group: "B", matchday: 3, date: "2026-06-21", time: "17:00", homeTeam: "South Korea", homeFlag: "🇰🇷", awayTeam: "Mexico", awayFlag: "🇲🇽", venue: "Estadio Akron", city: "Guadalajara", stage: "Group Stage", status: "Upcoming" },
  { id: 12, group: "B", matchday: 3, date: "2026-06-21", time: "17:00", homeTeam: "Jamaica", homeFlag: "🇯🇲", awayTeam: "Ecuador", awayFlag: "🇪🇨", venue: "Arrowhead Stadium", city: "Kansas City", stage: "Group Stage", status: "Upcoming" },

  // ===== GROUP C =====
  { id: 13, group: "C", matchday: 1, date: "2026-06-12", time: "18:00", homeTeam: "Canada", homeFlag: "🇨🇦", awayTeam: "Honduras", awayFlag: "🇭🇳", venue: "BMO Field", city: "Toronto", stage: "Group Stage", status: "Upcoming" },
  { id: 14, group: "C", matchday: 1, date: "2026-06-13", time: "14:00", homeTeam: "Serbia", homeFlag: "🇷🇸", awayTeam: "Algeria", awayFlag: "🇩🇿", venue: "Gillette Stadium", city: "Foxborough", stage: "Group Stage", status: "Upcoming" },
  { id: 15, group: "C", matchday: 2, date: "2026-06-17", time: "20:00", homeTeam: "Canada", homeFlag: "🇨🇦", awayTeam: "Serbia", awayFlag: "🇷🇸", venue: "BC Place", city: "Vancouver", stage: "Group Stage", status: "Upcoming" },
  { id: 16, group: "C", matchday: 2, date: "2026-06-17", time: "14:00", homeTeam: "Algeria", homeFlag: "🇩🇿", awayTeam: "Honduras", awayFlag: "🇭🇳", venue: "Mercedes-Benz Stadium", city: "Atlanta", stage: "Group Stage", status: "Upcoming" },
  { id: 17, group: "C", matchday: 3, date: "2026-06-22", time: "17:00", homeTeam: "Honduras", homeFlag: "🇭🇳", awayTeam: "Serbia", awayFlag: "🇷🇸", venue: "NRG Stadium", city: "Houston", stage: "Group Stage", status: "Upcoming" },
  { id: 18, group: "C", matchday: 3, date: "2026-06-22", time: "17:00", homeTeam: "Algeria", homeFlag: "🇩🇿", awayTeam: "Canada", awayFlag: "🇨🇦", venue: "BMO Field", city: "Toronto", stage: "Group Stage", status: "Upcoming" },

  // ===== GROUP D =====
  { id: 19, group: "D", matchday: 1, date: "2026-06-13", time: "20:00", homeTeam: "Argentina", homeFlag: "🇦🇷", awayTeam: "Saudi Arabia", awayFlag: "🇸🇦", venue: "Hard Rock Stadium", city: "Miami Gardens", stage: "Group Stage", status: "Upcoming" },
  { id: 20, group: "D", matchday: 1, date: "2026-06-13", time: "17:00", homeTeam: "Peru", homeFlag: "🇵🇪", awayTeam: "Ukraine", awayFlag: "🇺🇦", venue: "Lincoln Financial Field", city: "Philadelphia", stage: "Group Stage", status: "Upcoming" },
  { id: 21, group: "D", matchday: 2, date: "2026-06-18", time: "20:00", homeTeam: "Argentina", homeFlag: "🇦🇷", awayTeam: "Peru", awayFlag: "🇵🇪", venue: "MetLife Stadium", city: "East Rutherford", stage: "Group Stage", status: "Upcoming" },
  { id: 22, group: "D", matchday: 2, date: "2026-06-18", time: "14:00", homeTeam: "Ukraine", homeFlag: "🇺🇦", awayTeam: "Saudi Arabia", awayFlag: "🇸🇦", venue: "NRG Stadium", city: "Houston", stage: "Group Stage", status: "Upcoming" },
  { id: 23, group: "D", matchday: 3, date: "2026-06-23", time: "20:00", homeTeam: "Saudi Arabia", homeFlag: "🇸🇦", awayTeam: "Peru", awayFlag: "🇵🇪", venue: "AT&T Stadium", city: "Arlington", stage: "Group Stage", status: "Upcoming" },
  { id: 24, group: "D", matchday: 3, date: "2026-06-23", time: "20:00", homeTeam: "Ukraine", homeFlag: "🇺🇦", awayTeam: "Argentina", awayFlag: "🇦🇷", venue: "SoFi Stadium", city: "Inglewood", stage: "Group Stage", status: "Upcoming" },

  // ===== GROUP E =====
  { id: 25, group: "E", matchday: 1, date: "2026-06-14", time: "20:00", homeTeam: "France", homeFlag: "🇫🇷", awayTeam: "Australia", awayFlag: "🇦🇺", venue: "SoFi Stadium", city: "Inglewood", stage: "Group Stage", status: "Upcoming" },
  { id: 26, group: "E", matchday: 1, date: "2026-06-14", time: "14:00", homeTeam: "Denmark", homeFlag: "🇩🇰", awayTeam: "Nigeria", awayFlag: "🇳🇬", venue: "Gillette Stadium", city: "Foxborough", stage: "Group Stage", status: "Upcoming" },
  { id: 27, group: "E", matchday: 2, date: "2026-06-19", time: "17:00", homeTeam: "France", homeFlag: "🇫🇷", awayTeam: "Denmark", awayFlag: "🇩🇰", venue: "AT&T Stadium", city: "Arlington", stage: "Group Stage", status: "Upcoming" },
  { id: 28, group: "E", matchday: 2, date: "2026-06-19", time: "14:00", homeTeam: "Nigeria", homeFlag: "🇳🇬", awayTeam: "Australia", awayFlag: "🇦🇺", venue: "Mercedes-Benz Stadium", city: "Atlanta", stage: "Group Stage", status: "Upcoming" },
  { id: 29, group: "E", matchday: 3, date: "2026-06-24", time: "20:00", homeTeam: "Australia", homeFlag: "🇦🇺", awayTeam: "Denmark", awayFlag: "🇩🇰", venue: "Levi's Stadium", city: "Santa Clara", stage: "Group Stage", status: "Upcoming" },
  { id: 30, group: "E", matchday: 3, date: "2026-06-24", time: "20:00", homeTeam: "Nigeria", homeFlag: "🇳🇬", awayTeam: "France", awayFlag: "🇫🇷", venue: "MetLife Stadium", city: "East Rutherford", stage: "Group Stage", status: "Upcoming" },

  // ===== GROUP F =====
  { id: 31, group: "F", matchday: 1, date: "2026-06-14", time: "17:00", homeTeam: "Brazil", homeFlag: "🇧🇷", awayTeam: "Costa Rica", awayFlag: "🇨🇷", venue: "MetLife Stadium", city: "East Rutherford", stage: "Group Stage", status: "Upcoming" },
  { id: 32, group: "F", matchday: 1, date: "2026-06-14", time: "11:00", homeTeam: "Switzerland", homeFlag: "🇨🇭", awayTeam: "Cameroon", awayFlag: "🇨🇲", venue: "Arrowhead Stadium", city: "Kansas City", stage: "Group Stage", status: "Upcoming" },
  { id: 33, group: "F", matchday: 2, date: "2026-06-19", time: "20:00", homeTeam: "Brazil", homeFlag: "🇧🇷", awayTeam: "Switzerland", awayFlag: "🇨🇭", venue: "Hard Rock Stadium", city: "Miami Gardens", stage: "Group Stage", status: "Upcoming" },
  { id: 34, group: "F", matchday: 2, date: "2026-06-19", time: "14:00", homeTeam: "Cameroon", homeFlag: "🇨🇲", awayTeam: "Costa Rica", awayFlag: "🇨🇷", venue: "Lumen Field", city: "Seattle", stage: "Group Stage", status: "Upcoming" },

  // ===== GROUP G =====
  { id: 35, group: "G", matchday: 1, date: "2026-06-15", time: "17:00", homeTeam: "England", homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", awayTeam: "Uzbekistan", awayFlag: "🇺🇿", venue: "Lincoln Financial Field", city: "Philadelphia", stage: "Group Stage", status: "Upcoming" },
  { id: 36, group: "G", matchday: 1, date: "2026-06-15", time: "20:00", homeTeam: "Netherlands", homeFlag: "🇳🇱", awayTeam: "Morocco", awayFlag: "🇲🇦", venue: "Hard Rock Stadium", city: "Miami Gardens", stage: "Group Stage", status: "Upcoming" },
  { id: 37, group: "G", matchday: 2, date: "2026-06-20", time: "17:00", homeTeam: "England", homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", awayTeam: "Netherlands", awayFlag: "🇳🇱", venue: "MetLife Stadium", city: "East Rutherford", stage: "Group Stage", status: "Upcoming" },
  { id: 38, group: "G", matchday: 2, date: "2026-06-20", time: "14:00", homeTeam: "Morocco", homeFlag: "🇲🇦", awayTeam: "Uzbekistan", awayFlag: "🇺🇿", venue: "NRG Stadium", city: "Houston", stage: "Group Stage", status: "Upcoming" },

  // ===== GROUP H =====
  { id: 39, group: "H", matchday: 1, date: "2026-06-15", time: "14:00", homeTeam: "Spain", homeFlag: "🇪🇸", awayTeam: "China PR", awayFlag: "🇨🇳", venue: "AT&T Stadium", city: "Arlington", stage: "Group Stage", status: "Upcoming" },
  { id: 40, group: "H", matchday: 1, date: "2026-06-15", time: "11:00", homeTeam: "Turkey", homeFlag: "🇹🇷", awayTeam: "Egypt", awayFlag: "🇪🇬", venue: "Mercedes-Benz Stadium", city: "Atlanta", stage: "Group Stage", status: "Upcoming" },
  { id: 41, group: "H", matchday: 2, date: "2026-06-21", time: "20:00", homeTeam: "Spain", homeFlag: "🇪🇸", awayTeam: "Turkey", awayFlag: "🇹🇷", venue: "SoFi Stadium", city: "Inglewood", stage: "Group Stage", status: "Upcoming" },
  { id: 42, group: "H", matchday: 2, date: "2026-06-21", time: "14:00", homeTeam: "Egypt", homeFlag: "🇪🇬", awayTeam: "China PR", awayFlag: "🇨🇳", venue: "Levi's Stadium", city: "Santa Clara", stage: "Group Stage", status: "Upcoming" },

  // ===== GROUP I =====
  { id: 43, group: "I", matchday: 1, date: "2026-06-16", time: "17:00", homeTeam: "Germany", homeFlag: "🇩🇪", awayTeam: "Panama", awayFlag: "🇵🇦", venue: "NRG Stadium", city: "Houston", stage: "Group Stage", status: "Upcoming" },
  { id: 44, group: "I", matchday: 1, date: "2026-06-16", time: "11:00", homeTeam: "Uruguay", homeFlag: "🇺🇾", awayTeam: "IR Iran", awayFlag: "🇮🇷", venue: "Lumen Field", city: "Seattle", stage: "Group Stage", status: "Upcoming" },

  // ===== GROUP J =====
  { id: 45, group: "J", matchday: 1, date: "2026-06-16", time: "20:00", homeTeam: "Portugal", homeFlag: "🇵🇹", awayTeam: "Trinidad & Tobago", awayFlag: "🇹🇹", venue: "MetLife Stadium", city: "East Rutherford", stage: "Group Stage", status: "Upcoming" },
  { id: 46, group: "J", matchday: 1, date: "2026-06-16", time: "14:00", homeTeam: "Chile", homeFlag: "🇨🇱", awayTeam: "Japan", awayFlag: "🇯🇵", venue: "Arrowhead Stadium", city: "Kansas City", stage: "Group Stage", status: "Upcoming" },

  // ===== GROUP K =====
  { id: 47, group: "K", matchday: 1, date: "2026-06-17", time: "17:00", homeTeam: "Belgium", homeFlag: "🇧🇪", awayTeam: "El Salvador", awayFlag: "🇸🇻", venue: "Gillette Stadium", city: "Foxborough", stage: "Group Stage", status: "Upcoming" },
  { id: 48, group: "K", matchday: 1, date: "2026-06-17", time: "11:00", homeTeam: "Austria", homeFlag: "🇦🇹", awayTeam: "Ghana", awayFlag: "🇬🇭", venue: "Lincoln Financial Field", city: "Philadelphia", stage: "Group Stage", status: "Upcoming" },

  // ===== GROUP L =====
  { id: 49, group: "L", matchday: 1, date: "2026-06-18", time: "17:00", homeTeam: "Croatia", homeFlag: "🇭🇷", awayTeam: "Tunisia", awayFlag: "🇹🇳", venue: "Hard Rock Stadium", city: "Miami Gardens", stage: "Group Stage", status: "Upcoming" },
  { id: 50, group: "L", matchday: 1, date: "2026-06-18", time: "11:00", homeTeam: "Paraguay", homeFlag: "🇵🇾", awayTeam: "Wales", awayFlag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", venue: "Levi's Stadium", city: "Santa Clara", stage: "Group Stage", status: "Upcoming" },

  // ===== KNOCKOUT ROUNDS (Placeholder) =====
  { id: 51, group: null, matchday: null, date: "2026-06-28", time: "TBD", homeTeam: "Winner Group A", homeFlag: "🏳️", awayTeam: "Runner-up Group B", awayFlag: "🏳️", venue: "TBD", city: "TBD", stage: "Round of 32", status: "Upcoming" },
  { id: 52, group: null, matchday: null, date: "2026-07-04", time: "TBD", homeTeam: "TBD", homeFlag: "🏳️", awayTeam: "TBD", awayFlag: "🏳️", venue: "TBD", city: "TBD", stage: "Round of 16", status: "Upcoming" },
  { id: 53, group: null, matchday: null, date: "2026-07-11", time: "TBD", homeTeam: "TBD", homeFlag: "🏳️", awayTeam: "TBD", awayFlag: "🏳️", venue: "SoFi Stadium", city: "Inglewood", stage: "Quarter-final", status: "Upcoming" },
  { id: 54, group: null, matchday: null, date: "2026-07-14", time: "TBD", homeTeam: "TBD", homeFlag: "🏳️", awayTeam: "TBD", awayFlag: "🏳️", venue: "AT&T Stadium", city: "Arlington", stage: "Semi-final", status: "Upcoming" },
  { id: 55, group: null, matchday: null, date: "2026-07-15", time: "TBD", homeTeam: "TBD", homeFlag: "🏳️", awayTeam: "TBD", awayFlag: "🏳️", venue: "SoFi Stadium", city: "Inglewood", stage: "Semi-final", status: "Upcoming" },
  { id: 56, group: null, matchday: null, date: "2026-07-18", time: "TBD", homeTeam: "TBD", homeFlag: "🏳️", awayTeam: "TBD", awayFlag: "🏳️", venue: "Hard Rock Stadium", city: "Miami Gardens", stage: "Third-Place Match", status: "Upcoming" },
  { id: 57, group: null, matchday: null, date: "2026-07-19", time: "20:00", homeTeam: "TBD", homeFlag: "🏳️", awayTeam: "TBD", awayFlag: "🏳️", venue: "MetLife Stadium", city: "East Rutherford", stage: "Final", status: "Upcoming" },
];

export default fixtures;
