<script setup>
import { ref, onMounted } from 'vue';

const currentTime = ref('');
const currentDate = ref('');
const activeSection = ref('projects'); // default section

function updateTimeAndDate() {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  currentDate.value = now.toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' });
}

function setActive(section) {
  activeSection.value = section;
}

onMounted(() => {
  updateTimeAndDate();
  setInterval(updateTimeAndDate, 60000); // Update every minute
});
</script>

<template>
  <nav class="navbar">
    <a href="#" class="brand">Motheo Morena</a>
    <ul class="nav-links">
      <li>
        <a href="#projects"
           :class="{ active: activeSection === 'projects' }"
           @click="setActive('projects')">
           Projects
        </a>
      </li>
      <li>
        <a href="#contact"
           :class="{ active: activeSection === 'contact' }"
           @click="setActive('contact')">
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
    background-color: rgba(0, 0, 0, 0.569);
  }

  .brand {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: white;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    position: relative;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 3px solid transparent;
    transition: all 0.3s ease;
  }

  /* Hover glow */
  .nav-links a:hover {
    color: #a960fd8f;
  }

  /* Active glowing border (top, left, right) */
  .nav-links a.active {
    border-top: 3px solid #ffffff;
    border-left: 3px solid #ffffff;
    border-right: 3px solid #ffffff;
    border-radius: 8px 8px 0 0;
  }
</style>