"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$osInfo = exports.$writeFile = void 0;
const promises_1 = require("node:fs/promises");
const node_os_1 = require("node:os");
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
const $osInfo = {
    systemName: (0, node_os_1.platform)(),
    kernel: (0, node_os_1.release)(),
    osVersion: (0, node_os_1.version)(),
    arch: (0, node_os_1.arch)(),
    machine: (0, node_os_1.machine)(),
    cpu: (0, node_os_1.cpus)()[0].model,
    speed: `${((0, node_os_1.cpus)()[0].speed / 1e3).toFixed(2)} Ghz`,
    totalRam: `${((0, node_os_1.totalmem)() / 1e9).toFixed(2)} GB`,
    freeRam: `${((0, node_os_1.freemem)() / 1e9).toFixed(2)} GB`,
};
exports.$osInfo = $osInfo;
