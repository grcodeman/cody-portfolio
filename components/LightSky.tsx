"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

// Light-mode background: a pale day sky with three layers of drifting clouds (parallax on scroll)
// and the occasional small flock of birds — the daytime counterpart to the starfield.
const SKY = [
  [0, "rgb(207,232,251)"], // pale sky blue
  [0.6, "rgb(240,247,253)"],
  [1, "rgb(253,244,246)"], // faint rose warmth near the horizon
] as const;

// Far → near: near clouds are bigger, more opaque, drift faster, and move more with scroll.
const LAYERS = [
  { pxPerCloud: 260, scale: 0.5, alpha: 0.55, drift: 4, parallax: 0.05 },
  { pxPerCloud: 420, scale: 0.8, alpha: 0.75, drift: 8, parallax: 0.12 },
  { pxPerCloud: 700, scale: 1.15, alpha: 0.9, drift: 13, parallax: 0.22 },
];
const BIRD_GAP_MS = [20000, 40000];

type Cloud = { img: HTMLCanvasElement; w: number; h: number; x: number; y: number; alpha: number; drift: number; parallax: number };
type Flock = { x: number; y: number; dir: 1 | -1; speed: number; birds: { dx: number; dy: number; ph: number; s: number }[] };

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const wrap = (v: number, period: number) => ((v % period) + period) % period;

// Pre-render one cumulus cloud: a flat base plus a few domes, filled as one solid silhouette,
// blurred so it reads as a single soft shape, then shaded cool-gray underneath for volume.
// Rendered at quarter size (upscaled when drawn), which also softens it where canvas filter is unsupported.
const CLOUD_RES = 0.25;
function makeCloud(scale: number) {
  const W = rand(220, 380) * scale, pad = W * 0.2;
  const w = W + pad * 2, h = W * 0.55 + pad * 2, bottom = h - pad;
  const c = document.createElement("canvas");
  c.width = Math.ceil(w * CLOUD_RES);
  c.height = Math.ceil(h * CLOUD_RES);
  const g = c.getContext("2d")!;
  g.scale(CLOUD_RES, CLOUD_RES);
  g.filter = `blur(${Math.max(0.5, W * 0.004)}px)`;
  g.fillStyle = "#fff";
  g.beginPath();
  g.ellipse(pad + W / 2, bottom - W * 0.07, W / 2, W * 0.07, 0, 0, Math.PI * 2); // flat base
  const domes = Math.round(rand(4, 6));
  const spacing = (0.64 / (domes - 1)) * W;
  for (let i = 0; i < domes; i++) {
    const nx = 0.18 + (i / (domes - 1)) * 0.64 + rand(-0.02, 0.02);
    // Tallest just left of center, but never under 0.8x the spacing: neighbours always overlap,
    // so a cloud can't break apart into separate puffs.
    const r = Math.max(spacing * 0.8, W * rand(0.13, 0.2) * (1.25 - Math.abs(nx - 0.45) * 1.2));
    g.moveTo(pad + nx * W + r, bottom - W * 0.08 - r * 0.55);
    g.arc(pad + nx * W, bottom - W * 0.08 - r * 0.55, r, 0, Math.PI * 2);
  }
  g.fill();
  g.filter = "none";
  g.globalCompositeOperation = "source-atop";
  const shade = g.createLinearGradient(0, pad, 0, bottom);
  shade.addColorStop(0.45, "rgba(148,163,184,0)");
  shade.addColorStop(1, "rgba(148,163,184,0.16)");
  g.fillStyle = shade;
  g.fillRect(0, 0, w, h);
  return { img: c, w, h };
}

export default function LightSky() {
  const { resolvedTheme } = useTheme();
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || resolvedTheme !== "light") return;

    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, last = 0, nextFlock = rand(8000, 15000);
    let clouds: Cloud[] = [];
    let flock: Flock | null = null;
    let sky: CanvasGradient | null = null;

    const draw = (t: number) => {
      const dt = Math.min(t - last, 50) / 1000;
      last = t;
      const sec = still ? 0 : t / 1000;
      const scroll = still ? 0 : window.scrollY;

      ctx.fillStyle = sky!;
      ctx.fillRect(0, 0, w, h);

      for (const c of clouds) {
        const x = wrap(c.x + sec * c.drift + c.w, w + 2 * c.w) - c.w;
        const y = wrap(c.y - scroll * c.parallax + c.h, h + 2 * c.h) - c.h;
        // Fade clouds to 35% while they pass behind the reading column (~36rem wide).
        const off = Math.abs(x + c.w / 2 - w / 2);
        ctx.globalAlpha = c.alpha * Math.min(1, Math.max(0.35, (off - 220) / 260));
        ctx.drawImage(c.img, x, y, c.w, c.h);
      }
      ctx.globalAlpha = 1;
      if (still) return;

      if (!flock && t > nextFlock) {
        const dir = Math.random() < 0.5 ? 1 : -1;
        const n = Math.round(rand(2, 4));
        flock = {
          dir, speed: rand(45, 70), x: dir === 1 ? -60 : w + 60, y: rand(h * 0.08, h * 0.35),
          birds: Array.from({ length: n }, (_, i) => ({ dx: -dir * i * rand(14, 22), dy: (i % 2 ? 1 : -1) * i * rand(5, 9), ph: rand(0, Math.PI * 2), s: rand(4, 6) })),
        };
      }
      if (flock) {
        const f = flock;
        f.x += f.dir * f.speed * dt;
        ctx.strokeStyle = "rgba(71,85,105,0.55)"; // slate-600, softened
        ctx.lineWidth = 1.2;
        ctx.lineCap = "round";
        ctx.beginPath();
        for (const b of f.birds) {
          const bx = f.x + b.dx, by = f.y + b.dy + Math.sin(sec * 1.5 + b.ph) * 3;
          const flap = Math.sin(sec * 9 + b.ph) * b.s * 0.6; // wingtips rise and fall
          ctx.moveTo(bx - b.s, by - flap);
          ctx.quadraticCurveTo(bx - b.s * 0.4, by - b.s * 0.3, bx, by);
          ctx.quadraticCurveTo(bx + b.s * 0.4, by - b.s * 0.3, bx + b.s, by - flap);
        }
        ctx.stroke();
        if (f.x < -200 || f.x > w + 200) {
          flock = null;
          nextFlock = t + rand(BIRD_GAP_MS[0], BIRD_GAP_MS[1]);
        }
      }
      raf = requestAnimationFrame(draw);
    };

    // Canvas is 100lvh, so mobile URL-bar show/hide doesn't resize it or regenerate clouds.
    const resize = () => {
      if (canvas.clientWidth === w && canvas.clientHeight === h) return;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sky = ctx.createLinearGradient(0, 0, 0, h);
      for (const [stop, color] of SKY) sky.addColorStop(stop, color);
      clouds = LAYERS.flatMap((l) =>
        Array.from({ length: Math.max(2, Math.round(w / l.pxPerCloud)) }, () => ({
          ...makeCloud(l.scale), x: rand(0, w), y: rand(0, h), alpha: l.alpha * rand(0.8, 1), drift: l.drift * rand(0.8, 1.2), parallax: l.parallax,
        }))
      );
      if (still) draw(0);
    };

    resize();
    canvas.style.opacity = "1"; // fade the sky in over the white body instead of snapping
    window.addEventListener("resize", resize);
    if (!still) raf = requestAnimationFrame((t) => { last = t; draw(t); });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      ctx.clearRect(0, 0, w, h);
      canvas.style.opacity = "0";
    };
  }, [resolvedTheme]);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-lvh w-full opacity-0 transition-opacity duration-700" />;
}
