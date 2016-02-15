'use strict'

const count = 34
const size = 256

module.exports = buffer => {
  const maps = []
  
  let offset = 0
  
  for( var m = 0; m < count; m++ ){
    let map = []
    
    for( var i = 0; i < size; i++ ){
      map.push( buffer.readUInt8( offset ) )
      
      offset++
    }
    
    maps.push( map )
  }
  
  return maps
}
