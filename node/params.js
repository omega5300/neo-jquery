Object.defineProperty(exports, "__esModule", { value: true });
exports.$urlParams = void 0;
const $urlParams = ({ paramsList, splitparams, paramsNameAppend }) => {
    const params = new URLSearchParams();
    for (const item of paramsList.split(splitparams)) {
        params.append(paramsNameAppend, item);
    }
    return params;
};
exports.$urlParams = $urlParams;
