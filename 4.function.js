function add(x, y) {
    return x + y;
}
console.log(add(2, 3));
function position(a, b) {
    if (!a && !b) {
        return {
            x: undefined,
            y: undefined
        };
    }
    if (a && !b) {
        return {
            x: a,
            y: undefined,
            "default": a.toString()
        };
    }
    return { x: a, y: b };
}
console.log('Empty: ', position());
console.log('One param: ', position(12));
console.log('One params: ', position(12, 23));
