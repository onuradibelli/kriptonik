-- ============================================================================
-- KRİPTONİK: Admin Sistemi ve İçerik Yönetimi Şeması (Migration 0002)
-- ============================================================================

PRAGMA foreign_keys = ON;

-- 1. Kullanıcılar & Roller
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL CHECK (role IN ('owner', 'editor', 'viewer')),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  last_login_at TEXT
);

-- 2. Araç Yöneticisi
CREATE TABLE IF NOT EXISTS tools (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  summary TEXT NOT NULL,
  icon TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('urgent', 'security', 'calc', 'market')),
  status TEXT NOT NULL DEFAULT 'live' CHECK (status IN ('live', 'beta', 'soon', 'hidden')),
  data_flow TEXT NOT NULL DEFAULT 'client' CHECK (data_flow IN ('client', 'server')),
  data_flow_note TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  show_on_home INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 3. Rehberler (Mini CMS)
CREATE TABLE IF NOT EXISTS guides (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Kriptonik Teknik Saha Ekibi',
  category TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published', 'scheduled')),
  sources_json TEXT NOT NULL, -- Zorunlu kaynak listesi
  related_tool_slug TEXT,
  seo_title TEXT,
  seo_desc TEXT,
  published_at TEXT NOT NULL DEFAULT (datetime('now')),
  reviewed_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 4. Sözlük Terimleri
CREATE TABLE IF NOT EXISTS glossary_terms (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  term TEXT NOT NULL,
  short_def TEXT NOT NULL,
  full_desc TEXT,
  category TEXT NOT NULL,
  related_terms_json TEXT,
  related_tool_slug TEXT,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 5. Affiliate / Gelir Yönetimi
CREATE TABLE IF NOT EXISTS affiliate_links (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  target_url TEXT NOT NULL,
  associated_tool_or_guide TEXT,
  has_mandatory_disclosure INTEGER NOT NULL DEFAULT 1 CHECK (has_mandatory_disclosure = 1), -- Zorunlu reklam/ortaklık beyanı olmadan yayınlanamaz
  disclosure_text TEXT NOT NULL,
  clicks_count INTEGER NOT NULL DEFAULT 0,
  is_active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 6. Duyurular (Global Banner)
CREATE TABLE IF NOT EXISTS announcements (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  level TEXT NOT NULL DEFAULT 'info' CHECK (level IN ('info', 'warn', 'danger')),
  target_paths TEXT NOT NULL DEFAULT '*', -- Hangi sayfalarda görünecek
  is_active INTEGER NOT NULL DEFAULT 0,
  start_at TEXT,
  end_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 7. Site Ayarları
CREATE TABLE IF NOT EXISTS site_settings (
  key TEXT PRIMARY KEY,
  value_text TEXT NOT NULL,
  description TEXT,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 8. Denetim Günlüğü (Audit Log - Silinemez)
CREATE TABLE IF NOT EXISTS audit_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts TEXT NOT NULL DEFAULT (datetime('now')),
  user_email TEXT NOT NULL,
  action TEXT NOT NULL,
  entity TEXT NOT NULL,
  entity_id TEXT,
  before_json TEXT,
  after_json TEXT
);
CREATE INDEX IF NOT EXISTS idx_audit_log_ts ON audit_log(ts);

-- 9. Feature Flags
CREATE TABLE IF NOT EXISTS feature_flags (
  key TEXT PRIMARY KEY,
  enabled INTEGER NOT NULL DEFAULT 1,
  description TEXT,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- SEED VERİSİ
INSERT OR IGNORE INTO tools (id, slug, name, summary, icon, category, status, data_flow, data_flow_note, display_order, show_on_home) VALUES
('tool-1', 'yanlis-aga-gonderdim', 'Yanlış Ağa Gönderdim Teşhisi', 'Farklı ağa gönderilen tokenların kurtarılabilirlik testi ve borsa şablonu.', 'alert-triangle', 'urgent', 'live', 'client', 'Tüm analiz tarayıcı belleğinde gerçekleşir.', 1, 1),
('tool-2', 'takilan-islem', 'Takılan İşlem Teşhisi', 'Mempool kuyruğundaki bekleyen işlemleri sorgula, RBF ve Nonce hızlandırma çözümleri.', 'activity', 'urgent', 'live', 'server', 'Mempool RPC ve Etherscan API sorgusu gönderir.', 2, 1),
('tool-3', 'adres-ag-eslestirici', 'Adres ve Ağ Format Denetimi', 'Gönderim öncesi EVM, Tron, Bitcoin adres formatı ve checksum kontrolü.', 'shield-check', 'security', 'live', 'client', 'Adresler sunucuya iletilmez.', 3, 1),
('tool-4', 'maliyet-karsilastirici', 'Gerçek Transfer Maliyeti', 'Komisyon, spread ve ağ çekim ücreti dahil net rota analizi.', 'layers', 'calc', 'live', 'client', 'Hesaplama istemcide yapılır.', 4, 1),
('tool-5', 'cuzdan-guvenlik-kontrolu', 'Cüzdan Güvenlik Denetimi', 'Allowance izinleri ve phishing açıklarını tara.', 'lock', 'security', 'live', 'client', 'Tarayıcıda çalışır.', 5, 1),
('tool-6', 'dca-simulator', 'DCA Simülatörü', 'Düzenli kripto alımı kâr/zarar simülasyonu.', 'refresh', 'calc', 'live', 'client', 'Tarihsel veriler istemcide hesaplanır.', 6, 1);

INSERT OR IGNORE INTO feature_flags (key, enabled, description) VALUES
('maintenance_mode', 0, 'Site bakım modu kilidi'),
('enable_telemetry_live', 1, 'Üst şerit canlı telemetry akışı'),
('enable_command_palette', 1, 'Hızlı arama komut paleti (Ctrl+K)');
