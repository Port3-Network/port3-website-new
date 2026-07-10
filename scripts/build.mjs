import { cp, mkdir, rm } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const output = resolve(root, 'dist')
const clientOutput = resolve(output, 'client')
const serverOutput = resolve(output, 'server')

await rm(output, { recursive: true, force: true })
await mkdir(clientOutput, { recursive: true })
await mkdir(serverOutput, { recursive: true })
await cp(resolve(root, 'index.html'), resolve(clientOutput, 'index.html'))
await cp(resolve(root, 'src'), resolve(clientOutput, 'src'), { recursive: true })
await cp(resolve(root, 'public'), clientOutput, { recursive: true })
await cp(resolve(root, 'worker/index.js'), resolve(serverOutput, 'index.js'))

console.log('Static site built in dist/')
