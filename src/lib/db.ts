/**
 * Cloudflare D1 Veritabanı Yardımcısı ve Tip Tanımları
 * Kriptonik Master Spesifikasyon v2
 */

export interface ToolRecord {
	slug: string;
	category: string;
	title_tr: string;
	summary_tr: string;
	status: 'live' | 'beta' | 'soon' | 'hidden';
	sort: number;
	pinned: number;
	killed: number;
	seo_title?: string;
	seo_description?: string;
	updated_at: string;
}

export interface NetworkRecord {
	id: string;
	name: string;
	family: string;
	native_symbol: string;
	explorer_tx_url: string;
	avg_confirm_seconds: number;
	requires_memo: number;
}

export interface TokenContractRecord {
	token: string;
	network_id: string;
	address: string;
	decimals: number;
	verified_at: string;
	source_url: string;
}

export interface BrandRecord {
	domain: string;
	name: string;
	kind: string;
}

export interface D1DatabaseBinding {
	prepare: (query: string) => {
		bind: (...args: unknown[]) => {
			all: <T = unknown>() => Promise<{ results: T[]; success: boolean }>;
			first: <T = unknown>(colName?: string) => Promise<T | null>;
			run: () => Promise<{ success: boolean; meta: unknown }>;
		};
	};
}
