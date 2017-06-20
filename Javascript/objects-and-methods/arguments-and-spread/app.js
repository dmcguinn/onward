function greet(firstname, lastname, language, ...other) {

    language = language || 'en';

    if (arguments.length === 0) {
        console.log('missing parameters!');
        console.log('----------------');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('arg 0: ' + arguments[0]);
    console.log('----------------');

}

greet(); //this is legal  returned 3 undefined's

greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');
greet('John', 'Doe', 'es', '111 Main St', 'new york');
