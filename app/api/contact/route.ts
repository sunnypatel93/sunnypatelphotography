import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const { name, phone, email, message } = body;

  try {
    await resend.emails.send({
      from: "Sunny Patel Photography <contact@sunnypatelphotography.com>",
      to: "contact@sunnypatelphotography.com",
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html: `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}