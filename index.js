// DESAFIO DIO
// Jornada do Herói - XP

// Criando as variáveis a serem utilizadas
let nome_Heroi = '';
let xp_Heroi = 0;
let nivel_Heroi = '';
let inimigosDerrotados;
const xp_Inimigo = 900;
let qtdInimigos;

//Inserindo o nome do herói
nome_Heroi = prompt('Digite o nome do seu herói: ');

// inserção de XP
inimigosDerrotados = prompt('Os inimigos foram derrotados?');
qtdInimigos = parseInt(prompt('Quantidade de inimigos derrotados'));

// Se os inimigos forem derrotados, a variável é validada o herói ganha XP. Se não, o combate se encerra.

if (inimigosDerrotados === 'Sim') {
  inimigosDerrotados = true;
  xp_Heroi = xp_Inimigo * qtdInimigos; // a quantidade de XP ganha do herói será igual à XP base do inimigo multiplicada por quantos ele derrotou
  console.log(xp_Heroi);
} else {
  inimigosDerrotados = false;
}

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
// Aplicando a saída na tela
document.getElementById('niveldoheroi').innerHTML = 'O herói ' + nome_Heroi + ' está no nível ' + nivel_Heroi;