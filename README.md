# 🐾🚀 PAW-TOCOL // NEON OVERDRIVE
**Cyber Arena Survival, Online Ghost Ranking & WebGL Hardware Stress Benchmark**

A zero-dependency HTML5 Canvas 2D arcade survival game, live hardware stress-tester, and Cloudflare Worker multiplayer ranking & ghost-replay experience.

---

## ✨ Key Features

- **🌐 Global Leaderboard & Live Holographic Ghost Pilots**:
  - Compete on two global leaderboards: **🏆 Top Combat Score** and **🔥 Top GPU Hardware Stress Benchmark**.
  - **👻 Live Ghost Pilots**: Your flight path is recorded during each run; enable Live Ghost Pilots on the launch screen to watch top players' holographic ghost ships fly alongside you in the arena!
  - Works seamlessly online via **Cloudflare Workers** (`/api/leaderboard`) and automatically falls back to `localStorage` when played offline.
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
