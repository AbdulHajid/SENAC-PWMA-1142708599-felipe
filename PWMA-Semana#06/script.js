// JavaScript para mostrar/ocultar os formulários de login e cadastro quando o ícone é clicado
const loginIcon = document.getElementById("loginIcon");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginIcon.addEventListener("click", () => {
  if (loginForm.style.display === "block") {
    loginForm.style.display = "none";
    signupForm.style.display = "none";
  } else {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  }
});

// JavaScript para lidar com o envio do formulário de login
const loginFormElement = document.getElementById("login");
loginFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  // Faça a validação do login aqui (por exemplo, verifique em um servidor ou use localStorage)
  // Se o login for bem-sucedido, redirecione o usuário para a página apropriada
  // Caso contrário, exiba uma mensagem de erro
});

// JavaScript para lidar com o envio do formulário de cadastro
const signupFormElement = document.getElementById("signup");
signupFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("signupNome").value;
  const email = document.getElementById("signupEmail").value;
  const senha = document.getElementById("signupSenha").value;

  // Faça o processo de cadastro do usuário aqui (por exemplo, envie os dados para um servidor)
  // Se o cadastro for bem-sucedido, redirecione o usuário para a página de login
  // Caso contrário, exiba uma mensagem de erro
});