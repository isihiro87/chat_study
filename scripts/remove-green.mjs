import sharp from '/workspaces/marutto-study/node_modules/sharp/lib/index.js'

const input = 'public/images/history-characters-source.png'
const output = 'public/images/history-characters.png'
const image = sharp(input).ensureAlpha()
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true })

for (let i = 0; i < data.length; i += 4) {
  const r = data[i]
  const g = data[i + 1]
  const b = data[i + 2]
  const greenDominant = g > 145 && g > r * 1.35 && g > b * 1.35
  const chroma = g - Math.max(r, b)
  if (greenDominant && chroma > 55) {
    data[i + 3] = 0
  } else if (greenDominant && chroma > 30) {
    data[i + 3] = Math.min(data[i + 3], 90)
    data[i + 1] = Math.round((r + b) / 2)
  }
}

await sharp(data, { raw: info }).png().toFile(output)
console.log(output)
