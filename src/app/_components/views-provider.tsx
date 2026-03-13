"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ViewsContext = createContext<Record<string, number>>({});

export function useViews() {
  return useContext(ViewsContext);
}

export function ViewsProvider({ children }: { children: React.ReactNode }) {
  const [views, setViews] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/views")
      .then((res) => res.json())
      .then((data) => setViews(data))
      .catch((err) => console.error("Failed to fetch views:", err));
  }, []);

  return (
    <ViewsContext.Provider value={views}>
      {children}
    </ViewsContext.Provider>
  );
}
