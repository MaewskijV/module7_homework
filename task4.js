function Device (name, power) {
    this.name = name;
    this.power = power;
    this.turnOn = false;
}

Device.prototype.getTurnOn = function() {
    this.turnOn = true;
}

Device.prototype.getPower = function() {
    if (this.turnOn) {
        return this.power;
    } else {
        return 0;
    }
}

const laptop = new Device ('HP', 400);
const fridge = new Device ('Marshall', 200);

console.log(laptop.getPower() + fridge.getPower());

laptop.getTurnOn()
console.log(laptop.getPower() + fridge.getPower());

fridge.getTurnOn()
console.log(laptop.getPower() + fridge.getPower());

