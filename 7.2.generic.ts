const valueFactory = (x: number) => x;
const myValue = valueFactory(1);

type TypeFactory<X> = X;
type MyType = TypeFactory<string>

// ------------------------------------------------------

interface ValueContainer<Value> {
    value: Value
}

type StringContainer = ValueContainer<string>

const x: StringContainer = {
    value: 'string'
}

// ------------------------------------------------------
// дублирование кода

class ArrayOfNumbers {
    constructor(public collection: number[]) {
        this.collection = collection
    }

    get(index: number): number {
        return this.collection[index]
    }
}

// дублирование кода

class ArrayOfString {
    constructor(public collection: string[]) {
        this.collection = collection
    }

    get(index: number): string {
        return this.collection[index]
    }
}

// нужно так

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index]
    }
}

new ArrayOfAnything<string>(['1', '2', '3'])
new ArrayOfAnything<number>([0, 2, 3])

// ------------------------------------------------------
// тоже самое с функциями

function printString(arr: string[]): void {
    for (let i = 0; i < arr.length; i ++) {
        console.log(arr[i])
    }
}

function printNumber(arr: number[]): void {
    for (let i = 0; i < arr.length; i ++) {
        console.log(arr[i])
    }
}

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i ++) {
        console.log(arr[i])
    }
}

printAnything<number>([1, 2, 3])
printAnything<string>(['1', '2', '3'])

// ------------------------------------------------------
// Создадим функцию заполнения массива

function fillArray<T>(len: number, elem: T): T[] {
    return new Array<T>(len).map(() => elem)
}

const arr1 = fillArray<string>(10, '*');
console.log('Array: ', arr1);

// ------------------------------------------------------

interface Array<T> {
    concat(...items: Array<T[] | T>): T[];
    reduce<U>(
        callback: (state: U, element: T, index: number, array: T[]) => U,
        firstState?: U
    ): U;
}

const arr = [1, 2, 3, 4, 5]
const sum = arr.reduce((a: number, b: number): number => {
  return a + b
}, 0)

console.log(sum)

// ------------------------------------------------------

interface Lengthwise {
    length: number;
}

function printLength<T extends Lengthwise>(arg: T): number {
    return arg.length
}

printLength('1')
printLength([1, 2, 3])

// ------------------------------------------------------

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

const myObj = {
    a: 1,
    b: 2,
    c: 3
}
// K === 'a' | 'b' | 'c'

getProperty(myObj, 'a');