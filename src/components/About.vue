<template>
  <div class="Me">
    <p id="image"></p>

    <div class="About">
      <h1> Hi! </h1>
      <p> I specialise in bringing ideas to life: blending clean logic, bold visuals, and unexpected motion into software experiences that spark curiosity and emotion. My toolkit spans front- and back-end frameworks, JavaScript games, multimedia integrations, and immersive UI design.</p>
      <p> I’m always looking for collaborators who dare to push the limits of what’s expected — whether we’re scripting a dynamic web experience, crafting a mini-game, or animating an idea from concept to screen. </p>
      <p> Let’s connect and create something memorable together. </p>
    </div>
  </div>

    <div class = "skills">
      <h1 id = "heading"> SKILLS </h1> 
      <h1></h1>
      <h1></h1>
      <div id = "cpp">
        <span id="cpp-image"></span>
        <img src="../assets/cpp.jpg"/>
        <p> C++ <br/> Expert </p>
      </div>
      <div id = "js">
        <span id = "js-image"></span>
        <img src = "../assets/js.jpeg"/>
        <p> Javascript <br/> Intermediate </p>
      </div>
      <div id = "express">
        <span id = "express-image"></span>
        <img src = "../assets/express.jpeg"/>
        <p> Express JS <br/> Expert </p>
      </div>
      <div id = "vue">
        <span id="vue-image"></span>
        <img src = "../assets/vue.png"/>
        <p> Vue JS <br /> Expert </p>
      </div>
      <div id = "html">
        <span id = "html-image"></span>
        <img src = "../assets/html.png"/>
        <p> HTML <br /> Expert </p>
      </div>
      <div id = "gdscript">
        <span id = "gdscript-image"></span>
        <img src = "../assets/godot.png"/>
        <p> GDScript <br /> Beginner </p>
      </div>
    </div>

</template>

<style scoped>
  heading {
    text-align: center;
    font-weight: bold;
  }

  .Me {
    display: flex;
    gap: 2rem;
    padding: 20px;
    transform: translateX(-70%);
    background-color: rgba(0, 0, 0, 0.602);
  }

  #image {
    border: 2px solid black;
    padding: 20px;
    border-radius: 25px;
    width: 55rem;
    height: 30rem;
    background-image: url('../assets/me.jpg');
    background-size: 35rem 40rem;
    background-repeat: no-repeat;
    background-position: center;
  }

  h1 {
    text-align: center;
  }

  .About {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    max-width: 30rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  img {
    max-width: 12vw;
  }
  /* Skills Grid Styling */
  .skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1.2rem;
    border: 2px solid white;
    border-radius: 15px;
    margin-top: 0.5rem;
    margin-right: 5rem;
    transform: translateX(-75%)  translateY(17%);
  }

  /* Individual skill box */
  .skills div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .skills span {
    width: 1.8rem;
    height: 1.2rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  /* Responsive: collapse to 2 columns on smaller screens */
  @media (max-width: 768px) {
    .skills {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Responsive: 1 column on mobile */
  @media (max-width: 480px) {
    .skills {
      grid-template-columns: 1fr;
    }
  }
</style>
