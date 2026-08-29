import React, { useEffect, useRef } from 'react';

interface ParticleNetworkProps {
  darkMode?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export const ParticleNetwork: React.FC<ParticleNetworkProps> = ({ darkMode = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Generate Particles
    let particles: Particle[] = [];

    const colorsDark = [
      'rgba(56, 189, 248, 0.7)',  // Cyan
      'rgba(99, 102, 241, 0.7)',  // Indigo
      'rgba(168, 85, 247, 0.6)',  // Purple
      'rgba(52, 211, 153, 0.6)',  // Emerald
    ];

    const colorsLight = [
      'rgba(2, 132, 199, 0.6)',   // Deep Cyan
      'rgba(79, 70, 229, 0.6)',   // Deep Indigo
      'rgba(147, 51, 234, 0.5)',  // Deep Purple
      'rgba(13, 148, 136, 0.5)',  // Teal
    ];

    const initParticles = () => {
      particles = [];
      const currentColors = darkMode ? colorsDark : colorsLight;
      const count = Math.min(Math.floor((width * height) / 12000), 95);

      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 2 + 1.2;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius,
          color: currentColors[Math.floor(Math.random() * currentColors.length)],
        });
      }
    };

    initParticles();

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const maxConnectDistance = 140;
      const mouseConnectDistance = 180;
      const lineBaseColor = darkMode ? '56, 189, 248' : '14, 165, 233';

      // Draw Connections between particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particle
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce off canvas edges
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Connect with other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDistance) {
            const alpha = (1 - dist / maxConnectDistance) * (darkMode ? 0.22 : 0.16);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineBaseColor}, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect with mouse cursor
        const dxMouse = p1.x - mouse.x;
        const dyMouse = p1.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseConnectDistance) {
          const mouseAlpha = (1 - distMouse / mouseConnectDistance) * (darkMode ? 0.45 : 0.35);
          ctx.beginPath();
          ctx.strokeStyle = darkMode
            ? `rgba(129, 140, 248, ${mouseAlpha})`
            : `rgba(99, 102, 241, ${mouseAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();

          // Subtle gentle magnetic pull toward cursor
          p1.x -= dxMouse * 0.008;
          p1.y -= dyMouse * 0.008;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.fill();

        // Subtle glow effect
        if (darkMode) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = p1.color;
        } else {
          ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
    />
  );
};
