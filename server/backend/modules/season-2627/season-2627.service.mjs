import crypto from 'node:crypto'
import { getMongoDb } from '../../core/mongo.mjs'
import { season2627Games, season2627Teams } from './season-2627.data.mjs'

const normalized = (value = '') => String(value).trim().toLocaleUpperCase('pt-PT')

export const season2627Service = {
  preview() {
    return {
      season: '2026/2027',
      teams: season2627Teams,
      games: season2627Games,
      totals: { teams: season2627Teams.length, games: season2627Games.length },
    }
  },

  async importMissing() {
    const db = await getMongoDb()
    const teamsCollection = db.collection('teams')
    const gamesCollection = db.collection('games')

    const existingTeams = await teamsCollection.find({}).toArray()
    const names = new Set(existingTeams.map(row => normalized(row.name)))

    let teamsCreated = 0
    for (const name of season2627Teams) {
      if (names.has(normalized(name))) continue
      const now = new Date().toISOString()
      await teamsCollection.insertOne({ id: crypto.randomUUID(), name, logo: '', status: 'published', createdAt: now, updatedAt: now })
      names.add(normalized(name))
      teamsCreated++
    }

    const existingGames = await gamesCollection.find({ season: '2026/2027' }).toArray()
    const keys = new Set(existingGames.map(row => `${row.season}::${row.jornada}`))

    let gamesCreated = 0
    for (const game of season2627Games) {
      const key = `${game.season}::${game.jornada}`
      if (keys.has(key)) continue
      const now = new Date().toISOString()
      await gamesCollection.insertOne({ ...game, id: crypto.randomUUID(), createdAt: now, updatedAt: now })
      keys.add(key)
      gamesCreated++
    }

    return { ok: true, season: '2026/2027', teamsCreated, teamsExisting: season2627Teams.length - teamsCreated, gamesCreated, gamesExisting: season2627Games.length - gamesCreated, totalTeams: season2627Teams.length, totalGames: season2627Games.length }
  },
}
