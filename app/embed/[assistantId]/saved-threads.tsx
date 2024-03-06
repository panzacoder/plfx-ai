'use client'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useThread } from '@/hooks/use-thread'
import { createThread } from '@/server/openai/thread'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function SavedThreads({ assistantId }) {
  const router = useRouter()
  const [thread, setThread] = useThread(assistantId)

  const [isLoading, setIsLoading] = useState(false)

  const createThreadAndNavigate = async () => {
    setIsLoading(true)
    const thread = await createThread()
    setThread(thread)
    setIsLoading(false)
    router.push(`/embed/${assistantId}/${thread.id}`)
  }

  return (
    <div className="flex h-full w-full flex-row flex-wrap items-end gap-2">
      {isLoading ? (
        <>
          <Skeleton className="h-10 flex-1 rounded-lg" />
          <Skeleton className="bg-primary h-10 w-20  rounded-lg" />
        </>
      ) : (
        <>
          <Button className="flex-1" onClick={createThreadAndNavigate}>
            Start fresh
          </Button>
          <Button
            disabled={!thread}
            className="flex-1"
            variant="outline"
            onClick={() => router.push(`/embed/${assistantId}/${thread.id}`)}
          >
            Resume previous thread
          </Button>
        </>
      )}
    </div>
  )
}
