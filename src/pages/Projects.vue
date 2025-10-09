<template>
  <h1 id = "top">These are some of my Projects</h1>
  <div class="grid-projects">
    <section class="Comic">
      <p id="image">
        <a href="#singleComic"><img src="../assets/Comic.png" alt="Comic Cover" /></a>
      </p>
      <p class="caption">Comic</p>
    </section>

    <section class="cpp">
      <p id="image">
        <a href="#singleCpp"><img src="../assets/c++.jpeg" alt="Picture of C++ code" /></a>
      </p>
      <p class="caption">C++</p>
    </section>

    <section class="javascript">
      <p id="image">
        <a href="#singleJS"><p> Picture of my Javascript Game </p></a>
      </p>
      <p class="caption">JavaScript</p>
    </section>

    <section class="more">
      <p>...</p>
    </section>
  </div>

  <div class="single-projects">
    <section id="singleComic">
      <h2>Comic</h2>
      <video
        src="../assets/sample.mp4"
        width="900px"
        height="540px"
        autoplay
        controls
      >
        <p>A simple Sample Video</p>
      </video>
      <a href="#top" alt = "Back to Top of Projects">← Back</a>

    </section>

    <section id="singleCpp">
      <h2>C++ Project</h2>
      <video
        src="../assets/sample.mp4"
        width="900px"
        height="540px"
        autoplay
        controls
      >
        <p>A simple Sample Video</p>
      </video>
      <a href="#top" alt = "Back to Top of Projects">← Back</a>
    </section>

    <section id="singleJS">
      <h2>JavaScript Game</h2>
      <video
        src="../assets/sample.mp4"
        width="900px"
        height="540px"
        autoplay
        controls
      >
        <p>A simple Sample Video</p>
      </video>
      <a href="#top" alt = "Back to Top of Projects">← Back</a>
    </section>
  </div>
</template>

<style scoped>
    /* --- GRID SECTION --- */
    .grid-projects {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        gap: 3rem;
        justify-items: center;
        align-items: start;
        padding: 3rem 2rem;
        margin-bottom: 6rem; /* spacing before single projects */
    }

    .grid-projects section {
        text-align: center;
        border-radius: 20px;
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
        gap: 10rem; /* even spacing between each single project */
        align-items: center;
        justify-content: center;
        padding-bottom: 15rem;
    }

    .single-projects section {
        text-align: center;
    }

    .single-projects h2 {
        margin-bottom: 2rem;
        font-size: 2rem;
        text-align: left;
    }

    .single-projects video {
        border: 2px solid white;
        border-radius: 15px;
        margin-bottom: 3rem;
    }

    .single-projects a {
        color: white;
        text-decoration: none;
        font-size: 1.8rem;
    }

    .more > p {
        font-size: 5em;
    }
</style>
