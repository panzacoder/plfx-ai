'use server'
import { openai } from './client'

export async function getThread(threadId: string) {
  const thread = await openai.beta.threads.retrieve(threadId)
  return thread
}

export async function createThread() {
  const thread = await openai.beta.threads.create()
  return thread
}
