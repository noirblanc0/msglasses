if (window.matchMedia("(pointer: fine)").matches) {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  const mainThumb = document.querySelector(".main");
  const scrollTopBtn = document.querySelector(".scroll-top");

  mainThumb.addEventListener("mouseenter", () => cursor.classList.add("active"));
  mainThumb.addEventListener("mouseleave", () => cursor.classList.remove("active"));

  scrollTopBtn.addEventListener("mouseenter", () => cursor.classList.add("active"));
  scrollTopBtn.addEventListener("mouseleave", () => cursor.classList.remove("active"));
}
