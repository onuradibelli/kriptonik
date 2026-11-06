-- db/migrations/0001_init.sql
-- Kriptonik Master Spesifikasyon v2 Veritabanı Şeması
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS admins (
  id INTEGER PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL CHECK (role IN ('owner','editor','analyst')),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  last_login_at TEXT
);

CREATE TABLE IF NOT EXISTS audit_log (
  id INTEGER PRIMARY KEY,
  ts TEXT NOT NULL DEFAULT (datetime('now')),
  admin_email TEXT NOT NULL,
  action TEXT NOT NULL,
  entity TEXT NOT NULL,
  entity_id TEXT,
  before_json TEXT,
  after_json TEXT
);
CREATE INDEX IF NOT EXISTS idx_audit_ts ON audit_log(ts);

CREATE TABLE IF NOT EXISTS tools (
  slug TEXT PRIMARY KEY,
  category TEXT NOT NULL,
  title_tr TEXT NOT NULL,
  summary_tr TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'soon' CHECK (status IN ('live','beta','soon','hidden')),
  sort INTEGER NOT NULL DEFAULT 100,
  pinned INTEGER NOT NULL DEFAULT 0,
  killed INTEGER NOT NULL DEFAULT 0,
  seo_title TEXT,
  seo_description TEXT,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS guides (
  id INTEGER PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  summary TEXT,
  body_md TEXT NOT NULL,
  tags TEXT,
  related_tools TEXT,
  related_terms TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','scheduled','published','archived')),
  publish_at TEXT,
  seo_title TEXT,
  seo_description TEXT,
  og_image TEXT,
  reviewed_at TEXT,
  published_at TEXT,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS guide_revisions (
  id INTEGER PRIMARY KEY,
  guide_id INTEGER NOT NULL REFERENCES guides(id) ON DELETE CASCADE,
  body_md TEXT NOT NULL,
  title TEXT NOT NULL,
  admin_email TEXT NOT NULL,
  ts TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS glossary_terms (
  id INTEGER PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  term TEXT NOT NULL,
  term_en TEXT,
  definition_md TEXT NOT NULL,
  related_terms TEXT,
  related_tools TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','scheduled','published','archived')),
  publish_at TEXT,
  reviewed_at TEXT,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS coin_profiles (
  coin_id TEXT PRIMARY KEY,
  symbol TEXT NOT NULL,
  name_tr TEXT,
  intro_md TEXT,
  indexable INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS exchanges (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  website TEXT,
  adapter TEXT,
  mode TEXT NOT NULL DEFAULT 'manual' CHECK (mode IN ('auto','manual','off')),
  try_supported INTEGER NOT NULL DEFAULT 1,
  affiliate_slug TEXT,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS exchange_fees (
  id INTEGER PRIMARY KEY,
  exchange_id TEXT NOT NULL REFERENCES exchanges(id) ON DELETE CASCADE,
  asset TEXT,
  network TEXT,
  kind TEXT NOT NULL CHECK (kind IN ('maker','taker','deposit_try','withdraw_try','withdraw_crypto','min_withdraw')),
  value TEXT NOT NULL,
  unit TEXT NOT NULL,
  source_url TEXT NOT NULL,
  verified_at TEXT NOT NULL,
  notes TEXT
);
CREATE INDEX IF NOT EXISTS idx_fees_ex ON exchange_fees(exchange_id, kind);

CREATE TABLE IF NOT EXISTS manual_prices (
  exchange_id TEXT NOT NULL,
  pair TEXT NOT NULL,
  bid TEXT NOT NULL,
  ask TEXT NOT NULL,
  ts TEXT NOT NULL,
  PRIMARY KEY (exchange_id, pair)
);

CREATE TABLE IF NOT EXISTS networks (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  family TEXT NOT NULL,
  native_symbol TEXT,
  explorer_tx_url TEXT,
  avg_confirm_seconds INTEGER,
  requires_memo INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS token_networks (
  token TEXT NOT NULL,
  network_id TEXT NOT NULL REFERENCES networks(id),
  PRIMARY KEY (token, network_id)
);

CREATE TABLE IF NOT EXISTS token_contracts (
  token TEXT NOT NULL,
  network_id TEXT NOT NULL REFERENCES networks(id),
  address TEXT NOT NULL,
  decimals INTEGER,
  verified_at TEXT,
  source_url TEXT,
  PRIMARY KEY (token, network_id)
);

CREATE TABLE IF NOT EXISTS brands (
  domain TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  kind TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS kb_scenarios (
  id INTEGER PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  condition_json TEXT NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('high','medium','low','very_low','not_possible')),
  title TEXT NOT NULL,
  explanation_md TEXT NOT NULL,
  steps_json TEXT NOT NULL,
  version INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS kb_policies (
  id INTEGER PRIMARY KEY,
  exchange_id TEXT REFERENCES exchanges(id),
  topic TEXT NOT NULL,
  body_md TEXT NOT NULL,
  source_url TEXT NOT NULL,
  verified_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS blocklist (
  id INTEGER PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('url','domain','address','token')),
  value TEXT NOT NULL,
  level TEXT NOT NULL DEFAULT 'medium',
  source TEXT NOT NULL,
  note TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','disputed','removed')),
  added_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (type, value)
);

CREATE TABLE IF NOT EXISTS reports (
  id INTEGER PRIMARY KEY,
  kind TEXT NOT NULL CHECK (kind IN ('wrong_info','blocklist_dispute','contact')),
  email TEXT,
  subject TEXT,
  body TEXT NOT NULL,
  url TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new','in_review','resolved','rejected')),
  assignee TEXT,
  internal_note TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS affiliate_links (
  slug TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  target_url TEXT NOT NULL,
  sponsored INTEGER NOT NULL DEFAULT 1,
  active INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS affiliate_clicks_daily (
  date TEXT NOT NULL,
  slug TEXT NOT NULL,
  clicks INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (date, slug)
);

CREATE TABLE IF NOT EXISTS events_daily (
  date TEXT NOT NULL,
  tool TEXT NOT NULL,
  action TEXT NOT NULL,
  count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (date, tool, action)
);

CREATE TABLE IF NOT EXISTS data_sources (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  base_url TEXT NOT NULL,
  attribution TEXT,
  enabled INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS source_health (
  source_id TEXT NOT NULL,
  ts TEXT NOT NULL,
  ok INTEGER NOT NULL,
  latency_ms INTEGER,
  error TEXT
);
CREATE INDEX IF NOT EXISTS idx_health ON source_health(source_id, ts);

CREATE TABLE IF NOT EXISTS gas_samples (
  ts INTEGER NOT NULL,
  chain TEXT NOT NULL,
  slow REAL,
  standard REAL,
  fast REAL,
  base REAL,
  PRIMARY KEY (chain, ts)
);

CREATE TABLE IF NOT EXISTS stable_samples (
  ts INTEGER NOT NULL,
  symbol TEXT NOT NULL,
  price REAL NOT NULL,
  PRIMARY KEY (symbol, ts)
);

CREATE TABLE IF NOT EXISTS redirects (
  from_path TEXT PRIMARY KEY,
  to_path TEXT NOT NULL,
  status INTEGER NOT NULL DEFAULT 301
);

CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value_json TEXT NOT NULL,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
