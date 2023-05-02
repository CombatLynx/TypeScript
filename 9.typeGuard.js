// type guard - это runtime проверка, которая гарантирует, что значение всегда будет определенного типа
// example 1
function test(value) {
    if (typeof value === "string") {
        value;
    }
    else {
        value;
    }
}
// example 2
var getSaveName = function () {
    var name = localStorage.getItem('name');
    // const name: string | null
    if (name === null) {
        return;
    }
    name;
    // const name: string
    var parsedName = JSON.parse(name);
    // const parsedName: any
    if (typeof parsedName !== 'string') {
        return;
    }
    return parsedName;
    // const parsedName: string
};
var student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};
var json = JSON.stringify(student);
var obj = json;
console.log(JSON.parse(obj));
