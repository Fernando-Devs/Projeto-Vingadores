
const personagens = document.querySelectorAll('.personagem')

   personagens.forEach((personagem) => {
       personagem.addventlistener('mouseenter',() => {
        
        const idselecionado= personagem.attributes.id.value
       if(idselecionado ==='ultron') return; 
        
       /*
       objetivo 1 - quando passar o mouse 
        em cima do personagem temos que: 
        
        - colocar a class selecionado no 
         personagem que passamos o mouse em cima
         para adicionar a animação nele
        
         -retirar a classe selecionado do
        personagem que esta selecionado
        */
        
        const personagemselecionado = document.querySelector('.selecionado')
        personagemselecionado.classList.remove('slecioando')

        personagem.classList.add('selecionado')
        /*
         OBJETIVO 2 - quando passar o mmouse em cima do personagem da listagem, vamos  trocar a imagem e nome do personagem grande

        -alterar a imagem do jogador 1
        -alterar o nome do jogador 1
        */

       
        imagemjogador1.src =  `./src/imagens/${idselecionado}.png`
       
        const nomejogador1 = document.getElementById('nome-jogador-1');
        const nomeselecionado = personagem.getAttribute('data-name');
    
         nomejogador1.innerHTML = nomeselecionado;
    });
    });