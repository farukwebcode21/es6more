// 1. let and const 
const name = "Faruk";
let lastName ='Ahmad';
// console.log(name, lastName);// Faruk Ahmad
// lastName = "Faruk Ahmad";
// console.log(lastName);// Faruk Ahmad
// name = 'Faruk Ahmad';
// //TypeError: Assignment to constant variable. because constand is bear fided componend
// console.log(name)

// 2. Template String

const student =[
    {id: 01, name:'Erik', Father: 'Berik', class: 'Two'},
    {id: 02, name: 'Sarik', Father: 'Sariken', class: 'Five'},
    {id: 03, name :'Rashel', Father: 'Sorima', class: 'Six'}
]

const result = `Your First Name \n ${name} \n and\n last name \n ${lastName}\n Thanks ?`;
console.log(result);

// 3. one Parametrer arrow Function
const number=(num)=> num /5;
console.log(number(120));

// 4. two parameter arrow function plus and Multiplacation
const user =(number1, number2)=>(number1+2) * (number2 +2);
console.log(user(10, 20));

// 5. How to Declear 3 parameter is arrow function and multiplacation two number
const yournumber =(first, second, third)=> first * second * third;
console.log(yournumber(20, 30, 40));

/* const inputNumber =(num1, num2)=>{
    const addNum1 = num1+2;
    console.log(addNum1);
    const addNum2 = num2+2;
    console.log(addNum2);
    return addNum1 * addNum2;
}
console.log(inputNumber(100, 200)); */

const inputNumber =(num1, num2)=>{
    return (num1+2) * (num2 + 2) ;
   
}
console.log(inputNumber(100, 200));

// 5 how to declear annay and how to map in array and all element multiple 5
const array1 = [2, 5, 8];
console.log(array1.map(x => x *5));

// Define the string
var decodedStringBtoA = 'Hello World!';

// Encode the String
var encodedStringBtoA = btoa(decodedStringBtoA);
console.log(encodedStringBtoA);


var encodedStringAtoB = 'LCBGYXJ1w';

// Decode the String
var decodedStringAtoB = atob(encodedStringAtoB);
console.log(decodedStringAtoB);