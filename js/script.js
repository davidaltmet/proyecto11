setTimeout(function () {
  const loadingOverlay = document.querySelector(".loading_overlay");
  loadingOverlay.style.display = "none";

  const section1Info = document.querySelector(".section1_info");
  section1Info.classList.add("efeecto_section1");
}, 1800);

window.addEventListener("scroll", function () {
  const texto = document.querySelector(".section2_title_paragrafhg");
  const imgenes = document.querySelectorAll(".info_img");

  function efectoScroll(elemento, efecto) {
    const distancia = window.innerHeight - elemento.getBoundingClientRect().top;
    if (distancia >= 100) {
      elemento.classList.add(efecto);
    }
  }
  efectoScroll(texto, "efecto_texto_scroll");
  imgenes.forEach((imagen) => {
    efectoScroll(imagen, "efecto_img_scroll");
  });
});

let barraMovil = document.querySelector(".barra_movil");
let icon_abrir = document.querySelector(".abrir");
let icon_cerrar = document.querySelector(".cerrar");
let contenedorLinks = document.querySelector(".lista");
let body = document.querySelector(".body");
let estado = false;

function toggleEfectos() {
  contenedorLinks.classList.toggle("efecto_nav_movil");
  body.classList.toggle("efecto_body");
  icon_abrir.style.display = estado ? "block" : "none";
  icon_cerrar.style.display = estado ? "none" : "block";
  estado = !estado;
}

barraMovil.addEventListener("click", toggleEfectos);
