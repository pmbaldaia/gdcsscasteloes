import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const directory = path.dirname(fileURLToPath(import.meta.url))
const tasks = [
  ['Estrutura base do CMS', 'bootstrap-cms-content.mjs'],
  ['Utilizadores e usernames', 'migrate-users-to-username.mjs'],
]

for (const [label, file] of tasks) {
  console.log(`\n→ ${label}`)
  const result = spawnSync(process.execPath, [path.join(directory, file)], {
    env: process.env,
    stdio: 'inherit',
  })
  if (result.status !== 0) process.exit(result.status || 1)
}

console.log('\nAtualização concluída. O conteúdo existente no CMS foi preservado.')
