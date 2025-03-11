document.querySelectorAll('.fruit-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove a classe active de todos os itens
        document.querySelectorAll('.fruit-item').forEach(i => i.classList.remove('active'));
        // Adiciona a classe active ao item clicado
        this.classList.add('active');
        
        // Esconde todos os painéis de conteúdo
        document.querySelectorAll('.content-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        
        // Mostra o painel correspondente
        const target = this.getAttribute('data-fruit');
        document.getElementById(target).classList.add('active');
    });
});