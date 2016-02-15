module.exports = buffer => {
  const textureCount = buffer.readInt32LE( 0 )
  
  const textures = []
  
  for( var i = 0; i < textureCount; i++ ){
    let offset = buffer.readInt32LE( i * 4 + 4 )
    
    let texture = {
      name: buffer.toString( 'ascii', offset, offset + 8 ).replace( /\0/g, '' ),
      masked: !!buffer.readInt32LE( offset + 8 ),
      width: buffer.readInt16LE( offset + 12 ),
      height: buffer.readInt16LE( offset + 14 ),
      patches: []
    }
    
    let patchCount = buffer.readInt16LE( offset + 20 )
    
    offset += 22
    
    for( var j = 0; j < patchCount; j++ ){
      texture.patches.push({
        x: buffer.readInt16LE( offset ),
        y: buffer.readInt16LE( offset + 2 ),
        patch: buffer.readInt16LE( offset + 4 ),
        stepDir: buffer.readInt16LE( offset + 6 ),
        colormap: buffer.readInt16LE( offset + 8 )
      })
      
      offset += 10
    }
    
    textures.push( texture )
  }

  return textures
}
