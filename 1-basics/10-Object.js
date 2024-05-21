//In JavaScript, an object is a collection of key-value pairs, where each key is a string (or a symbol) and each value can be any type of data, including strings, numbers, booleans, arrays, functions, and even other objects.



let person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
  };
  console.log(person);
  console.log(person.name); // Output: John
  console.log(person.age); // Output: 30
  console.log(person.occupation); // Output: Developer




// Adding properties to an object
  let car = {
    make: 'Toyota',
    model: 'Corolla'
  };
  
  car.year = 2015;
  car.color = 'Silver';
  
  console.log(car); // Output: { make: 'Toyota', model: 'Corolla', year: 2015, color: 'Silver' }


  //Using methods in an object
  
  let person1 = {
    name: 'John',
    age: 30,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
  person1.greet(); // Output: Hello, my name is John and I am 30 years o