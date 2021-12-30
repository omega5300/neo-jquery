declare type scraping = {
    url: string;
    web: (param: Document) => void;
    failed: (param: any) => void;
};
declare const $scraping: ({ url, web, failed }: scraping) => Promise<void>;
export = { $scraping };
