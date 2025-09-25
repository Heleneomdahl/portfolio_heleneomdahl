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
