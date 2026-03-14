import { NextRequest, NextResponse } from "next/server";

// This will be replaced by Upstash Redis once credentials are provided
let globalLikesMemory = 0; 

export async function GET() {
  // In a real implementation:
  // const likes = await redis.get("global_likes") || 0;
  return NextResponse.json({ likes: globalLikesMemory });
}

export async function POST(req: NextRequest) {
  const { amount } = await req.json();
  
  // Validation: ensure amount is reasonable (e.g., max 12 per request if needed)
  if (typeof amount !== 'number' || amount <= 0) {
    return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
  }

  // In a real implementation:
  // const newTotal = await redis.incrby("global_likes", amount);
  globalLikesMemory += amount;

  return NextResponse.json({ likes: globalLikesMemory });
}
