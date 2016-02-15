const size = 26

module.exports = buffer => {
  const count = buffer.length / size
  
  const getSector = ( buffer, offset ) => {
    const floorHeight = buffer.readInt16LE( offset )
    const ceilingHeight = buffer.readInt16LE( offset + 2 )
    const floor = buffer.toString( 'ascii', offset + 4, offset + 12 ).replace( /\0/g, '' )
    const ceiling = buffer.toString( 'ascii', offset + 12, offset + 20 ).replace( /\0/g, '' )
    const light = buffer.readInt16LE( offset + 20 )
    const type = buffer.readInt16LE( offset + 22 )
    const tag = buffer.readInt16LE( offset + 24 )
    
    return {
      floorHeight, ceilingHeight, floor, ceiling, light, type, tag
    }
  }
  
  const sectors = []

  for( var i = 0; i < count; i++ ){
    sectors.push( getSector( buffer, i * size ) )
  }
  
  return sectors
}
