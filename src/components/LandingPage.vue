<template>
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

  <!--
  <h1 class="footer-title">MOTHEO MORENA</h1>
  -->

  <!-- Snow/dots -->
</template>

<script setup>
import { ref } from "vue"

</script>

<style scoped>
 /* .footer-title {
    font-size: 3rem;
    text-align: center;
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255, 255, 255, 0.83);
  } */

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
</style>
