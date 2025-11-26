<template>
    <!-- When hovered over the clock image should shift to show the actual time -->
   <!--  img src = "../assets/clock.png" alt = "Clock image"  -->

    <div class="clock"> 
        <p class="time">{{ currentTime }}</p>
        <p class="date">{{ currentDate }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')
const currentDate = ref('')

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

function updateTime() {
  const cd = new Date()
  currentTime.value =
    zeroPadding(cd.getHours(), 2) +
    ':' +
    zeroPadding(cd.getMinutes(), 2) +
    ':' +
    zeroPadding(cd.getSeconds(), 2)

  currentDate.value =
    zeroPadding(cd.getFullYear(), 4) +
    '-' +
    zeroPadding(cd.getMonth() + 1, 2) +
    '-' +
    zeroPadding(cd.getDate(), 2) +
    ' ' +
    week[cd.getDay()]
}

function zeroPadding(num, digit) {
  return String(num).padStart(digit, '0')
}

let timerID
onMounted(() => {
  updateTime()
  timerID = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(timerID)
})
</script>

<style scoped>
    .clock {
        display: flex;
        align-items: center;
        gap: 1rem;

        font-family: 'Share Tech Mono', monospace;
        color: #f0e5f5;
        text-shadow: 
          0 0 10px rgba(221, 27, 255, 1),
          0 0 15px rgba(10, 175, 230, 0.8);
        text-align: left;
        margin-bottom: 45em;
        margin-top: 0.8rem;
        margin-right: 40em;

        width: 25%;
    }

    .clock img {
        width: 4rem;
    }

    img {
        display: flex;
        margin: auto 4em;
        padding-bottom: 1em;
        width: 2rem;
    }

    .time {
        letter-spacing: 0.05em;
        font-size: 1rem;
    }

    .date {
        letter-spacing: 0.1em;
        font-size: 0.75rem;
    }
</style>