export const EXPERIENCE_DATA = [
    {
        id: 0,
        position: 'Desarrollador Full Stack',
        company: 'AXCAP',
        period: '2025 – Presente',
        description: 'Desarrollo de productos SaaS end-to-end para clientes de la agencia en sectores de gastronomía, belleza, salud y distribución. Participación en todo el ciclo: arquitectura, desarrollo, despliegue y mantenimiento.',
        achievements: [
            'Desarrollo de 6+ sistemas SaaS en producción en menos de 18 meses',
            'Implementación de arquitectura multi-tenant con Row-Level Security en Supabase',
            'Integraciones de pago con Stripe y MercadoPago en plataformas de e-commerce',
            'Stack estandarizado Next.js 14 + Supabase + Prisma que redujo un 40% el tiempo de setup por proyecto',
            'Deploy y mantenimiento en Vercel con CI/CD desde GitHub'
        ],
        technologies: ['Next.js 14', 'TypeScript', 'Supabase', 'Prisma', 'Tailwind CSS', 'Stripe', 'Vercel']
    },
    {
        id: 1,
        position: 'Desarrollador Frontend / Fullstack Colaborador',
        company: 'Sorum Asesores',
        period: 'Enero 2025 – Actualidad',
        description: 'Desarrollo de plataformas web en Angular/React para gestión de activos empresariales. Colaboración en arquitectura de microservicios y pipelines CI/CD.',
        achievements: [
            'Desarrollo de app web y móvil con React para gestión de tareas de repartidores, mejorando trazabilidad y eficiencia operativa',
            'Integración de backend con Remix y Prisma, colaborando en mantenimiento y nuevas funcionalidades',
            'Diseño de flujos de comunicación entre sistema y usuarios, validando requerimientos y proporcionando soporte técnico',
            'Participación en sesiones de retroalimentación con clientes para ajustar la solución a sus necesidades operativas'
        ],
        technologies: ['React', 'Remix', 'Prisma', 'TypeScript', 'Node.js', 'Mobile Development']
    },
    {
        id: 2,
        position: 'Analista de Datos',
        company: 'Bioretail (Residencias Profesionales)',
        period: '2024',
        description: 'Análisis geoespacial de datos de retail con Python, Pandas y Google Cloud. Construcción de pipelines ETL para reportes de cobertura territorial.',
        achievements: [
            'Construcción de scripts en Python para detección automática de building footprints mediante análisis geoespacial',
            'Diseño y administración de bases de datos en Google Cloud para recopilar información de afluencia',
            'Implementación de procesos de extracción y limpieza de datos para optimizar decisiones de expansión',
            'Colaboración con equipos multidisciplinarios para traducir hallazgos técnicos en información para dirección'
        ],
        technologies: ['Python', 'Google Cloud', 'Pandas', 'Análisis Geoespacial', 'SQL', 'ETL']
    },
    {
        id: 3,
        position: 'Desarrollador Frontend Angular / React',
        company: 'Macand',
        period: '2023 – 2025',
        description: 'Desarrollo frontend en React y Angular. Implementación de dashboards interactivos y módulos de autenticación OAuth.',
        achievements: [
            'Creación de componentes reutilizables y modulares en Angular, mejorando mantenibilidad y rendimiento',
            'Integración de servicios REST y autenticación JWT para comunicación segura',
            'Implementación de dashboards, formularios reactivos y tablas dinámicas',
            'Colaboración con backend en contratos API (Swagger / Postman)',
            'Desarrollo complementario con React, usando Hooks, Context API y React Router'
        ],
        technologies: ['Angular', 'React', 'TypeScript', 'REST APIs', 'JWT', 'Swagger', 'Postman']
    }
];

export const SKILLS_DATA = [
    {
        category: 'Frontend',
        caption: 'Mi día a día: interfaces con React y Angular, cada vez más con Next.js.',
        items: ['JavaScript', 'TypeScript', 'React', 'Angular', 'Next.js', 'Remix', 'Tailwind CSS', 'HTML/CSS']
    },
    {
        category: 'Backend & Datos',
        caption: 'Java del lado del servidor, y lo necesario para entender el resto del stack.',
        items: ['Java', 'Node.js', 'REST APIs', 'GraphQL', 'SQL', 'PostgreSQL', 'Supabase', 'Prisma', 'Python', 'MongoDB', 'Google Cloud', 'Firebase']
    },
    {
        category: 'Herramientas',
        caption: 'Lo que uso para llevar el código de mi máquina a producción.',
        items: ['Git', 'Docker', 'VS Code', 'Figma', 'Postman', 'Swagger', 'Vercel', 'JWT']
    },
];

export type ProjectStatus = 'completado' | 'en-desarrollo';
export type ProjectCategory = 'saas' | 'landing' | 'webapp';
export type ProjectType = 'open' | 'nda' | 'private';

export interface ProjectData {
    id: number;
    title: string;
    description: string;
    role: string;
    technologies: string[];
    images: string[];
    type: ProjectType;
    category: ProjectCategory;
    status?: ProjectStatus;
    github?: string;
    demo?: string;
    /** Public-facing app/storefront demo — shown as its own "Ver Tienda" button when set. */
    demoStore?: string;
    /** Admin/dashboard demo — shown as its own "Ver Admin" button when set. */
    demoAdmin?: string;
    company?: string;
    features?: string[];
    /** Set true to keep a project in the data but hide it from the site (e.g. paused/under NDA review). */
    hidden?: boolean;
}

export const PROJECTS_DATA: ProjectData[] = [
    {
        id: 1,
        title: 'Cafecito.shop',
        description: 'Plataforma de e-commerce y gestión para cafeterías. Sistema dual: panel admin completo + página pública para pedidos a domicilio con seguimiento en tiempo real.',
        role: 'Desarrollador Full Stack — AXCAP',
        technologies: ['Next.js 14', 'TypeScript', 'Supabase', 'Prisma', 'Tailwind CSS', 'Stripe', 'MercadoPago', 'Vercel'],
        images: [
            '/projects/cafeteria/cafe.png',
            '/projects/cafeteria/cafe1.png',
            '/projects/cafeteria/cafe2.png',
            '/projects/cafeteria/cafe3.png',
            '/projects/cafeteria/cafe4.png',
        ],
        type: 'open',
        category: 'saas',
        status: 'completado',
        demoStore: 'https://www.cafecito.shop/',
        demoAdmin: 'https://admin-cafe-two.vercel.app/',
        features: [
            'Panel admin: gestión de productos, categorías, precios e inventario',
            'Gestión de promociones y descuentos con vigencia configurable',
            'Página pública con catálogo, carrito y checkout para pedidos a domicilio',
            'Dashboard de ventas con métricas diarias/semanales/mensuales',
            'Gestión de repartidores y estados de pedido en tiempo real',
            'Integración de pagos en línea (Stripe/MercadoPago) y contra entrega',
            'Notificaciones por email/WhatsApp al cliente y al negocio'
        ]
    },
    {
        id: 2,
        title: 'Stock Central',
        hidden: true,
        description: 'Sistema de administración de inventario y catálogo para distribuidoras de productos de belleza. Orientado a mayoristas con múltiples clientes y generación de documentos.',
        role: 'Desarrollador Full Stack — AXCAP',
        technologies: ['Next.js 14', 'TypeScript', 'Supabase', 'Prisma', 'Tailwind CSS', 'Vercel'],
        images: [],
        type: 'open',
        category: 'saas',
        status: 'completado',
        features: [
            'Gestión completa de catálogo de productos con variantes (color, tamaño, etc.)',
            'Control de inventario con alertas de stock mínimo',
            'Módulo de clientes/distribuidores con historial de pedidos',
            'Generación de cotizaciones y facturas en PDF',
            'Reportes de movimientos de inventario y ventas',
            'Panel de administración con roles y permisos',
            'Importación masiva de productos via CSV'
        ]
    },
    {
        id: 3,
        title: 'Beauty Book',
        description: 'Sistema de reservas y gestión para salones de belleza. Permite a los clientes agendar citas online y al negocio administrar agenda, servicios y métricas de ocupación.',
        role: 'Desarrollador Full Stack — AXCAP',
        technologies: ['Next.js 14', 'TypeScript', 'Supabase', 'Prisma', 'Tailwind CSS', 'Vercel'],
        images: [
            '/projects/salon/salon.png',
            '/projects/salon/salon1.png',
            '/projects/salon/salon2.png',
            '/projects/salon/salon3.png',
        ],
        type: 'open',
        category: 'saas',
        status: 'completado',
        demoStore: 'https://beauty-book-two.vercel.app/demo',
        features: [
            'Calendario de reservas con vista por estilista y por día/semana',
            'Catálogo de servicios con duración y precio configurable',
            'Reservas online para clientes con selección de estilista y horario',
            'Recordatorios automáticos por email/SMS al cliente',
            'Gestión del equipo: perfiles de estilistas, horarios y comisiones',
            'Historial de servicios por cliente (fidelización)',
            'Panel de métricas: ocupación, ingresos y servicios más populares'
        ]
    },
    {
        id: 4,
        title: 'DentalCare Admin',
        hidden: true,
        description: 'Sistema de gestión integral para clínicas dentales. Administración de pacientes, citas, tratamientos y expedientes clínicos digitales con odontograma interactivo.',
        role: 'Desarrollador Full Stack — AXCAP',
        technologies: ['Next.js 14', 'TypeScript', 'Supabase', 'Prisma', 'Tailwind CSS', 'Vercel'],
        images: [],
        type: 'open',
        category: 'saas',
        status: 'en-desarrollo',
        features: [
            'Expediente clínico digital del paciente con odontograma',
            'Agenda de citas con recordatorios automáticos',
            'Gestión de tratamientos: presupuesto, plan de pagos y seguimiento',
            'Módulo de inventario de materiales dentales',
            'Historial de pagos y cuentas por cobrar',
            'Generación de recetas y notas médicas en PDF',
            'Panel multi-doctor con roles diferenciados'
        ]
    },
    {
        id: 5,
        title: 'FloralOS',
        hidden: true,
        description: 'Sistema de gestión para florerías. Administración de pedidos, inventario floral, rutas de entrega y clientes para negocios de flores y arreglos florales.',
        role: 'Desarrollador Full Stack — AXCAP',
        technologies: ['Next.js 14', 'TypeScript', 'Supabase', 'Prisma', 'Tailwind CSS', 'Vercel'],
        images: [],
        type: 'open',
        category: 'saas',
        status: 'en-desarrollo',
        features: [
            'Catálogo de arreglos y flores con inventario por pieza',
            'Gestión de pedidos con fecha de entrega y personalización',
            'Módulo de rutas de entrega con asignación a repartidores',
            'Página pública de catálogo para clientes',
            'Alertas de stock bajo para flores perecederas',
            'Gestión de eventos especiales (San Valentín, Día de Madres, etc.)',
            'Reportes de ventas por temporada y producto'
        ]
    },
    {
        id: 6,
        title: 'Landing Pages — AXCAP',
        description: 'Colección de landing pages de alto rendimiento desarrolladas para clientes de AXCAP en diferentes industrias con Lighthouse 95+ y carga <1.5s en mobile.',
        role: 'Desarrollador Full Stack — AXCAP',
        technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'SEO'],
        images: [
            '/projects/landings/cap1.png',
            '/projects/landings/cap2.png',
            '/projects/landings/cap3.png',
            '/projects/landings/cap4.png',
            '/projects/landings/cap5.png',
            '/projects/landings/cap6.png',
            '/projects/landings/cap7.png',
        ],
        type: 'open',
        category: 'landing',
        status: 'completado',
        features: [
            'Diseño responsive con animaciones fluidas (Framer Motion)',
            'Optimización SEO on-page y Core Web Vitals (Lighthouse 95+)',
            'Formularios de contacto con integración a CRM o email',
            'Secciones: hero, servicios, testimonios, FAQ, CTA',
            'Tiempo de carga <1.5s en mobile (imágenes optimizadas)',
            'Integración con Google Analytics y Meta Pixel',
            'Deploy automatizado en Vercel con dominio personalizado'
        ]
    },
    {
        id: 7,
        title: 'Sistema de Gestión de Proyectos Inmobiliarios',
        description: 'Plataforma completa para gestión de proyectos inmobiliarios. Incluye administración de finanzas (ingresos/gastos), repositorio de documentación y cronograma tipo Gantt.',
        role: 'Desarrollador Full Stack',
        technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'Spring Boot', 'JWT', 'REST API', 'Postman'],
        images: [
            '/projects/project-manager-1.png',
            '/projects/project-manager-2.png',
            '/projects/project-manager-3.png',
        ],
        type: 'open',
        category: 'webapp',
        status: 'completado',
        github: 'https://github.com/tu-usuario/project-manager',
    },
    {
        id: 8,
        title: 'Sistema de Recompensas Inter-empresarial',
        description: 'Sistema de intercambio de recompensas entre grupo de empresas asociadas. Los usuarios acumulan puntos consumiendo en una empresa miembro y los canjean en otras del grupo.',
        role: 'Desarrollador Frontend (Colaboración)',
        technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'Spring Boot', 'JWT', 'REST API'],
        images: [
            '/projects/rewards-login.png',
            '/projects/rewards-signup.png',
        ],
        type: 'nda',
        category: 'webapp',
        company: 'Cliente empresarial',
    },
    {
        id: 9,
        title: 'App Móvil de Gestión de Repartidores',
        description: 'Aplicación móvil (React Native) y panel web de administración para gestión completa de repartidores. Rutas, entregas, cobranza y monitoreo en tiempo real.',
        role: 'Desarrollador Full Stack (Mobile + Web)',
        technologies: ['React Native', 'React', 'Expo', 'Node.js', 'Fetch API', 'Axios', 'TypeScript'],
        images: [],
        type: 'private',
        category: 'webapp',
        company: 'Empresa de logística',
    },
];
