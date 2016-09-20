import test from 'blue-tape'
import concat from 'concat-stream'
import { join } from 'path'

import kitchenfile from '../src'

const file = kitchenfile(__dirname, 'files')

test((t) => {
  t.equal(file('somefile.txt').buf.toString(), 'just some file for testing!\n')
  t.equal(file('somefile.txt').path, join(__dirname, 'files', 'somefile.txt'))
  file('somefile.txt').rs().pipe(concat((buf) => {
    t.equal(buf.toString(), 'just some file for testing!\n')
    t.end()
  }))
})
