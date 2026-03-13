import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!redis) {
    return NextResponse.json({ views: 0 });
  }
  const views = (await redis.get<number>(`views:${slug}`)) ?? 0;
  return NextResponse.json({ views });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!redis) {
    return NextResponse.json({ views: 0 });
  }
  const views = await redis.incr(`views:${slug}`);
  return NextResponse.json({ views });
}
