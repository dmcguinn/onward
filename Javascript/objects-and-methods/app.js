/**
 * Created by Dan1 on 6/9/17.
 */

var person = new Object();

person["firstname"]= "Tony";
person["lastname"]= "Alicia";

var firstNameProperty = "firstname";

console.log(person);
// console.log(person[firstNameProperty]);

// console.log(person.firstname);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.city);
console.log(person["address"]["state"]);

console.log(person);
