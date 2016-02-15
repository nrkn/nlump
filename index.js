'use strict'

const lumpTypes = [
  'things', 'linedefs', 'sidedefs', 'vertexes', 'segs', 'ssectors', 'nodes',
  'sectors', 'playpal', 'pnames', 'texture', 'colormap'
]

const readers = lumpTypes.reduce( ( result, lumpType ) => {
  result[ lumpType ] = require( './readers/' + lumpType )  
  return result
}, {} )

//aliases
readers.texture1 = readers.texture2 = readers.texture

const readBuffer = ( data, lumpType ) => {
  const name = lumpType.toLowerCase().trim()
  const reader = readers[ name ]  
  
  if( reader ){
    return reader( data )
  }  
}

const readLump = lump => readBuffer( lump.data, lump.name )

const read = ( arg1, arg2 ) => {
  if( arg1 && arg1.name && arg1.data ){
    return readLump( arg1 )
  } else if( arg1 && arg2 ){
    return readBuffer( arg1, arg2 )
  } 
}

module.exports = read
