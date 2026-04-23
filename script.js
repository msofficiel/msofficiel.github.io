document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     1️⃣ ACTIVER CURSEUR CUSTOM
  ========================== */
/*  document.body.classList.add("custom-cursor");

  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursorRing");

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
  });
*/
  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;

    requestAnimationFrame(animateRing);
  }

  animateRing();

  /* =========================
     2️⃣ EFFET HOVER PREMIUM
  ========================== */

  const hoverElements = document.querySelectorAll("a, button");

  hoverElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
      ring.style.transform += " scale(1.5)";
      ring.style.opacity = "0.8";
    });

    el.addEventListener("mouseleave", () => {
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      ring.style.opacity = "0.5";
    });
  });

  /* =========================
     3️⃣ ANIMATION SCROLL PRO
  ========================== */

  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);

  revealOnScroll(); // Lancer au chargement

});

