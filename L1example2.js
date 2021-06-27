// These variables that we wrote in our TS file have corrosponding types. These are called Annotated Types, because the types are like explanitory notes alongside the variables.

// Does anyone know how I could console.log the type of a variable?
// We can use our existing code for myName.
console.log(typeof myName);

// What if we run that on katieLikesPizza?
console.log(typeof katieLikesPizza);

// Nonexistant variable
const value = iDontExist * 5;

// What will happen?
console.log(value);

// What do you think will happen if we do this in a TS file?
// ...do it

// We learned type annotations, now what if I were to write
let katieLikesPizza = true;
// Is there type safety there?
// If no type is annotated, TS infers the type itself. Here, it can see that the value for this variable is a boolean. So katieLikesPizza is typed as a boolean variable. This is called Type Inference, because TS is inferring the type based on the value.

// Which is better, type annotation or type inference?
// Neither one is BETTER than the other. As you're learning, it's best to always use type annotation, because it forces you to pay attention to your variable types, as well as ensuring the intended type immediately at the variable's initialization.
