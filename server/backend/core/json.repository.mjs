import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dataDir = path.resolve(process.cwd(), 'storage/data')

export function createJsonRepository(resource) {
  const file = path.join(dataDir, `${resource}.json`)
  const readAll = async () => JSON.parse(await fs.readFile(file, 'utf8'))
  const writeAll = async (rows) => fs.writeFile(file, `${JSON.stringify(rows, null, 2)}\n`)

  return {
    readAll,
    async findById(id) { return (await readAll()).find((row) => String(row.id) === String(id)) ?? null },
    async create(payload) {
      const rows = await readAll()
      const now = new Date().toISOString()
      const item = { id: payload.id ?? crypto.randomUUID(), ...payload, createdAt: payload.createdAt ?? now, updatedAt: now }
      rows.push(item); await writeAll(rows); return item
    },
    async update(id, payload) {
      const rows = await readAll(); const index = rows.findIndex((row) => String(row.id) === String(id))
      if (index < 0) return null
      rows[index] = { ...rows[index], ...payload, id: rows[index].id, updatedAt: new Date().toISOString() }
      await writeAll(rows); return rows[index]
    },
    async remove(id) {
      const rows = await readAll(); const next = rows.filter((row) => String(row.id) !== String(id))
      if (next.length === rows.length) return false
      await writeAll(next); return true
    }
  }
}
