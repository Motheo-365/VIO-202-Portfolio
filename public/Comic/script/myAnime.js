window.addEventListener("DOMContentLoaded", () => {
  const panel2 = document.querySelector("#panel_2");
  const beeps = document.querySelectorAll(".beep");
  const huh = document.querySelector(".huhhh");

  if (!panel2 || !beeps.length || !huh) return;

  // When user hovers over panel_2
  panel2.addEventListener("mouseenter", () => {
    // Reset huh to invisible
    huh.style.opacity = "0";

    // Wait for the last beep to finish
    beeps[beeps.length - 1].addEventListener("animationend", () => {
      huh.style.opacity = "1"; // reveal huhhh text

      const text = huh.textContent.trim();
      huh.textContent = "";
      const chars = text.split("").map(char => {
        const span = document.createElement("span");
        span.textContent = char;
        huh.appendChild(span);
        return span;
      });

      // Animate the characters with anime.js
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
    }, { once: true }); // ensures it only runs once per hover
  });
});