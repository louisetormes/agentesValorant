function filtrarAgentePorPosicao() {
    let posicaoSelecionada = document.getElementById("posicao-seletor").value;
    let section = document.getElementById("resultados-pesquisa");
    section.innerHTML = ""; // Limpa os resultados anteriores

    for (let agente of agentesValorant) {
        if (posicaoSelecionada === "all" || agente.funcao === posicaoSelecionada) {
            section.innerHTML += 
            `<div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">
                        ${agente.agente}
                    </a>
                </h2>
                <div class="imagem-personagem">
                    <img src="${agente.imagem}" alt="${agente.agente}">
                </div>
                <div>
                    <button class="habilidades-btn" data-character="${agente.agente.toLowerCase()}">HABILIDADES ESPECIAIS</button>
                </div>
                <p class="descricao-meta">
                    ${agente.descricao}
                </p>
                <a href="${agente.link}" target="_blank">Saiba mais</a>
            </div>`;
        }
        adicionarEventosHabilidades();
    }
}