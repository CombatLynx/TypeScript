function add(x: number, y: number): number {
    return x + y;
}

console.log(add(2, 3));

// Перегрузка функций

interface MyPosition {
    x: number | undefined,
    y: number | undefined,
}

interface MyPositionDefault extends MyPosition {
    default: string
}

function position(): MyPosition
function position(a: number): MyPositionDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {
            x: undefined,
            y: undefined
        }
    }

    if (a && !b) {
        return {
            x: a,
            y: undefined,
            default: a.toString()
        }
    }

    return {x: a, y: b}
}

console.log('Empty: ', position());
console.log('One param: ', position(12));
console.log('One params: ', position(12, 23));