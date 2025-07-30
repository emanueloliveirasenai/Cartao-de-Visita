const botaoContato = document.getElementById('btn-contato');
const infoContato = document.getElementById('info-contato');

botaoContato.addEventListener('click', () => {
    infoContato.classList.toggle('ativo');
    if (infoContato.classList.contains('ativo')) {
        botaoContato.textContent = 'Ocultar Contato';
    } else {
        botaoContato.textContent = 'Ver Contato';
    }
});