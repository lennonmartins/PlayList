const urlApi = "http://localhost:3000/videos";

async function listaVideos() {
  const conexao = await fetch(urlApi);
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function adicionaVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil vizualizações`,
      url: url,
      imagem: imagem,
    }),
  });

  if(!conexao.ok){
    throw new Error("Não possível enviar o vídeo!");
  }

  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function buscaVideos(termoDeBusca) {
  const conexao = await fetch(urlApi + `?q=${termoDeBusca}`);

  const conexaoConvertida =  await conexao.json();
  return conexaoConvertida;
}
//exportando a função como parametro
export const conectaApi = {
  listaVideos,
  adicionaVideo,
  buscaVideos,
};
