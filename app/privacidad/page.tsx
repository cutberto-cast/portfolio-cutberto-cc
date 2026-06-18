import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Aviso de Privacidad | Cutberto Colohua',
    description: 'Aviso de privacidad del portafolio de Cutberto Colohua.',
};

export default function PrivacidadPage() {
    return (
        <section className="min-h-screen flex items-center px-4 py-20">
            <div className="max-w-2xl w-full mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 mb-8"
                >
                    <ArrowLeft size={16} />
                    Volver al portafolio
                </Link>

                <h1 className="font-outfit text-3xl font-bold text-white tracking-tight mb-2">
                    Aviso de Privacidad
                </h1>
                <p className="text-sm text-slate-500 mb-8">Última actualización: 2026</p>

                <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
                    <p>
                        Este aviso explica qué datos se recopilan en este portafolio y cómo se usan.
                    </p>

                    <div>
                        <h2 className="text-white font-semibold mb-1">Datos del formulario de contacto</h2>
                        <p>
                            Si usas el formulario de contacto, se recopilan los datos que escribes ahí: nombre, correo
                            electrónico, asunto y mensaje. Estos datos se envían por correo a{' '}
                            <span className="text-white">castillocutberto10@gmail.com</span> únicamente para poder responder
                            tu mensaje. No se almacenan en ninguna base de datos ni se usan con fines de marketing.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white font-semibold mb-1">Terceros</h2>
                        <p>
                            El envío del correo se procesa a través de{' '}
                            <a
                                href="https://resend.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-400 hover:underline"
                            >
                                Resend
                            </a>
                            , un proveedor de envío de email. Resend procesa el contenido del formulario únicamente para
                            entregar el correo.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white font-semibold mb-1">Analítica</h2>
                        <p>
                            Este sitio usa{' '}
                            <a
                                href="https://vercel.com/analytics"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-400 hover:underline"
                            >
                                Vercel Analytics
                            </a>
                            , que mide visitas de forma agregada y anónima, sin cookies de seguimiento ni datos
                            personales identificables.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white font-semibold mb-1">Contacto</h2>
                        <p>
                            Para cualquier duda sobre tus datos, escribe a{' '}
                            <span className="text-white">castillocutberto10@gmail.com</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
