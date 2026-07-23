import { getDb } from "../../../db";
import { inquiries } from "../../../db/schema";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
      website?: string;
    };

    if (payload.website) return Response.json({ ok: true }, { status: 201 });

    const name = payload.name?.trim() ?? "";
    const email = payload.email?.trim().toLowerCase() ?? "";
    const message = payload.message?.trim() ?? "";

    if (!name || name.length > 120) return Response.json({ error: "Enter a valid name." }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 254) return Response.json({ error: "Enter a valid email." }, { status: 400 });
    if (!message || message.length > 3000) return Response.json({ error: "Enter a message under 3,000 characters." }, { status: 400 });

    const db = getDb();
    await db.insert(inquiries).values({ name, email, message });
    return Response.json({ ok: true }, { status: 201 });
  } catch {
    return Response.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}
