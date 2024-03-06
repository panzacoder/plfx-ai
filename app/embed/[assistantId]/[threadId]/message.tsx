import {
  MessageContentImageFile,
  MessageContentText,
  ThreadMessage
} from 'openai/resources/beta/threads/messages/messages'
import React from 'react'
import { tv } from 'tailwind-variants'
import { Markdown } from './markdown'

const chatVariants = tv({
  variants: {
    role: {
      assistant: `prose-dark self-start bg-gray-900 text-gray-100`,
      user: `prose self-end border-2 bg-gray-100 text-gray-900`
    }
  }
})

export const Message = ({ content, role }: ThreadMessage) => {
  return (
    <div
      className={chatVariants({
        role,
        className: 'max-w-sm rounded-lg px-3 py-2'
      })}
    >
      {content.map((msg, index) => {
        if (msg.type === 'text') {
          msg satisfies MessageContentText
          return <Markdown key={index} markdown={msg.text.value} />
        } else {
          msg satisfies MessageContentImageFile
          return <div>image: {msg.image_file.file_id}</div>
        }
      })}
    </div>
  )
}
