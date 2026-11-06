-- ============================================================================
-- KRİPTONİK VERİ: D1 (SQLite) Çekirdek Şeması (v3)
-- ============================================================================

PRAGMA foreign_keys = ON;

-- Yönetim & Denetim
CREATE TABLE IF NOT EXISTS admins (
  id INTEGER PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL CHECK (role IN ('owner','editor','author','analyst')),
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

CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value_json TEXT NOT NULL,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS redirects (
  from_path TEXT PRIMARY KEY,
  to_path TEXT NOT NULL,
  status INTEGER NOT NULL DEFAULT 301
);

-- Veri Kaynağı & Lisans Kayıt Defteri (Bölüm 3.1)
CREATE TABLE IF NOT EXISTS data_sources (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  base_url TEXT NOT NULL,
  attribution TEXT,
  commercial_use TEXT NOT NULL DEFAULT 'unverified' CHECK (commercial_use IN ('yes','conditional','no','unverified')),
  redistribution TEXT NOT NULL DEFAULT 'no' CHECK (redistribution IN ('yes','no')),
  rate_limit TEXT,
  key_required INTEGER NOT NULL DEFAULT 0,
  terms_url TEXT,
  last_verified TEXT,
  enabled INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS source_health (
  source_id TEXT NOT NULL,
  ts TEXT NOT NULL,
  ok INTEGER NOT NULL,
  latency_ms INTEGER,
  error TEXT
);
CREATE INDEX IF NOT EXISTS idx_health ON source_health(source_id, ts);

CREATE TABLE IF NOT EXISTS data_corrections (
  id INTEGER PRIMARY KEY,
  dataset TEXT NOT NULL,
  ref TEXT NOT NULL,
  before_json TEXT,
  after_json TEXT NOT NULL,
  reason TEXT NOT NULL,
  source_url TEXT,
  admin_email TEXT NOT NULL,
  ts TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Varlıklar & Borsalar
CREATE TABLE IF NOT EXISTS assets (
  id TEXT PRIMARY KEY,
  symbol TEXT NOT NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  coingecko_id TEXT,
  cmc_id INTEGER,
  category TEXT,
  binance_symbol TEXT,
  is_stable INTEGER NOT NULL DEFAULT 0,
  is_wrapped INTEGER NOT NULL DEFAULT 0,
  rank INTEGER,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS exchanges (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  country TEXT,
  website TEXT,
  adapter TEXT,
  mode TEXT NOT NULL DEFAULT 'off' CHECK (mode IN ('auto','off')),
  try_pairs INTEGER NOT NULL DEFAULT 0,
  license_note TEXT,
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

-- Türkiye Verisi (A1-A6)
CREATE TABLE IF NOT EXISTS try_ticker (
  ts INTEGER NOT NULL,
  exchange_id TEXT NOT NULL,
  pair TEXT NOT NULL,
  bid REAL,
  ask REAL,
  last REAL,
  vol_24h_base REAL,
  vol_24h_try REAL,
  PRIMARY KEY (exchange_id, pair, ts)
);

CREATE TABLE IF NOT EXISTS try_depth (
  ts INTEGER NOT NULL,
  exchange_id TEXT NOT NULL,
  pair TEXT NOT NULL,
  slip_buy_10k REAL,
  slip_buy_100k REAL,
  slip_buy_1m REAL,
  slip_sell_10k REAL,
  slip_sell_100k REAL,
  slip_sell_1m REAL,
  PRIMARY KEY (exchange_id, pair, ts)
);

CREATE TABLE IF NOT EXISTS tether_premium (
  ts INTEGER PRIMARY KEY,
  premium REAL NOT NULL,
  official_rate REAL NOT NULL,
  market_mid REAL NOT NULL,
  method_version INTEGER NOT NULL,
  sources_count INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS fx_official (
  date TEXT NOT NULL,
  pair TEXT NOT NULL,
  buy REAL,
  sell REAL,
  source TEXT NOT NULL,
  PRIMARY KEY (date, pair)
);

-- ETF Verisi (B1-B5)
CREATE TABLE IF NOT EXISTS etf_funds (
  ticker TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  asset TEXT NOT NULL,
  issuer TEXT NOT NULL,
  launch_date TEXT,
  fee_pct REAL,
  kind TEXT NOT NULL DEFAULT 'spot',
  slug TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS etf_flows (
  date TEXT NOT NULL,
  ticker TEXT NOT NULL REFERENCES etf_funds(ticker),
  net_flow_usd REAL,
  net_flow_asset REAL,
  shares_out REAL,
  nav REAL,
  aum_usd REAL,
  holdings_asset REAL,
  premium_pct REAL,
  partial INTEGER NOT NULL DEFAULT 0,
  source TEXT NOT NULL,
  revised_at TEXT,
  PRIMARY KEY (date, ticker)
);

CREATE TABLE IF NOT EXISTS etf_flow_revisions (
  id INTEGER PRIMARY KEY,
  date TEXT NOT NULL,
  ticker TEXT NOT NULL,
  old_value REAL,
  new_value REAL,
  ts TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Türev, Stablecoin, DeFi, Zincir Üstü
CREATE TABLE IF NOT EXISTS deriv_samples (
  ts INTEGER NOT NULL,
  exchange TEXT NOT NULL,
  symbol TEXT NOT NULL,
  funding_rate REAL,
  next_funding_ts INTEGER,
  open_interest_usd REAL,
  PRIMARY KEY (exchange, symbol, ts)
);

CREATE TABLE IF NOT EXISTS stable_daily (
  date TEXT NOT NULL,
  symbol TEXT NOT NULL,
  supply_usd REAL,
  price REAL,
  PRIMARY KEY (date, symbol)
);

CREATE TABLE IF NOT EXISTS stable_chain_daily (
  date TEXT NOT NULL,
  symbol TEXT NOT NULL,
  chain TEXT NOT NULL,
  supply_usd REAL,
  PRIMARY KEY (date, symbol, chain)
);

CREATE TABLE IF NOT EXISTS defi_daily (
  date TEXT NOT NULL,
  kind TEXT NOT NULL CHECK (kind IN ('tvl','dex_volume','fees','revenue')),
  entity TEXT NOT NULL,
  entity_type TEXT NOT NULL CHECK (entity_type IN ('chain','protocol','total')),
  value REAL,
  PRIMARY KEY (date, kind, entity)
);

CREATE TABLE IF NOT EXISTS gas_samples (
  ts INTEGER NOT NULL,
  chain TEXT NOT NULL,
  slow REAL,
  standard REAL,
  fast REAL,
  base REAL,
  PRIMARY KEY (chain, ts)
);

CREATE TABLE IF NOT EXISTS btc_chain_daily (
  date TEXT PRIMARY KEY,
  hashrate REAL,
  difficulty REAL,
  avg_fee_sat_vb REAL,
  mempool_vsize REAL,
  miner_revenue_usd REAL,
  lightning_capacity_btc REAL
);

-- Kriptonik Endeksleri
CREATE TABLE IF NOT EXISTS index_values (
  slug TEXT NOT NULL,
  ts INTEGER NOT NULL,
  value REAL NOT NULL,
  method_version INTEGER NOT NULL,
  meta_json TEXT,
  PRIMARY KEY (slug, ts)
);

CREATE TABLE IF NOT EXISTS index_methods (
  slug TEXT NOT NULL,
  version INTEGER NOT NULL,
  title TEXT NOT NULL,
  body_md TEXT NOT NULL,
  effective_from TEXT NOT NULL,
  PRIMARY KEY (slug, version)
);

-- İçerik Sistemi (Bölüm 7)
CREATE TABLE IF NOT EXISTS authors (
  id INTEGER PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  bio_md TEXT NOT NULL,
  credentials_json TEXT,
  photo TEXT,
  links_json TEXT,
  active INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS content (
  id INTEGER PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('guide','analysis','glossary','coin_profile','etf_profile','exchange_profile','methodology')),
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  summary TEXT,
  body_md TEXT NOT NULL,
  faq_json TEXT,
  sources_json TEXT,
  related_terms TEXT,
  related_data TEXT,
  category TEXT,
  tags TEXT,
  author_id INTEGER REFERENCES authors(id),
  editor_id INTEGER REFERENCES authors(id),
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','review','edited','approved','scheduled','published','archived')),
  publish_at TEXT,
  seo_title TEXT,
  seo_description TEXT,
  og_image TEXT,
  quality_score INTEGER,
  needs_verification TEXT,
  indexable INTEGER NOT NULL DEFAULT 0,
  reviewed_at TEXT,
  published_at TEXT,
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (type, slug)
);

CREATE TABLE IF NOT EXISTS content_revisions (
  id INTEGER PRIMARY KEY,
  content_id INTEGER NOT NULL REFERENCES content(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  body_md TEXT NOT NULL,
  admin_email TEXT NOT NULL,
  ts TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS glossary_backlog (
  id INTEGER PRIMARY KEY,
  term TEXT NOT NULL UNIQUE,
  category TEXT,
  priority INTEGER DEFAULT 100,
  assignee TEXT,
  status TEXT NOT NULL DEFAULT 'todo',
  notes TEXT
);

CREATE TABLE IF NOT EXISTS reports (
  id INTEGER PRIMARY KEY,
  kind TEXT NOT NULL CHECK (kind IN ('data_error','content_error','contact')),
  email TEXT,
  url TEXT,
  body TEXT NOT NULL,
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
