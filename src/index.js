import mem from 'mem'
import { join } from 'path'
import fs from 'fs'
import mime from 'mime-types'

export default (...args) => mem((name) => {
  const filepath = join(...[...args, name])
  const rs = () => fs.createReadStream(filepath)
  const buf = fs.readFileSync(filepath)
  const contentType = mime.lookup(filepath)
  const size = buf.length
  return { path: filepath, rs, buf, contentType, size }
})
