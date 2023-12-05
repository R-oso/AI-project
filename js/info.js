document.addEventListener("mousemove", (e) => {
  const allText = document.querySelectorAll(".section p, .section h1, .section h2, .section h3, .section h4, .section h5, .section h6, .section button");
  allText.forEach((text) => {
    const x = (window.innerWidth / 2 - e.pageX) / 70;
    const y = (window.innerHeight / 2 - e.pageY) / 70;
    text.style.transform = `translate(${x}px, ${y}px) rotate(${x / 5}deg) scale(${1 + y / 250})`;
    text.style.opacity = 1 - Math.abs(x / window.innerWidth) - Math.abs(y / window.innerHeight);
  });
});

window.addEventListener("beforeunload", function () {
  const video = document.querySelector(".video");
  video.pause();
});
