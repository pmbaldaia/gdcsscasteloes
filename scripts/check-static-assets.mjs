import fs from 'node:fs'
import path from 'node:path'
import { seedData } from '../server/backend/core/seed-data.mjs'

const publicDir = path.resolve(process.cwd(), 'public')
const checks = [
  ...(seedData.board || []).map(row => ({ type: 'board', label: row.nome, url: row.img })),
  ...(seedData.teams || []).map(row => ({ type: 'team', label: row.name, url: row.logo })),
  ...(seedData.players || []).map(row => ({ type: 'player', label: row.name || row.id, url: row.img })),
  ...(seedData.staff || []).map(row => ({ type: 'staff', label: row.name || row.id, url: row.img })),
]

const missing = checks.filter(({ url }) => url?.startsWith('/') && !url.startsWith('/uploads/') && !fs.existsSync(path.join(publicDir, url.slice(1))))

if (missing.length) {
  console.error('Assets estáticos em falta:')
  for (const item of missing) console.error(`- [${item.type}] ${item.label}: ${item.url}`)
  process.exitCode = 1
} else {
  console.log(`Assets estáticos OK — ${checks.length} referências verificadas.`)
}
