import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, email, mobile, profession } = data;

    if (!fullName || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    let bookings = [];
    let seatNumber = Math.floor(Math.random() * 1000) + 100; // Fallback random seat number

    try {
      // 1. Manage Seat Number & Storage
      const dataDir = path.join(process.cwd(), 'data');
      const bookingsFile = path.join(dataDir, 'bookings.json');
      
      // Ensure data directory exists
      try {
        await fs.access(dataDir);
      } catch {
        await fs.mkdir(dataDir, { recursive: true });
      }

      try {
        const fileData = await fs.readFile(bookingsFile, 'utf8');
        bookings = JSON.parse(fileData);
        seatNumber = bookings.length + 1;
      } catch (e) {
        seatNumber = 1; // First booking if file is empty
      }

      const newBooking = {
        seatNumber,
        fullName,
        email,
        mobile,
        profession,
        timestamp: new Date().toISOString()
      };

      bookings.push(newBooking);
      await fs.writeFile(bookingsFile, JSON.stringify(bookings, null, 2));
    } catch (fsError) {
      console.warn("Could not save to local filesystem (likely a serverless read-only environment). Continuing with email only.");
    }

    // 2. Setup Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'contact@digitalghuru.in',
        pass: 'lcrp-mcnm-n3ba-mw5j',
      },
    });

    // 3. Send Email to User
    const mailOptions = {
      from: '"Digital Ghuru" <contact@digitalghuru.in>',
      to: email,
      subject: `Your Seat is Confirmed! (Seat #${seatNumber})`,
      text: `Hi ${fullName},\n\nYour seat for the AI & The Future Workshop has been successfully reserved!\n\nYour Seat Number is: #${seatNumber}\n\nWe look forward to seeing you there.\n\nBest,\nDigital Ghuru`,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #1e293b;">You're In, ${fullName}! 🎉</h2>
          <p style="color: #475569; font-size: 16px;">Your registration for the <strong>AI & The Future Workshop</strong> is confirmed.</p>
          <div style="background: linear-gradient(to right, #FFB800, #FF5C00); color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 30px 0;">
            <p style="margin: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Your Official Seat Number</p>
            <h1 style="margin: 10px 0 0 0; font-size: 48px;">#${seatNumber}</h1>
          </div>
          <p style="color: #475569; font-size: 16px;">We can't wait to show you how AI is going to transform the future of work and how you can take advantage of it.</p>
          <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 30px 0;" />
          <p style="color: #94a3b8; font-size: 12px;">This is an automated message. Please do not reply.</p>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      
      // 4. Send Notification Email to Admin
      const adminMailOptions = {
        from: '"Workshop System" <contact@digitalghuru.in>',
        to: 'contact@digitalghuru.in', // The admin email address
        subject: `New Registration! Seat #${seatNumber} booked by ${fullName}`,
        text: `New Registration Details:\n\nName: ${fullName}\nEmail: ${email}\nMobile: ${mobile}\nProfession: ${profession}\nSeat Number: ${seatNumber}`,
        html: `
          <div style="font-family: sans-serif; max-w: 600px; padding: 20px;">
            <h2 style="color: #16a34a;">New Registration! 🎉</h2>
            <p>A new user has just registered for the workshop.</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr><th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Field</th><th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Value</th></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Seat #</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${seatNumber}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${fullName}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Mobile</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${mobile}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Profession</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${profession}</td></tr>
            </table>
          </div>
        `,
      };

      await transporter.sendMail(adminMailOptions);
    } catch (emailError) {
      console.error("Email sending failed. Proceeding with registration anyway:", emailError);
    }

    return NextResponse.json({ 
      success: true, 
      seatNumber, 
      message: 'Registration successful!'
    });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
