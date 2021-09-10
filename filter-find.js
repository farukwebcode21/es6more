const numbers =[5, 13, 7, 41, 30, 5, 2, 19, 20, 40];
const bigNum =numbers.filter(number => number >= 20);
const smallNum = numbers.filter(number => number < 10);

// Object

const products =[
    {name: 'water bottle', price:100, color: 'white'},
    {name: '7 up',  price:50, color: 'white'},
    {name: 'Laptop', price: 30000, color: 'black'},
    {name: 'Cap', price: 200, colr: 'green'},
    {name : 'Mobile', price: 20000, color: 'black'},
    {name: 'Monitor', price:10000, color: 'black'}
]

const expensive = products.filter(pd => pd.price >500);
const expensive2 = products.filter(pd => pd.color == 'black');
const whiteItem = products.filter(pd => pd.color == 'pink');

console.log(bigNum);
console.log(expensive);
console.log(expensive2);
console.log(whiteItem);