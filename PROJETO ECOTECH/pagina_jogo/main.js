let draggedElement = null;
let initialPosition = {};  // Para armazenar a posição inicial das bolas

// Função chamada quando o toque inicia
function onTouchStart(event) {
    event.preventDefault();
    draggedElement = event.target;

    // Armazena a posição inicial da bola para voltar se for solta no lugar errado
    initialPosition = {
        left: draggedElement.style.left,
        top: draggedElement.style.top
    };

    // Ajusta a posição do elemento arrastado para começar no toque
    const touch = event.touches[0];
    draggedElement.style.position = "absolute";  // Faz com que o elemento flutue sobre a tela
    draggedElement.style.left = touch.pageX - draggedElement.offsetWidth / 2 + "px";  // Alinha o centro do toque
    draggedElement.style.top = touch.pageY - draggedElement.offsetHeight / 2 + "px";
}

// Função chamada quando o toque está em movimento
function onTouchMove(event) {
    if (draggedElement) {
        // Atualiza a posição da bola enquanto o dedo está se movendo
        const touch = event.touches[0];
        draggedElement.style.left = touch.pageX - draggedElement.offsetWidth / 2 + "px";
        draggedElement.style.top = touch.pageY - draggedElement.offsetHeight / 2 + "px";
    }
}

// Função chamada quando o toque é finalizado (ao soltar)
function onTouchEnd(event) {
    if (draggedElement) {
        // Quando o toque termina, verificamos se a bola foi colocada no presente correto
        const touch = event.changedTouches[0];
        let target = document.elementFromPoint(touch.pageX, touch.pageY);  // Pega o elemento sob o toque

        // Verifica se o alvo é um presente e se a cor da bola corresponde ao id do presente
        if (target && target.classList.contains('gift') && draggedElement.classList.contains(target.id)) {
            // Atualiza a imagem do presente se a bola for colocada no lugar certo
            switch (draggedElement.id) {
                case 'vermelho':
                    target.src = '/PROJETO ECOTECH/Presentes_Imagem/vermelho.png';  // Caminho para a imagem vermelha
                    break;
                case 'verde':
                    target.src = '/PROJETO ECOTECH/Presentes_Imagem/verde.png';  // Caminho para a imagem verde
                    break;
                case 'azul':
                    target.src = '/PROJETO ECOTECH/Presentes_Imagem/azul.png';  // Caminho para a imagem azul
                    break;
                case 'amarelo':
                    target.src = '/PROJETO ECOTECH/Presentes_Imagem/amarelo.png';  // Caminho para a imagem amarela
                    break;
            }

            // Esconde a bola, removendo-a da tela
            draggedElement.style.display = "none";  // A bola desaparece

        } else {
            // Se a bola for solta em outro lugar (não no presente certo), volta para sua posição inicial
            draggedElement.style.left = initialPosition.left;
            draggedElement.style.top = initialPosition.top;
        }

        // Reseta a posição do elemento arrastado para não interferir em outros movimentos
        draggedElement.style.position = "fixed";  // Volta a bola para o estilo de fixação na árvore
        draggedElement = null;  // Limpa o elemento arrastado
    }
}

// Atribui os eventos de toque às bolas
document.querySelectorAll('.bola').forEach(bola => {
    bola.addEventListener('touchstart', onTouchStart);
    bola.addEventListener('touchmove', onTouchMove);
    bola.addEventListener('touchend', onTouchEnd);
});
