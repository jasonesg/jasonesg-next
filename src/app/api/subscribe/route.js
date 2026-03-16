import { NextResponse } from "next/server";

const KIT_BASE = "https://api.kit.com/v4";

export async function POST(request) {
  try {
    const { email, firstName } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const FORM_ID = process.env.CONVERTKIT_FORM_ID;
    const API_KEY = process.env.CONVERTKIT_API_KEY;

    if (!API_KEY || !FORM_ID) {
      console.error("Missing CONVERTKIT_API_KEY or CONVERTKIT_FORM_ID");
      return NextResponse.json(
        { error: "Subscription is not configured." },
        { status: 500 }
      );
    }

    const headers = {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": API_KEY,
    };

    // Step 1: Create or update subscriber (v4)
    const createRes = await fetch(`${KIT_BASE}/subscribers`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        email_address: email,
        first_name: firstName || undefined,
        state: "active",
      }),
    });

    const createData = await createRes.json();

    if (!createRes.ok) {
      console.error("Kit API create subscriber:", createRes.status, createData);
      return NextResponse.json(
        {
          error:
            createData?.errors?.[0] ||
            createData?.message ||
            "Could not create subscriber.",
        },
        { status: createRes.status }
      );
    }

    // Step 2: Add subscriber to form (v4)
    const addRes = await fetch(
      `${KIT_BASE}/forms/${FORM_ID}/subscribers`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          email_address: email,
          referrer: request.headers.get("referer") || undefined,
        }),
      }
    );

    const addData = await addRes.json();

    if (!addRes.ok) {
      console.error("Kit API add to form:", addRes.status, addData);
      return NextResponse.json(
        {
          error:
            addData?.errors?.[0] ||
            addData?.message ||
            "Could not add to form.",
        },
        { status: addRes.status }
      );
    }

    console.log("Kit v4 subscribe OK:", {
      form_id: FORM_ID,
      subscriber_id: addData?.subscriber?.id,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}
