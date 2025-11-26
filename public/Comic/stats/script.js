// script.js
document.addEventListener("DOMContentLoaded", () => {
    /* ---------- 1. Enable Sound Button ---------- */
    const enableBtn    = document.getElementById("enable-sound");
    const scene1       = document.getElementById("scene_1");
    const typingVideo  = document.getElementById("typing_on_keyboard");
    const beepVideo    = document.getElementById("beep_beep");

    // Require a user click before unmuting videos (browser policy)
    if (enableBtn) {
        enableBtn.addEventListener("click", () => {
            [scene1, typingVideo, beepVideo].forEach(v => {
                if (!v) return;
                v.muted  = false;    // unmute
                v.volume = 0.8;      // set comfortable volume
            });
            enableBtn.style.display = "none"; // hide button once clicked
            console.log("Sound enabled for all videos");
        });
    }

    /* ---------- 2. Scene 1 hover/play/pause ---------- */
    let hoverTimer;
    if (scene1) {
        scene1.addEventListener("mouseenter", () => {
            hoverTimer = setTimeout(() => scene1.play(), 2000);
        });
        scene1.addEventListener("mouseleave", () => {
            clearTimeout(hoverTimer);
            scene1.pause();
        });
        scene1.addEventListener("click", () => {
            if (scene1.paused) {
                scene1.play();
                console.log("Video playing");
            } else {
                scene1.pause();
                console.log("Video paused");
            }
        });
    }

    /* ---------- 3. Stats hover reveal (Inale & Corporate) ---------- */
    const statsContainers = [
        document.querySelector("#stats_content"),
        document.querySelector("#stats_content_corporate")
    ];
    statsContainers.forEach(container => {
        if (!container) return;
        const statRows = container.querySelectorAll(".stat-row");
        statRows.forEach(row => {
            const icon  = row.querySelector(".stat-icon");
            const value = row.querySelector(".stat-value");

            value.classList.add("hidden-number");

            icon.addEventListener("mouseenter", () => {
                value.classList.remove("hidden-number");
                void value.offsetWidth; // restart animation
                value.classList.add("reveal-number");
            });

            icon.addEventListener("mouseleave", () => {
                value.classList.remove("reveal-number");
                value.classList.add("hidden-number");
            });
        });
    });

    /* ---------- 4. Typing on keyboard scene ---------- */
    let typingHoverTimer;
    if (typingVideo) {
        typingVideo.volume = 0.8; // set default volume

        typingVideo.addEventListener("mouseenter", () => {
            typingHoverTimer = setTimeout(() => typingVideo.play());
        });
        typingVideo.addEventListener("mouseleave", () => {
            clearTimeout(typingHoverTimer);
            typingVideo.pause();
        });
        typingVideo.addEventListener("click", () => {
            if (typingVideo.paused) {
                typingVideo.play();
                console.log("Typing video playing with sound");
            } else {
                typingVideo.pause();
                console.log("Typing video paused");
            }
        });
    }

    /* ---------- 5. Beep beep scene ---------- */
    let beepHoverTimer;
    if (beepVideo) {
        beepVideo.volume = 0.8; // set default volume

        beepVideo.addEventListener("mouseenter", () => {
            beepHoverTimer = setTimeout(() => beepVideo.play());
        });
        beepVideo.addEventListener("mouseleave", () => {
            clearTimeout(beepHoverTimer);
            beepVideo.pause();
        });
        beepVideo.addEventListener("click", () => {
            if (beepVideo.paused) {
                beepVideo.play();
                console.log("Beep video playing with sound");
            } else {
                beepVideo.pause();
                console.log("Beep video paused");
            }
        });
    }

    /* ---------- 6. Huhh video scene ---------- */
    const huhhVideo = document.getElementById("huhh");

    if (huhhVideo) {
        huhhVideo.volume = 0.8; // set default volume
        huhhVideo.addEventListener("hover", () => {
            if (huhhVideo.paused) {
                huhhVideo.play();
                console.log("Huhh video playing with sound");
            } else {
                huhhVideo.pause();
                console.log("Huhh video paused");
            }
        });
    }

    /* Haha video scene */
    const hahaVideo = document.getElementById("hahaha");
    if (hahaVideo) {
        hahaVideo.volume = 0.8;
        hahaVideo.addEventListener("hover", () => {
            if (hahaVideo.paused) {
                hahaVideo.play();
                console.log("Haha video playing with sound");
            } else {
                hahaVideo.pause();
                console.log("Haha video paused");
            }
        });
    }


    /* -------------- Last Scene -------------- */
    const lastScene = document.getElementById("final_scene");
    if (lastScene) {
        lastScene.volume = 0.8; // set default volume
        lastScene.addEventListener("hover", () => {
            if (lastScene.paused) {
                lastScene.play();
                console.log("Last scene video playing with sound");
            } else {
                lastScene.pause();
                console.log("Last scene video paused");
            }
        });
    }
});
