'use client'

import { Message as MessageType, useAssistant } from 'ai/react'
import { Message } from './message'

export default function Chat({ assistantId }) {
  const { status, error, messages, input, submitMessage, handleInputChange } =
    useAssistant({ api: `/api/assistant-stream/${assistantId}` })

  return (
    <div className="stretch mx-auto flex w-full max-w-xl flex-col py-2">
      {error && <div className="text-red-500">{`${error}`}</div>}
      {messages.map((m: MessageType) => (
        <>
          <Message key={m.id} {...m} />
        </>
      ))}

      {status === 'in_progress' && (
        <div className="mb-8 h-8 w-full max-w-md animate-pulse rounded-lg bg-gray-300 p-2 dark:bg-gray-600" />
      )}

      <form
        onSubmit={submitMessage}
        className="fixed bottom-8 w-full max-w-md self-center rounded border border-gray-300 p-2 shadow-xl"
      >
        <input
          className="w-full"
          disabled={status !== 'awaiting_message'}
          value={input}
          placeholder="What kind of questions can I ask?"
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
