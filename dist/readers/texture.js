"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
exports.texture = (view) => {
    const textureCount = util_1.readInt32(view, 0);
    const textures = Array(textureCount);
    for (let i = 0; i < textureCount; i++) {
        let offset = util_1.readInt32(view, i * 4 + 4);
        const texture = {
            name: util_1.readAscii(view, offset, offset + 8),
            masked: !!util_1.readInt32(view, offset + 8),
            width: util_1.readInt16(view, offset + 12),
            height: util_1.readInt16(view, offset + 14),
            patches: []
        };
        const patchCount = util_1.readInt16(view, offset + 20);
        offset += 22;
        for (var j = 0; j < patchCount; j++) {
            texture.patches.push({
                x: util_1.readInt16(view, offset),
                y: util_1.readInt16(view, offset + 2),
                patch: util_1.readInt16(view, offset + 4),
                stepDir: util_1.readInt16(view, offset + 6),
                colormap: util_1.readInt16(view, offset + 8)
            });
            offset += 10;
        }
        textures[i] = texture;
    }
    return textures;
};
//# sourceMappingURL=texture.js.map