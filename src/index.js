import mem from 'mem'
import { join } from 'path'
import fs from 'fs'

export default (...args) => mem((name) => {
  const filepath = join(...[...args, name])
  const rs = () => fs.createReadStream(filepath)
  const buf = fs.readFileSync(filepath)
  return { path: filepath, rs, buf }
})
