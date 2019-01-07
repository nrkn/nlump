import { readInt16, readAscii } from '../util'
import { Sidedef } from '../types'

const size = 30

export const sidedefs = ( view: DataView ) => {
  const count = view.byteLength / size

  const getSidedef = ( view: DataView, offset ) => {
    const x = readInt16( view, offset )
    const y = readInt16( view, offset + 2 )
    const upper = readAscii( view, offset + 4, offset + 12 )
    const lower = readAscii( view, offset + 12, offset + 20 )
    const middle = readAscii( view, offset + 20, offset + 28 )
    const sector = readInt16( view, offset + 28 )

    return <Sidedef>{
      x, y, upper, lower, middle, sector
    }
  }

  const sidedefs = Array<Sidedef>( count )

  for ( let i = 0; i < count; i++ ) {
    sidedefs[ i ] = getSidedef( view, i * size )
  }

  return sidedefs
}
