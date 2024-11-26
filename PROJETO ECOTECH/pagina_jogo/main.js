// Função para permitir o arraste
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Função para permitir que os itens sejam soltos
function allowDrop(event) {
    event.preventDefault();
}

// Função para lidar com o drop
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var bola = document.getElementById(data);
    var presente = event.target;

    // Verifica se a bola e o presente têm a mesma cor (id)
    if (bola.id === presente.id) {
        // Substitui a imagem do presente pela imagem correspondente
        // Troque os caminhos das imagens conforme necessário
        switch (bola.id) {
            case 'vermelho':
                presente.src = '/PROJETO ECOTECH/Presentes_Imagem/vermelho.png'; // Troque pelo caminho correto
                break;
            case 'verde':
                presente.src = '/PROJETO ECOTECH/Presentes_Imagem/verde.png'; // Troque pelo caminho correto
                break;
            case 'azul':
                presente.src = '/PROJETO ECOTECH/Presentes_Imagem/azul.png'; // Troque pelo caminho correto
                break;
            case 'amarelo':
                presente.src = '/PROJETO ECOTECH/Presentes_Imagem/amarelo.png'; // Troque pelo caminho correto
                break;
        }
    }
}


