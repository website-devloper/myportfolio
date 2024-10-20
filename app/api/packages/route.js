import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";
import { google } from 'googleapis';
import nodemailer from 'nodemailer';




const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const MY_EMAIL = process.env.MY_EMAIL;


const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });



export async function POST(req) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const body = await req.json();
    const { name, email, number, subject, message, pack } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
    }

    if (!pack) {
      const db = await createConnection();
      const sql = "INSERT INTO contacts (name, email, number, subject, message) VALUES (?, ?, ?, ?, ?)";
      const values = [name, email, number, subject, message];
      await db.query(sql, values);
    }
    else {
      const db = await createConnection();
      const sql = "INSERT INTO contactwithpackage (name, email, number, subject, message, selected_package) VALUES (?, ?, ?, ?, ?, ?)";
      const values = [name, email, number, subject, message, pack];
      await db.query(sql, values);
    }






    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: MY_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: MY_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${number}</p>
        <p><strong>Selected Package:</strong> ${pack}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <br>
        <p>Sent from: ${email}</p>
      `,
    };

    const result = await transport.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Form submitted and email sent successfully!' }), { status: 200 });


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email', error });
  }
}
