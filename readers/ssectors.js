const size = 4

module.exports = buffer => {
  const count = buffer.length / size
  
  const getSsector = ( buffer, offset ) => {
    const count = buffer.readInt16LE( offset )
    const startSeg = buffer.readInt16LE( offset + 2 )
    
    return { count, startSeg }
  }
  
  const ssectors = []
  
  for( var i = 0; i < count; i++ ){
    ssectors.push( getSsector( buffer, i * size ) )
  }
  
  return ssectors   
}
