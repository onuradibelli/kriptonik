/**
 * URL Parametre Senkronizasyon Yardımcıları
 * Araçların durumunu URL sorgu parametrelerine bağlar ve paylaşılabilir kılar.
 */

export function getUrlParams(): Record<string, string> {
	if (typeof window === 'undefined') return {};
	const params = new URLSearchParams(window.location.search);
	const result: Record<string, string> = {};
	params.forEach((value, key) => {
		result[key] = value;
	});
	return result;
}

export function getUrlParam(key: string, defaultValue = ''): string {
	if (typeof window === 'undefined') return defaultValue;
	const params = new URLSearchParams(window.location.search);
	return params.get(key) || defaultValue;
}

export function setUrlParams(paramsRecord: Record<string, string | number | undefined | null>, pushState = false): void {
	if (typeof window === 'undefined') return;

	const url = new URL(window.location.href);
	Object.entries(paramsRecord).forEach(([key, val]) => {
		if (val === undefined || val === null || val === '') {
			url.searchParams.delete(key);
		} else {
			url.searchParams.set(key, String(val));
		}
	});

	if (pushState) {
		window.history.pushState({}, '', url.toString());
	} else {
		window.history.replaceState({}, '', url.toString());
	}
}

/**
 * Paylaşım için temiz bir URL üretir.
 * Hassas olabilecek parametreleri (örneğin kullanıcı adresi veya hash) isteğe bağlı hariç tutar.
 */
export function createShareableUrl(excludeKeys: string[] = []): string {
	if (typeof window === 'undefined') return '';
	const url = new URL(window.location.href);
	excludeKeys.forEach(k => url.searchParams.delete(k));
	return url.toString();
}
