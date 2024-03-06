import { Thread } from 'openai/resources/beta/threads/threads'
import { useLocalStorage } from 'usehooks-ts'

export function useThread(assistantId: string) {
  return useLocalStorage<Thread | null>(assistantId, null, {
    serializer: JSON.stringify,
    deserializer: JSON.parse,
    initializeWithValue: false
  })
}
