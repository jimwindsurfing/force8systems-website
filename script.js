// Small progressive enhancement: keep the copyright year current.
document.getElementById("year").textContent = new Date().getFullYear();

// If the video file has not yet been added, keep the poster/fallback visible.
const heroVideo = document.querySelector(".hero-video");
const videoFallback = document.querySelector(".video-fallback");
heroVideo.addEventListener("error", () => {
  videoFallback.style.display = "flex";
});
heroVideo.addEventListener("loadeddata", () => {
  videoFallback.style.display = "none";
});
