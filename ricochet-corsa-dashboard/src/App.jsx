import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';

const Eye = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const Instagram = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Layers = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const ChevronRight = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ChevronDown = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ArrowUpDown = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21 16-4 4-4-4" />
    <path d="M17 20V4" />
    <path d="m3 8 4-4 4 4" />
    <path d="M7 4v16" />
  </svg>
);

const CheckCircle2 = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Trash2 = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
  </svg>
);

const UploadCloud = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M12 12v9" />
    <path d="m16 16-4-4-4 4" />
  </svg>
);

const RefreshCw = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </svg>
);

const FileSpreadsheet = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M8 13h2" />
    <path d="M14 13h2" />
    <path d="M8 17h2" />
    <path d="M14 17h2" />
  </svg>
);

const Filter = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const Search = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const X = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const AlertTriangle = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" x2="12" y1="9" y2="13" />
    <line x1="12" x2="12.01" y1="17" y2="17" />
  </svg>
);

const ShieldAlert = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
);

const BarChart3 = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

const Target = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const TrendingUp = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const Database = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const Globe = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const Play = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const UserPlus = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="19" x2="19" y1="8" y2="14" />
    <line x1="22" x2="16" y1="11" y2="11" />
  </svg>
);

const ExternalLink = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Plus = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const ImageIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
);

const Edit2 = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    <path d="m15 5 4 4" />
  </svg>
);

const Link2 = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 17H7A5 5 0 0 1 7 7h2" />
    <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
    <line x1="8" x2="16" y1="12" y2="12" />
  </svg>
);

const formatTHB = (val, decimals = 0) => {
  if (val === null || val === undefined || isNaN(val)) return '—';
  return `฿${Number(val).toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
};

const formatNum = (val) => {
  if (val === null || val === undefined || isNaN(val)) return '0';
  return Number(val).toLocaleString('en-US');
};

const formatPercent = (val) => {
  if (val === null || val === undefined || isNaN(val)) return '—';
  return `${Number(val).toFixed(2)}%`;
};

function deriveBrand(campaignName) {
  const lower = (campaignName || '').toLowerCase();
  if (lower.includes('ricochet')) return 'Ricochet';
  if (lower.includes('corsa')) return 'Corsa';
  return 'Unknown';
}

function BrandBadge({ brand, className = '' }) {
  if (!brand || brand === 'Unknown') return null;
  const isRicochet = brand === 'Ricochet';
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold tracking-wide border ${
        isRicochet
          ? 'bg-slate-900 text-white border-slate-900'
          : 'bg-zinc-100 text-zinc-800 border-zinc-300'
      } ${className}`}
    >
      {brand}
    </span>
  );
}

const DB_NAME = 'ricochet_corsa_ads_db';
const DB_VERSION = 2;

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('imported_files')) {
        db.createObjectStore('imported_files', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('performance_rows')) {
        const rowStore = db.createObjectStore('performance_rows', {
          keyPath: 'compositeId',
        });
        rowStore.createIndex('fileId', 'fileId', { unique: false });
        rowStore.createIndex('campaignId', 'campaignId', { unique: false });
      }
      if (!db.objectStoreNames.contains('creative_previews')) {
        db.createObjectStore('creative_previews', { keyPath: 'libraryKey' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function dbSaveFileAndRows(fileMeta, rows) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['imported_files', 'performance_rows'], 'readwrite');
    tx.objectStore('imported_files').put(fileMeta);
    const rowStore = tx.objectStore('performance_rows');
    rows.forEach((r) => rowStore.put(r));
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function dbGetAllFiles() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('imported_files', 'readonly');
    const req = tx.objectStore('imported_files').getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

async function dbGetAllRows() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('performance_rows', 'readonly');
    const req = tx.objectStore('performance_rows').getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

async function dbDeleteFileAndCascadeRows(fileId) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['imported_files', 'performance_rows'], 'readwrite');
    tx.objectStore('imported_files').delete(fileId);
    const rowStore = tx.objectStore('performance_rows');
    const index = rowStore.index('fileId');
    const req = index.openKeyCursor(IDBKeyRange.only(fileId));
    req.onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) {
        rowStore.delete(cursor.primaryKey);
        cursor.continue();
      }
    };
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function dbClearAll() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['imported_files', 'performance_rows'], 'readwrite');
    tx.objectStore('imported_files').clear();
    tx.objectStore('performance_rows').clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function dbSaveCreativePreview(previewObj) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('creative_previews', 'readwrite');
    tx.objectStore('creative_previews').put(previewObj);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function dbGetAllCreativePreviews() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('creative_previews', 'readonly');
    const req = tx.objectStore('creative_previews').getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

async function dbDeleteCreativePreview(libraryKey) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('creative_previews', 'readwrite');
    tx.objectStore('creative_previews').delete(libraryKey);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function computeFileHash(fileName, content) {
  let hash = 0;
  const str = `${fileName}_${content.length}_${content.slice(0, 1000)}`;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return `hash_${Math.abs(hash).toString(36)}`;
}

function parseCSVLine(text) {
  const result = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      if (inQuotes && text[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      result.push(cur.trim());
      cur = '';
    } else {
      cur += c;
    }
  }
  result.push(cur.trim());
  return result;
}

function cleanNumeric(val) {
  if (!val || val === '-' || val === '—' || val === 'null' || val === 'undefined') return 0;
  const cleaned = String(val).replace(/[฿,%\s]/g, '');
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : num;
}

function deriveCampaignObjective(campaignName, resultIndicator = '') {
  const cName = (campaignName || '').toLowerCase();
  const resInd = (resultIndicator || '').toLowerCase();

  // 1. Follower campaign priority
  if (cName.includes('follower')) return 'FOLLOWER';

  // 2. Awareness / Reach priority
  if (cName.includes('awareness') || cName.includes('reach')) return 'AWARENESS';

  // 3. Traffic / Profile Visits priority
  if (
    resInd.includes('profile') ||
    cName.includes('profile') ||
    cName.includes('traffic - corsa') ||
    cName.includes('traffic - ricochet') ||
    (cName.includes('traffic') && !cName.includes('landing') && !cName.includes('lpv'))
  ) {
    return 'TRAFFIC_IG_VISIT';
  }

  // 4. Traffic / Landing Page Views
  if (resInd.includes('landing') || cName.includes('landing') || cName.includes('lpv')) {
    return 'TRAFFIC_LPV';
  }

  // 5. Engagement
  if (resInd.includes('engagement') || cName.includes('engagement')) {
    return 'ENGAGEMENT';
  }

  // 6. Video
  if (resInd.includes('thruplay') || cName.includes('video')) {
    return 'VIDEO';
  }

  if (resInd.includes('reach') || resInd.includes('impression')) {
    return 'AWARENESS';
  }

  return 'AWARENESS';
}

function parseCSVToRows(csvText, fileId) {
  const lines = csvText.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]).map((h) => h.toLowerCase().trim());
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length < 2) continue;

    const rowObj = {};
    headers.forEach((h, idx) => {
      rowObj[h] = values[idx] !== undefined ? values[idx] : '';
    });

    const getCol = (possibleNames) => {
      for (const name of possibleNames) {
        if (rowObj[name] !== undefined) return rowObj[name];
      }
      return '';
    };

    const reportingStart = getCol(['reporting starts', 'reporting start', 'starts', 'date']) || '2026-09-01';
    const reportingEnd = getCol(['reporting ends', 'reporting end', 'ends']) || reportingStart;

    const campaignName = getCol(['campaign name', 'campaign']) || 'Unnamed Campaign';
    const campaignId = getCol(['campaign id']) || `cmp_${campaignName.toLowerCase().replace(/\s+/g, '_')}`;
    const brand = deriveBrand(campaignName);

    const adSetName = getCol(['ad set name', 'ad set', 'adset name']) || 'Unnamed Ad Set';
    const adSetId = getCol(['ad set id', 'adset id']) || `as_${adSetName.toLowerCase().replace(/\s+/g, '_')}`;

    const adName = getCol(['ad name', 'ad']) || 'Unnamed Ad';
    const adId = getCol(['ad id']) || `ad_${adName.toLowerCase().replace(/\s+/g, '_')}_${i}`;

    const spend = cleanNumeric(getCol(['amount spent (thb)', 'amount spent', 'spend']));
    const reach = cleanNumeric(getCol(['reach']));
    const impressions = cleanNumeric(getCol(['impressions']));
    const linkClicks = cleanNumeric(getCol(['link clicks', 'clicks']));
    const igProfileVisits = cleanNumeric(getCol(['instagram profile visits', 'profile visits']));
    const igFollows = cleanNumeric(getCol(['instagram follows', 'follows']));
    const landingPageViews = cleanNumeric(getCol(['landing page views', 'landing page view']));
    const postEngagements = cleanNumeric(getCol(['post engagements', 'engagements']));
    const postReactions = cleanNumeric(getCol(['post reactions']));
    const postComments = cleanNumeric(getCol(['post comments']));
    const postShares = cleanNumeric(getCol(['post shares']));
    const postSaves = cleanNumeric(getCol(['post saves']));
    const thruPlays = cleanNumeric(getCol(['thruplays', 'thru play']));
    const video3sPlays = cleanNumeric(getCol(['3-second video plays', '3s video plays']));
    const videoPlays50 = cleanNumeric(getCol(['video plays at 50%']));
    const videoPlays95 = cleanNumeric(getCol(['video plays at 95%']));

    const resultIndicator = (getCol(['result indicator', 'results indicator']) || '').toLowerCase();

    // Determine objective strictly at CAMPAIGN level, not from individual row metrics
    const objective = deriveCampaignObjective(campaignName, resultIndicator);

    rows.push({
      compositeId: `${adId}_${reportingStart}_${fileId}`,
      fileId,
      brand,
      reportingStart,
      reportingEnd,
      campaignName,
      campaignId,
      adSetName,
      adSetId,
      adName,
      adId,
      adDelivery: getCol(['ad delivery', 'delivery']) || 'Active',
      objective,
      campaign_type: objective === 'FOLLOWER' ? 'follower' : objective.toLowerCase(),
      spend,
      reach,
      impressions,
      linkClicks,
      igProfileVisits,
      igFollows,
      landingPageViews,
      postEngagements,
      postReactions,
      postComments,
      postShares,
      postSaves,
      thruPlays,
      video3sPlays,
      videoPlays50,
      videoPlays95,
    });
  }

  return rows;
}

function generateSeedData() {
  const fileId = 'seed_ricochet_corsa_2026_09';
  const fileMeta = {
    id: fileId,
    fileName: 'meta_ads_ricochet_corsa_2026_09.csv',
    fileHash: 'hash_seed_ricochet_corsa_99a',
    importedAt: '2026-09-30 18:30',
    reportingStart: '2026-09-01',
    reportingEnd: '2026-09-30',
    monthStr: '2026-09',
    rowCount: 8,
    status: 'Ready',
  };

  const rows = [
    {
      compositeId: `ad_rc_aw1_2026-09-01_${fileId}`,
      fileId,
      brand: 'Ricochet',
      reportingStart: '2026-09-01',
      reportingEnd: '2026-09-30',
      campaignName: 'Awareness - Ricochet 2026 Brand Launch',
      campaignId: 'cmp_aw_ricochet_01',
      adSetName: 'Bangkok Metropolitan & Coffee Connoisseurs',
      adSetId: 'as_bkk_connoisseurs',
      adName: 'Ricochet Machine Aesthetic Hook 9:16',
      adId: 'ad_rc_aw1',
      adDelivery: 'Active',
      objective: 'AWARENESS',
      campaign_type: 'awareness',
      spend: 42500,
      reach: 184500,
      impressions: 342000,
      linkClicks: 2150,
      igProfileVisits: 0,
      igFollows: 0,
      landingPageViews: 0,
      postEngagements: 450,
      postReactions: 310,
      postComments: 45,
      postShares: 65,
      postSaves: 30,
      thruPlays: 62000,
      video3sPlays: 145000,
      videoPlays50: 42000,
      videoPlays95: 18500,
    },
    {
      compositeId: `ad_rc_fol1_2026-09-01_${fileId}`,
      fileId,
      brand: 'Ricochet',
      reportingStart: '2026-09-01',
      reportingEnd: '2026-09-30',
      campaignName: 'IG Follower - Ricochet Brand Community',
      campaignId: 'cmp_fol_ricochet_01',
      adSetName: 'Aesthetic Espresso Aficionados',
      adSetId: 'as_rc_fol_aficionados',
      adName: 'Ricochet Daily Craft Ritual Stories',
      adId: 'ad_rc_fol1',
      adDelivery: 'Active',
      objective: 'FOLLOWER',
      campaign_type: 'follower',
      spend: 34200,
      reach: 98000,
      impressions: 195000,
      linkClicks: 5200,
      igProfileVisits: 4850,
      igFollows: 1340,
      landingPageViews: 0,
      postEngagements: 820,
      postReactions: 540,
      postComments: 94,
      postShares: 112,
      postSaves: 74,
      thruPlays: 32000,
      video3sPlays: 79000,
      videoPlays50: 24000,
      videoPlays95: 11200,
    },
    {
      compositeId: `ad_rc_fol1_b_2026-09-01_${fileId}`,
      fileId,
      brand: 'Ricochet',
      reportingStart: '2026-09-01',
      reportingEnd: '2026-09-30',
      campaignName: 'IG Follower - Ricochet Brand Community',
      campaignId: 'cmp_fol_ricochet_01',
      adSetName: 'Bangkok Metropolitan & Coffee Connoisseurs',
      adSetId: 'as_bkk_connoisseurs',
      adName: 'Ricochet Daily Craft Ritual Stories',
      adId: 'ad_rc_fol1_b',
      adDelivery: 'Active',
      objective: 'FOLLOWER',
      campaign_type: 'follower',
      spend: 18400,
      reach: 54000,
      impressions: 112000,
      linkClicks: 2840,
      igProfileVisits: 2610,
      igFollows: 780,
      landingPageViews: 0,
      postEngagements: 460,
      postReactions: 310,
      postComments: 48,
      postShares: 55,
      postSaves: 38,
      thruPlays: 18500,
      video3sPlays: 44000,
      videoPlays50: 13500,
      videoPlays95: 6400,
    },
    {
      compositeId: `ad_cr_fol1_2026-09-01_${fileId}`,
      fileId,
      brand: 'Corsa',
      reportingStart: '2026-09-01',
      reportingEnd: '2026-09-30',
      campaignName: 'Corsa Follower Acquisition Campaign',
      campaignId: 'cmp_fol_corsa_01',
      adSetName: 'Specialty Roasters & Baristas Network',
      adSetId: 'as_cr_fol_baristas',
      adName: 'Corsa Micro-Adjustment Dial Demonstration',
      adId: 'ad_cr_fol1',
      adDelivery: 'Active',
      objective: 'FOLLOWER',
      campaign_type: 'follower',
      spend: 29800,
      reach: 84000,
      impressions: 162000,
      linkClicks: 4620,
      igProfileVisits: 4120,
      igFollows: 1090,
      landingPageViews: 0,
      postEngagements: 640,
      postReactions: 410,
      postComments: 75,
      postShares: 88,
      postSaves: 67,
      thruPlays: 28400,
      video3sPlays: 66000,
      videoPlays50: 19800,
      videoPlays95: 9300,
    },
    {
      compositeId: `ad_rc_aw2_2026-09-01_${fileId}`,
      fileId,
      brand: 'Corsa',
      reportingStart: '2026-09-01',
      reportingEnd: '2026-09-30',
      campaignName: 'Reach - Corsa Urban Minimalist',
      campaignId: 'cmp_aw_corsa_02',
      adSetName: 'Chiang Mai & Urban Creative Segment',
      adSetId: 'as_cm_creatives',
      adName: 'Corsa Grinder Kinetic Architecture Reel',
      adId: 'ad_rc_aw2',
      adDelivery: 'Active',
      objective: 'AWARENESS',
      campaign_type: 'awareness',
      spend: 31200,
      reach: 142000,
      impressions: 248000,
      linkClicks: 1420,
      igProfileVisits: 0,
      igFollows: 0,
      landingPageViews: 0,
      postEngagements: 280,
      postReactions: 190,
      postComments: 30,
      postShares: 40,
      postSaves: 20,
      thruPlays: 41000,
      video3sPlays: 98000,
      videoPlays50: 31000,
      videoPlays95: 12400,
    },
    {
      compositeId: `ad_cr_tr1_2026-09-01_${fileId}`,
      fileId,
      brand: 'Corsa',
      reportingStart: '2026-09-01',
      reportingEnd: '2026-09-30',
      campaignName: 'Traffic - Corsa Instagram Profile Discovery',
      campaignId: 'cmp_tr_corsa_01',
      adSetName: 'Specialty Coffee Lovers & Design Enthusiasts',
      adSetId: 'as_design_enthusiasts',
      adName: 'Corsa Tactile Dial Close-up Reel',
      adId: 'ad_cr_tr1',
      adDelivery: 'Active',
      objective: 'TRAFFIC_IG_VISIT',
      campaign_type: 'traffic_ig_visit',
      spend: 38400,
      reach: 92400,
      impressions: 178000,
      linkClicks: 6840,
      igProfileVisits: 6420,
      igFollows: 410,
      landingPageViews: 0,
      postEngagements: 920,
      postReactions: 610,
      postComments: 110,
      postShares: 120,
      postSaves: 80,
      thruPlays: 24000,
      video3sPlays: 68000,
      videoPlays50: 19500,
      videoPlays95: 8400,
    },
    {
      compositeId: `ad_cr_tr1_b_2026-09-01_${fileId}`,
      fileId,
      brand: 'Corsa',
      reportingStart: '2026-09-01',
      reportingEnd: '2026-09-30',
      campaignName: 'Traffic - Corsa Instagram Profile Discovery',
      campaignId: 'cmp_tr_corsa_01',
      adSetName: 'Specialty Roasters & Baristas Network',
      adSetId: 'as_cr_fol_baristas',
      adName: 'Corsa Tactile Dial Close-up Reel',
      adId: 'ad_cr_tr1_b',
      adDelivery: 'Active',
      objective: 'TRAFFIC_IG_VISIT',
      campaign_type: 'traffic_ig_visit',
      spend: 21600,
      reach: 48900,
      impressions: 94000,
      linkClicks: 3720,
      igProfileVisits: 3510,
      igFollows: 230,
      landingPageViews: 0,
      postEngagements: 510,
      postReactions: 330,
      postComments: 62,
      postShares: 71,
      postSaves: 45,
      thruPlays: 13500,
      video3sPlays: 38000,
      videoPlays50: 11000,
      videoPlays95: 4800,
    },
    {
      compositeId: `ad_rc_tr2_2026-09-01_${fileId}`,
      fileId,
      brand: 'Ricochet',
      reportingStart: '2026-09-01',
      reportingEnd: '2026-09-30',
      campaignName: 'Traffic - Ricochet Landing Page Showcase',
      campaignId: 'cmp_tr_ricochet_lpv',
      adSetName: 'High-End Kitchen Interior & Tech Early Adopters',
      adSetId: 'as_interior_early_adopters',
      adName: 'Ricochet Precision Extraction Features',
      adId: 'ad_rc_tr2',
      adDelivery: 'Active',
      objective: 'TRAFFIC_LPV',
      campaign_type: 'traffic_lpv',
      spend: 29500,
      reach: 68000,
      impressions: 132000,
      linkClicks: 4120,
      igProfileVisits: 450,
      igFollows: 85,
      landingPageViews: 3890,
      postEngagements: 410,
      postReactions: 260,
      postComments: 50,
      postShares: 60,
      postSaves: 40,
      thruPlays: 18000,
      video3sPlays: 49000,
      videoPlays50: 14000,
      videoPlays95: 6100,
    },
    {
      compositeId: `ad_rc_eng1_2026-09-01_${fileId}`,
      fileId,
      brand: 'Ricochet',
      reportingStart: '2026-09-01',
      reportingEnd: '2026-09-30',
      campaignName: 'Engagement - Ricochet Sensory Community',
      campaignId: 'cmp_eng_ricochet_01',
      adSetName: 'Artisan Baristas & Espresso Enthusiasts',
      adSetId: 'as_baristas_artisan',
      adName: 'Pour Over vs Ricochet Blind Taste Test',
      adId: 'ad_rc_eng1',
      adDelivery: 'Active',
      objective: 'ENGAGEMENT',
      campaign_type: 'engagement',
      spend: 18200,
      reach: 52000,
      impressions: 98000,
      linkClicks: 1650,
      igProfileVisits: 310,
      igFollows: 140,
      landingPageViews: 0,
      postEngagements: 4890,
      postReactions: 3120,
      postComments: 890,
      postShares: 540,
      postSaves: 340,
      thruPlays: 14200,
      video3sPlays: 36000,
      videoPlays50: 11000,
      videoPlays95: 4900,
    },
    {
      compositeId: `ad_cr_vid1_2026-09-01_${fileId}`,
      fileId,
      brand: 'Corsa',
      reportingStart: '2026-09-01',
      reportingEnd: '2026-09-30',
      campaignName: 'Video - Corsa Engineering Breakdown',
      campaignId: 'cmp_vid_corsa_01',
      adSetName: 'Industrial Design & Machinery Buffs',
      adSetId: 'as_design_machinery',
      adName: '48mm Titanium Burr Precision Cutaway',
      adId: 'ad_cr_vid1',
      adDelivery: 'Active',
      objective: 'VIDEO',
      campaign_type: 'video',
      spend: 24600,
      reach: 78500,
      impressions: 164000,
      linkClicks: 1890,
      igProfileVisits: 280,
      igFollows: 110,
      landingPageViews: 0,
      postEngagements: 1640,
      postReactions: 980,
      postComments: 210,
      postShares: 290,
      postSaves: 160,
      thruPlays: 48200,
      video3sPlays: 112000,
      videoPlays50: 38400,
      videoPlays95: 21600,
    },
  ];

  return { fileMeta, rows };
}

function PacingComposedChart({ data, objectiveMode }) {
  const [hoverIdx, setHoverIdx] = useState(null);

  if (!data || data.length === 0) {
    return (
      <div className="h-full flex items-center justify-center text-xs text-[#94a3b8]">
        No trend data available
      </div>
    );
  }

  const width = 680;
  const height = 220;
  const padding = { top: 20, right: 55, bottom: 30, left: 55 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const maxSpend = Math.max(...data.map((d) => d.spend || 0), 1000);
  const maxSpendCeil = Math.ceil(maxSpend / 5000) * 5000;

  const maxVolume = Math.max(
    ...data.map((d) => {
      if (objectiveMode === 'AWARENESS_ONLY') return d.reach || 0;
      if (objectiveMode === 'FOLLOWER_ONLY') return d.igFollows || 0;
      if (objectiveMode === 'TRAFFIC_ONLY') return d.igProfileVisits || 0;
      return Math.max(d.reach || 0, d.igProfileVisits || 0, (d.igFollows || 0) * 10);
    }),
    100
  );
  const maxVolumeCeil = Math.ceil(maxVolume * 1.15);

  const getX = (i) => {
    if (data.length === 1) return padding.left + chartW / 2;
    return padding.left + (i / (data.length - 1)) * chartW;
  };

  const getYSpend = (val) => padding.top + chartH - ((val || 0) / maxSpendCeil) * chartH;
  const getYVolume = (val) => padding.top + chartH - ((val || 0) / maxVolumeCeil) * chartH;

  const spendLineD = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getYSpend(d.spend || 0)}`)
    .join(' ');

  const reachLineD = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getYVolume(d.reach || 0)}`)
    .join(' ');

  const trafficLineD = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getYVolume(d.igProfileVisits || 0)}`)
    .join(' ');

  const followerLineD = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getYVolume(d.igFollows || 0)}`)
    .join(' ');

  const active = hoverIdx !== null && data[hoverIdx] ? data[hoverIdx] : null;

  return (
    <div className="relative w-full h-full select-none">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full overflow-visible"
        onMouseLeave={() => setHoverIdx(null)}
      >
        {}
        {[0, 0.5, 1].map((r, i) => {
          const y = padding.top + chartH * (1 - r);
          const spendVal = Math.round(maxSpendCeil * r);
          const volVal = Math.round(maxVolumeCeil * r);
          return (
            <g key={i}>
              <line
                x1={padding.left}
                y1={y}
                x2={padding.left + chartW}
                y2={y}
                stroke="#f1f5f9"
                strokeDasharray="3 3"
              />
              <text x={padding.left - 8} y={y + 3} textAnchor="end" fontSize="9" fill="#94a3b8" fontFamily="monospace">
                ฿{spendVal >= 1000 ? `${(spendVal / 1000).toFixed(0)}k` : spendVal}
              </text>
              <text x={padding.left + chartW + 8} y={y + 3} textAnchor="start" fontSize="9" fill="#94a3b8" fontFamily="monospace">
                {volVal >= 1000 ? `${(volVal / 1000).toFixed(0)}k` : volVal}
              </text>
            </g>
          );
        })}

        {}
        <path d={spendLineD} fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />

        {(objectiveMode === 'AWARENESS_ONLY' || objectiveMode === 'COMBINED') && (
          <path d={reachLineD} fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
        )}

        {(objectiveMode === 'TRAFFIC_ONLY' || objectiveMode === 'COMBINED') && (
          <path d={trafficLineD} fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
        )}

        {(objectiveMode === 'FOLLOWER_ONLY' || objectiveMode === 'COMBINED') && (
          <path d={followerLineD} fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
        )}

        {}
        {data.map((d, i) => {
          const x = getX(i);
          const ySpend = getYSpend(d.spend);
          return (
            <g key={i}>
              <circle
                cx={x}
                cy={ySpend}
                r={hoverIdx === i ? 5 : 3}
                fill="#0f172a"
                className="transition-all duration-150"
              />
              <rect
                x={x - (chartW / data.length) / 2}
                y={padding.top}
                width={chartW / data.length}
                height={chartH}
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setHoverIdx(i)}
              />
            </g>
          );
        })}

        {}
        {data.map((d, i) => (
          <text
            key={i}
            x={getX(i)}
            y={height - 8}
            textAnchor="middle"
            fontSize="9"
            fill="#64748b"
            fontFamily="monospace"
          >
            {d.date.length > 7 ? d.date.slice(5) : d.date}
          </text>
        ))}
      </svg>

      {}
      {active && hoverIdx !== null && (
        <div
          className="absolute z-30 bg-slate-900 text-white rounded-xl p-3 shadow-xl pointer-events-none text-xs space-y-1 -translate-x-1/2 -translate-y-full border border-slate-700"
          style={{
            left: `${(getX(hoverIdx) / width) * 100}%`,
            top: `${(getYSpend(active.spend) / height) * 100}%`,
          }}
        >
          <div className="font-semibold text-slate-300 border-b border-slate-800 pb-1 font-mono">
            {active.date}
          </div>
          <div className="flex items-center justify-between gap-3 text-slate-200">
            <span>Spend:</span>
            <strong className="text-white font-mono">{formatTHB(active.spend)}</strong>
          </div>
          {active.reach > 0 && (
            <div className="flex items-center justify-between gap-3 text-blue-400">
              <span>Reach:</span>
              <strong className="font-mono">{formatNum(active.reach)}</strong>
            </div>
          )}
          {active.igFollows > 0 && (
            <div className="flex items-center justify-between gap-3 text-purple-400">
              <span>Followers:</span>
              <strong className="font-mono">+{formatNum(active.igFollows)}</strong>
            </div>
          )}
          {active.igProfileVisits > 0 && (
            <div className="flex items-center justify-between gap-3 text-emerald-400">
              <span>Profile Visits:</span>
              <strong className="font-mono">{formatNum(active.igProfileVisits)}</strong>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function TrendAreaChart({ data }) {
  if (!data || data.length === 0) {
    return <div className="h-full flex items-center justify-center text-xs text-[#94a3b8]">No trend data available</div>;
  }
  const width = 680;
  const height = 220;
  const padding = { top: 20, right: 30, bottom: 30, left: 55 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const maxSpend = Math.max(...data.map((d) => d.spend || 0), 1000);
  const getX = (i) => data.length === 1 ? padding.left + chartW / 2 : padding.left + (i / (data.length - 1)) * chartW;
  const getY = (val) => padding.top + chartH - ((val || 0) / maxSpend) * chartH;

  const areaD = `${data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.spend)}`).join(' ')} L ${getX(data.length - 1)} ${padding.top + chartH} L ${getX(0)} ${padding.top + chartH} Z`;
  const lineD = data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.spend)}`).join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="spendGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.0" />
        </linearGradient>
      </defs>
      {[0, 0.5, 1].map((r, i) => {
        const y = padding.top + chartH * (1 - r);
        return (
          <g key={i}>
            <line x1={padding.left} y1={y} x2={padding.left + chartW} y2={y} stroke="#f1f5f9" strokeDasharray="3 3" />
            <text x={padding.left - 8} y={y + 3} textAnchor="end" fontSize="9" fill="#94a3b8" fontFamily="monospace">
              ฿{Math.round(maxSpend * r).toLocaleString()}
            </text>
          </g>
        );
      })}
      <path d={areaD} fill="url(#spendGrad)" />
      <path d={lineD} fill="none" stroke="#0f172a" strokeWidth="2.5" />
      {data.map((d, i) => (
        <circle key={i} cx={getX(i)} cy={getY(d.spend)} r="3" fill="#0f172a" />
      ))}
      {data.map((d, i) => (
        <text key={i} x={getX(i)} y={height - 8} textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="monospace">
          {d.date.length > 7 ? d.date.slice(5) : d.date}
        </text>
      ))}
    </svg>
  );
}

function TrendLineChart({ data, metricKey, label, color, isCurrency }) {
  if (!data || data.length === 0) {
    return <div className="h-full flex items-center justify-center text-xs text-[#94a3b8]">No data</div>;
  }
  const width = 340;
  const height = 140;
  const padding = { top: 15, right: 20, bottom: 25, left: 45 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const maxVal = Math.max(...data.map((d) => d[metricKey] || 0), 1);
  const getX = (i) => data.length === 1 ? padding.left + chartW / 2 : padding.left + (i / (data.length - 1)) * chartW;
  const getY = (val) => padding.top + chartH - ((val || 0) / maxVal) * chartH;

  const lineD = data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d[metricKey])}`).join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
      {[0, 1].map((r, i) => {
        const y = padding.top + chartH * (1 - r);
        const v = maxVal * r;
        return (
          <g key={i}>
            <line x1={padding.left} y1={y} x2={padding.left + chartW} y2={y} stroke="#f1f5f9" strokeDasharray="3 3" />
            <text x={padding.left - 6} y={y + 3} textAnchor="end" fontSize="8" fill="#94a3b8" fontFamily="monospace">
              {isCurrency ? `฿${Math.round(v)}` : Math.round(v)}
            </text>
          </g>
        );
      })}
      <path d={lineD} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {data.map((d, i) => (
        <circle key={i} cx={getX(i)} cy={getY(d[metricKey])} r="2.5" fill={color} />
      ))}
      {data.map((d, i) => (
        <text key={i} x={getX(i)} y={height - 6} textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="monospace">
          {d.date.length > 7 ? d.date.slice(5) : d.date}
        </text>
      ))}
    </svg>
  );
}

function OverviewPage({
  objectiveMode,
  selectedBrand,
  globalMetrics,
  awarenessMetrics,
  trafficMetrics,
  followerMetrics,
  ricochetOverview,
  corsaOverview,
  campaignGrouped,
  timeSeriesData,
  onNavigate,
}) {
  const isFollowerOnly = objectiveMode === 'FOLLOWER_ONLY';
  const isAwarenessOnly = objectiveMode === 'AWARENESS_ONLY';
  const isTrafficOnly = objectiveMode === 'TRAFFIC_ONLY';
  const isCombined = objectiveMode === 'COMBINED';

  return (
    <div className="space-y-6">
      {}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {isFollowerOnly ? (
          <>
            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider block mb-1">Amount Spent</span>
              <span className="text-xl font-bold text-[#0f172a] font-mono">{formatTHB(globalMetrics.totalSpend)}</span>
            </div>
            <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-purple-700 uppercase tracking-wider block mb-1">Followers Gained</span>
              <span className="text-xl font-bold text-purple-800 font-mono">+{formatNum(globalMetrics.igFollows)}</span>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider block mb-1">Cost / Follow</span>
              <span className="text-xl font-bold text-[#0f172a] font-mono">
                {globalMetrics.costPerFollow ? formatTHB(globalMetrics.costPerFollow, 2) : '—'}
              </span>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider block mb-1">Profile Visits</span>
              <span className="text-xl font-bold text-[#0f172a] font-mono">{formatNum(globalMetrics.igProfileVisits)}</span>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider block mb-1">Visit → Follow Rate</span>
              <span className="text-xl font-bold text-emerald-700 font-mono">
                {globalMetrics.followConversionRate !== null ? formatPercent(globalMetrics.followConversionRate) : '—'}
              </span>
            </div>
          </>
        ) : isAwarenessOnly ? (
          <>
            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider block mb-1">Amount Spent</span>
              <span className="text-xl font-bold text-[#0f172a] font-mono">{formatTHB(globalMetrics.totalSpend)}</span>
            </div>
            <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider block mb-1">Audience Reach</span>
              <span className="text-xl font-bold text-blue-900 font-mono">{formatNum(globalMetrics.totalReach)}</span>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider block mb-1">Impressions</span>
              <span className="text-xl font-bold text-[#0f172a] font-mono">{formatNum(globalMetrics.totalImpressions)}</span>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider block mb-1">CPM</span>
              <span className="text-xl font-bold text-[#0f172a] font-mono">{formatTHB(globalMetrics.cpm, 2)}</span>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider block mb-1">Frequency</span>
              <span className="text-xl font-bold text-[#0f172a] font-mono">{globalMetrics.frequency.toFixed(2)}</span>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider block mb-1">Total Spend</span>
              <span className="text-xl font-bold text-[#0f172a] font-mono">{formatTHB(globalMetrics.totalSpend)}</span>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider block mb-1">Total Reach</span>
              <span className="text-xl font-bold text-[#0f172a] font-mono">{formatNum(globalMetrics.totalReach)}</span>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider block mb-1">Total Impressions</span>
              <span className="text-xl font-bold text-[#0f172a] font-mono">{formatNum(globalMetrics.totalImpressions)}</span>
            </div>
            <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-purple-700 uppercase tracking-wider block mb-1">Followers Gained</span>
              <span className="text-xl font-bold text-purple-800 font-mono">
                {globalMetrics.igFollows > 0 ? `+${formatNum(globalMetrics.igFollows)}` : '—'}
              </span>
            </div>
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider block mb-1">Profile Visits</span>
              <span className="text-xl font-bold text-emerald-800 font-mono">{formatNum(globalMetrics.igProfileVisits)}</span>
            </div>
          </>
        )}
      </div>

      {}
      {selectedBrand === 'ALL' && ricochetOverview && corsaOverview && (
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-[#0f172a]">Brand Comparison: Ricochet vs. Corsa</h3>
              <p className="text-xs text-[#64748b]">Contrasting audience reach, traffic, and follower acquisition efficiency</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-[#0f172a]">Ricochet</span>
                <span className="text-xs font-mono font-bold">{formatTHB(ricochetOverview.totalSpend)}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <span className="text-[10px] text-[#64748b] block">Reach</span>
                  <strong className="font-mono">{formatNum(ricochetOverview.totalReach)}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#64748b] block">Followers</span>
                  <strong className="font-mono text-purple-700">+{formatNum(ricochetOverview.igFollows)}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#64748b] block">Cost / Follow</span>
                  <strong className="font-mono">{ricochetOverview.costPerFollow ? formatTHB(ricochetOverview.costPerFollow, 2) : '—'}</strong>
                </div>
              </div>
            </div>
            <div className="border border-zinc-200 rounded-xl p-4 bg-zinc-50/50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-zinc-800">Corsa</span>
                <span className="text-xs font-mono font-bold">{formatTHB(corsaOverview.totalSpend)}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <span className="text-[10px] text-[#64748b] block">Reach</span>
                  <strong className="font-mono">{formatNum(corsaOverview.totalReach)}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#64748b] block">Followers</span>
                  <strong className="font-mono text-purple-700">+{formatNum(corsaOverview.igFollows)}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#64748b] block">Cost / Follow</span>
                  <strong className="font-mono">{corsaOverview.costPerFollow ? formatTHB(corsaOverview.costPerFollow, 2) : '—'}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {}
      <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#0f172a]">Spend & Volume Pacing Timeline</h3>
            <p className="text-xs text-[#64748b]">Spend progression plotted against primary delivery metrics</p>
          </div>
        </div>
        <div className="h-56 w-full">
          <PacingComposedChart data={timeSeriesData} objectiveMode={objectiveMode} />
        </div>
      </div>
    </div>
  );
}

function CampaignPerformancePage({ campaigns }) {
  const [selectedObjectiveFilter, setSelectedObjectiveFilter] = useState('ALL');
  const [campaignSortBy, setCampaignSortBy] = useState('spend');
  const [campaignSortDir, setCampaignSortDir] = useState('desc');

  const filteredCampaigns = useMemo(() => {
    let list = campaigns;
    if (selectedObjectiveFilter !== 'ALL') {
      list = list.filter((c) => c.objective === selectedObjectiveFilter);
    }
    return [...list].sort((a, b) => {
      let aVal = a[campaignSortBy];
      let bVal = b[campaignSortBy];
      if (typeof aVal === 'string') {
        return campaignSortDir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      return campaignSortDir === 'asc' ? (aVal || 0) - (bVal || 0) : (bVal || 0) - (aVal || 0);
    });
  }, [campaigns, selectedObjectiveFilter, campaignSortBy, campaignSortDir]);

  return (
    <div className="space-y-5">
      <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
          {['ALL', 'FOLLOWER', 'AWARENESS', 'TRAFFIC_IG_VISIT', 'TRAFFIC_LPV', 'ENGAGEMENT', 'VIDEO'].map((obj) => (
            <button
              key={obj}
              onClick={() => setSelectedObjectiveFilter(obj)}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                selectedObjectiveFilter === obj ? 'bg-slate-900 text-white shadow-xs' : 'bg-[#f8f9fa] text-[#64748b] hover:text-[#0f172a]'
              }`}
            >
              {obj === 'ALL' ? 'All Campaigns' : obj === 'FOLLOWER' ? 'Follower Growth' : obj.replace(/_/g, ' ')}
            </button>
          ))}
        </div>
        <span className="text-xs text-[#64748b] font-medium">{filteredCampaigns.length} Campaigns</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCampaigns.map((camp) => (
          <div key={camp.id} className="bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <BrandBadge brand={camp.brand} />
                  <h3 className="font-bold text-sm text-[#0f172a]">{camp.name}</h3>
                </div>
                <div className="text-[10px] text-[#94a3b8] font-mono mt-0.5">{camp.id}</div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200 uppercase">
                {camp.objective === 'FOLLOWER' ? 'Follower Growth' : camp.objective.replace(/_/g, ' ')}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 bg-[#f8f9fa] p-3 rounded-xl border border-[#e2e8f0] text-xs">
              <div>
                <span className="text-[10px] text-[#64748b] block">Spend</span>
                <strong className="text-sm font-mono text-[#0f172a]">{formatTHB(camp.spend)}</strong>
              </div>
              <div>
                <span className="text-[10px] text-[#64748b] block">{camp.primaryResultLabel}</span>
                <strong className="text-sm font-mono text-purple-700">
                  {camp.primaryResultValue > 0 ? formatNum(camp.primaryResultValue) : '—'}
                </strong>
              </div>
              <div>
                <span className="text-[10px] text-[#64748b] block">Cost / Result</span>
                <strong className="text-sm font-mono text-[#0f172a]">
                  {camp.costPerPrimaryResult ? formatTHB(camp.costPerPrimaryResult, 2) : '—'}
                </strong>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#64748b] pt-1">
              <span>Reach: <strong className="text-[#0f172a] font-mono">{formatNum(camp.reach)}</strong></span>
              <span>CTR: <strong className="text-[#0f172a] font-mono">{formatPercent(camp.ctr)}</strong></span>
              <span>CPM: <strong className="text-[#0f172a] font-mono">{formatTHB(camp.cpm, 2)}</strong></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TargetPerformancePage({ targets, sortField, sortDirection, onSort, sortItems }) {
  const sorted = sortItems(targets);

  return (
    <div className="space-y-4">
      <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f8f9fa] text-[#64748b] border-b border-[#e2e8f0]">
              <tr>
                <th className="py-3 px-4 font-semibold">Target / Ad Set Name</th>
                <th className="py-3 px-4 font-semibold">Brand</th>
                <th onClick={() => onSort('spend')} className="py-3 px-4 font-semibold cursor-pointer hover:text-[#0f172a]">
                  <div className="flex items-center gap-1">Spend <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" /></div>
                </th>
                <th onClick={() => onSort('igFollows')} className="py-3 px-4 font-semibold cursor-pointer hover:text-[#0f172a]">
                  <div className="flex items-center gap-1">Followers Gained <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" /></div>
                </th>
                <th onClick={() => onSort('costPerFollow')} className="py-3 px-4 font-semibold cursor-pointer hover:text-[#0f172a]">
                  <div className="flex items-center gap-1">Cost / Follow <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" /></div>
                </th>
                <th onClick={() => onSort('igProfileVisits')} className="py-3 px-4 font-semibold cursor-pointer hover:text-[#0f172a]">
                  <div className="flex items-center gap-1">Profile Visits <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" /></div>
                </th>
                <th onClick={() => onSort('followConversionRate')} className="py-3 px-4 font-semibold cursor-pointer hover:text-[#0f172a]">
                  <div className="flex items-center gap-1">Visit → Follow <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" /></div>
                </th>
                <th onClick={() => onSort('reach')} className="py-3 px-4 font-semibold cursor-pointer hover:text-[#0f172a]">
                  <div className="flex items-center gap-1">Reach <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" /></div>
                </th>
                <th onClick={() => onSort('ctr')} className="py-3 px-4 font-semibold cursor-pointer hover:text-[#0f172a]">
                  <div className="flex items-center gap-1">CTR <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" /></div>
                </th>
                <th onClick={() => onSort('cpm')} className="py-3 px-4 font-semibold cursor-pointer hover:text-[#0f172a]">
                  <div className="flex items-center gap-1">CPM <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" /></div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f5f9]">
              {sorted.map((tgt) => (
                <tr key={tgt.id} className="hover:bg-[#fbfbfb] transition-colors">
                  <td className="py-3.5 px-4 font-medium text-[#0f172a] max-w-xs">
                    <div className="font-semibold line-clamp-1">{tgt.name}</div>
                    <div className="text-[10px] text-[#94a3b8] line-clamp-1">{tgt.campaignName}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <BrandBadge brand={tgt.brand} />
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-[#0f172a] font-mono">{formatTHB(tgt.spend)}</td>
                  <td className="py-3.5 px-4 font-semibold text-purple-700 font-mono">
                    {tgt.igFollows > 0 ? `+${formatNum(tgt.igFollows)}` : '—'}
                  </td>
                  <td className="py-3.5 px-4 text-[#334155] font-mono">
                    {tgt.costPerFollow ? formatTHB(tgt.costPerFollow, 2) : '—'}
                  </td>
                  <td className="py-3.5 px-4 text-[#334155] font-mono">
                    {tgt.igProfileVisits ? formatNum(tgt.igProfileVisits) : '—'}
                  </td>
                  <td className="py-3.5 px-4 text-[#334155] font-mono">
                    {tgt.followConversionRate !== null ? formatPercent(tgt.followConversionRate) : '—'}
                  </td>
                  <td className="py-3.5 px-4 text-[#334155] font-mono">{formatNum(tgt.reach)}</td>
                  <td className="py-3.5 px-4 text-[#334155] font-semibold font-mono">{formatPercent(tgt.ctr)}</td>
                  <td className="py-3.5 px-4 text-[#334155] font-mono">{formatTHB(tgt.cpm, 2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function CreativePerformancePage({ creatives, onSelectCreative, onOpenPreviewModal }) {
  const [creativeSortBy, setCreativeSortBy] = useState('spend');
  const [creativeSortOrder, setCreativeSortOrder] = useState('desc');
  const [viewMode, setViewMode] = useState('gallery'); // 'gallery' | 'table'
  const [searchQuery, setSearchQuery] = useState('');
  const [objectiveFilter, setObjectiveFilter] = useState('ALL');
  const [expandedExtraMetrics, setExpandedExtraMetrics] = useState({});

  const filteredAndSortedCreatives = useMemo(() => {
    let list = creatives;
    if (objectiveFilter !== 'ALL') {
      list = list.filter((c) => c.objective === objectiveFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.brand.toLowerCase().includes(q) ||
          (c.preview?.creative_source && c.preview.creative_source.toLowerCase().includes(q)) ||
          c.targetCount.toString().includes(q)
      );
    }

    return [...list].sort((a, b) => {
      let aVal = a[creativeSortBy];
      let bVal = b[creativeSortBy];

      if (aVal === null || aVal === undefined) aVal = creativeSortOrder === 'asc' ? Infinity : -Infinity;
      if (bVal === null || bVal === undefined) bVal = creativeSortOrder === 'asc' ? Infinity : -Infinity;

      if (typeof aVal === 'string') {
        return creativeSortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      return creativeSortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    });
  }, [creatives, objectiveFilter, creativeSortBy, creativeSortOrder, searchQuery]);

  const groupedByObjective = useMemo(() => {
    const groups = {
      FOLLOWER: [],
      AWARENESS: [],
      TRAFFIC_IG_VISIT: [],
      TRAFFIC_LPV: [],
      ENGAGEMENT: [],
      VIDEO: [],
    };

    filteredAndSortedCreatives.forEach((cr) => {
      const key = groups[cr.objective] ? cr.objective : 'AWARENESS';
      groups[key].push(cr);
    });

    return [
      {
        id: 'FOLLOWER',
        label: 'Follower Growth Creatives',
        subLabel: 'Standard template: Spend, Followers Gained, Cost / Follow, Profile Visits, Visit → Follow Rate, CTR',
        items: groups.FOLLOWER,
      },
      {
        id: 'AWARENESS',
        label: 'Awareness & Reach Creatives',
        subLabel: 'Standard template: Spend, Reach, Impressions, CPM | Secondary: Frequency, CTR, Link Clicks',
        items: groups.AWARENESS,
      },
      {
        id: 'TRAFFIC_IG_VISIT',
        label: 'Traffic & Profile Discovery Creatives',
        subLabel: 'Standard template: Spend, Profile Visits, Cost / Visit, CTR, CPC, Reach',
        items: groups.TRAFFIC_IG_VISIT,
      },
      {
        id: 'TRAFFIC_LPV',
        label: 'Landing Page Views Creatives',
        subLabel: 'Standard template: Spend, Landing Page Views, Cost / LPV, Link Clicks, CTR, Reach',
        items: groups.TRAFFIC_LPV,
      },
      {
        id: 'ENGAGEMENT',
        label: 'Engagement Creatives',
        subLabel: 'Standard template: Spend, Post Engagements, Cost / Engagement, Reactions, Comments, Reach',
        items: groups.ENGAGEMENT,
      },
      {
        id: 'VIDEO',
        label: 'Video Creatives',
        subLabel: 'Standard template: Spend, ThruPlays, Cost / ThruPlay, 3s Plays, 95% Plays, Reach',
        items: groups.VIDEO,
      },
    ].filter((g) => g.items.length > 0);
  }, [filteredAndSortedCreatives]);

  const toggleSort = (key) => {
    if (creativeSortBy === key) {
      setCreativeSortOrder(creativeSortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setCreativeSortBy(key);
      setCreativeSortOrder(key === 'costPerFollow' || key === 'cpm' || key === 'cpc' ? 'asc' : 'desc');
    }
  };

  const toggleExtraMetrics = (id, e) => {
    e.stopPropagation();
    setExpandedExtraMetrics((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderCreativeCard = (cr) => {
    const hasThumbnail = Boolean(cr.preview?.thumbnail_url);
    const hasPreviewUrl = Boolean(cr.preview?.preview_url);
    const isAwareness = cr.objective === 'AWARENESS';
    const isFollower = cr.objective === 'FOLLOWER';
    const isTrafficVisit = cr.objective === 'TRAFFIC_IG_VISIT';
    const isTrafficLPV = cr.objective === 'TRAFFIC_LPV';
    const isEngagement = cr.objective === 'ENGAGEMENT';
    const isVideo = cr.objective === 'VIDEO';
    const isExpanded = Boolean(expandedExtraMetrics[cr.id]);

    // Check if creative has extra metrics that belong outside its primary campaign template
    const hasExtraMetrics =
      (isAwareness && (cr.igProfileVisits > 0 || cr.igFollows > 0 || cr.postEngagements > 0)) ||
      (isFollower && (cr.thruPlays > 0 || cr.landingPageViews > 0)) ||
      (isTrafficVisit && (cr.thruPlays > 0 || cr.postEngagements > 0));

    return (
      <div
        key={cr.id}
        onClick={() => onSelectCreative(cr)}
        className="bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-[#cbd5e1] transition-all cursor-pointer flex flex-col justify-between group"
      >
        <div className="space-y-3.5">
          {/* Visual Header / Media Container */}
          <div className="relative w-full h-44 bg-[#f1f5f9] rounded-xl overflow-hidden border border-[#e2e8f0] flex items-center justify-center group-hover:border-[#94a3b8] transition-colors">
            {hasThumbnail ? (
              <img
                src={cr.preview.thumbnail_url}
                alt={cr.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 via-slate-50 to-slate-200 opacity-90"></div>
                <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:12px_12px]"></div>

                <div className="relative z-10 flex flex-col items-center gap-1.5 text-[#64748b] px-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-[#e2e8f0] flex items-center justify-center text-[#0f172a] group-hover:scale-105 transition-transform">
                    {cr.thruPlays > 0 ? (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    ) : (
                      <ImageIcon className="w-4 h-4" />
                    )}
                  </div>
                  <span className="text-[10px] font-mono tracking-tight font-medium bg-white/80 px-2 py-0.5 rounded-md border border-slate-200 truncate max-w-[220px]">
                    {cr.name}
                  </span>
                </div>
              </>
            )}

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 pointer-events-none"></div>

            <div className="absolute top-2.5 left-2.5 z-20">
              <BrandBadge brand={cr.brand} />
            </div>

            <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5">
              {cr.preview?.creative_source && (
                <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white/90 text-slate-800 shadow-2xs backdrop-blur-xs">
                  {cr.preview.creative_source}
                </span>
              )}
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0f172a] text-white shadow-xs">
                <Target className="w-3 h-3" />
                {cr.targetCount} {cr.targetCount === 1 ? 'Target' : 'Targets'}
              </span>
            </div>

            <div className="absolute bottom-2.5 left-2.5 right-2.5 z-20 flex items-center justify-between gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold bg-white/95 text-[#0f172a] border border-[#e2e8f0] shadow-2xs font-mono">
                {formatTHB(cr.spend)}
              </span>

              {hasPreviewUrl ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(cr.preview.preview_url, '_blank', 'noopener,noreferrer');
                  }}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors"
                  title="Open Meta Ads Preview in new tab"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Open Ad Preview</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenPreviewModal(cr);
                  }}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-colors"
                >
                  <Link2 className="w-2.5 h-2.5" />
                  <span>Connect Link</span>
                </button>
              )}
            </div>
          </div>

          {/* Title and Objective Badge */}
          <div>
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-bold text-[#0f172a] line-clamp-1 group-hover:underline">
                {cr.name}
              </h3>
              <span
                className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 border ${
                  isFollower
                    ? 'bg-purple-50 text-purple-700 border-purple-200'
                    : isAwareness
                    ? 'bg-blue-50 text-blue-700 border-blue-200'
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                }`}
              >
                {isFollower ? 'Follower' : cr.objective.replace(/_/g, ' ')}
              </span>
            </div>
            <div className="text-[11px] text-[#64748b] line-clamp-1 mt-0.5">
              Targets: {cr.adSetNamesList.join(', ')}
            </div>
          </div>

          {}
          {/* TEMPLATE 1: AWARENESS CAMPAIGN CREATIVE TEMPLATE */}
          {isAwareness && (
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 bg-blue-50/40 border border-blue-100 rounded-xl p-3">
                <div>
                  <span className="text-[10px] font-semibold text-blue-700 uppercase tracking-wide block">
                    Reach
                  </span>
                  <strong className="text-base text-blue-900 font-mono">
                    {formatNum(cr.reach)}
                  </strong>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-[#64748b] uppercase tracking-wide block">
                    CPM
                  </span>
                  <strong className="text-base text-[#0f172a] font-mono">
                    {formatTHB(cr.cpm, 2)}
                  </strong>
                </div>
                <div className="pt-1 border-t border-blue-100">
                  <span className="text-[10px] text-[#64748b] block">Impressions</span>
                  <span className="text-xs font-semibold text-[#0f172a] font-mono">
                    {formatNum(cr.impressions)}
                  </span>
                </div>
                <div className="pt-1 border-t border-blue-100">
                  <span className="text-[10px] text-[#64748b] block">Frequency</span>
                  <span className="text-xs font-semibold text-[#0f172a] font-mono">
                    {cr.frequency ? cr.frequency.toFixed(2) : (cr.impressions / Math.max(cr.reach, 1)).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Standard Awareness Secondary Strip */}
              <div className="flex items-center justify-between text-[11px] text-[#64748b] pt-1 border-t border-[#f1f5f9]">
                <span>CTR: <strong className="text-[#0f172a] font-mono">{formatPercent(cr.ctr)}</strong></span>
                <span>Link Clicks: <strong className="text-[#0f172a] font-mono">{formatNum(cr.linkClicks)}</strong></span>
                <span>CPM: <strong className="text-[#0f172a] font-mono">{formatTHB(cr.cpm, 2)}</strong></span>
              </div>
            </div>
          )}

          {/* TEMPLATE 2: FOLLOWER CAMPAIGN CREATIVE TEMPLATE */}
          {isFollower && (
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 bg-purple-50/40 border border-purple-100 rounded-xl p-3">
                <div>
                  <span className="text-[10px] font-semibold text-purple-700 uppercase tracking-wide block">
                    Followers Gained
                  </span>
                  <strong className="text-base text-purple-800 font-mono">
                    +{formatNum(cr.igFollows)}
                  </strong>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-[#64748b] uppercase tracking-wide block">
                    Cost / Follow
                  </span>
                  <strong className="text-base text-[#0f172a] font-mono">
                    {cr.costPerFollow ? formatTHB(cr.costPerFollow, 2) : '—'}
                  </strong>
                </div>
                <div className="pt-1 border-t border-purple-100">
                  <span className="text-[10px] text-[#64748b] block">Profile Visits</span>
                  <span className="text-xs font-semibold text-[#0f172a] font-mono">
                    {formatNum(cr.igProfileVisits)}
                  </span>
                </div>
                <div className="pt-1 border-t border-purple-100">
                  <span className="text-[10px] text-[#64748b] block">Visit → Follow Rate</span>
                  <span className="text-xs font-semibold text-[#0f172a] font-mono">
                    {cr.followConversionRate !== null ? formatPercent(cr.followConversionRate) : '—'}
                  </span>
                </div>
              </div>

              {/* Standard Follower Secondary Strip */}
              <div className="flex items-center justify-between text-[11px] text-[#64748b] pt-1 border-t border-[#f1f5f9]">
                <span>CTR: <strong className="text-[#0f172a] font-mono">{formatPercent(cr.ctr)}</strong></span>
                <span>Reach: <strong className="text-[#0f172a] font-mono">{formatNum(cr.reach)}</strong></span>
                <span>CPM: <strong className="text-[#0f172a] font-mono">{formatTHB(cr.cpm, 2)}</strong></span>
              </div>
            </div>
          )}

          {/* TEMPLATE 3: TRAFFIC / PROFILE VISIT CAMPAIGN TEMPLATE */}
          {isTrafficVisit && (
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 bg-emerald-50/40 border border-emerald-100 rounded-xl p-3">
                <div>
                  <span className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wide block">
                    Profile Visits
                  </span>
                  <strong className="text-base text-emerald-800 font-mono">
                    {formatNum(cr.igProfileVisits)}
                  </strong>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-[#64748b] uppercase tracking-wide block">
                    Cost / Visit
                  </span>
                  <strong className="text-base text-[#0f172a] font-mono">
                    {cr.costPerVisit ? formatTHB(cr.costPerVisit, 2) : '—'}
                  </strong>
                </div>
                <div className="pt-1 border-t border-emerald-100">
                  <span className="text-[10px] text-[#64748b] block">Link CTR</span>
                  <span className="text-xs font-semibold text-[#0f172a] font-mono">
                    {formatPercent(cr.ctr)}
                  </span>
                </div>
                <div className="pt-1 border-t border-emerald-100">
                  <span className="text-[10px] text-[#64748b] block">CPC</span>
                  <span className="text-xs font-semibold text-[#0f172a] font-mono">
                    {cr.cpc ? formatTHB(cr.cpc, 2) : '—'}
                  </span>
                </div>
              </div>

              {/* Standard Traffic Secondary Strip */}
              <div className="flex items-center justify-between text-[11px] text-[#64748b] pt-1 border-t border-[#f1f5f9]">
                <span>Reach: <strong className="text-[#0f172a] font-mono">{formatNum(cr.reach)}</strong></span>
                <span>Clicks: <strong className="text-[#0f172a] font-mono">{formatNum(cr.linkClicks)}</strong></span>
                <span>CPM: <strong className="text-[#0f172a] font-mono">{formatTHB(cr.cpm, 2)}</strong></span>
              </div>
            </div>
          )}

          {/* TEMPLATE 4: LANDING PAGE VIEWS */}
          {isTrafficLPV && (
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 bg-cyan-50/40 border border-cyan-100 rounded-xl p-3">
                <div>
                  <span className="text-[10px] font-semibold text-cyan-800 uppercase tracking-wide block">
                    Landing Page Views
                  </span>
                  <strong className="text-base text-cyan-900 font-mono">
                    {formatNum(cr.landingPageViews || 0)}
                  </strong>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-[#64748b] uppercase tracking-wide block">
                    Cost / LPV
                  </span>
                  <strong className="text-base text-[#0f172a] font-mono">
                    {cr.costPerLPV ? formatTHB(cr.costPerLPV, 2) : '—'}
                  </strong>
                </div>
                <div className="pt-1 border-t border-cyan-100">
                  <span className="text-[10px] text-[#64748b] block">Link CTR</span>
                  <span className="text-xs font-semibold text-[#0f172a] font-mono">{formatPercent(cr.ctr)}</span>
                </div>
                <div className="pt-1 border-t border-cyan-100">
                  <span className="text-[10px] text-[#64748b] block">CPC</span>
                  <span className="text-xs font-semibold text-[#0f172a] font-mono">{cr.cpc ? formatTHB(cr.cpc, 2) : '—'}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#64748b] pt-1 border-t border-[#f1f5f9]">
                <span>Reach: <strong className="text-[#0f172a] font-mono">{formatNum(cr.reach)}</strong></span>
                <span>Clicks: <strong className="text-[#0f172a] font-mono">{formatNum(cr.linkClicks)}</strong></span>
                <span>CPM: <strong className="text-[#0f172a] font-mono">{formatTHB(cr.cpm, 2)}</strong></span>
              </div>
            </div>
          )}

          {/* TEMPLATE 5: ENGAGEMENT */}
          {isEngagement && (
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 bg-amber-50/40 border border-amber-100 rounded-xl p-3">
                <div>
                  <span className="text-[10px] font-semibold text-amber-800 uppercase tracking-wide block">
                    Post Engagements
                  </span>
                  <strong className="text-base text-amber-900 font-mono">
                    {formatNum(cr.postEngagements || 0)}
                  </strong>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-[#64748b] uppercase tracking-wide block">
                    Cost / Engagement
                  </span>
                  <strong className="text-base text-[#0f172a] font-mono">
                    {cr.costPerEngagement ? formatTHB(cr.costPerEngagement, 2) : '—'}
                  </strong>
                </div>
                <div className="pt-1 border-t border-amber-100">
                  <span className="text-[10px] text-[#64748b] block">Reactions</span>
                  <span className="text-xs font-semibold text-[#0f172a] font-mono">{formatNum(cr.postReactions || 0)}</span>
                </div>
                <div className="pt-1 border-t border-amber-100">
                  <span className="text-[10px] text-[#64748b] block">Comments & Shares</span>
                  <span className="text-xs font-semibold text-[#0f172a] font-mono">{formatNum((cr.postComments || 0) + (cr.postShares || 0))}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#64748b] pt-1 border-t border-[#f1f5f9]">
                <span>Reach: <strong className="text-[#0f172a] font-mono">{formatNum(cr.reach)}</strong></span>
                <span>CTR: <strong className="text-[#0f172a] font-mono">{formatPercent(cr.ctr)}</strong></span>
                <span>CPM: <strong className="text-[#0f172a] font-mono">{formatTHB(cr.cpm, 2)}</strong></span>
              </div>
            </div>
          )}

          {/* TEMPLATE 6: VIDEO */}
          {isVideo && (
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 bg-indigo-50/40 border border-indigo-100 rounded-xl p-3">
                <div>
                  <span className="text-[10px] font-semibold text-indigo-800 uppercase tracking-wide block">
                    ThruPlays
                  </span>
                  <strong className="text-base text-indigo-900 font-mono">
                    {formatNum(cr.thruPlays || 0)}
                  </strong>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-[#64748b] uppercase tracking-wide block">
                    Cost / ThruPlay
                  </span>
                  <strong className="text-base text-[#0f172a] font-mono">
                    {cr.costPerThruPlay ? formatTHB(cr.costPerThruPlay, 2) : '—'}
                  </strong>
                </div>
                <div className="pt-1 border-t border-indigo-100">
                  <span className="text-[10px] text-[#64748b] block">3s Video Plays</span>
                  <span className="text-xs font-semibold text-[#0f172a] font-mono">{formatNum(cr.video3sPlays || 0)}</span>
                </div>
                <div className="pt-1 border-t border-indigo-100">
                  <span className="text-[10px] text-[#64748b] block">95% Video Plays</span>
                  <span className="text-xs font-semibold text-[#0f172a] font-mono">{formatNum(cr.videoPlays95 || 0)}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#64748b] pt-1 border-t border-[#f1f5f9]">
                <span>Reach: <strong className="text-[#0f172a] font-mono">{formatNum(cr.reach)}</strong></span>
                <span>CTR: <strong className="text-[#0f172a] font-mono">{formatPercent(cr.ctr)}</strong></span>
                <span>CPM: <strong className="text-[#0f172a] font-mono">{formatTHB(cr.cpm, 2)}</strong></span>
              </div>
            </div>
          )}

          {}
          {/* EXTRA METRICS ISOLATION (Never overrides primary campaign template) */}
          {hasExtraMetrics && (
            <div className="pt-1">
              <button
                type="button"
                onClick={(e) => toggleExtraMetrics(cr.id, e)}
                className="text-[10px] font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors"
              >
                <span>{isExpanded ? 'Hide Extra Deliveries' : '+ View More Metrics'}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>

              {isExpanded && (
                <div className="mt-2 p-2 bg-slate-50 rounded-lg border border-slate-200 text-[10px] text-slate-600 space-y-1 animate-fadeIn">
                  {cr.igProfileVisits > 0 && isAwareness && (
                    <div className="flex justify-between">
                      <span>Profile Visits:</span>
                      <strong className="font-mono text-slate-800">{formatNum(cr.igProfileVisits)}</strong>
                    </div>
                  )}
                  {cr.igFollows > 0 && (isAwareness || isTrafficVisit) && (
                    <div className="flex justify-between">
                      <span>Followers Gained:</span>
                      <strong className="font-mono text-purple-700">+{formatNum(cr.igFollows)}</strong>
                    </div>
                  )}
                  {cr.thruPlays > 0 && !isVideo && (
                    <div className="flex justify-between">
                      <span>ThruPlays:</span>
                      <strong className="font-mono text-slate-800">{formatNum(cr.thruPlays)}</strong>
                    </div>
                  )}
                  {cr.postEngagements > 0 && !isEngagement && (
                    <div className="flex justify-between">
                      <span>Post Engagements:</span>
                      <strong className="font-mono text-slate-800">{formatNum(cr.postEngagements)}</strong>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-[#f1f5f9] flex items-center justify-between">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenPreviewModal(cr);
            }}
            className="text-[11px] text-[#64748b] hover:text-[#0f172a] flex items-center gap-1"
            title="Manage Preview link & thumbnail"
          >
            <Edit2 className="w-3 h-3" />
            <span>{cr.preview ? 'Edit Preview' : 'Add Preview'}</span>
          </button>

          <span className="text-xs font-semibold text-slate-800 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
            Target Breakdown <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Sort Controls Bar */}
      <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold text-[#0f172a]">Creative Performance (Grouped by Asset)</h2>
              <span className="text-[11px] font-semibold bg-slate-100 text-[#0f172a] px-2 py-0.5 rounded-full border border-slate-200">
                {filteredAndSortedCreatives.length} Unique Creatives
              </span>
            </div>
            <p className="text-xs text-[#64748b] mt-0.5">
              Metrics are strictly aligned to each parent campaign's objective to ensure fair, side-by-side creative comparisons.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => onOpenPreviewModal(null)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Creative Preview</span>
            </button>

            {/* View Mode Toggle */}
            <div className="inline-flex rounded-xl bg-[#f1f5f9] p-0.5 border border-[#e2e8f0]">
              <button
                onClick={() => setViewMode('gallery')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  viewMode === 'gallery'
                    ? 'bg-white text-[#0f172a] shadow-xs'
                    : 'text-[#64748b] hover:text-[#0f172a]'
                }`}
              >
                Cards Gallery
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  viewMode === 'table'
                    ? 'bg-white text-[#0f172a] shadow-xs'
                    : 'text-[#64748b] hover:text-[#0f172a]'
                }`}
              >
                List View
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#94a3b8]" />
              <input
                type="text"
                placeholder="Search creatives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs bg-[#f8f9fa] border border-[#e2e8f0] rounded-xl focus:outline-none focus:border-[#0f172a] w-44 sm:w-56"
              />
            </div>
          </div>
        </div>

        {/* Objective Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#f1f5f9] text-xs">
          <span className="text-xs font-semibold text-[#64748b] mr-1">Objective:</span>
          {[
            { id: 'ALL', label: 'All Objectives' },
            { id: 'AWARENESS', label: 'Awareness / Reach' },
            { id: 'FOLLOWER', label: 'Follower Growth' },
            { id: 'TRAFFIC_IG_VISIT', label: 'Profile Visits' },
            { id: 'TRAFFIC_LPV', label: 'Landing Page Views' },
            { id: 'ENGAGEMENT', label: 'Engagement' },
            { id: 'VIDEO', label: 'Video' },
          ].map((pill) => {
            const isActive = objectiveFilter === pill.id;
            return (
              <button
                key={pill.id}
                onClick={() => setObjectiveFilter(pill.id)}
                className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-[#f8f9fa] text-[#64748b] hover:text-[#0f172a] border border-[#e2e8f0]'
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>

        {/* Sort Pills Toolbar */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#f1f5f9] text-xs">
          <span className="text-xs font-semibold text-[#64748b] mr-1">Sort by:</span>
          {[
            { id: 'spend', label: 'Spend' },
            { id: 'reach', label: 'Reach' },
            { id: 'cpm', label: 'CPM' },
            { id: 'igFollows', label: 'Followers Gained' },
            { id: 'costPerFollow', label: 'Cost / Follow' },
            { id: 'igProfileVisits', label: 'Profile Visits' },
            { id: 'followConversionRate', label: 'Visit → Follow Rate' },
            { id: 'ctr', label: 'CTR' },
            { id: 'targetCount', label: 'Targets Used' },
          ].map((pill) => {
            const isActive = creativeSortBy === pill.id;
            return (
              <button
                key={pill.id}
                onClick={() => toggleSort(pill.id)}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl font-medium transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-[#f8f9fa] text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] border border-[#e2e8f0]'
                }`}
              >
                <span>{pill.label}</span>
                {isActive && (
                  <span className="text-[10px] font-mono opacity-80">
                    {creativeSortOrder === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {}
      {viewMode === 'gallery' ? (
        <div className="space-y-8">
          {groupedByObjective.map((group) => (
            <div key={group.id} className="space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#e2e8f0] pb-2 gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-[#0f172a]">{group.label}</h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {group.items.length} {group.items.length === 1 ? 'creative' : 'creatives'}
                  </span>
                </div>
                <span className="text-[11px] text-[#64748b] italic">{group.subLabel}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((cr) => renderCreativeCard(cr))}
              </div>
            </div>
          ))}

          {groupedByObjective.length === 0 && (
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-12 text-center text-[#94a3b8] text-xs">
              No creatives match the selected filters.
            </div>
          )}
        </div>
      ) : (
        /* List / Table Mode */
        <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#f8f9fa] text-[#64748b] border-b border-[#e2e8f0]">
                <tr>
                  <th className="py-3 px-4 font-semibold">Creative Name</th>
                  <th className="py-3 px-4 font-semibold">Objective Template</th>
                  <th className="py-3 px-4 font-semibold">Brand</th>
                  <th className="py-3 px-4 font-semibold">Preview Link</th>
                  <th className="py-3 px-4 font-semibold">Targets Deployed</th>
                  <th onClick={() => toggleSort('spend')} className="py-3 px-4 font-semibold cursor-pointer hover:text-[#0f172a]">
                    <div className="flex items-center gap-1">Spend <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" /></div>
                  </th>
                  <th onClick={() => toggleSort('reach')} className="py-3 px-4 font-semibold cursor-pointer hover:text-[#0f172a]">
                    <div className="flex items-center gap-1">Reach <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" /></div>
                  </th>
                  <th onClick={() => toggleSort('cpm')} className="py-3 px-4 font-semibold cursor-pointer hover:text-[#0f172a]">
                    <div className="flex items-center gap-1">CPM <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" /></div>
                  </th>
                  <th onClick={() => toggleSort('igFollows')} className="py-3 px-4 font-semibold cursor-pointer hover:text-[#0f172a]">
                    <div className="flex items-center gap-1">Followers Gained <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" /></div>
                  </th>
                  <th onClick={() => toggleSort('costPerFollow')} className="py-3 px-4 font-semibold cursor-pointer hover:text-[#0f172a]">
                    <div className="flex items-center gap-1">Cost / Follow <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" /></div>
                  </th>
                  <th onClick={() => toggleSort('igProfileVisits')} className="py-3 px-4 font-semibold cursor-pointer hover:text-[#0f172a]">
                    <div className="flex items-center gap-1">Profile Visits <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" /></div>
                  </th>
                  <th onClick={() => toggleSort('ctr')} className="py-3 px-4 font-semibold cursor-pointer hover:text-[#0f172a]">
                    <div className="flex items-center gap-1">CTR <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" /></div>
                  </th>
                  <th className="py-3 px-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {filteredAndSortedCreatives.map((cr) => (
                  <tr
                    key={cr.id}
                    className="hover:bg-[#fbfbfb] transition-colors cursor-pointer"
                    onClick={() => onSelectCreative(cr)}
                  >
                    <td className="py-3.5 px-4 font-medium text-[#0f172a] max-w-xs">
                      <div className="flex items-center gap-2">
                        {cr.preview?.thumbnail_url && (
                          <img
                            src={cr.preview.thumbnail_url}
                            alt=""
                            className="w-7 h-7 rounded-md object-cover border border-[#e2e8f0] shrink-0"
                          />
                        )}
                        <div className="line-clamp-1 hover:underline font-semibold">{cr.name}</div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {cr.objective.replace(/_/g, ' ')}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <BrandBadge brand={cr.brand} />
                    </td>
                    <td className="py-3.5 px-4" onClick={(e) => e.stopPropagation()}>
                      {cr.preview?.preview_url ? (
                        <a
                          href={cr.preview.preview_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Open Ad Preview</span>
                        </a>
                      ) : (
                        <button
                          onClick={() => onOpenPreviewModal(cr)}
                          className="text-[10px] text-[#94a3b8] hover:text-[#0f172a] underline"
                        >
                          + Add Preview Link
                        </button>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-[#64748b]">
                      <span className="font-semibold text-[#0f172a]">{cr.targetCount}</span> Targets
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-[#0f172a] font-mono">{formatTHB(cr.spend)}</td>
                    <td className="py-3.5 px-4 text-[#334155] font-mono">{formatNum(cr.reach)}</td>
                    <td className="py-3.5 px-4 text-[#334155] font-mono">{formatTHB(cr.cpm, 2)}</td>
                    <td className="py-3.5 px-4 font-semibold text-purple-700 font-mono">
                      {cr.igFollows > 0 ? `+${formatNum(cr.igFollows)}` : '—'}
                    </td>
                    <td className="py-3.5 px-4 text-[#334155] font-mono">
                      {cr.costPerFollow ? formatTHB(cr.costPerFollow, 2) : '—'}
                    </td>
                    <td className="py-3.5 px-4 text-[#334155] font-mono">
                      {cr.igProfileVisits ? formatNum(cr.igProfileVisits) : '—'}
                    </td>
                    <td className="py-3.5 px-4 text-[#334155] font-semibold font-mono">{formatPercent(cr.ctr)}</td>
                    <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => onOpenPreviewModal(cr)}
                          className="p-1 text-[#64748b] hover:text-[#0f172a] rounded hover:bg-slate-100"
                          title="Manage Preview link & thumbnail"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onSelectCreative(cr)}
                          className="text-[11px] font-semibold text-slate-800 hover:text-black bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-lg transition-colors border border-slate-200"
                        >
                          Breakdown
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function CreativePreviewModal({
  isOpen,
  onClose,
  initialCreative,
  allCreativesList,
  onSavePreview,
  onDeletePreview,
}) {
  const [selectedBrand, setSelectedBrand] = useState('Ricochet');
  const [creativeName, setCreativeName] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [creativeSource, setCreativeSource] = useState('IG Reel 9:16');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [nameSearch, setNameSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (initialCreative) {
      setSelectedBrand(initialCreative.brand || 'Ricochet');
      setCreativeName(initialCreative.name || '');
      setPreviewUrl(initialCreative.preview?.preview_url || '');
      setCreativeSource(initialCreative.preview?.creative_source || 'IG Reel 9:16');
      setThumbnailUrl(initialCreative.preview?.thumbnail_url || '');
      setNotes(initialCreative.preview?.notes || '');
    } else {
      setSelectedBrand('Ricochet');
      setCreativeName('');
      setPreviewUrl('');
      setCreativeSource('IG Reel 9:16');
      setThumbnailUrl('');
      setNotes('');
    }
    setNameSearch('');
    setIsDropdownOpen(false);
  }, [initialCreative, isOpen]);

  // Available unique creative names filtered by brand from the Meta dataset
  const availableCreativesForBrand = useMemo(() => {
    return allCreativesList
      .filter((c) => c.brand === selectedBrand)
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [allCreativesList, selectedBrand]);

  // Find currently selected creative metadata to automatically show associated Ad IDs
  const currentCreativeMeta = useMemo(() => {
    return availableCreativesForBrand.find(
      (c) => c.name.toLowerCase() === creativeName.toLowerCase()
    );
  }, [availableCreativesForBrand, creativeName]);

  const associatedAdIds = useMemo(() => {
    if (!currentCreativeMeta) return [];
    return currentCreativeMeta.associatedAdIds || [];
  }, [currentCreativeMeta]);

  const handleThumbnailUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result;
      if (typeof dataUrl === 'string') {
        setThumbnailUrl(dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!creativeName.trim()) return;

    const libraryKey = `${selectedBrand}:::${creativeName.toLowerCase().trim()}`;
    const payload = {
      libraryKey,
      brand: selectedBrand,
      creative_name: creativeName.trim(),
      preview_url: previewUrl.trim(),
      thumbnail_url: thumbnailUrl.trim(),
      creative_source: creativeSource,
      notes: notes.trim(),
      ad_ids: associatedAdIds,
      updated_at: new Date().toISOString(),
    };

    onSavePreview(payload);
    onClose();
  };

  const handleDelete = () => {
    if (!creativeName.trim()) return;
    const libraryKey = `${selectedBrand}:::${creativeName.toLowerCase().trim()}`;
    onDeletePreview(libraryKey);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-6 max-w-xl w-full shadow-2xl space-y-4 border border-[#e2e8f0] my-8">
        <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <Link2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#0f172a]">
                {initialCreative?.preview ? 'Edit Creative Preview' : 'Connect Creative Preview'}
              </h3>
              <p className="text-[11px] text-[#64748b]">
                Map Meta Ads Preview links & thumbnails to grouped creative assets
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3.5 text-xs">
          {/* Brand Selection */}
          <div>
            <label className="block text-[11px] font-semibold text-[#0f172a] mb-1">Brand</label>
            <div className="inline-flex rounded-xl bg-[#f1f5f9] p-1 border border-[#e2e8f0]">
              {['Ricochet', 'Corsa'].map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => {
                    setSelectedBrand(b);
                    setCreativeName('');
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedBrand === b ? 'bg-slate-900 text-white shadow-xs' : 'text-[#64748b]'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Creative / Ad Name Searchable Dropdown */}
          <div className="relative">
            <label className="block text-[11px] font-semibold text-[#0f172a] mb-1">
              Creative / Ad Name (Auto-populated from dataset)
            </label>
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-[#f8f9fa] border border-[#cbd5e1] hover:border-[#94a3b8] rounded-xl px-3 py-2 text-xs flex items-center justify-between cursor-pointer"
            >
              <span className={creativeName ? 'font-semibold text-[#0f172a]' : 'text-[#94a3b8]'}>
                {creativeName || 'Select an Ad Name from imported data...'}
              </span>
              <ChevronDown className="w-4 h-4 text-[#64748b]" />
            </div>

            {isDropdownOpen && (
              <div className="absolute left-0 right-0 mt-1 bg-white border border-[#e2e8f0] rounded-xl shadow-xl z-50 p-2 space-y-1.5 max-h-52 overflow-y-auto">
                <input
                  type="text"
                  placeholder="Type to filter creative names..."
                  value={nameSearch}
                  onChange={(e) => setNameSearch(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-[#f8f9fa] border border-[#e2e8f0] rounded-lg focus:outline-none focus:border-slate-900"
                />
                <div className="divide-y divide-slate-100">
                  {availableCreativesForBrand
                    .filter((c) => c.name.toLowerCase().includes(nameSearch.toLowerCase()))
                    .map((c) => (
                      <div
                        key={c.id}
                        onClick={() => {
                          setCreativeName(c.name);
                          if (c.preview) {
                            setPreviewUrl(c.preview.preview_url || '');
                            setCreativeSource(c.preview.creative_source || 'IG Reel 9:16');
                            setThumbnailUrl(c.preview.thumbnail_url || '');
                            setNotes(c.preview.notes || '');
                          }
                          setIsDropdownOpen(false);
                        }}
                        className="py-1.5 px-2 hover:bg-slate-50 rounded cursor-pointer text-xs flex items-center justify-between"
                      >
                        <span className="font-medium text-[#0f172a]">{c.name}</span>
                        <span className="text-[10px] text-[#94a3b8]">{c.targetCount} Targets</span>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Associated Ad IDs Automatically Detected */}
          {creativeName && (
            <div className="bg-[#f8f9fa] border border-[#e2e8f0] rounded-xl p-2.5">
              <span className="text-[10px] font-semibold text-[#64748b] block mb-1">
                Associated Ad IDs Detected Automatically ({associatedAdIds.length}):
              </span>
              <div className="flex flex-wrap gap-1">
                {associatedAdIds.length > 0 ? (
                  associatedAdIds.map((id, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white border border-[#cbd5e1] font-mono text-[10px] text-slate-700"
                    >
                      {id}
                    </span>
                  ))
                ) : (
                  <span className="text-[10px] text-[#94a3b8]">No Ad IDs found</span>
                )}
              </div>
            </div>
          )}

          {/* Ads Preview Link */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-[11px] font-semibold text-[#0f172a]">
                Ads Preview Link (Meta Ads Preview URL)
              </label>
              {previewUrl && (
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-blue-600 hover:underline flex items-center gap-0.5"
                >
                  Test Link <ExternalLink className="w-2.5 h-2.5" />
                </a>
              )}
            </div>
            <input
              type="url"
              placeholder="https://fb.me/adspreview/facebook/..."
              value={previewUrl}
              onChange={(e) => setPreviewUrl(e.target.value)}
              className="w-full px-3 py-2 bg-[#f8f9fa] border border-[#cbd5e1] rounded-xl text-xs focus:outline-none focus:border-slate-900 font-mono"
            />
          </div>

          {/* Creative Source */}
          <div>
            <label className="block text-[11px] font-semibold text-[#0f172a] mb-1">
              Creative Source / Format
            </label>
            <select
              value={creativeSource}
              onChange={(e) => setCreativeSource(e.target.value)}
              className="w-full px-3 py-2 bg-[#f8f9fa] border border-[#cbd5e1] rounded-xl text-xs focus:outline-none focus:border-slate-900"
            >
              <option value="IG Reel 9:16">IG Reel 9:16</option>
              <option value="IG Story 9:16">IG Story 9:16</option>
              <option value="Feed Photo 1:1">Feed Photo 1:1</option>
              <option value="Feed Photo 4:5">Feed Photo 4:5</option>
              <option value="Carousel Post">Carousel Post</option>
              <option value="Influencer / UGC">Influencer / UGC</option>
              <option value="Agency Video Asset">Agency Video Asset</option>
            </select>
          </div>

          {/* Thumbnail Image: Upload or Direct URL */}
          <div className="space-y-2">
            <label className="block text-[11px] font-semibold text-[#0f172a]">
              Thumbnail Image (Upload file or enter URL)
            </label>

            <div className="flex items-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleThumbnailUpload}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#cbd5e1] hover:bg-[#f1f5f9] text-slate-700 text-xs font-medium transition-colors"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Upload Thumbnail Image</span>
              </button>

              {thumbnailUrl && (
                <button
                  type="button"
                  onClick={() => setThumbnailUrl('')}
                  className="text-[11px] text-rose-600 hover:underline"
                >
                  Clear Image
                </button>
              )}
            </div>

            <input
              type="url"
              placeholder="Or paste direct image URL (https://...)"
              value={thumbnailUrl}
              onChange={(e) => setThumbnailUrl(e.target.value)}
              className="w-full px-3 py-2 bg-[#f8f9fa] border border-[#cbd5e1] rounded-xl text-xs focus:outline-none focus:border-slate-900 font-mono"
            />

            {thumbnailUrl && (
              <div className="mt-2 w-full h-32 rounded-xl border border-[#e2e8f0] overflow-hidden bg-slate-50 flex items-center justify-center">
                <img
                  src={thumbnailUrl}
                  alt="Thumbnail Preview"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-[11px] font-semibold text-[#0f172a] mb-1">Notes</label>
            <textarea
              rows={2}
              placeholder="Hook angle, target persona, production notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 bg-[#f8f9fa] border border-[#cbd5e1] rounded-xl text-xs focus:outline-none focus:border-slate-900"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[#f1f5f9]">
          {initialCreative?.preview ? (
            <button
              type="button"
              onClick={handleDelete}
              className="text-xs text-rose-600 hover:text-rose-800 font-medium px-2 py-1 rounded hover:bg-rose-50"
            >
              Remove Preview
            </button>
          ) : (
            <div></div>
          )}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs text-[#64748b] hover:bg-[#f1f5f9] rounded-xl"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={!creativeName.trim()}
              onClick={handleSave}
              className="px-4 py-1.5 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-xs transition-colors disabled:opacity-50"
            >
              Save Preview Mapping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendsPage({ timeSeriesData }) {
  const hasFollowerData = timeSeriesData.some((d) => (d.igFollows || 0) > 0);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-xs">
        <div className="mb-4">
          <h2 className="text-base font-semibold text-[#0f172a]">Historical Spend & Delivery Trends</h2>
          <p className="text-xs text-[#64748b]">
            Track daily or monthly pacing derived directly from "Reporting starts" dates.
          </p>
        </div>

        <div className="h-72 w-full">
          <TrendAreaChart data={timeSeriesData} />
        </div>
      </div>

      {hasFollowerData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-xs">
            <h3 className="text-sm font-semibold text-[#0f172a] mb-1">Followers Gained Over Time</h3>
            <p className="text-xs text-[#64748b] mb-4">Total Instagram followers acquired</p>
            <div className="h-44 w-full">
              <TrendLineChart
                data={timeSeriesData}
                metricKey="igFollows"
                label="Followers Gained"
                color="#7c3aed"
                isCurrency={false}
              />
            </div>
          </div>

          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-xs">
            <h3 className="text-sm font-semibold text-[#0f172a] mb-1">Cost / Follow Over Time</h3>
            <p className="text-xs text-[#64748b] mb-4">Spend divided by net followers acquired</p>
            <div className="h-44 w-full">
              <TrendLineChart
                data={timeSeriesData}
                metricKey="costPerFollow"
                label="Cost / Follow"
                color="#0f172a"
                isCurrency={true}
              />
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-xs">
          <h3 className="text-sm font-semibold text-[#0f172a] mb-1">CPM Movement (Cost per 1,000 Impressions)</h3>
          <p className="text-xs text-[#64748b] mb-4">Total Spend / Total Impressions * 1,000</p>
          <div className="h-44 w-full">
            <TrendLineChart
              data={timeSeriesData}
              metricKey="cpm"
              label="CPM"
              color="#2563eb"
              isCurrency={true}
            />
          </div>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-xs">
          <h3 className="text-sm font-semibold text-[#0f172a] mb-1">Traffic Deliveries (Profile Visits)</h3>
          <p className="text-xs text-[#64748b] mb-4">Volume of Instagram profile visits</p>
          <div className="h-44 w-full">
            <TrendLineChart
              data={timeSeriesData}
              metricKey="igProfileVisits"
              label="IG Profile Visits"
              color="#059669"
              isCurrency={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DataManagementPage({
  files,
  totalRows,
  duplicateCount,
  onInitiateRemoveFile,
  onResetToSample,
  onInitiateClearAll,
  onTriggerUpload,
  onReprocess,
  dbLoading,
}) {
  const datasetSummary = useMemo(() => {
    let earliest = null;
    let latest = null;

    files.forEach((f) => {
      if (f.reportingStart && f.reportingStart !== 'N/A') {
        if (!earliest || f.reportingStart < earliest) earliest = f.reportingStart;
      }
      if (f.reportingEnd && f.reportingEnd !== 'N/A') {
        if (!latest || f.reportingEnd > latest) latest = f.reportingEnd;
      }
    });

    return {
      earliest: earliest || 'N/A',
      latest: latest || 'N/A',
    };
  }, [files]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs">
          <span className="text-[11px] font-medium text-[#64748b] uppercase tracking-wider block mb-1">
            Persisted Files
          </span>
          <span className="text-xl font-bold text-[#0f172a]">{files.length}</span>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs">
          <span className="text-[11px] font-medium text-[#64748b] uppercase tracking-wider block mb-1">
            Persisted Rows
          </span>
          <span className="text-xl font-bold text-[#0f172a]">{formatNum(totalRows)}</span>
          <span className="text-[10px] text-emerald-600 block mt-0.5">({duplicateCount} duplicates purged)</span>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs">
          <span className="text-[11px] font-medium text-[#64748b] uppercase tracking-wider block mb-1">
            Earliest Reporting
          </span>
          <span className="text-sm font-semibold text-[#0f172a] font-mono">{datasetSummary.earliest}</span>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs">
          <span className="text-[11px] font-medium text-[#64748b] uppercase tracking-wider block mb-1">
            Latest Reporting
          </span>
          <span className="text-sm font-semibold text-[#0f172a] font-mono">{datasetSummary.latest}</span>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs">
          <span className="text-[11px] font-medium text-[#64748b] uppercase tracking-wider block mb-1">
            Storage Engine
          </span>
          <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5 mt-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Storage Active
          </span>
        </div>
      </div>

      <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold text-[#0f172a]">Persistent File Registry & Historical Months</h2>
            <p className="text-xs text-[#64748b]">
              Awareness and Traffic CSV files uploaded here persist across browser refreshes and sessions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onTriggerUpload}
              className="inline-flex items-center gap-1.5 bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-medium px-3.5 py-2 rounded-xl transition-colors shadow-xs"
            >
              <UploadCloud className="w-3.5 h-3.5" />
              Upload Additional CSV
            </button>

            <button
              onClick={onReprocess}
              disabled={dbLoading}
              className="inline-flex items-center gap-1.5 bg-white hover:bg-[#f1f5f9] text-[#334155] border border-[#cbd5e1] text-xs font-medium px-3 py-2 rounded-xl transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${dbLoading ? 'animate-spin' : ''}`} />
              Reprocess Data
            </button>

            <button
              onClick={onResetToSample}
              className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-[#0f172a] text-xs font-medium px-3 py-2 rounded-xl transition-colors"
            >
              Reload Sample Data
            </button>

            <button
              onClick={onInitiateClearAll}
              className="inline-flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-medium px-3 py-2 rounded-xl transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear All Stored Data
            </button>
          </div>
        </div>

        <div className="mt-5 border border-[#e2e8f0] rounded-xl overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f8f9fa] text-[#64748b] border-b border-[#e2e8f0]">
              <tr>
                <th className="py-3 px-4 font-semibold">Filename</th>
                <th className="py-3 px-4 font-semibold">Derived Month</th>
                <th className="py-3 px-4 font-semibold">Date Range</th>
                <th className="py-3 px-4 font-semibold">Row Count</th>
                <th className="py-3 px-4 font-semibold">Imported Timestamp</th>
                <th className="py-3 px-4 font-semibold text-right">Remove File</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f5f9]">
              {files.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-[#94a3b8]">
                    No files found in storage. Upload a Meta CSV to begin.
                  </td>
                </tr>
              ) : (
                files.map((file) => (
                  <tr key={file.id} className="hover:bg-[#fbfbfb] transition-colors">
                    <td className="py-3 px-4 font-medium text-[#0f172a] flex items-center gap-2">
                      <FileSpreadsheet className="w-4 h-4 text-[#64748b]" />
                      <div>
                        <span>{file.fileName}</span>
                        <div className="text-[10px] text-[#94a3b8] font-mono">{file.fileHash?.slice(0, 24)}...</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-mono text-[#334155]">{file.monthStr}</td>
                    <td className="py-3 px-4 text-[#64748b]">
                      {file.reportingStart} → {file.reportingEnd}
                    </td>
                    <td className="py-3 px-4 font-semibold text-[#0f172a]">{file.rowCount} rows</td>
                    <td className="py-3 px-4 text-[#64748b]">{file.importedAt}</td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => onInitiateRemoveFile(file)}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-rose-600 hover:text-rose-800 bg-rose-50/80 hover:bg-rose-100 px-2.5 py-1 rounded-lg transition-colors border border-rose-200"
                        title="Permanently remove file and cascade delete all its performance rows"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove File</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [files, setFiles] = useState([]);
  const [rawRows, setRawRows] = useState([]);
  const [dbLoading, setDbLoading] = useState(true);
  const [selectedCreativeForModal, setSelectedCreativeForModal] = useState(null);

  const [creativePreviews, setCreativePreviews] = useState([]);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [previewModalTarget, setPreviewModalTarget] = useState(null);

  // Global Brand Filter State initialized from URL query params
  const [selectedBrand, setSelectedBrand] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const b = params.get('brand');
      if (b && (b.toLowerCase() === 'ricochet' || b.toLowerCase() === 'corsa')) {
        return b.charAt(0).toUpperCase() + b.slice(1).toLowerCase();
      }
    } catch (_) {}
    return 'ALL';
  });

  // Multi-Select Campaign State
  const [selectedCampaignIds, setSelectedCampaignIds] = useState([]);
  const [campaignSearchQuery, setCampaignSearchQuery] = useState('');
  const [isCampaignDropdownOpen, setIsCampaignDropdownOpen] = useState(false);
  const campaignDropdownRef = useRef(null);

  // Sync Brand to URL query params
  const updateBrandFilter = (brand) => {
    setSelectedBrand(brand);
    try {
      const url = new URL(window.location);
      if (brand === 'ALL') {
        url.searchParams.delete('brand');
      } else {
        url.searchParams.set('brand', brand.toLowerCase());
      }
      window.history.replaceState({}, '', url);
    } catch (_) {}
  };

  // Sorting
  const [sortField, setSortField] = useState('spend');
  const [sortDirection, setSortDirection] = useState('desc');

  // Deletion modals
  const [fileToDelete, setFileToDelete] = useState(null);
  const [showClearAllModal, setShowClearAllModal] = useState(false);
  const [systemAlert, setSystemAlert] = useState(null);

  const fileInputRef = useRef(null);

  const loadDatabaseData = useCallback(async () => {
    setDbLoading(true);
    try {
      const storedFiles = await dbGetAllFiles();
      const storedRows = await dbGetAllRows();
      const storedPreviews = await dbGetAllCreativePreviews();
      setCreativePreviews(storedPreviews);

      if (storedFiles.length === 0 && storedRows.length === 0) {
        const seed = generateSeedData();
        await dbSaveFileAndRows(seed.fileMeta, seed.rows);
        setFiles([seed.fileMeta]);
        setRawRows(seed.rows);
      } else {
        setFiles(storedFiles);
        setRawRows(storedRows);
      }
    } catch (err) {
      console.error('IndexedDB loading error:', err);
      const seed = generateSeedData();
      setFiles([seed.fileMeta]);
      setRawRows(seed.rows);
    } finally {
      setDbLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDatabaseData();
  }, [loadDatabaseData]);

  const creativePreviewsMap = useMemo(() => {
    const map = new Map();
    creativePreviews.forEach((p) => {
      map.set(p.libraryKey, p);
    });
    return map;
  }, [creativePreviews]);

  const handleSaveCreativePreview = async (previewObj) => {
    try {
      await dbSaveCreativePreview(previewObj);
      const updated = await dbGetAllCreativePreviews();
      setCreativePreviews(updated);
      setSystemAlert(`Saved preview mapping for "${previewObj.creative_name}".`);
    } catch (err) {
      console.error('Save preview error:', err);
      setSystemAlert('Error saving creative preview mapping.');
    }
  };

  const handleDeleteCreativePreview = async (libraryKey) => {
    try {
      await dbDeleteCreativePreview(libraryKey);
      const updated = await dbGetAllCreativePreviews();
      setCreativePreviews(updated);
      setSystemAlert('Removed creative preview mapping.');
    } catch (err) {
      console.error('Delete preview error:', err);
    }
  };

  const handleOpenPreviewModal = (creative) => {
    setPreviewModalTarget(creative);
    setIsPreviewModalOpen(true);
  };

  useEffect(() => {
    loadDatabaseData();
  }, [loadDatabaseData]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (campaignDropdownRef.current && !campaignDropdownRef.current.contains(e.target)) {
        setIsCampaignDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const { deduplicatedRows, duplicateCount } = useMemo(() => {
    const seen = new Set();
    let dupes = 0;
    const clean = [];

    rawRows.forEach((r) => {
      const key = `${r.adId || r.adName}_${r.reportingStart}`;
      if (seen.has(key)) {
        dupes++;
      } else {
        seen.add(key);
        // Ensure row has derived brand
        const rowWithBrand = {
          ...r,
          brand: r.brand || deriveBrand(r.campaignName),
        };
        clean.push(rowWithBrand);
      }
    });

    return { deduplicatedRows: clean, duplicateCount: dupes };
  }, [rawRows]);

  // Brand-Scoped Base Rows
  const brandScopedRows = useMemo(() => {
    if (selectedBrand === 'ALL') return deduplicatedRows;
    return deduplicatedRows.filter((r) => r.brand === selectedBrand);
  }, [deduplicatedRows, selectedBrand]);

  // Available campaigns derived from the selected Brand filter
  const availableCampaignsList = useMemo(() => {
    const map = new Map();
    brandScopedRows.forEach((r) => {
      if (!map.has(r.campaignId)) {
        map.set(r.campaignId, {
          id: r.campaignId,
          name: r.campaignName,
          brand: r.brand,
          objective: r.objective,
        });
      }
    });
    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [brandScopedRows]);

  // Automatically remove selected campaigns that do not belong to the newly selected brand
  useEffect(() => {
    if (selectedCampaignIds.length > 0) {
      const validIds = new Set(availableCampaignsList.map((c) => c.id));
      setSelectedCampaignIds((prev) => {
        const filtered = prev.filter((id) => validIds.has(id));
        return filtered.length === prev.length ? prev : filtered;
      });
    }
  }, [availableCampaignsList]);

  // Check if any "Unknown" brand rows exist in the dataset
  const hasUnknownBrandData = useMemo(() => {
    return deduplicatedRows.some((r) => r.brand === 'Unknown');
  }, [deduplicatedRows]);

  // Filtered rows applying both Brand and Campaign selections
  const filteredRows = useMemo(() => {
    let rows = brandScopedRows;
    if (selectedCampaignIds.length > 0) {
      const set = new Set(selectedCampaignIds);
      rows = rows.filter((r) => set.has(r.campaignId));
    }
    return rows;
  }, [brandScopedRows, selectedCampaignIds]);

  const computeAggregates = (rows) => {
    const totalSpend = rows.reduce((s, r) => s + (r.spend || 0), 0);
    const totalReach = rows.reduce((s, r) => s + (r.reach || 0), 0);
    const totalImpressions = rows.reduce((s, r) => s + (r.impressions || 0), 0);
    const totalClicks = rows.reduce((s, r) => s + (r.linkClicks || 0), 0);
    const igProfileVisits = rows.reduce((s, r) => s + (r.igProfileVisits || 0), 0);
    const igFollows = rows.reduce((s, r) => s + (r.igFollows || 0), 0);
    const thruPlays = rows.reduce((s, r) => s + (r.thruPlays || 0), 0);
    const landingPageViews = rows.reduce((s, r) => s + (r.landingPageViews || 0), 0);
    const postEngagements = rows.reduce((s, r) => s + (r.postEngagements || 0), 0);
    const postReactions = rows.reduce((s, r) => s + (r.postReactions || 0), 0);
    const postComments = rows.reduce((s, r) => s + (r.postComments || 0), 0);
    const postShares = rows.reduce((s, r) => s + (r.postShares || 0), 0);
    const postSaves = rows.reduce((s, r) => s + (r.postSaves || 0), 0);
    const video3sPlays = rows.reduce((s, r) => s + (r.video3sPlays || 0), 0);
    const videoPlays50 = rows.reduce((s, r) => s + (r.videoPlays50 || 0), 0);
    const videoPlays95 = rows.reduce((s, r) => s + (r.videoPlays95 || 0), 0);

    const cpm = totalImpressions > 0 ? (totalSpend / totalImpressions) * 1000 : 0;
    const cpc = totalClicks > 0 ? totalSpend / totalClicks : 0;
    const ctr = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
    const frequency = totalReach > 0 ? totalImpressions / totalReach : 1;
    const costPerVisit = igProfileVisits > 0 ? totalSpend / igProfileVisits : 0;
    const costPerLPV = landingPageViews > 0 ? totalSpend / landingPageViews : 0;
    const costPerEngagement = postEngagements > 0 ? totalSpend / postEngagements : 0;
    const costPerThruPlay = thruPlays > 0 ? totalSpend / thruPlays : 0;

    // Follower Metrics
    const costPerFollow = igFollows > 0 ? totalSpend / igFollows : null;
    const followConversionRate = igProfileVisits > 0 && igFollows > 0 ? (igFollows / igProfileVisits) * 100 : (igProfileVisits > 0 && igFollows === 0 ? 0 : null);

    return {
      totalSpend,
      totalReach,
      totalImpressions,
      totalClicks,
      igProfileVisits,
      igFollows,
      costPerFollow,
      followConversionRate,
      thruPlays,
      landingPageViews,
      postEngagements,
      postReactions,
      postComments,
      postShares,
      postSaves,
      video3sPlays,
      videoPlays50,
      videoPlays95,
      cpm,
      cpc,
      ctr,
      frequency,
      costPerVisit,
      costPerLPV,
      costPerEngagement,
      costPerThruPlay,
    };
  };

  const globalMetrics = useMemo(() => computeAggregates(filteredRows), [filteredRows]);

  // Separate overview aggregates for Brand Comparison (when Brand = All Brands)
  const ricochetOverview = useMemo(() => {
    if (selectedBrand !== 'ALL') return null;
    const rows = filteredRows.filter((r) => r.brand === 'Ricochet');
    const agg = computeAggregates(rows);
    const campaignCount = new Set(rows.map((r) => r.campaignId)).size;
    return { ...agg, campaignCount };
  }, [filteredRows, selectedBrand]);

  const corsaOverview = useMemo(() => {
    if (selectedBrand !== 'ALL') return null;
    const rows = filteredRows.filter((r) => r.brand === 'Corsa');
    const agg = computeAggregates(rows);
    const campaignCount = new Set(rows.map((r) => r.campaignId)).size;
    return { ...agg, campaignCount };
  }, [filteredRows, selectedBrand]);

  const awarenessMetrics = useMemo(() => {
    const rows = filteredRows.filter((r) => r.objective === 'AWARENESS');
    return computeAggregates(rows);
  }, [filteredRows]);

  const trafficMetrics = useMemo(() => {
    const rows = filteredRows.filter(
      (r) => r.objective === 'TRAFFIC_IG_VISIT' || r.objective === 'TRAFFIC_LPV'
    );
    return computeAggregates(rows);
  }, [filteredRows]);

  const followerMetrics = useMemo(() => {
    const rows = filteredRows.filter((r) => r.objective === 'FOLLOWER');
    return computeAggregates(rows);
  }, [filteredRows]);

  const objectiveMode = useMemo(() => {
    const hasFollower = filteredRows.some((r) => r.objective === 'FOLLOWER');
    const hasAwareness = filteredRows.some((r) => r.objective === 'AWARENESS');
    const hasTraffic = filteredRows.some(
      (r) => r.objective === 'TRAFFIC_IG_VISIT' || r.objective === 'TRAFFIC_LPV'
    );

    const activeCount = (hasFollower ? 1 : 0) + (hasAwareness ? 1 : 0) + (hasTraffic ? 1 : 0);
    if (activeCount > 1) return 'COMBINED';
    if (hasFollower) return 'FOLLOWER_ONLY';
    if (hasAwareness) return 'AWARENESS_ONLY';
    return 'TRAFFIC_ONLY';
  }, [filteredRows]);

  const campaignGrouped = useMemo(() => {
    const map = new Map();
    filteredRows.forEach((r) => {
      if (!map.has(r.campaignId)) {
        map.set(r.campaignId, {
          id: r.campaignId,
          name: r.campaignName,
          objective: r.objective,
          rows: [],
        });
      }
      map.get(r.campaignId).rows.push(r);
    });

    return Array.from(map.values()).map((g) => {
      const agg = computeAggregates(g.rows);
      const uniqueAdSets = new Set(g.rows.map((r) => r.adSetId)).size;
      const uniqueAds = new Set(g.rows.map((r) => r.adId)).size;
      const brand = g.rows[0]?.brand || deriveBrand(g.name);

      let primaryResultLabel = 'Reach';
      let primaryResultValue = agg.totalReach;
      let costPerPrimaryResult = agg.cpm;

      if (g.objective === 'FOLLOWER') {
        primaryResultLabel = 'Followers Gained';
        primaryResultValue = agg.igFollows;
        costPerPrimaryResult = agg.costPerFollow;
      } else if (g.objective === 'TRAFFIC_IG_VISIT') {
        primaryResultLabel = 'Instagram Profile Visits';
        primaryResultValue = agg.igProfileVisits;
        costPerPrimaryResult = agg.costPerVisit;
      } else if (g.objective === 'TRAFFIC_LPV') {
        primaryResultLabel = 'Landing Page Views';
        primaryResultValue = agg.landingPageViews;
        costPerPrimaryResult = agg.costPerLPV;
      } else if (g.objective === 'ENGAGEMENT') {
        primaryResultLabel = 'Post Engagements';
        primaryResultValue = agg.postEngagements;
        costPerPrimaryResult = agg.costPerEngagement;
      } else if (g.objective === 'VIDEO') {
        primaryResultLabel = 'ThruPlays';
        primaryResultValue = agg.thruPlays;
        costPerPrimaryResult = agg.costPerThruPlay;
      }

      return {
        id: g.id,
        name: g.name,
        brand,
        objective: g.objective,
        adSetCount: uniqueAdSets,
        adCount: uniqueAds,
        primaryResultLabel,
        primaryResultValue,
        costPerPrimaryResult,
        spend: agg.totalSpend,
        reach: agg.totalReach,
        impressions: agg.totalImpressions,
        cpm: agg.cpm,
        igFollows: agg.igFollows,
        costPerFollow: agg.costPerFollow,
        followConversionRate: agg.followConversionRate,
        igProfileVisits: agg.igProfileVisits,
        linkClicks: agg.totalClicks,
        ctr: agg.ctr,
        cpc: agg.cpc,
        frequency: agg.frequency,
        costPerVisit: agg.costPerVisit,
        landingPageViews: agg.landingPageViews,
        costPerLPV: agg.costPerLPV,
        postEngagements: agg.postEngagements,
        costPerEngagement: agg.costPerEngagement,
        postReactions: agg.postReactions,
        postComments: agg.postComments,
        postShares: agg.postShares,
        postSaves: agg.postSaves,
        thruPlays: agg.thruPlays,
        costPerThruPlay: agg.costPerThruPlay,
        video3sPlays: agg.video3sPlays,
        videoPlays50: agg.videoPlays50,
        videoPlays95: agg.videoPlays95,
      };
    });
  }, [filteredRows]);

  const targetGrouped = useMemo(() => {
    const map = new Map();
    filteredRows.forEach((r) => {
      if (!map.has(r.adSetId)) {
        map.set(r.adSetId, {
          id: r.adSetId,
          name: r.adSetName,
          campaignName: r.campaignName,
          rows: [],
        });
      }
      map.get(r.adSetId).rows.push(r);
    });

    return Array.from(map.values()).map((g) => {
      const agg = computeAggregates(g.rows);
      const brand = g.rows[0]?.brand || deriveBrand(g.campaignName);
      return {
        id: g.id,
        name: g.name,
        brand,
        campaignName: g.campaignName,
        spend: agg.totalSpend,
        reach: agg.totalReach,
        impressions: agg.totalImpressions,
        cpm: agg.cpm,
        igFollows: agg.igFollows,
        costPerFollow: agg.costPerFollow,
        followConversionRate: agg.followConversionRate,
        igProfileVisits: agg.igProfileVisits,
        linkClicks: agg.totalClicks,
        ctr: agg.ctr,
        cpc: agg.cpc,
        frequency: agg.frequency,
      };
    });
  }, [filteredRows]);

  const creativeGrouped = useMemo(() => {
    // Group by Brand + Objective + Ad Name so creatives never mix mismatched templates
    const map = new Map();

    filteredRows.forEach((r) => {
      const creativeName = r.adName || 'Unnamed Creative';
      const brand = r.brand || deriveBrand(r.campaignName);
      const objective = r.objective || 'AWARENESS';
      const groupKey = `${brand}:::${objective}:::${creativeName.toLowerCase().trim()}`;

      if (!map.has(groupKey)) {
        map.set(groupKey, {
          id: groupKey,
          name: creativeName,
          brand,
          objective,
          rows: [],
          targetMap: new Map(),
        });
      }

      const group = map.get(groupKey);
      group.rows.push(r);

      // Track sub-aggregation for Target / Ad Set breakdown
      const adSetName = r.adSetName || 'Unnamed Target';
      const adSetKey = r.adSetId || adSetName;

      if (!group.targetMap.has(adSetKey)) {
        group.targetMap.set(adSetKey, {
          adSetId: adSetKey,
          adSetName: adSetName,
          campaignName: r.campaignName,
          rows: [],
        });
      }
      group.targetMap.get(adSetKey).rows.push(r);
    });

    return Array.from(map.values()).map((g) => {
      // Recompute strict non-averaged ratios from total sums
      const agg = computeAggregates(g.rows);

      // Construct Target / Ad Set sub-breakdown list
      const targetBreakdown = Array.from(g.targetMap.values()).map((t) => {
        const targetAgg = computeAggregates(t.rows);
        return {
          adSetId: t.adSetId,
          adSetName: t.adSetName,
          campaignName: t.campaignName,
          spend: targetAgg.totalSpend,
          reach: targetAgg.totalReach,
          impressions: targetAgg.totalImpressions,
          igFollows: targetAgg.igFollows,
          costPerFollow: targetAgg.costPerFollow,
          igProfileVisits: targetAgg.igProfileVisits,
          followConversionRate: targetAgg.followConversionRate,
          linkClicks: targetAgg.totalClicks,
          ctr: targetAgg.ctr,
          cpc: targetAgg.cpc,
          cpm: targetAgg.cpm,
        };
      }).sort((a, b) => b.spend - a.spend);

      const uniqueAdSets = new Set(g.rows.map((r) => r.adSetName || r.adSetId));
      const adSetNamesList = Array.from(uniqueAdSets);

      // Collect all unique Ad IDs associated with this creative
      const associatedAdIds = Array.from(new Set(g.rows.map((r) => r.adId).filter(Boolean)));

      // Retrieve mapped preview if configured (lookup by Brand + Creative Name)
      const previewKey = `${g.brand}:::${g.name.toLowerCase().trim()}`;
      const preview = creativePreviewsMap.get(previewKey) || creativePreviewsMap.get(g.id) || null;

      return {
        id: g.id,
        name: g.name,
        brand: g.brand,
        objective: g.objective,
        targetCount: uniqueAdSets.size,
        adSetNamesList,
        associatedAdIds,
        preview,
        targetBreakdown,
        spend: agg.totalSpend,
        reach: agg.totalReach,
        impressions: agg.totalImpressions,
        cpm: agg.cpm,
        cpc: agg.cpc,
        igFollows: agg.igFollows,
        costPerFollow: agg.costPerFollow,
        followConversionRate: agg.followConversionRate,
        igProfileVisits: agg.igProfileVisits,
        costPerVisit: agg.costPerVisit,
        landingPageViews: agg.landingPageViews,
        costPerLPV: agg.costPerLPV,
        postEngagements: agg.postEngagements,
        costPerEngagement: agg.costPerEngagement,
        postReactions: agg.postReactions,
        postComments: agg.postComments,
        postShares: agg.postShares,
        thruPlays: agg.thruPlays,
        costPerThruPlay: agg.costPerThruPlay,
        video3sPlays: agg.video3sPlays,
        videoPlays95: agg.videoPlays95,
        linkClicks: agg.totalClicks,
        ctr: agg.ctr,
        frequency: agg.frequency,
        rows: g.rows,
      };
    });
  }, [filteredRows, creativePreviewsMap]);

  const timeSeriesData = useMemo(() => {
    const map = new Map();
    filteredRows.forEach((r) => {
      const date = r.reportingStart || '2026-09-01';
      if (!map.has(date)) {
        map.set(date, { date, rows: [] });
      }
      map.get(date).rows.push(r);
    });

    return Array.from(map.values())
      .sort((a, b) => a.date.localeCompare(b.date))
      .map((g) => {
        const agg = computeAggregates(g.rows);
        return {
          date: g.date,
          spend: agg.totalSpend,
          reach: agg.totalReach,
          igProfileVisits: agg.igProfileVisits,
          igFollows: agg.igFollows,
          costPerFollow: agg.costPerFollow,
          followConversionRate: agg.followConversionRate,
          impressions: agg.totalImpressions,
          cpm: agg.cpm,
        };
      });
  }, [filteredRows]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortItems = (items) => {
    return [...items].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      if (typeof aVal === 'string') {
        return sortDirection === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      return sortDirection === 'asc' ? (aVal || 0) - (bVal || 0) : (bVal || 0) - (aVal || 0);
    });
  };

  const toggleCampaignSelection = (id) => {
    setSelectedCampaignIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const selectAllCampaigns = () => {
    setSelectedCampaignIds([]);
  };

  const clearAllCampaigns = () => {
    if (availableCampaignsList.length > 0) {
      setSelectedCampaignIds([availableCampaignsList[0].id]);
    }
  };

  const handleFileUpload = async (event) => {
    const uploadedFiles = event.target.files;
    if (!uploadedFiles || uploadedFiles.length === 0) return;

    setDbLoading(true);
    let addedCount = 0;
    let duplicateFileNotice = null;

    try {
      for (let i = 0; i < uploadedFiles.length; i++) {
        const file = uploadedFiles[i];
        const content = await file.text();
        const fileHash = computeFileHash(file.name, content);

        const isDuplicate = files.some((f) => f.fileHash === fileHash || f.fileName === file.name);
        if (isDuplicate) {
          duplicateFileNotice = `"${file.name}" has already been imported and was skipped.`;
          continue;
        }

        const fileId = `file_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const parsedRows = parseCSVToRows(content, fileId);

        if (parsedRows.length === 0) continue;

        let earliestDate = parsedRows[0].reportingStart;
        let latestDate = parsedRows[0].reportingEnd;
        parsedRows.forEach((r) => {
          if (r.reportingStart && r.reportingStart < earliestDate) earliestDate = r.reportingStart;
          if (r.reportingEnd && r.reportingEnd > latestDate) latestDate = r.reportingEnd;
        });

        const monthStr = earliestDate ? earliestDate.slice(0, 7) : 'Unknown';

        const fileMeta = {
          id: fileId,
          fileName: file.name,
          fileHash,
          importedAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
          reportingStart: earliestDate,
          reportingEnd: latestDate,
          monthStr,
          rowCount: parsedRows.length,
          status: 'Ready',
        };

        await dbSaveFileAndRows(fileMeta, parsedRows);
        addedCount++;
      }

      if (duplicateFileNotice) {
        setSystemAlert(duplicateFileNotice);
      } else if (addedCount > 0) {
        setSystemAlert(`Successfully persisted ${addedCount} CSV file(s) into database.`);
      }

      await loadDatabaseData();
    } catch (err) {
      console.error('Upload error:', err);
      setSystemAlert('Error parsing and persisting CSV file.');
    } finally {
      setDbLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const confirmRemoveFile = async () => {
    if (!fileToDelete) return;
    setDbLoading(true);
    try {
      await dbDeleteFileAndCascadeRows(fileToDelete.id);
      await loadDatabaseData();
      setFileToDelete(null);
    } catch (err) {
      console.error('File removal error:', err);
    } finally {
      setDbLoading(false);
    }
  };

  const handleResetToSample = async () => {
    setDbLoading(true);
    try {
      await dbClearAll();
      const seed = generateSeedData();
      await dbSaveFileAndRows(seed.fileMeta, seed.rows);
      await loadDatabaseData();
      setSelectedCampaignIds([]);
    } catch (err) {
      console.error('Reset error:', err);
    } finally {
      setDbLoading(false);
    }
  };

  const confirmClearAll = async () => {
    setDbLoading(true);
    try {
      await dbClearAll();
      setFiles([]);
      setRawRows([]);
      setShowClearAllModal(false);
    } catch (err) {
      console.error('Clear all error:', err);
    } finally {
      setDbLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#0f172a] font-sans antialiased">
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv"
        multiple
        className="hidden"
        onChange={handleFileUpload}
      />

      <header className="sticky top-0 z-40 bg-white border-b border-[#e2e8f0] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0f172a] flex items-center justify-center text-white font-bold text-sm tracking-widest shadow-xs">
                RC
              </div>
              <div>
                <h1 className="text-sm sm:text-base font-bold text-[#0f172a] tracking-tight">
                  Ricochet and Corsa Ads Performance
                </h1>
                <p className="text-[11px] text-[#64748b]">Awareness, Traffic & Follower Growth Dashboard</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-medium px-3 py-2 rounded-xl transition-colors shadow-xs"
              >
                <UploadCloud className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Upload Meta CSV</span>
              </button>

              <button
                onClick={loadDatabaseData}
                disabled={dbLoading}
                className="p-2 text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] rounded-xl transition-colors"
                title="Refresh from Persistent Storage"
              >
                <RefreshCw className={`w-4 h-4 ${dbLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto gap-1 border-t border-[#f1f5f9]">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'campaigns', label: 'Campaign Performance', icon: Layers },
            { id: 'targets', label: 'Target Performance', icon: Target },
            { id: 'creatives', label: 'Creative Performance', icon: Eye },
            { id: 'trends', label: 'Trends', icon: TrendingUp },
            { id: 'data', label: 'Data Management', icon: Database, badge: files.length },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-3 px-3.5 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
                  active
                    ? 'border-[#0f172a] text-[#0f172a] font-semibold'
                    : 'border-transparent text-[#64748b] hover:text-[#0f172a] hover:border-[#cbd5e1]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {tab.badge !== undefined && (
                  <span className="text-[10px] bg-[#f1f5f9] text-[#64748b] px-1.5 py-0.5 rounded-full font-mono">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </header>

      {systemAlert && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="bg-slate-900 text-white text-xs px-4 py-3 rounded-xl flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{systemAlert}</span>
            </div>
            <button onClick={() => setSystemAlert(null)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Global Filter Bar: Brand Filter first, followed by dependent Campaign multi-select */}
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-xs space-y-3">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            
            {/* Global Brand Selector */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#0f172a] uppercase tracking-wider">Brand:</span>
              <div className="inline-flex rounded-xl bg-[#f1f5f9] p-1 border border-[#e2e8f0]">
                {[
                  { id: 'ALL', label: 'All Brands' },
                  { id: 'Ricochet', label: 'Ricochet' },
                  { id: 'Corsa', label: 'Corsa' },
                  ...(hasUnknownBrandData ? [{ id: 'Unknown', label: 'Unknown' }] : []),
                ].map((b) => {
                  const active = selectedBrand === b.id;
                  return (
                    <button
                      key={b.id}
                      onClick={() => updateBrandFilter(b.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        active
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'text-[#64748b] hover:text-[#0f172a]'
                      }`}
                    >
                      {b.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Campaign Multi-Select Dropdown */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#64748b]" />
                <span className="text-xs font-semibold text-[#0f172a]">Campaigns:</span>
                <span className="text-xs text-[#64748b]">
                  {selectedCampaignIds.length === 0
                    ? `All (${availableCampaignsList.length})`
                    : `${selectedCampaignIds.length} of ${availableCampaignsList.length}`}
                </span>
              </div>

              <div className="relative w-full md:w-auto" ref={campaignDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsCampaignDropdownOpen(!isCampaignDropdownOpen)}
                  className="w-full md:w-72 bg-white border border-[#cbd5e1] hover:border-[#94a3b8] px-3 py-1.5 rounded-xl text-xs flex items-center justify-between transition-colors shadow-2xs"
                >
                  <div className="truncate text-left font-medium text-[#0f172a]">
                    {selectedCampaignIds.length === 0
                      ? `All ${selectedBrand !== 'ALL' ? selectedBrand : ''} Campaigns`
                      : selectedCampaignIds.length === 1
                      ? availableCampaignsList.find((c) => c.id === selectedCampaignIds[0])?.name
                      : `${selectedCampaignIds.length} Campaigns Selected`}
                  </div>
                  <ChevronDown className="w-4 h-4 text-[#64748b] shrink-0 ml-2" />
                </button>

                {isCampaignDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-full md:w-96 bg-white border border-[#e2e8f0] rounded-xl shadow-xl z-50 p-3 space-y-2">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#94a3b8]" />
                      <input
                        type="text"
                        placeholder="Search campaigns..."
                        value={campaignSearchQuery}
                        onChange={(e) => setCampaignSearchQuery(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#f8f9fa] border border-[#e2e8f0] rounded-lg focus:outline-none focus:border-[#0f172a]"
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] px-1 py-1 border-b border-[#f1f5f9]">
                      <button
                        type="button"
                        onClick={selectAllCampaigns}
                        className="text-[#0f172a] hover:underline font-semibold"
                      >
                        Select All
                      </button>
                      <button
                        type="button"
                        onClick={clearAllCampaigns}
                        className="text-[#64748b] hover:text-[#0f172a]"
                      >
                        Reset Selection
                      </button>
                    </div>

                    <div className="max-h-56 overflow-y-auto space-y-1">
                      {availableCampaignsList.length === 0 ? (
                        <div className="text-center py-4 text-xs text-[#94a3b8]">
                          No campaigns found for {selectedBrand}
                        </div>
                      ) : (
                        availableCampaignsList
                          .filter((c) => c.name.toLowerCase().includes(campaignSearchQuery.toLowerCase()))
                          .map((c) => {
                            const isChecked =
                              selectedCampaignIds.length === 0 || selectedCampaignIds.includes(c.id);
                            return (
                              <div
                                key={c.id}
                                onClick={() => toggleCampaignSelection(c.id)}
                                className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-[#f8f9fa] cursor-pointer text-xs"
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  readOnly
                                  className="rounded border-[#cbd5e1] text-[#0f172a] focus:ring-0"
                                />
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <BrandBadge brand={c.brand} />
                                    <div className="font-medium text-[#0f172a] truncate">{c.name}</div>
                                  </div>
                                  <div className="text-[10px] text-[#94a3b8] font-mono">{c.id}</div>
                                </div>
                                <span
                                  className={`text-[9px] px-1.5 py-0.5 rounded font-semibold uppercase ${
                                    c.objective === 'FOLLOWER'
                                      ? 'bg-purple-50 text-purple-700'
                                      : c.objective === 'AWARENESS'
                                      ? 'bg-blue-50 text-blue-700'
                                      : c.objective === 'TRAFFIC_IG_VISIT'
                                      ? 'bg-emerald-50 text-emerald-700'
                                      : c.objective === 'TRAFFIC_LPV'
                                      ? 'bg-cyan-50 text-cyan-700'
                                      : c.objective === 'ENGAGEMENT'
                                      ? 'bg-amber-50 text-amber-700'
                                      : 'bg-indigo-50 text-indigo-700'
                                  }`}
                                >
                                  {c.objective === 'FOLLOWER' ? 'Followers' : c.objective.replace(/_/g, ' ')}
                                </span>
                              </div>
                            );
                          })
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Active Campaign Filter Chips */}
          {selectedCampaignIds.length > 0 && (
            <div className="pt-2 border-t border-[#f1f5f9] flex flex-wrap gap-1.5 items-center">
              <span className="text-[11px] text-[#64748b]">Active Campaign Filters:</span>
              {selectedCampaignIds.map((id) => {
                const camp = availableCampaignsList.find((c) => c.id === id);
                if (!camp) return null;
                return (
                  <span
                    key={id}
                    className="inline-flex items-center gap-1 bg-[#f1f5f9] text-[#0f172a] text-[11px] font-medium px-2 py-0.5 rounded-md border border-[#e2e8f0]"
                  >
                    <BrandBadge brand={camp.brand} />
                    <span className="truncate max-w-[180px]">{camp.name}</span>
                    <button
                      onClick={() => toggleCampaignSelection(id)}
                      className="hover:text-rose-600 ml-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                );
              })}
              <button
                onClick={selectAllCampaigns}
                className="text-[11px] text-[#64748b] hover:text-[#0f172a] underline ml-2"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {activeTab === 'overview' && (
          <OverviewPage
            objectiveMode={objectiveMode}
            selectedBrand={selectedBrand}
            globalMetrics={globalMetrics}
            awarenessMetrics={awarenessMetrics}
            trafficMetrics={trafficMetrics}
            followerMetrics={followerMetrics}
            ricochetOverview={ricochetOverview}
            corsaOverview={corsaOverview}
            campaignGrouped={campaignGrouped}
            timeSeriesData={timeSeriesData}
            onNavigate={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'campaigns' && (
          <CampaignPerformancePage campaigns={campaignGrouped} />
        )}

        {activeTab === 'targets' && (
          <TargetPerformancePage
            targets={targetGrouped}
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={handleSort}
            sortItems={sortItems}
          />
        )}

        {activeTab === 'creatives' && (
          <CreativePerformancePage
            creatives={creativeGrouped}
            onSelectCreative={(cr) => setSelectedCreativeForModal(cr)}
            onOpenPreviewModal={handleOpenPreviewModal}
          />
        )}

        {activeTab === 'trends' && (
          <TrendsPage timeSeriesData={timeSeriesData} />
        )}

        {activeTab === 'data' && (
          <DataManagementPage
            files={files}
            totalRows={rawRows.length}
            duplicateCount={duplicateCount}
            onInitiateRemoveFile={(f) => setFileToDelete(f)}
            onResetToSample={handleResetToSample}
            onInitiateClearAll={() => setShowClearAllModal(true)}
            onTriggerUpload={() => fileInputRef.current?.click()}
            onReprocess={loadDatabaseData}
            dbLoading={dbLoading}
          />
        )}
      </main>

      {/* CREATIVE DETAIL MODAL */}
      {selectedCreativeForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl p-6 max-w-3xl w-full shadow-2xl space-y-5 border border-[#e2e8f0] my-8 max-h-[90vh] flex flex-col">
            <div className="flex items-start justify-between gap-3 border-b border-[#f1f5f9] pb-3 shrink-0">
              <div>
                <div className="flex items-center gap-2">
                  <BrandBadge brand={selectedCreativeForModal.brand} />
                  <h3 className="font-bold text-base sm:text-lg text-[#0f172a]">{selectedCreativeForModal.name}</h3>
                </div>
                <div className="text-[11px] text-[#64748b] mt-0.5">
                  Aggregated across <strong className="text-[#0f172a]">{selectedCreativeForModal.targetCount} Target Audiences</strong>
                </div>
              </div>
              <button
                onClick={() => setSelectedCreativeForModal(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 text-xs overflow-y-auto pr-1">
              {/* Creative Preview Banner & Metadata Bar */}
              <div className="bg-[#f8f9fa] border border-[#e2e8f0] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {selectedCreativeForModal.preview?.thumbnail_url ? (
                    <img
                      src={selectedCreativeForModal.preview.thumbnail_url}
                      alt={selectedCreativeForModal.name}
                      className="w-16 h-16 rounded-xl object-cover border border-[#e2e8f0] shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-slate-200 border border-[#cbd5e1] flex items-center justify-center text-slate-500 shrink-0">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-bold text-sm text-[#0f172a]">
                        {selectedCreativeForModal.preview?.creative_source || 'Standard Creative'}
                      </span>
                      {selectedCreativeForModal.preview?.preview_url && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                          Meta Preview Connected
                        </span>
                      )}
                    </div>
                    {selectedCreativeForModal.preview?.notes && (
                      <p className="text-[11px] text-[#64748b] mt-1 max-w-md italic">
                        "{selectedCreativeForModal.preview.notes}"
                      </p>
                    )}
                    {/* Associated Ad IDs */}
                    <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-[#94a3b8]">
                      <span>Associated Ad IDs ({selectedCreativeForModal.associatedAdIds?.length || 0}):</span>
                      <span className="font-mono text-slate-700 truncate max-w-xs">
                        {selectedCreativeForModal.associatedAdIds?.join(', ') || 'None'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {selectedCreativeForModal.preview?.preview_url && (
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          selectedCreativeForModal.preview.preview_url,
                          '_blank',
                          'noopener,noreferrer'
                        )
                      }
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Ad Preview</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      handleOpenPreviewModal(selectedCreativeForModal);
                    }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-[#cbd5e1] font-semibold text-xs transition-colors"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span>{selectedCreativeForModal.preview ? 'Edit Preview' : '+ Add Preview'}</span>
                  </button>
                </div>
              </div>

              {/* Overall Aggregated Performance Section */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider block">
                  Overall Creative Performance
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-[#f8f9fa] p-3 rounded-xl border border-[#e2e8f0]">
                    <span className="text-[10px] text-[#64748b] block">Total Spend</span>
                    <strong className="text-base text-[#0f172a] font-mono">{formatTHB(selectedCreativeForModal.spend)}</strong>
                  </div>

                  <div className="bg-purple-50/50 p-3 rounded-xl border border-purple-100">
                    <span className="text-[10px] text-purple-700 font-medium block">Followers Gained</span>
                    <strong className="text-base text-purple-700 font-mono">
                      {selectedCreativeForModal.igFollows > 0 ? `+${formatNum(selectedCreativeForModal.igFollows)}` : '0'}
                    </strong>
                  </div>

                  <div className="bg-[#f8f9fa] p-3 rounded-xl border border-[#e2e8f0]">
                    <span className="text-[10px] text-[#64748b] block">Cost / Follow</span>
                    <strong className="text-base text-[#0f172a] font-mono">
                      {selectedCreativeForModal.costPerFollow ? formatTHB(selectedCreativeForModal.costPerFollow, 2) : '—'}
                    </strong>
                  </div>

                  <div className="bg-[#f8f9fa] p-3 rounded-xl border border-[#e2e8f0]">
                    <span className="text-[10px] text-[#64748b] block">Profile Visits</span>
                    <strong className="text-base text-[#0f172a] font-mono">{formatNum(selectedCreativeForModal.igProfileVisits)}</strong>
                  </div>

                  <div className="bg-[#f8f9fa] p-3 rounded-xl border border-[#e2e8f0]">
                    <span className="text-[10px] text-[#64748b] block">Visit → Follow Rate</span>
                    <strong className="text-base text-[#0f172a] font-mono">
                      {selectedCreativeForModal.followConversionRate !== null ? formatPercent(selectedCreativeForModal.followConversionRate) : '—'}
                    </strong>
                  </div>

                  <div className="bg-[#f8f9fa] p-3 rounded-xl border border-[#e2e8f0]">
                    <span className="text-[10px] text-[#64748b] block">CTR</span>
                    <strong className="text-base text-[#0f172a] font-mono">{formatPercent(selectedCreativeForModal.ctr)}</strong>
                  </div>

                  <div className="bg-[#f8f9fa] p-3 rounded-xl border border-[#e2e8f0]">
                    <span className="text-[10px] text-[#64748b] block">Reach</span>
                    <strong className="text-base text-[#0f172a] font-mono">{formatNum(selectedCreativeForModal.reach)}</strong>
                  </div>

                  <div className="bg-[#f8f9fa] p-3 rounded-xl border border-[#e2e8f0]">
                    <span className="text-[10px] text-[#64748b] block">CPM</span>
                    <strong className="text-base text-[#0f172a] font-mono">{formatTHB(selectedCreativeForModal.cpm, 2)}</strong>
                  </div>
                </div>
              </div>

              {/* Performance by Target / Ad Set Breakdown */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-[#0f172a] uppercase tracking-wider flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-[#64748b]" />
                    <span>Performance by Target / Ad Set</span>
                  </h4>
                  <span className="text-[11px] text-[#64748b]">
                    {selectedCreativeForModal.targetBreakdown?.length || 0} Ad Sets analyzed
                  </span>
                </div>

                <div className="border border-[#e2e8f0] rounded-xl overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#f8f9fa] text-[#64748b] border-b border-[#e2e8f0]">
                      <tr>
                        <th className="py-2.5 px-3 font-semibold">Target / Ad Set Name</th>
                        <th className="py-2.5 px-3 font-semibold">Spend</th>
                        <th className="py-2.5 px-3 font-semibold">Followers Gained</th>
                        <th className="py-2.5 px-3 font-semibold">Cost / Follow</th>
                        <th className="py-2.5 px-3 font-semibold">Profile Visits</th>
                        <th className="py-2.5 px-3 font-semibold">CTR</th>
                        <th className="py-2.5 px-3 font-semibold">Reach</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f1f5f9]">
                      {selectedCreativeForModal.targetBreakdown?.map((tgt, i) => (
                        <tr key={i} className="hover:bg-[#fbfbfb] transition-colors">
                          <td className="py-3 px-3 font-medium text-[#0f172a] max-w-[200px]">
                            <div className="font-semibold line-clamp-1">{tgt.adSetName}</div>
                            <div className="text-[10px] text-[#94a3b8] line-clamp-1">{tgt.campaignName}</div>
                          </td>
                          <td className="py-3 px-3 font-semibold text-[#0f172a] font-mono">{formatTHB(tgt.spend)}</td>
                          <td className="py-3 px-3 font-semibold text-purple-700 font-mono">
                            {tgt.igFollows > 0 ? `+${formatNum(tgt.igFollows)}` : '—'}
                          </td>
                          <td className="py-3 px-3 text-[#334155] font-mono">
                            {tgt.costPerFollow ? formatTHB(tgt.costPerFollow, 2) : '—'}
                          </td>
                          <td className="py-3 px-3 text-[#334155] font-mono">{tgt.igProfileVisits ? formatNum(tgt.igProfileVisits) : '—'}</td>
                          <td className="py-3 px-3 text-[#334155] font-semibold font-mono">{formatPercent(tgt.ctr)}</td>
                          <td className="py-3 px-3 text-[#334155] font-mono">{formatNum(tgt.reach)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end pt-3 border-t border-[#f1f5f9] shrink-0">
              <button
                onClick={() => setSelectedCreativeForModal(null)}
                className="px-4 py-2 text-xs font-semibold bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-xl transition-colors shadow-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CREATIVE PREVIEW MANAGEMENT MODAL */}
      <CreativePreviewModal
        isOpen={isPreviewModalOpen}
        onClose={() => {
          setIsPreviewModalOpen(false);
          setPreviewModalTarget(null);
        }}
        initialCreative={previewModalTarget}
        allCreativesList={creativeGrouped}
        onSavePreview={handleSaveCreativePreview}
        onDeletePreview={handleDeleteCreativePreview}
      />

      {fileToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4 border border-[#e2e8f0]">
            <div className="flex items-center gap-3 text-rose-600">
              <div className="p-2 bg-rose-50 rounded-xl">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#0f172a]">Confirm File Removal</h3>
            </div>
            <p className="text-xs text-[#64748b] leading-relaxed">
              Are you sure you want to permanently remove{' '}
              <strong className="text-[#0f172a]">{fileToDelete.fileName}</strong>? All {fileToDelete.rowCount}{' '}
              performance rows originating from this file will be permanently purged from database storage.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setFileToDelete(null)}
                className="px-3 py-2 text-xs font-medium text-[#64748b] hover:bg-[#f1f5f9] rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmRemoveFile}
                className="px-4 py-2 text-xs font-medium bg-rose-600 hover:bg-rose-700 text-white rounded-xl transition-colors shadow-xs"
              >
                Remove File & Rows
              </button>
            </div>
          </div>
        </div>
      )}

      {showClearAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4 border border-[#e2e8f0]">
            <div className="flex items-center gap-3 text-rose-600">
              <div className="p-2 bg-rose-50 rounded-xl">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-[#0f172a]">Clear All Stored Data</h3>
            </div>
            <p className="text-xs text-[#64748b] leading-relaxed">
              This will wipe all imported files and performance rows from IndexedDB. This action cannot be
              undone.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowClearAllModal(false)}
                className="px-3 py-2 text-xs font-medium text-[#64748b] hover:bg-[#f1f5f9] rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmClearAll}
                className="px-4 py-2 text-xs font-medium bg-rose-600 hover:bg-rose-700 text-white rounded-xl transition-colors shadow-xs"
              >
                Clear Entire Database
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}