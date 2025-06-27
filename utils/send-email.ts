import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendRegistrationNotification({ name, email }: { name: string, email: string }) {
  try {
    const data = await resend.emails.send({
      from: 'DroneHQ.io <noreply@dronehq.io>',
      to: 'mtnr.fb@gmail.com',
      subject: 'New DroneHQ User Registration',
      html: `<p><strong>${name}</strong> just registered with email: <a href="mailto:${email}">${email}</a></p>`
    });

    console.log('Email sent:', data);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}
