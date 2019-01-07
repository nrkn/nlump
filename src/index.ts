import { things } from './readers/things'
import { linedefs } from './readers/linedefs'
import { sidedefs } from './readers/sidedefs'
import { vertexes } from './readers/vertexes'
import { segs } from './readers/segs'
import { ssectors } from './readers/ssectors'
import { nodes } from './readers/nodes'
import { sectors } from './readers/sectors'
import { playpal } from './readers/playpal'
import { pnames } from './readers/pnames'
import { texture } from './readers/texture'
import { colormap } from './readers/colormap'
import { flat } from './readers/flat'
import { picture } from './readers/picture'
import { blockmap } from './readers/blockmap'
import { raw } from './readers/raw'
import { ReaderMap } from './types'

const readers: ReaderMap = {
  things, linedefs, sidedefs, vertexes, segs, ssectors, nodes, sectors, playpal,
  pnames, texture, colormap, flat, picture, blockmap, raw
}

export const read = ( data: Uint8Array, lumpType: string ) => {
  const name = lumpType.toLowerCase().trim()
  const reader = name in readers ? readers[ name ] : readers.raw
  const view = new DataView( data.buffer )

  return reader( view )
}
