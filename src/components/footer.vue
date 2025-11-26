<template>
  <div class="socials">
    <a href="https://github.com" target="_blank">
      <img id="github" src="../assets/github.png" alt="GitHub Logo"/>
    </a>
  </div>
</template>

<style scoped>
    .socials {
        position: fixed;        /* stick to viewport */
        top: 50%;               /* move to middle vertically */
        right: 1rem;            /* push to the right side */
        transform: translateY(-50%); /* adjust so it's perfectly centered */
        
        display: flex;
        flex-direction: column; /* stack icons vertically */
        gap: 1rem;              /* spacing between icons */
    }

    .socials img {
        width: 2rem;
        cursor: pointer;
        transition: transform 0.2s;
    }

    .socials img:hover {
        transform: scale(1.2); /* little zoom effect */
    }
</style>
