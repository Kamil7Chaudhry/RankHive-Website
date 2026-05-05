import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENTS = ["usamamalik15023@gmail.com", "kamilmunir908@gmail.com"];

export async function POST(request: NextRequest) {
  const { name, company, email, goal, message } = await request.json();

  if (!name || !email || !goal) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <h2>New Contact Form Submission — RankHive</h2>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:15px;">
      <tr><td style="font-weight:bold;color:#555;">Name</td><td>${name}</td></tr>
      <tr><td style="font-weight:bold;color:#555;">Company</td><td>${company || "—"}</td></tr>
      <tr><td style="font-weight:bold;color:#555;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="font-weight:bold;color:#555;">Goal</td><td>${goal}</td></tr>
      <tr><td style="font-weight:bold;color:#555;vertical-align:top;">Message</td><td style="white-space:pre-wrap;">${message || "—"}</td></tr>
    </table>
  `;

  try {
    await transport.sendMail({
      from: process.env.SMTP_USER,
      to: RECIPIENTS,
      replyTo: email,
      subject: `New inquiry from ${name} — RankHive`,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
