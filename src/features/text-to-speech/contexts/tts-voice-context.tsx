"use client";

import { createContext, useContext } from "react";

import type { AppRouter } from "@/trpc/routers/_app";
import type { inferRouterOutputs } from "@trpc/server";

type TTSVoiceItem =
  inferRouterOutputs<AppRouter>["voices"]["getAll"]["custom"][number];
// This way we can get the type of custom voice, inferRouterOutput will drill through app router it will select the route voice go inside get all procedure and get the returned value of custom.
// The [number] tells that get any item from the array as voices is an array of voice and it will get the type of that single item.




interface TTSVoicesContextValue {
  customVoices: TTSVoiceItem[];
  systemVoices: TTSVoiceItem[];
  allVoices: TTSVoiceItem[];
}

const TTSVoicesContext = createContext<TTSVoicesContextValue | null>(null);

export function TTSVoicesProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: TTSVoicesContextValue;
}) {
  return (
    <TTSVoicesContext.Provider value={value}>
      {children}
    </TTSVoicesContext.Provider>
  );
}

export function useTTSVoices() {
  const context = useContext(TTSVoicesContext);

  if (!context) {
    throw new Error("useTTSVoices must be used within a TTSVoicesProvider");
  }

  return context;
}
