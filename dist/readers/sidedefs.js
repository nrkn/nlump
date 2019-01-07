"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const size = 30;
exports.sidedefs = (view) => {
    const count = view.byteLength / size;
    const getSidedef = (view, offset) => {
        const x = util_1.readInt16(view, offset);
        const y = util_1.readInt16(view, offset + 2);
        const upper = util_1.readAscii(view, offset + 4, offset + 12);
        const lower = util_1.readAscii(view, offset + 12, offset + 20);
        const middle = util_1.readAscii(view, offset + 20, offset + 28);
        const sector = util_1.readInt16(view, offset + 28);
        return {
            x, y, upper, lower, middle, sector
        };
    };
    const sidedefs = Array(count);
    for (let i = 0; i < count; i++) {
        sidedefs[i] = getSidedef(view, i * size);
    }
    return sidedefs;
};
//# sourceMappingURL=sidedefs.js.map