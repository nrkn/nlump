"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const size = 10;
exports.things = (view) => {
    const count = view.byteLength / size;
    const getFlags = flags => ({
        easy: !!(flags & 0x0001),
        medium: !!(flags & 0x0002),
        hard: !!(flags & 0x0004),
        deaf: !!(flags & 0x0008),
        multiplayer: !!(flags & 0x0010)
    });
    const getThing = (view, offset) => {
        const x = util_1.readInt16(view, offset);
        const y = util_1.readInt16(view, offset + 2);
        const angle = util_1.readInt16(view, offset + 4);
        const type = util_1.readInt16(view, offset + 6);
        const flags = getFlags(util_1.readInt16(view, offset + 8));
        return {
            x, y, angle, type, flags
        };
    };
    const things = Array(count);
    for (var i = 0; i < count; i++) {
        things[i] = getThing(view, i * size);
    }
    return things;
};
//# sourceMappingURL=things.js.map