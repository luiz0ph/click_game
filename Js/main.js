let score = 0;
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
let ponto = 0;
let TempoSegundo = 0;

// Deixar visivel
dobroCompra.style.display = "block";
UmPorSegundo.style.display = "block"

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

        salvarCache('pontoClick', '1');
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

        salvarCache('pontoClick', '2');
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

        salvarCache('pontoClick', '3');
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

        salvarCache('pontoSegundo', '1');
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

        salvarCache('pontoSegundo', '2');
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

        salvarCache('pontoSegundo', '3');
    }
}

// Adciona um ouvinte de click nos botões de compra
btnDobroPontos.addEventListener('click', dobro);
btnTriploPontos.addEventListener('click', triplo);
btnQuadruploPontos.addEventListener('click', quadruplo);
btn1PorSegundo.addEventListener('click', tempoPorSegundo1);
btn2PorSegundo.addEventListener('click', tempoPorSegundo2);
btn3PorSegundo.addEventListener('click', tempoPorSegundo3);


const conquista1 = 1000;
const conquista2 = 2000;
const conquista3 = 5000;

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

    if (score == conquista1) {
        alert('Conquista desbloqueada 1000 pontos');
        score = 1000;
        document.getElementById('score').innerHTML = score;
    }

    if (score == conquista2) {
        alert('Conquista desbloqueada 2000 pontos');
        score = 2000;
        document.getElementById('score').innerHTML = score;
    }

    if (score == conquista3) {
        alert('Conquista desbloqueada 5000 pontos');
        score = 5000;
        document.getElementById('score').innerHTML = score;
    }
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

    if (score == conquista1) {
        alert('Conquista desbloqueada 1000 pontos');
        score = 1000;
        document.getElementById('score').innerHTML = score;
    }

    if (score == conquista2) {
        alert('Conquista desbloqueada 2000 pontos');
        score = 2000;
        document.getElementById('score').innerHTML = score;
    }

    if (score == conquista3) {
        alert('Conquista desbloqueada 5000 pontos');
        score = 5000;
        document.getElementById('score').innerHTML = score;
    }
}

let apagar = document.getElementById('apagar');
apagar.addEventListener('click', apagarCache);

// Armazenar os Dados
function salvarCache(chave, valor) {
    localStorage.setItem(chave, valor);
}

// Recupera o cache
function recuperarCache(chave) {
    // Retornar o valor recuperado
    return localStorage.getItem(chave);
}

function apagarCache() {
    // Apaga todos os dados armazenados
    localStorage.clear();
    pontoClick = 0;
    dobroCompra.style.display = "block";
    triploCompra.style.display = "none";
    quadruploCompra.style.display = "none";
    ponto = 0;
    score = 0;
    document.getElementById('score').innerHTML = score;
}

let cacheScore = score;
function atualizarCache() {
    cacheScore = score;
    salvarCache('cacheScore', cacheScore);
}

// A cada 1 segundo o cacheScore é atualizado
setInterval(atualizarCache, 1000);

// Recuperar o valor inicial se existir
let valorArmazenado = recuperarCache('cacheScore');
let pontoClick = recuperarCache('pontoClick');
let pontoSegundo = recuperarCache('pontoSegundo');

if (valorArmazenado) {
    score = Number(valorArmazenado);
    document.getElementById('score').innerHTML = Number(valorArmazenado);
}

switch (pontoClick) {
    case '1': 
        dobroCompra.style.display = "none";
        triploCompra.style.display = "block";
        quadruploCompra.style.display = "none";
        ponto = 1;
        break
    case '2':
        dobroCompra.style.display = "none";
        triploCompra.style.display = "none";
        quadruploCompra.style.display = "block";
        ponto = 2;
        break
    case '3':
        dobroCompra.style.display = "none";
        triploCompra.style.display = "none";
        quadruploCompra.style.display = "none";
        ponto = 3;
        break
    default:
        dobroCompra.style.display = "block";
        triploCompra.style.display = "none";
        quadruploCompra.style.display = "none";
        ponto = 0;
        break
}

switch (pontoSegundo) {
    case '1':
        UmPorSegundo.style.display = 'none';
        doisPorSegundo.style.display = 'block';
        tresPorSegundo.style.display = 'none';
        TempoSegundo = 1;
        atualizarTempo();
        break
    case '2':
        UmPorSegundo.style.display = 'none';
        doisPorSegundo.style.display = 'none';
        tresPorSegundo.style.display = 'block';
        TempoSegundo = 2;
        atualizarTempo();
        break
    case '3':
        UmPorSegundo.style.display = 'none';
        doisPorSegundo.style.display = 'none';
        tresPorSegundo.style.display = 'none';
        TempoSegundo = 3;
        atualizarTempo();
        break
    default:
        UmPorSegundo.style.display = 'block';
        doisPorSegundo.style.display = 'none';
        tresPorSegundo.style.display = 'none';
        TempoSegundo = 0;
        atualizarTempo();
        break
}