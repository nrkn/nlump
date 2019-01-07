import { readInt16 } from '../util'
import { Vertex } from '../types'

const size = 4

export const vertexes = ( view: DataView ) => {
  const count = view.byteLength / size

  const getVertex = ( view: DataView, offset: number ) => {
    const x = readInt16( view, offset )
    const y = readInt16( view, offset + 2 )

    return <Vertex>{ x, y }
  }

  const vertexes = Array<Vertex>( count )

  for ( var i = 0; i < count; i++ ) {
    vertexes[ i ] = getVertex( view, i * size )
  }

  return vertexes
}
