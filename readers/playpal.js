'use strict'

module.exports = buffer => {
  const paletteCount = 14
  
  const palettes = []
  
  let offset = 0
  
  for( var i = 0; i < paletteCount; i++ ){
    let palette = []
    
    for( var j = 0; j < 256; j++ ){
      let r = buffer.readUInt8( offset )
      offset++
      let g = buffer.readUInt8( offset )
      offset++
      let b = buffer.readUInt8( offset )
      offset++
      
      palette.push([ r, g, b ])
    }
    
    palettes.push( palette )
  }
  
  return palettes
}
