"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Success! Check your email to confirm your subscription.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-lg my-8">
      <h3 className="text-[16px] font-bold mb-2">
        Read more
      </h3>
      <p className="text-[14px] opacity-80 mb-6">
        Subscribe to get notified when I publish new content.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-4">
        <label htmlFor="email-input" className="sr-only">
          Email address
        </label>
        <input
          id="email-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          disabled={status === "loading" || status === "success"}
          className="flex h-10 w-full flex-1 rounded-md border border-input bg-background/50 px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          required
        />
        <Button 
          type="submit" 
          disabled={status === "loading" || status === "success" || !email}
          className="h-10 px-6"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </Button>
      </form>

      {message && (
        <div className={`mt-3 text-sm font-medium ${status === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
          {message}
        </div>
      )}
    </div>
  );
}
