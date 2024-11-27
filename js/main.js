document.addEventListener('DOMContentLoaded', () => {
    // Variáveis para armazenar os elementos das bolas e presentes
    const bolas = document.querySelectorAll('.bola');
    const presentes = document.querySelectorAll('.gift');

    // Variáveis para controlar a posição das bolas enquanto o toque está ativo
    let bolaSelecionada = null;
    let offsetX = 0;
    let offsetY = 0;

    // Função para alterar a imagem do presente quando a bola for colocada corretamente
    function verificarCor(bola, presente) {
        if (bola.id === presente.id) {
            // Altera a imagem do presente para a correspondente à cor
            presente.src = `img/${bola.id}.png`;
            
            // Torna a bola invisível (desaparece) após ser colocada corretamente
            bola.style.display = 'none';  // A bola desaparece da tela
        }
    }

    // Função que é chamada quando o toque começa
    function onTouchStart(event) {
        bolaSelecionada = event.target; // A bola que foi tocada
        if (bolaSelecionada && bolaSelecionada.classList.contains('bola')) {
            // Calcula a diferença entre a posição do toque e a posição da bola
            const rect = bolaSelecionada.getBoundingClientRect();
            offsetX = event.touches[0].clientX - rect.left;
            offsetY = event.touches[0].clientY - rect.top;
        }
    }

    // Função que é chamada enquanto o toque se move
    function onTouchMove(event) {
        if (bolaSelecionada) {
            // Atualiza a posição da bola com base no movimento do toque
            bolaSelecionada.style.position = 'absolute';
            bolaSelecionada.style.left = `${event.touches[0].clientX - offsetX}px`;
            bolaSelecionada.style.top = `${event.touches[0].clientY - offsetY}px`;
        }
    }

    // Função que é chamada quando o toque termina
    function onTouchEnd(event) {
        if (bolaSelecionada) {
            // Verifica se a bola foi colocada sobre um presente
            presentes.forEach(presente => {
                const rectPresente = presente.getBoundingClientRect();
                const rectBola = bolaSelecionada.getBoundingClientRect();

                // Verifica se a bola está dentro da área do presente
                if (rectBola.right > rectPresente.left && rectBola.left < rectPresente.right &&
                    rectBola.bottom > rectPresente.top && rectBola.top < rectPresente.bottom) {
                    verificarCor(bolaSelecionada, presente);
                }
            });

            // Restaura a posição original da bola
            bolaSelecionada.style.position = '';
            bolaSelecionada.style.left = '';
            bolaSelecionada.style.top = '';
            bolaSelecionada = null;
        }
    }

    // Adiciona os event listeners para cada bola
    bolas.forEach(bola => {
        bola.addEventListener('touchstart', onTouchStart);
        bola.addEventListener('touchmove', onTouchMove);
        bola.addEventListener('touchend', onTouchEnd);
    });
});
