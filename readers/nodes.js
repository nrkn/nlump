'use strict'

module.exports = buffer => {
  const count = buffer.length / 28
  
  const getNode = ( buffer, offset ) => {
    const x = buffer.readInt16LE( offset )
    const y = buffer.readInt16LE( offset + 2 )
    const offsetX = buffer.readInt16LE( offset + 4 )
    const offsetY = buffer.readInt16LE( offset + 6 )
    
    const leftBBox = {
      top: buffer.readInt16LE( offset + 8 ),
      bottom: buffer.readInt16LE( offset + 10 ),
      left: buffer.readInt16LE( offset + 12 ),
      right: buffer.readInt16LE( offset + 14 )
    }
    
    const rightBBox = {
      top: buffer.readInt16LE( offset + 16 ),
      bottom: buffer.readInt16LE( offset + 18 ),
      left: buffer.readInt16LE( offset + 20 ),
      right: buffer.readInt16LE( offset + 22 )      
    }
    
    const rightChild = buffer.readInt16LE( offset + 24 )
    const leftChild = buffer.readInt16LE( offset + 26 )
    
    return {
      x, y, offsetX, offsetY, leftBBox, rightBBox, rightChild, leftChild
    }
  }
  
  const nodes = []
  
  for( var i = 0; i < count; i++ ){
    nodes.push( getNode( buffer, i * 28 ) )
  }
  
  return nodes    
}