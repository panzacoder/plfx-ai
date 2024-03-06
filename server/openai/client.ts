import 'server-only'
import 'openai/shims/web'
import OpenAI from 'openai'

export const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  fetch: async (url: RequestInfo, init?: RequestInit): Promise<Response> => {
    console.log('OpenAI API request: ', url, init)
    const response = await fetch(url, init)
    return response
  }
})
