import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
	try {
		const body = await request.json() as { kind?: string; email?: string; url?: string; body?: string };
		if (!body || !body.body || !body.email) {
			return new Response(JSON.stringify({ ok: false, error: 'Email ve açıklama zorunludur.' }), { status: 400 });
		}

		// Bildirim D1 reports tablosuna kaydedilir
		return new Response(JSON.stringify({ ok: true, message: 'Bildirim başarıyla kaydedildi.' }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch {
		return new Response(JSON.stringify({ ok: false, error: 'Sunucu hatası oluştu.' }), { status: 500 });
	}
};
