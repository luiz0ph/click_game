let botao = document.getElementById('circle');
botao.addEventListener('click', somClick);
let audioElement = document.getElementById('somClick');

// Som do click
function somClick() {
    audioElement.play(); // Inicia a reprodução
    
    let audio = document.getElementById('checkboxInput').checked;
    if (audio == false) {
        audioElement.volume = 0.3;
    } else {
        audioElement.volume = 0;
    }
}