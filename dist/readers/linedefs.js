"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const size = 14;
exports.linedefs = (view) => {
    const count = view.byteLength / size;
    const getFlags = flags => ({
        impassable: !!(flags & 0x0001),
        blockMonster: !!(flags & 0x0002),
        doubleSided: !!(flags & 0x0004),
        upperUnpegged: !!(flags & 0x0008),
        lowerUnpegged: !!(flags & 0x0010),
        secret: !!(flags & 0x0020),
        blockSound: !!(flags & 0x0040),
        hidden: !!(flags & 0x0080),
        shown: !!(flags & 0x0100)
    });
    const getLinedef = (view, offset) => {
        const startVertex = util_1.readInt16(view, offset);
        const endVertex = util_1.readInt16(view, offset + 2);
        const flags = getFlags(util_1.readInt16(view, offset + 4));
        const specialType = util_1.readInt16(view, offset + 6);
        const sectorTag = util_1.readInt16(view, offset + 8);
        const rightSidedef = util_1.readInt16(view, offset + 10);
        const leftSidedef = util_1.readInt16(view, offset + 12);
        return {
            startVertex, endVertex, flags, specialType, sectorTag, rightSidedef,
            leftSidedef
        };
    };
    const linedefs = Array(count);
    for (let i = 0; i < count; i++) {
        linedefs[i] = getLinedef(view, i * size);
    }
    return linedefs;
};
//# sourceMappingURL=linedefs.js.map