/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When 'this' is used in a global scope, the value will equal the window or console object. 
* 2. Whatever is before the dot is 'this' when a function is called.
* 3. When a constructor function is used, it points to the object being created and returned by the constructor function. 
* 4. Whenever the 'call' or 'apply' method is being used, this is being defined. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function myName (name) {
//     console.log(this);
//     return name;
// }
// myName("Jose");

// Principle 2

// code example for Implicit Binding

// const myCat = {
//     sound: 'meow',
//     catSpeaks: function (name) {
//         console.log( `My name is ${name} and i go ${this.sound}!`);
//     }
// };
// myCat.catSpeaks('Milo');

// Principle 3

// code example for New Binding

// function animal(greeter) {
//     this.greeting = 'I go  ';
//     this.greeter = greeter;
//     this.speak = function () {
//         console.log(this.greeting + this.greeter);
//         console.log(this);
//     };
// }

// const dog = new animal('Woof Woof!');
// const cat = new animal('Meow Meow!');

// dog.speak();
// cat.speak();

// Principle 4

// code example for Explicit Binding

// function cat() {
//     console.log(this.sound);
// }

// let myCat = {
//     name:'Milo',
//     sound: 'Meow Meow'
// }

// cat.call(myCat);