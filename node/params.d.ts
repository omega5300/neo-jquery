type Params = {
    paramsList: string;
    paramsNameAppend: string;
    splitparams: string;
};
declare const $urlParams: ({ paramsList, splitparams, paramsNameAppend }: Params) => URLSearchParams;
export { $urlParams };
