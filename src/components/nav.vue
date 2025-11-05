<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')
const currentDate = ref('')
const activeSection = ref('landing') // default active section

function updateTimeAndDate() {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  currentDate.value = now.toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' })
}

// Smooth scroll when clicking a nav item
function scrollToSection(sectionId) {
  const section = document.querySelector(`#${sectionId}`)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeSection.value = sectionId
  }
}

// look at sections to update highlighted link
function observeSections() {
  const sections = document.querySelectorAll('section[id]')
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Active section detected:', entry.target.id) // debug
          activeSection.value = entry.target.id
        }
      })
    },
    {
      root: null,
      rootMargin: '-80px 0px 0px 0px', // offset for navbar height
      threshold: 0.2 // 20% visible triggers active
    }
  )
  sections.forEach(section => observer.observe(section))
  return observer
}

let observer

onMounted(() => {
  updateTimeAndDate()
  setInterval(updateTimeAndDate, 60000) // update clock every minute
  observer = observeSections()
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li>
        <a 
          href="#landing" 
          class="brand"
          :class="{ active: activeSection === 'landing'}"
          @click.prevent="scrollToSection('landing')"
        >
          ◁ 
        </a>    
      </li>
      <li>
        <a
          href="#about"
          :class="{ active: activeSection === 'about' }"
          @click.prevent="scrollToSection('about')"
        >
          Motheo M
        </a>
      </li>
      <li>
        <a
          href="#projects"
          :class="{ active: activeSection === 'projects' }"
          @click.prevent="scrollToSection('projects')"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          :class="{ active: activeSection === 'contact' }"
          @click.prevent="scrollToSection('contact')"
        >
          Contact
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  display: flex;
  gap: 2rem;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.233);
  padding: 0.8rem 2rem;
  z-index: 1000;

  animation: fadeSlideIn 0.8s ease forwards;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
}

.brand:hover {
  color: #a960fd; /* subtle color glow */
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-links a {
  position: relative;
  text-decoration: none;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: color 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
}

.nav-links a:hover {
  color: #a960fd;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.nav-links a.active {
  border-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
