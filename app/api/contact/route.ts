import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Todos los campos son requeridos' },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: 'Portafolio <onboarding@resend.dev>',
            to: ['castillocutberto10@gmail.com'],
            replyTo: email,
            subject: `Nuevo mensaje de portafolio: ${subject}`,
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
                        <div class="value">${name}</div>
                    </div>
                    <div class="field">
                        <div class="label">Email:</div>
                        <div class="value">${email}</div>
                    </div>
                    <div class="field">
                        <div class="label">Asunto:</div>
                        <div class="value">${subject}</div>
                    </div>
                    <div class="field">
                        <div class="label">Mensaje:</div>
                        <div class="value">${message.replace(/\n/g, '<br>')}</div>
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
