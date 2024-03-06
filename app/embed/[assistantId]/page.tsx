import Image from 'next/image'
import { getAssistant } from '@/server/openai/assistant'
import { SavedThreads } from './saved-threads'

async function ChatClient({ params: { assistantId } }) {
  return (
    <div className="scroll flex h-full w-full flex-col gap-2 overflow-y-auto">
      <SavedThreads assistantId={assistantId} />
    </div>
  )
}

export default ChatClient

{
  /* {loading && ( */
}
{
  /*   <div */
}
{
  /*     className={`bg-gray-900 text-gray-100 self-start rounded-lg  px-3 py-2 max-w-sm`} */
}
{
  /*   > */
}
{
  /*     <div className="flex h-4 items-center gap-2"> */
}
{
  /*       <div className="bounce bounce1 rounded-full bg-slate-500 h-2 w-2" /> */
}
{
  /*       <div className="bounce bounce2 rounded-full bg-slate-500 h-2 w-2" /> */
}
{
  /*       <div className="bounce bounce3 rounded-full bg-slate-500 h-2 w-2" /> */
}
{
  /*     </div> */
}
{
  /*   </div> */
}
{
  /* )} */
}
