import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest): Promise<Response> {
  const data = await request.json()
  console.log(data)
  return new Response('Hello, Next.js!')
}
