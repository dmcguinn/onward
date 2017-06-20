/**
 * Created by Dan1 on 6/20/17.
 */

function greet(firstname, lastname, language) {
    language = language || 'en';

    if (language === 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }

    if (language === 'es') {
        console.log('Hola ' + firstname + ' ' + lastname);
    }

}

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'es');
}

// greet('John', 'Doe', 'en');
// greet('John', 'Doe', 'es');
greetEnglish('John', 'Doe', 'es');
greetSpanish('John', 'Doe', 'es');
