import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function adicionarVideo(evento) {
  evento.preventDefault();
  const tituloDoVideo = document.querySelector("[data-titulo]").value;
  const descricaoDoVideo = Math.floor(Math.random() * 10).toString();
  const imagemDoVideo = document.querySelector("[data-imagem]").value;
  const urlDoVideo = document.querySelector("[data-url]").value;
  try {
    await conectaApi.adicionaVideo(
      tituloDoVideo,
      descricaoDoVideo,
      urlDoVideo,
      imagemDoVideo
    );

    window.location.href = "../pages/envio-concluido.html";
  } catch (erro) {
    console.log(erro);
    alert(erro);
  }
}

formulario.addEventListener("submit", (evento) => adicionarVideo(evento));
