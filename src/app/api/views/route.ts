import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function GET() {
  if (!redis) {
    return NextResponse.json({});
  }
  const keys = await redis.keys("views:*");
  if (keys.length === 0) {
    return NextResponse.json({});
  }

  const values = await redis.mget<number[]>(...keys);
  
  const views: Record<string, number> = {};
  keys.forEach((key, index) => {
    const slug = key.replace("views:", "");
    views[slug] = values[index] ?? 0;
  });

  return NextResponse.json(views);
}
