import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server'

interface INewMessage {
  email: string
  name: string
  message: string
  id?: object
}

export async function POST(req: any, res: any) {
  const body = await req.json()
  const { email, name, message } = body
  if (
    !email ||
    !email.includes('@') ||
    !name ||
    name.trim() === '' ||
    !message ||
    message.trim() === ''
  ) {
    return NextResponse.json({ message: 'Invalid input' }, { status: 422 })
  }

  const newMessage: INewMessage = {
    email,
    name,
    message,
  }

  let client

  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clastername}.k5qdpca.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

  try {
    client = await MongoClient.connect(connectionString)
  } catch (err) {
    return NextResponse.json(
      { message: 'Could not connect to database' },
      { status: 500 }
    )
  }

  const db = client.db()

  try {
    const result = await db.collection('messages').insertOne(newMessage)
    newMessage.id = result.insertedId
  } catch (err) {
    client.close()
    return NextResponse.json(
      { message: 'Stored message failed!' },
      { status: 500 }
    )
  }

  client.close()
  return NextResponse.json(
    {
      message: 'Successfully stored!',
      yourmessage: newMessage,
    },
    { status: 201 }
  )
}
