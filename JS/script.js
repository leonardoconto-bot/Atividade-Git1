document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault()

    var botao = document.getElementById('btnEntrar')
    botao.textContent = 'Carregando artigo...'
    botao.style.backgroundColor = '#888'

    setTimeout(function() {
        window.location.href = 'umbreon.html'
    }, 1000)
})