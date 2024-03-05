import { Montserrat } from "next/font/google";
import "./globals.css";
import MainComponent from "@/components/MainComponent";
import { OpenAIProvider } from "@/components/open-ai/provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "myAssistant",
  description: "Create your own GPT Assistant powered by OpenAI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <OpenAIProvider>
          <MainComponent children={children} />
        </OpenAIProvider>
      </body>
    </html>
  );
}
