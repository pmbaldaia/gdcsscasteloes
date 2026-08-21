import fs from 'node:fs'
import path from 'node:path'

const roots = [
  'assets/css/admin.css',
  'pages/admin',
  'components',
  'layouts/admin.vue',
]

const forbidden = [
  /blue-\d+/gi,
  /indigo-\d+/gi,
  /violet-\d+/gi,
  /purple-\d+/gi,
  /#5a6acf/gi,
  /#414f9e/gi,
  /#eef0fc/gi,
  /#6366f1/gi,
  /#4f46e5/gi,
  /#3b82f6/gi,
  /#2563eb/gi,
]

const files = []
const walk = (entry) => {
  const full = path.resolve(process.cwd(), entry)
  if (!fs.existsSync(full)) return
  const stat = fs.statSync(full)
  if (stat.isFile()) return files.push(full)
  for (const name of fs.readdirSync(full)) walk(path.join(entry, name))
}
for (const entry of roots) walk(entry)

const bad = []
for (const file of files) {
  if (!/\.(vue|css|ts|js|mjs)$/.test(file)) continue
  const text = fs.readFileSync(file, 'utf8')
  for (const pattern of forbidden) {
    pattern.lastIndex = 0
    if (pattern.test(text)) bad.push(`${path.relative(process.cwd(), file)} → ${pattern}`)
  }
}

if (bad.length) {
  console.error('Foram encontradas cores antigas/azuis no CMS:')
  for (const line of bad) console.error(`- ${line}`)
  process.exit(1)
}

console.log('Admin brand OK — nenhuma cor azul/roxa antiga encontrada.')
