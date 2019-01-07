export const readUint8 = ( view: DataView, offset: number ) =>
  view.getUint8( offset )

export const readInt16 = ( view: DataView, offset: number ) =>
  view.getInt16( offset, true )

export const readInt32 = ( view: DataView, offset: number ) =>
  view.getInt32( offset, true )

export const readAscii = ( view: DataView, from: number, to: number ) => {
  let result = ''

  for ( let i = from; i < to; i++ ) {
    result += String.fromCharCode( view.getUint8( i ) )
  }

  return result.replace( /\0/g, '' )
}