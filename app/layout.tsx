import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import MainLayout from './components/layout/MainLayout'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
    title: 'Cutberto Colohua | Portafolio Profesional',
    description: 'Ingeniero en Informática especializado en desarrollo web',
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