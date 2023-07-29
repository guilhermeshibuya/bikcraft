// ATIVAR LINKS DO MENU
const links = document.querySelectorAll(".header__menu a");

if (links) {
  links.forEach((link) => {
    if (location.href.includes(link.href)) {
      link.classList.add("active");
    }
  });
}

// ATIVAR ITENS DO ORÇAMENTO
const params = new URLSearchParams(location.search);

params.forEach((param) => {
  const element = document.getElementById(param);
  if (element) element.checked = true;
});

// PERGUNTAS FREQUENTES
const questions = document.querySelectorAll(".questions__list button");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const controls = question.getAttribute("aria-controls");
    const answer = document.getElementById(controls);

    question.ariaExpanded === "true"
      ? (question.ariaExpanded = "false")
      : (question.ariaExpanded = "true");

    answer.classList.toggle("active");
  });
});

// GALERIA DE BICICLETAS
const gallery = document.querySelectorAll(".bike__imgs img");
const galleryContainer = document.querySelector(".bike__imgs");

gallery.forEach((img) => {
  img.addEventListener("click", () => {
    if (matchMedia("(min-width: 950px)").matches) galleryContainer.prepend(img);
  });
});
