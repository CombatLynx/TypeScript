const arrayOfNumber: Array<number> = [1, 1, 2, 3, 5]
const arrayOfString: Array<string> = [`1`, `1`, `2`, `3`, `5`]

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

console.log(reverse(arrayOfNumber))
console.log(reverse(arrayOfString))