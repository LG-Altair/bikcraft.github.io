// ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarproduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarproduto);

// perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarpergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);

  console.log(resposta);
}

function eventoperguntas(pergunta) {
  pergunta.addEventListener("click", ativarpergunta);
}

perguntas.forEach(eventoperguntas);

// Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-img img");
const galeriacontainer = document.querySelector(".bicicleta-img");

function trocarimagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 100px)").matches;
  if (media) {
    galeriacontainer.prepend(img);
  }
}

function eventosgaleria(img) {
  img.addEventListener("click", trocarimagem);
}

galeria.forEach(eventosgaleria);

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
  1;
}
