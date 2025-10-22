<script setup>
  import LoadingPage from './components/LoadingPage.vue'
  import LandingPage from './components/LandingPage.vue'
  import About from './components/About.vue'
  import Animations from './components/animations.vue'
  import Projects from '../src/pages/Projects.vue'
  import Contact from '../src/pages/Contact.vue'
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
    const projectsSection = document.getElementById("projects")
    if (!aboutSection || !projectsSection) return

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
        <Animations />

      <section id="landing" :style="{ opacity: landingOpacity, transition: 'opacity 0.3s linear' }">
        <LandingPage />
      </section>

      <section id="about">
        <About />
      </section>

      <section id = "projects">
        <Projects />
      </section>

      <section id = "contact">
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
    position: sticky;
    top: 0;
    z-index: 1002;
  }

  #landing {
    z-index: 100;
  }

  #nav {
    margin-right: 25rem;
    position: absolute;
    right: 0;
    z-index: 1001;
  }

  #about {
    transform: translateX(75%) translateY(30%);
    margin-bottom: 10rem;
    z-index: 100;
  }

  #projects {
    z-index: 105;
  }

  #contact {
    z-index: 106;
  }

  html {
    scroll-behavior: smooth;
  }

  section {
    min-height: 95vh;
  }

  footer {
    z-index: 100;
  }
</style>
