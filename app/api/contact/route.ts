import { NextResponse } from "next/server";

export const runtime = "nodejs";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function POST(req: Request) {
  let body: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").toString().trim();
  const email = (body.email ?? "").toString().trim();
  const phone = (body.phone ?? "").toString().trim();
  const message = (body.message ?? "").toString().trim();

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Name, email and phone are required." },
      { status: 400 }
    );
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json(
      { error: "Server not configured — access key missing." },
      { status: 500 }
    );
  }

  const payload = {
    access_key: accessKey,
    from_name: "NEXIA website",
    subject: `New NEXIA lead — ${name}`,
    name,
    email,
    phone,
    message: message || "(no message)",
    reply_to: email,
    botcheck: ""
  };

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = (await res.json().catch(() => null)) as
      | { success?: boolean; message?: string }
      | null;

    if (!res.ok || !data?.success) {
      return NextResponse.json(
        { error: data?.message ?? "Delivery failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Network error contacting email provider." },
      { status: 502 }
    );
  }
}
