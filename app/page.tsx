import Image from "next/image";
import Link from "next/link";
import { getAssistants } from "@/functions/openai/get-assistants";

async function Home() {
    const assistants = await getAssistants();
    return (
        <main className="flex min-h-screen flex-col  bg-myBg ">
            <div
                id="header"
                className="flex items-center justify-between flex-wrap gap-2 bg-slate-900 text-white px-2 md:px-8 py-4  "
            >
                <div className="flex items-center gap-2">
                    <Image src="/assistant.svg" height={50} width={50} alt="logo" />
                    <h6 className="  text-3xl font-semibold"> Open Custom GPT </h6>
                </div>
            </div>
            <div className=" max-w-3xl px-2 md:px-8 py-6 flex flex-col gap-5 text-gray-800">
                <div className=" flex flex-wrap gap-4">
                    {assistants.map((assistant) => (
                        <Link href={"/embed/" + assistant.id} key={assistant.id}>
                            <div className=" border-2 px-4 py-2 flex gap-4 items-center rounded-xl h-16 min-w-[20rem] max-w-xl cursor-pointer">
                                <div className=" rounded-full bg-slate-500 h-2 w-2" />
                                <div className=" flex flex-col">
                                    <div className=" text-base font-medium">{assistant.name}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Home;
