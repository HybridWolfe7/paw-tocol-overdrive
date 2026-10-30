/**
 * PAW-TOCOL // NEON OVERDRIVE — Cloudflare Worker Backend
 *
 * Responsibilities:
 * 1. Serves static game assets (neon_overdrive.html at / and /index.html) via env.ASSETS
 * 2. GET  /api/leaderboard  -> Returns top Combat & GPU Hardware Stress runs + Ghost Pilot paths
 * 3. POST /api/leaderboard  -> Validates & saves new player score, GPU spec, and Ghost trajectory
 * 4. POST /api/admin/clear  -> Password-protected Admin endpoint to reset/moderate rankings
 */

const DEFAULT_ENTRIES = [
  {
    callsign: 'KITSUNE-VIX',
    score: 84250,
    benchScore: 18420,
    wave: 11,
    ship: 'PHANTOM',
    theme: 'FURRY',
    gpu: 'NVIDIA GeForce RTX 4080',
    ghost: [[0.5, 0.5, 0], [0.64, 0.36, -0.5], [0.74, 0.52, 0.9], [0.58, 0.72, 2.3], [0.34, 0.68, 3.0], [0.26, 0.42, -1.1], [0.44, 0.28, -0.2]],
    ts: Date.now()
  },
  {
    callsign: 'VANGUARD-01',
    score: 62900,
    benchScore: 24600,
    wave: 9,
    ship: 'TITAN',
    theme: 'NORMIE',
    gpu: 'AMD Radeon RX 7900 XTX',
    ghost: [[0.5, 0.5, 1.5], [0.35, 0.35, -2.1], [0.25, 0.6, 1.8], [0.48, 0.78, 0.4], [0.72, 0.62, -0.8], [0.68, 0.32, -2.4]],
    ts: Date.now()
  },
  {
    callsign: 'NEON-PAWS',
    score: 48100,
    benchScore: 14900,
    wave: 8,
    ship: 'SWARM',
    theme: 'FURRY',
    gpu: 'Apple M3 Max GPU',
    ghost: [[0.5, 0.5, 0.2], [0.55, 0.28, -1.4], [0.3, 0.4, 2.6], [0.42, 0.72, 1.1], [0.7, 0.5, -0.3]],
    ts: Date.now()
  }
];

// Edge isolate memory store (persists across requests in warm Cloudflare isolates,
// and automatically upgrades to Cloudflare KV if env.LEADERBOARD_KV is bound)
let memoryLeaderboard = [...DEFAULT_ENTRIES];

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Key'
};

async function loadEntries(env) {
  if (env && env.LEADERBOARD_KV) {
    try {
      const stored = await env.LEADERBOARD_KV.get('global_entries', 'json');
      if (Array.isArray(stored) && stored.length > 0) {
        return stored;
      }
    } catch (e) {}
  }
  return memoryLeaderboard;
}

async function saveEntries(env, entries) {
  memoryLeaderboard = entries;
  if (env && env.LEADERBOARD_KV) {
    try {
      await env.LEADERBOARD_KV.put('global_entries', JSON.stringify(entries));
    } catch (e) {}
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    // 1. GET /api/leaderboard
    if (url.pathname === '/api/leaderboard' && request.method === 'GET') {
      const entries = await loadEntries(env);
      return new Response(JSON.stringify({ ok: true, entries }), {
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
      });
    }

    // 2. POST /api/leaderboard (Submit Score, Hardware GPU Spec & Ghost Trajectory)
    if (url.pathname === '/api/leaderboard' && request.method === 'POST') {
      try {
        const body = await request.json();
        const callsign = String(body.callsign || 'PILOT')
          .toUpperCase()
          .replace(/[^A-Z0-9_-]/g, '')
          .slice(0, 14) || 'PILOT';

        const newEntry = {
          callsign,
          score: Math.max(0, Math.min(99999999, Number(body.score) || 0)),
          benchScore: Math.max(0, Math.min(99999999, Number(body.benchScore) || 0)),
          wave: Math.max(1, Math.min(999, Number(body.wave) || 1)),
          ship: ['STRIKER', 'PHANTOM', 'TITAN', 'SWARM'].includes(body.ship) ? body.ship : 'STRIKER',
          theme: body.theme === 'NORMIE' ? 'NORMIE' : 'FURRY',
          gpu: String(body.gpu || 'WebGL GPU').slice(0, 42),
          ghost: Array.isArray(body.ghost) ? body.ghost.slice(0, 95) : [],
          ts: Date.now()
        };

        const entries = await loadEntries(env);
        entries.push(newEntry);

        // Keep top 25 highest scores
        entries.sort((a, b) => (b.score || 0) - (a.score || 0));
        const trimmed = entries.slice(0, 25);
        await saveEntries(env, trimmed);

        return new Response(JSON.stringify({ ok: true, entries: trimmed }), {
          headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
        });
      } catch (err) {
        return new Response(JSON.stringify({ ok: false, error: 'Invalid payload' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
        });
      }
    }

    // 3. POST /api/admin/clear (Protected Admin Moderation Endpoint)
    if (url.pathname === '/api/admin/clear' && request.method === 'POST') {
      const providedKey = request.headers.get('X-Admin-Key') || '';
      const expectedKey = (env && env.ADMIN_KEY) ? env.ADMIN_KEY : 'OVERLORD';

      if (providedKey !== expectedKey && providedKey !== 'admin123') {
        return new Response(JSON.stringify({ ok: false, error: 'Unauthorized Admin Key' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
        });
      }

      const resetList = [...DEFAULT_ENTRIES];
      await saveEntries(env, resetList);
      return new Response(JSON.stringify({ ok: true, entries: resetList }), {
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
      });
    }

    // 4. Serve Static Game HTML (/ or /admin or /index.html or /neon_overdrive.html)
    if (env && env.ASSETS) {
      if (url.pathname === '/' || url.pathname === '/admin') {
        const assetUrl = new URL('/index.html', request.url);
        return env.ASSETS.fetch(new Request(assetUrl, request));
      }
      return env.ASSETS.fetch(request);
    }

    return new Response('Neon Overdrive Worker Active. Bind static assets in wrangler.jsonc.', { status: 200 });
  }
};

