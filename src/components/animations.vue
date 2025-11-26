<template>
  <div class="dot-wrapper">
    <canvas ref="canvas" class="dot-canvas"></canvas>
    <div class="controls">
      <button @click="setShape('circle')">Circles</button>
      <button @click="setShape('heart')">Hearts</button>
      <button @click="setShape('text')">Text</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const canvas = ref(null);
let ctx;
const dots = [];
const numDots = 800;
const radius = 1.2;
let shapePositions = [];
let currentShape = 'random';
const mouse = { x: null, y: null };
<<<<<<< Updated upstream
<<<<<<< Updated upstream
let scrollY = 0;
=======
let hue = 0; // rainbow color cycling
>>>>>>> Stashed changes
=======
let hue = 0; // rainbow color cycling
>>>>>>> Stashed changes

// Generate positions for shapes
function getShapePositions(shapeType) {
  const tempCanvas = document.createElement('canvas');
  const tempCtx = tempCanvas.getContext('2d');
  tempCanvas.width = canvas.value.width;
  tempCanvas.height = canvas.value.height;

  tempCtx.fillStyle = '#fff';
  tempCtx.textAlign = 'center';
  tempCtx.textBaseline = 'middle';

  if (shapeType === 'circle') {
    for (let i = 0; i < 30; i++) {
      const cx = Math.random() * canvas.value.width;
      const cy = Math.random() * canvas.value.height;
      const r = 15 + Math.random() * 4;
      tempCtx.beginPath();
      tempCtx.arc(cx, cy, r, 0, Math.PI * 2);
      tempCtx.fill();
    }
  } else if (shapeType === 'heart') {
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * canvas.value.width;
      const y = Math.random() * canvas.value.height;
      const size = 2 + Math.random() * 3;
      for (let t = 0; t < Math.PI * 2; t += 0.03) {
        const hx = 16 * Math.pow(Math.sin(t), 3);
        const hy =
          13 * Math.cos(t) -
          5 * Math.cos(2 * t) -
          2 * Math.cos(3 * t) -
          Math.cos(4 * t);
        tempCtx.fillRect(x + hx * size, y - hy * size, 2, 2);
      }
    }
  } else if (shapeType === 'text') {
    const aboutSection = document.getElementById('about');
    const sectionHeight = aboutSection ? aboutSection.offsetHeight : canvas.value.height;
    tempCtx.font = 'bold 70px Arial';
    tempCtx.fillText('MOTHEO MORENA', canvas.value.width / 2, sectionHeight - 50);
  }

  const data = tempCtx.getImageData(0, 0, canvas.value.width, canvas.value.height).data;
  const positions = [];
  for (let y = 0; y < canvas.value.height; y += 6) {
    for (let x = 0; x < canvas.value.width; x += 6) {
      const index = (y * canvas.value.width + x) * 4;
      if (data[index + 3] > 128) positions.push({ x, y });
    }
  }
  return positions;
}

// Set target positions for dots
function setShape(shapeType) {
  currentShape = shapeType;
  shapePositions = getShapePositions(shapeType);
  for (let i = 0; i < dots.length; i++) {
    const pos = shapePositions[i % shapePositions.length];
    dots[i].tx = pos.x;
    dots[i].ty = pos.y;
  }
}

<<<<<<< Updated upstream
<<<<<<< Updated upstream
// Animate dots with hover rainbow and parallax
=======
=======
>>>>>>> Stashed changes
// Section-relative scroll factor (0 to 1)
function getSectionScroll(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return 0;
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  return Math.min(Math.max(1 - rect.top / windowHeight, 0), 1);
}

// Animate dots with hover rainbow and subtle parallax
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);

<<<<<<< Updated upstream
=======
  hue += 2;
  if (hue > 360) hue = 0;

  const scrollFactor = window.scrollY / (document.body.scrollHeight - window.innerHeight); // 0-1

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  dots.forEach((d) => {
    d.x += (d.tx - d.x) * d.speed;
    d.y += (d.ty - d.y) * d.speed;

<<<<<<< Updated upstream
<<<<<<< Updated upstream
    const parallaxX = (d.tx - canvas.value.width / 2) * 0.000085 * scrollY;
    const parallaxY = (d.ty - canvas.value.height / 2) * 0.000085 * scrollY;
=======
    // subtle parallax relative to full scroll
    const parallaxX = (d.tx - canvas.value.width / 2) * 0.15 * scrollFactor;
    const parallaxY = (d.ty - canvas.value.height / 2) * 0.15 * scrollFactor;
>>>>>>> Stashed changes
=======
    // subtle parallax relative to full scroll
    const parallaxX = (d.tx - canvas.value.width / 2) * 0.15 * scrollFactor;
    const parallaxY = (d.ty - canvas.value.height / 2) * 0.15 * scrollFactor;
>>>>>>> Stashed changes

    const drawX = d.x + parallaxX;
    const drawY = d.y + parallaxY;

<<<<<<< Updated upstream
<<<<<<< Updated upstream
    // Hover rainbow effect
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    let color = '#eae1fc53';
    if (mouse.x && mouse.y) {
      const dx = drawX - mouse.x;
      const dy = drawY - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
<<<<<<< Updated upstream
        const localHue = (dist * 2) % 360; // rainbow based on distance
=======
        const localHue = (hue + dist) % 360;
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        color = `hsl(${localHue}, 100%, 65%)`;
      }
    }

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}


onMounted(() => {
  const el = canvas.value;
  el.width = window.innerWidth;
  el.height = window.innerHeight;
  ctx = el.getContext('2d');

  // initialize dots
  for (let i = 0; i < numDots; i++) {
    dots.push({
      x: Math.random() * el.width,
      y: Math.random() * el.height,
      tx: Math.random() * el.width,
      ty: Math.random() * el.height,
      speed: 0.03 + Math.random() * 0.04,
    });
  }

  animate();

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  });

  window.addEventListener('resize', () => {
    el.width = window.innerWidth;
    el.height = window.innerHeight;
    if (currentShape !== 'random') setShape(currentShape);
  });
});
</script>

<style scoped>
.dot-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: auto;
  z-index: 0;
}

.dot-canvas {
  width: 100%;
  height: 100%;
  display: block;
  background: transparent;
}

.controls {
  position: fixed;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  pointer-events: auto;
}

button {
  padding: 8px 14px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  background: rgba(30, 29, 29, 0.7);
  border: 1px ridge rgba(128, 0, 128, 0.6);
  color: #fff;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.3s, transform 0.2s;
}
button:hover {
  background: #9d4edd;
  transform: scale(1.05);
}
</style>
