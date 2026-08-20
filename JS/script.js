const caixaLogin = document.getElementById('caixaLogin');
const caixaCadastro = document.getElementById('caixaCadastro');
const linkIrCadastro = document.getElementById('linkIrCadastro');
const linkIrLogin = document.getElementById('linkIrLogin');

// Troca para a tela de Cadastro
linkIrCadastro.addEventListener('click', function(event) {
    event.preventDefault();
    caixaLogin.style.display = 'none';
    caixaCadastro.style.display = 'block';
});

// Troca para a tela de Login
linkIrLogin.addEventListener('click', function(event) {
    event.preventDefault();
    caixaCadastro.style.display = 'none';
    caixaLogin.style.display = 'block';
});

// Lógica de Cadastro
document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const novoUsuario = document.getElementById('usuarioCadastro').value;
    const novaSenha = document.getElementById('senhaCadastro').value;

    localStorage.setItem('meuUsuario', novoUsuario);
    localStorage.setItem('minhaSenha', novaSenha);

    const msgCadastro = document.getElementById('mensagemCadastro');
    msgCadastro.textContent = 'Conta criada com sucesso!';
    msgCadastro.className = 'mensagem sucesso';
    this.reset();

    setTimeout(function() {
        caixaCadastro.style.display = 'none';
        caixaLogin.style.display = 'block';
        msgCadastro.textContent = ''; 
    }, 1500);
});

// Lógica de Login
document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const usuarioDigitado = document.getElementById('usuarioLogin').value;
    const senhaDigitada = document.getElementById('senhaLogin').value;
    
    const usuarioSalvo = localStorage.getItem('meuUsuario');
    const senhaSalva = localStorage.getItem('minhaSenha');
    const msgLogin = document.getElementById('mensagemLogin');

    if (!usuarioSalvo || !senhaSalva) {
        msgLogin.textContent = 'Nenhuma conta encontrada. Faça o cadastro!';
        msgLogin.className = 'mensagem erro';
        return; 
    }

    if (usuarioDigitado === usuarioSalvo && senhaDigitada === senhaSalva) {
        msgLogin.textContent = ''; 
        const btn = document.getElementById('btnEntrar');
        btn.textContent = 'Carregando artigo...';
        btn.style.backgroundColor = '#888';

        setTimeout(function() {
            window.location.href = 'umbreon.html';
        }, 1000);
    } else {
        msgLogin.textContent = 'Usuário ou senha incorretos.';
        msgLogin.className = 'mensagem erro';
    }
});