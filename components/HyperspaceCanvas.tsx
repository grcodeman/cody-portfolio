"use client"

import { useEffect, useRef } from 'react';

const randomInRange = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const BASE_SIZE = 1;
const VELOCITY_INC = 1.01;
const VELOCITY_INIT_INC = 1.025;
const JUMP_VELOCITY_INC = 1.25;
const JUMP_SIZE_INC = 1.15;
const SIZE_INC = 1.01;
const RAD = Math.PI / 180;
const WARP_COLORS = [
  [197, 239, 247],
  [25, 181, 254],
  [77, 5, 232],
  [165, 55, 253],
  [255, 255, 255],
];

class Star {
  STATE: {
    alpha: number;
    angle: number;
    active?: boolean;
    x?: number;
    y?: number;
    vX?: number;
    vY?: number;
    iX?: number;
    iY?: number;
    iVX?: number;
    iVY?: number;
    size?: number;
  };

  constructor() {
    this.STATE = {
      alpha: Math.random(),
      angle: randomInRange(0, 360) * RAD,
    };
    this.reset();
  }

  reset = () => {
    const angle = randomInRange(0, 360) * (Math.PI / 180);
    const vX = Math.cos(angle);
    const vY = Math.sin(angle);
    const travelled =
      Math.random() > 0.5
        ? Math.random() * Math.max(window.innerWidth, window.innerHeight) +
          Math.random() * (window.innerWidth * 0.24)
        : Math.random() * (window.innerWidth * 0.25);
    this.STATE = {
      ...this.STATE,
      iX: undefined,
      iY: undefined,
      active: travelled ? true : false,
      x: Math.floor(vX * travelled) + window.innerWidth / 2,
      vX,
      y: Math.floor(vY * travelled) + window.innerHeight / 2,
      vY,
      size: BASE_SIZE,
    };
  };
}

const generateStarPool = (size: number): Star[] =>
  Array.from({ length: size }, () => new Star());

interface HyperspaceCanvasProps {
  isActive?: boolean;
}

export default function HyperspaceCanvas({ isActive = true }: HyperspaceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const stateRef = useRef({
    stars: generateStarPool(300),
    bgAlpha: 0,
    sizeInc: SIZE_INC,
    velocity: VELOCITY_INC,
    initiating: false,
    jumping: false,
    initiateTimestamp: 0,
  });

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const setup = () => {
      context.lineCap = 'round';
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    };

    const tweenTo = (target: any, duration: number, props: any) => {
      const start = performance.now();
      const initial: any = {};
      for (const key in props) {
        initial[key] = target[key];
      }

      const animate = (currentTime: number) => {
        const elapsed = (currentTime - start) / 1000;
        const progress = Math.min(elapsed / duration, 1);

        for (const key in props) {
          target[key] = initial[key] + (props[key] - initial[key]) * progress;
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    const render = () => {
      const state = stateRef.current;
      const { bgAlpha, velocity, sizeInc, initiating, jumping, stars } = state;

      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (bgAlpha > 0) {
        context.fillStyle = `rgba(31, 58, 157, ${bgAlpha})`;
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);
      }

      const nonActive = stars.filter((s) => !s.STATE.active);
      if (!initiating && nonActive.length > 0) {
        nonActive[0].STATE.active = true;
      }

      for (const star of stars.filter((s) => s.STATE.active)) {
        const { active, x, y, iX, iY, iVX, iVY, size, vX, vY } = star.STATE;

        if (
          ((iX || x!) < 0 ||
            (iX || x!) > window.innerWidth ||
            (iY || y!) < 0 ||
            (iY || y!) > window.innerHeight) &&
          active &&
          !initiating
        ) {
          star.reset();
        } else if (active) {
          const newIX = initiating ? iX : (iX || 0) + (iVX || 0);
          const newIY = initiating ? iY : (iY || 0) + (iVY || 0);
          const newX = x! + vX!;
          const newY = y! + vY!;

          const caught =
            (vX! < 0 && newIX! < x!) ||
            (vX! > 0 && newIX! > x!) ||
            (vY! < 0 && newIY! < y!) ||
            (vY! > 0 && newIY! > y!);

          star.STATE = {
            ...star.STATE,
            iX: caught ? undefined : newIX,
            iY: caught ? undefined : newIY,
            iVX: caught ? undefined : iVX! * VELOCITY_INIT_INC,
            iVY: caught ? undefined : iVY! * VELOCITY_INIT_INC,
            x: newX,
            vX: vX! * velocity,
            y: newY,
            vY: vY! * velocity,
            size: initiating ? size : size! * (iX || iY ? SIZE_INC : sizeInc),
          };

          let color = `rgba(255, 255, 255, ${star.STATE.alpha})`;
          if (jumping) {
            const [r, g, b] =
              WARP_COLORS[randomInRange(WARP_COLORS.length - 1, 0)];
            color = `rgba(${r}, ${g}, ${b}, ${star.STATE.alpha})`;
          }

          context.strokeStyle = color;
          context.lineWidth = size!;
          context.beginPath();
          context.moveTo(star.STATE.iX || x!, star.STATE.iY || y!);
          context.lineTo(star.STATE.x!, star.STATE.y!);
          context.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(render);
    };

    const initiate = () => {
      const state = stateRef.current;
      if (state.jumping || state.initiating) return;

      state.initiating = true;
      state.initiateTimestamp = Date.now();

      tweenTo(state, 0.25, { velocity: VELOCITY_INIT_INC, bgAlpha: 0.3 });

      for (const star of state.stars.filter((s) => s.STATE.active)) {
        star.STATE = {
          ...star.STATE,
          iX: star.STATE.x,
          iY: star.STATE.y,
          iVX: star.STATE.vX,
          iVY: star.STATE.vY,
        };
      }
    };

    const jump = () => {
      const state = stateRef.current;
      state.bgAlpha = 0;
      state.jumping = true;

      tweenTo(state, 0.25, {
        velocity: JUMP_VELOCITY_INC,
        bgAlpha: 0.75,
        sizeInc: JUMP_SIZE_INC,
      });

      setTimeout(() => {
        state.jumping = false;
        tweenTo(state, 0.25, {
          bgAlpha: 0,
          velocity: VELOCITY_INC,
          sizeInc: SIZE_INC,
        });
      }, 2500);
    };

    const enter = () => {
      const state = stateRef.current;
      if (state.jumping) return;

      const { initiateTimestamp } = state;
      state.initiating = false;
      state.initiateTimestamp = 0;

      if (Date.now() - initiateTimestamp > 600) {
        jump();
      } else {
        tweenTo(state, 0.25, { velocity: VELOCITY_INC, bgAlpha: 0 });
      }
    };

    const handleResize = () => {
      stateRef.current.stars = generateStarPool(300);
      setup();
    };

    setup();
    render();

    canvas.addEventListener('mousedown', initiate);
    canvas.addEventListener('touchstart', initiate);
    canvas.addEventListener('mouseup', enter);
    canvas.addEventListener('touchend', enter);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousedown', initiate);
      canvas.removeEventListener('touchstart', initiate);
      canvas.removeEventListener('mouseup', enter);
      canvas.removeEventListener('touchend', enter);
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="hyperspace-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'auto',
        zIndex: 0,
      }}
    />
  );
}
