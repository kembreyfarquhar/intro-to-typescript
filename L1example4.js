// Arrays
const numbersArr = [10, 20, 30];

// Like our objects in the last example, do you notice anything about the elements in this array?
// They're all numbers
// Here's how you annotate an array type in TS. There are ways to have multiple types in the array, but we'll go over that later on.
// Let's push another number onto the array
numbersArr.push(40);

// Now, let's push a string. Let's console.log to see the array now.
numbersArr.push("hi");
console.log(numbersArr);

// What do you think will happen in TS?

// So what if we wanted to perform some logic on each element in this array, such as getting a sale price for 25% off?
// What will happen in our JS array that contains a string?
// The string element gave us NaN. Could that potentially lead to unintended results, or break our app?

const salePrices = numbersArr.map((num) => num - num * 0.25);

console.log(salePrices);
