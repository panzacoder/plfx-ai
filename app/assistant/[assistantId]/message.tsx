import React from 'react'
import { tv } from 'tailwind-variants'
import { Markdown } from './markdown'
import { Message as MessageType } from 'ai/react'

const chatVariants = tv({
  slots: {
    container: 'max-w-sm self-start rounded-lg bg-gray-900 px-3 py-2',
    label: 'font-semibold',
    message: 'prose',
    data: 'hidden'
  },
  variants: {
    role: {
      assistant: {
        container: `text-gray-100`,
        message: 'prose-invert'
      },
      user: {
        container: `self-end border-2 bg-gray-100 text-end text-gray-900`,
        message: '',
        label: 'hidden'
      },
      system: {
        container: `text-red-500`,
        message: ''
      },
      function: {
        container: ` text-blue-500`,
        message: ''
      },
      data: {
        container: `text-orange-500`,
        message: 'hidden',
        data: 'flex'
      },
      tool: {
        container: `text-purple-500`,
        message: ''
      }
    }
  }
})

export const Message = ({ content, role, data }: MessageType) => {
  const styles = chatVariants({
    role
  })

  return (
    <div className={styles.container()}>
      <p className={styles.label()}>{`${role}`}</p>

      {data && (
        <div className={styles.data()}>
          {/* here you would provide a custom display for your app-specific data:*/}
          (data as any).description
          <br />
          <pre className={'bg-gray-200'}>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      <div className={styles.message()}>
        <Markdown markdown={content} />
      </div>
    </div>
  )
}
