function inheritPrototype(subType, superType) {
    let prototype = Object.create(superType.prototype);
    // console.log(prototype)
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function() {
    console.log(this.name);
}
function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
inheritPrototype(SubType, SuperType);
// SubType.prototype.prototype = SuperType.prototype;
// SubType.prototype.sayName = function () {
//     console.log(false);
// }
console.log(SubType.prototype.sayName == SuperType.prototype.sayName)
SubType.prototype.sayAge = function() {
    console.log(this.age);
}
let newdate =  new SuperType('aaa233');
let inter = new SubType('rouchuan', 22);
// inter.sayAge();
newdate.sayName();
inter.sayName();
// console.log(inter)