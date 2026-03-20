import { Calculator, Factory, HeartPulse, Home, Hotel, Landmark, Sparkles, Sprout, TrendingUp } from "lucide-react";

// Natural Farming Images
const naturalFarming1 = "/Coursimg/NATURAL FARMING1.png";
const naturalFarming2 = "/Coursimg/NATURAL FARMING2.png";
const naturalFarming3 = "/Coursimg/NATURAL FARMING3.png";

// Agro Processing Images
const agroProcessing1 = "/Coursimg/AGRO PROCESSING1.png";
const agroProcessing2 = "/Coursimg/AGRO PROCESSING2.png";

// Home Science Images
const homeScience1 = "/Coursimg/HOME SCIENCE1.png";
const homeScience2 = "/Coursimg/HOME SCIENCE2.png";
const homeScience3 = "/Coursimg/HOME SCIENCE3.png";

// Management & Entrepreneurship Images
const management1 = "/Coursimg/MANAGEMENT & ENTREPRENEURSHIP1.png";
const management2 = "/Coursimg/MANAGEMENT & ENTREPRENEURSHIP2.png";
const management3 = "/Coursimg/MANAGEMENT & ENTREPRENEURSHIP3.png";

// Hospitality, Tourism & Hotel Management Images
const hospitality1 = "/Coursimg/HOSPITALITY, TOURISM & HOTEL MANAGEMENT1.png";
const hospitality2 = "/Coursimg/HOSPITALITY, TOURISM & HOTEL MANAGEMENT2.png";
const hospitality3 = "/Coursimg/HOSPITALITY, TOURISM & HOTEL MANAGEMENT3.png";

// Beauty & Wellness Images
const beauty1 = "/Coursimg/BEAUTY & WELLNESS1.png";
const beauty2 = "/Coursimg/BEAUTY & WELLNESS2.png";
const beauty3 = "/Coursimg/BEAUTY & WELLNESS3.png";

// Healthcare Images
const healthcare1 = "/Coursimg/HEALTHCARE1.png";
const healthcare2 = "/Coursimg/HEALTHCARE2.png";
const healthcare3 = "/Coursimg/HEALTHCARE3.png";

// Banking & Finance Images
const banking1 = "/Coursimg/BANKING & FINANCE1.png";
const banking2 = "/Coursimg/BANKING & FINANCE2.png";
const banking3 = "/Coursimg/BANKING & FINANCE3.png";

// Accounting & Taxation Images
const accounting1 = "/Coursimg/ACCOUNTING & TAXATION1.png";
const accounting2 = "/Coursimg/ACCOUNTING & TAXATION2.png";
const accounting3 = "/Coursimg/ACCOUNTING & TAXATION3.png";

export const courseSummaries = [
  {
    slug: "management-entrepreneurship",
    icon: TrendingUp,
    name: "Management & Entrepreneurship",
    image: management1,
    desc: "Learn business management, marketing, and startup development.",
    careers: "Business Executive, Entrepreneur, Office Manager",
  },
  {
    slug: "banking-finance",
    icon: Landmark,
    name: "Banking & Finance",
    image: banking1,
    desc: "Learn financial management, banking operations, and accounting basics.",
    careers: "Banking Assistant, Financial Executive",
  },
  {
    slug: "accounting-taxation",
    icon: Calculator,
    name: "Accounting & Taxation",
    image: accounting1,
    desc: "Learn GST, income tax basics, accounting software, and financial records.",
    careers: "Accountant, Tax Consultant Assistant",
  },
  {
    slug: "natural-farming",
    icon: Sprout,
    name: "Natural Farming",
    image: naturalFarming1,
    desc: "Learn sustainable agricultural practices and organic farming methods.",
    careers: "Farm Consultant, Organic Farmer, Agri-Entrepreneur",
  },
  {
    slug: "agro-processing",
    icon: Factory,
    name: "Agro Processing",
    image: agroProcessing1,
    desc: "Learn food processing, packaging, and preservation techniques.",
    careers: "Food Processing Units, Agro Industries, Self Business",
  },
  {
    slug: "home-science",
    icon: Home,
    name: "Home Science",
    image: homeScience1,
    desc: "Develop knowledge in nutrition, family resource management, and community development.",
    careers: "Nutrition Assistant, Community Worker, Self Employment",
  },
  {
    slug: "hospitality-tourism-hotel-management",
    icon: Hotel,
    name: "Hospitality, Tourism & Hotel Management",
    image: hospitality1,
    desc: "Gain skills in hotel operations, tourism management, and customer service.",
    careers: "Hotel Staff, Travel Consultant, Event Manager",
  },
  {
    slug: "beauty-wellness",
    icon: Sparkles,
    name: "Beauty & Wellness",
    image: beauty1,
    desc: "Learn professional beauty treatments, skincare, and wellness techniques.",
    careers: "Salon Professional, Beauty Consultant, Self Business",
  },
  {
    slug: "healthcare",
    icon: HeartPulse,
    name: "Healthcare",
    image: healthcare1,
    desc: "Learn basic healthcare assistance and patient care skills.",
    careers: "Hospital Assistant, Clinic Support Staff",
  },
];

export const courseDetails = [
  {
    slug: "natural-farming",
    name: "Natural Farming",
    image: naturalFarming1,
    gallery: [naturalFarming1, naturalFarming2, naturalFarming3],
    eligibility: "12th Pass (Any Stream) / B.Com / BA / BCA",
    about: [
      "The Natural Farming course is designed to provide scientific and practical knowledge of sustainable agriculture without harmful chemicals. Students learn organic farming techniques, soil management, crop production, compost preparation, irrigation systems, and farm entrepreneurship. This course promotes eco-friendly agriculture and self-employment opportunities in rural and urban areas.",
      "કુદરતી ખેતીનો અભ્યાસક્રમ હાનિકારક રસાયણો વિના ટકાઉ ખેતીનું વૈજ્ઞાનિક અને વ્યવહારુ જ્ઞાન પ્રદાન કરવા માટે રચાયેલ છે. વિદ્યાર્થીઓ ઓર્ગેનિક ખેતી તકનીકો, માટી વ્યવસ્થાપન, પાક ઉત્પાદન, ખાતર તૈયારી, સિંચાઈ પ્રણાલીઓ અને કૃષિ ઉદ્યોગસાહસિકતા શીખે છે. આ અભ્યાસક્રમ ગ્રામીણ અને શહેરી વિસ્તારોમાં પર્યાવરણને અનુકૂળ કૃષિ અને સ્વરોજગારીની તકોને પ્રોત્સાહન આપે છે.",
    ],
    practical: [
      "Organic fertilizer preparation (જૈવિક ખાતરની તૈયારી)",
      "Vermicomposting (વર્મીકમ્પોસ્ટ)",
      "Seed treatment techniques (બીજ માવજત તકનીકો)",
      "Crop planning & rotation (પાક આયોજન અને પરિભ્રમણ)",
      "Pest control using natural methods (કુદરતી પદ્ધતિઓનો ઉપયોગ કરીને જીવાત નિયંત્રણ)",
      "Farm visit & field training (ખેતરની મુલાકાત અને તાલીમ)",
    ],
    skills: [
      "Sustainable farming management (ટકાઉ ખેતી વ્યવસ્થાપન)",
      "Crop production planning (પાક ઉત્પાદન આયોજન)",
      "Agri-business skills (કૃષિ-વ્યવસાય કૌશલ્ય)",
      "Soil health analysis (માટી આરોગ્ય વિશ્લેષણ)",
      "Farm budgeting (ખેતી બજેટ)",
    ],
    careers: [
      "Organic Farmer (ઓર્ગેનિક ખેડૂત)",
      "Farm Supervisor (ફાર્મ સુપરવાઇઝર)",
      "Agricultural Consultant (કૃષિ સલાહકાર)",
      "Nursery Manager (નર્સરી મેનેજર)",
      "Agri-Entrepreneur (કૃષિ-ઉદ્યોગસાહસિક)",
      "Organic Product Supplier (ઓર્ગેનિક ઉત્પાદન સપ્લાયર)",
      "Government Agriculture Scheme Assistant (સરકારી કૃષિ યોજના સહાયક)",
      "NGO Agriculture Field Worker (એનજીઓ કૃષિ ક્ષેત્ર કાર્યકર)",
      "Self-Owned Farming Business (સ્વ-માલિકીનો ખેતી વ્યવસાય)",
    ],
  },
  {
    slug: "agro-processing",
    name: "Agro Processing",
    image: agroProcessing1,
    gallery: [agroProcessing1, agroProcessing2],
    eligibility: "12th Pass (Any Stream) / B.Com / BA / BCA",
    about: [
      "This course focuses on food processing, preservation, packaging, and quality control of agricultural products. Students learn value addition techniques that increase farmers’ income and promote agro-industries.",
      "આ કોર્ષ ફૂડ પ્રોસેસિંગ, જાળવણી, પેકેજિંગ અને કૃષિ ઉત્પાદનોના ગુણવત્તા નિયંત્રણ પર ધ્યાન કેન્દ્રિત કરે છે. વિદ્યાર્થીઓ મૂલ્યવર્ધન તકનીકો શીખે છે જે ખેડૂતોની આવકમાં વધારો કરે છે અને કૃષિ-ઉદ્યોગોને પ્રોત્સાહન આપે છે.",
    ],
    practical: [
      "Food preservation techniques (ખાદ્ય સંરક્ષણ તકનીકો)",
      "Packaging & labeling (પેકેજિંગ અને લેબલિંગ)",
      "Quality testing basics (ગુણવત્તા પરીક્ષણની મૂળભૂત બાબતો)",
      "Small-scale food production (નાના પાયાનું ખાદ્ય ઉત્પાદન)",
      "Storage management (સંગ્રહ વ્યવસ્થાપન)",
    ],
    skills: [
      "Food safety awareness (ખાદ્ય સુરક્ષા જાગૃતિ)",
      "Processing technology knowledge (પ્રોસેસીંગ ટેકનોલોજી જ્ઞાન)",
      "Production management (ઉત્પાદન વ્યવસ્થાપન)",
      "Small-scale manufacturing setup (નાના પાયે ઉત્પાદન સેટઅપ)",
    ],
    careers: [
      "Food Processing Unit Staff (ફૂડ પ્રોસેસિંગ યુનિટ સ્ટાફ)",
      "Production Supervisor (ઉત્પાદન સુપરવાઇઝર)",
      "Packaging Manager (પેકેજિંગ મેનેજર)",
      "Quality Control Assistant (ગુણવત્તા નિયંત્રણ સહાયક)",
      "Cold Storage Manager (કોલ્ડ સ્ટોરેજ મેનેજર)",
      "Dairy Processing Assistant (ડેરી પ્રોસેસિંગ સહાયક)",
      "Bakery & Food Unit Operator (બેકરી અને ફૂડ યુનિટ ઓપરેટર)",
      "Self-Owned Food Business (Pickles, Papad, Snacks, etc.) (સ્વ-માલિકીનો ખાદ્ય વ્યવસાય) (અથાણા, પાપડ, નાસ્તો, વગેરે)",
      "Agro-Industry Entrepreneur (કૃષિ-ઉદ્યોગ ઉદ્યોગસાહસિક)",
    ],
  },
  {
    slug: "home-science",
    name: "Home Science",
    image: homeScience1,
    gallery: [homeScience1, homeScience2, homeScience3],
    eligibility: "12th Pass (Any Stream) / B.Com / BA / BCA",
    about: [
      "Home Science focuses on nutrition, family resource management, community development, child care, and home-based entrepreneurship. It prepares students for both professional careers and self-employment.",
      "ગૃહ વિજ્ઞાન પોષણ, કૌટુંબિક સંસાધન વ્યવસ્થાપન, સમુદાય વિકાસ, બાળ સંભાળ અને ઘર-આધારિત ઉદ્યોગસાહસિકતા પર ધ્યાન કેન્દ્રિત કરે છે. તે વિદ્યાર્થીઓને વ્યાવસાયિક કારકિર્દી અને સ્વ-રોજગાર બંને માટે તૈયાર કરે છે.",
    ],
    practical: [
      "Nutrition planning (પોષણ આયોજન)",
      "Meal preparation & diet planning (ભોજનની તૈયારી અને આહાર આયોજન)",
      "Child development observation (બાળ વિકાસ અવલોકન)",
      "Textile & household management (કાપડ અને ઘરગથ્થુ વ્યવસ્થાપન)",
      "Community project work (સમુદાય પ્રોજેક્ટ કાર્ય)",
    ],
    skills: [
      "Nutrition counseling (પોષણ પરામર્શ)",
      "Family management (કુટુંબ વ્યવસ્થાપન)",
      "Event planning (ઈવેન્ટ આયોજન)",
      "Communication skills (કોમ્યુનિકેશન કૌશલ્ય)",
      "Small business skills (નાના વ્યવસાય કૌશલ્ય)",
    ],
    careers: [
      "Nutrition Assistant (પોષણ સહાયક)",
      "Anganwadi Supervisor (આંગણવાડી સુપરવાઇઝર)",
      "Community Health Worker (સામુદાયિક આરોગ્ય કાર્યકર)",
      "Diet Assistant (આહાર સહાયક)",
      "Preschool Assistant (પ્રિસ્કૂલ સહાયક)",
      "NGO Worker (એનજીઓ કાર્યકર)",
      "Catering Business (કેટરિંગ વ્યવસાય)",
      "Boutique Owner (બુટિક માલિક)",
      "Self-Employment in Home-Based Industry (ઘર-આધારિત ઉદ્યોગમાં સ્વ-રોજગાર)",
    ],
  },
  {
    slug: "management-entrepreneurship",
    name: "Management & Entrepreneurship",
    image: management1,
    gallery: [management1, management2, management3],
    eligibility: "12th Pass (Any Stream) / B.Com / BA / BCA",
    about: [
      "This course develops leadership, business management, marketing, finance, and entrepreneurial skills. It is ideal for students who want to start their own business or work in corporate sectors.",
      "આ કોર્ષ નેતૃત્વ, વ્યવસાય વ્યવસ્થાપન, માર્કેટિંગ, નાણાકીય અને ઉદ્યોગસાહસિક કૌશલ્યો વિકસાવે છે. તે એવા વિદ્યાર્થીઓ માટે આદર્શ છે જેઓ પોતાનો વ્યવસાય શરૂ કરવા અથવા કોર્પોરેટ ક્ષેત્રોમાં કામ કરવા માંગે છે.",
    ],
    practical: [
      "Business plan preparation (વ્યવસાય યોજનાની તૈયારી)",
      "Marketing strategy development (માર્કેટિંગ વ્યૂહરચના વિકાસ)",
      "Financial record maintenance (નાણાકીય રેકોર્ડ જાળવણી)",
      "Communication & leadership training (સંચાર અને નેતૃત્વ તાલીમ)",
      "Case study analysis (કેસ સ્ટડી વિશ્લેષણ)",
    ],
    skills: [
      "Business management (બિઝનેસ મેનેજમેન્ટ)",
      "Team leadership (ટીમ લીડરશીપ)",
      "Marketing skills (માર્કેટિંગ કૌશલ્ય)",
      "Financial planning (નાણાકીય આયોજન)",
      "Startup planning (સ્ટાર્ટઅપ આયોજન)",
    ],
    careers: [
      "Business Executive (બિઝનેસ એક્ઝિક્યુટિવ)",
      "Office Manager (ઓફિસ મેનેજર)",
      "Sales Manager (સેલ્સ મેનેજર)",
      "Marketing Executive (માર્કેટિંગ એક્ઝિક્યુટિવ)",
      "Startup Founder (સ્ટાર્ટઅપ સ્થાપક)",
      "Business Consultant (બિઝનેસ કન્સલ્ટન્ટ)",
      "Retail Manager (રિટેલ મેનેજર)",
      "HR Assistant (HR આસિસ્ટન્ટ)",
      "Self-Employed Entrepreneur (સ્વ-રોજગાર ઉદ્યોગસાહસિક)",
    ],
  },
  {
    slug: "hospitality-tourism-hotel-management",
    name: "Hospitality, Tourism & Hotel Management",
    image: hospitality1,
    gallery: [hospitality1, hospitality2, hospitality3],
    eligibility: "12th Pass (Any Stream) / B.Com / BA / BCA",
    about: [
      "This course provides practical training in hotel operations, tourism services, customer handling, housekeeping, and event management.",
      "આ કોર્સ હોટેલ કામગીરી, પર્યટન સેવા, ગ્રાહક સંભાળ, હાઉસકીપિંગ અને ઇવેન્ટ મેનેજમેન્ટમાં પ્રાયોગિક તાલીમ આપે છે.",
    ],
    practical: [
      "Front office management (ફ્રન્ટ ઓફિસ મેનેજમેન્ટ)",
      "Housekeeping training (હાઉસકીપિંગ તાલીમ)",
      "Food & beverage service (ફૂડ અને બેવરેજ સર્વિસ)",
      "Event coordination (ઇવેન્ટ સંકલન)",
      "Customer service skills (ગ્રાહક સેવા કુશળતા)",
    ],
    skills: [
      "Communication skills (સંચાર કુશળતા)",
      "Grooming & personality development (ગ્રુમિંગ અને વ્યક્તિત્વ વિકાસ)",
      "Hotel management basics (હોટેલ મેનેજમેન્ટની મૂળભૂત જાણકારી)",
      "Customer relationship management (ગ્રાહક સંબંધ વ્યવસ્થાપન)",
    ],
    careers: [
      "Hotel Receptionist (હોટેલ રિસેપ્શનિસ્ટ)",
      "Front Office Executive (ફ્રન્ટ ઓફિસ એક્ઝિક્યુટિવ)",
      "Housekeeping Supervisor (હાઉસકીપિંગ સુપરવાઇઝર)",
      "Tour Guide (ટૂર ગાઈડ)",
      "Travel Agency Staff (ટ્રાવેલ એજન્સી સ્ટાફ)",
      "Event Manager (ઇવેન્ટ મેનેજર)",
      "Resort Staff (રિસોર્ટ સ્ટાફ)",
      "Cruise Line Assistant (ક્રૂઝ લાઇન સહાયક)",
      "Airline Ground Staff (with additional training) (એરલાઈન ગ્રાઉન્ડ સ્ટાફ (વધારાની તાલીમ સાથે))",
    ],
  },
  {
    slug: "beauty-wellness",
    name: "Beauty & Wellness",
    image: beauty1,
    gallery: [beauty1, beauty2, beauty3],
    eligibility: "12th Pass (Any Stream) / B.Com / BA / BCA",
    about: [
      "This course provides professional training in beauty therapy, skincare, hair care, and wellness treatments.",
      "આ કોર્ષ બ્યુટી થેરાપી, સ્કિનકેર, હેર કેર અને વેલનેસ ટ્રીટમેન્ટમાં વ્યાવસાયિક તાલીમ પૂરી પાડે છે.",
    ],
    practical: [
      "Facial treatments (ચહેરાની સારવાર)",
      "Hair styling & care (વાળ સ્ટાઇલ અને સંભાળ)",
      "Makeup techniques (મેકઅપ તકનીકો)",
      "Skin analysis (ત્વચા વિશ્લેષણ)",
      "Salon management basics (સલૂન મેનેજમેન્ટ બેઝિક્સ)",
    ],
    skills: [
      "Professional grooming (પ્રોફેશનલ ગ્રુમિંગ)",
      "Client handling (ક્લાયન્ટ હેન્ડલિંગ)",
      "Beauty treatment skills (બ્યુટી ટ્રીટમેન્ટ કૌશલ્ય)",
      "Small business setup (નાના વ્યવસાય સેટઅપ)",
    ],
    careers: [
      "Salon Professional (સલૂન પ્રોફેશનલ)",
      "Makeup Artist (મેકઅપ આર્ટિસ્ટ)",
      "Beauty Consultant (બ્યુટી કન્સલ્ટન્ટ)",
      "Spa Assistant (સ્પા આસિસ્ટન્ટ)",
      "Bridal Makeup Specialist (બ્રાઇડલ મેકઅપ સ્પેશિયાલિસ્ટ)",
      "Wellness Center Staff (વેલનેસ સેન્ટર સ્ટાફ)",
      "Own Beauty Parlour Business (પોતાનો બ્યુટી પાર્લર વ્યવસાય)",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    image: healthcare1,
    gallery: [healthcare1, healthcare2, healthcare3],
    eligibility: "12th Pass (Any Stream) / B.Com / BA / BCA",
    about: [
      "Healthcare course prepares students to assist in hospitals, clinics, and healthcare centers.",
      "હેલ્થકેર કોર્સ વિદ્યાર્થીઓને હોસ્પિટલો, ક્લિનિક્સ અને હેલ્થકેર કેન્દ્રોમાં મદદ કરવા માટે તૈયાર કરે છે.",
    ],
    practical: [
      "Basic patient care (દર્દીની મૂળભૂત સંભાળ)",
      "First aid training (પ્રાથમિક સારવાર તાલીમ)",
      "Hospital administration basics (હોસ્પિટલ વહીવટની મૂળભૂત બાબતો)",
      "Record maintenance (રેકોર્ડ જાળવણી)",
    ],
    skills: [
      "Patient support skills (દર્દી સહાય કૌશલ્ય)",
      "Basic medical assistance (મૂળભૂત તબીબી સહાય)",
      "Hospital coordination (હોસ્પિટલ સંકલન)",
    ],
    careers: [
      "Hospital Assistant (હોસ્પિટલ સહાયક)",
      "Clinic Assistant (ક્લિનિક સહાયક)",
      "Nursing Assistant (with further training) (નર્સિંગ સહાયક) (વધુ તાલીમ સાથે)",
      "Medical Record Assistant (મેડિકલ રેકોર્ડ સહાયક)",
      "Health Worker (આરોગ્ય કાર્યકર)",
      "Laboratory Assistant (with additional certification) (લેબોરેટરી સહાયક) (વધારાના પ્રમાણપત્ર સાથે)",
    ],
  },
  {
    slug: "banking-finance",
    name: "Banking & Finance",
    image: banking1,
    gallery: [banking1, banking2, banking3],
    eligibility: "12th Pass (Any Stream) / B.Com / BA / BCA",
    about: [
      "This course provides knowledge of banking operations, financial services, insurance, and financial management.",
      "આ કોર્ષ બેંકિંગ કામગીરી, નાણાકીય સેવાઓ, વીમા અને નાણાકીય વ્યવસ્થાપનનું જ્ઞાન પૂરું પાડે છે.",
    ],
    practical: [
      "Bank procedures (બેંક પ્રક્રિયાઓ)",
      "Loan documentation (લોન દસ્તાવેજીકરણ)",
      "Insurance basics (વીમા મૂળભૂત બાબતો)",
      "Digital banking (ડિજિટલ બેંકિંગ)",
    ],
    skills: [
      "Financial literacy (નાણાકીય સાક્ષરતા)",
      "Banking operations (બેંકિંગ કામગીરી)",
      "Record keeping (રેકોર્ડ રાખવા)",
      "Customer service (ગ્રાહક સેવા)",
    ],
    careers: [
      "Banking Assistant (બેંકિંગ આસિસ્ટન્ટ)",
      "Loan Processing Executive (લોન પ્રોસેસિંગ એક્ઝિક્યુટિવ)",
      "Insurance Advisor (વીમા સલાહકાર)",
      "Microfinance Executive (માઇક્રોફાઇનાન્સ એક્ઝિક્યુટિવ)",
      "Financial Service Agent (ફાઇનાન્સિયલ સર્વિસ એજન્ટ)",
      "Office Accountant (ઓફિસ એકાઉન્ટન્ટ)",
      "Government Scheme Assistant (સરકારી યોજના આસિસ્ટન્ટ)",
      "Private Bank Staff (ખાનગી બેંક સ્ટાફ)",
    ],
  },
  {
    slug: "accounting-taxation",
    name: "Accounting & Taxation",
    image: accounting1,
    gallery: [accounting1, accounting2, accounting3],
    eligibility: "12th Pass (Any Stream) / B.Com / BA / BCA",
    about: [
      "This course focuses on accounting principles, GST, income tax basics, and accounting software training.",
      "આ કોર્સ એકાઉન્ટિંગના સિદ્ધાંતો, GST, ઇન્કમ ટેક્સની મૂળભૂત જાણકારી અને એકાઉન્ટિંગ સોફ્ટવેર તાલીમ પર આધારિત છે.",
    ],
    practical: [
      "GST return filing basics (GST રિટર્ન ફાઈલ કરવાની મૂળભૂત રીત)",
      "Tally software training (ટેલી સોફ્ટવેર તાલીમ)",
      "Income tax fundamentals (ઇન્કમ ટેક્સની મૂળભૂત જાણકારી)",
      "Financial statement preparation (નાણાકીય સ્ટેટમેન્ટ તૈયાર કરવી)",
    ],
    skills: [
      "Bookkeeping (બુકકીપિંગ)",
      "Tax calculation (ટેક્સ ગણતરી)",
      "Software handling (સોફ્ટવેર સંચાલન)",
      "Business accounting (વ્યવસાયિક હિસાબી કાર્ય)",
    ],
    careers: [
      "Accountant (એકાઉન્ટન્ટ)",
      "GST Executive (GST એક્ઝિક્યુટિવ)",
      "Tax Consultant Assistant (ટેક્સ કન્સલ્ટન્ટ સહાયક)",
      "Accounts Clerk (એકાઉન્ટ્સ ક્લાર્ક)",
      "Audit Assistant (ઓડિટ સહાયક)",
      "Billing Executive (બિલિંગ એક્ઝિક્યુટિવ)",
      "Data Entry Operator (ડેટા એન્ટ્રી ઓપરેટર)",
      "Self-Employed Tax Practitioner (સ્વરોજગાર ટેક્સ પ્રેક્ટિશનર)",
    ],
  },
];
