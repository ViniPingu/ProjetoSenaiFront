//efeito de esconder formulário de cadastro
$(document).ready(function() {
    // Função para alternar a visibilidade do formulário de cadastro
    $("#botao-cadastrar").click(function() {
        // Quando o botão de cadastro for clicado, o formulário de cadastro será alternado entre visível e invisível
        $("#form-cadastrar").slideToggle("slow");  // Animação de exibição/desaparecimento
        $("#section-login").slideToggle("slow");   // Oculta a seção de login
        $("#botao-cadastrar").hide();              // Esconde o botão "Cadastre-se" após clicar
    });
});
