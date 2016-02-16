'use strict'

module.exports = buffer => {
  const x = buffer.readInt16LE( 0 )
  const y = buffer.readInt16LE( 2 )
  const columns = buffer.readInt16LE( 4 )
  const rows = buffer.readInt16LE( 6 )
  const size = columns * rows
  
  let offset = 8
  
  const blockOffsets = []
  
  for( var i = 0; i < size; i++ ){
    blockOffsets.push( buffer.readUInt16LE( offset ) * 2 ) //offsets are short, buffer api wants bytes
    offset +=2
  }
  
  const blocks = []
  
  for( var i = 0; i < size; i++ ){
    offset = blockOffsets[ i ] + 2 //skip leading 0
    
    let linedefs = []
    
    let linedef
    
    while( linedef !== -1 ){
      linedef = buffer.readInt16LE( offset )
      offset += 2
      
      if( linedef !== -1 ){
        linedefs.push( linedef )  
      }
    }
    
    blocks.push( linedefs )
  }
  
  return { x, y, columns, rows, blocks }
}