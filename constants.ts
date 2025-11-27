
import { Question, Topic, TopicInfo } from './types';
import { Globe, BookOpen, Palette, Moon, Rocket, Clapperboard } from 'lucide-react';

// Adjusted to 10 Levels as originally requested to conserve question pool
export const PRIZE_LADDER = [
  "100 ₼", "200 ₼", "300 ₼", "500 ₼",            // 1-4 (Easy)
  "1,000 ₼", "2,000 ₼", "4,000 ₼",               // 5-7 (Medium)
  "8,000 ₼", "16,000 ₼", "1,000,000 ₼"           // 8-10 (Hard)
];

export const TOPICS: TopicInfo[] = [
  { id: 'COGRAFIYA', label: 'Coğrafiya', icon: 'Globe', description: 'Dünya ölkələri, paytaxtlar və təbiət', color: 'cyan' },
  { id: 'TARIX', label: 'Tarix', icon: 'BookOpen', description: 'Azərbaycan və Dünya tarixi, hadisələr', color: 'amber' },
  { id: 'INCESENET', label: 'İncəsənət', icon: 'Palette', description: 'Rəsm, Musiqi, Ədəbiyyat və Memarlıq', color: 'fuchsia' },
  { id: 'DIN', label: 'Din', icon: 'Moon', description: 'İslam tarixi, Peyğəmbərlər və inanclar', color: 'emerald' },
  { id: 'FANTASTIK', label: 'Fantastik', icon: 'Rocket', description: 'Elmi-fantastika, kosmos və gələcək', color: 'violet' },
  { id: 'FILM', label: 'Film', icon: 'Clapperboard', description: 'Kino, aktyorlar və məşhur sitatlar', color: 'rose' },
];

// Helper to create questions
const createQ = (text: string, options: string[], correct: number): Omit<Question, 'id' | 'prize'> => ({
  text,
  options,
  correctAnswerIndex: correct,
});

// --- QUESTION DATABASE BY TOPIC ---
// Expanded to ensure enough questions for unique gameplay
const DB: Record<Topic, { easy: any[], medium: any[], hard: any[] }> = {
  COGRAFIYA: {
    easy: [
      createQ("Azərbaycanın paytaxtı haradır?", ["Gəncə", "Bakı", "Sumqayıt", "Lənkəran"], 1),
      createQ("Dünyanın ən böyük okeanı hansıdır?", ["Sakit", "Atlantik", "Hind", "Şimal Buzlu"], 0),
      createQ("Türkiyənin paytaxtı hansı şəhərdir?", ["İstanbul", "İzmir", "Ankara", "Antalya"], 2),
      createQ("Günəş sisteminin ən böyük planeti hansıdır?", ["Mars", "Yer", "Yupiter", "Saturn"], 2),
      createQ("Afrika bir ___dir.", ["Ölkə", "Qitə", "Şəhər", "Ada"], 1),
      createQ("Eyfel qülləsi harada yerləşir?", ["London", "Berlin", "Paris", "Roma"], 2),
      createQ("Nil çayı hansı qitədə axır?", ["Asiya", "Afrika", "Amerika", "Avropa"], 1),
      createQ("Bakı hansı dənizin sahilində yerləşir?", ["Qara dəniz", "Xəzər dənizi", "Aral dənizi", "Azov dənizi"], 1),
      createQ("Şimal qütbündə hansı heyvan yaşayır?", ["Pinqvin", "Qütb Ayısı", "Şir", "Kenquru"], 1),
      createQ("İtaliyanın paytaxtı haradır?", ["Roma", "Milan", "Neapol", "Venesiya"], 0),
      createQ("Yer kürəsi Günəş ətrafında neçə günə fırlanır?", ["30", "180", "365", "1"], 2),
    ],
    medium: [
      createQ("Azərbaycanın ən hündür zirvəsi hansıdır?", ["Bazardüzü", "Şahdağ", "Tufandağ", "Babadağ"], 0),
      createQ("Vatikan hansı şəhərin daxilində yerləşir?", ["Venesiya", "Milan", "Roma", "Florensiya"], 2),
      createQ("Braziliyanın rəsmi dili hansıdır?", ["İspan", "Portuqal", "İngilis", "Fransız"], 1),
      createQ("Araz çayı hansı çaya tökülür?", ["Kür", "Volqa", "Samur", "Tərtər"], 0),
      createQ("Dünyanın ən dərin gölü hansıdır?", ["Xəzər", "Baykal", "Viktoriya", "Mişiqan"], 1),
      createQ("Hansı ölkə 'Gündoğar ölkə' adlanır?", ["Çin", "Koreya", "Yaponiya", "Vyetnam"], 2),
      createQ("Panama kanalı hansı iki okeanı birləşdirir?", ["Sakit və Hind", "Atlantik və Sakit", "Hind və Atlantik", "Şimal və Baltik"], 1),
      createQ("Avstraliyanın paytaxtı haradır?", ["Sidney", "Melburn", "Kanberra", "Brisben"], 2),
      createQ("Dünyanın ən böyük adası hansıdır?", ["Qrenlandiya", "Madaqaskar", "Böyük Britaniya", "Yaponiya"], 0),
      createQ("Hansı ölkə həm Asiyada, həm Avropada yerləşir?", ["Misir", "Rusiya", "İran", "Çin"], 1),
    ],
    hard: [
      createQ("Everest zirvəsinin hündürlüyü nə qədərdir (təxminən)?", ["8848 m", "8611 m", "8586 m", "8400 m"], 0),
      createQ("Hansı ölkənin bayrağı kvadrat formasındadır?", ["Nepal", "İsveçrə", "Vatikan", "B və C"], 3),
      createQ("Afrikanın ən böyük gölü hansıdır?", ["Tanqanika", "Viktoriya", "Nyasa", "Çad"], 1),
      createQ("Antarktidadan başqa bütün qitələrdə mövcud olan səhra hansıdır?", ["Qobi", "Saxara", "Atakama", "Yoxdur"], 3),
      createQ("Dünyanın ən uzun quru sərhədi hansı iki ölkə arasındadır?", ["Rusiya-Qazaxıstan", "ABŞ-Kanada", "Argentina-Çili", "Çin-Monqolustan"], 1),
      createQ("Bakı hansı paralel üzərində yerləşir?", ["40-cı", "38-ci", "42-ci", "45-ci"], 0),
      createQ("Hansı Cənubi Amerika ölkəsinin dənizə çıxışı yoxdur?", ["Peru", "Boliviya", "Çili", "Uruqvay"], 1),
      createQ("Yer kürəsinin ən quraq yeri haradır?", ["Saxara səhrası", "Atakama səhrası", "Qobi səhrası", "Kalahari"], 1),
      createQ("Himalay dağlarının mənası nədir?", ["Qar evi", "Allahlar dağı", "Uca zirvə", "Ağ daş"], 0),
    ]
  },
  TARIX: {
    easy: [
      createQ("Azərbaycan Xalq Cümhuriyyəti neçənci ildə yaranıb?", ["1918", "1920", "1991", "1905"], 0),
      createQ("II Dünya müharibəsi nə vaxt başlayıb?", ["1941", "1939", "1945", "1914"], 1),
      createQ("Qarabağ xanlığının paytaxtı hansı şəhər olub?", ["Gəncə", "Şuşa", "Ağdam", "Bərdə"], 1),
      createQ("Xilaskarlıq missiyası ilə tanınan milli lider kimdir?", ["Heydər Əliyev", "Məmməd Əmin Rəsulzadə", "Əbülfəz Elçibəy", "Nəriman Nərimanov"], 0),
      createQ("Çanaqqala döyüşü hansı ildə baş verib?", ["1915", "1918", "1923", "1914"], 0),
      createQ("Şah İsmayıl Xətai hansı dövlətin banisidir?", ["Eldənizlər", "Səfəvilər", "Qaraqoyunlu", "Şirvanşahlar"], 1),
      createQ("Misir ehramları kimlər üçün tikilirdi?", ["Fironlar", "Kahinlər", "Əsgərlər", "Xalq"], 0),
      createQ("SSRİ neçənci ildə dağıldı?", ["1989", "1990", "1991", "1993"], 2),
      createQ("Atropatena dövləti harada yerləşirdi?", ["Cənubi Azərbaycan", "Şimali Azərbaycan", "Gürcüstan", "Türkiyə"], 0),
      createQ("Çingiz xan hansı imperiyanın qurucusudur?", ["Osmanlı", "Monqol", "Hun", "Səlcuqlu"], 1),
    ],
    medium: [
      createQ("Gülüstan müqaviləsi neçənci ildə imzalanıb?", ["1813", "1828", "1801", "1804"], 0),
      createQ("Napoleon Bonapart əslən hansı millətdəndir?", ["Fransız", "Korsikalı", "İtalyan", "İspan"], 1),
      createQ("Böyük İpək Yolu haradan başlayırdı?", ["Hindistan", "Çin", "Bizans", "Misir"], 1),
      createQ("Azərbaycanın BMT-yə qəbul olunduğu tarix?", ["1991", "1992", "1993", "1995"], 1),
      createQ("Tomris xatun kimin başını kəsdirmişdi?", ["Makedoniyalı İsgəndər", "II Kir", "Dari", "Kserks"], 1),
      createQ("Osmanlı imperiyasının ən uzun ömürlü sultanı kimdir?", ["Süleyman Qanuni", "Fateh Sultan Mehmet", "Yavuz Sultan Səlim", "II Əbdülhəmid"], 0),
      createQ("Türkmançay müqaviləsi kimlər arasında imzalanıb?", ["Rusiya-İran", "Rusiya-Türkiyə", "İran-Türkiyə", "İngiltərə-İran"], 0),
      createQ("Babək hansı hərəkata rəhbərlik edib?", ["Hürrəmilər", "Məzdəkilər", "Cəlalilər", "Səfəvilər"], 0),
      createQ("Qarabağ xanlığının əsasını kim qoyub?", ["Pənahəli xan", "İbrahimxəlil xan", "Nadir şah", "Kərim xan"], 0),
    ],
    hard: [
      createQ("Albaniya hökmdarı Cavanşir hansı sülalədən idi?", ["Arşakilər", "Mihranilər", "Sasanilər", "Ruriklər"], 1),
      createQ("100 illik müharibə hansı ölkələr arasında olub?", ["İngiltərə-Fransa", "Almaniya-Fransa", "İspaniya-İngiltərə", "Rusiya-Osmanlı"], 0),
      createQ("'Dəmir Ledi' ləqəbli siyasətçi kimdir?", ["İndira Qandi", "Marqaret Tetçer", "Angela Merkel", "Benazir Bhutto"], 1),
      createQ("Azərbaycan Səfəvilər dövlətində paytaxt olmamış şəhər?", ["Təbriz", "Qəzvin", "İsfahan", "Ərdəbil"], 3),
      createQ("ABŞ-ın ilk prezidenti kim olub?", ["Linkoln", "Vaşinqton", "Cefferson", "Adams"], 1),
      createQ("Nadir şah Əfşar neçənci ildə tacqoyma mərasimi keçirdi?", ["1736", "1747", "1722", "1730"], 0),
      createQ("Şirvanşahlar dövləti neçənci ildə süqut etdi?", ["1501", "1538", "1192", "1258"], 1),
      createQ("Roma imperiyası neçənci ildə iki hissəyə parçalandı?", ["395", "476", "330", "1453"], 0),
      createQ("Azıx mağarasını kim kəşf edib?", ["Məmmədəli Hüseynov", "İshaq Cəfərzadə", "Vəli Əliyev", "Qüdrət İsmayılov"], 0),
    ]
  },
  INCESENET: {
    easy: [
      createQ("Mona Liza əsərinin müəllifi kimdir?", ["Pikasso", "Da Vinçi", "Van Qoq", "Mikelancelo"], 1),
      createQ("Azərbaycanın milli musiqi aləti hansıdır?", ["Gitara", "Tar", "Skripka", "Piano"], 1),
      createQ("'Yeddi Gözəl' baletinin müəllifi kimdir?", ["Qara Qarayev", "Üzeyir Hacıbəyli", "Fikrət Əmirov", "Niyazi"], 0),
      createQ("Romeo və Cülyetta əsərini kim yazıb?", ["Şekspir", "Dante", "Hüqo", "Tolstoy"], 0),
      createQ("Kamança neçə simdən ibarətdir?", ["3", "4", "5", "6"], 1),
      createQ("Kim rəssam deyil?", ["Pikasso", "Motsart", "Dali", "Rembrandt"], 1),
      createQ("'Koroğlu' operasını kim bəstələyib?", ["Üzeyir Hacıbəyli", "Müslüm Maqomayev", "Qara Qarayev", "Fikrət Əmirov"], 0),
      createQ("Heykəltəraşlıq hansı sənət növüdür?", ["Təsviri", "Musiqi", "Ədəbiyyat", "Kino"], 0),
    ],
    medium: [
      createQ("'O olmasın, bu olsun' operettasının digər adı nədir?", ["Arşın mal alan", "Məşədi İbad", "Qaynana", "Dərviş Parisi partladır"], 1),
      createQ("Van Qoq qulağını kəsdikdən sonra çəkdiyi rəsm?", ["Ulduzlu Gecə", "Günəbaxanlar", "Avtoportret", "Kafe Terrası"], 2),
      createQ("Muğam üçlüyünə daxil olmayan alət?", ["Tar", "Kamança", "Qaval", "Balaban"], 3),
      createQ("Nizami Gəncəvinin ilk poeması hansıdır?", ["Sirlər Xəzinəsi", "Xosrov və Şirin", "Leyli və Məcnun", "İsgəndərnamə"], 0),
      createQ("Sürrealizm cərəyanının ən məşhur nümayəndəsi?", ["Dali", "Mone", "Rembrandt", "Warhol"], 0),
      createQ("Azərbaycan himninin musiqisini kim bəstələyib?", ["Üzeyir Hacıbəyli", "Müslüm Maqomayev", "Səid Rüstəmov", "Hacı Xanməmmədov"], 0),
      createQ("'Xəmsə' neçə poemadan ibarətdir?", ["3", "5", "7", "9"], 1),
    ],
    hard: [
      createQ("Azərbaycanın ilk professional qadın rəssamı kimdir?", ["Maral Rəhmanzadə", "Vəcihə Səmədova", "Qeysər Kaşıyeva", "Elmira Şahtaxtinskaya"], 2),
      createQ("Bethovenin kar olduğu halda bəstələdiyi simfoniya?", ["3-cü", "5-ci", "9-cu", "7-ci"], 2),
      createQ("'Qızıl Alma' mükafatı hansı sahədə verilir?", ["Musiqi", "Kino", "Memarlıq", "Turizm jurnalistikası"], 3),
      createQ("Qobustan qayaüstü rəsmlərini ilk dəfə kim aşkar edib?", ["İshaq Cəfərzadə", "Əliövsət Quliyev", "Məşədi Əzizbəyov", "Həsən Əliyev"], 0),
      createQ("Venera Milos heykəli hansı muzeydədir?", ["Luvr", "Ermitaj", "Vatikan", "Britaniya Muzeyi"], 0),
      createQ("Üzeyir Hacıbəyli 'Koroğlu' operasını neçənci ildə tamamlayıb?", ["1937", "1913", "1908", "1945"], 0),
      createQ("Salvador Dalinin məşhur 'Əriyən Saatlar' əsərinin əsl adı nədir?", ["Yaddaşın əzmi", "Zamanın axışı", "Yuxu", "Sürreal saatlar"], 0),
    ]
  },
  DIN: {
    easy: [
      createQ("İslam dininin müqəddəs kitabı hansıdır?", ["Tövrat", "Zəbur", "İncil", "Quran"], 3),
      createQ("Müsəlmanların gündə neçə dəfə namaz qılması vacibdir?", ["3", "4", "5", "7"], 2),
      createQ("Həzrəti Məhəmməd (s.ə.s) hansı şəhərdə doğulub?", ["Mədinə", "Məkkə", "Qüds", "Bağdad"], 1),
      createQ("Oruc hansı ayda tutulur?", ["Məhərrəm", "Ramazan", "Şəvval", "Rəcəb"], 1),
      createQ("İsa peyğəmbərin anasının adı nədir?", ["Xədicə", "Aişə", "Məryəm", "Fatimə"], 2),
      createQ("İlk insan və ilk peyğəmbər kimdir?", ["Adəm", "İbrahim", "Nuh", "Musa"], 0),
      createQ("Nuh peyğəmbər nə ilə tanınır?", ["Gəmi düzəltməsi", "Odda yanmaması", "Dənizi yarması", "Balığın qarnında yaşaması"], 0),
    ],
    medium: [
      createQ("Qurani-Kərim neçə surədən ibarətdir?", ["110", "114", "124", "99"], 1),
      createQ("Kəbə evini ilk dəfə kim inşa edib?", ["Hz. İbrahim", "Hz. Adəm", "Hz. Məhəmməd", "Hz. Musa"], 1),
      createQ("Zəmzəm suyu harada yerləşir?", ["Qüds", "Mədinə", "Məkkə", "Kərbəla"], 2),
      createQ("İncil hansı peyğəmbərə nazil olub?", ["İsa", "Musa", "Davud", "İbrahim"], 0),
      createQ("Hicri təqvimi hansı hadisədən başlayır?", ["Peyğəmbərin doğumu", "Vəhy gəlməsi", "Məkkədən Mədinəyə köç", "Məkkənin fəthi"], 2),
      createQ("Hz. Əlinin qılıncının adı nədir?", ["Zülfüqar", "Zülqərneyn", "Bədr", "Ühüd"], 0),
      createQ("Qurani-Kərimdə adı keçən yeganə qadın kimdir?", ["Həvva", "Asiya", "Məryəm", "Sara"], 2),
    ],
    hard: [
      createQ("Əshabi-Kəhf (Mağara adamları) hadisəsi harada baş verib (rəvayətə görə)?", ["Misir", "İordaniya/Türkiyə/Naxçıvan", "Səudiyyə Ərəbistanı", "İraq"], 1),
      createQ("Hz. Yusif hansı peyğəmbərin oğlu idi?", ["İshaq", "İsmayıl", "Yaqub", "Yunus"], 2),
      createQ("Quranın 'Qəlbi' adlanan surə hansıdır?", ["Fatihə", "Yasin", "Bəqərə", "Rəhman"], 1),
      createQ("Tövratın digər adı nədir?", ["Əhdi-Cədid", "Əhdi-Ətiq", "Səhifələr", "Furqan"], 1),
      createQ("Xəndək döyüşü neçənci ildə baş verib?", ["624", "625", "627", "630"], 2),
      createQ("Peyğəmbərimizin (s.ə.s) süd anası kim olub?", ["Əminə", "Həlimə", "Süveybə", "Barakə"], 1),
      createQ("Hansı surə 'Bismillah'sız başlayır?", ["Tövbə", "Yasin", "Mülk", "Kəhf"], 0),
    ]
  },
  FANTASTIK: {
    easy: [
      createQ("Supermenin zəif nöqtəsi nədir?", ["Gümüş", "Kriptonit", "Günəş işığı", "Su"], 1),
      createQ("Harri Potterin oxuduğu məktəb?", ["Hogvarts", "Oksford", "Kembric", "Azqaban"], 0),
      createQ("Spiderman-in əsl adı nədir?", ["Klark Kent", "Brus Ueyn", "Piter Parker", "Toni Stark"], 2),
      createQ("Üzüklərin Hökmdarı filmində üzüyü kim daşıyır?", ["Qandalf", "Araqorn", "Frodo", "Leqolas"], 2),
      createQ("Betmenin yaşadığı şəhər?", ["Metropolis", "Qotem", "Nyu York", "Çikaqo"], 1),
      createQ("Dəmir Adam kimdir?", ["Stiv Rocers", "Toni Stark", "Brus Banner", "Tor"], 1),
      createQ("Transformes filmindəki avtobotların lideri?", ["Meqatron", "Optimus Praym", "Bamblbi", "Star Skrim"], 1),
    ],
    medium: [
      createQ("'Dune' əsərindəki əsas planet hansıdır?", ["Tatuin", "Arrakis", "Mars", "Pandora"], 1),
      createQ("Frankenşteynin müəllifi kimdir?", ["Meri Şelli", "Brem Stoker", "H.Q. Uells", "Jül Vern"], 0),
      createQ("Marvel kainatında 'Qisasçılar'ın ilk düşməni kim olub?", ["Tanos", "Loki", "Ultron", "Qırmızı Kəllə"], 1),
      createQ("Ulduz Müharibələrində 'Güc'ün qaranlıq tərəfində kimdir?", ["Yoda", "Obi-Van", "Dart Veyder", "Luk Skayvolker"], 2),
      createQ("Matrix filmində Neonun seçdiyi həb hansı rəngdə idi?", ["Göy", "Yaşıl", "Qırmızı", "Sarı"], 2),
      createQ("Avatar filmindəki yerli xalq necə adlanır?", ["Na'vi", "Ewok", "Klinqon", "Vulkanlı"], 0),
      createQ("'Buz və Od Nəğməsi' (Taxtların Oyunu) müəllifi kimdir?", ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "Stephen King"], 1),
    ],
    hard: [
      createQ("Ayzek Asimovun 'Robototexnikanın Üç Qanunu'nda birinci qanun nədir?", ["Robot insanı öldürə bilməz", "Robot insan əmrinə tabe olmalıdır", "Robot özünü qorumalıdır", "Robot yalan danışmamalıdır"], 0),
      createQ("'1984' romanında hər şeyi görən şəxs kimdir?", ["Böyük Qardaş", "Goldstein", "O'Brien", "Uinston"], 0),
      createQ("X-Men komandasının qurucusu kimdir?", ["Maqneto", "Çarlz Xavier", "Vulverin", "Siklop"], 1),
      createQ("Torun çəkicinin adı nədir?", ["Mjolnir", "Qunqnir", "Stormbreaker", "Aeqis"], 0),
      createQ("H.Q. Uellsin 'Zaman Maşını' neçənci ildə yazılıb?", ["1895", "1905", "1880", "1920"], 0),
      createQ("Üzüklərin Hökmdarında 'Qondor'un simvolu nədir?", ["Ağ Ağac", "Qırmızı Əjdaha", "Qara Qartal", "Qızıl Şir"], 0),
      createQ("Yura Dövrü Parkının yaradıcısı (personaj) kimdir?", ["Con Hammond", "Alan Qrant", "Yan Malkolm", "Ellie Sattler"], 0),
    ]
  },
  FILM: {
    easy: [
      createQ("Titanik gəmisi nə ilə toqquşdu?", ["Qaya", "Aysberq", "Başqa gəmi", "Ada"], 1),
      createQ("Şrek cizgi filmindəki eşşəyin ən yaxın dostu kimdir?", ["Fiona", "Şrek", "Əjdaha", "Kral"], 1),
      createQ("'Evdə Tək' filminin qəhrəmanının adı?", ["Kevin", "Con", "Mayk", "Harri"], 0),
      createQ("Ceyms Bondun kod nömrəsi neçədir?", ["001", "005", "007", "777"], 2),
      createQ("Simba hansı cizgi filminin qəhrəmanıdır?", ["Mauqli", "Kral Şir", "Bambi", "Madaqaskar"], 1),
      createQ("Hansı filmdə dinozavrlar var?", ["Yura Dövrü Parkı", "Titanik", "Avatar", "Terminator"], 0),
      createQ("Harri Potter filmlərində baş qəhrəman kimdir?", ["Ron", "Hermiona", "Harri", "Dambldor"], 2),
    ],
    medium: [
      createQ("Oskar mükafatı hansı ölkədə verilir?", ["İngiltərə", "Fransa", "ABŞ", "İtaliya"], 2),
      createQ("'Xaç Atası' (Godfather) filmində Don Korleone rolunu kim oynayıb?", ["Al Paçino", "Robert De Niro", "Marlon Brando", "Joe Pesci"], 2),
      createQ("Azərbaycan kinosunda 'Qayınana' filmində Cənnət xalanı kim oynayıb?", ["Nəsibə Zeynalova", "Hökümə Qurbanova", "Leyla Bədirbəyli", "Barat Şəkinskaya"], 0),
      createQ("Tarantinonun məşhur filmi: 'Pulp ___'.", ["Story", "Fiction", "Movie", "Drama"], 1),
      createQ("Hollivud hansı şəhərdə yerləşir?", ["Nyu York", "Los Anceles", "Çikaqo", "Mayami"], 1),
      createQ("Hansı Azərbaycan filmi 'Oskara' namizəd olub (Long list)?", ["Nabat", "Dolu", "Fəryad", "Hökmdarın taleyi"], 0),
      createQ("Brus Li hansı döyüş növü ustası idi?", ["Karate", "Cüdo", "Kunq-Fu", "Boks"], 2),
    ],
    hard: [
      createQ("Ən çox Oskar alan film hansıdır (11 Oskar)?", ["Titanik", "Avatar", "Xaç Atası", "Ulduz Müharibələri"], 0),
      createQ("Çarli Çaplinin ilk səsli filmi hansıdır?", ["Böyük Diktator", "Müasir dövrlər", "Uşaq", "Qızıl Hərisliyi"], 0),
      createQ("'Bəxt üzüyü' filmində 'Moşu' obrazını kim canlandırıb?", ["Yaşar Nuri", "Hacı İsmayılov", "Səyavuş Aslan", "Valeh Kərimov"], 3),
      createQ("Kann Film Festivalının baş mükafatı nədir?", ["Qızıl Qlobus", "Qızıl Ayı", "Qızıl Palma Budağı", "Oskar"], 2),
      createQ("İlk rəngli Azərbaycan bədii filmi hansıdır?", ["O olmasın, bu olsun", "Koroğlu", "Arşın mal alan", "Görüş"], 0),
      createQ("Hansı rejissor 'Dəhşət janrının kralı' sayılır?", ["Spilberq", "Hiçkok", "Kubrik", "Nolan"], 1),
      createQ("'Şindler'in Siyahısı' filmi hansı hadisədən bəhs edir?", ["Soyqırım (Holokost)", "Vyetnam müharibəsi", "Böyük Depressiya", "Soyuq Müharibə"], 0),
    ]
  }
};

// Utility to shuffle an array
const shuffle = <T>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

// Function to generate a new game session based on TOPIC
// IMPROVED: Now accepts a list of IDs (question texts) to exclude to prevent repetition
export const getQuestionsByTopic = (topic: Topic, seenQuestions: string[] = []): Question[] => {
  const pool = DB[topic];
  
  // We use the question text as the unique ID for simplicity
  const filterUnseen = (qs: any[]) => qs.filter(q => !seenQuestions.includes(q.text));

  let availableEasy = filterUnseen(pool.easy);
  let availableMedium = filterUnseen(pool.medium);
  let availableHard = filterUnseen(pool.hard);

  // If we run out of unseen questions, fill with seen ones but shuffled
  if (availableEasy.length < 4) availableEasy = [...availableEasy, ...shuffle(pool.easy)].slice(0, 10);
  if (availableMedium.length < 3) availableMedium = [...availableMedium, ...shuffle(pool.medium)].slice(0, 10);
  if (availableHard.length < 3) availableHard = [...availableHard, ...shuffle(pool.hard)].slice(0, 10);

  // 10 Questions Total: 4 Easy, 3 Medium, 3 Hard
  const selectedEasy = shuffle(availableEasy).slice(0, 4);
  const selectedMedium = shuffle(availableMedium).slice(0, 3);
  const selectedHard = shuffle(availableHard).slice(0, 3);
  
  const allSelected = [...selectedEasy, ...selectedMedium, ...selectedHard];
  
  return allSelected.map((q, index) => ({
    ...q,
    id: index + 1,
    prize: PRIZE_LADDER[index]
  }));
};

export const getTimerForLevel = (levelIndex: number): number => {
  return 30; // Fixed 30 seconds per request
};
