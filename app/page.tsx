import Image from 'next/image'
import Link from 'next/link'
import { getAssistants } from '@/server/openai/assistant'

async function Home() {
  const assistants = await getAssistants()
  return (
    <main className="bg-myBg flex min-h-screen  flex-col ">
      <div
        id="header"
        className="flex flex-wrap items-center justify-between gap-2 bg-slate-900 px-2 py-4 text-white md:px-8  "
      >
        <div className="flex items-center gap-2">
          <Image src="/assistant.svg" height={50} width={50} alt="logo" />
          <h6 className="  text-3xl font-semibold"> Open Custom GPT </h6>
        </div>
      </div>
      <div className=" flex max-w-3xl flex-col gap-5 px-2 py-6 text-gray-800 md:px-8">
        <div className=" flex flex-wrap gap-4">
          {assistants.map((assistant) => (
            <Link href={'/assistant/' + assistant.id} key={assistant.id}>
              <div className=" flex h-16 min-w-[20rem] max-w-xl cursor-pointer items-center gap-4 rounded-xl border-2 px-4 py-2">
                <div className=" h-2 w-2 rounded-full bg-slate-500" />
                <div className=" flex flex-col">
                  <div className=" text-base font-medium">{assistant.name}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home
