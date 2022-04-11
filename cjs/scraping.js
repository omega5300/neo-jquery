const $scraping = async ({ url, web, failed }) => {
    const parser = new DOMParser();
    try {
        const res = await fetch(`https://api-scraping.vercel.app/api/scraping?url=${url}`);
        const data = await res.text();
        const page = parser.parseFromString(data, 'text/html');
        web(page);
    }
    catch (err) {
        failed(err);
    }
};
module.exports = { $scraping };
