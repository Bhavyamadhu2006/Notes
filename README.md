# Notes

This is completely focussed on JavaScript, the Programming language. Let's know how the Javascript works under the hood in this notes.

First important to know while coding. "DO NOT IMITATE, UNDERSTAND!"

Set up: We need 2 things
     a) Internet Browser with developer tools (Ex: Chrome)
     b) The text Editor (I prefer Visual studio code)

Big Word Alert:

"SYNTAX PARSER"
  1. A Program that reads your code and determines what it does and if its grammar is valid.
  2. Implementing the syntax in a way, a computer can understand.

"LEXICAL ENVIRONMENT":
  1. Where Something sits physically in the code you write.
  2. "Lexical" means "having to do with words or grammar". A Lexical environment exists in programming languages
  in which where you write something is important.

"EXECUTION CONTEXT":
  1. A Wrapper to help manage the code that is running
  2. There are lots of lexical environments. Which one is currently running is managed via execution contexts.
     It can contain things beyond what you have written in the code.


CONCEPTUAL ASIDE: Name/Value Pairs And Objects
  A name which maps to a unique value
  The name may be defined more than once, but only van have one value in any given context
  That value may be more Name/Value pairs.

  OBJECT: A Collection of Name Value Pairs (Example in object.js file)

 The Global environment and the global object:
    JavaScript code is run inside an execution context.
    There is more than one that runs during a JavaScript program normally.

The global execution object creates two things for us.
    1. Global object (Collection of name/value pairs)
    2. "this" variable

Creation and Hoisting:
    In the creation phase, javascript engine has 2 things ready for you: One is the Global object and the other is the "this" variable.
    And there is one more thing the Javascript engine has ready for you is the outer environment (This is setup when the execution is started)
    And then it sets up the memory space for variables and functions that are defined in the application.

In case of variables : It works differently, when it comes to the variables. It stores the name os the variable in the memory space.
                       The value of the variable is known only when the javascript engine hits that line in the code.
                       So, it does not have access to the value of the variable before.

In case of functions : When the function is defined, it is defined inside the memory space completely, along with what is defined inside
                       the function (Example in hoisiting.js file).

























































































































