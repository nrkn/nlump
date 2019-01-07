"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readUint8 = (view, offset) => view.getUint8(offset);
exports.readInt16 = (view, offset) => view.getInt16(offset, true);
exports.readInt32 = (view, offset) => view.getInt32(offset, true);
exports.readAscii = (view, from, to) => {
    let result = '';
    for (let i = from; i < to; i++) {
        result += String.fromCharCode(view.getUint8(i));
    }
    return result.replace(/\0/g, '');
};
//# sourceMappingURL=util.js.map