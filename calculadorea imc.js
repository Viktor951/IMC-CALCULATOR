const Nome = 'Yorname';
const Sobrenome = 'LastName';
const Idade = 55;
const Peso = 80;
const alturaEmM = 1.75;
let imc;
let anoNascimento;
imc = Peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - Idade;

console.log( Nome , Sobrenome , "tem" , Idade , 'anos, peso', Peso, 'kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', imc);
console.log(Nome , 'nasceu em', (anoNascimento));
