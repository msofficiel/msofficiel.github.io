// Bordure du header au scroll
const header = document.getElementById("top");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Filtre des projets
const buttons = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const f = btn.dataset.filter;
    buttons.forEach((b) => {
      const on = b === btn;
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-pressed", on);
    });
    projects.forEach((p) => {
      p.hidden = f !== "all" && !p.dataset.cat.split(" ").includes(f);
    });
  });
});
