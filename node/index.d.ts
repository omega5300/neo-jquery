interface Props {
    [s: string]: any;
}
declare const $writeFile: (filename: string, data: any | any[]) => Promise<void>;
declare const $osInfo: Readonly<Props>;
declare const $url: (url: string) => URL;
export { $writeFile, $osInfo, $url };
