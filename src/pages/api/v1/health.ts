import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	const body = {
		ok: true,
		data: {
			status: 'operational',
			service: 'kriptonik-edge-api',
			version: '2.0.0',
			timestamp: new Date().toISOString(),
		},
		meta: {
			source: 'kriptonik-worker',
			fetchedAt: new Date().toISOString(),
			ttl: 0,
			stale: false,
		}
	};

	return new Response(JSON.stringify(body), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'no-store',
		}
	});
};
