import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import MainLayout from './components/layout/MainLayout'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
    title: 'Cutberto Colohua | Portafolio Profesional',
    description: 'Ingeniero en Informática especializado en desarrollo web',
    keywords: ['developer', 'portfolio','angular', 'react', 'nextjs', '3d'],
    authors: [{ name: 'Cutberto Castillo' }],
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'Cutberto Castillo | Portfolio',
    description: 'Desarrollador especializado en experiencias web interactivas',
    },
    icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
},
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className="dark">
            <body className={`${inter.variable} ${outfit.variable} font-sans`}>
                <div className="liquid-glass-container flex items-center justify-center">
                    <div className="glass-main-container w-[98%] h-[95vh]">
                        <MainLayout>
                            {children}
                        </MainLayout>
                    </div>
                </div>
            </body>
        </html>
    )
}