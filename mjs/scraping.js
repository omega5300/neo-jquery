const $scraping = async ({ url, web, failed }) => {
    const parser = new DOMParser();
    try {
        const res = await fetch(`http://neo-jquery.000webhostapp.com/app.php?web=${url}`);
        const data = await res.text();
        const page = parser.parseFromString(data, 'text/html');
        web(page);
    }
    catch (err) {
        failed(err);
    }
};
export { $scraping };
