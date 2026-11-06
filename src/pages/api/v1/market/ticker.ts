import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort(), 5000);

	let marketData = {
		btc: { usd: 91850, try: 3536000, change24h: 3.2 },
		eth: { usd: 3420, try: 131670, change24h: 2.1 },
		sol: { usd: 198.5, try: 7640, change24h: 5.8 },
		usdt: { try: 38.52, usd: 1.0001, change24h: 0.05 },
		gas: { gwei: 16, usd: 1.85 },
		fng: { value: 74, status: 'Açgözlülük' }
	};
	let isStale = true;

	try {
		const res = await fetch(
			'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,tether&vs_currencies=usd,try&include_24hr_change=true',
			{ signal: controller.signal }
		);
		clearTimeout(timeoutId);

		if (res.ok) {
			const json = await res.json() as Record<string, { usd: number; try: number; usd_24h_change?: number }>;
			if (json.bitcoin && json.ethereum && json.tether) {
				marketData.btc = {
					usd: json.bitcoin.usd,
					try: json.bitcoin.try,
					change24h: parseFloat((json.bitcoin.usd_24h_change || 0).toFixed(2))
				};
				marketData.eth = {
					usd: json.ethereum.usd,
					try: json.ethereum.try,
					change24h: parseFloat((json.ethereum.usd_24h_change || 0).toFixed(2))
				};
				if (json.solana) {
					marketData.sol = {
						usd: json.solana.usd,
						try: json.solana.try,
						change24h: parseFloat((json.solana.usd_24h_change || 0).toFixed(2))
					};
				}
				marketData.usdt = {
					try: json.tether.try,
					usd: json.tether.usd,
					change24h: parseFloat((json.tether.usd_24h_change || 0).toFixed(2))
				};
				isStale = false;
			}
		}
	} catch {
		// Fallback to cached default
	}

	return new Response(JSON.stringify({
		ok: true,
		data: marketData,
		meta: {
			source: 'coingecko',
			fetchedAt: new Date().toISOString(),
			ttl: 60,
			stale: isStale
		}
	}), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'public, max-age=30, s-maxage=60',
		}
	});
};
