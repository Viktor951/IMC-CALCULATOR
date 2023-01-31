const Nome = 'João Victor';
const Sobrenome = 'Sousa';
const Idade = 20;
const Peso = 62;
const alturaEmM = 1.65;
let imc;
let anoNascimento;
imc = Peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - Idade;

console.log( Nome , Sobrenome , "tem" , Idade , 'anos, peso', Peso, 'kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', imc);
console.log(Nome , 'nasceu em', (anoNascimento));