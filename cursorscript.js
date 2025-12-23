// Enable custom cursor only on desktop (mouse devices)
if (window.matchMedia("(pointer: fine)").matches) {

  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  const mainThumb = document.querySelector(".chapter-thumbnails .main");
  const scrollTop = document.querySelector(".scroll-top");

  mainThumb.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });

  mainThumb.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });

  scrollTop.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });

  scrollTop.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });
}
