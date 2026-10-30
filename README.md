# 🦊🚀 PAW-TOCOL: NEON OVERDRIVE

> **Zero-Dependency HTML5 Cyber Arena Survival & Real-Time Hardware Stress Benchmark**  
> Built as a self-contained single-file web application ready for instant deployment on **Cloudflare Workers**, **Cloudflare Pages**, or **GitHub Pages**.

---

## ✨ Features

### 🎨 Dual Visual Themes (Instant Live Toggle)
* **🦊 Furry Mode (`PAW-TOCOL`)**: Pilot *KITSUNE-09 // "VIX"* — an animated cyber-fox with twitching holo-ears, wagging plasma tail, glowing **Toe-Bean** XP gems, Paw-Blasters, and *Sonic Bark (`AWOOOOO!`)* EMP shockwaves.
* **🚀 Normie Mode (`MILITARY CYBER`)**: Sleek geometric interceptor hulls with dynamic thruster exhaust, diamond data cores, plasma rail-bolts, and a tactical cyan/blue HUD.
* Toggle between themes on the launch screen or **live mid-game** via the top-left HUD pill button.

### 🛸 4 Playable Ship Classes
| Class | Furry Callsign | Normie Callsign | Role & Starting Kit |
| :--- | :--- | :--- | :--- |
| **⚡ Striker** | `KITSUNE-09 // VIX` | `VANGUARD MK-IV` | Balanced interceptor (100 HP, fast fire rate, 1 Orbital Sentinel) |
| **🗡️ Phantom** | `SWIFT-PAW // LYNX` | `SPECTRE STEALTH` | High-speed rail-runner (75 HP, +30% speed, +2 Pierce, short Dash CD) |
| **🛡️ Juggernaut** | `URSINE-99 // KODIAK` | `AEGIS DREADNOUGHT` | Heavy armor tank (180 HP, Twin-Shot Split Barrel, +1 Bounce, 2 Orbitals) |
| **🛰️ Architect** | `NINE-TAILS // KAMI` | `NEXUS CARRIER` | Orbital summoner (95 HP, 4 Orbiting Sentinels, wide XP magnet radius) |

### 🖥️ Real-Time Hardware Profiler & Stress Benchmark (`[H]`)
* **System Detection**: Automatically queries WebGL debug renderer info for unmasked **GPU model**, **CPU logical threads** (`navigator.hardwareConcurrency`), **System Memory**, and active **Canvas Resolution / DPI**.
* **Live Frame Telemetry**: Tracks **Live FPS**, **1% Low FPS**, **Frame Time (`ms`)**, **Active Entity Count**, and renders a real-time **FPS Stability Sparkline**.
* **🔥 Dedicated Hardware Stress Test Mode**: Automatically enables Invulnerability, Hyper-Gatling Multishot, Auto-Fire, and continuously injects hundreds of swarming enemies and particles to benchmark CPU/GPU performance.
* **Live Glow FX Toggle**: Toggle Canvas `shadowBlur` dynamic bloom on/off mid-game to measure GPU lighting overhead.

### 📊 Live Combat Telemetry Sidebar (`[TAB]`)
* Real-time **Rolling DPS**, **Peak DPS**, **30-Second DPS Waveform Sparkline**, **Shot Accuracy %**, **Kills Per Minute (KPM)**, **Survival Timer**, and active weapon attribute inspector.

### 📱 Mobile & Touch Optimized
* **Twin-Stick Virtual Joysticks**: Left analog thumbstick for 360° movement, right thumbstick for aiming & firing (plus direct canvas tap-to-shoot).
* **Dedicated Touch Action Buttons**: On-screen **⚡ DASH** and **💥 EMP** buttons.
* **Responsive HUD Drawers**: Compact 4-column statistic tiles and mutually exclusive centered popover drawers on mobile screens.

---

## 🎮 Controls & Secret Cheat Codes

### Desktop & Mobile Controls
| Action | Desktop | Mobile / Touch |
| :--- | :--- | :--- |
| **Move** | `WASD` or `Arrow Keys` | Left Virtual Thumbstick |
| **Aim & Fire** | `Mouse` + `Left Click` (`[F]` Auto-Fire) | Right Virtual Thumbstick / Tap Arena |
| **Phase Dash** | `Spacebar` or `Shift` | **⚡ DASH** Button |
| **EMP Shockwave** | `Q`, `E`, or `Right Click` | **💥 EMP** Button |
| **Hardware Profiler** | `H` | Tap **🖥️ HARDWARE** Header Pill |
| **Combat Telemetry** | `TAB` | Tap **📊 TELEMETRY** Header Pill |
| **Cheat Terminal** | `` ` `` (Backtick) | Tap **⚡ CHEAT DECK** Pill |
| **Pause** | `ESC` or `P` | — |

### ⚡ Secret Keyboard & Terminal Cheat Codes
Type these directly on your keyboard during gameplay or enter them into the **Anarchy Cheat Deck**:
* `AWWOO` or `GOD` — Toggle **God Mode** (Invulnerability + infinite EMP charges)
* `ZOOMIES` — Toggle **Infinite Phase Dash** (Zero cooldown)
* `OWO` or `UWU` — Toggle **Hyper Gatling** (4x weapon fire rate)
* `BEANS` — **Max Kit Boost** (+5 Levels, +2 Projectiles, +2 Orbitals, +45% Damage, Full Heal)
* `FLOOF` — **Orbital Swarm** (Instantly spawns +4 orbiting sentinels)
* `BOOP` — **Free EMP Nuke** (Triggers a screen-wide shockwave blast)
* `BENCH` — **Stress Swarm** (Immediately injects +100 enemies and 120 particles)

---

## ☁️ Deploying to Cloudflare Workers / Pages

Because the entire game (HTML, CSS, Canvas 2D engine, and Web Audio synthesizer) is packed into a single file (`neon_overdrive.html`), you have two easy ways to host it on Cloudflare:

### Option A: Cloudflare Workers with Static Assets (Recommended via GitHub)
1. Rename or copy `neon_overdrive.html` to `index.html` (or keep both).
2. Add a `wrangler.jsonc` (or `wrangler.toml`) in the project folder:
   ```jsonc
   {
     "name": "neon-overdrive",
     "compatibility_date": "2026-10-30",
     "assets": {
       "directory": "./"
     }
   }
   ```
3. Push this repository to **GitHub**.
4. In your **Cloudflare Dashboard**, go to **Workers & Pages** -> **Create** -> **Connect to Git**, select your repository, and deploy!

### Option B: Single-Script Cloudflare Worker (Embed HTML Directly)
If you want to paste a Worker script directly into the Cloudflare Worker Quick Edit dashboard without static asset binding, you can serve the HTML string with a `Content-Type: text/html;charset=UTF-8` header:

```js
import html from './neon_overdrive.html';

export default {
  async fetch(request) {
    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'cache-control': 'public, max-age=3600'
      }
    });
  }
};
```

---

## 📂 Project Structure

```text
GameCreation_sample/
├── neon_overdrive.html   # Self-contained HTML5 game, telemetry UI & hardware benchmark
└── README.md             # Project documentation & Cloudflare deployment guide
```

