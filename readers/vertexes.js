const size = 4

module.exports = buffer => {
  const count = buffer.length / size
  
  const getVertex = ( buffer, offset ) => {
    const x = buffer.readInt16LE( offset )
    const y = buffer.readInt16LE( offset + 2 )
    
    return { x, y }    
  }
  
  const vertexes = []
  
  for( var i = 0; i < count; i++ ){
    vertexes.push( getVertex( buffer, i * size ) )
  }
  
  return vertexes    
}
