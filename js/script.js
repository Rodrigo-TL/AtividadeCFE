// funcao simples para o botaovoltar ao topo que o professor pediu
function topo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// monitora o scroll da pagina para mostrar ou esconder o botao
window.onscroll = function() {
    let botaotopo = document.getElementById("voltar-topo");
    if (botaotopo) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            botaotopo.style.display = "block";
        } else {
            botaotopo.style.display = "none";
        }
    }
};

// interatividade simples com jquery para a loja gamer
$(document).ready(function() {
    $(".btn-comprar").on("click", function() {
        let jogo = $(this).closest(".card-body").find(".card-title").text();
        alert("O jogo '" + jogo + "' foi colocado no carrinho!");
    });
});
