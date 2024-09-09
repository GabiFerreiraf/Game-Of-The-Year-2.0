function pesquisar() {
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum resultado encontrado</p>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    let resultados = "";
    let titulo = "";
    let descricao = "";

    //para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        // se no dado titulo includes campoPesquisa 
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa))
            {
            resultados  += `
    <div class="item-resultado">   
         <h2>
            <a href="#" target="_blank">${dado.titulo}
            </a>
        </h2>
        <p class="descrição-meta">${dado.descricao}
        </p>
        <a href="${dado.link}" target="_blank">Mais Informações></a>
    </div>
        `;
         }
    
    }

    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado</p>"
    }

    section.innerHTML = resultados;
}