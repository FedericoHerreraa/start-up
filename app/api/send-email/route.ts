import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

function generateMessage(name: string, text: string, time: string, date: string, subject: string,) {
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
                    <h1>${subject}</h1>
                </div>
                <div class="content">
                    <p>Nuestro equipo te confirmara la cita a la brevedad.</p>
                    <p><strong>Nombre:</strong> ${name}.</p>
                    <p><strong>Proyecto:</strong> ${text}.</p>
                    <p><strong>Fecha:</strong> ${date}.</p>
                    <p><strong>Hora:</strong> ${time}.</p>
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
        const { to, name, text, date, time } = body

        if (!to || !name || !text || !date || !time) {
            return NextResponse.json({
                message: "Faltan parámetros requeridos: 'to', 'subject' o 'text' o 'date' o 'time'.",
                status: 400
            });
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", 
            port: 465,
            secure: true, 
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS,
            },
        })

        const emailClientMessage = generateMessage(name, text, time, date, "Nos enviaste un nuevo mensaje!")
        const emailUsMessage = generateMessage(name, text, time, date, "Nuevo mensaje de contacto")

        // Email enviado al cliente
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject: "Cita con As You Need",
            html: emailClientMessage
        })

        // Email enviado a nosotros
        await transporter.sendMail({
            from: to,
            to: 'asyouneed1@gmail.com',
            subject: "Nuevo mensaje de contacto",
            html: emailUsMessage
        })

        return NextResponse.json({ message: "Correo enviado exitosamente", status: 200 })
    } catch (error) {
        console.log("error ", error)
        return NextResponse.json({ message: "Error al enviar el correo", status: 500 })
    }
}

