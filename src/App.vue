<script setup>
import { ref, onMounted } from 'vue'
import LoadingPage from './components/LoadingPage.vue'
import LandingPage from './components/LandingPage.vue'
import About from './components/About.vue'
import Animations from './components/animations.vue'
import Projects from '../src/pages/Projects.vue'
import Contact from '../src/pages/Contact.vue'
import Nav from './components/nav.vue'
import DateTime from './components/date-time.vue'
import Footer from './components/footer.vue'

const loading = ref(true)
const landingOpacity = ref(1)

onMounted(async () => {
  await preloadAssets()
  loading.value = false
  window.addEventListener('scroll', handleScroll)
})

// ✅ Wait for images and components to load before continuing
async function preloadAssets() {
  const images = Array.from(document.images)
  const imagePromises = images.map(img => {
    if (img.complete) return Promise.resolve()
    return new Promise(resolve => {
      img.onload = resolve
      img.onerror = resolve
    })
  })

  await Promise.all([
    ...imagePromises,
    new Promise(resolve => setTimeout(resolve, 1500)) // fallback delay for slow assets
  ])

  console.log("All assets preloaded ✅")
}

function handleScroll() {
  const aboutSection = document.getElementById("about")
  if (!aboutSection) return

  const rect = aboutSection.getBoundingClientRect()
  const windowHeight = window.innerHeight

  if (rect.top < windowHeight && rect.top > 0) {
    landingOpacity.value = Math.max(0, rect.top / windowHeight)
  } else if (rect.top <= 0) {
    landingOpacity.value = 0
  } else {
    landingOpacity.value = 1
  }
}
</script>

<template>
  <div class >
    <!-- Show loading screen -->
    <LoadingPage v-if="loading" />

    <!-- Main app -->
    <div v-else class = "main">
      <header class="header-bar">
        <p id="date"><DateTime /></p>
        <p id="nav"><Nav /></p>
      </header>

      <div class="animations-overlay">
        <Animations />
      </div>

      <section id="landing" :style="{ opacity: landingOpacity, transition: 'opacity 0.3s linear' }">
        <LandingPage />
      </section>

      <section id="about">
        <div class = "about-wrapper">
          <About />
        </div>
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>

<style scoped>
  section, header, footer {
    position: relative; /* enables z-index */
    z-index: 1;         /* above animation */
  }

  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 0;
    z-index: 2;
  }

  #landing {
    z-index: 1;
  }

   .animations-overlay {
    pointer-events: none;
    position: fixed;
    inset: 0;
    z-index: 0;
  }

.main {
  margin: 0rem auto;
  max-width: 85%;
}

  #nav {
    margin-right: 25rem;
    right: 0;
  }

  #about {
    margin-bottom: 10rem;
    z-index: 1;
  }

  .about-wrapper {
    transform: translateX(75%) translateY(30%);
  }

  
  #projects {
    z-index:1;
    transform: translateY(12%);
  }

  #contact {
    z-index:1;
  }

  html {
    scroll-behavior: smooth;
  }

  section {
    min-height: 95vh;
  }

  footer {
    z-index: 1;
  }
</style>