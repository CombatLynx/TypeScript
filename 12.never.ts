// never - юнион, у которого нет элементов.
// Представляет из себя невозможный кейс на уровне типизации (т.к юнион с нуля элементами не может существовать)

type Test = string | number | never
// type Test = string | number

// Мы можем любой переменной с любым типом присвоить переменную с типом never
// Но переменной с типом never мы не можем ничего присвоить

// never происходит тогда, когда мы доходим до кейса, который не может никогда произойти

// example1
function example1(value: number | string) {
    if (typeof value === "object") {
        value
        // value: never
    }
}

// example2
function example2(key: 'a' | 'b' | 'c') {
    switch (key) {
        case "a":
            return 'a-key'
        case "b":
            return 'b-key'
        case "c":
            return 'c-key'
        default:
            key
            // key: never, т.к мы никогда не попадем в default
    }
}

// example3, функция которая всегда выкидывает ошибку
function example3() {
    const test = () => {
        throw new Error('test')
    }

    const a = test()
    // const a: never

    console.log(a)
}

// Нафиг он нужен?
// Для доп. проверки компилятором, что какая-то ситуация реально не может произойти, например, в reducer'е

// 1-ый полезный пример: reducer
// Если кто-то добавил новый экшен, но забыли его обработать в switch case, будет ошибка компиляции,
// т.к этот новый кейс попадет в default, а там тип never.
// Будет ошибка что тип экшена не асайнится к типу never

// 2-ой полезный пример:
type FilterTest<T extends string> = T extends 'test' ? never : T

type Test = FilterTest<'asd1' | 'asd2' | 'asd3' | 'test'>
// type Test = 'asd1' | 'asd2' | 'asd3'