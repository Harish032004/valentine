// script.js

function startMusic() {
    var audio = document.getElementById("background-music");
    audio.play();
    alert("Enjoy the surprise, Priya! 💖🎶");
  }
  


  document.addEventListener("DOMContentLoaded", () => {
    const heartWrapper = document.querySelector(".floating-heart-wrapper");

    function createFloatingHeart() {
        const heart = document.createElement("span");
        heart.classList.add("floating-name");
        heart.textContent = "Harish ❤️ Priya";

        // Random position across the entire page width
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 4 + 4 + "s"; // 4s - 8s duration

        heartWrapper.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    setInterval(createFloatingHeart, 1500); // Generate a new floating name every 1.5s
});
