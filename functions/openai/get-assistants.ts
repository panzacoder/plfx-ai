import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function getAssistants() {
  const client = new OpenAI({});
  const assistants = await client.beta.assistants.list();
  return assistants.getPaginatedItems();
}
