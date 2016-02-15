'use strict'

const size = 10

module.exports = buffer => {
  
  const count = buffer.length / size
  
  const getFlags = flags => ({
    easy: !!( flags & 0x0001 ),
    medium: !!( flags & 0x0002 ),
    hard: !!( flags & 0x0004 ),
    deaf: !!( flags & 0x0008 ),
    multiplayer: !!( flags & 0x0010 )
  })
  
  const getThing = ( buffer, offset ) => {
    const x = buffer.readInt16LE( offset )
    const y = buffer.readInt16LE( offset + 2 )
    const angle = buffer.readInt16LE( offset + 4 )
    const type = buffer.readInt16LE( offset + 6 )
    const flags = getFlags( buffer.readInt16LE( offset + 8 ) )
    
    return {
      x, y, angle, type, flags
    }
  }
  
  const things = []
  
  for( var i = 0; i < count; i++ ){
    things.push( getThing( buffer, i * size ) )
  }
  
  return things
}
