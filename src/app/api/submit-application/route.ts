import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

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

    if (!username || !email || !bestTime || !level) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Try to send email if configuration is available
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD && process.env.ADMIN_EMAIL) {
      try {
        console.log('Creating email transporter');
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
          debug: true,
        });

        console.log('Verifying transporter connection');
        await transporter.verify();
        console.log('Transporter verified successfully');

        console.log('Preparing email content');
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
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue with the application submission even if email fails
      }
    } else {
      console.log('Email configuration not available, skipping email notification');
    }

    // Return success even if email sending failed
    return NextResponse.json({ 
      success: true,
      message: 'Application submitted successfully'
    });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to submit application'
      },
      { status: 500 }
    );
  }
} 