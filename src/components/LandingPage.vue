<template>
  <div class="image">
    <!-- Fairy -->
    <img 
      id="fairy" 
      src="../assets/fairy.png" 
      alt="fairy" 
      @mouseenter="startWingDrip($event)" 
      @mouseleave="stopDripping"
    />

    <!-- Ripple -->
    <img 
      id="ripple" 
      src="../assets/ripple.png" 
      alt="ripple" 
      @mouseenter="startCircleDrip($event)" 
      @mouseleave="stopDripping"
    />

    <!-- Falling drops -->
    <div v-for="drop in drops" :key="drop.id" class="drop" 
         :style="{ left: drop.left, top: drop.top, animationDuration: drop.animationDuration }">
    </div>
  </div>

  <h1 class="footer-title">MOTHEO MORENA</h1>

  <!-- Snow/dots -->
  <div class="dots">
    <div v-for="n in 100" :key="n" class="snow"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const drops = ref([])
let hoverIntervalId = null
let rainIntervalId = null

// -----------------------------
// Automatic rain across the page
// -----------------------------
const startRain = () => {
  rainIntervalId = setInterval(() => {
    const id = Date.now() + Math.random()
    const left = Math.random() * window.innerWidth
    const top = -20
    const animationDuration = `${3 + Math.random() * 3}s`

    drops.value.push({ id, left: `${left}px`, top: `${top}px`, animationDuration })

    setTimeout(() => {
      drops.value = drops.value.filter(d => d.id !== id)
    }, 4000)
  }, 150)
}

// -----------------------------
// Hover: Circle ripple
// -----------------------------
const startCircleDrip = (event) => {
  if (hoverIntervalId) return

  const imgRect = event.target.getBoundingClientRect()
  const centerX = imgRect.left + imgRect.width / 2
  const centerY = imgRect.top + imgRect.height / 2
  const radius = 50
  let angle = 0

  hoverIntervalId = setInterval(() => {
    const id = Date.now() + Math.random()
    const x = centerX + radius * Math.cos(angle)
    const y = centerY + radius * Math.sin(angle)
    angle += Math.PI / 12 // more drops for smooth circle
    const animationDuration = `${2 + Math.random() * 2}s`

    drops.value.push({ id, left: `${x}px`, top: `${y}px`, animationDuration })

    setTimeout(() => {
      drops.value = drops.value.filter(d => d.id !== id)
    }, 4000)
  }, 100)
}

// -----------------------------
// Hover: Fairy wing shape
// -----------------------------
const startWingDrip = (event) => {
  if (hoverIntervalId) return

  const imgRect = event.target.getBoundingClientRect()
  // Define a simple wing-like pattern using relative points
  const wingPoints = [
    [0,0],[10,-5],[20,-10],[30,-15],[40,-20],
    [50,-15],[60,-10],[70,-5],[80,0],[70,5],
    [60,10],[50,15],[40,20],[30,15],[20,10],[10,5]
  ]
  
  hoverIntervalId = setInterval(() => {
    const id = Date.now() + Math.random()
    const point = wingPoints[Math.floor(Math.random() * wingPoints.length)]
    const x = imgRect.left + point[0] + imgRect.width/2
    const y = imgRect.top + point[1] + imgRect.height/2
    const animationDuration = `${2 + Math.random() * 2}s`

    drops.value.push({ id, left: `${x}px`, top: `${y}px`, animationDuration })

    setTimeout(() => {
      drops.value = drops.value.filter(d => d.id !== id)
    }, 4000)
  }, 100)
}

// Stop hover drops
const stopDripping = () => {
  clearInterval(hoverIntervalId)
  hoverIntervalId = null
}

onMounted(() => startRain())
onBeforeUnmount(() => {
  clearInterval(hoverIntervalId)
  clearInterval(rainIntervalId)
})
</script>

<style scoped>
.footer-title {
  font-size: 3rem;
  text-align: center;
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.83);
}

#fairy {
  position: fixed;
  top: 24vh;
  right: 45vw;
  width: 12vw;
  cursor: pointer;
  z-index: 10001;
}

#ripple {
  position: fixed;
  top: 50vh;
  right: 45vw;
  width: 18vw;
  animation: ripple 4s infinite;
  opacity: 0.6;
  cursor: pointer;
  z-index: 10001;
}

/* Water drops */
.drop {
  position: fixed;
  width: 8px;
  height: 16px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  animation: fall linear forwards;
  pointer-events: none;
  z-index: 9999;
}

@keyframes fall {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}

/* Snow/dots remain as is */
</style>
