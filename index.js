// DESAFIO DIO
// Jornada do Herói - XP

const PromptSync = require('prompt-sync'); // A constante prompt-sync para permitir que o usuário faça a inserção de dados pelo terminal do VSCode, pelo pacote prompt-sync

// Criando as variáveis a serem utilizadas
let nome_Heroi = 'Henrique';
let xp_Heroi = 0;
let nivel_Heroi = '';
let inimigosDerrotados;
const xp_Inimigo = 900;
let qtdInimigos;
const prompt = PromptSync();

// //Inserindo o nome do herói
nome_Heroi = prompt('Digite o nome do seu herói: ');

// inserção de XP
inimigosDerrotados = prompt('Os inimigos foram derrotados? ');
qtdInimigos = parseInt(prompt('Quantidade de inimigos derrotados '));

// Se os inimigos forem derrotados, a variável é validada o herói ganha XP. Se não, o combate se encerra.

if (inimigosDerrotados === "Sim") {
  xp_Heroi = xp_Inimigo * qtdInimigos; // a quantidade de XP ganha do herói será igual à XP base do inimigo multiplicada por quantos ele derrotou
  console.log(xp_Heroi);
  inimigosDerrotados = true;
} else {
      qtdInimigos = 0;
      console.log("Você foi derrotado! Tente novamente! ");
      inimigosDerrotados = false}

// Rankeamento do nível do herói de acordo com o valor da variável xp_Heroi
do {
  if (xp_Heroi < 1000) {
    nivel_Heroi = 'Ferro';
  } else if (xp_Heroi >= 1001 && xp_Heroi <= 2000) {
        nivel_Heroi = 'Bronze';
  } else if (xp_Heroi >= 2001 && xp_Heroi <= 5000) {
        nivel_Heroi = 'Prata';
  } else if (xp_Heroi >= 5001 && xp_Heroi <= 7000) {
        nivel_Heroi = 'Ouro';
  } else if (xp_Heroi >= 7001 && xp_Heroi <= 8000) {
        nivel_Heroi = 'Platina';
  } else if (xp_Heroi >= 8001 && xp_Heroi <= 9000) {
        nivel_Heroi = 'Ascendente';
  } else if (xp_Heroi >= 9001 && xp_Heroi <= 10000) {
        nivel_Heroi = 'Imortal';
  } else{
        nivel_Heroi = 'Radiante';
  }
} while (inimigosDerrotados === 'true');

console.log('O herói de nome ' + nome_Heroi + ' está no nível de ' + nivel_Heroi);
