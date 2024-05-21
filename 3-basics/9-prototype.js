function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  Car.prototype.honk = function() {
    console.log("Honk!");
  };
  
  let myCar = new Car("Toyota", "Corolla");
  myCar.honk(); // Output: Honk!