import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
	try {
		const body = await request.json() as { tool?: string; action?: string };
		if (!body || !body.tool || !body.action) {
			return new Response(JSON.stringify({ ok: false, error: 'Invalid payload' }), { status: 400 });
		}

		// Burada D1 events_daily tablosuna atomik sayaç eklenebilir
		// Kimlik veya IP asla kaydedilmez
		return new Response(JSON.stringify({ ok: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch {
		return new Response(JSON.stringify({ ok: false }), { status: 400 });
	}
};
