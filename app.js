function buscar() {

     //pega o id da seção buscar
    let section = document.getElementById("resultados-pesquisa") 

    //pega o id da seção de pesquisar
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim()

    //vamos usar ela pra validar se retornou ou n um agente válido
    let encontrouAgente = false;
    
    //evita que a cada clique se repita o retorno
    section.innerHTML = ""  

    //Se a pesquisa estiver vazia, não faz sentido retornar os objetos
    if(campoPesquisa == ""){
        section.innerHTML = `<p class="error">Favor, incluir informação para busca.</p>`
        return;
    }

    //Percorre os elementos, para armazenar na variável iniciada vazia.
    for(let agente of agentesValorant) {
        let campoPesquisaUpper = campoPesquisa.toUpperCase();
        let agenteUpper = agente.agente.toUpperCase();
        let descricaoUpper = agente.descricao.toUpperCase();
        //valida o agente pesquisado
        console.log(agenteUpper.includes(campoPesquisaUpper))
        if(agenteUpper.includes(campoPesquisaUpper) || descricaoUpper.includes(campoPesquisaUpper)) {
            encontrouAgente = true;
            section.innerHTML += 
            `<div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">
                        ${agente.agente}
                    </a>
                </h2>
                <div class="imagem-personagem">
                    <img src="${agente.imagem}" alt="${agente.agente.toLowerCase()}">
                </div>
                <div>
                    <button class="habilidades-btn" data-character="${agente.agente.toLowerCase()}">HABILIDADES ESPECIAIS</button>
                </div>
    
                <p class="descricao-meta">
                    ${agente.descricao}
                </p>
                <a href="${agente.link}" target="_blank">Saiba mais</a>
            </div>
            </div>`
            //top, vamos mostrar as habilidades dos nossos agentes
            adicionarEventosHabilidades();
        }
    }

    if(!encontrouAgente) {
        section.innerHTML = `<p class="error">Ei, nenhum agente encontrado. Tente novamente.</p>`
        return;
    }
}

console.log(agentesValorant)



