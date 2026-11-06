import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
	const url = new URL(request.url);
	const hash = url.searchParams.get('hash')?.trim();

	if (!hash) {
		return new Response(JSON.stringify({
			ok: false,
			error: { code: 'INVALID_HASH', message: 'Lütfen geçerli bir işlem hash kodu giriniz.' }
		}), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	const isEVM = /^0x[a-fA-F0-9]{64}$/.test(hash);
	const isBTC = /^[a-fA-F0-9]{64}$/.test(hash) && !hash.startsWith('0x');

	if (isBTC) {
		// Bitcoin mempool.space proxy
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 6000);

		try {
			const res = await fetch(`https://mempool.space/api/tx/${hash}`, { signal: controller.signal });
			clearTimeout(timeoutId);

			if (res.ok) {
				const tx = await res.json() as {
					txid: string;
					status: { confirmed: boolean; block_height?: number; block_time?: number };
					fee: number;
					weight: number;
					vin: Array<{ sequence: number }>;
				};

				const isRBF = tx.vin.some(input => input.sequence < 0xfffffffe);
				const vsize = Math.ceil(tx.weight / 4);
				const feeRate = parseFloat((tx.fee / vsize).toFixed(1));

				return new Response(JSON.stringify({
					ok: true,
					data: {
						chain: 'bitcoin',
						status: tx.status.confirmed ? 'confirmed' : 'pending',
						block_height: tx.status.block_height,
						block_time: tx.status.block_time,
						fee_sat: tx.fee,
						fee_rate_sat_vb: feeRate,
						vsize,
						rbf_enabled: isRBF
					},
					meta: {
						source: 'mempool.space',
						fetchedAt: new Date().toISOString(),
						ttl: 15,
						stale: false
					}
				}), {
					status: 200,
					headers: {
						'Content-Type': 'application/json',
						'Cache-Control': 'public, max-age=15',
					}
				});
			} else if (res.status === 404) {
				return new Response(JSON.stringify({
					ok: true,
					data: { chain: 'bitcoin', status: 'not_found', message: 'İşlem mempool kuyruğunda bulunamadı veya henüz yayılmadı.' },
					meta: { source: 'mempool.space', fetchedAt: new Date().toISOString(), ttl: 15, stale: false }
				}), { status: 200, headers: { 'Content-Type': 'application/json' } });
			}
		} catch {
			// Upstream timeout
		}
	}

	return new Response(JSON.stringify({
		ok: true,
		data: {
			chain: isEVM ? 'evm' : (isBTC ? 'bitcoin' : 'unknown'),
			format_valid: isEVM || isBTC,
			status: 'detected'
		},
		meta: {
			source: 'kriptonik-node',
			fetchedAt: new Date().toISOString(),
			ttl: 30,
			stale: false
		}
	}), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'public, max-age=15',
		}
	});
};
