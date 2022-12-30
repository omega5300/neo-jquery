Object.defineProperty(exports, "__esModule", { value: true });
exports.$writeFile = void 0;
const promises_1 = require("node:fs/promises");
const $writeFile = async (filename, data) => {
    // detect falsy values
    if (!data) {
        console.error('$writeFile no using falsy values');
        return;
    }
    if (typeof data === 'boolean') {
        console.info('$writeFile no using boolean types');
        return;
    }
    try {
        await (0, promises_1.writeFile)(filename, data);
    }
    catch (err) {
        console.error(err.message);
    }
};
exports.$writeFile = $writeFile;
