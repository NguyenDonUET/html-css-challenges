// write your JavaScript here
const accordionItems = document.querySelectorAll(".accordion-header");

accordionItems.forEach((header) => {
  header.addEventListener("click", (e) => {
    const accordion = e.currentTarget;
    const content = accordion.nextElementSibling;
    content.classList.toggle("active");
  });
});
