'use strict'

const lumpTypes = [
  'things', 'linedefs', 'sidedefs', 'vertexes', 'segs', 'ssectors', 'nodes',
  'sectors', 'playpal', 'pnames', 'texture', 'colormap', 'flat', 'picture'
]

const readers = lumpTypes.reduce( ( result, lumpType ) => {
  result[ lumpType ] = require( './readers/' + lumpType )  
  
  return result
}, {} )

const read = ( data, lumpType ) => {
  const name = lumpType.toLowerCase().trim()
  const reader = readers[ name ]  
  
  if( reader ){
    return reader( data )
  }  
}

module.exports = read
