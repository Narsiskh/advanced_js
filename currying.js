/* Function Currying */
//1
function sum(a, b, c) {
    return a + b + c
}
console.log(sum(2, 3, 5))

// sum(2,3,5) sum(2)(3)(5)

function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c)
            }
        }
    }
}

const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5)) //10

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5) //10

//2 sum(2)(6)(1)
function plus(a) {
    return function (b) {
        return function (c) {
            return a+b+c
        }
    }
}

console.log(plus(2, 6, 1)) //9

//3 evaluate("sum")(4)(2) => 6 , evaluate("multiply")(4)(2) => 8, evaluate("divide")(4)(2) => 2, evaluate("subtract")(4)(2) => 2
function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation === "sum") return a + b;
            else if (operation === "multiply") return a * b;
            else if (operation === "divide") return a / b;
            else if (operation === "subtract") return a - b;
            else return "Invalid operation";
        }
    }
}

console.log(evaluate("sum")(4)(2)); //6
const mul = evaluate("multiply")
console.log(mul(4)(2)); //8
console.log(evaluate("divide")(4)(2)); //2
console.log(evaluate("subtract")(4)(2)); //2

//4 Currying vs Partial Application
// partial app: It transforms a function into another function with small arity(the number of operands or the arguments a function receives.)
function summing(a) {
    return function (b, c) {
        return a + b + c
    }
}

const x = summing(10)
console.log(x(5, 6)); //21
console.log(x(3, 2)); //15
//or
console.log(summing(20)(1, 4)) //25
// currying:
function adding(a) {
    return function (b) {
        return function (c) {
            return a+b+c
        }
    }
}

console.log(adding(3, 6, 1)) //10

//5 Manipulating DOM
function updateElementText(id) {
    return function (content) {
        document.querySelector("#" + id).textContent = content
    }
}

const updateHeader = updateElementText("heading")

updateHeader("Hello Narcis")