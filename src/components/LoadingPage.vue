<template>
  <section id="pendulum">
    <div class="pendulum">
      <div class="pendulum-container">
        <div class="ball first"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball last"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
    #pendulum {
    position: relative;
    width: 30vw;
    height: 50vh;
    margin-left: 25vw;
    overflow: hidden;
    }

    #pendulum::before {
    content: "";
    position: absolute;
    inset: 0; /* fills the container */
    padding: 2px; /* border thickness */
    border-radius: 5px;
    background: linear-gradient(90deg, rgb(255, 255, 255), rgb(155, 105, 190));
    background-size: 300% 300%;
    animation: borderMove 4s linear infinite;
    -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
    mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude; /* hide fill, show only border */
    }

    .pendulum {
        position: absolute;
        width: 220px;
        height: 180px;
        top: 50%;
        left: 50%;
        border-radius: 5%;
        align-items: center;
        border-top: 15px solid #6836ad;
        transform: translate(-50%, -50%);
    }

    .ball {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-color: #420093;
        position: relative;
        transform-origin: 50% -300%;
    }

    .ball::before {
        content: '';
        width: 2px;
        height: 120px;
        background-color: #fffeff;
        left: 18px;
        top: -120px;
        position: absolute;
    }

    .ball.first {
        animation: firstball .9s alternate ease-in infinite;
    }

    @keyframes firstball {
        0% {
            transform: rotate(35deg);
        }
        50% {
            transform: rotate(0deg);
        }
    }

    .ball.last {
        animation: lastball .9s alternate ease-out infinite;
    }

       @keyframes lastball {
        50% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-35deg);
        }
    }

    @keyframes borderMove {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
    }

    .pendulum-container {
        display: flex;
        padding: 120px 0 0 10px;
        position: absolute;
        flex: 1;
    }

</style>
