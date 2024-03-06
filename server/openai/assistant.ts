'use server'
import { client } from './client'

export async function getAssistants() {
  const assistants = await client.beta.assistants.list()
  return assistants.getPaginatedItems()
}

export async function getAssistant(assistantId: string) {
  const assistant = await client.beta.assistants.retrieve(assistantId)
  return assistant
}
