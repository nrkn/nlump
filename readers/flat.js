'use strict'

module.exports = buffer => {
  const width = 64
  const height = 64
  
  const pixels = []
  
  const count = width * height
  
  for( var i = 0; i < count; i++ ){
    pixels.push( buffer.readUInt8( i ) )
  }
  
  return { width, height, pixels }
}
