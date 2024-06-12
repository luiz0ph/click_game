let score = -1;
let btnDobroPontos = document.querySelector('button#btn_dobro');
let dobroCompra = document.getElementById('dobro');
let btnTriploPontos = document.querySelector("button#btn_triplo");
let triploCompra = document.querySelector("div#triplo");
let btnQuadruploPontos = document.querySelector("button#btn_quadruplo");
let quadruploCompra = document.querySelector("div#quadruplo");
let UmPorSegundo = document.getElementById('1_por_segundo');
let btn1PorSegundo = document.getElementById('btn_1segundo');
let doisPorSegundo = document.getElementById("2_por_segundo");
let btn2PorSegundo = document.querySelector("button#btn_2segundo");
let tresPorSegundo = document.getElementById("3_por_segundo");
let btn3PorSegundo = document.querySelector("button#btn_3segundo");
let compras = document.querySelectorAll('div#compras');
let mercado = document.querySelector("div#mercado");
let botao = document.getElementById('circle');
let ponto = 0;
let TempoSegundo = 0;

// Deixar visivel
dobroCompra.style.display = "block";
UmPorSegundo.style.display = "block"

botao.addEventListener('click', somClick);

const audioElement = document.getElementById('somClick');
// Som do click
function somClick() {
    audioElement.play(); // Inicia a reprodução
    audioElement.volume = 0.3; 
}

// Função de dobro de ponto
function dobro() {
    if (score < 100) { 
        window.alert('Valor Insuficiente');
    } else {
        ponto = 1;
        score -= 100; // Retira 100 pontos
        document.getElementById('score').innerHTML = score; // Atualiza o valor ao comprar
        dobroCompra.style.display = "none";
        triploCompra.style.display = "block";
    }
}

// Fução triplo de pontos
function triplo() {
    if (score < 500) {
        window.alert('Valor insuficiente');
    } else {
        ponto = 2;
        score -= 500; // Retira 500 pontos
        document.getElementById('score').innerHTML = score;
        triploCompra.style.display = 'none';
        quadruploCompra.style.display = 'block';
    }
}

function quadruplo() {
    if (score < 1000) {
        window.alert('Valor insuficiente');
    } else {
        ponto = 3;
        score -= 1000; // Retira mil pontos
        document.getElementById('score').innerHTML = score;
        quadruploCompra.style.display = 'none';
    }
}

// Função 1 ponto por segundo
function tempoPorSegundo1() {
    if (score < 200) {
        window.alert('Valor Insuficiente');
    } else {
        TempoSegundo = 1;
        score -= 200;
        document.getElementById('score').innerHTML = score;
        UmPorSegundo.style.display = 'none';
        doisPorSegundo.style.display = 'block';
        atualizarTempo();
    }
}

// 2 pontos por segundo
function tempoPorSegundo2() {
    if (score < 1200) {
        window.alert('Valor insuficente');
    } else {
        TempoSegundo = 2;
        score -= 1200;
        document.getElementById('score').innerHTML = score;
        doisPorSegundo.style.display = 'none';
        tresPorSegundo.style.display = 'block';
        atualizarTempo();
    }
}

// 3 pontos por segundo
function tempoPorSegundo3() {
    if (score < 1700) {
        window.alert('Valor insuficiente');
    } else {
        TempoSegundo = 3;
        score -= 1700;
        document.getElementById('score').innerHTML = score;
        tresPorSegundo.style.display = 'none';
        atualizarTempo();
    }
}

// Adciona um ouvinte de click nos botões de compra
btnDobroPontos.addEventListener('click', dobro);
btnTriploPontos.addEventListener('click', triplo);
btnQuadruploPontos.addEventListener('click', quadruplo);
btn1PorSegundo.addEventListener('click', tempoPorSegundo1);
btn2PorSegundo.addEventListener('click', tempoPorSegundo2);
btn3PorSegundo.addEventListener('click', tempoPorSegundo3);

// Função para atualizar a pontuação
function atualizarPontuacao() {
    switch (ponto) {
        case 0:
            score++;
            break
        case 1: // Dobro de pontos
            score += 2;
            break
        case 2: // Triplo de pontos 
            score += 3;
            break
        case 3: // Quadruplo de pontos
            score += 4;
            break
        default:
            score++
            break
    }
    document.getElementById('score').innerHTML = score;
}

/*
    ponto 0 == aumenta 1 
    ponto 1 == dobro de pontos
    ponto 2 == triplo de pontos
    ponto 3 == quadruplo de pontos

    tempo 0 == Nada
    tempo 1 == aumenta 1 por segundo
    tempo 2 == aumenta 2 por segundo
    tempo 3 == aumenta 3 por segundo
*/


let intervalId;
function atualizarTempo() {
    switch (TempoSegundo) {
        case 0:
            break

        // 1 ponto por segundo
        case 1: 
            clearInterval(intervalId); // Limpa o intervalo anterior
            intervalId = setInterval(() => {
                score++;
                document.getElementById('score').innerHTML = score;
            }, 1000)
            break

        // 2 ponto por segundo
        case 2:
            clearInterval(intervalId);  // Limpa o intervalo anterior
            intervalId = setInterval(() => {
                score += 2;
                document.getElementById('score').innerHTML = score;
            }, 1000)
            break

        // 3 ponto por segundo
        case 3:
            clearInterval(intervalId);
            intervalId = setInterval(() => {
                score += 3;
                document.getElementById('score').innerHTML = score;
            }, 1000); // Ganha 3 ponto por segundo
        default:
            break
    }
}