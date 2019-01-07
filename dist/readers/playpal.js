"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const paletteCount = 14;
exports.playpal = (view) => {
    const palettes = Array(paletteCount);
    let offset = 0;
    for (var i = 0; i < paletteCount; i++) {
        let palette = Array(256);
        for (let j = 0; j < 256; j++) {
            let r = util_1.readUint8(view, offset);
            offset++;
            let g = util_1.readUint8(view, offset);
            offset++;
            let b = util_1.readUint8(view, offset);
            offset++;
            palette[j] = [r, g, b];
        }
        palettes.push(palette);
    }
    return palettes;
};
//# sourceMappingURL=playpal.js.map