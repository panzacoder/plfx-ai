import { getAssistants } from "@/server/openai/assistant";
import { NextResponse } from "next/server";

export async function GET() {
  const assistants = await getAssistants();
  return NextResponse.json({ assistants });
}
