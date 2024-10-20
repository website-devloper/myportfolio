import { createConnection } from "@/lib/db";
import { google } from 'googleapis';
import nodemailer from 'nodemailer';




const ***REMOVED***
const ***REMOVED***
const ***REMOVED***
const ***REMOVED***

const ***REMOVED***

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });



export async function POST(req) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const body = await req.json();
    const { email } = body;

    if (!email) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
    }

   
      const db = await createConnection();
      const sql = "INSERT INTO newsletter ( email_adress) VALUES (?)";
      const value = [email];
      await db.query(sql, value);


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
      from: `"${email}" <${email}>`,
      to: MY_EMAIL,
      subject: `New Newsletter Registeration for ${email}`,
      html: `<h3><b><strong>Email:</strong> ${email}</b></h3>`,
    };

    const result = await transport.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Form submitted and email sent successfully!' }), { status: 200 });


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email', error });
  }
}
