import crypto from 'node:crypto'
import { getMongoDb } from './mongo.mjs'

const indexedCollections = new Set()

async function collectionFor(resource) {
  const db = await getMongoDb()
  const collection = db.collection(resource)

  if (!indexedCollections.has(resource)) {
    const indexes = await collection.indexes().catch(() => [])
    const hasIdIndex = indexes.some(index => Object.keys(index.key || {}).length === 1 && index.key?.id === 1)
    if (!hasIdIndex) await collection.createIndex({ id: 1 }, { unique: true, sparse: true })
    indexedCollections.add(resource)
  }

  return collection
}

const clean = (row) => {
  if (!row) return null
  const { _id, ...data } = row
  return data
}

export function createMongoRepository(resource) {
  return {
    async readAll() {
      const collection = await collectionFor(resource)
      return (await collection.find({}).toArray()).map(clean)
    },
    async findById(id) {
      const collection = await collectionFor(resource)
      return clean(await collection.findOne({ id: String(id) }))
    },
    async create(payload) {
      const collection = await collectionFor(resource)
      const now = new Date().toISOString()
      const item = { ...payload, id: String(payload.id ?? crypto.randomUUID()), createdAt: payload.createdAt ?? now, updatedAt: now }
      await collection.insertOne(item)
      return clean(item)
    },
    async update(id, payload) {
      const collection = await collectionFor(resource)
      const current = await collection.findOne({ id: String(id) })
      if (!current) return null
      const { _id, id: ignoredId, entityType: ignoredType, ...safePayload } = payload || {}
      await collection.updateOne({ id: String(id) }, { $set: { ...safePayload, updatedAt: new Date().toISOString() }, $unset: { entityType: '' } })
      return clean(await collection.findOne({ id: String(id) }))
    },
    async remove(id) {
      const collection = await collectionFor(resource)
      const result = await collection.deleteOne({ id: String(id) })
      return result.deletedCount > 0
    },
  }
}
