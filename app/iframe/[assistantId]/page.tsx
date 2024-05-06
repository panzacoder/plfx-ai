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
          src={`http://localhost:3000/assistant/${assistantId}`}
        />
      </div>
    </div>
  )
}
