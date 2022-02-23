'use strict';
///////////////////////
//constructor functions and the new operator
const Person = function(firstName, birthYear){
  // console.log(this);

  //INSTANCE PROPERTIES
  this.firstName = firstName;
  this.birthYear = birthYear;
  //We can set the property names to something and does not have to be the same as the parameters, but this is a convention so have it be the same whenever possible.

  //Never do this vvvvvv ( create a method inside of a constructor function) because if there were say a thousand instances, then there would be a thousand copies of this function so would be terrible for performance so you should use prototypes and prototypal inheritance
  // this.calcAge = function(){
  //   console.log(2037 - this.birthYear);
  // };
}
/*
const jonas = new Person('Jonas', 1991);
console.log(jonas);
//1.New empty object is created
//2. function is called, this = object
//3. object linked to prototype
//4.function automatically returns that empty object from step 1

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

// const jay = 'Jay';

console.log(jonas instanceof Person);
// console.log(jay instanceof Person);


//STATIC METHODS--cannot be inherited--it is not attached in prototype
Person.hey = function(){
  console.log('Hey there 😀');
};
Person.hey();

//Prototypes
console.log(Person.prototype);

//only one copy of this function
Person.prototype.calcAge =function(){
    console.log(2037 - this.birthYear); //the this keyword is set to the object that is calling the method
};
*/
 /*
jonas.calcAge();
matilda.calcAge();

//can confirm that jonas is an object of the Person prototype
console.log(jonas.__proto__);
//The prototype of the jonas object is essentially the prototype property of the constructor function
//the new keyword creates the proto property and sets its value to the prototype property of the function that is being called.

//2 ways to verify this
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));

//person.prototype is not the prototype of person, but instead Person is what is going to be used as the prototype of all the objects that are created with the Person constructor function
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); //own property
console.log(jonas.hasOwnProperty('species')); //inherited property

console.log(jonas.__proto__);
//Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor)
console.dir(Person.prototype.constructor);

//ARRAY PROTOTYPE
const arr = [3,6,5,4,53,6,634,6,3,]; 
//using array shorthand "[]" is the same thing as using "new Array"
console.log(arr.__proto__);
console.log(arr.__proto__=== Array.prototype);

console.log(arr.__proto__.__proto__);

//Adding a new method to Array prototype for fun/experiment
//not recommended for two reasons. 1) the next version of JS might add a method with the same name that we are adding but might work in a different way 2)if working on a team of devs, and multiple developers implement the same method with a different name, then that will create bugs
Array.prototype.unique = function(){
  return [...new Set(this)]
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x=>x+1);
*/

/*
//CODING CHALLENGE #1

const Car = function(make, speed){
  this.make = make;
  this.speed = speed;
};

const car1 = new Car('BMW', 120)
const car2 = new Car('Mercedes', 95)

console.dir(Car);
console.log(car1);
console.log(car2);

Car.prototype.accelerate = function(){
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function(){
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
console.dir(Car);

car1.accelerate()
car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.brake();
console.dir(car1);
console.dir(car2);

//ES6 CLASSES- classes are still just functions so they can either be expressions or declarations

*/
//class expression
// const PersonCl = class{
// }
/*
//class declaration
class PersonCl{
  constructor(fullName, birthYear){
    this.fullName= fullName;
    this.birthYear = birthYear;
  }
  //INSTANCE METHODS--can be used by any instance as it is being added to the prototype thus allowing the instances to use prototypal inheritance to use these methods.
  calcAge(){
    console.log(2037-this.birthYear);
  }//no comma
  //all methods that we write in the class (but outside of the constructor) will be on the prototype of the objects and not on the objects themselves
  greet(){console.log(`Hey ${this.firstName}`)};

  get age(){
    return 2037 - this.birthYear;
  };

  //Set a property that already exists--need to use BOTH set and get
  set fullName(name){
    console.log(name);
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`)
  }

  get fullName(){
    return this._fullName;
  }

  //STATIC METHOD--can NOT be used by any instance as it is NOT being added to the prototype thus NOT allowing the instances to use prototypal inheritance for the use of these methods.
  static hey(){
    console.log('Hey😇');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis',1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function(){console.log(`Hey ${this.firstName}`)};
jessica.greet();

const walter = new PersonCl('Walter White', 1965);


PersonCl.hey();//static method
jessica.hey();// doesn't work because hey is a static method and can only be used on the constructor it is attached to.


//1.classes are NOT hoisted---so even if they are class declarations(functional declarations) are hoisted which means we can use them before they are declared in the code. But with classes that doesn't work.
//2.Classes are also firt-class citizens. which means thaht we can pass them into function and also return them from functions
//3. Classes are executed in strict mode.-- if we didn't activate it for our entire script, all the code that is in the class will be executed in strict mode.


//SETTERS AND GETTERS
//every object in JS can have setter and getter properties

const account = {
  owner: 'jonas',
  movements: [200,530, 120, 300],

  get latest(){
    return this.movements.slice(-1).pop();
  },
  set latest(mov){
    //any setter method needs to have exactly one parameter
    this.movements.push(mov);
    //not necessary to have both setters and getters, can have one or the other,but can do both if needed.
  }
};

console.log(account.latest);

account.latest= 50;
console.log(account.movements);
*/

/*
//////////////////////////////////////////////
//OBJECT.CREATE

const PersonProto = {
  calcAge(){
    console.log(2037-this.birthYear);
  },

  init(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const steven = Object.create(PersonProto); //only an empty object right now
console.log(steven);

// steven.name = 'steven';
// steven.birthYear = 2002;
// steven.calcAge();

console.log(steven.__proto__=== PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

//////////////////////////////////////////////////
//CODING CHALLENGE #2

const CarCl = class{
  constructor(make, speed){
    this.make = make;
    this.speed = speed;
  }
  
  accelerate = function(){
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

brake = function(){
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};


  get speedUS(){
    return `${this.speed/1.6} mi/h`;
  }

  set speedUS(speed){
    this.speed = speed *1.6;
  }
};

const ford = new CarCl('Ford', 120)
console.log(ford.speedUS)
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford);