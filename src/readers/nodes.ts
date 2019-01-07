import { readInt16 } from '../util'
import { Node } from '../types'

const size = 28

export const nodes = ( view: DataView ) => {
  const count = view.byteLength / size

  const getNode = ( view: DataView, offset: number ) => {
    const x = readInt16( view, offset )
    const y = readInt16( view, offset + 2 )
    const offsetX = readInt16( view, offset + 4 )
    const offsetY = readInt16( view, offset + 6 )

    const leftBBox = {
      top: readInt16( view, offset + 8 ),
      bottom: readInt16( view, offset + 10 ),
      left: readInt16( view, offset + 12 ),
      right: readInt16( view, offset + 14 )
    }

    const rightBBox = {
      top: readInt16( view, offset + 16 ),
      bottom: readInt16( view, offset + 18 ),
      left: readInt16( view, offset + 20 ),
      right: readInt16( view, offset + 22 )
    }

    const rightChild = readInt16( view, offset + 24 )
    const leftChild = readInt16( view, offset + 26 )

    return <Node>{
      x, y, offsetX, offsetY, leftBBox, rightBBox, rightChild, leftChild
    }
  }

  const nodes = Array<Node>( count )

  for ( let i = 0; i < count; i++ ) {
    nodes[ i ] = getNode( view, i * size )
  }

  return nodes
}
