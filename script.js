let nomesEleg = document.querySelector("#nomesEleg");
let btnSort = document.querySelector(".btn-sort")
let listaNomesSorteados = document.querySelector("#listaNomesSorteados")
let qtdeNomes = document.querySelector(".input-qtde")



let cont = 0;

function sortearNomes() {
    let qtde = (parseInt(qtdeNomes.value));

    for (let i=0; i<qtde; i++) {

        const nomes = nomesEleg.value.split('\n'); //separar linhas
        if (nomes.length - 1 > 0) {

            if (nomes[nomes.length - 1] === "") {
                nomes.pop()
            }

            const numAleatorio = Math.floor(Math.random() * nomes.length);
            console.log('numero: ', numAleatorio, 'nome: ', nomes[numAleatorio])

            const novoItem = document.createElement("li");
            cont++
            novoItem.textContent = cont + " - " + nomes[numAleatorio];
            listaNomesSorteados.appendChild(novoItem);

            let linhas = nomesEleg.value.split('\n');
            linhas.splice(numAleatorio, 1);
            nomesEleg.value = linhas.join('\n')
        } else {
            alert("insira os nomes");
        }
    }
}

btnSort.addEventListener('click', sortearNomes);


