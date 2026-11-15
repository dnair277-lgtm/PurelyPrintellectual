// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  })
);

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Order form -> opens a pre-filled email
const form = document.getElementById("order-form");
const note = document.getElementById("form-note");
form.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get("name") || "").trim();
  if (!name) {
    note.textContent = "Please add your name.";
    form.querySelector('[name="name"]').focus();
    return;
  }
  const to = data.get("to");
  const subject = `Order Request: ${data.get("item")} (${name})`;
  const body =
`Hi PurelyPrintellectual,

I'd like to order a custom piece.

Name: ${name}
Item: ${data.get("item")}

Details:
${data.get("details") || "(none yet)"}

Thanks!`;
  window.location.href =
    `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  note.textContent = `Opening your email app… If nothing happens, email ${to} directly.`;
});
