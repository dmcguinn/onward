/**
 * Created by Dan1 on 6/10/17.
 */

// var person = {};
var Tony = {
    firstname: 'Tony',
    lastname: 'Alicea',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};


// console.log(Tony);

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Tony);

greet ({
    firstname: 'Mary',
    lastname: 'Doe'
});

Tony.address2 = {
    street: '333 Second St.'
}

