"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const size = 4;
exports.vertexes = (view) => {
    const count = view.byteLength / size;
    const getVertex = (view, offset) => {
        const x = util_1.readInt16(view, offset);
        const y = util_1.readInt16(view, offset + 2);
        return { x, y };
    };
    const vertexes = Array(count);
    for (var i = 0; i < count; i++) {
        vertexes[i] = getVertex(view, i * size);
    }
    return vertexes;
};
//# sourceMappingURL=vertexes.js.map