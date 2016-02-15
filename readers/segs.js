'use strict'

const size = 12

const segs = buffer => {
  const count = buffer.length / size
  
  const getSeg = ( buffer, offs ) => {
    const startVertex = buffer.readInt16LE( offs )
    const endVertex = buffer.readInt16LE( offs + 2 )
    const angle = buffer.readInt16LE( offs + 4 )
    const linedef = buffer.readInt16LE( offs + 6 )
    const direction = buffer.readInt16LE( offs + 8 )
    const offset = buffer.readInt16LE( offs + 10 )
    
    return {
      startVertex, endVertex, angle, linedef, direction, offset
    }
  }
  
  const segs = []
  
  for( var i = 0; i < count; i++ ){
    segs.push( getSeg( buffer, i * size ) )
  }
  
  return segs    
}
