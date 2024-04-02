'use server'
import { openai } from './client'

export async function getAssistants() {
  const assistants = await openai.beta.assistants.list()
  return assistants.getPaginatedItems()
}

export async function getAssistant(assistantId: string) {
  const assistant = await openai.beta.assistants.retrieve(assistantId)
  return assistant
}
