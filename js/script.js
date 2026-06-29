// 1. funcao simples para o botao voltar ao topo que o professor pediu
window.topo = function() {
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

// 2. interatividade de compra usando javascript puro (sem travar)
document.addEventListener("DOMContentLoaded", function() {
    // busca todos os botoes com a classe btn-comprar
    let botoesComprar = document.querySelectorAll(".btn-comprar");
    
    botoesComprar.forEach(function(botao) {
        botao.addEventListener("click", function() {
            // navega pelo html ate achar o titulo do card correto
            let cardBody = this.closest(".card-body");
            let jogo = cardBody.querySelector(".card-title").innerText;
            
            // exibe o alerta na tela
            alert("O jogo '" + jogo + "' foi colocado no carrinho!");
        });
    });
});
