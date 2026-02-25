// Aguarda todo o HTML do site carregar antes de iniciar o JavaScript
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona os elementos do HTML usando os IDs que definimos
    const musica = document.getElementById('musica-site'); // O arquivo de áudio
    const icone = document.getElementById('icone');       // O símbolo de Play/Pause
    const barra = document.getElementById('progresso-atual'); // A barra rosa que cresce

    // Verifica se o elemento de música existe e define o volume inicial
    if (musica) {
        musica.volume = 1.0; // Volume no máximo (vai de 0.0 a 1.0)
        console.log("Sistema de áudio pronto e volume definido!");
    }

    /**
     * Função para Alternar entre Tocar e Pausar
     * Ela é ligada ao 'window' para que o 'onclick' do HTML consiga encontrá-la
     */
    window.toggleMusica = function() {
        // Se a música não foi encontrada por algum motivo, para a execução aqui
        if (!musica) return;

        if (musica.paused) {
            // Tenta dar o Play
            musica.play().then(() => {
                // Se o play der certo, muda o ícone para o símbolo de Pausa
                icone.innerText = '⏸';
            }).catch(error => {
                // Se o navegador bloquear, tentamos recarregar o arquivo e forçar o play
                console.log("O navegador exigiu um recarregamento do arquivo.");
                musica.load(); 
                musica.play();
                icone.innerText = '⏸';
            });
        } else {
            // Se a música já estiver tocando, ela será pausada
            musica.pause();
            icone.innerText = '▶'; // Volta o ícone para o símbolo de Play
        }
    };

    /**
     * Evento que roda automaticamente enquanto a música toca
     * Ele serve para atualizar a barra rosa de progresso
     */
    musica.ontimeupdate = function() {
        // Verifica se a música já carregou a duração total para evitar erros de cálculo
        if (musica.duration) {
            // Calcula a porcentagem: (Tempo Atual / Tempo Total) * 100
            const porcentagem = (musica.currentTime / musica.duration) * 100;
            
            // Aplica a largura (width) no CSS da barra rosa
            barra.style.width = porcentagem + '%';
        }
    };
});