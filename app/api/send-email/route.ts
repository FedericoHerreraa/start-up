import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

function generateEmailContent(name: string, text: string) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                }
                .header {
                    text-align: center;
                    padding-bottom: 20px;
                }
                .content {
                    margin-top: 20px;
                }
                .footer {
                    text-align: center;
                    font-size: 12px;
                    color: #aaa;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Nuevo mensaje de contacto</h1>
                </div>
                <div class="content">
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Mensaje:</strong> ${text}</p>
                </div>
                <div class="footer">
                    <p>Este es un mensaje automático. Por favor, no responda.</p>
                </div>
            </div>
        </body>
        </html>
    `;
}


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { to, name, text } = body

        if (!to || !name || !text) {
            return NextResponse.json({
                message: "Faltan parámetros requeridos: 'to', 'subject' o 'text'.",
                status: 400
            });
        }

        console.log('User: ', process.env.EMAIL_USER)
        console.log('Pass: ', process.env.EMAIL_PASS)

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", 
            port: 465,
            secure: true, 
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS,
            },
        })

        const emailMessage = generateEmailContent(name, text)

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject: "Nuevo mensaje de contacto",
            html: emailMessage
        })

        return NextResponse.json({ message: "Correo enviado exitosamente", status: 200 })
    } catch (error) {
        console.log("error ", error)
        return NextResponse.json({ message: "Error al enviar el correo", status: 500 })
    }
}

