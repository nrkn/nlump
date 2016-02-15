const size = 30

module.exports = buffer => {
  const count = buffer.length / size
  
  const getSidedef = ( buffer, offset ) => {
    const x = buffer.readInt16LE( offset )
    const y = buffer.readInt16LE( offset + 2 )
    const upper = buffer.toString( 'ascii', offset + 4, offset + 12 ).replace( /\0/g, '' )
    const lower = buffer.toString( 'ascii', offset + 12, offset + 20 ).replace( /\0/g, '' )
    const middle = buffer.toString( 'ascii', offset + 20, offset + 28 ).replace( /\0/g, '' )
    const sector = buffer.readInt16LE( offset + 28 )
    
    return {
      x, y, upper, lower, middle, sector
    }
  }
  
  const sidedefs = []
  
  for( var i = 0; i < count; i++ ){
    sidedefs.push( getSidedef( buffer, i * size ) )
  }
  
  return sidedefs   
}
