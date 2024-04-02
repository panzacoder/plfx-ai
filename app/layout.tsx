import { Montserrat } from 'next/font/google'
import './globals.css'
import { OpenAIProvider } from '@/components/open-ai/provider'
import { AI } from './_actions/openai/messages'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'myAssistant',
  description: 'Create your own GPT Assistant powered by OpenAI'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <OpenAIProvider>
          <AI>{children}</AI>
        </OpenAIProvider>
      </body>
    </html>
  )
}
