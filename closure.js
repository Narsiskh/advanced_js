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


