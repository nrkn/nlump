'use strict'

const readers = {
  'things': require( './readers/things' ),
  'linedefs': require( './readers/linedefs' ),
  'sidedefs': require( './readers/sidedefs' ),
  'vertexes': require( './readers/vertexes' ),
  'segs': require( './readers/segs' ),
  'ssectors': require( './readers/ssectors' ),
  'nodes': require( './readers/nodes' ),
  'sectors': require( './readers/sectors' ),
  'playpal': require( './readers/playpal' ),
  'pnames': require( './readers/pnames' ),
  'texture': require( '.readers/texture' ),
  'colormap': require( './readers/colormap' ),
  'flat': require( './readers/flat' ),
  'picture': require( './readers/picture' ),
  'blockmap': require( './readers/blockmap' ),
  'raw': require( './readers/raw' )
}

const read = ( data, lumpType ) => {
  const name = lumpType.toLowerCase().trim()
  const reader = readers[ name ]  
  
  if( reader ){
    return reader( data )
  }
}

module.exports = read
