// Função que permite o "drag" (arrastar)
function allowDrop(event) {
    event.preventDefault(); // Impede o comportamento padrão para permitir o drop
}

// Função para quando o "drag" começa
function drag(event) {
    event.dataTransfer.setData("text", event.target.id); // Guarda o ID do elemento arrastado
}

// Função para quando o "drop" (soltar) ocorre
function drop(event, targetColor) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text"); // Obtém o ID do item arrastado
    var bola = document.getElementById(data); // Obtém o elemento da bola arrastada
    var caixa = document.getElementById(targetColor); // Obtém a caixa de presente onde a bola será solta

    // Verifica se a bola foi solta na caixa correta
    if ((targetColor === "vermelho" && bola.id === "bola_vermelha") ||
        (targetColor === "verde" && bola.id === "bola_verde") ||
        (targetColor === "azul" && bola.id === "bola_azul") ||
        (targetColor === "amarelo" && bola.id === "bola_amarela")) {
        
        // Altera a cor da caixa para a cor da bola e remove a bola
        caixa.style.backgroundColor = targetColor;
        bola.style.display = "none"; // Remove a bola após o "drop"
    } else {
        // Se a cor não for correspondente, mostra um alert
        alert("Não foi dessa vez!");
    }
}
