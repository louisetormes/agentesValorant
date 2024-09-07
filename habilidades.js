function adicionarEventosHabilidades() {
// Seleciona todos os botões de habilidades
const habilidadesBtns = document.querySelectorAll('.habilidades-btn');

// Seleciona o pop-up
const popup = document.getElementById('popup');
const characterNameElement = document.getElementById('character-name');
const characterAbilitiesElement = document.getElementById('character-abilities');

// Adiciona o evento de mouseover e mouseout para todos os botões
habilidadesBtns.forEach(button => {
    button.addEventListener('mouseover', function() {
        const agenteNome = button.getAttribute('data-character');

        // Encontra o agente no array agentesValorant (do arquivo dados.js)
        const agente = agentesValorant.find(a => a.agente.toLowerCase() === agenteNome.toLowerCase());

        if (agente) {
            // Atualiza o nome do personagem no pop-up
            characterNameElement.textContent = `Habilidades de ${agente.agente}`;

            // Limpa as habilidades anteriores
            characterAbilitiesElement.innerHTML = '';

            // Adiciona as habilidades do personagem no pop-up
            [agente.habilidade1, agente.habilidade2, agente.habilidade3, agente.habilidade4].forEach(habilidade => {
                const li = document.createElement('li');
                li.textContent = habilidade;
                characterAbilitiesElement.appendChild(li);
            });

            // Posiciona o pop-up próximo ao botão
            const rect = button.getBoundingClientRect();
            popup.style.left = `${rect.left + window.scrollX}px`;
            popup.style.top = `${rect.bottom + window.scrollY}px`;

            // Exibe o pop-up
            popup.style.display = 'block';
        }
    });

    button.addEventListener('mouseout', function() {
        // Esconde o pop-up quando o mouse sair do botão
        popup.style.display = 'none';
    });
});
}

