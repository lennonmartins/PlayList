import { conectaApi } from "./conectaApi.js";
import { construirCard } from "./mostrarVideos.js";

async function buscarVideosPorTermo(evento) {
  evento.preventDefault();
  const termoDePesquisa = document.getElementById("pesquisar").value;
  const videosRetornado = await conectaApi.buscaVideos(termoDePesquisa);

  const lista = document.querySelector("[data-lista]");

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  videosRetornado.forEach((elemento) =>
    lista.appendChild(
      construirCard(
        elemento.titulo,
        elemento.descricao,
        elemento.url,
        elemento.imagem
      )
    )
  );
  if(videosRetornado == 0){
    lista.innerHTML = `<h2 class="mensagem__titulo">Ahh que pena!! Ainda não temos nenhum víedo com esse assunto... :(</h2>`
  }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", (evento) =>
  buscarVideosPorTermo(evento)
);
