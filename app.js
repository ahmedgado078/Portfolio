const translations = {
  en: {
    navWork: 'Work',
    navAbout: 'About',
    navExperience: 'Experience',
    navContact: "Let's talk ↗",
    availability: 'AVAILABLE FOR SELECT OPPORTUNITIES',
    heroTitle: 'Building systems<br><span>that move business.</span>',
    intro: 'I’m Ahmed Mohsen Gado, a Senior Full Stack Developer with 4+ years of experience building scalable enterprise applications with .NET and Angular.',
    exploreWork: 'Explore my work',
    downloadCv: 'Download CV',
    location: 'Based in Cairo, Egypt',
    scroll: 'SCROLL TO EXPLORE',
    workEyebrow: 'A SELECTION OF MY WORK',
    workTitle: 'Work with purpose.',
    workIntro: 'Digital products across industries, shaped around real business needs.',
    confidential: 'Enterprise work is presented as high-level case studies, respecting client confidentiality and intellectual property.',
    aboutEyebrow: 'HOW I THINK ABOUT ENGINEERING',
    aboutTitle: 'Thoughtful code.<br><span>Meaningful impact.</span>',
    aboutCopy: 'I care about software that solves real problems and keeps evolving. I balance clear architecture with usability, working closely with teams to turn requirements into practical, reliable solutions.',
    aboutLink: 'A little more about me',
    principleOneTitle: 'Business first',
    principleOneCopy: 'Understand the workflow before choosing the technology.',
    principleTwoTitle: 'Built to scale',
    principleTwoCopy: 'Maintainable foundations that can grow with the product.',
    principleThreeTitle: 'Team driven',
    principleThreeCopy: 'Clear communication helps the whole team move faster.',
    skillsEyebrow: 'THE TOOLKIT',
    skillsTitle: 'Tools of the trade.',
    skillsIntro: 'Choosing the right tools for the problem, with a strong foundation in the .NET ecosystem.',
    experienceEyebrow: 'EXPERIENCE',
    experienceTitle: 'Experience shaped<br>by problem solving.',
    experienceSummary: '4+ years building enterprise software.',
    experienceFootnote: 'For detailed experience and education, see my CV.',
    downloadCvLink: 'Download CV ↗',
    contactEyebrow: 'HAVE A PROJECT IN MIND?',
    contactTitle: 'Let’s build<br>something useful.',
    getInTouch: 'Get in touch'
  },
  ar: {
    navWork: 'المشاريع',
    navAbout: 'نبذة',
    navExperience: 'الخبرة',
    navContact: 'تواصل معي ↗',
    availability: 'متاح لفرص مميزة',
    heroTitle: 'أبني أنظمة<br><span>تخدم أعمالاً حقيقية.</span>',
    intro: 'أنا أحمد محسن جادو، مطور Full Stack أول بخبرة تزيد عن 4 سنوات في بناء تطبيقات مؤسسية قابلة للتوسع باستخدام .NET وAngular.',
    exploreWork: 'استكشف أعمالي',
    downloadCv: 'تحميل السيرة الذاتية',
    location: 'مقيم في القاهرة، مصر',
    scroll: 'مرر لاستكشاف الصفحة',
    workEyebrow: 'أعمال مختارة',
    workTitle: 'مشاريع تصنع فرقاً.',
    workIntro: 'حلول رقمية لمجالات متنوعة، صُممت حول احتياجات العمل الحقيقية.',
    confidential: 'المشاريع المؤسسية معروضة كدراسات حالة عامة، مع احترام سرية بيانات العملاء والملكية الفكرية.',
    aboutEyebrow: 'كيف أعمل',
    aboutTitle: 'كود متين.<br>أثر ملموس.',
    aboutCopy: 'أحب بناء البرمجيات التي تحل مشاكل حقيقية وتستمر في التطور. أوازن بين المعمارية الواضحة وسهولة الاستخدام، وأعمل عن قرب مع الفرق لتحويل المتطلبات إلى حلول عملية.',
    aboutLink: 'لنعمل معاً',
    principleOneTitle: 'العمل أولاً',
    principleOneCopy: 'فهم سير العمل قبل اختيار التقنية المناسبة.',
    principleTwoTitle: 'معمارية قابلة للتطور',
    principleTwoCopy: 'أسس واضحة يسهل صيانتها وتنمو مع المنتج.',
    principleThreeTitle: 'تعاون فعّال',
    principleThreeCopy: 'التواصل الواضح يساعد الفريق على التقدم بشكل أسرع.',
    skillsEyebrow: 'مجموعة أدواتي',
    skillsTitle: 'تقنيات أستخدمها.',
    skillsIntro: 'أختار التقنية المناسبة للمشكلة، مع تركيز أساسي على منظومة .NET.',
    experienceEyebrow: 'الخبرة',
    experienceTitle: 'خبرة مبنية على<br>حل المشكلات.',
    experienceSummary: 'أكثر من أربع سنوات في تطوير حلول مؤسسية.',
    experienceFootnote: 'التفاصيل الكاملة للخبرة والتعليم متاحة في السيرة الذاتية.',
    downloadCvLink: 'تحميل السيرة الذاتية ↗',
    contactEyebrow: 'لنبنِ شيئاً جيداً',
    contactTitle: 'المشروع القادم<br>يبدأ بمحادثة.',
    getInTouch: 'راسلني'
  }
};

const projects = [
  {
    number: '01',
    title: 'RMS · ERP, POS & WIMX',
    arTitle: 'RMS · ERP وPOS وWIMX',
    category: 'INTEGRATED ENTERPRISE PLATFORM',
    arCategory: 'منصة مؤسسية متكاملة',
    text: 'An integrated platform spanning ERP, pharmacy point of sale, and warehouse management. My work includes procurement, goods receipts, invoicing, stock counts, and pharmacy sales workflows.',
    arText: 'منصة متكاملة تضم ERP ونقاط بيع الصيدليات وإدارة المخازن. أعمل على المشتريات والاستلام والفواتير وجرد المخزون ومسارات البيع.',
    tags: ['.NET', 'Angular', 'EF Core', 'MediatR', 'SAP', 'ZATCA'],
    icon: '◈',
    color: 'lime'
  },
  {
    number: '02',
    title: 'Pharmacy POS',
    arTitle: 'نظام نقاط بيع الصيدليات',
    category: 'POINT OF SALE',
    arCategory: 'نقاط البيع',
    text: 'Pharmacy sales workflows within the RMS platform, supporting product sales and everyday pharmacy operations.',
    arText: 'مسارات بيع الصيدليات ضمن منصة RMS، لدعم عمليات البيع والمهام اليومية للصيدلية.',
    tags: ['ASP.NET Core', 'Angular', 'SQL Server', 'REST APIs'],
    icon: '＋',
    color: 'blue',
    image: 'public/assets/pharmacy-pos.jpg'
  },
  {
    number: '03',
    title: 'WIMX Warehouse Management',
    arTitle: 'WIMX لإدارة المخازن',
    category: 'WAREHOUSE & INVENTORY',
    arCategory: 'المخازن والمخزون',
    text: 'Warehouse modules for inventory management, stock counting, warehouse operations, and expiry stock counting.',
    arText: 'وحدات لإدارة المخزون والجرد وعمليات المستودعات وجرد الأصناف منتهية الصلاحية.',
    tags: ['.NET', 'Angular', 'SQL Server', 'EF Core'],
    icon: '▦',
    color: 'orange'
  },
  {
    number: '04',
    title: 'UNIDO Certification',
    arTitle: 'نظام شهادات UNIDO',
    category: 'INDUSTRIAL ACCREDITATION',
    arCategory: 'الاعتماد الصناعي',
    text: 'Backend services for expert assignment, industrial assessment visits, evaluation workflows, and accreditation decisions.',
    arText: 'خدمات خلفية لإدارة الخبراء وتكليفهم بزيارات التقييم الصناعي ومتابعة التقييم وقرارات الاعتماد.',
    tags: ['ASP.NET Core', 'EF Core', 'SQL Server', 'Backend'],
    icon: '◎',
    color: 'purple'
  },
  {
    number: '05',
    title: 'Mago HR Management',
    arTitle: 'Mago لإدارة الموارد البشرية',
    category: 'PEOPLE OPERATIONS',
    arCategory: 'إدارة الموارد البشرية',
    text: 'An HR management system covering employee management, attendance, leave, payroll, and recruitment.',
    arText: 'نظام لإدارة الموارد البشرية يشمل شؤون الموظفين والحضور والإجازات والرواتب والتوظيف.',
    tags: ['ASP.NET Core', 'EF Core', 'SQL Server', 'HR'],
    icon: '⌘',
    color: 'pink'
  },
  {
    number: '06',
    title: 'MFNCA UAE',
    arTitle: 'الخدمات الرقمية لـ MFNCA',
    category: 'GOVERNMENT DIGITAL SERVICES',
    arCategory: 'الخدمات الرقمية الحكومية',
    text: 'Contributed to digital government solutions for the UAE Ministry of State for Federal National Council Affairs, using .NET, Angular, microservices, and RabbitMQ.',
    arText: 'المساهمة في تطوير حلول حكومية رقمية لوزارة الدولة لشؤون المجلس الوطني الاتحادي بالإمارات باستخدام .NET وAngular والخدمات المصغرة وRabbitMQ.',
    tags: ['.NET', 'Angular', 'Microservices', 'RabbitMQ'],
    icon: '⌑',
    color: 'teal'
  }
];

const skills = [
  { group: 'BACKEND', arGroup: 'الأنظمة الخلفية', items: ['C# / .NET', 'ASP.NET Core', 'REST APIs', 'MediatR'] },
  { group: 'FRONTEND', arGroup: 'واجهات المستخدم', items: ['Angular', 'TypeScript', 'SignalR', 'Responsive UI'] },
  { group: 'DATA & INTEGRATION', arGroup: 'البيانات والتكامل', items: ['SQL Server', 'Entity Framework Core', 'SAP Integration', 'gRPC'] },
  { group: 'ARCHITECTURE & DELIVERY', arGroup: 'المعمارية والتسليم', items: ['Clean Architecture', 'DDD & SOLID', 'CI/CD', 'Azure DevOps'] }
];

const experience = [
  {
    date: 'APR 2025 — NOW',
    arDate: 'أبريل 2025 — الآن',
    company: 'Digital Business Systems',
    role: 'Senior Full Stack Developer',
    arRole: 'مطور Full Stack أول',
    text: 'Leading enterprise .NET and Angular development, APIs, architecture, CI/CD, and delivery with cross-functional teams.',
    arText: 'قيادة تطوير الأنظمة المؤسسية باستخدام .NET وAngular والواجهات البرمجية والمعمارية وCI/CD، بالتعاون مع فرق متعددة التخصصات.'
  },
  {
    date: 'JAN 2023 — APR 2025',
    arDate: 'يناير 2023 — أبريل 2025',
    company: 'A1softech',
    role: 'Full Stack Developer',
    arRole: 'مطور Full Stack',
    text: 'Built HR modules for employee management, attendance, leave, payroll, and recruitment; contributed to EAM and Techitopia.',
    arText: 'تطوير وحدات الموارد البشرية للموظفين والحضور والإجازات والرواتب والتوظيف، والمساهمة في أنظمة إدارة الأصول ومنصة Techitopia.'
  },
  {
    date: 'JUN 2021 — JAN 2023',
    arDate: 'يونيو 2021 — يناير 2023',
    company: 'Link Development',
    role: 'Solutions Developer',
    arRole: 'مطور حلول',
    text: 'Built reusable enterprise digital solutions and contributed to government services for the UAE MFNCA.',
    arText: 'تطوير حلول رقمية مؤسسية قابلة لإعادة الاستخدام والمساهمة في الخدمات الحكومية لوزارة MFNCA الإماراتية.'
  }
];

function renderProjects(language) {
  const isArabic = language === 'ar';
  document.querySelector('#project-grid').innerHTML = projects.map((project) => {
    const visual = project.image
      ? `<img src="${project.image}" alt="${isArabic ? 'واجهة نظام نقاط بيع الصيدليات' : 'Pharmacy point of sale interface'}" class="project-image">`
      : `<div class="visual-grid"></div><div class="visual-window"><div class="window-top"><b></b><b></b><b></b><span>${isArabic ? 'منصة أعمال' : 'BUSINESS PLATFORM'}</span></div><div class="window-content"><div class="window-sidebar"><i></i><i></i><i></i><i></i></div><div class="window-main"><div class="window-label">${isArabic ? project.arCategory : project.category}</div><div class="window-title">${isArabic ? project.arTitle : project.title}</div><div class="window-stats"><i></i><i></i><i></i></div><div class="window-chart"><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div></div></div></div><div class="visual-icon">${project.icon}</div>`;
    return `<article class="project-card ${project.color}"><div class="project-visual${project.image ? ' has-image' : ''}">${visual}<span class="project-number">${project.number} / 06</span></div><div class="project-info"><div class="project-kicker">${isArabic ? project.arCategory : project.category}</div><h3>${isArabic ? project.arTitle : project.title} <span>↗</span></h3><p>${isArabic ? project.arText : project.text}</p><div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div></div></article>`;
  }).join('');
}

function renderSkills(language) {
  const isArabic = language === 'ar';
  document.querySelector('#skills-grid').innerHTML = skills.map((skill) =>
    `<div class="skill-group"><div class="skill-heading"><span class="skill-mark">✳</span><span>${isArabic ? skill.arGroup : skill.group}</span></div><div class="skill-list">${skill.items.map((item) => `<span>${item}</span>`).join('')}</div></div>`
  ).join('');
}

function renderExperience(language) {
  const isArabic = language === 'ar';
  document.querySelector('#experience-list').innerHTML = experience.map((job) =>
    `<div class="experience-item"><div class="experience-date">${isArabic ? job.arDate : job.date}</div><div><h3>${isArabic ? job.arRole : job.role}</h3><div class="experience-company">${job.company}</div><p>${isArabic ? job.arText : job.text}</p></div></div>`
  ).join('');
}

function setLanguage(language) {
  const isArabic = language === 'ar';
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.querySelector('main').classList.toggle('arabic', isArabic);
  document.querySelector('.language').textContent = isArabic ? 'EN' : 'عربي';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translation = translations[language][element.dataset.i18n];
    if (translation) element.innerHTML = translation;
  });

  renderProjects(language);
  renderSkills(language);
  renderExperience(language);
}

document.querySelector('.language').addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'en' ? 'ar' : 'en');
});

setLanguage('en');
