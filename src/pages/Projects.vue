<template>
  <h1 id="top">These are some of my Projects</h1>

  <!-- GRID PROJECTS -->
  <div class="grid-projects">
    <section class="Comic" @click="scrollTo('singleComic')">
      <p id="image">
        <img src="@/assets/Comic.png" alt="Comic Cover" />
      </p>
      <p class="caption">Comic</p>
    </section>

    <section class="cpp" @click="scrollTo('singleCpp')">
      <p id="image">
        <img src="@/assets/c++.jpeg" alt="Picture of C++ code" />
      </p>
      <p class="caption">C++</p>
    </section>

    <section class="javascript" @click="scrollTo('singleJS')">
      <p id="image">
        <img src="@/assets/Tic-Tac-Toe/game.png" alt="Picture of Tic Tac Toe game" />
      </p>
      <p class="caption">JavaScript</p>
    </section>

    <section class="more">
      <p>...</p>
    </section>
  </div>

  <!-- SINGLE PROJECTS -->
  <div class="single-projects">
    <section id="singleComic" ref="singleComic">
      <h2>Comic</h2>
      <video
        src="@/assets/sample.mp4"
        width="900"
        height="540"
        autoplay
        muted
        controls
      >
        Your browser does not support the video tag.
      </video>
      <a href="#top" title="Back to Top of Projects">← Back</a>
    </section>

    <section id="singleCpp" ref="singleCpp">
      <h2>C++ Project</h2>
      <video
        src="@/assets/sample.mp4"
        width="900"
        height="540"
        autoplay
        muted
        controls
      >
        Your browser does not support the video tag.
      </video>
      <a href="#top" title="Back to Top of Projects">← Back</a>
    </section>

    <section id="singleJS" ref="singleJS">
      <h2>JavaScript Game</h2>
      <video
        src="@/assets/Tic-Tac-Toe/game.mp4"
        width="900"
        height="540"
        autoplay
        muted
        controls
      >
        Your browser does not support the video tag.
      </video>
      <div class="links">
        <a href="#top" title="Back to Top of Projects">← Back</a>
        <a href="@/assets/Tic-Tac-Toe/index.html" target="_blank" title="Play the game here">Play it Here</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// refs for your single project sections
const singleComic = ref(null);
const singleCpp = ref(null);
const singleJS = ref(null);

function scrollTo(project) {
  let sectionRef;
  if (project === 'singleComic') sectionRef = singleComic.value;
  else if (project === 'singleCpp') sectionRef = singleCpp.value;
  else if (project === 'singleJS') sectionRef = singleJS.value;

  if (sectionRef) {
    // smooth scroll
    sectionRef.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // add highlight effect
    sectionRef.classList.add('highlight');
    setTimeout(() => sectionRef.classList.remove('highlight'), 1500);
  }
}
</script>

<style scoped>
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* --- GRID SECTION --- */
.grid-projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
  justify-items: center;
  align-items: start;
  padding: 3rem 2rem;
  margin-bottom: 6rem;
}

.grid-projects section {
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-projects section:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.15);
}

#image {
  border: 2px solid white;
  padding: 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.05);
}

img {
  max-width: 25vw;
  max-height: 25vh;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
}

.caption {
  font-weight: bold;
  margin-top: 1rem;
}

h1 {
  text-align: center;
  margin: 3rem 0 2rem;
}

/* --- SINGLE PROJECTS SECTION --- */
.single-projects {
  display: flex;
  flex-direction: column;
  gap: 10rem;
  align-items: center;
  justify-content: center;
  padding-bottom: 15zi-rem;
}

.single-projects section {
  text-align: center;
  transition: all 0.3s ease;
}

.single-projects h2 {
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: left;
}

.single-projects video {
  border: 2px solid white;
  border-radius: 15px;
  margin-bottom: 1.5rem;
  max-width: 100%;
  height: auto;
}

.single-projects a {
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
  margin-right: 2rem;
}

.single-projects .links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

/* Highlight effect when scrolling to section */
.single-projects section.highlight {
  border: 3px solid #ffcc00;
  box-shadow: 0 0 20px #ffcc00;
}

.more > p {
  font-size: 5em;
}
</style>