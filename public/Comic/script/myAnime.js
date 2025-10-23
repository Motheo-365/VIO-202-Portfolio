window.addEventListener("load", () => {
  const beeps = document.querySelectorAll(".beep");
  const huh = document.querySelector(".huhhh");

  // Wait until the last beep animation ends
  beeps[beeps.length - 1].addEventListener("animationend", () => {
    // Reveal the text
    huh.style.opacity = "1";

    const text = huh.textContent.trim();
    huh.textContent = "";
    const chars = text.split("").map(char => {
      const span = document.createElement("span");
      span.textContent = char;
      huh.appendChild(span);
      return span;
    });

    // Bounce effect starts right after beeps are done
    anime({
      targets: chars,
      translateY: [
        { value: -40, duration: 600, easing: "easeOutExpo" },
        { value: 0, duration: 800, easing: "easeOutBounce" }
      ],
      delay: anime.stagger(100),
      loop: true,
      loopDelay: 1000
    });
  });
});