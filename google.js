// Mostrar botão ao rolar
const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
  btnTopo.style.display =
    window.scrollY > 300 ? "block" : "none";
});

// Voltar ao topo com rolagem suave
btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
