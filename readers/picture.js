'use strict'

module.exports = buffer => {
  const width = buffer.readInt16LE( 0 )
  const height = buffer.readInt16LE( 2 )
  const left = buffer.readInt16LE( 4 )
  const top = buffer.readInt16LE( 6 )
  
  const columnOffsets = []
  const columns = []
  
  let offset = 8
  
  for( var i = 0; i < width; i++ ){
    columnOffsets.push( buffer.readInt32LE( offset ) )
    offset += 4
    
    columns.push( new Array( height ) )
  }
  
  for( var i = 0; i < width; i++ ){
    offset = columnOffsets[ i ]
    
    let rowStart = 0
    
    while( rowStart !== 255 ){
      rowStart = buffer.readUInt8( offset )
      
      offset++
      
      if( rowStart === 255 ) break;
      
      let pixelCount = buffer.readUInt8( offset )
      offset++
      
      //skip dummy byte
      offset++
      
      for( var j = 0; j < pixelCount; j++ ){
        columns[ i ][ j + rowStart ] = buffer.readUInt8( offset )
        offset++
      }
      
      //skip dummy byte
      offset++
    }
  }
  
  return {
    width, height, left, top, columns
  }
}
