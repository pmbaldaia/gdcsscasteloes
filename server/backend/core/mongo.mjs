import { MongoClient, ServerApiVersion, GridFSBucket } from 'mongodb'

const globalKey = '__gdcssMongoClientPromise'

function getConfig() {
  const uri = process.env.MONGODB_URI
  const dbName = process.env.MONGODB_DB || 'gdcsscasteloes'
  if (!uri) {
    const error = new Error('MONGODB_URI não está configurada no ambiente')
    error.statusCode = 500
    throw error
  }
  return { uri, dbName }
}

export async function getMongoDb() {
  const { uri, dbName } = getConfig()
  if (!globalThis[globalKey]) {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
      maxPoolSize: 10,
      minPoolSize: 0,
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      maxIdleTimeMS: 45000,
    })
    globalThis[globalKey] = client.connect()
  }
  try {
    const client = await globalThis[globalKey]
    return client.db(dbName)
  } catch (error) {
    // Uma função Netlify pode manter-se quente. Se a primeira ligação falhar,
    // não reutilizamos para sempre a Promise rejeitada no pedido seguinte.
    delete globalThis[globalKey]
    throw error
  }
}

export async function getGridFsBucket() {
  const db = await getMongoDb()
  return new GridFSBucket(db, { bucketName: 'media' })
}
