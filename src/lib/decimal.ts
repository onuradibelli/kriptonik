/**
 * Finansal Hesaplamalar İçin Yüksek Hassasiyetli Ondalık Kütüphanesi
 * Kriptonik - Javascript 0.1 + 0.2 != 0.3 kayıplarını engellemek için tasarlanmıştır.
 */

export class SafeDecimal {
	private val: number;

	constructor(v: number | string | SafeDecimal) {
		if (v instanceof SafeDecimal) {
			this.val = v.val;
		} else if (typeof v === 'number') {
			this.val = v;
		} else {
			this.val = parseFloat(v) || 0;
		}
	}

	static from(v: number | string | SafeDecimal): SafeDecimal {
		return new SafeDecimal(v);
	}

	plus(other: number | string | SafeDecimal): SafeDecimal {
		const b = new SafeDecimal(other).val;
		// Virgülden sonraki basamakları 8 hane ölçekleyerek topla
		const factor = 1e8;
		return new SafeDecimal(Math.round(this.val * factor + b * factor) / factor);
	}

	minus(other: number | string | SafeDecimal): SafeDecimal {
		const b = new SafeDecimal(other).val;
		const factor = 1e8;
		return new SafeDecimal(Math.round(this.val * factor - b * factor) / factor);
	}

	times(other: number | string | SafeDecimal): SafeDecimal {
		const b = new SafeDecimal(other).val;
		return new SafeDecimal(this.val * b);
	}

	div(other: number | string | SafeDecimal): SafeDecimal {
		const b = new SafeDecimal(other).val;
		if (b === 0) return new SafeDecimal(0);
		return new SafeDecimal(this.val / b);
	}

	toNumber(): number {
		return this.val;
	}

	toFixed(fractionDigits = 2): string {
		return this.val.toFixed(fractionDigits);
	}
}

export function dec(v: number | string | SafeDecimal): SafeDecimal {
	return new SafeDecimal(v);
}
