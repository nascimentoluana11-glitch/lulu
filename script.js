const telaCapa = document.getElementById('tela-capa');
const areaJogo = document.getElementById('area-jogo');
const btnIniciar = document.getElementById('btn-iniciar');

btnIniciar.addEventListener('click', () => {
    telaCapa.classList.add('oculto');
    areaJogo.classList.remove('oculto');
});
