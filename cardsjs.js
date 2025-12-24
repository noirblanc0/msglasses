const cursor = document.querySelector(".cursor");
const envelope = document.querySelector(".envelope-container");
const envelopeImg = envelope.querySelector(".envelope");
const cards = document.querySelectorAll(".cards-container .card");

// Track mouse
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Cursor hover on envelope
envelope.addEventListener("mouseenter", () => cursor.classList.add("active"));
envelope.addEventListener("mouseleave", () => cursor.classList.remove("active"));

// Envelope click → shrink/expand
envelope.addEventListener("click", () => {
  envelope.classList.toggle("shrink");
});

// Envelope image hover swap
envelopeImg.addEventListener("mouseenter", () => {
  envelopeImg.src = envelopeImg.dataset.hover;
});
envelopeImg.addEventListener("mouseleave", () => {
  envelopeImg.src = "https://picsum.photos/id/100/180/320"; // original
});

// Card click → flip front/back
cards.forEach(card => {
  card.addEventListener("click", () => {
    if (card.classList.contains("opened")) {
      card.src = card.dataset.front;
      card.classList.remove("opened");
    } else {
      card.src = card.dataset.back;
      card.classList.add("opened");
    }
  });

  // Cursor hover on cards
  card.addEventListener("mouseenter", () => cursor.classList.add("active"));
  card.addEventListener("mouseleave", () => cursor.classList.remove("active"));
});
