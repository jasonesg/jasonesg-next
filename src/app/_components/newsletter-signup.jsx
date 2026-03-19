"use client";

import { useState } from "react";

export function NewsletterSignup({ location = "blog" }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, source: location }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }
      
      setStatus("success");
      setEmail("");
      setFirstName("");
    } catch (error) {
      console.error("Newsletter signup error:", error);
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="w-full border border-border rounded-lg p-6 my-8 bg-background/50 backdrop-blur-sm">
      <h3 className="text-[16px] font-bold mb-2">Stay updated</h3>
      <p className="text-[14px] opacity-80 mb-4">Subscribe to get notified when I publish new content.</p>
      
      {status === "success" ? (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4">
          <p className="text-green-800 dark:text-green-300 font-medium">Thanks for subscribing!</p>
          <p className="text-green-700 dark:text-green-400 text-sm mt-1">Check your inbox to confirm your subscription.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-muted-foreground mb-1">
                First name (optional)
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your name"
                className="w-full px-3 py-2 rounded-md border border-input bg-background"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-3 py-2 rounded-md border border-input bg-background"
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            disabled={status === "loading"}
            className="w-full px-4 py-2.5 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity disabled:opacity-70 font-medium"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
          
          {status === "error" && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-3 mt-3">
              <p className="text-red-600 dark:text-red-400 text-sm">{errorMessage}</p>
            </div>
          )}
          
          <p className="text-xs text-muted-foreground mt-3">
            I respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  );
}