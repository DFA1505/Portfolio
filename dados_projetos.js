async function carregarProjetos() {
  try {
    const resposta = await fetch("projetos.json");
    const projetos = await resposta.json();

    const container = document.getElementById("projects");

    container.innerHTML = projetos
      .map(
        (projeto) => `
            <div class="card">
                <div class="card-img">
                    <img src="${projeto.imagem}">
                </div>
                
                <div class="layer">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                    <div class="icons-div">
                    <a href="${projeto.linkGit}" target="blank">
                    <i class="fa-brands fa-github"></i></a>
                    <a href="${projeto.link}" target="blank"><i class="fa-solid fa-link"></i>
                    </a>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  } catch (erro) {
    console.error("Erro ao carregar projetos:", erro);
  }
}

carregarProjetos();
