module.exports = buffer => {
  const count = buffer.readInt32LE( 0 )
  
  let offset = 4
  
  const pnames = []
  
  for( var i = 0; i < count; i++ ){    
    pnames.push( buffer.toString( 'ascii', offset, offset + 8 ).replace( /\0/g, '' ) )
    offset += 8
  }
  
  return pnames  
}
