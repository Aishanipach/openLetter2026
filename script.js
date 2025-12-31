// script.js
const envelope = document.getElementById("envelope");
const heading = document.getElementById("congrats-heading");
const resubText = document.querySelector(".resub-text");

const teaserText = document.querySelector(".teaser-text");

function shootConfetti() {
  // center of the screen
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });

  // small second burst for nicer effect
  confetti({
    particleCount: 80,
    spread: 100,
    origin: { y: 0.4 },
  });
}

envelope.addEventListener("click", () => {
  const isOpening = !envelope.classList.contains("open");
  envelope.classList.toggle("open");

  if (isOpening) {
    teaserText.classList.remove("show-teaser");
    teaserText.classList.add("hidden-teaser");

    heading.textContent = "CONGRATS!";
    heading.classList.remove("hidden-heading");
    heading.classList.add("show-heading");

    resubText.classList.remove("hidden-text");
    resubText.classList.add("show-text");
    shootConfetti();
  } else {
    teaserText.classList.remove("hidden-teaser");
    teaserText.classList.add("show-teaser");

    heading.classList.remove("show-heading");
    heading.classList.add("hidden-heading");
    resubText.classList.remove("show-text");
    resubText.classList.add("hidden-text");
  }
});
