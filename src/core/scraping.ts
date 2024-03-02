type scraping = {
  url: string;
  web: (param: Document) => void;
  failed: (param: any) => void;
};

export const $scraping = async ({
  url,
  web,
  failed
}: scraping) => {
  const parser: DOMParser = new DOMParser()

  try {
    const res = await fetch(`https://api-scraping.vercel.app/api/scraping?url=${url}`)
    
    if(!res.ok) {
    	throw new Error(`HTTP error: ${res.status}`)
    }
    
    const data = await res.text()

    const page: Document = parser.parseFromString(data, 'text/html')

    web(page)
  } catch (err) { failed(err) }
};


