
//Carrossel de Frutas
document.querySelectorAll('.fruit-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.fruit-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        document.querySelectorAll('.content-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        
        const target = this.getAttribute('data-fruit');
        document.getElementById(target).classList.add('active');
    });
});

//Sidebar
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const setMenu = document.querySelector('.set-menu');

setMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Controle imagem da sidebar
    const sidebarImage = document.querySelector('.sidebar-image');
    if (sidebar.classList.contains('active')) {
        sidebarImage.style.display = 'block';
    } else {
        setTimeout(() => {
            sidebarImage.style.display = 'none';
        }, 300);
    }
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});
