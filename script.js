// Menu mobile
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Modal de vídeo
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");

function openVideo(src) {
  videoModal.style.display = "flex";
  if (src.includes("youtube")) {
    videoFrame.src = src + "?autoplay=1";
  } else {
    videoFrame.outerHTML = `<video id="videoFrame" src="${src}" controls autoplay style="width:100%; height:450px;"></video>`;
  }
}

function closeVideo() {
  videoModal.style.display = "none";
  videoFrame.src = "";
}


