// unknown - это аналог any, который также описывает значение любого типа.
// Однако прежде чем совершать какие-то операции над ним - нужно убедиться в его типизации.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// example any
function test(arg) {
    console.log(arg + 5);
    console.log(arg.charCodeAt(0));
    console.log(arg.concat([1, 2, 3]));
    console.log(__assign({}, arg));
}
// example unknown
function test2(arg) {
    if (typeof arg === "number") {
        console.log(arg + 5);
    }
}
test2(1);
