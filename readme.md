# nlump

A utility for working with lumps from a WAD file (used by Doom et al)

`npm install nlump`

**NB:** doesn't read WAD files, if you have a WAD file and want to get the lumps
out of it, try [nwad](https://github.com/nrkn/nwad)

## WORK IN PROGRESS

Currently read only, lump writers to come.

### Lump readers currently supported

* things
* linedefs
* sidedefs
* vertexes
* segs
* ssectors
* nodes
* sectors
* blockmap
* playpal
* pnames
* texture
* colormap
* flat
* picture (sprites, UI, walls etc.)

### Not implemented yet

Pull requests would be nice!

* reject
* sound
* music
* demo
* endoom
* dmxgus

## Usage

```javascript
const nlump = require( 'nlump' )

//if you have a lump from nwad, the array is stored in the 'data' property
const result = nlump( uint8Array, 'things' )
```

Example output:

```json
[
  {
    "x": 1056,
    "y": -3616,
    "angle": 90,
    "type": 1,
    "flags": {
      "easy": true,
      "medium": true,
      "hard": true,
      "deaf": false,
      "multiplayer": false
    }
  },
  {
    "x": 1008,
    "y": -3600,
    "angle": 90,
    "type": 2,
    "flags": {
      "easy": true,
      "medium": true,
      "hard": true,
      "deaf": false,
      "multiplayer": false
    }
  }
]
```

## license

MIT License

Copyright (c) 2019 Nik Coughlin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.