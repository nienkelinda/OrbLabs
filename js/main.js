// Menu-knop voor mobiel
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => links.classList.toggle("open"));
}

// Randomize orb logo
const orb = document.querySelector(".orb");
if (orb) {
  const logos = [
    "./images/orbcorp-logo-normaal.png",
    "./images/orbcorp-logo-aankijkend.png"
  ];

  const setRandomOrbLogo = () => {
    const randomLogo = logos[Math.floor(Math.random() * logos.length)];
    orb.style.backgroundImage = `url("${randomLogo}")`;
  };

  setRandomOrbLogo();
  setInterval(setRandomOrbLogo, 2500);
}
