// utility types - это встроенные generic типы, которые нам помогают манипулировать типами

// 1. Record<string, unknown> где тип ключа - string, unknown - значение
type Test1 = Record<string, unknown>
    // type Test1 = {[x: string]: unknown}
    type Test2 = {[x: string]: unknown}

    const object: Record<string, number> = {
        a: 5,
        b: 6
    }

// 2. Pick<Object, 'key'>
    // Принимает первым аргументом - объект, вторым аргументом - ключи
    // Результатом вызова generic типа Pick будет:
    // Он достанет из объекта (первого аргумента) все ключи которые были переданы во втором аргументе
    // Построится новый объект, взяв из первого аргумента переданные ключи
    type TestObject = {a: number, b: string, c: boolean}
    type Test3 = Pick<TestObject, 'a' | 'b'>
    // type Test3 = {a: number, b: string}

// 3. Omit<Object, 'key'>
    // Работает по аналогии с Pick, только в отличие от него
    // Omit убирает из объекта все ключи, которые были переданы как второй параметр
    type TestObject2 = {a: number, b: string, c: boolean}
    type Test4 = Omit<TestObject2, 'a' | 'b'>
    // type Test4 = {c: boolean}

// 4. Extract
    // Работает как Pick, только для union'ов
    type TestUnion1 = string | number | boolean
    type TestUnion2 = 'test' | 'test2' | 1 | 2 | false

    type Test5 = Extract<TestUnion1, string>
    // type Test5 = string

    type Test6 = Extract<TestUnion2, string>
    // type Test6 = 'test' | 'test2'

    type Test7 = Extract<TestUnion2, 'test' | number>
    // type Test7 = 'test' | 1 | 2

// 5. Exclude
    // Работает как Omit, только для union'ов

    type Test8 = Exclude<TestUnion1, string>
    // Test8 = number | boolean

    type Test9 = Exclude<TestUnion2, string>
    // Test9 = 1 | 2 | false

    type Test10 = Extract<TestUnion2, 'test' | number>
    // Test10 = 'test2' | false

// 6. NonNullable
// Это в какой-то мере Exclude на null и undefined

type TestUnion3 = string | number | boolean | undefined | null
type TestUnion4 = 'test' | 'test2' | 1 | 2 | false | undefined | null

type Test11 = NonNullable<TestUnion3>
// Test11 = string | number | boolean

type Test12 = NonNullable<TestUnion4>
// Test12 = 'test' | 'test2' | 1 | 2 | false

// 7. Partial
// Он нужен, чтобы сделать некоторые свойства в объекте или массиве опциональными

type Test13 = Partial<{ a: number, b: string }>
// Test13 = { a?: number, b?: string }

type Test14 = Partial<number[]>
// Test14 = number | undefined

// 8. Required
// Противоположность Partial, он делает свойства обязательными

type Test15 = Required<{ a?: number, b: string | undefined | null }>
// Test 15 = { a: number, b: string | undefined | null }

type Test16 = Required<[ 1 | undefined | null, 2?, 'sad'? ]>
// Test 15 = [ 1 | undefined | null, 2, 'sad' ]

// 8. Readonly
// Он превращает какую-либо структуру данных, переданную туда в readonly
// Он работает только поверхностно (shallow)

type Test17 = Readonly<{ a: number, b: string, d: {e: string} }>
// Test17 = { readonly a: number; readonly b: string; readonly d: { e: string } }

// 9. Parameters
// Он достает аргументы
type AnyFunction = (...args: any[]) => any

type FnParams = Parameters<(a: number, b: string, c?: boolean) => void>
// FnParams = [a: number, b: string, c?: boolean | undefined]
// На выходе получается tuple, где наши аргументы функции типизированы

// function wrapper<Fn extends AnyFunction>(fn: Fn) {
//     return function wrapped(...args: Parameters<Fn>) {
//         return fn.apply(null, args)
//     }
// }

const log = (a: number, b?: string) => console.log(a, b)

// const wrappedLog = wrapper(log)
// const wrappedLog: (a: number, b?: string | undefined) => any

// 10. ReturnType
// Он достает значение которое мы возвращаем

type FnReturn1 = ReturnType<() => number>
// FnReturn1 = number

type FnReturn2 = ReturnType<(a: number) => string>
// FnReturn2 = string

//example in react
let store = undefined;
export type RootStore = ReturnType<typeof store.getState>
// мы берем тип того, что вернет нам getState с помощью typeof
// скармливаем ReturnTyp'у и у нас генерируется тип всего store,
// т.е тип всего state который хранится в store

// 11. Awaited
// Если у нас есть Promise и нам нужно из этого Promise достать нужное значение
// Он раскрывает наше значение из Promise

const asyncFn = () => Promise.resolve({ prop1: 5, prop2: 'test'})

type AsyncFnReturnIncorrect = ReturnType<typeof asyncFn>
// type AsyncFnReturnIncorrect = Promise<{ prop1: number, prop2: string}>

type AsyncFnReturn = Awaited<ReturnType<typeof asyncFn>>
// type AsyncFnReturn = { prop1: number, prop2: string}

// 12.


