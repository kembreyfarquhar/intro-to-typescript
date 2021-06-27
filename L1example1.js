let myName = "Katie";
let doILikePizza = true;

// What will happen if we run this code?
myName.push("something");

// What about this code? Do you see any issues?
doILikePizza = "false";

// Will this code run? Do you think the developer intended on this behavior?
if (doILikePizza) {
  console.log("I like pizza!");
}
