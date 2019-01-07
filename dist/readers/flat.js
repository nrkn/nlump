"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const width = 64;
const height = 64;
const count = width * height;
exports.flat = (view) => {
    const data = new Uint8Array(count);
    for (let i = 0; i < count; i++) {
        data[i] = util_1.readUint8(view, i);
    }
    return { width, height, data };
};
//# sourceMappingURL=flat.js.map