// utils/send-email.ts

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

export default async function sendEmail({ to, subject, html }: EmailPayload) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'DroneHQ <noreply@dronehq.io>', // make sure domain is verified in Resend
      to,
      subject,
      html,
    });

    if (error) {
      console.error('Resend API error:', error);
      throw new Error(error.message);
    }

    return data;
  } catch (err) {
    console.error('Failed to send email:', err);
    throw err;
  }
}
