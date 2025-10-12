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

// === VIDEOER ===
const videoContainers = document.querySelectorAll(".section_3 .video");

videoContainers.forEach((container) => {
  const h2 = container.querySelector("h2");
  const video = container.querySelector("video");

  // Sikr inline-afspilning
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  video.playsInline = true;
  video.muted = true;
  video.loop = true;

  // Desktop: hover
  container.addEventListener("mouseenter", () => {
    if (window.innerWidth > 800) {
      video.style.display = "block";
      video.play();
    }
  });
  container.addEventListener("mouseleave", () => {
    if (window.innerWidth > 800) {
      video.pause();
      video.currentTime = 0;
      video.style.display = "none";
    }
  });

  // Mobil: klik på h2
  h2.addEventListener("click", () => {
    if (window.innerWidth <= 800) {
      // Luk alle andre
      videoContainers.forEach((c) => {
        const v = c.querySelector("video");
        c.classList.remove("active");
        v.pause();
        v.currentTime = 0;
      });

      // Toggle denne
      if (!container.classList.contains("active")) {
        container.classList.add("active");
        video.play().catch(() => {
          video.muted = true;
          video.play();
        });
      }
    }
  });
});

// === TILBAGE TIL TOPPEN ===
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === UDDANNELSESLISTE ===
const items = document.querySelectorAll(".uddanliste li");

items.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      items.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    }
  });
});
