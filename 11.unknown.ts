// unknown - это аналог any, который также описывает значение любого типа.
// Однако прежде чем совершать какие-то операции над ним - нужно убедиться в его типизации.

// example any
function test(arg: any) {
    console.log(arg + 5)
    console.log(arg.charCodeAt(0))
    console.log(arg.concat([1, 2, 3]))
    console.log({...arg})
}

// example unknown
function test2(arg: unknown) {
    if (typeof arg === "number") {
        console.log(arg + 5)
    }
}

// Когда юзать?
// Лучше всегда использовать unknown вместо any
// Результаты JSON.parse(или любая другая десеарилизация в runtime)

// Не будет работать unknown
function wrap<Fn extends (...args: unknown[]) => unknown>(fn: Fn) {
    return function wrapped(...args) {
        return fn.apply(null, args)
    } as Fn
}

wrap((a: number) => a * 2)
// Argument of type '(a: number) => number' is not assignable
// ...
// to parameter of type '(...args: unknown[]) => unknown'
// тут нужно будет использовать any