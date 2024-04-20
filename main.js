/* Nested Function Scope */
// let a = 10
// function outer () {
//     let b = 20
//     function inner() {
//         let c = 30
//         console.log(a, b, c)
//     }
//     inner()
// }
// outer() //10, 20, 30

/* Closure */
function outer() {
    let counter = 0
    function inner() {
        counter++
        console.log(counter)
    }
    /* inner() */
    return inner
}
const fn = outer()
fn()
fn() //1 2
/* outer() //1
   outer() //1 1
*/
