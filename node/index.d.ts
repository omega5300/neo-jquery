interface Props {
    [s: string]: any;
}
declare const $writeFile: (filename: string, data: any | any[]) => Promise<void>;
declare const $osInfo: Readonly<Props>;
export { $writeFile, $osInfo };
