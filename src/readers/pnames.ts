import { readInt32, readAscii } from '../util'

export const pnames = ( view: DataView ) => {
  const count = readInt32( view, 0 )

  let offset = 4

  const pnames = Array<string>( count )

  for ( var i = 0; i < count; i++ ) {
    pnames[ i ] = readAscii( view, offset, offset + 8 )
    offset += 8
  }

  return pnames
}
