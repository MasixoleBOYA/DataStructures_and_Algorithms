class Car {
    constructor(brand, model, ownername, modelyear){
        this.brand = brand;
        this.model = model;
        this.ownerName = ownername;
        this.modelYear = modelyear;

    }
    getInfo(){
        console.log(`The brand name: ${this.brand}`);
        console.log(`The model name: ${this.model}`);
        console.log(`The Owner is: ${this.ownerName}`);
        console.log(`The model year is: ${this.modelYear}`);
    }
}


const car1 = new Car("Honda","NSX","Max",2015);
console.log(car1.getInfo());