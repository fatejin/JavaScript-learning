// function statement

function funcName(param, param2){
    statements
}

function add(a, b){
    // console.log (a + b);
    return (a + b)
}

let result = add(2, 4);
console.log (result);



 // function declaration
 function greet(){
     console.log('hello there');
 }
greet();

 // function expression
 const speak = function(){
     console.log('good day!');
 };

 speak();

 // arguments & parameters

 const speak = function(name, time){
     console.log(`good ${time} ${name}`);
 };

 speak('mario','morning');

 // returning values

//  const speak = function(name = 'luigi', time = 'night'){
//      console.log(`good ${time} ${name}`);
//  };

const calcArea = function(radius){
    return 3.14 * radius**2;
};

const area = calcArea(5);
console.log(area);

// regular function 
const calcArea = function(radius){
return 3.14 * radius**2;
}

// arrow function
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log(`area is:` + area);

// practise arrow functions

const greet = function(){
    return 'hello, world';
};

const greet = () => 'hello, world';
const result = greet();
console.log(result);

const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10, 15, 30], 0.2));

// functions

const name = 'jin';

const greet = () => 'hello';

let resultOne = greet();
console.log(resultOne);

// methods

let resultTwo = name.toUpperCase();
console.log(resultTwo);

// callbacks & foreach

const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){
// do something
console.log(value);
});

// callbackFunc & practice
let people = ['mario', 'luigi', 'ryu', 'jin', 'egoing'];

people.forEach(function(person){
console.log(person);
});



let people = ['mario', 'luigi', 'ryu', 'jin', 'egoing'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'jin', 'egoing'];

let html = ``;

people.forEach(function(person){ //person = > arrow func
// create html template
html += '<li style="color: purple">${person}</li>';
});

console.log(html);
ul.innerHTML = html;