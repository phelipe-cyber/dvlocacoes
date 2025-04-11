import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, serviceType } = await request.json();

    // Configurações SMTP do Hostinger
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // true para porta 465, false para outras portas
      auth: {
        user: 'contato@dvlocacoes.com.br', // substitua pelo email real
        pass: 'sua_senha_hostinger', // substitua pela senha real
      },
    });

    // Conteúdo do email
    const mailOptions = {
      from: `"Formulário de Contato" <contato@dvlocacoes.com.br>`,
      to: 'contato@dvlocacoes.com.br',
      subject: `Novo contato de ${name} - Tipo: ${serviceType}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        Tipo de Serviço: ${serviceType}
        Mensagem: ${message}
      `,
      html: `
        <h2>Novo contato via formulário</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Tipo de Serviço:</strong> ${serviceType}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    };

    // Enviar o email
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email enviado com sucesso', messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { success: false, message: 'Falha ao enviar email', error: String(error) },
      { status: 500 }
    );
  }
}
