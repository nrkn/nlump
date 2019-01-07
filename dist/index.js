"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const things_1 = require("./readers/things");
const linedefs_1 = require("./readers/linedefs");
const sidedefs_1 = require("./readers/sidedefs");
const vertexes_1 = require("./readers/vertexes");
const segs_1 = require("./readers/segs");
const ssectors_1 = require("./readers/ssectors");
const nodes_1 = require("./readers/nodes");
const sectors_1 = require("./readers/sectors");
const playpal_1 = require("./readers/playpal");
const pnames_1 = require("./readers/pnames");
const texture_1 = require("./readers/texture");
const colormap_1 = require("./readers/colormap");
const flat_1 = require("./readers/flat");
const picture_1 = require("./readers/picture");
const blockmap_1 = require("./readers/blockmap");
const raw_1 = require("./readers/raw");
const readers = {
    things: things_1.things, linedefs: linedefs_1.linedefs, sidedefs: sidedefs_1.sidedefs, vertexes: vertexes_1.vertexes, segs: segs_1.segs, ssectors: ssectors_1.ssectors, nodes: nodes_1.nodes, sectors: sectors_1.sectors, playpal: playpal_1.playpal,
    pnames: pnames_1.pnames, texture: texture_1.texture, colormap: colormap_1.colormap, flat: flat_1.flat, picture: picture_1.picture, blockmap: blockmap_1.blockmap, raw: raw_1.raw
};
exports.read = (data, lumpType) => {
    const name = lumpType.toLowerCase().trim();
    const reader = name in readers ? readers[name] : readers.raw;
    const view = new DataView(data.buffer);
    return reader(view);
};
//# sourceMappingURL=index.js.map