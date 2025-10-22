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
       <div class = "animations-overlay">
        <Animations />
      </div>


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
    .contact-container {
    max-width: 600px;
    margin: 5rem auto;
    padding: 2rem;
    border: 2px solid white;
    border-radius: 20px;
    text-align: center;
    color: white;
    }

    h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    }

    .intro {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.8;
    }

    .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    }

    .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    }

    label {
    margin-bottom: 0.5rem;
    font-weight: bold;
    }

    input,
    textarea {
    width: 100%;
    padding: 0.8rem;
    border-radius: 8px;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    }

    input:focus,
    textarea:focus {
    outline: 2px solid white;
    }

    button {
    background-color: white;
    color: black;
    font-weight: bold;
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    }

    button:hover {
    background-color: rgba(255, 255, 255, 0.8);
    }

    .thank-you {
    margin-top: 2rem;
    color: rgb(196, 144, 238);
    font-size: 1.2rem;
    font-weight: bold;
    }
</style>