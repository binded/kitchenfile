import mem from 'mem'
import { join, basename } from 'path'
import fs from 'fs'
import mime from 'mime-types'

export default (...args) => mem((name) => {
  const filepath = join(...[...args, name])
  const filename = basename(filepath)
  const rs = (opts) => fs.createReadStream(filepath, opts)
  const buf = fs.readFileSync(filepath)
  const contentType = mime.lookup(filepath)
  const size = buf.length
  return {
    path: filepath,
    rs,
    buf,
    contentType,
    size,
    filename,
  }
})
