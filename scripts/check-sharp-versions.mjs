import fs from 'node:fs'
import path from 'node:path'

const cwd = process.cwd()
const lockPath = path.join(cwd, 'package-lock.json')

const found = []

function packageVersion(packagePath) {
  try {
    return JSON.parse(fs.readFileSync(packagePath, 'utf8')).version
  } catch {
    return null
  }
}

const candidates = [
  ['root', path.join(cwd, 'node_modules', 'sharp', 'package.json')],
  ['ipx nested', path.join(cwd, 'node_modules', 'ipx', 'node_modules', 'sharp', 'package.json')],
]

for (const [label, file] of candidates) {
  if (fs.existsSync(file)) found.push({ label, version: packageVersion(file) })
}

console.log('Sharp instalado:')
if (!found.length) {
  console.log('- node_modules ainda não está instalado.')
} else {
  for (const item of found) console.log(`- ${item.label}: ${item.version || 'desconhecida'}`)
}

const versions = [...new Set(found.map(item => item.version).filter(Boolean))]
const imgDir = path.join(cwd, 'node_modules', '@img')
const staleImgLibvips = fs.existsSync(imgDir)
  ? fs.readdirSync(imgDir).filter(name => name.startsWith('sharp-libvips-'))
  : []

if (staleImgLibvips.length) {
  console.log(`- Pacotes nativos @img encontrados: ${staleImgLibvips.join(', ')}`)
}

let lockSharp = []
if (fs.existsSync(lockPath)) {
  const lock = JSON.parse(fs.readFileSync(lockPath, 'utf8'))
  lockSharp = Object.entries(lock.packages || {})
    .filter(([key]) => key === 'node_modules/sharp' || key.endsWith('/node_modules/sharp'))
    .map(([key, value]) => `${key}: ${value.version}`)
  console.log('Sharp no package-lock:')
  for (const line of lockSharp) console.log(`- ${line}`)
}

const hasConflict = versions.length > 1 || (
  staleImgLibvips.length > 0 &&
  found.some(item => item.version?.startsWith('0.32.'))
)

if (hasConflict) {
  console.error('')
  console.error('Conflito de Sharp/libvips detetado.')
  console.error('Executa: npm run deps:reset')
  console.error('Depois: npm ci')
  process.exitCode = 1
} else if (found.length) {
  console.log('')
  console.log(`Sharp alinhado: ${versions[0] || 'desconhecido'}`)
}
