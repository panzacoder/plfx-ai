import { getMessages } from '@/server/openai/messages'
import { getThread } from '@/server/openai/thread'
import { Message } from './message'
import Image from 'next/image'
import { addMessage } from '@/server/openai/messages'

export default async function ThreadPage({
  params: { threadId, assistantId }
}) {
  const thread = await getThread(threadId)
  const messages = await getMessages(thread.id)

  console.log('messages', messages)
  return (
    <>
      {messages.map((msg) => (
        <Message key={msg.id} {...msg} />
      ))}

      <form action={addMessage} className="mt-auto flex w-full gap-2">
        <input type="hidden" name="assistantId" value={assistantId} />
        <input type="hidden" name="threadId" value={thread.id} />

        <input
          id="question"
          name="question"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 "
          placeholder="Ask a question"
          required
        />
        <button className=" w-full rounded-lg bg-mySecondary px-4 py-2.5 text-center text-sm font-medium hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto ">
          <Image height={20} width={20} src="/send.svg" alt="send" />
        </button>
      </form>
    </>
  )
}
