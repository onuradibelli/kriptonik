export interface CurrencyInfo {
	code: string;
	name: string;
	pluralName: string;
	symbol: string;
	kind: 'fiat' | 'crypto';
	tryRate: number;
	usdRate: number;
}

export const currencies: Record<string, CurrencyInfo> = {
	USD: {
		code: 'USD',
		name: 'Dolar',
		pluralName: 'Amerikan Doları',
		symbol: '$',
		kind: 'fiat',
		tryRate: 38.52,
		usdRate: 1.0
	},
	EUR: {
		code: 'EUR',
		name: 'Euro',
		pluralName: 'Euro',
		symbol: '€',
		kind: 'fiat',
		tryRate: 41.60,
		usdRate: 1.08
	},
	BTC: {
		code: 'BTC',
		name: 'Bitcoin',
		pluralName: 'Bitcoin',
		symbol: '₿',
		kind: 'crypto',
		tryRate: 3538062,
		usdRate: 91850
	},
	ETH: {
		code: 'ETH',
		name: 'Ethereum',
		pluralName: 'Ethereum',
		symbol: 'Ξ',
		kind: 'crypto',
		tryRate: 131738,
		usdRate: 3420
	},
	USDT: {
		code: 'USDT',
		name: 'Tether (USDT)',
		pluralName: 'Tether USD',
		symbol: '₮',
		kind: 'crypto',
		tryRate: 38.65,
		usdRate: 1.0002
	},
	SOL: {
		code: 'SOL',
		name: 'Solana',
		pluralName: 'Solana',
		symbol: '◎',
		kind: 'crypto',
		tryRate: 7646,
		usdRate: 198.5
	},
	TRY: {
		code: 'TRY',
		name: 'Türk Lirası',
		pluralName: 'Türk Lirası',
		symbol: '₺',
		kind: 'fiat',
		tryRate: 1.0,
		usdRate: 1 / 38.52
	}
};

export interface ConversionRoute {
	slug: string;
	amount: number;
	from: string;
	to: string;
	category: 'dolar-tl' | 'btc-tl' | 'eth-tl' | 'usdt-tl' | 'sol-tl' | 'euro-tl' | 'tl-dolar' | 'tl-btc' | 'crypto-usd';
}

export const conversionRoutes: ConversionRoute[] = [
	// Dolar -> TL
	{ slug: '1-dolar-kac-tl', amount: 1, from: 'USD', to: 'TRY', category: 'dolar-tl' },
	{ slug: '5-dolar-kac-tl', amount: 5, from: 'USD', to: 'TRY', category: 'dolar-tl' },
	{ slug: '10-dolar-kac-tl', amount: 10, from: 'USD', to: 'TRY', category: 'dolar-tl' },
	{ slug: '20-dolar-kac-tl', amount: 20, from: 'USD', to: 'TRY', category: 'dolar-tl' },
	{ slug: '50-dolar-kac-tl', amount: 50, from: 'USD', to: 'TRY', category: 'dolar-tl' },
	{ slug: '100-dolar-kac-tl', amount: 100, from: 'USD', to: 'TRY', category: 'dolar-tl' },
	{ slug: '200-dolar-kac-tl', amount: 200, from: 'USD', to: 'TRY', category: 'dolar-tl' },
	{ slug: '500-dolar-kac-tl', amount: 500, from: 'USD', to: 'TRY', category: 'dolar-tl' },
	{ slug: '1000-dolar-kac-tl', amount: 1000, from: 'USD', to: 'TRY', category: 'dolar-tl' },
	{ slug: '5000-dolar-kac-tl', amount: 5000, from: 'USD', to: 'TRY', category: 'dolar-tl' },
	{ slug: '10000-dolar-kac-tl', amount: 10000, from: 'USD', to: 'TRY', category: 'dolar-tl' },
	{ slug: '100000-dolar-kac-tl', amount: 100000, from: 'USD', to: 'TRY', category: 'dolar-tl' },

	// Euro -> TL
	{ slug: '1-euro-kac-tl', amount: 1, from: 'EUR', to: 'TRY', category: 'euro-tl' },
	{ slug: '10-euro-kac-tl', amount: 10, from: 'EUR', to: 'TRY', category: 'euro-tl' },
	{ slug: '50-euro-kac-tl', amount: 50, from: 'EUR', to: 'TRY', category: 'euro-tl' },
	{ slug: '100-euro-kac-tl', amount: 100, from: 'EUR', to: 'TRY', category: 'euro-tl' },
	{ slug: '500-euro-kac-tl', amount: 500, from: 'EUR', to: 'TRY', category: 'euro-tl' },
	{ slug: '1000-euro-kac-tl', amount: 1000, from: 'EUR', to: 'TRY', category: 'euro-tl' },

	// Bitcoin -> TL
	{ slug: '0-001-bitcoin-kac-tl', amount: 0.001, from: 'BTC', to: 'TRY', category: 'btc-tl' },
	{ slug: '0-01-bitcoin-kac-tl', amount: 0.01, from: 'BTC', to: 'TRY', category: 'btc-tl' },
	{ slug: '0-05-bitcoin-kac-tl', amount: 0.05, from: 'BTC', to: 'TRY', category: 'btc-tl' },
	{ slug: '0-1-bitcoin-kac-tl', amount: 0.1, from: 'BTC', to: 'TRY', category: 'btc-tl' },
	{ slug: '0-5-bitcoin-kac-tl', amount: 0.5, from: 'BTC', to: 'TRY', category: 'btc-tl' },
	{ slug: '1-bitcoin-kac-tl', amount: 1, from: 'BTC', to: 'TRY', category: 'btc-tl' },
	{ slug: '2-bitcoin-kac-tl', amount: 2, from: 'BTC', to: 'TRY', category: 'btc-tl' },
	{ slug: '5-bitcoin-kac-tl', amount: 5, from: 'BTC', to: 'TRY', category: 'btc-tl' },
	{ slug: '10-bitcoin-kac-tl', amount: 10, from: 'BTC', to: 'TRY', category: 'btc-tl' },

	// Ethereum -> TL
	{ slug: '0-01-ethereum-kac-tl', amount: 0.01, from: 'ETH', to: 'TRY', category: 'eth-tl' },
	{ slug: '0-1-ethereum-kac-tl', amount: 0.1, from: 'ETH', to: 'TRY', category: 'eth-tl' },
	{ slug: '0-5-ethereum-kac-tl', amount: 0.5, from: 'ETH', to: 'TRY', category: 'eth-tl' },
	{ slug: '1-ethereum-kac-tl', amount: 1, from: 'ETH', to: 'TRY', category: 'eth-tl' },
	{ slug: '2-ethereum-kac-tl', amount: 2, from: 'ETH', to: 'TRY', category: 'eth-tl' },
	{ slug: '5-ethereum-kac-tl', amount: 5, from: 'ETH', to: 'TRY', category: 'eth-tl' },
	{ slug: '10-ethereum-kac-tl', amount: 10, from: 'ETH', to: 'TRY', category: 'eth-tl' },

	// USDT (Tether) -> TL
	{ slug: '1-usdt-kac-tl', amount: 1, from: 'USDT', to: 'TRY', category: 'usdt-tl' },
	{ slug: '10-usdt-kac-tl', amount: 10, from: 'USDT', to: 'TRY', category: 'usdt-tl' },
	{ slug: '50-usdt-kac-tl', amount: 50, from: 'USDT', to: 'TRY', category: 'usdt-tl' },
	{ slug: '100-usdt-kac-tl', amount: 100, from: 'USDT', to: 'TRY', category: 'usdt-tl' },
	{ slug: '200-usdt-kac-tl', amount: 200, from: 'USDT', to: 'TRY', category: 'usdt-tl' },
	{ slug: '500-usdt-kac-tl', amount: 500, from: 'USDT', to: 'TRY', category: 'usdt-tl' },
	{ slug: '1000-usdt-kac-tl', amount: 1000, from: 'USDT', to: 'TRY', category: 'usdt-tl' },
	{ slug: '5000-usdt-kac-tl', amount: 5000, from: 'USDT', to: 'TRY', category: 'usdt-tl' },
	{ slug: '10000-usdt-kac-tl', amount: 10000, from: 'USDT', to: 'TRY', category: 'usdt-tl' },

	// Solana -> TL
	{ slug: '1-solana-kac-tl', amount: 1, from: 'SOL', to: 'TRY', category: 'sol-tl' },
	{ slug: '5-solana-kac-tl', amount: 5, from: 'SOL', to: 'TRY', category: 'sol-tl' },
	{ slug: '10-solana-kac-tl', amount: 10, from: 'SOL', to: 'TRY', category: 'sol-tl' },
	{ slug: '20-solana-kac-tl', amount: 20, from: 'SOL', to: 'TRY', category: 'sol-tl' },

	// TL -> Dolar
	{ slug: '100-tl-kac-dolar', amount: 100, from: 'TRY', to: 'USD', category: 'tl-dolar' },
	{ slug: '500-tl-kac-dolar', amount: 500, from: 'TRY', to: 'USD', category: 'tl-dolar' },
	{ slug: '1000-tl-kac-dolar', amount: 1000, from: 'TRY', to: 'USD', category: 'tl-dolar' },
	{ slug: '2000-tl-kac-dolar', amount: 2000, from: 'TRY', to: 'USD', category: 'tl-dolar' },
	{ slug: '5000-tl-kac-dolar', amount: 5000, from: 'TRY', to: 'USD', category: 'tl-dolar' },
	{ slug: '10000-tl-kac-dolar', amount: 10000, from: 'TRY', to: 'USD', category: 'tl-dolar' },
	{ slug: '50000-tl-kac-dolar', amount: 50000, from: 'TRY', to: 'USD', category: 'tl-dolar' },
	{ slug: '100000-tl-kac-dolar', amount: 100000, from: 'TRY', to: 'USD', category: 'tl-dolar' },

	// TL -> Bitcoin
	{ slug: '1000-tl-kac-bitcoin', amount: 1000, from: 'TRY', to: 'BTC', category: 'tl-btc' },
	{ slug: '5000-tl-kac-bitcoin', amount: 5000, from: 'TRY', to: 'BTC', category: 'tl-btc' },
	{ slug: '10000-tl-kac-bitcoin', amount: 10000, from: 'TRY', to: 'BTC', category: 'tl-btc' },
	{ slug: '50000-tl-kac-bitcoin', amount: 50000, from: 'TRY', to: 'BTC', category: 'tl-btc' },
	{ slug: '100000-tl-kac-bitcoin', amount: 100000, from: 'TRY', to: 'BTC', category: 'tl-btc' },
	{ slug: '500000-tl-kac-bitcoin', amount: 50000, from: 'TRY', to: 'BTC', category: 'tl-btc' },
	{ slug: '1000000-tl-kac-bitcoin', amount: 1000000, from: 'TRY', to: 'BTC', category: 'tl-btc' },

	// Kripto -> USD
	{ slug: '1-bitcoin-kac-dolar', amount: 1, from: 'BTC', to: 'USD', category: 'crypto-usd' },
	{ slug: '0-1-bitcoin-kac-dolar', amount: 0.1, from: 'BTC', to: 'USD', category: 'crypto-usd' },
	{ slug: '1-ethereum-kac-dolar', amount: 1, from: 'ETH', to: 'USD', category: 'crypto-usd' },
	{ slug: '1-solana-kac-dolar', amount: 1, from: 'SOL', to: 'USD', category: 'crypto-usd' }
];

export function calculateRate(fromCode: string, toCode: string): number {
	const from = currencies[fromCode];
	const to = currencies[toCode];
	if (!from || !to) return 0;

	if (toCode === 'TRY') {
		return from.tryRate;
	}
	if (fromCode === 'TRY') {
		return 1 / to.tryRate;
	}
	if (toCode === 'USD') {
		return from.usdRate;
	}
	if (fromCode === 'USD') {
		return 1 / to.usdRate;
	}
	// Cross rate
	return from.tryRate / to.tryRate;
}

export function formatNumberTR(num: number, maxDecimals = 2): string {
	if (num >= 1000) {
		return num.toLocaleString('tr-TR', { maximumFractionDigits: maxDecimals, minimumFractionDigits: 2 });
	}
	if (num >= 1) {
		return num.toLocaleString('tr-TR', { maximumFractionDigits: Math.max(2, maxDecimals), minimumFractionDigits: 2 });
	}
	// Small decimal
	return num.toLocaleString('tr-TR', { maximumFractionDigits: 6, minimumFractionDigits: 4 });
}
