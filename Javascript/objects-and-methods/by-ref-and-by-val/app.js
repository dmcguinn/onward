/**
 * Created by Dan1 on 6/14/17.
 */
// by val - primitive
var a = 3;
var b;
b = a;
a=2;

console.log(a); // 2
console.log(b); // 3



// by ref - objects & functions
var c = { greeting: 'hi'};
var d;

d = c;
c.greeting = 'hello'; //mutate

console.log(d); // "hello"
console.log(c); // "hello"


// by reference (evan as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(d); // Hola
console.log(c); // Hola


// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' };
console.log(c); // howdy
console.log(d); // hola