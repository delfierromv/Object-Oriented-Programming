'use strict';
///////////////////////
//constructor functions and the new operator
/*
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
*/
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


//////////////////////////////////////////////////
//CODING CHALLENGE #2
class Car {
  constructor(make,speed){
    this.make = make;
    this.speed = speed;
  }

  accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUs(){
    return this.speed/1.6;
  }
  set speedUs(speed){
    this.speed = speed*1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();

console.log(ford.speed);
*/
//////////////////////////////////////////////
/*
//Inheritance between "Classes": Constructor Functions
const Person = function(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function(){
  console.log(2037 - this.birthYear);
};

//typically want to have the same functionality as parent class including additional ones which means we will need to have the same parameters with additional ones
const Student = function(firstName, birthYear, course){
  Person.call(this,firstName, birthYear);
  this.course = course;
};

//LINKING PROTOTYPES -- making Person the prototype for Student
Student.prototype = Object.create(Person.prototype)


Student.prototype.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

////////////////////////////////////////////////////////////////////
//CODING CHALLENGE #3

const Car = function(make, speed){
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

const EV = function(make, speed, charge){
  Car.call(this, make, speed)
  this.charge = charge;
}

//LINKING THE PROTOTYPES
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
  this.charge = chargeTo;
}

EV.prototype.accelerate = function(){
  this.speed+=20;
  this.charge --;
  console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`);
};

const car1 = new EV('Tesla',120, 23);
console.log(car1);
car1.accelerate();
console.log(car1);
car1.brake();
console.log(car1);
car1.chargeBattery(90);
console.log(car1);



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

//the keyword 'extends' is how we link the classes
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course){
    //instead of manually calling the PersonCl function (PersonCl.call(this,fullName, birthYear, course), INSTEAD we call the SUPER FUNCTION..which is basically the constructor function of the parent class)
    //THIS ALWAYS NEEDS TO HAPPEN FIRST because this is responsible for creating the this keyword in this subclass. so we wouldn't be able to access the this keyword without calling the super function first
    super(fullName, birthYear)
    this.course = course;
    //if we didn't need to use the this keyword, then we wouldn't need to call the super function at all and it would still work.
  }
  introduce(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
//OVERWRITE THE CALCAGE FUNCTION FOUND IN PERSON PROTOTYPE
  calcAge(){
    console.log(`I'm ${2037-this.birthYear} years old, but as a student I feel more like ${2037-this.birthYear +10}`);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.introduce()
martha.calcAge();


//////////////////////////////////////////////
//INHERITANCE BETWEEN "CLASSES": OBJECT.CREATE

const PersonProto = {
  calcAge(){
    console.log(2037-this.birthYear);
  },

  init(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};
//Basically we want to add another prototype in the middle of the chain
const steven = Object.create(PersonProto);

const StudentProto= Object.create(PersonProto);

StudentProto.init = function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

StudentProto.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

*/
/////////////////////////////////
//ANOTHER EXAMPLE--BANKIST ACCOUNT EXAMPLE
//////////////////////////////////////////////ALSO....
//ENCAPSULATION: PRIVATE CLASS FIELDS AND METHODS


//1. Public fields (ex the movements & locale field)
    //NOTE: think of a field as a property that will be on all instances, but not on the prototype.
//2. Private fields
    //NOTE: with private fields you can make it 
//3. Public methods
//4. Private methods
class Account{
  //1. PUBLIC FIELDS
  locale = navigator.language;
  _movements = [];
  //2. PRIVATE FIELDS



  constructor(owner, currency, pin){
    this.owner = owner;
    this.currency = currency;
    //PROTECTED PROPERTY
    this._pin = pin;
    //we will protect this data so that no one can accidentally manipulate it by placing an underscore before it..again, this does not actually make the property TRULY private, but this is just a convention.
    //because the underscore doesn't make it truly private, we instead call it PROTECTED PROPERTY--
    //you can still access it outside of the class, however, at least your team will know that it is not supposed to be touched outside of the class.
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  
//PUBLIC INTERFACE OF OUR OBJECTS

//if we still wanted to give accesss to the movements array from the outside, then we would have to implement a public method for that.
//this way you can still access the movements, but cannot override them.
  getMovements(){
    return this._movements;
  }
  deposit(val){
    this._movements.push(val)
  }

  withdraw(val){
    this.deposit(-val)
  }

  _approveLoan(val){
    return true;
  }
  requestLoan(val){
    if(this._approveLoan(val)){
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111,);
console.log(acc1);

//We should not be able to manually mess with the movements property so we should encapsulate it.
// acc1.movements.push(250);
// acc1.movements.push(-140);
console.dir(Account);
acc1.deposit(250);
acc1.withdraw(140)
acc1.requestLoan(1000)
//this approve loan method should be an internal method that a regular user should not be able to access-- this is why we need data encapsulation and data privacy.
// acc1.approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
// console.log(acc1.pin);

//ENCAPSULATION MEANS TO KEEP SOME PROPERTIES AND METHODS PRIVATE INSIDE THE CLASS SO THAT THEY ARE NOT ACCESSIBLE FROM OUTSIDE THE CLASS. THEN THE REST OF THE METHODS ARE BASICALLY EXPOSED AS A PUBLIC INTERFACE WHICH WE CAN ALSO CALL API !!!!!!!!!!!

//Two reasons why we need encapsulation and data privacy
//1.prevent code from outside of a class to accidentally manipulate our data inside the class
//2. When we expose only a small interface, soo a small API consisting only of a few public methods, then we can change all the other internal methods with more confidence because we can be sure that external code does not rely on these private methods, therefore our code will not break when we do internal changes.

//However, JavaScript classes actually do not yet support real data privacy and encapsulation, but we can fake encapsulation by simply using a convention.


