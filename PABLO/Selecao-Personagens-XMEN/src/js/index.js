//Pega os personagens no JS e verifica quando o usuario passa o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem');

//Adiciona a classe selecionada ao personagem que o usuario passar o mouse em cima
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        //Verifica se ja existe um personagem selecionado, se sim, devemos remover a seleção dele
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        //Pega o elemento do personagem grande e adiciona as informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        //Altera imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        const visu = document.getElementById('visu');
        visu.src = `./src/imgs/card-${idPersonagem}.png`;

        //altera o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //Altera descrição do personagem
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})