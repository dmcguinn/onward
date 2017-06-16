/**
 * Created by Dan1 on 6/15/17.
 */

function a() {
    console.log(this);
    this.newvariable = 'hello';
}

var b = function() {
    console.log(this);
}


a(); //window
console.log(newvariable); //hello
b(); //window

// var c = {
//     name: 'The c object',
//     log: function() {
//         this.name = 'Updated c object';
//         console.log(this);
//
//         var setname = function(newname) {
//             this.name = newname;
//         }
//         setname('Updated again! The c object');
//         console.log(this);
//     }
// }
//
// c.log() //Object {name: "The c object", log: function}

// self pattern
var c = {
    name: 'The c object',
    log: function() {
        var self = this;

        self.name = 'Updated c object';
        console.log(self);

        var setname = function(newname) {
            self.name = newname;
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();
