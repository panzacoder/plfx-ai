import { getMessages } from "@/server/openai/messages";
import { createThread, getThread } from "@/server/openai/thread";
import { Message } from "./message";
import Image from "next/image";
import { addMessage } from "@/server/openai/messages";

export async function Thread({ threadId: existingThreadId, assistantId }: { threadId?: string, assistantId: string }) {

  const thread = existingThreadId ? await getThread(existingThreadId) : await createThread();
  const messages = await getMessages(thread.id);

  return (
    <>
      {messages.map((msg) => (
        <Message key={msg.id} {...msg} />
      ))}

      <form action={addMessage} className="flex gap-2 mt-auto w-full">
        <input type='hidden' name='assistantId' value={assistantId} />
        <input type='hidden' name='threadId' value={thread.id} />

        <input
          id="question"
          name="question"
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Ask a question"
          required
        />
        <button
          className=" bg-mySecondary hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center "
        >
          <Image height={20} width={20} src="/send.svg" alt="send" />
        </button>
      </form>
    </>
  )

}
