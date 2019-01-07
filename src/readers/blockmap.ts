import { readInt16 } from '../util'
import { Blockmap } from '../types'

export const blockmap = ( view: DataView ) => {
  const x = readInt16( view, 0 )
  const y = readInt16( view, 2 )
  const columns = readInt16( view, 4 )
  const rows = readInt16( view, 6 )

  const size = columns * rows
  const blockOffsets = Array<number>( size )

  let offset = 8

  for( let i = 0; i < size; i++ ){
    //offsets are short, but we want bytes
    blockOffsets[ i ] = readInt16( view, offset ) * 2
    offset +=2
  }

  const blocks: Int16Array[] = []

  for( let i = 0; i < size; i++ ){
    offset = blockOffsets[ i ] + 2 //skip leading 0

    const linedefs: number[] = []

    let linedef

    while( linedef !== -1 ){
      linedef = readInt16( view, offset )
      offset += 2

      if( linedef !== -1 ){
        linedefs.push( linedef )
      }
    }

    blocks.push( new Int16Array( linedefs ) )
  }

  return <Blockmap>{ x, y, columns, rows, blocks }
}
