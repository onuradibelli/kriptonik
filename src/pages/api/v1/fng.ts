import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort(), 5000);

	let fngData = {
		value: 74,
		classification_en: 'Greed',
		classification_tr: 'Açgözlülük',
		timestamp: Math.floor(Date.now() / 1000)
	};
	let isStale = true;

	try {
		const res = await fetch('https://api.alternative.me/fng/?limit=1', { signal: controller.signal });
		clearTimeout(timeoutId);

		if (res.ok) {
			const json = await res.json() as { data: Array<{ value: string; value_classification: string; timestamp: string }> };
			if (json.data && json.data.length > 0) {
				const item = json.data[0];
				const val = parseInt(item.value, 10);
				let trClass = 'Nötr';
				if (val <= 24) trClass = 'Aşırı Korku';
				else if (val <= 49) trClass = 'Korku';
				else if (val <= 54) trClass = 'Nötr';
				else if (val <= 74) trClass = 'Açgözlülük';
				else trClass = 'Aşırı Açgözlülük';

				fngData = {
					value: val,
					classification_en: item.value_classification,
					classification_tr: trClass,
					timestamp: parseInt(item.timestamp, 10)
				};
				isStale = false;
			}
		}
	} catch {
		// Use fallback
	}

	return new Response(JSON.stringify({
		ok: true,
		data: fngData,
		meta: {
			source: 'alternative.me',
			fetchedAt: new Date().toISOString(),
			ttl: 3600,
			stale: isStale
		}
	}), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'public, max-age=1800, s-maxage=3600',
		}
	});
};
