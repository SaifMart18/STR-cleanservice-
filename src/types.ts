export interface TranslationDict {
  navHome: string;
  navAbout: string;
  navServices: string;
  navWhyUs: string;
  navGallery: string;
  navContact: string;
  requestQuote: string;
  callUs: string;
  whatsappUs: string;

  // Hero Section
  heroTitleCompany: string;
  heroTitleSub: string;
  heroSubHeading: string;
  heroBtnQuote: string;
  heroBtnContact: string;
  statExperienceVal: string;
  statExperienceLbl: string;
  statProjectsVal: string;
  statProjectsLbl: string;
  statClientsVal: string;
  statClientsLbl: string;
  statSatisfactionVal: string;
  statSatisfactionLbl: string;

  // About Section
  aboutTitle: string;
  aboutHeading: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  aboutStatExperience: string;
  aboutStatMaterials: string;
  aboutStatMaterialsLbl: string;
  aboutStatStaff: string;
  aboutStatStaffLbl: string;

  // Services Section
  servicesTitle: string;
  servicesSubtitle: string;
  servicesList: Array<{
    id: number;
    title: string;
    description: string;
    detailedDescription: string;
  }>;

  // Why Choose Us Section
  whyTitle: string;
  whySubtitle: string;
  whyFeatures: Array<{
    id: number;
    title: string;
    description: string;
  }>;

  // Work Process Section
  processTitle: string;
  processSubtitle: string;
  processSteps: Array<{
    id: number;
    stepNum: string;
    title: string;
    description: string;
  }>;

  // Gallery Section
  galleryTitle: string;
  gallerySubtitle: string;
  galleryCategories: {
    all: string;
    homes: string;
    villas: string;
    offices: string;
    hospitals: string;
    airports: string;
    commercial: string;
  };
  galleryBeforeAfter: string;
  galleryBefore: string;
  galleryAfter: string;
  galleryViewDetails: string;

  // FAQ Section
  faqTitle: string;
  faqSubtitle: string;
  faqs: Array<{
    id: number;
    question: string;
    answer: string;
  }>;

  // Testimonials Section
  testiTitle: string;
  testiSubtitle: string;
  testimonialsList: Array<{
    id: number;
    name: string;
    role: string;
    comment: string;
    rating: number;
  }>;

  // Contact Section
  contactTitle: string;
  contactSubtitle: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  contactServiceType: string;
  contactServiceSelect: string;
  contactMessage: string;
  contactBtnSend: string;
  contactSuccessMsg: string;
  contactInfoTitle: string;
  contactAddress: string;
  contactHours: string;
  contactHoursVal: string;
  contactPhoneLbl: string;
  contactEmailLbl: string;
  contactMapTitle: string;

  // Footer Section
  footerAboutText: string;
  footerQuickLinks: string;
  footerOurServices: string;
  footerContactUs: string;
  footerRights: string;
}

export const AR_TRANSLATIONS: TranslationDict = {
  navHome: "الرئيسية",
  navAbout: "من نحن",
  navServices: "خدماتنا",
  navWhyUs: "لماذا نحن",
  navGallery: "معرض الأعمال",
  navContact: "تواصل معنا",
  requestQuote: "طلب عرض سعر",
  callUs: "اتصل بنا",
  whatsappUs: "واتساب",

  // Hero Section
  heroTitleCompany: "شركة STR Cleanservice",
  heroTitleSub: "الحلول الاحترافية لخدمات التنظيف المتكاملة في أربيل",
  heroSubHeading: "نقدم خدمات تنظيف احترافية للمنازل والفلل والمكاتب والمستشفيات والمطارات والمباني التجارية باستخدام أحدث المعدات وبخبرة تزيد عن 30 عاماً.",
  heroBtnQuote: "عرض خدماتنا",
  heroBtnContact: "تواصل معنا",
  statExperienceVal: "+30",
  statExperienceLbl: "سنة خبرة",
  statProjectsVal: "+300",
  statProjectsLbl: "مشروع مكتمل",
  statClientsVal: "+100",
  statClientsLbl: "عميل دائم",
  statSatisfactionVal: "100٪",
  statSatisfactionLbl: "رضا العملاء",

  // About Section
  aboutTitle: "من نحن",
  aboutHeading: "رواد النظافة الاحترافية وخبرة عريقة تتجاوز 3 عقود في أربيل والعراق",
  aboutP1: "شركة STR Cleanservice هي واحدة من الشركات الرائدة في مجال خدمات التنظيف الاحترافية في أربيل والعراق. نمتلك سمعة راسخة مبنية على الدقة والجودة والأمانة.",
  aboutP2: "نمتلك خبرة تتجاوز 30 عاماً في تقديم خدمات التنظيف الشاملة للمنازل والفلل والمكاتب والشركات والمستشفيات والمطارات والمنشآت التجارية الكبرى والصغرى على حد سواء.",
  aboutP3: "نلتزم بأعلى معايير الجودة والاحترافية ونستخدم أحدث المعدات والمواد الآمنة بيئياً لتحقيق أفضل النتائج التي تفوق توقعات عملائنا الكرام. طاقمنا مدرب على أعلى المستويات لتقديم خدمة متكاملة وسريعة بكل أمانة.",
  aboutStatExperience: "30+ عاماً من التميز",
  aboutStatMaterials: "مواد صديقة للبيئة",
  aboutStatMaterialsLbl: "آمنة للأطفال والحيوانات الأليفة",
  aboutStatStaff: "طاقم مدرب ومحترف",
  aboutStatStaffLbl: "تم فحصهم وتدريبهم بالكامل",

  // Services Section
  servicesTitle: "خدماتنا الاحترافية",
  servicesSubtitle: "شريككم المثالي لبيئة نظيفة، صحية، ومشرقة في أربيل",
  servicesList: [
    {
      id: 1,
      title: "تنظيف المباني والمجمعات",
      description: "تنظيف شامل للمباني السكنية والتجارية والمجمعات بكفاءة عالية وعناية دقيقة.",
      detailedDescription: "نقدم خدمة تنظيف المجمعات السكنية والمباني التجارية الشاملة، من المداخل والممرات وصولاً للدرج والمصاعد والمواقف، لضمان بيئة عامة نظيفة تليق بالزوار والمقيمين."
    },
    {
      id: 2,
      title: "تنظيف الواجهات الزجاجية والشبابيك الخارجية",
      description: "تنظيف احترافي للواجهات الزجاجية باستخدام معدات حديثة ومعايير أمان عالية.",
      detailedDescription: "ننفذ عمليات غسيل وتلميع الواجهات الزجاجية للمباني المرتفعة والأبراج والشبابيك الخارجية بالاعتماد على أدوات ورافعات متطورة وطواقم مدربة على معايير حماية صارمة."
    },
    {
      id: 3,
      title: "تنظيف المكاتب والشركات",
      description: "خدمات تنظيف يومية ودورية للمكاتب وقاعات الاجتماعات وبيئات العمل.",
      detailedDescription: "نهيئ لكم بيئة عمل منتجة ومثالية عبر تنظيف المكاتب، الأرصفة الداخلية ومناطق الاستقبال، مسح وتعقيم الأجهزة والأسطح، وتفريغ المهملات بجدول يومي أو دوري مرن."
    },
    {
      id: 4,
      title: "تنظيف المنازل والفلل",
      description: "تنظيف متكامل للمنازل والفلل يشمل جميع المرافق والأثاث.",
      detailedDescription: "نعتني بكل تفاصيل منزلك من المطابخ والحمامات، جلي وتلميع الأرضيات، إزالة الغبار من الزوايا الدقيقة، تنظيف الكنب والمجالس، لتعود لبيت يشع نضارة وجمالاً."
    },
    {
      id: 5,
      title: "تنظيف ما بعد البناء والتشطيبات",
      description: "إزالة مخلفات البناء والغبار وتجهيز المواقع للاستخدام.",
      detailedDescription: "خدمة دقيقة للتخلص من بقايا الأصباغ، الإسمنت المتناثر، الغبار الكثيف، والملصقات على الزجاج فور الانتهاء من أعمال البناء والتشطيب، لتبدأ باستخدام عقارك فوراً."
    },
    {
      id: 6,
      title: "تنظيف الأرضيات والسجاد",
      description: "تنظيف وتعقيم جميع أنواع الأرضيات والسجاد بأحدث التقنيات.",
      detailedDescription: "جلي وتلميع الرخام، تنظيف السيراميك والجرانيت، وغسيل السجاد والموكيت بأجهزة البخار المتقدمة والمواد الفعالة لإزالة أصعب البقع والروائح مع الحفاظ على النسيج."
    },
    {
      id: 7,
      title: "التعقيم والتطهير",
      description: "خدمات تعقيم احترافية للمنازل والشركات والمرافق العامة.",
      detailedDescription: "نقضي على الجراثيم، الفيروسات، والبكتيريا بنسبة 99.9% في المنشآت والغرف والمكاتب باستخدام مواد تعقيم معتمدة طبياً وعالمياً، وبأحدث أجهزة الرش الضبابي المتطورة."
    },
    {
      id: 8,
      title: "خدمات العمالة والمعدات المتخصصة",
      description: "فريق عمل محترف مع جميع المعدات اللازمة للتنفيذ.",
      detailedDescription: "نوفر طواقم مدربة جاهزة للاستعانة بها للمناسبات أو للتنظيف المستمر، مدعومين بأحدث المكانس الصناعية، الرافعات، وأنابيب الضغط العالي للتنظيف الصعب."
    },
    {
      id: 9,
      title: "تنظيف المستشفيات",
      description: "تنظيف وتعقيم المرافق الصحية وفق أعلى معايير النظافة والسلامة.",
      detailedDescription: "نلتزم بمعايير تعقيم وتطهير بالغة الحساسية تشمل غرف العمليات، العيادات، غرف المرضى، والممرات لمنع العدوى المتبادلة والالتزام الكامل بقوانين الصحة العامة العالمية."
    },
    {
      id: 10,
      title: "تنظيف المطارات",
      description: "خدمات تنظيف شاملة لصالات المطارات والمرافق التشغيلية.",
      detailedDescription: "نمتلك القدرة اللوجستية لإدارة وتنظيف صالات السفر، الممرات، دورات المياه، ومكاتب الجمارك في المطارات على مدار الساعة دون التأثير على حركة المسافرين وبمستوى راقٍ ومستمر."
    }
  ],

  // Why Choose Us Section
  whyTitle: "لماذا تختار STR Cleanservice؟",
  whySubtitle: "نهتم بالتفاصيل لنصنع الفارق في كل مساحة ننظفها",
  whyFeatures: [
    { id: 1, title: "خبرة أكثر من 30 سنة", description: "عقود طويلة من العمل الاحترافي تضمن لك معرفة تامة بكل حلول التنظيف الصعبة." },
    { id: 2, title: "فريق متخصص ومدرب", description: "طاقم عمل محترف يخضع لاختبارات أمان وتدريبات مكثفة على أرقى معايير النظافة." },
    { id: 3, title: "معدات وتقنيات حديثة", description: "نستثمر بأفضل أجهزة البخار، الجلي، والمكانس والرافعات الصناعية عالمياً." },
    { id: 4, title: "أسعار تنافسية", description: "نوازن بين الجودة الفائقة وعروض الأسعار العادلة التي تناسب الاحتياجات المختلفة." },
    { id: 5, title: "التزام كامل بالمواعيد", description: "نحترم وقت عملائنا ونلتزم بالتنفيذ الدقيق والتسليم في الموعد المحدد دون تأخير." },
    { id: 6, title: "مواد تنظيف آمنة", description: "نستخدم مواد معتمدة صحياً وصديقة للبيئة وخالية من الروائح المزعجة والمواد الضارة." },
    { id: 7, title: "جودة عالية", description: "نتبع نظام رقابة داخلي دقيق يفحص جودة وسير الخدمة خطوة بخطوة." },
    { id: 8, title: "خدمة عملاء ممتازة", description: "فريق دعم متاح لمساعدتكم والتجاوب الفوري مع طلباتكم وإيجاز عروض الأثمان." },
    { id: 9, title: "استجابة سريعة", description: "نتجاوب مع مكالماتكم وطوارئ التنظيف في غضون مهلة قياسية وبسرعة متناهية." },
    { id: 10, title: "رضا العميل أولويتنا", description: "لا نغادر الموقع حتى نتأكد من رضا العميل التام، ونعيد التنظيف فوراً في حال وجود ملاحظات." }
  ],

  // Work Process Section
  processTitle: "كيف نعمل",
  processSubtitle: "خطوات مدروسة ومنظمة لضمان جودة استثنائية من البداية للنهاية",
  processSteps: [
    {
      id: 1,
      stepNum: "01",
      title: "طلب الخدمة",
      description: "الاتصال بنا عبر الموقع، الهواتف أو الواتساب وتحديد نوع المبنى والمساحة وعنوانك في أربيل."
    },
    {
      id: 2,
      stepNum: "02",
      title: "زيارة الموقع",
      description: "يقوم فريقنا بزيارة ميدانية سريعة لمعاينة الحالة وتقييم الاحتياجات والمعدات المطلوبة مجاناً."
    },
    {
      id: 3,
      stepNum: "03",
      title: "إعداد خطة العمل",
      description: "وضع جدول زمني مفصل ومحدد المهام والأسعار لتنفيذ المشروع بكفاءة وبدون أي تكاليف خفية."
    },
    {
      id: 4,
      stepNum: "04",
      title: "تنفيذ الخدمة",
      description: "وصول فريق عملنا المزود بالآليات المناسبة ليباشر عملية تنظيف عميقة ومنظمة لكل التفاصيل."
    },
    {
      id: 5,
      stepNum: "05",
      title: "مراجعة الجودة",
      description: "يقوم مشرف الجودة بمعاينة العمل بصحبة العميل لضمان المطابقة الكاملة لأعلى معاييرنا الاحترافية."
    }
  ],

  // Gallery Section
  galleryTitle: "معرض أعمالنا",
  gallerySubtitle: "شاهد نتائج كفاءتنا ودقتنا من خلال مشاريعنا المنفذة وتطبيقات قبل/بعد",
  galleryCategories: {
    all: "الكل",
    homes: "المنازل",
    villas: "الفلل",
    offices: "المكاتب",
    hospitals: "المستشفيات",
    airports: "المطارات",
    commercial: "المباني التجارية"
  },
  galleryBeforeAfter: "مقارنة قبل وبعد",
  galleryBefore: "قبل التنظيف",
  galleryAfter: "بعد التنظيف",
  galleryViewDetails: "تفاصيل المشروع",

  // FAQ Section
  faqTitle: "الأسئلة الشائعة",
  faqSubtitle: "إجابات لأسئلتكم واستفساراتكم حول خدماتنا الفائقة وعمليات التشغيل",
  faqs: [
    {
      id: 1,
      question: "هل تقدمون خدمات التنظيف في كافة مناطق أربيل؟",
      answer: "نعم، نغطي جميع أحياء مدينة أربيل ومحيطها، بما في ذلك المجمعات السكنية الجديدة والشركات المنتشرة في عموم المنطقة."
    },
    {
      id: 2,
      question: "ما هي المواد التي تستخدمونها وهل هي آمنة للأطفال؟",
      answer: "نستخدم مواد ومنظفات عالية الجودة حاصلة على شهادات أمان بيئية وطبية. وهي آمنة تماماً للأطفال، والحيوانات الأليفة، وخالية من المكونات السامة."
    },
    {
      id: 3,
      question: "كم تستغرق عملية تنظيف الفيلا أو الشقة العادية؟",
      answer: "يعتمد ذلك على المساحة وحالة النظافة التراكمية. عادةً، تستغرق الشقة من 4 إلى 6 ساعات، بينما تستغرق الفلل الكبيرة يوماً كاملاً لفريق متخصص مكون من 4 إلى 8 أفراد."
    },
    {
      id: 4,
      question: "كيف يتم تقدير التكاليف لمعرض أعمال التشطيب والبناء؟",
      answer: "نقوم بزيارة مجانية للموقع لمعاينة حجم المخلفات، الأسمنت الملتصق والغبار، ومن ثم تقديم كشف عرض أسعار دقيق يشمل العمال والمعدات اللازمة."
    },
    {
      id: 5,
      question: "هل تقدمون عقود تنظيف شهرية أو سنوية للشركات؟",
      answer: "نعم، نحن متخصصون في صياغة عقود تنظيف وصيانة دورية مرنة (يومية، أسبوعية، شهرية) للمكاتب والشركات والمستشفيات مع توفير عمالة مقيمة في أوقات الدوام."
    }
  ],

  // Testimonials Section
  testiTitle: "آراء عملائنا الكرام",
  testiSubtitle: "فخورون بثقة عملائنا في خدمتنا المستمرة منذ سنوات في أربيل",
  testimonialsList: [
    {
      id: 1,
      name: "أحمد كوران",
      role: "صاحب فيلا في مجمع عينكاوة",
      comment: "شركة غاية في الاحترافية والالتزام بالمواعيد. طلبنا تنظيف شامل بعد الصبغ، عاد البيت جديداً ولامعاً وخالياً تماماً من روائح الصبغ والتربة. بارك الله في جهودكم.",
      rating: 5
    },
    {
      id: 2,
      name: "رنا شاهين",
      role: "مديرة الموارد البشرية لشركة تكنولوجيا",
      comment: "نتعامل مع STR Cleanservice منذ سنتين لتنظيف مكاتبنا في مبنى الـ Gulan Tower. الخدمة ممتازة، العمال ملتزمون جداً بالتفاصيل، ولم يقصروا يوماً. من أفضل الخيارات في أربيل.",
      rating: 5
    },
    {
      id: 3,
      name: "سيروان جلال",
      role: "مسؤول اللوجستيات في مستشفى أهلي",
      comment: "النظافة والتعقيم في المستشفيات مسألة حياة أو موت، و STR Cleanservice أثبتوا تميزهم المطلق في تلبية أكثر المعايير دقة ونوعية. الأجهزة والمواد لديهم ممتازة جداً.",
      rating: 5
    }
  ],

  // Contact Section
  contactTitle: "تواصل معنا",
  contactSubtitle: "فريقنا متأهب للإجابة عن اتصالاتكم وتجهيز عروض الأسعار فورا",
  contactName: "الاسم الكامل",
  contactPhone: "رقم الهاتف",
  contactEmail: "البريد الإلكتروني",
  contactServiceType: "نوع الخدمة",
  contactServiceSelect: "اختر الخدمة المطلوبة...",
  contactMessage: "تفاصيل الرسالة أو حجم المساحة المطلوب تنظيفها",
  contactBtnSend: "إرسال الطلب الآن",
  contactSuccessMsg: "تم إرسال طلبكم بنجاح! سيتصل بكم مندوبنا في غضون ساعة واحدة لتأكيد موعد المعاينة.",
  contactInfoTitle: "معلومات الاتصال بالشركة",
  contactAddress: "شارع 100م، مقابل بارك سامي عبد الرحمن، أربيل، العراق",
  contactHours: "أوقات العمل المتاحة",
  contactHoursVal: "يومياً من الساعة 9:00 صباحاً وحتى 5:00 مساءً (الجمعة مغلق)",
  contactPhoneLbl: "رقم الهاتف والخط الساخن",
  contactEmailLbl: "البريد الإلكتروني",
  contactMapTitle: "موقعنا الجغرافي على الخارطة",

  // Footer Section
  footerAboutText: "حلول تنظيف فائقة واحترافية للمنازل ولمجتمعات الأعمال بخبرة وطنية ودولية تتجاوز 30 عاماً في قلب أربيل. نلتزم بأرقى معايير الجودة والتعقيم والبيئة المستدامة.",
  footerQuickLinks: "روابط سريعة",
  footerOurServices: "خدماتنا الأبرز",
  footerContactUs: "اتصل بنا",
  footerRights: "جميع الحقوق محفوظة © STR Cleanservice 2026. الكفاءة والجودة هي هدفنا الأول لأكثر من 30 عاماً."
};

export const EN_TRANSLATIONS: TranslationDict = {
  navHome: "Home",
  navAbout: "About Us",
  navServices: "Services",
  navWhyUs: "Why Choose Us",
  navGallery: "Portfolio",
  navContact: "Contact Us",
  requestQuote: "Request a Quote",
  callUs: "Call Us",
  whatsappUs: "WhatsApp",

  // Hero Section
  heroTitleCompany: "STR Cleanservice",
  heroTitleSub: "Professional Integrated Cleaning Solutions in Erbil",
  heroSubHeading: "Providing top-tier professional cleaning services for homes, villas, offices, hospitals, airports, and commercial buildings utilizing world-class equipment and over 30 years of hands-on expertise.",
  heroBtnQuote: "Our Services",
  heroBtnContact: "Contact Us Now",
  statExperienceVal: "+30",
  statExperienceLbl: "Years Experience",
  statProjectsVal: "+300",
  statProjectsLbl: "Completed Projects",
  statClientsVal: "+100",
  statClientsLbl: "Regular Clients",
  statSatisfactionVal: "100%",
  statSatisfactionLbl: "Customer Satisfaction",

  // About Section
  aboutTitle: "About Us",
  aboutHeading: "Pioneering Professional Cleaning for Over 3 Decades in Erbil & Iraq",
  aboutP1: "STR Cleanservice stands as one of the preeminent professional cleaning organizations based in Erbil and across Iraq, built upon unwavering accuracy, reliability, and client trust.",
  aboutP2: "With over 30 years of verified operational experience, we serve deep-cleaning needs across premium villas, commercial offices, healthcare clinics, large-scale airports, and infrastructure buildings.",
  aboutP3: "We maintain an ironclad commitment to safety and quality, employing state-of-the-art European cleaning rigs, industrial pressure washers, and strictly eco-friendly chemicals that cause zero irritation to humans or family pets. Our workforce undergoes thorough background vetting and rigorous structural training, guaranteeing polite communication, swift efficiency, and exceptional confidentiality on site.",
  aboutStatExperience: "30+ Years of Excellence",
  aboutStatMaterials: "Eco-Friendly Chemicals",
  aboutStatMaterialsLbl: "Fully safe for children and household pets",
  aboutStatStaff: "Fully Vetted & Trained Staff",
  aboutStatStaffLbl: "Professionally trained for highest standards",

  // Services Section
  servicesTitle: "Our Professional Services",
  servicesSubtitle: "Your optimal partner for pristine, sanitised, and gleaming physical spaces",
  servicesList: [
    {
      id: 1,
      title: "Building & Complex Cleaning",
      description: "Thorough sanitising and floor polishing for housing complex common boundaries, stairs, and parking.",
      detailedDescription: "Comprehensive cleaning setups for multi-family residential frameworks, high-rise lobby gates, common stairs, elevators, and outdoor parking spaces to portray premium community hygiene."
    },
    {
      id: 2,
      title: "Glass facades & Exterior Window Washing",
      description: "Professional cleaning of tall high-rise glass structures with maximum safety apparatus.",
      detailedDescription: "High-reach exterior glass polishing and frame cleanups utilizing mobile high platforms, safe industrial cradle lifters, and special smudge-free minerals for crystal clear views."
    },
    {
      id: 3,
      title: "Office & Corporate Cleaning",
      description: "Integrated daily or rotational sanitation for conference halls, workplaces, and lounge zones.",
      detailedDescription: "Boosting corporate productivity through deep table cleanups, monitor dusting, secure waste container shredding context, and floor vacuuming executed on fluid off-hour schedules."
    },
    {
      id: 4,
      title: "Villa & Home Deep Cleaning",
      description: "All-encompassing house hygiene including upholstery washing and fine detail polishing.",
      detailedDescription: "Catering to every detail of residential properties — deep kitchen scrubbing, hygienic sanitising of bathrooms, floor polishing, and living room upholstery steam washing."
    },
    {
      id: 5,
      title: "Post-Construction & Fit-out Cleaning",
      description: "Removing fine drywall grit, concrete residues, paint splatters, and material tapes.",
      detailedDescription: "An intensive detailed cleanup immediately following building construction or renovations. We dissolve paint spots on frames, vacuum microscopic gypsum dust, and prep sites for prompt occupancy."
    },
    {
      id: 6,
      title: "Professional Carpet & Floor Care",
      description: "Advanced marble polishing, ceramic cleaning, and deep carpet hot-vapor wash.",
      detailedDescription: "Marble crystallized diamond polishing, granite floor refinishing, and deep thermal extraction steam washing for heavy-traffic wool rugs to vanish resilient grease, stains, and odors."
    },
    {
      id: 7,
      title: "Premium Disinfection & Sanitisation",
      description: "Surgical-grade mist containment destroying 99.9% of germs, bacteria, and viral vectors.",
      detailedDescription: "Sterilisation of spaces using hospital-grade aerosol foggers and safe non-toxic disinfectants. Highly crucial for corporate clinics, public spaces, and toddler playrooms."
    },
    {
      id: 8,
      title: "Specialist Labours & Rigs Hire",
      description: "Providing trained, reliable taskforces with robust machinery for custom scale projects.",
      detailedDescription: "Direct supply of skilled, certified cleaners and commercial heavy machinery (scaffolders, sweepers, floor polishers) to manage complex client operations smoothly."
    },
    {
      id: 9,
      title: "Hospital & Healthcare Sanitisation",
      description: "Ultra-strict clinical hygiene, disinfection of operating theatres, wards and clinics.",
      detailedDescription: "Sterile sanitisation of surgical theatres, diagnostic suites, recovery wards, and reception units, adhering strictly to global health regulations to mitigate infection vector hazards."
    },
    {
      id: 10,
      title: "Airport Terminal Cleaning",
      description: "Broad-scale high throughput logistics cleaning of airport transit areas and lounge rooms.",
      detailedDescription: "Logistical management of heavy-duty cleanliness for airport passenger terminals, baggage carousel tracks, VIP waiting areas, and custom gates keeping operations fluid and shining 24/7."
    }
  ],

  // Why Choose Us Section
  whyTitle: "Why Choose STR Cleanservice?",
  whySubtitle: "We double-check every detail to build pristine environments of comfort",
  whyFeatures: [
    { id: 1, title: "30+ Years Industry Tenure", description: "Three decades of experience executing projects ensures absolute command over challenging cleaning situations." },
    { id: 2, title: "Skilled & Vetted Experts", description: "Our workers are carefully background-checked, insured, and thoroughly structured in premium hygiene methodologies." },
    { id: 3, title: "State-Of-The-Art Equipment", description: "We utilize advanced European steam extractors, heavy crystal polishers, and high-pressure washing machines." },
    { id: 4, title: "Competitive Transparent Rates", description: "Get maximum premium results without hidden auxiliary charges or fees. We deliver exceptional return on premium quality." },
    { id: 5, title: "Punctuality & Reliability", description: "Time is irreplaceable. We show up exactly on the specified schedule, fully prepared to clean efficiently." },
    { id: 6, title: "Eco-Friendly Safe Materials", description: "Our chemicals are safe, odorless, bio-degradable, and certified safe for kids, allergic persons, and pet animals." },
    { id: 7, title: "Uncompromising Quality Control", description: "We assign a dedicated quality supervisor on every large site to run checklists and ensure total perfection." },
    { id: 8, title: "First-Class Customer Support", description: "Our friendly helpline operators write and clarify specifications and estimates within moments for your peace of mind." },
    { id: 9, title: "Rapid Emergency Response", description: "Facing a sudden pipe leak or pre-event mess? We dispatch deep-cleaning crews in record-breaking speed across Erbil." },
    { id: 10, title: "Guaranteed Satisfaction First", description: "If you observe any spot that doesn't meet standard guidelines, we will thoroughly repaint/recut that task absolutely free." }
  ],

  // Work Process Section
  processTitle: "How We Work",
  processSubtitle: "A systematic, streamlined approach to ensure immaculate results from booking to handoff",
  processSteps: [
    {
      id: 1,
      stepNum: "01",
      title: "Quick Booking Request",
      description: "Reach out via our website, direct phone line, or WhatsApp, and specify room metrics and cleaning scope in Erbil."
    },
    {
      id: 2,
      stepNum: "02",
      title: "Complimentary Site Visit",
      description: "If needed, our senior inspector will visit your property to evaluate parameters, access routes, and estimate equipment for free."
    },
    {
      id: 3,
      stepNum: "03",
      title: "Tailored Clean Program",
      description: "We issue a clear checklist, schedule allocation, and final quote that guarantees absolute zero surplus hidden fees."
    },
    {
      id: 4,
      stepNum: "04",
      title: "Impeccable Service Execution",
      description: "Our professional crew arrives with deep-cleaning rigs, safety tools, and biodegradable agents to wash and polish systematically."
    },
    {
      id: 5,
      stepNum: "05",
      title: "Quality Inspector Approval",
      description: "We walk through the property together of each sector to make sure every square inch glows to your ultimate standards."
    }
  ],

  // Gallery Section
  galleryTitle: "Our Work Gallery",
  gallerySubtitle: "Feast your eyes on actual results of our sanitisation and restoration projects",
  galleryCategories: {
    all: "All Projects",
    homes: "Apartments",
    villas: "Villas",
    offices: "Offices",
    hospitals: "Hospitals",
    airports: "Airports",
    commercial: "Commercial Buildings"
  },
  galleryBeforeAfter: "Before & After View",
  galleryBefore: "Before Clean",
  galleryAfter: "After Clean",
  galleryViewDetails: "View Details",

  // FAQ Section
  faqTitle: "Frequently Asked Questions",
  faqSubtitle: "Detailed transparent answers explaining our terms, operations, and procedures",
  faqs: [
    {
      id: 1,
      question: "Which areas in Erbil do you cover?",
      answer: "We cover all major commercial hubs and elite residential complexes in Erbil and surrounding governorate districts, including Gulan Street, Bakhtiyari, Empire World, Ankawa, Dream City, and more."
    },
    {
      id: 2,
      question: "Are your cleaning agents safe for kids and domestic animals?",
      answer: "Absolutely. We exclusively purchase European-disinfected, bio-degradable, and chemical-neutral products. They pose zero allergy/asthma hazards to infants or pets."
    },
    {
      id: 3,
      question: "How long does a deep villa clean take?",
      answer: "It generally depends on square meters and overall condition. A 200m² apartment usually requires 4 to 6 hours, while an extensive multi-level villa can take 1 full day with a dedicated team of 5 to 10 professionals."
    },
    {
      id: 4,
      question: "How do you calculate post-construction cleanup prices?",
      answer: "We schedule a fast, free site visit. This allows us to inspect residual paint drops, cement stains, plaster dust depth, and calculate the team size and industrial equipment required."
    },
    {
      id: 5,
      question: "Do you offer recurring cleaning contracts for commercial customers?",
      answer: "Yes. We offer fully customisable, rolling commercial agreements (daily, weekly, bi-weekly) with options for permanently stationed cleaners, dedicated sanitisation routines, and priority emergency booking."
    }
  ],

  // Testimonials Section
  testiTitle: "What Our Clients Say",
  testiSubtitle: "A stellar reputation forged through consistent delivery and happy commercial & home owners",
  testimonialsList: [
    {
      id: 1,
      name: "Ahmed Koran",
      role: "Villa Owner in Ankawa Compound",
      comment: "Incredibly professional and always on time. We ordered a thorough post-renovation cleanup, and the villa turned out pristine, shining, and free from paint stains and plaster dust. Strongly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Rana Shaheen",
      role: "HR Director of a Technology Firm",
      comment: "We've been contracting STR Cleanservice to clean our office floors on Gulan Street for two years. Exceptional detail, reliable crews, and accommodating hours. They are definitely the premier choice in Erbil.",
      rating: 5
    },
    {
      id: 3,
      name: "Sirwan Jalal",
      role: "Logistics Manager at Private Hospital",
      comment: "Clinical sterilization is critical for healthcare facilities. STR Cleanservice consistently proves their exceptional standard of care, following precise guidelines and utilizing incredible machinery.",
      rating: 5
    }
  ],

  // Contact Section
  contactTitle: "Contact Us",
  contactSubtitle: "Get in touch for immediate support, booking schedules, and free site inspections",
  contactName: "Your Full Name",
  contactPhone: "Your Phone Number",
  contactEmail: "Email Address (Optional)",
  contactServiceType: "Service Category",
  contactServiceSelect: "Select Category",
  contactMessage: "Project description, preferred date or space area details...",
  contactBtnSend: "Send Quotation Request",
  contactSuccessMsg: "Thank you! Your quotation request has been received. Our representative will contact you via phone raw details within 60 minutes to confirm booking details.",
  contactInfoTitle: "Our Corporate Contact Details",
  contactAddress: "100m Road, Opposite Sami Abdulrahman Park, Erbil, Iraq",
  contactHours: "Company Working Hours",
  contactHoursVal: "Daily from 9:00 AM to 5:00 PM (Friday Closed)",
  contactPhoneLbl: "Direct Helpline No.",
  contactEmailLbl: "Direct Corporate Email",
  contactMapTitle: "Our Location on Google Maps",

  // Footer Section
  footerAboutText: "Providing premium, state-of-the-art cleaning corporate operations for elite properties and enterprise offices. Over 30 years of verified quality and customer satisfaction across Kurdistan.",
  footerQuickLinks: "Quick Navigation",
  footerOurServices: "Premier Services",
  footerContactUs: "Contact Details",
  footerRights: "All Rights Reserved © STR Cleanservice 2026. Delivering ultimate premium hygiene services for over 30 years."
};
