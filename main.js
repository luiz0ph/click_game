let score = -1;
let btn_dobroPontos = document.querySelector('button#btn_dobro');
let dobroCompra = document.getElementById('dobro');
let UmPorSegundo = document.getElementById('1PorSegundo');
let btn_1porSegundo = document.getElementById('btn_1segundo');
let triploCompra = document.getElementById('triplo');
let btn_triploPontos = document.getElementById('btn_triplo');
let compras = document.querySelector('div#compras');
let ponto = 0;
let TempoSegundo = 0;

/*
    ponto 0 == aumenta 1 
    ponto 1 == dobro de pontos
    ponto 2 == triplo de pontos

    tempo 0 == não aumenta nada
    tempo 1 == aumenta 1 ponto por segundo
*/

// Função de dobro de ponto
function dobro() {
    if (score < 100) { 
        window.alert('Valor Insuficiente');
    } else {
        ponto = 1;
        score -= 100; // Retira 100 pontos
        document.getElementById('score').innerHTML = score; // Atualiza o valor na hora
        dobroCompra.style.display = 'none';
    }
}

// Função 1 ponto por segundo
function tempoPorSegundo() {
    if (score < 500) {
        window.alert('Valor Insuficiente');
    } else {
        TempoSegundo = 1;
        score -= 500;
        document.getElementById('score').innerHTML = score;
        UmPorSegundo.style.display = 'none';
        atualizarTempo();
    }
}

// Fução triplo de pontos
function triplo() {
    if (score < 700) {
        window.alert('Valor insuficiente');
    } else {
        ponto = 2;
        score -= 700; // Retira 500 pontos
        document.getElementById('score').innerHTML = score;
        triploCompra.style.display = 'none';
    }
}

btn_dobroPontos.addEventListener('click', dobro);
btn_triploPontos.addEventListener('click', triplo);
btn_1porSegundo.addEventListener('click', tempoPorSegundo);

// Função para atualizar a pontuação
function atualizarPontuacao() {
    switch (ponto) {
        case 0:
            score++;
            break
        case 1:
            score += 2;
            break
        case 2:
            score += 3;
            break
        default:
            score++
            break
    }
    document.getElementById('score').innerHTML = score;
}

function tempo_1() {
    score++;
    document.getElementById('score').innerHTML = score;
}

function tempo_2() {
    score += 2;
    document.getElementById('score').innerHTML = score;
}

function atualizarTempo() {
    if (TempoSegundo == 1) {
        setInterval(tempo_1, 1000);
    } 
}

// Chama a função atualizarPontuacao para iniciar o processo
atualizarPontuacao();
