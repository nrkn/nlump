"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const size = 28;
exports.nodes = (view) => {
    const count = view.byteLength / size;
    const getNode = (view, offset) => {
        const x = util_1.readInt16(view, offset);
        const y = util_1.readInt16(view, offset + 2);
        const offsetX = util_1.readInt16(view, offset + 4);
        const offsetY = util_1.readInt16(view, offset + 6);
        const leftBBox = {
            top: util_1.readInt16(view, offset + 8),
            bottom: util_1.readInt16(view, offset + 10),
            left: util_1.readInt16(view, offset + 12),
            right: util_1.readInt16(view, offset + 14)
        };
        const rightBBox = {
            top: util_1.readInt16(view, offset + 16),
            bottom: util_1.readInt16(view, offset + 18),
            left: util_1.readInt16(view, offset + 20),
            right: util_1.readInt16(view, offset + 22)
        };
        const rightChild = util_1.readInt16(view, offset + 24);
        const leftChild = util_1.readInt16(view, offset + 26);
        return {
            x, y, offsetX, offsetY, leftBBox, rightBBox, rightChild, leftChild
        };
    };
    const nodes = Array(count);
    for (let i = 0; i < count; i++) {
        nodes[i] = getNode(view, i * size);
    }
    return nodes;
};
//# sourceMappingURL=nodes.js.map