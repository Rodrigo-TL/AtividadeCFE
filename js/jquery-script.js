// Efeito de esconder e mostrar o formulário de cadastro de forma interativa
$(document).ready(function() {
    
    // Alvo: Oculta a seção de cadastro assim que a página é carregada
    $("#section-cadastro").hide();

    // Evento: Quando clicar no botão/link de convite para cadastrar
    $("#link-cadastro, #bt-mostrar-cadastro").on("click", function(evento) {
        evento.preventDefault(); // Evita que a página recarregue
        
        // Esconde o formulário de login com um efeito suave e exibe o de cadastro
        $("#section-login").fadeOut(300, function() {
            $("#section-cadastro").fadeIn(300);
        });
    });

    // Evento: Se o usuário quiser voltar para a tela de login
    $("#link-login, #bt-voltar-login").on("click", function(evento) {
        evento.preventDefault();
        
        // Esconde a seção de cadastro e traz de volta a tela de login
        $("#section-cadastro").fadeOut(300, function() {
            $("#section-login").fadeIn(300);
        });
    });
});

