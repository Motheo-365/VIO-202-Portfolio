<template>
  <div class="Me">
    <p id="image"></p>

    <div class="About">
      <h1> Hi! </h1>
      <h2> I'm Motheo, a multimedia student at the Univeristy of Pretoria in South Africa. I have a passion for creating innovative solutions that make a difference.
      With some foundation in computer science and a keen eye for detail, I strive to deliver high-quality software that exceeds expectations. </h2>
      <h2> Let's connect and explore how we can collaborate on exciting projects! </h2>
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
</style>
