const cursor = document.querySelector(".cursor");

// Track mouse position
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Hover effect for the main thumbnail
const mainThumb = document.querySelector(".chapter-thumbnails .main");

mainThumb.addEventListener("mouseenter", () => {
  cursor.classList.add("active");
});

mainThumb.addEventListener("mouseleave", () => {
  cursor.classList.remove("active");
});

// Optional: click action
mainThumb.addEventListener("click", () => {
  alert("Main thumbnail clicked! You can navigate to the next chapter here.");
});
