const size = 14

module.exports = buffer => {
  const count = buffer.length / size
  
  const getFlags = flags => ({
    impassable: !!( flags & 0x0001 ),
    blockMonster: !!( flags & 0x0002 ),
    doubleSided: !!( flags & 0x0004 ),
    upperUnpegged: !!( flags & 0x0008 ),
    lowerUnpegged: !!( flags & 0x0010 ),
    secret: !!( flags & 0x0020 ), 
    blockSound: !!( flags & 0x0040 ),
    hidden: !!( flags & 0x0080 ),
    shown: !!( flags & 0x0100 )
  })  
  
  const getLinedef = ( buffer, offset ) => {
    const startVertex = buffer.readInt16LE( offset )
    const endVertex = buffer.readInt16LE( offset + 2 )
    const flags = getFlags( buffer.readInt16LE( offset + 4 ) )
    const specialType = buffer.readInt16LE( offset + 6 )
    const sectorTag = buffer.readInt16LE( offset + 8 )
    const rightSidedef = buffer.readInt16LE( offset + 10 )
    const leftSidedef = buffer.readInt16LE( offset + 12 )
    
    return {
      startVertex, endVertex, flags, specialType, sectorTag, rightSidedef, leftSidedef
    }
  }
  
  const linedefs = []
  
  for( var i = 0; i < count; i++ ){
    linedefs.push( getLinedef( buffer, i * size ) )
  }
  
  return linedefs  
}
