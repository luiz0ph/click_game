let botao = document.getElementById('circle');
botao.addEventListener('click', somClick);
const audioElement = document.getElementById('somClick');

// Som do click
function somClick() {
    audioElement.play(); // Inicia a reprodução
    audioElement.volume = 0.3; 
}