<script setup>
import LoadingPage from './components/LoadingPage.vue'
import LandingPage from './components/LandingPage.vue'
import About from './components/About.vue'
import Nav from './components/nav.vue'
import DateTime from './components/date-time.vue'
import Footer from './components/footer.vue'
import { ref, onMounted } from 'vue'

const loading = ref(true)
const landingOpacity = ref(1) // fade control
const currentSection = ref('landing') // track current section

onMounted(async () => {
  await initialiseApp()
  loading.value = false

  // add scroll event for fading
  window.addEventListener('scroll', handleScroll)
})

async function initialiseApp() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("App initialised ✅")
      resolve()
    }, 2000)
  })
}

function handleScroll() {
  const aboutSection = document.getElementById("about")
  if (!aboutSection) return

  const rect = aboutSection.getBoundingClientRect()
  const windowHeight = window.innerHeight

  // When About is coming into view (top between bottom and mid of viewport)
  if (rect.top < windowHeight && rect.top > 0) {
    // map rect.top to opacity (1 → 0)
    landingOpacity.value = Math.max(0, rect.top / windowHeight)
  } else if (rect.top <= 0) {
    landingOpacity.value = 0 // fully faded once About fills screen
  } else {
    landingOpacity.value = 1 // fully visible at top
  }
}
</script>

<template>
  <div>
    <!-- Loading screen -->
    <LoadingPage v-if="loading" />

    <!-- Main content -->
    <div v-else>
      <!-- Sticky / top navigation -->
      <header class="header-bar">
        <p id="date"><DateTime /></p>
        <p id="nav"><Nav /></p>
      </header>

      <!-- Sections stacked like HTML -->
      <section id="landing" :style="{ opacity: landingOpacity, transition: 'opacity 0.3s linear' }">
        <LandingPage />
      </section>

      <section id="about">
        <About />
      </section>



      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>

<style scoped>
.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

#nav {
  margin-right: 25rem;
  position: absolute;
  right: 0;
}

#about {
  transform: translateX(75%) translateY(30%);
}

html {
  scroll-behavior: smooth;
}

section {
  min-height: 95vh;
}
</style>
