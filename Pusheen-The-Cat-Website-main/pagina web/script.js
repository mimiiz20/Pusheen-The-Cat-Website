// 1. Função de Play/Pause (Colocamos fora para o botão achar fácil)
window.toggleMusica = function() {
    const musica = document.getElementById('musica-site');
    const icone = document.getElementById('icone');
    const disco = document.getElementById('pusheen-disco');

    console.log("Botão clicado!");

    if (!musica) return;

    if (musica.paused) {
        musica.play().then(() => {
            icone.innerText = '⏸';
            if (disco) disco.classList.add('rodando');
        }).catch(err => {
            console.log("Tentando forçar o áudio...");
            musica.load();
            musica.play();
            icone.innerText = '⏸';
            if (disco) disco.classList.add('rodando');
        });
    } else {
        musica.pause();
        icone.innerText = '▶';
        if (disco) disco.classList.remove('rodando');
    }
};

// 2. Lógica da Barra de Progresso e Volume
document.addEventListener('DOMContentLoaded', () => {
    const musica = document.getElementById('musica-site');
    const barra = document.getElementById('progresso-atual');

    if (musica) {
        musica.volume = 1.0;

        musica.ontimeupdate = function() {
            if (musica.duration && barra) {
                const porcentagem = (musica.currentTime / musica.duration) * 100;
                barra.style.width = porcentagem + '%';
            }
        };
    }
});