/* ===============================
   Scroll to top (ALL devices)
   =============================== */
const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  scrollTopBtn.classList.toggle("show", window.scrollY > 50);
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ===============================
   Thumbnail click
   =============================== */
document.querySelector(".main").addEventListener("click", () => {
  window.location.href = "cards.html";
});

/* ===============================
   Custom cursor (DESKTOP ONLY)
   =============================== */
if (window.matchMedia("(pointer: fine)").matches) {

  const cursor = document.querySelector(".cursor");
  const mainThumb = document.querySelector(".main");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  mainThumb.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });

  mainThumb.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });

  scrollTopBtn.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });

  scrollTopBtn.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });
}
