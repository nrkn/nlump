import { readInt16, readAscii } from '../util'
import { Sector } from '../types'

const size = 26

export const sectors = ( view: DataView ) => {
  const count = view.byteLength / size

  const getSector = ( view: DataView, offset: number ) => {
    const floorHeight = readInt16( view, offset )
    const ceilingHeight = readInt16( view, offset + 2 )
    const floor = readAscii( view, offset + 4, offset + 12 )
    const ceiling = readAscii( view, offset + 12, offset + 20 )
    const light = readInt16( view, offset + 20 )
    const type = readInt16( view, offset + 22 )
    const tag = readInt16( view, offset + 24 )

    return <Sector>{
      floorHeight, ceilingHeight, floor, ceiling, light, type, tag
    }
  }

  const sectors = Array<Sector>( count )

  for ( let i = 0; i < count; i++ ) {
    sectors[ i ] = getSector( view, i * size )
  }

  return sectors
}
