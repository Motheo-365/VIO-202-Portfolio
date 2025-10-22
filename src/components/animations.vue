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
    const radius = 2;
    let shapePositions = [];
    let currentShape = 'random';

    // helper: generate shape points
    function getShapePositions(shapeType) {
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = canvas.value.width;
    tempCanvas.height = canvas.value.height;

    tempCtx.fillStyle = '#fff';
    tempCtx.textAlign = 'center';
    tempCtx.textBaseline = 'middle';

    if (shapeType === 'circle') {
    // many small circles covering the canvas
    const numCircles = 30;       // more circles
    for (let i = 0; i < numCircles; i++) {
        const cx = Math.random() * canvas.value.width;
        const cy = Math.random() * canvas.value.height;
        const r = 15 + Math.random() * 4; // small radius
        tempCtx.beginPath();
        tempCtx.arc(cx, cy, r, 0, Math.PI * 2);
        tempCtx.fill();
    }
    } 
    
    else if (shapeType === 'heart') {
    // many small hearts covering the canvas
    const numHearts = 50;        // increase number of hearts
    for (let i = 0; i < numHearts; i++) {
        const x = Math.random() * canvas.value.width;
        const y = Math.random() * canvas.value.height;
        const size = 2 + Math.random() * 3; // smaller hearts
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
    }
    
    else if (shapeType === 'text') {
        tempCtx.font = 'bold 70px Arial';
        tempCtx.fillText('MOTHEO MORENA', canvas.value.width / 2, canvas.value.height - 50);
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

    // move dots to new shape
    function setShape(shapeType) {
    currentShape = shapeType;
    shapePositions = getShapePositions(shapeType);
    for (let i = 0; i < dots.length; i++) {
        const pos = shapePositions[i % shapePositions.length];
        dots[i].tx = pos.x;
        dots[i].ty = pos.y;
    }
    }

    // animate dots
    function animate() {
    ctx.fillStyle = 'rgba(0,0,0,0.08)'; // lighter trail
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);

    ctx.fillStyle = '#eae1fc';
    dots.forEach(d => {
        d.x += (d.tx - d.x) * d.speed;
        d.y += (d.ty - d.y) * d.speed;
        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animate);
    }

    onMounted(() => {
    const el = canvas.value;
    el.width = window.innerWidth;
    el.height = window.innerHeight;
    ctx = el.getContext('2d');

    // init dots
    for (let i = 0; i < numDots; i++) {
        dots.push({
        x: Math.random() * el.width,
        y: Math.random() * el.height,
        tx: Math.random() * el.width,
        ty: Math.random() * el.height,
        speed: 0.03 + Math.random() * 0.04
        });
    }

    animate();

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
    pointer-events: none;
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
    background: rgba(30, 29, 29, 0.693);
    border: 1px ridge rgba(128, 0, 128, 0.634);
    color: #ffffff;
    cursor: pointer;
    border-radius: 6px;
    transition: background 0.3s;
    }
    button:hover {
    background: #fff4;
    }
</style>
