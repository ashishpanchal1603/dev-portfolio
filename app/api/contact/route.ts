import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Validate incoming form fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // 2. Fallback check for missing Resend API key (prevents crashing if not deployed yet)
    if (!apiKey) {
      console.log("--------------------------------------------------");
      console.log("📩 NEW PORTFOLIO CONTACT SUBMISSION (SIMULATED):");
      console.log(`From: ${name} (${email})`);
      console.log(`Message: ${message}`);
      console.log("--------------------------------------------------");
      
      return NextResponse.json(
        {
          success: true,
          message: "Simulated submission successful. Add RESEND_API_KEY env variable to send real emails.",
        },
        { status: 200 }
      );
    }

    // 3. Send email using Resend
    const resend = new Resend(apiKey);
    
    // Note: The onboarding@resend.dev address allows sending emails to your registered Resend email
    // (ashishpanchal1609@gmail.com) without verifying a custom domain first.
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "ashishpanchal1609@gmail.com",
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e7; border-radius: 8px;">
          <h2 style="color: #6366f1; margin-top: 0;">New Message from Portfolio Website</h2>
          <hr style="border: 0; border-top: 1px solid #e4e4e7; margin: 20px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="margin-top: 24px;">
            <strong>Message:</strong>
            <div style="margin-top: 8px; padding: 16px; background-color: #f4f4f5; border-radius: 6px; border: 1px solid #e4e4e7; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #1f2937;">${message}</div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend delivery error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Contact API Handler error:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
