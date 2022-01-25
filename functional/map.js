//Na função map o array resultante sempre tem o mesmo tamanho

const numbers = [1, 2, 3, 4, 5, 6];

const numbersV2 = numbers.map( function(el) {
    return el * 2;
})  
const numbersV3 = numbers.map( el => el * 2);

console.log(numbersV2);

const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.9},
    {name: 'Emma', score: 9.4},
    {name: 'Peter ', score: 9.1}
];

const getScore = el => el.score;

const result =  students
    .map(getScore)
    .map(Math.ceil);

console.log(result)