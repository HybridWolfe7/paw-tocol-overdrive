# 🐾🚀 PAW-TOCOL // NEON OVERDRIVE
**Cyber Arena Survival, Online Ghost Ranking & WebGL Hardware Stress Benchmark**

A zero-dependency HTML5 Canvas 2D arcade survival game, live hardware stress-tester, and Cloudflare Worker multiplayer ranking & ghost-replay experience.

---

## ✨ Key Features

- **🌐 Global Leaderboard & Live Holographic Ghost Pilots**:
  - Compete on two global leaderboards: **🏆 Top Combat Score** and **🔥 Top GPU Hardware Stress Benchmark**.
  - **👻 Live Ghost Pilots**: Your flight path is recorded during each run; top players' holographic ghost ships fly alongside you in real time in the arena!
  - Works seamlessly online via **Cloudflare Workers** (`/api/leaderboard`) and automatically falls back to `localStorage` when played offline or via VS Code Go Live.
- **🎭 Dual Visual Theme Engine (Instant Toggle)**:
  - **🦊 Furry Mode (`PAW-TOCOL`)**: Cyber-Kitsune avatar with animated twitching holo-ears, wagging plasma tail, Toe-Bean XP gems, and Paw-Blasters.
  - **🚀 Normie Mode (`MILITARY CYBER`)**: Tactical delta-wing / stealth / juggernaut fighters, diamond data cores, and military cyber HUD.
- **🛸 4 Playable Ship Classes**:
  - **Striker**: Balanced interceptor with 1 orbital drone.
  - **Phantom**: High-speed stealth fighter with built-in Railgun Pierce.
  - **Juggernaut (`TITAN`)**: Heavy twin-hull dreadnought with split-barrel cannons and 2 orbitals.
  - **Architect (`SWARM`)**: Carrier chassis starting with 4 orbiting plasma sentinels and wide XP vacuum.
- **🔥 Hardware Profiler & GPU Stress Benchmark Mode**:
  - Auto-detects unmasked **WebGL GPU Renderer**, **CPU Logical Threads**, **System RAM**, and **Display Viewport**.
  - Tracks live **FPS**, **1% Low FPS**, **Frame Time (`ms`)**, **Active Entity Count**, and a composite **Hardware Stress Score**.
- **📱 Responsive Mobile Twin-Stick Touch Controls**:
  - Auto-detects mobile/touch devices (`<= 900px`) and enables virtual dual-stick joysticks (**MOVE** + **AIM & FIRE**), dedicated **DASH** and **EMP** buttons, and compact 4-column telemetry popovers.

---

## 🎮 Controls

| Input | Desktop (Keyboard & Mouse) | Mobile / Touch |
| :--- | :--- | :--- |
| **Move** | `W` `A` `S` `D` or `Arrow Keys` | Left Virtual Joystick |
| **Aim & Fire** | `Mouse Cursor` + `Left Click` (or `[F]` Auto-Fire) | Right Virtual Joystick / Tap Canvas |
| **Phase Dash** | `Space` or `Shift` | `⚡ DASH` Touch Button |
| **EMP Shockwave** | `Q`, `E`, or `Right Click` | `💥 EMP` Touch Button |
| **Hardware Panel** | `H` | Tap `🖥️ HW BENCH` Top Pill |
| **Telemetry Panel** | `Tab` | Tap `📊 TELEMETRY` Top Pill |

---

## 🕹️ Secret Keyboard Cheats (Public) & Hidden Admin Panel

The Sandbox Cheat Console is **completely hidden from the public UI** so normal players cannot see any cheat buttons or open a menu.

### 1. Public GTA-Style Secret Keyboard Codes
Just like classic GTA, players can type secret codes **directly on their keyboard during gameplay** (no console needed!) to trigger a slide-in `"CHEAT ACTIVATED"` notification toast:
- `AWWOO` or `BAGUVIX` — Toggle Invulnerable **God Mode**
- `HESOYAM` or `BEANS` — Instant **Max HP, Armor & +5 Level Kit Boost**
- `ZOOMIES` — Toggle **Infinite Zero-Cooldown Dash**
- `BOOP` or `HADOUKEN` — Trigger a free **Screen-Clearing Orbital EMP Nuke**
- `FLOOF` — Spawn **+4 Orbiting Plasma Sentinels**
- `OWO` or `UWU` — Toggle **Hyper-Gatling Overclocked Fire Rate**
- `BENCH` — Inject **+100 Hostile Swarm Entities** for instant FPS stress testing

*(Note: Runs that use God Mode outside of Benchmark Mode are automatically marked as `UNRANKED` so the Global Leaderboard stays fair!)*

### 2. Unlocking the Hidden Overlord Admin & Moderation Panel (Owner Only)
As the game owner/admin, you can unlock the hidden **👑 OVERLORD ADMIN & SANDBOX DECK** (which gives you 1-click sandbox buttons + Cloudflare Leaderboard Purge/Moderation controls) in three ways:
1. **Type on Keyboard**: Type `ADMINOVERLORD` directly on your keyboard at any time.
2. **URL Parameter**: Open the game with `?admin=1` (e.g., `https://your-worker.workers.dev/?admin=1`).
3. **Mobile / Touch Secret Gesture**: Tap the main game title (`PAW-TOCOL: OVERDRIVE`) **5 times** on the Start Screen and enter the admin password (default: `OVERLORD`).

---

## ☁️ Deploying to Cloudflare Workers (with API & Static Assets)

This folder is pre-configured with [`worker.js`](file:///c:/Users/Hybrid/Desktop/Discarded%20Item/RandomProject/GameCreation_sample/worker.js) and [`wrangler.jsonc`](file:///c:/Users/Hybrid/Desktop/Discarded%20Item/RandomProject/GameCreation_sample/wrangler.jsonc) so your Cloudflare Worker serves both the game HTML and the `/api/leaderboard` + `/api/admin/clear` endpoints.

### Option A: Deploy via GitHub + Cloudflare Dashboard (Recommended)
1. Push [`index.html`](file:///c:/Users/Hybrid/Desktop/Discarded%20Item/RandomProject/GameCreation_sample/index.html) (and [`neon_overdrive.html`](file:///c:/Users/Hybrid/Desktop/Discarded%20Item/RandomProject/GameCreation_sample/neon_overdrive.html)), [`worker.js`](file:///c:/Users/Hybrid/Desktop/Discarded%20Item/RandomProject/GameCreation_sample/worker.js), [`wrangler.jsonc`](file:///c:/Users/Hybrid/Desktop/Discarded%20Item/RandomProject/GameCreation_sample/wrangler.jsonc), and [`README.md`](file:///c:/Users/Hybrid/Desktop/Discarded%20Item/RandomProject/GameCreation_sample/README.md) to your GitHub repository.
2. Open the **Cloudflare Dashboard** → **Workers & Pages** → **Create Application** → **Import a repository**.
3. Select your GitHub repository and deploy!
4. *(Optional)* To change your secret Admin Moderation password, go to your Worker's **Settings → Variables and Secrets** in Cloudflare and set `ADMIN_KEY` to your custom secret password.

### Option B: Deploy via Wrangler CLI
```bash
npx wrangler@latest deploy
```
