document.addEventListener('DOMContentLoaded', function() {
    // Conteúdo do cabeçalho
    var navContent = `
    <div class="nav_Logo">
    <a href="index.html"><img src="../arquivos/Glass__1_-removebg-preview (1).png" alt="GlassCraft"></a>
</div>

<div class="nav_Items">
    <ul>
        <li><a href="creditos.html">Créditos</a></li>
        <li><a href="sobre.html">Sobre o jogo</a></li>
        <li><a href="sobre.html">Desenvolvimento</a></li>
        <li><a href="lancamento.html">Download</a></li>
    </ul>
</div>

<button class="menu-button" onclick="navResponsive()">=</button>
    `;

    // Conteúdo do rodapé
    var footerContent = `
    <div class="footerTop">
    <div class="footerLeft">
        <h4>GlassCraft</h4>
        <p>Prepare-se para jogar, dia 1 de março.</p>
    </div>

    <div class="footerRight">
    <a href="creditos.html">Créditos</a>
    <a href="lancamento.html">Lançamento</a>
    <a href="sobre.html">Sobre</a>
    <a href="lancamento.html">Download</a>
    <a href="politica-de-privacidade.html">Política de privacidade</a>
    <a href="contato.html">Contato</a>
    <a href="termosJogo.html">Termos do jogo</a>

</div>




</div>

<div class="footerBottom">
GlassCraft Todos os Direitos Reservados 2024. Desenvolvido por Maracujá Gamess.
</div>
    `;

    // Adiciona o conteúdo ao header
    var navElement = document.querySelector('nav');
    if (navElement) {
        navElement.innerHTML = navContent;
    }


    // Adiciona o conteúdo ao footer
    var footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = footerContent;
    }
});
