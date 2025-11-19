import { NextResponse } from 'next/server'

// simple in-memory store for demo persistence across reloads during dev
let serverOrders = []

export async function GET(){
  // return full sorted list
  serverOrders.sort((a,b)=> a.ts - b.ts)
  return NextResponse.json(serverOrders)
}

export async function POST(req){
  const data = await req.json()
  const exists = serverOrders.find(o=>o.userId === data.userId)
  if(!exists){
    serverOrders.push({ ...data, ts: Date.now() })
  }
  serverOrders.sort((a,b)=> a.ts - b.ts)
  return NextResponse.json({ success:true })
}
