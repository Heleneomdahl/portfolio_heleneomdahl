//curser
const cc = document.getElementById("cursorCircle");

// Følg musen
window.addEventListener("mousemove", (e) => {
  cc.style.left = `${e.clientX}px`;
  cc.style.top = `${e.clientY}px`;
});

// Klik-feedback
window.addEventListener("mousedown", () => cc.classList.add("click"));
window.addEventListener("mouseup", () => cc.classList.remove("click"));

// Skift farve når man er over klikbare elementer
const hoverables = document.querySelectorAll('a, button, [role="button"], input[type="submit"], .video h2, .uddanliste li, .card');
hoverables.forEach((el) => {
  el.addEventListener("mouseenter", () => document.body.setAttribute("data-cursor", "hover"));
  el.addEventListener("mouseleave", () => document.body.removeAttribute("data-cursor"));
});
const videoContainers = document.querySelectorAll(".video");

videoContainers.forEach((container) => {
  const video = container.querySelector("video");

  container.addEventListener("mouseenter", () => {
    video.style.display = "block";
    video.play();
  });

  container.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
    video.style.display = "none";
  });
});

//tilbage til toppen
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//video
const videos = document.querySelectorAll(".section_3 .video");

videos.forEach((videoDiv) => {
  const h2 = videoDiv.querySelector("h2");
  const video = videoDiv.querySelector("video");

  h2.addEventListener("click", () => {
    // Luk alle andre videoer
    videos.forEach((v) => {
      const vid = v.querySelector("video");
      v.classList.remove("active");
      vid.pause();
      vid.currentTime = 0;
    });

    // Toggle denne
    if (!videoDiv.classList.contains("active")) {
      videoDiv.classList.add("active");

      // Sørg for at videoen starter med det samme
      video.muted = true; // vigtigt for mobil autoplay
      video.play().catch((err) => {
        console.log("Video kunne ikke starte:", err);
      });
    }
  });
});

//uddannelse
document.querySelectorAll(".uddanliste li").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".uddanliste li.active").forEach((open) => {
      if (open !== item) open.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});
