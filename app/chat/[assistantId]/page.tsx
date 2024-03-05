import OpenAI from "openai";

export default async function ChatPage({ params }) {
  const { assistantId } = params;

  const openai = new OpenAI();

  const thread = await openai.beta.threads.create();
}
