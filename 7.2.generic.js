var valueFactory = function (x) { return x; };
var myValue = valueFactory(1);
var x = {
    value: 'string'
};
// ------------------------------------------------------
// дублирование кода
var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
// дублирование кода
var ArrayOfString = /** @class */ (function () {
    function ArrayOfString(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    ArrayOfString.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfString;
}());
// нужно так
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
new ArrayOfAnything(['1', '2', '3']);
new ArrayOfAnything([0, 2, 3]);
// ------------------------------------------------------
// тоже самое с функциями
function printString(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printNumber(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printAnything(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printAnything([1, 2, 3]);
printAnything(['1', '2', '3']);
// ------------------------------------------------------
// Создадим функцию заполнения массива
function fillArray(len, elem) {
    return new Array(len).map(function () { return elem; });
}
var arr1 = fillArray(10, '*');
console.log('Array: ', arr1);
var arr = [1, 2, 3, 4, 5];
var sum = arr.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(sum);
