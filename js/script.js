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
