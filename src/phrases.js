/**
 * Kannada Visual Learning Data
 * ─────────────────────────────
 * Organized by real-world categories:
 *   Greetings, Directions, Auto/Transport, Money, Daily Conversation
 */

/* ═══════════ KEYWORDS ═══════════ */
export const keywords = [
  // ── Greetings ──
  { id: 1, category: "Greetings", kannada: "ನಮಸ್ಕಾರ", transliteration: "Namaskara", english: "Hello" },
  { id: 2, category: "Greetings", kannada: "ಹೇಗಿದ್ದೀರಿ", transliteration: "Hegiddiri", english: "How are you?" },
  { id: 3, category: "Greetings", kannada: "ಚೆನ್ನಾಗಿದ್ದೇನೆ", transliteration: "Chennaagiddene", english: "I am fine" },
  { id: 4, category: "Greetings", kannada: "ಧನ್ಯವಾದ", transliteration: "Dhanyavaada", english: "Thank you" },
  { id: 5, category: "Greetings", kannada: "ದಯವಿಟ್ಟು", transliteration: "Dayavittu", english: "Please" },
  { id: 6, category: "Greetings", kannada: "ಕ್ಷಮಿಸಿ", transliteration: "Kshamisi", english: "Sorry / Excuse me" },
  { id: 7, category: "Greetings", kannada: "ಹೌದು", transliteration: "Haudu", english: "Yes" },
  { id: 8, category: "Greetings", kannada: "ಇಲ್ಲ", transliteration: "Illa", english: "No" },
  { id: 9, category: "Greetings", kannada: "ಸರಿ", transliteration: "Sari", english: "Okay" },
  { id: 10, category: "Greetings", kannada: "ಬನ್ನಿ", transliteration: "Banni", english: "Welcome / Come" },
  { id: 11, category: "Greetings", kannada: "ಹೋಗಿ ಬರ್ತೀನಿ", transliteration: "Hogi bartini", english: "Goodbye (I'll go and come)" },
  { id: 12, category: "Greetings", kannada: "ಶುಭ ರಾತ್ರಿ", transliteration: "Shubha raatri", english: "Good night" },

  // ── Directions ──
  { id: 13, category: "Directions", kannada: "ಎಡ", transliteration: "Eda", english: "Left" },
  { id: 14, category: "Directions", kannada: "ಬಲ", transliteration: "Bala", english: "Right" },
  { id: 15, category: "Directions", kannada: "ನೇರ", transliteration: "Nera", english: "Straight" },
  { id: 16, category: "Directions", kannada: "ಇಲ್ಲಿ", transliteration: "Illi", english: "Here" },
  { id: 17, category: "Directions", kannada: "ಅಲ್ಲಿ", transliteration: "Alli", english: "There" },
  { id: 18, category: "Directions", kannada: "ಎಲ್ಲಿ", transliteration: "Elli", english: "Where" },
  { id: 19, category: "Directions", kannada: "ಹತ್ತಿರ", transliteration: "Hattira", english: "Near" },
  { id: 20, category: "Directions", kannada: "ದೂರ", transliteration: "Doora", english: "Far" },
  { id: 21, category: "Directions", kannada: "ಮುಂದೆ", transliteration: "Munde", english: "Ahead / Front" },
  { id: 22, category: "Directions", kannada: "ಹಿಂದೆ", transliteration: "Hinde", english: "Behind / Back" },
  { id: 23, category: "Directions", kannada: "ಮೇಲೆ", transliteration: "Mele", english: "Above / Up" },
  { id: 24, category: "Directions", kannada: "ಕೆಳಗೆ", transliteration: "Kelage", english: "Below / Down" },
  { id: 25, category: "Directions", kannada: "ಬಸ್ ನಿಲ್ದಾಣ", transliteration: "Bus nildaana", english: "Bus stop" },
  { id: 26, category: "Directions", kannada: "ದಾರಿ", transliteration: "Daari", english: "Way / Road" },

  // ── Auto / Transport ──
  { id: 27, category: "Auto", kannada: "ಆಟೋ", transliteration: "Auto", english: "Auto rickshaw" },
  { id: 28, category: "Auto", kannada: "ಬಸ್", transliteration: "Bus", english: "Bus" },
  { id: 29, category: "Auto", kannada: "ಗಾಡಿ", transliteration: "Gaadi", english: "Vehicle / Car" },
  { id: 30, category: "Auto", kannada: "ಟಿಕೆಟ್", transliteration: "Ticket", english: "Ticket" },
  { id: 31, category: "Auto", kannada: "ಮೀಟರ್", transliteration: "Meter", english: "Meter" },
  { id: 32, category: "Auto", kannada: "ನಿಲ್ಲಿಸಿ", transliteration: "Nillisi", english: "Stop (polite)" },
  { id: 33, category: "Auto", kannada: "ಹೋಗಿ", transliteration: "Hogi", english: "Go (polite)" },
  { id: 34, category: "Auto", kannada: "ತಿರುಗಿ", transliteration: "Tirugi", english: "Turn (polite)" },
  { id: 35, category: "Auto", kannada: "ಬೇಗ", transliteration: "Bega", english: "Fast / Quickly" },
  { id: 36, category: "Auto", kannada: "ನಿಧಾನ", transliteration: "Nidhaana", english: "Slow" },

  // ── Money ──
  { id: 37, category: "Money", kannada: "ಹಣ", transliteration: "Hana", english: "Money" },
  { id: 38, category: "Money", kannada: "ಬೆಲೆ", transliteration: "Bele", english: "Price" },
  { id: 39, category: "Money", kannada: "ಎಷ್ಟು", transliteration: "Eshtu", english: "How much" },
  { id: 40, category: "Money", kannada: "ಬಿಲ್", transliteration: "Bill", english: "Bill" },
  { id: 41, category: "Money", kannada: "ಕೊಡಿ", transliteration: "Kodi", english: "Give (polite)" },
  { id: 42, category: "Money", kannada: "ಕಡಿಮೆ", transliteration: "Kadime", english: "Less / Reduce" },
  { id: 43, category: "Money", kannada: "ಜಾಸ್ತಿ", transliteration: "Jaasti", english: "More / Too much" },
  { id: 44, category: "Money", kannada: "ಒಂದು", transliteration: "Ondu", english: "One (1)" },
  { id: 45, category: "Money", kannada: "ಎರಡು", transliteration: "Eradu", english: "Two (2)" },
  { id: 46, category: "Money", kannada: "ಮೂರು", transliteration: "Mooru", english: "Three (3)" },
  { id: 47, category: "Money", kannada: "ನಾಲ್ಕು", transliteration: "Naalku", english: "Four (4)" },
  { id: 48, category: "Money", kannada: "ಐದು", transliteration: "Aidu", english: "Five (5)" },
  { id: 49, category: "Money", kannada: "ಹತ್ತು", transliteration: "Hattu", english: "Ten (10)" },
  { id: 50, category: "Money", kannada: "ಇಪ್ಪತ್ತು", transliteration: "Ippattu", english: "Twenty (20)" },
  { id: 51, category: "Money", kannada: "ಐವತ್ತು", transliteration: "Aivattu", english: "Fifty (50)" },
  { id: 52, category: "Money", kannada: "ನೂರು", transliteration: "Nooru", english: "Hundred (100)" },

  // ── Daily Conversation ──
  { id: 53, category: "Conversation", kannada: "ನಾನು", transliteration: "Naanu", english: "I" },
  { id: 54, category: "Conversation", kannada: "ನೀವು", transliteration: "Neevu", english: "You (formal)" },
  { id: 55, category: "Conversation", kannada: "ಅವರು", transliteration: "Avaru", english: "They / He-She (respect)" },
  { id: 56, category: "Conversation", kannada: "ಏನು", transliteration: "Enu", english: "What" },
  { id: 57, category: "Conversation", kannada: "ಯಾಕೆ", transliteration: "Yaake", english: "Why" },
  { id: 58, category: "Conversation", kannada: "ಹೇಗೆ", transliteration: "Hege", english: "How" },
  { id: 59, category: "Conversation", kannada: "ಯಾರು", transliteration: "Yaaru", english: "Who" },
  { id: 60, category: "Conversation", kannada: "ಯಾವಾಗ", transliteration: "Yaavaaga", english: "When" },
  { id: 61, category: "Conversation", kannada: "ಬೇಕು", transliteration: "Beku", english: "Want / Need" },
  { id: 62, category: "Conversation", kannada: "ಬೇಡ", transliteration: "Beda", english: "Don't want" },
  { id: 63, category: "Conversation", kannada: "ಗೊತ್ತು", transliteration: "Gottu", english: "Know" },
  { id: 64, category: "Conversation", kannada: "ಗೊತ್ತಿಲ್ಲ", transliteration: "Gottilla", english: "Don't know" },
  { id: 65, category: "Conversation", kannada: "ನೀರು", transliteration: "Neeru", english: "Water" },
  { id: 66, category: "Conversation", kannada: "ಊಟ", transliteration: "Oota", english: "Food / Meal" },
  { id: 67, category: "Conversation", kannada: "ಕಾಫಿ", transliteration: "Kaafi", english: "Coffee" },
  { id: 68, category: "Conversation", kannada: "ಚಹಾ", transliteration: "Chaha", english: "Tea" },
  { id: 69, category: "Conversation", kannada: "ಮನೆ", transliteration: "Mane", english: "House / Home" },
  { id: 70, category: "Conversation", kannada: "ಕೆಲಸ", transliteration: "Kelasa", english: "Work / Job" },
  { id: 71, category: "Conversation", kannada: "ಹೆಸರು", transliteration: "Hesaru", english: "Name" },
  { id: 72, category: "Conversation", kannada: "ಒಳ್ಳೆಯ", transliteration: "Olleya", english: "Good" },
  { id: 73, category: "Conversation", kannada: "ಕೆಟ್ಟ", transliteration: "Ketta", english: "Bad" },
  { id: 74, category: "Conversation", kannada: "ತುಂಬಾ", transliteration: "Tumba", english: "Very / A lot" },
  { id: 75, category: "Conversation", kannada: "ಸ್ವಲ್ಪ", transliteration: "Svalpa", english: "A little" },
  { id: 76, category: "Conversation", kannada: "ಈಗ", transliteration: "Eega", english: "Now" },
  { id: 77, category: "Conversation", kannada: "ಆಮೇಲೆ", transliteration: "Aamele", english: "Later / After" },
  { id: 78, category: "Conversation", kannada: "ಬಿಸಿ", transliteration: "Bisi", english: "Hot" },
  { id: 79, category: "Conversation", kannada: "ತಣ್ಣ", transliteration: "Tanna", english: "Cold" },
  { id: 80, category: "Conversation", kannada: "ಆಸ್ಪತ್ರೆ", transliteration: "Aaspatre", english: "Hospital" },
  { id: 81, category: "Conversation", kannada: "ಅಂಗಡಿ", transliteration: "Angadi", english: "Shop" },
  { id: 82, category: "Conversation", kannada: "ರೂಮ್", transliteration: "Room", english: "Room" },
  { id: 83, category: "Conversation", kannada: "ಫೋನ್", transliteration: "Phone", english: "Phone" },
  { id: 84, category: "Conversation", kannada: "ಸಮಯ", transliteration: "Samaya", english: "Time" },
  { id: 85, category: "Conversation", kannada: "ದಿನ", transliteration: "Dina", english: "Day" },
  { id: 86, category: "Conversation", kannada: "ಬೆಳಗ್ಗೆ", transliteration: "Belagge", english: "Morning" },
  { id: 87, category: "Conversation", kannada: "ರಾತ್ರಿ", transliteration: "Raatri", english: "Night" },
  { id: 88, category: "Conversation", kannada: "ಸಂಜೆ", transliteration: "Sanje", english: "Evening" },
];

/* ═══════════ SENTENCE FORMATIONS ═══════════ */
export const sentences = [
  // ── Greetings ──
  {
    id: 1, category: "Greetings",
    english: "What is your name?",
    kannada: "ನಿಮ್ಮ ಹೆಸರೇನು?",
    transliteration: "Nimma hesarenu?",
    breakdown: [
      { word: "ನಿಮ್ಮ", meaning: "your (formal)" },
      { word: "ಹೆಸರೇನು", meaning: "name-what (hesaru + enu)" },
    ],
    structure: "[Possessive] + hesarenu?",
    tip: "'Nanna hesaru [X]' = 'My name is [X]'.",
  },
  {
    id: 2, category: "Greetings",
    english: "My name is Aquib.",
    kannada: "ನನ್ನ ಹೆಸರು ಅಕೀಬ್.",
    transliteration: "Nanna hesaru Aquib.",
    breakdown: [
      { word: "ನನ್ನ", meaning: "my" },
      { word: "ಹೆಸರು", meaning: "name" },
      { word: "ಅಕೀಬ್", meaning: "Aquib (your name)" },
    ],
    structure: "Nanna + hesaru + [name]",
    tip: "Replace 'Aquib' with your actual name!",
  },
  {
    id: 3, category: "Greetings",
    english: "Thank you very much!",
    kannada: "ತುಂಬಾ ಧನ್ಯವಾದಗಳು!",
    transliteration: "Tumba dhanyavaadagalu!",
    breakdown: [
      { word: "ತುಂಬಾ", meaning: "very much" },
      { word: "ಧನ್ಯವಾದಗಳು", meaning: "thanks (plural/respectful)" },
    ],
    structure: "Tumba + dhanyavaadagalu",
    tip: "'-galu' makes it respectful. 'Dhanyavaada' is casual.",
  },

  // ── Directions ──
  {
    id: 4, category: "Directions",
    english: "Where is the bus stop?",
    kannada: "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?",
    transliteration: "Bus nildaana ellide?",
    breakdown: [
      { word: "ಬಸ್ ನಿಲ್ದಾಣ", meaning: "bus stop" },
      { word: "ಎಲ್ಲಿದೆ", meaning: "where is (elli + ide)" },
    ],
    structure: "[Place] + ellide?",
    tip: "Replace the place name to ask 'where is [X]?'",
  },
  {
    id: 5, category: "Directions",
    english: "Go straight.",
    kannada: "ನೇರವಾಗಿ ಹೋಗಿ.",
    transliteration: "Neravagi hogi.",
    breakdown: [
      { word: "ನೇರವಾಗಿ", meaning: "straight (-aagi = like)" },
      { word: "ಹೋಗಿ", meaning: "go (polite)" },
    ],
    structure: "[Direction]-aagi + verb",
    tip: "'-aagi' converts adjective → adverb.",
  },
  {
    id: 6, category: "Directions",
    english: "Turn left.",
    kannada: "ಎಡಕ್ಕೆ ತಿರುಗಿ.",
    transliteration: "Edakke tirugi.",
    breakdown: [
      { word: "ಎಡಕ್ಕೆ", meaning: "to the left (-kke = towards)" },
      { word: "ತಿರುಗಿ", meaning: "turn (polite)" },
    ],
    structure: "[Direction]-kke + verb",
    tip: "Replace ಎಡ with ಬಲ (bala) for 'turn right'.",
  },
  {
    id: 7, category: "Directions",
    english: "How far is the hospital?",
    kannada: "ಆಸ್ಪತ್ರೆ ಎಷ್ಟು ದೂರ?",
    transliteration: "Aaspatre eshtu doora?",
    breakdown: [
      { word: "ಆಸ್ಪತ್ರೆ", meaning: "hospital" },
      { word: "ಎಷ್ಟು", meaning: "how much" },
      { word: "ದೂರ", meaning: "far" },
    ],
    structure: "[Place] + eshtu doora?",
    tip: "Works for asking distance to any place.",
  },

  // ── Auto / Transport ──
  {
    id: 8, category: "Auto",
    english: "How much to Majestic?",
    kannada: "ಮೆಜೆಸ್ಟಿಕ್‌ಗೆ ಎಷ್ಟು?",
    transliteration: "Mejestik-ge eshtu?",
    breakdown: [
      { word: "ಮೆಜೆಸ್ಟಿಕ್‌ಗೆ", meaning: "to Majestic (-ge = to)" },
      { word: "ಎಷ್ಟು", meaning: "how much" },
    ],
    structure: "[Place]-ge + eshtu?",
    tip: "Add '-ge' after any place name to say 'to [place]'.",
  },
  {
    id: 9, category: "Auto",
    english: "Stop here please.",
    kannada: "ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ.",
    transliteration: "Illi nillisi.",
    breakdown: [
      { word: "ಇಲ್ಲಿ", meaning: "here" },
      { word: "ನಿಲ್ಲಿಸಿ", meaning: "stop (polite)" },
    ],
    structure: "[Place] + verb (polite)",
    tip: "'-i' ending = polite request.",
  },
  {
    id: 10, category: "Auto",
    english: "Please use the meter.",
    kannada: "ದಯವಿಟ್ಟು ಮೀಟರ್ ಹಾಕಿ.",
    transliteration: "Dayavittu meter haaki.",
    breakdown: [
      { word: "ದಯವಿಟ್ಟು", meaning: "please" },
      { word: "ಮೀಟರ್", meaning: "meter" },
      { word: "ಹಾಕಿ", meaning: "put on (polite)" },
    ],
    structure: "Dayavittu + [object] + verb",
    tip: "'Dayavittu' makes any request polite.",
  },

  // ── Money ──
  {
    id: 11, category: "Money",
    english: "How much per night?",
    kannada: "ಒಂದು ರಾತ್ರಿಗೆ ಎಷ್ಟು?",
    transliteration: "Ondu raatrige eshtu?",
    breakdown: [
      { word: "ಒಂದು", meaning: "one" },
      { word: "ರಾತ್ರಿಗೆ", meaning: "for one night (-ge = for)" },
      { word: "ಎಷ್ಟು", meaning: "how much" },
    ],
    structure: "Ondu + [unit]-ge + eshtu?",
    tip: "Works for any unit: 'ondu ghante-ge' = per hour.",
  },
  {
    id: 12, category: "Money",
    english: "Give me the bill please.",
    kannada: "ದಯವಿಟ್ಟು ಬಿಲ್ ಕೊಡಿ.",
    transliteration: "Dayavittu bill kodi.",
    breakdown: [
      { word: "ದಯವಿಟ್ಟು", meaning: "please" },
      { word: "ಬಿಲ್", meaning: "bill" },
      { word: "ಕೊಡಿ", meaning: "give (polite)" },
    ],
    structure: "Dayavittu + [thing] + kodi",
    tip: "'Kodi' is your go-to for requesting things.",
  },
  {
    id: 13, category: "Money",
    english: "Reduce the price a little.",
    kannada: "ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ.",
    transliteration: "Svalpa kadime maadi.",
    breakdown: [
      { word: "ಸ್ವಲ್ಪ", meaning: "a little" },
      { word: "ಕಡಿಮೆ", meaning: "less / reduce" },
      { word: "ಮಾಡಿ", meaning: "do (polite)" },
    ],
    structure: "Svalpa + kadime + maadi",
    tip: "Essential for bargaining at markets!",
  },

  // ── Daily Conversation ──
  {
    id: 14, category: "Conversation",
    english: "I need water.",
    kannada: "ನನಗೆ ನೀರು ಬೇಕು.",
    transliteration: "Nanage neeru beku.",
    breakdown: [
      { word: "ನನಗೆ", meaning: "to me (nana + ge)" },
      { word: "ನೀರು", meaning: "water" },
      { word: "ಬೇಕು", meaning: "need / want" },
    ],
    structure: "[Person]-ge + [thing] + beku",
    tip: "'nanage [X] beku' = 'I need [X]'. Works for anything!",
  },
  {
    id: 15, category: "Conversation",
    english: "I don't want this.",
    kannada: "ನನಗೆ ಇದು ಬೇಡ.",
    transliteration: "Nanage idu beda.",
    breakdown: [
      { word: "ನನಗೆ", meaning: "to me" },
      { word: "ಇದು", meaning: "this" },
      { word: "ಬೇಡ", meaning: "don't want" },
    ],
    structure: "[Person]-ge + [thing] + beda",
    tip: "'Beku' = want, 'Beda' = don't want. Easy opposites!",
  },
  {
    id: 16, category: "Conversation",
    english: "I don't understand.",
    kannada: "ನನಗೆ ಅರ್ಥ ಆಗ್ತಿಲ್ಲ.",
    transliteration: "Nanage artha aagtilla.",
    breakdown: [
      { word: "ನನಗೆ", meaning: "to me" },
      { word: "ಅರ್ಥ", meaning: "meaning" },
      { word: "ಆಗ್ತಿಲ್ಲ", meaning: "is not happening" },
    ],
    structure: "[Person]-ge + artha + aagtilla",
    tip: "Locals will simplify after hearing this!",
  },
  {
    id: 17, category: "Conversation",
    english: "Please speak slowly.",
    kannada: "ದಯವಿಟ್ಟು ನಿಧಾನವಾಗಿ ಹೇಳಿ.",
    transliteration: "Dayavittu nidhaanavaagi heli.",
    breakdown: [
      { word: "ದಯವಿಟ್ಟು", meaning: "please" },
      { word: "ನಿಧಾನವಾಗಿ", meaning: "slowly (-vaagi)" },
      { word: "ಹೇಳಿ", meaning: "say (polite)" },
    ],
    structure: "Dayavittu + [adverb]-vaagi + verb",
    tip: "Super useful when locals speak too fast!",
  },
  {
    id: 18, category: "Conversation",
    english: "Where is the bathroom?",
    kannada: "ಬಾತ್‌ರೂಮ್ ಎಲ್ಲಿದೆ?",
    transliteration: "Bathroom ellide?",
    breakdown: [
      { word: "ಬಾತ್‌ರೂಮ್", meaning: "bathroom" },
      { word: "ಎಲ್ಲಿದೆ", meaning: "where is" },
    ],
    structure: "[Thing] + ellide?",
    tip: "'Ellide' = where + is. Works for anything!",
  },
  {
    id: 19, category: "Conversation",
    english: "Do you speak English?",
    kannada: "ನಿಮಗೆ ಇಂಗ್ಲಿಷ್ ಬರುತ್ತಾ?",
    transliteration: "Nimage English baruttaa?",
    breakdown: [
      { word: "ನಿಮಗೆ", meaning: "to you (formal)" },
      { word: "ಇಂಗ್ಲಿಷ್", meaning: "English" },
      { word: "ಬರುತ್ತಾ", meaning: "does it come? (= do you know?)" },
    ],
    structure: "[Person]-ge + [language] + baruttaa?",
    tip: "'Baruttaa' literally means 'does it come to you'.",
  },
  {
    id: 20, category: "Conversation",
    english: "I know a little Kannada.",
    kannada: "ನನಗೆ ಸ್ವಲ್ಪ ಕನ್ನಡ ಬರುತ್ತೆ.",
    transliteration: "Nanage svalpa Kannada barutte.",
    breakdown: [
      { word: "ನನಗೆ", meaning: "to me" },
      { word: "ಸ್ವಲ್ಪ", meaning: "a little" },
      { word: "ಕನ್ನಡ", meaning: "Kannada" },
      { word: "ಬರುತ್ತೆ", meaning: "comes (= I know)" },
    ],
    structure: "[Person]-ge + svalpa + [language] + barutte",
    tip: "People will love you for trying!",
  },
  {
    id: 21, category: "Conversation",
    english: "Please help me.",
    kannada: "ದಯವಿಟ್ಟು ನನಗೆ ಸಹಾಯ ಮಾಡಿ.",
    transliteration: "Dayavittu nanage sahaaya maadi.",
    breakdown: [
      { word: "ದಯವಿಟ್ಟು", meaning: "please" },
      { word: "ನನಗೆ", meaning: "to me" },
      { word: "ಸಹಾಯ", meaning: "help (noun)" },
      { word: "ಮಾಡಿ", meaning: "do (polite)" },
    ],
    structure: "Dayavittu + [person]-ge + [noun] + maadi",
    tip: "'Sahaaya maadi' = 'do help'. Noun+verb combo.",
  },
  {
    id: 22, category: "Conversation",
    english: "Give me one coffee.",
    kannada: "ಒಂದು ಕಾಫಿ ಕೊಡಿ.",
    transliteration: "Ondu kaafi kodi.",
    breakdown: [
      { word: "ಒಂದು", meaning: "one" },
      { word: "ಕಾಫಿ", meaning: "coffee" },
      { word: "ಕೊಡಿ", meaning: "give (polite)" },
    ],
    structure: "[Number] + [thing] + kodi",
    tip: "Replace 'ondu' with 'eradu' for two, 'mooru' for three.",
  },
];

/* ═══════════ GRAMMAR TIPS ═══════════ */
export const grammarTips = [
  { id: 1, title: "Sentence Order: SOV", content: "Kannada follows Subject → Object → Verb. Unlike English (I eat food), Kannada says 'I food eat'.", example: "ನಾನು ಊಟ ತಿನ್ನುತ್ತೇನೆ (I food eat = I eat food)" },
  { id: 2, title: "The '-ge' Suffix", content: "Add '-ge' to a noun to mean 'to' or 'for'. After consonants it becomes '-kke' or '-akke'.", example: "ನನಗೆ (to me) · ಮನೆಗೆ (to home) · ನಿಲ್ದಾಣಕ್ಕೆ (to station)" },
  { id: 3, title: "Polite Requests with '-i'", content: "Change verb endings to '-i' for polite requests. Essential with strangers and elders.", example: "ಕೊಡು → ಕೊಡಿ (give → please give) · ಹೋಗು → ಹೋಗಿ (go → please go)" },
  { id: 4, title: "Where is…? — ellide", content: "Put the thing first, then add 'ಎಲ್ಲಿದೆ?' (ellide). No extra words needed!", example: "ಅಂಗಡಿ ಎಲ್ಲಿದೆ? (Shop where-is?) · ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?" },
  { id: 5, title: "Want vs Don't Want", content: "'ಬೇಕು' (beku) = want/need. 'ಬೇಡ' (beda) = don't want.", example: "ನೀರು ಬೇಕು (want water) · ನೀರು ಬೇಡ (don't want water)" },
  { id: 6, title: "Adverbs with '-aagi'", content: "Add '-aagi' to an adjective to make it an adverb. Like adding '-ly' in English.", example: "ನೇರ → ನೇರವಾಗಿ (straight → straightly) · ನಿಧಾನ → ನಿಧಾನವಾಗಿ (slow → slowly)" },
  { id: 7, title: "Negation with 'ಇಲ್ಲ'", content: "'ಇಲ್ಲ' (illa) = no / not / doesn't exist. Place at the end to negate.", example: "ನೀರು ಇಲ್ಲ (no water) · ಗೊತ್ತಿಲ್ಲ (don't know)" },
  { id: 8, title: "'Need to do' — verb + beku", content: "Attach 'ಬೇಕು' to a verb root to say 'need to [verb]'.", example: "ಹೋಗಬೇಕು (need to go) · ತಿನ್ನಬೇಕು (need to eat) · ಮಾಡಬೇಕು (need to do)" },
];

/* ═══════════ CATEGORY CONFIG ═══════════ */
export const categoryConfig = {
  Greetings: { emoji: "🙏", label: "Greetings", color: "#22c55e" },
  Directions: { emoji: "🗺️", label: "Directions", color: "#3b82f6" },
  Auto: { emoji: "🛺", label: "Auto Rides", color: "#f59e0b" },
  Money: { emoji: "💰", label: "Money", color: "#ef4444" },
  Conversation: { emoji: "💬", label: "Conversation", color: "#8b5cf6" },
};

export const keywordCategories = ["All", "Greetings", "Directions", "Auto", "Money", "Conversation"];
export const sentenceCategories = ["All", "Greetings", "Directions", "Auto", "Money", "Conversation"];
