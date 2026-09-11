/*
  COLOQUE SEUS LINKS AQUI.
  Substitua os valores "#" pelos links reais.
*/
const LINKS = {
  conteudo: "#",
  whatsapp: "#",
  instagram: "#",
  vip: "#"
};

document.querySelectorAll("[data-link]").forEach((button) => {
  const key = button.dataset.link;
  const url = LINKS[key];

  if (url && url !== "#") {
    button.href = url;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
  } else {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      showToast("Link ainda não configurado.");
    });
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}
