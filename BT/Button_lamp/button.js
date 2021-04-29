class swithButton {
    constructor() {
        this.status = false;
    }

    connectTolamp(lamp) {
        this.lamp = lamp;
    }

    swithOn() {
        this.lamp.turnOn();
        // console.log("den bat");
    }

    swithOff() {
        this.lamp.turnOff();
        // console.log("den tat");
    }

}