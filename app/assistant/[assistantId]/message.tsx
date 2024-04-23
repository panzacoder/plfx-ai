import React from 'react'
import { tv } from 'tailwind-variants'
import { Markdown } from './markdown'
import { Message as MessageType } from 'ai/react'

const chatVariants = tv({
  base: `max-w-sm rounded-lg px-3 py-2`,
  variants: {
    role: {
      assistant: `prose-dark self-start bg-gray-900 text-gray-100`,
      user: `prose self-end border-2 bg-gray-100 text-gray-900`,
      system: `prose-dark self-start bg-gray-900 text-red-500`,
      function: `prose-dark self-start bg-gray-900 text-blue-500`,
      data: `prose-dark self-start bg-gray-900 text-orange-500`,
      tool: `prose-dark self-start bg-gray-900 text-purple-500`
    }
  }
})

export const Message = ({ content, role, data }: MessageType) => {
  return (
    <div
      className={chatVariants({
        role
      })}
    >
      <strong>{`${role}`}</strong>
      {role === 'data' ? (
        <>
          {/* here you would provide a custom display for your app-specific data:*/}
          {(data as any).description}
          <br />
          <pre className={'bg-gray-200'}>{JSON.stringify(data, null, 2)}</pre>
        </>
      ) : (
        <div className="whitespace-pre-wrap">
          <Markdown markdown={content} />
        </div>
      )}
    </div>
  )
}
