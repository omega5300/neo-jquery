type CurrentElement = HTMLElement | Element

interface Description {
	name: string
	value: string
}

const browserList: Description[] = [
	{ name: 'Firefox', value: 'Firefox' },
	{ name: 'Opera', value: 'Opera' },
	{ name: 'Chrome', value: 'Chrome' },
	{ name: 'Edge', value: 'Edge' },
	{ name: 'Safari', value: 'Safari' },
]

const osList: Description[] = [
	{ name: 'Android', value: 'Android' },
	{ name: 'iOs', value: 'ios' },
	{ name: 'Linux', value: 'Linux' },
	{ name: 'Windows', value: 'Windows' },
	{ name: 'Macintosh', value: 'Mac' },
	{ name: 'ipad', value: 'ipad' },
]

export const $browserChecker = ($os: CurrentElement, $browser: CurrentElement) => {
	const userAgent = navigator.userAgent;

	for(const prop in browserList) {
		if(userAgent.includes(browserList[prop].value)) {
			$browser.textContent = browserList[prop].name || 'Unknown Browser'
			break
		}
	}

	for(const prop in osList) {
		if(userAgent.includes(osList[prop].value)) {
			$os.textContent = osList[prop].name
			break
		}
	}
}
