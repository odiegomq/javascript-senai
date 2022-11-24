// 0 - Golem - Pedra
// 1 - Togepi - Papel
// 2 - Scizor - Tesoura

function escolher() {
    let sorteio = Math.floor(Math.random() * 3);

    // Golem
    if (document.getElementById("golem").checked) {

        if (sorteio == 0) {
            resultado("Empate", "golem.png");
        } else if (sorteio == 1) {
            resultado("Derrota", "togepi.png");
        } else {
            resultado("Vitória", "scizor.png");
        }

        document.getElementById("usuario").src = "img/golem.png";
    }

    // Togepi
    if (document.getElementById("togepi").checked) {

        if (sorteio == 0) {
            resultado("Vitória", "golem.png");
        } else if (sorteio == 1) {
            resultado("Empate", "togepi.png");
        } else {
            resultado("Derrota", "scizor.png");
        }

        document.getElementById("usuario").src = "img/togepi.png";
    }

    // Scizor
    if (document.getElementById("scizor").checked) {

        if (sorteio == 0) {
            resultado("Derrota", "golem.png");
        } else if (sorteio == 1) {
            resultado("Vitória", "togepi.png");
        } else {
            resultado("Empate", "scizor.png");
        }

        document.getElementById("usuario").src = "img/scizor.png";
    }
}

function resultado(texto, computador) {
    document.getElementById("resultado").innerHTML = texto;
    document.getElementById("computador").src = "img/" + computador;
}