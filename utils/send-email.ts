// File: app/api/register/route.ts

import { NextResponse } from 'next/server';
import sendEmail from '../../../utils/send-email'; // <- Fixed import path

export async function POST(request: Request) {
  const { name, email, organization } = await request.json();

  const emailContent = `
    <h1>New Organization Registration</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Organization:</strong> ${organization}</p>
  `;

  try {
    await sendEmail({
      to: 'youradmin@email.com',
      subject: 'New DroneHQ Organization Registration',
      html: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
  }
}
