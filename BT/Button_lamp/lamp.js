class ElectricLamp {
    constructor() {
        this.status = false;
    }

    turnOn() {
        this.status = true;
        console.log("den bat");
    }

    turnOff() {
        this.status = false;
        console.log("den tat");
    }

}