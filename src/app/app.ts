import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
})
export class App {
  isArabic = false;

  toggleLanguage(): void {
    this.isArabic = !this.isArabic;
    document.documentElement.lang = this.isArabic ? 'ar' : 'en';
    document.documentElement.dir = this.isArabic ? 'rtl' : 'ltr';
  }

  readonly projects = [
    { number: '01', title: 'RMS · ERP, POS & WIMX', arTitle: 'RMS · ERP وPOS وWIMX', category: 'INTEGRATED ENTERPRISE PLATFORM', arCategory: 'منصة مؤسسية متكاملة', text: 'An integrated platform spanning ERP, pharmacy point of sale, and warehouse management. My work includes procurement, goods receipts, invoicing, stock counts, and pharmacy sales workflows.', arText: 'منصة متكاملة تضم ERP ونقاط بيع الصيدليات وإدارة المخازن. أعمل على المشتريات والاستلام والفواتير وجرد المخزون ومسارات البيع.', tags: ['.NET', 'Angular', 'EF Core', 'MediatR', 'SAP', 'ZATCA'], icon: '◈', color: 'lime' },
    { number: '02', title: 'Pharmacy POS', arTitle: 'نظام نقاط بيع الصيدليات', category: 'POINT OF SALE', arCategory: 'نقاط البيع', text: 'Pharmacy sales workflows within the RMS platform, supporting product sales and everyday pharmacy operations.', arText: 'مسارات بيع الصيدليات ضمن منصة RMS، لدعم عمليات البيع والمهام اليومية للصيدلية.', tags: ['ASP.NET Core', 'Angular', 'SQL Server', 'REST APIs'], icon: '＋', color: 'blue', image: 'assets/pharmacy-pos.jpg' },
    { number: '03', title: 'WIMX Warehouse Management', arTitle: 'WIMX لإدارة المخازن', category: 'WAREHOUSE & INVENTORY', arCategory: 'المخازن والمخزون', text: 'Warehouse modules for inventory management, stock counting, warehouse operations, and expiry stock counting.', arText: 'وحدات لإدارة المخزون والجرد وعمليات المستودعات وجرد الأصناف منتهية الصلاحية.', tags: ['.NET', 'Angular', 'SQL Server', 'EF Core'], icon: '▦', color: 'orange' },
    { number: '04', title: 'UNIDO Certification', arTitle: 'نظام شهادات UNIDO', category: 'INDUSTRIAL ACCREDITATION', arCategory: 'الاعتماد الصناعي', text: 'Backend services for expert assignment, industrial assessment visits, evaluation workflows, and accreditation decisions.', arText: 'خدمات خلفية لإدارة الخبراء وتكليفهم بزيارات التقييم الصناعي ومتابعة التقييم وقرارات الاعتماد.', tags: ['ASP.NET Core', 'EF Core', 'SQL Server', 'Backend'], icon: '◎', color: 'purple' },
    { number: '05', title: 'Mago HR Management', arTitle: 'Mago لإدارة الموارد البشرية', category: 'PEOPLE OPERATIONS', arCategory: 'إدارة الموارد البشرية', text: 'An HR management system covering employee management, attendance, leave, payroll, and recruitment.', arText: 'نظام لإدارة الموارد البشرية يشمل شؤون الموظفين والحضور والإجازات والرواتب والتوظيف.', tags: ['ASP.NET Core', 'EF Core', 'SQL Server', 'HR'], icon: '⌘', color: 'pink' },
    { number: '06', title: 'MFNCA UAE', arTitle: 'الخدمات الرقمية لـ MFNCA', category: 'GOVERNMENT DIGITAL SERVICES', arCategory: 'الخدمات الرقمية الحكومية', text: 'Contributed to digital government solutions for the UAE Ministry of State for Federal National Council Affairs, using .NET, Angular, microservices, and RabbitMQ.', arText: 'المساهمة في تطوير حلول حكومية رقمية لوزارة الدولة لشؤون المجلس الوطني الاتحادي بالإمارات باستخدام .NET وAngular والخدمات المصغرة وRabbitMQ.', tags: ['.NET', 'Angular', 'Microservices', 'RabbitMQ'], icon: '⌑', color: 'teal' }
  ];

  readonly skills = [
    { group: 'BACKEND', arGroup: 'الأنظمة الخلفية', items: ['C# / .NET', 'ASP.NET Core', 'REST APIs', 'MediatR'] },
    { group: 'FRONTEND', arGroup: 'واجهات المستخدم', items: ['Angular', 'TypeScript', 'SignalR', 'Responsive UI'] },
    { group: 'DATA & INTEGRATION', arGroup: 'البيانات والتكامل', items: ['SQL Server', 'Entity Framework Core', 'SAP Integration', 'gRPC'] },
    { group: 'ARCHITECTURE & DELIVERY', arGroup: 'المعمارية والتسليم', items: ['Clean Architecture', 'DDD & SOLID', 'CI/CD', 'Azure DevOps'] }
  ];

  readonly experience = [
    { date: 'APR 2025 — NOW', arDate: 'أبريل 2025 — الآن', company: 'Digital Business Systems', role: 'Senior Full Stack Developer', arRole: 'مطور Full Stack أول', text: 'Leading enterprise .NET and Angular development, APIs, architecture, CI/CD, and delivery with cross-functional teams.', arText: 'قيادة تطوير الأنظمة المؤسسية باستخدام .NET وAngular والواجهات البرمجية والمعمارية وCI/CD، بالتعاون مع فرق متعددة التخصصات.' },
    { date: 'JAN 2023 — APR 2025', arDate: 'يناير 2023 — أبريل 2025', company: 'A1softech', role: 'Full Stack Developer', arRole: 'مطور Full Stack', text: 'Built HR modules for employee management, attendance, leave, payroll, and recruitment; contributed to EAM and Techitopia.', arText: 'تطوير وحدات الموارد البشرية للموظفين والحضور والإجازات والرواتب والتوظيف، والمساهمة في أنظمة إدارة الأصول ومنصة Techitopia.' },
    { date: 'JUN 2021 — JAN 2023', arDate: 'يونيو 2021 — يناير 2023', company: 'Link Development', role: 'Solutions Developer', arRole: 'مطور حلول', text: 'Built reusable enterprise digital solutions and contributed to government services for the UAE MFNCA.', arText: 'تطوير حلول رقمية مؤسسية قابلة لإعادة الاستخدام والمساهمة في الخدمات الحكومية لوزارة MFNCA الإماراتية.' }
  ];
}
