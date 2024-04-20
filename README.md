# Advanced JavaScript

## Scope
### 1) Block Scope:
Variables declared inside a pair of curly braces cannot be accessed from outside the block.

### 2) Function scope:
Variables declared inside a function cannot be accessed from outside the function.

### 3) Global Scope:
Globally scoped variables can be accessed inside a block or function.

### 4) Nested Function:
Scope when we have nested, functions Javascript variable lookup starts with the innermost function where we are trying to access the variable and moves outward until it reaches the global scope.
<br>

!! Remember that nested functions have access to variables declared in their own scope as well as variables declared in the outer scope.


## Closure
In JavaScript, when we return a function from another function, we are effectively returning a combination of the function definition along with the function's scope. This would let the function definition have an associated persistent memory which could hold on to live data between executions. That combination of the function and its scope chain is what is called a closure in JavaScript.