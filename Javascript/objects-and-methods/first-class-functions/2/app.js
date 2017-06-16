/**
 * Created by Dan1 on 6/12/17.
 */
// var a;
//
// if (a === 3) {
//
// }

// greet();

// function greet() {
//     console.log('hi');
// }
//
// //anonymous function
// var anonymousGreet = function() {
//     console.log('hi');
// }
//
// greet();
// anonymousGreet();

function log(a) {
    a();
}

// log(3);
// log("Hello");

//pass a function to a function
log(function() {
    console.log('hi');
});




