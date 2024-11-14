'use client'

import { Message as MessageType, useAssistant } from 'ai/react'
import { Message } from './message'
import { cn } from '@/lib/utils'

export default function Chat({ assistantId }: { assistantId: string }) {
  const { status, error, messages, input, submitMessage, handleInputChange } =
    useAssistant({ api: `/api/assistant-stream/${assistantId}` })

  const pending = status === 'in_progress'
  return (
    <div className="mx-auto flex w-full flex-col gap-4 py-2 h-full">
      {error && <div className="text-red-500">{`${error}`}</div>}
      {messages.map((m: MessageType) => (
        <>
          <Message key={m.id} {...m} />
        </>
      ))}
      <div className="flex h-full justify-center">
        <form
          onSubmit={submitMessage}
          className="bottom-4 w-full max-w-md shadow-xl self-end pb-2.5"
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
    </div>
  )
}
