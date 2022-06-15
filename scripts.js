distribuirCartas();

function comparador() { 
	return Math.random() - 0.5; 
}

function distribuirCartas() {
    let numeroDeCartas = prompt("Escolha o número de cartas");
    let vereficaRegra = false;
    let contadorDeCarta = 0;
    let listaDeCartas = [];
    let bancoDeCartas = [`imagens/banana.png`, `imagens/laranja.png`, `imagens/limao.png`, `imagens/maca.png`, `imagens/melancia.png`, `imagens/morango.png`, `imagens/uva.png`];
    let versoCarta = ``;
    const container = document.querySelector(".container");

    while(vereficaRegra === false) {
        if((numeroDeCartas % 2 === 0) && (numeroDeCartas >= 4 && numeroDeCartas <= 14) && (numeroDeCartas !== NaN)) {
            vereficaRegra = true;
        } else {
            numeroDeCartas = prompt("Escolha o número de cartas");
        }
    }

    while(contadorDeCarta < numeroDeCartas / 2) {
        versoCarta = bancoDeCartas[contadorDeCarta];
        let carta = `<div class="card"><div class="front-face face"><img src="imagens/front 1.png" /></div><div class="back-face face"><img src="${versoCarta}" /></div></div>`;
        listaDeCartas.push(carta);
        listaDeCartas.push(carta);
        contadorDeCarta++;
    }

    listaDeCartas.sort(comparador);
    listaDeCartas = listaDeCartas.join(' ');
    container.innerHTML = listaDeCartas;
}
