//event queue => thread pool

console.log("Welcome to asynchronous");

setTimeout(() => {
  console.log("Function called");
}, 1000);
console.log("I am feeling good");
