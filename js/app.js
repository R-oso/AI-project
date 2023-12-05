document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector(".h1");
  const video = document.querySelector(".video");

  h1.addEventListener("click", function () {
    h1.style.display = "none";
    video.style.display = "block";
    video.play();
  });

  if (video.style.display != "none") {
    createPopUp();
  }
});

const createPopUp = () => {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
  <div class="popup-title">  
   <span>Hey...</span> 
   <button id="closePopup">&times;</button>
  </div>

  <div class="popup-content">
    <img src="/Pixelated.jpeg" alt="Windows Image" />
    <p>I have something to tell you...</p>
  </div>
`;
  document.body.appendChild(popup);

  // Show the popup after a delay (e.g., 2 seconds)
  setTimeout(function () {
    popup.style.display = "block";
  }, 2000);

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      hidePopup();
    }
  });

  const closePopup = document.getElementById("closePopup");
  closePopup.addEventListener("click", hidePopup);
};

const hidePopup = () => {
  const popup = document.querySelector(".popup");
  popup.style.display = "none";
};
