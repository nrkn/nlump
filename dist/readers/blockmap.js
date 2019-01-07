"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
exports.blockmap = (view) => {
    const x = util_1.readInt16(view, 0);
    const y = util_1.readInt16(view, 2);
    const columns = util_1.readInt16(view, 4);
    const rows = util_1.readInt16(view, 6);
    const size = columns * rows;
    const blockOffsets = Array(size);
    let offset = 8;
    for (let i = 0; i < size; i++) {
        //offsets are short, but we want bytes
        blockOffsets[i] = util_1.readInt16(view, offset) * 2;
        offset += 2;
    }
    const blocks = [];
    for (let i = 0; i < size; i++) {
        offset = blockOffsets[i] + 2; //skip leading 0
        const linedefs = [];
        let linedef;
        while (linedef !== -1) {
            linedef = util_1.readInt16(view, offset);
            offset += 2;
            if (linedef !== -1) {
                linedefs.push(linedef);
            }
        }
        blocks.push(new Int16Array(linedefs));
    }
    return { x, y, columns, rows, blocks };
};
//# sourceMappingURL=blockmap.js.map