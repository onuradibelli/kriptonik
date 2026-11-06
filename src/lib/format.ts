/**
 * Türkçe ve Finansal Sayı Ayrıştırma ve Formatlama Yardımcıları
 * Kriptonik Master Spesifikasyon v2 uyumlu
 */

/**
 * Kullanıcı girdisini güvenli sayısal değere (number) dönüştürür.
 * 1234.56, 1.234,56, 1234,56, 1,5, 1.5 gibi formatları destekler.
 * Tek ayırıcı ve sağında tam 3 hane olduğunda ondalık kabul eder ("1.234" -> 1.234).
 */
export function parseTrNumber(raw: string | number): number | null {
	if (typeof raw === 'number') {
		if (isNaN(raw) || !isFinite(raw) || raw < 0 || raw > 1e15) return null;
		return raw;
	}

	if (!raw || typeof raw !== 'string') return null;
	const trimmed = raw.trim();
	if (!trimmed) return null;

	// Sadece geçerli karakterler içerip içermediğini kontrol et
	if (!/^[0-9.,\s]+$/.test(trimmed)) return null;

	// Boşlukları kaldır
	const clean = trimmed.replace(/\s+/g, '');

	const lastComma = clean.lastIndexOf(',');
	const lastDot = clean.lastIndexOf('.');

	let normalized = '';

	if (lastComma === -1 && lastDot === -1) {
		// Düz tamsayı
		normalized = clean;
	} else if (lastComma !== -1 && lastDot !== -1) {
		// Hem nokta hem virgül var: sonuncusu ondalık ayırıcıdır
		if (lastComma > lastDot) {
			// Örn: 1.234,56 -> 1234.56
			const withoutThousands = clean.substring(0, lastComma).replace(/\./g, '');
			const decimalPart = clean.substring(lastComma + 1);
			normalized = `${withoutThousands}.${decimalPart}`;
		} else {
			// Örn: 1,234.56 -> 1234.56
			const withoutThousands = clean.substring(0, lastDot).replace(/,/g, '');
			const decimalPart = clean.substring(lastDot + 1);
			normalized = `${withoutThousands}.${decimalPart}`;
		}
	} else {
		// Tek tip ayırıcı var: ya nokta ya virgül
		const sepIndex = lastComma !== -1 ? lastComma : lastDot;
		const char = clean[sepIndex];
		const occurrences = clean.split(char).length - 1;

		if (occurrences > 1) {
			// 1.000.000 veya 1,000,000 -> binlik ayırıcıdır
			normalized = clean.split(char).join('');
		} else {
			// Tek bir nokta veya virgül var (örn: 1.5 veya 1,5 veya 1.234)
			// Spesifikasyon kuralı: tek ayırıcı ve sağında 3 hane varsa da ondalık kabul edilir
			normalized = clean.replace(char, '.');
		}
	}

	const val = parseFloat(normalized);
	if (isNaN(val) || !isFinite(val) || val < 0 || val > 1e15) {
		return null;
	}
	return val;
}

/**
 * Sayıyı Türkçe standartlarında biçimlendirir (örn: 1.234,56)
 */
export function formatTrNumber(num: number, minDec = 0, maxDec = 2): string {
	if (num === null || num === undefined || isNaN(num) || !isFinite(num)) return '0';
	return new Intl.NumberFormat('tr-TR', {
		minimumFractionDigits: minDec,
		maximumFractionDigits: maxDec,
	}).format(num);
}

/**
 * Kripto miktarlarını hassas formatlar (virgülden sonra anlamlı basamaklar)
 */
export function formatCrypto(num: number, symbol?: string, maxDec = 8): string {
	if (num === null || num === undefined || isNaN(num) || !isFinite(num)) return symbol ? `0 ${symbol}` : '0';
	
	// Gereksiz sondaki sıfırları temizle
	const formatted = new Intl.NumberFormat('tr-TR', {
		minimumFractionDigits: 0,
		maximumFractionDigits: maxDec,
	}).format(num);

	return symbol ? `${formatted} ${symbol}` : formatted;
}

/**
 * Türk Lirası para formatı (₺1.250,50)
 */
export function formatTry(num: number): string {
	return `₺${formatTrNumber(num, 2, 2)}`;
}

/**
 * ABD Doları para formatı ($1,250.50)
 */
export function formatUsd(num: number): string {
	if (num < 1 && num > 0) {
		// Küçük rakamlarda 4 haneye kadar göster
		return `$${formatTrNumber(num, 2, 4)}`;
	}
	return `$${formatTrNumber(num, 2, 2)}`;
}

/**
 * Uzun cüzdan adreslerini veya işlem kodlarını ortadan kısaltır (0x1234...abcd)
 */
export function truncateMiddle(str: string, frontChars = 6, backChars = 4): string {
	if (!str) return '';
	if (str.length <= frontChars + backChars + 3) return str;
	return `${str.substring(0, frontChars)}...${str.substring(str.length - backChars)}`;
}

/**
 * Güvenlik kontrolü: Kullanıcının girdiği metnin bir BIP-39 kurtarma kelimesi
 * (12 veya 24 küçük harfli boşluklu kelime) olup olmadığını denetler.
 */
export function detectSeedPhrase(input: string): boolean {
	if (!input) return false;
	const words = input.trim().toLowerCase().split(/\s+/);
	if (words.length === 12 || words.length === 24) {
		// Tüm kelimeler sadece latin harflerinden mi oluşuyor?
		const allLetters = words.every(w => /^[a-z]{3,8}$/.test(w));
		if (allLetters) return true;
	}
	return false;
}
