//function declaration

function sayHello(){
    console.log('Hello')
}

sayHello()

function sayHelloTo(name){
    console.log('Hello ' + name);
    //console.log(`Hello ${name}!`)
}

sayHelloTo('Mike');

function returnHi(){
    return 'Hi';
}

const gretting = returnHi();
console.log(gretting);
console.log(returnHi());

function returnHiTo(name){
    return `Hi ${name}`;
}

console.log(returnHiTo('John'));