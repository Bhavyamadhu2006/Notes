//Example 1: Hoisting:

var a;                            // -----> Variable is created with name "a"
console.log(a);                  // -----> Returns undefined, as the value is not yet assigned at this stage
a = "Hello World!";             // -----> Now we have a value for the variable "a", which is created in the line 3
console.log(a);                // -----> Return "Hello World!"

b();                         // -----> function b is invoked, before it is defined. This returns "Called b!"
function b() {              // -----> function is created with the name "b"
  console.log("Called b!");// -----> What the function has to do when it is called is written here.
}

// So, Javascript engine has the access to the values of the variables only after the value is defined.
// But it has access to the entire function even before it is defined.
// The variables are created using the keywords var, const and let.
// Functions are created using the keyword function.
// So, once the execution phase is started, Javascript looks for those keywords and stores the value in the memory space
// And we will have the access to those values through out the application

// Example 2: Error
console.log(c);           // -----> This line throws the error, as c is never defined before

//Example 3: Undefined
console.log(d);          // -----> This line returns undefined
var d;

//In this case the variable is created but the value is not yet defined, so returns undefined

var e  = "Hi!";         // -----> Variable is created and assigned a value
console.log(e);        // -----> Returns the value of "e"

//Example 4: functions
f();                   // -------> Return the text "The function is created"

function f(){
  console.log("The function is created");
}

//Example 5: Another example of functions
function g() {                       // ----> Function is created with name "g"
  console.log("Good Morning!");
}

g();                  // ----> function is invoked here and it returns the text "Good Morning!"

//Example 6: JavaScript and undefined

var h;
console.log(h);

//In this phase variable h is created but never assigned a value. So the Javascript engine has a placeholder for these type of variables.
//That placeholder is called as "Undefined"

console.log(I);

//In this case Javascript is not aware of this variable "I", as it is never created and therefore not there in the memory space.
//So, this return error

//Example 7: Try this out

var J;
console.log(J);

if (J === undefined) {
  console.log("J is undefined");
}
else {
  console.log("J is defined");
}

//This returns undefined and J is undefined.

//Example 8: Try this as well

var K = "Have a nice day!";
console.log(K);

if (K === undefined) {
  console.log("K is undefined");
}
else {
  console.log("K is defined");
}

//This returns the text "Have a nice day" and "K is defined"