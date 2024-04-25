'use client'

import { Message as MessageType, useAssistant } from 'ai/react'
import { Message } from './message'
import { cn } from '@/lib/utils'

export default function Chat({ assistantId }) {
  const { status, error, messages, input, submitMessage, handleInputChange } =
    useAssistant({ api: `/api/assistant-stream/${assistantId}` })

  const pending = status === 'in_progress'
  return (
    <div className="mx-auto flex w-full flex-col gap-4 py-2">
      {error && <div className="text-red-500">{`${error}`}</div>}
      {messages.map((m: MessageType) => (
        <>
          <Message key={m.id} {...m} />
        </>
      ))}

      <form
        onSubmit={submitMessage}
        className="fixed bottom-4 w-full max-w-md self-center shadow-xl"
      >
        <input
          className={cn(
            'w-full rounded border border-gray-300 bg-card p-2',
            pending && 'animate-pulse bg-muted-foreground'
          )}
          disabled={pending}
          value={input}
          placeholder={
            pending
              ? 'Looking for the answer...'
              : 'What kind of questions can I ask?'
          }
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
