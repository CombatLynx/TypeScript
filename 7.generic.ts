const arrayOfNumber: Array<number> = [1, 1, 2, 3, 5]
const arrayOfString: Array<string> = [`1`, `1`, `2`, `3`, `5`]

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

console.log(reverse(arrayOfNumber))
console.log(reverse(arrayOfString))

// ----------------------------------------------------------------------

type UserType = {
    firstName: string,
    lastName: string,
    age: number
}

type PhotoType = {
    large: string,
    small: string
}

type ServerResponseType<D> = {
    errorCode: number,
    messages: Array<string>,
    data: D
}

const response1: ServerResponseType<UserType> = {
    errorCode: 1,
    messages: ['1', '2', '3'],
    data: {
        firstName: 'Misha',
        lastName: 'Nefedov',
        age: 24
    }
}

const response2: ServerResponseType<PhotoType> = {
    errorCode: 1,
    messages: ['1', '2', '3'],
    data: {
        large: 'large',
        small: 'small'
    }
}

// ----------------------------------------------------------------------

type Nullable<NT> = null | NT

const initialState = {
    age: 12,
    name: 'Misha',
    user: null as Nullable<UserType>,
    photo: null as Nullable<PhotoType>
}

// Action creators

const AC1 = (age: number) => (
    {
        type: 'SET-AGE',
        age
    } as const)

const AC2 = (firstName: string, lastName: string) => (
    {
        type: 'SET-NAME',
        firstName,
        lastName
    } as const)

type AC1Type = ReturnType<typeof AC1>
type AC2Type = ReturnType<typeof AC2>

const action1: AC1Type = {
    type: 'SET-AGE', // из-за "as const" тип обязательно должны совпадать
    age: 24
}

const action2: AC2Type = {
    type: "SET-NAME", // тут тоже не может быть другого типа
    firstName: 'Misha',
    lastName: 'Nefedov'
}

// Conditional Type - условный тип
// Infer type - подразумевать тип, делать вывод и тд
// extends

type HipHop<T> = T extends 'name' ? UserType :
    T extends 'photo' ? PhotoType : any

let a: HipHop<'name'> = {
    firstName: 'Chi',
    lastName: 'Mich',
    age: 24
}

let b: HipHop<'photo'> = {
    large: 'qwe',
    small: 'zxc'
}

// Если несколько подтипов передаем, то сработают оба, например
// т.е "c" и типа UserType и типа PhotoType

type HipHop2<T> = T extends 'name' ? UserType :
    T extends 'photo' ? PhotoType : any

let c: HipHop2<'name' | 'photo'> = {
    firstName: 'Chi',
    lastName: 'Mich',
    age: 24
}

c = {
    large: 'qwe',
    small: 'zxc'
}

// Напишем свой ReturnType
// Это дженерик, он принимает какой-то тип функции, мы проверяем,
// если это действительно является типом функции, принимает какое-то кол-во аргументов любого типа
// и возвращает какой-то другой тип, тогда ты компилятор додумай (infer) этот тип и запиши в тип переменной R
// и если наш T является функцией, то верни нам R - это тот тип который наша функций возвращает, иначе never

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

// Как получить все типы объекта

const obj = {
    a: {name: 'Misha'},
    b: {age: 24},
    c: {site: {title: 'site'}}
}

// 1 вариант
type SomeType = typeof obj.a | typeof obj.b | typeof obj.c

let obj2: SomeType = {
    age: 25,
    name: 'Chichi'
}

// 2 вариант
// Если T является объектом, который состоит из ключей и значений
// он сам додумает тип для объекта "{name: 'Misha'}" и т.д. и вернет этот тип этого объекта
// он так пробежится по всем значениям a, b, c
type SomeType2<T> = T extends {[key: string]: infer U} ? U : never

let obj3: SomeType2<typeof obj> = {
    name: 'Valera',
    age: 26
}