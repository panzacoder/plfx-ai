import { AssistantResponse } from 'ai'
import OpenAI from 'openai'

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || ''
})

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

export async function POST(
  req: Request,
  { params }: { params: { assistantId: string } }
) {
  // Parse the request body
  const input: {
    threadId: string
    message: string
    assistantId: string
  } = await req.json()

  // Create a thread if needed
  const threadId = input.threadId ?? (await openai.beta.threads.create({})).id

  // Add a message to the thread
  const createdMessage = await openai.beta.threads.messages.create(threadId, {
    role: 'user',
    content: input.message
  })

  return AssistantResponse(
    { threadId, messageId: createdMessage.id },
    async ({ forwardStream, sendMessage, sendDataMessage }) => {
      // Run the assistant on the thread
      const runStream = openai.beta.threads.runs.stream(threadId, {
        assistant_id: params.assistantId
      })

      // forward run status would stream message deltas
      await forwardStream(runStream)
    }
  )
}
