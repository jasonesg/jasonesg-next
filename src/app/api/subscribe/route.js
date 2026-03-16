import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, firstName } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const FORM_ID = process.env.CONVERTKIT_FORM_ID;
    const API_KEY = process.env.CONVERTKIT_API_KEY;
    const API_URL = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`;

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: API_KEY,
        email,
        first_name: firstName || '',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("ConvertKit API response:", response.status, data);
      return NextResponse.json(
        { error: data?.message || "Subscription failed." },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}
