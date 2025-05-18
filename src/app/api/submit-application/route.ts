import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  console.log('API route started');
  try {
    const formData = await request.formData();
    console.log('Form data received:', {
      username: formData.get('username'),
      email: formData.get('email'),
      level: formData.get('level'),
      bestTime: formData.get('bestTime'),
      hasProof: !!formData.get('proof')
    });

    const username = formData.get('username');
    const email = formData.get('email');
    const bestTime = formData.get('bestTime');
    const level = formData.get('level');
    const proof = formData.get('proof') as File;

    // Debug environment variables
    console.log('Email config:', {
      user: process.env.EMAIL_USER,
      hasPassword: !!process.env.EMAIL_PASSWORD,
      adminEmail: process.env.ADMIN_EMAIL
    });

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing email configuration');
      throw new Error('Email configuration is missing');
    }

    console.log('Creating email transporter');
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      debug: true, // Enable debug logging
    });

    console.log('Verifying transporter connection');
    // Verify the connection configuration
    await transporter.verify();
    console.log('Transporter verified successfully');

    console.log('Preparing email content');
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Leaderboard Application - Level ${level}`,
      html: `
        <h2>New Leaderboard Application</h2>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Level:</strong> ${level}</p>
        <p><strong>Best Time:</strong> ${bestTime}</p>
        <p><strong>Proof File:</strong> ${proof?.name}</p>
        <p><strong>Note:</strong> The proof file was too large to attach. Please request the file directly from the applicant.</p>
      `,
    };

    console.log('Sending email');
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send application' },
      { status: 500 }
    );
  }
} 