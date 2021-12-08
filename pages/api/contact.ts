import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

interface INewMessage {
  email: string
  name: string
  message: string
  id?: object
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' })
      return
    }

    const newMessage: INewMessage = {
      email,
      name,
      message,
    }

    let client

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clastername}.si6a0.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

    try {
      client = await MongoClient.connect(connectionString)
    } catch (err) {
      res.status(500).json({ message: 'Could not connect to database' })
      return
    }

    const db = client.db()

    try {
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (err) {
      client.close()
      res.status(500).json({ message: 'Stored message failed!' })
      return
    }

    client.close()

    res
      .status(201)
      .json({ message: 'Successfully stored!', yourmessage: newMessage })
  }
}

export default handler
