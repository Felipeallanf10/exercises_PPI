alert("Felipe Allan N. Cruz 2°A");
alert("E-commerce voltado para comida");
alert("AV1 do 2o-bim 2024");

// vai pegar todo o ul, onde estão as imagens
const container = document.querySelector('aside ul');

// adiciona o evento de click, e executa a função changeImages
container.addEventListener('click', changeImages)

function changeImages() {
    // vai pegar todas as imagens na sequência atual
    const imagens = document.querySelectorAll('aside ul li .imagem');
    let first = imagens[0].src;
    imagens[0].src = imagens[2].src; //a foto que estava na posição 2 vai para a posição 0
    imagens[2].src = imagens[3].src; //a foto que estava na posição 3 vai para a posição 2
    imagens[3].src = imagens[1].src; // a foto que estava na posição 1 vai para a posição 3
    imagens[1].src = first // a foto que estava na posição 0 vai para a posição 1
}
