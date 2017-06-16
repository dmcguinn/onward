/**
 * Created by Dan1 on 6/12/17.
 */
var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}


console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');
console.log(jsonValue);
