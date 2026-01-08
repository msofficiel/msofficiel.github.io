// Sélectionner tous les éléments à animer
const elements = document.querySelectorAll(
  ".info-box, .skill-card, .about, .hero"
);

// Cacher les éléments au départ
elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.6s ease-out";
});

// Détecter le scroll
window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// Afficher le hero au chargement
window.addEventListener("load", () => {
  document.querySelector(".hero").style.opacity = "1";
  document.querySelector(".hero").style.transform = "translateY(0)";
});
