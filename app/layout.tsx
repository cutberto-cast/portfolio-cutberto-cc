import type { Metadata } from 'next'
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import MainLayout from './components/layout/MainLayout'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

const SITE_NAME = 'Cutberto Colohua';
const SITE_DESCRIPTION = 'Desarrollador Frontend especializado en React, Angular y Next.js, con bases full-stack en Java.';

export const metadata: Metadata = {
    title: `${SITE_NAME} | Portafolio Profesional`,
    description: SITE_DESCRIPTION,
    keywords: ['frontend developer', 'portfolio', 'react', 'angular', 'nextjs', 'java'],
    authors: [{ name: SITE_NAME }],
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    openGraph: {
        type: 'website',
        locale: 'es_ES',
        url: process.env.NEXT_PUBLIC_SITE_URL,
        title: `${SITE_NAME} | Portafolio`,
        description: SITE_DESCRIPTION,
        siteName: SITE_NAME,
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className="dark">
            <body className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans bg-black`}>
                <MainLayout>
                    {children}
                </MainLayout>
                <Analytics />
            </body>
        </html>
    )
}
