// Annotating Types
let myName: string = "Katie";
let katieLikesPizza: boolean = true;

// Nonexistant variable
// const value = iDontExist * 5;

// Type Inference
// let myName = "Katie";
// let myAge = 29;
// let katieLikesPizza = true;

// katieLikesPizza = 'false'

// if(katieLikesPizza){
//     console.log('I like pizza!')
// }

const family = [
  {
    name: "Theresa",
    relationship: "mother",
  },
  {
    name: "Rick",
    relationship: "father",
  },
];

// console.info('family', family)

// family.push({name: "Jen", relationship: 'sister', age: 32})

// console.info('family 2', family)

// family.push(2)

// console.info('family 3', family)

const numbersArr: number[] = [10, 20, 30];

numbersArr.push(40);
// numbersArr.push("hi")

console.log(numbersArr);

const salePrices = numbersArr.map((num) => num * 0.25);

console.log(salePrices);
