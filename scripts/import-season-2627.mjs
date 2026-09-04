import crypto from 'node:crypto'
import { MongoClient } from 'mongodb'
import { season2627Games, season2627Teams } from '../server/backend/modules/season-2627/season-2627.data.mjs'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB || 'gdcsscasteloes'
if (!uri) throw new Error('MONGODB_URI não está definida.')

const client = new MongoClient(uri)
const normalized = (value = '') => String(value).trim().toLocaleUpperCase('pt-PT')
try {
  await client.connect()
  const db = client.db(dbName)
  const teams = db.collection('teams')
  const games = db.collection('games')
  const existingTeams = await teams.find({}).toArray()
  const names = new Set(existingTeams.map(row => normalized(row.name)))
  let teamsCreated = 0
  for (const name of season2627Teams) {
    if (names.has(normalized(name))) continue
    const now = new Date().toISOString()
    await teams.insertOne({ id: crypto.randomUUID(), name, logo: '', status: 'published', createdAt: now, updatedAt: now })
    names.add(normalized(name)); teamsCreated++
  }
  const existingGames = await games.find({ season: '2026/2027' }).toArray()
  const keys = new Set(existingGames.map(row => `${row.season}::${row.jornada}`))
  let gamesCreated = 0
  for (const game of season2627Games) {
    const key = `${game.season}::${game.jornada}`
    if (keys.has(key)) continue
    const now = new Date().toISOString()
    await games.insertOne({ ...game, id: crypto.randomUUID(), createdAt: now, updatedAt: now })
    keys.add(key); gamesCreated++
  }
  console.log(`Equipas criadas: ${teamsCreated}; jogos criados: ${gamesCreated}`)
} finally { await client.close() }
