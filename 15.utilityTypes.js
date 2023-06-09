// utility types - это встроенные generic типы, которые нам помогают манипулировать типами
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var object = {
    a: 5,
    b: 6
};
// Test14 = number | undefined
var array = [1, 2, 3];
var c = __spreadArray([], array, true);
console.log(c);
