import fs from 'node:fs'
import path from 'node:path'

const cwd = process.cwd()
const targets = [
  'node_modules',
  '.nuxt',
  '.output',
  '.netlify',
]

for (const target of targets) {
  const full = path.join(cwd, target)
  if (!fs.existsSync(full)) continue

  console.log(`A remover ${target}...`)
  fs.rmSync(full, { recursive: true, force: true, maxRetries: 5, retryDelay: 250 })
}

console.log('')
console.log('Dependências e caches removidos.')
console.log('Agora executa: npm ci')
console.log('Depois confirma com: npm run sharp:check')
