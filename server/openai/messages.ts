'use server'
import { revalidatePath } from 'next/cache'
import { client } from './client'
import { cache } from 'react'
import { MessageCreateParams } from 'openai/resources/beta/threads/messages/messages'
import { sleep } from 'openai/core'

export const getMessages = async (threadId: string) => {
  const messages = await client.beta.threads.messages.list(threadId, {
    order: 'asc'
  })
  return messages.getPaginatedItems()
}

export async function addMessage(formData: FormData) {
  'use server'

  const assistantId = formData.get('assistantId') as string
  const threadId = formData.get('threadId') as string

  const content = formData.get('question') as string

  console.log('msg', content)

  const message = await client.beta.threads.messages.create(threadId, {
    role: 'user',
    content
  })

  let run = await client.beta.threads.runs.create(threadId, {
    assistant_id: assistantId
  })

  const finishStates = ['completed', 'failed', 'expired']
  while (!finishStates.includes(run.status)) {
    sleep(200)

    run = await client.beta.threads.runs.retrieve(threadId, run.id)
  }

  revalidatePath(`embed/${assistantId}`)
}
