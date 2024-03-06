'use server'
import { client } from './client'

export async function getThread(threadId: string) {
  const thread = await client.beta.threads.retrieve(threadId)
  return thread
}

export async function createThread() {
  const thread = await client.beta.threads.create()
  return thread
}
