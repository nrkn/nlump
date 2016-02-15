# nlump

A utility for working with lumps from a WAD file (used by Doom et al)

**NB:** doesn't read WAD files, if you have a WAD file and want to get the lumps
out of it, try [nwad](https://github.com/nrkn/nwad)

## WORK IN PROGRESS

Currently read only, lump writers to come.

Lump readers currently supported:

* things
* linedefs
* sidedefs
* vertexes
* segs
* ssectors
* nodes
* sectors
* playpal
* pnames
* texture

## Usage

```javascript
const nlump = require( 'nlump' )

//a lump as read by nwad
const result1 = nlump( lump )

//a raw buffer, type specified
const result2 = nlump( buffer, 'things' )
```

Example output:

```json
{
  "name": "THINGS",
  "value": [
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
    //...
  ]
}
```