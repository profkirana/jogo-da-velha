// Variaveis de controle
jogadorAtual = "X";
jogoEstaAtivo = true;

tabuleiroDoJogo = [ "", "", "",
                    "", "", "",
                    "", "", ""];
                    
statusDoJogo = document.getElementById("status");
botaoReset = document.querySelector(".reset");

condicaoDeVitoria = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function clicarCelula(event) {
    celulaClicada = event.target;
    posicaoClicada = celulaClicada.getAttribute("data-index");

    // Verificar se o jogo ainda está ativo
    // Se a celula está vazia
    if (!jogoEstaAtivo || tabuleiroDoJogo[posicaoClicada] != "") {
      // Não faz nada
      return;
    }
    
    // Jogada Válida
    tabuleiroDoJogo[posicaoClicada] = jogadorAtual;
    celulaClicada.textContent = jogadorAtual;

}

document.querySelectorAll(".cell").forEach((cell) =>
    cell.addEventListener("click", clicarCelula));