import { describe, it, expect } from 'vitest';
import { parseTrNumber, formatTrNumber, formatTry, formatCrypto, truncateMiddle, detectSeedPhrase } from './format';

describe('Sayı Ayrıştırma (parseTrNumber)', () => {
	it('Farklı ondalık ve binlik formatlarını doğru ayrıştırmalı', () => {
		expect(parseTrNumber("1.234,56")).toBe(1234.56);
		expect(parseTrNumber("1,234.56")).toBe(1234.56);
		expect(parseTrNumber("1,5")).toBe(1.5);
		expect(parseTrNumber("1.5")).toBe(1.5);
		expect(parseTrNumber("1.234")).toBe(1.234);
		expect(parseTrNumber("1000")).toBe(1000);
		expect(parseTrNumber("1.000.000")).toBe(1000000);
	});

	it('Geçersiz, negatif veya saçma girişleri reddetmeli', () => {
		expect(parseTrNumber("abc")).toBeNull();
		expect(parseTrNumber("-150")).toBeNull();
		expect(parseTrNumber("")).toBeNull();
		expect(parseTrNumber("NaN")).toBeNull();
	});
});

describe('Sayı ve Para Formatlama', () => {
	it('Türkçe format üretmeli', () => {
		expect(formatTrNumber(1234.56)).toBe('1.234,56');
		expect(formatTry(1234.5)).toBe('₺1.234,50');
		expect(formatCrypto(0.00425, 'BTC')).toBe('0,00425 BTC');
	});

	it('Ortadan kısaltma doğru çalışmalı', () => {
		expect(truncateMiddle('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045', 6, 4)).toBe('0xd8dA...6045');
	});
});

describe('Seed Phrase Güvenlik Tespiti', () => {
	it('12 ve 24 kelimelik kurtarma ifadelerini tespit etmeli', () => {
		const seed12 = "apple banana cherry dog elephant fox grape horse igloo jaguar kite lion";
		expect(detectSeedPhrase(seed12)).toBe(true);

		const normalText = "USDT transferim beklemede kaldı";
		expect(detectSeedPhrase(normalText)).toBe(false);
	});
});
