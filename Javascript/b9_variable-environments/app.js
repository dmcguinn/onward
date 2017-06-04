/**
 * Created by Dan1 on 6/4/17.
 */

function  b() {
    var myVar;
    console.log("b - " + myVar);
}

function  a() {
    var myVar = 2;
    console.log("a - " + myVar);
    b();
}

var myVar = 1;
console.log("global - " + myVar);
a();
