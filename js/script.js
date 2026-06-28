// 1. Efeito do botão voltar ao Topo
window.topo = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Controla se o botão do topo aparece ou some ao rolar a página
window.onscroll = function() {
    let botao = document.getElementById("voltar-topo");
    if (botao) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            botao.style.display = "block";
        } else {
            botao.style.display = "none";
        }
    }
};

// Quando a página terminar de carregar, ativa o jQuery
$(document).ready(function() {

    // Interatividade: Ativar alert nos botões de compra da página inicial
    $(".btn-comprar").on("click", function() {
        let jogo = $(this).closest(".card-body").find(".card-title").text();
        alert("O jogo '" + jogo + "' foi adicionado ao seu carrinho!");
    });

    // 2. Validação de Login basica
    $("#login").on("submit", function(evento) {
        let usuario = $("#usuario").val();
        let senha = $("#senha").val();

        if (usuario === "" || senha === "") {
            alert("Por favor, preencha todos os campos do login.");
            evento.preventDefault(); // Impede o envio se estiver vazio
        } else {
            alert("Login realizado com sucesso! Bem-vindo de volta.");
        }
    });

    // 3. Ativar alert no botão cadastrar da página de login
    $("#form-cadastro").on("submit", function(evento) {
        alert("Cadastro enviado com sucesso! Aguarde a nossa confirmação por e-mail.");
    });
});
