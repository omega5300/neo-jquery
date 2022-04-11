declare type scraping = {
    url: string;
    web: (param: Document) => void;
    failed: (param: any) => void;
};
declare const _default: {
    $scraping: ({ url, web, failed }: scraping) => Promise<void>;
};
export = _default;
