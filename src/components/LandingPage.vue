<template>
  <div class="image">
    <!-- Fairy -->
    <img 
      id="fairy" 
      src="../assets/fairy.png" 
      alt="fairy" 
      @mouseenter="startDripping" 
      @mouseleave="stopDripping"
    />

    <!-- Ripple -->
    <img 
      id="ripple" 
      src="../assets/ripple.png" 
      alt="ripple" 
      @mouseenter="startDripping" 
      @mouseleave="stopDripping"
    />

    <!-- Falling drops -->
    <div v-for="drop in drops" :key="drop.id" class="drop" :style="drop.style"></div>
  </div>

  <h1 class="footer-title">MOTHEO MORENA</h1>

  <!-- (your dots / snow left as is) -->
  <div class="dots">
    <div v-for="n in 100" :key="n" class="snow"></div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const drops = ref([])
let intervalId = null

// Start dripping when hovering
const startDripping = () => {
  if (intervalId) return // already dripping
  intervalId = setInterval(() => {
    const id = Date.now() + Math.random()
    const left = Math.random() * 100 // random across screen
    const style = {
      left: `${left}vw`,
      animationDuration: `${2 + Math.random() * 2}s`
    }
    drops.value.push({ id, style })

    // remove drop after 4s
    setTimeout(() => {
      drops.value = drops.value.filter(d => d.id !== id)
    }, 4000)
  }, 300) // new drop every 300ms
}

// Stop dripping when hover ends
const stopDripping = () => {
  clearInterval(intervalId)
  intervalId = null
}
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
}

#ripple {
  position: fixed;
  top: 50vh;
  right: 45vw;
  width: 18vw;
  animation: ripple 4s infinite;
  opacity: 0.6;
  cursor: pointer;
}

/* Water drops */
.drop {
  position: fixed;
  top: 0;
  width: 6px;
  height: 12px;
  background: rgba(173, 216, 230, 0.8);
  border-radius: 50%;
  animation: fall linear forwards;
  pointer-events: none;
}

@keyframes fall {
  from {
    transform: translateY(-5vh);
    opacity: 1;
  }
  to {
    transform: translateY(105vh);
    opacity: 0;
  }
}

/* keep your snow/dots styles here */
</style>
