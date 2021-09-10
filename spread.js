const numbers =[12, 25, 28, 30, 40, 80];
console.log(numbers);


console.log(...numbers);
const max = Math.max(23, 88, 60);
console.log(max);
const maxInArray = Math.max(...numbers);
console.log(maxInArray);

const numbers2 = [10, ...numbers, 120];
numbers.push(99);
console.log(numbers);
console.log(numbers2);
numbers.unshift(25);
numbers.shift(10);
console.log(numbers);

console.log(sum);
function getsum(a, b=9){
    return a+ b;
}
console.log(getsum(2, 7));
const y = x=>x*x;
const x = y(5);
console.log(y);
console.log(x);
const name = 'Hero'; 
const greetings = 'Welcome Home!'+' '+name;
console.log(greetings);
const greetings =`Welcome Home! ${name}`;
console.log(greetings);
const myFunc=() =>('Nayok!');
const division = (num1, num2) => console.log(num1/num2);
division(4, 2);
const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ];
const array2=[...nayikas];
console.log(array2);
const numbers=[10,20,30,40,50,60,70 ];
console.log(Math.max(...numbers));

const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari'];
console.log(newCars);


