type scraping = {
  url: string;
  web: (param: Document) => void;
  failed: (param: any) => void;
};

const $scraping = async ({
  url,
  web,
  failed
}: scraping) => {
  const parser: DOMParser = new DOMParser()

  try {
    const res = await fetch(`http://neo-jquery.000webhostapp.com/app.php?web=${url}`)
    const data = await res.text()

    const page: Document = parser.parseFromString(data, 'text/html')

    web(page)
  } catch (err) { failed(err) }
}

export = { $scraping };