// Function to Reveal Love Letter
function revealLoveLetter() {
    document.querySelector(".love-message").classList.remove("hidden");
}

// Floating Hearts Effect
document.addEventListener("DOMContentLoaded", function () {
    createHearts();
});

function createHearts() {
    const container = document.querySelector(".hearts-container");

    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        container.appendChild(heart);
    }
}
