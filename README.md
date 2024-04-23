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

## Function Currying
* Currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.
* Function f(a,b,c) is transformed to f(a)(b)(c).
<br>

!! Currying does not call a function, it simply transforms it.
<br>
!! Currying is different from partial application. partial app transforms a function into another function with small arity(the number of operands or the arguments a function receives.).

## this
* The JavaScript, `this` keyword which is used in a function, refers to the object it belongs to. <br>
* It makes functions reusable by letting you decide the object value/ <br>
* `this` value is determined entirely by how a function is called.

### How to determine `this`?
#### 1) Implicit binding:
This rule will tell you what `this` refers to most of the time it states that when a function is invoked with the dot notation, the object to the left of the dot is what `this` keyword is referencing.
#### 2) Explicit binding:
In this scenario, we have to explicitly specify the Content when the function is called. To do so, we can use the call method. In JavaScript, every function has a built-in method named `call` which allows you to specify the context with which a function is involved.
#### 3) New binding:
In JS We can invoke a function with the `new` Keyword, and in Such a Scenario the function is invoked with `this` keyword referencing an empty object.
#### 4) Default binding:
It is the fallback binding if none of the other three rules are matched. none of the three rules are satisfied, Is will default to the global scope and set `this` Keyword to the global object. So if none of the three rules are satisfied, JS will default to the global scope and set `this` keyword to the global object.

### Order of precedence
1) New binding
2) Explicit binding
3) Implicit binding
4) Default binding