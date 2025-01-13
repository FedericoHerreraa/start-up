import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

function generateMessage(
    name: string,
    text: string,
    time: string,
    date: string,
    subject: string,
    lenguage: string,
    isClient: boolean
) {
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
                    background-color: #f5f5f5;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }
                .header {
                    background: linear-gradient(90deg, #007bff, #00c6ff);
                    color: #ffffff;
                    padding: 20px;
                    text-align: center;
                }
                .header h1 {
                    margin: 0;
                    font-size: 24px;
                    font-weight: bold;
                }
                .content {
                    padding: 20px;
                    color: #333333;
                }
                .content p {
                    margin: 10px 0;
                }
                .footer {
                    background: #f1f1f1;
                    color: #666666;
                    text-align: center;
                    padding: 15px;
                    font-size: 12px;
                }
                .highlight {
                    font-weight: bold;
                    color: #007bff;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>${subject}</h1>
                </div>
                <div class="content">
                    <p>${isClient
                        ? (lenguage === 'en'
                            ? 'Our team will confirm the appointment as soon as possible.'
                            : 'Nuestro equipo te confirmará la cita a la brevedad.')
                        : (lenguage === 'en'
                            ? 'You have a new appointment scheduled.'
                            : 'Tienes una nueva cita agendada.')}</p>
                    <p><span class="highlight">${lenguage === 'en' ? 'Name:' : 'Nombre:'}</span> ${name}</p>
                    <p><span class="highlight">${lenguage === 'en' ? 'Project:' : 'Proyecto:'}</span> ${text}</p>
                    <p><span class="highlight">${lenguage === 'en' ? 'Date:' : 'Fecha:'}</span> ${date}</p>
                    <p><span class="highlight">${lenguage === 'en' ? 'Duration:' : 'Duración:'}</span> ${time} ${time === "30" ? (lenguage === 'en' ? 'Minutes' : 'Minutos') : (lenguage === 'en' ? 'Hour' : 'Hora')}</p>
                </div>
                <div class="footer">
                    <p>${lenguage === 'en'
                        ? 'This is an automatic message. Please, do not respond.'
                        : 'Este es un mensaje automático. Por favor, no responda.'}</p>
                </div>
            </div>
        </body>
        </html>
    `;
}


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { to, name, text, date, time, lenguage } = body

        if (!to || !name || !text || !date || !time || !lenguage) {
            return NextResponse.json({
                message: "Faltan parámetros requeridos: 'to', 'subject' o 'text' o 'date' o 'time' o 'Lenguage'.",
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

        const emailClientMessage = generateMessage(
            name, 
            text, 
            time, 
            date, 
            lenguage === 'en' ? 'You just sent a new message!' : 'Nos enviaste un nuevo mensaje!', 
            lenguage, 
            true
        )

        const emailUsMessage = generateMessage(
            name, 
            text, 
            time, 
            date, 
            lenguage === 'en' ? 'New contact message' : 'Nuevo mensaje de contacto', 
            lenguage, 
            false
        )

        // Email enviado al cliente
        await transporter.sendMail({
            from: `AsNeed <${process.env.EMAIL_USER}>`,
            to,
            subject: lenguage === 'en' ? 'New appointment with AsNeed' : 'Cita con AsNeed',
            html: emailClientMessage
        })

        // Email enviado a nosotros
        await transporter.sendMail({
            from: `${name} <${to}>`,
            to: 'asyouneed1@gmail.com',
            subject: lenguage === 'en' ? 'New meeting arranged' : 'Nuevo cita reservada',
            html: emailUsMessage
        })

        return NextResponse.json({ message: "Correo enviado exitosamente", status: 200 })
    } catch (error) {
        console.log("error ", error)
        return NextResponse.json({ message: "Error al enviar el correo", status: 500 })
    }
}

