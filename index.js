const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];
const respostaAleatoria = document.querySelector("#respostaAleatoria");
const perguntaUser = document.querySelector("#inputUser");
const button = document.querySelector("#btn");

const fazerPergunta = () => {
  if (perguntaUser.value == "") {
    alert("por favor digite uma pergunta!");

    return;
  }
  button.setAttribute("disabled", true);
  const pergunta = "<div>" + perguntaUser.value + "</div>";

  const totalRespostas = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);
  const enviar = respostas[numeroAleatorio];

  respostaAleatoria.innerHTML = pergunta + enviar;

  respostaAleatoria.style.opacity = 1;

  setTimeout(() => {
    respostaAleatoria.style.opacity = 0;
    button.removeAttribute("disabled");
  }, 2000);
};
