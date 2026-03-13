import { Redis } from "@upstash/redis";

const url = process.env.KV_REST_API_URL;
const token = process.env.KV_REST_API_TOKEN;

if (!url || !token) {
  console.warn("Upstash Redis environment variables are missing. Redis features will be disabled.");
}

export const redis = url && token 
  ? new Redis({ url, token }) 
  : null;
