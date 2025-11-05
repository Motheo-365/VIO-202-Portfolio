<template>
  <div class="hook-container">
    <h3 class="hook"> Crafting worlds where code meets imagination. </h3>

    <div class="image">
      <!-- Fairy -->
      <img 
        id="fairy" 
        src="../assets/fairy.png" 
        alt="fairy" 
        @mouseenter="startDripping($event)" 
        @mouseleave="stopDripping"
      />

      <!-- Ripple -->
      <img 
        id="ripple" 
        src="../assets/ripple.png" 
        alt="ripple" 
        @mouseenter="startDripping($event)" 
        @mouseleave="stopDripping"
      />
    </div>

    <h3 class="hook alt"> Step into the code that breathes life to me. </h3>
  </div>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped>
.hook {
  font-size: 2rem;
  color: #dcd5f7;
  text-shadow: 0 0 15px #00ffff, 0 0 25px #0088ff;
  letter-spacing: 2px;
  margin: 2rem 0;
  transform: translate(25%, -1250%);
  animation: glow-pulse 4s ease-in-out infinite;
}

.hook.alt {
  font-family: 'Press Start 2P', cursive;
  font-size: 1rem;
  color: #ffffff;
  text-shadow: 0 0 15px #ff00ff, 0 0 25px #ff0088;
  transform: translate(32%, -1200%);
  animation: glitch 4s infinite;
}

/* Floating and glowing fairy */
#fairy {
  position: fixed;
  top: 30vh;
  right: 46vw;
  width: 10vw;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.664);
  border-radius: 15px;
  padding: 1rem;
  animation: float 4s ease-in-out infinite;
}

/* Ripple glow effect */
#ripple {
  position: fixed;
  top: 50vh;
  right: 45vw;
  width: 16vw;
  animation: ripple 4s infinite;
  opacity: 0.6;
  z-index: 1; 
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.664);
  border-radius: 15px;
}

/* Animations */
@keyframes glow-pulse {
  0%, 100% { text-shadow: 0 0 15px #9000ff, 0 0 25px #9000ff; }
  50% { text-shadow: 0 0 25px #9000ffff, 0 0 45px #9000ff; }
}

@keyframes glitch {
  0%, 100% { text-shadow: 2px 2px #b700ff, -2px -2px #ddbeff; }
  50% { text-shadow: -2px -2px #b700ff, 2px 2px #ddbeff; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes ripple {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.1); opacity: 0.9; }
}
</style>