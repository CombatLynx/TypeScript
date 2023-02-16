var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[".concat(name, "]: Typescript version is ").concat(this.version);
    };
    return Typescript;
}());
// Модификаторы полей: protected, public, private
// Поля с protected доступны внутри своего класса и внутри всех классов, которые наследуются от него
// Поля с private доступны внутри класса, в котором они были определены
// Поля с public доступны везде
var Animal = /** @class */ (function () {
    function Animal(size) {
        this.voice = '';
        this.color = 'black';
        this.size = 10;
        this.size = size;
    }
    Animal.prototype.setSize = function (size) {
        this.size = size;
    };
    Animal.prototype.getSize = function () {
        return this.size;
    };
    Animal.prototype.go = function () {
        console.log('Go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var animal = new Animal(20);
console.log(animal);
animal.setSize(40);
console.log(animal.getSize());
