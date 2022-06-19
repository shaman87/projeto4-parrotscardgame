let carta1;
let carta2;
let contarCarta = 0;

function comparador() { 
	return Math.random() - 0.5; 
}

function virarCarta(elemento) {
    elemento.querySelector(".front-face").classList.add("front-face-effect");
    elemento.querySelector(".back-face").classList.add("back-face-effect");
}

function desvirarCarta(elemento) {
    elemento.querySelector(".front-face").classList.remove("front-face-effect");
    elemento.querySelector(".back-face").classList.remove("back-face-effect");
}

function selecionarCarta(elemento) {
    const virado = elemento.querySelector(".front-face").classList.contains("front-face-effect");
    if(virado === false) {
        contarCarta++;
        if(carta1 === undefined) {
            virarCarta(elemento);
            carta1 = elemento;
        } else {
            virarCarta(elemento);
            carta2 = elemento;
            if(carta1.innerHTML === carta2.innerHTML) {
                carta1 = undefined;
                carta2 = undefined;
            } else {
                setTimeout(desvirarCarta, 1000, carta1);
                setTimeout(desvirarCarta, 1000, carta2);
                carta1 = undefined;
                carta2 = undefined;
            }
        }
    }
}

function distribuirCartas() {
    let numeroDeCartas = prompt("Escolha um número de cartas que seja par e esteja entre 4 e 14:");
    let vereficaRegra = false;
    let listaDeCartas = [];
    let bancoDeCartas = [`imagens/bobrossparrot.gif`, `imagens/explodyparrot.gif`, `imagens/fiestaparrot.gif`, `imagens/metalparrot.gif`, `imagens/revertitparrot.gif`, `imagens/tripletsparrot.gif`, `imagens/unicornparrot.gif`];
    let versoCarta = ``;

    while(vereficaRegra === false) {
        if((numeroDeCartas % 2 === 0) && (numeroDeCartas >= 4 && numeroDeCartas <= 14) && (numeroDeCartas !== NaN)) {
            vereficaRegra = true;
        } else {
            numeroDeCartas = prompt("Escolha um número de cartas que seja par e esteja entre 4 e 14:");
        }
    }

    for(let i = 0; i < numeroDeCartas / 2; i++) {
        versoCarta = bancoDeCartas[i];
        let carta = `
            <div class="card" onclick="selecionarCarta(this)">
                <div class="front-face face">
                    <img src="imagens/front 1.png" />
                </div>
                <div class="back-face face">
                    <img src="${versoCarta}" />
                </div>
            </div>`;
        listaDeCartas.push(carta);
        listaDeCartas.push(carta);
    }

    listaDeCartas.sort(comparador);
    
    const div = document.querySelector(".container");
    div.innerHTML = "";
    for(let i = 0; i < numeroDeCartas; i++) {
        div.innerHTML += listaDeCartas[i];
    }
}

distribuirCartas();