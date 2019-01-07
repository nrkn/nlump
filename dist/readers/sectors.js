"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const size = 26;
exports.sectors = (view) => {
    const count = view.byteLength / size;
    const getSector = (view, offset) => {
        const floorHeight = util_1.readInt16(view, offset);
        const ceilingHeight = util_1.readInt16(view, offset + 2);
        const floor = util_1.readAscii(view, offset + 4, offset + 12);
        const ceiling = util_1.readAscii(view, offset + 12, offset + 20);
        const light = util_1.readInt16(view, offset + 20);
        const type = util_1.readInt16(view, offset + 22);
        const tag = util_1.readInt16(view, offset + 24);
        return {
            floorHeight, ceilingHeight, floor, ceiling, light, type, tag
        };
    };
    const sectors = Array(count);
    for (let i = 0; i < count; i++) {
        sectors[i] = getSector(view, i * size);
    }
    return sectors;
};
//# sourceMappingURL=sectors.js.map