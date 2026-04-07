import nodemailer from 'nodemailer'

export async function POST(req) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return Response.json({ error: 'All fields required' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;padding:24px;border:1px solid #e5e7eb;border-radius:12px;">
          <h2 style="margin:0 0 16px;color:#111827;">New Portfolio Message</h2>
          <p style="margin:0 0 8px;"><strong>Name:</strong> ${name}</p>
          <p style="margin:0 0 8px;"><strong>Email:</strong> ${email}</p>
          <p style="margin:0 0 8px;"><strong>Message:</strong></p>
          <p style="background:#f9fafb;padding:12px;border-radius:8px;margin:0;">${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    })
  } finally {
    transporter.close()
  }

  return Response.json({ success: true })
}