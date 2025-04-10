// Efeito do botão "Voltar ao Topo"
function topo() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'  // Rolagem suave até o topo
    });
}

// Validação de Login
function login() {
    var usuario = document.getElementById('usuario-login').value.toLowerCase();
    var senha = document.getElementById('senha-login').value;

    // Validação simples de login (para exemplo)
    if (usuario === "admin" && senha === "123456") {
        alert("Login bem-sucedido!");
        window.location.href = "index.html"; // Redireciona para a página inicial após login
    } else {
        alert("Acesso Negado. Dados incorretos.");
    }
}

// Ativar alert no botão "Cadastrar"
function cadastro() {
    var usuario = document.getElementById('usuario-cadastro').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha-cadastro').value;

    // Verifica se todos os campos estão preenchidos
    if (usuario && email && senha) {
        alert("Cadastrado com sucesso!"); // Exibe o alerta de cadastro bem-sucedido
        window.location.href = "index.html"; // Redireciona para a página inicial
    } else {
        alert("Preencha todos os campos corretamente."); // Caso algum campo esteja vazio
    }
}
