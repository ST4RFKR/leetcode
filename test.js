// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   makeSound() {
//     console.log("Some sound");
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   makeSound() {
//     console.log(this.name + ": каже ГАВ - ГАВ");
//   }
// }

// const bobik = new Dog("Бобік");
// bobik.makeSound();
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   introduce() {
//     console.log("my name is " + this.name);
//   }
// }

// class Student extends Person {
//   constructor(name) {
//     super(name);
//   }
//   grade() {
//     console.log("im study");
//   }
// }
// const Bob = new Student("Bob");

// Bob.introduce();
// Bob.grade();
// class Shape {
//   area() {
//     return 0;
//   }
// }
// class Rectangle extends Shape {
//   constructor(width, heigth) {
//     // super();
//     this.width = width;
//     this.heigth = heigth;
//   }
//   area() {
//     return this.width * this.heigth;
//   }
// }
// const r = new Rectangle(5, 2);

// console.log(r.area());

// class Vehicle {
//   constructor(brand) {
//     this.brand = brand;
//   }
//   start() {
//     console.log("Vehicle started");
//   }
// }

// class Car extends Vehicle {
//   constructor(brand, model) {
//     super(brand);
//     this.model = model;
//   }

//   info() {
//     console.log(this.brand + " " + this.model);
//   }
// }
// const car = new Car("BMW", "X3");

// car.info();
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  work() {
    console.log(this.name + " work in " + this.salary);
  }
}
const Anna = new Employee("Anna", 2000);
// Anna.work();

class Manager extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }
  manage() {
    console.log(this.name + " work manager in " + this.salary);
  }
}
const Bella = new Manager("Bella", 5000);
// Bella.manage();
// console.log(Bella.__proto__);
console.log(Employee.prototype);
