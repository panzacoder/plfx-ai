import Chat from './assistant'

async function ChatClient({ params: { assistantId } }) {
  return (
    <div className="scroll flex h-full w-full flex-col gap-2 overflow-y-auto">
      <Chat assistantId={assistantId} />
    </div>
  )
}

export default ChatClient
