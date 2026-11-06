/**
 * Çerezsiz, Gizlilik Öncelikli Anonim Olay Sayacı
 * Kullanıcı kimliği, IP veya cihaz bilgisi tutmaz; yalnız genel kullanım sayılarını artırır.
 * DNT (Do Not Track) aktifse hiçbir istek göndermez.
 */

export type EventAction = 'view' | 'submit' | 'success' | 'error';

export function trackEvent(tool: string, action: EventAction): void {
	if (typeof window === 'undefined') return;

	// Do Not Track kontrolü
	if (navigator.doNotTrack === '1' || (window as unknown as { doNotTrack?: string }).doNotTrack === '1') {
		return;
	}

	try {
		fetch('/api/v1/event', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ tool, action }),
			keepalive: true,
		}).catch(() => {
			// Başarısız olursa sessizce geç
		});
	} catch {
		// Hata oluşursa sessizce geç
	}
}
