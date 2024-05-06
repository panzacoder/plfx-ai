export default function IFramePage({
  params: { assistantId }
}: {
  params: { assistantId: string }
}) {
  return (
    <div className="grid h-screen w-full place-items-center bg-blue-900">
      <div className="bg-white p-16">
        <iframe
          width="870px"
          height="532px"
          src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/assistant/${assistantId}`}
        />
      </div>
    </div>
  )
}
