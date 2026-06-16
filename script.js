// Aguarda o HTML ser completamente carregado antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todos os botões de reação da página
    const botoes = document.querySelectorAll(".btn-reacao");

    // Aplica a lógica individualmente para cada botão
    botoes.forEach((botao) => {
        // Cada botão mantém seu próprio estado isolado de "curtiu" ou não
        let curtiu = false;

        // Adiciona o evento de clique ao botão
        botao.addEventListener("click", () => {
            const textoContador = botao.querySelector("span");

            if (!curtiu) {
                // Cenário: O usuário está curtindo
                textoContador.textContent++; 
                curtiu = true;       
                botao.style.backgroundColor = "#e1f5fe"; // Feedback visual (azul claro)
            } else {
                // Cenário: O usuário está descurtindo
                textoContador.textContent--; 
                curtiu = false;      
                botao.style.backgroundColor = "#f0f2f5"; // Retorna à cor padrão
            }
        });
    });

});
