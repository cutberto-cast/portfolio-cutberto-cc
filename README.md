# Portafolio — Cutberto Colohua

Portafolio profesional de **Cutberto Colohua**, Desarrollador Frontend (React, Angular, Next.js) con bases full-stack en Java. Construido con Next.js App Router, Tailwind CSS y Framer Motion.

## Características

- **Next.js 16** con App Router y React Compiler
- **Tailwind CSS** con animaciones y curvas de easing personalizadas
- **Framer Motion** para scroll-reveals, transiciones y el carrusel 3D de skills
- **Formulario de contacto** funcional vía [Resend](https://resend.com), con validación, escape de HTML y honeypot anti-spam
- **SEO**: `robots.ts`, `sitemap.ts` e imagen Open Graph generada dinámicamente
- **Analytics** con [Vercel Analytics](https://vercel.com/analytics)
- **Modo oscuro** por defecto, totalmente responsive

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Animación | Framer Motion |
| Iconos | Lucide React |
| Email | Resend |
| Notificaciones UI | react-hot-toast |
| Analytics | Vercel Analytics |
| Deploy | Vercel |

## Cómo ejecutar localmente

```bash
# Clonar el repositorio
git clone https://github.com/cutberto-cast/portfolio-cutberto-cc.git
cd portfolio-cutberto-cc

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Edita .env.local y agrega tu RESEND_API_KEY (https://resend.com/api-keys)

# Ejecutar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

| Variable | Requerida | Descripción |
|---|---|---|
| `RESEND_API_KEY` | Sí | API key de Resend, usada por `app/api/contact/route.ts` para enviar el correo del formulario de contacto |
| `NEXT_PUBLIC_SITE_URL` | No | URL pública del sitio, usada para metadata (Open Graph), `robots.ts` y `sitemap.ts`. Por defecto `http://localhost:3000` |

## Scripts

```bash
npm run dev     # servidor de desarrollo
npm run build   # build de producción
npm run start   # servidor de producción (requiere build previo)
npm run lint    # ESLint
```

## Deploy

Pensado para desplegarse en [Vercel](https://vercel.com). Configura las mismas variables de entorno (`RESEND_API_KEY`, `NEXT_PUBLIC_SITE_URL`) en el dashboard del proyecto.
