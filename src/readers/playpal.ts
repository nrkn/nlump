import { Rgb } from '../types'
import { readUint8 } from '../util'

const paletteCount = 14

export const playpal = ( view: DataView ) => {
  const palettes = Array<Rgb[]>( paletteCount )

  let offset = 0

  for ( var i = 0; i < paletteCount; i++ ) {
    let palette = Array<Rgb>( 256 )

    for ( let j = 0; j < 256; j++ ) {
      let r = readUint8( view, offset )
      offset++
      let g = readUint8( view, offset )
      offset++
      let b = readUint8( view, offset )
      offset++

      palette[ j ] = [ r, g, b ]
    }

    palettes.push( palette )
  }

  return palettes
}
