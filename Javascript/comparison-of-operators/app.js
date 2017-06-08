/**
 * Created by Dan1 on 6/6/17.
 */

// console.log(3 < 2 < 1);


// var a;
// a = 0;
//
// if (a || a === 0) {
//     console.log('something is there.');
// }

function greet(name) {
    name = name || '<Your name here>';
    console.log('Hello ' + name);
}

greet('Tony');
greet(0);
greet();