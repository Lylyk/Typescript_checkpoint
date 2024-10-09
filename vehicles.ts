interface Vehicle {
    make: string;
    model: string;
    year: number;
    start: () => void;
}

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start = () => console.log("Car Engine started");
}

let myCar = new Car('Haval', 'Jolion', 2023);

console.log(myCar.make);  // Affiche: Haval
console.log(myCar.model); // Affiche: jolion
console.log(myCar.year);  // Affiche: 2023

myCar.start(); // Affiche: Car Engine started
