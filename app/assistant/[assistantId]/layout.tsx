import { getAssistant } from '@/server/openai/assistant'
import Link from 'next/link'
import { Library } from 'lucide-react'

export default async function AssistantLayout({
  children,
  params: { assistantId }
}) {
  const assistant = await getAssistant(assistantId)

  return (
    <div className="flex h-screen w-screen flex-col gap-4 bg-background md:p-4">
      <div className={`flex justify-between rounded-xl bg-secondary p-4`}>
        <Link
          href={`/assistant/${assistantId}`}
          className="flex items-center gap-2"
        >
          <Library />
          <span className="font-semibold">{assistant.name}</span>
        </Link>
      </div>

      {children}
    </div>
  )
}
