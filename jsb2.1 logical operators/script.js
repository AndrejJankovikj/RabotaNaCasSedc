console.log('Logical Operators are on');



//AND 

console.log('and');
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

//OR

console.log('OR');
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true 
console.log(false || false); //false



//NEGATION

console.log(!true); //false
console.log(!false); //true

//COMPARISSON

let comp1 = 4 < 7; //true
let comp2 = 5 != 8; //true
let a = 5;
let b = 9
let comp3 = a > b; //false
console.log(comp3);

let expression = comp1 && comp2 && comp3; //true && true && false = false
console.log(`expression: ${expression}`);

let expression2 = comp1 || comp2 || comp3; //true || true || false= True
console.log(expression2);

let complexExpression = ((5 < 2) && (2 >= 3));  //false && false = false
console.log(complexExpression);

//TRUTHY FALSY 

console.log('TRUTHY/FALSY values');

console.log(true && true); //true
console.log(false && (3 == 4)); //false
console.log('Cat' && 'Dog'); //Dog
console.log("false" && ''); // ''
console.log('' || ""); //;
let d = true;
console.log(!!d);


let firstNum = 12;
let secondNum = 4;
console.log(secondNum < firstNum);
console.log(5 == "5");
console.log(5 === "5");

//if(statement ){statement}


























