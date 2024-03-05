"use client";
import { Context, createContext, useContext, useEffect, useState } from "react";
import OpenAI from "openai";

export const OpenAIContext: Context<OpenAI> = createContext(null);

export const OpenAIProvider = ({ children }) => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const client = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });
    setClient(client);
  }, []);

  return (
    <OpenAIContext.Provider value={client}>{children}</OpenAIContext.Provider>
  );
};

export const useOpenAI = () => {
  return useContext(OpenAIContext);
};
