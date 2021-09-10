const numbers = [4, 6, 8, 10];
const doubleIt =(number => number * 2);

// const output  = numbers.map(doubleIt);
const output  = numbers.map(number => number * 2);
const output2  = numbers.map(number => number * number);
console.log(output);
console.log(output2);

const products =[
    {name: 'water bottle', price:100, color: 'white'},
    {name: '7 up',  price:50, color: 'white'},
    {name: 'Laptop', price: 30000, color: 'black'},
    {name: 'Cap', price: 200, colr: 'green'},
    {name : 'Mobile', price: 20000, color: 'black'},
    {name: 'Monitor', price:10000, color: 'balck'}
]

const productName = products.map(p =>p.name);
const productName2 = products.map(p =>p.price);
console.log(productName);
console.log(productName2);