/* let person = {
    name: 'Faruk',
    place:{
        country: 'Bangladesh',
        city: 'Dhaka'
    },
    friends:['Annie', 'Becky']
};

let {name:foo,
    place: {
        country : bar,
        city : x}
   } = person;

   console.log(foo);
   console.log(bar); */

   const array1 = [4, 6, 9];
   console.log(array1.map(x => x* 5));

const sweetArray = [2, 3, 4, 5, 35];
// const sweeterArray = sweetArray.map(sweetItem => sweetItem * 2);
const makeSweeter = sweetItem => sweetItem * 2;


console.log(makeSweeter)


 

