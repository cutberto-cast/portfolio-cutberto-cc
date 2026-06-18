import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTHS = { name: 100, email: 150, subject: 150, message: 5000 };

function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, subject, message, website } = body;

        // Honeypot: real users never fill this hidden field. Silently
        // pretend success so bots don't learn to avoid it.
        if (typeof website === 'string' && website.trim().length > 0) {
            return NextResponse.json({ message: 'Email enviado correctamente' }, { status: 200 });
        }

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Todos los campos son requeridos' },
                { status: 400 }
            );
        }

        if (
            typeof name !== 'string' || typeof email !== 'string' ||
            typeof subject !== 'string' || typeof message !== 'string'
        ) {
            return NextResponse.json({ error: 'Formato de datos inválido' }, { status: 400 });
        }

        if (!EMAIL_REGEX.test(email)) {
            return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
        }

        if (
            name.length > MAX_LENGTHS.name || email.length > MAX_LENGTHS.email ||
            subject.length > MAX_LENGTHS.subject || message.length > MAX_LENGTHS.message
        ) {
            return NextResponse.json({ error: 'Uno de los campos excede la longitud permitida' }, { status: 400 });
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeSubject = escapeHtml(subject);
        const safeMessage = escapeHtml(message);

        const data = await resend.emails.send({
            from: 'Portafolio <onboarding@resend.dev>',
            to: ['castillocutberto10@gmail.com'],
            replyTo: email,
            subject: `Nuevo mensaje de portafolio: ${safeSubject}`,
            html:
            `<!DOCTYPE html>
            <html>
                <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #dc2626 0%, #ea580c 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
                    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                    .field { margin-bottom: 20px; }
                    .label { font-weight: bold; color: #dc2626; margin-bottom: 5px; }
                    .value { background: white; padding: 15px; border-radius: 5px; border-left: 3px solid #dc2626; }
                    .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
                </style>
                </head>
                <body>
                <div class="container">
                    <div class="header">
                        <h1 style="margin: 0;">Nuevo Mensaje del Portafolio</h1>
                    </div>
                    <div class="content">
                        <div class="field">
                        <div class="label">Nombre:</div>
                        <div class="value">${safeName}</div>
                    </div>
                    <div class="field">
                        <div class="label">Email:</div>
                        <div class="value">${safeEmail}</div>
                    </div>
                    <div class="field">
                        <div class="label">Asunto:</div>
                        <div class="value">${safeSubject}</div>
                    </div>
                    <div class="field">
                        <div class="label">Mensaje:</div>
                        <div class="value">${safeMessage.replace(/\n/g, '<br>')}</div>
                    </div>
                    <div class="footer">
                        <p>Este mensaje fue enviado desde tu portafolio web</p>
                        <p>Puedes responder directamente a este email</p>
                    </div>
                </div>
                </div>
                </body>
            </html>`,
        });

        return NextResponse.json(
            { message: 'Email enviado correctamente', data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error al enviar email:', error);
        return NextResponse.json(
            { error: 'Error al enviar el mensaje. Por favor intenta de nuevo.' },
            { status: 500 }
        );
    }
}
