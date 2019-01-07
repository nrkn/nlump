"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const size = 12;
exports.segs = (view) => {
    const count = view.byteLength / size;
    const getSeg = (view, offs) => {
        const startVertex = util_1.readInt16(view, offs);
        const endVertex = util_1.readInt16(view, offs + 2);
        const angle = util_1.readInt16(view, offs + 4);
        const linedef = util_1.readInt16(view, offs + 6);
        const direction = util_1.readInt16(view, offs + 8);
        const offset = util_1.readInt16(view, offs + 10);
        return {
            startVertex, endVertex, angle, linedef, direction, offset
        };
    };
    const segs = Array(count);
    for (let i = 0; i < count; i++) {
        segs[i] = getSeg(view, i * size);
    }
    return segs;
};
//# sourceMappingURL=segs.js.map