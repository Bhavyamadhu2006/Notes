//Example of Hoisting:

var a;
console.log(a);
a = "Hello World!";
console.log(a);

b();
function b() {
  console.log("Called b!");
}