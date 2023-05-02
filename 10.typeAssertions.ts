// type assertion аналог type guard, но если в tg возвращается булевые переменные,
// ta выкидывают ошибку, если у нас переден аргумент с неправильным типом

// Проблема
function assertString(value: unknown) {
    if (typeof value !== 'string') {
        throw new Error('value must be string')
    }
}

function connectToDb(value: unknown) {
    assertString(value)

    console.log(typeof value)
    // value: unknown
}

// Решение
function assertString2(value: unknown): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value must be string')
    }
}

function connectToDb2(value: unknown) {
    assertString2(value)

    value
    // value: string
}