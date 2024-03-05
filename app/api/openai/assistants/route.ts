import { getAssistants } from "@/functions/openai/get-assistants";
import { NextResponse } from "next/server";

export async function GET() {
  const assistants = await getAssistants();
  return NextResponse.json({ assistants });
}
