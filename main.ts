const { writeFileSync, mkdirSync } = require('node:fs')
const { join } = require('node:path')

const TEXT = "We come in while it is still dark. The oven has been warm for an hour. She folds the dough once, tucks it under a damp cloth and leaves it to rest, and we stand there saying nothing, watching the cloth lift and settle. Nothing in this room is in a hurry. Even the bread waits."

const out = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? '/output'
mkdirSync(out, { recursive: true })
writeFileSync(join(out, 'entry.txt'), TEXT)