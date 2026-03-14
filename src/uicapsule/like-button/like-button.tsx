"use client";

import React, { useRef, useState, useEffect } from "react";
import NumberFlow from "@number-flow/react";

export const LikeButton = ({ slug = "default" }: { slug?: string }) => {
  const [totalLikes, setTotalLikes] = useState(0);
  const [userClicks, setUserClicks] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const iconButtonRef = useRef<null | HTMLButtonElement>(null);

  const CLICK_CAP = 67;

  // Load session and global data on mount
  useEffect(() => {
    // 1. Session tracking from localStorage
    const saved = localStorage.getItem(`likes_${slug}`);
    if (saved) {
      const { count } = JSON.parse(saved);
      setUserClicks(count);
      setIsLiked(count > 0);
    }

    // 2. Initial fetch of global total
    fetch("/api/likes")
      .then((res) => res.json())
      .then((data) => setTotalLikes(data.likes || 0))
      .catch((err) => console.error("Failed to fetch global likes:", err));
  }, [slug]);

  const toggleLike = async () => {
    if (userClicks >= CLICK_CAP) return;

    // Optimistic Update
    const newClickCount = userClicks + 1;
    setUserClicks(newClickCount);
    setTotalLikes((prev) => prev + 1);
    setIsLiked(true);

    // Persist session cap locally
    localStorage.setItem(`likes_${slug}`, JSON.stringify({ count: newClickCount }));

    // Sync with global database
    try {
      const response = await fetch("/api/likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 1, slug }),
      });
      const data = await response.json();
      // Ensure local state matches the absolute global state from server
      setTotalLikes(data.likes);
    } catch (err) {
      console.error("Failed to sync likes:", err);
      // Optional: rollback optimistic update on error? 
      // For "claps", we usually just ignore errors to keep it smooth.
    }
  };

  const isCapped = userClicks >= CLICK_CAP;

  return (
    <button
      ref={iconButtonRef}
      type="button"
      disabled={isCapped}
      className={`relative flex h-8 items-center gap-3 rounded-lg py-1 pr-3 transition-opacity ${
        isCapped ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:opacity-80"
      }`}
      onClick={toggleLike}
    >
      <div className="relative flex items-center justify-center translate-y-[0.5px]">
        <svg
          className={`${isLiked ? "text-red-500" : "text-inherit"} transition-colors duration-200`}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="currentColor"
        >
          <path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z" />
        </svg>
      </div>
      <span className="font-medium text-sm">
        <NumberFlow value={totalLikes} />
      </span>
      {isCapped && (
        <span className="text-[10px] uppercase tracking-wider opacity-60 font-bold ml-1">
          MAX
        </span>
      )}
    </button>
  );
};
