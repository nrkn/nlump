import { readUint8 } from '../util'
import { Flat } from '../types'

const width = 64
const height = 64
const count = width * height

export const flat = ( view: DataView ) => {
  const data = new Uint8Array( count )

  for ( let i = 0; i < count; i++ ) {
    data[ i ] = readUint8( view, i )
  }

  return <Flat>{ width, height, data }
}
