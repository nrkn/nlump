import { readUint8 } from '../util'

const count = 34
const size = 256

export const colormap = ( view: DataView ) => {
  const maps: Uint8Array[] = []

  let offset = 0

  for ( let m = 0; m < count; m++ ) {
    let map = new Uint8Array( size )

    for ( let i = 0; i < size; i++ ) {
      map[ i ] = readUint8( view, offset )

      offset++
    }

    maps.push( map )
  }

  return maps
}
