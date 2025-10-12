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
if (window.innerWidth <= 800) {
  const videos = document.querySelectorAll(".section_3 .video");

  videos.forEach((videoDiv) => {
    const h2 = videoDiv.querySelector("h2");

    h2.addEventListener("click", () => {
      videoDiv.classList.toggle("active"); // toggler video visning
    });
  });
}

//uddannelse
document.querySelectorAll(".uddanliste li").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".uddanliste li.active").forEach((open) => {
      if (open !== item) open.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});
