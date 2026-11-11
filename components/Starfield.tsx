"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

// Dark-mode background. Far → near: near layers are bigger, brighter, sparser, and move more with scroll.
const LAYERS = [
  { speed: 0.04, pxPerStar: 5000, size: 0.6, alpha: 0.55 },
  { speed: 0.12, pxPerStar: 14000, size: 0.9, alpha: 0.75 },
  { speed: 0.25, pxPerStar: 40000, size: 1.3, alpha: 0.95 },
];
// Mostly white, with a few stars tinted toward the page's blue / sky / rose.
const TINTS = ["255,255,255", "255,255,255", "255,255,255", "255,255,255", "191,219,254", "186,230,253", "254,205,211"];
const METEOR_GAP_MS = [4000, 12000];

type Star = { x: number; y: number; r: number; a: number; tw: number; ph: number; c: string; speed: number };
type Meteor = { x: number; y: number; vx: number; vy: number; age: number; life: number };

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export default function Starfield() {
  const { resolvedTheme } = useTheme();
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || resolvedTheme !== "dark") return;

    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, last = 0, nextMeteor = rand(1500, 4000);
    let stars: Star[] = [];
    let meteor: Meteor | null = null;

    const draw = (t: number) => {
      const dt = Math.min(t - last, 50) / 1000; // clamp so a backgrounded tab doesn't teleport the meteor
      last = t;
      ctx.clearRect(0, 0, w, h);
      const scroll = still ? 0 : window.scrollY;

      for (const s of stars) {
        const y = (((s.y - scroll * s.speed) % h) + h) % h;
        const a = still ? s.a : s.a * (0.7 + 0.3 * Math.sin((t / 1000) * s.tw + s.ph));
        ctx.fillStyle = `rgba(${s.c},${a})`;
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (still) return;

      if (!meteor && t > nextMeteor) {
        const angle = rand(0.55, 0.85); // radians below horizontal, heading down-left
        const speed = rand(700, 1000);
        meteor = { x: rand(w * 0.3, w * 1.1), y: rand(-h * 0.1, h * 0.35), vx: -Math.cos(angle) * speed, vy: Math.sin(angle) * speed, age: 0, life: rand(0.7, 1.1) };
      }
      if (meteor) {
        const m = meteor;
        m.age += dt;
        m.x += m.vx * dt;
        m.y += m.vy * dt;
        const p = m.age / m.life;
        if (p >= 1) {
          meteor = null;
          nextMeteor = t + rand(METEOR_GAP_MS[0], METEOR_GAP_MS[1]);
        } else {
          const fade = Math.sin(Math.PI * p); // ease in, ease out
          const tail = 0.12; // seconds of travel shown as the trail
          const tx = m.x - m.vx * tail, ty = m.y - m.vy * tail;
          const g = ctx.createLinearGradient(m.x, m.y, tx, ty);
          g.addColorStop(0, `rgba(255,255,255,${0.9 * fade})`);
          g.addColorStop(0.3, `rgba(191,219,254,${0.4 * fade})`);
          g.addColorStop(1, "rgba(191,219,254,0)");
          ctx.strokeStyle = g;
          ctx.lineWidth = 2;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(tx, ty);
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };

    // Canvas is 100lvh, so mobile URL-bar show/hide doesn't change its size or reshuffle stars.
    const resize = () => {
      if (canvas.clientWidth === w && canvas.clientHeight === h) return;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = LAYERS.flatMap((l) =>
        Array.from({ length: Math.round((w * h) / l.pxPerStar) }, () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          r: l.size * rand(0.6, 1.4),
          a: l.alpha * rand(0.5, 1),
          tw: rand(0.4, 1.6),
          ph: rand(0, Math.PI * 2),
          c: TINTS[Math.floor(Math.random() * TINTS.length)],
          speed: l.speed,
        }))
      );
      if (still) draw(0);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!still) raf = requestAnimationFrame((t) => { last = t; draw(t); });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      ctx.clearRect(0, 0, w, h);
    };
  }, [resolvedTheme]);

  // Mask dims stars behind the reading column to half strength; margins stay full brightness.
  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-lvh w-full"
      style={{ maskImage: "linear-gradient(to right, black calc(50% - 28rem), rgb(0 0 0 / 0.5) calc(50% - 18rem), rgb(0 0 0 / 0.5) calc(50% + 18rem), black calc(50% + 28rem))" }}
    />
  );
}
