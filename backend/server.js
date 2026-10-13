// backend/server.js
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

/* -------------------------------------------------------------------------- */
/*  CONTACT FORM ENDPOINT — aligned with Contact.jsx                          */
/* -------------------------------------------------------------------------- */
app.post('/api/contact', async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      phone,
      enquiryType,
      projectDetails,
    } = req.body;

    /* Basic server-side validation */
    if (!name || !email || !projectDetails) {
      return res.status(400).json({
        message: 'Missing required fields: name, email, projectDetails',
      });
    }

    /* Build the email HTML */
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; color: #111;">
        <h2 style="color: #ea580c; margin-bottom: 8px;">New Contact Enquiry</h2>
        <p style="color: #666; margin-top: 0; font-size: 13px;">
          Received on ${new Date().toLocaleString('en-IN', {
            dateStyle: 'medium',
            timeStyle: 'short',
          })}
        </p>

        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />

        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 160px;">Name</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email</td>
            <td style="padding: 8px 0;">
              <a href="mailto:${email}" style="color: #ea580c;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Company</td>
            <td style="padding: 8px 0;">${company || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone</td>
            <td style="padding: 8px 0;">${phone || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Enquiry Type</td>
            <td style="padding: 8px 0;">
              <span style="background: #fff7ed; color: #c2410c; padding: 3px 10px; border-radius: 4px; font-weight: bold; font-size: 12px;">
                ${enquiryType || 'General'}
              </span>
            </td>
          </tr>
        </table>

        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />

        <h3 style="margin-bottom: 8px;">Project Details</h3>
        <p style="white-space: pre-line; line-height: 1.6; color: #333;">
          ${projectDetails}
        </p>
      </div>
    `;

    /* Send the email via Resend */
    await resend.emails.send({
      from: 'Praxora Robotics <onboarding@resend.dev>',
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Enquiry — ${enquiryType || 'Contact'} — ${name}`,
      html,
    });

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({
      message: 'Error sending message',
      error: error.message,
    });
  }
});

/* -------------------------------------------------------------------------- */
/*  SERVER                                                                    */
/* -------------------------------------------------------------------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));