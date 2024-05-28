let score = -1;
let dobro_pontos = document.getElementById('dobro_pontos');
let btn_dobroPontos = document.querySelector('button#btn_dobro');
let compras = document.querySelector('div#compras');
let dobroPonto = false;

// Função de dobro de ponto
function dobro() {
    if (score < 100) { 
        window.alert('Valor Insuficiente');
    } else {
        dobroPonto = true;
        score -= 100; // Retira 100 pontos
        document.getElementById('score').innerHTML = score;
        compras.style.display = 'none';
    }
}

btn_dobroPontos.addEventListener('click', dobro);

// Função para atualizar a pontuação
function atualizarPontuacao() {
    if (dobroPonto == true) {
        score += 2;
    } else {
        score++;
    }
    document.getElementById('score').innerHTML = score;
}

// Chama a função atualizarPontuacao para iniciar o processo
atualizarPontuacao();