var importred =document.createElement('script');
imported.src = 'vehicle.js';
document.head.appendChild(imported);

class Car extends Vehicle {
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers =5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }



    start() {
        if (this.fuel > 0) {
            console.log("engine started");
            return this.started = true
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }

    loadPassenger(num) {
        if (this.passanger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                
            }
        }
    }
    

    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }
}

let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)
myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()
console.log(myCar)

