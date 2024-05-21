// Define a class called "Car"
class Car {
    // Constructor function (called when object is created)
    constructor(color, model, speed) {
      this.color = color;
      this.model = model;
      this.speed = speed;
    }
  
    // Method (behavior) for the object
    accelerate() {
      this.speed += 10;
    }
  
    brake() {
      this.speed -= 10;
    }
  }
  
  // Create an object (instance) of the Car class
  let myCar = new Car("red", "Toyota", 0);
  
  // Access and print the object's attributes
  console.log(myCar.color);  // Output: red
  console.log(myCar.model);  // Output: Toyota
  console.log(myCar.speed);  // Output: 0
  
  // Call the object's methods
  myCar.accelerate();
  console.log(myCar.speed);  // Output: 10
  myCar.brake();
  console.log(myCar.speed);  // Output: 0

