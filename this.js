function sayMyName(name) {
    console.log(`My name is ${name}`)
}
// You can determine what is logged to the console by how a function is called and this is the same with "this" keyword.

sayMyName(`Walter White`) //My name is Walter White
sayMyName(`Heisenberg`) //My name is Heisenberg

//How to determine "this"?
//1 Implicit binding
const person = {
    name: 'John',
    sayName: function () {
        console.log(`My name is ${this.name}`)
    },
}

//person.sayName() //My name is John


//2 Explicit binding

//for 5
globalThis.name = 'Superman'

function sayName() {
    console.log(`My name is ${this.name}`)
}

//sayName.call(person) //My name is John


//3 New binding
function Person(name) {
    // this = ()
    this.name = name
}

const p1 = new Person('Johnny')
const p2 = new Person('Narcis')
//console.log(p1.name, p2.name) //Johnny Narcis


//4 Default binding
sayName() //My name is undefined
