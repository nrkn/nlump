import { readInt32, readAscii, readInt16 } from "../util";
import { Texture } from "../types";

export const texture = ( view: DataView ) => {
  const textureCount = readInt32( view, 0 )

  const textures = Array<Texture>( textureCount )

  for ( let i = 0; i < textureCount; i++ ) {
    let offset = readInt32( view, i * 4 + 4 )

    const texture = <Texture>{
      name: readAscii( view, offset, offset + 8 ),
      masked: !!readInt32( view, offset + 8 ),
      width: readInt16( view, offset + 12 ),
      height: readInt16( view, offset + 14 ),
      patches: []
    }

    const patchCount = readInt16( view, offset + 20 )

    offset += 22

    for ( var j = 0; j < patchCount; j++ ) {
      texture.patches.push( {
        x: readInt16( view, offset ),
        y: readInt16( view, offset + 2 ),
        patch: readInt16( view, offset + 4 ),
        stepDir: readInt16( view, offset + 6 ),
        colormap: readInt16( view, offset + 8 )
      } )

      offset += 10
    }

    textures[ i ] = texture
  }

  return textures
}
