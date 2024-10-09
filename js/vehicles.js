"use strict";
class Car {
    constructor(make, model, year) {
        this.start = () => console.log("Car Engine started");
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
let myCar = new Car('Haval', 'Jolion', 2023);
console.log(myCar.make); // Affiche: Haval
console.log(myCar.model); // Affiche: jolion
console.log(myCar.year); // Affiche: 2023
myCar.start(); // Affiche: Car Engine started
