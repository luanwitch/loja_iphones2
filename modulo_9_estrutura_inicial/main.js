// Quando o botão no header é clicado, o formulário é exibido
$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })
 // Quando o botão com id "botao-cancelar" é clicado, o formulário é ocultado    

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
// Capturando o evento de submissão do formulário

    $('form').on('submit', function(e){
        // Evita que o formulário seja enviado
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style-"display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class=".overlay-imagem-link" >
                <a href="${enderecoDaNovaImagem}" target ="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>    
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);
        $('#endereco-imagem-nova').val('');
        // Aqui você pode adicionar o código para lidar com a submissão do formulário, se necessário
    })
})

