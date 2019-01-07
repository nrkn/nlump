import { readInt16 } from '../util'
import { Seg } from '../types'

const size = 12

export const segs = ( view: DataView ) => {
  const count = view.byteLength / size

  const getSeg = ( view: DataView, offs: number ) => {
    const startVertex = readInt16( view, offs )
    const endVertex = readInt16( view, offs + 2 )
    const angle = readInt16( view, offs + 4 )
    const linedef = readInt16( view, offs + 6 )
    const direction = readInt16( view, offs + 8 )
    const offset = readInt16( view, offs + 10 )

    return <Seg>{
      startVertex, endVertex, angle, linedef, direction, offset
    }
  }

  const segs = Array<Seg>( count )

  for ( let i = 0; i < count; i++ ) {
    segs[ i ] = getSeg( view, i * size )
  }

  return segs
}
