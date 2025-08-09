import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { createClient } = await import("@supabase/supabase-js");
    const { Resend } = await import("resend");
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL; // e.g. no-reply@yourdomain.com (must be verified in Resend)
    
    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json({ error: "Missing env vars" }, { status: 500 });
    }
    
    const { email } = await request.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const isValidEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    if (!isValidEmail) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey, { auth: { persistSession: false } });
    
    const { error } = await supabase.from("waitlist").insert({ email });
    
    if (error) {
      if ((error as any).code === "23505") {
        return NextResponse.json({ ok: true, duplicate: true });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    // Send welcome email (best-effort)
    if (resendApiKey && fromEmail) {
      try {
        const resend = new Resend(resendApiKey);
        const html = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111; line-height: 1.6;">
            <h2 style="margin: 0 0 12px 0;">Welcome to RateMe 👋</h2>
            <p>Hey, I'm <strong>Timo</strong>, founder of <strong>RateMe</strong>. Thanks for joining the waitlist!</p>
            <p>We're kicking off early testing soon. <strong>The first 100 people</strong> who test and share feedback get <strong>1 month of Premium for free</strong> when we launch.</p>
            <p>You'll receive an invite as soon as your spot opens. Stay tuned!</p>
            <p style="margin-top: 16px;">— Timo<br/>Founder, RateMe</p>
          </div>`;
        await resend.emails.send({
          from: fromEmail,
          to: email,
          subject: "Welcome to RateMe — You're on the waitlist!",
          html,
        });
      } catch (mailErr) {
        console.error("Resend send error:", mailErr);
        // Do not fail the request if email sending fails
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Bad request" }, { status: 400 });
  }
}

export async function GET() {
  const hasUrl = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const hasService = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);
  return NextResponse.json({ ok: true, env: { NEXT_PUBLIC_SUPABASE_URL: hasUrl, SUPABASE_SERVICE_ROLE_KEY: hasService } });
}