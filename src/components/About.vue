<template>
  <div class="About">
    <p id="image"></p>

    <div class="Me">
      <h1> Hi! </h1>
      <p> I specialise in bringing ideas to life: blending clean logic, bold visuals, and unexpected motion into software experiences that spark curiosity and emotion. My toolkit spans front- and back-end frameworks, JavaScript games, multimedia integrations, and immersive UI design.</p>
      <p> I’m always looking for collaborators who dare to push the limits of what’s expected — whether we’re scripting a dynamic web experience, crafting a mini-game, or animating an idea from concept to screen. </p>
      <p> Let’s connect and create something memorable together. </p>
    </div>
  </div>
</template>

<style scoped>
  .Me {
    display: flex;                /* put children side by side */
    gap: 2rem;                    /* spacing between image box & text */
    padding: 20px;
    transform: translateX(-75%);          /* move everything to the right a bit */
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
    text-align: left;  /* so text aligns neatly instead of centered */
    max-width: 30rem;
    }

    p{
      margin-bottom: 0.5rem;
    }
</style>
