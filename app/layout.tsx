import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainLayout from './components/layout/MainLayout'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Cutberto Colohua | Portafolio Profesional',
    description: 'Ingeniero en Informática especializado en desarrollo web',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className="dark">
            <body className={inter.className}>
                <div className="liquid-glass-container flex items-center justify-center">
                    <div className="absolute top-10 right-10 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-float" />
                    <div
                        className="absolute bottom-10 left-10 w-80 h-80 bg-slate-700/30 rounded-full blur-3xl animate-float"
                        style={{ animationDelay: '3s' }}
                    />
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-700/10 rounded-full blur-3xl animate-float"
                        style={{ animationDelay: '1.5s' }}
                    />

                    <div className="glass-main-container w-[95%] h-[95vh]">
                        <MainLayout>
                            {children}
                        </MainLayout>
                    </div>
                </div>
            </body>
        </html>
    )
}