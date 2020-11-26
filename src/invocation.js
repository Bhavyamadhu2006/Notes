//Example 1 : Function invocation

function b() {                         // -----> Function b is created
  console.log("Logged b!");           // -----> Once invocated, logs b into console
}

function a() {                      // -----> Function a is created
  console.log("Logged a!");        // -----> Logs the text "Logged a!" into the console
  b();                            // -----> Function b invocation
}

a();                           // -----> Function a invocation
var c = "Hello";              // -----> Creates a variable c and assigns a value "Hello"
console.log(c);              // -----> Logs c into console

/* So, Initially the global execution context is created
1. The creation phase (first phase) of the execution phase is created
2. In the creation phase, the memory space is set up for functions and variables
3. Then the execution phase starts and runs the code line by line
4. In the example 1 given above, as the code runs line by line, once it hits the line 10 (Where function a is invoked), it creates another
   execution stack on top of the global execution context.
5. So, the execution context (a()) is created, and starts executing the function line by line.
6. Once it hits the line 7 (Where function b is invoked), it creates another execution stack on top of function a()
7. Then the function b starts running line by line
8. Once b finishes it's exceution, it will be popped off the stack.
9. Then a will be there on top of the stack, and once it finishes that, then it gets popped off too.
10. And finally it goes to the next line, where it hits line 11 and starts executing from there.
11. At anytime the execution stack that is currently running will become the current execution context */

