class Car {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate(newSpeed: number): void {
        this.speed = this.speed + newSpeed;
    }
}

const MyCar = new Car('Toyota', 100);
MyCar.accelerate(20);
console.log("Print " + MyCar.speed) // After fixing: will print 120
